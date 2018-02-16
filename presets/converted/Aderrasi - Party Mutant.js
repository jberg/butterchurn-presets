define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.6,
		ib_g : 0.0,
		mv_x : 6.4,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 4.8,
		wave_scale : 0.463937,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		ib_size : 0.015,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.6,
		ib_r : 1.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.01,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.1,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 0.3,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 3.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.95,
		wave_a : 100.0,
		ob_g : 1.0,
		ib_a : 0.3,
		wave_b : 0.6,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 0.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.kick = 0;
m.dx_r = 0;
m.dy_r = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_mystery = (m.wave_mystery+(0.25*Math.tan((2.9*m.bass))));
m.q1 = m.wave_mystery;
m.ob_r = (m.ob_r+(0.8*Math.sin(m.q1)));
m.ob_g = (m.ob_g+(0.7*Math.sin(m.q1)));
m.ob_b = (m.ob_b-(0.6*Math.sin(m.q1)));
m.ib_r = (m.ib_r-(0.5*Math.sin(m.q1)));
m.ib_g = (m.ib_g+(0.5*Math.sin(m.q1)));
m.ib_b = (m.ib_b+(0.5*Math.sin(m.q1)));
m.wave_r = (m.wave_r+(((m.ob_r+m.ib_r)*0.5)*Math.sin((1.3*m.time))));
m.wave_g = (m.wave_g+(((m.ib_g+m.ob_g)*0.5)*Math.sin((1.2*m.time))));
m.wave_b = (m.wave_b+(((m.ib_b+m.ob_b)*0.5)*Math.sin((1.1*m.time))));
		m.rkeys = ['zoom','warp','dx','dy','rot','dy_r','dx_r','kick'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.kick = ((above(m.bass_att, m.kick)*2)+((1-above(m.bass_att, m.kick))*(((m.kick-1.3)*0.9)+1.3)));
m.dx_r = (((equal(m.kick, 2)*0.018)*Math.sin((6*m.time)))+((1-equal(m.kick, 2))*m.dx_r));
m.dy_r = (((equal(m.kick, 2)*0.015)*Math.sin((7*m.time)))+((1-equal(m.kick, 2))*m.dy_r));
m.rot = (m.rot+((0.3*(((0.2*Math.sin((0.5-m.rad)))*5)-((0.2*Math.sin((0.25*m.rad)))*5)))*m.kick));
m.dy = (m.dy+(((2*m.dy_r)*0.5)*Math.sin((0.8*m.time))));
m.dx = (m.dx+(((2*m.dx_r)*0.5)*Math.sin(m.time)));
m.warp = (m.warp+ifcond(below(m.kick, 0), (0.5*m.treb), m.q1));
m.zoom = (m.zoom+(0.062*((1.22*Math.cos(((2*m.time)-(2*m.rad))))+(0.5*Math.cos((1.55*m.time))))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_mystery = wave_mystery + 0.25*tan(2.9*bass);\n' + 'q1 = wave_mystery;\n' + 'ob_r = ob_r + 0.8*sin(q1);\n' + 'ob_g = ob_g + 0.7*sin(q1);\n' + 'ob_b = ob_b - 0.6*sin(q1);\n' + 'ib_r = ib_r - 0.5*sin(q1);\n' + 'ib_g = ib_g + 0.5*sin(q1);\n' + 'ib_b = ib_b +0.5*sin(q1);\n' + 'wave_r = wave_r + (ob_r + ib_r)*0.5*sin(1.3*time);\n' + 'wave_g = wave_g + (ib_g + ob_g)*0.5*sin(1.2*time);\n' + 'wave_b = wave_b +  (ib_b + ob_b)*0.5*sin(1.1*time);'),
	'pixel_eqs_str' : ('kick = above(bass_att,kick)*2 + (1-above(bass_att,kick))*((kick-1.3)*0.9+1.3);\n' + 'dx_r = equal(kick,2)*0.018*sin(6*time) + (1-equal(kick,2))*dx_r;\n' + 'dy_r = equal(kick,2)*0.015*sin(7*time) + (1-equal(kick,2))*dy_r;\n' + 'rot = rot + 0.3*(0.2*sin(0.5-rad)*5 - 0.2*sin(0.25*rad)*5) * kick;\n' + 'dy = dy + 2*dy_r * 0.5*sin(0.8*time);\n' + 'dx = dx + 2*dx_r * 0.5*sin(time);\n' + 'warp = warp + if (below(kick,0), 0.5*treb, q1);\n' + 'zoom = zoom + 0.062*(1.22*cos((2*time)-2*rad)+0.5*cos(1.55*time));'),
};

return pmap;
});
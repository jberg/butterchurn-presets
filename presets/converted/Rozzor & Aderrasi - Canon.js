define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.6,
		ib_g : 1.0,
		mv_x : 0.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.463937,
		echo_alpha : 0.5,
		additivewave : 0.0,
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
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.1,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 100.0,
		ob_g : 1.0,
		ib_a : 1.0,
		wave_b : 0.6,
		ib_b : 1.0,
		mv_r : 1.0,
		rating : 2.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.kick = 0;
m.dx_r = 0;
m.dy_r = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_mystery = (m.wave_mystery+(0.25*Math.tan((3*m.bass))));
m.q1 = m.wave_mystery;
m.wave_b = (Math.cos(m.time)+Math.abs(Math.cos(m.time)));
m.wave_g = Math.abs(Math.sin(m.time));
m.wave_r = (((-1*Math.cos(m.time))+Math.abs((-1*Math.cos(m.time))))+(0.2*(Math.cos(Math.sin(m.time))+(Math.abs(Math.cos(Math.sin(m.time)))+Math.cos(Math.sin(m.time))))));
m.ob_r = ifcond(above(m.wave_r, 1), 1, ifcond(above(m.wave_r, 0), Math.abs(m.wave_r), 0));
m.ob_g = ifcond(above(m.wave_g, 1), 1, ifcond(above(m.wave_g, 0), Math.abs(m.wave_g), 0));
m.ob_b = ifcond(above(m.wave_b, 1), 1, ifcond(above(m.wave_b, 0), Math.abs(m.wave_b), 0));
m.ib_g = m.wave_g;
m.ib_r = Math.sin(m.time);
m.kick = ((above(m.bass_att, m.kick)*2)+((1-above(m.bass_att, m.kick))*(((m.kick-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.kick, 2)*0.018)*Math.sin((6*m.time)))+((1-equal(m.kick, 2))*m.dx_r));
m.dy_r = (((equal(m.kick, 2)*0.015)*Math.sin((7*m.time)))+((1-equal(m.kick, 2))*m.dy_r));
m.dy = (m.dy+(((2*m.dy_r)*0.5)*Math.sin((0.8*m.time))));
m.dx = (m.dx+(((2*m.dx_r)*0.5)*Math.sin(m.time)));
m.warp = (m.warp+ifcond(below(m.kick, 0), (0.5*m.treb), 0));
m.q2 = m.kick;
		m.rkeys = ['rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (m.rot+((0.3*(((0.2*Math.sin((1-m.rad)))*5)-((0.2*Math.sin((0.05*m.rad)))*5)))*m.q2));
m.cx = ifcond(above(m.dy, -0.5), (1-(m.rot*2)), (m.rot*m.q2));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_mystery = wave_mystery + 0.25*tan(3*bass);\n' + 'q1 = wave_mystery;\n' + 'wave_b = cos(time)  + abs(cos(time));\n' + 'wave_g = abs(sin(time)) ;\n' + 'wave_r = (-1 * cos(time))  + abs(-1 * cos(time)) + 0.2 * (cos(sin(time))+(abs(cos(sin(time)))+cos(sin(time))));\n' + 'ob_r = if(above(wave_r,1),1,if(above(wave_r,0), abs(wave_r),0));\n' + 'ob_g = if(above(wave_g,1),1,if(above(wave_g,0), abs(wave_g),0));\n' + 'ob_b = if(above(wave_b,1),1,if(above(wave_b,0), abs(wave_b),0));\n' + 'ib_g = wave_g;\n' + 'ib_r = sin(time);\n' + 'kick = above(bass_att,kick)*2 + (1-above(bass_att,kick))*((kick-1.3)*0.96+1.3);\n' + 'dx_r = equal(kick,2)*0.018*sin(6*time) + (1-equal(kick,2))*dx_r;\n' + 'dy_r = equal(kick,2)*0.015*sin(7*time) + (1-equal(kick,2))*dy_r;\n' + 'dy = dy + 2*dy_r * 0.5*sin(0.8*time);\n' + 'dx = dx + 2*dx_r * 0.5*sin(time);\n' + 'warp = warp + if (below(kick,0), 0.5*treb, 0);\n' + 'q2 = kick;'),
	'pixel_eqs_str' : ('rot = rot + 0.3*(0.2*sin(1-rad)*5 - 0.2*sin(0.05*rad)*5) * q2;\n' + 'cx = if(above(dy,-.5),1-rot * 2,rot*q2);'),
};

return pmap;
});
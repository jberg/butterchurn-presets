define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 1.008,
		wave_scale : 0.5,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.01,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.95,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 0.8,
		rating : 0.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.dx_r = 0;
m.dy_r = 0;
m.thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (((m.wave_r+(0.25*Math.sin((1.4*m.time))))+(0.25*Math.sin((2.25*m.time))))+1.5);
m.wave_g = (((m.wave_g+(0.25*Math.sin((1.7*m.time))))+(0.25*Math.sin((2.11*m.time))))+1.5);
m.wave_b = (((m.wave_b+(0.25*Math.sin((1.84*m.time))))+(0.25*Math.sin((2.3*m.time))))+1.5);
m.warp = 0;
m.ib_r = m.wave_g;
m.ib_g = m.wave_b;
m.ib_b = m.wave_r;
m.ob_r = m.wave_b;
m.ob_g = m.wave_r;
m.ob_b = m.wave_g;
m.wave_mystery = (m.wave_mystery+(0.1*m.time));
		m.rkeys = ['zoom','rot','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.rot = ((m.rot+(0.1*Math.sin(m.time)))+(((0.2*m.rad)*Math.cos((1-m.rad)))*m.thresh));
m.zoom = (m.zoom-((3.5*m.bass)*(m.dx_r-m.dy_r)));
m.zoom = (m.zoom-(0.002*m.mid_att));
m.zoomexp = 0.85;
m.rot = (m.rot+(1*(div(div(m.rad,m.bass_att),m.time)*Math.sin(m.time))));
m.zoom = (m.zoom+(1*(div(div(m.rad,m.mid_att),m.time)*Math.cos(m.time))));
m.rot = (m.rot+(0.05*((0.5*Math.sin(m.time))-m.rad)));
m.rot = (m.rot+(0.075*((1*Math.cos(m.time))-m.rad)));
m.zoom = (m.zoom-(above(m.rad, 0.3)*0.02));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.25*sin(1.4*time) + 0.25*sin(2.25*time)+1.5;\n' + 'wave_g = wave_g + 0.25*sin(1.7*time) + 0.25*sin(2.11*time)+1.5;\n' + 'wave_b = wave_b + 0.25*sin(1.84*time) + 0.25*sin(2.3*time)+1.5;\n' + 'warp = 0;\n' + 'ib_r = wave_g;\n' + 'ib_g =wave_b;\n' + 'ib_b = wave_r;\n' + 'ob_r = wave_b;\n' + 'ob_g = wave_r;\n' + 'ob_b=wave_g;\n' + 'wave_mystery = wave_mystery + 0.1*time;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'rot = rot + 0.1*sin(time) + 0.2*rad*cos(1-rad)*thresh;\n' + 'zoom = zoom - ((3.5*bass)*(dx_r-dy_r));\n' + 'zoom = zoom - (0.002*mid_att);\n' + 'zoomexp = 0.85;\n' + 'rot = rot + 1*((rad/bass_att)/time*sin(time));\n' + 'zoom = zoom + 1*((rad/mid_att)/time*cos(time));\n' + 'rot = rot + 0.05*(0.5*sin(time)-rad);\n' + 'rot = rot + 0.075*(1*cos(time)-rad);\n' + 'zoom = zoom - above(rad,0.3)*0.02;'),
};

return pmap;
});
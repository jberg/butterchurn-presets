define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 3.749269,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 1.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 11.202057,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.999996,
		ob_size : 0.01,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 0.1,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.4,
		decay : 1.0,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.2,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 5.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.ing = 0;
m.dx_r = 0;
m.dy_r = 0;
m.thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = ((m.wave_r+(0.25*Math.sin((1.4*m.time))))+(0.25*Math.sin((2.25*m.time))));
m.wave_g = ((m.wave_g+(0.25*Math.sin((1.7*m.time))))+(0.25*Math.sin((2.11*m.time))));
m.wave_b = ((m.wave_b+(0.25*Math.sin((1.84*m.time))))+(0.25*Math.sin((2.3*m.time))));
m.warp = 0;
m.ob_r = (0.3+(0.3*Math.sin((1.56*m.time))));
m.ob_g = (0.3+(0.3*Math.sin((2.15*m.time))));
m.ob_b = (0.3+(0.3*Math.cos((1.4*m.time))));
m.ib_r = (0.3+(0.3*Math.cos((1.83*m.time))));
m.ib_g = (0.3+(0.3*Math.cos((1.02*m.time))));
m.ib_b = (0.3+(0.3*Math.sin((2*m.time))));
m.ing = (2*Math.sin((0.25*m.time)));
m.wave_x = (m.wave_x+(0.7*Math.sin(m.time)));
m.wave_y = (m.wave_y+(0.7*Math.cos(m.time)));
		m.rkeys = ['cy','cx','zoom','rot','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.rot = (m.rot+((0.15*(1-m.rad))*(5*Math.sin(m.time))));
m.zoom = (m.zoom-(0.1*(0.9-m.rad)));
m.cx = (m.cx+(((1*0.25)*Math.sin(m.time))*(0.75*Math.sin(m.time))));
m.cy = (m.cy+(((1*0.25)*Math.cos(m.time))*(0.75*Math.cos(m.time))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.25*sin(1.4*time) + 0.25*sin(2.25*time);\n' + 'wave_g = wave_g + 0.25*sin(1.7*time) + 0.25*sin(2.11*time);\n' + 'wave_b = wave_b + 0.25*sin(1.84*time) + 0.25*sin(2.3*time);\n' + 'warp = 0;\n' + 'ob_r = 0.3 + 0.3*sin(1.56*time);\n' + 'ob_g = 0.3 + 0.3*sin(2.15*time);\n' + 'ob_b = 0.3 + 0.3*cos(1.4*time);\n' + 'ib_r = 0.3 + 0.3*cos(1.83*time);\n' + 'ib_g = 0.3 + 0.3*cos(1.02*time);\n' + 'ib_b = 0.3 + 0.3*sin(2*time);\n' + 'ing = 2*sin(0.25*time);\n' + 'wave_x = wave_x + 0.7*sin(time);\n' + 'wave_y = wave_y + 0.7*cos(time);'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'rot = rot + 0.15*(1-rad)*(5*sin(time));\n' + 'zoom = zoom - 0.1*(0.9-rad);\n' + 'cx = cx + 1*0.25*sin(time)*(0.75*sin(time));\n' + 'cy = cy + 1*0.25*cos(time)*(0.75*cos(time));'),
};

return pmap;
});
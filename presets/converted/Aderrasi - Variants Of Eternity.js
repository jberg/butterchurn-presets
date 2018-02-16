define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 1.28,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.599999,
		wave_scale : 0.01,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.4,
		mv_dy : -0.2,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
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
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
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
m.mv_r = m.wave_r;
m.mv_b = m.wave_b;
m.mv_g = m.wave_g;
		m.rkeys = ['cx','cy','rot','zoom','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.zoom = ((m.zoom-0.03)+(0.06*Math.sin(m.time)));
m.rot = (m.rot+0.15);
m.cy = ((m.cy+0.25)+(0.025*Math.cos(m.time)));
m.cx = ((m.cx+0.25)+(0.025*Math.sin(m.time)));
m.rot = (m.rot-(0.02*Math.sin(((1-m.rad)*((m.time*m.bass_att)*2)))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.25*sin(1.4*time) + 0.25*sin(2.25*time);\n' + 'wave_g = wave_g + 0.25*sin(1.7*time) + 0.25*sin(2.11*time);\n' + 'wave_b = wave_b + 0.25*sin(1.84*time) + 0.25*sin(2.3*time);\n' + 'warp = 0;\n' + 'mv_r = wave_r;\n' + 'mv_b = wave_b;\n' + 'mv_g = wave_g;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'zoom = zoom - 0.03 + 0.06*sin(time);\n' + 'rot = rot + 0.15;\n' + 'cy = cy + 0.25 + 0.025*cos(time);\n' + 'cx = cx + 0.25 + 0.025*sin(time);\n' + 'rot = rot - 0.02*sin((1-rad)*(time*bass_att*2));'),
};

return pmap;
});
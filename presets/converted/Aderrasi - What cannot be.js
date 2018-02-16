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
		wave_scale : 3.749272,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
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
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 2.216706,
		ob_size : 0.0,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.99,
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
		mv_l : 1.0,
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
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.dx_r = 0;
m.dy_r = 0;
m.nx = 0;
m.ny = 0;
m.thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = ((m.wave_r+(0.35*Math.sin((1.4*m.time))))+(0.25*Math.sin((2.5*m.time))));
m.wave_g = ((m.wave_g+(0.35*Math.sin((1.7*m.time))))-(0.25*Math.sin((1.11*m.time))));
m.wave_b = ((m.wave_b+(0.35*Math.sin((1.84*m.time))))+(0.25*Math.sin((2.3*m.time))));
m.warp = 0;
		m.rkeys = ['zoom','dx','dy','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.dy = ((m.dy+m.dy_r)+(below(m.y, 0.5)*0.005));
m.dy = ((m.dy-m.dy_r)-(above(m.y, 0.5)*0.005));
m.dx = (((m.dx+m.dx_r)+(above(m.y, Math.sin(m.time))*0.005))-(below(m.y, (0.8*Math.sin(m.time)))*0.005));
m.dx = (((m.dx+m.dx_r)+(above(m.y, (0.76*Math.sin((1.2*m.time))))*0.005))-(below(m.y, (0.55*Math.sin((2*m.time))))*0.005));
m.nx = (((0.8*m.x)*Math.sin(m.time))-((0.4*m.x)*Math.sin((1.22*m.time))));
m.ny = (((0.8*m.y)*Math.cos(m.time))-((0.4*m.y)*Math.cos((1.4*m.time))));
m.zoom = (m.zoom+ifcond(below(m.rad, 0.4), (0.05-m.rad), 0));
m.zoom = (m.zoom+ifcond(below(m.rad, 0.2), (0.1-m.rad), 0));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.35*sin(1.4*time) + 0.25*sin(2.5*time);\n' + 'wave_g = wave_g + 0.35*sin(1.7*time) - 0.25*sin(1.11*time);\n' + 'wave_b = wave_b + 0.35*sin(1.84*time) + 0.25*sin(2.3*time);\n' + 'warp = 0;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'dy = dy + dy_r +below(y,0.5)*0.005;\n' + 'dy = dy - dy_r -above(y,0.5)*0.005;\n' + 'dx = dx + dx_r+ above(y,sin(time))*0.005 - below(y,0.8*sin(time))*0.005;\n' + 'dx = dx + dx_r+ above(y,0.76*sin(1.2*time))*0.005 - below(y,0.55*sin(2*time))*0.005;\n' + 'nx = 0.8*x * sin(time) - 0.4*x *sin(1.22*time);\n' + 'ny = 0.8*y * cos(time) - 0.4*y *cos(1.4*time);\n' + 'zoom = zoom + if(below(rad,0.4), 0.05-rad, 0);\n' + 'zoom = zoom + if (below(rad,0.2), 0.1-rad, 0);'),
};

return pmap;
});
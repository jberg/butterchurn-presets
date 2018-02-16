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
		wave_scale : 3.072694,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 2.781671,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.741918,
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
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.5,
		decay : 0.99,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 5.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 0.0,
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
m.ing = (2*Math.sin((0.25*m.time)));
m.wave_x = (m.wave_x+(0.0257*Math.sin(m.time)));
m.wave_y = (m.wave_y+(0.0257*Math.cos(m.time)));
		m.rkeys = ['dx','dy','cy','cx','zoom','rot','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.rot = (m.rot+(((above(m.bass, 1)*0.25)*(1-m.rad))*(100*m.dx_r)));
m.zoom = (m.zoom+(0.2*(0.5-m.rad)));
m.cx = (m.cx+(((above(m.bass, 1)*0.25)*Math.sin(m.time))*(100*m.dy_r)));
m.cy = (m.cy+(((above(m.mid, 1)*0.25)*Math.cos(m.time))*(100*m.dy_r)));
m.dy = (m.dy-m.dy_r);
m.dx = (m.dx-m.dx_r);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.25*sin(1.4*time) + 0.25*sin(2.25*time);\n' + 'wave_g = wave_g + 0.25*sin(1.7*time) + 0.25*sin(2.11*time);\n' + 'wave_b = wave_b + 0.25*sin(1.84*time) + 0.25*sin(2.3*time);\n' + 'warp = 0;\n' + 'ob_r = 0.3 + 0.3*sin(1.56*time);\n' + 'ob_g = 0.3 + 0.3*sin(2.15*time);\n' + 'ob_b = 0.3 + 0.3*cos(1.4*time);\n' + 'ing = 2*sin(0.25*time);\n' + 'wave_x = wave_x + 0.0257*sin(time);\n' + 'wave_y = wave_y + 0.0257*cos(time);'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'rot = rot + above(bass,1)*0.25*(1-rad)*(100*dx_r);\n' + 'zoom = zoom + 0.2*(0.5-rad);\n' + 'cx = cx + above(bass,1)*0.25*sin(time)*(100*dy_r);\n' + 'cy = cy + above(mid,1)*0.25*cos(time)*(100*dy_r);\n' + 'dy = dy - dy_r;\n' + 'dx = dx - dx_r;'),
};

return pmap;
});
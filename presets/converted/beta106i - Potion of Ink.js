define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 6.4,
		warpscale : 1.766487,
		brighten : 0.0,
		mv_y : 4.8,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.000158,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.999823,
		ob_size : 0.005,
		wave_smoothing : 0.9,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.6,
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
		wave_mystery : 1.0,
		decay : 0.9,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 3.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.dx_r = 0;
m.dy_r = 0;
m.thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = ((m.wave_r+(0.35*Math.sin((1.14*m.time))))+(0.16*Math.sin((1.5*m.time))));
m.wave_g = ((m.wave_g+(0.36*Math.sin((1.27*m.time))))+(0.15*Math.sin((1.11*m.time))));
m.wave_b = ((m.wave_b+(0.37*Math.sin((1.284*m.time))))+(0.15*Math.sin((1.3*m.time))));
m.warp = 0;
m.ob_r = m.wave_g;
m.ob_b = m.wave_r;
m.ob_g = m.wave_b;
m.ib_r = m.wave_r;
m.ib_b = m.wave_g;
m.ib_g = m.wave_r;
m.ib_size = (m.ib_size+(0.01*m.bass_att));
		m.rkeys = ['sy','sx','dy','dx','zoom','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.15)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.165)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.zoom = (m.zoom-0.06);
m.dx = (m.dx+((0.025*Math.sin(Math.abs((24*m.y))))*Math.sin(m.time)));
m.dy = (m.dy+((0.025*Math.sin(Math.abs((24*m.x))))*Math.cos(m.time)));
m.sx = (m.sx-((0.025*Math.sin(Math.cos((24*m.rad))))*Math.cos(m.time)));
m.sy = (m.sy-((0.025*Math.sin(Math.cos((24*m.rad))))*Math.sin(m.time)));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.35*sin(1.14*time) + 0.16*sin(1.5*time);\n' + 'wave_g = wave_g + 0.36*sin(1.27*time) + 0.15*sin(1.11*time);\n' + 'wave_b = wave_b + 0.37*sin(1.284*time) + 0.15*sin(1.3*time);\n' + 'warp = 0;\n' + 'ob_r = wave_g;\n' + 'ob_b = wave_r;\n' + 'ob_g = wave_b;\n' + 'ib_r = wave_r;\n' + 'ib_b = wave_g;\n' + 'ib_g = wave_r;\n' + 'ib_size = ib_size + 0.01*bass_att;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.15*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.165*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'zoom = zoom - 0.06;\n' + 'dx = dx + 0.025*sin(abs(24*y))*sin(time);\n' + 'dy = dy + 0.025*sin(abs(24*x))*cos(time);\n' + 'sx = sx - 0.025*sin(cos(24*rad))*cos(time);\n' + 'sy = sy - 0.025*sin(cos(24*rad))*sin(time);'),
};

return pmap;
});
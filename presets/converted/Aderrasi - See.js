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
		wave_scale : 0.796897,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.1,
		wave_smoothing : 0.9,
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
		ob_a : 0.1,
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
m.thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = ((m.wave_r+(0.25*Math.sin((1.4*m.time))))+(0.25*Math.sin((2.25*m.time))));
m.wave_g = ((m.wave_g+(0.25*Math.sin((1.7*m.time))))+(0.25*Math.sin((2.11*m.time))));
m.wave_b = ((m.wave_b+(0.25*Math.sin((1.84*m.time))))+(0.25*Math.sin((2.3*m.time))));
m.warp = 0;
m.wave_x = ((m.wave_x+(0.051*Math.sin((1.23*m.time))))-(0.08*Math.sin((0.2*m.time))));
m.wave_y = ((m.wave_y+(0.01*Math.cos((1.24*m.time))))-(0.05*Math.cos((0.1*m.time))));
		m.rkeys = ['sx','sy','dy','dx','zoom','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.zoom = (m.zoom+(0.2*Math.sin(((m.ang*(0.5-m.rad))*m.rad))));
m.dx = (m.dx+(((m.dx_r*5)*((m.rad*Math.sin((m.time+(Math.cos((12*m.ang))*(0.5-m.rad)))))*Math.cos(m.bass)))*Math.sin(m.time)));
m.dy = (m.dy+((m.dy_r*5)*((m.rad*Math.cos((m.time+(Math.sin((12*m.ang))*(0.5-m.rad)))))*Math.sin(m.bass))));
m.sy = (m.sy+(((0.7*m.rad)*Math.cos((2-div(((m.ang*12)*Math.sin(m.time)),m.treb))))*m.dx_r));
m.sx = (m.sx+(((0.7*m.rad)*Math.sin((2-div(((m.ang*12)*Math.cos(m.time)),m.treb))))*m.dy_r));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.25*sin(1.4*time) + 0.25*sin(2.25*time);\n' + 'wave_g = wave_g + 0.25*sin(1.7*time) + 0.25*sin(2.11*time);\n' + 'wave_b = wave_b + 0.25*sin(1.84*time) + 0.25*sin(2.3*time);\n' + 'warp = 0;\n' + 'wave_x = wave_x + 0.051*sin(1.23*time) - 0.08*sin(0.2*time);\n' + 'wave_y = wave_y + 0.01*cos(1.24*time) - 0.05*cos(0.1*time);'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'zoom = zoom + 0.2*sin(ang*(0.5-rad)*rad);\n' + 'dx = dx + dx_r*5*(rad*sin(time+cos(12*ang)*(0.5-rad))*cos(bass))*sin(time);\n' + 'dy = dy + dy_r*5*(rad*cos(time+sin(12*ang)*(0.5-rad))*sin(bass));\n' + 'sy = sy + 0.7*rad*cos(2-(ang*12)*sin(time)/treb)*dx_r;\n' + 'sx = sx + 0.7*rad*sin(2-(ang*12)*cos(time)/treb)*dy_r;'),
};

return pmap;
});
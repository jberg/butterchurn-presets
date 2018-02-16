define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.65,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.044484,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 0.980296,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.005,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.9,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.48,
		decay : 0.95,
		wave_a : 1.704175,
		ob_g : 0.8,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.mv_r = (0.7+(0.3*Math.sin((m.time*0.5683))));
m.mv_b = (0.8+(0.2*Math.sin((m.time*0.7832))));
m.mv_g = (0.82+(0.15*Math.sin((m.time*1.103))));
m.q1 = Math.max((Math.max(m.bass, m.bass_att)-1.15), 0);
m.q2 = Math.max((Math.max(m.treb, m.treb_att)-1.15), 0);
m.rot = (Math.abs((0.05*Math.sin(m.time)))-(1.3*m.q1));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = ((0.4+Math.atan(((Math.atan(m.rad)*1.5)*m.rad)))+(2.5*m.q1));
m.zoomexp = Math.max((10*((1+m.q1)-m.q2)), 0.2);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'mv_r = 0.7 + 0.3*sin(time*0.5683);\n' + 'mv_b = 0.8 + 0.2*sin(time*0.7832);\n' + 'mv_g = 0.82 + 0.15*sin(time*1.103);\n' + 'q1 = max(max(bass,bass_att)-1.15,0);\n' + 'q2 = max(max(treb,treb_att)-1.15,0);\n' + 'rot = abs(0.05*sin(time))-1.3*q1;'),
	'pixel_eqs_str' : ('zoom = 0.4 + atan(atan(rad)*1.5*rad)+2.5*q1;\n' + 'zoomexp= max(10*(1+q1-q2),0.2);'),
};

return pmap;
});
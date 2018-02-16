define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 0.1,
		ib_g : 0.0,
		mv_x : 2.0,
		warpscale : 3.1379,
		brighten : 0.0,
		mv_y : 2.0,
		wave_scale : 1.1704,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0099,
		ob_r : 0.37,
		sy : 1.2571,
		ib_size : 0.0,
		warp : 0.238,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.6092,
		fshader : 0.2,
		wave_r : 0.0,
		ib_r : 0.1,
		echo_zoom : 1.00011,
		ob_size : 0.0,
		wave_smoothing : 0.6839,
		warpanimspeed : 0.9999,
		wave_dots : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.907,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.35,
		invert : 0.0,
		bmotionvectorson : 0.0,
		rot : 0.1399,
		modwavealphaend : 0.95,
		wave_mystery : -0.04,
		decay : 0.982,
		wave_a : 1.22,
		ob_g : 0.46,
		ib_a : 1.0,
		wave_b : 0.9,
		ib_b : 0.3,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = ((m.wave_r+(0.4*Math.sin((m.time*3.14))))+(0.2*m.mid));
m.wave_b = (m.wave_b+(0.2*Math.sin((m.time*1.5))));
m.wave_g = (m.wave_g+(0.2*m.mid));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.4*sin(time*3.14) + (0.2*mid);\n' + 'wave_b = wave_b + 0.2*sin(time*1.5);\n' + 'wave_g = wave_g + 0.2*mid;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.997,
		wave_g : 0.65,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.17,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		sy : 1.0,
		warp : 0.057228,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.000415,
		fshader : 0.0,
		wave_r : 0.65,
		echo_zoom : 2.0,
		wave_smoothing : 0.7,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.006,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		invert : 0.0,
		bmotionvectorson : 0.0,
		rot : -0.08,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 2.8,
		wave_b : 0.65,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.350*((0.60*Math.sin((0.742*m.time)))+(0.40*Math.sin((1.021*m.time))))));
m.wave_g = (m.wave_g+(0.350*((0.60*Math.sin((0.703*m.time)))+(0.40*Math.sin((0.969*m.time))))));
m.wave_b = (m.wave_b+(0.350*((0.60*Math.sin((1.090*m.time)))+(0.40*Math.sin((0.963*m.time))))));
m.rot = (m.rot+(0.010*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.cx = (m.cx+(0.110*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.294*m.time))))));
m.cy = (m.cy+(0.110*((0.60*Math.sin((0.393*m.time)))+(0.40*Math.sin((0.223*m.time))))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.cx = (0.5+(0.3*Math.cos((m.ang+(m.time*0.97)))));
m.cy = (0.5+(0.3*Math.sin((m.ang+(m.time*0.78)))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.350*( 0.60*sin(0.742*time) + 0.40*sin(1.021*time) );\n' + 'wave_g = wave_g + 0.350*( 0.60*sin(0.703*time) + 0.40*sin(0.969*time) );\n' + 'wave_b = wave_b + 0.350*( 0.60*sin(1.090*time) + 0.40*sin(0.963*time) );\n' + 'rot = rot + 0.010*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'cx = cx + 0.110*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );\n' + 'cy = cy + 0.110*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );'),
	'pixel_eqs_str' : ('cx=0.5 + 0.3*cos(ang+time*0.97);\n' + 'cy=0.5 + 0.3*sin(ang+time*0.78);'),
};

return pmap;
});
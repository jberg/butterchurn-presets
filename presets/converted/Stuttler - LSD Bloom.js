define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.5,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 6.0,
		warpscale : 1.734735,
		brighten : 0.0,
		mv_y : 6.0,
		wave_scale : 1.511983,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 0.022167,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.1,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		echo_zoom : 2.0,
		ob_size : 0.01,
		wave_smoothing : 0.34,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.064,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		invert : 0.0,
		bmotionvectorson : 1.0,
		rot : 0.0,
		modwavealphaend : 1.55,
		wave_mystery : 0.4,
		decay : 0.99,
		wave_a : 0.398652,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		rating : 4.0,
		modwavealphastart : 1.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.500*((0.60*Math.sin((0.933*m.time)))+(0.40*Math.sin((1.045*m.time))))));
m.wave_g = (m.wave_g+(0.500*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((0.956*m.time))))));
m.wave_b = (m.wave_b+(0.500*((0.60*Math.sin((0.910*m.time)))+(0.40*Math.sin((0.920*m.time))))));
m.zoom = (m.zoom+(0.013*((0.60*Math.sin((0.339*m.time)))+(0.40*Math.sin((0.276*m.time))))));
m.rot = (m.rot+(0.040*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+(0.07*Math.sin(((m.rad*20)+(m.time*2.5)))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.500*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );\n' + 'wave_g = wave_g + 0.500*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );\n' + 'wave_b = wave_b + 0.500*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );\n' + 'zoom = zoom + 0.013*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );\n' + 'rot = rot + 0.040*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );'),
	'pixel_eqs_str' : ('zoom=zoom+0.07*sin(rad*20+time*2.5);'),
};

return pmap;
});
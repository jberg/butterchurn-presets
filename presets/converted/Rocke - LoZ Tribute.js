define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.2,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.605,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 0.0,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		echo_zoom : 0.999608,
		ob_size : 0.01,
		wave_smoothing : 0.7,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.064,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		invert : 0.0,
		bmotionvectorson : 0.0,
		rot : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.989,
		wave_a : 0.8,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		rating : 5.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.5*((0.6*Math.sin((0.725*m.time)))+(0.4*Math.sin((0.825*m.time))))));
m.wave_g = (m.wave_g+(0.5*((0.6*Math.sin((0.765*m.time)))+(0.4*Math.sin((0.765*m.time))))));
m.wave_b = (m.wave_b+(0.5*((0.6*Math.sin((0.825*m.time)))+(0.4*Math.sin((0.725*m.time))))));
m.zoom = (m.zoom+(0.013*((0.6*Math.sin((0.339*m.time)))+(0.4*Math.sin((0.276*m.time))))));
m.rot = (m.rot+(0.09*((0.6*Math.sin((0.381*m.time)))+(0.4*Math.sin((0.579*m.time))))));
m.decay = (m.decay-(0.01*below(mod(m.frame,5), 1)));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+(0.3*Math.sin(((m.ang*20)+(m.time*2.35)))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.5*(0.6*sin(0.725*time) + 0.4*sin(0.825*time) );\n' + 'wave_g = wave_g + 0.5*(0.6*sin(0.765*time) + 0.4*sin(0.765*time) );\n' + 'wave_b = wave_b + 0.5*(0.6*sin(0.825*time) + 0.4*sin(0.725*time) );\n' + 'zoom = zoom + 0.013*(0.6*sin(0.339*time) + 0.4*sin(0.276*time) );\n' + 'rot = rot + 0.09*(0.6*sin(0.381*time) + 0.4*sin(0.579*time) );\n' + 'decay = decay - 0.01*below(frame%5,1);'),
	'pixel_eqs_str' : ('zoom = zoom + 0.3*sin(ang*20 + time*2.35);'),
};

return pmap;
});
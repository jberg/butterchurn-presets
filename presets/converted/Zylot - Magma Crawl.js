define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.3,
		mv_x : 12.0,
		warpscale : 2.704811,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.0,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		sy : 1.0,
		warp : 2.448628,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		fshader : 0.0,
		wave_r : 0.5,
		echo_zoom : 4.013491,
		wave_smoothing : 0.0,
		warpanimspeed : 3.300382,
		wave_dots : 0.0,
		wave_x : 0.08,
		wave_y : 0.5,
		zoom : 1.01,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		invert : 0.0,
		bmotionvectorson : 0.0,
		rot : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 1.0,
		decay : 0.999,
		wave_a : 0.8,
		wave_b : 0.0,
		rating : 5.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.999999970089;
m.wave_g = Math.sin(m.time);
		m.rkeys = ['dx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = (m.dx+(((m.x+1)*0.001)*-rand(40)));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('decay = .999999970089;\n' + 'wave_g = sin(time);'),
	'pixel_eqs_str' : ('dx = dx + ((x + 1)*.001) * -rand(40);'),
};

return pmap;
});
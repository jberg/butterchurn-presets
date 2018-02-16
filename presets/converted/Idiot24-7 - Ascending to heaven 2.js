define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 19.199995,
		warpscale : 5.725291,
		brighten : 0.0,
		mv_y : 14.4,
		wave_scale : 0.931008,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 0.905286,
		ob_r : 0.0,
		sy : 1.01,
		ib_size : 0.01,
		warp : 0.0662,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 4.778017,
		mv_a : 0.1,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.01,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.47,
		zoom : 1.093507,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.5,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 3.0,
		invert : 0.0,
		rot : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 33.469135,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 0.6,
		rating : 5.0,
		modwavealphastart : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(1*((0.60*Math.sin((0.933*m.time)))+(0.40*Math.sin((1.045*m.time))))));
m.wave_b = (m.wave_b+(1*((1.60*Math.sin((1.900*m.time)))+(0.40*Math.sin((0.956*m.time))))));
m.wave_g = (m.wave_g+(1*((1.50*Math.sin((1.900*m.time)))+(0.40*Math.sin((1*m.time))))));
m.rot = (0.140*Math.sin(m.time));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 1*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );\n' + 'wave_b = wave_b + 1*( 1.60*sin(1.900*time) + 0.40*sin(0.956*time) );\n' + 'wave_g = wave_g +1*(1.50*sin(1.900*time)+.40*sin(1*time) );\n' + 'rot=.140*sin(time);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.8,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.387,
		echo_alpha : 0.4,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 0.122,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 3.4,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.289,
		ob_size : 0.01,
		wave_smoothing : 0.4,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.44,
		zoom : 1.042,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : -0.01,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : -0.02,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.794075,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 1.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.350*((0.60*Math.sin((0.850*m.time)))+(0.40*Math.sin((1.007*m.time))))));
m.wave_g = (m.wave_g+(0.350*((0.60*Math.sin((0.705*m.time)))+(0.40*Math.sin((0.998*m.time))))));
m.wave_b = (m.wave_b+(0.350*((0.60*Math.sin((0.715*m.time)))+(0.40*Math.sin((0.938*m.time))))));
m.rot = (m.rot+(0.003*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.cx = (m.cx+(0.110*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.294*m.time))))));
m.cy = (m.cy+(0.110*((0.60*Math.sin((0.393*m.time)))+(0.40*Math.sin((0.223*m.time))))));
m.warp = (m.warp+(0.231*((0.60*Math.sin((0.324*m.time)))+(0.40*Math.sin((0.347*m.time))))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.350*( 0.60*sin(0.850*time) + 0.40*sin(1.007*time) );\n' + 'wave_g = wave_g + 0.350*( 0.60*sin(0.705*time) + 0.40*sin(0.998*time) );\n' + 'wave_b = wave_b + 0.350*( 0.60*sin(0.715*time) + 0.40*sin(0.938*time) );\n' + 'rot = rot + 0.003*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'cx = cx + 0.110*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );\n' + 'cy = cy + 0.110*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );\n' + 'warp = warp + 0.231*( 0.60*sin(0.324*time) + 0.40*sin(0.347*time) );'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 10.879999,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 11.52,
		wave_scale : 3.001487,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 1.006596,
		ob_size : 0.5,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.2,
		decay : 0.99,
		wave_a : 1.000158,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 0.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (0.5+(0.5*Math.sin((m.time*1.13))));
m.wave_g = (0.5+(0.5*Math.sin((m.time*1.23))));
m.wave_b = (0.5+(0.5*Math.sin((m.time*1.33))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1+((0.05*m.rad)*ifcond(above(m.rad, 0.7), 1, -1)));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = 0.5 + 0.5 *sin(time*1.13);\n' + 'wave_g = 0.5 + 0.5 *sin(time*1.23);\n' + 'wave_b = 0.5 + 0.5 *sin(time*1.33);'),
	'pixel_eqs_str' : ('zoom = 1 +0.05*(rad)* if(above(rad,0.7),1,-1);'),
};

return pmap;
});
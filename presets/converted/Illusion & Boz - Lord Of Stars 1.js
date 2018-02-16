define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.25,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 8.639999,
		wave_scale : 0.385398,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.852771,
		ob_r : 0.0,
		sy : 0.905287,
		ib_size : 0.01,
		warp : 0.010303,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.766484,
		mv_dx : 0.16,
		mv_dy : 0.24,
		mv_a : 0.2,
		fshader : 0.3,
		wave_r : 0.11,
		ib_r : 0.63,
		mv_b : 0.5,
		echo_zoom : 1.0065,
		ob_size : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 0.498315,
		wave_dots : 1.0,
		mv_g : 0.35,
		wave_x : 0.080001,
		wave_y : 0.28,
		zoom : 1.0224,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.04,
		cx : 0.47,
		dy : 0.02,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.23,
		ob_b : 0.0,
		mv_l : 2.0,
		invert : 0.0,
		rot : -0.28,
		wave_thick : 1.0,
		modwavealphaend : 1.2899,
		wave_mystery : -1.0,
		decay : 0.97,
		wave_a : 13.668642,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.360001,
		ib_b : 0.25,
		mv_r : 0.39,
		rating : 0.0,
		modwavealphastart : 0.87,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.138*((0.190*Math.sin((0.633*m.time)))+(0.40*Math.sin((0.245*m.time))))));
m.wave_g = (m.wave_g+(0.355*((0.570*Math.sin((0.370*m.time)))+(0.40*Math.sin((0.156*m.time))))));
m.wave_b = (m.wave_b+(0.322*((0.601*Math.sin((0.740*m.time)))+(0.40*Math.sin((0.120*m.time))))));
m.dx = (m.dx+(0.03*Math.sin(m.bass)));
m.dy = (m.dy+(0.01*Math.sin(m.bass_att)));
		m.rkeys = ['cx','rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (m.rot+(0.06*m.rad));
m.cx = (m.cx+div(m.rad,12));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.138*( 0.190*sin(0.633*time) + 0.40*sin(0.245*time) );\n' + 'wave_g = wave_g + 0.355*( 0.570*sin(0.370*time) + 0.40*sin(0.156*time) );\n' + 'wave_b = wave_b + 0.322*( 0.601*sin(0.740*time) + 0.40*sin(0.120*time) );\n' + 'dx = dx + 0.03 * sin (bass);\n' + 'dy = dy + 0.01 * sin (bass_att);'),
	'pixel_eqs_str' : ('rot = rot + 0.06 * rad;\n' + 'cx = cx + rad/12;'),
};

return pmap;
});
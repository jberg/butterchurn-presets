define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.6,
		mv_x : 12.0,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 2.72,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		sy : 1.0,
		warp : 1.42,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		fshader : 0.0,
		wave_r : 0.6,
		echo_zoom : 2.0,
		wave_smoothing : 0.77,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		wave_x : 0.5,
		wave_y : 0.47,
		zoom : 1.046,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		invert : 0.0,
		bmotionvectorson : 0.0,
		rot : 0.02,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.97,
		wave_a : 3.5,
		wave_b : 0.6,
		rating : 5.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.400*((0.60*Math.sin((0.933*m.time)))+(0.40*Math.sin((1.045*m.time))))));
m.wave_g = (m.wave_g+(0.400*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((0.956*m.time))))));
m.wave_b = (m.wave_b+(0.400*((0.60*Math.sin((0.910*m.time)))+(0.40*Math.sin((0.920*m.time))))));
m.zoom = (m.zoom+(0.023*((0.60*Math.sin((0.339*m.time)))+(0.40*Math.sin((0.276*m.time))))));
m.rot = (m.rot+(0.030*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.cx = (m.cx+(0.070*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.294*m.time))))));
m.cy = (m.cy+(0.070*((0.60*Math.sin((0.393*m.time)))+(0.40*Math.sin((0.223*m.time))))));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+(0.27*Math.sin(((m.time*1.55)+(m.rad*5)))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.400*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );\n' + 'wave_g = wave_g + 0.400*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );\n' + 'wave_b = wave_b + 0.400*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );\n' + 'zoom = zoom + 0.023*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );\n' + 'rot = rot + 0.030*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'cx = cx + 0.070*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );\n' + 'cy = cy + 0.070*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );'),
	'pixel_eqs_str' : ('zoom=zoom+0.27*sin(time*1.55+rad*5);'),
};

return pmap;
});
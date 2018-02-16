define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.57,
		mv_x : 12.0,
		warpscale : 3.138,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.691672,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.001992,
		sy : 1.004987,
		warp : 0.0243,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		fshader : 0.0,
		wave_r : 0.0,
		echo_zoom : 2.0,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		wave_x : 0.65,
		wave_y : 0.5,
		zoom : 1.0003,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : -0.001,
		darken_center : 0.0,
		cy : 0.11,
		invert : 0.0,
		bmotionvectorson : 0.0,
		rot : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 4.0,
		wave_b : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q = 0;
m.du = 0;
m.dv = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.250*((0.60*Math.sin((10.937*m.time)))+(0.40*Math.sin((1.470*m.time))))));
m.wave_g = (m.wave_g+(0.300*((0.60*Math.sin((11.344*m.time)))+(0.40*Math.sin((1.041*m.time))))));
m.wave_b = (m.wave_b+(0.250*((0.60*Math.sin((21.251*m.time)))+(0.40*Math.sin((1.355*m.time))))));
m.rot = (m.rot+(0.004*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.cx = (m.cx+(0.110*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.294*m.time))))));
m.cy = (m.cy+(0.110*((0.60*Math.sin((0.393*m.time)))+(0.40*Math.sin((0.223*m.time))))));
m.decay = (m.decay-(0.01*equal(mod(m.frame,6), 0)));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.du = ((m.x-m.cx)*2);
m.dv = ((m.y-m.cy)*2);
m.q = (0.01*pow(((m.du*m.du)+(m.dv*m.dv)), 1.5));
m.dx = (m.q*m.du);
m.dy = (m.q*m.dv);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.250*( 0.60*sin(10.937*time) + 0.40*sin(1.470*time) );\n' + 'wave_g = wave_g + 0.300*( 0.60*sin(11.344*time) + 0.40*sin(1.041*time) );\n' + 'wave_b = wave_b + 0.250*( 0.60*sin(21.251*time) + 0.40*sin(1.355*time) );\n' + 'rot = rot + 0.004*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'cx = cx + 0.110*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );\n' + 'cy = cy + 0.110*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );\n' + 'decay = decay - 0.01*equal(frame%6,0);'),
	'pixel_eqs_str' : ('du = (x-cx)*2;\n' + 'dv = (y-cy)*2;\n' + 'q = 0.01*pow(du*du+dv*dv,1.5);\n' + 'dx = q*du;\n' + 'dy = q*dv;'),
};

return pmap;
});
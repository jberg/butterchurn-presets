define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		mv_x : 12.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 2.448587,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		sy : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		fshader : 0.0,
		wave_r : 0.5,
		echo_zoom : 2.0,
		wave_smoothing : 0.9,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		wave_x : 0.4999,
		wave_y : 0.4999,
		zoom : 1.0,
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
		wave_mystery : 0.0,
		decay : 0.900001,
		wave_a : 5.053452,
		wave_b : 0.5,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.3*Math.sin((m.time*0.222))));
m.wave_g = (m.wave_g+(0.3*Math.sin((m.time*0.123))));
m.wave_b = (m.wave_b+(0.3*Math.sin((m.time*0.444))));
m.decay = (0.9+(0.1*Math.sin((m.time*0.01))));
		m.rkeys = ['dx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = (m.dx-(0.08*Math.tan((m.time+(m.x*47)))));
m.dy = (0.01*Math.sin(((-m.time*0.22)+(m.y+0.5))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + .3*sin(time*.222);\n' + 'wave_g = wave_g + .3*sin(time*.123);\n' + 'wave_b = wave_b + .3*sin(time*.444);\n' + 'decay = .9 + .1*sin(time*.01);'),
	'pixel_eqs_str' : ('dx = dx - .08*tan(time + (x)*47);\n' + 'dy = .01*sin((-time*.22 + (y+.5)));'),
};

return pmap;
});
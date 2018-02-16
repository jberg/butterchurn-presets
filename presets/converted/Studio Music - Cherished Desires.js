define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.01,
		mv_x : 9.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.969133,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.8195,
		ob_r : 0.5,
		sy : 0.819545,
		ib_size : 0.01,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.0567,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.7,
		wave_r : 0.5,
		ib_r : 0.01,
		mv_b : 1.0,
		echo_zoom : 2.947994,
		ob_size : 0.01,
		wave_smoothing : 0.666,
		warpanimspeed : 2.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.5393,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.95,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.01,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.02,
		wave_mystery : 1.0E-4,
		decay : 0.98,
		wave_a : 1.3965,
		ob_g : 0.01,
		ib_a : 0.95,
		wave_b : 0.5,
		ib_b : 0.5,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 1.3799,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = (m.bass*0.5);
m.wave_g = (m.treb*0.5);
m.wave_b = (m.mid*0.5);
m.decay = 0.99;
m.rot = (m.rot+(0.040*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.zoom = Math.max(0.98, Math.min((0.15+(0.8*m.bass_att)), 1.75));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1.2+(m.rad*0.1));
m.zoomexp = (1-(1*Math.sin(((m.rad*m.time)*100))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'wave_r = bass*.5;\n' + 'wave_g = treb*.5;\n' + 'wave_b = mid*.5;\n' + 'decay = .99;\n' + 'rot = rot + 0.040*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'zoom=max(0.98, min(0.15+0.8*bass_att, 1.75 ));'),
	'pixel_eqs_str' : ('zoom = 1.2+rad*.1;\n' + 'zoomexp =1 - 1*sin(rad*time*100);'),
};

return pmap;
});
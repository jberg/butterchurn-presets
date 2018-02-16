define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.0,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		echo_zoom : 2.0,
		ob_size : 0.01,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		wave_x : 0.07,
		wave_y : 0.5,
		zoom : 1.0,
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
		wave_mystery : -0.44,
		decay : 0.98,
		wave_a : 0.8,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.zoomlv = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.dx = (m.dx-0.001);
m.dy = (m.dy-0.001);
m.warp = 0;
m.wave_r = ((m.wave_r+(0.2*Math.sin((m.time*1.33))))+(m.bass*0.3));
m.wave_g = ((m.wave_g+(0.2*Math.sin(m.time)))+(m.treb*0.3));
m.wave_b = ((m.wave_b+(0.2*Math.sin((m.time*0.988))))+(m.mid*0.3));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoomlv = ((0.1*Math.sin(((m.ang*1000)+m.time)))+0.05);
m.zoom = (m.zoom+m.zoomlv);
m.dx = m.zoomlv;
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('dx = dx - .001;\n' + 'dy = dy - .001;\n' + 'warp = 0;\n' + 'wave_r = wave_r + .2*sin(time*1.33)+bass*.3;\n' + 'wave_g = wave_g + .2*sin(time)+treb*.3;\n' + 'wave_b = wave_b + .2*sin(time*.988)+mid*.3;'),
	'pixel_eqs_str' : ('zoomlv = .1*sin(ang*1000+time)+.05;\n' + 'zoom = zoom + zoomlv;\n' + 'dx = zoomlv;'),
};

return pmap;
});
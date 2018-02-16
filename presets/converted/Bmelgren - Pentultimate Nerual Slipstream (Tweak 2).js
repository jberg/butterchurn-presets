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
		wave_scale : 0.880224,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.074097,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.25,
		echo_zoom : 3.007504,
		ob_size : 0.01,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		invert : 0.0,
		bmotionvectorson : 0.0,
		rot : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.5,
		decay : 0.95,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		rating : 5.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.ray = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = ((m.wave_r+(0.5*Math.sin((m.time*333))))+(m.bass*0.3));
m.wave_g = ((m.wave_g+(0.5*Math.sin((m.time*222))))+(m.treb*0.3));
m.wave_b = ((m.wave_b+(0.5*Math.sin((m.time*111))))+(m.mid*0.3));
m.rot = (0.4*Math.sin((m.mid_att*0.05)));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.ray = (pow(m.rad, 1.8)+0.05);
m.zoom = (((div(m.ray,m.rad)*1.4)+(0.3*Math.sin((m.ang*(m.bass*5)))))+(m.bass*0.2));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'wave_r = wave_r + .5*sin(time*333) + bass*.3;\n' + 'wave_g = wave_g + .5*sin(time*222) + treb*.3;\n' + 'wave_b = wave_b + .5*sin(time*111) + mid*.3;\n' + 'rot = .4*sin(mid_att*.05);'),
	'pixel_eqs_str' : ('ray = pow(rad,1.8)+.05;\n' + 'zoom = (ray/rad)*1.4 + .3*sin(ang*(bass*5))+(bass*.2);'),
};

return pmap;
});
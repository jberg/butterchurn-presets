define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 1.28,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 1.248,
		wave_scale : 0.011046,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : -0.06,
		mv_dy : -0.026,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 0.999608,
		ob_size : 0.01,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.9,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.42,
		decay : 1.0,
		wave_a : 0.8,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = (m.bass_att*0.3);
m.wave_g = (m.treb_att*0.3);
m.wave_b = (m.mid_att*0.3);
m.ob_r = (0.5+(0.5*Math.sin((m.time*5.12))));
m.ob_b = (0.5+(0.5*Math.sin((m.time*6.112))));
m.ob_g = (0.5+(0.5*Math.sin((m.time*7.212))));
m.q1 = ((m.zoom+(pow((m.bass+m.bass_att), 3)*0.005))-0.02);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.q1+((m.rad*Math.sin((m.ang*25)))*0.05));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'wave_r = bass_att*.3;\n' + 'wave_g = treb_att*.3;\n' + 'wave_b = mid_att*.3;\n' + 'ob_r = 0.5+0.5*sin(time*5.12);\n' + 'ob_b = 0.5+0.5*sin(time*6.112);\n' + 'ob_g = 0.5+0.5*sin(time*7.212);\n' + 'q1 = zoom + pow((bass+bass_att),3)*.005-.02;'),
	'pixel_eqs_str' : ('zoom =q1+ rad*sin(ang*25)*.05;'),
};

return pmap;
});
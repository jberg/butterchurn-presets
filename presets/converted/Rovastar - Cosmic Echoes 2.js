define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.84,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.130388,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		echo_zoom : 2.215847,
		ob_size : 0.5,
		wave_smoothing : 0.54,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		wave_x : 0.0,
		wave_y : 0.5,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
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
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.9,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		rating : 5.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.treb_thresh = 0;
m.blue_aim = 0;
m.treb_on = 0;
m.green = 0;
m.green_aim = 0;
m.red = 0;
m.red_aim = 0;
m.blue = 0;
m.bass_thresh = 0;
m.swapcolour = 0;
m.bass_on = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.4)*0.85)+1.4)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.5)*0.75)+1.5)));
m.bass_on = above(m.bass_thresh, 1.8);
m.treb_on = above(m.treb_thresh, 1.9);
m.swapcolour = (m.bass_on-m.treb_on);
m.red_aim = ifcond(equal(m.swapcolour, 1), 1, ifcond(equal(m.swapcolour, 0), 1, 0));
m.green_aim = ifcond(equal(m.swapcolour, 1), 0, ifcond(equal(m.swapcolour, 0), 0.5, 0.25));
m.blue_aim = ifcond(equal(m.swapcolour, 1), 0, ifcond(equal(m.swapcolour, 0), 0, 1));
m.red = (m.red+((m.red_aim-m.red)*ifcond(equal(m.swapcolour, 1), 0.65, 0.45)));
m.green = (m.green+((m.green_aim-m.green)*0.5));
m.blue = (m.blue+((m.blue_aim-m.blue)*ifcond(equal(m.swapcolour, 1), 0.45, 0.65)));
m.wave_r = m.red;
m.wave_g = m.green;
m.wave_b = m.blue;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dy = ifcond(above(m.y, 0.5), div(Math.sin((0.5-m.y)),10), div(log10(div(1,m.y)),35));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.4)*0.85+1.4);\n' + 'treb_thresh = above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.5)*0.75+1.5);\n' + 'bass_on = above(bass_thresh,1.8);\n' + 'treb_on = above(treb_thresh,1.9);\n' + 'swapcolour = bass_on - treb_on;\n' + 'red_aim = if(equal(swapcolour,1),1,if(equal(swapcolour,0),1,0));\n' + 'green_aim = if(equal(swapcolour,1),0,if(equal(swapcolour,0),0.5,0.25));\n' + 'blue_aim = if(equal(swapcolour,1),0,if(equal(swapcolour,0),0,1));\n' + 'red = red + (red_aim - red)*if(equal(swapcolour,1),0.65,0.45);\n' + 'green = green + (green_aim - green)*0.5;\n' + 'blue = blue + (blue_aim - blue)*if(equal(swapcolour,1),0.45,0.65);\n' + 'wave_r = red;\n' + 'wave_g = green;\n' + 'wave_b = blue;'),
	'pixel_eqs_str' : ('dy = if(above(y,0.5),sin(0.5-y)/10, log10(1/y)/35);'),
};

return pmap;
});
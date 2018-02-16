define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.6,
		ib_g : 0.0,
		mv_x : 12.0,
		warpscale : 0.408391,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.3697,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.6999,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.0,
		wave_smoothing : 0.75,
		warpanimspeed : 53.523884,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.0,
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
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.9,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.8,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 5.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.treb_thresh = 0;
m.q1 = 0;
m.blue_aim = 0;
m.q2 = 0;
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
m.q1 = div(((m.bass_att+m.mid_att)+m.treb_att),3);
m.q2 = (m.time+1000);
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.4)*0.95)+1.4)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.5)*0.85)+1.2)));
m.bass_on = above(m.bass_thresh, 1.9);
m.treb_on = above(m.treb_thresh, 1.9);
m.swapcolour = (m.bass_on-m.treb_on);
m.red_aim = ifcond(equal(m.swapcolour, 1), 1, ifcond(equal(m.swapcolour, 0), 0.9, 0.7));
m.green_aim = ifcond(equal(m.swapcolour, 1), 0.7, ifcond(equal(m.swapcolour, 0), 0.3, 0.6));
m.blue_aim = ifcond(equal(m.swapcolour, 1), 0, ifcond(equal(m.swapcolour, 0), 0.2, 0.8));
m.red = (m.red+((m.red_aim-m.red)*0.5));
m.green = (m.green+((m.green_aim-m.green)*0.5));
m.blue = (m.blue+((m.blue_aim-m.blue)*0.5));
m.wave_r = m.red;
m.wave_g = m.green;
m.wave_b = m.blue;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dy = ((-0.1*(m.q1-1))*Math.log((2-Math.abs(((m.y*2)-1.8)))));
m.dy = ((below(m.dy, 0.02)*m.dy)-0.02);
m.dy = (m.dy+(0.01*(Math.sin((((m.x*m.q2)*0.483)+((m.y*m.q2)*1.238)))+Math.sin((((m.x*m.q2)*1.612)+((m.y*m.q2)*0.648))))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('q1 = (bass_att + mid_att + treb_att) /3;\n' + 'q2 = time + 1000;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.4)*0.95+1.4);\n' + 'treb_thresh = above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.5)*0.85+1.2);\n' + 'bass_on = above(bass_thresh,1.9);\n' + 'treb_on = above(treb_thresh,1.9);\n' + 'swapcolour = bass_on - treb_on;\n' + 'red_aim = if(equal(swapcolour,1),1,if(equal(swapcolour,0),0.9,0.7));\n' + 'green_aim = if(equal(swapcolour,1),0.7,if(equal(swapcolour,0),0.3,0.6));\n' + 'blue_aim = if(equal(swapcolour,1),0,if(equal(swapcolour,0),0.2,0.8));\n' + 'red = red + (red_aim - red)*0.5;\n' + 'green = green + (green_aim - green)*0.5;\n' + 'blue = blue + (blue_aim - blue)*0.5;\n' + 'wave_r = red;\n' + 'wave_g = green;\n' + 'wave_b = blue;'),
	'pixel_eqs_str' : ('dy = -0.1*(q1-1)*log(2-(abs(y*2 - 1.8)));\n' + 'dy = below(dy,0.02)*dy - 0.02;\n' + 'dy = dy + 0.01*(sin((x*q2*0.483) + (y*q2*1.238)) + sin((x*q2*1.612) + (y*q2*0.648)));'),
};

return pmap;
});
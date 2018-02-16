define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.1,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.220618,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.811409,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.97059,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.591235,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		fshader : 0.0,
		wave_r : 0.7,
		ib_r : 0.25,
		echo_zoom : 0.999607,
		ob_size : 0.0,
		wave_smoothing : 0.72,
		warpanimspeed : 0.608037,
		wave_dots : 0.0,
		wave_x : 0.5,
		wave_y : 0.24,
		zoom : 1.00952,
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
		wave_mystery : -0.4,
		decay : 0.98,
		wave_a : 5.053452,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		rating : 0.0,
		modwavealphastart : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.vol = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.vol = div((((m.bass*5)+(m.mid*3))+(m.treb*2)),20);
m.wave_g = ((m.wave_g+div(m.vol,10))+(0.1*Math.sin((3.21*m.time))));
m.wave_r = (m.wave_r+div(m.vol,10));
m.wave_b = div(m.vol,10);
m.dy = ((m.dy-div(m.vol,30))+(0.0015*Math.sin((0.56*m.time))));
m.sx = (m.sx-div(m.vol,50));
m.wave_x = (m.wave_x+div(m.vol,50));
		m.rkeys = ['rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.q1 = above(0.5, m.y);
m.q2 = bor(above(m.x, 0.55), above(0.45, m.x));
m.q3 = (((pow((m.rad+0.95), 4)-1)*0.1)*(m.y+0.1));
m.rot = ifcond(bor(m.q1, m.q2), m.q3, m.rot);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('vol = (bass*5 + mid * 3 + treb*2)/20;\n' + 'wave_g = wave_g + vol/10 + 0.1*sin(3.21*time);\n' + 'wave_r = wave_r + vol/10;\n' + 'wave_b = vol/10;\n' + 'dy = dy - vol/30 + 0.0015*sin(0.56*time);\n' + 'sx = sx - vol/50;\n' + 'wave_x = wave_x + vol/50;'),
	'pixel_eqs_str' : ('q1 = above(0.5,y);\n' + 'q2 = bor(above(x,0.55),above(0.45,x));\n' + 'q3 = (pow(rad+0.95,4)-1)*0.1*(y+0.1);\n' + 'rot = if(bor(q1,q2),q3,rot);'),
};

return pmap;
});
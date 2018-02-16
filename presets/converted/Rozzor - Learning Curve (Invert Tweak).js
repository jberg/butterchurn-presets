define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.074093,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.3,
		sy : 1.0,
		ib_size : 0.025,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.01,
		ob_size : 0.015,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.7,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.001837,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.2,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 1.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.0,
		wave_mystery : 0.0,
		decay : 0.96,
		wave_a : 0.793875,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 1.0,
		mv_r : 0.0,
		rating : 2.0,
		modwavealphastart : 1.000001,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.a = 0;
m.vol_now = 0;
m.sinbeat = 0;
m.vol_mean = 0;
m.beat = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.vol_now = ((0.4*m.bass)+(0.1*((m.bass_att+m.treb)+m.mid)));
m.vol_mean = ifcond(equal(mod(m.frame,50), 0), (m.vol_mean-(0.5*(m.vol_mean-m.vol_now))), (0.1*((m.vol_mean*9)+m.vol_now)));
m.beat = ifcond(above(m.vol_now, (1.15*m.vol_mean)), 1, 0);
m.sinbeat = Math.sin((m.beat*(m.vol_now-m.vol_mean)));
m.wave_b = (Math.cos(m.time)+Math.abs(Math.cos(m.time)));
m.wave_g = Math.abs(Math.sin(m.time));
m.wave_r = (((-1*Math.cos(m.time))+Math.abs((-1*Math.cos(m.time))))+(0.2*(Math.cos(Math.sin(m.time))+(Math.abs(Math.cos(Math.sin(m.time)))+Math.cos(Math.sin(m.time))))));
m.ib_r = ifcond(above(m.wave_r, 1), 1, ifcond(above(m.wave_r, 0), Math.abs(m.wave_r), 0));
m.ib_g = ifcond(above(m.wave_g, 1), 1, ifcond(above(m.wave_g, 0), Math.abs(m.wave_g), 0));
m.ib_b = ifcond(above(m.wave_b, 1), 1, ifcond(above(m.wave_b, 0), Math.abs(m.wave_b), 0));
m.ob_r = (1-ifcond(above(m.wave_r, 1), 1, ifcond(above(m.wave_r, 0), Math.abs(m.wave_r), 0)));
m.ob_g = (1-ifcond(above(m.wave_g, 1), 1, ifcond(above(m.wave_g, 0), Math.abs(m.wave_g), 0)));
m.ob_b = (1-ifcond(above(m.wave_b, 1), 1, ifcond(above(m.wave_b, 0), Math.abs(m.wave_b), 0)));
m.q1 = (m.sinbeat+0.35);
m.wave_mystery = m.vol_now;
m.monitor = m.sinbeat;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.a = pow(1.02, pow(1, ((m.rad*2)-1)));
m.dx = ((((m.x-0.5)*m.a)+0.5)-m.x);
m.dy = ((((m.y-0.5)*m.a)+0.5)-m.y);
m.zoom = (m.q1+m.x);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'vol_now =  .4 * bass + 0.1 * (bass_att + treb + mid);\n' + 'vol_mean =  if(equal(frame%50,0),vol_mean - 0.5 * (vol_mean-vol_now),0.1 * (vol_mean * 9 + vol_now));\n' + 'beat = if(above(vol_now,1.15 * vol_mean),1,0);\n' + 'sinbeat =sin(beat * (vol_now-vol_mean));\n' + 'wave_b = cos(time)  + abs(cos(time));\n' + 'wave_g = abs(sin(time)) ;\n' + 'wave_r = (-1 * cos(time))  + abs(-1 * cos(time)) + 0.2 * (cos(sin(time))+(abs(cos(sin(time)))+cos(sin(time))));\n' + 'ib_r = if(above(wave_r,1),1,if(above(wave_r,0), abs(wave_r),0));\n' + 'ib_g = if(above(wave_g,1),1,if(above(wave_g,0), abs(wave_g),0));\n' + 'ib_b = if(above(wave_b,1),1,if(above(wave_b,0), abs(wave_b),0));\n' + 'ob_r = 1 - if(above(wave_r,1),1,if(above(wave_r,0), abs(wave_r),0));\n' + 'ob_g = 1 - if(above(wave_g,1),1,if(above(wave_g,0), abs(wave_g),0));\n' + 'ob_b = 1 - if(above(wave_b,1),1,if(above(wave_b,0), abs(wave_b),0));\n' + 'q1 = sinbeat+.35 ;\n' + 'wave_mystery = vol_now;\n' + 'monitor = sinbeat;'),
	'pixel_eqs_str' : ('a = pow(1.02, pow(1, rad * 2 - 1));\n' + 'dx = (x - .5) * a + .5 - x;\n' + 'dy = (y - .5) * a + .5 - y;\n' + 'zoom = q1 +  x;'),
};

return pmap;
});
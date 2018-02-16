define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.285751,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 8.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 0.35,
		echo_zoom : 0.999609,
		ob_size : 0.005,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.35,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.990099,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 0.35,
		rating : 3.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q8 = 0;
m.oldq8 = 0;
m.q8 = 0;
m.q1 = (rand(2)+2);
		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.ib_r = (0.5+(0.50*((0.60*Math.sin((0.814*m.time)))+(0.40*Math.sin((1.011*m.time))))));
m.ib_g = (0.5+(0.5*Math.sin((m.time*1.476))));
m.ib_b = (0.5+(0.5*Math.sin((1.374*m.time))));
m.ob_r = m.ib_r;
m.ob_g = m.ib_g;
m.ob_b = m.ib_b;
m.q8 = (m.oldq8+(0.001*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.wave_a = 0;
m.ib_a = 1;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = div(Math.sin(div((1000+Math.sin(m.q8)),m.y)),200);
m.dy = div(Math.cos(div((1000+Math.sin(m.q8)),m.x)),200);
m.rot = ((m.dy*100)*m.dx);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('q8=0;\n' + 'q1 = rand(2)+2;'),
	'frame_eqs_str' : ('warp=0;\n' + 'ib_r = 0.5+0.50*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );\n' + 'ib_g = 0.5+0.5*sin(time*1.476);\n' + 'ib_b = 0.5+0.5*sin(1.374*time);\n' + 'ob_r = ib_r;\n' + 'ob_g=ib_g;\n' + 'ob_b=ib_b;\n' + 'q8 =oldq8+ 0.001*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 = q8;\n' + 'wave_a = 0;\n' + 'ib_a =1;'),
	'pixel_eqs_str' : ('dx = sin((1000+sin(q8))/y)/200;\n' + 'dy = cos((1000+sin(q8))/x)/200;\n' + 'rot = dy*100*dx;'),
};

return pmap;
});
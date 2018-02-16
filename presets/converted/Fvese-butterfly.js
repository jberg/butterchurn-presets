define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.6,
		ib_g : 0.0,
		mv_x : 3.2,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 23.039986,
		wave_scale : 1.0007,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.2,
		sy : 1.0,
		ib_size : 0.015,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 0.6,
		ib_r : 0.0,
		mv_b : 0.7,
		echo_zoom : 0.9996,
		ob_size : 0.015,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.8,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.970105,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.75,
		wave_mystery : 0.0101,
		decay : 0.98,
		wave_a : 0.8,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.6,
		ib_b : 0.2,
		mv_r : 0.95,
		rating : 3.5,
		modwavealphastart : 1.489999,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.350*((0.60*Math.sin((0.823*m.time)))+(0.40*Math.sin((0.916*m.time))))));
m.wave_g = (m.wave_g+(0.350*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((1.023*m.time))))));
m.wave_b = (m.wave_b+(0.350*((0.60*Math.sin((0.808*m.time)))+(0.40*Math.sin((0.949*m.time))))));
m.cx = (m.cx+(0.110*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.294*m.time))))));
m.cy = (m.cy+(0.110*((0.60*Math.sin((0.393*m.time)))+(0.40*Math.sin((0.223*m.time))))));
m.mv_r = (m.wave_r+(0.350*((0.60*Math.sin((0.823*m.time)))+(0.40*Math.sin((0.916*m.time))))));
m.mv_g = (m.wave_g+(0.350*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((1.023*m.time))))));
m.mv_b = (m.wave_b+(0.350*((0.60*Math.sin((0.808*m.time)))+(0.40*Math.sin((0.949*m.time))))));
m.mv_l = 0.500;
m.mv_x = 3.4;
m.mv_y = 23.26;
m.zoom = (-m.zoom-((m.bass_att+0.5)*0.01));
		m.rkeys = ['sy'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.sy = (m.sy+(0.07*Math.sin(((m.rad*18)+(m.time*9)))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.350*( 0.60*sin(0.823*time) + 0.40*sin(0.916*time) );\n' + 'wave_g = wave_g + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(1.023*time) );\n' + 'wave_b = wave_b + 0.350*( 0.60*sin(0.808*time) + 0.40*sin(0.949*time) );\n' + 'cx = cx + 0.110*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );\n' + 'cy = cy + 0.110*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );\n' + 'mv_r= wave_r + 0.350*( 0.60*sin(0.823*time) + 0.40*sin(0.916*time) );\n' + 'mv_g= wave_g + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(1.023*time) );\n' + 'mv_b= wave_b + 0.350*( 0.60*sin(0.808*time) + 0.40*sin(0.949*time) );\n' + 'mv_l=0.500;\n' + 'mv_x =3.4;\n' + 'mv_y = 23.26;\n' + 'zoom=-zoom-(bass_att+0.5)*0.01;'),
	'pixel_eqs_str' : ('sy=sy+0.07*sin(rad*18 + time*9);'),
};

return pmap;
});
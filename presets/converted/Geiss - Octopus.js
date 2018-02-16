define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.15,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.8817,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 0.076,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.01,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.02,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
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
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.99,
		wave_a : 2.426125,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.35,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(1.000*((0.60*Math.sin((1.517*m.time)))+(0.40*Math.sin((1.580*m.time))))));
m.wave_g = (m.wave_g+(1.000*((0.60*Math.sin((1.088*m.time)))+(0.40*Math.sin((1.076*m.time))))));
m.wave_b = (m.wave_b+(1.000*((0.60*Math.sin((1.037*m.time)))+(0.40*Math.sin((0.922*m.time))))));
m.rot = (m.rot+(0.040*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.cx = (m.cx+(0.110*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.294*m.time))))));
m.cy = (m.cy+(0.110*((0.60*Math.sin((0.393*m.time)))+(0.40*Math.sin((0.223*m.time))))));
m.q1 = Math.cos((1.41*m.time));
m.q2 = (m.time+(0.3*Math.sin((m.time*1.47))));
		m.rkeys = ['zoom','rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (m.rot+(0.05*Math.sin((((m.rad*13.5)+(m.q2*1.3))+(m.q*1.31)))));
m.zoom = (m.zoom+(0.05*Math.sin(((((m.ang*10.0)+(m.rad*7.5))+(m.q2*1.63))+m.q))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 1.000*( 0.60*sin(1.517*time) + 0.40*sin(1.580*time) );\n' + 'wave_g = wave_g + 1.000*( 0.60*sin(1.088*time) + 0.40*sin(1.076*time) );\n' + 'wave_b = wave_b + 1.000*( 0.60*sin(1.037*time) + 0.40*sin(0.922*time) );\n' + 'rot = rot + 0.040*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'cx = cx + 0.110*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );\n' + 'cy = cy + 0.110*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );\n' + 'q1=cos(1.41*time);\n' + 'q2=time + 0.3*sin(time*1.47);'),
	'pixel_eqs_str' : ('rot=rot+0.05*sin(rad*13.5 + q2*1.3 + q*1.31);\n' + 'zoom=zoom+0.05*sin(ang*10.0 + rad*7.5 + q2*1.63 + q);'),
};

return pmap;
});
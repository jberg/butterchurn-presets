define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 2.400007,
		wave_scale : 1.053731,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.072135,
		ob_r : 0.0,
		sy : 1.232392,
		ib_size : 0.05,
		warp : 0.198054,
		red_blue : 0.0,
		wave_mode : 3.0,
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
		echo_zoom : 1.006596,
		ob_size : 0.0,
		wave_smoothing : 0.36,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.903947,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.02,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : -0.5,
		decay : 0.925,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.5,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 2.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q7 = 0;
m.q8 = 0;
m.oldq8 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (0.5+(0.5*Math.sin((1.123*m.time))));
m.wave_g = (0.5+(0.5*Math.sin((m.time*1.576))));
m.wave_b = (0.5+(0.5*Math.cos((m.time*1.465))));
m.q8 = (m.oldq8+(0.0005*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.ib_r = (0.5+(0.5*Math.sin((1.123*m.q8))));
m.ib_g = (0.5+(0.5*Math.sin((m.q8*1.576))));
m.ib_b = (0.5+(0.5*Math.cos((m.q8*1.465))));
m.q7 = (0.0001*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps));
m.ob_size = 0.95;
m.monitor = m.q8;
		m.rkeys = ['dy','dx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = ((0.1*pow(-m.ang, 3))-(1.18*Math.sin(m.ang)));
m.zoom = (((2*Math.sin(-m.rad))+1.3)+Math.sin(m.rad));
m.dx = (m.dx+(0.09*Math.sin((m.q8*0.785))));
m.dy = (m.dy+(0.09*Math.sin((m.q8*0.675))));
m.zoom = (m.zoom+m.q7);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = 0.5+0.5*sin(1.123*time);\n' + 'wave_g = 0.5+0.5*sin(time*1.576);\n' + 'wave_b = 0.5+0.5*cos(time*1.465);\n' + 'q8 =  oldq8+ 0.0005*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 = q8;\n' + 'ib_r = 0.5+0.5*sin(1.123*q8);\n' + 'ib_g = 0.5+0.5*sin(q8*1.576);\n' + 'ib_b = 0.5+0.5*cos(q8*1.465);\n' + 'q7 = 0.0001*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'ob_size = 0.95;\n' + 'monitor = q8;'),
	'pixel_eqs_str' : ('rot=0.1*pow(-ang,3)-1.18*sin(ang);\n' + 'zoom=2*sin(-rad)+1.3+ sin(rad);\n' + 'dx = dx + 0.09*sin(q8*0.785);\n' + 'dy = dy + 0.09*sin(q8*0.675);\n' + 'zoom = zoom +q7;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.504,
		wave_g : 0.5,
		ib_g : 1.0,
		mv_x : 12.799995,
		warpscale : 0.438651,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.311604,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.990099,
		ob_r : 0.0,
		sy : 0.990099,
		ib_size : 0.05,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 0.999994,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.999592,
		ob_size : 0.1,
		wave_smoothing : 0.45,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.000156,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.1,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.5,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : -0.5,
		decay : 0.9,
		wave_a : 100.0,
		ob_g : 0.6,
		ib_a : 0.1,
		wave_b : 0.5,
		ib_b : 1.0,
		mv_r : 1.0,
		rating : 5.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = ((m.wave_r+(0.5*Math.sin((1.2*m.frame))))+(0.3*Math.sin((1.9*m.frame))));
m.wave_g = ((m.wave_g+(0.7*Math.sin((1.1*m.frame))))+(0.4*Math.cos((1.6*m.frame))));
m.wave_b = ((m.wave_b+(0.2*Math.sin((1.3*m.frame))))+(0.4*Math.sin((2*m.frame))));
		m.rkeys = ['warp','zoom','rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (m.rot+div((((0.5+(0.1*Math.sin(m.bass)))-m.rad)*pow(m.bass, 3)),50));
m.zoom = (m.zoom+(((0.5+(0.3*Math.tan((3*m.bass_att))))-m.rad)*(Math.cos(pow(m.rad, 2.4))+(0.2*m.mid_att))));
m.warp = (m.warp+ifcond(above(m.bass, 1.34), ((0.5*((0.5+(0.1*Math.sin(m.bass)))-m.rad))*(Math.cos(pow(m.rad, 2.4))+(5*m.bass_att))), 0));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.5*sin(1.2*frame) + 0.3*sin(1.9*frame);\n' + 'wave_g = wave_g + 0.7*sin(1.1*frame) + 0.4*cos(1.6*frame);\n' + 'wave_b = wave_b + 0.2*sin(1.3*frame) + 0.4*sin(2*frame);'),
	'pixel_eqs_str' : ('rot=rot + (0.5 + 0.1*sin(bass)-rad)*pow(bass,3)/50;\n' + 'zoom= zoom + (0.5 + 0.3*tan(3*bass_att)-rad)*(cos(pow(rad,2.4))+(0.2*mid_att));\n' + 'warp = warp + if (above(bass,1.34), 0.5*(0.5+ 0.1*sin(bass)-rad)*(cos(pow(rad,2.4))+(5*bass_att)), 0);'),
};

return pmap;
});
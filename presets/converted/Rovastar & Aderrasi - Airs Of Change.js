define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.591233,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.5,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.35,
		echo_zoom : 0.999994,
		ob_size : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.35,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 0.5,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.2,
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 10.444094,
		ob_g : 0.1,
		ib_a : 0.5,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 0.35,
		rating : 0.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q8 = 0;
m.oldq8 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.q8 = (m.oldq8+(0.003*(((((div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 5),m.fps))+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 4),m.fps))+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 3),m.fps))+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 2),m.fps))+div(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)),m.fps))));
m.oldq8 = m.q8;
m.wave_r = ((m.wave_r+(0.35*Math.sin((4*m.time))))+(0.15*Math.sin((2.5*m.time))));
m.wave_g = ((m.wave_g+(0.35*Math.sin((3.7*m.time))))+(0.15*Math.sin((2.11*m.time))));
m.wave_b = ((m.wave_b+(0.35*Math.sin((3.84*m.time))))+(0.15*Math.sin((2.3*m.time))));
m.ib_r = m.wave_r;
m.ib_g = m.wave_g;
m.ib_b = m.wave_b;
		m.rkeys = ['rot','zoom','dy','dx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = (m.dx+((0.03975*pow((m.rad*m.rad), div(4,(m.x*2))))*Math.sin(m.q8)));
m.dy = (m.dy+((0.03975*pow((m.rad*m.rad), div(4,(m.x*2))))*Math.cos(m.q8)));
m.zoom = (m.zoom-((0.125*pow(m.rad, (m.x*6)))*Math.cos((m.ang*6))));
m.rot = (m.rot-((0.25*(((0.75*Math.sin((1.25*m.q8)))*pow(m.rad, div(1,m.x)))*Math.sin((1.45*m.q8))))*Math.sin(m.q8)));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('q8 = oldq8 +0.003*(((pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,5)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,4)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,3)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,2)/fps) +(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att)/fps));\n' + 'oldq8 = q8;\n' + 'wave_r = wave_r + 0.35*sin(4*time) + 0.15*sin(2.5*time);\n' + 'wave_g = wave_g + 0.35*sin(3.7*time) + 0.15*sin(2.11*time);\n' + 'wave_b = wave_b + 0.35*sin(3.84*time) + 0.15*sin(2.3*time);\n' + 'ib_r = wave_r;\n' + 'ib_g = wave_g;\n' + 'ib_b = wave_b;'),
	'pixel_eqs_str' : ('dx = dx + 0.03975*pow(rad*rad,4/(x*2))*sin(q8);\n' + 'dy = dy + 0.03975*pow(rad*rad,4/(x*2))*cos(q8);\n' + 'zoom = zoom - 0.125*pow(rad,x*6)*cos(ang*6);\n' + 'rot = rot - 0.25*(0.75*sin(1.25*q8)*pow(rad,1/x)*sin(1.45*q8))*sin(q8);'),
};

return pmap;
});
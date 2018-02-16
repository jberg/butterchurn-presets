define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.6,
		ib_g : 0.25,
		mv_x : 24.986328,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 20.03064,
		wave_scale : 2.905229,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 0.0,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 2.630064,
		mv_dx : 0.064545,
		mv_dy : 0.109009,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.6,
		ib_r : 0.25,
		mv_b : 0.816156,
		echo_zoom : 1.047463,
		ob_size : 0.0,
		wave_smoothing : 0.6,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.098993,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.031,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.035858,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.3,
		decay : 0.981,
		wave_a : 0.9,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.6,
		ib_b : 0.25,
		mv_r : 0.816156,
		rating : 5.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q5_residual = 0;
m.q8 = 0;
m.oldq8 = 0;
m.bass_thresh = 0;
m.q6_residual = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.400*((0.60*Math.sin((0.933*m.time)))+(0.40*Math.sin((1.045*m.time))))));
m.wave_g = (m.wave_g+(0.100*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((0.956*m.time))))));
m.wave_b = (m.wave_b+(0.100*((0.60*Math.sin((0.910*m.time)))+(0.40*Math.sin((0.920*m.time))))));
m.mv_r = m.wave_r;
m.mv_b = m.wave_b;
m.mv_g = m.wave_g;
m.q8 = (m.oldq8+(0.0003*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.q5_residual = (((equal(m.bass_thresh, 2)*0.0064)*Math.sin((m.q8*5)))+((1-equal(m.bass_thresh, 2))*m.q5_residual));
m.q6_residual = (((equal(m.bass_thresh, 2)*0.0048)*Math.sin((m.q8*6)))+((1-equal(m.bass_thresh, 2))*m.q6_residual));
m.dx = m.q5_residual;
m.dy = m.q6_residual;
m.q1 = (0.03*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps));
m.monitor = m.q1;
m.mv_a = (m.bass-1.2);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = ((0.9+(0.1*m.q1))+(m.rad*0.1));
m.zoomexp = (2*m.zoom);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.400*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );\n' + 'wave_g = wave_g + 0.100*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );\n' + 'wave_b = wave_b + 0.100*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );\n' + 'mv_r = wave_r;\n' + 'mv_b = wave_b;\n' + 'mv_g = wave_g;\n' + 'q8 =oldq8+ 0.0003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 = q8;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'q5_residual = equal(bass_thresh,2)*0.0064*sin(q8*5) + (1-equal(bass_thresh,2))*q5_residual;\n' + 'q6_residual = equal(bass_thresh,2)*0.0048*sin(q8*6) + (1-equal(bass_thresh,2))*q6_residual;\n' + 'dx=q5_residual ;\n' + 'dy=q6_residual ;\n' + 'q1 = 0.03*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'monitor = q1;\n' + 'mv_a = bass-1.2;'),
	'pixel_eqs_str' : ('zoom = 0.9 + 0.1*q1 + rad*0.1;\n' + 'zoomexp = 2*zoom;'),
};

return pmap;
});
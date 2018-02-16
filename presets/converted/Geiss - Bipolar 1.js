define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.998,
		wave_g : 0.45,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.17037,
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
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.9,
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
		rot : 0.006,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 4.4,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.dy_residual = 0;
m.dx_residual = 0;
m.bass_thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.100*((0.60*Math.sin((0.933*m.time)))+(0.40*Math.sin((1.045*m.time))))));
m.wave_g = (m.wave_g+(0.050*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((0.956*m.time))))));
m.decay = (m.decay-(0.01*equal(mod(m.frame,40), 0)));
m.rot = (m.rot+(0.01*Math.sin((m.time*0.113))));
m.rot = (m.rot+(0.01*Math.sin((m.time*0.533))));
m.rot = (m.rot+(0.02*Math.sin((m.time*-0.323))));
m.dx = (m.dx+m.dx_residual);
m.dy = (m.dy+m.dy_residual);
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.dx_residual = (((equal(m.bass_thresh, 2)*0.0072)*Math.sin((m.time*7)))+((1-equal(m.bass_thresh, 2))*m.dx_residual));
m.dy_residual = (((equal(m.bass_thresh, 2)*0.0054)*Math.sin((m.time*9)))+((1-equal(m.bass_thresh, 2))*m.dy_residual));
		m.rkeys = ['rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (0.9615+(m.rad*0.1));
m.rot = ((m.rot*3)*(1-pow(((m.rad*2)-1), 2)));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.100*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );\n' + 'wave_g = wave_g + 0.050*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );\n' + 'decay = decay - 0.01*equal(frame%40,0);\n' + 'rot = rot + 0.01*sin(time*0.113);\n' + 'rot = rot + 0.01*sin(time*0.533);\n' + 'rot = rot + 0.02*sin(time*-0.323);\n' + 'dx = dx + dx_residual;\n' + 'dy = dy + dy_residual;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'dx_residual = equal(bass_thresh,2)*0.0072*sin(time*7) + (1-equal(bass_thresh,2))*dx_residual;\n' + 'dy_residual = equal(bass_thresh,2)*0.0054*sin(time*9) + (1-equal(bass_thresh,2))*dy_residual;'),
	'pixel_eqs_str' : ('zoom=0.9615+rad*0.1;\n' + 'rot = rot * 3*(1-pow(rad*2-1,2));'),
};

return pmap;
});
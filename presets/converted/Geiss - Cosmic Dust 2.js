define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 3.138,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.694,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 0.263,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		echo_zoom : 1.16936,
		ob_size : 0.01,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.053,
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
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 3.299999,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.8,
		ib_b : 0.25,
		rating : 5.0,
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
m.wave_r = (m.wave_r+(0.650*((0.60*Math.sin((1.437*m.time)))+(0.40*Math.sin((0.970*m.time))))));
m.wave_g = (m.wave_g+(0.650*((0.60*Math.sin((1.344*m.time)))+(0.40*Math.sin((0.841*m.time))))));
m.wave_b = (m.wave_b+(0.650*((0.60*Math.sin((1.251*m.time)))+(0.40*Math.sin((1.055*m.time))))));
m.rot = (m.rot+(0.010*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.cx = (m.cx+(0.210*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.294*m.time))))));
m.cy = (m.cy+(0.210*((0.60*Math.sin((0.393*m.time)))+(0.40*Math.sin((0.223*m.time))))));
m.dx = (m.dx+(0.010*((0.60*Math.sin((0.234*m.time)))+(0.40*Math.sin((0.277*m.time))))));
m.dy = (m.dy+(0.010*((0.60*Math.sin((0.284*m.time)))+(0.40*Math.sin((0.247*m.time))))));
m.decay = (m.decay-(0.01*equal(mod(m.frame,6), 0)));
m.dx = (m.dx+m.dx_residual);
m.dy = (m.dy+m.dy_residual);
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.dx_residual = (((equal(m.bass_thresh, 2)*0.016)*Math.sin((m.time*7)))+((1-equal(m.bass_thresh, 2))*m.dx_residual));
m.dy_residual = (((equal(m.bass_thresh, 2)*0.012)*Math.sin((m.time*9)))+((1-equal(m.bass_thresh, 2))*m.dy_residual));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.650*( 0.60*sin(1.437*time) + 0.40*sin(0.970*time) );\n' + 'wave_g = wave_g + 0.650*( 0.60*sin(1.344*time) + 0.40*sin(0.841*time) );\n' + 'wave_b = wave_b + 0.650*( 0.60*sin(1.251*time) + 0.40*sin(1.055*time) );\n' + 'rot = rot + 0.010*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'cx = cx + 0.210*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );\n' + 'cy = cy + 0.210*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );\n' + 'dx = dx + 0.010*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );\n' + 'dy = dy + 0.010*( 0.60*sin(0.284*time) + 0.40*sin(0.247*time) );\n' + 'decay = decay - 0.01*equal(frame%6,0);\n' + 'dx = dx + dx_residual;\n' + 'dy = dy + dy_residual;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'dx_residual = equal(bass_thresh,2)*0.016*sin(time*7) + (1-equal(bass_thresh,2))*dx_residual;\n' + 'dy_residual = equal(bass_thresh,2)*0.012*sin(time*9) + (1-equal(bass_thresh,2))*dy_residual;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
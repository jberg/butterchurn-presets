define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.769339,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 0.28,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
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
		zoom : 1.135,
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
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 7.9,
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
m.wave_b = (m.wave_b+Math.min(1, Math.max(0, ((m.bass_att-1)*1.5))));
m.wave_r = (m.wave_b*0.4);
m.wave_g = (m.wave_b*0.4);
m.zoom = (m.zoom+(0.013*((0.60*Math.sin((0.339*m.time)))+(0.40*Math.sin((0.276*m.time))))));
m.rot = (m.rot+(0.040*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.cx = (m.cx+(0.005*((0.60*Math.sin((0.471*m.time)))+(0.40*Math.sin((0.297*m.time))))));
m.cy = (m.cy+(0.005*((0.60*Math.sin((0.379*m.time)))+(0.40*Math.sin((0.351*m.time))))));
m.dx = (m.dx+(0.009*((0.60*Math.sin((0.234*m.time)))+(0.40*Math.sin((0.277*m.time))))));
m.dx = (m.dx+m.dx_residual);
m.dy = (m.dy+m.dy_residual);
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2.5)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.4)*0.98)+1.4)));
m.dx_residual = (((equal(m.bass_thresh, 2.5)*0.016)*Math.sin((m.time*7)))+((1-equal(m.bass_thresh, 2.5))*m.dx_residual));
m.dy_residual = (((equal(m.bass_thresh, 2.5)*0.012)*Math.sin((m.time*9)))+((1-equal(m.bass_thresh, 2.5))*m.dy_residual));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+(0.1*m.rad));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_b = wave_b + min(1,max(0,(bass_att-1)*1.5));\n' + 'wave_r = wave_b*0.4;\n' + 'wave_g = wave_b*0.4;\n' + 'zoom = zoom + 0.013*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );\n' + 'rot = rot + 0.040*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'cx = cx + 0.005*( 0.60*sin(0.471*time) + 0.40*sin(0.297*time) );\n' + 'cy = cy + 0.005*( 0.60*sin(0.379*time) + 0.40*sin(0.351*time) );\n' + 'dx = dx + 0.009*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );\n' + 'dx = dx + dx_residual;\n' + 'dy = dy + dy_residual;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2.5 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.4)*0.98+1.4);\n' + 'dx_residual = equal(bass_thresh,2.5)*0.016*sin(time*7) + (1-equal(bass_thresh,2.5))*dx_residual;\n' + 'dy_residual = equal(bass_thresh,2.5)*0.012*sin(time*9) + (1-equal(bass_thresh,2.5))*dy_residual;'),
	'pixel_eqs_str' : ('zoom = zoom + 0.1*rad;'),
};

return pmap;
});
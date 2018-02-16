define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 1.0,
		mv_x : 8.0,
		warpscale : 100.0,
		brighten : 0.0,
		mv_y : 1.92,
		wave_scale : 0.8619,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0201,
		ib_size : 0.05,
		warp : 0.263,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.208145,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.0,
		ib_r : 1.0,
		mv_b : 0.0,
		echo_zoom : 1.006489,
		ob_size : 0.0,
		wave_smoothing : 0.126,
		warpanimspeed : 1.53,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.020642,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.04,
		wave_thick : 0.0,
		modwavealphaend : 1.15,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.9681,
		ob_g : 0.0,
		ib_a : 0.26,
		wave_b : 0.0,
		ib_b : 1.0,
		mv_r : 0.0,
		rating : 0.0,
		modwavealphastart : 0.55,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.dy_residual = 0;
m.dx_residual = 0;
m.bass_thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.rot = (m.rot+(0.030*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.479*m.time))))));
m.cx = (m.cx+(0.110*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.294*m.time))))));
m.cy = (m.cy+(0.110*((0.60*Math.sin((0.393*m.time)))+(0.40*Math.sin((0.223*m.time))))));
m.zoom = ((m.zoom+0.05)+(0.05*Math.sin((m.time*0.133))));
m.decay = (m.decay-(0.01*mod(m.frame,2)));
m.dx = (m.dx+m.dx_residual);
m.dy = (m.dy+m.dy_residual);
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.dx_residual = (((equal(m.bass_thresh, 2)*0.016)*Math.sin((m.time*7)))+((1-equal(m.bass_thresh, 2))*m.dx_residual));
m.dy_residual = (((equal(m.bass_thresh, 2)*0.012)*Math.sin((m.time*9)))+((1-equal(m.bass_thresh, 2))*m.dy_residual));
m.q1 = m.dx_residual;
m.q2 = m.dy_residual;
m.wave_r = (0.444*Math.sin((0.118*m.time)));
m.wave_g = (0.901*Math.sin((0.568*m.time)));
m.wave_b = (0.111*Math.sin((0.972*m.time)));
m.ib_r = (m.wave_g+(0.189*Math.sin((0.111*m.time))));
m.ib_g = Math.sin(div(m.wave_g,2));
m.ib_b = (0.345*Math.sin((0.888*m.time)));
m.ib_size = (0.065+(0.014*m.bass));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1-(((((m.zoom*m.rad)*Math.sin(m.time))*(m.q1+m.q2))*Math.cos(((m.rad*20)*Math.sin((m.time*0.5)))))*10));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('rot = rot + 0.030*( 0.60*sin(0.381*time) + 0.40*sin(0.479*time) );\n' + 'cx = cx + 0.110*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );\n' + 'cy = cy + 0.110*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );\n' + 'zoom=zoom+0.05+0.05*sin(time*0.133);\n' + 'decay=decay-0.01*(frame%2);\n' + 'dx = dx + dx_residual;\n' + 'dy = dy + dy_residual;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'dx_residual = equal(bass_thresh,2)*0.016*sin(time*7) + (1-equal(bass_thresh,2))*dx_residual;\n' + 'dy_residual = equal(bass_thresh,2)*0.012*sin(time*9) + (1-equal(bass_thresh,2))*dy_residual;\n' + 'q1=dx_residual;\n' + 'q2=dy_residual;\n' + 'wave_r = 0.444 * sin (0.118 * time);\n' + 'wave_g = 0.901 * sin (0.568 * time);\n' + 'wave_b = 0.111 * sin (0.972 * time);\n' + 'ib_r = wave_g + 0.189 * sin (0.111 * time);\n' + 'ib_g = sin (wave_g / 2);\n' + 'ib_b = 0.345 * sin (0.888 * time);\n' + 'ib_size = 0.065 + (0.014 * bass);'),
	'pixel_eqs_str' : ('zoom=1-zoom*rad*sin(time)*(q1+q2)*cos(rad*20*sin(time*.5))*10;'),
};

return pmap;
});
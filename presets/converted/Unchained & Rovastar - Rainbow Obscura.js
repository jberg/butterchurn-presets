define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.4,
		ib_g : 0.0,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.040271,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 4.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.4,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : -0.19,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : -0.1,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.95,
		wave_mystery : 0.0,
		decay : 0.985,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.4,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.85,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.shift = 0;
m.rot_residual = 0;
m.net_effect = 0;
m.treb_effect = 0;
m.bass_thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_x = (0.01*rand(100));
m.wave_r = (1+Math.sin((-m.wave_x*3.1415)));
m.wave_g = Math.abs(Math.sin(((2*m.wave_x)*3.1415)));
m.wave_b = Math.sin((m.wave_x*3.1415));
m.treb_effect = ifcond(above(m.treb_att, 1.4), pow(0.99, m.treb_att), 1);
m.net_effect = ifcond(above(m.bass_att, (0.8*m.treb_att)), 1, m.treb_effect);
m.zoom = m.net_effect;
m.rot = (m.rot+m.rot_residual);
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.shift = (Math.tan((m.time*7))-0.05);
m.shift = ifcond(above(m.shift, 0), 0, ifcond(below(m.shift, -0.1), -0.1, m.shift));
m.rot_residual = ifcond(equal(m.bass_thresh, 2), m.shift, m.rot_residual);
		m.rkeys = ['zoom','rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (m.rot+ifcond(equal(Math.sin(m.ang), 0), -m.rot, (0.05*Math.sin(((m.rad*4)*Math.sin((m.time*0.8)))))));
m.zoom = (m.zoom+(m.rot*Math.sin((m.time*2))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'wave_x = 0.01*rand(100);\n' + 'wave_r = 1 + sin(-wave_x*3.1415);\n' + 'wave_g = abs(sin(2*wave_x*3.1415));\n' + 'wave_b = sin(wave_x*3.1415);\n' + 'treb_effect = if(above(treb_att,1.4),pow(0.99,treb_att),1);\n' + 'net_effect = if(above(bass_att,0.8*treb_att),1,treb_effect);\n' + 'zoom = net_effect;\n' + 'rot = rot + rot_residual;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'shift = (tan(time*7)) -0.05;\n' + 'shift = if(above(shift,0),0,if(below(shift,-0.1),-0.1,shift));\n' + 'rot_residual = if(equal(bass_thresh,2),shift,rot_residual);'),
	'pixel_eqs_str' : ('rot = rot + if(equal(sin(ang), 0), -rot, 0.05*sin(rad*4*sin(time*.8)));\n' + 'zoom=zoom+rot*sin(time*2);'),
};

return pmap;
});
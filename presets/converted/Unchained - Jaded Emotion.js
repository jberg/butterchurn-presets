define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.0,
		ib_g : 0.5,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 7.184967,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.25,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.5,
		echo_zoom : 0.99663,
		ob_size : 0.005,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		invert : 0.0,
		bmotionvectorson : 0.0,
		rot : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 1.005729,
		ob_g : 0.0,
		ib_a : 0.1,
		wave_b : 0.0,
		ib_b : 0.5,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.treb_thresh = 0;
m.rot_residual = 0;
m.cy_residual = 0;
m.cx_residual = 0;
m.mid_thresh = 0;
m.bass_thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = (m.wave_r+(m.bass*0.5));
m.wave_g = (m.wave_g+(m.treb*0.5));
m.wave_b = (m.wave_b+(m.mid*0.5));
m.ib_r = (m.ib_r+(0.4*Math.sin((m.time*0.222))));
m.ib_g = (m.ib_g+(0.4*Math.sin((m.time*0.333))));
m.ib_b = (m.ib_b+(0.4*Math.sin((m.time*0.111))));
m.ib_a = (m.ib_a+(0.05*Math.sin((m.time*0.555))));
m.ib_size = (m.ib_size+(0.24*Math.sin((m.time*0.444))));
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.cx_residual = (((equal(m.bass_thresh, 2)*0.016)*Math.sin((m.time*7)))+((1-equal(m.bass_thresh, 2))*m.cx_residual));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.3)*0.96)+1.3)));
m.cy_residual = (((equal(m.treb_thresh, 2)*0.016)*Math.sin((m.time*7)))+((1-equal(m.treb_thresh, 2))*m.cy_residual));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_att, m.mid_thresh))*(((m.mid_thresh-1.3)*0.96)+1.3)));
m.rot_residual = (((equal(m.mid_thresh, 2)*0.016)*Math.sin((m.time*7)))+((1-equal(m.mid_thresh, 2))*m.rot_residual));
m.cx = (m.cx_residual+Math.sin((m.time*0.888)));
m.cy = (m.cy_residual+Math.sin((m.time*0.999)));
m.rot = (m.rot_residual*3);
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+(Math.cos(((m.rad*10)*Math.sin((m.time*0.666))))*0.07));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'wave_r = wave_r + bass*.5;\n' + 'wave_g = wave_g + treb*.5;\n' + 'wave_b = wave_b + mid*.5;\n' + 'ib_r = ib_r + .4*sin(time*.222);\n' + 'ib_g = ib_g + .4*sin(time*.333);\n' + 'ib_b = ib_b + .4*sin(time*.111);\n' + 'ib_a = ib_a + .05*sin(time*.555);\n' + 'ib_size = ib_size + .24*sin(time*.444);\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'cx_residual = equal(bass_thresh,2)*0.016*sin(time*7) + (1-equal(bass_thresh,2))*cx_residual;\n' + 'treb_thresh = above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*0.96+1.3);\n' + 'cy_residual = equal(treb_thresh,2)*0.016*sin(time*7) + (1-equal(treb_thresh,2))*cy_residual;\n' + 'mid_thresh = above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*0.96+1.3);\n' + 'rot_residual = equal(mid_thresh,2)*0.016*sin(time*7) + (1-equal(mid_thresh,2))*rot_residual;\n' + 'cx=cx_residual+sin(time*.888);\n' + 'cy=cy_residual+sin(time*.999);\n' + 'rot=rot_residual*3;'),
	'pixel_eqs_str' : ('zoom=zoom+cos(rad*10*sin(time*.666))*.07;'),
};

return pmap;
});
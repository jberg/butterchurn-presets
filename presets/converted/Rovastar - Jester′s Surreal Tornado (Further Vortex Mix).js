define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.6,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 2.4,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.015,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 0.999996,
		mv_dx : 0.0,
		mv_dy : -0.1,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 1.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.0145,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.98,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : 1.0,
		decay : 1.0,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.5,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.5,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q2 = 0;
m.dx_r = 0;
m.dy_r = 0;
m.thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.ib_r = (0.6+(0.4*Math.sin((m.time*3.894))));
m.ib_g = (0.43+(0.13*Math.sin((m.time*1.143))));
m.ib_b = (0.5+(0.33*Math.sin((m.time*3.465))));
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.004)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.004)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.dx = (1.1*m.dx_r);
m.dy = (1.1*m.dy_r);
m.q2 = (m.dx+ifcond(above((m.bass+m.bass_att), 2.6), (11*m.dx_r), 0));
m.mv_l = 10000;
m.mv_y = 2.0;
m.mv_dy = -0.1;
m.mv_r = (0.7+(0.148*(m.ib_r+m.ib_b)));
m.mv_b = (1-(0.2*(m.ib_r+m.ib_b)));
m.mv_g = (0.6+(0.19*(m.ib_g+m.ib_r)));
m.zoom = (m.zoom-(0.02*m.thresh));
m.wave_r = m.ib_r;
m.wave_b = m.ib_b;
m.wave_g = m.ib_g;
m.ob_r = (1-m.ib_g);
m.ob_b = (0.5*(m.ib_r+m.ib_g));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = ((m.q2*m.rad)*20);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'ib_r = 0.6 + 0.4*sin(time*3.894);\n' + 'ib_g = 0.43 + 0.13*sin(time*1.143);\n' + 'ib_b = 0.5+ 0.33*sin(time*3.465);\n' + 'thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.004*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.004*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'dx = 1.1* dx_r;\n' + 'dy = 1.1* dy_r;\n' + 'q2 = dx + if(above(bass+bass_att,2.6), 11*dx_r, 0);\n' + 'mv_l =10000;\n' + 'mv_y =2.0;\n' + 'mv_dy = -0.1;\n' + 'mv_r =0.7+0.148*(ib_r+ib_b);\n' + 'mv_b =1-0.2*(ib_r+ib_b);\n' + 'mv_g =0.6+ 0.19*(ib_g+ib_r);\n' + 'zoom = zoom -0.02*thresh;\n' + 'wave_r = ib_r;\n' + 'wave_b = ib_b;\n' + 'wave_g = ib_g;\n' + 'ob_r = 1-ib_g;\n' + 'ob_b = 0.5*(ib_r+ib_g);'),
	'pixel_eqs_str' : ('rot = q2*(rad)*20;'),
};

return pmap;
});
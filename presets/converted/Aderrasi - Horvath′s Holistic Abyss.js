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
		mv_y : 1.488,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.000157,
		mv_dx : 0.0,
		mv_dy : -0.1,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.999997,
		ob_size : 0.0,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
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
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.4,
		decay : 1.0,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.dx_r = 0;
m.dy_r = 0;
m.thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = ((m.wave_r+(3.35*Math.sin((4*m.mid_att))))-(3.25*Math.sin((2.5*m.bass))));
m.wave_g = ((m.wave_g+(3.35*Math.sin((3.7*m.treb_att))))-(3.25*Math.sin((2.11*m.mid))));
m.wave_b = ((m.wave_b+(3.35*Math.sin((3.84*m.bass_att))))-(3.25*Math.sin((2.3*m.treb))));
m.warp = 0;
m.zoom = (m.zoom+0.03);
		m.rkeys = ['dy','dx','rot','zoom','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.zoom = (m.zoom+ifcond(above(m.rad, (0.2+(0.25*Math.sin((1.2*m.time))))), ifcond(below(m.rad, (0.5+(0.25*Math.sin((1.2*m.time))))), -0.05, -0.025), (-0.02*(1-m.rad))));
m.rot = (m.rot+ifcond(above(m.rad, (0.2+(0.25*Math.cos((1.8*m.time))))), ifcond(below(m.rad, (0.5+(0.25*Math.cos((1.8*m.time))))), 0.08, -0.08), (-0.5*(0.5-m.rad))));
m.zoom = (m.zoom+0.003);
m.dx = (m.dx+((1-m.rad)*m.dx_r));
m.dy = (m.dy+((1-m.rad)*m.dy_r));
m.dx = (m.dx+((above(m.rad, (0.5+(0.4*Math.cos((2*m.time)))))*0.03)*m.dx_r));
m.dy = (m.dy+((above(m.rad, (0.5+(0.4*Math.sin((2*m.time)))))*0.03)*m.dy_r));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 3.35*sin(4*mid_att) - 3.25*sin(2.5*bass);\n' + 'wave_g = wave_g + 3.35*sin(3.7*treb_att) - 3.25*sin(2.11*mid);\n' + 'wave_b = wave_b + 3.35*sin(3.84*bass_att) - 3.25*sin(2.3*treb);\n' + 'warp = 0;\n' + 'zoom = zoom + 0.03;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'zoom = zoom + if (above(rad,0.2 + 0.25*sin(1.2*time)), if (below(rad,0.5 + 0.25*sin(1.2*time)), -0.05, -0.025), -0.02*(1-rad));\n' + 'rot = rot + if (above(rad,0.2 + 0.25*cos(1.8*time)), if (below(rad,0.5 + 0.25*cos(1.8*time)), 0.08, -0.08), -0.5*(0.5-rad));\n' + 'zoom = zoom + 0.003;\n' + 'dx = dx + (1-rad)*dx_r;\n' + 'dy = dy + (1-rad)*dy_r;\n' + 'dx = dx + above(rad,0.5 + 0.4*cos(2*time)) * 0.03*dx_r;\n' + 'dy = dy + above(rad,0.5 + 0.4*sin(2*time))* 0.03*dy_r;'),
};

return pmap;
});
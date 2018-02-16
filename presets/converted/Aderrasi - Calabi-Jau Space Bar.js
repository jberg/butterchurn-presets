define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.7,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.653093,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
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
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.9,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.5,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.dx_r = 0;
m.dy_r = 0;
m.thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = ((m.wave_r+(0.25*Math.cos((1.12*m.time))))+(0.2*((0.3*Math.cos((1.28*m.time)))+(0.3*Math.sin((2*m.time))))));
m.wave_g = ((m.wave_g+(0.25*Math.cos((1.142*m.time))))+(0.2*((0.3*Math.cos((1.2*m.time)))+(0.32*Math.sin((1.623*m.time))))));
m.wave_b = ((m.wave_b+(0.25*Math.cos((1.13*m.time))))+(0.2*((0.4*Math.cos((1.9*m.time)))+(0.34*Math.sin((1.5245*m.time))))));
m.q1 = m.wave_r;
m.q2 = m.wave_g;
m.q3 = m.wave_b;
		m.rkeys = ['zoom','rot','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.15)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.15)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.rot = (m.rot+(0.2*Math.abs(((m.dx_r*7)*((((2*m.rad)-Math.cos((12*m.ang)))*Math.sin((2-m.rad)))*Math.abs((1.2*m.dx_r)))))));
m.zoom = (m.zoom+(0.2*Math.abs(((8*m.dy_r)*Math.abs((m.dx_r*Math.sin(((2*Math.sin((2*m.rad)))*Math.tan((6*m.rad))))))))));
m.zoom = (m.zoom+((4*m.dx_r)*(m.rad-((m.x*(3.5*Math.cos(Math.sin((3-((m.rad*3)*Math.cos(((2*m.y)-m.bass_att))))))))*(0.5-m.rad)))));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.80814,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.sides = (3*m.bass_att);
m.r = m.q2;
m.g = m.q1;
m.b = m.q3;
m.r2 = (1-Math.abs(m.q2));
m.g2 = (1-Math.abs(m.q1));
m.b2 = (1-Math.abs(m.q3));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('sides = 3*bass_att;\n' + 'r = q2;\n' + 'g = q1;\n' + 'b = q3;\n' + 'r2 = 1-abs(q2);\n' + 'g2 = 1-abs(q1);\n' + 'b2 = 1-abs(q3);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.134785,
			x : 0.6,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.18*Math.sin((3.21*m.time))));
m.y = (m.y+(0.12*Math.sin((2.74*m.time))));
m.sides = (5*m.bass_att);
m.r = m.q3;
m.g = m.q2;
m.b = m.q1;
m.r2 = (1-Math.abs(m.q3));
m.g2 = (1-Math.abs(m.q2));
m.b2 = (1-Math.abs(m.q1));
m.ang = (m.ang+(0.23*Math.tan((2*m.time))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = x + 0.18*sin(3.21*time);\n' + 'y = y + 0.12*sin(2.74*time);\n' + 'sides = 5*bass_att;\n' + 'r = q3;\n' + 'g = q2;\n' + 'b = q1;\n' + 'r2 = 1-abs(q3);\n' + 'g2 = 1-abs(q2);\n' + 'b2 = 1-abs(q1);\n' + 'ang = ang + 0.23*tan(2*time);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.999995,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.270481,
			x : 0.5,
			y : 0.4,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.y = (m.y+(0.18*Math.sin((1.2*m.time))));
m.x = (m.x+(0.11*Math.sin((5.67*m.time))));
m.sides = (5*m.treb_att);
m.ang = (m.ang+(0.45*Math.tan((4.3*m.time))));
m.r = (2*m.q1);
m.g = (2*m.q3);
m.b = (2*m.q2);
m.r2 = (1-Math.abs((2*m.q1)));
m.g2 = (1-Math.abs((2*m.q3)));
m.b2 = (1-Math.abs((2*m.q2)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('y = y + 0.18*sin(1.2*time);\n' + 'x = x + 0.11*sin(5.67*time);\n' + 'sides = 5*treb_att;\n' + 'ang = ang + 0.45*tan(4.3*time);\n' + 'r = 2*q1;\n' + 'g = 2*q3;\n' + 'b = 2*q2;\n' + 'r2 = 1-abs(2*q1);\n' + 'g2 = 1-abs(2*q3);\n' + 'b2 = 1-abs(2*q2);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'wave_r = wave_r + 0.25*cos(1.12*time) +0.2*(0.3*cos(1.28*time)+0.3*sin(2*time));\n' + 'wave_g = wave_g + 0.25*cos(1.142*time) +0.2*(0.3*cos(1.2*time)+0.32*sin(1.623*time));\n' + 'wave_b = wave_b + 0.25*cos(1.13*time) +0.2*(0.4*cos(1.9*time)+0.34*sin(1.5245*time));\n' + 'q1 = wave_r;\n' + 'q2 = wave_g;\n' + 'q3 = wave_b;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.15*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.15*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'rot = rot + 0.2*abs(dx_r*7*((2*rad-cos(12*ang))*sin(2-rad)*abs(1.2*dx_r)));\n' + 'zoom = zoom + 0.2*abs(8*dy_r*abs(dx_r*sin(2*sin(2*rad)*tan(6*rad))));\n' + 'zoom = zoom + 4*dx_r*(rad-x*(3.5*cos(sin(3-rad*3*cos(2*y-bass_att))))*(0.5-rad));'),
};

return pmap;
});
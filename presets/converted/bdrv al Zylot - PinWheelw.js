define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 1.0,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 1.0,
		mv_b : 0.4999,
		echo_zoom : 0.996629,
		ob_size : 0.5,
		wave_smoothing : 0.27,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.4999,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		nwrapmode_x : 1.0,
		cx : 0.5,
		dy : 0.0,
		nwrapmode_y : 1.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		nechowrap_x : 0.0,
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		nechowrap_y : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : -0.38,
		decay : 0.997,
		wave_a : 3.041877,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 1.0,
		mv_r : 0.4999,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q8 = 0;
m.dx_r = 0;
m.dy_r = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.decay = 0.92;
		m.rkeys = ['dy','dx','rot','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+0.1);
m.rot = (m.rot+(m.rad*0.1));
m.rot = (m.rot+(0.01*(0.5*Math.cos((((m.ang*5)*m.bass)*m.time)))));
m.dx = (m.dx+((0.1*above(m.rad, 0.25))*m.dx_r));
m.dy = (m.dy+((0.1*above(m.rad, 0.25))*m.dy_r));
m.rot = ((0.1*pow(-m.ang, 3))-(1.18*Math.sin(m.ang)));
m.zoom = (((1.45*Math.sin(-m.rad))+1.3)+Math.sin(m.rad));
m.dx = (m.dx+(0.09*Math.sin((m.q8*0.785))));
m.dy = (m.dy+(0.09*Math.sin((m.q8*0.675))));
m.zoom = ((-0.0251+m.zoom)+(1*Math.abs((0.1*Math.tan((1.9-m.rad))))));
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
			bdrawback : 0.0,
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
			bdrawback : 0.0,
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
			bdrawback : 0.0,
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
			bdrawback : 0.0,
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
			r2 : 0.9,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.36,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.0,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 0.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
			r : 0.56,
			border_g : 0.0,
			rad : 0.34,
			x : 0.5,
			y : 0.5,
			ang : 0.53,
			sides : 3.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.ang+m.time);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = ang + time;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.7,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.8,
			textured : 0.0,
			g2 : 0.4,
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.0,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 1.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.41,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.ang-(m.time*0.333));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = ang - time*.333;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.58,
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.0,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
			r : 0.84,
			border_g : 1.0,
			rad : 0.21,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.ang+(m.time*4));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = ang + time*4;'),

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
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.1,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
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
	'frame_eqs_str' : ('warp = 0;\n' + 'decay = .92;'),
	'pixel_eqs_str' : ('zoom = zoom + .1;\n' + 'rot = rot + rad*.1;\n' + 'rot = rot + 0.01*(0.5*cos(ang*5*bass*time));\n' + 'dx = dx + 0.1*above(rad,0.25)*dx_r;\n' + 'dy = dy + 0.1*above(rad,0.25)*dy_r;\n' + 'rot=0.1*pow(-ang,3)-1.18*sin(ang);\n' + 'zoom=1.45*sin(-rad)+1.3+ sin(rad);\n' + 'dx = dx + 0.09*sin(q8*0.785);\n' + 'dy = dy + 0.09*sin(q8*0.675);\n' + 'zoom = -0.0251+zoom + 1*abs(0.1*tan((1.9)-rad));'),
};

return pmap;
});
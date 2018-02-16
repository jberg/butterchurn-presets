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
		ob_size : 0.005,
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
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : -0.38,
		decay : 0.997,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 1.0,
		mv_r : 0.4999,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.decay = 0.95;
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+(m.rad*0.6));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 2.987785,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (0.5+div((0.25*(m.sample*2)),Math.sin(((m.sample*100)+(m.time*10)))));
m.y = (0.5+((0.25*(m.sample*2))*Math.cos(((m.sample*100)+(m.time*10)))));
m.r = (0.01+(0.5*Math.sin(((m.sample*250)+(m.time*1)))));
m.b = (0.01+(0.5*Math.sin(((m.sample*220)-(m.time*2)))));
m.g = (0.01+(0.5*Math.sin(((m.sample*130)+(m.time*4)))));
m.b = ifcond(above(m.b, 0), m.b, 0);
m.r = ifcond(above(m.r, 0), m.r, 0);
m.g = ifcond(above(m.g, 0), m.g, 0);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = .5+.25*(sample*2)/sin(sample*100+time*10);\n' + 'y = .5+.25*(sample*2)*cos(sample*100+time*10);\n' + 'r = .01+.5*sin(sample*250+time*1);\n' + 'b = .01+.5*sin(sample*220-time*2);\n' + 'g = .01+.5*sin(sample*130+time*4);\n' + 'b = if(above(b,0),b,0);\n' + 'r = if(above(r,0),r,0);\n' + 'g = if(above(g,0),g,0);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (0.5+((0.25*(m.sample*2))*Math.sin(((m.sample*100)+(m.time*10)))));
m.y = (0.5+div((0.25*(m.sample*2)),Math.cos(((m.sample*100)+(m.time*10)))));
m.r = (0.01+(0.5*Math.sin(((m.sample*250)+(m.time*1)))));
m.b = (0.01+(0.5*Math.sin(((m.sample*220)-(m.time*2)))));
m.g = (0.01+(0.5*Math.sin(((m.sample*130)+(m.time*4)))));
m.b = ifcond(above(m.b, 0), m.b, 0);
m.r = ifcond(above(m.r, 0), m.r, 0);
m.g = ifcond(above(m.g, 0), m.g, 0);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = .5+.25*(sample*2)*sin(sample*100+time*10);\n' + 'y = .5+.25*(sample*2)/cos(sample*100+time*10);\n' + 'r = .01+.5*sin(sample*250+time*1);\n' + 'b = .01+.5*sin(sample*220-time*2);\n' + 'g = .01+.5*sin(sample*130+time*4);\n' + 'b = if(above(b,0),b,0);\n' + 'r = if(above(r,0),r,0);\n' + 'g = if(above(g,0),g,0);'),

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
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.218586,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.mang = 0;

			m.rkeys = ['mang'];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = 1;
m.b = 1;
m.g = 1;
m.mang = ((m.mang+0.5)+m.bass);
m.rad = (m.rad+(m.treb*0.05));
m.ang = m.mang;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = 1;\n' + 'b = 1;\n' + 'g = 1;\n' + 'mang = mang + .5+bass;\n' + 'rad = rad + treb*.05;\n' + 'ang = mang;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.4,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 1.003939,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 8.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.ang-(m.time*0.333));
m.border_r = ((0.5+(0.4*Math.sin((m.time*1.4))))+(m.bass*0.1));
m.border_g = ((0.5+(0.4*Math.sin((m.time*1.2))))+(m.treb*0.1));
m.border_b = ((0.5+(0.4*Math.sin((m.time*1))))+(m.mid*0.1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = ang - time*.333;\n' + 'border_r = .5+.4*sin(time*1.4)+bass*.1;\n' + 'border_g = .5+.4*sin(time*1.2)+treb*.1;\n' + 'border_b = .5+.4*sin(time*1)+mid*.1;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.58,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
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
	'frame_eqs_str' : ('warp = 0;\n' + 'decay = .95;'),
	'pixel_eqs_str' : ('zoom = zoom + (rad*.6);'),
};

return pmap;
});
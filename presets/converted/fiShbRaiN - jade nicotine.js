define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.14,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 9.737579,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.285751,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.999996,
		ob_r : 0.01,
		sy : 0.978433,
		ib_size : 0.26,
		warp : 0.438652,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.999995,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.006596,
		ob_size : 0.5,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.887329,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999513,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.47,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.35,
		invert : 0.0,
		rot : 0.02,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.925,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 0.8,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {

		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.2,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.231186,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
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
m.x = (Math.sin(m.y)+Math.sin(m.time));
m.y = m.sample;
m.r = (m.bass*0.75);
m.g = (m.mid*0.75);
m.b = (m.treb*0.75);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=sin(y)+sin(time);\n' + 'y=sample;\n' + 'r=bass*.75;\n' + 'g=mid*.75;\n' + 'b=treb*.75;'),

		},
		{
		'baseVals' : {
			a : 0.2,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.248318,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
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
m.x = (Math.sin(m.y)+Math.cos(m.time));
m.y = m.sample;
m.r = (m.bass*0.75);
m.g = (m.mid*0.75);
m.b = (m.treb*0.75);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=sin(y)+cos(time);\n' + 'y=sample;\n' + 'r=bass*.75;\n' + 'g=mid*.75;\n' + 'b=treb*.75;'),

		},
		{
		'baseVals' : {
			a : 0.04,
			enabled : 1.0,
			b : 1.0,
			g : 0.2,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.5,
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
m.x = (m.sample+(rand(10)*0.01));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=sample+(rand(10)*.01);'),

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
			r2 : 0.8,
			a : 0.1,
			enabled : 1.0,
			b : 0.8,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.7,
			tex_zoom : 1.644628,
			additive : 1.0,
			border_a : 0.4,
			border_b : 1.0,
			b2 : 0.7,
			a2 : 0.0,
			r : 0.8,
			border_g : 0.6,
			rad : 0.768913,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.6,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = Math.sin(m.time);
m.x = m.bass;
m.ang = m.time;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad=sin(time);\n' + 'x=bass;\n' + 'ang=time;'),

		},
		{
		'baseVals' : {
			r2 : 0.8,
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.8,
			textured : 0.0,
			g2 : 0.4,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.2,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.99,
			border_g : 0.8,
			rad : 0.1,
			x : 0.5,
			y : 0.8,
			ang : 0.0,
			sides : 3.0,
			border_r : 0.6,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = Math.cos((m.time*0.5));
m.x = m.treb;
m.ang = (m.time*0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad=cos(time*.5);\n' + 'x=treb;\n' + 'ang=time*.5;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.3,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.8,
			textured : 1.0,
			g2 : 0.8,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.4,
			a2 : 0.0,
			r : 0.8,
			border_g : 0.49,
			rad : 0.244863,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.a2 = m.time;
m.rad = (m.treb_att*0.3);
m.x = ((Math.sin(m.time)*0.5)+0.1);
m.y = ((Math.cos(m.time)*0.5)+(m.treb*0.1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a2=time;\n' + 'rad=treb_att*.3;\n' + 'x=(sin(time)*.5)+.1;\n' + 'y=(cos(time)*.5)+(treb*.1);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = Math.sin(m.time);
m.a = (Math.cos(m.time)*0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad=sin(time);\n' + 'a=(cos(time)*.1);'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : (''),
	'pixel_eqs_str' : (''),
};

return pmap;
});
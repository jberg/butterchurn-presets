define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.07,
		wave_g : 0.75,
		ib_g : 0.0,
		mv_x : 31.999994,
		warpscale : 1.624064,
		brighten : 1.0,
		mv_y : 38.400002,
		wave_scale : 0.389574,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 0.999998,
		ob_r : 0.01,
		sy : 0.999999,
		ib_size : 0.26,
		warp : 1.599179,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 2.51821,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.7,
		wave_r : 0.75,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.828659,
		ob_size : 0.5,
		wave_smoothing : 0.27,
		warpanimspeed : 5.99579,
		wave_dots : 0.0,
		mv_g : 0.887329,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.009509,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.1,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.05,
		invert : 0.0,
		rot : -0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.925,
		wave_a : 0.711382,
		ob_g : 0.0,
		ib_a : 0.1,
		wave_b : 0.75,
		ib_b : 0.0,
		mv_r : 0.8,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.mv_a = Math.sin((m.time*0.3));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.644627,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.9,
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
m.x = ((mod(Math.floor((m.sample*10)),10)*0.1)+0.05);
m.y = (m.y-0.4);
m.b = (0.8-m.y);
m.g = (0.8-m.y);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=((int(sample*10))%10*.1)+.05;\n' + 'y=y-.4;\n' + 'b=.8-y;\n' + 'g=.8-y;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 3.300373,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
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
			r2 : 1.0,
			a : 0.7,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 1.570797,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.493378,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 1.0,
			rad : 1.637956,
			x : 0.5,
			y : 0.53,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=time*.5;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.7,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.8,
			border_g : 0.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(Math.sin((m.time+(m.bass_att*0.5)))*0.5));
m.y = (0.5+(Math.cos((m.time+(m.treb_att*0.2)))*0.5));
m.rad = (m.rad+(m.treb*0.18));
m.r = (m.treb_att*0.5);
m.g = (m.bass_att*0.5);
m.b = (rand(100)*0.01);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=.5+(sin(time+bass_att*.5)*.5);\n' + 'y=.5+(cos(time+treb_att*.2)*.5);\n' + 'rad=rad+(treb)*.18;\n' + 'r=treb_att*.5;\n' + 'g=bass_att*.5;\n' + 'b=rand(100)*.01;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.4,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
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
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (rand(100)*0.01);
m.y = (rand(100)*0.01);
m.rad = (m.rad+(m.bass*0.18));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=rand(100)*.01;\n' + 'y=rand(100)*.01;\n' + 'rad=rad+(bass)*.18;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.6,
			tex_zoom : 0.334692,
			additive : 0.0,
			border_a : 0.03,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.2,
			r : 1.0,
			border_g : 1.0,
			rad : 0.440437,
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
m.ang = m.time;
m.rad = (m.rad+(m.treb*0.1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=time;\n' + 'rad=rad+(treb*.1);'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('mv_a=sin(time*.3);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
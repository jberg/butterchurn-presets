define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 19.199999,
		warpscale : 1.204928,
		brighten : 0.0,
		mv_y : 24.000004,
		wave_scale : 1.163966,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.998168,
		ob_r : 0.01,
		sy : 1.051003,
		ib_size : 0.26,
		warp : 0.104292,
		red_blue : 0.0,
		wave_mode : 1.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 5.582155,
		mv_dx : 0.02,
		mv_dy : 0.0,
		mv_a : 0.1,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 0.8,
		echo_zoom : 0.996624,
		ob_size : 0.5,
		wave_smoothing : 0.81,
		warpanimspeed : 0.184233,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.019604,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.699999,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : -0.6,
		decay : 0.925,
		wave_a : 0.711381,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 1.11,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.dx = (m.dx+(Math.sin(m.time)*0.002));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+((Math.abs(Math.sin(m.time))*m.rad)*0.04));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.816691,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 1.0,
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
m.a = (m.bass*0.5);
		return m;
	},
		'point_eqs' : function(m) {
m.x = ((Math.sin((((mod((m.sample*100),10)*3.1415)*m.bass)*0.02))*0.5)+(Math.sin(m.treb)*0.5));
m.r = (0.25-m.y);
m.g = (m.treb*0.5);
m.b = (m.y-0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a=bass*.5;'),
		'point_eqs_str' : ('x=(sin((sample*100%10)*3.1415*bass*.02)*.5)+(sin(treb)*.5);\n' + 'r=.25-y;\n' + 'g=treb*.5;\n' + 'b=y-.5;'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.819543,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 1.0,
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
m.x = ((Math.cos(mod((m.sample*100),20))*0.5)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=(cos(sample*100%20)*.5)+.5;'),

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
			usedots : 1.0,
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
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.7,
			textured : 1.0,
			g2 : 0.4,
			tex_zoom : 2.216689,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.7,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.599579,
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
m.ang = (((Math.sin(m.time)*3.1415)+m.bass)-m.treb);
m.rad = m.treb;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=(sin(time)*3.1415)+bass-treb;\n' + 'rad=treb;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.6,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.5,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.344205,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.1,
			a2 : 0.0,
			r : 0.7,
			border_g : 1.0,
			rad : 0.241456,
			x : 0.5,
			y : 0.2,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = ((0.5*Math.sin((m.time*0.2)))+0.5);
m.y = Math.sin(m.time);
m.rad = Math.sin((m.time*0.23));
m.ang = Math.sin((m.time*0.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=(.5*sin(time*.2))+.5;\n' + 'y=sin(time);\n' + 'rad=sin(time*.23);\n' + 'ang=sin(time*.5);'),

		},
		{
		'baseVals' : {
			r2 : 0.9,
			a : 0.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.6,
			tex_zoom : 0.999992,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.2,
			r : 0.0,
			border_g : 1.0,
			rad : 0.54279,
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
m.ang = ((above(m.bass, 1)*Math.sin(m.time))+Math.cos(m.time));
m.x = (rand(10)*0.1);
m.y = (rand(10)*0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=(above(bass,1)*sin(time))+cos(time);\n' + 'x=rand(10)*.1;\n' + 'y=rand(10)*.1;'),

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
	'frame_eqs_str' : ('dx=dx+(sin(time)*.002);'),
	'pixel_eqs_str' : ('zoom=zoom+(abs(sin(time))*rad*.04);'),
};

return pmap;
});
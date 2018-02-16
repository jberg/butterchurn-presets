define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 8.815298,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 2.114586,
		echo_alpha : 0.6,
		additivewave : 1.0,
		sx : 0.94204,
		ob_r : 0.01,
		sy : 0.999996,
		ib_size : 0.26,
		warp : 3.209173,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 8.311067,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.5,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.498684,
		ob_size : 0.5,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.4,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.009509,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.02,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.05,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.925,
		wave_a : 0.763004,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {

		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.wave_r = Math.sin(m.time);
m.wave_b = Math.sin((m.time*0.23));
m.wave_g = Math.sin((m.time*0.47));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.nx = 0;
m.ny = 0;
m.nd = 0;
m.nx = 0.5;
m.ny = 0.5;
			m.rkeys = ['ny','nx'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.nd = rand(4);
m.nx = (m.nx+((equal(m.nd, 0)*0.01)*m.mid));
m.nx = (m.nx+((equal(m.nd, 2)*-0.01)*m.mid));
m.ny = (m.ny+((equal(m.nd, 1)*0.01)*m.mid));
m.ny = (m.ny+((equal(m.nd, 3)*-0.01)*m.mid));
m.x = m.nx;
m.y = m.ny;
m.r = (m.bass*0.6);
m.g = (m.treb*0.6);
m.nx = ifcond(equal(m.sample, 1), (rand(10)*0.1), m.nx);
m.ny = ifcond(equal(m.sample, 1), (rand(10)*0.1), m.ny);
		return m;
	},
		'init_eqs_str' : ('nx=.5;\n' + 'ny=.5;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('nd=rand(4);\n' + 'nx=nx+(equal(nd,0)*.01*mid);\n' + 'nx=nx+(equal(nd,2)*-.01*mid);\n' + 'ny=ny+(equal(nd,1)*.01*mid);\n' + 'ny=ny+(equal(nd,3)*-.01*mid);\n' + 'x=nx;\n' + 'y=ny;\n' + 'r=bass*.6;\n' + 'g=treb*.6;\n' + 'nx=if(equal(sample,1),rand(10)*.1,nx);\n' + 'ny=if(equal(sample,1),rand(10)*.1,ny);'),

		},
		{
		'baseVals' : {
			a : 0.0,
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
			r2 : 0.2,
			a : 0.7,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.6,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.9,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.662308,
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
	'frame_eqs_str' : (''),
	'pixel_eqs_str' : ('wave_r=sin(time);\n' + 'wave_b=sin(time*.23);\n' + 'wave_g=sin(time*.47);'),
};

return pmap;
});
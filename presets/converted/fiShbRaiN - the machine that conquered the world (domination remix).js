define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 7.709095,
		echo_alpha : 0.3,
		additivewave : 1.0,
		sx : 0.9999,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.0,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.1,
		fshader : 1.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 0.202819,
		ob_size : 0.5,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.009495,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.65,
		wave_a : 0.650438,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 2.0,
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
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.999999,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.tp3x = 0;
m.tp2x = 0;
m.tp3y = 0;
m.trot = 0;
m.tp1x = 0;
m.tp2y = 0;
m.tp1y = 0;
m.t_x = 0;
m.t_y = 0;
m.tscale = 0;
m.tri_point = 0;

			m.rkeys = ['t_x','t_y'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.tscale = (0.45+(m.bass*0.02));
m.trot = 3;
m.a = above(m.sample, 0);
m.tp1x = (0.5+((Math.cos(((3.1415*0)+(m.time*m.trot)))*m.tscale)*0.75));
m.tp1y = (0.5+(Math.sin(((3.1415*0)+(m.time*m.trot)))*m.tscale));
m.tp2x = (0.5+((Math.cos(((3.1415*0.6667)+(m.time*m.trot)))*m.tscale)*0.75));
m.tp2y = (0.5+((Math.sin(((3.1415*0.6667)+(m.time*m.trot)))*m.tscale)*Math.sin(m.time)));
m.tp3x = (0.5+((Math.cos(((3.1415*1.3333)+(m.time*m.trot)))*m.tscale)*0.75));
m.tp3y = (0.5+((Math.sin(((3.1415*1.3333)+(m.time*m.trot)))*m.tscale)*Math.sin(m.time)));
m.tri_point = rand(3);
m.t_x = (m.t_x+((equal(m.tri_point, 0)*(m.tp1x-m.t_x))*0.5));
m.t_y = (m.t_y+((equal(m.tri_point, 0)*(m.tp1y-m.t_y))*0.5));
m.t_x = (m.t_x+((equal(m.tri_point, 1)*(m.tp2x-m.t_x))*0.5));
m.t_y = (m.t_y+((equal(m.tri_point, 1)*(m.tp2y-m.t_y))*0.5));
m.t_x = (m.t_x+((equal(m.tri_point, 2)*(m.tp3x-m.t_x))*0.5));
m.t_y = (m.t_y+((equal(m.tri_point, 2)*(m.tp3y-m.t_y))*0.5));
m.x = m.t_x;
m.y = m.t_y;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('tscale=.45+(bass*.02);\n' + 'trot=3;\n' + 'a=above(sample,0);\n' + 'tp1x=.5+(cos(3.1415*0+(time*trot))*tscale*.75);\n' + 'tp1y=.5+(sin(3.1415*0+(time*trot))*tscale);\n' + 'tp2x=.5+(cos(3.1415*.6667+(time*trot))*tscale*.75);\n' + 'tp2y=.5+(sin(3.1415*.6667+(time*trot))*tscale*sin(time));\n' + 'tp3x=.5+(cos(3.1415*1.3333+(time*trot))*tscale*.75);\n' + 'tp3y=.5+(sin(3.1415*1.3333+(time*trot))*tscale*sin(time));\n' + 'tri_point=rand(3);\n' + 't_x=t_x+(equal(tri_point,0)*(tp1x-t_x)*.5);\n' + 't_y=t_y+(equal(tri_point,0)*(tp1y-t_y)*.5);\n' + 't_x=t_x+(equal(tri_point,1)*(tp2x-t_x)*.5);\n' + 't_y=t_y+(equal(tri_point,1)*(tp2y-t_y)*.5);\n' + 't_x=t_x+(equal(tri_point,2)*(tp3x-t_x)*.5);\n' + 't_y=t_y+(equal(tri_point,2)*(tp3y-t_y)*.5);\n' + 'x=t_x;\n' + 'y=t_y;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.tp3x = 0;
m.tp2x = 0;
m.tp3y = 0;
m.trot = 0;
m.tp1x = 0;
m.tp2y = 0;
m.tp1y = 0;
m.t_x = 0;
m.t_y = 0;
m.tscale = 0;
m.tri_point = 0;

			m.rkeys = ['t_x','t_y'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.tscale = (0.45+(m.bass*0.02));
m.trot = 3;
m.a = above(m.sample, 0);
m.tp1x = (0.5+((Math.cos(((3.1415*0)+(m.time*m.trot)))*m.tscale)*0.75));
m.tp1y = (0.5+(Math.sin(((3.1415*0)+(m.time*m.trot)))*m.tscale));
m.tp2x = (0.5+((Math.cos(((3.1415*0.6667)+(m.time*m.trot)))*m.tscale)*0.75));
m.tp2y = (0.5+((Math.sin(((3.1415*0.6667)+(m.time*m.trot)))*m.tscale)*Math.sin(m.time)));
m.tp3x = (0.5+((Math.cos(((3.1415*1.3333)+(m.time*m.trot)))*m.tscale)*0.75));
m.tp3y = (0.5+((Math.sin(((3.1415*1.3333)+(m.time*m.trot)))*m.tscale)*Math.sin(m.time)));
m.tri_point = rand(3);
m.t_x = (m.t_x+((equal(m.tri_point, 0)*(m.tp1x-m.t_x))*0.5));
m.t_y = (m.t_y+((equal(m.tri_point, 0)*(m.tp1y-m.t_y))*0.5));
m.t_x = (m.t_x+((equal(m.tri_point, 1)*(m.tp2x-m.t_x))*0.5));
m.t_y = (m.t_y+((equal(m.tri_point, 1)*(m.tp2y-m.t_y))*0.5));
m.t_x = (m.t_x+((equal(m.tri_point, 2)*(m.tp3x-m.t_x))*0.5));
m.t_y = (m.t_y+((equal(m.tri_point, 2)*(m.tp3y-m.t_y))*0.5));
m.x = m.t_x;
m.y = m.t_y;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('tscale=.45+(bass*.02);\n' + 'trot=3;\n' + 'a=above(sample,0);\n' + 'tp1x=.5+(cos(3.1415*0+(time*trot))*tscale*.75);\n' + 'tp1y=.5+(sin(3.1415*0+(time*trot))*tscale);\n' + 'tp2x=.5+(cos(3.1415*.6667+(time*trot))*tscale*.75);\n' + 'tp2y=.5+(sin(3.1415*.6667+(time*trot))*tscale*sin(time));\n' + 'tp3x=.5+(cos(3.1415*1.3333+(time*trot))*tscale*.75);\n' + 'tp3y=.5+(sin(3.1415*1.3333+(time*trot))*tscale*sin(time));\n' + 'tri_point=rand(3);\n' + 't_x=t_x+(equal(tri_point,0)*(tp1x-t_x)*.5);\n' + 't_y=t_y+(equal(tri_point,0)*(tp1y-t_y)*.5);\n' + 't_x=t_x+(equal(tri_point,1)*(tp2x-t_x)*.5);\n' + 't_y=t_y+(equal(tri_point,1)*(tp2y-t_y)*.5);\n' + 't_x=t_x+(equal(tri_point,2)*(tp3x-t_x)*.5);\n' + 't_y=t_y+(equal(tri_point,2)*(tp3y-t_y)*.5);\n' + 'x=t_x;\n' + 'y=t_y;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.tp3x = 0;
m.tp2x = 0;
m.tp3y = 0;
m.trot = 0;
m.tp1x = 0;
m.tp2y = 0;
m.tp1y = 0;
m.t_x = 0;
m.t_y = 0;
m.tscale = 0;
m.tri_point = 0;

			m.rkeys = ['t_x','t_y'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.tscale = (0.45+(m.bass*0.02));
m.trot = 3;
m.a = above(m.sample, 0);
m.tp1x = (0.5+((Math.cos(((3.1415*0)+(m.time*m.trot)))*m.tscale)*0.75));
m.tp1y = (0.5+(Math.sin(((3.1415*0)+(m.time*m.trot)))*m.tscale));
m.tp2x = (0.5+((Math.cos(((3.1415*0.6667)+(m.time*m.trot)))*m.tscale)*0.75));
m.tp2y = (0.5+((Math.sin(((3.1415*0.6667)+(m.time*m.trot)))*m.tscale)*Math.sin(m.time)));
m.tp3x = (0.5+((Math.cos(((3.1415*1.3333)+(m.time*m.trot)))*m.tscale)*0.75));
m.tp3y = (0.5+((Math.sin(((3.1415*1.3333)+(m.time*m.trot)))*m.tscale)*Math.sin(m.time)));
m.tri_point = rand(3);
m.t_x = (m.t_x+((equal(m.tri_point, 0)*(m.tp1x-m.t_x))*0.5));
m.t_y = (m.t_y+((equal(m.tri_point, 0)*(m.tp1y-m.t_y))*0.5));
m.t_x = (m.t_x+((equal(m.tri_point, 1)*(m.tp2x-m.t_x))*0.5));
m.t_y = (m.t_y+((equal(m.tri_point, 1)*(m.tp2y-m.t_y))*0.5));
m.t_x = (m.t_x+((equal(m.tri_point, 2)*(m.tp3x-m.t_x))*0.5));
m.t_y = (m.t_y+((equal(m.tri_point, 2)*(m.tp3y-m.t_y))*0.5));
m.x = m.t_x;
m.y = m.t_y;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('tscale=.45+(bass*.02);\n' + 'trot=3;\n' + 'a=above(sample,0);\n' + 'tp1x=.5+(cos(3.1415*0+(time*trot))*tscale*.75);\n' + 'tp1y=.5+(sin(3.1415*0+(time*trot))*tscale);\n' + 'tp2x=.5+(cos(3.1415*.6667+(time*trot))*tscale*.75);\n' + 'tp2y=.5+(sin(3.1415*.6667+(time*trot))*tscale*sin(time));\n' + 'tp3x=.5+(cos(3.1415*1.3333+(time*trot))*tscale*.75);\n' + 'tp3y=.5+(sin(3.1415*1.3333+(time*trot))*tscale*sin(time));\n' + 'tri_point=rand(3);\n' + 't_x=t_x+(equal(tri_point,0)*(tp1x-t_x)*.5);\n' + 't_y=t_y+(equal(tri_point,0)*(tp1y-t_y)*.5);\n' + 't_x=t_x+(equal(tri_point,1)*(tp2x-t_x)*.5);\n' + 't_y=t_y+(equal(tri_point,1)*(tp2y-t_y)*.5);\n' + 't_x=t_x+(equal(tri_point,2)*(tp3x-t_x)*.5);\n' + 't_y=t_y+(equal(tri_point,2)*(tp3y-t_y)*.5);\n' + 'x=t_x;\n' + 'y=t_y;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.tp3x = 0;
m.tp2x = 0;
m.tp3y = 0;
m.trot = 0;
m.tp1x = 0;
m.tp2y = 0;
m.tp1y = 0;
m.t_x = 0;
m.t_y = 0;
m.tscale = 0;
m.tri_point = 0;

			m.rkeys = ['t_x','t_y'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.tscale = (0.45+(m.bass*0.02));
m.trot = 3;
m.a = above(m.sample, 0);
m.tp1x = (0.5+((Math.cos(((3.1415*0)+(m.time*m.trot)))*m.tscale)*0.75));
m.tp1y = (0.5+(Math.sin(((3.1415*0)+(m.time*m.trot)))*m.tscale));
m.tp2x = (0.5+((Math.cos(((3.1415*0.6667)+(m.time*m.trot)))*m.tscale)*0.75));
m.tp2y = (0.5+((Math.sin(((3.1415*0.6667)+(m.time*m.trot)))*m.tscale)*Math.sin(m.time)));
m.tp3x = (0.5+((Math.cos(((3.1415*1.3333)+(m.time*m.trot)))*m.tscale)*0.75));
m.tp3y = (0.5+((Math.sin(((3.1415*1.3333)+(m.time*m.trot)))*m.tscale)*Math.sin(m.time)));
m.tri_point = rand(3);
m.t_x = (m.t_x+((equal(m.tri_point, 0)*(m.tp1x-m.t_x))*0.5));
m.t_y = (m.t_y+((equal(m.tri_point, 0)*(m.tp1y-m.t_y))*0.5));
m.t_x = (m.t_x+((equal(m.tri_point, 1)*(m.tp2x-m.t_x))*0.5));
m.t_y = (m.t_y+((equal(m.tri_point, 1)*(m.tp2y-m.t_y))*0.5));
m.t_x = (m.t_x+((equal(m.tri_point, 2)*(m.tp3x-m.t_x))*0.5));
m.t_y = (m.t_y+((equal(m.tri_point, 2)*(m.tp3y-m.t_y))*0.5));
m.x = m.t_x;
m.y = m.t_y;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('tscale=.45+(bass*.02);\n' + 'trot=3;\n' + 'a=above(sample,0);\n' + 'tp1x=.5+(cos(3.1415*0+(time*trot))*tscale*.75);\n' + 'tp1y=.5+(sin(3.1415*0+(time*trot))*tscale);\n' + 'tp2x=.5+(cos(3.1415*.6667+(time*trot))*tscale*.75);\n' + 'tp2y=.5+(sin(3.1415*.6667+(time*trot))*tscale*sin(time));\n' + 'tp3x=.5+(cos(3.1415*1.3333+(time*trot))*tscale*.75);\n' + 'tp3y=.5+(sin(3.1415*1.3333+(time*trot))*tscale*sin(time));\n' + 'tri_point=rand(3);\n' + 't_x=t_x+(equal(tri_point,0)*(tp1x-t_x)*.5);\n' + 't_y=t_y+(equal(tri_point,0)*(tp1y-t_y)*.5);\n' + 't_x=t_x+(equal(tri_point,1)*(tp2x-t_x)*.5);\n' + 't_y=t_y+(equal(tri_point,1)*(tp2y-t_y)*.5);\n' + 't_x=t_x+(equal(tri_point,2)*(tp3x-t_x)*.5);\n' + 't_y=t_y+(equal(tri_point,2)*(tp3y-t_y)*.5);\n' + 'x=t_x;\n' + 'y=t_y;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.6,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.628319,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.6,
			tex_zoom : 0.819518,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.9,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.472094,
			x : 0.24,
			y : 0.5,
			ang : 0.0,
			sides : 30.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = ((Math.sin((m.time*0.5))*0.5)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=(sin(time*.5)*.5)+.5;'),

		},
		{
		'baseVals' : {
			r2 : 0.3,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 1.570797,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.2,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.8,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.791418,
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
			r2 : 0.7,
			a : 1.0,
			enabled : 1.0,
			b : 0.8,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.4,
			textured : 1.0,
			g2 : 0.6,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.5,
			a2 : 0.0,
			r : 0.4,
			border_g : 1.0,
			rad : 0.808141,
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
			a : 0.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.498314,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.8,
			r : 1.0,
			border_g : 1.0,
			rad : 0.364566,
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
	'pixel_eqs_str' : (''),
};

return pmap;
});
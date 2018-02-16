define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.4,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.951307,
		brighten : 0.0,
		mv_y : 20.160004,
		wave_scale : 1.285751,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.030301,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.972365,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.255373,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.5,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.006596,
		ob_size : 0.5,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.4,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.960513,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.4,
		invert : 0.0,
		rot : -0.04,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
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
m.mx = 0;
m.my = 0;
m.md = 0;
m.oldmd = 0;
m.ma = 0.5;
m.my = 0.5;
m.md = 0;
			m.rkeys = ['my','mx','md'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.oldmd = m.md;
m.md = mod((m.md+rand(4)),4);
m.md = ifcond(equal(m.md, m.oldmd), mod((m.md+1),4), m.md);
m.mx = (m.mx+((equal(m.md, 0)*0.002)*m.bass));
m.mx = (m.mx-((equal(m.md, 1)*0.002)*m.bass));
m.my = (m.my+((equal(m.md, 2)*0.002)*m.treb));
m.my = (m.my-((equal(m.md, 3)*0.002)*m.treb));
m.mx = ifcond(above(m.mx, 0.9), 0.5, m.mx);
m.mx = ifcond(below(m.mx, 0.1), 0.5, m.mx);
m.my = ifcond(above(m.my, 0.9), 0.5, m.my);
m.my = ifcond(below(m.my, 0.1), 0.5, m.my);
m.x = m.mx;
m.y = m.my;
m.a = (m.bass*0.1);
m.r = (m.bass*0.5);
		return m;
	},
		'init_eqs_str' : ('ma=.5;\n' + 'my=.5;\n' + 'md=0;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('oldmd=md;\n' + 'md=(md+rand(4))%4;\n' + 'md=if(equal(md,oldmd),(md+1)%4,md);\n' + 'mx=mx+(equal(md,0)*.002*bass);\n' + 'mx=mx-(equal(md,1)*.002*bass);\n' + 'my=my+(equal(md,2)*.002*treb);\n' + 'my=my-(equal(md,3)*.002*treb);\n' + 'mx=if(above(mx,.9),.5,mx);\n' + 'mx=if(below(mx,.1),.5,mx);\n' + 'my=if(above(my,.9),.5,my);\n' + 'my=if(below(my,.1),.5,my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=bass*.1;\n' + 'r=bass*.5;'),

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
m.mx = 0;
m.my = 0;
m.md = 0;
m.oldmd = 0;
m.mx = 0.5;
m.my = 0.5;
m.md = 1;
			m.rkeys = ['my','mx','md'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.oldmd = m.md;
m.md = mod((m.md+rand(4)),4);
m.md = ifcond(equal(m.md, m.oldmd), mod((m.md+1),4), m.md);
m.mx = (m.mx+((equal(m.md, 0)*0.002)*m.bass));
m.mx = (m.mx-((equal(m.md, 1)*0.002)*m.bass));
m.my = (m.my+((equal(m.md, 2)*0.002)*m.treb));
m.my = (m.my-((equal(m.md, 3)*0.002)*m.treb));
m.mx = ifcond(above(m.mx, 0.9), 0.5, m.mx);
m.mx = ifcond(below(m.mx, 0.1), 0.5, m.mx);
m.my = ifcond(above(m.my, 0.9), 0.5, m.my);
m.my = ifcond(below(m.my, 0.1), 0.5, m.my);
m.x = m.mx;
m.y = m.my;
m.a = (m.bass*0.1);
m.g = (m.treb*0.5);
		return m;
	},
		'init_eqs_str' : ('mx=.5;\n' + 'my=.5;\n' + 'md=1;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('oldmd=md;\n' + 'md=(md+rand(4))%4;\n' + 'md=if(equal(md,oldmd),(md+1)%4,md);\n' + 'mx=mx+(equal(md,0)*.002*bass);\n' + 'mx=mx-(equal(md,1)*.002*bass);\n' + 'my=my+(equal(md,2)*.002*treb);\n' + 'my=my-(equal(md,3)*.002*treb);\n' + 'mx=if(above(mx,.9),.5,mx);\n' + 'mx=if(below(mx,.1),.5,mx);\n' + 'my=if(above(my,.9),.5,my);\n' + 'my=if(below(my,.1),.5,my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=bass*.1;\n' + 'g=treb*.5;'),

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
m.mx = 0;
m.my = 0;
m.md = 0;
m.oldmd = 0;
m.mx = 0.5;
m.my = 0.5;
m.md = 2;
			m.rkeys = ['my','mx','md'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.oldmd = m.md;
m.md = mod((m.md+rand(4)),4);
m.md = ifcond(equal(m.md, m.oldmd), mod((m.md+1),4), m.md);
m.mx = (m.mx+((equal(m.md, 0)*0.002)*m.bass));
m.mx = (m.mx-((equal(m.md, 1)*0.002)*m.bass));
m.my = (m.my+((equal(m.md, 2)*0.002)*m.treb));
m.my = (m.my-((equal(m.md, 3)*0.002)*m.treb));
m.mx = ifcond(above(m.mx, 0.9), 0.5, m.mx);
m.mx = ifcond(below(m.mx, 0.1), 0.5, m.mx);
m.my = ifcond(above(m.my, 0.9), 0.5, m.my);
m.my = ifcond(below(m.my, 0.1), 0.5, m.my);
m.x = m.mx;
m.y = m.my;
m.a = (m.bass*0.1);
		return m;
	},
		'init_eqs_str' : ('mx=.5;\n' + 'my=.5;\n' + 'md=2;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('oldmd=md;\n' + 'md=(md+rand(4))%4;\n' + 'md=if(equal(md,oldmd),(md+1)%4,md);\n' + 'mx=mx+(equal(md,0)*.002*bass);\n' + 'mx=mx-(equal(md,1)*.002*bass);\n' + 'my=my+(equal(md,2)*.002*treb);\n' + 'my=my-(equal(md,3)*.002*treb);\n' + 'mx=if(above(mx,.9),.5,mx);\n' + 'mx=if(below(mx,.1),.5,mx);\n' + 'my=if(above(my,.9),.5,my);\n' + 'my=if(below(my,.1),.5,my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=bass*.1;'),

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
m.mx = 0;
m.my = 0;
m.md = 0;
m.oldmd = 0;
m.mx = 0.5;
m.my = 0.4;
m.md = 3;
			m.rkeys = ['my','mx','md'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.oldmd = m.md;
m.md = mod((m.md+rand(4)),4);
m.md = ifcond(equal(m.md, m.oldmd), mod((m.md+1),4), m.md);
m.mx = (m.mx+((equal(m.md, 0)*0.002)*m.bass));
m.mx = (m.mx-((equal(m.md, 1)*0.002)*m.bass));
m.my = (m.my+((equal(m.md, 2)*0.002)*m.treb));
m.my = (m.my-((equal(m.md, 3)*0.002)*m.treb));
m.mx = ifcond(above(m.mx, 0.9), 0.5, m.mx);
m.mx = ifcond(below(m.mx, 0.1), 0.5, m.mx);
m.my = ifcond(above(m.my, 0.9), 0.5, m.my);
m.my = ifcond(below(m.my, 0.1), 0.5, m.my);
m.x = m.mx;
m.y = m.my;
m.a = (m.bass*0.1);
		return m;
	},
		'init_eqs_str' : ('mx=.5;\n' + 'my=.4;\n' + 'md=3;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('oldmd=md;\n' + 'md=(md+rand(4))%4;\n' + 'md=if(equal(md,oldmd),(md+1)%4,md);\n' + 'mx=mx+(equal(md,0)*.002*bass);\n' + 'mx=mx-(equal(md,1)*.002*bass);\n' + 'my=my+(equal(md,2)*.002*treb);\n' + 'my=my-(equal(md,3)*.002*treb);\n' + 'mx=if(above(mx,.9),.5,mx);\n' + 'mx=if(below(mx,.1),.5,mx);\n' + 'my=if(above(my,.9),.5,my);\n' + 'my=if(below(my,.1),.5,my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=bass*.1;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.220188,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 1.0,
			rad : 1.203212,
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
	'pixel_eqs_str' : (''),
};

return pmap;
});
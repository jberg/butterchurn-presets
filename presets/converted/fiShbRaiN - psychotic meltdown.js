define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.770001,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 0.721417,
		brighten : 0.0,
		mv_y : 20.160004,
		wave_scale : 1.285751,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.030301,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 1.0,
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
		ob_size : 0.05,
		wave_smoothing : 0.63,
		warpanimspeed : 3.749272,
		wave_dots : 0.0,
		mv_g : 0.4,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.989617,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.1,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.1,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 1.059151,
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
m.cx = ifcond(above(m.bass, 1.4), (rand(10)*0.1), m.cx);
m.cy = ifcond(above(m.treb, 1.4), (rand(10)*0.1), m.cy);
		m.rkeys = ['dx','dy','zoom','rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (m.rot+((pow(m.bass, m.rad)*0.2)*m.rad));
m.zoom = (m.zoom+((((pow(m.treb, m.ang)*0.04)*m.rad)*Math.sin(m.time))*above(m.treb, 1)));
m.dy = (m.dy+((above(m.bass, 1.3)*Math.sin(m.time))*0.03));
m.dx = (m.dx+((above(m.treb, 1.3)*Math.sin((m.time*0.23)))*0.03));
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
m.r = (m.treb_att*0.7);
m.g = (m.bass_att*0.6);
		return m;
	},
		'init_eqs_str' : ('mx=.5;\n' + 'my=.4;\n' + 'md=3;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('oldmd=md;\n' + 'md=(md+rand(4))%4;\n' + 'md=if(equal(md,oldmd),(md+1)%4,md);\n' + 'mx=mx+(equal(md,0)*.002*bass);\n' + 'mx=mx-(equal(md,1)*.002*bass);\n' + 'my=my+(equal(md,2)*.002*treb);\n' + 'my=my-(equal(md,3)*.002*treb);\n' + 'mx=if(above(mx,.9),.5,mx);\n' + 'mx=if(below(mx,.1),.5,mx);\n' + 'my=if(above(my,.9),.5,my);\n' + 'my=if(below(my,.1),.5,my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=bass*.1;\n' + 'r=treb_att*.7;\n' + 'g=bass_att*.6;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.1,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.220188,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.134784,
			x : 0.7,
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
m.x = (0.3+(rand(10)*0.3));
m.rad = (m.bass*0.4);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=.3+(rand(10)*.3);\n' + 'rad=bass*.4;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.1,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.7,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.y = (m.treb*0.5);
m.rad = (m.treb_att*0.4);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('y=treb*.5;\n' + 'rad=treb_att*.4;'),

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
	'frame_eqs_str' : ('cx=if(above(bass,1.4),rand(10)*.1,cx);\n' + 'cy=if(above(treb,1.4),rand(10)*.1,cy);'),
	'pixel_eqs_str' : ('rot=rot+(pow(bass,rad)*.2*rad);\n' + 'zoom=zoom+(pow(treb,ang)*.04*rad*sin(time)*above(treb,1));\n' + 'dy=dy+(above(bass,1.3)*sin(time)*.03);\n' + 'dx=dx+(above(treb,1.3)*sin(time*.23)*.03);'),
};

return pmap;
});
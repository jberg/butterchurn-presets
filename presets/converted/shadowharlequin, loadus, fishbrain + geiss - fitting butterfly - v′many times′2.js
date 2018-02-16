define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.4,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 1.0,
		mv_y : 9.6,
		wave_scale : 0.825,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.5,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.6,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 1.007,
		ob_size : 0.2,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.05,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.2,
		decay : 0.5,
		wave_a : 0.107,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 0.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.ret = 0;
m.gamma = 0;
m.cv = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_mystery = (m.time*0.2);
m.zoom = Math.sin((m.treb_att*0.55));
m.wave_a = (m.treb_att*0.25);
m.mv_a = (m.treb_att*0.35);
m.ret = (m.ret*(m.treb_att*0.5));
m.warp = (m.treb_att*0.5);
m.rot = Math.sin((m.treb_att*0.15));
m.ret = Math.sin((m.bass_att+m.treb_att));
m.gamma = ((m.gamma+(m.mid_att*0.40))+(m.treb_att*0.55));
m.mv_l = (3+(m.treb_att*0.75));
m.cv = (m.treb_att*0.25);
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
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.ma = 0;

			m.rkeys = ['my','mx','ma'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ma = (m.ma+(((above(m.bass_att, 1)*3.1415)*0.01)*m.bass_att));
m.ma = (m.ma-(((above(m.treb_att, 1)*3.1415)*0.01)*m.treb_att));
m.mx = (m.mx+(0.0002*Math.cos(m.ma)));
m.my = (m.my+(0.0002*Math.sin(m.ma)));
m.mx = ifcond(above(m.mx, 0.9), (0.9-m.mx), m.mx);
m.my = ifcond(above(m.my, 0.9), (0.9-m.my), m.my);
m.mx = ifcond(below(m.mx, 0.1), (0.9+m.mx), m.mx);
m.my = ifcond(below(m.my, 0.1), (0.9+m.my), m.my);
m.x = m.mx;
m.y = m.my;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ma=ma+(above(bass_att,1)*3.1415*.01*bass_att);\n' + 'ma=ma-(above(treb_att,1)*3.1415*.01*treb_att);\n' + 'mx=mx+(.0002*cos(ma));\n' + 'my=my+(.0002*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.5,
			g : 0.5,
			scaling : 27.42973,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.5,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.a1 = 0;
m.a2 = 0;
m.a3 = 0;
m.ma = 0;

			m.rkeys = ['my','mx','ma'];
			return m;
		},
		'frame_eqs' : function(m) {
m.a1 = (m.treb_att*0.25);
m.a2 = (m.mid_att*0.15);
m.a3 = (m.treb_att*0.25);
m.r = Math.sin(m.treb_att);
m.b = m.treb_att;
		return m;
	},
		'point_eqs' : function(m) {
m.ma = (m.ma+(((above(m.bass_att, 1)*3.1415)*0.01)*m.bass_att));
m.ma = (m.ma-(((above(m.treb_att, 1)*3.1415)*0.01)*m.treb_att));
m.mx = (m.mx+(0.0002*Math.cos(m.ma)));
m.my = (m.my+(0.0002*Math.sin(m.ma)));
m.mx = ifcond(above(m.mx, 0.9), (0.9-m.mx), m.mx);
m.my = ifcond(above(m.my, 0.9), (0.9-m.my), m.my);
m.mx = ifcond(below(m.mx, 0.1), (0.9+m.mx), m.mx);
m.my = ifcond(below(m.my, 0.1), (0.9+m.my), m.my);
m.x = m.mx;
m.y = m.my;
m.a = (m.treb_att*0.25);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a1 = treb_att * .25;\n' + 'a2 = mid_att * .15;\n' + 'a3 = treb_att * .25;\n' + 'r = sin(treb_att);\n' + 'b = treb_att;'),
		'point_eqs_str' : ('ma=ma+(above(bass_att,1)*3.1415*.01*bass_att);\n' + 'ma=ma-(above(treb_att,1)*3.1415*.01*treb_att);\n' + 'mx=mx+(.0002*cos(ma));\n' + 'my=my+(.0002*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a = treb_att * .25;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.5,
			g : 0.5,
			scaling : 6.62306,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.5,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.r2 = 0;
m.g2 = 0;
m.mx = 0;
m.my = 0;
m.b2 = 0;
m.a1 = 0;
m.a2 = 0;
m.a3 = 0;
m.ma = 0;

			m.rkeys = ['my','mx','ma'];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = Math.min(1, Math.max(0, (m.r+(0.1*((m.bass_att*0.217)+1)))));
m.g = Math.min(1, Math.max(0, (m.g+(0.1*((m.treb_att*0.191)+2)))));
m.b = Math.min(1, Math.max(0, (m.b+(0.1*((m.mid_att*0.232)+4)))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.1*Math.sin(((m.bass_att*0.257)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.1*Math.sin(((m.treb_att*0.237)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.1*Math.sin(((m.mid_att*0.284)+6))))));
m.a1 = (m.treb_att*0.25);
m.a2 = (m.mid_att*0.15);
m.a3 = (m.treb_att*0.25);
m.r = Math.sin(m.treb_att);
m.b = m.treb_att;
		return m;
	},
		'point_eqs' : function(m) {
m.ma = (m.ma+(((above(m.bass_att, 1)*3.1415)*0.01)*m.bass_att));
m.ma = (m.ma-(((above(m.treb_att, 1)*3.1415)*0.01)*m.treb_att));
m.mx = (m.mx+(0.0002*Math.cos(m.ma)));
m.my = (m.my+(0.0002*Math.sin(m.ma)));
m.mx = ifcond(above(m.mx, 0.9), (0.9-m.mx), m.mx);
m.my = ifcond(above(m.my, 0.9), (0.9-m.my), m.my);
m.mx = ifcond(below(m.mx, 0.1), (0.9+m.mx), m.mx);
m.my = ifcond(below(m.my, 0.1), (0.9+m.my), m.my);
m.x = m.mx;
m.y = m.my;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = min(1,max(0,r + 0.1*(bass_att*0.217 + 1)));\n' + 'g = min(1,max(0,g + 0.1*(treb_att*0.191 + 2)));\n' + 'b = min(1,max(0,b + 0.1*(mid_att*0.232 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.1*sin(bass_att*0.257 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.1*sin(treb_att*0.237 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.1*sin(mid_att*0.284 + 6)));\n' + 'a1 = treb_att * .25;\n' + 'a2 = mid_att * .15;\n' + 'a3 = treb_att * .25;\n' + 'r = sin(treb_att);\n' + 'b = treb_att;'),
		'point_eqs_str' : ('ma=ma+(above(bass_att,1)*3.1415*.01*bass_att);\n' + 'ma=ma-(above(treb_att,1)*3.1415*.01*treb_att);\n' + 'mx=mx+(.0002*cos(ma));\n' + 'my=my+(.0002*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.6,
			g : 0.6,
			scaling : 8.9269,
			samples : 142.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.6,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.r2 = 0;
m.g2 = 0;
m.mx = 0;
m.my = 0;
m.b2 = 0;
m.ma = 0;

			m.rkeys = ['my','mx','ma'];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = Math.min(1, Math.max(0, (m.r+(0.1*((m.bass_att*0.217)+1)))));
m.g = Math.min(1, Math.max(0, (m.g+(0.1*((m.treb_att*0.191)+2)))));
m.b = Math.min(1, Math.max(0, (m.b+(0.1*((m.mid_att*0.232)+4)))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.1*Math.sin(((m.bass_att*0.257)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.1*Math.sin(((m.treb_att*0.237)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.1*Math.sin(((m.mid_att*0.284)+6))))));
		return m;
	},
		'point_eqs' : function(m) {
m.ma = (m.ma+(((above(m.bass_att, 1)*3.1415)*0.01)*m.bass_att));
m.ma = (m.ma-(((above(m.treb_att, 1)*3.1415)*0.01)*m.treb_att));
m.mx = (m.mx+(0.0002*Math.cos(m.ma)));
m.my = (m.my+(0.0002*Math.sin(m.ma)));
m.mx = ifcond(above(m.mx, 0.9), (0.9-m.mx), m.mx);
m.my = ifcond(above(m.my, 0.9), (0.9-m.my), m.my);
m.mx = ifcond(below(m.mx, 0.1), (0.9+m.mx), m.mx);
m.my = ifcond(below(m.my, 0.1), (0.9+m.my), m.my);
m.x = m.mx;
m.y = m.my;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = min(1,max(0,r + 0.1*(bass_att*0.217 + 1)));\n' + 'g = min(1,max(0,g + 0.1*(treb_att*0.191 + 2)));\n' + 'b = min(1,max(0,b + 0.1*(mid_att*0.232 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.1*sin(bass_att*0.257 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.1*sin(treb_att*0.237 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.1*sin(mid_att*0.284 + 6)));'),
		'point_eqs_str' : ('ma=ma+(above(bass_att,1)*3.1415*.01*bass_att);\n' + 'ma=ma-(above(treb_att,1)*3.1415*.01*treb_att);\n' + 'mx=mx+(.0002*cos(ma));\n' + 'my=my+(.0002*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;'),

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
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.13,
			r : 0.0,
			border_g : 1.0,
			rad : 100.0,
			x : 0.37,
			y : 0.5,
			ang : 3.64425,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.a1 = 0;
m.mv_l = 0;
m.t1 = 0;
m.t2 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['r2','b','g','g2','b2','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = (m.time*(0.3+(0.1*m.t1)));
m.rad = (m.rad*(0.9+(0.2*m.t2)));
m.r = Math.min(1, Math.max(0, (m.r+(0.2*Math.sin(((m.time*0.417)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.2*Math.sin(((m.time*0.391)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.2*Math.sin(((m.time*0.432)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.2*Math.sin(((m.time*0.657)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.2*Math.sin(((m.time*0.737)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.2*Math.sin(((m.time*0.884)+6))))));
m.a1 = (0.3+(0.1*Math.sin((m.treb_att*0.55))));
m.mv_l = (3+(1*(m.treb_att*0.25)));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('tex_ang = time*(0.3 + 0.1*t1);\n' + 'rad = rad * (0.9 + 0.2*t2);\n' + 'r = min(1,max(0,r + 0.2*sin(time*0.417 + 1)));\n' + 'g = min(1,max(0,g + 0.2*sin(time*0.391 + 2)));\n' + 'b = min(1,max(0,b + 0.2*sin(time*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.2*sin(time*0.657 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.2*sin(time*0.737 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.2*sin(time*0.884 + 6)));\n' + 'a1 = 0.3 + 0.1 * sin(treb_att * .55);\n' + 'mv_l = 3 + 1 * (treb_att * .25);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.6,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.89796,
			x : 0.37,
			y : 0.5,
			ang : 3.64425,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {

m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['r2','b','g','g2','b2','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.05*Math.sin(((m.mid_att*0.15)+3))));
m.y = (m.y+(0.03*Math.sin(((m.mid_att*0.19)+1))));
m.tex_ang = (m.bass_att*(0.1+(0.1*m.treb_att)));
m.rad = (m.rad*(0.9+(0.6*m.treb_att)));
m.r = Math.min(1, Math.max(0, (m.r+(0.1*((m.bass_att*0.217)+1)))));
m.g = Math.min(1, Math.max(0, (m.g+(0.1*((m.treb_att*0.191)+2)))));
m.b = Math.min(1, Math.max(0, (m.b+(0.1*((m.mid_att*0.232)+4)))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.1*Math.sin(((m.bass_att*0.257)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.1*Math.sin(((m.treb_att*0.237)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.1*Math.sin(((m.mid_att*0.284)+6))))));
m.x = (m.x+Math.sin((m.treb_att*0.005)));
m.y = (m.y+Math.sin((m.mid_att*0.013)));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('x = x + 0.05*sin(mid_att*0.15+3);\n' + 'y = y + 0.03*sin(mid_att*0.19+1);\n' + 'tex_ang = bass_att*(0.1 + 0.1*treb_att);\n' + 'rad = rad * (0.9 + 0.6*treb_att);\n' + 'r = min(1,max(0,r + 0.1*(bass_att*0.217 + 1)));\n' + 'g = min(1,max(0,g + 0.1*(treb_att*0.191 + 2)));\n' + 'b = min(1,max(0,b + 0.1*(mid_att*0.232 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.1*sin(bass_att*0.257 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.1*sin(treb_att*0.237 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.1*sin(mid_att*0.284 + 6)));\n' + 'x = x + sin(treb_att * .005);\n' + 'y = y + sin(mid_att * .013);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.51386,
			x : 0.77,
			y : 0.43,
			ang : 4.20974,
			sides : 13.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.t1 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['r2','b','g','g2','b2','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.05*(m.bass_att*0.07)));
m.y = (m.y+(0.03*(m.bass_att*0.03)));
m.tex_ang = (m.mid_att*(0.8+(0.1*m.t1)));
m.rad = (m.rad*(0.9+(0.2*m.mid_att)));
m.r = Math.min(1, Math.max(0, (m.r+(0.1*((m.bass_att*0.417)+1)))));
m.g = Math.min(1, Math.max(0, (m.g+(0.1*((m.mid_att*0.391)+2)))));
m.b = Math.min(1, Math.max(0, (m.b+(0.1*((m.treb_att*0.432)+4)))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.1*Math.sin(((m.bass_att*0.457)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.1*Math.sin(((m.mid_att*0.437)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.1*Math.sin(((m.treb_att*0.484)+6))))));
m.sides = m.treb_att;
m.x = (m.x+Math.sin((m.mid_att*0.019)));
m.y = (m.y+Math.sin((m.treb_att*0.015)));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('x = x + 0.05*(bass_att*0.07);\n' + 'y = y + 0.03*(bass_att*0.03);\n' + 'tex_ang = mid_att*(0.8 + 0.1*t1);\n' + 'rad = rad * (0.9 + 0.2*mid_att);\n' + 'r = min(1,max(0,r + 0.1*(bass_att*0.417 + 1)));\n' + 'g = min(1,max(0,g + 0.1*(mid_att*0.391 + 2)));\n' + 'b = min(1,max(0,b + 0.1*(treb_att*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.1*sin(bass_att*0.457 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.1*sin(mid_att*0.437 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.1*sin(treb_att*0.484 + 6)));\n' + 'sides = treb_att;\n' + 'x = x + sin(mid_att * .019);\n' + 'y = y + sin(treb_att * .015);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.8,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.6,
			border_g : 1.0,
			rad : 0.30054,
			x : 0.5,
			y : 0.7,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.rot = 0;

			m.rkeys = ['r2','b','g','g2','b2','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.2*Math.sin((m.treb_att*0.25))));
m.y = (m.y+(0.1*Math.sin(((m.treb_att*0.5)+2))));
m.rot = (m.mid_att*0.45);
m.r = Math.min(1, Math.max(0, (m.r+(0.1*((m.bass_att*0.417)+1)))));
m.g = Math.min(1, Math.max(0, (m.g+(0.1*((m.mid_att*0.391)+2)))));
m.b = Math.min(1, Math.max(0, (m.b+(0.1*((m.treb_att*0.432)+4)))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.1*Math.sin(((m.bass_att*0.457)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.1*Math.sin(((m.mid_att*0.437)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.1*Math.sin(((m.treb_att*0.484)+6))))));
m.ang = Math.sin(m.treb_att);
m.x = (m.x+Math.sin((m.mid_att*0.016)));
m.y = (m.x+Math.sin((m.treb_att*0.015)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = x + 0.2*sin(treb_att*0.25);\n' + 'y = y + 0.1*sin(treb_att*0.5+2);\n' + 'rot = mid_att * .45;\n' + 'r = min(1,max(0,r + 0.1*(bass_att*0.417 + 1)));\n' + 'g = min(1,max(0,g + 0.1*(mid_att*0.391 + 2)));\n' + 'b = min(1,max(0,b + 0.1*(treb_att*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.1*sin(bass_att*0.457 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.1*sin(mid_att*0.437 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.1*sin(treb_att*0.484 + 6)));\n' + 'ang = sin(treb_att);\n' + 'x = x + sin(mid_att * .016);\n' + 'y = x + sin(treb_att * .015);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = fract(uv);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_fc_main, tmpvar_2);\n' + '  ret_1 = tmpvar_3.xyz;\n' + '  ret_1 = (ret_1 * 0.5);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = ((vec2(-0.993, 0.993) * (uv - 0.5)) + 0.5);\n' + '   vec3 tmpvar_3;\n' + '  tmpvar_3 = mix (texture2D (sampler_main, uv).xyz, texture2D (sampler_main, tmpvar_2).xyz, vec3(0.5, 0.5, 0.5));\n' + '  ret_1 = tmpvar_3;\n' + '  ret_1 = (ret_1 * 2.0);\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = sqrt(ret_1);\n' + '  ret_1 = (tmpvar_4 * tmpvar_4);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_mystery = time*0.2;\n' + 'zoom = (sin(treb_att*.55));\n' + 'wave_a = treb_att * .25;\n' + 'mv_a = (treb_att * .35);\n' + 'ret = (ret*(treb_att*0.5));\n' + 'warp = treb_att * 0.5;\n' + 'rot = sin(treb_att * .15);\n' + 'ret = sin(bass_att+treb_att);\n' + 'gamma = gamma + (mid_att*.40)+(treb_att*.55);\n' + 'mv_l = 3+(treb_att*.75);\n' + 'cv = treb_att*.25;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
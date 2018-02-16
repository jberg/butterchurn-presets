define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.68,
		wave_g : 1.0,
		ib_g : 1.0,
		mv_x : 7.04,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 0.198,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
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
		mv_b : 0.5,
		echo_zoom : 0.997,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9995,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.2,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : -0.32,
		decay : 0.99,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 1.0,
		mv_r : 0.5,
		rating : 2.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.bt2 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.mt1 = 0;
m.mt2 = 0;
m.q20 = 0;
m.tt1 = 0;
m.tt2 = 0;
m.bt1 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.bt1 = ((m.bt1*0.95)+div((sqr((m.bass*5))*30),m.fps));
m.mt1 = ((m.mt1*0.95)+div((sqr((m.mid*5))*30),m.fps));
m.tt1 = ((m.tt1*0.95)+div((sqr((m.treb*5))*30),m.fps));
m.bt2 = (m.bt2+(m.bt1*0.005));
m.mt2 = (m.mt2+(m.mt1*0.005));
m.tt2 = (m.tt2+(m.tt1*0.005));
m.q1 = (m.bt2*0.01);
m.q2 = (m.mt2*0.01);
m.q3 = (m.tt2*0.01);
m.q4 = (2+(0.7*Math.sin((0.3*m.q1))));
m.q5 = (0.5+(0.5*Math.sin((0.5*m.q2))));
m.q6 = (0.2*Math.abs(Math.sin((0.1*m.q3))));
m.decay = 1;
m.q20 = m.aspecty;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = ((0.1*pow(-m.ang, 3))-(m.q4*Math.sin(((0.5+(0.5*Math.sin((0.2*m.q1))))*m.ang))));
m.zoom = (((0.8+(0.2*Math.sin((0.2*m.q2))))*Math.sin(((0.2*Math.sin((0.2*m.q3)))-m.rad)))+1.3);
m.zoom += (m.q6*Math.sin((10*Math.sin((m.q5+m.x)))));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.9,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.3,
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
			a : 0.26,
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

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.1,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.2,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.3,
			border_g : 1.0,
			rad : 0.84088,
			x : 0.5,
			y : 0.5,
			ang : 0.53,
			sides : 30.0,
			border_r : 1.0,
			num_inst : 100.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.c = 0;
m.i = 0;
m.sa = 0;
m.q20 = 0;
m.v = 0;
m.x0 = 0;
m.y1 = 0;
m.x1 = 0;
m.z = 0;
m.t1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.i = m.instance;
m.sa = div(m.i,m.num_inst);
m.c = div(6.28,360);
m.v = (0.25*m.time);
m.t4 = Math.cos((1.3*m.v));
m.t1 = (2.5-((30*m.t4)*m.c));
m.x0 = (-0.5+m.sa);
m.x1 = (m.x0*Math.cos(m.t1));
m.y1 = (m.x0*Math.sin(m.t1));
m.z = 0.12;
m.x = (0.5+div((m.z*m.x1),m.q20));
m.y = (0.5+(m.z*m.y1));
m.rad *= (m.z*Math.sin((3.14*m.sa)));
m.r += (0.1*Math.sin((0.3*m.v)));
m.g += (0.1*Math.sin((0.5*m.v)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('i= instance;\n' + '    sa= i/num_inst;\n' + 'c=6.28/360;\n' + '         v=.25*time;\n' + 't4= cos(1.3*v);\n' + '     t1= 2.5-30*t4*c;\n' + 'x0 =-.5+sa;\n' + 'x1= x0*cos(t1);\n' + 'y1= x0*sin(t1);\n' + 'z= .12;\n' + 'x= .5 + z*x1/q20;\n' + '     y= .5+ z*y1;\n' + 'rad *= z*sin(3.14*sa);\n' + 'r += .1*sin(.3*v);\n' + 'g += .1*sin(.5*v);'),

		},
		{
		'baseVals' : {
			r2 : 0.4,
			a : 0.5,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.3,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.2,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.0,
			rad : 1.04448,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 16.0,
			border_r : 0.0,
			num_inst : 200.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.w7 = 0;
m.x8 = 0;
m.y9 = 0;
m.w8 = 0;
m.x9 = 0;
m.c10 = 0;
m.w9 = 0;
m.c = 0;
m.d10 = 0;
m.c11 = 0;
m.d11 = 0;
m.c12 = 0;
m.d12 = 0;
m.c13 = 0;
m.d13 = 0;
m.c14 = 0;
m.h10 = 0;
m.d14 = 0;
m.c15 = 0;
m.h11 = 0;
m.d15 = 0;
m.c16 = 0;
m.i = 0;
m.h12 = 0;
m.h1 = 0;
m.d16 = 0;
m.x9j = 0;
m.c17 = 0;
m.h13 = 0;
m.h2 = 0;
m.y9j = 0;
m.d17 = 0;
m.x8j = 0;
m.h14 = 0;
m.h3 = 0;
m.y8j = 0;
m.mx = 0;
m.h15 = 0;
m.h4 = 0;
m.x6j = 0;
m.my = 0;
m.d1 = 0;
m.h16 = 0;
m.h5 = 0;
m.y6j = 0;
m.x5j = 0;
m.y15j = 0;
m.c1 = 0;
m.d2 = 0;
m.h17 = 0;
m.h6 = 0;
m.y5j = 0;
m.sa = 0;
m.x15j = 0;
m.y14j = 0;
m.c2 = 0;
m.d3 = 0;
m.h7 = 0;
m.x3j = 0;
m.ra = 0;
m.q20 = 0;
m.x14j = 0;
m.c3 = 0;
m.d4 = 0;
m.p = 0;
m.h8 = 0;
m.y3j = 0;
m.x2j = 0;
m.y1rj = 0;
m.y12j = 0;
m.c4 = 0;
m.d5 = 0;
m.y2j = 0;
m.h9 = 0;
m.x1rj = 0;
m.x12j = 0;
m.y11j = 0;
m.c5 = 0;
m.d6 = 0;
m.x11j = 0;
m.c6 = 0;
m.d7 = 0;
m.s = 0;
m.c7 = 0;
m.d8 = 0;
m.c8 = 0;
m.d9 = 0;
m.c9 = 0;
m.v = 0;
m.w10 = 0;
m.y1lj = 0;
m.x10 = 0;
m.w11 = 0;
m.x1lj = 0;
m.y10 = 0;
m.x11 = 0;
m.w12 = 0;
m.y1 = 0;
m.y11 = 0;
m.x12 = 0;
m.w13 = 0;
m.x1 = 0;
m.y2 = 0;
m.y12 = 0;
m.z = 0;
m.x13 = 0;
m.w14 = 0;
m.w1 = 0;
m.x2 = 0;
m.y3 = 0;
m.y13 = 0;
m.x14 = 0;
m.w15 = 0;
m.w2 = 0;
m.x3 = 0;
m.y4 = 0;
m.y14 = 0;
m.x15 = 0;
m.w16 = 0;
m.w3 = 0;
m.x4 = 0;
m.y5 = 0;
m.y15 = 0;
m.x16 = 0;
m.w17 = 0;
m.t1 = 0;
m.w4 = 0;
m.x5 = 0;
m.y6 = 0;
m.y16 = 0;
m.x17 = 0;
m.t2 = 0;
m.w5 = 0;
m.x6 = 0;
m.y7 = 0;
m.y17 = 0;
m.t3 = 0;
m.w6 = 0;
m.x7 = 0;
m.y8 = 0;

			m.rkeys = ['x9j','y9j','x8j','y8j','x6j','y6j','x5j','y15j','y5j','x15j','y14j','x3j','x14j','y3j','x2j','y12j','y2j','x12j','y11j','x11j'];
			return m;
		},
		'frame_eqs' : function(m) {
m.i = m.instance;
m.sa = div(m.i,m.num_inst);
m.p = (1+mod((17*m.sa),17));
m.s = (((17*m.sa)-m.p)+1);
m.c = div(6.28,360);
m.v = (0.25*m.time);
m.t1 = Math.sin(m.v);
m.t2 = Math.sin((0.6*m.v));
m.t3 = Math.sin((0.8*m.v));
m.t4 = Math.cos((1.3*m.v));
m.d1 = 40;
m.w1 = ((-60+(30*m.t4))+(10*m.s));
m.h1 = (25*Math.sin((1+(1.14*m.s))));
m.d2 = 24;
m.w2 = ((m.w1+30)+(25*m.t1));
m.h2 = 16;
m.d3 = 0;
m.w3 = ((m.w2+0)+(5*m.t2));
m.h3 = 30;
m.d4 = 0;
m.w4 = m.w3;
m.h4 = (0*m.s);
m.d5 = 18;
m.w5 = ((m.w1+140)-(25*m.t1));
m.h5 = (10*(1-(0.5*m.s)));
m.d6 = 15;
m.w6 = ((m.w5-110)-(20*m.t3));
m.h6 = (6*(1-(0.3*m.s)));
m.d7 = 11;
m.w7 = (m.w6-(5*m.t3));
m.h7 = (4*(1+(0.3*m.s)));
m.d8 = m.d5;
m.w8 = ((m.w1+140)+(25*m.t4));
m.h8 = m.h5;
m.d9 = m.d6;
m.w9 = ((m.w8-110)+(20*m.t1));
m.h9 = m.h6;
m.d10 = m.d7;
m.w10 = ((m.w9+0)-(5*m.t2));
m.h10 = m.h7;
m.d11 = 20;
m.w11 = ((m.w1+60)+(25*m.t3));
m.h11 = (12*(1-(0.5*m.s)));
m.d12 = 17;
m.w12 = ((m.w11+80)-(25*m.t4));
m.h12 = (6*(1-(0.3*m.s)));
m.d13 = 11;
m.w13 = ((m.w12-80)-(20*m.t4));
m.h13 = (5*(1-(0.3*m.s)));
m.d14 = m.d11;
m.w14 = ((m.w1+60)-(25*m.t1));
m.h14 = m.h11;
m.d15 = m.d12;
m.w15 = ((m.w14+80)+(25*m.t2));
m.h15 = m.h12;
m.d16 = m.d13;
m.w16 = ((m.w15-80)+(15*m.t3));
m.h16 = m.h13;
m.d17 = 0;
m.w17 = 0;
m.h17 = 0;
m.x1 = ((m.d1*(-0.5+m.s))*Math.sin((m.w1*m.c)));
m.y1 = (-15+((m.d1*(-0.5+m.s))*Math.cos((m.w1*m.c))));
m.x2 = (m.x1rj+((m.d2*m.s)*Math.sin((m.w2*m.c))));
m.y2 = (m.y1rj+((m.d2*m.s)*Math.cos((m.w2*m.c))));
m.x2j = ifcond(m.c10, m.x2, m.x2j);
m.y2j = ifcond(m.c10, m.y2, m.y2j);
m.x3 = (m.x2j+((m.d3*m.s)*Math.sin((m.w3*m.c))));
m.y3 = (m.y2j+((m.d3*m.s)*Math.cos((m.w3*m.c))));
m.x3j = ifcond(m.c11, m.x3, m.x3j);
m.y3j = ifcond(m.c11, m.y3, m.y3j);
m.x4 = (m.x3j+((m.d4*m.s)*Math.sin((m.w4*m.c))));
m.y4 = (m.y3j+((m.d4*m.s)*Math.cos((m.w4*m.c))));
m.x5 = (m.x1rj+((m.d5*m.s)*Math.sin((m.w5*m.c))));
m.y5 = (m.y1rj+((m.d5*m.s)*Math.cos((m.w5*m.c))));
m.x5j = ifcond(m.c1, m.x5, m.x5j);
m.y5j = ifcond(m.c1, m.y5, m.y5j);
m.x6 = (m.x5j+((m.d6*m.s)*Math.sin((m.w6*m.c))));
m.y6 = (m.y5j+((m.d6*m.s)*Math.cos((m.w6*m.c))));
m.x6j = ifcond(m.c2, m.x6, m.x6j);
m.y6j = ifcond(m.c2, m.y6, m.y6j);
m.x7 = (m.x6j+((m.d7*m.s)*Math.sin((m.w7*m.c))));
m.y7 = (m.y6j+((m.d7*m.s)*Math.cos((m.w7*m.c))));
m.x8 = (m.x1rj+((m.d8*m.s)*Math.sin((m.w8*m.c))));
m.y8 = (m.y1rj+((m.d8*m.s)*Math.cos((m.w8*m.c))));
m.x8j = ifcond(m.c15, m.x8, m.x8j);
m.y8j = ifcond(m.c15, m.y8, m.y8j);
m.x9 = (m.x8j+((m.d9*m.s)*Math.sin((m.w9*m.c))));
m.y9 = (m.y8j+((m.d9*m.s)*Math.cos((m.w9*m.c))));
m.x9j = ifcond(m.c16, m.x9, m.x9j);
m.y9j = ifcond(m.c16, m.y9, m.y9j);
m.x10 = (m.x9j+((m.d10*m.s)*Math.sin((m.w10*m.c))));
m.y10 = (m.y9j+((m.d10*m.s)*Math.cos((m.w10*m.c))));
m.x11 = (m.x1lj+((m.d11*m.s)*Math.sin((m.w11*m.c))));
m.y11 = (m.y1lj+((m.d11*m.s)*Math.cos((m.w11*m.c))));
m.x11j = ifcond(m.c4, m.x11, m.x11j);
m.y11j = ifcond(m.c4, m.y11, m.y11j);
m.x12 = (m.x11j+((m.d12*m.s)*Math.sin((m.w12*m.c))));
m.y12 = (m.y11j+((m.d12*m.s)*Math.cos((m.w12*m.c))));
m.x12j = ifcond(m.c5, m.x12, m.x12j);
m.y12j = ifcond(m.c5, m.y12, m.y12j);
m.x13 = (m.x12j+((m.d13*m.s)*Math.sin((m.w13*m.c))));
m.y13 = (m.y12j+((m.d13*m.s)*Math.cos((m.w13*m.c))));
m.x14 = (m.x1lj+((m.d14*m.s)*Math.sin((m.w14*m.c))));
m.y14 = (m.y1lj+((m.d14*m.s)*Math.cos((m.w14*m.c))));
m.x14j = ifcond(m.c12, m.x14, m.x14j);
m.y14j = ifcond(m.c12, m.y14, m.y14j);
m.x15 = (m.x14j+((m.d15*m.s)*Math.sin((m.w15*m.c))));
m.y15 = (m.y14j+((m.d15*m.s)*Math.cos((m.w15*m.c))));
m.x15j = ifcond(m.c13, m.x15, m.x15j);
m.y15j = ifcond(m.c13, m.y15, m.y15j);
m.x16 = (m.x15j+((m.d16*m.s)*Math.sin((m.w16*m.c))));
m.y16 = (m.y15j+((m.d16*m.s)*Math.cos((m.w16*m.c))));
m.x17 = (m.x1lj+((m.d17*m.s)*Math.sin((m.w17*m.c))));
m.y17 = (m.y1lj+((m.d17*m.s)*Math.cos((m.w17*m.c))));
m.mx = (((((((((((((((((m.c1*m.x5)+(m.c2*m.x6))+(m.c3*m.x7))+(m.c4*m.x11))+(m.c5*m.x12))+(m.c6*m.x13))+(m.c7*m.x17))+(m.c8*m.x1))+(m.c9*m.x4))+(m.c10*m.x2))+(m.c11*m.x3))+(m.c12*m.x14))+(m.c13*m.x15))+(m.c14*m.x16))+(m.c15*m.x8))+(m.c16*m.x9))+(m.c17*m.x10));
m.my = (((((((((((((((((m.c1*m.y5)+(m.c2*m.y6))+(m.c3*m.y7))+(m.c4*m.y11))+(m.c5*m.y12))+(m.c6*m.y13))+(m.c7*m.y17))+(m.c8*m.y1))+(m.c9*m.y4))+(m.c10*m.y2))+(m.c11*m.y3))+(m.c12*m.y14))+(m.c13*m.y15))+(m.c14*m.y16))+(m.c15*m.y8))+(m.c16*m.y9))+(m.c17*m.y10));
m.z = 0.001;
m.x = (0.5+div((m.z*m.mx),m.q20));
m.y = (0.5+(m.z*m.my));
m.ra = (((((((((((((((((m.c1*m.h5)+(m.c2*m.h6))+(m.c3*m.h7))+(m.c4*m.h11))+(m.c5*m.h12))+(m.c6*m.h13))+(m.c7*m.h17))+(m.c8*m.h1))+(m.c9*m.h4))+(m.c10*m.h2))+(m.c11*m.h3))+(m.c15*m.h8))+(m.c16*m.h9))+(m.c17*m.h10))+(m.c12*m.h14))+(m.c13*m.h15))+(m.c14*m.h16));
m.rad *= ((m.z*m.ra)*(1-(0.0*Math.cos(((17*6.28)*m.sa)))));
m.r2 += (0.1*Math.sin((0.3*m.v)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('i= instance;\n' + '    sa= i/num_inst;\n' + '     p= 1+(17*sa)%17;\n' + '     s= 17*sa-p+1;\n' + '      c=6.28/360;\n' + 'v=.25*time;\n' + 't1= sin(v);\n' + '   t2= sin(.6*v);\n' + '   t3= sin(.8*v);\n' + '    t4= cos(1.3*v);\n' + 'd1 = 40;\n' + '       w1 =  -60+ 30*t4+ 10*s;\n' + '         h1 = 25*sin(1+1.14*s);\n' + 'd2 = 24;\n' + '       w2 =  w1 +30+25*t1;\n' + '                h2 = 16;\n' + 'd3 = 0;\n' + '         w3 =  w2+0 + 5*t2;\n' + '                h3 = 30;\n' + 'd4 = 0;\n' + '         w4 =  w3  ;\n' + '                         h4 = 0*s;\n' + 'd5 = 18;\n' + '       w5 =  w1+140 - 25*t1;\n' + '           h5 = 10*(1-.5*s);\n' + 'd6 = 15;\n' + '       w6 =  w5 - 110 - 20*t3;\n' + '        h6 = 6*(1-.3*s);\n' + 'd7 = 11;\n' + '       w7 =  w6 - 5*t3;\n' + '             h7 = 4*(1+.3*s);\n' + 'd8 = d5;\n' + '       w8 =  w1+140 + 25*t4;\n' + '           h8 = h5;\n' + 'd9 = d6;\n' + '       w9 =  w8 - 110 + 20*t1;\n' + '        h9 = h6;\n' + 'd10 = d7;\n' + '     w10 =  w9 + 0-5*t2;\n' + '             h10 = h7;\n' + 'd11 = 20;\n' + '     w11 = w1 + 60+25*t3;\n' + '              h11 = 12*(1-.5*s);\n' + 'd12 = 17;\n' + '     w12 = w11 + 80 - 25*t4;\n' + '        h12 = 6*(1-.3*s);\n' + 'd13 = 11;\n' + '     w13 = w12-80-20*t4;\n' + '            h13 = 5*(1-.3*s);\n' + 'd14 = d11;\n' + '    w14 = w1 +60- 25*t1;\n' + '              h14 = h11;\n' + 'd15 = d12;\n' + '    w15 = w14 + 80 + 25*t2;\n' + '        h15 = h12;\n' + 'd16 = d13;\n' + '    w16 = w15-80+15*t3;\n' + '            h16 = h13;\n' + 'd17 = 0;\n' + '      w17 =  0;\n' + '                      h17 = 0;\n' + 'x1=  d1*(-.5+s)*sin(w1*c) ;\n' + '      y1=   -15+d1*(-.5+s)*cos(w1*c);\n' + 'x2=  x1rj + d2*s*sin(w2*c);\n' + '       y2=  y1rj +  d2*s*cos(w2*c);\n' + '      x2j= if(c10, x2, x2j);\n' + '       y2j= if(c10, y2, y2j);\n' + 'x3=  x2j  + d3*s*sin(w3*c) ;\n' + '      y3=  y2j  +  d3*s*cos(w3*c) ;\n' + '     x3j= if(c11, x3, x3j);\n' + '       y3j= if(c11, y3, y3j);\n' + 'x4=  x3j  + d4*s*sin(w4*c) ;\n' + '      y4=  y3j  +  d4*s*cos(w4*c) ;\n' + 'x5=  x1rj + d5*s*sin(w5*c) ;\n' + '      y5=  y1rj +  d5*s*cos(w5*c) ;\n' + '     x5j= if(c1, x5, x5j);\n' + '        y5j= if(c1, y5, y5j);\n' + 'x6=  x5j  + d6*s*sin(w6*c) ;\n' + '      y6=  y5j  +  d6*s*cos(w6*c) ;\n' + '     x6j= if(c2, x6, x6j);\n' + '        y6j= if(c2, y6, y6j);\n' + 'x7=  x6j  + d7*s*sin(w7*c) ;\n' + '      y7=  y6j  +  d7*s*cos(w7*c) ;\n' + 'x8=  x1rj + d8*s*sin(w8*c) ;\n' + '      y8=  y1rj +  d8*s*cos(w8*c) ;\n' + '     x8j= if(c15, x8, x8j);\n' + '       y8j= if(c15, y8, y8j);\n' + 'x9=  x8j  + d9*s*sin(w9*c);\n' + '       y9=  y8j  +  d9*s*cos(w9*c);\n' + '      x9j= if(c16, x9, x9j);\n' + '       y9j= if(c16, y9, y9j);\n' + 'x10=  x9j  + d10*s*sin(w10*c);\n' + '    y10=  y9j  +  d10*s*cos(w10*c);\n' + 'x11=  x1lj + d11*s*sin(w11*c) ;\n' + '   y11=  y1lj +  d11*s*cos(w11*c) ;\n' + '   x11j= if(c4, x11, x11j) ;\n' + '    y11j= if(c4, y11, y11j);\n' + 'x12=  x11j + d12*s*sin(w12*c) ;\n' + '   y12=  y11j +  d12*s*cos(w12*c) ;\n' + '   x12j= if(c5, x12, x12j);\n' + '     y12j= if(c5, y12, y12j);\n' + 'x13=  x12j + d13*s*sin(w13*c) ;\n' + '   y13=  y12j +  d13*s*cos(w13*c) ;\n' + 'x14=  x1lj + d14*s*sin(w14*c) ;\n' + '   y14=  y1lj +  d14*s*cos(w14*c) ;\n' + '   x14j= if(c12, x14, x14j);\n' + '    y14j= if(c12, y14, y14j);\n' + 'x15=  x14j + d15*s*sin(w15*c) ;\n' + '   y15=  y14j +  d15*s*cos(w15*c) ;\n' + '   x15j= if(c13, x15, x15j);\n' + '    y15j= if(c13, y15, y15j);\n' + 'x16=  x15j + d16*s*sin(w16*c) ;\n' + '   y16=  y15j +  d16*s*cos(w16*c) ;\n' + 'x17=  x1lj + d17*s*sin(w17*c) ;\n' + '   y17=  y1lj +  d17*s*cos(w17*c) ;\n' + 'mx=  c1*x5 + c2*x6 + c3*x7 + c4*x11 + c5*x12 + c6*x13 + c7*x17 + c8*x1 + c9*x4+ c10*x2 + c11*x3 + c12*x14 + c13*x15 + c14*x16 + c15*x8 + c16*x9 + c17*x10 ;\n' + 'my=  c1*y5 + c2*y6 + c3*y7 + c4*y11 + c5*y12 + c6*y13 + c7*y17 + c8*y1 + c9*y4+ c10*y2 + c11*y3 + c12*y14 + c13*y15 + c14*y16 + c15*y8 + c16*y9 + c17*y10  ;\n' + 'z= .001;\n' + 'x= .5 + z*mx/q20;\n' + '     y= .5+ z*my;\n' + 'ra=  c1*h5 + c2*h6 + c3*h7 + c4*h11 + c5*h12 + c6*h13 + c7*h17 + c8*h1 + c9*h4+ c10*h2 + c11*h3 + c15*h8 + c16*h9 + c17*h10 + c12*h14 + c13*h15 + c14*h16 ;\n' + 'rad *= z*ra*(1-.0*cos(17*6.28*sa));\n' + 'r2 += .1*sin(.3*v);'),

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
			g2 : 1.0,
			tex_zoom : 0.88745,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.03299,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 10.0,
			border_r : 1.0,
			num_inst : 1000.0,
			},
		'init_eqs' : function(m) {
m.s3 = 0;
m.s4 = 0;
m.d = 0;
m.i = 0;
m.sa = 0;
m.q20 = 0;
m.t = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.z = 0;
m.x2 = 0;
m.s1 = 0;
m.t2 = 0;
m.s2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.i = m.instance;
m.sa = div(m.i,m.num_inst);
m.t = (0.1*m.time);
m.s1 = (4*m.sa);
m.s2 = mod(m.s1,4);
m.s3 = div(mod(m.i,20),20);
m.s4 = Math.cos(m.s3);
m.x1 = ((-0.5+m.sa)+(1.5*Math.sin(m.t)));
m.t2 = ((6.3*m.s3)+m.t);
m.x2 = ((m.x1*Math.cos(m.t2))-(m.y1*Math.sin(m.t2)));
m.y2 = ((m.y1*Math.cos(m.t2))+(m.x1*Math.sin(m.t2)));
m.z = 0.5;
m.x = (0.5+div((m.z*m.x2),m.q20));
m.y = (0.5+(m.z*m.y2));
m.d = sqrt(((m.x2*m.x2)+(m.y2*m.y2)));
m.r2 = (0.4+(0.3*Math.sin(((20*m.d)+(0.7*m.t)))));
m.g2 = (m.r2*m.r2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('i= instance;\n' + '       sa= i/num_inst;\n' + '         t= .1*time;\n' + 's1=4*sa;\n' + '    s2= s1%4;\n' + '     s3= (i%20)/20;\n' + '    s4= cos(s3);\n' + 'x1= -.5+sa + 1.5*sin(t) ;\n' + 't2= 6.3*s3 +  t;\n' + 'x2= x1*cos(t2)-y1*sin(t2);\n' + 'y2= y1*cos(t2)+x1*sin(t2);\n' + 'z= .5;\n' + 'x= .5+ z*x2/q20 ;\n' + 'y= .5+ z*y2;\n' + 'd= sqrt(x2*x2+y2*y2);\n' + 'r2 = .4+.3*sin(20*d+.7*t);\n' + 'g2 = r2*r2;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.2,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 5.76161,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 6.35296,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = (0.1*m.time);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=.1*time;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'bt1 = bt1*0.95 + sqr(bass*5)*30/fps;\n' + 'mt1 = mt1*0.95 + sqr(mid*5)*30/fps;\n' + 'tt1 = tt1*0.95 + sqr(treb*5)*30/fps;\n' + 'bt2 = bt2 + bt1*0.005;\n' + 'mt2 = mt2 + mt1*0.005;\n' + 'tt2 = tt2 + tt1*0.005;\n' + 'q1 = bt2 *0.01;\n' + 'q2 = mt2 *0.01;\n' + 'q3 = tt2 *0.01;\n' + 'q4=2+.7*sin(.3*q1);\n' + 'q5=.5+.5*sin(.5*q2);\n' + 'q6=.2*abs(sin(.1*q3));\n' + 'decay=1;\n' + 'q20=aspecty;'),
	'pixel_eqs_str' : ('rot= .1*pow(-ang,3) - q4*sin((.5+.5*sin(.2*q1))*ang);\n' + 'zoom= (.8+.2*sin(.2*q2)) * sin((.2*sin(.2*q3))-rad)+1.3;\n' + 'zoom +=  q6*sin(10*sin(q5+x));'),
};

return pmap;
});
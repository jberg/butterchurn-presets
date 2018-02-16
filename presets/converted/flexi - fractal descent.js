define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 34.56,
		warpscale : 0.918,
		brighten : 0.0,
		mv_y : 28.68,
		wave_scale : 0.167,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.55697,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.33077,
		mv_dx : 1.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.127,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.817,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.95,
		wave_y : 1.0,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 4.95,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.585,
		wave_a : 0.005,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.s3 = 0;
m.tt = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.q2 = 0;
m.bbb = 0;
m.vvb = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.vb = 0;
m.vvm = 0;
m.c1 = 0;
m.c2 = 0;
m.c3 = 0;
m.q11 = 0;
m.q12 = 0;
m.q13 = 0;
m.vvt = 0;
m.q14 = 0;
m.q15 = 0;
m.v = 0;
m.q16 = 0;
m.w = 0;
m.q17 = 0;
m.vm = 0;
m.q18 = 0;
m.y1 = 0;
m.zom = 0;
m.pi = 0;
m.x1 = 0;
m.s1 = 0;
m.vt = 0;
m.s2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.vvb = Math.max(0, Math.min(1, m.vvb));
m.vvm = Math.max(0, Math.min(1, m.vvm));
m.vvt = Math.max(0, Math.min(1, m.vvt));
m.vb = ((m.vb*0.85)+(((1-m.vb)*pow(m.bass, 2))*0.01));
m.vvb = ((m.vvb*0.95)+(((1-m.vvb)*m.vb)*0.2));
m.vm = ((m.vm*0.85)+(((1-m.vm)*pow(m.mid, 2))*0.01));
m.vvm = ((m.vvm*0.95)+(((1-m.vvm)*m.vm)*0.2));
m.vt = ((m.vt*0.85)+(((1-m.vt)*pow(m.treb, 2))*0.01));
m.vvt = ((m.vvt*0.95)+(((1-m.vvt)*m.vt)*0.2));
m.v = (0.03*div(60,m.fps));
m.d = 0;
m.bb = ((m.bb+(m.vvb*m.v))-m.d);
m.mm = ((m.mm+(m.vvm*m.v))-m.d);
m.tt = ((m.tt+(m.vvt*m.v))-m.d);
m.zz = -0.5;
m.yy = 0;
m.xx = (0.5*sqrt(3));
m.zom = 0.5;
m.s1 = Math.sin(m.tt);
m.s2 = Math.sin(m.mm);
m.s3 = Math.sin(m.bb);
m.c1 = Math.cos(m.tt);
m.c2 = Math.cos(m.mm);
m.c3 = Math.cos(m.bb);
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.q11 = (0.5+(m.x1*m.zom));
m.q12 = (0.5+(m.y1*m.zom));
m.zz = -0.5;
m.pi = (Math.asin(1)*4);
m.yy = ((0.5*sqrt(3))*Math.sin(div(m.pi,3)));
m.xx = ((0.5*sqrt(3))*Math.cos(div(m.pi,3)));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.q13 = (0.5+(m.x1*m.zom));
m.q14 = (0.5+(m.y1*m.zom));
m.zz = 1;
m.yy = 0;
m.xx = 0;
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.q15 = (0.5+(m.x1*m.zom));
m.q16 = (0.5+(m.y1*m.zom));
m.zz = -0.5;
m.pi = (-Math.asin(1)*4);
m.yy = ((0.5*sqrt(3))*Math.sin(div(m.pi,3)));
m.xx = ((0.5*sqrt(3))*Math.cos(div(m.pi,3)));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.q17 = (0.5+(m.x1*m.zom));
m.q18 = (0.5+(m.y1*m.zom));
m.q1 = ((m.tt-m.bb)*4);
m.zoom = 1;
m.warp = 0;
m.bbb = ((m.bbb*0.94)+((m.bass-m.treb)*0.4));
m.monitor = m.bbb;
m.q2 = (m.bbb*0.01);
m.w = -0.555;
m.q3 = Math.sin(m.w);
m.q4 = Math.cos(m.w);
m.w = (m.bb-m.tt);
m.q5 = Math.sin(m.w);
m.q6 = Math.cos(m.w);
m.q7 = (m.bb-m.mm);
m.q8 = (m.tt-m.mm);
m.monitor = m.q7;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.1,
			enabled : 0.0,
			b : 0.0,
			g : 1.0,
			scaling : 2.00309,
			samples : 3.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.s3 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.q4 = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.c1 = 0;
m.c2 = 0;
m.c3 = 0;
m.zoom = 0;
m.w = 0;
m.y1 = 0;
m.pi = 0;
m.x1 = 0;
m.z = 0;
m.s1 = 0;
m.t2 = 0;
m.s2 = 0;
m.t3 = 0;
m.t8 = 1;
m.t1 = m.q5;
			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t2 = m.q4;
m.t3 = m.q5;
m.t4 = m.q6;
m.t8 = -1;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = (m.t8+1);
m.pi = (Math.asin(1)*4);
m.zz = ifcond(equal(m.t8, 0), 1, -0.5);
m.yy = ifcond(equal(m.t8, 0), 0, ((0.5*sqrt(3))*Math.sin(div((m.t8*m.pi),3))));
m.xx = ifcond(equal(m.t8, 0), 0, ((0.5*sqrt(3))*Math.cos(div((m.t8*m.pi),3))));
m.w = 1;
m.s1 = Math.sin((m.t2*m.w));
m.s2 = Math.sin((m.t3*m.w));
m.s3 = Math.sin((m.t4*m.w));
m.c1 = Math.cos((m.t2*m.w));
m.c2 = Math.cos((m.t3*m.w));
m.c3 = Math.cos((m.t4*m.w));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.zoom = 0.5;
m.x = (0.5+(m.x1*m.zoom));
m.y = (0.5+(m.y1*m.zoom));
m.r = 1;
m.g = 1;
m.b = 1;
		return m;
	},
		'init_eqs_str' : ('t8 = 1;\n' + 't1 = q5;'),
		'frame_eqs_str' : ('t2 = q4;\n' + 't3 = q5;\n' + 't4 = q6;\n' + 't8 = -1;'),
		'point_eqs_str' : ('t8 = t8+1;\n' + 'pi = asin(1)*4;\n' + 'zz = if(equal(t8,0), 1, -0.5);\n' + 'yy = if(equal(t8,0), 0, 0.5*sqrt(3)*sin(t8*pi/3) );\n' + 'xx = if(equal(t8,0), 0, 0.5*sqrt(3)*cos(t8*pi/3) );\n' + 'w = 1;\n' + 's1 = sin(t2*w);\n' + 's2 = sin(t3*w);\n' + 's3 = sin(t4*w);\n' + 'c1 = cos(t2*w);\n' + 'c2 = cos(t3*w);\n' + 'c3 = cos(t4*w);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'zoom = 0.5;\n' + 'x = 0.5 + (x1)*zoom;\n' + 'y = 0.5 + (y1)*zoom;\n' + 'r = 1;\n' + 'g = 1;\n' + 'b= 1;'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 0.0,
			b : 0.0,
			g : 1.0,
			scaling : 2.00309,
			samples : 3.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.s3 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.q4 = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.c1 = 0;
m.c2 = 0;
m.c3 = 0;
m.zoom = 0;
m.w = 0;
m.y1 = 0;
m.pi = 0;
m.x1 = 0;
m.z = 0;
m.s1 = 0;
m.t2 = 0;
m.s2 = 0;
m.t3 = 0;
m.t8 = 1;
m.t1 = m.q5;
			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t2 = m.q4;
m.t3 = m.q5;
m.t4 = m.q6;
m.t8 = -1;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = (m.t8+1);
m.pi = (Math.asin(1)*4);
m.zz = ifcond(equal(m.t8, 0), 1, -0.5);
m.yy = ifcond(equal(m.t8, 0), 0, ((0.5*sqrt(3))*Math.sin((div((m.t8*m.pi),3)+div(m.pi,3)))));
m.xx = ifcond(equal(m.t8, 0), 0, ((0.5*sqrt(3))*Math.cos((div((m.t8*m.pi),3)+div(m.pi,3)))));
m.w = 1;
m.s1 = Math.sin((m.t2*m.w));
m.s2 = Math.sin((m.t3*m.w));
m.s3 = Math.sin((m.t4*m.w));
m.c1 = Math.cos((m.t2*m.w));
m.c2 = Math.cos((m.t3*m.w));
m.c3 = Math.cos((m.t4*m.w));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.zoom = 0.5;
m.x = (0.5+(m.x1*m.zoom));
m.y = (0.5+(m.y1*m.zoom));
m.r = 1;
m.g = 1;
m.b = 1;
		return m;
	},
		'init_eqs_str' : ('t8 = 1;\n' + 't1 = q5;'),
		'frame_eqs_str' : ('t2 = q4;\n' + 't3 = q5;\n' + 't4 = q6;\n' + 't8 = -1;'),
		'point_eqs_str' : ('t8 = t8+1;\n' + 'pi = asin(1)*4;\n' + 'zz = if(equal(t8,0), 1, -0.5);\n' + 'yy = if(equal(t8,0), 0, 0.5*sqrt(3)*sin(t8*pi/3 + pi/3) );\n' + 'xx = if(equal(t8,0), 0, 0.5*sqrt(3)*cos(t8*pi/3 + pi/3) );\n' + 'w = 1;\n' + 's1 = sin(t2*w);\n' + 's2 = sin(t3*w);\n' + 's3 = sin(t4*w);\n' + 'c1 = cos(t2*w);\n' + 'c2 = cos(t3*w);\n' + 'c3 = cos(t4*w);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'zoom = 0.5;\n' + 'x = 0.5 + (x1)*zoom;\n' + 'y = 0.5 + (y1)*zoom;\n' + 'r = 1;\n' + 'g = 1;\n' + 'b= 1;'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 0.0,
			b : 0.0,
			g : 1.0,
			scaling : 2.00309,
			samples : 3.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.s3 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.q4 = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.c1 = 0;
m.c2 = 0;
m.c3 = 0;
m.zoom = 0;
m.w = 0;
m.y1 = 0;
m.pi = 0;
m.x1 = 0;
m.z = 0;
m.s1 = 0;
m.t2 = 0;
m.s2 = 0;
m.t3 = 0;
m.t8 = 1;
m.t1 = m.q5;
			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t2 = m.q4;
m.t3 = m.q5;
m.t4 = m.q6;
m.t8 = -1;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = (m.t8+1);
m.pi = (Math.asin(1)*4);
m.zz = ifcond(equal(m.t8, 0), 1, -0.5);
m.yy = ifcond(equal(m.t8, 0), 0, ((0.5*sqrt(3))*Math.sin((div((m.t8*m.pi),3)+div((2*m.pi),3)))));
m.xx = ifcond(equal(m.t8, 0), 0, ((0.5*sqrt(3))*Math.cos((div((m.t8*m.pi),3)+div((2*m.pi),3)))));
m.w = 1;
m.s1 = Math.sin((m.t2*m.w));
m.s2 = Math.sin((m.t3*m.w));
m.s3 = Math.sin((m.t4*m.w));
m.c1 = Math.cos((m.t2*m.w));
m.c2 = Math.cos((m.t3*m.w));
m.c3 = Math.cos((m.t4*m.w));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.zoom = 0.5;
m.x = (0.5+(m.x1*m.zoom));
m.y = (0.5+(m.y1*m.zoom));
m.r = 1;
m.g = 1;
m.b = 1;
		return m;
	},
		'init_eqs_str' : ('t8 = 1;\n' + 't1 = q5;'),
		'frame_eqs_str' : ('t2 = q4;\n' + 't3 = q5;\n' + 't4 = q6;\n' + 't8 = -1;'),
		'point_eqs_str' : ('t8 = t8+1;\n' + 'pi = asin(1)*4;\n' + 'zz = if(equal(t8,0), 1, -0.5);\n' + 'yy = if(equal(t8,0), 0, 0.5*sqrt(3)*sin(t8*pi/3 + 2*pi/3) );\n' + 'xx = if(equal(t8,0), 0, 0.5*sqrt(3)*cos(t8*pi/3 + 2*pi/3) );\n' + 'w = 1;\n' + 's1 = sin(t2*w);\n' + 's2 = sin(t3*w);\n' + 's3 = sin(t4*w);\n' + 'c1 = cos(t2*w);\n' + 'c2 = cos(t3*w);\n' + 'c3 = cos(t4*w);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'zoom = 0.5;\n' + 'x = 0.5 + (x1)*zoom;\n' + 'y = 0.5 + (y1)*zoom;\n' + 'r = 1;\n' + 'g = 1;\n' + 'b= 1;'),

		},
		{
		'baseVals' : {
			a : 0.97,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.1439,
			samples : 263.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.4,
			thick : 1.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {
m.s3 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.t8 = 0;
m.c1 = 0;
m.c2 = 0;
m.c3 = 0;
m.q = 0;
m.zoom = 0;
m.w = 0;
m.y1 = 0;
m.pi = 0;
m.x1 = 0;
m.z = 0;
m.t1 = 0;
m.s1 = 0;
m.t2 = 0;
m.s2 = 0;
m.t3 = 0;
m.t8 = -1;
			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = (m.t8+1);
m.pi = (Math.asin(1)*4);
m.xx = ifcond(equal(m.t8, 0), 1, -0.5);
m.yy = ((0.5*sqrt(3))*Math.sin(div((m.t8*m.pi),3)));
m.zz = ((0.5*sqrt(3))*Math.cos(div((m.t8*m.pi),3)));
m.t2 = (m.time*0.11);
m.t3 = (m.time*0.1);
m.t4 = (m.time*0.15);
m.w = 1;
m.s1 = Math.sin((m.t2*m.w));
m.s2 = Math.sin((m.t3*m.w));
m.s3 = Math.sin((m.t4*m.w));
m.c1 = Math.cos((m.t2*m.w));
m.c2 = Math.cos((m.t3*m.w));
m.c3 = Math.cos((m.t4*m.w));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.zoom = 0.25;
m.x = (0.5+(m.x1*m.zoom));
m.y = (0.5+(m.y1*m.zoom));
m.r = 1;
m.g = 1;
m.b = 1;
		return m;
	},
		'init_eqs_str' : ('t8 = -1;'),
		'frame_eqs_str' : ('t1 = q;'),
		'point_eqs_str' : ('t8 = t8+1;\n' + 'pi = asin(1)*4;\n' + 'xx = if(equal(t8,0), 1, -0.5);\n' + 'yy = 0.5*sqrt(3)*sin(t8*pi/3);\n' + 'zz = 0.5*sqrt(3)*cos(t8*pi/3);\n' + 't2 = time*0.11;\n' + 't3 = time*0.1;\n' + 't4 = time*0.15;\n' + 'w = 1;\n' + 's1 = sin(t2*w);\n' + 's2 = sin(t3*w);\n' + 's3 = sin(t4*w);\n' + 'c1 = cos(t2*w);\n' + 'c2 = cos(t3*w);\n' + 'c3 = cos(t4*w);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'zoom = .25;\n' + 'x = 0.5 + (x1)*zoom;\n' + 'y = 0.5 + (y1)*zoom;\n' + 'r = 1;\n' + 'g = 1;\n' + 'b= 1;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.45112,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.04983,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {

m.vx = 0;
m.vy = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : ('vx = 0;\n' + 'vy = 0;'),
		'frame_eqs_str' : (''),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.49,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.45112,
			additive : 1.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 1.00591,
			x : 1.0,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q13 = 0;
m.q14 = 0;
m.vx = 0;
m.vy = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q13;
m.y = m.q14;
		return m;
	},
		'init_eqs_str' : ('vx = 0;\n' + 'vy = 0;'),
		'frame_eqs_str' : ('x = q13;\n' + 'y = q14;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.45112,
			additive : 1.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 1.00591,
			x : 1.0,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q15 = 0;
m.q16 = 0;
m.vx = 0;
m.vy = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q15;
m.y = m.q16;
		return m;
	},
		'init_eqs_str' : ('vx = 0;\n' + 'vy = 0;'),
		'frame_eqs_str' : ('x = q15;\n' + 'y = q16;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.5,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.45112,
			additive : 1.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 1.00591,
			x : 1.0,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q17 = 0;
m.q18 = 0;
m.vx = 0;
m.vy = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q17;
m.y = m.q18;
		return m;
	},
		'init_eqs_str' : ('vx = 0;\n' + 'vy = 0;'),
		'frame_eqs_str' : ('x = q17;\n' + 'y = q18;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 uv5_1;\n' + '   vec2 my_uv_2;\n' + '   float c4_3;\n' + '   float c3_4;\n' + '   float c2_5;\n' + '   float c1_6;\n' + '   vec3 ret_7;\n' + '   vec2 tmpvar_8;\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = (uv - 0.5);\n' + '  tmpvar_8 = (((tmpvar_9 * 2.0) + _qc.zw) + 0.004);\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = (((tmpvar_9 * 2.0) + _qd.xy) + 0.004);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = (((tmpvar_9 * 2.0) + _qd.zw) + 0.004);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_9 * 2.0) + _qe.xy) + 0.004);\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_fc_main, tmpvar_8).x;\n' + '  c1_6 = tmpvar_13;\n' + '   float tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_fc_main, tmpvar_10).x;\n' + '  c2_5 = tmpvar_14;\n' + '   float tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_fc_main, tmpvar_11).x;\n' + '  c3_4 = tmpvar_15;\n' + '   float tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_fc_main, tmpvar_12).x;\n' + '  c4_3 = tmpvar_16;\n' + '  ret_7.x = (max (max (c1_6, c2_5), max (c3_4, c4_3)) * 1.1);\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17 = ((uv_orig - 0.5) * vec2((1.68 + _qa.y)));\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18.x = ((tmpvar_17.x * tmpvar_17.x) - (tmpvar_17.y * tmpvar_17.y));\n' + '  tmpvar_18.y = ((2.0 * tmpvar_17.x) * tmpvar_17.y);\n' + '  my_uv_2 = (tmpvar_18 + vec2(0.36, 0.72));\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_fc_main, my_uv_2);\n' + '   vec4 tmpvar_20;\n' + '   vec2 P_21;\n' + '  P_21 = (0.5 + (tmpvar_9 * 4.0));\n' + '  tmpvar_20 = texture2D (sampler_fc_main, P_21);\n' + '  ret_7.y = (tmpvar_19.y + tmpvar_20.z);\n' + '   vec4 tmpvar_22;\n' + '   vec2 P_23;\n' + '  P_23 = ((tmpvar_9 * 3.0) + vec2(1.4, 0.0));\n' + '  tmpvar_22 = texture2D (sampler_fc_main, P_23);\n' + '  ret_7.z = (tmpvar_22.y * 1.2);\n' + '   vec2 tmpvar_24;\n' + '  tmpvar_24 = (tmpvar_9 * aspect.xy);\n' + '   vec2 tmpvar_25;\n' + '  tmpvar_25.x = ((_qa.w * tmpvar_24.x) - (_qa.z * tmpvar_24.y));\n' + '  tmpvar_25.y = ((_qa.z * tmpvar_24.x) + (_qa.w * tmpvar_24.y));\n' + '  uv5_1 = (vec2(1.05, 1.05) * tmpvar_25);\n' + '  uv5_1 = (vec2(0.47, 0.53) + (uv5_1 * aspect.zw));\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26 = texture2D (sampler_fc_main, uv5_1);\n' + '  ret_7.z = (ret_7.z + ((tmpvar_26.z * 1.01) - 0.004));\n' + '   vec4 tmpvar_27;\n' + '  tmpvar_27.w = 1.0;\n' + '  tmpvar_27.xyz = ret_7;\n' + '  vec4 ret4 = tmpvar_27;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 c1_1;\n' + '   vec2 uv6_2;\n' + '   float tmpvar_3;\n' + '  tmpvar_3 = pow (fract(_qa.x), 0.5);\n' + '   vec2 tmpvar_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (uv - 0.5);\n' + '  tmpvar_4 = mix (((tmpvar_5 * 2.0) + _qc.zw), uv, vec2(tmpvar_3));\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = mix (uv, ((\n' + '    (tmpvar_5 * 0.5)\n' + '   + 0.5) - (\n' + '    (_qc.zw - 0.5)\n' + '   * 0.5)), vec2(tmpvar_3));\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_fc_main, tmpvar_4);\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_fc_main, tmpvar_6);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = ((tmpvar_5 * aspect.xy) * 2.0);\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10.x = ((_qb.y * tmpvar_9.x) - (_qb.x * tmpvar_9.y));\n' + '  tmpvar_10.y = ((_qb.x * tmpvar_9.x) + (_qb.y * tmpvar_9.y));\n' + '  uv6_2 = (vec2(0.5, 0.5) * tmpvar_10);\n' + '  uv6_2 = ((0.5 + (uv6_2 * aspect.zw)) + _qb.zw);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = fract(uv6_2);\n' + '  uv6_2 = tmpvar_11;\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = ((uv_orig - 0.5) * vec2((1.68 + _qa.y)));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = ((tmpvar_12.x * tmpvar_12.x) - (tmpvar_12.y * tmpvar_12.y));\n' + '  tmpvar_13.y = ((2.0 * tmpvar_12.x) * tmpvar_12.y);\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = (texsize.zw * 4.0);\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15 = fract((0.5 + (\n' + '    ((tmpvar_13 + vec2(0.36, 0.72)) - 0.5)\n' + '   * 0.7)));\n' + '   vec4 tmpvar_16;\n' + '   vec2 P_17;\n' + '  P_17 = (tmpvar_15 + (vec2(1.0, 0.0) * tmpvar_14));\n' + '  tmpvar_16 = texture2D (sampler_blur1, P_17);\n' + '   vec4 tmpvar_18;\n' + '   vec2 P_19;\n' + '  P_19 = (tmpvar_15 - (vec2(1.0, 0.0) * tmpvar_14));\n' + '  tmpvar_18 = texture2D (sampler_blur1, P_19);\n' + '   vec4 tmpvar_20;\n' + '   vec2 P_21;\n' + '  P_21 = (tmpvar_15 + (vec2(0.0, 1.0) * tmpvar_14));\n' + '  tmpvar_20 = texture2D (sampler_blur1, P_21);\n' + '   vec4 tmpvar_22;\n' + '   vec2 P_23;\n' + '  P_23 = (tmpvar_15 - (vec2(0.0, 1.0) * tmpvar_14));\n' + '  tmpvar_22 = texture2D (sampler_blur1, P_23);\n' + '   vec3 tmpvar_24;\n' + '  tmpvar_24 = (vec3(0.0, 0.5, 0.8) * texture2D (sampler_fc_main, tmpvar_11).yyy);\n' + '  c1_1 = tmpvar_24;\n' + '   vec2 tmpvar_25;\n' + '  tmpvar_25.x = (((tmpvar_16.xyz * scale1) + bias1) - ((tmpvar_18.xyz * scale1) + bias1)).z;\n' + '  tmpvar_25.y = (((tmpvar_20.xyz * scale1) + bias1) - ((tmpvar_22.xyz * scale1) + bias1)).z;\n' + '   vec4 tmpvar_26;\n' + '   vec2 P_27;\n' + '  P_27 = (tmpvar_11 + (tmpvar_25 * 0.1));\n' + '  tmpvar_26 = texture2D (sampler_blur1, P_27);\n' + '   vec3 tmpvar_28;\n' + '  tmpvar_28 = texture2D (sampler_fc_main, tmpvar_15).zzz;\n' + '   vec4 tmpvar_29;\n' + '  tmpvar_29.w = 1.0;\n' + '  tmpvar_29.xyz = mix (mix (c1_1, mix (vec3(0.4, 0.0, 0.1), vec3(1.0, 1.0, 0.0), \n' + '    ((tmpvar_26.xyz * scale1) + bias1)\n' + '  .yyy), tmpvar_28), vec3(1.0, 1.0, 1.0), vec3(((tmpvar_7.x * tmpvar_3) + (tmpvar_8.x * \n' + '    (1.0 - tmpvar_3)\n' + '  ))));\n' + '  vec4 ret4 = tmpvar_29;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('vvb = max(0,min(1,vvb));\n' + 'vvm = max(0,min(1,vvm));\n' + 'vvt = max(0,min(1,vvt));\n' + 'vb = vb*0.85 + (1-vb)*pow(bass,2)*0.01;\n' + 'vvb = vvb*0.95 + (1-vvb)*vb*0.2;\n' + 'vm = vm*0.85 + (1-vm)*pow(mid,2)*0.01;\n' + 'vvm = vvm*0.95 + (1-vvm)*vm*0.2;\n' + 'vt = vt*0.85 + (1-vt)*pow(treb,2)*0.01;\n' + 'vvt = vvt*0.95 + (1-vvt)*vt*0.2;\n' + 'v=0.03*(60/fps);\n' + 'd = 0;\n' + 'bb = bb + vvb*v - d;\n' + 'mm = mm + vvm*v - d;\n' + 'tt = tt + vvt*v - d;\n' + 'zz = -0.5;\n' + 'yy = 0;\n' + 'xx = 0.5*sqrt(3);\n' + 'zom = .5;\n' + 's1 = sin(tt);\n' + 's2 = sin(mm);\n' + 's3 = sin(bb);\n' + 'c1 = cos(tt);\n' + 'c2 = cos(mm);\n' + 'c3 = cos(bb);\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'q11 = 0.5 + (x1)*zom;\n' + 'q12 = 0.5 + (y1)*zom;\n' + 'zz = -0.5;\n' + 'pi = asin(1)*4;\n' + 'yy = 0.5*sqrt(3)*sin(pi/3);\n' + 'xx = 0.5*sqrt(3)*cos(pi/3);\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'q13 = 0.5 + (x1)*zom;\n' + 'q14 = 0.5 + (y1)*zom;\n' + 'zz = 1;\n' + 'yy = 0;\n' + 'xx = 0;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'q15 = 0.5 + (x1)*zom;\n' + 'q16 = 0.5 + (y1)*zom;\n' + 'zz = -0.5;\n' + 'pi = -asin(1)*4;\n' + 'yy = 0.5*sqrt(3)*sin(pi/3);\n' + 'xx = 0.5*sqrt(3)*cos(pi/3);\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'q17 = 0.5 + (x1)*zom;\n' + 'q18 = 0.5 + (y1)*zom;\n' + 'q1 = (tt-bb)*4;\n' + 'zoom = 1;\n' + 'warp = 0;\n' + 'bbb = bbb*0.94 + (bass-treb)*0.4;\n' + 'monitor = bbb;\n' + 'q2 = bbb*0.01;\n' + 'w = -0.555;\n' + 'q3 = sin(w);\n' + 'q4 = cos(w);\n' + 'w = bb-tt;\n' + 'q5 = sin(w);\n' + 'q6 = cos(w);\n' + 'q7 = (bb-mm);\n' + 'q8 = (tt-mm);\n' + 'monitor = q7;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
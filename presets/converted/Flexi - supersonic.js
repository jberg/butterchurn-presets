define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 1.0,
		mv_x : 64.0,
		warpscale : 0.107,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.167,
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
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.00183,
		mv_dx : -0.002,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 1.0,
		ib_r : 1.0,
		mv_b : 0.0,
		echo_zoom : 1.0,
		ob_size : 0.04,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.95,
		wave_y : 1.0,
		zoom : 0.96098,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.9,
		wave_a : 0.005,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 1.0,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.tt = 0;
m.ww = 0;
m.xx = 0;
m.yy = 0;
m.q2 = 0;
m.b = 0;
m.vvb = 0;
m.q3 = 0;
m.vx = 0;
m.c = 0;
m.q4 = 0;
m.vy = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.rx = 0;
m.g = 0;
m.ry = 0;
m.vb = 0;
m.m = 0;
m.vvm = 0;
m.yh = 0;
m.xh = 0;
m.wh = 0;
m.r = 0;
m.t = 0;
m.vvt = 0;
m.v = 0;
m.ax = 0;
m.w = 0;
m.vm = 0;
m.ay = 0;
m.ddx = 0;
m.pi = 0;
m.ddy = 0;
m.pi3 = 0;
m.vt = 0;
m.wv = 0;
m.x1 = 0;
m.y1 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.vb = ((m.vb*0.95)+(((1-m.vb)*pow(m.bass, 2))*0.02));
m.vvb = ((m.vvb*0.95)+(((1-m.vvb)*m.vb)*0.01));
m.vm = ((m.vm*0.95)+(((1-m.vm)*pow(m.mid, 2))*0.02));
m.vvm = ((m.vvm*0.95)+(((1-m.vvm)*m.vm)*0.01));
m.vt = ((m.vt*0.95)+(((1-m.vt)*pow(m.treb, 2))*0.02));
m.vvt = ((m.vvt*0.95)+(((1-m.vvt)*m.vt)*0.01));
m.vvb = Math.min(1, Math.max(0, m.vvb));
m.vvm = Math.min(1, Math.max(0, m.vvm));
m.vvt = Math.min(1, Math.max(0, m.vvt));
m.q1 = (m.vvb*2);
m.q2 = (m.vvm*2);
m.q3 = (m.vvt*2);
m.v = 2;
m.bb = (m.bb-(m.vvb*m.v));
m.mm = (m.mm-(m.vvm*m.v));
m.tt = (m.tt-(m.vvt*m.v));
m.q4 = m.bb;
m.q5 = m.mm;
m.q6 = m.tt;
m.pi3 = ((3.1415*2)*0.3333);
m.t = (((m.q4+m.q5)+m.q6)*0.005);
m.c = 3;
m.r = (Math.sin(m.t)*m.c);
m.g = (Math.sin((m.t+m.pi3))*m.c);
m.b = (Math.sin((m.t-m.pi3))*m.c);
m.ob_r = Math.min(1, Math.max(0, m.r));
m.ob_g = Math.min(1, Math.max(0, m.g));
m.ob_b = Math.min(1, Math.max(0, m.b));
		m.rkeys = ['ax','ay'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.pi = Math.asin(1);
m.x = (m.x-0.5);
m.y = (m.y-0.5);
m.d = ((((m.q4-m.q6)*0.4)+(((m.rad-0.3)*(m.q1-m.q3))*2))+m.pi);
m.xx = ((Math.sin(m.d)*m.x)-(Math.cos(m.d)*m.y));
m.yy = ((Math.cos(m.d)*m.x)+(Math.sin(m.d)*m.y));
m.x = m.xx;
m.y = m.yy;
m.t = (m.time*0.2);
m.xh = m.x;
m.yh = m.y;
m.w = ((m.q4-m.q6)*0.8);
m.m = (-1+(m.q2*2));
m.wv = (m.pi-(Math.sin(m.w)*m.m));
m.wh = (m.pi-(Math.cos(m.w)*m.m));
m.d = (8*sqrt(m.q2));
m.ww = 1.2;
m.ddx = Math.sin((((2*m.pi)-m.wv)-(m.x*m.ww)));
m.ddy = Math.sin((((2*m.pi)-m.wh)-(m.y*m.ww)));
m.rx = ifcond(above((m.ddx*m.ddy), 0), div(Math.sin(m.wv),m.ddx), 0);
m.ry = ifcond(above((m.ddy*m.ddy), 0), div(Math.sin(m.wh),m.ddy), 0);
m.v = ((-m.q2*0.1)*div(m.d,m.ww));
m.ax = (m.ax+(Math.sin(m.w)*m.v));
m.ay = (m.ay+(Math.cos(m.w)*m.v));
m.vx = ifcond(equal((m.rx*m.ry), 0), 0, m.ax);
m.vy = ifcond(equal((m.rx*m.ry), 0), 0, m.ay);
m.dx = ((((-m.xh*m.rx)*m.ry)*m.d)+(m.vx*0.001));
m.dy = ((((-m.yh*m.rx)*m.ry)*m.d)+(m.vy*0.001));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 1.0,
			scaling : 3.80064,
			samples : 457.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.c = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.dir = 0;
m.p = 0;
m.zm = 0;
m.zoom = 0;
m.t = 0;
m.w = 0;
m.z = 0;
m.pi3 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t8 = 1;
			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t2 = m.q2;
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
m.pi3 = ((3.1415*2)*0.3333);
m.t = (((m.q4+m.q5)+m.q6)*0.005);
m.c = 5;
m.r = (1-(Math.sin(m.t)*m.c));
m.g = (1-(Math.sin((m.t+m.pi3))*m.c));
m.b = (1-(Math.sin((m.t-m.pi3))*m.c));
m.r = ifcond(above(m.r, 1), 1, m.r);
m.r = ifcond(below(m.r, 0), 0, m.r);
m.g = ifcond(above(m.g, 1), 1, m.g);
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = ifcond(above(m.b, 1), 1, m.b);
m.b = ifcond(below(m.b, 0), 0, m.b);
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = -m.t8;
m.d = sqrt((1-sqr(((m.sample-0.5)*2))));
m.z = ((m.sample*0.4)-0.2);
m.x = ((Math.sin((m.sample*100))*m.d)*0.2);
m.y = ((Math.cos((m.sample*100))*m.d)*0.2);
m.p = 0.1;
m.x = (m.x*(1+(m.t8*m.p)));
m.y = (m.y*(1+(m.t8*m.p)));
m.z = (m.z*(1+(m.t8*m.p)));
m.dir = (((m.t4-m.t6)*0.4)+(((m.t1-m.t3)*(m.t8+1))*0.2));
m.d = (2+pow(m.t2, 3));
m.w = ((m.t5*0.4)+(((m.t8+1)*m.t2)*0.2));
m.zz = m.z;
m.yy = m.y;
m.y = ((Math.cos(m.w)*m.yy)-(Math.sin(m.w)*m.zz));
m.z = ((Math.sin(m.w)*m.yy)+(Math.cos(m.w)*m.zz));
m.xx = ((Math.cos(m.dir)*m.x)-(Math.sin(m.dir)*m.y));
m.yy = ((Math.sin(m.dir)*m.x)+(Math.cos(m.dir)*m.y));
m.d = 0.5;
m.zoom = (2-(sqrt(m.t2)*1.1));
m.zm = div(sqrt((((m.x*m.x)+(m.y*m.y))+sqr((m.z+m.d)))),m.d);
m.x = (0.5+div(((m.zoom*m.xx)*0.55),m.zm));
m.y = (0.5+div(((m.zoom*m.yy)*0.55),m.zm));
m.a = sigmoid((-m.z+0.1), 25);
		return m;
	},
		'init_eqs_str' : ('t8 = 1;'),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = (q4+q5+q6)*0.005;\n' + 'c=5;\n' + 'r = 1-sin(t)*c;\n' + 'g = 1-sin(t+pi3)*c;\n' + 'b = 1-sin(t-pi3)*c;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);'),
		'point_eqs_str' : ('t8 = -t8;\n' + 'd = sqrt(1-sqr((sample-0.5)*2));\n' + 'z = sample*0.4 - 0.2;\n' + 'x = sin(sample*100)*d*0.2;\n' + 'y = cos(sample*100)*d*0.2;\n' + 'p = 0.1;\n' + 'x = x*(1+t8*p);\n' + 'y = y*(1+t8*p);\n' + 'z = z*(1+t8*p);\n' + 'dir = (t4-t6)*0.4 + (t1-t3)*(t8+1)*0.2;\n' + 'd = 2 + pow(t2,3);\n' + 'w = t5*0.4 + (t8+1)*t2*0.2;\n' + 'zz = z;\n' + 'yy = y;\n' + 'y = cos(w)*yy - sin(w)*zz;\n' + 'z = sin(w)*yy + cos(w)*zz;\n' + 'xx = cos(dir)*x - sin(dir)*y;\n' + 'yy = sin(dir)*x + cos(dir)*y;\n' + 'd = 0.5;\n' + 'zoom = 2 - sqrt(t2)*1.1;\n' + 'zm = sqrt(x*x+y*y+sqr(z+d))/d;\n' + 'x = 0.5 + zoom*xx*0.55/zm;\n' + 'y = 0.5 + zoom*yy*0.55/zm;\n' + 'a = sigmoid(-z+0.1,25);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 1.0,
			scaling : 3.80064,
			samples : 457.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.c = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.dir = 0;
m.p = 0;
m.zm = 0;
m.zoom = 0;
m.t = 0;
m.w = 0;
m.z = 0;
m.pi3 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t8 = 1;
			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t2 = m.q2;
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
m.pi3 = ((3.1415*2)*0.3333);
m.t = ((((m.q4+m.q5)+m.q6)*0.005)+2);
m.c = 5;
m.r = (1-(Math.sin(m.t)*m.c));
m.g = (1-(Math.sin((m.t+m.pi3))*m.c));
m.b = (1-(Math.sin((m.t-m.pi3))*m.c));
m.r = ifcond(above(m.r, 1), 1, m.r);
m.r = ifcond(below(m.r, 0), 0, m.r);
m.g = ifcond(above(m.g, 1), 1, m.g);
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = ifcond(above(m.b, 1), 1, m.b);
m.b = ifcond(below(m.b, 0), 0, m.b);
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = -m.t8;
m.d = sqrt((1-sqr(((m.sample-0.5)*2))));
m.z = ((m.sample*0.4)-0.2);
m.x = ((Math.sin((m.sample*100))*m.d)*0.2);
m.y = ((Math.cos((m.sample*100))*m.d)*0.2);
m.p = 0.1;
m.x = (m.x*(1+(m.t8*m.p)));
m.y = (m.y*(1+(m.t8*m.p)));
m.z = (m.z*(1+(m.t8*m.p)));
m.dir = (((m.t4-m.t6)*0.4)+(((m.t1-m.t3)*(m.t8+1))*0.2));
m.d = (2+pow(m.t2, 3));
m.w = ((m.t5*0.4)+(((m.t8+1)*m.t2)*0.2));
m.zz = m.z;
m.yy = m.y;
m.y = ((Math.cos(m.w)*m.yy)-(Math.sin(m.w)*m.zz));
m.z = ((Math.sin(m.w)*m.yy)+(Math.cos(m.w)*m.zz));
m.xx = ((Math.cos(m.dir)*m.x)-(Math.sin(m.dir)*m.y));
m.yy = ((Math.sin(m.dir)*m.x)+(Math.cos(m.dir)*m.y));
m.d = 0.5;
m.zoom = (2-(sqrt(m.t2)*1.1));
m.zm = div(sqrt((((m.x*m.x)+(m.y*m.y))+sqr((m.z+m.d)))),m.d);
m.x = (0.5+div(((m.zoom*m.xx)*0.55),m.zm));
m.y = (0.5+div(((m.zoom*m.yy)*0.55),m.zm));
m.a = sigmoid((-m.z+0.1), 25);
		return m;
	},
		'init_eqs_str' : ('t8 = 1;'),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = (q4+q5+q6)*0.005 + 2;\n' + 'c=5;\n' + 'r = 1-sin(t)*c;\n' + 'g = 1-sin(t+pi3)*c;\n' + 'b = 1-sin(t-pi3)*c;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);'),
		'point_eqs_str' : ('t8 = -t8;\n' + 'd = sqrt(1-sqr((sample-0.5)*2));\n' + 'z = sample*0.4 - 0.2;\n' + 'x = sin(sample*100)*d*0.2;\n' + 'y = cos(sample*100)*d*0.2;\n' + 'p = 0.1;\n' + 'x = x*(1+t8*p);\n' + 'y = y*(1+t8*p);\n' + 'z = z*(1+t8*p);\n' + 'dir = (t4-t6)*0.4 + (t1-t3)*(t8+1)*0.2;\n' + 'd = 2 + pow(t2,3);\n' + 'w = t5*0.4 + (t8+1)*t2*0.2;\n' + 'zz = z;\n' + 'yy = y;\n' + 'y = cos(w)*yy - sin(w)*zz;\n' + 'z = sin(w)*yy + cos(w)*zz;\n' + 'xx = cos(dir)*x - sin(dir)*y;\n' + 'yy = sin(dir)*x + cos(dir)*y;\n' + 'd = 0.5;\n' + 'zoom = 2 - sqrt(t2)*1.1;\n' + 'zm = sqrt(x*x+y*y+sqr(z+d))/d;\n' + 'x = 0.5 + zoom*xx*0.55/zm;\n' + 'y = 0.5 + zoom*yy*0.55/zm;\n' + 'a = sigmoid(-z+0.1,25);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.37242,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 4.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.s3 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.c = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.s8 = 0;
m.j = 0;
m.d1 = 0;
m.m = 0;
m.c1 = 0;
m.n = 0;
m.c2 = 0;
m.c3 = 0;
m.s = 0;
m.zoom = 0;
m.t = 0;
m.w = 0;
m.y1 = 0;
m.x1 = 0;
m.z = 0;
m.pi3 = 0;
m.t1 = 0;
m.s1 = 0;
m.t2 = 0;
m.s2 = 0;
m.t3 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.ab = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.q1*0.5);
m.t2 = (m.q2*0.5);
m.t3 = (m.q3*0.5);
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
		return m;
	},
		'point_eqs' : function(m) {
m.s8 = (m.sample*383);
m.s = 0.3;
m.xx = (((mod((m.sample*343),7)-3.5)*m.s)+m.value1);
m.yy = (((mod((m.sample*49),7)-3.5)*m.s)*0.5);
m.zz = (((mod((m.sample*7),7)-3.5)*m.s)*0.5);
m.n = 300;
m.xx = ((-0.5+m.sample)*2);
m.zz = (Math.cos((m.sample*m.n))*0.02);
m.yy = (Math.sin((m.sample*m.n))*0.02);
m.d = sqrt((((m.xx*m.xx)+(m.yy*m.yy))+(m.zz*m.zz)));
m.d1 = 1;
m.xx = ((m.xx*m.d1)*(1+m.value1));
m.yy = ((m.yy*m.d1)*(1+m.value2));
m.zz = (m.zz*m.d1);
m.w = 0.3;
m.m = ((m.d*m.d)*2);
m.s1 = Math.sin(((m.t4*m.w)+(m.m*m.t1)));
m.s2 = Math.sin(((m.t5*m.w)+(m.m*m.t2)));
m.s3 = Math.sin(((m.t6*m.w)+(m.m*m.t3)));
m.c1 = Math.cos(((m.t4*m.w)+(m.m*m.t1)));
m.c2 = Math.cos(((m.t5*m.w)+(m.m*m.t2)));
m.c3 = Math.cos(((m.t6*m.w)+(m.m*m.t3)));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.a = 2;
m.zoom = (0.3*Math.atan2((m.a-m.z), m.a));
m.x = (0.5+(m.zoom*m.x1));
m.y = (0.5+(m.zoom*m.y1));
m.pi3 = ((3.1415*2)*0.3333);
m.t = (-m.xx+(m.t5*0.2));
m.c = 10;
m.r = (Math.sin(m.t)*m.c);
m.g = (Math.sin((m.t+m.pi3))*m.c);
m.b = (Math.sin((m.t-m.pi3))*m.c);
m.j = 0.81;
m.r = ifcond(above(m.r, 1), 1, m.r);
m.r = ifcond(below(m.r, 0), 0, m.r);
m.g = ifcond(above(m.g, 1), 1, m.g);
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = ifcond(above(m.b, 1), 1, m.b);
m.b = ifcond(below(m.b, 0), 0, m.b);
m.a = 2;
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'ab = 1;'),
		'frame_eqs_str' : ('t1 = q1*0.5;\n' + 't2 = q2*0.5;\n' + 't3 = q3*0.5;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;'),
		'point_eqs_str' : ('s8 = sample*383;\n' + 's = 0.3;\n' + 'xx = ((sample*343)%7 - 3.5)*s + value1;\n' + 'yy = ((sample*49)%7 - 3.5)*s*0.5;\n' + 'zz = ((sample*7)%7 - 3.5)*s*0.5;\n' + 'n = 300;\n' + 'xx = (-0.5+sample)*2;\n' + 'zz = cos(sample*n)*0.02;\n' + 'yy = sin(sample*n)*0.02;\n' + 'd = sqrt( xx*xx + yy*yy + zz*zz);\n' + 'd1 = 1;\n' + 'xx = xx*d1*(1+value1);\n' + 'yy = yy*d1*(1+value2);\n' + 'zz = zz*d1;\n' + 'w = .3;\n' + 'm = d*d*2;\n' + 's1 = sin(t4*w + m*t1);\n' + 's2 = sin(t5*w + m*t2);\n' + 's3 = sin(t6*w + m*t3);\n' + 'c1 = cos(t4*w + m*t1);\n' + 'c2 = cos(t5*w + m*t2);\n' + 'c3 = cos(t6*w + m*t3);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'a = 2;\n' + 'zoom = 0.3*atan2(a-z,a);\n' + 'x = 0.5 + zoom*x1;\n' + 'y = 0.5 + zoom*y1;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = -xx+t5*.2;\n' + 'c = 10;\n' + 'r = sin(t)*c;\n' + 'g = sin(t+pi3)*c;\n' + 'b = sin(t-pi3)*c;\n' + 'j = 0.81;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);\n' + 'a = 2;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.37242,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 4.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.s3 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.c = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.s8 = 0;
m.j = 0;
m.d1 = 0;
m.m = 0;
m.c1 = 0;
m.n = 0;
m.c2 = 0;
m.c3 = 0;
m.s = 0;
m.zoom = 0;
m.t = 0;
m.w = 0;
m.y1 = 0;
m.x1 = 0;
m.z = 0;
m.pi3 = 0;
m.t1 = 0;
m.s1 = 0;
m.t2 = 0;
m.s2 = 0;
m.t3 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.ab = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.q1*0.5);
m.t2 = (m.q2*0.5);
m.t3 = (m.q3*0.5);
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
		return m;
	},
		'point_eqs' : function(m) {
m.s8 = (m.sample*383);
m.s = 0.3;
m.xx = (((mod((m.sample*343),7)-3.5)*m.s)+m.value1);
m.yy = (((mod((m.sample*49),7)-3.5)*m.s)*0.5);
m.zz = (((mod((m.sample*7),7)-3.5)*m.s)*0.5);
m.n = 300;
m.zz = ((-0.5+m.sample)*2);
m.xx = (Math.cos((m.sample*m.n))*0.02);
m.yy = (Math.sin((m.sample*m.n))*0.02);
m.d = sqrt((((m.xx*m.xx)+(m.yy*m.yy))+(m.zz*m.zz)));
m.d1 = 1;
m.xx = ((m.xx*m.d1)*(1+m.value1));
m.yy = ((m.yy*m.d1)*(1+m.value2));
m.zz = (m.zz*m.d1);
m.w = 0.3;
m.m = ((m.d*m.d)*2);
m.s1 = Math.sin(((m.t4*m.w)+(m.m*m.t1)));
m.s2 = Math.sin(((m.t5*m.w)+(m.m*m.t2)));
m.s3 = Math.sin(((m.t6*m.w)+(m.m*m.t3)));
m.c1 = Math.cos(((m.t4*m.w)+(m.m*m.t1)));
m.c2 = Math.cos(((m.t5*m.w)+(m.m*m.t2)));
m.c3 = Math.cos(((m.t6*m.w)+(m.m*m.t3)));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.a = 2;
m.zoom = (0.3*Math.atan2((m.a-m.z), m.a));
m.x = (0.5+(m.zoom*m.x1));
m.y = (0.5+(m.zoom*m.y1));
m.pi3 = ((3.1415*2)*0.3333);
m.t = (-m.zz+(m.t6*0.2));
m.c = 10;
m.r = (Math.sin(m.t)*m.c);
m.g = (Math.sin((m.t+m.pi3))*m.c);
m.b = (Math.sin((m.t-m.pi3))*m.c);
m.j = 0.81;
m.r = ifcond(above(m.r, 1), 1, m.r);
m.r = ifcond(below(m.r, 0), 0, m.r);
m.g = ifcond(above(m.g, 1), 1, m.g);
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = ifcond(above(m.b, 1), 1, m.b);
m.b = ifcond(below(m.b, 0), 0, m.b);
m.a = 2;
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'ab = 1;'),
		'frame_eqs_str' : ('t1 = q1*0.5;\n' + 't2 = q2*0.5;\n' + 't3 = q3*0.5;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;'),
		'point_eqs_str' : ('s8 = sample*383;\n' + 's = 0.3;\n' + 'xx = ((sample*343)%7 - 3.5)*s + value1;\n' + 'yy = ((sample*49)%7 - 3.5)*s*0.5;\n' + 'zz = ((sample*7)%7 - 3.5)*s*0.5;\n' + 'n = 300;\n' + 'zz = (-0.5+sample)*2;\n' + 'xx = cos(sample*n)*0.02;\n' + 'yy = sin(sample*n)*0.02;\n' + 'd = sqrt( xx*xx + yy*yy + zz*zz);\n' + 'd1 = 1;\n' + 'xx = xx*d1*(1+value1);\n' + 'yy = yy*d1*(1+value2);\n' + 'zz = zz*d1;\n' + 'w = .3;\n' + 'm = d*d*2;\n' + 's1 = sin(t4*w + m*t1);\n' + 's2 = sin(t5*w + m*t2);\n' + 's3 = sin(t6*w + m*t3);\n' + 'c1 = cos(t4*w + m*t1);\n' + 'c2 = cos(t5*w + m*t2);\n' + 'c3 = cos(t6*w + m*t3);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'a = 2;\n' + 'zoom = 0.3*atan2(a-z,a);\n' + 'x = 0.5 + zoom*x1;\n' + 'y = 0.5 + zoom*y1;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = -zz+t6*.2;\n' + 'c = 10;\n' + 'r = sin(t)*c;\n' + 'g = sin(t+pi3)*c;\n' + 'b = sin(t-pi3)*c;\n' + 'j = 0.81;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);\n' + 'a = 2;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.5033,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.42324,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;
m.t = 0;
m.vx = 0;
m.vy = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t = (-(m.q4+m.q5)*0.2);
m.x = (0.5+(Math.sin(m.t)*0.2));
m.y = (0.5+(Math.cos(m.t)*0.1));
m.rad = (0.4-(Math.cos(m.t)*0.3));
		return m;
	},
		'init_eqs_str' : ('vx = 0;\n' + 'vy = 0;'),
		'frame_eqs_str' : ('t = -(q4+q5)*0.2;\n' + 'x = 0.5 + sin(t)*0.2;\n' + 'y = 0.5 + cos(t)*0.1;\n' + 'rad = 0.4 - cos(t)*0.3;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.5033,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.42324,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;
m.t = 0;
m.pi = 0;
m.vx = 0;
m.vy = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t = (-(m.q4+m.q5)*0.2);
m.pi = (Math.asin(1)*2);
m.x = (0.5+(Math.sin((m.t+m.pi))*0.2));
m.y = (0.5+(Math.cos((m.t+m.pi))*0.1));
m.rad = (0.4-(Math.cos((m.t+m.pi))*0.3));
		return m;
	},
		'init_eqs_str' : ('vx = 0;\n' + 'vy = 0;'),
		'frame_eqs_str' : ('t = -(q4+q5)*0.2;\n' + 'pi = asin(1)*2;\n' + 'x = 0.5 + sin(t+pi)*0.2;\n' + 'y = 0.5 + cos(t+pi)*0.1;\n' + 'rad = 0.4 - cos(t+pi)*0.3;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.5033,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 1.00591,
			x : 1.0,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.vx = 0;
m.vy = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = 1.2;
m.y = (m.q3-0.4);
		return m;
	},
		'init_eqs_str' : ('vx = 0;\n' + 'vy = 0;'),
		'frame_eqs_str' : ('x = 1.2;\n' + 'y = q3- 0.4;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.1,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.99595,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.c = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.t = 0;
m.pi3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = (0.5+(((m.q1-m.q2)+m.q3)*1));
m.ang = (-(m.q4-m.q5)*0.2);
m.pi3 = ((3.1415*2)*0.3333);
m.t = (((m.q4-(2*m.q5))+m.q6)*0.2);
m.c = 3;
m.r = (Math.sin(m.t)*m.c);
m.g = (Math.sin((m.t+m.pi3))*m.c);
m.b = (Math.sin((m.t-m.pi3))*m.c);
m.r = ifcond(above(m.r, 1), 1, m.r);
m.r = ifcond(below(m.r, 0), 0, m.r);
m.g = ifcond(above(m.g, 1), 1, m.g);
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = ifcond(above(m.b, 1), 1, m.b);
m.b = ifcond(below(m.b, 0), 0, m.b);
m.r2 = (1-m.r);
m.g2 = (1-m.g);
m.b2 = (1-m.b);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad = 0.5 + (q1-q2+q3)*1;\n' + 'ang = -(q4-q5)*0.2;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = (q4-2*q5+q6)*0.2;\n' + 'c=3;\n' + 'r = sin(t)*c;\n' + 'g = sin(t+pi3)*c;\n' + 'b = sin(t-pi3)*c;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);\n' + 'r2 = 1-r;\n' + 'g2 = 1-g;\n' + 'b2 = 1-b;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 warped_1;\n' + '   vec3 pre_2;\n' + '   vec3 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv_orig).xyz;\n' + '  pre_2 = tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv - floor(uv));\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, P_4).xyz;\n' + '  warped_1 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = (mix (pre_2, warped_1, vec3(0.5, 0.5, 0.5)) * 0.9);\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 * hue_shader);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0;\n' + 'y1 = 0;'),
	'frame_eqs_str' : ('vb = vb*0.95 + (1-vb)*pow(bass,2)*0.02;\n' + 'vvb = vvb*0.95 + (1-vvb)*vb*0.01;\n' + 'vm = vm*0.95 + (1-vm)*pow(mid,2)*0.02;\n' + 'vvm = vvm*0.95 + (1-vvm)*vm*0.01;\n' + 'vt = vt*0.95 + (1-vt)*pow(treb,2)*0.02;\n' + 'vvt = vvt*0.95 + (1-vvt)*vt*0.01;\n' + 'vvb = min(1,max(0,vvb));\n' + 'vvm = min(1,max(0,vvm));\n' + 'vvt = min(1,max(0,vvt));\n' + 'q1 = vvb*2;\n' + 'q2 = vvm*2;\n' + 'q3 = vvt*2;\n' + 'v=2;\n' + 'bb = bb - vvb*v;\n' + 'mm = mm - vvm*v;\n' + 'tt = tt - vvt*v;\n' + 'q4 = bb;\n' + 'q5 = mm;\n' + 'q6 = tt;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = (q4+q5+q6)*0.005;\n' + 'c=3;\n' + 'r = sin(t)*c;\n' + 'g = sin(t+pi3)*c;\n' + 'b = sin(t-pi3)*c;\n' + 'ob_r = min(1,max(0,r));\n' + 'ob_g = min(1,max(0,g));\n' + 'ob_b = min(1,max(0,b));'),
	'pixel_eqs_str' : ('pi = asin(1);\n' + 'x = x-0.5;\n' + 'y = y- 0.5;\n' + 'd = (q4-q6)*0.4 +  (rad-0.3)*(q1-q3)*2 + pi;\n' + 'xx = sin(d)*x - cos(d)*y;\n' + 'yy = cos(d)*x + sin(d)*y;\n' + 'x = xx;\n' + 'y = yy;\n' + 't = time*.2;\n' + 'xh = x;\n' + 'yh = y;\n' + 'w = (q4-q6)*0.8;\n' + 'm = -1 + q2*2;\n' + 'wv = pi-sin(w)*m;\n' + 'wh = pi-cos(w)*m;\n' + 'd = 8*sqrt(q2);\n' + 'ww = 1.2;\n' + 'ddx = sin(2*pi - wv -(x)*ww);\n' + 'ddy = sin(2*pi - wh -(y)*ww);\n' + 'rx = if(above(ddx*ddy,0),sin(wv)/ddx,0);\n' + 'ry = if(above(ddy*ddy,0),sin(wh)/ddy,0);\n' + 'v = -(q2)*.1*(d/ww);\n' + 'ax = ax + sin(w)*v;\n' + 'ay = ay + cos(w)*v;\n' + 'vx = if(equal(rx*ry,0),0,ax);\n' + 'vy = if(equal(rx*ry,0),0,ay);\n' + 'dx = (-xh*rx*ry*d + vx*.001);\n' + 'dy = (-yh*rx*ry*d + vy*.001);'),
};

return pmap;
});
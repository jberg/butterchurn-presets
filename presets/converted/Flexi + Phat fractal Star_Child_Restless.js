define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 100.0,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 5.715231,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.321044,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 0.408306,
		ob_size : 0.5,
		wave_smoothing : 0.9,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.990099,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		nwrapmode_x : 2.0,
		cx : 0.5,
		dy : 0.0,
		nwrapmode_y : 2.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		nechowrap_x : 2.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		nechowrap_y : 2.0,
		modwavealphaend : 1.000001,
		wave_mystery : 0.0,
		decay : 0.9,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 1.0,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.vvb = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.vb = 0;
m.vvm = 0;
m.vvt = 0;
m.v = 0;
m.vm = 0;
m.vt = 0;
m.x1 = 0;
m.y1 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = 1.0;
m.q1 = (0.1*(m.bass-m.treb));
m.vvb = ifcond(below(m.vvb, 0), 0, m.vvb);
m.vvm = ifcond(below(m.vvm, 0), 0, m.vvm);
m.vvt = ifcond(below(m.vvt, 0), 0, m.vvt);
m.vb = ((m.vb*0.85)+(((1-m.vb)*pow(m.bass, 2))*0.001));
m.vvb = ((m.vvb*0.95)+(((1-m.vvb)*m.vb)*0.2));
m.vm = ((m.vm*0.85)+(((1-m.vm)*pow(m.mid, 2))*0.01));
m.vvm = ((m.vvm*0.95)+(((1-m.vvm)*m.vm)*0.2));
m.vt = ((m.vt*0.85)+(((1-m.vt)*pow(m.treb, 2))*0.001));
m.vvt = ((m.vvt*0.95)+(((1-m.vvt)*m.vt)*0.2));
m.q1 = ((m.vvb-m.vvt)*m.vvm);
m.q2 = m.vvm;
m.q3 = m.vvt;
m.v = 0.2;
m.d = 0;
m.bb = ((m.bb+(m.vvb*m.v))-m.d);
m.mm = ((m.mm+(m.vvm*m.v))-m.d);
m.tt = ((m.tt+(m.vvt*m.v))-m.d);
m.q4 = m.bb;
m.q5 = m.mm;
m.q6 = m.tt;
m.echo_zoom = (((Math.sin(m.time)*0.5)+0.5)+0.4);
m.decay = ifcond(above(Math.abs(m.q1), 0.005), 0.99, 1);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 2.44415,
			samples : 512.0,
			additive : 1.0,
			bdrawback : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.bb = 0;
m.s3 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.t5 = 0;
m.t6 = 0;
m.c = 0;
m.t7 = 0;
m.d = 0;
m.t8 = 0;
m.cl1 = 0;
m.j2 = 0;
m.cl2 = 0;
m.j3 = 0;
m.j = 0;
m.cl3 = 0;
m.k = 0;
m.c1 = 0;
m.n = 0;
m.c2 = 0;
m.c3 = 0;
m.zoom = 0;
m.t = 0;
m.v = 0;
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
m.cl = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = 0;
m.v = 0.01;
m.j = (m.j+(m.bass*0.01));
m.j2 = (m.j2+(m.mid_att*0.01));
m.j3 = (m.j3+(m.treb_att*0.01));
m.t2 = m.j;
m.t3 = m.j2;
m.t4 = m.j3;
m.k = ((m.k*0.99)+div((10*m.mid),m.fps));
m.t5 = -m.k;
m.cl1 = ((m.cl1-0.0005)-(m.bass*0.003));
m.cl1 = ifcond(above(m.cl1, 1), 0, m.cl1);
m.cl1 = ifcond(below(m.cl1, 0), 1, m.cl1);
m.t8 = m.cl1;
m.cl2 = ((((m.cl2+0.0001)+(m.mid*0.001))-(m.bass*0.0005))-(m.treb*0.0005));
m.cl2 = ifcond(above(m.cl2, 1), 0, m.cl2);
m.cl2 = ifcond(below(m.cl2, 0), 1, m.cl2);
m.t7 = m.cl2;
m.cl3 = ((((m.cl3+0.0001)+(m.treb*0.001))-(m.bass*0.0005))-(m.mid*0.0005));
m.cl3 = ifcond(above(m.cl3, 1), 0, m.cl3);
m.cl3 = ifcond(below(m.cl3, 0), 1, m.cl3);
m.t6 = m.cl3;
		return m;
	},
		'point_eqs' : function(m) {
m.xx = div((mod((m.sample*0983624912364),10000000)+100),10000000);
m.yy = div((mod((m.xx*1896575575),10000000)+100),10000000);
m.zz = div((mod((m.yy*58652340875),10000000)+100),10000000);
m.d = sqrt(((sqr(m.xx)+sqr(m.yy))+sqr(m.zz)));
m.zz = (((m.zz+m.t8)-ifcond(above((m.zz+m.t8), 1), 1, 0))-0.5);
m.xx = (((m.xx+m.t7)-ifcond(above((m.xx+m.t7), 1), 1, 0))-0.5);
m.yy = (((m.yy+m.t6)-ifcond(above((m.yy+m.t6), 1), 1, 0))-0.5);
m.v = 0.001;
m.w = 1;
m.bb = ((m.d*m.d)*0.5);
m.n = 0.3;
m.s1 = Math.sin((Math.sin(((m.t2*m.w)+m.bb))*m.n));
m.s2 = Math.sin((Math.sin(((m.t3*m.w)+m.bb))*m.n));
m.s3 = Math.sin((Math.sin(((m.t4*m.w)+m.bb))*m.n));
m.c1 = Math.cos((Math.sin(((m.t2*m.w)+m.bb))*m.n));
m.c2 = Math.cos((Math.sin(((m.t3*m.w)+m.bb))*m.n));
m.c3 = Math.cos((Math.sin(((m.t4*m.w)+m.bb))*m.n));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.zoom = (0.5*div(1,(m.z+0.5)));
m.x = ((0.5+(m.zoom*m.x1))+(Math.sin((m.time*0.1))*0));
m.y = ((0.5+(m.zoom*m.y1))+(Math.cos((m.time*0.16801))*0));
m.pi3 = ((3.1415*2)*0.3333);
m.t = ((m.z*2)+(m.t2*1));
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
m.a = (-m.z+0.7);
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('t1 = 0;\n' + 'v = 0.01;\n' + 'j = j + (bass)*0.01;\n' + 'j2 = j2 + (mid_att)*0.01;\n' + 'j3 = j3 + (treb_att)*0.01;\n' + 't2 = j;\n' + 't3 = j2;\n' + 't4 = j3;\n' + 'k = k*0.99 + 10*mid/fps;\n' + 't5 = -k;\n' + 'cl1 = cl1 - 0.0005 - bass*0.003;\n' + 'cl1 = if(above(cl1,1),0,cl1);\n' + 'cl1 = if(below(cl1,0),1,cl1);\n' + 't8 = cl1;\n' + 'cl2 = cl2 +0.0001 + mid*0.001 - bass*0.0005 -treb*0.0005;\n' + 'cl2 = if(above(cl2,1),0,cl2);\n' + 'cl2 = if(below(cl2,0),1,cl2);\n' + 't7 = cl2;\n' + 'cl3 = cl3 +0.0001+ treb*0.001 - bass*0.0005 - mid*0.0005;\n' + 'cl3 = if(above(cl3,1),0,cl3);\n' + 'cl3 = if(below(cl3,0),1,cl3);\n' + 't6 = cl3;'),
		'point_eqs_str' : ('xx = ((sample*0983624912364)%10000000+100)/10000000;\n' + 'yy = ((xx*1896575575)%10000000+100)/10000000;\n' + 'zz = ((yy*58652340875)%10000000+100)/10000000;\n' + 'd = sqrt(sqr(xx)+sqr(yy)+sqr(zz));\n' + 'zz = zz + t8 - if(above(zz+t8,1),1,0) - 0.5;\n' + 'xx = xx + t7 - if(above(xx+t7,1),1,0) - 0.5;\n' + 'yy = yy + t6 - if(above(yy+t6,1),1,0) - 0.5;\n' + 'v = 0.001;\n' + 'w = 1;\n' + 'bb = d*d*0.5;\n' + 'n= 0.3;\n' + 's1 = sin(sin(t2*w+bb)*n);\n' + 's2 = sin(sin(t3*w+bb)*n);\n' + 's3 = sin(sin(t4*w+bb)*n);\n' + 'c1 = cos(sin(t2*w+bb)*n);\n' + 'c2 = cos(sin(t3*w+bb)*n);\n' + 'c3 = cos(sin(t4*w+bb)*n);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'zoom = .5*(1/(z+0.5));\n' + 'x = 0.5 + zoom*x1 + sin(time*0.1)*0;\n' + 'y = 0.5 + zoom*y1 + cos(time*0.16801)*0;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = z*2+t2*1;\n' + 'c=3;\n' + 'r = sin(t)*c;\n' + 'g = sin(t+pi3)*c;\n' + 'b = sin(t-pi3)*c;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);\n' + 'a = -z+0.7;'),

		},
		{
		'baseVals' : {
			a : 0.03,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 2.44415,
			samples : 512.0,
			additive : 0.0,
			bdrawback : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.c = 0;
m.q4 = 0;
m.t8 = 0;
m.q6 = 0;
m.t = 0;
m.pi3 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t8 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = -m.t8;
m.y = (m.sample*0.48);
m.x = (((0.5+(m.t8*0.04))-((m.t8*m.sample)*0.02))+(((sqr(((m.sample*2)-1))-1)*m.q1)*0.5));
m.pi3 = ((3.1415*2)*0.3333);
m.t = ((-(m.q4-m.q6)*10)+((m.sample*Math.asin(1))*4.01));
m.c = 9;
m.r = (Math.sin(m.t)*m.c);
m.g = (Math.sin((m.t+m.pi3))*m.c);
m.b = (Math.sin((m.t-m.pi3))*m.c);
m.r = ifcond(above(m.r, 1), 1, m.r);
m.r = ifcond(below(m.r, 0), 0, m.r);
m.g = ifcond(above(m.g, 1), 1, m.g);
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = ifcond(above(m.b, 1), 1, m.b);
m.b = ifcond(below(m.b, 0), 0, m.b);
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('t8 = 1;'),
		'point_eqs_str' : ('t8 = -t8;\n' + 'y = sample*0.48;\n' + 'x = 0.5 + t8*0.04 - t8*sample*0.02 + (sqr(sample*2-1)-1)*q1*0.5;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = -(q4-q6)*10+sample*asin(1)*4.01;\n' + 'c=9;\n' + 'r = sin(t)*c;\n' + 'g = sin(t+pi3)*c;\n' + 'b = sin(t-pi3)*c;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 2.44415,
			samples : 49.0,
			additive : 0.0,
			bdrawback : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t8 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t8 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = -1;
m.y = (m.sample*0.48);
m.x = (((0.5+(m.t8*0.04))-((m.t8*m.sample)*0.02))+(((sqr(((m.sample*2)-1))-1)*m.q1)*0.5));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('t8 = 1;'),
		'point_eqs_str' : ('t8 = -1;\n' + 'y = sample*0.48;\n' + 'x = 0.5 + t8*0.04 - t8*sample*0.02 + (sqr(sample*2-1)-1)*q1*0.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 2.44415,
			samples : 49.0,
			additive : 0.0,
			bdrawback : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t8 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t8 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = 1;
m.y = (m.sample*0.48);
m.x = (((0.5+(m.t8*0.04))-((m.t8*m.sample)*0.02))+(((sqr(((m.sample*2)-1))-1)*m.q1)*0.5));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('t8 = 1;'),
		'point_eqs_str' : ('t8 = 1;\n' + 'y = sample*0.48;\n' + 'x = 0.5 + t8*0.04 - t8*sample*0.02 + (sqr(sample*2-1)-1)*q1*0.5;'),

		}
],
	'shapes' : [
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
			g2 : 1.0,
			tex_zoom : 0.787559,
			additive : 0.0,
			bdrawback : 1.0,
			tex_cx : 0.5,
			border_a : 0.0,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 1.0,
			x_wrap_mode : 0.0,
			a2 : 1.0,
			y_wrap_mode : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 1.574048,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.0,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 1.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.467533,
			x : 0.5,
			y : 0.75,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.w = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.w = ((-Math.atan2(0.5, m.q1)*4)+(Math.asin(1)*4));
m.ang = m.w;
m.x = (0.5+(Math.sin(m.w)*0.19));
m.y = (0.5+(Math.cos(m.w)*0.26));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('w = -atan2(0.5,q1)*4+asin(1)*4;\n' + 'ang = w;\n' + 'x = 0.5 +sin(w)*0.19;\n' + 'y = 0.5 +cos(w)*0.26;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.4,
			border_a : 0.0,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 1.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.467533,
			x : 0.5,
			y : 0.75,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.tex_cy = 0;
m.w = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.w = (((-Math.atan2(0.5, m.q1)*4)+(Math.asin(1)*4))+div((Math.asin(1)*2),3));
m.ang = m.w;
m.x = (0.5+(Math.sin(m.w)*0.19));
m.y = (0.5+(Math.cos(m.w)*0.26));
m.tex_cy = (0.4+(m.bass*0.02));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('w = -atan2(0.5,q1)*4+asin(1)*4 + asin(1)*2/3;\n' + 'ang = w;\n' + 'x = 0.5 +sin(w)*0.19;\n' + 'y = 0.5 +cos(w)*0.26;\n' + 'tex_cy=.4+(bass*0.02);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.6,
			border_a : 0.0,
			tex_capture : 1.0,
			tex_cy : 0.4,
			border_b : 1.0,
			b2 : 1.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.467533,
			x : 0.5,
			y : 0.75,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.tex_cy = 0;
m.w = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.w = (((-Math.atan2(0.5, m.q1)*4)+(Math.asin(1)*4))-div((Math.asin(1)*2),3));
m.ang = m.w;
m.x = (0.5+(Math.sin(m.w)*0.19));
m.y = (0.5+(Math.cos(m.w)*0.26));
m.tex_cy = (0.4+(m.bass*0.02));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('w = -atan2(0.5,q1)*4+asin(1)*4 - asin(1)*2/3;\n' + 'ang = w;\n' + 'x = 0.5 +sin(w)*0.19;\n' + 'y = 0.5 +cos(w)*0.26;\n' + 'tex_cy=.4+(bass*0.02);'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('x1 = 0;\n' + 'y1 = 0;'),
	'frame_eqs_str' : ('zoom = 1.0;\n' + 'q1 = .1*(bass-treb);\n' + 'vvb = if(below(vvb,0),0,vvb);\n' + 'vvm = if(below(vvm,0),0,vvm);\n' + 'vvt = if(below(vvt,0),0,vvt);\n' + 'vb = vb*0.85 + (1-vb)*pow(bass,2)*0.001;\n' + 'vvb = vvb*0.95 + (1-vvb)*vb*0.2;\n' + 'vm = vm*0.85 + (1-vm)*pow(mid,2)*0.01;\n' + 'vvm = vvm*0.95 + (1-vvm)*vm*0.2;\n' + 'vt = vt*0.85 + (1-vt)*pow(treb,2)*0.001;\n' + 'vvt = vvt*0.95 + (1-vvt)*vt*0.2;\n' + 'q1 = (vvb-vvt)*vvm;\n' + 'q2 = vvm;\n' + 'q3 = vvt;\n' + 'v=0.2;\n' + 'd = 0;\n' + 'bb = bb + vvb*v - d;\n' + 'mm = mm + vvm*v - d;\n' + 'tt = tt + vvt*v - d;\n' + 'q4 = bb;\n' + 'q5 = mm;\n' + 'q6 = tt;\n' + 'echo_zoom=(sin(time)*0.5+0.5)+0.4;\n' + 'decay = if(above(abs(q1),0.005),0.99,1);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
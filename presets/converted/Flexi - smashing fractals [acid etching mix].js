define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 8.311,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.13291,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 1.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 5.20652,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 0.71,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.311,
		wave_dots : 0.0,
		mv_g : 0.91,
		wave_x : 0.5,
		wave_y : 0.04,
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
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.44,
		decay : 1.0,
		wave_a : 0.004,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.grav = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.bounce = 0;
m.resist = 0;
m.spring = 0;
m.ry4 = 0;
m.vy2 = 0;
m.dt = 0;
m.vx2 = 0;
m.vy3 = 0;
m.yy1 = 0;
m.xx1 = 0;
m.vx3 = 0;
m.vy4 = 0;
m.xx2 = 0;
m.vx4 = 0;
m.spy2 = 0;
m.spx2 = 0;
m.spy3 = 0;
m.spx3 = 0;
m.spy4 = 0;
m.y1 = 0;
m.spx4 = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.y4 = 0;
m.x4 = 0;
m.x1 = 0;
m.y1 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.25;
m.xx1 = ((m.xx1*0.9)+(m.bass*0.01));
m.xx2 = ((m.xx2*0.9)+(m.treb*0.01));
m.yy1 = ((m.yy1*0.94)+((m.treb+m.bass)*0.0075));
m.x1 = (0.5+((m.xx1-m.xx2)*2));
m.y1 = (0.4+m.yy1);
m.x1 = Math.max(0, Math.min(1, m.x1));
m.y1 = Math.max(0, Math.min(1, m.y1));
m.spring = 50;
m.grav = 2;
m.resist = 5;
m.bounce = 0.75;
m.dt = div((0.00015*60),m.fps);
m.spx2 = (((m.x1+m.x3)-(2*m.x2))*m.spring);
m.spy2 = (((m.y1+m.y3)-(2*m.y2))*m.spring);
m.spx3 = (((m.x2+m.x4)-(2*m.x3))*m.spring);
m.spy3 = (((m.y2+m.y4)-(2*m.y3))*m.spring);
m.spx4 = ((m.x3-m.x4)*m.spring);
m.spy4 = ((m.y3-m.y4)*m.spring);
m.vx2 = ((m.vx2*(1-(m.resist*m.dt)))+(m.dt*m.spx2));
m.vy2 = ((m.vy2*(1-(m.resist*m.dt)))+(m.dt*(m.spy2-m.grav)));
m.vx3 = ((m.vx3*(1-(m.resist*m.dt)))+(m.dt*m.spx3));
m.vy3 = ((m.vy3*(1-(m.resist*m.dt)))+(m.dt*(m.spy3-m.grav)));
m.vx4 = ((m.vx4*(1-(m.resist*m.dt)))+(m.dt*m.spx4));
m.vy4 = ((m.vy4*(1-(m.resist*m.dt)))+(m.dt*(m.spy4-m.grav)));
m.x2 = (m.x2+m.vx2);
m.y2 = (m.y2+m.vy2);
m.x3 = (m.x3+m.vx3);
m.y3 = (m.y3+m.vy3);
m.x4 = (m.x4+m.vx4);
m.y4 = (m.y4+m.vy4);
m.vx2 = ifcond(above(m.x2, 0.1), m.vx2, (Math.abs(m.vx2)*m.bounce));
m.vx2 = ifcond(below(m.x2, 0.9), m.vx2, (-Math.abs(m.vx2)*m.bounce));
m.vx3 = ifcond(above(m.x3, 0.1), m.vx3, (Math.abs(m.vx3)*m.bounce));
m.vx3 = ifcond(below(m.x3, 0.9), m.vx3, (-Math.abs(m.vx3)*m.bounce));
m.vx4 = ifcond(above(m.x4, 0.1), m.vx4, (Math.abs(m.vx4)*m.bounce));
m.vx4 = ifcond(below(m.x4, 0.9), m.vx4, (-Math.abs(m.vx4)*m.bounce));
m.vy2 = ifcond(above(m.y2, 0), m.vy2, (Math.abs(m.vy2)*m.bounce));
m.vy2 = ifcond(below(m.y2, 1), m.vy2, (-Math.abs(m.vy2)*m.bounce));
m.vy3 = ifcond(above(m.y3, 0), m.vy3, (Math.abs(m.vy3)*m.bounce));
m.vy3 = ifcond(below(m.y3, 1), m.vy3, (-Math.abs(m.vy3)*m.bounce));
m.vy4 = ifcond(above(m.y4, 0), m.vy4, (Math.abs(m.vy4)*m.bounce));
m.vy4 = ifcond(below(m.y4, 1), m.vy4, (-Math.abs(m.vy4)*m.bounce));
m.q1 = m.x1;
m.q2 = m.x2;
m.q3 = m.x3;
m.q4 = m.x4;
m.q5 = m.y1;
m.q6 = m.y2;
m.q7 = m.y3;
m.q8 = m.y4;
m.monitor = m.ry4;
m.zoom = 1.0004;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 2.44415,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.bb = 0;
m.q1 = 0;
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
			m.rkeys = ['b','g','r'];
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
m.cl1 = (m.cl1+0.002);
m.cl1 = ifcond(above(m.cl1, 1), 0, m.cl1);
m.cl1 = ifcond(below(m.cl1, 0), 1, m.cl1);
m.t8 = m.cl1;
m.cl2 = (m.cl2-(1*m.q1));
m.cl2 = ifcond(above(m.cl2, 1), 0, m.cl2);
m.cl2 = ifcond(below(m.cl2, 0), 1, m.cl2);
m.t7 = m.cl2;
m.cl3 = (m.cl3+0.001);
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
m.r = ifcond(above(m.r, 1), 1, m.r);
m.r = ifcond(below(m.r, 0), 0, m.r);
m.g = ifcond(above(m.g, 1), 1, m.g);
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = ifcond(above(m.b, 1), 1, m.b);
m.b = ifcond(below(m.b, 0), 0, m.b);
m.a = 0.4;
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('t1 = 0;\n' + 'v = 0.01;\n' + 'j = j + (bass)*0.01;\n' + 'j2 = j2 + (mid_att)*0.01;\n' + 'j3 = j3 + (treb_att)*0.01;\n' + 't2 = j;\n' + 't3 = j2;\n' + 't4 = j3;\n' + 'k = k*0.99 + 10*mid/fps;\n' + 't5 = -k;\n' + 'cl1 = cl1 + 0.002;\n' + 'cl1 = if(above(cl1,1),0,cl1);\n' + 'cl1 = if(below(cl1,0),1,cl1);\n' + 't8 = cl1;\n' + 'cl2 = cl2 -1*q1;\n' + 'cl2 = if(above(cl2,1),0,cl2);\n' + 'cl2 = if(below(cl2,0),1,cl2);\n' + 't7 = cl2;\n' + 'cl3 = cl3 +0.001;\n' + 'cl3 = if(above(cl3,1),0,cl3);\n' + 'cl3 = if(below(cl3,0),1,cl3);\n' + 't6 = cl3;'),
		'point_eqs_str' : ('xx = ((sample*0983624912364)%10000000+100)/10000000;\n' + 'yy = ((xx*1896575575)%10000000+100)/10000000;\n' + 'zz = ((yy*58652340875)%10000000+100)/10000000;\n' + 'd = sqrt(sqr(xx)+sqr(yy)+sqr(zz));\n' + 'zz = zz + t8 - if(above(zz+t8,1),1,0) - 0.5;\n' + 'xx = xx + t7 - if(above(xx+t7,1),1,0) - 0.5;\n' + 'yy = yy + t6 - if(above(yy+t6,1),1,0) - 0.5;\n' + 'v = 0.001;\n' + 'w = 1;\n' + 'bb = d*d*0.5;\n' + 'n= 0.3;\n' + 's1 = sin(sin(t2*w+bb)*n);\n' + 's2 = sin(sin(t3*w+bb)*n);\n' + 's3 = sin(sin(t4*w+bb)*n);\n' + 'c1 = cos(sin(t2*w+bb)*n);\n' + 'c2 = cos(sin(t3*w+bb)*n);\n' + 'c3 = cos(sin(t4*w+bb)*n);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'zoom = .5*(1/(z+0.5));\n' + 'x = 0.5 + zoom*x1 + sin(time*0.1)*0;\n' + 'y = 0.5 + zoom*y1 + cos(time*0.16801)*0;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = z*2+t2*1;\n' + 'c=3;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);\n' + 'a = 0.4;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 7.7518,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.d = 0;
m.t8 = 0;
m.t1 = 0;
m.t2 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = ['d'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t8 = 1;
m.t1 = 0.5;
m.t2 = 0.9;
		return m;
	},
		'point_eqs' : function(m) {
m.d = ((m.d*0.85)+(m.value1*1));
m.x = (0.5+((m.d*m.sample)*(1-m.sample)));
m.y = (0.9-(m.sample*0.8));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('t8 = 1;\n' + 't1 = 0.5;\n' + 't2 = 0.9;'),
		'point_eqs_str' : ('d = d*0.85 + (value1)*1;\n' + 'x = 0.5 + d*sample*(1-sample);\n' + 'y = 0.9 - sample*0.8;'),

		},
		{
		'baseVals' : {
			a : 0.66,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 5.92556,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.dd = 0;
m.q1 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.d = 0;
m.q5 = 0;
m.t8 = 0;
m.ddd = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.xxx = 0;
m.yyy = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['dd','xx','yy','sample'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t2 = m.q2;
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
m.t7 = m.q7;
m.t8 = m.q8;
		return m;
	},
		'point_eqs' : function(m) {
m.sample = (1-m.sample);
m.xxx = m.xx;
m.yyy = m.yy;
m.xx = ((((((pow(m.sample, 5)*m.t1)+(((5*pow(m.sample, 4))*(1-m.sample))*m.t1))+(((10*pow(m.sample, 3))*sqr((1-m.sample)))*m.t2))+(((10*sqr(m.sample))*pow((1-m.sample), 3))*m.t3))+(((5*pow((1-m.sample), 4))*m.sample)*m.t4))+(pow((1-m.sample), 5)*m.t4));
m.yy = ((((((pow(m.sample, 5)*m.t5)+(((5*pow(m.sample, 4))*(1-m.sample))*m.t5))+(((10*pow(m.sample, 3))*sqr((1-m.sample)))*m.t6))+(((10*sqr(m.sample))*pow((1-m.sample), 3))*m.t7))+(((5*pow((1-m.sample), 4))*m.sample)*m.t8))+(pow((1-m.sample), 5)*m.t8));
m.d = div(1,sqrt((sqr((m.xx-m.xxx))+sqr((m.yy-m.yyy)))));
m.dd = ((m.dd*0.95)+m.value1);
m.ddd = (((m.dd*m.sample)*(1-m.sample))*m.d);
m.x = (m.xx+((m.yy-m.yyy)*m.ddd));
m.y = (m.yy-((m.xx-m.xxx)*m.ddd));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't7 = q7;\n' + 't8 = q8;'),
		'point_eqs_str' : ('sample = 1-sample;\n' + 'xxx = xx;\n' + 'yyy = yy;\n' + 'xx = pow(sample,5)*t1 + 5*pow(sample,4)*(1-sample)*t1 + 10*pow(sample,3)*sqr(1-sample)*t2+ 10*sqr(sample)*pow(1-sample,3)*t3 + 5*pow(1-sample,4)*sample*t4 + pow(1-sample,5)*t4;\n' + 'yy = pow(sample,5)*t5 + 5*pow(sample,4)*(1-sample)*t5 + 10*pow(sample,3)*sqr(1-sample)*t6+ 10*sqr(sample)*pow(1-sample,3)*t7 + 5*pow(1-sample,4)*sample*t8 + pow(1-sample,5)*t8;\n' + 'd = 1/sqrt(sqr(xx-xxx)+sqr(yy-yyy));\n' + 'dd = dd*0.95 + (value1);\n' + 'ddd = dd*sample*(1-sample)*d;\n' + 'x = xx + (yy-yyy)*ddd;\n' + 'y = yy - (xx-xxx)*ddd;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.45,
			scaling : 5.92556,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.65,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.dd = 0;
m.q1 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.d = 0;
m.q5 = 0;
m.t8 = 0;
m.ddd = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.xxx = 0;
m.yyy = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t2 = 0;
			m.rkeys = ['dd','xx','yy','sample'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t2 = m.q2;
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
m.t7 = m.q7;
m.t8 = m.q8;
		return m;
	},
		'point_eqs' : function(m) {
m.sample = (1-m.sample);
m.xxx = m.xx;
m.yyy = m.yy;
m.xx = ((((((pow(m.sample, 5)*m.t1)+(((5*pow(m.sample, 4))*(1-m.sample))*m.t1))+(((10*pow(m.sample, 3))*sqr((1-m.sample)))*m.t2))+(((10*sqr(m.sample))*pow((1-m.sample), 3))*m.t3))+(((5*pow((1-m.sample), 4))*m.sample)*m.t4))+(pow((1-m.sample), 5)*m.t4));
m.yy = ((((((pow(m.sample, 5)*m.t5)+(((5*pow(m.sample, 4))*(1-m.sample))*m.t5))+(((10*pow(m.sample, 3))*sqr((1-m.sample)))*m.t6))+(((10*sqr(m.sample))*pow((1-m.sample), 3))*m.t7))+(((5*pow((1-m.sample), 4))*m.sample)*m.t8))+(pow((1-m.sample), 5)*m.t8));
m.d = div(1,sqrt((sqr((m.xx-m.xxx))+sqr((m.yy-m.yyy)))));
m.dd = ((m.dd*0.95)+m.value1);
m.ddd = (((m.dd*m.sample)*(1-m.sample))*m.d);
m.ddd = ((((m.sample*(1-m.sample))*Math.sin((m.sample*200)))*m.d)*0.05);
m.x = (m.xx+((m.yy-m.yyy)*m.ddd));
m.y = (m.yy-((m.xx-m.xxx)*m.ddd));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;'),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't7 = q7;\n' + 't8 = q8;'),
		'point_eqs_str' : ('sample = 1-sample;\n' + 'xxx = xx;\n' + 'yyy = yy;\n' + 'xx = pow(sample,5)*t1 + 5*pow(sample,4)*(1-sample)*t1 + 10*pow(sample,3)*sqr(1-sample)*t2+ 10*sqr(sample)*pow(1-sample,3)*t3 + 5*pow(1-sample,4)*sample*t4 + pow(1-sample,5)*t4;\n' + 'yy = pow(sample,5)*t5 + 5*pow(sample,4)*(1-sample)*t5 + 10*pow(sample,3)*sqr(1-sample)*t6+ 10*sqr(sample)*pow(1-sample,3)*t7 + 5*pow(1-sample,4)*sample*t8 + pow(1-sample,5)*t8;\n' + 'd = 1/sqrt(sqr(xx-xxx)+sqr(yy-yyy));\n' + 'dd = dd*0.95 + (value1);\n' + 'ddd = dd*sample*(1-sample)*d;\n' + 'ddd = sample*(1-sample)*sin(sample*200)*d*0.05;\n' + 'x = xx + (yy-yyy)*ddd;\n' + 'y = yy - (xx-xxx)*ddd;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.73458,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.07493,
			x : 0.5,
			y : 0.75,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q8 = 0;
m.vx = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q4;
m.y = m.q8;
		return m;
	},
		'init_eqs_str' : ('vx = 0;'),
		'frame_eqs_str' : ('x = q4;\n' + 'y = q8;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.1,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.1,
			textured : 1.0,
			g2 : 0.1,
			tex_zoom : 0.74934,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.1,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.6623,
			x : 0.7,
			y : 0.3,
			ang : 2.45044,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.xx = 0;
m.yy = 0;
m.q4 = 0;
m.d = 0;
m.q8 = 0;
m.aang = 0;
m.xx = 0.5;
m.yy = 0.4;
			m.rkeys = ['aang','yy','xx'];
			return m;
		},
		'frame_eqs' : function(m) {
m.d = sqrt((sqr((m.xx-m.q4))+sqr((m.yy-m.q8))));
m.xx = ifcond(below(m.d, 0.15), (0.4+div(rand(200),1000)), m.xx);
m.yy = ifcond(below(m.d, 0.15), (0.3+div(rand(400),1000)), m.yy);
m.aang = ifcond(below(m.d, 0.12), div(rand(1000),1000), m.aang);
m.ang = ((m.aang*4)*Math.asin(1));
m.x = m.xx;
m.y = m.yy;
		return m;
	},
		'init_eqs_str' : ('xx = 0.5;\n' + 'yy = 0.4;'),
		'frame_eqs_str' : ('d = sqrt( sqr(xx-q4)+sqr(yy-q8));\n' + 'xx = if(below(d,0.15),0.4+rand(200)/1000,xx);\n' + 'yy = if(below(d,0.15),0.3+rand(400)/1000,yy);\n' + 'aang = if(below(d,0.12),rand(1000)/1000,aang);\n' + 'ang =aang*4*asin(1);\n' + 'x = xx;\n' + 'y = yy;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.67165,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.16781,
			x : 0.43,
			y : 0.6,
			ang : 5.96903,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.xx = 0;
m.yy = 0;
m.q4 = 0;
m.d = 0;
m.q8 = 0;
m.aang = 0;
m.xx = 0.5;
m.yy = 0.4;
			m.rkeys = ['aang','yy','xx'];
			return m;
		},
		'frame_eqs' : function(m) {
m.d = sqrt((sqr((m.xx-m.q4))+sqr((m.yy-m.q8))));
m.xx = ifcond(below(m.d, 0.15), (0.4+div(rand(200),1000)), m.xx);
m.yy = ifcond(below(m.d, 0.15), (0.3+div(rand(400),1000)), m.yy);
m.aang = ifcond(below(m.d, 0.12), div(rand(1000),1000), m.aang);
m.ang = ((m.aang*4)*Math.asin(1));
m.x = m.xx;
m.y = m.yy;
		return m;
	},
		'init_eqs_str' : ('xx = 0.5;\n' + 'yy = 0.4;'),
		'frame_eqs_str' : ('d = sqrt( sqr(xx-q4)+sqr(yy-q8));\n' + 'xx = if(below(d,0.15),0.4+rand(200)/1000,xx);\n' + 'yy = if(below(d,0.15),0.3+rand(400)/1000,yy);\n' + 'aang = if(below(d,0.12),rand(1000)/1000,aang);\n' + 'ang =aang*4*asin(1);\n' + 'x = xx;\n' + 'y = yy;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.5,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.5,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.73458,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.07059,
			x : 0.5,
			y : 0.75,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q5 = 0;
m.vx = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q1;
m.y = m.q5;
		return m;
	},
		'init_eqs_str' : ('vx = 0;'),
		'frame_eqs_str' : ('x = q1;\n' + 'y = q5;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 my_uv_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + vec2(0.005, 0.0));\n' + '  tmpvar_3 = texture2D (sampler_blur2, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - vec2(0.005, 0.0));\n' + '  tmpvar_5 = texture2D (sampler_blur2, P_6);\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale2) + bias2) - ((tmpvar_5.xyz * scale2) + bias2)).y;\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + vec2(0.0, 0.005));\n' + '  tmpvar_8 = texture2D (sampler_blur2, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - vec2(0.0, 0.005));\n' + '  tmpvar_10 = texture2D (sampler_blur2, P_11);\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale2) + bias2) - ((tmpvar_10.xyz * scale2) + bias2)).y;\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = tmpvar_7;\n' + '  tmpvar_13.y = tmpvar_12;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = (uv - (tmpvar_13 * 0.01));\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (tmpvar_14 - floor(tmpvar_14));\n' + '  tmpvar_15 = texture2D (sampler_fc_main, P_16);\n' + '  ret_2.y = tmpvar_15.y;\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (tmpvar_14 - floor(tmpvar_14));\n' + '  tmpvar_17 = texture2D (sampler_blur3, P_18);\n' + '  ret_2.y = (ret_2.y + ((ret_2.y - \n' + '    ((tmpvar_17.xyz * scale3) + bias3)\n' + '  .y) * 0.1));\n' + '   vec4 tmpvar_19;\n' + '   vec2 P_20;\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21 = floor(uv);\n' + '  P_20 = (uv - tmpvar_21);\n' + '  tmpvar_19 = texture2D (sampler_blur3, P_20);\n' + '  ret_2.y = (ret_2.y + (0.006 - (\n' + '    ((tmpvar_19.xyz * scale3) + bias3)\n' + '  .x * 5.0)));\n' + '  ret_2.y = ret_2.y;\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22.x = -(tmpvar_12);\n' + '  tmpvar_22.y = tmpvar_7;\n' + '  my_uv_1 = (tmpvar_22 * 0.05);\n' + '   vec4 tmpvar_23;\n' + '   vec2 P_24;\n' + '  P_24 = (uv + vec2(0.01, 0.0));\n' + '  tmpvar_23 = texture2D (sampler_blur2, P_24);\n' + '   vec4 tmpvar_25;\n' + '   vec2 P_26;\n' + '  P_26 = (uv - vec2(0.01, 0.0));\n' + '  tmpvar_25 = texture2D (sampler_blur2, P_26);\n' + '   vec4 tmpvar_27;\n' + '   vec2 P_28;\n' + '  P_28 = (uv + vec2(0.0, 0.01));\n' + '  tmpvar_27 = texture2D (sampler_blur2, P_28);\n' + '   vec4 tmpvar_29;\n' + '   vec2 P_30;\n' + '  P_30 = (uv - vec2(0.0, 0.01));\n' + '  tmpvar_29 = texture2D (sampler_blur2, P_30);\n' + '   vec2 tmpvar_31;\n' + '  tmpvar_31.x = (((tmpvar_23.xyz * scale2) + bias2) - ((tmpvar_25.xyz * scale2) + bias2)).z;\n' + '  tmpvar_31.y = (((tmpvar_27.xyz * scale2) + bias2) - ((tmpvar_29.xyz * scale2) + bias2)).z;\n' + '  my_uv_1 = (my_uv_1 + (uv - (tmpvar_31 * 0.005)));\n' + '   vec4 tmpvar_32;\n' + '   vec2 P_33;\n' + '  P_33 = (my_uv_1 - floor(my_uv_1));\n' + '  tmpvar_32 = texture2D (sampler_fw_main, P_33);\n' + '  ret_2.z = tmpvar_32.z;\n' + '   vec4 tmpvar_34;\n' + '   vec2 P_35;\n' + '  P_35 = (my_uv_1 - floor(my_uv_1));\n' + '  tmpvar_34 = texture2D (sampler_blur3, P_35);\n' + '  ret_2.z = (ret_2.z + ((ret_2.z - \n' + '    ((tmpvar_34.xyz * scale3) + bias3)\n' + '  .z) * 0.13));\n' + '  ret_2.z = (ret_2.z * 0.95);\n' + '   vec4 tmpvar_36;\n' + '   vec2 P_37;\n' + '  P_37 = (uv - tmpvar_21);\n' + '  tmpvar_36 = texture2D (sampler_blur3, P_37);\n' + '   vec4 tmpvar_38;\n' + '   vec2 P_39;\n' + '  P_39 = (my_uv_1 - floor(my_uv_1));\n' + '  tmpvar_38 = texture2D (sampler_main, P_39);\n' + '  ret_2.z = (ret_2.z + ((0.03 - \n' + '    ((tmpvar_36.xyz * scale3) + bias3)\n' + '  .x) - (tmpvar_38.y * 0.05)));\n' + '   vec4 tmpvar_40;\n' + '  tmpvar_40 = texture2D (sampler_main, uv_orig);\n' + '  ret_2.x = (tmpvar_40.x - 0.3);\n' + '   vec4 tmpvar_41;\n' + '  tmpvar_41.w = 1.0;\n' + '  tmpvar_41.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_41;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = tmpvar_7.y;\n' + '  tmpvar_13.y = tmpvar_12.y;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = (uv + (tmpvar_13 * 0.1));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur2, tmpvar_14);\n' + '   float tmpvar_16;\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_main, uv);\n' + '  tmpvar_16 = clamp ((1.0 - tmpvar_17.z), 0.0, 1.0);\n' + '  ret_1 = (((\n' + '    ((tmpvar_15.xyz * scale2) + bias2)\n' + '  .x * tmpvar_16) * pow (hue_shader.yxz, vec3(8.0, 8.0, 8.0))) * 3.0);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_main, tmpvar_14);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur1, tmpvar_14);\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_blur1, uv);\n' + '  ret_1 = (mix (ret_1, (\n' + '    pow (hue_shader.yzx, vec3(8.0, 8.0, 8.0))\n' + '   * 1.4), vec3((\n' + '    (tmpvar_18.x * 0.8)\n' + '   + \n' + '    ((tmpvar_19.xyz * scale1) + bias1)\n' + '  .x))) * clamp ((1.0 - \n' + '    (((tmpvar_20.xyz * scale1) + bias1).y * 4.0)\n' + '  ), 0.0, 1.0));\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21.x = tmpvar_7.y;\n' + '  tmpvar_21.y = tmpvar_12.y;\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22 = clamp ((uv - (tmpvar_21 * 0.04)), 0.0, 1.0);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_main, tmpvar_22);\n' + '   vec3 tmpvar_24;\n' + '   vec3 tmpvar_25;\n' + '  tmpvar_25 = pow (hue_shader, vec3(8.0, 8.0, 8.0));\n' + '  tmpvar_24 = mix (mix (ret_1, vec3(1.0, 1.0, 1.0), (\n' + '    (tmpvar_25 * tmpvar_23.z)\n' + '   * 1.2)), (tmpvar_25.zxy * 1.8), tmpvar_17.yyy);\n' + '  ret_1 = tmpvar_24;\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26.w = 1.0;\n' + '  tmpvar_26.xyz = tmpvar_24;\n' + '  vec4 ret4 = tmpvar_26;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0;\n' + 'y1 = 0;'),
	'frame_eqs_str' : ('decay = 0.25;\n' + 'xx1 = xx1*0.9 + (bass)*0.01;\n' + 'xx2 = xx2*0.9 + (treb)*0.01;\n' + 'yy1 = yy1*0.94 + (treb+bass)*0.0075;\n' + 'x1 = 0.5 + (xx1-xx2)*2;\n' + 'y1 = 0.4 + yy1;\n' + 'x1 = max(0,min(1,x1));\n' + 'y1 = max(0,min(1,y1));\n' + 'spring = 50;\n' + 'grav = 2;\n' + 'resist = 5;\n' + 'bounce = 0.75;\n' + 'dt = 0.00015*60/fps;\n' + 'spx2 = (x1+x3-2*x2)*spring;\n' + 'spy2 = (y1+y3-2*y2)*spring;\n' + 'spx3 = (x2+x4-2*x3)*spring;\n' + 'spy3 = (y2+y4-2*y3)*spring;\n' + 'spx4 = (x3-x4)*spring;\n' + 'spy4 = (y3-y4)*spring;\n' + 'vx2 = vx2*(1-resist*dt) + dt*(spx2);\n' + 'vy2 = vy2*(1-resist*dt) + dt*(spy2-grav);\n' + 'vx3 = vx3*(1-resist*dt) + dt*(spx3);\n' + 'vy3 = vy3*(1-resist*dt) + dt*(spy3-grav);\n' + 'vx4 = vx4*(1-resist*dt) + dt*(spx4);\n' + 'vy4 = vy4*(1-resist*dt) + dt*(spy4-grav);\n' + 'x2 = x2 + vx2;\n' + 'y2 = y2 + vy2;\n' + 'x3 = x3 + vx3;\n' + 'y3 = y3 + vy3;\n' + 'x4 = x4 + vx4;\n' + 'y4 = y4 + vy4;\n' + 'vx2 = if(above(x2,0.1),vx2,abs(vx2)*bounce);\n' + 'vx2 = if(below(x2,0.9),vx2,-abs(vx2)*bounce);\n' + 'vx3 = if(above(x3,0.1),vx3,abs(vx3)*bounce);\n' + 'vx3 = if(below(x3,0.9),vx3,-abs(vx3)*bounce);\n' + 'vx4 = if(above(x4,0.1),vx4,abs(vx4)*bounce);\n' + 'vx4 = if(below(x4,0.9),vx4,-abs(vx4)*bounce);\n' + 'vy2 = if(above(y2,0),vy2,abs(vy2)*bounce);\n' + 'vy2 = if(below(y2,1),vy2,-abs(vy2)*bounce);\n' + 'vy3 = if(above(y3,0),vy3,abs(vy3)*bounce);\n' + 'vy3 = if(below(y3,1),vy3,-abs(vy3)*bounce);\n' + 'vy4 = if(above(y4,0),vy4,abs(vy4)*bounce);\n' + 'vy4 = if(below(y4,1),vy4,-abs(vy4)*bounce);\n' + 'q1 = x1;\n' + 'q2 = x2;\n' + 'q3 = x3;\n' + 'q4 = x4;\n' + 'q5 = y1;\n' + 'q6 = y2;\n' + 'q7 = y3;\n' + 'q8 = y4;\n' + 'monitor = ry4;\n' + 'zoom = 1.0004;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
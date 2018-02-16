define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 13.125,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.01,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.1,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.99213,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 1.0,
		ob_size : 0.015,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 0.137,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.04,
		zoom : 0.99951,
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
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.44,
		decay : 1.0,
		wave_a : 0.004,
		ob_g : 0.25,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 1.0,
		mv_r : 1.0,
		rating : 1.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.vy2 = 0;
m.dt = 0;
m.vx2 = 0;
m.vy3 = 0;
m.q10 = 0;
m.yy1 = 0;
m.xx1 = 0;
m.vx3 = 0;
m.vy4 = 0;
m.q11 = 0;
m.xx2 = 0;
m.vx4 = 0;
m.q12 = 0;
m.q13 = 0;
m.q14 = 0;
m.q15 = 0;
m.q16 = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.y4 = 0;
m.x4 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_a = 0;
m.xx1 = ((m.xx1*0.9)+(m.bass*0.01));
m.xx2 = ((m.xx2*0.9)+(m.treb*0.01));
m.yy1 = ((m.yy1*0.94)+((m.treb+m.bass)*0.0075));
m.x1 = (0.5+((m.xx1-m.xx2)*2));
m.y1 = (0.4+(m.yy1*1.5));
m.dt = div(0.03,m.fps);
m.vx2 = ((m.vx2*(1-(2*m.dt)))+(m.dt*(((m.x1+m.x3)-(2*m.x2))*10)));
m.vy2 = ((m.vy2*(1-(2*m.dt)))+(m.dt*((((m.y1+m.y3)-(2*m.y2))*10)-0.5)));
m.vx3 = ((m.vx3*(1-(2*m.dt)))+(m.dt*(((m.x2+m.x4)-(2*m.x3))*10)));
m.vy3 = ((m.vy3*(1-(2*m.dt)))+(m.dt*((((m.y2+m.y4)-(2*m.y3))*10)-0.5)));
m.vx4 = ((m.vx4*(1-(2*m.dt)))+(m.dt*((m.x3-m.x4)*10)));
m.vy4 = ((m.vy4*(1-(2*m.dt)))+(m.dt*(((m.y3-m.y4)*10)-0.5)));
m.x2 = (m.x2+m.vx2);
m.y2 = (m.y2+m.vy2);
m.x3 = (m.x3+m.vx3);
m.y3 = (m.y3+m.vy3);
m.x4 = (m.x4+m.vx4);
m.y4 = (m.y4+m.vy4);
m.vx2 = ifcond(above(m.x2, 0), m.vx2, (Math.abs(m.vx2)*0.5));
m.vx2 = ifcond(below(m.x2, 1), m.vx2, (-Math.abs(m.vx2)*0.5));
m.vx3 = ifcond(above(m.x3, 0), m.vx3, (Math.abs(m.vx3)*0.5));
m.vx3 = ifcond(below(m.x3, 1), m.vx3, (-Math.abs(m.vx3)*0.5));
m.vx4 = ifcond(above(m.x4, 0), m.vx4, (Math.abs(m.vx4)*0.5));
m.vx4 = ifcond(below(m.x4, 1), m.vx4, (-Math.abs(m.vx4)*0.5));
m.vy2 = ifcond(above(m.y2, 0), m.vy2, (Math.abs(m.vy2)*0.5));
m.vy2 = ifcond(below(m.y2, 1), m.vy2, (-Math.abs(m.vy2)*0.5));
m.vy3 = ifcond(above(m.y3, 0), m.vy3, (Math.abs(m.vy3)*0.5));
m.vy3 = ifcond(below(m.y3, 1), m.vy3, (-Math.abs(m.vy3)*0.5));
m.vy4 = ifcond(above(m.y4, 0), m.vy4, (Math.abs(m.vy4)*0.5));
m.vy4 = ifcond(below(m.y4, 1), m.vy4, (-Math.abs(m.vy4)*0.5));
m.q1 = m.x1;
m.q2 = m.x2;
m.q3 = m.x3;
m.q4 = m.x4;
m.q5 = m.y1;
m.q6 = m.y2;
m.q7 = m.y3;
m.q8 = m.y4;
m.q9 = div(1,m.aspectx);
m.q10 = div(1,m.aspecty);
m.q11 = m.aspectx;
m.q12 = m.aspecty;
m.q13 = sqrt(((m.vx4*m.vx4)+(m.vy4*m.vy4)));
m.q14 = Math.atan2(m.vx4, m.vy4);
m.q15 = Math.sin(m.q14);
m.q16 = Math.cos(m.q14);
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
			scaling : 2.44415,
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
m.c = 0;
m.t8 = 0;
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
m.y = m.sample;
m.x = (0.5+(m.t8*0.005));
m.pi3 = ((3.1415*2)*0.3333);
m.t = (m.time+(m.sample*2));
m.c = 2;
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
		'point_eqs_str' : ('t8 = -t8;\n' + 'y = sample;\n' + 'x = 0.5 + t8*0.005;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = time + sample*2;\n' + 'c=2;\n' + 'r = sin(t)*c;\n' + 'g = sin(t+pi3)*c;\n' + 'b = sin(t-pi3)*c;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);'),

		},
		{
		'baseVals' : {
			a : 0.3,
			enabled : 0.0,
			b : 1.0,
			g : 0.4,
			scaling : 100.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.6,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
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
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.xxx = 0;
m.yyy = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['yy','xx','sample'];
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
m.x = (m.xx+((((m.sample*(1-m.sample))*(m.value1-m.value2))*(m.yy-m.yyy))*m.d));
m.y = (m.yy-((((m.sample*(1-m.sample))*(m.value1-m.value2))*(m.xx-m.xxx))*m.d));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't7 = q7;\n' + 't8 = q8;'),
		'point_eqs_str' : ('sample = 1-sample;\n' + 'xxx = xx;\n' + 'yyy = yy;\n' + 'xx = pow(sample,5)*t1 + 5*pow(sample,4)*(1-sample)*t1 + 10*pow(sample,3)*sqr(1-sample)*t2+ 10*sqr(sample)*pow(1-sample,3)*t3 + 5*pow(1-sample,4)*sample*t4 + pow(1-sample,5)*t4;\n' + 'yy = pow(sample,5)*t5 + 5*pow(sample,4)*(1-sample)*t5 + 10*pow(sample,3)*sqr(1-sample)*t6+ 10*sqr(sample)*pow(1-sample,3)*t7 + 5*pow(1-sample,4)*sample*t8 + pow(1-sample,5)*t8;\n' + 'd = 1/sqrt(sqr(xx-xxx)+sqr(yy-yyy));\n' + 'x = xx + sample*(1-sample)*(value1-value2)*(yy-yyy)*d;\n' + 'y = yy - sample*(1-sample)*(value1-value2)*(xx-xxx)*d;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.0,
			scaling : 2.44415,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t8 = 0;
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
m.y = ((1+m.t8)*0.01);
m.x = m.sample;
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('t8 = 1;'),
		'point_eqs_str' : ('t8 = -t8;\n' + 'y = (1+t8)*0.01;\n' + 'x = sample;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.1,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.12566,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.51878,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.02015,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.12566,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.51878,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.39872,
			x : 1.0,
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
			tex_ang : 0.12566,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.51878,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 3.0054,
			x : 1.0,
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

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.12566,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.51878,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.39872,
			x : 1.0,
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

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

		}
],
	'warp' : ('uniform highp float struc;\n' + 'uniform highp vec3 uv2;\n' + 'highp float sustain;\n' + 'highp float xlat_mutabledist;\n' + 'highp float xlat_mutablestruc;\n' + 'highp vec2 xlat_mutableuv1;\n' + 'highp vec3 xlat_mutableuv2;\n' + 'shader_body {\n' + '  xlat_mutablestruc = struc;\n' + '  xlat_mutableuv2 = uv2;\n' + '   mat3 tmpvar_1;\n' + '  tmpvar_1[0].x = _qe.w;\n' + '  tmpvar_1[0].y = _qf.z;\n' + '  tmpvar_1[0].z = _qg.y;\n' + '  tmpvar_1[1].x = _qf.x;\n' + '  tmpvar_1[1].y = _qf.w;\n' + '  tmpvar_1[1].z = _qg.z;\n' + '  tmpvar_1[2].x = _qf.y;\n' + '  tmpvar_1[2].y = _qg.x;\n' + '  tmpvar_1[2].z = _qg.w;\n' + '   vec3 tmpvar_2;\n' + '  tmpvar_2.x = _qa.w;\n' + '  tmpvar_2.y = _qb.x;\n' + '  tmpvar_2.z = _qb.y;\n' + '  sustain = (1.025 - _qd.y);\n' + '   vec2 uv_3;\n' + '   vec3 noise_4;\n' + '   vec3 ret_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (uv - 0.5);\n' + '  xlat_mutableuv1 = ((tmpvar_6 * aspect.xy) * _qd.w);\n' + '   vec2 tmp_7;\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_pc_main, uv);\n' + '  tmp_7 = tmpvar_8.yz;\n' + '  uv_3 = ((tmpvar_6 * (1.0 - \n' + '    (_qc.y / (1.0 - ((tmp_7.y + \n' + '      (0.003921569 * tmp_7.x)\n' + '    ) + (_qc.y * 0.7))))\n' + '  )) + 0.5);\n' + '   vec2 P_9;\n' + '  P_9 = (uv_3 + rand_frame.yz);\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = fract((8.0 * texture2D (sampler_noise_lq, P_9))).xyz;\n' + '  noise_4 = tmpvar_10;\n' + '  xlat_mutabledist = noise_4.x;\n' + '  if ((noise_4.y > 0.2)) {\n' + '     vec3 tmpvar_11;\n' + '    tmpvar_11 = (noise_4 - vec3(0.4, 0.5, 0.5));\n' + '     vec2 uvi_12;\n' + '    uvi_12 = ((tmpvar_11.zy * 0.003) + uv_3);\n' + '     vec2 pix_13;\n' + '     vec4 nb2_14;\n' + '     vec4 nb_15;\n' + '     vec2 x_16;\n' + '    x_16 = (uvi_12 - 0.5);\n' + '    pix_13 = (texsize.zw * (1.0 + (\n' + '      sqrt(dot (x_16, x_16))\n' + '     * 8.0)));\n' + '     float tmpvar_17;\n' + '    tmpvar_17 = (_qc.y * 0.7);\n' + '     vec2 uvi_18;\n' + '    uvi_18 = (uvi_12 - pix_13);\n' + '     vec2 tmp_19;\n' + '     vec4 tmpvar_20;\n' + '    tmpvar_20 = texture2D (sampler_pc_main, uvi_18);\n' + '    tmp_19 = tmpvar_20.yz;\n' + '    nb_15.x = (1.0 - ((tmp_19.y + \n' + '      (0.003921569 * tmp_19.x)\n' + '    ) + tmpvar_17));\n' + '     vec2 uvi_21;\n' + '    uvi_21 = (uvi_12 + (pix_13 * vec2(1.0, -1.0)));\n' + '     vec2 tmp_22;\n' + '     vec4 tmpvar_23;\n' + '    tmpvar_23 = texture2D (sampler_pc_main, uvi_21);\n' + '    tmp_22 = tmpvar_23.yz;\n' + '    nb_15.y = (1.0 - ((tmp_22.y + \n' + '      (0.003921569 * tmp_22.x)\n' + '    ) + tmpvar_17));\n' + '     vec2 uvi_24;\n' + '    uvi_24 = (uvi_12 + pix_13);\n' + '     vec2 tmp_25;\n' + '     vec4 tmpvar_26;\n' + '    tmpvar_26 = texture2D (sampler_pc_main, uvi_24);\n' + '    tmp_25 = tmpvar_26.yz;\n' + '    nb_15.z = (1.0 - ((tmp_25.y + \n' + '      (0.003921569 * tmp_25.x)\n' + '    ) + tmpvar_17));\n' + '     vec2 uvi_27;\n' + '    uvi_27 = (uvi_12 + (pix_13 * vec2(-1.0, 1.0)));\n' + '     vec2 tmp_28;\n' + '     vec4 tmpvar_29;\n' + '    tmpvar_29 = texture2D (sampler_pc_main, uvi_27);\n' + '    tmp_28 = tmpvar_29.yz;\n' + '    nb_15.w = (1.0 - ((tmp_28.y + \n' + '      (0.003921569 * tmp_28.x)\n' + '    ) + tmpvar_17));\n' + '     vec2 uvi_30;\n' + '    uvi_30 = (uvi_12 + (pix_13 * vec2(0.0, -1.0)));\n' + '     vec2 tmp_31;\n' + '     vec4 tmpvar_32;\n' + '    tmpvar_32 = texture2D (sampler_pc_main, uvi_30);\n' + '    tmp_31 = tmpvar_32.yz;\n' + '    nb2_14.x = (1.0 - ((tmp_31.y + \n' + '      (0.003921569 * tmp_31.x)\n' + '    ) + tmpvar_17));\n' + '     vec2 uvi_33;\n' + '    uvi_33 = (uvi_12 + (pix_13 * vec2(1.0, 0.0)));\n' + '     vec2 tmp_34;\n' + '     vec4 tmpvar_35;\n' + '    tmpvar_35 = texture2D (sampler_pc_main, uvi_33);\n' + '    tmp_34 = tmpvar_35.yz;\n' + '    nb2_14.y = (1.0 - ((tmp_34.y + \n' + '      (0.003921569 * tmp_34.x)\n' + '    ) + tmpvar_17));\n' + '     vec2 uvi_36;\n' + '    uvi_36 = (uvi_12 + (pix_13 * vec2(0.0, 1.0)));\n' + '     vec2 tmp_37;\n' + '     vec4 tmpvar_38;\n' + '    tmpvar_38 = texture2D (sampler_pc_main, uvi_36);\n' + '    tmp_37 = tmpvar_38.yz;\n' + '    nb2_14.z = (1.0 - ((tmp_37.y + \n' + '      (0.003921569 * tmp_37.x)\n' + '    ) + tmpvar_17));\n' + '     vec2 uvi_39;\n' + '    uvi_39 = (uvi_12 + (pix_13 * vec2(-1.0, 0.0)));\n' + '     vec2 tmp_40;\n' + '     vec4 tmpvar_41;\n' + '    tmpvar_41 = texture2D (sampler_pc_main, uvi_39);\n' + '    tmp_40 = tmpvar_41.yz;\n' + '    nb2_14.w = (1.0 - ((tmp_40.y + \n' + '      (0.003921569 * tmp_40.x)\n' + '    ) + tmpvar_17));\n' + '     vec4 tmpvar_42;\n' + '    tmpvar_42 = min (nb_15, nb2_14);\n' + '    nb_15.zw = tmpvar_42.zw;\n' + '    nb_15.xy = min (tmpvar_42.xy, tmpvar_42.zw);\n' + '    xlat_mutabledist = (min (nb_15.x, nb_15.y) + ((0.008 * tmpvar_11.x) * abs(tmpvar_11.y)));\n' + '  };\n' + '   vec2 tmp_43;\n' + '   vec4 tmpvar_44;\n' + '  tmpvar_44 = texture2D (sampler_pc_main, uv_3);\n' + '  tmp_43 = tmpvar_44.yz;\n' + '   float tmpvar_45;\n' + '  tmpvar_45 = min (xlat_mutabledist, (1.0 - (\n' + '    (tmp_43.y + (0.003921569 * tmp_43.x))\n' + '   + \n' + '    (_qc.y * 0.7)\n' + '  )));\n' + '  xlat_mutabledist = tmpvar_45;\n' + '   float tmpvar_46;\n' + '  tmpvar_46 = (tmpvar_45 + pow (tmpvar_45, 3.0));\n' + '   vec3 tmpvar_47;\n' + '  tmpvar_47.xy = (xlat_mutableuv1 * tmpvar_46);\n' + '  tmpvar_47.z = tmpvar_46;\n' + '  xlat_mutableuv2 = (((tmpvar_47 / _qb.z) * tmpvar_1) + tmpvar_2);\n' + '  xlat_mutableuv2 = ((fract(\n' + '    ((xlat_mutableuv2 / 8.0) + 0.5)\n' + '  ) - 0.5) * 8.0);\n' + '   float li_48;\n' + '   vec3 zz0_49;\n' + '   vec3 zz_50;\n' + '  zz0_49 = (xlat_mutableuv2 + _qb.w);\n' + '  li_48 = 0.0;\n' + '  zz_50 = ((2.0 * clamp (xlat_mutableuv2, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - xlat_mutableuv2);\n' + '   float tmpvar_51;\n' + '  tmpvar_51 = dot (zz_50, zz_50);\n' + '  if ((tmpvar_51 <= 0.25)) {\n' + '    zz_50 = (zz_50 * 4.0);\n' + '    li_48 = 24.0;\n' + '  } else {\n' + '    if ((tmpvar_51 <= 1.0)) {\n' + '      zz_50 = (zz_50 / tmpvar_51);\n' + '    };\n' + '  };\n' + '  zz_50 = ((2.6 * zz_50) + zz0_49);\n' + '  zz_50 = ((2.0 * clamp (zz_50, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_50);\n' + '   float tmpvar_52;\n' + '  tmpvar_52 = dot (zz_50, zz_50);\n' + '  if ((tmpvar_52 <= 0.25)) {\n' + '    zz_50 = (zz_50 * 4.0);\n' + '    li_48 = 24.0;\n' + '  } else {\n' + '    if ((tmpvar_52 <= 1.0)) {\n' + '      zz_50 = (zz_50 / tmpvar_52);\n' + '    };\n' + '  };\n' + '  zz_50 = ((2.6 * zz_50) + zz0_49);\n' + '  zz_50 = ((2.0 * clamp (zz_50, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_50);\n' + '   float tmpvar_53;\n' + '  tmpvar_53 = dot (zz_50, zz_50);\n' + '  if ((tmpvar_53 <= 0.25)) {\n' + '    zz_50 = (zz_50 * 4.0);\n' + '    li_48 = 24.0;\n' + '  } else {\n' + '    if ((tmpvar_53 <= 1.0)) {\n' + '      zz_50 = (zz_50 / tmpvar_53);\n' + '    };\n' + '  };\n' + '  zz_50 = ((2.6 * zz_50) + zz0_49);\n' + '  zz_50 = ((2.0 * clamp (zz_50, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_50);\n' + '   float tmpvar_54;\n' + '  tmpvar_54 = dot (zz_50, zz_50);\n' + '  if ((tmpvar_54 <= 0.25)) {\n' + '    zz_50 = (zz_50 * 4.0);\n' + '    li_48 = 24.0;\n' + '  } else {\n' + '    if ((tmpvar_54 <= 1.0)) {\n' + '      zz_50 = (zz_50 / tmpvar_54);\n' + '    };\n' + '  };\n' + '  zz_50 = ((2.6 * zz_50) + zz0_49);\n' + '  zz_50 = ((2.0 * clamp (zz_50, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_50);\n' + '   float tmpvar_55;\n' + '  tmpvar_55 = dot (zz_50, zz_50);\n' + '  if ((tmpvar_55 <= 0.25)) {\n' + '    zz_50 = (zz_50 * 4.0);\n' + '    li_48 = 24.0;\n' + '  } else {\n' + '    if ((tmpvar_55 <= 1.0)) {\n' + '      zz_50 = (zz_50 / tmpvar_55);\n' + '    };\n' + '  };\n' + '  zz_50 = ((2.6 * zz_50) + zz0_49);\n' + '  zz_50 = ((2.0 * clamp (zz_50, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_50);\n' + '   float tmpvar_56;\n' + '  tmpvar_56 = dot (zz_50, zz_50);\n' + '  if ((tmpvar_56 <= 0.25)) {\n' + '    zz_50 = (zz_50 * 4.0);\n' + '    li_48 = 24.0;\n' + '  } else {\n' + '    if ((tmpvar_56 <= 1.0)) {\n' + '      zz_50 = (zz_50 / tmpvar_56);\n' + '    };\n' + '  };\n' + '  zz_50 = ((2.6 * zz_50) + zz0_49);\n' + '  zz_50 = ((2.0 * clamp (zz_50, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_50);\n' + '   float tmpvar_57;\n' + '  tmpvar_57 = dot (zz_50, zz_50);\n' + '  if ((tmpvar_57 <= 0.25)) {\n' + '    zz_50 = (zz_50 * 4.0);\n' + '    li_48 = 24.0;\n' + '  } else {\n' + '    if ((tmpvar_57 <= 1.0)) {\n' + '      zz_50 = (zz_50 / tmpvar_57);\n' + '    };\n' + '  };\n' + '  zz_50 = ((2.6 * zz_50) + zz0_49);\n' + '  zz_50 = ((2.0 * clamp (zz_50, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_50);\n' + '   float tmpvar_58;\n' + '  tmpvar_58 = dot (zz_50, zz_50);\n' + '  if ((tmpvar_58 <= 0.25)) {\n' + '    zz_50 = (zz_50 * 4.0);\n' + '    li_48 = 24.0;\n' + '  } else {\n' + '    if ((tmpvar_58 <= 1.0)) {\n' + '      zz_50 = (zz_50 / tmpvar_58);\n' + '    };\n' + '  };\n' + '  zz_50 = ((2.6 * zz_50) + zz0_49);\n' + '   vec4 tmpvar_59;\n' + '  tmpvar_59.xyz = zz_50;\n' + '  tmpvar_59.w = li_48;\n' + '   float tmpvar_60;\n' + '  tmpvar_60 = sqrt(dot (zz_50, zz_50));\n' + '  xlat_mutablestruc = (sqrt(dot (tmpvar_59.xyw, tmpvar_59.xyw)) / 24.0);\n' + '   vec2 tmp_61;\n' + '   vec4 tmpvar_62;\n' + '  tmpvar_62 = texture2D (sampler_pc_main, uv_3);\n' + '  tmp_61 = tmpvar_62.yz;\n' + '   float tmpvar_63;\n' + '   float tmpvar_64;\n' + '  tmpvar_64 = (_qc.y * 0.7);\n' + '  tmpvar_63 = ((log(\n' + '    (1.0 + (tmpvar_60 / 24.0))\n' + '  ) * 0.02) * (1.0 - (1.0 - \n' + '    ((tmp_61.y + (0.003921569 * tmp_61.x)) + tmpvar_64)\n' + '  )));\n' + '   float tmpvar_65;\n' + '   vec2 tmp_66;\n' + '   vec4 tmpvar_67;\n' + '  tmpvar_67 = texture2D (sampler_pc_main, uv_3);\n' + '  tmp_66 = tmpvar_67.yz;\n' + '  tmpvar_65 = (1.0 - ((tmp_66.y + \n' + '    (0.003921569 * tmp_66.x)\n' + '  ) + tmpvar_64));\n' + '  if ((((tmpvar_45 <= tmpvar_65) && (tmpvar_60 < 24.0)) && (tmpvar_45 > 0.005))) {\n' + '     vec4 tmpvar_68;\n' + '    tmpvar_68 = texture2D (sampler_main, uv_3);\n' + '     vec4 tmpvar_69;\n' + '    tmpvar_69 = texture2D (sampler_blur1, uv_3);\n' + '    ret_5.x = (((1.0 - sustain) * xlat_mutablestruc) + (sustain * mix (tmpvar_68.xyz, \n' + '      ((tmpvar_69.xyz * scale1) + bias1)\n' + '    , vec3(\n' + '      (_qd.y * 4.0)\n' + '    )).x));\n' + '     float x_70;\n' + '    x_70 = ((1.0 - tmpvar_45) * 255.0);\n' + '     float ip_71;\n' + '    ip_71 = float(int(x_70));\n' + '     vec2 tmpvar_72;\n' + '    tmpvar_72.x = (x_70 - ip_71);\n' + '    tmpvar_72.y = (ip_71 / 255.0);\n' + '    ret_5.yz = tmpvar_72;\n' + '  } else {\n' + '     vec4 tmpvar_73;\n' + '    tmpvar_73 = texture2D (sampler_fc_main, uv_3);\n' + '     vec3 tmpvar_74;\n' + '    tmpvar_74.y = 0.0;\n' + '    tmpvar_74.x = sustain;\n' + '    tmpvar_74.z = (1.0 - tmpvar_63);\n' + '     vec3 tmpvar_75;\n' + '    tmpvar_75.xy = vec2(0.003921569, 0.0);\n' + '    tmpvar_75.z = (_qd.y / 6.0);\n' + '    ret_5 = ((tmpvar_73.xyz * tmpvar_74) - tmpvar_75);\n' + '  };\n' + '   vec4 tmpvar_76;\n' + '  tmpvar_76.w = 1.0;\n' + '  tmpvar_76.xyz = ret_5;\n' + '  vec4 ret4 = tmpvar_76;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 dz_1;\n' + '   vec3 dy_2;\n' + '   vec3 dx_3;\n' + '   vec2 d_4;\n' + '   vec3 ret_5;\n' + '   vec2 P_6;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (vec2(1.0, 0.0) * texsize.zw);\n' + '  P_6 = (uv + tmpvar_7);\n' + '   vec2 P_8;\n' + '  P_8 = (uv - tmpvar_7);\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = (texture2D (sampler_main, P_6).xyz - texture2D (sampler_main, P_8).xyz);\n' + '  dx_3 = tmpvar_9;\n' + '   vec2 P_10;\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = (vec2(0.0, 1.0) * texsize.zw);\n' + '  P_10 = (uv + tmpvar_11);\n' + '   vec2 P_12;\n' + '  P_12 = (uv - tmpvar_11);\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = (texture2D (sampler_main, P_10).xyz - texture2D (sampler_main, P_12).xyz);\n' + '  dy_2 = tmpvar_13;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = dx_3.y;\n' + '  tmpvar_14.y = dy_2.y;\n' + '  d_4 = (texsize.zw * 2.0);\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (uv + (vec2(1.0, 0.0) * d_4));\n' + '  tmpvar_15 = texture2D (sampler_blur1, P_16);\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv - (vec2(1.0, 0.0) * d_4));\n' + '  tmpvar_17 = texture2D (sampler_blur1, P_18);\n' + '  dx_3 = (((tmpvar_15.xyz * scale1) + bias1) - ((tmpvar_17.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_19;\n' + '   vec2 P_20;\n' + '  P_20 = (uv + (vec2(0.0, 1.0) * d_4));\n' + '  tmpvar_19 = texture2D (sampler_blur1, P_20);\n' + '   vec4 tmpvar_21;\n' + '   vec2 P_22;\n' + '  P_22 = (uv - (vec2(0.0, 1.0) * d_4));\n' + '  tmpvar_21 = texture2D (sampler_blur1, P_22);\n' + '  dy_2 = (((tmpvar_19.xyz * scale1) + bias1) - ((tmpvar_21.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_23;\n' + '  tmpvar_23.x = dx_3.y;\n' + '  tmpvar_23.y = dy_2.y;\n' + '  dz_1 = ((tmpvar_14 * 3.0) + tmpvar_23);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_blur2, uv);\n' + '  ret_5 = (vec3(((\n' + '    pow ((sqrt(dot (dz_1, dz_1)) * 0.8), 0.7)\n' + '   + \n' + '    (((tmpvar_24.xyz * scale2) + bias2).y * 0.4)\n' + '  ) - 0.1)) * vec3(0.3, 0.5, 0.7));\n' + '   vec2 tmpvar_25;\n' + '  tmpvar_25.x = dx_3.x;\n' + '  tmpvar_25.y = dy_2.x;\n' + '   vec2 P_26;\n' + '  P_26 = (uv + ((tmpvar_25 * texsize.zw) * 18.0));\n' + '   vec3 tmpvar_27;\n' + '  tmpvar_27 = vec3((texture2D (sampler_main, P_26).x * 6.0));\n' + '   vec3 tmpvar_28;\n' + '  tmpvar_28 = texture2D (sampler_main, uv).zzz;\n' + '   vec3 tmpvar_29;\n' + '  tmpvar_29 = mix (mix (ret_5, vec3(0.2, 0.1, 0.0), tmpvar_27), vec3(1.0, 1.0, 1.0), tmpvar_28);\n' + '  ret_5 = tmpvar_29;\n' + '   vec4 tmpvar_30;\n' + '  tmpvar_30.w = 1.0;\n' + '  tmpvar_30.xyz = tmpvar_29;\n' + '  vec4 ret4 = tmpvar_30;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'wave_a = 0;\n' + 'xx1 = xx1*0.9 + (bass)*0.01;\n' + 'xx2 = xx2*0.9 + (treb)*0.01;\n' + 'yy1 = yy1*0.94 + (treb+bass)*0.0075;\n' + 'x1 = 0.5 + (xx1-xx2)*2;\n' + 'y1 = 0.4 + yy1*1.5;\n' + 'dt = 0.03/fps;\n' + 'vx2 = vx2*(1-2*dt) + dt*((x1+x3-2*x2)*10);\n' + 'vy2 = vy2*(1-2*dt) + dt*((y1+y3-2*y2)*10-0.5);\n' + 'vx3 = vx3*(1-2*dt) + dt*((x2+x4-2*x3)*10);\n' + 'vy3 = vy3*(1-2*dt) + dt*((y2+y4-2*y3)*10-0.5);\n' + 'vx4 = vx4*(1-2*dt) + dt*((x3-x4)*10);\n' + 'vy4 = vy4*(1-2*dt) + dt*((y3-y4)*10-0.5);\n' + 'x2 = x2 + vx2;\n' + ' y2 = y2 + vy2;\n' + 'x3 = x3 + vx3;\n' + ' y3 = y3 + vy3;\n' + 'x4 = x4 + vx4;\n' + ' y4 = y4 + vy4;\n' + 'vx2 = if(above(x2,0),vx2,abs(vx2)*0.5);\n' + 'vx2 = if(below(x2,1),vx2,-abs(vx2)*0.5);\n' + 'vx3 = if(above(x3,0),vx3,abs(vx3)*0.5);\n' + 'vx3 = if(below(x3,1),vx3,-abs(vx3)*0.5);\n' + 'vx4 = if(above(x4,0),vx4,abs(vx4)*0.5);\n' + 'vx4 = if(below(x4,1),vx4,-abs(vx4)*0.5);\n' + 'vy2 = if(above(y2,0),vy2,abs(vy2)*0.5);\n' + 'vy2 = if(below(y2,1),vy2,-abs(vy2)*0.5);\n' + 'vy3 = if(above(y3,0),vy3,abs(vy3)*0.5);\n' + 'vy3 = if(below(y3,1),vy3,-abs(vy3)*0.5);\n' + 'vy4 = if(above(y4,0),vy4,abs(vy4)*0.5);\n' + 'vy4 = if(below(y4,1),vy4,-abs(vy4)*0.5);\n' + 'q1 = x1;\n' + 'q2 = x2;\n' + 'q3 = x3;\n' + 'q4 = x4;\n' + 'q5 = y1;\n' + 'q6 = y2;\n' + 'q7 = y3;\n' + 'q8 = y4;\n' + 'q9 = 1/aspectx;\n' + 'q10 = 1/aspecty;\n' + 'q11 = aspectx;\n' + 'q12 = aspecty;\n' + 'q13 = sqrt(vx4*vx4 + vy4*vy4);\n' + 'q14 = atan2(vx4,vy4);\n' + 'q15 = sin(q14);\n' + 'q16 = cos(q14);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
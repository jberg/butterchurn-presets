define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.7,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 100.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.01,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.92178,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.04,
		zoom : 0.9901,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.25,
		invert : 1.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.44,
		decay : 1.0,
		wave_a : 0.004,
		ob_g : 1.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
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
m.grav = 0;
m.tt = 0;
m.xx = 0;
m.yy = 0;
m.a = 0;
m.mn = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.m1 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.bounce = 0;
m.resist = 0;
m.mx = 0;
m.d1 = 0;
m.m = 0;
m.dir = 0;
m.spring = 0;
m.d2 = 0;
m.n = 0;
m.b1 = 0;
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
m.r = 0;
m.xx2 = 0;
m.vx4 = 0;
m.q12 = 0;
m.q13 = 0;
m.t = 0;
m.q14 = 0;
m.v = 0;
m.w = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.w1 = 0;
m.x2 = 0;
m.y3 = 0;
m.si1 = 0;
m.w2 = 0;
m.x3 = 0;
m.y4 = 0;
m.si2 = 0;
m.dy1 = 0;
m.v2 = 0;
m.w3 = 0;
m.x4 = 0;
m.si3 = 0;
m.dx1 = 0;
m.dy2 = 0;
m.t1 = 0;
m.w4 = 0;
m.dx2 = 0;
m.w5 = 0;
m.w6 = 0;
m.x1 = 0.9;
m.y1 = 0.5;
m.x2 = 0.5;
m.y2 = 0.5;
m.x3 = 0.5;
m.y3 = 0.5;
m.x4 = 0.5;
m.y4 = 0.5;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 1;
m.xx1 = ((m.xx1*0.9)+(m.bass*0.01));
m.xx2 = ((m.xx2*0.9)+(m.treb*0.01));
m.yy1 = ((m.yy1*0.94)+((m.treb+m.bass)*0.0075));
m.x1 = (0.5+(m.xx1-m.xx2));
m.y1 = (0.85+(m.yy1*0.3));
m.spring = 100;
m.grav = 11;
m.resist = 0.2;
m.bounce = 0.8;
m.dt = 0.0001;
m.vx2 = ((m.vx2*(1-(m.resist*m.dt)))+(m.dt*(((m.x1+m.x3)-(2*m.x2))*m.spring)));
m.vy2 = ((m.vy2*(1-(m.resist*m.dt)))+(m.dt*((((m.y1+m.y3)-(2*m.y2))*m.spring)-m.grav)));
m.vx3 = ((m.vx3*(1-(m.resist*m.dt)))+(m.dt*(((m.x2+m.x4)-(2*m.x3))*m.spring)));
m.vy3 = ((m.vy3*(1-(m.resist*m.dt)))+(m.dt*((((m.y2+m.y4)-(2*m.y3))*m.spring)-m.grav)));
m.vx4 = ((m.vx4*(1-(m.resist*m.dt)))+(m.dt*((m.x3-m.x4)*m.spring)));
m.vy4 = ((m.vy4*(1-(m.resist*m.dt)))+(m.dt*(((m.y3-m.y4)*m.spring)-m.grav)));
m.x2 = (m.x2+m.vx2);
m.y2 = (m.y2+m.vy2);
m.x3 = (m.x3+m.vx3);
m.y3 = (m.y3+m.vy3);
m.x4 = (m.x4+m.vx4);
m.y4 = (m.y4+m.vy4);
m.vx2 = ifcond(above(m.x2, 0), m.vx2, (Math.abs(m.vx2)*m.bounce));
m.vx2 = ifcond(below(m.x2, 1), m.vx2, (-Math.abs(m.vx2)*m.bounce));
m.vx3 = ifcond(above(m.x3, 0), m.vx3, (Math.abs(m.vx3)*m.bounce));
m.vx3 = ifcond(below(m.x3, 1), m.vx3, (-Math.abs(m.vx3)*m.bounce));
m.vx4 = ifcond(above(m.x4, 0), m.vx4, (Math.abs(m.vx4)*m.bounce));
m.vx4 = ifcond(below(m.x4, 1), m.vx4, (-Math.abs(m.vx4)*m.bounce));
m.vy2 = ifcond(above(m.y2, 0), m.vy2, (Math.abs(m.vy2)*m.bounce));
m.vy2 = ifcond(below(m.y2, 1), m.vy2, (-Math.abs(m.vy2)*m.bounce));
m.vy3 = ifcond(above(m.y3, 0), m.vy3, (Math.abs(m.vy3)*m.bounce));
m.vy3 = ifcond(below(m.y3, 1), m.vy3, (-Math.abs(m.vy3)*m.bounce));
m.vy4 = ifcond(above(m.y4, 0), m.vy4, (Math.abs(m.vy4)*m.bounce));
m.vy4 = ifcond(below(m.y4, 1), m.vy4, (-Math.abs(m.vy4)*m.bounce));
m.q3 = m.x4;
m.q4 = m.x2;
m.q7 = m.y4;
m.q8 = m.y2;
m.q9 = m.x1;
m.q10 = m.y1;
m.q11 = m.x3;
m.q12 = m.y3;
m.zoom = 1;
m.bb = ((m.bb*0.99)+(m.bass*0.02));
m.mm = ((m.mm*0.99)+(m.mid*0.02));
m.tt = ((m.tt*0.99)+(m.treb*0.02));
m.mx = Math.max(Math.max(m.bb, m.mm), m.tt);
m.mn = Math.min(Math.min(m.bb, m.mm), m.tt);
m.ob_r = div((m.bb-m.mn),(m.mx-m.mn));
m.ob_b = div((m.mm-m.mn),(m.mx-m.mn));
m.ob_g = div((m.tt-m.mn),(m.mx-m.mn));
m.q2 = Math.atan2(m.vx4, m.vy4);
m.q13 = Math.atan2(m.vx3, m.vy3);
m.q1 = sqrt(((m.vx4*m.vx4)+(m.vy4*m.vy4)));
m.q14 = sqrt(((m.vx3*m.vx3)+(m.vy3*m.vy3)));
m.q6 = Math.atan2(m.vx2, m.vy2);
m.q5 = sqrt(((m.vx2*m.vx2)+(m.vy2*m.vy2)));
m.a = ((m.a*0.95)+m.q5);
m.monitor = m.q7;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.w1 = m.q9;
m.w2 = m.q10;
m.w3 = m.q11;
m.w4 = m.q12;
m.w5 = m.q13;
m.w6 = m.q14;
m.dir = ((-m.q6*1)+(Math.asin(1)*1));
m.b1 = 0.075;
m.m1 = (m.q5*50);
m.t1 = 0.1;
m.xx = m.q4;
m.yy = (1-m.q8);
m.x1 = (m.xx+(Math.cos((m.dir+1.5708))*m.b1));
m.y1 = (m.yy-(Math.sin((m.dir+1.5708))*m.b1));
m.x2 = (m.xx-(Math.cos((m.dir+1.5708))*m.b1));
m.y2 = (m.yy+(Math.sin((m.dir+1.5708))*m.b1));
m.d1 = (sqrt((((m.x1-m.x)*(m.x1-m.x))+((m.y1-m.y)*(m.y1-m.y))))-(m.b1*2));
m.si1 = (1-div(1,(1+pow(2, (-m.d1*100)))));
m.d2 = (sqrt((((m.x2-m.x)*(m.x2-m.x))+((m.y2-m.y)*(m.y2-m.y))))-(m.b1*2));
m.si2 = (1-div(1,(1+pow(2, (-m.d2*100)))));
m.si3 = (-pow(m.q5, 3)*10);
m.dx = ((((((m.si1*Math.sin((m.y1-m.y)))*m.m1)*m.d1)-(((m.si2*Math.sin((m.y2-m.y)))*m.m1)*m.d2))+((m.si3*Math.cos(m.dir))*m.t1))*2);
m.dy = ((((((-m.si1*Math.sin((m.x1-m.x)))*m.m1)*m.d1)+(((m.si2*Math.sin((m.x2-m.x)))*m.m1)*m.d2))-((m.si3*Math.sin(m.dir))*m.t1))*2);
m.m = ((1-m.si1)-m.si2);
m.dir = ((-m.q2*1)+(Math.asin(1)*0));
m.xx = m.q3;
m.yy = (1-m.q7);
m.d = sqrt((((m.x-m.xx)*(m.x-m.xx))+((m.y-m.yy)*(m.y-m.yy))));
m.r = 0.05;
m.v = (-35*m.q1);
m.dx = (m.dx+(((m.v*Math.sin(m.dir))*(m.r-m.d))*(1-sigmoid((m.d-m.r), 280))));
m.dy = (m.dy+(((m.v*Math.cos(m.dir))*(m.r-m.d))*(1-sigmoid((m.d-m.r), 280))));
m.xx = m.w1;
m.yy = (1-m.w2);
m.d = sqrt((((m.x-m.xx)*(m.x-m.xx))+((m.y-m.yy)*(m.y-m.yy))));
m.r = 0.1;
m.v = -35;
m.dx = (m.dx+(((m.v*(m.x-m.xx))*(m.r-m.d))*(1-sigmoid((m.d-m.r), 70))));
m.dy = (m.dy+(((m.v*(m.y-m.yy))*(m.r-m.d))*(1-sigmoid((m.d-m.r), 70))));
m.xx = m.w3;
m.yy = (1-m.w4);
m.dir = m.w5;
m.d = sqrt((((m.x-m.xx)*(m.x-m.xx))+((m.y-m.yy)*(m.y-m.yy))));
m.r = 0.1;
m.v = 20;
m.v2 = m.w6;
m.dx = (m.dx+(((m.v*((Math.sin((m.y-m.yy))*(m.d-m.r))-((m.x-m.xx)*(m.d-div(m.r,2)))))+(Math.cos(m.dir)*m.v2))*(1.00-sigmoid((m.d-m.r), 180))));
m.dy = (m.dy+(((-m.v*((Math.sin((m.x-m.xx))*(m.d-m.r))+((m.y-m.yy)*(m.d-div(m.r,2)))))-(Math.sin(m.dir)*m.v2))*(1.00-sigmoid((m.d-m.r), 180))));
m.d = (sqrt((((m.x-0.5)*(m.x-0.5))+((m.y-0.5)*(m.y-0.5))))*m.rad);
m.n = 80;
m.t = (((m.q3*3)*0)+(m.time*0));
m.w = (-m.q6+div(Math.asin(1),2));
m.v = (0.1*m.q3);
m.x2 = (m.x-0.5);
m.y2 = (m.y-0.5);
m.x1 = ((Math.sin(m.w)*m.x2)-(Math.cos(m.w)*m.y2));
m.y1 = ((Math.cos(m.w)*m.x2)+(Math.sin(m.w)*m.y2));
m.x = m.x1;
m.y = m.y1;
m.dx1 = (0.01*(Math.cos((((-m.x+m.y)*m.n)+m.t))+Math.sin((((m.x+m.y)*m.n)+m.t))));
m.dy1 = (0.01*(Math.cos((((m.x-m.y)*m.n)-m.t))+Math.sin((((-m.x-m.y)*m.n)-m.t))));
m.dx2 = ((Math.sin(-m.w)*m.dx1)-(Math.cos(-m.w)*m.dy1));
m.dy2 = ((Math.cos(-m.w)*m.dx1)+(Math.sin(-m.w)*m.dy1));
		return m;
	},
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
m.y = (m.sample*0.05);
m.x = (0.5+(m.t8*0.005));
m.pi3 = ((3.1415*2)*0.3333);
m.t = ((m.q4-m.q6)*10);
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
		'point_eqs_str' : ('t8 = -t8;\n' + 'y = sample*0.05;\n' + 'x = 0.5 + t8*0.005;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = (q4-q6)*10;\n' + 'c=2;\n' + 'r = sin(t)*c;\n' + 'g = sin(t+pi3)*c;\n' + 'b = sin(t-pi3)*c;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);'),

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
			r2 : 1.0,
			a : 0.96,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.12566,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.51878,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.02339,
			x : 0.77,
			y : 0.79,
			ang : 4.27256,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.q7 = 0;
m.vx = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q3;
m.y = m.q7;
		return m;
	},
		'init_eqs_str' : ('vx = 0;'),
		'frame_eqs_str' : ('x = q3;\n' + 'y = q7;'),

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
			rad : 0.04208,
			x : 0.5,
			y : 0.75,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.q7 = 0;
m.vx = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q3;
m.y = m.q7;
		return m;
	},
		'init_eqs_str' : ('vx = 0;'),
		'frame_eqs_str' : ('x = q3;\n' + 'y = q7;'),

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
			rad : 0.04208,
			x : 0.5,
			y : 0.75,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.q6 = 0;
m.vx = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q2;
m.y = m.q6;
		return m;
	},
		'init_eqs_str' : ('vx = 0;'),
		'frame_eqs_str' : ('x = q2;\n' + 'y = q6;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_fc_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   float ang2_2;\n' + '  ang2_2 = (fract((0.9549295 * ang)) / 6.0);\n' + '  ang2_2 = (abs((ang2_2 - 0.08333334)) * 6.283185);\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3.x = cos(ang2_2);\n' + '  tmpvar_3.y = sin(ang2_2);\n' + '  uv_1 = (0.5 + ((\n' + '    (0.4 * (rad * sqrt(dot (texsize.xy, texsize.xy))))\n' + '   * tmpvar_3) * texsize.zw));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv_1);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_pc_main, uv_1);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur3, uv_1);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = (1.4 * pow ((\n' + '    clamp (((tmpvar_4.xyz * scale1) + bias1), 0.0, 1.0)\n' + '   * \n' + '    (tmpvar_5.xyz - ((tmpvar_6.xyz * scale3) + bias3))\n' + '  ), vec3(0.5, 0.5, 0.5)));\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0.9;\n' + 'y1 = 0.5;\n' + 'x2 = 0.5;\n' + ' y2 = 0.5;\n' + 'x3 = 0.5;\n' + ' y3 = 0.5;\n' + 'x4 = 0.5;\n' + ' y4 = 0.5;'),
	'frame_eqs_str' : ('decay = 1;\n' + 'xx1 = xx1*0.9 + (bass)*0.01;\n' + 'xx2 = xx2*0.9 + (treb)*0.01;\n' + 'yy1 = yy1*0.94 + (treb+bass)*0.0075;\n' + 'x1 = 0.5 + (xx1-xx2);\n' + 'y1 = 0.85 + yy1*.3;\n' + 'spring = 100;\n' + 'grav = 11;\n' + 'resist = 0.2;\n' + 'bounce = 0.8;\n' + 'dt = 0.0001;\n' + 'vx2 = vx2*(1-resist*dt) + dt*((x1+x3-2*x2)*spring);\n' + 'vy2 = vy2*(1-resist*dt) + dt*((y1+y3-2*y2)*spring-grav);\n' + 'vx3 = vx3*(1-resist*dt) + dt*((x2+x4-2*x3)*spring);\n' + 'vy3 = vy3*(1-resist*dt) + dt*((y2+y4-2*y3)*spring-grav);\n' + 'vx4 = vx4*(1-resist*dt) + dt*((x3-x4)*spring);\n' + 'vy4 = vy4*(1-resist*dt) + dt*((y3-y4)*spring-grav);\n' + 'x2 = x2 + vx2;\n' + 'y2 = y2 + vy2;\n' + 'x3 = x3 + vx3;\n' + 'y3 = y3 + vy3;\n' + 'x4 = x4 + vx4;\n' + 'y4 = y4 + vy4;\n' + 'vx2 = if(above(x2,0),vx2,abs(vx2)*bounce);\n' + 'vx2 = if(below(x2,1),vx2,-abs(vx2)*bounce);\n' + 'vx3 = if(above(x3,0),vx3,abs(vx3)*bounce);\n' + 'vx3 = if(below(x3,1),vx3,-abs(vx3)*bounce);\n' + 'vx4 = if(above(x4,0),vx4,abs(vx4)*bounce);\n' + 'vx4 = if(below(x4,1),vx4,-abs(vx4)*bounce);\n' + 'vy2 = if(above(y2,0),vy2,abs(vy2)*bounce);\n' + 'vy2 = if(below(y2,1),vy2,-abs(vy2)*bounce);\n' + 'vy3 = if(above(y3,0),vy3,abs(vy3)*bounce);\n' + 'vy3 = if(below(y3,1),vy3,-abs(vy3)*bounce);\n' + 'vy4 = if(above(y4,0),vy4,abs(vy4)*bounce);\n' + 'vy4 = if(below(y4,1),vy4,-abs(vy4)*bounce);\n' + 'q3 = x4;\n' + 'q4 = x2;\n' + 'q7 = y4;\n' + 'q8 = y2;\n' + 'q9 = x1;\n' + 'q10 = y1;\n' + 'q11 = x3;\n' + 'q12 = y3;\n' + 'zoom = 1;\n' + 'bb = bb*0.99 + bass*0.02;\n' + 'mm = mm*0.99 + mid*0.02;\n' + 'tt = tt*0.99 + treb*0.02;\n' + 'mx = max(max(bb,mm),tt);\n' + 'mn = min(min(bb,mm),tt);\n' + 'ob_r = (bb-mn)/(mx-mn);\n' + 'ob_b = (mm-mn)/(mx-mn);\n' + 'ob_g = (tt-mn)/(mx-mn);\n' + 'q2 = atan2(vx4,vy4);\n' + 'q13 = atan2(vx3,vy3);\n' + 'q1 = sqrt(vx4*vx4 + vy4*vy4);\n' + 'q14 = sqrt(vx3*vx3 + vy3*vy3);\n' + 'q6 = atan2(vx2,vy2);\n' + 'q5 = sqrt(vx2*vx2 + vy2*vy2);\n' + 'a = a*0.95 + q5;\n' + 'monitor = q7;'),
	'pixel_eqs_str' : ('w1 = q9;\n' + 'w2 = q10;\n' + 'w3 = q11;\n' + 'w4 = q12;\n' + 'w5 = q13;\n' + 'w6 = q14;\n' + 'dir = -q6*1 + asin(1)*1;\n' + 'b1 = 0.075;\n' + 'm1 = q5*50;\n' + 't1 = 0.1;\n' + 'xx = q4;\n' + 'yy = 1-q8;\n' + 'x1 = xx   +cos(dir+1.5708)*b1;\n' + 'y1 = yy -sin(dir+1.5708)*b1;\n' + 'x2 = xx   -cos(dir+1.5708)*b1;\n' + 'y2 = yy +sin(dir+1.5708)*b1;\n' + 'd1 = sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y))-b1*2;\n' + 'si1 = 1- 1/(1+pow(2,-d1*100));\n' + 'd2 = sqrt((x2-x)*(x2-x)+(y2-y)*(y2-y))-b1*2;\n' + 'si2 = 1- 1/(1+pow(2,-d2*100));\n' + 'si3 = -pow(q5,3)*10;\n' + 'dx = (si1*sin(y1-y)*m1*d1  - si2*sin(y2-y)*m1*d2 + si3*cos(dir)*t1)*2;\n' + 'dy = (-si1*sin(x1-x)*m1*d1 + si2*sin(x2-x)*m1*d2 - si3*sin(dir)*t1)*2;\n' + 'm = 1- si1 - si2;\n' + 'dir = -q2*1 + asin(1)*0;\n' + 'xx = q3;\n' + 'yy = 1-q7;\n' + 'd = sqrt((x-xx)*(x-xx)+(y-yy)*(y-yy));\n' + 'r = 0.05;\n' + 'v = -35*q1;\n' + 'dx = dx + v*sin(dir)*(r-d)*(1-sigmoid(d-r,280));\n' + 'dy = dy + v*cos(dir)*(r-d)*(1-sigmoid(d-r,280));\n' + 'xx = w1;\n' + 'yy = 1-w2;\n' + 'd = sqrt((x-xx)*(x-xx)+(y-yy)*(y-yy));\n' + 'r = 0.1;\n' + 'v = -35;\n' + 'dx = dx + v*(x-xx)*(r-d)*(1-sigmoid(d-r,70));\n' + 'dy = dy + v*(y-yy)*(r-d)*(1-sigmoid(d-r,70));\n' + 'xx = w3;\n' + 'yy = 1- w4;\n' + 'dir = w5;\n' + 'd = sqrt((x-xx)*(x-xx)+(y-yy)*(y-yy));\n' + 'r = 0.1;\n' + 'v = 20;\n' + 'v2 = w6;\n' + 'dx = dx + (v*(sin(y-yy)*(d-r)-(x-xx)*(d-r/2)) + cos(dir)*v2)*(1.00-sigmoid(d-r,180));\n' + 'dy = dy + (-v*(sin(x-xx)*(d-r)+(y-yy)*(d-r/2)) -sin(dir)*v2)*(1.00-sigmoid(d-r,180));\n' + 'd = sqrt((x-0.5)*(x-0.5)+(y-0.5)*(y-0.5))*rad;\n' + 'n=80;\n' + 't = q3*3*0 +time*0;\n' + 'w= -q6 + asin(1)/2;\n' + 'v = 0.1*q3;\n' + 'X2 = x-0.5;\n' + 'Y2 = y-0.5;\n' + 'X1 = sin(w)*X2 -cos(w)*Y2;\n' + 'Y1 = cos(w)*X2 +sin(w)*Y2;\n' + 'x = X1;\n' + 'y = Y1;\n' + 'dx1 = 0.01*(cos((-x+y)*n+t) + sin((x+y)*n+t));\n' + 'dy1 = 0.01*(cos((x-y)*n-t) + sin((-x-y)*n-t));\n' + 'dx2 = sin(-w)*dx1 - cos(-w)*dy1;\n' + 'dy2 = cos(-w)*dx1 + sin(-w)*dy1;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.698,
		mv_x : 64.0,
		warpscale : 51.512,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.113,
		echo_alpha : 0.047,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.301,
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
		zoomexp : 1.73596,
		mv_dx : -0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.054,
		wave_r : 1.0,
		ib_r : 0.622,
		mv_b : 0.347,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.107,
		wave_smoothing : 0.0,
		warpanimspeed : 0.778,
		wave_dots : 0.0,
		mv_g : 0.675,
		wave_x : 0.597,
		wave_y : 0.819,
		zoom : 1.00059,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.266,
		mv_l : 0.486,
		invert : 0.0,
		rot : 0.00438,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.214,
		decay : 0.959,
		wave_a : 0.005,
		ob_g : 0.111,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.831,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 0.0,
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
m.peakbass_att = 0;
m.mn = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.nbeat = 0;
m.m1 = 0;
m.nr = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.nv = 0;
m.q9 = 0;
m.bounce = 0;
m.nx = 0;
m.resist = 0;
m.mx = 0;
m.ny = 0;
m.lastbeat = 0;
m.d1 = 0;
m.dir = 0;
m.spring = 0;
m.nyy = 0;
m.d2 = 0;
m.nxx = 0;
m.b1 = 0;
m.vy2 = 0;
m.dt = 0;
m.vx2 = 0;
m.vy3 = 0;
m.q10 = 0;
m.xx1 = 0;
m.vx3 = 0;
m.vy4 = 0;
m.r = 0;
m.xx2 = 0;
m.q12 = 0;
m.q13 = 0;
m.q14 = 0;
m.beatrate = 0;
m.nd = 0;
m.beat = 0;
m.spy4 = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.w1 = 0;
m.x2 = 0;
m.y3 = 0;
m.volume = 0;
m.si1 = 0;
m.w2 = 0;
m.x3 = 0;
m.y4 = 0;
m.si2 = 0;
m.v2 = 0;
m.x4 = 0;
m.si3 = 0;
m.t1 = 0;
m.ndir = 0;
m.x1 = 0;
m.y1 = 0;
m.x2 = 0.5;
m.x3 = 0.5;
m.x4 = 0.5;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.25;
m.xx1 = ((m.xx1*0.9)+(m.bass*0.01));
m.xx2 = ((m.xx2*0.9)+(m.treb*0.01));
m.lastbeat = (((m.nbeat*m.time)+((1-m.nbeat)*m.lastbeat))+(equal(m.lastbeat, 0)*m.time));
m.x1 = (0.5-((m.xx1-m.xx2)*2));
m.beat = ((above(m.volume, 0.8)*below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)))*above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))));
m.spring = 50;
m.grav = 2;
m.q10 = m.beat;
m.dt = 0.0005;
m.vx2 = ifcond(below(m.x2, 1), ifcond(above(m.x2, 0), ((m.vx2*(1-(m.resist*m.dt)))+(m.dt*(((m.x1+m.x3)-(2*m.x2))*m.spring))), (Math.abs(m.vx2)*m.bounce)), (-Math.abs(m.vx2)*m.bounce));
m.vy2 = ifcond(below(m.y2, 1), ifcond(above(m.y2, 0), ((m.vy2*(1-(m.resist*m.dt)))+(m.dt*((((m.y1+m.y3)-(2*m.y2))*m.spring)-m.grav))), (Math.abs(m.vy2)*m.bounce)), (-Math.abs(m.vy2)*m.bounce));
m.vx3 = ifcond(below(m.x3, 1), ifcond(above(m.x3, 0), ((m.vx3*(1-(m.resist*m.dt)))+(m.dt*(((m.x2+m.x4)-(2*m.x3))*m.spring))), (Math.abs(m.vx3)*m.bounce)), (-Math.abs(m.vx3)*m.bounce));
m.vy3 = ifcond(below(m.y3, 1), ifcond(above(m.y3, 0), ((m.vy3*(1-(m.resist*m.dt)))+(m.dt*((((m.y2+m.y4)-(2*m.y3))*m.spring)-m.grav))), (Math.abs(m.vy3)*m.bounce)), (-Math.abs(m.vy3)*m.bounce));
m.spy4 = ((m.y3-m.y4)*m.spring);
m.q6 = m.tt;
m.x2 = (m.x2+m.vx2);
m.y2 = (m.y2+m.vy2);
m.x3 = (m.x3+m.vx3);
m.y3 = (m.y3+m.vy3);
m.vy4 = ifcond(below(m.y4, 1), ifcond(above(m.y4, 0), ((m.vy4*(1-(m.resist*m.dt)))+(m.dt*(m.spy4-m.grav))), (Math.abs(m.vy4)*m.bounce)), (-Math.abs(m.vy4)*m.bounce));
m.y4 = (m.y4+m.vy4);
m.q3 = m.x4;
m.q7 = m.y4;
m.q8 = m.y2;
m.q4 = m.x2;
m.q9 = m.x1;
m.q1 = m.x1;
m.q2 = m.x2;
m.q12 = m.y3;
m.zoom = 1;
m.mx = Math.max(Math.max(m.bb, m.mm), m.tt);
m.mn = Math.min(Math.min(m.bb, m.mm), m.tt);
m.ob_r = div((m.bb-m.mn),(m.mx-m.mn));
m.ob_b = div((m.mm-m.mn),(m.mx-m.mn));
m.ob_g = div((m.tt-m.mn),(m.mx-m.mn));
m.q13 = Math.atan2(m.vx3, m.vy3);
m.q14 = sqrt(((m.vx3*m.vx3)+(m.vy3*m.vy3)));
m.q5 = sqrt(((m.vx2*m.vx2)+(m.vy2*m.vy2)));
		m.rkeys = ['nx','ny','nyy','nxx','ndir'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.w1 = m.q9;
m.w2 = m.q10;
m.nx = (m.nx-0.5);
m.ny = (m.ny-0.5);
m.b1 = 0.075;
m.m1 = (m.q5*50);
m.t1 = 0.1;
m.x1 = (m.nxx+(Math.cos((m.ndir+1.5708))*m.b1));
m.y1 = (m.nyy-(Math.sin((m.ndir+1.5708))*m.b1));
m.x2 = (m.nxx-(Math.cos((m.ndir+1.5708))*m.b1));
m.y2 = (m.nyy+(Math.sin((m.ndir+1.5708))*m.b1));
m.d1 = (sqrt((((m.x1-m.nx)*(m.x1-m.nx))+((m.y1-m.ny)*(m.y1-m.ny))))-(m.b1*2));
m.si1 = (1-div(1,(1+pow(2, (-m.d1*100)))));
m.d2 = (sqrt((((m.x2-m.nx)*(m.x2-m.nx))+((m.y2-m.ny)*(m.y2-m.ny))))-(m.b1*2));
m.si2 = (1-div(1,(1+pow(2, (-m.d2*100)))));
m.si3 = (-pow(m.q5, 3)*10);
m.dx = (((div(((((((m.si1*Math.sin((m.y1-m.ny)))*m.m1)*m.d1)-(((m.si2*Math.sin((m.y2-m.ny)))*m.m1)*m.d2))+((m.si3*Math.cos(m.ndir))*m.t1))*2),m.aspectx)+div((((m.nv*Math.sin(m.ndir))*(m.nr-m.nd))*(1-sigmoid((m.nd-m.nr), 280))),m.aspectx))+div((((m.nv*(m.nx-m.nxx))*(m.nr-m.nd))*(1-sigmoid((m.nd-m.nr), 70))),m.aspectx))+div((((m.nv*((Math.sin((m.ny-m.yy))*(m.nd-m.r))-((m.nx-m.xx)*(m.nd-div(m.r,2)))))+(Math.cos(m.dir)*m.v2))*(1.00-sigmoid((m.nd-m.r), 180))),m.aspectx));
m.dy = (((div(((((((-m.si1*Math.sin((m.x1-m.nx)))*m.m1)*m.d1)+(((m.si2*Math.sin((m.x2-m.nx)))*m.m1)*m.d2))-((m.si3*Math.sin(m.ndir))*m.t1))*2),m.aspecty)+div((((m.nv*Math.cos(m.ndir))*(m.nr-m.nd))*(1-sigmoid((m.nd-m.nr), 280))),m.aspecty))+div((((m.nv*(m.ny-m.nyy))*(m.nr-m.nd))*(1-sigmoid((m.nd-m.nr), 70))),m.aspecty))+div((((-m.nv*((Math.sin((m.nx-m.xx))*(m.nd-m.r))+((m.ny-m.yy)*(m.nd-div(m.r,2)))))-(Math.sin(m.dir)*m.v2))*(1.00-sigmoid((m.nd-m.r), 180))),m.aspecty));
m.ndir = ((-m.q2*1)+(Math.asin(1)*0));
m.nxx = m.w1;
m.nyy = (1-m.w2);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.288,
			enabled : 0.0,
			b : 0.557,
			g : 0.808,
			scaling : 3.4621,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.569,
			smoothing : 0.5112,
			thick : 1.0,
			sep : 20.0,
			},
		'init_eqs' : function(m) {
m.bb = 0;
m.q1 = 0;
m.s3 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.t6 = 0;
m.c = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.cl1 = 0;
m.j2 = 0;
m.cl2 = 0;
m.j3 = 0;
m.j = 0;
m.cl3 = 0;
m.c1 = 0;
m.n = 0;
m.c2 = 0;
m.c3 = 0;
m.zoom = 0;
m.t = 0;
m.w = 0;
m.y1 = 0;
m.x1 = 0;
m.pi3 = 0;
m.t1 = 0;
m.s1 = 0;
m.t2 = 0;
m.s2 = 0;
m.t3 = 0;

			m.rkeys = ['yy','zz','t8','g','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = 0;
m.j = (m.j+(m.bass*0.01));
m.j2 = (m.j2+(m.mid_att*0.01));
m.j3 = (m.j3+(m.treb_att*0.01));
m.t2 = m.j;
m.pi3 = ((3.1415*2)*0.3333);
m.t = (((m.q4+m.q5)+m.q6)*0.005);
m.c = 5;
m.r = ifcond(below(ifcond(above((1-(Math.sin(m.t)*m.c)), 1), 1, m.r), 0), 0, m.r);
m.cl1 = ifcond(below(ifcond(above((m.cl1+0.002), 1), 0, m.cl1), 0), 1, m.cl1);
m.g = ifcond(below(ifcond(above((1-(Math.sin((m.t+m.pi3))*m.c)), 1), 1, m.g), 0), 0, m.g);
m.b = ifcond(below(ifcond(above((1-(Math.sin((m.t-m.pi3))*m.c)), 1), 1, m.b), 0), 0, m.b);
m.cl2 = ifcond(below(ifcond(above((m.cl2-(1*m.q1)), 1), 0, m.cl2), 0), 1, m.cl2);
m.cl3 = ifcond(below(ifcond(above((m.cl3+0.001), 1), 0, m.cl3), 0), 1, m.cl3);
m.t6 = m.cl3;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = -m.t8;
m.yy = (((div((mod((m.xx*1896575575),10000000)+100),10000000)+m.t6)-ifcond(above((m.yy+m.t6), 1), 1, 0))-0.5);
m.zz = (((div((mod((m.yy*58652340875),10000000)+100),10000000)+m.t8)-ifcond(above((m.zz+m.t8), 1), 1, 0))-0.5);
m.d = sqrt(((sqr(m.xx)+sqr(m.yy))+sqr(m.zz)));
m.w = 1;
m.bb = ((m.d*m.d)*0.5);
m.n = 0.3;
m.s1 = Math.sin((Math.sin(((m.t2*m.w)+m.bb))*m.n));
m.s2 = Math.sin((Math.sin(((m.t3*m.w)+m.bb))*m.n));
m.c1 = Math.cos((Math.sin(((m.t2*m.w)+m.bb))*m.n));
m.c2 = Math.cos((Math.sin(((m.t3*m.w)+m.bb))*m.n));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.c3 = Math.cos((Math.sin(((m.t4*m.w)+m.bb))*m.n));
m.x = ((0.5+(m.zoom*m.x1))+(Math.sin((m.time*0.1))*0));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.r = ifcond(below(ifcond(above(m.r, 1), 1, m.r), 0), 0, m.r);
m.g = ifcond(below(ifcond(above(m.g, 1), 1, m.g), 0), 0, m.g);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = 0;\n' + 'j = j + (bass)*0.01;\n' + 'j2 = j2 + (mid_att)*0.01;\n' + 'j3 = j3 + (treb_att)*0.01;\n' + 't2 = j;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = (q4+q5+q6)*0.005;\n' + 'c = 5;\n' + 'r = if(below(if(above(1-sin(t)*c,1),1,r),0),0,r);\n' + 'cl1 = if(below(if(above(cl1 + 0.002,1),0,cl1),0),1,cl1);\n' + 'g = if(below(if(above(1-sin(t+pi3)*c,1),1,g),0),0,g);\n' + 'b = if(below(if(above(1-sin(t-pi3)*c,1),1,b),0),0,b);\n' + 'cl2 = if(below(if(above(cl2 -1*q1,1),0,cl2),0),1,cl2);\n' + 'cl3 = if(below(if(above(cl3 +0.001,1),0,cl3),0),1,cl3);\n' + 't6 = cl3;'),
		'point_eqs_str' : ('t8 = -t8;\n' + 'yy = ((xx*1896575575)%10000000+100)/10000000 + t6 - if(above(yy+t6,1),1,0) - 0.5;\n' + 'zz = ((yy*58652340875)%10000000+100)/10000000 + t8 - if(above(zz+t8,1),1,0) - 0.5;\n' + 'd = sqrt(sqr(xx)+sqr(yy)+sqr(zz));\n' + 'w = 1;\n' + 'bb = d*d*0.5;\n' + 'n = 0.3;\n' + 's1 = sin(sin(t2*w+bb)*n);\n' + 's2 = sin(sin(t3*w+bb)*n);\n' + 'c1 = cos(sin(t2*w+bb)*n);\n' + 'c2 = cos(sin(t3*w+bb)*n);\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'c3 = cos(sin(t4*w+bb)*n);\n' + 'x = 0.5 + zoom*x1 + sin(time*0.1)*0;\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'r = if(below(if(above(r,1),1,r),0),0,r);\n' + 'g = if(below(if(above(g,1),1,g),0),0,g);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.93,
			g : 1.0,
			scaling : 4.75054,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.978,
			smoothing : 0.192,
			thick : 1.0,
			sep : 20.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
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
m.nx = 0;
m.ny = 0;
m.nz = 0;
m.dir = 0;
m.nyy = 0;
m.p = 0;
m.zm = 0;
m.zoom = 0;
m.t = 0;
m.nd = 0;
m.w = 0;
m.z = 0;
m.pi3 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['b','t8','ny','r'];
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
m.r = ifcond(below(ifcond(above((1-(Math.sin(m.t)*m.c)), 1), 1, m.r), 0), 0, m.r);
m.g = ifcond(below(ifcond(above((1-(Math.sin((m.t+m.pi3))*m.c)), 1), 1, m.g), 0), 0, m.g);
m.b = ifcond(below(ifcond(above((1-(Math.sin((m.t-m.pi3))*m.c)), 1), 1, m.b), 0), 0, m.b);
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = -m.t8;
m.nd = sqrt((1-sqr(((m.sample-0.5)*2))));
m.nz = ((m.sample*0.4)-(0.2*(1+(m.t8*m.p))));
m.nx = (((Math.sin((m.sample*100))*m.nd)*0.2)*(1+(m.t8*m.p)));
m.g = 0;
m.t = ((m.q4-m.q6)*10);
m.c = 2;
m.r = ifcond(below(ifcond(above((Math.sin(m.t)*m.c), 1), 1, m.r), 0), 0, m.r);
m.b = ifcond(below(ifcond(above((Math.sin((m.t-m.pi3))*m.c), 1), 1, m.b), 0), 0, m.b);
m.dir = (((m.t4-m.t6)*0.4)+(((m.t1-m.t3)*(m.t8+1))*0.2));
m.w = ((m.t5*0.4)+(((m.t8+1)*m.t2)*0.2));
m.zz = m.nz;
m.nyy = m.ny;
m.ny = ((Math.cos(m.w)*m.nyy)-(Math.sin(m.w)*m.zz));
m.z = ((Math.sin(m.w)*m.nyy)+(Math.cos(m.w)*m.zz));
m.yy = ((Math.sin(m.dir)*m.nx)+(Math.cos(m.dir)*m.ny));
m.d = 0.5;
m.zoom = (2-(sqrt(m.t2)*1.1));
m.zm = div(sqrt((((m.nx*m.nx)+(m.ny*m.ny))+sqr((m.z+m.d)))),m.d);
m.y = (0.5+div(((m.zoom*m.yy)*0.55),m.zm));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = (q4+q5+q6)*0.005 + 2;\n' + 'c = 5;\n' + 'r = if(below(if(above(1-sin(t)*c,1),1,r),0),0,r);\n' + 'g = if(below(if(above(1-sin(t+pi3)*c,1),1,g),0),0,g);\n' + 'b = if(below(if(above(1-sin(t-pi3)*c,1),1,b),0),0,b);'),
		'point_eqs_str' : ('t8 = -t8;\n' + 'nd = sqrt(1-sqr((sample-0.5)*2));\n' + 'nz = sample*0.4 - 0.2*(1+t8*p);\n' + 'nx = sin(sample*100)*nd*0.2*(1+t8*p);\n' + 'g = 0;\n' + 't = (q4-q6)*10;\n' + 'c = 2;\n' + 'r = if(below(if(above(sin(t)*c,1),1,r),0),0,r);\n' + 'b = if(below(if(above(sin(t-pi3)*c,1),1,b),0),0,b);\n' + 'dir = (t4-t6)*0.4 + (t1-t3)*(t8+1)*0.2;\n' + 'w = t5*0.4 + (t8+1)*t2*0.2;\n' + 'zz = nz;\n' + 'nyy = ny;\n' + 'ny = cos(w)*nyy - sin(w)*zz;\n' + 'z = sin(w)*nyy + cos(w)*zz;\n' + 'yy = sin(dir)*nx + cos(dir)*ny;\n' + 'd = 0.5;\n' + 'zoom = 2 - sqrt(t2)*1.1;\n' + 'zm = sqrt(nx*nx+ny*ny+sqr(z+d))/d;\n' + 'y = 0.5 + zoom*yy*0.55/zm;'),

		},
		{
		'baseVals' : {
			a : 0.823,
			enabled : 0.0,
			b : 0.67,
			g : 0.531,
			scaling : 23.38429,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 20.0,
			},
		'init_eqs' : function(m) {
m.dd = 0;
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
m.t7 = 0;
m.d = 0;
m.q5 = 0;
m.t8 = 0;
m.ddd = 0;
m.q6 = 0;
m.q7 = 0;
m.q9 = 0;
m.d1 = 0;
m.m = 0;
m.c1 = 0;
m.n = 0;
m.c2 = 0;
m.c3 = 0;
m.na = 0;
m.zoom = 0;
m.t = 0;
m.w = 0;
m.xxx = 0;
m.x1 = 0;
m.z = 0;
m.pi3 = 0;
m.t1 = 0;
m.s1 = 0;
m.t2 = 0;
m.s2 = 0;
m.t3 = 0;

			m.rkeys = ['dd','g','sample','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q9;
m.t2 = m.q2;
m.t3 = (m.q3*0.5);
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
m.t7 = m.q7;
m.t8 = m.q7;
		return m;
	},
		'point_eqs' : function(m) {
m.sample = (1-m.sample);
m.xx = ((((-0.5+m.sample)*2)*m.d1)*(1+m.value1));
m.zz = ((Math.cos((m.sample*m.n))*0.02)*m.d1);
m.yy = (((Math.sin((m.sample*m.n))*0.02)*m.d1)*(1+m.value2));
m.d = sqrt((((m.xx*m.xx)+(m.yy*m.yy))+(m.zz*m.zz)));
m.b = ((rand(1001)*0.001)*0.6);
m.m = ((m.d*m.d)*2);
m.dd = ((m.dd*0.95)+m.value1);
m.ddd = (((m.dd*m.sample)*(1-m.sample))*m.d);
m.y = (m.yy-((m.xx-m.xxx)*m.ddd));
m.c1 = Math.cos(((m.t4*m.w)+(m.m*m.t1)));
m.c2 = Math.cos(((m.t5*m.w)+(m.m*m.t2)));
m.c3 = Math.cos(((m.t6*m.w)+(m.m*m.t3)));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.na = 2;
m.zoom = (0.3*Math.atan2((m.na-m.z), m.na));
m.x = (0.5+(m.zoom*m.x1));
m.pi3 = ((3.1415*2)*0.3333);
m.t = (-m.xx+(m.t5*0.2));
m.c = 10;
m.r = ifcond(below(ifcond(above((Math.sin(m.t)*m.c), 1), 1, m.r), 0), 0, m.r);
m.g = ifcond(below(ifcond(above((Math.sin((m.t+m.pi3))*m.c), 1), 1, m.g), 0), 0, m.g);
m.a = 2;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q9;\n' + 't2 = q2;\n' + 't3 = q3*0.5;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't7 = q7;\n' + 't8 = q7;'),
		'point_eqs_str' : ('sample = 1-sample;\n' + 'xx = (-0.5+sample)*2*d1*(1+value1);\n' + 'zz = cos(sample*n)*0.02*d1;\n' + 'yy = sin(sample*n)*0.02*d1*(1+value2);\n' + 'd = sqrt( xx*xx + yy*yy + zz*zz);\n' + 'b = rand(1001)*.001*.6;\n' + 'm = d*d*2;\n' + 'dd = dd*0.95 + (value1);\n' + 'ddd = dd*sample*(1-sample)*d;\n' + 'y = yy - (xx-xxx)*ddd;\n' + 'c1 = cos(t4*w + m*t1);\n' + 'c2 = cos(t5*w + m*t2);\n' + 'c3 = cos(t6*w + m*t3);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'na = 2;\n' + 'zoom = 0.3*atan2(na-z,na);\n' + 'x = 0.5 + zoom*x1;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = -xx+t5*.2;\n' + 'c = 10;\n' + 'r = if(below(if(above(sin(t)*c,1),1,r),0),0,r);\n' + 'g = if(below(if(above(sin(t+pi3)*c,1),1,g),0),0,g);\n' + 'a = 2;'),

		},
		{
		'baseVals' : {
			a : 0.999,
			enabled : 0.0,
			b : 0.563,
			g : 0.728,
			scaling : 2.24641,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.907,
			smoothing : 0.0648,
			thick : 1.0,
			sep : 20.0,
			},
		'init_eqs' : function(m) {
m.s3 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.q2 = 0;
m.t5 = 0;
m.t6 = 0;
m.c = 0;
m.q4 = 0;
m.t7 = 0;
m.d = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.d1 = 0;
m.m = 0;
m.c1 = 0;
m.n = 0;
m.c2 = 0;
m.c3 = 0;
m.na = 0;
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

			m.rkeys = ['t8','g','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.q4*0.75);
m.t2 = m.q2;
m.t3 = (m.q6*0.75);
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = (m.q6*0.75);
m.t7 = m.q7;
m.t8 = m.q8;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = -m.t8;
m.n = 300;
m.zz = (((-0.5+m.sample)*2)*m.d1);
m.b = ((rand(1001)*0.001)*0.6);
m.yy = (((Math.sin((m.sample*m.n))*0.02)*m.d1)*(1+m.value2));
m.d = sqrt((((m.xx*m.xx)+(m.yy*m.yy))+(m.zz*m.zz)));
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
m.na = 2;
m.zoom = (0.3*Math.atan2((m.na-m.z), m.na));
m.x = (0.5+(m.zoom*m.x1));
m.y = (0.5+(m.zoom*m.y1));
m.pi3 = ((3.1415*2)*0.3333);
m.t = (-m.zz+(m.t6*0.2));
m.c = 10;
m.r = ifcond(below(ifcond(above((Math.sin(m.t)*m.c), 1), 1, m.r), 0), 0, m.r);
m.g = ifcond(below(ifcond(above((Math.sin((m.t+m.pi3))*m.c), 1), 1, m.g), 0), 0, m.g);
m.a = 2;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q4*0.75;\n' + 't2 = q2;\n' + 't3 = q6*0.75;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6*0.75;\n' + 't7 = q7;\n' + 't8 = q8;'),
		'point_eqs_str' : ('t8 = -t8;\n' + 'n = 300;\n' + 'zz = (-0.5+sample)*2*d1;\n' + 'b = rand(1001)*.001*.6;\n' + 'yy = sin(sample*n)*0.02*d1*(1+value2);\n' + 'd = sqrt( xx*xx + yy*yy + zz*zz);\n' + 'w = .3;\n' + 'm = d*d*2;\n' + 's1 = sin(t4*w + m*t1);\n' + 's2 = sin(t5*w + m*t2);\n' + 's3 = sin(t6*w + m*t3);\n' + 'c1 = cos(t4*w + m*t1);\n' + 'c2 = cos(t5*w + m*t2);\n' + 'c3 = cos(t6*w + m*t3);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'na = 2;\n' + 'zoom = 0.3*atan2(na-z,na);\n' + 'x = 0.5 + zoom*x1;\n' + 'y = 0.5 + zoom*y1;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = -zz+t6*.2;\n' + 'c = 10;\n' + 'r = if(below(if(above(sin(t)*c,1),1,r),0),0,r);\n' + 'g = if(below(if(above(sin(t+pi3)*c,1),1,g),0),0,g);\n' + 'a = 2;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.398,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.044,
			textured : 0.0,
			g2 : 0.722,
			tex_zoom : 0.59662,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.503,
			b2 : 0.172,
			a2 : 0.68,
			r : 0.643,
			border_g : 1.0,
			rad : 0.0907,
			x : 0.5,
			y : 0.661,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.624,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;
m.t = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t = (-(m.q4+m.q5)*0.2);
m.x = (0.5+(Math.sin(m.t)*0.2));
m.rad = (0.4-(Math.cos(m.t)*0.3));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t = -(q4+q5)*0.2;\n' + 'x = 0.5 + sin(t)*0.2;\n' + 'rad = 0.4 - cos(t)*0.3;'),

		},
		{
		'baseVals' : {
			r2 : 0.52,
			a : 1.0,
			enabled : 0.0,
			b : 0.105,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.002,
			textured : 0.0,
			g2 : 0.186,
			tex_zoom : 0.70681,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.2,
			a2 : 0.27,
			r : 0.79,
			border_g : 1.0,
			rad : 0.43922,
			x : 0.582,
			y : 0.451,
			ang : 0.30557,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.yy = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.t = 0;
m.aang = 0;
m.pi = 0;

			m.rkeys = ['aang','yy'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t = (-(m.q4+m.q5)*0.2);
m.pi = (Math.asin(1)*2);
m.x = (0.5+(Math.sin((m.t+m.pi))*0.2));
m.yy = ifcond(below(m.d, 0.15), (0.3+div(rand(400),1000)), m.yy);
m.aang = ifcond(below(m.d, 0.12), div(rand(1000),1000), m.aang);
m.ang = ((m.aang*4)*Math.asin(1));
m.y = m.yy;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t = -(q4+q5)*0.2;\n' + 'pi = asin(1)*2;\n' + 'x = 0.5 + sin(t+pi)*0.2;\n' + 'yy = if(below(d,0.15),0.3+rand(400)/1000,yy);\n' + 'aang = if(below(d,0.12),rand(1000)/1000,aang);\n' + 'ang = aang*4*asin(1);\n' + 'y = yy;'),

		},
		{
		'baseVals' : {
			r2 : 0.427,
			a : 1.0,
			enabled : 0.0,
			b : 0.118,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.67074,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.546,
			a2 : 0.68,
			r : 0.295,
			border_g : 1.0,
			rad : 1.07507,
			x : 0.651,
			y : 0.552,
			ang : 0.52229,
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

			m.rkeys = ['aang','yy','xx'];
			return m;
		},
		'frame_eqs' : function(m) {
m.d = sqrt((sqr((m.xx-m.q4))+sqr((m.yy-m.q8))));
m.xx = ifcond(below(m.d, 0.15), (0.4+div(rand(200),1000)), m.xx);
m.yy = ifcond(below(m.d, 0.15), (0.3+div(rand(400),1000)), m.yy);
m.aang = ifcond(below(m.d, 0.12), div(rand(1000),1000), m.aang);
m.ang = ((m.aang*4)*Math.asin(1));
m.y = m.yy;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('d = sqrt( sqr(xx-q4)+sqr(yy-q8));\n' + 'xx = if(below(d,0.15),0.4+rand(200)/1000,xx);\n' + 'yy = if(below(d,0.15),0.3+rand(400)/1000,yy);\n' + 'aang = if(below(d,0.12),rand(1000)/1000,aang);\n' + 'ang = aang*4*asin(1);\n' + 'y = yy;'),

		},
		{
		'baseVals' : {
			r2 : 0.192,
			a : 0.964,
			enabled : 0.0,
			b : 0.243,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.416,
			textured : 0.0,
			g2 : 0.692,
			tex_zoom : 0.96404,
			additive : 0.0,
			border_a : 0.051,
			border_b : 1.0,
			b2 : 0.17,
			a2 : 0.243,
			r : 0.891,
			border_g : 1.0,
			rad : 0.62269,
			x : 0.5,
			y : 0.688,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.c = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.t = 0;
m.pi3 = 0;

			m.rkeys = ['b','g','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q1;
m.y = m.q5;
m.pi3 = ((3.1415*2)*0.3333);
m.t = (((m.q4-(2*m.q5))+m.q6)*0.2);
m.c = 3;
m.r = ifcond(below(ifcond(above((Math.sin(m.t)*m.c), 1), 1, m.r), 0), 0, m.r);
m.g = ifcond(below(ifcond(above((Math.sin((m.t+m.pi3))*m.c), 1), 1, m.g), 0), 0, m.g);
m.b = ifcond(below(ifcond(above((Math.sin((m.t-m.pi3))*m.c), 1), 1, m.b), 0), 0, m.b);
m.r2 = (1-m.r);
m.g2 = (1-m.g);
m.b2 = (1-m.b);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = q1;\n' + 'y = q5;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = (q4-2*q5+q6)*0.2;\n' + 'c = 3;\n' + 'r = if(below(if(above(sin(t)*c,1),1,r),0),0,r);\n' + 'g = if(below(if(above(sin(t+pi3)*c,1),1,g),0),0,g);\n' + 'b = if(below(if(above(sin(t-pi3)*c,1),1,b),0),0,b);\n' + 'r2 = 1-r;\n' + 'g2 = 1-g;\n' + 'b2 = 1-b;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 my_uv_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (vec2(1280.0, 1024.0) * texsize.zw);\n' + '   vec4 tmpvar_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (uv + vec2(0.005, 0.0));\n' + '  tmpvar_4 = texture2D (sampler_blur2, tmpvar_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (uv - vec2(0.005, 0.0));\n' + '  tmpvar_6 = texture2D (sampler_blur2, tmpvar_7);\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = (((\n' + '    (tmpvar_4.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_6.xyz * scale2)\n' + '   + bias2)).x * tmpvar_3.x);\n' + '   vec4 tmpvar_9;\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = (uv + vec2(0.0, 0.005));\n' + '  tmpvar_9 = texture2D (sampler_blur2, tmpvar_10);\n' + '   vec4 tmpvar_11;\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = (uv - vec2(0.0, 0.005));\n' + '  tmpvar_11 = texture2D (sampler_blur2, tmpvar_12);\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = (((\n' + '    (tmpvar_9.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_11.xyz * scale2)\n' + '   + bias2)).x * tmpvar_3.y);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur2, tmpvar_5);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur2, tmpvar_7);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_blur2, tmpvar_10);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur2, tmpvar_12);\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18.x = tmpvar_8;\n' + '  tmpvar_18.y = tmpvar_13;\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = (((\n' + '    (tmpvar_14.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_15.xyz * scale2)\n' + '   + bias2)).x * tmpvar_3.x);\n' + '  tmpvar_19.y = (((\n' + '    (tmpvar_16.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_17.xyz * scale2)\n' + '   + bias2)).x * tmpvar_3.y);\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = ((uv - (tmpvar_18 * 0.01)) + (tmpvar_19 * 0.003));\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_fw_main, tmpvar_20);\n' + '  ret_2.x = tmpvar_21.x;\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur3, uv);\n' + '  ret_2.x = (ret_2.x + ((ret_2.x - \n' + '    ((tmpvar_22.xyz * scale3) + bias3)\n' + '  .x) * 0.1));\n' + '  ret_2.x = (ret_2.x + 0.004);\n' + '   vec2 tmpvar_23;\n' + '  tmpvar_23.x = tmpvar_13;\n' + '  tmpvar_23.y = -(tmpvar_8);\n' + '  my_uv_1 = (uv + ((tmpvar_23 * 0.05) * (1.2 - \n' + '    ((tmpvar_22.xyz * scale3) + bias3)\n' + '  .y)));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_fw_main, my_uv_1);\n' + '  ret_2.z = tmpvar_24.z;\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_blur1, uv);\n' + '   vec2 x_26;\n' + '  x_26 = (my_uv_1 - uv);\n' + '  ret_2.z = (ret_2.z + ((\n' + '    ((ret_2.z - ((tmpvar_25.xyz * scale1) + bias1).z) * sqrt(dot (x_26, x_26)))\n' + '   * 180.0) / sqrt(\n' + '    dot (tmpvar_3, tmpvar_3)\n' + '  )));\n' + '  ret_2.z = (ret_2.z * 0.8);\n' + '  ret_2.z = (ret_2.z + 0.004);\n' + '   vec2 tmpvar_27;\n' + '  tmpvar_27.x = -(tmpvar_13);\n' + '  tmpvar_27.y = tmpvar_8;\n' + '  my_uv_1 = (tmpvar_27 * 0.045);\n' + '   vec4 tmpvar_28;\n' + '   vec2 P_29;\n' + '  P_29 = (uv + vec2(0.01, 0.0));\n' + '  tmpvar_28 = texture2D (sampler_blur2, P_29);\n' + '   vec4 tmpvar_30;\n' + '   vec2 P_31;\n' + '  P_31 = (uv - vec2(0.01, 0.0));\n' + '  tmpvar_30 = texture2D (sampler_blur2, P_31);\n' + '   vec4 tmpvar_32;\n' + '   vec2 P_33;\n' + '  P_33 = (uv + vec2(0.0, 0.01));\n' + '  tmpvar_32 = texture2D (sampler_blur2, P_33);\n' + '   vec4 tmpvar_34;\n' + '   vec2 P_35;\n' + '  P_35 = (uv - vec2(0.0, 0.01));\n' + '  tmpvar_34 = texture2D (sampler_blur2, P_35);\n' + '   vec2 tmpvar_36;\n' + '  tmpvar_36.x = (((\n' + '    (tmpvar_28.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_30.xyz * scale2)\n' + '   + bias2)).y * tmpvar_3.x);\n' + '  tmpvar_36.y = (((\n' + '    (tmpvar_32.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_34.xyz * scale2)\n' + '   + bias2)).y * tmpvar_3.y);\n' + '  my_uv_1 = (my_uv_1 + (uv - (tmpvar_36 * 0.03)));\n' + '   vec4 tmpvar_37;\n' + '  tmpvar_37 = texture2D (sampler_fw_main, my_uv_1);\n' + '  ret_2.y = tmpvar_37.y;\n' + '   vec4 tmpvar_38;\n' + '  tmpvar_38 = texture2D (sampler_blur3, my_uv_1);\n' + '  ret_2.y = (ret_2.y + ((\n' + '    (ret_2.y - ((tmpvar_38.xyz * scale3) + bias3).y)\n' + '   * 0.1) + 0.01));\n' + '   vec4 tmpvar_39;\n' + '  tmpvar_39.w = 1.0;\n' + '  tmpvar_39.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_39;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_blur2, uv);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uv);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_main, uv);\n' + '  ret_1 = ((vec3(1.0, 1.0, 0.0) * vec3((\n' + '    ((((tmpvar_2.xyz * scale2) + bias2).x * 2.5) - (((tmpvar_3.xyz * scale1) + bias1).x * 0.7))\n' + '   + \n' + '    (tmpvar_4.x * 0.75)\n' + '  ))) * (1.0 - (\n' + '    ((tmpvar_3.xyz * scale1) + bias1)\n' + '  .x * 1.85)));\n' + '  ret_1 = (ret_1 + ((vec3(1.0, 0.0, 0.0) * tmpvar_4.x) + (vec3(0.25, 0.25, 0.25) * tmpvar_4.x)));\n' + '  ret_1 = (ret_1 * max (tmpvar_4.y, (\n' + '    ((tmpvar_2.xyz * scale2) + bias2)\n' + '  .y * 0.5)));\n' + '  ret_1 = (ret_1 * (1.0 - clamp (\n' + '    (((tmpvar_3.xyz * scale1) + bias1).z * 10.0)\n' + '  , 0.0, 1.0)));\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = pow (tmpvar_4.z, 1.5);\n' + '  ret_1 = (ret_1 + vec3(tmpvar_5));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0;\n' + 'y1 = 0;\n' + 'x2 = 0.5;\n' + 'x3 = 0.5;\n' + 'x4 = 0.5;'),
	'frame_eqs_str' : ('decay = 0.25;\n' + 'xx1 = xx1*0.9 + (bass)*0.01;\n' + 'xx2 = xx2*0.9 + (treb)*0.01;\n' + 'lastbeat = nbeat*time + (1-nbeat)*lastbeat + equal(lastbeat,0)*time;\n' + 'x1 = 0.5 - (xx1-xx2)*2;\n' + 'beat = above(volume,0.8)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));\n' + 'spring = 50;\n' + 'grav = 2;\n' + 'q10 = beat;\n' + 'dt = 0.0005;\n' + 'vx2 = if(below(x2,1),if(above(x2,0),vx2*(1-resist*dt) + dt*((x1+x3-2*x2)*spring),abs(vx2)*bounce),-abs(vx2)*bounce);\n' + 'vy2 = if(below(y2,1),if(above(y2,0),vy2*(1-resist*dt) + dt*((y1+y3-2*y2)*spring-grav),abs(vy2)*bounce),-abs(vy2)*bounce);\n' + 'vx3 = if(below(x3,1),if(above(x3,0),vx3*(1-resist*dt) + dt*((x2+x4-2*x3)*spring),abs(vx3)*bounce),-abs(vx3)*bounce);\n' + 'vy3 = if(below(y3,1),if(above(y3,0),vy3*(1-resist*dt) + dt*((y2+y4-2*y3)*spring-grav),abs(vy3)*bounce),-abs(vy3)*bounce);\n' + 'spy4 = (y3-y4)*spring;\n' + 'q6 = tt;\n' + 'x2 = x2 + vx2;\n' + 'y2 = y2 + vy2;\n' + 'x3 = x3 + vx3;\n' + 'y3 = y3 + vy3;\n' + 'vy4 = if(below(y4,1),if(above(y4,0),vy4*(1-resist*dt) + dt*(spy4-grav),abs(vy4)*bounce),-abs(vy4)*bounce);\n' + 'y4 = y4 + vy4;\n' + 'q3 = x4;\n' + 'q7 = y4;\n' + 'q8 = y2;\n' + 'q4 = x2;\n' + 'q9 = x1;\n' + 'q1 = x1;\n' + 'q2 = x2;\n' + 'q12 = y3;\n' + 'zoom = 1;\n' + 'mx = max(max(bb,mm),tt);\n' + 'mn = min(min(bb,mm),tt);\n' + 'ob_r = (bb-mn)/(mx-mn);\n' + 'ob_b = (mm-mn)/(mx-mn);\n' + 'ob_g = (tt-mn)/(mx-mn);\n' + 'q13 = atan2(vx3,vy3);\n' + 'q14 = sqrt(vx3*vx3 + vy3*vy3);\n' + 'q5 = sqrt(vx2*vx2 + vy2*vy2);'),
	'pixel_eqs_str' : ('w1 = q9;\n' + 'w2 = q10;\n' + 'nx = nx-0.5;\n' + 'ny = ny- 0.5;\n' + 'b1 = 0.075;\n' + 'm1 = q5*50;\n' + 't1 = 0.1;\n' + 'x1 = nxx   +cos(ndir+1.5708)*b1;\n' + 'y1 = nyy -sin(ndir+1.5708)*b1;\n' + 'x2 = nxx   -cos(ndir+1.5708)*b1;\n' + 'y2 = nyy +sin(ndir+1.5708)*b1;\n' + 'd1 = sqrt((x1-nx)*(x1-nx)+(y1-ny)*(y1-ny))-b1*2;\n' + 'si1 = 1- 1/(1+pow(2,-d1*100));\n' + 'd2 = sqrt((x2-nx)*(x2-nx)+(y2-ny)*(y2-ny))-b1*2;\n' + 'si2 = 1- 1/(1+pow(2,-d2*100));\n' + 'si3 = -pow(q5,3)*10;\n' + 'dx = (si1*sin(y1-ny)*m1*d1  - si2*sin(y2-ny)*m1*d2 + si3*cos(ndir)*t1)*2/aspectx + nv*sin(ndir)*(nr-nd)*(1-sigmoid(nd-nr,280))/aspectx + nv*(nx-nxx)*(nr-nd)*(1-sigmoid(nd-nr,70))/aspectx + (nv*(sin(ny-yy)*(nd-r)-(nx-xx)*(nd-r/2)) + cos(dir)*v2)*(1.00-sigmoid(nd-r,180))/aspectx;\n' + 'dy = (-si1*sin(x1-nx)*m1*d1 + si2*sin(x2-nx)*m1*d2 - si3*sin(ndir)*t1)*2/aspecty + nv*cos(ndir)*(nr-nd)*(1-sigmoid(nd-nr,280))/aspecty + nv*(ny-nyy)*(nr-nd)*(1-sigmoid(nd-nr,70))/aspecty + (-nv*(sin(nx-xx)*(nd-r)+(ny-yy)*(nd-r/2)) -sin(dir)*v2)*(1.00-sigmoid(nd-r,180))/aspecty;\n' + 'ndir = -q2*1 + asin(1)*0;\n' + 'nxx = w1;\n' + 'nyy = 1-w2;'),
};

return pmap;
});
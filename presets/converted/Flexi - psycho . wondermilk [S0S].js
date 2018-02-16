define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.980001,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 0.106584,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.017426,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 6.227751,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.312112,
		ob_size : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.000001,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 2.0,
		modwavealphastart : 1.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.ab = 0;
m.q2 = 0;
m.q3 = 0;
m.c = 0;
m.n1 = 0;
m.q4 = 0;
m.d = 0;
m.n2 = 0;
m.q5 = 0;
m.q6 = 0;
m.j1 = 0;
m.j2 = 0;
m.j3 = 0;
m.k = 0;
m.n = 0;
m.t = 0;
m.v = 0;
m.w = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.pi3 = 0;
m.x2 = 0;
m.dy1 = 0;
m.dx1 = 0;
m.dy2 = 0;
m.dx2 = 0;
m.x1 = 0;
m.y1 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.pi3 = div((3.1415*2),3);
m.c = 0.5;
m.monitor = (5*Math.sin(m.time));
m.ib_r = (0.5+(Math.sin(((m.c*m.time)+m.pi3))*0.5));
m.ib_g = (0.5+(Math.sin(((m.c*m.time)-m.pi3))*0.5));
m.ib_b = (0.5+(Math.sin((m.c*m.time))*0.5));
m.ab = ((m.ab*0.9)+sqr((m.mid_att*2)));
m.q6 = (m.ab*0.0005);
m.q1 = 0;
m.v = 0.01;
m.j1 = ((m.j1*0.98)+sqr((m.bass_att*2)));
m.j2 = ((m.j2*0.98)+sqr((m.mid_att*2)));
m.j3 = ((m.j3*0.98)+sqr((m.treb_att*2)));
m.n = (m.n+(m.j1*0.00052));
m.n1 = (m.n1+(m.j2*0.00052));
m.n2 = (m.n2+(m.j3*0.00052));
m.q2 = (m.n*0.1);
m.q3 = (-m.n1*0.1);
m.q4 = (m.n2*0.15);
m.k = ((m.k*0.995)+sqr((m.mid_att*2)));
m.q5 = (-m.k*0.001);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.d = (sqrt((((m.x-0.5)*(m.x-0.5))+((m.y-0.5)*(m.y-0.5))))*m.rad);
m.n = 15;
m.t = ((Math.sin(m.time)*m.q5)*5);
m.w = ((m.q5*0.7)*Math.cos(m.time));
m.v = 10;
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
m.dx = (m.v*m.dx2);
m.dy = (m.v*m.dy2);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.09348,
			samples : 512.0,
			additive : 0.0,
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
m.dir = 0;
m.c1 = 0;
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
m.ab = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t2 = m.q2;
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
		return m;
	},
		'point_eqs' : function(m) {
m.s8 = (m.sample*383);
m.dir = (((m.s8*0.125)*3.1415)*0.5);
m.v = 0.0005;
m.t1 = 0;
m.d = 1;
m.xx = (Math.sin((m.dir+(10*m.time)))*((m.sample*m.d)+m.t1));
m.yy = (Math.cos((m.dir+(10*m.time)))*((m.sample*m.d)+m.t1));
m.zz = (Math.cos(((m.sample*1000)+(m.time*5)))*0.0);
m.v = 0.001;
m.w = (1-((m.sample-0.5)*m.t6));
m.s1 = Math.sin((m.t2*m.w));
m.s2 = Math.sin((m.t3*m.w));
m.s3 = Math.sin((m.t4*m.w));
m.c1 = Math.cos((m.t2*m.w));
m.c2 = Math.cos((m.t3*m.w));
m.c3 = Math.cos((m.t4*m.w));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.a = 2;
m.zoom = (0.5*Math.atan2((m.a-m.z), m.a));
m.x = (0.5+(m.zoom*m.x1));
m.y = (0.5+(m.zoom*m.y1));
m.pi3 = ((3.1415*2)*0.3333);
m.t = ((-m.z*1.2)+(m.t5*20));
m.c = 10;
m.r = (Math.sin(m.t)*m.c);
m.g = (Math.sin((m.t+m.pi3))*m.c);
m.b = (Math.sin((m.t-m.pi3))*m.c);
m.j = 0.71;
m.r = ifcond(above(m.r, 1), 1, m.r);
m.r = ifcond(below(m.r, 0), 0, m.r);
m.g = ifcond(above(m.g, 1), 1, m.g);
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = ifcond(above(m.b, 1), 1, m.b);
m.b = ifcond(below(m.b, 0), 0, m.b);
m.a = ((sigmoid(-m.z, 2)*1.0)+0.0);
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'ab = 1;'),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;'),
		'point_eqs_str' : ('s8 = sample*383;\n' + 'dir = s8*0.125*3.1415*0.5;\n' + 'v = 0.0005;\n' + 't1 = 0;\n' + 'd = 1;\n' + 'xx = sin(dir+10*time)*(sample*d+t1);\n' + 'yy = cos(dir+10*time)*(sample*d+t1);\n' + 'zz = cos(sample*1000+time*5)*0.0;\n' + 'v = 0.001;\n' + 'w = 1-(sample-0.5)*t6;\n' + 's1 = sin(t2*w);\n' + 's2 = sin(t3*w);\n' + 's3 = sin(t4*w);\n' + 'c1 = cos(t2*w);\n' + 'c2 = cos(t3*w);\n' + 'c3 = cos(t4*w);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'a = 2;\n' + 'zoom = 0.5*atan2(a-z,a);\n' + 'x = 0.5 + zoom*x1;\n' + 'y = 0.5 + zoom*y1;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = -z*1.2+t5*20;\n' + 'c = 10;\n' + 'r = sin(t)*c;\n' + 'g = sin(t+pi3)*c;\n' + 'b = sin(t-pi3)*c;\n' + 'j = 0.71;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);\n' + 'a = sigmoid(-z,2)*1.0+0.0;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 9.941252,
			samples : 484.0,
			additive : 0.0,
			usedots : 1.0,
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
m.c1 = 0;
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
m.t1 = m.q1;
m.t2 = m.q2;
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
		return m;
	},
		'point_eqs' : function(m) {
m.s8 = (m.sample*383);
m.s = 0.25;
m.xx = (((mod((m.sample*465),15)-8)*m.s)*2);
m.yy = ((mod((m.sample*31),31)-16)*m.s);
m.zz = (m.value1+(Math.sin((m.time+(m.yy*0.3)))*1));
m.d = sqrt((((m.xx*m.xx)+(m.yy*m.yy))+(m.zz*m.zz)));
m.w = (1+((m.d*0.0003)*m.t6));
m.s1 = Math.sin((m.t2*m.w));
m.s2 = Math.sin((m.t3*m.w));
m.s3 = Math.sin((m.t4*m.w));
m.c1 = Math.cos((m.t2*m.w));
m.c2 = Math.cos((m.t3*m.w));
m.c3 = Math.cos((m.t4*m.w));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.a = 500;
m.zoom = (0.05*Math.atan2((m.a-m.z), m.a));
m.x = (0.5+(m.zoom*m.x1));
m.y = (0.5+(m.zoom*m.y1));
m.pi3 = ((3.1415*2)*0.3333);
m.t = ((-m.z*0.5)+m.t5);
m.c = 10;
m.r = (Math.sin(m.t)*m.c);
m.g = (Math.sin((m.t+m.pi3))*m.c);
m.b = (Math.sin((m.t-m.pi3))*m.c);
m.j = 0.71;
m.r = ifcond(above(m.r, 1), 1, m.r);
m.r = ifcond(below(m.r, 0), 0, m.r);
m.g = ifcond(above(m.g, 1), 1, m.g);
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = ifcond(above(m.b, 1), 1, m.b);
m.b = ifcond(below(m.b, 0), 0, m.b);
m.a = ((sigmoid(-m.z, 0.25)*1.0)+0.0);
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'ab = 1;'),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;'),
		'point_eqs_str' : ('s8 = sample*383;\n' + 's = 0.25;\n' + 'xx = ((sample*(465))%15 - 8)*s*2;\n' + 'yy = ((sample*31)%31 - 16)*s;\n' + 'zz = value1+sin(time+yy*0.3)*1;\n' + 'd = sqrt( xx*xx + yy*yy + zz*zz);\n' + 'w = 1+d*0.0003*t6;\n' + 's1 = sin(t2*w);\n' + 's2 = sin(t3*w);\n' + 's3 = sin(t4*w);\n' + 'c1 = cos(t2*w);\n' + 'c2 = cos(t3*w);\n' + 'c3 = cos(t4*w);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'a = 500;\n' + 'zoom = 0.05*atan2(a-z,a);\n' + 'x = 0.5 + zoom*x1;\n' + 'y = 0.5 + zoom*y1;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = -z*0.5+t5;\n' + 'c = 10;\n' + 'r = sin(t)*c;\n' + 'g = sin(t+pi3)*c;\n' + 'b = sin(t-pi3)*c;\n' + 'j = 0.71;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);\n' + 'a = sigmoid(-z,0.25)*1.0+0.0;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 9.941252,
			samples : 484.0,
			additive : 0.0,
			usedots : 1.0,
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
m.c1 = 0;
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
m.t1 = m.q1;
m.t2 = m.q2;
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
		return m;
	},
		'point_eqs' : function(m) {
m.s8 = (m.sample*383);
m.s = 0.25;
m.xx = (((mod((m.sample*465),15)-8)*m.s)*2);
m.zz = ((mod((m.sample*31),31)-16)*m.s);
m.yy = (m.value1+(Math.sin((m.time+(m.xx*0.3)))*1));
m.d = sqrt((((m.xx*m.xx)+(m.yy*m.yy))+(m.zz*m.zz)));
m.w = (1+((m.d*0.0003)*m.t6));
m.s1 = Math.sin((m.t2*m.w));
m.s2 = Math.sin((m.t3*m.w));
m.s3 = Math.sin((m.t4*m.w));
m.c1 = Math.cos((m.t2*m.w));
m.c2 = Math.cos((m.t3*m.w));
m.c3 = Math.cos((m.t4*m.w));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.a = 500;
m.zoom = (0.05*Math.atan2((m.a-m.z), m.a));
m.x = (0.5+(m.zoom*m.x1));
m.y = (0.5+(m.zoom*m.y1));
m.pi3 = ((3.1415*2)*0.3333);
m.t = ((-m.z*0.5)+m.t5);
m.c = 10;
m.r = (Math.sin(m.t)*m.c);
m.g = (Math.sin((m.t+m.pi3))*m.c);
m.b = (Math.sin((m.t-m.pi3))*m.c);
m.j = 0.71;
m.r = ifcond(above(m.r, 1), 1, m.r);
m.r = ifcond(below(m.r, 0), 0, m.r);
m.g = ifcond(above(m.g, 1), 1, m.g);
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = ifcond(above(m.b, 1), 1, m.b);
m.b = ifcond(below(m.b, 0), 0, m.b);
m.a = ((sigmoid(-m.z, 0.25)*1.0)+0.0);
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'ab = 1;'),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;'),
		'point_eqs_str' : ('s8 = sample*383;\n' + 's = 0.25;\n' + 'xx = ((sample*(465))%15 - 8)*s*2;\n' + 'zz = ((sample*31)%31 - 16)*s;\n' + 'yy = value1+sin(time +xx*0.3)*1;\n' + 'd = sqrt( xx*xx + yy*yy + zz*zz);\n' + 'w = 1+d*0.0003*t6;\n' + 's1 = sin(t2*w);\n' + 's2 = sin(t3*w);\n' + 's3 = sin(t4*w);\n' + 'c1 = cos(t2*w);\n' + 'c2 = cos(t3*w);\n' + 'c3 = cos(t4*w);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'a = 500;\n' + 'zoom = 0.05*atan2(a-z,a);\n' + 'x = 0.5 + zoom*x1;\n' + 'y = 0.5 + zoom*y1;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = -z*0.5+t5;\n' + 'c = 10;\n' + 'r = sin(t)*c;\n' + 'g = sin(t+pi3)*c;\n' + 'b = sin(t-pi3)*c;\n' + 'j = 0.71;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);\n' + 'a = sigmoid(-z,0.25)*1.0+0.0;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 9.941252,
			samples : 484.0,
			additive : 0.0,
			usedots : 1.0,
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
m.c1 = 0;
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
m.t1 = m.q1;
m.t2 = m.q2;
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
		return m;
	},
		'point_eqs' : function(m) {
m.s8 = (m.sample*383);
m.s = 0.25;
m.yy = (((mod((m.sample*465),15)-8)*m.s)*2);
m.zz = ((mod((m.sample*31),31)-16)*m.s);
m.xx = (m.value1+(Math.sin((m.time+(m.yy*0.3)))*1));
m.d = sqrt((((m.xx*m.xx)+(m.yy*m.yy))+(m.zz*m.zz)));
m.w = (1+((m.d*0.0003)*m.t6));
m.s1 = Math.sin((m.t2*m.w));
m.s2 = Math.sin((m.t3*m.w));
m.s3 = Math.sin((m.t4*m.w));
m.c1 = Math.cos((m.t2*m.w));
m.c2 = Math.cos((m.t3*m.w));
m.c3 = Math.cos((m.t4*m.w));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.a = 500;
m.zoom = (0.05*Math.atan2((m.a-m.z), m.a));
m.x = (0.5+(m.zoom*m.x1));
m.y = (0.5+(m.zoom*m.y1));
m.pi3 = ((3.1415*2)*0.3333);
m.t = ((-m.z*0.5)+m.t5);
m.c = 10;
m.r = (Math.sin(m.t)*m.c);
m.g = (Math.sin((m.t+m.pi3))*m.c);
m.b = (Math.sin((m.t-m.pi3))*m.c);
m.j = 0.71;
m.r = ifcond(above(m.r, 1), 1, m.r);
m.r = ifcond(below(m.r, 0), 0, m.r);
m.g = ifcond(above(m.g, 1), 1, m.g);
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = ifcond(above(m.b, 1), 1, m.b);
m.b = ifcond(below(m.b, 0), 0, m.b);
m.a = ((sigmoid(-m.z, 0.25)*1.0)+0.0);
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'ab = 1;'),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;'),
		'point_eqs_str' : ('s8 = sample*383;\n' + 's = 0.25;\n' + 'yy = ((sample*(465))%15 - 8)*s*2;\n' + 'zz = ((sample*31)%31 - 16)*s;\n' + 'xx = value1+ sin(time+yy*0.3)*1;\n' + 'd = sqrt( xx*xx + yy*yy + zz*zz);\n' + 'w = 1+d*0.0003*t6;\n' + 's1 = sin(t2*w);\n' + 's2 = sin(t3*w);\n' + 's3 = sin(t4*w);\n' + 'c1 = cos(t2*w);\n' + 'c2 = cos(t3*w);\n' + 'c3 = cos(t4*w);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'a = 500;\n' + 'zoom = 0.05*atan2(a-z,a);\n' + 'x = 0.5 + zoom*x1;\n' + 'y = 0.5 + zoom*y1;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = -z*0.5+t5;\n' + 'c = 10;\n' + 'r = sin(t)*c;\n' + 'g = sin(t+pi3)*c;\n' + 'b = sin(t-pi3)*c;\n' + 'j = 0.71;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);\n' + 'a = sigmoid(-z,0.25)*1.0+0.0;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.5,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 21.858635,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.166108,
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
			r2 : 0.080001,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.498314,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.998628,
			x : 0.5,
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
			b : 1.0,
			tex_ang : 2.576107,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.555954,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.215245,
			x : 0.5,
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
	'init_eqs_str' : ('x1 = 0;\n' + 'y1 = 0;'),
	'frame_eqs_str' : ('pi3 = 3.1415*2/3;\n' + 'c=0.5;\n' + 'monitor =5*sin(time);\n' + 'ib_r = 0.5+sin(c*time+pi3)*0.5;\n' + 'ib_g = 0.5+sin(c*time-pi3)*0.5;\n' + 'ib_b = 0.5+sin(c*time)*0.5;\n' + 'ab = ab*0.9 + sqr(mid_att*2);\n' + 'q6 =  ab*0.0005;\n' + 'q1 = 0;\n' + 'v = 0.01;\n' + 'j1 = j1*0.98 + sqr(bass_att*2);\n' + 'j2 = j2*0.98 + sqr(mid_att*2);\n' + 'j3 = j3*0.98 + sqr(treb_att*2);\n' + 'n = n + j1*0.00052;\n' + 'n1 = n1 + j2*0.00052;\n' + 'n2 = n2 + j3*0.00052;\n' + 'q2 = n*0.1;\n' + 'q3 = -n1*0.1;\n' + 'q4 = n2*0.15;\n' + 'k = k*0.995 + sqr(mid_att*2);\n' + 'q5 = -k*0.001;'),
	'pixel_eqs_str' : ('d = sqrt((x-0.5)*(x-0.5)+(y-0.5)*(y-0.5))*rad;\n' + 'n=15;\n' + 't = sin(time)*q5*5;\n' + 'w= q5*0.7*cos(time);\n' + 'v = 10;\n' + 'X2 = x-0.5;\n' + 'Y2 = y-0.5;\n' + 'X1 = sin(w)*X2 -cos(w)*Y2;\n' + 'Y1 = cos(w)*X2 +sin(w)*Y2;\n' + 'x = X1;\n' + 'y = Y1;\n' + 'dx1 = 0.01*(cos((-x+y)*n+t) + sin((x+y)*n+t));\n' + 'dy1 = 0.01*(cos((x-y)*n-t) + sin((-x-y)*n-t));\n' + 'dx2 = sin(-w)*dx1 - cos(-w)*dy1;\n' + 'dy2 = cos(-w)*dx1 + sin(-w)*dy1;\n' + 'dx = v*dx2;\n' + 'dy = v*dy2;'),
};

return pmap;
});
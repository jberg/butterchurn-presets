define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.4,
		ib_g : 0.0,
		mv_x : 44.8,
		warpscale : 0.325,
		brighten : 0.0,
		mv_y : 24.0,
		wave_scale : 1.0,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.2,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.75,
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
		ob_b : 1.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : -0.18,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 1.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.decay_g = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.basstime = 0;
m.decay_r = 0;
m.state = 0;
m.decay_b = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.basstime = (m.basstime+(m.bass*0.13));
m.q5 = m.basstime;
m.state = (m.state+2.5);
m.state = ifcond(above(m.state, 20), 0, m.state);
m.q1 = equal(m.state, 5);
m.q2 = equal(m.state, 10);
m.q3 = equal(m.state, 15);
m.q4 = equal(m.state, 20);
m.monitor = m.q1;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = ((Math.cos(m.time)*0.1)*Math.sin((m.rad+(m.time*0.9))));
m.decay_g = ((m.x*Math.sin((m.q5*1.1)))*5);
m.decay_r = ((m.y*Math.sin((m.q5*145)))*6);
m.decay_b = ((m.rad*Math.sin(m.q5))*7);
m.zoom = 1.0;
m.rot = 0.00;
m.warp = m.rad;
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 12.0,
			},
		'init_eqs' : function(m) {
m.angle3 = 0;
m.q1 = 0;
m.ss = 0;
m.xx = 0;
m.q5 = 0;
m.zcon = 0;
m.ycon = 0;
m.xcon = 0;
m.zd = 0;
m.f1 = 0;
m.yd = 0;
m.f2 = 0;
m.xd = 0;
m.f3 = 0;
m.zg = 0;
m.f4 = 0;
m.zsph = 0;
m.ysph = 0;
m.s = 0;
m.angle = 0;
m.xsph = 0;
m.u = 0;
m.yn = 0;
m.v = 0;
m.angfast = 0;
m.xn = 0;
m.zs = 0;
m.ys = 0;
m.xs = 0;
m.zcyl = 0;
m.ztor = 0;
m.ycyl = 0;
m.ytor = 0;
m.zx = 0;
m.xcyl = 0;
m.angle2 = 0;
m.xtor = 0;
m.yx = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.u = (Math.abs(Math.cos((m.q1*0.1)))*3.14159);
m.v = ((Math.abs(Math.cos((m.q1*0.015)))*3.14159)*2);
m.s = ((m.sample*3.14)*100);
m.ss = ((m.sample*6.28)*1000);
m.zg = (m.sample*0.1);
m.angfast = (Math.sin(((m.sample*6.28)+(m.q1*0.2)))*30.28);
m.xtor = ((0.6+(0.1*Math.cos(m.s)))*Math.cos(m.ss));
m.ytor = ((0.6+(0.1*Math.cos(m.s)))*Math.sin(m.ss));
m.ztor = (0.1*Math.sin(m.s));
m.xsph = ((0.6*Math.sin(m.s))*Math.cos(m.ss));
m.ysph = ((0.6*Math.sin(m.s))*Math.sin(m.ss));
m.zsph = (((0.6*Math.cos(m.s))*m.zg)*Math.cos(m.angfast));
m.xcon = ((0.6*Math.sin(m.s))*Math.cos(m.ss));
m.ycon = ((0.6*Math.sin(m.s))*Math.sin(m.ss));
m.zcon = (((0.6*Math.sin(m.s))*m.zg)*Math.cos(m.angfast));
m.xcyl = (0.6*Math.sin(m.s));
m.ycyl = (0.6*Math.cos(m.s));
m.zcyl = ((0.6*Math.cos(m.ss))*1.2);
m.f1 = Math.sin(((m.q5*0.1)-1.5707));
m.f2 = Math.sin((m.q5*0.1));
m.f3 = Math.sin(((m.q5*0.1)+1.5707));
m.f4 = Math.sin(((m.q5*0.1)+3.14));
m.f1 = (m.f1*above(m.f1, 0));
m.f2 = (m.f2*above(m.f2, 0));
m.f3 = (m.f3*above(m.f3, 0));
m.f4 = (m.f4*above(m.f4, 0));
m.xs = ((((m.f1*m.xsph)+(m.f2*m.xtor))-(m.f3*m.xcon))+(m.f4*m.xcyl));
m.ys = ((((m.f1*m.ysph)+(m.f2*m.ytor))-(m.f3*m.ycon))+(m.f4*m.ycyl));
m.zs = ((((m.f1*m.zsph)+(m.f2*m.ztor))-(m.f3*m.zcon))+(m.f4*m.zcyl));
m.angle = (Math.sin((m.q5*0.055))*6.28);
m.yx = ((m.ys*Math.cos(m.angle))-(m.zs*Math.sin(m.angle)));
m.zx = ((m.ys*Math.sin(m.angle))+(m.zs*Math.cos(m.angle)));
m.xx = m.xs;
m.angle2 = (Math.sin((m.q5*0.03))*6.28);
m.xd = ((m.xx*Math.cos(m.angle2))-(m.zx*Math.sin(m.angle2)));
m.zd = ((m.xx*Math.sin(m.angle2))+(m.zx*Math.cos(m.angle2)));
m.yd = m.yx;
m.angle3 = (Math.sin((m.q5*0.042))*6.28);
m.xn = ((m.xd*Math.cos(m.angle3))-(m.yd*Math.sin(m.angle3)));
m.yn = ((m.xd*Math.sin(m.angle3))+(m.yd*Math.cos(m.angle3)));
m.zd = m.zd;
m.x = (((m.xn*m.zd)*0.9)+0.5);
m.y = ((((m.yn*m.zd)*1.2)*0.9)+0.5);
m.r = (0.5+(0.5*Math.sin((((m.q5*1.2)+m.x)+m.x))));
m.g = (0.5+(0.5*Math.sin((((m.q5*1.5)+m.x)+m.y))));
m.b = (0.5+(0.5*Math.sin((((m.q5*1.36)+m.y)+m.y))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('u = abs(cos(q1*0.1))*3.14159;\n' + 'v = abs(cos(q1*0.015))*3.14159*2;\n' + 's = sample*3.14*100;\n' + 'ss = sample*6.28*1000;\n' + 'zg = sample*0.1;\n' + 'angfast = sin(sample*6.28 + q1*0.2)*30.28;\n' + 'xtor = (0.6 + 0.1*cos(s))*cos(ss);\n' + 'ytor = (0.6 + 0.1*cos(s))*sin(ss);\n' + 'ztor = 0.1*sin(s);\n' + 'xsph = 0.6*sin(s)*cos(ss);\n' + 'ysph = 0.6*sin(s)*sin(ss);\n' + 'zsph = 0.6*cos(s)*zg*cos(angfast);\n' + 'xcon = 0.6*sin(s)*cos(ss);\n' + 'ycon = 0.6*sin(s)*sin(ss);\n' + 'zcon = 0.6*sin(s)*zg*cos(angfast);\n' + 'xcyl = 0.6*sin(s);\n' + 'ycyl = 0.6*cos(s);\n' + 'zcyl = 0.6*cos(ss)*1.2;\n' + 'f1 = sin(q5*0.1 - 1.5707);\n' + 'f2 = sin(q5*0.1);\n' + 'f3 = sin(q5*0.1 + 1.5707);\n' + 'f4 = sin(q5*0.1 + 3.14);\n' + 'f1 = f1*above(f1,0);\n' + 'f2 = f2*above(f2,0);\n' + 'f3 = f3*above(f3,0);\n' + 'f4 = f4*above(f4,0);\n' + 'xs = f1*xsph + f2*xtor - f3*xcon + f4*xcyl;\n' + 'ys = f1*ysph + f2*ytor - f3*ycon + f4*ycyl;\n' + 'zs = f1*zsph + f2*ztor - f3*zcon + f4*zcyl;\n' + 'angle = sin(q5*0.055)*6.28;\n' + 'yx = ys*cos(angle) - zs*sin(angle);\n' + 'zx = ys*sin(angle) + zs*cos(angle);\n' + 'xx = xs;\n' + 'angle2 = sin(q5*0.03)*6.28;\n' + 'xd = xx*cos(angle2) - zx*sin(angle2);\n' + 'zd = xx*sin(angle2) + zx*cos(angle2);\n' + 'yd = yx;\n' + 'angle3 = sin(q5*0.042)*6.28;\n' + 'xn = xd*cos(angle3) - yd*sin(angle3);\n' + 'yn = xd*sin(angle3) + yd*cos(angle3);\n' + 'zd = zd;\n' + 'x = xn*zd*0.9 + 0.5;\n' + 'y = yn*zd*1.2*0.9 + 0.5;\n' + 'r = 0.5 + 0.5*sin(q5*1.2 + x + x);\n' + 'g = 0.5 + 0.5*sin(q5*1.5 + x + y);\n' + 'b = 0.5 + 0.5*sin(q5*1.36 + y + y);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 12.0,
			},
		'init_eqs' : function(m) {
m.angle3 = 0;
m.q1 = 0;
m.ss = 0;
m.xx = 0;
m.q5 = 0;
m.zcon = 0;
m.ycon = 0;
m.xcon = 0;
m.zd = 0;
m.f1 = 0;
m.yd = 0;
m.f2 = 0;
m.xd = 0;
m.f3 = 0;
m.zg = 0;
m.f4 = 0;
m.zsph = 0;
m.ysph = 0;
m.s = 0;
m.angle = 0;
m.xsph = 0;
m.u = 0;
m.yn = 0;
m.v = 0;
m.angfast = 0;
m.xn = 0;
m.zs = 0;
m.ys = 0;
m.xs = 0;
m.zcyl = 0;
m.ztor = 0;
m.ycyl = 0;
m.ytor = 0;
m.zx = 0;
m.xcyl = 0;
m.angle2 = 0;
m.xtor = 0;
m.yx = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.u = (Math.abs(Math.cos((m.q1*0.1)))*3.14159);
m.v = ((Math.abs(Math.cos((m.q1*0.015)))*3.14159)*2);
m.s = ((m.sample*3.14)*100);
m.ss = ((m.sample*6.28)*1000);
m.zg = (m.sample*0.1);
m.angfast = (Math.sin(((m.sample*6.28)+(m.q1*0.2)))*30.28);
m.xtor = ((0.6+(0.1*Math.cos(m.s)))*Math.cos(m.ss));
m.ytor = ((0.6+(0.1*Math.cos(m.s)))*Math.sin(m.ss));
m.ztor = (0.1*Math.sin(m.s));
m.xsph = ((0.6*Math.sin(m.s))*Math.cos(m.ss));
m.ysph = ((0.6*Math.sin(m.s))*Math.sin(m.ss));
m.zsph = (((0.6*Math.cos(m.s))*m.zg)*Math.cos(m.angfast));
m.xcon = ((0.6*Math.sin(m.s))*Math.cos(m.ss));
m.ycon = ((0.6*Math.sin(m.s))*Math.sin(m.ss));
m.zcon = (((0.6*Math.sin(m.s))*m.zg)*Math.cos(m.angfast));
m.xcyl = (0.6*Math.sin(m.s));
m.ycyl = (0.6*Math.cos(m.s));
m.zcyl = ((0.6*Math.cos(m.ss))*1.2);
m.f1 = Math.sin(((m.q5*0.1)-1.5707));
m.f2 = Math.sin((m.q5*0.1));
m.f3 = Math.sin(((m.q5*0.1)+1.5707));
m.f4 = Math.sin(((m.q5*0.1)+3.14));
m.f1 = (m.f1*above(m.f1, 0));
m.f2 = (m.f2*above(m.f2, 0));
m.f3 = (m.f3*above(m.f3, 0));
m.f4 = (m.f4*above(m.f4, 0));
m.xs = ((((m.f1*m.xsph)+(m.f2*m.xtor))-(m.f3*m.xcon))+(m.f4*m.xcyl));
m.ys = ((((m.f1*m.ysph)+(m.f2*m.ytor))-(m.f3*m.ycon))+(m.f4*m.ycyl));
m.zs = ((((m.f1*m.zsph)+(m.f2*m.ztor))-(m.f3*m.zcon))+(m.f4*m.zcyl));
m.angle = (Math.sin((m.q5*0.055))*6.28);
m.yx = ((m.ys*Math.cos(m.angle))-(m.zs*Math.sin(m.angle)));
m.zx = ((m.ys*Math.sin(m.angle))+(m.zs*Math.cos(m.angle)));
m.xx = m.xs;
m.angle2 = (Math.sin((m.q5*0.03))*6.28);
m.xd = ((m.xx*Math.cos(m.angle2))-(m.zx*Math.sin(m.angle2)));
m.zd = ((m.xx*Math.sin(m.angle2))+(m.zx*Math.cos(m.angle2)));
m.yd = m.yx;
m.angle3 = (Math.sin((m.q5*0.042))*6.28);
m.xn = ((m.xd*Math.cos(m.angle3))-(m.yd*Math.sin(m.angle3)));
m.yn = ((m.xd*Math.sin(m.angle3))+(m.yd*Math.cos(m.angle3)));
m.zd = m.zd;
m.x = (((m.xn*m.zd)*0.9)+0.5);
m.y = ((((m.yn*m.zd)*1.2)*0.9)+0.5);
m.r = 1;
m.g = 1;
m.b = 1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('u = abs(cos(q1*0.1))*3.14159;\n' + 'v = abs(cos(q1*0.015))*3.14159*2;\n' + 's = sample*3.14*100;\n' + 'ss = sample*6.28*1000;\n' + 'zg = sample*0.1;\n' + 'angfast = sin(sample*6.28 + q1*0.2)*30.28;\n' + 'xtor = (0.6 + 0.1*cos(s))*cos(ss);\n' + 'ytor = (0.6 + 0.1*cos(s))*sin(ss);\n' + 'ztor = 0.1*sin(s);\n' + 'xsph = 0.6*sin(s)*cos(ss);\n' + 'ysph = 0.6*sin(s)*sin(ss);\n' + 'zsph = 0.6*cos(s)*zg*cos(angfast);\n' + 'xcon = 0.6*sin(s)*cos(ss);\n' + 'ycon = 0.6*sin(s)*sin(ss);\n' + 'zcon = 0.6*sin(s)*zg*cos(angfast);\n' + 'xcyl = 0.6*sin(s);\n' + 'ycyl = 0.6*cos(s);\n' + 'zcyl = 0.6*cos(ss)*1.2;\n' + 'f1 = sin(q5*0.1 - 1.5707);\n' + 'f2 = sin(q5*0.1);\n' + 'f3 = sin(q5*0.1 + 1.5707);\n' + 'f4 = sin(q5*0.1 + 3.14);\n' + 'f1 = f1*above(f1,0);\n' + 'f2 = f2*above(f2,0);\n' + 'f3 = f3*above(f3,0);\n' + 'f4 = f4*above(f4,0);\n' + 'xs = f1*xsph + f2*xtor - f3*xcon + f4*xcyl;\n' + 'ys = f1*ysph + f2*ytor - f3*ycon + f4*ycyl;\n' + 'zs = f1*zsph + f2*ztor - f3*zcon + f4*zcyl;\n' + 'angle = sin(q5*0.055)*6.28;\n' + 'yx = ys*cos(angle) - zs*sin(angle);\n' + 'zx = ys*sin(angle) + zs*cos(angle);\n' + 'xx = xs;\n' + 'angle2 = sin(q5*0.03)*6.28;\n' + 'xd = xx*cos(angle2) - zx*sin(angle2);\n' + 'zd = xx*sin(angle2) + zx*cos(angle2);\n' + 'yd = yx;\n' + 'angle3 = sin(q5*0.042)*6.28;\n' + 'xn = xd*cos(angle3) - yd*sin(angle3);\n' + 'yn = xd*sin(angle3) + yd*cos(angle3);\n' + 'zd = zd;\n' + 'x = xn*zd*0.9 + 0.5;\n' + 'y = yn*zd*1.2*0.9 + 0.5;\n' + 'r = 1;\n' + 'g = 1;\n' + 'b = 1;'),

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
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.speed = 0;
m.v = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = ['ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.speed = (m.bass*0.3);
m.v = ((m.sample*10000)+((m.value2*m.bass)*0.1));
m.xs = (m.xs+(((equal(0, m.q1)*Math.sin((m.v*1)))*m.speed)*Math.atan((m.v*1.51))));
m.ys = (m.ys+((equal(0, m.q1)*Math.sin((m.v*1)))*m.speed));
m.x = (0.5+((0.5*Math.sin((m.xs*0.1)))*Math.cos(((m.time*2)+m.xs))));
m.y = (0.5+((0.5*Math.sin((m.ys*0.1)))*Math.cos(((m.time*2.1)+m.xs))));
m.x = (m.x+(m.sample*0.1));
m.x = ((m.x*0.6)+0.2);
m.y = (m.y+(m.bass*0.1));
m.y = (m.y*0.8);
m.r = ((0.5+(0.5*Math.sin((m.time*6.22))))+0.1);
m.g = (0.4+(0.4*Math.sin((m.time*5.307))));
m.b = (0.4+((0.4*Math.sin((m.time*4.959)))*m.x));
m.xs = ifcond(above(m.xs, 1000), 0, m.xs);
m.ys = ifcond(above(m.ys, 1000), 0, m.ys);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('speed = bass*0.3;\n' + 'v = sample*10000 + value2*bass*0.1;\n' + 'xs = xs + (equal(0,q1))*sin(v*1)*speed*atan(v*1.51);\n' + 'ys = ys + (equal(0,q1))*sin(v*1)*speed;\n' + 'x = 0.5 + 0.5*sin(xs*0.1)*cos(time*2 + xs);\n' + 'y = 0.5 + 0.5*sin(ys*0.1)*cos(time*2.1 + xs);\n' + 'x = x + sample*0.1;\n' + 'x = x*0.6 + 0.2;\n' + 'y = y + bass*0.1;\n' + 'y = y*0.8;\n' + 'r = 0.5 + 0.5*sin(time*6.22) + 0.1;\n' + 'g = 0.4 + 0.4*sin(time*5.307);\n' + 'b = 0.4 + 0.4*sin(time*4.959)*x;\n' + 'xs = if(above(xs,1000),0 ,xs);\n' + 'ys = if(above(ys,1000),0 ,ys);'),

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
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.speed = 0;
m.v = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = ['ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.speed = (m.bass*0.1);
m.v = ((m.sample*10000)+((m.value2*m.bass)*0.1));
m.xs = (m.xs+(((equal(0, m.q1)*Math.sin((m.v*1)))*m.speed)*Math.atan((m.v*1.51))));
m.ys = (m.ys+((equal(0, m.q1)*Math.sin((m.v*1)))*m.speed));
m.x = (0.5+((0.5*Math.sin((m.xs*0.1)))*Math.cos(((m.time*2)+m.xs))));
m.y = (0.5+((0.5*Math.sin((m.ys*0.1)))*Math.cos(((m.time*2.1)+m.xs))));
m.y = (m.y-(m.sample*0.1));
m.x = ((m.x*0.6)+0.2);
m.y = (m.y+(m.bass*0.1));
m.y = (m.y*0.8);
m.r = ((0.5+(0.5*Math.sin((m.time*6.22))))+0.1);
m.g = (0.4+(0.4*Math.sin((m.time*5.307))));
m.b = (0.4+((0.4*Math.sin((m.time*4.959)))*m.x));
m.xs = ifcond(above(m.xs, 1000), 0, m.xs);
m.ys = ifcond(above(m.ys, 1000), 0, m.ys);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('speed = bass*0.1;\n' + 'v = sample*10000 + value2*bass*0.1;\n' + 'xs = xs + (equal(0,q1))*sin(v*1)*speed*atan(v*1.51);\n' + 'ys = ys + (equal(0,q1))*sin(v*1)*speed;\n' + 'x = 0.5 + 0.5*sin(xs*0.1)*cos(time*2 + xs);\n' + 'y = 0.5 + 0.5*sin(ys*0.1)*cos(time*2.1 + xs);\n' + 'y = y - sample*0.1;\n' + 'x = x*0.6 + 0.2;\n' + 'y = y + bass*0.1;\n' + 'y = y*0.8;\n' + 'r = 0.5 + 0.5*sin(time*6.22) + 0.1;\n' + 'g = 0.4 + 0.4*sin(time*5.307);\n' + 'b = 0.4 + 0.4*sin(time*4.959)*x;\n' + 'xs = if(above(xs,1000),0 ,xs);\n' + 'ys = if(above(ys,1000),0 ,ys);'),

		}
],
	'shapes' : [
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
			tex_zoom : 0.27425,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 1.0,
			rad : 2.6671,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q5 = 0;
m.saw = 0;
m.tex_capture = 0;

			m.rkeys = ['saw'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_capture = m.q1;
m.r = (0.5+(0.5*Math.sin((m.q5*1.02))));
m.g = (0.5+(0.5*Math.sin((m.q5*1.52))));
m.b = (0.5+(0.5*Math.sin((m.q5*1.982))));
m.r2 = (0.5+(0.5*Math.sin((m.q5*0.32))));
m.g2 = (0.5+(0.5*Math.sin((m.q5*0.32))));
m.b2 = (0.5+(0.5*Math.sin((m.q5*0.2382))));
m.saw = (m.saw-(0.001*m.bass));
m.saw = ifcond(below(m.saw, 0.1), 0.6, m.saw);
m.tex_zoom = m.saw;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_capture  = q1;\n' + 'r = 0.5 +0.5*sin(q5*1.02);\n' + 'g = 0.5 +0.5*sin(q5*1.52);\n' + 'b = 0.5 +0.5*sin(q5*1.982);\n' + 'r2 = 0.5 +0.5*sin(q5*0.32);\n' + 'g2 = 0.5 +0.5*sin(q5*0.32);\n' + 'b2 = 0.5 +0.5*sin(q5*0.2382);\n' + 'saw = saw - 0.001*bass;\n' + 'saw = if(below(saw,0.1),0.6,saw);\n' + 'tex_zoom = saw;'),

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
			tex_zoom : 0.30293,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 1.0,
			rad : 2.66718,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.q5 = 0;
m.saw = 0;
m.tex_capture = 0;

			m.rkeys = ['saw'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_capture = m.q2;
m.r = (0.5+(0.5*Math.sin((m.q5*1.12))));
m.g = (0.5+(0.5*Math.sin((m.q5*1.468))));
m.b = (0.5+(0.5*Math.sin((m.q5*1.378))));
m.r2 = (0.5+(0.5*Math.sin((m.q5*0.62))));
m.g2 = (0.5+(0.5*Math.sin((m.q5*0.72))));
m.b2 = (0.5+(0.5*Math.sin((m.q5*0.872))));
m.saw = (m.saw-(0.0011*m.mid));
m.saw = ifcond(below(m.saw, 0.1), 0.6, m.saw);
m.tex_zoom = m.saw;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_capture  = q2;\n' + 'r = 0.5 +0.5*sin(q5*1.12);\n' + 'g = 0.5 +0.5*sin(q5*1.468);\n' + 'b = 0.5 +0.5*sin(q5*1.378);\n' + 'r2 = 0.5 +0.5*sin(q5*0.62);\n' + 'g2 = 0.5 +0.5*sin(q5*0.72);\n' + 'b2 = 0.5 +0.5*sin(q5*0.872);\n' + 'saw = saw - 0.0011*mid;\n' + 'saw = if(below(saw,0.1),0.6,saw);\n' + 'tex_zoom = saw;'),

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
			tex_zoom : 0.36964,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 1.0,
			rad : 2.66718,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.q5 = 0;
m.saw = 0;
m.tex_capture = 0;

			m.rkeys = ['saw'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_capture = m.q3;
m.r = (0.5+(0.5*Math.sin((m.q5*1.12))));
m.g = (0.5+(0.5*Math.sin((m.q5*1.92))));
m.b = (0.5+(0.5*Math.sin((m.q5*1.782))));
m.r = (0.5+(0.5*Math.sin((m.q5*0.65))));
m.g = (0.5+(0.5*Math.sin((m.q5*0.2))));
m.b = (0.5+(0.5*Math.sin((m.q5*0.182))));
m.saw = (m.saw+(0.00143*m.treb));
m.saw = ifcond(above(m.saw, 0.6), 0.1, m.saw);
m.tex_zoom = m.saw;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_capture  = q3;\n' + 'r = 0.5 +0.5*sin(q5*1.12);\n' + 'g = 0.5 +0.5*sin(q5*1.92);\n' + 'b = 0.5 +0.5*sin(q5*1.782);\n' + 'r = 0.5 +0.5*sin(q5*0.65);\n' + 'g = 0.5 +0.5*sin(q5*0.2);\n' + 'b = 0.5 +0.5*sin(q5*0.182);\n' + 'saw = saw + 0.00143*treb;\n' + 'saw = if(above(saw,0.6),0.1,saw);\n' + 'tex_zoom = saw;'),

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
			tex_zoom : 0.30294,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 1.0,
			rad : 2.66718,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;
m.saw = 0;
m.tex_capture = 0;

			m.rkeys = ['saw'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_capture = m.q4;
m.r = (0.5+(0.5*Math.sin((m.q5*1.32))));
m.g = (0.5+(0.5*Math.sin((m.q5*1.52))));
m.b = (0.5+(0.5*Math.sin((m.q5*1.882))));
m.r = (0.5+(0.5*Math.sin((m.q5*0.72))));
m.g = (0.5+(0.5*Math.sin((m.q5*0.62))));
m.b = (0.5+(0.5*Math.sin((m.q5*0.5482))));
m.saw = (m.saw+(0.00178*m.bass));
m.saw = ifcond(above(m.saw, 0.6), 0.1, m.saw);
m.tex_zoom = m.saw;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_capture  = q4;\n' + 'r = 0.5 + 0.5*sin(q5*1.32);\n' + 'g = 0.5 + 0.5*sin(q5*1.52);\n' + 'b = 0.5 + 0.5*sin(q5*1.882);\n' + 'r = 0.5 +0.5*sin(q5*0.72);\n' + 'g = 0.5 +0.5*sin(q5*0.62);\n' + 'b = 0.5 +0.5*sin(q5*0.5482);\n' + 'saw = saw + 0.00178*bass;\n' + 'saw = if(above(saw,0.6),0.1,saw);\n' + 'tex_zoom = saw;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('basstime = basstime  + bass*0.13;\n' + 'q5 = basstime;\n' + 'state = state + 2.5;\n' + 'state = if(above(state,20),0,state);\n' + 'q1 = (equal(state,5));\n' + 'q2 = (equal(state,10));\n' + 'q3 = (equal(state,15));\n' + 'q4 = (equal(state,20));\n' + 'monitor = q1;'),
	'pixel_eqs_str' : ('rot = cos(time)*0.1*sin(rad+time*0.9);\n' + 'decay_g = x*sin(q5*1.1)*5;\n' + 'decay_r = y*sin(q5*145)*6;\n' + 'decay_b = rad*sin(q5)*7;\n' + 'zoom = 1.0;\n' + 'rot = 0.00;\n' + 'warp = rad;'),
};

return pmap;
});
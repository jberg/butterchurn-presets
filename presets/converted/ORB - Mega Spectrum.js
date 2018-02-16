define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.0,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 5.2E-4,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 1.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.96,
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
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
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
m.q5 = 0;
m.stickybit = 0;
m.diff = 0;
m.bit2 = 0;
m.sample1 = 0;
m.sample2 = 0;
m.basstime = 0;
m.basssum = 0;
m.decay_r = 0;
m.rarr = 0;
m.state = 0;
m.difftime = 0;
m.vol = 0;
m.volavg2 = 0;
m.decay_b = 0;
m.edge = 0;
m.volavg = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.basstime = (m.basstime+(m.bass*0.03));
m.q1 = m.basstime;
m.basstime = (m.basstime+(m.bass_att*0.03));
m.vol = pow(((m.bass+m.mid)+m.treb), 2);
m.basssum = m.vol;
m.stickybit = mod(m.time,2);
m.volavg = (m.volavg+(m.vol*equal(m.stickybit, 1)));
m.sample1 = (m.sample1+equal(m.stickybit, 1));
m.volavg2 = (m.volavg2+(m.vol*equal(m.stickybit, 0)));
m.sample2 = (m.sample2+equal(m.stickybit, 0));
m.edge = bnot(equal(m.bit2, m.stickybit));
m.volavg = (m.volavg-((m.volavg*m.edge)*m.stickybit));
m.volavg2 = (m.volavg2-((m.volavg2*m.edge)*equal(m.stickybit, 0)));
m.sample1 = (m.sample1-((m.sample1*m.edge)*m.stickybit));
m.sample2 = (m.sample2-((m.sample2*m.edge)*equal(m.stickybit, 0)));
m.diff = ifcond(equal(m.stickybit, 1), div(m.basssum,div(m.volavg2,m.sample2)), 0);
m.diff = ifcond(equal(m.stickybit, 0), div(m.basssum,div(m.volavg,m.sample1)), m.diff);
m.q3 = m.diff;
m.bit2 = mod(m.time,2);
m.difftime = (m.difftime+(m.diff*0.03));
m.q2 = m.difftime;
m.state = (m.state+above(m.diff, 5));
m.state = ifcond(above(m.state, 2), 0, m.state);
m.monitor = m.state;
m.q5 = m.state;
m.difftime = ifcond(above(m.difftime, 2000), 0, m.difftime);
m.rarr = (rand(100)*0.01);
m.decay_r = (0.6+(0.2*Math.abs(Math.sin((m.diff+m.rarr)))));
m.decay_g = (0.6+(0.25*Math.abs(Math.cos((m.diff+m.rarr)))));
m.decay_b = (0.6+(0.30*Math.abs(Math.atan((m.diff+m.rarr)))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1+(0.05*m.q3));
m.zoom = 1;
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.2,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.88026,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.angle3 = 0;
m.q1 = 0;
m.ss = 0;
m.xx = 0;
m.q5 = 0;
m.level = 0;
m.zd = 0;
m.yd = 0;
m.xd = 0;
m.s = 0;
m.angle = 0;
m.u = 0;
m.yn = 0;
m.v = 0;
m.peek1 = 0;
m.xn = 0;
m.zs = 0;
m.ys = 0;
m.xs = 0;
m.ztor = 0;
m.ytor = 0;
m.zx = 0;
m.angle2 = 0;
m.xtor = 0;
m.yx = 0;

			m.rkeys = ['level'];
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
m.xs = (((((0.5*Math.sin(m.s))*Math.cos(m.ss))*equal(m.q5, 0))+(((0.6+(0.1*Math.cos(m.s)))*Math.cos(m.ss))*equal(m.q5, 1)))+(((0.5*Math.sin(m.s))*Math.cos(m.ss))*equal(m.q5, 2)));
m.ys = (((((0.5*Math.sin(m.s))*Math.sin(m.ss))*equal(m.q5, 0))+(((0.6+(0.1*Math.cos(m.s)))*Math.sin(m.ss))*equal(m.q5, 1)))+(((0.5*Math.sin(m.s))*Math.sin(m.ss))*equal(m.q5, 2)));
m.zs = ((((0.5*Math.cos(m.s))*equal(m.q5, 0))+((0.1*Math.sin(m.s))*equal(m.q5, 1)))+((0.5*Math.sin(m.s))*equal(m.q5, 2)));
m.xtor = ((0.6+(0.1*Math.cos(m.s)))*Math.cos(m.ss));
m.ytor = ((0.6+(0.1*Math.cos(m.s)))*Math.sin(m.ss));
m.ztor = (0.1*Math.sin(m.s));
m.angle = (m.q1*0.3);
m.yx = ((m.ys*Math.cos(m.angle))-(m.zs*Math.sin(m.angle)));
m.zx = ((m.ys*Math.sin(m.angle))+(m.zs*Math.cos(m.angle)));
m.xx = m.xs;
m.angle2 = (m.q1*0.5);
m.xd = ((m.xx*Math.cos(m.angle2))-(m.zx*Math.sin(m.angle2)));
m.zd = ((m.xx*Math.sin(m.angle2))+(m.zx*Math.cos(m.angle2)));
m.yd = m.yx;
m.angle3 = (m.q1*0.41);
m.xn = ((m.xd*Math.cos(m.angle3))-(m.yd*Math.sin(m.angle3)));
m.yn = ((m.xd*Math.sin(m.angle3))+(m.yd*Math.cos(m.angle3)));
m.zd = (m.zd+2);
m.peek1 = ((m.value1+m.value2)*10);
m.level = ifcond(above(m.peek1, m.level), m.peek1, (m.level-0.00025));
m.level = ifcond(below(m.level, 0), 0, m.level);
m.zd = ((m.zd+2)+m.level);
m.x = (((m.xn*m.zd)*0.05)+0.5);
m.y = ((((m.yn*m.zd)*0.05)*1.2)+0.5);
m.r = (0.5+(0.5*Math.sin((((m.q1*1.2)+m.x)+m.x))));
m.g = (0.5+(0.5*Math.sin((((m.q1*1.5)+m.x)+m.y))));
m.b = (0.5+(0.5*Math.sin((((m.q1*1.36)+m.y)+m.y))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('u = abs(cos(q1*0.1))*3.14159;\n' + 'v = abs(cos(q1*0.015))*3.14159*2;\n' + 's = sample*3.14*100;\n' + 'ss = sample*6.28*1000;\n' + 'xs = 0.5*sin(s)*cos(ss)*equal(q5,0) +(0.6 + 0.1*cos(s))*cos(ss)*equal(q5,1) +0.5*sin(s)*cos(ss)*equal(q5,2);\n' + 'ys = 0.5*sin(s)*sin(ss)*equal(q5,0) +(0.6 + 0.1*cos(s))*sin(ss)*equal(q5,1) +0.5*sin(s)*sin(ss)*equal(q5,2);\n' + 'zs = 0.5*cos(s)*equal(q5,0) +0.1*sin(s)*equal(q5,1) +0.5*sin(s)*equal(q5,2);\n' + 'xtor = (0.6 + 0.1*cos(s))*cos(ss);\n' + 'ytor = (0.6 + 0.1*cos(s))*sin(ss);\n' + 'ztor = 0.1*sin(s);\n' + 'angle = q1*0.3;\n' + 'yx = ys*cos(angle) - zs*sin(angle);\n' + 'zx = ys*sin(angle) + zs*cos(angle);\n' + 'xx = xs;\n' + 'angle2 = q1*0.5;\n' + 'xd = xx*cos(angle2) - zx*sin(angle2);\n' + 'zd = xx*sin(angle2) + zx*cos(angle2);\n' + 'yd = yx;\n' + 'angle3 = q1*0.41;\n' + 'xn = xd*cos(angle3) - yd*sin(angle3);\n' + 'yn = xd*sin(angle3) + yd*cos(angle3);\n' + 'zd = zd + 2;\n' + 'peek1 = (value1 + value2)*10;\n' + 'level = if(above(peek1,level),peek1,level - 0.00025);\n' + 'level = if(below(level,0),0,level);\n' + 'zd = zd + 2  + level;\n' + 'x = xn*zd*0.05 + 0.5;\n' + 'y = yn*zd*0.05*1.2 + 0.5;\n' + 'r = 0.5 + 0.5*sin(q1*1.2 + x + x);\n' + 'g = 0.5 + 0.5*sin(q1*1.5 + x + y);\n' + 'b = 0.5 + 0.5*sin(q1*1.36 + y + y);'),

		},
		{
		'baseVals' : {
			a : 0.2,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.88026,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.angle3 = 0;
m.q1 = 0;
m.ss = 0;
m.xx = 0;
m.q5 = 0;
m.level = 0;
m.zd = 0;
m.yd = 0;
m.xd = 0;
m.s = 0;
m.angle = 0;
m.u = 0;
m.yn = 0;
m.v = 0;
m.peek1 = 0;
m.xn = 0;
m.zs = 0;
m.ys = 0;
m.xs = 0;
m.ztor = 0;
m.ytor = 0;
m.zx = 0;
m.angle2 = 0;
m.xtor = 0;
m.yx = 0;

			m.rkeys = ['level'];
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
m.xs = (((((0.5*Math.sin(m.s))*Math.cos(m.ss))*equal(m.q5, 2))+(((0.6+(0.1*Math.cos(m.s)))*Math.cos(m.ss))*equal(m.q5, 0)))+(((0.5*Math.sin(m.s))*Math.cos(m.ss))*equal(m.q5, 1)));
m.ys = (((((0.5*Math.sin(m.s))*Math.sin(m.ss))*equal(m.q5, 2))+(((0.6+(0.1*Math.cos(m.s)))*Math.sin(m.ss))*equal(m.q5, 0)))+(((0.5*Math.sin(m.s))*Math.sin(m.ss))*equal(m.q5, 1)));
m.zs = ((((0.5*Math.cos(m.s))*equal(m.q5, 2))+((0.1*Math.sin(m.s))*equal(m.q5, 0)))+((0.5*Math.sin(m.s))*equal(m.q5, 1)));
m.xtor = ((0.6+(0.1*Math.cos(m.s)))*Math.cos(m.ss));
m.ytor = ((0.6+(0.1*Math.cos(m.s)))*Math.sin(m.ss));
m.ztor = (0.1*Math.sin(m.s));
m.angle = (m.q1*0.3);
m.yx = ((m.ys*Math.cos(m.angle))-(m.zs*Math.sin(m.angle)));
m.zx = ((m.ys*Math.sin(m.angle))+(m.zs*Math.cos(m.angle)));
m.xx = m.xs;
m.angle2 = (m.q1*0.5);
m.xd = ((m.xx*Math.cos(m.angle2))-(m.zx*Math.sin(m.angle2)));
m.zd = ((m.xx*Math.sin(m.angle2))+(m.zx*Math.cos(m.angle2)));
m.yd = m.yx;
m.angle3 = (m.q1*0.41);
m.xn = ((m.xd*Math.cos(m.angle3))-(m.yd*Math.sin(m.angle3)));
m.yn = ((m.xd*Math.sin(m.angle3))+(m.yd*Math.cos(m.angle3)));
m.zd = (m.zd+2);
m.peek1 = ((m.value1+m.value2)*10);
m.level = ifcond(above(m.peek1, m.level), m.peek1, (m.level-0.00025));
m.level = ifcond(below(m.level, 0), 0, m.level);
m.zd = ((m.zd+2)+m.level);
m.x = (((m.xn*m.zd)*0.05)+0.5);
m.y = ((((m.yn*m.zd)*0.05)*1.2)+0.5);
m.r = (0.5+(0.5*Math.sin((((m.q1*1.2)+m.x)+m.x))));
m.g = (0.5+(0.5*Math.sin((((m.q1*1.5)+m.x)+m.y))));
m.b = (0.5+(0.5*Math.sin((((m.q1*1.16)+m.y)+m.y))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('u = abs(cos(q1*0.1))*3.14159;\n' + 'v = abs(cos(q1*0.015))*3.14159*2;\n' + 's = sample*3.14*100;\n' + 'ss = sample*6.28*1000;\n' + 'xs = 0.5*sin(s)*cos(ss)*equal(q5,2) +(0.6 + 0.1*cos(s))*cos(ss)*equal(q5,0) +0.5*sin(s)*cos(ss)*equal(q5,1);\n' + 'ys = 0.5*sin(s)*sin(ss)*equal(q5,2) +(0.6 + 0.1*cos(s))*sin(ss)*equal(q5,0) +0.5*sin(s)*sin(ss)*equal(q5,1);\n' + 'zs = 0.5*cos(s)*equal(q5,2) +0.1*sin(s)*equal(q5,0) +0.5*sin(s)*equal(q5,1);\n' + 'xtor = (0.6 + 0.1*cos(s))*cos(ss);\n' + 'ytor = (0.6 + 0.1*cos(s))*sin(ss);\n' + 'ztor = 0.1*sin(s);\n' + 'angle = q1*0.3;\n' + 'yx = ys*cos(angle) - zs*sin(angle);\n' + 'zx = ys*sin(angle) + zs*cos(angle);\n' + 'xx = xs;\n' + 'angle2 = q1*0.5;\n' + 'xd = xx*cos(angle2) - zx*sin(angle2);\n' + 'zd = xx*sin(angle2) + zx*cos(angle2);\n' + 'yd = yx;\n' + 'angle3 = q1*0.41;\n' + 'xn = xd*cos(angle3) - yd*sin(angle3);\n' + 'yn = xd*sin(angle3) + yd*cos(angle3);\n' + 'zd = zd + 2;\n' + 'peek1 = (value1 + value2)*10;\n' + 'level = if(above(peek1,level),peek1,level - 0.00025);\n' + 'level = if(below(level,0),0,level);\n' + 'zd = zd + 2  + level;\n' + 'x = xn*zd*0.05 + 0.5;\n' + 'y = yn*zd*0.05*1.2 + 0.5;\n' + 'r = 0.5 + 0.5*sin(q1*1.2 + x + x);\n' + 'g = 0.5 + 0.5*sin(q1*1.5 + x + y);\n' + 'b = 0.5 + 0.5*sin(q1*1.16 + y + y);'),

		},
		{
		'baseVals' : {
			a : 0.5,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.ss = 0;
m.xx = 0;
m.zd = 0;
m.yd = 0;
m.xd = 0;
m.s = 0;
m.angle = 0;
m.u = 0;
m.v = 0;
m.zs = 0;
m.ys = 0;
m.xs = 0;
m.zx = 0;
m.angle2 = 0;
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
m.s = (m.sample*3.14);
m.ss = ((m.sample*6.28)*100);
m.xs = ((0.5*Math.sin(m.s))*Math.cos(m.ss));
m.ys = ((0.5*Math.sin(m.s))*Math.sin(m.ss));
m.zs = (0.5*Math.sin(m.s));
m.angle = Math.sin(((m.q1*0.15)+3.14));
m.yx = ((m.ys*Math.cos(m.angle))-(m.zs*Math.sin(m.angle)));
m.zx = ((m.ys*Math.sin(m.angle))+(m.zs*Math.cos(m.angle)));
m.xx = m.xs;
m.angle2 = Math.sin(((m.q1*0.2)+3.14));
m.xd = ((m.xx*Math.cos(m.angle2))-(m.zx*Math.sin(m.angle2)));
m.zd = ((m.xx*Math.sin(m.angle2))+(m.zx*Math.cos(m.angle2)));
m.yd = m.yx;
m.zd = (m.zd+2);
m.x = ((((m.xd*m.zd)*0.3)*1.2)+0.5);
m.y = ((((m.yd*m.zd)*0.3)*1.2)+0.5);
m.r = (0.5+(0.5*Math.sin((((m.q1*1.2)+m.x)+m.x))));
m.g = (0.5+(0.5*Math.sin((((m.q1*1.5)+m.x)+m.y))));
m.b = (0.5+(0.5*Math.sin((((m.q1*1.36)+m.y)+m.y))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('u = abs(cos(q1*0.1))*3.14159;\n' + 'v = abs(cos(q1*0.015))*3.14159*2;\n' + 's = sample*3.14;\n' + 'ss = sample*6.28*100;\n' + 'xs = 0.5*sin(s)*cos(ss);\n' + 'ys = 0.5*sin(s)*sin(ss);\n' + 'zs = 0.5*sin(s);\n' + 'angle = sin(q1*0.15 + 3.14);\n' + 'yx = ys*cos(angle) - zs*sin(angle);\n' + 'zx = ys*sin(angle) + zs*cos(angle);\n' + 'xx = xs;\n' + 'angle2 = sin(q1*0.2 + 3.14);\n' + 'xd = xx*cos(angle2) - zx*sin(angle2);\n' + 'zd = xx*sin(angle2) + zx*cos(angle2);\n' + 'yd = yx;\n' + 'zd = zd + 2;\n' + 'x = xd*zd*0.3*1.2 + 0.5;\n' + 'y = yd*zd*0.3*1.2 + 0.5;\n' + 'r = 0.5 + 0.5*sin(q1*1.2 + x + x);\n' + 'g = 0.5 + 0.5*sin(q1*1.5 + x + y);\n' + 'b = 0.5 + 0.5*sin(q1*1.36 + y + y);'),

		},
		{
		'baseVals' : {
			a : 0.5,
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
m.q1 = 0;
m.xx = 0;
m.zd = 0;
m.yd = 0;
m.xd = 0;
m.s = 0;
m.angle = 0;
m.u = 0;
m.v = 0;
m.zs = 0;
m.ys = 0;
m.xs = 0;
m.zx = 0;
m.angle2 = 0;
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
m.s = (m.sample*20);
m.xs = ((0.5*Math.sin(m.s))*Math.cos((m.s*m.v)));
m.ys = ((0.5*Math.sin(m.s))*Math.sin((m.s*m.v)));
m.zs = (0.5*Math.sin(m.u));
m.angle = Math.sin(((m.q1*0.15)-1.57));
m.yx = ((m.ys*Math.cos(m.angle))-(m.zs*Math.sin(m.angle)));
m.zx = ((m.ys*Math.sin(m.angle))+(m.zs*Math.cos(m.angle)));
m.xx = m.xs;
m.xd = ((m.xx*Math.cos(m.angle2))-(m.zx*Math.sin(m.angle2)));
m.zd = ((m.xx*Math.sin(m.angle2))+(m.zx*Math.cos(m.angle2)));
m.yd = m.yx;
m.x = ((m.xd*m.zd)+0.5);
m.y = ((m.yd*m.zd)+0.5);
m.r = (0.5+(0.5*Math.sin((((m.q1*1.2)+m.x)+m.x))));
m.g = (0.5+(0.5*Math.sin((((m.q1*1.5)+m.x)+m.y))));
m.b = (0.5+(0.5*Math.sin((((m.q1*1.36)+m.y)+m.y))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('u = abs(cos(q1*0.1))*3.14159;\n' + 'v = abs(cos(q1*0.015))*3.14159*2;\n' + 's = sample*20;\n' + 'xs = 0.5*sin(s)*cos(s*v);\n' + 'ys = 0.5*sin(s)*sin(s*v);\n' + 'zs = 0.5*sin(u);\n' + 'angle = sin(q1*0.15 - 1.57);\n' + 'yx = ys*cos(angle) - zs*sin(angle);\n' + 'zx = ys*sin(angle) + zs*cos(angle);\n' + 'xx = xs;\n' + 'xd = xx*cos(angle2) - zx*sin(angle2);\n' + 'zd = xx*sin(angle2) + zx*cos(angle2);\n' + 'yd = yx;\n' + 'x = xd*zd + 0.5;\n' + 'y = yd*zd + 0.5;\n' + 'r = 0.5 + 0.5*sin(q1*1.2 + x + x);\n' + 'g = 0.5 + 0.5*sin(q1*1.5 + x + y);\n' + 'b = 0.5 + 0.5*sin(q1*1.36 + y + y);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.4,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 1.0,
			rad : 2.66717,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = Math.sin(m.q1);
m.g = Math.sin((m.q1*1.1));
m.b = Math.sin((m.q1*1.4));
m.r2 = Math.sin((m.q1*1.25));
m.g2 = Math.sin((m.q1*1.45));
m.b2 = Math.sin((m.q1*1.12));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = sin(q1);\n' + 'g = sin(q1*1.1);\n' + 'b = sin(q1*1.4);\n' + 'r2 = sin(q1*1.25);\n' + 'g2 = sin(q1*1.45);\n' + 'b2 = sin(q1*1.12);'),

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
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('basstime = basstime + bass*0.03;\n' + 'q1 = basstime;\n' + 'basstime = basstime + bass_att*0.03;\n' + 'vol = pow(bass+mid+treb,2);\n' + 'basssum = vol;\n' + 'stickybit = time%2;\n' + 'volAvg = volAvg + vol*equal(stickybit,1);\n' + 'sample1 = sample1 + equal(stickybit,1);\n' + 'volAvg2 = volAvg2 + vol*equal(stickybit,0);\n' + 'sample2 = sample2 + equal(stickybit,0);\n' + 'edge = bnot(equal(bit2,stickybit));\n' + 'volAvg = volAvg - volAvg*edge*stickybit;\n' + 'volAvg2 = volAvg2 - volAvg2*edge*equal(stickybit,0);\n' + 'sample1 = sample1  - sample1*edge*stickybit;\n' + 'sample2 = sample2  - sample2*edge*equal(stickybit,0);\n' + 'diff = if(equal(stickybit,1), (basssum/(volAvg2/sample2)) , 0);\n' + 'diff = if(equal(stickybit,0), (basssum/(volAvg/sample1)), diff);\n' + 'q3 = diff;\n' + 'bit2 = time%2;\n' + 'difftime = difftime + diff*0.03;\n' + 'q2 = difftime;\n' + 'state = state +  above(diff,5);\n' + 'state = if(above(state,2),0,state);\n' + 'monitor = state;\n' + 'q5 = state;\n' + 'difftime = if(above(difftime,2000),0, difftime);\n' + 'rarr = rand(100)*0.01;\n' + 'decay_r = 0.6 + 0.2*(abs(sin(diff+rarr)));\n' + 'decay_g = 0.6 + 0.25*(abs(cos(diff+rarr)));\n' + 'decay_b = 0.6 + 0.30*(abs(atan(diff+rarr)));'),
	'pixel_eqs_str' : ('zoom = 1 + 0.05*q3;\n' + 'zoom = 1;'),
};

return pmap;
});
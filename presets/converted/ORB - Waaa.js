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
		echo_zoom : 1.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.97,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : -6.27999,
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
		rating : 0.0,
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
m.stickybit = 0;
m.diff = 0;
m.bit2 = 0;
m.sample1 = 0;
m.sample2 = 0;
m.basstime = 0;
m.basssum = 0;
m.decay_r = 0;
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
m.q1 = (m.basstime*4);
m.basstime = ifcond(below(m.basstime, 1000), 1000, m.basstime);
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
m.difftime = ifcond(above(m.difftime, 2000), 0, m.difftime);
m.monitor = (Math.abs(Math.cos(m.time))*3.14);
m.mv_a = above(m.diff, 10);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1+((0.05*m.q3)*m.rad));
m.decay_r = ((((0.2*m.rad)*Math.sin((m.q2*0.35)))+0.85)+(0.1*Math.sin(m.q2)));
m.decay_g = ((((0.2*m.rad)*Math.sin((m.q2*0.5)))+0.85)+(0.1*Math.sin((0.7*m.q2))));
m.decay_b = ((((0.2*m.rad)*Math.sin((m.q2*0.4)))+0.85)+(0.1*Math.sin((0.8*m.q2))));
m.rot = 0;
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 1.0,
			},
		'init_eqs' : function(m) {
m.angle3 = 0;
m.q1 = 0;
m.ss = 0;
m.xx = 0;
m.zd = 0;
m.yd = 0;
m.xd = 0;
m.s = 0;
m.angle = 0;
m.u = 0;
m.yn = 0;
m.v = 0;
m.xn = 0;
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
m.u = (Math.cos((m.q1*0.1))*3.14159);
m.v = ((Math.cos((m.q1*0.015))*3.14159)*2);
m.s = ((m.sample*3.14)*100);
m.ss = ((m.sample*6.28)*1000);
m.xs = ((((0.3+(0.1*Math.cos(m.s)))*Math.cos(m.ss))*0.2)*Math.cos(m.v));
m.ys = ((((0.3+(0.1*Math.cos(m.s)))*Math.sin(m.ss))*6)*m.u);
m.zs = (((0.5*Math.sin(m.s))*0.2)*Math.sin(m.v));
m.angle = (m.q1*0.1);
m.yx = ((m.ys*Math.cos(m.angle))-(m.zs*Math.sin(m.angle)));
m.zx = ((m.ys*Math.sin(m.angle))+(m.zs*Math.cos(m.angle)));
m.xx = m.xs;
m.angle2 = (m.q1*0.11);
m.xd = ((m.xx*Math.cos(m.angle2))-(m.zx*Math.sin(m.angle2)));
m.zd = ((m.xx*Math.sin(m.angle2))+(m.zx*Math.cos(m.angle2)));
m.yd = m.yx;
m.angle3 = (m.q1*0.15);
m.xn = ((m.xd*Math.cos(m.angle3))-(m.yd*Math.sin(m.angle3)));
m.yn = ((m.xd*Math.sin(m.angle3))+(m.yd*Math.cos(m.angle3)));
m.zd = m.zd;
m.x = (((m.xn*m.zd)*0.3)+0.5);
m.y = ((((m.yn*m.zd)*0.3)*1.2)+0.5);
m.r = (0.5+(0.5*Math.sin((((m.q1*1.2)+m.x)+m.x))));
m.g = (0.5+(0.5*Math.sin((((m.q1*1.5)+m.x)+m.y))));
m.b = (0.5+(0.5*Math.sin((((m.q1*1.36)+m.y)+m.y))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('u = (cos(q1*0.1))*3.14159;\n' + 'v = (cos(q1*0.015))*3.14159*2;\n' + 's = sample*3.14*100;\n' + 'ss = sample*6.28*1000;\n' + 'xs = (0.3 + 0.1*cos(s))*cos(ss)*0.2*cos(v);\n' + 'ys = (0.3 + 0.1*cos(s))*sin(ss)*6*u;\n' + 'zs = 0.5*sin(s)*0.2*sin(v);\n' + 'angle = q1*0.1;\n' + 'yx = ys*cos(angle) - zs*sin(angle);\n' + 'zx = ys*sin(angle) + zs*cos(angle);\n' + 'xx = xs;\n' + 'angle2 = q1*0.11;\n' + 'xd = xx*cos(angle2) - zx*sin(angle2);\n' + 'zd = xx*sin(angle2) + zx*cos(angle2);\n' + 'yd = yx;\n' + 'angle3 = q1*0.15;\n' + 'xn = xd*cos(angle3) - yd*sin(angle3);\n' + 'yn = xd*sin(angle3) + yd*cos(angle3);\n' + 'zd = zd;\n' + 'x = xn*zd*0.3 + 0.5;\n' + 'y = yn*zd*0.3*1.2 + 0.5;\n' + 'r = 0.5 + 0.5*sin(q1*1.2 + x + x);\n' + 'g = 0.5 + 0.5*sin(q1*1.5 + x + y);\n' + 'b = 0.5 + 0.5*sin(q1*1.36 + y + y);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 1.0,
			},
		'init_eqs' : function(m) {
m.angle3 = 0;
m.q1 = 0;
m.ss = 0;
m.xx = 0;
m.zd = 0;
m.yd = 0;
m.xd = 0;
m.s = 0;
m.angle = 0;
m.u = 0;
m.yn = 0;
m.v = 0;
m.xn = 0;
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
m.u = (Math.cos((m.q1*0.1))*3.14159);
m.v = ((Math.cos((m.q1*0.015))*3.14159)*2);
m.s = ((m.sample*3.14)*100);
m.ss = ((m.sample*6.28)*1000);
m.xs = ((((0.3+(0.1*Math.cos(m.s)))*Math.cos(m.ss))*0.2)*Math.cos(m.v));
m.ys = ((((0.3+(0.1*Math.cos(m.s)))*Math.sin(m.ss))*6)*m.u);
m.zs = (((0.5*Math.sin(m.s))*0.2)*Math.sin(m.v));
m.angle = (m.q1*0.1);
m.yx = ((m.ys*Math.cos(m.angle))-(m.zs*Math.sin(m.angle)));
m.zx = ((m.ys*Math.sin(m.angle))+(m.zs*Math.cos(m.angle)));
m.xx = m.xs;
m.angle2 = (m.q1*0.13);
m.xd = ((m.xx*Math.cos(m.angle2))-(m.zx*Math.sin(m.angle2)));
m.zd = ((m.xx*Math.sin(m.angle2))+(m.zx*Math.cos(m.angle2)));
m.yd = m.yx;
m.angle3 = (m.q1*0.16);
m.xn = ((m.xd*Math.cos(m.angle3))-(m.yd*Math.sin(m.angle3)));
m.yn = ((m.xd*Math.sin(m.angle3))+(m.yd*Math.cos(m.angle3)));
m.zd = m.zd;
m.x = (((m.xn*m.zd)*0.3)+0.5);
m.y = ((((m.yn*m.zd)*0.3)*1.2)+0.5);
m.r = (0.5+(0.5*Math.sin((((m.q1*1.2)+m.x)+m.x))));
m.g = (0.5+(0.5*Math.sin((((m.q1*1.5)+m.x)+m.y))));
m.b = (0.5+(0.5*Math.sin((((m.q1*1.36)+m.y)+m.y))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('u = (cos(q1*0.1))*3.14159;\n' + 'v = (cos(q1*0.015))*3.14159*2;\n' + 's = sample*3.14*100;\n' + 'ss = sample*6.28*1000;\n' + 'xs = (0.3 + 0.1*cos(s))*cos(ss)*0.2*cos(v);\n' + 'ys = (0.3 + 0.1*cos(s))*sin(ss)*6*u;\n' + 'zs = 0.5*sin(s)*0.2*sin(v);\n' + 'angle = q1*0.1;\n' + 'yx = ys*cos(angle) - zs*sin(angle);\n' + 'zx = ys*sin(angle) + zs*cos(angle);\n' + 'xx = xs;\n' + 'angle2 = q1*0.13;\n' + 'xd = xx*cos(angle2) - zx*sin(angle2);\n' + 'zd = xx*sin(angle2) + zx*cos(angle2);\n' + 'yd = yx;\n' + 'angle3 = q1*0.16;\n' + 'xn = xd*cos(angle3) - yd*sin(angle3);\n' + 'yn = xd*sin(angle3) + yd*cos(angle3);\n' + 'zd = zd;\n' + 'x = xn*zd*0.3 + 0.5;\n' + 'y = yn*zd*0.3*1.2 + 0.5;\n' + 'r = 0.5 + 0.5*sin(q1*1.2 + x + x);\n' + 'g = 0.5 + 0.5*sin(q1*1.5 + x + y);\n' + 'b = 0.5 + 0.5*sin(q1*1.36 + y + y);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 1.0,
			},
		'init_eqs' : function(m) {
m.angle3 = 0;
m.q1 = 0;
m.ss = 0;
m.xx = 0;
m.zd = 0;
m.yd = 0;
m.xd = 0;
m.s = 0;
m.angle = 0;
m.u = 0;
m.yn = 0;
m.v = 0;
m.xn = 0;
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
m.u = (Math.cos((m.q1*0.1))*3.14159);
m.v = ((Math.cos((m.q1*0.015))*3.14159)*2);
m.s = ((m.sample*3.14)*100);
m.ss = ((m.sample*6.28)*1000);
m.xs = ((((0.3+(0.1*Math.cos(m.s)))*Math.cos(m.ss))*0.2)*Math.cos(m.v));
m.ys = ((((0.3+(0.1*Math.cos(m.s)))*Math.sin(m.ss))*6)*m.u);
m.zs = (((0.5*Math.sin(m.s))*0.2)*Math.sin(m.v));
m.angle = (m.q1*0.1);
m.yx = ((m.ys*Math.cos(m.angle))-(m.zs*Math.sin(m.angle)));
m.zx = ((m.ys*Math.sin(m.angle))+(m.zs*Math.cos(m.angle)));
m.xx = m.xs;
m.angle2 = (m.q1*0.16);
m.xd = ((m.xx*Math.cos(m.angle2))-(m.zx*Math.sin(m.angle2)));
m.zd = ((m.xx*Math.sin(m.angle2))+(m.zx*Math.cos(m.angle2)));
m.yd = m.yx;
m.angle3 = (m.q1*0.16);
m.xn = ((m.xd*Math.cos(m.angle3))-(m.yd*Math.sin(m.angle3)));
m.yn = ((m.xd*Math.sin(m.angle3))+(m.yd*Math.cos(m.angle3)));
m.zd = m.zd;
m.x = (((m.xn*m.zd)*0.3)+0.5);
m.y = ((((m.yn*m.zd)*0.3)*1.2)+0.5);
m.r = (0.5+(0.5*Math.sin((((m.q1*1.2)+m.x)+m.x))));
m.g = (0.5+(0.5*Math.sin((((m.q1*1.5)+m.x)+m.y))));
m.b = (0.5+(0.5*Math.sin((((m.q1*1.36)+m.y)+m.y))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('u = (cos(q1*0.1))*3.14159;\n' + 'v = (cos(q1*0.015))*3.14159*2;\n' + 's = sample*3.14*100;\n' + 'ss = sample*6.28*1000;\n' + 'xs = (0.3 + 0.1*cos(s))*cos(ss)*0.2*cos(v);\n' + 'ys = (0.3 + 0.1*cos(s))*sin(ss)*6*u;\n' + 'zs = 0.5*sin(s)*0.2*sin(v);\n' + 'angle = q1*0.1;\n' + 'yx = ys*cos(angle) - zs*sin(angle);\n' + 'zx = ys*sin(angle) + zs*cos(angle);\n' + 'xx = xs;\n' + 'angle2 = q1*0.16;\n' + 'xd = xx*cos(angle2) - zx*sin(angle2);\n' + 'zd = xx*sin(angle2) + zx*cos(angle2);\n' + 'yd = yx;\n' + 'angle3 = q1*0.16;\n' + 'xn = xd*cos(angle3) - yd*sin(angle3);\n' + 'yn = xd*sin(angle3) + yd*cos(angle3);\n' + 'zd = zd;\n' + 'x = xn*zd*0.3 + 0.5;\n' + 'y = yn*zd*0.3*1.2 + 0.5;\n' + 'r = 0.5 + 0.5*sin(q1*1.2 + x + x);\n' + 'g = 0.5 + 0.5*sin(q1*1.5 + x + y);\n' + 'b = 0.5 + 0.5*sin(q1*1.36 + y + y);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 1.0,
			},
		'init_eqs' : function(m) {
m.angle3 = 0;
m.q1 = 0;
m.ss = 0;
m.xx = 0;
m.zd = 0;
m.yd = 0;
m.xd = 0;
m.s = 0;
m.angle = 0;
m.u = 0;
m.yn = 0;
m.v = 0;
m.xn = 0;
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
m.s = ((m.sample*3.14)*100);
m.ss = ((m.sample*6.28)*1000);
m.xs = ((0.5+(0.0000001*Math.cos(m.s)))*Math.cos(m.ss));
m.ys = ((0.5+(0.0000001*Math.cos(m.s)))*Math.sin(m.ss));
m.zs = (0.5*Math.sin(m.s));
m.angle = (m.q1*0.1);
m.yx = ((m.ys*Math.cos(m.angle))-(m.zs*Math.sin(m.angle)));
m.zx = ((m.ys*Math.sin(m.angle))+(m.zs*Math.cos(m.angle)));
m.xx = m.xs;
m.angle2 = (m.q1*0.14);
m.xd = ((m.xx*Math.cos(m.angle2))-(m.zx*Math.sin(m.angle2)));
m.zd = ((m.xx*Math.sin(m.angle2))+(m.zx*Math.cos(m.angle2)));
m.yd = m.yx;
m.angle3 = (m.q1*0.15);
m.xn = ((m.xd*Math.cos(m.angle3))-(m.yd*Math.sin(m.angle3)));
m.yn = ((m.xd*Math.sin(m.angle3))+(m.yd*Math.cos(m.angle3)));
m.zd = (m.zd+2);
m.x = (((m.xn*m.zd)*0.3)+0.5);
m.y = ((((m.yn*m.zd)*0.3)*1.2)+0.5);
m.r = (0.5+(0.5*Math.sin((((m.q1*1.2)+m.x)+m.x))));
m.g = (0.5+(0.5*Math.sin((((m.q1*1.5)+m.x)+m.y))));
m.b = (0.5+(0.5*Math.sin((((m.q1*1.66)+m.y)+m.y))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('u = abs(cos(q1*0.1))*3.14159;\n' + 'v = abs(cos(q1*0.015))*3.14159*2;\n' + 's = sample*3.14*100;\n' + 'ss = sample*6.28*1000;\n' + 'xs = (0.5 + 0.0000001*cos(s))*cos(ss);\n' + 'ys = (0.5 + 0.0000001*cos(s))*sin(ss);\n' + 'zs = 0.5*sin(s);\n' + 'angle = q1*0.1;\n' + 'yx = ys*cos(angle) - zs*sin(angle);\n' + 'zx = ys*sin(angle) + zs*cos(angle);\n' + 'xx = xs;\n' + 'angle2 = q1*0.14;\n' + 'xd = xx*cos(angle2) - zx*sin(angle2);\n' + 'zd = xx*sin(angle2) + zx*cos(angle2);\n' + 'yd = yx;\n' + 'angle3 = q1*0.15;\n' + 'xn = xd*cos(angle3) - yd*sin(angle3);\n' + 'yn = xd*sin(angle3) + yd*cos(angle3);\n' + 'zd = zd + 2;\n' + 'x = xn*zd*0.3 + 0.5;\n' + 'y = yn*zd*0.3*1.2 + 0.5;\n' + 'r = 0.5 + 0.5*sin(q1*1.2 + x + x);\n' + 'g = 0.5 + 0.5*sin(q1*1.5 + x + y);\n' + 'b = 0.5 + 0.5*sin(q1*1.66 + y + y);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.7,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.7,
			r : 1.0,
			border_g : 1.0,
			rad : 0.49849,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.q3 = 0;
m.tex_capture = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r2 = (0.5+(0.5*Math.sin((m.q2*0.35))));
m.g2 = (0.5+(0.5*Math.sin((m.q2*0.578))));
m.b2 = (0.5+(0.5*Math.sin((m.q2*0.689))));
m.ang = m.q2;
m.tex_capture = above(m.q3, 2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r2 = 0.5 + 0.5*sin(q2*0.35);\n' + 'g2 = 0.5 + 0.5*sin(q2*0.578);\n' + 'b2 = 0.5 + 0.5*sin(q2*0.689);\n' + 'ang = q2;\n' + 'tex_capture = above(q3,2);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.6,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.6,
			r : 1.0,
			border_g : 1.0,
			rad : 0.74218,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.q3 = 0;
m.tex_capture = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r2 = (0.5+(0.5*Math.sin((m.q2*0.45))));
m.g2 = (0.5+(0.5*Math.sin((m.q2*0.678))));
m.b2 = (0.5+(0.5*Math.sin((m.q2*0.689))));
m.ang = (-m.q2*1.05);
m.tex_capture = above(m.q3, 2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r2 = 0.5 + 0.5*sin(q2*0.45);\n' + 'g2 = 0.5 + 0.5*sin(q2*0.678);\n' + 'b2 = 0.5 + 0.5*sin(q2*0.689);\n' + 'ang = -q2*1.05;\n' + 'tex_capture = above(q3,2);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.5,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 1.0,
			rad : 1.00035,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.q3 = 0;
m.tex_capture = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r2 = (0.5+(0.5*Math.sin((m.q2*0.45))));
m.g2 = (0.5+(0.5*Math.sin((m.q2*0.578))));
m.b2 = (0.5+(0.5*Math.sin((m.q2*0.789))));
m.ang = (m.q2*0.899);
m.tex_capture = above(m.q3, 2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r2 = 0.5 + 0.5*sin(q2*0.45);\n' + 'g2 = 0.5 + 0.5*sin(q2*0.578);\n' + 'b2 = 0.5 + 0.5*sin(q2*0.789);\n' + 'ang = q2*0.899;\n' + 'tex_capture = above(q3,2);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.3,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 1.0,
			rad : 3.25446,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.q3 = 0;
m.tex_capture = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (0.5+(0.5*Math.sin((m.q2*0.45))));
m.g = (0.5+(0.5*Math.sin((m.q2*0.578))));
m.b = (0.5+(0.5*Math.sin((m.q2*0.689))));
m.r2 = (0.5+(0.5*Math.sin((m.q2*0.45))));
m.g2 = (0.5+(0.5*Math.sin((m.q2*0.578))));
m.b2 = (0.5+(0.5*Math.sin((m.q2*0.689))));
m.tex_capture = above(m.q3, 2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = 0.5 + 0.5*sin(q2*0.45);\n' + 'g = 0.5 + 0.5*sin(q2*0.578);\n' + 'b = 0.5 + 0.5*sin(q2*0.689);\n' + 'r2 = 0.5 + 0.5*sin(q2*0.45);\n' + 'g2 = 0.5 + 0.5*sin(q2*0.578);\n' + 'b2 = 0.5 + 0.5*sin(q2*0.689);\n' + 'tex_capture = above(q3,2);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec4 tmpvar_1;\n' + '  tmpvar_1 = texture2D (sampler_fc_main, uv);\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2.w = 1.0;\n' + '  tmpvar_2.xyz = (tmpvar_1.xyz * (0.8 + (_qa.z * 0.1)));\n' + '  vec4 ret4 = tmpvar_2;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 * 2.0);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('basstime = basstime + bass*0.03;\n' + 'q1 = basstime*4;\n' + 'basstime = if(below(basstime,1000),1000,basstime);\n' + 'basstime = basstime + bass_att*0.03;\n' + 'vol = pow(bass+mid+treb,2);\n' + 'basssum = vol;\n' + 'stickybit = time%2;\n' + 'volAvg = volAvg + vol*equal(stickybit,1);\n' + 'sample1 = sample1 + equal(stickybit,1);\n' + 'volAvg2 = volAvg2 + vol*equal(stickybit,0);\n' + 'sample2 = sample2 + equal(stickybit,0);\n' + 'edge = bnot(equal(bit2,stickybit));\n' + 'volAvg = volAvg - volAvg*edge*stickybit;\n' + 'volAvg2 = volAvg2 - volAvg2*edge*equal(stickybit,0);\n' + 'sample1 = sample1  - sample1*edge*stickybit;\n' + 'sample2 = sample2  - sample2*edge*equal(stickybit,0);\n' + 'diff = if(equal(stickybit,1), (basssum/(volAvg2/sample2)) , 0);\n' + 'diff = if(equal(stickybit,0), (basssum/(volAvg/sample1)), diff);\n' + 'q3 = diff;\n' + 'bit2 = time%2;\n' + 'difftime = difftime + diff*0.03;\n' + 'q2 = difftime;\n' + 'difftime = if(above(difftime,2000),0, difftime);\n' + 'monitor = abs(cos(time))*3.14;\n' + 'mv_a = above(diff,10);'),
	'pixel_eqs_str' : ('zoom = 1 + 0.05*q3*rad;\n' + 'decay_r = 0.2*rad*sin(q2*0.35) + 0.85 + 0.1*sin(q2);\n' + 'decay_g = 0.2*rad*sin(q2*0.5) + 0.85 + 0.1*sin(0.7*q2);\n' + 'decay_b = 0.2*rad*sin(q2*0.4) + 0.85 + 0.1*sin(0.8*q2);\n' + 'rot = 0;'),
};

return pmap;
});
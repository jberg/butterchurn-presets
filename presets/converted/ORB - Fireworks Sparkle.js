define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 1.0,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 5.21E-4,
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
		echo_zoom : 1.006596,
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
		decay : 0.9,
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
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.stickybit = 0;
m.diff = 0;
m.bit2 = 0;
m.sample1 = 0;
m.sample2 = 0;
m.basstime = 0;
m.basssum = 0;
m.difftime = 0;
m.vol = 0;
m.volavg2 = 0;
m.edge = 0;
m.volavg = 0;
m.state = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.basstime = (m.basstime+(m.bass*0.06));
m.q1 = m.basstime;
m.basstime = ifcond(below(m.basstime, 1000), 1000, m.basstime);
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
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = 1;
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
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.burst = 0;
m.angle3 = 0;
m.q1 = 0;
m.ss = 0;
m.xx = 0;
m.q3 = 0;
m.burstspeed = 0;
m.yval = 0;
m.zd = 0;
m.ymax = 0;
m.yd = 0;
m.xd = 0;
m.flag = 0;
m.xdriftinc = 0;
m.state = 0;
m.xdrift = 0;
m.s = 0;
m.angle = 0;
m.yn = 0;
m.xn = 0;
m.zs = 0;
m.alphax = 0;
m.ys = 0;
m.xs = 0;
m.zx = 0;
m.angle2 = 0;
m.yx = 0;

			m.rkeys = ['burst','burstspeed','yval','ymax','xdriftinc','state','xdrift','alphax'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.flag = above(m.q3, 2);
m.state = (m.state+(m.flag*equal(m.state, 0)));
m.yval = ifcond(equal(m.state, 0), 0, m.yval);
m.yval = (m.yval+(0.00004*equal(m.state, 1)));
m.ymax = ifcond(equal(m.state, 0), (rand(100)*0.004), m.ymax);
m.state = ifcond(above(m.yval, (0.5+m.ymax)), 2, m.state);
m.yval = ifcond(equal(m.state, 0), 0, m.yval);
m.burst = ifcond(equal(m.state, 0), 0.001, m.burst);
m.alphax = ifcond(equal(m.state, 0), 1, m.alphax);
m.xdriftinc = ifcond(equal(m.state, 0), 0, m.xdriftinc);
m.burstspeed = ifcond(equal(m.state, 0), rand(10), m.burstspeed);
m.xdrift = ifcond(equal(m.state, 0), rand(20), m.xdrift);
m.xdriftinc = (((((((((((((((((((m.xdriftinc+((equal(m.xdrift, 0)*equal(m.state, 1))*0.00002))+((equal(m.xdrift, 1)*equal(m.state, 1))*0.000018))+((equal(m.xdrift, 2)*equal(m.state, 1))*0.000016))+((equal(m.xdrift, 3)*equal(m.state, 1))*0.000014))+((equal(m.xdrift, 4)*equal(m.state, 1))*0.000012))+((equal(m.xdrift, 5)*equal(m.state, 1))*0.00001))+((equal(m.xdrift, 6)*equal(m.state, 1))*0.000008))+((equal(m.xdrift, 7)*equal(m.state, 1))*0.000006))+((equal(m.xdrift, 8)*equal(m.state, 1))*0.000004))+((equal(m.xdrift, 9)*equal(m.state, 1))*0.000002))+((equal(m.xdrift, 11)*equal(m.state, 1))*-0.000002))+((equal(m.xdrift, 12)*equal(m.state, 1))*-0.000004))+((equal(m.xdrift, 13)*equal(m.state, 1))*-0.000006))+((equal(m.xdrift, 14)*equal(m.state, 1))*-0.000008))+((equal(m.xdrift, 15)*equal(m.state, 1))*-0.00001))+((equal(m.xdrift, 16)*equal(m.state, 1))*-0.000012))+((equal(m.xdrift, 17)*equal(m.state, 1))*-0.000014))+((equal(m.xdrift, 18)*equal(m.state, 1))*-0.000016))+((equal(m.xdrift, 19)*equal(m.state, 1))*-0.000018));
m.burst = ((((((((((m.burst+((equal(m.burstspeed, 0)*equal(m.state, 2))*0.000024))+((equal(m.burstspeed, 1)*equal(m.state, 2))*0.000022))+((equal(m.burstspeed, 2)*equal(m.state, 2))*0.00002))+((equal(m.burstspeed, 3)*equal(m.state, 2))*0.000018))+((equal(m.burstspeed, 4)*equal(m.state, 2))*0.000016))+((equal(m.burstspeed, 5)*equal(m.state, 2))*0.000014))+((equal(m.burstspeed, 6)*equal(m.state, 2))*0.000012))+((equal(m.burstspeed, 7)*equal(m.state, 2))*0.00001))+((equal(m.burstspeed, 8)*equal(m.state, 2))*0.000008))+((equal(m.burstspeed, 9)*equal(m.state, 2))*0.000008));
m.alphax = (m.alphax-(0.00004*equal(m.state, 2)));
m.state = ifcond(below(m.alphax, 0), 0, m.state);
m.s = ((m.sample*3.14)*100);
m.ss = ((m.sample*6.28)*1000);
m.xs = (((m.burst*0.1)+(m.burst*Math.cos(m.s)))*Math.cos(m.ss));
m.ys = (((m.burst*0.1)+(m.burst*Math.cos(m.s)))*Math.sin(m.ss));
m.zs = (m.burst*Math.sin(m.s));
m.angle = (Math.sin((m.q1*0.025))*6.28);
m.yx = ((m.ys*Math.cos(m.angle))-(m.zs*Math.sin(m.angle)));
m.zx = ((m.ys*Math.sin(m.angle))+(m.zs*Math.cos(m.angle)));
m.xx = m.xs;
m.angle2 = (Math.sin((m.q1*0.03))*6.28);
m.xd = ((m.xx*Math.cos(m.angle2))-(m.zx*Math.sin(m.angle2)));
m.zd = ((m.xx*Math.sin(m.angle2))+(m.zx*Math.cos(m.angle2)));
m.yd = m.yx;
m.angle3 = (Math.sin((m.q1*0.022))*6.28);
m.xn = ((m.xd*Math.cos(m.angle3))-(m.yd*Math.sin(m.angle3)));
m.yn = ((m.xd*Math.sin(m.angle3))+(m.yd*Math.cos(m.angle3)));
m.zd = (m.zd+2);
m.x = (((m.xn*m.zd)*0.3)+0.5);
m.y = (((m.yn*m.zd)*0.3)*1.2);
m.x = (m.x+m.xdriftinc);
m.y = ((m.y+Math.sin((m.yval*1.5)))-0.18);
m.r = (0.5+(0.5*Math.sin((((m.q1*1.2)+m.x)+m.x))));
m.g = (0.5+(0.5*Math.sin((((m.q1*1.5)+m.x)+m.y))));
m.b = (0.5+(0.5*Math.sin((((m.q1*1.36)+m.y)+m.y))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('flag = above(q3,2);\n' + 'state = state + flag*equal(state,0);\n' + 'yval = if(equal(state,0),0, yval);\n' + 'yval = yval + 0.00004*equal(state,1);\n' + 'ymax = if(equal(state,0),rand(100)*0.004,ymax);\n' + 'state = if(above(yval,0.5+ymax),2,state);\n' + 'yval = if(equal(state,0),0, yval);\n' + 'burst = if(equal(state,0),0.001,burst);\n' + 'alphax = if(equal(state,0),1,alphax);\n' + 'xdriftinc = if(equal(state,0),0,xdriftinc);\n' + 'burstspeed = if(equal(state,0),rand(10),burstspeed);\n' + 'xdrift = if(equal(state,0),rand(20),xdrift);\n' + 'xdriftinc = xdriftinc+ equal(xdrift,0)*equal(state,1)*0.00002+ equal(xdrift,1)*equal(state,1)*0.000018+ equal(xdrift,2)*equal(state,1)*0.000016+ equal(xdrift,3)*equal(state,1)*0.000014+ equal(xdrift,4)*equal(state,1)*0.000012+ equal(xdrift,5)*equal(state,1)*0.00001+ equal(xdrift,6)*equal(state,1)*0.000008+ equal(xdrift,7)*equal(state,1)*0.000006+ equal(xdrift,8)*equal(state,1)*0.000004+ equal(xdrift,9)*equal(state,1)*0.000002+ equal(xdrift,11)*equal(state,1)*-0.000002+ equal(xdrift,12)*equal(state,1)*-0.000004+ equal(xdrift,13)*equal(state,1)*-0.000006+ equal(xdrift,14)*equal(state,1)*-0.000008+ equal(xdrift,15)*equal(state,1)*-0.00001+ equal(xdrift,16)*equal(state,1)*-0.000012+ equal(xdrift,17)*equal(state,1)*-0.000014+ equal(xdrift,18)*equal(state,1)*-0.000016+ equal(xdrift,19)*equal(state,1)*-0.000018;\n' + 'burst = burst+ equal(burstspeed,0)*equal(state,2)*0.000024+ equal(burstspeed,1)*equal(state,2)*0.000022+ equal(burstspeed,2)*equal(state,2)*0.00002+ equal(burstspeed,3)*equal(state,2)*0.000018+ equal(burstspeed,4)*equal(state,2)*0.000016+ equal(burstspeed,5)*equal(state,2)*0.000014+ equal(burstspeed,6)*equal(state,2)*0.000012+ equal(burstspeed,7)*equal(state,2)*0.00001+ equal(burstspeed,8)*equal(state,2)*0.000008+ equal(burstspeed,9)*equal(state,2)*0.000008;\n' + 'alphax = alphax - 0.00004*equal(state,2);\n' + 'state = if(below(alphax,0),0,state);\n' + 's = sample*3.14*100;\n' + 'ss = sample*6.28*1000;\n' + 'xs = (burst*0.1 + burst*cos(s))*cos(ss);\n' + 'ys = (burst*0.1 + burst*cos(s))*sin(ss);\n' + 'zs = burst*sin(s);\n' + 'angle = sin(q1*0.025)*6.28;\n' + 'yx = ys*cos(angle) - zs*sin(angle);\n' + 'zx = ys*sin(angle) + zs*cos(angle);\n' + 'xx = xs;\n' + 'angle2 = sin(q1*0.03)*6.28;\n' + 'xd = xx*cos(angle2) - zx*sin(angle2);\n' + 'zd = xx*sin(angle2) + zx*cos(angle2);\n' + 'yd = yx;\n' + 'angle3 = sin(q1*0.022)*6.28;\n' + 'xn = xd*cos(angle3) - yd*sin(angle3);\n' + 'yn = xd*sin(angle3) + yd*cos(angle3);\n' + 'zd = zd + 2;\n' + 'x = xn*zd*0.3 + 0.5;\n' + 'y = yn*zd*0.3*1.2;\n' + 'x = x + xdriftinc;\n' + 'y = y + sin(yval*1.5) - 0.18;\n' + 'r = 0.5 + 0.5*sin(q1*1.2 + x + x);\n' + 'g = 0.5 + 0.5*sin(q1*1.5 + x + y);\n' + 'b = 0.5 + 0.5*sin(q1*1.36 + y + y);'),

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
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.burst = 0;
m.angle3 = 0;
m.q1 = 0;
m.ss = 0;
m.xx = 0;
m.q3 = 0;
m.burstspeed = 0;
m.yval = 0;
m.zd = 0;
m.ymax = 0;
m.yd = 0;
m.xd = 0;
m.flag = 0;
m.xdriftinc = 0;
m.state = 0;
m.xdrift = 0;
m.s = 0;
m.angle = 0;
m.yn = 0;
m.xn = 0;
m.zs = 0;
m.alphax = 0;
m.ys = 0;
m.xs = 0;
m.zx = 0;
m.angle2 = 0;
m.yx = 0;

			m.rkeys = ['burst','burstspeed','yval','ymax','xdriftinc','state','xdrift','alphax'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.flag = above(m.q3, 2);
m.state = (m.state+(m.flag*equal(m.state, 0)));
m.yval = ifcond(equal(m.state, 0), 0, m.yval);
m.yval = (m.yval+(0.00004*equal(m.state, 1)));
m.ymax = ifcond(equal(m.state, 0), (rand(100)*0.004), m.ymax);
m.state = ifcond(above(m.yval, (0.5+m.ymax)), 2, m.state);
m.yval = ifcond(equal(m.state, 0), 0, m.yval);
m.burst = ifcond(equal(m.state, 0), 0.001, m.burst);
m.alphax = ifcond(equal(m.state, 0), 1, m.alphax);
m.xdriftinc = ifcond(equal(m.state, 0), 0, m.xdriftinc);
m.burstspeed = ifcond(equal(m.state, 0), rand(10), m.burstspeed);
m.xdrift = ifcond(equal(m.state, 0), rand(20), m.xdrift);
m.xdriftinc = (((((((((((((((((((m.xdriftinc+((equal(m.xdrift, 0)*equal(m.state, 1))*0.00002))+((equal(m.xdrift, 1)*equal(m.state, 1))*0.000018))+((equal(m.xdrift, 2)*equal(m.state, 1))*0.000016))+((equal(m.xdrift, 3)*equal(m.state, 1))*0.000014))+((equal(m.xdrift, 4)*equal(m.state, 1))*0.000012))+((equal(m.xdrift, 5)*equal(m.state, 1))*0.00001))+((equal(m.xdrift, 6)*equal(m.state, 1))*0.000008))+((equal(m.xdrift, 7)*equal(m.state, 1))*0.000006))+((equal(m.xdrift, 8)*equal(m.state, 1))*0.000004))+((equal(m.xdrift, 9)*equal(m.state, 1))*0.000002))+((equal(m.xdrift, 11)*equal(m.state, 1))*-0.000002))+((equal(m.xdrift, 12)*equal(m.state, 1))*-0.000004))+((equal(m.xdrift, 13)*equal(m.state, 1))*-0.000006))+((equal(m.xdrift, 14)*equal(m.state, 1))*-0.000008))+((equal(m.xdrift, 15)*equal(m.state, 1))*-0.00001))+((equal(m.xdrift, 16)*equal(m.state, 1))*-0.000012))+((equal(m.xdrift, 17)*equal(m.state, 1))*-0.000014))+((equal(m.xdrift, 18)*equal(m.state, 1))*-0.000016))+((equal(m.xdrift, 19)*equal(m.state, 1))*-0.000018));
m.burst = ((((((((((m.burst+((equal(m.burstspeed, 0)*equal(m.state, 2))*0.000024))+((equal(m.burstspeed, 1)*equal(m.state, 2))*0.000022))+((equal(m.burstspeed, 2)*equal(m.state, 2))*0.00002))+((equal(m.burstspeed, 3)*equal(m.state, 2))*0.000018))+((equal(m.burstspeed, 4)*equal(m.state, 2))*0.000016))+((equal(m.burstspeed, 5)*equal(m.state, 2))*0.000014))+((equal(m.burstspeed, 6)*equal(m.state, 2))*0.000012))+((equal(m.burstspeed, 7)*equal(m.state, 2))*0.00001))+((equal(m.burstspeed, 8)*equal(m.state, 2))*0.000008))+((equal(m.burstspeed, 9)*equal(m.state, 2))*0.000008));
m.alphax = (m.alphax-(0.00004*equal(m.state, 2)));
m.state = ifcond(below(m.alphax, 0), 0, m.state);
m.s = ((m.sample*3.14)*100);
m.ss = ((m.sample*6.28)*1000);
m.xs = ((m.burst+(0.0001*Math.cos(m.s)))*Math.cos(m.ss));
m.ys = ((m.burst+(0.0001*Math.cos(m.s)))*Math.sin(m.ss));
m.zs = ((0.1*m.burst)*Math.sin(m.s));
m.angle = (Math.sin((-m.q1*0.035))*6.28);
m.yx = ((m.ys*Math.cos(m.angle))-(m.zs*Math.sin(m.angle)));
m.zx = ((m.ys*Math.sin(m.angle))+(m.zs*Math.cos(m.angle)));
m.xx = m.xs;
m.angle2 = (Math.sin((m.q1*0.03))*6.28);
m.xd = ((m.xx*Math.cos(m.angle2))-(m.zx*Math.sin(m.angle2)));
m.zd = ((m.xx*Math.sin(m.angle2))+(m.zx*Math.cos(m.angle2)));
m.yd = m.yx;
m.angle3 = (Math.sin((-m.q1*0.032))*6.28);
m.xn = ((m.xd*Math.cos(m.angle3))-(m.yd*Math.sin(m.angle3)));
m.yn = ((m.xd*Math.sin(m.angle3))+(m.yd*Math.cos(m.angle3)));
m.zd = (m.zd+2);
m.x = (((m.xn*m.zd)*0.3)+0.5);
m.y = (((m.yn*m.zd)*0.3)*1.2);
m.x = (m.x+m.xdriftinc);
m.y = ((m.y+Math.sin((m.yval*1.5)))-0.18);
m.r = (0.5+(0.5*Math.sin((((m.q1*1.7)+m.x)+m.x))));
m.g = (0.5+(0.5*Math.sin((((m.q1*1.5)+m.x)+m.y))));
m.b = (0.5+(0.5*Math.sin((((m.q1*1.16)+m.y)+m.y))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('flag = above(q3,2);\n' + 'state = state + flag*equal(state,0);\n' + 'yval = if(equal(state,0),0, yval);\n' + 'yval = yval + 0.00004*equal(state,1);\n' + 'ymax = if(equal(state,0),rand(100)*0.004,ymax);\n' + 'state = if(above(yval,0.5+ymax),2,state);\n' + 'yval = if(equal(state,0),0, yval);\n' + 'burst = if(equal(state,0),0.001,burst);\n' + 'alphax = if(equal(state,0),1,alphax);\n' + 'xdriftinc = if(equal(state,0),0,xdriftinc);\n' + 'burstspeed = if(equal(state,0),rand(10),burstspeed);\n' + 'xdrift = if(equal(state,0),rand(20),xdrift);\n' + 'xdriftinc = xdriftinc+ equal(xdrift,0)*equal(state,1)*0.00002+ equal(xdrift,1)*equal(state,1)*0.000018+ equal(xdrift,2)*equal(state,1)*0.000016+ equal(xdrift,3)*equal(state,1)*0.000014+ equal(xdrift,4)*equal(state,1)*0.000012+ equal(xdrift,5)*equal(state,1)*0.00001+ equal(xdrift,6)*equal(state,1)*0.000008+ equal(xdrift,7)*equal(state,1)*0.000006+ equal(xdrift,8)*equal(state,1)*0.000004+ equal(xdrift,9)*equal(state,1)*0.000002+ equal(xdrift,11)*equal(state,1)*-0.000002+ equal(xdrift,12)*equal(state,1)*-0.000004+ equal(xdrift,13)*equal(state,1)*-0.000006+ equal(xdrift,14)*equal(state,1)*-0.000008+ equal(xdrift,15)*equal(state,1)*-0.00001+ equal(xdrift,16)*equal(state,1)*-0.000012+ equal(xdrift,17)*equal(state,1)*-0.000014+ equal(xdrift,18)*equal(state,1)*-0.000016+ equal(xdrift,19)*equal(state,1)*-0.000018;\n' + 'burst = burst+ equal(burstspeed,0)*equal(state,2)*0.000024+ equal(burstspeed,1)*equal(state,2)*0.000022+ equal(burstspeed,2)*equal(state,2)*0.00002+ equal(burstspeed,3)*equal(state,2)*0.000018+ equal(burstspeed,4)*equal(state,2)*0.000016+ equal(burstspeed,5)*equal(state,2)*0.000014+ equal(burstspeed,6)*equal(state,2)*0.000012+ equal(burstspeed,7)*equal(state,2)*0.00001+ equal(burstspeed,8)*equal(state,2)*0.000008+ equal(burstspeed,9)*equal(state,2)*0.000008;\n' + 'alphax = alphax - 0.00004*equal(state,2);\n' + 'state = if(below(alphax,0),0,state);\n' + 's = sample*3.14*100;\n' + 'ss = sample*6.28*1000;\n' + 'xs = (burst + 0.0001*cos(s))*cos(ss);\n' + 'ys = (burst + 0.0001*cos(s))*sin(ss);\n' + 'zs = 0.1*burst*sin(s);\n' + 'angle = sin(-q1*0.035)*6.28;\n' + 'yx = ys*cos(angle) - zs*sin(angle);\n' + 'zx = ys*sin(angle) + zs*cos(angle);\n' + 'xx = xs;\n' + 'angle2 = sin(q1*0.03)*6.28;\n' + 'xd = xx*cos(angle2) - zx*sin(angle2);\n' + 'zd = xx*sin(angle2) + zx*cos(angle2);\n' + 'yd = yx;\n' + 'angle3 = sin(-q1*0.032)*6.28;\n' + 'xn = xd*cos(angle3) - yd*sin(angle3);\n' + 'yn = xd*sin(angle3) + yd*cos(angle3);\n' + 'zd = zd + 2;\n' + 'x = xn*zd*0.3 + 0.5;\n' + 'y = yn*zd*0.3*1.2;\n' + 'x = x + xdriftinc;\n' + 'y = y + sin(yval*1.5) - 0.18;\n' + 'r = 0.5 + 0.5*sin(q1*1.7 + x + x);\n' + 'g = 0.5 + 0.5*sin(q1*1.5 + x + y);\n' + 'b = 0.5 + 0.5*sin(q1*1.16 + y + y);'),

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
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.burst = 0;
m.angle3 = 0;
m.q1 = 0;
m.ss = 0;
m.xx = 0;
m.q3 = 0;
m.burstspeed = 0;
m.yval = 0;
m.zd = 0;
m.ymax = 0;
m.yd = 0;
m.xd = 0;
m.flag = 0;
m.xdriftinc = 0;
m.state = 0;
m.xdrift = 0;
m.s = 0;
m.angle = 0;
m.yn = 0;
m.xn = 0;
m.zs = 0;
m.alphax = 0;
m.ys = 0;
m.xs = 0;
m.zx = 0;
m.angle2 = 0;
m.yx = 0;

			m.rkeys = ['burst','burstspeed','yval','ymax','xdriftinc','state','xdrift','alphax'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.flag = above(m.q3, 2);
m.state = (m.state+(m.flag*equal(m.state, 0)));
m.yval = ifcond(equal(m.state, 0), 0, m.yval);
m.yval = (m.yval+(0.00004*equal(m.state, 1)));
m.ymax = ifcond(equal(m.state, 0), (rand(100)*0.004), m.ymax);
m.state = ifcond(above(m.yval, (0.5+m.ymax)), 2, m.state);
m.yval = ifcond(equal(m.state, 0), 0, m.yval);
m.burst = ifcond(equal(m.state, 0), 0.001, m.burst);
m.alphax = ifcond(equal(m.state, 0), 1, m.alphax);
m.xdriftinc = ifcond(equal(m.state, 0), 0, m.xdriftinc);
m.burstspeed = ifcond(equal(m.state, 0), rand(10), m.burstspeed);
m.xdrift = ifcond(equal(m.state, 0), rand(20), m.xdrift);
m.xdriftinc = (((((((((((((((((((m.xdriftinc+((equal(m.xdrift, 0)*equal(m.state, 1))*0.00002))+((equal(m.xdrift, 1)*equal(m.state, 1))*0.000018))+((equal(m.xdrift, 2)*equal(m.state, 1))*0.000016))+((equal(m.xdrift, 3)*equal(m.state, 1))*0.000014))+((equal(m.xdrift, 4)*equal(m.state, 1))*0.000012))+((equal(m.xdrift, 5)*equal(m.state, 1))*0.00001))+((equal(m.xdrift, 6)*equal(m.state, 1))*0.000008))+((equal(m.xdrift, 7)*equal(m.state, 1))*0.000006))+((equal(m.xdrift, 8)*equal(m.state, 1))*0.000004))+((equal(m.xdrift, 9)*equal(m.state, 1))*0.000002))+((equal(m.xdrift, 11)*equal(m.state, 1))*-0.000002))+((equal(m.xdrift, 12)*equal(m.state, 1))*-0.000004))+((equal(m.xdrift, 13)*equal(m.state, 1))*-0.000006))+((equal(m.xdrift, 14)*equal(m.state, 1))*-0.000008))+((equal(m.xdrift, 15)*equal(m.state, 1))*-0.00001))+((equal(m.xdrift, 16)*equal(m.state, 1))*-0.000012))+((equal(m.xdrift, 17)*equal(m.state, 1))*-0.000014))+((equal(m.xdrift, 18)*equal(m.state, 1))*-0.000016))+((equal(m.xdrift, 19)*equal(m.state, 1))*-0.000018));
m.burst = ((((((((((m.burst+((equal(m.burstspeed, 0)*equal(m.state, 2))*0.000024))+((equal(m.burstspeed, 1)*equal(m.state, 2))*0.000022))+((equal(m.burstspeed, 2)*equal(m.state, 2))*0.00002))+((equal(m.burstspeed, 3)*equal(m.state, 2))*0.000018))+((equal(m.burstspeed, 4)*equal(m.state, 2))*0.000016))+((equal(m.burstspeed, 5)*equal(m.state, 2))*0.000014))+((equal(m.burstspeed, 6)*equal(m.state, 2))*0.000012))+((equal(m.burstspeed, 7)*equal(m.state, 2))*0.00001))+((equal(m.burstspeed, 8)*equal(m.state, 2))*0.000008))+((equal(m.burstspeed, 9)*equal(m.state, 2))*0.000008));
m.alphax = (m.alphax-(0.00004*equal(m.state, 2)));
m.state = ifcond(below(m.alphax, 0), 0, m.state);
m.s = ((m.sample*3.14)*100);
m.ss = ((m.sample*6.28)*1000);
m.xs = (((m.burst*0.8)+((0.4*m.burst)*Math.cos(m.s)))*Math.cos(m.ss));
m.ys = (((m.burst*0.8)+((0.4*m.burst)*Math.cos(m.s)))*Math.sin(m.ss));
m.zs = ((0.4*m.burst)*Math.sin(m.s));
m.angle = (Math.sin((-m.q1*0.015))*6.28);
m.yx = ((m.ys*Math.cos(m.angle))-(m.zs*Math.sin(m.angle)));
m.zx = ((m.ys*Math.sin(m.angle))+(m.zs*Math.cos(m.angle)));
m.xx = m.xs;
m.angle2 = (Math.sin((m.q1*0.01579))*6.28);
m.xd = ((m.xx*Math.cos(m.angle2))-(m.zx*Math.sin(m.angle2)));
m.zd = ((m.xx*Math.sin(m.angle2))+(m.zx*Math.cos(m.angle2)));
m.yd = m.yx;
m.angle3 = (Math.sin((m.q1*0.022))*6.28);
m.xn = ((m.xd*Math.cos(m.angle3))-(m.yd*Math.sin(m.angle3)));
m.yn = ((m.xd*Math.sin(m.angle3))+(m.yd*Math.cos(m.angle3)));
m.zd = (m.zd+2);
m.x = (((m.xn*m.zd)*0.3)+0.5);
m.y = (((m.yn*m.zd)*0.3)*1.2);
m.x = (m.x+m.xdriftinc);
m.y = ((m.y+Math.sin((m.yval*1.5)))-0.18);
m.r = (0.5+(0.5*Math.sin((((m.q1*1.27)+m.x)+m.x))));
m.g = (0.5+(0.5*Math.sin((((m.q1*1.5)+m.x)+m.y))));
m.b = (0.5+(0.5*Math.sin((((m.q1*1.346)+m.y)+m.y))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('flag = above(q3,2);\n' + 'state = state + flag*equal(state,0);\n' + 'yval = if(equal(state,0),0, yval);\n' + 'yval = yval + 0.00004*equal(state,1);\n' + 'ymax = if(equal(state,0),rand(100)*0.004,ymax);\n' + 'state = if(above(yval,0.5+ymax),2,state);\n' + 'yval = if(equal(state,0),0, yval);\n' + 'burst = if(equal(state,0),0.001,burst);\n' + 'alphax = if(equal(state,0),1,alphax);\n' + 'xdriftinc = if(equal(state,0),0,xdriftinc);\n' + 'burstspeed = if(equal(state,0),rand(10),burstspeed);\n' + 'xdrift = if(equal(state,0),rand(20),xdrift);\n' + 'xdriftinc = xdriftinc+ equal(xdrift,0)*equal(state,1)*0.00002+ equal(xdrift,1)*equal(state,1)*0.000018+ equal(xdrift,2)*equal(state,1)*0.000016+ equal(xdrift,3)*equal(state,1)*0.000014+ equal(xdrift,4)*equal(state,1)*0.000012+ equal(xdrift,5)*equal(state,1)*0.00001+ equal(xdrift,6)*equal(state,1)*0.000008+ equal(xdrift,7)*equal(state,1)*0.000006+ equal(xdrift,8)*equal(state,1)*0.000004+ equal(xdrift,9)*equal(state,1)*0.000002+ equal(xdrift,11)*equal(state,1)*-0.000002+ equal(xdrift,12)*equal(state,1)*-0.000004+ equal(xdrift,13)*equal(state,1)*-0.000006+ equal(xdrift,14)*equal(state,1)*-0.000008+ equal(xdrift,15)*equal(state,1)*-0.00001+ equal(xdrift,16)*equal(state,1)*-0.000012+ equal(xdrift,17)*equal(state,1)*-0.000014+ equal(xdrift,18)*equal(state,1)*-0.000016+ equal(xdrift,19)*equal(state,1)*-0.000018;\n' + 'burst = burst+ equal(burstspeed,0)*equal(state,2)*0.000024+ equal(burstspeed,1)*equal(state,2)*0.000022+ equal(burstspeed,2)*equal(state,2)*0.00002+ equal(burstspeed,3)*equal(state,2)*0.000018+ equal(burstspeed,4)*equal(state,2)*0.000016+ equal(burstspeed,5)*equal(state,2)*0.000014+ equal(burstspeed,6)*equal(state,2)*0.000012+ equal(burstspeed,7)*equal(state,2)*0.00001+ equal(burstspeed,8)*equal(state,2)*0.000008+ equal(burstspeed,9)*equal(state,2)*0.000008;\n' + 'alphax = alphax - 0.00004*equal(state,2);\n' + 'state = if(below(alphax,0),0,state);\n' + 's = sample*3.14*100;\n' + 'ss = sample*6.28*1000;\n' + 'xs = (burst*0.8 + 0.4*burst*cos(s))*cos(ss);\n' + 'ys = (burst*0.8 + 0.4*burst*cos(s))*sin(ss);\n' + 'zs = 0.4*burst*sin(s);\n' + 'angle = sin(-q1*0.015)*6.28;\n' + 'yx = ys*cos(angle) - zs*sin(angle);\n' + 'zx = ys*sin(angle) + zs*cos(angle);\n' + 'xx = xs;\n' + 'angle2 = sin(q1*0.01579)*6.28;\n' + 'xd = xx*cos(angle2) - zx*sin(angle2);\n' + 'zd = xx*sin(angle2) + zx*cos(angle2);\n' + 'yd = yx;\n' + 'angle3 = sin(q1*0.022)*6.28;\n' + 'xn = xd*cos(angle3) - yd*sin(angle3);\n' + 'yn = xd*sin(angle3) + yd*cos(angle3);\n' + 'zd = zd + 2;\n' + 'x = xn*zd*0.3 + 0.5;\n' + 'y = yn*zd*0.3*1.2;\n' + 'x = x + xdriftinc;\n' + 'y = y + sin(yval*1.5) - 0.18;\n' + 'r = 0.5 + 0.5*sin(q1*1.27 + x + x);\n' + 'g = 0.5 + 0.5*sin(q1*1.5 + x + y);\n' + 'b = 0.5 + 0.5*sin(q1*1.346 + y + y);'),

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
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.burst = 0;
m.angle3 = 0;
m.q1 = 0;
m.ss = 0;
m.xx = 0;
m.q3 = 0;
m.burstspeed = 0;
m.yval = 0;
m.zd = 0;
m.ymax = 0;
m.yd = 0;
m.xd = 0;
m.flag = 0;
m.xdriftinc = 0;
m.state = 0;
m.xdrift = 0;
m.s = 0;
m.angle = 0;
m.yn = 0;
m.xn = 0;
m.zs = 0;
m.alphax = 0;
m.ys = 0;
m.xs = 0;
m.zx = 0;
m.angle2 = 0;
m.yx = 0;

			m.rkeys = ['burst','burstspeed','yval','ymax','xdriftinc','state','xdrift','alphax'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.flag = above(m.q3, 2);
m.state = (m.state+(m.flag*equal(m.state, 0)));
m.yval = ifcond(equal(m.state, 0), 0, m.yval);
m.yval = (m.yval+(0.00004*equal(m.state, 1)));
m.ymax = ifcond(equal(m.state, 0), (rand(100)*0.004), m.ymax);
m.state = ifcond(above(m.yval, (0.5+m.ymax)), 2, m.state);
m.yval = ifcond(equal(m.state, 0), 0, m.yval);
m.burst = ifcond(equal(m.state, 0), 0.001, m.burst);
m.alphax = ifcond(equal(m.state, 0), 1, m.alphax);
m.xdriftinc = ifcond(equal(m.state, 0), 0, m.xdriftinc);
m.burstspeed = ifcond(equal(m.state, 0), rand(10), m.burstspeed);
m.xdrift = ifcond(equal(m.state, 0), rand(20), m.xdrift);
m.xdriftinc = (((((((((((((((((((m.xdriftinc+((equal(m.xdrift, 0)*equal(m.state, 1))*0.00002))+((equal(m.xdrift, 1)*equal(m.state, 1))*0.000018))+((equal(m.xdrift, 2)*equal(m.state, 1))*0.000016))+((equal(m.xdrift, 3)*equal(m.state, 1))*0.000014))+((equal(m.xdrift, 4)*equal(m.state, 1))*0.000012))+((equal(m.xdrift, 5)*equal(m.state, 1))*0.00001))+((equal(m.xdrift, 6)*equal(m.state, 1))*0.000008))+((equal(m.xdrift, 7)*equal(m.state, 1))*0.000006))+((equal(m.xdrift, 8)*equal(m.state, 1))*0.000004))+((equal(m.xdrift, 9)*equal(m.state, 1))*0.000002))+((equal(m.xdrift, 11)*equal(m.state, 1))*-0.000002))+((equal(m.xdrift, 12)*equal(m.state, 1))*-0.000004))+((equal(m.xdrift, 13)*equal(m.state, 1))*-0.000006))+((equal(m.xdrift, 14)*equal(m.state, 1))*-0.000008))+((equal(m.xdrift, 15)*equal(m.state, 1))*-0.00001))+((equal(m.xdrift, 16)*equal(m.state, 1))*-0.000012))+((equal(m.xdrift, 17)*equal(m.state, 1))*-0.000014))+((equal(m.xdrift, 18)*equal(m.state, 1))*-0.000016))+((equal(m.xdrift, 19)*equal(m.state, 1))*-0.000018));
m.burst = ((((((((((m.burst+((equal(m.burstspeed, 0)*equal(m.state, 2))*0.000024))+((equal(m.burstspeed, 1)*equal(m.state, 2))*0.000022))+((equal(m.burstspeed, 2)*equal(m.state, 2))*0.00002))+((equal(m.burstspeed, 3)*equal(m.state, 2))*0.000018))+((equal(m.burstspeed, 4)*equal(m.state, 2))*0.000016))+((equal(m.burstspeed, 5)*equal(m.state, 2))*0.000014))+((equal(m.burstspeed, 6)*equal(m.state, 2))*0.000012))+((equal(m.burstspeed, 7)*equal(m.state, 2))*0.00001))+((equal(m.burstspeed, 8)*equal(m.state, 2))*0.000008))+((equal(m.burstspeed, 9)*equal(m.state, 2))*0.000008));
m.alphax = (m.alphax-(0.00004*equal(m.state, 2)));
m.state = ifcond(below(m.alphax, 0), 0, m.state);
m.s = ((m.sample*3.14)*100);
m.ss = ((m.sample*6.28)*1000);
m.xs = ((m.burst+(0.0001*Math.cos(m.s)))*Math.cos(m.ss));
m.ys = ((m.burst+(0.0001*Math.cos(m.s)))*Math.sin(m.ss));
m.zs = ((0.1*m.burst)*Math.sin(m.s));
m.angle = (Math.sin((-m.q1*0.035))*6.28);
m.yx = ((m.ys*Math.cos(m.angle))-(m.zs*Math.sin(m.angle)));
m.zx = ((m.ys*Math.sin(m.angle))+(m.zs*Math.cos(m.angle)));
m.xx = m.xs;
m.angle2 = (Math.sin((-m.q1*0.03))*6.28);
m.xd = ((m.xx*Math.cos(m.angle2))-(m.zx*Math.sin(m.angle2)));
m.zd = ((m.xx*Math.sin(m.angle2))+(m.zx*Math.cos(m.angle2)));
m.yd = m.yx;
m.angle3 = (Math.sin((-m.q1*0.022))*6.28);
m.xn = ((m.xd*Math.cos(m.angle3))-(m.yd*Math.sin(m.angle3)));
m.yn = ((m.xd*Math.sin(m.angle3))+(m.yd*Math.cos(m.angle3)));
m.zd = (m.zd+2);
m.x = (((m.xn*m.zd)*0.3)+0.5);
m.y = (((m.yn*m.zd)*0.3)*1.2);
m.x = (m.x+m.xdriftinc);
m.y = ((m.y+Math.sin((m.yval*1.5)))-0.18);
m.r = (0.5+(0.5*Math.sin((((m.q1*1.3)+m.x)+m.x))));
m.g = (0.5+(0.5*Math.sin((((m.q1*1.1)+m.x)+m.y))));
m.b = (0.5+(0.5*Math.sin((((m.q1*1.66)+m.y)+m.y))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('flag = above(q3,2);\n' + 'state = state + flag*equal(state,0);\n' + 'yval = if(equal(state,0),0, yval);\n' + 'yval = yval + 0.00004*equal(state,1);\n' + 'ymax = if(equal(state,0),rand(100)*0.004,ymax);\n' + 'state = if(above(yval,0.5+ymax),2,state);\n' + 'yval = if(equal(state,0),0, yval);\n' + 'burst = if(equal(state,0),0.001,burst);\n' + 'alphax = if(equal(state,0),1,alphax);\n' + 'xdriftinc = if(equal(state,0),0,xdriftinc);\n' + 'burstspeed = if(equal(state,0),rand(10),burstspeed);\n' + 'xdrift = if(equal(state,0),rand(20),xdrift);\n' + 'xdriftinc = xdriftinc+ equal(xdrift,0)*equal(state,1)*0.00002+ equal(xdrift,1)*equal(state,1)*0.000018+ equal(xdrift,2)*equal(state,1)*0.000016+ equal(xdrift,3)*equal(state,1)*0.000014+ equal(xdrift,4)*equal(state,1)*0.000012+ equal(xdrift,5)*equal(state,1)*0.00001+ equal(xdrift,6)*equal(state,1)*0.000008+ equal(xdrift,7)*equal(state,1)*0.000006+ equal(xdrift,8)*equal(state,1)*0.000004+ equal(xdrift,9)*equal(state,1)*0.000002+ equal(xdrift,11)*equal(state,1)*-0.000002+ equal(xdrift,12)*equal(state,1)*-0.000004+ equal(xdrift,13)*equal(state,1)*-0.000006+ equal(xdrift,14)*equal(state,1)*-0.000008+ equal(xdrift,15)*equal(state,1)*-0.00001+ equal(xdrift,16)*equal(state,1)*-0.000012+ equal(xdrift,17)*equal(state,1)*-0.000014+ equal(xdrift,18)*equal(state,1)*-0.000016+ equal(xdrift,19)*equal(state,1)*-0.000018;\n' + 'burst = burst+ equal(burstspeed,0)*equal(state,2)*0.000024+ equal(burstspeed,1)*equal(state,2)*0.000022+ equal(burstspeed,2)*equal(state,2)*0.00002+ equal(burstspeed,3)*equal(state,2)*0.000018+ equal(burstspeed,4)*equal(state,2)*0.000016+ equal(burstspeed,5)*equal(state,2)*0.000014+ equal(burstspeed,6)*equal(state,2)*0.000012+ equal(burstspeed,7)*equal(state,2)*0.00001+ equal(burstspeed,8)*equal(state,2)*0.000008+ equal(burstspeed,9)*equal(state,2)*0.000008;\n' + 'alphax = alphax - 0.00004*equal(state,2);\n' + 'state = if(below(alphax,0),0,state);\n' + 's = sample*3.14*100;\n' + 'ss = sample*6.28*1000;\n' + 'xs = (burst + 0.0001*cos(s))*cos(ss);\n' + 'ys = (burst + 0.0001*cos(s))*sin(ss);\n' + 'zs = 0.1*burst*sin(s);\n' + 'angle = sin(-q1*0.035)*6.28;\n' + 'yx = ys*cos(angle) - zs*sin(angle);\n' + 'zx = ys*sin(angle) + zs*cos(angle);\n' + 'xx = xs;\n' + 'angle2 = sin(-q1*0.03)*6.28;\n' + 'xd = xx*cos(angle2) - zx*sin(angle2);\n' + 'zd = xx*sin(angle2) + zx*cos(angle2);\n' + 'yd = yx;\n' + 'angle3 = sin(-q1*0.022)*6.28;\n' + 'xn = xd*cos(angle3) - yd*sin(angle3);\n' + 'yn = xd*sin(angle3) + yd*cos(angle3);\n' + 'zd = zd + 2;\n' + 'x = xn*zd*0.3 + 0.5;\n' + 'y = yn*zd*0.3*1.2;\n' + 'x = x + xdriftinc;\n' + 'y = y + sin(yval*1.5) - 0.18;\n' + 'r = 0.5 + 0.5*sin(q1*1.3 + x + x);\n' + 'g = 0.5 + 0.5*sin(q1*1.1 + x + y);\n' + 'b = 0.5 + 0.5*sin(q1*1.66 + y + y);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.2,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.451117,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.2,
			r : 1.0,
			border_g : 1.0,
			rad : 2.667177,
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

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.6,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.424973,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.6,
			r : 0.0,
			border_g : 1.0,
			rad : 2.380961,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (0.1+(0.5*Math.sin(m.q1)));
m.g = (0.1+(0.5*Math.sin((m.q1*0.9878))));
m.b = (0.1+(0.5*Math.sin((m.q1*0.897))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = 0.1 + 0.5*sin(q1);\n' + 'g = 0.1 + 0.5*sin(q1*0.9878);\n' + 'b = 0.1 + 0.5*sin(q1*0.897);'),

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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 color_2;\n' + '   vec2 uv2_3;\n' + '   vec3 ret_4;\n' + '  uv2_3 = (uv + _qa.z);\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = (texture2D (sampler_noise_lq, uv2_3) - 0.5).xyz;\n' + '  color_2 = tmpvar_5;\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = (texture2D (sampler_noise_mq, uv2_3) - 0.5).xyz;\n' + '  color_2 = (color_2 + tmpvar_6);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (texture2D (sampler_noise_hq, uv2_3) - 0.5).xyz;\n' + '  color_2 = (color_2 + tmpvar_7);\n' + '  uv_1 = (uv + (color_2 * 0.01).xy);\n' + '   mat2 tmpvar_8;\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = cos(_qc.x);\n' + '  tmpvar_8[0].x = tmpvar_9;\n' + '   float tmpvar_10;\n' + '  tmpvar_10 = sin(_qc.x);\n' + '  tmpvar_8[0].y = -(tmpvar_10);\n' + '  tmpvar_8[1].x = tmpvar_10;\n' + '  tmpvar_8[1].y = tmpvar_9;\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (((uv_1 - 0.5) * 0.9) + 0.5);\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (((\n' + '    (((uv_1 - 0.5) * (0.97 + (rad * 0.02))) * tmpvar_8)\n' + '   + 0.5) + (\n' + '    ((tmpvar_11.xyz * scale1) + bias1)\n' + '   * \n' + '    (uv_1.y * 0.1)\n' + '  ).xy) - 0.01);\n' + '  tmpvar_13 = texture2D (sampler_main, P_14);\n' + '  ret_4 = tmpvar_13.xyz;\n' + '  ret_4 = (ret_4 - 0.001);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 1.0;\n' + '  tmpvar_15.xyz = ret_4;\n' + '  vec4 ret4 = tmpvar_15;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = ((vec2(-0.993, 0.993) * (uv - 0.5)) + 0.5);\n' + '   vec3 tmpvar_3;\n' + '  tmpvar_3 = mix (texture2D (sampler_main, uv).xyz, texture2D (sampler_main, tmpvar_2).xyz, vec3(0.5, 0.5, 0.5));\n' + '  ret_1 = tmpvar_3;\n' + '  ret_1 = (ret_1 * 2.0);\n' + '  ret_1 = ((ret_1 * (1.0 - ret_1)) * 10.0);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('state = 0;'),
	'frame_eqs_str' : ('basstime = basstime + bass*0.06;\n' + 'q1 = basstime;\n' + 'basstime = if(below(basstime,1000),1000,basstime);\n' + 'vol = pow(bass+mid+treb,2);\n' + 'basssum = vol;\n' + 'stickybit = time%2;\n' + 'volAvg = volAvg + vol*equal(stickybit,1);\n' + 'sample1 = sample1 + equal(stickybit,1);\n' + 'volAvg2 = volAvg2 + vol*equal(stickybit,0);\n' + 'sample2 = sample2 + equal(stickybit,0);\n' + 'edge = bnot(equal(bit2,stickybit));\n' + 'volAvg = volAvg - volAvg*edge*stickybit;\n' + 'volAvg2 = volAvg2 - volAvg2*edge*equal(stickybit,0);\n' + 'sample1 = sample1  - sample1*edge*stickybit;\n' + 'sample2 = sample2  - sample2*edge*equal(stickybit,0);\n' + 'diff = if(equal(stickybit,1), (basssum/(volAvg2/sample2)) , 0);\n' + 'diff = if(equal(stickybit,0), (basssum/(volAvg/sample1)), diff);\n' + 'q3 = diff;\n' + 'bit2 = time%2;\n' + 'difftime = difftime + diff*0.03;\n' + 'q2 = difftime;\n' + 'difftime = if(above(difftime,2000),0, difftime);'),
	'pixel_eqs_str' : ('zoom = 1;'),
};

return pmap;
});
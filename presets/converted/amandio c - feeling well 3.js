define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.75,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 0.007,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.04,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 4.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.01,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.86,
		ob_b : 0.04,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.4,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.04,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 2.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.5,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.bt2 = 0;
m.tt = 0;
m.q2 = 0;
m.q6 = 0;
m.q10 = 0;
m.tt1 = 0;
m.bt = 0;
m.tt2 = 0;
m.t10 = 0;
m.bt1 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.6;
m.q6 = m.aspecty;
m.bt1 = ((m.bt1*0.95)+div((sqr((m.bass*4))*20),m.fps));
m.bt2 = (m.bt2+(m.bt1*0.005));
m.bt = (m.bt2*0.01);
m.tt1 = ((m.tt1*0.95)+div((sqr((m.treb*4))*20),m.fps));
m.tt2 = (m.tt2+(m.tt1*0.005));
m.tt = (m.tt2*0.01);
m.q1 = m.bt;
m.q2 = m.tt;
m.t10 = (m.t10+div(2,m.fps));
m.t10 = (m.t10*above(50, m.t10));
m.q10 = m.t10;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.04,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 100.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.7,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.p1 = 0;
m.p2 = 0;
m.mx = 0;
m.my = 0;
m.q10 = 0;
m.t = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.q10 = (123*m.sample);
m.x = (-0.5+m.sample);
m.y = (-0.5+Math.abs(Math.sin(m.q10)));
m.t = (0.02*m.time);
m.mx = ((m.x*Math.cos(m.t))+(m.y*Math.sin(m.t)));
m.my = ((m.y*Math.cos(m.t))-(m.x*Math.sin(m.t)));
m.p1 = (0.1*Math.sin((630*m.sample)));
m.p2 = (0.1*Math.sin((530*m.sample)));
m.x = ((0.5+m.p1)+m.mx);
m.y = ((0.5+m.p2)+m.my);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('q10=123*sample;\n' + 'x = -.5+sample;\n' + 'y = -.5+abs(sin(q10));\n' + 't=.02*time;\n' + 'mx = x*cos(t)+y*sin(t);\n' + 'my = y*cos(t)-x*sin(t);\n' + 'p1=.1*sin(630*sample);\n' + 'p2=.1*sin(530*sample);\n' + 'x= .5+p1+mx;\n' + 'y= .5+p2+my;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 67.1652,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.7,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 0.6,
			enabled : 0.0,
			b : 1.0,
			g : 0.7,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.7,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.29701,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.01,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 10.0,
			border_r : 1.0,
			num_inst : 300.0,
			},
		'init_eqs' : function(m) {
m.c = 0;
m.d = 0;
m.q6 = 0;
m.z3a = 0;
m.i = 0;
m.z3b = 0;
m.l = 0;
m.sa = 0;
m.p = 0;
m.q10 = 0;
m.zoom = 0;
m.w = 0;
m.y1 = 0;
m.x1 = 0;
m.z3 = 0;
m.y3 = 0;
m.x3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.i = m.instance;
m.sa = div(m.i,m.num_inst);
m.c = below(m.sa, 0.5);
m.x3 = (ifcond(mod(m.i,2), -0.05, 0.05)+(0.12*Math.sin(((533*m.sa)+(0.2*m.time)))));
m.y3 = (ifcond(m.c, -0.05, 0.05)+(0.05*Math.sin(((876*m.sa)+(0.14*m.time)))));
m.z3a = ((100*m.sa)-m.q10);
m.z3b = ((-50+(100*m.sa))+m.q10);
m.z3 = ifcond(m.c, m.z3a, m.z3b);
m.d = 0;
m.zoom = 20;
m.l = sqrt(((m.x3*m.x3)+(m.y3*m.y3)));
m.w = Math.atan2(m.x3, m.y3);
m.d = sqrt((((m.x3*m.x3)+(m.y3*m.y3))+((m.z3+m.d)*(m.z3+m.d))));
m.p = Math.tan((Math.asin(1)+Math.atan2((m.d+m.z3), m.l)));
m.x1 = ((m.zoom*Math.sin(m.w))*m.p);
m.y1 = ((m.zoom*Math.cos(m.w))*m.p);
m.x = (0.5+div(m.x1,m.q6));
m.y = (0.5+m.y1);
m.rad *= div((0.1*m.zoom),m.d);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('i=instance;\n' + '     sa=i/num_inst;\n' + 'c=below(sa,.5);\n' + 'x3=if(i%2,-.05,.05)+.12*sin(533*sa+.2*time);\n' + 'y3=if(c,-.05,.05)+.05*sin(876*sa+.14*time);\n' + 'z3a=(100*sa)-q10;\n' + 'z3b =(-50+100*sa)+q10;\n' + 'z3=if(c,z3a,z3b);\n' + 'd=0;\n' + '     zoom=20;\n' + 'l = sqrt(x3*x3 + y3*y3);\n' + 'w = atan2(x3,y3);\n' + 'd = sqrt(x3*x3 + y3*y3 + (z3+d)*(z3+d));\n' + 'p = tan(asin(1) + atan2(d+z3,l));\n' + 'x1 = zoom*sin(w)*p;\n' + 'y1 = zoom*cos(w)*p;\n' + 'x = 0.5 + x1/q6;\n' + 'y = 0.5 + y1;\n' + 'rad *= .1*zoom/d;'),

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
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.8529,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.12521,
			x : 0.2,
			y : 0.5,
			ang : 0.0,
			sides : 10.0,
			border_r : 0.0,
			num_inst : 100.0,
			},
		'init_eqs' : function(m) {
m.p0 = 0;
m.q1 = 0;
m.p1 = 0;
m.q2 = 0;
m.p2 = 0;
m.p3 = 0;
m.d = 0;
m.q6 = 0;
m.sample = 0;
m.mx = 0;
m.my = 0;
m.p = 0;
m.zoom = 0;
m.t = 0;
m.y1 = 0;
m.x1 = 0;
m.z = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.sample = div(m.instance,m.num_inst);
m.p = 0;
m.z = (((0.15+(0.05*Math.sin((0.16*m.time))))*(1+(4*m.p)))*(1+(0.4*Math.sin((m.time+(10*m.p))))));
m.x1 = (m.z*(div((0.3*Math.sin((0.5*m.q1))),(0.2+m.p))+(0.3*Math.sin(((6*m.p)+m.time)))));
m.y1 = (m.z*(div((0.3*Math.sin((0.5*m.q2))),(0.2+m.p))+(0.3*Math.sin(((6*m.p)-m.time)))));
m.p0 = 3;
m.p1 = (m.p0*m.sample);
m.p2 = mod(m.p1,m.p0);
m.p3 = div((2*3.14),m.p0);
m.x = (m.p2-m.p1);
m.y = 0;
m.t = (20*Math.sin((((0.02*m.time)+(0.1*m.q1))+(0.1*m.q2))));
m.mx = ((m.x*Math.sin(((m.p2*m.p3)+m.t)))+(m.y*Math.cos(((m.p2*m.p3)+m.t))));
m.my = ((m.y*Math.sin(((m.p2*m.p3)+m.t)))-(m.x*Math.cos(((m.p2*m.p3)+m.t))));
m.d = sqrt(((m.mx*m.mx)+(m.my*m.my)));
m.rad = (m.rad*(1-(0.6*m.d)));
m.zoom = (0.8*m.z);
m.x = (0.5+div((m.x1+(m.zoom*m.mx)),m.q6));
m.y = ((0.5+m.y1)+(m.zoom*m.my));
m.rad = ((m.rad*m.zoom)*Math.sin(((3*3.14)*m.sample)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('sample=instance/num_inst;\n' + 'p=0;\n' + 'z=(.15+.05*sin(.16*time))*(1+4*p)*(1+.4*sin(time+10*p));\n' + 'x1= z* (.3*sin(.5*q1)/(.2+p) + .3*sin(6*p+time));\n' + 'y1= z* ( .3*sin(.5*q2)/(.2+p) + .3*sin(6*p-time));\n' + 'p0=3;\n' + '   p1=p0*sample;\n' + '   p2=p1%p0;\n' + '   p3=2*3.14/p0;\n' + 'x=p2-p1;\n' + '      y=0;\n' + 't =  20*sin(.02*time+.1*q1+.1*q2);\n' + 'mx=x*sin(p2*p3+t)+y*cos(p2*p3+t);\n' + 'my=y*sin(p2*p3+t)-x*cos(p2*p3+t);\n' + 'd=sqrt(mx*mx+my*my);\n' + 'rad=rad*(1-.6*d);\n' + 'zoom=.8*z;\n' + 'x=.5+(x1+zoom*mx)/q6;\n' + '    y=.5+y1 + zoom*my;\n' + 'rad=rad*zoom*sin(3*3.14*sample);'),

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
			tex_zoom : 1.8717,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.7,
			r : 1.0,
			border_g : 1.0,
			rad : 2.03064,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q6 = 0;
m.p = 0;
m.y1 = 0;
m.x1 = 0;
m.z = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.p = 0;
m.z = (((0.15+(0.05*Math.sin((0.16*m.time))))*(1+(4*m.p)))*(1+(0.4*Math.sin((m.time+(10*m.p))))));
m.x1 = (m.z*(div((0.3*Math.sin((0.5*m.q1))),(0.2+m.p))+(0.3*Math.sin(((6*m.p)+m.time)))));
m.y1 = (m.z*(div((0.3*Math.sin((0.5*m.q2))),(0.2+m.p))+(0.3*Math.sin(((6*m.p)-m.time)))));
m.x = (0.5+div(m.x1,m.q6));
m.y = (0.5+m.y1);
m.rad *= m.z;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('p=0;\n' + 'z=(.15+.05*sin(.16*time))*(1+4*p)*(1+.4*sin(time+10*p));\n' + 'x1= z* (.3*sin(.5*q1)/(.2+p) + .3*sin(6*p+time));\n' + 'y1= z* ( .3*sin(.5*q2)/(.2+p) + .3*sin(6*p-time));\n' + 'x =.5 + x1/q6;\n' + '      y =.5 + y1;\n' + 'rad*=z;'),

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
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.46942,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.49923,
			x : 0.38,
			y : 0.28,
			ang : 1.57079,
			sides : 6.0,
			border_r : 1.0,
			num_inst : 1020.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.c = 0;
m.n1 = 0;
m.n2 = 0;
m.q6 = 0;
m.i = 0;
m.sa = 0;
m.p = 0;
m.t = 0;
m.y1 = 0;
m.x1 = 0;
m.z = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.i = m.instance;
m.sa = div(m.i,m.num_inst);
m.n1 = 34;
m.n2 = 30;
m.p = div(mod(div(m.i,m.n2),m.n1),m.n1);
m.t = (((m.n1*6.28)*m.sa)+(20*Math.sin((((0.02*m.time)+(0.1*m.q1))+(0.1*m.q2)))));
m.z = (((0.15+(0.05*Math.sin((0.16*m.time))))*(1+(5*m.p)))*(1+(0.4*Math.sin((m.time+(10*m.p))))));
m.x1 = (m.z*(((Math.cos(m.t)*(1-(0.3*m.c)))+div((0.3*Math.sin((0.5*m.q1))),(0.2+m.p)))+(0.3*Math.sin(((7*m.p)+m.time)))));
m.y1 = (m.z*(((Math.sin(m.t)*(1-(0.3*m.c)))+div((0.3*Math.sin((0.5*m.q2))),(0.2+m.p)))+(0.3*Math.sin(((7*m.p)-m.time)))));
m.x = (0.5+div(m.x1,m.q6));
m.y = (0.5+m.y1);
m.rad *= (m.z*(1-(0.92*m.c)));
m.ang = (div(3.14,4)-m.t);
m.r = (((0.3*m.p)*(1+(0.2*Math.sin((m.i+(m.i*m.i))))))+(5*m.c));
m.g = (5*m.c);
m.b = (5*m.c);
m.r2 = (0.5*m.r);
m.g2 = (0.5*m.g);
m.b2 = (0.5*m.b);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('i=instance;\n' + '   sa=i/num_inst;\n' + 'n1=34;\n' + '     n2=30;\n' + '      p=((i/n2)%n1)/n1;\n' + 't = n1*6.28*sa +  20*sin(.02*time+.1*q1+.1*q2);\n' + 'z=(.15+.05*sin(.16*time))*(1+5*p)*(1+.4*sin(time+10*p));\n' + 'x1= z* (cos(t)*(1-.3*c) + .3*sin(.5*q1)/(.2+p) + .3*sin(7*p+time));\n' + 'y1= z* (sin(t)*(1-.3*c) + .3*sin(.5*q2)/(.2+p) + .3*sin(7*p-time));\n' + 'x =.5 + x1/q6;\n' + '      y =.5 + y1;\n' + 'rad *= z*(1-.92*c);\n' + '       ang=3.14/4-t;\n' + 'r=.3*p*(1+.2*sin(i+i*i))+5*c;\n' + '     g=5*c;\n' + '     b=5*c;\n' + 'r2=.5*r;\n' + '                          g2=.5*g;\n' + '   b2=.5*b;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('decay=.6;\n' + 'q6=aspecty;\n' + 'bt1 = bt1*0.95 + sqr(bass*4)*20/fps;\n' + 'bt2 = bt2 + bt1*0.005;\n' + 'bt = bt2 *0.01;\n' + 'tt1 = tt1*0.95 + sqr(treb*4)*20/fps;\n' + 'tt2 = tt2 + tt1*0.005;\n' + 'tt = tt2 *0.01;\n' + 'q1=bt;\n' + '     q2=tt;\n' + 't10=t10+2/fps;\n' + 't10=t10*above(50,t10);\n' + 'q10=t10;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
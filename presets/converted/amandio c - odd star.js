define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 0.009,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.002,
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
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.4,
		decay : 1.0,
		wave_a : 0.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 1.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.5,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q6 = 0;
m.p = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0;
m.q6 = m.aspecty;
m.p += m.bass;
m.q1 = ((3*3.14)*Math.sin(((0.2*m.time)+(0.001*m.p))));
m.q2 = (0.3+(0.1*Math.sin(((0.4*m.time)+(0.002*m.p)))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.4,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 60.80387,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
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
			r2 : 0.03,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 6.28319,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.19614,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.03,
			border_g : 1.0,
			rad : 2.99311,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.21795,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 2.01782,
			x : 0.5,
			y : 0.08,
			ang : 0.0,
			sides : 3.0,
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 3.40028,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.7,
			border_g : 1.0,
			rad : 2.01043,
			x : 0.5,
			y : 0.61,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 627.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q6 = 0;
m.sa3 = 0;
m.i = 0;
m.mx = 0;
m.my = 0;
m.m = 0;
m.n = 0;
m.sa = 0;
m.p = 0;
m.s = 0;
m.t = 0;
m.w = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['y1','x1'];
			return m;
		},
		'frame_eqs' : function(m) {
m.m = 5;
m.n = 7;
m.i = m.instance;
m.sa = div(m.i,(((m.n*6)*m.m)*3));
m.sa3 = div(mod((m.m*m.sa),m.m),m.m);
m.t3 = ((6.28*m.sa3)+m.q1);
m.z3 = m.q2;
m.x3 = ((m.z3*Math.sin(m.t3))*Math.sin((0.5*m.q1)));
m.y3 = (m.z3*Math.cos(m.t3));
m.w = Math.atan2(m.y3, m.x3);
m.s = div(mod(div(m.i,6),(3*m.n)),(3*m.n));
m.p = mod((3*m.s),3);
m.t = m.w;
m.mx = ((m.x1*Math.sin(m.t))+(m.y1*Math.cos(m.t)));
m.my = ((m.y1*Math.sin(m.t))-(m.x1*Math.cos(m.t)));
m.z1 = m.z3;
m.x1 = (m.z1*m.mx);
m.y1 = (m.z1*m.my);
m.t2 = (((((((3*m.m)*m.n)*6.28)*m.sa)+(((0.01*m.sa)*m.n)*m.m))-m.t)-1.57);
m.z2 = div((0.8*m.z1),m.n);
m.x2 = (m.z2*Math.sin(m.t2));
m.y2 = (m.z2*Math.cos(m.t2));
m.x = (0.5+div(((m.x1+m.x2)+m.x3),m.q6));
m.y = (0.5+((m.y1+m.y2)+m.y3));
m.rad *= m.z2;
m.ang = (div(3.14,4)+m.t2);
m.t3 = (0.5+(0.4*Math.sin((3.14*m.s))));
m.r = (0.1+mod((0.45*div(m.i,2)),3));
m.r *= m.t3;
m.r2 = m.r;
m.b = (((((m.r*m.r)*m.r)*m.r)*m.r)*m.sa3);
m.b2 = m.b;
m.g = ((m.r*m.r)*m.r);
m.g2 = m.g;
m.a2 = m.a;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('m= 5;\n' + '   n=7;\n' + '     i=instance;\n' + '   sa=i/(n*6*m*3);\n' + 'sa3=((m*sa)%m)/m;\n' + '   t3=6.28*sa3 + q1 ;\n' + 'z3=q2;\n' + 'x3 = z3*sin(t3)*sin(.5*q1);\n' + '    y3 = z3*cos(t3);\n' + 'w=atan2(y3,x3);\n' + 's=((i/6)%(3*n))/(3*n);\n' + '    p=(3*s)%3;\n' + 't=w;\n' + 'mx=x1*sin(t)+y1*cos(t);\n' + 'my=y1*sin(t)-x1*cos(t);\n' + 'z1=z3;\n' + 'x1 = z1*mx;\n' + '    y1 = z1*my;\n' + 't2 = 3*m*n*6.28*sa +.01*sa*n*m - t -1.57  ;\n' + 'z2 = .8*z1/n;\n' + 'x2 = z2*sin(t2);\n' + '    y2 = z2*cos(t2);\n' + 'x=.5 + (x1+x2+x3)/q6;\n' + 'y=.5 + (y1+y2+y3);\n' + 'rad *= z2;\n' + '     ang=3.14/4+t2;\n' + 't3=.5+ .4*sin(3.14*s) ;\n' + 'r=.1+.45*(i/2)%3;\n' + 'r*=t3;\n' + '                r2=r;\n' + 'b=r*r*r*r*r*sa3;\n' + '          b2=b;\n' + 'g=r*r*r;\n' + '              g2=g;\n' + 'a2=a;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 2.01042,
			x : 0.38,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q6 = 0;
m.sa3 = 0;
m.i = 0;
m.mx = 0;
m.my = 0;
m.m = 0;
m.n = 0;
m.sa = 0;
m.p = 0;
m.s = 0;
m.t = 0;
m.w = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['y1','x1'];
			return m;
		},
		'frame_eqs' : function(m) {
m.m = 5;
m.n = 7;
m.i = 509.999;
m.sa = div(m.i,(((m.n*6)*m.m)*3));
m.sa3 = div(mod((m.m*m.sa),m.m),m.m);
m.t3 = ((6.28*m.sa3)+m.q1);
m.z3 = m.q2;
m.x3 = ((m.z3*Math.sin(m.t3))*Math.sin((0.5*m.q1)));
m.y3 = (m.z3*Math.cos(m.t3));
m.w = Math.atan2(m.y3, m.x3);
m.s = div(mod(div(m.i,6),(3*m.n)),(3*m.n));
m.p = mod((3*m.s),3);
m.t = m.w;
m.mx = ((m.x1*Math.sin(m.t))+(m.y1*Math.cos(m.t)));
m.my = ((m.y1*Math.sin(m.t))-(m.x1*Math.cos(m.t)));
m.z1 = m.z3;
m.x1 = (m.z1*m.mx);
m.y1 = (m.z1*m.my);
m.t2 = (((((((3*m.m)*m.n)*6.28)*m.sa)+(((0.01*m.sa)*m.n)*m.m))-m.t)-1.57);
m.z2 = div((0.8*m.z1),m.n);
m.x2 = (m.z2*Math.sin(m.t2));
m.y2 = (m.z2*Math.cos(m.t2));
m.x = (0.5+div(((m.x1+m.x2)+m.x3),m.q6));
m.y = (0.5+((m.y1+m.y2)+m.y3));
m.rad *= m.z2;
m.ang = (div(3.14,4)+m.t2);
m.t3 = (0.5+(0.4*Math.sin((3.14*m.s))));
m.r = 0.05;
m.r2 = m.r;
m.b = ((((m.r*m.r)*m.r)*m.r)*m.r);
m.b2 = m.b;
m.g = ((m.r*m.r)*m.r);
m.g2 = m.g;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('m= 5;\n' + '   n=7;\n' + '     i=509.999;\n' + '     sa=i/(n*6*m*3);\n' + 'sa3=((m*sa)%m)/m;\n' + '   t3=6.28*sa3 + q1 ;\n' + 'z3=q2;\n' + 'x3 = z3*sin(t3)*sin(.5*q1);\n' + '    y3 = z3*cos(t3);\n' + 'w=atan2(y3,x3);\n' + 's=((i/6)%(3*n))/(3*n);\n' + '    p=(3*s)%3;\n' + 't=w;\n' + 'mx=x1*sin(t)+y1*cos(t);\n' + 'my=y1*sin(t)-x1*cos(t);\n' + 'z1=z3;\n' + 'x1 = z1*mx;\n' + '    y1 = z1*my;\n' + 't2 = 3*m*n*6.28*sa +.01*sa*n*m - t -1.57  ;\n' + 'z2 = .8*z1/n;\n' + 'x2 = z2*sin(t2);\n' + '    y2 = z2*cos(t2);\n' + 'x=.5 + (x1+x2+x3)/q6;\n' + 'y=.5 + (y1+y2+y3);\n' + 'rad *= z2;\n' + '     ang=3.14/4+t2;\n' + 't3=.5+ .4*sin(3.14*s) ;\n' + 'r=.05;\n' + 'r2=r;\n' + 'b=r*r*r*r*r;\n' + '          b2=b;\n' + 'g=r*r*r;\n' + '              g2=g;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('decay=0;\n' + 'q6=aspecty;\n' + 'p+=bass;\n' + 'q1=3*3.14*sin(.2*time+.001*p);\n' + 'q2=.3+.1*sin(.4*time+.002*p);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
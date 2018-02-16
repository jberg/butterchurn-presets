define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.84,
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
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 5.0,
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
		ob_b : 1.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.4,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 2.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.5,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.bt2 = 0;
m.tt = 0;
m.q2 = 0;
m.q3 = 0;
m.btt = 0;
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
m.decay = 0.3;
m.q6 = m.aspecty;
m.bt1 = ((m.bt1*0.95)+div((sqr((m.bass*4))*20),m.fps));
m.bt2 = (m.bt2+(m.bt1*0.005));
m.bt = (m.bt2*0.01);
m.tt1 = ((m.tt1*0.95)+div((sqr((m.treb*4))*20),m.fps));
m.tt2 = (m.tt2+(m.tt1*0.005));
m.tt = (m.tt2*0.01);
m.q1 = m.bt;
m.q2 = m.tt;
m.btt = (m.btt+div(1,m.fps));
m.q3 = m.btt;
m.t10 = (m.t10+div(5,m.fps));
m.t10 = (m.t10*above(50, m.t10));
m.q10 = m.t10;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.03,
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
m.t = (0.004*m.time);
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
		'point_eqs_str' : ('q10=123*sample;\n' + 'x = -.5+sample;\n' + 'y = -.5+abs(sin(q10));\n' + 't=.004*time;\n' + 'mx = x*cos(t)+y*sin(t);\n' + 'my = y*cos(t)-x*sin(t);\n' + 'p1=.1*sin(630*sample);\n' + 'p2=.1*sin(530*sample);\n' + 'x= .5+p1+mx;\n' + 'y= .5+p2+my;'),

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
			a : 0.4,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 6.28319,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 15.74015,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.1,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 2.99365,
			x : 0.5,
			y : 0.09,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 25.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.y = (-1.2+(0.2*Math.log((1+m.instance))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('y=-1.2+.2*log(1+instance);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 4.08407,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 2.08797,
			additive : 0.0,
			border_a : 0.2,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 10.62951,
			x : 0.2,
			y : 0.5,
			ang : 1.5708,
			sides : 6.0,
			border_r : 1.0,
			num_inst : 324.0,
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 3.75605,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.21428,
			x : 0.5,
			y : 0.5,
			ang : 1.5708,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1014.0,
			},
		'init_eqs' : function(m) {
m.c = 0;
m.d = 0;
m.q6 = 0;
m.my_x = 0;
m.my_y = 0;
m.my_z = 0;
m.i = 0;
m.sample = 0;
m.my_z1 = 0;
m.my_z2 = 0;
m.l = 0;
m.sa = 0;
m.p = 0;
m.q10 = 0;
m.zoom = 0;
m.t = 0;
m.w = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.w1 = 0;
m.x2 = 0;
m.y3 = 0;
m.w2 = 0;
m.x3 = 0;
m.w3 = 0;
m.t1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.i = m.instance;
m.sa = div(m.i,1014);
m.sample = div(mod(div(m.i,6),169),169);
m.c = below(m.sample, 0.5);
m.my_x = (ifcond(mod((169*m.sample),2), -0.05, 0.05)+(0.12*Math.sin(((633*m.sample)+(0.2*m.time)))));
m.my_y = (ifcond(m.c, -0.035, 0.035)+(0.05*Math.sin(((853*m.sample)+(0.14*m.time)))));
m.my_z1 = ((100*m.sample)-m.q10);
m.my_z1 = ifcond(above(0, m.my_z1), (m.my_z1+50), m.my_z1);
m.my_z2 = ((-50+(100*m.sample))+m.q10);
m.my_z2 = ifcond(above(m.my_z2, 50), (m.my_z2-50), m.my_z2);
m.my_z = ifcond(m.c, m.my_z1, m.my_z2);
m.d = 0;
m.zoom = 20;
m.w1 = 0;
m.w2 = 0;
m.w3 = 0;
m.x1 = ((Math.cos(m.w1)*m.my_x)+(Math.sin(m.w1)*m.my_y));
m.y1 = ((-Math.sin(m.w1)*m.my_x)+(Math.cos(m.w1)*m.my_y));
m.z1 = m.my_z;
m.x2 = ((Math.cos(m.w2)*m.x1)+(Math.sin(m.w2)*m.z1));
m.z2 = ((-Math.sin(m.w2)*m.x1)+(Math.cos(m.w2)*m.z1));
m.y2 = m.y1;
m.y3 = ((Math.cos(m.w3)*m.y2)+(Math.sin(m.w3)*m.z2));
m.z3 = ((-Math.sin(m.w3)*m.y2)+(Math.cos(m.w3)*m.z2));
m.x3 = m.x2;
m.l = sqrt(((m.x3*m.x3)+(m.y3*m.y3)));
m.w = Math.atan2(m.x3, m.y3);
m.d = sqrt((((m.x3*m.x3)+(m.y3*m.y3))+((m.z3+m.d)*(m.z3+m.d))));
m.p = Math.tan((Math.asin(1)+Math.atan2((m.d+m.z3), m.l)));
m.my_x = ((m.zoom*Math.sin(m.w))*m.p);
m.my_y = ((m.zoom*Math.cos(m.w))*m.p);
m.x = (0.5+div(m.my_x,m.q6));
m.y = (0.5+m.my_y);
m.t = (((169*6.28)*m.sa)+(2*m.d));
m.z1 = 0.025;
m.x2 = div((m.z1*Math.sin(m.t)),m.d);
m.y2 = div((m.z1*Math.cos(m.t)),m.d);
m.x = (m.x+div(m.x2,m.q6));
m.y = (m.y+m.y2);
m.rad *= div((10*m.z1),m.d);
m.ang = (div(3.14,4)+m.t);
m.t1 = div(2,m.d);
m.r = (m.t1*(0.05+mod((0.4*div(m.i,2)),3)));
m.r2 = m.r;
m.g = m.r;
m.g2 = m.g;
m.b = m.r;
m.b2 = m.b;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('i=instance;\n' + '   sa=i/1014;\n' + '    sample=((i/6)%169)/169;\n' + 'c=below(sample,.5);\n' + 'my_x=if((169*sample)%2,-.05,.05)+.12*sin(633*sample+.2*time);\n' + 'my_y=if(c,-.035,.035)+.05*sin(853*sample+.14*time);\n' + 'my_z1=(100*sample)-q10;\n' + 'my_z1=if(above(0,my_z1),my_z1+50,my_z1);\n' + 'my_z2=(-50+100*sample)+q10;\n' + 'my_z2=if(above(my_z2,50),my_z2-50,my_z2);\n' + 'my_z=if(c,my_z1,my_z2);\n' + 'd = 0;\n' + 'zoom = 20;\n' + 'w1 = 0;\n' + 'w2 = 0;\n' + 'w3 = 0;\n' + 'x1 = cos(w1)*my_x + sin(w1)*my_y;\n' + 'y1 = -sin(w1)*my_x + cos(w1)*my_y;\n' + 'z1 = my_z;\n' + 'x2 = cos(w2)*x1 + sin(w2)*z1;\n' + 'z2 = -sin(w2)*x1 + cos(w2)*z1;\n' + 'y2 = y1;\n' + 'y3 = cos(w3)*y2 + sin(w3)*z2;\n' + 'z3 = -sin(w3)*y2 + cos(w3)*z2;\n' + 'x3 = x2;\n' + 'l = sqrt(x3*x3 + y3*y3);\n' + 'w = atan2(x3,y3);\n' + 'd = sqrt(x3*x3 + y3*y3 + (z3+d)*(z3+d));\n' + 'p = tan(asin(1) + atan2(d+z3,l));\n' + 'my_x = zoom*sin(w)*p;\n' + 'my_y = zoom*cos(w)*p;\n' + 'x = 0.5 + my_x/q6;\n' + 'y = 0.5 + my_y;\n' + 't = 169*6.28*sa + 2*d;\n' + 'z1=.025;\n' + 'x2=z1*sin(t)/d;\n' + '      y2=z1*cos(t)/d;\n' + 'x=x+x2/q6;\n' + '       y=y+y2;\n' + 'rad *= 10*z1/d;\n' + 'ang = 3.14/4 + t ;\n' + 't1=2/d;\n' + 'r=t1*(.05+.4*(i/2)%3);\n' + '           r2=r;\n' + 'g=r;\n' + '    g2=g;\n' + 'b=r;\n' + '    b2=b;'),

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
			tex_zoom : 0.69891,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 2.1341,
			x : 0.38,
			y : 0.28,
			ang : 0.75398,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1014.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q6 = 0;
m.i = 0;
m.sa = 0;
m.t = 0;
m.z1 = 0;
m.y1 = 0;
m.x1 = 0;
m.z = 0;
m.t1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.i = m.instance;
m.sa = div(m.i,1014);
m.t1 = div(mod(div(m.i,6),169),169);
m.x1 = ((0.5*m.t1)*Math.sin((16*m.t1)));
m.y1 = ((0.5*m.t1)*Math.cos((16*m.t1)));
m.t = ((((((169*6.28)*m.sa)+(16*m.t1))+(0.5*m.sa))+(3*m.q3))+m.ang);
m.z = (0.05+(0.05*m.t1));
m.x = (m.z*Math.sin(m.t));
m.y = (m.z*Math.cos(m.t));
m.z1 = (0.8+(0.4*Math.sin(((3*((2*m.t1)+((1*m.x1)*m.y1)))+(0.5*m.q3)))));
m.x = (0.5+div((m.z1*(m.x+m.x1)),m.q6));
m.y = (0.5+(m.z1*(m.y+m.y1)));
m.x += (0.3*m.q1);
m.y += (0.3*m.q2);
m.ang = ((((div(3.14,4)+m.t)-mod((((2*m.t)+3.14)*m.y),2))-mod(((2*m.t)*m.x),2))+mod((mod(((4*m.t)*m.x),2)*m.y),2));
m.x = (((m.x-Math.floor(m.x))-mod(m.x,2))*pow(-1, Math.floor(m.x)));
m.y = (((m.y-Math.floor(m.y))-mod(m.y,2))*pow(-1, Math.floor(m.y)));
m.rad *= (m.z*m.z1);
m.t1 = (0.5+(0.4*Math.sin(((13*m.t1)+(5*m.q3)))));
m.r = (m.t1*(0.05+mod((0.4*div(m.i,2)),3)));
m.g = ((m.t1*(0.8+(0.2*Math.sin((0.24*m.time)))))*m.r);
m.b = ((m.t1*(0.8+(0.2*Math.sin((0.11*m.time)))))*m.r);
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('i=instance;\n' + '   sa=i/1014;\n' + 't1=((i/6)%169)/169;\n' + 'x1=.5*t1*sin(16*t1);\n' + 'y1=.5*t1*cos(16*t1);\n' + 't = 169*6.28*sa + 16*t1 + .5*sa + 3*q3 +ang;\n' + 'z=.05+.05*t1;\n' + 'x = z*sin(t);\n' + '    y = z*cos(t);\n' + 'z1=.8+.4*sin(3*(2*t1+1*x1*y1)+.5*q3);\n' + 'x= .5+ z1* (x+x1)/q6 ;\n' + 'y= .5+ z1* (y+y1) ;\n' + 'x+= .3*q1;\n' + '     y+= .3*q2;\n' + 'ang = 3.14/4 + t - (2*t+3.14)*y%2  - 2*t*x%2 + 4*t*x%2*y%2  ;\n' + 'x=(x-int(x)-x%2)*pow(-1,int(x));\n' + 'y=(y-int(y)-y%2)*pow(-1,int(y));\n' + 'rad *= z*z1;\n' + 't1=.5+.4*sin(13*t1+5*q3);\n' + 'r=t1*(.05+.4*(i/2)%3);\n' + 'g=t1*(.8+.2*sin(.24*time))*r;\n' + 'b=t1*(.8+.2*sin(.11*time))*r;\n' + 'r2=r;\n' + '     g2=g;\n' + '     b2=b;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('decay=.3;\n' + 'q6=aspecty;\n' + 'bt1 = bt1*0.95 + sqr(bass*4)*20/fps;\n' + 'bt2 = bt2 + bt1*0.005;\n' + 'bt = bt2 *0.01;\n' + 'tt1 = tt1*0.95 + sqr(treb*4)*20/fps;\n' + 'tt2 = tt2 + tt1*0.005;\n' + 'tt = tt2 *0.01;\n' + 'q1=bt;\n' + 'q2=tt;\n' + 'btt=btt+1/fps;\n' + 'q3=btt;\n' + 't10=t10+5/fps;\n' + 't10=t10*above(50,t10);\n' + 'q10=t10;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
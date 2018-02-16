define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.4,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 2.713,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.00909,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.44,
		ib_r : 0.25,
		mv_b : 0.5,
		echo_zoom : 2.0,
		ob_size : 0.5,
		b1ed : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99951,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.2,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.009,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 0.5,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.2,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.dd = 0;
m.q1 = 0;
m.voltime = 0;
m.a = 0;
m.q2 = 0;
m.b = 0;
m.q3 = 0;
m.c = 0;
m.n1 = 0;
m.q4 = 0;
m.d = 0;
m.n2 = 0;
m.q5 = 0;
m.j1 = 0;
m.j2 = 0;
m.j3 = 0;
m.n = 0;
m.q32 = 0;
m.q11 = 0;
m.q12 = 0;
m.vol = 0;
m.q13 = 0;
m.q14 = 0;
m.q15 = 0;
m.v = 0;
m.q16 = 0;
m.q17 = 0;
m.z1 = 0;
m.y1 = 0;
m.x1 = 0;
m.dz1 = 0;
m.dy1 = 0;
m.dx1 = 0;
m.x1 = 2;
m.y1 = 2;
m.z1 = 2;
		return m;
	},
	'frame_eqs' : function(m) {
m.q1 = m.aspectx;
m.q2 = m.aspecty;
m.wave_a = 0;
m.v = 0.5;
m.j1 = ((m.j1*0.95)+(sqr((m.bass*4))*m.v));
m.j2 = ((m.j2*0.95)+(sqr((m.mid*4))*m.v));
m.j3 = ((m.j3*0.95)+(sqr((m.treb*4))*m.v));
m.n = (m.n+(m.j1*0.0052));
m.n1 = (m.n1+(m.j2*0.0052));
m.n2 = (m.n2+(m.j3*0.0052));
m.q3 = (m.n*0.01);
m.q4 = (m.n1*0.01);
m.q5 = (m.n2*0.01);
m.a = 10;
m.b = 28;
m.c = div(9,5);
m.dx1 = (m.a*(m.y1-m.x1));
m.dy1 = ((m.x1*(m.b-m.z1))-m.y1);
m.dz1 = ((m.x1*m.y1)-(m.c*m.z1));
m.d = 1;
m.dd = sqrt((((m.dx1*m.dx1)+(m.dy1*m.dy1))+(m.dz1*m.dz1)));
m.x1 = (m.x1+div((m.d*m.dx1),m.dd));
m.y1 = (m.y1+div((m.d*m.dy1),m.dd));
m.z1 = (m.z1+div((m.d*m.dz1),m.dd));
m.q11 = m.x1;
m.q12 = m.y1;
m.q13 = m.z1;
m.q14 = m.a;
m.q15 = m.b;
m.q16 = m.c;
m.q17 = m.d;
m.vol = (((m.bass_att+m.treb_att)+m.mid_att)*0.25);
m.vol = (m.vol*m.vol);
m.voltime = (m.voltime+(0.1*m.vol));
m.q32 = (0.4*m.voltime);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.21,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 100.0,
			samples : 495.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 4.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.my_x = 0;
m.my_y = 0;
m.my_z = 0;
m.l = 0;
m.p = 0;
m.zz1 = 0;
m.yy1 = 0;
m.xx1 = 0;
m.q11 = 0;
m.q12 = 0;
m.q13 = 0;
m.zoom = 0;
m.q14 = 0;
m.q15 = 0;
m.q16 = 0;
m.w = 0;
m.q17 = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.w1 = 0;
m.x2 = 0;
m.y3 = 0;
m.dz1 = 0;
m.w2 = 0;
m.x3 = 0;
m.dy1 = 0;
m.w3 = 0;
m.dx1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.ab = 1;
			m.rkeys = ['zz1','yy1','xx1'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.xx1 = ifcond(equal(m.sample, 0), m.q11, m.xx1);
m.yy1 = ifcond(equal(m.sample, 0), m.q12, m.yy1);
m.zz1 = ifcond(equal(m.sample, 0), m.q13, m.zz1);
m.dx1 = (m.q14*(m.yy1-m.xx1));
m.dy1 = ((m.xx1*(m.q15-m.zz1))-m.yy1);
m.dz1 = ((m.xx1*m.yy1)-(m.q16*m.zz1));
m.xx1 = (m.xx1+(m.q17*m.dx1));
m.yy1 = (m.yy1+(m.q17*m.dy1));
m.zz1 = (m.zz1+(m.q17*m.dz1));
m.my_x = (m.xx1*0.1);
m.my_y = (m.yy1*0.1);
m.my_z = ((m.zz1*0.1)-3);
m.d = 5;
m.zoom = 0.4;
m.w1 = m.q2;
m.w2 = m.q3;
m.w3 = m.q4;
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
m.p = Math.tan((Math.asin(1)+Math.atan2((m.d+m.z3), m.l)));
m.d = sqrt((((m.x3*m.x3)+(m.y3*m.y3))+((m.z3+m.d)*(m.z3+m.d))));
m.my_x = ((m.zoom*Math.sin(m.w))*m.p);
m.my_y = ((m.zoom*Math.cos(m.w))*m.p);
m.x = (0.5+m.my_x);
m.y = (0.5+m.my_y);
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'ab = 1;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('xx1 = if(equal(sample,0),q11,xx1);\n' + 'yy1 = if(equal(sample,0),q12,yy1);\n' + 'zz1 = if(equal(sample,0),q13,zz1);\n' + 'dx1 = q14*(yy1-xx1);\n' + 'dy1 = xx1*(q15-zz1)-yy1;\n' + 'dz1 = xx1*yy1-q16*zz1;\n' + 'xx1 = xx1 + q17*dx1;\n' + 'yy1 = yy1 + q17*dy1;\n' + 'zz1 = zz1 + q17*dz1;\n' + 'my_x = xx1*0.1;\n' + 'my_y = yy1*0.1;\n' + 'my_z = zz1*0.1 - 3;\n' + 'd = 5;\n' + 'zoom = 0.4;\n' + 'w1 = q2;\n' + 'w2 = q3;\n' + 'w3 = q4;\n' + 'x1 = cos(w1)*my_x + sin(w1)*my_y;\n' + 'y1 = -sin(w1)*my_x + cos(w1)*my_y;\n' + 'z1 = my_z;\n' + 'x2 = cos(w2)*x1 + sin(w2)*z1;\n' + 'z2 = -sin(w2)*x1 + cos(w2)*z1;\n' + 'y2 = y1;\n' + 'y3 = cos(w3)*y2 + sin(w3)*z2;\n' + 'z3 = -sin(w3)*y2 + cos(w3)*z2;\n' + 'x3 = x2;\n' + 'l = sqrt(x3*x3 + y3*y3);\n' + 'w = atan2(x3,y3);\n' + 'p = tan(asin(1) + atan2(d+z3,l));\n' + 'd = sqrt(x3*x3 + y3*y3 + (z3+d)*(z3+d));\n' + 'my_x = zoom*sin(w)*p;\n' + 'my_y = zoom*cos(w)*p;\n' + 'x = 0.5 + my_x;\n' + 'y = 0.5 + my_y;'),

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
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.my_x = 0;
m.my_y = 0;
m.my_z = 0;
m.zz1 = 0;
m.yy1 = 0;
m.xx1 = 0;
m.q11 = 0;
m.q12 = 0;
m.q13 = 0;
m.q14 = 0;
m.q15 = 0;
m.q16 = 0;
m.q17 = 0;
m.dz1 = 0;
m.dy1 = 0;
m.dx1 = 0;

			m.rkeys = ['zz1','yy1','xx1'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.xx1 = ifcond(equal(m.sample, 0), m.q11, m.xx1);
m.yy1 = ifcond(equal(m.sample, 0), m.q12, m.yy1);
m.zz1 = ifcond(equal(m.sample, 0), m.q13, m.zz1);
m.dx1 = (m.q14*(m.yy1-m.xx1));
m.dy1 = ((m.xx1*(m.q15-m.zz1))-m.yy1);
m.dz1 = ((m.xx1*m.yy1)-(m.q16*m.zz1));
m.xx1 = (m.xx1+(m.q17*m.dx1));
m.yy1 = (m.yy1+(m.q17*m.dy1));
m.zz1 = (m.zz1+(m.q17*m.dz1));
m.my_x = (m.xx1*0.02);
m.my_y = (m.yy1*0.02);
m.my_z = (m.zz1*0.02);
m.x = (0.5+m.my_x);
m.y = (0.5+m.my_y);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('xx1 = if(equal(sample,0),q11,xx1);\n' + 'yy1 = if(equal(sample,0),q12,yy1);\n' + 'zz1 = if(equal(sample,0),q13,zz1);\n' + 'dx1 = q14*(yy1-xx1);\n' + 'dy1 = xx1*(q15-zz1)-yy1;\n' + 'dz1 = xx1*yy1-q16*zz1;\n' + 'xx1 = xx1 + q17*dx1;\n' + 'yy1 = yy1 + q17*dy1;\n' + 'zz1 = zz1 + q17*dz1;\n' + 'my_x = xx1*0.02;\n' + 'my_y = yy1*0.02;\n' + 'my_z = zz1*0.02;\n' + 'x = 0.5 + my_x;\n' + 'y = 0.5 + my_y;'),

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
			b : 0.0,
			tex_ang : 3.14159,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.99979,
			additive : 1.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.20065,
			x : 0.5,
			y : 0.5,
			ang : 0.75398,
			sides : 3.0,
			border_r : 0.01,
			num_inst : 175.0,
			},
		'init_eqs' : function(m) {
m.dd = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.my_x = 0;
m.my_y = 0;
m.my_z = 0;
m.l = 0;
m.p = 0;
m.q32 = 0;
m.zz1 = 0;
m.yy1 = 0;
m.xx1 = 0;
m.q11 = 0;
m.q12 = 0;
m.q13 = 0;
m.zoom = 0;
m.q14 = 0;
m.q15 = 0;
m.q16 = 0;
m.w = 0;
m.q17 = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.w1 = 0;
m.x2 = 0;
m.y3 = 0;
m.dz1 = 0;
m.w2 = 0;
m.x3 = 0;
m.dy1 = 0;
m.w3 = 0;
m.dx1 = 0;

			m.rkeys = ['zz1','yy1','xx1'];
			return m;
		},
		'frame_eqs' : function(m) {
m.xx1 = ifcond(equal(m.instance, 0), m.q11, m.xx1);
m.yy1 = ifcond(equal(m.instance, 0), m.q12, m.yy1);
m.zz1 = ifcond(equal(m.instance, 0), m.q13, m.zz1);
m.dx1 = (m.q14*(m.yy1-m.xx1));
m.dy1 = ((m.xx1*(m.q15-m.zz1))-m.yy1);
m.dz1 = ((m.xx1*m.yy1)-(m.q16*m.zz1));
m.dd = sqrt((((m.dx1*m.dx1)+(m.dy1*m.dy1))+(m.dz1*m.dz1)));
m.xx1 = (m.xx1+div((m.q17*m.dx1),m.dd));
m.yy1 = (m.yy1+div((m.q17*m.dy1),m.dd));
m.zz1 = (m.zz1+div((m.q17*m.dz1),m.dd));
m.my_x = (m.xx1*0.1);
m.my_y = (m.yy1*0.1);
m.my_z = ((m.zz1*0.1)-3);
m.d = 4.75;
m.zoom = (0.55+(0.25*Math.sin((0.5*m.q32))));
m.w1 = m.q3;
m.w2 = m.q4;
m.w3 = m.q5;
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
m.p = Math.tan((Math.asin(1)+Math.atan2((m.d+m.z3), m.l)));
m.d = sqrt((((m.x3*m.x3)+(m.y3*m.y3))+((m.z3+m.d)*(m.z3+m.d))));
m.my_x = ((m.zoom*Math.sin(m.w))*m.p);
m.my_y = ((m.zoom*Math.cos(m.w))*m.p);
m.x = (0.5+m.my_x);
m.y = (0.5+m.my_y);
m.rad = div(m.rad,m.d);
m.ang = (m.ang-((div(m.instance,m.num_inst)*Math.asin(1))*8));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('xx1 = if(equal(instance,0),q11,xx1);\n' + 'yy1 = if(equal(instance,0),q12,yy1);\n' + 'zz1 = if(equal(instance,0),q13,zz1);\n' + 'dx1 = q14*(yy1-xx1);\n' + 'dy1 = xx1*(q15-zz1)-yy1;\n' + 'dz1 = xx1*yy1-q16*zz1;\n' + 'dd = sqrt(dx1*dx1+dy1*dy1+dz1*dz1);\n' + 'xx1 = xx1 + q17*dx1/dd;\n' + 'yy1 = yy1 + q17*dy1/dd;\n' + 'zz1 = zz1 + q17*dz1/dd;\n' + 'my_x = xx1*0.1;\n' + 'my_y = yy1*0.1;\n' + 'my_z = zz1*0.1 - 3;\n' + 'd = 4.75;\n' + 'zoom = .55+0.25*sin(.5*q32);\n' + 'w1 = q3;\n' + 'w2 = q4;\n' + 'w3 = q5;\n' + 'x1 = cos(w1)*my_x + sin(w1)*my_y;\n' + 'y1 = -sin(w1)*my_x + cos(w1)*my_y;\n' + 'z1 = my_z;\n' + 'x2 = cos(w2)*x1 + sin(w2)*z1;\n' + 'z2 = -sin(w2)*x1 + cos(w2)*z1;\n' + 'y2 = y1;\n' + 'y3 = cos(w3)*y2 + sin(w3)*z2;\n' + 'z3 = -sin(w3)*y2 + cos(w3)*z2;\n' + 'x3 = x2;\n' + 'l = sqrt(x3*x3 + y3*y3);\n' + 'w = atan2(x3,y3);\n' + 'p = tan(asin(1) + atan2(d+z3,l));\n' + 'd = sqrt(x3*x3 + y3*y3 + (z3+d)*(z3+d));\n' + 'my_x = zoom*sin(w)*p;\n' + 'my_y = zoom*cos(w)*p;\n' + 'x = 0.5 + my_x;\n' + 'y = 0.5 + my_y;\n' + 'rad = rad/d;\n' + 'ang = ang-instance/num_inst*asin(1)*8;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.55,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.03,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.7874,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.2,
			border_g : 1.0,
			rad : 0.0986,
			x : 0.5,
			y : 0.55,
			ang : 0.0,
			sides : 12.0,
			border_r : 1.0,
			num_inst : 512.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.my_x = 0;
m.my_y = 0;
m.my_z = 0;
m.i = 0;
m.rnd1 = 0;
m.rnd2 = 0;
m.rnd3 = 0;
m.l = 0;
m.rnd4 = 0;
m.p = 0;
m.wh = 0;
m.zoom = 0;
m.t = 0;
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
m.t2 = 0;
m.t3 = 0;
m.wv = 0;
m.started = 0;
m.t1 = 0.412;
m.t2 = 0.4563;
m.t3 = 0.6452;
m.t4 = 0.2565;
			m.rkeys = ['rnd1','rnd2','rnd3','rnd4'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rnd1 = ifcond(equal(m.instance, 0), m.t1, m.rnd1);
m.rnd2 = ifcond(equal(m.instance, 0), m.t2, m.rnd2);
m.rnd3 = ifcond(equal(m.instance, 0), m.t3, m.rnd3);
m.rnd4 = ifcond(equal(m.instance, 0), m.t4, m.rnd4);
m.rnd1 = ((4*m.rnd1)*(1-m.rnd1));
m.rnd2 = ((4*m.rnd2)*(1-m.rnd2));
m.rnd3 = ((4*m.rnd3)*(1-m.rnd3));
m.rnd4 = ((4*m.rnd4)*(1-m.rnd4));
m.t = 0.6;
m.t = ((m.rnd1+(m.time*m.t))-Math.floor((m.rnd1+(m.time*m.t))));
m.t = (m.t+(m.rnd2*0.1));
m.wh = ((m.rnd4*Math.asin(1))*4);
m.wv = (0.25+(m.rnd3*0.1));
m.d = 6;
m.zoom = 1;
m.l = 1;
m.w1 = m.q3;
m.w2 = m.q4;
m.w3 = m.q5;
m.i = m.instance;
m.my_x = ((m.t*((Math.cos(m.wh)*Math.sin(m.wv))*m.l))*2);
m.my_z = (((-(-0.5+((m.t-0.75)*(m.t-0.75)))*Math.cos(m.wv))*m.l)*2);
m.my_y = ((m.t*((Math.sin(m.wh)*Math.sin(m.wv))*m.l))*2);
m.x1 = ((Math.cos(m.w1)*m.my_x)+(Math.sin(m.w1)*m.my_y));
m.y1 = ((-Math.sin(m.w1)*m.my_x)+(Math.cos(m.w1)*m.my_y));
m.z1 = m.my_z;
m.x2 = ((Math.cos(m.w2)*m.x1)+(Math.sin(m.w2)*m.z1));
m.z2 = ((-Math.sin(m.w2)*m.x1)+(Math.cos(m.w2)*m.z1));
m.y2 = m.y1;
m.y3 = ((Math.cos(m.w3)*m.y2)+(Math.sin(m.w3)*m.z2));
m.z3 = ((-Math.sin(m.w3)*m.y2)+(Math.cos(m.w3)*m.z2));
m.x3 = m.x2;
m.p = Math.tan((Math.asin(1)+Math.atan2((m.d+m.z3), sqrt(((m.x3*m.x3)+(m.y3*m.y3))))));
m.d = sqrt((((m.x3*m.x3)+(m.y3*m.y3))+((m.z3+m.d)*(m.z3+m.d))));
m.rad = div(m.rad,m.d);
m.my_x = ((m.zoom*Math.sin(Math.atan2(m.x3, m.y3)))*m.p);
m.my_y = ((m.zoom*Math.cos(Math.atan2(m.x3, m.y3)))*m.p);
m.x = (0.5+m.my_x);
m.y = (0.5+m.my_y);
m.x = (0.5+div((m.x-0.5),m.q2));
m.y = (0.5+div((m.y-0.5),m.q1));
		return m;
	},
		'init_eqs_str' : ('started = 0;\n' + 't1 = 0.412;\n' + 't2 = 0.4563;\n' + 't3 = 0.6452;\n' + 't4 = 0.2565;'),
		'frame_eqs_str' : ('rnd1 = if(equal(instance,0),t1,rnd1);\n' + 'rnd2 = if(equal(instance,0),t2,rnd2);\n' + 'rnd3 = if(equal(instance,0),t3,rnd3);\n' + 'rnd4 = if(equal(instance,0),t4,rnd4);\n' + 'rnd1 = 4*rnd1*(1-rnd1);\n' + 'rnd2 = 4*rnd2*(1-rnd2);\n' + 'rnd3 = 4*rnd3*(1-rnd3);\n' + 'rnd4 = 4*rnd4*(1-rnd4);\n' + 't = .6;\n' + 't =  (rnd1+time*t) - int(rnd1+time*t);\n' + 't = t + rnd2*0.1;\n' + 'wh = rnd4*asin(1)*4;\n' + 'wv = 0.25 + rnd3*0.1;\n' + 'd = 6;\n' + 'zoom = 1;\n' + 'l = 1;\n' + 'w1 = q3;\n' + 'w2 = q4;\n' + 'w3 = q5;\n' + 'i = instance;\n' + 'my_x = t *(cos(wh)*sin(wv)*l)*2;\n' + 'my_z = -(-0.5 +(t-0.75)*(t-0.75))*cos(wv)*l*2;\n' + 'my_y = t*(sin(wh)*sin(wv)*l)*2;\n' + 'x1 = cos(w1)*my_x + sin(w1)*my_y;\n' + 'y1 = -sin(w1)*my_x + cos(w1)*my_y;\n' + 'z1 = my_z;\n' + 'x2 = cos(w2)*x1 + sin(w2)*z1;\n' + 'z2 = -sin(w2)*x1 + cos(w2)*z1;\n' + 'y2 = y1;\n' + 'y3 = cos(w3)*y2 + sin(w3)*z2;\n' + 'z3 = -sin(w3)*y2 + cos(w3)*z2;\n' + 'x3 = x2;\n' + 'p = tan(asin(1) + atan2(d+z3,sqrt(x3*x3 + y3*y3)));\n' + 'd = sqrt(x3*x3 + y3*y3 + (z3+d)*(z3+d));\n' + 'rad = rad/d;\n' + 'my_x = zoom*sin(atan2(x3,y3))*p;\n' + 'my_y = zoom*cos(atan2(x3,y3))*p;\n' + 'x = 0.5 + my_x;\n' + 'y = 0.5 + my_y;\n' + 'x = 0.5 + (x-0.5)/q2;\n' + 'y = 0.5 + (y-0.5)/q1;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.55,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.1,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.7874,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.2667,
			x : 0.5,
			y : 0.55,
			ang : 0.0,
			sides : 12.0,
			border_r : 1.0,
			num_inst : 512.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.my_x = 0;
m.my_y = 0;
m.my_z = 0;
m.i = 0;
m.rnd1 = 0;
m.rnd2 = 0;
m.rnd3 = 0;
m.l = 0;
m.rnd4 = 0;
m.p = 0;
m.wh = 0;
m.zoom = 0;
m.t = 0;
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
m.t2 = 0;
m.t3 = 0;
m.wv = 0;
m.started = 0;
m.t1 = 0.412;
m.t2 = 0.4563;
m.t3 = 0.6452;
m.t4 = 0.2565;
			m.rkeys = ['rnd1','rnd2','rnd3','rnd4'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rnd1 = ifcond(equal(m.instance, 0), m.t1, m.rnd1);
m.rnd2 = ifcond(equal(m.instance, 0), m.t2, m.rnd2);
m.rnd3 = ifcond(equal(m.instance, 0), m.t3, m.rnd3);
m.rnd4 = ifcond(equal(m.instance, 0), m.t4, m.rnd4);
m.rnd1 = ((4*m.rnd1)*(1-m.rnd1));
m.rnd2 = ((4*m.rnd2)*(1-m.rnd2));
m.rnd3 = ((4*m.rnd3)*(1-m.rnd3));
m.rnd4 = ((4*m.rnd4)*(1-m.rnd4));
m.t = 0.6;
m.t = ((m.rnd1+(m.time*m.t))-Math.floor((m.rnd1+(m.time*m.t))));
m.t = (m.t+(m.rnd2*0.1));
m.wh = ((m.rnd4*Math.asin(1))*4);
m.wv = (0.25+(m.rnd3*0.1));
m.d = 6;
m.zoom = 1;
m.l = 1;
m.w1 = m.q3;
m.w2 = m.q4;
m.w3 = m.q5;
m.i = m.instance;
m.my_x = ((m.t*((Math.cos(m.wh)*Math.sin(m.wv))*m.l))*4);
m.my_z = ((((-0.5+((m.t-0.75)*(m.t-0.75)))*Math.cos(m.wv))*m.l)*4);
m.my_y = ((m.t*((Math.sin(m.wh)*Math.sin(m.wv))*m.l))*4);
m.x1 = ((Math.cos(m.w1)*m.my_x)+(Math.sin(m.w1)*m.my_y));
m.y1 = ((-Math.sin(m.w1)*m.my_x)+(Math.cos(m.w1)*m.my_y));
m.z1 = m.my_z;
m.x2 = ((Math.cos(m.w2)*m.x1)+(Math.sin(m.w2)*m.z1));
m.z2 = ((-Math.sin(m.w2)*m.x1)+(Math.cos(m.w2)*m.z1));
m.y2 = m.y1;
m.y3 = ((Math.cos(m.w3)*m.y2)+(Math.sin(m.w3)*m.z2));
m.z3 = ((-Math.sin(m.w3)*m.y2)+(Math.cos(m.w3)*m.z2));
m.x3 = m.x2;
m.p = Math.tan((Math.asin(1)+Math.atan2((m.d+m.z3), sqrt(((m.x3*m.x3)+(m.y3*m.y3))))));
m.d = sqrt((((m.x3*m.x3)+(m.y3*m.y3))+((m.z3+m.d)*(m.z3+m.d))));
m.rad = div(m.rad,m.d);
m.my_x = ((m.zoom*Math.sin(Math.atan2(m.x3, m.y3)))*m.p);
m.my_y = ((m.zoom*Math.cos(Math.atan2(m.x3, m.y3)))*m.p);
m.x = (0.5+m.my_x);
m.y = (0.5+m.my_y);
m.x = (0.5+div((m.x-0.5),m.q2));
m.y = (0.5+div((m.y-0.5),m.q1));
		return m;
	},
		'init_eqs_str' : ('started = 0;\n' + 't1 = 0.412;\n' + 't2 = 0.4563;\n' + 't3 = 0.6452;\n' + 't4 = 0.2565;'),
		'frame_eqs_str' : ('rnd1 = if(equal(instance,0),t1,rnd1);\n' + 'rnd2 = if(equal(instance,0),t2,rnd2);\n' + 'rnd3 = if(equal(instance,0),t3,rnd3);\n' + 'rnd4 = if(equal(instance,0),t4,rnd4);\n' + 'rnd1 = 4*rnd1*(1-rnd1);\n' + 'rnd2 = 4*rnd2*(1-rnd2);\n' + 'rnd3 = 4*rnd3*(1-rnd3);\n' + 'rnd4 = 4*rnd4*(1-rnd4);\n' + 't = .6;\n' + 't =  (rnd1+time*t) - int(rnd1+time*t);\n' + 't = t + rnd2*0.1;\n' + 'wh = rnd4*asin(1)*4;\n' + 'wv = 0.25 + rnd3*0.1;\n' + 'd = 6;\n' + 'zoom = 1;\n' + 'l = 1;\n' + 'w1 = q3;\n' + 'w2 = q4;\n' + 'w3 = q5;\n' + 'i = instance;\n' + 'my_x = t *(cos(wh)*sin(wv)*l)*4;\n' + 'my_z = (-0.5 +(t-0.75)*(t-0.75))*cos(wv)*l*4;\n' + 'my_y = t*(sin(wh)*sin(wv)*l)*4;\n' + 'x1 = cos(w1)*my_x + sin(w1)*my_y;\n' + 'y1 = -sin(w1)*my_x + cos(w1)*my_y;\n' + 'z1 = my_z;\n' + 'x2 = cos(w2)*x1 + sin(w2)*z1;\n' + 'z2 = -sin(w2)*x1 + cos(w2)*z1;\n' + 'y2 = y1;\n' + 'y3 = cos(w3)*y2 + sin(w3)*z2;\n' + 'z3 = -sin(w3)*y2 + cos(w3)*z2;\n' + 'x3 = x2;\n' + 'p = tan(asin(1) + atan2(d+z3,sqrt(x3*x3 + y3*y3)));\n' + 'd = sqrt(x3*x3 + y3*y3 + (z3+d)*(z3+d));\n' + 'rad = rad/d;\n' + 'my_x = zoom*sin(atan2(x3,y3))*p;\n' + 'my_y = zoom*cos(atan2(x3,y3))*p;\n' + 'x = 0.5 + my_x;\n' + 'y = 0.5 + my_y;\n' + 'x = 0.5 + (x-0.5)/q2;\n' + 'y = 0.5 + (y-0.5)/q1;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.11,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.02,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.7874,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.05012,
			x : 0.5,
			y : 0.55,
			ang : 0.0,
			sides : 12.0,
			border_r : 1.0,
			num_inst : 512.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.my_x = 0;
m.my_y = 0;
m.my_z = 0;
m.i = 0;
m.rnd1 = 0;
m.rnd2 = 0;
m.rnd3 = 0;
m.l = 0;
m.rnd4 = 0;
m.p = 0;
m.wh = 0;
m.zoom = 0;
m.t = 0;
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
m.t2 = 0;
m.t3 = 0;
m.wv = 0;
m.started = 0;
m.t1 = 0.412;
m.t2 = 0.4563;
m.t3 = 0.6452;
m.t4 = 0.2565;
			m.rkeys = ['rnd1','rnd2','rnd3','rnd4'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rnd1 = ifcond(equal(m.instance, 0), m.t1, m.rnd1);
m.rnd2 = ifcond(equal(m.instance, 0), m.t2, m.rnd2);
m.rnd3 = ifcond(equal(m.instance, 0), m.t3, m.rnd3);
m.rnd4 = ifcond(equal(m.instance, 0), m.t4, m.rnd4);
m.rnd1 = ((4*m.rnd1)*(1-m.rnd1));
m.rnd2 = ((4*m.rnd2)*(1-m.rnd2));
m.rnd3 = ((4*m.rnd3)*(1-m.rnd3));
m.rnd4 = ((4*m.rnd4)*(1-m.rnd4));
m.t = 0.6;
m.t = ((m.rnd1+(m.time*m.t))-Math.floor((m.rnd1+(m.time*m.t))));
m.t = (m.t+(m.rnd2*0.1));
m.wh = ((m.rnd4*Math.asin(1))*4);
m.wv = (0.25+(m.rnd3*0.1));
m.d = 1.4;
m.zoom = 1;
m.l = 1;
m.w1 = m.q3;
m.w2 = m.q4;
m.w3 = m.q5;
m.i = m.instance;
m.my_x = (m.t*((Math.cos(m.wh)*Math.sin(m.wv))*m.l));
m.my_y = (((-0.5+((m.t-0.75)*(m.t-0.75)))*Math.cos(m.wv))*m.l);
m.my_z = (m.t*((Math.sin(m.wh)*Math.sin(m.wv))*m.l));
m.x1 = ((Math.cos(m.w1)*m.my_x)+(Math.sin(m.w1)*m.my_y));
m.y1 = ((-Math.sin(m.w1)*m.my_x)+(Math.cos(m.w1)*m.my_y));
m.z1 = m.my_z;
m.x2 = ((Math.cos(m.w2)*m.x1)+(Math.sin(m.w2)*m.z1));
m.z2 = ((-Math.sin(m.w2)*m.x1)+(Math.cos(m.w2)*m.z1));
m.y2 = m.y1;
m.y3 = ((Math.cos(m.w3)*m.y2)+(Math.sin(m.w3)*m.z2));
m.z3 = ((-Math.sin(m.w3)*m.y2)+(Math.cos(m.w3)*m.z2));
m.x3 = m.x2;
m.p = Math.tan((Math.asin(1)+Math.atan2((m.d+m.z3), sqrt(((m.x3*m.x3)+(m.y3*m.y3))))));
m.d = sqrt((((m.x3*m.x3)+(m.y3*m.y3))+((m.z3+m.d)*(m.z3+m.d))));
m.rad = div(m.rad,m.d);
m.my_x = ((m.zoom*Math.sin(Math.atan2(m.x3, m.y3)))*m.p);
m.my_y = ((m.zoom*Math.cos(Math.atan2(m.x3, m.y3)))*m.p);
m.x = (0.5+m.my_x);
m.y = (0.5+m.my_y);
m.x = (0.5+div((m.x-0.5),m.q2));
m.y = (0.5+div((m.y-0.5),m.q1));
		return m;
	},
		'init_eqs_str' : ('started = 0;\n' + 't1 = 0.412;\n' + 't2 = 0.4563;\n' + 't3 = 0.6452;\n' + 't4 = 0.2565;'),
		'frame_eqs_str' : ('rnd1 = if(equal(instance,0),t1,rnd1);\n' + 'rnd2 = if(equal(instance,0),t2,rnd2);\n' + 'rnd3 = if(equal(instance,0),t3,rnd3);\n' + 'rnd4 = if(equal(instance,0),t4,rnd4);\n' + 'rnd1 = 4*rnd1*(1-rnd1);\n' + 'rnd2 = 4*rnd2*(1-rnd2);\n' + 'rnd3 = 4*rnd3*(1-rnd3);\n' + 'rnd4 = 4*rnd4*(1-rnd4);\n' + 't = .6;\n' + 't =  (rnd1+time*t) - int(rnd1+time*t);\n' + 't = t + rnd2*0.1;\n' + 'wh = rnd4*asin(1)*4;\n' + 'wv = 0.25 + rnd3*0.1;\n' + 'd = 1.4;\n' + 'zoom = 1;\n' + 'l = 1;\n' + 'w1 = q3;\n' + 'w2 = q4;\n' + 'w3 = q5;\n' + 'i = instance;\n' + 'my_x = t *(cos(wh)*sin(wv)*l);\n' + 'my_y = (-0.5 +(t-0.75)*(t-0.75))*cos(wv)*l;\n' + 'my_z = t*(sin(wh)*sin(wv)*l);\n' + 'x1 = cos(w1)*my_x + sin(w1)*my_y;\n' + 'y1 = -sin(w1)*my_x + cos(w1)*my_y;\n' + 'z1 = my_z;\n' + 'x2 = cos(w2)*x1 + sin(w2)*z1;\n' + 'z2 = -sin(w2)*x1 + cos(w2)*z1;\n' + 'y2 = y1;\n' + 'y3 = cos(w3)*y2 + sin(w3)*z2;\n' + 'z3 = -sin(w3)*y2 + cos(w3)*z2;\n' + 'x3 = x2;\n' + 'p = tan(asin(1) + atan2(d+z3,sqrt(x3*x3 + y3*y3)));\n' + 'd = sqrt(x3*x3 + y3*y3 + (z3+d)*(z3+d));\n' + 'rad = rad/d;\n' + 'my_x = zoom*sin(atan2(x3,y3))*p;\n' + 'my_y = zoom*cos(atan2(x3,y3))*p;\n' + 'x = 0.5 + my_x;\n' + 'y = 0.5 + my_y;\n' + 'x = 0.5 + (x-0.5)/q2;\n' + 'y = 0.5 + (y-0.5)/q1;'),

		}
],
	'warp' : ('highp vec2 xlat_mutabled;\n' + 'highp vec2 xlat_mutabled_uv;\n' + 'highp vec2 xlat_mutabledither_uv;\n' + 'highp vec3 xlat_mutabledx;\n' + 'highp vec3 xlat_mutabledy;\n' + 'highp vec3 xlat_mutablerand;\n' + 'shader_body {\n' + '   vec3 ret_1;\n' + '  xlat_mutabledither_uv = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec3 tmpvar_2;\n' + '  tmpvar_2 = (texture2D (sampler_noise_lq, xlat_mutabledither_uv) - 0.5).xyz;\n' + '  xlat_mutablerand = tmpvar_2;\n' + '  xlat_mutabled = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv_orig + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv_orig - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '  xlat_mutabledx = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv_orig + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_7 = texture2D (sampler_blur1, P_8);\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv_orig - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '  xlat_mutabledy = (((tmpvar_7.xyz * scale1) + bias1) - ((tmpvar_9.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = xlat_mutabledx.x;\n' + '  tmpvar_11.y = xlat_mutabledy.x;\n' + '  xlat_mutabled_uv = (uv_orig + ((tmpvar_11 * texsize.zw) * 4.0));\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_main, xlat_mutabled_uv);\n' + '  ret_1.x = tmpvar_12.x;\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_blur1, xlat_mutabled_uv);\n' + '  ret_1.x = (ret_1.x + ((\n' + '    ((ret_1.x - ((tmpvar_13.xyz * scale1) + bias1).x) * 0.04)\n' + '   - 0.006) + (xlat_mutablerand * 0.01)).x);\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = xlat_mutabledx.y;\n' + '  tmpvar_14.y = xlat_mutabledy.y;\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15.x = xlat_mutabledx.x;\n' + '  tmpvar_15.y = xlat_mutabledy.x;\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = (uv - ((\n' + '    (vec2(0.0, -1.2) + (tmpvar_14 * 8.0))\n' + '   + \n' + '    (tmpvar_15 * 4.0)\n' + '  ) * texsize.zw));\n' + '   float tmpvar_17;\n' + '  tmpvar_17 = max (texture2D (sampler_main, tmpvar_16).x, (texture2D (sampler_main, tmpvar_16).y - 0.0012));\n' + '  ret_1.y = (tmpvar_17 + (xlat_mutablerand * 0.08)).x;\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18.w = 1.0;\n' + '  tmpvar_18.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_18;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 N_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (vec2(1.0, 0.0) * texsize.zw);\n' + '  P_4 = (uv + tmpvar_5);\n' + '  tmpvar_3 = texture2D (sampler_main, P_4);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - tmpvar_5);\n' + '  tmpvar_6 = texture2D (sampler_main, P_7);\n' + '  N_1.x = ((tmpvar_3.xyz - tmpvar_6.xyz).x * 0.5);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = (vec2(0.0, 1.0) * texsize.zw);\n' + '  P_9 = (uv + tmpvar_10);\n' + '  tmpvar_8 = texture2D (sampler_main, P_9);\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (uv - tmpvar_10);\n' + '  tmpvar_11 = texture2D (sampler_main, P_12);\n' + '  N_1.y = ((tmpvar_8.xyz - tmpvar_11.xyz).x * 0.5);\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (uv + tmpvar_5);\n' + '  tmpvar_13 = texture2D (sampler_blur1, P_14);\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (uv - tmpvar_5);\n' + '  tmpvar_15 = texture2D (sampler_blur1, P_16);\n' + '  N_1.x = (N_1.x + ((\n' + '    ((tmpvar_13.xyz * scale1) + bias1)\n' + '   - \n' + '    ((tmpvar_15.xyz * scale1) + bias1)\n' + '  ).x * 0.5));\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv + tmpvar_10);\n' + '  tmpvar_17 = texture2D (sampler_blur1, P_18);\n' + '   vec4 tmpvar_19;\n' + '   vec2 P_20;\n' + '  P_20 = (uv - tmpvar_10);\n' + '  tmpvar_19 = texture2D (sampler_blur1, P_20);\n' + '  N_1.y = (N_1.y + ((\n' + '    ((tmpvar_17.xyz * scale1) + bias1)\n' + '   - \n' + '    ((tmpvar_19.xyz * scale1) + bias1)\n' + '  ).x * 0.5));\n' + '  N_1.z = -0.07;\n' + '   vec3 tmpvar_21;\n' + '  tmpvar_21 = normalize(N_1);\n' + '  N_1 = tmpvar_21;\n' + '   vec3 tmpvar_22;\n' + '  tmpvar_22.z = -0.8;\n' + '  tmpvar_22.x = _qb.y;\n' + '  tmpvar_22.y = _qb.z;\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23.z = 0.0;\n' + '  tmpvar_23.xy = ((uv_orig * 2.0) - 1.0);\n' + '   vec3 tmpvar_24;\n' + '  tmpvar_24 = normalize((tmpvar_22 - tmpvar_23));\n' + '   vec3 tmpvar_25;\n' + '  tmpvar_25 = normalize((tmpvar_23 - vec3(0.0, 0.0, 1.0)));\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26 = texture2D (sampler_blur3, uv_orig);\n' + '  ret_2 = (vec3(clamp (dot (tmpvar_21, tmpvar_24), 0.0, 1.0)) * normalize((\n' + '    ((tmpvar_26.xyz * scale3) + bias3)\n' + '  .yzx + 0.1)));\n' + '  ret_2 = (ret_2 + (pow (\n' + '    clamp (dot (normalize((tmpvar_25 + \n' + '      ((2.0 * tmpvar_21) * dot (tmpvar_25, tmpvar_21))\n' + '    )), tmpvar_24), 0.0, 1.0)\n' + '  , 32.0) * 0.5));\n' + '   vec4 tmpvar_27;\n' + '  tmpvar_27.w = 1.0;\n' + '  tmpvar_27.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_27;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 2;\n' + 'y1= 2;\n' + 'z1 = 2;'),
	'frame_eqs_str' : ('q1 = aspectx;\n' + 'q2 = aspecty;\n' + 'wave_a = 0;\n' + 'v = 0.5;\n' + 'j1 = j1*0.95 + sqr(bass*4)*v;\n' + 'j2 = j2*0.95 + sqr(mid*4)*v;\n' + 'j3 = j3*0.95 + sqr(treb*4)*v;\n' + 'n = n + j1*0.0052;\n' + 'n1 = n1 + j2*0.0052;\n' + 'n2 = n2 + j3*0.0052;\n' + 'q3 = n*0.01;\n' + 'q4 = n1*0.01;\n' + 'q5 = n2*0.01;\n' + 'a = 10;\n' + 'b = 28;\n' + 'c = 9/5;\n' + 'dx1 = a*(y1-x1);\n' + 'dy1 = x1*(b-z1)-y1;\n' + 'dz1 = x1*y1-c*z1;\n' + 'd = 1;\n' + 'dd = sqrt(dx1*dx1 + dy1*dy1 + dz1*dz1);\n' + 'x1 = x1 + d*dx1/dd;\n' + 'y1 = y1 + d*dy1/dd;\n' + 'z1 = z1 + d*dz1/dd;\n' + 'q11 = x1;\n' + 'q12 = y1;\n' + 'q13 = z1;\n' + 'q14 = a;\n' + 'q15 = b;\n' + 'q16 = c;\n' + 'q17 = d;\n' + 'vol = (bass_att+treb_att+mid_att)*.25;\n' + 'vol = vol*vol;\n' + 'voltime = voltime + .1*vol;\n' + 'q32 = .4*voltime;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
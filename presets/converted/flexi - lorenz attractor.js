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
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.2,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.a = 0;
m.q2 = 0;
m.b = 0;
m.q3 = 0;
m.c = 0;
m.n1 = 0;
m.q4 = 0;
m.d = 0;
m.n2 = 0;
m.j1 = 0;
m.j2 = 0;
m.j3 = 0;
m.n = 0;
m.q11 = 0;
m.q12 = 0;
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
m.x1 = 0;
m.y1 = 0.001;
m.z1 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.v = 0.5;
m.j1 = ((m.j1*0.95)+(sqr((m.bass*4))*m.v));
m.j2 = ((m.j2*0.95)+(sqr((m.mid*4))*m.v));
m.j3 = ((m.j3*0.95)+(sqr((m.treb*4))*m.v));
m.n = (m.n+(m.j1*0.0052));
m.n1 = (m.n1+(m.j2*0.0052));
m.n2 = (m.n2+(m.j3*0.0052));
m.q2 = (m.n*0.01);
m.q3 = (m.n1*0.01);
m.q4 = (m.n2*0.01);
m.a = 10;
m.b = 28;
m.c = div(8,3);
m.dx1 = (m.a*(m.y1-m.x1));
m.dy1 = ((m.x1*(m.b-m.z1))-m.y1);
m.dz1 = ((m.x1*m.y1)-(m.c*m.z1));
m.d = 0.024;
m.x1 = (m.x1+(m.d*m.dx1));
m.y1 = (m.y1+(m.d*m.dy1));
m.z1 = (m.z1+(m.d*m.dz1));
m.q11 = m.x1;
m.q12 = m.y1;
m.q13 = m.z1;
m.q14 = m.a;
m.q15 = m.b;
m.q16 = m.c;
m.q17 = m.d;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.21,
			enabled : 1.0,
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
			a : 0.15,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 3.14159,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.99979,
			additive : 1.0,
			border_a : 0.5,
			border_b : 0.15,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.1661,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 23.0,
			border_r : 1.0,
			num_inst : 64.0,
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
m.xx1 = (m.xx1+(m.q17*m.dx1));
m.yy1 = (m.yy1+(m.q17*m.dy1));
m.zz1 = (m.zz1+(m.q17*m.dz1));
m.my_x = (m.xx1*0.1);
m.my_y = (m.yy1*0.1);
m.my_z = ((m.zz1*0.1)-3);
m.d = 3;
m.zoom = 0.25;
m.w1 = m.q4;
m.w2 = m.q2;
m.w3 = m.q3;
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
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('xx1 = if(equal(instance,0),q11,xx1);\n' + 'yy1 = if(equal(instance,0),q12,yy1);\n' + 'zz1 = if(equal(instance,0),q13,zz1);\n' + 'dx1 = q14*(yy1-xx1);\n' + 'dy1 = xx1*(q15-zz1)-yy1;\n' + 'dz1 = xx1*yy1-q16*zz1;\n' + 'xx1 = xx1 + q17*dx1;\n' + 'yy1 = yy1 + q17*dy1;\n' + 'zz1 = zz1 + q17*dz1;\n' + 'my_x = xx1*0.1;\n' + 'my_y = yy1*0.1;\n' + 'my_z = zz1*0.1 - 3;\n' + 'd = 3;\n' + 'zoom = 0.25;\n' + 'w1 = q4;\n' + 'w2 = q2;\n' + 'w3 = q3;\n' + 'x1 = cos(w1)*my_x + sin(w1)*my_y;\n' + 'y1 = -sin(w1)*my_x + cos(w1)*my_y;\n' + 'z1 = my_z;\n' + 'x2 = cos(w2)*x1 + sin(w2)*z1;\n' + 'z2 = -sin(w2)*x1 + cos(w2)*z1;\n' + 'y2 = y1;\n' + 'y3 = cos(w3)*y2 + sin(w3)*z2;\n' + 'z3 = -sin(w3)*y2 + cos(w3)*z2;\n' + 'x3 = x2;\n' + 'l = sqrt(x3*x3 + y3*y3);\n' + 'w = atan2(x3,y3);\n' + 'p = tan(asin(1) + atan2(d+z3,l));\n' + 'd = sqrt(x3*x3 + y3*y3 + (z3+d)*(z3+d));\n' + 'my_x = zoom*sin(w)*p;\n' + 'my_y = zoom*cos(w)*p;\n' + 'x = 0.5 + my_x;\n' + 'y = 0.5 + my_y;\n' + 'rad = rad/d;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.41,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 3.14159,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.99979,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.02798,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 23.0,
			border_r : 1.0,
			num_inst : 817.0,
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
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.9,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = ((Math.sin(m.time)*0.4)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = sin(time) * .4 + .5;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.04,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.81623,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 36.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (1-m.q1);
m.y = m.q2;
m.x = (0.5+((m.x-0.5)*0.25));
m.y = (0.5+((m.y-0.5)*0.25));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 1-q1;\n' + 'y = q2;\n' + 'x = 0.5 + (x - 0.5)*0.25;\n' + 'y = 0.5 + (y - 0.5)*0.25;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec4 tmpvar_1;\n' + '  tmpvar_1.w = 1.0;\n' + '  tmpvar_1.xyz = vec3(0.0, 0.0, 0.0);\n' + '  vec4 ret4 = tmpvar_1;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0;\n' + 'y1= .001;\n' + 'z1 = 0;'),
	'frame_eqs_str' : ('wave_a = 0;\n' + 'v = 0.5;\n' + 'j1 = j1*0.95 + sqr(bass*4)*v;\n' + 'j2 = j2*0.95 + sqr(mid*4)*v;\n' + 'j3 = j3*0.95 + sqr(treb*4)*v;\n' + 'n = n + j1*0.0052;\n' + 'n1 = n1 + j2*0.0052;\n' + 'n2 = n2 + j3*0.0052;\n' + 'q2 = n*0.01;\n' + 'q3 = n1*0.01;\n' + 'q4 = n2*0.01;\n' + 'a = 10;\n' + 'b = 28;\n' + 'c = 8/3;\n' + 'dx1 = a*(y1-x1);\n' + 'dy1 = x1*(b-z1)-y1;\n' + 'dz1 = x1*y1-c*z1;\n' + 'd = 0.024;\n' + 'x1 = x1 + d*dx1;\n' + 'y1 = y1 + d*dy1;\n' + 'z1 = z1 + d*dz1;\n' + 'q11 = x1;\n' + 'q12 = y1;\n' + 'q13 = z1;\n' + 'q14 = a;\n' + 'q15 = b;\n' + 'q16 = c;\n' + 'q17 = d;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
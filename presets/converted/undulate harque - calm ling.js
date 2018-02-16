define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.63,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 9.0,
		wave_scale : 1.286,
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
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.18,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.007,
		ob_size : 0.5,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
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
		mv_l : 0.9,
		invert : 1.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.91,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.dd = 0;
m.q1 = 0;
m.a = 0;
m.q2 = 0;
m.b = 0;
m.vvb = 0;
m.q3 = 0;
m.c = 0;
m.n1 = 0;
m.q4 = 0;
m.d = 0;
m.n2 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.j1 = 0;
m.q8 = 0;
m.j2 = 0;
m.q9 = 0;
m.j3 = 0;
m.vb = 0;
m.dir = 0;
m.vvm = 0;
m.n = 0;
m.q30 = 0;
m.q20 = 0;
m.q31 = 0;
m.q10 = 0;
m.q21 = 0;
m.q32 = 0;
m.q11 = 0;
m.q22 = 0;
m.q12 = 0;
m.q23 = 0;
m.q13 = 0;
m.q24 = 0;
m.vvt = 0;
m.q14 = 0;
m.q25 = 0;
m.q15 = 0;
m.q26 = 0;
m.v = 0;
m.q16 = 0;
m.q27 = 0;
m.q17 = 0;
m.q28 = 0;
m.vm = 0;
m.z1 = 0;
m.q18 = 0;
m.q29 = 0;
m.y1 = 0;
m.q19 = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;
m.y3 = 0;
m.dz1 = 0;
m.cy1 = 0;
m.x3 = 0;
m.dy1 = 0;
m.cx1 = 0;
m.dx1 = 0;
m.vt = 0;
m.x1 = 2;
m.y1 = 2;
m.z1 = 2;
		return m;
	},
	'frame_eqs' : function(m) {
m.vb = ((m.vb*0.95)+(((1-m.vb)*pow(m.bass_att, 2))*0.02));
m.vvb = ((m.vvb*0.95)+(((1-m.vvb)*m.vb)*0.01));
m.vm = ((m.vm*0.95)+(((1-m.vm)*pow(m.mid_att, 2))*0.02));
m.vvm = ((m.vvm*0.95)+(((1-m.vvm)*m.vm)*0.01));
m.vt = ((m.vt*0.95)+(((1-m.vt)*pow(m.treb_att, 2))*0.02));
m.vvt = ((m.vvt*0.95)+(((1-m.vvt)*m.vt)*0.01));
m.vvb = Math.min(1, Math.max(0, m.vvb));
m.vvm = Math.min(1, Math.max(0, m.vvm));
m.vvt = Math.min(1, Math.max(0, m.vvt));
m.q1 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q2 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q3 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q4 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q5 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q6 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q7 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q8 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q9 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q10 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q11 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q12 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q13 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q14 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q15 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q16 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q17 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q18 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q19 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q20 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q21 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q22 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q23 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q24 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q25 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q26 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q27 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q28 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q29 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q30 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q31 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q32 = (((m.vvb+m.vvm)+m.vvt)*10);
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
m.c = div(8,3);
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
		m.rkeys = ['dx','dy'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.cx1 = (0.5+(Math.sin((m.time*0.618))*0.2));
m.cy1 = (0.5+(Math.cos((m.time*1.618))*0.2));
m.dir = m.bass;
m.d = sqrt((((m.x-m.cx1)*(m.x-m.cx1))+((m.y-m.cy1)*(m.y-m.cy1))));
m.x1 = ifcond(above(m.d, 0.3), 0, ((Math.sin((m.y-m.cy1))*0.05)*m.dir));
m.y1 = ifcond(above(m.d, 0.3), 0, ((-Math.sin((m.x-m.cx1))*0.05)*m.dir));
m.cx1 = (0.5+(Math.sin((m.time*2.618))*0.3));
m.cy1 = (0.5+(Math.cos((m.time*3.14))*0.3));
m.dir = (-m.mid*2);
m.d = sqrt((((m.x-m.cx1)*(m.x-m.cx1))+((m.y-m.cy1)*(m.y-m.cy1))));
m.x2 = ifcond(above(m.d, 0.2), 0, ((Math.sin((m.y-m.cy1))*0.05)*m.dir));
m.y2 = ifcond(above(m.d, 0.2), 0, ((-Math.sin((m.x-m.cx1))*0.05)*m.dir));
m.cx1 = (0.5+(Math.sin((-m.time*2.618))*0.4));
m.cy1 = (0.5+(Math.cos((-m.time*1.14))*0.4));
m.dir = (m.treb*3);
m.d = sqrt((((m.x-m.cx1)*(m.x-m.cx1))+((m.y-m.cy1)*(m.y-m.cy1))));
m.x3 = ifcond(above(m.d, 0.1), 0, ((Math.sin((m.y-m.cy1))*0.05)*m.dir));
m.y3 = ifcond(above(m.d, 0.1), 0, ((-Math.sin((m.x-m.cx1))*0.05)*m.dir));
m.dx = (((m.dx+m.x1)+m.x2)+m.x3);
m.dy = (((m.dy+m.y1)+m.y2)+m.y3);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.4,
			g : 0.4,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.4,
			smoothing : 0.0,
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
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.0,
			smoothing : 0.0,
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
			a : 0.0,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 1.0,
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
			r2 : 1.0,
			a : 0.94,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 1.19381,
			thickoutline : 0.0,
			g : 0.97,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.18923,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 5.3898,
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
			a : 0.6,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.25005,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.6,
			r : 1.0,
			border_g : 1.0,
			rad : 3.99882,
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
			r2 : 0.7,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.8,
			tex_zoom : 0.67634,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.8,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.60089,
			x : 0.463,
			y : 0.5,
			ang : 0.0,
			sides : 18.0,
			border_r : 1.0,
			num_inst : 10.0,
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
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.11234,
			additive : 0.0,
			border_a : 0.06,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.0376,
			x : 0.503,
			y : 0.5,
			ang : 0.0,
			sides : 16.0,
			border_r : 1.0,
			num_inst : 353.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.p1 = 0;
m.q2 = 0;
m.p2 = 0;
m.q3 = 0;
m.d = 0;
m.my_x = 0;
m.my_y = 0;
m.my_z = 0;
m.sample = 0;
m.l = 0;
m.p = 0;
m.q10 = 0;
m.zoom = 0;
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

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.sample = div(m.instance,m.num_inst);
m.rad = (0.05+(0.04*Math.sin(m.sample)));
m.q10 = (250*m.sample);
m.my_x = ((((-0.22*Math.cos(m.q10))-(1.28*Math.sin(m.q10)))-(0.44*Math.cos((3*m.q10))))-(0.78*Math.sin((3*m.q10))));
m.my_y = ((((-0.1*Math.cos((2*m.q10)))-(0.27*Math.sin((2*m.q10))))+(0.38*Math.cos((4*m.q10))))+(0.46*Math.sin((4*m.q10))));
m.my_z = ((0.7*Math.cos((3*m.q10)))-(0.4*Math.sin((3*m.q10))));
m.d = 0.2;
m.zoom = 1;
m.w3 = m.q1;
m.w2 = m.q2;
m.w1 = m.q3;
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
m.p1 = (0.2*Math.sin((m.sample*50)));
m.p2 = (0.2*Math.sin((m.sample*80)));
m.x = (0.5+(m.my_x*m.p1));
m.y = (0.5+(m.my_y*m.p2));
m.r = (0.4*Math.sin((m.sample*80)));
m.b = (0.8*Math.sin((m.sample*66)));
m.g = (0.6*Math.sin((m.sample*120)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('sample=instance/num_inst;\n' + 'rad=.05+.04*sin(sample);\n' + 'q10=250*sample;\n' + 'my_x = -.22*cos(q10)-1.28*sin(q10)-.44*cos(3*q10)-.78*sin(3*q10);\n' + 'my_y= -.1*cos(2*q10)-.27*sin(2*q10)+.38*cos(4*q10)+.46*sin(4*q10);\n' + 'my_z=.7*cos(3*q10)-.4*sin(3*q10);\n' + 'd = .2;\n' + 'zoom = 1;\n' + 'w3 = q1;\n' + 'w2 = q2;\n' + 'w1 = q3;\n' + 'x1 = cos(w1)*my_x + sin(w1)*my_y;\n' + 'y1 = -sin(w1)*my_x + cos(w1)*my_y;\n' + 'z1 = my_z;\n' + 'x2 = cos(w2)*x1 + sin(w2)*z1;\n' + 'z2 = -sin(w2)*x1 + cos(w2)*z1;\n' + 'y2 = y1;\n' + 'y3 = cos(w3)*y2 + sin(w3)*z2;\n' + 'z3 = -sin(w3)*y2 + cos(w3)*z2;\n' + 'x3 = x2;\n' + 'l = sqrt(x3*x3 + y3*y3);\n' + 'w = atan2(x3,y3);\n' + 'p = tan(asin(1) + atan2(d+z3,l));\n' + 'd = sqrt(x3*x3 + y3*y3 + (z3+d)*(z3+d));\n' + 'my_x = zoom*sin(w)*p;\n' + 'my_y = zoom*cos(w)*p;\n' + 'p1 = .2*sin(sample*50);\n' + 'p2 = .2*sin(sample*80);\n' + 'x = .5+my_x*p1;\n' + 'y = .5+my_y*p2;\n' + 'r = .4*sin(sample*80);\n' + 'b = .8*sin(sample*66);\n' + 'g = .6*sin(sample*120);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 1.5)) + rand_frame.xy);\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = mix (uv_orig, uv, vec2(4.0, 4.0));\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = dot (texture2D (sampler_main, tmpvar_3).xyz, vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = mix (uv_orig, uv, vec2(-12.0, -12.0));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur2, tmpvar_5);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (texture2D (sampler_noise_lq, tmpvar_2) - 0.5).xy;\n' + '  uv_1 = (mix (uv_orig, uv, vec2((\n' + '    (tmpvar_4 - dot (((tmpvar_6.xyz * scale2) + bias2), vec3(0.32, 0.49, 0.29)))\n' + '   * 12.0))) + ((tmpvar_7 * texsize.zw) * 0.5));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_main, uv_1);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_noise_lq, tmpvar_2);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = ((tmpvar_8.xyz + (\n' + '    (tmpvar_9 - 0.5)\n' + '   * 0.006).xyz) + -0.0006);\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec3 xlat_mutableneu;\n' + 'highp vec3 xlat_mutableret1;\n' + 'shader_body {\n' + '   vec2 uv_1;\n' + '   float inten_2;\n' + '   float dist_3;\n' + '   vec2 uv2_4;\n' + '  uv_1 = (uv - 0.5);\n' + '  uv_1 = (uv_1 * aspect.xy);\n' + '  uv2_4.x = -(uv_1.y);\n' + '  uv2_4.y = uv_1.x;\n' + '  uv2_4 = (uv2_4 * aspect.yx);\n' + '  dist_3 = (1.0 - fract((0.25 + _qh.x)));\n' + '  inten_2 = ((pow (dist_3, 0.5) * (1.0 - \n' + '    (dist_3 * dist_3)\n' + '  )) * 2.0);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = fract(((\n' + '    ((3.0 * abs((\n' + '      fract((uv2_4 + 0.5))\n' + '     - 0.5))) * dist_3)\n' + '   + 0.5) + _qh.z));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, tmpvar_5);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_blur1, tmpvar_5);\n' + '  xlat_mutableneu = (tmpvar_6.xyz + (2.0 * (\n' + '    (tmpvar_7.xyz * scale1)\n' + '   + bias1)));\n' + '  xlat_mutableret1 = max (vec3(0.0, 0.0, 0.0), (xlat_mutableneu * inten_2));\n' + '  uv2_4.x = -(uv_1.y);\n' + '  uv2_4.y = uv_1.x;\n' + '  uv2_4 = (uv2_4 * aspect.yx);\n' + '  dist_3 = (1.0 - fract((0.5 + _qh.x)));\n' + '  inten_2 = ((pow (dist_3, 0.5) * (1.0 - \n' + '    (dist_3 * dist_3)\n' + '  )) * 2.0);\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = fract(((\n' + '    ((3.0 * abs((\n' + '      fract((uv2_4 + 0.5))\n' + '     - 0.5))) * dist_3)\n' + '   + 0.5) + _qh.z));\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_main, tmpvar_8);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_blur1, tmpvar_8);\n' + '  xlat_mutableneu = (tmpvar_9.xyz + (2.0 * (\n' + '    (tmpvar_10.xyz * scale1)\n' + '   + bias1)));\n' + '  xlat_mutableret1 = max ((xlat_mutableret1 * 0.9), (xlat_mutableneu * inten_2));\n' + '  uv2_4 = (uv_1 * aspect.yx);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = abs((fract(\n' + '    (uv2_4 + 0.5)\n' + '  ) - 0.5));\n' + '  uv2_4 = tmpvar_11;\n' + '  dist_3 = (1.0 - fract((0.75 + _qh.x)));\n' + '  inten_2 = ((pow (dist_3, 0.5) * (1.0 - \n' + '    (dist_3 * dist_3)\n' + '  )) * 2.0);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = fract(((\n' + '    ((3.0 * tmpvar_11) * dist_3)\n' + '   + 0.5) + _qh.z));\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_main, tmpvar_12);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur1, tmpvar_12);\n' + '  xlat_mutableneu = (tmpvar_13.xyz + (2.0 * (\n' + '    (tmpvar_14.xyz * scale1)\n' + '   + bias1)));\n' + '  xlat_mutableret1 = max ((xlat_mutableret1 * 0.9), (xlat_mutableneu * inten_2));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 1.0;\n' + '  tmpvar_15.xyz = ((0.5 * xlat_mutableret1) + (vec3(0.0, 0.0, 0.15) * (0.5 + uv_1.y)));\n' + '  vec4 ret4 = tmpvar_15;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 2;\n' + 'y1= 2;\n' + 'z1 = 2;'),
	'frame_eqs_str' : ('vb = vb*0.95 + (1-vb)*pow(bass_att,2)*0.02;\n' + 'vvb = vvb*0.95 + (1-vvb)*vb*0.01;\n' + 'vm = vm*0.95 + (1-vm)*pow(mid_att,2)*0.02;\n' + 'vvm = vvm*0.95 + (1-vvm)*vm*0.01;\n' + 'vt = vt*0.95 + (1-vt)*pow(treb_att,2)*0.02;\n' + 'vvt = vvt*0.95 + (1-vvt)*vt*0.01;\n' + 'vvb = min(1,max(0,vvb));\n' + 'vvm = min(1,max(0,vvm));\n' + 'vvt = min(1,max(0,vvt));\n' + 'q1   = (vvb+vvm+vvt)*10;\n' + 'q2   = (vvb+vvm+vvt)*10;\n' + 'q3   = (vvb+vvm+vvt)*10;\n' + 'q4   = (vvb+vvm+vvt)*10;\n' + 'q5   = (vvb+vvm+vvt)*10;\n' + 'q6   = (vvb+vvm+vvt)*10;\n' + 'q7   = (vvb+vvm+vvt)*10;\n' + 'q8   = (vvb+vvm+vvt)*10;\n' + 'q9   = (vvb+vvm+vvt)*10;\n' + 'q10  = (vvb+vvm+vvt)*10;\n' + 'q11  = (vvb+vvm+vvt)*10;\n' + 'q12  = (vvb+vvm+vvt)*10;\n' + 'q13  = (vvb+vvm+vvt)*10;\n' + 'q14  = (vvb+vvm+vvt)*10;\n' + 'q15  = (vvb+vvm+vvt)*10;\n' + 'q16  = (vvb+vvm+vvt)*10;\n' + 'q17  = (vvb+vvm+vvt)*10;\n' + 'q18  = (vvb+vvm+vvt)*10;\n' + 'q19  = (vvb+vvm+vvt)*10;\n' + 'q20  = (vvb+vvm+vvt)*10;\n' + 'q21  = (vvb+vvm+vvt)*10;\n' + 'q22  = (vvb+vvm+vvt)*10;\n' + 'q23  = (vvb+vvm+vvt)*10;\n' + 'q24  = (vvb+vvm+vvt)*10;\n' + 'q25  = (vvb+vvm+vvt)*10;\n' + 'q26  = (vvb+vvm+vvt)*10;\n' + 'q27  = (vvb+vvm+vvt)*10;\n' + 'q28  = (vvb+vvm+vvt)*10;\n' + 'q29  = (vvb+vvm+vvt)*10;\n' + 'q30  = (vvb+vvm+vvt)*10;\n' + 'q31  = (vvb+vvm+vvt)*10;\n' + 'q32  = (vvb+vvm+vvt)*10;\n' + 'q1 = aspectx;\n' + 'q2 = aspecty;\n' + 'wave_a = 0;\n' + 'v = 0.5;\n' + 'j1 = j1*0.95 + sqr(bass*4)*v;\n' + 'j2 = j2*0.95 + sqr(mid*4)*v;\n' + 'j3 = j3*0.95 + sqr(treb*4)*v;\n' + 'n = n + j1*0.0052;\n' + 'n1 = n1 + j2*0.0052;\n' + 'n2 = n2 + j3*0.0052;\n' + 'q3 = n*0.01;\n' + 'q4 = n1*0.01;\n' + 'q5 = n2*0.01;\n' + 'a = 10;\n' + 'b = 28;\n' + 'c = 8/3;\n' + 'dx1 = a*(y1-x1);\n' + 'dy1 = x1*(b-z1)-y1;\n' + 'dz1 = x1*y1-c*z1;\n' + 'd = 1;\n' + 'dd = sqrt(dx1*dx1 + dy1*dy1 + dz1*dz1);\n' + 'x1 = x1 + d*dx1/dd;\n' + 'y1 = y1 + d*dy1/dd;\n' + 'z1 = z1 + d*dz1/dd;\n' + 'q11 = x1;\n' + 'q12 = y1;\n' + 'q13 = z1;\n' + 'q14 = a;\n' + 'q15 = b;\n' + 'q16 = c;\n' + 'q17 = d;'),
	'pixel_eqs_str' : ('cx1 = 0.5+sin(time*0.618)*0.2;\n' + 'cy1 = 0.5+cos(time*1.618)*0.2;\n' + 'dir = bass;\n' + 'd = sqrt((x-cx1)*(x-cx1)+(y-cy1)*(y-cy1));\n' + 'x1 = if( above(d,0.3),0,  sin(y-cy1)*0.05*dir);\n' + 'y1 = if( above(d,0.3),0, -sin(x-cx1)*0.05*dir);\n' + 'cx1 = 0.5+sin(time*2.618)*0.3;\n' + 'cy1 = 0.5+cos(time*3.14)*0.3;\n' + 'dir = -mid*2;\n' + 'd = sqrt((x-cx1)*(x-cx1)+(y-cy1)*(y-cy1));\n' + 'x2 = if( above(d,0.2),0,  sin(y-cy1)*0.05*dir);\n' + 'y2 = if( above(d,0.2),0, -sin(x-cx1)*0.05*dir);\n' + 'cx1 = 0.5+sin(-time*2.618)*0.4;\n' + 'cy1 = 0.5+cos(-time*1.14)*0.4;\n' + 'dir = treb*3;\n' + 'd = sqrt((x-cx1)*(x-cx1)+(y-cy1)*(y-cy1));\n' + 'x3 = if( above(d,0.1),0,  sin(y-cy1)*0.05*dir);\n' + 'y3 = if( above(d,0.1),0, -sin(x-cx1)*0.05*dir);\n' + 'dx = dx+x1+x2+x3;\n' + 'dy = dy+y1+y2+y3;'),
};

return pmap;
});
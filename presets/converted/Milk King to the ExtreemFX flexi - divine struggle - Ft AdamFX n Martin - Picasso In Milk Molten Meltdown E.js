define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.21,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 100.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.229,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.92178,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 0.5,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9901,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.0,
		wave_mystery : 0.2,
		decay : 1.0,
		wave_a : 0.07,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 0.5,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.tt = 0;
m.xx = 0;
m.yy = 0;
m.mn = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.mt = 0;
m.q8 = 0;
m.q9 = 0;
m.bm = 0;
m.mx = 0;
m.vy2 = 0;
m.dt = 0;
m.vx2 = 0;
m.vy3 = 0;
m.q10 = 0;
m.q21 = 0;
m.yy1 = 0;
m.xx1 = 0;
m.vx3 = 0;
m.vy4 = 0;
m.q11 = 0;
m.q22 = 0;
m.r = 0;
m.xx2 = 0;
m.vx4 = 0;
m.q12 = 0;
m.q23 = 0;
m.q24 = 0;
m.q25 = 0;
m.q26 = 0;
m.v = 0;
m.q27 = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.y4 = 0;
m.x4 = 0;
m.x1 = 0.9;
m.y1 = 0.5;
m.x2 = 0.5;
m.y2 = 0.5;
m.x3 = 0.5;
m.y3 = 0.5;
m.x4 = 0.5;
m.y4 = 0.5;
		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = 1;
m.warp = 0;
m.wave_a = 0;
m.xx1 = ((m.xx1*0.9)+(m.bass*0.01));
m.xx2 = ((m.xx2*0.9)+(m.treb*0.01));
m.yy1 = ((m.yy1*0.94)+((m.treb+m.bass)*0.0075));
m.x1 = (0.5+((m.xx1-m.xx2)*2));
m.y1 = (0.4+(m.yy1*1.5));
m.dt = div(0.03,m.fps);
m.vx2 = ((m.vx2*(1-(2*m.dt)))+(m.dt*(((m.x1+m.x3)-(2*m.x2))*10)));
m.vy2 = ((m.vy2*(1-(2*m.dt)))+(m.dt*((((m.y1+m.y3)-(2*m.y2))*10)-0.5)));
m.vx3 = ((m.vx3*(1-(2*m.dt)))+(m.dt*(((m.x2+m.x4)-(2*m.x3))*10)));
m.vy3 = ((m.vy3*(1-(2*m.dt)))+(m.dt*((((m.y2+m.y4)-(2*m.y3))*10)-0.5)));
m.vx4 = ((m.vx4*(1-(2*m.dt)))+(m.dt*((m.x3-m.x4)*10)));
m.vy4 = ((m.vy4*(1-(2*m.dt)))+(m.dt*(((m.y3-m.y4)*10)-0.5)));
m.x2 = (m.x2+m.vx2);
m.y2 = (m.y2+m.vy2);
m.x3 = (m.x3+m.vx3);
m.y3 = (m.y3+m.vy3);
m.x4 = (m.x4+m.vx4);
m.y4 = (m.y4+m.vy4);
m.vx2 = ifcond(above(m.x2, 0), m.vx2, (Math.abs(m.vx2)*0.5));
m.vx2 = ifcond(below(m.x2, 1), m.vx2, (-Math.abs(m.vx2)*0.5));
m.vx3 = ifcond(above(m.x3, 0), m.vx3, (Math.abs(m.vx3)*0.5));
m.vx3 = ifcond(below(m.x3, 1), m.vx3, (-Math.abs(m.vx3)*0.5));
m.vx4 = ifcond(above(m.x4, 0), m.vx4, (Math.abs(m.vx4)*0.5));
m.vx4 = ifcond(below(m.x4, 1), m.vx4, (-Math.abs(m.vx4)*0.5));
m.vy2 = ifcond(above(m.y2, 0), m.vy2, (Math.abs(m.vy2)*0.5));
m.vy2 = ifcond(below(m.y2, 1), m.vy2, (-Math.abs(m.vy2)*0.5));
m.vy3 = ifcond(above(m.y3, 0), m.vy3, (Math.abs(m.vy3)*0.5));
m.vy3 = ifcond(below(m.y3, 1), m.vy3, (-Math.abs(m.vy3)*0.5));
m.vy4 = ifcond(above(m.y4, 0), m.vy4, (Math.abs(m.vy4)*0.5));
m.vy4 = ifcond(below(m.y4, 1), m.vy4, (-Math.abs(m.vy4)*0.5));
m.q1 = m.x1;
m.q2 = m.x2;
m.q3 = m.x3;
m.q4 = m.x4;
m.q5 = m.y1;
m.q6 = m.y2;
m.q7 = m.y3;
m.q8 = m.y4;
m.q9 = div(1,m.aspectx);
m.q10 = div(1,m.aspecty);
m.q11 = m.aspectx;
m.q12 = m.aspecty;
m.bb = ((m.bb*0.99)+(m.bass*0.02));
m.mm = ((m.mm*0.99)+(m.mid*0.02));
m.tt = ((m.tt*0.99)+(m.treb*0.02));
m.mx = Math.max(Math.max(m.bb, m.mm), m.tt);
m.mn = Math.min(Math.min(m.bb, m.mm), m.tt);
m.ob_r = div((m.bb-m.mn),(m.mx-m.mn));
m.ob_b = div((m.mm-m.mn),(m.mx-m.mn));
m.ob_g = div((m.tt-m.mn),(m.mx-m.mn));
m.v = div(0.4,m.fps);
m.bm = (m.bm+((m.ob_r-m.ob_b)*m.v));
m.mt = (m.mt+((m.ob_b-m.ob_g)*m.v));
m.q21 = 0.5;
m.q22 = 0;
m.q23 = -0.5;
m.q24 = 0;
m.q25 = div(0.5,Math.asin(1));
m.q26 = -m.bm;
m.q27 = m.mt;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.x = (0.5+((m.x-0.5)*m.q11));
m.y = (0.5+((m.y-0.5)*m.q12));
m.xx = m.q4;
m.yy = (1-m.q8);
m.dx = 0;
m.dy = 0;
m.d = sqrt((((m.x-m.xx)*(m.x-m.xx))+((m.y-m.yy)*(m.y-m.yy))));
m.r = 0.11;
m.v = 20;
m.dx = ((m.v*((Math.sin((m.y-m.yy))*(m.d-m.r))-((m.x-m.xx)*(m.d-div(m.r,2)))))*(1.00-sigmoid((m.d-m.r), 100)));
m.dy = ((-m.v*((Math.sin((m.x-m.xx))*(m.d-m.r))+((m.y-m.yy)*(m.d-div(m.r,2)))))*(1.00-sigmoid((m.d-m.r), 100)));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.6,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.89152,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
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
			enabled : 1.0,
			b : 0.0,
			g : 0.6,
			scaling : 0.89152,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.trel = 0;
m.k1 = 0;
m.ampl = 0;
m.f1 = 0;
m.f2 = 0;
m.exc = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = ['t1'];
			return m;
		},
		'frame_eqs' : function(m) {
m.trel = (m.q1-0.0);
m.t1 = div(Math.floor(m.trel),2);
m.t2 = (m.trel-Math.floor(m.trel));
		return m;
	},
		'point_eqs' : function(m) {
m.k1 = mod((m.sample*512),8);
m.t1 = ((equal(m.k1, 0)*mod(((m.t1*61)+27),4096))+((1-equal(m.k1, 0))*m.t1));
m.exc = (1+Math.floor(rand(5)));
m.ampl = ((m.sample*sqrt(m.t2))*(1+m.exc));
m.f1 = ((m.q4*m.ampl)*Math.sin(div((m.t1*6.28),4096)));
m.f2 = ((m.q4*m.ampl)*Math.cos(div((m.t1*6.28),4096)));
m.x = (m.q2+(m.k1*m.f1));
m.y = (m.q3+(m.k1*m.f2));
m.a = (equal(m.k1, 6)+equal(m.k1, 0));
m.r = 1;
m.b = equal(m.k1, 0);
m.g = (0.6*(1+(0.6*equal(m.k1, 0))));
m.a = ((m.a*m.q5)*(1-((0*m.t2)*m.t2)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trel = q1-.0;\n' + 't1 = int(trel)/2;\n' + 't2 = trel - int(trel);'),
		'point_eqs_str' : ('k1 = (sample*512) % 8;\n' + 't1 = equal (k1,0)*((t1 * 61 + 27) % 4096)+ (1-equal(k1,0))*t1;\n' + 'exc = 1+int(rand(5));\n' + 'ampl = sample*sqrt(t2) * (1+exc);\n' + 'f1 = q4*ampl* sin(t1*6.28/4096);\n' + 'f2 = q4*ampl* cos(t1*6.28/4096);\n' + 'x = q2 + k1* f1 ;\n' + 'y = q3 + k1* f2;\n' + 'a = equal(k1,6) + equal (k1,0);\n' + 'r = 1;\n' + 'b = equal (k1,0);\n' + 'g = .6* (1+.6*equal (k1,0))  ;\n' + 'a = a * q5 * (1-0*t2*t2);'),

		},
		{
		'baseVals' : {
			a : 0.31,
			enabled : 1.0,
			b : 0.0,
			g : 0.6,
			scaling : 0.01348,
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
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.trel = 0;
m.k1 = 0;
m.ampl = 0;
m.f1 = 0;
m.f2 = 0;
m.t1 = 0;
m.t2 = 0;
m.t1 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t2 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t3 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t4 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t5 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t6 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t7 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t8 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
			m.rkeys = ['t1'];
			return m;
		},
		'frame_eqs' : function(m) {
m.trel = (m.q1-0.33);
m.t1 = div(Math.floor(m.trel),3);
m.t2 = (m.trel-Math.floor(m.trel));
		return m;
	},
		'point_eqs' : function(m) {
m.k1 = mod((m.sample*512),8);
m.t1 = ((equal(m.k1, 0)*mod(((m.t1*61)+27),4096))+((1-equal(m.k1, 0))*m.t1));
m.ampl = (m.sample*sqrt(m.t2));
m.f1 = ((m.q4*m.ampl)*Math.sin(div((m.t1*6.28),4096)));
m.f2 = ((m.q4*m.ampl)*Math.cos(div((m.t1*6.28),4096)));
m.x = (m.q2+(m.k1*m.f1));
m.y = (m.q3+(m.k1*m.f2));
m.a = (equal(m.k1, 6)+equal(m.k1, 0));
m.r = 1;
m.b = equal(m.k1, 0);
m.g = (0.6*(1+(0.6*equal(m.k1, 0))));
m.a = ((m.a*m.q5)*(1-((0*m.t2)*m.t2)));
		return m;
	},
		'init_eqs_str' : ('t1 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't2 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't3 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't4 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't5 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't6 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't7 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't8 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;'),
		'frame_eqs_str' : ('trel = q1-.33;\n' + 't1 = int(trel)/3;\n' + 't2 = trel - int(trel);'),
		'point_eqs_str' : ('k1 = (sample*512) % 8;\n' + 't1 = equal (k1,0)*((t1 * 61 + 27) % 4096)+ (1-equal(k1,0))*t1;\n' + 'ampl = sample*sqrt(t2);\n' + 'f1 = q4*ampl* sin(t1*6.28/4096);\n' + 'f2 = q4*ampl* cos(t1*6.28/4096);\n' + 'x = q2 + k1* f1 ;\n' + 'y = q3 + k1* f2;\n' + 'a = equal(k1,6) + equal (k1,0);\n' + 'r = 1;\n' + 'b = equal (k1,0);\n' + 'g = .6* (1+.6*equal (k1,0));\n' + 'a = a * q5 * (1-0*t2*t2);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.6,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.trel = 0;
m.k1 = 0;
m.ampl = 0;
m.f1 = 0;
m.f2 = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = ['t1'];
			return m;
		},
		'frame_eqs' : function(m) {
m.trel = (m.q1-0.66);
m.t1 = Math.floor(m.trel);
m.t2 = (m.trel-Math.floor(m.trel));
		return m;
	},
		'point_eqs' : function(m) {
m.k1 = mod((m.sample*512),8);
m.t1 = ((equal(m.k1, 0)*mod(((m.t1*61)+27),4096))+((1-equal(m.k1, 0))*m.t1));
m.ampl = (m.sample*sqrt(m.t2));
m.f1 = ((m.q4*m.ampl)*Math.sin(div((m.t1*6.28),4096)));
m.f2 = ((m.q4*m.ampl)*Math.cos(div((m.t1*6.28),4096)));
m.x = (m.q2+(m.k1*m.f1));
m.y = (m.q3+(m.k1*m.f2));
m.a = (equal(m.k1, 6)+equal(m.k1, 0));
m.r = 1;
m.b = equal(m.k1, 0);
m.g = (0.6*(1+(0.6*equal(m.k1, 0))));
m.a = ((m.a*m.q5)*(1-((0*m.t2)*m.t2)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trel = q1-.66;\n' + 't1 = int(trel);\n' + 't2 = trel - int(trel);'),
		'point_eqs_str' : ('k1 = (sample*512) % 8;\n' + 't1 = equal (k1,0)*((t1 * 61 + 27) % 4096)+ (1-equal(k1,0))*t1;\n' + 'ampl = sample*sqrt(t2);\n' + 'f1 = q4*ampl* sin(t1*6.28/4096);\n' + 'f2 = q4*ampl* cos(t1*6.28/4096);\n' + 'x = q2 + k1* f1 ;\n' + 'y = q3 + k1* f2;\n' + 'a = equal(k1,6) + equal (k1,0);\n' + 'r = 1;\n' + 'b = equal (k1,0);\n' + 'g = .6* (1+.6*equal (k1,0));\n' + 'a = a * q5 * (1-0*t2*t2);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.97,
			enabled : 0.0,
			b : 0.99,
			tex_ang : 1.0053,
			thickoutline : 0.0,
			g : 0.9,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.14795,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.89,
			a2 : 0.6,
			r : 0.99,
			border_g : 1.0,
			rad : 0.6653,
			x : 0.5,
			y : 0.52,
			ang : 0.0,
			sides : 33.0,
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
			a : 0.9,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 6.16617,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.86,
			r : 0.85,
			border_g : 0.5,
			rad : 0.01,
			x : 0.29,
			y : 0.5,
			ang : 3.76991,
			sides : 54.0,
			border_r : 0.5,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.t0 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t0 = div(m.time,3);
m.x = (m.t0-Math.floor(m.t0));
m.y = (0.3+div(m.mid,50));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t0 = time/3;\n' + 'x = t0 - int(t0);\n' + 'y = 0.3+mid/50;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.49981,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.7,
			r : 1.0,
			border_g : 0.5,
			rad : 0.011,
			x : 0.123,
			y : 0.0,
			ang : 0.0,
			sides : 63.0,
			border_r : 0.5,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.t0 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t0 = div(m.time,3);
m.x = (m.t0-Math.floor(m.t0));
m.y = (0.5+div(m.treb,50));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t0 = time/3;\n' + 'x = t0 - int(t0);\n' + 'y = 0.5+treb /50;'),

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
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.31212,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.01645,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 63.0,
			border_r : 0.5,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.t_ = 0;
m.m_ = 0;
m.y0 = 0;
m.y1 = 0;
m.t0 = 0;
m.b_ = 0;

			m.rkeys = ['t_','m_','b_','y0'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t0 = div(m.time,3);
m.x = (m.t0-Math.floor(m.t0));
m.y1 = (((0.8+m.bass)+m.treb)+m.mid);
m.y = (div((m.y1-m.y0),200)+0.8);
m.y0 = m.y1;
m.b_ = ((m.b_*0.9)+m.bass);
m.m_ = ((m.m_*0.9)+m.mid);
m.t_ = ((m.t_*0.9)+m.treb);
m.y = (0.8+div(((m.bass+m.mid)+m.treb),150));
m.y = (0.8+div((m.q2+m.q1),30));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t0 = time/3;\n' + 'x = t0 - int(t0);\n' + 'y1 = .8 + bass+treb+mid;\n' + 'y = (y1-y0)/200 + .8;\n' + 'y0 = y1;\n' + 'b_ = b_*.9 +bass;\n' + 'm_ = m_*.9 +mid;\n' + 't_ = t_*.9 +treb;\n' + 'y = .8 + (bass+mid+treb)/150;\n' + 'y = 0.8 + (q2+q1)/30;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 noise_1;\n' + '   vec3 ret_2;\n' + '   vec2 P_3;\n' + '  P_3 = (((\n' + '    (texsize.xy * texsize_noise_lq.zw)\n' + '  .x * uv) / 2.0) + _qf.z);\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = (texture2D (sampler_noise_lq, P_3) + 1.0).xyz;\n' + '  noise_1 = tmpvar_4;\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_blur1, uv);\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = (((tmpvar_5.xyz * scale1) + bias1) - 0.3);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + (tmpvar_6 * 0.01).xy);\n' + '  tmpvar_7 = texture2D (sampler_main, P_8);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9.x = (0.3 * tmpvar_6.x);\n' + '  tmpvar_9.y = tmpvar_6.y;\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = ((uv / 4.0) + (0.4 * tmpvar_9));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '  ret_2 = ((-0.4 * (\n' + '    ((tmpvar_10.xyz * scale1) + bias1)\n' + '   - \n' + '    (noise_1 * 0.1)\n' + '  )) + (tmpvar_7.xyz + (noise_1 * 0.1)));\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = (1.0 - ((0.01 * _qg.w) * (_qg.w * rad)));\n' + '  ret_2 = (ret_2 * (0.98 * (tmpvar_12 * tmpvar_12)));\n' + '  ret_2 = (ret_2 - 0.04);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13.w = 1.0;\n' + '  tmpvar_13.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_13;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('uniform highp vec2 d;\n' + 'uniform highp vec3 dx;\n' + 'uniform highp vec3 dy;\n' + 'highp vec2 xlat_mutabled;\n' + 'highp vec2 xlat_mutabledenominator;\n' + 'highp vec3 xlat_mutabledx;\n' + 'highp vec3 xlat_mutabledy;\n' + 'highp vec2 xlat_mutablenumerator;\n' + 'shader_body {\n' + '  xlat_mutabled = d;\n' + '  xlat_mutabledx = dx;\n' + '  xlat_mutabledy = dy;\n' + '   vec3 base_1;\n' + '   vec2 spiral_2;\n' + '   vec2 c_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (((uv - 0.5) * 2.0) * aspect.wz);\n' + '  xlat_mutablenumerator = ((tmpvar_4 + _qf.xy) * 64.0);\n' + '  xlat_mutabledenominator = (tmpvar_4 + _qf.zw);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = ((xlat_mutablenumerator.x * xlat_mutabledenominator.x) + (xlat_mutablenumerator.y * xlat_mutabledenominator.y));\n' + '  tmpvar_5.y = ((xlat_mutablenumerator.y * xlat_mutabledenominator.x) - (xlat_mutablenumerator.x * xlat_mutabledenominator.y));\n' + '  c_3 = ((tmpvar_5 / (\n' + '    (xlat_mutabledenominator.x * xlat_mutabledenominator.x)\n' + '   + \n' + '    (xlat_mutabledenominator.y * xlat_mutabledenominator.y)\n' + '  )) - 0.5);\n' + '   float tmpvar_6;\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (min (abs(\n' + '    (c_3.x / c_3.y)\n' + '  ), 1.0) / max (abs(\n' + '    (c_3.x / c_3.y)\n' + '  ), 1.0));\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = (tmpvar_7 * tmpvar_7);\n' + '  tmpvar_8 = (((\n' + '    ((((\n' + '      ((((-0.01213232 * tmpvar_8) + 0.05368138) * tmpvar_8) - 0.1173503)\n' + '     * tmpvar_8) + 0.1938925) * tmpvar_8) - 0.3326756)\n' + '   * tmpvar_8) + 0.9999793) * tmpvar_7);\n' + '  tmpvar_8 = (tmpvar_8 + (float(\n' + '    (abs((c_3.x / c_3.y)) > 1.0)\n' + '  ) * (\n' + '    (tmpvar_8 * -2.0)\n' + '   + 1.570796)));\n' + '  tmpvar_6 = (tmpvar_8 * sign((c_3.x / c_3.y)));\n' + '  if ((abs(c_3.y) > (1e-08 * abs(c_3.x)))) {\n' + '    if ((c_3.y < 0.0)) {\n' + '      if ((c_3.x >= 0.0)) {\n' + '        tmpvar_6 += 3.141593;\n' + '      } else {\n' + '        tmpvar_6 = (tmpvar_6 - 3.141593);\n' + '      };\n' + '    };\n' + '  } else {\n' + '    tmpvar_6 = (sign(c_3.x) * 1.570796);\n' + '  };\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = -(tmpvar_6);\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10.x = ((tmpvar_9 * _qg.x) + _qg.y);\n' + '  tmpvar_10.y = (((\n' + '    (0.4 * aspect.w)\n' + '   * \n' + '    log(sqrt(dot (c_3, c_3)))\n' + '  ) + (tmpvar_9 * _qg.x)) + _qg.z);\n' + '  spiral_2 = (0.5 + ((0.5 - \n' + '    abs(((fract(\n' + '      (tmpvar_10 * 0.5)\n' + '    ) * 2.0) - 1.0))\n' + '  ) * 0.95));\n' + '  xlat_mutabled = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (spiral_2 + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (spiral_2 - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_13 = texture2D (sampler_blur1, P_14);\n' + '  xlat_mutabledx = (((tmpvar_11.xyz * scale1) + bias1) - ((tmpvar_13.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (spiral_2 + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_15 = texture2D (sampler_blur1, P_16);\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (spiral_2 - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_17 = texture2D (sampler_blur1, P_18);\n' + '  xlat_mutabledy = (((tmpvar_15.xyz * scale1) + bias1) - ((tmpvar_17.xyz * scale1) + bias1));\n' + '   vec3 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_main, spiral_2).xyz;\n' + '  base_1 = tmpvar_19;\n' + '   vec3 tmpvar_20;\n' + '  tmpvar_20 = (((\n' + '    -(xlat_mutabledx)\n' + '   + xlat_mutabledy) + 1.0) * 1.2);\n' + '  xlat_mutabled = (texsize.zw * 2.0);\n' + '   vec4 tmpvar_21;\n' + '   vec2 P_22;\n' + '  P_22 = (spiral_2 + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_21 = texture2D (sampler_blur1, P_22);\n' + '   vec4 tmpvar_23;\n' + '   vec2 P_24;\n' + '  P_24 = (spiral_2 - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_23 = texture2D (sampler_blur1, P_24);\n' + '  xlat_mutabledx = (((tmpvar_21.xyz * scale1) + bias1) - ((tmpvar_23.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_25;\n' + '   vec2 P_26;\n' + '  P_26 = (spiral_2 + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_25 = texture2D (sampler_blur1, P_26);\n' + '   vec4 tmpvar_27;\n' + '   vec2 P_28;\n' + '  P_28 = (spiral_2 - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_27 = texture2D (sampler_blur1, P_28);\n' + '  xlat_mutabledy = (((tmpvar_25.xyz * scale1) + bias1) - ((tmpvar_27.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_29;\n' + '  tmpvar_29.x = xlat_mutabledx.x;\n' + '  tmpvar_29.y = xlat_mutabledy.x;\n' + '   float tmpvar_30;\n' + '  tmpvar_30 = sqrt(dot (tmpvar_29, tmpvar_29));\n' + '   vec3 tmpvar_31;\n' + '  tmpvar_31 = mix (((vec3(0.5, 0.4, 0.6) * base_1.x) * tmpvar_20.x), (vec3(8.0, 5.0, 2.0) * tmpvar_30), vec3((tmpvar_30 * 4.2)));\n' + '   vec4 tmpvar_32;\n' + '  tmpvar_32 = texture2D (sampler_main, spiral_2);\n' + '   vec4 tmpvar_33;\n' + '  tmpvar_33 = texture2D (sampler_blur1, spiral_2);\n' + '   vec2 tmpvar_34;\n' + '  tmpvar_34.x = xlat_mutabledx.z;\n' + '  tmpvar_34.y = xlat_mutabledy.z;\n' + '   vec4 tmpvar_35;\n' + '  tmpvar_35.w = 1.0;\n' + '  tmpvar_35.xyz = mix (mix (tmpvar_31, (4.0 * tmpvar_31), (\n' + '    (tmpvar_32.y * 0.5)\n' + '   - \n' + '    (vec3(0.09, 0.3, 0.3) * ((tmpvar_33.xyz * scale1) + bias1).z)\n' + '  )), vec3(2.0, 2.0, 0.0), vec3((sqrt(\n' + '    dot (tmpvar_34, tmpvar_34)\n' + '  ) * 0.7)));\n' + '  vec4 ret4 = tmpvar_35;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0.9;\n' + 'y1 = 0.5;\n' + 'x2 = 0.5;\n' + ' y2 = 0.5;\n' + 'x3 = 0.5;\n' + ' y3 = 0.5;\n' + 'x4 = 0.5;\n' + ' y4 = 0.5;'),
	'frame_eqs_str' : ('zoom = 1;\n' + 'warp = 0;\n' + 'wave_a = 0;\n' + 'xx1 = xx1*0.9 + (bass)*0.01;\n' + 'xx2 = xx2*0.9 + (treb)*0.01;\n' + 'yy1 = yy1*0.94 + (treb+bass)*0.0075;\n' + 'x1 = 0.5 + (xx1-xx2)*2;\n' + 'y1 = 0.4 + yy1*1.5;\n' + 'dt = 0.03/fps;\n' + 'vx2 = vx2*(1-2*dt) + dt*((x1+x3-2*x2)*10);\n' + 'vy2 = vy2*(1-2*dt) + dt*((y1+y3-2*y2)*10-0.5);\n' + 'vx3 = vx3*(1-2*dt) + dt*((x2+x4-2*x3)*10);\n' + 'vy3 = vy3*(1-2*dt) + dt*((y2+y4-2*y3)*10-0.5);\n' + 'vx4 = vx4*(1-2*dt) + dt*((x3-x4)*10);\n' + 'vy4 = vy4*(1-2*dt) + dt*((y3-y4)*10-0.5);\n' + 'x2 = x2 + vx2;\n' + ' y2 = y2 + vy2;\n' + 'x3 = x3 + vx3;\n' + ' y3 = y3 + vy3;\n' + 'x4 = x4 + vx4;\n' + ' y4 = y4 + vy4;\n' + 'vx2 = if(above(x2,0),vx2,abs(vx2)*0.5);\n' + 'vx2 = if(below(x2,1),vx2,-abs(vx2)*0.5);\n' + 'vx3 = if(above(x3,0),vx3,abs(vx3)*0.5);\n' + 'vx3 = if(below(x3,1),vx3,-abs(vx3)*0.5);\n' + 'vx4 = if(above(x4,0),vx4,abs(vx4)*0.5);\n' + 'vx4 = if(below(x4,1),vx4,-abs(vx4)*0.5);\n' + 'vy2 = if(above(y2,0),vy2,abs(vy2)*0.5);\n' + 'vy2 = if(below(y2,1),vy2,-abs(vy2)*0.5);\n' + 'vy3 = if(above(y3,0),vy3,abs(vy3)*0.5);\n' + 'vy3 = if(below(y3,1),vy3,-abs(vy3)*0.5);\n' + 'vy4 = if(above(y4,0),vy4,abs(vy4)*0.5);\n' + 'vy4 = if(below(y4,1),vy4,-abs(vy4)*0.5);\n' + 'q1 = x1;\n' + 'q2 = x2;\n' + 'q3 = x3;\n' + 'q4 = x4;\n' + 'q5 = y1;\n' + 'q6 = y2;\n' + 'q7 = y3;\n' + 'q8 = y4;\n' + 'q9 = 1/aspectx;\n' + 'q10 = 1/aspecty;\n' + 'q11 = aspectx;\n' + 'q12 = aspecty;\n' + 'bb = bb*0.99 + bass*0.02;\n' + 'mm = mm*0.99 + mid*0.02;\n' + 'tt = tt*0.99 + treb*0.02;\n' + 'mx = max(max(bb,mm),tt);\n' + 'mn = min(min(bb,mm),tt);\n' + 'ob_r = (bb-mn)/(mx-mn);\n' + 'ob_b = (mm-mn)/(mx-mn);\n' + 'ob_g = (tt-mn)/(mx-mn);\n' + 'v = 0.4/fps;\n' + 'bm = bm + (ob_r-ob_b)*v;\n' + 'mt = mt + (ob_b-ob_g)*v;\n' + 'q21 = 0.5;\n' + 'q22 = 0;\n' + 'q23 = -0.5;\n' + 'q24 = 0;\n' + 'q25 = 0.5/asin(1);\n' + 'q26 = -bm;\n' + 'q27 = mt;'),
	'pixel_eqs_str' : ('x = 0.5 + (x-0.5)*q11;\n' + 'y = 0.5 + (y-0.5)*q12;\n' + 'xx = q4;\n' + 'yy = 1-q8;\n' + 'dx = 0;\n' + ' dy = 0;\n' + 'd = sqrt((x-xx)*(x-xx)+(y-yy)*(y-yy));\n' + 'r = 0.11;\n' + 'v = 20;\n' + 'dx = (v*(sin(y-yy)*(d-r)-(x-xx)*(d-r/2)))*(1.00-sigmoid(d-r,100));\n' + 'dy = (-v*(sin(x-xx)*(d-r)+(y-yy)*(d-r/2)))*(1.00-sigmoid(d-r,100));'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.21,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 100.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.073,
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
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.92178,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.04,
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
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.44,
		decay : 1.0,
		wave_a : 0.004,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 2.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.xx = 0;
m.yy = 0;
m.size = 0;
m.strength = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.d1 = 0;
m.dir = 0;
m.d2 = 0;
m.vy2 = 0;
m.dt = 0;
m.vx2 = 0;
m.vy3 = 0;
m.q10 = 0;
m.yy1 = 0;
m.xx1 = 0;
m.vx3 = 0;
m.vy4 = 0;
m.q11 = 0;
m.xx2 = 0;
m.vx4 = 0;
m.q12 = 0;
m.q13 = 0;
m.q14 = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;
m.y3 = 0;
m.si1 = 0;
m.x3 = 0;
m.y4 = 0;
m.si2 = 0;
m.x4 = 0;
m.velocity = 0;
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
m.q13 = (sqrt(((m.vx4*m.vx4)+(m.vy4*m.vy4)))*0.8);
m.q14 = Math.atan2(m.vx4, m.vy4);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.x = (0.5+((m.x-0.5)*m.q11));
m.y = (0.5+((m.y-0.5)*m.q12));
m.dir = ((-m.q14*1)+(Math.asin(1)*1));
m.velocity = m.q13;
m.strength = 100;
m.size = 0.07;
m.xx = m.q4;
m.yy = (1-m.q8);
m.x1 = (m.xx+(Math.cos((m.dir+1.5708))*m.size));
m.y1 = (m.yy-(Math.sin((m.dir+1.5708))*m.size));
m.x2 = (m.xx-(Math.cos((m.dir+1.5708))*m.size));
m.y2 = (m.yy+(Math.sin((m.dir+1.5708))*m.size));
m.d1 = (sqrt((((m.x1-m.x)*(m.x1-m.x))+((m.y1-m.y)*(m.y1-m.y))))-(m.size*2));
m.si1 = (1-div(1,(1+pow(2, (-m.d1*100)))));
m.d2 = (sqrt((((m.x2-m.x)*(m.x2-m.x))+((m.y2-m.y)*(m.y2-m.y))))-(m.size*2));
m.si2 = (1-div(1,(1+pow(2, (-m.d2*100)))));
m.dx = (((((m.si1*Math.sin((m.y1-m.y)))*m.d1)-((m.si2*Math.sin((m.y2-m.y)))*m.d2))*m.strength)*m.velocity);
m.dy = (((((-m.si1*Math.sin((m.x1-m.x)))*m.d1)+((m.si2*Math.sin((m.x2-m.x)))*m.d2))*m.strength)*m.velocity);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.33,
			g : 1.0,
			scaling : 2.0231,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.d = 0;
m.tt1 = 0;
m.tt2 = 0;
m.tt3 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = ['d','tt1','tt2','tt3'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.tt3 = ((m.tt3*0.6)+(m.value1*1));
m.tt2 = ((m.tt2*0.7)+(m.tt3*0.2));
m.tt1 = ((m.tt1*0.8)+(m.tt2*0.1));
m.d = ((m.d*0.9)+(m.tt1*0.2));
m.y = (0.5+(((m.d*m.sample)*(1-m.sample))*6));
m.x = (-0.05+(m.sample*1.1));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('tt3 = tt3*0.6 + (value1)*1;\n' + 'tt2 = tt2*0.7 + tt3*0.2;\n' + 'tt1 = tt1*0.8 + tt2*0.1;\n' + 'd = d*0.9 + tt1*0.2;\n' + 'y = 0.5 + d*sample*(1-sample)*6;\n' + 'x =  -0.05 + sample*1.1;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.69136,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.q10 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['sample'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t2 = m.q2;
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
m.t7 = m.q7;
m.t8 = m.q8;
		return m;
	},
		'point_eqs' : function(m) {
m.sample = (1-m.sample);
m.x = ((((((pow(m.sample, 5)*m.t1)+(((5*pow(m.sample, 4))*(1-m.sample))*m.t1))+(((10*pow(m.sample, 3))*sqr((1-m.sample)))*m.t2))+(((10*sqr(m.sample))*pow((1-m.sample), 3))*m.t3))+(((5*pow((1-m.sample), 4))*m.sample)*m.t4))+(pow((1-m.sample), 5)*m.t4));
m.y = ((((((pow(m.sample, 5)*m.t5)+(((5*pow(m.sample, 4))*(1-m.sample))*m.t5))+(((10*pow(m.sample, 3))*sqr((1-m.sample)))*m.t6))+(((10*sqr(m.sample))*pow((1-m.sample), 3))*m.t7))+(((5*pow((1-m.sample), 4))*m.sample)*m.t8))+(pow((1-m.sample), 5)*m.t8));
m.x = (0.5+((m.x-0.5)*m.q9));
m.y = (0.5+((m.y-0.5)*m.q10));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't7 = q7;\n' + 't8 = q8;'),
		'point_eqs_str' : ('sample = 1-sample;\n' + 'x = pow(sample,5)*t1 + 5*pow(sample,4)*(1-sample)*t1 + 10*pow(sample,3)*sqr(1-sample)*t2+ 10*sqr(sample)*pow(1-sample,3)*t3 + 5*pow(1-sample,4)*sample*t4 + pow(1-sample,5)*t4;\n' + 'y = pow(sample,5)*t5 + 5*pow(sample,4)*(1-sample)*t5 + 10*pow(sample,3)*sqr(1-sample)*t6+ 10*sqr(sample)*pow(1-sample,3)*t7 + 5*pow(1-sample,4)*sample*t8 + pow(1-sample,5)*t8;\n' + 'x = 0.5 + (x-0.5)*q9;\n' + 'y = 0.5 + (y-0.5)*q10;'),

		},
		{
		'baseVals' : {
			a : 0.3,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.69136,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.dd = 0;
m.q1 = 0;
m.xx = 0;
m.yy = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.q10 = 0;
m.xxx = 0;
m.yyy = 0;

			m.rkeys = ['yy','xx','sample'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sample = (1-m.sample);
m.xxx = m.xx;
m.yyy = m.yy;
m.xx = ((((((pow(m.sample, 5)*m.q1)+(((5*pow(m.sample, 4))*(1-m.sample))*m.q1))+(((10*pow(m.sample, 3))*sqr((1-m.sample)))*m.q2))+(((10*sqr(m.sample))*pow((1-m.sample), 3))*m.q3))+(((5*pow((1-m.sample), 4))*m.sample)*m.q4))+(pow((1-m.sample), 5)*m.q4));
m.yy = ((((((pow(m.sample, 5)*m.q5)+(((5*pow(m.sample, 4))*(1-m.sample))*m.q5))+(((10*pow(m.sample, 3))*sqr((1-m.sample)))*m.q6))+(((10*sqr(m.sample))*pow((1-m.sample), 3))*m.q7))+(((5*pow((1-m.sample), 4))*m.sample)*m.q8))+(pow((1-m.sample), 5)*m.q8));
m.d = div(1,sqrt((sqr((m.xx-m.xxx))+sqr((m.yy-m.yyy)))));
m.dd = ((((m.sample*(1-m.sample))*Math.sin((m.sample*180)))*m.d)*0.1);
m.x = (m.xx+((m.yy-m.yyy)*m.dd));
m.y = (m.yy-((m.xx-m.xxx)*m.dd));
m.x = (0.5+((m.x-0.5)*m.q9));
m.y = (0.5+((m.y-0.5)*m.q10));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sample = 1-sample;\n' + 'xxx = xx;\n' + 'yyy = yy;\n' + 'xx = pow(sample,5)*q1 + 5*pow(sample,4)*(1-sample)*q1 + 10*pow(sample,3)*sqr(1-sample)*q2+ 10*sqr(sample)*pow(1-sample,3)*q3 + 5*pow(1-sample,4)*sample*q4 + pow(1-sample,5)*q4;\n' + 'yy = pow(sample,5)*q5 + 5*pow(sample,4)*(1-sample)*q5 + 10*pow(sample,3)*sqr(1-sample)*q6+ 10*sqr(sample)*pow(1-sample,3)*q7 + 5*pow(1-sample,4)*sample*q8 + pow(1-sample,5)*q8;\n' + 'd = 1/sqrt(sqr(xx-xxx)+sqr(yy-yyy));\n' + 'dd = sample*(1-sample)*sin(sample*180)*d*0.1;\n' + 'x = xx + (yy-yyy)*dd;\n' + 'y = yy - (xx-xxx)*dd;\n' + 'x = 0.5 + (x-0.5)*q9;\n' + 'y = 0.5 + (y-0.5)*q10;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.0,
			scaling : 2.44415,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t8 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t8 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = -m.t8;
m.y = ((1+m.t8)*0.01);
m.x = m.sample;
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('t8 = 1;'),
		'point_eqs_str' : ('t8 = -t8;\n' + 'y = (1+t8)*0.01;\n' + 'x = sample;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.96,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.12566,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.51878,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.0639,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 24.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q1;
m.y = m.q5;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = q1;\n' + 'y = q5;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.96,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.12566,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.51878,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.0639,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 24.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.q6 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q2;
m.y = m.q6;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = q2;\n' + 'y = q6;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.96,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.12566,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.51878,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.0639,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 24.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.q7 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q3;
m.y = m.q7;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = q3;\n' + 'y = q7;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.96,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.12566,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.51878,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.0639,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 24.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q4;
m.y = m.q8;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = q4;\n' + 'y = q8;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 1.5)) + rand_frame.xy);\n' + '   float tmpvar_3;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_main, uv);\n' + '  tmpvar_3 = dot ((tmpvar_4.xyz - 0.35), vec3(0.32, 0.49, 0.29));\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = dot (tmpvar_4.xyz, vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = clamp ((uv - (\n' + '    ((vec2(0.0, 32.0) * texsize.zw) * tmpvar_3)\n' + '   * \n' + '    (tmpvar_5 - 0.4)\n' + '  )), 0.0, 1.0);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_main, tmpvar_6);\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = ((texture2D (sampler_noise_lq, tmpvar_2) - 0.5) * 0.0038).xyz;\n' + '  ret_1 = ((tmpvar_7.xyz - 0.0011) + tmpvar_8);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9.w = 1.0;\n' + '  tmpvar_9.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_9;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 dz_1;\n' + '   vec3 dy_2;\n' + '   vec3 dx_3;\n' + '   vec2 d_4;\n' + '   vec3 ret_5;\n' + '   vec2 P_6;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (vec2(1.0, 0.0) * texsize.zw);\n' + '  P_6 = (uv + tmpvar_7);\n' + '   vec2 P_8;\n' + '  P_8 = (uv - tmpvar_7);\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = (texture2D (sampler_main, P_6).xyz - texture2D (sampler_main, P_8).xyz);\n' + '  dx_3 = tmpvar_9;\n' + '   vec2 P_10;\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = (vec2(0.0, 1.0) * texsize.zw);\n' + '  P_10 = (uv + tmpvar_11);\n' + '   vec2 P_12;\n' + '  P_12 = (uv - tmpvar_11);\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = (texture2D (sampler_main, P_10).xyz - texture2D (sampler_main, P_12).xyz);\n' + '  dy_2 = tmpvar_13;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = dx_3.y;\n' + '  tmpvar_14.y = dy_2.y;\n' + '  d_4 = (texsize.zw * 2.0);\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (uv + (vec2(1.0, 0.0) * d_4));\n' + '  tmpvar_15 = texture2D (sampler_blur1, P_16);\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv - (vec2(1.0, 0.0) * d_4));\n' + '  tmpvar_17 = texture2D (sampler_blur1, P_18);\n' + '  dx_3 = (((tmpvar_15.xyz * scale1) + bias1) - ((tmpvar_17.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_19;\n' + '   vec2 P_20;\n' + '  P_20 = (uv + (vec2(0.0, 1.0) * d_4));\n' + '  tmpvar_19 = texture2D (sampler_blur1, P_20);\n' + '   vec4 tmpvar_21;\n' + '   vec2 P_22;\n' + '  P_22 = (uv - (vec2(0.0, 1.0) * d_4));\n' + '  tmpvar_21 = texture2D (sampler_blur1, P_22);\n' + '  dy_2 = (((tmpvar_19.xyz * scale1) + bias1) - ((tmpvar_21.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_23;\n' + '  tmpvar_23.x = dx_3.y;\n' + '  tmpvar_23.y = dy_2.y;\n' + '  dz_1 = ((tmpvar_14 * 3.0) + tmpvar_23);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_blur2, uv);\n' + '  ret_5 = (vec3(((\n' + '    pow ((sqrt(dot (dz_1, dz_1)) * 0.8), 0.7)\n' + '   + \n' + '    (((tmpvar_24.xyz * scale2) + bias2).y * 0.4)\n' + '  ) - 0.1)) * vec3(0.3, 0.5, 0.7));\n' + '   vec2 tmpvar_25;\n' + '  tmpvar_25.x = dx_3.x;\n' + '  tmpvar_25.y = dy_2.x;\n' + '   vec2 P_26;\n' + '  P_26 = (uv + ((tmpvar_25 * texsize.zw) * 18.0));\n' + '   vec3 tmpvar_27;\n' + '  tmpvar_27 = vec3((texture2D (sampler_main, P_26).x * 6.0));\n' + '   vec3 tmpvar_28;\n' + '  tmpvar_28 = texture2D (sampler_main, uv).zzz;\n' + '   vec3 tmpvar_29;\n' + '  tmpvar_29 = mix (mix (ret_5, vec3(0.2, 0.1, 0.0), tmpvar_27), vec3(1.0, 1.0, 1.0), tmpvar_28);\n' + '  ret_5 = tmpvar_29;\n' + '   vec4 tmpvar_30;\n' + '  tmpvar_30.w = 1.0;\n' + '  tmpvar_30.xyz = tmpvar_29;\n' + '  vec4 ret4 = tmpvar_30;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0.9;\n' + 'y1 = 0.5;\n' + 'x2 = 0.5;\n' + ' y2 = 0.5;\n' + 'x3 = 0.5;\n' + ' y3 = 0.5;\n' + 'x4 = 0.5;\n' + ' y4 = 0.5;'),
	'frame_eqs_str' : ('zoom = 1;\n' + 'warp = 0;\n' + 'wave_a = 0;\n' + 'xx1 = xx1*0.9 + (bass)*0.01;\n' + 'xx2 = xx2*0.9 + (treb)*0.01;\n' + 'yy1 = yy1*0.94 + (treb+bass)*0.0075;\n' + 'x1 = 0.5 + (xx1-xx2)*2;\n' + 'y1 = 0.4 + yy1*1.5;\n' + 'dt = 0.03/fps;\n' + 'vx2 = vx2*(1-2*dt) + dt*((x1+x3-2*x2)*10);\n' + 'vy2 = vy2*(1-2*dt) + dt*((y1+y3-2*y2)*10-0.5);\n' + 'vx3 = vx3*(1-2*dt) + dt*((x2+x4-2*x3)*10);\n' + 'vy3 = vy3*(1-2*dt) + dt*((y2+y4-2*y3)*10-0.5);\n' + 'vx4 = vx4*(1-2*dt) + dt*((x3-x4)*10);\n' + 'vy4 = vy4*(1-2*dt) + dt*((y3-y4)*10-0.5);\n' + 'x2 = x2 + vx2;\n' + ' y2 = y2 + vy2;\n' + 'x3 = x3 + vx3;\n' + ' y3 = y3 + vy3;\n' + 'x4 = x4 + vx4;\n' + ' y4 = y4 + vy4;\n' + 'vx2 = if(above(x2,0),vx2,abs(vx2)*0.5);\n' + 'vx2 = if(below(x2,1),vx2,-abs(vx2)*0.5);\n' + 'vx3 = if(above(x3,0),vx3,abs(vx3)*0.5);\n' + 'vx3 = if(below(x3,1),vx3,-abs(vx3)*0.5);\n' + 'vx4 = if(above(x4,0),vx4,abs(vx4)*0.5);\n' + 'vx4 = if(below(x4,1),vx4,-abs(vx4)*0.5);\n' + 'vy2 = if(above(y2,0),vy2,abs(vy2)*0.5);\n' + 'vy2 = if(below(y2,1),vy2,-abs(vy2)*0.5);\n' + 'vy3 = if(above(y3,0),vy3,abs(vy3)*0.5);\n' + 'vy3 = if(below(y3,1),vy3,-abs(vy3)*0.5);\n' + 'vy4 = if(above(y4,0),vy4,abs(vy4)*0.5);\n' + 'vy4 = if(below(y4,1),vy4,-abs(vy4)*0.5);\n' + 'q1 = x1;\n' + 'q2 = x2;\n' + 'q3 = x3;\n' + 'q4 = x4;\n' + 'q5 = y1;\n' + 'q6 = y2;\n' + 'q7 = y3;\n' + 'q8 = y4;\n' + 'q9 = 1/aspectx;\n' + 'q10 = 1/aspecty;\n' + 'q11 = aspectx;\n' + 'q12 = aspecty;\n' + 'q13 = sqrt(vx4*vx4 + vy4*vy4)*0.8;\n' + 'q14 = atan2(vx4,vy4);'),
	'pixel_eqs_str' : ('x = 0.5 + (x-0.5)*q11;\n' + 'y = 0.5 + (y-0.5)*q12;\n' + 'dir = -q14*1 + asin(1)*1;\n' + 'velocity = q13;\n' + 'strength = 100;\n' + 'size = 0.07;\n' + 'xx = q4;\n' + 'yy = 1-q8;\n' + 'x1 = xx   +cos(dir+1.5708)*size;\n' + 'y1 = yy -sin(dir+1.5708)*size;\n' + 'x2 = xx   -cos(dir+1.5708)*size;\n' + 'y2 = yy +sin(dir+1.5708)*size;\n' + 'd1 = sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y))-size*2;\n' + 'si1 = 1- 1/(1+pow(2,-d1*100));\n' + 'd2 = sqrt((x2-x)*(x2-x)+(y2-y)*(y2-y))-size*2;\n' + 'si2 = 1- 1/(1+pow(2,-d2*100));\n' + 'dx = (si1*sin(y1-y)*d1  - si2*sin(y2-y)*d2)*strength*velocity;\n' + 'dy = (-si1*sin(x1-x)*d1 + si2*sin(x2-x)*d2)*strength*velocity;'),
};

return pmap;
});
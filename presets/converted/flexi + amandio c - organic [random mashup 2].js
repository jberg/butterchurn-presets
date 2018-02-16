define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 14.497,
		brighten : 1.0,
		mv_y : 9.0,
		wave_scale : 1.0,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.75055,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
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
		ob_size : 0.5,
		b1ed : 0.25,
		wave_smoothing : 0.75,
		warpanimspeed : 0.141,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99951,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 2.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.bounce = 0;
m.ref_ang = 0;
m.vy1 = 0;
m.vx1 = 0;
m.vy2 = 0;
m.vx2 = 0;
m.vy3 = 0;
m.q10 = 0;
m.vx3 = 0;
m.vy4 = 0;
m.q11 = 0;
m.r = 0;
m.vx4 = 0;
m.q12 = 0;
m.q13 = 0;
m.q14 = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.w1 = 0;
m.x2 = 0;
m.y3 = 0;
m.v1 = 0;
m.w2 = 0;
m.x3 = 0;
m.y4 = 0;
m.v2 = 0;
m.x4 = 0;
m.x1 = 0.5;
m.x2 = 0.51;
m.y2 = 1;
m.y1 = 0.7;
m.x3 = 0.8;
m.y3 = 0.5;
m.x4 = 0.2;
m.y4 = 0.5;
m.ax1 = 0;
m.ay1 = 0;
m.ax2 = 0;
m.ay2 = 0;
m.ax3 = 0;
m.ay3 = 0;
m.vx1 = 0.000;
m.vx2 = 0.000;
		return m;
	},
	'frame_eqs' : function(m) {
m.sx = (1+((0.01*mod((8*m.bass),8))*equal(mod(m.time,Math.floor((24-(2*m.bass)))), 0)));
m.sy = (1+((0.01*mod((8*m.mid),8))*equal(mod(m.time,(12+Math.floor((24-(2*m.bass))))), 0)));
m.zoom = 0.99;
m.wave_a = 0;
m.r = (0.12+(Math.max(m.bass_att, m.treb_att)*0.004));
m.bounce = below(m.y1, m.r);
m.y1 = (m.y1+m.vy1);
m.vy1 = ifcond(m.bounce, ((Math.abs(m.vy1)*0.94)+((m.r-m.y1)*0.1)), (m.vy1-div((0.00006*60),m.fps)));
m.bounce = below(m.x1, m.r);
m.x1 = (m.x1+m.vx1);
m.vx1 = ifcond(m.bounce, ((Math.abs(m.vx1)*0.94)+((m.r-m.x1)*0.1)), m.vx1);
m.bounce = above(m.x1, (1-m.r));
m.vx1 = ifcond(m.bounce, ((-Math.abs(m.vx1)*0.94)+(((1-m.r)-m.x1)*0.04)), m.vx1);
m.bounce = below(m.y2, m.r);
m.y2 = (m.y2+m.vy2);
m.vy2 = ifcond(m.bounce, ((Math.abs(m.vy2)*0.94)+((m.r-m.y2)*0.1)), (m.vy2-div((0.00006*60),m.fps)));
m.bounce = below(m.x2, m.r);
m.x2 = (m.x2+m.vx2);
m.vx2 = ifcond(m.bounce, ((Math.abs(m.vx2)*0.94)+((m.r-m.x2)*0.1)), m.vx2);
m.bounce = above(m.x2, (1-m.r));
m.vx2 = ifcond(m.bounce, ((-Math.abs(m.vx2)*0.94)+(((1-m.r)-m.x2)*0.1)), m.vx2);
m.bounce = below(m.y3, m.r);
m.y3 = (m.y3+m.vy3);
m.vy3 = ifcond(m.bounce, ((Math.abs(m.vy3)*0.94)+((m.r-m.y3)*0.1)), (m.vy3-div((0.00006*60),m.fps)));
m.bounce = below(m.x3, m.r);
m.x3 = (m.x3+m.vx3);
m.vx3 = ifcond(m.bounce, ((Math.abs(m.vx3)*0.94)+((m.r-m.x3)*0.1)), m.vx3);
m.bounce = above(m.x3, (1-m.r));
m.vx3 = ifcond(m.bounce, ((-Math.abs(m.vx3)*0.94)+(((1-m.r)-m.x3)*0.1)), m.vx3);
m.bounce = below(m.y4, m.r);
m.y4 = (m.y4+m.vy4);
m.vy4 = ifcond(m.bounce, ((Math.abs(m.vy4)*0.94)+((m.r-m.y4)*0.1)), (m.vy4-div((0.00006*60),m.fps)));
m.bounce = below(m.x4, m.r);
m.x4 = (m.x4+m.vx4);
m.vx4 = ifcond(m.bounce, ((Math.abs(m.vx4)*0.94)+((m.r-m.x4)*0.1)), m.vx4);
m.bounce = above(m.x4, (1-m.r));
m.vx4 = ifcond(m.bounce, ((-Math.abs(m.vx4)*0.94)+(((1-m.r)-m.x4)*0.1)), m.vx4);
m.bounce = below(sqrt((sqr((((m.x1+m.vx1)-m.x2)-m.vx2))+sqr((((m.y1+m.vy1)-m.y2)-m.vy2)))), (2*m.r));
m.ref_ang = (Math.atan2((m.x2-m.x1), (m.y2-m.y1))+Math.asin(1));
m.v1 = sqrt(((m.vx1*m.vx1)+(m.vy1*m.vy1)));
m.v2 = sqrt(((m.vx2*m.vx2)+(m.vy2*m.vy2)));
m.w1 = Math.atan2(m.vx1, m.vy1);
m.w2 = Math.atan2(m.vx2, m.vy2);
m.vx1 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vx1);
m.vy1 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vy1);
m.vx2 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vx2);
m.vy2 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vy2);
m.bounce = below(sqrt((sqr((((m.x1+m.vx1)-m.x3)-m.vx3))+sqr((((m.y1+m.vy1)-m.y3)-m.vy3)))), (2*m.r));
m.ref_ang = (Math.atan2((m.x3-m.x1), (m.y3-m.y1))+Math.asin(1));
m.v1 = sqrt(((m.vx1*m.vx1)+(m.vy1*m.vy1)));
m.v2 = sqrt(((m.vx3*m.vx3)+(m.vy3*m.vy3)));
m.w1 = Math.atan2(m.vx1, m.vy1);
m.w2 = Math.atan2(m.vx3, m.vy3);
m.vx1 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vx1);
m.vy1 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vy1);
m.vx3 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vx3);
m.vy3 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vy3);
m.bounce = below(sqrt((sqr((((m.x2+m.vx2)-m.x3)-m.vx3))+sqr((((m.y2+m.vy2)-m.y3)-m.vy3)))), (2*m.r));
m.ref_ang = (Math.atan2((m.x3-m.x2), (m.y3-m.y2))+Math.asin(1));
m.v1 = sqrt(((m.vx2*m.vx2)+(m.vy2*m.vy2)));
m.v2 = sqrt(((m.vx3*m.vx3)+(m.vy3*m.vy3)));
m.w1 = Math.atan2(m.vx2, m.vy2);
m.w2 = Math.atan2(m.vx3, m.vy3);
m.vx2 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vx2);
m.vy2 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vy2);
m.vx3 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vx3);
m.vy3 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vy3);
m.bounce = below(sqrt((sqr((((m.x1+m.vx1)-m.x4)-m.vx4))+sqr((((m.y1+m.vy1)-m.y4)-m.vy4)))), (2*m.r));
m.ref_ang = (Math.atan2((m.x4-m.x1), (m.y4-m.y1))+Math.asin(1));
m.v1 = sqrt(((m.vx1*m.vx1)+(m.vy1*m.vy1)));
m.v2 = sqrt(((m.vx4*m.vx4)+(m.vy4*m.vy4)));
m.w1 = Math.atan2(m.vx1, m.vy1);
m.w2 = Math.atan2(m.vx4, m.vy4);
m.vx1 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vx1);
m.vy1 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vy1);
m.vx4 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vx4);
m.vy4 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vy4);
m.bounce = below(sqrt((sqr((((m.x2+m.vx2)-m.x4)-m.vx4))+sqr((((m.y2+m.vy2)-m.y4)-m.vy4)))), (2*m.r));
m.ref_ang = (Math.atan2((m.x4-m.x2), (m.y4-m.y2))+Math.asin(1));
m.v1 = sqrt(((m.vx2*m.vx2)+(m.vy2*m.vy2)));
m.v2 = sqrt(((m.vx4*m.vx4)+(m.vy4*m.vy4)));
m.w1 = Math.atan2(m.vx2, m.vy2);
m.w2 = Math.atan2(m.vx4, m.vy4);
m.vx2 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vx2);
m.vy2 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vy2);
m.vx4 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vx4);
m.vy4 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vy4);
m.bounce = below(sqrt((sqr((((m.x3+m.vx3)-m.x4)-m.vx4))+sqr((((m.y3+m.vy3)-m.y4)-m.vy4)))), (2*m.r));
m.ref_ang = (Math.atan2((m.x4-m.x3), (m.y4-m.y3))+Math.asin(1));
m.v1 = sqrt(((m.vx3*m.vx3)+(m.vy3*m.vy3)));
m.v2 = sqrt(((m.vx4*m.vx4)+(m.vy4*m.vy4)));
m.w1 = Math.atan2(m.vx3, m.vy3);
m.w2 = Math.atan2(m.vx4, m.vy4);
m.vx3 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vx3);
m.vy3 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vy3);
m.vx4 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vx4);
m.vy4 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vy4);
m.q1 = m.aspectx;
m.q2 = m.aspecty;
m.q3 = m.x1;
m.q4 = m.y1;
m.q5 = m.r;
m.q6 = m.x2;
m.q7 = m.y2;
m.q8 = m.r;
m.q9 = m.x3;
m.q10 = m.y3;
m.q11 = m.r;
m.q12 = m.x4;
m.q13 = m.y4;
m.q14 = m.r;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.0,
			enabled : 0.0,
			b : 0.15,
			g : 0.15,
			scaling : 1.0,
			samples : 395.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.15,
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
			a : 0.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.01,
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
			a : 0.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
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
			a : 0.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
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

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.4,
			a : 1.0,
			enabled : 1.0,
			b : 0.6,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.7,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.39711,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.17809,
			x : 0.5,
			y : 0.5,
			ang : 0.26,
			sides : 6.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.11+(0.22*rand(5)));
m.y = (0.1+(0.16*mod((2*m.time),6)));
m.b = (0.6+(0.3*m.q3));
m.g = (0.7+(0.2*m.q3));
m.r = 0.7;
m.g2 = (0.3*m.g);
m.r2 = (0.3*m.r);
m.b2 = (0.3*m.b);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=.11+.22*rand(5);\n' + 'y=.1+.16*(2*time%6);\n' + 'b=.6+.3*q3;\n' + 'g=.7+.2*q3;\n' + 'r= .7;\n' + 'g2=.3*g;\n' + 'r2=.3*r;\n' + 'b2=.3*b;'),

		},
		{
		'baseVals' : {
			r2 : 0.2,
			a : 0.5,
			enabled : 1.0,
			b : 0.4,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.99999,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.3,
			a2 : 0.6,
			r : 1.0,
			border_g : 0.0,
			rad : 0.17809,
			x : 0.5,
			y : 0.5,
			ang : 0.26,
			sides : 6.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.11+(0.22*rand(5)));
m.y = (0.1+(0.16*mod((2*m.time),6)));
m.b = (0.6+(0.3*m.q3));
m.g = (0.7+(0.2*m.q3));
m.r = 0.7;
m.g2 = (0.3*m.g);
m.r2 = (0.3*m.r);
m.b2 = (0.3*m.b);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=.11+.22*rand(5);\n' + 'y=.1+.16*(2*time%6);\n' + 'b=.6+.3*q3;\n' + 'g=.7+.2*q3;\n' + 'r= .7;\n' + 'g2=.3*g;\n' + 'r2=.3*r;\n' + 'b2=.3*b;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.19615,
			additive : 0.0,
			border_a : 0.2,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.2,
			r : 1.0,
			border_g : 0.0,
			rad : 0.17633,
			x : 0.5,
			y : 0.5,
			ang : 0.26,
			sides : 6.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.22*rand(6));
m.y = (0.18+(0.16*mod((2*m.time),5)));
m.g = (1.5*m.q3);
m.r = (1.3*m.q4);
m.b = (1.7*m.q5);
m.tex_ang = -m.q1;
m.tex_zoom = (2+Math.sin(m.q1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=.22*rand(6);\n' + 'y=.18+.16*(2*time%5);\n' + 'g=1.5*q3;\n' + 'r=1.3*q4;\n' + 'b=1.7*q5;\n' + 'tex_ang=-q1;\n' + 'tex_zoom=2+sin(q1);'),

		},
		{
		'baseVals' : {
			r2 : 0.8,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.8,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.2,
			border_b : 0.0,
			b2 : 0.8,
			a2 : 0.2,
			r : 1.0,
			border_g : 0.0,
			rad : 0.16284,
			x : 0.5,
			y : 0.5,
			ang : 0.26,
			sides : 6.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.11+(0.22*rand(5)));
m.y = (0.1+(0.16*mod((2*m.time),6)));
m.r = (0.3*m.q3);
m.b = (0.2*m.q2);
m.g = (0.1*m.q1);
m.tex_ang = m.q1;
m.tex_zoom = (2+(1.2*Math.sin((1.5*m.q1))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=.11+.22*rand(5);\n' + 'y=.1+.16*(2*time%6);\n' + 'r=.3*q3;\n' + 'b=.2*q2;\n' + 'g=.1*q1;\n' + 'tex_ang=q1;\n' + 'tex_zoom=2+1.2*sin(1.5*q1);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 uv_z_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (1.0 - abs((\n' + '    (fract((uv * 0.5)) * 2.0)\n' + '   - 1.0)));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_fc_main, tmpvar_3);\n' + '  ret_2.x = (tmpvar_4.x * 0.5);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (texsize.zw * 4.0);\n' + '   vec2 tmpvar_6;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (uv_orig - 0.5);\n' + '  tmpvar_6 = ((tmpvar_7 * 0.996) + 0.5);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (tmpvar_6 + (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (tmpvar_6 - (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (tmpvar_6 + (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_12 = texture2D (sampler_blur1, P_13);\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (tmpvar_6 - (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_14 = texture2D (sampler_blur1, P_15);\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.x = (((2.0 * \n' + '    ((tmpvar_8.xyz * scale1) + bias1)\n' + '  ) - (\n' + '    (tmpvar_10.xyz * scale1)\n' + '   + bias1)) * 0.5).z;\n' + '  tmpvar_16.y = (((2.0 * \n' + '    ((tmpvar_12.xyz * scale1) + bias1)\n' + '  ) - (\n' + '    (tmpvar_14.xyz * scale1)\n' + '   + bias1)) * 0.5).z;\n' + '  uv_z_1 = (tmpvar_6 - ((tmpvar_16 * texsize.zw) * 2.0));\n' + '   float tmpvar_17;\n' + '  tmpvar_17 = clamp ((1.0 - (\n' + '    sqrt(dot (tmpvar_7, tmpvar_7))\n' + '   * 3.2)), 0.0, 1.0);\n' + '   float tmpvar_18;\n' + '  tmpvar_18 = max (((\n' + '    (texture2D (sampler_fc_main, tmpvar_3).x - 0.5)\n' + '   * 3.0) * tmpvar_17), texture2D (sampler_fc_main, uv_z_1).z);\n' + '  ret_2.z = tmpvar_18;\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_fc_main, uv_z_1);\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = clamp (uv_z_1, 0.0, 1.0);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_blur1, tmpvar_20);\n' + '  ret_2.z = (ret_2.z + ((\n' + '    (2.0 * tmpvar_19.z)\n' + '   - \n' + '    (2.0 * ((tmpvar_21.xyz * scale1) + bias1).z)\n' + '  ) * 0.01));\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22 = mix (uv, uv_orig, vec2(0.9996, 0.9996));\n' + '   float tmpvar_23;\n' + '  tmpvar_23 = max (texture2D (sampler_fc_main, tmpvar_22).y, texture2D (sampler_fc_main, uv_orig).z);\n' + '  ret_2.y = (tmpvar_23 - 0.008);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24.w = 1.0;\n' + '  tmpvar_24.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_24;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 dy_1;\n' + '   vec3 dx_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3.x = _qc.w;\n' + '  tmpvar_3.y = _qd.x;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (texsize.zw * 1.2);\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (vec2(1.0, 0.0) * tmpvar_4));\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_4));\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (texture2D (sampler_main, P_5).xyz - texture2D (sampler_main, P_6).xyz);\n' + '  dx_2 = tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + (vec2(0.0, 1.0) * tmpvar_4));\n' + '   vec2 P_9;\n' + '  P_9 = (uv - (vec2(0.0, 1.0) * tmpvar_4));\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = (texture2D (sampler_main, P_8).xyz - texture2D (sampler_main, P_9).xyz);\n' + '  dy_1 = tmpvar_10;\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = dot (dx_2, vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_11.y = dot (dy_1, vec3(0.32, 0.49, 0.29));\n' + '   vec2 x_12;\n' + '  x_12 = ((uv - (tmpvar_11 * 8.0)) - (1.0 - _qa.zw));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = dot (dx_2, vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_13.y = dot (dy_1, vec3(0.32, 0.49, 0.29));\n' + '   vec2 x_14;\n' + '  x_14 = ((uv - (tmpvar_13 * 8.0)) - (1.0 - _qb.yz));\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15.x = dot (dx_2, vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_15.y = dot (dy_1, vec3(0.32, 0.49, 0.29));\n' + '   vec2 x_16;\n' + '  x_16 = ((uv - (tmpvar_15 * 8.0)) - (1.0 - _qc.xy));\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = dot (dx_2, vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_17.y = dot (dy_1, vec3(0.32, 0.49, 0.29));\n' + '   vec2 x_18;\n' + '  x_18 = ((uv - (tmpvar_17 * 8.0)) - (1.0 - tmpvar_3));\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20.w = 1.0;\n' + '  tmpvar_20.xyz = (mix (tmpvar_19.xyz, max (\n' + '    max ((vec3((1.0 - pow (\n' + '      sqrt(dot (x_12, x_12))\n' + '    , 0.2))) * vec3(2.0, 1.0, -1.0)), (vec3((1.0 - pow (\n' + '      sqrt(dot (x_14, x_14))\n' + '    , 0.2))) * vec3(2.0, -1.0, 1.0)))\n' + '  , \n' + '    max ((vec3((1.0 - pow (\n' + '      sqrt(dot (x_16, x_16))\n' + '    , 0.2))) * vec3(-1.0, 1.0, 2.0)), (vec3((1.0 - pow (\n' + '      sqrt(dot (x_18, x_18))\n' + '    , 0.2))) * vec3(1.0, -1.0, 2.0)))\n' + '  ), vec3(0.5, 0.5, 0.5)) * 1.25);\n' + '  vec4 ret4 = tmpvar_20;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0.5;\n' + 'x2 = 0.51;\n' + 'y2 = 1;\n' + 'y1 = 0.7;\n' + 'x3 = 0.8;\n' + 'y3 = 0.5;\n' + 'x4 = 0.2;\n' + 'y4 = 0.5;\n' + 'ax1 = 0;\n' + 'ay1 = 0;\n' + 'ax2 = 0;\n' + 'ay2 = 0;\n' + 'ax3 = 0;\n' + 'ay3 = 0;\n' + 'vx1 = 0.000;\n' + 'vx2 = 0.000;'),
	'frame_eqs_str' : ('sx=1+.01*(8*bass%8)*equal(time%(int(24-2*bass)),0);\n' + 'sy=1+.01*(8*mid%8) *equal(time%(12+int(24-2*bass)),0);\n' + 'zoom = 0.99;\n' + 'wave_a = 0;\n' + 'r = 0.12+ max(bass_att,treb_att)*0.004;\n' + 'bounce = below(y1,r);\n' + 'y1 = y1+vy1;\n' + 'vy1 = if(bounce, abs(vy1)*0.94 + (r-y1)*0.1, vy1-0.00006*60/fps);\n' + 'bounce = below(x1,r);\n' + 'x1 = x1+vx1;\n' + 'vx1 = if(bounce, abs(vx1)*0.94 + (r-x1)*0.1, vx1);\n' + 'bounce = above(x1,1-r);\n' + 'vx1 = if(bounce, - abs(vx1)*0.94 + (1-r-x1)*0.04, vx1);\n' + 'bounce = below(y2,r);\n' + 'y2 = y2 + vy2;\n' + 'vy2 = if(bounce,abs(vy2)*0.94+(r-y2)*.1, vy2-0.00006*60/fps);\n' + 'bounce = below(x2,r);\n' + 'x2 = x2+ vx2;\n' + 'vx2 = if(bounce, abs(vx2)*0.94 + (r-x2)*0.1, vx2);\n' + 'bounce = above(x2,1-r);\n' + 'vx2 = if(bounce, - abs(vx2)*0.94 + (1-r-x2)*0.1, vx2);\n' + 'bounce = below(y3,r);\n' + 'y3 = y3 + vy3;\n' + 'vy3 = if(bounce,abs(vy3)*0.94+(r-y3)*.1, vy3-0.00006*60/fps);\n' + 'bounce = below(x3,r);\n' + 'x3 = x3+ vx3;\n' + 'vx3 = if(bounce, abs(vx3)*0.94 + (r-x3)*0.1, vx3);\n' + 'bounce = above(x3,1-r);\n' + 'vx3 = if(bounce, - abs(vx3)*0.94 + (1-r-x3)*0.1, vx3);\n' + 'bounce = below(y4,r);\n' + 'y4 = y4 + vy4;\n' + 'vy4 = if(bounce,abs(vy4)*0.94+(r-y4)*.1, vy4-0.00006*60/fps);\n' + 'bounce = below(x4,r);\n' + 'x4 = x4+ vx4;\n' + 'vx4 = if(bounce, abs(vx4)*0.94 + (r-x4)*0.1, vx4);\n' + 'bounce = above(x4,1-r);\n' + 'vx4 = if(bounce, - abs(vx4)*0.94 + (1-r-x4)*0.1, vx4);\n' + 'bounce = below( sqrt( sqr(x1+vx1-x2-vx2) + sqr(y1+vy1-y2-vy2)), 2*r);\n' + 'ref_ang = atan2(x2-x1,y2-y1)+asin(1);\n' + 'v1 = sqrt(vx1*vx1+vy1*vy1);\n' + 'v2 = sqrt(vx2*vx2+vy2*vy2);\n' + 'w1 = atan2(vx1,vy1);\n' + 'w2 = atan2(vx2,vy2);\n' + 'vx1 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx1);\n' + 'vy1 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy1);\n' + 'vx2 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx2);\n' + 'vy2 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy2);\n' + 'bounce = below( sqrt( sqr(x1+vx1-x3-vx3) + sqr(y1+vy1-y3-vy3)), 2*r);\n' + 'ref_ang = atan2(x3-x1,y3-y1)+asin(1);\n' + 'v1 = sqrt(vx1*vx1+vy1*vy1);\n' + 'v2 = sqrt(vx3*vx3+vy3*vy3);\n' + 'w1 = atan2(vx1,vy1);\n' + 'w2 = atan2(vx3,vy3);\n' + 'vx1 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx1);\n' + 'vy1 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy1);\n' + 'vx3 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx3);\n' + 'vy3 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy3);\n' + 'bounce = below( sqrt( sqr(x2+vx2-x3-vx3) + sqr(y2+vy2-y3-vy3)), 2*r);\n' + 'ref_ang = atan2(x3-x2,y3-y2)+asin(1);\n' + 'v1 = sqrt(vx2*vx2+vy2*vy2);\n' + 'v2 = sqrt(vx3*vx3+vy3*vy3);\n' + 'w1 = atan2(vx2,vy2);\n' + 'w2 = atan2(vx3,vy3);\n' + 'vx2 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx2);\n' + 'vy2 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy2);\n' + 'vx3 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx3);\n' + 'vy3 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy3);\n' + 'bounce = below( sqrt( sqr(x1+vx1-x4-vx4) + sqr(y1+vy1-y4-vy4)), 2*r);\n' + 'ref_ang = atan2(x4-x1,y4-y1)+asin(1);\n' + 'v1 = sqrt(vx1*vx1+vy1*vy1);\n' + 'v2 = sqrt(vx4*vx4+vy4*vy4);\n' + 'w1 = atan2(vx1,vy1);\n' + 'w2 = atan2(vx4,vy4);\n' + 'vx1 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx1);\n' + 'vy1 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy1);\n' + 'vx4 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx4);\n' + 'vy4 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy4);\n' + 'bounce = below( sqrt( sqr(x2+vx2-x4-vx4) + sqr(y2+vy2-y4-vy4)), 2*r);\n' + 'ref_ang = atan2(x4-x2,y4-y2)+asin(1);\n' + 'v1 = sqrt(vx2*vx2+vy2*vy2);\n' + 'v2 = sqrt(vx4*vx4+vy4*vy4);\n' + 'w1 = atan2(vx2,vy2);\n' + 'w2 = atan2(vx4,vy4);\n' + 'vx2 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx2);\n' + 'vy2 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy2);\n' + 'vx4 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx4);\n' + 'vy4 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy4);\n' + 'bounce = below( sqrt( sqr(x3+vx3-x4-vx4) + sqr(y3+vy3-y4-vy4)), 2*r);\n' + 'ref_ang = atan2(x4-x3,y4-y3)+asin(1);\n' + 'v1 = sqrt(vx3*vx3+vy3*vy3);\n' + 'v2 = sqrt(vx4*vx4+vy4*vy4);\n' + 'w1 = atan2(vx3,vy3);\n' + 'w2 = atan2(vx4,vy4);\n' + 'vx3 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx3);\n' + 'vy3 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy3);\n' + 'vx4 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx4);\n' + 'vy4 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy4);\n' + 'q1 = aspectx;\n' + 'q2 = aspecty;\n' + 'q3 = x1;\n' + 'q4 = y1;\n' + 'q5 = r;\n' + 'q6 = x2;\n' + 'q7 = y2;\n' + 'q8 = r;\n' + 'q9 = x3;\n' + 'q10 = y3;\n' + 'q11 = r;\n' + 'q12 = x4;\n' + 'q13 = y4;\n' + 'q14 = r;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.418,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.08925,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.007,
		ob_size : 0.5,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 0.626,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.24,
		wave_y : 0.44,
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
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 2.0,
		wave_mystery : -0.66,
		decay : 0.995,
		wave_a : 1.413,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 2.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
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
m.q15 = 0;
m.q16 = 0;
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
m.y2 = 0.9;
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
m.zoom = 1;
m.warp = 0;
m.wave_a = 0;
m.r = (0.04+(Math.max(m.bass_att, m.treb_att)*0.004));
m.bounce = below(m.y1, m.r);
m.y1 = (m.y1+m.vy1);
m.vy1 = ifcond(m.bounce, ((Math.abs(m.vy1)*0.94)+((m.r-m.y1)*0.1)), (m.vy1-div((0.0003*60),m.fps)));
m.bounce = below(m.x1, m.r);
m.x1 = (m.x1+m.vx1);
m.vx1 = ifcond(m.bounce, ((Math.abs(m.vx1)*0.94)+((m.r-m.x1)*0.1)), m.vx1);
m.bounce = above(m.x1, (1-m.r));
m.vx1 = ifcond(m.bounce, ((-Math.abs(m.vx1)*0.94)+(((1-m.r)-m.x1)*0.04)), m.vx1);
m.bounce = below(m.y2, m.r);
m.y2 = (m.y2+m.vy2);
m.vy2 = ifcond(m.bounce, ((Math.abs(m.vy2)*0.94)+((m.r-m.y2)*0.1)), (m.vy2-div((0.0003*60),m.fps)));
m.bounce = below(m.x2, m.r);
m.x2 = (m.x2+m.vx2);
m.vx2 = ifcond(m.bounce, ((Math.abs(m.vx2)*0.94)+((m.r-m.x2)*0.1)), m.vx2);
m.bounce = above(m.x2, (1-m.r));
m.vx2 = ifcond(m.bounce, ((-Math.abs(m.vx2)*0.94)+(((1-m.r)-m.x2)*0.1)), m.vx2);
m.bounce = below(m.y3, m.r);
m.y3 = (m.y3+m.vy3);
m.vy3 = ifcond(m.bounce, ((Math.abs(m.vy3)*0.94)+((m.r-m.y3)*0.1)), (m.vy3-div((0.0003*60),m.fps)));
m.bounce = below(m.x3, m.r);
m.x3 = (m.x3+m.vx3);
m.vx3 = ifcond(m.bounce, ((Math.abs(m.vx3)*0.94)+((m.r-m.x3)*0.1)), m.vx3);
m.bounce = above(m.x3, (1-m.r));
m.vx3 = ifcond(m.bounce, ((-Math.abs(m.vx3)*0.94)+(((1-m.r)-m.x3)*0.1)), m.vx3);
m.bounce = below(m.y4, m.r);
m.y4 = (m.y4+m.vy4);
m.vy4 = ifcond(m.bounce, ((Math.abs(m.vy4)*0.94)+((m.r-m.y4)*0.1)), (m.vy4-div((0.0003*60),m.fps)));
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
m.q5 = (m.r*2);
m.q6 = m.x2;
m.q7 = m.y2;
m.q8 = (m.r*2);
m.q9 = m.x3;
m.q10 = m.y3;
m.q11 = (m.r*2);
m.q12 = m.x4;
m.q13 = m.y4;
m.q14 = (m.r*2);
m.q15 = (0.5+div((m.q12-0.5),m.aspecty));
m.q16 = (0.5+div((m.q13-0.5),m.aspectx));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 1.0,
			scaling : 2.0231,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.res = 0;
m.d = 0;
m.diff = 0;
m.m = 0;
m.tt1 = 0;
m.tt2 = 0;
m.vol = 0;
m.tt3 = 0;
m.beat = 0;
m.monitor = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = ['d','tt1','tt2','tt3'];
			return m;
		},
		'frame_eqs' : function(m) {
m.vol = (((m.bass*8)+(m.mid*5))+(m.treb*3));
m.m = ((m.m*0.97)+(m.vol*0.08));
m.monitor = m.vol;
m.beat = ((above(m.vol, m.res)*above(m.vol, m.m))*above(m.vol, 16));
m.diff = (((1-m.beat)*m.diff)+(m.beat*(m.vol-m.res)));
m.res = ((m.beat*(m.vol+(m.m*0.04)))+((1-m.beat)*(m.res-div(((0.1+(m.diff*0.02))*60),m.fps))));
m.res = Math.max(0, m.res);
m.a = m.beat;
		return m;
	},
		'point_eqs' : function(m) {
m.tt3 = ((m.tt3*0.6)+(m.value1*1));
m.tt2 = ((m.tt2*0.7)+(m.tt3*0.2));
m.tt1 = ((m.tt1*0.8)+(m.tt2*0.1));
m.d = ((m.d*0.9)+(m.tt1*0.2));
m.y = (0.5+(((m.d*m.sample)*(1-m.sample))*2));
m.x = (-0.05+(m.sample*1.1));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('vol = bass*8 + mid*5 + treb*3;\n' + 'm = m*0.97 + vol*0.08;\n' + 'monitor = vol;\n' + 'beat = above(vol,res)*above(vol,m)*above(vol,16);\n' + 'diff = (1-beat)*diff + beat*(vol-res);\n' + 'res = beat*(vol + m*0.04) + (1-beat)*(res -  (0.1+diff*0.02)*60/fps);\n' + 'res = max(0,res);\n' + 'a = beat;'),
		'point_eqs_str' : ('tt3 = tt3*0.6 + (value1)*1;\n' + 'tt2 = tt2*0.7 + tt3*0.2;\n' + 'tt1 = tt1*0.8 + tt2*0.1;\n' + 'd = d*0.9 + tt1*0.2;\n' + 'y = 0.5 + d*sample*(1-sample)*2;\n' + 'x =  -0.05 + sample*1.1;'),

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
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.t8 = 0;
m.q9 = 0;
m.ref_w = 0;
m.q20 = 0;
m.q10 = 0;
m.q15 = 0;
m.v = 0;
m.q16 = 0;
m.w = 0;
m.x = 0;
m.y = 0;
m.q19 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.chance = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = ifcond(m.q9, m.q15, m.x);
m.y = ifcond(m.q9, m.q16, m.y);
m.v = ifcond(m.q9, m.q19, m.v);
m.w = ifcond(m.q9, m.q20, m.w);
m.ref_w = ifcond(m.q9, m.q10, m.ref_w);
m.t1 = m.x;
m.t2 = m.y;
m.t3 = m.v;
m.t4 = m.w;
m.t5 = m.ref_w;
m.t8 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.x = (m.t1+(((m.sample*Math.sin(m.t4))*m.t3)*20));
m.y = (m.t2+(((m.sample*Math.cos(m.t4))*m.t3)*20));
m.x = (0.5+div((m.x-0.5),m.q1));
m.y = (0.5+div((m.y-0.5),m.q2));
		return m;
	},
		'init_eqs_str' : ('chance = 0;'),
		'frame_eqs_str' : ('x = if(q9,q15,x);\n' + 'y = if(q9,q16,y);\n' + 'v = if(q9,q19,v);\n' + 'w = if(q9,q20,w);\n' + 'ref_w = if(q9, q10, ref_w);\n' + 't1 = x;\n' + 't2 = y;\n' + 't3 = v;\n' + 't4 = w;\n' + 't5 = ref_w;\n' + 't8 = 1;'),
		'point_eqs_str' : ('x = t1 + sample*sin(t4)*t3*20;\n' + 'y = t2 + sample*cos(t4)*t3*20;\n' + 'x = 0.5 + (x-0.5)/q1;\n' + 'y = 0.5 + (y-0.5)/q2;'),

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
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.t8 = 0;
m.q9 = 0;
m.ref_w = 0;
m.q20 = 0;
m.q10 = 0;
m.q15 = 0;
m.v = 0;
m.q16 = 0;
m.w = 0;
m.x = 0;
m.y = 0;
m.q19 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.chance = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = ifcond(m.q9, m.q15, m.x);
m.y = ifcond(m.q9, m.q16, m.y);
m.v = ifcond(m.q9, m.q19, m.v);
m.w = ifcond(m.q9, m.q20, m.w);
m.ref_w = ifcond(m.q9, m.q10, m.ref_w);
m.t1 = m.x;
m.t2 = m.y;
m.t3 = m.v;
m.t4 = m.w;
m.t5 = m.ref_w;
m.t8 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.x = (m.t1+((((m.sample*Math.sin(m.t5))*m.t3)*20)*Math.cos((m.t4-m.t5))));
m.y = (m.t2+((((m.sample*Math.cos(m.t5))*m.t3)*20)*Math.cos((m.t4-m.t5))));
m.x = (0.5+div((m.x-0.5),m.q1));
m.y = (0.5+div((m.y-0.5),m.q2));
		return m;
	},
		'init_eqs_str' : ('chance = 0;'),
		'frame_eqs_str' : ('x = if(q9,q15,x);\n' + 'y = if(q9,q16,y);\n' + 'v = if(q9,q19,v);\n' + 'w = if(q9,q20,w);\n' + 'ref_w = if(q9, q10, ref_w);\n' + 't1 = x;\n' + 't2 = y;\n' + 't3 = v;\n' + 't4 = w;\n' + 't5 = ref_w;\n' + 't8 = 1;'),
		'point_eqs_str' : ('x = t1 + sample*sin(t5)*t3*20*cos(t4-t5);\n' + 'y = t2 + sample*cos(t5)*t3*20*cos(t4-t5);\n' + 'x = 0.5 + (x-0.5)/q1;\n' + 'y = 0.5 + (y-0.5)/q2;'),

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
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.t8 = 0;
m.q9 = 0;
m.ref_w = 0;
m.q20 = 0;
m.q10 = 0;
m.q15 = 0;
m.v = 0;
m.q16 = 0;
m.w = 0;
m.x = 0;
m.y = 0;
m.q19 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.chance = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = ifcond(m.q9, m.q15, m.x);
m.y = ifcond(m.q9, m.q16, m.y);
m.v = ifcond(m.q9, m.q19, m.v);
m.w = ifcond(m.q9, m.q20, m.w);
m.ref_w = ifcond(m.q9, (m.q10+Math.asin(1)), m.ref_w);
m.t1 = m.x;
m.t2 = m.y;
m.t3 = m.v;
m.t4 = m.w;
m.t5 = m.ref_w;
m.t8 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.x = (m.t1+((((m.sample*Math.sin(m.t5))*m.t3)*20)*Math.cos((m.t4-m.t5))));
m.y = (m.t2+((((m.sample*Math.cos(m.t5))*m.t3)*20)*Math.cos((m.t4-m.t5))));
m.x = (0.5+div((m.x-0.5),m.q1));
m.y = (0.5+div((m.y-0.5),m.q2));
		return m;
	},
		'init_eqs_str' : ('chance = 0;'),
		'frame_eqs_str' : ('x = if(q9,q15,x);\n' + 'y = if(q9,q16,y);\n' + 'v = if(q9,q19,v);\n' + 'w = if(q9,q20,w);\n' + 'ref_w = if(q9, q10 + asin(1), ref_w);\n' + 't1 = x;\n' + 't2 = y;\n' + 't3 = v;\n' + 't4 = w;\n' + 't5 = ref_w;\n' + 't8 = 1;'),
		'point_eqs_str' : ('x = t1 + sample*sin(t5)*t3*20*cos(t4-t5);\n' + 'y = t2 + sample*cos(t5)*t3*20*cos(t4-t5);\n' + 'x = 0.5 + (x-0.5)/q1;\n' + 'y = 0.5 + (y-0.5)/q2;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 6.03186,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.6839,
			additive : 1.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.0277,
			x : 0.5,
			y : 0.5,
			ang : 6.03186,
			sides : 48.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q3;
m.y = m.q4;
m.rad = m.q5;
m.x = (0.5+div((m.x-0.5),m.q2));
m.y = (0.5+div((m.y-0.5),m.q1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = q3;\n' + 'y = q4;\n' + 'rad = q5;\n' + 'x = 0.5 + (x-0.5)/q2;\n' + 'y = 0.5 + (y-0.5)/q1;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 6.03186,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.6839,
			additive : 1.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.0277,
			x : 0.5,
			y : 0.5,
			ang : 6.03186,
			sides : 48.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q6;
m.y = m.q7;
m.rad = m.q8;
m.x = (0.5+div((m.x-0.5),m.q2));
m.y = (0.5+div((m.y-0.5),m.q1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = q6;\n' + 'y = q7;\n' + 'rad = q8;\n' + 'x = 0.5 + (x-0.5)/q2;\n' + 'y = 0.5 + (y-0.5)/q1;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 6.03186,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.6839,
			additive : 1.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.0277,
			x : 0.5,
			y : 0.5,
			ang : 6.03186,
			sides : 48.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q9 = 0;
m.q10 = 0;
m.q11 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q9;
m.y = m.q10;
m.rad = m.q11;
m.x = (0.5+div((m.x-0.5),m.q2));
m.y = (0.5+div((m.y-0.5),m.q1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = q9;\n' + 'y = q10;\n' + 'rad = q11;\n' + 'x = 0.5 + (x-0.5)/q2;\n' + 'y = 0.5 + (y-0.5)/q1;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 6.03186,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.6839,
			additive : 1.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.0277,
			x : 0.5,
			y : 0.5,
			ang : 6.03186,
			sides : 48.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q12 = 0;
m.q13 = 0;
m.q14 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q12;
m.y = m.q13;
m.rad = m.q14;
m.x = (0.5+div((m.x-0.5),m.q2));
m.y = (0.5+div((m.y-0.5),m.q1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = q12;\n' + 'y = q13;\n' + 'rad = q14;\n' + 'x = 0.5 + (x-0.5)/q2;\n' + 'y = 0.5 + (y-0.5)/q1;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = tmpvar_7.x;\n' + '  tmpvar_13.y = tmpvar_12.x;\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (uv + ((tmpvar_13 * texsize.zw) * 4.0));\n' + '  tmpvar_14 = texture2D (sampler_fc_main, P_15);\n' + '  ret_1.x = tmpvar_14.x;\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.x = tmpvar_7.y;\n' + '  tmpvar_16.y = tmpvar_12.y;\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv + ((tmpvar_16 * texsize.zw) * 4.0));\n' + '  tmpvar_17 = texture2D (sampler_fc_main, P_18);\n' + '  ret_1.y = tmpvar_17.y;\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = tmpvar_7.z;\n' + '  tmpvar_19.y = tmpvar_12.z;\n' + '   vec4 tmpvar_20;\n' + '   vec2 P_21;\n' + '  P_21 = (uv + ((tmpvar_19 * texsize.zw) * 4.0));\n' + '  tmpvar_20 = texture2D (sampler_fc_main, P_21);\n' + '  ret_1.z = tmpvar_20.z;\n' + '  ret_1 = (ret_1 - ((ret_1.yzx + ret_1.zxy) - 0.001));\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 1.2)) + rand_frame.xy);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_noise_lq, tmpvar_22);\n' + '  ret_1 = (ret_1 + ((tmpvar_23.xyz - 0.6) * 0.04));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24.w = 1.0;\n' + '  tmpvar_24.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_24;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 2.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = _qd.z;\n' + '  tmpvar_13.y = (1.0 - _qd.w);\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = tmpvar_7.y;\n' + '  tmpvar_14.y = tmpvar_12.y;\n' + '   vec2 x_15;\n' + '  x_15 = ((uv - (tmpvar_14 * 4.0)) - tmpvar_13);\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.x = tmpvar_7.x;\n' + '  tmpvar_16.y = tmpvar_12.x;\n' + '   vec2 x_17;\n' + '  x_17 = ((uv - (tmpvar_16 * 4.0)) - tmpvar_13);\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18.x = tmpvar_7.z;\n' + '  tmpvar_18.y = tmpvar_12.z;\n' + '   vec2 x_19;\n' + '  x_19 = ((uv - (tmpvar_18 * 4.0)) - tmpvar_13);\n' + '   vec3 tmpvar_20;\n' + '  tmpvar_20.x = pow (sqrt(dot (x_17, x_17)), 0.2);\n' + '  tmpvar_20.y = pow (sqrt(dot (x_15, x_15)), 0.2);\n' + '  tmpvar_20.z = pow (sqrt(dot (x_19, x_19)), 0.2);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_main, uv);\n' + '  ret_1 = (((1.0 - tmpvar_20) * tmpvar_21.xyz) * 2.0);\n' + '   vec2 x_22;\n' + '  x_22 = (uv - tmpvar_13);\n' + '  ret_1 = (ret_1 + clamp ((1.0 - \n' + '    (sqrt(dot (x_22, x_22)) * 32.0)\n' + '  ), 0.0, 1.0));\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23.w = 1.0;\n' + '  tmpvar_23.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_23;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0.5;\n' + 'x2 = 0.51;\n' + 'y2 = 0.9;\n' + 'y1 = 0.7;\n' + 'x3 = 0.8;\n' + 'y3 = 0.5;\n' + 'x4 = 0.2;\n' + 'y4 = 0.5;\n' + 'ax1 = 0;\n' + 'ay1 = 0;\n' + 'ax2 = 0;\n' + 'ay2 = 0;\n' + 'ax3 = 0;\n' + 'ay3 = 0;\n' + 'vx1 = 0.000;\n' + 'vx2 = 0.000;'),
	'frame_eqs_str' : ('zoom = 1;\n' + 'warp = 0;\n' + 'wave_a = 0;\n' + 'r = 0.04+max(bass_att,treb_att)*0.004;\n' + 'bounce = below(y1,r);\n' + 'y1 = y1+vy1;\n' + 'vy1 = if(bounce, abs(vy1)*0.94 + (r-y1)*0.1, vy1-0.0003*60/fps);\n' + 'bounce = below(x1,r);\n' + 'x1 = x1+vx1;\n' + 'vx1 = if(bounce, abs(vx1)*0.94 + (r-x1)*0.1, vx1);\n' + 'bounce = above(x1,1-r);\n' + 'vx1 = if(bounce, - abs(vx1)*0.94 + (1-r-x1)*0.04, vx1);\n' + 'bounce = below(y2,r);\n' + 'y2 = y2 + vy2;\n' + 'vy2 = if(bounce,abs(vy2)*0.94+(r-y2)*.1, vy2-0.0003*60/fps);\n' + 'bounce = below(x2,r);\n' + 'x2 = x2+ vx2;\n' + 'vx2 = if(bounce, abs(vx2)*0.94 + (r-x2)*0.1, vx2);\n' + 'bounce = above(x2,1-r);\n' + 'vx2 = if(bounce, - abs(vx2)*0.94 + (1-r-x2)*0.1, vx2);\n' + 'bounce = below(y3,r);\n' + 'y3 = y3 + vy3;\n' + 'vy3 = if(bounce,abs(vy3)*0.94+(r-y3)*.1, vy3-0.0003*60/fps);\n' + 'bounce = below(x3,r);\n' + 'x3 = x3+ vx3;\n' + 'vx3 = if(bounce, abs(vx3)*0.94 + (r-x3)*0.1, vx3);\n' + 'bounce = above(x3,1-r);\n' + 'vx3 = if(bounce, - abs(vx3)*0.94 + (1-r-x3)*0.1, vx3);\n' + 'bounce = below(y4,r);\n' + 'y4 = y4 + vy4;\n' + 'vy4 = if(bounce,abs(vy4)*0.94+(r-y4)*.1, vy4-0.0003*60/fps);\n' + 'bounce = below(x4,r);\n' + 'x4 = x4+ vx4;\n' + 'vx4 = if(bounce, abs(vx4)*0.94 + (r-x4)*0.1, vx4);\n' + 'bounce = above(x4,1-r);\n' + 'vx4 = if(bounce, - abs(vx4)*0.94 + (1-r-x4)*0.1, vx4);\n' + 'bounce = below( sqrt( sqr(x1+vx1-x2-vx2) + sqr(y1+vy1-y2-vy2)), 2*r);\n' + 'ref_ang = atan2(x2-x1,y2-y1)+asin(1);\n' + 'v1 = sqrt(vx1*vx1+vy1*vy1);\n' + 'v2 = sqrt(vx2*vx2+vy2*vy2);\n' + 'w1 = atan2(vx1,vy1);\n' + 'w2 = atan2(vx2,vy2);\n' + 'vx1 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx1);\n' + 'vy1 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy1);\n' + 'vx2 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx2);\n' + 'vy2 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy2);\n' + 'bounce = below( sqrt( sqr(x1+vx1-x3-vx3) + sqr(y1+vy1-y3-vy3)), 2*r);\n' + 'ref_ang = atan2(x3-x1,y3-y1)+asin(1);\n' + 'v1 = sqrt(vx1*vx1+vy1*vy1);\n' + 'v2 = sqrt(vx3*vx3+vy3*vy3);\n' + 'w1 = atan2(vx1,vy1);\n' + 'w2 = atan2(vx3,vy3);\n' + 'vx1 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx1);\n' + 'vy1 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy1);\n' + 'vx3 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx3);\n' + 'vy3 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy3);\n' + 'bounce = below( sqrt( sqr(x2+vx2-x3-vx3) + sqr(y2+vy2-y3-vy3)), 2*r);\n' + 'ref_ang = atan2(x3-x2,y3-y2)+asin(1);\n' + 'v1 = sqrt(vx2*vx2+vy2*vy2);\n' + 'v2 = sqrt(vx3*vx3+vy3*vy3);\n' + 'w1 = atan2(vx2,vy2);\n' + 'w2 = atan2(vx3,vy3);\n' + 'vx2 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx2);\n' + 'vy2 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy2);\n' + 'vx3 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx3);\n' + 'vy3 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy3);\n' + 'bounce = below( sqrt( sqr(x1+vx1-x4-vx4) + sqr(y1+vy1-y4-vy4)), 2*r);\n' + 'ref_ang = atan2(x4-x1,y4-y1)+asin(1);\n' + 'v1 = sqrt(vx1*vx1+vy1*vy1);\n' + 'v2 = sqrt(vx4*vx4+vy4*vy4);\n' + 'w1 = atan2(vx1,vy1);\n' + 'w2 = atan2(vx4,vy4);\n' + 'vx1 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx1);\n' + 'vy1 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy1);\n' + 'vx4 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx4);\n' + 'vy4 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy4);\n' + 'bounce = below( sqrt( sqr(x2+vx2-x4-vx4) + sqr(y2+vy2-y4-vy4)), 2*r);\n' + 'ref_ang = atan2(x4-x2,y4-y2)+asin(1);\n' + 'v1 = sqrt(vx2*vx2+vy2*vy2);\n' + 'v2 = sqrt(vx4*vx4+vy4*vy4);\n' + 'w1 = atan2(vx2,vy2);\n' + 'w2 = atan2(vx4,vy4);\n' + 'vx2 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx2);\n' + 'vy2 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy2);\n' + 'vx4 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx4);\n' + 'vy4 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy4);\n' + 'bounce = below( sqrt( sqr(x3+vx3-x4-vx4) + sqr(y3+vy3-y4-vy4)), 2*r);\n' + 'ref_ang = atan2(x4-x3,y4-y3)+asin(1);\n' + 'v1 = sqrt(vx3*vx3+vy3*vy3);\n' + 'v2 = sqrt(vx4*vx4+vy4*vy4);\n' + 'w1 = atan2(vx3,vy3);\n' + 'w2 = atan2(vx4,vy4);\n' + 'vx3 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx3);\n' + 'vy3 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy3);\n' + 'vx4 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx4);\n' + 'vy4 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy4);\n' + 'q1 = aspectx;\n' + 'q2 = aspecty;\n' + 'q3 = x1;\n' + ' q4 = y1;\n' + ' q5 = r*2;\n' + 'q6 = x2;\n' + ' q7 = y2;\n' + ' q8 = r*2;\n' + 'q9 = x3;\n' + ' q10 = y3;\n' + ' q11 = r*2;\n' + 'q12 = x4;\n' + ' q13 = y4;\n' + ' q14 = r*2;\n' + 'q15 = 0.5 + (q12-0.5)/aspecty;\n' + 'q16 = 0.5 + (q13-0.5)/aspectx;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 5.472,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 3.177,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 1.8566,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.01,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 1.0,
		mv_b : 0.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 2.289,
		wave_dots : 0.0,
		mv_g : 1.0,
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
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.4,
		decay : 0.5,
		wave_a : 0.401,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.b = 0;
m.vvb = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.vb = 0;
m.m = 0;
m.vvm = 0;
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
m.t = 0;
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
m.q18 = 0;
m.q29 = 0;
m.q19 = 0;
m.vt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.vb = ((m.vb*0.95)+(((1-m.vb)*pow(((m.bass_att*m.treb_att)*m.mid_att), 2))*0.02));
m.vvb = ((m.vvb*0.95)+(((1-m.vvb)*m.vb)*0.01));
m.vm = ((m.vm*0.95)+(((1-m.vm)*pow(m.mid_att, 2))*0.02));
m.vvm = ((m.vvm*0.95)+(((1-m.vvm)*m.vm)*0.01));
m.vt = ((m.vt*0.95)+(((1-m.vt)*pow(m.treb_att, 2))*0.02));
m.vvt = ((m.vvt*0.95)+(((1-m.vvt)*m.vt)*0.01));
m.vvb = Math.min(1, Math.max(0, m.vvb));
m.vvm = Math.min(1, Math.max(0, m.vvm));
m.vvt = Math.min(1, Math.max(0, m.vvt));
m.q1 = (m.vvb*10);
m.q2 = (m.vvm*10);
m.q3 = (m.vvt*10);
m.v = 2;
m.bb = (m.bb-(m.vvb*m.v));
m.mm = (m.mm-(m.vvm*m.v));
m.tt = (m.tt-(m.vvt*m.v));
m.q4 = -m.bb;
m.q5 = -m.mm;
m.q6 = -m.tt;
m.q4 = (((m.q1+m.q2)+m.q3)*5);
m.q5 = (((m.q1+m.q2)+m.q3)*5);
m.q6 = (((m.q1+m.q2)+m.q3)*5);
m.q7 = (((m.q1+m.q2)+m.q3)*5);
m.q8 = (((m.q1+m.q2)+m.q3)*5);
m.q9 = (((m.q1+m.q2)+m.q3)*5);
m.q10 = (((m.q1+m.q2)+m.q3)*5);
m.q11 = (((m.q1+m.q2)+m.q3)*5);
m.q12 = (((m.q1+m.q2)+m.q3)*5);
m.q13 = (((m.q1+m.q2)+m.q3)*5);
m.q14 = (((m.q1+m.q2)+m.q3)*5);
m.q15 = (((m.q1+m.q2)+m.q3)*5);
m.q16 = (((m.q1+m.q2)+m.q3)*5);
m.q17 = (((m.q1+m.q2)+m.q3)*5);
m.q18 = (((m.q1+m.q2)+m.q3)*5);
m.q19 = (((m.q1+m.q2)+m.q3)*5);
m.q20 = (((m.q1+m.q2)+m.q3)*5);
m.q21 = (((m.q1+m.q2)+m.q3)*5);
m.q22 = (((m.q1+m.q2)+m.q3)*5);
m.q23 = (((m.q1+m.q2)+m.q3)*5);
m.q24 = (((m.q1+m.q2)+m.q3)*5);
m.q25 = (((m.q1+m.q2)+m.q3)*5);
m.q26 = (((m.q1+m.q2)+m.q3)*5);
m.q27 = (((m.q1+m.q2)+m.q3)*5);
m.q28 = (((m.q1+m.q2)+m.q3)*5);
m.q29 = (((m.q1+m.q2)+m.q3)*5);
m.q30 = (((m.q1+m.q2)+m.q3)*5);
m.q31 = (((m.q1+m.q2)+m.q3)*5);
m.q32 = (((m.q1+m.q2)+m.q3)*5);
m.wave_a = 0;
m.b = (m.b+((m.bass*m.bass)*0.5));
m.m = (m.m+((m.mid*m.mid)*0.5));
m.t = (m.t+((m.treb*m.treb)*0.5));
m.q3 = (m.b*0.012);
m.q4 = (m.m*0.012);
m.q5 = (m.t*0.012);
m.q20 = ((m.bass+m.treb)+m.mid);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.3,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.2,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.flip = 0;
m.n = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.tm = 0;
m.xq = 0;
m.ang = 0;
m.ys = 0;
m.phs = 0;
m.xs = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.2);
m.tm = ((m.time*0.4)+m.phs);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = ((m.flip*0.1)+(((Math.sin(m.tm)*0.5)+0.5)*0.2));
m.zp = 0;
m.ang = ((Math.sin((m.tm*2))*0.5)+0.5);
m.xq = m.xp;
m.yq = ((m.yp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.zq = ((m.yp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.yq = m.yp;
m.zq = m.zp;
m.ang = (m.tm*8);
m.xp = ((m.xq*Math.sin(m.ang))+(m.yq*Math.cos(m.ang)));
m.yp = ((m.xq*Math.cos(m.ang))-(m.yq*Math.sin(m.ang)));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin(((m.tm*2)-0.5))*1.5));
m.xq = m.xp;
m.yq = ((m.yp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.zq = ((m.yp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = (-1.0+Math.cos(((m.tm*3)+0.5)));
m.xp = ((m.xq*Math.sin(m.ang))+(m.yq*Math.cos(m.ang)));
m.yp = ((m.xq*Math.cos(m.ang))-(m.yq*Math.sin(m.ang)));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos((m.tm*2))*0.75)-1.05);
m.xq = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yq = m.yp;
m.zq = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = ((Math.cos(m.tm)*0.5)-0.5);
m.xp = m.xq;
m.yp = ((m.yq*Math.cos(m.ang))-(m.zq*Math.sin(m.ang)));
m.zp = ((m.yq*Math.sin(m.ang))+(m.zq*Math.cos(m.ang)));
m.zp = (m.zp+2);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.x = (0.5+div((m.x-0.5),m.q1));
m.y = ((0.5+div((m.y-0.5),m.q2))+0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=time*0.4 + phs;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=flip*0.1 + (sin(tm)*0.5 + 0.5)*0.2;\n' + 'zp=0;\n' + 'ang=sin(tm*2)*0.5 +0.5;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=tm*8;\n' + 'xp=xq*sin(ang) + yq*cos(ang);\n' + 'yp=xq*cos(ang) - yq*sin(ang);\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*1.5;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'ang=-1.0 + cos(tm*3 + 0.5);\n' + 'xp=xq*sin(ang) + yq*cos(ang);\n' + 'yp=xq*cos(ang) - yq*sin(ang);\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2)*0.75 - 1.05;\n' + 'xq=xp*sin(ang) + zp*cos(ang);\n' + 'yq=yp;\n' + 'zq=xp*cos(ang) - zp*sin(ang);\n' + 'ang=cos(tm)*0.5 - 0.5;\n' + 'xp=xq;\n' + 'yp=yq*cos(ang) - zq*sin(ang);\n' + 'zp=yq*sin(ang) + zq*cos(ang);\n' + 'zp=zp+2;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'x = 0.5 + (x-0.5)/q1;\n' + 'y = 0.5 + (y-0.5)/q2 + 0.1;'),

		},
		{
		'baseVals' : {
			a : 0.3,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.2,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.flip = 0;
m.n = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.tm = 0;
m.xq = 0;
m.ang = 0;
m.ys = 0;
m.phs = 0;
m.xs = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.2);
m.tm = ((m.time*0.4)+m.phs);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = ((m.flip*0.1)+(((Math.sin(m.tm)*0.5)+0.5)*0.2));
m.yp = -m.yp;
m.zp = 0;
m.ang = ((Math.sin((m.tm*2))*0.5)+0.5);
m.xq = m.xp;
m.yq = ((m.yp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.zq = ((m.yp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.yq = m.yp;
m.zq = m.zp;
m.ang = (m.tm*8);
m.xp = ((m.xq*Math.sin(m.ang))+(m.yq*Math.cos(m.ang)));
m.yp = ((m.xq*Math.cos(m.ang))-(m.yq*Math.sin(m.ang)));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin(((m.tm*2)-0.5))*1.5));
m.xq = m.xp;
m.yq = ((m.yp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.zq = ((m.yp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = (-1.0+Math.cos(((m.tm*3)+0.5)));
m.xp = ((m.xq*Math.sin(m.ang))+(m.yq*Math.cos(m.ang)));
m.yp = ((m.xq*Math.cos(m.ang))-(m.yq*Math.sin(m.ang)));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos((m.tm*2))*0.75)-1.05);
m.xq = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yq = m.yp;
m.zq = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = ((Math.cos(m.tm)*0.5)-0.5);
m.xp = m.xq;
m.yp = ((m.yq*Math.cos(m.ang))-(m.zq*Math.sin(m.ang)));
m.zp = ((m.yq*Math.sin(m.ang))+(m.zq*Math.cos(m.ang)));
m.zp = (m.zp+2);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.x = (0.5+div((m.x-0.5),m.q1));
m.y = ((0.5+div((m.y-0.5),m.q2))+0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=time*0.4 + phs;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=flip*0.1 + (sin(tm)*0.5 + 0.5)*0.2;\n' + 'yp=-yp;\n' + 'zp=0;\n' + 'ang=sin(tm*2)*0.5 +0.5;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=tm*8;\n' + 'xp=xq*sin(ang) + yq*cos(ang);\n' + 'yp=xq*cos(ang) - yq*sin(ang);\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*1.5;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'ang=-1.0 + cos(tm*3 + 0.5);\n' + 'xp=xq*sin(ang) + yq*cos(ang);\n' + 'yp=xq*cos(ang) - yq*sin(ang);\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2)*0.75 - 1.05;\n' + 'xq=xp*sin(ang) + zp*cos(ang);\n' + 'yq=yp;\n' + 'zq=xp*cos(ang) - zp*sin(ang);\n' + 'ang=cos(tm)*0.5 - 0.5;\n' + 'xp=xq;\n' + 'yp=yq*cos(ang) - zq*sin(ang);\n' + 'zp=yq*sin(ang) + zq*cos(ang);\n' + 'zp=zp+2;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'x = 0.5 + (x-0.5)/q1;\n' + 'y = 0.5 + (y-0.5)/q2 + 0.1;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 2.44415,
			samples : 61.0,
			additive : 0.0,
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
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
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
m.x = ((((((pow(m.sample, 5)*m.t1)+(((5*pow(m.sample, 4))*(1-m.sample))*m.t1))+(((10*pow(m.sample, 3))*sqr((1-m.sample)))*m.t2))+(((10*sqr(m.sample))*pow((1-m.sample), 3))*m.t3))+(((5*pow((1-m.sample), 4))*m.sample)*m.t4))+(pow((1-m.sample), 5)*m.t4));
m.y = ((((((pow(m.sample, 5)*m.t5)+(((5*pow(m.sample, 4))*(1-m.sample))*m.t5))+(((10*pow(m.sample, 3))*sqr((1-m.sample)))*m.t6))+(((10*sqr(m.sample))*pow((1-m.sample), 3))*m.t7))+(((5*pow((1-m.sample), 4))*m.sample)*m.t8))+(pow((1-m.sample), 5)*m.t8));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't7 = q7;\n' + 't8 = q8;'),
		'point_eqs_str' : ('x = pow(sample,5)*t1 + 5*pow(sample,4)*(1-sample)*t1 + 10*pow(sample,3)*sqr(1-sample)*t2+ 10*sqr(sample)*pow(1-sample,3)*t3 + 5*pow(1-sample,4)*sample*t4 + pow(1-sample,5)*t4;\n' + 'y = pow(sample,5)*t5 + 5*pow(sample,4)*(1-sample)*t5 + 10*pow(sample,3)*sqr(1-sample)*t6+ 10*sqr(sample)*pow(1-sample,3)*t7 + 5*pow(1-sample,4)*sample*t8 + pow(1-sample,5)*t8;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 2.44415,
			samples : 61.0,
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
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t2 = 0;
			m.rkeys = [];
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
m.x = ((((((pow(m.sample, 5)*m.t1)+(((5*pow(m.sample, 4))*(1-m.sample))*m.t1))+(((10*pow(m.sample, 3))*sqr((1-m.sample)))*m.t2))+(((10*sqr(m.sample))*pow((1-m.sample), 3))*m.t3))+(((5*pow((1-m.sample), 4))*m.sample)*m.t4))+(pow((1-m.sample), 5)*m.t4));
m.y = ((((((pow(m.sample, 5)*m.t5)+(((5*pow(m.sample, 4))*(1-m.sample))*m.t5))+(((10*pow(m.sample, 3))*sqr((1-m.sample)))*m.t6))+(((10*sqr(m.sample))*pow((1-m.sample), 3))*m.t7))+(((5*pow((1-m.sample), 4))*m.sample)*m.t8))+(pow((1-m.sample), 5)*m.t8));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;'),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't7 = q7;\n' + 't8 = q8;'),
		'point_eqs_str' : ('x = pow(sample,5)*t1 + 5*pow(sample,4)*(1-sample)*t1 + 10*pow(sample,3)*sqr(1-sample)*t2+ 10*sqr(sample)*pow(1-sample,3)*t3 + 5*pow(1-sample,4)*sample*t4 + pow(1-sample,5)*t4;\n' + 'y = pow(sample,5)*t5 + 5*pow(sample,4)*(1-sample)*t5 + 10*pow(sample,3)*sqr(1-sample)*t6+ 10*sqr(sample)*pow(1-sample,3)*t7 + 5*pow(1-sample,4)*sample*t8 + pow(1-sample,5)*t8;'),

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
			tex_zoom : 0.78748,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.06689,
			x : 0.5,
			y : 0.55,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 512.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.my_x = 0;
m.my_y = 0;
m.my_z = 0;
m.i = 0;
m.l = 0;
m.p = 0;
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
m.d = 1.4;
m.zoom = 0.7;
m.w1 = m.q3;
m.w2 = m.q4;
m.w3 = m.q5;
m.i = m.instance;
m.my_x = (div(mod(m.i,8),8)-0.5);
m.my_y = (div((mod(m.i,64)-mod(m.i,8)),64)-0.5);
m.my_z = (div((m.i-div((mod(m.i,64)-mod(m.i,8)),64)),512)-0.5);
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
m.rad = div(m.rad,m.d);
m.my_x = ((m.zoom*Math.sin(m.w))*m.p);
m.my_y = ((m.zoom*Math.cos(m.w))*m.p);
m.x = (0.5+m.my_x);
m.y = (0.5+m.my_y);
m.x = (0.5+div((m.x-0.5),m.q2));
m.y = (0.5+div((m.y-0.5),m.q1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('d = 1.4;\n' + 'zoom = 0.7;\n' + 'w1 = q3;\n' + 'w2 = q4;\n' + 'w3 = q5;\n' + 'i = instance;\n' + 'my_x = (i % 8)/8 - 0.5;\n' + 'my_y = (i % 64 - (i % 8))/64 - 0.5;\n' + 'my_z = (i - (i % 64 - (i % 8))/64)/512 - 0.5;\n' + 'x1 = cos(w1)*my_x + sin(w1)*my_y;\n' + 'y1 = -sin(w1)*my_x + cos(w1)*my_y;\n' + 'z1 = my_z;\n' + 'x2 = cos(w2)*x1 + sin(w2)*z1;\n' + 'z2 = -sin(w2)*x1 + cos(w2)*z1;\n' + 'y2 = y1;\n' + 'y3 = cos(w3)*y2 + sin(w3)*z2;\n' + 'z3 = -sin(w3)*y2 + cos(w3)*z2;\n' + 'x3 = x2;\n' + 'l = sqrt(x3*x3 + y3*y3);\n' + 'w = atan2(x3,y3);\n' + 'p = tan(asin(1) + atan2(d+z3,l));\n' + 'd = sqrt(x3*x3 + y3*y3 + (z3+d)*(z3+d));\n' + 'rad = rad/d;\n' + 'my_x = zoom*sin(w)*p;\n' + 'my_y = zoom*cos(w)*p;\n' + 'x = 0.5 + my_x;\n' + 'y = 0.5 + my_y;\n' + 'x = 0.5 + (x-0.5)/q2;\n' + 'y = 0.5 + (y-0.5)/q1;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.73458,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.75,
			r : 1.0,
			border_g : 1.0,
			rad : 0.5216,
			x : 0.52,
			y : 0.41,
			ang : 0.1885,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {

m.vx = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : ('vx = 0;'),
		'frame_eqs_str' : (''),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.73458,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.75,
			r : 1.0,
			border_g : 1.0,
			rad : 0.61162,
			x : 0.48,
			y : 0.41,
			ang : 5.96903,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {

m.vx = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : ('vx = 0;'),
		'frame_eqs_str' : (''),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.73458,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.07059,
			x : 0.5,
			y : 0.75,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q5 = 0;
m.vx = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q1;
m.y = m.q5;
		return m;
	},
		'init_eqs_str' : ('vx = 0;'),
		'frame_eqs_str' : ('x = q1;\n' + 'y = q5;'),

		}
],
	'warp' : ('highp vec3 xlat_mutablemus;\n' + 'shader_body {\n' + '   vec3 crisp2_1;\n' + '   vec3 crisp_2;\n' + '   float dy_3;\n' + '   float dx_4;\n' + '   vec2 uv6_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (uv - 0.5);\n' + '   vec2 P_7;\n' + '  P_7 = (uv / 4.0);\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = dot (texture2D (sampler_noise_hq, P_7), vec4(0.32, 0.49, 0.29, 0.0));\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = (tmpvar_8 * _qh.z);\n' + '   mat2 tmpvar_10;\n' + '  tmpvar_10[0].x = cos(tmpvar_9);\n' + '  tmpvar_10[0].y = sin(tmpvar_9);\n' + '  tmpvar_10[1].x = -(sin(tmpvar_9));\n' + '  tmpvar_10[1].y = cos(tmpvar_9);\n' + '  uv6_5 = (tmpvar_6 * tmpvar_10);\n' + '  uv6_5 = (uv6_5 + sin((_qh.w * tmpvar_6)));\n' + '  xlat_mutablemus = (vec3((0.2 / (\n' + '    sqrt(uv6_5.x)\n' + '   + 0.2))) * vec3(1.1, 1.0, 0.95));\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = (0.9 + (0.1 * texture2D (sampler_noise_hq, uv))).xyz;\n' + '  xlat_mutablemus = (xlat_mutablemus * tmpvar_11);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = fract(uv);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_blur1, tmpvar_12);\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = ((tmpvar_13.xyz * scale1) + bias1);\n' + '   vec2 P_15;\n' + '  P_15 = (uv + vec2(0.005, 0.0));\n' + '   vec2 P_16;\n' + '  P_16 = (uv - vec2(0.005, 0.0));\n' + '   float tmpvar_17;\n' + '  tmpvar_17 = dot ((texture2D (sampler_main, P_15) - texture2D (sampler_main, P_16)), vec4(0.32, 0.49, 0.29, 0.0));\n' + '  dx_4 = tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv + vec2(0.0, 0.005));\n' + '   vec2 P_19;\n' + '  P_19 = (uv - vec2(0.0, 0.005));\n' + '   float tmpvar_20;\n' + '  tmpvar_20 = dot ((texture2D (sampler_main, P_18) - texture2D (sampler_main, P_19)), vec4(0.32, 0.49, 0.29, 0.0));\n' + '  dy_3 = tmpvar_20;\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21.x = dx_4;\n' + '  tmpvar_21.y = dy_3;\n' + '   vec2 P_22;\n' + '  P_22 = (uv + (tmpvar_21 * 0.02));\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_main, P_22).xyz;\n' + '  crisp_2 = tmpvar_23;\n' + '   vec3 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_main, uv).xyz;\n' + '  crisp2_1 = tmpvar_24;\n' + '  crisp_2 = (crisp_2 + (crisp2_1 / 2.0));\n' + '  crisp_2 = (crisp_2 * 0.67);\n' + '  crisp_2 = (crisp_2 + ((0.08 * xlat_mutablemus) - (\n' + '    sqrt(dot (tmpvar_21, tmpvar_21))\n' + '   * tmpvar_14)));\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25.w = 1.0;\n' + '  tmpvar_25.xyz = (((crisp_2 - \n' + '    (dot (tmpvar_14, vec3(0.32, 0.49, 0.29)) * 0.04)\n' + '  ) * 0.99) - 0.04);\n' + '  vec4 ret4 = tmpvar_25;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret2_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (texsize.zw * 6.0);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12.x = dot (((\n' + '    (tmpvar_4.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_6.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_12.y = dot (((\n' + '    (tmpvar_8.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_10.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = (uv - (0.25 * tmpvar_12));\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur3, uv);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur2, uv);\n' + '  ret_2 = (vec3((0.25 * dot (\n' + '    clamp ((2.0 * ((tmpvar_14.xyz * scale3) + bias3)), 0.0, 1.0)\n' + '  , vec3(0.32, 0.49, 0.29)))) - (0.8 * dot (\n' + '    clamp (((20.0 * (\n' + '      (0.6 * ((tmpvar_15.xyz * scale2) + bias2))\n' + '     - 0.01)) - 2.0), 0.0, 1.0)\n' + '  , vec3(0.32, 0.49, 0.29))));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur1, uv);\n' + '  ret_2 = ((ret_2 + dot (\n' + '    clamp (((30.0 * (\n' + '      (tmpvar_16.xyz + (((tmpvar_17.xyz * scale1) + bias1) * 0.15))\n' + '     - 0.01)) - 2.0), 0.0, 1.0)\n' + '  , vec3(0.32, 0.49, 0.29))) - 0.1);\n' + '  ret_2 = (ret_2 + 0.55);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_blur3, tmpvar_13);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur1, tmpvar_13);\n' + '   vec3 tmpvar_20;\n' + '  tmpvar_20 = mix (ret_2, (ret_2 * (\n' + '    ((tmpvar_18.xyz * scale3) + bias3)\n' + '   - \n' + '    ((tmpvar_19.xyz * scale1) + bias1)\n' + '  )), pow (hue_shader, (ret_2 + _qe.w)));\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_main, tmpvar_13);\n' + '  ret2_1 = ((tmpvar_20 - (0.9 * tmpvar_21.xyz)) - 0.1);\n' + '  ret2_1 = (ret2_1 - 0.75);\n' + '   vec3 tmpvar_22;\n' + '  tmpvar_22 = mix (ret2_1, ((1.2 * ret2_1) * (\n' + '    ((tmpvar_14.xyz * scale3) + bias3)\n' + '   - \n' + '    ((tmpvar_17.xyz * scale1) + bias1)\n' + '  )), pow (hue_shader.zxy, tmpvar_20));\n' + '  ret2_1 = tmpvar_22;\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23 = abs((tmpvar_20 - (1.2 * tmpvar_22)));\n' + '  ret_2 = (tmpvar_23 * tmpvar_23);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24.w = 1.0;\n' + '  tmpvar_24.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_24;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('vb = vb*0.95 + (1-vb)*pow(bass_att*treb_att*mid_att,2)*0.02;\n' + 'vvb = vvb*0.95 + (1-vvb)*vb*0.01;\n' + 'vm = vm*0.95 + (1-vm)*pow(mid_att,2)*0.02;\n' + 'vvm = vvm*0.95 + (1-vvm)*vm*0.01;\n' + 'vt = vt*0.95 + (1-vt)*pow(treb_att,2)*0.02;\n' + 'vvt = vvt*0.95 + (1-vvt)*vt*0.01;\n' + 'vvb = min(1,max(0,vvb));\n' + 'vvm = min(1,max(0,vvm));\n' + 'vvt = min(1,max(0,vvt));\n' + 'q1 = vvb*10;\n' + 'q2 = vvm*10;\n' + 'q3 = vvt*10;\n' + 'v=2;\n' + 'bb = bb - vvb*v;\n' + 'mm = mm - vvm*v;\n' + 'tt = tt - vvt*v;\n' + 'q4 = -bb;\n' + 'q5 = -mm;\n' + 'q6 = -tt;\n' + 'q4=(q1+q2+q3)*5;\n' + 'q5=(q1+q2+q3)*5;\n' + 'q6=(q1+q2+q3)*5;\n' + 'q7=(q1+q2+q3)*5;\n' + 'q8=(q1+q2+q3)*5;\n' + 'q9=(q1+q2+q3)*5;\n' + 'q10=(q1+q2+q3)*5;\n' + 'q11=(q1+q2+q3)*5;\n' + 'q12=(q1+q2+q3)*5;\n' + 'q13=(q1+q2+q3)*5;\n' + 'q14=(q1+q2+q3)*5;\n' + 'q15=(q1+q2+q3)*5;\n' + 'q16=(q1+q2+q3)*5;\n' + 'q17=(q1+q2+q3)*5;\n' + 'q18=(q1+q2+q3)*5;\n' + 'q19=(q1+q2+q3)*5;\n' + 'q20=(q1+q2+q3)*5;\n' + 'q21=(q1+q2+q3)*5;\n' + 'q22=(q1+q2+q3)*5;\n' + 'q23=(q1+q2+q3)*5;\n' + 'q24=(q1+q2+q3)*5;\n' + 'q25=(q1+q2+q3)*5;\n' + 'q26=(q1+q2+q3)*5;\n' + 'q27=(q1+q2+q3)*5;\n' + 'q28=(q1+q2+q3)*5;\n' + 'q29=(q1+q2+q3)*5;\n' + 'q30=(q1+q2+q3)*5;\n' + 'q31=(q1+q2+q3)*5;\n' + 'q32=(q1+q2+q3)*5;\n' + 'wave_a = 0;\n' + 'b = b + bass*bass*0.5;\n' + 'm = m + mid*mid*0.5;\n' + 't = t + treb*treb*0.5;\n' + 'q3 = b*0.012;\n' + 'q4 = m*0.012;\n' + 'q5 = t*0.012;\n' + 'q20=bass+treb+mid;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
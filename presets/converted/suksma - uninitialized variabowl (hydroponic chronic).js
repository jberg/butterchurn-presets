define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 5.472,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 3.177,
		echo_alpha : 0.0,
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
		decay : 1.0,
		wave_a : 0.401,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.b = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.m = 0;
m.t = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.q1 = m.aspectx;
m.q2 = m.aspecty;
m.b = (m.b+((m.bass*m.bass)*0.85));
m.m = (m.m+((m.mid*m.mid)*0.85));
m.t = (m.t+((m.treb*m.treb)*0.85));
m.q3 = (m.b*0.012);
m.q4 = (m.m*0.012);
m.q5 = (m.t*0.012);
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
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.45,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.7874,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.034,
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
		'init_eqs_str' : ('started = 0;\n' + 't1 = 0.412;\n' + 't2 = 0.4563;\n' + 't3 = 0.6452;\n' + 't4 = 0.2565;'),
		'frame_eqs_str' : ('rnd1 = if(equal(instance,0),t1,rnd1);\n' + 'rnd2 = if(equal(instance,0),t2,rnd2);\n' + 'rnd3 = if(equal(instance,0),t3,rnd3);\n' + 'rnd4 = if(equal(instance,0),t4,rnd4);\n' + 'rnd1 = 4*rnd1*(1-rnd1);\n' + 'rnd2 = 4*rnd2*(1-rnd2);\n' + 'rnd3 = 4*rnd3*(1-rnd3);\n' + 'rnd4 = 4*rnd4*(1-rnd4);\n' + 't = .6;\n' + 't =  (rnd1+time*t) - int(rnd1+time*t);\n' + 't = t + rnd2*0.1;\n' + 'wh = rnd4*asin(1)*4;\n' + 'wv = 0.25 + rnd3*0.1;\n' + 'd = 1.4;\n' + 'zoom = 1;\n' + 'l = 1;\n' + 'w1 = q3;\n' + 'w2 = q4;\n' + 'w3 = q5;\n' + 'i = instance;\n' + 'my_x = t *(cos(wh)*sin(wv)*l);\n' + 'my_y = (-0.5 +(t-0.75)*(t-0.75))*cos(wv)*l;\n' + 'my_z = t*(sin(wh)*sin(wv)*l);\n' + 'x1 = cos(w1)*my_x + sin(w1)*my_y;\n' + 'y1 = -sin(w1)*my_x + cos(w1)*my_y;\n' + 'z1 = my_z;\n' + 'x2 = cos(w2)*x1 + sin(w2)*z1;\n' + 'z2 = -sin(w2)*x1 + cos(w2)*z1;\n' + 'y2 = y1;\n' + 'y3 = cos(w3)*y2 + sin(w3)*z2;\n' + 'z3 = -sin(w3)*y2 + cos(w3)*z2;\n' + 'x3 = x2;\n' + 'l = sqrt(x3*x3 + y3*y3);\n' + 'w = atan2(x3,y3);\n' + 'p = tan(asin(1) + atan2(d+z3,l));\n' + 'd = sqrt(x3*x3 + y3*y3 + (z3+d)*(z3+d));\n' + 'rad = rad/d;\n' + 'my_x = zoom*sin(w)*p;\n' + 'my_y = zoom*cos(w)*p;\n' + 'x = 0.5 + my_x;\n' + 'y = 0.5 + my_y;\n' + 'x = 0.5 + (x-0.5)/q2;\n' + 'y = 0.5 + (y-0.5)/q1;'),

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
	'warp' : ('shader_body {\n' + '   vec2 my_uv_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (vec2(1280.0, 1024.0) * texsize.zw);\n' + '   vec4 tmpvar_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (uv + vec2(0.005, 0.0));\n' + '  tmpvar_4 = texture2D (sampler_blur2, tmpvar_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (uv - vec2(0.005, 0.0));\n' + '  tmpvar_6 = texture2D (sampler_blur2, tmpvar_7);\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = (((\n' + '    (tmpvar_4.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_6.xyz * scale2)\n' + '   + bias2)).x * tmpvar_3.x);\n' + '   vec4 tmpvar_9;\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = (uv + vec2(0.0, 0.005));\n' + '  tmpvar_9 = texture2D (sampler_blur2, tmpvar_10);\n' + '   vec4 tmpvar_11;\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = (uv - vec2(0.0, 0.005));\n' + '  tmpvar_11 = texture2D (sampler_blur2, tmpvar_12);\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = (((\n' + '    (tmpvar_9.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_11.xyz * scale2)\n' + '   + bias2)).x * tmpvar_3.y);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur2, tmpvar_5);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur2, tmpvar_7);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_blur2, tmpvar_10);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur2, tmpvar_12);\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18.x = tmpvar_8;\n' + '  tmpvar_18.y = tmpvar_13;\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = (((\n' + '    (tmpvar_14.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_15.xyz * scale2)\n' + '   + bias2)).x * tmpvar_3.x);\n' + '  tmpvar_19.y = (((\n' + '    (tmpvar_16.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_17.xyz * scale2)\n' + '   + bias2)).x * tmpvar_3.y);\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = ((uv - (tmpvar_18 * 0.01)) + (tmpvar_19 * 0.003));\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_fw_main, tmpvar_20);\n' + '  ret_2.x = tmpvar_21.x;\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur3, uv);\n' + '  ret_2.x = (ret_2.x + ((ret_2.x - \n' + '    ((tmpvar_22.xyz * scale3) + bias3)\n' + '  .x) * 0.1));\n' + '  ret_2.x = (ret_2.x + 0.004);\n' + '   vec2 tmpvar_23;\n' + '  tmpvar_23.x = tmpvar_13;\n' + '  tmpvar_23.y = -(tmpvar_8);\n' + '  my_uv_1 = (uv + ((tmpvar_23 * 0.05) * (1.2 - \n' + '    ((tmpvar_22.xyz * scale3) + bias3)\n' + '  .y)));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_fw_main, my_uv_1);\n' + '  ret_2.z = tmpvar_24.z;\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_blur1, uv);\n' + '   vec2 x_26;\n' + '  x_26 = (my_uv_1 - uv);\n' + '  ret_2.z = (ret_2.z + ((\n' + '    ((ret_2.z - ((tmpvar_25.xyz * scale1) + bias1).z) * sqrt(dot (x_26, x_26)))\n' + '   * 180.0) / sqrt(\n' + '    dot (tmpvar_3, tmpvar_3)\n' + '  )));\n' + '  ret_2.z = (ret_2.z * 0.8);\n' + '  ret_2.z = (ret_2.z + 0.004);\n' + '   vec2 tmpvar_27;\n' + '  tmpvar_27.x = -(tmpvar_13);\n' + '  tmpvar_27.y = tmpvar_8;\n' + '  my_uv_1 = (tmpvar_27 * 0.045);\n' + '   vec4 tmpvar_28;\n' + '   vec2 P_29;\n' + '  P_29 = (uv + vec2(0.01, 0.0));\n' + '  tmpvar_28 = texture2D (sampler_blur2, P_29);\n' + '   vec4 tmpvar_30;\n' + '   vec2 P_31;\n' + '  P_31 = (uv - vec2(0.01, 0.0));\n' + '  tmpvar_30 = texture2D (sampler_blur2, P_31);\n' + '   vec4 tmpvar_32;\n' + '   vec2 P_33;\n' + '  P_33 = (uv + vec2(0.0, 0.01));\n' + '  tmpvar_32 = texture2D (sampler_blur2, P_33);\n' + '   vec4 tmpvar_34;\n' + '   vec2 P_35;\n' + '  P_35 = (uv - vec2(0.0, 0.01));\n' + '  tmpvar_34 = texture2D (sampler_blur2, P_35);\n' + '   vec2 tmpvar_36;\n' + '  tmpvar_36.x = (((\n' + '    (tmpvar_28.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_30.xyz * scale2)\n' + '   + bias2)).y * tmpvar_3.x);\n' + '  tmpvar_36.y = (((\n' + '    (tmpvar_32.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_34.xyz * scale2)\n' + '   + bias2)).y * tmpvar_3.y);\n' + '  my_uv_1 = (my_uv_1 + (uv - (tmpvar_36 * 0.03)));\n' + '   vec4 tmpvar_37;\n' + '  tmpvar_37 = texture2D (sampler_fw_main, my_uv_1);\n' + '  ret_2.y = tmpvar_37.y;\n' + '   vec4 tmpvar_38;\n' + '  tmpvar_38 = texture2D (sampler_blur3, my_uv_1);\n' + '  ret_2.y = (ret_2.y + ((\n' + '    (ret_2.y - ((tmpvar_38.xyz * scale3) + bias3).y)\n' + '   * 0.1) + 0.01));\n' + '   vec4 tmpvar_39;\n' + '  tmpvar_39.w = 1.0;\n' + '  tmpvar_39.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_39;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   float dy_1;\n' + '   float dx_2;\n' + '   vec3 ret1_3;\n' + '   vec2 uv1_4;\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, uv).xyz;\n' + '  ret1_3 = tmpvar_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.y = 0.0;\n' + '  tmpvar_6.x = texsize.z;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7.x = 0.0;\n' + '  tmpvar_7.y = texsize.w;\n' + '   vec2 P_8;\n' + '  P_8 = (uv - tmpvar_6);\n' + '   vec2 P_9;\n' + '  P_9 = (uv + tmpvar_6);\n' + '   float tmpvar_10;\n' + '  tmpvar_10 = (texture2D (sampler_main, P_8).xyz - texture2D (sampler_main, P_9).xyz).x;\n' + '  dx_2 = tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - tmpvar_7);\n' + '   vec2 P_12;\n' + '  P_12 = (uv + tmpvar_7);\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = (texture2D (sampler_main, P_11).xyz - texture2D (sampler_main, P_12).xyz).x;\n' + '  dy_1 = tmpvar_13;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = dx_2;\n' + '  tmpvar_14.y = dy_1;\n' + '  uv1_4 = ((0.3 * cos(\n' + '    (((uv - 0.5) * 2.0) + 1.7)\n' + '  )) - (2.0 * tmpvar_14));\n' + '  ret1_3 = ((-(ret1_3) / 4.0) + ((6.0 * vec3(\n' + '    clamp ((0.03 / sqrt(dot (uv1_4, uv1_4))), 0.0, 1.0)\n' + '  )) * (-0.08 + ret1_3)));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 1.0;\n' + '  tmpvar_15.xyz = ret1_3;\n' + '  vec4 ret4 = tmpvar_15;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_a = 0;\n' + 'q1 =aspectx;\n' + 'q2 = aspecty;\n' + 'b = b + bass*bass*0.85;\n' + 'm = m + mid*mid*0.85;\n' + 't = t + treb*treb*0.85;\n' + 'q3 = b*0.012;\n' + 'q4 = m*0.012;\n' + 'q5 = t*0.012;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
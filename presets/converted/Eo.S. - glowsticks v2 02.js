define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.4,
		ib_g : 0.0,
		mv_x : 3.0,
		warpscale : 0.014889,
		brighten : 0.0,
		mv_y : 2.0,
		wave_scale : 0.011726,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.11,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.033004,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.02,
		mv_dy : -0.02,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.300001,
		echo_zoom : 1.006596,
		ob_size : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 0.037492,
		wave_dots : 1.0,
		mv_g : 0.48,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.1,
		mv_l : 0.15,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.96,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.0,
		mv_r : 0.49,
		rating : 5.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.mv_x = 64;
m.mv_y = 48;
m.nut = 0;
m.stp = 0;
m.stq = 0;
m.rtp = 0;
m.rtq = 0;
m.wvr = 0;
m.decay = 0;
m.dcsp = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.98;
m.zoom = 1.002;
m.q1 = (m.time*0.9);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.7,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.1,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
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

			m.rkeys = ['b','flip'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.2);
m.tm = (m.q1+m.phs);
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
m.a = ((1-m.sample)*m.flip);
m.b = (m.b+(pow((1-m.sample), 2)*0.3));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=q1 + phs;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=flip*0.1 + (sin(tm)*0.5 + 0.5)*0.2;\n' + 'zp=0;\n' + 'ang=sin(tm*2)*0.5 +0.5;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=tm*8;\n' + 'xp=xq*sin(ang) + yq*cos(ang);\n' + 'yp=xq*cos(ang) - yq*sin(ang);\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*1.5;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'ang=-1.0 + cos(tm*3 + 0.5);\n' + 'xp=xq*sin(ang) + yq*cos(ang);\n' + 'yp=xq*cos(ang) - yq*sin(ang);\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2)*0.75 - 1.05;\n' + 'xq=xp*sin(ang) + zp*cos(ang);\n' + 'yq=yp;\n' + 'zq=xp*cos(ang) - zp*sin(ang);\n' + 'ang=cos(tm)*0.5 - 0.5;\n' + 'xp=xq;\n' + 'yp=yq*cos(ang) - zq*sin(ang);\n' + 'zp=yq*sin(ang) + zq*cos(ang);\n' + 'zp=zp+2;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample)*flip;\n' + 'b=b+pow(1-sample,2)*0.3;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.6,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.2,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
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

			m.rkeys = ['b','flip'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.2);
m.tm = (m.q1+m.phs);
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
m.a = ((1-m.sample)*m.flip);
m.b = (m.b+(pow((1-m.sample), 2)*0.3));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=q1 + phs;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=flip*0.1 + (sin(tm)*0.5 + 0.5)*0.2;\n' + 'yp=-yp;\n' + 'zp=0;\n' + 'ang=sin(tm*2)*0.5 +0.5;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=tm*8;\n' + 'xp=xq*sin(ang) + yq*cos(ang);\n' + 'yp=xq*cos(ang) - yq*sin(ang);\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*1.5;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'ang=-1.0 + cos(tm*3 + 0.5);\n' + 'xp=xq*sin(ang) + yq*cos(ang);\n' + 'yp=xq*cos(ang) - yq*sin(ang);\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2)*0.75 - 1.05;\n' + 'xq=xp*sin(ang) + zp*cos(ang);\n' + 'yq=yp;\n' + 'zq=xp*cos(ang) - zp*sin(ang);\n' + 'ang=cos(tm)*0.5 - 0.5;\n' + 'xp=xq;\n' + 'yp=yq*cos(ang) - zq*sin(ang);\n' + 'zp=yq*sin(ang) + zq*cos(ang);\n' + 'zp=zp+2;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample)*flip;\n' + 'b=b+pow(1-sample,2)*0.3;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.1,
			g : 0.6,
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
m.q1 = 0;
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
m.tm = m.q1;
m.phs = (-m.sample*0.5);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = (m.flip*0.1);
m.zp = 0;
m.ang = (((Math.sin((((m.tm*2)+m.phs)-2))*0.5)+0.5)+2);
m.xq = m.xp;
m.yq = ((m.yp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.zq = ((m.yp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = (Math.cos((((m.tm*2)+m.phs)-2))*1.5);
m.xp = ((m.xq*Math.sin(m.ang))+(m.yq*Math.cos(m.ang)));
m.yp = ((m.xq*Math.cos(m.ang))-(m.yq*Math.sin(m.ang)));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin((((m.tm*2)+m.phs)-0.5))*1.5));
m.xq = m.xp;
m.yq = ((m.yp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.zq = ((m.yp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = (-1.0+Math.cos(((((m.tm*3)+0.5)+m.phs)+0.5)));
m.xp = ((m.xq*Math.sin(m.ang))+(m.yq*Math.cos(m.ang)));
m.yp = ((m.xq*Math.cos(m.ang))-(m.yq*Math.sin(m.ang)));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos(((m.tm*2)+m.phs))*0.75)-1.05);
m.xq = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yq = m.yp;
m.zq = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = ((Math.cos((m.tm+m.phs))*0.5)-0.5);
m.xp = m.xq;
m.yp = ((m.yq*Math.cos(m.ang))-(m.zq*Math.sin(m.ang)));
m.zp = ((m.yq*Math.sin(m.ang))+(m.zq*Math.cos(m.ang)));
m.zp = (m.zp+2);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = ((1-m.sample)*0.05);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'tm=q1;\n' + 'phs=-sample*0.5;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=flip*0.1;\n' + 'zp=0;\n' + 'ang=sin(tm*2+phs - 2)*0.5 +0.5 + 2;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'ang=cos(tm*2+phs - 2)*1.5 ;\n' + 'xp=xq*sin(ang) + yq*cos(ang);\n' + 'yp=xq*cos(ang) - yq*sin(ang);\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2+phs - 0.5)*1.5;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'ang=-1.0 + cos(tm*3 + 0.5 +phs + 0.5);\n' + 'xp=xq*sin(ang) + yq*cos(ang);\n' + 'yp=xq*cos(ang) - yq*sin(ang);\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2+phs)*0.75 - 1.05;\n' + 'xq=xp*sin(ang) + zp*cos(ang);\n' + 'yq=yp;\n' + 'zq=xp*cos(ang) - zp*sin(ang);\n' + 'ang=cos(tm+phs)*0.5 - 0.5;\n' + 'xp=xq;\n' + 'yp=yq*cos(ang) - zq*sin(ang);\n' + 'zp=yq*sin(ang) + zq*cos(ang);\n' + 'zp=zp+2;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample)*0.05;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.1,
			g : 0.3,
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
m.q1 = 0;
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
m.tm = m.q1;
m.phs = (-m.sample*0.5);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = (m.flip*0.1);
m.zp = 0;
m.ang = (((Math.sin((((m.tm*2)+m.phs)-2))*0.5)+0.5)+2);
m.xq = m.xp;
m.yq = ((m.yp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.zq = ((m.yp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = (Math.cos((((m.tm*2)+m.phs)-2))*1.5);
m.xp = ((m.xq*Math.sin(m.ang))+(m.yq*Math.cos(m.ang)));
m.yp = ((m.xq*Math.cos(m.ang))-(m.yq*Math.sin(m.ang)));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin((((m.tm*2)+m.phs)-0.5))*1.5));
m.xq = m.xp;
m.yq = ((m.yp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.zq = ((m.yp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = (-1.0+Math.cos((((m.tm*3)+0.5)+m.phs)));
m.xp = ((m.xq*Math.sin(m.ang))+(m.yq*Math.cos(m.ang)));
m.yp = ((m.xq*Math.cos(m.ang))-(m.yq*Math.sin(m.ang)));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos(((m.tm*2)+m.phs))*0.75)-1.05);
m.xq = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yq = m.yp;
m.zq = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = ((Math.cos((m.tm+m.phs))*0.5)-0.5);
m.xp = m.xq;
m.yp = ((m.yq*Math.cos(m.ang))-(m.zq*Math.sin(m.ang)));
m.zp = ((m.yq*Math.sin(m.ang))+(m.zq*Math.cos(m.ang)));
m.zp = (m.zp+2);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (-m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = ((1-m.sample)*0.05);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'tm=q1 ;\n' + 'phs=-sample*0.5;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=flip*0.1;\n' + 'zp=0;\n' + 'ang=sin(tm*2+phs-2)*0.5 +0.5 + 2;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'ang=cos(tm*2+phs-2)*1.5;\n' + 'xp=xq*sin(ang) + yq*cos(ang);\n' + 'yp=xq*cos(ang) - yq*sin(ang);\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2+phs-0.5)*1.5;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'ang=-1.0 + cos(tm*3 + 0.5 +phs);\n' + 'xp=xq*sin(ang) + yq*cos(ang);\n' + 'yp=xq*cos(ang) - yq*sin(ang);\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2+phs)*0.75 - 1.05;\n' + 'xq=xp*sin(ang) + zp*cos(ang);\n' + 'yq=yp;\n' + 'zq=xp*cos(ang) - zp*sin(ang);\n' + 'ang=cos(tm+phs)*0.5 - 0.5;\n' + 'xp=xq;\n' + 'yp=yq*cos(ang) - zq*sin(ang);\n' + 'zp=yq*sin(ang) + zq*cos(ang);\n' + 'zp=zp+2;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=-xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample)*0.05;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.779769,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.06779,
			x : 0.5,
			y : 0.5,
			ang : 0.753982,
			sides : 5.0,
			border_r : 1.0,
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
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
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
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
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
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
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

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=0.98;\n' + 'zoom=1.002;\n' + 'q1=time*0.9;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
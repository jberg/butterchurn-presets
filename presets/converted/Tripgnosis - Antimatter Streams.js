define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 3.0,
		warpscale : 1.611,
		brighten : 0.0,
		mv_y : 2.0,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.11,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.12532,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.02,
		mv_dy : -0.02,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 0.3,
		echo_zoom : 1.169,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 0.01,
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
		rot : 0.004,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.003,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.75,
		ib_b : 0.0,
		mv_r : 0.49,
		rating : 4.5,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
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
			b : 0.99,
			g : 0.9,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 0.01,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.flip = 0;
m.n = 0;
m.sa = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.zr = 0;
m.tm = 0;
m.xq = 0;
m.yr = 0;
m.ang = 0;
m.xr = 0;
m.ys = 0;
m.phs = 0;
m.xs = 0;
m.ca = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.2);
m.tm = (m.q1+(m.phs*4));
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = (((m.flip*0.1)-0.05)*m.sample);
m.zp = 0;
m.ang = ((m.tm*20)+(Math.sin(((m.tm*76)+(m.time*4)))*0.4));
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xr = ((m.xp*m.sa)+(m.yp*m.ca));
m.yr = ((m.xp*m.ca)-(m.yp*m.sa));
m.zr = m.zp;
m.xp = m.xr;
m.yp = (((m.yr+0.05)+(((Math.sin(m.tm)*0.5)+0.5)*0.2))+0.05);
m.zp = m.zr;
m.ang = Math.sin((m.tm*2));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (m.tm*8);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin(((m.tm*2)-0.5))*2.5));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (-1.0+Math.cos(((m.tm*3)+0.5)));
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos((m.tm*1))*1.75)-1.05);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xq = ((m.xp*m.sa)+(m.zp*m.ca));
m.yq = m.yp;
m.zq = ((m.xp*m.ca)-(m.zp*m.sa));
m.ang = Math.cos(m.tm);
m.xp = m.xq;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yp = ((m.yq*m.ca)-(m.zq*m.sa));
m.zp = ((m.yq*m.sa)+(m.zq*m.ca));
m.zp = (m.zp+1.5);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = (1-m.sample);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=q1 + phs*4;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=(flip*0.1-0.05)*(sample);\n' + 'zp=0;\n' + 'ang=tm*20 + sin(tm*76 + time*4)*0.4;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xr=xp*sa + yp*ca;\n' + 'yr=xp*ca - yp*sa;\n' + 'zr=zp;\n' + 'xp=xr;\n' + 'yp=yr + 0.05 + (sin(tm)*0.5 + 0.5)*0.2 + 0.05;\n' + 'zp=zr;\n' + 'ang=sin(tm*2);\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=tm*8;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*2.5;\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=-1.0 + cos(tm*3 + 0.5);\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*1)*1.75 - 1.05;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xq=xp*sa + zp*ca;\n' + 'yq=yp;\n' + 'zq=xp*ca - zp*sa;\n' + 'ang=cos(tm);\n' + 'xp=xq;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yp=yq*ca - zq*sa;\n' + 'zp=yq*sa + zq*ca;\n' + 'zp=zp+1.5;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample);'),

		},
		{
		'baseVals' : {
			a : 0.99,
			enabled : 1.0,
			b : 0.75,
			g : 0.55,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.01,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.flip = 0;
m.n = 0;
m.sa = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.zr = 0;
m.tm = 0;
m.xq = 0;
m.yr = 0;
m.ang = 0;
m.xr = 0;
m.ys = 0;
m.phs = 0;
m.xs = 0;
m.ca = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.4);
m.tm = ((m.q1+(m.phs*2))-0.01);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = (((m.flip*0.2)-0.1)*m.sample);
m.zp = 0;
m.ang = ((-m.tm*29)+(Math.sin(((m.tm*76)+(m.time*4)))*0.4));
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xr = ((m.xp*m.sa)+(m.yp*m.ca));
m.yr = ((m.xp*m.ca)-(m.yp*m.sa));
m.zr = m.zp;
m.xp = m.xr;
m.yp = (((m.yr+0.05)+(((Math.sin(m.tm)*0.5)+0.5)*0.2))+0.05);
m.zp = m.zr;
m.ang = Math.sin((m.tm*2));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (m.tm*8);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin(((m.tm*2)-0.5))*2.5));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (-1.0+Math.cos(((m.tm*3)+0.5)));
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos((m.tm*1))*1.75)-1.05);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xq = ((m.xp*m.sa)+(m.zp*m.ca));
m.yq = m.yp;
m.zq = ((m.xp*m.ca)-(m.zp*m.sa));
m.ang = Math.cos(m.tm);
m.xp = m.xq;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yp = ((m.yq*m.ca)-(m.zq*m.sa));
m.zp = ((m.yq*m.sa)+(m.zq*m.ca));
m.zp = (m.zp+1.5);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = (1-m.sample);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.4 ;\n' + 'tm=q1 + phs*2 - 0.01;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=(flip*0.2-0.1)*(sample);\n' + 'zp=0;\n' + 'ang=-tm*29 + sin(tm*76 + time*4)*0.4;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xr=xp*sa + yp*ca;\n' + 'yr=xp*ca - yp*sa;\n' + 'zr=zp;\n' + 'xp=xr;\n' + 'yp=yr + 0.05 + (sin(tm)*0.5 + 0.5)*0.2 + 0.05;\n' + 'zp=zr;\n' + 'ang=sin(tm*2);\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=tm*8;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*2.5;\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=-1.0 + cos(tm*3 + 0.5);\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*1)*1.75 - 1.05;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xq=xp*sa + zp*ca;\n' + 'yq=yp;\n' + 'zq=xp*ca - zp*sa;\n' + 'ang=cos(tm);\n' + 'xp=xq;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yp=yq*ca - zq*sa;\n' + 'zp=yq*sa + zq*ca;\n' + 'zp=zp+1.5;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.06,
			g : 0.8,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.flip = 0;
m.n = 0;
m.sa = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.zr = 0;
m.tm = 0;
m.xq = 0;
m.yr = 0;
m.ang = 0;
m.xr = 0;
m.ys = 0;
m.phs = 0;
m.xs = 0;
m.ca = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.4);
m.tm = ((m.q1+(m.phs*2))-0.02);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = (((m.flip*0.4)-0.2)*m.sample);
m.zp = 0;
m.ang = ((m.tm*23)+(Math.sin(((m.tm*76)+(m.time*4)))*0.3));
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xr = ((m.xp*m.sa)+(m.yp*m.ca));
m.yr = ((m.xp*m.ca)-(m.yp*m.sa));
m.zr = m.zp;
m.xp = m.xr;
m.yp = (((m.yr+0.05)+(((Math.sin(m.tm)*0.5)+0.5)*0.2))+0.05);
m.zp = m.zr;
m.ang = Math.sin((m.tm*2));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (m.tm*8);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin(((m.tm*2)-0.5))*2.5));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (-1.0+Math.cos(((m.tm*3)+0.5)));
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos((m.tm*1))*1.75)-1.05);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xq = ((m.xp*m.sa)+(m.zp*m.ca));
m.yq = m.yp;
m.zq = ((m.xp*m.ca)-(m.zp*m.sa));
m.ang = Math.cos(m.tm);
m.xp = m.xq;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yp = ((m.yq*m.ca)-(m.zq*m.sa));
m.zp = ((m.yq*m.sa)+(m.zq*m.ca));
m.zp = (m.zp+1.5);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = (1-m.sample);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.4 ;\n' + 'tm=q1 + phs*2 - 0.02;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=(flip*0.4-0.2)*(sample);\n' + 'zp=0;\n' + 'ang=tm*23 + sin(tm*76 + time*4)*0.3;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xr=xp*sa + yp*ca;\n' + 'yr=xp*ca - yp*sa;\n' + 'zr=zp;\n' + 'xp=xr;\n' + 'yp=yr + 0.05 + (sin(tm)*0.5 + 0.5)*0.2 + 0.05;\n' + 'zp=zr;\n' + 'ang=sin(tm*2);\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=tm*8;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*2.5;\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=-1.0 + cos(tm*3 + 0.5);\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*1)*1.75 - 1.05;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xq=xp*sa + zp*ca;\n' + 'yq=yp;\n' + 'zq=xp*ca - zp*sa;\n' + 'ang=cos(tm);\n' + 'xp=xq;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yp=yq*ca - zq*sa;\n' + 'zp=yq*sa + zq*ca;\n' + 'zp=zp+1.5;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.15,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.1,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.flip = 0;
m.n = 0;
m.sa = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.zr = 0;
m.tm = 0;
m.xq = 0;
m.yr = 0;
m.ang = 0;
m.xr = 0;
m.ys = 0;
m.phs = 0;
m.xs = 0;
m.ca = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.4);
m.tm = ((m.q1+(m.phs*2))-0.03);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = (((m.flip*0.6)-0.3)*m.sample);
m.zp = 0;
m.ang = ((-m.tm*4)+(Math.sin(((m.tm*76)+(m.time*4)))*0.2));
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xr = ((m.xp*m.sa)+(m.yp*m.ca));
m.yr = ((m.xp*m.ca)-(m.yp*m.sa));
m.zr = m.zp;
m.xp = m.xr;
m.yp = (((m.yr+0.05)+(((Math.sin(m.tm)*0.5)+0.5)*0.2))+0.05);
m.zp = m.zr;
m.ang = Math.sin((m.tm*2));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (m.tm*8);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin(((m.tm*2)-0.5))*2.5));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (-1.0+Math.cos(((m.tm*3)+0.5)));
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos((m.tm*1))*1.75)-1.05);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xq = ((m.xp*m.sa)+(m.zp*m.ca));
m.yq = m.yp;
m.zq = ((m.xp*m.ca)-(m.zp*m.sa));
m.ang = Math.cos(m.tm);
m.xp = m.xq;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yp = ((m.yq*m.ca)-(m.zq*m.sa));
m.zp = ((m.yq*m.sa)+(m.zq*m.ca));
m.zp = (m.zp+1.5);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = (1-m.sample);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.4 ;\n' + 'tm=q1 + phs*2 - 0.03;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=(flip*0.6-0.3)*(sample);\n' + 'zp=0;\n' + 'ang=-tm*4 + sin(tm*76 + time*4)*0.2;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xr=xp*sa + yp*ca;\n' + 'yr=xp*ca - yp*sa;\n' + 'zr=zp;\n' + 'xp=xr;\n' + 'yp=yr + 0.05 + (sin(tm)*0.5 + 0.5)*0.2 + 0.05;\n' + 'zp=zr;\n' + 'ang=sin(tm*2);\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=tm*8;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*2.5;\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=-1.0 + cos(tm*3 + 0.5);\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*1)*1.75 - 1.05;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xq=xp*sa + zp*ca;\n' + 'yq=yp;\n' + 'zq=xp*ca - zp*sa;\n' + 'ang=cos(tm);\n' + 'xp=xq;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yp=yq*ca - zq*sa;\n' + 'zp=yq*sa + zq*ca;\n' + 'zp=zp+1.5;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.35,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.15,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.04556,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 6.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.flip = 0;
m.sa = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.zr = 0;
m.tm = 0;
m.xq = 0;
m.yr = 0;
m.xr = 0;
m.ys = 0;
m.xs = 0;
m.ca = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tm = m.q1;
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = 0;
m.zp = 0;
m.ang = ((m.tm*20)+(Math.sin(((m.tm*76)+(m.time*4)))*0.4));
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xr = ((m.xp*m.sa)+(m.yp*m.ca));
m.yr = ((m.xp*m.ca)-(m.yp*m.sa));
m.zr = m.zp;
m.xp = m.xr;
m.yp = (((m.yr+0.05)+(((Math.sin(m.tm)*0.5)+0.5)*0.2))+0.05);
m.zp = m.zr;
m.ang = Math.sin((m.tm*2));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (m.tm*8);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin(((m.tm*2)-0.5))*2.5));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (-1.0+Math.cos(((m.tm*3)+0.5)));
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos((m.tm*1))*1.75)-1.05);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xq = ((m.xp*m.sa)+(m.zp*m.ca));
m.yq = m.yp;
m.zq = ((m.xp*m.ca)-(m.zp*m.sa));
m.ang = Math.cos(m.tm);
m.xp = m.xq;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yp = ((m.yq*m.ca)-(m.zq*m.sa));
m.zp = ((m.yq*m.sa)+(m.zq*m.ca));
m.zp = (m.zp+1.5);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = 0.7;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tm=q1;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=0;\n' + 'zp=0;\n' + 'ang=tm*20 + sin(tm*76 + time*4)*0.4;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xr=xp*sa + yp*ca;\n' + 'yr=xp*ca - yp*sa;\n' + 'zr=zp;\n' + 'xp=xr;\n' + 'yp=yr + 0.05 + (sin(tm)*0.5 + 0.5)*0.2 + 0.05;\n' + 'zp=zr;\n' + 'ang=sin(tm*2);\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=tm*8;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*2.5;\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=-1.0 + cos(tm*3 + 0.5);\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*1)*1.75 - 1.05;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xq=xp*sa + zp*ca;\n' + 'yq=yp;\n' + 'zq=xp*ca - zp*sa;\n' + 'ang=cos(tm);\n' + 'xp=xq;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yp=yq*ca - zq*sa;\n' + 'zp=yq*sa + zq*ca;\n' + 'zp=zp+1.5;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=0.7;'),

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

		}
],
	'warp' : ('shader_body {\n' + '   vec4 lums_1;\n' + '   vec3 ret_2;\n' + '   vec3 tmpvar_3;\n' + '  tmpvar_3.z = 0.0;\n' + '  tmpvar_3.xy = texsize.zw;\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = (tmpvar_3 * 3.5);\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (texsize.zw * tmpvar_4.xz));\n' + '   float tmpvar_6;\n' + '  tmpvar_6 = dot (texture2D (sampler_main, P_5).xyz, vec3(0.32, 0.49, 0.29));\n' + '  lums_1.x = tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (texsize.zw * tmpvar_4.xz));\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = dot (texture2D (sampler_main, P_7).xyz, vec3(0.32, 0.49, 0.29));\n' + '  lums_1.y = tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (texsize.zw * tmpvar_4.zy));\n' + '   float tmpvar_10;\n' + '  tmpvar_10 = dot (texture2D (sampler_main, P_9).xyz, vec3(0.32, 0.49, 0.29));\n' + '  lums_1.z = tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (texsize.zw * tmpvar_4.zy));\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = dot (texture2D (sampler_main, P_11).xyz, vec3(0.32, 0.49, 0.29));\n' + '  lums_1.w = tmpvar_12;\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = (lums_1.x - lums_1.y);\n' + '  tmpvar_13.y = (lums_1.z - lums_1.w);\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (uv + ((\n' + '    ((clamp ((\n' + '      (((2800.0 * tmpvar_13) / 3.5) * 0.5)\n' + '     + 0.5), 0.0, 1.0) * 2.0) - 1.0)\n' + '   * 1.4) * texsize.zw));\n' + '  tmpvar_14 = texture2D (sampler_fc_main, P_15);\n' + '  ret_2 = tmpvar_14.xyz;\n' + '  ret_2 = (ret_2 * 0.965);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '  uv_1 = (0.05 + (0.9 * uv));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv_1);\n' + '  ret_2 = (tmpvar_3.xyz * 4.0);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv_1);\n' + '  ret_2 = (ret_2 - ((\n' + '    (tmpvar_4.xyz * scale1)\n' + '   + bias1) * 4.0));\n' + '  ret_2 = -(ret_2);\n' + '  ret_2 = ((pow (ret_2, vec3(0.5, 0.5, 0.7)) - 0.1) * 1.1);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=0.98;\n' + 'zoom=1.002;\n' + 'q1=time*0.9;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
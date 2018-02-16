define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.28,
		wave_g : 0.4,
		ib_g : 0.0,
		mv_x : 3.0,
		warpscale : 0.015,
		brighten : 0.0,
		mv_y : 2.0,
		wave_scale : 0.012,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.11,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.033,
		red_blue : 0.0,
		b1x : 1.0,
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
		mv_b : 0.3,
		echo_zoom : 0.997,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 0.037,
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
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.gamma = 0;
m.vol = 0;
m.zm = 0;
m.mtime = 0;
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
m.decay = 0.975;
m.vol = (((m.bass+m.mid)+m.treb)*0.25);
m.vol = (m.vol*m.vol);
m.mtime = (m.mtime+(m.vol*0.01));
m.q1 = (m.time*0.5);
m.gamma = (1+(Math.min((m.vol*0.8), 1)*0.7));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zm = 1.00;
m.sx = m.zm;
m.sy = m.zm;
		return m;
	},
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
			usedots : 1.0,
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
			a : 1.0,
			enabled : 1.0,
			b : 0.8,
			g : 0.9,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
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
			b : 0.1,
			g : 0.72,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
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
			b : 0.5,
			g : 0.7,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
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
			b : 0.3,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.7,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
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
	'warp' : (''),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_7 = texture2D (sampler_blur1, P_8);\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1)).y;\n' + '  tmpvar_11.y = (((tmpvar_7.xyz * scale1) + bias1) - ((tmpvar_9.xyz * scale1) + bias1)).y;\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = (uv + (tmpvar_11 * 0.55));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = ((tmpvar_12 * 1.25) - 0.125);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur1, tmpvar_12);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_main, uv);\n' + '   vec3 tmpvar_16;\n' + '  tmpvar_16 = mix (ret_1, (1.0 - ret_1), ((0.7 * \n' + '    ((tmpvar_14.xyz * scale1) + bias1)\n' + '  ) + (0.2 * tmpvar_15.xyz)));\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur3, tmpvar_12);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_blur1, tmpvar_13);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_main, tmpvar_12);\n' + '   vec3 tmpvar_20;\n' + '  tmpvar_20 = mix (tmpvar_16, ((\n' + '    (tmpvar_16 - (0.1 * ((tmpvar_17.xyz * scale3) + bias3)))\n' + '   + \n' + '    (0.1 * ((tmpvar_18.xyz * scale1) + bias1))\n' + '  ) + (0.42 * tmpvar_19.xyz)), vec3(0.25, 0.25, 0.25));\n' + '   vec3 x_21;\n' + '  x_21 = (tmpvar_20 - 0.5);\n' + '  ret_1 = (tmpvar_20 * clamp ((\n' + '    sqrt(dot (x_21, x_21))\n' + '   * 5.0), 0.0, 1.0));\n' + '  ret_1 = (vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))) + 1.25);\n' + '  ret_1 = (ret_1 * (ret_1 * 0.45));\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur3, uv);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_blur1, uv);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_blur2, tmpvar_12);\n' + '  ret_1 = (ret_1 * mix ((0.9 * ret_1), (\n' + '    (1.2 * ret_1)\n' + '   * \n' + '    ((((tmpvar_22.xyz * scale3) + bias3) - ((tmpvar_23.xyz * scale1) + bias1)) - (0.25 * ((tmpvar_24.xyz * scale2) + bias2)))\n' + '  ), pow (hue_shader.zxy, ret_1)));\n' + '  ret_1 = (ret_1 + 0.02);\n' + '  ret_1 = (ret_1 * ret_1);\n' + '  ret_1 = (ret_1 * hue_shader.zxy);\n' + '  ret_1 = (ret_1 * 2.0);\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25.w = 1.0;\n' + '  tmpvar_25.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_25;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=0.975;\n' + 'vol=(bass+mid+treb)*0.25;\n' + 'vol=vol*vol;\n' + 'mtime=mtime+vol*0.01;\n' + 'q1=time*0.5;\n' + 'gamma=1 + min(vol*0.8,1)*0.7;'),
	'pixel_eqs_str' : ('zm=1.00;\n' + 'sx=zm;\n' + 'sy=zm;'),
};

return pmap;
});
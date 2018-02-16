define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.4,
		ib_g : 0.25,
		mv_x : 0.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 43.2,
		wave_scale : 0.012,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.86831,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 0.71,
		echo_zoom : 2.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.91,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0002,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.7,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.mt = 0;
m.toc = 0;
m.vav = 0;
m.treb_avg = 0;
m.tic = 0;
m.ra = 0;
m.slide = 0;
m.bt = 0;
m.bass_avg = 0;
m.vol = 0;
m.tin = 0;
m.mid_avg = 0;
m.sp = 0;
m.vt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.vol = (((m.bass_att+m.treb_att)+m.mid_att)*0.333333);
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = m.time;
m.ra = 10;
m.treb_avg = (m.tic*((m.treb_avg*(div(1,m.tic)-m.ra))+(m.ra*m.treb)));
m.mid_avg = (m.tic*((m.mid_avg*(div(1,m.tic)-m.ra))+(m.ra*m.mid)));
m.bass_avg = (m.tic*((m.bass_avg*(div(1,m.tic)-m.ra))+(m.ra*m.bass)));
m.vav = (m.tic*((m.vav*(div(1,m.tic)-m.ra))+((m.ra*((m.bass+m.treb)+m.mid))*0.33333)));
m.tt = (m.tt+(m.tic*m.treb_avg));
m.mt = (m.mt+(m.tic*m.mid_avg));
m.bt = (m.bt+(m.tic*m.bass_avg));
m.sp = (Math.abs((m.vav-m.slide))*0.1);
m.slide = (ifcond(above(m.slide, m.vav), (m.slide-(m.tic*m.sp)), (m.slide+(m.tic*m.sp)))+((1-m.toc)*m.vav));
m.toc = 1;
m.vt = (m.vt+(m.tic*m.slide));
m.q1 = m.bt;
m.q2 = m.mt;
m.q3 = m.tt;
m.q4 = (m.slide*1);
m.q5 = ((m.vt*0.05)+150);
m.q6 = 0.01;
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
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.r2 = 0;
m.t4 = 0;
m.t5 = 0;
m.sinang = 0;
m.t6 = 0;
m.q8 = 0;
m.g1 = 0;
m.g2 = 0;
m.flip = 0;
m.n = 0;
m.b1 = 0;
m.b2 = 0;
m.cosang = 0;
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
m.t1 = 0;
m.t2 = 0;
m.r1 = 0;
m.t3 = 0;

			m.rkeys = ['b','flip'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = ((Math.sin(m.time)*0.5)+0.5);
m.t2 = ((Math.sin((m.time+2.1))*0.5)+0.5);
m.t3 = ((Math.sin((m.time+4.2))*0.5)+0.5);
m.t4 = ((Math.sin((m.time+1.1))*0.5)+0.5);
m.t5 = ((Math.sin((m.time+3.1))*0.5)+0.5);
m.t6 = ((Math.sin((m.time+5.2))*0.5)+0.5);
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
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.yq = ((m.yp*m.sinang)+(m.zp*m.cosang));
m.zq = ((m.yp*m.cosang)-(m.zp*m.sinang));
m.yq = m.yp;
m.zq = m.zp;
m.ang = (m.tm*8);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = ((m.xq*m.sinang)+(m.yq*m.cosang));
m.yp = ((m.xq*m.cosang)-(m.yq*m.sinang));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin(((m.tm*2)-0.5))*1.5));
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sinang)+(m.zp*m.cosang));
m.zq = ((m.yp*m.cosang)-(m.zp*m.sinang));
m.ang = (-1.0+Math.cos(((m.tm*3.1)+0.5)));
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = ((m.xq*m.sinang)+(m.yq*m.cosang));
m.yp = ((m.xq*m.cosang)-(m.yq*m.sinang));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos((m.tm*2.3))*1.75)-1.05);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xq = ((m.xp*m.sinang)+(m.zp*m.cosang));
m.yq = m.yp;
m.zq = ((m.xp*m.cosang)-(m.zp*m.sinang));
m.ang = ((Math.cos(m.tm)*0.5)-0.5);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = m.xq;
m.yp = ((m.yq*m.cosang)-(m.zq*m.sinang));
m.zp = ((m.yq*m.sinang)+(m.zq*m.cosang));
m.zp = (m.zp+2);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = ifcond(equal(m.q8, 1), (1-m.sample), m.sample);
m.a = (m.a*m.a);
m.b = (m.b+(pow((1-m.sample), 2)*0.3));
m.r1 = m.t1;
m.g1 = m.t2;
m.b1 = m.t3;
m.r2 = m.t4;
m.g2 = m.t5;
m.b2 = m.t6;
m.r = ((m.r1*m.flip)+(m.r2*(1-m.flip)));
m.g = ((m.g1*m.flip)+(m.g2*(1-m.flip)));
m.b = ((m.b1*m.flip)+(m.b2*(1-m.flip)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=sin(time)*0.5+0.5;\n' + 't2=sin(time+2.1)*0.5+0.5;\n' + 't3=sin(time+4.2)*0.5+0.5;\n' + 't4=sin(time+1.1)*0.5+0.5;\n' + 't5=sin(time+3.1)*0.5+0.5;\n' + 't6=sin(time+5.2)*0.5+0.5;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=q1 + phs;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=flip*0.1 + (sin(tm)*0.5 + 0.5)*0.2;\n' + 'zp=0;\n' + 'ang=sin(tm*2 )*0.5 +0.5;\n' + 'xq=xp;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=tm*8;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*1.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'ang=-1.0 + cos(tm*3.1 + 0.5);\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2.3)*1.75 - 1.05;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp*sinang + zp*cosang;\n' + 'yq=yp;\n' + 'zq=xp*cosang - zp*sinang;\n' + 'ang=cos(tm)*0.5 - 0.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq;\n' + 'yp=yq*cosang - zq*sinang;\n' + 'zp=yq*sinang + zq*cosang;\n' + 'zp=zp+2;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=if( equal(q8,1) , (1-sample) , sample);\n' + 'a=a*a;\n' + 'b=b+pow(1-sample,2)*0.3;\n' + 'r1=t1;\n' + 'g1=t2;\n' + 'b1=t3;\n' + 'r2=t4;\n' + 'g2=t5;\n' + 'b2=t6;\n' + 'r=r1*flip + r2*(1-flip);\n' + 'g=g1*flip + g2*(1-flip);\n' + 'b=b1*flip + b2*(1-flip);'),

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
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.r2 = 0;
m.t4 = 0;
m.t5 = 0;
m.sinang = 0;
m.t6 = 0;
m.q8 = 0;
m.g1 = 0;
m.g2 = 0;
m.flip = 0;
m.n = 0;
m.b1 = 0;
m.b2 = 0;
m.cosang = 0;
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
m.t1 = 0;
m.t2 = 0;
m.r1 = 0;
m.t3 = 0;

			m.rkeys = ['b','flip'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = ((Math.sin(m.time)*0.5)+0.5);
m.t2 = ((Math.sin((m.time+2.1))*0.5)+0.5);
m.t3 = ((Math.sin((m.time+4.2))*0.5)+0.5);
m.t4 = ((Math.sin((m.time+1.1))*0.5)+0.5);
m.t5 = ((Math.sin((m.time+3.1))*0.5)+0.5);
m.t6 = ((Math.sin((m.time+5.2))*0.5)+0.5);
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.2);
m.tm = (m.q1+m.phs);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = (((m.flip*0.1)+(((Math.sin(m.tm)*0.5)+0.5)*0.2))+0.1);
m.yp = -m.yp;
m.zp = 0;
m.ang = ((Math.sin((m.tm*2))*0.5)+0.5);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sinang)+(m.zp*m.cosang));
m.zq = ((m.yp*m.cosang)-(m.zp*m.sinang));
m.yq = m.yp;
m.zq = m.zp;
m.ang = (m.tm*8);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = ((m.xq*m.sinang)+(m.yq*m.cosang));
m.yp = ((m.xq*m.cosang)-(m.yq*m.sinang));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin(((m.tm*2)-0.5))*1.5));
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sinang)+(m.zp*m.cosang));
m.zq = ((m.yp*m.cosang)-(m.zp*m.sinang));
m.ang = (-1.0+Math.cos(((m.tm*3.1)+0.5)));
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = ((m.xq*m.sinang)+(m.yq*m.cosang));
m.yp = ((m.xq*m.cosang)-(m.yq*m.sinang));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos((m.tm*2.3))*1.75)-1.05);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xq = ((m.xp*m.sinang)+(m.zp*m.cosang));
m.yq = m.yp;
m.zq = ((m.xp*m.cosang)-(m.zp*m.sinang));
m.ang = ((Math.cos(m.tm)*0.5)-0.5);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = m.xq;
m.yp = ((m.yq*m.cosang)-(m.zq*m.sinang));
m.zp = ((m.yq*m.sinang)+(m.zq*m.cosang));
m.zp = (m.zp+2);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = ifcond(equal(m.q8, 1), (1-m.sample), m.sample);
m.a = (m.a*m.a);
m.b = (m.b+(pow((1-m.sample), 2)*0.3));
m.r1 = m.t1;
m.g1 = m.t2;
m.b1 = m.t3;
m.r2 = m.t4;
m.g2 = m.t5;
m.b2 = m.t6;
m.r = ((m.r1*m.flip)+(m.r2*(1-m.flip)));
m.g = ((m.g1*m.flip)+(m.g2*(1-m.flip)));
m.b = ((m.b1*m.flip)+(m.b2*(1-m.flip)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=sin(time)*0.5+0.5;\n' + 't2=sin(time+2.1)*0.5+0.5;\n' + 't3=sin(time+4.2)*0.5+0.5;\n' + 't4=sin(time+1.1)*0.5+0.5;\n' + 't5=sin(time+3.1)*0.5+0.5;\n' + 't6=sin(time+5.2)*0.5+0.5;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=q1 + phs;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=flip*0.1 + (sin(tm)*0.5 + 0.5)*0.2 +0.1;\n' + 'yp=-yp;\n' + 'zp=0;\n' + 'ang=sin(tm*2)*0.5 +0.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=tm*8;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*1.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'ang=-1.0 + cos(tm*3.1 + 0.5);\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2.3)*1.75 - 1.05;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp*sinang + zp*cosang;\n' + 'yq=yp;\n' + 'zq=xp*cosang - zp*sinang;\n' + 'ang=cos(tm)*0.5 - 0.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq;\n' + 'yp=yq*cosang - zq*sinang;\n' + 'zp=yq*sinang + zq*cosang;\n' + 'zp=zp+2;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=if( equal(q8,1) , (1-sample) , sample);\n' + 'a=a*a;\n' + 'b=b+pow(1-sample,2)*0.3;\n' + 'r1=t1;\n' + 'g1=t2;\n' + 'b1=t3;\n' + 'r2=t4;\n' + 'g2=t5;\n' + 'b2=t6;\n' + 'r=r1*flip + r2*(1-flip);\n' + 'g=g1*flip + g2*(1-flip);\n' + 'b=b1*flip + b2*(1-flip);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.1,
			g : 0.6,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.t5 = 0;
m.sinang = 0;
m.t6 = 0;
m.t8 = 0;
m.q8 = 0;
m.flip = 0;
m.n = 0;
m.cosang = 0;
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
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = ((Math.sin(m.time)*0.5)+0.5);
m.t2 = ((Math.sin((m.time+2.1))*0.5)+0.5);
m.t3 = ((Math.sin((m.time+4.2))*0.5)+0.5);
m.t4 = ((Math.sin((m.time+1.1))*0.5)+0.5);
m.t5 = ((Math.sin((m.time+3.1))*0.5)+0.5);
m.t6 = ((Math.sin((m.time+5.2))*0.5)+0.5);
m.t8 = Math.floor(((Math.sin((m.time*2))*2)+3));
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
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.yq = ((m.yp*m.sinang)+(m.zp*m.cosang));
m.zq = ((m.yp*m.cosang)-(m.zp*m.sinang));
m.yq = m.yp;
m.zq = m.zp;
m.ang = ((m.tm*8)+1);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = ((m.xq*m.sinang)+(m.yq*m.cosang));
m.yp = ((m.xq*m.cosang)-(m.yq*m.sinang));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin(((m.tm*2)-0.5))*1.5));
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sinang)+(m.zp*m.cosang));
m.zq = ((m.yp*m.cosang)-(m.zp*m.sinang));
m.ang = (-1.0+Math.cos(((m.tm*3.1)+0.5)));
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = ((m.xq*m.sinang)+(m.yq*m.cosang));
m.yp = ((m.xq*m.cosang)-(m.yq*m.sinang));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos((m.tm*2.3))*1.75)-1.05);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xq = ((m.xp*m.sinang)+(m.zp*m.cosang));
m.yq = m.yp;
m.zq = ((m.xp*m.cosang)-(m.zp*m.sinang));
m.ang = ((Math.cos(m.tm)*0.5)-0.5);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = m.xq;
m.yp = ((m.yq*m.cosang)-(m.zq*m.sinang));
m.zp = ((m.yq*m.sinang)+(m.zq*m.cosang));
m.zp = (m.zp+2);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = ifcond(equal(m.q8, 1), (1-m.sample), m.sample);
m.a = (m.a*above(Math.sin(((m.tm*128)*m.t8)), 0));
m.r = m.t4;
m.g = m.t5;
m.b = m.t6;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=sin(time)*0.5+0.5;\n' + 't2=sin(time+2.1)*0.5+0.5;\n' + 't3=sin(time+4.2)*0.5+0.5;\n' + 't4=sin(time+1.1)*0.5+0.5;\n' + 't5=sin(time+3.1)*0.5+0.5;\n' + 't6=sin(time+5.2)*0.5+0.5;\n' + 't8= int( sin(time*2)*2 + 3);'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=q1 + phs;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=flip*0.1 + (sin(tm)*0.5 + 0.5)*0.2;\n' + 'zp=0;\n' + 'ang=sin(tm*2)*0.5 +0.5;\n' + 'xq=xp;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=tm*8 + 1;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*1.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'ang=-1.0 + cos(tm*3.1 + 0.5);\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2.3)*1.75 - 1.05;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp*sinang + zp*cosang;\n' + 'yq=yp;\n' + 'zq=xp*cosang - zp*sinang;\n' + 'ang=cos(tm)*0.5 - 0.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq;\n' + 'yp=yq*cosang - zq*sinang;\n' + 'zp=yq*sinang + zq*cosang;\n' + 'zp=zp+2;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=if( equal(q8,1) , (1-sample) , sample);\n' + 'a=a* above( sin(tm*128*t8) , 0 );\n' + 'r=t4;\n' + 'g=t5;\n' + 'b=t6;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.1,
			g : 0.3,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.t5 = 0;
m.sinang = 0;
m.t6 = 0;
m.t8 = 0;
m.q8 = 0;
m.flip = 0;
m.n = 0;
m.cosang = 0;
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
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = ((Math.sin(m.time)*0.5)+0.5);
m.t2 = ((Math.sin((m.time+2.1))*0.5)+0.5);
m.t3 = ((Math.sin((m.time+4.2))*0.5)+0.5);
m.t4 = ((Math.sin((m.time+1.1))*0.5)+0.5);
m.t5 = ((Math.sin((m.time+3.1))*0.5)+0.5);
m.t6 = ((Math.sin((m.time+5.2))*0.5)+0.5);
m.t8 = Math.floor(((Math.sin((m.time*2))*2)+3));
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.2);
m.tm = (m.q1+m.phs);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = (((m.flip*0.1)+(((Math.sin(m.tm)*0.5)+0.5)*0.2))+0.1);
m.yp = -m.yp;
m.zp = 0;
m.ang = ((Math.sin((m.tm*2))*0.5)+0.5);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sinang)+(m.zp*m.cosang));
m.zq = ((m.yp*m.cosang)-(m.zp*m.sinang));
m.yq = m.yp;
m.zq = m.zp;
m.ang = ((m.tm*8)+1);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = ((m.xq*m.sinang)+(m.yq*m.cosang));
m.yp = ((m.xq*m.cosang)-(m.yq*m.sinang));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin(((m.tm*2)-0.5))*1.5));
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sinang)+(m.zp*m.cosang));
m.zq = ((m.yp*m.cosang)-(m.zp*m.sinang));
m.ang = (-1.0+Math.cos(((m.tm*3.1)+0.5)));
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = ((m.xq*m.sinang)+(m.yq*m.cosang));
m.yp = ((m.xq*m.cosang)-(m.yq*m.sinang));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos((m.tm*2.3))*1.75)-1.05);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xq = ((m.xp*m.sinang)+(m.zp*m.cosang));
m.yq = m.yp;
m.zq = ((m.xp*m.cosang)-(m.zp*m.sinang));
m.ang = ((Math.cos(m.tm)*0.5)-0.5);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = m.xq;
m.yp = ((m.yq*m.cosang)-(m.zq*m.sinang));
m.zp = ((m.yq*m.sinang)+(m.zq*m.cosang));
m.zp = (m.zp+2);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = ifcond(equal(m.q8, 1), (1-m.sample), m.sample);
m.a = (m.a*m.a);
m.a = (m.a*above(Math.sin(((m.tm*128)*m.t8)), 0));
m.r = m.t4;
m.g = m.t5;
m.b = m.t6;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=sin(time)*0.5+0.5;\n' + 't2=sin(time+2.1)*0.5+0.5;\n' + 't3=sin(time+4.2)*0.5+0.5;\n' + 't4=sin(time+1.1)*0.5+0.5;\n' + 't5=sin(time+3.1)*0.5+0.5;\n' + 't6=sin(time+5.2)*0.5+0.5;\n' + 't8= int( sin(time*2)*2 + 3);'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=q1 + phs;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=flip*0.1 + (sin(tm)*0.5 + 0.5)*0.2 +0.1;\n' + 'yp=-yp;\n' + 'zp=0;\n' + 'ang=sin(tm*2)*0.5 +0.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=tm*8+1;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*1.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'ang=-1.0 + cos(tm*3.1 + 0.5);\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2.3)*1.75 - 1.05;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp*sinang + zp*cosang;\n' + 'yq=yp;\n' + 'zq=xp*cosang - zp*sinang;\n' + 'ang=cos(tm)*0.5 - 0.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq;\n' + 'yp=yq*cosang - zq*sinang;\n' + 'zp=yq*sinang + zq*cosang;\n' + 'zp=zp+2;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=if( equal(q8,1) , (1-sample) , sample);\n' + 'a=a*a;\n' + 'a=a* above( sin(tm*128*t8) , 0 );\n' + 'r=t4;\n' + 'g=t5;\n' + 'b=t6;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.77977,
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
			ang : 0.75398,
			sides : 5.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = Math.sin((m.q1*0.15));
m.x = ((Math.sin((m.q1*0.5))*0.05)+0.5);
m.y = ((Math.cos((m.q1*0.63))*0.05)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=sin(q1*0.15);\n' + 'x=sin(q1*0.5) * 0.05 + 0.5;\n' + 'y=cos(q1*0.63)* 0.05 + 0.5;'),

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
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.6,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.03809,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.sinang = 0;
m.cosang = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.tm = 0;
m.xq = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tm = m.q1;
m.xp = 0;
m.yp = 0.1;
m.zp = 0;
m.ang = ((Math.sin((m.tm*2))*0.5)+0.5);
m.xq = m.xp;
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.yq = ((m.yp*m.sinang)+(m.zp*m.cosang));
m.zq = ((m.yp*m.cosang)-(m.zp*m.sinang));
m.yq = m.yp;
m.zq = m.zp;
m.ang = (m.tm*8);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = ((m.xq*m.sinang)+(m.yq*m.cosang));
m.yp = ((m.xq*m.cosang)-(m.yq*m.sinang));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin(((m.tm*2)-0.5))*1.5));
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sinang)+(m.zp*m.cosang));
m.zq = ((m.yp*m.cosang)-(m.zp*m.sinang));
m.ang = (-1.0+Math.cos(((m.tm*3.1)+0.5)));
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = ((m.xq*m.sinang)+(m.yq*m.cosang));
m.yp = ((m.xq*m.cosang)-(m.yq*m.sinang));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos((m.tm*2.3))*1.75)-1.05);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xq = ((m.xp*m.sinang)+(m.zp*m.cosang));
m.yq = m.yp;
m.zq = ((m.xp*m.cosang)-(m.zp*m.sinang));
m.ang = ((Math.cos(m.tm)*0.5)-0.5);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = m.xq;
m.yp = ((m.yq*m.cosang)-(m.zq*m.sinang));
m.zp = ((m.yq*m.sinang)+(m.zq*m.cosang));
m.zp = (m.zp+2);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tm=q1;\n' + 'xp=0;\n' + 'yp=0.1;\n' + 'zp=0;\n' + 'ang=sin(tm*2 )*0.5 +0.5;\n' + 'xq=xp;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=tm*8;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*1.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'ang=-1.0 + cos(tm*3.1 + 0.5);\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2.3)*1.75 - 1.05;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp*sinang + zp*cosang;\n' + 'yq=yp;\n' + 'zq=xp*cosang - zp*sinang;\n' + 'ang=cos(tm)*0.5 - 0.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq;\n' + 'yp=yq*cosang - zq*sinang;\n' + 'zp=yq*sinang + zq*cosang;\n' + 'zp=zp+2;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 noise_1;\n' + '   vec3 ret_2;\n' + '   vec2 P_3;\n' + '  P_3 = (((\n' + '    (texsize.xy * texsize_noise_lq.zw)\n' + '  .x * uv) / 2.0) + _qf.z);\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = (texture2D (sampler_noise_lq, P_3) + 1.0).xyz;\n' + '  noise_1 = tmpvar_4;\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_blur1, uv);\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = (((tmpvar_5.xyz * scale1) + bias1) - 0.3);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + (tmpvar_6 * 0.01).xy);\n' + '  tmpvar_7 = texture2D (sampler_main, P_8);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9.x = (0.3 * tmpvar_6.x);\n' + '  tmpvar_9.y = tmpvar_6.y;\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = ((uv / 4.0) + (0.4 * tmpvar_9));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '  ret_2 = ((-0.4 * (\n' + '    ((tmpvar_10.xyz * scale1) + bias1)\n' + '   - \n' + '    (noise_1 * 0.1)\n' + '  )) + (tmpvar_7.xyz + (noise_1 * 0.1)));\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = (1.0 - ((0.01 * _qg.w) * (_qg.w * rad)));\n' + '  ret_2 = (ret_2 * (0.98 * (tmpvar_12 * tmpvar_12)));\n' + '  ret_2 = (ret_2 - 0.04);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13.w = 1.0;\n' + '  tmpvar_13.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_13;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec3 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv).xxx;\n' + '  ret_1 = tmpvar_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uv);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur3, uv);\n' + '  ret_1 = ((pow (\n' + '    mix (vec3((((tmpvar_3.xyz * scale1) + bias1).x + ((tmpvar_4.xyz * scale3) + bias3).x)), ret_1, ret_1)\n' + '  , vec3(0.3, 0.9, 8.0)) * 1.25) - 0.25);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_a = 0;\n' + 'vol = (bass_att + treb_att + mid_att)*.333333;\n' + 'tic = min(time-tin,.1);\n' + 'tin = time;\n' + 'ra = 10;\n' + 'treb_avg = tic*(treb_avg*(1/tic - ra) + ra*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - ra) + ra*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - ra) + ra*bass);\n' + 'vav = tic*(vav*(1/tic - ra) + ra*(bass+treb+mid)*.33333);\n' + 'tt = tt + tic*treb_avg;\n' + 'mt = mt + tic*mid_avg;\n' + 'bt = bt + tic*bass_avg;\n' + 'sp = abs(vav - slide)*.1;\n' + 'slide = if(above(slide,vav),slide-tic*sp,slide+tic*sp) + (1-toc)*vav;\n' + 'toc = 1;\n' + 'vt = vt + tic*slide;\n' + 'q1 = bt;\n' + 'q2 = mt;\n' + 'q3 = tt;\n' + 'q4 = slide*1;\n' + 'q5 = vt*.05 + 150;\n' + 'q6 = .01;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
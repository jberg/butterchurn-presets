define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.4,
		ib_g : 0.25,
		mv_x : 0.0,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 43.2,
		wave_scale : 0.012,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.01565,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.99983,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 0.71,
		echo_zoom : 1.007,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.91,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99752,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.oldq2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.400*((0.60*Math.sin((0.933*m.time)))+(0.40*Math.sin((1.045*m.time))))));
m.wave_g = (m.wave_g+(0.100*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((0.956*m.time))))));
m.wave_b = (m.wave_b+(0.100*((0.60*Math.sin((0.910*m.time)))+(0.40*Math.sin((0.920*m.time))))));
m.mv_r = m.wave_r;
m.mv_b = m.wave_b;
m.mv_g = m.wave_g;
m.q1 = (0.05*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps));
m.mv_a = ifcond(above((m.bass-1.2), 1), 1, (m.bass-1.2));
m.q2 = (m.oldq2+(0.05*div(pow(((((((1+(1.2*m.treb))+(0.4*m.treb_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq2 = m.q2;
m.monitor = m.q2;
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+((m.rad*0.1)*m.q1));
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uv);\n' + '  ret_1 = (ret_1 + ((ret_1 - \n' + '    ((tmpvar_3.xyz * scale1) + bias1)\n' + '  ) * 0.2));\n' + '  ret_1 = (ret_1 * 0.9);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   float ang2_1;\n' + '   vec2 uv2_2;\n' + '   vec3 ret_3;\n' + '  ang2_1 = ((ang * 0.1591549) + (time * 0.025));\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = (3.0 + floor((rand_preset.z * 5.95)));\n' + '  ang2_1 = (fract((ang2_1 * tmpvar_4)) / tmpvar_4);\n' + '  ang2_1 = (abs((ang2_1 - \n' + '    (0.5 / tmpvar_4)\n' + '  )) * 6.283185);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = cos(ang2_1);\n' + '  tmpvar_5.y = sin(ang2_1);\n' + '  uv2_2 = (0.5 + ((\n' + '    (0.4 * (rad * sqrt(dot (texsize.xy, texsize.xy))))\n' + '   * tmpvar_5) * texsize.zw));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv2_2);\n' + '  ret_3 = tmpvar_6.xyz;\n' + '  ret_3 = (ret_3 * 1.333);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.400*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );\n' + 'wave_g = wave_g + 0.100*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );\n' + 'wave_b = wave_b + 0.100*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );\n' + 'mv_r = wave_r;\n' + 'mv_b = wave_b;\n' + 'mv_g = wave_g;\n' + 'q1 = 0.05*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'mv_a = if(above(bass-1.2,1),1,bass-1.2);\n' + 'q2 = oldq2 + 0.05*(pow(1+1.2*treb+0.4*treb_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq2 = q2 ;\n' + 'monitor = q2;'),
	'pixel_eqs_str' : ('zoom = zoom + rad*0.1*q1;'),
};

return pmap;
});
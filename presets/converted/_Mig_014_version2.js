define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
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
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.09,
		b2x : 1.0,
		warp : 0.033004,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.02,
		mv_dy : -0.02,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.300001,
		echo_zoom : 1.16936,
		ob_size : 0.05,
		b1ed : 0.25,
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
		ob_a : 0.2999,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.15,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
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
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.vol = 0;
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
m.decay = 1;
m.zoom = 1.1;
m.warp = 0;
m.vol = (((m.bass_att+m.mid_att)+m.treb_att)*0.25);
m.vol = (m.vol*m.vol);
m.mtime = (m.mtime+(m.vol*0.1));
m.q1 = (m.mtime*0.4);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.3,
			g : 0.0,
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
m.t4 = 0;
m.t5 = 0;
m.sinang = 0;
m.t6 = 0;
m.flip = 0;
m.n = 0;
m.cosang = 0;
m.dx = 0;
m.dy = 0;
m.dz = 0;
m.zp = 0;
m.cang = 0;
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

			m.rkeys = ['flip','dx','dy','cang'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = ((Math.sin(m.time)*0.5)+0.5);
m.t2 = ((Math.sin((m.time+2.1))*0.5)+0.5);
m.t3 = ((Math.sin((m.time+4.2))*0.5)+0.5);
m.t4 = ((Math.sin((-m.time+1.1))*0.5)+0.5);
m.t5 = ((Math.sin((-m.time+3.1))*0.5)+0.5);
m.t6 = ((Math.sin((-m.time+5.2))*0.5)+0.5);
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.2);
m.tm = (m.q1+m.phs);
m.flip = ((m.flip+1)*below(m.flip, 1));
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
m.dx = ifcond(m.flip, m.x, (m.dx-m.x));
m.dy = ifcond(m.flip, m.y, (m.dy-m.y));
m.dz = pow(((m.dx*m.dx)+(m.dy*m.dy)), 0.5);
m.ang = Math.abs(Math.asin(div(m.dx,m.dz)));
m.cang = ifcond(m.flip, m.cang, ifcond(below(m.dx, 0), ifcond(below(m.dy, 0), -m.ang, (3.141592654+m.ang)), ifcond(below(m.dy, 0), m.ang, (3.141592654-m.ang))));
m.r = (0.5+(0.5*Math.sin(m.cang)));
m.g = (0.5+(0.5*Math.sin((m.cang+1.047197))));
m.b = (0.5+(0.5*Math.sin((m.cang+2.094395))));
m.a = ((1-m.sample)*above(m.sample, 0));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=sin(time)*0.5+0.5;\n' + 't2=sin(time+2.1)*0.5+0.5;\n' + 't3=sin(time+4.2)*0.5+0.5;\n' + 't4=sin(-time+1.1)*0.5+0.5;\n' + 't5=sin(-time+3.1)*0.5+0.5;\n' + 't6=sin(-time+5.2)*0.5+0.5;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=q1 + phs;\n' + 'flip=(flip+1)*below(flip,1);\n' + 'xp=0;\n' + 'yp=flip*0.1 + (sin(tm)*0.5 + 0.5)*0.2;\n' + 'zp=0;\n' + 'ang=sin(tm*2)*0.5 +0.5;\n' + 'xq=xp;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=tm*8;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*1.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'ang=-1.0 + cos(tm*3.1 + 0.5);\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2.3)*1.75 - 1.05;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp*sinang + zp*cosang;\n' + 'yq=yp;\n' + 'zq=xp*cosang - zp*sinang;\n' + 'ang=cos(tm)*0.5 - 0.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq;\n' + 'yp=yq*cosang - zq*sinang;\n' + 'zp=yq*sinang + zq*cosang;\n' + 'zp=zp+2;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'dx = if(flip,x,dx-x);\n' + 'dy = if(flip,y,dy-y);\n' + 'dz = pow(dx*dx+dy*dy,.5);\n' + 'ang = abs(asin(dx/dz));\n' + 'cang = if(flip,cang,if(below(dx,0),if(below(dy,0),-ang,3.141592654 + ang),if(below(dy,0),ang,3.141592654 - ang)));\n' + 'r = .5 + .5*sin(cang);\n' + 'g = .5 + .5*sin(cang + 1.047197);\n' + 'b = .5 + .5*sin(cang + 2.094395);\n' + 'a=(1-sample)*above(sample,0);'),

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
m.t4 = 0;
m.t5 = 0;
m.sinang = 0;
m.t6 = 0;
m.flip = 0;
m.n = 0;
m.cosang = 0;
m.dx = 0;
m.dy = 0;
m.dz = 0;
m.zp = 0;
m.cang = 0;
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

			m.rkeys = ['flip','dx','dy','cang'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = ((Math.sin(m.time)*0.5)+0.5);
m.t2 = ((Math.sin((m.time+2.1))*0.5)+0.5);
m.t3 = ((Math.sin((m.time+4.2))*0.5)+0.5);
m.t4 = ((Math.sin((-m.time+1.1))*0.5)+0.5);
m.t5 = ((Math.sin((-m.time+3.1))*0.5)+0.5);
m.t6 = ((Math.sin((-m.time+5.2))*0.5)+0.5);
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
m.dx = ifcond(m.flip, m.x, (m.dx-m.x));
m.dy = ifcond(m.flip, m.y, (m.dy-m.y));
m.dz = pow(((m.dx*m.dx)+(m.dy*m.dy)), 0.5);
m.ang = Math.abs(Math.asin(div(m.dx,m.dz)));
m.cang = ifcond(m.flip, m.cang, ifcond(below(m.dx, 0), ifcond(below(m.dy, 0), -m.ang, (3.141592654+m.ang)), ifcond(below(m.dy, 0), m.ang, (3.141592654-m.ang))));
m.r = (0.5+(0.5*Math.sin(m.cang)));
m.g = (0.5+(0.5*Math.sin((m.cang+1.047197))));
m.b = (0.5+(0.5*Math.sin((m.cang+2.094395))));
m.a = ((1-m.sample)*above(m.sample, 0));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=sin(time)*0.5+0.5;\n' + 't2=sin(time+2.1)*0.5+0.5;\n' + 't3=sin(time+4.2)*0.5+0.5;\n' + 't4=sin(-time+1.1)*0.5+0.5;\n' + 't5=sin(-time+3.1)*0.5+0.5;\n' + 't6=sin(-time+5.2)*0.5+0.5;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=q1 + phs;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=flip*0.1 + (sin(tm)*0.5 + 0.5)*0.2 +0.1;\n' + 'yp=-yp;\n' + 'zp=0;\n' + 'ang=sin(tm*2)*0.5 +0.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=tm*8;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*1.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'ang=-1.0 + cos(tm*3.1 + 0.5);\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2.3)*1.75 - 1.05;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp*sinang + zp*cosang;\n' + 'yq=yp;\n' + 'zq=xp*cosang - zp*sinang;\n' + 'ang=cos(tm)*0.5 - 0.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq;\n' + 'yp=yq*cosang - zq*sinang;\n' + 'zp=yq*sinang + zq*cosang;\n' + 'zp=zp+2;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'dx = if(flip,x,dx-x);\n' + 'dy = if(flip,y,dy-y);\n' + 'dz = pow(dx*dx+dy*dy,.5);\n' + 'ang = abs(asin(dx/dz));\n' + 'cang = if(flip,cang,if(below(dx,0),if(below(dy,0),-ang,3.141592654 + ang),if(below(dy,0),ang,3.141592654 - ang)));\n' + 'r = .5 + .5*sin(cang);\n' + 'g = .5 + .5*sin(cang + 1.047197);\n' + 'b = .5 + .5*sin(cang + 2.094395);\n' + 'a=(1-sample)*above(sample,0);'),

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
			enabled : 0.0,
			b : 1.0,
			tex_ang : 1.570796,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.250054,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 3.998815,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.741858,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
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
			rad : 1.0677,
			x : 0.5,
			y : 0.5,
			ang : 0.753982,
			sides : 5.0,
			border_r : 1.0,
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

		}
],
	'warp' : ('shader_body {\n' + '   vec4 N_1;\n' + '   vec3 ret_2;\n' + '   vec2 P_3;\n' + '  P_3 = (rand_frame.xy + ((uv * texsize_noise_lq.zw) * texsize.xy));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = ((texture2D (sampler_noise_lq, P_3) * 2.0) - 1.0);\n' + '  N_1 = tmpvar_4;\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv + ((N_1.zw * texsize.zw) * 0.5));\n' + '  tmpvar_5 = texture2D (sampler_pw_main, P_6);\n' + '  ret_2 = tmpvar_5.xyz;\n' + '  ret_2 = (ret_2 + ((0.59 - \n' + '    (0.2 * rad)\n' + '  ) * N_1.xyz));\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = clamp (((\n' + '    (ret_2 - 0.5)\n' + '   * 3.0) + 0.25), 0.0, 1.0);\n' + '  ret_2.x = tmpvar_7.x;\n' + '  ret_2.yz = tmpvar_7.xx;\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '  uv_1 = (0.05 + (0.9 * uv));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv_1);\n' + '  ret_2 = tmpvar_3.xyz;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv_1);\n' + '  ret_2 = (abs((\n' + '    ((tmpvar_4.xyz * scale1) + bias1)\n' + '   - ret_2)) * 6.0);\n' + '  ret_2 = (ret_2 * 1.333);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=1;\n' + 'zoom=1.1;\n' + 'warp = 0;\n' + 'vol=(bass_att+mid_att+treb_att)*0.25;\n' + 'vol=vol*vol;\n' + 'mtime=mtime+vol*0.1;\n' + 'q1=mtime*0.4;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 0.4,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.007,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.012,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 1.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 0.9,
		echo_zoom : 1.0,
		ob_size : 0.01,
		b1ed : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 1.459,
		wave_dots : 1.0,
		mv_g : 0.44,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.0,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.25,
		mv_r : 0.39,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.index2 = 0;
m.q1 = 0;
m.index3 = 0;
m.p1 = 0;
m.q2 = 0;
m.p2 = 0;
m.q3 = 0;
m.p3 = 0;
m.q4 = 0;
m.k1 = 0;
m.is_beat = 0;
m.dec_med = 0;
m.q20 = 0;
m.q21 = 0;
m.q22 = 0;
m.index = 0;
m.q23 = 0;
m.avg = 0;
m.q24 = 0;
m.q25 = 0;
m.q26 = 0;
m.q27 = 0;
m.beat = 0;
m.q28 = 0;
m.q29 = 0;
m.rot1 = 0;
m.t0 = 0;
m.rott = 0;
m.dx1 = 0;
m.dec_slow = 0;
m.peak = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.96, div(30,m.fps));
m.dec_slow = pow(0.99, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.5+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),4);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),8);
m.index3 = mod((m.index3+((m.is_beat*bnot(m.index))*bnot(m.index2))),3);
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.q24 = m.is_beat;
m.q26 = ((m.bass+m.mid)+m.treb);
m.k1 = (m.is_beat*equal(m.index, 0));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.p3 = ((m.dec_med*m.p3)+((1-m.dec_med)*m.p2));
m.rott = div((m.p3*3.1416),2);
m.rot1 = (m.rot1+m.q26);
m.q25 = (0.01*m.rot1);
m.q27 = (8-m.index);
m.q28 = m.index3;
m.dx1 = ((m.dec_med*m.dx1)+((1-m.dec_med)*bnot(m.index2)));
m.q29 = m.dx1;
m.monitor = m.q29;
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = 0;
m.dx = (0.02*m.q29);
m.zoom = 1;
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.7,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.3,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.r2 = 0;
m.g1 = 0;
m.g2 = 0;
m.flip = 0;
m.n = 0;
m.b1 = 0;
m.b2 = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.xq = 0;
m.ang = 0;
m.ys = 0;
m.phase = 0;
m.xs = 0;
m.fade = 0;
m.spark = 0;
m.r1 = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.phase = ((((Math.sin((m.n*3))*Math.sin((m.n*7.9)))*Math.sin((m.n*16.7)))*Math.sin((m.n*63.5)))*6);
m.xp = Math.sin((m.n+m.phase));
m.yp = Math.cos((m.n+m.phase));
m.zp = 0;
m.ang = ((m.n*2)+m.phase);
m.xq = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yq = m.yp;
m.zq = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.r1 = 0.1;
m.g1 = 0.3;
m.b1 = 1;
m.r2 = 0.7;
m.g2 = 0.1;
m.b2 = 1.0;
m.fade = ((m.xq*0.5)+0.5);
m.r = ((m.r1*m.fade)+(m.r2*(1-m.fade)));
m.g = ((m.g1*m.fade)+(m.g2*(1-m.fade)));
m.b = ((m.b1*m.fade)+(m.b2*(1-m.fade)));
m.ang = (m.time*0.1);
m.xp = ((m.xq*Math.sin(m.ang))+(m.zq*Math.cos(m.ang)));
m.yp = m.yq;
m.zp = ((m.xq*Math.cos(m.ang))-(m.zq*Math.sin(m.ang)));
m.ang = (m.time*0.17);
m.xq = m.xp;
m.yq = ((m.yp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.zq = ((m.yp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.zq = (m.zq+3.1);
m.xs = div(m.xq,m.zq);
m.ys = div(m.yq,m.zq);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = ((1*0.3)*pow(((Math.sin(((m.n*4)+m.time))*0.5)+0.5), 2));
m.spark = Math.sin((m.phase*35));
m.r = ifcond(above(m.spark, 0.93), 0.6, m.r);
m.g = ifcond(above(m.spark, 0.93), 0.8, m.g);
m.b = ifcond(above(m.spark, 0.93), 1.0, m.b);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'phase=sin(n*3)*sin(n*7.9)*sin(n*16.7)*sin(n*63.5)*6;\n' + 'xp=sin(n+phase);\n' + 'yp=cos(n+phase);\n' + 'zp=0;\n' + 'ang=n*2+phase;\n' + 'xq=xp*sin(ang) + zp*cos(ang);\n' + 'yq=yp;\n' + 'zq=xp*cos(ang) - zp*sin(ang);\n' + 'r1=0.1;\n' + 'g1=0.3;\n' + 'b1=1;\n' + 'r2=0.7;\n' + 'g2=0.1;\n' + 'b2=1.0;\n' + 'fade=xq*0.5 + 0.5;\n' + 'r=r1*fade + r2*(1-fade);\n' + 'g=g1*fade + g2*(1-fade);\n' + 'b=b1*fade + b2*(1-fade);\n' + 'ang=time*0.1;\n' + 'xp=xq*sin(ang) + zq*cos(ang);\n' + 'yp=yq;\n' + 'zp=xq*cos(ang) - zq*sin(ang);\n' + 'ang=time*0.17;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'zq=zq+3.1;\n' + 'xs=xq/zq;\n' + 'ys=yq/zq;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1)*0.3 * (pow(sin(n*4+time)*0.5+0.5,2));\n' + 'spark=sin(phase*35);\n' + 'r=if( above(spark,0.93) , 0.6 , r);\n' + 'g=if( above(spark,0.93) , 0.8 , g);\n' + 'b=if( above(spark,0.93) , 1.0 , b);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
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
m.r2 = 0;
m.g1 = 0;
m.g2 = 0;
m.flip = 0;
m.n = 0;
m.b1 = 0;
m.b2 = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.xq = 0;
m.wave = 0;
m.ang = 0;
m.ys = 0;
m.phase = 0;
m.xs = 0;
m.fade = 0;
m.r1 = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = ((m.sample*0.03)+(m.time*0.01));
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.phase = ((((Math.sin((m.n*3))*Math.sin((m.n*7.9)))*Math.sin((m.n*16.7)))*Math.sin((m.n*63.5)))*6);
m.xp = Math.sin((m.n+m.phase));
m.yp = Math.cos((m.n+m.phase));
m.zp = 0;
m.ang = ((m.n*2)+m.phase);
m.xq = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yq = m.yp;
m.zq = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.r1 = 0.1;
m.g1 = 0.3;
m.b1 = 1;
m.r2 = 1.0;
m.g2 = 0.1;
m.b2 = 0.5;
m.fade = ((m.xq*0.5)+0.5);
m.r = ((m.r1*m.fade)+(m.r2*(1-m.fade)));
m.g = ((m.g1*m.fade)+(m.g2*(1-m.fade)));
m.b = ((m.b1*m.fade)+(m.b2*(1-m.fade)));
m.ang = (m.time*0.1);
m.xp = ((m.xq*Math.sin(m.ang))+(m.zq*Math.cos(m.ang)));
m.yp = m.yq;
m.zp = ((m.xq*Math.cos(m.ang))-(m.zq*Math.sin(m.ang)));
m.ang = (m.time*0.17);
m.xq = m.xp;
m.yq = ((m.yp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.zq = ((m.yp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.zq = (m.zq+3.1);
m.xs = div(m.xq,m.zq);
m.ys = div(m.yq,m.zq);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.wave = ((((Math.sin((m.n*8000))*Math.sin((m.n*690)))*Math.sin((m.n*17000)))*0.5)+0.5);
m.a = ((m.sample*m.wave)*0.4);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*0.03+time*0.01;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'phase=sin(n*3)*sin(n*7.9)*sin(n*16.7)*sin(n*63.5)*6;\n' + 'xp=sin(n+phase);\n' + 'yp=cos(n+phase);\n' + 'zp=0;\n' + 'ang=n*2+phase;\n' + 'xq=xp*sin(ang) + zp*cos(ang);\n' + 'yq=yp;\n' + 'zq=xp*cos(ang) - zp*sin(ang);\n' + 'r1=0.1;\n' + 'g1=0.3;\n' + 'b1=1;\n' + 'r2=1.0;\n' + 'g2=0.1;\n' + 'b2=0.5;\n' + 'fade=xq*0.5 + 0.5;\n' + 'r=r1*fade + r2*(1-fade);\n' + 'g=g1*fade + g2*(1-fade);\n' + 'b=b1*fade + b2*(1-fade);\n' + 'ang=time*0.1;\n' + 'xp=xq*sin(ang) + zq*cos(ang);\n' + 'yp=yq;\n' + 'zp=xq*cos(ang) - zq*sin(ang);\n' + 'ang=time*0.17;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'zq=zq+3.1;\n' + 'xs=xq/zq;\n' + 'ys=yq/zq;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'wave=sin(n*8000)*sin(n*690)*sin(n*17000)*0.5+0.5;\n' + 'a=sample*wave*0.4;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
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
m.r2 = 0;
m.g1 = 0;
m.g2 = 0;
m.flip = 0;
m.n = 0;
m.b1 = 0;
m.b2 = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.xq = 0;
m.wave = 0;
m.ang = 0;
m.ys = 0;
m.phase = 0;
m.xs = 0;
m.fade = 0;
m.r1 = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (((m.sample*0.03)+(m.time*0.01))+2.1);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.phase = ((((Math.sin((m.n*3))*Math.sin((m.n*7.9)))*Math.sin((m.n*16.7)))*Math.sin((m.n*63.5)))*6);
m.xp = Math.sin((m.n+m.phase));
m.yp = Math.cos((m.n+m.phase));
m.zp = 0;
m.ang = ((m.n*2)+m.phase);
m.xq = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yq = m.yp;
m.zq = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.r1 = 0.1;
m.g1 = 0.3;
m.b1 = 1;
m.r2 = 1.0;
m.g2 = 0.1;
m.b2 = 0.5;
m.fade = ((m.xq*0.5)+0.5);
m.r = ((m.r1*m.fade)+(m.r2*(1-m.fade)));
m.g = ((m.g1*m.fade)+(m.g2*(1-m.fade)));
m.b = ((m.b1*m.fade)+(m.b2*(1-m.fade)));
m.ang = (m.time*0.1);
m.xp = ((m.xq*Math.sin(m.ang))+(m.zq*Math.cos(m.ang)));
m.yp = m.yq;
m.zp = ((m.xq*Math.cos(m.ang))-(m.zq*Math.sin(m.ang)));
m.ang = (m.time*0.17);
m.xq = m.xp;
m.yq = ((m.yp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.zq = ((m.yp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.zq = (m.zq+3.1);
m.xs = div(m.xq,m.zq);
m.ys = div(m.yq,m.zq);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.wave = ((((Math.sin((m.n*8000))*Math.sin((m.n*690)))*Math.sin((m.n*17000)))*0.5)+0.5);
m.a = ((m.sample*m.wave)*0.4);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*0.03+time*0.01+2.1;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'phase=sin(n*3)*sin(n*7.9)*sin(n*16.7)*sin(n*63.5)*6;\n' + 'xp=sin(n+phase);\n' + 'yp=cos(n+phase);\n' + 'zp=0;\n' + 'ang=n*2+phase;\n' + 'xq=xp*sin(ang) + zp*cos(ang);\n' + 'yq=yp;\n' + 'zq=xp*cos(ang) - zp*sin(ang);\n' + 'r1=0.1;\n' + 'g1=0.3;\n' + 'b1=1;\n' + 'r2=1.0;\n' + 'g2=0.1;\n' + 'b2=0.5;\n' + 'fade=xq*0.5 + 0.5;\n' + 'r=r1*fade + r2*(1-fade);\n' + 'g=g1*fade + g2*(1-fade);\n' + 'b=b1*fade + b2*(1-fade);\n' + 'ang=time*0.1;\n' + 'xp=xq*sin(ang) + zq*cos(ang);\n' + 'yp=yq;\n' + 'zp=xq*cos(ang) - zq*sin(ang);\n' + 'ang=time*0.17;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'zq=zq+3.1;\n' + 'xs=xq/zq;\n' + 'ys=yq/zq;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'wave=sin(n*8000)*sin(n*690)*sin(n*17000)*0.5+0.5;\n' + 'a=sample*wave*0.4;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
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
m.r2 = 0;
m.g1 = 0;
m.g2 = 0;
m.flip = 0;
m.n = 0;
m.b1 = 0;
m.b2 = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.xq = 0;
m.wave = 0;
m.ang = 0;
m.ys = 0;
m.phase = 0;
m.xs = 0;
m.fade = 0;
m.r1 = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (((m.sample*0.03)+(m.time*0.01))+4.2);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.phase = ((((Math.sin((m.n*3))*Math.sin((m.n*7.9)))*Math.sin((m.n*16.7)))*Math.sin((m.n*63.5)))*6);
m.xp = Math.sin((m.n+m.phase));
m.yp = Math.cos((m.n+m.phase));
m.zp = 0;
m.ang = ((m.n*2)+m.phase);
m.xq = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yq = m.yp;
m.zq = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.r1 = 0.1;
m.g1 = 0.3;
m.b1 = 1;
m.r2 = 1.0;
m.g2 = 0.1;
m.b2 = 0.5;
m.fade = ((m.xq*0.5)+0.5);
m.r = ((m.r1*m.fade)+(m.r2*(1-m.fade)));
m.g = ((m.g1*m.fade)+(m.g2*(1-m.fade)));
m.b = ((m.b1*m.fade)+(m.b2*(1-m.fade)));
m.ang = (m.time*0.1);
m.xp = ((m.xq*Math.sin(m.ang))+(m.zq*Math.cos(m.ang)));
m.yp = m.yq;
m.zp = ((m.xq*Math.cos(m.ang))-(m.zq*Math.sin(m.ang)));
m.ang = (m.time*0.17);
m.xq = m.xp;
m.yq = ((m.yp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.zq = ((m.yp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.zq = (m.zq+3.1);
m.xs = div(m.xq,m.zq);
m.ys = div(m.yq,m.zq);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.wave = ((((Math.sin((m.n*8000))*Math.sin((m.n*690)))*Math.sin((m.n*17000)))*0.5)+0.5);
m.a = ((m.sample*m.wave)*0.4);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*0.03+time*0.01+4.2;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'phase=sin(n*3)*sin(n*7.9)*sin(n*16.7)*sin(n*63.5)*6;\n' + 'xp=sin(n+phase);\n' + 'yp=cos(n+phase);\n' + 'zp=0;\n' + 'ang=n*2+phase;\n' + 'xq=xp*sin(ang) + zp*cos(ang);\n' + 'yq=yp;\n' + 'zq=xp*cos(ang) - zp*sin(ang);\n' + 'r1=0.1;\n' + 'g1=0.3;\n' + 'b1=1;\n' + 'r2=1.0;\n' + 'g2=0.1;\n' + 'b2=0.5;\n' + 'fade=xq*0.5 + 0.5;\n' + 'r=r1*fade + r2*(1-fade);\n' + 'g=g1*fade + g2*(1-fade);\n' + 'b=b1*fade + b2*(1-fade);\n' + 'ang=time*0.1;\n' + 'xp=xq*sin(ang) + zq*cos(ang);\n' + 'yp=yq;\n' + 'zp=xq*cos(ang) - zq*sin(ang);\n' + 'ang=time*0.17;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'zq=zq+3.1;\n' + 'xs=xq/zq;\n' + 'ys=yq/zq;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'wave=sin(n*8000)*sin(n*690)*sin(n*17000)*0.5+0.5;\n' + 'a=sample*wave*0.4;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.08,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.8,
			textured : 1.0,
			g2 : 0.5,
			tex_zoom : 1.62835,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.3,
			border_g : 1.0,
			rad : 0.13478,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 15.0,
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
			a : 0.38,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.6,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.3,
			border_g : 1.0,
			rad : 0.1016,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 11.0,
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
			enabled : 1.0,
			b : 0.8,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.2,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.5,
			border_g : 1.0,
			rad : 0.94761,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 10.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.a = (((m.mid_att*m.mid_att)*m.mid)*0.002);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a=mid_att*mid_att*mid*0.002;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.2,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.04027,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.01,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.1);
m.a = (m.mid*m.mid_att);
m.a = Math.min(m.a, 1);
m.a = (1-((m.a*0.4)*above(m.treb, 0.9)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=time*0.1;\n' + 'a=mid*mid_att;\n' + 'a=min(a,1);\n' + 'a=1-a*0.4 * above(treb,0.9);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 crisp_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (((uv - vec2(0.5, 0.5)) * texsize.xy) * 0.015);\n' + '  uv_1 = (uv + ((\n' + '    ((clamp ((\n' + '      sin(tmpvar_3)\n' + '     / \n' + '      cos(tmpvar_3)\n' + '    ), vec2(-12.0, -12.0), vec2(12.0, 12.0)) * cos((\n' + '      (4.0 * (_qa.y + 1.0))\n' + '     * tmpvar_3.yx))) * texsize.zw)\n' + '   * 4.0) * (2.0 + _qa.x)));\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_main, uv_1).xyz;\n' + '  crisp_2 = tmpvar_4;\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = (((0.985 * crisp_2) + vec3(0.01, 0.01, 0.01)) - 0.02);\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 crisp_1;\n' + '   vec2 uv3_2;\n' + '   vec2 uv2_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = ((uv - 0.5) * aspect.xy);\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = (0.15 / (sqrt(\n' + '    dot (tmpvar_4, tmpvar_4)\n' + '  ) + 0.2));\n' + '   vec2 tmpvar_6;\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (ang / 3.14);\n' + '  tmpvar_6.x = tmpvar_7;\n' + '  tmpvar_6.y = tmpvar_5;\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = (0.15 * time);\n' + '  uv2_3.y = (tmpvar_5 + tmpvar_8);\n' + '  uv2_3.x = tmpvar_6.x;\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9.x = tmpvar_7;\n' + '  tmpvar_9.y = (tmpvar_5 * 1.5);\n' + '  uv3_2.y = (tmpvar_9.y + tmpvar_8);\n' + '  uv3_2.x = (tmpvar_7 + (time / 32.0));\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = ((2.0 * texture2D (sampler_main, uv2_3).xyz) + texture2D (sampler_main, uv3_2).xyz);\n' + '  crisp_1 = tmpvar_10;\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = fract(uv2_3);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_blur2, tmpvar_11);\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = fract(uv3_2);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur2, tmpvar_13);\n' + '  crisp_1 = (crisp_1 + ((2.0 * \n' + '    ((tmpvar_12.xyz * scale2) + bias2)\n' + '  ) + (2.0 * \n' + '    ((tmpvar_14.xyz * scale2) + bias2)\n' + '  )));\n' + '  crisp_1 = ((3.5 * crisp_1) * rad);\n' + '   float tmpvar_15;\n' + '  tmpvar_15 = clamp ((1.0 - (200.0 * rad)), 0.0, 1.0);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17.w = 1.0;\n' + '  tmpvar_17.xyz = ((crisp_1 + (\n' + '    ((vec3(0.0, 0.0, 1.0) * uv.y) * pow ((1.0 - rad), 8.0))\n' + '   * tmpvar_15)) + (tmpvar_15 * tmpvar_16.xyz));\n' + '  vec4 ret4 = tmpvar_17;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('dec_med = pow (0.96, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %4;\n' + 'index2 = (index2 + is_beat*bnot(index))%8;\n' + 'index3 = (index3 + is_beat*bnot(index)*bnot(index2))%3;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = bass + mid + treb;\n' + 'k1 =  is_beat*equal(index,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'p3 = dec_med * p3+ (1-dec_med)*p2;\n' + 'rott = p3*3.1416/2;\n' + 'rot1 = rot1 + q26;\n' + 'q25 = .01*rot1;\n' + 'q27 = 8-index;\n' + 'q28 = index3;\n' + 'dx1 = dec_med*dx1 + (1-dec_med)*bnot(index2);\n' + 'q29 = dx1;\n' + 'monitor = q29;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;'),
	'pixel_eqs_str' : ('rot = 0;\n' + 'dx = .02*q29;\n' + 'zoom = 1;'),
};

return pmap;
});
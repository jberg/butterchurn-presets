define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.980001,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.006761,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.22891,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 0.999998,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 0.4999,
		echo_zoom : 0.999999,
		ob_size : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.459526,
		wave_dots : 0.0,
		mv_g : 0.4999,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999902,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : -1.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.2,
		decay : 0.9,
		wave_a : 0.3116,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.4999,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.q7 = 0;
m.q8 = 0;
m.vol = 0;
m.mtime = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 1;
m.vol = (((m.bass+m.mid)+m.treb)*0.25);
m.vol = (m.vol*m.vol);
m.mtime = (m.mtime+((m.vol*0.018)*div(70,m.fps)));
m.q7 = m.mtime;
m.q8 = m.vol;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (-1.02+(m.rad*10));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.8,
			g : 0.9,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q7 = 0;
m.q8 = 0;
m.scale = 0;
m.aflux = 0;
m.n = 0;
m.zp = 0;
m.yp = 0;
m.freq = 0;
m.xp = 0;
m.xp2 = 0;
m.ang = 0;
m.ys = 0;
m.xp3 = 0;
m.xs = 0;
m.yp2 = 0;
m.zp2 = 0;
m.yp3 = 0;
m.zp3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.freq = ((Math.sin((m.q7*0.5))*4)+4);
m.scale = ((Math.sin((m.n*m.freq))*0.3)+0.7);
m.xp = ((Math.sin((m.n*1))*0.3)*m.scale);
m.yp = ((Math.cos((m.n*1))*0.3)*m.scale);
m.zp = Math.abs((Math.sin(((m.n*m.freq)+m.time))*0.1));
m.ang = ((m.q7+(m.time*0.01))*0.2);
m.xp2 = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yp2 = m.yp;
m.zp2 = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = ((m.q7+(m.time*0.01))*0.3);
m.xp3 = m.xp2;
m.yp3 = ((m.yp2*Math.sin(m.ang))+(m.zp2*Math.cos(m.ang)));
m.zp3 = ((m.yp2*Math.cos(m.ang))-(m.zp2*Math.sin(m.ang)));
m.xp = m.xp3;
m.yp = m.yp3;
m.zp = m.zp3;
m.zp = (m.zp+2.1);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.aflux = ((Math.sin(((m.n*8)+m.time))*0.5)+0.5);
m.a = (1-(((m.aflux*m.aflux)*m.q8)*3));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'freq=sin(q7*0.5)*4+4;\n' + 'scale=sin(n*freq)*0.3+0.7;\n' + 'xp=sin(n*1)*0.3*scale;\n' + 'yp=cos(n*1)*0.3*scale;\n' + 'zp=abs(sin(n*freq+time)*0.1);\n' + 'ang=(q7+time*0.01)*0.2;\n' + 'xp2=xp*sin(ang) + zp*cos(ang);\n' + 'yp2=yp;\n' + 'zp2=xp*cos(ang) - zp*sin(ang);\n' + 'ang=(q7+time*0.01)*0.3;\n' + 'xp3=xp2;\n' + 'yp3=yp2*sin(ang) + zp2*cos(ang);\n' + 'zp3=yp2*cos(ang) - zp2*sin(ang);\n' + 'xp=xp3;\n' + 'yp=yp3;\n' + 'zp=zp3;\n' + 'zp=zp+2.1;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'aflux=sin(n*8+time)*0.5+0.5;\n' + 'a=1 - (aflux*aflux)*q8*3;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.7,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q7 = 0;
m.q8 = 0;
m.scale = 0;
m.aflux = 0;
m.n = 0;
m.zp = 0;
m.yp = 0;
m.freq = 0;
m.xp = 0;
m.xp2 = 0;
m.ang = 0;
m.ys = 0;
m.xp3 = 0;
m.xs = 0;
m.yp2 = 0;
m.zp2 = 0;
m.yp3 = 0;
m.zp3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.freq = ((Math.sin((m.q7*0.5))*4)+4);
m.scale = ((Math.sin((m.n*m.freq))*0.3)+0.7);
m.xp = ((Math.sin((m.n*1))*0.3)*m.scale);
m.yp = ((Math.cos((m.n*1))*0.3)*m.scale);
m.zp = -Math.abs((Math.sin(((m.n*m.freq)+m.time))*0.1));
m.ang = ((m.q7+(m.time*0.01))*0.2);
m.xp2 = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yp2 = m.yp;
m.zp2 = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = ((m.q7+(m.time*0.01))*0.3);
m.xp3 = m.xp2;
m.yp3 = ((m.yp2*Math.sin(m.ang))+(m.zp2*Math.cos(m.ang)));
m.zp3 = ((m.yp2*Math.cos(m.ang))-(m.zp2*Math.sin(m.ang)));
m.xp = m.xp3;
m.yp = m.yp3;
m.zp = m.zp3;
m.zp = (m.zp+2.1);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.aflux = ((Math.sin(((m.n*8)+m.time))*0.5)+0.5);
m.a = (1-(((m.aflux*m.aflux)*m.q8)*3));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'freq=sin(q7*0.5)*4+4;\n' + 'scale=sin(n*freq)*0.3+0.7;\n' + 'xp=sin(n*1)*0.3*scale;\n' + 'yp=cos(n*1)*0.3*scale;\n' + 'zp=-abs(sin(n*freq+time)*0.1);\n' + 'ang=(q7+time*0.01)*0.2;\n' + 'xp2=xp*sin(ang) + zp*cos(ang);\n' + 'yp2=yp;\n' + 'zp2=xp*cos(ang) - zp*sin(ang);\n' + 'ang=(q7+time*0.01)*0.3;\n' + 'xp3=xp2;\n' + 'yp3=yp2*sin(ang) + zp2*cos(ang);\n' + 'zp3=yp2*cos(ang) - zp2*sin(ang);\n' + 'xp=xp3;\n' + 'yp=yp3;\n' + 'zp=zp3;\n' + 'zp=zp+2.1;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'aflux=sin(n*8+time)*0.5+0.5;\n' + 'a=1 - (aflux*aflux)*q8*3;'),

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
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q7 = 0;
m.scale = 0;
m.aflux = 0;
m.n = 0;
m.zp = 0;
m.yp = 0;
m.freq = 0;
m.xp = 0;
m.xp2 = 0;
m.ang = 0;
m.ys = 0;
m.xp3 = 0;
m.xs = 0;
m.yp2 = 0;
m.zp2 = 0;
m.yp3 = 0;
m.zp3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.freq = ((Math.sin((m.q7*0.5))*4)+4);
m.aflux = Math.sin((m.n*0.5));
m.scale = ((Math.sin((m.n*m.freq))*0.3)+0.7);
m.xp = (rand(10)-5);
m.xp = ((m.xp*0.0008)*m.aflux);
m.yp = (rand(10)-5);
m.yp = ((m.yp*0.0008)*m.aflux);
m.zp = ((m.sample*3)-1.5);
m.ang = ((m.q7+(m.time*0.01))*0.2);
m.xp2 = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yp2 = m.yp;
m.zp2 = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = ((m.q7+(m.time*0.01))*0.3);
m.xp3 = m.xp2;
m.yp3 = ((m.yp2*Math.sin(m.ang))+(m.zp2*Math.cos(m.ang)));
m.zp3 = ((m.yp2*Math.cos(m.ang))-(m.zp2*Math.sin(m.ang)));
m.xp = m.xp3;
m.yp = m.yp3;
m.zp = m.zp3;
m.zp = (m.zp+2.1);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = m.aflux;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'freq=sin(q7*0.5)*4+4;\n' + 'aflux=sin(n*0.5);\n' + 'scale=sin(n*freq)*0.3+0.7;\n' + 'xp=rand(10)-5;\n' + 'xp=xp*0.0008*aflux;\n' + 'yp=rand(10)-5;\n' + 'yp=yp*0.0008*aflux;\n' + 'zp=sample*3-1.5;\n' + 'ang=(q7+time*0.01)*0.2;\n' + 'xp2=xp*sin(ang) + zp*cos(ang);\n' + 'yp2=yp;\n' + 'zp2=xp*cos(ang) - zp*sin(ang);\n' + 'ang=(q7+time*0.01)*0.3;\n' + 'xp3=xp2;\n' + 'yp3=yp2*sin(ang) + zp2*cos(ang);\n' + 'zp3=yp2*cos(ang) - zp2*sin(ang);\n' + 'xp=xp3;\n' + 'yp=yp3;\n' + 'zp=zp3;\n' + 'zp=zp+2.1;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=aflux;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.15,
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
m.yspark = 0;
m.zran = 0;
m.xspark = 0;
m.alp = 0;
m.yran = 0;
m.q7 = 0;
m.xran = 0;
m.sparkcycle = 0;
m.xseed = 0;
m.scale = 0;
m.aflux = 0;
m.yseed = 0;
m.n = 0;
m.offran = 0;
m.zp = 0;
m.yp = 0;
m.freq = 0;
m.xp = 0;
m.xp2 = 0;
m.ang = 0;
m.ys = 0;
m.xp3 = 0;
m.xs = 0;
m.yp2 = 0;
m.zp2 = 0;
m.yp3 = 0;
m.t1 = 0;
m.spark = 0;
m.zp3 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['t2','t3'];
			return m;
		},
		'frame_eqs' : function(m) {
m.spark = rand(40);
m.spark = above(m.spark, 37);
m.t1 = m.spark;
m.t2 = 0;
m.t3 = 0;
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.offran = (1-(m.t1*0.1));
m.sparkcycle = above(Math.sin((m.n*2)), 0);
m.zran = (rand(8)-4);
m.xran = (rand(8)-4);
m.yran = (rand(8)-4);
m.alp = Math.min((1-Math.abs((m.zran*0.25))), Math.min((1-Math.abs((m.xran*0.25))), (1-Math.abs((m.yran*0.25)))));
m.alp = (m.alp*m.alp);
m.a = ((m.alp*(1-m.t1))+m.t1);
m.zran = ((m.zran*0.001)*m.offran);
m.xran = ((m.xran*0.001)*m.offran);
m.yran = ((m.yran*0.001)*m.offran);
m.xseed = (Math.sin(((m.sample*3.14)+(m.time*15)))+(Math.sin((m.sample*11))*0.4));
m.yseed = (Math.cos(((m.sample*3.14)+(m.time*9)))+(Math.sin(((m.sample*17)+m.time))*0.4));
m.t2 = (m.t2+(m.xseed*m.sparkcycle));
m.t3 = (m.t3+(m.yseed*m.sparkcycle));
m.xspark = (m.t2*0.002);
m.yspark = (m.t3*0.008);
m.scale = ((Math.sin((m.n*m.freq))*0.3)+0.7);
m.zp = (Math.sin(m.time)+m.zran);
m.zp = (m.zp+((m.yspark*m.t1)*m.sparkcycle));
m.aflux = Math.sin(((m.zp*3.14)+3.14));
m.xp = (((Math.sin(m.n)*0.1)*m.aflux)+m.xran);
m.xp = (m.xp+((m.xspark*m.t1)*m.sparkcycle));
m.yp = (((Math.cos(m.n)*0.1)*m.aflux)+m.yran);
m.ang = ((m.q7+(m.time*0.01))*0.2);
m.xp2 = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yp2 = m.yp;
m.zp2 = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = ((m.q7+(m.time*0.01))*0.3);
m.xp3 = m.xp2;
m.yp3 = ((m.yp2*Math.sin(m.ang))+(m.zp2*Math.cos(m.ang)));
m.zp3 = ((m.yp2*Math.cos(m.ang))-(m.zp2*Math.sin(m.ang)));
m.xp = m.xp3;
m.yp = m.yp3;
m.zp = m.zp3;
m.zp = (m.zp+2.1);
m.xs = div(m.xp,m.zp);
m.xs = (m.xs+0.5);
m.ys = div(m.yp,m.zp);
m.ys = ((m.ys*1.3)+0.5);
m.x = m.xs;
m.y = m.ys;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('spark=rand(40);\n' + 'spark= above(spark,37);\n' + 't1=spark;\n' + 't2=0;\n' + 't3=0;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'offran=1-t1*0.1;\n' + 'sparkcycle=above( sin(n*2) , 0);\n' + 'zran=(rand(8) - 4);\n' + 'xran=(rand(8) - 4);\n' + 'yran=(rand(8) - 4);\n' + 'alp=min( 1-abs(zran*0.25), min( 1-abs(xran*0.25),1-abs(yran*0.25) ));\n' + 'alp=alp*alp;\n' + 'a=alp*(1-t1) + t1;\n' + 'zran=zran*0.001*offran;\n' + 'xran=xran*0.001*offran;\n' + 'yran=yran*0.001*offran;\n' + 'xseed=sin(sample*3.14+time*15)+sin(sample*11)*0.4;\n' + 'yseed=cos(sample*3.14+time*9)+sin(sample*17+time)*0.4;\n' + 't2=t2+xseed*sparkcycle;\n' + 't3=t3+yseed*sparkcycle;\n' + 'xspark=t2*0.002;\n' + 'yspark=t3*0.008;\n' + 'scale=sin(n*freq)*0.3+0.7;\n' + 'zp=sin(time)+ zran;\n' + 'zp=zp + yspark*t1*sparkcycle;\n' + 'aflux=sin(zp*3.14 + 3.14);\n' + 'xp=sin(n)*0.1*aflux + xran;\n' + 'xp=xp + xspark*t1*sparkcycle;\n' + 'yp=cos(n)*0.1*aflux + yran;\n' + 'ang=(q7+time*0.01)*0.2;\n' + 'xp2=xp*sin(ang) + zp*cos(ang);\n' + 'yp2=yp;\n' + 'zp2=xp*cos(ang) - zp*sin(ang);\n' + 'ang=(q7+time*0.01)*0.3;\n' + 'xp3=xp2;\n' + 'yp3=yp2*sin(ang) + zp2*cos(ang);\n' + 'zp3=yp2*cos(ang) - zp2*sin(ang);\n' + 'xp=xp3;\n' + 'yp=yp3;\n' + 'zp=zp3;\n' + 'zp=zp+2.1;\n' + 'xs=xp/zp;\n' + 'xs=xs+0.5;\n' + 'ys=yp/zp;\n' + 'ys=ys*1.3 + 0.5;\n' + 'x=xs;\n' + 'y=ys;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 3.141593,
			thickoutline : 1.0,
			g : 0.5,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.274293,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.5,
			border_g : 0.0,
			rad : 6.650134,
			x : 0.8,
			y : 0.5,
			ang : 3.644249,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {

m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.border_a = m.treb;
m.rad = m.bass;
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('border_a=treb;\n' + 'rad=bass;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 2.216712,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.749999,
			x : 0.37,
			y : 0.49,
			ang : 3.644249,
			sides : 3.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.rate = 0;
m.poly = 0;
m.out = 0;
m.te = 0;
m.rate2 = 0;
m.beat = 0;
m.bassthresh = 0;
m.t2 = 0;
m.ran = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
m.te = 1;
m.poly = 4;
			m.rkeys = ['r2','b','g','g2','poly','out','b2','te','r','bassthresh'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rate = div(m.fps,(m.fps+div(1,2)));
m.beat = above(m.bass, m.bassthresh);
m.bassthresh = ((m.beat*4)+((1-m.beat)*(((m.bassthresh-1.5)*m.rate)+1.5)));
m.ran = (rand(8)+4);
m.poly = ifcond(m.beat, ifcond(equal(m.ran, m.poly), (m.poly+1), m.ran), m.poly);
m.sides = m.poly;
m.rate2 = div(m.fps,(m.fps+10));
m.out = ((((1-m.beat)*m.rate2)*m.out)+m.beat);
m.border_a = m.out;
m.te = (div(div(m.bass,m.fps),2)+m.te);
m.x = (m.x+(0.056*Math.sin((m.te*1.67))));
m.y = (m.y+(0.043*Math.sin((m.te*1.23))));
m.ang = ((3*Math.sin((-m.te*0.67)))+(3*Math.cos((m.te*0.4))));
m.rad = ((m.rad*(0.9+(0.2*m.t2)))-(0.1*Math.sin((m.te*1.51))));
m.r = Math.min(1, Math.max(0, (m.r+(0.3*Math.sin(((m.time*0.427)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.3*Math.sin(((m.time*0.401)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.3*Math.sin(((m.time*0.452)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.3*Math.sin(((m.time*0.417)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.3*Math.sin(((m.time*0.457)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.3*Math.sin(((m.time*0.434)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;\n' + 'te = 1;\n' + 'poly = 4;'),
		'frame_eqs_str' : ('rate = fps/(fps+1/2);\n' + 'beat = above(bass,bassthresh);\n' + 'bassthresh = beat*4 + (1-beat)*((bassthresh - 1.5)*rate+1.5);\n' + 'ran = rand(8)+4;\n' + 'poly = if(beat,if(equal(ran,poly),poly+1,ran),poly);\n' + 'sides = poly;\n' + 'rate2 = fps/(fps+10);\n' + 'out = (1-beat)*rate2*out + beat;\n' + 'border_a = out;\n' + 'te = bass/fps/2 + te;\n' + 'x = x + 0.056*sin(te*1.67);\n' + 'y = y + 0.043*sin(te*1.23);\n' + 'ang = 3*sin(-te*0.67) + 3*cos(te*0.4);\n' + 'rad = rad * (0.9 + 0.2*t2) - 0.1*sin(te*1.51);\n' + 'r = min(1,max(0,r + 0.3*sin(time*0.427 + 1)));\n' + 'g = min(1,max(0,g + 0.3*sin(time*0.401 + 2)));\n' + 'b = min(1,max(0,b + 0.3*sin(time*0.452 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.3*sin(time*0.417 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.3*sin(time*0.457 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.3*sin(time*0.434 + 6)));'),

		},
		{
		'baseVals' : {
			r2 : 0.92,
			a : 1.0,
			enabled : 1.0,
			b : 0.89,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.22019,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.05,
			r : 0.98,
			border_g : 1.0,
			rad : 0.853568,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {

m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
m.te = 1;
m.poly = 5;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = ((Math.sin((m.time*0.4))*0.05)*((Math.sin((m.time*0.4))*0.5)+0.5));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;\n' + 'te = 1;\n' + 'poly = 5;'),
		'frame_eqs_str' : ('ang=sin(time*0.4)*0.05 * (sin(time*0.4)*0.5+0.5);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.265151,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.rate = 0;
m.poly = 0;
m.te = 0;
m.vol = 0;
m.beat = 0;
m.bassthresh = 0;

			m.rkeys = ['poly','te','bassthresh'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rate = div(m.fps,(m.fps+div(1,2)));
m.ang = (m.time*0.5);
m.vol = div(((m.bass_att+m.mid_att)+m.treb_att),6);
m.te = (div(m.vol,m.fps)+m.te);
m.x = (m.x+(0.2*Math.sin((m.te*1.14))));
m.y = (m.y+(0.2*Math.sin(((m.te*0.96)+2))));
m.beat = above((m.vol*1.5), m.bassthresh);
m.bassthresh = ((m.beat*4)+((1-m.beat)*(((m.bassthresh-1.4)*m.rate)+1.4)));
m.poly = ifcond(m.beat, (rand(5)+3), m.poly);
m.poly = ifcond(equal(m.poly, 7), (rand(50)+7), m.poly);
m.sides = m.poly;
m.rad = (m.rad-div(Math.log(m.poly),100));
m.a = pow((m.vol*2), 2);
m.border_a = m.a;
m.rad = ((m.rad*0.7)+(m.a*0.015));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rate = fps/(fps+1/2);\n' + 'ang = time*0.5;\n' + 'vol = (bass_att+mid_att+treb_att)/6;\n' + 'te = vol/fps + te;\n' + 'x = x + 0.2*sin(te*1.14);\n' + 'y = y + 0.2*sin(te*0.96+2);\n' + 'beat = above(vol*1.5,bassthresh);\n' + 'bassthresh = beat*4 + (1-beat)*((bassthresh - 1.4)*rate+1.4);\n' + 'poly = if(beat,rand(5)+3,poly);\n' + 'poly = if(equal(poly,7),rand(50)+7,poly);\n' + 'sides = poly;\n' + 'rad = rad-log(poly)/100;\n' + 'a=pow(vol*2,2);\n' + 'border_a=a;\n' + 'rad=rad*0.7+a*0.015;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('decay=1;\n' + 'vol=(bass+mid+treb)*0.25;\n' + 'vol=vol*vol;\n' + 'mtime=mtime+vol*0.018*(70/fps);\n' + 'q7=mtime;\n' + 'q8=vol;'),
	'pixel_eqs_str' : ('zoom=-1.02 + rad*10;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.980001,
		wave_g : 0.4,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.011726,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.11,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 0.996629,
		ob_size : 0.35,
		wave_smoothing : 0.9,
		warpanimspeed : 0.010284,
		wave_dots : 1.0,
		mv_g : 0.0,
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
		mv_l : 5.0,
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
		mv_r : 0.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
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
m.decay = 0.98;
m.zoom = -1.01;
m.vol = (((m.bass+m.mid)+m.treb)*0.25);
m.vol = (m.vol*m.vol);
m.q1 = m.vol;
m.mtime = (m.mtime+((m.vol*0.01)*div(53,m.fps)));
m.q2 = (m.mtime*0.25);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.7,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.2,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.ps = 0;
m.n = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.xq = 0;
m.ang = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.ang = (div(Math.floor((m.sample*12)),12)*6.283);
m.ps = (m.time*0.1);
m.xp = (Math.sin(((m.n*12)+m.ps))*0.5);
m.yp = (Math.cos(((m.n*12)+m.ps))*0.5);
m.zp = (2+(m.q1*0.03));
m.xq = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yq = m.yp;
m.zq = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.xp = m.xq;
m.yp = ((m.yq*Math.sin(m.q2))+(m.zq*Math.cos(m.q2)));
m.zp = ((m.yq*Math.cos(m.q2))-(m.zq*Math.sin(m.q2)));
m.xq = ((m.xp*Math.sin(m.q2))+(m.yp*Math.cos(m.q2)));
m.yq = ((m.xp*Math.cos(m.q2))-(m.yp*Math.sin(m.q2)));
m.zq = m.zp;
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = (m.zp+8);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'ang=int(sample*12)/12 * 6.283;\n' + 'ps=time*0.1;\n' + 'xp=sin(n*12+ps)*0.5;\n' + 'yp=cos(n*12+ps)*0.5;\n' + 'zp=2 + q1*0.03;\n' + 'xq=xp*sin(ang) + zp*cos(ang);\n' + 'yq=yp;\n' + 'zq=xp*cos(ang) - zp*sin(ang);\n' + 'xp=xq;\n' + 'yp=yq*sin(q2) + zq*cos(q2);\n' + 'zp=yq*cos(q2) - zq*sin(q2);\n' + 'xq=xp*sin(q2) + yp*cos(q2);\n' + 'yq=xp*cos(q2) - yp*sin(q2);\n' + 'zq=zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp=zp+8;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.2,
			g : 0.5,
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
m.q2 = 0;
m.ps = 0;
m.n = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.xq = 0;
m.ang = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.ang = (div(Math.floor((m.sample*12)),12)*6.283);
m.ps = (m.time*0.1);
m.xp = (Math.sin(((m.n*12)+m.ps))*0.5);
m.yp = (Math.cos(((m.n*12)+m.ps))*0.5);
m.zp = (2+(m.q1*0.03));
m.xq = m.xp;
m.yq = ((m.yp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.zq = ((m.yp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.xp = m.xq;
m.yp = ((m.yq*Math.sin(m.q2))+(m.zq*Math.cos(m.q2)));
m.zp = ((m.yq*Math.cos(m.q2))-(m.zq*Math.sin(m.q2)));
m.xq = ((m.xp*Math.sin(m.q2))+(m.yp*Math.cos(m.q2)));
m.yq = ((m.xp*Math.cos(m.q2))-(m.yp*Math.sin(m.q2)));
m.zq = m.zp;
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = (m.zp+8);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'ang=int(sample*12)/12 * 6.283;\n' + 'ps=time*0.1;\n' + 'xp=sin(n*12+ps)*0.5;\n' + 'yp=cos(n*12+ps)*0.5;\n' + 'zp=2 + q1*0.03;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'xp=xq;\n' + 'yp=yq*sin(q2) + zq*cos(q2);\n' + 'zp=yq*cos(q2) - zq*sin(q2);\n' + 'xq=xp*sin(q2) + yp*cos(q2);\n' + 'yq=xp*cos(q2) - yp*sin(q2);\n' + 'zq=zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp=zp+8;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
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
m.q1 = 0;
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
m.xp = (Math.sin((m.n+m.phase))*m.flip);
m.yp = (Math.cos((m.n+m.phase))*m.flip);
m.zp = 0;
m.ang = ((m.n*2)+(m.phase*0.2));
m.xq = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yq = m.yp;
m.zq = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.r1 = 0.1;
m.g1 = 0.6;
m.b1 = 1;
m.r2 = 1.0;
m.g2 = 0.7;
m.b2 = 0.1;
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
m.a = (((1-m.flip)*0.03)*m.q1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'phase=sin(n*3)*sin(n*7.9)*sin(n*16.7)*sin(n*63.5)*6;\n' + 'xp=sin(n+phase)*flip;\n' + 'yp=cos(n+phase)*flip;\n' + 'zp=0;\n' + 'ang=n*2+phase*0.2;\n' + 'xq=xp*sin(ang) + zp*cos(ang);\n' + 'yq=yp;\n' + 'zq=xp*cos(ang) - zp*sin(ang);\n' + 'r1=0.1;\n' + 'g1=0.6;\n' + 'b1=1;\n' + 'r2=1.0;\n' + 'g2=0.7;\n' + 'b2=0.1;\n' + 'fade=xq*0.5 + 0.5;\n' + 'r=r1*fade + r2*(1-fade);\n' + 'g=g1*fade + g2*(1-fade);\n' + 'b=b1*fade + b2*(1-fade);\n' + 'ang=time*0.1;\n' + 'xp=xq*sin(ang) + zq*cos(ang);\n' + 'yp=yq;\n' + 'zp=xq*cos(ang) - zq*sin(ang);\n' + 'ang=time*0.17;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'zq=zq+3.1;\n' + 'xs=xq/zq;\n' + 'ys=yq/zq;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-flip)*0.03*q1;'),

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
			tex_zoom : 1.030301,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.986086,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
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
			tex_ang : 1.884956,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.030296,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.986086,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 24.0,
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
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
	'frame_eqs_str' : ('decay=0.98;\n' + 'zoom=-1.01;\n' + 'vol=(bass+mid+treb)*0.25;\n' + 'vol=vol*vol;\n' + 'q1=vol;\n' + 'mtime=mtime+vol*0.01*(53/fps);\n' + 'q2=mtime*0.25;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
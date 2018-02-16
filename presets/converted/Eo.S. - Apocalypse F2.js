define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.93,
		wave_g : 0.4,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.011726,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
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
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.9,
		echo_zoom : 0.99663,
		ob_size : 0.005,
		wave_smoothing : 0.9,
		warpanimspeed : 0.010284,
		wave_dots : 1.0,
		mv_g : 0.44,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
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
		decay : 0.96,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.0,
		mv_r : 0.39,
		rating : 4.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.wpy = 0;
m.q1 = 0;
m.q2 = 0;
m.q6 = 0;
m.mvol = 0;
m.q7 = 0;
m.wpx2sgn = 0;
m.q8 = 0;
m.gamma = 0;
m.wpy2sgn = 0;
m.zma = 0;
m.zmb = 0;
m.ring = 0;
m.wpy2 = 0;
m.wpx2 = 0;
m.mtime1 = 0;
m.mtime2 = 0;
m.tm = 0;
m.mvolb = 0;
m.vol1 = 0;
m.wpx = 0;
m.vol2 = 0;
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
m.decay = 0.99;
m.zoom = 1.00;
m.vol1 = (((m.bass+m.mid)+m.treb)*0.25);
m.vol1 = (m.vol1*m.vol1);
m.mtime1 = (m.mtime1+(m.vol1*0.01));
m.q1 = m.mtime1;
m.vol2 = ((m.mid+m.treb)*0.45);
m.vol2 = (m.vol2*m.vol2);
m.mtime2 = (m.mtime2+(m.vol2*0.01));
m.q2 = m.mtime2;
m.mvol = (((m.bass_att+m.mid_att)+m.treb_att)*0.33);
m.mvolb = ((m.mvolb-0.007)+(m.mvol*0.007));
m.mvolb = Math.max(m.mvolb, 0);
m.mvolb = Math.min(m.mvolb, 1);
m.q8 = m.mvolb;
m.q7 = 0.87;
m.q6 = m.vol1;
m.monitor = m.mvolb;
m.gamma = (1+Math.min(m.vol1, 1));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.tm = m.time;
m.zma = ((Math.sin(((m.ang*5)+m.tm))*0.001)+0.001);
m.zmb = ((Math.sin(((m.ang*5)-m.tm))*0.5)+0.5);
m.zmb = (pow(m.zmb, 4)*0.005);
m.wpx = (Math.sin((((m.y*6.283)*5)+m.tm))*0.0008);
m.wpy = (Math.sin((((m.x*6.283)*5)+m.tm))*0.0008);
m.wpx2 = Math.sin((((m.y*6.283)*3)+m.tm));
m.wpx2sgn = sign(m.wpx2);
m.wpx2 = (pow(m.wpx2, 4)*m.wpx2sgn);
m.wpx2 = (m.wpx2*0.003);
m.wpy2 = Math.sin((((m.x*6.283)*2)+m.tm));
m.wpy2sgn = sign(m.wpy2);
m.wpy2 = (pow(m.wpy2, 4)*m.wpy2sgn);
m.wpy2 = (m.wpy2*0.003);
m.dx = (m.wpx+(m.wpx2*m.q6));
m.dy = (m.wpy+(m.wpy2*m.q6));
m.sy = (1+((m.zma+m.zmb)*m.q6));
m.sx = m.sy;
m.ring = (Math.max((m.rad-0.7), 0)*2);
m.rot = (((Math.sin((m.ring*9))*0.1)*Math.sin(m.time))*m.q6);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.27,
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
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.frontside = 0;
m.q2 = 0;
m.t8 = 0;
m.q7 = 0;
m.sang = 0;
m.q8 = 0;
m.scale = 0;
m.n = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.scaleb = 0;
m.xp = 0;
m.yq = 0;
m.xq = 0;
m.ang = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = ['a','t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.q2*3);
m.t2 = Math.sin((m.q2*3));
m.t8 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.xp = Math.sin(m.n);
m.yp = Math.cos(m.n);
m.zp = 0;
m.t8 = -m.t8;
m.scale = ((m.t8*0.5)+0.5);
m.scaleb = Math.sin((m.n*9));
m.scaleb = above(m.scaleb, 0);
m.scale = (1-((m.scale+m.scaleb)*0.05));
m.xp = ((m.xp*m.scale)*m.q7);
m.yp = ((m.yp*m.scale)*m.q7);
m.ang = m.t2;
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.yp*m.cang));
m.yq = ((m.xp*m.cang)-(m.yp*m.sang));
m.zq = m.zp;
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.t1*0.07);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.t1*0.313);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.frontside = below(m.zp, 0);
m.zp = (m.zp+2.8);
m.x = (div(m.xp,m.zp)+0.5);
m.y = ((div(m.yp,m.zp)*1.333)+0.5);
m.a = ((m.a*((m.frontside*0.7)+0.3))*m.q8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=q2*3;\n' + 't2=sin(q2*3);\n' + 't8=1;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'xp=sin(n);\n' + 'yp=cos(n);\n' + 'zp=0;\n' + 't8=-t8;\n' + 'scale=t8*0.5 + 0.5;\n' + 'scaleB=sin(n*9);\n' + 'scaleB=above(scaleB,0);\n' + 'scale=1 - (scale+scaleB)*0.05;\n' + 'xp=xp*scale*q7;\n' + 'yp=yp*scale*q7;\n' + 'ang=t2;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + yp*cang;\n' + 'yq=xp*cang - yp*sang;\n' + 'zq=zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=t1*0.07;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sang + zp*cang;\n' + 'zq=yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=t1*0.313;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + zp*cang;\n' + 'yq=yp;\n' + 'zq=xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'frontside=below(zp,0);\n' + 'zp=zp+2.8;\n' + 'x=xp/zp +0.5;\n' + 'y=yp/zp *1.333 +0.5;\n' + 'a=a*(frontside*0.7+0.3)*q8;'),

		},
		{
		'baseVals' : {
			a : 0.2,
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
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.frontside = 0;
m.q2 = 0;
m.t8 = 0;
m.q7 = 0;
m.sang = 0;
m.q8 = 0;
m.scale = 0;
m.step = 0;
m.n = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.xq = 0;
m.ang = 0;
m.t1 = 0;

			m.rkeys = ['a','t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.q2*3);
m.t8 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.step = Math.floor((m.sample*3));
m.scale = (1-(m.step*0.049));
m.xp = Math.sin((m.n*3));
m.yp = Math.cos((m.n*3));
m.zp = 0;
m.xp = ((m.xp*m.scale)*m.q7);
m.yp = ((m.yp*m.scale)*m.q7);
m.t8 = -m.t8;
m.ang = (m.t1*0.7);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.yp*m.cang));
m.yq = ((m.xp*m.cang)-(m.yp*m.sang));
m.zq = m.zp;
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.t1*0.07);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.t1*0.313);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.frontside = below(m.zp, 0);
m.zp = (m.zp+2.8);
m.x = (div(m.xp,m.zp)+0.5);
m.y = ((div(m.yp,m.zp)*1.333)+0.5);
m.a = ((m.a*((m.frontside*0.7)+0.3))*m.q8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=q2*3;\n' + 't8=1;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'step=int(sample*3);\n' + 'scale=1 - step*0.049;\n' + 'xp=sin(n*3);\n' + 'yp=cos(n*3);\n' + 'zp=0;\n' + 'xp=xp*scale*q7;\n' + 'yp=yp*scale*q7;\n' + 't8=-t8;\n' + 'ang=t1*0.7;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + yp*cang;\n' + 'yq=xp*cang - yp*sang;\n' + 'zq=zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=t1*0.07;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sang + zp*cang;\n' + 'zq=yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=t1*0.313;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + zp*cang;\n' + 'yq=yp;\n' + 'zq=xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'frontside=below(zp,0);\n' + 'zp=zp+2.8;\n' + 'x=xp/zp +0.5;\n' + 'y=yp/zp *1.333 +0.5;\n' + 'a=a*(frontside*0.7+0.3)*q8;'),

		},
		{
		'baseVals' : {
			a : 0.22,
			enabled : 0.0,
			b : 1.0,
			g : 0.8,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.7,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.t8 = 0;
m.q7 = 0;
m.sang = 0;
m.scale = 0;
m.n = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.scaleb = 0;
m.xp = 0;
m.yq = 0;
m.xq = 0;
m.ang = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = ['a','t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.q2*4);
m.t2 = Math.sin((m.q2*3));
m.t8 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.xp = Math.sin((m.n*2));
m.yp = Math.cos((m.n*2));
m.zp = 0;
m.t8 = -m.t8;
m.scale = ((m.t8*0.5)+0.5);
m.scaleb = Math.sin((m.n*9));
m.scaleb = above(m.scaleb, 0);
m.scale = (1-((m.scale+m.scaleb)*0.05));
m.xp = (((m.xp*m.scale)*m.q7)*0.8);
m.yp = (((m.yp*m.scale)*m.q7)*0.8);
m.zp = ifcond(above(m.sample, 0.5), m.xp, 0);
m.xp = ifcond(above(m.sample, 0.5), 0, m.xp);
m.ang = m.t2;
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.yp*m.cang));
m.yq = ((m.xp*m.cang)-(m.yp*m.sang));
m.zq = m.zp;
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.t1*0.07);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.t1*0.313);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = (m.zp+2.8);
m.x = (div(m.xp,m.zp)+0.5);
m.y = ((div(m.yp,m.zp)*1.333)+0.5);
m.a = m.a;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=q2*4;\n' + 't2=sin(q2*3);\n' + 't8=1;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'xp=sin(n*2);\n' + 'yp=cos(n*2);\n' + 'zp=0;\n' + 't8=-t8;\n' + 'scale=t8*0.5 + 0.5;\n' + 'scaleB=sin(n*9);\n' + 'scaleB=above(scaleB,0);\n' + 'scale=1 - (scale+scaleB)*0.05;\n' + 'xp=xp*scale*q7*0.8;\n' + 'yp=yp*scale*q7*0.8;\n' + 'zp=if(above(sample,0.5),xp,0);\n' + 'xp=if(above(sample,0.5),0,xp);\n' + 'ang=t2;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + yp*cang;\n' + 'yq=xp*cang - yp*sang;\n' + 'zq=zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=t1*0.07;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sang + zp*cang;\n' + 'zq=yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=t1*0.313;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + zp*cang;\n' + 'yq=yp;\n' + 'zq=xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp=zp+2.8;\n' + 'x=xp/zp +0.5;\n' + 'y=yp/zp *1.333 +0.5;\n' + 'a=a;'),

		},
		{
		'baseVals' : {
			a : 0.45,
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
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.sang = 0;
m.q8 = 0;
m.scale = 0;
m.jitterx = 0;
m.jittery = 0;
m.n = 0;
m.adv = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.xq = 0;
m.ang = 0;
m.phase = 0;
m.t1 = 0;
m.s2 = 0;
m.adv = 0;
			m.rkeys = ['a','b','g'];
			return m;
		},
		'frame_eqs' : function(m) {
m.adv = (m.adv+(m.q8*0.01));
m.t1 = m.adv;
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.xp = (Math.sin((m.n*13))*0.58);
m.yp = (Math.cos((m.n*13))*0.58);
m.zp = 0;
m.scale = Math.sin((m.n*7));
m.xp = (m.xp*m.scale);
m.yp = (m.yp*m.scale);
m.ang = Math.sin((m.n*9));
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.time*0.1);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.time*0.05);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = (m.zp+2.1);
m.jitterx = ((Math.floor(rand(10))-5)*0.0005);
m.jittery = ((Math.floor(rand(10))-5)*0.0005);
m.x = ((div(m.xp,m.zp)+0.5)+m.jitterx);
m.y = (((div(m.yp,m.zp)*1.333)+0.5)+m.jittery);
m.phase = ((Math.sin(((m.n*13)+(m.time*6)))*0.5)+0.5);
m.s2 = ((m.sample*16)+m.t1);
m.phase = (m.s2-Math.floor(m.s2));
m.phase = (1-m.phase);
m.a = (m.a*m.phase);
m.b = (m.b*m.phase);
m.g = (m.g*m.phase);
		return m;
	},
		'init_eqs_str' : ('adv=0;'),
		'frame_eqs_str' : ('adv=adv + q8*0.01;\n' + 't1=adv;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'xp=sin(n*13)*0.58;\n' + 'yp=cos(n*13)*0.58;\n' + 'zp=0;\n' + 'scale=sin(n*7);\n' + 'xp=xp*scale;\n' + 'yp=yp*scale;\n' + 'ang=sin(n*9);\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sang + zp*cang;\n' + 'zq=yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=time*0.1;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sang + zp*cang;\n' + 'zq=yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=time*0.05;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + zp*cang;\n' + 'yq=yp;\n' + 'zq=xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp=zp+2.1;\n' + 'jitterx=(int(rand(10))-5)*0.0005;\n' + 'jittery=(int(rand(10))-5)*0.0005;\n' + 'x=xp/zp + 0.5 +jitterx;\n' + 'y=yp/zp*1.333 + 0.5 +jittery;\n' + 'phase=sin(n*13 + time*6)*0.5+0.5;\n' + 's2=sample*16 + t1 ;\n' + 'phase=s2 - int(s2);\n' + 'phase=1-phase;\n' + 'a=a*phase;\n' + 'b=b*phase;\n' + 'g=g*phase;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.2,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.51,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.2,
			border_g : 1.0,
			rad : 0.187174,
			x : 0.11,
			y : 0.75,
			ang : 0.0,
			sides : 8.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.p1 = 0;
m.r2a = 0;
m.p2 = 0;
m.p3 = 0;
m.ra = 0;
m.b2a = 0;
m.g2a = 0;
m.tm = 0;
m.ga = 0;
m.ba = 0;

			m.rkeys = ['r2','b','g','g2','b2','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ra = m.r;
m.ga = m.g;
m.ba = m.b;
m.r2a = m.r2;
m.g2a = m.g2;
m.b2a = m.b2;
m.tm = (m.time*0.3);
m.p1 = ((Math.sin(m.tm)*0.5)+0.5);
m.p2 = ((Math.sin((m.tm+2.1))*0.5)+0.5);
m.p3 = ((Math.sin((m.tm+4.2))*0.5)+0.5);
m.r = (((m.ra*m.p1)+(m.ga*m.p2))+(m.ba*m.p3));
m.g = (((m.ga*m.p2)+(m.ga*m.p3))+(m.ba*m.p1));
m.b = (((m.ra*m.p3)+(m.ga*m.p1))+(m.ba*m.p2));
m.r2 = (((m.r2a*m.p1)+(m.g2a*m.p2))+(m.b2a*m.p3));
m.g2 = (((m.g2a*m.p2)+(m.g2a*m.p3))+(m.b2a*m.p1));
m.b2 = (((m.r2a*m.p3)+(m.g2a*m.p1))+(m.b2a*m.p2));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rA=r;\n' + 'gA=g;\n' + 'bA=b;\n' + 'r2A=r2;\n' + 'g2A=g2;\n' + 'b2A=b2;\n' + 'tm=time*0.3;\n' + 'p1=sin(tm)*0.5+0.5;\n' + 'p2=sin(tm+2.1)*0.5+0.5;\n' + 'p3=sin(tm+4.2)*0.5+0.5;\n' + 'r=rA*p1 +gA*p2 +bA*p3;\n' + 'g=gA*p2 +gA*p3 +bA*p1;\n' + 'b=rA*p3 +gA*p1 +bA*p2;\n' + 'r2=r2A*p1 +g2A*p2 +b2A*p3;\n' + 'g2=g2A*p2 +g2A*p3 +b2A*p1;\n' + 'b2=r2A*p3 +g2A*p1 +b2A*p2;'),

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
			g2 : 0.2,
			tex_zoom : 0.567129,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.4,
			b2 : 0.0,
			a2 : 0.12,
			r : 1.0,
			border_g : 0.5,
			rad : 0.776608,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 1.445133,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.334695,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.8,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.94761,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 37.0,
			border_r : 0.6,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.p1 = 0;
m.q2 = 0;
m.r2a = 0;
m.p2 = 0;
m.p3 = 0;
m.ra = 0;
m.b2a = 0;
m.vol = 0;
m.g2a = 0;
m.tm = 0;
m.ga = 0;
m.ba = 0;

			m.rkeys = ['r2','b','g','g2','b2','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.ang+(Math.sin((m.time*0.1))*4));
m.vol = (((m.bass+m.mid)+m.treb)*0.25);
m.vol = (m.vol*m.vol);
m.tex_zoom = (0.5+(m.vol*0.04));
m.x = (m.x+(Math.sin((m.q2*2))*0.2));
m.y = (m.y+(Math.sin((m.q1*5))*0.2));
m.ra = m.r;
m.ga = m.g;
m.ba = m.b;
m.r2a = m.r2;
m.g2a = m.g2;
m.b2a = m.b2;
m.tm = (m.time*0.3);
m.p1 = ((Math.sin(m.tm)*0.5)+0.5);
m.p2 = ((Math.sin((m.tm+2.1))*0.5)+0.5);
m.p3 = ((Math.sin((m.tm+4.2))*0.5)+0.5);
m.r = (((m.ra*m.p1)+(m.ga*m.p2))+(m.ba*m.p3));
m.g = (((m.ga*m.p2)+(m.ga*m.p3))+(m.ba*m.p1));
m.b = (((m.ra*m.p3)+(m.ga*m.p1))+(m.ba*m.p2));
m.r2 = (((m.r2a*m.p1)+(m.g2a*m.p2))+(m.b2a*m.p3));
m.g2 = (((m.g2a*m.p2)+(m.g2a*m.p3))+(m.b2a*m.p1));
m.b2 = (((m.r2a*m.p3)+(m.g2a*m.p1))+(m.b2a*m.p2));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=ang+sin(time*0.1)*4;\n' + 'vol=(bass+mid+treb)*0.25;\n' + 'vol=vol*vol;\n' + 'tex_zoom=0.5 + vol*0.04;\n' + 'x=x+sin(q2*2)*0.2;\n' + 'y=y+sin(q1*5)*0.2;\n' + 'rA=r;\n' + 'gA=g;\n' + 'bA=b;\n' + 'r2A=r2;\n' + 'g2A=g2;\n' + 'b2A=b2;\n' + 'tm=time*0.3;\n' + 'p1=sin(tm)*0.5+0.5;\n' + 'p2=sin(tm+2.1)*0.5+0.5;\n' + 'p3=sin(tm+4.2)*0.5+0.5;\n' + 'r=rA*p1 +gA*p2 +bA*p3;\n' + 'g=gA*p2 +gA*p3 +bA*p1;\n' + 'b=rA*p3 +gA*p1 +bA*p2;\n' + 'r2=r2A*p1 +g2A*p2 +b2A*p3;\n' + 'g2=g2A*p2 +g2A*p3 +b2A*p1;\n' + 'b2=r2A*p3 +g2A*p1 +b2A*p2;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.4,
			enabled : 1.0,
			b : 0.1,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.3,
			textured : 0.0,
			g2 : 0.4,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.2,
			a2 : 0.0,
			r : 0.4,
			border_g : 1.0,
			rad : 0.768919,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 24.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.p1 = 0;
m.r2a = 0;
m.p2 = 0;
m.p3 = 0;
m.q8 = 0;
m.ra = 0;
m.b2a = 0;
m.g2a = 0;
m.dark = 0;
m.tm = 0;
m.ga = 0;
m.ba = 0;

			m.rkeys = ['r2','a','b','g','g2','b2','a2','r','tm'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = 0.78;
m.dark = (0.5+(m.q8*0.5));
m.a = (m.a*m.dark);
m.a2 = (m.a2*m.dark);
m.x = (m.x+(Math.sin(m.tm)*0.3));
m.y = (m.y+(Math.cos((m.tm*3))*0.1));
m.ra = m.r;
m.ga = m.g;
m.ba = m.b;
m.r2a = m.r2;
m.g2a = m.g2;
m.b2a = m.b2;
m.tm = (m.time*0.3);
m.p1 = ((Math.sin(m.tm)*0.5)+0.5);
m.p2 = ((Math.sin((m.tm+2.1))*0.5)+0.5);
m.p3 = ((Math.sin((m.tm+4.2))*0.5)+0.5);
m.r = (((m.ra*m.p1)+(m.ga*m.p2))+(m.ba*m.p3));
m.g = (((m.ga*m.p2)+(m.ga*m.p3))+(m.ba*m.p1));
m.b = (((m.ra*m.p3)+(m.ga*m.p1))+(m.ba*m.p2));
m.r2 = (((m.r2a*m.p1)+(m.g2a*m.p2))+(m.b2a*m.p3));
m.g2 = (((m.g2a*m.p2)+(m.g2a*m.p3))+(m.b2a*m.p1));
m.b2 = (((m.r2a*m.p3)+(m.g2a*m.p1))+(m.b2a*m.p2));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad=0.78;\n' + 'dark=0.5+q8*0.5;\n' + 'a=a*dark;\n' + 'a2=a2*dark;\n' + 'x=x+sin(tm)*0.3;\n' + 'y=y+cos(tm*3)*0.1;\n' + 'rA=r;\n' + 'gA=g;\n' + 'bA=b;\n' + 'r2A=r2;\n' + 'g2A=g2;\n' + 'b2A=b2;\n' + 'tm=time*0.3;\n' + 'p1=sin(tm)*0.5+0.5;\n' + 'p2=sin(tm+2.1)*0.5+0.5;\n' + 'p3=sin(tm+4.2)*0.5+0.5;\n' + 'r=rA*p1 +gA*p2 +bA*p3;\n' + 'g=gA*p2 +gA*p3 +bA*p1;\n' + 'b=rA*p3 +gA*p1 +bA*p2;\n' + 'r2=r2A*p1 +g2A*p2 +b2A*p3;\n' + 'g2=g2A*p2 +g2A*p3 +b2A*p1;\n' + 'b2=r2A*p3 +g2A*p1 +b2A*p2;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=0.99;\n' + 'zoom=1.00;\n' + 'vol1=(bass+mid+treb)*0.25;\n' + 'vol1=vol1*vol1;\n' + 'mtime1=mtime1+vol1*0.01;\n' + 'q1=mtime1;\n' + 'vol2=(mid+treb)*0.45;\n' + 'vol2=vol2*vol2;\n' + 'mtime2=mtime2+vol2*0.01;\n' + 'q2=mtime2;\n' + 'mvol=(bass_att+mid_att+treb_att)*0.33;\n' + 'mvolB=(mvolB-0.007) + mvol*0.007;\n' + 'mvolB=max(mvolB,0);\n' + 'mvolB=min(mvolB,1);\n' + 'q8=mvolB;\n' + 'q7=0.87;\n' + 'q6=vol1;\n' + 'monitor=mvolB;\n' + 'gamma=1 + min(vol1,1);'),
	'pixel_eqs_str' : ('tm=time;\n' + 'zma=sin(ang*5 + tm)*0.001 + 0.001;\n' + 'zmb=sin(ang*5 - tm)*0.5 + 0.5;\n' + 'zmb=pow(zmb,4) * 0.005;\n' + 'wpx=sin(y*6.283*5 + tm)*0.0008;\n' + 'wpy=sin(x*6.283*5 + tm)*0.0008;\n' + 'wpx2=sin(y*6.283*3 + tm);\n' + 'wpx2sgn=sign(wpx2);\n' + 'wpx2=pow(wpx2,4)*wpx2sgn;\n' + 'wpx2=wpx2*0.003;\n' + 'wpy2=sin(x*6.283*2 + tm);\n' + 'wpy2sgn=sign(wpy2);\n' + 'wpy2=pow(wpy2,4)*wpy2sgn;\n' + 'wpy2=wpy2*0.003;\n' + 'dx=wpx+wpx2*q6;\n' + 'dy=wpy+wpy2*q6;\n' + 'sy=1 + (zma + zmb)*q6;\n' + 'sx=sy;\n' + 'ring=max(rad-0.7,0)*2;\n' + 'rot=sin(ring*9)*0.1 * sin(time) *q6;'),
};

return pmap;
});
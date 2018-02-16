define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.56,
		wave_g : 0.4,
		ib_g : 1.0,
		mv_x : 0.0,
		warpscale : 0.014889,
		brighten : 1.0,
		mv_y : 43.199997,
		wave_scale : 0.011726,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.033004,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.71,
		echo_zoom : 0.99663,
		ob_size : 0.005,
		wave_smoothing : 0.9,
		warpanimspeed : 0.037492,
		wave_dots : 1.0,
		mv_g : 0.91,
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
		mv_r : 1.0,
		rating : 5.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.att = 0;
m.mode = 0;
m.tbr = 0;
m.meanbass_att = 0;
m.ag = 0;
m.beatcounter = 0;
m.q7 = 0;
m.q8 = 0;
m.var = 0;
m.lastbeat = 0;
m.flip = 0;
m.rdd = 0;
m.star = 0;
m.vol = 0;
m.zm = 0;
m.beatrate = 0;
m.beat = 0;
m.angadv = 0;
m.mtime = 0;
m.volume = 0;
m.cys = 0;
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
m.warp = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = 1;
m.volume = (0.3*((m.bass+m.mid)+m.att));
m.beatrate = (equal(m.beatrate, 0)+((1-equal(m.beatrate, 0))*(below(m.volume, 0.01)+((1-below(m.volume, 0.01))*m.beatrate))));
m.lastbeat = (m.lastbeat+(equal(m.lastbeat, 0)*m.time));
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.peakbass_att = Math.max(m.bass_att, m.peakbass_att);
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ((m.beat*m.bass_att)+(((1-m.beat)*m.peakbass_att)*((above((m.time-m.lastbeat), (2*m.beatrate))*0.95)+((1-above((m.time-m.lastbeat), (2*m.beatrate)))*0.995))));
m.lastbeat = ((m.beat*m.time)+((1-m.beat)*m.lastbeat));
m.peakbass_att = Math.max(m.peakbass_att, (1.1*m.meanbass_att));
m.beat = ((above(m.volume, 0.8)*below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)))*above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))));
m.beatcounter = (m.beatcounter+m.beat);
m.mode = ifcond((m.beat*equal(mod(m.beatcounter,2), 0)), (1-m.mode), m.mode);
m.flip = ((2*m.mode)-1);
m.monitor = m.flip;
m.q8 = m.flip;
m.angadv = (m.angadv+m.beat);
m.angadv = ifcond(above(m.angadv, 5), 2, m.angadv);
m.q7 = m.angadv;
m.decay = 0.95;
m.zoom = 1.002;
m.vol = (((m.bass_att+m.mid_att)+m.treb_att)*0.25);
m.vol = (m.vol*m.vol);
m.mtime = (m.mtime+(((m.vol*0.1)*m.flip)*div(37,m.fps)));
m.q1 = (m.mtime*0.4);
m.warp = 0.0;
m.cx = ((Math.sin((m.mtime*0.2))*0.4)+0.5);
m.cy = Math.sin((m.mtime*0.33));
m.cys = sign(m.cy);
m.cy = ((m.cy*m.cy)*m.cys);
m.cy = ((m.cy*0.4)+0.5);
m.rot = (Math.sin((m.time*0.25))*0.31);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.tbr = (0.7+(m.treb*0.3));
m.var = ((-2*m.tbr)*0.75);
m.ag = (Math.atan(div(((m.y-0.5)-(m.cy-0.5)),((m.x-0.5)-(m.cx-0.5))))*1.75);
m.star = (Math.sin((m.ang*m.q7))*m.tbr);
m.rdd = (Math.max(Math.abs((m.x-0.5)), Math.abs((m.y-0.5)))*4);
m.zm = (((1+div(m.rdd,40))+div(m.var,40))+(m.star*0.003));
m.sx = 0.8;
m.sy = m.sx;
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
			enabled : 0.0,
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
m.xs = div(-m.xp,m.zp);
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
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=q1 + phs;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=flip*0.1 + (sin(tm)*0.5 + 0.5)*0.2;\n' + 'zp=0;\n' + 'ang=sin(tm*2 )*0.5 +0.5;\n' + 'xq=xp;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=tm*8;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*1.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'ang=-1.0 + cos(tm*3.1 + 0.5);\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2.3)*1.75 - 1.05;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp*sinang + zp*cosang;\n' + 'yq=yp;\n' + 'zq=xp*cosang - zp*sinang;\n' + 'ang=cos(tm)*0.5 - 0.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq;\n' + 'yp=yq*cosang - zq*sinang;\n' + 'zp=yq*sinang + zq*cosang;\n' + 'zp=zp+2;\n' + 'xs=-xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=if( equal(q8,1) , (1-sample) , sample);\n' + 'a=a*a;\n' + 'b=b+pow(1-sample,2)*0.3;\n' + 'r1=t1;\n' + 'g1=t2;\n' + 'b1=t3;\n' + 'r2=t4;\n' + 'g2=t5;\n' + 'b2=t6;\n' + 'r=r1*flip + r2*(1-flip);\n' + 'g=g1*flip + g2*(1-flip);\n' + 'b=b1*flip + b2*(1-flip);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
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
m.xs = div(-m.xp,m.zp);
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
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=q1 + phs;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=flip*0.1 + (sin(tm)*0.5 + 0.5)*0.2 +0.1;\n' + 'yp=-yp;\n' + 'zp=0;\n' + 'ang=sin(tm*2)*0.5 +0.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=tm*8;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*1.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'ang=-1.0 + cos(tm*3.1 + 0.5);\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2.3)*1.75 - 1.05;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp*sinang + zp*cosang;\n' + 'yq=yp;\n' + 'zq=xp*cosang - zp*sinang;\n' + 'ang=cos(tm)*0.5 - 0.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq;\n' + 'yp=yq*cosang - zq*sinang;\n' + 'zp=yq*sinang + zq*cosang;\n' + 'zp=zp+2;\n' + 'xs=-xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=if( equal(q8,1) , (1-sample) , sample);\n' + 'a=a*a;\n' + 'b=b+pow(1-sample,2)*0.3;\n' + 'r1=t1;\n' + 'g1=t2;\n' + 'b1=t3;\n' + 'r2=t4;\n' + 'g2=t5;\n' + 'b2=t6;\n' + 'r=r1*flip + r2*(1-flip);\n' + 'g=g1*flip + g2*(1-flip);\n' + 'b=b1*flip + b2*(1-flip);'),

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
			rad : 0.038091,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 1.0,
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
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;\n' + 'warp=0;'),
	'frame_eqs_str' : ('zoom=1;\n' + 'volume = 0.3*(bass+mid+att);\n' + 'beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);\n' + 'lastbeat = lastbeat + equal(lastbeat,0)*time;\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = max(bass_att,peakbass_att);\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.95 + (1-above(time - lastbeat, 2*beatrate))*0.995);\n' + 'lastbeat = beat*time + (1-beat)*lastbeat;\n' + 'peakbass_att = max(peakbass_att,1.1*meanbass_att);\n' + 'beat = above(volume,0.8)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));\n' + 'beatcounter = beatcounter + beat;\n' + 'mode = if(beat*equal(beatcounter%2,0),1-mode,mode);\n' + 'flip = 2*mode-1;\n' + 'monitor=flip;\n' + 'q8=flip;\n' + 'angadv=angadv+beat;\n' + 'angadv=if( above(angadv,5) , 2 , angadv );\n' + 'q7=angadv;\n' + 'decay=0.95;\n' + 'zoom=1.002;\n' + 'vol=(bass_att+mid_att+treb_att)*0.25;\n' + 'vol=vol*vol;\n' + 'mtime=mtime+vol*0.1*flip*(37/fps);\n' + 'q1=mtime*0.4;\n' + 'warp=0.0;\n' + 'cx=sin(mtime*0.2)*0.4 + 0.5;\n' + 'cy=sin(mtime*0.33);\n' + 'cys=sign(cy);\n' + 'cy=cy*cy*cys;\n' + 'cy=cy*0.4+0.5;\n' + 'rot=sin(time*0.25)*0.31;'),
	'pixel_eqs_str' : ('tbr=0.7+treb*0.3;\n' + 'var=-2*tbr*0.75;\n' + 'ag=atan( (y-0.5-(cy-0.5))/(x-0.5-(cx-0.5)) )*1.75;\n' + 'star=sin(ang*q7)*tbr;\n' + 'rdd=max( abs(x-0.5) , abs(y-0.5) )*4 ;\n' + 'zm=1+(rdd/40)+(var/40)+star*0.003 ;\n' + 'sx=0.8;\n' + 'sy=sx;'),
};

return pmap;
});
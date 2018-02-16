define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.4,
		ib_g : 0.0,
		mv_x : 30.080032,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 35.040012,
		wave_scale : 0.011726,
		echo_alpha : 0.0,
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
		mv_b : 0.05,
		echo_zoom : 0.99663,
		ob_size : 0.03,
		wave_smoothing : 0.9,
		warpanimspeed : 0.010284,
		wave_dots : 1.0,
		mv_g : 0.71,
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
		mv_l : 3.399997,
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
		mv_r : 0.080001,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.ttime = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.btime = 0;
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
m.btime = 0;
m.mtime = 0;
m.ttime = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.95;
m.zoom = -1;
m.warp = 0;
m.btime = (m.btime+(((m.bass*m.bass)*m.bass)*0.005));
m.mtime = (m.mtime+(((m.mid*m.mid)*m.mid)*0.005));
m.ttime = (m.ttime+(((m.treb*m.treb)*m.treb)*0.005));
m.q6 = m.btime;
m.q7 = m.mtime;
m.q8 = m.ttime;
m.dy = 0.001;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zm = (Math.sin((m.ang*3))*0.01);
m.zm = 0;
m.sx = (1+m.zm);
m.sy = (1-m.zm);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.2,
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
m.q6 = 0;
m.zero = 0;
m.n = 0;
m.sc = 0;
m.s = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.xq = 0;
m.ang = 0;
m.t1 = 0;
m.mirror = 0;
m.mtime = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q6;
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.sc = (m.sample*32);
m.s = (m.sc-Math.floor(m.sc));
m.xp = ifcond(below(m.s, 0.25), m.s, 0.25);
m.xp = ifcond(above(m.s, 0.75), (1-m.s), m.xp);
m.yp = ifcond(below(m.s, 0.25), 0.25, m.s);
m.yp = ifcond(above(m.s, 0.75), 0.75, m.yp);
m.zp = 0;
m.yp = (m.yp-0.475);
m.ang = (m.n*2);
m.xq = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yq = m.yp;
m.zq = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = (m.t1*0.9);
m.xp = m.xq;
m.yp = ((m.yq*Math.sin(m.ang))+(m.zq*Math.cos(m.ang)));
m.zp = ((m.yq*Math.cos(m.ang))-(m.zq*Math.sin(m.ang)));
m.xq = m.xp;
m.yq = m.yp;
m.zq = m.zp;
m.ang = (m.t1*0.2);
m.xq = ((m.xp*Math.sin(m.ang))+(m.yp*Math.cos(m.ang)));
m.yq = ((m.xp*Math.cos(m.ang))-(m.yp*Math.sin(m.ang)));
m.zq = m.zp;
m.mirror = ifcond(above(m.sample, 0.5), -1, 1);
m.xp = (m.xq+(Math.sin(m.t1)*0.6));
m.xp = (m.xp*m.mirror);
m.yp = (m.yq+(Math.sin((m.t1*0.9))*0.6));
m.zp = (m.zq+(Math.sin((m.t1*0.7))*0.6));
m.zp = (m.zp+1.1);
m.x = ((div(m.xp,m.zp)*0.3)+0.5);
m.y = (((div(m.yp,m.zp)*1.3)*0.3)+0.5);
m.zero = (above(m.sample, 0.49)*below(m.sample, 0.51));
m.a = ((Math.min((m.bass*m.bass), 1)*0.6)*(1-m.zero));
		return m;
	},
		'init_eqs_str' : ('mtime=0;'),
		'frame_eqs_str' : ('t1=q6;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'sc=sample*32;\n' + 's=sc - int(sc);\n' + 'xp= if( below(s,0.25) , s , 0.25);\n' + 'xp= if( above(s,0.75) , 1-s, xp );\n' + 'yp= if( below(s,0.25) , 0.25, s );\n' + 'yp= if( above(s,0.75) , 0.75, yp);\n' + 'zp=0;\n' + 'yp=yp-0.475;\n' + 'ang=n*2;\n' + 'xq=xp*sin(ang) + zp*cos(ang);\n' + 'yq=yp;\n' + 'zq=xp*cos(ang) - zp*sin(ang);\n' + 'ang=t1*0.9;\n' + 'xp=xq;\n' + 'yp=yq*sin(ang) + zq*cos(ang);\n' + 'zp=yq*cos(ang) - zq*sin(ang);\n' + 'xq=xp;\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=t1*0.2;\n' + 'xq=xp*sin(ang) + yp*cos(ang);\n' + 'yq=xp*cos(ang) - yp*sin(ang);\n' + 'zq=zp;\n' + 'mirror=if(above(sample,0.5) , -1 , 1);\n' + 'xp=xq + sin(t1)*0.6;\n' + 'xp=xp*mirror;\n' + 'yp=yq + sin(t1*0.9)*0.6;\n' + 'zp=zq + sin(t1*0.7)*0.6;\n' + 'zp=zp+1.1;\n' + 'x=(xp/zp)*0.3 + 0.5;\n' + 'y=(yp/zp)*1.3*0.3 + 0.5;\n' + 'zero= above(sample,0.49) * below(sample,0.51);\n' + 'a=min(bass*bass,1)*0.6 * (1-zero);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.7,
			g : 0.0,
			scaling : 1.0,
			samples : 252.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.5,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q7 = 0;
m.zero = 0;
m.n = 0;
m.sc = 0;
m.s = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.xq = 0;
m.ang = 0;
m.t1 = 0;
m.mirror = 0;
m.mtime = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q7;
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.sc = (m.sample*32);
m.s = (m.sc-Math.floor(m.sc));
m.xp = ifcond(below(m.s, 0.25), m.s, 0.25);
m.xp = ifcond(above(m.s, 0.75), (1-m.s), m.xp);
m.yp = ifcond(below(m.s, 0.25), 0.25, m.s);
m.yp = ifcond(above(m.s, 0.75), 0.75, m.yp);
m.zp = 0;
m.yp = (m.yp-0.475);
m.ang = (m.n*2);
m.xq = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yq = m.yp;
m.zq = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = m.t1;
m.xp = m.xq;
m.yp = ((m.yq*Math.sin(m.ang))+(m.zq*Math.cos(m.ang)));
m.zp = ((m.yq*Math.cos(m.ang))-(m.zq*Math.sin(m.ang)));
m.xq = m.xp;
m.yq = m.yp;
m.zq = m.zp;
m.ang = m.t1;
m.xq = ((m.xp*Math.sin(m.ang))+(m.yp*Math.cos(m.ang)));
m.yq = ((m.xp*Math.cos(m.ang))-(m.yp*Math.sin(m.ang)));
m.zq = m.zp;
m.mirror = ifcond(above(m.sample, 0.5), -1, 1);
m.xp = (m.xq+(Math.sin(m.t1)*0.6));
m.xp = (m.xp*m.mirror);
m.yp = (m.yq+(Math.sin((m.t1*0.9))*0.6));
m.zp = (m.zq+(Math.sin((m.t1*0.7))*0.6));
m.zp = (m.zp+1.1);
m.x = ((div(m.xp,m.zp)*0.3)+0.5);
m.y = (((div(m.yp,m.zp)*1.3)*0.3)+0.5);
m.zero = (above(m.sample, 0.49)*below(m.sample, 0.51));
m.a = ((Math.min((m.mid*m.mid), 1)*0.6)*(1-m.zero));
		return m;
	},
		'init_eqs_str' : ('mtime=0;'),
		'frame_eqs_str' : ('t1=q7;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'sc=sample*32;\n' + 's=sc - int(sc);\n' + 'xp= if( below(s,0.25) , s , 0.25);\n' + 'xp= if( above(s,0.75) , 1-s, xp );\n' + 'yp= if( below(s,0.25) , 0.25, s );\n' + 'yp= if( above(s,0.75) , 0.75, yp);\n' + 'zp=0;\n' + 'yp=yp-0.475;\n' + 'ang=n*2;\n' + 'xq=xp*sin(ang) + zp*cos(ang);\n' + 'yq=yp;\n' + 'zq=xp*cos(ang) - zp*sin(ang);\n' + 'ang=t1;\n' + 'xp=xq;\n' + 'yp=yq*sin(ang) + zq*cos(ang);\n' + 'zp=yq*cos(ang) - zq*sin(ang);\n' + 'xq=xp;\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=t1;\n' + 'xq=xp*sin(ang) + yp*cos(ang);\n' + 'yq=xp*cos(ang) - yp*sin(ang);\n' + 'zq=zp;\n' + 'mirror=if(above(sample,0.5) , -1 , 1);\n' + 'xp=xq + sin(t1)*0.6;\n' + 'xp=xp*mirror;\n' + 'yp=yq + sin(t1*0.9)*0.6;\n' + 'zp=zq + sin(t1*0.7)*0.6;\n' + 'zp=zp+1.1;\n' + 'x=(xp/zp)*0.3 + 0.5;\n' + 'y=(yp/zp)*1.3*0.3 + 0.5;\n' + 'zero= above(sample,0.49) * below(sample,0.51);\n' + 'a=min(mid*mid,1)*0.6 * (1-zero);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.6,
			scaling : 1.0,
			samples : 252.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.3,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;
m.zero = 0;
m.n = 0;
m.sc = 0;
m.s = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.xq = 0;
m.ang = 0;
m.t1 = 0;
m.mirror = 0;
m.mtime = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q8;
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.sc = (m.sample*32);
m.s = (m.sc-Math.floor(m.sc));
m.xp = ifcond(below(m.s, 0.25), m.s, 0.25);
m.xp = ifcond(above(m.s, 0.75), (1-m.s), m.xp);
m.yp = ifcond(below(m.s, 0.25), 0.25, m.s);
m.yp = ifcond(above(m.s, 0.75), 0.75, m.yp);
m.zp = 0;
m.yp = (m.yp-0.475);
m.ang = (m.n*2);
m.xq = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yq = m.yp;
m.zq = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = (m.t1*0.9);
m.xp = m.xq;
m.yp = ((m.yq*Math.sin(m.ang))+(m.zq*Math.cos(m.ang)));
m.zp = ((m.yq*Math.cos(m.ang))-(m.zq*Math.sin(m.ang)));
m.xq = m.xp;
m.yq = m.yp;
m.zq = m.zp;
m.ang = (m.t1*0.2);
m.xq = ((m.xp*Math.sin(m.ang))+(m.yp*Math.cos(m.ang)));
m.yq = ((m.xp*Math.cos(m.ang))-(m.yp*Math.sin(m.ang)));
m.zq = m.zp;
m.mirror = ifcond(above(m.sample, 0.5), -1, 1);
m.xp = (m.xq+(Math.sin(m.t1)*0.6));
m.xp = (m.xp*m.mirror);
m.yp = (m.yq+(Math.sin((m.t1*0.9))*0.6));
m.zp = (m.zq+(Math.sin((m.t1*0.7))*0.6));
m.zp = (m.zp+1.1);
m.x = ((div(m.xp,m.zp)*0.3)+0.5);
m.y = (((div(m.yp,m.zp)*1.3)*0.3)+0.5);
m.zero = (above(m.sample, 0.49)*below(m.sample, 0.51));
m.a = ((Math.min((m.treb*m.treb), 1)*0.6)*(1-m.zero));
		return m;
	},
		'init_eqs_str' : ('mtime=0;'),
		'frame_eqs_str' : ('t1=q8;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'sc=sample*32;\n' + 's=sc - int(sc);\n' + 'xp= if( below(s,0.25) , s , 0.25);\n' + 'xp= if( above(s,0.75) , 1-s, xp );\n' + 'yp= if( below(s,0.25) , 0.25, s );\n' + 'yp= if( above(s,0.75) , 0.75, yp);\n' + 'zp=0;\n' + 'yp=yp-0.475;\n' + 'ang=n*2;\n' + 'xq=xp*sin(ang) + zp*cos(ang);\n' + 'yq=yp;\n' + 'zq=xp*cos(ang) - zp*sin(ang);\n' + 'ang=t1*0.9;\n' + 'xp=xq;\n' + 'yp=yq*sin(ang) + zq*cos(ang);\n' + 'zp=yq*cos(ang) - zq*sin(ang);\n' + 'xq=xp;\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=t1*0.2;\n' + 'xq=xp*sin(ang) + yp*cos(ang);\n' + 'yq=xp*cos(ang) - yp*sin(ang);\n' + 'zq=zp;\n' + 'mirror=if(above(sample,0.5) , -1 , 1);\n' + 'xp=xq + sin(t1)*0.6;\n' + 'xp=xp*mirror;\n' + 'yp=yq + sin(t1*0.9)*0.6;\n' + 'zp=zq + sin(t1*0.7)*0.6;\n' + 'zp=zp+1.1;\n' + 'x=(xp/zp)*0.3 + 0.5;\n' + 'y=(yp/zp)*1.3*0.3 + 0.5;\n' + 'zero= above(sample,0.49) * below(sample,0.51);\n' + 'a=min(treb*treb,1)*0.6 * (1-zero);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 252.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t8 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.za = 0;
m.zero = 0;
m.ya = 0;
m.xa = 0;
m.n = 0;
m.sc = 0;
m.s = 0;
m.zp = 0;
m.z1 = 0;
m.yp = 0;
m.zq = 0;
m.y1 = 0;
m.xp = 0;
m.z2 = 0;
m.yq = 0;
m.x1 = 0;
m.y2 = 0;
m.xq = 0;
m.z3 = 0;
m.mtime = 0;
m.ang = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.mirror = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x1 = (Math.sin(m.q6)*0.6);
m.y1 = (Math.sin((m.q6*0.9))*0.6);
m.z1 = (Math.sin((m.q6*0.7))*0.6);
m.x2 = (Math.sin(m.q7)*0.6);
m.y2 = (Math.sin((m.q7*0.9))*0.6);
m.z2 = (Math.sin((m.q7*0.7))*0.6);
m.x3 = (Math.sin(m.q8)*0.6);
m.y3 = (Math.sin((m.q8*0.9))*0.6);
m.z3 = (Math.sin((m.q8*0.7))*0.6);
m.xa = div(((m.x1+m.x2)+m.x3),3);
m.ya = div(((m.y1+m.y2)+m.y3),3);
m.za = div(((m.z1+m.z2)+m.z3),3);
m.t1 = m.xa;
m.t2 = m.ya;
m.t3 = m.za;
m.mtime = div(((m.q6+m.q7)+m.q8),3);
m.t8 = m.mtime;
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.sc = (m.sample*32);
m.s = (m.sc-Math.floor(m.sc));
m.xp = ifcond(below(m.s, 0.25), m.s, 0.25);
m.xp = (ifcond(above(m.s, 0.75), (1-m.s), m.xp)*0.3);
m.yp = ifcond(below(m.s, 0.25), 0.25, m.s);
m.yp = (ifcond(above(m.s, 0.75), 0.75, m.yp)*0.3);
m.zp = 0;
m.yp = (m.yp-0.475);
m.ang = (m.n*2);
m.xq = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yq = m.yp;
m.zq = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = (m.t8*0.9);
m.xp = m.xq;
m.yp = ((m.yq*Math.sin(m.ang))+(m.zq*Math.cos(m.ang)));
m.zp = ((m.yq*Math.cos(m.ang))-(m.zq*Math.sin(m.ang)));
m.xq = m.xp;
m.yq = m.yp;
m.zq = m.zp;
m.ang = (m.t8*0.2);
m.xq = ((m.xp*Math.sin(m.ang))+(m.yp*Math.cos(m.ang)));
m.yq = ((m.xp*Math.cos(m.ang))-(m.yp*Math.sin(m.ang)));
m.zq = m.zp;
m.mirror = ifcond(above(m.sample, 0.5), -1, 1);
m.xp = (m.xq+m.t1);
m.xp = (m.xp*m.mirror);
m.yp = (m.yq+m.t2);
m.zp = (m.zq+m.t3);
m.zp = (m.zp+1.1);
m.x = ((div(m.xp,m.zp)*0.3)+0.5);
m.y = (((div(m.yp,m.zp)*1.3)*0.3)+0.5);
m.zero = (above(m.sample, 0.49)*below(m.sample, 0.51));
m.a = ((Math.min(pow((((m.bass+m.mid)+m.treb)*0.15), 2), 1)*0.3)*(1-m.zero));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x1=sin(q6)*0.6;\n' + 'y1=sin(q6*0.9)*0.6;\n' + 'z1=sin(q6*0.7)*0.6;\n' + 'x2=sin(q7)*0.6;\n' + 'y2=sin(q7*0.9)*0.6;\n' + 'z2=sin(q7*0.7)*0.6;\n' + 'x3=sin(q8)*0.6;\n' + 'y3=sin(q8*0.9)*0.6;\n' + 'z3=sin(q8*0.7)*0.6;\n' + 'xa=(x1+x2+x3)/3;\n' + 'ya=(y1+y2+y3)/3;\n' + 'za=(z1+z2+z3)/3;\n' + 't1=xa;\n' + 't2=ya;\n' + 't3=za;\n' + 'mtime=(q6+q7+q8)/3;\n' + 't8=mtime;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'sc=sample*32;\n' + 's=sc - int(sc);\n' + 'xp= if( below(s,0.25) , s , 0.25);\n' + 'xp= if( above(s,0.75) , 1-s, xp )*0.3;\n' + 'yp= if( below(s,0.25) , 0.25, s );\n' + 'yp= if( above(s,0.75) , 0.75, yp)*0.3;\n' + 'zp=0;\n' + 'yp=yp-0.475;\n' + 'ang=n*2;\n' + 'xq=xp*sin(ang) + zp*cos(ang);\n' + 'yq=yp;\n' + 'zq=xp*cos(ang) - zp*sin(ang);\n' + 'ang=t8*0.9;\n' + 'xp=xq;\n' + 'yp=yq*sin(ang) + zq*cos(ang);\n' + 'zp=yq*cos(ang) - zq*sin(ang);\n' + 'xq=xp;\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=t8*0.2;\n' + 'xq=xp*sin(ang) + yp*cos(ang);\n' + 'yq=xp*cos(ang) - yp*sin(ang);\n' + 'zq=zp;\n' + 'mirror=if(above(sample,0.5) , -1 , 1);\n' + 'xp=xq +t1;\n' + 'xp=xp*mirror;\n' + 'yp=yq +t2;\n' + 'zp=zq +t3;\n' + 'zp=zp+1.1;\n' + 'x=(xp/zp)*0.3 + 0.5;\n' + 'y=(yp/zp)*1.3*0.3 + 0.5;\n' + 'zero= above(sample,0.49) * below(sample,0.51);\n' + 'a=min(pow((bass+mid+treb)*0.15,2) , 1)*0.3*(1-zero);'),

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
			tex_zoom : 0.980295,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.3,
			r : 1.0,
			border_g : 1.0,
			rad : 0.995947,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.y = 0.498;
m.x = 0.4997;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('y=0.498;\n' + 'x=0.4997;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 100.0,
			additive : 1.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.04,
			r : 1.0,
			border_g : 1.0,
			rad : 1.791419,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.bdom = 0;
m.tdom = 0;
m.mdom = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.b2 = Math.sin(m.time);
m.bdom = (above(m.bass_att, m.mid_att)*above(m.bass_att, m.treb_att));
m.mdom = (above(m.mid_att, m.bass_att)*above(m.mid_att, m.treb_att));
m.tdom = (above(m.treb_att, m.mid_att)*above(m.treb_att, m.bass_att));
m.r = m.bdom;
m.r2 = m.r;
m.g = m.mdom;
m.g2 = m.g;
m.b = m.tdom;
m.b2 = m.b;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('b2=sin(time);\n' + 'bdom=above(bass_att,mid_att ) * above(bass_att,treb_att);\n' + 'mdom=above(mid_att ,bass_att) * above(mid_att, treb_att);\n' + 'tdom=above(treb_att ,mid_att ) * above(treb_att,bass_att);\n' + 'r=bdom;\n' + 'r2=r;\n' + 'g=mdom;\n' + 'g2=g;\n' + 'b=tdom;\n' + 'b2=b;'),

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

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;\n' + 'btime=0;\n' + 'mtime=0;\n' + 'ttime=0;'),
	'frame_eqs_str' : ('decay=0.95;\n' + 'zoom=-1;\n' + 'warp=0;\n' + 'btime=btime + (bass*bass*bass)*0.005;\n' + 'mtime=mtime + (mid*mid*mid)*0.005;\n' + 'ttime=ttime + (treb*treb*treb)*0.005;\n' + 'q6=btime;\n' + 'q7=mtime;\n' + 'q8=ttime;\n' + 'dy=0.001;'),
	'pixel_eqs_str' : ('zm=sin(ang*3 )*0.01;\n' + 'zm=0;\n' + 'sx=1+zm;\n' + 'sy=1-zm;'),
};

return pmap;
});
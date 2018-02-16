define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
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
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 1.006596,
		ob_size : 0.0,
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
		rating : 2.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.mvol = 0;
m.q8 = 0;
m.mvolb = 0;
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
m.zoom = 1.000;
m.warp = 0;
m.q1 = ((m.mid_att+m.treb_att)*0.25);
m.q2 = (1-(Math.min(m.q1, 2)*0.6));
m.mvol = (((m.bass_att+m.mid_att)+m.treb_att)*0.33);
m.mvolb = ((m.mvolb-0.007)+(m.mvol*0.007));
m.mvolb = Math.max(m.mvolb, 0);
m.mvolb = Math.min(m.mvolb, 1);
m.q8 = m.mvolb;
m.monitor = m.q8;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (0.99+(((Math.sin(((m.ang*(2+div(m.treb,3)))+(m.time*3)))*0.5)+0.5)*0.04));
m.sx = -1;
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.11,
			g : 0.04,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.06,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.points = 0;
m.t8 = 0;
m.step1 = 0;
m.cycle = 0;
m.step2 = 0;
m.sang = 0;
m.third = 0;
m.scale = 0;
m.n = 0;
m.pos = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.xq = 0;
m.ang = 0;
m.ys = 0;
m.xs = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.black = 0;

			m.rkeys = ['b','t8','g','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.time*0.5);
m.t2 = (m.time*0.33);
m.t3 = (m.time*0.23);
m.t8 = -1;
		return m;
	},
		'point_eqs' : function(m) {
m.scale = (1+m.q1);
m.n = ((m.sample*6.283)*4);
m.third = div(6.283,3);
m.cycle = Math.floor((m.sample*4));
m.pos = m.t8;
m.pos = ifcond(equal(m.pos, 1), -1, (m.pos+1));
m.pos = ifcond(equal(((m.sample*4)-m.cycle), 0), 0, m.pos);
m.t8 = m.pos;
m.points = equal(m.pos, 0);
m.a = (equal(m.pos, 0)*m.q2);
m.xp = (((Math.sin(m.n)*0.05)*m.points)*m.scale);
m.yp = m.pos;
m.zp = (((Math.cos(m.n)*0.05)*m.points)*m.scale);
m.ang = (div(3.1415,2)-(above(m.cycle, 0.99)*m.third));
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.yp*m.cang));
m.yq = ((m.xp*m.cang)-(m.yp*m.sang));
m.zq = m.zp;
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = div(3.1415,2);
m.step1 = (equal(m.cycle, 2)*m.third);
m.step2 = ((equal(m.cycle, 3)*m.third)*2);
m.ang = ((m.ang+m.step1)+m.step2);
m.ang = m.ang;
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.time*0.23);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.time*0.6);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = (m.zp+4.1);
m.xs = (div(m.xp,m.zp)+0.5);
m.ys = ((div(m.yp,m.zp)*1.333)+0.5);
m.x = m.xs;
m.y = m.ys;
m.black = (1-equal(m.pos, 0));
m.r = (m.r*m.black);
m.g = (m.g*m.black);
m.b = (m.b*m.black);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=time*0.5;\n' + 't2=time*0.33;\n' + 't3=time*0.23;\n' + 't8=-1;'),
		'point_eqs_str' : ('scale=1+q1;\n' + 'n=sample*6.283*4;\n' + 'third=6.283/3;\n' + 'cycle=int(sample*4);\n' + 'pos=t8;\n' + 'pos=if( equal(pos,1) , -1 , pos+1 );\n' + 'pos=if( equal(sample*4-cycle,0) , 0 , pos);\n' + 't8=pos;\n' + 'points= equal(pos,0);\n' + 'a=equal(pos,0)*q2;\n' + 'xp=sin(n) * 0.05 *points *scale;\n' + 'yp=pos;\n' + 'zp=cos(n) * 0.05 *points *scale;\n' + 'ang=3.1415/2 - above(cycle,0.99) * third;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + yp*cang;\n' + 'yq=xp*cang - yp*sang;\n' + 'zq=zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=3.1415/2;\n' + 'step1=equal(cycle,2)*third;\n' + 'step2=equal(cycle,3)*third*2;\n' + 'ang=ang+step1+step2;\n' + 'ang=ang ;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + zp*cang;\n' + 'yq=yp;\n' + 'zq=xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=time*0.23;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sang + zp*cang;\n' + 'zq=yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=time*0.6;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + zp*cang;\n' + 'yq=yp;\n' + 'zq=xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp=zp+4.1;\n' + 'xs=xp/zp + 0.5;\n' + 'ys=yp/zp *1.333 + 0.5;\n' + 'x=xs;\n' + 'y=ys;\n' + 'black=1 - equal(pos,0);\n' + 'r=r*black;\n' + 'g=g*black;\n' + 'b=b*black;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.02,
			g : 0.04,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.06,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.points = 0;
m.t8 = 0;
m.step1 = 0;
m.cycle = 0;
m.step2 = 0;
m.sang = 0;
m.third = 0;
m.q8 = 0;
m.scale = 0;
m.n = 0;
m.pos = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.xq = 0;
m.ang = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.scale = (1+m.q1);
m.n = ((m.sample*6.283)*4);
m.third = div(6.283,3);
m.cycle = Math.floor((m.sample*4));
m.pos = m.t8;
m.pos = ifcond(equal(m.pos, 1), -1, (m.pos+1));
m.pos = ifcond(equal(((m.sample*4)-m.cycle), 0), 0, m.pos);
m.t8 = m.pos;
m.points = equal(m.pos, 0);
m.a = (equal(m.pos, 0)*m.q2);
m.xp = (((Math.sin(m.n)*0.05)*m.points)*m.scale);
m.yp = m.pos;
m.zp = (((Math.cos(m.n)*0.05)*m.points)*m.scale);
m.ang = (div(3.1415,2)-(above(m.cycle, 0.99)*m.third));
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.yp*m.cang));
m.yq = ((m.xp*m.cang)-(m.yp*m.sang));
m.zq = m.zp;
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = div(3.1415,2);
m.step1 = (equal(m.cycle, 2)*m.third);
m.step2 = ((equal(m.cycle, 3)*m.third)*2);
m.ang = ((m.ang+m.step1)+m.step2);
m.ang = m.ang;
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.yp = -m.yp;
m.ang = (m.time*0.23);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.time*0.6);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = (m.zp+4.1);
m.xs = (div(m.xp,m.zp)+0.5);
m.ys = ((div(m.yp,m.zp)*1.333)+0.5);
m.x = m.xs;
m.y = m.ys;
m.a = (m.a*(1-(m.q8*0.5)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('scale=1+q1;\n' + 'n=sample*6.283*4;\n' + 'third=6.283/3;\n' + 'cycle=int(sample*4);\n' + 'pos=t8;\n' + 'pos=if( equal(pos,1) , -1 , pos+1 );\n' + 'pos=if( equal(sample*4-cycle,0) , 0 , pos);\n' + 't8=pos;\n' + 'points= equal(pos,0);\n' + 'a=equal(pos,0)*q2;\n' + 'xp=sin(n) * 0.05 *points *scale;\n' + 'yp=pos;\n' + 'zp=cos(n) * 0.05 *points *scale;\n' + 'ang=3.1415/2 - above(cycle,0.99) * third;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + yp*cang;\n' + 'yq=xp*cang - yp*sang;\n' + 'zq=zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=3.1415/2;\n' + 'step1=equal(cycle,2)*third;\n' + 'step2=equal(cycle,3)*third*2;\n' + 'ang=ang+step1+step2;\n' + 'ang=ang ;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + zp*cang;\n' + 'yq=yp;\n' + 'zq=xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'yp=-yp;\n' + 'ang=time*0.23;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sang + zp*cang;\n' + 'zq=yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=time*0.6;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + zp*cang;\n' + 'yq=yp;\n' + 'zq=xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp=zp+4.1;\n' + 'xs=xp/zp + 0.5;\n' + 'ys=yp/zp *1.333 + 0.5;\n' + 'x=xs;\n' + 'y=ys;\n' + 'a=a*(1-q8*0.5);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.05,
			g : 0.12,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.21,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.advance = 0;
m.ag = 0;
m.y_screen = 0;
m.s = 0;
m.x_screen = 0;
m.zp = 0;
m.yp = 0;
m.xp = 0;
m.t1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.advance = (m.advance+0.005);
m.advance = ifcond(above(m.advance, 2), 0, m.advance);
m.t1 = m.advance;
		return m;
	},
		'point_eqs' : function(m) {
m.s = (m.sample*6.28);
m.xp = (((Math.sin(m.s)+Math.sin((m.s*0.34)))+Math.sin((m.s*24.3)))+Math.sin((m.s*13.8)));
m.xp = (m.xp*0.20);
m.yp = (((Math.cos(m.s)+Math.sin((m.s*0.24)))+Math.cos((m.s*17.4)))+Math.sin((m.s*37.7)));
m.yp = (m.yp*0.20);
m.zp = (((Math.cos(m.s)+Math.cos((m.s*5.24)))+Math.cos((m.s*47.4)))+Math.cos((m.s*27.7)));
m.zp = (m.zp*0.25);
m.zp = ((m.zp+1)-m.t1);
m.zp = ifcond(below(m.zp, 0), (m.zp+2), m.zp);
m.a = (1-(m.zp*0.5));
m.zp = (m.zp*0.7);
m.x_screen = (div(m.xp,m.zp)+0.5);
m.y_screen = ((div(m.yp,m.zp)*1.333)+0.5);
m.x = m.x_screen;
m.y = m.y_screen;
m.ag = Math.atan(div((m.y-0.5),(m.x-0.5)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('advance=advance+ 0.005;\n' + 'advance=if( above(advance,2) , 0, advance);\n' + 't1=advance;'),
		'point_eqs_str' : ('s=sample*6.28;\n' + 'xp=sin(s)+sin(s*0.34)+sin(s*24.3)+sin(s*13.8);\n' + 'xp=xp*0.20;\n' + 'yp=cos(s)+sin(s*0.24)+cos(s*17.4)+sin(s*37.7);\n' + 'yp=yp*0.20;\n' + 'zp=cos(s)+cos(s*5.24)+cos(s*47.4)+cos(s*27.7);\n' + 'zp=zp*0.25;\n' + 'zp=zp + 1 - t1;\n' + 'zp=if( below(zp,0) , zp+2 , zp );\n' + 'a=(1 - zp*0.5);\n' + 'zp=zp*0.7;\n' + 'x_screen=xp/zp + 0.5;\n' + 'y_screen=yp/zp*1.333 + 0.5;\n' + 'x=x_screen;\n' + 'y=y_screen;\n' + 'ag=atan( (y-0.5)/(x-0.5) );'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.95,
			g : 0.72,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.61,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.advance = 0;
m.ag = 0;
m.y_screen = 0;
m.s = 0;
m.x_screen = 0;
m.sparkle = 0;
m.zp = 0;
m.yp = 0;
m.xp = 0;
m.t1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.advance = (m.advance+0.008);
m.advance = ifcond(above(m.advance, 2), 0, m.advance);
m.t1 = m.advance;
		return m;
	},
		'point_eqs' : function(m) {
m.sparkle = ((Math.sin((((m.sample*6.283)*3)+(m.time*5)))*0.5)+0.5);
m.s = (m.sample*6.28);
m.xp = (((Math.sin(m.s)+Math.sin((m.s*0.34)))+Math.sin((m.s*24.3)))+Math.sin((m.s*13.8)));
m.xp = (m.xp*0.20);
m.yp = (((Math.cos(m.s)+Math.sin((m.s*0.24)))+Math.cos((m.s*17.4)))+Math.sin((m.s*37.7)));
m.yp = (m.yp*0.20);
m.zp = (((Math.cos(m.s)+Math.cos((m.s*5.24)))+Math.cos((m.s*47.4)))+Math.cos((m.s*27.7)));
m.zp = (m.zp*0.25);
m.zp = ((m.zp+1)-m.t1);
m.zp = ifcond(below(m.zp, 0), (m.zp+2), m.zp);
m.a = (1-(m.zp*0.5));
m.a = (m.a*m.sparkle);
m.zp = (m.zp*0.7);
m.x_screen = (div(m.xp,m.zp)+0.5);
m.y_screen = ((div(m.yp,m.zp)*1.333)+0.5);
m.x = m.x_screen;
m.y = m.y_screen;
m.ag = Math.atan(div((m.y-0.5),(m.x-0.5)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('advance=advance+ 0.008;\n' + 'advance=if( above(advance,2) , 0, advance);\n' + 't1=advance;'),
		'point_eqs_str' : ('sparkle=sin(sample*6.283*3+time*5)*0.5+0.5;\n' + 's=sample*6.28;\n' + 'xp=sin(s)+sin(s*0.34)+sin(s*24.3)+sin(s*13.8);\n' + 'xp=xp*0.20;\n' + 'yp=cos(s)+sin(s*0.24)+cos(s*17.4)+sin(s*37.7);\n' + 'yp=yp*0.20;\n' + 'zp=cos(s)+cos(s*5.24)+cos(s*47.4)+cos(s*27.7);\n' + 'zp=zp*0.25;\n' + 'zp=zp + 1 - t1;\n' + 'zp=if( below(zp,0) , zp+2 , zp );\n' + 'a=(1 - zp*0.5);\n' + 'a=a*sparkle;\n' + 'zp=zp*0.7;\n' + 'x_screen=xp/zp + 0.5;\n' + 'y_screen=yp/zp*1.333 + 0.5;\n' + 'x=x_screen;\n' + 'y=y_screen;\n' + 'ag=atan( (y-0.5)/(x-0.5) );'),

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
			g2 : 0.8,
			tex_zoom : 4.722082,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.7,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.323535,
			x : 0.5,
			y : 0.5,
			ang : 0.314159,
			sides : 6.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.a = m.q8;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a=q8;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.980296,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.94,
			a2 : 0.06,
			r : 0.0,
			border_g : 1.0,
			rad : 0.919742,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 36.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = ['tex_zoom'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_zoom = (m.tex_zoom+(Math.sin((m.time*0.3))*0.2));
m.ang = (Math.sin((m.time*0.5))*0.01);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_zoom=tex_zoom+ (sin(time*0.3)*0.2);\n' + 'ang=sin(time*0.5)*0.01;'),

		},
		{
		'baseVals' : {
			r2 : 0.6,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.7,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
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
			r2 : 0.5,
			a : 0.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.7,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.4,
			border_b : 1.0,
			b2 : 0.8,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
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

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=0.98;\n' + 'zoom=1.000;\n' + 'warp=0;\n' + 'q1=(mid_att+treb_att)*0.25;\n' + 'q2=1 - min(q1,2)*0.6;\n' + 'mvol=(bass_att+mid_att+treb_att)*0.33;\n' + 'mvolB=(mvolB-0.007) + mvol*0.007;\n' + 'mvolB=max(mvolB,0);\n' + 'mvolB=min(mvolB,1);\n' + 'q8=mvolB;\n' + 'monitor=q8;'),
	'pixel_eqs_str' : ('zoom=.99 + (sin(ang*(2+(treb/3)) + time*3)*0.5 + 0.5)*0.04;\n' + 'sx=-1;'),
};

return pmap;
});
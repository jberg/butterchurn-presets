define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.7,
		wave_g : 0.65,
		ib_g : 1.0,
		mv_x : 0.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.05,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.999998,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.970816,
		ob_size : 0.005,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.7,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 13.2908,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : -0.28,
		cx : 0.5,
		dy : -0.32,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : -1.0,
		decay : 0.94,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 3.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q4 = 0;
m.q5 = 0;
m.q8 = 0;
m.rd = 0;
m.musictime = 0;
m.vol = 0;
m.backside = 0;
m.zoom = 1;
m.xpos = 0;
m.ypos = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.96;
m.vol = ((m.mid+m.treb)*0.25);
m.vol = (m.vol*m.vol);
m.mv_r = (0.5+(0.4*Math.sin((m.time*1.324))));
m.mv_g = (0.5+(0.4*Math.cos((m.time*1.371))));
m.musictime = (m.musictime+m.vol);
m.q4 = 0;
m.q5 = 0;
m.dx = (Math.sin((m.musictime*0.1))*0.03);
m.dy = (Math.cos((m.musictime*0.069))*0.03);
m.q1 = ((Math.sin((m.musictime*0.001))*0.4)+0.5);
m.q2 = ((Math.cos((m.musictime*0.001))*0.5)+0.5);
m.q8 = (m.musictime*0.1);
m.monitor = m.rot;
		m.rkeys = ['dy','dx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.warp = m.rad;
m.rd = sqrt((sqr(((m.x-0.5)*2))+sqr(((m.y-0.5)*1.5))));
m.backside = ((m.rd-0.645)*3);
m.backside = Math.min(m.backside, 1);
m.dx = (m.dx*m.backside);
m.dy = (m.dy*m.backside);
m.warp = (m.warp*m.backside);
m.zoom = (1+(13.291*pow(Math.min((m.backside*0.2), 1), 2)));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.1,
			enabled : 1.0,
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
m.size = 0;
m.f = 0;
m.n = 0;
m.t1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (Math.sin((m.time*0.5))*1);
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.size = 0.165;
m.x = ((Math.sin(m.n)*m.size)+0.5);
m.y = (((Math.cos(m.n)*m.size)*1.3333)+0.5);
m.f = m.t1;
m.r = 0;
m.g = 0;
m.b = 0;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1= sin(time*0.5)*1;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'size=0.165;\n' + 'x=sin(n)*size + 0.5;\n' + 'y=cos(n)*size*1.3333 + 0.5;\n' + 'f=t1;\n' + 'r=0;\n' + 'g=0;\n' + 'b=0;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
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
m.bb = 0;
m.gg = 0;
m.rr = 0;
m.rs = 0;
m.sang = 0;
m.q8 = 0;
m.gs = 0;
m.n = 0;
m.bs = 0;
m.rd = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.tm = 0;
m.xq = 0;
m.ang = 0;
m.phs = 0;
m.t1 = 0;
m.t2 = 0;
m.backside = 0;
m.kill = 0;
m.t1 = 1;
			m.rkeys = ['t1'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t2 = ((Math.sin((m.time*0.5))*0.5)+0.5);
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.t1 = -m.t1;
m.phs = (-m.sample*0.5);
m.xp = ((m.t1*m.sample)*0.05);
m.yp = 0;
m.zp = 1;
m.tm = (m.q8*0.65);
m.ang = ((m.tm+(m.phs*0.8))*8);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = ((m.tm+m.phs)*0.2);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.yp*m.cang));
m.yq = ((m.xp*m.cang)-(m.yp*m.sang));
m.zq = m.zp;
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = ((m.tm+m.phs)*0.37);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.backside = above(m.zp, 0);
m.zp = (m.zp+2.5);
m.x = (div(m.xp,m.zp)+0.5);
m.y = ((div(m.yp,m.zp)*1.33)+0.5);
m.rd = sqrt((sqr(((m.x-0.5)*2))+sqr(((m.y-0.5)*1.5))));
m.backside = (m.backside*below(m.rd, 0.645));
m.kill = (1-m.backside);
m.rs = m.sample;
m.rr = ((m.rs-Math.floor(m.rs))*2);
m.rr = ifcond(above(m.rr, 1), (1-m.rr), m.rr);
m.r = (Math.min(m.rr, 1)*above(m.rr, 0));
m.gs = (m.sample*1.1);
m.gg = ((m.gs-Math.floor(m.gs))*2);
m.gg = ifcond(above(m.gg, 1), (1-m.gg), m.gg);
m.g = (Math.min(m.gg, 1)*above(m.gg, 0));
m.bs = (m.sample*1.2);
m.bb = ((m.bs-Math.floor(m.bs))*2);
m.bb = ifcond(above(m.bb, 1), (1-m.bb), m.bb);
m.b = (Math.min(m.bb, 1)*above(m.bb, 0));
m.r = (1-m.sample);
m.g = (m.r*m.r);
m.b = (m.sample*0.5);
m.a = (Math.min(((1-m.sample)*8), 1)*m.kill);
		return m;
	},
		'init_eqs_str' : ('t1=1;'),
		'frame_eqs_str' : ('t2=sin(time*0.5)*0.5+0.5;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 't1=-t1;\n' + 'phs=-sample*0.5;\n' + 'xp=t1*sample*0.05;\n' + 'yp=0;\n' + 'zp=1;\n' + 'tm=q8*0.65;\n' + 'ang=(tm+phs*0.8)*8;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sang + zp*cang;\n' + 'zq=yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=(tm+phs)*0.2;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + yp*cang;\n' + 'yq=xp*cang - yp*sang;\n' + 'zq=zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=(tm+phs)*0.37;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + zp*cang;\n' + 'yq=yp;\n' + 'zq=xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'backside = above(zp,0);\n' + 'zp=zp+2.5;\n' + 'x=xp/zp+0.5;\n' + 'y=yp/zp*1.33+0.5;\n' + 'rd=sqrt( sqr( (x-0.5)*2) + sqr( (y-0.5)*1.5 ) );\n' + 'backside=backside*below(rd,0.645);\n' + 'kill=1-backside;\n' + 'rs=sample;\n' + 'rr=(rs-int(rs))*2;\n' + 'rr=if( above(rr,1) , 1-rr , rr );\n' + 'r=min(rr,1)*above(rr,0);\n' + 'gs=sample*1.1;\n' + 'gg=(gs-int(gs))*2;\n' + 'gg=if( above(gg,1) , 1-gg , gg );\n' + 'g=min(gg,1)*above(gg,0);\n' + 'bs=sample*1.2;\n' + 'bb=(bs-int(bs))*2;\n' + 'bb=if( above(bb,1) , 1-bb , bb );\n' + 'b=min(bb,1)*above(bb,0);\n' + 'r=1-sample;\n' + 'g=r*r;\n' + 'b=sample*0.5;\n' + 'a=min( (1-sample)*8 , 1)*kill;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
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
m.bb = 0;
m.gg = 0;
m.rr = 0;
m.rs = 0;
m.sang = 0;
m.q8 = 0;
m.gs = 0;
m.n = 0;
m.bs = 0;
m.rd = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.tm = 0;
m.xq = 0;
m.ang = 0;
m.phs = 0;
m.t1 = 0;
m.t2 = 0;
m.backside = 0;
m.kill = 0;
m.t1 = 1;
			m.rkeys = ['t1'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t2 = ((Math.sin((m.time*0.5))*0.5)+0.5);
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.t1 = -m.t1;
m.phs = ((-m.sample*0.5)+0.0006);
m.xp = ((m.t1*m.sample)*0.05);
m.yp = 0;
m.zp = 1;
m.tm = (m.q8*0.65);
m.ang = ((m.tm+(m.phs*0.8))*7);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = ((m.tm+m.phs)*0.24);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.yp*m.cang));
m.yq = ((m.xp*m.cang)-(m.yp*m.sang));
m.zq = m.zp;
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = ((m.tm+m.phs)*0.31);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.backside = above(m.zp, 0);
m.zp = (m.zp+2.5);
m.x = (div(m.xp,m.zp)+0.5);
m.y = ((div(m.yp,m.zp)*1.33)+0.5);
m.rd = sqrt((sqr(((m.x-0.5)*2))+sqr(((m.y-0.5)*1.5))));
m.backside = (m.backside*below(m.rd, 0.645));
m.kill = (1-m.backside);
m.rs = m.sample;
m.rr = ((m.rs-Math.floor(m.rs))*2);
m.rr = ifcond(above(m.rr, 1), (1-m.rr), m.rr);
m.r = (Math.min(m.rr, 1)*above(m.rr, 0));
m.gs = (m.sample*1.1);
m.gg = ((m.gs-Math.floor(m.gs))*2);
m.gg = ifcond(above(m.gg, 1), (1-m.gg), m.gg);
m.g = (Math.min(m.gg, 1)*above(m.gg, 0));
m.bs = (m.sample*1.2);
m.bb = ((m.bs-Math.floor(m.bs))*2);
m.bb = ifcond(above(m.bb, 1), (1-m.bb), m.bb);
m.b = (Math.min(m.bb, 1)*above(m.bb, 0));
m.r = (1-m.sample);
m.g = (m.r*m.r);
m.b = (m.sample*0.5);
m.a = (Math.min(((1-m.sample)*8), 1)*m.kill);
		return m;
	},
		'init_eqs_str' : ('t1=1;'),
		'frame_eqs_str' : ('t2=sin(time*0.5)*0.5+0.5;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 't1=-t1;\n' + 'phs=-sample*0.5+0.0006;\n' + 'xp=t1*sample*0.05;\n' + 'yp=0;\n' + 'zp=1;\n' + 'tm=q8*0.65;\n' + 'ang=(tm+phs*0.8)*7;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sang + zp*cang;\n' + 'zq=yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=(tm+phs)*0.24;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + yp*cang;\n' + 'yq=xp*cang - yp*sang;\n' + 'zq=zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=(tm+phs)*0.31;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + zp*cang;\n' + 'yq=yp;\n' + 'zq=xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'backside = above(zp,0);\n' + 'zp=zp+2.5;\n' + 'x=xp/zp+0.5;\n' + 'y=yp/zp*1.33+0.5;\n' + 'rd=sqrt( sqr( (x-0.5)*2) + sqr( (y-0.5)*1.5 ) );\n' + 'backside=backside*below(rd,0.645);\n' + 'kill=1-backside;\n' + 'rs=sample;\n' + 'rr=(rs-int(rs))*2;\n' + 'rr=if( above(rr,1) , 1-rr , rr );\n' + 'r=min(rr,1)*above(rr,0);\n' + 'gs=sample*1.1;\n' + 'gg=(gs-int(gs))*2;\n' + 'gg=if( above(gg,1) , 1-gg , gg );\n' + 'g=min(gg,1)*above(gg,0);\n' + 'bs=sample*1.2;\n' + 'bb=(bs-int(bs))*2;\n' + 'bb=if( above(bb,1) , 1-bb , bb );\n' + 'b=min(bb,1)*above(bb,0);\n' + 'r=1-sample;\n' + 'g=r*r;\n' + 'b=sample*0.5;\n' + 'a=min( (1-sample)*8 , 1)*kill;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
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
m.bb = 0;
m.gg = 0;
m.rr = 0;
m.rs = 0;
m.sang = 0;
m.q8 = 0;
m.gs = 0;
m.n = 0;
m.bs = 0;
m.rd = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.tm = 0;
m.xq = 0;
m.ang = 0;
m.phs = 0;
m.t1 = 0;
m.t2 = 0;
m.backside = 0;
m.kill = 0;
m.t1 = -1;
			m.rkeys = ['t1'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t2 = ((Math.sin((m.time*0.5))*0.5)+0.5);
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.t1 = -m.t1;
m.phs = (-m.sample*0.5);
m.xp = ((m.t1*m.sample)*0.05);
m.yp = 0;
m.zp = 1;
m.tm = (m.q8*0.65);
m.ang = ((m.tm+(m.phs*0.8))*9);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = ((m.tm+m.phs)*0.34);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.yp*m.cang));
m.yq = ((m.xp*m.cang)-(m.yp*m.sang));
m.zq = m.zp;
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = ((m.tm+m.phs)*0.27);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.backside = above(m.zp, 0);
m.zp = (m.zp+2.5);
m.x = (div(m.xp,m.zp)+0.5);
m.y = ((div(m.yp,m.zp)*1.33)+0.5);
m.rd = sqrt((sqr(((m.x-0.5)*2))+sqr(((m.y-0.5)*1.5))));
m.backside = (m.backside*below(m.rd, 0.645));
m.kill = (1-m.backside);
m.rs = m.sample;
m.rr = ((m.rs-Math.floor(m.rs))*2);
m.rr = ifcond(above(m.rr, 1), (1-m.rr), m.rr);
m.r = (Math.min(m.rr, 1)*above(m.rr, 0));
m.gs = (m.sample*1.1);
m.gg = ((m.gs-Math.floor(m.gs))*2);
m.gg = ifcond(above(m.gg, 1), (1-m.gg), m.gg);
m.g = (Math.min(m.gg, 1)*above(m.gg, 0));
m.bs = (m.sample*1.2);
m.bb = ((m.bs-Math.floor(m.bs))*2);
m.bb = ifcond(above(m.bb, 1), (1-m.bb), m.bb);
m.b = (Math.min(m.bb, 1)*above(m.bb, 0));
m.r = (1-m.sample);
m.g = (m.r*m.r);
m.b = (m.sample*0.5);
m.a = (Math.min(((1-m.sample)*8), 1)*m.kill);
		return m;
	},
		'init_eqs_str' : ('t1=-1;'),
		'frame_eqs_str' : ('t2=sin(time*0.5)*0.5+0.5;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 't1=-t1;\n' + 'phs=-sample*0.5;\n' + 'xp=t1*sample*0.05;\n' + 'yp=0;\n' + 'zp=1;\n' + 'tm=q8*0.65;\n' + 'ang=(tm+phs*0.8)*9;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sang + zp*cang;\n' + 'zq=yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=(tm+phs)*0.34;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + yp*cang;\n' + 'yq=xp*cang - yp*sang;\n' + 'zq=zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=(tm+phs)*0.27;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + zp*cang;\n' + 'yq=yp;\n' + 'zq=xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'backside = above(zp,0);\n' + 'zp=zp+2.5;\n' + 'x=xp/zp+0.5;\n' + 'y=yp/zp*1.33+0.5;\n' + 'rd=sqrt( sqr( (x-0.5)*2) + sqr( (y-0.5)*1.5 ) );\n' + 'backside=backside*below(rd,0.645);\n' + 'kill=1-backside;\n' + 'rs=sample;\n' + 'rr=(rs-int(rs))*2;\n' + 'rr=if( above(rr,1) , 1-rr , rr );\n' + 'r=min(rr,1)*above(rr,0);\n' + 'gs=sample*1.1;\n' + 'gg=(gs-int(gs))*2;\n' + 'gg=if( above(gg,1) , 1-gg , gg );\n' + 'g=min(gg,1)*above(gg,0);\n' + 'bs=sample*1.2;\n' + 'bb=(bs-int(bs))*2;\n' + 'bb=if( above(bb,1) , 1-bb , bb );\n' + 'b=min(bb,1)*above(bb,0);\n' + 'r=1-sample;\n' + 'g=r*r;\n' + 'b=sample*0.5;\n' + 'a=min( (1-sample)*8 , 1)*kill;'),

		}
],
	'shapes' : [
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
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.049831,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+m.q4);
m.y = (0.5+m.q5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=.5+q4;\n' + 'y=.5+q5;'),

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
			tex_zoom : 1.16096,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.866421,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 24.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = 0.01;
m.x = (0.5-m.q4);
m.y = (0.5-m.q5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=0.01;\n' + 'x=.5-q4;\n' + 'y=.5-q5;'),

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
			tex_zoom : 0.999996,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.444841,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 8.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = m.time;
m.thickoutline = above(0.9, m.bass);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=time;\n' + 'thick=above(.9,bass);'),

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
	'init_eqs_str' : ('zoom=1;\n' + 'xpos=0;\n' + 'ypos=0;'),
	'frame_eqs_str' : ('decay=0.96;\n' + 'vol= (mid+treb)*0.25;\n' + 'vol=vol*vol;\n' + 'mv_r = 0.5 + 0.4*sin(time*1.324);\n' + 'mv_g = 0.5 + 0.4*cos(time*1.371);\n' + 'musictime=musictime+vol;\n' + 'q4=0;\n' + 'q5=0;\n' + 'dx=sin(musictime*0.1)*0.03;\n' + 'dy=cos(musictime*0.069)*0.03;\n' + 'q1=sin(musictime*0.001)*0.4+0.5;\n' + 'q2=cos(musictime*0.001)*0.5+0.5;\n' + 'q8=musictime*0.1;\n' + 'monitor=rot;'),
	'pixel_eqs_str' : ('warp=rad;\n' + 'rd=sqrt( sqr( (x-0.5)*2) + sqr( (y-0.5)*1.5 ) );\n' + 'backside=(rd-0.645)*3;\n' + 'backside=min(backside,1);\n' + 'dx=dx*backside;\n' + 'dy=dy*backside;\n' + 'warp=warp*backside;\n' + 'zoom=1 + 13.291 * pow(min(backside*0.2,1) , 2 );'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.608,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 1.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.7,
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
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.4,
		decay : 0.99,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.meanbass_att = 0;
m.yamp = 0;
m.xamp = 0;
m.lastbeat = 0;
m.yamptarg = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.xspeed = 0;
m.ydir = 0;
m.xdir = 0;
m.beatrate = 0;
m.beat = 0;
m.volume = 0;
m.ypos = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_a = 0;
m.volume = (0.3*(m.bass+m.mid));
m.beatrate = (equal(m.beatrate, 0)+((1-equal(m.beatrate, 0))*(below(m.volume, 0.01)+((1-below(m.volume, 0.01))*m.beatrate))));
m.lastbeat = (m.lastbeat+(equal(m.lastbeat, 0)*m.time));
m.meanbass_att = (0.05*((m.meanbass_att*19)+m.bass_att));
m.peakbass_att = Math.max(m.bass_att, m.peakbass_att);
m.beat = ((above(m.volume, 0.8)*below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)))*above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))));
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ((m.beat*m.bass_att)+(((1-m.beat)*m.peakbass_att)*((above((m.time-m.lastbeat), (2*m.beatrate))*0.96)+((1-above((m.time-m.lastbeat), (2*m.beatrate)))*0.996))));
m.lastbeat = ((m.beat*m.time)+((1-m.beat)*m.lastbeat));
m.peakbass_att = Math.max(m.peakbass_att, (1.1*m.meanbass_att));
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.25*m.volume)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.15*m.volume)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.q1 = m.beat;
m.q2 = m.xpos;
m.q3 = m.ypos;
m.q4 = (m.time*0.5);
m.q5 = ((0.25*(Math.sin((m.time*0.15))+Math.sin((m.time*0.85))))+0.5);
m.monitor = m.q5;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
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
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.bb = 0;
m.cc = 0;
m.gg = 0;
m.rr = 0;
m.q4 = 0;
m.q5 = 0;
m.h = 0;
m.l = 0;
m.zf = 0;
m.flip = 0;
m.n = 0;
m.sa = 0;
m.s = 0;
m.zm = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.zr = 0;
m.tm = 0;
m.xq = 0;
m.yr = 0;
m.monitor = 0;
m.ang = 0;
m.xr = 0;
m.ys = 0;
m.zt = 0;
m.phs = 0;
m.xs = 0;
m.ca = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {
m.h = m.q5;
m.s = 0.7;
m.l = 0.8;
m.cc = (6*m.h);
m.cc = ifcond(below(m.cc, 1), 0, ifcond(below(m.cc, 2), 1, ifcond(below(m.cc, 3), 2, ifcond(below(m.cc, 4), 3, ifcond(below(m.cc, 5), 4, 5)))));
m.zf = ((6*m.h)-m.cc);
m.zm = m.l;
m.zp = (m.l*(1-m.s));
m.zq = (m.l*(1-(m.s*m.zf)));
m.zt = (m.l*(1-(m.s*(1-m.zf))));
m.monitor = m.zq;
m.rr = ifcond(equal(m.cc, 0), m.zm, ifcond(equal(m.cc, 1), m.zq, ifcond(equal(m.cc, 2), m.zp, ifcond(equal(m.cc, 3), m.zp, ifcond(equal(m.cc, 4), m.zt, m.zm)))));
m.gg = ifcond(equal(m.cc, 0), m.zt, ifcond(equal(m.cc, 1), m.zm, ifcond(equal(m.cc, 2), m.zm, ifcond(equal(m.cc, 3), m.zq, ifcond(equal(m.cc, 4), m.zp, m.zp)))));
m.bb = ifcond(equal(m.cc, 0), m.zp, ifcond(equal(m.cc, 1), m.zp, ifcond(equal(m.cc, 2), m.zt, ifcond(equal(m.cc, 3), m.zm, ifcond(equal(m.cc, 4), m.zm, m.zq)))));
m.rr = ifcond(equal(m.s, 0), m.l, m.rr);
m.gg = ifcond(equal(m.s, 0), m.l, m.gg);
m.bb = ifcond(equal(m.s, 0), m.l, m.bb);
m.r = m.rr;
m.g = m.gg;
m.b = m.bb;
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.2);
m.tm = (m.q4+(m.phs*4));
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = (((m.flip*0.1)-0.05)*m.sample);
m.zp = 0;
m.ang = ((m.tm*20)+(Math.sin(((m.tm*76)+(m.time*4)))*0.4));
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xr = ((m.xp*m.sa)+(m.yp*m.ca));
m.yr = ((m.xp*m.ca)-(m.yp*m.sa));
m.zr = m.zp;
m.xp = m.xr;
m.yp = (((m.yr+0.05)+(((Math.sin(m.tm)*0.5)+0.5)*0.2))+0.05);
m.zp = m.zr;
m.ang = (0.5*(Math.sin((m.tm*2))+Math.sin((m.tm*1.248))));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (m.tm*8);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+((Math.sin(((m.tm*2)-0.5))+Math.sin((m.tm*1.237)))*1.25));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (-1.0+Math.cos(((m.tm*3)+0.5)));
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = (((Math.cos((m.tm*1))+Math.cos((m.tm*0.653)))*0.875)-1.05);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xq = ((m.xp*m.sa)+(m.zp*m.ca));
m.yq = m.yp;
m.zq = ((m.xp*m.ca)-(m.zp*m.sa));
m.ang = (0.5*(Math.cos((m.tm*1.273))+Math.cos(m.tm)));
m.xp = m.xq;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yp = ((m.yq*m.ca)-(m.zq*m.sa));
m.zp = ((m.yq*m.sa)+(m.zq*m.ca));
m.zp = (m.zp+1.5);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = (1-m.sample);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('h=q5;\n' + 's = 0.7;\n' + 'l= 0.8;\n' + 'cc=(6*h);\n' + 'cc=if(below(cc,1),0,if(below(cc,2),1,if(below(cc,3),2,if(below(cc,4),3,if(below(cc,5),4,5)))));\n' + 'zf=(6*h)-cc;\n' + 'zm=l;\n' + 'zp=l*(1-s);\n' + 'zq=l*(1-s*zf);\n' + 'zt=l*(1-s*(1-zf));\n' + 'monitor=zq;\n' + 'rr=if(equal(cc,0),zm,if(equal(cc,1),zq,if(equal(cc,2),zp,if(equal(cc,3),zp,if(equal(cc,4),zt,zm)))));\n' + 'gg=if(equal(cc,0),zt,if(equal(cc,1),zm,if(equal(cc,2),zm,if(equal(cc,3),zq,if(equal(cc,4),zp,zp)))));\n' + 'bb=if(equal(cc,0),zp,if(equal(cc,1),zp,if(equal(cc,2),zt,if(equal(cc,3),zm,if(equal(cc,4),zm,zq)))));\n' + 'rr=if(equal(s,0),l,rr);\n' + 'gg=if(equal(s,0),l,gg);\n' + 'bb=if(equal(s,0),l,bb);\n' + 'r=rr;\n' + 'g=gg;\n' + 'b=bb;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=q4 + phs*4;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=(flip*0.1-0.05)*(sample);\n' + 'zp=0;\n' + 'ang=tm*20 + sin(tm*76 + time*4)*0.4;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xr=xp*sa + yp*ca;\n' + 'yr=xp*ca - yp*sa;\n' + 'zr=zp;\n' + 'xp=xr;\n' + 'yp=yr + 0.05 + (sin(tm)*0.5 + 0.5)*0.2 + 0.05;\n' + 'zp=zr;\n' + 'ang=0.5*(sin(tm*2)+sin(tm*1.248));\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=tm*8;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + (sin(tm*2 - 0.5)+sin(tm*1.237))*1.25;\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=-1.0 + cos(tm*3 + 0.5);\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=(cos(tm*1)+cos(tm*0.653))*0.875 - 1.05;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xq=xp*sa + zp*ca;\n' + 'yq=yp;\n' + 'zq=xp*ca - zp*sa;\n' + 'ang=0.5*(cos(tm*1.273)+cos(tm));\n' + 'xp=xq;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yp=yq*ca - zq*sa;\n' + 'zp=yq*sa + zq*ca;\n' + 'zp=zp+1.5;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.8,
			g : 0.9,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.bb = 0;
m.cc = 0;
m.gg = 0;
m.rr = 0;
m.q4 = 0;
m.q5 = 0;
m.h = 0;
m.l = 0;
m.zf = 0;
m.flip = 0;
m.n = 0;
m.sa = 0;
m.s = 0;
m.zm = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.zr = 0;
m.tm = 0;
m.xq = 0;
m.yr = 0;
m.monitor = 0;
m.ang = 0;
m.xr = 0;
m.ys = 0;
m.zt = 0;
m.phs = 0;
m.xs = 0;
m.ca = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {
m.h = m.q5;
m.s = 0.7;
m.l = 0.6;
m.cc = (6*m.h);
m.cc = ifcond(below(m.cc, 1), 0, ifcond(below(m.cc, 2), 1, ifcond(below(m.cc, 3), 2, ifcond(below(m.cc, 4), 3, ifcond(below(m.cc, 5), 4, 5)))));
m.zf = ((6*m.h)-m.cc);
m.zm = m.l;
m.zp = (m.l*(1-m.s));
m.zq = (m.l*(1-(m.s*m.zf)));
m.zt = (m.l*(1-(m.s*(1-m.zf))));
m.monitor = m.zq;
m.rr = ifcond(equal(m.cc, 0), m.zm, ifcond(equal(m.cc, 1), m.zq, ifcond(equal(m.cc, 2), m.zp, ifcond(equal(m.cc, 3), m.zp, ifcond(equal(m.cc, 4), m.zt, m.zm)))));
m.gg = ifcond(equal(m.cc, 0), m.zt, ifcond(equal(m.cc, 1), m.zm, ifcond(equal(m.cc, 2), m.zm, ifcond(equal(m.cc, 3), m.zq, ifcond(equal(m.cc, 4), m.zp, m.zp)))));
m.bb = ifcond(equal(m.cc, 0), m.zp, ifcond(equal(m.cc, 1), m.zp, ifcond(equal(m.cc, 2), m.zt, ifcond(equal(m.cc, 3), m.zm, ifcond(equal(m.cc, 4), m.zm, m.zq)))));
m.rr = ifcond(equal(m.s, 0), m.l, m.rr);
m.gg = ifcond(equal(m.s, 0), m.l, m.gg);
m.bb = ifcond(equal(m.s, 0), m.l, m.bb);
m.r = m.rr;
m.g = m.gg;
m.b = m.bb;
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.4);
m.tm = ((m.q4+(m.phs*2))-0.01);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = (((m.flip*0.2)-0.1)*m.sample);
m.zp = 0;
m.ang = ((-m.tm*29)+(Math.sin(((m.tm*76)+(m.time*4)))*0.4));
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xr = ((m.xp*m.sa)+(m.yp*m.ca));
m.yr = ((m.xp*m.ca)-(m.yp*m.sa));
m.zr = m.zp;
m.xp = m.xr;
m.yp = (((m.yr+0.05)+(((Math.sin(m.tm)*0.5)+0.5)*0.2))+0.05);
m.zp = m.zr;
m.ang = (0.5*(Math.sin((m.tm*2))+Math.sin((m.tm*1.248))));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (m.tm*8);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+((Math.sin(((m.tm*2)-0.5))+Math.sin((m.tm*1.237)))*1.25));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (-1.0+(0.5*(Math.cos(((m.tm*3)+0.5))+Math.cos((m.tm*0.867)))));
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = (((Math.cos((m.tm*1))+Math.cos((m.tm*0.653)))*0.875)-1.05);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xq = ((m.xp*m.sa)+(m.zp*m.ca));
m.yq = m.yp;
m.zq = ((m.xp*m.ca)-(m.zp*m.sa));
m.ang = (0.5*(Math.cos((m.tm*1.273))+Math.cos(m.tm)));
m.xp = m.xq;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yp = ((m.yq*m.ca)-(m.zq*m.sa));
m.zp = ((m.yq*m.sa)+(m.zq*m.ca));
m.zp = (m.zp+1.5);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = (1-m.sample);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('h=q5;\n' + 's = 0.7;\n' + 'l= 0.6;\n' + 'cc=(6*h);\n' + 'cc=if(below(cc,1),0,if(below(cc,2),1,if(below(cc,3),2,if(below(cc,4),3,if(below(cc,5),4,5)))));\n' + 'zf=(6*h)-cc;\n' + 'zm=l;\n' + 'zp=l*(1-s);\n' + 'zq=l*(1-s*zf);\n' + 'zt=l*(1-s*(1-zf));\n' + 'monitor=zq;\n' + 'rr=if(equal(cc,0),zm,if(equal(cc,1),zq,if(equal(cc,2),zp,if(equal(cc,3),zp,if(equal(cc,4),zt,zm)))));\n' + 'gg=if(equal(cc,0),zt,if(equal(cc,1),zm,if(equal(cc,2),zm,if(equal(cc,3),zq,if(equal(cc,4),zp,zp)))));\n' + 'bb=if(equal(cc,0),zp,if(equal(cc,1),zp,if(equal(cc,2),zt,if(equal(cc,3),zm,if(equal(cc,4),zm,zq)))));\n' + 'rr=if(equal(s,0),l,rr);\n' + 'gg=if(equal(s,0),l,gg);\n' + 'bb=if(equal(s,0),l,bb);\n' + 'r=rr;\n' + 'g=gg;\n' + 'b=bb;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.4 ;\n' + 'tm=q4 + phs*2 - 0.01;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=(flip*0.2-0.1)*(sample);\n' + 'zp=0;\n' + 'ang=-tm*29 + sin(tm*76 + time*4)*0.4;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xr=xp*sa + yp*ca;\n' + 'yr=xp*ca - yp*sa;\n' + 'zr=zp;\n' + 'xp=xr;\n' + 'yp=yr + 0.05 + (sin(tm)*0.5 + 0.5)*0.2 + 0.05;\n' + 'zp=zr;\n' + 'ang=0.5*(sin(tm*2)+sin(tm*1.248));\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=tm*8;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + (sin(tm*2 - 0.5)+sin(tm*1.237))*1.25;\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=-1.0 + 0.5*(cos(tm*3 + 0.5)+cos(tm*0.867));\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=(cos(tm*1)+cos(tm*0.653))*0.875 - 1.05;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xq=xp*sa + zp*ca;\n' + 'yq=yp;\n' + 'zq=xp*ca - zp*sa;\n' + 'ang=0.5*(cos(tm*1.273)+cos(tm));\n' + 'xp=xq;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yp=yq*ca - zq*sa;\n' + 'zp=yq*sa + zq*ca;\n' + 'zp=zp+1.5;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.1,
			g : 0.72,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.bb = 0;
m.cc = 0;
m.gg = 0;
m.rr = 0;
m.q4 = 0;
m.q5 = 0;
m.h = 0;
m.l = 0;
m.zf = 0;
m.flip = 0;
m.n = 0;
m.sa = 0;
m.s = 0;
m.zm = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.zr = 0;
m.tm = 0;
m.xq = 0;
m.yr = 0;
m.monitor = 0;
m.ang = 0;
m.xr = 0;
m.ys = 0;
m.zt = 0;
m.phs = 0;
m.xs = 0;
m.ca = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {
m.h = m.q5;
m.s = 0.8;
m.l = 0.5;
m.cc = (6*m.h);
m.cc = ifcond(below(m.cc, 1), 0, ifcond(below(m.cc, 2), 1, ifcond(below(m.cc, 3), 2, ifcond(below(m.cc, 4), 3, ifcond(below(m.cc, 5), 4, 5)))));
m.zf = ((6*m.h)-m.cc);
m.zm = m.l;
m.zp = (m.l*(1-m.s));
m.zq = (m.l*(1-(m.s*m.zf)));
m.zt = (m.l*(1-(m.s*(1-m.zf))));
m.monitor = m.zq;
m.rr = ifcond(equal(m.cc, 0), m.zm, ifcond(equal(m.cc, 1), m.zq, ifcond(equal(m.cc, 2), m.zp, ifcond(equal(m.cc, 3), m.zp, ifcond(equal(m.cc, 4), m.zt, m.zm)))));
m.gg = ifcond(equal(m.cc, 0), m.zt, ifcond(equal(m.cc, 1), m.zm, ifcond(equal(m.cc, 2), m.zm, ifcond(equal(m.cc, 3), m.zq, ifcond(equal(m.cc, 4), m.zp, m.zp)))));
m.bb = ifcond(equal(m.cc, 0), m.zp, ifcond(equal(m.cc, 1), m.zp, ifcond(equal(m.cc, 2), m.zt, ifcond(equal(m.cc, 3), m.zm, ifcond(equal(m.cc, 4), m.zm, m.zq)))));
m.rr = ifcond(equal(m.s, 0), m.l, m.rr);
m.gg = ifcond(equal(m.s, 0), m.l, m.gg);
m.bb = ifcond(equal(m.s, 0), m.l, m.bb);
m.r = m.rr;
m.g = m.gg;
m.b = m.bb;
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.4);
m.tm = ((m.q4+(m.phs*2))-0.02);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = (((m.flip*0.4)-0.2)*m.sample);
m.zp = 0;
m.ang = ((m.tm*23)+(Math.sin(((m.tm*76)+(m.time*4)))*0.3));
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xr = ((m.xp*m.sa)+(m.yp*m.ca));
m.yr = ((m.xp*m.ca)-(m.yp*m.sa));
m.zr = m.zp;
m.xp = m.xr;
m.yp = (((m.yr+0.05)+(((Math.sin(m.tm)*0.5)+0.5)*0.2))+0.05);
m.zp = m.zr;
m.ang = (0.5*(Math.sin((m.tm*2))+Math.sin((m.tm*1.248))));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (m.tm*8);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+((Math.sin(((m.tm*2)-0.5))+Math.sin((m.tm*1.237)))*1.25));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (-1.0+(0.5*(Math.cos(((m.tm*3)+0.5))+Math.cos((m.tm*0.867)))));
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = (((Math.cos((m.tm*1))+Math.cos((m.tm*0.653)))*0.875)-1.05);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xq = ((m.xp*m.sa)+(m.zp*m.ca));
m.yq = m.yp;
m.zq = ((m.xp*m.ca)-(m.zp*m.sa));
m.ang = (0.5*(Math.cos((m.tm*1.273))+Math.cos(m.tm)));
m.xp = m.xq;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yp = ((m.yq*m.ca)-(m.zq*m.sa));
m.zp = ((m.yq*m.sa)+(m.zq*m.ca));
m.zp = (m.zp+1.5);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = (1-m.sample);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('h=q5;\n' + 's = 0.8;\n' + 'l= 0.5;\n' + 'cc=(6*h);\n' + 'cc=if(below(cc,1),0,if(below(cc,2),1,if(below(cc,3),2,if(below(cc,4),3,if(below(cc,5),4,5)))));\n' + 'zf=(6*h)-cc;\n' + 'zm=l;\n' + 'zp=l*(1-s);\n' + 'zq=l*(1-s*zf);\n' + 'zt=l*(1-s*(1-zf));\n' + 'monitor=zq;\n' + 'rr=if(equal(cc,0),zm,if(equal(cc,1),zq,if(equal(cc,2),zp,if(equal(cc,3),zp,if(equal(cc,4),zt,zm)))));\n' + 'gg=if(equal(cc,0),zt,if(equal(cc,1),zm,if(equal(cc,2),zm,if(equal(cc,3),zq,if(equal(cc,4),zp,zp)))));\n' + 'bb=if(equal(cc,0),zp,if(equal(cc,1),zp,if(equal(cc,2),zt,if(equal(cc,3),zm,if(equal(cc,4),zm,zq)))));\n' + 'rr=if(equal(s,0),l,rr);\n' + 'gg=if(equal(s,0),l,gg);\n' + 'bb=if(equal(s,0),l,bb);\n' + 'r=rr;\n' + 'g=gg;\n' + 'b=bb;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.4 ;\n' + 'tm=q4 + phs*2 - 0.02;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=(flip*0.4-0.2)*(sample);\n' + 'zp=0;\n' + 'ang=tm*23 + sin(tm*76 + time*4)*0.3;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xr=xp*sa + yp*ca;\n' + 'yr=xp*ca - yp*sa;\n' + 'zr=zp;\n' + 'xp=xr;\n' + 'yp=yr + 0.05 + (sin(tm)*0.5 + 0.5)*0.2 + 0.05;\n' + 'zp=zr;\n' + 'ang=0.5*(sin(tm*2)+sin(tm*1.248));\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=tm*8;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + (sin(tm*2 - 0.5)+sin(tm*1.237))*1.25;\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=-1.0 + 0.5*(cos(tm*3 + 0.5)+cos(tm*0.867));\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=(cos(tm*1)+cos(tm*0.653))*0.875 - 1.05;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xq=xp*sa + zp*ca;\n' + 'yq=yp;\n' + 'zq=xp*ca - zp*sa;\n' + 'ang=0.5*(cos(tm*1.273)+cos(tm));\n' + 'xp=xq;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yp=yq*ca - zq*sa;\n' + 'zp=yq*sa + zq*ca;\n' + 'zp=zp+1.5;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.5,
			g : 0.7,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.bb = 0;
m.cc = 0;
m.gg = 0;
m.rr = 0;
m.q4 = 0;
m.q5 = 0;
m.h = 0;
m.l = 0;
m.zf = 0;
m.flip = 0;
m.n = 0;
m.sa = 0;
m.s = 0;
m.zm = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.zr = 0;
m.tm = 0;
m.xq = 0;
m.yr = 0;
m.monitor = 0;
m.ang = 0;
m.xr = 0;
m.ys = 0;
m.zt = 0;
m.phs = 0;
m.xs = 0;
m.ca = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {
m.h = m.q5;
m.s = 0.75;
m.l = 0.4;
m.cc = (6*m.h);
m.cc = ifcond(below(m.cc, 1), 0, ifcond(below(m.cc, 2), 1, ifcond(below(m.cc, 3), 2, ifcond(below(m.cc, 4), 3, ifcond(below(m.cc, 5), 4, 5)))));
m.zf = ((6*m.h)-m.cc);
m.zm = m.l;
m.zp = (m.l*(1-m.s));
m.zq = (m.l*(1-(m.s*m.zf)));
m.zt = (m.l*(1-(m.s*(1-m.zf))));
m.monitor = m.zq;
m.rr = ifcond(equal(m.cc, 0), m.zm, ifcond(equal(m.cc, 1), m.zq, ifcond(equal(m.cc, 2), m.zp, ifcond(equal(m.cc, 3), m.zp, ifcond(equal(m.cc, 4), m.zt, m.zm)))));
m.gg = ifcond(equal(m.cc, 0), m.zt, ifcond(equal(m.cc, 1), m.zm, ifcond(equal(m.cc, 2), m.zm, ifcond(equal(m.cc, 3), m.zq, ifcond(equal(m.cc, 4), m.zp, m.zp)))));
m.bb = ifcond(equal(m.cc, 0), m.zp, ifcond(equal(m.cc, 1), m.zp, ifcond(equal(m.cc, 2), m.zt, ifcond(equal(m.cc, 3), m.zm, ifcond(equal(m.cc, 4), m.zm, m.zq)))));
m.rr = ifcond(equal(m.s, 0), m.l, m.rr);
m.gg = ifcond(equal(m.s, 0), m.l, m.gg);
m.bb = ifcond(equal(m.s, 0), m.l, m.bb);
m.r = m.rr;
m.g = m.gg;
m.b = m.bb;
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.4);
m.tm = ((m.q4+(m.phs*2))-0.03);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = (((m.flip*0.6)-0.3)*m.sample);
m.zp = 0;
m.ang = ((-m.tm*4)+(Math.sin(((m.tm*76)+(m.time*4)))*0.2));
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xr = ((m.xp*m.sa)+(m.yp*m.ca));
m.yr = ((m.xp*m.ca)-(m.yp*m.sa));
m.zr = m.zp;
m.xp = m.xr;
m.yp = (((m.yr+0.05)+(((Math.sin(m.tm)*0.5)+0.5)*0.2))+0.05);
m.zp = m.zr;
m.ang = (0.5*(Math.sin((m.tm*2))+Math.sin((m.tm*1.248))));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (m.tm*8);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+((Math.sin(((m.tm*2)-0.5))+Math.sin((m.tm*1.237)))*1.25));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (-1.0+(0.5*(Math.cos(((m.tm*3)+0.5))+Math.cos((m.tm*0.867)))));
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = (((Math.cos((m.tm*1))+Math.cos((m.tm*0.653)))*0.875)-1.05);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xq = ((m.xp*m.sa)+(m.zp*m.ca));
m.yq = m.yp;
m.zq = ((m.xp*m.ca)-(m.zp*m.sa));
m.ang = (0.5*(Math.cos((m.tm*1.273))+Math.cos(m.tm)));
m.xp = m.xq;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yp = ((m.yq*m.ca)-(m.zq*m.sa));
m.zp = ((m.yq*m.sa)+(m.zq*m.ca));
m.zp = (m.zp+1.5);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = (1-m.sample);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('h=q5;\n' + 's = 0.75;\n' + 'l= 0.4;\n' + 'cc=(6*h);\n' + 'cc=if(below(cc,1),0,if(below(cc,2),1,if(below(cc,3),2,if(below(cc,4),3,if(below(cc,5),4,5)))));\n' + 'zf=(6*h)-cc;\n' + 'zm=l;\n' + 'zp=l*(1-s);\n' + 'zq=l*(1-s*zf);\n' + 'zt=l*(1-s*(1-zf));\n' + 'monitor=zq;\n' + 'rr=if(equal(cc,0),zm,if(equal(cc,1),zq,if(equal(cc,2),zp,if(equal(cc,3),zp,if(equal(cc,4),zt,zm)))));\n' + 'gg=if(equal(cc,0),zt,if(equal(cc,1),zm,if(equal(cc,2),zm,if(equal(cc,3),zq,if(equal(cc,4),zp,zp)))));\n' + 'bb=if(equal(cc,0),zp,if(equal(cc,1),zp,if(equal(cc,2),zt,if(equal(cc,3),zm,if(equal(cc,4),zm,zq)))));\n' + 'rr=if(equal(s,0),l,rr);\n' + 'gg=if(equal(s,0),l,gg);\n' + 'bb=if(equal(s,0),l,bb);\n' + 'r=rr;\n' + 'g=gg;\n' + 'b=bb;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.4 ;\n' + 'tm=q4 + phs*2 - 0.03;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=(flip*0.6-0.3)*(sample);\n' + 'zp=0;\n' + 'ang=-tm*4 + sin(tm*76 + time*4)*0.2;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xr=xp*sa + yp*ca;\n' + 'yr=xp*ca - yp*sa;\n' + 'zr=zp;\n' + 'xp=xr;\n' + 'yp=yr + 0.05 + (sin(tm)*0.5 + 0.5)*0.2 + 0.05;\n' + 'zp=zr;\n' + 'ang=0.5*(sin(tm*2)+sin(tm*1.248));\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=tm*8;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + (sin(tm*2 - 0.5)+sin(tm*1.237))*1.25;\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=-1.0 + 0.5*(cos(tm*3 + 0.5)+cos(tm*0.867));\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=(cos(tm*1)+cos(tm*0.653))*0.875 - 1.05;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xq=xp*sa + zp*ca;\n' + 'yq=yp;\n' + 'zq=xp*ca - zp*sa;\n' + 'ang=0.5*(cos(tm*1.273)+cos(tm));\n' + 'xp=xq;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yp=yq*ca - zq*sa;\n' + 'zp=yq*sa + zq*ca;\n' + 'zp=zp+1.5;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.7,
			textured : 1.0,
			g2 : 0.7,
			tex_zoom : 0.5033,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.47221,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.flash = 0;
m.ypos = 0;
m.xpos = 0;

			m.rkeys = ['flash','ypos','xpos'];
			return m;
		},
		'frame_eqs' : function(m) {
m.xpos = ifcond(m.q1, (((rand(4)+1)*0.25)-0.125), m.xpos);
m.ypos = ifcond(m.q1, (((rand(3)+1)*0.333)-0.166), m.ypos);
m.x = m.xpos;
m.y = m.ypos;
m.flash = ifcond(m.q1, 0.8, (m.flash-0.1));
m.textured = below(m.flash, 0.5);
m.a = above(m.flash, 0);
m.a2 = above(m.flash, 0);
m.border_a = (0.5*above(m.flash, 0));
m.r = ifcond(above(m.flash, 0.5), (0.5*m.flash), (0.6+(0.1*rand(200))));
m.g = ifcond(above(m.flash, 0.5), (0.5*m.flash), (0.6+(0.1*rand(200))));
m.b = ifcond(above(m.flash, 0.5), (0.5*m.flash), (0.6+(0.1*rand(200))));
m.r2 = ifcond(above(m.flash, 0.5), (0.5*m.flash), (0.6+(0.1*rand(200))));
m.g2 = ifcond(above(m.flash, 0.5), (0.5*m.flash), (0.6+(0.1*rand(200))));
m.b2 = ifcond(above(m.flash, 0.5), (0.5*m.flash), (0.6+(0.1*rand(200))));
m.border_r = (0.5*above(m.flash, 0));
m.border_g = (0.5*above(m.flash, 0));
m.border_b = (0.5*above(m.flash, 0));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('xpos = if(q1,(rand(4)+1)*0.25-0.125,xpos);\n' + 'ypos = if(q1,(rand(3)+1)*0.333-0.166,ypos);\n' + 'x = xpos;\n' + 'y = ypos;\n' + 'flash = if(q1,0.8,flash-0.1);\n' + 'textured = below(flash,0.5);\n' + 'a = above(flash,0);\n' + 'a2 = above(flash,0);\n' + 'border_a = 0.5*above(flash,0);\n' + 'r = if(above(flash,0.5),0.5*flash,0.6+0.1*rand(200));\n' + 'g = if(above(flash,0.5),0.5*flash,0.6+0.1*rand(200));\n' + 'b = if(above(flash,0.5),0.5*flash,0.6+0.1*rand(200));\n' + 'r2 = if(above(flash,0.5),0.5*flash,0.6+0.1*rand(200));\n' + 'g2 = if(above(flash,0.5),0.5*flash,0.6+0.1*rand(200));\n' + 'b2 = if(above(flash,0.5),0.5*flash,0.6+0.1*rand(200));\n' + 'border_r = 0.5*above(flash,0);\n' + 'border_g = 0.5*above(flash,0);\n' + 'border_b = 0.5*above(flash,0);'),

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

		}
],
	'warp' : ('shader_body {\n' + '   vec3 pic_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv);\n' + '  ret_2 = tmpvar_3.xyz;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_noise_lq, tmpvar_4);\n' + '  ret_2 = (ret_2 + ((tmpvar_5.xyz - 0.5) / 256.0));\n' + '   vec2 P_6;\n' + '  P_6 = (uv_orig * aspect.xy);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_cells, P_6).xyz;\n' + '  pic_1 = tmpvar_7;\n' + '   vec2 x_8;\n' + '  x_8 = (uv - uv_orig);\n' + '  ret_2 = (mix (ret_2, pic_1, vec3((\n' + '    clamp ((1.0 - (abs(\n' + '      (((dot (pic_1, vec3(0.32, 0.49, 0.29)) * 0.8) + 0.1) - (0.5 + (roam_cos.y * 0.25)))\n' + '    ) * 43.0)), 0.0, 1.0)\n' + '   * 0.07))) * (0.97 + (0.03 * \n' + '    clamp ((sqrt(dot (x_8, x_8)) * 200.0), 0.0, 1.0)\n' + '  )));\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9.w = 1.0;\n' + '  tmpvar_9.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_9;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'wave_a = 0;\n' + 'volume = 0.3*(bass+mid);\n' + 'beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);\n' + 'lastbeat = lastbeat + equal(lastbeat,0)*time;\n' + 'meanbass_att = 0.05*(meanbass_att*19 + bass_att);\n' + 'peakbass_att = max(bass_att,peakbass_att);\n' + 'beat = above(volume,0.8)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.96 + (1-above(time - lastbeat, 2*beatrate))*0.996);\n' + 'lastbeat = beat*time + (1-beat)*lastbeat;\n' + 'peakbass_att = max(peakbass_att,1.1*meanbass_att);\n' + 'xamptarg = if(equal(frame%15,0),min(0.25*volume*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'yamptarg = if(equal(frame%15,0),min(0.15*volume*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'q1 = beat;\n' + 'q2 = xpos;\n' + 'q3 = ypos;\n' + 'q4 = time*0.5;\n' + 'q5 = 0.25*(sin(time*0.15)+sin(time*0.85))+0.5;\n' + 'monitor = q5;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
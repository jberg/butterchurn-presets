define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 1.0,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.01,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
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
		wave_r : 0.65,
		ib_r : 1.0,
		mv_b : 1.0,
		echo_zoom : 1.00815,
		ob_size : 0.015,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.01,
		wave_y : 0.5,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.005,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : -1.0,
		decay : 0.51,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.05,
		wave_b : 0.65,
		ib_b : 1.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.mm = 0;
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.d = 0;
m.mt = 0;
m.v = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.decay = 1;
m.warp = 0;
m.dx = 0;
m.dy = 0;
m.sx = 1;
m.sy = 1;
m.mm = div(5,m.mid);
m.mt = (m.mt+pow(m.treb, 3));
m.q1 = m.mm;
m.q2 = (m.mm*0.0001);
m.q3 = (m.mt*0.03);
		m.rkeys = ['v'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.v = (m.v+1);
m.v = mod(m.v,2);
m.d = equal(m.v, 0);
m.rot = (Math.sin(m.q3)*0.05);
m.cx = ((Math.sin(((m.x*255)*m.q2))*0.5)+0.5);
m.cy = ((Math.cos(((m.y*255)*m.q2))*0.5)+0.5);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 15.098679,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.bb = 0;
m.cc = 0;
m.gg = 0;
m.rr = 0;
m.h = 0;
m.qz = 0;
m.l = 0;
m.zf = 0;
m.s = 0;
m.zm = 0;
m.zp = 0;
m.zq = 0;
m.monitor = 0;
m.zt = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.qz = 314;
m.s = ((Math.sin(m.time)*0.2)+0.3);
m.x = ((Math.cos((m.sample*m.qz))*0.24)+0.5);
m.y = ((Math.sin((m.sample*m.qz))*0.14)+0.3);
m.h = ((Math.sin(m.sample)*0.5)+0.5);
m.s = 1;
m.l = 1;
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
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('qz=314;\n' + 's=sin(time)*.2+.3;\n' + 'x=cos(sample*qz)*.24+.5;\n' + 'y=sin(sample*qz)*.14+.3;\n' + 'h=(sin(sample)*.5+.5);\n' + 's=1;\n' + 'l=1;\n' + 'cc=(6*h);\n' + 'cc=if(below(cc,1),0,if(below(cc,2),1,if(below(cc,3),2,if(below(cc,4),3,if(below(cc,5),4,5)))));\n' + 'zf=(6*h)-cc;\n' + 'zm=l;\n' + 'zp=l*(1-s);\n' + 'zq=l*(1-s*zf);\n' + 'zt=l*(1-s*(1-zf));\n' + 'monitor=zq;\n' + 'rr=if(equal(cc,0),zm,if(equal(cc,1),zq,if(equal(cc,2),zp,if(equal(cc,3),zp,if(equal(cc,4),zt,zm)))));\n' + 'gg=if(equal(cc,0),zt,if(equal(cc,1),zm,if(equal(cc,2),zm,if(equal(cc,3),zq,if(equal(cc,4),zp,zp)))));\n' + 'bb=if(equal(cc,0),zp,if(equal(cc,1),zp,if(equal(cc,2),zt,if(equal(cc,3),zm,if(equal(cc,4),zm,zq)))));\n' + 'rr=if(equal(s,0),l,rr);\n' + 'gg=if(equal(s,0),l,gg);\n' + 'bb=if(equal(s,0),l,bb);\n' + 'r=rr;\n' + 'g=gg;\n' + 'b=bb;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 15.098679,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.qz = 0;
m.s = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.qz = 314;
m.s = ((Math.sin(m.time)*0.2)+0.3);
m.x = m.sample;
m.y = (0.103+m.value1);
m.r = 0;
m.g = 0;
m.b = 0;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('qz=314;\n' + 's=sin(time)*.2+.3;\n' + 'x=sample;\n' + 'y=.103+value1;\n' + 'r=0;\n' + 'g=0;\n' + 'b=0;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.999996,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.bb = 0;
m.cc = 0;
m.gg = 0;
m.t4 = 0;
m.rr = 0;
m.vol_avg = 0;
m.h = 0;
m.l = 0;
m.zf = 0;
m.vg = 0;
m.s = 0;
m.ex = 0;
m.vol = 0;
m.zm = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.tm = 0;
m.monitor = 0;
m.zt = 0;
m.t1 = 0;
m.sp = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['ex','yp','xp','tm'];
			return m;
		},
		'frame_eqs' : function(m) {
m.vol = (((m.bass_att+m.mid_att)+m.treb_att)*0.333333);
m.vol_avg = (0.1*((m.vol_avg*9)+m.vol));
m.vg = (m.vol_avg*0.1);
m.t1 = (m.time*0.3);
m.t2 = 2;
m.t3 = 0;
m.t4 = 0;
		return m;
	},
		'point_eqs' : function(m) {
m.tm = ifcond(above(m.yp, 0.98), m.t1, m.tm);
m.ex = ifcond(above(m.yp, 0.98), m.t2, m.ex);
m.sp = 0.01;
m.yp = ifcond(above(m.xp, 0.9998), (m.yp+m.sp), m.yp);
m.xp = ifcond(above(m.xp, 0.9998), 0, (m.xp+m.sp));
m.yp = ifcond(above(m.yp, 0.9998), 0, m.yp);
m.x = (((((m.xp*m.ex)*0.1)+0.5)-(0.05*m.ex))-m.t3);
m.y = (((((m.yp*m.ex)*0.1)+0.5)-(0.05*m.ex))-m.t4);
m.h = ((Math.sin((Math.sin(((m.xp*6)+m.tm))*Math.sin(((m.yp*6)+m.tm))))*0.5)+0.5);
m.s = 1;
m.l = 1;
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
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('vol = (bass_att + mid_att + treb_att)*.333333;\n' + 'vol_avg = .1*(vol_avg*9 + vol);\n' + 'vg = vol_avg*.1;\n' + 't1=time*.3;\n' + 't2=2;\n' + 't3=0;\n' + 't4=0;'),
		'point_eqs_str' : ('tm=if(above(yp,0.98),t1,tm);\n' + 'ex=if(above(yp,0.98),t2,ex);\n' + 'sp=.01;\n' + 'yp=if(above(xp,0.9998),yp+sp,yp);\n' + 'xp=if(above(xp,0.9998),0,xp+sp);\n' + 'yp=if(above(yp,0.9998),0,yp);\n' + 'x=((xp*ex)*.1+.5)-(.05*ex)-t3;\n' + 'y=((yp*ex)*.1+.5)-(.05*ex)-t4;\n' + 'h=sin(sin(xp*6+tm)*sin(yp*6+tm))*.5+.5;\n' + 's=1;\n' + 'l=1;\n' + 'cc=(6*h);\n' + 'cc=if(below(cc,1),0,if(below(cc,2),1,if(below(cc,3),2,if(below(cc,4),3,if(below(cc,5),4,5)))));\n' + 'zf=(6*h)-cc;\n' + 'zm=l;\n' + 'zp=l*(1-s);\n' + 'zq=l*(1-s*zf);\n' + 'zt=l*(1-s*(1-zf));\n' + 'monitor=zq;\n' + 'rr=if(equal(cc,0),zm,if(equal(cc,1),zq,if(equal(cc,2),zp,if(equal(cc,3),zp,if(equal(cc,4),zt,zm)))));\n' + 'gg=if(equal(cc,0),zt,if(equal(cc,1),zm,if(equal(cc,2),zm,if(equal(cc,3),zq,if(equal(cc,4),zp,zp)))));\n' + 'bb=if(equal(cc,0),zp,if(equal(cc,1),zp,if(equal(cc,2),zt,if(equal(cc,3),zm,if(equal(cc,4),zm,zq)))));\n' + 'rr=if(equal(s,0),l,rr);\n' + 'gg=if(equal(s,0),l,gg);\n' + 'bb=if(equal(s,0),l,bb);\n' + 'r=rr;\n' + 'g=gg;\n' + 'b=bb;'),

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
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
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
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.255374,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 2.207644,
			x : 0.14,
			y : 0.17,
			ang : 3.141593,
			sides : 100.0,
			border_r : 0.0,
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
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.451118,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 3.386595,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.vol = 0;
m.v = 0;

			m.rkeys = ['v'];
			return m;
		},
		'frame_eqs' : function(m) {
m.v = (pow(m.mid_att, 3)+m.v);
m.vol = ((m.bass+m.treb)+m.mid);
m.rad = (3.387+(Math.sin(m.vol)*0.15));
m.a = ((Math.sin((m.v*0.003))*0.5)+0.5);
m.tex_ang = (Math.sin((m.v*0.0005))*6.28);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('v=pow(mid_att,3)+v;\n' + 'vol=bass+treb+mid;\n' + 'rad=3.387+sin(vol)*.15;\n' + 'a=sin(v*.003)*.5+.5;\n' + 'tex_ang=sin(v*.0005)*6.28;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 3.241264,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.123235,
			x : 0.14,
			y : 0.5,
			ang : 3.141593,
			sides : 100.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.bb = 0;
m.cc = 0;
m.gg = 0;
m.rr = 0;
m.h = 0;
m.l = 0;
m.my = 0;
m.zf = 0;
m.slowp = 0;
m.p = 0;
m.s = 0;
m.zm = 0;
m.zp = 0;
m.zq = 0;
m.monitor = 0;
m.zt = 0;
m.turn = 0;

			m.rkeys = ['my','slowp','p'];
			return m;
		},
		'frame_eqs' : function(m) {
m.p = (m.p+0.314);
m.slowp = (m.slowp+0.000628);
m.p = (below(m.p, 6.283)*m.p);
m.slowp = (below(m.slowp, 6.283)*m.slowp);
m.my = (m.my+(((m.mid*m.mid)*m.mid)*0.02));
m.turn = below(((Math.sin(m.my)*0.5)+0.5), 0.5);
m.y = ifcond(equal(m.turn, 1), ((Math.sin(m.p)*0.3)+0.5), ((Math.sin((628-m.p))*0.3)+0.5));
m.x = ifcond(equal(m.turn, 1), ((Math.cos(m.p)*0.3)+0.5), ((Math.cos((628-m.p))*0.3)+0.5));
m.h = ((Math.sin(m.slowp)*0.5)+0.5);
m.s = Math.min(Math.abs((m.bass*0.6)), 1);
m.l = 1;
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
m.h = ((Math.sin(m.slowp)*0.5)+0.5);
m.l = Math.min(Math.abs((m.bass*0.6)), 1);
m.s = 1;
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
m.r2 = m.rr;
m.g2 = m.gg;
m.b2 = m.bb;
m.border_r = m.rr;
m.border_g = m.gg;
m.border_b = m.bb;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('p=p+.314;\n' + 'slowp=slowp+.000628;\n' + 'p=below(p,6.283)*p;\n' + 'slowp=below(slowp,6.283)*slowp;\n' + 'my=my+(mid*mid*mid)*.02;\n' + 'turn=below(sin(my)*.5+.5,.5);\n' + 'y=if(equal(turn,1),sin(p)*.3+.5,sin(628-p)*.3+.5);\n' + 'x=if(equal(turn,1),cos(p)*.3+.5,cos(628-p)*.3+.5);\n' + 'h=sin(slowp)*.5+.5;\n' + 's=min(abs(bass*.6),1);\n' + 'l=1;\n' + 'cc=(6*h);\n' + 'cc=if(below(cc,1),0,if(below(cc,2),1,if(below(cc,3),2,if(below(cc,4),3,if(below(cc,5),4,5)))));\n' + 'zf=(6*h)-cc;\n' + 'zm=l;\n' + 'zp=l*(1-s);\n' + 'zq=l*(1-s*zf);\n' + 'zt=l*(1-s*(1-zf));\n' + 'monitor=zq;\n' + 'rr=if(equal(cc,0),zm,if(equal(cc,1),zq,if(equal(cc,2),zp,if(equal(cc,3),zp,if(equal(cc,4),zt,zm)))));\n' + 'gg=if(equal(cc,0),zt,if(equal(cc,1),zm,if(equal(cc,2),zm,if(equal(cc,3),zq,if(equal(cc,4),zp,zp)))));\n' + 'bb=if(equal(cc,0),zp,if(equal(cc,1),zp,if(equal(cc,2),zt,if(equal(cc,3),zm,if(equal(cc,4),zm,zq)))));\n' + 'rr=if(equal(s,0),l,rr);\n' + 'gg=if(equal(s,0),l,gg);\n' + 'bb=if(equal(s,0),l,bb);\n' + 'r=rr;\n' + 'g=gg;\n' + 'b=bb;\n' + 'h=sin(slowp)*.5+.5;\n' + 'l=min(abs(bass*.6),1);\n' + 's=1;\n' + 'cc=(6*h);\n' + 'cc=if(below(cc,1),0,if(below(cc,2),1,if(below(cc,3),2,if(below(cc,4),3,if(below(cc,5),4,5)))));\n' + 'zf=(6*h)-cc;\n' + 'zm=l;\n' + 'zp=l*(1-s);\n' + 'zq=l*(1-s*zf);\n' + 'zt=l*(1-s*(1-zf));\n' + 'monitor=zq;\n' + 'rr=if(equal(cc,0),zm,if(equal(cc,1),zq,if(equal(cc,2),zp,if(equal(cc,3),zp,if(equal(cc,4),zt,zm)))));\n' + 'gg=if(equal(cc,0),zt,if(equal(cc,1),zm,if(equal(cc,2),zm,if(equal(cc,3),zq,if(equal(cc,4),zp,zp)))));\n' + 'bb=if(equal(cc,0),zp,if(equal(cc,1),zp,if(equal(cc,2),zt,if(equal(cc,3),zm,if(equal(cc,4),zm,zq)))));\n' + 'rr=if(equal(s,0),l,rr);\n' + 'gg=if(equal(s,0),l,gg);\n' + 'bb=if(equal(s,0),l,bb);\n' + 'r2=rr;\n' + 'g2=gg;\n' + 'b2=bb;\n' + 'border_r=rr;\n' + 'border_g=gg;\n' + 'border_b=bb;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.889069,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.3682,
			x : 0.5,
			y : 0.5,
			ang : 3.141593,
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

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_a=0;\n' + 'decay=1;\n' + 'warp=0;\n' + 'dx=0;\n' + 'dy=0;\n' + 'sx=1;\n' + 'sy=1;\n' + 'mm=5/mid;\n' + 'mt=mt+pow(treb,3);\n' + 'q1=mm;\n' + 'q2=mm*.0001;\n' + 'q3=mt*.03;'),
	'pixel_eqs_str' : ('v=v+1;\n' + 'v=v%2;\n' + 'd=equal(v,0);\n' + 'rot=(sin(q3))*0.05;\n' + 'cx=sin(x*255*q2)*.5+.5;\n' + 'cy=cos(y*255*q2)*.5+.5;'),
};

return pmap;
});
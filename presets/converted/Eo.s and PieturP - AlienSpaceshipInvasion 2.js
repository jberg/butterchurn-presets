define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 12.799999,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 3.012146,
		ob_size : 0.005,
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
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : -1.0,
		decay : 0.5,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.mm = 0;
m.mt = 0;
m.when = 0;

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
m.when = 0;
m.mm = (m.mm+(((m.mid*m.mid)*m.mid)*0.02));
m.mm = (below(m.mm, 628)*m.mm);
m.mt = (m.mt+(((m.bass*m.bass)*m.bass)*0.02));
m.mt = (below(m.mt, 628)*m.mt);
m.rot = (ifcond(equal(m.when, 0), ((Math.sin((m.mt*0.1))*2)+2), 0)-2);
m.zoom = ifcond(equal(m.when, 0), (1-((Math.sin(m.mm)*0.2)+0.2)), 1);
m.monitor = m.mt;
m.cx = ((Math.sin(m.time)*0.035)+0.5);
m.cy = ((Math.cos(m.time)*0.035)+0.5);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 13.668633,
			samples : 512.0,
			additive : 1.0,
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
m.rr = 0;
m.advance = 0;
m.h = 0;
m.l = 0;
m.zf = 0;
m.s = 0;
m.zm = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.zt = 0;
m.t1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.advance = (m.advance+(Math.abs(((m.bass+m.treb)+m.mid))*0.01));
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
m.zp = (m.zp*0.7);
m.x = (div(m.xp,m.zp)+0.5);
m.y = (div(m.yp,m.zp)+0.5);
m.h = ((Math.sin((m.sample*6.28))*0.5)+0.5);
m.s = Math.min(Math.abs((m.zp*0.9)), 1);
m.l = Math.min(Math.abs((m.bass_att*0.7)), 1);
m.cc = (6*m.h);
m.cc = ifcond(below(m.cc, 1), 0, ifcond(below(m.cc, 2), 1, ifcond(below(m.cc, 3), 2, ifcond(below(m.cc, 4), 3, ifcond(below(m.cc, 5), 4, 5)))));
m.zf = ((6*m.h)-m.cc);
m.zm = m.l;
m.zp = (m.l*(1-m.s));
m.zq = (m.l*(1-(m.s*m.zf)));
m.zt = (m.l*(1-(m.s*(1-m.zf))));
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
		'frame_eqs_str' : ('advance=advance+ (abs(bass+treb+mid)*.01);\n' + 'advance=if( above(advance,2) , 0, advance);\n' + 't1=advance;'),
		'point_eqs_str' : ('s=sample*6.28;\n' + 'xp=sin(s)+sin(s*0.34)+sin(s*24.3)+sin(s*13.8);\n' + 'xp=xp*.20;\n' + 'yp=cos(s)+sin(s*0.24)+cos(s*17.4)+sin(s*37.7);\n' + 'yp=yp*.20;\n' + 'zp=cos(s)+cos(s*5.24)+cos(s*47.4)+cos(s*27.7);\n' + 'zp=zp*0.25;\n' + 'zp=zp + 1 - t1;\n' + 'zp=if( below(zp,0) , zp+2 , zp );\n' + 'zp=zp*0.7;\n' + 'x=xp/zp + 0.5;\n' + 'y=yp/zp + 0.5;\n' + 'h=sin(sample*6.28)*.5+.5;\n' + 's=min(abs(zp*.9),1);\n' + 'l=min(abs(bass_att*.7),1);\n' + 'cc=(6*h);\n' + 'cc=if(below(cc,1),0,if(below(cc,2),1,if(below(cc,3),2,if(below(cc,4),3,if(below(cc,5),4,5)))));\n' + 'zf=(6*h)-cc;\n' + 'zm=l;\n' + 'zp=l*(1-s);\n' + 'zq=l*(1-s*zf);\n' + 'zt=l*(1-s*(1-zf));\n' + 'rr=if(equal(cc,0),zm,if(equal(cc,1),zq,if(equal(cc,2),zp,if(equal(cc,3),zp,if(equal(cc,4),zt,zm)))));\n' + 'gg=if(equal(cc,0),zt,if(equal(cc,1),zm,if(equal(cc,2),zm,if(equal(cc,3),zq,if(equal(cc,4),zp,zp)))));\n' + 'bb=if(equal(cc,0),zp,if(equal(cc,1),zp,if(equal(cc,2),zt,if(equal(cc,3),zm,if(equal(cc,4),zm,zq)))));\n' + 'rr=if(equal(s,0),l,rr);\n' + 'gg=if(equal(s,0),l,gg);\n' + 'bb=if(equal(s,0),l,bb);\n' + 'r=rr;\n' + 'g=gg;\n' + 'b=bb;'),

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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.vol_avg = 0;
m.vg = 0;
m.ex = 0;
m.vol = 0;
m.yp = 0;
m.xp = 0;
m.tm = 0;
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
m.r = (Math.sin(((m.xp*3.14)+m.tm))*Math.sin(((m.yp*3.14)+m.tm)));
m.g = (Math.sin(((m.xp*6.28)+m.tm))*Math.sin(((m.yp*6.28)+m.tm)));
m.b = 0.4;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('vol = (bass_att + mid_att + treb_att)*.333333;\n' + 'vol_avg = .1*(vol_avg*9 + vol);\n' + 'vg = vol_avg*.1;\n' + 't1=time*.3;\n' + 't2=2;\n' + 't3=0;\n' + 't4=0;'),
		'point_eqs_str' : ('tm=if(above(yp,0.98),t1,tm);\n' + 'ex=if(above(yp,0.98),t2,ex);\n' + 'sp=.01;\n' + 'yp=if(above(xp,0.9998),yp+sp,yp);\n' + 'xp=if(above(xp,0.9998),0,xp+sp);\n' + 'yp=if(above(yp,0.9998),0,yp);\n' + 'x=((xp*ex)*.1+.5)-(.05*ex)-t3;\n' + 'y=((yp*ex)*.1+.5)-(.05*ex)-t4;\n' + 'r=sin(xp*3.14+tm)*sin(yp*3.14+tm);\n' + 'g=sin(xp*6.28+tm)*sin(yp*6.28+tm);\n' + 'b=.4;'),

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
m.q1 = 0;
m.zang = 0;
m.yang = 0;
m.azang = 0;
m.xang = 0;
m.ayang = 0;
m.hvr = 0;
m.diff = 0;
m.vol_avg = 0;
m.h = 0;
m.maxrgb = 0;
m.ox = 0;
m.oy = 0;
m.tmpa = 0;
m.it = 0;
m.mx = 0;
m.oz = 0;
m.tmpb = 0;
m.sum = 0;
m.l = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.ra = 0;
m.vg = 0;
m.s = 0;
m.vol = 0;
m.hvb = 0;
m.rad = 0;
m.sxang = 0;
m.hvg = 0;
m.tm = 0;
m.z = 0;
m.minrgb = 0;
m.t1 = 0;
m.sp = 0;

			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {
m.vol = (((m.bass_att+m.mid_att)+m.treb_att)*0.333333);
m.vol_avg = (0.1*((m.vol_avg*9)+m.vol));
m.vg = (m.vol_avg*0.1);
m.t1 = ifcond(above(m.vg, 1.8), 1.8, m.vg);
		return m;
	},
		'point_eqs' : function(m) {
m.tm = m.q1;
m.sp = (((m.sample*6.28)*8)*6);
m.vol = ((m.value1+m.value2)*0.5);
m.it = (m.it*above(m.sample, 0));
m.it = (m.it+1);
m.rad = (0.5+m.vol);
m.ra = (m.rad*Math.sin((m.sample*3.14)));
m.ox = (m.ra*Math.sin(m.sp));
m.oy = (Math.sin(((m.sample*3.14)-1.57))*m.rad);
m.oz = (m.ra*Math.cos(m.sp));
m.xang = (m.tm*0.132);
m.sxang = 0;
m.yang = (m.tm*0.153);
m.ayang = 0;
m.zang = (m.tm*0.110);
m.azang = 0;
m.fov = (0.6+(0.2*Math.sin(m.tm)));
m.fov = 0.5;
m.mx = ((m.ox*Math.cos(m.zang))-(m.oy*Math.sin(m.zang)));
m.my = ((m.ox*Math.sin(m.zang))+(m.oy*Math.cos(m.zang)));
m.ox = m.mx;
m.oy = m.my;
m.mx = ((m.ox*Math.cos(m.yang))+(m.oz*Math.sin(m.yang)));
m.mz = ((-m.ox*Math.sin(m.yang))+(m.oz*Math.cos(m.yang)));
m.ox = m.mx;
m.oz = m.mz;
m.my = ((m.oy*Math.cos(m.xang))-(m.oz*Math.sin(m.xang)));
m.mz = ((m.oy*Math.sin(m.xang))+(m.oz*Math.cos(m.xang)));
m.oy = m.my;
m.oz = m.mz;
m.oz = (m.oz-2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
m.r = 1;
m.g = (0.25+(0.25*Math.sin(m.sp)));
m.b = 0;
m.a = (0.5+((m.oz+2)*0.5));
m.a = (m.a*below(m.z, 2));
m.minrgb = Math.min(m.r, Math.min(m.g, m.b));
m.maxrgb = Math.max(m.r, Math.max(m.g, m.b));
m.l = ((m.maxrgb-m.minrgb)*0.5);
m.diff = (m.maxrgb-m.minrgb);
m.sum = (m.maxrgb+m.minrgb);
m.s = (ifcond(above(m.l, 0.5), div(m.diff,(2-m.sum)), div(m.diff,m.sum))*(1-equal(m.l, 0)));
m.h = ifcond(equal(m.r, m.maxrgb), div((m.g-m.b),m.diff), ifcond(equal(m.g, m.maxrgb), (2+div((m.b-m.r),m.diff)), (4+div((m.r-m.g),m.diff))));
m.h = (m.h*0.1666666);
m.h = ifcond(below(m.h, 0), 0, ifcond(above(m.h, 1), 1, m.h));
m.h = (m.h+((m.time*0.05)*1.324));
m.h = (m.h-Math.floor(m.h));
m.tmpb = ifcond(below(m.l, 0.5), (m.l*(1+m.s)), ((m.l+m.s)-(m.s*m.l)));
m.tmpa = ((2*m.l)-m.tmpb);
m.hvr = (m.h+0.333333);
m.hvr = ifcond(below(m.hvr, 0), (m.hvr+1), ifcond(above(m.hvr, 1), (m.hvr-1), m.hvr));
m.hvg = m.h;
m.hvg = ifcond(below(m.hvg, 0), (m.hvg+1), ifcond(above(m.hvg, 1), (m.hvg-1), m.hvg));
m.hvb = (m.h-0.333333);
m.hvb = ifcond(below(m.hvb, 0), (m.hvb+1), ifcond(above(m.hvb, 1), (m.hvb-1), m.hvb));
m.r = ifcond(below((6*m.hvr), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvr)), ifcond(below((2*m.hvr), 1), m.tmpb, ifcond(below((m.hvr*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvr))*6)), m.tmpa)));
m.g = ifcond(below((6*m.hvg), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvg)), ifcond(below((2*m.hvg), 1), m.tmpb, ifcond(below((m.hvg*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvg))*6)), m.tmpa)));
m.b = ifcond(below((6*m.hvb), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvb)), ifcond(below((2*m.hvb), 1), m.tmpb, ifcond(below((m.hvb*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvb))*6)), m.tmpa)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('vol = (bass_att + mid_att + treb_att)*.333333;\n' + 'vol_avg = .1*(vol_avg*9 + vol);\n' + 'vg = vol_avg*.1;\n' + 't1 = if(above(vg,1.8),1.8,vg);'),
		'point_eqs_str' : ('tm = q1;\n' + 'sp = sample*6.28*8*6;\n' + 'vol = (value1+value2)*.5;\n' + 'it = it*above(sample,0);\n' + 'it = it + 1;\n' + 'rad = .5 + vol;\n' + 'ra = rad*sin(sample*3.14);\n' + 'ox = ra*sin(sp);\n' + 'oy = sin(sample*3.14-1.57)*rad;\n' + 'oz = ra*cos(sp);\n' + 'xang = tm*.132;\n' + 'sxang = 0;\n' + 'yang = tm*.153;\n' + 'ayang = 0;\n' + 'zang = tm*.110;\n' + 'azang = 0;\n' + 'fov = 0.6 + 0.2*sin(tm);\n' + 'fov = .5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = oz - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;\n' + 'r = 1;\n' + 'g = .25+.25*sin(sp);\n' + 'b = 0;\n' + 'a = .5 + (oz+2)*.5;\n' + 'a = a*below(z,2);\n' + 'minrgb = min(r,min(g,b));\n' + 'maxrgb = max(r,max(g,b));\n' + 'l = (maxrgb-minrgb)*.5;\n' + 'diff = maxrgb-minrgb;\n' + 'sum = maxrgb+minrgb;\n' + 's = if(above(l,0.5),diff/(2-sum),diff/sum)*(1-equal(l,0));\n' + 'h = if(equal(r,maxrgb),(g-b)/diff,if(equal(g,maxrgb),2+(b-r)/diff,4+(r-g)/diff));\n' + 'h = h*0.1666666;\n' + 'h = if(below(h,0),0,if(above(h,1),1,h));\n' + 'h = h + time*0.05*1.324;\n' + 'h = h - int(h);\n' + 'tmpb = if(below(l,0.5),l*(1+s),(l+s)-(s*l));\n' + 'tmpa = 2*l - tmpb;\n' + 'hvr = h + .333333;\n' + 'hvr = if(below(hvr,0),hvr+1,if(above(hvr,1),hvr-1,hvr));\n' + 'hvg = h;\n' + 'hvg = if(below(hvg,0),hvg+1,if(above(hvg,1),hvg-1,hvg));\n' + 'hvb = h - .333333;\n' + 'hvb = if(below(hvb,0),hvb+1,if(above(hvb,1),hvb-1,hvb));\n' + 'r = if(below(6*hvr,1),tmpa+(tmpb-tmpa)*6*hvr, if(below(2*hvr,1),tmpb, if(below(hvr*3,2),tmpa+(tmpb-tmpa)*(.666666-hvr)*6,tmpa)));\n' + 'g = if(below(6*hvg,1),tmpa+(tmpb-tmpa)*6*hvg, if(below(2*hvg,1),tmpb, if(below(hvg*3,2),tmpa+(tmpb-tmpa)*(.666666-hvg)*6,tmpa)));\n' + 'b = if(below(6*hvb,1),tmpa+(tmpb-tmpa)*6*hvb, if(below(2*hvb,1),tmpb, if(below(hvb*3,2),tmpa+(tmpb-tmpa)*(.666666-hvb)*6,tmpa)));'),

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
			a : 0.6,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 3.241264,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.100996,
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
m.zf = 0;
m.slowp = 0;
m.p = 0;
m.s = 0;
m.zm = 0;
m.zp = 0;
m.zq = 0;
m.monitor = 0;
m.zt = 0;

			m.rkeys = ['slowp','p'];
			return m;
		},
		'frame_eqs' : function(m) {
m.p = (m.p+0.62);
m.slowp = (m.slowp+0.062);
m.p = (below(m.p, 6.283)*m.p);
m.slowp = (below(m.slowp, 6.283)*m.slowp);
m.x = ((Math.sin(m.p)*0.35)+0.5);
m.y = ((Math.cos(m.p)*0.35)+0.5);
m.h = ((Math.sin(m.slowp)*0.5)+0.5);
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
m.h = ((Math.sin(m.slowp)*0.5)+0.5);
m.l = 0.5;
m.s = 0.55;
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
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('p=p+.62;\n' + 'slowp=slowp+.062;\n' + 'p=below(p,6.283)*p;\n' + 'slowp=below(slowp,6.283)*slowp;\n' + 'x=sin(p)*.35+.5;\n' + 'y=cos(p)*.35+.5;\n' + 'h=sin(slowp)*.5+.5;\n' + 's=1;\n' + 'l=1;\n' + 'cc=(6*h);\n' + 'cc=if(below(cc,1),0,if(below(cc,2),1,if(below(cc,3),2,if(below(cc,4),3,if(below(cc,5),4,5)))));\n' + 'zf=(6*h)-cc;\n' + 'zm=l;\n' + 'zp=l*(1-s);\n' + 'zq=l*(1-s*zf);\n' + 'zt=l*(1-s*(1-zf));\n' + 'monitor=zq;\n' + 'rr=if(equal(cc,0),zm,if(equal(cc,1),zq,if(equal(cc,2),zp,if(equal(cc,3),zp,if(equal(cc,4),zt,zm)))));\n' + 'gg=if(equal(cc,0),zt,if(equal(cc,1),zm,if(equal(cc,2),zm,if(equal(cc,3),zq,if(equal(cc,4),zp,zp)))));\n' + 'bb=if(equal(cc,0),zp,if(equal(cc,1),zp,if(equal(cc,2),zt,if(equal(cc,3),zm,if(equal(cc,4),zm,zq)))));\n' + 'rr=if(equal(s,0),l,rr);\n' + 'gg=if(equal(s,0),l,gg);\n' + 'bb=if(equal(s,0),l,bb);\n' + 'r=rr;\n' + 'g=gg;\n' + 'b=bb;\n' + 'h=sin(slowp)*.5+.5;\n' + 'l=.5;\n' + 's=.55;\n' + 'cc=(6*h);\n' + 'cc=if(below(cc,1),0,if(below(cc,2),1,if(below(cc,3),2,if(below(cc,4),3,if(below(cc,5),4,5)))));\n' + 'zf=(6*h)-cc;\n' + 'zm=l;\n' + 'zp=l*(1-s);\n' + 'zq=l*(1-s*zf);\n' + 'zt=l*(1-s*(1-zf));\n' + 'monitor=zq;\n' + 'rr=if(equal(cc,0),zm,if(equal(cc,1),zq,if(equal(cc,2),zp,if(equal(cc,3),zp,if(equal(cc,4),zt,zm)))));\n' + 'gg=if(equal(cc,0),zt,if(equal(cc,1),zm,if(equal(cc,2),zm,if(equal(cc,3),zq,if(equal(cc,4),zp,zp)))));\n' + 'bb=if(equal(cc,0),zp,if(equal(cc,1),zp,if(equal(cc,2),zt,if(equal(cc,3),zm,if(equal(cc,4),zm,zq)))));\n' + 'rr=if(equal(s,0),l,rr);\n' + 'gg=if(equal(s,0),l,gg);\n' + 'bb=if(equal(s,0),l,bb);\n' + 'r2=rr;\n' + 'g2=gg;\n' + 'b2=bb;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.2,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.451118,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.621745,
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
m.slowp = (m.slowp+0.00628);
m.p = (below(m.p, 6.283)*m.p);
m.slowp = (below(m.slowp, 6.283)*m.slowp);
m.my = (m.my+(((m.mid*m.mid)*m.mid)*0.02));
m.turn = below(((Math.sin(m.my)*0.5)+0.5), 0.5);
m.x = ifcond(equal(m.turn, 1), ((Math.sin(m.p)*0.3)+0.5), ((Math.sin((628-m.p))*0.3)+0.5));
m.y = ifcond(equal(m.turn, 1), ((Math.cos(m.p)*0.3)+0.5), ((Math.cos((628-m.p))*0.3)+0.5));
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
		'frame_eqs_str' : ('p=p+.314;\n' + 'slowp=slowp+.00628;\n' + 'p=below(p,6.283)*p;\n' + 'slowp=below(slowp,6.283)*slowp;\n' + 'my=my+(mid*mid*mid)*.02;\n' + 'turn=below(sin(my)*.5+.5,.5);\n' + 'x=if(equal(turn,1),sin(p)*.3+.5,sin(628-p)*.3+.5);\n' + 'y=if(equal(turn,1),cos(p)*.3+.5,cos(628-p)*.3+.5);\n' + 'h=sin(slowp)*.5+.5;\n' + 's=min(abs(bass*.6),1);\n' + 'l=1;\n' + 'cc=(6*h);\n' + 'cc=if(below(cc,1),0,if(below(cc,2),1,if(below(cc,3),2,if(below(cc,4),3,if(below(cc,5),4,5)))));\n' + 'zf=(6*h)-cc;\n' + 'zm=l;\n' + 'zp=l*(1-s);\n' + 'zq=l*(1-s*zf);\n' + 'zt=l*(1-s*(1-zf));\n' + 'monitor=zq;\n' + 'rr=if(equal(cc,0),zm,if(equal(cc,1),zq,if(equal(cc,2),zp,if(equal(cc,3),zp,if(equal(cc,4),zt,zm)))));\n' + 'gg=if(equal(cc,0),zt,if(equal(cc,1),zm,if(equal(cc,2),zm,if(equal(cc,3),zq,if(equal(cc,4),zp,zp)))));\n' + 'bb=if(equal(cc,0),zp,if(equal(cc,1),zp,if(equal(cc,2),zt,if(equal(cc,3),zm,if(equal(cc,4),zm,zq)))));\n' + 'rr=if(equal(s,0),l,rr);\n' + 'gg=if(equal(s,0),l,gg);\n' + 'bb=if(equal(s,0),l,bb);\n' + 'r=rr;\n' + 'g=gg;\n' + 'b=bb;\n' + 'h=sin(slowp)*.5+.5;\n' + 'l=min(abs(bass*.6),1);\n' + 's=1;\n' + 'cc=(6*h);\n' + 'cc=if(below(cc,1),0,if(below(cc,2),1,if(below(cc,3),2,if(below(cc,4),3,if(below(cc,5),4,5)))));\n' + 'zf=(6*h)-cc;\n' + 'zm=l;\n' + 'zp=l*(1-s);\n' + 'zq=l*(1-s*zf);\n' + 'zt=l*(1-s*(1-zf));\n' + 'monitor=zq;\n' + 'rr=if(equal(cc,0),zm,if(equal(cc,1),zq,if(equal(cc,2),zp,if(equal(cc,3),zp,if(equal(cc,4),zt,zm)))));\n' + 'gg=if(equal(cc,0),zt,if(equal(cc,1),zm,if(equal(cc,2),zm,if(equal(cc,3),zq,if(equal(cc,4),zp,zp)))));\n' + 'bb=if(equal(cc,0),zp,if(equal(cc,1),zp,if(equal(cc,2),zt,if(equal(cc,3),zm,if(equal(cc,4),zm,zq)))));\n' + 'rr=if(equal(s,0),l,rr);\n' + 'gg=if(equal(s,0),l,gg);\n' + 'bb=if(equal(s,0),l,bb);\n' + 'r2=rr;\n' + 'g2=gg;\n' + 'b2=bb;\n' + 'border_r=rr;\n' + 'border_g=gg;\n' + 'border_b=bb;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_a=0;\n' + 'decay=1;\n' + 'warp=0;\n' + 'dx=0;\n' + 'dy=0;\n' + 'sx=1;\n' + 'sy=1;\n' + 'when=0;\n' + 'mm=mm+(mid*mid*mid)*.02;\n' + 'mm=below(mm,628)*mm;\n' + 'mt=mt+(bass*bass*bass)*.02;\n' + 'mt=below(mt,628)*mt;\n' + 'rot=if(equal(when,0),sin(mt*.1)*2+2,0)-2;\n' + 'zoom=if(equal(when,0),1-(sin(mm)*.2+.2),1);\n' + 'monitor=mt;\n' + 'cx=sin(time)*.035+.5;\n' + 'cy=cos(time)*.035+.5;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
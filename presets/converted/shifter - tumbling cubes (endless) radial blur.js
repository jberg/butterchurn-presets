define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 9.0,
		wave_scale : 1.285751,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.999836,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 0.999607,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999511,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.9,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q5 = 0;
m.sw = 0;
m.fin = 0;
m.tic = 0;
m.vol = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.sw = above((m.time-m.fin), 0.06);
m.fin = ifcond(m.sw, m.time, m.fin);
m.zoom = ifcond(m.sw, 0.85, 1);
m.monitor = m.tic;
m.vol = (0.1*((m.vol*9)+(((m.bass_att+m.mid_att)+m.treb_att)*0.333333)));
m.q5 = (5-(m.vol*3.5));
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
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.ss = 0;
m.mod = 0;
m.ps = 0;
m.hvr = 0;
m.q5 = 0;
m.diff = 0;
m.sz = 0;
m.h = 0;
m.maxrgb = 0;
m.ox = 0;
m.oy = 0;
m.tmpa = 0;
m.it = 0;
m.oz = 0;
m.tmpb = 0;
m.sum = 0;
m.l = 0;
m.fov = 0;
m.s = 0;
m.hvb = 0;
m.bob = 0;
m.tin = 0;
m.hvg = 0;
m.yr = 0;
m.xr = 0;
m.minrgb = 0;
m.t1 = 0;
m.sp = 0;
m.t2 = 0;
m.tr = 0;
m.t3 = 0;
m.sr = 0;

			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ps = ifcond(above((m.time-m.tin), m.tr), 1, 0);
m.tin = ifcond(m.ps, m.time, m.tin);
m.sz = 3.5;
m.xr = ifcond(m.ps, ((rand((((m.sz*10)*2)+1))*0.1)-m.sz), m.xr);
m.yr = ifcond(m.ps, ((rand(((((m.sz*10)*2)*0.75)+1))*0.1)-(m.sz*0.75)), m.yr);
m.tr = ifcond(m.ps, ((rand(11)*0.1)*0.1), m.tr);
m.sr = ifcond(m.ps, (((rand(8)+3)*0.1)*0.6), m.sr);
m.bob = ifcond(m.ps, (rand(m.q5)*100), m.bob);
m.t1 = (m.xr+m.bob);
m.t2 = (m.yr+m.bob);
m.t3 = m.sr;
		return m;
	},
		'point_eqs' : function(m) {
m.sp = ((((m.sample*6.28)*8)*8)*4);
m.it = (m.it+1);
m.it = (m.it*above(m.sample, 0));
m.sz = m.t3;
m.ss = (m.sample*6);
m.ox = (((((m.sz*0.5)*pow(-1, m.it))*below(m.ss, 1))+((((0.5*pow(-1, m.it))*above(m.ss, 1))*m.sz)*below(m.ss, 2)))+((((above(m.ss, 2)*0.5)*pow(-1, m.it))*m.sz)*below(m.ss, 3)));
m.oy = (((((m.ss-0.5)*m.sz)*below(m.ss, 1))+(((m.sz*0.5)*above(m.ss, 1))*below(m.ss, 2)))+((((0.5-(m.ss-2))*m.sz)*above(m.ss, 2))*below(m.ss, 3)));
m.oz = ((((-m.sz*0.5)*below(m.ss, 1))+(((((m.ss-1)-0.5)*m.sz)*above(m.ss, 1))*below(m.ss, 2)))+(((m.sz*0.5)*above(m.ss, 2))*below(m.ss, 3)));
m.ox = (((m.ox+(((above(m.ss, 3)*below(m.ss, 4))*-0.5)*m.sz))+(((above(m.ss, 4)*below(m.ss, 5))*m.sz)*(-0.5+(m.ss-4))))+((above(m.ss, 5)*m.sz)*0.5));
m.oy = (((m.oy+((((above(m.ss, 3)*below(m.ss, 4))*0.5)*m.sz)*pow(-1, m.it)))+(((above(m.ss, 4)*below(m.ss, 5))*m.sz)*-0.5))+((above(m.ss, 5)*m.sz)*(-0.5+(m.ss-5))));
m.oz = (((m.oz+(((above(m.ss, 3)*below(m.ss, 4))*m.sz)*(0.5-(m.ss-3))))+((((above(m.ss, 4)*below(m.ss, 5))*m.sz)*0.5)*pow(-1, m.it)))+(((above(m.ss, 5)*m.sz)*0.5)*pow(-1, m.it)));
m.fov = 0.3;
m.a = 0.05;
m.mod = ((m.oz+1)*0.5);
m.a = (m.a*Math.max(Math.min(m.mod, 1), 0));
m.oz = (m.oz-2);
m.ox = (m.ox+m.t1);
m.oy = (m.oy+m.t2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
m.r = 1;
m.g = (0.25+(0.25*Math.sin(m.sp)));
m.b = 0;
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
		'frame_eqs_str' : ('ps = if(above(time-tin,tr),1,0);\n' + 'tin = if(ps,time,tin);\n' + 'sz = 3.5;\n' + 'xr = if(ps,rand(sz*10*2 + 1)*.1 - sz,xr);\n' + 'yr = if(ps,rand(sz*10*2*.75 + 1)*.1 - sz*.75,yr);\n' + 'tr = if(ps,rand(11)*.1*.1,tr);\n' + 'sr = if(ps,(rand(8)+3)*.1*.6,sr);\n' + 'bob = if(ps,rand(q5)*100,bob);\n' + 't1 = xr + bob;\n' + 't2 = yr + bob;\n' + 't3 = sr;'),
		'point_eqs_str' : ('sp = sample*6.28*8*8*4;\n' + 'it = it+1;\n' + 'it = it*above(sample,0);\n' + 'sz = t3;\n' + 'ss = sample*6;\n' + 'ox = sz*.5*pow(-1,it)*below(ss,1) + .5*pow(-1,it)*above(ss,1)*sz*below(ss,2) + above(ss,2)*.5*pow(-1,it)*sz*below(ss,3);\n' + 'oy = (ss-.5)*sz*below(ss,1) + sz*.5*above(ss,1)*below(ss,2) + (.5-(ss-2))*sz*above(ss,2)*below(ss,3);\n' + 'oz = -sz*.5*below(ss,1) + ((ss-1)-.5)*sz*above(ss,1)*below(ss,2) + sz*.5*above(ss,2)*below(ss,3);\n' + 'ox = ox + above(ss,3)*below(ss,4)*-.5*sz + above(ss,4)*below(ss,5)*sz*(-.5+(ss-4)) + above(ss,5)*sz*.5;\n' + 'oy = oy + above(ss,3)*below(ss,4)*.5*sz*pow(-1,it) + above(ss,4)*below(ss,5)*sz*-.5 + above(ss,5)*sz*(-.5+(ss-5));\n' + 'oz = oz + above(ss,3)*below(ss,4)*sz*(.5-(ss-3)) + above(ss,4)*below(ss,5)*sz*.5*pow(-1,it) + above(ss,5)*sz*.5*pow(-1,it);\n' + 'fov = .3;\n' + 'a = .05;\n' + 'mod = (oz+1)*.5;\n' + 'a = a*max(min(mod,1),0);\n' + 'oz = oz - 2;\n' + 'ox = ox + t1;\n' + 'oy = oy + t2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;\n' + 'r = 1;\n' + 'g = .25+.25*sin(sp);\n' + 'b = 0;\n' + 'minrgb = min(r,min(g,b));\n' + 'maxrgb = max(r,max(g,b));\n' + 'l = (maxrgb-minrgb)*.5;\n' + 'diff = maxrgb-minrgb;\n' + 'sum = maxrgb+minrgb;\n' + 's = if(above(l,0.5),diff/(2-sum),diff/sum)*(1-equal(l,0));\n' + 'h = if(equal(r,maxrgb),(g-b)/diff,if(equal(g,maxrgb),2+(b-r)/diff,4+(r-g)/diff));\n' + 'h = h*0.1666666;\n' + 'h = if(below(h,0),0,if(above(h,1),1,h));\n' + 'h = h + time*0.05*1.324;\n' + 'h = h - int(h);\n' + 'tmpb = if(below(l,0.5),l*(1+s),(l+s)-(s*l));\n' + 'tmpa = 2*l - tmpb;\n' + 'hvr = h + .333333;\n' + 'hvr = if(below(hvr,0),hvr+1,if(above(hvr,1),hvr-1,hvr));\n' + 'hvg = h;\n' + 'hvg = if(below(hvg,0),hvg+1,if(above(hvg,1),hvg-1,hvg));\n' + 'hvb = h - .333333;\n' + 'hvb = if(below(hvb,0),hvb+1,if(above(hvb,1),hvb-1,hvb));\n' + 'r = if(below(6*hvr,1),tmpa+(tmpb-tmpa)*6*hvr, if(below(2*hvr,1),tmpb, if(below(hvr*3,2),tmpa+(tmpb-tmpa)*(.666666-hvr)*6,tmpa)));\n' + 'g = if(below(6*hvg,1),tmpa+(tmpb-tmpa)*6*hvg, if(below(2*hvg,1),tmpb, if(below(hvg*3,2),tmpa+(tmpb-tmpa)*(.666666-hvg)*6,tmpa)));\n' + 'b = if(below(6*hvb,1),tmpa+(tmpb-tmpa)*6*hvb, if(below(2*hvb,1),tmpb, if(below(hvb*3,2),tmpa+(tmpb-tmpa)*(.666666-hvb)*6,tmpa)));'),

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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.ss = 0;
m.mod = 0;
m.ps = 0;
m.q5 = 0;
m.sz = 0;
m.ox = 0;
m.oy = 0;
m.it = 0;
m.oz = 0;
m.fov = 0;
m.bob = 0;
m.tin = 0;
m.yr = 0;
m.xr = 0;
m.t1 = 0;
m.sp = 0;
m.t2 = 0;
m.tr = 0;
m.t3 = 0;
m.sr = 0;

			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ps = ifcond(above((m.time-m.tin), m.tr), 1, 0);
m.tin = ifcond(m.ps, m.time, m.tin);
m.sz = 3.5;
m.xr = ifcond(m.ps, ((rand((((m.sz*10)*2)+1))*0.1)-m.sz), m.xr);
m.yr = ifcond(m.ps, ((rand(((((m.sz*10)*2)*0.75)+1))*0.1)-(m.sz*0.75)), m.yr);
m.tr = ifcond(m.ps, ((rand(11)*0.1)*0.1), m.tr);
m.sr = ifcond(m.ps, (((rand(8)+3)*0.1)*0.6), m.sr);
m.bob = ifcond(m.ps, (rand(m.q5)*100), m.bob);
m.t1 = (m.xr+m.bob);
m.t2 = (m.yr+m.bob);
m.t3 = m.sr;
		return m;
	},
		'point_eqs' : function(m) {
m.sp = ((((m.sample*6.28)*8)*8)*4);
m.it = (m.it+1);
m.it = (m.it*above(m.sample, 0));
m.sz = m.t3;
m.ss = (m.sample*6);
m.ox = (((((m.sz*0.5)*pow(-1, m.it))*below(m.ss, 1))+((((0.5*pow(-1, m.it))*above(m.ss, 1))*m.sz)*below(m.ss, 2)))+((((above(m.ss, 2)*0.5)*pow(-1, m.it))*m.sz)*below(m.ss, 3)));
m.oy = (((((m.ss-0.5)*m.sz)*below(m.ss, 1))+(((m.sz*0.5)*above(m.ss, 1))*below(m.ss, 2)))+((((0.5-(m.ss-2))*m.sz)*above(m.ss, 2))*below(m.ss, 3)));
m.oz = ((((-m.sz*0.5)*below(m.ss, 1))+(((((m.ss-1)-0.5)*m.sz)*above(m.ss, 1))*below(m.ss, 2)))+(((m.sz*0.5)*above(m.ss, 2))*below(m.ss, 3)));
m.ox = (((m.ox+(((above(m.ss, 3)*below(m.ss, 4))*-0.5)*m.sz))+(((above(m.ss, 4)*below(m.ss, 5))*m.sz)*(-0.5+(m.ss-4))))+((above(m.ss, 5)*m.sz)*0.5));
m.oy = (((m.oy+((((above(m.ss, 3)*below(m.ss, 4))*0.5)*m.sz)*pow(-1, m.it)))+(((above(m.ss, 4)*below(m.ss, 5))*m.sz)*-0.5))+((above(m.ss, 5)*m.sz)*(-0.5+(m.ss-5))));
m.oz = (((m.oz+(((above(m.ss, 3)*below(m.ss, 4))*m.sz)*(0.5-(m.ss-3))))+((((above(m.ss, 4)*below(m.ss, 5))*m.sz)*0.5)*pow(-1, m.it)))+(((above(m.ss, 5)*m.sz)*0.5)*pow(-1, m.it)));
m.fov = 0.3;
m.a = 0.05;
m.mod = ((m.oz+1)*0.5);
m.a = (m.a*Math.max(Math.min(m.mod, 1), 0));
m.oz = (m.oz-2);
m.ox = (m.ox+m.t1);
m.oy = (m.oy+m.t2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
m.r = (1+Math.sin(m.sp));
m.g = (0.5+(0.5*Math.sin((m.sample*1.57))));
m.b = (0.5+(0.5*Math.cos((m.sample*1.57))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ps = if(above(time-tin,tr),1,0);\n' + 'tin = if(ps,time,tin);\n' + 'sz = 3.5;\n' + 'xr = if(ps,rand(sz*10*2 + 1)*.1 - sz,xr);\n' + 'yr = if(ps,rand(sz*10*2*.75 + 1)*.1 - sz*.75,yr);\n' + 'tr = if(ps,rand(11)*.1*.1,tr);\n' + 'sr = if(ps,(rand(8)+3)*.1*.6,sr);\n' + 'bob = if(ps,rand(q5)*100,bob);\n' + 't1 = xr + bob;\n' + 't2 = yr + bob;\n' + 't3 = sr;'),
		'point_eqs_str' : ('sp = sample*6.28*8*8*4;\n' + 'it = it+1;\n' + 'it = it*above(sample,0);\n' + 'sz = t3;\n' + 'ss = sample*6;\n' + 'ox = sz*.5*pow(-1,it)*below(ss,1) + .5*pow(-1,it)*above(ss,1)*sz*below(ss,2) + above(ss,2)*.5*pow(-1,it)*sz*below(ss,3);\n' + 'oy = (ss-.5)*sz*below(ss,1) + sz*.5*above(ss,1)*below(ss,2) + (.5-(ss-2))*sz*above(ss,2)*below(ss,3);\n' + 'oz = -sz*.5*below(ss,1) + ((ss-1)-.5)*sz*above(ss,1)*below(ss,2) + sz*.5*above(ss,2)*below(ss,3);\n' + 'ox = ox + above(ss,3)*below(ss,4)*-.5*sz + above(ss,4)*below(ss,5)*sz*(-.5+(ss-4)) + above(ss,5)*sz*.5;\n' + 'oy = oy + above(ss,3)*below(ss,4)*.5*sz*pow(-1,it) + above(ss,4)*below(ss,5)*sz*-.5 + above(ss,5)*sz*(-.5+(ss-5));\n' + 'oz = oz + above(ss,3)*below(ss,4)*sz*(.5-(ss-3)) + above(ss,4)*below(ss,5)*sz*.5*pow(-1,it) + above(ss,5)*sz*.5*pow(-1,it);\n' + 'fov = .3;\n' + 'a = .05;\n' + 'mod = (oz+1)*.5;\n' + 'a = a*max(min(mod,1),0);\n' + 'oz = oz - 2;\n' + 'ox = ox + t1;\n' + 'oy = oy + t2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;\n' + 'r = 1+sin(sp);\n' + 'g = 0.5 + 0.5*sin(sample*1.57);\n' + 'b = 0.5 + 0.5*cos(sample*1.57);'),

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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.ss = 0;
m.mod = 0;
m.ps = 0;
m.q5 = 0;
m.sz = 0;
m.ox = 0;
m.oy = 0;
m.it = 0;
m.oz = 0;
m.fov = 0;
m.bob = 0;
m.tin = 0;
m.yr = 0;
m.xr = 0;
m.t1 = 0;
m.sp = 0;
m.t2 = 0;
m.tr = 0;
m.t3 = 0;
m.sr = 0;

			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ps = ifcond(above((m.time-m.tin), m.tr), 1, 0);
m.tin = ifcond(m.ps, m.time, m.tin);
m.sz = 3.5;
m.xr = ifcond(m.ps, ((rand((((m.sz*10)*2)+1))*0.1)-m.sz), m.xr);
m.yr = ifcond(m.ps, ((rand(((((m.sz*10)*2)*0.75)+1))*0.1)-(m.sz*0.75)), m.yr);
m.tr = ifcond(m.ps, ((rand(11)*0.1)*0.1), m.tr);
m.sr = ifcond(m.ps, (((rand(8)+3)*0.1)*0.6), m.sr);
m.bob = ifcond(m.ps, (rand(m.q5)*100), m.bob);
m.t1 = (m.xr+m.bob);
m.t2 = (m.yr+m.bob);
m.t3 = m.sr;
		return m;
	},
		'point_eqs' : function(m) {
m.sp = ((((m.sample*6.28)*8)*8)*4);
m.it = (m.it+1);
m.it = (m.it*above(m.sample, 0));
m.sz = m.t3;
m.ss = (m.sample*6);
m.ox = (((((m.sz*0.5)*pow(-1, m.it))*below(m.ss, 1))+((((0.5*pow(-1, m.it))*above(m.ss, 1))*m.sz)*below(m.ss, 2)))+((((above(m.ss, 2)*0.5)*pow(-1, m.it))*m.sz)*below(m.ss, 3)));
m.oy = (((((m.ss-0.5)*m.sz)*below(m.ss, 1))+(((m.sz*0.5)*above(m.ss, 1))*below(m.ss, 2)))+((((0.5-(m.ss-2))*m.sz)*above(m.ss, 2))*below(m.ss, 3)));
m.oz = ((((-m.sz*0.5)*below(m.ss, 1))+(((((m.ss-1)-0.5)*m.sz)*above(m.ss, 1))*below(m.ss, 2)))+(((m.sz*0.5)*above(m.ss, 2))*below(m.ss, 3)));
m.ox = (((m.ox+(((above(m.ss, 3)*below(m.ss, 4))*-0.5)*m.sz))+(((above(m.ss, 4)*below(m.ss, 5))*m.sz)*(-0.5+(m.ss-4))))+((above(m.ss, 5)*m.sz)*0.5));
m.oy = (((m.oy+((((above(m.ss, 3)*below(m.ss, 4))*0.5)*m.sz)*pow(-1, m.it)))+(((above(m.ss, 4)*below(m.ss, 5))*m.sz)*-0.5))+((above(m.ss, 5)*m.sz)*(-0.5+(m.ss-5))));
m.oz = (((m.oz+(((above(m.ss, 3)*below(m.ss, 4))*m.sz)*(0.5-(m.ss-3))))+((((above(m.ss, 4)*below(m.ss, 5))*m.sz)*0.5)*pow(-1, m.it)))+(((above(m.ss, 5)*m.sz)*0.5)*pow(-1, m.it)));
m.fov = 0.3;
m.a = 0.05;
m.mod = ((m.oz+1)*0.5);
m.a = (m.a*Math.max(Math.min(m.mod, 1), 0));
m.oz = (m.oz-2);
m.ox = (m.ox+m.t1);
m.oy = (m.oy+m.t2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
m.r = (1+Math.sin(m.sp));
m.g = (0.5+(0.5*Math.sin((m.sample*1.57))));
m.b = (0.5+(0.5*Math.cos((m.sample*1.57))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ps = if(above(time-tin,tr),1,0);\n' + 'tin = if(ps,time,tin);\n' + 'sz = 3.5;\n' + 'xr = if(ps,rand(sz*10*2 + 1)*.1 - sz,xr);\n' + 'yr = if(ps,rand(sz*10*2*.75 + 1)*.1 - sz*.75,yr);\n' + 'tr = if(ps,rand(11)*.1*.1,tr);\n' + 'sr = if(ps,(rand(8)+3)*.1*.6,sr);\n' + 'bob = if(ps,rand(q5)*100,bob);\n' + 't1 = xr + bob;\n' + 't2 = yr + bob;\n' + 't3 = sr;'),
		'point_eqs_str' : ('sp = sample*6.28*8*8*4;\n' + 'it = it+1;\n' + 'it = it*above(sample,0);\n' + 'sz = t3;\n' + 'ss = sample*6;\n' + 'ox = sz*.5*pow(-1,it)*below(ss,1) + .5*pow(-1,it)*above(ss,1)*sz*below(ss,2) + above(ss,2)*.5*pow(-1,it)*sz*below(ss,3);\n' + 'oy = (ss-.5)*sz*below(ss,1) + sz*.5*above(ss,1)*below(ss,2) + (.5-(ss-2))*sz*above(ss,2)*below(ss,3);\n' + 'oz = -sz*.5*below(ss,1) + ((ss-1)-.5)*sz*above(ss,1)*below(ss,2) + sz*.5*above(ss,2)*below(ss,3);\n' + 'ox = ox + above(ss,3)*below(ss,4)*-.5*sz + above(ss,4)*below(ss,5)*sz*(-.5+(ss-4)) + above(ss,5)*sz*.5;\n' + 'oy = oy + above(ss,3)*below(ss,4)*.5*sz*pow(-1,it) + above(ss,4)*below(ss,5)*sz*-.5 + above(ss,5)*sz*(-.5+(ss-5));\n' + 'oz = oz + above(ss,3)*below(ss,4)*sz*(.5-(ss-3)) + above(ss,4)*below(ss,5)*sz*.5*pow(-1,it) + above(ss,5)*sz*.5*pow(-1,it);\n' + 'fov = .3;\n' + 'a = .05;\n' + 'mod = (oz+1)*.5;\n' + 'a = a*max(min(mod,1),0);\n' + 'oz = oz - 2;\n' + 'ox = ox + t1;\n' + 'oy = oy + t2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;\n' + 'r = 1+sin(sp);\n' + 'g = 0.5 + 0.5*sin(sample*1.57);\n' + 'b = 0.5 + 0.5*cos(sample*1.57);'),

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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.ss = 0;
m.mod = 0;
m.ps = 0;
m.q5 = 0;
m.sz = 0;
m.ox = 0;
m.oy = 0;
m.it = 0;
m.oz = 0;
m.fov = 0;
m.bob = 0;
m.tin = 0;
m.yr = 0;
m.xr = 0;
m.t1 = 0;
m.sp = 0;
m.t2 = 0;
m.tr = 0;
m.t3 = 0;
m.sr = 0;

			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ps = ifcond(above((m.time-m.tin), m.tr), 1, 0);
m.tin = ifcond(m.ps, m.time, m.tin);
m.sz = 3.5;
m.xr = ifcond(m.ps, ((rand((((m.sz*10)*2)+1))*0.1)-m.sz), m.xr);
m.yr = ifcond(m.ps, ((rand(((((m.sz*10)*2)*0.75)+1))*0.1)-(m.sz*0.75)), m.yr);
m.tr = ifcond(m.ps, ((rand(11)*0.1)*0.1), m.tr);
m.sr = ifcond(m.ps, (((rand(8)+3)*0.1)*0.6), m.sr);
m.bob = ifcond(m.ps, (rand(m.q5)*100), m.bob);
m.t1 = (m.xr+m.bob);
m.t2 = (m.yr+m.bob);
m.t3 = m.sr;
		return m;
	},
		'point_eqs' : function(m) {
m.sp = ((((m.sample*6.28)*8)*8)*4);
m.it = (m.it+1);
m.it = (m.it*above(m.sample, 0));
m.sz = m.t3;
m.ss = (m.sample*6);
m.ox = (((((m.sz*0.5)*pow(-1, m.it))*below(m.ss, 1))+((((0.5*pow(-1, m.it))*above(m.ss, 1))*m.sz)*below(m.ss, 2)))+((((above(m.ss, 2)*0.5)*pow(-1, m.it))*m.sz)*below(m.ss, 3)));
m.oy = (((((m.ss-0.5)*m.sz)*below(m.ss, 1))+(((m.sz*0.5)*above(m.ss, 1))*below(m.ss, 2)))+((((0.5-(m.ss-2))*m.sz)*above(m.ss, 2))*below(m.ss, 3)));
m.oz = ((((-m.sz*0.5)*below(m.ss, 1))+(((((m.ss-1)-0.5)*m.sz)*above(m.ss, 1))*below(m.ss, 2)))+(((m.sz*0.5)*above(m.ss, 2))*below(m.ss, 3)));
m.ox = (((m.ox+(((above(m.ss, 3)*below(m.ss, 4))*-0.5)*m.sz))+(((above(m.ss, 4)*below(m.ss, 5))*m.sz)*(-0.5+(m.ss-4))))+((above(m.ss, 5)*m.sz)*0.5));
m.oy = (((m.oy+((((above(m.ss, 3)*below(m.ss, 4))*0.5)*m.sz)*pow(-1, m.it)))+(((above(m.ss, 4)*below(m.ss, 5))*m.sz)*-0.5))+((above(m.ss, 5)*m.sz)*(-0.5+(m.ss-5))));
m.oz = (((m.oz+(((above(m.ss, 3)*below(m.ss, 4))*m.sz)*(0.5-(m.ss-3))))+((((above(m.ss, 4)*below(m.ss, 5))*m.sz)*0.5)*pow(-1, m.it)))+(((above(m.ss, 5)*m.sz)*0.5)*pow(-1, m.it)));
m.fov = 0.3;
m.a = 0.05;
m.mod = ((m.oz+1)*0.5);
m.a = (m.a*Math.max(Math.min(m.mod, 1), 0));
m.oz = (m.oz-2);
m.ox = (m.ox+m.t1);
m.oy = (m.oy+m.t2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
m.r = (1+Math.sin(m.sp));
m.g = (0.5+(0.5*Math.sin((m.sample*1.57))));
m.b = (0.5+(0.5*Math.cos((m.sample*1.57))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ps = if(above(time-tin,tr),1,0);\n' + 'tin = if(ps,time,tin);\n' + 'sz = 3.5;\n' + 'xr = if(ps,rand(sz*10*2 + 1)*.1 - sz,xr);\n' + 'yr = if(ps,rand(sz*10*2*.75 + 1)*.1 - sz*.75,yr);\n' + 'tr = if(ps,rand(11)*.1*.1,tr);\n' + 'sr = if(ps,(rand(8)+3)*.1*.6,sr);\n' + 'bob = if(ps,rand(q5)*100,bob);\n' + 't1 = xr + bob;\n' + 't2 = yr + bob;\n' + 't3 = sr;'),
		'point_eqs_str' : ('sp = sample*6.28*8*8*4;\n' + 'it = it+1;\n' + 'it = it*above(sample,0);\n' + 'sz = t3;\n' + 'ss = sample*6;\n' + 'ox = sz*.5*pow(-1,it)*below(ss,1) + .5*pow(-1,it)*above(ss,1)*sz*below(ss,2) + above(ss,2)*.5*pow(-1,it)*sz*below(ss,3);\n' + 'oy = (ss-.5)*sz*below(ss,1) + sz*.5*above(ss,1)*below(ss,2) + (.5-(ss-2))*sz*above(ss,2)*below(ss,3);\n' + 'oz = -sz*.5*below(ss,1) + ((ss-1)-.5)*sz*above(ss,1)*below(ss,2) + sz*.5*above(ss,2)*below(ss,3);\n' + 'ox = ox + above(ss,3)*below(ss,4)*-.5*sz + above(ss,4)*below(ss,5)*sz*(-.5+(ss-4)) + above(ss,5)*sz*.5;\n' + 'oy = oy + above(ss,3)*below(ss,4)*.5*sz*pow(-1,it) + above(ss,4)*below(ss,5)*sz*-.5 + above(ss,5)*sz*(-.5+(ss-5));\n' + 'oz = oz + above(ss,3)*below(ss,4)*sz*(.5-(ss-3)) + above(ss,4)*below(ss,5)*sz*.5*pow(-1,it) + above(ss,5)*sz*.5*pow(-1,it);\n' + 'fov = .3;\n' + 'a = .05;\n' + 'mod = (oz+1)*.5;\n' + 'a = a*max(min(mod,1),0);\n' + 'oz = oz - 2;\n' + 'ox = ox + t1;\n' + 'oy = oy + t2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;\n' + 'r = 1+sin(sp);\n' + 'g = 0.5 + 0.5*sin(sample*1.57);\n' + 'b = 0.5 + 0.5*cos(sample*1.57);'),

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
			tex_zoom : 3.99914,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.270481,
			x : 0.2,
			y : 0.3,
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
	'warp' : ('shader_body {\n' + '   vec2 v_1;\n' + '   vec3 ret_2;\n' + '  v_1 = ((normalize(\n' + '    (uv - 0.5)\n' + '  ) * aspect.xy) * (texsize.zw * 3.0));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (v_1 * 2.5));\n' + '  tmpvar_4 = texture2D (sampler_main, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv + (v_1 * 5.5));\n' + '  tmpvar_6 = texture2D (sampler_main, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (v_1 * -4.0));\n' + '  tmpvar_8 = texture2D (sampler_main, P_9);\n' + '  ret_2 = (0.25 * ((tmpvar_3.xyz + tmpvar_4.xyz) + (tmpvar_6.xyz + tmpvar_8.xyz)));\n' + '  ret_2 = (ret_2 - 0.01);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_a = 0;\n' + 'sw = above(time-fin,0.06);\n' + 'fin = if(sw,time,fin);\n' + 'zoom = if(sw,.85,1);\n' + 'monitor = tic;\n' + 'vol = .1*(vol*9 + (bass_att+mid_att+treb_att)*.333333);\n' + 'q5 = 5 - vol*3.5;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
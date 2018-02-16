define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.960001,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 9.0,
		wave_scale : 1.285751,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 2.987792,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.029896,
		ob_size : 0.0,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.000432,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.91,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.mt = 0;
m.q8 = 0;
m.toc = 0;
m.vav = 0;
m.treb_avg = 0;
m.tic = 0;
m.ra = 0;
m.slide = 0;
m.bt = 0;
m.bass_avg = 0;
m.vol = 0;
m.arot = 0;
m.vrt = 0;
m.tin = 0;
m.mid_avg = 0;
m.sp = 0;
m.vt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.arot = 1.5708;
m.decay = 1;
m.q1 = 0.1;
m.q5 = 0.6;
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = m.time;
m.vol = (((m.bass_att+m.treb_att)+m.mid_att)*0.333333);
m.ra = 10;
m.treb_avg = (m.tic*((m.treb_avg*(div(1,m.tic)-m.ra))+(m.ra*m.treb)));
m.mid_avg = (m.tic*((m.mid_avg*(div(1,m.tic)-m.ra))+(m.ra*m.mid)));
m.bass_avg = (m.tic*((m.bass_avg*(div(1,m.tic)-m.ra))+(m.ra*m.bass)));
m.vav = (m.tic*((m.vav*(div(1,m.tic)-m.ra))+((m.ra*((m.bass+m.treb)+m.mid))*0.33333)));
m.tt = (m.tt+(m.tic*m.treb));
m.mt = (m.mt+(m.tic*m.mid));
m.bt = (m.bt+(m.tic*m.bass));
m.vt = (m.vt+(m.tic*m.vav));
m.sp = (Math.abs((m.vav-m.slide))*0.1);
m.slide = (ifcond(above(m.slide, m.vav), (m.slide-(m.tic*m.sp)), (m.slide+(m.tic*m.sp)))+(((1-m.toc)*m.vav)*0.2));
m.toc = 1;
m.q6 = m.bt;
m.q7 = m.mt;
m.q8 = m.tt;
m.q3 = m.slide;
m.q2 = (m.vt*0.5);
m.vrt = (m.vrt+(m.tic*Math.min(1, Math.max(0.1, (2-m.vav)))));
m.q4 = (m.vrt*6);
m.zoom = (1+(pow(m.vav, 4)*0.2));
m.monitor = m.vav;
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
			g : 0.9,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 0.7,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.rr = 0;
m.t4 = 0;
m.zang = 0;
m.q2 = 0;
m.t5 = 0;
m.yang = 0;
m.mo = 0;
m.q3 = 0;
m.cut = 0;
m.t6 = 0;
m.xang = 0;
m.mod = 0;
m.t7 = 0;
m.spa = 0;
m.t8 = 0;
m.spb = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.ox = 0;
m.oy = 0;
m.it = 0;
m.mx = 0;
m.oz = 0;
m.wmod = 0;
m.tme = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.ra = 0;
m.spm = 0;
m.rb = 0;
m.rc = 0;
m.rd = 0;
m.re = 0;
m.rf = 0;
m.rg = 0;
m.rh = 0;
m.ri = 0;
m.rj = 0;
m.pi = 0;
m.rk = 0;
m.rl = 0;
m.sm = 0;
m.rm = 0;
m.rn = 0;
m.ro = 0;
m.t1 = 0;
m.sp = 0;
m.rp = 0;
m.t2 = 0;
m.rq = 0;
m.t3 = 0;
m.sam = 0;

			m.rkeys = ['rr','it','ra','rb','rc','rd','re','rf','rg','rh','ri','rj','rk','rl','rm','rn','ro','rp','rq'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ra = ifcond(m.ra, m.ra, (2+((8*rand(1001))*0.001)));
m.rb = ifcond(m.rb, m.rb, (2+((8*rand(1001))*0.001)));
m.rc = ifcond(m.rc, m.rc, (2+((8*rand(1001))*0.001)));
m.rd = ifcond(m.rd, m.rd, (2+((8*rand(1001))*0.001)));
m.re = ifcond(m.re, m.re, (2+((8*rand(1001))*0.001)));
m.rf = ifcond(m.rf, m.rf, (2+((8*rand(1001))*0.001)));
m.t1 = (m.ra*6.2832);
m.t2 = (m.rb*6.2832);
m.t3 = (m.rc*6.2832);
m.t4 = (m.rd*6.2832);
m.t5 = (m.re*6.2832);
m.t6 = (m.rf*6.2832);
m.rg = ifcond(m.rg, m.rg, (0.1+((0.8*rand(1001))*0.001)));
m.rh = ifcond(m.rh, m.rh, (0.1+((0.8*rand(1001))*0.001)));
m.t7 = m.rg;
m.t8 = m.rh;
		return m;
	},
		'point_eqs' : function(m) {
m.ra = ifcond(m.ra, m.ra, (2+((8*rand(1001))*0.001)));
m.rb = ifcond(m.rb, m.rb, (2+((8*rand(1001))*0.001)));
m.rc = ifcond(m.rc, m.rc, (2+((8*rand(1001))*0.001)));
m.rd = ifcond(m.rd, m.rd, (2+((8*rand(1001))*0.001)));
m.re = ifcond(m.re, m.re, (2+((8*rand(1001))*0.001)));
m.rf = ifcond(m.rf, m.rf, (2+((8*rand(1001))*0.001)));
m.rg = ifcond(m.rg, m.rg, (2+((8*rand(1001))*0.001)));
m.rh = ifcond(m.rh, m.rh, (2+((8*rand(1001))*0.001)));
m.ri = ifcond(m.ri, m.ri, (2+((8*rand(1001))*0.001)));
m.rj = ifcond(m.rj, m.rj, (2+((8*rand(1001))*0.001)));
m.rk = ifcond(m.rk, m.rk, (2+((8*rand(1001))*0.001)));
m.rl = ifcond(m.rl, m.rl, (2+((8*rand(1001))*0.001)));
m.rm = ifcond(m.rm, m.rm, (2+((8*rand(1001))*0.001)));
m.rn = ifcond(m.rn, m.rn, (2+((8*rand(1001))*0.001)));
m.ro = ifcond(m.ro, m.ro, (2+((8*rand(1001))*0.001)));
m.rp = ifcond(m.rp, m.rp, (2+((8*rand(1001))*0.001)));
m.rq = ifcond(m.rq, m.rq, (2+((8*rand(1001))*0.001)));
m.rr = ifcond(m.rr, m.rr, (2+((8*rand(1001))*0.001)));
m.it = (m.it*above(m.sample, 0));
m.it = (m.it+1);
m.pi = 6.2813;
m.sam = m.sample;
m.spm = (0.5+(0.5*Math.sin(((m.q2-m.sam)*6.24))));
m.a = Math.min((((1-m.sam)*m.value2)*3), 1);
m.r = pow((1-m.sam), 1);
m.g = pow((1-m.sam), 1);
m.b = pow((1-m.sam), 1);
m.sp = ((m.q6*0.15)-(m.sam*0.2));
m.spa = ((m.q7*0.15)-(m.sam*0.2));
m.spb = ((m.q8*0.15)-(m.sam*0.2));
m.ox = (m.sam*((0.5*Math.sin(((m.sp*m.ra)*m.pi)))+(0.5*Math.sin(((m.sp*m.rd)*m.pi)))));
m.oy = (m.sam*((0.5*Math.sin(((m.sp*m.rb)*m.pi)))+(0.5*Math.sin(((m.sp*m.re)*m.pi)))));
m.oz = (m.sam*((0.5*Math.sin(((m.sp*m.rc)*m.pi)))+(0.5*Math.sin(((m.sp*m.rf)*m.pi)))));
m.cut = 0.2;
m.sm = (m.sam*above(m.sam, m.cut));
m.mo = rand(2);
m.ox = (m.ox+(Math.max(0, (m.sm-m.cut))*ifcond(m.mo, Math.sin((m.spa*m.rg)), Math.sin((m.spa*m.rh)))));
m.oy = (m.oy+(Math.max(0, (m.sm-m.cut))*ifcond(m.mo, Math.sin((m.spa*m.ri)), Math.sin((m.spa*m.rj)))));
m.oz = (m.oz+(Math.max(0, (m.sm-m.cut))*ifcond(m.mo, Math.sin((m.spa*m.rk)), Math.sin((m.spa*m.rl)))));
m.cut = 0.4;
m.sm = (m.sm*above(m.sm, m.cut));
m.mo = rand(2);
m.ox = (m.ox+(Math.max(0, (m.sm-m.cut))*ifcond(m.mo, Math.sin((m.spb*m.rm)), Math.sin((m.spb*m.rp)))));
m.oy = (m.oy+(Math.max(0, (m.sm-m.cut))*ifcond(m.mo, Math.sin((m.spb*m.rn)), Math.sin((m.spb*m.rq)))));
m.oz = (m.oz+(Math.max(0, (m.sm-m.cut))*ifcond(m.mo, Math.sin((m.spb*m.ro)), Math.sin((m.spb*m.rr)))));
m.xang = (m.q6*0.1);
m.yang = (m.q7*0.1);
m.zang = (m.q8*0.1);
m.fov = 0.5;
m.mx = ((m.ox*Math.cos(m.yang))+(m.oz*Math.sin(m.yang)));
m.mz = ((-m.ox*Math.sin(m.yang))+(m.oz*Math.cos(m.yang)));
m.ox = m.mx;
m.oz = m.mz;
m.mx = ((m.ox*Math.cos(m.zang))-(m.oy*Math.sin(m.zang)));
m.my = ((m.ox*Math.sin(m.zang))+(m.oy*Math.cos(m.zang)));
m.ox = m.mx;
m.oy = m.my;
m.my = ((m.oy*Math.cos(m.xang))-(m.oz*Math.sin(m.xang)));
m.mz = ((m.oy*Math.sin(m.xang))+(m.oz*Math.cos(m.xang)));
m.oy = m.my;
m.oz = m.mz;
m.tme = ((((m.q6+m.q7)+m.q8)*2)-((m.sam*6.24)*4));
m.mod = (1-m.sam);
m.wmod = 1;
m.ox = ((m.ox*(1-m.mod))+(((Math.sin((m.tme*0.33))*0.5)+(0.5*Math.cos((m.tme*0.542))))*m.mod));
m.oy = ((m.oy*(1-m.mod))+(((Math.cos((m.tme*0.24))*0.5)+(0.5*Math.sin((m.tme*0.542))))*m.mod));
m.oz = ((m.oz*(1-m.mod))+(((Math.sin((m.tme*0.11))*0.5)+(0.5*Math.cos((m.tme*0.542))))*m.mod));
m.ox = (m.ox*m.q3);
m.oy = (m.oy*m.q3);
m.oz = (m.oz*m.q3);
m.oz = (m.oz-2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ra = if(ra,ra,2 + 8*rand(1001)*.001);\n' + 'rb = if(rb,rb,2 + 8*rand(1001)*.001);\n' + 'rc = if(rc,rc,2 + 8*rand(1001)*.001);\n' + 'rd = if(rd,rd,2 + 8*rand(1001)*.001);\n' + 're = if(re,re,2 + 8*rand(1001)*.001);\n' + 'rf = if(rf,rf,2 + 8*rand(1001)*.001);\n' + 't1 = ra*6.2832;\n' + 't2 = rb*6.2832;\n' + 't3 = rc*6.2832;\n' + 't4 = rd*6.2832;\n' + 't5 = re*6.2832;\n' + 't6 = rf*6.2832;\n' + 'rg = if(rg,rg,.1 + .8*rand(1001)*.001);\n' + 'rh = if(rh,rh,.1 + .8*rand(1001)*.001);\n' + 't7 = rg;\n' + 't8 = rh;'),
		'point_eqs_str' : ('ra = if(ra,ra,2 + 8*rand(1001)*.001);\n' + 'rb = if(rb,rb,2 + 8*rand(1001)*.001);\n' + 'rc = if(rc,rc,2 + 8*rand(1001)*.001);\n' + 'rd = if(rd,rd,2 + 8*rand(1001)*.001);\n' + 're = if(re,re,2 + 8*rand(1001)*.001);\n' + 'rf = if(rf,rf,2 + 8*rand(1001)*.001);\n' + 'rg = if(rg,rg,2 + 8*rand(1001)*.001);\n' + 'rh = if(rh,rh,2 + 8*rand(1001)*.001);\n' + 'ri = if(ri,ri,2 + 8*rand(1001)*.001);\n' + 'rj = if(rj,rj,2 + 8*rand(1001)*.001);\n' + 'rk = if(rk,rk,2 + 8*rand(1001)*.001);\n' + 'rl = if(rl,rl,2 + 8*rand(1001)*.001);\n' + 'rm = if(rm,rm,2 + 8*rand(1001)*.001);\n' + 'rn = if(rn,rn,2 + 8*rand(1001)*.001);\n' + 'ro = if(ro,ro,2 + 8*rand(1001)*.001);\n' + 'rp = if(rp,rp,2 + 8*rand(1001)*.001);\n' + 'rq = if(rq,rq,2 + 8*rand(1001)*.001);\n' + 'rr = if(rr,rr,2 + 8*rand(1001)*.001);\n' + 'it = it*above(sample,0);\n' + 'it = it + 1;\n' + 'pi = 6.2813;\n' + 'sam = sample;\n' + 'spm = .5 + .5*sin((q2 - sam)*6.24);\n' + 'a = min((1-sam)*value2*3,1);\n' + 'r = pow(1 - sam,1);\n' + 'g = pow(1 - sam,1);\n' + 'b = pow(1 - sam,1);\n' + 'sp = q6*.15 - sam*.2;\n' + 'spa = q7*.15 - sam*.2;\n' + 'spb = q8*.15 - sam*.2;\n' + 'ox = sam*(.5*sin(sp*ra*pi) + .5*sin(sp*rd*pi));\n' + 'oy = sam*(.5*sin(sp*rb*pi) + .5*sin(sp*re*pi));\n' + 'oz = sam*(.5*sin(sp*rc*pi) + .5*sin(sp*rf*pi));\n' + 'cut = .2;\n' + 'sm = sam*above(sam,cut);\n' + 'mo = rand(2);\n' + 'ox = ox + max(0,sm-cut)*if(mo,sin(spa*rg),sin(spa*rh));\n' + 'oy = oy + max(0,sm-cut)*if(mo,sin(spa*ri),sin(spa*rj));\n' + 'oz = oz + max(0,sm-cut)*if(mo,sin(spa*rk),sin(spa*rl));\n' + 'cut = .4;\n' + 'sm = sm*above(sm,cut);\n' + 'mo = rand(2);\n' + 'ox = ox + max(0,sm-cut)*if(mo,sin(spb*rm),sin(spb*rp));\n' + 'oy = oy + max(0,sm-cut)*if(mo,sin(spb*rn),sin(spb*rq));\n' + 'oz = oz + max(0,sm-cut)*if(mo,sin(spb*ro),sin(spb*rr));\n' + 'xang = q6*.1;\n' + 'yang = q7*.1;\n' + 'zang = q8*.1;\n' + 'fov = .5;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'tme = (q6+q7+q8)*2 - sam*6.24*4;\n' + 'mod = 1-sam;\n' + 'wmod = 1;\n' + 'ox = ox*(1-mod) + (sin(tme*.33)*.5 + .5*cos(tme*.542))*mod;\n' + 'oy = oy*(1-mod) + (cos(tme*.24)*.5 + .5*sin(tme*.542))*mod;\n' + 'oz = oz*(1-mod) + (sin(tme*.11)*.5 + .5*cos(tme*.542))*mod;\n' + 'ox = ox*q3;\n' + 'oy = oy*q3;\n' + 'oz = oz*q3;\n' + 'oz = oz - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.9,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 0.7,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.rr = 0;
m.t4 = 0;
m.zang = 0;
m.q2 = 0;
m.t5 = 0;
m.yang = 0;
m.mo = 0;
m.q3 = 0;
m.cut = 0;
m.t6 = 0;
m.xang = 0;
m.mod = 0;
m.t7 = 0;
m.spa = 0;
m.t8 = 0;
m.spb = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.ox = 0;
m.oy = 0;
m.it = 0;
m.mx = 0;
m.oz = 0;
m.wmod = 0;
m.tme = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.ra = 0;
m.spm = 0;
m.rb = 0;
m.rc = 0;
m.rd = 0;
m.re = 0;
m.rf = 0;
m.rg = 0;
m.rh = 0;
m.ri = 0;
m.rj = 0;
m.pi = 0;
m.rk = 0;
m.rl = 0;
m.sm = 0;
m.rm = 0;
m.rn = 0;
m.ro = 0;
m.t1 = 0;
m.sp = 0;
m.rp = 0;
m.t2 = 0;
m.rq = 0;
m.t3 = 0;
m.sam = 0;

			m.rkeys = ['rr','it','ra','rb','rc','rd','re','rf','rg','rh','ri','rj','rk','rl','rm','rn','ro','rp','rq'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ra = ifcond(m.ra, m.ra, (2+((8*rand(1001))*0.001)));
m.rb = ifcond(m.rb, m.rb, (2+((8*rand(1001))*0.001)));
m.rc = ifcond(m.rc, m.rc, (2+((8*rand(1001))*0.001)));
m.rd = ifcond(m.rd, m.rd, (2+((8*rand(1001))*0.001)));
m.re = ifcond(m.re, m.re, (2+((8*rand(1001))*0.001)));
m.rf = ifcond(m.rf, m.rf, (2+((8*rand(1001))*0.001)));
m.t1 = (m.ra*6.2832);
m.t2 = (m.rb*6.2832);
m.t3 = (m.rc*6.2832);
m.t4 = (m.rd*6.2832);
m.t5 = (m.re*6.2832);
m.t6 = (m.rf*6.2832);
m.rg = ifcond(m.rg, m.rg, (0.1+((0.8*rand(1001))*0.001)));
m.rh = ifcond(m.rh, m.rh, (0.1+((0.8*rand(1001))*0.001)));
m.t7 = m.rg;
m.t8 = m.rh;
		return m;
	},
		'point_eqs' : function(m) {
m.ra = ifcond(m.ra, m.ra, (2+((8*rand(1001))*0.001)));
m.rb = ifcond(m.rb, m.rb, (2+((8*rand(1001))*0.001)));
m.rc = ifcond(m.rc, m.rc, (2+((8*rand(1001))*0.001)));
m.rd = ifcond(m.rd, m.rd, (2+((8*rand(1001))*0.001)));
m.re = ifcond(m.re, m.re, (2+((8*rand(1001))*0.001)));
m.rf = ifcond(m.rf, m.rf, (2+((8*rand(1001))*0.001)));
m.rg = ifcond(m.rg, m.rg, (2+((8*rand(1001))*0.001)));
m.rh = ifcond(m.rh, m.rh, (2+((8*rand(1001))*0.001)));
m.ri = ifcond(m.ri, m.ri, (2+((8*rand(1001))*0.001)));
m.rj = ifcond(m.rj, m.rj, (2+((8*rand(1001))*0.001)));
m.rk = ifcond(m.rk, m.rk, (2+((8*rand(1001))*0.001)));
m.rl = ifcond(m.rl, m.rl, (2+((8*rand(1001))*0.001)));
m.rm = ifcond(m.rm, m.rm, (2+((8*rand(1001))*0.001)));
m.rn = ifcond(m.rn, m.rn, (2+((8*rand(1001))*0.001)));
m.ro = ifcond(m.ro, m.ro, (2+((8*rand(1001))*0.001)));
m.rp = ifcond(m.rp, m.rp, (2+((8*rand(1001))*0.001)));
m.rq = ifcond(m.rq, m.rq, (2+((8*rand(1001))*0.001)));
m.rr = ifcond(m.rr, m.rr, (2+((8*rand(1001))*0.001)));
m.it = (m.it*above(m.sample, 0));
m.it = (m.it+1);
m.pi = 6.2813;
m.sam = m.sample;
m.spm = (0.5+(0.5*Math.sin(((m.q2-m.sam)*6.24))));
m.a = Math.min((((1-m.sam)*m.value2)*3), 1);
m.g = 1;
m.r = pow((1-m.sam), 1);
m.b = pow((1-m.sam), 1);
m.g = pow((1-m.sam), 1);
m.sp = ((m.q6*0.15)-(m.sam*0.2));
m.spa = ((m.q7*0.15)-(m.sam*0.2));
m.spb = ((m.q8*0.15)-(m.sam*0.2));
m.ox = (m.sam*((0.5*Math.sin(((m.sp*m.ra)*m.pi)))+(0.5*Math.sin(((m.sp*m.rd)*m.pi)))));
m.oy = (m.sam*((0.5*Math.sin(((m.sp*m.rb)*m.pi)))+(0.5*Math.sin(((m.sp*m.re)*m.pi)))));
m.oz = (m.sam*((0.5*Math.sin(((m.sp*m.rc)*m.pi)))+(0.5*Math.sin(((m.sp*m.rf)*m.pi)))));
m.cut = 0.2;
m.sm = (m.sam*above(m.sam, m.cut));
m.mo = rand(2);
m.ox = (m.ox+(Math.max(0, (m.sm-m.cut))*ifcond(m.mo, Math.sin((m.spa*m.rg)), Math.sin((m.spa*m.rh)))));
m.oy = (m.oy+(Math.max(0, (m.sm-m.cut))*ifcond(m.mo, Math.sin((m.spa*m.ri)), Math.sin((m.spa*m.rj)))));
m.oz = (m.oz+(Math.max(0, (m.sm-m.cut))*ifcond(m.mo, Math.sin((m.spa*m.rk)), Math.sin((m.spa*m.rl)))));
m.cut = 0.4;
m.sm = (m.sm*above(m.sm, m.cut));
m.mo = rand(2);
m.ox = (m.ox+(Math.max(0, (m.sm-m.cut))*ifcond(m.mo, Math.sin((m.spb*m.rm)), Math.sin((m.spb*m.rp)))));
m.oy = (m.oy+(Math.max(0, (m.sm-m.cut))*ifcond(m.mo, Math.sin((m.spb*m.rn)), Math.sin((m.spb*m.rq)))));
m.oz = (m.oz+(Math.max(0, (m.sm-m.cut))*ifcond(m.mo, Math.sin((m.spb*m.ro)), Math.sin((m.spb*m.rr)))));
m.xang = (m.q6*0.1);
m.yang = (m.q7*0.1);
m.zang = (m.q8*0.1);
m.fov = 0.5;
m.mx = ((m.ox*Math.cos(m.yang))+(m.oz*Math.sin(m.yang)));
m.mz = ((-m.ox*Math.sin(m.yang))+(m.oz*Math.cos(m.yang)));
m.ox = m.mx;
m.oz = m.mz;
m.mx = ((m.ox*Math.cos(m.zang))-(m.oy*Math.sin(m.zang)));
m.my = ((m.ox*Math.sin(m.zang))+(m.oy*Math.cos(m.zang)));
m.ox = m.mx;
m.oy = m.my;
m.my = ((m.oy*Math.cos(m.xang))-(m.oz*Math.sin(m.xang)));
m.mz = ((m.oy*Math.sin(m.xang))+(m.oz*Math.cos(m.xang)));
m.oy = m.my;
m.oz = m.mz;
m.tme = ((((m.q6+m.q7)+m.q8)*2)-((m.sam*6.24)*4));
m.mod = (1-m.sam);
m.wmod = 1;
m.ox = ((m.ox*(1-m.mod))+(((Math.sin((m.tme*0.21))*0.5)+(0.5*Math.cos((m.tme*0.671))))*m.mod));
m.oy = ((m.oy*(1-m.mod))+(((Math.cos((m.tme*0.14))*0.5)+(0.5*Math.sin((m.tme*0.236))))*m.mod));
m.oz = ((m.oz*(1-m.mod))+(((Math.sin((m.tme*0.87))*0.5)+(0.5*Math.cos((m.tme*0.247))))*m.mod));
m.ox = (m.ox*m.q3);
m.oy = (m.oy*m.q3);
m.oz = (m.oz*m.q3);
m.oz = (m.oz-2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ra = if(ra,ra,2 + 8*rand(1001)*.001);\n' + 'rb = if(rb,rb,2 + 8*rand(1001)*.001);\n' + 'rc = if(rc,rc,2 + 8*rand(1001)*.001);\n' + 'rd = if(rd,rd,2 + 8*rand(1001)*.001);\n' + 're = if(re,re,2 + 8*rand(1001)*.001);\n' + 'rf = if(rf,rf,2 + 8*rand(1001)*.001);\n' + 't1 = ra*6.2832;\n' + 't2 = rb*6.2832;\n' + 't3 = rc*6.2832;\n' + 't4 = rd*6.2832;\n' + 't5 = re*6.2832;\n' + 't6 = rf*6.2832;\n' + 'rg = if(rg,rg,.1 + .8*rand(1001)*.001);\n' + 'rh = if(rh,rh,.1 + .8*rand(1001)*.001);\n' + 't7 = rg;\n' + 't8 = rh;'),
		'point_eqs_str' : ('ra = if(ra,ra,2 + 8*rand(1001)*.001);\n' + 'rb = if(rb,rb,2 + 8*rand(1001)*.001);\n' + 'rc = if(rc,rc,2 + 8*rand(1001)*.001);\n' + 'rd = if(rd,rd,2 + 8*rand(1001)*.001);\n' + 're = if(re,re,2 + 8*rand(1001)*.001);\n' + 'rf = if(rf,rf,2 + 8*rand(1001)*.001);\n' + 'rg = if(rg,rg,2 + 8*rand(1001)*.001);\n' + 'rh = if(rh,rh,2 + 8*rand(1001)*.001);\n' + 'ri = if(ri,ri,2 + 8*rand(1001)*.001);\n' + 'rj = if(rj,rj,2 + 8*rand(1001)*.001);\n' + 'rk = if(rk,rk,2 + 8*rand(1001)*.001);\n' + 'rl = if(rl,rl,2 + 8*rand(1001)*.001);\n' + 'rm = if(rm,rm,2 + 8*rand(1001)*.001);\n' + 'rn = if(rn,rn,2 + 8*rand(1001)*.001);\n' + 'ro = if(ro,ro,2 + 8*rand(1001)*.001);\n' + 'rp = if(rp,rp,2 + 8*rand(1001)*.001);\n' + 'rq = if(rq,rq,2 + 8*rand(1001)*.001);\n' + 'rr = if(rr,rr,2 + 8*rand(1001)*.001);\n' + 'it = it*above(sample,0);\n' + 'it = it + 1;\n' + 'pi = 6.2813;\n' + 'sam = sample;\n' + 'spm = .5 + .5*sin((q2 - sam)*6.24);\n' + 'a = min((1-sam)*value2*3,1);\n' + 'g = 1;\n' + 'r = pow(1 - sam,1);\n' + 'b = pow(1 - sam,1);\n' + 'g = pow(1 - sam,1);\n' + 'sp = q6*.15 - sam*.2;\n' + 'spa = q7*.15 - sam*.2;\n' + 'spb = q8*.15 - sam*.2;\n' + 'ox = sam*(.5*sin(sp*ra*pi) + .5*sin(sp*rd*pi));\n' + 'oy = sam*(.5*sin(sp*rb*pi) + .5*sin(sp*re*pi));\n' + 'oz = sam*(.5*sin(sp*rc*pi) + .5*sin(sp*rf*pi));\n' + 'cut = .2;\n' + 'sm = sam*above(sam,cut);\n' + 'mo = rand(2);\n' + 'ox = ox + max(0,sm-cut)*if(mo,sin(spa*rg),sin(spa*rh));\n' + 'oy = oy + max(0,sm-cut)*if(mo,sin(spa*ri),sin(spa*rj));\n' + 'oz = oz + max(0,sm-cut)*if(mo,sin(spa*rk),sin(spa*rl));\n' + 'cut = .4;\n' + 'sm = sm*above(sm,cut);\n' + 'mo = rand(2);\n' + 'ox = ox + max(0,sm-cut)*if(mo,sin(spb*rm),sin(spb*rp));\n' + 'oy = oy + max(0,sm-cut)*if(mo,sin(spb*rn),sin(spb*rq));\n' + 'oz = oz + max(0,sm-cut)*if(mo,sin(spb*ro),sin(spb*rr));\n' + 'xang = q6*.1;\n' + 'yang = q7*.1;\n' + 'zang = q8*.1;\n' + 'fov = .5;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'tme = (q6+q7+q8)*2 - sam*6.24*4;\n' + 'mod = 1-sam;\n' + 'wmod = 1;\n' + 'ox = ox*(1-mod) + (sin(tme*.21)*.5 + .5*cos(tme*.671))*mod;\n' + 'oy = oy*(1-mod) + (cos(tme*.14)*.5 + .5*sin(tme*.236))*mod;\n' + 'oz = oz*(1-mod) + (sin(tme*.87)*.5 + .5*cos(tme*.247))*mod;\n' + 'ox = ox*q3;\n' + 'oy = oy*q3;\n' + 'oz = oz*q3;\n' + 'oz = oz - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 54.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.mod = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.mod = 0.20333;
m.x = (0.5+(m.mod*((Math.sin((((m.sample*6.28)*1)+m.q3))*0.5)+(0.5*Math.cos((((m.sample*6.28)*3)+m.q3))))));
m.y = (0.5+(m.mod*((Math.cos((((m.sample*6.28)*2)+m.q3))*0.5)+(0.5*Math.sin((((m.sample*6.28)*1)+m.q3))))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('mod = .20333;\n' + 'x = .5 + mod*(sin(sample*6.28*1 + q3)*.5 + .5*cos(sample*6.28*3 + q3));\n' + 'y = .5 + mod*(cos(sample*6.28*2 + q3)*.5 + .5*sin(sample*6.28*1 + q3));'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 54.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.mod = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.mod = 0.20667;
m.x = (0.5+(m.mod*((Math.sin((((m.sample*6.28)*1)+m.q3))*0.5)+(0.5*Math.cos((((m.sample*6.28)*3)+m.q3))))));
m.y = (0.5+(m.mod*((Math.cos((((m.sample*6.28)*2)+m.q3))*0.5)+(0.5*Math.sin((((m.sample*6.28)*1)+m.q3))))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('mod = .20667;\n' + 'x = .5 + mod*(sin(sample*6.28*1 + q3)*.5 + .5*cos(sample*6.28*3 + q3));\n' + 'y = .5 + mod*(cos(sample*6.28*2 + q3)*.5 + .5*sin(sample*6.28*1 + q3));'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.670315,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 1.998627,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q4 = 0;
m.hvr = 0;
m.q5 = 0;
m.h = 0;
m.tmpa = 0;
m.tmpb = 0;
m.l = 0;
m.ra = 0;
m.s = 0;
m.hvb = 0;
m.ti = 0;
m.hvg = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.g = 0.7;
m.g2 = m.g;
m.a = m.q1;
m.a2 = m.a;
m.ra = (rand(1001)*0.001);
m.ti = (m.q4+0.25);
m.ra = (m.ti-Math.floor(m.ti));
m.tex_zoom = 0.45;
m.h = ifcond(above(m.ra, 0.15), (m.ra-0.15), (m.ra+0.85));
m.s = 1;
m.l = m.q5;
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
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('g = .7;\n' + 'g2 = g;\n' + 'a = q1;\n' + 'a2 = a;\n' + 'ra = rand(1001)*.001;\n' + 'ti = q4 + .25;\n' + 'ra = ti - int(ti);\n' + 'tex_zoom = .45;\n' + 'h = if(above(ra,.15),ra-.15,ra+.85);\n' + 's = 1;\n' + 'l = q5;\n' + 'tmpb = if(below(l,0.5),l*(1+s),(l+s)-(s*l));\n' + 'tmpa = 2*l - tmpb;\n' + 'hvr = h + .333333;\n' + 'hvr = if(below(hvr,0),hvr+1,if(above(hvr,1),hvr-1,hvr));\n' + 'hvg = h;\n' + 'hvg = if(below(hvg,0),hvg+1,if(above(hvg,1),hvg-1,hvg));\n' + 'hvb = h - .333333;\n' + 'hvb = if(below(hvb,0),hvb+1,if(above(hvb,1),hvb-1,hvb));\n' + 'r = if(below(6*hvr,1),tmpa+(tmpb-tmpa)*6*hvr, if(below(2*hvr,1),tmpb, if(below(hvr*3,2),tmpa+(tmpb-tmpa)*(.666666-hvr)*6,tmpa)));\n' + 'g = if(below(6*hvg,1),tmpa+(tmpb-tmpa)*6*hvg, if(below(2*hvg,1),tmpb, if(below(hvg*3,2),tmpa+(tmpb-tmpa)*(.666666-hvg)*6,tmpa)));\n' + 'b = if(below(6*hvb,1),tmpa+(tmpb-tmpa)*6*hvb, if(below(2*hvb,1),tmpb, if(below(hvb*3,2),tmpa+(tmpb-tmpa)*(.666666-hvb)*6,tmpa)));\n' + 'r2 = r;\n' + 'g2 = g;\n' + 'b2 = b;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.670315,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 1.998627,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q4 = 0;
m.hvr = 0;
m.q5 = 0;
m.h = 0;
m.tmpa = 0;
m.tmpb = 0;
m.l = 0;
m.ra = 0;
m.s = 0;
m.hvb = 0;
m.ti = 0;
m.hvg = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.g = 0.7;
m.g2 = m.g;
m.a = m.q1;
m.a2 = m.a;
m.ra = (rand(1001)*0.001);
m.ti = (m.q4+0.25);
m.ra = (m.ti-Math.floor(m.ti));
m.tex_zoom = 0.55;
m.h = ifcond(above(m.ra, 0.15), (m.ra-0.15), (m.ra+0.85));
m.s = 1;
m.l = m.q5;
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
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('g = .7;\n' + 'g2 = g;\n' + 'a = q1;\n' + 'a2 = a;\n' + 'ra = rand(1001)*.001;\n' + 'ti = q4 + .25;\n' + 'ra = ti - int(ti);\n' + 'tex_zoom = .55;\n' + 'h = if(above(ra,.15),ra-.15,ra+.85);\n' + 's = 1;\n' + 'l = q5;\n' + 'tmpb = if(below(l,0.5),l*(1+s),(l+s)-(s*l));\n' + 'tmpa = 2*l - tmpb;\n' + 'hvr = h + .333333;\n' + 'hvr = if(below(hvr,0),hvr+1,if(above(hvr,1),hvr-1,hvr));\n' + 'hvg = h;\n' + 'hvg = if(below(hvg,0),hvg+1,if(above(hvg,1),hvg-1,hvg));\n' + 'hvb = h - .333333;\n' + 'hvb = if(below(hvb,0),hvb+1,if(above(hvb,1),hvb-1,hvb));\n' + 'r = if(below(6*hvr,1),tmpa+(tmpb-tmpa)*6*hvr, if(below(2*hvr,1),tmpb, if(below(hvr*3,2),tmpa+(tmpb-tmpa)*(.666666-hvr)*6,tmpa)));\n' + 'g = if(below(6*hvg,1),tmpa+(tmpb-tmpa)*6*hvg, if(below(2*hvg,1),tmpb, if(below(hvg*3,2),tmpa+(tmpb-tmpa)*(.666666-hvg)*6,tmpa)));\n' + 'b = if(below(6*hvb,1),tmpa+(tmpb-tmpa)*6*hvb, if(below(2*hvb,1),tmpb, if(below(hvb*3,2),tmpa+(tmpb-tmpa)*(.666666-hvb)*6,tmpa)));\n' + 'r2 = r;\n' + 'g2 = g;\n' + 'b2 = b;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.670315,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 1.998627,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q4 = 0;
m.hvr = 0;
m.q5 = 0;
m.h = 0;
m.tmpa = 0;
m.tmpb = 0;
m.l = 0;
m.ra = 0;
m.s = 0;
m.hvb = 0;
m.ti = 0;
m.hvg = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.g = 0.7;
m.g2 = m.g;
m.a = (m.q1*2);
m.a2 = m.a;
m.ra = (rand(1001)*0.001);
m.ti = (m.q4+0.25);
m.ra = (m.ti-Math.floor(m.ti));
m.tex_zoom = 0.45;
m.h = ifcond(above(m.ra, 0.15), (m.ra-0.15), (m.ra+0.85));
m.s = 1;
m.l = m.q5;
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
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('g = .7;\n' + 'g2 = g;\n' + 'a = q1*2;\n' + 'a2 = a;\n' + 'ra = rand(1001)*.001;\n' + 'ti = q4 + .25;\n' + 'ra = ti - int(ti);\n' + 'tex_zoom = .45;\n' + 'h = if(above(ra,.15),ra-.15,ra+.85);\n' + 's = 1;\n' + 'l = q5;\n' + 'tmpb = if(below(l,0.5),l*(1+s),(l+s)-(s*l));\n' + 'tmpa = 2*l - tmpb;\n' + 'hvr = h + .333333;\n' + 'hvr = if(below(hvr,0),hvr+1,if(above(hvr,1),hvr-1,hvr));\n' + 'hvg = h;\n' + 'hvg = if(below(hvg,0),hvg+1,if(above(hvg,1),hvg-1,hvg));\n' + 'hvb = h - .333333;\n' + 'hvb = if(below(hvb,0),hvb+1,if(above(hvb,1),hvb-1,hvb));\n' + 'r = if(below(6*hvr,1),tmpa+(tmpb-tmpa)*6*hvr, if(below(2*hvr,1),tmpb, if(below(hvr*3,2),tmpa+(tmpb-tmpa)*(.666666-hvr)*6,tmpa)));\n' + 'g = if(below(6*hvg,1),tmpa+(tmpb-tmpa)*6*hvg, if(below(2*hvg,1),tmpb, if(below(hvg*3,2),tmpa+(tmpb-tmpa)*(.666666-hvg)*6,tmpa)));\n' + 'b = if(below(6*hvb,1),tmpa+(tmpb-tmpa)*6*hvb, if(below(2*hvb,1),tmpb, if(below(hvb*3,2),tmpa+(tmpb-tmpa)*(.666666-hvb)*6,tmpa)));\n' + 'r2 = r;\n' + 'g2 = g;\n' + 'b2 = b;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.10242,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.901615,
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
m.ang = ((rand(1001)*0.001)*6.2832);
m.tex_ang = m.ang;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = rand(1001)*.001*6.2832;\n' + 'tex_ang = ang;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'arot = 1.5708;\n' + 'decay = 1;\n' + 'q1 = .1;\n' + 'q5 = .6;\n' + 'tic = min(time-tin,.1);\n' + 'tin = time;\n' + 'vol = (bass_att + treb_att + mid_att)*.333333;\n' + 'ra = 10;\n' + 'treb_avg = tic*(treb_avg*(1/tic - ra) + ra*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - ra) + ra*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - ra) + ra*bass);\n' + 'vav = tic*(vav*(1/tic - ra) + ra*(bass+treb+mid)*.33333);\n' + 'tt = tt + tic*treb;\n' + 'mt = mt + tic*mid;\n' + 'bt = bt + tic*bass;\n' + 'vt = vt + tic*vav;\n' + 'sp = abs(vav - slide)*.1;\n' + 'slide = if(above(slide,vav),slide-tic*sp,slide+tic*sp) + (1-toc)*vav*.2;\n' + 'toc = 1;\n' + 'q6 = bt;\n' + 'q7 = mt;\n' + 'q8 = tt;\n' + 'q3 = slide;\n' + 'q2 = vt*.5;\n' + 'vrt = vrt + tic*min(1,max(0.1,2-vav));\n' + 'q4 = vrt*6;\n' + 'zoom = 1 + pow(vav,4)*.2;\n' + 'monitor = vav;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
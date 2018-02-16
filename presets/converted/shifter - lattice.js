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
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.000155,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.219713,
		ob_size : 0.5,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.009509,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.mt = 0;
m.vav = 0;
m.treb_avg = 0;
m.tic = 0;
m.ra = 0;
m.slide = 0;
m.bt = 0;
m.bass_avg = 0;
m.tin = 0;
m.mid_avg = 0;
m.sp = 0;
m.vt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = m.time;
m.ra = 10;
m.treb_avg = (m.tic*((m.treb_avg*(div(1,m.tic)-m.ra))+(m.ra*m.treb)));
m.mid_avg = (m.tic*((m.mid_avg*(div(1,m.tic)-m.ra))+(m.ra*m.mid)));
m.bass_avg = (m.tic*((m.bass_avg*(div(1,m.tic)-m.ra))+(m.ra*m.bass)));
m.vav = (m.tic*((m.vav*(div(1,m.tic)-m.ra))+((m.ra*((m.bass+m.treb)+m.mid))*0.33333)));
m.tt = (m.tt+(m.tic*m.treb_avg));
m.mt = (m.mt+(m.tic*m.mid_avg));
m.bt = (m.bt+(m.tic*m.bass_avg));
m.vt = (m.vt+(m.tic*m.vav));
m.sp = (Math.abs((m.vav-m.slide))*0.1);
m.slide = ifcond(above(m.slide, m.vav), (m.slide-(m.tic*m.sp)), (m.slide+(m.tic*m.sp)));
m.q1 = (m.vt*0.2);
m.q2 = (m.tt*0.2);
m.q3 = (m.mt*0.2);
m.q4 = (m.bt*0.2);
m.q5 = (m.slide*6);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.zang = 0;
m.q2 = 0;
m.yang = 0;
m.q3 = 0;
m.xang = 0;
m.q4 = 0;
m.q5 = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.ti = 0;
m.sp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sp = (m.sample*10);
m.ti = m.q1;
m.ox = (((0.25*Math.sin(((m.ti*0.327)+((m.sp*6.2832)*3.12))))+(0.5*Math.sin(((m.ti*0.878)+((m.sp*6.2832)*8.68)))))+(0.25*Math.sin(((m.ti*0.787)+((m.sp*6.2832)*7.85)))));
m.oy = (((0.45*Math.sin(((m.ti*0.877)+((m.sp*6.2832)*2.37))))+(0.25*Math.sin(((m.ti*0.482)+((m.sp*6.2832)*2.38)))))+(0.3*Math.sin(((m.ti*0.129)+((m.sp*6.2832)*3.21)))));
m.oz = (((0.35*Math.sin(((m.ti*0.453)+((m.sp*6.2832)*8.97))))+(0.15*Math.sin(((m.ti*0.365)+((m.sp*6.2832)*5.13)))))+(0.5*Math.sin(((m.ti*0.385)+((m.sp*6.2832)*5.46)))));
m.ox = ((m.ox*6)*m.q5);
m.oy = ((m.oy*6)*m.q5);
m.oz = ((m.oz*6)*m.q5);
m.xang = m.q2;
m.yang = m.q3;
m.zang = m.q4;
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
m.oz = (((m.oz-(Math.floor((m.oz*0.2))*5))-5)*2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sp = sample*10;\n' + 'ti = q1;\n' + 'ox = .25*sin(ti*.327 + sp*6.2832*3.12) + .5*sin(ti*.878 + sp*6.2832*8.68) + .25*sin(ti*.787 + sp*6.2832*7.85);\n' + 'oy = .45*sin(ti*.877 + sp*6.2832*2.37) + .25*sin(ti*.482 + sp*6.2832*2.38) + .3*sin(ti*.129 + sp*6.2832*3.21);\n' + 'oz = .35*sin(ti*.453 + sp*6.2832*8.97) + .15*sin(ti*.365 + sp*6.2832*5.13) + .5*sin(ti*.385 + sp*6.2832*5.46);\n' + 'ox = ox*6*q5;\n' + 'oy = oy*6*q5;\n' + 'oz = oz*6*q5;\n' + 'xang = q2;\n' + 'yang = q3;\n' + 'zang = q4;\n' + 'fov = .5;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = (oz - int(oz*.2)*5 - 5)*2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

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
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.zang = 0;
m.q2 = 0;
m.yang = 0;
m.q3 = 0;
m.xang = 0;
m.q4 = 0;
m.q5 = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.ti = 0;
m.sp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sp = (m.sample*10);
m.ti = m.q1;
m.ox = (((0.25*Math.sin(((m.ti*0.654)+((m.sp*6.2832)*3.12))))+(0.5*Math.sin(((m.ti*0.378)+((m.sp*6.2832)*8.68)))))+(0.25*Math.sin(((m.ti*0.537)+((m.sp*6.2832)*7.85)))));
m.oy = (((0.45*Math.sin(((m.ti*0.465)+((m.sp*6.2832)*2.37))))+(0.25*Math.sin(((m.ti*0.123)+((m.sp*6.2832)*2.38)))))+(0.3*Math.sin(((m.ti*0.756)+((m.sp*6.2832)*3.21)))));
m.oz = (((0.35*Math.sin(((m.ti*0.758)+((m.sp*6.2832)*8.97))))+(0.15*Math.sin(((m.ti*0.187)+((m.sp*6.2832)*5.13)))))+(0.5*Math.sin(((m.ti*0.548)+((m.sp*6.2832)*5.46)))));
m.ox = ((m.ox*6)*m.q5);
m.oy = ((m.oy*6)*m.q5);
m.oz = ((m.oz*6)*m.q5);
m.xang = m.q2;
m.yang = m.q3;
m.zang = m.q4;
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
m.oz = (((m.oz-(Math.floor((m.oz*0.2))*5))-5)*2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sp = sample*10;\n' + 'ti = q1;\n' + 'ox = .25*sin(ti*.654 + sp*6.2832*3.12) + .5*sin(ti*.378 + sp*6.2832*8.68) + .25*sin(ti*.537 + sp*6.2832*7.85);\n' + 'oy = .45*sin(ti*.465 + sp*6.2832*2.37) + .25*sin(ti*.123 + sp*6.2832*2.38) + .3*sin(ti*.756 + sp*6.2832*3.21);\n' + 'oz = .35*sin(ti*.758 + sp*6.2832*8.97) + .15*sin(ti*.187 + sp*6.2832*5.13) + .5*sin(ti*.548 + sp*6.2832*5.46);\n' + 'ox = ox*6*q5;\n' + 'oy = oy*6*q5;\n' + 'oz = oz*6*q5;\n' + 'xang = q2;\n' + 'yang = q3;\n' + 'zang = q4;\n' + 'fov = .5;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = (oz - int(oz*.2)*5 - 5)*2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

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
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.zang = 0;
m.q2 = 0;
m.t5 = 0;
m.yang = 0;
m.q3 = 0;
m.t6 = 0;
m.xang = 0;
m.q4 = 0;
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.ox = 0;
m.oy = 0;
m.it = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.ra = 0;
m.rb = 0;
m.rc = 0;
m.rd = 0;
m.vol = 0;
m.re = 0;
m.rf = 0;
m.rg = 0;
m.ti = 0;
m.rh = 0;
m.t1 = 0;
m.sp = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['it','ra','rb','rc','rd'];
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
m.ra = ifcond(m.ra, m.ra, (0.1+((0.8*rand(1001))*0.001)));
m.rb = ifcond(m.rb, m.rb, (0.1+((0.8*rand(1001))*0.001)));
m.rc = ifcond(m.rc, m.rc, (0.1+((0.8*rand(1001))*0.001)));
m.rd = ifcond(m.rd, m.rd, (0.1+((0.8*rand(1001))*0.001)));
m.vol = ((m.value1+m.value2)*0.5);
m.vol = 0;
m.it = (m.it*above(m.sample, 0));
m.it = (m.it+1);
m.sp = (m.sample*20);
m.ti = m.q1;
m.ox = ((0.5*Math.sin(((m.ti*m.t7)+(m.sp*m.t1))))+(0.5*Math.sin(((m.ti*m.rb)+(m.sp*m.t4)))));
m.oy = ((0.5*Math.sin(((m.ti*m.t8)+(m.sp*m.t2))))+(0.5*Math.sin(((m.ti*m.rc)+(m.sp*m.t5)))));
m.oz = ((0.5*Math.sin(((m.ti*m.ra)+(m.sp*m.t3))))+(0.5*Math.sin(((m.ti*m.rd)+(m.sp*m.t6)))));
m.ox = (m.ox*m.q5);
m.oy = (m.oy*m.q5);
m.oz = (m.oz*m.q5);
m.xang = m.q2;
m.yang = m.q3;
m.zang = m.q4;
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
m.oz = (((m.oz-(Math.floor((m.oz*0.2))*5))-5)*2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ra = if(ra,ra,2 + 8*rand(1001)*.001);\n' + 'rb = if(rb,rb,2 + 8*rand(1001)*.001);\n' + 'rc = if(rc,rc,2 + 8*rand(1001)*.001);\n' + 'rd = if(rd,rd,2 + 8*rand(1001)*.001);\n' + 're = if(re,re,2 + 8*rand(1001)*.001);\n' + 'rf = if(rf,rf,2 + 8*rand(1001)*.001);\n' + 't1 = ra*6.2832;\n' + 't2 = rb*6.2832;\n' + 't3 = rc*6.2832;\n' + 't4 = rd*6.2832;\n' + 't5 = re*6.2832;\n' + 't6 = rf*6.2832;\n' + 'rg = if(rg,rg,.1 + .8*rand(1001)*.001);\n' + 'rh = if(rh,rh,.1 + .8*rand(1001)*.001);\n' + 't7 = rg;\n' + 't8 = rh;'),
		'point_eqs_str' : ('ra = if(ra,ra,.1 + .8*rand(1001)*.001);\n' + 'rb = if(rb,rb,.1 + .8*rand(1001)*.001);\n' + 'rc = if(rc,rc,.1 + .8*rand(1001)*.001);\n' + 'rd = if(rd,rd,.1 + .8*rand(1001)*.001);\n' + 'vol = (value1+value2)*.5;\n' + 'vol = 0;\n' + 'it = it*above(sample,0);\n' + 'it = it + 1;\n' + 'sp = sample*20;\n' + 'ti = q1;\n' + 'ox = .5*sin(ti*t7 + sp*t1) + .5*sin(ti*rb + sp*t4);\n' + 'oy = .5*sin(ti*t8 + sp*t2) + .5*sin(ti*rc + sp*t5);\n' + 'oz = .5*sin(ti*ra + sp*t3) + .5*sin(ti*rd + sp*t6);\n' + 'ox = ox*q5;\n' + 'oy = oy*q5;\n' + 'oz = oz*q5;\n' + 'xang = q2;\n' + 'yang = q3;\n' + 'zang = q4;\n' + 'fov = .5;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = (oz - int(oz*.2)*5 - 5)*2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

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
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.zang = 0;
m.q2 = 0;
m.t5 = 0;
m.yang = 0;
m.q3 = 0;
m.t6 = 0;
m.xang = 0;
m.q4 = 0;
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.ox = 0;
m.oy = 0;
m.it = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.ra = 0;
m.rb = 0;
m.rc = 0;
m.rd = 0;
m.vol = 0;
m.re = 0;
m.rf = 0;
m.rg = 0;
m.ti = 0;
m.rh = 0;
m.t1 = 0;
m.sp = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['it','ra','rb','rc','rd'];
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
m.ra = ifcond(m.ra, m.ra, (0.1+((0.8*rand(1001))*0.001)));
m.rb = ifcond(m.rb, m.rb, (0.1+((0.8*rand(1001))*0.001)));
m.rc = ifcond(m.rc, m.rc, (0.1+((0.8*rand(1001))*0.001)));
m.rd = ifcond(m.rd, m.rd, (0.1+((0.8*rand(1001))*0.001)));
m.vol = ((m.value1+m.value2)*0.5);
m.vol = 0;
m.it = (m.it*above(m.sample, 0));
m.it = (m.it+1);
m.sp = (m.sample*20);
m.ti = m.q1;
m.ox = ((0.5*Math.sin(((m.ti*m.t7)+(m.sp*m.t1))))+(0.5*Math.sin(((m.ti*m.rb)+(m.sp*m.t4)))));
m.oy = ((0.5*Math.sin(((m.ti*m.t8)+(m.sp*m.t2))))+(0.5*Math.sin(((m.ti*m.rc)+(m.sp*m.t5)))));
m.oz = ((0.5*Math.sin(((m.ti*m.ra)+(m.sp*m.t3))))+(0.5*Math.sin(((m.ti*m.rd)+(m.sp*m.t6)))));
m.ox = (m.ox*m.q5);
m.oy = (m.oy*m.q5);
m.oz = (m.oz*m.q5);
m.xang = m.q2;
m.yang = m.q3;
m.zang = m.q4;
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
m.oz = (((m.oz-(Math.floor((m.oz*0.2))*5))-5)*2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ra = if(ra,ra,2 + 8*rand(1001)*.001);\n' + 'rb = if(rb,rb,2 + 8*rand(1001)*.001);\n' + 'rc = if(rc,rc,2 + 8*rand(1001)*.001);\n' + 'rd = if(rd,rd,2 + 8*rand(1001)*.001);\n' + 're = if(re,re,2 + 8*rand(1001)*.001);\n' + 'rf = if(rf,rf,2 + 8*rand(1001)*.001);\n' + 't1 = ra*6.2832;\n' + 't2 = rb*6.2832;\n' + 't3 = rc*6.2832;\n' + 't4 = rd*6.2832;\n' + 't5 = re*6.2832;\n' + 't6 = rf*6.2832;\n' + 'rg = if(rg,rg,.1 + .8*rand(1001)*.001);\n' + 'rh = if(rh,rh,.1 + .8*rand(1001)*.001);\n' + 't7 = rg;\n' + 't8 = rh;'),
		'point_eqs_str' : ('ra = if(ra,ra,.1 + .8*rand(1001)*.001);\n' + 'rb = if(rb,rb,.1 + .8*rand(1001)*.001);\n' + 'rc = if(rc,rc,.1 + .8*rand(1001)*.001);\n' + 'rd = if(rd,rd,.1 + .8*rand(1001)*.001);\n' + 'vol = (value1+value2)*.5;\n' + 'vol = 0;\n' + 'it = it*above(sample,0);\n' + 'it = it + 1;\n' + 'sp = sample*20;\n' + 'ti = q1;\n' + 'ox = .5*sin(ti*t7 + sp*t1) + .5*sin(ti*rb + sp*t4);\n' + 'oy = .5*sin(ti*t8 + sp*t2) + .5*sin(ti*rc + sp*t5);\n' + 'oz = .5*sin(ti*ra + sp*t3) + .5*sin(ti*rd + sp*t6);\n' + 'ox = ox*q5;\n' + 'oy = oy*q5;\n' + 'oz = oz*q5;\n' + 'xang = q2;\n' + 'yang = q3;\n' + 'zang = q4;\n' + 'fov = .5;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = (oz - int(oz*.2)*5 - 5)*2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.84,
			a : 1.0,
			enabled : 1.0,
			b : 0.89,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.94,
			textured : 1.0,
			g2 : 0.93,
			tex_zoom : 0.508316,
			additive : 0.0,
			border_a : 0.1,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 0.9,
			border_g : 1.0,
			rad : 2.00852,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.ti = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
m.te = 1;
m.poly = 5;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ti = (m.time*0.2);
m.r = (0.75+(0.25*Math.sin((m.ti*1.821))));
m.g = (0.75+(0.25*Math.sin((m.ti*1.838))));
m.b = (0.75+(0.25*Math.sin((m.ti*1.868))));
m.r2 = (0.75+(0.25*Math.sin((m.ti*1.732))));
m.g2 = (0.75+(0.25*Math.sin((m.ti*1.702))));
m.b2 = (0.75+(0.25*Math.sin((m.ti*1.765))));
m.r2 = (1.5-m.r);
m.g2 = (1.5-m.g);
m.b2 = (1.5-m.b);
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;\n' + 'te = 1;\n' + 'poly = 5;'),
		'frame_eqs_str' : ('ti = time*.2;\n' + 'r = .75 + .25*sin(ti*1.821);\n' + 'g = .75 + .25*sin(ti*1.838);\n' + 'b = .75 + .25*sin(ti*1.868);\n' + 'r2 = .75 + .25*sin(ti*1.732);\n' + 'g2 = .75 + .25*sin(ti*1.702);\n' + 'b2 = .75 + .25*sin(ti*1.765);\n' + 'r2 = 1.5 - r;\n' + 'g2 = 1.5 - g;\n' + 'b2 = 1.5 - b;'),

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
			r2 : 0.84,
			a : 1.0,
			enabled : 0.0,
			b : 0.89,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.94,
			textured : 1.0,
			g2 : 0.93,
			tex_zoom : 0.508316,
			additive : 0.0,
			border_a : 0.1,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 0.9,
			border_g : 1.0,
			rad : 2.00852,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {

m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
m.te = 1;
m.poly = 5;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;\n' + 'te = 1;\n' + 'poly = 5;'),
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
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_a = 0;\n' + 'tic = min(time-tin,.1);\n' + 'tin = time;\n' + 'ra = 10;\n' + 'treb_avg = tic*(treb_avg*(1/tic - ra) + ra*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - ra) + ra*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - ra) + ra*bass);\n' + 'vav = tic*(vav*(1/tic - ra) + ra*(bass+treb+mid)*.33333);\n' + 'tt = tt + tic*treb_avg;\n' + 'mt = mt + tic*mid_avg;\n' + 'bt = bt + tic*bass_avg;\n' + 'vt = vt + tic*vav;\n' + 'sp = abs(vav - slide)*.1;\n' + 'slide = if(above(slide,vav),slide-tic*sp,slide+tic*sp);\n' + 'q1 = vt*.2;\n' + 'q2 = tt*.2;\n' + 'q3 = mt*.2;\n' + 'q4 = bt*.2;\n' + 'q5 = slide*6;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
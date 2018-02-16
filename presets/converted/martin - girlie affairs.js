define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.980001,
		wave_g : 0.4,
		ib_g : 0.25,
		mv_x : 31.999994,
		warpscale : 2.0067,
		brighten : 0.0,
		mv_y : 24.0,
		wave_scale : 3.782626,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.9999,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 1.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.7,
		fshader : 0.0,
		wave_r : 0.45,
		ib_r : 0.25,
		mv_b : 0.6999,
		echo_zoom : 0.952379,
		ob_size : 0.01,
		b1ed : 0.0,
		wave_smoothing : 0.81,
		warpanimspeed : 1.4595,
		wave_dots : 1.0,
		mv_g : 0.2,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.2,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.32,
		wave_mystery : -1.0,
		decay : 0.5,
		wave_a : 0.005428,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 0.6,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.47,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.index2 = 0;
m.q1 = 0;
m.index3 = 0;
m.p1 = 0;
m.q2 = 0;
m.p2 = 0;
m.q3 = 0;
m.p3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.k1 = 0;
m.movez = 0;
m.is_beat = 0;
m.q30 = 0;
m.dec_med = 0;
m.q20 = 0;
m.q21 = 0;
m.q22 = 0;
m.index = 0;
m.q23 = 0;
m.avg = 0;
m.q24 = 0;
m.q26 = 0;
m.q27 = 0;
m.mox = 0;
m.beat = 0;
m.q28 = 0;
m.moy = 0;
m.t0 = 0;
m.rott = 0;
m.dec_slow = 0;
m.peak = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.6, div(30,m.fps));
m.dec_slow = pow(0.9, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.2+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),4);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),4);
m.index3 = mod((m.index3+((m.is_beat*bnot(m.index))*bnot(m.index2))),3);
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.q24 = m.is_beat;
m.q26 = (div(((m.bass_att+m.mid_att)+m.treb_att),3)+1);
m.movez = (m.movez+div(((0.1*(1+(0.3*m.q26)))*30),m.fps));
m.q30 = m.movez;
m.k1 = (m.is_beat*equal(m.index, 0));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_slow*m.p2)+((1-m.dec_slow)*m.p1));
m.p3 = ((m.dec_slow*m.p3)+((1-m.dec_slow)*m.p2));
m.rott = div((m.p3*3.1416),4);
m.q27 = (8-m.index);
m.q28 = (m.index2+1);
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.mox = (m.mox+div((0.03*30),m.fps));
m.moy = (m.moy+div((0.04*30),m.fps));
m.q5 = m.mox;
m.q6 = m.moy;
m.mv_l = (div(m.q24,2)+0.1);
m.dx = (0.0*m.q1);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = (0.002*m.q28);
m.rot = (0.01*m.q2);
m.zoom = 1.03;
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.6,
			enabled : 1.0,
			b : 0.5,
			g : 0.5,
			scaling : 0.891519,
			samples : 102.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 10.0,
			},
		'init_eqs' : function(m) {
m.k0 = 0;
m.k1 = 0;
m.k2 = 0;
m.ox = 0;
m.oy = 0;
m.ix = 0;
m.iy = 0;
m.dx = 0;
m.dy = 0;
m.q26 = 0;
m.sp = 0;
m.t2 = 0;

			m.rkeys = ['ox','oy','dx','dy'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t2 = (m.t2+m.bass_att);
		return m;
	},
		'point_eqs' : function(m) {
m.k0 = Math.floor((100.0*m.sample));
m.k2 = Math.floor(((100.0*m.sample)+1));
m.k1 = equal(mod(m.k0,2), 0);
m.k2 = equal(mod(m.k0,2), 1);
m.ix = (mod((100*m.value1),7)-3);
m.iy = (mod((100*m.value2),7)-3);
m.sp = (m.bass_att+m.treb_att);
m.sp = div(m.sp,1000);
m.dx = ((m.dx+(m.sp*m.ix))*0.99);
m.dy = ((m.dy+(m.sp*m.iy))*0.99);
m.ox = ((m.k1*m.dx)+((1-m.k1)*m.ox));
m.oy = ((m.k2*m.dy)+((1-m.k2)*m.oy));
m.x = (m.ox+0.5);
m.y = (m.oy+0.5);
m.r = 0.6;
m.g = 0.8;
m.b = 0.9;
m.a = (0.1+div(m.q26,8));
m.a = div(Math.max(m.a, 1),4);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t2 = t2 + bass_att;'),
		'point_eqs_str' : ('k0 = int(100.0*sample);\n' + 'k2 = int(100.0*sample+1);\n' + 'k1 = equal(k0%2,0);\n' + 'k2 = equal(k0%2,1);\n' + 'ix = (100*value1)%7-3;\n' + 'iy = (100*value2)%7-3;\n' + 'sp = bass_att + treb_att;\n' + 'sp = sp /1000;\n' + 'dx = (dx+sp*ix) * .99;\n' + 'dy = (dy+sp*iy) * .99 ;\n' + 'ox = k1*dx + (1-k1)*ox;\n' + 'oy = k2*dy + (1-k2)*oy;\n' + 'x = ox+.5;\n' + 'y = oy+.5;\n' + 'r = .6;\n' + 'g = .8;\n' + 'b = .9;\n' + 'a = .1 + q26/8;\n' + 'a = max(a,1) / 4;'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.891519,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.tvb = 0;
m.t4 = 0;
m.q2 = 0;
m.tvc = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.t8 = 0;
m.sz = 0;
m.tic = 0;
m.len = 0;
m.tin = 0;
m.tm = 0;
m.t1 = 0;
m.t2 = 0;
m.tva = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tm = (m.time*0.1);
m.t1 = ((m.t1*Math.sin((m.tm*m.t4)))+((1-m.t1)*Math.sin((m.tm*m.t7))));
m.t2 = ((m.t2*Math.sin((m.tm*m.t5)))+((1-m.t2)*Math.sin((m.tm*m.t8))));
m.t3 = ((m.t3*Math.sin((m.tm*m.t6)))+((1-m.t3)*Math.sin((m.tm*1))));
m.tic = Math.min((m.time-m.tin), 1);
m.tin = m.time;
m.tva = ((m.tic*m.q1)*0.5);
m.tvb = ((m.tic*m.q2)*0.5);
m.tvc = ((m.tic*m.q3)*0.5);
m.q1 = m.tva;
m.q2 = m.tvb;
m.q3 = m.tvc;
m.sz = 0.5;
m.len = m.q4;
m.t4 = m.len;
		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tm = time*.1;\n' + 't1 = t1*sin(tm*t4) + (1-t1)*sin(tm*t7);\n' + 't2 = t2*sin(tm*t5) + (1-t2)*sin(tm*t8);\n' + 't3 = t3*sin(tm*t6) + (1-t3)*sin(tm*1);\n' + 'tic = min(time - tin,1);\n' + 'tin = time;\n' + 'tva = (tic*q1*.5);\n' + 'tvb = (tic*q2*.5);\n' + 'tvc = (tic*q3*.5);\n' + 'q1 = tva;\n' + 'q2 = tvb;\n' + 'q3 = tvc;\n' + 'sz = .5;\n' + 'len = q4;\n' + 't4 = len;'),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.891519,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.tvb = 0;
m.t4 = 0;
m.q2 = 0;
m.tvc = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.t7 = 0;
m.t8 = 0;
m.sz = 0;
m.tic = 0;
m.len = 0;
m.tin = 0;
m.tm = 0;
m.t1 = 0;
m.t2 = 0;
m.tva = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tm = (m.time*0.1);
m.t1 = ((m.t1*Math.sin((m.tm*m.t4)))+((1-m.t1)*Math.sin((m.tm*m.t7))));
m.t2 = ((m.t2*Math.sin((m.tm*m.t5)))+((1-m.t2)*Math.sin((m.tm*m.t8))));
m.t3 = ((m.t3*Math.sin((m.tm*m.t6)))+((1-m.t3)*Math.sin((m.tm*1))));
m.tic = Math.min((m.time-m.tin), 1);
m.tin = m.time;
m.tva = ((m.tic*m.q1)*0.5);
m.tvb = ((m.tic*m.q2)*0.5);
m.tvc = ((m.tic*m.q3)*0.5);
m.q1 = m.tva;
m.q2 = m.tvb;
m.q3 = m.tvc;
m.sz = 0.5;
m.len = 1;
m.t4 = m.len;
		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tm = time*.1;\n' + 't1 = t1*sin(tm*t4) + (1-t1)*sin(tm*t7);\n' + 't2 = t2*sin(tm*t5) + (1-t2)*sin(tm*t8);\n' + 't3 = t3*sin(tm*t6) + (1-t3)*sin(tm*1);\n' + 'tic = min(time - tin,1);\n' + 'tin = time;\n' + 'tva = (tic*q1*.5);\n' + 'tvb = (tic*q2*.5);\n' + 'tvc = (tic*q3*.5);\n' + 'q1 = tva;\n' + 'q2 = tvb;\n' + 'q3 = tvc;\n' + 'sz = .5;\n' + 'len = 1;\n' + 't4 = len;'),
		'point_eqs_str' : (''),

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
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.zang = 0;
m.q2 = 0;
m.yang = 0;
m.amod = 0;
m.q3 = 0;
m.xang = 0;
m.mod = 0;
m.q4 = 0;
m.pib = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.med = 0;
m.fov = 0;
m.mz = 0;
m.tic = 0;
m.sa = 0;
m.ra = 0;
m.rb = 0;
m.tin = 0;
m.vr = 0;
m.sp = 0;
m.sam = 0;

			m.rkeys = ['tin'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ra = 0.8;
m.rb = 0.5;
m.pib = 6.28318530718;
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = ifcond(equal(m.sample, 0), m.time, m.tin);
m.mod = (1.5+(0.5*Math.sin((m.time*0.15))));
m.med = (1.5+(0.5*Math.sin((m.time*0.134))));
m.med = 5;
m.amod = 3;
m.vr = (rand(10001)*0.0001);
m.rb = (m.rb+((rand(10001)*0.0001)*0.1));
m.a = m.vr;
m.sa = ((m.vr*m.pib)*0.5);
m.sp = ((m.sa*m.mod)+(m.q1*1.3));
m.sam = ((m.sa*m.med)-(m.q1*0.219));
m.ox = (m.ra*Math.sin((m.sam*m.pib)));
m.oy = (m.ra*Math.cos((m.sam*m.pib)));
m.ox = (m.ox+((m.rb*-Math.cos(m.sp))*Math.sin((m.sam*m.pib))));
m.oz = (m.rb*-Math.sin(m.sp));
m.oy = (m.oy+((m.rb*-Math.cos(m.sp))*Math.cos((m.sam*m.pib))));
m.xang = (m.time*0.132);
m.xang = m.q2;
m.yang = (m.time*0.153);
m.yang = m.q3;
m.zang = (m.time*0.110);
m.zang = m.q4;
m.fov = (0.6+(0.2*Math.sin(m.time)));
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
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ra = .8;\n' + 'rb = .5;\n' + 'pib = 6.28318530718;\n' + 'tic = min(time-tin,.1);\n' + 'tin = if(equal(sample,0),time,tin);\n' + 'mod = 1.5 + .5*sin(time*.15);\n' + 'med = 1.5 + .5*sin(time*.134);\n' + 'med = 5;\n' + 'amod = 3;\n' + 'vr = rand(10001)*.0001;\n' + 'rb = rb + rand(10001)*.0001*.1;\n' + 'a = vr;\n' + 'sa = vr*pib*.5;\n' + 'sp = sa*mod + q1*1.3;\n' + 'sam = sa*med - q1*.219;\n' + 'ox = ra*sin(sam*pib);\n' + 'oy = ra*cos(sam*pib);\n' + 'ox = ox + rb*-cos(sp)*sin(sam*pib);\n' + 'oz = rb*-sin(sp);\n' + 'oy = oy + rb*-cos(sp)*cos(sam*pib);\n' + 'xang = time*.132;\n' + 'xang = q2;\n' + 'yang = time*.153;\n' + 'yang = q3;\n' + 'zang = time*.110;\n' + 'zang = q4;\n' + 'fov = 0.6 + 0.2*sin(time);\n' + 'fov = .5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = oz - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.4,
			a : 0.7,
			enabled : 1.0,
			b : 0.7,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.4928,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.2,
			b2 : 0.8,
			a2 : 0.6,
			r : 1.0,
			border_g : 1.0,
			rad : 0.0882,
			x : 0.53,
			y : 0.5,
			ang : 0.0,
			sides : 6.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.rr1 = 0;
m.seed = 0;
m.q24 = 0;
m.q28 = 0;
m.trig = 0;

			m.rkeys = ['rr1'];
			return m;
		},
		'frame_eqs' : function(m) {
m.trig = m.q24;
m.seed = sqr((m.time-Math.floor(m.time)));
m.rr1 = ((m.rr1*(1-m.trig))+(m.seed*m.trig));
m.textured = (1-m.q24);
m.x = (0.5+((0.2*m.rr1)*mod(m.q28,3)));
m.y = (m.x+0.002);
m.border_a = 1;
m.border_r = div((Math.sin(m.time)+1),2);
m.border_g = div((Math.sin(div(m.time,3))+1),2);
m.border_b = div((Math.sin(div(m.time,5))+1),2);
m.a = 0.9;
m.a2 = 0.5;
m.rad = ((0.2*m.rr1)+0.0);
m.tex_zoom = div(0.8,m.rad);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trig = q24;\n' + 'seed = sqr(time - int(time));\n' + 'rr1 = rr1 * (1-trig) + seed*trig;\n' + 'textured = 1-q24;\n' + 'x = .5 + .2*rr1*(q28%3);\n' + ' y = x + .002;\n' + 'border_a = 1;\n' + 'border_r = (sin(time)+1)/2;\n' + 'border_g = (sin(time/3)+1)/2;\n' + 'border_b = (sin(time/5)+1)/2;\n' + 'a = .9;\n' + ' a2 = .5;\n' + 'rad = 0.2* rr1+.0;\n' + 'tex_zoom = .8/rad;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.03,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.028461,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.159625,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.5,
			},
		'init_eqs' : function(m) {
m.is_beat = 0;
m.q21 = 0;
m.t0 = 0;

			m.rkeys = ['t0'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = div(rand(10),10);
m.y = div(rand(10),10);
m.r = div(rand(4),3);
m.g = div(rand(4),3);
m.b = div(rand(4),3);
m.is_beat = above(m.time, (m.t0+0.03));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.a = (Math.min(div(m.q21,2), 0.9)*m.is_beat);
m.rad = div((m.a*m.a),3);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = rand(10)/10;\n' + 'y = rand(10)/10;\n' + 'r = rand(4)/3;\n' + 'g = rand(4)/3;\n' + 'b = rand(4)/3;\n' + 'is_beat = above(time, t0+.03);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'a = min(q21/2 ,.9) * is_beat;\n' + 'rad = a*a/3 ;'),

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
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.499805,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.049138,
			x : 0.553,
			y : 0.6,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.5,
			},
		'init_eqs' : function(m) {
m.q24 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.textured = bnot(m.q24);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('textured = bnot(q24);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.7,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.628319,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 4.461715,
			additive : 0.0,
			border_a : 0.4,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.58,
			r : 1.0,
			border_g : 0.5,
			rad : 0.202682,
			x : 0.45,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 0.5,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 crisp_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = ((uv * texsize.xy) * (0.01 * _qg.w));\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = (cos(tmpvar_3.y) * sin(-(tmpvar_3.y)));\n' + '  tmpvar_4.y = (sin(tmpvar_3.x) * cos(tmpvar_3.y));\n' + '  uv_1 = (uv + ((tmpvar_4 * texsize.zw) * (18.0 * _qa.x)));\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, uv_1).xyz;\n' + '  crisp_2 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ((crisp_2 * 0.994) - 0.006);\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('uniform highp vec3 neu;\n' + 'uniform highp vec2 rs2;\n' + 'highp vec3 xlat_mutableneu;\n' + 'highp vec2 xlat_mutablers2;\n' + 'shader_body {\n' + '  xlat_mutableneu = neu;\n' + '  xlat_mutablers2 = rs2;\n' + '   vec2 uv_1;\n' + '   vec3 ret1_3;\n' + '   float ang2_4;\n' + '   vec2 uv2_5;\n' + '  uv_1 = (uv - 0.5);\n' + '  uv_1 = (uv_1 * aspect.xy);\n' + '  ret1_3 = vec3(0.0, 0.0, 0.0);\n' + '  for ( int n_2 = 0; n_2 <= 6; n_2++) {\n' + '    ang2_4 = ((6.28 * float(n_2)) / 6.0);\n' + '     float tmpvar_6;\n' + '    tmpvar_6 = cos(ang2_4);\n' + '     float tmpvar_7;\n' + '    tmpvar_7 = sin(ang2_4);\n' + '    uv2_5.x = ((uv_1.x * tmpvar_6) - (uv_1.y * tmpvar_7));\n' + '    uv2_5.y = ((uv_1.x * tmpvar_7) + (uv_1.y * tmpvar_6));\n' + '    uv2_5 = (uv2_5 * aspect.yx);\n' + '    uv2_5 = (uv2_5 + 0.5);\n' + '     vec2 tmpvar_8;\n' + '    tmpvar_8 = fract(uv2_5);\n' + '    uv2_5 = tmpvar_8;\n' + '     vec4 tmpvar_9;\n' + '    tmpvar_9 = texture2D (sampler_main, tmpvar_8);\n' + '     vec4 tmpvar_10;\n' + '    tmpvar_10 = texture2D (sampler_blur1, tmpvar_8);\n' + '    xlat_mutableneu = (tmpvar_9.xyz + ((tmpvar_10.xyz * scale1) + bias1));\n' + '    ret1_3 = max (ret1_3, xlat_mutableneu);\n' + '  };\n' + '  xlat_mutablers2 = (sin((\n' + '    (uv_1 * 18.0)\n' + '   + _qb.xy)) + (4.0 * dot (ret1_3, vec3(0.32, 0.49, 0.29))));\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11.w = 1.0;\n' + '  tmpvar_11.xyz = ((_qf.y * ret1_3) + ((24.0 * \n' + '    clamp ((0.04 / sqrt(dot (xlat_mutablers2, xlat_mutablers2))), 0.0, 1.0)\n' + '  ) * (0.2 + \n' + '    ((_qa.x * ret1_3) / 2.0)\n' + '  )));\n' + '  vec4 ret4 = tmpvar_11;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('dec_med = pow (0.6, 30/fps);\n' + 'dec_slow = pow (0.9, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .2+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %4;\n' + 'index2 = (index2 + is_beat*bnot(index))%4;\n' + 'index3 = (index3 + is_beat*bnot(index)*bnot(index2))%3;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = (bass_att + mid_att + treb_att)/3+1;\n' + 'movez = movez + .1*(1+.3*q26)*30/fps;\n' + 'q30 = movez;\n' + 'k1 =  is_beat*equal(index,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_slow * p2+ (1-dec_slow)*p1;\n' + 'p3 = dec_slow * p3+ (1-dec_slow)*p2;\n' + 'rott = p3*3.1416/4;\n' + 'q27 = 8-index;\n' + 'q28 = index2+1;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'mox = mox + .03*30/fps;\n' + 'moy = moy + .04*30/fps;\n' + 'q5 = mox;\n' + 'q6 = moy;\n' + 'mv_l = q24/2+.1;\n' + 'dx = .0*q1;'),
	'pixel_eqs_str' : ('dx = .002*q28;\n' + 'rot = .01*q2;\n' + 'zoom = 1.03;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.980001,
		wave_g : 0.99,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 2.0067,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 10.437056,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.1,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 0.4999,
		echo_zoom : 0.999998,
		ob_size : 0.0,
		b1ed : 0.0,
		wave_smoothing : 0.45,
		warpanimspeed : 1.4595,
		wave_dots : 0.0,
		mv_g : 0.4999,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.2,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.32,
		wave_mystery : 0.08,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 0.4999,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.0,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.index2 = 0;
m.q1 = 0;
m.p1 = 0;
m.q2 = 0;
m.p2 = 0;
m.q3 = 0;
m.p3 = 0;
m.q4 = 0;
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
m.pos = 0;
m.q26 = 0;
m.q27 = 0;
m.beat = 0;
m.q28 = 0;
m.t0 = 0;
m.rott = 0;
m.dec_slow = 0;
m.peak = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.9, div(30,m.fps));
m.dec_slow = pow(0.99, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.5+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),4);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),4);
m.monitor = m.index2;
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.q24 = m.is_beat;
m.q26 = ((m.bass+m.mid)+m.treb);
m.k1 = ((m.is_beat*bnot(m.index))*bnot(m.index2));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.p3 = ((m.dec_med*m.p3)+((1-m.dec_med)*m.p2));
m.rott = div((m.p3*3.1416),4);
m.pos = (m.pos+div(m.q20,140));
m.q28 = m.pos;
m.q27 = (m.index+1);
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.movez = (m.movez+div(((0.005*(1.5+m.q1))*30),m.fps));
m.q30 = m.movez;
m.zoom = 1.0;
m.rot = (-0.00*m.index);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1+div(m.q1,25));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.6,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.891519,
			samples : 182.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 0.0,
			sep : 120.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.yang = 0;
m.xang = 0;
m.t_abs = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.t_rel = 0;
m.t = 0;
m.t1 = 0;
m.t1 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t2 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t3 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t4 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t5 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t6 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t7 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t8 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = Math.sin(div(m.t,7));
		return m;
	},
		'point_eqs' : function(m) {
m.t_abs = m.sample;
m.ox = Math.sin((m.t_abs*68));
m.oy = Math.cos((m.t_abs*63));
m.oz = Math.sin((m.t_abs*125));
m.r = 0;
m.g = 1;
m.b = 1;
m.t_rel = (m.sample-div(m.time,127));
m.t_rel = (m.t_rel-Math.floor(m.t_rel));
m.a = mod(((512*m.sample)-(m.time*2)),2);
m.a = 1;
m.xang = 0;
m.yang = m.t1;
m.zang = m.t1;
m.fov = 0.15;
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
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
		'frame_eqs_str' : ('t1 = sin(t/7);'),
		'point_eqs_str' : ('t_abs = sample ;\n' + 'ox = sin (t_abs*68);\n' + 'oy = cos (t_abs*63);\n' + 'oz = sin (t_abs*125);\n' + 'r = 0;\n' + 'g = 1 ;\n' + 'b = 1 ;\n' + 't_rel = sample - time/127;\n' + 't_rel = t_rel - int(t_rel);\n' + 'a = (512*sample-time*2)%2;\n' + 'a = 1;\n' + 'xang = 0 ;\n' + 'yang = t1;\n' + 'zang = t1;\n' + 'fov = 0.15;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'x = ox*fov/oz +0.5;\n' + 'y = oy*fov/oz + 0.5;'),

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
			usedots : 1.0,
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
m.t1 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t2 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t3 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t4 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t5 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t6 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t7 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t8 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
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
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
		'frame_eqs_str' : ('tm = time*.1;\n' + 't1 = t1*sin(tm*t4) + (1-t1)*sin(tm*t7);\n' + 't2 = t2*sin(tm*t5) + (1-t2)*sin(tm*t8);\n' + 't3 = t3*sin(tm*t6) + (1-t3)*sin(tm*1);\n' + 'tic = min(time - tin,1);\n' + 'tin = time;\n' + 'tva = (tic*q1*.5);\n' + 'tvb = (tic*q2*.5);\n' + 'tvc = (tic*q3*.5);\n' + 'q1 = tva;\n' + 'q2 = tvb;\n' + 'q3 = tvc;\n' + 'sz = .5;\n' + 'len = q4;\n' + 't4 = len;'),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 0.2,
			scaling : 0.891519,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
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
m.t1 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t2 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t3 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t4 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t5 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t6 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t7 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t8 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
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
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
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
			r2 : 0.83,
			a : 1.0,
			enabled : 0.0,
			b : 0.9,
			tex_ang : 1.00531,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.93,
			tex_zoom : 1.531168,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.8,
			a2 : 1.0,
			r : 0.5,
			border_g : 1.0,
			rad : 0.048958,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.trel = 0;
m.q20 = 0;
m.q26 = 0;
m.q28 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.trel = (div(m.time,2)+m.q20);
m.x = (0.5+Math.sin((m.trel*2)));
m.y = (0.5+Math.cos(((m.trel*1.3)+div(m.q28,3))));
m.a = (div(m.q26,4)+0.2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trel = time/2+q20;\n' + 'x = .5+sin(trel*2);\n' + 'y = .5+cos(trel*1.3 +q28/3);\n' + 'a = q26/4+.2;'),

		},
		{
		'baseVals' : {
			r2 : 0.7,
			a : 0.2,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 3.455753,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.4,
			tex_zoom : 0.993053,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.5,
			border_g : 0.5,
			rad : 2.366958,
			x : 0.4,
			y : 0.5,
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
m.a2 = 0;
m.a = 0;
m.a = div(m.q24,12);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a2 =0;\n' + 'a = 0;\n' + 'a = q24/12;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.9,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.1,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.609857,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.038857,
			x : 0.503,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.5,
			},
		'init_eqs' : function(m) {
m.q21 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = div(rand(10),10);
m.y = div(rand(10),10);
m.r = div(rand(50),50);
m.g = div(rand(50),50);
m.b = div(rand(50),50);
m.r2 = 1;
m.g2 = 1;
m.b2 = 1;
m.a = Math.min(div(m.q21,2), 1);
m.a = 0.5;
m.rad = div((m.a*m.a),16);
m.a2 = 0.5;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = rand(10)/10;\n' + 'y = rand(10)/10;\n' + 'r = rand(50)/50;\n' + 'g = rand(50)/50;\n' + 'b = rand(50)/50;\n' + 'r2 = 1;\n' + 'g2 = 1;\n' + 'b2 = 1;\n' + 'a = min(q21/2 ,1);\n' + 'a = .5;\n' + 'rad = a*a/16 ;\n' + 'a2 = .5;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.9,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.622112,
			additive : 0.0,
			border_a : 0.2999,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 0.5,
			rad : 0.845919,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
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
	'warp' : ('shader_body {\n' + '   vec3 ret1_1;\n' + '   vec3 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv).xyz;\n' + '  ret1_1 = tmpvar_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ((ret1_1 * 0.99) - 0.002);\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 crisp_1;\n' + '   vec2 uv3_2;\n' + '   vec2 uv2_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = ((uv - 0.5) * aspect.xy);\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = (0.1 / (sqrt(\n' + '    dot (tmpvar_4, tmpvar_4)\n' + '  ) + 0.05));\n' + '   vec2 tmpvar_6;\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (ang / 3.14);\n' + '  tmpvar_6.x = tmpvar_7;\n' + '  tmpvar_6.y = (tmpvar_5 * 1.5);\n' + '  uv2_3.y = (tmpvar_6.y + (0.1 * time));\n' + '  uv2_3.x = (tmpvar_7 + (0.02 * time));\n' + '  uv3_2.y = (tmpvar_5 + _qh.y);\n' + '  uv3_2.x = (tmpvar_7 + (time / 32.0));\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = (texture2D (sampler_main, uv2_3).xyz + (2.0 * texture2D (sampler_main, uv3_2).xyz));\n' + '  crisp_1 = tmpvar_8;\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = fract(uv2_3);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_blur2, tmpvar_9);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = fract(uv3_2);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_blur2, tmpvar_11);\n' + '  crisp_1 = (crisp_1 + ((2.0 * \n' + '    ((tmpvar_10.xyz * scale2) + bias2)\n' + '  ) + (2.0 * \n' + '    ((tmpvar_12.xyz * scale2) + bias2)\n' + '  )));\n' + '  crisp_1 = ((3.0 * crisp_1) * rad);\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = clamp ((1.0 - (4.0 * rad)), 0.0, 1.0);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 1.0;\n' + '  tmpvar_15.xyz = ((crisp_1 + (\n' + '    ((vec3(1.0, 0.0, 1.0) * uv.y) * pow ((1.0 - rad), 8.0))\n' + '   * tmpvar_13)) + (tmpvar_13 * tmpvar_14.xyz));\n' + '  vec4 ret4 = tmpvar_15;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('dec_med = pow (0.9, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %4;\n' + 'index2 = (index2 + is_beat*bnot(index))%4;\n' + 'monitor = index2;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = bass + mid + treb;\n' + 'k1 =  is_beat*bnot(index)*bnot(index2);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'p3 = dec_med * p3+ (1-dec_med)*p2;\n' + 'rott = p3 * 3.1416/4;\n' + 'pos = pos + q20/140;\n' + 'q28 = pos;\n' + 'q27 = index+1;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'movez = movez + .005*(1.5+q1)*30/fps;\n' + 'q30 = movez;\n' + 'zoom = 1.0;\n' + 'rot = -0.00 * index;'),
	'pixel_eqs_str' : ('zoom = 1 + q1/25;'),
};

return pmap;
});
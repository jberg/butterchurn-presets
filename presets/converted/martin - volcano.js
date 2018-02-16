define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.980001,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.0067,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 2.540833,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.9999,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.4999,
		echo_zoom : 0.999998,
		ob_size : 0.0,
		b1ed : 0.7,
		wave_smoothing : 0.81,
		warpanimspeed : 1.4595,
		wave_dots : 1.0,
		mv_g : 0.4999,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.05,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 1.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.32,
		wave_mystery : 0.14,
		decay : 0.5,
		wave_a : 0.195131,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.25,
		mv_r : 0.4999,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.47,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.p1 = 0;
m.q2 = 0;
m.p2 = 0;
m.q3 = 0;
m.p3 = 0;
m.q4 = 0;
m.p4 = 0;
m.q5 = 0;
m.q6 = 0;
m.trel = 0;
m.k1 = 0;
m.q7 = 0;
m.k2 = 0;
m.q8 = 0;
m.k3 = 0;
m.q9 = 0;
m.is_beat = 0;
m.vol_ = 0;
m.dec_med = 0;
m.q20 = 0;
m.q10 = 0;
m.q21 = 0;
m.q32 = 0;
m.q11 = 0;
m.q22 = 0;
m.index = 0;
m.q12 = 0;
m.q23 = 0;
m.avg = 0;
m.vol = 0;
m.q24 = 0;
m.q26 = 0;
m.q27 = 0;
m.beat = 0;
m.t0 = 0;
m.rott = 0;
m.dec_slow = 0;
m.peak = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.vol = ((m.bass+m.mid)+m.treb);
m.vol_ = ((0.9*m.vol_)+(0.1*m.vol));
m.k1 = above(m.vol, (m.vol_*1.3));
m.k2 = ((m.k2*0.9)+(0.1*m.k1));
m.k3 = ((m.k3*0.9)+(0.1*m.k2));
m.q10 = m.k2;
m.q11 = m.k3;
m.q12 = m.vol_;
m.dec_med = pow(0.9, div(30,m.fps));
m.dec_slow = pow(0.99, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.5+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),8);
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.q24 = m.is_beat;
m.q26 = ((m.bass+m.mid)+m.treb);
m.k1 = (m.is_beat*equal(m.index, 0));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.rott = div((m.p2*3.1416),2);
m.q27 = (m.index+1);
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.trel = div(m.time,8);
m.q5 = Math.cos(m.trel);
m.q6 = Math.sin(m.trel);
m.q7 = -m.q6;
m.q8 = m.q5;
m.q9 = (Math.sin(div(m.time,13))+2);
m.q32 = pow(0.99, div(30,m.fps));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.p1 = Math.sin(div(m.time,7));
m.p2 = Math.cos(div(m.time,3));
m.p3 = (1+Math.cos(div(m.time,6)));
m.p4 = (0.5*Math.cos(div(m.time,4.5)));
m.dx = ((0.004*m.p1)*m.rad);
m.dy = ((0.004*m.p2)*m.rad);
m.zoom = (1+div((pow(m.rad, m.p4)*m.p3),50));
m.rot = 0;
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.6,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.891519,
			samples : 256.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q5 = 0;
m.k1 = 0;
m.k2 = 0;
m.f1 = 0;
m.f2 = 0;
m.y0 = 0;
m.x0 = 0;
m.t2 = 0;
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
m.t2 = (m.t2+m.bass_att);
		return m;
	},
		'point_eqs' : function(m) {
m.x0 = div(rand(100),100);
m.y0 = div(rand(100),100);
m.k1 = Math.floor((100.0*m.sample));
m.k2 = Math.floor(((100.0*m.sample)+1));
m.k1 = mod(m.k1,2);
m.f1 = (div(rand(100),200)-0.25);
m.f2 = (div(rand(100),200)-0.25);
m.x = (m.x0+(m.k1*m.f1));
m.y = (m.y0+(m.k1*m.f2));
m.a = (div(mod(m.k2,2),32)*Math.abs(m.q5));
		return m;
	},
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
		'frame_eqs_str' : ('t2 = t2 + bass_att;'),
		'point_eqs_str' : ('x0 = rand(100)/100;\n' + 'y0 = rand(100)/100;\n' + 'k1 = int(100.0*sample);\n' + 'k2 = int(100.0*sample+1);\n' + 'k1 = k1%2;\n' + 'f1 = rand(100)/200-.25;\n' + 'f2 = rand(100)/200-.25;\n' + 'x = x0 + k1* f1;\n' + 'y = y0 + k1* f2;\n' + 'a = k2%2 /32 * abs(q5);'),

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
			a : 0.56,
			enabled : 0.0,
			b : 0.9,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.93,
			tex_zoom : 0.33105,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.8,
			a2 : 0.0,
			r : 0.5,
			border_g : 1.0,
			rad : 0.44261,
			x : 0.5,
			y : 0.5,
			ang : 1.570797,
			sides : 18.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.trel = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.trel = (m.time+div(m.bass_att,5));
m.x = (0.5+(0.2*Math.sin(m.trel)));
m.y = (0.5+(0.2*Math.cos(m.trel)));
m.x = 0.5;
m.y = 0.5;
m.b = 0.4;
m.r = 0.4;
m.g = 0.8;
m.a = (Math.min(div(m.bass_att,25), 0.05)+0.05);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trel = time + bass_att/5;\n' + 'x = .5 + .2*sin(trel);\n' + 'y = .5 + .2*cos(trel);\n' + 'x = .5;\n' + ' y = .5;\n' + 'b = .4;\n' + 'r = .4 ;\n' + 'g = .8;\n' + 'a = min(bass_att/25,0.05) + .05;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.97,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.02315,
			additive : 0.0,
			border_a : 0.81,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.1,
			r : 1.0,
			border_g : 0.5,
			rad : 0.476928,
			x : 0.5,
			y : 0.5,
			ang : 1.130974,
			sides : 100.0,
			border_r : 0.5,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = m.time;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time;'),

		},
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
			tex_zoom : 0.499805,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.273185,
			x : 0.123,
			y : 0.0,
			ang : 0.0,
			sides : 63.0,
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

		},
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
			tex_zoom : 0.499805,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.548217,
			x : 0.5,
			y : 1.0,
			ang : 0.0,
			sides : 63.0,
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
	'warp' : ('shader_body {\n' + '   vec3 crisp_1;\n' + '   vec3 noise1_2;\n' + '   vec3 ret_3;\n' + '   vec2 P_4;\n' + '  P_4 = (((\n' + '    (texsize.xy * texsize_noise_lq.zw)\n' + '  .x * uv) * 4.0) + rand_frame.xy);\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = vec3(dot (texture2D (sampler_noise_lq, P_4), vec4(0.32, 0.49, 0.29, 0.0)));\n' + '  noise1_2 = tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv + vec2(0.003, 0.0));\n' + '   vec2 P_7;\n' + '  P_7 = (uv - vec2(0.003, 0.0));\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = dot ((texture2D (sampler_main, P_6) - texture2D (sampler_main, P_7)), vec4(0.32, 0.49, 0.29, 0.0));\n' + '   vec2 P_9;\n' + '  P_9 = (uv + vec2(0.0, 0.003));\n' + '   vec2 P_10;\n' + '  P_10 = (uv - vec2(0.0, 0.003));\n' + '   float tmpvar_11;\n' + '  tmpvar_11 = dot ((texture2D (sampler_main, P_9) - texture2D (sampler_main, P_10)), vec4(0.32, 0.49, 0.29, 0.0));\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12.x = tmpvar_8;\n' + '  tmpvar_12.y = tmpvar_11;\n' + '   vec2 P_13;\n' + '  P_13 = (uv + (tmpvar_12 * 0.02));\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_main, P_13).xyz;\n' + '  crisp_1 = tmpvar_14;\n' + '  crisp_1 = ((crisp_1 + (0.06 * noise1_2)) - (sqrt(\n' + '    dot (tmpvar_12, tmpvar_12)\n' + '  ) * 0.03));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur1, uv);\n' + '  ret_3 = ((-(\n' + '    ((tmpvar_15.xyz * scale1) + bias1)\n' + '  ) * 0.1) + crisp_1);\n' + '  ret_3 = (ret_3 * _qh.w);\n' + '  ret_3 = (ret_3 - 0.03);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   float lava_1;\n' + '   vec3 canv1_2;\n' + '   vec2 P_3;\n' + '  P_3 = (uv + vec2(0.002, 0.0));\n' + '   vec2 P_4;\n' + '  P_4 = (uv - vec2(0.002, 0.0));\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = dot ((texture2D (sampler_main, P_3) - texture2D (sampler_main, P_4)), vec4(0.32, 0.49, 0.29, 0.0));\n' + '   vec2 P_6;\n' + '  P_6 = (uv + vec2(0.0, 0.002));\n' + '   vec2 P_7;\n' + '  P_7 = (uv - vec2(0.0, 0.002));\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = dot ((texture2D (sampler_main, P_6) - texture2D (sampler_main, P_7)), vec4(0.32, 0.49, 0.29, 0.0));\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9.x = (0.7 * tmpvar_5);\n' + '  tmpvar_9.y = (0.7 * tmpvar_8);\n' + '   float tmpvar_10;\n' + '  tmpvar_10 = dot (texture2D (sampler_main, uv).xyz, vec3(0.32, 0.49, 0.29));\n' + '   mat2 tmpvar_11;\n' + '  tmpvar_11[0] = _qb.xy;\n' + '  tmpvar_11[1] = _qb.zw;\n' + '   vec2 P_12;\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = (uv - 0.5);\n' + '  P_12 = ((tmpvar_13 * 0.95) + 0.5);\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_main, P_12).xyz;\n' + '  canv1_2 = tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (((\n' + '    ((16.0 * tmpvar_13) * tmpvar_11)\n' + '   + \n' + '    (time / 8.0)\n' + '  ) + (20.0 * \n' + '    (tmpvar_9 - tmpvar_10)\n' + '  )) / 100.0);\n' + '   float tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_noise_hq, P_15).x;\n' + '  lava_1 = tmpvar_16;\n' + '   float tmpvar_17;\n' + '  tmpvar_17 = clamp (((\n' + '    -(_qc.x)\n' + '   * \n' + '    abs(lava_1)\n' + '  ) + 1.0), 0.0, 1.0);\n' + '  lava_1 = tmpvar_17;\n' + '   vec3 tmpvar_18;\n' + '  tmpvar_18.x = tmpvar_17;\n' + '  tmpvar_18.y = ((tmpvar_17 * (tmpvar_17 - 0.55)) * 2.0);\n' + '  tmpvar_18.z = ((tmpvar_17 - 1.0) * 16.0);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19.w = 1.0;\n' + '  tmpvar_19.xyz = (vec3((0.6 * dot (\n' + '    (canv1_2 - 0.05)\n' + '  , vec3(0.32, 0.49, 0.29)))) + clamp (tmpvar_18, 0.0, 1.0));\n' + '  vec4 ret4 = tmpvar_19;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('vol = bass + mid + treb;\n' + 'vol_ = .9*vol_+.1*vol;\n' + 'k1 = above (vol, vol_*1.3);\n' + 'k2 = k2*.9 + 0.1*k1;\n' + 'k3 = k3*.9 + 0.1*k2;\n' + 'q10 = k2;\n' + 'q11 = k3;\n' + 'q12 = vol_;\n' + 'dec_med = pow (0.9, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %8;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = bass + mid + treb;\n' + 'k1 =  is_beat*equal(index,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'rott = p2 * 3.1416/2;\n' + 'q27 = index + 1;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'trel = time/8;\n' + 'q5 = cos(trel);\n' + 'q6 = sin(trel);\n' + 'q7 = -q6;\n' + 'q8 = q5;\n' + 'q9 = sin(time/13)+2;\n' + 'q32 = pow(0.99, 30/fps);'),
	'pixel_eqs_str' : ('p1 = sin (time/7);\n' + 'p2 = cos (time/3);\n' + 'p3 = 1+(cos (time/6));\n' + 'p4 = .5*cos (time/4.5);\n' + 'dx  = 0.004*p1*rad;\n' + 'dy = 0.004*p2*rad ;\n' + 'zoom = 1 + pow(rad,p4)*p3/50;\n' + 'rot = 0;'),
};

return pmap;
});
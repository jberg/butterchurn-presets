define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 0.79,
		ib_g : 0.25,
		mv_x : 32.0,
		warpscale : 2.007,
		brighten : 0.0,
		mv_y : 24.0,
		wave_scale : 1.576,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 4.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 0.5,
		echo_zoom : 0.952,
		ob_size : 0.0,
		b1ed : 0.0,
		wave_smoothing : 0.45,
		warpanimspeed : 1.459,
		wave_dots : 0.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.8,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.1,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.32,
		wave_mystery : 0.08,
		decay : 0.5,
		wave_a : 0.392,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 0.5,
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
m.index3 = 0;
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
m.str = 0;
m.q22 = 0;
m.index = 0;
m.q23 = 0;
m.avg = 0;
m.q24 = 0;
m.q26 = 0;
m.copy = 0;
m.q27 = 0;
m.beat = 0;
m.q28 = 0;
m.q29 = 0;
m.rot1 = 0;
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
m.index3 = mod((m.index3+((m.is_beat*bnot(m.index))*bnot(m.index2))),3);
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = Math.max(m.peak, 4);
m.q23 = m.index;
m.q24 = m.is_beat;
m.q26 = Math.max(((m.bass+m.mid)+m.treb), 3);
m.movez = (m.movez+div(((0.1*(1+(0.3*m.q26)))*30),m.fps));
m.q30 = m.movez;
m.k1 = (m.is_beat*equal(m.index, 0));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.p3 = ((m.dec_med*m.p3)+((1-m.dec_med)*m.p2));
m.rott = div((m.p3*3.1416),2);
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.str = ((m.str*m.dec_slow)+((1-m.dec_slow)*m.index3));
m.q27 = (4-m.str);
m.mv_a = ((equal(m.index2, 2)*bnot(m.index))*0.5);
m.rot1 = ((m.dec_med*m.rot1)+((1-m.dec_med)*bnot(m.index2)));
m.q28 = m.rot1;
m.copy = ((m.copy*m.dec_slow)+((1-m.dec_slow)*m.index3));
m.q29 = (0.3*m.copy);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = (0.04*m.q28);
m.rot = (0.06*m.q2);
m.zoom = (0.96+(0.1*Math.sin(div(m.time,7))));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.6,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.01,
			samples : 142.0,
			additive : 1.0,
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
m.t_abs = m.sample;
m.t_rel = (m.sample-div(m.time,8));
m.ox = Math.sin((m.sample*110));
m.oy = Math.cos((m.sample*110));
m.oz = (4+div(1,(m.t_rel-Math.floor(m.t_rel))));
m.r = 0.3;
m.g = 0.7;
m.b = 1;
m.a = 0.8;
m.xang = 0;
m.yang = 0;
m.zang = 0;
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
m.x = (div((m.ox*m.fov),m.oz)+0.45);
m.y = (div((m.oy*m.fov),m.oz)+0.45);
		return m;
	},
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
		'frame_eqs_str' : ('t2 = t2 + bass_att;'),
		'point_eqs_str' : ('t_abs = sample;\n' + 't_rel = sample-time/8;\n' + 'ox =  sin (sample*110) ;\n' + 'oy =  cos (sample*110);\n' + 'oz = 4+1/(t_rel - int(t_rel));\n' + 'r = .3;\n' + 'g = 0.7;\n' + 'b = 1;\n' + 'a = .8;\n' + 'xang = 0;\n' + 'yang = 0;\n' + 'zang = 0;\n' + 'fov = .5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'x = ox*fov/oz +0.45;\n' + 'y = oy*fov/oz + 0.45;'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.89152,
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
			scaling : 0.89152,
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
			r2 : 0.8,
			a : 0.6,
			enabled : 1.0,
			b : 0.9,
			tex_ang : 0.50266,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.8,
			tex_zoom : 2.02311,
			additive : 0.0,
			border_a : 0.7,
			border_b : 0.0,
			b2 : 0.8,
			a2 : 0.6,
			r : 1.0,
			border_g : 1.0,
			rad : 0.546,
			x : 0.5,
			y : 0.5,
			ang : 2.19912,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q22 = 0;
m.q23 = 0;
m.q24 = 0;
m.q29 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = (1+Math.sin(div(m.time,9)));
m.rad = m.q29;
m.tex_zoom = (2+Math.sin(div(m.time,17)));
m.additive = div(m.q22,6);
m.textured = (1-(bnot(m.q23)*m.q24));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang =  1 + sin(time/9);\n' + 'rad = q29;\n' + 'tex_zoom = (2 + sin(time/17));\n' + 'additive = q22/6;\n' + 'textured = 1-bnot(q23)*q24;'),

		},
		{
		'baseVals' : {
			r2 : 0.7,
			a : 0.1,
			enabled : 0.0,
			b : 0.5,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.55,
			textured : 0.0,
			g2 : 0.4,
			tex_zoom : 0.9355,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.5,
			border_g : 0.5,
			rad : 0.72863,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 34.0,
			border_r : 0.5,
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
			r2 : 1.0,
			a : 0.9,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.1,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.60986,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.01,
			x : 0.503,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.5,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q21 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+div(rand(10),25));
m.y = (0.5+div(rand(10),25));
m.ang = rand(6);
m.r = div(rand(4),3);
m.g = div(rand(4),3);
m.b = div(rand(4),3);
m.r2 = m.b;
m.g2 = m.r;
m.b2 = m.g;
m.a = Math.min(div(m.q21,2), 0.9);
m.rad = div(m.a,9);
m.a = 0.5;
m.a2 = 0.8;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = .5 + rand(10)/25;\n' + 'y = .5 + rand(10)/25;\n' + 'ang = rand(6);\n' + 'r = rand(4)/3;\n' + 'g = rand(4)/3;\n' + 'b = rand(4)/3;\n' + 'r2 = b;\n' + 'g2 = r;\n' + 'b2 = g;\n' + 'a = min(q21/2 ,.9);\n' + 'rad = a/9 ;\n' + 'a = .5;\n' + 'a2 = .8;'),

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
			tex_zoom : 0.49981,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.54822,
			x : 0.5,
			y : 1.0,
			ang : 0.0,
			sides : 63.0,
			border_r : 0.5,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 crisp_2;\n' + '   vec2 zz_3;\n' + '   mat2 tmpvar_4;\n' + '  tmpvar_4[0] = _qa.xy;\n' + '  tmpvar_4[1] = _qa.zw;\n' + '  zz_3 = (((\n' + '    (uv - vec2(0.5, 0.5))\n' + '   * texsize.xy) * 0.01) * tmpvar_4);\n' + '  zz_3 = -(zz_3.yx);\n' + '  uv_1 = (uv + ((\n' + '    (clamp ((sin(zz_3.yx) / cos(zz_3.yx)), vec2(-8.0, -8.0), vec2(8.0, 8.0)) * cos((4.0 * zz_3)))\n' + '   * texsize.zw) * 16.0));\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, uv_1).xyz;\n' + '  crisp_2 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ((crisp_2 * 0.99) - 0.01);\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 crisp_1;\n' + '   vec2 uv3_2;\n' + '   vec2 uv2_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = ((uv - 0.5) * aspect.xy);\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = (0.1 / (sqrt(\n' + '    dot (tmpvar_4, tmpvar_4)\n' + '  ) + 0.1));\n' + '   vec2 tmpvar_6;\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (ang / 3.14);\n' + '  tmpvar_6.x = tmpvar_7;\n' + '  tmpvar_6.y = (_qg.z * tmpvar_5);\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = (0.1 * _qh.y);\n' + '  uv2_3.y = (tmpvar_6.y + tmpvar_8);\n' + '  uv2_3.x = (tmpvar_7 + (0.2 * time));\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9.x = tmpvar_7;\n' + '  tmpvar_9.y = (4.0 * tmpvar_5);\n' + '  uv3_2.x = tmpvar_9.x;\n' + '  uv3_2.y = (tmpvar_9.y - tmpvar_8);\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = fract(uv2_3);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = fract(uv3_2);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = ((2.0 * texture2D (sampler_main, tmpvar_10).xyz) + texture2D (sampler_main, tmpvar_11).xyz);\n' + '  crisp_1 = tmpvar_12;\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = fract(uv2_3);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur2, tmpvar_13);\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15 = fract(uv3_2);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_blur2, tmpvar_15);\n' + '  crisp_1 = ((3.0 * max (crisp_1, \n' + '    ((2.0 * ((tmpvar_14.xyz * scale2) + bias2)) + ((tmpvar_16.xyz * scale2) + bias2))\n' + '  )) * rad);\n' + '   float tmpvar_17;\n' + '  tmpvar_17 = clamp ((1.0 - (4.0 * rad)), 0.0, 1.0);\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18 = fract(uv);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur1, tmpvar_18);\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20.w = 1.0;\n' + '  tmpvar_20.xyz = ((crisp_1 + (\n' + '    ((vec3(0.0, 0.0, 1.0) * uv.y) * pow ((1.0 - rad), 8.0))\n' + '   * tmpvar_17)) + ((tmpvar_17 * 2.0) * (\n' + '    (tmpvar_19.xyz * scale1)\n' + '   + bias1)));\n' + '  vec4 ret4 = tmpvar_20;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('dec_med = pow (0.9, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %4;\n' + 'index2 = (index2 + is_beat*bnot(index))%4;\n' + 'index3 = (index3 + is_beat*bnot(index)*bnot(index2))%3;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = max(peak,4);\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = max(bass + mid + treb,3);\n' + 'movez = movez + .1*(1+.3*q26)*30/fps;\n' + 'q30 = movez;\n' + 'k1 =  is_beat*equal(index,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'p3 = dec_med * p3+ (1-dec_med)*p2;\n' + 'rott = p3*3.1416/2;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'str = str * dec_slow + (1-dec_slow) * index3;\n' + 'q27 = 4 - str;\n' + 'mv_a = equal(index2,2)*bnot(index)*.5;\n' + 'rot1 = dec_med * rot1 + (1-dec_med) * bnot(index2) ;\n' + 'q28 = rot1;\n' + 'copy = copy * dec_slow + (1-dec_slow)*index3;\n' + 'q29 = .3*copy;'),
	'pixel_eqs_str' : ('dx = 0.04*q28;\n' + 'rot = .06*q2;\n' + 'zoom = .96 + .1*sin(time/7);'),
};

return pmap;
});
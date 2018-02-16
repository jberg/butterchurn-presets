define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
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
		zoomexp : 0.108925,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.006596,
		ob_size : 0.05,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.104085,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.6,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.95,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.tic = 0;
m.vol = 0;
m.tin = 0;
m.tm = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.vol = (0.1*((m.vol*9)+(((m.bass_att+m.mid_att)+m.treb_att)*0.333333)));
m.q1 = m.vol;
m.tic = (m.time-m.tin);
m.tin = m.time;
m.tm = (m.tm+((m.tic*((m.bass_att+m.mid_att)+m.treb_att))*0.43333));
m.q2 = m.tm;
m.zoom = 1.01;
m.decay = 0.95;
m.sx = -1;
m.sy = -1;
m.decay = 0.999;
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+div(m.rad,10));
		return m;
	},
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
m.aa = 0;
m.q1 = 0;
m.ss = 0;
m.zang = 0;
m.q2 = 0;
m.yang = 0;
m.azang = 0;
m.xang = 0;
m.ayang = 0;
m.axang = 0;
m.sz = 0;
m.ox = 0;
m.oy = 0;
m.it = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.sp = 0;

			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sp = ((((m.sample*6.28)*8)*8)*4);
m.it = (m.it+1);
m.it = (m.it*above(m.sample, 0));
m.sz = m.q1;
m.ss = (m.sample*2);
m.ox = ((((m.sz*0.5)*pow(-1, m.it))*below(m.ss, 1))+(((0.5*pow(-1, m.it))*above(m.ss, 1))*m.sz));
m.oy = ((((m.ss-0.5)*m.sz)*below(m.ss, 1))+((m.sz*0.5)*above(m.ss, 1)));
m.oz = (((-m.sz*0.5)*below(m.ss, 1))+((((m.ss-1)-0.5)*m.sz)*above(m.ss, 1)));
m.xang = (m.q2*0.132);
m.axang = 0;
m.yang = (m.q2*0.153);
m.ayang = 0;
m.zang = (m.q2*2.10);
m.azang = 0;
m.fov = (0.6+(0.2*Math.sin(m.time)));
m.fov = 0.3;
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
m.aa = (0+((m.oz-1)*0.5));
m.a = 0.05;
m.oz = (m.oz-2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
m.g = (1+Math.sin(m.sp));
m.b = (0.5+(0.5*Math.sin((m.sample*1.57))));
m.r = (0.5+(0.5*Math.cos((m.sample*1.57))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sp = sample*6.28*8*8*4;\n' + 'it = it+1;\n' + 'it = it*above(sample,0);\n' + 'sz = q1;\n' + 'ss = sample*2;\n' + 'ox = sz*.5*pow(-1,it)*below(ss,1) + .5*pow(-1,it)*above(ss,1)*sz;\n' + 'oy = (ss-.5)*sz*below(ss,1) + sz*.5*above(ss,1);\n' + 'oz = -sz*.5*below(ss,1) + ((ss-1)-.5)*sz*above(ss,1);\n' + 'xang = q2*0.132;\n' + 'axang = 0;\n' + 'yang = q2*0.153;\n' + 'ayang = 0;\n' + 'zang = q2*2.10;\n' + 'azang = 0;\n' + 'fov = 0.6 + 0.2*sin(time);\n' + 'fov = .3;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'aa = 0 + (oz-1)*.5;\n' + 'a = .05;\n' + 'oz = oz - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;\n' + 'g = 1 + sin(sp);\n' + 'b = 0.5 + 0.5*sin(sample*1.57);\n' + 'r = 0.5 + 0.5*cos(sample*1.57);'),

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
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.ss = 0;
m.zang = 0;
m.q2 = 0;
m.yang = 0;
m.azang = 0;
m.xang = 0;
m.ayang = 0;
m.axang = 0;
m.sz = 0;
m.ox = 0;
m.oy = 0;
m.it = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.sp = 0;

			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sp = ((((m.sample*6.28)*8)*8)*4);
m.it = (m.it+1);
m.it = (m.it*above(m.sample, 0));
m.sz = m.q1;
m.ss = (m.sample*2);
m.oy = ((((m.sz*0.5)*pow(-1, m.it))*below(m.ss, 1))+(((0.5*pow(-1, m.it))*above(m.ss, 1))*m.sz));
m.oz = ((((m.ss-0.5)*m.sz)*below(m.ss, 1))+((m.sz*0.5)*above(m.ss, 1)));
m.ox = (((-m.sz*0.5)*below(m.ss, 1))+((((m.ss-1)-0.5)*m.sz)*above(m.ss, 1)));
m.xang = (m.q2*0.132);
m.axang = 0;
m.yang = (m.q2*0.153);
m.ayang = 0;
m.zang = (m.q2*2.10);
m.azang = 0;
m.fov = (0.6+(0.2*Math.sin(m.time)));
m.fov = 0.3;
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
m.a = (0.5+((m.oz+2)*0.5));
m.a = 0.05;
m.g = (1+Math.sin(m.sp));
m.b = (0.5+(0.5*Math.sin((m.sample*1.57))));
m.r = (0.5+(0.5*Math.cos((m.sample*1.57))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sp = sample*6.28*8*8*4;\n' + 'it = it+1;\n' + 'it = it*above(sample,0);\n' + 'sz = q1;\n' + 'ss = sample*2;\n' + 'oy = sz*.5*pow(-1,it)*below(ss,1) + .5*pow(-1,it)*above(ss,1)*sz;\n' + 'oz = (ss-.5)*sz*below(ss,1) + sz*.5*above(ss,1);\n' + 'ox = -sz*.5*below(ss,1) + ((ss-1)-.5)*sz*above(ss,1);\n' + 'xang = q2*0.132;\n' + 'axang = 0;\n' + 'yang = q2*0.153;\n' + 'ayang = 0;\n' + 'zang = q2*2.10;\n' + 'azang = 0;\n' + 'fov = 0.6 + 0.2*sin(time);\n' + 'fov = .3;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = oz - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;\n' + 'a = .5 + (oz+2)*.5;\n' + 'a = .05;\n' + 'g = 1 + sin(sp);\n' + 'b = 0.5 + 0.5*sin(sample*1.57);\n' + 'r = 0.5 + 0.5*cos(sample*1.57);'),

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
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.ss = 0;
m.zang = 0;
m.q2 = 0;
m.yang = 0;
m.azang = 0;
m.xang = 0;
m.ayang = 0;
m.axang = 0;
m.sz = 0;
m.ox = 0;
m.oy = 0;
m.it = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.sp = 0;

			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sp = ((((m.sample*6.28)*8)*8)*4);
m.it = (m.it+1);
m.it = (m.it*above(m.sample, 0));
m.sz = m.q1;
m.ss = (m.sample*2);
m.oz = ((((m.sz*0.5)*pow(-1, m.it))*below(m.ss, 1))+(((0.5*pow(-1, m.it))*above(m.ss, 1))*m.sz));
m.ox = ((((m.ss-0.5)*m.sz)*below(m.ss, 1))+((m.sz*0.5)*above(m.ss, 1)));
m.oy = (((-m.sz*0.5)*below(m.ss, 1))+((((m.ss-1)-0.5)*m.sz)*above(m.ss, 1)));
m.xang = (m.q2*0.132);
m.axang = 0;
m.yang = (m.q2*0.153);
m.ayang = 0;
m.zang = (m.q2*2.10);
m.azang = 0;
m.fov = (0.6+(0.2*Math.sin(m.time)));
m.fov = 0.3;
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
m.a = (0.5+((m.oz+2)*0.1));
m.a = 0.05;
m.g = (1+Math.sin(m.sp));
m.b = (0.5+(0.5*Math.sin((m.sample*1.57))));
m.r = (0.5+(0.5*Math.cos((m.sample*1.57))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sp = sample*6.28*8*8*4;\n' + 'it = it+1;\n' + 'it = it*above(sample,0);\n' + 'sz = q1;\n' + 'ss = sample*2;\n' + 'oz = sz*.5*pow(-1,it)*below(ss,1) + .5*pow(-1,it)*above(ss,1)*sz;\n' + 'ox = (ss-.5)*sz*below(ss,1) + sz*.5*above(ss,1);\n' + 'oy = -sz*.5*below(ss,1) + ((ss-1)-.5)*sz*above(ss,1);\n' + 'xang = q2*0.132;\n' + 'axang = 0;\n' + 'yang = q2*0.153;\n' + 'ayang = 0;\n' + 'zang = q2*2.10;\n' + 'azang = 0;\n' + 'fov = 0.6 + 0.2*sin(time);\n' + 'fov = .3;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = oz - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;\n' + 'a = .5 + (oz+2)*.1;\n' + 'a = .05;\n' + 'g = 1 + sin(sp);\n' + 'b = 0.5 + 0.5*sin(sample*1.57);\n' + 'r = 0.5 + 0.5*cos(sample*1.57);'),

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
			spectrum : 0.0,
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
	'frame_eqs_str' : ('wave_a = 0;\n' + 'vol = .1*(vol*9 + (bass_att+mid_att+treb_att)*.333333);\n' + 'q1 = vol;\n' + 'tic = time-tin;\n' + 'tin = time;\n' + 'tm = tm + tic*(bass_att+mid_att+treb_att)*.43333;\n' + 'q2 = tm;\n' + 'zoom=1.01;\n' + 'decay=0.95;\n' + 'sx=-1;\n' + 'sy=-1;\n' + 'decay=.999;'),
	'pixel_eqs_str' : ('zoom=zoom+(rad/10);'),
};

return pmap;
});
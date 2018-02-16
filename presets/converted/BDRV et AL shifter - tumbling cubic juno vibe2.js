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
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.108925,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.006596,
		ob_size : 0.5,
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
		nwrapmode_x : 1.0,
		cx : 0.5,
		dy : 0.0,
		nwrapmode_y : 1.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		nechowrap_x : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		nechowrap_y : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.995,
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
m.tg3 = 0;
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q8 = 0;
m.dx_r = 0;
m.dy_r = 0;
m.tic = 0;
m.vol = 0;
m.tin = 0;
m.tm = 0;
m.thresh = 0;
m.tg1 = 0;
m.tg2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.vol = (0.1*((m.vol*9)+(((m.bass_att+m.mid_att)+m.treb_att)*0.333333)));
m.q1 = (m.vol*0.7);
m.q1 = Math.min(m.q1, 2);
m.tic = (m.time-m.tin);
m.tin = m.time;
m.tm = (m.tm+((m.tic*((m.bass_att+m.mid_att)+m.treb_att))*0.333333));
m.q2 = m.tm;
		m.rkeys = ['tg3','sx','sy','dx_r','dy_r','zoom','dx','dy','rot','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.zoom = (m.zoom+((0.2*Math.abs((0.3*Math.cos((4*m.rad)))))*Math.cos((12*m.ang))));
m.sx = (m.sx-((11*m.dx_r)*Math.sin((((2*Math.sin((6*m.rad)))*2)*Math.cos((6*m.rad))))));
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.999)+1.31)));
m.tg1 = Math.abs(Math.sin(m.time));
m.tg2 = (((((12*above(m.tg1, 0.8))+(4*below(m.tg1, 0.2)))+((6*above(m.tg1, 0.2))*below(m.tg1, 0.4)))+((8*above(m.tg1, 0.4))*below(m.tg1, 0.6)))+((10*above(m.tg1, 0.6))*below(m.tg1, 0.8)));
m.tg3 = ifcond(equal(m.thresh, 2), m.tg2, m.tg3);
m.zoom = ((m.zoom+0.6)-(1.5*Math.abs(((((25*m.dx_r)*Math.cos((m.tg3*m.ang)))-(Math.sin(((22*m.dy_r)*m.rad))*0.2))-m.rad))));
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.zoom = (m.zoom+0.01);
m.zoom = (m.zoom+((0.05+(0.04*Math.sin(m.time)))*(0.2*Math.sin((m.ang*m.time)))));
m.rot = (m.rot+(0.01*(0.5*Math.cos((((m.ang*5)*m.bass)*m.time)))));
m.dx = (m.dx+((0.1*above(m.rad, 0.25))*m.dx_r));
m.dy = (m.dy+((0.1*above(m.rad, 0.25))*m.dy_r));
m.rot = ((0.1*pow(-m.ang, 3))-(1.18*Math.sin(m.ang)));
m.zoom = (((1.45*Math.sin(-m.rad))+1.3)+Math.sin(m.rad));
m.dx = (m.dx+(0.09*Math.sin((m.q8*0.785))));
m.dy = (m.dy+(0.09*Math.sin((m.q8*0.675))));
m.zoom = (1+(0.01*Math.sin((13.28*m.rad))));
m.zoom = (m.zoom+(((equal(m.q2, 1)*m.q3)*0.1)*(m.x-0.5)));
m.zoom = (m.zoom+(((equal(m.q2, 2)*m.q3)*0.1)*(0.5-m.x)));
m.zoom = (m.zoom+(((equal(m.q2, 5)*m.q3)*0.1)*(0.5-m.y)));
m.zoom = (m.zoom+(((equal(m.q2, 4)*m.q3)*0.1)*(m.y-0.5)));
m.rot = (m.rot+((equal(m.q2, 3)*m.q3)*0.3));
m.rot = (m.rot-((equal(m.q2, 6)*m.q3)*0.3));
m.sx = (m.sx+((equal(m.q2, 7)*m.q3)*0.2));
m.sy = (m.sy-((equal(m.q2, 8)*m.q3)*0.2));
m.sx = (m.sx-((equal(m.q2, 9)*m.q3)*0.2));
m.sy = (m.sy+((equal(m.q2, 10)*m.q3)*0.2));
m.dy = (m.dy+((((equal(m.q2, 11)*Math.abs((0.5-m.x)))*sign((0.5-m.x)))*m.q3)*0.2));
m.dx = (m.dx+((((equal(m.q2, 12)*Math.abs((0.5-m.y)))*sign((0.5-m.y)))*m.q3)*0.2));
m.dx = (m.dx-((((equal(m.q2, 14)*Math.abs((0.5-m.y)))*sign((0.5-m.y)))*m.q3)*0.2));
m.dy = (m.dy-((((equal(m.q2, 13)*Math.abs((0.5-m.x)))*sign((0.5-m.x)))*m.q3)*0.2));
m.zoom = (m.zoom+0.5);
m.zoom = ifcond(below(m.rad, 0.2), (0.31+div(Math.sin((m.rad-m.time)),5)), ifcond(above(m.rad, 0.4), (1.6+div(Math.sin((1-m.rad)),10)), (0.95+div(Math.sin(m.rad),10))));
m.zoom = (m.zoom*1.28);
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
			bdrawback : 0.0,
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
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			bdrawback : 0.0,
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
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			bdrawback : 0.0,
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
			bdrawback : 0.0,
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.1,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 1.8,
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.1,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 1.8,
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.1,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 1.8,
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
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.1,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
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
	'frame_eqs_str' : ('wave_a = 0;\n' + 'vol = .1*(vol*9 + (bass_att+mid_att+treb_att)*.333333);\n' + 'q1 = vol*.7;\n' + 'q1 = min(q1,2);\n' + 'tic = time-tin;\n' + 'tin = time;\n' + 'tm = tm + tic*(bass_att+mid_att+treb_att)*.333333;\n' + 'q2 = tm;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'zoom = zoom + 0.2*abs(0.3*cos(4*rad))*cos(12*ang);\n' + 'sx = sx - 11*dx_r*sin(2*sin(6*rad)*2*cos(6*rad));\n' + 'thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.999+1.31);\n' + 'tg1 = abs(sin(time));\n' + 'tg2 = 12*above(tg1,0.8) + 4*below(tg1,0.2) +6*above(tg1,0.2)*below(tg1,0.4) + 8*above(tg1,0.4)*below(tg1,0.6) +10*above(tg1,0.6)*below(tg1,0.8);\n' + 'tg3 = if(equal(thresh,2),tg2,tg3);\n' + 'zoom = zoom + 0.6-(1.5*abs( 25*dx_r*cos(tg3*ang) - sin(22*dy_r*rad)*0.2-rad));\n' + 'thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'zoom = zoom + 0.01;\n' + 'zoom = zoom + (0.05 + 0.04*sin(time))*(0.2*sin(ang*time));\n' + 'rot = rot + 0.01*(0.5*cos(ang*5*bass*time));\n' + 'dx = dx + 0.1*above(rad,0.25)*dx_r;\n' + 'dy = dy + 0.1*above(rad,0.25)*dy_r;\n' + 'rot=0.1*pow(-ang,3)-1.18*sin(ang);\n' + 'zoom=1.45*sin(-rad)+1.3+ sin(rad);\n' + 'dx = dx + 0.09*sin(q8*0.785);\n' + 'dy = dy + 0.09*sin(q8*0.675);\n' + 'zoom =1+.01*sin(13.28*rad);\n' + 'zoom=zoom+equal(q2,1)*q3*.1*(x-.5);\n' + 'zoom=zoom+equal(q2,2)*q3*.1*(.5-x);\n' + 'zoom=zoom+equal(q2,5)*q3*.1*(.5-y);\n' + 'zoom=zoom+equal(q2,4)*q3*.1*(y-.5);\n' + 'rot=rot+equal(q2,3)*q3*.3;\n' + 'rot=rot-equal(q2,6)*q3*.3;\n' + 'sx=sx+equal(q2,7)*q3*.2;\n' + 'sy=sy-equal(q2,8)*q3*.2;\n' + 'sx=sx-equal(q2,9)*q3*.2;\n' + 'sy=sy+equal(q2,10)*q3*.2;\n' + 'dy=dy+equal(q2,11)*abs(.5-x)*sign(.5-x)*q3*.2;\n' + 'dx=dx+equal(q2,12)*abs(.5-y)*sign(.5-y)*q3*.2;\n' + 'dx=dx-equal(q2,14)*abs(.5-y)*sign(.5-y)*q3*.2;\n' + 'dy=dy-equal(q2,13)*abs(.5-x)*sign(.5-x)*q3*.2;\n' + 'zoom=zoom+0.5;\n' + 'zoom = if(below(rad,0.2),0.31+sin(rad-time)/5,if(above(rad,0.4),1.6+ sin(1-rad)/10,0.95 +sin(rad)/10));\n' + 'zoom=zoom*1.28;'),
};

return pmap;
});
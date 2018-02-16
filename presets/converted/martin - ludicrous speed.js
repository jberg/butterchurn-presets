define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.980001,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.0067,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.22891,
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
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 0.4999,
		echo_zoom : 0.999998,
		ob_size : 0.01,
		b1ed : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.4595,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.2,
		decay : 0.5,
		wave_a : 0.3116,
		ob_g : 1.0,
		ib_a : 0.5,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
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
m.stop = 0;
m.index4 = 0;
m.p2 = 0;
m.q3 = 0;
m.q4 = 0;
m.k1 = 0;
m.accel = 0;
m.movez = 0;
m.is_beat = 0;
m.q30 = 0;
m.dec_med = 0;
m.q20 = 0;
m.stop2 = 0;
m.q21 = 0;
m.q32 = 0;
m.q22 = 0;
m.index = 0;
m.q23 = 0;
m.avg = 0;
m.q24 = 0;
m.q26 = 0;
m.q27 = 0;
m.beat = 0;
m.q28 = 0;
m.q29 = 0;
m.t0 = 0;
m.rott = 0;
m.dec_slow = 0;
m.peak = 0;
m.index4 = rand(12);
m.p1 = 0;
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
m.index = mod((m.index+m.is_beat),8);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),4);
m.index3 = mod((m.index3+((m.is_beat*bnot(m.index))*bnot(m.index2))),3);
m.index4 = mod((m.index4+(((m.is_beat*bnot(m.index))*bnot(m.index2))*bnot(m.index3))),8);
m.monitor = m.index4;
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.q24 = m.is_beat;
m.q26 = ((m.bass+m.mid)+m.treb);
m.k1 = (m.is_beat*equal(m.index, 0));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.rott = div((m.p2*3.14159265359),2);
m.q27 = (8-m.index);
m.q28 = m.index3;
m.q29 = m.index4;
m.stop = equal(m.index, 4);
m.stop2 = ((0.9*m.stop2)+(0.1*m.stop));
m.accel = (m.stop-m.stop2);
m.movez = (m.movez+div(((0.01*4)*30),m.fps));
m.q30 = m.movez;
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.zoom = 1.0;
m.q32 = pow(0.996, div(30,m.fps));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.6,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.891519,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.vol_m = 0;
m.yang = 0;
m.xang = 0;
m.t_abs = 0;
m.ampl = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.t_rel = 0;
m.exc = 0;
m.vol = 0;
m.q26 = 0;
m.winkel = 0;
m.pulse = 0;
m.monitor = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (1*Math.cos(div(m.time,3)));
m.t2 = (1*Math.sin(div(m.time,7)));
m.vol = (m.mid_att+m.treb_att);
m.vol_m = ((m.vol_m*0.999)+(m.vol*0.001));
m.exc = above(m.vol, (m.vol_m*1.1));
m.pulse = ((0.95*m.pulse)+(0.05*m.exc));
m.winkel = (m.winkel+div(m.pulse,3));
m.t3 = m.winkel;
		return m;
	},
		'point_eqs' : function(m) {
m.t_abs = m.sample;
m.t_rel = (m.sample-div(m.time,6));
m.ampl = (Math.sin((m.t_abs*3))-0.0);
m.ox = ((3*Math.sin(m.time))+(m.ampl*Math.sin((m.t_rel*267))));
m.oy = ((3*Math.cos(m.time))+(m.ampl*Math.cos((m.t_rel*277))));
m.oz = ((0*Math.cos(div((m.t_rel*m.time),23)))+(m.t_abs*4));
m.r = sqr(Math.sin((m.t_rel*3.4)));
m.g = sqr(Math.sin((m.t_rel*2.3)));
m.b = sqr(Math.cos((m.t_rel*0.9)));
m.a = ((0.2*Math.cos((m.t_abs*1)))+div(m.q26,16));
m.xang = (m.t2+div(m.t3,3));
m.yang = ((m.t1*m.t2)-div(m.t3,4));
m.zang = m.t3;
m.fov = 0.2;
m.monitor = m.t2;
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
m.oz = (m.oz-6);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = 1*cos(time/3);\n' + 't2 = 1*sin(time/7);\n' + 'vol = mid_att + treb_att;\n' + 'vol_m = vol_m*0.999+vol*0.001;\n' + 'exc = above (vol, vol_m*1.1);\n' + 'pulse = 0.95*pulse + 0.05*exc;\n' + 'winkel = winkel + pulse/3;\n' + 't3 = winkel;'),
		'point_eqs_str' : ('t_abs = sample;\n' + 't_rel = sample-time/6;\n' + 'ampl = sin(t_abs*3)-0.0;\n' + 'ox = 3*sin (time) + ampl*(sin (t_rel*267)) ;\n' + 'oy = 3*cos (time) + ampl*(cos (t_rel*277)) ;\n' + 'oz = 0*cos (t_rel*time/23)+t_abs*4 ;\n' + 'r = sqr(sin(t_rel*3.4));\n' + 'g = sqr(sin(t_rel*2.3));\n' + 'b = sqr (cos(t_rel*.9));\n' + 'a= 0.2*(cos(t_abs*1 )) + q26/16 ;\n' + 'xang = t2+t3/3;\n' + 'yang = t1*t2-t3/4;\n' + 'zang = t3;\n' + 'fov = 0.2;\n' + 'monitor = t2;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz =  mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = oz - 6;\n' + 'x = ox*fov/oz +0.5;\n' + 'y = oy*fov/oz + 0.5;'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.891519,
			samples : 232.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.yang = 0;
m.xang = 0;
m.t_abs = 0;
m.ampl = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.t_rel = 0;
m.monitor = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (2*Math.sin(div(m.time,15)));
m.t2 = (2*Math.sin(div(m.time,11)));
m.monitor = m.time;
		return m;
	},
		'point_eqs' : function(m) {
m.t_abs = m.sample;
m.t_rel = (m.sample-div(m.time,5));
m.ampl = m.time;
m.ox = ((m.ampl*10)*Math.sin((m.t_abs*68)));
m.oy = ((m.ampl*10)*Math.cos((m.t_abs*28)));
m.oz = ((m.ampl*10)*Math.cos((m.t_abs*128)));
m.r = (Math.sin((m.t_abs*1335))+1);
m.g = (Math.sin((m.t_abs*1783))+1);
m.b = div(rand(5),5);
m.a = (0.5+(0.25*Math.sin((m.t_rel*15))));
m.xang = m.t1;
m.yang = m.t1;
m.zang = m.t1;
m.fov = 0.12;
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
m.oz = (m.oz-6);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = 2*sin(time/15);\n' + 't2 = 2*sin(time/11);\n' + 'monitor = time;'),
		'point_eqs_str' : ('t_abs = sample;\n' + 't_rel = sample-time/5;\n' + 'ampl = time;\n' + 'ox = ampl*10*sin (t_abs*68);\n' + 'oy = ampl*10*cos (t_abs*28);\n' + 'oz = ampl*10*cos (t_abs*128);\n' + 'r = sin(t_abs*1335)+1;\n' + 'g = sin(t_abs*1783)+1 ;\n' + 'b = rand(5)/5 ;\n' + 'a=0.5+0.25 * sin(t_rel*15);\n' + 'xang = t1 ;\n' + 'yang = t1;\n' + 'zang = t1;\n' + 'fov = 0.12;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = oz - 6;\n' + 'x = ox*fov/oz +0.5;\n' + 'y = oy*fov/oz + 0.5;'),

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
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.aml = 0;
m.ampl = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ampl = (m.time-Math.floor(m.time));
m.aml = div(m.ampl,2);
m.x = (0.5+(m.ampl*Math.sin((m.sample*230))));
m.y = (0.5+(m.ampl*Math.cos((m.sample*230))));
m.a = 0.03;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ampl = time - int(time);\n' + 'aml = ampl/2;\n' + 'x = .5 + ampl * sin(sample*230);\n' + 'y = .5 + ampl * cos(sample*230);\n' + 'a = .03;'),

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
			r2 : 0.84,
			a : 0.9,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.93,
			tex_zoom : 4.574821,
			additive : 0.0,
			border_a : 0.4,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.143922,
			x : 0.4999,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.8,
			},
		'init_eqs' : function(m) {
m.q24 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.textured = bnot(m.q24);
m.rad = (0.2*Math.max((Math.sin(div(m.time,9))-0.6), 0));
m.x = (0.5+(0.01*Math.sin(div(m.time,2))));
m.border_r = (0.4*(1.5+Math.sin(div(m.time,18))));
m.border_g = (0.4*(1.5+Math.sin(div(m.time,38))));
m.border_b = (0.4*(1.5+Math.sin(div(m.time,28))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('textured = bnot(q24);\n' + 'rad = .2*max(sin(time/9)-.6,0);\n' + 'x = .5 + .01 * sin(time/2);\n' + 'border_r = .4 * (1.5+sin(time/18));\n' + 'border_g = .4 * (1.5+sin(time/38));\n' + 'border_b = .4 * (1.5+sin(time/28));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.499805,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.6,
			r : 1.0,
			border_g : 0.5,
			rad : 1.998625,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 63.0,
			border_r : 0.5,
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
m.x = (0.5+Math.sin(m.trel));
m.y = (0.5+Math.cos(((m.trel*1.3)+div(m.q28,3))));
m.rad = 0.03;
m.a = (div(m.q26,4)+0.2);
m.a2 = 0;
m.a = 1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trel = time/2+q20;\n' + 'x = .5+sin(trel);\n' + 'y = .5+cos(trel*1.3 +q28/3);\n' + 'rad = .03;\n' + 'a = q26/4+.2;\n' + '  a2 = 0;\n' + 'a = 1;'),

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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '  uv_1 = uv;\n' + '   vec3 crisp_2;\n' + '   vec2 zz_3;\n' + '   vec3 noiseVal_4;\n' + '   vec2 arg_5;\n' + '   int tmpvar_6;\n' + '  tmpvar_6 = int(_qh.x);\n' + '   int tmpvar_7;\n' + '  tmpvar_7 = int((float(mod (float(tmpvar_6), 4.0))));\n' + '   vec2 P_8;\n' + '  P_8 = ((uv * 0.3) + (0.01 * rand_frame).xy);\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = (0.03 * texture2D (sampler_noise_lq, P_8)).xyz;\n' + '  noiseVal_4 = tmpvar_9;\n' + '  zz_3 = (((\n' + '    ((uv - 0.5) * texsize.xy)\n' + '   * 0.015) * _qg.z) * aspect.zw);\n' + '   mat2 tmpvar_10;\n' + '  tmpvar_10[0] = _qa.xy;\n' + '  tmpvar_10[1] = _qa.zw;\n' + '  zz_3 = (zz_3 * tmpvar_10);\n' + '  if ((tmpvar_7 == 0)) {\n' + '    arg_5 = clamp ((sin(zz_3) / cos(zz_3)), vec2(-8.0, -8.0), vec2(8.0, 8.0));\n' + '  } else {\n' + '    if ((tmpvar_7 == 1)) {\n' + '      arg_5 = clamp (((\n' + '        sin(zz_3)\n' + '       / \n' + '        cos(zz_3)\n' + '      ) / cos(zz_3.yx)), vec2(-8.0, -8.0), vec2(8.0, 8.0));\n' + '    } else {\n' + '      if ((tmpvar_7 == 2)) {\n' + '        arg_5 = clamp (exp(zz_3.yx), vec2(-8.0, -8.0), vec2(8.0, 8.0));\n' + '      } else {\n' + '        if ((tmpvar_7 == 3)) {\n' + '          arg_5 = clamp (sin((2.0 * zz_3.yx)), vec2(-8.0, -8.0), vec2(8.0, 8.0));\n' + '        };\n' + '      };\n' + '    };\n' + '  };\n' + '  if ((tmpvar_6 >= 4)) {\n' + '    arg_5 = (arg_5 - (sqrt(\n' + '      dot (zz_3, zz_3)\n' + '    ) / 4.0));\n' + '  };\n' + '  uv_1 = (uv + ((arg_5 * texsize.zw) * (1.0 + \n' + '    (4.0 * _qg.w)\n' + '  )));\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_main, uv_1).xyz;\n' + '  crisp_2 = tmpvar_11;\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12.w = 1.0;\n' + '  tmpvar_12.xyz = (((_qh.w * crisp_2) + (noiseVal_4 * 0.8)) - 0.03);\n' + '  vec4 ret4 = tmpvar_12;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec3 xlat_mutableblur;\n' + 'highp vec3 xlat_mutableneu;\n' + 'highp vec3 xlat_mutableret1;\n' + 'shader_body {\n' + '   vec2 uv_1;\n' + '   float inten_2;\n' + '   float dist_3;\n' + '   vec2 uv2_4;\n' + '  uv_1 = (uv - 0.5);\n' + '  uv_1 = (uv_1 * aspect.xy);\n' + '   mat2 tmpvar_5;\n' + '  tmpvar_5[0] = _qa.xy;\n' + '  tmpvar_5[1] = _qa.zw;\n' + '  uv_1 = (uv_1 * tmpvar_5);\n' + '  uv2_4.x = ((uv_1.x * 0.0007962743) - (uv_1.y * 0.9999997));\n' + '  uv2_4.y = ((uv_1.x * 0.9999997) + (uv_1.y * 0.0007962743));\n' + '  uv2_4 = (uv2_4 * aspect.yx);\n' + '  dist_3 = (1.0 - fract((0.25 + _qh.y)));\n' + '  inten_2 = ((pow (dist_3, 0.3) * (1.0 - dist_3)) * 2.0);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (((2.0 * uv2_4) * dist_3) + 0.5);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_main, tmpvar_6);\n' + '  xlat_mutableneu = tmpvar_7.xyz;\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_blur2, tmpvar_6);\n' + '  xlat_mutableblur = ((tmpvar_8.xyz * scale2) + bias2);\n' + '  xlat_mutableneu = (xlat_mutableneu + xlat_mutableblur);\n' + '  xlat_mutableret1 = (xlat_mutableneu * inten_2);\n' + '  uv2_4.x = ((uv_1.x * -0.9999987) - (uv_1.y * 0.001592548));\n' + '  uv2_4.y = ((uv_1.x * 0.001592548) + (uv_1.y * -0.9999987));\n' + '  uv2_4 = (uv2_4 * aspect.yx);\n' + '  dist_3 = (1.0 - fract((0.5 + _qh.y)));\n' + '  inten_2 = ((pow (dist_3, 0.3) * (1.0 - dist_3)) * 2.0);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = (((2.0 * uv2_4) * dist_3) + 0.5);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_main, tmpvar_9);\n' + '  xlat_mutableneu = tmpvar_10.xyz;\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_blur2, tmpvar_9);\n' + '  xlat_mutableblur = ((tmpvar_11.xyz * scale2) + bias2);\n' + '  xlat_mutableneu = (xlat_mutableneu + xlat_mutableblur);\n' + '  xlat_mutableret1 = ((xlat_mutableret1 * 0.9) + (xlat_mutableneu * inten_2));\n' + '  uv2_4.x = ((uv_1.x * -0.00238894) - (uv_1.y * -0.9999971));\n' + '  uv2_4.y = ((uv_1.x * -0.9999971) + (uv_1.y * -0.00238894));\n' + '  uv2_4 = (uv2_4 * aspect.yx);\n' + '  dist_3 = (1.0 - fract((0.75 + _qh.y)));\n' + '  inten_2 = ((pow (dist_3, 0.3) * (1.0 - dist_3)) * 2.0);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = (((2.0 * uv2_4) * dist_3) + 0.5);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_main, tmpvar_12);\n' + '  xlat_mutableneu = tmpvar_13.xyz;\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur2, tmpvar_12);\n' + '  xlat_mutableblur = ((tmpvar_14.xyz * scale2) + bias2);\n' + '  xlat_mutableneu = (xlat_mutableneu + xlat_mutableblur);\n' + '  xlat_mutableret1 = ((xlat_mutableret1 * 0.9) + (xlat_mutableneu * inten_2));\n' + '  uv2_4.x = ((uv_1.x * 0.9999949) - (uv_1.y * -0.003185092));\n' + '  uv2_4.y = ((uv_1.x * -0.003185092) + (uv_1.y * 0.9999949));\n' + '  uv2_4 = (uv2_4 * aspect.yx);\n' + '  dist_3 = (1.0 - fract((1.0 + _qh.y)));\n' + '  inten_2 = ((pow (dist_3, 0.3) * (1.0 - dist_3)) * 2.0);\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15 = (((2.0 * uv2_4) * dist_3) + 0.5);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_main, tmpvar_15);\n' + '  xlat_mutableneu = tmpvar_16.xyz;\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur2, tmpvar_15);\n' + '  xlat_mutableblur = ((tmpvar_17.xyz * scale2) + bias2);\n' + '  xlat_mutableneu = (xlat_mutableneu + xlat_mutableblur);\n' + '  xlat_mutableret1 = ((xlat_mutableret1 * 0.9) + (xlat_mutableneu * inten_2));\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18.w = 1.0;\n' + '  tmpvar_18.xyz = (xlat_mutableret1 + (vec3(0.0, 0.0, 0.15) * rad));\n' + '  vec4 ret4 = tmpvar_18;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('index4 = rand(12);\n' + ' p1 = 0;'),
	'frame_eqs_str' : ('dec_med = pow (0.9, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %8;\n' + 'index2 = (index2 + is_beat*bnot(index))%4;\n' + 'index3 = (index3 + is_beat*bnot(index)*bnot(index2))%3;\n' + 'index4 = (index4 + is_beat*bnot(index)*bnot(index2)*bnot(index3))%8;\n' + 'monitor = index4;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = bass + mid + treb;\n' + 'k1 =  is_beat*equal(index,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'rott = p2 * 3.14159265359/2;\n' + 'q27 = 8-index;\n' + 'q28 = index3;\n' + 'q29 = index4;\n' + 'stop = equal (index,4);\n' + 'stop2 = .9 * stop2 + .1 * stop;\n' + 'accel = stop - stop2;\n' + 'movez = movez + .01*4*30/fps;\n' + 'q30 = movez;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'zoom = 1.0;\n' + 'q32 = pow(0.996, 30/fps);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
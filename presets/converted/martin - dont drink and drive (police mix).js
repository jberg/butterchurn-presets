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
		wave_scale : 2.232543,
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
		wave_mode : 4.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.9,
		ib_r : 0.25,
		mv_b : 0.4999,
		echo_zoom : 0.999998,
		ob_size : 0.01,
		b1ed : 0.0,
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
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 1.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.32,
		wave_mystery : 0.28,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.9,
		ib_b : 0.25,
		mv_r : 0.4999,
		rating : 5.0,
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
m.index4 = 0;
m.p2 = 0;
m.p3 = 0;
m.q5 = 0;
m.dhop = 0;
m.k1 = 0;
m.hop = 0;
m.hop2 = 0;
m.movez = 0;
m.hop3 = 0;
m.hop4 = 0;
m.is_beat = 0;
m.dec_med = 0;
m.q20 = 0;
m.q31 = 0;
m.q21 = 0;
m.q22 = 0;
m.index = 0;
m.q23 = 0;
m.avg = 0;
m.q24 = 0;
m.q25 = 0;
m.q26 = 0;
m.q27 = 0;
m.beat = 0;
m.q17 = 0;
m.q28 = 0;
m.q18 = 0;
m.q29 = 0;
m.q19 = 0;
m.t0 = 0;
m.blink = 0;
m.rott = 0;
m.dec_slow = 0;
m.police = 0;
m.peak = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.8, div(30,m.fps));
m.dec_slow = pow(0.95, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.4+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),8);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),2);
m.index3 = mod((m.index3+((m.is_beat*bnot(m.index))*bnot(m.index2))),4);
m.index4 = mod((m.index4+(((m.is_beat*bnot(m.index))*bnot(m.index2))*bnot(m.index3))),4);
m.police = ((m.dec_slow*m.police)+((1-m.dec_slow)*bnot(((m.index3+m.index2)-2))));
m.q17 = m.police;
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.q24 = m.is_beat;
m.hop = ((m.dec_slow*m.hop)+((1-m.dec_slow)*m.q22));
m.hop2 = ((m.dec_slow*m.hop2)+((1-m.dec_slow)*m.hop));
m.hop3 = ((m.dec_slow*m.hop3)+((1-m.dec_slow)*m.hop2));
m.dhop = (m.hop2-m.hop3);
m.q18 = (m.dhop+(0.0*Math.sin(m.time)));
m.hop4 = ((m.dec_slow*m.hop4)+((1-m.dec_slow)*m.dhop));
m.q19 = (m.hop4*8);
m.k1 = (m.is_beat*equal(m.index, 0));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.p3 = ((m.dec_med*m.p3)+((1-m.dec_med)*m.p2));
m.rott = div((m.p3*3.14159265359),2);
m.q27 = (8-m.index);
m.q28 = m.index2;
m.q26 = (0.0+(0.1*m.index3));
m.q25 = m.index4;
m.monitor = m.q25;
m.movez = (m.movez+(div((0.03*30),m.fps)*(1-(bnot(m.index)*above(Math.sin(div(m.time,20)), 0.8)))));
m.q29 = (m.movez*1);
m.blink = ((1-(0*equal(m.index, 0)))*(1-equal(m.index, 7)));
m.q31 = (mod((m.time*10),2)*(1-m.blink));
m.q5 = m.rott;
m.q1 = (1+(10*bnot((m.index3+m.index2))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = 0;
m.warp = 0.0;
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.9,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.891519,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.yang = 0;
m.xang = 0;
m.k1 = 0;
m.k2 = 0;
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
m.t1 = 0;
m.t2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t2 = (m.t2+m.bass_att);
		return m;
	},
		'point_eqs' : function(m) {
m.k1 = Math.cos(div(m.time,3));
m.k2 = Math.sin(div(m.time,2));
m.t_abs = m.sample;
m.t_rel = (m.sample-div(m.time,2.12));
m.ampl = (Math.cos(m.t_rel)*12);
m.ox = (Math.sin((m.t_rel*18))+(m.ampl*Math.sin((m.t_rel*12))));
m.oy = (Math.cos((m.t_rel*13))+(m.ampl*Math.cos((m.t_rel*11))));
m.oz = div(m.ampl,3);
m.oz = 0;
m.r = 1;
m.g = 0.5;
m.b = 0;
m.a = ((0.25*Math.cos(div((m.t_abs*3.14),2)))+(0.2*below(Math.abs(((1-m.t_abs)-m.t1)), 0.0)));
m.a = ((0.25*Math.cos((m.t_abs*1.5)))+(0.7*below(Math.abs(m.t_abs), 0.0)));
m.xang = (m.k1*3);
m.yang = 1;
m.zang = (3*m.k1);
m.fov = 0.22;
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
		'frame_eqs_str' : ('t2 = t2 + bass_att;'),
		'point_eqs_str' : ('k1 = cos(time/3);\n' + 'k2 = sin(time/2);\n' + 't_abs = sample;\n' + 't_rel = sample-time/2.12;\n' + 'ampl =  cos(t_rel)*12;\n' + 'ox = sin (t_rel*18) + ampl*sin (t_rel*12) ;\n' + 'oy = cos (t_rel*13) + ampl*cos (t_rel*11);\n' + 'oz =  ampl/3;\n' + 'oz = 0;\n' + 'r = 1;\n' + 'g = 0.5;\n' + 'b = 0;\n' + 'a=0.25*(cos(t_abs*3.14/2)) + 0.2 *below (abs(1-t_abs- t1),0.0);\n' + 'a=0.25*(cos(t_abs*1.5)) + 0.7 *below (abs(t_abs),0.0);\n' + 'xang = k1*3;\n' + 'yang = 1;\n' + 'zang = 3*k1;\n' + 'fov = 0.22;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = oz - 6;\n' + 'x = ox*fov/oz +0.5;\n' + 'y = oy*fov/oz + 0.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
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
m.t_rel = 0;
m.q21 = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = ['t2','t1'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t_rel = (m.time*2);
m.t1 = Math.floor(m.t_rel);
m.t2 = (Math.floor(m.t_rel)+1);
		return m;
	},
		'point_eqs' : function(m) {
m.t1 = mod(((m.t1*65)+37),4096);
m.t2 = mod(((m.t2*65)+37),4096);
m.x = div(m.t1,4096);
m.y = div(m.t2,4096);
m.a = div(m.q21,8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t_rel = time *2;\n' + 't1 = int (t_rel);\n' + 't2 = int (t_rel) + 1;'),
		'point_eqs_str' : ('t1 = (t1*65 + 37) % 4096;\n' + 't2 = (t2*65 + 37) % 4096;\n' + 'x =  (t1/4096);\n' + 'y =  (t2/4096);\n' + 'a = q21/8;'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.891519,
			samples : 128.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q24 = 0;
m.t1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = 0.51;
m.t1 = (div(m.time,2)-Math.floor(div(m.time,2)));
		return m;
	},
		'point_eqs' : function(m) {
m.x = (div(m.sample,3)+m.t1);
m.y = m.sample;
m.a = div(m.q24,2);
m.a = 0.6;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = .51;\n' + 't1 = time/2 - int(time/2);'),
		'point_eqs_str' : ('x = sample/3 + t1;\n' + 'y = sample;\n' + 'a = q24/2;\n' + 'a = .6;'),

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
			r2 : 0.0,
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.33105,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.2,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.22056,
			x : 0.65,
			y : 0.9,
			ang : 1.570797,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q22 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = 0.6;
m.y = 0.3;
m.b = 0;
m.r = 1;
m.g = 0;
m.a = Math.min(div(m.q22,18), 1);
m.a2 = 0;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = .6;\n' + ' y = .3;\n' + 'b = 0;\n' + 'r = 1;\n' + 'g = 0;\n' + 'a = min(q22/18,1);\n' + 'a2 = 0;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.376991,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 2.245566,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.7,
			r : 0.96,
			border_g : 0.5,
			rad : 0.526765,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.5,
			},
		'init_eqs' : function(m) {
m.q28 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_zoom = (1.4+Math.sin(div(m.time,3.67)));
m.a = m.q28;
m.a2 = div(m.q28,8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_zoom = 1.4 + sin(time/3.67);\n' + 'a = q28;\n' + ' a2 = q28/8;'),

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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '  uv_1 = uv;\n' + '   vec2 zz_2;\n' + '   vec3 noiseVal_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (uv - vec2(0.5, 0.5));\n' + '   vec2 P_5;\n' + '  P_5 = ((uv * 0.3) + (0.01 * rand_frame).xy);\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = (0.016 * texture2D (sampler_noise_lq, P_5)).xyz;\n' + '  noiseVal_3 = tmpvar_6;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (0.8 * sin((tmpvar_4 * 8.0)));\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = clamp ((0.01 / sqrt(\n' + '    dot (tmpvar_7, tmpvar_7)\n' + '  )), 0.0, 1.0);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = ((-(tmpvar_4) * texsize.xy) * _qg.y);\n' + '  zz_2 = tmpvar_9;\n' + '  if ((_qg.x == 1.0)) {\n' + '    zz_2 = (tmpvar_9 * (abs(tmpvar_4.y) / abs(tmpvar_4.x)));\n' + '  } else {\n' + '    if ((_qg.x == 2.0)) {\n' + '      zz_2 = (zz_2 * (abs(tmpvar_4.y) - abs(tmpvar_4.x)));\n' + '    };\n' + '  };\n' + '  uv_1 = (uv + ((\n' + '    clamp ((sin(zz_2) / cos(zz_2)), vec2(-20.0, -20.0), vec2(20.0, 20.0))\n' + '   * texsize.zw) * 4.0));\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_main, uv_1);\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_blur2, uv_1);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12.w = 1.0;\n' + '  tmpvar_12.xyz = (((\n' + '    (0.95 * (tmpvar_10 + tmpvar_8).xyz)\n' + '   + noiseVal_3) - 0.02) - (0.06 * (\n' + '    (tmpvar_11.xyz * scale2)\n' + '   + bias2).x));\n' + '  vec4 ret4 = tmpvar_12;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('uniform highp vec3 neu;\n' + 'uniform highp vec3 blur;\n' + 'highp vec3 xlat_mutableblur;\n' + 'highp vec3 xlat_mutableneu;\n' + 'highp vec3 xlat_mutableret1;\n' + 'shader_body {\n' + '  xlat_mutableblur = blur;\n' + '  xlat_mutableneu = neu;\n' + '   vec2 uv_1;\n' + '   float inten_3;\n' + '   float dist_4;\n' + '   float ang2_5;\n' + '   vec2 uv2_6;\n' + '   vec3 ret_7;\n' + '  uv_1 = (uv - 0.5);\n' + '  uv_1 = (uv_1 * aspect.xy);\n' + '  dist_4 = 1.0;\n' + '  inten_3 = 1.0;\n' + '  xlat_mutableret1 = vec3(0.0, 0.0, 0.0);\n' + '  for ( float n_2 = 1.0; n_2 <= 4.0; n_2 += 1.0) {\n' + '    ang2_5 = (((6.28 * n_2) / 4.0) + (_qb.x * (n_2 - 1.0)));\n' + '     float tmpvar_8;\n' + '    tmpvar_8 = cos(ang2_5);\n' + '     float tmpvar_9;\n' + '    tmpvar_9 = sin(ang2_5);\n' + '    uv2_6.x = ((uv_1.x * tmpvar_8) - (uv_1.y * tmpvar_9));\n' + '    uv2_6.y = ((uv_1.x * tmpvar_9) + (uv_1.y * tmpvar_8));\n' + '    uv2_6 = (uv2_6 * aspect.yx);\n' + '    dist_4 = (1.0 - fract((\n' + '      (0.25 * n_2)\n' + '     + _qh.x)));\n' + '    dist_4 = (dist_4 * dist_4);\n' + '    inten_3 = ((pow (dist_4, 0.2) * (1.0 - dist_4)) * 2.0);\n' + '     vec2 tmpvar_10;\n' + '    tmpvar_10 = (((\n' + '      (3.0 * uv2_6)\n' + '     * dist_4) + 0.5) + ((0.5 * \n' + '      (1.0 - (0.5 * _qg.w))\n' + '    ) * _qe.yz));\n' + '     vec4 tmpvar_11;\n' + '    tmpvar_11 = texture2D (sampler_main, tmpvar_10);\n' + '    xlat_mutableneu = tmpvar_11.xyz;\n' + '     vec2 tmpvar_12;\n' + '    tmpvar_12 = fract(tmpvar_10);\n' + '     vec4 tmpvar_13;\n' + '    tmpvar_13 = texture2D (sampler_blur1, tmpvar_12);\n' + '    xlat_mutableblur = ((tmpvar_13.xyz * scale1) + bias1);\n' + '    xlat_mutableneu = (xlat_mutableneu + xlat_mutableblur);\n' + '    xlat_mutableret1 = ((xlat_mutableret1 * 0.9) + (xlat_mutableneu * inten_3));\n' + '  };\n' + '  uv2_6 = (0.5 * cos((uv_1 * 16.0)));\n' + '  ret_7 = ((xlat_mutableret1 * 0.7) + ((\n' + '    clamp ((0.04 / sqrt(dot (uv2_6, uv2_6))), 0.0, 1.0)\n' + '   * vec3(1.0, 0.7, 0.0)) * _qh.z));\n' + '   float tmpvar_14;\n' + '  tmpvar_14 = (0.5 / ((1.0 + uv_1.x) - (4.0 * \n' + '    fract((time * 3.0))\n' + '  )));\n' + '  ret_7 = (ret_7 + (vec3((_qe.x * \n' + '    clamp ((tmpvar_14 * tmpvar_14), 0.0, 1.0)\n' + '  )) * vec3(0.0, 0.0, 0.7)));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 1.0;\n' + '  tmpvar_15.xyz = ret_7;\n' + '  vec4 ret4 = tmpvar_15;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('dec_med = pow (0.8, 30/fps);\n' + 'dec_slow = pow (0.95, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .4+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %8;\n' + 'index2 = (index2 + is_beat*bnot(index))%2;\n' + 'index3 = (index3 + is_beat*bnot(index)*bnot(index2))%4;\n' + 'index4 = (index4 + is_beat*bnot(index)*bnot(index2)*bnot(index3))%4;\n' + 'police = dec_slow*police+ (1-dec_slow) * bnot (index3 + index2 -2);\n' + 'q17 = police;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'hop = dec_slow*hop + (1-dec_slow)*q22;\n' + 'hop2 = dec_slow*hop2 + (1-dec_slow)*hop;\n' + 'hop3 = dec_slow*hop3 + (1-dec_slow)*hop2;\n' + 'dhop = hop2 - hop3;\n' + 'q18 = dhop +.0*sin(time);\n' + 'hop4 = dec_slow*hop4 + (1-dec_slow)*dhop;\n' + 'q19 = hop4 * 8 ;\n' + 'k1 =  is_beat*equal(index,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'p3 = dec_med * p3+ (1-dec_med)*p2;\n' + 'rott = p3 * 3.14159265359/2;\n' + 'q27 = 8-index;\n' + 'q28 = index2;\n' + 'q26 = .0 + .1*index3;\n' + 'q25 = index4;\n' + 'monitor = q25;\n' + 'movez = movez + .03*30/fps *(1-bnot(index) * above(sin(time/20),.8));\n' + 'q29 = movez*1;\n' + 'blink = (1-0*equal(index,0)) * (1-equal (index,7));\n' + 'q31 = ((time*10)%2) * (1-blink);\n' + 'q5 = rott;\n' + 'q1 = 1 + 10 * bnot (index3 + index2);'),
	'pixel_eqs_str' : ('rot = 0;\n' + 'warp = .0;'),
};

return pmap;
});
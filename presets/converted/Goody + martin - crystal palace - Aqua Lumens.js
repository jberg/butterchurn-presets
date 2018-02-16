define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.007,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 5.552,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.5,
		echo_zoom : 1.0,
		ob_size : 0.01,
		b1ed : 0.0,
		wave_smoothing : 0.504,
		warpanimspeed : 1.459,
		wave_dots : 1.0,
		mv_g : 0.5,
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
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : -1.0,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.5,
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
m.p2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.sw = 0;
m.q6 = 0;
m.k1 = 0;
m.q7 = 0;
m.k2 = 0;
m.q8 = 0;
m.movez = 0;
m.rota = 0;
m.is_beat = 0;
m.q30 = 0;
m.dec_med = 0;
m.q20 = 0;
m.q31 = 0;
m.q21 = 0;
m.q32 = 0;
m.q22 = 0;
m.index = 0;
m.q23 = 0;
m.avg = 0;
m.vol = 0;
m.q24 = 0;
m.q26 = 0;
m.q27 = 0;
m.beat = 0;
m.q28 = 0;
m.q29 = 0;
m.t0 = 0;
m.v2 = 0;
m.rott = 0;
m.dec_slow = 0;
m.peak = 0;
m.vol = 0;
m.p1 = 0;
m.vx = 0.2;
m.vy = -0.1;
m.kx = 0;
m.ky = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.96, div(30,m.fps));
m.dec_slow = pow(0.98, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.5+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),8);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),2);
m.index3 = mod((m.index3+((m.is_beat*bnot(m.index))*bnot(m.index2))),2);
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.q24 = m.is_beat;
m.vol = (m.bass_att+m.treb_att);
m.v2 = ((m.v2*m.dec_slow)+(m.vol*(1-m.dec_slow)));
m.q26 = Math.max(Math.atan((m.vol-(m.v2*0.8))), 0.3);
m.q27 = (m.index+1);
m.sw = ((m.sw*m.dec_med)+((1-m.dec_med)*mod(m.index2,2)));
m.q28 = m.sw;
m.k1 = (m.is_beat*bnot(m.index));
m.k2 = (m.is_beat*bnot(m.index));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_slow*m.p2)+((1-m.dec_slow)*m.p1));
m.rott = div((m.p2*3.1416),2);
m.monitor = m.k1;
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.q5 = Math.cos(div(m.time,6));
m.q6 = -Math.sin(div(m.time,6));
m.q7 = -m.q6;
m.q8 = m.q5;
m.zoom = 1;
m.rot = -0;
m.movez = (m.movez+div(((0.0035*(m.q1+1.1))*30),m.fps));
m.q29 = m.movez;
m.rota = (m.rota+div(((0.001*(2-m.q1))*30),m.fps));
m.q30 = m.rota;
m.q31 = (1+(16*Math.abs(Math.cos((m.time*0.1)))));
m.q32 = div((0.5*Math.cos((m.time*0.08))),4);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.4,
			g : 0.6,
			scaling : 0.5033,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.angle = 0;
m.rad = 0;
m.x0 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x0 = (0.5+(0.4*Math.sin(div(m.time,2))));
m.angle = (div(rand(1000),1000)*6.28);
m.rad = div(rand(1000),1000);
m.rad = (m.rad*m.rad);
m.x = (m.x0+((0.1*m.rad)*Math.sin(m.angle)));
m.y = (0.5+((0.1*m.rad)*Math.cos(m.angle)));
m.a = (1-m.rad);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x0 = .5 + .4 * sin(time/2);\n' + 'angle = rand(1000)/1000*6.28;\n' + 'rad =  rand(1000)/1000;\n' + 'rad = rad * rad;\n' + 'x = x0 + .1*rad*sin(angle);\n' + 'y = .5 + .1*rad*cos(angle);\n' + 'a = 1-rad;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.trel = 0;
m.q11 = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.trel = (m.q11-0.0);
m.t1 = Math.floor(m.trel);
m.t2 = (m.trel-Math.floor(m.trel));
		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trel = q11-.0;\n' + 't1 = int(trel);\n' + 't2 = trel - int(trel);'),
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
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.trel = 0;
m.q11 = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.trel = (m.q11-0.33);
m.t1 = Math.floor(m.trel);
m.t2 = (m.trel-Math.floor(m.trel));
		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trel = q11-.33;\n' + 't1 = int(trel);\n' + 't2 = trel - int(trel);'),
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
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.trel = 0;
m.q11 = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.trel = (m.q11-0.66);
m.t1 = Math.floor(m.trel);
m.t2 = (m.trel-Math.floor(m.trel));
		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trel = q11-.66;\n' + 't1 = int(trel);\n' + 't2 = trel - int(trel);'),
		'point_eqs_str' : (''),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.9,
			a : 0.6,
			enabled : 0.0,
			b : 0.5,
			tex_ang : 1.88496,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.9,
			tex_zoom : 1.72851,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.3,
			r : 0.8,
			border_g : 1.0,
			rad : 0.24243,
			x : 0.8,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
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
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 3.14159,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.71105,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.11045,
			x : 0.13,
			y : 0.19,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
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
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.2,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.2,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.22613,
			x : 0.9,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 1.0,
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
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.02,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.18717,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 36.0,
			border_r : 1.0,
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
	'warp' : ('highp vec2 xlat_mutablers;\n' + 'highp vec2 xlat_mutableuv1;shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 xlat_varmod_2;\n' + '   vec3 crisp_3;\n' + '   vec2 uv2_4;\n' + '   float z_5;\n' + '   vec3 ret_6;\n' + '  xlat_mutableuv1 = ((uv_orig - 0.5) * aspect.xy);\n' + '   vec2 x_7;\n' + '  x_7 = (xlat_mutableuv1 * 5.0);\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = ((16.0 * sqrt(\n' + '    dot (x_7, x_7)\n' + '  )) + time);\n' + '  xlat_mutablers = (clamp ((\n' + '    (sin(tmpvar_8) / cos(tmpvar_8))\n' + '   * \n' + '    normalize(xlat_mutableuv1)\n' + '  ), vec2(-5.0, -5.0), vec2(5.0, 5.0)) / 2.0);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = sin((xlat_mutableuv1 * (_qh.z * 4.0)));\n' + '  z_5 = (1.0 - cos((8.0 * \n' + '    (sqrt(dot (tmpvar_9, tmpvar_9)) * ((abs(xlat_mutableuv1.x) + abs(xlat_mutableuv1.y)) + _qh.w))\n' + '  )));\n' + '  z_5 = (z_5 * (0.2 * clamp (\n' + '    dot (vec3(z_5), vec3(0.32, 0.49, 0.29))\n' + '  , 0.0, 1.0)));\n' + '   float tmpvar_10;\n' + '  tmpvar_10 = float((z_5 <= 1.0));\n' + '  xlat_mutablers = ((_qg.w * xlat_mutablers) + ((1.0 - _qg.w) * xlat_mutablers.yx));\n' + '  uv_1 = (uv_orig + ((\n' + '    ((1.0 - tmpvar_10) * 3.0)\n' + '   * xlat_mutablers.yx) + (\n' + '    ((0.5 * tmpvar_10) * z_5)\n' + '   * \n' + '    sign(z_5)\n' + '  )));\n' + '   mat2 tmpvar_11;\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = (_qb * 0.5);\n' + '  tmpvar_11[0] = tmpvar_12.xy;\n' + '  tmpvar_11[1] = tmpvar_12.zw;\n' + '  uv2_4 = (((8.0 * xlat_mutableuv1) + (0.3 * \n' + '    sin(((xlat_mutableuv1 * 16.0) + (4.0 * _qb.xy)))\n' + '  )) * 2.6);\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = fract(uv_1);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur1, tmpvar_13);\n' + '   vec3 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_main, uv_1).xyz;\n' + '  crisp_3 = tmpvar_15;\n' + '   vec3 tmpvar_16;\n' + '  tmpvar_16 = ((crisp_3 + vec3((0.075 * \n' + '    abs((0.0225 / sqrt((xlat_mutableuv1 * tmpvar_11).x)))\n' + '  ))) + vec3((_qg.y * clamp (\n' + '    (0.00065 / sqrt(dot (uv2_4, uv2_4)))\n' + '  , 0.0, 1.0))));\n' + '   vec2 P_17;\n' + '  P_17 = ((50.0 * uv_1) + (time * 0.1));\n' + '   vec3 tmpvar_18;\n' + '  tmpvar_18 = (texture2D (sampler_noise_lq, P_17) - 0.25).xyz;\n' + '  xlat_varmod_2 = tmpvar_18;\n' + '  xlat_varmod_2 = (0.98 - (xlat_varmod_2 * (crisp_3 - \n' + '    (0.5 * ((tmpvar_14.xyz * scale1) + bias1))\n' + '  )));\n' + '  ret_6 = (((\n' + '    (1.0 - tmpvar_10)\n' + '   * tmpvar_16) * xlat_varmod_2) + ((tmpvar_10 * tmpvar_16) * xlat_varmod_2));\n' + '   vec3 tmpvar_19;\n' + '  tmpvar_19 = (0.05 * texture2D (sampler_noise_lq, uv_1)).xyz;\n' + '  ret_6 = (ret_6 * (vec3(0.89, 0.96, 0.965) + tmpvar_19));\n' + '   vec3 tmpvar_20;\n' + '  tmpvar_20.z = 0.0;\n' + '  tmpvar_20.xy = uv_orig;\n' + '  ret_6 = (ret_6 + (vec3(0.015, 0.0075, 0.0135) * dot (tmpvar_20, vec3(0.32, 0.49, 0.29))));\n' + '  ret_6 = (ret_6 * 0.86);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21.w = 1.0;\n' + '  tmpvar_21.xyz = ret_6;\n' + '  vec4 ret4 = tmpvar_21;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('uniform highp vec3 crisp;\n' + 'uniform highp vec3 blur;\n' + 'uniform highp vec2 uv2;\n' + 'uniform highp vec2 uv3;\n' + 'highp vec3 xlat_mutableblur;\n' + 'highp vec3 xlat_mutablecrisp;\n' + 'highp vec3 xlat_mutableret1;\n' + 'highp vec2 xlat_mutableuv2;\n' + 'highp vec2 xlat_mutableuv3;\n' + 'shader_body {\n' + '  xlat_mutableblur = blur;\n' + '  xlat_mutablecrisp = crisp;\n' + '  xlat_mutableuv2 = uv2;\n' + '  xlat_mutableuv3 = uv3;\n' + '   vec2 uv_1;\n' + '   float t_rel_2;\n' + '   float inten_4;\n' + '   float dist_5;\n' + '   float ang2_6;\n' + '   vec3 ret_7;\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_fc_main, uv).xyz;\n' + '  ret_7 = tmpvar_8;\n' + '  uv_1 = (uv - 0.5);\n' + '  uv_1 = (uv_1 * aspect.xy);\n' + '  dist_5 = 0.0;\n' + '  inten_4 = 0.0;\n' + '  xlat_mutableret1 = vec3(0.0, 0.0, 0.0);\n' + '  t_rel_2 = _qh.x;\n' + '  for ( float n_3 = 0.0; n_3 <= 14.0; n_3 += 1.0) {\n' + '    ang2_6 = (((6.28 * n_3) / 14.0) + _qh.y);\n' + '     float tmpvar_9;\n' + '    tmpvar_9 = cos(ang2_6);\n' + '     float tmpvar_10;\n' + '    tmpvar_10 = sin(ang2_6);\n' + '    xlat_mutableuv2.x = ((uv_1.x * tmpvar_9) - (uv_1.y * tmpvar_10));\n' + '    xlat_mutableuv2.y = ((uv_1.x * tmpvar_10) + (uv_1.y * tmpvar_9));\n' + '    xlat_mutableuv2 = (xlat_mutableuv2 * aspect.yx);\n' + '    dist_5 = (1.0 - fract((\n' + '      (n_3 / 14.0)\n' + '     + t_rel_2)));\n' + '    inten_4 = ((16.0 * dist_5) * (1.0 - (dist_5 * dist_5)));\n' + '    xlat_mutableuv3 = ((3.75 * dist_5) * xlat_mutableuv2);\n' + '     vec4 tmpvar_11;\n' + '     vec2 P_12;\n' + '    P_12 = (xlat_mutableuv3 * 1.2);\n' + '    tmpvar_11 = texture2D (sampler_main, P_12);\n' + '    xlat_mutablecrisp = tmpvar_11.xyz;\n' + '     vec2 tmpvar_13;\n' + '    tmpvar_13 = fract(xlat_mutableuv3);\n' + '     vec4 tmpvar_14;\n' + '    tmpvar_14 = texture2D (sampler_blur1, tmpvar_13);\n' + '    xlat_mutableblur = (((tmpvar_14.xyz * scale1) + bias1) * vec3(0.5, 0.9, 1.0));\n' + '    xlat_mutableret1 = max (xlat_mutableret1, ((\n' + '      (xlat_mutablecrisp * 2.0)\n' + '     + xlat_mutableblur) * inten_4));\n' + '  };\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (0.5 + ((uv_orig * aspect.yx) * 10.0));\n' + '  tmpvar_15 = texture2D (sampler_main, P_16);\n' + '  ret_7 = (ret_7 * tmpvar_15.xyz);\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (0.5 - ((uv_orig * aspect.xy) * 10.0));\n' + '  tmpvar_17 = texture2D (sampler_main, P_18);\n' + '  ret_7 = (ret_7 + tmpvar_17.xyz);\n' + '  ret_7 = (ret_7 * (0.5 - (dist_5 * xlat_mutableret1.y)));\n' + '   vec4 tmpvar_19;\n' + '   vec2 P_20;\n' + '  P_20 = ((5.0 * aspect.xy) * xlat_mutableuv2);\n' + '  tmpvar_19 = texture2D (sampler_blur2, P_20);\n' + '  ret_7 = (ret_7 + ((xlat_mutableret1 * 2.0) + (8.0 * \n' + '    ((tmpvar_19.xyz * scale2) + bias2)\n' + '  )));\n' + '   vec4 tmpvar_21;\n' + '   vec2 P_22;\n' + '  P_22 = (0.5 + (uv_1 * aspect.xy));\n' + '  tmpvar_21 = texture2D (sampler_blur1, P_22);\n' + '  ret_7 = (ret_7 * ((tmpvar_21.xyz * scale1) + bias1));\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23.z = 0.0;\n' + '  tmpvar_23.xy = (xlat_mutableuv2 * aspect.xy);\n' + '   vec3 tmpvar_24;\n' + '  tmpvar_24.z = 0.0;\n' + '  tmpvar_24.xy = (xlat_mutableuv2 * aspect.xy);\n' + '  ret_7 = (ret_7 - (10.0 * (\n' + '    dot (tmpvar_23, vec3(0.32, 0.49, 0.29))\n' + '   * \n' + '    dot (tmpvar_24, vec3(0.32, 0.49, 0.29))\n' + '  )));\n' + '  ret_7 = (ret_7 * 2.0);\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25.w = 1.0;\n' + '  tmpvar_25.xyz = ret_7;\n' + '  vec4 ret4 = tmpvar_25;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('vol = 0;\n' + ' p1 = 0;\n' + 'vx = .2;\n' + ' vy = -0.1;\n' + 'kx = 0;\n' + ' ky = 0;'),
	'frame_eqs_str' : ('dec_med = pow (0.96, 30/fps);\n' + 'dec_slow = pow (0.98, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %8;\n' + 'index2 = (index2 + is_beat*bnot(index))%2;\n' + 'index3 = (index3 + is_beat*bnot(index) * bnot(index2))%2;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'vol = bass_att + treb_att;\n' + 'v2 = v2 * dec_slow + vol * (1-dec_slow) ;\n' + 'q26 = max(atan (vol - v2*.8),.3);\n' + 'q27 = index + 1;\n' + 'sw = sw*dec_med + (1-dec_med)*(index2%2);\n' + 'q28 = sw;\n' + 'k1 =  is_beat*bnot(index);\n' + 'k2 =  is_beat*bnot(index);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_slow * p2+ (1-dec_slow)*p1;\n' + 'rott = p2 * 3.1416/2;\n' + 'monitor = k1;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'q5 = cos(time/6);\n' + 'q6 = -sin(time/6);\n' + 'q7 = -q6;\n' + 'q8 = q5;\n' + 'zoom = 1;\n' + 'rot = -0;\n' + 'movez = movez + .0035*(q1+1.1)*30/fps;\n' + 'q29 = movez;\n' + 'rota = rota + .001*(2-q1)*30/fps;\n' + 'q30 = rota;\n' + 'q31 = 1 + 16*abs(cos(time*.1));\n' + 'q32 = .5*cos(time*.08)/4;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
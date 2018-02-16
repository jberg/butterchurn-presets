define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 0.0,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.9,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : -0.941,
		mv_dy : 0.426,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 0.942,
		echo_zoom : 1.169,
		ob_size : 0.005,
		b1ed : 0.0,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.078,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.006,
		wave_thick : 0.0,
		modwavealphaend : 2.0,
		wave_mystery : 1.0,
		decay : 0.98,
		wave_a : 0.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 0.316,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 2.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.tt = 0;
m.mn = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.num = 0;
m.mt = 0;
m.num_b0 = 0;
m.num_att = 0;
m.pump = 0;
m.h1 = 0;
m.num_b = 0;
m.h2 = 0;
m.num0 = 0;
m.bm = 0;
m.h3 = 0;
m.mx = 0;
m.q10 = 0;
m.q11 = 0;
m.bt = 0;
m.r = 0;
m.q12 = 0;
m.t = 0;
m.v = 0;
m.beat = 0;
m.w = 0;
m.c_x = 0;
m.c_y = 0;
m.c_x = 0.5;
m.c_y = 0.5;
m.v = 0.05;
		return m;
	},
	'frame_eqs' : function(m) {
m.q1 = m.aspectx;
m.q2 = m.aspecty;
m.rot = 0;
m.zoom = 1;
m.warp = 0;
m.num0 = ((m.beat*(Math.abs((m.num-m.num_att))+m.pump))+(bnot(m.beat)*m.num0));
m.pump = ((m.beat*((Math.sin(m.t)*0.1)+0.1))+(bnot(m.beat)*m.pump));
m.pump = (m.pump*0.98);
m.num_b0 = m.num_b;
m.num = Math.abs((((m.bass-m.bass_att)+(m.mid-m.mid_att))+(m.treb-m.treb_att)));
m.num_att = ((m.num_att*0.95)+(m.num*0.05));
m.num_b = (above(m.num, (1-m.pump))*above(Math.abs((m.num-m.num_att)), m.num0));
m.beat = bnot(equal(m.num_b0, m.num_b));
m.t = (m.t+(m.num*0.1));
m.r = ifcond(m.beat, ((0.02*(Math.floor(rand(200))-100))*0.01), m.r);
m.rot = m.r;
m.c_x = ifcond(m.beat, (0.5+((0.5*(Math.floor(rand(200))-100))*0.01)), m.c_x);
m.c_y = ifcond(m.beat, (0.5+((0.5*(Math.floor(rand(200))-100))*0.01)), m.c_y);
m.v = ifcond(m.beat, (0.035+((0.025*(Math.floor(rand(200))-100))*0.01)), m.v);
m.q3 = m.c_x;
m.q4 = m.c_y;
m.q5 = m.v;
m.q6 = m.beat;
m.bb = ((m.bb*0.98)+(m.bass*0.5));
m.mm = ((m.mm*0.98)+(m.mid*0.5));
m.tt = ((m.tt*0.98)+(m.treb*0.5));
m.mx = Math.max(Math.max(m.bb, m.mm), m.tt);
m.mn = Math.min(Math.min(m.bb, m.mm), m.tt);
m.h1 = div((m.bb-m.mn),(m.mx-m.mn));
m.h2 = div((m.mm-m.mn),(m.mx-m.mn));
m.h3 = div((m.tt-m.mn),(m.mx-m.mn));
m.v = div(0.2,m.fps);
m.bm = (m.bm+((m.h1-m.h2)*m.v));
m.mt = (m.mt+((m.h2-m.h3)*m.v));
m.bt = (m.bt+((m.h1-m.h3)*m.v));
m.w = m.bm;
m.q3 = Math.sin(m.w);
m.q4 = Math.cos(m.w);
m.q10 = m.bm;
m.q11 = m.mt;
m.q12 = m.bt;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.d = (pow(sqrt((sqr((m.x-m.q3))+sqr((m.y-m.q4)))), 0.5)-0);
m.v = m.q5;
m.dx = ((m.v*(m.x-m.q3))*m.d);
m.dy = ((m.v*(m.y-m.q4))*m.d);
		return m;
	},
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
	'warp' : ('shader_body {\n' + '   vec3 rand_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = (texture2D (sampler_noise_lq, tmpvar_3).xyz - 0.5);\n' + '  rand_1 = tmpvar_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv + (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv - (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = (((tmpvar_6.xyz * scale1) + bias1) - ((tmpvar_8.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (uv + (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (uv - (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_13 = texture2D (sampler_blur1, P_14);\n' + '   vec3 tmpvar_15;\n' + '  tmpvar_15 = (((tmpvar_11.xyz * scale1) + bias1) - ((tmpvar_13.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = mix (uv_orig, uv, vec2(0.35, 0.35));\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = tmpvar_10.y;\n' + '  tmpvar_17.y = tmpvar_15.y;\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18 = (tmpvar_16 - ((tmpvar_17 * texsize.zw) * 4.0));\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = tmpvar_10.z;\n' + '  tmpvar_19.y = tmpvar_15.z;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = (tmpvar_16 - ((tmpvar_19 * texsize.zw) * 4.0));\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_main, tmpvar_18);\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur1, uv);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_main, tmpvar_18);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_main, uv_orig);\n' + '  ret_2.y = (((\n' + '    (tmpvar_21.y - (((\n' + '      (tmpvar_22.xyz * scale1)\n' + '     + bias1).y - tmpvar_23.y) * 0.024))\n' + '   - 0.009) + (\n' + '    (1.0 - tmpvar_24.x)\n' + '   * 0.014)) + (rand_1 * 0.02)).x;\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_main, tmpvar_20);\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26 = texture2D (sampler_main, tmpvar_20);\n' + '  ret_2.z = (((\n' + '    (tmpvar_25.z - (((\n' + '      (tmpvar_22.xyz * scale1)\n' + '     + bias1).z - tmpvar_26.z) * 0.024))\n' + '   - 0.009) + (tmpvar_24.x * 0.014)) + (rand_1 * 0.02)).x;\n' + '   vec4 tmpvar_27;\n' + '   vec2 P_28;\n' + '  P_28 = (uv + ((rand_1.xy * texsize.zw) * 0.5));\n' + '  tmpvar_27 = texture2D (sampler_fc_main, P_28);\n' + '  ret_2.x = tmpvar_27.x;\n' + '   vec4 tmpvar_29;\n' + '  tmpvar_29 = texture2D (sampler_blur3, uv);\n' + '  ret_2.x = (ret_2.x + ((\n' + '    (ret_2.x - ((tmpvar_29.xyz * scale3) + bias3).x)\n' + '   * 0.4) + (rand_1 * 0.0052)).x);\n' + '   vec4 tmpvar_30;\n' + '  tmpvar_30.w = 1.0;\n' + '  tmpvar_30.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_30;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '  uv_1 = (0.5 + ((uv - 0.5) * 1.5));\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = ((uv_1 - 0.5) * aspect.xy);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = ((_qa.w * tmpvar_3.x) - (_qa.z * tmpvar_3.y));\n' + '  tmpvar_4.y = ((_qa.z * tmpvar_3.x) + (_qa.w * tmpvar_3.y));\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (0.5 + (tmpvar_4 * 2.0));\n' + '   vec2 numerator_6;\n' + '  numerator_6 = (tmpvar_5 - vec2(0.0, 0.5));\n' + '   vec2 denominator_7;\n' + '  denominator_7 = (tmpvar_5 - vec2(1.0, 0.5));\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8.x = ((numerator_6.x * denominator_7.x) + (numerator_6.y * denominator_7.y));\n' + '  tmpvar_8.y = ((numerator_6.y * denominator_7.x) - (numerator_6.x * denominator_7.y));\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = (((tmpvar_8 / \n' + '    ((denominator_7.x * denominator_7.x) + (denominator_7.y * denominator_7.y))\n' + '  ) + 0.5) - vec2(0.5, 0.5));\n' + '   float tmpvar_10;\n' + '  tmpvar_10 = sqrt(dot (tmpvar_9, tmpvar_9));\n' + '   float tmpvar_11;\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = (min (abs(\n' + '    (tmpvar_9.x / tmpvar_9.y)\n' + '  ), 1.0) / max (abs(\n' + '    (tmpvar_9.x / tmpvar_9.y)\n' + '  ), 1.0));\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = (tmpvar_12 * tmpvar_12);\n' + '  tmpvar_13 = (((\n' + '    ((((\n' + '      ((((-0.01213232 * tmpvar_13) + 0.05368138) * tmpvar_13) - 0.1173503)\n' + '     * tmpvar_13) + 0.1938925) * tmpvar_13) - 0.3326756)\n' + '   * tmpvar_13) + 0.9999793) * tmpvar_12);\n' + '  tmpvar_13 = (tmpvar_13 + (float(\n' + '    (abs((tmpvar_9.x / tmpvar_9.y)) > 1.0)\n' + '  ) * (\n' + '    (tmpvar_13 * -2.0)\n' + '   + 1.570796)));\n' + '  tmpvar_11 = (tmpvar_13 * sign((tmpvar_9.x / tmpvar_9.y)));\n' + '  if ((abs(tmpvar_9.y) > (1e-08 * abs(tmpvar_9.x)))) {\n' + '    if ((tmpvar_9.y < 0.0)) {\n' + '      if ((tmpvar_9.x >= 0.0)) {\n' + '        tmpvar_11 += 3.141593;\n' + '      } else {\n' + '        tmpvar_11 = (tmpvar_11 - 3.141593);\n' + '      };\n' + '    };\n' + '  } else {\n' + '    tmpvar_11 = (sign(tmpvar_9.x) * 1.570796);\n' + '  };\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = (tmpvar_11 * 0.1591549);\n' + '  tmpvar_14.y = tmpvar_10;\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15.x = ((tmpvar_14.x * 2.0) + _qc.z);\n' + '  tmpvar_15.y = ((0.35 * log(tmpvar_10)) + _qc.w);\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = (0.5 + (0.5 - abs(\n' + '    ((fract((tmpvar_15 * 0.5)) * 2.0) - 1.0)\n' + '  )));\n' + '  uv_1 = tmpvar_16;\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = sin(((tmpvar_16.y * 31.0) + (0.59 * time)));\n' + '  tmpvar_17.y = sin(((tmpvar_16.x * 26.0) + (0.37 * time)));\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18 = (tmpvar_16 + (0.03 * tmpvar_17));\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_main, tmpvar_16);\n' + '  ret_2 = tmpvar_19.xyz;\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_main, tmpvar_18);\n' + '  ret_2 = (max (ret_2, tmpvar_20.xyz) * 1.33);\n' + '   vec4 tmpvar_21;\n' + '   vec2 P_22;\n' + '  P_22 = ((tmpvar_16 + tmpvar_18) / 2.0);\n' + '  tmpvar_21 = texture2D (sampler_blur1, P_22);\n' + '  ret_2 = (pow (vec3(dot (ret_2, vec3(0.32, 0.49, 0.29))), vec3(2.5, 2.5, 2.5)) + ((tmpvar_21.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23.w = 1.0;\n' + '  tmpvar_23.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_23;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('c_x = 0.5;\n' + 'c_y = 0.5;\n' + 'v=0.05;'),
	'frame_eqs_str' : ('q1 = aspectx;\n' + 'q2 = aspecty;\n' + 'rot = 0;\n' + 'zoom = 1;\n' + 'warp = 0;\n' + 'num0=beat*(abs(num-num_att)+pump)+bnot(beat)*num0;\n' + 'pump=beat*(sin(t)*.1+.1)+bnot(beat)*pump;\n' + 'pump=pump*.98;\n' + 'num_b0=num_b;\n' + 'num=abs((bass-bass_att)+(mid-mid_att)+(treb-treb_att));\n' + 'num_att=num_att*.95+num*.05;\n' + 'num_b=above(num,1-pump)*above(abs(num-num_att),num0);\n' + 'beat=bnot(equal(num_b0,num_b));\n' + 't=t+num*.1;\n' + 'r = if(beat, 0.02*(int(rand(200))-100)*0.01,r);\n' + 'rot = r;\n' + 'c_x = if(beat,0.5 + 0.5*(int(rand(200))-100)*0.01, c_x);\n' + 'c_y = if(beat,0.5 + 0.5*(int(rand(200))-100)*0.01, c_y);\n' + 'v = if(beat,0.035 + 0.025*(int(rand(200))-100)*0.01, v);\n' + 'q3 = c_x;\n' + 'q4 = c_y;\n' + 'q5 = v;\n' + 'q6 = beat;\n' + 'bb = bb*0.98 + bass*0.5;\n' + 'mm = mm*0.98 + mid*0.5;\n' + 'tt = tt*0.98 + treb*0.5;\n' + 'mx = max(max(bb,mm),tt);\n' + 'mn = min(min(bb,mm),tt);\n' + 'h1 = (bb-mn)/(mx-mn);\n' + 'h2 = (mm-mn)/(mx-mn);\n' + 'h3 = (tt-mn)/(mx-mn);\n' + 'v = 0.2/fps;\n' + 'bm = bm + (h1-h2)*v;\n' + 'mt = mt + (h2-h3)*v;\n' + 'bt = bt + (h1-h3)*v;\n' + 'w = bm;\n' + 'q3 = sin(w);\n' + 'q4 = cos(w);\n' + 'q10 = bm;\n' + 'q11 = mt;\n' + 'q12 = bt;'),
	'pixel_eqs_str' : ('d = (pow(sqrt(sqr(x-q3)+sqr(y-q4)),0.5)-0);\n' + 'v = q5;\n' + 'dx = v*(x-q3)*d;\n' + 'dy = v*(y-q4)*d;'),
};

return pmap;
});
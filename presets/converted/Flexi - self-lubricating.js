define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.02,
		ib_g : 0.25,
		mv_x : 0.0,
		warpscale : 7.98,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 2.997,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.20929,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.02,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.007,
		ob_size : 0.5,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 0.274,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99951,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.37,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.5,
		decay : 0.995,
		wave_a : 0.9,
		ob_g : 0.12,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 1.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.tt = 0;
m.a = 0;
m.mn = 0;
m.q2 = 0;
m.b = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.mt = 0;
m.h1 = 0;
m.h2 = 0;
m.bm = 0;
m.h3 = 0;
m.mx = 0;
m.bt = 0;
m.q26 = 0;
m.startx = 0;
m.v = 0;
m.q27 = 0;
m.starty = 0;
m.w = 0;
m.x1 = 0;
m.y1 = 0.001;
m.z1 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = 1;
m.wave_a = 0;
m.startx = 0.3;
m.starty = 0.3;
m.a = 0.55;
m.b = 0.05;
m.d = 0.09;
m.q1 = m.aspectx;
m.q2 = m.aspecty;
m.q5 = m.a;
m.q6 = m.b;
m.q7 = m.d;
m.bb = ((m.bb*0.99)+(m.bass*0.02));
m.mm = ((m.mm*0.99)+(m.mid*0.02));
m.tt = ((m.tt*0.99)+(m.treb*0.02));
m.mx = Math.max(Math.max(m.bb, m.mm), m.tt);
m.mn = Math.min(Math.min(m.bb, m.mm), m.tt);
m.h1 = div((m.bb-m.mn),(m.mx-m.mn));
m.h2 = div((m.mm-m.mn),(m.mx-m.mn));
m.h3 = div((m.tt-m.mn),(m.mx-m.mn));
m.v = div(0.4,m.fps);
m.bm = (m.bm+((m.h1-m.h2)*m.v));
m.mt = (m.mt+((m.h2-m.h3)*m.v));
m.bt = (m.bt+((m.h1-m.h3)*m.v));
m.w = (m.bm*0.25);
m.q3 = Math.sin(m.w);
m.q4 = Math.cos(m.w);
m.q26 = (m.mt*2);
m.q27 = (m.bt*2);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.x = (0.5+((m.x-0.51)*m.q1));
m.y = (0.5-((m.y-0.5)*m.q2));
m.dx = ((m.x*(1-m.x))-div(((m.q5*m.x)*m.y),(m.x+m.q6)));
m.dy = ((-m.q7*m.y)*(1-div(m.y,m.x)));
m.dx = div((-m.dx*0.02),m.q1);
m.dy = div((-m.dy*0.02),m.q2);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.97,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 0.08,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.4,
			thick : 0.0,
			sep : 60.0,
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
			b : 0.3,
			g : 0.3,
			scaling : 0.07,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.3,
			smoothing : 0.65,
			thick : 0.0,
			sep : 20.0,
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
			b : 0.3,
			g : 0.3,
			scaling : 0.07,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.3,
			smoothing : 0.5,
			thick : 0.0,
			sep : 30.0,
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
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 60.0,
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
			r2 : 1.0,
			a : 0.97,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.763,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 1.3,
			x : 1.0,
			y : 0.63,
			ang : 0.0,
			sides : 99.0,
			border_r : 0.0,
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
			a : 0.97,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.225,
			x : 0.5,
			y : 0.55,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.0,
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
			a : 0.97,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 2.068,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.97,
			r : 1.0,
			border_g : 1.0,
			rad : 1.3,
			x : 0.85,
			y : 0.0,
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
			a : 0.97,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 100.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.97,
			r : 1.0,
			border_g : 1.0,
			rad : 0.733,
			x : 0.02,
			y : 0.5,
			ang : 1.319,
			sides : 3.0,
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
	'warp' : ('shader_body {\n' + '   vec2 my_uv2_1;\n' + '   vec2 dz_2;\n' + '   vec3 ret_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv + (vec2(1.0, 0.0) * tmpvar_4));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv - (vec2(1.0, 0.0) * tmpvar_4));\n' + '  tmpvar_7 = texture2D (sampler_blur1, P_8);\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = ((2.0 * (\n' + '    (tmpvar_5.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_7.xyz * scale1)\n' + '   + bias1)));\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv + (vec2(0.0, 1.0) * tmpvar_4));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (uv - (vec2(0.0, 1.0) * tmpvar_4));\n' + '  tmpvar_12 = texture2D (sampler_blur1, P_13);\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = ((2.0 * (\n' + '    (tmpvar_10.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_12.xyz * scale1)\n' + '   + bias1)));\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15.x = tmpvar_9.x;\n' + '  tmpvar_15.y = tmpvar_14.x;\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = (tmpvar_15 * texsize.zw);\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv - tmpvar_16);\n' + '  tmpvar_17 = texture2D (sampler_fw_main, P_18);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur3, uv);\n' + '   vec4 tmpvar_20;\n' + '   vec2 P_21;\n' + '  P_21 = (uv + tmpvar_16);\n' + '  tmpvar_20 = texture2D (sampler_blur1, P_21);\n' + '  ret_3.x = (tmpvar_17.x - ((\n' + '    (tmpvar_19.xyz * scale3)\n' + '   + bias3).x - (\n' + '    (tmpvar_20.xyz * scale1)\n' + '   + bias1).x));\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22.x = tmpvar_9.y;\n' + '  tmpvar_22.y = tmpvar_14.y;\n' + '  dz_2 = (-(tmpvar_22) * texsize.zw);\n' + '   vec4 tmpvar_23;\n' + '   vec2 P_24;\n' + '  P_24 = (uv - dz_2);\n' + '  tmpvar_23 = texture2D (sampler_fw_main, P_24);\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_blur2, uv);\n' + '   vec4 tmpvar_26;\n' + '   vec2 P_27;\n' + '  P_27 = (uv + dz_2);\n' + '  tmpvar_26 = texture2D (sampler_blur1, P_27);\n' + '  ret_3.y = ((tmpvar_23.y - 0.06) - ((\n' + '    ((tmpvar_25.xyz * scale2) + bias2)\n' + '  .y - \n' + '    ((tmpvar_26.xyz * scale1) + bias1)\n' + '  .y) * 1.3));\n' + '   vec2 tmpvar_28;\n' + '  tmpvar_28 = ((uv_orig - 0.5) * (1.8 - (\n' + '    (bass_att - treb_att)\n' + '   * 0.015)));\n' + '   vec2 tmpvar_29;\n' + '  tmpvar_29.x = ((tmpvar_28.x * tmpvar_28.x) - (tmpvar_28.y * tmpvar_28.y));\n' + '  tmpvar_29.y = ((2.0 * tmpvar_28.x) * tmpvar_28.y);\n' + '  my_uv2_1 = (tmpvar_29 + vec2(0.28, 0.4));\n' + '   vec4 tmpvar_30;\n' + '   vec2 P_31;\n' + '  P_31 = (my_uv2_1 + (vec2(1.0, 0.0) * tmpvar_4));\n' + '  tmpvar_30 = texture2D (sampler_blur1, P_31);\n' + '   vec4 tmpvar_32;\n' + '   vec2 P_33;\n' + '  P_33 = (my_uv2_1 - (vec2(1.0, 0.0) * tmpvar_4));\n' + '  tmpvar_32 = texture2D (sampler_blur1, P_33);\n' + '   vec4 tmpvar_34;\n' + '   vec2 P_35;\n' + '  P_35 = (my_uv2_1 + (vec2(0.0, 1.0) * tmpvar_4));\n' + '  tmpvar_34 = texture2D (sampler_blur1, P_35);\n' + '   vec4 tmpvar_36;\n' + '   vec2 P_37;\n' + '  P_37 = (my_uv2_1 - (vec2(0.0, 1.0) * tmpvar_4));\n' + '  tmpvar_36 = texture2D (sampler_blur1, P_37);\n' + '   vec2 tmpvar_38;\n' + '  tmpvar_38.x = ((2.0 * (\n' + '    (tmpvar_30.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_32.xyz * scale1)\n' + '   + bias1))).z;\n' + '  tmpvar_38.y = ((2.0 * (\n' + '    (tmpvar_34.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_36.xyz * scale1)\n' + '   + bias1))).z;\n' + '  dz_2 = ((-(tmpvar_38) * texsize.zw) * 0.8);\n' + '   vec2 tmpvar_39;\n' + '  tmpvar_39 = clamp ((my_uv2_1 + dz_2), 0.0, 1.0);\n' + '   vec4 tmpvar_40;\n' + '  tmpvar_40 = texture2D (sampler_main, tmpvar_39);\n' + '  ret_3.z = (tmpvar_40.z - 0.014);\n' + '   vec4 tmpvar_41;\n' + '  tmpvar_41.w = 1.0;\n' + '  tmpvar_41.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_41;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('uniform highp vec2 d;\n' + 'uniform highp vec3 dx;\n' + 'uniform highp vec3 dy;\n' + 'highp vec2 xlat_mutabled;\n' + 'highp vec3 xlat_mutabledx;\n' + 'highp vec3 xlat_mutabledy;\n' + 'shader_body {\n' + '  xlat_mutabled = d;\n' + '  xlat_mutabledx = dx;\n' + '  xlat_mutabledy = dy;\n' + '   vec2 uv_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = ((uv - 0.5) * aspect.xy);\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3.x = ((_qa.w * tmpvar_2.x) - (_qa.z * tmpvar_2.y));\n' + '  tmpvar_3.y = ((_qa.z * tmpvar_2.x) + (_qa.w * tmpvar_2.y));\n' + '  uv_1 = (0.5 - (tmpvar_3 * 2.0));\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = _qg.y;\n' + '  tmpvar_4.y = (0.1 * _qg.z);\n' + '   vec2 numerator_5;\n' + '  numerator_5 = (uv_1 - vec2(0.0, 0.5));\n' + '   vec2 denominator_6;\n' + '  denominator_6 = (uv_1 - vec2(1.0, 0.5));\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7.x = ((numerator_5.x * denominator_6.x) + (numerator_5.y * denominator_6.y));\n' + '  tmpvar_7.y = ((numerator_5.y * denominator_6.x) - (numerator_5.x * denominator_6.y));\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = (((tmpvar_7 / \n' + '    ((denominator_6.x * denominator_6.x) + (denominator_6.y * denominator_6.y))\n' + '  ) + 0.5) - vec2(0.5, 0.5));\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = sqrt(dot (tmpvar_8, tmpvar_8));\n' + '   float tmpvar_10;\n' + '   float tmpvar_11;\n' + '  tmpvar_11 = (min (abs(\n' + '    (tmpvar_8.x / tmpvar_8.y)\n' + '  ), 1.0) / max (abs(\n' + '    (tmpvar_8.x / tmpvar_8.y)\n' + '  ), 1.0));\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = (tmpvar_11 * tmpvar_11);\n' + '  tmpvar_12 = (((\n' + '    ((((\n' + '      ((((-0.01213232 * tmpvar_12) + 0.05368138) * tmpvar_12) - 0.1173503)\n' + '     * tmpvar_12) + 0.1938925) * tmpvar_12) - 0.3326756)\n' + '   * tmpvar_12) + 0.9999793) * tmpvar_11);\n' + '  tmpvar_12 = (tmpvar_12 + (float(\n' + '    (abs((tmpvar_8.x / tmpvar_8.y)) > 1.0)\n' + '  ) * (\n' + '    (tmpvar_12 * -2.0)\n' + '   + 1.570796)));\n' + '  tmpvar_10 = (tmpvar_12 * sign((tmpvar_8.x / tmpvar_8.y)));\n' + '  if ((abs(tmpvar_8.y) > (1e-08 * abs(tmpvar_8.x)))) {\n' + '    if ((tmpvar_8.y < 0.0)) {\n' + '      if ((tmpvar_8.x >= 0.0)) {\n' + '        tmpvar_10 += 3.141593;\n' + '      } else {\n' + '        tmpvar_10 = (tmpvar_10 - 3.141593);\n' + '      };\n' + '    };\n' + '  } else {\n' + '    tmpvar_10 = (sign(tmpvar_8.x) * 1.570796);\n' + '  };\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = ((tmpvar_10 * 4.0) + _qg.y);\n' + '  tmpvar_13.y = ((0.55 * log(tmpvar_9)) + tmpvar_4.y);\n' + '  uv_1 = (0.5 + ((1.0 - \n' + '    abs(((fract(\n' + '      (vec2(0.07957745, 0.5) * tmpvar_13)\n' + '    ) * 2.0) - 1.0))\n' + '  ) - 0.5));\n' + '   vec2 tmpvar_14;\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15 = (uv_1 - vec2(0.5, 0.5));\n' + '   float tmpvar_16;\n' + '  tmpvar_16 = sqrt(dot (tmpvar_15, tmpvar_15));\n' + '   float tmpvar_17;\n' + '   float tmpvar_18;\n' + '  tmpvar_18 = (min (abs(\n' + '    (tmpvar_15.x / tmpvar_15.y)\n' + '  ), 1.0) / max (abs(\n' + '    (tmpvar_15.x / tmpvar_15.y)\n' + '  ), 1.0));\n' + '   float tmpvar_19;\n' + '  tmpvar_19 = (tmpvar_18 * tmpvar_18);\n' + '  tmpvar_19 = (((\n' + '    ((((\n' + '      ((((-0.01213232 * tmpvar_19) + 0.05368138) * tmpvar_19) - 0.1173503)\n' + '     * tmpvar_19) + 0.1938925) * tmpvar_19) - 0.3326756)\n' + '   * tmpvar_19) + 0.9999793) * tmpvar_18);\n' + '  tmpvar_19 = (tmpvar_19 + (float(\n' + '    (abs((tmpvar_15.x / tmpvar_15.y)) > 1.0)\n' + '  ) * (\n' + '    (tmpvar_19 * -2.0)\n' + '   + 1.570796)));\n' + '  tmpvar_17 = (tmpvar_19 * sign((tmpvar_15.x / tmpvar_15.y)));\n' + '  if ((abs(tmpvar_15.y) > (1e-08 * abs(tmpvar_15.x)))) {\n' + '    if ((tmpvar_15.y < 0.0)) {\n' + '      if ((tmpvar_15.x >= 0.0)) {\n' + '        tmpvar_17 += 3.141593;\n' + '      } else {\n' + '        tmpvar_17 = (tmpvar_17 - 3.141593);\n' + '      };\n' + '    };\n' + '  } else {\n' + '    tmpvar_17 = (sign(tmpvar_15.x) * 1.570796);\n' + '  };\n' + '   float tmpvar_20;\n' + '  tmpvar_20 = clamp ((1.0 - (tmpvar_16 / 0.5)), 0.0, 1.0);\n' + '   float tmpvar_21;\n' + '   float tmpvar_22;\n' + '  tmpvar_22 = (tmpvar_20 - 1.0);\n' + '  tmpvar_21 = sqrt((1.0 - (tmpvar_22 * tmpvar_22)));\n' + '   float vec_y_23;\n' + '  vec_y_23 = (1.0 - tmpvar_20);\n' + '   float tmpvar_24;\n' + '   float tmpvar_25;\n' + '  tmpvar_25 = (min (abs(\n' + '    (vec_y_23 / tmpvar_21)\n' + '  ), 1.0) / max (abs(\n' + '    (vec_y_23 / tmpvar_21)\n' + '  ), 1.0));\n' + '   float tmpvar_26;\n' + '  tmpvar_26 = (tmpvar_25 * tmpvar_25);\n' + '  tmpvar_26 = (((\n' + '    ((((\n' + '      ((((-0.01213232 * tmpvar_26) + 0.05368138) * tmpvar_26) - 0.1173503)\n' + '     * tmpvar_26) + 0.1938925) * tmpvar_26) - 0.3326756)\n' + '   * tmpvar_26) + 0.9999793) * tmpvar_25);\n' + '  tmpvar_26 = (tmpvar_26 + (float(\n' + '    (abs((vec_y_23 / tmpvar_21)) > 1.0)\n' + '  ) * (\n' + '    (tmpvar_26 * -2.0)\n' + '   + 1.570796)));\n' + '  tmpvar_24 = (tmpvar_26 * sign((vec_y_23 / tmpvar_21)));\n' + '  if ((abs(tmpvar_21) > (1e-08 * abs(vec_y_23)))) {\n' + '    if ((tmpvar_21 < 0.0)) {\n' + '      if ((vec_y_23 >= 0.0)) {\n' + '        tmpvar_24 += 3.141593;\n' + '      } else {\n' + '        tmpvar_24 = (tmpvar_24 - 3.141593);\n' + '      };\n' + '    };\n' + '  } else {\n' + '    tmpvar_24 = (sign(vec_y_23) * 1.570796);\n' + '  };\n' + '   float x_27;\n' + '  x_27 = (sin(tmpvar_24) / 3.0);\n' + '   float tmpvar_28;\n' + '  tmpvar_28 = (tmpvar_24 - (sign(x_27) * (1.570796 - \n' + '    (sqrt((1.0 - abs(x_27))) * (1.570796 + (abs(x_27) * (-0.2146018 + \n' + '      (abs(x_27) * (0.08656672 + (abs(x_27) * -0.03102955)))\n' + '    ))))\n' + '  )));\n' + '   vec2 tmpvar_29;\n' + '  tmpvar_29.x = sin(tmpvar_17);\n' + '  tmpvar_29.y = cos(tmpvar_17);\n' + '   vec2 x_30;\n' + '  x_30 = (uv_1 - vec2(0.5, 0.5));\n' + '  bool tmpvar_31;\n' + '  tmpvar_31 = (sqrt(dot (x_30, x_30)) < 0.5);\n' + '  tmpvar_14 = ((float(\n' + '    !(tmpvar_31)\n' + '  ) * uv_1) + (float(tmpvar_31) * (vec2(0.5, 0.5) + \n' + '    ((tmpvar_29 * ((1.0 - tmpvar_20) - (\n' + '      (sin(tmpvar_28) * tmpvar_21)\n' + '     / \n' + '      cos(tmpvar_28)\n' + '    ))) * 0.5)\n' + '  )));\n' + '  uv_1 = tmpvar_14;\n' + '   vec2 tmpvar_32;\n' + '  tmpvar_32.x = _qg.y;\n' + '  tmpvar_32.y = (0.1 * _qg.z);\n' + '   vec2 numerator_33;\n' + '  numerator_33 = (tmpvar_14 - vec2(0.0, 0.5));\n' + '   vec2 denominator_34;\n' + '  denominator_34 = (tmpvar_14 - vec2(1.0, 0.5));\n' + '   vec2 tmpvar_35;\n' + '  tmpvar_35.x = ((numerator_33.x * denominator_34.x) + (numerator_33.y * denominator_34.y));\n' + '  tmpvar_35.y = ((numerator_33.y * denominator_34.x) - (numerator_33.x * denominator_34.y));\n' + '   vec2 tmpvar_36;\n' + '  tmpvar_36 = (((tmpvar_35 / \n' + '    ((denominator_34.x * denominator_34.x) + (denominator_34.y * denominator_34.y))\n' + '  ) + 0.5) - vec2(0.5, 0.5));\n' + '   float tmpvar_37;\n' + '  tmpvar_37 = sqrt(dot (tmpvar_36, tmpvar_36));\n' + '   float tmpvar_38;\n' + '   float tmpvar_39;\n' + '  tmpvar_39 = (min (abs(\n' + '    (tmpvar_36.x / tmpvar_36.y)\n' + '  ), 1.0) / max (abs(\n' + '    (tmpvar_36.x / tmpvar_36.y)\n' + '  ), 1.0));\n' + '   float tmpvar_40;\n' + '  tmpvar_40 = (tmpvar_39 * tmpvar_39);\n' + '  tmpvar_40 = (((\n' + '    ((((\n' + '      ((((-0.01213232 * tmpvar_40) + 0.05368138) * tmpvar_40) - 0.1173503)\n' + '     * tmpvar_40) + 0.1938925) * tmpvar_40) - 0.3326756)\n' + '   * tmpvar_40) + 0.9999793) * tmpvar_39);\n' + '  tmpvar_40 = (tmpvar_40 + (float(\n' + '    (abs((tmpvar_36.x / tmpvar_36.y)) > 1.0)\n' + '  ) * (\n' + '    (tmpvar_40 * -2.0)\n' + '   + 1.570796)));\n' + '  tmpvar_38 = (tmpvar_40 * sign((tmpvar_36.x / tmpvar_36.y)));\n' + '  if ((abs(tmpvar_36.y) > (1e-08 * abs(tmpvar_36.x)))) {\n' + '    if ((tmpvar_36.y < 0.0)) {\n' + '      if ((tmpvar_36.x >= 0.0)) {\n' + '        tmpvar_38 += 3.141593;\n' + '      } else {\n' + '        tmpvar_38 = (tmpvar_38 - 3.141593);\n' + '      };\n' + '    };\n' + '  } else {\n' + '    tmpvar_38 = (sign(tmpvar_36.x) * 1.570796);\n' + '  };\n' + '   vec2 tmpvar_41;\n' + '  tmpvar_41.x = ((tmpvar_38 * 4.0) + _qg.y);\n' + '  tmpvar_41.y = ((0.55 * log(tmpvar_37)) + tmpvar_32.y);\n' + '  uv_1 = (0.5 + ((1.0 - \n' + '    abs(((fract(\n' + '      ((tmpvar_41 * vec2(0.1591549, 1.0)).yx * 0.5)\n' + '    ) * 2.0) - 1.0))\n' + '  ) - 0.5));\n' + '  xlat_mutabled = (texsize.zw * 1.5);\n' + '   vec4 tmpvar_42;\n' + '   vec2 P_43;\n' + '  P_43 = (uv_1 + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_42 = texture2D (sampler_main, P_43);\n' + '   vec4 tmpvar_44;\n' + '   vec2 P_45;\n' + '  P_45 = (uv_1 - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_44 = texture2D (sampler_main, P_45);\n' + '  xlat_mutabledx = (tmpvar_42.xyz - tmpvar_44.xyz);\n' + '   vec4 tmpvar_46;\n' + '   vec2 P_47;\n' + '  P_47 = (uv_1 + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_46 = texture2D (sampler_main, P_47);\n' + '   vec4 tmpvar_48;\n' + '   vec2 P_49;\n' + '  P_49 = (uv_1 - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_48 = texture2D (sampler_main, P_49);\n' + '  xlat_mutabledy = (tmpvar_46.xyz - tmpvar_48.xyz);\n' + '   vec2 x_50;\n' + '  x_50 = ((uv_1 * vec2(1.0, -1.0)) + vec2(0.0, 1.0));\n' + '   vec2 tmpvar_51;\n' + '  tmpvar_51.x = xlat_mutabledx.z;\n' + '  tmpvar_51.y = xlat_mutabledy.z;\n' + '   vec4 tmpvar_52;\n' + '   vec2 P_53;\n' + '  P_53 = (uv_1 + ((tmpvar_51 * texsize.zw) * 128.0));\n' + '  tmpvar_52 = texture2D (sampler_blur1, P_53);\n' + '   vec2 tmpvar_54;\n' + '  tmpvar_54.x = xlat_mutabledx.z;\n' + '  tmpvar_54.y = xlat_mutabledy.z;\n' + '   vec2 P_55;\n' + '  P_55 = (uv_1 - ((tmpvar_54 * texsize.zw) * 32.0));\n' + '   vec3 tmpvar_56;\n' + '  tmpvar_56 = vec3(((1.0 - texture2D (sampler_main, uv_1).z) * (0.4 + (texture2D (sampler_main, P_55).x * 0.6))));\n' + '   vec2 tmpvar_57;\n' + '  tmpvar_57.x = xlat_mutabledx.y;\n' + '  tmpvar_57.y = xlat_mutabledy.y;\n' + '   vec4 tmpvar_58;\n' + '  tmpvar_58 = texture2D (sampler_main, uv_1);\n' + '   vec2 tmpvar_59;\n' + '  tmpvar_59.x = xlat_mutabledx.z;\n' + '  tmpvar_59.y = xlat_mutabledy.z;\n' + '   vec4 tmpvar_60;\n' + '   vec2 P_61;\n' + '  P_61 = (uv_1 - ((tmpvar_59 * texsize.zw) * 32.0));\n' + '  tmpvar_60 = texture2D (sampler_blur1, P_61);\n' + '   vec4 tmpvar_62;\n' + '  tmpvar_62 = texture2D (sampler_main, uv_1);\n' + '   vec4 tmpvar_63;\n' + '  tmpvar_63.w = 1.0;\n' + '  tmpvar_63.xyz = (mix (mix (\n' + '    mix (vec3(1.0, 0.6, 0.08), vec3(0.1, 0.1, 0.3), vec3(((sqrt(\n' + '      dot (x_50, x_50)\n' + '    ) - (\n' + '      (-(xlat_mutabledx.x) + xlat_mutabledy.x)\n' + '     * 8.0)) + ((1.0 - \n' + '      ((tmpvar_52.xyz * scale1) + bias1)\n' + '    .x) * 2.0))))\n' + '  , vec3(1.8, 1.8, 1.8), tmpvar_56), vec3(2.0, 2.0, 2.0), vec3((\n' + '    sqrt(dot (tmpvar_57, tmpvar_57))\n' + '   * \n' + '    (0.2 + tmpvar_58.x)\n' + '  ))) * (vec3(1.0, 1.0, 1.0) - vec3((\n' + '    ((tmpvar_60.xyz * scale1) + bias1)\n' + '  .y * \n' + '    (0.5 + (tmpvar_62.x * 0.5))\n' + '  ))));\n' + '  vec4 ret4 = tmpvar_63;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0;\n' + 'y1= .001;\n' + 'z1 = 0;'),
	'frame_eqs_str' : ('zoom = 1;\n' + 'wave_a = 0;\n' + 'startx = 0.3;\n' + 'starty = 0.3;\n' + 'a = 0.55;\n' + 'b = 0.05;\n' + 'd = 0.09;\n' + 'q1 = aspectx;\n' + 'q2 = aspecty;\n' + 'q5 = a;\n' + 'q6 = b;\n' + 'q7 = d;\n' + 'bb = bb*0.99 + bass*0.02;\n' + 'mm = mm*0.99 + mid*0.02;\n' + 'tt = tt*0.99 + treb*0.02;\n' + 'mx = max(max(bb,mm),tt);\n' + 'mn = min(min(bb,mm),tt);\n' + 'h1 = (bb-mn)/(mx-mn);\n' + 'h2 = (mm-mn)/(mx-mn);\n' + 'h3 = (tt-mn)/(mx-mn);\n' + 'v = 0.4/fps;\n' + 'bm = bm + (h1-h2)*v;\n' + 'mt = mt + (h2-h3)*v;\n' + 'bt = bt + (h1-h3)*v;\n' + 'w = bm*0.25;\n' + 'q3 = sin(w);\n' + 'q4 = cos(w);\n' + 'q26 = mt*2;\n' + 'q27 = bt*2;'),
	'pixel_eqs_str' : ('x = 0.5 + (x-0.51)*q1;\n' + 'y = 0.5 - (y-0.5)*q2;\n' + 'dx = (x*(1-x)-q5*x*y/(x+q6));\n' + 'dy = -q7*y*(1-y/x);\n' + 'dx = -dx*0.02/q1;\n' + 'dy = -dy*0.02/q2;'),
};

return pmap;
});
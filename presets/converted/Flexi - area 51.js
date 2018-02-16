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
		b1ed : 0.2,
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
		rating : 5.0,
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
m.q10 = 0;
m.q11 = 0;
m.bt = 0;
m.q12 = 0;
m.startx = 0;
m.v = 0;
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
m.v = div(0.1333,m.fps);
m.bm = (m.bm+((m.h1-m.h2)*m.v));
m.mt = (m.mt+((m.h2-m.h3)*m.v));
m.bt = (m.bt+((m.h1-m.h3)*m.v));
m.w = (m.bm*2);
m.q3 = Math.sin(m.w);
m.q4 = Math.cos(m.w);
m.q10 = m.bm;
m.q11 = m.mt;
m.q12 = m.bt;
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
	'warp' : ('shader_body {\n' + '   vec2 my_uv2_1;\n' + '   vec2 dz_2;\n' + '   vec3 ret_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv + (vec2(1.0, 0.0) * tmpvar_4));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv - (vec2(1.0, 0.0) * tmpvar_4));\n' + '  tmpvar_7 = texture2D (sampler_blur1, P_8);\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = ((2.0 * (\n' + '    (tmpvar_5.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_7.xyz * scale1)\n' + '   + bias1)));\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv + (vec2(0.0, 1.0) * tmpvar_4));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (uv - (vec2(0.0, 1.0) * tmpvar_4));\n' + '  tmpvar_12 = texture2D (sampler_blur1, P_13);\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = ((2.0 * (\n' + '    (tmpvar_10.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_12.xyz * scale1)\n' + '   + bias1)));\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15.x = tmpvar_9.x;\n' + '  tmpvar_15.y = tmpvar_14.x;\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = (tmpvar_15 * texsize.zw);\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv - tmpvar_16);\n' + '  tmpvar_17 = texture2D (sampler_fw_main, P_18);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur3, uv);\n' + '   vec4 tmpvar_20;\n' + '   vec2 P_21;\n' + '  P_21 = (uv + tmpvar_16);\n' + '  tmpvar_20 = texture2D (sampler_blur1, P_21);\n' + '  ret_3.x = (tmpvar_17.x - ((\n' + '    (tmpvar_19.xyz * scale3)\n' + '   + bias3).x - (\n' + '    (tmpvar_20.xyz * scale1)\n' + '   + bias1).x));\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22.x = tmpvar_9.y;\n' + '  tmpvar_22.y = tmpvar_14.y;\n' + '  dz_2 = (-(tmpvar_22) * texsize.zw);\n' + '   vec4 tmpvar_23;\n' + '   vec2 P_24;\n' + '  P_24 = (uv - dz_2);\n' + '  tmpvar_23 = texture2D (sampler_fw_main, P_24);\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_blur2, uv);\n' + '   vec4 tmpvar_26;\n' + '   vec2 P_27;\n' + '  P_27 = (uv + dz_2);\n' + '  tmpvar_26 = texture2D (sampler_blur1, P_27);\n' + '  ret_3.y = ((tmpvar_23.y - 0.06) - ((\n' + '    ((tmpvar_25.xyz * scale2) + bias2)\n' + '  .y - \n' + '    ((tmpvar_26.xyz * scale1) + bias1)\n' + '  .y) * 1.3));\n' + '   vec2 tmpvar_28;\n' + '  tmpvar_28 = ((uv_orig - 0.5) * (1.8 - (\n' + '    (bass_att - treb_att)\n' + '   * 0.015)));\n' + '   vec2 tmpvar_29;\n' + '  tmpvar_29.x = ((tmpvar_28.x * tmpvar_28.x) - (tmpvar_28.y * tmpvar_28.y));\n' + '  tmpvar_29.y = ((2.0 * tmpvar_28.x) * tmpvar_28.y);\n' + '  my_uv2_1 = (tmpvar_29 + vec2(0.28, 0.4));\n' + '   vec4 tmpvar_30;\n' + '   vec2 P_31;\n' + '  P_31 = (my_uv2_1 + (vec2(1.0, 0.0) * tmpvar_4));\n' + '  tmpvar_30 = texture2D (sampler_blur1, P_31);\n' + '   vec4 tmpvar_32;\n' + '   vec2 P_33;\n' + '  P_33 = (my_uv2_1 - (vec2(1.0, 0.0) * tmpvar_4));\n' + '  tmpvar_32 = texture2D (sampler_blur1, P_33);\n' + '   vec4 tmpvar_34;\n' + '   vec2 P_35;\n' + '  P_35 = (my_uv2_1 + (vec2(0.0, 1.0) * tmpvar_4));\n' + '  tmpvar_34 = texture2D (sampler_blur1, P_35);\n' + '   vec4 tmpvar_36;\n' + '   vec2 P_37;\n' + '  P_37 = (my_uv2_1 - (vec2(0.0, 1.0) * tmpvar_4));\n' + '  tmpvar_36 = texture2D (sampler_blur1, P_37);\n' + '   vec2 tmpvar_38;\n' + '  tmpvar_38.x = ((2.0 * (\n' + '    (tmpvar_30.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_32.xyz * scale1)\n' + '   + bias1))).z;\n' + '  tmpvar_38.y = ((2.0 * (\n' + '    (tmpvar_34.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_36.xyz * scale1)\n' + '   + bias1))).z;\n' + '  dz_2 = (tmpvar_38 * texsize.zw);\n' + '   vec2 tmpvar_39;\n' + '  tmpvar_39 = clamp ((my_uv2_1 + dz_2), 0.0, 1.0);\n' + '   vec4 tmpvar_40;\n' + '  tmpvar_40 = texture2D (sampler_main, tmpvar_39);\n' + '  ret_3.z = (tmpvar_40.z - 0.014);\n' + '   vec4 tmpvar_41;\n' + '  tmpvar_41.w = 1.0;\n' + '  tmpvar_41.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_41;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 dy_1;\n' + '   vec3 dx_2;\n' + '   vec2 mirror_uv_3;\n' + '   vec3 ret_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = ((uv - 0.5) * aspect.xy);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = ((_qa.w * tmpvar_5.x) - (_qa.z * tmpvar_5.y));\n' + '  tmpvar_6.y = ((_qa.z * tmpvar_5.x) + (_qa.w * tmpvar_5.y));\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (0.5 - (tmpvar_6 * 2.0));\n' + '   vec2 numerator_8;\n' + '  numerator_8 = (tmpvar_7 - vec2(0.0, 0.5));\n' + '   vec2 denominator_9;\n' + '  denominator_9 = (tmpvar_7 - vec2(1.0, 0.5));\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10.x = ((numerator_8.x * denominator_9.x) + (numerator_8.y * denominator_9.y));\n' + '  tmpvar_10.y = ((numerator_8.y * denominator_9.x) - (numerator_8.x * denominator_9.y));\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = (((tmpvar_10 / \n' + '    ((denominator_9.x * denominator_9.x) + (denominator_9.y * denominator_9.y))\n' + '  ) + 0.5) - vec2(0.5, 0.5));\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = sqrt(dot (tmpvar_11, tmpvar_11));\n' + '   float tmpvar_13;\n' + '   float tmpvar_14;\n' + '  tmpvar_14 = (min (abs(\n' + '    (tmpvar_11.x / tmpvar_11.y)\n' + '  ), 1.0) / max (abs(\n' + '    (tmpvar_11.x / tmpvar_11.y)\n' + '  ), 1.0));\n' + '   float tmpvar_15;\n' + '  tmpvar_15 = (tmpvar_14 * tmpvar_14);\n' + '  tmpvar_15 = (((\n' + '    ((((\n' + '      ((((-0.01213232 * tmpvar_15) + 0.05368138) * tmpvar_15) - 0.1173503)\n' + '     * tmpvar_15) + 0.1938925) * tmpvar_15) - 0.3326756)\n' + '   * tmpvar_15) + 0.9999793) * tmpvar_14);\n' + '  tmpvar_15 = (tmpvar_15 + (float(\n' + '    (abs((tmpvar_11.x / tmpvar_11.y)) > 1.0)\n' + '  ) * (\n' + '    (tmpvar_15 * -2.0)\n' + '   + 1.570796)));\n' + '  tmpvar_13 = (tmpvar_15 * sign((tmpvar_11.x / tmpvar_11.y)));\n' + '  if ((abs(tmpvar_11.y) > (1e-08 * abs(tmpvar_11.x)))) {\n' + '    if ((tmpvar_11.y < 0.0)) {\n' + '      if ((tmpvar_11.x >= 0.0)) {\n' + '        tmpvar_13 += 3.141593;\n' + '      } else {\n' + '        tmpvar_13 = (tmpvar_13 - 3.141593);\n' + '      };\n' + '    };\n' + '  } else {\n' + '    tmpvar_13 = (sign(tmpvar_11.x) * 1.570796);\n' + '  };\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.x = (tmpvar_13 * 0.1591549);\n' + '  tmpvar_16.y = tmpvar_12;\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = ((tmpvar_16.x * 2.0) + _qc.z);\n' + '  tmpvar_17.y = ((0.3 * log(tmpvar_12)) + _qc.w);\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18 = (0.5 + (0.5 - abs(\n' + '    ((fract((tmpvar_17 * 0.5)) * 2.0) - 1.0)\n' + '  )));\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19 = (texsize.zw * 3.0);\n' + '   vec4 tmpvar_20;\n' + '   vec2 P_21;\n' + '  P_21 = (tmpvar_18 + (vec2(1.0, 0.0) * tmpvar_19));\n' + '  tmpvar_20 = texture2D (sampler_blur1, P_21);\n' + '   vec4 tmpvar_22;\n' + '   vec2 P_23;\n' + '  P_23 = (tmpvar_18 - (vec2(1.0, 0.0) * tmpvar_19));\n' + '  tmpvar_22 = texture2D (sampler_blur1, P_23);\n' + '   vec3 tmpvar_24;\n' + '  tmpvar_24 = ((2.0 * (\n' + '    (tmpvar_20.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_22.xyz * scale1)\n' + '   + bias1)));\n' + '   vec4 tmpvar_25;\n' + '   vec2 P_26;\n' + '  P_26 = (tmpvar_18 + (vec2(0.0, 1.0) * tmpvar_19));\n' + '  tmpvar_25 = texture2D (sampler_blur1, P_26);\n' + '   vec4 tmpvar_27;\n' + '   vec2 P_28;\n' + '  P_28 = (tmpvar_18 - (vec2(0.0, 1.0) * tmpvar_19));\n' + '  tmpvar_27 = texture2D (sampler_blur1, P_28);\n' + '   vec3 tmpvar_29;\n' + '  tmpvar_29 = ((2.0 * (\n' + '    (tmpvar_25.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_27.xyz * scale1)\n' + '   + bias1)));\n' + '   vec2 tmpvar_30;\n' + '  tmpvar_30.x = tmpvar_24.x;\n' + '  tmpvar_30.y = tmpvar_29.x;\n' + '  mirror_uv_3 = (tmpvar_18 + ((tmpvar_30 * texsize.zw) * 4.0));\n' + '   vec4 tmpvar_31;\n' + '  tmpvar_31 = texture2D (sampler_blur1, mirror_uv_3);\n' + '   vec4 tmpvar_32;\n' + '  tmpvar_32 = texture2D (sampler_blur2, mirror_uv_3);\n' + '   vec3 tmpvar_33;\n' + '  tmpvar_33 = texture2D (sampler_main, mirror_uv_3).xxx;\n' + '   vec4 tmpvar_34;\n' + '  tmpvar_34 = texture2D (sampler_main, mirror_uv_3);\n' + '   vec4 tmpvar_35;\n' + '  tmpvar_35 = texture2D (sampler_blur1, mirror_uv_3);\n' + '  ret_4 = ((mix (ret_4, vec3(1.0, 1.0, 1.0), \n' + '    ((((tmpvar_31.xyz * scale1) + bias1).x * (1.0 - (\n' + '      (tmpvar_32.xyz * scale2)\n' + '     + bias2).x)) * (pow (hue_shader, vec3(4.0, 4.0, 4.0)) * 1.4))\n' + '  ) * tmpvar_33) + ((\n' + '    (1.0 - tmpvar_34.x)\n' + '   * \n' + '    ((tmpvar_35.xyz * scale1) + bias1)\n' + '  .x) * vec3(3.0, 3.0, 3.0)));\n' + '   vec2 tmpvar_36;\n' + '  tmpvar_36.x = tmpvar_24.x;\n' + '  tmpvar_36.y = tmpvar_29.x;\n' + '  mirror_uv_3 = (mirror_uv_3 - ((tmpvar_36 * texsize.zw) * 24.0));\n' + '   vec4 tmpvar_37;\n' + '   vec2 P_38;\n' + '  P_38 = (mirror_uv_3 + (vec2(1.0, 0.0) * tmpvar_19));\n' + '  tmpvar_37 = texture2D (sampler_blur1, P_38);\n' + '   vec4 tmpvar_39;\n' + '   vec2 P_40;\n' + '  P_40 = (mirror_uv_3 - (vec2(1.0, 0.0) * tmpvar_19));\n' + '  tmpvar_39 = texture2D (sampler_blur1, P_40);\n' + '  dx_2 = ((2.0 * (\n' + '    (tmpvar_37.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_39.xyz * scale1)\n' + '   + bias1)));\n' + '   vec4 tmpvar_41;\n' + '   vec2 P_42;\n' + '  P_42 = (mirror_uv_3 + (vec2(0.0, 1.0) * tmpvar_19));\n' + '  tmpvar_41 = texture2D (sampler_blur1, P_42);\n' + '   vec4 tmpvar_43;\n' + '   vec2 P_44;\n' + '  P_44 = (mirror_uv_3 - (vec2(0.0, 1.0) * tmpvar_19));\n' + '  tmpvar_43 = texture2D (sampler_blur1, P_44);\n' + '  dy_1 = ((2.0 * (\n' + '    (tmpvar_41.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_43.xyz * scale1)\n' + '   + bias1)));\n' + '   vec2 tmpvar_45;\n' + '  tmpvar_45.x = -(dx_2.y);\n' + '  tmpvar_45.y = dy_1.y;\n' + '   vec2 tmpvar_46;\n' + '  tmpvar_46 = (tmpvar_45 * 0.25);\n' + '   vec4 tmpvar_47;\n' + '  tmpvar_47 = texture2D (sampler_main, mirror_uv_3);\n' + '   vec3 tmpvar_48;\n' + '  tmpvar_48 = mix (ret_4, vec3(1.0, 1.0, 1.0), (mix (vec3(1.0, 0.7, 0.2), vec3(0.15, 0.0, 0.5), vec3(\n' + '    ((((\n' + '      ((mirror_uv_3.x * 0.8) - mirror_uv_3.y)\n' + '     + 0.75) + tmpvar_46.x) + tmpvar_46.y) - 0.1)\n' + '  )) * tmpvar_47.y));\n' + '   vec2 tmpvar_49;\n' + '   vec2 tmpvar_50;\n' + '  tmpvar_50 = ((0.5 + (\n' + '    (uv - 0.5)\n' + '   * aspect.wz)) - vec2(0.5, 0.5));\n' + '   vec2 tmpvar_51;\n' + '  tmpvar_51.x = ((_qa.w * tmpvar_50.x) - (_qa.z * tmpvar_50.y));\n' + '  tmpvar_51.y = ((_qa.z * tmpvar_50.x) + (_qa.w * tmpvar_50.y));\n' + '  tmpvar_49 = (vec2(0.5, 0.5) + tmpvar_51);\n' + '  mirror_uv_3 = tmpvar_49.yx;\n' + '   vec4 tmpvar_52;\n' + '   vec2 P_53;\n' + '   vec2 tmpvar_54;\n' + '  tmpvar_54 = (vec2(1.0, 0.0) * texsize.zw);\n' + '  P_53 = (tmpvar_49.yx + tmpvar_54);\n' + '  tmpvar_52 = texture2D (sampler_main, P_53);\n' + '   vec4 tmpvar_55;\n' + '   vec2 P_56;\n' + '  P_56 = (tmpvar_49.yx - tmpvar_54);\n' + '  tmpvar_55 = texture2D (sampler_main, P_56);\n' + '  dx_2 = ((2.0 * tmpvar_52.xyz) - (2.0 * tmpvar_55.xyz));\n' + '   vec4 tmpvar_57;\n' + '   vec2 P_58;\n' + '   vec2 tmpvar_59;\n' + '  tmpvar_59 = (vec2(0.0, 1.0) * texsize.zw);\n' + '  P_58 = (tmpvar_49.yx + tmpvar_59);\n' + '  tmpvar_57 = texture2D (sampler_main, P_58);\n' + '   vec4 tmpvar_60;\n' + '   vec2 P_61;\n' + '  P_61 = (tmpvar_49.yx - tmpvar_59);\n' + '  tmpvar_60 = texture2D (sampler_main, P_61);\n' + '  dy_1 = ((2.0 * tmpvar_57.xyz) - (2.0 * tmpvar_60.xyz));\n' + '   vec2 tmpvar_62;\n' + '  tmpvar_62.x = dx_2.z;\n' + '  tmpvar_62.y = dy_1.z;\n' + '   vec2 P_63;\n' + '  P_63 = (tmpvar_49.yx - tmpvar_62);\n' + '   vec3 tmpvar_64;\n' + '  tmpvar_64 = vec3((1.0 - texture2D (sampler_main, P_63).z));\n' + '   vec3 tmpvar_65;\n' + '  tmpvar_65 = mix (tmpvar_48, vec3(0.9, 0.9, 1.0), tmpvar_64);\n' + '  ret_4 = tmpvar_65;\n' + '   vec4 tmpvar_66;\n' + '  tmpvar_66.w = 1.0;\n' + '  tmpvar_66.xyz = tmpvar_65;\n' + '  vec4 ret4 = tmpvar_66;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0;\n' + 'y1= .001;\n' + 'z1 = 0;'),
	'frame_eqs_str' : ('zoom = 1;\n' + 'wave_a = 0;\n' + 'startx = 0.3;\n' + 'starty = 0.3;\n' + 'a = 0.55;\n' + 'b = 0.05;\n' + 'd = 0.09;\n' + 'q1 = aspectx;\n' + 'q2 = aspecty;\n' + 'q5 = a;\n' + 'q6 = b;\n' + 'q7 = d;\n' + 'bb = bb*0.99 + bass*0.02;\n' + 'mm = mm*0.99 + mid*0.02;\n' + 'tt = tt*0.99 + treb*0.02;\n' + 'mx = max(max(bb,mm),tt);\n' + 'mn = min(min(bb,mm),tt);\n' + 'h1 = (bb-mn)/(mx-mn);\n' + 'h2 = (mm-mn)/(mx-mn);\n' + 'h3 = (tt-mn)/(mx-mn);\n' + 'v = 0.1333/fps;\n' + 'bm = bm + (h1-h2)*v;\n' + 'mt = mt + (h2-h3)*v;\n' + 'bt = bt + (h1-h3)*v;\n' + 'w = bm*2;\n' + 'q3 = sin(w);\n' + 'q4 = cos(w);\n' + 'q10 = bm;\n' + 'q11 = mt;\n' + 'q12 = bt;'),
	'pixel_eqs_str' : ('x = 0.5 + (x-0.51)*q1;\n' + 'y = 0.5 - (y-0.5)*q2;\n' + 'dx = (x*(1-x)-q5*x*y/(x+q6));\n' + 'dy = -q7*y*(1-y/x);\n' + 'dx = -dx*0.02/q1;\n' + 'dy = -dy*0.02/q2;'),
};

return pmap;
});
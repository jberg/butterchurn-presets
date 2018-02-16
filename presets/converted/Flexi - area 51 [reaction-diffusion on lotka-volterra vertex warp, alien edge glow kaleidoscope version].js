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
		rating : 3.0,
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
m.dm = 0;
m.h1 = 0;
m.h2 = 0;
m.bm = 0;
m.h3 = 0;
m.mx = 0;
m.q10 = 0;
m.q21 = 0;
m.q11 = 0;
m.q22 = 0;
m.bt = 0;
m.q12 = 0;
m.q23 = 0;
m.q24 = 0;
m.q25 = 0;
m.ddt = 0;
m.q26 = 0;
m.startx = 0;
m.v = 0;
m.q27 = 0;
m.starty = 0;
m.w = 0;
m.q28 = 0;
m.db = 0;
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
m.db = ((m.db*0.98)+(m.bass*0.2));
m.bb = (m.bb+(m.db*0.1));
m.ddt = ((m.ddt*0.98)+(m.treb*0.2));
m.tt = (m.tt+(m.ddt*0.1));
m.dm = ((m.dm*0.98)+(m.mid*0.2));
m.mm = (m.mm+(m.dm*0.1));
m.q23 = (0.5+(Math.sin(((m.bb-m.mm)*0.1))*0.25));
m.q24 = (0.5+(Math.sin(((m.tt-m.mm)*0.1))*0.25));
m.w = ((m.bb-m.tt)*0.1);
m.q26 = (0.25-((m.db-m.ddt)*0.025));
m.q21 = Math.sin(m.w);
m.q22 = Math.cos(m.w);
m.q27 = Math.sin(-m.w);
m.q28 = Math.cos(-m.w);
m.q25 = div(1,m.q26);
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
	'warp' : ('shader_body {\n' + '   vec2 dz_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = ((2.0 * (\n' + '    (tmpvar_4.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_6.xyz * scale1)\n' + '   + bias1)));\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv + (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (uv - (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = ((2.0 * (\n' + '    (tmpvar_9.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_11.xyz * scale1)\n' + '   + bias1)));\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = tmpvar_8.x;\n' + '  tmpvar_14.y = tmpvar_13.x;\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15 = (tmpvar_14 * texsize.zw);\n' + '   vec4 tmpvar_16;\n' + '   vec2 P_17;\n' + '  P_17 = (uv - tmpvar_15);\n' + '  tmpvar_16 = texture2D (sampler_fw_main, P_17);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_blur3, uv);\n' + '   vec4 tmpvar_19;\n' + '   vec2 P_20;\n' + '  P_20 = (uv + tmpvar_15);\n' + '  tmpvar_19 = texture2D (sampler_blur1, P_20);\n' + '  ret_2.x = (tmpvar_16.x - ((\n' + '    (2.0 * ((tmpvar_18.xyz * scale3) + bias3).x)\n' + '   - \n' + '    (2.0 * ((tmpvar_19.xyz * scale1) + bias1).x)\n' + '  ) * 0.5));\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21.x = tmpvar_8.y;\n' + '  tmpvar_21.y = tmpvar_13.y;\n' + '  dz_1 = (-(tmpvar_21) * texsize.zw);\n' + '   vec4 tmpvar_22;\n' + '   vec2 P_23;\n' + '  P_23 = (uv - dz_1);\n' + '  tmpvar_22 = texture2D (sampler_fw_main, P_23);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_blur2, uv);\n' + '   vec4 tmpvar_25;\n' + '   vec2 P_26;\n' + '  P_26 = (uv + dz_1);\n' + '  tmpvar_25 = texture2D (sampler_blur1, P_26);\n' + '  ret_2.y = ((tmpvar_22.y - 0.06) - ((\n' + '    (2.0 * ((tmpvar_24.xyz * scale2) + bias2).y)\n' + '   - \n' + '    (2.0 * ((tmpvar_25.xyz * scale1) + bias1).y)\n' + '  ) * 0.65));\n' + '   vec4 tmpvar_27;\n' + '   vec2 P_28;\n' + '  P_28 = (uv + (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_27 = texture2D (sampler_blur1, P_28);\n' + '   vec4 tmpvar_29;\n' + '   vec2 P_30;\n' + '  P_30 = (uv - (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_29 = texture2D (sampler_blur1, P_30);\n' + '   vec4 tmpvar_31;\n' + '   vec2 P_32;\n' + '  P_32 = (uv + (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_31 = texture2D (sampler_blur1, P_32);\n' + '   vec4 tmpvar_33;\n' + '   vec2 P_34;\n' + '  P_34 = (uv - (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_33 = texture2D (sampler_blur1, P_34);\n' + '   vec2 tmpvar_35;\n' + '  tmpvar_35.x = ((2.0 * (\n' + '    (tmpvar_27.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_29.xyz * scale1)\n' + '   + bias1))).z;\n' + '  tmpvar_35.y = ((2.0 * (\n' + '    (tmpvar_31.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_33.xyz * scale1)\n' + '   + bias1))).z;\n' + '  dz_1 = ((tmpvar_35 * texsize.zw) * 1.5);\n' + '   vec2 tmpvar_36;\n' + '  tmpvar_36 = ((uv_orig - 0.5) * (1.8 - (\n' + '    (bass_att - treb_att)\n' + '   * 0.015)));\n' + '   vec2 tmpvar_37;\n' + '  tmpvar_37.x = ((tmpvar_36.x * tmpvar_36.x) - (tmpvar_36.y * tmpvar_36.y));\n' + '  tmpvar_37.y = ((2.0 * tmpvar_36.x) * tmpvar_36.y);\n' + '   vec2 tmpvar_38;\n' + '  tmpvar_38 = clamp (((tmpvar_37 + vec2(0.28, 0.4)) + dz_1), 0.0, 1.0);\n' + '   vec4 tmpvar_39;\n' + '  tmpvar_39 = texture2D (sampler_main, tmpvar_38);\n' + '  ret_2.z = (tmpvar_39.z - 0.014);\n' + '   vec4 tmpvar_40;\n' + '  tmpvar_40.w = 1.0;\n' + '  tmpvar_40.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_40;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 dz_1;\n' + '   vec3 dy_2;\n' + '   vec3 dx_3;\n' + '   vec2 d_4;\n' + '   vec2 uv_rr_5;\n' + '   vec2 uv_r_6;\n' + '   vec3 ret_7;\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = ((uv - _qf.zw) * aspect.xy);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9.x = ((_qf.y * tmpvar_8.x) - (_qf.x * tmpvar_8.y));\n' + '  tmpvar_9.y = ((_qf.x * tmpvar_8.x) + (_qf.y * tmpvar_8.y));\n' + '  uv_r_6 = (_qg.x * tmpvar_9);\n' + '  uv_r_6 = (_qf.zw + (uv_r_6 * aspect.zw));\n' + '  uv_r_6 = (1.0 - abs((\n' + '    (fract((uv_r_6 * 0.5)) * 2.0)\n' + '   - 1.0)));\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = ((uv_r_6 - _qf.zw) * aspect.xy);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = ((_qg.w * tmpvar_10.x) - (_qg.z * tmpvar_10.y));\n' + '  tmpvar_11.y = ((_qg.z * tmpvar_10.x) + (_qg.w * tmpvar_10.y));\n' + '  uv_rr_5 = (_qg.y * tmpvar_11);\n' + '  uv_rr_5 = (_qf.zw + (uv_rr_5 * aspect.zw));\n' + '   vec2 P_12;\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = (vec2(1.0, 0.0) * texsize.zw);\n' + '  P_12 = (uv_rr_5 + tmpvar_13);\n' + '   vec2 P_14;\n' + '  P_14 = (uv_rr_5 - tmpvar_13);\n' + '   vec3 tmpvar_15;\n' + '  tmpvar_15 = (texture2D (sampler_main, P_12).xyz - texture2D (sampler_main, P_14).xyz);\n' + '  dx_3 = tmpvar_15;\n' + '   vec2 P_16;\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17 = (vec2(0.0, 1.0) * texsize.zw);\n' + '  P_16 = (uv_rr_5 + tmpvar_17);\n' + '   vec2 P_18;\n' + '  P_18 = (uv_rr_5 - tmpvar_17);\n' + '   vec3 tmpvar_19;\n' + '  tmpvar_19 = (texture2D (sampler_main, P_16).xyz - texture2D (sampler_main, P_18).xyz);\n' + '  dy_2 = tmpvar_19;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20.x = dx_3.y;\n' + '  tmpvar_20.y = dy_2.y;\n' + '  d_4 = (texsize.zw * 2.0);\n' + '   vec4 tmpvar_21;\n' + '   vec2 P_22;\n' + '  P_22 = (uv_rr_5 + (vec2(1.0, 0.0) * d_4));\n' + '  tmpvar_21 = texture2D (sampler_blur1, P_22);\n' + '   vec4 tmpvar_23;\n' + '   vec2 P_24;\n' + '  P_24 = (uv_rr_5 - (vec2(1.0, 0.0) * d_4));\n' + '  tmpvar_23 = texture2D (sampler_blur1, P_24);\n' + '  dx_3 = (((2.0 * \n' + '    ((tmpvar_21.xyz * scale1) + bias1)\n' + '  ) - (2.0 * \n' + '    ((tmpvar_23.xyz * scale1) + bias1)\n' + '  )) * 0.5);\n' + '   vec4 tmpvar_25;\n' + '   vec2 P_26;\n' + '  P_26 = (uv_rr_5 + (vec2(0.0, 1.0) * d_4));\n' + '  tmpvar_25 = texture2D (sampler_blur1, P_26);\n' + '   vec4 tmpvar_27;\n' + '   vec2 P_28;\n' + '  P_28 = (uv_rr_5 - (vec2(0.0, 1.0) * d_4));\n' + '  tmpvar_27 = texture2D (sampler_blur1, P_28);\n' + '  dy_2 = (((2.0 * \n' + '    ((tmpvar_25.xyz * scale1) + bias1)\n' + '  ) - (2.0 * \n' + '    ((tmpvar_27.xyz * scale1) + bias1)\n' + '  )) * 0.5);\n' + '   vec2 tmpvar_29;\n' + '  tmpvar_29.x = dx_3.y;\n' + '  tmpvar_29.y = dy_2.y;\n' + '  dz_1 = ((tmpvar_20 * 3.0) + tmpvar_29);\n' + '   vec4 tmpvar_30;\n' + '  tmpvar_30 = texture2D (sampler_blur2, uv_rr_5);\n' + '  ret_7 = (vec3(((\n' + '    pow ((sqrt(dot (dz_1, dz_1)) * 0.8), 0.7)\n' + '   + \n' + '    (((tmpvar_30.xyz * scale2) + bias2).y * 0.4)\n' + '  ) - 0.1)) * vec3(0.3, 0.5, 0.7));\n' + '   vec2 tmpvar_31;\n' + '  tmpvar_31.x = dx_3.x;\n' + '  tmpvar_31.y = dy_2.x;\n' + '   vec2 P_32;\n' + '  P_32 = (uv_rr_5 + ((tmpvar_31 * texsize.zw) * 18.0));\n' + '   vec3 tmpvar_33;\n' + '  tmpvar_33 = vec3((texture2D (sampler_main, P_32).x * 6.0));\n' + '   vec3 tmpvar_34;\n' + '  tmpvar_34 = texture2D (sampler_main, uv_rr_5).zzz;\n' + '  ret_7 = (1.0 - mix (mix (ret_7, vec3(0.2, 0.1, 0.0), tmpvar_33), vec3(1.0, 1.0, 1.0), tmpvar_34));\n' + '   vec4 tmpvar_35;\n' + '  tmpvar_35.w = 1.0;\n' + '  tmpvar_35.xyz = ret_7;\n' + '  vec4 ret4 = tmpvar_35;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0;\n' + 'y1= .001;\n' + 'z1 = 0;'),
	'frame_eqs_str' : ('zoom = 1;\n' + 'wave_a = 0;\n' + 'startx = 0.3;\n' + 'starty = 0.3;\n' + 'a = 0.55;\n' + 'b = 0.05;\n' + 'd = 0.09;\n' + 'q1 = aspectx;\n' + 'q2 = aspecty;\n' + 'q5 = a;\n' + 'q6 = b;\n' + 'q7 = d;\n' + 'bb = bb*0.99 + bass*0.02;\n' + 'mm = mm*0.99 + mid*0.02;\n' + 'tt = tt*0.99 + treb*0.02;\n' + 'mx = max(max(bb,mm),tt);\n' + 'mn = min(min(bb,mm),tt);\n' + 'h1 = (bb-mn)/(mx-mn);\n' + 'h2 = (mm-mn)/(mx-mn);\n' + 'h3 = (tt-mn)/(mx-mn);\n' + 'v = 0.1333/fps;\n' + 'bm = bm + (h1-h2)*v;\n' + 'mt = mt + (h2-h3)*v;\n' + 'bt = bt + (h1-h3)*v;\n' + 'w = bm*2;\n' + 'q3 = sin(w);\n' + 'q4 = cos(w);\n' + 'q10 = bm;\n' + 'q11 = mt;\n' + 'q12 = bt;\n' + 'db = db*0.98 + bass*0.2;\n' + 'bb = bb + db*0.1;\n' + 'ddt = ddt*0.98 + treb*0.2;\n' + 'tt = tt + ddt*0.1;\n' + 'dm = dm*0.98 + mid*0.2;\n' + 'mm = mm + dm*0.1;\n' + 'q23 = 0.5 + sin((bb-mm)*0.1)*0.25;\n' + 'q24 = 0.5 + sin((tt-mm)*0.1)*0.25;\n' + 'w = (bb-tt)*0.1;\n' + 'q26 = 0.25 - (db-ddt)*0.025;\n' + 'q21 = sin(w);\n' + 'q22 = cos(w);\n' + 'q27 = sin(-w);\n' + 'q28 = cos(-w);\n' + 'q25 = 1/q26;'),
	'pixel_eqs_str' : ('x = 0.5 + (x-0.51)*q1;\n' + 'y = 0.5 - (y-0.5)*q2;\n' + 'dx = (x*(1-x)-q5*x*y/(x+q6));\n' + 'dy = -q7*y*(1-y/x);\n' + 'dx = -dx*0.02/q1;\n' + 'dy = -dy*0.02/q2;'),
};

return pmap;
});
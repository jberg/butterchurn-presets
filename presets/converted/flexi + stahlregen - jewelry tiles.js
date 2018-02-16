define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.47,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.06,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.00183,
		ob_r : 0.51,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 6.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.34784,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.11,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.75,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 1.0,
		wave_y : 1.0,
		zoom : 0.99816,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 1.0,
		decay : 1.0,
		wave_a : 2.803,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 0.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.q3 = 0;
m.dm = 0;
m.dt = 0;
m.db = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = 1;
m.db = ((0.75*m.db)+(0.25*m.bass_att));
m.bb = (m.bb+(0.1*m.db));
m.dt = ((0.75*m.dt)+(0.25*m.treb_att));
m.tt = (m.tt+(0.1*m.dt));
m.dm = ((0.75*m.dm)+(0.25*m.mid_att));
m.mm = (m.mm+(0.1*m.dm));
m.q2 = Math.sin((((0.225*m.bb)+m.time)-(0.25*m.tt)));
m.q3 = Math.cos((((0.25*m.bb)+m.time)-(0.235*m.tt)));
m.q1 = (0.2+(0.9*Math.sin(((((0.25*m.mm)+m.time)-(0.125*m.tt))-(0.125*m.bb)))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
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
			r2 : 1.0,
			a : 0.9,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.69327,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.9,
			r : 1.0,
			border_g : 1.0,
			rad : 1.12226,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = ((m.ang-(0.75*m.q1))+(0.75*m.q2));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = ang - 0.75*q1 + 0.75*q2;'),

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = tmpvar_7.z;\n' + '  tmpvar_14.y = tmpvar_12.z;\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15 = (uv + ((tmpvar_14 * texsize.zw) * 4.0));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_main, tmpvar_15);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_main, tmpvar_15);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_blur3, tmpvar_15);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_noise_lq, tmpvar_13);\n' + '  ret_1.z = (((tmpvar_16.z - \n' + '    ((tmpvar_17.z - ((tmpvar_18.xyz * scale3) + bias3).z) * 0.02)\n' + '  ) - 0.008) + ((tmpvar_19.xyz - 0.5) * 0.1)).x;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20.x = tmpvar_7.x;\n' + '  tmpvar_20.y = tmpvar_12.x;\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21 = ((0.5 + (uv - 0.5)) - (tmpvar_20 * texsize.zw));\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_main, tmpvar_21);\n' + '  ret_1.x = tmpvar_22.x;\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_blur3, tmpvar_21);\n' + '  ret_1.x = (ret_1.x + ((\n' + '    (ret_1.x - ((tmpvar_23.xyz * scale3) + bias3))\n' + '  .x * 0.4) + 0.006));\n' + '   vec2 tmpvar_24;\n' + '  tmpvar_24.x = tmpvar_7.x;\n' + '  tmpvar_24.y = tmpvar_12.x;\n' + '   vec2 tmpvar_25;\n' + '  tmpvar_25.x = tmpvar_7.y;\n' + '  tmpvar_25.y = tmpvar_12.y;\n' + '   vec2 tmpvar_26;\n' + '  tmpvar_26.x = tmpvar_7.z;\n' + '  tmpvar_26.y = tmpvar_12.z;\n' + '   vec2 tmpvar_27;\n' + '  tmpvar_27 = (((uv - \n' + '    ((tmpvar_24 * texsize.zw) * 8.0)\n' + '  ) + (\n' + '    (tmpvar_25 * texsize.zw)\n' + '   * 4.0)) + ((tmpvar_26 * texsize.zw) * 8.0));\n' + '   vec4 tmpvar_28;\n' + '  tmpvar_28 = texture2D (sampler_fc_main, tmpvar_27);\n' + '  ret_1.y = tmpvar_28.y;\n' + '  ret_1.y = (ret_1.y * (1.0 + (ret_1.x * 0.1)));\n' + '  ret_1.y = (ret_1.y - (0.004 + (\n' + '    clamp (ret_1.z, 0.0, 1.0)\n' + '   * 0.04)));\n' + '   vec4 tmpvar_29;\n' + '  tmpvar_29.w = 1.0;\n' + '  tmpvar_29.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_29;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2.x = 0.42;\n' + '  tmpvar_2.y = _qa.x;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = ((uv_orig - 0.5) * vec2(2.0, 2.0));\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = ((tmpvar_3.x * tmpvar_3.x) - (tmpvar_3.y * tmpvar_3.y));\n' + '  tmpvar_4.y = ((2.0 * tmpvar_3.x) * tmpvar_3.y);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (1.0 - abs((\n' + '    (fract(((tmpvar_4 + tmpvar_2) * 0.5)) * 2.0)\n' + '   - 1.0)));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur2, tmpvar_5);\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = clamp ((1.0 - texture2D (sampler_main, tmpvar_5).z), 0.0, 1.0);\n' + '  ret_1 = (((\n' + '    ((tmpvar_6.xyz * scale2) + bias2)\n' + '  .x * tmpvar_7) * pow (hue_shader.yxz, vec3(8.0, 8.0, 8.0))) * 3.0);\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_main, tmpvar_5);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_blur1, tmpvar_5);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_blur1, tmpvar_5);\n' + '  ret_1 = (mix (ret_1, (\n' + '    pow (hue_shader.yzx, vec3(8.0, 8.0, 8.0))\n' + '   * 1.4), vec3((\n' + '    (tmpvar_8.x * 0.8)\n' + '   + \n' + '    ((tmpvar_9.xyz * scale1) + bias1)\n' + '  .x))) * clamp ((1.0 - \n' + '    (((tmpvar_10.xyz * scale1) + bias1).y * 4.0)\n' + '  ), 0.0, 1.0));\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = clamp (tmpvar_5, 0.0, 1.0);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_main, tmpvar_11);\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_main, tmpvar_5).yyy;\n' + '   vec3 tmpvar_14;\n' + '   vec3 tmpvar_15;\n' + '  tmpvar_15 = pow (hue_shader, vec3(8.0, 8.0, 8.0));\n' + '  tmpvar_14 = mix (mix (ret_1, vec3(1.0, 1.0, 1.0), (\n' + '    (tmpvar_15 * tmpvar_12.z)\n' + '   * 1.2)), (tmpvar_15.zxy * 1.8), tmpvar_13);\n' + '  ret_1 = tmpvar_14;\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = tmpvar_14;\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('zoom=1;\n' + 'db = .75 * db + .25 * bass_att;\n' + 'bb = bb + .1 * db;\n' + 'dt = .75 * dt + .25 * treb_att;\n' + 'tt = tt + .1 * dt;\n' + 'dm = .75 * dm + .25 * mid_att;\n' + 'mm = mm + .1 * dm;\n' + 'q2 = sin(.225*bb+time-.25*tt);\n' + 'q3 = cos(.25*bb+time-.235*tt);\n' + 'q1 = .2+.9*sin(.25*mm+time-.125*tt-.125*bb);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
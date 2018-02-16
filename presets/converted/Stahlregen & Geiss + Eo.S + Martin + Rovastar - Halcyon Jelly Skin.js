define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 12.0,
		warpscale : 0.015,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.971,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.033,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.01,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.57,
		warpanimspeed : 0.037,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.3,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.35,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.824,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.55,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.vol = 0;
m.mtime = 0;
m.mv_x = 64;
m.mv_y = 48;
m.nut = 0;
m.stp = 0;
m.stq = 0;
m.rtp = 0;
m.rtq = 0;
m.wvr = 0;
m.decay = 0;
m.dcsp = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 1;
m.zoom = 1.05;
m.warp = 0;
m.vol = (((m.bass_att+m.mid_att)+m.treb_att)*0.25);
m.vol = (m.vol*m.vol);
m.mtime = (m.mtime+(m.vol*0.1));
m.q1 = (m.mtime*0.4);
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur2, uv);\n' + '  ret_1 = (ret_1 + ((ret_1 - \n' + '    ((tmpvar_3.xyz * scale2) + bias2)\n' + '  ) * 0.3));\n' + '  ret_1 = (ret_1 * 0.9);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 0.4)) + rand_frame.xy);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_noise_lq, tmpvar_4);\n' + '  ret_1 = (ret_1 + ((\n' + '    ((tmpvar_5.xyz - 0.5) / 256.0)\n' + '   * 122.0) * clamp (\n' + '    (treb_att - 1.0)\n' + '  , 0.0, 1.0)));\n' + '  ret_1 = mix (ret_1, vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))), vec3(0.2, 0.2, 0.2));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 6.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = dot (tmpvar_7, vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_13.y = dot (tmpvar_12, vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = (uv - (0.25 * tmpvar_13));\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15.x = dot (tmpvar_7, vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_15.y = dot (tmpvar_12, vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = (uv + (0.25 * tmpvar_15));\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur3, tmpvar_14);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_blur1, tmpvar_14);\n' + '  ret_1 = ((0.8 * (\n' + '    (tmpvar_17.xyz * scale3)\n' + '   + bias3)) - ((tmpvar_18.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur1, uv);\n' + '  ret_1 = (ret_1 + (0.6 * (\n' + '    (tmpvar_19.xyz * scale1)\n' + '   + bias1)));\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_blur2, tmpvar_16);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_blur1, tmpvar_16);\n' + '  ret_1 = (ret_1 - ((\n' + '    (tmpvar_20.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_21.xyz * scale1)\n' + '   + bias1)));\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_main, tmpvar_16);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_blur1, tmpvar_16);\n' + '  ret_1 = (ret_1 + ((1.2 * tmpvar_22.xyz) + (0.15 * \n' + '    ((tmpvar_23.xyz * scale1) + bias1)\n' + '  )));\n' + '  ret_1 = (ret_1 + 1.0);\n' + '   float tmpvar_24;\n' + '  tmpvar_24 = dot (ret_1, vec3(0.32, 0.49, 0.29));\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_blur3, tmpvar_14);\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_27;\n' + '  tmpvar_27 = texture2D (sampler_blur1, tmpvar_16);\n' + '  ret_1 = (mix (vec3(tmpvar_24), (\n' + '    (0.75 * vec3(tmpvar_24))\n' + '   * \n' + '    dot ((((0.6 * \n' + '      ((tmpvar_25.xyz * scale3) + bias3)\n' + '    ) - (0.7 * tmpvar_26.xyz)) - (0.3 * (\n' + '      (tmpvar_27.xyz * scale1)\n' + '     + bias1))), vec3(0.32, 0.49, 0.29))\n' + '  ), pow (hue_shader, vec3(tmpvar_24))) * 0.7);\n' + '  ret_1 = (ret_1 * ret_1);\n' + '   vec3 tmpvar_28;\n' + '  tmpvar_28 = sqrt(ret_1);\n' + '  ret_1 = tmpvar_28;\n' + '   vec4 tmpvar_29;\n' + '  tmpvar_29.w = 1.0;\n' + '  tmpvar_29.xyz = tmpvar_28;\n' + '  vec4 ret4 = tmpvar_29;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=1;\n' + 'zoom=1.05;\n' + 'warp = 0;\n' + 'vol=(bass_att+mid_att+treb_att)*0.25;\n' + 'vol=vol*vol;\n' + 'mtime=mtime+vol*0.1;\n' + 'q1=mtime*0.4;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
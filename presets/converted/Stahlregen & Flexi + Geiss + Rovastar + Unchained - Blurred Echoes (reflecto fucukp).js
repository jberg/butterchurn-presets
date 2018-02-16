define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 0.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.439,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.047,
		ob_size : 0.5,
		b1ed : 0.25,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.976,
		zoom : 0.99951,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.973,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.5,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_g = ((0.45+(0.3*Math.sin((m.time*1.33))))+(0.25*Math.sin(m.treb)));
m.wave_b = ((0.45+(0.3*Math.sin((m.time*1.13))))+(0.25*(0.33*((m.bass+m.treb)+m.mid))));
m.wave_r = ((0.45+(0.3*Math.sin((m.time*1.23))))+(0.25*Math.sin(m.bass)));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dy = ifcond(above(m.y, 0.5), div(Math.sin((0.5-m.y)),10), div(log10(div(1,m.y)),35));
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
	'warp' : ('shader_body {\n' + '   vec2 v_1;\n' + '   vec3 ret_2;\n' + '  v_1 = (normalize((uv - 0.5)) * texsize.zw);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv - (v_1 * 2.5));\n' + '  tmpvar_4 = texture2D (sampler_main, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (v_1 * 5.5));\n' + '  tmpvar_6 = texture2D (sampler_main, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv - (v_1 * 9.0));\n' + '  tmpvar_8 = texture2D (sampler_main, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (v_1 * 13.0));\n' + '  tmpvar_10 = texture2D (sampler_main, P_11);\n' + '  ret_2 = (0.2 * ((tmpvar_3.xyz + tmpvar_4.xyz) + (\n' + '    (tmpvar_6.xyz + tmpvar_8.xyz)\n' + '   + tmpvar_10.xyz)));\n' + '  ret_2 = ((ret_2 - 0.01) * 0.975);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12.w = 1.0;\n' + '  tmpvar_12.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_12;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret2_2;\n' + '   vec3 ret_3;\n' + '  uv_1 = (uv * 2.0);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = floor((fract(\n' + '    (uv_1 * 0.5)\n' + '  ) * 2.0));\n' + '  uv_1 = ((fract(uv_1) * (1.0 - tmpvar_4)) + (tmpvar_4 * fract(\n' + '    (1.0 - uv_1)\n' + '  )));\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = rad;\n' + '  tmpvar_5.y = uv_1.y;\n' + '  uv_1 = tmpvar_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (((tmpvar_5.yx - 0.5) * vec2(-1.0, 1.0)) + 0.5);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_main, tmpvar_5);\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_blur2, tmpvar_5);\n' + '  ret_3 = (tmpvar_7.xyz * clamp ((\n' + '    (((tmpvar_8.xyz * scale2) + bias2) * 2.8)\n' + '   - 0.13), 0.0, 1.0));\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_blur2, tmpvar_6);\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = clamp (((\n' + '    ((tmpvar_9.xyz * scale2) + bias2)\n' + '   * 2.8) - 0.13), 0.0, 1.0);\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = (texture2D (sampler_main, tmpvar_6).xyz * tmpvar_10);\n' + '  ret2_2 = tmpvar_11;\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = abs(((0.1 + ret_3) - (0.1 + ret2_2)));\n' + '  ret_3 = (tmpvar_12 * tmpvar_12);\n' + '  ret_3 = (ret_3 * vec3(0.9, 1.6, 2.3));\n' + '  ret_3 = (ret_3 * (4.0 + bass_att));\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = pow (ret_3, (1.0 - ret_3));\n' + '  ret_3 = tmpvar_13;\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14.w = 1.0;\n' + '  tmpvar_14.xyz = tmpvar_13;\n' + '  vec4 ret4 = tmpvar_14;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_g = 0.45 + 0.3*sin(time*1.33)+0.25*sin(treb);\n' + 'wave_b = 0.45 + 0.3*sin(time*1.13)+0.25*(0.33*(bass+treb+mid));\n' + 'wave_r = 0.45 + 0.3*sin(time*1.23)+0.25*sin(bass);'),
	'pixel_eqs_str' : ('dy = if(above(y,0.5),sin(0.5-y)/10, log10(1/y)/35);'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.772,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.508,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 5.00873,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.5,
		echo_zoom : 2.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.011,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.003,
		wave_thick : 1.0,
		modwavealphaend : 1.36,
		wave_mystery : 0.34,
		decay : 1.0,
		wave_a : 4.1,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.5,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.13,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.t = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.t = (m.time*12.3);
m.rot = (m.rot+(0.030*((0.60*Math.sin((0.38*m.time)))+(0.40*Math.sin((0.54*m.time))))));
m.dx = (m.dx+(0.002*((0.60*Math.sin((0.434*m.time)))+(0.40*Math.sin((0.277*m.time))))));
m.dy = (m.dy+(0.002*((0.60*Math.sin((0.384*m.time)))+(0.40*Math.sin((0.477*m.time))))));
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
			scaling : 0.5033,
			samples : 512.0,
			additive : 1.0,
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
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.77977,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.15493,
			x : 0.5,
			y : 0.9,
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
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.99979,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.986,
			x : 0.5,
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
m.ang = Math.sin(div(m.time,65));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang =sin(time/65) ;'),

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
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.9,
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
m.x = ((Math.sin(m.time)*0.4)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = sin(time) * .4 + .5;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.03,
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
			rad : 1.38306,
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
	'warp' : ('shader_body {\n' + '   vec2 my_uv_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv);\n' + '  ret_2 = tmpvar_3.xyz;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv);\n' + '  ret_2 = (ret_2 + ((\n' + '    (ret_2 - ((tmpvar_4.xyz * scale1) + bias1))\n' + '   * 0.1) - 0.015));\n' + '  ret_2.y = ret_2.y;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (((uv_orig + \n' + '    ((uv - uv_orig) * 0.4)\n' + '  ) - 0.5) * vec2(1.81, 1.81));\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = ((tmpvar_5.x * tmpvar_5.x) - (tmpvar_5.y * tmpvar_5.y));\n' + '  tmpvar_6.y = ((2.0 * tmpvar_5.x) * tmpvar_5.y);\n' + '  my_uv_1 = (tmpvar_6 + vec2(0.448, 0.701));\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_fc_main, my_uv_1);\n' + '  ret_2.z = (tmpvar_7.z + 0.004);\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = (0.5 + (mix (uv_orig, uv, vec2(-1.0, -1.0)) - 0.5));\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_main, tmpvar_8);\n' + '  ret_2.x = (tmpvar_9.x - 0.004);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 tmpvar_1;\n' + '  tmpvar_1 = (texsize.zw * 6.0);\n' + '   vec4 tmpvar_2;\n' + '   vec2 P_3;\n' + '  P_3 = (uv + (vec2(1.0, 0.0) * tmpvar_1));\n' + '  tmpvar_2 = texture2D (sampler_blur1, P_3);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv - (vec2(1.0, 0.0) * tmpvar_1));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = (((tmpvar_2.xyz * scale1) + bias1) - ((tmpvar_4.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + (vec2(0.0, 1.0) * tmpvar_1));\n' + '  tmpvar_7 = texture2D (sampler_blur1, P_8);\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv - (vec2(0.0, 1.0) * tmpvar_1));\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = (((tmpvar_7.xyz * scale1) + bias1) - ((tmpvar_9.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12.x = tmpvar_6.y;\n' + '  tmpvar_12.y = tmpvar_11.y;\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = tmpvar_6.x;\n' + '  tmpvar_13.y = tmpvar_11.x;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = (uv + (tmpvar_13 * 0.2));\n' + '   vec2 x_15;\n' + '  x_15 = (((uv - \n' + '    (tmpvar_12 * 0.6)\n' + '  ) - 0.5) * aspect.xy);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_main, uv);\n' + '   vec3 tmpvar_17;\n' + '  tmpvar_17 = mix (vec3(2.0, 2.0, 1.0), vec3(2.0, -1.0, -2.0), tmpvar_16.zzz);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_blur1, tmpvar_14);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19.w = 1.0;\n' + '  tmpvar_19.xyz = mix (((vec3(0.4, 0.5, 1.0) * \n' + '    max (0.0, (((1.0 - \n' + '      (sqrt(dot (x_15, x_15)) * 2.0)\n' + '    ) - 0.2) + (tmpvar_16.z * 0.2)))\n' + '  ) + tmpvar_16.x), tmpvar_17, vec3(((\n' + '    (tmpvar_18.xyz * scale1)\n' + '   + bias1).y * 0.35)));\n' + '  vec4 ret4 = tmpvar_19;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('t = time*12.3;\n' + 'rot = rot + 0.030*( 0.60*sin(0.38*time) + 0.40*sin(0.54*time) );\n' + 'dx = dx + 0.002*( 0.60*sin(0.434*time) + 0.40*sin(0.277*time) );\n' + 'dy = dy + 0.002*( 0.60*sin(0.384*time) + 0.40*sin(0.477*time) );'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
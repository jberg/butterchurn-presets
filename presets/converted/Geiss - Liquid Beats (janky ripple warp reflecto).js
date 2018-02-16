define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 31.2,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 2.28,
		wave_scale : 3.587,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.01459,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 1.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.7,
		ib_r : 0.25,
		mv_b : 0.8,
		echo_zoom : 2.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.065,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 2.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.67,
		wave_mystery : -0.28,
		decay : 0.98,
		wave_a : 1.2,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.7,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.97,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.200*((0.90*Math.sin(((2.753*m.time)+0)))+(0.40*Math.sin(((2.315*m.time)+1))))));
m.wave_g = (m.wave_g+(0.100*((0.90*Math.sin(((3.183*m.time)+3)))+(0.40*Math.sin(((2.006*m.time)+4))))));
m.wave_b = (m.wave_b+(0.100*((0.90*Math.sin(((2.393*m.time)+5)))+(0.40*Math.sin(((2.733*m.time)+2))))));
m.zoom = (m.zoom+(0.013*((0.60*Math.sin((0.339*m.time)))+(0.40*Math.sin((0.276*m.time))))));
m.rot = (m.rot+(0.020*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.cx = (m.cx+(0.003*((0.60*Math.sin((0.471*m.time)))+(0.40*Math.sin((0.297*m.time))))));
m.cy = (m.cy+(0.003*((0.60*Math.sin((0.379*m.time)))+(0.40*Math.sin((0.351*m.time))))));
m.dx = (m.dx+(0.002*((0.60*Math.sin((0.234*m.time)))+(0.40*Math.sin((0.277*m.time))))));
m.rot = (m.rot+(0.02*((Math.sin((m.time*2.134))+Math.sin((m.time*1.7134)))+Math.sin((m.time*2.834)))));
m.dx = (m.dx+(0.0025*((Math.sin((m.time*1.134))+Math.sin((m.time*0.7134)))+Math.sin((m.time*2.334)))));
m.dy = (m.dy+(0.0025*((Math.sin((m.time*1.8834))+Math.sin((m.time*1.0144)))+Math.sin((m.time*1.334)))));
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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur3, uv);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv);\n' + '  ret_2 = ((1.25 * (\n' + '    (tmpvar_3.xyz * scale3)\n' + '   + bias3)) - (0.25 * (\n' + '    (tmpvar_4.xyz * scale1)\n' + '   + bias1)));\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = clamp (ret_2.xy, 0.0, 1.0);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur1, tmpvar_5);\n' + '   vec3 theta_7;\n' + '  theta_7 = (1.33 * ((tmpvar_6.xyz * scale1) + bias1));\n' + '  uv_1 = (uv * (1.0 + (0.15 * \n' + '    (sin(theta_7) / cos(theta_7))\n' + '  )).xy);\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = clamp (ret_2.xy, 0.0, 1.0);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_blur1, tmpvar_8);\n' + '   vec3 theta_10;\n' + '  theta_10 = (1.33 * ((tmpvar_9.xyz * scale1) + bias1));\n' + '  uv_1 = (uv_1 - (0.075 * (\n' + '    sin(theta_10)\n' + '   / \n' + '    cos(theta_10)\n' + '  )).xy);\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_main, uv_1);\n' + '  ret_2 = tmpvar_11.xyz;\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '   float tmpvar_14;\n' + '  tmpvar_14 = dot (texsize.zw, texsize.zw);\n' + '  P_13 = (((uv_1 - 0.5) * (1.0 - \n' + '    (8.0 * sqrt(tmpvar_14))\n' + '  )) + 0.5);\n' + '  tmpvar_12 = texture2D (sampler_main, P_13);\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (((uv_1 - 0.5) * (1.0 + \n' + '    (8.0 * sqrt(tmpvar_14))\n' + '  )) + 0.5);\n' + '  tmpvar_15 = texture2D (sampler_main, P_16);\n' + '  ret_2 = (max (max (ret_2, tmpvar_12.xyz), tmpvar_15.xyz) - 0.024);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17.w = 1.0;\n' + '  tmpvar_17.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_17;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret2_2;\n' + '   vec3 ret4_3;\n' + '   vec3 ret3_4;\n' + '   vec3 ret_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (((uv - 0.5) * vec2(-1.0, 1.0)) + 0.5);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_blur2, uv);\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = clamp (((\n' + '    ((tmpvar_7.xyz * scale2) + bias2)\n' + '   * 2.8) - 0.13), 0.0, 1.0);\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = (texture2D (sampler_main, uv).xyz * tmpvar_8);\n' + '  ret3_4 = tmpvar_9;\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_blur2, tmpvar_6);\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = clamp (((\n' + '    ((tmpvar_10.xyz * scale2) + bias2)\n' + '   * 2.8) - 0.13), 0.0, 1.0);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (texture2D (sampler_main, tmpvar_6).xyz * tmpvar_11);\n' + '  ret4_3 = tmpvar_12;\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = abs((ret3_4 - ret4_3));\n' + '  ret3_4 = (tmpvar_13 * sqrt(tmpvar_13));\n' + '  ret3_4 = (ret3_4 * vec3(0.9, 1.6, 2.3));\n' + '  ret3_4 = (ret3_4 * 3.0);\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = pow (ret3_4, (1.0 - ret3_4));\n' + '  ret3_4 = tmpvar_14;\n' + '  uv_1 = (uv * 2.0);\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15 = floor((fract(\n' + '    (uv_1 * 0.5)\n' + '  ) * 2.0));\n' + '  uv_1 = ((fract(uv_1) * (1.0 - tmpvar_15)) + (tmpvar_15 * fract(\n' + '    (1.0 - uv_1)\n' + '  )));\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.x = rad;\n' + '  tmpvar_16.y = uv_1.y;\n' + '  uv_1 = tmpvar_16;\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17 = ((0.5 - tmpvar_16.yx) + 0.5);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_main, tmpvar_16.yx);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur2, tmpvar_16.yx);\n' + '  ret_5 = (tmpvar_18.xyz * clamp ((\n' + '    (((tmpvar_19.xyz * scale2) + bias2) * 2.8)\n' + '   - 0.13), 0.0, 1.0));\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_blur2, tmpvar_17);\n' + '   vec3 tmpvar_21;\n' + '  tmpvar_21 = clamp (((\n' + '    ((tmpvar_20.xyz * scale2) + bias2)\n' + '   * 2.8) - 0.13), 0.0, 1.0);\n' + '   vec3 tmpvar_22;\n' + '  tmpvar_22 = (texture2D (sampler_main, tmpvar_17).xyz * tmpvar_21);\n' + '  ret2_2 = tmpvar_22;\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23 = mix (ret_5, ret2_2, vec3(0.5, 0.5, 0.5));\n' + '  ret_5 = (tmpvar_23 * tmpvar_23);\n' + '  ret_5 = (ret_5 * vec3(0.9, 1.6, 2.3));\n' + '  ret_5 = (ret_5 * 3.0);\n' + '   vec3 tmpvar_24;\n' + '  tmpvar_24 = max (tmpvar_14, (0.8 * vec3((0.5 * \n' + '    dot (ret_5, vec3(0.32, 0.49, 0.29))\n' + '  ))));\n' + '  ret_5 = tmpvar_24;\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25.w = 1.0;\n' + '  tmpvar_25.xyz = tmpvar_24;\n' + '  vec4 ret4 = tmpvar_25;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.200*( 0.90*sin(2.753*time+0) + 0.40*sin(2.315*time+1) );\n' + 'wave_g = wave_g + 0.100*( 0.90*sin(3.183*time+3) + 0.40*sin(2.006*time+4) );\n' + 'wave_b = wave_b + 0.100*( 0.90*sin(2.393*time+5) + 0.40*sin(2.733*time+2) );\n' + 'zoom = zoom + 0.013*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );\n' + 'rot = rot + 0.020*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'cx = cx + 0.003*( 0.60*sin(0.471*time) + 0.40*sin(0.297*time) );\n' + 'cy = cy + 0.003*( 0.60*sin(0.379*time) + 0.40*sin(0.351*time) );\n' + 'dx = dx + 0.002*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );\n' + 'rot=rot+0.02*(sin(time*2.134)+sin(time*1.7134)+sin(time*2.834));\n' + 'dx=dx+0.0025*(sin(time*1.134)+sin(time*0.7134)+sin(time*2.334));\n' + 'dy=dy+0.0025*(sin(time*1.8834)+sin(time*1.0144)+sin(time*1.334));'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 27.64,
		warpscale : 100.0,
		brighten : 0.0,
		mv_y : 20.8,
		wave_scale : 0.03,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.338,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.5,
		warpanimspeed : 0.55,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.03,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.0,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.0,
		ob_b : 0.1,
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 2.0,
		wave_mystery : 0.0,
		decay : 0.995,
		wave_a : 0.9,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.9,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_x = (m.wave_x+(0.000*((0.00*Math.sin((2.121*m.time)))+(0.00*Math.sin((1.621*m.time))))));
m.wave_y = (m.wave_y+(0.000*((0.00*Math.sin((1.742*m.time)))+(0.00*Math.sin((2.322*m.time))))));
m.wave_r = (m.wave_r+(0.500*((0.50*Math.sin((0.823*m.time)))+(0.40*Math.sin((0.916*m.time))))));
m.wave_g = (m.wave_g+(0.500*((0.50*Math.sin((0.900*m.time)))+(0.40*Math.sin((1.023*m.time))))));
m.wave_b = (m.wave_b+(0.500*((0.50*Math.sin((0.808*m.time)))+(0.40*Math.sin((0.949*m.time))))));
m.rot = (m.rot+(0.010*Math.sin((m.time+0.010))));
m.decay = (m.decay-(0.00*equal(mod(m.frame,30), 0)));
m.zoom = (m.zoom+((m.bass_att-1)*0.1));
m.zoom = (m.zoom+(0.023*((0.60*Math.sin((0.339*m.time)))+(0.40*Math.sin((0.276*m.time))))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.97,
			enabled : 1.0,
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
			enabled : 1.0,
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
			enabled : 1.0,
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
			enabled : 1.0,
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
			enabled : 1.0,
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
	'warp' : ('shader_body {\n' + '   vec2 my_uv_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + vec2(0.005, 0.0));\n' + '  tmpvar_3 = texture2D (sampler_blur2, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - vec2(0.005, 0.0));\n' + '  tmpvar_5 = texture2D (sampler_blur2, P_6);\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale2) + bias2) - ((tmpvar_5.xyz * scale2) + bias2)).y;\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + vec2(0.0, 0.005));\n' + '  tmpvar_8 = texture2D (sampler_blur2, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - vec2(0.0, 0.005));\n' + '  tmpvar_10 = texture2D (sampler_blur2, P_11);\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale2) + bias2) - ((tmpvar_10.xyz * scale2) + bias2)).y;\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = tmpvar_7;\n' + '  tmpvar_13.y = tmpvar_12;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = (uv - (tmpvar_13 * 0.01));\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (tmpvar_14 - floor(tmpvar_14));\n' + '  tmpvar_15 = texture2D (sampler_fc_main, P_16);\n' + '  ret_2.y = tmpvar_15.y;\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (tmpvar_14 - floor(tmpvar_14));\n' + '  tmpvar_17 = texture2D (sampler_blur3, P_18);\n' + '  ret_2.y = (ret_2.y + ((ret_2.y - \n' + '    ((tmpvar_17.xyz * scale3) + bias3)\n' + '  .y) * 0.1));\n' + '   vec4 tmpvar_19;\n' + '   vec2 P_20;\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21 = floor(uv);\n' + '  P_20 = (uv - tmpvar_21);\n' + '  tmpvar_19 = texture2D (sampler_blur3, P_20);\n' + '  ret_2.y = (ret_2.y + (0.006 - (\n' + '    ((tmpvar_19.xyz * scale3) + bias3)\n' + '  .x * 5.0)));\n' + '  ret_2.y = ret_2.y;\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22.x = -(tmpvar_12);\n' + '  tmpvar_22.y = tmpvar_7;\n' + '  my_uv_1 = (tmpvar_22 * 0.05);\n' + '   vec4 tmpvar_23;\n' + '   vec2 P_24;\n' + '  P_24 = (uv + vec2(0.01, 0.0));\n' + '  tmpvar_23 = texture2D (sampler_blur2, P_24);\n' + '   vec4 tmpvar_25;\n' + '   vec2 P_26;\n' + '  P_26 = (uv - vec2(0.01, 0.0));\n' + '  tmpvar_25 = texture2D (sampler_blur2, P_26);\n' + '   vec4 tmpvar_27;\n' + '   vec2 P_28;\n' + '  P_28 = (uv + vec2(0.0, 0.01));\n' + '  tmpvar_27 = texture2D (sampler_blur2, P_28);\n' + '   vec4 tmpvar_29;\n' + '   vec2 P_30;\n' + '  P_30 = (uv - vec2(0.0, 0.01));\n' + '  tmpvar_29 = texture2D (sampler_blur2, P_30);\n' + '   vec2 tmpvar_31;\n' + '  tmpvar_31.x = (((tmpvar_23.xyz * scale2) + bias2) - ((tmpvar_25.xyz * scale2) + bias2)).z;\n' + '  tmpvar_31.y = (((tmpvar_27.xyz * scale2) + bias2) - ((tmpvar_29.xyz * scale2) + bias2)).z;\n' + '  my_uv_1 = (my_uv_1 + (uv - (tmpvar_31 * 0.005)));\n' + '   vec4 tmpvar_32;\n' + '   vec2 P_33;\n' + '  P_33 = (my_uv_1 - floor(my_uv_1));\n' + '  tmpvar_32 = texture2D (sampler_fw_main, P_33);\n' + '  ret_2.z = tmpvar_32.z;\n' + '   vec4 tmpvar_34;\n' + '   vec2 P_35;\n' + '  P_35 = (my_uv_1 - floor(my_uv_1));\n' + '  tmpvar_34 = texture2D (sampler_blur3, P_35);\n' + '  ret_2.z = (ret_2.z + ((ret_2.z - \n' + '    ((tmpvar_34.xyz * scale3) + bias3)\n' + '  .z) * 0.13));\n' + '  ret_2.z = (ret_2.z * 0.95);\n' + '   vec4 tmpvar_36;\n' + '   vec2 P_37;\n' + '  P_37 = (uv - tmpvar_21);\n' + '  tmpvar_36 = texture2D (sampler_blur3, P_37);\n' + '   vec4 tmpvar_38;\n' + '   vec2 P_39;\n' + '  P_39 = (my_uv_1 - floor(my_uv_1));\n' + '  tmpvar_38 = texture2D (sampler_main, P_39);\n' + '  ret_2.z = (ret_2.z + ((0.03 - \n' + '    ((tmpvar_36.xyz * scale3) + bias3)\n' + '  .x) - (tmpvar_38.y * 0.05)));\n' + '   vec4 tmpvar_40;\n' + '  tmpvar_40 = texture2D (sampler_main, uv_orig);\n' + '  ret_2.x = (tmpvar_40.x - 0.3);\n' + '   vec4 tmpvar_41;\n' + '  tmpvar_41.w = 1.0;\n' + '  tmpvar_41.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_41;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_x = wave_x + 0.000*( 0.00*sin(2.121*time) + 0.00*sin(1.621*time) );\n' + 'wave_y = wave_y + 0.000*( 0.00*sin(1.742*time) + 0.00*sin(2.322*time) );\n' + 'wave_r = wave_r + 0.500*( 0.50*sin(0.823*time) + 0.40*sin(0.916*time) );\n' + 'wave_g = wave_g + 0.500*( 0.50*sin(0.900*time) + 0.40*sin(1.023*time) );\n' + 'wave_b = wave_b + 0.500*( 0.50*sin(0.808*time) + 0.40*sin(0.949*time) );\n' + 'rot = rot + 0.010*sin(time+0.010);\n' + 'decay = decay - 0.00*equal(frame%30,0);\n' + 'zoom=zoom+(bass_att-1)*0.1;\n' + 'zoom = zoom + 0.023*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
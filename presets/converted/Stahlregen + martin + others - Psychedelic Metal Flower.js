define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.7,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.706,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 0.29999,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.126,
		warpanimspeed : 5.278,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.05101,
		solarize : 1.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.35,
		wave_mystery : -0.28,
		decay : 0.955,
		wave_a : 1.059,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.81,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.count = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.count = ifcond(below(m.count, 9), (m.count+1), 0);
m.q1 = 0.5;
m.q2 = 0.5;
m.q3 = m.count;
m.q4 = m.aspectx;
m.q5 = m.aspecty;
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.5,
			textured : 0.0,
			g2 : 0.5,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.12953,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			num_inst : 22.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.trans = 0;
m.num_instance = 0;
m.instance_counter = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.trans = ifcond(equal(m.q3, 3), 0.15, 0);
m.a = m.trans;
m.a2 = m.trans;
m.border_a = 0;
m.instance_counter = ((3.14*m.instance)*div(2,m.num_instance));
m.x = (m.q1+(((0.1+(0.1*m.treb_att))*div(1,m.q5))*Math.sin(m.instance_counter)));
m.y = (m.q2+(((0.1+(0.1*m.treb_att))*div(1,m.q4))*Math.cos(m.instance_counter)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trans = if(equal(q3,3),.15,0);\n' + 'a = trans;\n' + 'a2 = trans;\n' + 'border_a = 0;\n' + 'instance_counter = 3.14*instance*(2/(num_instance));\n' + 'x = q1 + (.1+0.1*treb_att) * (1/q5) * sin(instance_counter);\n' + 'y = q2 + (.1+0.1*treb_att) * (1/q4) * cos(instance_counter);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.5,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.5,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.12953,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			num_inst : 22.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.trans = 0;
m.num_instance = 0;
m.instance_counter = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.trans = ifcond(equal(m.q3, 6), 0.15, 0);
m.a = m.trans;
m.a2 = m.trans;
m.border_a = 0;
m.instance_counter = ((3.14*m.instance)*div(2,m.num_instance));
m.x = (m.q1+(((0.1+(0.1*m.mid_att))*div(1,m.q5))*Math.sin(m.instance_counter)));
m.y = (m.q2+(((0.1+(0.1*m.mid_att))*div(1,m.q4))*Math.cos(m.instance_counter)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trans = if(equal(q3,6),.15,0);\n' + 'a = trans;\n' + 'a2 = trans;\n' + 'border_a = 0;\n' + 'instance_counter = 3.14*instance*(2/(num_instance));\n' + 'x = q1 + (.1+0.1*mid_att) * (1/q5) * sin(instance_counter);\n' + 'y = q2 + (.1+0.1*mid_att) * (1/q4) * cos(instance_counter);'),

		},
		{
		'baseVals' : {
			r2 : 0.5,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.5,
			border_g : 1.0,
			rad : 0.12953,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			num_inst : 22.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.trans = 0;
m.num_instance = 0;
m.instance_counter = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.trans = ifcond(equal(m.q3, 9), 0.15, 0);
m.a = m.trans;
m.a2 = m.trans;
m.border_a = 0;
m.instance_counter = ((3.14*m.instance)*div(2,m.num_instance));
m.x = (m.q1+(((0.1+(0.1*m.bass_att))*div(1,m.q5))*Math.sin(m.instance_counter)));
m.y = (m.q2+(((0.1+(0.1*m.bass_att))*div(1,m.q4))*Math.cos(m.instance_counter)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trans = if(equal(q3,9),.15,0);\n' + 'a = trans;\n' + 'a2 = trans;\n' + 'border_a = 0;\n' + 'instance_counter = 3.14*instance*(2/(num_instance));\n' + 'x = q1 + (.1+0.1*bass_att) * (1/q5) * sin(instance_counter);\n' + 'y = q2 + (.1+0.1*bass_att) * (1/q4) * cos(instance_counter);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
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
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.25481,
			x : 0.5,
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

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '   vec2 P_3;\n' + '  P_3 = (uv + vec2(0.0009, 0.0));\n' + '  tmpvar_2 = texture2D (sampler_blur2, P_3);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv - vec2(0.0009, 0.0));\n' + '  tmpvar_4 = texture2D (sampler_blur2, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv + vec2(0.0, 0.0009));\n' + '  tmpvar_6 = texture2D (sampler_blur2, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv - vec2(0.0, 0.0009));\n' + '  tmpvar_8 = texture2D (sampler_blur2, P_9);\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10.x = (((tmpvar_2.xyz * scale2) + bias2) - ((tmpvar_4.xyz * scale2) + bias2)).y;\n' + '  tmpvar_10.y = (((tmpvar_6.xyz * scale2) + bias2) - ((tmpvar_8.xyz * scale2) + bias2)).y;\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = (uv - (tmpvar_10 * 0.01));\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (tmpvar_11 - floor(tmpvar_11));\n' + '  tmpvar_12 = texture2D (sampler_fc_main, P_13);\n' + '  ret_1.y = tmpvar_12.y;\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (tmpvar_11 - floor(tmpvar_11));\n' + '  tmpvar_14 = texture2D (sampler_blur3, P_15);\n' + '  ret_1.y = (ret_1.y + ((ret_1.y - \n' + '    ((tmpvar_14.xyz * scale3) + bias3)\n' + '  .y) * 0.1));\n' + '  ret_1.y = (ret_1.y + 0.006);\n' + '  ret_1.y = ret_1.y;\n' + '  ret_1.x = ret_1.y;\n' + '  ret_1.z = ret_1.y;\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   float dy_1;\n' + '   float dx_2;\n' + '   vec3 ret1_3;\n' + '   vec2 uv1_4;\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, uv).xyz;\n' + '  ret1_3 = tmpvar_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.y = 0.0;\n' + '  tmpvar_6.x = texsize.z;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7.x = 0.0;\n' + '  tmpvar_7.y = texsize.w;\n' + '   vec2 P_8;\n' + '  P_8 = (uv - tmpvar_6);\n' + '   vec2 P_9;\n' + '  P_9 = (uv + tmpvar_6);\n' + '   float tmpvar_10;\n' + '  tmpvar_10 = (texture2D (sampler_main, P_8).xyz - texture2D (sampler_main, P_9).xyz).x;\n' + '  dx_2 = tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - tmpvar_7);\n' + '   vec2 P_12;\n' + '  P_12 = (uv + tmpvar_7);\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = (texture2D (sampler_main, P_11).xyz - texture2D (sampler_main, P_12).xyz).x;\n' + '  dy_1 = tmpvar_13;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = dx_2;\n' + '  tmpvar_14.y = dy_1;\n' + '  uv1_4 = ((0.3 * cos(\n' + '    (((uv - 0.5) * 2.0) + 1.7)\n' + '  )) - (2.0 * tmpvar_14));\n' + '  ret1_3 = ((-(ret1_3) / 4.0) + ((6.0 * vec3(\n' + '    clamp ((0.03 / sqrt(dot (uv1_4, uv1_4))), 0.0, 1.0)\n' + '  )) * (-0.08 + ret1_3)));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 1.0;\n' + '  tmpvar_15.xyz = (dot (ret1_3, vec3(0.32, 0.49, 0.29)) * rand_preset).xyz;\n' + '  vec4 ret4 = tmpvar_15;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('count = if(below(count,9),count+1,0);\n' + 'q1 = .5;\n' + 'q2 = .5;\n' + 'q3 = count;\n' + 'q4 = aspectx;\n' + 'q5 = aspecty;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
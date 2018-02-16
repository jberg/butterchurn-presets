define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 1.248,
		wave_scale : 1.286,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 1.007,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99951,
		solarize : 1.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.925,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.q1 = -Math.abs((1*Math.sin((m.time*0.3))));
m.q2 = (1*Math.sin((m.time*0.45)));
m.q3 = (1*Math.cos((m.time*0.6)));
m.wave_r = (m.wave_r+(0.45*((0.6*Math.sin((m.time*1.3)))+(0.4*Math.sin((0.98*m.time))))));
m.wave_b = (m.wave_b+(0.45*((0.6*Math.sin((m.time*1.1)))+(0.4*Math.sin((0.78*m.time))))));
m.wave_g = (m.wave_g+(0.45*((0.6*Math.sin((m.time*1.2)))+(0.4*Math.sin((0.6*m.time))))));
m.q8 = 1;
m.q7 = 1;
m.q6 = 1;
m.warp = 0;
m.zoom = 1;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.z = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t1 = 0.5;
m.t2 = 0.5;
			m.rkeys = ['t3','t2','t1'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = ((1.4*Math.sin((m.q2*m.t2)))-(m.t3*Math.cos((0.5*m.t1))));
m.y = ((m.t3*Math.sin((-m.q1*m.t1)))-Math.cos((-0.5*m.t2)));
m.z = (1*Math.sin(m.t1));
m.t1 = m.x;
m.t2 = m.y;
m.t3 = m.z;
m.x = ((m.x*0.4)+0.45);
m.y = ((m.y*0.4)+0.8);
m.r = m.q8;
m.b = m.q7;
m.g = m.q6;
		return m;
	},
		'init_eqs_str' : ('t1=0.5;\n' + 't2=0.5;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = 1.4*sin(q2*t2) - t3*cos(0.5*t1);\n' + 'y = t3*sin(-q1*t1) - cos(-0.5*t2);\n' + 'z = 1*sin(t1);\n' + 't1=x;\n' + 't2=y;\n' + 't3=z;\n' + 'x = x*0.4+0.45;\n' + 'y = y*0.4+0.8;\n' + 'r = q8;\n' + 'b = q7;\n' + 'g = q6;'),

		},
		{
		'baseVals' : {
			a : 0.07,
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
m.q1 = 0;
m.q2 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.z = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['t3','t2','t1'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = ((1.4*Math.sin((m.q2*m.t2)))-(m.t3*Math.cos((0.5*m.t1))));
m.y = ((m.t3*Math.sin((-m.q1*m.t1)))-Math.cos((-0.5*m.t2)));
m.z = (1*Math.sin(m.t1));
m.t1 = m.x;
m.t2 = m.y;
m.t3 = m.z;
m.x = ((m.x*0.4)+0.45);
m.y = ((m.y*0.4)+0.8);
m.r = m.q8;
m.b = m.q7;
m.g = m.q6;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = 1.4*sin(q2*t2) - t3*cos(0.5*t1);\n' + 'y = t3*sin(-q1*t1) - cos(-0.5*t2);\n' + 'z = 1*sin(t1);\n' + 't1=x;\n' + 't2=y;\n' + 't3=z;\n' + 'x = x*0.4+0.45;\n' + 'y = y*0.4+0.8;\n' + 'r = q8;\n' + 'b = q7;\n' + 'g = q6;'),

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 2.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_7 = texture2D (sampler_blur1, P_8);\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = dot (((\n' + '    (tmpvar_3.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_5.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_11.y = dot (((\n' + '    (tmpvar_7.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_9.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = (uv + ((tmpvar_11 * texsize.zw) * 6.0));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 1.2)) + rand_frame.xy);\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_fc_main, tmpvar_12).xyz;\n' + '  ret_1 = tmpvar_14;\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_noise_lq, tmpvar_13);\n' + '  ret_1 = (ret_1 + ((\n' + '    (tmpvar_15.xxx - 0.5)\n' + '   * 0.04) - 0.008));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 6.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = dot (tmpvar_7, vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_13.y = dot (tmpvar_12, vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = (uv - (0.25 * tmpvar_13));\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15.x = dot (tmpvar_7, vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_15.y = dot (tmpvar_12, vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = (uv + (0.25 * tmpvar_15));\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur3, tmpvar_14);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_blur1, tmpvar_14);\n' + '  ret_1 = ((0.8 * (\n' + '    (tmpvar_17.xyz * scale3)\n' + '   + bias3)) - ((tmpvar_18.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur1, uv);\n' + '  ret_1 = (ret_1 + (0.6 * (\n' + '    (tmpvar_19.xyz * scale1)\n' + '   + bias1)));\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_blur2, tmpvar_16);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_blur1, tmpvar_16);\n' + '  ret_1 = (ret_1 - ((\n' + '    (tmpvar_20.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_21.xyz * scale1)\n' + '   + bias1)));\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_main, tmpvar_16);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_blur1, tmpvar_16);\n' + '  ret_1 = (ret_1 + ((1.2 * tmpvar_22.xyz) + (0.15 * \n' + '    ((tmpvar_23.xyz * scale1) + bias1)\n' + '  )));\n' + '  ret_1 = (ret_1 + 1.0);\n' + '   float tmpvar_24;\n' + '  tmpvar_24 = dot (ret_1, vec3(0.32, 0.49, 0.29));\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_blur3, tmpvar_14);\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_27;\n' + '  tmpvar_27 = texture2D (sampler_blur1, tmpvar_16);\n' + '  ret_1 = (mix (vec3(tmpvar_24), (\n' + '    (0.75 * vec3(tmpvar_24))\n' + '   * \n' + '    dot ((((0.6 * \n' + '      ((tmpvar_25.xyz * scale3) + bias3)\n' + '    ) - (0.7 * tmpvar_26.xyz)) - (0.3 * (\n' + '      (tmpvar_27.xyz * scale1)\n' + '     + bias1))), vec3(0.32, 0.49, 0.29))\n' + '  ), pow (hue_shader, vec3(tmpvar_24))) * 0.9);\n' + '  ret_1 = (ret_1 * ret_1);\n' + '   vec3 tmpvar_28;\n' + '  tmpvar_28 = sqrt(ret_1);\n' + '  ret_1 = tmpvar_28;\n' + '   vec4 tmpvar_29;\n' + '  tmpvar_29.w = 1.0;\n' + '  tmpvar_29.xyz = tmpvar_28;\n' + '  vec4 ret4 = tmpvar_29;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('q1= -abs(1*sin(time*0.3));\n' + 'q2= 1*sin(time*0.45);\n' + 'q3= 1*cos(time*0.6);\n' + 'wave_r = wave_r + 0.45*(0.6*sin(time*1.3) + 0.4*sin(0.98*time));\n' + 'wave_b = wave_b + 0.45*(0.6*sin(time*1.1) + 0.4*sin(0.78*time));\n' + 'wave_g = wave_g + 0.45*(0.6*sin(time*1.2) + 0.4*sin(0.6*time));\n' + 'q8=1;\n' + 'q7=1;\n' + 'q6=1;\n' + 'warp = 0;\n' + 'zoom = 1;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
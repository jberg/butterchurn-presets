define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.6,
		ib_g : 1.0,
		mv_x : 24.986,
		warpscale : 2.94,
		brighten : 0.0,
		mv_y : 20.031,
		wave_scale : 2.905,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 1.45984,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 0.02049,
		mv_dx : 0.065,
		mv_dy : 0.109,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.6,
		ib_r : 1.0,
		mv_b : 0.816,
		echo_zoom : 1.03,
		ob_size : 0.0,
		b1ed : 0.0,
		wave_smoothing : 0.6,
		warpanimspeed : 1.549,
		wave_dots : 1.0,
		mv_g : 0.099,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.036,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.3,
		decay : 0.5,
		wave_a : 0.9,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.6,
		ib_b : 1.0,
		mv_r : 0.816,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.a = 0;
m.d = 0;
m.dir = 0;
m.d2 = 0;
m.q20 = 0;
m.q21 = 0;
m.r = 0;
m.q15 = 0;
m.v = 0;
m.w = 0;
m.q18 = 0;
m.y1 = 0;
m.q19 = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;
m.y3 = 0;
m.cy1 = 0;
m.x3 = 0;
m.cx1 = 0;
m.x1 = 0;
m.y1 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = 0.995;
m.warp = 0;
m.a = ((m.a*0.98)-((m.bass-m.treb)*0.01));
m.v = ((m.v*0.96)+(m.a*0.12));
m.w = (m.w+(m.v*0.01));
m.q15 = (m.a-m.v);
m.q18 = m.w;
m.q19 = sigmoid((m.treb_att-m.bass_att), 2);
m.d = (m.d+div((((m.bass_att-0.5)*0.01)*60),m.fps));
m.d2 = (m.d2+div((((m.treb_att-0.5)*0.006)*60),m.fps));
m.q20 = (m.d+m.d2);
m.q21 = m.d2;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.r = div(m.bass,4);
m.cx1 = (0.5+(Math.sin((m.time*0.618))*0.2));
m.cy1 = (0.5+(Math.cos((m.time*1.618))*0.2));
m.d = sqrt((((m.x-m.cx1)*(m.x-m.cx1))+((m.y-m.cy1)*(m.y-m.cy1))));
m.dir = ((m.bass*((m.r*m.r)-(m.d*m.d)))*0.3);
m.x1 = ifcond(above(m.d, m.r), 0, (Math.sin((m.y-m.cy1))*m.dir));
m.y1 = ifcond(above(m.d, m.r), 0, (-Math.sin((m.x-m.cx1))*m.dir));
m.cx1 = (0.5+(Math.sin((m.time*2.618))*0.3));
m.cy1 = (0.5+(Math.cos((m.time*3.14))*0.3));
m.d = sqrt((((m.x-m.cx1)*(m.x-m.cx1))+((m.y-m.cy1)*(m.y-m.cy1))));
m.dir = ((-m.mid*((m.r*m.r)-(m.d*m.d)))*0.3);
m.x2 = ifcond(above(m.d, m.r), 0, (Math.sin((m.y-m.cy1))*m.dir));
m.y2 = ifcond(above(m.d, m.r), 0, (-Math.sin((m.x-m.cx1))*m.dir));
m.cx1 = (0.5+(Math.sin((-m.time*2.618))*0.4));
m.cy1 = (0.5+(Math.cos((-m.time*1.14))*0.4));
m.d = sqrt((((m.x-m.cx1)*(m.x-m.cx1))+((m.y-m.cy1)*(m.y-m.cy1))));
m.dir = ((-m.treb*((m.r*m.r)-(m.d*m.d)))*0.3);
m.x3 = ifcond(above(m.d, m.r), 0, (Math.sin((m.y-m.cy1))*m.dir));
m.y3 = ifcond(above(m.d, m.r), 0, (-Math.sin((m.x-m.cx1))*m.dir));
m.v = 0.4;
m.dx = (((m.x1+m.x2)+m.x3)*m.v);
m.dy = (((m.y1+m.y2)+m.y3)*m.v);
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = fract(uv);\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (texsize.zw * 12.0);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv_orig + (vec2(1.0, 0.0) * tmpvar_4));\n' + '  tmpvar_5 = texture2D (sampler_blur3, P_6);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv_orig - (vec2(1.0, 0.0) * tmpvar_4));\n' + '  tmpvar_7 = texture2D (sampler_blur3, P_8);\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = (((tmpvar_5.xyz * scale3) + bias3) - ((tmpvar_7.xyz * scale3) + bias3));\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv_orig + (vec2(0.0, 1.0) * tmpvar_4));\n' + '  tmpvar_10 = texture2D (sampler_blur3, P_11);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (uv_orig - (vec2(0.0, 1.0) * tmpvar_4));\n' + '  tmpvar_12 = texture2D (sampler_blur3, P_13);\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = (((tmpvar_10.xyz * scale3) + bias3) - ((tmpvar_12.xyz * scale3) + bias3));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_fc_main, tmpvar_2);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_blur3, tmpvar_2);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_fc_main, tmpvar_2);\n' + '  ret_1.x = ((tmpvar_15.x - (\n' + '    (((tmpvar_16.xyz * scale3) + bias3) - tmpvar_17.xyz)\n' + '  .x * 0.1)) - 0.035);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_noise_lq, tmpvar_3);\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = tmpvar_9.x;\n' + '  tmpvar_19.y = tmpvar_14.x;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20.x = tmpvar_9.y;\n' + '  tmpvar_20.y = tmpvar_14.y;\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21 = (((uv_orig + \n' + '    (((tmpvar_18.xy - 0.5) * texsize.zw) * 4.0)\n' + '  ) - (\n' + '    (tmpvar_19 * texsize.zw)\n' + '   * 4.0)) + ((tmpvar_20 * texsize.zw) * 8.0));\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_fc_main, tmpvar_21);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_noise_lq, tmpvar_3);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_pc_main, uv_orig);\n' + '  ret_1.y = (((tmpvar_22.y + \n' + '    ((tmpvar_23.xyz - 0.5) * 0.1)\n' + '  ) - 0.012) + (tmpvar_24.z * 0.2)).x;\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_noise_lq, tmpvar_3);\n' + '   vec2 tmpvar_26;\n' + '  tmpvar_26.x = tmpvar_14.x;\n' + '  tmpvar_26.y = -(tmpvar_9.x);\n' + '   vec2 tmpvar_27;\n' + '  tmpvar_27 = ((uv_orig + (\n' + '    ((tmpvar_25.xy - 0.5) * texsize.zw)\n' + '   * 2.0)) + ((tmpvar_26 * texsize.zw) * 64.0));\n' + '   vec4 tmpvar_28;\n' + '  tmpvar_28 = texture2D (sampler_fc_main, tmpvar_27);\n' + '   vec4 tmpvar_29;\n' + '  tmpvar_29 = texture2D (sampler_fc_main, tmpvar_27);\n' + '   vec4 tmpvar_30;\n' + '  tmpvar_30 = texture2D (sampler_blur2, tmpvar_27);\n' + '   vec4 tmpvar_31;\n' + '  tmpvar_31 = texture2D (sampler_noise_lq, tmpvar_3);\n' + '   vec4 tmpvar_32;\n' + '  tmpvar_32 = texture2D (sampler_blur3, uv_orig);\n' + '   vec4 tmpvar_33;\n' + '  tmpvar_33 = texture2D (sampler_blur2, uv_orig);\n' + '  ret_1.z = (((\n' + '    (tmpvar_28.z + ((tmpvar_29.z - (\n' + '      (tmpvar_30.xyz * scale2)\n' + '     + bias2).z) * 0.2))\n' + '   + \n' + '    (tmpvar_31.xyz * 0.1)\n' + '  ) - (\n' + '    (tmpvar_32.xyz * scale3)\n' + '   + bias3).x) - (clamp (\n' + '    (1.0 - ((tmpvar_33.xyz * scale2) + bias2).x)\n' + '  , 0.0, 1.0) * 0.04)).x;\n' + '   vec4 tmpvar_34;\n' + '  tmpvar_34.w = 1.0;\n' + '  tmpvar_34.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_34;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec2 xlat_mutablers;\n' + 'shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret1_2;\n' + '  uv_1 = (0.5 + ((uv - 0.5) * aspect.xy));\n' + '  xlat_mutablers.x = (((ang / 3.14) + (rad * _qd.z)) - _qe.y);\n' + '   vec2 x_3;\n' + '  x_3 = (uv_1 - 0.5);\n' + '  xlat_mutablers.y = ((0.1 / (0.05 + \n' + '    (sqrt(dot (x_3, x_3)) * 1.4)\n' + '  )) + _qf.x);\n' + '  uv_1 = (1.0 - abs((\n' + '    (fract((xlat_mutablers * 0.5)) * 2.0)\n' + '   - 1.0)));\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.y = 0.0;\n' + '  tmpvar_4.x = texsize.z;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (tmpvar_4 * 4.0);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = 0.0;\n' + '  tmpvar_6.y = texsize.w;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (tmpvar_6 * 4.0);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv_1 - tmpvar_5);\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv_1 + tmpvar_5);\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (uv_1 - tmpvar_7);\n' + '  tmpvar_12 = texture2D (sampler_blur1, P_13);\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (uv_1 + tmpvar_7);\n' + '  tmpvar_14 = texture2D (sampler_blur1, P_15);\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.x = dot (((\n' + '    (tmpvar_8.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_10.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_16.y = dot (((\n' + '    (tmpvar_12.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_14.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '   vec3 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_main, uv_1).xyz;\n' + '  ret1_2 = tmpvar_17;\n' + '  uv_1 = (cos((\n' + '    (12.56 * xlat_mutablers)\n' + '   - \n' + '    (vec2(0.0, 10.0) * _qe.w)\n' + '  )) - (8.0 * tmpvar_16));\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18.w = 1.0;\n' + '  tmpvar_18.xyz = (mix (mix (\n' + '    mix ((ret1_2.x * vec3(2.0, 1.2, 0.0)), vec3(0.25, 0.0, 0.5), vec3(clamp (ret1_2.y, 0.0, 1.0)))\n' + '  , vec3(1.8, 1.8, 1.8), vec3(\n' + '    clamp ((ret1_2.z - ret1_2.x), 0.0, 1.0)\n' + '  )), (\n' + '    clamp ((0.02 / sqrt(dot (uv_1, uv_1))), 0.0, 1.0)\n' + '   * hue_shader), vec3(0.92, 0.92, 0.92)) * 6.0);\n' + '  vec4 ret4 = tmpvar_18;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0;\n' + 'y1 = 0;'),
	'frame_eqs_str' : ('zoom = 0.995;\n' + 'warp = 0;\n' + 'a = a*0.98 - (bass-treb)*0.01;\n' + 'v = v*0.96 + a*0.12;\n' + 'w = w + v*0.01;\n' + 'q15 = a-v;\n' + 'q18 = w;\n' + 'q19 = sigmoid(treb_att-bass_att,2);\n' + 'd = d + (bass_att-0.5)*0.01*60/fps;\n' + 'd2 = d2 + (treb_att-0.5)*0.006*60/fps;\n' + 'q20 = d+d2;\n' + 'q21 = d2;'),
	'pixel_eqs_str' : ('r = bass/4;\n' + 'cx1 = 0.5+sin(time*0.618)*0.2;\n' + 'cy1 = 0.5+cos(time*1.618)*0.2;\n' + 'd = sqrt((x-cx1)*(x-cx1)+(y-cy1)*(y-cy1));\n' + 'dir = (bass)*(r*r-d*d)*0.3;\n' + 'x1 = if( above(d,r),0,  sin(y-cy1)*dir);\n' + 'y1 = if( above(d,r),0, -sin(x-cx1)*dir);\n' + 'cx1 = 0.5+sin(time*2.618)*0.3;\n' + 'cy1 = 0.5+cos(time*3.14)*0.3;\n' + 'd = sqrt((x-cx1)*(x-cx1)+(y-cy1)*(y-cy1));\n' + 'dir = -(mid)*(r*r-d*d)*0.3;\n' + 'x2 = if( above(d,r),0,  sin(y-cy1)*dir);\n' + 'y2 = if( above(d,r),0, -sin(x-cx1)*dir);\n' + 'cx1 = 0.5+sin(-time*2.618)*0.4;\n' + 'cy1 = 0.5+cos(-time*1.14)*0.4;\n' + 'd = sqrt((x-cx1)*(x-cx1)+(y-cy1)*(y-cy1));\n' + 'dir = -(treb)*(r*r-d*d)*0.3;\n' + 'x3 = if( above(d,r),0,  sin(y-cy1)*dir);\n' + 'y3 = if( above(d,r),0, -sin(x-cx1)*dir);\n' + 'v = 0.4;\n' + 'dx = (x1+x2+x3)*v;\n' + 'dy = (y1+y2+y3)*v;'),
};

return pmap;
});
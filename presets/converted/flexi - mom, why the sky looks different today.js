define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 16.016,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.267,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.13126,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 11.56276,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.04,
		zoom : 1.05971,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.44,
		decay : 1.0,
		wave_a : 0.004,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q12 = 0;
m.q13 = 0;
m.t = 0;
m.v = 0;
m.q11 = div(0.5,Math.asin(1));
		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = 1;
m.v = ((m.v*0.9)+((m.bass-m.treb)*0.04));
m.t = (m.t+(m.v*0.01));
m.q12 = ((m.time*0.1)+m.t);
m.q13 = (0.25+((m.bass_att-m.treb_att)*0.01));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 2.0231,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.d = 0;
m.tt1 = 0;
m.tt2 = 0;
m.tt3 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = ['d','tt1','tt2','tt3'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.tt3 = ((m.tt3*0.6)+(m.value1*1));
m.tt2 = ((m.tt2*0.7)+(m.tt3*0.2));
m.tt1 = ((m.tt1*0.8)+(m.tt2*0.1));
m.d = ((m.d*0.9)+(m.tt1*0.2));
m.y = (0.5+(((m.d*m.sample)*(1-m.sample))*4));
m.x = (-0.05+(m.sample*1.1));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('tt3 = tt3*0.6 + (value1)*1;\n' + 'tt2 = tt2*0.7 + tt3*0.2;\n' + 'tt1 = tt1*0.8 + tt2*0.1;\n' + 'd = d*0.9 + tt1*0.2;\n' + 'y = 0.5 + d*sample*(1-sample)*4;\n' + 'x =  -0.05 + sample*1.1;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 2.0231,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.d = 0;
m.tt1 = 0;
m.tt2 = 0;
m.tt3 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = ['d','tt1','tt2','tt3'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.tt3 = ((m.tt3*0.6)+(m.value1*1));
m.tt2 = ((m.tt2*0.7)+(m.tt3*0.2));
m.tt1 = ((m.tt1*0.8)+(m.tt2*0.1));
m.d = ((m.d*0.9)+(m.tt1*0.2));
m.y = (0.5+(((m.d*m.sample)*(1-m.sample))*4));
m.x = (-0.05+(m.sample*1.1));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('tt3 = tt3*0.6 + (value1)*1;\n' + 'tt2 = tt2*0.7 + tt3*0.2;\n' + 'tt1 = tt1*0.8 + tt2*0.1;\n' + 'd = d*0.9 + tt1*0.2;\n' + 'y = 0.5 + d*sample*(1-sample)*4;\n' + 'x =  -0.05 + sample*1.1;'),

		},
		{
		'baseVals' : {
			a : 0.3,
			enabled : 0.0,
			b : 1.0,
			g : 0.4,
			scaling : 100.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.6,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.d = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.xxx = 0;
m.yyy = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['yy','xx','sample'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t2 = m.q2;
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
m.t7 = m.q7;
m.t8 = m.q8;
		return m;
	},
		'point_eqs' : function(m) {
m.sample = (1-m.sample);
m.xxx = m.xx;
m.yyy = m.yy;
m.xx = ((((((pow(m.sample, 5)*m.t1)+(((5*pow(m.sample, 4))*(1-m.sample))*m.t1))+(((10*pow(m.sample, 3))*sqr((1-m.sample)))*m.t2))+(((10*sqr(m.sample))*pow((1-m.sample), 3))*m.t3))+(((5*pow((1-m.sample), 4))*m.sample)*m.t4))+(pow((1-m.sample), 5)*m.t4));
m.yy = ((((((pow(m.sample, 5)*m.t5)+(((5*pow(m.sample, 4))*(1-m.sample))*m.t5))+(((10*pow(m.sample, 3))*sqr((1-m.sample)))*m.t6))+(((10*sqr(m.sample))*pow((1-m.sample), 3))*m.t7))+(((5*pow((1-m.sample), 4))*m.sample)*m.t8))+(pow((1-m.sample), 5)*m.t8));
m.d = div(1,sqrt((sqr((m.xx-m.xxx))+sqr((m.yy-m.yyy)))));
m.x = (m.xx+((((m.sample*(1-m.sample))*(m.value1-m.value2))*(m.yy-m.yyy))*m.d));
m.y = (m.yy-((((m.sample*(1-m.sample))*(m.value1-m.value2))*(m.xx-m.xxx))*m.d));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't7 = q7;\n' + 't8 = q8;'),
		'point_eqs_str' : ('sample = 1-sample;\n' + 'xxx = xx;\n' + 'yyy = yy;\n' + 'xx = pow(sample,5)*t1 + 5*pow(sample,4)*(1-sample)*t1 + 10*pow(sample,3)*sqr(1-sample)*t2+ 10*sqr(sample)*pow(1-sample,3)*t3 + 5*pow(1-sample,4)*sample*t4 + pow(1-sample,5)*t4;\n' + 'yy = pow(sample,5)*t5 + 5*pow(sample,4)*(1-sample)*t5 + 10*pow(sample,3)*sqr(1-sample)*t6+ 10*sqr(sample)*pow(1-sample,3)*t7 + 5*pow(1-sample,4)*sample*t8 + pow(1-sample,5)*t8;\n' + 'd = 1/sqrt(sqr(xx-xxx)+sqr(yy-yyy));\n' + 'x = xx + sample*(1-sample)*(value1-value2)*(yy-yyy)*d;\n' + 'y = yy - sample*(1-sample)*(value1-value2)*(xx-xxx)*d;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.0,
			scaling : 2.44415,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t8 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t8 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = -m.t8;
m.y = ((1+m.t8)*0.01);
m.x = m.sample;
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('t8 = 1;'),
		'point_eqs_str' : ('t8 = -t8;\n' + 'y = (1+t8)*0.01;\n' + 'x = sample;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.12566,
			thickoutline : 1.0,
			g : 0.99,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.51878,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.01,
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

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.24471,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.77,
			r : 1.0,
			border_g : 1.0,
			rad : 0.80013,
			x : 0.5,
			y : 0.5,
			ang : 4.64954,
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
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.12566,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.51878,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 3.0054,
			x : 1.0,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.12566,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.51878,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.39872,
			x : 1.0,
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
	'warp' : ('shader_body {\n' + '   vec2 my_uv_1;\n' + '   vec2 d_2;\n' + '   vec3 ret_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (texsize.zw * 4.0);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = fract((uv + (vec2(1.0, 0.0) * tmpvar_4)));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur1, tmpvar_5);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = fract((uv - (vec2(1.0, 0.0) * tmpvar_4)));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_blur1, tmpvar_7);\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = (((tmpvar_6.xyz * scale1) + bias1) - ((tmpvar_8.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = fract((uv + (vec2(0.0, 1.0) * tmpvar_4)));\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_blur1, tmpvar_10);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = fract((uv - (vec2(0.0, 1.0) * tmpvar_4)));\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_blur1, tmpvar_12);\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = (((tmpvar_11.xyz * scale1) + bias1) - ((tmpvar_13.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur1, uv);\n' + '   vec3 tmpvar_16;\n' + '  tmpvar_16 = ((tmpvar_15.xyz * scale1) + bias1);\n' + '  d_2 = -(tmpvar_4);\n' + '   float tmpvar_17;\n' + '  tmpvar_17 = (d_2 * 4.0).x;\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18.x = tmpvar_9.y;\n' + '  tmpvar_18.y = tmpvar_14.y;\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = tmpvar_9.x;\n' + '  tmpvar_19.y = tmpvar_14.x;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = ((uv - (tmpvar_18 * d_2)) - (tmpvar_19 * tmpvar_17));\n' + '   vec4 tmpvar_21;\n' + '   vec2 P_22;\n' + '  P_22 = (tmpvar_20 - floor(tmpvar_20));\n' + '  tmpvar_21 = texture2D (sampler_fc_main, P_22);\n' + '  ret_3.y = tmpvar_21.y;\n' + '  ret_3.y = (ret_3.y + ((\n' + '    (ret_3.y - tmpvar_16.y)\n' + '   * 0.042) + -0.0075));\n' + '   vec2 tmpvar_23;\n' + '  tmpvar_23.x = tmpvar_9.x;\n' + '  tmpvar_23.y = tmpvar_14.x;\n' + '   vec2 tmpvar_24;\n' + '  tmpvar_24.x = tmpvar_9.z;\n' + '  tmpvar_24.y = tmpvar_14.z;\n' + '  my_uv_1 = ((uv - (tmpvar_23 * d_2)) - (tmpvar_24 * tmpvar_17));\n' + '   vec4 tmpvar_25;\n' + '   vec2 P_26;\n' + '  P_26 = (my_uv_1 - floor(my_uv_1));\n' + '  tmpvar_25 = texture2D (sampler_fc_main, P_26);\n' + '  ret_3.x = tmpvar_25.x;\n' + '  ret_3.x = (ret_3.x + ((\n' + '    (ret_3.x - tmpvar_16.x)\n' + '   * 0.042) + -0.0075));\n' + '   vec2 tmpvar_27;\n' + '  tmpvar_27.x = tmpvar_9.z;\n' + '  tmpvar_27.y = tmpvar_14.z;\n' + '   vec2 tmpvar_28;\n' + '  tmpvar_28.x = tmpvar_9.y;\n' + '  tmpvar_28.y = tmpvar_14.y;\n' + '  my_uv_1 = ((uv - (tmpvar_27 * d_2)) - (tmpvar_28 * tmpvar_17));\n' + '   vec4 tmpvar_29;\n' + '   vec2 P_30;\n' + '  P_30 = (my_uv_1 - floor(my_uv_1));\n' + '  tmpvar_29 = texture2D (sampler_fc_main, P_30);\n' + '  ret_3.z = tmpvar_29.z;\n' + '  ret_3.z = (ret_3.z + ((\n' + '    (ret_3.z - tmpvar_16.z)\n' + '   * 0.042) + -0.0075));\n' + '   vec4 tmpvar_31;\n' + '  tmpvar_31.w = 1.0;\n' + '  tmpvar_31.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_31;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '  uv_1 = uv;\n' + '   vec3 bands_2;\n' + '   vec3 ret_3;\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = -(_qc.w);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = ((uv - 0.5) * aspect.wz);\n' + '   float tmpvar_6;\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (min (abs(\n' + '    (tmpvar_5.x / tmpvar_5.y)\n' + '  ), 1.0) / max (abs(\n' + '    (tmpvar_5.x / tmpvar_5.y)\n' + '  ), 1.0));\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = (tmpvar_7 * tmpvar_7);\n' + '  tmpvar_8 = (((\n' + '    ((((\n' + '      ((((-0.01213232 * tmpvar_8) + 0.05368138) * tmpvar_8) - 0.1173503)\n' + '     * tmpvar_8) + 0.1938925) * tmpvar_8) - 0.3326756)\n' + '   * tmpvar_8) + 0.9999793) * tmpvar_7);\n' + '  tmpvar_8 = (tmpvar_8 + (float(\n' + '    (abs((tmpvar_5.x / tmpvar_5.y)) > 1.0)\n' + '  ) * (\n' + '    (tmpvar_8 * -2.0)\n' + '   + 1.570796)));\n' + '  tmpvar_6 = (tmpvar_8 * sign((tmpvar_5.x / tmpvar_5.y)));\n' + '  if ((abs(tmpvar_5.y) > (1e-08 * abs(tmpvar_5.x)))) {\n' + '    if ((tmpvar_5.y < 0.0)) {\n' + '      if ((tmpvar_5.x >= 0.0)) {\n' + '        tmpvar_6 += 3.141593;\n' + '      } else {\n' + '        tmpvar_6 = (tmpvar_6 - 3.141593);\n' + '      };\n' + '    };\n' + '  } else {\n' + '    tmpvar_6 = (sign(tmpvar_5.x) * 1.570796);\n' + '  };\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9.x = ((tmpvar_6 * _qc.z) - tmpvar_4);\n' + '  tmpvar_9.y = (((_qd.x * \n' + '    log(sqrt(dot (tmpvar_5, tmpvar_5)))\n' + '  ) + (tmpvar_6 * _qc.z)) + tmpvar_4);\n' + '  uv_1 = (0.5 + (0.5 - abs(\n' + '    ((fract((tmpvar_9 * 0.5)) * 2.0) - 1.0)\n' + '  )));\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_main, uv_1).xyz;\n' + '  bands_2 = tmpvar_10;\n' + '  ret_3 = (vec3(dot (bands_2, vec3(0.32, 0.49, 0.29))) * mix (vec3(1.0, 1.0, 1.0), vec3(0.2, 0.5, 1.0), bands_2.xxx));\n' + '  ret_3 = (ret_3 * 2.0);\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11.w = 1.0;\n' + '  tmpvar_11.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_11;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('q11 = 0.5/asin(1);'),
	'frame_eqs_str' : ('zoom = 1;\n' + 'v = v*0.9 + (bass-treb)*0.04;\n' + 't = t+ v*0.01;\n' + 'q12 = time*0.1 + t;\n' + 'q13 = 0.25 + (bass_att-treb_att)*0.01;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 9.181,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.242,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.04914,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.65309,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 1.0,
		ob_size : 0.05,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 0.88,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.04,
		zoom : 0.87866,
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
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
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
m.translation_u = 0;
m.c_inv_r = 0;
m.translation_v = 0;
m.scale = 0;
m.translation_x = 0;
m.a_i = 0;
m.translation_y = 0;
m.b_i = 0;
m.bcad_i = 0;
m.q11 = 0;
m.q12 = 0;
m.angle = 0;
m.q13 = 0;
m.a_r = 0;
m.q14 = 0;
m.q15 = 0;
m.b_r = 0;
m.q16 = 0;
m.q17 = 0;
m.bcad_r = 0;
m.q18 = 0;
m.c_inv_i = 0;
m.x1 = 0.9;
m.y1 = 0.5;
m.x2 = 0.5;
m.y2 = 0.5;
m.x3 = 0.5;
m.y3 = 0.5;
m.x4 = 0.5;
m.y4 = 0.5;
		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = 1;
m.scale = 1;
m.angle = (m.time*0.1);
m.translation_x = 0;
m.translation_y = 0.12;
m.a_r = (Math.cos(m.angle)*m.scale);
m.a_i = (Math.sin(m.angle)*m.scale);
m.b_r = m.translation_x;
m.b_i = m.translation_y;
m.scale = 1.6;
m.angle = 0;
m.translation_u = 0;
m.translation_v = 0;
m.q15 = (Math.cos(m.angle)*m.scale);
m.q16 = (Math.sin(m.angle)*m.scale);
m.q17 = m.translation_u;
m.q18 = m.translation_v;
m.c_inv_r = div(m.q15,((m.q15*m.q15)+(m.q16*m.q16)));
m.c_inv_i = div(m.q16,((m.q15*m.q15)+(m.q16*m.q16)));
m.q11 = ((m.a_r*m.c_inv_r)-(m.a_i*m.c_inv_i));
m.q12 = ((m.a_r*m.c_inv_i)-(m.a_i*m.c_inv_r));
m.bcad_r = (((m.b_r*m.q15)-(m.b_i*m.q16))-((m.a_r*m.q17)-(m.a_i*m.q18)));
m.bcad_i = (((m.b_r*m.q16)-(m.b_i*m.q15))-((m.a_r*m.q18)-(m.a_i*m.q17)));
m.q13 = ((m.bcad_r*m.c_inv_r)-(m.bcad_i*m.c_inv_i));
m.q14 = ((m.bcad_r*m.c_inv_i)-(m.bcad_i*m.c_inv_r));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 1.0,
			scaling : 2.0231,
			samples : 512.0,
			additive : 1.0,
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
m.r = 1;
m.g = 0;
m.b = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.tt3 = ((m.tt3*0.6)+(m.value1*1));
m.tt2 = ((m.tt2*0.7)+(m.tt3*0.2));
m.tt1 = ((m.tt1*0.8)+(m.tt2*0.1));
m.d = ((m.d*0.9)+(m.tt1*0.2));
m.y = (0.6+(((m.d*m.sample)*(1-m.sample))*2));
m.x = (-0.05+(m.sample*1.1));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('r = 1;\n' + ' g = 0;\n' + ' b = 1;'),
		'point_eqs_str' : ('tt3 = tt3*0.6 + (value1)*1;\n' + 'tt2 = tt2*0.7 + tt3*0.2;\n' + 'tt1 = tt1*0.8 + tt2*0.1;\n' + 'd = d*0.9 + tt1*0.2;\n' + 'y = 0.6 + d*sample*(1-sample)*2;\n' + 'x =  -0.05 + sample*1.1;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 2.44415,
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
m.c = 0;
m.t8 = 0;
m.t = 0;
m.pi3 = 0;
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
m.y = m.sample;
m.x = (0.5+(m.t8*0.005));
m.pi3 = ((3.1415*2)*0.3333);
m.t = (m.time+(m.sample*2));
m.c = 2;
m.r = (Math.sin(m.t)*m.c);
m.g = (Math.sin((m.t+m.pi3))*m.c);
m.b = (Math.sin((m.t-m.pi3))*m.c);
m.r = ifcond(above(m.r, 1), 1, m.r);
m.r = ifcond(below(m.r, 0), 0, m.r);
m.g = ifcond(above(m.g, 1), 1, m.g);
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = ifcond(above(m.b, 1), 1, m.b);
m.b = ifcond(below(m.b, 0), 0, m.b);
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('t8 = 1;'),
		'point_eqs_str' : ('t8 = -t8;\n' + 'y = sample;\n' + 'x = 0.5 + t8*0.005;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = time + sample*2;\n' + 'c=2;\n' + 'r = sin(t)*c;\n' + 'g = sin(t+pi3)*c;\n' + 'b = sin(t-pi3)*c;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);'),

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
			a : 0.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.12566,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.51878,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.01,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.01,
			x : 0.5,
			y : 0.04,
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
			r2 : 0.0,
			a : 0.99,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.49831,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.32907,
			x : 0.49,
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
	'warp' : ('shader_body {\n' + '   float conway_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + vec2(0.02, 0.0));\n' + '  tmpvar_3 = texture2D (sampler_blur2, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - vec2(0.02, 0.0));\n' + '  tmpvar_5 = texture2D (sampler_blur2, P_6);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + vec2(0.0, 0.02));\n' + '  tmpvar_7 = texture2D (sampler_blur2, P_8);\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv - vec2(0.0, 0.02));\n' + '  tmpvar_9 = texture2D (sampler_blur2, P_10);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = (((\n' + '    ((tmpvar_3.xyz * scale2) + bias2)\n' + '   - \n' + '    ((tmpvar_5.xyz * scale2) + bias2)\n' + '  ).y * 1280.0) * texsize.z);\n' + '  tmpvar_11.y = (((\n' + '    ((tmpvar_7.xyz * scale2) + bias2)\n' + '   - \n' + '    ((tmpvar_9.xyz * scale2) + bias2)\n' + '  ).y * 1024.0) * texsize.w);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = (uv - (tmpvar_11 * 0.004));\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_pc_main, tmpvar_12);\n' + '  ret_2.y = tmpvar_13.y;\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur1, uv);\n' + '  ret_2.y = (ret_2.y + ((\n' + '    ((ret_2.y - ((tmpvar_14.xyz * scale1) + bias1).y) - 0.1)\n' + '   * 0.1) + 0.02));\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17 = (vec2(0.0, 1.0) * texsize.zw);\n' + '  P_16 = (uv - tmpvar_17);\n' + '  tmpvar_15 = texture2D (sampler_fc_main, P_16);\n' + '  ret_2.z = (tmpvar_15.z - 0.004);\n' + '   vec2 P_18;\n' + '  P_18 = (uv_orig - texsize.zw);\n' + '   float tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_pw_main, P_18).x;\n' + '  conway_1 = tmpvar_19;\n' + '   vec4 tmpvar_20;\n' + '   vec2 P_21;\n' + '  P_21 = (uv_orig + (vec2(0.0, -1.0) * texsize.zw));\n' + '  tmpvar_20 = texture2D (sampler_pw_main, P_21);\n' + '  conway_1 = (conway_1 + tmpvar_20.x);\n' + '   vec4 tmpvar_22;\n' + '   vec2 P_23;\n' + '  P_23 = (uv_orig + (vec2(1.0, -1.0) * texsize.zw));\n' + '  tmpvar_22 = texture2D (sampler_pw_main, P_23);\n' + '  conway_1 = (conway_1 + tmpvar_22.x);\n' + '   vec4 tmpvar_24;\n' + '   vec2 P_25;\n' + '  P_25 = (uv_orig + (vec2(-1.0, 0.0) * texsize.zw));\n' + '  tmpvar_24 = texture2D (sampler_pw_main, P_25);\n' + '  conway_1 = (conway_1 + tmpvar_24.x);\n' + '   vec4 tmpvar_26;\n' + '   vec2 P_27;\n' + '  P_27 = (uv_orig + (vec2(1.0, 0.0) * texsize.zw));\n' + '  tmpvar_26 = texture2D (sampler_pw_main, P_27);\n' + '  conway_1 = (conway_1 + tmpvar_26.x);\n' + '   vec4 tmpvar_28;\n' + '   vec2 P_29;\n' + '  P_29 = (uv_orig + (vec2(-1.0, 1.0) * texsize.zw));\n' + '  tmpvar_28 = texture2D (sampler_pw_main, P_29);\n' + '  conway_1 = (conway_1 + tmpvar_28.x);\n' + '   vec4 tmpvar_30;\n' + '   vec2 P_31;\n' + '  P_31 = (uv_orig + tmpvar_17);\n' + '  tmpvar_30 = texture2D (sampler_pw_main, P_31);\n' + '  conway_1 = (conway_1 + tmpvar_30.x);\n' + '   vec4 tmpvar_32;\n' + '   vec2 P_33;\n' + '  P_33 = (uv_orig + texsize.zw);\n' + '  tmpvar_32 = texture2D (sampler_pw_main, P_33);\n' + '  conway_1 = (conway_1 + tmpvar_32.x);\n' + '  conway_1 = (conway_1 - fract(conway_1));\n' + '   float tmpvar_34;\n' + '   float tmpvar_35;\n' + '  tmpvar_35 = clamp (texture2D (sampler_pc_main, uv_orig).x, 0.0, 1.0);\n' + '  tmpvar_34 = tmpvar_35;\n' + '  ret_2.x = (clamp ((1.0 - \n' + '    abs((conway_1 - 3.0))\n' + '  ), 0.0, 1.0) * (1.0 - tmpvar_34));\n' + '  ret_2.x = (ret_2.x + (clamp (\n' + '    max ((1.0 - abs((conway_1 - 2.0))), (1.0 - abs((conway_1 - 3.0))))\n' + '  , 0.0, 1.0) * tmpvar_34));\n' + '   vec4 tmpvar_36;\n' + '  tmpvar_36.w = 1.0;\n' + '  tmpvar_36.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_36;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 moebius_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (uv - 0.5);\n' + '  tmpvar_3 = (tmpvar_4 * aspect.xy);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = ((tmpvar_3.x * _qd.z) - (tmpvar_3.y * _qd.w));\n' + '  tmpvar_5.y = ((tmpvar_3.x * _qd.w) - (tmpvar_3.y * _qd.z));\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (tmpvar_5 + _qe.xy);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7.x = ((_qd.x * tmpvar_6.x) + (_qd.y * tmpvar_6.y));\n' + '  tmpvar_7.y = ((_qd.y * tmpvar_6.x) - (_qd.x * tmpvar_6.y));\n' + '  moebius_1 = (((tmpvar_7 / \n' + '    ((tmpvar_6.x * tmpvar_6.x) + (tmpvar_6.y * tmpvar_6.y))\n' + '  ) + _qc.zw) * 0.5);\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = sqrt(dot (moebius_1, moebius_1));\n' + '  moebius_1 = (0.5 + ((\n' + '    (1.0 - abs(((\n' + '      fract((moebius_1 * 0.5))\n' + '     * 2.0) - 1.0)))\n' + '   - 0.5) * 0.95));\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = (0.5 + (tmpvar_4 * 0.2));\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_main, tmpvar_9);\n' + '  ret_2 = (tmpvar_10.z * vec3(0.4, 0.0, 0.7));\n' + '   float tmpvar_11;\n' + '  tmpvar_11 = clamp (texture2D (sampler_fc_main, moebius_1).y, 0.0, 1.0);\n' + '  ret_2 = (mix (ret_2, vec3(0.0, 1.0, 1.0), vec3(tmpvar_11)) * (1.4 - pow (\n' + '    (tmpvar_8 * 0.8)\n' + '  , 0.3)));\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = clamp ((texture2D (sampler_fc_main, tmpvar_9).y - texture2D (sampler_pc_main, tmpvar_9).y), 0.0, 1.0);\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_main, tmpvar_9).xxx;\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = vec3((texture2D (sampler_pc_main, tmpvar_9).x * 0.75));\n' + '   vec3 tmpvar_15;\n' + '  tmpvar_15 = mix (mix (mix (ret_2, vec3(4.0, 1.0, 0.0), vec3(\n' + '    ((tmpvar_12 * 4.0) * (tmpvar_8 * tmpvar_8))\n' + '  )), vec3(-4.0, -4.0, -4.0), tmpvar_13), vec3(2.0, 2.0, 2.0), tmpvar_14);\n' + '  ret_2 = tmpvar_15;\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = tmpvar_15;\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0.9;\n' + 'y1 = 0.5;\n' + 'x2 = 0.5;\n' + ' y2 = 0.5;\n' + 'x3 = 0.5;\n' + ' y3 = 0.5;\n' + 'x4 = 0.5;\n' + ' y4 = 0.5;'),
	'frame_eqs_str' : ('zoom = 1;\n' + 'scale = 1;\n' + 'angle = time*.1;\n' + 'translation_x = 0;\n' + 'translation_y = 0.12;\n' + 'a_r = cos(angle)*scale;\n' + 'a_i = sin(angle)*scale;\n' + 'b_r = translation_x;\n' + 'b_i = translation_y;\n' + 'scale = 1.6;\n' + 'angle = 0;\n' + 'translation_u = 0;\n' + 'translation_v = 0;\n' + 'q15 = cos(angle)*scale;\n' + 'q16 = sin(angle)*scale;\n' + 'q17 = translation_u;\n' + 'q18 = translation_v;\n' + 'c_inv_r = q15/(q15*q15+q16*q16);\n' + 'c_inv_i = q16/(q15*q15+q16*q16);\n' + 'q11 = (a_r*c_inv_r - a_i*c_inv_i);\n' + 'q12 = (a_r*c_inv_i - a_i*c_inv_r);\n' + 'bcad_r = (b_r*q15 - b_i*q16)-(a_r*q17-a_i*q18);\n' + 'bcad_i = (b_r*q16 - b_i*q15)-(a_r*q18-a_i*q17);\n' + 'q13 = bcad_r*c_inv_r - bcad_i*c_inv_i;\n' + 'q14 = bcad_r*c_inv_i - bcad_i*c_inv_r;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
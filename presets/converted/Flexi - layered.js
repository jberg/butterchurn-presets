define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.04,
		ib_g : 1.0,
		mv_x : 64.0,
		warpscale : 0.107,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 2.136,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0018,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 1.0,
		mv_b : 0.5,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.96098,
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
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.6,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 0.009,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 1.0,
		mv_r : 0.5,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.6,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.tt = 0;
m.ww = 0;
m.xx = 0;
m.yy = 0;
m.q2 = 0;
m.vvb = 0;
m.q3 = 0;
m.vx = 0;
m.q4 = 0;
m.vy = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.rx = 0;
m.q8 = 0;
m.ry = 0;
m.q9 = 0;
m.vb = 0;
m.m = 0;
m.vvm = 0;
m.yh = 0;
m.xh = 0;
m.wh = 0;
m.t = 0;
m.vvt = 0;
m.v = 0;
m.ax = 0;
m.w = 0;
m.vm = 0;
m.ay = 0;
m.ddx = 0;
m.pi = 0;
m.ddy = 0;
m.vt = 0;
m.wv = 0;
m.x1 = 0;
m.y1 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.vb = ((m.vb*0.95)+(((1-m.vb)*pow(m.bass, 2))*0.02));
m.vvb = ((m.vvb*0.95)+(((1-m.vvb)*m.vb)*0.01));
m.vm = ((m.vm*0.95)+(((1-m.vm)*pow(m.mid, 2))*0.02));
m.vvm = ((m.vvm*0.95)+(((1-m.vvm)*m.vm)*0.01));
m.vt = ((m.vt*0.95)+(((1-m.vt)*pow(m.treb, 2))*0.02));
m.vvt = ((m.vvt*0.95)+(((1-m.vvt)*m.vt)*0.01));
m.vvb = Math.min(1, Math.max(0, m.vvb));
m.vvm = Math.min(1, Math.max(0, m.vvm));
m.vvt = Math.min(1, Math.max(0, m.vvt));
m.q1 = (m.vvb*2);
m.q2 = (m.vvm*2);
m.q3 = (m.vvt*2);
m.v = 2;
m.bb = (m.bb-(m.vvb*m.v));
m.mm = (m.mm-(m.vvm*m.v));
m.tt = (m.tt-(m.vvt*m.v));
m.q4 = m.bb;
m.q5 = m.mm;
m.q6 = m.tt;
m.q7 = 1.81;
m.q8 = (0.448+((m.vm-m.vt)*0.3));
m.q9 = (0.701+((m.vb-m.vm)*0.3));
		m.rkeys = ['ax','ay'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.pi = Math.asin(1);
m.x = (m.x-0.5);
m.y = (m.y-0.5);
m.d = ((((m.q4-m.q6)*0.4)+(((m.rad-0.3)*(m.q1-m.q3))*2))+m.pi);
m.xx = ((Math.sin(m.d)*m.x)-(Math.cos(m.d)*m.y));
m.yy = ((Math.cos(m.d)*m.x)+(Math.sin(m.d)*m.y));
m.x = m.xx;
m.y = m.yy;
m.t = (m.time*0);
m.xh = m.x;
m.yh = m.y;
m.w = ((m.q4-m.q6)*0.8);
m.m = (-1+(m.q2*2));
m.wv = (m.pi-(Math.sin(m.w)*m.m));
m.wh = (m.pi-(Math.cos(m.w)*m.m));
m.d = (6*sqrt(m.q2));
m.ww = 1.1;
m.ddx = Math.sin((((2*m.pi)-m.wv)-(m.x*m.ww)));
m.ddy = Math.sin((((2*m.pi)-m.wh)-(m.y*m.ww)));
m.rx = ifcond(above((m.ddx*m.ddy), 0), div(Math.sin(m.wv),m.ddx), 0);
m.ry = ifcond(above((m.ddy*m.ddy), 0), div(Math.sin(m.wh),m.ddy), 0);
m.v = div((((-m.q2*0.04)*div(m.d,m.ww))*1728),(m.meshx*m.meshy));
m.ax = (m.ax+(Math.sin(m.w)*m.v));
m.ay = (m.ay+(Math.cos(m.w)*m.v));
m.vx = ifcond(equal((m.rx*m.ry), 0), 0, m.ax);
m.vy = ifcond(equal((m.rx*m.ry), 0), 0, m.ay);
m.dx = ((((-m.xh*m.rx)*m.ry)*m.d)+(m.vx*0.001));
m.dy = ((((-m.yh*m.rx)*m.ry)*m.d)+(m.vy*0.001));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 1.0,
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
m.y = (0.5+((m.d*m.sample)*(1-m.sample)));
m.x = (-0.05+(m.sample*1.1));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('tt3 = tt3*0.6 + (value1)*1;\n' + 'tt2 = tt2*0.7 + tt3*0.2;\n' + 'tt1 = tt1*0.8 + tt2*0.1;\n' + 'd = d*0.9 + tt1*0.2;\n' + 'y = 0.5 + d*sample*(1-sample);\n' + 'x =  -0.05 + sample*1.1;'),

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
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.5,
			border_g : 1.0,
			rad : 0.86644,
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
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.04,
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
			rad : 0.81623,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 36.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (1-m.q1);
m.y = m.q2;
m.x = (0.5+((m.x-0.5)*0.25));
m.y = (0.5+((m.y-0.5)*0.25));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 1-q1;\n' + 'y = q2;\n' + 'x = 0.5 + (x - 0.5)*0.25;\n' + 'y = 0.5 + (y - 0.5)*0.25;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 uv_z_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (1.0 - abs((\n' + '    (fract((uv * 0.5)) * 2.0)\n' + '   - 1.0)));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_fc_main, tmpvar_3);\n' + '  ret_2.x = tmpvar_4.y;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (texsize.zw * 6.0);\n' + '   vec2 tmpvar_6;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (uv_orig - 0.5);\n' + '  tmpvar_6 = ((tmpvar_7 * 0.996) + 0.5);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (tmpvar_6 + (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (tmpvar_6 - (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (tmpvar_6 + (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_12 = texture2D (sampler_blur1, P_13);\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (tmpvar_6 - (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_14 = texture2D (sampler_blur1, P_15);\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.x = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1)).z;\n' + '  tmpvar_16.y = (((tmpvar_12.xyz * scale1) + bias1) - ((tmpvar_14.xyz * scale1) + bias1)).z;\n' + '  uv_z_1 = (tmpvar_6 - ((tmpvar_16 * texsize.zw) * 2.0));\n' + '   float tmpvar_17;\n' + '  tmpvar_17 = clamp ((1.0 - (\n' + '    sqrt(dot (tmpvar_7, tmpvar_7))\n' + '   * 3.2)), 0.0, 1.0);\n' + '   float tmpvar_18;\n' + '  tmpvar_18 = max (((\n' + '    (texture2D (sampler_fc_main, tmpvar_3).x - 0.5)\n' + '   * 3.0) * tmpvar_17), texture2D (sampler_fc_main, uv_z_1).z);\n' + '  ret_2.z = tmpvar_18;\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_fc_main, uv_z_1);\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = clamp (uv_z_1, 0.0, 1.0);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_blur1, tmpvar_20);\n' + '  ret_2.z = (ret_2.z + ((tmpvar_19.z - \n' + '    ((tmpvar_21.xyz * scale1) + bias1)\n' + '  .z) * 0.02));\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22 = mix (uv, uv_orig, vec2(1.0004, 1.0004));\n' + '   float tmpvar_23;\n' + '  tmpvar_23 = max (texture2D (sampler_fc_main, tmpvar_22).y, texture2D (sampler_fc_main, uv_orig).z);\n' + '  ret_2.y = (tmpvar_23 - 0.008);\n' + '  ret_2.z = (ret_2.z * (1.0 + (ret_2.y * 0.024)));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24.w = 1.0;\n' + '  tmpvar_24.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_24;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp float xlat_mutabled;\n' + 'highp vec3 xlat_mutabledx;\n' + 'highp vec3 xlat_mutabledy;\n' + 'shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '  xlat_mutabled = (texsize.zw * 2.0).x;\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_3 = texture2D (sampler_main, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_5 = texture2D (sampler_main, P_6);\n' + '  xlat_mutabledx = ((tmpvar_3.xyz - tmpvar_5.xyz) * 8.0);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_blur3, uv);\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = (((xlat_mutabledx.x + 0.5) * (\n' + '    (tmpvar_7.xyz * scale3)\n' + '   + bias3).x) * vec3(1.0, 0.8, -0.4));\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (uv - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '  xlat_mutabledx = (((tmpvar_9.xyz * scale1) + bias1) - ((tmpvar_11.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (uv + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_13 = texture2D (sampler_blur1, P_14);\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (uv - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_15 = texture2D (sampler_blur1, P_16);\n' + '  xlat_mutabledy = (((tmpvar_13.xyz * scale1) + bias1) - ((tmpvar_15.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = xlat_mutabledx.z;\n' + '  tmpvar_17.y = xlat_mutabledy.z;\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18.x = xlat_mutabledx.x;\n' + '  tmpvar_18.y = xlat_mutabledy.x;\n' + '  uv_1 = ((uv - (\n' + '    (tmpvar_17 * texsize.zw)\n' + '   * 128.0)) + tmpvar_18);\n' + '   vec4 tmpvar_19;\n' + '   vec2 P_20;\n' + '  P_20 = (uv_1 + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_19 = texture2D (sampler_blur1, P_20);\n' + '   vec4 tmpvar_21;\n' + '   vec2 P_22;\n' + '  P_22 = (uv_1 - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_21 = texture2D (sampler_blur1, P_22);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_main, uv_1);\n' + '  ret_2 = (((1.0 - \n' + '    (abs(((\n' + '      (tmpvar_19.xyz * scale1)\n' + '     + bias1) - (\n' + '      (tmpvar_21.xyz * scale1)\n' + '     + bias1))).z * 4.0)\n' + '  ) * tmpvar_23.z) * vec3(0.5, 0.5, 1.0));\n' + '   vec3 tmpvar_24;\n' + '  tmpvar_24 = mix (ret_2, vec3(2.0, 2.0, 2.0), (tmpvar_8 * 0.5));\n' + '  ret_2 = tmpvar_24;\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25.w = 1.0;\n' + '  tmpvar_25.xyz = tmpvar_24;\n' + '  vec4 ret4 = tmpvar_25;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0;\n' + 'y1 = 0;'),
	'frame_eqs_str' : ('vb = vb*0.95 + (1-vb)*pow(bass,2)*0.02;\n' + 'vvb = vvb*0.95 + (1-vvb)*vb*0.01;\n' + 'vm = vm*0.95 + (1-vm)*pow(mid,2)*0.02;\n' + 'vvm = vvm*0.95 + (1-vvm)*vm*0.01;\n' + 'vt = vt*0.95 + (1-vt)*pow(treb,2)*0.02;\n' + 'vvt = vvt*0.95 + (1-vvt)*vt*0.01;\n' + 'vvb = min(1,max(0,vvb));\n' + 'vvm = min(1,max(0,vvm));\n' + 'vvt = min(1,max(0,vvt));\n' + 'q1 = vvb*2;\n' + 'q2 = vvm*2;\n' + 'q3 = vvt*2;\n' + 'v=2;\n' + 'bb = bb - vvb*v;\n' + 'mm = mm - vvm*v;\n' + 'tt = tt - vvt*v;\n' + 'q4 = bb;\n' + 'q5 = mm;\n' + 'q6 = tt;\n' + 'q7 = 1.81;\n' + 'q8 = 0.448 + (vm-vt)*0.3;\n' + 'q9 = 0.701 + (vb-vm)*0.3;'),
	'pixel_eqs_str' : ('pi = asin(1);\n' + 'x = x-0.5;\n' + 'y = y- 0.5;\n' + 'd = (q4-q6)*0.4 +  (rad-0.3)*(q1-q3)*2 + pi;\n' + 'xx = sin(d)*x - cos(d)*y;\n' + 'yy = cos(d)*x + sin(d)*y;\n' + 'x = xx;\n' + 'y = yy;\n' + 't = time*0;\n' + 'xh = x;\n' + 'yh = y;\n' + 'w = (q4-q6)*0.8;\n' + 'm = -1 + q2*2;\n' + 'wv = pi-sin(w)*m;\n' + 'wh = pi-cos(w)*m;\n' + 'd = 6*sqrt(q2);\n' + 'ww = 1.1;\n' + 'ddx = sin(2*pi - wv -(x)*ww);\n' + 'ddy = sin(2*pi - wh -(y)*ww);\n' + 'rx = if(above(ddx*ddy,0),sin(wv)/ddx,0);\n' + 'ry = if(above(ddy*ddy,0),sin(wh)/ddy,0);\n' + 'v = -(q2)*.04*(d/ww)*1728/(meshx*meshy);\n' + 'ax = ax + sin(w)*v;\n' + 'ay = ay + cos(w)*v;\n' + 'vx = if(equal(rx*ry,0),0,ax);\n' + 'vy = if(equal(rx*ry,0),0,ay);\n' + 'dx = (-xh*rx*ry*d + vx*.001);\n' + 'dy = (-yh*rx*ry*d + vy*.001);'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.951,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 1.29077,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 2.1,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 2.448,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.025,
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
		modwavealphaend : 0.95,
		wave_mystery : -0.5,
		decay : 0.98,
		wave_a : 3.645,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.vvb = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.myrad = 0;
m.mybass = 0;
m.myx = 0;
m.vb = 0;
m.myy = 0;
m.vvm = 0;
m.oldq8 = 0;
m.q30 = 0;
m.q20 = 0;
m.q31 = 0;
m.q10 = 0;
m.q21 = 0;
m.q32 = 0;
m.q11 = 0;
m.q22 = 0;
m.rd = 0;
m.q12 = 0;
m.q23 = 0;
m.q13 = 0;
m.q24 = 0;
m.vvt = 0;
m.q14 = 0;
m.q25 = 0;
m.q15 = 0;
m.q26 = 0;
m.q16 = 0;
m.q27 = 0;
m.q17 = 0;
m.q28 = 0;
m.vm = 0;
m.q18 = 0;
m.q29 = 0;
m.q19 = 0;
m.vt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.vb = ((m.vb*0.95)+(((1-m.vb)*pow(m.bass_att, 2))*0.02));
m.vvb = ((m.vvb*0.95)+(((1-m.vvb)*m.vb)*0.01));
m.vm = ((m.vm*0.95)+(((1-m.vm)*pow(m.mid_att, 2))*0.02));
m.vvm = ((m.vvm*0.95)+(((1-m.vvm)*m.vm)*0.01));
m.vt = ((m.vt*0.95)+(((1-m.vt)*pow(m.treb_att, 2))*0.02));
m.vvt = ((m.vvt*0.95)+(((1-m.vvt)*m.vt)*0.01));
m.vvb = Math.min(1, Math.max(0, m.vvb));
m.vvm = Math.min(1, Math.max(0, m.vvm));
m.vvt = Math.min(1, Math.max(0, m.vvt));
m.q1 = (m.vvb*2);
m.q2 = (m.vvm*2);
m.q3 = (m.vvt*2);
m.q4 = (((m.q1+m.q2)+m.q3)*5);
m.q5 = (((m.q1+m.q2)+m.q3)*5);
m.q6 = (((m.q1+m.q2)+m.q3)*5);
m.q7 = (((m.q1+m.q2)+m.q3)*5);
m.q8 = (((m.q1+m.q2)+m.q3)*5);
m.q9 = (((m.q1+m.q2)+m.q3)*5);
m.q10 = (((m.q1+m.q2)+m.q3)*5);
m.q11 = (((m.q1+m.q2)+m.q3)*5);
m.q12 = (((m.q1+m.q2)+m.q3)*5);
m.q13 = (((m.q1+m.q2)+m.q3)*5);
m.q14 = (((m.q1+m.q2)+m.q3)*5);
m.q15 = (((m.q1+m.q2)+m.q3)*5);
m.q16 = (((m.q1+m.q2)+m.q3)*5);
m.q17 = (((m.q1+m.q2)+m.q3)*5);
m.q18 = (((m.q1+m.q2)+m.q3)*5);
m.q19 = (((m.q1+m.q2)+m.q3)*5);
m.q20 = (((m.q1+m.q2)+m.q3)*5);
m.q21 = (((m.q1+m.q2)+m.q3)*5);
m.q22 = (((m.q1+m.q2)+m.q3)*5);
m.q23 = (((m.q1+m.q2)+m.q3)*5);
m.q24 = (((m.q1+m.q2)+m.q3)*5);
m.q25 = (((m.q1+m.q2)+m.q3)*5);
m.q26 = (((m.q1+m.q2)+m.q3)*5);
m.q27 = (((m.q1+m.q2)+m.q3)*5);
m.q28 = (((m.q1+m.q2)+m.q3)*5);
m.q29 = (((m.q1+m.q2)+m.q3)*5);
m.q30 = (((m.q1+m.q2)+m.q3)*5);
m.q31 = (((m.q1+m.q2)+m.q3)*5);
m.q32 = (((m.q1+m.q2)+m.q3)*5);
m.warp = 0;
m.rot = 0;
m.cx = 0.5;
m.cy = 0.5;
m.q1 = (0.5+(0.1*Math.sin(m.time)));
m.q2 = (0.5-(0.1*Math.cos(m.time)));
m.wave_a = 0;
m.decay = 0.95;
m.q1 = (0.5+(0.1*Math.sin(m.q8)));
m.q2 = 0.5;
m.q8 = (m.oldq8+(0.003*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.mybass = (m.mybass+(0.01*(m.bass+m.bass_att)));
m.zoom = 1.09;
m.q1 = (0.5+(0.00*Math.sin((0.12*m.q8))));
m.q2 = (0.5-(0.00*Math.cos((0.177*m.q8))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.myx = ((m.x-m.q1)*1.1);
m.myy = ((m.y-m.q2)*1.1);
m.myrad = ((m.myx*m.myx)+(m.myy*m.myy));
m.dx = ((0.5+(0.02*Math.sin(m.q8)))*div(m.myy,(m.myrad+1)));
m.dy = (-(0.5+(0.02*Math.sin((m.q8*0.897))))*div(m.myx,(m.myrad+1)));
m.rd = (m.bass*m.rad);
m.rot = div(m.rd,10);
m.sy = (1.02+div(m.rad,10));
m.sx = (m.sy-m.myrad);
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.13518,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.3+(0.05*Math.sin((0.89*m.q8))));
m.y = (0.4-(0.05*Math.cos((0.77*m.q8))));
m.r = (0.25+(0.25*Math.sin((m.time*0.7679))));
m.g = (0.25+(0.25*Math.sin((m.time*0.8079))));
m.b = (0.25+(0.25*Math.sin((m.time*0.7339))));
m.r2 = (0.25+(0.25*Math.sin((m.time*0.6979))));
m.g2 = (0.25+(0.25*Math.sin((m.time*0.849))));
m.b2 = (0.25+(0.25*Math.sin((m.time*0.8079))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.3 + 0.05*sin(0.89*q8);\n' + 'y = 0.4 - 0.05*cos(0.77*q8);\n' + 'r = 0.25+0.25*sin(time*0.7679);\n' + 'g = 0.25+0.25*sin(time*0.8079);\n' + 'b = 0.25+0.25*sin(time*0.7339);\n' + 'r2 = 0.25+0.25*sin(time*0.6979);\n' + 'g2 = 0.25+0.25*sin(time*0.849);\n' + 'b2 = 0.25+0.25*sin(time*0.8079);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.06623,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.3-(0.05*Math.sin((0.7089*m.q8))));
m.y = (0.4+(0.05*Math.cos((0.5077*m.q8))));
m.r = (0.25+(0.25*Math.sin((m.time*0.6479))));
m.g = (0.25+(0.25*Math.sin((m.time*0.5079))));
m.b = (0.25+(0.25*Math.sin((m.time*0.9339))));
m.r2 = (0.25+(0.25*Math.sin((m.time*0.779))));
m.g2 = (0.25+(0.25*Math.sin((m.time*0.707))));
m.b2 = (0.25+(0.25*Math.sin((m.time*0.747))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.3 - 0.05*sin(0.7089*q8);\n' + 'y = 0.4 + 0.05*cos(0.5077*q8);\n' + 'r = 0.25+0.25*sin(time*0.6479);\n' + 'g = 0.25+0.25*sin(time*0.5079);\n' + 'b = 0.25+0.25*sin(time*0.9339);\n' + 'r2 = 0.25+0.25*sin(time*0.779);\n' + 'g2 = 0.25+0.25*sin(time*0.707);\n' + 'b2 = 0.25+0.25*sin(time*0.747);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.03646,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.3+(0.05*Math.sin((0.679*m.q8))));
m.y = (0.4-(0.05*Math.cos((0.877*m.q8))));
m.r = (0.25+(0.25*Math.sin((m.time*0.5679))));
m.g = (0.25+(0.25*Math.sin((m.time*0.4079))));
m.b = (0.25+(0.25*Math.sin((m.time*1.1339))));
m.r2 = (0.25+(0.25*Math.sin((m.time*0.9979))));
m.g2 = (0.25+(0.25*Math.sin((m.time*0.891))));
m.b2 = (0.25+(0.25*Math.sin((m.time*0.713))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.3 + 0.05*sin(0.679*q8);\n' + 'y = 0.4 - 0.05*cos(0.877*q8);\n' + 'r = 0.25+0.25*sin(time*0.5679);\n' + 'g = 0.25+0.25*sin(time*0.4079);\n' + 'b = 0.25+0.25*sin(time*1.1339);\n' + 'r2 = 0.25+0.25*sin(time*0.9979);\n' + 'g2 = 0.25+0.25*sin(time*0.891);\n' + 'b2 = 0.25+0.25*sin(time*0.713);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.0122,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.3+(0.05*Math.sin((0.916*m.q8))));
m.y = (0.4-(0.05*Math.cos((0.977*m.q8))));
m.r = (0.25+(0.25*Math.sin((m.time*1.1679))));
m.g = (0.25+(0.25*Math.sin((m.time*1.18079))));
m.b = (0.25+(0.25*Math.sin((m.time*1.17339))));
m.r2 = (0.25+(0.25*Math.sin((m.time*1.16979))));
m.g2 = (0.25+(0.25*Math.sin((m.time*1.1849))));
m.b2 = (0.25+(0.25*Math.sin((m.time*1.81079))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.3 + 0.05*sin(0.916*q8);\n' + 'y = 0.4 - 0.05*cos(0.977*q8);\n' + 'r = 0.25+0.25*sin(time*1.1679);\n' + 'g = 0.25+0.25*sin(time*1.18079);\n' + 'b = 0.25+0.25*sin(time*1.17339);\n' + 'r2 = 0.25+0.25*sin(time*1.16979);\n' + 'g2 = 0.25+0.25*sin(time*1.1849);\n' + 'b2 = 0.25+0.25*sin(time*1.81079);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 my_uv2_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = ((uv_orig - 0.5) * vec2(1.81, 1.81));\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = ((tmpvar_3.x * tmpvar_3.x) - (tmpvar_3.y * tmpvar_3.y));\n' + '  tmpvar_4.y = ((2.0 * tmpvar_3.x) * tmpvar_3.y);\n' + '  my_uv2_1 = (tmpvar_4 + vec2(0.448, 0.701));\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = (texture2D (sampler_fc_main, my_uv2_1) - 0.004).xyz;\n' + '  ret_2 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec3 xlat_mutableneu;\n' + 'highp vec3 xlat_mutableret1;\n' + 'shader_body {\n' + '   vec2 uv_1;\n' + '   float inten_2;\n' + '   float dist_3;\n' + '   vec2 uv2_4;\n' + '  uv_1 = (uv - 0.5);\n' + '  uv_1 = (uv_1 * aspect.xy);\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = (time / 2.0);\n' + '  dist_3 = (1.0 - fract(tmpvar_5));\n' + '  inten_2 = ((sqrt(dist_3) * (1.0 - dist_3)) * 8.0);\n' + '   vec2 tmpvar_6;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (_qa.xy * 0.05);\n' + '  tmpvar_6 = fract(((\n' + '    ((3.0 * uv_1) * dist_3)\n' + '   + 0.5) + tmpvar_7));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_main, tmpvar_6);\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (tmpvar_6 + 0.003);\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '  xlat_mutableneu = (tmpvar_8.xyz - ((tmpvar_9.xyz * scale1) + bias1));\n' + '  xlat_mutableret1 = max (vec3(0.0, 0.0, 0.0), (xlat_mutableneu * inten_2));\n' + '  uv2_4.x = ((uv_1.x * -0.4990803) - (uv_1.y * 0.8665558));\n' + '  uv2_4.y = ((uv_1.x * 0.8665558) + (uv_1.y * -0.4990803));\n' + '  dist_3 = (1.0 - fract((0.3333333 + tmpvar_5)));\n' + '  inten_2 = ((sqrt(dist_3) * (1.0 - dist_3)) * 8.0);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = fract(((\n' + '    ((3.0 * uv2_4) * dist_3)\n' + '   + 0.5) + tmpvar_7));\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_main, tmpvar_11);\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (tmpvar_11 + 0.003);\n' + '  tmpvar_13 = texture2D (sampler_blur1, P_14);\n' + '  xlat_mutableneu = (tmpvar_12.xyz - ((tmpvar_13.xyz * scale1) + bias1));\n' + '  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_2));\n' + '  uv2_4.x = ((uv_1.x * -0.5018377) - (uv_1.y * -0.8649619));\n' + '  uv2_4.y = ((uv_1.x * -0.8649619) + (uv_1.y * -0.5018377));\n' + '  dist_3 = (1.0 - fract((0.6666667 + tmpvar_5)));\n' + '  inten_2 = ((sqrt(dist_3) * (1.0 - dist_3)) * 8.0);\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15 = fract(((\n' + '    ((3.0 * uv2_4) * dist_3)\n' + '   + 0.5) + tmpvar_7));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_main, tmpvar_15);\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (tmpvar_15 + 0.003);\n' + '  tmpvar_17 = texture2D (sampler_blur1, P_18);\n' + '  xlat_mutableneu = (tmpvar_16.xyz - ((tmpvar_17.xyz * scale1) + bias1));\n' + '  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_2));\n' + '  uv2_4.x = ((uv_1.x * 0.9999949) - (uv_1.y * -0.003185092));\n' + '  uv2_4.y = ((uv_1.x * -0.003185092) + (uv_1.y * 0.9999949));\n' + '  dist_3 = (1.0 - fract((1.0 + tmpvar_5)));\n' + '  inten_2 = ((sqrt(dist_3) * (1.0 - dist_3)) * 8.0);\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19 = fract(((\n' + '    ((3.0 * uv2_4) * dist_3)\n' + '   + 0.5) + tmpvar_7));\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_main, tmpvar_19);\n' + '   vec4 tmpvar_21;\n' + '   vec2 P_22;\n' + '  P_22 = (tmpvar_19 + 0.003);\n' + '  tmpvar_21 = texture2D (sampler_blur1, P_22);\n' + '  xlat_mutableneu = (tmpvar_20.xyz - ((tmpvar_21.xyz * scale1) + bias1));\n' + '  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_2));\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23.w = 1.0;\n' + '  tmpvar_23.xyz = (xlat_mutableret1 * 4.0);\n' + '  vec4 ret4 = tmpvar_23;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('vb = vb*0.95 + (1-vb)*pow(bass_att,2)*0.02;\n' + 'vvb = vvb*0.95 + (1-vvb)*vb*0.01;\n' + 'vm = vm*0.95 + (1-vm)*pow(mid_att,2)*0.02;\n' + 'vvm = vvm*0.95 + (1-vvm)*vm*0.01;\n' + 'vt = vt*0.95 + (1-vt)*pow(treb_att,2)*0.02;\n' + 'vvt = vvt*0.95 + (1-vvt)*vt*0.01;\n' + 'vvb = min(1,max(0,vvb));\n' + 'vvm = min(1,max(0,vvm));\n' + 'vvt = min(1,max(0,vvt));\n' + 'q1 = vvb*2;\n' + 'q2 = vvm*2;\n' + 'q3 = vvt*2;\n' + 'q4=(q1+q2+q3)*5;\n' + 'q5=(q1+q2+q3)*5;\n' + 'q6=(q1+q2+q3)*5;\n' + 'q7=(q1+q2+q3)*5;\n' + 'q8=(q1+q2+q3)*5;\n' + 'q9=(q1+q2+q3)*5;\n' + 'q10=(q1+q2+q3)*5;\n' + 'q11=(q1+q2+q3)*5;\n' + 'q12=(q1+q2+q3)*5;\n' + 'q13=(q1+q2+q3)*5;\n' + 'q14=(q1+q2+q3)*5;\n' + 'q15=(q1+q2+q3)*5;\n' + 'q16=(q1+q2+q3)*5;\n' + 'q17=(q1+q2+q3)*5;\n' + 'q18=(q1+q2+q3)*5;\n' + 'q19=(q1+q2+q3)*5;\n' + 'q20=(q1+q2+q3)*5;\n' + 'q21=(q1+q2+q3)*5;\n' + 'q22=(q1+q2+q3)*5;\n' + 'q23=(q1+q2+q3)*5;\n' + 'q24=(q1+q2+q3)*5;\n' + 'q25=(q1+q2+q3)*5;\n' + 'q26=(q1+q2+q3)*5;\n' + 'q27=(q1+q2+q3)*5;\n' + 'q28=(q1+q2+q3)*5;\n' + 'q29=(q1+q2+q3)*5;\n' + 'q30=(q1+q2+q3)*5;\n' + 'q31=(q1+q2+q3)*5;\n' + 'q32=(q1+q2+q3)*5;\n' + 'warp=0;\n' + 'rot =0;\n' + 'cx=0.5;\n' + 'cy=0.5;\n' + 'q1 = 0.5 + 0.1*sin(time);\n' + 'q2 = 0.5 - 0.1*cos(time);\n' + 'wave_a =0;\n' + 'decay=.95;\n' + 'q1=0.5 +0.1*sin(q8);\n' + 'q2=0.5;\n' + 'q8 = oldq8+ 0.003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 =q8;\n' + 'mybass  = mybass + 0.01*(bass + bass_att);\n' + 'zoom = 1.09;\n' + 'q1=0.5 +0.00*sin(0.12*q8);\n' + 'q2=0.5 -0.00*cos(0.177*q8);'),
	'pixel_eqs_str' : ('myx = (x-q1)*1.1;\n' + 'myy= (y-q2)*1.1;\n' + 'myrad = (myx*myx) + (myy*myy);\n' + 'dx = (0.5+0.02*sin(q8))*(myy/(myrad+1));\n' + 'dy = -(0.5+0.02*sin(q8*0.897))*(myx/(myrad+1));\n' + 'rd=bass*rad;\n' + 'rot=rd/10;\n' + 'sy=1.02+(rad/10);\n' + 'sx=sy-myrad;'),
};

return pmap;
});
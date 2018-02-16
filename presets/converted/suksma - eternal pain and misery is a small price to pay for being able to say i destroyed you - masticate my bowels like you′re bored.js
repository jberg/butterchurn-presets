define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.7,
		ib_g : 0.0,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.497,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.7,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.0,
		b1ed : 0.0,
		wave_smoothing : 0.88,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 1.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 4.696,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.7,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 5.0,
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
m.runtreb = 0;
m.q7 = 0;
m.q8 = 0;
m.dx_r = 0;
m.q9 = 0;
m.dy_r = 0;
m.runbass = 0;
m.vb = 0;
m.vvm = 0;
m.q30 = 0;
m.atime = 0;
m.q20 = 0;
m.q31 = 0;
m.q10 = 0;
m.q21 = 0;
m.q32 = 0;
m.q11 = 0;
m.q22 = 0;
m.q12 = 0;
m.q23 = 0;
m.q13 = 0;
m.q24 = 0;
m.vvt = 0;
m.q14 = 0;
m.q25 = 0;
m.q15 = 0;
m.q26 = 0;
m.runmids = 0;
m.q16 = 0;
m.q27 = 0;
m.q17 = 0;
m.q28 = 0;
m.vm = 0;
m.q18 = 0;
m.q29 = 0;
m.q19 = 0;
m.pi23 = 0;
m.thresh = 0;
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
m.q1 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q2 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q3 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q4 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q5 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q6 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q7 = (((m.vvb+m.vvm)+m.vvt)*10);
m.runbass = (m.runbass+m.vvb);
m.runmids = (m.runmids+m.vvm);
m.runtreb = (m.runtreb+m.vvt);
m.pi23 = ((4*Math.asin(-1))*0.33333333333333);
m.atime = (((m.runtreb+m.runmids)+m.runbass)*0.05);
m.q8 = ((Math.sin((m.atime-(0*m.pi23)))+1)*0.5);
m.q9 = ((Math.sin((m.atime-(1*m.pi23)))+1)*0.5);
m.q10 = ((Math.sin((m.atime-(2*m.pi23)))+1)*0.5);
m.q11 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q12 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q13 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q14 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q15 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q16 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q17 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q18 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q19 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q20 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q21 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q22 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q23 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q24 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q25 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q26 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q27 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q28 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q29 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q30 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q31 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q32 = (((m.vvb+m.vvm)+m.vvt)*10);
m.wave_r = ((m.wave_r+(0.25*Math.sin((1.4*m.time))))+(0.25*Math.sin((2.25*m.time))));
m.wave_g = ((m.wave_g+(0.25*Math.sin((1.7*m.time))))+(0.25*Math.sin((2.11*m.time))));
m.wave_b = ((m.wave_b+(0.25*Math.sin((1.84*m.time))))+(0.25*Math.sin((2.3*m.time))));
m.warp = 0;
m.wave_y = (m.wave_y+(0.25*Math.sin(m.time)));
m.wave_x = (m.wave_x+(0.25*Math.cos(m.time)));
		m.rkeys = ['rot','zoom','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.zoom = (m.zoom+0.01);
m.rot = (m.rot+((5*above(m.x, (0.45+(0.35*Math.sin(m.time)))))*below(m.x, (0.55+(0.35*Math.sin(m.time))))));
m.rot = (m.rot+((5*below(m.y, (0.45+(0.35*Math.cos((0.9*m.time))))))*below(m.y, (0.55+(0.35*Math.cos((0.9*m.time)))))));
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
	'warp' : ('shader_body {\n' + '   vec3 blurry_color_1;\n' + '   vec2 uv2_2;\n' + '   vec3 ret_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + texsize.zw);\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, P_4).xyz;\n' + '  blurry_color_1 = tmpvar_5;\n' + '  uv2_2 = (uv + ((blurry_color_1.xy - 0.37) * 0.01));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv2_2);\n' + '  ret_3 = tmpvar_6.xyz;\n' + '   vec2 P_7;\n' + '  P_7 = ((uv_orig * 4.0) + rand_frame.xy);\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = (((texture2D (sampler_noise_lq, P_7) * 2.0) - 1.0) * 0.02).xyz;\n' + '  ret_3 = (ret_3 + tmpvar_8);\n' + '   float vec_y_9;\n' + '  vec_y_9 = (uv_orig.y - 0.5);\n' + '   float vec_x_10;\n' + '  vec_x_10 = (uv_orig.x - 0.5);\n' + '   float tmpvar_11;\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = (min (abs(\n' + '    (vec_y_9 / vec_x_10)\n' + '  ), 1.0) / max (abs(\n' + '    (vec_y_9 / vec_x_10)\n' + '  ), 1.0));\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = (tmpvar_12 * tmpvar_12);\n' + '  tmpvar_13 = (((\n' + '    ((((\n' + '      ((((-0.01213232 * tmpvar_13) + 0.05368138) * tmpvar_13) - 0.1173503)\n' + '     * tmpvar_13) + 0.1938925) * tmpvar_13) - 0.3326756)\n' + '   * tmpvar_13) + 0.9999793) * tmpvar_12);\n' + '  tmpvar_13 = (tmpvar_13 + (float(\n' + '    (abs((vec_y_9 / vec_x_10)) > 1.0)\n' + '  ) * (\n' + '    (tmpvar_13 * -2.0)\n' + '   + 1.570796)));\n' + '  tmpvar_11 = (tmpvar_13 * sign((vec_y_9 / vec_x_10)));\n' + '  if ((abs(vec_x_10) > (1e-08 * abs(vec_y_9)))) {\n' + '    if ((vec_x_10 < 0.0)) {\n' + '      if ((vec_y_9 >= 0.0)) {\n' + '        tmpvar_11 += 3.141593;\n' + '      } else {\n' + '        tmpvar_11 = (tmpvar_11 - 3.141593);\n' + '      };\n' + '    };\n' + '  } else {\n' + '    tmpvar_11 = (sign(vec_y_9) * 1.570796);\n' + '  };\n' + '  ret_3 = (ret_3 + (cos(\n' + '    ((tmpvar_11 * 17.0) + (time * 12.0))\n' + '  ) * 0.15));\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14.w = 1.0;\n' + '  tmpvar_14.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_14;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('uniform highp vec3 neu;\n' + 'uniform highp vec2 rs2;\n' + 'highp vec3 xlat_mutableneu;\n' + 'highp vec3 xlat_mutableret1;\n' + 'highp vec2 xlat_mutablers2;\n' + 'shader_body {\n' + '  xlat_mutableneu = neu;\n' + '  xlat_mutablers2 = rs2;\n' + '   vec2 uv_1;\n' + '   float inten_3;\n' + '   float dist_4;\n' + '  dist_4 = 1.0;\n' + '  inten_3 = 1.0;\n' + '  xlat_mutableret1 = vec3(0.0, 0.0, 0.0);\n' + '  uv_1 = (uv - 0.5);\n' + '  uv_1 = (uv_1 * (aspect.xy * 1.9));\n' + '  for ( float n_2 = 0.0; n_2 <= 2.0; n_2 += 1.0) {\n' + '     vec2 uv3_5;\n' + '     float tmpvar_6;\n' + '    tmpvar_6 = (float(mod (n_2, 3.0)));\n' + '    if ((tmpvar_6 == 0.0)) {\n' + '      dist_4 = (1.0 - fract((\n' + '        (0.5 * n_2)\n' + '       + _qh.y)));\n' + '    } else {\n' + '       float tmpvar_7;\n' + '      tmpvar_7 = (float(mod (n_2, 3.0)));\n' + '      if ((tmpvar_7 == 1.0)) {\n' + '        dist_4 = (1.0 - fract((\n' + '          (0.5 * n_2)\n' + '         + _qh.z)));\n' + '      } else {\n' + '        dist_4 = (1.0 - fract((\n' + '          (0.5 * n_2)\n' + '         + _qh.w)));\n' + '      };\n' + '    };\n' + '    inten_3 = ((dist_4 * (1.0 - dist_4)) * 3.0);\n' + '    uv3_5 = vec2(0.0, 0.0);\n' + '     float tmpvar_8;\n' + '    tmpvar_8 = (float(mod (n_2, 3.0)));\n' + '    if ((tmpvar_8 == 0.0)) {\n' + '       vec2 tmpvar_9;\n' + '      tmpvar_9.y = 0.0;\n' + '      tmpvar_9.x = (_qd.z + (dist_4 / 3.0));\n' + '      uv3_5 = fract(((\n' + '        ((1.5 * uv_1) * dist_4)\n' + '       + _qe.y) + tmpvar_9));\n' + '    } else {\n' + '       float tmpvar_10;\n' + '      tmpvar_10 = (float(mod (n_2, 3.0)));\n' + '      if ((tmpvar_10 == 1.0)) {\n' + '         vec2 tmpvar_11;\n' + '        tmpvar_11.y = 0.0;\n' + '        tmpvar_11.x = (_qe.y + (dist_4 / 3.0));\n' + '        uv3_5 = fract(((\n' + '          ((1.5 * uv_1) * dist_4)\n' + '         + _qd.z) + tmpvar_11));\n' + '      } else {\n' + '         vec2 tmpvar_12;\n' + '        tmpvar_12.y = 0.0;\n' + '        tmpvar_12.x = (_qe.w + (dist_4 / 3.0));\n' + '        uv3_5 = fract(((\n' + '          ((1.5 * uv_1) * dist_4)\n' + '         + _qf.x) + tmpvar_12));\n' + '      };\n' + '    };\n' + '     vec2 tmpvar_13;\n' + '    tmpvar_13 = abs((fract(\n' + '      (uv3_5 + 0.5)\n' + '    ) - 0.5));\n' + '    uv3_5 = tmpvar_13;\n' + '     vec4 tmpvar_14;\n' + '    tmpvar_14 = texture2D (sampler_main, tmpvar_13);\n' + '     vec4 tmpvar_15;\n' + '     vec2 P_16;\n' + '    P_16 = (tmpvar_13 * 1.05);\n' + '    tmpvar_15 = texture2D (sampler_blur3, P_16);\n' + '    xlat_mutableneu = (tmpvar_14.xyz - (0.7 * (\n' + '      (tmpvar_15.xyz * scale3)\n' + '     + bias3)));\n' + '    xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_3));\n' + '  };\n' + '  xlat_mutablers2 = ((0.3 * sin(\n' + '    ((uv_1 * 4.0) + _qd.z)\n' + '  )) - dot (xlat_mutableret1, vec3(0.32, 0.49, 0.29)));\n' + '   vec3 tmpvar_17;\n' + '  tmpvar_17.x = _qb.w;\n' + '  tmpvar_17.y = _qc.x;\n' + '  tmpvar_17.z = _qc.y;\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18.w = 1.0;\n' + '  tmpvar_18.xyz = (((_qa.x + 0.5) * xlat_mutableret1) + ((\n' + '    ((0.05 / sqrt(dot (xlat_mutablers2, xlat_mutablers2))) * _qg.y)\n' + '   * 0.5) * tmpvar_17));\n' + '  vec4 ret4 = tmpvar_18;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('vb = vb*0.95 + (1-vb)*pow(bass_att,2)*0.02;\n' + 'vvb = vvb*0.95 + (1-vvb)*vb*0.01;\n' + 'vm = vm*0.95 + (1-vm)*pow(mid_att,2)*0.02;\n' + 'vvm = vvm*0.95 + (1-vvm)*vm*0.01;\n' + 'vt = vt*0.95 + (1-vt)*pow(treb_att,2)*0.02;\n' + 'vvt = vvt*0.95 + (1-vvt)*vt*0.01;\n' + 'vvb = min(1,max(0,vvb));\n' + 'vvm = min(1,max(0,vvm));\n' + 'vvt = min(1,max(0,vvt));\n' + 'q1   = (vvb+vvm+vvt)*10;\n' + 'q2   = (vvb+vvm+vvt)*10;\n' + 'q3   = (vvb+vvm+vvt)*10;\n' + 'q4   = (vvb+vvm+vvt)*10;\n' + 'q5   = (vvb+vvm+vvt)*10;\n' + 'q6   = (vvb+vvm+vvt)*10;\n' + 'q7   = (vvb+vvm+vvt)*10;\n' + 'runbass=runbass+vvb;\n' + 'runmids=runmids+vvm ;\n' + 'runtreb=runtreb+vvt;\n' + 'pi23=4*asin(-1)*.33333333333333;\n' + 'atime=(runtreb+runmids+runbass)*.05;\n' + 'q8= (sin(atime-0*pi23)+1)*.5;\n' + 'q9= (sin(atime-1*pi23)+1)*.5;\n' + 'q10=(sin(atime-2*pi23)+1)*.5;\n' + 'q11  = (vvb+vvm+vvt)*10;\n' + 'q12  = (vvb+vvm+vvt)*10;\n' + 'q13  = (vvb+vvm+vvt)*10;\n' + 'q14  = (vvb+vvm+vvt)*10;\n' + 'q15  = (vvb+vvm+vvt)*10;\n' + 'q16  = (vvb+vvm+vvt)*10;\n' + 'q17  = (vvb+vvm+vvt)*10;\n' + 'q18  = (vvb+vvm+vvt)*10;\n' + 'q19  = (vvb+vvm+vvt)*10;\n' + 'q20  = (vvb+vvm+vvt)*10;\n' + 'q21  = (vvb+vvm+vvt)*10;\n' + 'q22  = (vvb+vvm+vvt)*10;\n' + 'q23  = (vvb+vvm+vvt)*10;\n' + 'q24  = (vvb+vvm+vvt)*10;\n' + 'q25  = (vvb+vvm+vvt)*10;\n' + 'q26  = (vvb+vvm+vvt)*10;\n' + 'q27  = (vvb+vvm+vvt)*10;\n' + 'q28  = (vvb+vvm+vvt)*10;\n' + 'q29  = (vvb+vvm+vvt)*10;\n' + 'q30  = (vvb+vvm+vvt)*10;\n' + 'q31  = (vvb+vvm+vvt)*10;\n' + 'q32  = (vvb+vvm+vvt)*10;\n' + 'wave_r = wave_r + 0.25*sin(1.4*time) + 0.25*sin(2.25*time);\n' + 'wave_g = wave_g + 0.25*sin(1.7*time) + 0.25*sin(2.11*time);\n' + 'wave_b = wave_b + 0.25*sin(1.84*time) + 0.25*sin(2.3*time);\n' + 'warp = 0;\n' + 'wave_y = wave_y + 0.25*sin(time);\n' + 'wave_x = wave_x + 0.25*cos(time);'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'zoom = zoom + 0.01;\n' + 'rot = rot + 5*above(x,0.45+0.35*sin(time))*below(x,0.55+0.35*sin(time));\n' + 'rot = rot + 5*below(y,0.45+0.35*cos(0.9*time))*below(y,0.55+0.35*cos(0.9*time));'),
};

return pmap;
});
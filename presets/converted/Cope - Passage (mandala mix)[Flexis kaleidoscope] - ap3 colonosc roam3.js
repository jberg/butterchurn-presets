define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.49,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 2.669,
		brighten : 1.0,
		mv_y : 0.0,
		wave_scale : 0.625,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0002,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 0.9995,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 0.9,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.44,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9998,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : -1.0E-4,
		wave_thick : 1.0,
		modwavealphaend : 1.98,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 0.39,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.88,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.tt = 0;
m.mn = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q6 = 0;
m.q7 = 0;
m.mt = 0;
m.q8 = 0;
m.bm = 0;
m.mx = 0;
m.q21 = 0;
m.q22 = 0;
m.q23 = 0;
m.vol = 0;
m.q24 = 0;
m.q25 = 0;
m.q26 = 0;
m.v = 0;
m.q27 = 0;
m.mtime = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.6*((0.6*Math.sin((m.time*1.3)))+(0.4*Math.sin((0.98*m.time))))));
m.wave_b = (m.wave_b+(0.6*((0.6*Math.sin((m.time*1.1)))+(0.4*Math.sin((0.78*m.time))))));
m.wave_g = (m.wave_g+(0.5*((0.6*Math.sin((m.time*1.2)))+(0.4*Math.sin((0.6*m.time))))));
m.q8 = m.wave_r;
m.q7 = m.wave_b;
m.q6 = m.wave_g;
m.vol = (0.1*((m.vol*9)+(((m.bass_att+m.mid_att)+m.treb_att)*0.333333)));
m.q1 = m.vol;
m.mtime = (m.mtime+(m.vol*0.01));
m.q2 = (m.mtime*0.25);
m.sy = (m.sy+(m.vol*0.02));
m.sx = m.sy;
m.rot = (m.rot+(0.01*Math.sin((m.time*0.05))));
m.monitor = m.rot;
m.q3 = m.aspectx;
m.q4 = m.aspecty;
m.warp = 0;
m.bb = ((m.bb*0.99)+(m.bass*0.02));
m.mm = ((m.mm*0.99)+(m.mid*0.02));
m.tt = ((m.tt*0.99)+(m.treb*0.02));
m.mx = Math.max(Math.max(m.bb, m.mm), m.tt);
m.mn = Math.min(Math.min(m.bb, m.mm), m.tt);
m.t1 = div((m.bb-m.mn),(m.mx-m.mn));
m.t2 = div((m.mm-m.mn),(m.mx-m.mn));
m.t3 = div((m.tt-m.mn),(m.mx-m.mn));
m.v = div(0.15,m.fps);
m.bm = (m.bm+((m.t1-m.t2)*m.v));
m.mt = (m.mt+((m.t2-m.t3)*m.v));
m.q22 = 0;
m.q21 = 1;
m.q24 = 0;
m.q23 = -1;
m.q25 = div(0.5,Math.asin(1));
m.q26 = -m.bm;
m.q27 = m.mt;
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
			g : 0.7,
			scaling : 100.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.9,
			thick : 1.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (Math.cos(m.time)*0.1);
m.y = (Math.sin(m.time)*0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=cos(time)*0.1;\n' + 'y=sin(time)*0.1;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 81.95444,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wave_x = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.wave_x = 1;
		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('wave_x=1;'),
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
			r2 : 1.0,
			a : 0.9,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.62832,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.77829,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.69,
			b2 : 1.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 0.81,
			rad : 0.97235,
			x : 0.5,
			y : 0.5,
			ang : 0.1884,
			sides : 16.0,
			border_r : 0.59,
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.25133,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.136,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.2,
			a2 : 0.0,
			r : 0.36,
			border_g : 0.0,
			rad : 0.4149,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.adv = 0;

			m.rkeys = ['adv'];
			return m;
		},
		'frame_eqs' : function(m) {
m.adv = (m.adv+div((m.bass*m.bass),15));
m.r = (((Math.floor(rand(10))*0.1)*0.5)+0.5);
m.g = m.r;
m.b = m.r;
m.x = (((Math.floor(rand(100))*0.01)*0.5)+0.25);
m.y = (((Math.floor(rand(100))*0.01)*0.5)+0.25);
m.rad = (((Math.floor(rand(100))*0.01)*0.4)+0.1);
m.ang = m.rad;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('adv=adv+(bass*bass)/15;\n' + 'r=int(rand(10))*0.1*0.5+0.5;\n' + 'g=r;\n' + 'b=r;\n' + 'x=int(rand(100))*0.01*0.5 + 0.25;\n' + 'y=int(rand(100))*0.01*0.5 + 0.25;\n' + 'rad=int(rand(100))*0.01*0.4+0.1;\n' + 'ang=rad;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 1.25664,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.49831,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.59958,
			x : 0.2,
			y : 0.8,
			ang : 0.0,
			sides : 24.0,
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
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.45112,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.9,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.80814,
			x : 0.86,
			y : 0.2,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 1.5)) + rand_frame.xy);\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = mix (uv_orig, uv, vec2(4.0, 4.0));\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = dot (texture2D (sampler_main, tmpvar_3).xyz, vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = mix (uv_orig, uv, vec2(-12.0, -12.0));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur2, tmpvar_5);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (texture2D (sampler_noise_lq, tmpvar_2) - 0.5).xy;\n' + '  uv_1 = (mix (uv_orig, uv, vec2((\n' + '    (tmpvar_4 - dot (((tmpvar_6.xyz * scale2) + bias2), vec3(0.32, 0.49, 0.29)))\n' + '   * 12.0))) + ((tmpvar_7 * texsize.zw) * 0.5));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_main, uv_1);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_noise_lq, tmpvar_2);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = ((tmpvar_8.xyz + (\n' + '    (tmpvar_9 - 0.5)\n' + '   * 0.006).xyz) + -0.0006);\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec2 xlat_mutablec;\n' + 'highp vec2 xlat_mutabledenominator;\n' + 'highp vec2 xlat_mutablefraction;\n' + 'highp vec2 xlat_mutablenumerator;\n' + 'shader_body {\n' + '   vec2 uv_1;\n' + '  uv_1 = uv;\n' + '   vec3 ret_2;\n' + '  xlat_mutablec = (((uv - 0.5) * 2.0) * aspect.wz);\n' + '  xlat_mutablenumerator = ((xlat_mutablec + _qf.xy) * 64.0);\n' + '  xlat_mutabledenominator = (xlat_mutablec + _qf.zw);\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3.x = ((xlat_mutablenumerator.x * xlat_mutabledenominator.x) + (xlat_mutablenumerator.y * xlat_mutabledenominator.y));\n' + '  tmpvar_3.y = ((xlat_mutablenumerator.y * xlat_mutabledenominator.x) - (xlat_mutablenumerator.x * xlat_mutabledenominator.y));\n' + '  xlat_mutablefraction = (tmpvar_3 / ((xlat_mutabledenominator.x * xlat_mutabledenominator.x) + (xlat_mutabledenominator.y * xlat_mutabledenominator.y)));\n' + '  xlat_mutablec = (xlat_mutablefraction - 0.5);\n' + '   float tmpvar_4;\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = (min (abs(\n' + '    (xlat_mutablec.x / xlat_mutablec.y)\n' + '  ), 1.0) / max (abs(\n' + '    (xlat_mutablec.x / xlat_mutablec.y)\n' + '  ), 1.0));\n' + '   float tmpvar_6;\n' + '  tmpvar_6 = (tmpvar_5 * tmpvar_5);\n' + '  tmpvar_6 = (((\n' + '    ((((\n' + '      ((((-0.01213232 * tmpvar_6) + 0.05368138) * tmpvar_6) - 0.1173503)\n' + '     * tmpvar_6) + 0.1938925) * tmpvar_6) - 0.3326756)\n' + '   * tmpvar_6) + 0.9999793) * tmpvar_5);\n' + '  tmpvar_6 = (tmpvar_6 + (float(\n' + '    (abs((xlat_mutablec.x / xlat_mutablec.y)) > 1.0)\n' + '  ) * (\n' + '    (tmpvar_6 * -2.0)\n' + '   + 1.570796)));\n' + '  tmpvar_4 = (tmpvar_6 * sign((xlat_mutablec.x / xlat_mutablec.y)));\n' + '  if ((abs(xlat_mutablec.y) > (1e-08 * abs(xlat_mutablec.x)))) {\n' + '    if ((xlat_mutablec.y < 0.0)) {\n' + '      if ((xlat_mutablec.x >= 0.0)) {\n' + '        tmpvar_4 += 3.141593;\n' + '      } else {\n' + '        tmpvar_4 = (tmpvar_4 - 3.141593);\n' + '      };\n' + '    };\n' + '  } else {\n' + '    tmpvar_4 = (sign(xlat_mutablec.x) * 1.570796);\n' + '  };\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7.x = ((tmpvar_4 * _qg.x) + _qg.y);\n' + '  tmpvar_7.y = (((0.3 * aspect.w) * log(\n' + '    sqrt(dot (xlat_mutablec, xlat_mutablec))\n' + '  )) + _qg.z);\n' + '  uv_1 = (0.5 + ((0.5 - \n' + '    abs(((fract(\n' + '      (tmpvar_7 * 0.5)\n' + '    ) * 2.0) - 1.0))\n' + '  ) * 0.95));\n' + '  xlat_mutablec = (((uv_1 - 0.5) * 2.0) * aspect.wz);\n' + '  xlat_mutablenumerator = ((xlat_mutablec + _qf.xy) * 64.0);\n' + '  xlat_mutabledenominator = (xlat_mutablec + _qf.zw);\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8.x = ((xlat_mutablenumerator.x * xlat_mutabledenominator.x) + (xlat_mutablenumerator.y * xlat_mutabledenominator.y));\n' + '  tmpvar_8.y = ((xlat_mutablenumerator.y * xlat_mutabledenominator.x) - (xlat_mutablenumerator.x * xlat_mutabledenominator.y));\n' + '  xlat_mutablefraction = (tmpvar_8 / ((xlat_mutabledenominator.x * xlat_mutabledenominator.x) + (xlat_mutabledenominator.y * xlat_mutabledenominator.y)));\n' + '  xlat_mutablec = (xlat_mutablefraction - 0.5);\n' + '   float tmpvar_9;\n' + '   float tmpvar_10;\n' + '  tmpvar_10 = (min (abs(\n' + '    (xlat_mutablec.x / xlat_mutablec.y)\n' + '  ), 1.0) / max (abs(\n' + '    (xlat_mutablec.x / xlat_mutablec.y)\n' + '  ), 1.0));\n' + '   float tmpvar_11;\n' + '  tmpvar_11 = (tmpvar_10 * tmpvar_10);\n' + '  tmpvar_11 = (((\n' + '    ((((\n' + '      ((((-0.01213232 * tmpvar_11) + 0.05368138) * tmpvar_11) - 0.1173503)\n' + '     * tmpvar_11) + 0.1938925) * tmpvar_11) - 0.3326756)\n' + '   * tmpvar_11) + 0.9999793) * tmpvar_10);\n' + '  tmpvar_11 = (tmpvar_11 + (float(\n' + '    (abs((xlat_mutablec.x / xlat_mutablec.y)) > 1.0)\n' + '  ) * (\n' + '    (tmpvar_11 * -2.0)\n' + '   + 1.570796)));\n' + '  tmpvar_9 = (tmpvar_11 * sign((xlat_mutablec.x / xlat_mutablec.y)));\n' + '  if ((abs(xlat_mutablec.y) > (1e-08 * abs(xlat_mutablec.x)))) {\n' + '    if ((xlat_mutablec.y < 0.0)) {\n' + '      if ((xlat_mutablec.x >= 0.0)) {\n' + '        tmpvar_9 += 3.141593;\n' + '      } else {\n' + '        tmpvar_9 = (tmpvar_9 - 3.141593);\n' + '      };\n' + '    };\n' + '  } else {\n' + '    tmpvar_9 = (sign(xlat_mutablec.x) * 1.570796);\n' + '  };\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12.x = ((tmpvar_9 * _qg.x) + _qg.y);\n' + '  tmpvar_12.y = (((0.3 * aspect.w) * log(\n' + '    sqrt(dot (xlat_mutablec, xlat_mutablec))\n' + '  )) + _qg.z);\n' + '  uv_1 = (0.5 + ((0.5 - \n' + '    abs(((fract(\n' + '      (tmpvar_12 * 0.5)\n' + '    ) * 2.0) - 1.0))\n' + '  ) * 0.95));\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_main, uv_1);\n' + '  ret_2 = tmpvar_13.xyz;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = -(uv_1.x);\n' + '  tmpvar_14.y = uv_1.y;\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_main, tmpvar_14);\n' + '  ret_2 = (ret_2 + tmpvar_15.xyz);\n' + '  ret_2 = (1.0 - mix (ret_2, (ret_2 * _qb.wzy), vec3(rad)));\n' + '  ret_2 = (ret_2 * 1.49);\n' + '  ret_2 = (ret_2 * ret_2);\n' + '  ret_2 = (ret_2 - (roam_sin.wzy * roam_cos.zxy));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.6*(0.6*sin(time*1.3) + 0.4*sin(0.98*time));\n' + 'wave_b = wave_b + 0.6*(0.6*sin(time*1.1) + 0.4*sin(0.78*time));\n' + 'wave_g = wave_g + 0.5*(0.6*sin(time*1.2) + 0.4*sin(0.6*time));\n' + 'q8=wave_r;\n' + 'q7=wave_b;\n' + 'q6=wave_g;\n' + 'vol = 0.1*(vol*9 + (bass_att+mid_att+treb_att)*0.333333);\n' + 'q1=vol;\n' + 'mtime=mtime+vol*0.01;\n' + 'q2=mtime*0.25;\n' + 'sy=sy+vol*0.02;\n' + 'sx=sy;\n' + 'rot = rot + 0.01*sin(time*0.05);\n' + 'monitor=rot;\n' + 'q3=aspectx;\n' + 'q4=aspecty;\n' + 'warp=0;\n' + 'bb = bb*0.99 + bass*0.02;\n' + 'mm = mm*0.99 + mid*0.02;\n' + 'tt = tt*0.99 + treb*0.02;\n' + 'mx = max(max(bb,mm),tt);\n' + 'mn = min(min(bb,mm),tt);\n' + 't1 = (bb-mn)/(mx-mn);\n' + 't2 = (mm-mn)/(mx-mn);\n' + 't3 = (tt-mn)/(mx-mn);\n' + 'v = 0.15/fps;\n' + 'bm = bm + (t1-t2)*v;\n' + 'mt = mt + (t2-t3)*v;\n' + 'q22 = 0;\n' + 'q21 = 1;\n' + 'q24 = 0;\n' + 'q23 = -1;\n' + 'q25 = 0.5/asin(1);\n' + 'q26 = -bm;\n' + 'q27 = mt;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
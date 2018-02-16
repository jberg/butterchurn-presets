define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.14,
		wave_g : 1.0,
		ib_g : 0.55,
		mv_x : 0.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 1.599,
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
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.55,
		mv_b : 0.71,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.91,
		wave_x : 0.2,
		wave_y : 0.88,
		zoom : 1.0003,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.8,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.6,
		wave_b : 1.0,
		ib_b : 0.55,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.tt = 0;
m.mn = 0;
m.q2 = 0;
m.q3 = 0;
m.mt = 0;
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
m.bass_thresh = 0;
m.dy1 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.91)+1.3)));
m.ib_r = (m.ib_r+(0.35*((0.6*Math.sin((m.time*1.1)))+(0.4*Math.sin((1.4*m.time))))));
m.ib_b = (m.ib_b+(0.2*((0.6*Math.sin((m.time*1.2)))+(0.4*Math.sin((1.1*m.time))))));
m.ib_g = (m.ib_g+(0.2*((0.6*Math.sin((m.time*1.3)))+(0.4*Math.sin((1.0*m.time))))));
m.q2 = m.bass_thresh;
m.warp = 0;
m.zoom = 1;
m.vol = (((m.bass+m.mid)+m.treb)*0.25);
m.vol = (m.vol*m.vol);
m.q3 = m.vol;
m.bb = ((m.bb*0.99)+(m.bass*0.02));
m.mm = ((m.mm*0.99)+(m.mid*0.02));
m.tt = ((m.tt*0.99)+(m.treb*0.02));
m.mx = Math.max(Math.max(m.bb, m.mm), m.tt);
m.mn = Math.min(Math.min(m.bb, m.mm), m.tt);
m.t1 = div((m.bb-m.mn),(m.mx-m.mn));
m.t2 = div((m.mm-m.mn),(m.mx-m.mn));
m.t3 = div((m.tt-m.mn),(m.mx-m.mn));
m.v = div(0.1,m.fps);
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
	'pixel_eqs' : function(m) {
m.dy1 = ((Math.cos(((m.x*m.q3)*30))*1.2)*0.11);
m.dy = ifcond(below(m.x, 0.14), ifcond(above(m.y, 0.1), ifcond(below(m.y, 0.93), ((m.dy1*(1-m.rad))*1.5), 0), 0), 0);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.7,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.2,
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
			r2 : 0.6,
			a : 1.0,
			enabled : 1.0,
			b : 0.7,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.6,
			textured : 0.0,
			g2 : 0.6,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.6,
			a2 : 1.0,
			r : 0.7,
			border_g : 0.0,
			rad : 0.09994,
			x : 0.0,
			y : 0.35,
			ang : 3.40549,
			sides : 63.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = ['g','b','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (m.r+(0.3*((0.6*Math.sin((m.time*1.4)))+(0.4*Math.sin((0.98*m.time))))));
m.b = (m.b+(0.3*((0.6*Math.sin((m.time*1.134)))+(0.4*Math.sin((0.78*m.time))))));
m.g = (m.g+(0.3*((0.6*Math.sin((m.time*1.287)))+(0.4*Math.sin((0.6*m.time))))));
m.r = 0;
m.b = 0;
m.g = 0;
m.r2 = m.r;
m.b2 = m.b;
m.g2 = m.g;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = r + 0.3*(0.6*sin(time*1.4) + 0.4*sin(0.98*time));\n' + 'b = b + 0.3*(0.6*sin(time*1.134) + 0.4*sin(0.78*time));\n' + 'g = g + 0.3*(0.6*sin(time*1.287) + 0.4*sin(0.6*time));\n' + 'r=0;\n' + 'b=0;\n' + 'g=0;\n' + 'r2=r;\n' + 'b2=b;\n' + 'g2=g;'),

		},
		{
		'baseVals' : {
			r2 : 0.6,
			a : 1.0,
			enabled : 1.0,
			b : 0.7,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.6,
			textured : 0.0,
			g2 : 0.6,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.6,
			a2 : 1.0,
			r : 0.7,
			border_g : 1.0,
			rad : 0.11046,
			x : 0.0,
			y : 0.45,
			ang : 0.0,
			sides : 34.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = ['g','b','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (m.r+(0.3*((0.6*Math.sin((m.time*2.4)))+(0.4*Math.sin((0.34*m.time))))));
m.b = (m.b+(0.3*((0.6*Math.sin((m.time*1.65)))+(0.4*Math.sin((0.976*m.time))))));
m.g = (m.g+(0.3*((0.6*Math.sin((m.time*2.05)))+(0.4*Math.sin((0.577*m.time))))));
m.r2 = m.r;
m.b2 = m.b;
m.g2 = m.g;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = r + 0.3*(0.6*sin(time*2.4) + 0.4*sin(0.34*time));\n' + 'b = b + 0.3*(0.6*sin(time*1.65) + 0.4*sin(0.976*time));\n' + 'g = g + 0.3*(0.6*sin(time*2.05) + 0.4*sin(0.577*time));\n' + 'r2=r;\n' + 'b2=b;\n' + 'g2=g;'),

		},
		{
		'baseVals' : {
			r2 : 0.6,
			a : 1.0,
			enabled : 1.0,
			b : 0.7,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.6,
			textured : 0.0,
			g2 : 0.6,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.6,
			a2 : 1.0,
			r : 0.7,
			border_g : 1.0,
			rad : 0.1,
			x : 0.0,
			y : 0.55,
			ang : 0.0,
			sides : 54.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = 0;
m.b = 0;
m.g = 0;
m.r2 = m.r;
m.b2 = m.b;
m.g2 = m.g;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=0;\n' + 'b=0;\n' + 'g=0;\n' + 'r2=r;\n' + 'b2=b;\n' + 'g2=g;'),

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
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.20068,
			x : 0.0,
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
	'warp' : ('shader_body {\n' + '   vec3 retb_1;\n' + '   vec3 reta_2;\n' + '   vec2 tmpvar_3;\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = (uv.x - 0.005);\n' + '  tmpvar_3.x = tmpvar_4;\n' + '  tmpvar_3.y = uv.y;\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_pc_main, tmpvar_3).xyz;\n' + '  reta_2 = tmpvar_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = tmpvar_4;\n' + '  tmpvar_6.y = uv.y;\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_fc_main, tmpvar_6).xyz;\n' + '  retb_1 = tmpvar_7;\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = mix (retb_1, reta_2, vec3(clamp ((uv.x + 0.5), 0.0, 1.0)));\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('uniform highp vec2 numerator;\n' + 'uniform highp vec2 denominator;\n' + 'uniform highp vec2 fraction;\n' + 'uniform highp vec2 c;\n' + 'highp vec2 xlat_mutablec;\n' + 'highp vec2 xlat_mutabledenominator;\n' + 'highp vec2 xlat_mutablefraction;\n' + 'highp vec2 xlat_mutablenumerator;\n' + 'shader_body {\n' + '  xlat_mutablec = c;\n' + '  xlat_mutabledenominator = denominator;\n' + '  xlat_mutablefraction = fraction;\n' + '  xlat_mutablenumerator = numerator;\n' + '   vec2 uv_1;\n' + '  uv_1 = uv;\n' + '   float dy_2;\n' + '   float dx_3;\n' + '   vec2 uv1_4;\n' + '  for ( int i_5 = 0; i_5 < 3; i_5++) {\n' + '    xlat_mutablec = (((uv_1 - 0.5) * 2.0) * aspect.wz);\n' + '    xlat_mutablenumerator = ((xlat_mutablec + _qf.xy) * 64.0);\n' + '    xlat_mutabledenominator = (xlat_mutablec + _qf.zw);\n' + '     vec2 tmpvar_6;\n' + '    tmpvar_6.x = ((xlat_mutablenumerator.x * xlat_mutabledenominator.x) + (xlat_mutablenumerator.y * xlat_mutabledenominator.y));\n' + '    tmpvar_6.y = ((xlat_mutablenumerator.y * xlat_mutabledenominator.x) - (xlat_mutablenumerator.x * xlat_mutabledenominator.y));\n' + '    xlat_mutablefraction = (tmpvar_6 / ((xlat_mutabledenominator.x * xlat_mutabledenominator.x) + (xlat_mutabledenominator.y * xlat_mutabledenominator.y)));\n' + '    xlat_mutablec = (xlat_mutablefraction - 0.5);\n' + '     float tmpvar_7;\n' + '     float tmpvar_8;\n' + '    tmpvar_8 = (min (abs(\n' + '      (xlat_mutablec.x / xlat_mutablec.y)\n' + '    ), 1.0) / max (abs(\n' + '      (xlat_mutablec.x / xlat_mutablec.y)\n' + '    ), 1.0));\n' + '     float tmpvar_9;\n' + '    tmpvar_9 = (tmpvar_8 * tmpvar_8);\n' + '    tmpvar_9 = (((\n' + '      ((((\n' + '        ((((-0.01213232 * tmpvar_9) + 0.05368138) * tmpvar_9) - 0.1173503)\n' + '       * tmpvar_9) + 0.1938925) * tmpvar_9) - 0.3326756)\n' + '     * tmpvar_9) + 0.9999793) * tmpvar_8);\n' + '    tmpvar_9 = (tmpvar_9 + (float(\n' + '      (abs((xlat_mutablec.x / xlat_mutablec.y)) > 1.0)\n' + '    ) * (\n' + '      (tmpvar_9 * -2.0)\n' + '     + 1.570796)));\n' + '    tmpvar_7 = (tmpvar_9 * sign((xlat_mutablec.x / xlat_mutablec.y)));\n' + '    if ((abs(xlat_mutablec.y) > (1e-08 * abs(xlat_mutablec.x)))) {\n' + '      if ((xlat_mutablec.y < 0.0)) {\n' + '        if ((xlat_mutablec.x >= 0.0)) {\n' + '          tmpvar_7 += 3.141593;\n' + '        } else {\n' + '          tmpvar_7 = (tmpvar_7 - 3.141593);\n' + '        };\n' + '      };\n' + '    } else {\n' + '      tmpvar_7 = (sign(xlat_mutablec.x) * 1.570796);\n' + '    };\n' + '     vec2 tmpvar_10;\n' + '    tmpvar_10.x = ((tmpvar_7 * _qg.x) + _qg.y);\n' + '    tmpvar_10.y = (((0.3 * aspect.w) * log(\n' + '      sqrt(dot (xlat_mutablec, xlat_mutablec))\n' + '    )) + _qg.z);\n' + '    uv_1 = (0.5 + ((0.5 - \n' + '      abs(((fract(\n' + '        (tmpvar_10 * 0.5)\n' + '      ) * 2.0) - 1.0))\n' + '    ) * 0.95));\n' + '  };\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = (uv_1.x - _qb.y);\n' + '  tmpvar_11.y = (uv_1.y - _qb.x);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12.y = 0.0;\n' + '  tmpvar_12.x = texsize.z;\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = 0.0;\n' + '  tmpvar_13.y = texsize.w;\n' + '   vec2 P_14;\n' + '  P_14 = (uv_1 - tmpvar_12);\n' + '   vec2 P_15;\n' + '  P_15 = (uv_1 + tmpvar_12);\n' + '   float tmpvar_16;\n' + '  tmpvar_16 = (texture2D (sampler_main, P_14).xyz - texture2D (sampler_main, P_15).xyz).x;\n' + '  dx_3 = tmpvar_16;\n' + '   vec2 P_17;\n' + '  P_17 = (uv_1 - tmpvar_13);\n' + '   vec2 P_18;\n' + '  P_18 = (uv_1 + tmpvar_13);\n' + '   float tmpvar_19;\n' + '  tmpvar_19 = (texture2D (sampler_main, P_17).xyz - texture2D (sampler_main, P_18).xyz).x;\n' + '  dy_2 = tmpvar_19;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20.x = dx_3;\n' + '  tmpvar_20.y = dy_2;\n' + '  uv1_4 = ((0.3 * cos(\n' + '    (tmpvar_11 * 2.0)\n' + '  )) - tmpvar_20);\n' + '   float tmpvar_21;\n' + '  tmpvar_21 = clamp ((0.04 / sqrt(\n' + '    dot (uv1_4, uv1_4)\n' + '  )), 0.0, 1.0);\n' + '  uv1_4 = ((0.3 * cos(\n' + '    (uv1_4 * 12.0)\n' + '  )) - (9.0 * tmpvar_20));\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur2, uv_1);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_main, uv_1);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24.w = 1.0;\n' + '  tmpvar_24.xyz = ((tmpvar_21 - dot (\n' + '    ((tmpvar_22.xyz * scale2) + bias2)\n' + '  , vec3(0.32, 0.49, 0.29))) + ((tmpvar_23.xyz * 12.0) * vec3(clamp (\n' + '    (0.04 / sqrt(dot (uv1_4, uv1_4)))\n' + '  , 0.0, 1.0))));\n' + '  vec4 ret4 = tmpvar_24;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.91+1.3);\n' + 'ib_r = ib_r + 0.35*(0.6*sin(time*1.1) + 0.4*sin(1.4*time));\n' + 'ib_b = ib_b + 0.2*(0.6*sin(time*1.2) + 0.4*sin(1.1*time));\n' + 'ib_g = ib_g + 0.2*(0.6*sin(time*1.3) + 0.4*sin(1.0*time));\n' + 'q2=bass_thresh;\n' + 'warp=0;\n' + 'zoom=1;\n' + 'vol=(bass+mid+treb)*0.25;\n' + 'vol=vol*vol;\n' + 'q3=vol;\n' + 'bb = bb*0.99 + bass*0.02;\n' + 'mm = mm*0.99 + mid*0.02;\n' + 'tt = tt*0.99 + treb*0.02;\n' + 'mx = max(max(bb,mm),tt);\n' + 'mn = min(min(bb,mm),tt);\n' + 't1 = (bb-mn)/(mx-mn);\n' + 't2 = (mm-mn)/(mx-mn);\n' + 't3 = (tt-mn)/(mx-mn);\n' + 'v = 0.1/fps;\n' + 'bm = bm + (t1-t2)*v;\n' + 'mt = mt + (t2-t3)*v;\n' + 'q22 = 0;\n' + 'q21 = 1;\n' + 'q24 = 0;\n' + 'q23 = -1;\n' + 'q25 = 0.5/asin(1);\n' + 'q26 = -bm;\n' + 'q27 = mt;'),
	'pixel_eqs_str' : ('dy1=(cos(x*q3*30)*1.2)*0.11;\n' + 'dy=if(below(x,0.14),if(above(y,0.1),if(below(y,0.93),(dy1*(1-rad))*1.5,0),0),0);'),
};

return pmap;
});
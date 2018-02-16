define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 0.49,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.527,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 4.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.8,
		ib_r : 0.25,
		mv_b : 0.5,
		echo_zoom : 1.0,
		ob_size : 0.01,
		b1ed : 0.0,
		wave_smoothing : 0.45,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.00183,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 1.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.32,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 0.5,
		rating : 2.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.0,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.index2 = 0;
m.q1 = 0;
m.p1 = 0;
m.q2 = 0;
m.p2 = 0;
m.q3 = 0;
m.ready = 0;
m.q4 = 0;
m.k1 = 0;
m.movex = 0;
m.is_beat2 = 0;
m.alt = 0;
m.is_beat = 0;
m.lx = 0;
m.step = 0;
m.ly = 0;
m.q30 = 0;
m.dec_med = 0;
m.q20 = 0;
m.q10 = 0;
m.q21 = 0;
m.q11 = 0;
m.q22 = 0;
m.index = 0;
m.q23 = 0;
m.avg = 0;
m.q24 = 0;
m.rad = 0;
m.q26 = 0;
m.q27 = 0;
m.beat = 0;
m.q28 = 0;
m.q19 = 0;
m.t0 = 0;
m.rott = 0;
m.dec_slow = 0;
m.peak = 0;
m.shift = 0;
m.step = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.8, div(30,m.fps));
m.dec_slow = pow(0.99, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.4+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),4);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),4);
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.q24 = m.is_beat;
m.q26 = ((m.bass_att+m.mid_att)+m.treb_att);
m.ready = ((m.is_beat*bnot(m.ready))+(bnot(m.is_beat2)*m.ready));
m.is_beat2 = (m.ready*above(m.time, (m.t0+0.2)));
m.q19 = m.is_beat2;
m.k1 = (m.is_beat*equal(m.index, 0));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.rott = div((m.p2*3.14159265359),2);
m.q27 = (m.index+1);
m.q28 = (m.index2+1);
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.movex = (m.movex+div((0.002*30),m.fps));
m.q30 = m.movex;
m.alt = ((m.alt*(1-m.dec_med))+(m.q26*m.dec_med));
m.q26 = (m.q26-m.alt);
m.step = (((m.step+(1*Math.max(m.q26, 0)))+m.q24)-Math.floor(m.step));
m.q30 = m.step;
m.q30 = m.movex;
m.lx = (m.lx+div((0.001*30),m.fps));
m.ly = (m.ly+(div((0.01*30),m.fps)*m.q2));
m.q10 = m.lx;
m.q11 = 0;
m.zoom = (1.0+(0.0*m.rad));
m.dx = 0.0;
m.dy = 0.00;
m.rot = (0.1*m.q1);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.6,
			enabled : 0.0,
			b : 1.0,
			g : 0.3,
			scaling : 7.858,
			samples : 282.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.2,
			smoothing : 0.1,
			thick : 1.0,
			sep : 20.0,
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
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.89152,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q21 = 0;
m.yi = 0;
m.xi = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.xi = div(rand(100),100);
m.yi = div(rand(100),100);
m.x = m.xi;
m.y = m.yi;
m.a = div(m.q21,15);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('xi = rand(100)/100;\n' + 'yi = rand(100)/100;\n' + 'x = xi;\n' + ' y = yi;\n' + 'a = q21/15;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 0.2,
			scaling : 0.89152,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.82,
			thick : 1.0,
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
			usedots : 1.0,
			spectrum : 1.0,
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
			r2 : 0.83,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 1.00531,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.93,
			tex_zoom : 1.53117,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.8,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.04896,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.trel = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.trel = div(m.time,3);
m.x = (0.5+Math.sin((m.trel*2)));
m.y = (0.5+Math.cos((m.trel*1.3)));
m.rad = 0.1;
m.a = 0.8;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trel = time/3;\n' + 'x = .5+sin(trel*2);\n' + 'y = .5+cos(trel*1.3);\n' + 'rad = .1;\n' + 'a = .8;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.5,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.55,
			textured : 1.0,
			g2 : 0.4,
			tex_zoom : 0.9355,
			additive : 0.0,
			border_a : 0.4,
			border_b : 0.8,
			b2 : 0.4,
			a2 : 0.07,
			r : 0.0,
			border_g : 0.7,
			rad : 0.39317,
			x : 0.26,
			y : 0.2,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.3,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q27 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_zoom = m.q27;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_zoom = q27;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.9,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.1,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.60986,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.03886,
			x : 0.503,
			y : 0.5,
			ang : 0.0,
			sides : 44.0,
			border_r : 0.5,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q21 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = div(rand(50),50);
m.y = 0.5;
m.r = 0.4;
m.g = 0.6;
m.b = 1;
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
m.a2 = div(Math.min(div(m.q21,2), 1),2);
m.a = 0;
m.rad = div((m.a2*(0.1+Math.abs((m.x-0.5)))),2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = rand(50)/50;\n' + 'y = .5;\n' + 'r = .4;\n' + 'g = .6;\n' + 'b = 1;\n' + 'r2 = r;\n' + 'g2 = g;\n' + 'b2 = b;\n' + 'a2 = min(q21/2 ,1)/2;\n' + 'a = 0;\n' + 'rad = a2 * (.1+abs(x-.5))/2 ;'),

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
			tex_zoom : 0.49981,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.8,
			r : 1.0,
			border_g : 0.7,
			rad : 0.39478,
			x : 0.26,
			y : 0.76,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.2,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q27 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_zoom = div(m.q27,2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_zoom = q27/2;'),

		}
],
	'warp' : ('highp float xlat_mutabledx;\n' + 'highp float xlat_mutabledy;\n' + 'highp vec2 xlat_mutableuv2;\n' + 'highp vec2 xlat_mutablezz;\n' + 'shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 crisp2_2;\n' + '   vec3 crisp_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.y = 0.0;\n' + '  tmpvar_4.x = texsize.w;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = 0.0;\n' + '  tmpvar_5.y = texsize.z;\n' + '  xlat_mutablezz = ((uv * texsize.xy) * 0.01);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = (cos((xlat_mutablezz.y * _qa.x)) * sin(-(xlat_mutablezz.y)));\n' + '  tmpvar_6.y = (sin(xlat_mutablezz.x) * cos((xlat_mutablezz.y * _qa.y)));\n' + '  uv_1 = (uv - ((tmpvar_6 * texsize.zw) * (8.0 + \n' + '    (6.0 * _qc.z)\n' + '  )));\n' + '  xlat_mutableuv2 = (((uv_1 / 2.0) * _qg.z) / 4.0);\n' + '   vec2 P_7;\n' + '  P_7 = (xlat_mutableuv2 + tmpvar_4);\n' + '   vec2 P_8;\n' + '  P_8 = (xlat_mutableuv2 - tmpvar_4);\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = dot ((texture2D (sampler_main, P_7).xyz - texture2D (sampler_main, P_8).xyz), vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledx = tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (xlat_mutableuv2 + tmpvar_5);\n' + '   vec2 P_11;\n' + '  P_11 = (xlat_mutableuv2 - tmpvar_5);\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = dot ((texture2D (sampler_main, P_10).xyz - texture2D (sampler_main, P_11).xyz), vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledy = tmpvar_12;\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = (0.15 + (0.1 * _qg.w));\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = (xlat_mutableuv2 + (time / 100.0));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_noise_hq, tmpvar_14);\n' + '  xlat_mutabledx = (xlat_mutabledx + (tmpvar_13 * (tmpvar_15.x - 0.5)));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_noise_hq, tmpvar_14);\n' + '  xlat_mutabledy = (xlat_mutabledy + (tmpvar_13 * (tmpvar_16.y - 0.5)));\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = xlat_mutabledx;\n' + '  tmpvar_17.y = xlat_mutabledy;\n' + '  xlat_mutablezz = tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv_1 + (tmpvar_17 * 0.04));\n' + '   vec3 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_main, P_18).xyz;\n' + '  crisp_3 = tmpvar_19;\n' + '   vec3 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_main, uv_1).xyz;\n' + '  crisp2_2 = tmpvar_20;\n' + '  crisp_3 = (crisp_3 + crisp2_2);\n' + '  crisp_3 = (crisp_3 * 0.5);\n' + '  crisp_3 = (crisp_3 + ((0.05 * \n' + '    (0.9 + (0.1 * roam_cos))\n' + '  .xyz) - (\n' + '    sqrt(dot (tmpvar_17, tmpvar_17))\n' + '   * 0.3)));\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21.w = 1.0;\n' + '  tmpvar_21.xyz = ((crisp_3 * 0.97) - 0.015);\n' + '  vec4 ret4 = tmpvar_21;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('uniform highp vec3 neu;\n' + 'uniform highp vec2 uv3;\n' + 'uniform highp vec2 uv4;\n' + 'highp vec2 xlat_mutabledz;\n' + 'highp vec3 xlat_mutableneu;\n' + 'highp vec3 xlat_mutableret1;\n' + 'highp vec2 xlat_mutableuv3;\n' + 'highp vec2 xlat_mutableuv4;\n' + 'shader_body {\n' + '  xlat_mutableneu = neu;\n' + '  xlat_mutableuv3 = uv3;\n' + '  xlat_mutableuv4 = uv4;\n' + '   vec2 uv_1;\n' + '   vec3 clouds_2;\n' + '   float inten_4;\n' + '   float dist_5;\n' + '   vec3 ret_6;\n' + '  uv_1 = (uv - 0.5);\n' + '  xlat_mutabledz = vec2(0.0, 0.0);\n' + '  dist_5 = 1.0;\n' + '  inten_4 = 1.0;\n' + '  xlat_mutableret1 = vec3(0.0, 0.0, 0.0);\n' + '  for ( float n_3 = 0.0; n_3 <= 4.0; n_3 += 1.0) {\n' + '    dist_5 = (1.0 - fract((\n' + '      (0.2 * n_3)\n' + '     + \n' + '      (time / 4.0)\n' + '    )));\n' + '    inten_4 = ((sqrt(dist_5) * (1.0 - dist_5)) * 2.0);\n' + '     vec2 tmpvar_7;\n' + '    tmpvar_7.y = 0.0;\n' + '    tmpvar_7.x = (time / 8.0);\n' + '    xlat_mutableuv3 = (((\n' + '      (2.0 * uv_1)\n' + '     * dist_5) + 0.4) + tmpvar_7);\n' + '     vec4 tmpvar_8;\n' + '    tmpvar_8 = texture2D (sampler_main, xlat_mutableuv3);\n' + '    xlat_mutableneu = tmpvar_8.xyz;\n' + '     vec2 tmpvar_9;\n' + '    tmpvar_9.y = 0.0;\n' + '    tmpvar_9.x = texsize.z;\n' + '     vec2 P_10;\n' + '    P_10 = (xlat_mutableuv3 + tmpvar_9);\n' + '     vec2 tmpvar_11;\n' + '    tmpvar_11.y = 0.0;\n' + '    tmpvar_11.x = texsize.z;\n' + '     vec2 P_12;\n' + '    P_12 = (xlat_mutableuv3 - tmpvar_11);\n' + '     float tmpvar_13;\n' + '    tmpvar_13 = dot ((texture2D (sampler_main, P_10).xyz - texture2D (sampler_main, P_12).xyz), vec3(0.32, 0.49, 0.29));\n' + '    xlat_mutabledz.x = (xlat_mutabledz.x + (inten_4 * tmpvar_13));\n' + '     vec2 tmpvar_14;\n' + '    tmpvar_14.x = 0.0;\n' + '    tmpvar_14.y = texsize.w;\n' + '     vec2 P_15;\n' + '    P_15 = (xlat_mutableuv3 + tmpvar_14);\n' + '     vec2 tmpvar_16;\n' + '    tmpvar_16.x = 0.0;\n' + '    tmpvar_16.y = texsize.w;\n' + '     vec2 P_17;\n' + '    P_17 = (xlat_mutableuv3 - tmpvar_16);\n' + '     float tmpvar_18;\n' + '    tmpvar_18 = dot ((texture2D (sampler_main, P_15).xyz - texture2D (sampler_main, P_17).xyz), vec3(0.32, 0.49, 0.29));\n' + '    xlat_mutabledz.y = (xlat_mutabledz.y + (inten_4 * tmpvar_18));\n' + '    xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_4));\n' + '  };\n' + '  uv_1 = (uv_1 + (xlat_mutabledz * 14.0));\n' + '  xlat_mutableuv4 = (uv_1 - vec2(0.2, -0.1));\n' + '   float tmpvar_19;\n' + '  tmpvar_19 = (0.5 * clamp ((1.0/(\n' + '    (abs(uv_1.y) + 0.1)\n' + '  )), 0.0, 12.0));\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20.x = (uv_1.x * tmpvar_19);\n' + '  tmpvar_20.y = tmpvar_19;\n' + '   vec2 P_21;\n' + '  P_21 = (tmpvar_20 + (0.04 * time));\n' + '   vec3 tmpvar_22;\n' + '  tmpvar_22 = vec3(dot (texture2D (sampler_noise_hq, P_21), vec4(0.32, 0.49, 0.29, 0.0)));\n' + '  clouds_2 = tmpvar_22;\n' + '  clouds_2 = (clouds_2 * ((\n' + '    clamp ((1.0 - (12.0 * uv_1.y)), 0.0, 1.0)\n' + '   * 0.1) / (0.03 + \n' + '    sqrt(dot (xlat_mutableuv4, xlat_mutableuv4))\n' + '  )));\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23.xy = vec2(0.0, 0.0);\n' + '  tmpvar_23.z = clamp ((1.0 - (3.0 * uv_1.y)), 0.0, 1.0);\n' + '  ret_6 = (vec3(0.0, 0.1, 0.1) + (0.1 * tmpvar_23));\n' + '  ret_6 = (ret_6 + clouds_2);\n' + '  ret_6 = (ret_6 + ((0.4 * xlat_mutableret1) + (\n' + '    (0.25 * _qf.y)\n' + '   * xlat_mutableret1)));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24.w = 1.0;\n' + '  tmpvar_24.xyz = ret_6;\n' + '  vec4 ret4 = tmpvar_24;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('shift = 0;\n' + 'step = 0;'),
	'frame_eqs_str' : ('dec_med = pow (0.8, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .4+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %4;\n' + 'index2 = (index2 + is_beat*bnot(index))%4;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = bass_att + mid_att + treb_att;\n' + 'ready = is_beat * bnot(ready) + bnot(is_beat2)*ready;\n' + 'is_beat2 = ready * above (time, t0+.2);\n' + 'q19 = is_beat2;\n' + 'k1 =  is_beat*equal(index,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'rott = p2 * 3.14159265359/2;\n' + 'q27 = index+1;\n' + 'q28 = index2+1;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'movex = movex +.002*30/fps;\n' + 'q30 = movex;\n' + 'alt = alt * (1-dec_med) + q26*dec_med;\n' + 'q26 = q26 - alt;\n' + 'step = step + 1*max(q26,0) + q24 -int(step);\n' + 'q30 = step;\n' + 'q30 = movex;\n' + 'lx = lx + .001*30/fps;\n' + 'ly = ly + .01*30/fps*q2;\n' + 'q10 = lx;\n' + 'q11 = 0;\n' + 'zoom = (1.0  + .0*rad);\n' + 'dx = .0;\n' + 'dy = .00;\n' + 'rot = .1*q1;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
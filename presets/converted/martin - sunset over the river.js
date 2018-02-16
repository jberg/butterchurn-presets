define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 31.0,
		warpscale : 2.0067,
		brighten : 0.0,
		mv_y : 24.0,
		wave_scale : 0.0,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 0.9999,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 1.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 0.0,
		ob_size : 0.0,
		b1ed : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.4595,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.0,
		wave_y : 0.0,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.2,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.0,
		wave_a : 0.0,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.0,
		rating : 0.0,
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
m.p3 = 0;
m.q4 = 0;
m.q5 = 0;
m.movx = 0;
m.k1 = 0;
m.is_beat = 0;
m.q30 = 0;
m.dec_med = 0;
m.sb = 0;
m.q20 = 0;
m.q31 = 0;
m.q21 = 0;
m.q32 = 0;
m.q22 = 0;
m.index = 0;
m.q23 = 0;
m.avg = 0;
m.q24 = 0;
m.q15 = 0;
m.q26 = 0;
m.beat = 0;
m.q28 = 0;
m.q29 = 0;
m.t0 = 0;
m.rott = 0;
m.dec_slow = 0;
m.peak = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.8, div(30,m.fps));
m.dec_slow = pow(0.9, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.5+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),16);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),5);
m.monitor = m.index2;
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.q24 = m.is_beat;
m.q26 = ((m.bass+m.mid)+m.treb);
m.sb = ((m.sb*m.dec_med)+(m.q21*(1-m.dec_med)));
m.q29 = m.sb;
m.k1 = ((m.is_beat*bnot(m.index))*bnot(m.index2));
m.p1 = (m.index2-2);
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.p3 = ((m.dec_med*m.p3)+((1-m.dec_med)*m.p2));
m.q5 = Math.cos(div((m.p3*3.14),2));
m.rott = (m.rott+(div((0.003*30),m.fps)*m.p3));
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.movx = (m.movx+div((0.002*30),m.fps));
m.q28 = m.movx;
m.q15 = ((1+Math.sin(div(m.time,23)))*0.15);
m.q29 = (4*(0.5+Math.sin(div(m.time,17))));
m.q30 = div(5,(1.2+Math.sin(div(m.time,50))));
m.q31 = div(Math.sin(div(m.time,38)),3);
m.q32 = (2+Math.sin(div(m.time,18)));
m.warp = 0.06;
m.zoom = 0.998;
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
			scaling : 0.0,
			samples : 187.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 9.0,
			},
		'init_eqs' : function(m) {
m.k1 = 0;
m.k2 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['t1'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = 1;
m.t3 = Math.sin(div(m.time,2));
m.t3 = Math.max(m.t3, 0);
m.t3 = (4.9*Math.min(m.t3, 0.2));
		return m;
	},
		'point_eqs' : function(m) {
m.t1 = mod(((m.t1*67)+37),4096);
m.t2 = div(m.t1,4096);
m.k1 = mod(((100*m.sample)+(m.time*2)),2);
m.k2 = mod(((100*m.sample)+(m.time*5)),2);
m.x = (0.49+(0.48*Math.sin(((m.sample*31)+div((m.t2*m.time),27)))));
m.y = ((0+(0.2*m.t2))+(0.2*Math.sin(((m.sample*131)+div((m.t2*m.time),7)))));
m.a = 1;
m.r = 0.07;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = 1;\n' + 't3 = sin(time/2);\n' + 't3 = max (t3,0);\n' + 't3 = 4.9*min(t3,.2);'),
		'point_eqs_str' : ('t1 = (t1*67+37)%4096;\n' + 't2 = t1/4096;\n' + 'k1 = (100*sample+time*2)%2;\n' + 'k2 = (100*sample+time*5)%2;\n' + 'x = .49 + .48*sin(sample*31+t2*time/27);\n' + 'y =  0 + .2*t2 + .2*sin(sample*131+t2*time/7);\n' + 'a = 1;\n' + 'r = .07;'),

		},
		{
		'baseVals' : {
			a : 0.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.0,
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
m.k1 = 0;
m.px = 0;
m.py = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = ['t1','t2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = 1;
m.t2 = 7;
		return m;
	},
		'point_eqs' : function(m) {
m.r = 0.31;
m.b = 0;
m.g = 0.0;
m.a = 1;
m.t1 = mod(((m.t1*67)+37),4096);
m.px = div((m.t1-2047),4096);
m.t2 = mod(((m.t2*67)+37),4096);
m.py = div((m.t2-0),4096);
m.k1 = mod((m.sample*100),8);
m.y = (div(m.py,3.5)+0.0);
m.a = below(m.y, 0.2);
m.x = (0.5+(0.4*Math.sin((m.sample*26))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = 1;\n' + ' t2 = 7;'),
		'point_eqs_str' : ('r = .31;\n' + 'b = 0;\n' + 'g = .0;\n' + 'a = 1;\n' + 't1 = (t1*67 + 37)%4096;\n' + 'px = (t1-2047)/4096;\n' + 't2 = (t2*67 + 37)%4096;\n' + 'py = (t2-0)/4096;\n' + 'k1 = (sample*100)%8;\n' + 'y = py/3.5 + .0;\n' + 'a = below(y,.2);\n' + 'x = .5 + .4*sin(sample*26)  ;'),

		},
		{
		'baseVals' : {
			a : 0.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.0,
			samples : 100.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.t5 = 0;
m.t6 = 0;
m.k1 = 0;
m.ground = 0;
m.f1 = 0;
m.dx = 0;
m.dy = 0;
m.y0 = 0;
m.bird = 0;
m.trig = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = Math.sin((m.time*3));
m.t2 = Math.cos((m.time*3));
m.t3 = Math.sin(div(m.time,3));
m.t4 = Math.cos(div(m.time,3));
m.t5 = div(Math.cos(div(m.time,4)),2);
m.ground = below(m.t5, -0.9);
m.trig = below(rand(100), 1);
m.trig = ((m.trig*bnot(m.ground))*bnot(m.bird));
m.bird = (m.bird*bnot(m.ground));
m.bird = (bnot(m.bird)*m.trig);
m.t6 = m.bird;
		return m;
	},
		'point_eqs' : function(m) {
m.r = 1;
m.g = 0;
m.b = 0;
m.k1 = below(m.sample, 0.5);
m.dx = ((0.01*m.k1)*Math.sin((m.sample*50)));
m.f1 = sqr(m.dx);
m.dy = (((40*m.f1)*m.t1)+div(m.t2,150));
m.dy = (m.dy+(((1-m.k1)*0.002)*Math.sin((m.sample*50))));
m.x = ((m.dx+0.5)+(0.1*m.t3));
m.dy = (m.dy+((0.2*m.dx)*m.t4));
m.y0 = m.t5;
m.y = ((m.dy+0.5)+div(m.y0,8));
m.a = 0.04;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = sin(time*3);\n' + 't2 = cos(time*3);\n' + 't3 = sin(time/3);\n' + 't4 = cos(time/3);\n' + 't5 = cos(time/4)/2;\n' + 'ground = below(t5,-.9);\n' + 'trig = below(rand(100),1);\n' + 'trig = trig * bnot(ground) * bnot(bird);\n' + 'bird = bird * bnot(ground);\n' + 'bird = bnot(bird)*trig;\n' + 't6 = bird;'),
		'point_eqs_str' : ('r = 1;\n' + ' g = 0;\n' + ' b = 0;\n' + 'k1 = below(sample,.5);\n' + 'dx = .01*k1*sin(sample*50);\n' + 'f1 = sqr(dx);\n' + 'dy =  40*f1*t1 + t2/150;\n' + 'dy = dy+ (1-k1) * .002*sin(sample*50);\n' + 'x = dx + .5 + .1*t3;\n' + 'dy = dy + .2*dx*t4;\n' + 'y0 = t5;\n' + 'y = dy+ .5 + y0/8;\n' + 'a = .04;'),

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
			smoothing : 0.0,
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
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.628319,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.591233,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.591236,
			x : 0.0,
			y : 0.13,
			ang : 0.628319,
			sides : 4.0,
			border_r : 0.0,
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
			a : 0.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.0,
			x : 0.0,
			y : 0.0,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
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
			a : 0.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.0,
			rad : 1.0,
			x : 0.0,
			y : 0.0,
			ang : 0.0,
			sides : 14.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.3*Math.cos(div(m.time,78))));
m.y = (0.5+(0.3*Math.sin(div(m.time,78))));
m.tex_zoom = div(0.2,(Math.sin(div(m.time,31))+1.1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = .5+.3*cos(time/78);\n' + 'y = .5+.3*sin(time/78);\n' + 'tex_zoom = .2 / (sin(time/31)+1.1);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.0,
			x : 0.0,
			y : 0.0,
			ang : 0.0,
			sides : 63.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.3*Math.cos(div(m.time,59))));
m.y = (0.5+(0.3*Math.sin(div(m.time,59))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = .5+.3*cos(time/59);\n' + 'y = .5+.3 *sin(time/59);'),

		}
],
	'warp' : ('shader_body {\n' + '   float k1_1;\n' + '   float ky_2;\n' + '   float zu_3;\n' + '   vec2 uv3_4;\n' + '  uv3_4 = (100.0 * (uv - vec2(0.5, 0.5)));\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = dot (texture2D (sampler_noise_lq, uv), vec4(0.32, 0.49, 0.29, 0.0));\n' + '  zu_3 = tmpvar_5;\n' + '  ky_2 = clamp (((\n' + '    (-(uv3_4.y) / 100.0)\n' + '   + \n' + '    ((zu_3 / 4.0) * cos((16.0 * zu_3)))\n' + '  ) + 0.23), 0.0, 1.0);\n' + '  k1_1 = (uv3_4.x - (sign(uv3_4.x) * 24.0));\n' + '  k1_1 = (k1_1 - (sign(k1_1) * 9.0));\n' + '  k1_1 = (k1_1 + ((\n' + '    (k1_1 - (12.0 * sign(k1_1)))\n' + '   * ky_2) * ky_2));\n' + '  ky_2 = clamp ((ky_2 - 0.1), 0.0, 1.0);\n' + '  k1_1 = (k1_1 + ((\n' + '    (k1_1 - (24.0 * sign(k1_1)))\n' + '   * ky_2) * ky_2));\n' + '  ky_2 = clamp ((ky_2 - 0.1), 0.0, 1.0);\n' + '  k1_1 = (k1_1 + ((\n' + '    (k1_1 - (36.0 * sign(k1_1)))\n' + '   * ky_2) * ky_2));\n' + '  ky_2 = clamp ((ky_2 - 0.1), 0.0, 1.0);\n' + '  k1_1 = (k1_1 + ((\n' + '    (k1_1 - (48.0 * sign(k1_1)))\n' + '   * ky_2) * ky_2));\n' + '  ky_2 = clamp ((ky_2 - 0.1), 0.0, 1.0);\n' + '  k1_1 = (k1_1 + ((\n' + '    (k1_1 - (60.0 * sign(k1_1)))\n' + '   * ky_2) * ky_2));\n' + '  ky_2 = clamp ((ky_2 - 0.1), 0.0, 1.0);\n' + '   float tmpvar_6;\n' + '  tmpvar_6 = clamp (k1_1, -1.6, 1.6);\n' + '  k1_1 = tmpvar_6;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = fract(uv);\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_main, tmpvar_7);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9.w = 1.0;\n' + '  tmpvar_9.xyz = ((tmpvar_8.xyz * 0.5) + (vec3(0.1, 0.0, 0.0) * cos(tmpvar_6)));\n' + '  vec4 ret4 = tmpvar_9;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp float xlat_mutablehoriz;\n' + 'highp vec3 xlat_mutableneu;\n' + 'highp vec3 xlat_mutableret1;\n' + 'highp vec2 xlat_mutablers;\n' + 'highp vec2 xlat_mutableuv2;\n' + 'highp vec2 xlat_mutableuv5;\n' + 'highp vec3 xlat_mutablewater;\n' + 'shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 clouds_2;\n' + '   vec3 ret_3;\n' + '  uv_1 = (uv - 0.5);\n' + '  uv_1 = (uv_1 * aspect.xy);\n' + '  uv_1.x = uv_1.x;\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = clamp ((1.0/((uv_1.y - 0.1))), 0.0, 200.0);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = ((uv_1.x * tmpvar_4) + time);\n' + '  tmpvar_5.y = tmpvar_4;\n' + '  xlat_mutablers = (tmpvar_5 / 44.0);\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = vec3((dot (texture2D (sampler_noise_lq, xlat_mutablers), vec4(0.32, 0.49, 0.29, 0.0)) - 0.5));\n' + '  xlat_mutablewater = tmpvar_6;\n' + '  xlat_mutablewater = (xlat_mutablewater * clamp ((16.0 * \n' + '    (uv_1.y - 0.1)\n' + '  ), 0.0, 1.0));\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (xlat_mutablewater / 16.0).x;\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8.x = (uv_1.x + _qh.z);\n' + '  tmpvar_8.y = (abs((uv_1.y - 0.1)) - abs((_qh.z / 2.0)));\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = clamp ((1.0/(abs(\n' + '    (uv_1.y - 0.1)\n' + '  ))), 0.0, 200.0);\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10.x = (tmpvar_8.x * tmpvar_9);\n' + '  tmpvar_10.y = tmpvar_9;\n' + '  xlat_mutablers = ((tmpvar_10 / 16.0) + tmpvar_7);\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = vec3(dot (texture2D (sampler_noise_hq, xlat_mutablers), vec4(0.32, 0.49, 0.29, 0.0)));\n' + '  clouds_2 = tmpvar_11;\n' + '  clouds_2 = (clouds_2 * ((\n' + '    clamp ((0.6 - (2.0 * (uv_1.y - 0.1))), 0.0, 1.0)\n' + '   * 0.5) / (0.04 + \n' + '    sqrt(dot (tmpvar_8, tmpvar_8))\n' + '  )));\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12.xy = vec2(1.0, 0.6);\n' + '  tmpvar_12.z = (_qh.w / tmpvar_9);\n' + '  clouds_2 = (clouds_2 * tmpvar_12);\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.y = 0.0;\n' + '  tmpvar_13.x = (_qg.w / 4.0);\n' + '  xlat_mutableuv5 = ((uv_1 + tmpvar_13) + tmpvar_7);\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = (xlat_mutableuv5.x * 8.0);\n' + '  tmpvar_14.y = (xlat_mutableuv5.y * 4.0);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_noise_lq, tmpvar_14);\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = vec2((xlat_mutableuv5.x / 4.0));\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_noise_hq, tmpvar_16);\n' + '  xlat_mutablehoriz = ((abs(\n' + '    (xlat_mutableuv5.y - 0.1)\n' + '  ) * (1.0 + tmpvar_15.x)) * (1.0 + tmpvar_17.x));\n' + '   float tmpvar_18;\n' + '  tmpvar_18 = clamp ((1.0 - (_qh.y * xlat_mutablehoriz)), 0.0, 1.0);\n' + '  xlat_mutablehoriz = tmpvar_18;\n' + '  xlat_mutableuv2.y = uv_1.y;\n' + '  xlat_mutableuv2.x = (uv_1.x + 0.65);\n' + '  xlat_mutableuv2 = (((1.12 * xlat_mutableuv2) - 0.1) - 0.4);\n' + '   vec2 tmpvar_19;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = (_qg.w * vec2(1.0, 0.0));\n' + '  tmpvar_19 = fract((xlat_mutableuv2 + tmpvar_20));\n' + '   vec3 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_main, tmpvar_19).xyz;\n' + '  xlat_mutableneu = tmpvar_21;\n' + '  xlat_mutableret1 = xlat_mutableneu;\n' + '  xlat_mutableuv2.y = uv_1.y;\n' + '  xlat_mutableuv2.x = (uv_1.x + 1.3);\n' + '  xlat_mutableuv2 = (((0.92 * xlat_mutableuv2) - 0.1) - 0.4);\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22 = fract((xlat_mutableuv2 + tmpvar_20));\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_main, tmpvar_22).xyz;\n' + '  xlat_mutableneu = tmpvar_23;\n' + '  xlat_mutableret1 = (xlat_mutableret1 + xlat_mutableneu);\n' + '  xlat_mutableuv2.y = uv_1.y;\n' + '  xlat_mutableuv2.x = (uv_1.x + 1.95);\n' + '  xlat_mutableuv2 = (((0.72 * xlat_mutableuv2) - 0.1) - 0.4);\n' + '   vec2 tmpvar_24;\n' + '  tmpvar_24 = fract((xlat_mutableuv2 + tmpvar_20));\n' + '   vec3 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_main, tmpvar_24).xyz;\n' + '  xlat_mutableneu = tmpvar_25;\n' + '  xlat_mutableret1 = (xlat_mutableret1 + xlat_mutableneu);\n' + '  ret_3 = (((\n' + '    ((0.1 * (0.5 + xlat_mutablewater)) + (0.2 / _qh.y))\n' + '   * vec3(0.0, 0.5, 0.6)) + clamp (\n' + '    (clouds_2 * (1.0 - (4.0 * tmpvar_18)))\n' + '  , 0.0, 1.0)) + (vec3(tmpvar_18) * 0.06));\n' + '  ret_3 = (ret_3 * clamp ((1.0 - \n' + '    (xlat_mutableret1.x * 8.0)\n' + '  ), 0.0, 1.0));\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26.w = 1.0;\n' + '  tmpvar_26.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_26;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('dec_med = pow (0.8, 30/fps);\n' + 'dec_slow = pow (0.9, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %16;\n' + 'index2 = (index2 + is_beat*bnot(index))%5;\n' + 'monitor = index2;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = bass + mid + treb;\n' + 'sb = sb*dec_med + q21*(1-dec_med);\n' + 'q29 = sb;\n' + 'k1 =  is_beat*bnot(index)*bnot(index2);\n' + 'p1 =  (index2-2);\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'p3 = dec_med * p3+ (1-dec_med)*p2;\n' + 'q5 = cos(p3*3.14/2);\n' + 'rott =  rott +  .003*30/fps*p3;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'movx = movx + .002*30/fps;\n' + 'q28 = movx;\n' + 'q15 = (1+sin(time/23))*.15;\n' + 'q29 = 4*(.5+sin(time/17));\n' + 'q30 = 5/(1.2+sin(time/50));\n' + 'q31 = sin(time/38)/3;\n' + 'q32 = 2+sin(time/18);\n' + 'warp = .06;\n' + 'zoom = .998;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.980001,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 31.999994,
		warpscale : 2.0067,
		brighten : 0.0,
		mv_y : 24.000004,
		wave_scale : 1.05843,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
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
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 0.4999,
		echo_zoom : 0.999998,
		ob_size : 0.11,
		b1ed : 0.0,
		wave_smoothing : 0.45,
		warpanimspeed : 1.4595,
		wave_dots : 1.0,
		mv_g : 0.4999,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.32,
		wave_mystery : 0.08,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.4999,
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
m.index3 = 0;
m.p1 = 0;
m.q2 = 0;
m.index4 = 0;
m.p2 = 0;
m.q3 = 0;
m.q4 = 0;
m.k1 = 0;
m.movex = 0;
m.movez = 0;
m.is_beat = 0;
m.q30 = 0;
m.dec_med = 0;
m.q20 = 0;
m.q31 = 0;
m.q21 = 0;
m.q32 = 0;
m.q22 = 0;
m.index = 0;
m.q23 = 0;
m.avg = 0;
m.q24 = 0;
m.q26 = 0;
m.q27 = 0;
m.beat = 0;
m.q28 = 0;
m.q29 = 0;
m.t0 = 0;
m.rott = 0;
m.dec_slow = 0;
m.peak = 0;
m.p1 = rand(16);
m.p2 = m.p1;
		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.96, div(30,m.fps));
m.dec_slow = pow(0.99, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.4+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),8);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),4);
m.index3 = mod((m.index3+((m.is_beat*bnot(m.index))*bnot(m.index2))),3);
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.q24 = m.is_beat;
m.q26 = ((m.bass+m.mid)+m.treb);
m.k1 = (m.is_beat*equal(m.index, 0));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.rott = div((m.p2*3.14159265359),4);
m.q27 = (8-m.index);
m.q28 = Math.sin(div(m.time,7));
m.q29 = m.index4;
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.mv_a = (0.5*m.q1);
m.movez = (m.movez+div((0.01*30),m.fps));
m.q29 = m.movez;
m.movex = (m.movex+(div((0.003*30),m.fps)*m.q2));
m.q30 = m.movex;
m.q31 = sqr(Math.sin(div(m.time,17)));
m.q32 = sqr(Math.cos(div(m.time,17)));
m.zoom = 1.0;
m.rot = 0.0;
m.dx = 0.0;
m.warp = 0.2;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.6,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.01,
			samples : 36.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.ampl = 0;
m.t_rel = 0;
m.q32 = 0;
m.x1 = 0;
m.t1 = 0;
m.t2 = 0;
m.t1 = 1;
m.t2 = 100;
			m.rkeys = ['t2','t1'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = 1;
m.t2 = 100;
		return m;
	},
		'point_eqs' : function(m) {
m.ampl = ((0.4*m.sample)*Math.cos((m.time*2)));
m.x = (0.5+(m.ampl*Math.sin((div(m.time,7)+(m.sample*13)))));
m.y = (0.5+(m.ampl*Math.cos((div(m.time,12)+(m.sample*13)))));
m.t_rel = (div(m.time,25)+div(m.sample,13));
m.x = ((4*(m.t_rel-Math.floor(m.t_rel)))+(0.2*Math.cos((m.t_rel*140))));
m.y = ((0.6+(0.2*Math.sin(div(m.time,19))))+(0.02*Math.sin((m.t_rel*128))));
m.t1 = mod(((65*m.t1)+37),4096);
m.t2 = mod(((65*m.t2)+37),4096);
m.x1 = ((0.5+div(div(m.t1,4096),1))+div(m.time,32));
m.x = (-Math.floor(m.x1)+m.x1);
m.y = (0.5+div(div(m.t2,4096),2));
m.a = div(m.q32,2);
		return m;
	},
		'init_eqs_str' : ('t1 = 1;\n' + 't2 = 100;'),
		'frame_eqs_str' : ('t1 = 1;\n' + 't2 = 100;'),
		'point_eqs_str' : ('ampl=.4*sample*cos(time*2);\n' + 'x = .5+ampl*sin(time/7+sample*13);\n' + 'y = .5+ampl*cos(time/12+sample*13);\n' + 't_rel = time/25 + sample/13;\n' + 'x = 4*(t_rel-int(t_rel)) + .2*cos(t_rel*140);\n' + 'y = .6 + .2*sin(time/19)+.02*sin(t_rel*128);\n' + 't1 = (65*t1 +37)%4096;\n' + 't2 = (65*t2 +37)%4096;\n' + 'x1 = .5+t1/4096/1 + time/32;\n' + 'x = -int(x1) +x1;\n' + 'y = .5+t2/4096/2;\n' + 'a = q32/2;'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.891519,
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
m.q1 = 0;
m.tvb = 0;
m.t4 = 0;
m.q2 = 0;
m.tvc = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.t8 = 0;
m.sz = 0;
m.tic = 0;
m.len = 0;
m.tin = 0;
m.tm = 0;
m.t1 = 0;
m.t2 = 0;
m.tva = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tm = (m.time*0.1);
m.t1 = ((m.t1*Math.sin((m.tm*m.t4)))+((1-m.t1)*Math.sin((m.tm*m.t7))));
m.t2 = ((m.t2*Math.sin((m.tm*m.t5)))+((1-m.t2)*Math.sin((m.tm*m.t8))));
m.t3 = ((m.t3*Math.sin((m.tm*m.t6)))+((1-m.t3)*Math.sin((m.tm*1))));
m.tic = Math.min((m.time-m.tin), 1);
m.tin = m.time;
m.tva = ((m.tic*m.q1)*0.5);
m.tvb = ((m.tic*m.q2)*0.5);
m.tvc = ((m.tic*m.q3)*0.5);
m.q1 = m.tva;
m.q2 = m.tvb;
m.q3 = m.tvc;
m.sz = 0.5;
m.len = m.q4;
m.t4 = m.len;
		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tm = time*.1;\n' + 't1 = t1*sin(tm*t4) + (1-t1)*sin(tm*t7);\n' + 't2 = t2*sin(tm*t5) + (1-t2)*sin(tm*t8);\n' + 't3 = t3*sin(tm*t6) + (1-t3)*sin(tm*1);\n' + 'tic = min(time - tin,1);\n' + 'tin = time;\n' + 'tva = (tic*q1*.5);\n' + 'tvb = (tic*q2*.5);\n' + 'tvc = (tic*q3*.5);\n' + 'q1 = tva;\n' + 'q2 = tvb;\n' + 'q3 = tvc;\n' + 'sz = .5;\n' + 'len = q4;\n' + 't4 = len;'),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 0.2,
			scaling : 0.891519,
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
m.q1 = 0;
m.tvb = 0;
m.t4 = 0;
m.q2 = 0;
m.tvc = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.t7 = 0;
m.t8 = 0;
m.sz = 0;
m.tic = 0;
m.len = 0;
m.tin = 0;
m.tm = 0;
m.t1 = 0;
m.t2 = 0;
m.tva = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tm = (m.time*0.1);
m.t1 = ((m.t1*Math.sin((m.tm*m.t4)))+((1-m.t1)*Math.sin((m.tm*m.t7))));
m.t2 = ((m.t2*Math.sin((m.tm*m.t5)))+((1-m.t2)*Math.sin((m.tm*m.t8))));
m.t3 = ((m.t3*Math.sin((m.tm*m.t6)))+((1-m.t3)*Math.sin((m.tm*1))));
m.tic = Math.min((m.time-m.tin), 1);
m.tin = m.time;
m.tva = ((m.tic*m.q1)*0.5);
m.tvb = ((m.tic*m.q2)*0.5);
m.tvc = ((m.tic*m.q3)*0.5);
m.q1 = m.tva;
m.q2 = m.tvb;
m.q3 = m.tvc;
m.sz = 0.5;
m.len = 1;
m.t4 = m.len;
		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tm = time*.1;\n' + 't1 = t1*sin(tm*t4) + (1-t1)*sin(tm*t7);\n' + 't2 = t2*sin(tm*t5) + (1-t2)*sin(tm*t8);\n' + 't3 = t3*sin(tm*t6) + (1-t3)*sin(tm*1);\n' + 'tic = min(time - tin,1);\n' + 'tin = time;\n' + 'tva = (tic*q1*.5);\n' + 'tvb = (tic*q2*.5);\n' + 'tvc = (tic*q3*.5);\n' + 'q1 = tva;\n' + 'q2 = tvb;\n' + 'q3 = tvc;\n' + 'sz = .5;\n' + 'len = 1;\n' + 't4 = len;'),
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
			enabled : 1.0,
			b : 0.9,
			tex_ang : 1.00531,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.93,
			tex_zoom : 1.531168,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.8,
			a2 : 0.3,
			r : 0.5,
			border_g : 1.0,
			rad : 0.026949,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 34.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.trel = 0;
m.q20 = 0;
m.q26 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.trel = (div(m.time,4)+m.q20);
m.x = Math.sin((m.trel*2));
m.y = Math.cos((m.trel*1.3));
m.a = (div(m.q26,4)+0.2);
m.a = 1;
m.a2 = 0.2;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trel = time/4+q20;\n' + 'x = sin(trel*2);\n' + 'y = cos(trel*1.3);\n' + 'a = q26/4+.2;\n' + 'a = 1;\n' + ' a2=.2;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.6999,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.538552,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 0.5,
			rad : 0.401076,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 34.0,
			border_r : 0.5,
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
			a : 0.9,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.1,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.609857,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.01,
			x : 0.503,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.5,
			},
		'init_eqs' : function(m) {
m.q31 = 0;
m.q21 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = div(rand(100),100);
m.y = div(rand(100),100);
m.ang = rand(6);
m.r = div(rand(4),3);
m.g = div(rand(4),3);
m.b = div(rand(4),3);
m.r2 = m.b;
m.g2 = m.g;
m.b2 = m.r;
m.a = Math.min(div(m.q21,2), 0.9);
m.rad = div(m.a,9);
m.a = Math.max(m.q31, 0.2);
m.a2 = (m.a*0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = rand(100)/100;\n' + 'y = rand(100)/100;\n' + 'ang = rand(6);\n' + 'r = rand(4)/3;\n' + 'g = rand(4)/3;\n' + 'b = rand(4)/3;\n' + 'r2 = b;\n' + 'g2 = g;\n' + 'b2 = r;\n' + 'a = min(q21/2 ,.9);\n' + 'rad = a/9 ;\n' + 'a = max(q31,.2);\n' + 'a2 = a*.5;'),

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
			tex_zoom : 0.499805,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.548217,
			x : 0.5,
			y : 1.0,
			ang : 0.0,
			sides : 63.0,
			border_r : 0.5,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 crisp_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = ((uv * texsize.xy) * 0.04);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = (cos((tmpvar_3.y * _qa.x)) * sin(-(tmpvar_3.y)));\n' + '  tmpvar_4.y = (sin(tmpvar_3.x) * cos((tmpvar_3.y * _qa.y)));\n' + '  uv_1 = (uv - ((tmpvar_4 * texsize.zw) * (24.0 * _qg.w)));\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, uv_1).xyz;\n' + '  crisp_2 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ((crisp_2 * 0.99) - 0.006);\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec2 xlat_mutabledz;\n' + 'highp vec3 xlat_mutableneu;\n' + 'highp vec3 xlat_mutableret1;\n' + 'highp vec2 xlat_mutableuv1;\n' + 'highp vec2 xlat_mutableuv3;\n' + 'shader_body {\n' + '   float ky_1;\n' + '   float zu_2;\n' + '   float k1_3;\n' + '   float inten_4;\n' + '   float dist_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.y = 0.0;\n' + '  tmpvar_6.x = texsize.z;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7.x = 0.0;\n' + '  tmpvar_7.y = texsize.w;\n' + '  xlat_mutableuv1 = (uv - 0.5);\n' + '  xlat_mutableuv1 = (xlat_mutableuv1 * aspect.xy);\n' + '  dist_5 = (1.0 - fract(_qh.x));\n' + '  inten_4 = ((dist_5 * (1.0 - \n' + '    (dist_5 * dist_5)\n' + '  )) * 4.0);\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8.y = 0.5;\n' + '  tmpvar_8.x = _qh.y;\n' + '  xlat_mutableuv3 = (((2.0 * xlat_mutableuv1) * dist_5) + tmpvar_8);\n' + '  xlat_mutableuv3 = (xlat_mutableuv3 * aspect.yx);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_main, xlat_mutableuv3);\n' + '  xlat_mutableneu = tmpvar_9.xyz;\n' + '   vec2 P_10;\n' + '  P_10 = (xlat_mutableuv3 + tmpvar_6);\n' + '   vec2 P_11;\n' + '  P_11 = (xlat_mutableuv3 - tmpvar_6);\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = dot ((texture2D (sampler_main, P_10).xyz - texture2D (sampler_main, P_11).xyz), vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.x = (inten_4 * tmpvar_12);\n' + '   vec2 P_13;\n' + '  P_13 = (xlat_mutableuv3 + tmpvar_7);\n' + '   vec2 P_14;\n' + '  P_14 = (xlat_mutableuv3 - tmpvar_7);\n' + '   float tmpvar_15;\n' + '  tmpvar_15 = dot ((texture2D (sampler_main, P_13).xyz - texture2D (sampler_main, P_14).xyz), vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.y = (inten_4 * tmpvar_15);\n' + '  xlat_mutableret1 = max (vec3(0.0, 0.0, 0.0), (xlat_mutableneu * inten_4));\n' + '  dist_5 = (1.0 - fract((0.3333333 + _qh.x)));\n' + '  inten_4 = ((dist_5 * (1.0 - \n' + '    (dist_5 * dist_5)\n' + '  )) * 4.0);\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.y = 0.5;\n' + '  tmpvar_16.x = _qh.y;\n' + '  xlat_mutableuv3 = (((2.0 * xlat_mutableuv1) * dist_5) + tmpvar_16);\n' + '  xlat_mutableuv3 = (xlat_mutableuv3 * aspect.yx);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_main, xlat_mutableuv3);\n' + '  xlat_mutableneu = tmpvar_17.xyz;\n' + '   vec2 P_18;\n' + '  P_18 = (xlat_mutableuv3 + tmpvar_6);\n' + '   vec2 P_19;\n' + '  P_19 = (xlat_mutableuv3 - tmpvar_6);\n' + '   float tmpvar_20;\n' + '  tmpvar_20 = dot ((texture2D (sampler_main, P_18).xyz - texture2D (sampler_main, P_19).xyz), vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.x = (xlat_mutabledz.x + (inten_4 * tmpvar_20));\n' + '   vec2 P_21;\n' + '  P_21 = (xlat_mutableuv3 + tmpvar_7);\n' + '   vec2 P_22;\n' + '  P_22 = (xlat_mutableuv3 - tmpvar_7);\n' + '   float tmpvar_23;\n' + '  tmpvar_23 = dot ((texture2D (sampler_main, P_21).xyz - texture2D (sampler_main, P_22).xyz), vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.y = (xlat_mutabledz.y + (inten_4 * tmpvar_23));\n' + '  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_4));\n' + '  dist_5 = (1.0 - fract((0.6666667 + _qh.x)));\n' + '  inten_4 = ((dist_5 * (1.0 - \n' + '    (dist_5 * dist_5)\n' + '  )) * 4.0);\n' + '   vec2 tmpvar_24;\n' + '  tmpvar_24.y = 0.5;\n' + '  tmpvar_24.x = _qh.y;\n' + '  xlat_mutableuv3 = (((2.0 * xlat_mutableuv1) * dist_5) + tmpvar_24);\n' + '  xlat_mutableuv3 = (xlat_mutableuv3 * aspect.yx);\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_main, xlat_mutableuv3);\n' + '  xlat_mutableneu = tmpvar_25.xyz;\n' + '   vec2 P_26;\n' + '  P_26 = (xlat_mutableuv3 + tmpvar_6);\n' + '   vec2 P_27;\n' + '  P_27 = (xlat_mutableuv3 - tmpvar_6);\n' + '   float tmpvar_28;\n' + '  tmpvar_28 = dot ((texture2D (sampler_main, P_26).xyz - texture2D (sampler_main, P_27).xyz), vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.x = (xlat_mutabledz.x + (inten_4 * tmpvar_28));\n' + '   vec2 P_29;\n' + '  P_29 = (xlat_mutableuv3 + tmpvar_7);\n' + '   vec2 P_30;\n' + '  P_30 = (xlat_mutableuv3 - tmpvar_7);\n' + '   float tmpvar_31;\n' + '  tmpvar_31 = dot ((texture2D (sampler_main, P_29).xyz - texture2D (sampler_main, P_30).xyz), vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.y = (xlat_mutabledz.y + (inten_4 * tmpvar_31));\n' + '  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_4));\n' + '  dist_5 = (1.0 - fract((1.0 + _qh.x)));\n' + '  inten_4 = ((dist_5 * (1.0 - \n' + '    (dist_5 * dist_5)\n' + '  )) * 4.0);\n' + '   vec2 tmpvar_32;\n' + '  tmpvar_32.y = 0.5;\n' + '  tmpvar_32.x = _qh.y;\n' + '  xlat_mutableuv3 = (((2.0 * xlat_mutableuv1) * dist_5) + tmpvar_32);\n' + '  xlat_mutableuv3 = (xlat_mutableuv3 * aspect.yx);\n' + '   vec4 tmpvar_33;\n' + '  tmpvar_33 = texture2D (sampler_main, xlat_mutableuv3);\n' + '  xlat_mutableneu = tmpvar_33.xyz;\n' + '   vec2 P_34;\n' + '  P_34 = (xlat_mutableuv3 + tmpvar_6);\n' + '   vec2 P_35;\n' + '  P_35 = (xlat_mutableuv3 - tmpvar_6);\n' + '   float tmpvar_36;\n' + '  tmpvar_36 = dot ((texture2D (sampler_main, P_34).xyz - texture2D (sampler_main, P_35).xyz), vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.x = (xlat_mutabledz.x + (inten_4 * tmpvar_36));\n' + '   vec2 P_37;\n' + '  P_37 = (xlat_mutableuv3 + tmpvar_7);\n' + '   vec2 P_38;\n' + '  P_38 = (xlat_mutableuv3 - tmpvar_7);\n' + '   float tmpvar_39;\n' + '  tmpvar_39 = dot ((texture2D (sampler_main, P_37).xyz - texture2D (sampler_main, P_38).xyz), vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.y = (xlat_mutabledz.y + (inten_4 * tmpvar_39));\n' + '  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_4));\n' + '  xlat_mutableuv1 = (xlat_mutableuv1 + (xlat_mutabledz / 2.0));\n' + '   vec2 tmpvar_40;\n' + '  tmpvar_40 = sin(((3.0 * xlat_mutableuv1) + (\n' + '    (time / 18.0)\n' + '   * vec2(1.0, 0.9))));\n' + '   vec3 tmpvar_41;\n' + '  tmpvar_41.y = 0.2;\n' + '  tmpvar_41.x = uv.y;\n' + '  tmpvar_41.z = (1.5 - uv.y);\n' + '  k1_3 = (0.5 * (rand_preset - 0.5)).x;\n' + '   vec2 tmpvar_42;\n' + '  tmpvar_42.y = 0.05;\n' + '  tmpvar_42.x = k1_3;\n' + '  xlat_mutableuv3 = ((150.0 * (xlat_mutableuv1 - tmpvar_42)) + xlat_mutabledz);\n' + '   float tmpvar_43;\n' + '  tmpvar_43 = (0.3 * dot (texture2D (sampler_noise_lq, uv), vec4(0.32, 0.49, 0.29, 0.0)));\n' + '  zu_2 = tmpvar_43;\n' + '  ky_1 = clamp (((-0.01 * xlat_mutableuv3.y) + (zu_2 * \n' + '    cos((12.0 * zu_2))\n' + '  )), 0.0, 1.0);\n' + '  k1_3 = (xlat_mutableuv3.x - (sign(xlat_mutableuv3.x) * 16.0));\n' + '  k1_3 = (k1_3 + ((2.0 * \n' + '    (k1_3 - (6.0 * sign(k1_3)))\n' + '  ) * ky_1));\n' + '  ky_1 = clamp ((ky_1 - 0.08), 0.0, 1.0);\n' + '  k1_3 = (k1_3 + ((2.0 * \n' + '    (k1_3 - (12.0 * sign(k1_3)))\n' + '  ) * ky_1));\n' + '  ky_1 = clamp ((ky_1 - 0.08), 0.0, 1.0);\n' + '  k1_3 = (k1_3 + ((2.0 * \n' + '    (k1_3 - (18.0 * sign(k1_3)))\n' + '  ) * ky_1));\n' + '  ky_1 = clamp ((ky_1 - 0.08), 0.0, 1.0);\n' + '  k1_3 = (k1_3 + ((2.0 * \n' + '    (k1_3 - (24.0 * sign(k1_3)))\n' + '  ) * ky_1));\n' + '  ky_1 = clamp ((ky_1 - 0.08), 0.0, 1.0);\n' + '  k1_3 = (k1_3 + ((2.0 * \n' + '    (k1_3 - (30.0 * sign(k1_3)))\n' + '  ) * ky_1));\n' + '  ky_1 = clamp ((ky_1 - 0.08), 0.0, 1.0);\n' + '   float tmpvar_44;\n' + '  tmpvar_44 = clamp (k1_3, -1.6, 1.6);\n' + '  k1_3 = tmpvar_44;\n' + '   vec4 tmpvar_45;\n' + '  tmpvar_45.w = 1.0;\n' + '  tmpvar_45.xyz = ((0.1 + (\n' + '    (0.4 * rand_preset.x)\n' + '   * xlat_mutableret1)) + clamp ((\n' + '    ((vec3(((\n' + '      clamp ((4.0 * (0.25 - xlat_mutableuv1.y)), 0.0, 1.0)\n' + '     * 0.3) / sqrt(\n' + '      dot (tmpvar_40, tmpvar_40)\n' + '    ))) * (0.5 + (\n' + '      (0.5 * rand_preset)\n' + '    .xyz * vec3(1.0, 1.0, 0.3)))) * (0.5 + tmpvar_41))\n' + '   - vec3(\n' + '    ((2.0 * abs(cos(tmpvar_44))) * (uv.y * uv.y))\n' + '  )), 0.0, 1.0));\n' + '  vec4 ret4 = tmpvar_45;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('p1 = rand(16);\n' + 'p2 = p1;'),
	'frame_eqs_str' : ('dec_med = pow (0.96, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .4+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %8;\n' + 'index2 = (index2 + is_beat*bnot(index))%4;\n' + 'index3 = (index3 + is_beat*bnot(index)*bnot(index2))%3;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = bass + mid + treb;\n' + 'k1 =  is_beat*equal(index,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'rott = p2 * 3.14159265359/4;\n' + 'q27 = 8-index;\n' + 'q28 = sin(time/7);\n' + 'q29 = index4;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'mv_a = .5 * q1;\n' + 'movez = movez + .01 * 30/fps ;\n' + 'q29 = movez;\n' + 'movex = movex + .003 * 30/fps *q2;\n' + 'q30 = movex;\n' + 'q31 = sqr(sin(time/17));\n' + 'q32 = sqr(cos(time/17));\n' + 'zoom = 1.0;\n' + 'rot = .0;\n' + 'dx = .0;\n' + 'warp = .2;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
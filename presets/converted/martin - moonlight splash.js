define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.980001,
		wave_g : 0.59,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.0067,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.740853,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 6.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.8,
		ib_r : 0.25,
		mv_b : 0.4999,
		echo_zoom : 0.999998,
		ob_size : 0.0,
		b1ed : 0.0,
		wave_smoothing : 0.81,
		warpanimspeed : 1.4595,
		wave_dots : 0.0,
		mv_g : 0.4999,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.32,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 0.4999,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.37,
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
m.p3 = 0;
m.q4 = 0;
m.q5 = 0;
m.k1 = 0;
m.movex = 0;
m.movez = 0;
m.is_beat = 0;
m.q30 = 0;
m.dec_med = 0;
m.q20 = 0;
m.q21 = 0;
m.q22 = 0;
m.index = 0;
m.q23 = 0;
m.avg = 0;
m.vol = 0;
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

		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.9, div(30,m.fps));
m.dec_slow = pow(0.94, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.5+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),8);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),2);
m.index3 = mod((m.index3+((m.is_beat*bnot(m.index))*bnot(m.index2))),3);
m.monitor = m.index4;
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.q24 = m.is_beat;
m.vol = ((m.bass+m.mid)+m.treb);
m.q26 = div(Math.max(m.peak, 10),20);
m.k1 = (m.is_beat*equal(m.index, 0));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.p3 = ((m.dec_slow*m.p3)+((1-m.dec_slow)*m.p2));
m.rott = div((m.p3*3.14159265359),4);
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.q27 = (8-m.index);
m.q28 = m.index2;
m.movez = (m.movez+div((0.02*30),m.fps));
m.q29 = (m.movez*1);
m.movex = (m.movex+(div((0.004*30),m.fps)*m.q1));
m.q30 = (m.movex*1);
m.q5 = m.rott;
m.zoom = 1.0;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (div(m.q22,4)-1);
m.rot = 0;
m.zoom = (1+(0.02*(1-m.rad)));
m.dy = 0.001;
m.warp = (0.4*(1-m.rad));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.6,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.891519,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.k1 = 0;
m.yi = 0;
m.xi = 0;
m.t2 = 0;

			m.rkeys = ['yi','xi'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t2 = (m.t2+m.bass_att);
		return m;
	},
		'point_eqs' : function(m) {
m.k1 = mod((m.sample*100),2);
m.xi = ((m.value1*m.k1)+(m.xi*(1-m.k1)));
m.yi = ((m.value2*(1-m.k1))+(m.yi*m.k1));
m.x = (0.5+(5*m.xi));
m.y = (0.5+(5*m.yi));
m.a = ((m.bass_att+m.mid_att)+m.treb_att);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t2 = t2 + bass_att;'),
		'point_eqs_str' : ('k1 = (sample*100)%2;\n' + 'xi = value1*k1 + xi*(1-k1);\n' + 'yi = value2*(1-k1) + yi*k1;\n' + 'x = .5 + 5*xi;\n' + 'y = .5 + 5*yi;\n' + 'a = bass_att + mid_att + treb_att;'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 5.904606,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 20.0,
			},
		'init_eqs' : function(m) {
m.val = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = m.sample;
m.val = m.value1;
m.y = ((m.val*(0.25-((m.sample-0.5)*(m.sample-0.5))))+0.5);
m.r = 0.6;
m.g = 1;
m.b = 1;
m.a = 1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = sample ;\n' + 'val = value1;\n' + 'y = val * (.25-(sample-.5)*(sample-.5)) + .5;\n' + 'r = .6;\n' + ' g = 1;\n' + ' b = 1;\n' + 'a=1;'),

		},
		{
		'baseVals' : {
			a : 0.32,
			enabled : 0.0,
			b : 0.0,
			g : 1.0,
			scaling : 0.099868,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.4,
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
		'point_eqs' : function(m) {
m.x = m.sample;
m.r = 0.0;
m.b = 0.0;
m.g = 1;
m.a = 0.6;
m.y = (0.5+m.value1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = sample;\n' + 'r = .0;\n' + ' b = .0;\n' + ' g = 1;\n' + ' a = .6;\n' + 'y = .5 + value1;'),

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
m.q1 = 0;
m.zang = 0;
m.q2 = 0;
m.yang = 0;
m.amod = 0;
m.q3 = 0;
m.xang = 0;
m.mod = 0;
m.q4 = 0;
m.pib = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.med = 0;
m.fov = 0;
m.mz = 0;
m.tic = 0;
m.sa = 0;
m.ra = 0;
m.rb = 0;
m.tin = 0;
m.vr = 0;
m.sp = 0;
m.sam = 0;

			m.rkeys = ['tin'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ra = 0.8;
m.rb = 0.5;
m.pib = 6.28318530718;
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = ifcond(equal(m.sample, 0), m.time, m.tin);
m.mod = (1.5+(0.5*Math.sin((m.time*0.15))));
m.med = (1.5+(0.5*Math.sin((m.time*0.134))));
m.med = 5;
m.amod = 3;
m.vr = (rand(10001)*0.0001);
m.rb = (m.rb+((rand(10001)*0.0001)*0.1));
m.a = m.vr;
m.sa = ((m.vr*m.pib)*0.5);
m.sp = ((m.sa*m.mod)+(m.q1*1.3));
m.sam = ((m.sa*m.med)-(m.q1*0.219));
m.ox = (m.ra*Math.sin((m.sam*m.pib)));
m.oy = (m.ra*Math.cos((m.sam*m.pib)));
m.ox = (m.ox+((m.rb*-Math.cos(m.sp))*Math.sin((m.sam*m.pib))));
m.oz = (m.rb*-Math.sin(m.sp));
m.oy = (m.oy+((m.rb*-Math.cos(m.sp))*Math.cos((m.sam*m.pib))));
m.xang = (m.time*0.132);
m.xang = m.q2;
m.yang = (m.time*0.153);
m.yang = m.q3;
m.zang = (m.time*0.110);
m.zang = m.q4;
m.fov = (0.6+(0.2*Math.sin(m.time)));
m.fov = 0.5;
m.mx = ((m.ox*Math.cos(m.zang))-(m.oy*Math.sin(m.zang)));
m.my = ((m.ox*Math.sin(m.zang))+(m.oy*Math.cos(m.zang)));
m.ox = m.mx;
m.oy = m.my;
m.mx = ((m.ox*Math.cos(m.yang))+(m.oz*Math.sin(m.yang)));
m.mz = ((-m.ox*Math.sin(m.yang))+(m.oz*Math.cos(m.yang)));
m.ox = m.mx;
m.oz = m.mz;
m.my = ((m.oy*Math.cos(m.xang))-(m.oz*Math.sin(m.xang)));
m.mz = ((m.oy*Math.sin(m.xang))+(m.oz*Math.cos(m.xang)));
m.oy = m.my;
m.oz = m.mz;
m.oz = (m.oz-2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ra = .8;\n' + 'rb = .5;\n' + 'pib = 6.28318530718;\n' + 'tic = min(time-tin,.1);\n' + 'tin = if(equal(sample,0),time,tin);\n' + 'mod = 1.5 + .5*sin(time*.15);\n' + 'med = 1.5 + .5*sin(time*.134);\n' + 'med = 5;\n' + 'amod = 3;\n' + 'vr = rand(10001)*.0001;\n' + 'rb = rb + rand(10001)*.0001*.1;\n' + 'a = vr;\n' + 'sa = vr*pib*.5;\n' + 'sp = sa*mod + q1*1.3;\n' + 'sam = sa*med - q1*.219;\n' + 'ox = ra*sin(sam*pib);\n' + 'oy = ra*cos(sam*pib);\n' + 'ox = ox + rb*-cos(sp)*sin(sam*pib);\n' + 'oz = rb*-sin(sp);\n' + 'oy = oy + rb*-cos(sp)*cos(sam*pib);\n' + 'xang = time*.132;\n' + 'xang = q2;\n' + 'yang = time*.153;\n' + 'yang = q3;\n' + 'zang = time*.110;\n' + 'zang = q4;\n' + 'fov = 0.6 + 0.2*sin(time);\n' + 'fov = .5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = oz - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.83,
			a : 0.03,
			enabled : 0.0,
			b : 0.9,
			tex_ang : 1.00531,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.93,
			tex_zoom : 1.531168,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.8,
			a2 : 0.06,
			r : 0.5,
			border_g : 1.0,
			rad : 0.265742,
			x : 0.5,
			y : 0.5,
			ang : 2.32478,
			sides : 94.0,
			border_r : 1.0,
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
			r2 : 0.7,
			a : 0.01,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 1.4451,
			thickoutline : 0.0,
			g : 0.4,
			textured : 0.0,
			g2 : 0.4,
			tex_zoom : 1.493308,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.7,
			border_g : 0.5,
			rad : 1.264578,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
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
			a : 0.3,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
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
			rad : 0.15648,
			x : 0.503,
			y : 0.5,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 crisp_2;\n' + '   vec2 zz_3;\n' + '   mat2 tmpvar_4;\n' + '  tmpvar_4[0] = _qa.xy;\n' + '  tmpvar_4[1] = _qa.zw;\n' + '  zz_3 = (((\n' + '    (uv - vec2(0.5, 0.5))\n' + '   * texsize.xy) * 0.01) * tmpvar_4);\n' + '  zz_3 = zz_3.yx;\n' + '  uv_1 = (uv + ((\n' + '    cos(zz_3)\n' + '   * texsize.zw) * 12.0));\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, uv_1).xyz;\n' + '  crisp_2 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = (crisp_2 - 0.01);\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('uniform highp vec3 neu;\n' + 'uniform highp vec2 uv3;\n' + 'uniform highp vec2 uv4;\n' + 'highp vec2 xlat_mutabledz;\n' + 'highp vec3 xlat_mutableneu;\n' + 'highp vec3 xlat_mutableret1;\n' + 'highp vec2 xlat_mutableuv3;\n' + 'highp vec2 xlat_mutableuv4;\n' + 'shader_body {\n' + '  xlat_mutableneu = neu;\n' + '  xlat_mutableuv3 = uv3;\n' + '  xlat_mutableuv4 = uv4;\n' + '   vec2 uv_1;\n' + '   vec3 clouds_2;\n' + '   float inten_4;\n' + '   float dist_5;\n' + '   vec2 ver_6;\n' + '   vec2 hor_7;\n' + '   vec3 ret_8;\n' + '  uv_1 = (uv - 0.5);\n' + '  xlat_mutabledz = vec2(0.0, 0.0);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9.y = 0.0;\n' + '  tmpvar_9.x = texsize.z;\n' + '  hor_7 = (tmpvar_9 / 2.0);\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10.x = 0.0;\n' + '  tmpvar_10.y = texsize.w;\n' + '  ver_6 = (tmpvar_10 / 2.0);\n' + '  dist_5 = 1.0;\n' + '  inten_4 = 1.0;\n' + '  xlat_mutableret1 = vec3(0.0, 0.0, 0.0);\n' + '  for ( float n_3 = 0.0; n_3 <= 4.0; n_3 += 1.0) {\n' + '    dist_5 = (1.0 - fract((\n' + '      (0.25 * n_3)\n' + '     + \n' + '      (time / 2.0)\n' + '    )));\n' + '    inten_4 = ((sqrt(dist_5) * (1.0 - \n' + '      (dist_5 * dist_5)\n' + '    )) * 2.0);\n' + '     vec2 tmpvar_11;\n' + '    tmpvar_11.y = 0.0;\n' + '    tmpvar_11.x = _qh.y;\n' + '    xlat_mutableuv3 = (((\n' + '      (2.0 * uv_1)\n' + '     * dist_5) + 0.35) + tmpvar_11);\n' + '     vec4 tmpvar_12;\n' + '    tmpvar_12 = texture2D (sampler_main, xlat_mutableuv3);\n' + '    xlat_mutableneu = tmpvar_12.xyz;\n' + '     vec4 tmpvar_13;\n' + '     vec2 P_14;\n' + '    P_14 = (xlat_mutableuv3 + hor_7);\n' + '    tmpvar_13 = texture2D (sampler_main, P_14);\n' + '     vec4 tmpvar_15;\n' + '     vec2 P_16;\n' + '    P_16 = (xlat_mutableuv3 - hor_7);\n' + '    tmpvar_15 = texture2D (sampler_main, P_16);\n' + '    xlat_mutabledz.x = (xlat_mutabledz.x + (inten_4 * (tmpvar_13.xyz - tmpvar_15.xyz)).x);\n' + '     vec4 tmpvar_17;\n' + '     vec2 P_18;\n' + '    P_18 = (xlat_mutableuv3 + ver_6);\n' + '    tmpvar_17 = texture2D (sampler_main, P_18);\n' + '     vec4 tmpvar_19;\n' + '     vec2 P_20;\n' + '    P_20 = (xlat_mutableuv3 - ver_6);\n' + '    tmpvar_19 = texture2D (sampler_main, P_20);\n' + '    xlat_mutabledz.y = (xlat_mutabledz.y + (inten_4 * (tmpvar_17.xyz - tmpvar_19.xyz)).x);\n' + '    xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_4));\n' + '  };\n' + '  uv_1 = (uv_1 + (xlat_mutabledz / 2.0));\n' + '  xlat_mutableuv4 = (uv_1 - vec2(0.2, -0.1));\n' + '   float tmpvar_21;\n' + '  tmpvar_21 = (0.5 * clamp ((1.0/(\n' + '    (abs(uv_1.y) + 0.1)\n' + '  )), 0.0, 12.0));\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22.x = (uv_1.x * tmpvar_21);\n' + '  tmpvar_22.y = tmpvar_21;\n' + '   vec2 P_23;\n' + '  P_23 = (tmpvar_22 + (0.04 * time));\n' + '   vec3 tmpvar_24;\n' + '  tmpvar_24 = vec3(dot (texture2D (sampler_noise_hq, P_23), vec4(0.32, 0.49, 0.29, 0.0)));\n' + '  clouds_2 = tmpvar_24;\n' + '  clouds_2 = (clouds_2 * ((\n' + '    clamp ((1.0 - (12.0 * uv_1.y)), 0.0, 1.0)\n' + '   * 0.1) / (0.03 + \n' + '    sqrt(dot (xlat_mutableuv4, xlat_mutableuv4))\n' + '  )));\n' + '   vec3 tmpvar_25;\n' + '  tmpvar_25.xy = vec2(0.0, 0.0);\n' + '  tmpvar_25.z = clamp ((1.0 - (3.0 * uv_1.y)), 0.0, 1.0);\n' + '  ret_8 = (vec3(0.0, 0.03, 0.03) + (0.1 * tmpvar_25));\n' + '  ret_8 = (ret_8 + clouds_2);\n' + '  ret_8 = (ret_8 + ((0.1 * xlat_mutableret1) + (\n' + '    (0.2 * _qf.x)\n' + '   * xlat_mutableret1)));\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26.w = 1.0;\n' + '  tmpvar_26.xyz = ret_8;\n' + '  vec4 ret4 = tmpvar_26;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('dec_med = pow (0.9, 30/fps);\n' + 'dec_slow = pow (0.94, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %8;\n' + 'index2 = (index2 + is_beat*bnot(index))%2;\n' + 'index3 = (index3 + is_beat*bnot(index)*bnot(index2))%3;\n' + 'monitor = index4;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'vol = bass + mid + treb;\n' + 'q26 = max (peak,10)/20;\n' + 'k1 =  is_beat*equal(index,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'p3 = dec_slow * p3+ (1-dec_slow)*p2;\n' + 'rott = p3 * 3.14159265359/4;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'q27 = 8-index;\n' + 'q28 = index2;\n' + 'movez = movez + .02*30/fps;\n' + 'q29 = movez*1;\n' + 'movex = movex + .004*30/fps*q1;\n' + 'q30 = movex*1;\n' + 'q5 = rott;\n' + 'zoom = 1.0;'),
	'pixel_eqs_str' : ('rot = q22/4-1;\n' + 'rot = 0;\n' + 'zoom = 1 + .02 * (1-rad);\n' + 'dy = .001;\n' + 'warp = .4 * (1-rad);'),
};

return pmap;
});
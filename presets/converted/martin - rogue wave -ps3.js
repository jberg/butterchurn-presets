define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.980001,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.0067,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 2.232543,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.9999,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 1.0,
		wave_brighten : 1.0,
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
		ob_size : 0.01,
		b1ed : 0.7,
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
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 1.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.32,
		wave_mystery : -0.12,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.25,
		mv_r : 0.4999,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.47,
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
m.is_beat = 0;
m.dec_med = 0;
m.q20 = 0;
m.q21 = 0;
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

		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.9, div(30,m.fps));
m.dec_slow = pow(0.99, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.5+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),8);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),5);
m.index3 = mod((m.index3+((m.is_beat*bnot(m.index))*bnot(m.index2))),3);
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.q24 = m.is_beat;
m.q26 = ((m.bass+m.mid)+m.treb);
m.k1 = (m.is_beat*equal(m.index, 0));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_slow*m.p2)+((1-m.dec_slow)*m.p1));
m.rott = div((m.p2*3.14159265359),2);
m.q27 = (8-m.index);
m.q28 = m.index3;
m.q29 = m.index4;
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.warp = (0.3*Math.sin((div((m.index+m.index2),8)*6.28)));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = ((-0.04*m.q2)*(1-m.rad));
m.dx = 0.0;
m.zoom = (1.002+(0.04*m.rad));
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
			additive : 0.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.val = 0;
m.k1 = 0;
m.t2 = 0;
m.t1 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t2 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t3 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t4 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t5 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t6 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t7 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t8 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t2 = (m.t2+m.bass_att);
		return m;
	},
		'point_eqs' : function(m) {
m.x = (0.5+(m.sample*(mod((100*m.sample),2)-0.5)));
m.k1 = mod((100*m.sample),4);
m.x = m.sample;
m.val = m.value1;
m.y = ((m.val*(0.25-((m.sample-0.5)*(m.sample-0.5))))+0.45);
m.k1 = mod((10*m.bass_att),4);
m.r = 0.8;
m.g = 0.8;
m.b = 1;
m.a = bnot(m.k1);
m.a = 0.1;
		return m;
	},
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
		'frame_eqs_str' : ('t2 = t2 + bass_att;'),
		'point_eqs_str' : ('x = .5 + sample*((100*sample)%2-.5);\n' + 'k1 = (100*sample)%4;\n' + 'x = sample ;\n' + 'val = value1;\n' + 'y = val * (.25-(sample-.5)*(sample-.5)) + .45;\n' + 'k1 = (10*bass_att)%4;\n' + 'r = .8;\n' + ' g = .8;\n' + ' b = 1;\n' + 'a = bnot(k1);\n' + ' a = .1;'),

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
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
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
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.891519,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
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
			r2 : 0.0,
			a : 0.08,
			enabled : 1.0,
			b : 0.79,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.7,
			textured : 0.0,
			g2 : 0.5,
			tex_zoom : 0.33105,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.69,
			a2 : 0.03,
			r : 0.0,
			border_g : 1.0,
			rad : 0.981146,
			x : 0.5,
			y : 0.06,
			ang : 0.753982,
			sides : 4.0,
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
			r2 : 1.0,
			a : 0.97,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.02315,
			additive : 0.0,
			border_a : 0.81,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.1,
			r : 1.0,
			border_g : 0.5,
			rad : 0.476928,
			x : 0.5,
			y : 0.5,
			ang : 1.130974,
			sides : 100.0,
			border_r : 0.5,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = m.time;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time;'),

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
			rad : 0.273185,
			x : 0.123,
			y : 0.0,
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
	'warp' : ('shader_body {\n' + '   vec3 noise_1;\n' + '   vec3 crisp_2;\n' + '   vec2 dz_3;\n' + '   float dy_4;\n' + '   float dx_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv + vec2(0.002, 0.0));\n' + '   vec2 P_7;\n' + '  P_7 = (uv - vec2(0.002, 0.0));\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = dot ((texture2D (sampler_main, P_6) - texture2D (sampler_main, P_7)), vec4(0.32, 0.49, 0.29, 0.0));\n' + '  dx_5 = tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + vec2(0.0, 0.002));\n' + '   vec2 P_10;\n' + '  P_10 = (uv - vec2(0.0, 0.002));\n' + '   float tmpvar_11;\n' + '  tmpvar_11 = dot ((texture2D (sampler_main, P_9) - texture2D (sampler_main, P_10)), vec4(0.32, 0.49, 0.29, 0.0));\n' + '  dy_4 = tmpvar_11;\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12.x = dx_5;\n' + '  tmpvar_12.y = dy_4;\n' + '  dz_3 = (sqrt(tmpvar_12) / 8.0);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_blur1, uv);\n' + '   vec2 P_14;\n' + '  P_14 = ((uv - (dz_3 * 0.01)) + ((\n' + '    ((tmpvar_13.xyz * scale1) + bias1)\n' + '   * 0.01) * _qf.y).xy);\n' + '   vec3 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_main, P_14).xyz;\n' + '  crisp_2 = tmpvar_15;\n' + '   vec3 tmpvar_16;\n' + '  tmpvar_16 = vec3((dot (texture2D (sampler_noise_lq, uv), vec4(0.32, 0.49, 0.29, 0.0)) - 0.2));\n' + '  noise_1 = tmpvar_16;\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17.w = 1.0;\n' + '  tmpvar_17.xyz = ((crisp_2 - (\n' + '    sqrt(dot (dz_3, dz_3))\n' + '   * 0.5)) + ((0.02 * noise_1) * (1.0 - rad)));\n' + '  vec4 ret4 = tmpvar_17;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec3 xlat_mutablenoise;\n' + 'highp vec3 xlat_mutableret1;\n' + 'highp vec2 xlat_mutablers;\n' + 'highp vec2 xlat_mutablers0;\n' + 'highp vec2 xlat_mutableuv3;\n' + 'shader_body {\n' + '   vec2 uv_1;\n' + '  uv_1.x = uv.x;\n' + '   float dy_2;\n' + '   float dx_3;\n' + '   float z_4;\n' + '  uv_1.y = (uv.y - 0.1);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = ((uv_1 - 0.5) * aspect.xy);\n' + '  z_4 = (0.3 / tmpvar_5.y);\n' + '  xlat_mutablers0.x = (tmpvar_5.x * z_4);\n' + '  xlat_mutablers0.y = z_4;\n' + '  xlat_mutablers.x = (xlat_mutablers0.x + (time / 2.0));\n' + '  xlat_mutablers.y = (z_4 + time);\n' + '   vec2 P_6;\n' + '  P_6 = (xlat_mutablers / 2.0);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = vec3(dot (texture2D (sampler_noise_hq, P_6), vec4(0.32, 0.49, 0.29, 0.0)));\n' + '  xlat_mutablenoise = tmpvar_7;\n' + '  xlat_mutablenoise = (xlat_mutablenoise - 0.55);\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = clamp ((12.0 * tmpvar_5.y), 0.0, 1.0);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = fract(((tmpvar_5 + 0.5) - (\n' + '    (xlat_mutablenoise * 0.1)\n' + '   * tmpvar_8).xy));\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10.y = 0.0;\n' + '  tmpvar_10.x = texsize.z;\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = 0.0;\n' + '  tmpvar_11.y = texsize.w;\n' + '   vec2 P_12;\n' + '  P_12 = (tmpvar_9 + tmpvar_10);\n' + '   vec2 P_13;\n' + '  P_13 = (tmpvar_9 - tmpvar_10);\n' + '   float tmpvar_14;\n' + '  tmpvar_14 = dot ((texture2D (sampler_main, P_12).xyz - texture2D (sampler_main, P_13).xyz), vec3(0.32, 0.49, 0.29));\n' + '  dx_3 = tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (tmpvar_9 + tmpvar_11);\n' + '   vec2 P_16;\n' + '  P_16 = (tmpvar_9 - tmpvar_11);\n' + '   float tmpvar_17;\n' + '  tmpvar_17 = dot ((texture2D (sampler_main, P_15).xyz - texture2D (sampler_main, P_16).xyz), vec3(0.32, 0.49, 0.29));\n' + '  dy_2 = tmpvar_17;\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18.x = dx_3;\n' + '  tmpvar_18.y = dy_2;\n' + '  xlat_mutableuv3 = (tmpvar_9 + (tmpvar_18 * (1.0 - tmpvar_8)));\n' + '   vec2 x_19;\n' + '  x_19 = ((tmpvar_5 + 0.45) + (tmpvar_18 * 16.0));\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = fract(xlat_mutableuv3);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_main, tmpvar_20);\n' + '  xlat_mutableret1 = tmpvar_21.xyz;\n' + '  xlat_mutableret1 = (xlat_mutableret1 * (1.0 - (tmpvar_8 / 2.0)));\n' + '   float tmpvar_22;\n' + '  tmpvar_22 = clamp ((1.0 - dot (\n' + '    (xlat_mutableret1 * 4.0)\n' + '  , vec3(0.32, 0.49, 0.29))), 0.0, 1.0);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23.w = 1.0;\n' + '  tmpvar_23.xyz = (max ((xlat_mutableret1 + \n' + '    ((vec3((0.02 / sqrt(\n' + '      dot (x_19, x_19)\n' + '    ))) * (1.0 - tmpvar_8)) * 2.0)\n' + '  ), vec3((\n' + '    (clamp ((1.0/((float(mod (\n' + '      ((uv.x * 3234224.0) * uv_1.y)\n' + '    , 22345.0))))), 0.0, 1.0) * (1.0 - tmpvar_8))\n' + '   * tmpvar_22))) + clamp ((\n' + '    (_qf.y * clamp (((\n' + '      (0.01 * abs((xlat_mutableuv3.x - 0.5)))\n' + '     / \n' + '      abs((xlat_mutableuv3.y - 0.55))\n' + '    ) - (tmpvar_18 * 4.0)), 0.0, 1.0).x)\n' + '   * tmpvar_22), 0.0, 1.0));\n' + '  vec4 ret4 = tmpvar_23;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('dec_med = pow (0.9, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %8;\n' + 'index2 = (index2 + is_beat*bnot(index))%5;\n' + 'index3 = (index3 + is_beat*bnot(index)*bnot(index2))%3;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = bass + mid + treb;\n' + 'k1 =  is_beat*equal(index,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_slow * p2+ (1-dec_slow)*p1;\n' + 'rott = p2 * 3.14159265359/2;\n' + 'q27 = 8-index;\n' + 'q28 = index3;\n' + 'q29 = index4;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'warp = .3 * sin((index+index2)/8*6.28);'),
	'pixel_eqs_str' : ('rot = -.04*q2*(1-rad);\n' + 'dx = .0;\n' + 'zoom = 1.002+.04*rad ;'),
};

return pmap;
});
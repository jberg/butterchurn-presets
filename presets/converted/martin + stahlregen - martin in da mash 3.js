define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.26,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 2.007,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 2.103,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.9999,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.005,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.53,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 0.5,
		echo_zoom : 1.007,
		ob_size : 0.015,
		b1ed : 0.25,
		wave_smoothing : 0.54,
		warpanimspeed : 1.459,
		wave_dots : 0.0,
		mv_g : 0.5,
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
		ob_b : 0.2,
		mv_l : 1.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.4,
		wave_mystery : 0.38,
		decay : 0.97,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.5,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.81,
		b1n : 0.0,
		darken : 0.0,
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
m.q6 = 0;
m.trel = 0;
m.k1 = 0;
m.q7 = 0;
m.movz = 0;
m.speed = 0;
m.q8 = 0;
m.q9 = 0;
m.is_beat = 0;
m.q30 = 0;
m.dec_med = 0;
m.q20 = 0;
m.q21 = 0;
m.q22 = 0;
m.index = 0;
m.q23 = 0;
m.avg = 0;
m.q24 = 0;
m.pos = 0;
m.q15 = 0;
m.q26 = 0;
m.q16 = 0;
m.q27 = 0;
m.mox = 0;
m.beat = 0;
m.q28 = 0;
m.moy = 0;
m.trig = 0;
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
m.is_beat = (above(m.beat, (m.avg+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),4);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),4);
m.monitor = m.index2;
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.q24 = m.is_beat;
m.q26 = div(((m.bass+m.mid)+m.treb),16);
m.k1 = ((m.is_beat*bnot(m.index))*bnot(m.index2));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.p3 = ((m.dec_med*m.p3)+((1-m.dec_med)*m.p2));
m.rott = div((m.p3*3.1416),4);
m.pos = (m.pos+div(m.q20,140));
m.q28 = m.pos;
m.q27 = (m.index+1);
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.trel = div(m.time,10);
m.q5 = Math.cos(m.trel);
m.q6 = Math.sin(m.trel);
m.q7 = -m.q6;
m.q8 = m.q5;
m.trig = (m.q24*mod(m.index,4));
m.mox = ((bnot(m.trig)*m.mox)+(m.trig*(div(rand(100),100)-0.5)));
m.moy = ((bnot(m.trig)*m.moy)+(m.trig*(div(rand(100),100)-0.5)));
m.q15 = div(m.mox,2);
m.q16 = div(m.moy,2);
m.speed = ((m.speed*bnot(m.trig))+(m.trig*m.q26));
m.movz = (m.movz+div(m.speed,m.fps));
m.q9 = m.movz;
m.q30 = ((1.2+Math.sin(div(m.time,7)))*3);
m.zoom = 1;
m.rot = -0.00;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.89152,
			samples : 442.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q22 = 0;
m.q24 = 0;
m.q27 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (0.4+(m.sample*0.2));
m.y = (0.5+((m.value2*0.01)*m.q22));
m.a = ((0.5*m.q24)*mod((m.q27+1),2));
m.r = 0.2;
m.b = 1;
m.g = 0.6;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = .4+sample*.2 ;\n' + 'y = .5+ value2*.01*q22;\n' + 'a = .5*q24*((q27+1)%2);\n' + 'r = 0.2;\n' + 'b=1;\n' + ' g =.6;'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.89152,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q22 = 0;
m.q24 = 0;
m.q27 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.y = (0.4+(m.sample*0.2));
m.x = (0.5+((m.value2*0.01)*m.q22));
m.a = ((0.6*m.q24)*mod(m.q27,2));
m.r = 0.2;
m.b = 1;
m.g = 0.6;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('y = .4+sample*.2 ;\n' + 'x = .5+ value2*.01*q22;\n' + 'a = .6*q24*((q27)%2);\n' + 'r = 0.2;\n' + 'b=1;\n' + ' g =.6;'),

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
			r2 : 1.0,
			a : 0.7,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 3.76991,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 5.27784,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.15416,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 18.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = (3+(2*m.q1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang = 3+2*q1;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.9,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.8315,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.06892,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 0.5,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q22 = 0;
m.q24 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.a = div(m.q24,2);
m.a2 = 0;
m.r = div(rand(10),10);
m.g = div(rand(10),10);
m.b = div(rand(10),10);
m.rad = (0.06*m.q22);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a = q24/2;\n' + ' a2 = 0;\n' + 'r = rand(10)/10;\n' + 'g = rand(10)/10;\n' + 'b = rand(10)/10;\n' + 'rad = .06*q22;'),

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
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.49981,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.27319,
			x : 0.123,
			y : 0.0,
			ang : 0.0,
			sides : 63.0,
			border_r : 0.5,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.1*Math.sin((m.time*73))));
m.y = (0.5+(0.1*Math.sin((m.time*23))));
m.r = 0;
m.g = 0;
m.b = 0;
m.r2 = 1;
m.g2 = 1;
m.b2 = 1;
m.rad = div(m.mid_att,100);
m.a = 0.7;
m.a2 = m.a;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = .5 + .1* sin (time*73);\n' + 'y = .5 + .1* sin (time*23);\n' + 'r = 0;\n' + ' g = 0;\n' + ' b = 0;\n' + 'r2 = 1;\n' + ' g2 = 1;\n' + ' b2 = 1;\n' + 'rad = mid_att/100;\n' + 'a = .7;\n' + 'a2 = a;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.7,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 1.00531,
			thickoutline : 0.0,
			g : 0.4,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.49981,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.19869,
			x : 0.5,
			y : 0.51,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.5,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.05+div(rand(900),1000));
m.y = (0.05+div(rand(900),1000));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.05 + rand(900)/1000;\n' + 'y = 0.05 + rand(900)/1000;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 noiseVal_2;\n' + '   vec2 P_3;\n' + '  P_3 = (((\n' + '    (texsize.xy * texsize_noise_lq.zw)\n' + '  .x * uv) * 0.02) + (0.1 * rand_frame).xy);\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = vec3(dot (texture2D (sampler_noise_lq, P_3), vec4(0.32, 0.49, 0.29, 0.0)));\n' + '  noiseVal_2 = tmpvar_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = ((uv * texsize.xy) * 0.08);\n' + '  uv_1 = (uv - ((\n' + '    (sin(tmpvar_5) / cos(tmpvar_5))\n' + '   * texsize.zw) * 3.0));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv_1);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (tmpvar_6.xyz + (noiseVal_2 / 30.0));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = ((mix (tmpvar_7, \n' + '    (1.0 - tmpvar_7.zyx)\n' + '  , vec3(0.01, 0.01, 0.01)) - 0.03) - (0.2 * pow (\n' + '    (1.0 - rad)\n' + '  , 18.0)));\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('uniform highp vec3 neu;\n' + 'uniform highp vec3 blur;\n' + 'highp vec3 xlat_mutableblur;\n' + 'highp vec3 xlat_mutableneu;\n' + 'highp vec3 xlat_mutableret1;\n' + 'shader_body {\n' + '  xlat_mutableblur = blur;\n' + '  xlat_mutableneu = neu;\n' + '   vec2 uv_1;\n' + '   float inten_3;\n' + '   float dist_4;\n' + '   float ang2_5;\n' + '   vec2 uv2_6;\n' + '  uv_1 = (uv - 0.5);\n' + '  uv_1 = (uv_1 * aspect.xy);\n' + '  dist_4 = 1.0;\n' + '  inten_3 = 1.0;\n' + '  xlat_mutableret1 = vec3(0.0, 0.0, 0.0);\n' + '   mat2 tmpvar_7;\n' + '  tmpvar_7[0] = _qa.xy;\n' + '  tmpvar_7[1] = _qa.zw;\n' + '  uv_1 = (uv_1 * tmpvar_7);\n' + '  for ( float n_2 = 1.0; n_2 <= 6.0; n_2 += 1.0) {\n' + '    ang2_5 = ((6.28 * n_2) / 6.0);\n' + '     float tmpvar_8;\n' + '    tmpvar_8 = cos(ang2_5);\n' + '     float tmpvar_9;\n' + '    tmpvar_9 = sin(ang2_5);\n' + '    uv2_6.x = ((uv_1.x * tmpvar_8) - (uv_1.y * tmpvar_9));\n' + '    uv2_6.y = ((uv_1.x * tmpvar_9) + (uv_1.y * tmpvar_8));\n' + '    uv2_6 = (uv2_6 * aspect.yx);\n' + '    dist_4 = (1.0 - fract((\n' + '      (0.1666667 * n_2)\n' + '     + _qh.y)));\n' + '    inten_3 = ((pow (dist_4, 0.3) * (1.0 - dist_4)) * 2.0);\n' + '     vec2 tmpvar_10;\n' + '    tmpvar_10 = (((2.0 * uv2_6) * dist_4) + 0.5);\n' + '     vec4 tmpvar_11;\n' + '    tmpvar_11 = texture2D (sampler_main, tmpvar_10);\n' + '    xlat_mutableneu = tmpvar_11.xyz;\n' + '     vec4 tmpvar_12;\n' + '    tmpvar_12 = texture2D (sampler_blur2, tmpvar_10);\n' + '    xlat_mutableblur = ((tmpvar_12.xyz * scale2) + bias2);\n' + '    xlat_mutableneu = (xlat_mutableneu + xlat_mutableblur);\n' + '    xlat_mutableret1 = ((xlat_mutableret1 * 0.9) + (xlat_mutableneu * inten_3));\n' + '  };\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13.w = 1.0;\n' + '  tmpvar_13.xyz = (xlat_mutableret1 + (vec3(0.0, 0.0, 0.15) * rad));\n' + '  vec4 ret4 = tmpvar_13;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('dec_med = pow (0.9, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %4;\n' + 'index2 = (index2 + is_beat*bnot(index))%4;\n' + 'monitor = index2;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = (bass + mid + treb)/16;\n' + 'k1 =  is_beat*bnot(index)*bnot(index2);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'p3 = dec_med * p3+ (1-dec_med)*p2;\n' + 'rott = p3 * 3.1416/4;\n' + 'pos = pos + q20/140;\n' + 'q28 = pos;\n' + 'q27 = index+1;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'trel = time/10;\n' + 'q5 = cos(trel);\n' + 'q6 = sin(trel);\n' + 'q7 = -q6;\n' + 'q8 = q5;\n' + 'trig = q24 * (index%4);\n' + 'mox = bnot(trig)*mox + trig * (rand (100)/100-.5);\n' + 'moy = bnot(trig)*moy + trig * (rand (100)/100-.5);\n' + 'q15 = mox/2;\n' + 'q16 = moy/2;\n' + 'speed = speed * bnot(trig) + trig * q26;\n' + 'movz = movz + speed/fps;\n' + 'q9 = movz;\n' + 'q30 = (1.2 + sin(time/7))*3;\n' + 'zoom = 1;\n' + 'rot = -0.00;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
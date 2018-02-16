define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.007,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 2.103,
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
		b1x : 0.7,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 0.5,
		echo_zoom : 1.0,
		ob_size : 0.01,
		b1ed : 0.0,
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
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 1.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.4,
		wave_mystery : 0.38,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.5,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.81,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.vis = 0;
m.index2 = 0;
m.q1 = 0;
m.p1 = 0;
m.q2 = 0;
m.p2 = 0;
m.q3 = 0;
m.q4 = 0;
m.sw = 0;
m.k1 = 0;
m.k2 = 0;
m.movez = 0;
m.is_beat = 0;
m.q30 = 0;
m.dec_med = 0;
m.q20 = 0;
m.q31 = 0;
m.q10 = 0;
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
m.v2 = 0;
m.rott = 0;
m.dec_slow = 0;
m.kiss = 0;
m.peak = 0;
m.vol = 0;
m.p1 = 0;
m.vx = 0.2;
m.vy = -0.1;
m.kx = 0;
m.ky = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.96, div(30,m.fps));
m.dec_slow = pow(0.99, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.5+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),8);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),7);
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.q24 = m.is_beat;
m.vol = (m.bass_att+m.treb_att);
m.v2 = ((m.v2*m.dec_med)+(m.vol*(1-m.dec_med)));
m.q26 = (Math.max(Math.atan((m.vol-m.v2)), 0)+0.2);
m.q27 = (m.index+1);
m.sw = ((m.sw*m.dec_med)+((1-m.dec_med)*mod(m.index2,2)));
m.q28 = m.sw;
m.kiss = ((m.kiss*m.dec_med)+(((1-m.dec_med)*bnot(m.index2))*below(m.index, 4)));
m.q29 = m.kiss;
m.k1 = (m.is_beat*bnot(m.index));
m.k2 = (m.is_beat*bnot(m.index));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.rott = div((m.p2*3.1416),2);
m.monitor = m.k1;
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.vis = ((m.vis*m.dec_med)+((1-m.dec_med)*mod(m.index2,2)));
m.q10 = m.vis;
m.zoom = 1;
m.rot = -0;
m.movez = (m.movez+div((0.01*30),m.fps));
m.q30 = m.movez;
m.q31 = (Math.cos(div(m.time,32))*Math.cos(div(m.time,32)));
m.monitor = m.vis;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.warp = 1.2;
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.89152,
			samples : 128.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
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
m.y = 0.5;
m.r = (0.5+(0.5*Math.sin(div(m.time,7))));
m.g = (0.5+(0.5*Math.sin(div(m.time,11))));
m.b = (0.5+(0.5*Math.sin(div(m.time,5))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = sample ;\n' + 'y = .5;\n' + 'r = .5 + .5 * sin(time/7);\n' + 'g = .5 + .5 * sin(time/11);\n' + 'b = .5 + .5 * sin(time/5);'),

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
			smoothing : 0.0,
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
			a : 0.8,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.87512,
			additive : 0.0,
			border_a : 0.5,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.39712,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 64.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.vis = 0;
m.q10 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = div(m.time,2);
m.tex_zoom = (2+Math.sin(div(m.time,5)));
m.vis = m.q10;
m.a = m.vis;
m.a2 = (m.vis*0.5);
m.border_a = m.vis;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang = time/2;\n' + 'tex_zoom = 2 + sin(time/5);\n' + 'vis = q10;\n' + 'a = vis;\n' + ' a2 = vis*.5;\n' + ' border_a = vis;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.9,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.6,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.8315,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.59,
			rad : 0.03301,
			x : 0.6,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 12.0,
			},
		'init_eqs' : function(m) {
m.vis = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.16*Math.cos((div(m.instance,12)*6.28))));
m.y = (0.5+(0.16*Math.sin((div(m.instance,12)*6.28))));
m.vis = 1;
m.a = m.vis;
m.a2 = (m.vis*1);
m.border_a = m.vis;
m.r = (0.5*(1+Math.sin(div(m.time,12.3))));
m.g = (0.5*(1+Math.sin(div(m.time,14.3))));
m.b = (0.5*(1+Math.sin(div(m.time,9.3))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = .5 + .16*cos(instance/12*6.28);\n' + 'y = .5 + .16*sin(instance/12*6.28);\n' + 'vis = 1;\n' + 'a = vis;\n' + ' a2 = vis*1;\n' + ' border_a = vis;\n' + 'r = .5 * (1+sin(time/12.3));\n' + 'g = .5 * (1+sin(time/14.3));\n' + 'b = .5 * (1+sin(time/9.3));'),

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

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.7,
			enabled : 0.0,
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

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = ((uv * texsize.xy) * 0.03);\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3.x = (cos((tmpvar_2.y * _qa.x)) * sin(-(tmpvar_2.y)));\n' + '  tmpvar_3.y = (sin(tmpvar_2.x) * cos((tmpvar_2.y * _qa.y)));\n' + '  uv_1 = (uv - ((tmpvar_3 * texsize.zw) * 16.0));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_main, uv_1);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ((tmpvar_4.xyz * 0.99) - 0.01);\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec2 xlat_mutabledz;\n' + 'highp vec3 xlat_mutableneu;\n' + 'highp vec3 xlat_mutableret1;\n' + 'highp vec2 xlat_mutableuv3;\n' + 'shader_body {\n' + '   vec2 uv_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = ((uv - 0.5) * aspect.xy);\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3.y = 0.0;\n' + '  tmpvar_3.x = texsize.z;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = 0.0;\n' + '  tmpvar_4.y = texsize.w;\n' + '  uv_1 = (tmpvar_2 * aspect.yx);\n' + '  xlat_mutableuv3 = ((1.98 * uv_1) + -0.5);\n' + '   vec2 P_5;\n' + '  P_5 = (xlat_mutableuv3 + tmpvar_3);\n' + '   float tmpvar_6;\n' + '  tmpvar_6 = dot (texture2D (sampler_main, P_5).xyz, vec3(0.32, 0.49, 0.29));\n' + '   vec2 P_7;\n' + '  P_7 = (xlat_mutableuv3 - tmpvar_3);\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = dot (texture2D (sampler_main, P_7).xyz, vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.x = (0.03999996 * (tmpvar_6 - tmpvar_8));\n' + '   vec2 P_9;\n' + '  P_9 = (xlat_mutableuv3 + tmpvar_4);\n' + '   float tmpvar_10;\n' + '  tmpvar_10 = dot (texture2D (sampler_main, P_9).xyz, vec3(0.32, 0.49, 0.29));\n' + '   vec2 P_11;\n' + '  P_11 = (xlat_mutableuv3 - tmpvar_4);\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = dot (texture2D (sampler_main, P_11).xyz, vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.y = (0.03999996 * (tmpvar_10 - tmpvar_12));\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (xlat_mutableuv3 + (xlat_mutabledz * 0.01));\n' + '  tmpvar_13 = texture2D (sampler_main, P_14);\n' + '  xlat_mutableneu = tmpvar_13.xyz;\n' + '  xlat_mutableret1 = max (vec3(0.0, 0.0, 0.0), (xlat_mutableneu * 0.03999996));\n' + '  uv_1 = (tmpvar_2 * aspect.yx);\n' + '  xlat_mutableuv3 = ((1.313333 * uv_1) + -0.5);\n' + '   vec2 P_15;\n' + '  P_15 = (xlat_mutableuv3 + tmpvar_3);\n' + '   float tmpvar_16;\n' + '  tmpvar_16 = dot (texture2D (sampler_main, P_15).xyz, vec3(0.32, 0.49, 0.29));\n' + '   vec2 P_17;\n' + '  P_17 = (xlat_mutableuv3 - tmpvar_3);\n' + '   float tmpvar_18;\n' + '  tmpvar_18 = dot (texture2D (sampler_main, P_17).xyz, vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.x = (xlat_mutabledz.x + (1.373333 * (tmpvar_16 - tmpvar_18)));\n' + '   vec2 P_19;\n' + '  P_19 = (xlat_mutableuv3 + tmpvar_4);\n' + '   float tmpvar_20;\n' + '  tmpvar_20 = dot (texture2D (sampler_main, P_19).xyz, vec3(0.32, 0.49, 0.29));\n' + '   vec2 P_21;\n' + '  P_21 = (xlat_mutableuv3 - tmpvar_4);\n' + '   float tmpvar_22;\n' + '  tmpvar_22 = dot (texture2D (sampler_main, P_21).xyz, vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.y = (xlat_mutabledz.y + (1.373333 * (tmpvar_20 - tmpvar_22)));\n' + '   vec4 tmpvar_23;\n' + '   vec2 P_24;\n' + '  P_24 = (xlat_mutableuv3 + (xlat_mutabledz * 0.01));\n' + '  tmpvar_23 = texture2D (sampler_main, P_24);\n' + '  xlat_mutableneu = tmpvar_23.xyz;\n' + '  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * 1.373333));\n' + '  uv_1 = (tmpvar_2 * aspect.yx);\n' + '  xlat_mutableuv3 = ((0.6466666 * uv_1) + -0.5);\n' + '   vec2 P_25;\n' + '  P_25 = (xlat_mutableuv3 + tmpvar_3);\n' + '   float tmpvar_26;\n' + '  tmpvar_26 = dot (texture2D (sampler_main, P_25).xyz, vec3(0.32, 0.49, 0.29));\n' + '   vec2 P_27;\n' + '  P_27 = (xlat_mutableuv3 - tmpvar_3);\n' + '   float tmpvar_28;\n' + '  tmpvar_28 = dot (texture2D (sampler_main, P_27).xyz, vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.x = (xlat_mutabledz.x + (2.706667 * (tmpvar_26 - tmpvar_28)));\n' + '   vec2 P_29;\n' + '  P_29 = (xlat_mutableuv3 + tmpvar_4);\n' + '   float tmpvar_30;\n' + '  tmpvar_30 = dot (texture2D (sampler_main, P_29).xyz, vec3(0.32, 0.49, 0.29));\n' + '   vec2 P_31;\n' + '  P_31 = (xlat_mutableuv3 - tmpvar_4);\n' + '   float tmpvar_32;\n' + '  tmpvar_32 = dot (texture2D (sampler_main, P_31).xyz, vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.y = (xlat_mutabledz.y + (2.706667 * (tmpvar_30 - tmpvar_32)));\n' + '   vec4 tmpvar_33;\n' + '   vec2 P_34;\n' + '  P_34 = (xlat_mutableuv3 + (xlat_mutabledz * 0.01));\n' + '  tmpvar_33 = texture2D (sampler_main, P_34);\n' + '  xlat_mutableneu = tmpvar_33.xyz;\n' + '  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * 2.706667));\n' + '  uv_1 = (tmpvar_2 * aspect.yx);\n' + '  xlat_mutableuv3 = ((1.98 * uv_1) + -0.5);\n' + '   vec2 P_35;\n' + '  P_35 = (xlat_mutableuv3 + tmpvar_3);\n' + '   float tmpvar_36;\n' + '  tmpvar_36 = dot (texture2D (sampler_main, P_35).xyz, vec3(0.32, 0.49, 0.29));\n' + '   vec2 P_37;\n' + '  P_37 = (xlat_mutableuv3 - tmpvar_3);\n' + '   float tmpvar_38;\n' + '  tmpvar_38 = dot (texture2D (sampler_main, P_37).xyz, vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.x = (xlat_mutabledz.x + (0.03999996 * (tmpvar_36 - tmpvar_38)));\n' + '   vec2 P_39;\n' + '  P_39 = (xlat_mutableuv3 + tmpvar_4);\n' + '   float tmpvar_40;\n' + '  tmpvar_40 = dot (texture2D (sampler_main, P_39).xyz, vec3(0.32, 0.49, 0.29));\n' + '   vec2 P_41;\n' + '  P_41 = (xlat_mutableuv3 - tmpvar_4);\n' + '   float tmpvar_42;\n' + '  tmpvar_42 = dot (texture2D (sampler_main, P_41).xyz, vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.y = (xlat_mutabledz.y + (0.03999996 * (tmpvar_40 - tmpvar_42)));\n' + '   vec4 tmpvar_43;\n' + '   vec2 P_44;\n' + '  P_44 = (xlat_mutableuv3 + (xlat_mutabledz * 0.01));\n' + '  tmpvar_43 = texture2D (sampler_main, P_44);\n' + '  xlat_mutableneu = tmpvar_43.xyz;\n' + '  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * 0.03999996));\n' + '   vec2 tmpvar_45;\n' + '  tmpvar_45 = (0.2 * sin((\n' + '    ((14.0 * tmpvar_2) + (xlat_mutabledz * 2.0))\n' + '   + \n' + '    (time / 6.0)\n' + '  )));\n' + '   vec4 tmpvar_46;\n' + '  tmpvar_46.w = 1.0;\n' + '  tmpvar_46.xyz = ((sqrt(xlat_mutableret1) * (0.2 + \n' + '    (8.0 * vec3((0.01 / sqrt(dot (tmpvar_45, tmpvar_45)))))\n' + '  )) / 1.5);\n' + '  vec4 ret4 = tmpvar_46;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('vol = 0;\n' + ' p1 = 0;\n' + 'vx = .2;\n' + ' vy = -0.1;\n' + 'kx = 0;\n' + ' ky = 0;'),
	'frame_eqs_str' : ('dec_med = pow (0.96, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %8;\n' + 'index2 = (index2 + is_beat*bnot(index))%7;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'vol = bass_att + treb_att;\n' + 'v2 = v2 * dec_med + vol * (1-dec_med) ;\n' + 'q26 = max(atan (vol - v2),0) + .2;\n' + 'q27 = index + 1;\n' + 'sw = sw*dec_med + (1-dec_med)*(index2%2);\n' + 'q28 = sw;\n' + 'kiss = kiss*dec_med+(1-dec_med)*bnot(index2)*below(index,4);\n' + 'q29 = kiss;\n' + 'k1 =  is_beat*bnot(index);\n' + 'k2 =  is_beat*bnot(index);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'rott = p2 * 3.1416/2;\n' + 'monitor = k1;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'vis = vis*dec_med + (1-dec_med)*(index2%2);\n' + 'q10 = vis;\n' + 'zoom = 1;\n' + 'rot = -0;\n' + 'movez = movez + .01*30/fps;\n' + 'q30 = movez;\n' + 'q31 = cos(time/32)*cos(time/32);\n' + 'monitor = vis;'),
	'pixel_eqs_str' : ('warp = 1.2;'),
};

return pmap;
});
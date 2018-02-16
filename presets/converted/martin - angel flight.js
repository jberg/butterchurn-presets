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
		wave_scale : 0.01,
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
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.7,
		ib_r : 0.25,
		mv_b : 0.5,
		echo_zoom : 0.999998,
		ob_size : 0.01,
		b1ed : 0.0,
		wave_smoothing : 0.504,
		warpanimspeed : 1.4595,
		wave_dots : 1.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : -1.0,
		decay : 0.5,
		wave_a : 0.39158,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 0.5,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
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
m.movez = 0;
m.is_beat = 0;
m.t_rel = 0;
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
m.p2 = ((m.dec_slow*m.p2)+((1-m.dec_slow)*m.p1));
m.rott = div((m.p2*3.14159265359),2);
m.q27 = (8-m.index);
m.q28 = (0.5+div(Math.sin(div(m.time,7)),10));
m.q29 = m.index4;
m.mv_a = 0.2;
m.t_rel = div(m.time,3);
m.wave_a = Math.max((Math.sin(div(m.time,8))-0.5), 0);
m.wave_a = 0;
m.wave_x = (0.5+(0.5*Math.sin(div(m.time,13))));
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.movez = (m.movez+div((0.01*30),m.fps));
m.q29 = m.movez;
m.zoom = 1;
m.rot = 0.0;
m.dx = 0.003;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.4,
			g : 0.6,
			scaling : 0.5033,
			samples : 256.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.yang = 0;
m.xang = 0;
m.t_abs = 0;
m.ampl = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.t_rel = 0;
m.q26 = 0;
m.t1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.t_abs = m.sample;
m.t_rel = (m.sample-div(m.time,1));
m.ampl = m.time;
m.ox = ((m.ampl*10)*Math.sin((m.t_abs*68)));
m.oy = ((m.ampl*10)*Math.cos((m.t_abs*28)));
m.oz = ((m.ampl*10)*Math.cos((m.t_abs*128)));
m.r = 1;
m.g = 0.5;
m.b = 1;
m.a = div(m.q26,18);
m.xang = m.t1;
m.yang = (m.t1*2);
m.zang = m.t1;
m.fov = 0.12;
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
m.oz = (m.oz-6);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('t_abs = sample;\n' + 't_rel = sample-time/1;\n' + 'ampl = time;\n' + 'ox = ampl*10*sin (t_abs*68);\n' + 'oy = ampl*10*cos (t_abs*28);\n' + 'oz = ampl*10*cos (t_abs*128);\n' + 'r = 1;\n' + 'g = .5 ;\n' + 'b = 1 ;\n' + 'a=q26/18;\n' + 'xang = t1 ;\n' + 'yang = t1*2;\n' + 'zang = t1;\n' + 'fov = 0.12;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = oz - 6;\n' + 'x = ox*fov/oz +0.5;\n' + 'y = oy*fov/oz + 0.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
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
		'point_eqs' : function(m) {
m.a = Math.max((Math.sin(div(m.time,8))-0.5), 0);
m.r = 0.4;
m.g = 0.2;
m.b = 0.7;
m.x = (m.sample+(0.01*Math.cos(((m.sample*243)+m.time))));
m.y = ((0.5+(0.5*Math.sin(div(m.time,13))))+(0.02*Math.sin((m.sample*143))));
m.a = 0.7;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('a = max(sin(time/8)-.5,0);\n' + 'r = .4;\n' + ' g = .2;\n' + ' b = .7;\n' + 'x = sample + .01*cos(sample*243+time);\n' + 'y = .5+.5*sin(time/13) + .02*sin(sample*143);\n' + 'a = .7 ;'),

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
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.628319,
			thickoutline : 0.0,
			g : 0.7,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 4.141529,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.7,
			r : 0.3,
			border_g : 1.0,
			rad : 0.379365,
			x : 0.3,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (div(m.q1,6)+0.5);
m.y = (div(m.q2,6)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = q1/6 + .5;\n' + 'y = q2/6 + .5;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 3.14159,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.99979,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.986,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = Math.sin(div(m.time,65));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang =sin(time/65) ;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.6,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.4,
			a2 : 0.3,
			r : 1.0,
			border_g : 1.0,
			rad : 0.22613,
			x : 0.9,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q22 = 0;
m.q24 = 0;
m.dx = 0;
m.dy = 0;
m.t_rel = (5*m.time);
m.t1 = Math.floor(m.t_rel);
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.dx = (div(rand(1000),1000)-0.5);
m.dy = (div(rand(1000),1000)-0.5);
m.x = (0.5+(m.dx*(1-div(m.q22,4))));
m.y = (0.5+(m.dy*(1-div(m.q22,4))));
m.ang = m.time;
m.a = 1;
m.rad = (((0.1*m.q24)+0.08)+div(m.q22,40));
		return m;
	},
		'init_eqs_str' : ('t_rel = 5*time;\n' + 't1 = int(t_rel);'),
		'frame_eqs_str' : ('dx =  rand(1000)/1000-.5;\n' + 'dy =  rand(1000)/1000-.5;\n' + 'x = .5 + dx*(1-q22/4);\n' + 'y = .5 + dy*(1-q22/4);\n' + 'ang = time;\n' + 'a = 1;\n' + 'rad = .1*q24+0.08 +q22/40;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.6,
			enabled : 0.0,
			b : 0.4,
			tex_ang : 0.125664,
			thickoutline : 0.0,
			g : 0.3,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 5.536972,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.6,
			border_g : 1.0,
			rad : 0.249779,
			x : 0.51,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q22 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.a = Math.max((m.q22-2), 0);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a = max(q22-2,0);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 crisp_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (((uv - vec2(0.5, 0.5)) * texsize.xy) * 0.03);\n' + '  uv_1 = (uv + ((\n' + '    (clamp ((sin(tmpvar_3) / cos(tmpvar_3)), vec2(-12.0, -12.0), vec2(12.0, 12.0)) * cos((tmpvar_3.yx * tmpvar_3.yx)))\n' + '   * texsize.zw) * 12.0));\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_main, uv_1).xyz;\n' + '  crisp_2 = tmpvar_4;\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ((0.99 * crisp_2) - 0.01);\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec3 xlat_mutableneu;\n' + 'highp vec3 xlat_mutableret1;\n' + 'highp vec2 xlat_mutableuv2;\n' + 'shader_body {\n' + '   vec2 uv_1;\n' + '   float inten_2;\n' + '   float dist_3;\n' + '  uv_1 = (uv - 0.5);\n' + '  uv_1 = (uv_1 * aspect.xy);\n' + '  dist_3 = (1.0 - fract((0.25 + _qh.x)));\n' + '  inten_2 = (sqrt(dist_3) * (1.0 - (dist_3 * dist_3)));\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = fract(((\n' + '    (2.0 * uv_1)\n' + '   * dist_3) + 0.5));\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, tmpvar_4);\n' + '  xlat_mutableneu = tmpvar_5.xyz;\n' + '  xlat_mutableret1 = max (vec3(0.0, 0.0, 0.0), (xlat_mutableneu * inten_2));\n' + '  xlat_mutableuv2.x = -(uv_1.y);\n' + '  xlat_mutableuv2.y = uv_1.x;\n' + '  dist_3 = (1.0 - fract((0.5 + _qh.x)));\n' + '  inten_2 = (sqrt(dist_3) * (1.0 - (dist_3 * dist_3)));\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = fract(((\n' + '    (2.0 * xlat_mutableuv2)\n' + '   * dist_3) + 0.5));\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_main, tmpvar_6);\n' + '  xlat_mutableneu = tmpvar_7.xyz;\n' + '  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_2));\n' + '  dist_3 = (1.0 - fract((0.75 + _qh.x)));\n' + '  inten_2 = (sqrt(dist_3) * (1.0 - (dist_3 * dist_3)));\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = fract(((\n' + '    (2.0 * uv_1)\n' + '   * dist_3) + 0.5));\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_main, tmpvar_8);\n' + '  xlat_mutableneu = tmpvar_9.xyz;\n' + '  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_2));\n' + '  xlat_mutableuv2.x = -(uv_1.y);\n' + '  xlat_mutableuv2.y = uv_1.x;\n' + '  dist_3 = (1.0 - fract((1.0 + _qh.x)));\n' + '  inten_2 = (sqrt(dist_3) * (1.0 - (dist_3 * dist_3)));\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = fract(((\n' + '    (2.0 * xlat_mutableuv2)\n' + '   * dist_3) + 0.5));\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_main, tmpvar_10);\n' + '  xlat_mutableneu = tmpvar_11.xyz;\n' + '  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_2));\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12.w = 1.0;\n' + '  tmpvar_12.xyz = (xlat_mutableret1 * 3.0);\n' + '  vec4 ret4 = tmpvar_12;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('dec_med = pow (0.9, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %8;\n' + 'index2 = (index2 + is_beat*bnot(index))%4;\n' + 'index3 = (index3 + is_beat*bnot(index)*bnot(index2))%3;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = bass + mid + treb;\n' + 'k1 =  is_beat*equal(index,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_slow * p2+ (1-dec_slow)*p1;\n' + 'rott = p2 * 3.14159265359/2;\n' + 'q27 = 8-index;\n' + 'q28 = .5 + sin(time/7)/10;\n' + 'q29 = index4;\n' + 'mv_a = 0.2;\n' + 't_rel = time/3;\n' + 'wave_a = max(sin(time/8)-.5,0);\n' + 'wave_a = 0;\n' + 'wave_x = .5+.5*sin(time/13);\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'movez = movez + .01 * 30/fps ;\n' + 'q29 = movez;\n' + 'zoom = 1;\n' + 'rot = .0;\n' + 'dx = .003;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
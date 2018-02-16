define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 0.99,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.007,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 2.346,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 0.3,
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
		mv_b : 0.5,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.0,
		wave_smoothing : 0.45,
		warpanimspeed : 1.459,
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
		ob_a : 0.8,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.32,
		wave_mystery : 0.08,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 0.5,
		rating : 3.0,
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
m.p2 = 0;
m.q3 = 0;
m.p3 = 0;
m.q4 = 0;
m.k1 = 0;
m.grid = 0;
m.go = 0;
m.movez = 0;
m.is_beat = 0;
m.q30 = 0;
m.dec_med = 0;
m.q20 = 0;
m.q21 = 0;
m.str = 0;
m.q22 = 0;
m.index = 0;
m.q23 = 0;
m.avg = 0;
m.q24 = 0;
m.q26 = 0;
m.copy = 0;
m.q27 = 0;
m.beat = 0;
m.q28 = 0;
m.q29 = 0;
m.rot1 = 0;
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
m.index = mod((m.index+m.is_beat),4);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),4);
m.index3 = mod((m.index3+((m.is_beat*bnot(m.index))*bnot(m.index2))),3);
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = Math.max(m.peak, 4);
m.q23 = m.index;
m.q24 = m.is_beat;
m.q26 = Math.max(((m.bass+m.mid)+m.treb), 3);
m.go = ((m.go*m.dec_slow)+((1-m.dec_slow)*equal(m.index2, 2)));
m.movez = (m.movez+(div(((0.1*(1+(0.3*m.q26)))*30),m.fps)*m.go));
m.q30 = m.movez;
m.k1 = (m.is_beat*equal(m.index, 0));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.p3 = ((m.dec_med*m.p3)+((1-m.dec_med)*m.p2));
m.rott = div((m.p3*3.1416),2);
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.str = ((m.str*m.dec_slow)+((1-m.dec_slow)*m.index3));
m.q27 = (4-m.str);
m.grid = ((m.grid*m.dec_med)+(((1-m.dec_med)*equal(m.index2, 2))*bnot(m.index)));
m.mv_a = ((m.grid*0.6)*0);
m.rot1 = ((m.dec_med*m.rot1)+((1-m.dec_med)*bnot(m.index2)));
m.q28 = m.rot1;
m.copy = ((m.copy*m.dec_slow)+((1-m.dec_slow)*m.index3));
m.q29 = (0.3*m.copy);
m.wave_a = 0;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = (0.02*m.q28);
m.rot = (0.04*m.q2);
m.zoom = (0.96+(0.1*Math.sin(div(m.time,7))));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.6,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.89152,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 0.0,
			sep : 120.0,
			},
		'init_eqs' : function(m) {
m.k1 = 0;
m.k2 = 0;
m.yi = 0;
m.q22 = 0;
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
m.k2 = mod((m.sample*100),4);
m.xi = ((m.value1*m.k1)+(m.xi*(1-m.k1)));
m.yi = ((m.value2*(1-m.k1))+(m.yi*m.k1));
m.x = (0.5+m.xi);
m.y = (0.5+m.yi);
m.a = div(m.q22,8);
m.a = Math.min(m.a, 0.2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t2 = t2 + bass_att;'),
		'point_eqs_str' : ('k1 = (sample*100)%2;\n' + 'k2 = (sample*100)%4;\n' + 'xi = value1*k1 + xi*(1-k1);\n' + 'yi = value2*(1-k1) + yi*k1;\n' + 'x = .5 + xi;\n' + 'y = .5 + yi;\n' + 'a = q22/8;\n' + 'a = min(a,.2);'),

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
m.q21 = 0;
m.yi = 0;
m.xi = 0;
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
		'point_eqs' : function(m) {
m.xi = div(rand(100),100);
m.yi = div(rand(100),100);
m.x = m.xi;
m.y = m.yi;
m.a = div(m.q21,15);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tm = time*.1;\n' + 't1 = t1*sin(tm*t4) + (1-t1)*sin(tm*t7);\n' + 't2 = t2*sin(tm*t5) + (1-t2)*sin(tm*t8);\n' + 't3 = t3*sin(tm*t6) + (1-t3)*sin(tm*1);\n' + 'tic = min(time - tin,1);\n' + 'tin = time;\n' + 'tva = (tic*q1*.5);\n' + 'tvb = (tic*q2*.5);\n' + 'tvc = (tic*q3*.5);\n' + 'q1 = tva;\n' + 'q2 = tvb;\n' + 'q3 = tvc;\n' + 'sz = .5;\n' + 'len = q4;\n' + 't4 = len;'),
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
			tex_zoom : 1.53117,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.8,
			a2 : 1.0,
			r : 0.5,
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
m.high = 0;
m.trel = 0;
m.q20 = 0;
m.yi = 0;
m.q22 = 0;
m.xi = 0;
m.k1x = 0;
m.q23 = 0;
m.k1y = 0;
m.k0x = 0;
m.dx = 0;
m.low = 0;
m.k0y = 0;
m.dy = 0;
m.q26 = 0;
m.q28 = 0;

			m.rkeys = ['yi','xi','dx','dy'];
			return m;
		},
		'frame_eqs' : function(m) {
m.xi = (m.xi-div((m.dx*m.q22),200));
m.yi = (m.yi-div((m.dy*m.q23),200));
m.low = 0;
m.high = 1;
m.k0x = below(m.xi, m.low);
m.k1x = above(m.xi, m.high);
m.k0y = below(m.yi, m.low);
m.k1y = above(m.yi, m.high);
m.dx = ((m.k0x*1)+(m.k1x*-1));
m.dy = ((m.k0y*1)+(m.k1y*-1));
m.x = m.xi;
m.y = m.yi;
m.trel = (div(m.time,2)+m.q20);
m.x = (0.5+Math.sin((m.trel*2)));
m.y = (0.5+Math.cos(((m.trel*1.3)+div(m.q28,3))));
m.a = (div(m.q26,4)+0.2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('xi = xi - dx*q22/200;\n' + 'yi = yi - dy*q23/200;\n' + 'low = 0;\n' + 'high = 1;\n' + 'k0x = below(xi,low);\n' + 'k1x = above(xi,high);\n' + 'k0y = below(yi,low);\n' + 'k1y = above(yi,high);\n' + 'dx = k0x*1 + k1x*-1;\n' + 'dy = k0y*1 + k1y*-1;\n' + 'x = xi;\n' + 'y = yi;\n' + 'trel = time/2+q20;\n' + 'x = .5+sin(trel*2);\n' + 'y = .5+cos(trel*1.3 +q28/3);\n' + 'a = q26/4+.2;'),

		},
		{
		'baseVals' : {
			r2 : 0.7,
			a : 0.2,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 3.45575,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.4,
			tex_zoom : 0.99305,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.5,
			border_g : 0.5,
			rad : 2.36696,
			x : 0.4,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.5,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q24 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.a2 = 0;
m.a = 0;
m.a = div(m.q24,2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a2 =0;\n' + 'a = 0;\n' + 'a = q24/2;'),

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
			tex_zoom : 0.60986,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.03886,
			x : 0.503,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.5,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q21 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = div(rand(10),10);
m.y = div(rand(10),10);
m.r = div(rand(4),3);
m.g = div(rand(4),3);
m.b = div(rand(4),3);
m.a = Math.min(div(m.q21,2), 0.9);
m.rad = div((m.a*m.a),3);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = rand(10)/10;\n' + 'y = rand(10)/10;\n' + 'r = rand(4)/3;\n' + 'g = rand(4)/3;\n' + 'b = rand(4)/3;\n' + 'a = min(q21/2 ,.9);\n' + 'rad = a *a/3 ;'),

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
			tex_zoom : 0.49981,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.54822,
			x : 0.5,
			y : 1.0,
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

		}
],
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 noiseVal_2;\n' + '   vec2 P_3;\n' + '  P_3 = (((\n' + '    (texsize.xy * texsize_noise_lq.zw)\n' + '  .x * uv) * 0.02) + (0.1 * rand_frame).xy);\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = vec3(dot (texture2D (sampler_noise_lq, P_3), vec4(0.32, 0.49, 0.29, 0.0)));\n' + '  noiseVal_2 = tmpvar_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = ((uv * texsize.xy) * 0.08);\n' + '  uv_1 = (uv - ((\n' + '    (sin(tmpvar_5) / cos(tmpvar_5))\n' + '   * texsize.zw) * 3.0));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv_1);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (tmpvar_6.xyz + (noiseVal_2 / 30.0));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = ((mix (tmpvar_7, \n' + '    (1.0 - tmpvar_7.zyx)\n' + '  , vec3(0.01, 0.01, 0.01)) - 0.03) - (0.2 * pow (\n' + '    (1.0 - rad)\n' + '  , 18.0)));\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('uniform highp vec2 uv3;\n' + 'highp vec2 xlat_mutabledz;\n' + 'highp vec2 xlat_mutableuv3;\n' + 'shader_body {\n' + '   vec2 tmpvar_1;\n' + '  tmpvar_1.y = 0.0;\n' + '  tmpvar_1.x = texsize.z;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2.x = 0.0;\n' + '  tmpvar_2.y = texsize.w;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3.x = ((uv.x - 0.5) + 0.5);\n' + '  tmpvar_3.y = uv.y;\n' + '   vec2 P_4;\n' + '  P_4 = (tmpvar_3 + tmpvar_1);\n' + '   vec2 P_5;\n' + '  P_5 = (tmpvar_3 - tmpvar_1);\n' + '   float tmpvar_6;\n' + '  tmpvar_6 = dot ((texture2D (sampler_main, P_4).xyz - texture2D (sampler_main, P_5).xyz), vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.x = tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (tmpvar_3 + tmpvar_2);\n' + '   vec2 P_8;\n' + '  P_8 = (tmpvar_3 - tmpvar_2);\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = dot ((texture2D (sampler_main, P_7).xyz - texture2D (sampler_main, P_8).xyz), vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.y = tmpvar_9;\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (tmpvar_3 + (0.2 * xlat_mutabledz));\n' + '  tmpvar_10 = texture2D (sampler_main, P_11);\n' + '  xlat_mutableuv3 = ((0.4 * cos(\n' + '    (42.0 * uv3)\n' + '  )) + (64.0 * xlat_mutabledz));\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = clamp ((0.01 / sqrt(\n' + '    dot (xlat_mutableuv3, xlat_mutableuv3)\n' + '  )), 0.0, 1.0);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13.w = 1.0;\n' + '  tmpvar_13.xyz = (clamp ((\n' + '    (12.0 * ((tmpvar_10.xyz - (_qa.x * xlat_mutabledz.y)) + 0.04))\n' + '   * \n' + '    (0.1 + max (vec3(0.0, 0.0, 0.0), ((\n' + '      (0.1 * vec3(tmpvar_12))\n' + '     + \n' + '      (0.9 * dot (vec3(tmpvar_12), vec3(0.32, 0.49, 0.29)))\n' + '    ) * 1.252262)))\n' + '  ), 0.0, 1.0) - 0.05);\n' + '  vec4 ret4 = tmpvar_13;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('dec_med = pow (0.9, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %4;\n' + 'index2 = (index2 + is_beat*bnot(index))%4;\n' + 'index3 = (index3 + is_beat*bnot(index)*bnot(index2))%3;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = max(peak,4);\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = max(bass + mid + treb,3);\n' + 'go = go*dec_slow + (1-dec_slow) * equal(index2,2);\n' + 'movez = movez + .1*(1+.3*q26)*30/fps * go;\n' + 'q30 = movez;\n' + 'k1 =  is_beat*equal(index,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'p3 = dec_med * p3+ (1-dec_med)*p2;\n' + 'rott = p3*3.1416/2;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'str = str * dec_slow + (1-dec_slow) * index3;\n' + 'q27 = 4 - str;\n' + 'grid = grid*(dec_med) + (1-dec_med)* equal(index2,2)*bnot(index);\n' + 'mv_a = grid * .6 *0;\n' + 'rot1 = dec_med * rot1 + (1-dec_med) * bnot(index2) ;\n' + 'q28 = rot1 ;\n' + 'copy = copy * dec_slow + (1-dec_slow)*index3;\n' + 'q29 = .3*copy;\n' + 'wave_a = 0;'),
	'pixel_eqs_str' : ('dx = 0.02*q28;\n' + 'rot = .04*q2;\n' + 'zoom = .96 + .1*sin(time/7);'),
};

return pmap;
});
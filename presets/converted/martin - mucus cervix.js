define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.980001,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.0067,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.958178,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.9999,
		ob_r : 0.3999,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
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
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.4999,
		echo_zoom : 0.999998,
		ob_size : 0.01,
		b1ed : 0.0,
		wave_smoothing : 0.45,
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
		ob_a : 0.2,
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
m.is_beat = 0;
m.dec_med = 0;
m.q20 = 0;
m.q21 = 0;
m.q11 = 0;
m.q22 = 0;
m.index = 0;
m.q23 = 0;
m.avg = 0;
m.q24 = 0;
m.q26 = 0;
m.q27 = 0;
m.beat = 0;
m.q28 = 0;
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
m.is_beat = (above(m.beat, ((0.2+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
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
m.q26 = ((m.bass+m.mid)+m.treb);
m.q11 = Math.min(m.q22, 3);
m.k1 = (m.is_beat*equal(m.index, 0));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.rott = div((m.p2*3.14159265359),2);
m.q27 = (8-m.index);
m.q28 = m.index2;
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.zoom = (1.0+(0.02*m.q1));
m.rot = (0.01*m.q2);
m.dx = (0.0*m.index);
m.wave_a = 0;
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
			scaling : 3.915805,
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
m.q26 = 0;
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
m.x = m.sample;
m.y = ((div((m.value1*rand(50)),100)*Math.abs((m.sample-0.5)))+0.49);
m.a = (div(m.q26,4)*(0.2+Math.abs((m.sample-0.5))));
		return m;
	},
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
		'frame_eqs_str' : ('t2 = t2 + bass_att;'),
		'point_eqs_str' : ('x = sample;\n' + 'y = value1 * rand(50)/100 * abs(sample-.5)+ .49;\n' + 'a = q26/4 * (.2 + abs(sample-.5));'),

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

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
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
			a2 : 1.0,
			r : 0.5,
			border_g : 1.0,
			rad : 0.048958,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.trel = 0;
m.cent = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.trel = div(m.time,3);
m.x = (0.5+Math.sin((m.trel*2)));
m.y = (0.5+Math.cos((m.trel*1.3)));
m.cent = sqrt((((m.x-0.5)*(m.x-0.5))+((m.y-0.5)*(m.y-0.5))));
m.rad = (0.1*m.cent);
m.a = 0.8;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trel = time/3;\n' + 'x = .5+sin(trel*2);\n' + 'y = .5+cos(trel*1.3);\n' + 'cent = sqrt((x-.5)*(x-.5)+(y-.5)*(y-.5));\n' + 'rad = .1*cent;\n' + 'a = .8;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.5,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.55,
			textured : 0.0,
			g2 : 0.4,
			tex_zoom : 0.9355,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.8,
			b2 : 0.4,
			a2 : 0.07,
			r : 0.0,
			border_g : 0.7,
			rad : 0.393173,
			x : 0.26,
			y : 0.2,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.3,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.g0 = 0;
m.b0 = 0;
m.q24 = 0;
m.q26 = 0;
m.y0 = 0;
m.x0 = 0;
m.rad0 = 0;
m.trig = 0;
m.r0 = 0;

			m.rkeys = ['g0','b0','y0','x0','rad0','r0'];
			return m;
		},
		'frame_eqs' : function(m) {
m.trig = m.q24;
m.x0 = ((m.x0*bnot(m.trig))+(m.trig*(0.5+div(rand(100),200))));
m.y0 = ((m.y0*bnot(m.trig))+(m.trig*(0.5+div(rand(100),200))));
m.x0 = (m.x0+div(((0.1*m.q1)*(3+m.q26)),m.fps));
m.y0 = (m.y0+div(((0.1*m.q2)*(3+m.q26)),m.fps));
m.x0 = (m.x0-Math.floor(m.x0));
m.y0 = (m.y0-Math.floor(m.y0));
m.tex_ang = m.time;
m.tex_zoom = m.q1;
m.ang = (div(m.time,100)*m.q2);
m.x = m.x0;
m.y = m.y0;
m.rad0 = ((m.rad0*bnot(m.trig))+(m.trig*(0.04+div(rand(100),1000))));
m.rad = m.rad0;
m.r0 = ((bnot(m.trig)*m.r0)+div((m.trig*rand(10)),10));
m.g0 = ((bnot(m.trig)*m.g0)+div((m.trig*rand(10)),10));
m.b0 = ((bnot(m.trig)*m.b0)+div((m.trig*rand(10)),10));
m.r = m.r0;
m.b = m.b0;
m.g = m.g0;
m.r2 = 0;
m.b2 = 0;
m.g2 = 0;
m.a = 1;
m.a2 = 0.3;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trig = q24;\n' + 'x0 = x0*bnot(trig) + trig*(.5+ rand(100)/200);\n' + 'y0 = y0*bnot(trig) + trig*(.5+ rand(100)/200);\n' + 'x0 = x0 + .1*q1*(3+q26)/fps;\n' + 'y0 = y0 + .1*q2*(3+q26)/fps;\n' + 'x0 = x0 - int(x0);\n' + 'y0 = y0 - int(y0);\n' + 'tex_ang = time;\n' + 'tex_zoom = q1;\n' + 'ang = time/100*q2;\n' + 'x = x0;\n' + ' y = y0;\n' + 'rad0 = rad0*bnot(trig) + trig*(.04+rand(100)/1000);\n' + 'rad = rad0;\n' + 'r0 = bnot(trig)*r0 + trig * rand(10)/10;\n' + 'g0 = bnot(trig)*g0 + trig * rand(10)/10;\n' + 'b0 = bnot(trig)*b0 + trig * rand(10)/10;\n' + 'r = r0;\n' + ' b = b0;\n' + ' g = g0;\n' + 'r2 = 0;\n' + ' b2 = 0;\n' + ' g2 = 0;\n' + 'a= 1;\n' + ' a2 = .3;'),

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
			tex_zoom : 0.609857,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.038857,
			x : 0.503,
			y : 0.5,
			ang : 0.0,
			sides : 44.0,
			border_r : 0.5,
			},
		'init_eqs' : function(m) {
m.q21 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = div(rand(50),50);
m.y = (0.5-div((0*rand(15)),200));
m.r = 0.4;
m.g = 0.6;
m.b = 1;
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
m.a = Math.min(div(m.q21,2), 0.9);
m.rad = div((m.a*(0.1+Math.abs((m.x-0.5)))),2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = rand(50)/50;\n' + 'y = .5 - 0*rand(15)/200;\n' + 'r = .4;\n' + 'g = .6;\n' + 'b = 1;\n' + 'r2 = r;\n' + 'g2 = g;\n' + 'b2 = b;\n' + 'a = min(q21/2 ,.9);\n' + 'rad = a * (.1+abs(x-.5))/2 ;'),

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
			tex_zoom : 0.499805,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.7,
			rad : 0.01,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.2,
			},
		'init_eqs' : function(m) {
m.q2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = (m.q2+0.02);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad = q2+.02;'),

		}
],
	'warp' : ('highp float xlat_mutabledx;\n' + 'highp float xlat_mutabledy;\n' + 'highp vec2 xlat_mutableuv2;\n' + 'highp vec2 xlat_mutablezz;\n' + 'shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 crisp2_2;\n' + '   vec3 crisp_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.y = 0.0;\n' + '  tmpvar_4.x = texsize.w;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = 0.0;\n' + '  tmpvar_5.y = texsize.z;\n' + '  xlat_mutablezz = ((uv * texsize.xy) * 0.01);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = (cos((xlat_mutablezz.y * _qa.x)) * sin(-(xlat_mutablezz.y)));\n' + '  tmpvar_6.y = (sin(xlat_mutablezz.x) * cos((xlat_mutablezz.y * _qa.y)));\n' + '  uv_1 = (uv - ((tmpvar_6 * texsize.zw) * (8.0 + \n' + '    (6.0 * _qc.z)\n' + '  )));\n' + '  xlat_mutableuv2 = (((uv_1 / 2.0) * _qg.z) / 4.0);\n' + '   vec2 P_7;\n' + '  P_7 = (xlat_mutableuv2 + tmpvar_4);\n' + '   vec2 P_8;\n' + '  P_8 = (xlat_mutableuv2 - tmpvar_4);\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = dot ((texture2D (sampler_main, P_7).xyz - texture2D (sampler_main, P_8).xyz), vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledx = tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (xlat_mutableuv2 + tmpvar_5);\n' + '   vec2 P_11;\n' + '  P_11 = (xlat_mutableuv2 - tmpvar_5);\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = dot ((texture2D (sampler_main, P_10).xyz - texture2D (sampler_main, P_11).xyz), vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledy = tmpvar_12;\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = (0.15 + (0.1 * _qg.w));\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = (xlat_mutableuv2 + (time / 100.0));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_noise_hq, tmpvar_14);\n' + '  xlat_mutabledx = (xlat_mutabledx + (tmpvar_13 * (tmpvar_15.x - 0.5)));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_noise_hq, tmpvar_14);\n' + '  xlat_mutabledy = (xlat_mutabledy + (tmpvar_13 * (tmpvar_16.y - 0.5)));\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = xlat_mutabledx;\n' + '  tmpvar_17.y = xlat_mutabledy;\n' + '  xlat_mutablezz = tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv_1 + (tmpvar_17 * 0.04));\n' + '   vec3 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_main, P_18).xyz;\n' + '  crisp_3 = tmpvar_19;\n' + '   vec3 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_main, uv_1).xyz;\n' + '  crisp2_2 = tmpvar_20;\n' + '  crisp_3 = (crisp_3 + crisp2_2);\n' + '  crisp_3 = (crisp_3 * 0.5);\n' + '  crisp_3 = (crisp_3 + ((0.05 * \n' + '    (0.9 + (0.1 * roam_cos))\n' + '  .xyz) - (\n' + '    sqrt(dot (tmpvar_17, tmpvar_17))\n' + '   * 0.3)));\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21.w = 1.0;\n' + '  tmpvar_21.xyz = ((crisp_3 * 0.97) - 0.015);\n' + '  vec4 ret4 = tmpvar_21;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec2 xlat_mutabledz;\n' + 'highp vec3 xlat_mutableneu;\n' + 'highp vec3 xlat_mutableret1;\n' + 'highp vec2 xlat_mutableuv3;\n' + 'shader_body {\n' + '   vec2 uv2_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2.y = 0.0;\n' + '  tmpvar_2.x = texsize.z;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3.x = 0.0;\n' + '  tmpvar_3.y = texsize.w;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + tmpvar_2);\n' + '   vec2 P_5;\n' + '  P_5 = (uv - tmpvar_2);\n' + '   float tmpvar_6;\n' + '  tmpvar_6 = dot ((texture2D (sampler_main, P_4).xyz - texture2D (sampler_main, P_5).xyz), vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.x = tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv + tmpvar_3);\n' + '   vec2 P_8;\n' + '  P_8 = (uv - tmpvar_3);\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = dot ((texture2D (sampler_main, P_7).xyz - texture2D (sampler_main, P_8).xyz), vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.y = tmpvar_9;\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv + (0.1 * xlat_mutabledz));\n' + '  tmpvar_10 = texture2D (sampler_main, P_11);\n' + '  uv2_1 = (uv - 0.5);\n' + '  xlat_mutableuv3 = ((0.2 * uv2_1) + 0.5);\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = (time / 2.0);\n' + '  xlat_mutableuv3 = ((0.2 * cos(\n' + '    ((42.0 * fract(xlat_mutableuv3)) + tmpvar_12)\n' + '  )) + (99.0 * xlat_mutabledz));\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = clamp ((0.01 / sqrt(\n' + '    dot (xlat_mutableuv3, xlat_mutableuv3)\n' + '  )), 0.0, 1.0);\n' + '  xlat_mutableneu = ((0.1 * vec3(tmpvar_13)) + (0.9 * dot (vec3(tmpvar_13), vec3(0.32, 0.49, 0.29))));\n' + '  xlat_mutableret1 = max (vec3(0.0, 0.0, 0.0), (xlat_mutableneu * 1.252262));\n' + '  xlat_mutableuv3 = ((0.2 * uv2_1) + 0.5);\n' + '  xlat_mutableuv3 = ((0.2 * cos(\n' + '    ((42.0 * fract(xlat_mutableuv3)) + tmpvar_12)\n' + '  )) + (99.0 * xlat_mutabledz));\n' + '   float tmpvar_14;\n' + '  tmpvar_14 = clamp ((0.01 / sqrt(\n' + '    dot (xlat_mutableuv3, xlat_mutableuv3)\n' + '  )), 0.0, 1.0);\n' + '  xlat_mutableneu = ((0.1 * vec3(tmpvar_14)) + (0.9 * dot (vec3(tmpvar_14), vec3(0.32, 0.49, 0.29))));\n' + '  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * 1.252262));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 1.0;\n' + '  tmpvar_15.xyz = (xlat_mutableret1 + clamp ((\n' + '    (16.0 * ((0.5 * tmpvar_10.xyz) + 0.01))\n' + '   * \n' + '    (0.1 + xlat_mutableret1)\n' + '  ), 0.0, 1.0));\n' + '  vec4 ret4 = tmpvar_15;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('dec_med = pow (0.9, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .2+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %8;\n' + 'index2 = (index2 + is_beat*bnot(index))%2;\n' + 'index3 = (index3 + is_beat*bnot(index)*bnot(index2))%3;\n' + 'monitor = index4;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = bass + mid + treb;\n' + 'q11 = min(q22,3);\n' + 'k1 =  is_beat*equal(index,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'rott = p2 * 3.14159265359/2;\n' + 'q27 = 8-index;\n' + 'q28 = index2;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'zoom = 1.0 + .02*q1;\n' + 'rot = .01*q2;\n' + 'dx = .0*index;\n' + 'wave_a = 0;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
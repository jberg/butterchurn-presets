define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.780001,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 25.599995,
		warpscale : 2.0067,
		brighten : 0.0,
		mv_y : 9.600006,
		wave_scale : 0.958178,
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
		b1x : 0.6999,
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
		ob_size : 0.06,
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
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.32,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 1.0,
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
m.oo = 0;
m.uu = 0;
m.index3 = 0;
m.p1 = 0;
m.q2 = 0;
m.p2 = 0;
m.q3 = 0;
m.ready = 0;
m.q4 = 0;
m.k1 = 0;
m.movex = 0;
m.is_beat2 = 0;
m.movez = 0;
m.is_beat = 0;
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
m.q19 = 0;
m.t0 = 0;
m.rott = 0;
m.dec_slow = 0;
m.peak = 0;
m.index4 = rand(2);
m.index3 = rand(4);
m.oo = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.9, div(30,m.fps));
m.dec_slow = pow(0.96, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.5+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),4);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),6);
m.index3 = mod((m.index3+((m.is_beat*bnot(m.index))*bnot(m.index2))),4);
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.q24 = m.is_beat;
m.q26 = ((m.bass+m.mid)+m.treb);
m.ready = ((m.is_beat*bnot(m.ready))+(bnot(m.is_beat2)*m.ready));
m.is_beat2 = (m.ready*above(m.time, (m.t0+0.2)));
m.q19 = m.is_beat2;
m.k1 = (m.is_beat*equal(m.index, 0));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.rott = div((m.p2*3.14159265359),4);
m.q27 = (m.index+1);
m.q28 = m.index2;
m.q29 = ((m.index3*4)+1);
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.movez = (m.movez+div((0.01*30),m.fps));
m.q31 = m.movez;
m.movex = (m.movex+(div((0.01*30),m.fps)*m.q2));
m.q32 = m.movex;
m.uu = ((m.dec_slow*m.uu)+((1-m.dec_slow)*equal(m.index2, 0)));
m.rot = (0.1*m.uu);
m.oo = ((m.dec_slow*m.oo)+((1-m.dec_slow)*below(m.index2, 3)));
m.mv_a = (0.1*m.oo);
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
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.2,
			smoothing : 0.1,
			thick : 1.0,
			sep : 20.0,
			},
		'init_eqs' : function(m) {
m.val = 0;
m.k1 = 0;
m.t2 = 0;

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
m.y = ((m.val*(0.25-((m.sample-0.5)*(m.sample-0.5))))+0.5);
m.k1 = mod((10*m.bass_att),4);
m.r = 0.8;
m.g = 0.8;
m.b = 1;
m.a = bnot(m.k1);
m.a = 0.1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t2 = t2 + bass_att;'),
		'point_eqs_str' : ('x = .5 + sample*((100*sample)%2-.5);\n' + 'k1 = (100*sample)%4;\n' + 'x = sample ;\n' + 'val = value1;\n' + 'y = val * (.25-(sample-.5)*(sample-.5)) + .5;\n' + 'k1 = (10*bass_att)%4;\n' + 'r = .8;\n' + ' g = .8;\n' + ' b = 1;\n' + 'a = bnot(k1);\n' + ' a=.1;'),

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
			a : 0.5,
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
			a2 : 0.0,
			r : 0.5,
			border_g : 1.0,
			rad : 0.040123,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.4*Math.sin(div(m.time,3))));
m.y = (0.5+(0.4*Math.sin(div(m.time,4))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = .5+.4*sin(time/3);\n' + 'y = .5+.4*sin(time/4);'),

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
m.x0 = (m.x0+div((0.3*m.q1),m.fps));
m.y0 = (m.y0+div((0.3*m.q2),m.fps));
m.x0 = (m.x0-Math.floor(m.x0));
m.y0 = (m.y0-Math.floor(m.y0));
m.x = m.x0;
m.y = m.y0;
m.rad0 = ((m.rad0*bnot(m.trig))+(m.trig*(0.01+div(rand(100),800))));
m.rad = m.rad0;
m.r0 = ((bnot(m.trig)*m.r0)+div((m.trig*rand(10)),10));
m.g0 = ((bnot(m.trig)*m.g0)+div((m.trig*rand(10)),10));
m.b0 = ((bnot(m.trig)*m.b0)+div((m.trig*rand(10)),10));
m.r = m.r0;
m.b = m.b0;
m.g = m.g0;
m.r2 = m.b;
m.b2 = m.g;
m.g2 = m.r;
m.a = 0.4;
m.a2 = 0.0;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trig = q24;\n' + 'x0 = x0*bnot(trig) + trig*(.5+ rand(100)/200);\n' + 'y0 = y0*bnot(trig) + trig*(.5+ rand(100)/200);\n' + 'x0 = x0 + .3*q1/fps;\n' + 'y0 = y0 + .3*q2/fps;\n' + 'x0 = x0 - int(x0);\n' + 'y0 = y0 - int(y0);\n' + 'x = x0;\n' + ' y = y0;\n' + 'rad0 = rad0*bnot(trig) + trig*(.01+rand(100)/800);\n' + 'rad = rad0;\n' + 'r0 = bnot(trig)*r0 + trig * rand(10)/10;\n' + 'g0 = bnot(trig)*g0 + trig * rand(10)/10;\n' + 'b0 = bnot(trig)*b0 + trig * rand(10)/10;\n' + 'r = r0;\n' + ' b = b0;\n' + ' g = g0;\n' + 'r2 = b;\n' + ' b2 = g;\n' + ' g2 = r;\n' + 'a= .4;\n' + ' a2 = .0;'),

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
m.q1 = 0;
m.q2 = 0;
m.g0 = 0;
m.b0 = 0;
m.q24 = 0;
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
m.x0 = (m.x0+div((0.3*m.q1),m.fps));
m.y0 = (m.y0+div((0.3*m.q2),m.fps));
m.x0 = (m.x0-Math.floor(m.x0));
m.y0 = (m.y0-Math.floor(m.y0));
m.x = m.x0;
m.y = m.y0;
m.rad0 = ((m.rad0*bnot(m.trig))+(m.trig*(0.04+div(rand(100),800))));
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
m.a = 0.4;
m.a2 = 0.0;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trig = q24;\n' + 'x0 = x0*bnot(trig) + trig*(.5+ rand(100)/200);\n' + 'y0 = y0*bnot(trig) + trig*(.5+ rand(100)/200);\n' + 'x0 = x0 + .3*q1/fps;\n' + 'y0 = y0 + .3*q2/fps;\n' + 'x0 = x0 - int(x0);\n' + 'y0 = y0 - int(y0);\n' + 'x = x0;\n' + ' y = y0;\n' + 'rad0 = rad0*bnot(trig) + trig*(.04+rand(100)/800);\n' + 'rad = rad0;\n' + 'r0 = bnot(trig)*r0 + trig * rand(10)/10;\n' + 'g0 = bnot(trig)*g0 + trig * rand(10)/10;\n' + 'b0 = bnot(trig)*b0 + trig * rand(10)/10;\n' + 'r = r0;\n' + ' b = b0;\n' + ' g = g0;\n' + 'r2 = 0;\n' + ' b2 = 0;\n' + ' g2 = 0;\n' + 'a= .4;\n' + ' a2 = .0;'),

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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 crisp_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = ((uv * texsize.xy) * (0.01 * _qg.w));\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = (cos((tmpvar_3.y * _qa.x)) * sin(-(tmpvar_3.y)));\n' + '  tmpvar_4.y = (sin(tmpvar_3.x) * cos((tmpvar_3.y * _qa.y)));\n' + '  uv_1 = (uv - ((tmpvar_4 * texsize.zw) * 18.0));\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, uv_1).xyz;\n' + '  crisp_2 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ((crisp_2 * 0.99) - 0.01);\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('uniform highp vec3 neu;\n' + 'uniform highp vec2 uv3;\n' + 'uniform highp vec2 uv4;\n' + 'highp vec2 xlat_mutabledz;\n' + 'highp vec3 xlat_mutableneu;\n' + 'highp vec3 xlat_mutableret1;\n' + 'highp vec2 xlat_mutableuv3;\n' + 'highp vec2 xlat_mutableuv4;\n' + 'shader_body {\n' + '  xlat_mutableneu = neu;\n' + '  xlat_mutableuv3 = uv3;\n' + '  xlat_mutableuv4 = uv4;\n' + '   vec2 uv_1;\n' + '   vec3 clouds_2;\n' + '   float inten_4;\n' + '   float dist_5;\n' + '   vec3 ret_6;\n' + '  uv_1 = (uv - 0.5);\n' + '  xlat_mutabledz = vec2(0.0, 0.0);\n' + '  dist_5 = 1.0;\n' + '  inten_4 = 1.0;\n' + '  xlat_mutableret1 = vec3(0.0, 0.0, 0.0);\n' + '  for ( float n_3 = 0.0; n_3 <= 3.0; n_3 += 1.0) {\n' + '    dist_5 = (1.0 - fract((\n' + '      (0.2 * n_3)\n' + '     + \n' + '      (time / 4.0)\n' + '    )));\n' + '    inten_4 = ((sqrt(dist_5) * (1.0 - dist_5)) * 2.0);\n' + '     vec2 tmpvar_7;\n' + '    tmpvar_7.y = 0.0;\n' + '    tmpvar_7.x = (time / 8.0);\n' + '    xlat_mutableuv3 = (((\n' + '      (2.0 * uv_1)\n' + '     * dist_5) + 0.4) + tmpvar_7);\n' + '     vec4 tmpvar_8;\n' + '    tmpvar_8 = texture2D (sampler_main, xlat_mutableuv3);\n' + '    xlat_mutableneu = tmpvar_8.xyz;\n' + '     vec2 tmpvar_9;\n' + '    tmpvar_9.y = 0.0;\n' + '    tmpvar_9.x = texsize.z;\n' + '     vec2 P_10;\n' + '    P_10 = (xlat_mutableuv3 + tmpvar_9);\n' + '     vec2 tmpvar_11;\n' + '    tmpvar_11.y = 0.0;\n' + '    tmpvar_11.x = texsize.z;\n' + '     vec2 P_12;\n' + '    P_12 = (xlat_mutableuv3 - tmpvar_11);\n' + '     float tmpvar_13;\n' + '    tmpvar_13 = dot ((texture2D (sampler_main, P_10).xyz - texture2D (sampler_main, P_12).xyz), vec3(0.32, 0.49, 0.29));\n' + '    xlat_mutabledz.x = (xlat_mutabledz.x + (inten_4 * tmpvar_13));\n' + '     vec2 tmpvar_14;\n' + '    tmpvar_14.x = 0.0;\n' + '    tmpvar_14.y = texsize.w;\n' + '     vec2 P_15;\n' + '    P_15 = (xlat_mutableuv3 + tmpvar_14);\n' + '     vec2 tmpvar_16;\n' + '    tmpvar_16.x = 0.0;\n' + '    tmpvar_16.y = texsize.w;\n' + '     vec2 P_17;\n' + '    P_17 = (xlat_mutableuv3 - tmpvar_16);\n' + '     float tmpvar_18;\n' + '    tmpvar_18 = dot ((texture2D (sampler_main, P_15).xyz - texture2D (sampler_main, P_17).xyz), vec3(0.32, 0.49, 0.29));\n' + '    xlat_mutabledz.y = (xlat_mutabledz.y + (inten_4 * tmpvar_18));\n' + '    xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_4));\n' + '  };\n' + '  uv_1 = (uv_1 + (xlat_mutabledz * 14.0));\n' + '  xlat_mutableuv4 = (uv_1 - vec2(0.2, -0.1));\n' + '   float tmpvar_19;\n' + '  tmpvar_19 = (0.5 * clamp ((1.0/(\n' + '    (abs(uv_1.y) + 0.1)\n' + '  )), 0.0, 12.0));\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20.x = (uv_1.x * tmpvar_19);\n' + '  tmpvar_20.y = tmpvar_19;\n' + '   vec2 P_21;\n' + '  P_21 = (tmpvar_20 + (0.04 * time));\n' + '   vec3 tmpvar_22;\n' + '  tmpvar_22 = vec3(dot (texture2D (sampler_noise_hq, P_21), vec4(0.32, 0.49, 0.29, 0.0)));\n' + '  clouds_2 = tmpvar_22;\n' + '  clouds_2 = (clouds_2 * ((\n' + '    clamp ((1.0 - (12.0 * uv_1.y)), 0.0, 1.0)\n' + '   * 0.1) / (0.03 + \n' + '    sqrt(dot (xlat_mutableuv4, xlat_mutableuv4))\n' + '  )));\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23.xy = vec2(0.0, 0.0);\n' + '  tmpvar_23.z = clamp ((1.0 - (3.0 * uv_1.y)), 0.0, 1.0);\n' + '  ret_6 = (vec3(0.0, 0.1, 0.1) + (0.1 * tmpvar_23));\n' + '  ret_6 = (ret_6 + clouds_2);\n' + '  ret_6 = (ret_6 + ((0.4 * xlat_mutableret1) + (xlat_mutableret1 * _qf.y)));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24.w = 1.0;\n' + '  tmpvar_24.xyz = ret_6;\n' + '  vec4 ret4 = tmpvar_24;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('index4 = rand(2);\n' + 'index3 = rand(4);\n' + 'oo = 0;'),
	'frame_eqs_str' : ('dec_med = pow (0.9, 30/fps);\n' + 'dec_slow = pow (0.96, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %4;\n' + 'index2 = (index2 + is_beat*bnot(index))%6;\n' + 'index3 = (index3 + is_beat*bnot(index)*bnot(index2))%4;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = bass + mid + treb;\n' + 'ready = is_beat * bnot(ready) + bnot(is_beat2)*ready;\n' + 'is_beat2 = ready * above (time, t0+.2);\n' + 'q19 = is_beat2;\n' + 'k1 =  is_beat*equal(index,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'rott = p2 * 3.14159265359/4;\n' + 'q27 = index+1;\n' + 'q28 = index2;\n' + 'q29 = index3*4+1;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'movez = movez + .01*30/fps ;\n' + 'q31 = movez;\n' + 'movex = movex +.01*30/fps * q2;\n' + 'q32 = movex;\n' + 'uu = dec_slow*uu + (1-dec_slow)*equal(index2,0);\n' + 'rot = .1*uu;\n' + 'oo = dec_slow*oo + (1-dec_slow)*below(index2,3);\n' + 'mv_a =.1* oo;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
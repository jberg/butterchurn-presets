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
		wave_scale : 5.552,
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
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
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
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : -1.0,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.5,
		rating : 5.0,
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
m.p2 = 0;
m.q3 = 0;
m.vx = 0;
m.q4 = 0;
m.vy = 0;
m.q5 = 0;
m.sw = 0;
m.q6 = 0;
m.k1 = 0;
m.q7 = 0;
m.k2 = 0;
m.q8 = 0;
m.q9 = 0;
m.is_beat = 0;
m.m = 0;
m.dec_med = 0;
m.q20 = 0;
m.dt = 0;
m.q10 = 0;
m.q21 = 0;
m.q22 = 0;
m.index = 0;
m.q23 = 0;
m.avg = 0;
m.yk = 0;
m.vol = 0;
m.q24 = 0;
m.xk = 0;
m.q26 = 0;
m.q27 = 0;
m.beat = 0;
m.ax = 0;
m.q28 = 0;
m.y0 = 0;
m.ay = 0;
m.q29 = 0;
m.x0 = 0;
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
m.dec_slow = pow(0.998, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.5+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),8);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),2);
m.index3 = mod((m.index3+((m.is_beat*bnot(m.index))*bnot(m.index2))),2);
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.q24 = m.is_beat;
m.vol = (m.bass_att+m.treb_att);
m.v2 = ((m.v2*m.dec_med)+(m.vol*(1-m.dec_med)));
m.q26 = Math.max(Math.atan((m.vol-m.v2)), 0);
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
m.q5 = Math.cos(div(m.time,4));
m.q6 = -Math.sin(div(m.time,4));
m.q7 = -m.q6;
m.q8 = m.q5;
m.zoom = 1;
m.rot = -0;
m.dt = div((0.1*30),m.fps);
m.m = 1;
m.x0 = 0.0;
m.y0 = 0;
m.x0 = div(m.q1,4);
m.y0 = div(m.q2,4);
m.ax = -(m.xk-m.x0);
m.ay = -(m.yk-m.y0);
m.monitor = m.index3;
m.vx = ((m.vx*m.dec_slow)+(m.ax*m.dt));
m.vy = ((m.vy*m.dec_slow)+(m.ay*m.dt));
m.xk = (m.xk+(m.vx*m.dt));
m.yk = (m.yk+(m.vy*m.dt));
m.q9 = m.xk;
m.q10 = m.yk;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.4,
			g : 0.6,
			scaling : 0.5033,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.angle = 0;
m.rad = 0;
m.x0 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x0 = (0.5+(0.4*Math.sin(div(m.time,2))));
m.angle = (div(rand(1000),1000)*6.28);
m.rad = div(rand(1000),1000);
m.rad = (m.rad*m.rad);
m.x = (m.x0+((0.1*m.rad)*Math.sin(m.angle)));
m.y = (0.5+((0.1*m.rad)*Math.cos(m.angle)));
m.a = (1-m.rad);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x0 = .5 + .4 * sin(time/2);\n' + 'angle = rand(1000)/1000*6.28;\n' + 'rad =  rand(1000)/1000;\n' + 'rad = rad * rad;\n' + 'x = x0 + .1*rad*sin(angle);\n' + 'y = .5 + .1*rad*cos(angle);\n' + 'a = 1-rad;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.trel = 0;
m.k1 = 0;
m.ampl = 0;
m.f1 = 0;
m.f2 = 0;
m.exc = 0;
m.q11 = 0;
m.q12 = 0;
m.q13 = 0;
m.q14 = 0;
m.q15 = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = ['t1'];
			return m;
		},
		'frame_eqs' : function(m) {
m.trel = (m.q11-0.0);
m.t1 = Math.floor(m.trel);
m.t2 = (m.trel-Math.floor(m.trel));
		return m;
	},
		'point_eqs' : function(m) {
m.k1 = mod((m.sample*512),8);
m.t1 = ((equal(m.k1, 0)*mod(((m.t1*61)+27),4096))+((1-equal(m.k1, 0))*m.t1));
m.exc = (1+rand(5));
m.ampl = ((m.sample*sqrt(m.t2))*(1+m.exc));
m.f1 = ((m.q14*m.ampl)*Math.sin(div((m.t1*6.28),4096)));
m.f2 = ((m.q14*m.ampl)*Math.cos(div((m.t1*6.28),4096)));
m.x = (m.q12+(m.k1*m.f1));
m.y = (m.q13+(m.k1*m.f2));
m.a = (equal(m.k1, 6)+equal(m.k1, 0));
m.r = 1;
m.b = (equal(m.k1, 0)+0.5);
m.g = (0.8*(1+(0.6*equal(m.k1, 0))));
m.a = ((m.a*m.q15)*(1-((0*m.t2)*m.t2)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trel = q11-.0;\n' + 't1 = int(trel);\n' + 't2 = trel - int(trel);'),
		'point_eqs_str' : ('k1 = (sample*512) % 8;\n' + 't1 = equal (k1,0)*((t1 * 61 + 27) % 4096)+ (1-equal(k1,0))*t1;\n' + 'exc = 1+rand(5);\n' + 'ampl = sample*sqrt(t2) * (1+exc);\n' + 'f1 = q14*ampl* sin(t1*6.28/4096);\n' + 'f2 = q14*ampl* cos(t1*6.28/4096);\n' + 'x = q12 + k1* f1 ;\n' + 'y = q13 + k1* f2;\n' + 'a = equal(k1,6) + equal (k1,0);\n' + 'r = 1;\n' + 'b = equal (k1,0) + .5;\n' + 'g = .8* (1+.6*equal (k1,0))  ;\n' + 'a = a * q15 * (1-0*t2*t2);'),

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
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.trel = 0;
m.k1 = 0;
m.ampl = 0;
m.f1 = 0;
m.f2 = 0;
m.q11 = 0;
m.q12 = 0;
m.q13 = 0;
m.q14 = 0;
m.q15 = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = ['t1'];
			return m;
		},
		'frame_eqs' : function(m) {
m.trel = (m.q11-0.33);
m.t1 = Math.floor(m.trel);
m.t2 = (m.trel-Math.floor(m.trel));
		return m;
	},
		'point_eqs' : function(m) {
m.k1 = mod((m.sample*512),8);
m.t1 = ((equal(m.k1, 0)*mod(((m.t1*61)+27),4096))+((1-equal(m.k1, 0))*m.t1));
m.ampl = (m.sample*sqrt(m.t2));
m.f1 = ((m.q14*m.ampl)*Math.sin(div((m.t1*6.28),4096)));
m.f2 = ((m.q14*m.ampl)*Math.cos(div((m.t1*6.28),4096)));
m.x = (m.q12+(m.k1*m.f1));
m.y = (m.q13+(m.k1*m.f2));
m.a = (equal(m.k1, 6)+equal(m.k1, 0));
m.r = 1;
m.b = (equal(m.k1, 0)+0.5);
m.g = (0.6*(1+(0.6*equal(m.k1, 0))));
m.a = ((m.a*m.q15)*(1-((0*m.t2)*m.t2)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trel = q11-.33;\n' + 't1 = int(trel);\n' + 't2 = trel - int(trel);'),
		'point_eqs_str' : ('k1 = (sample*512) % 8;\n' + 't1 = equal (k1,0)*((t1 * 61 + 27) % 4096)+ (1-equal(k1,0))*t1;\n' + 'ampl = sample*sqrt(t2);\n' + 'f1 = q14*ampl* sin(t1*6.28/4096);\n' + 'f2 = q14*ampl* cos(t1*6.28/4096);\n' + 'x = q12 + k1* f1 ;\n' + 'y = q13 + k1* f2;\n' + 'a = equal(k1,6) + equal (k1,0);\n' + 'r = 1;\n' + 'b = equal (k1,0) + .5;\n' + 'g = .6* (1+.6*equal (k1,0));\n' + 'a = a * q15 * (1-0*t2*t2);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.trel = 0;
m.k1 = 0;
m.ampl = 0;
m.f1 = 0;
m.f2 = 0;
m.q11 = 0;
m.q12 = 0;
m.q13 = 0;
m.q14 = 0;
m.q15 = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = ['t1'];
			return m;
		},
		'frame_eqs' : function(m) {
m.trel = (m.q11-0.66);
m.t1 = Math.floor(m.trel);
m.t2 = (m.trel-Math.floor(m.trel));
		return m;
	},
		'point_eqs' : function(m) {
m.k1 = mod((m.sample*512),8);
m.t1 = ((equal(m.k1, 0)*mod(((m.t1*61)+27),4096))+((1-equal(m.k1, 0))*m.t1));
m.ampl = (m.sample*sqrt(m.t2));
m.f1 = ((m.q14*m.ampl)*Math.sin(div((m.t1*6.28),4096)));
m.f2 = ((m.q14*m.ampl)*Math.cos(div((m.t1*6.28),4096)));
m.x = (m.q12+(m.k1*m.f1));
m.y = (m.q13+(m.k1*m.f2));
m.a = (equal(m.k1, 6)+equal(m.k1, 0));
m.r = 1;
m.b = equal(m.k1, 0);
m.g = (0.6*(1+(0.6*equal(m.k1, 0))));
m.a = ((m.a*m.q15)*(1-((0*m.t2)*m.t2)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trel = q11-.66;\n' + 't1 = int(trel);\n' + 't2 = trel - int(trel);'),
		'point_eqs_str' : ('k1 = (sample*512) % 8;\n' + 't1 = equal (k1,0)*((t1 * 61 + 27) % 4096)+ (1-equal(k1,0))*t1;\n' + 'ampl = sample*sqrt(t2);\n' + 'f1 = q14*ampl* sin(t1*6.28/4096);\n' + 'f2 = q14*ampl* cos(t1*6.28/4096);\n' + 'x = q12 + k1* f1 ;\n' + 'y = q13 + k1* f2;\n' + 'a = equal(k1,6) + equal (k1,0);\n' + 'r = 1;\n' + 'b = equal (k1,0);\n' + 'g = .6* (1+.6*equal (k1,0));\n' + 'a = a * q15 * (1-0*t2*t2);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.9,
			a : 1.0,
			enabled : 1.0,
			b : 0.5,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.9,
			tex_zoom : 1.051004,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 0.8,
			border_g : 1.0,
			rad : 0.267799,
			x : 0.46,
			y : 0.38,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q9 = 0;
m.q10 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.1*m.q1));
m.y = (0.5+(0.1*m.q2));
m.x = (0.5-div(m.q9,5));
m.y = (0.6+div(m.q10,5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = .5 + .1 * q1;\n' + 'y = .5 + .1 * q2;\n' + 'x = .5-q9/5;\n' + 'y = .6+q10/5;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 3.14159,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.711049,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.11045,
			x : 0.13,
			y : 0.19,
			ang : 0.0,
			sides : 100.0,
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
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.2,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.2,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
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


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.05+div(rand(900),1000));
m.y = (0.05+div(rand(900),1000));
m.ang = div(rand(320),100);
m.a = 0.4;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.05 + rand(900)/1000;\n' + 'y = 0.05 + rand(900)/1000;\n' + 'ang = rand(320)/100;\n' + 'a = .4;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.02,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.18717,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 36.0,
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

		}
],
	'warp' : ('highp vec2 xlat_mutableball;\n' + 'highp vec2 xlat_mutablers;\n' + 'highp vec2 xlat_mutableuv1;shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 crisp_2;\n' + '   vec2 uv2_3;\n' + '  xlat_mutableuv1 = ((uv_orig - 0.5) * aspect.xy);\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = ((18.0 * sqrt(\n' + '    dot (xlat_mutableuv1, xlat_mutableuv1)\n' + '  )) + time);\n' + '  xlat_mutablers = (clamp ((\n' + '    (sin(tmpvar_4) / cos(tmpvar_4))\n' + '   * \n' + '    normalize(xlat_mutableuv1)\n' + '  ), vec2(-5.0, -5.0), vec2(5.0, 5.0)) / 2.0);\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = ((_qh.x * 16.0) + 1.0);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (_qc.xy * sqrt(tmpvar_5));\n' + '  xlat_mutableball = (sin((xlat_mutableuv1 * tmpvar_5)) - tmpvar_6);\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (sqrt(dot (xlat_mutableball, xlat_mutableball)) / ((0.035 * \n' + '    pow (tmpvar_5, 0.9)\n' + '  ) * (1.0 + \n' + '    sqrt(dot (tmpvar_6, tmpvar_6))\n' + '  )));\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = clamp ((sign(\n' + '    (1.0 - tmpvar_7)\n' + '  ) * sqrt(\n' + '    (1.0 - tmpvar_7)\n' + '  )), 0.0, 1.0);\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = float((tmpvar_8 >= 0.001));\n' + '  xlat_mutablers = ((_qg.w * xlat_mutablers) + ((1.0 - _qg.w) * xlat_mutablers.yx));\n' + '  uv_1 = (uv_orig + ((\n' + '    ((1.0 - tmpvar_9) * 0.03)\n' + '   * xlat_mutablers.yx) + (\n' + '    ((0.6 * tmpvar_9) * tmpvar_8)\n' + '   * \n' + '    normalize(xlat_mutableball)\n' + '  )));\n' + '   mat2 tmpvar_10;\n' + '  tmpvar_10[0] = _qb.xy;\n' + '  tmpvar_10[1] = _qb.zw;\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = sin((xlat_mutableuv1.y * 16.0));\n' + '  tmpvar_11.y = sin((xlat_mutableuv1.x * 16.0));\n' + '  uv2_3 = (((0.7 * xlat_mutableuv1) + (0.3 * tmpvar_11)) * 0.2);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = fract(uv_1);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_blur1, tmpvar_12);\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_main, uv_1).xyz;\n' + '  crisp_2 = tmpvar_14;\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 1.0;\n' + '  tmpvar_15.xyz = (((\n' + '    ((crisp_2 - ((\n' + '      (tmpvar_13.xyz * scale1)\n' + '     + bias1) * 0.03)) + (vec3(1.0, 0.84, 0.6) * ((0.08 * \n' + '      abs(vec3(((0.16 / (\n' + '        sqrt((xlat_mutableuv1 * tmpvar_10).x)\n' + '       + 0.002)) * rad)))\n' + '    ) - (tmpvar_8 * \n' + '      (0.2 + (0.3 * slow_roam_cos.xyz))\n' + '    ))))\n' + '   + vec3(\n' + '    (_qg.y * clamp ((0.0015 / sqrt(\n' + '      dot (uv2_3, uv2_3)\n' + '    )), 0.0, 1.0))\n' + '  )) * 0.99) - 0.018);\n' + '  vec4 ret4 = tmpvar_15;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec4 tmpvar_1;\n' + '  tmpvar_1 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_blur1, uv);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = (0.8 * (tmpvar_1.xyz + (\n' + '    (tmpvar_2.xyz * scale1)\n' + '   + bias1)));\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('vol = 0;\n' + ' p1 = 0;\n' + 'vx = .2;\n' + ' vy = -0.1;\n' + 'kx = 0;\n' + ' ky = 0;'),
	'frame_eqs_str' : ('dec_med = pow (0.96, 30/fps);\n' + 'dec_slow = pow (0.998, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %8;\n' + 'index2 = (index2 + is_beat*bnot(index))%2;\n' + 'index3 = (index3 + is_beat*bnot(index) * bnot(index2))%2;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'vol = bass_att + treb_att;\n' + 'v2 = v2 * dec_med + vol * (1-dec_med) ;\n' + 'q26 = max(atan (vol - v2),0);\n' + 'q27 = index + 1;\n' + 'sw = sw*dec_med + (1-dec_med)*(index2%2);\n' + 'q28 = sw;\n' + 'kiss = kiss*dec_med+(1-dec_med)*bnot(index2)*below(index,4);\n' + 'q29 = kiss;\n' + 'k1 =  is_beat*bnot(index);\n' + 'k2 =  is_beat*bnot(index);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'rott = p2 * 3.1416/2;\n' + 'monitor = k1;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'q5 = cos(time/4);\n' + 'q6 = -sin(time/4);\n' + 'q7 = -q6;\n' + 'q8 = q5;\n' + 'zoom = 1;\n' + 'rot = -0;\n' + 'dt = .1*30/fps;\n' + 'm = 1;\n' + 'x0 = .0;\n' + ' y0 = 0;\n' + ' x0 = q1/4;\n' + ' y0 = q2/4;\n' + 'ax = -(xk-x0);\n' + 'ay = -(yk-y0);\n' + 'monitor = index3;\n' + 'vx = vx*dec_slow + ax * dt;\n' + 'vy = vy*dec_slow + ay * dt;\n' + 'xk = xk + vx*dt;\n' + 'yk = yk + vy*dt;\n' + 'q9 = xk;\n' + ' q10 = yk;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
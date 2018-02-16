define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 0.3,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.007,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.372,
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
		wave_mode : 4.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.8,
		ib_r : 0.25,
		mv_b : 0.5,
		echo_zoom : 1.0,
		ob_size : 0.01,
		b1ed : 0.0,
		wave_smoothing : 0.0,
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
		modwavealphaend : 1.3,
		wave_mystery : 0.2,
		decay : 0.5,
		wave_a : 0.039,
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
m.p2 = 0;
m.q3 = 0;
m.p3 = 0;
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
m.q25 = 0;
m.q26 = 0;
m.q27 = 0;
m.beat = 0;
m.q28 = 0;
m.q29 = 0;
m.rot1 = 0;
m.t0 = 0;
m.rott = 0;
m.dx1 = 0;
m.dec_slow = 0;
m.peak = 0;

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
m.index = mod((m.index+m.is_beat),4);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),8);
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
m.p3 = ((m.dec_med*m.p3)+((1-m.dec_med)*m.p2));
m.rott = div((m.p3*3.1416),2);
m.rot1 = (m.rot1+m.q26);
m.q25 = (0.01*m.rot1);
m.q27 = (8-m.index);
m.q28 = m.index3;
m.dx1 = ((m.dec_med*m.dx1)+((1-m.dec_med)*bnot(m.index2)));
m.q29 = m.dx1;
m.monitor = m.q29;
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = 0;
m.dx = (0.02*m.q29);
m.zoom = 1;
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
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.k0 = 0;
m.k1 = 0;
m.k2 = 0;
m.ox = 0;
m.oy = 0;
m.ix = 0;
m.iy = 0;
m.dx = 0;
m.dy = 0;
m.sp = 0;

			m.rkeys = ['ox','oy','dx','dy'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.k0 = Math.floor((100.0*m.sample));
m.k2 = Math.floor(((100.0*m.sample)+1));
m.k1 = equal(mod(m.k0,2), 0);
m.k2 = equal(mod(m.k0,2), 1);
m.ix = (mod((100*m.value1),7)-2.5);
m.iy = (mod((100*m.value2),7)-2.5);
m.sp = (m.bass+m.treb);
m.sp = div(m.sp,3000);
m.dx = ((m.dx+(m.sp*m.ix))*0.998);
m.dy = ((m.dy+(m.sp*m.iy))*0.998);
m.ox = ((m.k1*m.dx)+((1-m.k1)*m.ox));
m.oy = ((m.k2*m.dy)+((1-m.k2)*m.oy));
m.x = (m.ox+0.5);
m.y = (m.oy+0.5);
m.r = 1;
m.g = 1;
m.b = 1;
m.a = 1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('k0 = int(100.0*sample);\n' + 'k2 = int(100.0*sample+1);\n' + 'k1 = equal(k0%2,0);\n' + 'k2 = equal(k0%2,1);\n' + 'ix = (100*value1)%7-2.5;\n' + 'iy = (100*value2)%7-2.5;\n' + 'sp = bass + treb;\n' + 'sp = sp /3000;\n' + 'dx = (dx+sp*ix) * .998;\n' + 'dy = (dy+sp*iy) * .998 ;\n' + 'ox = k1*dx + (1-k1)*ox;\n' + 'oy = k2*dy + (1-k2)*oy;\n' + 'x = ox+.5;\n' + 'y = oy+.5;\n' + 'r = 1;\n' + 'g = 1;\n' + 'b = 1;\n' + 'a = 1;'),

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
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.yang = 0;
m.xang = 0;
m.t_abs = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.t_rel = 0;
m.monitor = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (2*Math.sin(div(m.time,15)));
m.t2 = (2*Math.sin(div(m.time,11)));
m.monitor = m.time;
		return m;
	},
		'point_eqs' : function(m) {
m.t_abs = m.sample;
m.ox = Math.sin((m.t_abs*68));
m.oy = Math.cos((m.t_abs*63));
m.oz = Math.sin((m.t_abs*125));
m.r = 1;
m.g = 0.5;
m.b = 1;
m.t_rel = (m.sample-div(m.time,127));
m.t_rel = (m.t_rel-Math.floor(m.t_rel));
m.a = mod(((512*m.sample)-(m.time*2)),2);
m.a = 1;
m.xang = 0;
m.yang = m.t1;
m.zang = m.t1;
m.fov = 0.15;
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
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = 2*sin(time/15);\n' + 't2 = 2*sin(time/11);\n' + 'monitor = time;'),
		'point_eqs_str' : ('t_abs = sample ;\n' + 'ox = sin (t_abs*68);\n' + 'oy = cos (t_abs*63);\n' + 'oz = sin (t_abs*125);\n' + 'r = 1;\n' + 'g = .5 ;\n' + 'b = 1 ;\n' + 't_rel = sample - time/127;\n' + 't_rel = t_rel - int(t_rel);\n' + 'a = (512*sample-time*2)%2;\n' + 'a = 1;\n' + 'xang = 0 ;\n' + 'yang = t1;\n' + 'zang = t1;\n' + 'fov = 0.15;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'x = ox*fov/oz +0.5;\n' + 'y = oy*fov/oz + 0.5;'),

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
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.k1 = 0;
m.ampl = 0;
m.f1 = 0;
m.f2 = 0;
m.exc = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = ['t1'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.k1 = mod((m.sample*512),8);
m.t1 = ((equal(m.k1, 0)*mod(((m.t1*61)+27),4096))+((1-equal(m.k1, 0))*m.t1));
m.exc = (1+rand(5));
m.ampl = ((m.sample*sqrt(m.t2))*(1+m.exc));
m.f1 = ((m.q4*m.ampl)*Math.sin(div((m.t1*6.28),4096)));
m.f2 = ((m.q4*m.ampl)*Math.cos(div((m.t1*6.28),4096)));
m.x = (m.q2+(m.k1*m.f1));
m.y = (m.q3+(m.k1*m.f2));
m.a = (equal(m.k1, 6)+equal(m.k1, 0));
m.r = 1;
m.b = equal(m.k1, 0);
m.g = (0.6*(1+(0.6*equal(m.k1, 0))));
m.a = ((m.a*m.q5)*(1-((0*m.t2)*m.t2)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('k1 = (sample*512) % 8;\n' + 't1 = equal (k1,0)*((t1 * 61 + 27) % 4096)+ (1-equal(k1,0))*t1;\n' + 'exc = 1+rand(5);\n' + 'ampl = sample*sqrt(t2) * (1+exc);\n' + 'f1 = q4*ampl* sin(t1*6.28/4096);\n' + 'f2 = q4*ampl* cos(t1*6.28/4096);\n' + 'x = q2 + k1* f1 ;\n' + 'y = q3 + k1* f2;\n' + 'a = equal(k1,6) + equal (k1,0);\n' + 'r = 1;\n' + 'b = equal (k1,0);\n' + 'g = .6* (1+.6*equal (k1,0))  ;\n' + 'a = a * q5 * (1-0*t2*t2);'),

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
m.zang = 0;
m.yang = 0;
m.xang = 0;
m.t_abs = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.t_rel = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.t_abs = m.sample;
m.t_rel = (m.sample-div(m.time,8));
m.ox = Math.sin((m.sample*110));
m.oy = Math.cos((m.sample*110));
m.oz = (4+div(1,(m.t_rel-Math.floor(m.t_rel))));
m.r = 0.3;
m.g = 0.7;
m.b = 1;
m.a = 0.8;
m.xang = 0;
m.yang = 0;
m.zang = 0;
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
m.x = (div((m.ox*m.fov),m.oz)+0.45);
m.y = (div((m.oy*m.fov),m.oz)+0.45);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('t_abs = sample;\n' + 't_rel = sample-time/8;\n' + 'ox =  sin (sample*110) ;\n' + 'oy =  cos (sample*110);\n' + 'oz = 4+1/(t_rel - int(t_rel));\n' + 'r = .3;\n' + 'g = 0.7;\n' + 'b = 1;\n' + 'a = .8;\n' + 'xang = 0;\n' + 'yang = 0;\n' + 'zang = 0;\n' + 'fov = .5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'x = ox*fov/oz +0.45;\n' + 'y = oy*fov/oz + 0.45;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.84,
			a : 0.1,
			enabled : 0.0,
			b : 0.89,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.54,
			textured : 0.0,
			g2 : 0.93,
			tex_zoom : 0.53907,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.12634,
			x : 0.5,
			y : 0.5,
			ang : 1.5708,
			sides : 44.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.5*Math.sin(m.time)));
m.y = (0.5+(0.5*Math.sin(m.time)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = .5 + .5 * sin(time);\n' + 'y = .5 + .5 * sin(time);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.1,
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
			a2 : 0.6,
			r : 1.0,
			border_g : 0.5,
			rad : 1.99863,
			x : 0.5,
			y : 0.5,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 crisp_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (((uv - vec2(0.5, 0.5)) * texsize.xy) * 0.015);\n' + '  uv_1 = (uv + ((\n' + '    ((clamp ((\n' + '      sin(tmpvar_3)\n' + '     / \n' + '      cos(tmpvar_3)\n' + '    ), vec2(-12.0, -12.0), vec2(12.0, 12.0)) * cos((\n' + '      (4.0 * (_qa.y + 1.0))\n' + '     * tmpvar_3.yx))) * texsize.zw)\n' + '   * 4.0) * (2.0 + _qa.x)));\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_main, uv_1).xyz;\n' + '  crisp_2 = tmpvar_4;\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = (((0.995 * crisp_2) + vec3(0.01, 0.01, 0.01)) - 0.02);\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 crisp_1;\n' + '   vec2 uv3_2;\n' + '   vec2 uv2_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = ((uv - 0.5) * aspect.xy);\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = (0.1 / (sqrt(\n' + '    dot (tmpvar_4, tmpvar_4)\n' + '  ) + 0.1));\n' + '   vec2 tmpvar_6;\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (ang / 3.14);\n' + '  tmpvar_6.x = tmpvar_7;\n' + '  tmpvar_6.y = tmpvar_5;\n' + '  uv2_3.y = (tmpvar_5 + (0.1 * time));\n' + '  uv2_3.x = tmpvar_6.x;\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8.x = tmpvar_7;\n' + '  tmpvar_8.y = (tmpvar_5 * 1.5);\n' + '  uv3_2.y = (tmpvar_8.y + (0.08 * time));\n' + '  uv3_2.x = (tmpvar_7 + (time / 32.0));\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = fract(uv2_3);\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = fract(uv3_2);\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = ((2.0 * texture2D (sampler_main, tmpvar_9).xyz) + texture2D (sampler_main, tmpvar_10).xyz);\n' + '  crisp_1 = tmpvar_11;\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = fract(uv2_3);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_blur2, tmpvar_12);\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = fract(uv3_2);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur2, tmpvar_14);\n' + '  crisp_1 = (crisp_1 + ((2.0 * \n' + '    ((tmpvar_13.xyz * scale2) + bias2)\n' + '  ) + (2.0 * \n' + '    ((tmpvar_15.xyz * scale2) + bias2)\n' + '  )));\n' + '  crisp_1 = ((3.0 * crisp_1) * rad);\n' + '   float tmpvar_16;\n' + '  tmpvar_16 = clamp ((1.0 - (4.0 * rad)), 0.0, 1.0);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18.w = 1.0;\n' + '  tmpvar_18.xyz = ((crisp_1 + (\n' + '    ((vec3(0.0, 0.0, 1.0) * uv.y) * pow ((1.0 - rad), 8.0))\n' + '   * tmpvar_16)) + (tmpvar_16 * tmpvar_17.xyz));\n' + '  vec4 ret4 = tmpvar_18;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('dec_med = pow (0.96, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %4;\n' + 'index2 = (index2 + is_beat*bnot(index))%8;\n' + 'index3 = (index3 + is_beat*bnot(index)*bnot(index2))%3;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = bass + mid + treb;\n' + 'k1 =  is_beat*equal(index,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'p3 = dec_med * p3+ (1-dec_med)*p2;\n' + 'rott = p3*3.1416/2;\n' + 'rot1 = rot1 + q26;\n' + 'q25 = .01*rot1;\n' + 'q27 = 8-index;\n' + 'q28 = index3;\n' + 'dx1 = dec_med*dx1 + (1-dec_med)*bnot(index2);\n' + 'q29 = dx1;\n' + 'monitor = q29;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;'),
	'pixel_eqs_str' : ('rot = 0;\n' + 'dx = .02*q29;\n' + 'zoom = 1;'),
};

return pmap;
});
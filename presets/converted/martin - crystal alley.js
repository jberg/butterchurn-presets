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
		rating : 1.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.81,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {

m.vol = 0;
m.p1 = 0;
m.vx = 0.2;
m.vy = -0.1;
m.kx = 0;
m.ky = 0;
		return m;
	},
	'frame_eqs' : function(m) {

		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
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
m.trel = 0;
m.dx = 0;
m.dy = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.trel = div(m.time,4);
m.dx = Math.cos(m.trel);
m.dy = Math.sin(m.trel);
m.dx = 1;
m.dy = 0;
m.x = (0.5+((m.sample-0.5)*m.dx));
m.y = (0.5+((m.sample-0.5)*m.dy));
m.r = (0.5+(0.5*Math.sin(div(m.time,7))));
m.g = (0.5+(0.5*Math.sin(div(m.time,11))));
m.b = (0.5+(0.5*Math.sin(div(m.time,5))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('trel = time/4;\n' + 'dx = cos(trel);\n' + 'dy = sin(trel);\n' + 'dx = 1;\n' + ' dy = 0;\n' + 'x = .5 + (sample-.5)*dx ;\n' + 'y = .5 + (sample-.5)*dy;\n' + 'r = .5 + .5 * sin(time/7);\n' + 'g = .5 + .5 * sin(time/11);\n' + 'b = .5 + .5 * sin(time/5);'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.89152,
			samples : 100.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q5 = 0;
m.mul = 0;
m.q6 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.mul = (Math.sin(div(m.time,17))*51);
m.x = ((div(m.q5,3)+0.5)+(0.15*Math.sin((m.sample*m.mul))));
m.y = ((div(m.q6,3)+0.5)+(0.15*Math.sin(((m.sample*32)+div(m.time,13)))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('mul = sin(time/17)*51;\n' + 'x = q5/3+.5+ .15*sin(sample*mul);\n' + 'y = q6/3+.5 + .15*sin(sample*32+time/13);'),

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
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.35028,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.02988,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 64.0,
			border_r : 1.0,
			num_inst : 24.0,
			},
		'init_eqs' : function(m) {
m.t1 = 0;
m.t1 = rand(6);
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.1*Math.sin(((m.instance*17)+m.t1))));
m.y = (0.55+(0.06*Math.sin((m.instance*12))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(6);'),
		'frame_eqs_str' : ('x = .5 + .1*sin(instance*17+t1);\n' + 'y = .55 + .06*sin(instance*12);'),

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
			tex_zoom : 60.80383,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.59,
			rad : 0.02217,
			x : 0.6,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 251.0,
			},
		'init_eqs' : function(m) {
m.posx = 0;
m.posy = 0;
m.trel = 0;
m.k1 = 0;
m.dist = 0;
m.speed = 0;
m.fov = 0;
m.radi = 0;
m.arg = 0;
m.t1 = 0;
m.t2 = 0;
m.t1 = rand(6);
m.t2 = (11+div(rand(100),3));
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.speed = 0.02;
m.trel = ((Math.floor((m.time*m.speed))-(m.time*m.speed))+1);
m.k1 = div(m.instance,m.num_inst);
m.k1 = (m.k1-Math.floor(m.k1));
m.dist = (1.2-m.k1);
m.fov = 0.1;
m.arg = (m.dist-(m.time*0.02));
m.posx = (div(m.fov,m.dist)*(Math.sin((m.arg*13))+(0.1*Math.sin((m.dist*332)))));
m.posy = (div(m.fov,m.dist)*(Math.cos(((m.arg*m.t2)+m.t1))+(0.1*Math.sin((m.dist*332)))));
m.x = (0.5+m.posx);
m.y = (0.5+m.posy);
m.ang = ((m.time*Math.sin((m.k1*44)))*12);
m.a = 1;
m.border_a = (Math.min((m.radi*4), 1)*0);
m.a2 = 1;
m.rad = div(0.01,m.dist);
		return m;
	},
		'init_eqs_str' : ('t1 = rand(6);\n' + 't2 = 11 + rand(100)/3;'),
		'frame_eqs_str' : ('speed = .02;\n' + 'trel = int(time*speed)- time*speed+1;\n' + 'k1 = instance/num_inst;\n' + 'k1 = k1 - int(k1);\n' + 'dist = 1.2-k1;\n' + 'fov = .1;\n' + 'arg = dist-time*.02;\n' + 'posx = fov/dist * (sin(arg*13) + .1*sin(dist*332));\n' + 'posy = fov/dist * (cos(arg*t2+t1)+ .1*sin(dist*332));\n' + 'x = .5 + posx;\n' + 'y = .5 + posy;\n' + 'ang = time * sin(k1*44)*12;\n' + 'a = 1;\n' + ' border_a = min(radi*4,1)*0;\n' + ' a2 = 1;\n' + 'rad = .01/dist;'),

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
	'warp' : ('shader_body {\n' + '   float k1_1;\n' + '   float ky_2;\n' + '   vec2 uv3_3;\n' + '  uv3_3 = (100.0 * ((uv - vec2(0.5, 0.5)) * aspect.xy));\n' + '  ky_2 = clamp ((0.25 - (uv3_3.y / 40.0)), 0.0, 1.0);\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = (uv3_3.x * 2.0);\n' + '  k1_1 = (tmpvar_4 - (sign(tmpvar_4) * 16.0));\n' + '  k1_1 = (k1_1 + ((\n' + '    -((102.0 * sign(k1_1)))\n' + '   * ky_2) * ky_2));\n' + '  ky_2 = clamp ((ky_2 - 0.1), 0.0, 1.0);\n' + '  k1_1 = (k1_1 + ((\n' + '    -((102.0 * sign(k1_1)))\n' + '   * ky_2) * ky_2));\n' + '  ky_2 = clamp ((ky_2 - 0.1), 0.0, 1.0);\n' + '  k1_1 = (k1_1 + ((\n' + '    -((102.0 * sign(k1_1)))\n' + '   * ky_2) * ky_2));\n' + '  ky_2 = clamp ((ky_2 - 0.1), 0.0, 1.0);\n' + '  k1_1 = (k1_1 + ((\n' + '    -((102.0 * sign(k1_1)))\n' + '   * ky_2) * ky_2));\n' + '  ky_2 = clamp ((ky_2 - 0.1), 0.0, 1.0);\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = clamp (k1_1, -1.6, 1.6);\n' + '  k1_1 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ((abs(\n' + '    cos(tmpvar_5)\n' + '  ) * vec3(0.8, 0.8, 0.2)) - 0.1);\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('uniform highp vec2 uv3;\n' + 'uniform highp vec3 neu;\n' + 'highp vec2 hor;\n' + 'highp vec2 ver;\n' + 'highp vec2 xlat_mutabledz;\n' + 'highp vec3 xlat_mutableneu;\n' + 'highp vec3 xlat_mutableret1;\n' + 'highp vec2 xlat_mutableuv3;\n' + 'shader_body {\n' + '  xlat_mutableneu = neu;\n' + '  xlat_mutableuv3 = uv3;\n' + '   vec2 tmpvar_1;\n' + '  tmpvar_1.y = 0.0;\n' + '  tmpvar_1.x = texsize.z;\n' + '  hor = tmpvar_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2.x = 0.0;\n' + '  tmpvar_2.y = texsize.w;\n' + '  ver = tmpvar_2;\n' + '   vec2 uv_3;\n' + '  uv_3 = uv;\n' + '   float inten_5;\n' + '   float dist_6;\n' + '   vec2 uv1_7;\n' + '   vec3 ret_8;\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = ((uv - 0.5) * aspect.xy);\n' + '  uv1_7 = tmpvar_9;\n' + '  dist_6 = 1.0;\n' + '  inten_5 = 1.0;\n' + '  xlat_mutableret1 = vec3(0.0, 0.0, 0.0);\n' + '  xlat_mutabledz = vec2(0.0, 0.0);\n' + '  for ( int n_4 = 1; n_4 <= 4; n_4++) {\n' + '    dist_6 = (1.0 - fract((\n' + '      (0.25 * float(n_4))\n' + '     + \n' + '      (time / 18.0)\n' + '    )));\n' + '    inten_5 = ((sqrt(dist_6) * (1.0 - dist_6)) * 4.0);\n' + '    uv_3 = (uv1_7 * aspect.yx);\n' + '     vec2 tmpvar_10;\n' + '    tmpvar_10.y = 0.05;\n' + '    tmpvar_10.x = (0.02 * ((float(mod (\n' + '      float(n_4)\n' + '    , 2.0))) - 0.5));\n' + '    xlat_mutableuv3 = (((uv_3 * dist_6) + 0.5) + tmpvar_10);\n' + '     vec2 P_11;\n' + '    P_11 = (xlat_mutableuv3 + hor);\n' + '     float tmpvar_12;\n' + '    tmpvar_12 = dot (texture2D (sampler_main, P_11).xyz, vec3(0.32, 0.49, 0.29));\n' + '     vec2 P_13;\n' + '    P_13 = (xlat_mutableuv3 - hor);\n' + '     float tmpvar_14;\n' + '    tmpvar_14 = dot (texture2D (sampler_main, P_13).xyz, vec3(0.32, 0.49, 0.29));\n' + '    xlat_mutabledz.x = (xlat_mutabledz.x + (inten_5 * (\n' + '      (2.0 * tmpvar_12)\n' + '     - \n' + '      (2.0 * tmpvar_14)\n' + '    )));\n' + '     vec2 P_15;\n' + '    P_15 = (xlat_mutableuv3 + ver);\n' + '     float tmpvar_16;\n' + '    tmpvar_16 = dot (texture2D (sampler_main, P_15).xyz, vec3(0.32, 0.49, 0.29));\n' + '     vec2 P_17;\n' + '    P_17 = (xlat_mutableuv3 - ver);\n' + '     float tmpvar_18;\n' + '    tmpvar_18 = dot (texture2D (sampler_main, P_17).xyz, vec3(0.32, 0.49, 0.29));\n' + '    xlat_mutabledz.y = (xlat_mutabledz.y + (inten_5 * (\n' + '      (2.0 * tmpvar_16)\n' + '     - \n' + '      (2.0 * tmpvar_18)\n' + '    )));\n' + '     vec4 tmpvar_19;\n' + '    tmpvar_19 = texture2D (sampler_main, xlat_mutableuv3);\n' + '    xlat_mutableneu = tmpvar_19.xyz;\n' + '    xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_5));\n' + '  };\n' + '  xlat_mutabledz = (xlat_mutabledz * (0.5 + rand_preset.z));\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = (2.0 * (rand_preset.xy - 0.5));\n' + '  uv1_7 = (4.0 * tmpvar_9);\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21 = sin(((uv1_7 + xlat_mutabledz) + tmpvar_20));\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22 = sin(((uv1_7 + \n' + '    (xlat_mutabledz * 1.4)\n' + '  ) + tmpvar_20));\n' + '   vec2 tmpvar_23;\n' + '  tmpvar_23 = sin(((uv1_7 + \n' + '    (xlat_mutabledz * 1.8)\n' + '  ) + tmpvar_20));\n' + '   vec3 tmpvar_24;\n' + '  tmpvar_24.x = inversesqrt(dot (tmpvar_21, tmpvar_21));\n' + '  tmpvar_24.y = inversesqrt(dot (tmpvar_22, tmpvar_22));\n' + '  tmpvar_24.z = inversesqrt(dot (tmpvar_23, tmpvar_23));\n' + '  ret_8 = (((\n' + '    (tmpvar_24 * ((vec3(0.01, 0.01, 0.01) * (1.0 + \n' + '      (rand_preset.xyz / 2.0)\n' + '    )) * (0.5 + rand_preset.y)))\n' + '   * \n' + '    ((((rand_preset.x - 0.5) * 4.0) * xlat_mutableret1) + (8.0 * (1.0 + rand_preset)).xyz)\n' + '  ) - (xlat_mutableret1.x * 0.5)) + ((xlat_mutableret1.y + xlat_mutableret1.z) / 3.0));\n' + '  ret_8 = (ret_8 * (1.0 + ret_8));\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25.w = 1.0;\n' + '  tmpvar_25.xyz = ret_8;\n' + '  vec4 ret4 = tmpvar_25;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('vol = 0;\n' + ' p1 = 0;\n' + 'vx = .2;\n' + ' vy = -0.1;\n' + 'kx = 0;\n' + ' ky = 0;'),
	'frame_eqs_str' : (''),
	'pixel_eqs_str' : (''),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.7,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 4.141,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 3.878,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.1809,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.43865,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.0,
		wave_smoothing : 0.09,
		warpanimspeed : 0.228,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.72,
		zoom : 0.9901,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 1.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.27,
		wave_mystery : 0.98,
		decay : 1.0,
		wave_a : 0.827,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.03,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {

m.x1 = 0.9;
m.y1 = 0.5;
m.x2 = 0.5;
m.y2 = 0.5;
m.x3 = 0.5;
m.y3 = 0.5;
m.x4 = 0.5;
m.y4 = 0.5;
		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.zoom = 0.996;
m.warp = (0.18-((m.bass-m.treb)*0.15));
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
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {
m.mo = 0;
m.mod = 0;
m.sw = 0;
m.q31 = 0;
m.q10 = 0;
m.q32 = 0;
m.q11 = 0;
m.q12 = 0;
m.q13 = 0;
m.osa = 0;

			m.rkeys = ['sw'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sw = ((1-m.sw)*above(m.sample, 0));
m.osa = (m.sample*above(m.sample, 0));
m.mod = ((pow((m.value1*2), 2)*sign(m.value1))*0.5);
m.mod = m.value1;
m.mod = (m.mod*m.sw);
m.y = ifcond(m.sw, m.osa, m.sample);
m.y = m.sample;
m.x = (0.5-(m.mod*0.5));
m.osa = m.sample;
m.mo = ((3.7+(m.mod*6))+m.q10);
m.r = m.q12;
m.g = m.q13;
m.b = m.q11;
m.a = (1-(Math.abs(m.mod)*12));
m.a = (1-m.sw);
m.a = Math.max(0, Math.min(m.a, 1));
m.x = (((m.x-0.5)*div(m.q31,m.q32))+0.5);
m.y = (((m.y-0.5)*div(m.q32,m.q31))+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sw = (1-sw)*above(sample,0);\n' + 'osa = sample*above(sample,0);\n' + 'mod = pow(value1*2,2)*sign(value1)*.5;\n' + 'mod = value1;\n' + 'mod = mod*sw;\n' + 'y = if(sw,osa,sample);\n' + 'y = sample;\n' + 'x = .5 - mod*.5;\n' + 'osa = sample;\n' + 'mo = 3.7 + mod*6 + q10;\n' + 'r = q12;\n' + 'g = q13;\n' + 'b = q11;\n' + 'a = 1 - abs(mod)*12;\n' + 'a = 1-sw;\n' + 'a = max(0,min(a,1));\n' + 'x = (x-0.5)*(q31/q32) + 0.5;\n' + 'y = (y-0.5)*(q32/q31) + 0.5;'),

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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {
m.mo = 0;
m.mod = 0;
m.sw = 0;
m.q31 = 0;
m.q10 = 0;
m.q32 = 0;
m.q11 = 0;
m.q12 = 0;
m.q13 = 0;
m.osa = 0;

			m.rkeys = ['sw'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sw = ((1-m.sw)*below(m.sample, 1));
m.osa = (m.sample*above(m.sample, 0));
m.mod = ((pow((m.value2*2), 2)*sign(m.value2))*0.5);
m.mod = m.value2;
m.mod = (m.mod*m.sw);
m.y = ifcond(m.sw, m.osa, m.sample);
m.y = m.sample;
m.x = (0.5+(m.mod*0.5));
m.osa = m.sample;
m.mo = ((3.7+(m.mod*6))+m.q10);
m.r = m.q13;
m.g = m.q11;
m.b = m.q12;
m.a = (1-(Math.abs(m.mod)*12));
m.a = (1-m.sw);
m.a = Math.max(0, Math.min(m.a, 1));
m.x = (((m.x-0.5)*div(m.q31,m.q32))+0.5);
m.y = (((m.y-0.5)*div(m.q32,m.q31))+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sw = (1-sw)*below(sample,1);\n' + 'osa = sample*above(sample,0);\n' + 'mod = pow(value2*2,2)*sign(value2)*.5;\n' + 'mod = value2;\n' + 'mod = mod*sw;\n' + 'y = if(sw,osa,sample);\n' + 'y = sample;\n' + 'x = .5 + mod*.5;\n' + 'osa = sample;\n' + 'mo = 3.7 + mod*6 + q10;\n' + 'r = q13;\n' + 'g = q11;\n' + 'b = q12;\n' + 'a = 1 - abs(mod)*12;\n' + 'a = 1-sw;\n' + 'a = max(0,min(a,1));\n' + 'x = (x-0.5)*(q31/q32) + 0.5;\n' + 'y = (y-0.5)*(q32/q31) + 0.5;'),

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
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 1.25664,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 3.0726,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.03469,
			x : 0.8,
			y : 0.5,
			ang : 1.5707,
			sides : 12.0,
			border_r : 1.0,
			num_inst : 92.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.yang = 0;
m.xang = 0;
m.k1 = 0;
m.k2 = 0;
m.t_abs = 0;
m.ampl = 0;
m.ox = 0;
m.sample = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.t_rel = 0;
m.vol = 0;
m.t1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.time-Math.floor(m.time));
m.sample = div(m.instance,m.num_inst);
m.t_abs = (m.sample*3);
m.t_rel = (m.sample-div(m.time,5));
m.vol = ((m.bass+m.mid)+m.treb);
m.ampl = ((div((2*m.t_abs),2)*m.vol)*0.5);
m.k1 = Math.sin(div(m.time,13));
m.k2 = Math.sin(div(m.time,12));
m.ox = ((m.ampl*Math.sin((m.t_abs*(31+(5*m.k1)))))+((Math.sin(div(m.time,25))*(1-m.t_abs))*0.4));
m.oy = (m.ampl*Math.cos((m.t_abs*(31+(5*m.k2)))));
m.oz = -1;
m.r = sqr(Math.sin((m.t_rel*3.4)));
m.g = sqr(Math.sin(m.t_rel));
m.b = sqr(Math.cos((m.t_rel*1.8)));
m.xang = div(m.time,9.5);
m.yang = div((0*m.time),7);
m.zang = div(-m.time,22);
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
m.oz = (m.oz-6);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = time - int (time);\n' + 'sample = instance/num_inst;\n' + 't_abs = sample*3;\n' + 't_rel = sample-time/5;\n' + 'vol=bass+mid+treb;\n' + 'ampl = 2*t_abs/2*vol*.5;\n' + 'k1=sin(time/13);\n' + 'k2=sin(time/12);\n' + 'ox = ampl*sin (t_abs*(31+5*k1)) + sin(time/25)*(1-t_abs)*0.4  ;\n' + 'oy = ampl*cos (t_abs*(31+5*k2));\n' + 'oz = -1  ;\n' + 'r = sqr(sin(t_rel*3.4));\n' + 'g = sqr(sin(t_rel));\n' + 'b = sqr (cos(t_rel*1.8));\n' + 'xang = time/9.5;\n' + 'yang = 0*time/7;\n' + 'zang = -time/22;\n' + 'fov = 0.5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = oz - 6;\n' + 'x = ox*fov/oz +0.5;\n' + 'y = oy*fov/oz + 0.5;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.03333,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 11.0,
			},
		'init_eqs' : function(m) {
m.vol = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (Math.floor(rand(100))*0.01);
m.y = (Math.floor(rand(100))*0.01);
m.a = ifcond(above(mod(m.frame,3), 0), 0, 1);
m.vol = ((m.bass+m.mid)+m.treb);
m.rad = (m.vol*0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = int(rand(100))*.01;\n' + 'y = int(rand(100))*.01;\n' + 'a = if(above(frame%3,0),0,1);\n' + 'vol=bass+mid+treb;\n' + 'rad = vol*.1;'),

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
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.03333,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.vol = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (Math.floor(rand(100))*0.01);
m.y = (Math.floor(rand(100))*0.01);
m.a = ifcond(above(mod(m.frame,7), 0), 0, 1);
m.a2 = ifcond(above(mod(m.frame,7), 0), 0, 1);
m.border_a = 0;
m.vol = ((m.bass+m.mid)+m.treb);
m.rad = (m.vol*0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = int(rand(100))*.01;\n' + 'y = int(rand(100))*.01;\n' + 'a = if(above(frame%7,0),0,1);\n' + 'a2 = if(above(frame%7,0),0,1);\n' + 'border_a = 0;\n' + 'vol=bass+mid+treb;\n' + 'rad = vol*.1;'),

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
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 1.5)) + rand_frame.xy);\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = mix (uv_orig, uv, vec2(4.0, 4.0));\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = dot (texture2D (sampler_main, tmpvar_3).xyz, vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = mix (uv_orig, uv, vec2(-12.0, -12.0));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur2, tmpvar_5);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (texture2D (sampler_noise_lq, tmpvar_2) - 0.5).xy;\n' + '  uv_1 = (mix (uv_orig, uv, vec2((\n' + '    (tmpvar_4 - dot (((tmpvar_6.xyz * scale2) + bias2), vec3(0.32, 0.49, 0.29)))\n' + '   * 12.0))) + ((tmpvar_7 * texsize.zw) * 0.5));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_main, uv_1);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_noise_lq, tmpvar_2);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = ((tmpvar_8.xyz + (\n' + '    (tmpvar_9 - 0.5)\n' + '   * 0.006).xyz) + -0.0006);\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 bird_1;\n' + '   vec3 base_2;\n' + '   vec3 ret_3;\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_main, uv).xyz;\n' + '  base_2 = tmpvar_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (texsize.zw * 2.0);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv + (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv - (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = (((tmpvar_6.xyz * scale1) + bias1) - ((tmpvar_8.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (uv + (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (uv - (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_13 = texture2D (sampler_blur1, P_14);\n' + '   vec3 tmpvar_15;\n' + '  tmpvar_15 = (((tmpvar_11.xyz * scale1) + bias1) - ((tmpvar_13.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.x = tmpvar_10.y;\n' + '  tmpvar_16.y = tmpvar_15.y;\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17 = (uv + (tmpvar_16 * 0.05));\n' + '   vec2 x_18;\n' + '  x_18 = (tmpvar_17 - uv);\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = tmpvar_10.y;\n' + '  tmpvar_19.y = tmpvar_15.y;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = ((0.5 + (\n' + '    (uv - 0.5)\n' + '   * vec2(-1.0, 1.0))) + (tmpvar_19 * 0.05));\n' + '   vec3 tmpvar_21;\n' + '  tmpvar_21 = vec3(max (texture2D (sampler_main, tmpvar_17).x, texture2D (sampler_main, tmpvar_20).x));\n' + '  bird_1 = tmpvar_21;\n' + '  bird_1 = (pow (bird_1, vec3(1.4, 1.4, 1.4)) * (hue_shader * hue_shader));\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22.x = tmpvar_10.y;\n' + '  tmpvar_22.y = tmpvar_15.y;\n' + '   vec4 tmpvar_23;\n' + '   vec2 P_24;\n' + '  P_24 = (uv + (tmpvar_22 * 0.1));\n' + '  tmpvar_23 = texture2D (sampler_blur1, P_24);\n' + '  ret_3 = (((\n' + '    ((((\n' + '      (((tmpvar_10.y + tmpvar_15.y) * 4.0) + 0.5)\n' + '     * vec3(0.0, 0.0, 1.0)) + (\n' + '      sqrt(dot (x_18, x_18))\n' + '     * vec3(64.0, 96.0, 0.0))) + (vec3(1.0, 0.0, 0.0) * base_2.y)) - vec3(0.0, 0.0, 0.3))\n' + '   * 0.6) * clamp (\n' + '    (1.0 - (bird_1.x * 4.0))\n' + '  , 0.0, 1.0)) + bird_1);\n' + '   vec3 tmpvar_25;\n' + '  tmpvar_25 = mix (ret_3, vec3(1.0, 1.0, 1.0), ((\n' + '    (((tmpvar_23.xyz * scale1) + bias1) * clamp (1.0, 0.0, 1.0))\n' + '  .z * 6.0) * (1.0 - \n' + '    (bird_1 * 3.0)\n' + '  )));\n' + '  ret_3 = tmpvar_25;\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26.w = 1.0;\n' + '  tmpvar_26.xyz = tmpvar_25;\n' + '  vec4 ret4 = tmpvar_26;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0.9;\n' + 'y1 = 0.5;\n' + 'x2 = 0.5;\n' + ' y2 = 0.5;\n' + 'x3 = 0.5;\n' + ' y3 = 0.5;\n' + 'x4 = 0.5;\n' + ' y4 = 0.5;'),
	'frame_eqs_str' : ('wave_a = 0;\n' + 'zoom = 0.996;\n' + 'warp = 0.18 - (bass-treb)*0.15;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
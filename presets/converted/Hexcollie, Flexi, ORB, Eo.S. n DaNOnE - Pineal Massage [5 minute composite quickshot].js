define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 12.0,
		warpscale : 0.015,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.0,
		echo_alpha : 0.3,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.09,
		b2x : 1.0,
		warp : 0.033,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.22019,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.169,
		ob_size : 0.05,
		b1ed : 0.25,
		wave_smoothing : 0.75,
		warpanimspeed : 0.037,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.3,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.vol = 0;
m.mtime = 0;
m.mv_x = 64;
m.mv_y = 48;
m.nut = 0;
m.stp = 0;
m.stq = 0;
m.rtp = 0;
m.rtq = 0;
m.wvr = 0;
m.decay = 0;
m.dcsp = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 1;
m.zoom = (0.98+(0.1*Math.max(m.treb_att, m.bass_att)));
m.warp = 0;
m.vol = (((m.bass_att+m.mid_att)+m.treb_att)*0.25);
m.vol = (m.vol*m.vol);
m.mtime = (m.mtime+(m.vol*0.1));
m.q1 = (m.mtime*0.4);
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
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.speed = 0;
m.v = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = ['g','r','ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.q1 = 0;
m.speed = ((1*Math.cos(m.q2))+(m.bass*0.1));
m.v = ((m.sample*1000)+(m.bass*m.value1));
m.xs = (m.xs+(Math.sin(((m.v*0.1)+m.time))*m.speed));
m.ys = (m.ys+(Math.cos(((m.v*1.2)+m.q2))*m.speed));
m.x = (0.5+((0.5*Math.cos(((m.xs*0.04)+(0.2*m.time))))*Math.sin(((m.time*2)+m.xs))));
m.y = (0.5+((0.5*Math.cos(((m.ys*0.04)+(0.4*m.time))))*Math.cos((m.q2+m.xs))));
m.r = (m.r+(0.5*Math.sin((m.time*4.22))));
m.g = (m.g+(0.5*Math.sin(((m.time*4.307)+((-0.5-m.x)*(0.5-m.y))))));
m.b = (m.g+(0.5*Math.sin((m.time*4.959))));
m.x = ((m.x*0.75)+0.125);
m.y = ((m.y*0.75)+0.125);
m.xs = ifcond(above(m.xs, 1000), 0, m.xs);
m.ys = ifcond(above(m.ys, 800), 0, m.ys);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('q1 =0;\n' + 'speed = 1*cos(q2) + bass*0.1;\n' + 'v = sample*1000 + bass*value1;\n' + 'xs = xs + sin(v*0.1 + time)*speed;\n' + 'ys = ys + cos(v*1.2 + q2)*speed;\n' + 'x = 0.5 + 0.5*cos(xs*0.04 +0.2*time)*sin(time*2 + xs);\n' + 'y = 0.5 + 0.5*cos(ys*0.04 + 0.4*time)*cos(q2 + xs);\n' + 'r = r + 0.5*sin(time*4.22);\n' + 'g = g + 0.5*sin(time*4.307  + (-0.5-x)*(0.5-y));\n' + 'b = g + 0.5*sin(time*4.959);\n' + 'x = x*0.75 + 0.125;\n' + 'y = y*0.75 + 0.125;\n' + 'xs = if(above(xs,1000),0 ,xs);\n' + 'ys = if(above(ys,800),0 ,ys);'),

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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.speed = 0;
m.v = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = ['g','r','ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.q1 = 0;
m.speed = (0.01*m.bass_att);
m.v = ((m.sample*100)+(m.value1*m.bass));
m.xs = (m.xs+((equal(0, m.q1)*Math.sin(((m.v*0.1)+m.time)))*m.speed));
m.ys = (m.ys+((equal(0, m.q1)*Math.cos(((m.v*1.2)+m.time)))*m.speed));
m.x = (0.5+((0.5*Math.cos(((m.xs*0.02)+(0.1*m.time))))*Math.sin(((m.time*2)+m.xs))));
m.y = (0.5+((0.5*Math.cos(((m.ys*0.02)+(0.2*m.time))))*Math.cos((m.time+m.xs))));
m.r = (m.r+(0.5*Math.sin((m.time*5.52))));
m.g = (m.g+(0.5*Math.sin((m.time*5.107))));
m.b = (m.g+(0.5*Math.sin(((m.time*5.359)+((-0.5-m.x)*(0.5-m.y))))));
m.x = ((m.x*0.7)+0.15);
m.y = ((m.y*0.7)+0.15);
m.xs = ifcond(above(m.xs, 1000), 0, m.xs);
m.ys = ifcond(above(m.ys, 800), 0, m.ys);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('q1 =0;\n' + 'speed = 0.01*bass_att;\n' + 'v = sample*100 + (value1*bass);\n' + 'xs = xs + (equal(0,q1))*sin(v*0.1 + time)*speed;\n' + 'ys = ys + (equal(0,q1))*cos(v*1.2 + time)*speed;\n' + 'x = 0.5 + 0.5*cos(xs*0.02 +0.1*time)*sin(time*2 + xs);\n' + 'y = 0.5 + 0.5*cos(ys*0.02 + 0.2*time)*cos(time + xs);\n' + 'r = r + 0.5*sin(time*5.52);\n' + 'g = g + 0.5*sin(time*5.107);\n' + 'b = g + 0.5*sin(time*5.359 + (-0.5-x)*(0.5-y));\n' + 'x = x*0.7 + 0.15;\n' + 'y = y*0.7 + 0.15;\n' + 'xs = if(above(xs,1000),0 ,xs);\n' + 'ys = if(above(ys,800),0 ,ys);'),

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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.speed = 0;
m.v = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = ['g','r','ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.q1 = 0;
m.speed = (0.01*m.bass_att);
m.v = ((m.sample*100)+(m.value1*m.bass));
m.xs = (m.xs+((equal(0, m.q1)*Math.sin(((m.v*0.1)+m.time)))*m.speed));
m.ys = (m.ys+((equal(0, m.q1)*Math.cos(((m.v*1.2)+m.time)))*m.speed));
m.x = (0.5+((0.5*Math.cos(((m.xs*0.02)+(0.1*m.time))))*Math.sin(((m.time*2)+m.xs))));
m.y = (0.5+((0.5*Math.cos(((m.ys*0.02)+(0.2*m.time))))*Math.cos((m.time+m.xs))));
m.r = (m.r+(0.5*Math.sin(((m.time*5.62)+((-0.5-m.x)*(0.5-m.y))))));
m.g = (m.g+(0.5*Math.sin((m.time*5.907))));
m.b = (m.g+(0.5*Math.sin((m.time*5.359))));
m.x = ((m.x*0.4)+0.3);
m.y = ((m.y*0.4)+0.3);
m.xs = ifcond(above(m.xs, 1000), 0, m.xs);
m.ys = ifcond(above(m.ys, 800), 0, m.ys);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('q1 =0;\n' + 'speed = 0.01*bass_att;\n' + 'v = sample*100 + (value1*bass);\n' + 'xs = xs + (equal(0,q1))*sin(v*0.1 + time)*speed;\n' + 'ys = ys + (equal(0,q1))*cos(v*1.2 + time)*speed;\n' + 'x = 0.5 + 0.5*cos(xs*0.02 +0.1*time)*sin(time*2 + xs);\n' + 'y = 0.5 + 0.5*cos(ys*0.02 + 0.2*time)*cos(time + xs);\n' + 'r = r + 0.5*sin(time*5.62 + (-0.5-x)*(0.5-y));\n' + 'g = g + 0.5*sin(time*5.907);\n' + 'b = g + 0.5*sin(time*5.359);\n' + 'x = x*0.4 + 0.3;\n' + 'y = y*0.4 + 0.3;\n' + 'xs = if(above(xs,1000),0 ,xs);\n' + 'ys = if(above(ys,800),0 ,ys);'),

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
	'warp' : ('shader_body {\n' + '   vec2 my_uv2_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (uv_orig - 0.5);\n' + '  tmpvar_3 = (0.5 + (tmpvar_4 * 1.01));\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, tmpvar_3);\n' + '  ret_2.x = tmpvar_5.x;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur1, tmpvar_3);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_main, tmpvar_3);\n' + '  ret_2.x = (ret_2.x - ((\n' + '    (((tmpvar_6.xyz * scale1) + bias1).x - tmpvar_7.x)\n' + '   + 0.004) * 0.1));\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = (tmpvar_4 * vec2(1.8, 1.8));\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9.x = ((tmpvar_8.x * tmpvar_8.x) - (tmpvar_8.y * tmpvar_8.y));\n' + '  tmpvar_9.y = ((2.0 * tmpvar_8.x) * tmpvar_8.y);\n' + '  my_uv2_1 = (tmpvar_9 + vec2(0.25, 0.551));\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_fc_main, my_uv2_1);\n' + '  ret_2.y = (tmpvar_10.y + 0.0038);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = (texsize.zw * 12.0);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (uv_orig + (vec2(1.0, 0.0) * tmpvar_11));\n' + '  tmpvar_12 = texture2D (sampler_blur1, P_13);\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (uv_orig - (vec2(1.0, 0.0) * tmpvar_11));\n' + '  tmpvar_14 = texture2D (sampler_blur1, P_15);\n' + '   vec4 tmpvar_16;\n' + '   vec2 P_17;\n' + '  P_17 = (uv_orig + (vec2(0.0, 1.0) * tmpvar_11));\n' + '  tmpvar_16 = texture2D (sampler_blur1, P_17);\n' + '   vec4 tmpvar_18;\n' + '   vec2 P_19;\n' + '  P_19 = (uv_orig - (vec2(0.0, 1.0) * tmpvar_11));\n' + '  tmpvar_18 = texture2D (sampler_blur1, P_19);\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 0.8)) + rand_frame.xy);\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21.x = (((tmpvar_12.xyz * scale1) + bias1) - ((tmpvar_14.xyz * scale1) + bias1)).z;\n' + '  tmpvar_21.y = (((tmpvar_16.xyz * scale1) + bias1) - ((tmpvar_18.xyz * scale1) + bias1)).z;\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_noise_lq, tmpvar_20);\n' + '   vec2 tmpvar_23;\n' + '  tmpvar_23 = ((mix (uv_orig, uv, vec2(0.02, 0.02)) + (\n' + '    (tmpvar_21 * texsize.zw)\n' + '   * 4.0)) + ((\n' + '    (tmpvar_22.xy - 0.5)\n' + '   * texsize.zw) * 4.0));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_fc_main, tmpvar_23);\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_fc_main, tmpvar_23);\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26 = texture2D (sampler_blur3, tmpvar_23);\n' + '   vec4 tmpvar_27;\n' + '  tmpvar_27 = texture2D (sampler_noise_lq, tmpvar_20);\n' + '  ret_2.z = (((tmpvar_24.z - \n' + '    ((tmpvar_25.z - ((tmpvar_26.xyz * scale3) + bias3).z) * 0.02)\n' + '  ) - 0.008) + ((tmpvar_27.z - 0.5) * 0.1));\n' + '   vec4 tmpvar_28;\n' + '  tmpvar_28.w = 1.0;\n' + '  tmpvar_28.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_28;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = tmpvar_7.y;\n' + '  tmpvar_13.y = tmpvar_12.y;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = (uv - tmpvar_13);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur3, tmpvar_14);\n' + '  ret_1 = (((tmpvar_15.xyz * scale3) + bias3).x * vec3(2.0, 2.0, 0.0));\n' + '   vec3 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_main, tmpvar_14).xxx;\n' + '   vec3 tmpvar_17;\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_main, uv);\n' + '  tmpvar_17 = vec3((tmpvar_18.z * 0.1));\n' + '   vec3 tmpvar_19;\n' + '  tmpvar_19 = mix (vec3(4.0, 4.0, 4.0), vec3(2.0, 0.0, 0.0), tmpvar_18.zzz);\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20.x = tmpvar_7.z;\n' + '  tmpvar_20.y = tmpvar_12.z;\n' + '   vec2 P_21;\n' + '  P_21 = (uv + (tmpvar_20 * 0.1));\n' + '   vec3 tmpvar_22;\n' + '  tmpvar_22 = vec3((texture2D (sampler_main, P_21).y * 0.23));\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23 = mix (mix (mix (ret_1, vec3(0.3, 0.1, 0.4), tmpvar_16), vec3(4.0, 0.0, 0.0), tmpvar_17), tmpvar_19, tmpvar_22);\n' + '  ret_1 = tmpvar_23;\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24.w = 1.0;\n' + '  tmpvar_24.xyz = tmpvar_23;\n' + '  vec4 ret4 = tmpvar_24;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=1;\n' + 'zoom=0.98+.1*max(treb_att,bass_att);\n' + 'warp = 0;\n' + 'vol=(bass_att+mid_att+treb_att)*0.25;\n' + 'vol=vol*vol;\n' + 'mtime=mtime+vol*0.1;\n' + 'q1=mtime*0.4;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
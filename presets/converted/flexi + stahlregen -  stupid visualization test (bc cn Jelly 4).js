define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.47,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.22,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.00183,
		ob_r : 0.51,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.34784,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99816,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.868,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.q3 = 0;
m.dm = 0;
m.dt = 0;
m.db = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = 1;
m.db = ((0.75*m.db)+(0.25*m.bass_att));
m.bb = (m.bb+(0.1*m.db));
m.dt = ((0.75*m.dt)+(0.25*m.treb_att));
m.tt = (m.tt+(0.1*m.dt));
m.dm = ((0.75*m.dm)+(0.25*m.mid_att));
m.mm = (m.mm+(0.1*m.dm));
m.q2 = Math.sin((((0.225*m.bb)+m.time)-(0.25*m.tt)));
m.q3 = Math.cos((((0.25*m.bb)+m.time)-(0.235*m.tt)));
m.q1 = (0.2+(0.9*Math.sin(((((0.25*m.mm)+m.time)-(0.125*m.tt))-(0.125*m.bb)))));
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
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.18167,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 0.0,
			num_inst : 8.0,
			},
		'init_eqs' : function(m) {
m.bb = 0;
m.tt = 0;
m.vv = 0;
m.dt = 0;
m.bt = 0;
m.db = 0;

			m.rkeys = ['vv','tt','bb','db'];
			return m;
		},
		'frame_eqs' : function(m) {
m.db = ((0.5*m.db)+(0.2*m.bass));
m.bb = (m.bb+(0.1*m.db));
m.dt = ((0.5*m.db)+(0.2*m.treb));
m.tt = (m.tt+(0.1*m.dt));
m.bt = (m.bb-m.tt);
m.vv = ((m.vv+(0.05*m.db))+(0.05*m.bt));
m.x = div(m.instance,(m.num_inst-1));
m.y = (0.5+((0.015*(m.bb-m.tt))*Math.sin((0.01*m.vv))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('db = 0.5*db + .2*bass;\n' + 'bb = bb + .1*db;\n' + 'dt = 0.5*db + .2*treb;\n' + 'tt = tt + .1*dt;\n' + 'bt = bb-tt;\n' + 'vv = vv + .05*db +.05*bt;\n' + 'x = instance/(num_inst-1);\n' + 'y = .5+.015*(bb-tt)*sin(0.01*vv);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.3,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.1,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.18167,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			num_inst : 8.0,
			},
		'init_eqs' : function(m) {
m.bb = 0;
m.tt = 0;
m.vv = 0;
m.dt = 0;
m.bt = 0;
m.db = 0;

			m.rkeys = ['vv','tt','bb','db'];
			return m;
		},
		'frame_eqs' : function(m) {
m.db = ((0.5*m.db)+(0.2*m.bass));
m.bb = (m.bb+(0.1*m.db));
m.dt = ((0.5*m.db)+(0.2*m.treb));
m.tt = (m.tt+(0.1*m.dt));
m.bt = (m.bb-m.tt);
m.vv = ((m.vv+(0.05*m.db))+(0.05*m.bt));
m.y = (0.5+(((Math.cos(div((6.28*(m.instance+0.5)),(m.num_inst-1)))*0.025)*(m.tt-m.bb))*Math.sin((0.01*m.vv))));
m.x = (0.5+(((Math.sin(div((6.28*(m.instance+0.5)),(m.num_inst-1)))*0.025)*(m.tt-m.bb))*Math.sin((0.01*m.vv))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('db = 0.5*db + .2*bass;\n' + 'bb = bb + .1*db;\n' + 'dt = 0.5*db + .2*treb;\n' + 'tt = tt + .1*dt;\n' + 'bt = bb-tt;\n' + 'vv = vv + .05*db +.05*bt;\n' + 'y = .5 + cos(6.28*(instance+.5)/(num_inst-1))*.025*(tt-bb)*sin(0.01*vv);\n' + 'x = .5 + sin(6.28*(instance+.5)/(num_inst-1))*.025*(tt-bb)*sin(0.01*vv);'),

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = tmpvar_7.x;\n' + '  tmpvar_13.y = tmpvar_12.x;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = (uv + ((tmpvar_13 * texsize.zw) * 4.0));\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15.x = tmpvar_7.y;\n' + '  tmpvar_15.y = tmpvar_12.y;\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = (uv + ((tmpvar_15 * texsize.zw) * 4.0));\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = tmpvar_7.z;\n' + '  tmpvar_17.y = tmpvar_12.z;\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18 = (uv + ((tmpvar_17 * texsize.zw) * 4.0));\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_main, tmpvar_14);\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_main, tmpvar_14);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_blur3, tmpvar_14);\n' + '  ret_1.x = (tmpvar_19.x - ((tmpvar_20.xyz - \n' + '    ((tmpvar_21.xyz * scale3) + bias3)\n' + '  ).x * 0.02));\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_main, tmpvar_16);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_main, tmpvar_16);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_blur3, tmpvar_16);\n' + '  ret_1.y = (tmpvar_22.y - ((tmpvar_23.xyz - \n' + '    ((tmpvar_24.xyz * scale3) + bias3)\n' + '  ).y * 0.02));\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_main, tmpvar_18);\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26 = texture2D (sampler_main, tmpvar_18);\n' + '   vec4 tmpvar_27;\n' + '  tmpvar_27 = texture2D (sampler_blur3, tmpvar_18);\n' + '  ret_1.z = (tmpvar_25.z - ((tmpvar_26.xyz - \n' + '    ((tmpvar_27.xyz * scale3) + bias3)\n' + '  ).z * 0.02));\n' + '  ret_1 = (ret_1 - ((ret_1.yzx * 0.1) - 0.04));\n' + '   vec4 tmpvar_28;\n' + '  tmpvar_28.w = 1.0;\n' + '  tmpvar_28.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_28;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret2_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (texsize.zw * 6.0);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12.x = dot (((\n' + '    (tmpvar_4.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_6.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_12.y = dot (((\n' + '    (tmpvar_8.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_10.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = (uv - (0.25 * tmpvar_12));\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur3, uv);\n' + '  ret_2 = (0.3 * ((tmpvar_14.xyz * scale3) + bias3));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur2, uv);\n' + '  ret_2 = (ret_2 - ((\n' + '    (tmpvar_15.xyz * scale2)\n' + '   + bias2) - 0.01));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur1, uv);\n' + '  ret_2 = (ret_2 + ((tmpvar_16.xyz + \n' + '    (((tmpvar_17.xyz * scale1) + bias1) * 0.15)\n' + '  ) - 0.01));\n' + '  ret_2 = (ret_2 + 0.75);\n' + '   float tmpvar_18;\n' + '  tmpvar_18 = dot (ret_2, vec3(0.32, 0.49, 0.29));\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur3, tmpvar_13);\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_blur1, tmpvar_13);\n' + '   vec3 tmpvar_21;\n' + '  tmpvar_21 = mix (vec3(tmpvar_18), (vec3(tmpvar_18) * dot (\n' + '    ((0.8 * ((tmpvar_19.xyz * scale3) + bias3)) - ((tmpvar_20.xyz * scale1) + bias1))\n' + '  , vec3(0.32, 0.49, 0.29))), pow (hue_shader, vec3(tmpvar_18)));\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur3, tmpvar_13);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_blur1, tmpvar_13);\n' + '  ret2_1 = ((-0.3 * (\n' + '    (tmpvar_22.xyz * scale3)\n' + '   + bias3)) + ((tmpvar_23.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_main, tmpvar_13);\n' + '  ret2_1 = (ret2_1 - tmpvar_24.xyz);\n' + '  ret2_1 = (ret2_1 - 0.75);\n' + '   float tmpvar_25;\n' + '  tmpvar_25 = dot (ret2_1, vec3(0.32, 0.49, 0.29));\n' + '   vec3 tmpvar_26;\n' + '  tmpvar_26 = mix (vec3(tmpvar_25), (vec3(tmpvar_25) * dot (\n' + '    ((0.8 * ((tmpvar_14.xyz * scale3) + bias3)) - ((tmpvar_17.xyz * scale1) + bias1))\n' + '  , vec3(0.32, 0.49, 0.29))), pow (hue_shader.zxy, tmpvar_21));\n' + '  ret2_1 = tmpvar_26;\n' + '   vec3 tmpvar_27;\n' + '  tmpvar_27 = abs((tmpvar_21 - (2.0 * tmpvar_26)));\n' + '  ret_2 = (tmpvar_27 - (0.175 * sqrt(tmpvar_27)));\n' + '  ret_2 = (ret_2 * ret_2);\n' + '   vec4 tmpvar_28;\n' + '  tmpvar_28.w = 1.0;\n' + '  tmpvar_28.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_28;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('zoom=1;\n' + 'db = .75 * db + .25 * bass_att;\n' + 'bb = bb + .1 * db;\n' + 'dt = .75 * dt + .25 * treb_att;\n' + 'tt = tt + .1 * dt;\n' + 'dm = .75 * dm + .25 * mid_att;\n' + 'mm = mm + .1 * dm;\n' + 'q2 = sin(.225*bb+time-.25*tt);\n' + 'q3 = cos(.25*bb+time-.235*tt);\n' + 'q1 = .2+.9*sin(.25*mm+time-.125*tt-.125*bb);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
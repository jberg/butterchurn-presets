define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.6,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 2.905,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.01678,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.23219,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 0.6,
		ib_r : 0.25,
		mv_b : 0.35,
		echo_zoom : 1.047,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.627,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.35,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.08017,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.3,
		decay : 0.973,
		wave_a : 0.9,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.6,
		ib_b : 0.25,
		mv_r : 0.35,
		rating : 1.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.67,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.oldq2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.400*((0.60*Math.sin((0.933*m.time)))+(0.40*Math.sin((1.045*m.time))))));
m.wave_g = (m.wave_g+(0.100*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((0.956*m.time))))));
m.wave_b = (m.wave_b+(0.100*((0.60*Math.sin((0.910*m.time)))+(0.40*Math.sin((0.920*m.time))))));
m.mv_r = m.wave_r;
m.mv_b = m.wave_b;
m.mv_g = m.wave_g;
m.q1 = (0.05*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps));
m.mv_a = ifcond(above((m.bass-1.2), 1), 1, (m.bass-1.2));
m.q2 = (m.oldq2+(0.05*div(pow(((((((1+(1.2*m.treb))+(0.4*m.treb_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq2 = m.q2;
m.monitor = m.q2;
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+((m.rad*0.1)*m.q1));
		return m;
	},
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (normalize((uv - uv_orig)) * texsize.zw);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 0.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + tmpvar_3);\n' + '   vec4 y_6;\n' + '  y_6 = (texture2D (sampler_main, P_5) * 0.97);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 0.0;\n' + '  tmpvar_7.xyz = max (tmpvar_4, y_6).xyz;\n' + '   vec2 P_8;\n' + '  P_8 = (uv - tmpvar_3);\n' + '   vec4 y_9;\n' + '  y_9 = (texture2D (sampler_main, P_8) * 0.97);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 0.0;\n' + '  tmpvar_10.xyz = max (tmpvar_7, y_9).xyz;\n' + '   vec2 P_11;\n' + '  P_11 = (uv + (tmpvar_3 * 2.0));\n' + '   vec4 y_12;\n' + '  y_12 = (texture2D (sampler_main, P_11) * 0.9);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13.w = 0.0;\n' + '  tmpvar_13.xyz = max (tmpvar_10, y_12).xyz;\n' + '   vec2 P_14;\n' + '  P_14 = (uv - (tmpvar_3 * 2.0));\n' + '   vec4 y_15;\n' + '  y_15 = (texture2D (sampler_main, P_14) * 0.9);\n' + '  ret_1 = (max (tmpvar_13, y_15).xyz * 0.95);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv2_1;\n' + '   vec3 ret_2;\n' + '  uv2_1 = (uv + (vec2(1.0, 0.0) * texsize.zw));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv2_1);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv2_1);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_blur2, uv2_1);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur3, uv2_1);\n' + '  uv2_1 = (uv + (vec2(-1.0, 0.0) * texsize.zw));\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_main, uv2_1);\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_blur1, uv2_1);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_blur2, uv2_1);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_blur3, uv2_1);\n' + '  uv2_1 = (uv + (vec2(0.0, 1.0) * texsize.zw));\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_main, uv2_1);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_blur1, uv2_1);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_blur2, uv2_1);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur3, uv2_1);\n' + '  uv2_1 = (uv + (vec2(0.0, -1.0) * texsize.zw));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_main, uv2_1);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_blur1, uv2_1);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur2, uv2_1);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_blur3, uv2_1);\n' + '   vec3 tmpvar_19;\n' + '  tmpvar_19.z = 0.14;\n' + '  tmpvar_19.x = (((\n' + '    (tmpvar_3.xyz + (((tmpvar_4.xyz * scale1) + bias1) * 0.4))\n' + '   + \n' + '    (((tmpvar_5.xyz * scale2) + bias2) * 0.15)\n' + '  ) + (\n' + '    ((tmpvar_6.xyz * scale3) + bias3)\n' + '   * 0.1)).x - ((\n' + '    (tmpvar_7.xyz + (((tmpvar_8.xyz * scale1) + bias1) * 0.4))\n' + '   + \n' + '    (((tmpvar_9.xyz * scale2) + bias2) * 0.15)\n' + '  ) + (\n' + '    ((tmpvar_10.xyz * scale3) + bias3)\n' + '   * 0.1)).x);\n' + '  tmpvar_19.y = (((\n' + '    (tmpvar_11.xyz + (((tmpvar_12.xyz * scale1) + bias1) * 0.4))\n' + '   + \n' + '    (((tmpvar_13.xyz * scale2) + bias2) * 0.15)\n' + '  ) + (\n' + '    ((tmpvar_14.xyz * scale3) + bias3)\n' + '   * 0.1)).x - ((\n' + '    (tmpvar_15.xyz + (((tmpvar_16.xyz * scale1) + bias1) * 0.4))\n' + '   + \n' + '    (((tmpvar_17.xyz * scale2) + bias2) * 0.15)\n' + '  ) + (\n' + '    ((tmpvar_18.xyz * scale3) + bias3)\n' + '   * 0.1)).x);\n' + '  ret_2 = (0.5 + (0.5 * normalize(tmpvar_19)));\n' + '   vec2 x_20;\n' + '  x_20 = (ret_2.xy - 0.5);\n' + '  ret_2 = (ret_2 * clamp ((\n' + '    sqrt(dot (x_20, x_20))\n' + '   * 5.0), 0.0, 1.0));\n' + '  ret_2 = ret_2.xxy;\n' + '  ret_2 = (ret_2 + 1.15);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_blur3, uv);\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur1, uv);\n' + '  ret_2 = (ret_2 * mix (ret_2, (ret_2 * \n' + '    (((tmpvar_21.xyz * scale3) + bias3) - ((tmpvar_22.xyz * scale1) + bias1))\n' + '  ), pow (hue_shader.zyx, ret_2)));\n' + '  ret_2 = (ret_2 * ret_2);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23.w = 1.0;\n' + '  tmpvar_23.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_23;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.400*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );\n' + 'wave_g = wave_g + 0.100*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );\n' + 'wave_b = wave_b + 0.100*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );\n' + 'mv_r = wave_r;\n' + 'mv_b = wave_b;\n' + 'mv_g = wave_g;\n' + 'q1 = 0.05*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'mv_a = if(above(bass-1.2,1),1,bass-1.2);\n' + 'q2 = oldq2 + 0.05*(pow(1+1.2*treb+0.4*treb_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq2 = q2 ;\n' + 'monitor = q2;'),
	'pixel_eqs_str' : ('zoom = zoom + rad*0.1*q1;'),
};

return pmap;
});
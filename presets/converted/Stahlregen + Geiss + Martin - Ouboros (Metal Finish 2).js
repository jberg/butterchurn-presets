define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.59,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 0.42,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 1.007,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.7,
		decay : 0.88,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 0.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = (1.0+(0.025*Math.max(m.bass_att, m.treb_att)));
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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.size = 0;
m.amplitude = 0;
m.centerx = 0;
m.centery = 0;
m.speed = 0;
m.turns = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.amplitude = (0.1+(0.05*m.bass_att));
m.turns = 7.5;
m.centerx = 0.25;
m.centery = 0.35;
m.size = 0.5;
m.speed = -1;
m.x = (m.centerx+(((m.size-(m.size*m.sample))*Math.sin((((m.speed*3.14)*m.time)+((m.sample*6.28)*m.turns))))*(1+(m.amplitude*(m.value1+m.value2)))));
m.y = (m.centery+(((m.size-(m.size*m.sample))*Math.cos((((m.speed*3.14)*m.time)+((m.sample*6.28)*m.turns))))*(1+(m.amplitude*(m.value1+m.value2)))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('amplitude = .1+.05*bass_att;\n' + 'turns = 7.5;\n' + 'centerx = .25;\n' + 'centery = .35;\n' + 'size = .5;\n' + 'speed = -1;\n' + 'x = centerx+(size-size*sample)*sin(speed*3.14*time+sample*6.28*turns)*(1+amplitude*(value1+value2));\n' + 'y = centery+(size-size*sample)*cos(speed*3.14*time+sample*6.28*turns)*(1+amplitude*(value1+value2));'),

		},
		{
		'baseVals' : {
			a : 0.8,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 462.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.size = 0;
m.amplitude = 0;
m.centerx = 0;
m.centery = 0;
m.speed = 0;
m.turns = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (0.5+(0.4*Math.sin((0.5*((m.time*1.13)+m.bass)))));
m.g = (0.5+(0.4*Math.cos((0.5*((m.time*1.23)+m.treb)))));
m.b = (0.5+(0.4*Math.sin((0.5*((m.time*1.33)+m.mid)))));
		return m;
	},
		'point_eqs' : function(m) {
m.amplitude = (0.075+(0.025*m.bass_att));
m.turns = 7;
m.centerx = ((0.5+(0.015*Math.sin(m.time)))+(0.015*Math.cos((3.28+(m.time*0.01)))));
m.centery = ((0.5+(0.015*Math.cos(m.time)))+(0.015*Math.sin((3.14+(m.time*0.01)))));
m.size = 0.28;
m.speed = 1.25;
m.x = (m.centerx+(((m.size-(m.size*m.sample))*Math.sin((((m.speed*3.14)*m.time)+((m.sample*6.28)*m.turns))))*(1+(m.amplitude*(m.value1+m.value2)))));
m.y = (m.centery+(((m.size-(m.size*m.sample))*Math.cos((((m.speed*3.14)*m.time)+((m.sample*6.28)*m.turns))))*(1+(m.amplitude*(m.value1+m.value2)))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = .5 + .4*sin(0.5*(time*1.13+bass));\n' + 'g = .5 + .4*cos(0.5*(time*1.23+treb));\n' + 'b = .5 + .4*sin(0.5*(time*1.33+mid));'),
		'point_eqs_str' : ('amplitude = .075+.025*bass_att;\n' + 'turns = 7;\n' + 'centerx = .5+.015*sin(time)+.015*cos(3.28+time*0.01);\n' + 'centery = .5+.015*cos(time)+.015*sin(3.14+time*0.01);\n' + 'size = .28;\n' + 'speed = 1.25;\n' + 'x = centerx+(size-size*sample)*sin(speed*3.14*time+sample*6.28*turns)*(1+amplitude*(value1+value2));\n' + 'y = centery+(size-size*sample)*cos(speed*3.14*time+sample*6.28*turns)*(1+amplitude*(value1+value2));'),

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
			r2 : 0.5,
			a : 0.02,
			enabled : 1.0,
			b : 0.5,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.5,
			textured : 0.0,
			g2 : 0.5,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.5,
			a2 : 0.02,
			r : 0.5,
			border_g : 1.0,
			rad : 71.13834,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
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
			r2 : 0.7,
			a : 0.6,
			enabled : 1.0,
			b : 0.8,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.8,
			textured : 0.0,
			g2 : 0.7,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.7,
			a2 : 0.0,
			r : 0.8,
			border_g : 1.0,
			rad : 0.0303,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
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
	'warp' : ('shader_body {\n' + '   vec3 ret2_1;\n' + '   vec4 lums2_2;\n' + '   vec4 lums_3;\n' + '   vec3 ret_4;\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5.z = 0.0;\n' + '  tmpvar_5.xy = texsize.zw;\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = (tmpvar_5 * 8.0);\n' + '   vec2 P_7;\n' + '  P_7 = (uv + (texsize.zw * tmpvar_6.xz));\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = dot (texture2D (sampler_main, P_7).xyz, vec3(0.32, 0.49, 0.29));\n' + '  lums_3.x = tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv - (texsize.zw * tmpvar_6.xz));\n' + '   float tmpvar_10;\n' + '  tmpvar_10 = dot (texture2D (sampler_main, P_9).xyz, vec3(0.32, 0.49, 0.29));\n' + '  lums_3.y = tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv + (texsize.zw * tmpvar_6.zy));\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = dot (texture2D (sampler_main, P_11).xyz, vec3(0.32, 0.49, 0.29));\n' + '  lums_3.z = tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (uv - (texsize.zw * tmpvar_6.zy));\n' + '   float tmpvar_14;\n' + '  tmpvar_14 = dot (texture2D (sampler_main, P_13).xyz, vec3(0.32, 0.49, 0.29));\n' + '  lums_3.w = tmpvar_14;\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15.x = (lums_3.x - lums_3.y);\n' + '  tmpvar_15.y = (lums_3.z - lums_3.w);\n' + '   vec4 tmpvar_16;\n' + '   vec2 P_17;\n' + '  P_17 = (uv + ((\n' + '    ((clamp ((\n' + '      (((4000.0 * tmpvar_15) / 8.0) * 0.5)\n' + '     + 0.5), 0.0, 1.0) * 2.0) - 1.0)\n' + '   * 1.4) * texsize.zw));\n' + '  tmpvar_16 = texture2D (sampler_fc_main, P_17);\n' + '  ret_4 = tmpvar_16.xyz;\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18 = ((0.5 - uv) + 0.5);\n' + '   vec2 P_19;\n' + '  P_19 = (tmpvar_18 + (texsize.zw * tmpvar_6.xz));\n' + '   float tmpvar_20;\n' + '  tmpvar_20 = dot (texture2D (sampler_main, P_19).xyz, vec3(0.32, 0.49, 0.29));\n' + '  lums2_2.x = tmpvar_20;\n' + '   vec2 P_21;\n' + '  P_21 = (tmpvar_18 - (texsize.zw * tmpvar_6.xz));\n' + '   float tmpvar_22;\n' + '  tmpvar_22 = dot (texture2D (sampler_main, P_21).xyz, vec3(0.32, 0.49, 0.29));\n' + '  lums2_2.y = tmpvar_22;\n' + '   vec2 P_23;\n' + '  P_23 = (tmpvar_18 + (texsize.zw * tmpvar_6.zy));\n' + '   float tmpvar_24;\n' + '  tmpvar_24 = dot (texture2D (sampler_main, P_23).xyz, vec3(0.32, 0.49, 0.29));\n' + '  lums2_2.z = tmpvar_24;\n' + '   vec2 P_25;\n' + '  P_25 = (tmpvar_18 - (texsize.zw * tmpvar_6.zy));\n' + '   float tmpvar_26;\n' + '  tmpvar_26 = dot (texture2D (sampler_main, P_25).xyz, vec3(0.32, 0.49, 0.29));\n' + '  lums2_2.w = tmpvar_26;\n' + '   vec2 tmpvar_27;\n' + '  tmpvar_27.x = (lums2_2.x - lums2_2.y);\n' + '  tmpvar_27.y = (lums2_2.z - lums2_2.w);\n' + '   vec2 P_28;\n' + '  P_28 = (tmpvar_18 + ((\n' + '    ((clamp ((\n' + '      (((4000.0 * tmpvar_27) / 8.0) * 0.5)\n' + '     + 0.5), 0.0, 1.0) * 2.0) - 1.0)\n' + '   * 1.4) * texsize.zw));\n' + '   vec3 tmpvar_29;\n' + '  tmpvar_29 = texture2D (sampler_fc_main, P_28).xyz;\n' + '  ret2_1 = tmpvar_29;\n' + '  ret_4 = (mix (ret_4, ret2_1, vec3(0.5, 0.5, 0.5)) * 0.93);\n' + '   vec4 tmpvar_30;\n' + '  tmpvar_30.w = 1.0;\n' + '  tmpvar_30.xyz = ret_4;\n' + '  vec4 ret4 = tmpvar_30;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   float dy_1;\n' + '   float dx_2;\n' + '   vec3 ret1_3;\n' + '   vec2 uv1_4;\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, uv).xyz;\n' + '  ret1_3 = tmpvar_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.y = 0.0;\n' + '  tmpvar_6.x = texsize.z;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7.x = 0.0;\n' + '  tmpvar_7.y = texsize.w;\n' + '   vec2 P_8;\n' + '  P_8 = (uv - tmpvar_6);\n' + '   vec2 P_9;\n' + '  P_9 = (uv + tmpvar_6);\n' + '   float tmpvar_10;\n' + '  tmpvar_10 = (texture2D (sampler_main, P_8).xyz - texture2D (sampler_main, P_9).xyz).x;\n' + '  dx_2 = tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - tmpvar_7);\n' + '   vec2 P_12;\n' + '  P_12 = (uv + tmpvar_7);\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = (texture2D (sampler_main, P_11).xyz - texture2D (sampler_main, P_12).xyz).x;\n' + '  dy_1 = tmpvar_13;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = dx_2;\n' + '  tmpvar_14.y = dy_1;\n' + '  uv1_4 = ((0.3 * cos(\n' + '    (((uv - 0.5) * 2.0) + 1.7)\n' + '  )) - (2.0 * tmpvar_14));\n' + '  ret1_3 = ((-(ret1_3) / 4.0) + ((6.0 * vec3(\n' + '    clamp ((0.03 / sqrt(dot (uv1_4, uv1_4))), 0.0, 1.0)\n' + '  )) * (-0.08 + ret1_3)));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 1.0;\n' + '  tmpvar_15.xyz = ret1_3;\n' + '  vec4 ret4 = tmpvar_15;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('zoom = 1.0+0.025*max(bass_att,treb_att);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
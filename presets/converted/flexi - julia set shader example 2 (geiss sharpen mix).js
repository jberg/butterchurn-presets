define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.8,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 2.498,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 4.438,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.36146,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.8,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.414,
		warpanimspeed : 2.13,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.025,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.65,
		wave_mystery : 1.0,
		decay : 0.98,
		wave_a : 100.0,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.8,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 1.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.05,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = 1.0;
m.wave_a = 0;
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
			g : 0.0,
			scaling : 1.83486,
			samples : 356.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 8.0,
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
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.88,
			r : 1.0,
			border_g : 1.0,
			rad : 1.08925,
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
			tex_ang : 1.82212,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.74192,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.52161,
			x : 0.5,
			y : 0.5,
			ang : 1.82212,
			sides : 8.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = ['sides'];
			return m;
		},
		'frame_eqs' : function(m) {
m.sides = (m.sides+(10*Math.sin((m.time+10))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('sides = sides + 10*sin(time+10);'),

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
	'warp' : ('shader_body {\n' + '   vec2 my_uv_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = ((uv - 0.5) * vec2(1.53, 1.53));\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = ((tmpvar_3.x * tmpvar_3.x) - (tmpvar_3.y * tmpvar_3.y));\n' + '  tmpvar_4.y = ((2.0 * tmpvar_3.x) * tmpvar_3.y);\n' + '  my_uv_1 = (tmpvar_4 + vec2(0.6, 0.75));\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = (texture2D (sampler_fc_main, my_uv_1) - 0.012).xyz;\n' + '  ret_2 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   float z_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 2.0);\n' + '   vec2 P_3;\n' + '  P_3 = (uv - (tmpvar_2 * vec2(1.0, 0.0)));\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (tmpvar_2 * vec2(1.0, 0.0)));\n' + '   vec2 P_5;\n' + '  P_5 = (uv - (tmpvar_2 * vec2(0.0, 1.0)));\n' + '   vec2 P_6;\n' + '  P_6 = (uv + (tmpvar_2 * vec2(0.0, 1.0)));\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (((\n' + '    ((dot (texture2D (sampler_main, uv).xyz, vec3(0.32, 0.49, 0.29)) * 5.0) - dot (texture2D (sampler_main, P_3).xyz, vec3(0.32, 0.49, 0.29)))\n' + '   - \n' + '    dot (texture2D (sampler_main, P_4).xyz, vec3(0.32, 0.49, 0.29))\n' + '  ) - dot (texture2D (sampler_main, P_5).xyz, vec3(0.32, 0.49, 0.29))) - dot (texture2D (sampler_main, P_6).xyz, vec3(0.32, 0.49, 0.29)));\n' + '  z_1 = tmpvar_7;\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = mix (vec3(0.96, 0.66, 0.0), vec3(0.0, 0.0, 0.2), vec3(z_1));\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('zoom = 1.0;\n' + 'wave_a = 0;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
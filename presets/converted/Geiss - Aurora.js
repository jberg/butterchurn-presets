define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.49,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.772,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.387,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 3.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 4.401,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.49,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.7,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.031,
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
		rot : 0.003,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 11.94,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.49,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.t = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.t = (m.time*2.3);
m.wave_x = (m.wave_x+(0.350*((0.70*Math.sin((2.221*m.time)))+(0.30*Math.sin((1.821*m.time))))));
m.wave_y = (m.wave_y+(0.350*((0.30*Math.sin((1.942*m.time)))+(0.70*Math.sin((2.522*m.time))))));
m.wave_r = (m.wave_r+(0.790*((0.60*Math.sin((0.823*m.t)))+(0.40*Math.sin((0.916*m.t))))));
m.wave_g = (m.wave_g+(0.790*((0.60*Math.sin((0.900*m.t)))+(0.40*Math.sin((1.023*m.t))))));
m.wave_b = (m.wave_b+(0.790*((0.60*Math.sin((0.808*m.t)))+(0.40*Math.sin((0.949*m.t))))));
m.rot = (m.rot+(0.010*((0.60*Math.sin((0.038*m.time)))+(0.40*Math.sin((0.054*m.time))))));
m.dx = (m.dx+(0.002*((0.60*Math.sin((0.434*m.time)))+(0.40*Math.sin((0.277*m.time))))));
m.dy = (m.dy+(0.002*((0.60*Math.sin((0.384*m.time)))+(0.40*Math.sin((0.477*m.time))))));
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
	'warp' : ('shader_body {\n' + '   vec2 v_1;\n' + '   vec3 ret_2;\n' + '  v_1 = ((normalize(\n' + '    (uv - 0.5)\n' + '  ) * aspect.xy) * (texsize.zw * 3.0));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (v_1 * 2.5));\n' + '  tmpvar_4 = texture2D (sampler_main, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv + (v_1 * 5.5));\n' + '  tmpvar_6 = texture2D (sampler_main, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (v_1 * -4.0));\n' + '  tmpvar_8 = texture2D (sampler_main, P_9);\n' + '  ret_2 = (0.25 * ((tmpvar_3.xyz + tmpvar_4.xyz) + (tmpvar_6.xyz + tmpvar_8.xyz)));\n' + '  ret_2 = (ret_2 - 0.01);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('t = time*2.3;\n' + 'wave_x = wave_x + 0.350*( 0.70*sin(2.221*time) + 0.30*sin(1.821*time) );\n' + 'wave_y = wave_y + 0.350*( 0.30*sin(1.942*time) + 0.70*sin(2.522*time) );\n' + 'wave_r = wave_r + 0.790*( 0.60*sin(0.823*t) + 0.40*sin(0.916*t) );\n' + 'wave_g = wave_g + 0.790*( 0.60*sin(0.900*t) + 0.40*sin(1.023*t) );\n' + 'wave_b = wave_b + 0.790*( 0.60*sin(0.808*t) + 0.40*sin(0.949*t) );\n' + 'rot = rot + 0.010*( 0.60*sin(0.038*time) + 0.40*sin(0.054*time) );\n' + 'dx = dx + 0.002*( 0.60*sin(0.434*time) + 0.40*sin(0.277*time) );\n' + 'dy = dy + 0.002*( 0.60*sin(0.384*time) + 0.40*sin(0.477*time) );'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
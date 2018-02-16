define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.6,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.013,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.01605,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.135,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
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
		wave_thick : 0.0,
		modwavealphaend : 1.65,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.125,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.25,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_g = (m.wave_g+(0.100*((0.90*Math.sin((0.583*m.time)))+(0.10*Math.sin((1.006*m.time))))));
m.wave_b = (m.wave_b+(0.100*((0.90*Math.sin((0.993*m.time)))+(0.10*Math.sin((0.933*m.time))))));
m.zoom = (m.zoom+(0.013*((0.60*Math.sin((0.339*m.time)))+(0.40*Math.sin((0.276*m.time))))));
m.rot = (m.rot+(0.040*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.cx = (m.cx+(0.003*((0.60*Math.sin((0.471*m.time)))+(0.40*Math.sin((0.297*m.time))))));
m.cy = (m.cy+(0.003*((0.60*Math.sin((0.379*m.time)))+(0.40*Math.sin((0.351*m.time))))));
m.dx = (m.dx+(0.003*((0.60*Math.sin((0.234*m.time)))+(0.40*Math.sin((0.277*m.time))))));
m.rot = (m.rot+(0.02*((Math.sin((m.time*2.134))+Math.sin((m.time*1.7134)))+Math.sin((m.time*2.834)))));
m.dx = (m.dx+(0.01*((Math.sin((m.time*1.134))+Math.sin((m.time*0.7134)))+Math.sin((m.time*2.334)))));
m.dy = (m.dy+(0.01*((Math.sin((m.time*1.8834))+Math.sin((m.time*1.0144)))+Math.sin((m.time*1.334)))));
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = ((uv_orig * texsize.xy) * texsize_noise_lq.zw);\n' + '  tmpvar_3 = texture2D (sampler_noise_lq, P_4);\n' + '  ret_1 = (ret_1 + ((\n' + '    (tmpvar_3.xyz * 2.0)\n' + '   - 1.0) * 0.0017));\n' + '  ret_1 = (ret_1 * 0.993);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   float b4_1;\n' + '   float b3_2;\n' + '   float b2_3;\n' + '   float b1_4;\n' + '   vec3 ret_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv);\n' + '  ret_5 = tmpvar_6.xyz;\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7.z = 0.0;\n' + '  tmpvar_7.xy = texsize.zw;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + tmpvar_7.xz);\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = dot (texture2D (sampler_main, P_8).xyz, vec3(0.32, 0.49, 0.29));\n' + '  b1_4 = tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv - tmpvar_7.xz);\n' + '   float tmpvar_11;\n' + '  tmpvar_11 = dot (texture2D (sampler_main, P_10).xyz, vec3(0.32, 0.49, 0.29));\n' + '  b2_3 = tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (uv + tmpvar_7.zy);\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = dot (texture2D (sampler_main, P_12).xyz, vec3(0.32, 0.49, 0.29));\n' + '  b3_2 = tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (uv - tmpvar_7.zy);\n' + '   float tmpvar_15;\n' + '  tmpvar_15 = dot (texture2D (sampler_main, P_14).xyz, vec3(0.32, 0.49, 0.29));\n' + '  b4_1 = tmpvar_15;\n' + '  ret_5 = -(ret_5);\n' + '  ret_5 = (ret_5 + (clamp (\n' + '    ((b1_4 - b2_3) * 64.0)\n' + '  , 0.0, 1.0) * vec3(1.0, 0.6, 0.1)));\n' + '  ret_5 = (ret_5 + (clamp (\n' + '    ((b3_2 - b4_1) * 64.0)\n' + '  , 0.0, 1.0) * vec3(0.2, 0.5, 0.7)));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_blur1, uv);\n' + '  ret_5 = (ret_5 - clamp ((\n' + '    (((tmpvar_16.xyz * scale1) + bias1) * 4.0)\n' + '   - 1.0), 0.0, 1.0));\n' + '  ret_5 = (ret_5 * 1.5);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17.w = 1.0;\n' + '  tmpvar_17.xyz = ret_5;\n' + '  vec4 ret4 = tmpvar_17;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_g = wave_g + 0.100*( 0.90*sin(0.583*time) + 0.10*sin(1.006*time) );\n' + 'wave_b = wave_b + 0.100*( 0.90*sin(0.993*time) + 0.10*sin(0.933*time) );\n' + 'zoom = zoom + 0.013*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );\n' + 'rot = rot + 0.040*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'cx = cx + 0.003*( 0.60*sin(0.471*time) + 0.40*sin(0.297*time) );\n' + 'cy = cy + 0.003*( 0.60*sin(0.379*time) + 0.40*sin(0.351*time) );\n' + 'dx = dx + 0.003*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );\n' + 'rot=rot+0.02*(sin(time*2.134)+sin(time*1.7134)+sin(time*2.834));\n' + 'dx=dx+0.01*(sin(time*1.134)+sin(time*0.7134)+sin(time*2.334));\n' + 'dy=dy+0.01*(sin(time*1.8834)+sin(time*1.0144)+sin(time*1.334));'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
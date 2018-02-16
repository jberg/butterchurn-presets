define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.998,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 3.828,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.905,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.80155,
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
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.421,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.36,
		warpanimspeed : 0.905,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.6,
		wave_y : 0.5,
		zoom : 1.002,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.95,
		wave_mystery : -0.4,
		decay : 0.98,
		wave_a : 0.177,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.97,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.t2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.650*((0.60*Math.sin((1.437*m.time)))+(0.40*Math.sin((0.970*m.time))))));
m.wave_g = (m.wave_g+(0.650*((0.60*Math.sin((1.344*m.time)))+(0.40*Math.sin((0.841*m.time))))));
m.wave_b = (m.wave_b+(0.650*((0.60*Math.sin((1.251*m.time)))+(0.40*Math.sin((1.055*m.time))))));
m.rot = (m.rot+(0.02*((0.60*Math.sin((0.181*m.time)))+(0.09*Math.sin((-0.279*m.time))))));
m.zoom = (m.zoom+(0.025*((0.60*Math.sin(((0.3131*m.time)+2)))+(0.4*Math.sin(((-0.479*m.time)+4))))));
m.decay = (m.decay-(0.01*equal(mod(m.frame,6), 0)));
m.t2 = (m.time*6);
m.wave_x = (0.5+(0.3*((0.60*Math.sin((0.374*m.t2)))+(0.40*Math.sin((0.294*m.t2))))));
m.wave_y = (0.5+(0.3*((0.60*Math.sin((0.393*m.t2)))+(0.40*Math.sin((0.223*m.t2))))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = 0;
m.dy = 0;
m.dx = (m.dx+(div((Math.cos(((m.y*29.37)-(m.time*1.9)))*1.0),m.pixelsx)*2));
m.dy = (m.dy+(div((Math.cos(((m.x*33.21)-(m.time*1.7)))*1.0),m.pixelsy)*2));
m.dx = (m.dx+(div((Math.cos(((m.y*77.55)-(m.time*2.1)))*1.0),m.pixelsx)*1.5));
m.dy = (m.dy+(div((Math.cos(((m.x*78.32)-(m.time*2.4)))*1.0),m.pixelsy)*1.5));
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
	'warp' : ('shader_body {\n' + '   vec2 dxy_1;\n' + '   vec3 ret_2;\n' + '  dxy_1.x = cos(((154.56 * uv_orig.y) - time));\n' + '  dxy_1.y = cos(((154.56 * uv_orig.x) - time));\n' + '   float tmpvar_3;\n' + '  tmpvar_3 = (time * 5.0);\n' + '  dxy_1.x = (dxy_1.x + cos((\n' + '    (412.16 * uv_orig.y)\n' + '   - tmpvar_3)));\n' + '  dxy_1.y = (dxy_1.y + cos((\n' + '    (412.16 * uv_orig.x)\n' + '   - tmpvar_3)));\n' + '  dxy_1.y = (dxy_1.y + 0.15);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (uv + (dxy_1 * texsize.zw));\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_fw_main, tmpvar_4);\n' + '  ret_2 = tmpvar_5.xyz;\n' + '   vec3 y_6;\n' + '  y_6 = (texture2D (sampler_main, uv_orig).xyz * 0.8);\n' + '  ret_2 = (max (ret_2, y_6) - 0.004);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uv);\n' + '  ret_1 = ((ret_1 * 0.8) + ((\n' + '    (tmpvar_3.xyz * scale1)\n' + '   + bias1) * 0.7));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.650*( 0.60*sin(1.437*time) + 0.40*sin(0.970*time) );\n' + 'wave_g = wave_g + 0.650*( 0.60*sin(1.344*time) + 0.40*sin(0.841*time) );\n' + 'wave_b = wave_b + 0.650*( 0.60*sin(1.251*time) + 0.40*sin(1.055*time) );\n' + 'rot = rot + 0.02*( 0.60*sin(0.181*time) + 0.09*sin(-0.279*time) );\n' + 'zoom = zoom + 0.025*( 0.60*sin(0.3131*time+2) + 0.4*sin(-0.479*time+4) );\n' + 'decay = decay - 0.01*equal(frame%6,0);\n' + 't2 = time*6;\n' + 'wave_x = 0.5 + 0.3*( 0.60*sin(0.374*t2) + 0.40*sin(0.294*t2) );\n' + 'wave_y = 0.5 + 0.3*( 0.60*sin(0.393*t2) + 0.40*sin(0.223*t2) );'),
	'pixel_eqs_str' : ('dx = 0;\n' + 'dy = 0;\n' + 'dx = dx + cos(y*29.37 - time*1.9) * 1.0/pixelsx * 2;\n' + 'dy = dy + cos(x*33.21 - time*1.7) * 1.0/pixelsy * 2;\n' + 'dx = dx + cos(y*77.55 - time*2.1) * 1.0/pixelsx * 1.5;\n' + 'dy = dy + cos(x*78.32 - time*2.4) * 1.0/pixelsy * 1.5;'),
};

return pmap;
});
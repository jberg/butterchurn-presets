define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.5,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 3.138,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 2.344314,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.122616,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
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
		zoom : 1.023,
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
		wave_thick : 1.0,
		modwavealphaend : 1.31,
		wave_mystery : 0.4,
		decay : 0.98,
		wave_a : 2.928553,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.83,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.dy_residual = 0;
m.dx_residual = 0;
m.bass_thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = 1;
m.wave_g = 0;
m.wave_b = 0;
m.wave_r = sqrt(m.wave_r);
m.wave_g = sqrt(m.wave_g);
m.wave_b = sqrt(m.wave_b);
m.rot = (m.rot+(0.010*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.cx = (m.cx+(0.210*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.294*m.time))))));
m.cy = (m.cy+(0.210*((0.60*Math.sin((0.393*m.time)))+(0.40*Math.sin((0.223*m.time))))));
m.dx = (m.dx+(0.003*((0.60*Math.sin((0.234*m.time)))+(0.40*Math.sin((0.277*m.time))))));
m.dy = (m.dy+(0.003*((0.60*Math.sin((0.284*m.time)))+(0.40*Math.sin((0.247*m.time))))));
m.decay = (m.decay-(0.01*equal(mod(m.frame,6), 0)));
m.dx = (m.dx+m.dx_residual);
m.dy = (m.dy+m.dy_residual);
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.dx_residual = (((equal(m.bass_thresh, 2.13)*0.016)*Math.sin((m.time*7)))+((1-equal(m.bass_thresh, 2.13))*m.dx_residual));
m.dy_residual = (((equal(m.bass_thresh, 2.13)*0.012)*Math.sin((m.time*9)))+((1-equal(m.bass_thresh, 2.13))*m.dy_residual));
m.wave_x = (m.wave_x-(m.dx_residual*7));
m.wave_y = (m.wave_y-(m.dy_residual*7));
m.wave_mystery = (m.time*0.03);
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (normalize((uv - uv_orig)) * texsize.zw);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 0.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '   vec2 P_5;\n' + '  P_5 = (uv - tmpvar_3);\n' + '   vec4 y_6;\n' + '  y_6 = (texture2D (sampler_main, P_5) * 0.9);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 0.0;\n' + '  tmpvar_7.xyz = max (tmpvar_4, y_6).xyz;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + tmpvar_3);\n' + '   vec4 y_9;\n' + '  y_9 = (texture2D (sampler_main, P_8) * 0.97);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 0.0;\n' + '  tmpvar_10.xyz = max (tmpvar_7, y_9).xyz;\n' + '   vec2 P_11;\n' + '  P_11 = (uv + (tmpvar_3 * 2.0));\n' + '   vec4 y_12;\n' + '  y_12 = (texture2D (sampler_main, P_11) * 0.97);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13.w = 0.0;\n' + '  tmpvar_13.xyz = max (tmpvar_10, y_12).xyz;\n' + '   vec2 P_14;\n' + '  P_14 = (uv + (tmpvar_3 * 3.0));\n' + '   vec4 y_15;\n' + '  y_15 = (texture2D (sampler_main, P_14) * 0.9);\n' + '  ret_1 = (max (tmpvar_13, y_15).xyz * 0.92);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '  uv_1 = (0.05 + (0.9 * uv));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv_1);\n' + '  ret_2 = tmpvar_3.xyz;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv_1);\n' + '  ret_2 = (abs((\n' + '    ((tmpvar_4.xyz * scale1) + bias1)\n' + '   - ret_2)) * 6.0);\n' + '  ret_2 = (ret_2 * 1.333);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = 1;\n' + 'wave_g = 0;\n' + 'wave_b = 0;\n' + 'wave_r = sqrt(wave_r);\n' + 'wave_g = sqrt(wave_g);\n' + 'wave_b = sqrt(wave_b);\n' + 'rot = rot + 0.010*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'cx = cx + 0.210*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );\n' + 'cy = cy + 0.210*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );\n' + 'dx = dx + 0.003*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );\n' + 'dy = dy + 0.003*( 0.60*sin(0.284*time) + 0.40*sin(0.247*time) );\n' + 'decay = decay - 0.01*equal(frame%6,0);\n' + 'dx = dx + dx_residual;\n' + 'dy = dy + dy_residual;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'dx_residual = equal(bass_thresh,2.13)*0.016*sin(time*7) + (1-equal(bass_thresh,2.13))*dx_residual;\n' + 'dy_residual = equal(bass_thresh,2.13)*0.012*sin(time*9) + (1-equal(bass_thresh,2.13))*dy_residual;\n' + 'wave_x = wave_x - dx_residual*7;\n' + 'wave_y = wave_y - dy_residual*7;\n' + 'wave_mystery = time*0.03;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
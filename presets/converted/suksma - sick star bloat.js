define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.7,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.0,
		echo_alpha : 0.8,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.1,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 1.0,
		mv_b : 1.0,
		echo_zoom : 1.216,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 1.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.99,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.1,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r-(0.4*m.bass));
m.wave_b = (m.wave_b-(0.4*m.treb));
m.wave_g = (m.wave_g-(0.4*m.mid));
m.mv_l = (m.mv_l+(0.2*m.bass));
m.mv_r = (m.mv_r+(m.wave_r*0.7));
m.mv_b = (m.mv_b+(m.wave_b*0.7));
m.mv_g = (m.mv_g+(m.wave_g*0.7));
m.rot = (m.rot+((0.8*m.bass)*Math.min((0.07*sqr(div(m.zoom,m.treb_att))), (0.07*sqr(div(m.zoom,m.bass_att))))));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = ((m.zoom+0.019)+(0.3*Math.min(((0.55-m.rad)*Math.max(m.bass_att, m.bass)), (((0.55-m.rad)*0.3)*Math.sin(m.bass)))));
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
			a : 0.6,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.6,
			border_b : 1.0,
			b2 : 0.5,
			a2 : 0.5,
			r : 0.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 13.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.q1+((Math.floor(rand(15))*m.bass_att)*0.02));
m.y = (m.q2+((Math.floor(rand(15))*m.mid_att)*0.02));
m.rad = (0.076+(0.004*Math.floor(rand(11))));
m.b = ((0.35+(0.2*Math.sin((m.time*0.73))))+(Math.floor(rand(100))*0.001));
m.b2 = ((0.35+(0.2*Math.sin((m.time*0.73))))+(Math.floor(rand(100))*0.001));
m.g = ((0.55+(0.125*Math.sin((m.time*0.43))))+(Math.floor(rand(100))*0.001));
m.g2 = ((0.55+(0.125*Math.sin((m.time*0.43))))+(Math.floor(rand(100))*0.001));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = q1 + int(rand(15))*bass_att*0.02;\n' + 'y = q2 + int(rand(15))*mid_att*0.02;\n' + 'rad = 0.076 + 0.004*int(rand(11));\n' + 'b = .35+.2*sin(time*0.73)+int(rand(100))*0.001;\n' + 'b2 = .35+.2*sin(time*0.73)+int(rand(100))*0.001;\n' + 'g = .55+.125*sin(time*.43)+int(rand(100))*0.001;\n' + 'g2 = .55+.125*sin(time*.43)+int(rand(100))*0.001;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.6,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.6,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.5,
			r : 0.0,
			border_g : 1.0,
			rad : 0.0999,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 14.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.q2+((Math.floor(rand(15))*m.mid_att)*0.02));
m.y = ((1-m.q1)+((Math.floor(rand(15))*m.treb_att)*0.02));
m.rad = (0.076+(0.004*Math.floor(rand(11))));
m.r = ((0.4+(0.2*Math.sin((m.time*0.53))))+(Math.floor(rand(100))*0.001));
m.r2 = ((0.4+(0.2*Math.sin((m.time*0.53))))+(Math.floor(rand(100))*0.001));
m.b = ((0.55+(0.12*Math.sin((m.time*0.63))))+(Math.floor(rand(100))*0.001));
m.b2 = ((0.55+(0.12*Math.sin((m.time*0.63))))+(Math.floor(rand(100))*0.001));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = q2 + int(rand(15))*mid_att*0.02;\n' + 'y = 1-q1 + int(rand(15))*treb_att*0.02;\n' + 'rad = 0.076 + 0.004*int(rand(11));\n' + 'r = .4 +.2*sin(time*.53)+int(rand(100))*0.001;\n' + 'r2 = .4 +.2*sin(time*.53)+int(rand(100))*0.001;\n' + 'b  = .55 +.12*sin(time*.63)+int(rand(100))*0.001;\n' + 'b2  = .55 +.12*sin(time*.63)+int(rand(100))*0.001;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.2,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.42077,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.2,
			r : 1.0,
			border_g : 1.0,
			rad : 2.29737,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_noise_lq, tmpvar_3);\n' + '  ret_1 = (ret_1 + ((\n' + '    (tmpvar_4.xyz - 0.5)\n' + '   / 256.0) * 3.0));\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = fract((ret_1 - 0.005));\n' + '  ret_1 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = tmpvar_5;\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec3 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv).xxx;\n' + '  ret_1 = tmpvar_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uv);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur3, uv);\n' + '  ret_1 = ((pow (\n' + '    mix (vec3((((tmpvar_3.xyz * scale1) + bias1).x + ((tmpvar_4.xyz * scale3) + bias3).x)), ret_1, pow (ret_1, vec3(0.5, 0.5, 0.5)))\n' + '  , vec3(0.5, 1.2, 8.0)) * 1.25) - 0.25);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r - 0.4*bass;\n' + 'wave_b= wave_b - 0.4*treb;\n' + 'wave_g = wave_g - 0.4*mid;\n' + 'mv_l = mv_l + 0.2*bass;\n' + 'mv_r = mv_r + wave_r *0.7;\n' + 'mv_b = mv_b + wave_b *0.7;\n' + 'mv_g = mv_g + wave_g *0.7;\n' + 'rot = rot + 0.8*bass*(min(0.07*sqr(zoom/treb_att),0.07*sqr(zoom/bass_att)));'),
	'pixel_eqs_str' : ('zoom = zoom + 0.019 + 0.3*min((0.55-rad)*max(bass_att,bass),(0.55-rad)*0.3*sin(bass));'),
};

return pmap;
});
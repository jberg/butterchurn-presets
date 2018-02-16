define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.700001,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.591233,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 1.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.074097,
		mv_dx : -0.005893,
		mv_dy : -0.973957,
		mv_a : 1.0,
		fshader : 1.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 0.055806,
		echo_zoom : 1.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.249397,
		wave_x : 0.482812,
		wave_y : 0.467471,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.261032,
		decay : 0.99,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.835033,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.5,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.ray = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = ((m.wave_r+(0.5*Math.sin((m.treb_att*33))))+(m.bass_att*0.3));
m.wave_b = ((m.wave_b+(0.5*Math.sin((m.treb_att*33))))+(m.mid_att*0.3));
m.rot = (Math.sin(m.time)*(0.4*Math.sin((m.treb_att*0.1))));
m.warp = (0.9*Math.sin((m.treb_att*0.9)));
m.mv_l = Math.sin(m.treb_att);
m.mv_b = div(m.treb_att,2.5);
m.mv_r = div(m.mid_att,2.5);
m.decay = Math.sin(m.bass_att);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.ray = (pow(m.rad, 1.8)+0.05);
m.zoom = (((div(m.ray,m.rad)*1.4)+(0.3*Math.sin((m.ang*(m.bass*5)))))+(m.bass*0.2));
m.mv_r = div(m.treb_att,2.5);
m.mv_g = div(m.mid_att,2.5);
m.mv_a = m.bass_att;
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
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
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
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.6,
			r : 1.0,
			border_g : 1.0,
			rad : 0.164463,
			x : 0.45,
			y : 0.5,
			ang : 0.0,
			sides : 7.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+div(Math.sin(m.treb_att),2.5));
m.y = (m.y+div(Math.sin(m.mid_att),3.5));
m.ang = div(Math.sin(m.mid_att),2);
m.rad = div(m.bass_att,5.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = x + sin(treb_att) / 2.5;\n' + 'y = y + sin(mid_att) / 3.5;\n' + 'ang = sin(mid_att) / 2;\n' + 'rad = bass_att / 5.5;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.6,
			r : 1.0,
			border_g : 1.0,
			rad : 0.164463,
			x : 0.55,
			y : 0.49,
			ang : 0.0,
			sides : 7.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x-div(Math.sin(m.treb_att),2.5));
m.y = (m.y-div(Math.sin(m.mid_att),3.5));
m.ang = (Math.sin(m.mid_att)*2);
m.rad = div(m.bass_att,5.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = x - sin(treb_att) / 2.5;\n' + 'y = y - sin(mid_att) / 3.5;\n' + 'ang = sin(mid_att) * 2;\n' + 'rad = bass_att / 5.5;'),

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
	'warp' : (''),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '  uv_1 = (0.05 + (0.9 * uv));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv_1);\n' + '  ret_2 = tmpvar_3.xyz;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv_1);\n' + '  ret_2 = (abs((\n' + '    ((tmpvar_4.xyz * scale1) + bias1)\n' + '   - ret_2)) * 6.0);\n' + '  ret_2 = (ret_2 * 1.333);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'wave_r = wave_r + .5*sin(treb_att*33) + bass_att*.3;\n' + 'wave_b = wave_b + .5*sin(treb_att*33) + mid_att*.3;\n' + 'rot = sin(time) * (.4*sin(treb_att*.1));\n' + 'warp = .9*sin(treb_att*.9);\n' + 'mv_l = sin(treb_att);\n' + 'mv_b = treb_att / 2.5;\n' + 'mv_r = mid_att / 2.5;\n' + 'decay = sin(bass_att);'),
	'pixel_eqs_str' : ('ray = pow(rad,1.8)+.05;\n' + 'zoom = (ray/rad)*1.4 + .3*sin(ang*(bass*5))+(bass*.2);\n' + 'mv_r = treb_att / 2.5;\n' + 'mv_g = mid_att / 2.5;\n' + 'mv_a = bass_att;'),
};

return pmap;
});
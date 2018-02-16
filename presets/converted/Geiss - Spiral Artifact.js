define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.6,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 3.63,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.0,
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
		wave_r : 0.6,
		ib_r : 0.25,
		mv_b : 0.35,
		echo_zoom : 2.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.35,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.96971,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.55,
		wave_mystery : -0.3,
		decay : 1.0,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.6,
		ib_b : 0.25,
		mv_r : 0.35,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.15,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.decay_to = 0;
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.prev_beat = 0;
m.rot_sum = 0;
m.q5 = 0;
m.q6 = 0;
m.decay_rate = 0;
m.is_beat = 0;
m.rot_sim = 0;
m.min_att = 0;
m.beat = 0;
m.beat_level = 0;
m.rot_sum = 0;
m.q2 = ((0.07+((0.04*rand(1000))*0.001))+((0.03*rand(1000))*0.001));
m.q3 = (1.035+((0.06*((rand(1000)+rand(1000))+rand(1000)))*0.000333));
		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.500*((0.60*Math.sin((1.980*m.time)))+(0.40*Math.sin((3.047*m.time))))));
m.wave_g = (m.wave_g+(0.500*((0.60*Math.sin((2.835*m.time)))+(0.40*Math.sin((2.081*m.time))))));
m.wave_b = (m.wave_b+(0.500*((0.60*Math.sin((3.814*m.time)))+(0.40*Math.sin((1.011*m.time))))));
m.cx = 0.5;
m.cy = 0.5;
m.rot = m.q2;
m.zoom = ((m.zoom-1)+m.q3);
m.rot_sum = (m.rot_sum+m.rot);
m.q1 = -m.rot_sum;
m.q5 = Math.cos(m.rot_sum);
m.q6 = Math.sin(m.rot_sim);
m.monitor = m.q2;
m.min_att = 2.5;
m.decay_to = 0.8;
m.decay_rate = pow(0.9990, m.fps);
m.beat = div(m.bass,Math.max(m.min_att, m.bass_att));
m.beat = Math.max(m.beat, div(m.mid,Math.max(m.min_att, m.mid_att)));
m.beat = Math.max(m.beat, div(m.treb,Math.max(m.min_att, m.treb_att)));
m.beat = Math.max(m.beat, (((m.prev_beat-m.decay_to)*m.decay_rate)+m.decay_to));
m.beat_level = (((m.beat-m.prev_beat)-0.02)*24);
m.is_beat = above(m.beat_level, 0.5);
m.prev_beat = m.beat;
m.wave_a = m.beat_level;
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_pw_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 - 0.004);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec2 uv2_2;\n' + '  uv_1 = (uv - 0.5);\n' + '  uv_1 = (uv_1 * (min (aspect.x, aspect.y) * 0.8));\n' + '  uv_1 = (uv_1 * aspect.xy);\n' + '   float tmpvar_3;\n' + '  tmpvar_3 = sin(_qa.x);\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = cos(_qa.x);\n' + '  uv2_2.x = ((uv_1.x * tmpvar_4) - (uv_1.y * tmpvar_3));\n' + '  uv2_2.y = ((uv_1.x * tmpvar_3) + (uv_1.y * tmpvar_4));\n' + '  uv2_2 = (uv2_2 * aspect.zw);\n' + '  uv2_2 = (uv2_2 + 0.5);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, uv2_2);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur1, uv2_2);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = (abs((\n' + '    (tmpvar_5.xyz * 2.65)\n' + '   + \n' + '    (((tmpvar_6.xyz * scale1) + bias1) * -2.0)\n' + '  )) * 1.5);\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('rot_sum = 0;\n' + 'q2 = 0.07 + 0.04*rand(1000)*0.001 + 0.03*rand(1000)*0.001;\n' + 'q3 = 1.035 + 0.06*(rand(1000)+rand(1000)+rand(1000))*0.000333;'),
	'frame_eqs_str' : ('wave_r = wave_r + 0.500*( 0.60*sin(1.980*time) + 0.40*sin(3.047*time) );\n' + 'wave_g = wave_g + 0.500*( 0.60*sin(2.835*time) + 0.40*sin(2.081*time) );\n' + 'wave_b = wave_b + 0.500*( 0.60*sin(3.814*time) + 0.40*sin(1.011*time) );\n' + 'cx = 0.5;\n' + 'cy = 0.5;\n' + 'rot = q2;\n' + 'zoom = zoom-1 + q3;\n' + 'rot_sum = rot_sum + rot;\n' + 'q1 = -rot_sum;\n' + 'q5 = cos(rot_sum);\n' + 'q6 = sin(rot_sim);\n' + 'monitor = q2;\n' + 'min_att    = 2.5;\n' + 'decay_to   = 0.8;\n' + 'decay_rate = pow(0.9990, fps);\n' + 'beat =           bass/max(min_att,bass_att);\n' + 'beat = max(beat, mid /max(min_att,mid_att ));\n' + 'beat = max(beat, treb/max(min_att,treb_att));\n' + 'beat = max( beat, (prev_beat-decay_to)*decay_rate + decay_to );\n' + 'beat_level     = (beat - prev_beat - 0.02)*24;\n' + 'is_beat = above(beat_level, 0.5);\n' + 'prev_beat = beat;\n' + 'wave_a = beat_level;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
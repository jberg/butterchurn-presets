define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 3.138,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.694,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.17963,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 5.0,
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
		echo_zoom : 1.169,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.053,
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
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 3.3,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.8,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.decay_to = 0;
m.prev_beat = 0;
m.decay_rate = 0;
m.is_beat = 0;
m.dy_residual = 0;
m.dx_residual = 0;
m.min_att = 0;
m.beat = 0;
m.beat_level = 0;
m.bass_thresh = 0;
m.dx_residual = 0;
m.dy_residual = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.650*((0.60*Math.sin((1.437*m.time)))+(0.40*Math.sin((0.970*m.time))))));
m.wave_g = (m.wave_g+(0.650*((0.60*Math.sin((1.344*m.time)))+(0.40*Math.sin((0.841*m.time))))));
m.wave_b = (m.wave_b+(0.650*((0.60*Math.sin((1.251*m.time)))+(0.40*Math.sin((1.055*m.time))))));
m.rot = (m.rot+(0.010*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.cx = (m.cx+(0.210*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.294*m.time))))));
m.cy = (m.cy+(0.210*((0.60*Math.sin((0.393*m.time)))+(0.40*Math.sin((0.223*m.time))))));
m.dx = (m.dx+(0.010*((0.60*Math.sin((0.234*m.time)))+(0.40*Math.sin((0.277*m.time))))));
m.dy = (m.dy+(0.010*((0.60*Math.sin((0.284*m.time)))+(0.40*Math.sin((0.247*m.time))))));
m.decay = (m.decay-(0.01*equal(mod(m.frame,6), 0)));
m.dx = (m.dx+(m.dx_residual*0.01));
m.dy = (m.dy+(m.dy_residual*0.01));
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.decay_rate = pow(0.993, m.fps);
m.min_att = 2.5;
m.decay_to = 1.0;
m.beat = div(m.bass,Math.max(m.min_att, m.bass_att));
m.beat = Math.max(m.beat, div(m.mid,Math.max(m.min_att, m.mid_att)));
m.beat = Math.max(m.beat, div(m.treb,Math.max(m.min_att, m.treb_att)));
m.beat = Math.max(m.beat, (((m.prev_beat-m.decay_to)*m.decay_rate)+m.decay_to));
m.beat_level = (((m.beat-m.prev_beat)-0.1)*24);
m.is_beat = above(m.beat_level, 0.5);
m.prev_beat = m.beat;
m.dx_residual = ((m.dx_residual*(1-m.is_beat))+(m.is_beat*(((rand(100)*0.01)*2)-1)));
m.dy_residual = ((m.dy_residual*(1-m.is_beat))+(m.is_beat*(((rand(100)*0.01)*2)-1)));
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = ((uv * texsize.xy) * texsize_noise_lq.zw);\n' + '  tmpvar_3 = texture2D (sampler_noise_lq, P_4);\n' + '  ret_1 = (ret_1 + ((\n' + '    (tmpvar_3.xxx * 2.0)\n' + '   - 1.0) * 0.05));\n' + '  ret_1 = (ret_1 * 0.97);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 * 1.333);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('dx_residual = 0;\n' + 'dy_residual = 0;'),
	'frame_eqs_str' : ('wave_r = wave_r + 0.650*( 0.60*sin(1.437*time) + 0.40*sin(0.970*time) );\n' + 'wave_g = wave_g + 0.650*( 0.60*sin(1.344*time) + 0.40*sin(0.841*time) );\n' + 'wave_b = wave_b + 0.650*( 0.60*sin(1.251*time) + 0.40*sin(1.055*time) );\n' + 'rot = rot + 0.010*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'cx = cx + 0.210*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );\n' + 'cy = cy + 0.210*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );\n' + 'dx = dx + 0.010*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );\n' + 'dy = dy + 0.010*( 0.60*sin(0.284*time) + 0.40*sin(0.247*time) );\n' + 'decay = decay - 0.01*equal(frame%6,0);\n' + 'dx = dx + dx_residual*0.01;\n' + 'dy = dy + dy_residual*0.01;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'decay_rate = pow(0.993, fps);\n' + 'min_att    = 2.5;\n' + 'decay_to   = 1.0;\n' + 'beat =           bass/max(min_att,bass_att);\n' + 'beat = max(beat, mid /max(min_att,mid_att ));\n' + 'beat = max(beat, treb/max(min_att,treb_att));\n' + 'beat = max( beat, (prev_beat-decay_to)*decay_rate + decay_to );\n' + 'beat_level     = (beat - prev_beat - 0.1)*24;\n' + 'is_beat = above(beat_level, 0.5);\n' + 'prev_beat = beat;\n' + 'dx_residual = dx_residual*(1-is_beat) + (is_beat)*(rand(100)*0.01*2-1);\n' + 'dy_residual = dy_residual*(1-is_beat) + (is_beat)*(rand(100)*0.01*2-1);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
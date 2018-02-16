define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.6,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 0.894,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 8.433,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.03038,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 1.0,
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
		warpanimspeed : 1.348,
		wave_dots : 1.0,
		mv_g : 0.35,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.94275,
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
		rot : 1.18,
		wave_thick : 1.0,
		modwavealphaend : 1.55,
		wave_mystery : -0.3,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.6,
		ib_b : 0.25,
		mv_r : 0.35,
		rating : 0.0,
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
m.beat_level = (((m.beat-m.prev_beat)-0.02)*14);
m.is_beat = above(m.beat_level, 0.5);
m.prev_beat = m.beat;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.5,
			g : 0.9,
			scaling : 0.16678,
			samples : 22.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 20.0,
			},
		'init_eqs' : function(m) {
m.t1 = 0;
m.s1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['b','g','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (m.r+(0.500*((0.60*Math.sin((0.980*m.time)))+(0.40*Math.sin((1.047*m.time))))));
m.g = (m.g+(0.500*((0.60*Math.sin((0.635*m.time)))+(0.40*Math.sin((1.181*m.time))))));
m.b = (m.b+(0.500*((0.60*Math.sin((0.714*m.time)))+(0.40*Math.sin((0.511*m.time))))));
m.s1 = Math.max(div(m.bass,m.bass_att), Math.max(div(m.treb,m.treb_att), div(m.mid,m.mid_att)));
m.samples = Math.max(0, ((m.s1-1.1)*500));
		return m;
	},
		'point_eqs' : function(m) {
m.r = (m.r+((((rand(100)*0.01)*2)-1)*0.10));
m.g = (m.g+((((rand(100)*0.01)*2)-1)*0.10));
m.b = (m.b+((((rand(100)*0.01)*2)-1)*0.10));
m.r = Math.max(0, m.r);
m.g = Math.max(0, m.g);
m.b = Math.max(0, m.b);
m.r = Math.min(1, m.r);
m.g = Math.min(1, m.g);
m.b = Math.min(1, m.b);
m.x = (rand(1000)*0.001);
m.y = (rand(1000)*0.001);
m.t1 = m.r;
m.t2 = m.g;
m.t3 = m.b;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = r + 0.500*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );\n' + 'g = g + 0.500*( 0.60*sin(0.635*time) + 0.40*sin(1.181*time) );\n' + 'b = b + 0.500*( 0.60*sin(0.714*time) + 0.40*sin(0.511*time) );\n' + 's1 = max(bass/bass_att, max(treb/treb_att, mid/mid_att));\n' + 'samples = max(0, (s1 - 1.1)*500);'),
		'point_eqs_str' : ('r = r + (rand(100)*0.01*2-1)*0.10;\n' + 'g = g + (rand(100)*0.01*2-1)*0.10;\n' + 'b = b + (rand(100)*0.01*2-1)*0.10;\n' + 'r = max(0, r);\n' + 'g = max(0, g);\n' + 'b = max(0, b);\n' + 'r = min(1, r);\n' + 'g = min(1, g);\n' + 'b = min(1, b);\n' + 'x = rand(1000)*0.001;\n' + 'y = rand(1000)*0.001;\n' + 't1 = r;\n' + 't2 = g;\n' + 't3 = b;'),

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
	'warp' : ('shader_body {\n' + '   vec3 xd_1;\n' + '   vec3 xc_2;\n' + '   vec3 xb_3;\n' + '   vec3 xa_4;\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5.z = 0.0;\n' + '  tmpvar_5.xy = texsize.zw;\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = (tmpvar_5 * 1.5);\n' + '   vec2 P_7;\n' + '  P_7 = (uv + tmpvar_6.xz);\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_main, P_7).xyz;\n' + '  xa_4 = tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv - tmpvar_6.xz);\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_main, P_9).xyz;\n' + '  xb_3 = tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv + tmpvar_6.zy);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_main, P_11).xyz;\n' + '  xc_2 = tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (uv - tmpvar_6.zy);\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_main, P_13).xyz;\n' + '  xd_1 = tmpvar_14;\n' + '   float tmpvar_15;\n' + '  tmpvar_15 = max (max (dot (xa_4, vec3(0.32, 0.49, 0.29)), dot (xb_3, vec3(0.32, 0.49, 0.29))), max (dot (xc_2, vec3(0.32, 0.49, 0.29)), dot (xd_1, vec3(0.32, 0.49, 0.29))));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = (mix (mix (\n' + '    mix (xa_4, xb_3, vec3(clamp (((\n' + '      (dot (xb_3, vec3(0.32, 0.49, 0.29)) - tmpvar_15)\n' + '     + 0.03) * 310.0), 0.0, 1.0)))\n' + '  , xc_2, vec3(\n' + '    clamp ((((\n' + '      dot (xc_2, vec3(0.32, 0.49, 0.29))\n' + '     - tmpvar_15) + 0.03) * 310.0), 0.0, 1.0)\n' + '  )), xd_1, vec3(clamp (\n' + '    (((dot (xd_1, vec3(0.32, 0.49, 0.29)) - tmpvar_15) + 0.03) * 310.0)\n' + '  , 0.0, 1.0))) - 0.004);\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec2 uv2_2;\n' + '  uv_1 = (uv - 0.5);\n' + '  uv_1 = (uv_1 * (min (aspect.x, aspect.y) * 0.8));\n' + '  uv_1 = (uv_1 * aspect.xy);\n' + '   float tmpvar_3;\n' + '  tmpvar_3 = sin(_qa.x);\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = cos(_qa.x);\n' + '  uv2_2.x = ((uv_1.x * tmpvar_4) - (uv_1.y * tmpvar_3));\n' + '  uv2_2.y = ((uv_1.x * tmpvar_3) + (uv_1.y * tmpvar_4));\n' + '  uv2_2 = (uv2_2 * aspect.zw);\n' + '  uv2_2 = (uv2_2 + 0.5);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, uv2_2);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur1, uv2_2);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = abs(((tmpvar_5.xyz * 2.65) + (\n' + '    ((tmpvar_6.xyz * scale1) + bias1)\n' + '   * -2.0)));\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('rot_sum = 0;\n' + 'q2 = 0.07 + 0.04*rand(1000)*0.001 + 0.03*rand(1000)*0.001;\n' + 'q3 = 1.035 + 0.06*(rand(1000)+rand(1000)+rand(1000))*0.000333;'),
	'frame_eqs_str' : ('cx = 0.5;\n' + 'cy = 0.5;\n' + 'rot = q2;\n' + 'zoom = zoom-1 + q3;\n' + 'rot_sum = rot_sum + rot;\n' + 'q1 = -rot_sum;\n' + 'q5 = cos(rot_sum);\n' + 'q6 = sin(rot_sim);\n' + 'monitor = q2;\n' + 'min_att    = 2.5;\n' + 'decay_to   = 0.8;\n' + 'decay_rate = pow(0.9990, fps);\n' + 'beat =           bass/max(min_att,bass_att);\n' + 'beat = max(beat, mid /max(min_att,mid_att ));\n' + 'beat = max(beat, treb/max(min_att,treb_att));\n' + 'beat = max( beat, (prev_beat-decay_to)*decay_rate + decay_to );\n' + 'beat_level     = (beat - prev_beat - 0.02)*14;\n' + 'is_beat = above(beat_level, 0.5);\n' + 'prev_beat = beat;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
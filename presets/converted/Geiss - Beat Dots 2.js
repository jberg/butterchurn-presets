define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.61,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.111,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.02001,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.86,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.45,
		zoom : 1.05,
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
		modwavealphaend : 1.53,
		wave_mystery : -0.16,
		decay : 0.99,
		wave_a : 0.451,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.29,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.85,
		b1n : 0.4,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.decay_to = 0;
m.q1 = 0;
m.q2 = 0;
m.prev_beat = 0;
m.decay_rate = 0;
m.q9 = 0;
m.is_beat = 0;
m.q11 = 0;
m.q12 = 0;
m.q13 = 0;
m.q14 = 0;
m.min_att = 0;
m.rg = 0;
m.q15 = 0;
m.q16 = 0;
m.beat = 0;
m.beat_level = 0;
m.rg2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.200*((0.60*Math.sin((1.517*m.time)))+(0.40*Math.sin((1.580*m.time))))));
m.wave_g = (m.wave_g+(0.200*((0.60*Math.sin((1.088*m.time)))+(0.40*Math.sin((1.076*m.time))))));
m.wave_b = (m.wave_b+(0.200*((0.60*Math.sin((1.037*m.time)))+(0.40*Math.sin((0.922*m.time))))));
m.rot = (m.rot+(0.010*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.cx = (m.cx+(0.110*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.294*m.time))))));
m.cy = (m.cy+(0.110*((0.60*Math.sin((0.393*m.time)))+(0.40*Math.sin((0.223*m.time))))));
m.q1 = Math.cos((1.41*m.time));
m.q2 = (m.time+(0.3*Math.sin((m.time*1.47))));
m.rg = Math.max((m.rg*0.77), (0.02+(0.5*Math.min(2, (Math.max(0, (m.mid_att-1))*1.3)))));
m.q9 = (m.rg*above(m.rg, (m.rg2*2)));
m.rg2 = Math.max(m.rg, (m.rg2*0.8));
m.monitor = m.q9;
m.q11 = m.aspectx;
m.q12 = m.aspecty;
m.q13 = m.wave_r;
m.q14 = m.wave_g;
m.q15 = m.wave_b;
m.q16 = (rand(100)*0.01);
m.decay_rate = pow(0.993, m.fps);
m.min_att = 2.5;
m.decay_to = 1.0;
m.beat = div(m.bass,Math.max(m.min_att, m.bass_att));
m.beat = Math.max(m.beat, div(m.mid,Math.max(m.min_att, m.mid_att)));
m.beat = Math.max(m.beat, div(m.treb,Math.max(m.min_att, m.treb_att)));
m.beat = Math.max(m.beat, (((m.prev_beat-m.decay_to)*m.decay_rate)+m.decay_to));
m.beat_level = (((m.beat-m.prev_beat)-0.0)*24);
m.is_beat = above(m.beat_level, 0.5);
m.prev_beat = m.beat;
m.q1 = m.is_beat;
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
			r2 : 0.5,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.7,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.9,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 16.0,
			border_r : 1.0,
			num_inst : 5.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q9 = 0;
m.q11 = 0;
m.q12 = 0;
m.q13 = 0;
m.q14 = 0;
m.q15 = 0;
m.q16 = 0;
m.ang2 = 0;
m.rad2 = 0;

			m.rkeys = ['a','a2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang2 = (((div(m.instance,m.num_inst)*6.28)+m.time)+(m.q16*6.28));
m.rad2 = 0.1;
m.x = (0.5+((m.rad2*Math.cos(m.ang2))*m.q11));
m.y = (0.5+((m.rad2*Math.sin(m.ang2))*m.q12));
m.a = (m.a*m.q1);
m.a2 = (m.a2*m.q1);
m.rad = (Math.min(0.8, (0.04+(0.04*m.q9)))*m.q1);
m.r = m.q15;
m.g = m.q14;
m.b = m.q13;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang2 = instance/num_inst*6.28 + time + q16*6.28;\n' + 'rad2 = 0.1;\n' + 'x = 0.5 + rad2*cos(ang2)*q11;\n' + 'y = 0.5 + rad2*sin(ang2)*q12;\n' + 'a = a * q1;\n' + 'a2 = a2 * q1;\n' + 'rad = min(0.8, 0.04 + 0.04*q9) * q1;\n' + 'r = q15;\n' + 'g = q14;\n' + 'b = q13;'),

		},
		{
		'baseVals' : {
			r2 : 0.5,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.5,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.9,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q9 = 0;

			m.rkeys = ['a'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = 1.7;
m.r = 0.1;
m.x = (0.5+(m.r*Math.cos(m.ang)));
m.y = (0.5+(m.r*Math.sin(m.ang)));
m.a = (m.a*m.q9);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = 1.7;\n' + 'r = 0.1;\n' + 'x = 0.5 + r*cos(ang);\n' + 'y = 0.5 + r*sin(ang);\n' + 'a = a * q9;'),

		},
		{
		'baseVals' : {
			r2 : 0.5,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.5,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.9,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q9 = 0;

			m.rkeys = ['a'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = 4.84;
m.r = 0.1;
m.x = (0.5+(m.r*Math.cos(m.ang)));
m.y = (0.5+(m.r*Math.sin(m.ang)));
m.a = (m.a*m.q9);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = 4.84;\n' + 'r = 0.1;\n' + 'x = 0.5 + r*cos(ang);\n' + 'y = 0.5 + r*sin(ang);\n' + 'a = a * q9;'),

		},
		{
		'baseVals' : {
			r2 : 0.5,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.5,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.9,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q9 = 0;

			m.rkeys = ['a'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = 3.14;
m.r = 0.1;
m.x = (0.5+(m.r*Math.cos(m.ang)));
m.y = (0.5+(m.r*Math.sin(m.ang)));
m.a = (m.a*m.q9);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = 3.14;\n' + 'r = 0.1;\n' + 'x = 0.5 + r*cos(ang);\n' + 'y = 0.5 + r*sin(ang);\n' + 'a = a * q9;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 * (0.8 + (0.17 * \n' + '    clamp ((rad * 5.0), 0.0, 1.0)\n' + '  )));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 * 1.8);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.200*( 0.60*sin(1.517*time) + 0.40*sin(1.580*time) );\n' + 'wave_g = wave_g + 0.200*( 0.60*sin(1.088*time) + 0.40*sin(1.076*time) );\n' + 'wave_b = wave_b + 0.200*( 0.60*sin(1.037*time) + 0.40*sin(0.922*time) );\n' + 'rot = rot + 0.010*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'cx = cx + 0.110*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );\n' + 'cy = cy + 0.110*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );\n' + 'q1=cos(1.41*time);\n' + 'q2=time + 0.3*sin(time*1.47);\n' + 'rg = max(rg*0.77, 0.02 + 0.5*min(2,max(0,mid_att-1)*1.3));\n' + 'q9 = rg * above(rg,rg2*2);\n' + 'rg2 = max(rg, rg2*0.8);\n' + 'monitor = q9;\n' + 'q11 = aspectx;\n' + 'q12 = aspecty;\n' + 'q13 = wave_r;\n' + 'q14 = wave_g;\n' + 'q15 = wave_b;\n' + 'q16 = rand(100)*0.01;\n' + 'decay_rate = pow(0.993, fps);\n' + 'min_att    = 2.5;\n' + 'decay_to   = 1.0;\n' + 'beat =           bass/max(min_att,bass_att);\n' + 'beat = max(beat, mid /max(min_att,mid_att ));\n' + 'beat = max(beat, treb/max(min_att,treb_att));\n' + 'beat = max( beat, (prev_beat-decay_to)*decay_rate + decay_to );\n' + 'beat_level     = (beat - prev_beat - 0.0)*24;\n' + 'is_beat = above(beat_level, 0.5);\n' + 'prev_beat = beat;\n' + 'q1 = is_beat;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
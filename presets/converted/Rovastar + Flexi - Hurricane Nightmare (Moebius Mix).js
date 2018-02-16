define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.6,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.881,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.309,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 1.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 3.6,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 0.6,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.47,
		zoom : 1.02109,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.75,
		invert : 0.0,
		rot : -0.16,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : -1.0,
		decay : 1.0,
		wave_a : 0.3,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.6,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q8 = 0;
m.translation_u = 0;
m.c_inv_r = 0;
m.translation_v = 0;
m.scale = 0;
m.translation_x = 0;
m.a_i = 0;
m.translation_y = 0;
m.b_i = 0;
m.oldq8 = 0;
m.bcad_i = 0;
m.q11 = 0;
m.q12 = 0;
m.angle = 0;
m.q13 = 0;
m.a_r = 0;
m.q14 = 0;
m.q15 = 0;
m.b_r = 0;
m.q16 = 0;
m.q17 = 0;
m.bcad_r = 0;
m.q18 = 0;
m.c_inv_i = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.400*((0.60*Math.sin((0.933*m.time)))+(0.40*Math.sin((1.045*m.time))))));
m.wave_g = (m.wave_g+(0.400*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((0.956*m.time))))));
m.wave_b = (m.wave_b+(0.400*((0.60*Math.sin((0.910*m.time)))+(0.40*Math.sin((0.920*m.time))))));
m.q8 = (m.oldq8+ifcond(above((m.bass+m.bass_att), 1.8), (m.q8+(0.0005*pow(((m.bass+m.bass_att)-1), 9))), 0));
m.oldq8 = m.q8;
m.monitor = m.q8;
m.zoom = (m.zoom+(0.023*((0.60*Math.sin((0.339*m.q8)))+(0.40*Math.sin((0.276*m.q8))))));
m.rot = (m.rot+(0.030*((0.60*Math.sin((0.381*m.q8)))+(0.40*Math.sin((0.579*m.q8))))));
m.mv_r = m.wave_r;
m.mv_b = m.wave_b;
m.mv_g = m.wave_g;
m.mv_x = 1.25;
m.mv_y = 1.25;
m.mv_dx = (0.1*Math.sin((1.1*m.time)));
m.mv_dy = (0.1*Math.cos((1.112*m.time)));
m.scale = 1;
m.angle = (m.time*0.2);
m.translation_x = 0;
m.translation_y = 0.12;
m.a_r = (Math.cos(m.angle)*m.scale);
m.a_i = (Math.sin(m.angle)*m.scale);
m.b_r = m.translation_x;
m.b_i = m.translation_y;
m.scale = 1;
m.angle = (Math.sin((m.time*0.1337))*0.3);
m.translation_u = 0;
m.translation_v = -0.2;
m.q15 = (Math.cos(m.angle)*m.scale);
m.q16 = (Math.sin(m.angle)*m.scale);
m.q17 = m.translation_u;
m.q18 = m.translation_v;
m.c_inv_r = div(m.q15,((m.q15*m.q15)+(m.q16*m.q16)));
m.c_inv_i = div(m.q16,((m.q15*m.q15)+(m.q16*m.q16)));
m.q11 = ((m.a_r*m.c_inv_r)-(m.a_i*m.c_inv_i));
m.q12 = ((m.a_r*m.c_inv_i)-(m.a_i*m.c_inv_r));
m.bcad_r = (((m.b_r*m.q15)-(m.b_i*m.q16))-((m.a_r*m.q17)-(m.a_i*m.q18)));
m.bcad_i = (((m.b_r*m.q16)-(m.b_i*m.q15))-((m.a_r*m.q18)-(m.a_i*m.q17)));
m.q13 = ((m.bcad_r*m.c_inv_r)-(m.bcad_i*m.c_inv_i));
m.q14 = ((m.bcad_r*m.c_inv_i)-(m.bcad_i*m.c_inv_r));
		m.rkeys = ['rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (m.rot+div(1,(10*((m.rad+0.2)+(0.1*Math.sin(m.q8))))));
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
	'warp' : (''),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 rnd_2;\n' + '   vec2 moebius_3;\n' + '   vec2 d_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (uv - 0.5);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = ((tmpvar_5.x * _qd.z) - (tmpvar_5.y * _qd.w));\n' + '  tmpvar_6.y = ((tmpvar_5.x * _qd.w) - (tmpvar_5.y * _qd.z));\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (tmpvar_6 + _qe.xy);\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8.x = ((_qd.x * tmpvar_7.x) + (_qd.y * tmpvar_7.y));\n' + '  tmpvar_8.y = ((_qd.y * tmpvar_7.x) - (_qd.x * tmpvar_7.y));\n' + '  moebius_3 = (0.5 + ((\n' + '    (1.0 - abs(((\n' + '      fract((((tmpvar_8 / \n' + '        ((tmpvar_7.x * tmpvar_7.x) + (tmpvar_7.y * tmpvar_7.y))\n' + '      ) + _qc.zw) * 0.5))\n' + '     * 2.0) - 1.0)))\n' + '   - 0.5) * 0.99));\n' + '   vec2 P_9;\n' + '  P_9 = (rand_frame.xy + ((moebius_3 * texsize.xy) * texsize_noise_lq.zw));\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = ((texture2D (sampler_noise_lq, P_9) * 2.0) - 1.0).xyz;\n' + '  rnd_2 = tmpvar_10;\n' + '  d_4 = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (moebius_3 + (vec2(1.0, 0.0) * d_4));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (moebius_3 - (vec2(1.0, 0.0) * d_4));\n' + '  tmpvar_13 = texture2D (sampler_blur1, P_14);\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (moebius_3 + (vec2(0.0, 1.0) * d_4));\n' + '  tmpvar_15 = texture2D (sampler_blur1, P_16);\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (moebius_3 - (vec2(0.0, 1.0) * d_4));\n' + '  tmpvar_17 = texture2D (sampler_blur1, P_18);\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = dot (((\n' + '    (tmpvar_11.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_13.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_19.y = dot (((\n' + '    (tmpvar_15.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_17.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '  uv_1 = (moebius_3 - ((tmpvar_19 * texsize.zw) * 32.0));\n' + '   vec4 tmpvar_20;\n' + '   vec2 P_21;\n' + '  P_21 = (uv_1 + ((rnd_2.xy * texsize.zw) * 5.0));\n' + '  tmpvar_20 = texture2D (sampler_blur3, P_21);\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_main, uv_1);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23.w = 1.0;\n' + '  tmpvar_23.xyz = abs(((\n' + '    ((tmpvar_20.xyz * scale3) + bias3)\n' + '   * 2.0) - tmpvar_22.xyz));\n' + '  vec4 ret4 = tmpvar_23;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.400*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );\n' + 'wave_g = wave_g + 0.400*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );\n' + 'wave_b = wave_b + 0.400*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );\n' + 'q8 = oldq8+if(above(bass+bass_att,1.8),q8+0.0005*pow((bass+bass_att-1),9),0);\n' + 'oldq8 = q8;\n' + 'monitor = q8;\n' + 'zoom = zoom + 0.023*( 0.60*sin(0.339*q8) + 0.40*sin(0.276*q8) );\n' + 'rot = rot + 0.030*( 0.60*sin(0.381*q8) + 0.40*sin(0.579*q8) );\n' + 'mv_r = wave_r;\n' + 'mv_b = wave_b;\n' + 'mv_g = wave_g;\n' + 'mv_x = 1.25;\n' + 'mv_y = 1.25;\n' + 'mv_dx = 0.1*sin(1.1*time);\n' + 'mv_dy = 0.1*cos(1.112*time);\n' + 'scale = 1;\n' + 'angle = time*.2;\n' + 'translation_x = 0;\n' + 'translation_y = 0.12;\n' + 'a_r = cos(angle)*scale;\n' + 'a_i = sin(angle)*scale;\n' + 'b_r = translation_x;\n' + 'b_i = translation_y;\n' + 'scale = 1;\n' + 'angle = sin(time*0.1337)*0.3;\n' + 'translation_u = 0;\n' + 'translation_v = -0.2;\n' + 'q15 = cos(angle)*scale;\n' + 'q16 = sin(angle)*scale;\n' + 'q17 = translation_u;\n' + 'q18 = translation_v;\n' + 'c_inv_r = q15/(q15*q15+q16*q16);\n' + 'c_inv_i = q16/(q15*q15+q16*q16);\n' + 'q11 = (a_r*c_inv_r - a_i*c_inv_i);\n' + 'q12 = (a_r*c_inv_i - a_i*c_inv_r);\n' + 'bcad_r = (b_r*q15 - b_i*q16)-(a_r*q17-a_i*q18);\n' + 'bcad_i = (b_r*q16 - b_i*q15)-(a_r*q18-a_i*q17);\n' + 'q13 = bcad_r*c_inv_r - bcad_i*c_inv_i;\n' + 'q14 = bcad_r*c_inv_i - bcad_i*c_inv_r;'),
	'pixel_eqs_str' : ('rot=rot+1/(10*(rad+0.2+0.1*sin(q8)));'),
};

return pmap;
});
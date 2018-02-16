define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.45,
		ib_g : 0.0,
		mv_x : 12.8,
		warpscale : 1.5,
		brighten : 1.0,
		mv_y : 11.4,
		wave_scale : 0.588,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.3,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.08927,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 0.9999,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.45,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.997,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.645,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0002,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.5,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.006,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : -0.4,
		decay : 0.985,
		wave_a : 0.08,
		ob_g : 0.3,
		ib_a : 0.0,
		wave_b : 0.45,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.4,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q3 = 0;
m.q6 = 0;
m.q7 = 0;
m.vola = 0;
m.vol = 0;
m.mtime = 0;
m.bass_thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.vol = (((m.bass+m.mid)+m.treb)*0.25);
m.vol = (m.vol*m.vol);
m.mtime = (m.mtime+(m.vol*0.01));
m.q3 = (m.mtime*0.25);
m.vola = (0.1*((m.vola*9)+(((m.bass_att+m.mid_att)+m.treb_att)*0.333333)));
m.q1 = m.vola;
m.q6 = (0.5+(0.3*Math.sin((-m.time*2))));
m.q7 = (0.5+(0.3*Math.cos(-m.time)));
m.monitor = m.bass_thresh;
m.zoom = (m.zoom+(0.05*m.vol));
m.wave_x = (m.wave_x+(0.5*Math.sin((m.mtime*2))));
m.wave_y = (m.wave_y+(0.5*Math.sin((-m.mtime*1.34))));
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
			g : 0.5,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.5,
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
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.22019,
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

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.5,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 3.7698,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 2.7849,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.80781,
			x : 0.5,
			y : 0.5,
			ang : 2.51327,
			sides : 34.0,
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
			a : 0.1,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 2.51312,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 2.06615,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.40254,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 34.0,
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
			r2 : 0.5,
			a : 0.1,
			enabled : 1.0,
			b : 0.5,
			tex_ang : 3.76991,
			thickoutline : 1.0,
			g : 0.5,
			textured : 1.0,
			g2 : 0.5,
			tex_zoom : 0.89576,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.5,
			a2 : 0.5,
			r : 0.5,
			border_g : 1.0,
			rad : 1.79044,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 44.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = ['b','g','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (m.r+(0.500*((0.60*Math.sin((2.22*m.time)))+(0.4*Math.sin((1.888*m.time))))));
m.g = (m.g+(0.500*((0.60*Math.sin((1.90*m.time)))+(0.4*Math.sin((2.100*m.time))))));
m.b = (m.b+(0.500*((0.60*Math.sin((2.12*m.time)))+(0.4*Math.sin((1.98*m.time))))));
m.r2 = m.r;
m.b2 = m.b;
m.g2 = m.g;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = r + 0.500*(0.60*sin(2.22*time) + 0.4*sin(1.888*time));\n' + 'g = g + 0.500*(0.60*sin(1.90*time) + 0.4*sin(2.100*time));\n' + 'b = b + 0.500*(0.60*sin(2.12*time) + 0.4*sin(1.98*time));\n' + 'r2=r;\n' + 'b2=b;\n' + 'g2=g;'),

		},
		{
		'baseVals' : {
			r2 : 0.8,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 1.5079,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.8,
			tex_zoom : 1.76257,
			additive : 0.0,
			border_a : 0.5,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.5427,
			x : 0.2,
			y : 0.501,
			ang : 3.1415,
			sides : 4.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.ta2 = 0;
m.ta3 = 0;
m.ta = 0;

			m.rkeys = ['tex_zoom','tex_ang','ta','ta3','ta2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ta2 = ((equal(m.q2, 2)*Math.abs((6*Math.sin(m.time))))+((1-equal(m.q2, 2))*m.ta2));
m.ta3 = ((equal(m.q2, 2)*m.ta2)+((1-equal(m.q2, 2))*m.ta3));
m.ta = (m.ta+(above(m.ta3, 0)*0.05));
m.ta3 = (m.ta3-0.5);
m.tex_ang = (m.tex_ang+m.ta);
m.tex_zoom = (m.tex_zoom+(0.05*m.q1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ta2 = equal(q2,2)*abs(6*(sin(time))) + (1-equal(q2,2))*ta2;\n' + 'ta3 = equal(q2,2)*ta2 + (1-equal(q2,2))*ta3;\n' + 'ta = ta + above(ta3,0)*0.05;\n' + 'ta3 = ta3-0.5;\n' + 'tex_ang = tex_ang + ta;\n' + 'tex_zoom=tex_zoom+0.05*q1;'),

		}
],
	'warp' : ('shader_body {\n' + '   float sand_1;\n' + '   vec3 noise2_2;\n' + '   vec3 ret_3;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_fw_main, uv);\n' + '  ret_3 = tmpvar_4.xyz;\n' + '   vec2 P_5;\n' + '  P_5 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_noise_lq, P_5).xyz;\n' + '  noise2_2 = tmpvar_6;\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_blur1, uv);\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_blur2, uv);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_blur3, uv);\n' + '  sand_1 = (dot (noise2_2, abs(\n' + '    ((((tmpvar_7.xyz * scale1) + bias1) - ((tmpvar_8.xyz * scale2) + bias2)) - ((tmpvar_9.xyz * scale3) + bias3))\n' + '  )) + ((tmpvar_7.xyz * scale1) + bias1).x);\n' + '  ret_3 = (ret_3 + (0.1 + (\n' + '    fract(pow (ret_3, vec3((sand_1 + sand_1))))\n' + '   * 2.0)));\n' + '  ret_3 = (ret_3 * 0.41);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 plastic_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = (((tmpvar_4.xyz * scale1) + bias1) - ((tmpvar_6.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv + (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (uv - (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = (((tmpvar_9.xyz * scale1) + bias1) - ((tmpvar_11.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = tmpvar_8.x;\n' + '  tmpvar_14.y = tmpvar_13.x;\n' + '   vec2 x_15;\n' + '  x_15 = ((uv - (tmpvar_14 * 4.0)) - vec2(0.5, 0.0));\n' + '  plastic_1.x = (4.0 / (1.0 + (16.0 * \n' + '    pow (sqrt(dot (x_15, x_15)), 0.5)\n' + '  )));\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.x = tmpvar_8.y;\n' + '  tmpvar_16.y = tmpvar_13.y;\n' + '   vec2 x_17;\n' + '  x_17 = ((uv - (tmpvar_16 * 4.0)) - vec2(0.5, 0.0));\n' + '  plastic_1.y = (4.0 / (1.0 + (16.0 * \n' + '    pow (sqrt(dot (x_17, x_17)), 0.5)\n' + '  )));\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18.x = tmpvar_8.z;\n' + '  tmpvar_18.y = tmpvar_13.z;\n' + '   vec2 x_19;\n' + '  x_19 = ((uv - (tmpvar_18 * 4.0)) - vec2(0.5, 0.0));\n' + '  plastic_1.z = (4.0 / (1.0 + (16.0 * \n' + '    pow (sqrt(dot (x_19, x_19)), 0.5)\n' + '  )));\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_main, uv);\n' + '  ret_2 = (plastic_1 * tmpvar_20.xyz);\n' + '  ret_2 = (ret_2 * 3.0);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21.w = 1.0;\n' + '  tmpvar_21.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_21;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('vol=(bass+mid+treb)*0.25;\n' + 'vol=vol*vol;\n' + 'mtime=mtime+vol*0.01;\n' + 'q3=mtime*0.25;\n' + 'vola = 0.1*(vola*9 + (bass_att+mid_att+treb_att)*0.333333);\n' + 'q1 = vola;\n' + 'q6 = 0.5 + 0.3*sin(-time*2);\n' + 'q7 = 0.5 + 0.3*cos(-time);\n' + 'monitor = bass_thresh;\n' + 'zoom = zoom + 0.05*vol;\n' + 'wave_x = wave_x + 0.5*sin(mtime*2);\n' + 'wave_y = wave_y + 0.5*sin(-mtime*1.34);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
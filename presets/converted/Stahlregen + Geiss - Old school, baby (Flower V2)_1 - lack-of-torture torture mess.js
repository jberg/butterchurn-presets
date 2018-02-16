define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 1.0,
		ib_g : 0.3,
		mv_x : 12.0,
		warpscale : 1.817,
		brighten : 1.0,
		mv_y : 9.0,
		wave_scale : 1.566,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.18,
		b2x : 1.0,
		warp : 0.19986,
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
		ib_r : 0.3,
		mv_b : 1.0,
		echo_zoom : 1.007,
		ob_size : 0.01,
		b1ed : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 0.905,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9803,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.5,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.08,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.54,
		decay : 0.92,
		wave_a : 3.931,
		ob_g : 0.0,
		ib_a : 0.1,
		wave_b : 1.0,
		ib_b : 0.3,
		mv_r : 1.0,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.q30 = 0;
m.q11 = 0;
m.q12 = 0;
m.vol = 0;
m.q29 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (0.5+(0.5*Math.sin((m.time*1.12))));
m.wave_g = (0.5+(0.5*Math.sin((m.time*1.22))));
m.wave_b = ((0.5*0.5)*Math.sin((m.time*1.32)));
m.ib_r = m.wave_b;
m.ib_g = m.wave_r;
m.ib_b = m.wave_g;
m.rot = (0.1*(Math.sin(m.treb)*Math.sin(m.treb)));
m.vol = ((m.bass+m.treb)+m.mid);
m.q11 = ((-2+(Math.sin(m.time)*0.5))+m.vol);
m.q12 = ((-2+(Math.sin(m.time)*0.5))+m.vol);
m.q29 = (m.vol*1);
m.q30 = (m.vol*1.5);
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.9999,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.7843,
			x : 0.5,
			y : 0.5,
			ang : 0.25133,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (3.14+((1.57*Math.sin(m.time))*Math.sin(m.time)));
m.rad = (0.5+(0.15*m.bass_att));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = 3.14 + 1.57*sin(time)*sin(time);\n' + 'rad = 0.5 + 0.15*bass_att;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.17987,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.19285,
			x : 0.5,
			y : 1.0,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 2.0,
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
	'warp' : ('shader_body {\n' + '   vec3 rsamp_1;\n' + '   vec4 noiseVal_2;\n' + '   vec3 ret_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (((uv * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_noise_lq, tmpvar_4);\n' + '  noiseVal_2 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_pw_main, uv);\n' + '  ret_3 = tmpvar_6.xyz;\n' + '   vec2 P_7;\n' + '  P_7 = (uv + ((\n' + '    (noiseVal_2.xy - 0.5)\n' + '   * 12.0) * texsize.zw));\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_pw_main, P_7).xyz;\n' + '  rsamp_1 = tmpvar_8;\n' + '   float tmpvar_9;\n' + '   vec2 x_10;\n' + '  x_10 = (ret_3.xy - uv);\n' + '  tmpvar_9 = sqrt(dot (x_10, x_10));\n' + '   float tmpvar_11;\n' + '   vec2 x_12;\n' + '  x_12 = (rsamp_1.xy - uv);\n' + '  tmpvar_11 = sqrt(dot (x_12, x_12));\n' + '  if ((tmpvar_9 > tmpvar_11)) {\n' + '    ret_3.xy = rsamp_1.xy;\n' + '  };\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (uv + ((\n' + '    (noiseVal_2.zw - 0.5)\n' + '   * 48.0) * texsize.zw));\n' + '  tmpvar_13 = texture2D (sampler_pw_main, P_14);\n' + '  rsamp_1 = tmpvar_13.xyz;\n' + '   float tmpvar_15;\n' + '   vec2 x_16;\n' + '  x_16 = (ret_3.xy - uv);\n' + '  tmpvar_15 = sqrt(dot (x_16, x_16));\n' + '   float tmpvar_17;\n' + '   vec2 x_18;\n' + '  x_18 = (rsamp_1.xy - uv);\n' + '  tmpvar_17 = sqrt(dot (x_18, x_18));\n' + '  if ((tmpvar_15 > tmpvar_17)) {\n' + '    ret_3.xy = rsamp_1.xy;\n' + '  };\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_fw_main, ret_3.xy);\n' + '  ret_3.z = tmpvar_19.z;\n' + '  ret_3.z = (ret_3.z + (_qh.x * 0.005));\n' + '  if ((((ret_3.z + ret_3.y) + ret_3.x) < 0.9)) {\n' + '    ret_3 = (ret_3 * 0.1);\n' + '  };\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20.w = 1.0;\n' + '  tmpvar_20.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_20;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 plastic_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = tmpvar_7.x;\n' + '  tmpvar_13.y = tmpvar_12.x;\n' + '   vec2 x_14;\n' + '  x_14 = ((uv - (tmpvar_13 * 4.0)) - _qc.zw);\n' + '  plastic_1.x = (4.0 / (1.0 + (16.0 * \n' + '    pow (sqrt(dot (x_14, x_14)), 0.5)\n' + '  )));\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15.x = tmpvar_7.y;\n' + '  tmpvar_15.y = tmpvar_12.y;\n' + '   vec2 x_16;\n' + '  x_16 = ((uv - (tmpvar_15 * 4.0)) - _qc.zw);\n' + '  plastic_1.y = (4.0 / (1.0 + (16.0 * \n' + '    pow (sqrt(dot (x_16, x_16)), 0.5)\n' + '  )));\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = tmpvar_7.z;\n' + '  tmpvar_17.y = tmpvar_12.z;\n' + '   vec2 x_18;\n' + '  x_18 = ((uv - (tmpvar_17 * 4.0)) - _qc.zw);\n' + '  plastic_1.z = (4.0 / (1.0 + (16.0 * \n' + '    pow (sqrt(dot (x_18, x_18)), 0.5)\n' + '  )));\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20.w = 1.0;\n' + '  tmpvar_20.xyz = ((plastic_1 * tmpvar_19.xyz) * 1.5);\n' + '  vec4 ret4 = tmpvar_20;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = 0.5+0.5*sin(time*1.12);\n' + 'wave_g = 0.5+0.5*sin(time*1.22);\n' + 'wave_b = 0.5*0.5*sin(time*1.32);\n' + 'ib_r = wave_b;\n' + 'ib_g = wave_r;\n' + 'ib_b = wave_g;\n' + 'rot = 0.1*(sin(treb)*sin(treb));\n' + 'vol=bass+treb+mid;\n' + 'q11=-2+sin(time)*.5+vol;\n' + 'q12=-2+sin(time)*.5+vol;\n' + 'q29=(vol)*1;\n' + 'q30=vol*1.5;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
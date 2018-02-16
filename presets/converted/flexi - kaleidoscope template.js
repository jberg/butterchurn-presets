define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.56,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.599,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.51,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 0.362,
		ob_size : 0.005,
		b1ed : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99952,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : -0.005,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 2.0,
		wave_mystery : -0.5,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 0.0,
		rating : 1.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 2.0,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.tt = 0;
m.dm = 0;
m.dt = 0;
m.q11 = 0;
m.q12 = 0;
m.q13 = 0;
m.q14 = 0;
m.q15 = 0;
m.q16 = 0;
m.w = 0;
m.q17 = 0;
m.q18 = 0;
m.db = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.db = ((m.db*0.98)+(m.bass*0.2));
m.bb = (m.bb+(m.db*0.1));
m.dt = ((m.dt*0.98)+(m.treb*0.2));
m.tt = (m.tt+(m.dt*0.1));
m.dm = ((m.dm*0.98)+(m.mid*0.2));
m.mm = (m.mm+(m.dm*0.1));
m.q13 = (0.5+(Math.sin(((m.bb-m.mm)*0.1))*0.25));
m.q14 = (0.5+(Math.sin(((m.tt-m.mm)*0.1))*0.25));
m.w = ((m.bb-m.tt)*0.1);
m.q16 = (0.25-((m.db-m.dt)*0.025));
m.q11 = Math.sin(m.w);
m.q12 = Math.cos(m.w);
m.q17 = Math.sin(-m.w);
m.q18 = Math.cos(-m.w);
m.q15 = div(1,m.q16);
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
			scaling : 0.16188,
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
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 25.12601,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
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
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.99996,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.50126,
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
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.50126,
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
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.9998,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.50126,
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
	'warp' : ('highp vec2 xlat_mutablejulia;shader_body {\n' + '   vec3 ret_1;\n' + '  xlat_mutablejulia = ((uv_orig - 0.5) * 1.59);\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2.x = ((xlat_mutablejulia.x * xlat_mutablejulia.x) - (xlat_mutablejulia.y * xlat_mutablejulia.y));\n' + '  tmpvar_2.y = ((xlat_mutablejulia.x * xlat_mutablejulia.y) + (xlat_mutablejulia.y * xlat_mutablejulia.x));\n' + '  xlat_mutablejulia = (tmpvar_2 + vec2(0.61, 0.69));\n' + '   vec3 tmpvar_3;\n' + '  tmpvar_3 = (texture2D (sampler_fc_main, xlat_mutablejulia) - 0.004).xyz;\n' + '  ret_1 = tmpvar_3;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_rr_1;\n' + '   vec2 uv_r_2;\n' + '   vec3 ret_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = ((uv - _qd.xy) * aspect.xy);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = ((_qc.w * tmpvar_4.x) - (_qc.z * tmpvar_4.y));\n' + '  tmpvar_5.y = ((_qc.z * tmpvar_4.x) + (_qc.w * tmpvar_4.y));\n' + '  uv_r_2 = (_qd.z * tmpvar_5);\n' + '  uv_r_2 = (_qd.xy + (uv_r_2 * aspect.zw));\n' + '  uv_r_2 = (1.0 - abs((\n' + '    (fract((uv_r_2 * 0.5)) * 2.0)\n' + '   - 1.0)));\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = ((uv_r_2 - _qd.xy) * aspect.xy);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7.x = ((_qe.y * tmpvar_6.x) - (_qe.x * tmpvar_6.y));\n' + '  tmpvar_7.y = ((_qe.x * tmpvar_6.x) + (_qe.y * tmpvar_6.y));\n' + '  uv_rr_1 = (_qd.w * tmpvar_7);\n' + '  uv_rr_1 = (_qd.xy + (uv_rr_1 * aspect.zw));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_blur3, uv_rr_1);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_main, uv_rr_1);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_blur2, uv_rr_1);\n' + '  ret_3 = (((\n' + '    (tmpvar_8.xyz * scale3)\n' + '   + bias3) + (\n' + '    (tmpvar_9.xyz - ((tmpvar_10.xyz * scale2) + bias2))\n' + '   * 2.4)) - 0.1);\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_main, uv);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = mix (ret_3, tmpvar_11.xyz, vec3(0.333, 0.333, 0.333));\n' + '  ret_3 = tmpvar_12;\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13.w = 1.0;\n' + '  tmpvar_13.xyz = tmpvar_12;\n' + '  vec4 ret4 = tmpvar_13;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('db = db*0.98 + bass*0.2;\n' + 'bb = bb + db*0.1;\n' + 'dt = dt*0.98 + treb*0.2;\n' + 'tt = tt + dt*0.1;\n' + 'dm = dm*0.98 + mid*0.2;\n' + 'mm = mm + dm*0.1;\n' + 'q13 = 0.5 + sin((bb-mm)*0.1)*0.25;\n' + 'q14 = 0.5 + sin((tt-mm)*0.1)*0.25;\n' + 'w = (bb-tt)*0.1;\n' + 'q16 = 0.25 - (db-dt)*0.025;\n' + 'q11 = sin(w);\n' + 'q12 = cos(w);\n' + 'q17 = sin(-w);\n' + 'q18 = cos(-w);\n' + 'q15 = 1/q16;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
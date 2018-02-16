define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.7,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 2.246,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 0.99967,
		ob_r : 0.0,
		sy : 0.9999,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 1.6E-4,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.7,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.38,
		zoom : 1.01299,
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
		wave_a : 4.1,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.25,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.dist = 0;
m.mult = 0;
m.du = 0;
m.dv = 0;
m.ang2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.250*((0.60*Math.sin((0.980*m.time)))+(0.40*Math.sin((1.047*m.time))))));
m.wave_g = (m.wave_g+(0.250*((0.60*Math.sin((0.835*m.time)))+(0.40*Math.sin((1.081*m.time))))));
m.wave_b = (m.wave_b+(0.250*((0.60*Math.sin((0.814*m.time)))+(0.40*Math.sin((1.011*m.time))))));
m.q1 = (((m.cx*2)-1)+(0.92*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.494*m.time))))));
m.q2 = (((m.cy*2)-1)+(0.92*((0.60*Math.sin((0.393*m.time)))+(0.40*Math.sin((0.423*m.time))))));
m.q3 = (((m.cx*2)-1)+(0.92*((0.60*Math.sin((0.174*-m.time)))+(0.40*Math.sin((0.364*m.time))))));
m.q4 = (((m.cy*2)-1)+(0.92*((0.60*Math.sin((0.234*m.time)))+(0.40*Math.sin((0.271*-m.time))))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.du = (((m.x*2)-1)-m.q1);
m.dv = (((m.y*2)-1)-m.q2);
m.dist = sqrt(((m.du*m.du)+(m.dv*m.dv)));
m.ang2 = Math.atan2(m.du, m.dv);
m.mult = div(0.012,(m.dist+0.4));
m.dx = (m.mult*Math.sin((m.ang2-1.5)));
m.dy = (m.mult*Math.cos((m.ang2-1.5)));
m.du = (((m.x*2)-1)-m.q3);
m.dv = (((m.y*2)-1)-m.q4);
m.dist = sqrt(((m.du*m.du)+(m.dv*m.dv)));
m.ang2 = Math.atan2(m.du, m.dv);
m.mult = div(0.012,(m.dist+0.4));
m.dx = (m.dx+(m.mult*Math.sin((m.ang2+1.5))));
m.dy = (m.dy+(m.mult*Math.cos((m.ang2+1.5))));
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
	'warp' : ('highp vec3 xlat_mutablemus;\n' + 'shader_body {\n' + '   vec3 crisp2_1;\n' + '   vec3 crisp_2;\n' + '   float dy_3;\n' + '   float dx_4;\n' + '   vec2 uv6_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (uv - 0.5);\n' + '   vec2 P_7;\n' + '  P_7 = (uv / 4.0);\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = dot (texture2D (sampler_noise_hq, P_7), vec4(0.32, 0.49, 0.29, 0.0));\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = (tmpvar_8 * _qh.z);\n' + '   mat2 tmpvar_10;\n' + '  tmpvar_10[0].x = cos(tmpvar_9);\n' + '  tmpvar_10[0].y = sin(tmpvar_9);\n' + '  tmpvar_10[1].x = -(sin(tmpvar_9));\n' + '  tmpvar_10[1].y = cos(tmpvar_9);\n' + '  uv6_5 = (tmpvar_6 * tmpvar_10);\n' + '  uv6_5 = (uv6_5 + sin((_qh.w * tmpvar_6)));\n' + '  xlat_mutablemus = (vec3((0.2 / (\n' + '    sqrt(uv6_5.x)\n' + '   + 0.2))) * vec3(1.1, 1.0, 0.95));\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = (0.9 + (0.1 * texture2D (sampler_noise_hq, uv))).xyz;\n' + '  xlat_mutablemus = (xlat_mutablemus * tmpvar_11);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = fract(uv);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_blur1, tmpvar_12);\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = ((tmpvar_13.xyz * scale1) + bias1);\n' + '   vec2 P_15;\n' + '  P_15 = (uv + vec2(0.005, 0.0));\n' + '   vec2 P_16;\n' + '  P_16 = (uv - vec2(0.005, 0.0));\n' + '   float tmpvar_17;\n' + '  tmpvar_17 = dot ((texture2D (sampler_main, P_15) - texture2D (sampler_main, P_16)), vec4(0.32, 0.49, 0.29, 0.0));\n' + '  dx_4 = tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv + vec2(0.0, 0.005));\n' + '   vec2 P_19;\n' + '  P_19 = (uv - vec2(0.0, 0.005));\n' + '   float tmpvar_20;\n' + '  tmpvar_20 = dot ((texture2D (sampler_main, P_18) - texture2D (sampler_main, P_19)), vec4(0.32, 0.49, 0.29, 0.0));\n' + '  dy_3 = tmpvar_20;\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21.x = dx_4;\n' + '  tmpvar_21.y = dy_3;\n' + '   vec2 P_22;\n' + '  P_22 = (uv + (tmpvar_21 * 0.02));\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_main, P_22).xyz;\n' + '  crisp_2 = tmpvar_23;\n' + '   vec3 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_main, uv).xyz;\n' + '  crisp2_1 = tmpvar_24;\n' + '  crisp_2 = (crisp_2 + (crisp2_1 / 2.0));\n' + '  crisp_2 = (crisp_2 * 0.67);\n' + '  crisp_2 = (crisp_2 + ((0.08 * xlat_mutablemus) - (\n' + '    sqrt(dot (tmpvar_21, tmpvar_21))\n' + '   * tmpvar_14)));\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25.w = 1.0;\n' + '  tmpvar_25.xyz = (((crisp_2 - \n' + '    (dot (tmpvar_14, vec3(0.32, 0.49, 0.29)) * 0.04)\n' + '  ) * 0.99) - 0.04);\n' + '  vec4 ret4 = tmpvar_25;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.250*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );\n' + 'wave_g = wave_g + 0.250*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );\n' + 'wave_b = wave_b + 0.250*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );\n' + 'q1 = (cx*2-1) + 0.92*( 0.60*sin(0.374*time) + 0.40*sin(0.494*time) );\n' + 'q2 = (cy*2-1) + 0.92*( 0.60*sin(0.393*time) + 0.40*sin(0.423*time) );\n' + 'q3 = (cx*2-1) + 0.92*( 0.60*sin(0.174*-time) + 0.40*sin(0.364*time) );\n' + 'q4 = (cy*2-1) + 0.92*( 0.60*sin(0.234*time) + 0.40*sin(0.271*-time) );'),
	'pixel_eqs_str' : ('du = (x*2-1) - q1;\n' + 'dv = (y*2-1) - q2;\n' + 'dist = sqrt(du*du+dv*dv);\n' + 'ang2 = atan2(du,dv);\n' + 'mult = 0.012/(dist+0.4);\n' + 'dx = mult*sin(ang2-1.5);\n' + 'dy = mult*cos(ang2-1.5);\n' + 'du = (x*2-1) - q3;\n' + 'dv = (y*2-1) - q4;\n' + 'dist = sqrt(du*du+dv*dv);\n' + 'ang2 = atan2(du,dv);\n' + 'mult = 0.012/(dist+0.4);\n' + 'dx = dx + mult*sin(ang2+1.5);\n' + 'dy = dy + mult*cos(ang2+1.5);'),
};

return pmap;
});
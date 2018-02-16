define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.628,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.99967,
		ob_r : 0.0,
		sy : 0.9999,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 1.6E-4,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.05,
		fshader : 1.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 0.997,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 1.0,
		zoom : 1.00796,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.02,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 1.0,
		decay : 0.955,
		wave_a : 0.619,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
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
m.wave_r = (m.wave_r+(0.350*((0.60*Math.sin((0.980*m.time)))+(0.40*Math.sin((1.047*m.time))))));
m.wave_g = (m.wave_g+(0.350*((0.60*Math.sin((0.835*m.time)))+(0.40*Math.sin((1.081*m.time))))));
m.wave_b = (m.wave_b+(0.350*((0.60*Math.sin((0.814*m.time)))+(0.40*Math.sin((1.011*m.time))))));
m.q1 = (((m.cx*2)-1)+(0.32*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.294*m.time))))));
m.q2 = (((m.cy*2)-1)+(0.52*((0.60*Math.sin((0.393*m.time)))+(0.40*Math.sin((0.223*m.time))))));
m.q3 = (((m.cx*2)-1)+(0.32*((0.60*Math.sin((0.174*-m.time)))+(0.40*Math.sin((0.364*m.time))))));
m.q4 = (((m.cy*2)-1)+(0.52*((0.60*Math.sin((0.234*m.time)))+(0.40*Math.sin((0.271*-m.time))))));
m.decay = (m.decay-(0.01*equal(mod(m.frame,5), 0)));
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
			enabled : 1.0,
			b : 0.0,
			g : 1.0,
			scaling : 2.0231,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.d = 0;
m.t8 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = ['d','t1','t2','t3'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t8 = 1;
m.r = (m.r+(0.620*Math.sin((0.777*m.time))));
m.b = (m.b+(0.225*Math.sin((0.443*m.time))));
m.g = (m.g+(0.111*Math.sin((0.883*m.time))));
		return m;
	},
		'point_eqs' : function(m) {
m.t3 = ((m.t3*0.6)+(m.value1*1));
m.t2 = ((m.t2*0.7)+(m.t3*0.2));
m.t1 = ((m.t1*0.8)+(m.t2*0.1));
m.d = ((m.d*0.9)+(m.t1*0.2));
m.y = (0.5+((m.d*m.sample)*(1-m.sample)));
m.x = (-0.05+(m.sample*1.1));
m.t8 = 0;
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('t8 = 1;\n' + 'r=r + 0.620 * sin (0.777 * time);\n' + 'b=b + 0.225 * sin (0.443 * time);\n' + 'g=g + 0.111 * sin (0.883 * time);'),
		'point_eqs_str' : ('t3 = t3*0.6 + (value1)*1;\n' + 't2 = t2*0.7 + t3*0.2;\n' + 't1 = t1*0.8 + t2*0.1;\n' + 'd = d*0.9 + t1*0.2;\n' + 'y = 0.5 + d*sample*(1-sample);\n' + 'x =  -0.05 + sample*1.1;\n' + 't8 = 0;'),

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (normalize((uv - uv_orig)) * texsize.zw);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 0.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv + (tmpvar_3 * 2.3));\n' + '  tmpvar_5 = texture2D (sampler_main, P_6);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 0.0;\n' + '  tmpvar_7.xyz = max (tmpvar_4, tmpvar_5).xyz;\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv - (tmpvar_3 * 2.3));\n' + '  tmpvar_8 = texture2D (sampler_main, P_9);\n' + '  ret_1 = (max (tmpvar_7, tmpvar_8).xyz * 0.97);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec2 xlat_mutabled;\n' + 'highp vec3 xlat_mutabledx;\n' + 'highp vec3 xlat_mutabledy;\n' + 'highp vec2 xlat_mutableuv_y;\n' + 'shader_body {\n' + '   float base_1;\n' + '   vec3 ret_2;\n' + '  xlat_mutabled = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '  xlat_mutabledx = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_7 = texture2D (sampler_blur1, P_8);\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '  xlat_mutabledy = (((tmpvar_7.xyz * scale1) + bias1) - ((tmpvar_9.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = xlat_mutabledx.y;\n' + '  tmpvar_11.y = xlat_mutabledy.y;\n' + '  xlat_mutableuv_y = (uv + (tmpvar_11 * 0.4));\n' + '  xlat_mutabled = (texsize.zw * 18.0);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (xlat_mutableuv_y + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_12 = texture2D (sampler_blur1, P_13);\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (xlat_mutableuv_y - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_14 = texture2D (sampler_blur1, P_15);\n' + '  xlat_mutabledx = (((tmpvar_12.xyz * scale1) + bias1) - ((tmpvar_14.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_16;\n' + '   vec2 P_17;\n' + '  P_17 = (xlat_mutableuv_y + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_16 = texture2D (sampler_blur1, P_17);\n' + '   vec4 tmpvar_18;\n' + '   vec2 P_19;\n' + '  P_19 = (xlat_mutableuv_y - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_18 = texture2D (sampler_blur1, P_19);\n' + '  xlat_mutabledy = (((tmpvar_16.xyz * scale1) + bias1) - ((tmpvar_18.xyz * scale1) + bias1));\n' + '   float tmpvar_20;\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_main, uv);\n' + '  tmpvar_20 = tmpvar_21.x;\n' + '  base_1 = tmpvar_20;\n' + '  ret_2 = ((base_1 * (\n' + '    (-(xlat_mutabledx) + xlat_mutabledy)\n' + '   + 1.0).x) * pow (hue_shader, vec3(4.0, 4.0, 4.0)));\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur1, uv);\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23 = mix (mix (ret_2, pow (hue_shader.yzx, vec3(4.0, 4.0, 4.0)), vec3((\n' + '    ((tmpvar_22.xyz * scale1) + bias1)\n' + '  .y * 0.5))), (hue_shader.zxy * 1.2), vec3((tmpvar_21.z * (1.0 - \n' + '    (((tmpvar_22.xyz * scale1) + bias1).y * 2.0)\n' + '  ))));\n' + '  ret_2 = tmpvar_23;\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24.w = 1.0;\n' + '  tmpvar_24.xyz = tmpvar_23;\n' + '  vec4 ret4 = tmpvar_24;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.350*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );\n' + 'wave_g = wave_g + 0.350*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );\n' + 'wave_b = wave_b + 0.350*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );\n' + 'q1 = (cx*2-1) + 0.32*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );\n' + 'q2 = (cy*2-1) + 0.52*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );\n' + 'q3 = (cx*2-1) + 0.32*( 0.60*sin(0.174*-time) + 0.40*sin(0.364*time) );\n' + 'q4 = (cy*2-1) + 0.52*( 0.60*sin(0.234*time) + 0.40*sin(0.271*-time) );\n' + 'decay = decay - 0.01*equal(frame%5,0);'),
	'pixel_eqs_str' : ('du = x*2-1 - q1;\n' + 'dv = y*2-1 - q2;\n' + 'dist = sqrt(du*du+dv*dv);\n' + 'ang2 = atan2(du,dv);\n' + 'mult = 0.012/(dist+0.4);\n' + 'dx = mult*sin(ang2-1.5);\n' + 'dy = mult*cos(ang2-1.5);\n' + 'du = x*2-1 - q3;\n' + 'dv = y*2-1 - q4;\n' + 'dist = sqrt(du*du+dv*dv);\n' + 'ang2 = atan2(du,dv);\n' + 'mult = 0.012/(dist+0.4);\n' + 'dx = dx + mult*sin(ang2+1.5);\n' + 'dy = dy + mult*cos(ang2+1.5);'),
};

return pmap;
});
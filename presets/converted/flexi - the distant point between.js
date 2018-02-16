define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 0.0,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.9,
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
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : -0.941,
		mv_dy : 0.426,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 0.942,
		echo_zoom : 1.169,
		ob_size : 0.005,
		b1ed : 0.0,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.078,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.006,
		wave_thick : 0.0,
		modwavealphaend : 2.0,
		wave_mystery : 1.0,
		decay : 0.98,
		wave_a : 0.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 0.316,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 2.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.res = 0;
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.diff = 0;
m.q6 = 0;
m.m = 0;
m.r = 0;
m.vol = 0;
m.v = 0;
m.beat = 0;
m.c_x = 0;
m.c_y = 0;
m.c_x = 0.5;
m.c_y = 0.5;
		return m;
	},
	'frame_eqs' : function(m) {
m.q1 = m.aspectx;
m.q2 = m.aspecty;
m.rot = 0;
m.zoom = 1;
m.warp = 0;
m.vol = (((m.bass*8)+(m.mid*5))+(m.treb*3));
m.m = ((m.m*0.96)+(m.vol*0.06));
m.monitor = (m.vol-m.m);
m.beat = ((above(m.vol, m.res)*above(m.vol, m.m))*above(m.vol, 10));
m.diff = (((1-m.beat)*m.diff)+(m.beat*(m.vol-m.res)));
m.res = ((m.beat*(m.vol+(m.m*0.15)))+((1-m.beat)*(m.res-div(((0.15+(m.diff*0.03))*60),m.fps))));
m.res = Math.max(0, m.res);
m.r = ifcond(m.beat, ((0.02*(rand(200)-100))*0.01), m.r);
m.rot = m.r;
m.c_x = ifcond(m.beat, (0.5+((0.5*(rand(200)-100))*0.01)), m.c_x);
m.c_y = ifcond(m.beat, (0.5+((0.5*(rand(200)-100))*0.01)), m.c_y);
m.v = ifcond(m.beat, (0.035+((0.025*(rand(200)-100))*0.01)), m.v);
m.q3 = m.c_x;
m.q4 = m.c_y;
m.q5 = m.v;
m.q6 = m.beat;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.d = (pow(sqrt((sqr((m.x-m.q3))+sqr((m.y-m.q4)))), 0.5)-0);
m.v = m.q5;
m.dx = ((m.v*(m.x-m.q3))*m.d);
m.dy = ((m.v*(m.y-m.q4))*m.d);
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
	'warp' : ('shader_body {\n' + '   vec3 rand_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = (texture2D (sampler_noise_lq, tmpvar_3).xyz - 0.5);\n' + '  rand_1 = tmpvar_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv + (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv - (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = (((tmpvar_6.xyz * scale1) + bias1) - ((tmpvar_8.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (uv + (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (uv - (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_13 = texture2D (sampler_blur1, P_14);\n' + '   vec3 tmpvar_15;\n' + '  tmpvar_15 = (((tmpvar_11.xyz * scale1) + bias1) - ((tmpvar_13.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = mix (uv_orig, uv, vec2(0.35, 0.35));\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = tmpvar_10.y;\n' + '  tmpvar_17.y = tmpvar_15.y;\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18 = (tmpvar_16 - ((tmpvar_17 * texsize.zw) * 4.0));\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = tmpvar_10.z;\n' + '  tmpvar_19.y = tmpvar_15.z;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = (tmpvar_16 - ((tmpvar_19 * texsize.zw) * 4.0));\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_main, tmpvar_18);\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur1, uv);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_main, tmpvar_18);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_main, uv_orig);\n' + '  ret_2.y = (((\n' + '    (tmpvar_21.y - (((\n' + '      (tmpvar_22.xyz * scale1)\n' + '     + bias1).y - tmpvar_23.y) * 0.024))\n' + '   - 0.009) + (\n' + '    (1.0 - tmpvar_24.x)\n' + '   * 0.014)) + (rand_1 * 0.02)).x;\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_main, tmpvar_20);\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26 = texture2D (sampler_main, tmpvar_20);\n' + '  ret_2.z = (((\n' + '    (tmpvar_25.z - (((\n' + '      (tmpvar_22.xyz * scale1)\n' + '     + bias1).z - tmpvar_26.z) * 0.024))\n' + '   - 0.009) + (tmpvar_24.x * 0.014)) + (rand_1 * 0.02)).x;\n' + '   vec4 tmpvar_27;\n' + '   vec2 P_28;\n' + '  P_28 = (uv + ((rand_1.xy * texsize.zw) * 0.5));\n' + '  tmpvar_27 = texture2D (sampler_fc_main, P_28);\n' + '  ret_2.x = tmpvar_27.x;\n' + '   vec4 tmpvar_29;\n' + '  tmpvar_29 = texture2D (sampler_blur3, uv);\n' + '  ret_2.x = (ret_2.x + ((\n' + '    (ret_2.x - ((tmpvar_29.xyz * scale3) + bias3).x)\n' + '   * 0.4) + (rand_1 * 0.004)).x);\n' + '   vec4 tmpvar_30;\n' + '  tmpvar_30.w = 1.0;\n' + '  tmpvar_30.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_30;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec2 xlat_mutabled;\n' + 'highp vec3 xlat_mutabledx;\n' + 'highp vec3 xlat_mutabledy;\n' + 'shader_body {\n' + '   float y_1;\n' + '   float z_2;\n' + '   vec3 ret_3;\n' + '  xlat_mutabled = (texsize.zw * 3.0);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv_orig + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv_orig - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '  xlat_mutabledx = (((tmpvar_4.xyz * scale1) + bias1) - ((tmpvar_6.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv_orig + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv_orig - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '  xlat_mutabledy = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12.x = xlat_mutabledx.x;\n' + '  tmpvar_12.y = xlat_mutabledy.x;\n' + '   vec2 P_13;\n' + '  P_13 = (uv - (tmpvar_12 * 0.03));\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = xlat_mutabledx.x;\n' + '  tmpvar_14.y = xlat_mutabledy.x;\n' + '   vec2 P_15;\n' + '  P_15 = (uv + (tmpvar_14 * 0.5));\n' + '   float tmpvar_16;\n' + '  tmpvar_16 = (texture2D (sampler_main, P_13).x * (1.0 - texture2D (sampler_main, P_15).z));\n' + '  z_2 = tmpvar_16;\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = xlat_mutabledx.x;\n' + '  tmpvar_17.y = xlat_mutabledy.x;\n' + '   vec2 P_18;\n' + '  P_18 = (uv - (tmpvar_17 * 0.4));\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = xlat_mutabledx.x;\n' + '  tmpvar_19.y = xlat_mutabledy.x;\n' + '   vec2 P_20;\n' + '  P_20 = (uv + (tmpvar_19 * 0.03));\n' + '   float tmpvar_21;\n' + '  tmpvar_21 = ((1.0 - texture2D (sampler_main, P_18).y) * (1.0 - texture2D (sampler_main, P_20).x));\n' + '  y_1 = tmpvar_21;\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22.x = xlat_mutabledx.x;\n' + '  tmpvar_22.y = xlat_mutabledy.x;\n' + '  ret_3 = (mix (mix (ret_3, vec3(1.0, 0.5, 0.0), vec3(\n' + '    (sqrt(dot (tmpvar_22, tmpvar_22)) * 2.4)\n' + '  )), vec3(1.0, 0.0, 0.0), vec3(z_2)) * (0.9 - (2.0 * \n' + '    (xlat_mutabledx + xlat_mutabledy)\n' + '  .z)));\n' + '  ret_3 = (mix (ret_3, vec3(1.0, 1.0, 1.0), vec3(y_1)) * (0.9 - (2.0 * \n' + '    (xlat_mutabledx + xlat_mutabledy)\n' + '  .y)));\n' + '  ret_3 = (ret_3 * (1.0 - (xlat_mutabledx + xlat_mutabledy).x));\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23.w = 1.0;\n' + '  tmpvar_23.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_23;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('c_x = 0.5;\n' + 'c_y = 0.5;'),
	'frame_eqs_str' : ('q1 = aspectx;\n' + 'q2 = aspecty;\n' + 'rot = 0;\n' + 'zoom = 1;\n' + 'warp = 0;\n' + 'vol = bass*8 + mid*5 + treb*3;\n' + 'm = m*0.96 + vol*0.06;\n' + 'monitor = vol-m;\n' + 'beat = above(vol,res)*above(vol,m)*above(vol,10);\n' + 'diff = (1-beat)*diff + beat*(vol-res);\n' + 'res = beat*(vol + m*0.15) + (1-beat)*(res -  (0.15+diff*0.03)*60/fps);\n' + 'res = max(0,res);\n' + 'r = if(beat, 0.02*(rand(200)-100)*0.01,r);\n' + 'rot = r;\n' + 'c_x = if(beat,0.5 + 0.5*(rand(200)-100)*0.01, c_x);\n' + 'c_y = if(beat,0.5 + 0.5*(rand(200)-100)*0.01, c_y);\n' + 'v = if(beat,0.035 + 0.025*(rand(200)-100)*0.01, v);\n' + 'q3 = c_x;\n' + 'q4 = c_y;\n' + 'q5 = v;\n' + 'q6 = beat;'),
	'pixel_eqs_str' : ('d = (pow(sqrt(sqr(x-q3)+sqr(y-q4)),0.5)-0);\n' + 'v = q5;\n' + 'dx = v*(x-q3)*d;\n' + 'dy = v*(y-q4)*d;'),
};

return pmap;
});
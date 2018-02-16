define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 0.01,
		brighten : 1.0,
		mv_y : 9.0,
		wave_scale : 2.911,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 2.00673,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.484,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 5.278,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.12682,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : -0.02,
		wave_thick : 1.0,
		modwavealphaend : 1.23,
		wave_mystery : 0.0,
		decay : 0.96,
		wave_a : 0.303,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.8,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 2.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.11,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.ripple_r = 0;
m.q5 = 0;
m.timer_a = 0;
m.timer_b = 0;
m.ripple_x = 0;
m.ripple_y = 0;
m.count = 0;
m.ripple = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.count = ifcond(below(m.count, 9), (m.count+1), 0);
m.q1 = 0.5;
m.q2 = 0.5;
m.q3 = m.count;
m.q4 = m.aspectx;
m.q5 = m.aspecty;
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.timer_a = (10*Math.sin(m.time));
m.timer_b = (10*Math.sin((m.time*0.5)));
m.ripple_x = (Math.cos(((m.x*m.timer_a)-m.timer_b))*m.bass_att);
m.ripple_y = (Math.cos(((m.y*m.timer_a)-m.timer_b))*m.treb_att);
m.ripple_r = (Math.cos(((m.rad*m.timer_b)-m.timer_a))*m.mid_att);
m.ripple = ((m.ripple_x+m.ripple_y)+m.ripple_r);
m.zoom = (m.zoom+(m.ripple*0.1));
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
	'warp' : ('shader_body {\n' + '   vec3 z_1;\n' + '   vec3 blur_2;\n' + '   vec3 ret_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = mix (uv_orig, uv, vec2(0.2, 0.2));\n' + '   vec2 P_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (0.3 * texsize.zw);\n' + '  P_5 = (tmpvar_4 + tmpvar_6);\n' + '   vec2 P_7;\n' + '  P_7 = (tmpvar_4 + (tmpvar_6 * vec2(-1.0, 1.0)));\n' + '   vec2 P_8;\n' + '  P_8 = (tmpvar_4 + (tmpvar_6 * vec2(1.0, -1.0)));\n' + '   vec2 P_9;\n' + '  P_9 = (tmpvar_4 - tmpvar_6);\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = (0.25 * ((texture2D (sampler_main, P_5).xyz + texture2D (sampler_main, P_7).xyz) + (texture2D (sampler_main, P_8).xyz + texture2D (sampler_main, P_9).xyz)));\n' + '  blur_2 = tmpvar_10;\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_main, tmpvar_4).xyz;\n' + '  ret_3 = tmpvar_11;\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = ((ret_3.x * ret_3.y) * ret_3.y);\n' + '  z_1.x = (ret_3.x + ((\n' + '    (-(tmpvar_12) + (0.035 * (1.0 - ret_3.x)))\n' + '   + 0.0007) * 9.0));\n' + '  z_1.y = (ret_3.y + ((tmpvar_12 - \n' + '    (0.095 * ret_3.y)\n' + '  ) * 9.0));\n' + '  z_1.z = (ret_3.z - 0.02);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_main, tmpvar_4);\n' + '  z_1.x = (z_1.x + (1.8 * (blur_2 - tmpvar_13.xyz)).x);\n' + '  ret_3.yz = z_1.yz;\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (((uv * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '  tmpvar_14 = texture2D (sampler_noise_lq, P_15);\n' + '  ret_3.x = (z_1.x + (0.09 * (\n' + '    (tmpvar_14.xyz * 2.0)\n' + '   - 1.0)).x);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv1_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (texsize.zw * 3.0);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = (((tmpvar_4.xyz * scale1) + bias1) - ((tmpvar_6.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv + (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (uv - (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = (((tmpvar_9.xyz * scale1) + bias1) - ((tmpvar_11.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = tmpvar_8.x;\n' + '  tmpvar_14.y = tmpvar_13.x;\n' + '  uv1_1 = (uv + ((tmpvar_14 * texsize.zw) * 32.0));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_main, uv1_1);\n' + '  ret_2 = (vec3(0.5, 1.0, 0.0) * tmpvar_15.x);\n' + '  ret_2.x = (ret_2.x + ((tmpvar_8.x - tmpvar_13.x) * 0.4));\n' + '  ret_2 = (pow (ret_2.x, 0.8) * vec3(0.2, 0.15, 0.0));\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.x = tmpvar_8.x;\n' + '  tmpvar_16.y = tmpvar_13.x;\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv - ((tmpvar_16 * texsize.zw) * 128.0));\n' + '  tmpvar_17 = texture2D (sampler_blur2, P_18);\n' + '   vec3 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_main, uv1_1).zzz;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20.x = tmpvar_8.y;\n' + '  tmpvar_20.y = tmpvar_13.y;\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21.x = tmpvar_8.x;\n' + '  tmpvar_21.y = tmpvar_13.x;\n' + '   vec4 tmpvar_22;\n' + '   vec2 P_23;\n' + '  P_23 = ((uv - (\n' + '    (tmpvar_20 * texsize.zw)\n' + '   * 16.0)) - ((tmpvar_21 * texsize.zw) * 32.0));\n' + '  tmpvar_22 = texture2D (sampler_blur1, P_23);\n' + '   vec3 tmpvar_24;\n' + '  tmpvar_24 = mix (mix (mix (ret_2, vec3(1.0, 1.0, 1.0), vec3(\n' + '    (((tmpvar_17.xyz * scale2) + bias2).z * 0.6)\n' + '  )), vec3(5.0, 1.1, 1.2), tmpvar_19), vec3(0.2, 0.0, 0.1), vec3(((\n' + '    (tmpvar_22.xyz * scale1)\n' + '   + bias1).y * 6.0)));\n' + '  ret_2 = tmpvar_24;\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25.w = 1.0;\n' + '  tmpvar_25.xyz = tmpvar_24;\n' + '  vec4 ret4 = tmpvar_25;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('count = if(below(count,9),count+1,0);\n' + 'q1 = .5;\n' + 'q2 = .5;\n' + 'q3 = count;\n' + 'q4 = aspectx;\n' + 'q5 = aspecty;'),
	'pixel_eqs_str' : ('timer_a=10*sin(time);\n' + 'timer_b=10*sin(time*.5);\n' + 'ripple_x=cos(x*timer_a-timer_b)*bass_att;\n' + 'ripple_y=cos(y*timer_a-timer_b)*treb_att;\n' + 'ripple_r=cos(rad*timer_b-timer_a)*mid_att;\n' + 'ripple=ripple_x+ripple_y+ripple_r;\n' + 'zoom=zoom+ripple*.1;'),
};

return pmap;
});
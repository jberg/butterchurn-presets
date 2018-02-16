define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.49,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 0.403,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 0.43,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.9901,
		ob_r : 0.0,
		sy : 0.97078,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 1.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0016,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0298,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.05,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.05,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : -1.0,
		decay : 1.0,
		wave_a : 1.06,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.wb = 0;
m.q10 = 0;
m.wg = 0;
m.q11 = 0;
m.q12 = 0;
m.vol = 0;
m.mtime = 0;
m.wr = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.5*((0.6*Math.sin((m.time*1.3)))+(0.4*Math.sin((0.98*m.time))))));
m.wave_b = (m.wave_b+(0.5*((0.6*Math.sin((m.time*1.1)))+(0.4*Math.sin((0.78*m.time))))));
m.wave_g = (m.wave_g+(0.5*((0.6*Math.sin((m.time*1.2)))+(0.4*Math.sin((0.6*m.time))))));
m.q8 = m.wave_r;
m.q7 = m.wave_b;
m.q6 = m.wave_g;
m.wr = (0.5+(0.3*((0.6*Math.sin((m.time*1.8)))+(0.4*Math.sin((0.8*m.time))))));
m.wb = (0.5+(0.3*((0.6*Math.sin((m.time*1.67)))+(0.4*Math.sin((0.5*m.time))))));
m.wg = (0.5+(0.3*((0.6*Math.sin((m.time*1.92)))+(0.4*Math.sin((0.4*m.time))))));
m.q10 = m.wr;
m.q11 = m.wb;
m.q12 = m.wg;
m.vol = (0.1*((m.vol*9)+(((m.bass_att+m.mid_att)+m.treb_att)*0.333333)));
m.q1 = m.vol;
m.monitor = m.vol;
m.mtime = (m.mtime+(m.vol*0.01));
m.q2 = (m.mtime*0.25);
m.wave_mystery = (m.wave_mystery+(0.6*m.vol));
m.sy = (m.sy+(m.vol*0.02));
m.sx = m.sy;
m.cx = (m.cx+(0.2*Math.sin(m.mtime)));
m.cy = (m.cy-(0.2*Math.sin((m.mtime*1.2))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (Math.log((m.x+0.1))*(m.x+0.1));
m.rot = (m.rot*0.1);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.1,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 0.30299,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
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
			scaling : 0.90529,
			samples : 512.0,
			additive : 0.0,
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
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 7.09852,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.1,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.1,
			rad : 0.10406,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 54.0,
			border_r : 0.1,
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
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 4.81638,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.2047,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 44.0,
			border_r : 0.0,
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
			a : 0.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 2.0882,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.03,
			r : 0.0,
			border_g : 0.0,
			rad : 0.02076,
			x : 0.5,
			y : 0.451,
			ang : 1.82212,
			sides : 3.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = (m.rad+(0.09*m.q1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad = rad+0.09*q1;'),

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
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.17628,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 44.0,
			border_r : 0.0,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 1.5)) + rand_frame.xy);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.zw = vec2(0.0, 0.0);\n' + '  tmpvar_3.xy = uv;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.zw = vec2(0.0, 0.0);\n' + '  tmpvar_4.xy = uv_orig;\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_noise_lq, tmpvar_2);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = mix (tmpvar_3, tmpvar_4, ((1.3 - rad) + (\n' + '    (tmpvar_5 - 0.5)\n' + '   * 0.15)));\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = clamp (tmpvar_6.xy, 0.0, 1.0);\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = dot ((texture2D (sampler_main, tmpvar_7).xyz - 0.35), vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = clamp (tmpvar_6.xy, 0.0, 1.0);\n' + '   float tmpvar_10;\n' + '  tmpvar_10 = dot (texture2D (sampler_main, tmpvar_9).xyz, vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = clamp ((tmpvar_6.xy - (\n' + '    ((vec2(0.0, 64.0) * texsize.zw) * tmpvar_8)\n' + '   * \n' + '    (tmpvar_10 - 0.4)\n' + '  )), 0.0, 1.0);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_main, tmpvar_11);\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = ((texture2D (sampler_noise_lq, tmpvar_2) - 0.5) * 0.0038).xyz;\n' + '  ret_1 = ((tmpvar_12.xyz - 0.0011) + tmpvar_13);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14.w = 1.0;\n' + '  tmpvar_14.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_14;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   float dy_1;\n' + '   float dx_2;\n' + '   vec2 uv1_3;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_main, uv);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.y = 0.0;\n' + '  tmpvar_5.x = texsize.z;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = 0.0;\n' + '  tmpvar_6.y = texsize.w;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - tmpvar_5);\n' + '   vec2 P_8;\n' + '  P_8 = (uv + tmpvar_5);\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = (texture2D (sampler_main, P_7).xyz - texture2D (sampler_main, P_8).xyz).x;\n' + '  dx_2 = tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv - tmpvar_6);\n' + '   vec2 P_11;\n' + '  P_11 = (uv + tmpvar_6);\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = (texture2D (sampler_main, P_10).xyz - texture2D (sampler_main, P_11).xyz).x;\n' + '  dy_1 = tmpvar_12;\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = dx_2;\n' + '  tmpvar_13.y = dy_1;\n' + '  uv1_3 = ((0.3 * cos(\n' + '    ((uv - 0.5) * 2.0)\n' + '  )) - tmpvar_13);\n' + '   float tmpvar_14;\n' + '  tmpvar_14 = clamp ((0.04 / sqrt(\n' + '    dot (uv1_3, uv1_3)\n' + '  )), 0.0, 1.0);\n' + '  uv1_3 = ((0.3 * cos(\n' + '    (uv1_3 * 12.0)\n' + '  )) - (9.0 * tmpvar_13));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 1.0;\n' + '  tmpvar_15.xyz = (tmpvar_14 + ((tmpvar_4.xyz * 12.0) * vec3(clamp (\n' + '    (0.04 / sqrt(dot (uv1_3, uv1_3)))\n' + '  , 0.0, 1.0))));\n' + '  vec4 ret4 = tmpvar_15;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.5*(0.6*sin(time*1.3) + 0.4*sin(0.98*time));\n' + 'wave_b = wave_b + 0.5*(0.6*sin(time*1.1) + 0.4*sin(0.78*time));\n' + 'wave_g = wave_g + 0.5*(0.6*sin(time*1.2) + 0.4*sin(0.6*time));\n' + 'q8=wave_r;\n' + 'q7=wave_b;\n' + 'q6=wave_g;\n' + 'wr = 0.5+0.3*(0.6*sin(time*1.8) + 0.4*sin(0.8*time));\n' + 'wb = 0.5+0.3*(0.6*sin(time*1.67) + 0.4*sin(0.5*time));\n' + 'wg = 0.5+0.3*(0.6*sin(time*1.92) + 0.4*sin(0.4*time));\n' + 'q10=wr;\n' + 'q11=wb;\n' + 'q12=wg;\n' + 'vol = 0.1*(vol*9 + (bass_att+mid_att+treb_att)*0.333333);\n' + 'q1=vol;\n' + 'monitor=vol;\n' + 'mtime=mtime+vol*0.01;\n' + 'q2=mtime*0.25;\n' + 'wave_mystery = wave_mystery + 0.6*vol;\n' + 'sy=sy+vol*0.02;\n' + 'sx=sy;\n' + 'cx = cx + 0.2*sin(mtime);\n' + 'cy = cy - 0.2*sin(mtime*1.2);'),
	'pixel_eqs_str' : ('rot=log(x+0.1)*(x+0.1);\n' + 'rot=rot*0.1;'),
};

return pmap;
});
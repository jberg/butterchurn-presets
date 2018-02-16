define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.57,
		mv_x : 24.8,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.898,
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
		wave_mode : 4.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.16,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.5,
		mv_b : 1.0,
		echo_zoom : 1.007,
		ob_size : 0.01,
		b1ed : 0.0,
		wave_smoothing : 0.108,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.54,
		zoom : 0.9619,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.5,
		invert : 0.0,
		rot : -0.01,
		wave_thick : 1.0,
		modwavealphaend : 1.28,
		wave_mystery : 0.1,
		decay : 0.985,
		wave_a : 0.331,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.4,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.72,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.1*((0.6*Math.sin((0.933*m.time)))+(0.4*Math.sin((1.072*m.time))))));
m.wave_g = (m.wave_g+(0.1*((0.6*Math.sin((0.888*m.time)))+(0.4*Math.sin((0.918*m.time))))));
m.wave_b = (m.wave_b+(0.2*((0.6*Math.sin((0.335*m.time)))+(0.4*Math.sin((0.4*m.time))))));
m.wave_mystery = (0.5*Math.sin((0.35*m.bass)));
m.decay = (m.decay-(0.01*equal(mod(m.frame,50), 0)));
m.mv_b = (m.mv_b+(0.2*Math.sin((m.time*1.411))));
m.cx = (m.cx+(0.08*Math.sin((m.time*1.315))));
m.cy = (m.cy+(0.08*Math.sin((m.time*1.127))));
m.q1 = Math.sin(((Math.sin((1.211*m.time))+Math.cos((0.887*m.time)))-Math.sin((1.453*m.time))));
		m.rkeys = ['rot','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+(0.1*m.rad));
m.rot = (m.rot-(0.15*Math.sin((m.q1-m.ang))));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.0,
			scaling : 0.03856,
			samples : 352.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.2,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.ampl = 0;
m.ratio = 0;
m.t02 = 0;
m.y1 = 0;
m.x1 = 0;

			m.rkeys = ['t02'];
			return m;
		},
		'frame_eqs' : function(m) {
m.q1 = m.bass_att;
		return m;
	},
		'point_eqs' : function(m) {
m.r = Math.abs(Math.sin(div(m.frame,38)));
m.g = (0.5*Math.abs(Math.cos(div(m.frame,45))));
m.b = (0.5*Math.abs(Math.sin(div(m.frame,133))));
m.a = 0.3;
m.t02 = (m.t02+div(m.q1,10));
m.ratio = Math.sin(div(m.frame,49));
m.ampl = (0.01+(0.4*sqr((Math.sin(div(m.frame,18))*Math.cos(div(m.frame,123))))));
m.x1 = ((div((m.r-0.5),15)+0.5)+(m.ampl*Math.sin((m.sample*6.28))));
m.y1 = ((div((m.b-0.5),15)+0.5)+(m.ampl*Math.cos((m.sample*6.28))));
m.x = (m.x1+(((1*0.2)*(m.ampl+m.ratio))*Math.sin((((m.sample*6.28)*m.ratio)*7.3))));
m.y = (m.y1+(((1*0.2)*(m.ampl+m.ratio))*Math.cos(((m.sample*6.28)*6))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('q1=bass_att;'),
		'point_eqs_str' : ('r = abs (sin (frame /38));\n' + 'g = 0.5*abs (cos (frame /45));\n' + 'b = 0.5*abs (sin (frame / 133));\n' + 'a = 0.3;\n' + 't02 = t02 + q1/10;\n' + 'ratio = sin (frame/49);\n' + 'ampl = 0.01+0.4*sqr(sin ((frame ) / 18)* cos (frame / 123));\n' + 'x1 = (r-0.5)/15 +0.5 + ampl* sin (sample*6.28);\n' + 'y1 = (b-0.5)/15+0.5 + ampl* cos (sample*6.28);\n' + 'x =  x1+1*0.2*(ampl+ratio )*sin ( sample*6.28 * ratio*7.3);\n' + 'y =  y1+1*0.2*(ampl+ratio )*cos ( sample*6.28*6);'),

		},
		{
		'baseVals' : {
			a : 0.9,
			enabled : 0.0,
			b : 0.6,
			g : 0.0,
			scaling : 2.06378,
			samples : 15.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.8,
			smoothing : 0.8,
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
			samples : 112.0,
			additive : 1.0,
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
			tex_zoom : 0.17914,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.82,
			border_g : 1.0,
			rad : 0.31275,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.xy = 0;
m.rand_frame = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.xy = (0.5+m.rand_frame);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('xy=0.5+rand_frame;'),

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
	'warp' : ('shader_body {\n' + '   vec3 blurry_color_1;\n' + '   vec2 uv2_2;\n' + '   vec3 ret_3;\n' + '   vec2 P_4;\n' + '  P_4 = (mix (uv, uv_orig, vec2(-1.0, -1.0)) + texsize.zw);\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, P_4).xyz;\n' + '  blurry_color_1 = tmpvar_5;\n' + '  uv2_2 = (uv + ((blurry_color_1.xy - 0.37) * (0.005 + \n' + '    (0.025 * clamp ((treb - 1.0), 0.0, 1.0))\n' + '  )));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv2_2);\n' + '  ret_3 = tmpvar_6.xyz;\n' + '  ret_3 = (ret_3 - 0.004);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('uniform highp vec3 neu;\n' + 'uniform highp vec3 blur;\n' + 'highp vec3 xlat_mutableblur;\n' + 'highp vec3 xlat_mutableneu;\n' + 'highp vec3 xlat_mutableret1;\n' + 'shader_body {\n' + '  xlat_mutableblur = blur;\n' + '  xlat_mutableneu = neu;\n' + '   vec2 uv_1;\n' + '   float ang2_3;\n' + '   vec2 uv2_4;\n' + '   vec3 ret_5;\n' + '  uv_1 = (uv - 0.5);\n' + '  uv_1 = (uv_1 * aspect.xy);\n' + '  xlat_mutableret1 = vec3(0.0, 0.0, 0.0);\n' + '  for ( int n_2 = 0; n_2 <= 5; n_2++) {\n' + '    ang2_3 = ((6.28 * float(n_2)) / 5.0);\n' + '     float tmpvar_6;\n' + '    tmpvar_6 = cos(ang2_3);\n' + '     float tmpvar_7;\n' + '    tmpvar_7 = sin(ang2_3);\n' + '    uv2_4.x = ((uv_1.x * tmpvar_6) - (uv_1.y * tmpvar_7));\n' + '    uv2_4.y = ((uv_1.x * tmpvar_7) + (uv_1.y * tmpvar_6));\n' + '     vec4 tmpvar_8;\n' + '     vec2 P_9;\n' + '     float tmpvar_10;\n' + '    tmpvar_10 = (0.02 * _qg.z);\n' + '    P_9 = ((uv2_4 + 0.4) + tmpvar_10);\n' + '    tmpvar_8 = texture2D (sampler_main, P_9);\n' + '    xlat_mutableneu = tmpvar_8.xyz;\n' + '     vec4 tmpvar_11;\n' + '     vec2 P_12;\n' + '    P_12 = ((uv2_4 + 0.4) + tmpvar_10);\n' + '    tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '    xlat_mutableblur = ((tmpvar_11.xyz * scale1) + bias1);\n' + '    xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu + (xlat_mutableblur * 2.0)));\n' + '  };\n' + '  ret_5 = ((xlat_mutableret1 - 0.0125) * 0.7);\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = (1.0 - ((ret_5 * \n' + '    (1.0 - ret_5)\n' + '  ) * 4.0));\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14.xy = (tmpvar_13.xy * vec2(0.5, 0.5));\n' + '  tmpvar_14.z = tmpvar_13.z;\n' + '  ret_5 = (tmpvar_14 * 0.5);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 1.0;\n' + '  tmpvar_15.xyz = ret_5;\n' + '  vec4 ret4 = tmpvar_15;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.1*(0.6*sin(0.933*time) + 0.4*sin(1.072*time));\n' + 'wave_g = wave_g + 0.1*(0.6*sin(0.888*time) + 0.4*sin(0.918*time));\n' + 'wave_b = wave_b + 0.2*(0.6*sin(0.335*time) + 0.4*sin(0.4*time));\n' + 'wave_mystery = 0.5*sin(0.35*bass);\n' + 'decay = decay - 0.01*equal(frame%50,0);\n' + 'mv_b = mv_b + 0.2*sin(time*1.411);\n' + 'cx = cx + 0.08*sin(time*1.315);\n' + 'cy = cy + 0.08*sin(time*1.127);\n' + 'q1 = sin(sin(1.211*time)+ cos(0.887*time)-sin(1.453*time));'),
	'pixel_eqs_str' : ('zoom = zoom + (0.1*rad);\n' + 'rot = rot - 0.15*sin(q1-ang);'),
};

return pmap;
});
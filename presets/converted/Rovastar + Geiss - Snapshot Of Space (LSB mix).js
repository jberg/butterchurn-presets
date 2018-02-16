define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.6,
		ib_g : 0.25,
		mv_x : 24.986,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 20.031,
		wave_scale : 2.905,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 2.63006,
		mv_dx : 0.065,
		mv_dy : 0.109,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.6,
		ib_r : 0.25,
		mv_b : 0.816,
		echo_zoom : 1.047,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.6,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.099,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.031,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.036,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.3,
		decay : 0.981,
		wave_a : 0.9,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.6,
		ib_b : 0.25,
		mv_r : 0.816,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q5_residual = 0;
m.q8 = 0;
m.oldq8 = 0;
m.bass_thresh = 0;
m.q6_residual = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.400*((0.60*Math.sin((0.933*m.time)))+(0.40*Math.sin((1.045*m.time))))));
m.wave_g = (m.wave_g+(0.100*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((0.956*m.time))))));
m.wave_b = (m.wave_b+(0.100*((0.60*Math.sin((0.910*m.time)))+(0.40*Math.sin((0.920*m.time))))));
m.mv_r = m.wave_r;
m.mv_b = m.wave_b;
m.mv_g = m.wave_g;
m.q8 = (m.oldq8+(0.0003*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.q5_residual = (((equal(m.bass_thresh, 2)*0.0064)*Math.sin((m.q8*5)))+((1-equal(m.bass_thresh, 2))*m.q5_residual));
m.q6_residual = (((equal(m.bass_thresh, 2)*0.0048)*Math.sin((m.q8*6)))+((1-equal(m.bass_thresh, 2))*m.q6_residual));
m.dx = m.q5_residual;
m.dy = m.q6_residual;
m.q1 = (0.03*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps));
m.monitor = m.q1;
m.mv_a = (m.bass-1.2);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = ((0.9+(0.1*m.q1))+(m.rad*0.1));
m.zoomexp = (2*m.zoom);
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
	'comp' : ('shader_body {\n' + '   float b4_1;\n' + '   float b3_2;\n' + '   float b2_3;\n' + '   float b1_4;\n' + '   vec3 ret_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv);\n' + '  ret_5 = tmpvar_6.xyz;\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7.z = 0.0;\n' + '  tmpvar_7.xy = texsize.zw;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + tmpvar_7.xz);\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = dot (texture2D (sampler_main, P_8).xyz, vec3(0.32, 0.49, 0.29));\n' + '  b1_4 = tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv - tmpvar_7.xz);\n' + '   float tmpvar_11;\n' + '  tmpvar_11 = dot (texture2D (sampler_main, P_10).xyz, vec3(0.32, 0.49, 0.29));\n' + '  b2_3 = tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (uv + tmpvar_7.zy);\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = dot (texture2D (sampler_main, P_12).xyz, vec3(0.32, 0.49, 0.29));\n' + '  b3_2 = tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (uv - tmpvar_7.zy);\n' + '   float tmpvar_15;\n' + '  tmpvar_15 = dot (texture2D (sampler_main, P_14).xyz, vec3(0.32, 0.49, 0.29));\n' + '  b4_1 = tmpvar_15;\n' + '  ret_5 = -(ret_5);\n' + '  ret_5 = (ret_5 + (clamp (\n' + '    ((b1_4 - b2_3) * 64.0)\n' + '  , 0.0, 1.0) * vec3(1.0, 0.6, 0.1)));\n' + '  ret_5 = (ret_5 + (clamp (\n' + '    ((b3_2 - b4_1) * 64.0)\n' + '  , 0.0, 1.0) * vec3(0.2, 0.5, 0.7)));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_blur1, uv);\n' + '  ret_5 = (ret_5 - clamp ((\n' + '    (((tmpvar_16.xyz * scale1) + bias1) * 4.0)\n' + '   - 1.0), 0.0, 1.0));\n' + '  ret_5 = (ret_5 * 1.5);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17.w = 1.0;\n' + '  tmpvar_17.xyz = ret_5;\n' + '  vec4 ret4 = tmpvar_17;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.400*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );\n' + 'wave_g = wave_g + 0.100*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );\n' + 'wave_b = wave_b + 0.100*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );\n' + 'mv_r = wave_r;\n' + 'mv_b = wave_b;\n' + 'mv_g = wave_g;\n' + 'q8 =oldq8+ 0.0003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 = q8;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'q5_residual = equal(bass_thresh,2)*0.0064*sin(q8*5) + (1-equal(bass_thresh,2))*q5_residual;\n' + 'q6_residual = equal(bass_thresh,2)*0.0048*sin(q8*6) + (1-equal(bass_thresh,2))*q6_residual;\n' + 'dx=q5_residual ;\n' + 'dy=q6_residual ;\n' + 'q1 = 0.03*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'monitor = q1;\n' + 'mv_a = bass-1.2;'),
	'pixel_eqs_str' : ('zoom = 0.9 + 0.1*q1 + rad*0.1;\n' + 'zoomexp = 2*zoom;'),
};

return pmap;
});
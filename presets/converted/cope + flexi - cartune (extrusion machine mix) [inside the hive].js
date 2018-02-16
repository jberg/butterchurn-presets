define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.14,
		wave_g : 1.0,
		ib_g : 0.3,
		mv_x : 0.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 1.599,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.045,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.3,
		mv_b : 0.71,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.91,
		wave_x : 0.2,
		wave_y : 0.88,
		zoom : 1.0002,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : -0.004,
		ob_a : 0.8,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.3,
		mv_r : 1.0,
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
m.q3 = 0;
m.q4 = 0;
m.vol = 0;
m.bass_thresh = 0;
m.dx1 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.91)+1.3)));
m.q2 = m.bass_thresh;
m.vol = (((m.bass+m.mid)+m.treb)*0.25);
m.vol = (m.vol*m.vol);
m.q3 = m.vol;
m.q4 = Math.min((m.vol*0.5), 1);
m.dy = -0.005;
m.warp = 0;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx1 = ((Math.cos(((m.y*m.q3)*30))*1.2)*0.11);
m.dx = ifcond(above(m.y, 0.8), ifcond(below(m.y, 0.83), ifcond(above(m.x, 0.05), ifcond(below(m.x, 0.93), ((m.dx1*((1-m.rad)+0.1))*1.5), 0), 0), 0), 0);
m.q1 = m.dx;
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.7,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.2,
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
			r2 : 0.6,
			a : 1.0,
			enabled : 0.0,
			b : 0.7,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.6,
			textured : 0.0,
			g2 : 0.6,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.6,
			a2 : 1.0,
			r : 0.7,
			border_g : 0.0,
			rad : 0.11039,
			x : 0.56,
			y : 0.0,
			ang : 3.40549,
			sides : 63.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = ['g','b','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (m.r+(0.3*((0.6*Math.sin((m.time*1.4)))+(0.4*Math.sin((0.98*m.time))))));
m.b = (m.b+(0.3*((0.6*Math.sin((m.time*1.134)))+(0.4*Math.sin((0.78*m.time))))));
m.g = (m.g+(0.3*((0.6*Math.sin((m.time*1.287)))+(0.4*Math.sin((0.6*m.time))))));
m.r = 0;
m.b = 0;
m.g = 0;
m.r2 = m.r;
m.b2 = m.b;
m.g2 = m.g;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = r + 0.3*(0.6*sin(time*1.4) + 0.4*sin(0.98*time));\n' + 'b = b + 0.3*(0.6*sin(time*1.134) + 0.4*sin(0.78*time));\n' + 'g = g + 0.3*(0.6*sin(time*1.287) + 0.4*sin(0.6*time));\n' + 'r=0;\n' + 'b=0;\n' + 'g=0;\n' + 'r2=r;\n' + 'b2=b;\n' + 'g2=g;'),

		},
		{
		'baseVals' : {
			r2 : 0.6,
			a : 1.0,
			enabled : 1.0,
			b : 0.7,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.6,
			textured : 0.0,
			g2 : 0.6,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.6,
			a2 : 1.0,
			r : 0.7,
			border_g : 1.0,
			rad : 0.11046,
			x : 0.5,
			y : 0.0,
			ang : 0.0,
			sides : 34.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;

			m.rkeys = ['g','b','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (m.r+(0.3*((0.6*Math.sin((m.time*2.4)))+(0.4*Math.sin((0.34*m.time))))));
m.b = (m.b+(0.3*((0.6*Math.sin((m.time*1.65)))+(0.4*Math.sin((0.976*m.time))))));
m.g = (m.g+(0.3*((0.6*Math.sin((m.time*2.05)))+(0.4*Math.sin((0.577*m.time))))));
m.r = m.q4;
m.b = (1-m.r);
m.g = (1-m.r);
m.r2 = m.r;
m.b2 = m.b;
m.g2 = m.g;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = r + 0.3*(0.6*sin(time*2.4) + 0.4*sin(0.34*time));\n' + 'b = b + 0.3*(0.6*sin(time*1.65) + 0.4*sin(0.976*time));\n' + 'g = g + 0.3*(0.6*sin(time*2.05) + 0.4*sin(0.577*time));\n' + 'r = q4;\n' + 'b = 1-r;\n' + 'g = 1-r;\n' + 'r2=r;\n' + 'b2=b;\n' + 'g2=g;'),

		},
		{
		'baseVals' : {
			r2 : 0.6,
			a : 1.0,
			enabled : 0.0,
			b : 0.7,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.6,
			textured : 0.0,
			g2 : 0.6,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.6,
			a2 : 1.0,
			r : 0.7,
			border_g : 1.0,
			rad : 0.11039,
			x : 0.44,
			y : 0.0,
			ang : 0.0,
			sides : 54.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = 0;
m.b = 0;
m.g = 0;
m.r2 = m.r;
m.b2 = m.b;
m.g2 = m.g;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=0;\n' + 'b=0;\n' + 'g=0;\n' + 'r2=r;\n' + 'b2=b;\n' + 'g2=g;'),

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
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.20068,
			x : 0.0,
			y : 0.2,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_blur1, uv);\n' + '   vec3 y_3;\n' + '  y_3 = (texture2D (sampler_main, uv).xyz - 0.9);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = uv.x;\n' + '  tmpvar_4.y = (uv.y - pow (pow (\n' + '    (((tmpvar_2.xyz * scale1) + bias1) - 0.05)\n' + '  , y_3).x, 0.007));\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = fract(tmpvar_4);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, tmpvar_5);\n' + '  ret_1 = tmpvar_6.xyz;\n' + '  ret_1 = (ret_1 + 0.001);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec2 xlat_mutabled;\n' + 'highp vec3 xlat_mutabledx;\n' + 'highp vec3 xlat_mutabledy;\n' + 'shader_body {\n' + '   float base_1;\n' + '  xlat_mutabled = (texsize.zw * 18.0);\n' + '   vec4 tmpvar_2;\n' + '   vec2 P_3;\n' + '  P_3 = (uv + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_2 = texture2D (sampler_blur1, P_3);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '  xlat_mutabledx = (((tmpvar_2.xyz * scale1) + bias1) - ((tmpvar_4.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '  xlat_mutabledy = (((tmpvar_6.xyz * scale1) + bias1) - ((tmpvar_8.xyz * scale1) + bias1));\n' + '   float tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_main, uv).x;\n' + '  base_1 = tmpvar_10;\n' + '   float tmpvar_11;\n' + '  tmpvar_11 = ((-(xlat_mutabledx) + xlat_mutabledy) + 1.0).x;\n' + '  xlat_mutabled = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (uv + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_12 = texture2D (sampler_blur1, P_13);\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (uv - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_14 = texture2D (sampler_blur1, P_15);\n' + '  xlat_mutabledx = (((tmpvar_12.xyz * scale1) + bias1) - ((tmpvar_14.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_16;\n' + '   vec2 P_17;\n' + '  P_17 = (uv + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_16 = texture2D (sampler_blur1, P_17);\n' + '   vec4 tmpvar_18;\n' + '   vec2 P_19;\n' + '  P_19 = (uv - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_18 = texture2D (sampler_blur1, P_19);\n' + '  xlat_mutabledy = (((tmpvar_16.xyz * scale1) + bias1) - ((tmpvar_18.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20.x = xlat_mutabledx.x;\n' + '  tmpvar_20.y = xlat_mutabledy.x;\n' + '   float tmpvar_21;\n' + '  tmpvar_21 = (sqrt(dot (tmpvar_20, tmpvar_20)) * 0.6);\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22.x = xlat_mutabledx.x;\n' + '  tmpvar_22.y = xlat_mutabledy.x;\n' + '   vec2 tmpvar_23;\n' + '  tmpvar_23.x = xlat_mutabledx.z;\n' + '  tmpvar_23.y = xlat_mutabledy.z;\n' + '   vec4 tmpvar_24;\n' + '   vec2 P_25;\n' + '  P_25 = ((uv + (tmpvar_22 * 0.2)) + (tmpvar_23 * 0.04));\n' + '  tmpvar_24 = texture2D (sampler_main, P_25);\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26 = texture2D (sampler_blur1, uv);\n' + '   vec2 tmpvar_27;\n' + '  tmpvar_27.x = xlat_mutabledx.y;\n' + '  tmpvar_27.y = xlat_mutabledy.y;\n' + '   vec2 tmpvar_28;\n' + '  tmpvar_28.x = xlat_mutabledx.x;\n' + '  tmpvar_28.y = xlat_mutabledy.x;\n' + '   vec2 P_29;\n' + '  P_29 = ((uv + (tmpvar_27 * 0.01)) + (tmpvar_28 * 0.2));\n' + '   vec3 tmpvar_30;\n' + '  tmpvar_30 = texture2D (sampler_main, P_29).yyy;\n' + '   vec4 tmpvar_31;\n' + '  tmpvar_31.w = 1.0;\n' + '  tmpvar_31.xyz = mix (mix (mix (\n' + '    ((vec3(0.5, 0.3, 0.0) * base_1) * tmpvar_11)\n' + '  , \n' + '    (vec3(8.0, 7.0, 0.0) * tmpvar_21)\n' + '  , vec3(tmpvar_21)), vec3(0.2, 0.0, 0.4), vec3(clamp (\n' + '    (tmpvar_24.z - (((tmpvar_26.xyz * scale1) + bias1).x * 2.0))\n' + '  , 0.0, 1.0))), vec3(1.0, 1.0, 1.0), tmpvar_30);\n' + '  vec4 ret4 = tmpvar_31;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.91+1.3);\n' + 'q2=bass_thresh;\n' + 'vol=(bass+mid+treb)*0.25;\n' + 'vol=vol*vol;\n' + 'q3=vol;\n' + 'q4 = min(vol*0.5, 1);\n' + 'dy = -0.005;\n' + 'warp=0;'),
	'pixel_eqs_str' : ('dx1=(cos(y*q3*30)*1.2)*0.11;\n' + 'dx=if(above(y,0.8),if(below(y,0.83),if(above(x,0.05),if(below(x,0.93),(dx1*(1-rad+0.1))*1.5,0),0),0),0);\n' + 'q1=dx;'),
};

return pmap;
});
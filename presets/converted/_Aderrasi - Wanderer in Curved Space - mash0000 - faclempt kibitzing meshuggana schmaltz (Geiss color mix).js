define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.721,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
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
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.995,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.5,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.dx_r = 0;
m.dy_r = 0;
m.xs = 0;
m.thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (0.5+(0.5*Math.sin((6*m.time))));
m.wave_g = (0.5+(0.5*Math.sin((4.1*m.time))));
m.wave_b = (-1+(((1-m.wave_r)+1)-m.wave_g));
m.warp = 0;
		m.rkeys = ['dy','dx','rot','zoom','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.xs = ((above(Math.sin(((12*m.dx_r)*m.bass)), 0)*(m.dy_r*Math.sin((2*m.rad))))+(below(Math.sin(((12*m.dx_r)*m.bass)), 0)*((Math.cos(m.time)*m.dx_r)*Math.sin((0.6*m.rad)))));
m.zoom = (m.zoom+Math.abs((12*m.xs)));
m.rot = (m.rot+((5*m.xs)*Math.cos((1-(((m.xs*m.rad)*12)*m.dx_r)))));
m.dx = (m.dx+m.dx_r);
m.dy = (m.dy+m.dy_r);
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
	'warp' : ('shader_body {\n' + '   vec2 my_uv_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (vec2(1280.0, 1024.0) * texsize.zw);\n' + '   vec4 tmpvar_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (uv + vec2(0.005, 0.0));\n' + '  tmpvar_4 = texture2D (sampler_blur2, tmpvar_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (uv - vec2(0.005, 0.0));\n' + '  tmpvar_6 = texture2D (sampler_blur2, tmpvar_7);\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = (((\n' + '    (tmpvar_4.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_6.xyz * scale2)\n' + '   + bias2)).x * tmpvar_3.x);\n' + '   vec4 tmpvar_9;\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = (uv + vec2(0.0, 0.005));\n' + '  tmpvar_9 = texture2D (sampler_blur2, tmpvar_10);\n' + '   vec4 tmpvar_11;\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = (uv - vec2(0.0, 0.005));\n' + '  tmpvar_11 = texture2D (sampler_blur2, tmpvar_12);\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = (((\n' + '    (tmpvar_9.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_11.xyz * scale2)\n' + '   + bias2)).x * tmpvar_3.y);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur2, tmpvar_5);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur2, tmpvar_7);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_blur2, tmpvar_10);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur2, tmpvar_12);\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18.x = tmpvar_8;\n' + '  tmpvar_18.y = tmpvar_13;\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = (((\n' + '    (tmpvar_14.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_15.xyz * scale2)\n' + '   + bias2)).x * tmpvar_3.x);\n' + '  tmpvar_19.y = (((\n' + '    (tmpvar_16.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_17.xyz * scale2)\n' + '   + bias2)).x * tmpvar_3.y);\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = ((uv - (tmpvar_18 * 0.01)) + (tmpvar_19 * 0.003));\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_fw_main, tmpvar_20);\n' + '  ret_2.x = tmpvar_21.x;\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur3, uv);\n' + '  ret_2.x = (ret_2.x + ((ret_2.x - \n' + '    ((tmpvar_22.xyz * scale3) + bias3)\n' + '  .x) * 0.1));\n' + '  ret_2.x = (ret_2.x + 0.004);\n' + '   vec2 tmpvar_23;\n' + '  tmpvar_23.x = tmpvar_13;\n' + '  tmpvar_23.y = -(tmpvar_8);\n' + '  my_uv_1 = (uv + ((tmpvar_23 * 0.05) * (1.2 - \n' + '    ((tmpvar_22.xyz * scale3) + bias3)\n' + '  .y)));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_fw_main, my_uv_1);\n' + '  ret_2.z = tmpvar_24.z;\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_blur1, uv);\n' + '   vec2 x_26;\n' + '  x_26 = (my_uv_1 - uv);\n' + '  ret_2.z = (ret_2.z + ((\n' + '    ((ret_2.z - ((tmpvar_25.xyz * scale1) + bias1).z) * sqrt(dot (x_26, x_26)))\n' + '   * 180.0) / sqrt(\n' + '    dot (tmpvar_3, tmpvar_3)\n' + '  )));\n' + '  ret_2.z = (ret_2.z * 0.8);\n' + '  ret_2.z = (ret_2.z + 0.004);\n' + '   vec2 tmpvar_27;\n' + '  tmpvar_27.x = -(tmpvar_13);\n' + '  tmpvar_27.y = tmpvar_8;\n' + '  my_uv_1 = (tmpvar_27 * 0.045);\n' + '   vec4 tmpvar_28;\n' + '   vec2 P_29;\n' + '  P_29 = (uv + vec2(0.01, 0.0));\n' + '  tmpvar_28 = texture2D (sampler_blur2, P_29);\n' + '   vec4 tmpvar_30;\n' + '   vec2 P_31;\n' + '  P_31 = (uv - vec2(0.01, 0.0));\n' + '  tmpvar_30 = texture2D (sampler_blur2, P_31);\n' + '   vec4 tmpvar_32;\n' + '   vec2 P_33;\n' + '  P_33 = (uv + vec2(0.0, 0.01));\n' + '  tmpvar_32 = texture2D (sampler_blur2, P_33);\n' + '   vec4 tmpvar_34;\n' + '   vec2 P_35;\n' + '  P_35 = (uv - vec2(0.0, 0.01));\n' + '  tmpvar_34 = texture2D (sampler_blur2, P_35);\n' + '   vec2 tmpvar_36;\n' + '  tmpvar_36.x = (((\n' + '    (tmpvar_28.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_30.xyz * scale2)\n' + '   + bias2)).y * tmpvar_3.x);\n' + '  tmpvar_36.y = (((\n' + '    (tmpvar_32.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_34.xyz * scale2)\n' + '   + bias2)).y * tmpvar_3.y);\n' + '  my_uv_1 = (my_uv_1 + (uv - (tmpvar_36 * 0.03)));\n' + '   vec4 tmpvar_37;\n' + '  tmpvar_37 = texture2D (sampler_fw_main, my_uv_1);\n' + '  ret_2.y = tmpvar_37.y;\n' + '   vec4 tmpvar_38;\n' + '  tmpvar_38 = texture2D (sampler_blur3, my_uv_1);\n' + '  ret_2.y = (ret_2.y + ((\n' + '    (ret_2.y - ((tmpvar_38.xyz * scale3) + bias3).y)\n' + '   * 0.1) + 0.01));\n' + '   vec4 tmpvar_39;\n' + '  tmpvar_39.w = 1.0;\n' + '  tmpvar_39.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_39;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 * hue_shader);\n' + '   vec3 tmpvar_3;\n' + '  tmpvar_3 = mix (ret_1, vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))), vec3(0.5, 1.0, 0.1));\n' + '  ret_1 = tmpvar_3;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = tmpvar_3;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = 0.5 + 0.5*sin(6*time);\n' + 'wave_g = 0.5 + 0.5*sin(4.1*time);\n' + 'wave_b = -1 + (1-wave_r + 1-wave_g);\n' + 'warp = 0;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'xs = above(sin(12*dx_r*bass),0)*(dy_r*sin(2*rad)) +below(sin(12*dx_r*bass),0)*(cos(time)*dx_r*sin(0.6*rad));\n' + 'zoom = zoom + abs(12*xs);\n' + 'rot = rot + 5*xs*cos(1-xs*rad*12*dx_r);\n' + 'dx = dx + dx_r;\n' + 'dy = dy + dy_r;'),
};

return pmap;
});
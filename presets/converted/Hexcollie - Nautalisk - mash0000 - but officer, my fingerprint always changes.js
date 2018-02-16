define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 0.12,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 2.85,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.05101,
		ob_r : 0.6,
		sy : 1.07213,
		b3x : 1.0,
		ib_size : 0.005,
		b2x : 1.0,
		warp : 0.08081,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 1.0,
		mv_b : 0.5,
		echo_zoom : 1.0,
		ob_size : 0.015,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 0.01,
		wave_dots : 1.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.85,
		invert : 1.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.94,
		wave_a : 4.1,
		ob_g : 1.0,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 0.5,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.mod = 0;
m.ms = 0;
m.var = 0;
m.it = 0;
m.mss = 0;
m.radm = 0;
m.mv_x = 64;
m.mv_y = 48;
m.nut = 0;
m.stp = 0;
m.stq = 0;
m.rtp = 0;
m.rtq = 0;
m.wvr = 0;
m.decay = 0;
m.dcsp = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 1;
m.zoom = -1.00;
m.ms = (Math.sin((m.time*0.6))*0.15);
m.mss = (m.mss+(m.ms*0.001));
m.q1 = m.ms;
m.dx = 0;
m.dy = 0;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.it = (0.3*m.bass_att);
m.radm = (m.rad*500);
m.rot = div((-0.02*Math.tan(((m.radm+m.it)*30))),((m.rad+0.1)*(m.bass_att*500)));
m.var = (2-Math.atan((m.bass_att*4)));
m.mod = (Math.atan((m.ang*m.var))+(m.bass_att*2));
m.mod = ((m.mod*Math.cos(m.rad))-Math.cos(m.ang));
m.zoom = ((0.89+Math.abs((0.02*m.mod)))+(m.bass_att*0.01));
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
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.77977,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.15493,
			x : 0.5,
			y : 0.9,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 3.14159,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.75668,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.98608,
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
m.ang = ((m.ang+(m.bass*0.2))+(m.time*0.4));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = ang + (bass*.2) + (time*.4);'),

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
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.9,
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
m.x = ((Math.sin(m.time)*0.4)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = sin(time) * .4 + .5;'),

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
	'warp' : ('shader_body {\n' + '   vec2 my_uv_1;\n' + '   float dy_2;\n' + '   float dx_3;\n' + '   vec3 ret_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (texsize.zw * 12.0);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = ((uv + (vec2(1.0, 0.0) * tmpvar_5)) - floor((uv + \n' + '    (vec2(1.0, 0.0) * tmpvar_5)\n' + '  )));\n' + '  tmpvar_6 = texture2D (sampler_blur2, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = ((uv - (vec2(1.0, 0.0) * tmpvar_5)) - floor((uv - \n' + '    (vec2(1.0, 0.0) * tmpvar_5)\n' + '  )));\n' + '  tmpvar_8 = texture2D (sampler_blur2, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = ((uv + (vec2(0.0, 1.0) * tmpvar_5)) - floor((uv + \n' + '    (vec2(0.0, 1.0) * tmpvar_5)\n' + '  )));\n' + '  tmpvar_10 = texture2D (sampler_blur2, P_11);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = ((uv - (vec2(0.0, 1.0) * tmpvar_5)) - floor((uv - \n' + '    (vec2(0.0, 1.0) * tmpvar_5)\n' + '  )));\n' + '  tmpvar_12 = texture2D (sampler_blur2, P_13);\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = (((tmpvar_6.xyz * scale2) + bias2) - ((tmpvar_8.xyz * scale2) + bias2)).y;\n' + '  tmpvar_14.y = (((tmpvar_10.xyz * scale2) + bias2) - ((tmpvar_12.xyz * scale2) + bias2)).y;\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15 = (uv - (tmpvar_14 * 0.08));\n' + '   vec4 tmpvar_16;\n' + '   vec2 P_17;\n' + '  P_17 = (tmpvar_15 - floor(tmpvar_15));\n' + '  tmpvar_16 = texture2D (sampler_fc_main, P_17);\n' + '  ret_4.y = tmpvar_16.y;\n' + '   vec4 tmpvar_18;\n' + '   vec2 P_19;\n' + '  P_19 = (tmpvar_15 - floor(tmpvar_15));\n' + '  tmpvar_18 = texture2D (sampler_blur1, P_19);\n' + '  ret_4.y = (ret_4.y + ((\n' + '    (ret_4.y - ((tmpvar_18.xyz * scale1) + bias1).y)\n' + '   * 0.125) + 0.02));\n' + '   vec4 tmpvar_20;\n' + '   vec2 P_21;\n' + '  P_21 = (uv + vec2(0.01, 0.0));\n' + '  tmpvar_20 = texture2D (sampler_blur2, P_21);\n' + '   vec4 tmpvar_22;\n' + '   vec2 P_23;\n' + '  P_23 = (uv - vec2(0.01, 0.0));\n' + '  tmpvar_22 = texture2D (sampler_blur2, P_23);\n' + '  dx_3 = (((\n' + '    ((tmpvar_20.xyz * scale2) + bias2)\n' + '   - \n' + '    ((tmpvar_22.xyz * scale2) + bias2)\n' + '  ).x * 1280.0) * texsize.z);\n' + '   vec4 tmpvar_24;\n' + '   vec2 P_25;\n' + '  P_25 = (uv + vec2(0.0, 0.01));\n' + '  tmpvar_24 = texture2D (sampler_blur2, P_25);\n' + '   vec4 tmpvar_26;\n' + '   vec2 P_27;\n' + '  P_27 = (uv - vec2(0.0, 0.01));\n' + '  tmpvar_26 = texture2D (sampler_blur2, P_27);\n' + '  dy_2 = (((\n' + '    ((tmpvar_24.xyz * scale2) + bias2)\n' + '   - \n' + '    ((tmpvar_26.xyz * scale2) + bias2)\n' + '  ).x * 1024.0) * texsize.w);\n' + '   vec2 tmpvar_28;\n' + '  tmpvar_28.x = dx_3;\n' + '  tmpvar_28.y = dy_2;\n' + '  my_uv_1 = (uv + (tmpvar_28 * 0.01));\n' + '   vec4 tmpvar_29;\n' + '  tmpvar_29 = texture2D (sampler_fw_main, my_uv_1);\n' + '  ret_4.x = tmpvar_29.x;\n' + '   vec4 tmpvar_30;\n' + '  tmpvar_30 = texture2D (sampler_blur3, uv);\n' + '  ret_4.x = (ret_4.x + ((\n' + '    (ret_4.x - ((tmpvar_30.xyz * scale3) + bias3).x)\n' + '   - 0.02) * 0.2));\n' + '   vec2 tmpvar_31;\n' + '  tmpvar_31.x = dy_2;\n' + '  tmpvar_31.y = -(dx_3);\n' + '  my_uv_1 = (uv - (tmpvar_31 * 0.04));\n' + '   vec4 tmpvar_32;\n' + '  tmpvar_32 = texture2D (sampler_fw_main, my_uv_1);\n' + '  ret_4.z = tmpvar_32.z;\n' + '   vec4 tmpvar_33;\n' + '  tmpvar_33 = texture2D (sampler_blur1, uv);\n' + '  ret_4.z = (ret_4.z + (ret_4.z - (\n' + '    (tmpvar_33.xyz * scale1)\n' + '   + bias1).z));\n' + '  ret_4.z = (ret_4.z * (0.9 * (\n' + '    (ret_4.x + (ret_4.y * 0.64))\n' + '   - 1.0)));\n' + '  ret_4.z = (ret_4.z + 0.02);\n' + '   vec4 tmpvar_34;\n' + '  tmpvar_34.w = 1.0;\n' + '  tmpvar_34.xyz = ret_4;\n' + '  vec4 ret4 = tmpvar_34;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=1;\n' + 'zoom=-1.00;\n' + 'ms=sin(time*0.6)*0.15;\n' + 'mss=mss+ms*0.001;\n' + 'q1=ms;\n' + 'dx=0;\n' + 'dy=0;'),
	'pixel_eqs_str' : ('it = 0.3*bass_att;\n' + 'radm = rad*500;\n' + 'rot = -0.02*tan((radm+it)*30)/((rad+0.1)*(bass_att*500));\n' + 'var=2-atan(bass_att*4);\n' + 'mod = atan(ang*var)+(bass_att*2);\n' + 'mod = mod*cos(rad)-cos(ang);\n' + 'zoom = .89 + abs(0.02*mod)+(bass_att*0.01);'),
};

return pmap;
});
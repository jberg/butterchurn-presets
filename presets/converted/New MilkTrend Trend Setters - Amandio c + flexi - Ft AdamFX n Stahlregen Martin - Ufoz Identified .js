define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 0.01,
		brighten : 1.0,
		mv_y : 0.0,
		wave_scale : 0.466,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.005,
		b2x : 1.0,
		warp : 0.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.001,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.6,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.71,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.49,
		mv_l : 0.0,
		invert : 1.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 100.0,
		ob_g : 0.37,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.tt = 0;
m.mn = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.mt = 0;
m.q8 = 0;
m.q9 = 0;
m.bm = 0;
m.mx = 0;
m.q21 = 0;
m.q22 = 0;
m.q23 = 0;
m.q24 = 0;
m.q25 = 0;
m.q26 = 0;
m.v = 0;
m.q27 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.q1 = Math.sin(m.time);
m.q2 = Math.sin((0.3*m.time));
m.q3 = Math.sin((0.2*m.time));
m.q4 = Math.sin((0.1*m.time));
m.q5 = Math.sin((20*m.time));
m.q6 = Math.sin((25*m.time));
m.ib_g = (0.9+(0.1*m.q4));
m.ib_r = (0.7+(0.15*m.q2));
m.ib_b = (0.8+(0.2*m.q3));
m.ob_g = (0.6+(0.1*m.q4));
m.ob_r = (0.4+(0.15*m.q2));
m.ob_b = (0.5+(0.2*m.q3));
m.t1 = (0.008+m.t1);
m.t1 = (above(15, m.t1)*m.t1);
m.t2 = (0.004+m.t2);
m.t2 = (above(20, m.t2)*m.t2);
m.t3 = (0.006+m.t3);
m.t3 = (above(15, m.t3)*m.t3);
m.q7 = m.t1;
m.q8 = m.t2;
m.q9 = m.t3;
m.monitor = m.q7;
m.bb = ((m.bb*0.99)+(m.bass*0.02));
m.mm = ((m.mm*0.99)+(m.mid*0.02));
m.tt = ((m.tt*0.99)+(m.treb*0.02));
m.mx = Math.max(Math.max(m.bb, m.mm), m.tt);
m.mn = Math.min(Math.min(m.bb, m.mm), m.tt);
m.t1 = div((m.bb-m.mn),(m.mx-m.mn));
m.t2 = div((m.mm-m.mn),(m.mx-m.mn));
m.t3 = div((m.tt-m.mn),(m.mx-m.mn));
m.v = div(0.3,m.fps);
m.bm = (m.bm+((m.t1-m.t2)*m.v));
m.mt = (m.mt+((m.t2-m.t3)*m.v));
m.q21 = 0;
m.q22 = 0.5;
m.q23 = 0;
m.q24 = -0.5;
m.q25 = div(0.5,Math.asin(1));
m.q26 = m.bm;
m.q27 = m.mt;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = ((0.006*Math.sin(m.y))+(0.003*Math.tan((10+(20*m.y)))));
m.dy = ((0.005*Math.sin(m.x))+(0.02*Math.tan((30*m.x))));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 0.16217,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = m.sample;
m.y = ((0.5+(0.05*Math.tan(((2*3.14)*m.x))))+(0.1*Math.tan((((2*3.14)*m.q2)*m.x))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=sample;\n' + 'y=.5+.05*tan(2*3.14*x)+.1*tan(2*3.14*q2*x);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 0.01,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 1.0,
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
		'point_eqs' : function(m) {
m.x = m.sample;
m.y = (0.17+(0.02*Math.sin(((7*3.14)*m.x))));
m.x = (m.x+((3.14*0.022)*Math.sin((7*m.time))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=sample;\n' + 'y=.17+.02*sin(7*3.14*x);\n' + 'x=x+3.14*.022*sin(7*time);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.01,
			scaling : 0.01,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 1.0,
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
		'point_eqs' : function(m) {
m.x = (0.5+(0.05*m.sample));
m.y = (0.19+(0.03*Math.cos((23.5*m.x))));
m.x = (m.x+(0.003*Math.sin(m.time)));
m.y = (m.y+((0.11*Math.sin(m.time))*Math.sin(((2*3.14)*m.x))));
m.y = (m.y+(0.02*Math.sin((0.4*m.time))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=.5+.05*sample;\n' + 'y=.19+.03*cos(23.5*x);\n' + 'x=x+.003*(sin(time));\n' + 'y=y+.11*sin(time)*sin(2*3.14*x);\n' + 'y=y+.02*sin(.4*time);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q7 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (0.52+(0.01*m.sample));
m.y = (0.2+(0.04*m.sample));
m.x = (m.x+((0.001*m.q7)*Math.sin((15*m.q7))));
m.y = (m.y+((0.001*m.q7)*Math.cos((15*m.q7))));
m.b = m.sample;
m.g = m.sample;
m.r = m.sample;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=.52+.01*sample;\n' + 'y=.2+.04*sample;\n' + 'x=x+.001*q7*sin(15*q7);\n' + 'y=y+.001*q7*cos(15*q7);\n' + 'b=sample;\n' + 'g=sample;\n' + 'r=sample;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.67165,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.01,
			x : 0.5,
			y : 0.04,
			ang : 1.31947,
			sides : 3.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q5 = 0;
m.q6 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = (0.25+(0.03*(((0.2*m.q5)+(0.8*m.q6))+(2*m.bass_att))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad=.25+.03*(.2*q5+.8*q6+2*bass_att);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.10721,
			x : 0.42,
			y : 0.0,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_z_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (1.0 - abs((\n' + '    (fract((uv * 0.5)) * 2.0)\n' + '   - 1.0)));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_fc_main, tmpvar_3);\n' + '  ret_2.x = (tmpvar_4.y * 0.65);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (texsize.zw * 6.0);\n' + '   vec2 tmpvar_6;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (uv_orig - 0.5);\n' + '  tmpvar_6 = ((tmpvar_7 * 0.996) + 0.5);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (tmpvar_6 + (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (tmpvar_6 - (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (tmpvar_6 + (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_12 = texture2D (sampler_blur1, P_13);\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (tmpvar_6 - (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_14 = texture2D (sampler_blur1, P_15);\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.x = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1)).z;\n' + '  tmpvar_16.y = (((tmpvar_12.xyz * scale1) + bias1) - ((tmpvar_14.xyz * scale1) + bias1)).z;\n' + '  uv_z_1 = (tmpvar_6 - ((tmpvar_16 * texsize.zw) * 2.0));\n' + '   float tmpvar_17;\n' + '  tmpvar_17 = clamp ((1.0 - (\n' + '    sqrt(dot (tmpvar_7, tmpvar_7))\n' + '   * 3.2)), 0.0, 1.0);\n' + '   float tmpvar_18;\n' + '  tmpvar_18 = max (((\n' + '    (texture2D (sampler_fc_main, tmpvar_3).x - 0.5)\n' + '   * 3.0) * tmpvar_17), texture2D (sampler_fc_main, uv_z_1).z);\n' + '  ret_2.z = tmpvar_18;\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_fc_main, uv_z_1);\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = clamp (uv_z_1, 0.0, 1.0);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_blur1, tmpvar_20);\n' + '  ret_2.z = (ret_2.z + ((tmpvar_19.z - \n' + '    ((tmpvar_21.xyz * scale1) + bias1)\n' + '  .z) * 0.02));\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22 = mix (uv, uv_orig, vec2(1.0004, 1.0004));\n' + '   float tmpvar_23;\n' + '  tmpvar_23 = max (texture2D (sampler_fc_main, tmpvar_22).y, texture2D (sampler_fc_main, uv_orig).z);\n' + '  ret_2.y = (tmpvar_23 - 0.008);\n' + '  ret_2.z = (ret_2.z * (1.0 + (ret_2.y * 0.024)));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24.w = 1.0;\n' + '  tmpvar_24.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_24;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec2 xlat_mutablers;\n' + 'shader_body {\n' + '   float dy_1;\n' + '   float dx_2;\n' + '   vec2 uv1_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = ((uv - 0.5) * aspect.xy);\n' + '  xlat_mutablers.x = ((ang / 3.14) + _qg.w);\n' + '  xlat_mutablers.y = ((0.1 / (0.05 + \n' + '    sqrt(dot (tmpvar_4, tmpvar_4))\n' + '  )) + (time * 0.5));\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = fract(xlat_mutablers);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, tmpvar_5);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_blur1, tmpvar_5);\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8.y = 0.0;\n' + '  tmpvar_8.x = texsize.z;\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9.x = 0.0;\n' + '  tmpvar_9.y = texsize.w;\n' + '   vec2 P_10;\n' + '  P_10 = (tmpvar_5 - tmpvar_8);\n' + '   vec2 P_11;\n' + '  P_11 = (tmpvar_5 + tmpvar_8);\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = (texture2D (sampler_main, P_10).xyz - texture2D (sampler_main, P_11).xyz).x;\n' + '  dx_2 = tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (tmpvar_5 - tmpvar_9);\n' + '   vec2 P_14;\n' + '  P_14 = (tmpvar_5 + tmpvar_9);\n' + '   float tmpvar_15;\n' + '  tmpvar_15 = (texture2D (sampler_main, P_13).xyz - texture2D (sampler_main, P_14).xyz).x;\n' + '  dy_1 = tmpvar_15;\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.x = dx_2;\n' + '  tmpvar_16.y = dy_1;\n' + '  uv1_3 = ((0.3 * cos(\n' + '    (fract(xlat_mutablers) * 16.0)\n' + '  )) - (4.0 * tmpvar_16));\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17.w = 1.0;\n' + '  tmpvar_17.xyz = ((1.0 + bass_att) * ((3.2 * vec3(\n' + '    clamp ((0.04 / sqrt(dot (uv1_3, uv1_3))), 0.0, 1.0)\n' + '  )) * (0.6 - \n' + '    (tmpvar_6.xyz + ((tmpvar_7.xyz * scale1) + bias1))\n' + '  )));\n' + '  vec4 ret4 = tmpvar_17;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('q1=sin(time);\n' + 'q2=sin(.3*time);\n' + 'q3=sin(.2*time);\n' + 'q4=sin(.1*time);\n' + 'q5=sin(20*time);\n' + 'q6=sin(25*time);\n' + 'ib_g=.9+.1*q4;\n' + 'ib_r=.7+.15*q2;\n' + 'ib_b=.8+.2*q3;\n' + 'ob_g=.6+.1*q4;\n' + 'ob_r=.4+.15*q2;\n' + 'ob_b=.5+.2*q3;\n' + 't1=.008+t1;\n' + 't1=above(15,t1)*t1;\n' + 't2=.004+t2;\n' + 't2=above(20,t2)*t2;\n' + 't3=.006+t3;\n' + 't3=above(15,t3)*t3;\n' + 'q7=t1;\n' + 'q8=t2;\n' + 'q9=t3;\n' + 'monitor=q7;\n' + 'bb = bb*0.99 + bass*0.02;\n' + 'mm = mm*0.99 + mid*0.02;\n' + 'tt = tt*0.99 + treb*0.02;\n' + 'mx = max(max(bb,mm),tt);\n' + 'mn = min(min(bb,mm),tt);\n' + 't1 = (bb-mn)/(mx-mn);\n' + 't2 = (mm-mn)/(mx-mn);\n' + 't3 = (tt-mn)/(mx-mn);\n' + 'v = 0.3/fps;\n' + 'bm = bm + (t1-t2)*v;\n' + 'mt = mt + (t2-t3)*v;\n' + 'q21 = 0;\n' + 'q22 = 0.5;\n' + 'q23 = 0;\n' + 'q24 = -0.5;\n' + 'q25 = 0.5/asin(1);\n' + 'q26 = bm;\n' + 'q27 = mt;'),
	'pixel_eqs_str' : ('dx= 0.006*sin(y) + 0.003*tan(10+20*y);\n' + 'dy= 0.005*sin(x) +  0.02*tan(30*x);'),
};

return pmap;
});
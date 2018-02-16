define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.7,
		ib_g : 1.0,
		mv_x : 64.0,
		warpscale : 100.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.311,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.5,
		b2x : 1.0,
		warp : 0.01359,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.19913,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 1.0,
		mv_b : 0.0,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.03,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 1.0,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.tt = 0;
m.vv = 0;
m.xx = 0;
m.yy = 0;
m.q2 = 0;
m.q3 = 0;
m.vx = 0;
m.q4 = 0;
m.vy = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.dbmt = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.dm = 0;
m.dt = 0;
m.w = 0;
m.cz = 0;
m.z = 0;
m.db = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.db = ((0.6*m.db)+(0.25*m.bass_att));
m.dm = ((0.6*m.dm)+(0.25*m.mid_att));
m.dt = ((0.6*m.dt)+(0.25*m.treb_att));
m.dbmt = ((0.5*m.dbmt)+(0.33*((m.db+m.dm)+m.dt)));
m.vv = (m.vv+(0.1*m.dbmt));
m.bb = (m.bb+(0.1*m.db));
m.mm = (m.mm+(0.1*m.dm));
m.tt = (m.tt+(0.1*m.tt));
m.q1 = (0.5*m.vv);
m.q2 = Math.sin(m.q1);
m.q3 = Math.cos(m.q1);
m.q4 = ((m.tt-m.bb)+(0.15*m.vv));
m.q5 = ((m.bb-m.tt)+(0.15*m.vv));
m.q6 = (0.5+(0.5*Math.sin((0.15*m.q1))));
m.q7 = (0.5+(0.5*Math.cos((0.21*m.q1))));
m.q8 = ((0.5+(0.3*Math.sin((0.05*m.q1))))+(0.2*Math.cos((0.3*m.q1))));
m.q9 = (0.3+(0.7*Math.sin((0.27*m.q1))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.vx = (0.25+(Math.cos((m.q4*0.2))*1));
m.vy = (0.25+(Math.sin((m.q5*0.2))*1));
m.z = 0;
m.x = (m.x-m.vx);
m.y = (m.y-m.vy);
m.d = (m.q1*0.1);
m.xx = ((Math.sin(m.d)*m.x)+(Math.cos(m.d)*m.y));
m.yy = ((Math.cos(m.d)*m.x)-(Math.sin(m.d)*m.y));
m.x = m.xx;
m.y = m.yy;
m.cx = (0.2+(0.4*Math.sin((0.2*m.q3))));
m.cy = (0.5+(0.1*Math.tan(m.q2)));
m.cz = (0.5+(0.2*Math.sin((0.1*m.q1))));
m.zoom = 0.32;
m.w = (div(1,m.zoom)*(1+sqrt(((sqr((m.z-m.cz))+sqr((m.x-m.cx)))+sqr((m.y-m.cy))))));
m.dx = (-m.x*m.w);
m.dy = (-m.y*m.w);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.16188,
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
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 25.12601,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
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
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.1912,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
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
			r2 : 0.6,
			a : 0.92,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.3,
			tex_zoom : 0.8277,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.3931,
			x : 0.42,
			y : 0.3,
			ang : 0.94248,
			sides : 100.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (-0.5*m.q1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = -0.5*q1;'),

		},
		{
		'baseVals' : {
			r2 : 0.6,
			a : 0.92,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.3,
			tex_zoom : 0.8277,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.3,
			border_g : 1.0,
			rad : 0.10783,
			x : 0.42,
			y : 0.3,
			ang : 0.94248,
			sides : 100.0,
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
	'warp' : ('shader_body {\n' + '   vec2 my_uv2_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (1.0 - abs((\n' + '    (fract((uv * 0.5)) * 2.0)\n' + '   - 1.0)));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_fc_main, tmpvar_3);\n' + '  ret_2.x = (tmpvar_4.x * 0.5);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = ((uv_orig - 0.5) * vec2(1.7, 1.7));\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = ((tmpvar_5.x * tmpvar_5.x) - (tmpvar_5.y * tmpvar_5.y));\n' + '  tmpvar_6.y = ((2.0 * tmpvar_5.x) * tmpvar_5.y);\n' + '  my_uv2_1 = (tmpvar_6 + vec2(0.3875, 0.73));\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_fc_main, my_uv2_1);\n' + '  ret_2.y = tmpvar_7.y;\n' + '  ret_2 = ((ret_2 - 0.02) * 0.98);\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv2_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.x = _qb.y;\n' + '  tmpvar_3.y = _qb.z;\n' + '  tmpvar_3.z = _qb.w;\n' + '  tmpvar_3.w = _qc.x;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur3, uv);\n' + '  ret_2 = ((tmpvar_4.xyz * scale3) + bias3).xxx;\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_blur2, uv);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur1, uv);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_main, uv).xxx;\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = (uv - 0.5);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9.x = ((tmpvar_8.x * _qa.z) - (tmpvar_8.y * _qa.y));\n' + '  tmpvar_9.y = ((tmpvar_8.x * _qa.y) + (tmpvar_8.y * _qa.z));\n' + '  uv2_1 = (tmpvar_9 + 0.5);\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (uv2_1 + (vec2(1.0, 0.0) * tmpvar_10));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (uv2_1 - (vec2(1.0, 0.0) * tmpvar_10));\n' + '  tmpvar_13 = texture2D (sampler_blur1, P_14);\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (uv2_1 + (vec2(0.0, 1.0) * tmpvar_10));\n' + '  tmpvar_15 = texture2D (sampler_blur1, P_16);\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv2_1 - (vec2(0.0, 1.0) * tmpvar_10));\n' + '  tmpvar_17 = texture2D (sampler_blur1, P_18);\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = (((tmpvar_11.xyz * scale1) + bias1) - ((tmpvar_13.xyz * scale1) + bias1)).y;\n' + '  tmpvar_19.y = (((tmpvar_15.xyz * scale1) + bias1) - ((tmpvar_17.xyz * scale1) + bias1)).y;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = (uv2_1 + (tmpvar_19 * 0.4));\n' + '   vec3 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_main, tmpvar_20).yyy;\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22.w = 0.0;\n' + '  tmpvar_22.xyz = mix (mix (mix (\n' + '    mix (ret_2, _qb.zwy, vec3((((tmpvar_5.xyz * scale2) + bias2).x * 2.0)))\n' + '  , \n' + '    max ((_qb.zyw * 2.0), vec3(1.0, 1.0, 1.0))\n' + '  , vec3(\n' + '    (((tmpvar_6.xyz * scale1) + bias1).x * 0.5)\n' + '  )), (-0.1 * tmpvar_3.zwy), tmpvar_7), vec3(0.8, 0.8, 0.8), tmpvar_21);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_blur2, uv2_1);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24.w = 0.0;\n' + '  tmpvar_24.xyz = mix (tmpvar_22, tmpvar_3, vec4(((\n' + '    (tmpvar_23.xyz * scale2)\n' + '   + bias2).y * 2.0))).xyz;\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_blur1, tmpvar_20);\n' + '   vec3 tmpvar_26;\n' + '  tmpvar_26 = texture2D (sampler_main, uv2_1).yyy;\n' + '   vec3 tmpvar_27;\n' + '  tmpvar_27 = mix (mix (tmpvar_24, max (\n' + '    (tmpvar_3 * 2.0)\n' + '  , vec4(1.2, 1.2, 1.2, 1.2)), vec4((\n' + '    ((tmpvar_25.xyz * scale1) + bias1)\n' + '  .y * 0.5))).xyz, (-0.01 * tmpvar_3.xyw), tmpvar_26);\n' + '  ret_2 = tmpvar_27;\n' + '   vec4 tmpvar_28;\n' + '  tmpvar_28.w = 1.0;\n' + '  tmpvar_28.xyz = tmpvar_27;\n' + '  vec4 ret4 = tmpvar_28;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('db = 0.6*db+.25*bass_att;\n' + 'dm = 0.6*dm+.25*mid_att;\n' + 'dt = 0.6*dt+.25*treb_att;\n' + 'dbmt = 0.5*dbmt+.33*(db+dm+dt);\n' + 'vv = vv + .1 * dbmt;\n' + 'bb = bb +.1*db;\n' + 'mm = mm +.1*dm;\n' + 'tt = tt +.1*tt;\n' + 'q1 = 0.5*vv;\n' + 'q2 = sin(q1);\n' + 'q3 = cos(q1);\n' + 'q4 = tt-bb+.15*vv;\n' + 'q5 = bb-tt+.15*vv;\n' + 'q6 = .5+.5*sin(0.15*q1);\n' + 'q7 = .5+.5*cos(0.21*q1);\n' + 'q8 = .5+.3*sin(0.05*q1)+.2*cos(0.3*q1);\n' + 'q9 = .3+.7*sin(0.27*q1);'),
	'pixel_eqs_str' : ('vx = 0.25+cos(q4*0.2)*1;\n' + 'vy = 0.25+sin(q5*0.2)*1;\n' + 'z = 0;\n' + 'x = x - vx;\n' + 'y = y - vy;\n' + 'd = q1*0.1;\n' + 'xx = sin(d)*x + cos(d)*y;\n' + 'yy = cos(d)*x - sin(d)*y;\n' + 'x = xx;\n' + 'y = yy;\n' + 'cx = .2+.4*sin(0.2*q3);\n' + 'cy = .5+.1*tan(q2);\n' + 'cz = 0.5+.2*sin(0.1*q1);\n' + 'zoom = 0.32;\n' + 'w = 1/zoom*(1+sqrt(sqr(z-cz) + sqr(x-cx)+sqr(y-cy)));\n' + 'dx = -x*w;\n' + 'dy = -y*w ;'),
};

return pmap;
});
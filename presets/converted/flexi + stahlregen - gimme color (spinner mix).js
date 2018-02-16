define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 1.0,
		mv_x : 64.0,
		warpscale : 100.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.01,
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
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 0.19913,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
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
		wave_mystery : 0.34,
		decay : 0.5,
		wave_a : 0.002,
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
m.q1 = 0;
m.vv = 0;
m.xx = 0;
m.yy = 0;
m.q2 = 0;
m.q3 = 0;
m.vx = 0;
m.vy = 0;
m.d = 0;
m.vz = 0;
m.dbmt = 0;
m.dm = 0;
m.mx = 0;
m.my = 0;
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
m.q1 = (0.5*m.vv);
m.q2 = Math.sin(m.q1);
m.q3 = Math.cos(m.q1);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.vx = (0.5+(Math.cos((m.time*0.2))*1));
m.vy = (0.5+(Math.sin((m.time*0.2))*1));
m.vz = 0;
m.z = (0-m.vz);
m.x = (m.x-m.vx);
m.y = (m.y-m.vy);
m.d = ((m.time*0.1)-(((m.treb*m.treb)*m.treb)*0.00));
m.xx = ((Math.sin(m.d)*m.x)+(Math.cos(m.d)*m.y));
m.yy = ((Math.cos(m.d)*m.x)-(Math.sin(m.d)*m.y));
m.x = m.xx;
m.y = m.yy;
m.x = (m.x+m.mx);
m.y = (m.y+m.my);
m.z = (m.z+m.vz);
m.cx = 0;
m.cy = 0;
m.cz = (0.5+(m.treb*0.0));
m.vx = 0;
m.vy = 0;
m.vz = 0;
m.zoom = 0.33;
m.w = (div(1,m.zoom)*(1+sqrt(((sqr((m.z-m.cz))+sqr((m.x-m.cx)))+sqr((m.y-m.cy))))));
m.dx = (-(m.x-m.mx)*m.w);
m.dy = (-(m.y-m.my)*m.w);
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
			rad : 1.77367,
			x : 0.5,
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
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.8277,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.16054,
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
	'warp' : ('shader_body {\n' + '   vec2 my_uv2_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (1.0 - abs((\n' + '    (fract((uv * 0.5)) * 2.0)\n' + '   - 1.0)));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_fc_main, tmpvar_3);\n' + '  ret_2.x = (tmpvar_4.x * 0.5);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = ((uv_orig - 0.5) * vec2(1.8, 1.8));\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = ((tmpvar_5.x * tmpvar_5.x) - (tmpvar_5.y * tmpvar_5.y));\n' + '  tmpvar_6.y = ((2.0 * tmpvar_5.x) * tmpvar_5.y);\n' + '  my_uv2_1 = (tmpvar_6 + vec2(0.44, 0.734));\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_fc_main, my_uv2_1);\n' + '  ret_2.y = tmpvar_7.y;\n' + '  ret_2 = ((ret_2 - 0.02) * 0.98);\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv2_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur3, uv);\n' + '  ret_2 = ((tmpvar_3.xyz * scale3) + bias3).xxx;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur2, uv);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_blur1, uv);\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv).xxx;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (uv - 0.5);\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8.x = ((tmpvar_7.x * _qa.z) - (tmpvar_7.y * _qa.y));\n' + '  tmpvar_8.y = ((tmpvar_7.x * _qa.y) + (tmpvar_7.y * _qa.z));\n' + '  uv2_1 = (tmpvar_8 + 0.5);\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_main, uv2_1).yyy;\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_blur2, uv2_1);\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_blur1, uv2_1);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_main, uv2_1).yyy;\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = mix (mix (mix (\n' + '    mix (mix (mix (mix (ret_2, vec3(0.6, 1.0, 1.0), vec3(\n' + '      (((tmpvar_4.xyz * scale2) + bias2).x * 2.0)\n' + '    )), vec3(0.0, 1.0, 1.0), vec3((\n' + '      ((tmpvar_5.xyz * scale1) + bias1)\n' + '    .x * 0.5))), vec3(-0.3, 0.0, 0.0), tmpvar_6), vec3(1.0, 1.0, 1.0), tmpvar_9)\n' + '  , vec3(0.6, 1.0, 1.0), vec3(\n' + '    (((tmpvar_10.xyz * scale2) + bias2).y * 2.0)\n' + '  )), vec3(1.0, 0.0, 1.0), vec3((\n' + '    ((tmpvar_11.xyz * scale1) + bias1)\n' + '  .y * 0.5))), vec3(-0.3, 0.0, 0.0), tmpvar_12);\n' + '  ret_2 = tmpvar_13;\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14.w = 1.0;\n' + '  tmpvar_14.xyz = tmpvar_13;\n' + '  vec4 ret4 = tmpvar_14;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('db = 0.6*db+.25*bass_att;\n' + 'dm = 0.6*dm+.25*mid_att;\n' + 'dt = 0.6*dt+.25*treb_att;\n' + 'dbmt = 0.5*dbmt+.33*(db+dm+dt);\n' + 'vv = vv + .1 * dbmt;\n' + 'q1 = 0.5*vv;\n' + 'q2 = sin(q1);\n' + 'q3 = cos(q1);'),
	'pixel_eqs_str' : ('vx = 0.5+cos(time*0.2)*1;\n' + 'vy = 0.5+sin(time*0.2)*1;\n' + 'vz = 0;\n' + 'z = 0 - vz;\n' + 'x = x - vx;\n' + 'y = y - vy;\n' + 'd = time*0.1-treb*treb*treb*0.00;\n' + 'xx = sin(d)*x + cos(d)*y;\n' + 'yy = cos(d)*x - sin(d)*y;\n' + 'x = xx;\n' + 'y = yy;\n' + 'x = x + mx;\n' + 'y = y + my;\n' + 'z = z + vz;\n' + 'cx = 0;\n' + 'cy = 0;\n' + 'cz = 0.5+treb*0.0;\n' + 'vx = 0;\n' + 'vy = 0;\n' + 'vz = 0;\n' + 'zoom = 0.33;\n' + 'w = 1/zoom*(1+sqrt(sqr(z-cz) + sqr(x-cx)+sqr(y-cy)));\n' + 'dx = -(x-mx)*w;\n' + 'dy = -(y-my)*w ;'),
};

return pmap;
});
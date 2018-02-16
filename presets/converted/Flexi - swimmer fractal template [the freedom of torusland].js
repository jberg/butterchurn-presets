define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.54,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 0.107,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.167,
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
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.33077,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 1.127,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.95,
		wave_y : 1.0,
		zoom : 0.9901,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 0.005,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 1.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.q1 = 0;
m.tt = 0;
m.ww = 0;
m.a = 0;
m.q2 = 0;
m.q3 = 0;
m.vx = 0;
m.q4 = 0;
m.vy = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.q20 = 0;
m.q10 = 0;
m.ww1 = 0;
m.q11 = 0;
m.q12 = 0;
m.q13 = 0;
m.q14 = 0;
m.q15 = 0;
m.v = 0;
m.q16 = 0;
m.w = 0;
m.q17 = 0;
m.x = 0;
m.q18 = 0;
m.y1 = 0;
m.y = 0;
m.q19 = 0;
m.y2 = 0;
m.w1 = 0;
m.v1 = 0;
m.v2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.w = m.w1;
m.ww = ((-(m.y1-m.y2)*(1+((div(70,m.fps)-1)*2)))-(m.y1*0.8));
m.w = (m.w-(m.ww*5));
m.q1 = Math.cos(m.ww);
m.q2 = Math.sin(m.ww);
m.q3 = 1.12;
m.q4 = (Math.sin(m.w)*0.042);
m.q5 = (Math.cos(m.w)*0.042);
m.a = (Math.asin(1)*0.5);
m.d = 0.08;
m.q6 = Math.cos((m.a+(0*m.ww)));
m.q7 = Math.sin((m.a+(0*m.ww)));
m.q8 = 3.3;
m.q9 = ((Math.cos((-m.w+Math.asin(1)))*m.d)*m.aspectx);
m.q10 = ((Math.sin((-m.w+Math.asin(1)))*m.d)*m.aspecty);
m.q11 = Math.cos((-m.a+(0*m.ww)));
m.q12 = Math.sin((-m.a+(0*m.ww)));
m.q13 = m.q8;
m.q14 = ((Math.cos((-m.w+Math.asin(1)))*m.d)*m.aspectx);
m.q15 = ((Math.sin((-m.w+Math.asin(1)))*m.d)*m.aspecty);
m.bb = ((m.bb*0.97)+(m.bass*0.04));
m.tt = ((m.tt*0.97)+(m.treb*0.04));
m.w1 = (m.w1+((m.ww1*m.a)*0.15));
m.ww1 = ((m.ww1*0.94)+(m.y1*0.1));
m.q16 = ((m.bb-m.tt)*0.2);
m.y1 = (m.y1+(m.v1*0.1));
m.y2 = (m.y2+(m.v2*0.2));
m.v1 = ((m.v1*0.95)-((m.y1-m.q16)*0.1));
m.v2 = ((m.v2*0.99)-((m.y2-m.y1)*0.2));
m.a = div((Math.abs((m.y2-m.y1))*2.2),m.fps);
m.q17 = (Math.sin(m.w)*m.a);
m.q18 = (-Math.cos(m.w)*m.a);
m.v = 0.25;
m.x = (m.x+(m.vx*m.v));
m.y = (m.y+(m.vy*m.v));
m.vx = ((m.vx*0.98)+(Math.sin(m.w)*m.a));
m.vy = ((m.vy*0.98)-(Math.cos(m.w)*m.a));
m.q19 = (m.x*0.5);
m.q20 = (m.y*0.5);
m.monitor = m.cx;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.0,
			scaling : 2.00309,
			samples : 41.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {

m.t8 = 1;
m.t1 = m.q5;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : ('t8 = 1;\n' + 't1 = q5;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.0,
			scaling : 2.00309,
			samples : 61.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {

m.t8 = 1;
m.t1 = m.q5;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : ('t8 = 1;\n' + 't1 = q5;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.0,
			scaling : 2.00309,
			samples : 31.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {

m.t8 = 1;
m.t1 = m.q5;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : ('t8 = 1;\n' + 't1 = q5;'),
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
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.5033,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.07568,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 35.0,
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
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.5033,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.16217,
			x : 0.07,
			y : 0.5,
			ang : 0.0,
			sides : 44.0,
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
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.5033,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.03624,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 48.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q17 = 0;
m.q18 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+m.q17);
m.y = (m.y+m.q18);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = x + q17;\n' + 'y = y + q18;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.5033,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.03624,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 48.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q20 = 0;
m.q19 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+m.q19);
m.y = (m.y+m.q20);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = x + q19;\n' + 'y = y + q20;'),

		}
],
	'warp' : ('highp vec2 xlat_mutablefactorA;shader_body {\n' + '   vec3 ret_1;\n' + '  xlat_mutablefactorA = ((uv_orig - 0.5) * aspect.xy);\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2.x = ((xlat_mutablefactorA.x * _qa.x) - (xlat_mutablefactorA.y * _qa.y));\n' + '  tmpvar_2.y = ((xlat_mutablefactorA.x * _qa.y) + (xlat_mutablefactorA.y * _qa.x));\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3.x = _qa.w;\n' + '  tmpvar_3.y = _qb.x;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = ((xlat_mutablefactorA.x * _qb.y) - (xlat_mutablefactorA.y * _qb.z));\n' + '  tmpvar_4.y = ((xlat_mutablefactorA.x * _qb.z) + (xlat_mutablefactorA.y * _qb.y));\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = ((xlat_mutablefactorA.x * _qc.z) - (xlat_mutablefactorA.y * _qc.w));\n' + '  tmpvar_5.y = ((xlat_mutablefactorA.x * _qc.w) + (xlat_mutablefactorA.y * _qc.z));\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = clamp (((0.5 + \n' + '    ((tmpvar_2 * aspect.zw) * _qa.z)\n' + '  ) + (tmpvar_3 * aspect.zw)), 0.0, 1.0);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = clamp (((0.5 + \n' + '    ((tmpvar_4 * aspect.zw) * _qb.w)\n' + '  ) + _qc.xy), 0.0, 1.0);\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = clamp (((0.5 + \n' + '    ((tmpvar_5 * aspect.zw) * _qd.x)\n' + '  ) + _qd.yz), 0.0, 1.0);\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = max (texture2D (sampler_main, tmpvar_6).x, max (texture2D (sampler_main, tmpvar_7).x, texture2D (sampler_main, tmpvar_8).x));\n' + '  ret_1.x = (tmpvar_9 - 0.004);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = fract(((0.5 + \n' + '    (uv - 0.5)\n' + '  ) + (_qe.zw * vec2(-1.0, 1.0))));\n' + '   vec3 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, tmpvar_2).xxx;\n' + '  ret_1 = tmpvar_3;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('w = w1;\n' + 'ww = -(y1-y2)*(1+(70/fps-1)*2) - y1*0.8;\n' + 'w = w - ww*5;\n' + 'q1 = cos(ww);\n' + 'q2 = sin(ww);\n' + 'q3 = 1.12;\n' + 'q4 = sin(w)*0.042;\n' + 'q5 = cos(w)*0.042;\n' + 'a = asin(1)*0.5;\n' + 'd = 0.08;\n' + 'q6 = cos(a+0*ww);\n' + 'q7 = sin(a+0*ww);\n' + 'q8 = 3.3;\n' + 'q9 = cos(-w + asin(1))*d*aspectx;\n' + 'q10 = sin(-w+asin(1))*d*aspecty;\n' + 'q11 = cos(-a+0*ww);\n' + 'q12 = sin(-a+0*ww);\n' + 'q13 = q8;\n' + 'q14 = cos(-w + asin(1))*d*aspectx;\n' + 'q15 = sin(-w+asin(1))*d*aspecty;\n' + 'bb = bb*0.97 + bass*0.04;\n' + 'tt = tt*0.97 + treb*0.04;\n' + 'w1 = w1 + ww1*a*0.15;\n' + 'ww1 = ww1*0.94 + y1*0.1;\n' + 'q16 = (bb-tt)*0.2;\n' + 'y1 = y1 + v1*0.1;\n' + 'y2 = y2 + v2*0.2;\n' + 'v1 = v1*0.95 - (y1-q16)*0.1;\n' + 'v2 = v2*0.99 - (y2-y1)*0.2;\n' + 'a = abs(y2-y1)*2.2/fps;\n' + 'q17 = sin(w)*a;\n' + 'q18 = -cos(w)*a;\n' + 'v = 0.25;\n' + 'x = x + vx*v;\n' + 'y = y + vy*v;\n' + 'vx = vx*0.98 +sin(w)*a;\n' + 'vy = vy*0.98 -cos(w)*a;\n' + 'q19 = x*0.5;\n' + 'q20 = y*0.5;\n' + 'monitor = cx;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.4,
		ib_g : 0.25,
		mv_x : 44.16,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 33.6,
		wave_scale : 2.713,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.00909,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.44,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 2.0,
		ob_size : 0.005,
		b1ed : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99951,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.2,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.009,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.2,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.a = 0;
m.q2 = 0;
m.b = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.startx = 0;
m.starty = 0;
m.x1 = 0;
m.y1 = 0.001;
m.z1 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = 1;
m.warp = 0;
m.wave_a = 0;
m.startx = 0.7;
m.starty = 0.7;
m.a = 1.0;
m.b = 0.14;
m.d = 0.2;
m.q1 = m.aspectx;
m.q2 = m.aspecty;
m.q3 = m.startx;
m.q4 = m.starty;
m.q5 = m.a;
m.q6 = m.b;
m.q7 = m.d;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.x = (0.5+((m.x-0.5)*m.q1));
m.y = (0.5-((m.y-0.5)*m.q2));
m.dx = ((m.x*(1-m.x))-div(((m.q5*m.x)*m.y),(m.x+m.q6)));
m.dy = ((-m.q7*m.y)*(1-div(m.y,m.x)));
m.dx = div((-0.01*m.dx),m.q1);
m.dy = div((-0.01*m.dy),m.q2);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 1.0,
			scaling : 100.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 4.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.xx = 0;
m.yy = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.dx = 0;
m.dy = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.ab = 1;
			m.rkeys = ['yy','xx'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.xx = ifcond(equal(m.sample, 0), m.q3, m.xx);
m.yy = ifcond(equal(m.sample, 0), m.q4, m.yy);
m.dx = ((m.xx*(1-m.xx))-div(((m.q5*m.xx)*m.yy),(m.xx+m.q6)));
m.dy = ((m.q7*m.yy)*(1-div(m.yy,m.xx)));
m.x = m.xx;
m.y = m.yy;
m.xx = (m.xx+(m.dx*0.2));
m.yy = (m.yy+(m.dy*0.2));
m.x = ((0.5+div((m.x-0.5),m.q1))+((m.dy*m.value1)*0.01));
m.y = ((0.5+div((m.y-0.5),m.q2))-((m.dx*m.value1)*0.01));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'ab = 1;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('xx = if(equal(sample,0),q3,xx);\n' + 'yy = if(equal(sample,0),q4,yy);\n' + 'dx = xx*(1-xx)-q5*xx*yy/(xx+q6);\n' + 'dy = q7*yy*(1-yy/xx);\n' + 'x = xx;\n' + 'y = yy;\n' + 'xx = xx+dx*0.2;\n' + 'yy = yy+dy*0.2;\n' + 'x = 0.5+(x-0.5)/q1 + dy*value1*0.01;\n' + 'y = 0.5+(y-0.5)/q2 - dx*value1*0.01;'),

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
m.my_x = 0;
m.my_y = 0;
m.my_z = 0;
m.zz1 = 0;
m.yy1 = 0;
m.xx1 = 0;
m.q11 = 0;
m.q12 = 0;
m.q13 = 0;
m.q14 = 0;
m.q15 = 0;
m.q16 = 0;
m.q17 = 0;
m.dz1 = 0;
m.dy1 = 0;
m.dx1 = 0;

			m.rkeys = ['zz1','yy1','xx1'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.xx1 = ifcond(equal(m.sample, 0), m.q11, m.xx1);
m.yy1 = ifcond(equal(m.sample, 0), m.q12, m.yy1);
m.zz1 = ifcond(equal(m.sample, 0), m.q13, m.zz1);
m.dx1 = (m.q14*(m.yy1-m.xx1));
m.dy1 = ((m.xx1*(m.q15-m.zz1))-m.yy1);
m.dz1 = ((m.xx1*m.yy1)-(m.q16*m.zz1));
m.xx1 = (m.xx1+(m.q17*m.dx1));
m.yy1 = (m.yy1+(m.q17*m.dy1));
m.zz1 = (m.zz1+(m.q17*m.dz1));
m.my_x = (m.xx1*0.02);
m.my_y = (m.yy1*0.02);
m.my_z = (m.zz1*0.02);
m.x = (0.5+m.my_x);
m.y = (0.5+m.my_y);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('xx1 = if(equal(sample,0),q11,xx1);\n' + 'yy1 = if(equal(sample,0),q12,yy1);\n' + 'zz1 = if(equal(sample,0),q13,zz1);\n' + 'dx1 = q14*(yy1-xx1);\n' + 'dy1 = xx1*(q15-zz1)-yy1;\n' + 'dz1 = xx1*yy1-q16*zz1;\n' + 'xx1 = xx1 + q17*dx1;\n' + 'yy1 = yy1 + q17*dy1;\n' + 'zz1 = zz1 + q17*dz1;\n' + 'my_x = xx1*0.02;\n' + 'my_y = yy1*0.02;\n' + 'my_z = zz1*0.02;\n' + 'x = 0.5 + my_x;\n' + 'y = 0.5 + my_y;'),

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
			tex_ang : 3.14159,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.99979,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.15,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.17457,
			x : 0.67,
			y : 0.53,
			ang : 0.25133,
			sides : 3.0,
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
			a : 0.41,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 3.14159,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.99979,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.02798,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 23.0,
			border_r : 1.0,
			num_inst : 817.0,
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
			g : 0.04,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.81623,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 36.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (1-m.q1);
m.y = m.q2;
m.x = (0.5+((m.x-0.5)*0.25));
m.y = (0.5+((m.y-0.5)*0.25));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 1-q1;\n' + 'y = q2;\n' + 'x = 0.5 + (x - 0.5)*0.25;\n' + 'y = 0.5 + (y - 0.5)*0.25;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (texsize.zw * 12.0);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_4 = texture2D (sampler_blur2, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_6 = texture2D (sampler_blur2, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_8 = texture2D (sampler_blur2, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_10 = texture2D (sampler_blur2, P_11);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12.x = (0.5 * ((2.0 * \n' + '    ((tmpvar_4.xyz * scale2) + bias2)\n' + '  ) - (2.0 * \n' + '    ((tmpvar_6.xyz * scale2) + bias2)\n' + '  ))).z;\n' + '  tmpvar_12.y = (0.5 * ((2.0 * \n' + '    ((tmpvar_8.xyz * scale2) + bias2)\n' + '  ) - (2.0 * \n' + '    ((tmpvar_10.xyz * scale2) + bias2)\n' + '  ))).z;\n' + '  uv_1 = (uv - (tmpvar_12 * texsize.zw));\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_main, uv_1);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_main, uv_1);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur3, uv_1);\n' + '  ret_2.z = ((tmpvar_13.z + (\n' + '    (tmpvar_14.z - ((tmpvar_15.xyz * scale3) + bias3))\n' + '  .z * 0.12)) + 0.008);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0;\n' + 'y1= .001;\n' + 'z1 = 0;'),
	'frame_eqs_str' : ('zoom = 1;\n' + 'warp = 0;\n' + 'wave_a = 0;\n' + 'startx = 0.7;\n' + 'starty = 0.7;\n' + 'a = 1.0;\n' + 'b = 0.14;\n' + 'd = 0.2;\n' + 'q1 = aspectx;\n' + 'q2 = aspecty;\n' + 'q3 = startx;\n' + 'q4 = starty;\n' + 'q5 = a;\n' + 'q6 = b;\n' + 'q7 = d;'),
	'pixel_eqs_str' : ('x = 0.5 + (x-0.5)*q1;\n' + 'y = 0.5 - (y-0.5)*q2;\n' + 'dx = x*(1-x)-q5*x*y/(x+q6);\n' + 'dy = -q7*y*(1-y/x);\n' + 'dx = -0.01*dx/q1;\n' + 'dy = -0.01*dy/q2;'),
};

return pmap;
});
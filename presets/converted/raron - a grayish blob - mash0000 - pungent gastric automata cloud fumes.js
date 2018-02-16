define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.286,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.007,
		ob_size : 0.5,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99951,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q1 = 0.4;
m.q2 = 0.4;
		return m;
	},
	'frame_eqs' : function(m) {
m.q3 = (32+(32*Math.cos((m.time*4))));
m.q4 = (2+(24*Math.sin((m.time*1.4))));
m.q5 = (32-(32*Math.sin((m.time*2.1))));
m.q6 = (24+(24*Math.cos((m.time*1.3))));
m.zoom = (0.96+(m.bass*0.05));
m.rot = (0.2-(0.2*m.bass));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+(m.rad*0.1));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.3442,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.val = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.width = 0;
m.height = 0;
m.gruff = 0;
m.dist1 = 0;
m.dist2 = 0;
m.val1 = 0;
m.val2 = 0;
m.yp = 0;
m.xp = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t2 = m.q2;
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
		return m;
	},
		'point_eqs' : function(m) {
m.width = 32;
m.height = 16;
m.gruff = (m.sample*512);
m.xp = mod(m.gruff,m.width);
m.yp = Math.floor(div(m.gruff,m.width));
m.yp = ifcond(equal(m.sample, 1), (m.yp-1), m.yp);
m.dist1 = (0.3*sqrt((sqr((m.xp-m.t3))+sqr((m.yp-m.t4)))));
m.dist2 = (0.3*sqrt((sqr((m.xp-m.t5))+sqr((m.yp-m.t6)))));
m.val1 = (0.5+(m.bass*Math.sin(((m.dist1-m.time)-m.bass))));
m.val2 = (0.5+(m.bass*Math.sin(((m.dist2-m.time)-m.bass))));
m.val = ((m.val1+m.val2)*0.5);
m.r = m.val1;
m.g = m.val;
m.b = m.val2;
m.x = (m.t1+div(m.xp,256));
m.y = (m.t2+div(m.yp,256));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;'),
		'point_eqs_str' : ('width = 32;\n' + 'height = 16;\n' + 'gruff = sample * 512;\n' + 'xp = gruff%width;\n' + 'yp = int(gruff/width);\n' + 'yp = if(equal(sample,1),yp-1,yp);\n' + 'dist1 = 0.3 * sqrt(sqr(xp-t3)+sqr(yp-t4));\n' + 'dist2 = 0.3 * sqrt(sqr(xp-t5)+sqr(yp-t6));\n' + 'val1 = 0.5 + bass * sin(dist1-time - bass);\n' + 'val2 = 0.5 + bass * sin(dist2-time - bass);\n' + 'val = (val1 + val2) * 0.5;\n' + 'r = val1;\n' + 'g = val;\n' + 'b = val2;\n' + 'x = t1 + xp / 256;\n' + 'y = t2 + yp / 256;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.val = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.width = 0;
m.height = 0;
m.gruff = 0;
m.dist1 = 0;
m.dist2 = 0;
m.val1 = 0;
m.val2 = 0;
m.yp = 0;
m.xp = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t2 = (m.q2+div(1,16));
m.t3 = m.q3;
m.t4 = (m.q4-16);
m.t5 = m.q5;
m.t6 = (m.q6-16);
		return m;
	},
		'point_eqs' : function(m) {
m.width = 32;
m.height = 16;
m.gruff = (m.sample*512);
m.xp = mod(m.gruff,m.width);
m.yp = Math.floor(div(m.gruff,m.width));
m.yp = ifcond(equal(m.sample, 1), (m.yp-1), m.yp);
m.dist1 = (0.3*sqrt((sqr((m.xp-m.t3))+sqr((m.yp-m.t4)))));
m.dist2 = (0.3*sqrt((sqr((m.xp-m.t5))+sqr((m.yp-m.t6)))));
m.val1 = (0.5+(m.bass*Math.sin(((m.dist1-m.time)-m.bass))));
m.val2 = (0.5+(m.bass*Math.sin(((m.dist2-m.time)-m.bass))));
m.val = ((m.val1+m.val2)*0.5);
m.r = m.val1;
m.g = m.val;
m.b = m.val2;
m.x = (m.t1+div(m.xp,256));
m.y = (m.t2+div(m.yp,256));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2 + 1 / 16;\n' + 't3 = q3;\n' + 't4 = q4 - 16;\n' + 't5 = q5;\n' + 't6 = q6 - 16;'),
		'point_eqs_str' : ('width = 32;\n' + 'height = 16;\n' + 'gruff = sample * 512;\n' + 'xp = gruff%width;\n' + 'yp = int(gruff/width);\n' + 'yp = if(equal(sample,1),yp-1,yp);\n' + 'dist1 = 0.3 * sqrt(sqr(xp-t3)+sqr(yp-t4));\n' + 'dist2 = 0.3 * sqrt(sqr(xp-t5)+sqr(yp-t6));\n' + 'val1 = 0.5 + bass * sin(dist1-time - bass);\n' + 'val2 = 0.5 + bass * sin(dist2-time - bass);\n' + 'val = (val1 + val2) * 0.5;\n' + 'r = val1;\n' + 'g = val;\n' + 'b = val2;\n' + 'x = t1 + xp / 256;\n' + 'y = t2 + yp / 256;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.val = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.width = 0;
m.height = 0;
m.gruff = 0;
m.dist1 = 0;
m.dist2 = 0;
m.val1 = 0;
m.val2 = 0;
m.yp = 0;
m.xp = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.q1+div(2,16));
m.t2 = m.q2;
m.t3 = (m.q3-32);
m.t4 = m.q4;
m.t5 = (m.q5-32);
m.t6 = m.q6;
		return m;
	},
		'point_eqs' : function(m) {
m.width = 32;
m.height = 16;
m.gruff = (m.sample*512);
m.xp = mod(m.gruff,m.width);
m.yp = Math.floor(div(m.gruff,m.width));
m.yp = ifcond(equal(m.sample, 1), (m.yp-1), m.yp);
m.dist1 = (0.3*sqrt((sqr((m.xp-m.t3))+sqr((m.yp-m.t4)))));
m.dist2 = (0.3*sqrt((sqr((m.xp-m.t5))+sqr((m.yp-m.t6)))));
m.val1 = (0.5+(m.bass*Math.sin(((m.dist1-m.time)-m.bass))));
m.val2 = (0.5+(m.bass*Math.sin(((m.dist2-m.time)-m.bass))));
m.val = ((m.val1+m.val2)*0.5);
m.r = m.val1;
m.g = m.val;
m.b = m.val2;
m.x = (m.t1+div(m.xp,256));
m.y = (m.t2+div(m.yp,256));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q1 + 2 / 16;\n' + 't2 = q2;\n' + 't3 = q3 - 32;\n' + 't4 = q4;\n' + 't5 = q5 - 32;\n' + 't6 = q6;'),
		'point_eqs_str' : ('width = 32;\n' + 'height = 16;\n' + 'gruff = sample * 512;\n' + 'xp = gruff%width;\n' + 'yp = int(gruff/width);\n' + 'yp = if(equal(sample,1),yp-1,yp);\n' + 'dist1 = 0.3 * sqrt(sqr(xp-t3)+sqr(yp-t4));\n' + 'dist2 = 0.3 * sqrt(sqr(xp-t5)+sqr(yp-t6));\n' + 'val1 = 0.5 + bass * sin(dist1-time - bass);\n' + 'val2 = 0.5 + bass * sin(dist2-time - bass);\n' + 'val = (val1 + val2) * 0.5;\n' + 'r = val1;\n' + 'g = val;\n' + 'b = val2;\n' + 'x = t1 + xp / 256;\n' + 'y = t2 + yp / 256;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.val = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.width = 0;
m.height = 0;
m.gruff = 0;
m.dist1 = 0;
m.dist2 = 0;
m.val1 = 0;
m.val2 = 0;
m.yp = 0;
m.xp = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.q1+div(2,16));
m.t2 = (m.q2+div(1,16));
m.t3 = (m.q3-32);
m.t4 = (m.q4-16);
m.t5 = (m.q5-32);
m.t6 = (m.q6-16);
		return m;
	},
		'point_eqs' : function(m) {
m.width = 32;
m.height = 16;
m.gruff = (m.sample*512);
m.xp = mod(m.gruff,m.width);
m.yp = Math.floor(div(m.gruff,m.width));
m.yp = ifcond(equal(m.sample, 1), (m.yp-1), m.yp);
m.dist1 = (0.3*sqrt((sqr((m.xp-m.t3))+sqr((m.yp-m.t4)))));
m.dist2 = (0.3*sqrt((sqr((m.xp-m.t5))+sqr((m.yp-m.t6)))));
m.val1 = (0.5+(m.bass*Math.sin(((m.dist1-m.time)-m.bass))));
m.val2 = (0.5+(m.bass*Math.sin(((m.dist2-m.time)-m.bass))));
m.val = ((m.val1+m.val2)*0.5);
m.r = m.val1;
m.g = m.val;
m.b = m.val2;
m.x = (m.t1+div(m.xp,256));
m.y = (m.t2+div(m.yp,256));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q1 + 2 / 16;\n' + 't2 = q2 + 1 / 16;\n' + 't3 = q3 - 32;\n' + 't4 = q4 - 16;\n' + 't5 = q5 - 32;\n' + 't6 = q6 - 16;'),
		'point_eqs_str' : ('width = 32;\n' + 'height = 16;\n' + 'gruff = sample * 512;\n' + 'xp = gruff%width;\n' + 'yp = int(gruff/width);\n' + 'yp = if(equal(sample,1),yp-1,yp);\n' + 'dist1 = 0.3 * sqrt(sqr(xp-t3)+sqr(yp-t4));\n' + 'dist2 = 0.3 * sqrt(sqr(xp-t5)+sqr(yp-t6));\n' + 'val1 = 0.5 + bass * sin(dist1-time - bass);\n' + 'val2 = 0.5 + bass * sin(dist2-time - bass);\n' + 'val = (val1 + val2) * 0.5;\n' + 'r = val1;\n' + 'g = val;\n' + 'b = val2;\n' + 'x = t1 + xp / 256;\n' + 'y = t2 + yp / 256;'),

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
			tex_zoom : 2.00676,
			additive : 0.0,
			border_a : 0.8,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.63016,
			x : 0.18,
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
	'warp' : ('shader_body {\n' + '   vec3 blurry_color_1;\n' + '   vec2 uv2_2;\n' + '   vec3 ret_3;\n' + '   vec2 P_4;\n' + '  P_4 = (mix (uv, uv_orig, vec2(-1.0, -1.0)) + texsize.zw);\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, P_4).xyz;\n' + '  blurry_color_1 = tmpvar_5;\n' + '  uv2_2 = (uv + ((blurry_color_1.xy - 0.37) * (0.005 + \n' + '    (0.025 * clamp ((treb - 1.0), 0.0, 1.0))\n' + '  )));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv2_2);\n' + '  ret_3 = tmpvar_6.xyz;\n' + '  ret_3 = (ret_3 - 0.004);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : ('q1 = 0.4;\n' + 'q2 = 0.4;'),
	'frame_eqs_str' : ('q3 = 32 + 32 * cos(time * 4);\n' + 'q4 = 2 + 24 * sin(time* 1.4);\n' + 'q5 = 32 - 32 * sin(time * 2.1);\n' + 'q6 = 24 + 24 * cos(time * 1.3);\n' + 'zoom = 0.96 + bass * 0.05;\n' + 'rot = 0.2 - 0.2 * bass;'),
	'pixel_eqs_str' : ('zoom = zoom + rad * 0.1;'),
};

return pmap;
});
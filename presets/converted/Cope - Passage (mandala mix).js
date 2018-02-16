define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.49,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 2.669,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 0.319,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0002,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 1.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.9995,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9998,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.05,
		invert : 0.0,
		rot : -1.0E-4,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : -0.2,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.vol = 0;
m.mtime = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.6*((0.6*Math.sin((m.time*1.3)))+(0.4*Math.sin((0.98*m.time))))));
m.wave_b = (m.wave_b+(0.6*((0.6*Math.sin((m.time*1.1)))+(0.4*Math.sin((0.78*m.time))))));
m.wave_g = (m.wave_g+(0.5*((0.6*Math.sin((m.time*1.2)))+(0.4*Math.sin((0.6*m.time))))));
m.q8 = m.wave_r;
m.q7 = m.wave_b;
m.q6 = m.wave_g;
m.vol = (0.1*((m.vol*9)+(((m.bass_att+m.mid_att)+m.treb_att)*0.333333)));
m.q1 = m.vol;
m.mtime = (m.mtime+(m.vol*0.01));
m.q2 = (m.mtime*0.25);
m.sy = (m.sy+(m.vol*0.02));
m.sx = m.sy;
m.rot = (m.rot+(0.01*Math.sin((m.time*0.05))));
m.monitor = m.rot;
m.q3 = m.aspectx;
m.q4 = m.aspecty;
m.warp = 0;
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 7.0985,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.1,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.1,
			rad : 0.01,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 54.0,
			border_r : 0.1,
			num_inst : 25.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q3 = 0;
m.q4 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = (m.q1*0.02);
m.x = (m.x+((0.13*m.q3)*Math.sin((m.instance*1.4))));
m.y = (m.y+((0.13*m.q4)*Math.cos((m.instance*1.4))));
m.r = (1-m.q6);
m.g = (1-m.q7);
m.b = (1-m.q8);
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad=q1*0.02;\n' + 'x = x+(0.13*q3)*sin((instance*1.4));\n' + 'y = y+(0.13*q4)*cos((instance*1.4));\n' + 'r=1-q6;\n' + 'g=1-q7;\n' + 'b=1-q8;\n' + 'r2=r;\n' + 'g2=g;\n' + 'b2=b;'),

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
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 7.0985,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.1,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.1,
			rad : 0.01917,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 54.0,
			border_r : 0.1,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q3 = 0;
m.q4 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = 0;
m.rad = (m.q1*0.02);
m.x = (m.x-((0.11*m.q3)*Math.sin(-m.time)));
m.y = (m.y+((0.11*m.q4)*Math.cos(m.time)));
m.r = (1-m.q6);
m.g = (1-m.q7);
m.b = (1-m.q8);
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad=0;\n' + 'rad=q1*0.02;\n' + 'x = x-(0.11*q3)*sin(-time);\n' + 'y = y+(0.11*q4)*cos(time);\n' + 'r=1-q6;\n' + 'g=1-q7;\n' + 'b=1-q8;\n' + 'r2=r;\n' + 'g2=g;\n' + 'b2=b;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 1.88494,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.28197,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.1,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.1,
			rad : 0.46287,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 54.0,
			border_r : 0.1,
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
			a : 0.15,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 2.5132,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.5957,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.1,
			b2 : 0.0,
			a2 : 0.1,
			r : 0.0,
			border_g : 0.1,
			rad : 0.43866,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 54.0,
			border_r : 0.1,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uv);\n' + '  ret_1 = (ret_1 + clamp ((\n' + '    (ret_1.yzx - ret_1.zxy)\n' + '   - \n' + '    (((tmpvar_3.xyz * scale1) + bias1) * 0.1)\n' + '  ), 0.0, 1.0));\n' + '  ret_1 = (ret_1 * 0.99);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3.x = -(uv.x);\n' + '  tmpvar_3.y = uv.y;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_main, tmpvar_3);\n' + '  ret_1 = (ret_1 + tmpvar_4.xyz);\n' + '  ret_1 = (1.0 - mix (ret_1, (ret_1 * _qb.wzy), vec3(rad)));\n' + '  ret_1 = (ret_1 * 1.49);\n' + '  ret_1 = (ret_1 * ret_1);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.6*(0.6*sin(time*1.3) + 0.4*sin(0.98*time));\n' + 'wave_b = wave_b + 0.6*(0.6*sin(time*1.1) + 0.4*sin(0.78*time));\n' + 'wave_g = wave_g + 0.5*(0.6*sin(time*1.2) + 0.4*sin(0.6*time));\n' + 'q8=wave_r;\n' + 'q7=wave_b;\n' + 'q6=wave_g;\n' + 'vol = 0.1*(vol*9 + (bass_att+mid_att+treb_att)*0.333333);\n' + 'q1=vol;\n' + 'mtime=mtime+vol*0.01;\n' + 'q2=mtime*0.25;\n' + 'sy=sy+vol*0.02;\n' + 'sx=sy;\n' + 'rot = rot + 0.01*sin(time*0.05);\n' + 'monitor=rot;\n' + 'q3=aspectx;\n' + 'q4=aspecty;\n' + 'warp=0;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
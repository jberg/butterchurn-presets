define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 1.0,
		mv_x : 12.0,
		warpscale : 0.325,
		brighten : 1.0,
		mv_y : 9.0,
		wave_scale : 0.972,
		echo_alpha : 0.5,
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
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 1.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 1.0,
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
		mv_l : 0.9,
		invert : 0.0,
		rot : -0.22,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.094,
		decay : 0.929,
		wave_a : 4.1,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 1.0,
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
m.q1 = 0;
m.decay_g = 0;
m.q5 = 0;
m.basstime = 0;
m.decay_r = 0;
m.decay_b = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.dx = 0.0;
m.basstime = (m.basstime+(m.bass*0.13));
m.q5 = m.basstime;
m.decay_r = 0;
m.decay_g = 0;
m.decay_b = 0;
m.ob_r = (0.5+(0.5*Math.sin((m.basstime*0.22))));
m.ob_g = (0.5+(0.5*Math.sin((m.time*0.307))));
m.ob_b = (0.5+(0.5*Math.sin((m.time*0.112))));
m.monitor = m.q1;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = 1.05;
m.rot = 0;
m.dx = 0;
m.dy = 0;
m.warp = 0;
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
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.59957,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.spi = 0;
m.red = 0;
m.vol = 0;
m.bob = 0;
m.tm = 0;
m.ro = 0;
m.sp = 0;
m.border_1 = 0;
m.bob = 1.5;
m.ro = 0;
m.red = rand(20);
			m.rkeys = ['bob','ro'];
			return m;
		},
		'frame_eqs' : function(m) {
m.vol = (1+(0.2*div(((m.bass_att+m.treb_att)+m.mid_att),3)));
m.bob = (((m.bob*above(m.bob, 0.01))-0.01)+(1*(1-above(m.bob, 0.01))));
m.bob = (0.4+(0.4*Math.sin((m.time*0.8))));
m.bob = (m.bob*m.vol);
m.rad = m.bob;
m.border_1 = 0.4;
m.sides = 30;
m.ro = (m.ro+0.02);
m.ang = m.ro;
m.rad = 0.6;
m.sp = (m.red*0.025);
m.spi = (0.5-m.sp);
m.tm = (m.time*0.1);
m.border_r = ((0.5+(m.sp*Math.sin((m.tm*0.6))))+(m.spi*Math.cos((m.tm*1.46))));
m.border_g = ((0.5+(m.sp*Math.sin((m.tm*1.294))))+(m.spi*Math.cos((m.tm*0.87))));
m.border_b = ((0.5+(m.sp*Math.sin((m.tm*1.418))))+(m.spi*Math.cos((m.tm*0.76))));
		return m;
	},
		'init_eqs_str' : ('bob = 1.5;\n' + 'ro = 0;\n' + 'red = rand(20);'),
		'frame_eqs_str' : ('vol = 1 + 0.2*((bass_att+treb_att+mid_att)/3);\n' + 'bob = bob*above(bob,0.01) - 0.01 + 1*(1 - above(bob,0.01));\n' + 'bob = 0.4 + 0.4*sin(time*0.8);\n' + 'bob = bob*vol;\n' + 'rad = bob;\n' + 'border_1 = 0.4;\n' + 'sides = 30;\n' + 'ro = ro + 0.02;\n' + 'ang = ro;\n' + 'rad = 0.6;\n' + 'sp = red*0.025;\n' + 'spi = 0.5 - sp;\n' + 'tm = time*0.1;\n' + 'border_r = 0.5 + sp*sin(tm*0.6) + spi*cos(tm*1.46);\n' + 'border_g = 0.5 + sp*sin(tm*1.294) + spi*cos(tm*0.87);\n' + 'border_b = 0.5 + sp*sin(tm*1.418) + spi*cos(tm*0.76);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
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
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.5*((Math.sin((m.time*1.1))*0.3)+(0.7*Math.sin((m.time*0.5))))));
m.x = (0.5+(0.225*Math.sin(m.time)));
m.y = (0.5+(0.3*Math.cos(m.time)));
m.rad = (m.rad*m.mid_att);
m.r = (0.5+(0.5*Math.sin((m.frame*0.5))));
m.b = (0.5+(0.5*Math.sin(((m.frame*0.5)+2.094))));
m.g = (0.5+(0.5*Math.sin(((m.frame*0.5)+4.188))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.5*(sin(time*1.1)*0.3 + 0.7*sin(time*0.5));\n' + 'x = 0.5 + 0.225*sin(time);\n' + 'y = 0.5 + 0.3*cos(time);\n' + 'rad = rad*mid_att;\n' + 'r = 0.5 + 0.5*sin(frame*0.5);\n' + 'b = 0.5 + 0.5*sin(frame*0.5 + 2.094);\n' + 'g = 0.5 + 0.5*sin(frame*0.5 + 4.188);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
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
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.5*((Math.sin((m.time*1.1))*0.3)+(0.7*Math.sin((m.time*0.5))))));
m.x = (0.5+(0.225*Math.sin((m.time+2.09))));
m.y = (0.5+(0.3*Math.cos((m.time+2.09))));
m.rad = (m.rad*m.bass_att);
m.r = (0.5+(0.5*Math.sin((m.frame*0.5))));
m.b = (0.5+(0.5*Math.sin(((m.frame*0.5)+2.094))));
m.g = (0.5+(0.5*Math.sin(((m.frame*0.5)+4.188))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.5*(sin(time*1.1)*0.3 + 0.7*sin(time*0.5));\n' + 'x = 0.5 + 0.225*sin(time + 2.09);\n' + 'y = 0.5 + 0.3*cos(time + 2.09);\n' + 'rad = rad*bass_att;\n' + 'r = 0.5 + 0.5*sin(frame*0.5);\n' + 'b = 0.5 + 0.5*sin(frame*0.5 + 2.094);\n' + 'g = 0.5 + 0.5*sin(frame*0.5 + 4.188);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
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
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.5*((Math.sin((m.time*1.1))*0.3)+(0.7*Math.sin((m.time*0.5))))));
m.x = (0.5+(0.225*Math.sin((m.time+4.19))));
m.y = (0.5+(0.3*Math.cos((m.time+4.19))));
m.rad = (m.rad*m.treb_att);
m.r = (0.5+(0.5*Math.sin((m.frame*0.5))));
m.b = (0.5+(0.5*Math.sin(((m.frame*0.5)+2.094))));
m.g = (0.5+(0.5*Math.sin(((m.frame*0.5)+4.188))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.5*(sin(time*1.1)*0.3 + 0.7*sin(time*0.5));\n' + 'x = 0.5 + 0.225*sin(time + 4.19);\n' + 'y = 0.5 + 0.3*cos(time + 4.19);\n' + 'rad = rad*treb_att;\n' + 'r = 0.5 + 0.5*sin(frame*0.5);\n' + 'b = 0.5 + 0.5*sin(frame*0.5 + 2.094);\n' + 'g = 0.5 + 0.5*sin(frame*0.5 + 4.188);'),

		}
],
	'warp' : (''),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec2 uv3_2;\n' + '   vec2 uv2_3;\n' + '   vec3 ret_4;\n' + '  uv_1 = (uv - 0.5);\n' + '  uv_1 = (uv_1 * aspect.xy);\n' + '  uv2_3.x = ((uv_1.x * -0.497265) - (uv_1.y * 0.8675987));\n' + '  uv2_3.y = ((uv_1.x * 0.8675987) + (uv_1.y * -0.497265));\n' + '  uv3_2.x = ((uv_1.x * -0.5000263) - (uv_1.y * -0.8660102));\n' + '  uv3_2.y = ((uv_1.x * -0.8660102) + (uv_1.y * -0.5000263));\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv_1 + 0.5);\n' + '  tmpvar_5 = texture2D (sampler_main, P_6);\n' + '  ret_4 = tmpvar_5.xyz;\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv2_3 + 0.5);\n' + '  tmpvar_7 = texture2D (sampler_main, P_8);\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv3_2 + 0.5);\n' + '  tmpvar_9 = texture2D (sampler_main, P_10);\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = max (max (ret_4, tmpvar_7.xyz), tmpvar_9.xyz);\n' + '  ret_4 = tmpvar_11;\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12.w = 1.0;\n' + '  tmpvar_12.xyz = tmpvar_11;\n' + '  vec4 ret4 = tmpvar_12;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('dx = 0.0;\n' + 'basstime = basstime  + bass*0.13;\n' + 'q5 = basstime;\n' + 'decay_r = 0;\n' + 'decay_g = 0;\n' + 'decay_b = 0;\n' + 'ob_r = 0.5 + 0.5*sin(basstime*0.22);\n' + 'ob_g = 0.5 + 0.5*sin(time*0.307);\n' + 'ob_b = 0.5 + 0.5*sin(time*0.112);\n' + 'monitor = q1;'),
	'pixel_eqs_str' : ('zoom = 1.05;\n' + 'rot = 0;\n' + 'dx = 0;\n' + 'dy = 0;\n' + 'warp = 0;'),
};

return pmap;
});
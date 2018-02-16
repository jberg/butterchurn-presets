define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 31.2,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 2.28,
		wave_scale : 1.251,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.02349,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 6.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.7,
		ib_r : 0.25,
		mv_b : 0.8,
		echo_zoom : 2.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.025,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 2.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.65,
		wave_mystery : -0.28,
		decay : 0.98,
		wave_a : 0.019,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.7,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.05,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.200*((0.90*Math.sin(((2.753*m.time)+0)))+(0.40*Math.sin(((2.315*m.time)+1))))));
m.wave_g = (m.wave_g+(0.100*((0.90*Math.sin(((3.183*m.time)+3)))+(0.40*Math.sin(((2.006*m.time)+4))))));
m.wave_b = (m.wave_b+(0.100*((0.90*Math.sin(((2.393*m.time)+5)))+(0.40*Math.sin(((2.733*m.time)+2))))));
m.zoom = (m.zoom+(0.019*((0.60*Math.sin((0.339*m.time)))+(0.40*Math.sin((0.276*m.time))))));
m.rot = (m.rot+(0.01*((0.60*Math.sin((0.691*m.time)))+(0.40*Math.sin((0.449*m.time))))));
m.rot = (m.rot+(0.01*((Math.sin(((m.time*0.834)+2))+Math.sin(((m.time*1.7134)+1)))+Math.sin((m.time*1.334)))));
m.cx = (m.cx+(0.003*((0.60*Math.sin((0.471*m.time)))+(0.40*Math.sin((0.297*m.time))))));
m.cy = (m.cy+(0.003*((0.60*Math.sin((0.379*m.time)))+(0.40*Math.sin((0.351*m.time))))));
m.dx = (m.dx+(0.003*((0.60*Math.sin((0.234*m.time)))+(0.40*Math.sin((0.277*m.time))))));
m.dx = (m.dx+(0.0025*((Math.sin((m.time*1.134))+Math.sin((m.time*0.7134)))+Math.sin((m.time*2.334)))));
m.dy = (m.dy+(0.0025*((Math.sin((m.time*1.8834))+Math.sin((m.time*1.0144)))+Math.sin((m.time*1.334)))));
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
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
m.x = (0.2+((0.6*rand(100))*0.01));
m.y = (0.2+((0.6*rand(100))*0.01));
m.r = (rand(100)*0.01);
m.g = (rand(100)*0.01);
m.b = (rand(100)*0.01);
m.r2 = (rand(100)*0.01);
m.g2 = (rand(100)*0.01);
m.b2 = (rand(100)*0.01);
m.a = Math.max(0, (m.bass_att-1.3));
m.a2 = m.a;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.2 + 0.6*rand(100)*0.01;\n' + 'y = 0.2 + 0.6*rand(100)*0.01;\n' + 'r = rand(100)*0.01;\n' + 'g = rand(100)*0.01;\n' + 'b = rand(100)*0.01;\n' + 'r2 = rand(100)*0.01;\n' + 'g2 = rand(100)*0.01;\n' + 'b2 = rand(100)*0.01;\n' + 'a  = max(0, bass_att - 1.3);\n' + 'a2 = a;'),

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = dot (texsize.zw, texsize.zw);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (uv - 0.5);\n' + '  P_4 = ((tmpvar_6 * (1.0 - \n' + '    (8.0 * sqrt(tmpvar_5))\n' + '  )) + 0.5);\n' + '  tmpvar_3 = texture2D (sampler_main, P_4);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = ((tmpvar_6 * (1.0 + \n' + '    (8.0 * sqrt(tmpvar_5))\n' + '  )) + 0.5);\n' + '  tmpvar_7 = texture2D (sampler_main, P_8);\n' + '  ret_1 = (max (max (ret_1, tmpvar_3.xyz), tmpvar_7.xyz) * 0.987);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9.w = 1.0;\n' + '  tmpvar_9.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_9;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 c_1;\n' + '   float b4_2;\n' + '   float b3_3;\n' + '   float b2_4;\n' + '   float b1_5;\n' + '   vec3 ret_6;\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_main, uv);\n' + '  ret_6 = tmpvar_7.xyz;\n' + '  ret_6 = (ret_6 * 0.6);\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8.z = 0.0;\n' + '  tmpvar_8.xy = texsize.zw;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + tmpvar_8.xz);\n' + '   float tmpvar_10;\n' + '  tmpvar_10 = dot (texture2D (sampler_main, P_9).xyz, vec3(0.32, 0.49, 0.29));\n' + '  b1_5 = tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - tmpvar_8.xz);\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = dot (texture2D (sampler_main, P_11).xyz, vec3(0.32, 0.49, 0.29));\n' + '  b2_4 = tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (uv + tmpvar_8.zy);\n' + '   float tmpvar_14;\n' + '  tmpvar_14 = dot (texture2D (sampler_main, P_13).xyz, vec3(0.32, 0.49, 0.29));\n' + '  b3_3 = tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (uv - tmpvar_8.zy);\n' + '   float tmpvar_16;\n' + '  tmpvar_16 = dot (texture2D (sampler_main, P_15).xyz, vec3(0.32, 0.49, 0.29));\n' + '  b4_2 = tmpvar_16;\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = (b1_5 - b2_4);\n' + '  tmpvar_17.y = (b3_3 - b4_2);\n' + '  c_1 = ((clamp (\n' + '    ((fract((tmpvar_17 * 20.0)) - 0.5) * 999.0)\n' + '  , 0.0, 1.0) * 2.0) - 1.0);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_blur2, uv);\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19 = (c_1 * (vec2(1.0, 1.0) - vec2(clamp (\n' + '    ((dot ((\n' + '      (tmpvar_18.xyz * scale2)\n' + '     + bias2), vec3(0.32, 0.49, 0.29)) * 30.0) - 17.0)\n' + '  , 0.0, 1.0))));\n' + '  c_1 = tmpvar_19;\n' + '  ret_6 = (ret_6 + (0.104 * tmpvar_19.x));\n' + '  ret_6 = (ret_6 + (0.104 * tmpvar_19.y));\n' + '  ret_6 = (mix (ret_6, vec3(dot (ret_6, vec3(0.32, 0.49, 0.29))), vec3(-1.0, -1.0, -1.0)) * 2.0);\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20.w = 1.0;\n' + '  tmpvar_20.xyz = ret_6;\n' + '  vec4 ret4 = tmpvar_20;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.200*( 0.90*sin(2.753*time+0) + 0.40*sin(2.315*time+1) );\n' + 'wave_g = wave_g + 0.100*( 0.90*sin(3.183*time+3) + 0.40*sin(2.006*time+4) );\n' + 'wave_b = wave_b + 0.100*( 0.90*sin(2.393*time+5) + 0.40*sin(2.733*time+2) );\n' + 'zoom = zoom + 0.019*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );\n' + 'rot = rot + 0.01*( 0.60*sin(0.691*time) + 0.40*sin(0.449*time) );\n' + 'rot = rot + 0.01*( sin(time*0.834+2) + sin(time*1.7134+1) + sin(time*1.334) );\n' + 'cx = cx + 0.003*( 0.60*sin(0.471*time) + 0.40*sin(0.297*time) );\n' + 'cy = cy + 0.003*( 0.60*sin(0.379*time) + 0.40*sin(0.351*time) );\n' + 'dx = dx + 0.003*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );\n' + 'dx=dx+0.0025*(sin(time*1.134)+sin(time*0.7134)+sin(time*2.334));\n' + 'dy=dy+0.0025*(sin(time*1.8834)+sin(time*1.0144)+sin(time*1.334));'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
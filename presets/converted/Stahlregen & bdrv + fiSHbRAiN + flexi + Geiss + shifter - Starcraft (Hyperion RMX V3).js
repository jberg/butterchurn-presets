define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.325,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01605,
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
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.9,
		echo_zoom : 1.169,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.135,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.98,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.88,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q30 = 0;
m.q31 = 0;
m.q32 = 0;
m.q23 = 0;
m.q24 = 0;
m.q25 = 0;
m.q26 = 0;
m.q27 = 0;
m.q28 = 0;
m.q29 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = ((0.935*m.zoom)+(0.04*((0.60*Math.sin((0.339*m.bass_att)))+(0.10*Math.sin((0.276*m.bass_att))))));
m.rot = (m.rot+(0.040*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.cx = (m.cx+(0.003*((0.60*Math.sin((0.471*m.treb_att)))+(0.40*Math.sin((0.297*m.treb_att))))));
m.cy = (m.cy+(0.003*((0.60*Math.sin((0.379*m.mid_att)))+(0.40*Math.sin((0.351*m.mid_att))))));
m.dx = (m.dx+(0.003*((0.60*Math.sin((0.234*m.time)))+(0.40*Math.sin((0.277*m.time))))));
m.rot = (m.rot+(0.02*((Math.sin((m.time*2.134))+Math.sin((m.time*1.7134)))+Math.sin((m.time*2.834)))));
m.dx = (m.dx+(0.01*((Math.sin((m.time*1.134))+Math.sin((m.time*0.7134)))+Math.sin((m.time*2.334)))));
m.dy = (m.dy+(0.01*((Math.sin((m.time*1.8834))+Math.sin((m.time*1.0144)))+Math.sin((m.time*1.334)))));
m.q23 = div(rand(1000),1000);
m.q24 = div(rand(1000),1000);
m.q25 = (div(rand(1000),1000)*6.28);
m.q26 = (m.q25-3.14);
m.q27 = (div(rand(1000),12000)+0.1);
m.q28 = div(rand(1000),1000);
m.q29 = div(rand(1000),1000);
m.q30 = (div(rand(1000),1000)*6.28);
m.q31 = (m.q30-3.14);
m.q32 = (div(rand(1000),14000)+0.1);
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
			scaling : 100.0,
			samples : 332.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.9,
			thick : 0.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (rand(100)*0.01);
m.y = (rand(100)*0.01);
m.r = 1;
m.g = 0.9;
m.b = 1.0;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=rand(100)*0.01;\n' + 'y=rand(100)*0.01;\n' + 'r=1;\n' + 'g=0.9;\n' + 'b=1.0;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.0,
			scaling : 81.95444,
			samples : 42.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wave_x = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.wave_x = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.x = (rand(1000)*0.001);
m.y = (rand(1000)*0.001);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('wave_x=1;'),
		'point_eqs_str' : ('x=rand(1000)*0.001;\n' + 'y=rand(1000)*0.001;'),

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
			a : 0.9,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.62832,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.77829,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.69,
			b2 : 1.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 0.81,
			rad : 0.01,
			x : 0.5,
			y : 1.8,
			ang : 0.1884,
			sides : 16.0,
			border_r : 0.59,
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.25133,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.2,
			tex_zoom : 1.136,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.99,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.0,
			rad : 1.25237,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 0.0,
			num_inst : 2.0,
			},
		'init_eqs' : function(m) {
m.q30 = 0;
m.q31 = 0;
m.q32 = 0;
m.q28 = 0;
m.q29 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q28;
m.y = m.q29;
m.rad = m.q32;
m.ang = ifcond(equal(m.instance, 0), m.q30, m.q31);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x= q28;\n' + 'y= q29;\n' + 'rad=q32;\n' + 'ang= if(equal(instance,0),q30,q31);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.25133,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.2,
			tex_zoom : 1.136,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.99,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.0,
			rad : 1.25237,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 0.0,
			num_inst : 2.0,
			},
		'init_eqs' : function(m) {
m.q23 = 0;
m.q24 = 0;
m.q25 = 0;
m.q26 = 0;
m.q27 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q23;
m.y = m.q24;
m.rad = m.q27;
m.ang = ifcond(equal(m.instance, 0), m.q25, m.q26);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x= q23;\n' + 'y= q24;\n' + 'rad=q27;\n' + 'ang= if(equal(instance,0),q25,q26);'),

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
			tex_zoom : 0.45112,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.9,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.80814,
			x : 0.86,
			y : 0.2,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = ((uv * 0.925) + 0.0375);\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = ((uv * 1.075) - 0.0375);\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = (vec3(1.0, 0.0, 0.0) * texture2D (sampler_main, uv).xxx);\n' + '  ret_1 = tmpvar_4;\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, tmpvar_2).yyy;\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = vec3((texture2D (sampler_main, tmpvar_3).z * 0.3));\n' + '  ret_1 = (mix (mix (ret_1, vec3(0.0, 1.0, 0.0), tmpvar_5), vec3(0.0, 0.0, 1.0), tmpvar_6) * 0.98);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   float b4_1;\n' + '   float b3_2;\n' + '   float b2_3;\n' + '   float b1_4;\n' + '   vec3 ret_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv);\n' + '  ret_5 = tmpvar_6.xyz;\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7.z = 0.0;\n' + '  tmpvar_7.xy = texsize.zw;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + tmpvar_7.xz);\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = dot (texture2D (sampler_main, P_8).xyz, vec3(0.32, 0.49, 0.29));\n' + '  b1_4 = tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv - tmpvar_7.xz);\n' + '   float tmpvar_11;\n' + '  tmpvar_11 = dot (texture2D (sampler_main, P_10).xyz, vec3(0.32, 0.49, 0.29));\n' + '  b2_3 = tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (uv + tmpvar_7.zy);\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = dot (texture2D (sampler_main, P_12).xyz, vec3(0.32, 0.49, 0.29));\n' + '  b3_2 = tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (uv - tmpvar_7.zy);\n' + '   float tmpvar_15;\n' + '  tmpvar_15 = dot (texture2D (sampler_main, P_14).xyz, vec3(0.32, 0.49, 0.29));\n' + '  b4_1 = tmpvar_15;\n' + '  ret_5 = -(ret_5);\n' + '  ret_5 = (ret_5 + (clamp (\n' + '    ((b1_4 - b2_3) * 64.0)\n' + '  , 0.0, 1.0) * vec3(0.2, 0.6, 0.9)));\n' + '  ret_5 = (ret_5 + (clamp (\n' + '    ((b3_2 - b4_1) * 64.0)\n' + '  , 0.0, 1.0) * vec3(0.3, 0.9, 0.5)));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_blur1, uv);\n' + '  ret_5 = (ret_5 - clamp ((\n' + '    (((tmpvar_16.xyz * scale1) + bias1) * 4.0)\n' + '   - 1.0), 0.0, 1.0));\n' + '  ret_5 = (ret_5 * 1.5);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17.w = 1.0;\n' + '  tmpvar_17.xyz = ret_5;\n' + '  vec4 ret4 = tmpvar_17;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('zoom = 0.935*zoom + 0.04*( 0.60*sin(0.339*bass_att) + 0.10*sin(0.276*bass_att) );\n' + 'rot = rot + 0.040*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'cx = cx + 0.003*( 0.60*sin(0.471*treb_att) + 0.40*sin(0.297*treb_att) );\n' + 'cy = cy + 0.003*( 0.60*sin(0.379*mid_att) + 0.40*sin(0.351*mid_att) );\n' + 'dx = dx + 0.003*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );\n' + 'rot=rot+0.02*(sin(time*2.134)+sin(time*1.7134)+sin(time*2.834));\n' + 'dx=dx+0.01*(sin(time*1.134)+sin(time*0.7134)+sin(time*2.334));\n' + 'dy=dy+0.01*(sin(time*1.8834)+sin(time*1.0144)+sin(time*1.334));\n' + 'q23 = rand(1000)/1000;\n' + 'q24 = rand(1000)/1000;\n' + 'q25 = (rand(1000)/1000)*6.28;\n' + 'q26 = q25 - 3.14;\n' + 'q27 = (rand(1000)/12000)+0.1;\n' + 'q28 = rand(1000)/1000;\n' + 'q29 = rand(1000)/1000;\n' + 'q30 = (rand(1000)/1000)*6.28;\n' + 'q31 = q30 - 3.14;\n' + 'q32 = (rand(1000)/14000)+0.1;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
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
		ib_size : 0.01,
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
		ob_size : 0.005,
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
		rating : 5.0,
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
m.q23 = div(Math.floor(rand(1000)),1000);
m.q24 = div(Math.floor(rand(1000)),1000);
m.q25 = (div(Math.floor(rand(1000)),1000)*6.28);
m.q26 = (m.q25-3.14);
m.q27 = (div(Math.floor(rand(1000)),12000)+0.1);
m.q28 = div(Math.floor(rand(1000)),1000);
m.q29 = div(Math.floor(rand(1000)),1000);
m.q30 = (div(Math.floor(rand(1000)),1000)*6.28);
m.q31 = (m.q30-3.14);
m.q32 = (div(Math.floor(rand(1000)),14000)+0.1);
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
m.x = (Math.floor(rand(100))*0.01);
m.y = (Math.floor(rand(100))*0.01);
m.r = 1;
m.g = 0.9;
m.b = 1.0;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=int(rand(100))*0.01;\n' + 'y=int(rand(100))*0.01;\n' + 'r=1;\n' + 'g=0.9;\n' + 'b=1.0;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.4,
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
m.x = (Math.floor(rand(1000))*0.001);
m.y = (Math.floor(rand(1000))*0.001);
m.r = 0.9;
m.g = 1;
m.b = 1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('wave_x=1;'),
		'point_eqs_str' : ('x=int(rand(1000))*0.001;\n' + 'y=int(rand(1000))*0.001;\n' + 'r=0.9;\n' + 'g=1;\n' + 'b=1;'),

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
			enabled : 1.0,
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
			rad : 0.32544,
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
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.136,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.99,
			b2 : 0.2,
			a2 : 0.0,
			r : 0.36,
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
m.r = (((Math.floor(rand(10))*0.1)*0.5)+0.5);
m.g = m.r;
m.b = m.r;
m.x = m.q28;
m.y = m.q29;
m.rad = m.q32;
m.ang = ifcond(equal(m.instance, 0), m.q30, m.q31);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=int(rand(10))*0.1*0.5+0.5;\n' + 'g=r;\n' + 'b=r;\n' + 'x= q28;\n' + 'y= q29;\n' + 'rad=q32;\n' + 'ang= if(equal(instance,0),q30,q31);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.25133,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.136,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.99,
			b2 : 0.2,
			a2 : 0.0,
			r : 0.36,
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
m.r = (((Math.floor(rand(10))*0.1)*0.5)+0.5);
m.g = m.r;
m.b = m.r;
m.x = m.q23;
m.y = m.q24;
m.rad = m.q27;
m.ang = ifcond(equal(m.instance, 0), m.q25, m.q26);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=int(rand(10))*0.1*0.5+0.5;\n' + 'g=r;\n' + 'b=r;\n' + 'x= q23;\n' + 'y= q24;\n' + 'rad=q27;\n' + 'ang= if(equal(instance,0),q25,q26);'),

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
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.18423,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.9,
			a2 : 0.1,
			r : 1.0,
			border_g : 1.0,
			rad : 0.0369,
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
m.rad = (0.04+(0.005*m.bass_att));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad = 0.04+0.005*bass_att;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 * 0.98);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '  uv_1 = (0.05 + (0.9 * uv));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uv_1);\n' + '  ret_2 = ((tmpvar_3.xyz * scale1) + bias1);\n' + '   vec2 x_4;\n' + '  x_4 = (3.0 * ret_2.yx);\n' + '  uv_1 = (uv_1 + ((\n' + '    (-0.05 * (sign(x_4) * (1.570796 - (\n' + '      sqrt((1.0 - abs(x_4)))\n' + '     * \n' + '      (1.570796 + (abs(x_4) * (-0.2146018 + (\n' + '        abs(x_4)\n' + '       * \n' + '        (0.08656672 + (abs(x_4) * -0.03102955))\n' + '      ))))\n' + '    ))))\n' + '   + \n' + '    (0.05 * cos((2.0 * ret_2.zz)))\n' + '  ) - 0.025));\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, uv_1).xyz;\n' + '  ret_2 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur1, uv_1);\n' + '  ret_2 = (ret_2 + ((tmpvar_6.xyz * scale1) + bias1));\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = clamp (ret_2, 0.0, 1.0);\n' + '  ret_2 = (tmpvar_7 * tmpvar_7);\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('zoom = 0.935*zoom + 0.04*( 0.60*sin(0.339*bass_att) + 0.10*sin(0.276*bass_att) );\n' + 'rot = rot + 0.040*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'cx = cx + 0.003*( 0.60*sin(0.471*treb_att) + 0.40*sin(0.297*treb_att) );\n' + 'cy = cy + 0.003*( 0.60*sin(0.379*mid_att) + 0.40*sin(0.351*mid_att) );\n' + 'dx = dx + 0.003*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );\n' + 'rot=rot+0.02*(sin(time*2.134)+sin(time*1.7134)+sin(time*2.834));\n' + 'dx=dx+0.01*(sin(time*1.134)+sin(time*0.7134)+sin(time*2.334));\n' + 'dy=dy+0.01*(sin(time*1.8834)+sin(time*1.0144)+sin(time*1.334));\n' + 'q23 = int(rand(1000))/1000;\n' + 'q24 = int(rand(1000))/1000;\n' + 'q25 = (int(rand(1000))/1000)*6.28;\n' + 'q26 = q25 - 3.14;\n' + 'q27 = (int(rand(1000))/12000)+0.1;\n' + 'q28 = int(rand(1000))/1000;\n' + 'q29 = int(rand(1000))/1000;\n' + 'q30 = (int(rand(1000))/1000)*6.28;\n' + 'q31 = q30 - 3.14;\n' + 'q32 = (int(rand(1000))/14000)+0.1;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
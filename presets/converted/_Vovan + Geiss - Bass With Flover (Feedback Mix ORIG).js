define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.625,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 0.99999,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.7,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 2.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.47,
		zoom : 1.046,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.0,
		wave_mystery : 0.0,
		decay : 0.975,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q = 0;
m.x = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = ((((m.wave_r*m.x)*m.bass)*1000000)+(0.400*((0.60*Math.sin((0.933*m.time)))+(0.40*Math.sin((1.045*m.time))))));
m.wave_g = (div(((m.wave_g*200000)*m.treb),m.x)+(0.400*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((0.956*m.time))))));
m.wave_b = (m.wave_b+(0.400*((0.60*Math.sin((0.910*m.time)))+(0.40*Math.sin((0.920*m.time))))));
m.zoom = (m.zoom+(0.023*((0.60*Math.sin((0.339*m.time)))+(0.40*Math.sin((0.276*m.time))))));
m.q = (div(m.rot,5)+(0.030*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.cx = (m.cx+(0.070*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.294*m.time))))));
m.cy = (m.cy+(0.070*((0.60*Math.sin((0.393*m.time)))+(0.40*Math.sin((0.223*m.time))))));
m.zoom = (m.zoom+(0.013*((0.60*Math.sin((0.33*m.time)))+(0.40*Math.sin((0276*m.time))))));
m.x = (m.x+100);
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom-(Math.max(0.001, (m.bass-1.2))*Math.sin(((m.time*1.4)+(m.rad*6)))));
m.zoom = (m.zoom+(0.07*Math.sin(((m.rad*25)+(m.time*2.5)))));
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
			b : 0.7,
			tex_ang : 1.3823,
			thickoutline : 0.0,
			g : 0.9,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.10462,
			additive : 0.0,
			border_a : 0.4,
			border_b : 1.0,
			b2 : 0.8,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.80814,
			x : 0.5,
			y : 0.5,
			ang : 0.75398,
			sides : 44.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.03*Math.cos(((m.time*0.69)+2))));
m.y = (0.5+(0.02*Math.cos(((m.time*0.73)+1))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.03*cos(time*0.69 + 2);\n' + 'y = 0.5 + 0.02*cos(time*0.73 + 1);'),

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 - 0.005);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 * 1.333);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r*x*bass*1000000 + 0.400*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );\n' + 'wave_g = wave_g*200000*treb/x + 0.400*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );\n' + 'wave_b = wave_b +0.400*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );\n' + 'zoom = zoom + 0.023*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );\n' + 'q=rot/5 + 0.030*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'cx = cx + 0.070*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );\n' + 'cy = cy + 0.070*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );\n' + 'zoom=zoom+0.013*(0.60*sin(0.33*time)+0.40*sin(0276*time));\n' + 'x=x+100;'),
	'pixel_eqs_str' : ('zoom=zoom-max(0.001,(bass-1.2))*sin(time*1.4+rad*6);\n' + 'zoom=zoom+0.07*sin(rad*25+time*2.5);'),
};

return pmap;
});
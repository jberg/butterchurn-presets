define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 3.815,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 0.5,
		echo_zoom : 1.007,
		ob_size : 0.007,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9998,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.1,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.088,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 0.5,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.movement = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.movement = (((m.movement+(0.1*Math.max(0, ((m.bass+m.bass_att)-2))))+(0.15*pow(m.bass, 3)))+0.005);
m.q1 = m.movement;
m.monitor = m.q1;
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
			a : 0.8,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 6.81129,
			x : 0.48,
			y : 0.51,
			ang : 3.64425,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t1 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['r2','g2','b2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.23*Math.cos(((m.time*0.01317)+1))));
m.y = (m.y+(0.17*Math.cos(((m.time*0.00843)+3))));
m.ang = (m.q1*((0.303+(0.01*m.t1))+m.instance));
m.r = Math.min(1, Math.max(0, (0+(0.1*Math.sin(((m.time*0.417)+1))))));
m.g = Math.min(1, Math.max(0, (0+(0.1*Math.sin(((m.time*0.391)+2))))));
m.b = Math.min(1, Math.max(0, (0+(0.1*Math.sin(((m.time*0.432)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.02*Math.sin(((m.time*0.657)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.02*Math.sin(((m.time*0.737)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.02*Math.sin(((m.time*0.884)+6))))));
m.additive = (0.5+(0.15*(m.bass+m.bass_att)));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('x = x + 0.23*cos(time*0.01317+1);\n' + 'y = y + 0.17*cos(time*0.00843+3);\n' + 'ang = q1*(0.303 + 0.01*t1 + instance);\n' + 'r = min(1,max(0,0+ 0.1*sin(time*0.417 + 1)));\n' + 'g = min(1,max(0,0 + 0.1*sin(time*0.391 + 2)));\n' + 'b = min(1,max(0,0 + 0.1*sin(time*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.02*sin(time*0.657 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.02*sin(time*0.737 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.02*sin(time*0.884 + 6)));\n' + 'additive =0.5+0.15*(bass+bass_att);'),

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
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.89796,
			x : 0.44,
			y : 0.5,
			ang : 3.64425,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t1 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['b2','g2','r2','b','g','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.17*Math.sin(((m.q1*0.15)+3))));
m.y = (m.y+(0.13*Math.sin(((m.q1*0.19)+1))));
m.tex_ang = (m.q1*(0.01+(0.0001*m.t1)));
m.r = Math.min(1, Math.max(0, (m.r+(0.01*Math.sin(((m.time*0.0417)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.01*Math.sin(((m.time*0.391)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.01*Math.sin(((m.time*0.432)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.01*Math.sin(((m.time*0.457)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.01*Math.sin(((m.time*0.0437)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.01*Math.sin(((m.time*0.484)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('x = x + 0.17*sin(q1*0.15+3);\n' + 'y = y + 0.13*sin(q1*0.19+1);\n' + 'tex_ang = q1*(0.01 + 0.0001*t1);\n' + 'r = min(1,max(0,r + 0.01*sin(time*0.0417 + 1)));\n' + 'g = min(1,max(0,g + 0.01*sin(time*0.391 + 2)));\n' + 'b = min(1,max(0,b + 0.01*sin(time*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.01*sin(time*0.457 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.01*sin(time*0.0437 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.01*sin(time*0.484 + 6)));'),

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
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.51386,
			x : 0.53,
			y : 0.46,
			ang : 4.20974,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t1 = 0;
m.t2 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['r2','b','g','g2','b2','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.25*Math.sin((m.q1*0.017))));
m.y = (m.y+(0.19*Math.sin((m.q1*0.013))));
m.tex_ang = (m.q1*(0.02+(0.0001*m.t1)));
m.rad = (m.rad*(0.9+(0.2*m.t2)));
m.r = Math.min(1, Math.max(0, (m.r+(0.01*Math.sin(((m.time*0.417)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.01*Math.sin(((m.time*0.391)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.01*Math.sin(((m.time*0.432)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.01*Math.sin(((m.time*0.457)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.01*Math.sin(((m.time*0.437)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.01*Math.sin(((m.time*0.484)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('x = x + 0.25*sin(q1*0.017);\n' + 'y = y + 0.19*sin(q1*0.013);\n' + 'tex_ang = q1*(0.02 + 0.0001*t1);\n' + 'rad = rad * (0.9 + 0.2*t2);\n' + 'r = min(1,max(0,r + 0.01*sin(time*0.417 + 1)));\n' + 'g = min(1,max(0,g + 0.01*sin(time*0.391 + 2)));\n' + 'b = min(1,max(0,b + 0.01*sin(time*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.01*sin(time*0.457 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.01*sin(time*0.437 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.01*sin(time*0.484 + 6)));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 1.88496,
			thickoutline : 0.0,
			g : 0.8,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.48886,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.5,
			a2 : 0.0,
			r : 0.6,
			border_g : 1.0,
			rad : 0.44747,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.21*Math.sin((m.q1*0.25))));
m.y = (m.y+(0.17*Math.sin(((m.q1*0.5)+2))));
m.ang = m.time;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = x + 0.21*sin(q1*0.25);\n' + 'y = y + 0.17*sin(q1*0.5+2);\n' + 'ang = time;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uv);\n' + '  ret_1 = (ret_1 + ((ret_1 - \n' + '    ((tmpvar_3.xyz * scale1) + bias1)\n' + '  ) * 0.2));\n' + '  ret_1 = (ret_1 - 0.02);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('movement = movement + 0.1*max(0,bass+bass_att-2) + 0.15*pow(bass,3) + 0.005;\n' + 'q1 = movement;\n' + 'monitor =q1;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
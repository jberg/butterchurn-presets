define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.7,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.611,
		echo_alpha : 0.5,
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
		wave_mode : 1.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 0.9,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
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
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.1,
		decay : 1.0,
		wave_a : 16.678,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
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
m.turnr = 0;
m.simp = 0;
m.turn = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_x = ((m.wave_x+(0.05*Math.sin((0.2*m.time))))-((0.05*Math.cos((0.1*m.time)))+(0.05*Math.sin((0.2*m.time)))));
m.wave_y = ((m.wave_y+(0.05*Math.sin((0.3*m.time))))-((0.05*Math.sin((0.88*m.time)))+(0.05*Math.cos((0.7*m.time)))));
m.wave_r = ((m.wave_r+(0.35*Math.sin((1.13*m.time))))+(0.1245*Math.sin((2.34*m.time))));
m.wave_g = ((m.wave_g+(0.35*Math.sin((1.23*m.time))))+(0.12*Math.sin((2.134*m.time))));
m.wave_b = ((m.wave_b+(0.35*Math.sin((1.33*m.time))))+(0.12*Math.sin((2.5*m.time))));
m.wave_mystery = (m.wave_mystery+(0.00*Math.sin(m.time)));
m.turn = ((above(m.bass_att, m.turn)*2)+((1-above(m.bass_att, m.turn))*(((m.turn-1.3)*0.96)+1.3)));
m.turnr = (((equal(m.turn, 2)*0.089)*Math.sin((m.time*6.6)))+((1-equal(m.turn, 2))*m.turnr));
m.simp = ((((m.simp*0.35)*Math.sin((1.2*m.time)))-(0.62*Math.sin((0.7*m.time))))+(1.5*Math.sin(m.turn)));
m.rot = (m.rot+(0.5*(((0.25*m.simp)*10)*m.turnr)));
		m.rkeys = ['dy','dx','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom-(0.02*(1-m.rad)));
m.dx = (m.dx+(0.014*(((m.bass_att*3.1)*m.rot)+(0.2*Math.cos(Math.tan((80*m.ang)))))));
m.dy = (m.dy+(0.014*(((m.bass_att*3.1)*m.rot)+(0.22*Math.sin(Math.tan((80*m.ang)))))));
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '   float tmpvar_3;\n' + '  tmpvar_3 = (time * 10.0);\n' + '  tmpvar_2.x = (uv.x + ((\n' + '    (2.0 * sin(((uv.x * \n' + '      (bass * 500.0)\n' + '    ) + tmpvar_3)))\n' + '   - 0.5) * 0.002));\n' + '  tmpvar_2.y = (uv.y + ((\n' + '    (2.0 * sin(((uv.y * \n' + '      (treb * 500.0)\n' + '    ) + tmpvar_3)))\n' + '   - 0.5) * 0.002));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_fc_main, tmpvar_2);\n' + '  ret_1 = tmpvar_4.xyz;\n' + '  ret_1 = ((ret_1 - 0.005) * 0.97);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_x = wave_x + 0.05*sin(0.2*time) - (0.05*cos(0.1*time) + 0.05*sin(0.2*time));\n' + 'wave_y = wave_y + 0.05*sin(0.3*time) - (0.05*sin(0.88*time) + 0.05*cos(0.7*time));\n' + 'wave_r = wave_r + 0.35*sin(1.13*time) + 0.1245*sin(2.34*time);\n' + 'wave_g = wave_g + 0.35*sin(1.23*time) + 0.12*sin(2.134*time);\n' + 'wave_b = wave_b + 0.35*sin(1.33*time) + 0.12*sin(2.5*time);\n' + 'wave_mystery = wave_mystery + 0.00*sin(time);\n' + 'turn = above(bass_att,turn)*2 + (1-above(bass_att,turn))*((turn-1.3)*0.96+1.3);\n' + 'turnr = equal(turn,2)*0.089*sin(time*6.6) + (1-equal(turn,2))*turnr;\n' + 'simp = simp * 0.35*sin(1.2*time) - 0.62*sin(0.7*time) + 1.5*sin(turn);\n' + 'rot = rot + 0.5*((0.25*simp)*10*turnr);'),
	'pixel_eqs_str' : ('zoom = zoom - 0.02*(1-rad);\n' + 'dx = dx + 0.014*(bass_att*3.1*rot+0.2*cos(tan(80*ang)));\n' + 'dy = dy + 0.014*(bass_att*3.1*rot+0.22*sin(tan(80*ang)));'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.0,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.01,
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
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.0,
		wave_y : 0.0,
		zoom : 0.9999,
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
		rot : 0.63,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q1 = 1;
		return m;
	},
	'frame_eqs' : function(m) {
m.q1 = (m.q1*-above(m.bass, 2.3));
m.rot = 0.6;
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
			r2 : 0.7,
			a : 0.17,
			enabled : 1.0,
			b : 0.04,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.5,
			textured : 0.0,
			g2 : 0.3,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.14,
			b2 : 0.06,
			a2 : 0.0,
			r : 0.5,
			border_g : 0.0,
			rad : 0.44484,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 0.0,
			num_inst : 20.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.bc = 0;
m.ac = 0;
m.nq = 0;
m.m = 0;
m.n = 0;
m.ins = 0;
m.theta = 0;

			m.rkeys = ['n','theta'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ins = div(m.instance,m.num_inst);
m.nq = ifcond(equal(m.instance, 0), 1, m.n);
m.ac = 18;
m.bc = 1;
m.m = 100;
m.rad = ((m.bass_att*0.1)+(m.n*0.002));
m.n = mod(((m.ac*m.nq)+m.bc),m.m);
m.b = (m.treb*0.2);
m.ang = m.n;
m.theta = ifcond((1-equal(m.q1, 0)), (m.theta+0.2), m.theta);
m.x = (0.5+(0.3*Math.sin(m.theta)));
m.y = (0.5+(0.3*Math.cos(m.theta)));
m.a = (m.mid*0.2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ins = instance/num_inst;\n' + 'nq = if(equal(instance,0), 1, n);\n' + 'ac = 18;\n' + 'bc = 1;\n' + 'm = 100;\n' + 'rad = bass_att *0.1 + n * 0.002;\n' + 'n = (ac * nq + bc) % m;\n' + 'b = treb * 0.2;\n' + 'ang = n;\n' + 'theta = if(1-equal(q1, 0), theta + 0.2, theta);\n' + 'x = 0.5 + 0.3 * sin(theta);\n' + 'y = 0.5 + 0.3 * cos(theta);\n' + 'a = mid*0.2;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.68515,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.7316,
			x : 0.66,
			y : 0.5,
			ang : 1.44513,
			sides : 8.0,
			border_r : 1.0,
			num_inst : 3.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.y = (0.5+(0.1*Math.sin((m.time*3))));
m.ang = m.time;
m.g = (0.6+(m.treb_att*0.4));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('y = 0.5 + 0.1 * sin(time*3);\n' + 'ang = time;\n' + 'g = 0.6+treb_att * 0.4;'),

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_fc_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (mix (ret_1, (0.1 - ret_1), vec3(0.04, 0.04, 0.04)) * 0.98);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '   vec2 P_3;\n' + '  P_3 = ((uv * 0.75) + 0.2);\n' + '  tmpvar_2 = texture2D (sampler_fc_main, P_3);\n' + '  ret_1 = (tmpvar_2.xyz * 0.6);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = (1.0 - (uv.x * 0.8));\n' + '  tmpvar_4.y = (uv.y * 0.8);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_fc_main, tmpvar_4);\n' + '  ret_1 = (ret_1 + (tmpvar_5.xyz * 0.6));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur1, uv);\n' + '  ret_1 = (ret_1 + ((\n' + '    (tmpvar_6.xyz * scale1)\n' + '   + bias1) * 0.5));\n' + '  ret_1 = (((1.0/(\n' + '    (1.0 + exp2(((\n' + '      -(ret_1)\n' + '     * 3.5) + 3.0)))\n' + '  )) * 2.0) - 0.2);\n' + '  ret_1 = (ret_1 * 2.0);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('q1 = 1;'),
	'frame_eqs_str' : ('q1 = q1 * - above(bass, 2.3);\n' + 'rot = 0.6;\n' + 'monitor = q1;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
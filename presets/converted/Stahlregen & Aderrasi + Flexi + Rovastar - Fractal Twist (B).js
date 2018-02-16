define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 3.209,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.64,
		echo_alpha : 0.0,
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
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.00016,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.27,
		warpanimspeed : 2.63,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.96,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 0.5,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.1,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.tg3 = 0;
m.six = 0;
m.vtime = 0;
m.dx_r = 0;
m.dy_r = 0;
m.dm = 0;
m.dt = 0;
m.vol = 0;
m.thresh = 0;
m.tg1 = 0;
m.db = 0;
m.tg2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.db = ((m.db*0.8)+(m.bass*0.2));
m.dt = ((m.dt*0.8)+(m.treb*0.2));
m.dm = ((m.dm*0.8)+(m.mid*0.2));
m.vol = (((m.db+m.dt)+m.dm)*0.2);
m.vol = (m.vol*m.vol);
m.vtime = (m.vtime+(0.03*m.vol));
m.monitor = m.vtime;
m.wave_r = (0.5+(0.5*Math.sin((1.6*m.vtime))));
m.wave_g = (0.5+(0.5*Math.sin((4.1*m.vtime))));
m.wave_b = (-1+(((1-m.wave_r)+1)-m.wave_g));
m.warp = 2;
m.ob_r = (m.ob_r+(m.wave_b*above(Math.sin((0.1*m.vtime)), 0)));
m.ob_b = (m.ob_b+(m.wave_g*above(Math.sin((0.1*m.vtime)), 0)));
m.ob_g = (m.ob_g+(m.wave_r*above(Math.sin((0.1*m.vtime)), 0)));
m.ob_r = (m.ob_r+(m.wave_g*below(Math.sin((0.1*m.vtime)), 0)));
m.ob_b = (m.ob_b+(m.wave_r*below(Math.sin((0.1*m.vtime)), 0)));
m.ob_g = (m.ob_g+(m.wave_b*below(Math.sin((0.1*m.vtime)), 0)));
		m.rkeys = ['tg3','dx_r','dy_r','zoom','dx','dy','rot','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.05)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.056)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.tg1 = Math.abs(Math.sin(m.time));
m.tg2 = ((((22*above(m.tg1, 0.75))+(12*below(m.tg1, 0.25)))+((18*above(m.tg1, 0.25))*below(m.tg1, 0.5)))+((12*above(m.tg1, 0.5))*below(m.tg1, 0.75)));
m.tg3 = ifcond(equal(m.thresh, 2), m.tg2, m.tg3);
m.six = Math.sin(m.x);
m.dx = (m.dx+((m.dx_r*Math.sin(Math.abs((m.tg3*m.y))))*Math.sin(m.time)));
m.dy = (m.dy+((m.dy_r*Math.sin(Math.abs((m.tg3*m.x))))*Math.cos(m.time)));
m.dx = (m.dx+((m.dx_r*pow(m.rad, (m.y*2)))*Math.sin(m.time)));
m.dy = (m.dy+((m.dy_r*pow(m.rad, (m.x*2)))*Math.sin(m.time)));
m.zoom = (m.zoom-((0.0825*pow(m.rad, (m.x*6)))*Math.cos((m.ang*6))));
m.rot = (m.rot-((0.0525*(((0.75*Math.sin((1.25*m.time)))*pow(m.rad, m.x))*Math.sin((1.45*m.time))))*Math.sin(m.time)));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.2,
			scaling : 0.44665,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
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
			enabled : 1.0,
			b : 1.0,
			g : 0.0,
			scaling : 2.0231,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.d = 0;
m.t8 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = ['d','t1','t2','t3'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t8 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.t3 = ((m.t3*0.6)+(m.value1*1));
m.t2 = ((m.t2*0.7)+(m.t3*0.2));
m.t1 = ((m.t1*0.8)+(m.t2*0.1));
m.d = ((m.d*0.9)+(m.t1*0.2));
m.y = (0.5+((m.d*m.sample)*(1-m.sample)));
m.x = (0.2+(m.sample*0.6));
m.t8 = 0;
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('t8 = 1;'),
		'point_eqs_str' : ('t3 = t3*0.6 + (value1)*1;\n' + 't2 = t2*0.7 + t3*0.2;\n' + 't1 = t1*0.8 + t2*0.1;\n' + 'd = d*0.9 + t1*0.2;\n' + 'y = 0.5 + d*sample*(1-sample);\n' + 'x =  .2 + sample*0.6;\n' + 't8 = 0;'),

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
			a : 0.5,
			enabled : 1.0,
			b : 0.4,
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
			a2 : 0.2,
			r : 1.0,
			border_g : 1.0,
			rad : 0.2,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.4);
m.x = ((0.5+(0.3*Math.cos((m.time*1.23))))+(0.03*Math.cos((m.time*0.7))));
m.y = ((0.5+(0.3*Math.sin((m.time*1.43))))+(0.03*Math.sin((m.time*0.7))));
m.r = (0.5+(0.5*Math.sin(((m.q8*0.613)+1))));
m.g = (0.5+(0.5*Math.sin(((m.q8*0.763)+2))));
m.b = (0.5+(0.5*Math.sin(((m.q8*0.771)+5))));
m.r2 = (0.5+(0.5*Math.sin(((m.q8*0.635)+4))));
m.g2 = (0.5+(0.5*Math.sin(((m.q8*0.616)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.q8*0.538)+3))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time*0.4;\n' + 'x = 0.5 + 0.3*cos(time*1.23) + 0.03*cos(time*0.7);\n' + 'y = 0.5 + 0.3*sin(time*1.43) + 0.03*sin(time*0.7);\n' + 'r =0.5 + 0.5*sin(q8*0.613 + 1);\n' + 'g = 0.5 + 0.5*sin(q8*0.763 + 2);\n' + 'b = 0.5 + 0.5*sin(q8*0.771 + 5);\n' + 'r2 = 0.5 + 0.5*sin(q8*0.635 + 4);\n' + 'g2 = 0.5 + 0.5*sin(q8*0.616+ 1);\n' + 'b2 = 0.5 + 0.5*sin(q8*0.538 + 3);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.5,
			enabled : 1.0,
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
			a2 : 0.2,
			r : 1.0,
			border_g : 1.0,
			rad : 0.2,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.4);
m.x = ((0.5+(0.3*Math.cos((m.time*1.104))))+(0.03*Math.cos((m.time*0.7))));
m.y = ((0.5+(0.3*Math.sin((m.time*1.27))))+(0.03*Math.sin((m.time*0.7))));
m.r = (0.5+(0.5*Math.sin(((m.q8*0.613)+1))));
m.g = (0.5+(0.5*Math.sin(((m.q8*0.763)+2))));
m.b = (0.5+(0.5*Math.sin(((m.q8*0.771)+5))));
m.r2 = (0.5+(0.5*Math.sin(((m.q8*0.635)+4))));
m.g2 = (0.5+(0.5*Math.sin(((m.q8*0.616)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.q8*0.538)+3))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time*0.4;\n' + 'x = 0.5 + 0.3*cos(time*1.104) + 0.03*cos(time*0.7);\n' + 'y = 0.5 + 0.3*sin(time*1.27) + 0.03*sin(time*0.7);\n' + 'r =0.5 + 0.5*sin(q8*0.613 + 1);\n' + 'g = 0.5 + 0.5*sin(q8*0.763 + 2);\n' + 'b = 0.5 + 0.5*sin(q8*0.771 + 5);\n' + 'r2 = 0.5 + 0.5*sin(q8*0.635 + 4);\n' + 'g2 = 0.5 + 0.5*sin(q8*0.616+ 1);\n' + 'b2 = 0.5 + 0.5*sin(q8*0.538 + 3);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.5,
			enabled : 1.0,
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
			a2 : 0.2,
			r : 1.0,
			border_g : 1.0,
			rad : 0.2,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.4);
m.x = ((0.5+(0.3*Math.cos((m.time*1.23))))+(0.03*Math.cos((m.time*0.9))));
m.y = ((0.5+(0.3*Math.sin((m.time*1.18))))+(0.03*Math.sin((m.time*0.9))));
m.r = (0.5+(0.5*Math.sin(((m.q8*0.413)+1))));
m.g = (0.5+(0.5*Math.sin(((m.q8*0.363)+2))));
m.b = (0.5+(0.5*Math.sin(((m.q8*0.871)+5))));
m.r2 = (0.5+(0.5*Math.sin(((m.q8*0.835)+4))));
m.g2 = (0.5+(0.5*Math.sin(((m.q8*0.686)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.q8*0.938)+3))));
m.sides = 360;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time*0.4;\n' + 'x = 0.5 + 0.3*cos(time*1.23) + 0.03*cos(time*0.9);\n' + 'y = 0.5 + 0.3*sin(time*1.18) + 0.03*sin(time*0.9);\n' + 'r =0.5 + 0.5*sin(q8*0.413 + 1);\n' + 'g = 0.5 + 0.5*sin(q8*0.363 + 2);\n' + 'b = 0.5 + 0.5*sin(q8*0.871 + 5);\n' + 'r2 = 0.5 + 0.5*sin(q8*0.835 + 4);\n' + 'g2 = 0.5 + 0.5*sin(q8*0.686+ 1);\n' + 'b2 = 0.5 + 0.5*sin(q8*0.938 + 3);\n' + 'sides = 360;'),

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
	'warp' : ('shader_body {\n' + '   vec2 my_uv2_1;\n' + '   vec2 my_uv_2;\n' + '   vec3 ret_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = ((uv - 0.5) * vec2(2.9, 2.9));\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = ((tmpvar_4.x * tmpvar_4.x) - (tmpvar_4.y * tmpvar_4.y));\n' + '  tmpvar_5.y = ((2.0 * tmpvar_4.x) * tmpvar_4.y);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = -((tmpvar_5.y * 2.0));\n' + '  tmpvar_6.y = (tmpvar_5.x * 2.0);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7.x = ((tmpvar_5.x * (tmpvar_6.x + 1.0)) + (tmpvar_5.y * tmpvar_6.y));\n' + '  tmpvar_7.y = ((tmpvar_5.y * (tmpvar_6.x + 1.0)) - (tmpvar_5.x * tmpvar_6.y));\n' + '  my_uv_2 = (tmpvar_7 * (1.0/((\n' + '    ((tmpvar_6.x + 1.0) * (tmpvar_6.x + 1.0))\n' + '   + \n' + '    (tmpvar_6.y * tmpvar_6.y)\n' + '  ))));\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = ((uv_orig - 0.5) * vec2(1.84, 1.84));\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9.x = ((tmpvar_8.x * tmpvar_8.x) - (tmpvar_8.y * tmpvar_8.y));\n' + '  tmpvar_9.y = ((2.0 * tmpvar_8.x) * tmpvar_8.y);\n' + '  my_uv2_1 = (tmpvar_9 + vec2(0.2806, 0.4508));\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (my_uv_2 - floor(my_uv_2));\n' + '  tmpvar_10 = texture2D (sampler_fw_main, P_11);\n' + '  ret_3.z = ((tmpvar_10.z * 0.9) - 0.04);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_fc_main, my_uv2_1);\n' + '  ret_3.x = (tmpvar_12.x - 0.008);\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = mix (my_uv_2, my_uv2_1, vec2(0.8, 0.8));\n' + '  my_uv_2 = tmpvar_13;\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (tmpvar_13 - floor(tmpvar_13));\n' + '  tmpvar_14 = texture2D (sampler_fw_main, P_15);\n' + '  ret_3.y = ((tmpvar_14.y * 0.9) - 0.004);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2.x = (1.0 - _qa.w);\n' + '  tmpvar_2.y = _qb.w;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (tmpvar_2 + ((uv - tmpvar_2) * 0.992));\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (tmpvar_2 + ((uv - tmpvar_2) * 0.996));\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = mix (vec3(0.0, 0.0, 0.2), vec3(0.3, 0.0, 1.0), texture2D (sampler_fw_main, tmpvar_3).yyy);\n' + '  ret_1 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur1, tmpvar_3);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_main, tmpvar_4);\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_blur1, tmpvar_3);\n' + '  ret_1 = (mix (ret_1, vec3(1.0, 1.0, 0.0), vec3(max (\n' + '    (((tmpvar_6.xyz * scale1) + bias1).z * 1.5)\n' + '  , tmpvar_7.z))) * (1.0 - (\n' + '    ((tmpvar_8.xyz * scale1) + bias1)\n' + '  .x * 2.0)));\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_fw_main, uv).xxx;\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = mix (ret_1, vec3(1.0, 0.1, 0.4), tmpvar_9);\n' + '  ret_1 = tmpvar_10;\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11.w = 1.0;\n' + '  tmpvar_11.xyz = tmpvar_10;\n' + '  vec4 ret4 = tmpvar_11;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('db = db*0.8 + bass*0.2;\n' + 'dt = dt*0.8 + treb*0.2;\n' + 'dm = dm*0.8 + mid*0.2;\n' + 'vol = (db+dt+dm)*.2;\n' + 'vol = vol*vol;\n' + 'vtime = vtime + .03*vol;\n' + 'monitor = vtime;\n' + 'wave_r = 0.5 + 0.5*sin(1.6*vtime);\n' + 'wave_g = 0.5 + 0.5*sin(4.1*vtime);\n' + 'wave_b = -1 + (1-wave_r + 1-wave_g);\n' + 'warp = 2;\n' + 'ob_r = ob_r+wave_b*above(sin(0.1*vtime),0);\n' + 'ob_b = ob_b+wave_g*above(sin(0.1*vtime),0);\n' + 'ob_g = ob_g+wave_r*above(sin(0.1*vtime),0);\n' + 'ob_r = ob_r+wave_g*below(sin(0.1*vtime),0);\n' + 'ob_b = ob_b+wave_r*below(sin(0.1*vtime),0);\n' + 'ob_g = ob_g+wave_b*below(sin(0.1*vtime),0);'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.05*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.056*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'tg1 = abs(sin(time));\n' + 'tg2 = 22*above(tg1,0.75) + 12*below(tg1,0.25) + 18*above(tg1,0.25)*below(tg1,0.5)+12*above(tg1,0.5)*below(tg1,0.75);\n' + 'tg3 = if(equal(thresh,2),tg2,tg3);\n' + 'six = sin(x);\n' + 'dx = dx + dx_r*sin(abs(tg3*y))*sin(time);\n' + 'dy = dy + dy_r*sin(abs(tg3*x))*cos(time);\n' + 'dx = dx + dx_r*pow(rad,y*2)*sin(time);\n' + 'dy = dy + dy_r*pow(rad,x*2)*sin(time);\n' + 'zoom = zoom - 0.0825*pow(rad,x*6)*cos(ang*6);\n' + 'rot = rot - 0.0525*(0.75*sin(1.25*time)*pow(rad,x)*sin(1.45*time))*sin(time);'),
};

return pmap;
});
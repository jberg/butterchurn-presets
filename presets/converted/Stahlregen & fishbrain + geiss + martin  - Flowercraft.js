define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.2,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.286,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 0.99999,
		ob_r : 0.0,
		sy : 0.99999,
		b3x : 1.0,
		ib_size : 0.075,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.3106,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.2,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9803,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.65,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 1.0,
		cy : 0.35,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.05,
		wave_b : 0.65,
		ib_b : 0.2,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q30 = 0;
m.q31 = 0;
m.q32 = 0;
m.treb_mem = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.treb_mem = ((0.25*m.treb_mem)+(0.25*m.treb_att));
m.wave_r = (0.7+(0.4*Math.sin(((m.time+m.treb_mem)*0.133))));
m.wave_g = (0.7+(0.4*Math.sin(((m.time+m.treb_mem)*0.2333))));
m.wave_b = (0.7+(0.4*Math.cos(((m.time+m.treb_mem)*0.3533))));
m.ib_r = m.wave_r;
m.ib_g = m.wave_g;
m.ib_b = m.wave_b;
m.q32 = m.wave_r;
m.q31 = m.wave_g;
m.q30 = m.wave_b;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.ma = 0;

			m.rkeys = ['my','mx','ma'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ma = (m.ma+(((above(m.bass, 1)*3.1415)*0.01)*m.bass));
m.ma = (m.ma-(((above(m.treb, 1)*3.1415)*0.01)*m.treb));
m.mx = (m.mx+(0.0002*Math.cos(m.ma)));
m.my = (m.my+(0.0002*Math.sin(m.ma)));
m.mx = ifcond(above(m.mx, 0.9), (0.9-m.mx), m.mx);
m.my = ifcond(above(m.my, 0.9), (0.9-m.my), m.my);
m.mx = ifcond(below(m.mx, 0.1), (0.9+m.mx), m.mx);
m.my = ifcond(below(m.my, 0.1), (0.9+m.my), m.my);
m.x = m.mx;
m.y = m.my;
m.a = above(((m.bass+m.mid)+m.treb), 0.8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ma=ma+(above(bass,1)*3.1415*.01*bass);\n' + 'ma=ma-(above(treb,1)*3.1415*.01*treb);\n' + 'mx=mx+(.0002*cos(ma));\n' + 'my=my+(.0002*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.8));'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.ma = 0;

			m.rkeys = ['my','mx','ma'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ma = (m.ma+(((above(m.bass, 1)*3.1415)*0.05)*m.bass));
m.ma = (m.ma-(((above(m.mid, 1)*3.1415)*0.05)*m.mid));
m.mx = (m.mx+(0.0001*Math.cos(m.ma)));
m.my = (m.my+(0.0001*Math.sin(m.ma)));
m.mx = ifcond(above(m.mx, 0.9), (0.9-m.mx), m.mx);
m.my = ifcond(above(m.my, 0.9), (0.9-m.my), m.my);
m.mx = ifcond(below(m.mx, 0.1), (0.9+m.mx), m.mx);
m.my = ifcond(below(m.my, 0.1), (0.9+m.my), m.my);
m.x = m.mx;
m.y = m.my;
m.a = above(((m.bass+m.mid)+m.treb), 0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ma=ma+(above(bass,1)*3.1415*.05*bass);\n' + 'ma=ma-(above(mid,1)*3.1415*.05*mid);\n' + 'mx=mx+(.0001*cos(ma));\n' + 'my=my+(.0001*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.1));'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.ma = 0;

			m.rkeys = ['my','mx','ma'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ma = (m.ma+(((above(m.mid, 1)*3.1415)*0.01)*m.mid));
m.ma = (m.ma-(((above(m.treb, 1)*3.1415)*0.01)*m.treb));
m.mx = (m.mx+(0.0004*Math.cos(m.ma)));
m.my = (m.my+(0.0004*Math.sin(m.ma)));
m.mx = ifcond(above(m.mx, 0.9), (0.9-m.mx), m.mx);
m.my = ifcond(above(m.my, 0.9), (0.9-m.my), m.my);
m.mx = ifcond(below(m.mx, 0.1), (0.9+m.mx), m.mx);
m.my = ifcond(below(m.my, 0.1), (0.9+m.my), m.my);
m.x = m.mx;
m.y = m.my;
m.a = above(((m.bass+m.mid)+m.treb), 0.3);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ma=ma+(above(mid,1)*3.1415*.01*mid);\n' + 'ma=ma-(above(treb,1)*3.1415*.01*treb);\n' + 'mx=mx+(.0004*cos(ma));\n' + 'my=my+(.0004*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.3));'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.ma = 0;

			m.rkeys = ['my','mx','ma'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ma = (m.ma+(((above(m.bass, 0.5)*3.1415)*0.02)*m.bass));
m.ma = (m.ma-(((above(m.treb, 0.5)*3.1415)*0.02)*m.treb));
m.mx = (m.mx+(0.0008*Math.cos(m.ma)));
m.my = (m.my+(0.0008*Math.sin(m.ma)));
m.mx = ifcond(above(m.mx, 0.9), (0.9-m.mx), m.mx);
m.my = ifcond(above(m.my, 0.9), (0.9-m.my), m.my);
m.mx = ifcond(below(m.mx, 0.1), (0.9+m.mx), m.mx);
m.my = ifcond(below(m.my, 0.1), (0.9+m.my), m.my);
m.x = m.mx;
m.y = m.my;
m.a = above(((m.bass+m.mid)+m.treb), 0.2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ma=ma+(above(bass,.5)*3.1415*.02*bass);\n' + 'ma=ma-(above(treb,.5)*3.1415*.02*treb);\n' + 'mx=mx+(.0008*cos(ma));\n' + 'my=my+(.0008*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.2));'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.62832,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.79142,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = dot (texsize.zw, texsize.zw);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (uv - 0.5);\n' + '  P_4 = ((tmpvar_6 * (1.0 - \n' + '    (8.0 * sqrt(tmpvar_5))\n' + '  )) + 0.5);\n' + '  tmpvar_3 = texture2D (sampler_main, P_4);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = ((tmpvar_6 * (1.0 + \n' + '    (8.0 * sqrt(tmpvar_5))\n' + '  )) + 0.5);\n' + '  tmpvar_7 = texture2D (sampler_main, P_8);\n' + '  ret_1 = (max (max (ret_1, tmpvar_3.xyz), tmpvar_7.xyz) - 0.024);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9.w = 1.0;\n' + '  tmpvar_9.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_9;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 noise_2;\n' + '   vec3 ret1_3;\n' + '   vec2 uv2_4;\n' + '  uv_1 = (uv - 0.5);\n' + '  uv_1 = (uv_1 * aspect.xy);\n' + '  ret1_3 = vec3(0.0, 0.0, 0.0);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 0.0;\n' + '  tmpvar_5.xyz = ret1_3;\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = (0.1 * _qa.x);\n' + '  P_7 = ((uv_1 + 0.5) + tmpvar_8);\n' + '  tmpvar_6 = texture2D (sampler_main, P_7);\n' + '  ret1_3 = max (tmpvar_5, tmpvar_6).xyz;\n' + '  uv2_4.x = ((uv_1.x * 0.3096228) - (uv_1.y * 0.9508595));\n' + '  uv2_4.y = ((uv_1.x * 0.9508595) + (uv_1.y * 0.3096228));\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9.w = 0.0;\n' + '  tmpvar_9.xyz = ret1_3;\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = ((uv2_4 + 0.5) + tmpvar_8);\n' + '  tmpvar_10 = texture2D (sampler_main, P_11);\n' + '  ret1_3 = max (tmpvar_9, tmpvar_10).xyz;\n' + '  uv2_4.x = ((uv_1.x * -0.8082675) - (uv_1.y * 0.5888155));\n' + '  uv2_4.y = ((uv_1.x * 0.5888155) + (uv_1.y * -0.8082675));\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12.w = 0.0;\n' + '  tmpvar_12.xyz = ret1_3;\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = ((uv2_4 + 0.5) + tmpvar_8);\n' + '  tmpvar_13 = texture2D (sampler_main, P_14);\n' + '  ret1_3 = max (tmpvar_12, tmpvar_13).xyz;\n' + '  uv2_4.x = ((uv_1.x * -0.8101388) - (uv_1.y * -0.5862381));\n' + '  uv2_4.y = ((uv_1.x * -0.5862381) + (uv_1.y * -0.8101388));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 0.0;\n' + '  tmpvar_15.xyz = ret1_3;\n' + '   vec4 tmpvar_16;\n' + '   vec2 P_17;\n' + '  P_17 = ((uv2_4 + 0.5) + tmpvar_8);\n' + '  tmpvar_16 = texture2D (sampler_main, P_17);\n' + '  ret1_3 = max (tmpvar_15, tmpvar_16).xyz;\n' + '  uv2_4.x = ((uv_1.x * 0.3065926) - (uv_1.y * -0.9518408));\n' + '  uv2_4.y = ((uv_1.x * -0.9518408) + (uv_1.y * 0.3065926));\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18.w = 0.0;\n' + '  tmpvar_18.xyz = ret1_3;\n' + '   vec4 tmpvar_19;\n' + '   vec2 P_20;\n' + '  P_20 = ((uv2_4 + 0.5) + tmpvar_8);\n' + '  tmpvar_19 = texture2D (sampler_main, P_20);\n' + '  ret1_3 = max (tmpvar_18, tmpvar_19).xyz;\n' + '  uv2_4.x = ((uv_1.x * 0.9999949) - (uv_1.y * -0.003185092));\n' + '  uv2_4.y = ((uv_1.x * -0.003185092) + (uv_1.y * 0.9999949));\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21.w = 0.0;\n' + '  tmpvar_21.xyz = ret1_3;\n' + '   vec4 tmpvar_22;\n' + '   vec2 P_23;\n' + '  P_23 = ((uv2_4 + 0.5) + tmpvar_8);\n' + '  tmpvar_22 = texture2D (sampler_main, P_23);\n' + '  ret1_3 = max (tmpvar_21, tmpvar_22).xyz;\n' + '  ret1_3 = ((ret1_3 - (rad / 2.0)) * (1.0 + (slow_roam_cos.xyz / 2.0)));\n' + '   vec2 P_24;\n' + '  P_24 = ((uv_1 * 8.0) + (dot (ret1_3, vec3(0.32, 0.49, 0.29)) / 8.0));\n' + '   vec3 tmpvar_25;\n' + '  tmpvar_25 = (texture2D (sampler_noise_hq, P_24) + 0.15).xyz;\n' + '  noise_2 = tmpvar_25;\n' + '   vec3 tmpvar_26;\n' + '  tmpvar_26 = max ((ret1_3 * _qh.wzy), ((\n' + '    ((hue_shader * 4.0) - 2.8)\n' + '   * \n' + '    dot (noise_2, vec3(0.32, 0.49, 0.29))\n' + '  ) / 6.0));\n' + '  ret1_3 = tmpvar_26;\n' + '   vec4 tmpvar_27;\n' + '  tmpvar_27.w = 1.0;\n' + '  tmpvar_27.xyz = ((tmpvar_26 * 2.25) - 0.05);\n' + '  vec4 ret4 = tmpvar_27;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('treb_mem = 0.25*treb_mem+.25*treb_att;\n' + 'wave_r = 0.7 + 0.4*sin((time+treb_mem)*0.133);\n' + 'wave_g = 0.7 + 0.4*sin((time+treb_mem)*0.2333);\n' + 'wave_b = 0.7 + 0.4*cos((time+treb_mem)*0.3533);\n' + 'ib_r = wave_r;\n' + 'ib_g = wave_g;\n' + 'ib_b = wave_b;\n' + 'q32 = wave_r;\n' + 'q31 = wave_g;\n' + 'q30 = wave_b;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
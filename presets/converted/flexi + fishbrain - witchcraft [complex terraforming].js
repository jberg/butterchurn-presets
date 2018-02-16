define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.28,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 1.286,
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
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 3.04777,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.0,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0173,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.8,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.translation_u = 0;
m.c_inv_r = 0;
m.translation_v = 0;
m.scale = 0;
m.translation_x = 0;
m.a_i = 0;
m.translation_y = 0;
m.b_i = 0;
m.bcad_i = 0;
m.q11 = 0;
m.q12 = 0;
m.angle = 0;
m.q13 = 0;
m.a_r = 0;
m.q14 = 0;
m.q15 = 0;
m.b_r = 0;
m.q16 = 0;
m.q17 = 0;
m.bcad_r = 0;
m.q18 = 0;
m.c_inv_i = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = 1;
m.scale = ((0.5+(m.bass_att*0.02))-(m.treb_att*0.01));
m.angle = (m.time*0.1);
m.translation_x = 0;
m.translation_y = 0.04;
m.a_r = (Math.cos(m.angle)*m.scale);
m.a_i = (Math.sin(m.angle)*m.scale);
m.b_r = m.translation_x;
m.b_i = m.translation_y;
m.scale = 1;
m.angle = (Math.sin((m.time*0.4))*0.2);
m.translation_u = 0;
m.translation_v = -0.2;
m.q15 = (Math.cos(m.angle)*m.scale);
m.q16 = (Math.sin(m.angle)*m.scale);
m.q17 = m.translation_u;
m.q18 = m.translation_v;
m.c_inv_r = div(m.q15,((m.q15*m.q15)+(m.q16*m.q16)));
m.c_inv_i = div(m.q16,((m.q15*m.q15)+(m.q16*m.q16)));
m.q11 = ((m.a_r*m.c_inv_r)-(m.a_i*m.c_inv_i));
m.q12 = ((m.a_r*m.c_inv_i)-(m.a_i*m.c_inv_r));
m.bcad_r = (((m.b_r*m.q15)-(m.b_i*m.q16))-((m.a_r*m.q17)-(m.a_i*m.q18)));
m.bcad_i = (((m.b_r*m.q16)-(m.b_i*m.q15))-((m.a_r*m.q18)-(m.a_i*m.q17)));
m.q13 = ((m.bcad_r*m.c_inv_r)-(m.bcad_i*m.c_inv_i));
m.q14 = ((m.bcad_r*m.c_inv_i)-(m.bcad_i*m.c_inv_r));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
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
			b : 0.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
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
			g : 0.0,
			scaling : 1.0,
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
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
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
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 4.36077,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.11589,
			x : 0.49,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 1.0,
			num_inst : 2.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = div(rand(1000),1000);
m.y = div(rand(1000),1000);
m.ang = div(rand(150),100);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = rand(1000)/1000;\n' + 'y = rand(1000)/1000;\n' + 'ang = rand(150)/100;'),

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = mix (uv_orig, uv, vec2(0.2, 0.2));\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (texsize.zw * 2.0);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (tmpvar_2 + (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (tmpvar_2 - (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = (((tmpvar_4.xyz * scale1) + bias1) - ((tmpvar_6.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (tmpvar_2 + (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (tmpvar_2 - (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = (((tmpvar_9.xyz * scale1) + bias1) - ((tmpvar_11.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = tmpvar_8.x;\n' + '  tmpvar_14.y = tmpvar_13.x;\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (tmpvar_2 + ((tmpvar_14 * texsize.zw) * 4.0));\n' + '  tmpvar_15 = texture2D (sampler_fc_main, P_16);\n' + '  ret_1.x = tmpvar_15.x;\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = tmpvar_8.y;\n' + '  tmpvar_17.y = tmpvar_13.y;\n' + '   vec4 tmpvar_18;\n' + '   vec2 P_19;\n' + '  P_19 = (tmpvar_2 + ((tmpvar_17 * texsize.zw) * 4.0));\n' + '  tmpvar_18 = texture2D (sampler_fc_main, P_19);\n' + '  ret_1.y = tmpvar_18.y;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20.x = tmpvar_8.z;\n' + '  tmpvar_20.y = tmpvar_13.z;\n' + '   vec4 tmpvar_21;\n' + '   vec2 P_22;\n' + '  P_22 = (tmpvar_2 + ((tmpvar_20 * texsize.zw) * 4.0));\n' + '  tmpvar_21 = texture2D (sampler_fc_main, P_22);\n' + '  ret_1.z = tmpvar_21.z;\n' + '  ret_1 = (ret_1 - ((\n' + '    (ret_1.yzx + ret_1.zxy)\n' + '   * 0.16) + 0.002));\n' + '   vec2 tmpvar_23;\n' + '  tmpvar_23 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 1.2)) + rand_frame.xy);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_noise_lq, tmpvar_23);\n' + '  ret_1 = (ret_1 + ((tmpvar_24.xyz - 0.5) * 0.04));\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25.w = 1.0;\n' + '  tmpvar_25.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_25;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec2 moebius_2;\n' + '   vec2 d_3;\n' + '   vec3 ret_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (uv - 0.5);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = ((tmpvar_5.x * _qd.z) - (tmpvar_5.y * _qd.w));\n' + '  tmpvar_6.y = ((tmpvar_5.x * _qd.w) - (tmpvar_5.y * _qd.z));\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (tmpvar_6 + _qe.xy);\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8.x = ((_qd.x * tmpvar_7.x) + (_qd.y * tmpvar_7.y));\n' + '  tmpvar_8.y = ((_qd.y * tmpvar_7.x) - (_qd.x * tmpvar_7.y));\n' + '  moebius_2 = (0.5 + ((\n' + '    (1.0 - abs(((\n' + '      fract((((tmpvar_8 / \n' + '        ((tmpvar_7.x * tmpvar_7.x) + (tmpvar_7.y * tmpvar_7.y))\n' + '      ) + _qc.zw) * 0.5))\n' + '     * 2.0) - 1.0)))\n' + '   - 0.5) * 0.99));\n' + '  d_3 = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (moebius_2 + (vec2(1.0, 0.0) * d_3));\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (moebius_2 - (vec2(1.0, 0.0) * d_3));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (moebius_2 + (vec2(0.0, 1.0) * d_3));\n' + '  tmpvar_13 = texture2D (sampler_blur1, P_14);\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (moebius_2 - (vec2(0.0, 1.0) * d_3));\n' + '  tmpvar_15 = texture2D (sampler_blur1, P_16);\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = dot (((\n' + '    (tmpvar_9.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_11.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_17.y = dot (((\n' + '    (tmpvar_13.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_15.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '  uv_1 = (moebius_2 - ((tmpvar_17 * texsize.zw) * 32.0));\n' + '   vec3 tmpvar_18;\n' + '  tmpvar_18 = mix ((vec3(0.8, 0.6, 0.5) * texture2D (sampler_fc_main, uv_1).x), mix (vec3(0.6, 1.2, 0.0), vec3(-1.0, 0.8, -1.0), texture2D (sampler_main, uv_1).zzz), vec3((texture2D (sampler_main, uv_1).y * 0.4)));\n' + '  ret_4 = tmpvar_18;\n' + '   vec3 tmpvar_19;\n' + '  tmpvar_19 = vec3(((texture2D (sampler_main, uv_1).z * (1.0 - texture2D (sampler_main, uv_1).y)) * 2.0));\n' + '   vec3 tmpvar_20;\n' + '  tmpvar_20 = mix (ret_4, vec3(0.0, 0.15, 0.3), tmpvar_19);\n' + '  ret_4 = tmpvar_20;\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21.w = 1.0;\n' + '  tmpvar_21.xyz = tmpvar_20;\n' + '  vec4 ret4 = tmpvar_21;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('zoom = 1;\n' + 'scale = 0.5 + bass_att*0.02-treb_att*0.01;\n' + 'angle = time*0.1;\n' + 'translation_x = 0;\n' + 'translation_y = 0.04;\n' + 'a_r = cos(angle)*scale;\n' + 'a_i = sin(angle)*scale;\n' + 'b_r = translation_x;\n' + 'b_i = translation_y;\n' + 'scale = 1;\n' + 'angle = sin(time*0.4)*0.2;\n' + 'translation_u = 0;\n' + 'translation_v = -0.2;\n' + 'q15 = cos(angle)*scale;\n' + 'q16 = sin(angle)*scale;\n' + 'q17 = translation_u;\n' + 'q18 = translation_v;\n' + 'c_inv_r = q15/(q15*q15+q16*q16);\n' + 'c_inv_i = q16/(q15*q15+q16*q16);\n' + 'q11 = (a_r*c_inv_r - a_i*c_inv_i);\n' + 'q12 = (a_r*c_inv_i - a_i*c_inv_r);\n' + 'bcad_r = (b_r*q15 - b_i*q16)-(a_r*q17-a_i*q18);\n' + 'bcad_i = (b_r*q16 - b_i*q15)-(a_r*q18-a_i*q17);\n' + 'q13 = bcad_r*c_inv_r - bcad_i*c_inv_i;\n' + 'q14 = bcad_r*c_inv_i - bcad_i*c_inv_r;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
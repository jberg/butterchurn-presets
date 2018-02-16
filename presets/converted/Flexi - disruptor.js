define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.56,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.286,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 0.99967,
		ob_r : 0.0,
		sy : 0.9999,
		b3x : 1.0,
		ib_size : 0.005,
		b2x : 1.0,
		warp : 0.19788,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 1.0,
		ib_r : 1.0,
		mv_b : 1.0,
		echo_zoom : 0.362,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0039,
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
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 1.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.tt = 0;
m.mn = 0;
m.mx = 0;
m.n = 0;
m.angle = 0;
m.t = 0;
m.v = 0;
m.y1 = 0;
m.x1 = 0;
m.dy1 = 0;
m.dx1 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.warp = 0;
m.zoom = 1.0;
m.bb = ((m.bb*0.99)+(m.bass*0.02));
m.mm = ((m.mm*0.99)+(m.mid*0.02));
m.tt = ((m.tt*0.99)+(m.treb*0.02));
m.mx = Math.max(Math.max(m.bb, m.mm), m.tt);
m.mn = Math.min(Math.min(m.bb, m.mm), m.tt);
m.ib_r = div((m.bb-m.mn),(m.mx-m.mn));
m.ib_b = div((m.mm-m.mn),(m.mx-m.mn));
m.ib_g = div((m.tt-m.mn),(m.mx-m.mn));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.angle = (Math.asin(1)*(0.5+Math.sin((m.time*0.05))));
m.x1 = ((m.x-0.5)*m.aspectx);
m.y1 = ((m.y-0.5)*m.aspecty);
m.x = ((Math.cos(-m.angle)*m.x1)-(Math.sin(-m.angle)*m.y1));
m.y = ((Math.sin(-m.angle)*m.x1)+(Math.cos(-m.angle)*m.y1));
m.t = (m.time*0.25);
m.v = 0.0005;
m.n = 11;
m.dx = (m.v*Math.sin(((m.y*m.n)+m.t)));
m.dy = (m.v*Math.sin(((m.x*m.n)+m.t)));
m.dx1 = ((Math.cos(m.angle)*m.dx)-(Math.sin(m.angle)*m.dy));
m.dy1 = ((Math.sin(m.angle)*m.dx)+(Math.cos(m.angle)*m.dy));
m.dx = (m.dx1*m.aspectx);
m.dy = (m.dy1*m.aspecty);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.75,
			g : 0.3,
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
			enabled : 0.0,
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
			enabled : 0.0,
			b : 0.0,
			g : 0.5,
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
			enabled : 0.0,
			b : 0.6,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.4,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec3 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_pc_main, uv).xyz;\n' + '  ret_1 = tmpvar_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 dz_1;\n' + '   vec3 dy_2;\n' + '   vec3 dx_3;\n' + '   vec2 d_4;\n' + '   vec3 ret_5;\n' + '   vec2 P_6;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (vec2(1.0, 0.0) * texsize.zw);\n' + '  P_6 = (uv + tmpvar_7);\n' + '   vec2 P_8;\n' + '  P_8 = (uv - tmpvar_7);\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = (texture2D (sampler_main, P_6).xyz - texture2D (sampler_main, P_8).xyz);\n' + '  dx_3 = tmpvar_9;\n' + '   vec2 P_10;\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = (vec2(0.0, 1.0) * texsize.zw);\n' + '  P_10 = (uv + tmpvar_11);\n' + '   vec2 P_12;\n' + '  P_12 = (uv - tmpvar_11);\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = (texture2D (sampler_main, P_10).xyz - texture2D (sampler_main, P_12).xyz);\n' + '  dy_2 = tmpvar_13;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = dx_3.y;\n' + '  tmpvar_14.y = dy_2.y;\n' + '  d_4 = -(texsize.zw);\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (uv + (vec2(1.0, 0.0) * d_4));\n' + '  tmpvar_15 = texture2D (sampler_blur1, P_16);\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv - (vec2(1.0, 0.0) * d_4));\n' + '  tmpvar_17 = texture2D (sampler_blur1, P_18);\n' + '  dx_3 = (((2.0 * \n' + '    ((tmpvar_15.xyz * scale1) + bias1)\n' + '  ) - (2.0 * \n' + '    ((tmpvar_17.xyz * scale1) + bias1)\n' + '  )) * 0.5);\n' + '   vec4 tmpvar_19;\n' + '   vec2 P_20;\n' + '  P_20 = (uv + (vec2(0.0, 1.0) * d_4));\n' + '  tmpvar_19 = texture2D (sampler_blur1, P_20);\n' + '   vec4 tmpvar_21;\n' + '   vec2 P_22;\n' + '  P_22 = (uv - (vec2(0.0, 1.0) * d_4));\n' + '  tmpvar_21 = texture2D (sampler_blur1, P_22);\n' + '  dy_2 = (((2.0 * \n' + '    ((tmpvar_19.xyz * scale1) + bias1)\n' + '  ) - (2.0 * \n' + '    ((tmpvar_21.xyz * scale1) + bias1)\n' + '  )) * 0.5);\n' + '   vec2 tmpvar_23;\n' + '  tmpvar_23.x = dx_3.y;\n' + '  tmpvar_23.y = dy_2.y;\n' + '  dz_1 = ((tmpvar_14 * 3.0) + tmpvar_23);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_blur2, uv);\n' + '  ret_5 = (vec3(((\n' + '    pow ((sqrt(dot (dz_1, dz_1)) * 0.8), 0.7)\n' + '   + \n' + '    (((tmpvar_24.xyz * scale2) + bias2).y * 0.4)\n' + '  ) - 0.1)) * vec3(0.5, 0.5, 0.5));\n' + '   vec2 tmpvar_25;\n' + '  tmpvar_25.x = dx_3.x;\n' + '  tmpvar_25.y = dy_2.x;\n' + '   vec2 P_26;\n' + '  P_26 = (uv + ((tmpvar_25 * texsize.zw) * 18.0));\n' + '   vec3 tmpvar_27;\n' + '  tmpvar_27 = vec3((texture2D (sampler_main, P_26).x * 6.0));\n' + '   vec4 tmpvar_28;\n' + '  tmpvar_28 = texture2D (sampler_blur1, uv);\n' + '   vec3 tmpvar_29;\n' + '  tmpvar_29 = mix (mix (ret_5, vec3(0.05, 0.12, 0.0), tmpvar_27), vec3(4.0, 1.0, 0.0), vec3(((\n' + '    (tmpvar_28.xyz * scale1)\n' + '   + bias1).z * 0.1)));\n' + '  ret_5 = tmpvar_29;\n' + '   vec4 tmpvar_30;\n' + '  tmpvar_30.w = 1.0;\n' + '  tmpvar_30.xyz = tmpvar_29;\n' + '  vec4 ret4 = tmpvar_30;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_a = 0;\n' + 'warp = 0;\n' + 'zoom = 1.0;\n' + 'bb = bb*0.99 + bass*0.02;\n' + 'mm = mm*0.99 + mid*0.02;\n' + 'tt = tt*0.99 + treb*0.02;\n' + 'mx = max(max(bb,mm),tt);\n' + 'mn = min(min(bb,mm),tt);\n' + 'ib_r = (bb-mn)/(mx-mn);\n' + 'ib_b = (mm-mn)/(mx-mn);\n' + 'ib_g = (tt-mn)/(mx-mn);'),
	'pixel_eqs_str' : ('angle = asin(1)*(0.5+sin(time*0.05));\n' + 'X1 = (x-0.5)*aspectx;\n' + 'Y1 = (y-0.5)*aspecty;\n' + 'x = cos(-angle)*X1 -sin(-angle)*Y1;\n' + 'y = sin(-angle)*X1 +cos(-angle)*Y1;\n' + 't = time*0.25;\n' + 'v = 0.0005;\n' + 'n = 11;\n' + 'dx = v*sin(y*n+t);\n' + 'dy = v*sin(x*n+t);\n' + 'dx1 = cos(angle)*dx - sin(angle)*dy;\n' + 'dy1 = sin(angle)*dx + cos(angle)*dy;\n' + 'dx = dx1*aspectx;\n' + 'dy = dy1*aspecty;'),
};

return pmap;
});
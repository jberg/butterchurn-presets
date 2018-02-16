define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.56,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 25.6,
		warpscale : 0.107,
		brighten : 0.0,
		mv_y : 9.6,
		wave_scale : 0.653,
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
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 0.34421,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.362,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 2.78167,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.5,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.midif = 0;
m.midfix = 0;
m.q21 = 0;
m.q22 = 0;
m.q12 = 0;
m.q23 = 0;
m.q13 = 0;
m.q24 = 0;
m.q14 = 0;
m.q25 = 0;
m.q15 = 0;
m.q26 = 0;
m.bassfix = 0;
m.q16 = 0;
m.q27 = 0;
m.q17 = 0;
m.trebif = 0;
m.trebfix = 0;
m.bassif = 0;
m.q21 = div(1,Math.asin(1));
		return m;
	},
	'frame_eqs' : function(m) {
m.q21 = 0.5;
m.q22 = (0-Math.sin((m.time*0.5)));
m.q23 = 0;
m.q24 = 1;
m.q25 = div(0.5,Math.asin(1));
m.q26 = (m.time*0.3);
m.q27 = (-m.time*0.6);
m.bassfix = (0.05+(0.01*m.bass));
m.midfix = (0.05+(0.01*m.mid));
m.trebfix = (0.05+(0.01*m.treb));
m.bassif = ifcond(above(m.bass_att, 1), (m.bassif+m.bassfix), ifcond(above(m.bassif, 85), 0, (m.bassif*0.96)));
m.midif = ifcond(above(m.mid_att, 1), (m.midif+m.midfix), ifcond(above(m.midif, 0.85), 0, (m.midif*0.96)));
m.trebif = ifcond(above(m.treb_att, 1), (m.trebif+m.trebfix), ifcond(above(m.trebif, 0.85), 0, (m.trebif*0.96)));
m.q12 = m.bassif;
m.q13 = m.midif;
m.q14 = m.trebif;
m.q15 = Math.abs(Math.cos((m.bassif-m.time)));
m.q16 = Math.abs(Math.cos((m.midif-m.time)));
m.q17 = Math.abs(Math.cos((m.trebif-m.time)));
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
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.ma = 0;
m.bassc = 0;
m.bcount = 0;
			m.rkeys = ['my','mx','ma'];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (m.bass*0.5);
m.g = (m.treb*0.5);
m.b = (m.mid*0.5);
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
		'init_eqs_str' : ('bassc = 0;\n' + 'bcount = 0;'),
		'frame_eqs_str' : ('r=bass*.5;\n' + 'g=treb*.5;\n' + 'b=mid*.5;'),
		'point_eqs_str' : ('ma=ma+(above(bass,1)*3.1415*.01*bass);\n' + 'ma=ma-(above(treb,1)*3.1415*.01*treb);\n' + 'mx=mx+(.0002*cos(ma));\n' + 'my=my+(.0002*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.8));'),

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
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.bassc = 0;
m.bcount = 0;

			m.rkeys = ['bcount'];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (m.bass*0.5);
m.g = (m.treb*0.5);
m.b = (m.mid*0.5);
m.a = (0+(m.treb_att*0.15));
		return m;
	},
		'point_eqs' : function(m) {
m.x = (0.5+(0.2*Math.sin((m.time*0.7454))));
m.x = (m.x+(0.0005-(Math.floor(rand(10))*0.008)));
m.y = (0.5+(0.2*Math.cos((m.time*0.455))));
m.y = (m.y+(0.0005-(Math.floor(rand(10))*0.001)));
m.bassc = ifcond(above(m.bcount, 0), 1, 0);
m.bcount = ifcond(above(m.bcount, 0), (m.bcount-0.00005), ifcond(below(m.bassc, 1), ifcond(above(m.bass, 1.5), 0.2, 0), 0));
m.x = (m.x-m.bcount);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=bass*.5;\n' + 'g=treb*.5;\n' + 'b=mid*.5;\n' + 'a = 0 + (treb_att * .15);'),
		'point_eqs_str' : ('x = .5+.2*sin(time*.7454);\n' + 'x = x+(.0005-int(rand(10))*.008);\n' + 'y = .5+.2*cos(time*.455);\n' + 'y = y+(.0005-int(rand(10))*.001);\n' + 'bassc = if(above(bcount,0),1,0);\n' + 'bcount = if(above(bcount,0),bcount - .00005,if(below(bassc,1),if(above(bass,1.5),.2,0),0));\n' + 'x = x - bcount;'),

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
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.bassc = 0;
m.mx = 0;
m.my = 0;
m.bcount = 0;
m.ma = 0;

			m.rkeys = ['my','mx','ma','bcount'];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (m.bass*0.5);
m.g = (m.treb*0.5);
m.b = (m.mid*0.5);
		return m;
	},
		'point_eqs' : function(m) {
m.x = (0.5+(0.2*Math.sin((m.time*0.7454))));
m.x = (m.x+(0.0005+(Math.floor(rand(10))*0.008)));
m.y = (0.5+(0.2*Math.cos((m.time*0.455))));
m.y = (m.y+(0.0005-(Math.floor(rand(10))*0.001)));
m.bassc = ifcond(above(m.bcount, 0), 1, 0);
m.bcount = ifcond(above(m.bcount, 0), (m.bcount-0.00005), ifcond(below(m.bassc, 1), ifcond(above(m.bass, 1.5), 0.2, 0), 0));
m.x = (m.x+m.bcount);
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
		'frame_eqs_str' : ('r=bass*.5;\n' + 'g=treb*.5;\n' + 'b=mid*.5;'),
		'point_eqs_str' : ('x = .5+.2*sin(time*.7454);\n' + 'x = x+(.0005+int(rand(10))*.008);\n' + 'y = .5+.2*cos(time*.455);\n' + 'y = y+(.0005-int(rand(10))*.001);\n' + 'bassc = if(above(bcount,0),1,0);\n' + 'bcount = if(above(bcount,0),bcount - .00005,if(below(bassc,1),if(above(bass,1.5),.2,0),0));\n' + 'x = x + bcount;\n' + 'ma=ma+(above(bass,1)*3.1415*.01*bass);\n' + 'ma=ma-(above(treb,1)*3.1415*.01*treb);\n' + 'mx=mx+(.0002*cos(ma));\n' + 'my=my+(.0002*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.8));'),

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
m.r = (m.bass*0.5);
m.g = (m.treb*0.5);
m.b = (m.mid*0.5);
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
		'frame_eqs_str' : ('r=bass*.5;\n' + 'g=treb*.5;\n' + 'b=mid*.5;'),
		'point_eqs_str' : ('ma=ma+(above(bass,1)*3.1415*.01*bass);\n' + 'ma=ma-(above(treb,1)*3.1415*.01*treb);\n' + 'mx=mx+(.0002*cos(ma));\n' + 'my=my+(.0002*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.8));'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.29171,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 0.0,
			rad : 3.971,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
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
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.40839,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.52776,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.angc = 0;

			m.rkeys = ['angc'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = m.angc;
m.angc = (m.angc-(m.treb*0.01));
m.x = (0.5+(0.2*Math.sin(m.angc)));
m.y = (0.5+(0.2*Math.sin((0.98*m.angc))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = angc;\n' + 'angc = angc-treb*.01;\n' + 'x=.5 + .2*sin(angc);\n' + 'y=.5 + .2*sin(.98*angc);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.14949,
			additive : 1.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 6.662,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.angc = 0;
m.rand100 = 0;

			m.rkeys = ['angc'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.ang+m.angc);
m.angc = (m.angc+(m.bass*0.01));
m.x = (0.5+(0.045*Math.sin((0.234*m.time))));
m.y = (0.5+(0.054*Math.sin((0.223*m.time))));
m.r2 = (m.rand100*0.01);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = ang + angc;\n' + 'angc = angc + bass*.01;\n' + 'x = .5 + .045*sin(.234*time);\n' + 'y = .5 + .054*sin(.223*time);\n' + 'r2 = (rand100)*.01;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.19788,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.5584,
			x : 0.18,
			y : 0.3,
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
m.x = (0.5+(0.05*Math.sin(((0.23*m.time)+(0.2*m.treb_att)))));
m.y = (0.5+(0.05*Math.cos(((0.2*m.time)+(0.2*m.bass)))));
m.r = (0.5+Math.sin(m.time));
m.b = (0.5+Math.sin((m.time*0.556677)));
m.g = (0.5+Math.sin((m.time*0.353)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = .5+.05*sin(.23*time + .2*treb_att);\n' + 'y = .5+.05*cos(.2*time + .2*bass);\n' + 'r = .5+sin(time);\n' + 'b = .5+sin(time*.556677);\n' + 'g = .5+sin(time*.353);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 mret_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_noise_hq, uv);\n' + '  ret_2 = tmpvar_3.xxx;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = fract((uv_orig * texsize.zw));\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_noise_hq, tmpvar_4).xyz;\n' + '  mret_1 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv / (uv_orig - texsize_noise_lq.zw));\n' + '  tmpvar_6 = texture2D (sampler_noise_lq, P_7);\n' + '  mret_1.xz = (mret_1 - tmpvar_6.xyz).xz;\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = fract(uv);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_noise_hq, tmpvar_8);\n' + '  mret_1.y = tmpvar_9.y;\n' + '  mret_1.x = (mret_1.x * (0.5 + (\n' + '    (0.2 * sin(((rad * 5.0) + (time * 6.0))))\n' + '   * _qc.w)));\n' + '  mret_1.y = (mret_1.y * ((0.5 + \n' + '    (0.2 * sin(((rad * 40.0) + (time * 8.4))))\n' + '  ) + (0.1 * _qd.x)));\n' + '  mret_1.z = (mret_1.z * ((0.5 + \n' + '    (0.2 * sin(((rad * 10.0) - (time * 4.3))))\n' + '  ) + (0.1 * _qd.y)));\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10.x = (0.95 + (0.2 * _qe.x));\n' + '  tmpvar_10.y = (0.95 + (0.2 * _qd.z));\n' + '  tmpvar_10.z = (0.95 + (0.2 * _qd.w));\n' + '  ret_2 = (ret_2 * tmpvar_10);\n' + '  ret_2 = mix (ret_2, mret_1, vec3(0.45, 0.45, 0.45)).zxy;\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11.w = 1.0;\n' + '  tmpvar_11.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_11;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec2 xlat_mutabledenominator;\n' + 'highp vec2 xlat_mutablenumerator;\n' + 'shader_body {\n' + '   vec2 uv_1;\n' + '  uv_1 = uv;\n' + '   vec3 fix_2;\n' + '   vec2 xy1_3;\n' + '   vec2 uvm_4;\n' + '   vec2 spiral_5;\n' + '   vec2 c_6;\n' + '   vec3 ret_7;\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = (((uv - 0.5) * 2.0) * aspect.wz);\n' + '  xlat_mutablenumerator = ((tmpvar_8 + _qf.xy) * -10.0);\n' + '  xlat_mutabledenominator = (tmpvar_8 + _qf.zw);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9.x = ((xlat_mutablenumerator.x * xlat_mutabledenominator.x) + (xlat_mutablenumerator.y * xlat_mutabledenominator.y));\n' + '  tmpvar_9.y = ((xlat_mutablenumerator.y * xlat_mutabledenominator.x) - (xlat_mutablenumerator.x * xlat_mutabledenominator.y));\n' + '  c_6 = ((tmpvar_9 / (\n' + '    (xlat_mutabledenominator.x * xlat_mutabledenominator.x)\n' + '   + \n' + '    (xlat_mutabledenominator.y * xlat_mutabledenominator.y)\n' + '  )) - 0.5);\n' + '   float tmpvar_10;\n' + '   float tmpvar_11;\n' + '  tmpvar_11 = (min (abs(\n' + '    (c_6.x / c_6.y)\n' + '  ), 1.0) / max (abs(\n' + '    (c_6.x / c_6.y)\n' + '  ), 1.0));\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = (tmpvar_11 * tmpvar_11);\n' + '  tmpvar_12 = (((\n' + '    ((((\n' + '      ((((-0.01213232 * tmpvar_12) + 0.05368138) * tmpvar_12) - 0.1173503)\n' + '     * tmpvar_12) + 0.1938925) * tmpvar_12) - 0.3326756)\n' + '   * tmpvar_12) + 0.9999793) * tmpvar_11);\n' + '  tmpvar_12 = (tmpvar_12 + (float(\n' + '    (abs((c_6.x / c_6.y)) > 1.0)\n' + '  ) * (\n' + '    (tmpvar_12 * -2.0)\n' + '   + 1.570796)));\n' + '  tmpvar_10 = (tmpvar_12 * sign((c_6.x / c_6.y)));\n' + '  if ((abs(c_6.y) > (1e-08 * abs(c_6.x)))) {\n' + '    if ((c_6.y < 0.0)) {\n' + '      if ((c_6.x >= 0.0)) {\n' + '        tmpvar_10 += 3.141593;\n' + '      } else {\n' + '        tmpvar_10 = (tmpvar_10 - 3.141593);\n' + '      };\n' + '    };\n' + '  } else {\n' + '    tmpvar_10 = (sign(c_6.x) * 1.570796);\n' + '  };\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = (3.0 * tmpvar_10);\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = ((tmpvar_13 * _qg.x) + _qg.y);\n' + '  tmpvar_14.y = (((\n' + '    (-2.0 * aspect.w)\n' + '   * \n' + '    log(sqrt(dot (c_6, c_6)))\n' + '  ) + (tmpvar_13 * _qg.x)) + _qg.z);\n' + '  spiral_5 = (0.5 + (0.5 - abs(\n' + '    ((fract((tmpvar_14 * 0.5)) * 2.0) - 1.0)\n' + '  )));\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15 = vec2((spiral_5.x * 0.8));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_noise_hq, tmpvar_15);\n' + '  uvm_4.x = (spiral_5.x - (0.07 * tmpvar_16.x));\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17 = vec2((spiral_5.y * 0.8));\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_noise_hq, tmpvar_17);\n' + '  uvm_4.y = (spiral_5.y - (0.07 * tmpvar_18.x));\n' + '  uv_1 = (spiral_5 - 0.5);\n' + '   float tmpvar_19;\n' + '   float tmpvar_20;\n' + '  tmpvar_20 = (min (abs(\n' + '    (uv_1.x / uv_1.y)\n' + '  ), 1.0) / max (abs(\n' + '    (uv_1.x / uv_1.y)\n' + '  ), 1.0));\n' + '   float tmpvar_21;\n' + '  tmpvar_21 = (tmpvar_20 * tmpvar_20);\n' + '  tmpvar_21 = (((\n' + '    ((((\n' + '      ((((-0.01213232 * tmpvar_21) + 0.05368138) * tmpvar_21) - 0.1173503)\n' + '     * tmpvar_21) + 0.1938925) * tmpvar_21) - 0.3326756)\n' + '   * tmpvar_21) + 0.9999793) * tmpvar_20);\n' + '  tmpvar_21 = (tmpvar_21 + (float(\n' + '    (abs((uv_1.x / uv_1.y)) > 1.0)\n' + '  ) * (\n' + '    (tmpvar_21 * -2.0)\n' + '   + 1.570796)));\n' + '  tmpvar_19 = (tmpvar_21 * sign((uv_1.x / uv_1.y)));\n' + '  if ((abs(uv_1.y) > (1e-08 * abs(uv_1.x)))) {\n' + '    if ((uv_1.y < 0.0)) {\n' + '      if ((uv_1.x >= 0.0)) {\n' + '        tmpvar_19 += 3.141593;\n' + '      } else {\n' + '        tmpvar_19 = (tmpvar_19 - 3.141593);\n' + '      };\n' + '    };\n' + '  } else {\n' + '    tmpvar_19 = (sign(uv_1.x) * 1.570796);\n' + '  };\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22.x = tmpvar_19;\n' + '  tmpvar_22.y = inversesqrt(dot (uv_1, uv_1));\n' + '  uv_1 = (uv_1 + 0.5);\n' + '   vec2 tmpvar_23;\n' + '  tmpvar_23 = (uv_1 - vec2(0.5, 0.5));\n' + '   float tmpvar_24;\n' + '  tmpvar_24 = (time * 0.1);\n' + '  xy1_3.x = ((sin(tmpvar_24) * tmpvar_23.x) - (cos(tmpvar_24) * tmpvar_23.y));\n' + '  xy1_3.y = ((cos(tmpvar_24) * tmpvar_23.x) + (sin(tmpvar_24) * tmpvar_23.y));\n' + '   vec2 tmpvar_25;\n' + '  tmpvar_25 = (xy1_3 - 0.5);\n' + '  uv_1 = tmpvar_25;\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26 = texture2D (sampler_blur1, uvm_4);\n' + '   vec2 tmpvar_27;\n' + '  tmpvar_27 = fract(uvm_4);\n' + '   vec3 tmpvar_28;\n' + '  tmpvar_28 = texture2D (sampler_main, tmpvar_27).xyz;\n' + '  fix_2 = tmpvar_28;\n' + '   vec2 tmpvar_29;\n' + '  tmpvar_29.x = (fix_2.x + cos((\n' + '    (uvm_4.x - (roam_sin.y * 2.0))\n' + '   - \n' + '    (2.0 * _qh.z)\n' + '  )));\n' + '  tmpvar_29.y = (fix_2.x - sin((\n' + '    (uvm_4.y + (roam_cos.x * 2.0))\n' + '   - \n' + '    (2.0 * _qh.w)\n' + '  )));\n' + '   vec3 tmpvar_30;\n' + '  tmpvar_30 = (((10.0 * fix_2) - (\n' + '    ((tmpvar_26.xyz * scale1) + bias1)\n' + '   * rad)) - (4.0 * tmpvar_29).xxx);\n' + '   vec3 tmpvar_31;\n' + '  tmpvar_31 = (1.0 - tmpvar_30);\n' + '   vec4 tmpvar_32;\n' + '  tmpvar_32 = texture2D (sampler_main, tmpvar_25);\n' + '  ret_7 = ((tmpvar_32.xyz * tmpvar_31) + (0.55 * tmpvar_30));\n' + '   vec4 tmpvar_33;\n' + '  tmpvar_33 = texture2D (sampler_main, tmpvar_22);\n' + '   vec3 tmpvar_34;\n' + '  tmpvar_34 = mix (tmpvar_33.xyz, mix (ret_7, tmpvar_31, vec3((1.5 * \n' + '    clamp (dot (tmpvar_30, tmpvar_31), 0.0, 1.0)\n' + '  ))), vec3(0.75, 0.75, 0.75));\n' + '  ret_7 = tmpvar_34;\n' + '   vec4 tmpvar_35;\n' + '  tmpvar_35.w = 1.0;\n' + '  tmpvar_35.xyz = tmpvar_34;\n' + '  vec4 ret4 = tmpvar_35;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('q21 = 1/asin(1);'),
	'frame_eqs_str' : ('q21 = .5;\n' + 'q22 = 0 - sin(time * .5);\n' + 'q23 = 0;\n' + 'q24 = 1;\n' + 'q25 = 0.5/asin(1);\n' + 'q26 = time*0.3;\n' + 'q27 = -time*0.6;\n' + 'bassfix=.05+.01*bass;\n' + 'midfix=.05+.01*mid;\n' + 'trebfix=.05+.01*treb;\n' + 'bassif=if(above(bass_att,1),bassif+bassfix,if(above(bassif,85),0,bassif*.96));\n' + 'midif=if(above(mid_att,1),midif+midfix,if(above(midif,.85),0,midif*.96));\n' + 'trebif=if(above(treb_att,1),trebif+trebfix,if(above(trebif,.85),0,trebif*.96));\n' + 'q12=bassif;\n' + 'q13=midif;\n' + 'q14=trebif;\n' + 'q15=abs(cos(bassif-time));\n' + 'q16=abs(cos(midif-time));\n' + 'q17=abs(cos(trebif-time));'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
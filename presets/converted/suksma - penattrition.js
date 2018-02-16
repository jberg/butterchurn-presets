define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 0.9803,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 1.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : -0.28,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 1.0,
		wave_r : 0.0,
		ib_r : 1.0,
		mv_b : 0.0,
		echo_zoom : 1.905,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
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
		modwavealphaend : 0.95,
		wave_mystery : -0.8,
		decay : 0.96,
		wave_a : 0.009,
		ob_g : 0.0,
		ib_a : 0.47,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.vol3 = 0;
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.midrun = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.bassrun = 0;
m.q20 = 0;
m.trebrun = 0;
m.q21 = 0;
m.vol = 0;
m.q26 = 0;
m.pi23 = 0;
m.vol2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.bassrun = (m.bass+m.bassrun);
m.trebrun = (m.treb+m.trebrun);
m.midrun = (m.mid+m.midrun);
m.vol = (((m.bassrun+m.midrun)+m.trebrun)*0.03);
m.vol2 = (m.vol*0.001);
m.warp = 0;
m.zoom = (1.4+(0.15*Math.cos((m.vol*0.42))));
m.rot = (0.01*Math.sin((1.34*m.vol)));
m.dx = (0.005*Math.sin((m.vol*0.646)));
m.dy = (0.005*Math.sin((m.vol*0.314)));
m.cx = (0.5+(0.05*Math.sin((0.497*m.vol))));
m.cy = (0.5+(0.05*Math.sin((0.413*m.vol))));
m.pi23 = ((4*Math.asin(-1))*0.33333333333333);
m.q6 = ((Math.sin((m.vol-(0*m.pi23)))+1)*0.5);
m.q7 = ((Math.sin((m.vol-(1*m.pi23)))+1)*0.5);
m.q8 = ((Math.sin((m.vol-(2*m.pi23)))+1)*0.5);
m.mv_r = m.q6;
m.mv_g = m.q7;
m.mv_b = m.q8;
m.q9 = (m.q6+1);
m.vol3 = (((m.bass+m.mid)+m.treb)*0.3);
m.q21 = (m.vol*0.05);
m.q26 = m.vol3;
m.q20 = m.vol3;
m.q1 = (m.q6*0.3);
m.q2 = (m.q7*0.3);
m.q3 = (m.q8*0.3);
m.q4 = (div(m.q8,m.q6)*2);
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
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.006,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.1,
			r : 0.0,
			border_g : 1.0,
			rad : 0.01,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 20.0,
			border_r : 1.0,
			num_inst : 1024.0,
			},
		'init_eqs' : function(m) {
m.size = 0;
m.pigtemp = 0;
m.nc = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.zs = 0;
m.x2 = 0;
m.y3 = 0;
m.ys = 0;
m.x3 = 0;
m.xs = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.pigtemp = Math.floor(pow(4, ((m.bass+m.treb)+m.mid)));
m.num_inst = ifcond(above(m.pigtemp, 1024), 1024, m.pigtemp);
m.t1 = div(m.time,5);
m.t2 = div(m.time,6);
m.rad = (0.005+div(m.bass,100));
m.t3 = div(m.bass_att,70);
m.b2 = ((m.treb*0.7)-div(m.bass,2));
m.r = div(m.instance,m.num_inst);
m.g = Math.abs((div(m.treb_att,5)-m.bass));
m.size = (0.3+div(m.bass_att,300));
m.nc = sqrt(m.num_inst);
m.xs = (Math.sin(div((6.28*mod(m.instance,m.nc)),m.nc))*Math.sin(div((3.14*Math.floor(div(m.instance,m.nc))),m.nc)));
m.ys = (Math.cos(div((6.28*mod(m.instance,m.nc)),m.nc))*Math.sin(div((3.14*Math.floor(div(m.instance,m.nc))),m.nc)));
m.zs = Math.cos(div((3.14*Math.floor(div(m.instance,m.nc))),m.nc));
m.y1 = ((m.ys*Math.cos(m.t1))-(m.zs*Math.sin(m.t1)));
m.z1 = ((m.ys*Math.sin(m.t1))+(m.zs*Math.cos(m.t1)));
m.x1 = ((m.z1*Math.sin(m.t2))+(m.xs*Math.cos(m.t2)));
m.z2 = ((m.z1*Math.cos(m.t2))-(m.xs*Math.sin(m.t2)));
m.x2 = ((m.x1*Math.cos(m.t3))-(m.y1*Math.sin(m.t3)));
m.y2 = ((m.y1*Math.cos(m.t3))+(m.x1*Math.sin(m.t3)));
m.x3 = m.x2;
m.y3 = m.y2;
m.z3 = m.z2;
m.x = (0.5+(m.size*div(m.x3,(1+(m.z3*m.size)))));
m.y = (0.5+(m.size*div(m.y3,(1+(m.z3*m.size)))));
m.a = below(m.z3, 0);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('pigtemp=int(pow(4,bass+treb+mid));\n' + 'num_inst=if(above(pigtemp,1024),1024,pigtemp);\n' + 't1 = time/5;\n' + 't2 = time/6;\n' + 'rad = 0.005+bass/100;\n' + 't3 = bass_att/70;\n' + 'b2 = treb*0.7-bass/2;\n' + 'r = instance/num_inst;\n' + 'g = abs(treb_att/5-bass);\n' + 'size = 0.3+bass_att/300;\n' + 'nc = sqrt(num_inst);\n' + 'xs=sin(6.28*(instance%nc)/nc)*sin(3.14*int(instance/nc)/nc);\n' + 'ys=cos(6.28*(instance%nc)/nc)*sin(3.14*int(instance/nc)/nc);\n' + 'zs=cos(3.14*int(instance/nc)/nc);\n' + 'y1 = ys*cos(t1)-zs*sin(t1);\n' + 'z1 = ys*sin(t1)+zs*cos(t1);\n' + 'x1 = z1*sin(t2)+xs*cos(t2);\n' + 'z2 = z1*cos(t2)-xs*sin(t2);\n' + 'x2 = x1*cos(t3)-y1*sin(t3);\n' + 'y2 = y1*cos(t3)+x1*sin(t3);\n' + 'x3 = x2;\n' + 'y3 = y2;\n' + 'z3 = z2;\n' + 'x = 0.5 + size*(x3/(1+z3*size));\n' + 'y = 0.5 + size*(y3/(1+z3*size));\n' + 'a=below(z3,0);'),

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
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.03333,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 7.0,
			},
		'init_eqs' : function(m) {
m.vol = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (((Math.floor(rand(100))*0.01)+m.instance)-m.instance);
m.y = (((Math.floor(rand(100))*0.01)+m.instance)-m.instance);
m.a = 1;
m.a2 = 1;
m.border_a = 0;
m.vol = ((m.bass+m.mid)+m.treb);
m.rad = ((div(Math.floor(rand(Math.floor(m.vol))),7)+m.instance)-m.instance);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = int(rand(100))*.01+instance-instance;\n' + 'y = int(rand(100))*.01+instance-instance;\n' + 'a =1;\n' + 'a2 =1;\n' + 'border_a = 0;\n' + 'vol=bass+mid+treb;\n' + 'rad = int(rand(int(vol)))/7+instance-instance;'),

		},
		{
		'baseVals' : {
			r2 : 0.1,
			a : 1.0,
			enabled : 0.0,
			b : 0.1,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.1,
			textured : 0.0,
			g2 : 0.1,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 1.0,
			border_b : 0.1,
			b2 : 0.1,
			a2 : 1.0,
			r : 0.1,
			border_g : 0.1,
			rad : 0.03333,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.1,
			num_inst : 69.0,
			},
		'init_eqs' : function(m) {
m.q30 = 0;
m.q31 = 0;
m.q32 = 0;
m.q29 = 0;
m.yresquan = 0;
m.xresquan = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.xresquan = Math.floor(rand(Math.floor(((m.q29-m.q30)*500))));
m.yresquan = Math.floor(rand(Math.floor(((m.q29-m.q30)*500))));
m.x = div(Math.floor(rand((((m.q31+m.instance)-m.instance)-m.xresquan))),(m.q31-m.xresquan));
m.y = div(Math.floor(rand((((m.q32+m.instance)-m.instance)-m.yresquan))),(m.q32-m.yresquan));
m.a = 1;
m.a2 = 1;
m.border_a = 1;
m.rad = (m.q30*0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('xresquan=int(rand(int((q29-q30)*500)));\n' + 'yresquan=int(rand(int((q29-q30)*500)));\n' + 'x=int(rand(q31+instance-instance-xresquan))/(q31-xresquan);\n' + 'y=int(rand(q32+instance-instance-yresquan))/(q32-yresquan);\n' + 'a = 1;\n' + 'a2 = 1;\n' + 'border_a = 1;\n' + 'rad = q30*.1;'),

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
	'warp' : ('highp vec2 xlat_mutablec;\n' + 'highp vec2 xlat_mutabletmp;\n' + 'highp vec2 xlat_mutablezz;\n' + 'shader_body {\n' + '   vec3 ret_1;\n' + '  xlat_mutablec = (((uv_orig - 0.5) * 4.0) + vec2(-0.5, 0.0));\n' + '  xlat_mutablezz.x = ((xlat_mutablec.x * xlat_mutablec.x) - (xlat_mutablec.y * xlat_mutablec.y));\n' + '  xlat_mutablezz.y = ((2.0 * xlat_mutablec.x) * xlat_mutablec.y);\n' + '  xlat_mutablezz = (xlat_mutablezz + xlat_mutablec);\n' + '  xlat_mutabletmp = xlat_mutablezz;\n' + '  xlat_mutablezz.x = ((xlat_mutablezz.x * xlat_mutablezz.x) - (xlat_mutablezz.y * xlat_mutablezz.y));\n' + '  xlat_mutablezz.y = ((2.0 * xlat_mutabletmp.x) * xlat_mutabletmp.y);\n' + '  xlat_mutablezz = (xlat_mutablezz + xlat_mutablec);\n' + '  xlat_mutabletmp = xlat_mutablezz;\n' + '  xlat_mutablezz.x = ((xlat_mutablezz.x * xlat_mutablezz.x) - (xlat_mutablezz.y * xlat_mutablezz.y));\n' + '  xlat_mutablezz.y = ((2.0 * xlat_mutabletmp.x) * xlat_mutabletmp.y);\n' + '  xlat_mutablezz = (xlat_mutablezz + xlat_mutablec);\n' + '  xlat_mutabletmp = xlat_mutablezz;\n' + '  xlat_mutablezz.x = ((xlat_mutablezz.x * xlat_mutablezz.x) - (xlat_mutablezz.y * xlat_mutablezz.y));\n' + '  xlat_mutablezz.y = ((2.0 * xlat_mutabletmp.x) * xlat_mutabletmp.y);\n' + '  xlat_mutablezz = (xlat_mutablezz + xlat_mutablec);\n' + '  xlat_mutabletmp = xlat_mutablezz;\n' + '  xlat_mutablezz.x = ((xlat_mutablezz.x * xlat_mutablezz.x) - (xlat_mutablezz.y * xlat_mutablezz.y));\n' + '  xlat_mutablezz.y = ((2.0 * xlat_mutabletmp.x) * xlat_mutabletmp.y);\n' + '  xlat_mutablezz = (xlat_mutablezz + xlat_mutablec);\n' + '  xlat_mutabletmp = xlat_mutablezz;\n' + '  xlat_mutablezz.x = ((xlat_mutablezz.x * xlat_mutablezz.x) - (xlat_mutablezz.y * xlat_mutablezz.y));\n' + '  xlat_mutablezz.y = ((2.0 * xlat_mutabletmp.x) * xlat_mutabletmp.y);\n' + '  xlat_mutablezz = (xlat_mutablezz + xlat_mutablec);\n' + '   vec4 tmpvar_2;\n' + '   vec2 P_3;\n' + '  P_3 = (abs(xlat_mutablezz) / 12.0);\n' + '  tmpvar_2 = texture2D (sampler_noise_lq, P_3);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (xlat_mutablezz * _qe.y));\n' + '  tmpvar_4 = texture2D (sampler_fc_main, P_5);\n' + '  ret_1 = (((tmpvar_2 * 0.15) / (\n' + '    dot (xlat_mutablezz, xlat_mutablezz)\n' + '   + 2.0)).xyz + tmpvar_4.xyz);\n' + '  ret_1 = ((ret_1 * 0.99) - 0.01);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec2 xlat_mutabledz;\n' + 'highp vec3 xlat_mutableneu;\n' + 'highp vec3 xlat_mutableret1;\n' + 'highp vec2 xlat_mutableuv3;\n' + 'shader_body {\n' + '   vec2 uv2_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2.y = 0.0;\n' + '  tmpvar_2.x = texsize.z;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3.x = 0.0;\n' + '  tmpvar_3.y = texsize.w;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + tmpvar_2);\n' + '   vec2 P_5;\n' + '  P_5 = (uv - tmpvar_2);\n' + '   float tmpvar_6;\n' + '  tmpvar_6 = dot ((texture2D (sampler_main, P_4).xyz - texture2D (sampler_main, P_5).xyz), vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.x = tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv + tmpvar_3);\n' + '   vec2 P_8;\n' + '  P_8 = (uv - tmpvar_3);\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = dot ((texture2D (sampler_main, P_7).xyz - texture2D (sampler_main, P_8).xyz), vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.y = tmpvar_9;\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv + (0.1 * xlat_mutabledz));\n' + '  tmpvar_10 = texture2D (sampler_main, P_11);\n' + '  uv2_1 = (uv - 0.5);\n' + '  xlat_mutableuv3 = ((0.2 * uv2_1) + 0.5);\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = (time / 2.0);\n' + '  xlat_mutableuv3 = ((0.2 * cos(\n' + '    ((42.0 * fract(xlat_mutableuv3)) + tmpvar_12)\n' + '  )) + (99.0 * xlat_mutabledz));\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = clamp ((0.01 / sqrt(\n' + '    dot (xlat_mutableuv3, xlat_mutableuv3)\n' + '  )), 0.0, 1.0);\n' + '  xlat_mutableneu = ((0.1 * vec3(tmpvar_13)) + (0.9 * dot (vec3(tmpvar_13), vec3(0.32, 0.49, 0.29))));\n' + '  xlat_mutableret1 = max (vec3(0.0, 0.0, 0.0), (xlat_mutableneu * 1.252262));\n' + '  xlat_mutableuv3 = ((0.2 * uv2_1) + 0.5);\n' + '  xlat_mutableuv3 = ((0.2 * cos(\n' + '    ((42.0 * fract(xlat_mutableuv3)) + tmpvar_12)\n' + '  )) + (99.0 * xlat_mutabledz));\n' + '   float tmpvar_14;\n' + '  tmpvar_14 = clamp ((0.01 / sqrt(\n' + '    dot (xlat_mutableuv3, xlat_mutableuv3)\n' + '  )), 0.0, 1.0);\n' + '  xlat_mutableneu = ((0.1 * vec3(tmpvar_14)) + (0.9 * dot (vec3(tmpvar_14), vec3(0.32, 0.49, 0.29))));\n' + '  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * 1.252262));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 1.0;\n' + '  tmpvar_15.xyz = (xlat_mutableret1 + clamp ((\n' + '    (16.0 * ((0.5 * tmpvar_10.xyz) + 0.01))\n' + '   * \n' + '    (0.1 + xlat_mutableret1)\n' + '  ), 0.0, 1.0));\n' + '  vec4 ret4 = tmpvar_15;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('bassrun=bass+bassrun;\n' + 'trebrun=treb+trebrun;\n' + 'midrun=mid+midrun;\n' + 'vol=(bassrun+midrun+trebrun)*.03;\n' + 'vol2=vol*.001;\n' + 'warp = 0;\n' + 'zoom = 1.4 +0.15*cos(vol*0.42);\n' + 'rot = 0.01*sin(1.34*vol);\n' + 'dx = 0.005*sin(vol*0.646);\n' + 'dy=0.005*sin(vol*0.314);\n' + 'cx = 0.5 + 0.05*sin(0.497*vol);\n' + 'cy = 0.5 +0.05*sin(0.413*vol);\n' + 'pi23=4*asin(-1)*.33333333333333;\n' + 'q6= (sin(vol-0*pi23)+1)*.5;\n' + 'q7= (sin(vol-1*pi23)+1)*.5;\n' + 'q8=(sin(vol-2*pi23)+1)*.5;\n' + 'mv_r=q6;\n' + 'mv_g=q7;\n' + 'mv_b=q8;\n' + 'q9=q6+1;\n' + 'vol3=(bass+mid+treb)*.3;\n' + 'q21=vol*.05;\n' + 'q26=vol3;\n' + 'q20=vol3;\n' + 'q1=q6*.3;\n' + 'q2=q7*.3;\n' + 'q3=q8*.3;\n' + 'q4=q8/q6*2;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
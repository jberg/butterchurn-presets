define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 0.0,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.9,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : -0.941,
		mv_dy : 0.426,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 0.942,
		echo_zoom : 1.169,
		ob_size : 0.005,
		b1ed : 0.0,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.078,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.006,
		wave_thick : 0.0,
		modwavealphaend : 2.0,
		wave_mystery : 1.0,
		decay : 0.98,
		wave_a : 0.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 0.316,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 2.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.res = 0;
m.q1 = 0;
m.xx = 0;
m.yy = 0;
m.size = 0;
m.strength = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.diff = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.d1 = 0;
m.dir = 0;
m.d2 = 0;
m.vy2 = 0;
m.dt = 0;
m.vx2 = 0;
m.vy3 = 0;
m.q10 = 0;
m.yy1 = 0;
m.xx1 = 0;
m.vx3 = 0;
m.vy4 = 0;
m.q11 = 0;
m.r = 0;
m.xx2 = 0;
m.vx4 = 0;
m.q12 = 0;
m.q23 = 0;
m.vol = 0;
m.q13 = 0;
m.q24 = 0;
m.q14 = 0;
m.v = 0;
m.beat = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;
m.y3 = 0;
m.si1 = 0;
m.x3 = 0;
m.y4 = 0;
m.si2 = 0;
m.x4 = 0;
m.c_x = 0;
m.velocity = 0;
m.c_y = 0;
m.c_x = 0.5;
m.c_y = 0.5;
		return m;
	},
	'frame_eqs' : function(m) {
m.sx = (1+((0.01*mod((8*m.bass),8))*equal(mod(m.time,Math.floor((24-(2*m.bass)))), 0)));
m.sy = (1+((0.01*mod((8*m.mid),8))*equal(mod(m.time,(12+Math.floor((24-(2*m.bass))))), 0)));
m.q1 = m.aspectx;
m.q2 = m.aspecty;
m.rot = 0;
m.zoom = 1;
m.warp = 0;
m.vol = (((m.bass*8)+(m.mid*4))+(m.treb*2));
m.vol = (m.vol*above(m.vol, 17));
m.monitor = m.vol;
m.beat = above(m.vol, m.res);
m.diff = (((1-m.beat)*m.diff)+(m.beat*(m.vol-m.res)));
m.res = ((m.beat*(m.vol+(2*m.diff)))+((1-m.beat)*(m.res-div((((m.diff*0.04)+0.12)*60),m.fps))));
m.res = Math.max(0, m.res);
m.monitor = m.res;
m.r = ifcond(m.beat, ((0.01*(rand(200)-100))*0.01), m.r);
m.rot = m.r;
m.c_x = ifcond(m.beat, (0.5+((0.5*(rand(200)-100))*0.01)), m.c_x);
m.c_y = ifcond(m.beat, (0.5+((0.5*(rand(200)-100))*0.01)), m.c_y);
m.q23 = m.c_x;
m.q24 = m.c_y;
m.xx1 = ((m.xx1*0.9)+(m.bass*0.01));
m.xx2 = ((m.xx2*0.9)+(m.treb*0.01));
m.yy1 = ((m.yy1*0.94)+((m.treb+m.bass)*0.0075));
m.x1 = (0.5+((m.xx1-m.xx2)*2));
m.y1 = (0.4+(m.yy1*1.5));
m.dt = div(0.03,m.fps);
m.vx2 = ((m.vx2*(1-(2*m.dt)))+(m.dt*(((m.x1+m.x3)-(2*m.x2))*10)));
m.vy2 = ((m.vy2*(1-(2*m.dt)))+(m.dt*((((m.y1+m.y3)-(2*m.y2))*10)-0.5)));
m.vx3 = ((m.vx3*(1-(2*m.dt)))+(m.dt*(((m.x2+m.x4)-(2*m.x3))*10)));
m.vy3 = ((m.vy3*(1-(2*m.dt)))+(m.dt*((((m.y2+m.y4)-(2*m.y3))*10)-0.5)));
m.vx4 = ((m.vx4*(1-(2*m.dt)))+(m.dt*((m.x3-m.x4)*10)));
m.vy4 = ((m.vy4*(1-(2*m.dt)))+(m.dt*(((m.y3-m.y4)*10)-0.5)));
m.x2 = (m.x2+m.vx2);
m.y2 = (m.y2+m.vy2);
m.x3 = (m.x3+m.vx3);
m.y3 = (m.y3+m.vy3);
m.x4 = (m.x4+m.vx4);
m.y4 = (m.y4+m.vy4);
m.vx2 = ifcond(above(m.x2, 0), m.vx2, (Math.abs(m.vx2)*0.5));
m.vx2 = ifcond(below(m.x2, 1), m.vx2, (-Math.abs(m.vx2)*0.5));
m.vx3 = ifcond(above(m.x3, 0), m.vx3, (Math.abs(m.vx3)*0.5));
m.vx3 = ifcond(below(m.x3, 1), m.vx3, (-Math.abs(m.vx3)*0.5));
m.vx4 = ifcond(above(m.x4, 0), m.vx4, (Math.abs(m.vx4)*0.5));
m.vx4 = ifcond(below(m.x4, 1), m.vx4, (-Math.abs(m.vx4)*0.5));
m.vy2 = ifcond(above(m.y2, 0), m.vy2, (Math.abs(m.vy2)*0.5));
m.vy2 = ifcond(below(m.y2, 1), m.vy2, (-Math.abs(m.vy2)*0.5));
m.vy3 = ifcond(above(m.y3, 0), m.vy3, (Math.abs(m.vy3)*0.5));
m.vy3 = ifcond(below(m.y3, 1), m.vy3, (-Math.abs(m.vy3)*0.5));
m.vy4 = ifcond(above(m.y4, 0), m.vy4, (Math.abs(m.vy4)*0.5));
m.vy4 = ifcond(below(m.y4, 1), m.vy4, (-Math.abs(m.vy4)*0.5));
m.q1 = m.x1;
m.q2 = m.x2;
m.q3 = m.x3;
m.q4 = m.x4;
m.q5 = m.y1;
m.q6 = m.y2;
m.q7 = m.y3;
m.q8 = m.y4;
m.q9 = div(1,m.aspectx);
m.q10 = div(1,m.aspecty);
m.q11 = m.aspectx;
m.q12 = m.aspecty;
m.q13 = (sqrt(((m.vx4*m.vx4)+(m.vy4*m.vy4)))*0.8);
m.q14 = Math.atan2(m.vx4, m.vy4);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.d = (pow(sqrt((sqr((m.x-m.q3))+sqr((m.y-m.q4)))), 2)-0);
m.v = 0.03;
m.dx = ((m.v*(m.x-m.q23))*m.d);
m.dy = ((m.v*(m.y-m.q24))*m.d);
m.x = (0.5+((m.x-0.5)*m.q11));
m.y = (0.5+((m.y-0.5)*m.q12));
m.dir = ((-m.q14*1)+(Math.asin(1)*1));
m.velocity = m.q13;
m.strength = 100;
m.size = 0.07;
m.xx = m.q4;
m.yy = (1-m.q8);
m.x1 = (m.xx+(Math.cos((m.dir+1.5708))*m.size));
m.y1 = (m.yy-(Math.sin((m.dir+1.5708))*m.size));
m.x2 = (m.xx-(Math.cos((m.dir+1.5708))*m.size));
m.y2 = (m.yy+(Math.sin((m.dir+1.5708))*m.size));
m.d1 = (sqrt((((m.x1-m.x)*(m.x1-m.x))+((m.y1-m.y)*(m.y1-m.y))))-(m.size*2));
m.si1 = (1-div(1,(1+pow(2, (-m.d1*100)))));
m.d2 = (sqrt((((m.x2-m.x)*(m.x2-m.x))+((m.y2-m.y)*(m.y2-m.y))))-(m.size*2));
m.si2 = (1-div(1,(1+pow(2, (-m.d2*100)))));
m.dx += (((((m.si1*Math.sin((m.y1-m.y)))*m.d1)-((m.si2*Math.sin((m.y2-m.y)))*m.d2))*m.strength)*m.velocity);
m.dy += (((((-m.si1*Math.sin((m.x1-m.x)))*m.d1)+((m.si2*Math.sin((m.x2-m.x)))*m.d2))*m.strength)*m.velocity);
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
			r2 : 0.7,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.02009,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.78903,
			x : 0.5,
			y : 0.5,
			ang : 0.62832,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {

m.vx = 0;
m.vy = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : ('vx = 0;\n' + 'vy = 0;'),
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
	'warp' : ('highp vec2 xlat_mutabled;\n' + 'highp vec3 xlat_mutabledx;\n' + 'highp vec3 xlat_mutabledy;\n' + 'highp vec2 xlat_mutableuv_y;\n' + 'highp vec2 xlat_mutableuv_z;\n' + 'shader_body {\n' + '   vec3 rand_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = (texture2D (sampler_noise_lq, tmpvar_3).xyz - 0.5);\n' + '  rand_1 = tmpvar_4;\n' + '  xlat_mutabled = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv_orig + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv_orig - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_7 = texture2D (sampler_blur1, P_8);\n' + '  xlat_mutabledx = (((tmpvar_5.xyz * scale1) + bias1) - ((tmpvar_7.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv_orig + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (uv_orig - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '  xlat_mutabledy = (((tmpvar_9.xyz * scale1) + bias1) - ((tmpvar_11.xyz * scale1) + bias1));\n' + '  xlat_mutabled = uv;\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = xlat_mutabledx.y;\n' + '  tmpvar_13.y = xlat_mutabledy.y;\n' + '  xlat_mutableuv_y = (uv - ((tmpvar_13 * texsize.zw) * 6.0));\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = xlat_mutabledx.z;\n' + '  tmpvar_14.y = xlat_mutabledy.z;\n' + '  xlat_mutableuv_z = (uv - ((tmpvar_14 * texsize.zw) * 6.0));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_main, xlat_mutableuv_y);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_main, uv_orig);\n' + '  ret_2.y = ((tmpvar_15.y - 0.008) + ((1.0 - tmpvar_16.x) * 0.018));\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_main, xlat_mutableuv_z);\n' + '  ret_2.z = ((tmpvar_17.z - 0.008) + (tmpvar_16.x * 0.018));\n' + '   vec4 tmpvar_18;\n' + '   vec2 P_19;\n' + '  P_19 = (uv + ((rand_1.xy * texsize.zw) * 0.5));\n' + '  tmpvar_18 = texture2D (sampler_fc_main, P_19);\n' + '  ret_2.x = tmpvar_18.x;\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_blur3, uv);\n' + '  ret_2.x = (ret_2.x + ((\n' + '    (ret_2.x - ((tmpvar_20.xyz * scale3) + bias3).x)\n' + '   * 0.15) + (rand_1 * 0.0042)).x);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21.w = 1.0;\n' + '  tmpvar_21.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_21;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 dy_1;\n' + '   vec3 dx_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3.x = _qc.w;\n' + '  tmpvar_3.y = _qd.x;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (texsize.zw * 1.25);\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (vec2(1.0, 0.0) * tmpvar_4));\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_4));\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (texture2D (sampler_main, P_5).xyz - texture2D (sampler_main, P_6).xyz);\n' + '  dx_2 = tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + (vec2(0.0, 1.0) * tmpvar_4));\n' + '   vec2 P_9;\n' + '  P_9 = (uv - (vec2(0.0, 1.0) * tmpvar_4));\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = (texture2D (sampler_main, P_8).xyz - texture2D (sampler_main, P_9).xyz);\n' + '  dy_1 = tmpvar_10;\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = dot (dx_2, vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_11.y = dot (dy_1, vec3(0.32, 0.49, 0.29));\n' + '   vec2 x_12;\n' + '  x_12 = ((uv - (tmpvar_11 * 8.0)) - _qa.zw);\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = dot (dx_2, vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_13.y = dot (dy_1, vec3(0.32, 0.49, 0.29));\n' + '   vec2 x_14;\n' + '  x_14 = ((uv - (tmpvar_13 * 8.0)) - _qb.yz);\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15.x = dot (dx_2, vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_15.y = dot (dy_1, vec3(0.32, 0.49, 0.29));\n' + '   vec2 x_16;\n' + '  x_16 = ((uv - (tmpvar_15 * 8.0)) - _qc.xy);\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = dot (dx_2, vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_17.y = dot (dy_1, vec3(0.32, 0.49, 0.29));\n' + '   vec2 x_18;\n' + '  x_18 = ((uv - (tmpvar_17 * 8.0)) - tmpvar_3);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20.w = 1.0;\n' + '  tmpvar_20.xyz = mix (tmpvar_19.xyz, max (max (\n' + '    (vec3((1.0 - pow (sqrt(\n' + '      dot (x_12, x_12)\n' + '    ), 0.2))) * vec3(2.0, 1.0, -1.0))\n' + '  , \n' + '    (vec3((1.0 - pow (sqrt(\n' + '      dot (x_14, x_14)\n' + '    ), 0.2))) * vec3(2.0, -1.0, 1.0))\n' + '  ), max (\n' + '    (vec3((1.0 - pow (sqrt(\n' + '      dot (x_16, x_16)\n' + '    ), 0.2))) * vec3(-1.0, 1.0, 2.0))\n' + '  , \n' + '    (vec3((1.0 - pow (sqrt(\n' + '      dot (x_18, x_18)\n' + '    ), 0.2))) * vec3(1.0, -1.0, 2.0))\n' + '  )), vec3(0.5, 0.5, 0.5));\n' + '  vec4 ret4 = tmpvar_20;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('c_x = 0.5;\n' + 'c_y = 0.5;'),
	'frame_eqs_str' : ('sx=1+.01*(8*bass%8)*equal(time%(int(24-2*bass)),0);\n' + 'sy=1+.01*(8*mid%8) *equal(time%(12+int(24-2*bass)),0);\n' + 'q1 = aspectx;\n' + 'q2 = aspecty;\n' + 'rot = 0;\n' + 'zoom = 1;\n' + 'warp = 0;\n' + 'vol = bass*8 + mid*4 + treb*2;\n' + 'vol = vol*above(vol,17);\n' + 'monitor = vol;\n' + 'beat = above(vol,res);\n' + 'diff = (1-beat)*diff + beat*(vol-res);\n' + 'res = beat*(vol+2*diff) + (1-beat)*(res - (diff*0.04 + 0.12)*60/fps);\n' + 'res = max(0,res);\n' + 'monitor = res;\n' + 'r = if(beat, 0.01*(rand(200)-100)*0.01,r);\n' + 'rot = r;\n' + 'c_x = if(beat,0.5 + 0.5*(rand(200)-100)*0.01, c_x);\n' + 'c_y = if(beat,0.5 + 0.5*(rand(200)-100)*0.01, c_y);\n' + 'q23 = c_x;\n' + 'q24 = c_y;\n' + 'xx1 = xx1*0.9 + (bass)*0.01;\n' + 'xx2 = xx2*0.9 + (treb)*0.01;\n' + 'yy1 = yy1*0.94 + (treb+bass)*0.0075;\n' + 'x1 = 0.5 + (xx1-xx2)*2;\n' + 'y1 = 0.4 + yy1*1.5;\n' + 'dt = 0.03/fps;\n' + 'vx2 = vx2*(1-2*dt) + dt*((x1+x3-2*x2)*10);\n' + 'vy2 = vy2*(1-2*dt) + dt*((y1+y3-2*y2)*10-0.5);\n' + 'vx3 = vx3*(1-2*dt) + dt*((x2+x4-2*x3)*10);\n' + 'vy3 = vy3*(1-2*dt) + dt*((y2+y4-2*y3)*10-0.5);\n' + 'vx4 = vx4*(1-2*dt) + dt*((x3-x4)*10);\n' + 'vy4 = vy4*(1-2*dt) + dt*((y3-y4)*10-0.5);\n' + 'x2 = x2 + vx2;\n' + ' y2 = y2 + vy2;\n' + 'x3 = x3 + vx3;\n' + ' y3 = y3 + vy3;\n' + 'x4 = x4 + vx4;\n' + ' y4 = y4 + vy4;\n' + 'vx2 = if(above(x2,0),vx2,abs(vx2)*0.5);\n' + 'vx2 = if(below(x2,1),vx2,-abs(vx2)*0.5);\n' + 'vx3 = if(above(x3,0),vx3,abs(vx3)*0.5);\n' + 'vx3 = if(below(x3,1),vx3,-abs(vx3)*0.5);\n' + 'vx4 = if(above(x4,0),vx4,abs(vx4)*0.5);\n' + 'vx4 = if(below(x4,1),vx4,-abs(vx4)*0.5);\n' + 'vy2 = if(above(y2,0),vy2,abs(vy2)*0.5);\n' + 'vy2 = if(below(y2,1),vy2,-abs(vy2)*0.5);\n' + 'vy3 = if(above(y3,0),vy3,abs(vy3)*0.5);\n' + 'vy3 = if(below(y3,1),vy3,-abs(vy3)*0.5);\n' + 'vy4 = if(above(y4,0),vy4,abs(vy4)*0.5);\n' + 'vy4 = if(below(y4,1),vy4,-abs(vy4)*0.5);\n' + 'q1 = x1;\n' + 'q2 = x2;\n' + 'q3 = x3;\n' + 'q4 = x4;\n' + 'q5 = y1;\n' + 'q6 = y2;\n' + 'q7 = y3;\n' + 'q8 = y4;\n' + 'q9 = 1/aspectx;\n' + 'q10 = 1/aspecty;\n' + 'q11 = aspectx;\n' + 'q12 = aspecty;\n' + 'q13 = sqrt(vx4*vx4 + vy4*vy4)*0.8;\n' + 'q14 = atan2(vx4,vy4);'),
	'pixel_eqs_str' : ('d = (pow(sqrt(sqr(x-q3)+sqr(y-q4)),2)-0);\n' + 'v = 0.03;\n' + 'dx = v*(x-q23)*d;\n' + 'dy = v*(y-q24)*d;\n' + 'x = 0.5 + (x-0.5)*q11;\n' + 'y = 0.5 + (y-0.5)*q12;\n' + 'dir = -q14*1 + asin(1)*1;\n' + 'velocity = q13;\n' + 'strength = 100;\n' + 'size = 0.07;\n' + 'xx = q4;\n' + 'yy = 1-q8;\n' + 'x1 = xx   +cos(dir+1.5708)*size;\n' + 'y1 = yy -sin(dir+1.5708)*size;\n' + 'x2 = xx   -cos(dir+1.5708)*size;\n' + 'y2 = yy +sin(dir+1.5708)*size;\n' + 'd1 = sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y))-size*2;\n' + 'si1 = 1- 1/(1+pow(2,-d1*100));\n' + 'd2 = sqrt((x2-x)*(x2-x)+(y2-y)*(y2-y))-size*2;\n' + 'si2 = 1- 1/(1+pow(2,-d2*100));\n' + 'dx += (si1*sin(y1-y)*d1  - si2*sin(y2-y)*d2)*strength*velocity;\n' + 'dy += (-si1*sin(x1-x)*d1 + si2*sin(x2-x)*d2)*strength*velocity;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.007,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.229,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 0.5,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 1.459,
		wave_dots : 0.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.0,
		wave_mystery : 0.2,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.5,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.0,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.index2 = 0;
m.q1 = 0;
m.peak_ = 0;
m.p1 = 0;
m.q2 = 0;
m.p2 = 0;
m.mx = 0;
m.is_beat = 0;
m.ran3_ = 0;
m.my = 0;
m.ran2_ = 0;
m.ran1_ = 0;
m.dec_med = 0;
m.q32 = 0;
m.q11 = 0;
m.q22 = 0;
m.index = 0;
m.q12 = 0;
m.avg = 0;
m.ran1 = 0;
m.q24 = 0;
m.ran2 = 0;
m.ma = 0;
m.ran3 = 0;
m.q15 = 0;
m.q16 = 0;
m.q27 = 0;
m.beat = 0;
m.q17 = 0;
m.q28 = 0;
m.trig = 0;
m.t0 = 0;
m.rott = 0;
m.dec_slow = 0;
m.peak = 0;
m.peak__ = 0;
m.ran1 = ((div(rand(100),100)-0.5)*2);
m.ran2 = ((div(rand(100),100)-0.5)*2);
m.ran3 = ((div(rand(100),100)-0.5)*2);
m.index2 = 3;
		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.85, div(30,m.fps));
m.dec_slow = pow(0.96, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((-0.5+m.avg)+m.peak))*above(m.time, (m.t0+0.1)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),32);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),4);
m.q22 = m.peak;
m.q27 = m.index;
m.q28 = (m.index2+1);
m.q24 = m.is_beat;
m.trig = (m.is_beat*equal(mod(m.index,2), 0));
m.p1 = ((m.trig*(m.p1+1))+((1-m.trig)*m.p1));
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.rott = div((m.p2*3.1416),4);
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.trig = (m.is_beat*equal(mod(m.index,24), 0));
m.ran1 = ifcond(m.trig, ((div(rand(100),100)-0.5)*2), m.ran1);
m.trig = (m.is_beat*equal(mod(m.index,16), 0));
m.ran2 = ifcond(m.trig, ((div(rand(100),100)-0.5)*2), m.ran2);
m.trig = (m.is_beat*equal(mod(m.index,12), 0));
m.ran3 = ifcond(m.trig, ((div(rand(100),100)-0.5)*2), m.ran3);
m.ran1_ = ((m.dec_med*m.ran1_)+((1-m.dec_med)*m.ran1));
m.ran2_ = ((m.dec_med*m.ran2_)+((1-m.dec_med)*m.ran2));
m.ran3_ = ((m.dec_med*m.ran3_)+((1-m.dec_med)*m.ran3));
m.q11 = m.ran1_;
m.q12 = m.ran2_;
m.dx = (0.02*m.ran1_);
m.dy = (0.02*m.ran2_);
m.zoom = (1+(0.05*m.ran3_));
m.peak_ = ((m.dec_med*m.peak_)+((1-m.dec_med)*m.peak));
m.peak__ = ((m.dec_slow*m.peak__)+((1-m.dec_slow)*m.peak_));
m.ma = (m.ma+(div(((m.peak_-m.peak__)*50),m.fps)*bnot(mod(m.index,2))));
m.mx = ((m.mx*m.dec_slow)+((1-m.dec_slow)*Math.cos((m.ma*1.3))));
m.my = ((m.my*m.dec_slow)+((1-m.dec_slow)*Math.sin(m.ma)));
m.q15 = m.mx;
m.q16 = (m.my*0.8);
m.q17 = (m.ma*0.8);
m.q32 = m.aspecty;
m.monitor = m.dx;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.6,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.89152,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {

m.t1 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t2 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t3 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t4 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t5 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t6 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t7 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t8 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 0.6,
			scaling : 0.89152,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {

m.t1 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t2 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t3 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t4 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t5 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t6 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t7 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t8 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 0.31,
			enabled : 0.0,
			b : 0.0,
			g : 0.6,
			scaling : 0.01348,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {

m.t1 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t2 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t3 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t4 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t5 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t6 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t7 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t8 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 0.6,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.06283,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.03922,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.80375,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 33.0,
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
			a : 0.9,
			enabled : 0.0,
			b : 0.7,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 6.16617,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.5,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.4,
			border_g : 0.5,
			rad : 0.033,
			x : 0.6,
			y : 0.5,
			ang : 0.0,
			sides : 39.0,
			border_r : 0.5,
			num_inst : 41.0,
			},
		'init_eqs' : function(m) {
m.q21 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = (m.q21*0.2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad = q21*.2;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.49981,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.20303,
			x : 0.123,
			y : 0.0,
			ang : 0.0,
			sides : 12.0,
			border_r : 1.0,
			num_inst : 256.0,
			},
		'init_eqs' : function(m) {
m.k1 = 0;
m.q32 = 0;
m.q11 = 0;
m.q12 = 0;
m.q15 = 0;
m.q16 = 0;
m.q17 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.k1 = (div(m.instance,m.num_inst)*6.3);
m.x = ((0.5+(m.q15*Math.cos((m.k1+m.q17))))+(m.q11*-0.2));
m.y = ((0.5+((m.q16*m.q32)*Math.sin(((m.k1+m.q17)+m.time))))+(m.q12*0.2));
m.a = 0.5;
m.a2 = 0.1;
m.r = 0.5;
m.b = 1;
m.g = 1;
m.rad = Math.max((Math.max(Math.abs(m.q15), Math.abs(m.q16))*0.2), 0.04);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('k1 = instance/num_inst*6.3;\n' + 'x = .5 +q15 *cos(k1+q17) + q11*-.2;\n' + 'y = .5 +q16 *q32*sin(k1+q17+time)+q12*.2;\n' + 'a = .5;\n' + 'a2 = .1;\n' + ' r = .5;\n' + ' b = 1;\n' + ' g = 1;\n' + 'rad = max(max(abs(q15),abs(q16))*.2,.04);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.31212,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.01645,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 63.0,
			border_r : 0.5,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 crisp_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (uv - vec2(0.5, 0.5));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv);\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = (dot ((\n' + '    (tmpvar_4.xyz * scale1)\n' + '   + bias1), vec3(0.32, 0.49, 0.29)) * 4.0);\n' + '   mat2 tmpvar_6;\n' + '  tmpvar_6[0].x = cos(tmpvar_5);\n' + '  tmpvar_6[0].y = -(sin(tmpvar_5));\n' + '  tmpvar_6[1].x = sin(tmpvar_5);\n' + '  tmpvar_6[1].y = cos(tmpvar_5);\n' + '  uv_1 = ((tmpvar_3 + (\n' + '    (0.1 * dot (((tmpvar_4.xyz * scale1) + bias1), vec3(0.32, 0.49, 0.29)))\n' + '   * \n' + '    (tmpvar_3 * tmpvar_6)\n' + '  )) - 0.5);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = ((uv_1 * texsize.xy) * 0.02);\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8.x = (cos((tmpvar_7.y * _qa.x)) * sin(-(tmpvar_7.y)));\n' + '  tmpvar_8.y = (sin(tmpvar_7.x) * cos((tmpvar_7.y * _qa.y)));\n' + '  uv_1 = (uv_1 - ((tmpvar_8 * texsize.zw) * (_qg.w * 4.0)));\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_main, uv_1).xyz;\n' + '  crisp_2 = tmpvar_9;\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = ((crisp_2 * 0.99) - 0.02);\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec2 xlat_mutabledz;\n' + 'highp vec3 xlat_mutableneu;\n' + 'shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = ((uv - 0.5) * aspect.xy);\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3.y = 0.0;\n' + '  tmpvar_3.x = texsize.z;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (tmpvar_3 * 4.0);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = 0.0;\n' + '  tmpvar_5.y = texsize.w;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (tmpvar_5 * 4.0);\n' + '   vec2 P_7;\n' + '  P_7 = (uv + tmpvar_4);\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = dot (texture2D (sampler_main, P_7).xyz, vec3(0.32, 0.49, 0.29));\n' + '   vec2 P_9;\n' + '  P_9 = (uv - tmpvar_4);\n' + '   float tmpvar_10;\n' + '  tmpvar_10 = dot (texture2D (sampler_main, P_9).xyz, vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.x = ((2.0 * tmpvar_8) - (2.0 * tmpvar_10));\n' + '   vec2 P_11;\n' + '  P_11 = (uv + tmpvar_6);\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = dot (texture2D (sampler_main, P_11).xyz, vec3(0.32, 0.49, 0.29));\n' + '   vec2 P_13;\n' + '  P_13 = (uv - tmpvar_6);\n' + '   float tmpvar_14;\n' + '  tmpvar_14 = dot (texture2D (sampler_main, P_13).xyz, vec3(0.32, 0.49, 0.29));\n' + '  xlat_mutabledz.y = ((2.0 * tmpvar_12) - (2.0 * tmpvar_14));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_main, uv);\n' + '  xlat_mutableneu = tmpvar_15.xyz;\n' + '  xlat_mutabledz = (xlat_mutabledz * 12.0);\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = sin(((\n' + '    (2.0 * tmpvar_2)\n' + '   + \n' + '    (xlat_mutabledz * 0.8)\n' + '  ) + vec2(1.0, 1.0)));\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17 = sin(((\n' + '    (2.0 * tmpvar_2)\n' + '   + xlat_mutabledz) + vec2(1.0, 1.0)));\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18 = sin(((\n' + '    (2.0 * tmpvar_2)\n' + '   + \n' + '    (xlat_mutabledz * 1.2)\n' + '  ) + vec2(1.0, 1.0)));\n' + '   vec3 tmpvar_19;\n' + '  tmpvar_19.x = (0.1 / sqrt(dot (tmpvar_16, tmpvar_16)));\n' + '  tmpvar_19.y = (0.1 / sqrt(dot (tmpvar_17, tmpvar_17)));\n' + '  tmpvar_19.z = (0.1 / sqrt(dot (tmpvar_18, tmpvar_18)));\n' + '  ret_1 = ((tmpvar_19 - (xlat_mutableneu * 0.15)) + (xlat_mutableneu.y / 2.0));\n' + '  ret_1 = (ret_1 * (1.0 + ret_1));\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20.w = 1.0;\n' + '  tmpvar_20.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_20;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('ran1 = (rand(100)/100-.5)*2;\n' + 'ran2 = (rand(100)/100-.5)*2;\n' + 'ran3 = (rand(100)/100-.5)*2;\n' + 'index2 = 3;'),
	'frame_eqs_str' : ('dec_med = pow (0.85, 30/fps);\n' + 'dec_slow = pow (0.96, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, -.5+avg+peak) * above (time, t0+.1);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %32;\n' + 'index2 = (index2 + is_beat*bnot(index))%4;\n' + 'q22 = peak;\n' + 'q27 = index;\n' + 'q28 = index2+1;\n' + 'q24 = is_beat;\n' + 'trig =  is_beat*equal(index%2,0);\n' + 'p1 =  trig*(p1+1) + (1-trig)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'rott = p2 * 3.1416/4;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'trig = is_beat*equal(index%24,0);\n' + 'ran1 = if(trig,(rand(100)/100-.5)*2,ran1);\n' + 'trig = is_beat*equal(index%16,0);\n' + 'ran2 = if(trig,(rand(100)/100-.5)*2,ran2);\n' + 'trig = is_beat*equal(index%12,0);\n' + 'ran3 = if(trig,(rand(100)/100-.5)*2,ran3);\n' + 'ran1_ = dec_med*ran1_ + (1-dec_med)*ran1;\n' + 'ran2_ = dec_med*ran2_ + (1-dec_med)*ran2;\n' + 'ran3_ = dec_med*ran3_ + (1-dec_med)*ran3;\n' + 'q11 = ran1_;\n' + 'q12 = ran2_;\n' + 'dx = .02*ran1_;\n' + 'dy = .02*ran2_;\n' + 'zoom = 1+.05*ran3_;\n' + 'peak_ = dec_med*peak_ + (1-dec_med)*peak;\n' + 'peak__ = dec_slow*peak__ + (1-dec_slow)*peak_;\n' + 'ma = ma + (peak_-peak__)*50/fps * bnot(index%2);\n' + 'mx=mx*dec_slow+(1-dec_slow)*cos(ma*1.3);\n' + 'my=my*dec_slow+(1-dec_slow)*sin(ma);\n' + 'q15 = mx;\n' + 'q16 = my*.8;\n' + 'q17 = ma*.8;\n' + 'q32 = aspecty;\n' + 'monitor = dx;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
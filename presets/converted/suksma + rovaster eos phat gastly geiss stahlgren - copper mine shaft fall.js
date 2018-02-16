define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.5,
		mv_x : 12.8,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.6,
		wave_scale : 0.01,
		echo_alpha : 1.0,
		additivewave : 1.0,
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
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.01,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.201,
		mv_b : 0.71,
		echo_zoom : 1.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 5.996,
		wave_dots : 0.0,
		mv_g : 0.91,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99853,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.2,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.002,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : -1.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.9,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.5,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.q2 = 0;
m.mode = 0;
m.q4 = 0;
m.q6 = 0;
m.meanbass_att = 0;
m.beatcounter = 0;
m.q7 = 0;
m.box = 0;
m.yamp = 0;
m.xamp = 0;
m.lastbeat = 0;
m.yamptarg = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.yaccel = 0;
m.xspeed = 0;
m.beateven = 0;
m.xaccel = 0;
m.bass_effect = 0;
m.ydir = 0;
m.xdir = 0;
m.beatrate = 0;
m.beat = 0;
m.volume = 0;
m.ypos = 0;
m.xpos = 0;
m.beatcounter = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.ob_r = (0.21-(0.2*((0.5*Math.sin((m.time*0.701)))+(0.3*Math.cos((m.time*0.438))))));
m.ob_g = (0.5-(0.46*Math.sin((m.time*1.724))));
m.ob_b = (0.65-(0.3*Math.cos((m.time*1.816))));
m.warp = 0;
m.ib_size = 0.025;
m.ib_r = (m.ib_r+(0.2*((0.6*Math.sin((m.time*3.034)))+(0.4*Math.cos((m.time*2.14))))));
m.ib_g = (m.ib_g+(0.5*((0.6*Math.sin((m.time*3.147)))+(0.4*Math.cos((m.time*2.015))))));
m.ib_b = (m.ib_b-(0.5*((0.6*Math.sin((m.time*3.431)))+(0.4*Math.cos((m.time*1.842))))));
m.dx = ((m.dx+0.001)+Math.abs((0.003*((0.6*Math.sin((m.time*0.234)))+(0.4*Math.cos((m.time*0.437)))))));
m.dy = (m.dy+Math.abs((0.003*((0.7*Math.sin((m.time*0.213)))+(0.3*Math.cos((m.time*0.315)))))));
m.volume = (0.15*(((((m.bass+m.bass_att)+m.treb)+m.treb_att)+m.mid)+m.mid_att));
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.5*m.volume)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xaccel = (((m.xdir*m.xamp)-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.q2 = m.xpos;
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.3*m.volume)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yaccel = (((m.ydir*m.yamp)-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.q4 = m.ypos;
m.bass_effect = Math.max((Math.max(m.bass, m.bass_att)-1.2), 0);
m.echo_zoom = ((1.32+(0.3*((0.59*Math.sin((m.q4+(m.time*0.865))))+(0.41*Math.cos((m.q2+(m.time*1.192)))))))+(0.05*m.bass_effect));
m.volume = (0.15*(((m.bass_att+m.bass)+m.mid)+m.mid_att));
m.beatrate = ifcond(equal(m.beatrate, 0), 1, ifcond(below(m.volume, 0.01), 1, m.beatrate));
m.lastbeat = ifcond(equal(m.lastbeat, 0), m.time, m.lastbeat);
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.peakbass_att = ifcond(above(m.bass_att, m.peakbass_att), m.bass_att, m.peakbass_att);
m.beat = ifcond(above(m.volume, 0.8), ifcond(below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)), ifcond(above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))), 1, 0), 0), 0);
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ifcond(equal(m.beat, 0), ifcond(above((m.time-m.lastbeat), (2*m.beatrate)), (m.peakbass_att*0.95), (m.peakbass_att*0.995)), m.bass_att);
m.lastbeat = ifcond(m.beat, m.time, m.lastbeat);
m.peakbass_att = Math.max(ifcond(m.beat, m.bass_att, m.peakbass_att), (1.1*m.meanbass_att));
m.beatcounter = ifcond(above(m.beat, 0), (m.beatcounter+1), m.beatcounter);
m.beatcounter = ifcond(above(m.beatcounter, 7), 0, m.beatcounter);
m.beateven = mod(m.beatcounter,2);
m.mode = ifcond(m.beat, mod(((m.mode+rand(3))+1),4), m.mode);
m.echo_orient = m.mode;
m.wave_a = ifcond(m.beat, 1, 0);
m.wave_r = ((m.wave_r+(0.2*Math.sin((m.time*0.7854))))-(0.2*m.beateven));
m.wave_b = ((m.wave_b+(0.1*Math.sin((m.time*0.8254))))+(0.2*m.beateven));
m.wave_g = ((m.wave_g+(0.1*Math.sin((m.time*0.854))))+(0.2*m.beateven));
m.q6 = m.beat;
m.wave_mode = ifcond(m.beateven, 7, 0);
m.mv_a = ifcond(m.beat, ifcond(equal(m.beatcounter, 6), 1, 0), 0);
m.mv_r = ifcond(m.mv_a, rand(2), 0);
m.mv_b = ifcond(m.mv_a, rand(2), 0);
m.mv_g = ifcond(m.mv_a, rand(2), 0);
		m.rkeys = ['sy','sx','cy','cx','rot','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.box = (0.5+(0.8*(mod((2*m.x),4)+mod((2*m.y),2))));
m.q1 = (8.45+(0.3*(Math.sin((pow(m.x, 3)+(0.177*m.time)))-Math.cos((pow(m.y, 3)+(0.223*m.time))))));
m.q7 = above(m.box, 1);
m.zoom = ifcond(m.q7, ((m.q1*0.1)+(m.q6*6)), m.zoom);
m.rot = ifcond(m.q7, (0.63*Math.sin((((((0.385*m.time)+(0.12*Math.sin((0.67*m.time))))+(0.1*m.q4))+(0.12*m.q2))+(m.q6*50)))), m.rot);
m.cx = (m.cx-(0.15*Math.sin((2*m.q4))));
m.cy = (m.cy+(0.14*Math.sin((2*m.q2))));
m.sx = ifcond(m.q7, (m.sx+(m.q6*18)), m.sx);
m.sy = ifcond(m.q7, (m.sy+(m.q6*18)), m.sy);
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
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.49138,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+m.q4);
m.y = (0.5+m.q5);
m.a = ((m.bass_att+m.mid_att)+m.treb_att);
m.a = (m.a*0.25);
m.a = ((m.a*m.a)*1.5);
m.r2 = (0.5*Math.sin((m.bass*1.31)));
m.g2 = (0.5*Math.sin((m.bass*1.32)));
m.b2 = (0.5*Math.sin((m.bass*1.33)));
m.r = (m.bass+(1.31*m.time));
m.g = (m.bass+div((1.32*m.time),2));
m.b = (m.bass+div((1.33*m.time),3));
m.rad = Math.sin(m.bass);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=.5+q4;\n' + 'y=.5+q5;\n' + 'a=bass_att+mid_att+treb_att;\n' + 'a=a*0.25;\n' + 'a=a*a*1.5;\n' + 'r2 = 0.5*sin(bass*1.31);\n' + 'g2 = 0.5*sin(bass*1.32);\n' + 'b2 = 0.5*sin(bass*1.33);\n' + 'r = bass+1.31*time;\n' + 'g = bass+1.32*time/2;\n' + 'b = bass+1.33*time/3;\n' + 'rad = sin(bass);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.81954,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.01842,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 24.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = 0.01;
m.x = (0.5-m.q4);
m.y = (0.5-m.q5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=0.01;\n' + 'x=.5-q4;\n' + 'y=.5-q5;'),

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
	'warp' : ('highp vec3 xlat_mutablemus;\n' + 'shader_body {\n' + '   vec3 crisp2_1;\n' + '   vec3 crisp_2;\n' + '   float dy_3;\n' + '   float dx_4;\n' + '   vec2 uv6_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (uv - 0.5);\n' + '   vec2 P_7;\n' + '  P_7 = (uv / 4.0);\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = dot (texture2D (sampler_noise_hq, P_7), vec4(0.32, 0.49, 0.29, 0.0));\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = (tmpvar_8 * _qh.z);\n' + '   mat2 tmpvar_10;\n' + '  tmpvar_10[0].x = cos(tmpvar_9);\n' + '  tmpvar_10[0].y = sin(tmpvar_9);\n' + '  tmpvar_10[1].x = -(sin(tmpvar_9));\n' + '  tmpvar_10[1].y = cos(tmpvar_9);\n' + '  uv6_5 = (tmpvar_6 * tmpvar_10);\n' + '  uv6_5 = (uv6_5 + sin((_qh.w * tmpvar_6)));\n' + '  xlat_mutablemus = (vec3((0.2 / (\n' + '    sqrt(uv6_5.x)\n' + '   + 0.2))) * vec3(1.1, 1.0, 0.95));\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = (0.9 + (0.1 * texture2D (sampler_noise_hq, uv))).xyz;\n' + '  xlat_mutablemus = (xlat_mutablemus * tmpvar_11);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = fract(uv);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_blur1, tmpvar_12);\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = ((tmpvar_13.xyz * scale1) + bias1);\n' + '   vec2 P_15;\n' + '  P_15 = (uv + vec2(0.005, 0.0));\n' + '   vec2 P_16;\n' + '  P_16 = (uv - vec2(0.005, 0.0));\n' + '   float tmpvar_17;\n' + '  tmpvar_17 = dot ((texture2D (sampler_main, P_15) - texture2D (sampler_main, P_16)), vec4(0.32, 0.49, 0.29, 0.0));\n' + '  dx_4 = tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv + vec2(0.0, 0.005));\n' + '   vec2 P_19;\n' + '  P_19 = (uv - vec2(0.0, 0.005));\n' + '   float tmpvar_20;\n' + '  tmpvar_20 = dot ((texture2D (sampler_main, P_18) - texture2D (sampler_main, P_19)), vec4(0.32, 0.49, 0.29, 0.0));\n' + '  dy_3 = tmpvar_20;\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21.x = dx_4;\n' + '  tmpvar_21.y = dy_3;\n' + '   vec2 P_22;\n' + '  P_22 = (uv + (tmpvar_21 * 0.02));\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_main, P_22).xyz;\n' + '  crisp_2 = tmpvar_23;\n' + '   vec3 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_main, uv).xyz;\n' + '  crisp2_1 = tmpvar_24;\n' + '  crisp_2 = (crisp_2 + (crisp2_1 / 2.0));\n' + '  crisp_2 = (crisp_2 * 0.67);\n' + '  crisp_2 = (crisp_2 + ((0.08 * xlat_mutablemus) - (\n' + '    sqrt(dot (tmpvar_21, tmpvar_21))\n' + '   * tmpvar_14)));\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25.w = 1.0;\n' + '  tmpvar_25.xyz = (((crisp_2 - \n' + '    (dot (tmpvar_14, vec3(0.32, 0.49, 0.29)) * 0.04)\n' + '  ) * 0.99) - 0.04);\n' + '  vec4 ret4 = tmpvar_25;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1.yz = (ret_1.x * vec2(0.9, 0.7));\n' + '  ret_1 = (pow (ret_1, vec3(1.7, 2.0, 2.2)) * 5.0);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('beatcounter =0;'),
	'frame_eqs_str' : ('ob_r = 0.21 - 0.2*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));\n' + 'ob_g = 0.5 - 0.46*sin(time*1.724);\n' + 'ob_b = 0.65 - 0.3*cos(time*1.816);\n' + 'warp =0;\n' + 'ib_size = 0.025;\n' + 'ib_r = ib_r + 0.2*(0.6*sin(time*3.034)+0.4*cos(time*2.14));\n' + 'ib_g = ib_g + 0.5*(0.6*sin(time*3.147)+0.4*cos(time*2.015));\n' + 'ib_b = ib_b - 0.5*(0.6*sin(time*3.431)+0.4*cos(time*1.842));\n' + 'dx = dx +0.001+abs(0.003*(0.6*sin(time*0.234) + 0.4*cos(time*0.437)));\n' + 'dy = dy + abs(0.003*(0.7*sin(time*0.213) + 0.3*cos(time*0.315)));\n' + 'volume = 0.15*(bass+bass_att+treb+treb_att+mid+mid_att);\n' + 'xamptarg = if(equal(frame%15,0),min(0.5*volume*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xaccel = xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'q2 = xpos;\n' + 'yamptarg = if(equal(frame%15,0),min(0.3*volume*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yaccel = ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'q4 = ypos;\n' + 'bass_effect = max(max(bass,bass_att)-1.2,0);\n' + 'echo_zoom = 1.32 + 0.3*(0.59*sin(q4+time*0.865) + 0.41*cos(q2+time*1.192)) + 0.05*bass_effect;\n' + 'volume = 0.15*(bass_att+bass+mid+mid_att);\n' + 'beatrate = if(equal(beatrate,0),1,if(below(volume,0.01),1,beatrate));\n' + 'lastbeat = if(equal(lastbeat,0),time,lastbeat);\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = if(above(bass_att,peakbass_att),bass_att,peakbass_att);\n' + 'beat = if(above(volume,0.8),if(below(peakbass_att - bass_att, 0.05*peakbass_att),if(above(time - lastbeat,0.1+0.5*(beatrate-0.1)),1,0),0),0);\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = if(equal(beat,0),if(above(time - lastbeat,2*beatrate),peakbass_att*0.95,peakbass_att*0.995),bass_att);\n' + 'lastbeat = if(beat,time,lastbeat);\n' + 'peakbass_att = max(if(beat,bass_att,peakbass_att),1.1*meanbass_att);\n' + 'beatcounter = if(above(beat,0),beatcounter +1, beatcounter);\n' + 'beatcounter = if(above(beatcounter,7), 0, beatcounter);\n' + 'beateven = beatcounter%2;\n' + 'mode = if(beat,(mode+rand(3)+1)%4,mode);\n' + 'echo_orient = mode;\n' + 'wave_a = if(beat,1,0);\n' + 'wave_r = wave_r + 0.2*sin(time*0.7854) - 0.2*beateven;\n' + 'wave_b = wave_b + 0.1*sin(time*0.8254) + 0.2*beateven;\n' + 'wave_g = wave_g + 0.1*sin(time*0.854) + 0.2*beateven;\n' + 'q6 = beat;\n' + 'wave_mode = if(beateven,7,0);\n' + 'mv_a = if(beat,if(equal(beatcounter,6),1,0),0);\n' + 'mv_r = if(mv_a,rand(2),0);\n' + 'mv_b = if(mv_a,rand(2),0);\n' + 'mv_g= if(mv_a,rand(2),0);'),
	'pixel_eqs_str' : ('box =0.5+0.8*(2*x%4+2*y%2);\n' + 'q1 = 8.45+0.3*(sin(pow(x,3)+0.177*time)-cos(pow(y,3)+0.223*time));\n' + 'q7 = above(box,1);\n' + 'zoom = if(q7,(q1*.1) + q6*6 ,zoom);\n' + 'rot = if(q7,0.63*sin(0.385*time + 0.12*sin(0.67*time) + 0.1*q4 + 0.12*q2 +q6*50),rot);\n' + 'cx = cx - 0.15*sin(2*q4);\n' + 'cy = cy + 0.14*sin(2*q2);\n' + 'sx = if(q7,sx+q6*18,sx);\n' + 'sy = if(q7,sy+q6*18,sy);'),
};

return pmap;
});
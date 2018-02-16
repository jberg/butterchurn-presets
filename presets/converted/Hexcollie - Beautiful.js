define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.4,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.0,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 0.999005,
		ob_r : 0.0,
		sy : 0.999005,
		b3x : 1.0,
		ib_size : 0.155,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
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
		echo_zoom : 1.0,
		ob_size : 0.02,
		b1ed : 0.25,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.001829,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.250001,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.27,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.q2 = 0;
m.q3 = 0;
m.meanbass_att = 0;
m.out_x = 0;
m.mrad = 0;
m.out_y = 0;
m.mx = 0;
m.mbass = 0;
m.my = 0;
m.lastbeat = 0;
m.runmeanbass = 0;
m.cdelay1 = 0;
m.oldx = 0;
m.xmovn = 0;
m.cdelay2 = 0;
m.oldy = 0;
m.ymovn = 0;
m.treble = 0;
m.counter1 = 0;
m.beatrate = 0;
m.counter2 = 0;
m.beat = 0;
m.colorcounter = 0;
m.volume = 0;
m.ymov = 0;
m.xmov = 0;
m.oldx = 0.5;
m.oldy = 0.5;
		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = Math.min(1, Math.max(0, (0.3*m.bass)));
m.wave_g = Math.min(1, Math.max(0, (0.3*m.mid)));
m.wave_b = Math.min(1, Math.max(0, (0.3*m.treb)));
m.counter1 = ifcond(equal(m.counter2, 1), ifcond(equal(m.counter1, 1), 0, (m.counter1+0.2)), 1);
m.counter2 = ifcond(equal(m.counter1, 1), ifcond(equal(m.counter2, 1), 0, (m.counter2+0.2)), 1);
m.cdelay1 = ifcond(equal(m.cdelay2, 1), 1, ifcond(equal(mod(m.colorcounter,2), 1), ifcond(equal(m.counter1, 1), 2, 0), ifcond(equal(m.counter2, 1), 2, 0)));
m.cdelay2 = ifcond(equal(m.cdelay1, 2), 1, 0);
m.colorcounter = ifcond(above(m.colorcounter, 7), 0, ifcond(equal(m.cdelay1, 1), (m.colorcounter+1), m.colorcounter));
m.ob_r = ifcond(equal(m.colorcounter, 1), 1, ifcond(equal(m.colorcounter, 2), 1, ifcond(equal(m.colorcounter, 3), 1, ifcond(equal(m.colorcounter, 4), Math.sin((m.counter2+2.1)), ifcond(equal(m.colorcounter, 5), 0, ifcond(equal(m.colorcounter, 6), 0, Math.sin(m.counter1)))))));
m.ob_g = ifcond(equal(m.colorcounter, 1), 0, ifcond(equal(m.colorcounter, 2), Math.sin((m.counter2*0.5)), ifcond(equal(m.colorcounter, 3), Math.sin(((m.counter1+1.75)*0.4)), ifcond(equal(m.colorcounter, 4), 1, ifcond(equal(m.colorcounter, 5), 1, ifcond(equal(m.colorcounter, 6), Math.sin((m.counter2+2)), 0))))));
m.ob_b = ifcond(equal(m.colorcounter, 1), Math.sin((m.counter1+2.1)), ifcond(equal(m.colorcounter, 2), 0, ifcond(equal(m.colorcounter, 3), 0, ifcond(equal(m.colorcounter, 4), 0, ifcond(equal(m.colorcounter, 5), Math.sin(m.counter1), ifcond(equal(m.colorcounter, 6), 1, 1))))));
m.mbass = Math.max(m.bass_att, 3);
m.xmovn = ((((0.1*Math.floor(rand(10)))*m.mbass)*0.015)*(1-(2*above(Math.floor(rand(10)), 5))));
m.ymovn = (pow((pow((m.mbass*0.015), 2)-pow(m.xmovn, 2)), div(1,2))*(1-(2*above(Math.floor(rand(10)), 5))));
m.xmov = ifcond(m.beat, m.xmovn, (m.xmov*0.9));
m.ymov = ifcond(m.beat, m.ymovn, (m.ymov*0.9));
m.q1 = m.oldx;
m.q2 = m.oldy;
m.out_x = bor(above((m.q1+m.xmov), 0.9), below((m.q1+m.xmov), 0.1));
m.out_y = bor(above((m.q2+m.ymov), 0.9), below((m.q2+m.ymov), 0.1));
m.xmov = (m.xmov+((-2*m.xmov)*m.out_x));
m.ymov = (m.ymov+((-2*m.ymov)*m.out_y));
m.wave_x = (m.q1+m.xmov);
m.wave_y = (m.q2+m.ymov);
m.q1 = m.wave_x;
m.q2 = m.wave_y;
m.oldx = m.q1;
m.oldy = m.q2;
m.decay = (m.decay-(0.91*m.treble));
m.volume = ((0.3*m.bass)+m.mid);
m.beatrate = (equal(m.beatrate, 0)+((1-equal(m.beatrate, 0))*(below(m.volume, 0.01)+((1-below(m.volume, 0.01))*m.beatrate))));
m.lastbeat = (m.lastbeat+(equal(m.lastbeat, 0)*m.time));
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.runmeanbass = div(((m.runmeanbass*2)+m.bass_att),3);
m.peakbass_att = Math.max(m.bass_att, m.peakbass_att);
m.beat = (((above(m.volume, 0.8)*above(m.bass_att, (m.runmeanbass*1.1)))*below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)))*above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))));
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ((m.beat*m.bass_att)+(((1-m.beat)*m.peakbass_att)*((above((m.time-m.lastbeat), (2*m.beatrate))*0.95)+((1-above((m.time-m.lastbeat), (2*m.beatrate)))*0.995))));
m.lastbeat = ((m.beat*m.time)+((1-m.beat)*m.lastbeat));
m.peakbass_att = Math.max(m.peakbass_att, (1.1*m.meanbass_att));
m.q3 = (m.volume+m.treb);
m.monitor = m.meanbass_att;
		m.rkeys = ['dy','dx','zoom','rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.mx = (m.x-m.q1);
m.my = (m.y-(1-m.q2));
m.mrad = (pow((pow(m.mx, 2)+pow(m.my, 2)), 0.5)*pow(2, 0.5));
m.cx = m.q1;
m.cy = (1-m.q2);
m.rot = ((m.rot+((((below((m.mrad-0.18), 0)*0.5)*Math.sin((m.mrad*40)))*(m.mrad-0.1))*40))-(((((above((m.mrad-0.18), 0)*0.3)*Math.sin((m.mrad*2)))*(m.mrad-0.1))*Math.sin((((m.cx-0.5)*(m.cy-0.5))*6.28)))*m.q3));
m.zoom = (m.zoom-(((above((m.mrad-0.18), 0)*0.05)*m.mrad)*m.q3));
m.dx = (m.dx+((below((m.mrad-0.18), 0)*0.015)*div(m.mx,m.mrad)));
m.dy = (m.dy+((below((m.mrad-0.18), 0)*0.015)*div(m.my,m.mrad)));
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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
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
			smoothing : 0.0,
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
			smoothing : 0.0,
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
			a : 0.6,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.389281,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 1.0,
			rad : 2.667177,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.ob_r = 0;
m.basstime = 0;
m.tex_capture = 0;
m.ob_b = 0;
m.ob_g = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_capture = above(m.bass, 1);
m.ang = m.basstime;
m.ob_r = (0.5*Math.sin((m.basstime*1.12)));
m.ob_g = (0.5*Math.sin((m.basstime*1.5)));
m.ob_b = (0.5*Math.sin((m.basstime*2.12)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_capture = above(bass,1);\n' + 'ang = basstime;\n' + 'ob_r = 0.5 * sin(basstime*1.12);\n' + 'ob_g = 0.5 * sin(basstime*1.5);\n' + 'ob_b = 0.5 * sin(basstime*2.12);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.6,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.3697,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 2.667177,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.tex_capture = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_capture = above(m.bass, 1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_capture = above(bass,1);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
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
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.036971,
			x : 0.5,
			y : 0.55,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (0.5+(0.5*Math.sin(m.q3)));
m.g = (0.5+(0.5*Math.sin((m.q3*1.258))));
m.b = (0.5+(0.5*Math.sin((m.q3*1.478))));
m.r2 = (0.5+(0.5*Math.sin((m.q3*789))));
m.g2 = (0.5+(0.5*Math.sin((m.q3*1.597))));
m.b2 = (0.5+(0.5*Math.sin((m.q3*1.729))));
m.x = (0.5+(0.2*Math.sin(m.time)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = 0.5 + 0.5*sin(q3);\n' + 'g = 0.5 + 0.5*sin(q3*1.258);\n' + 'b = 0.5 + 0.5*sin(q3*1.478);\n' + 'r2 = 0.5 + 0.5*sin(q3*789);\n' + 'g2 = 0.5 + 0.5*sin(q3*1.597);\n' + 'b2 = 0.5 + 0.5*sin(q3*1.729);\n' + 'x = 0.5 + 0.2*sin(time);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
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
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (0.5+(0.5*Math.sin(m.time)));
m.g = (0.5+(0.5*Math.sin((m.time*0.9))));
m.b = (0.5+(0.5*Math.sin((m.time*0.56))));
m.r2 = (0.5+(0.5*Math.sin(m.time)));
m.g2 = (0.5+(0.5*Math.sin((m.time*0.9))));
m.b2 = (0.5+(0.5*Math.sin((m.time*0.56))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = 0.5 + 0.5*sin(time);\n' + 'g = 0.5 + 0.5*sin(time*0.9);\n' + 'b = 0.5 + 0.5*sin(time*0.56);\n' + 'r2 = 0.5 + 0.5*sin(time);\n' + 'g2 = 0.5 + 0.5*sin(time*0.9);\n' + 'b2 = 0.5 + 0.5*sin(time*0.56);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 my_uv2_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = ((uv_orig - 0.5) * vec2(1.81, 1.81));\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = ((tmpvar_3.x * tmpvar_3.x) - (tmpvar_3.y * tmpvar_3.y));\n' + '  tmpvar_4.y = ((2.0 * tmpvar_3.x) * tmpvar_3.y);\n' + '  my_uv2_1 = (tmpvar_4 + vec2(0.448, 0.701));\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = (texture2D (sampler_fc_main, my_uv2_1) - 0.004).xyz;\n' + '  ret_2 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 noise_2;\n' + '   vec3 ret1_3;\n' + '   vec2 uv2_4;\n' + '  uv_1 = (uv - 0.5);\n' + '  uv_1 = (uv_1 * aspect.xy);\n' + '  ret1_3 = vec3(0.0, 0.0, 0.0);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 0.0;\n' + '  tmpvar_5.xyz = ret1_3;\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = (0.1 * _qa.x);\n' + '  P_7 = ((uv_1 + 0.5) + tmpvar_8);\n' + '  tmpvar_6 = texture2D (sampler_main, P_7);\n' + '  ret1_3 = max (tmpvar_5, tmpvar_6).xyz;\n' + '  uv2_4.x = ((uv_1.x * 0.5004596) - (uv_1.y * 0.8657598));\n' + '  uv2_4.y = ((uv_1.x * 0.8657598) + (uv_1.y * 0.5004596));\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9.w = 0.0;\n' + '  tmpvar_9.xyz = ret1_3;\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = ((uv2_4 + 0.5) + tmpvar_8);\n' + '  tmpvar_10 = texture2D (sampler_main, P_11);\n' + '  ret1_3 = max (tmpvar_9, tmpvar_10).xyz;\n' + '  uv2_4.x = ((uv_1.x * -0.4990803) - (uv_1.y * 0.8665558));\n' + '  uv2_4.y = ((uv_1.x * 0.8665558) + (uv_1.y * -0.4990803));\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12.w = 0.0;\n' + '  tmpvar_12.xyz = ret1_3;\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = ((uv2_4 + 0.5) + tmpvar_8);\n' + '  tmpvar_13 = texture2D (sampler_main, P_14);\n' + '  ret1_3 = max (tmpvar_12, tmpvar_13).xyz;\n' + '  uv2_4.x = ((uv_1.x * -0.9999987) - (uv_1.y * 0.001592548));\n' + '  uv2_4.y = ((uv_1.x * 0.001592548) + (uv_1.y * -0.9999987));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 0.0;\n' + '  tmpvar_15.xyz = ret1_3;\n' + '   vec4 tmpvar_16;\n' + '   vec2 P_17;\n' + '  P_17 = ((uv2_4 + 0.5) + tmpvar_8);\n' + '  tmpvar_16 = texture2D (sampler_main, P_17);\n' + '  ret1_3 = max (tmpvar_15, tmpvar_16).xyz;\n' + '  uv2_4.x = ((uv_1.x * -0.5018377) - (uv_1.y * -0.8649619));\n' + '  uv2_4.y = ((uv_1.x * -0.8649619) + (uv_1.y * -0.5018377));\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18.w = 0.0;\n' + '  tmpvar_18.xyz = ret1_3;\n' + '   vec4 tmpvar_19;\n' + '   vec2 P_20;\n' + '  P_20 = ((uv2_4 + 0.5) + tmpvar_8);\n' + '  tmpvar_19 = texture2D (sampler_main, P_20);\n' + '  ret1_3 = max (tmpvar_18, tmpvar_19).xyz;\n' + '  uv2_4.x = ((uv_1.x * 0.4976997) - (uv_1.y * -0.8673494));\n' + '  uv2_4.y = ((uv_1.x * -0.8673494) + (uv_1.y * 0.4976997));\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21.w = 0.0;\n' + '  tmpvar_21.xyz = ret1_3;\n' + '   vec4 tmpvar_22;\n' + '   vec2 P_23;\n' + '  P_23 = ((uv2_4 + 0.5) + tmpvar_8);\n' + '  tmpvar_22 = texture2D (sampler_main, P_23);\n' + '  ret1_3 = max (tmpvar_21, tmpvar_22).xyz;\n' + '  uv2_4.x = ((uv_1.x * 0.9999949) - (uv_1.y * -0.003185092));\n' + '  uv2_4.y = ((uv_1.x * -0.003185092) + (uv_1.y * 0.9999949));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24.w = 0.0;\n' + '  tmpvar_24.xyz = ret1_3;\n' + '   vec4 tmpvar_25;\n' + '   vec2 P_26;\n' + '  P_26 = ((uv2_4 + 0.5) + tmpvar_8);\n' + '  tmpvar_25 = texture2D (sampler_main, P_26);\n' + '  ret1_3 = max (tmpvar_24, tmpvar_25).xyz;\n' + '  ret1_3 = ((ret1_3 - (rad / 2.0)) * (1.0 + (slow_roam_cos.xyz / 2.0)));\n' + '   vec2 P_27;\n' + '  P_27 = ((uv_1 * 8.0) + (dot (ret1_3, vec3(0.32, 0.49, 0.29)) / 8.0));\n' + '   vec3 tmpvar_28;\n' + '  tmpvar_28 = (texture2D (sampler_noise_hq, P_27) + 0.15).xyz;\n' + '  noise_2 = tmpvar_28;\n' + '   vec3 tmpvar_29;\n' + '  tmpvar_29 = max (ret1_3, vec3((dot (noise_2, vec3(0.32, 0.49, 0.29)) / 6.0)));\n' + '  ret1_3 = tmpvar_29;\n' + '   vec4 tmpvar_30;\n' + '  tmpvar_30.w = 1.0;\n' + '  tmpvar_30.xyz = ((tmpvar_29 * 1.6) - 0.1);\n' + '  vec4 ret4 = tmpvar_30;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('oldx=.5;\n' + 'oldy=.5;'),
	'frame_eqs_str' : ('warp = 0;\n' + 'wave_r = min(1,max(0,0.3*bass));\n' + 'wave_g = min(1,max(0,0.3*mid));\n' + 'wave_b = min(1,max(0,0.3*treb));\n' + 'counter1 = if(equal(counter2,1),if(equal(counter1,1),0,counter1+.2),1);\n' + 'counter2 = if(equal(counter1,1),if(equal(counter2,1),0,counter2+.2),1);\n' + 'cdelay1 = if(equal(cdelay2,1),1,if(equal(colorcounter%2,1),if(equal(counter1,1),2 ,0), if(equal(counter2,1),2,0)));\n' + 'cdelay2 = if(equal(cdelay1,2),1,0);\n' + 'colorcounter = if(above(colorcounter,7),0,if(equal(cdelay1,1),colorcounter+1,colorcounter));\n' + 'ob_r = if(equal(colorcounter,1),1, if(equal(colorcounter,2),1, if(equal(colorcounter,3),1, if(equal(colorcounter,4),sin(counter2+2.1), if(equal(colorcounter,5),0, if(equal(colorcounter,6),0,sin(counter1)))))));\n' + 'ob_g = if(equal(colorcounter,1),0, if(equal(colorcounter,2),sin(counter2*.5), if(equal(colorcounter,3),sin((counter1+1.75)*.4), if(equal(colorcounter,4),1, if(equal(colorcounter,5),1, if(equal(colorcounter,6),sin(counter2+2),0))))));\n' + 'ob_b = if(equal(colorcounter,1),sin(counter1+2.1), if(equal(colorcounter,2),0, if(equal(colorcounter,3),0, if(equal(colorcounter,4),0, if(equal(colorcounter,5),sin(counter1), if(equal(colorcounter,6),1,1))))));\n' + 'mbass=max(bass_att,3);\n' + 'xmovn = 0.1*int(rand(10))*mbass*0.015*(1-2*above(int(rand(10)),5));\n' + 'ymovn = pow(pow(mbass*0.015,2)-pow(xmovn,2),1/2)*(1-2*above(int(rand(10)),5));\n' + 'xmov = if(beat,xmovn,xmov*.9);\n' + 'ymov = if(beat,ymovn,ymov*.9);\n' + 'q1=oldx;\n' + 'q2=oldy;\n' + 'out_x = bor(above(q1+xmov,.9),below(q1+xmov,.1));\n' + 'out_y = bor(above(q2+ymov,.9),below(q2+ymov,.1));\n' + 'xmov = xmov + (-2*xmov*out_x);\n' + 'ymov = ymov + (-2*ymov*out_y);\n' + 'wave_x =  q1+xmov ;\n' + 'wave_y = q2+ymov;\n' + 'q1=wave_x;\n' + 'q2=wave_y;\n' + 'oldx = q1;\n' + 'oldy = q2;\n' + 'decay = decay - 0.91*(treble);\n' + 'volume = 0.3*bass+mid;\n' + 'beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);\n' + 'lastbeat = lastbeat + equal(lastbeat,0)*time;\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'runmeanbass =(runmeanbass*2 + bass_att)/3;\n' + 'peakbass_att = max(bass_att,peakbass_att);\n' + 'beat = above(volume,0.8)*above(bass_att,runmeanbass*1.1)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.95 + (1-above(time - lastbeat, 2*beatrate))*0.995);\n' + 'lastbeat = beat*time + (1-beat)*lastbeat;\n' + 'peakbass_att = max(peakbass_att,1.1*meanbass_att);\n' + 'q3=volume+treb;\n' + 'monitor =meanbass_att;'),
	'pixel_eqs_str' : ('mx= x-q1;\n' + 'my = y-(1-q2);\n' + 'mrad = pow(pow(mx,2)+pow(my,2),0.5)*pow(2,0.5);\n' + 'cx = q1;\n' + 'cy = 1-q2;\n' + 'rot= rot + below(mrad-0.18,0)*0.5*sin(mrad*40)*(mrad-0.1)*40- above(mrad-0.18,0)*0.3*sin(mrad*2)*(mrad-0.1)*sin((cx-0.5)*(cy-0.5)*6.28)*q3;\n' + 'zoom= zoom - above(mrad-0.18,0)*0.05*mrad*q3;\n' + 'dx = dx +below(mrad-0.18,0)*0.015*(mx/mrad);\n' + 'dy = dy +below(mrad-0.18,0)*0.015*(my/mrad);'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 24.8,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.898,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.005,
		b2x : 1.0,
		warp : 1.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 4.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 0.35177,
		mv_dx : 0.0,
		mv_dy : 0.16,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.0,
		wave_smoothing : 0.108,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.54,
		zoom : 0.9803,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 1.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.28,
		wave_mystery : 0.1,
		decay : 0.5,
		wave_a : 0.331,
		ob_g : 1.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.72,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.framehalf = 0;
m.q2 = 0;
m.q3 = 0;
m.mode = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.meanbass_att = 0;
m.q7 = 0;
m.q8 = 0;
m.lastbeat = 0;
m.oldq8 = 0;
m.newzoom = 0;
m.newrad = 0;
m.beatrate = 0;
m.beat = 0;
m.newx = 0;
m.newy = 0;
m.newang = 0;
m.volume = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.framehalf = mod(m.frame,2);
m.volume = (0.3*(m.bass+m.mid));
m.beatrate = (equal(m.beatrate, 0)+((1-equal(m.beatrate, 0))*(below(m.volume, 0.01)+((1-below(m.volume, 0.01))*m.beatrate))));
m.lastbeat = (m.lastbeat+(equal(m.lastbeat, 0)*m.time));
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.peakbass_att = Math.max(m.bass_att, m.peakbass_att);
m.beat = ((above(m.volume, 0.8)*below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)))*above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))));
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ((m.beat*m.bass_att)+(((1-m.beat)*m.peakbass_att)*((above((m.time-m.lastbeat), (2*m.beatrate))*0.99)+((1-above((m.time-m.lastbeat), (2*m.beatrate)))*0.998))));
m.lastbeat = ((m.beat*m.time)+((1-m.beat)*m.lastbeat));
m.peakbass_att = Math.max(m.peakbass_att, (1.1*m.meanbass_att));
m.mode = ifcond(m.beat, Math.abs((m.mode-1)), m.mode);
m.q8 = ((m.oldq8+(0.003*(((((div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 5),m.fps))+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 4),m.fps))+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 3),m.fps))+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 2),m.fps))+div(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)),m.fps))))+div(1,(m.fps*5)));
m.oldq8 = m.q8;
m.q1 = (((0.5+(0.15*Math.sin((0.416*m.q8))))+(0.15*Math.sin((0.832*m.q8))))+(0.1*Math.sin((1.324*m.q8))));
m.q2 = (((0.5+(0.15*Math.sin((0.341*m.q8))))+(0.15*Math.sin((0.768*m.q8))))+(0.1*Math.sin((1.523*m.q8))));
m.q6 = (((0.5+(0.15*Math.sin((0.287*m.q8))))+(0.15*Math.sin((0.913*m.q8))))+(0.1*Math.sin((1.142*m.q8))));
m.q7 = (((0.5+(0.15*Math.sin((0.531*m.q8))))+(0.15*Math.sin((0.671*m.q8))))+(0.1*Math.sin((1.442*m.q8))));
m.ob_size = (m.beat*0.05);
m.ob_r = Math.sin((20*(m.q1+m.q2)));
m.ob_g = Math.sin((25*(m.q6+m.q7)));
m.q4 = (((8+(0.2*Math.sin((m.q8*0.385))))+(0.2*Math.sin((m.q8*0.641))))+(0.2*Math.sin((m.q8*0.846))));
m.q5 = (((12+(0.2*Math.sin((m.q8*0.385))))+(0.2*Math.sin((m.q8*0.641))))+(0.2*Math.sin((m.q8*0.846))));
m.q3 = m.mode;
m.wave_a = 0.4;
m.wave_r = ifcond(m.framehalf, (((0.5+(0.15*Math.sin((0.512*m.time))))+(0.15*Math.sin((0.943*m.time))))+(0.1*Math.sin((1.024*m.time)))), (((0.5+(0.15*Math.sin((0.483*m.time))))+(0.15*Math.sin((0.879*m.time))))+(0.1*Math.sin((1.423*m.time)))));
m.wave_g = ifcond(m.framehalf, (((0.5+(0.15*Math.sin((0.248*m.time))))+(0.15*Math.sin((0.829*m.time))))+(0.1*Math.sin((1.623*m.time)))), (((0.5+(0.15*Math.sin((0.461*m.time))))+(0.15*Math.sin((0.699*m.time))))+(0.1*Math.sin((1.254*m.time)))));
m.wave_b = ifcond(m.framehalf, (((0.5+(0.15*Math.sin((0.211*m.time))))+(0.15*Math.sin((0.652*m.time))))+(0.1*Math.sin((1.865*m.time)))), (((0.5+(0.15*Math.sin((0.333*m.time))))+(0.15*Math.sin((0.978*m.time))))+(0.1*Math.sin((1.359*m.time)))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.newx = (m.x-m.q1);
m.newy = (m.y-m.q6);
m.newrad = Math.min((sqrt(((m.newx*m.newx)+((0.5625*m.newy)*m.newy)))*2), sqrt(2));
m.newang = Math.atan2(m.newx, m.newy);
m.newzoom = pow((0.995+(0.05*Math.sin((m.q4*(m.newang+m.q3))))), pow(Math.sin((m.newrad*m.newrad)), m.newrad));
m.dx = ((m.newx*m.newzoom)-m.newx);
m.dy = ((m.newy*m.newzoom)-m.newy);
m.newx = (m.x-m.q2);
m.newy = (m.y-m.q7);
m.newrad = Math.min((sqrt(((m.newx*m.newx)+((0.5625*m.newy)*m.newy)))*2), sqrt(2));
m.newang = Math.atan2(m.newx, m.newy);
m.newzoom = pow((0.995+(0.05*Math.sin((m.q5*m.newang)))), pow(Math.sin((m.newrad*m.newrad)), m.newrad));
m.dx = ((m.dx+(m.newx*m.newzoom))-m.newx);
m.dy = ((m.dy+(m.newy*m.newzoom))-m.newy);
m.newx = (m.x-(0.33*((m.q1+m.q2)+m.q6)));
m.newy = (m.y-(0.33*(((3-m.q2)-m.q6)-m.q7)));
m.newrad = Math.min((sqrt(((m.newx*m.newx)+((0.5625*m.newy)*m.newy)))*2), sqrt(2));
m.newang = Math.atan2(m.newx, m.newy);
m.newzoom = pow((1.04+(0.05*Math.sin(((0.5*(m.q4+m.q5))*m.newang)))), pow(Math.sin((m.newrad*m.newrad)), m.newrad));
m.dx = ((m.dx+(m.newx*m.newzoom))-m.newx);
m.dy = ((m.dy+(m.newy*m.newzoom))-m.newy);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.0,
			scaling : 0.03856,
			samples : 352.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.2,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.ampl = 0;
m.ratio = 0;
m.t02 = 0;
m.y1 = 0;
m.x1 = 0;

			m.rkeys = ['t02'];
			return m;
		},
		'frame_eqs' : function(m) {
m.q1 = m.bass_att;
		return m;
	},
		'point_eqs' : function(m) {
m.r = Math.abs(Math.sin(div(m.frame,38)));
m.g = (0.5*Math.abs(Math.cos(div(m.frame,45))));
m.b = (0.5*Math.abs(Math.sin(div(m.frame,133))));
m.a = 0.3;
m.t02 = (m.t02+div(m.q1,10));
m.ratio = Math.sin(div(m.frame,49));
m.ampl = (0.01+(0.4*sqr((Math.sin(div(m.frame,18))*Math.cos(div(m.frame,123))))));
m.x1 = ((div((m.r-0.5),15)+0.5)+(m.ampl*Math.sin((m.sample*6.28))));
m.y1 = ((div((m.b-0.5),15)+0.5)+(m.ampl*Math.cos((m.sample*6.28))));
m.x = (m.x1+(((1*0.2)*(m.ampl+m.ratio))*Math.sin((((m.sample*6.28)*m.ratio)*7.3))));
m.y = (m.y1+(((1*0.2)*(m.ampl+m.ratio))*Math.cos(((m.sample*6.28)*6))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('q1=bass_att;'),
		'point_eqs_str' : ('r = abs (sin (frame /38));\n' + 'g = 0.5*abs (cos (frame /45));\n' + 'b = 0.5*abs (sin (frame / 133));\n' + 'a = 0.3;\n' + 't02 = t02 + q1/10;\n' + 'ratio = sin (frame/49);\n' + 'ampl = 0.01+0.4*sqr(sin ((frame ) / 18)* cos (frame / 123));\n' + 'x1 = (r-0.5)/15 +0.5 + ampl* sin (sample*6.28);\n' + 'y1 = (b-0.5)/15+0.5 + ampl* cos (sample*6.28);\n' + 'x =  x1+1*0.2*(ampl+ratio )*sin ( sample*6.28 * ratio*7.3);\n' + 'y =  y1+1*0.2*(ampl+ratio )*cos ( sample*6.28*6);'),

		},
		{
		'baseVals' : {
			a : 0.9,
			enabled : 0.0,
			b : 0.6,
			g : 0.0,
			scaling : 2.06378,
			samples : 15.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.8,
			smoothing : 0.8,
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
			samples : 112.0,
			additive : 1.0,
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
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.17914,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.82,
			border_g : 1.0,
			rad : 0.31275,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.xy = 0;
m.rand_frame = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.xy = (0.5+m.rand_frame);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('xy=0.5+rand_frame;'),

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = dot (texsize.zw, texsize.zw);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (uv - 0.5);\n' + '  P_4 = ((tmpvar_6 * (1.0 - \n' + '    (8.0 * sqrt(tmpvar_5))\n' + '  )) + 0.5);\n' + '  tmpvar_3 = texture2D (sampler_main, P_4);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = ((tmpvar_6 * (1.0 + \n' + '    (8.0 * sqrt(tmpvar_5))\n' + '  )) + 0.5);\n' + '  tmpvar_7 = texture2D (sampler_main, P_8);\n' + '  ret_1 = (max (max (ret_1, tmpvar_3.xyz), tmpvar_7.xyz) - 0.03);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9.w = 1.0;\n' + '  tmpvar_9.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_9;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 crisp_1;\n' + '   vec2 uv3_2;\n' + '   vec2 uv2_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = ((uv - 0.5) * aspect.xy);\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = (0.1 / (sqrt(\n' + '    dot (tmpvar_4, tmpvar_4)\n' + '  ) + 0.1));\n' + '   vec2 tmpvar_6;\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (ang / 3.14);\n' + '  tmpvar_6.x = tmpvar_7;\n' + '  tmpvar_6.y = tmpvar_5;\n' + '  uv2_3.y = (tmpvar_5 + (0.1 * time));\n' + '  uv2_3.x = tmpvar_6.x;\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8.x = tmpvar_7;\n' + '  tmpvar_8.y = (tmpvar_5 * 1.5);\n' + '  uv3_2.y = (tmpvar_8.y + (0.08 * time));\n' + '  uv3_2.x = (tmpvar_7 + (time / 32.0));\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = ((2.0 * texture2D (sampler_main, uv2_3).xyz) + texture2D (sampler_main, uv3_2).xyz);\n' + '  crisp_1 = tmpvar_9;\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = fract(uv2_3);\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_blur2, tmpvar_10);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = fract(uv3_2);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_blur2, tmpvar_12);\n' + '  crisp_1 = (crisp_1 + ((2.0 * \n' + '    ((tmpvar_11.xyz * scale2) + bias2)\n' + '  ) + (2.0 * \n' + '    ((tmpvar_13.xyz * scale2) + bias2)\n' + '  )));\n' + '  crisp_1 = ((3.0 * crisp_1) * rad);\n' + '   float tmpvar_14;\n' + '  tmpvar_14 = clamp ((1.0 - (4.0 * rad)), 0.0, 1.0);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = ((crisp_1 + (\n' + '    ((vec3(0.0, 0.0, 1.0) * uv.y) * pow ((1.0 - rad), 8.0))\n' + '   * tmpvar_14)) + (tmpvar_14 * tmpvar_15.xyz));\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'framehalf = frame%2;\n' + 'volume = 0.3*(bass+mid);\n' + 'beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);\n' + 'lastbeat = lastbeat + equal(lastbeat,0)*time;\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = max(bass_att,peakbass_att);\n' + 'beat = above(volume,0.8)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.99 + (1-above(time - lastbeat, 2*beatrate))*0.998);\n' + 'lastbeat = beat*time + (1-beat)*lastbeat;\n' + 'peakbass_att = max(peakbass_att,1.1*meanbass_att);\n' + 'mode = if(beat,abs(mode-1),mode);\n' + 'q8 = oldq8 +0.003*(((pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,5)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,4)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,3)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,2)/fps) +(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att)/fps)) + 1/(fps*5);\n' + 'oldq8 = q8;\n' + 'q1 = 0.5 + 0.15*sin(0.416*q8) + 0.15*sin(0.832*q8) + 0.1*sin(1.324*q8);\n' + 'q2 = 0.5 + 0.15*sin(0.341*q8) + 0.15*sin(0.768*q8) + 0.1*sin(1.523*q8);\n' + 'q6 = 0.5 + 0.15*sin(0.287*q8) + 0.15*sin(0.913*q8) + 0.1*sin(1.142*q8);\n' + 'q7 = 0.5 + 0.15*sin(0.531*q8) + 0.15*sin(0.671*q8) + 0.1*sin(1.442*q8);\n' + 'ob_size = beat*0.05;\n' + 'ob_r = sin(20*(q1+q2));\n' + 'ob_g = sin(25*(q6+q7));\n' + 'q4 = (8 + 0.2*sin(q8*0.385) + 0.2*sin(q8*0.641) + 0.2*sin(q8*0.846));\n' + 'q5 = (12 + 0.2*sin(q8*0.385) + 0.2*sin(q8*0.641) + 0.2*sin(q8*0.846));\n' + 'q3 = mode;\n' + 'wave_a =0.4;\n' + 'wave_r = if(framehalf,0.5 + 0.15*sin(0.512*time) + 0.15*sin(0.943*time) + 0.1*sin(1.024*time),0.5 + 0.15*sin(0.483*time) + 0.15*sin(0.879*time) + 0.1*sin(1.423*time));\n' + 'wave_g = if(framehalf,0.5 + 0.15*sin(0.248*time) + 0.15*sin(0.829*time) + 0.1*sin(1.623*time),0.5 + 0.15*sin(0.461*time) + 0.15*sin(0.699*time) + 0.1*sin(1.254*time));\n' + 'wave_b = if(framehalf,0.5 + 0.15*sin(0.211*time) + 0.15*sin(0.652*time) + 0.1*sin(1.865*time),0.5 + 0.15*sin(0.333*time) + 0.15*sin(0.978*time) + 0.1*sin(1.359*time));'),
	'pixel_eqs_str' : ('newx = x - q1;\n' + 'newy = y - q6;\n' + 'newrad = min(sqrt((newx)*(newx)+0.5625*(newy)*(newy))*2,sqrt(2));\n' + 'newang = atan2(newx,newy);\n' + 'newzoom = pow(0.995 + 0.05*sin((q4)*(newang+q3)), pow(sin(newrad*newrad), newrad));\n' + 'dx = (newx)*newzoom - newx;\n' + 'dy = (newy)*newzoom - newy;\n' + 'newx = x - q2;\n' + 'newy = y - q7;\n' + 'newrad = min(sqrt((newx)*(newx)+0.5625*(newy)*(newy))*2,sqrt(2));\n' + 'newang = atan2(newx,newy);\n' + 'newzoom = pow(0.995 + 0.05*sin((q5)*(newang)), pow(sin(newrad*newrad), newrad));\n' + 'dx = dx + (newx)*newzoom - newx;\n' + 'dy = dy + (newy)*newzoom - newy;\n' + 'newx = x - (0.33*(q1+q2+q6));\n' + 'newy = y - (0.33*(3-q2-q6-q7));\n' + 'newrad = min(sqrt((newx)*(newx)+0.5625*(newy)*(newy))*2,sqrt(2));\n' + 'newang = atan2(newx,newy);\n' + 'newzoom = pow(1.04 + 0.05*sin(0.5*(q4+q5)*(newang)), pow(sin(newrad*newrad), newrad));\n' + 'dx = dx + (newx)*newzoom - newx;\n' + 'dy = dy + (newy)*newzoom - newy;'),
};

return pmap;
});
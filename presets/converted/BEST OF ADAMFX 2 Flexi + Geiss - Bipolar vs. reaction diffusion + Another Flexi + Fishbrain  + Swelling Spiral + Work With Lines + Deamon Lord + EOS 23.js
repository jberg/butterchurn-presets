define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.286,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.11,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.169,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 1.0,
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
		ob_b : 0.1,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.mv_x = 64;
m.mv_y = 48;
m.nut = 0;
m.stp = 0;
m.stq = 0;
m.rtp = 0;
m.rtq = 0;
m.wvr = 0;
m.decay = 0;
m.dcsp = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.97;
m.zoom = 1.01;
m.q1 = m.time;
m.q2 = m.time;
m.q3 = m.time;
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
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wx = 0;
m.branch = 0;
m.wy = 0;
m.d = 0;
m.wa = 0;
m.sc = 0;
m.wainc = 0;

			m.rkeys = ['wx','wy','d','wa','sc'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.branch = Math.floor(rand(2));
m.wx = ifcond(equal(m.sc, 0), 0.5, m.wx);
m.wy = ifcond(equal(m.sc, 0), 0, m.wy);
m.wx = ifcond(equal(m.sc, 1), 0.5, m.wx);
m.wy = ifcond(equal(m.sc, 1), 0.1, m.wy);
m.d = ifcond(below(m.sc, 2), 0.3, (0.7*m.d));
m.wainc = ifcond(equal(m.branch, 1), (0.2+Math.sin(m.time)), -0.2);
m.wa = ifcond(below(m.sc, 2), (3.1415927*0.5), (m.wa+m.wainc));
m.wx = ifcond(above(m.sc, 2), (m.wx+(Math.cos(m.wa)*m.d)), m.wx);
m.wy = ifcond(above(m.sc, 2), (m.wy+(Math.sin(m.wa)*m.d)), m.wy);
m.sc = ifcond(equal(m.sc, 11), 0, (m.sc+1));
m.a = ifcond(below(m.sc, 2), 0, 0.1);
m.x = m.wx;
m.y = m.wy;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('branch=int(rand(2));\n' + 'wx=if(equal(sc,0),.5,wx);\n' + 'wy=if(equal(sc,0),0,wy);\n' + 'wx=if(equal(sc,1),.5,wx);\n' + 'wy=if(equal(sc,1),.1,wy);\n' + 'd=if(below(sc,2),.3,.7*d);\n' + 'wainc=if(equal(branch,1),.2+sin(time),-.2);\n' + 'wa=if(below(sc,2),3.1415927*.5,wa+wainc);\n' + 'wx=if(above(sc,2),wx+cos(wa)*d,wx);\n' + 'wy=if(above(sc,2),wy+sin(wa)*d,wy);\n' + 'sc=if(equal(sc,11),0,sc+1);\n' + 'a=if(below(sc,2),0,.1);\n' + 'x=wx;\n' + 'y=wy;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wx = 0;
m.branch = 0;
m.wy = 0;
m.d = 0;
m.wa = 0;
m.sc = 0;
m.wainc = 0;

			m.rkeys = ['wx','wy','d','wa','sc'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.branch = Math.floor(rand(2));
m.wx = ifcond(equal(m.sc, 0), 0.5, m.wx);
m.wy = ifcond(equal(m.sc, 0), 1, m.wy);
m.wx = ifcond(equal(m.sc, 1), 0.5, m.wx);
m.wy = ifcond(equal(m.sc, 1), 0.9, m.wy);
m.d = ifcond(below(m.sc, 2), 0.3, (0.7*m.d));
m.wainc = ifcond(equal(m.branch, 1), (0.2+Math.sin(m.time)), -0.2);
m.wa = ifcond(below(m.sc, 2), (3.1415927*1.5), (m.wa+m.wainc));
m.wx = ifcond(above(m.sc, 2), (m.wx+(Math.cos(m.wa)*m.d)), m.wx);
m.wy = ifcond(above(m.sc, 2), (m.wy+(Math.sin(m.wa)*m.d)), m.wy);
m.sc = ifcond(equal(m.sc, 11), 0, (m.sc+1));
m.a = ifcond(below(m.sc, 2), 0, 0.1);
m.x = m.wx;
m.y = m.wy;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('branch=int(rand(2));\n' + 'wx=if(equal(sc,0),.5,wx);\n' + 'wy=if(equal(sc,0),1,wy);\n' + 'wx=if(equal(sc,1),.5,wx);\n' + 'wy=if(equal(sc,1),.9,wy);\n' + 'd=if(below(sc,2),.3,.7*d);\n' + 'wainc=if(equal(branch,1),.2+sin(time),-.2);\n' + 'wa=if(below(sc,2),3.1415927*1.5,wa+wainc);\n' + 'wx=if(above(sc,2),wx+cos(wa)*d,wx);\n' + 'wy=if(above(sc,2),wy+sin(wa)*d,wy);\n' + 'sc=if(equal(sc,11),0,sc+1);\n' + 'a=if(below(sc,2),0,.1);\n' + 'x=wx;\n' + 'y=wy;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wx = 0;
m.branch = 0;
m.wy = 0;
m.d = 0;
m.wa = 0;
m.sc = 0;
m.wainc = 0;

			m.rkeys = ['wx','wy','d','wa','sc'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.branch = Math.floor(rand(2));
m.wx = ifcond(equal(m.sc, 0), 0, m.wx);
m.wy = ifcond(equal(m.sc, 0), 0.5, m.wy);
m.wx = ifcond(equal(m.sc, 1), 0.1, m.wx);
m.wy = ifcond(equal(m.sc, 1), 0.5, m.wy);
m.d = ifcond(below(m.sc, 2), 0.3, (0.7*m.d));
m.wainc = ifcond(equal(m.branch, 1), (0.25+Math.cos(m.time)), -0.25);
m.wa = ifcond(below(m.sc, 2), (3.1415927*2), (m.wa+m.wainc));
m.wx = ifcond(above(m.sc, 2), (m.wx+(Math.cos(m.wa)*m.d)), m.wx);
m.wy = ifcond(above(m.sc, 2), (m.wy+(Math.sin(m.wa)*m.d)), m.wy);
m.sc = ifcond(equal(m.sc, 11), 0, (m.sc+1));
m.a = ifcond(below(m.sc, 2), 0, 0.1);
m.x = m.wx;
m.y = m.wy;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('branch=int(rand(2));\n' + 'wx=if(equal(sc,0),0,wx);\n' + 'wy=if(equal(sc,0),.5,wy);\n' + 'wx=if(equal(sc,1),.1,wx);\n' + 'wy=if(equal(sc,1),.5,wy);\n' + 'd=if(below(sc,2),.3,.7*d);\n' + 'wainc=if(equal(branch,1),.25+cos(time),-.25);\n' + 'wa=if(below(sc,2),3.1415927*2,wa+wainc);\n' + 'wx=if(above(sc,2),wx+cos(wa)*d,wx);\n' + 'wy=if(above(sc,2),wy+sin(wa)*d,wy);\n' + 'sc=if(equal(sc,11),0,sc+1);\n' + 'a=if(below(sc,2),0,.1);\n' + 'x=wx;\n' + 'y=wy;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wx = 0;
m.branch = 0;
m.wy = 0;
m.d = 0;
m.wa = 0;
m.sc = 0;
m.wainc = 0;

			m.rkeys = ['wx','wy','d','wa','sc'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.branch = Math.floor(rand(2));
m.wx = ifcond(equal(m.sc, 0), 1, m.wx);
m.wy = ifcond(equal(m.sc, 0), 0.5, m.wy);
m.wx = ifcond(equal(m.sc, 1), 0.9, m.wx);
m.wy = ifcond(equal(m.sc, 1), 0.5, m.wy);
m.d = ifcond(below(m.sc, 2), 0.3, (0.7*m.d));
m.wainc = ifcond(equal(m.branch, 1), (0.25+Math.cos(m.time)), -0.25);
m.wa = ifcond(below(m.sc, 2), (3.1415927*1), (m.wa+m.wainc));
m.wx = ifcond(above(m.sc, 2), (m.wx+(Math.cos(m.wa)*m.d)), m.wx);
m.wy = ifcond(above(m.sc, 2), (m.wy+(Math.sin(m.wa)*m.d)), m.wy);
m.sc = ifcond(equal(m.sc, 11), 0, (m.sc+1));
m.a = ifcond(below(m.sc, 2), 0, 0.1);
m.x = m.wx;
m.y = m.wy;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('branch=int(rand(2));\n' + 'wx=if(equal(sc,0),1,wx);\n' + 'wy=if(equal(sc,0),.5,wy);\n' + 'wx=if(equal(sc,1),.9,wx);\n' + 'wy=if(equal(sc,1),.5,wy);\n' + 'd=if(below(sc,2),.3,.7*d);\n' + 'wainc=if(equal(branch,1),.25+cos(time),-.25);\n' + 'wa=if(below(sc,2),3.1415927*1,wa+wainc);\n' + 'wx=if(above(sc,2),wx+cos(wa)*d,wx);\n' + 'wy=if(above(sc,2),wy+sin(wa)*d,wy);\n' + 'sc=if(equal(sc,11),0,sc+1);\n' + 'a=if(below(sc,2),0,.1);\n' + 'x=wx;\n' + 'y=wy;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.5,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.63904,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.46815,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.1);
m.sides = Math.floor(Math.abs((Math.sin((m.time*0.5))*7)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=time*.1;\n' + 'sides=int(abs(sin(time*.5)*7));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.05,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.02743,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.1);
m.r = (0.7+(Math.sin(m.time)*0.3));
m.g = (0.7+(Math.cos(m.time)*0.3));
m.b = (0.7+(Math.sin((m.time+0.12))*0.3));
m.rad = (m.rad+((m.treb_att*m.bass_att)*0.5));
m.x = (0.5+(Math.sin(m.time)*0.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=time*.1;\n' + 'r=.7+(sin(time)*.3);\n' + 'g=.7+(cos(time)*.3);\n' + 'b=.7+(sin(time+.12)*.3);\n' + 'rad=rad+(treb_att*bass_att*.5);\n' + 'x=.5+(sin(time)*.5);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.05,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.02508,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.25);
m.g = (0.7+(Math.sin(m.time)*0.3));
m.b = (0.7+(Math.cos(m.time)*0.3));
m.r = (0.7+(Math.sin((m.time+0.12))*0.3));
m.r2 = (0.7+(Math.sin(m.time)*0.3));
m.g2 = (0.7+(Math.cos(m.time)*0.3));
m.b2 = (0.7+(Math.sin((m.time+0.12))*0.3));
m.rad = (m.rad+((m.treb_att*m.bass_att)*0.5));
m.y = (0.5+(Math.sin(m.time)*0.25));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=time*.25;\n' + 'g=.7+(sin(time)*.3);\n' + 'b=.7+(cos(time)*.3);\n' + 'r=.7+(sin(time+.12)*.3);\n' + 'r2=.7+(sin(time)*.3);\n' + 'g2=.7+(cos(time)*.3);\n' + 'b2=.7+(sin(time+.12)*.3);\n' + 'rad=rad+(treb_att*bass_att*.5);\n' + 'y=.5+(sin(time)*.25);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.1,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.60804,
			additive : 1.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.01,
			r : 1.0,
			border_g : 1.0,
			rad : 2.66717,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur3, uv);\n' + '  ret_1 = (ret_1 + ((ret_1 - \n' + '    ((tmpvar_3.xyz * scale3) + bias3)\n' + '  ) * 0.35));\n' + '  ret_1 = (ret_1 - 0.004);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 0.4)) + rand_frame.xy);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_noise_lq, tmpvar_4);\n' + '  ret_1 = (ret_1 + ((tmpvar_5.xyz - 0.5) * 0.18));\n' + '  ret_1 = mix (ret_1, vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))), vec3(0.2, 0.2, 0.2));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '   float tmpvar_3;\n' + '  tmpvar_3 = -(_qb.w);\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = (uv.x - 0.5);\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = (uv.y - 0.5);\n' + '  tmpvar_2.x = (((\n' + '    (tmpvar_4 * cos((tmpvar_3 * 0.29)))\n' + '   + \n' + '    (tmpvar_5 * sin((tmpvar_3 * 0.29)))\n' + '  ) * 0.8) + 0.5);\n' + '  tmpvar_2.y = (((\n' + '    (-(tmpvar_4) * sin((tmpvar_3 * 0.29)))\n' + '   + \n' + '    (tmpvar_5 * cos((tmpvar_3 * 0.29)))\n' + '  ) * 0.8) + 0.5);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = ((0.5 - uv) + 0.5);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = mix (texture2D (sampler_main, uv).xyz, texture2D (sampler_main, tmpvar_6).xyz, vec3(0.5, 0.5, 0.5));\n' + '  ret_1 = (tmpvar_7 * 0.8);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (tmpvar_2 * _qc.x);\n' + '  tmpvar_8 = texture2D (sampler_main, P_9);\n' + '  ret_1 = (ret_1 + (tmpvar_8.xyz * 0.2));\n' + '  ret_1 = (1.0 - ((ret_1 * \n' + '    (1.0 - ret_1)\n' + '  ) * 4.0));\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=0.97;\n' + 'zoom=1.01;\n' + 'q1=time;\n' + 'q2=time;\n' + 'q3=time;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
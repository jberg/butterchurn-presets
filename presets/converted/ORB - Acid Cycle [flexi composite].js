define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 0.267,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.0,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 5.2E-4,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
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
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.16,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.9,
		invert : 1.0,
		rot : -0.04,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 2.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.stickybit = 0;
m.diff = 0;
m.bit2 = 0;
m.q8 = 0;
m.sample1 = 0;
m.sample2 = 0;
m.basstime = 0;
m.basssum = 0;
m.spintime = 0;
m.state = 0;
m.difftime = 0;
m.vol = 0;
m.volavg2 = 0;
m.edge = 0;
m.volavg = 0;
m.spintime = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.basstime = (m.basstime+(m.bass_att*0.03));
m.q1 = m.basstime;
m.vol = pow(((m.bass+m.mid)+m.treb), 2);
m.basssum = m.vol;
m.basstime = ifcond(below(m.basstime, 465), 465, m.basstime);
m.stickybit = mod(m.time,2);
m.volavg = (m.volavg+(m.vol*equal(m.stickybit, 1)));
m.sample1 = (m.sample1+equal(m.stickybit, 1));
m.volavg2 = (m.volavg2+(m.vol*equal(m.stickybit, 0)));
m.sample2 = (m.sample2+equal(m.stickybit, 0));
m.edge = bnot(equal(m.bit2, m.stickybit));
m.volavg = (m.volavg-((m.volavg*m.edge)*m.stickybit));
m.volavg2 = (m.volavg2-((m.volavg2*m.edge)*equal(m.stickybit, 0)));
m.sample1 = (m.sample1-((m.sample1*m.edge)*m.stickybit));
m.sample2 = (m.sample2-((m.sample2*m.edge)*equal(m.stickybit, 0)));
m.diff = ifcond(equal(m.stickybit, 1), div(m.basssum,div(m.volavg2,m.sample2)), 0);
m.diff = ifcond(equal(m.stickybit, 0), div(m.basssum,div(m.volavg,m.sample1)), m.diff);
m.q3 = m.diff;
m.bit2 = mod(m.time,2);
m.difftime = (m.difftime+(m.diff*0.03));
m.q2 = m.difftime;
m.difftime = ifcond(above(m.difftime, 2000), 0, m.difftime);
m.spintime = (m.spintime+((m.bass*0.03)*ifcond(equal(mod(m.state,2), 1), 1, -1)));
m.q8 = m.spintime;
m.state = (m.state+above(m.diff, 10));
m.monitor = m.spintime;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1.05-(Math.sin(m.q3)*0.04));
m.rot = 0;
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.5,
			enabled : 1.0,
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
m.q1 = 0;
m.speed = 0;
m.zd = 0;
m.zs = 0;

			m.rkeys = ['zd','zs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.zs = ifcond(below(m.zs, 1), 9, m.zs);
m.zs = ifcond(above(m.zs, 1100), 1, m.zs);
m.speed = (m.bass*0.002);
m.zs = (m.zs+(Math.tan((m.q1*0.015))*m.speed));
m.zd = (m.zd+2);
m.x = (0.5+(0.1*Math.cos((m.q1*m.zs))));
m.y = (0.5+(0.1*Math.sin((m.q1*m.zs))));
m.r = (0.5+(0.5*Math.sin((((m.q1*1.2)+m.x)+m.x))));
m.g = (0.5+(0.5*Math.sin((((m.q1*1.5)+m.x)+m.y))));
m.b = (0.5+(0.5*Math.sin((((m.q1*1.36)+m.y)+m.y))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('zs = if(below(zs,1),9,zs);\n' + 'zs = if(above(zs, 1100),1, zs);\n' + 'speed = bass*0.002;\n' + 'zs = zs + tan(q1*0.015)*speed;\n' + 'zd = zd + 2;\n' + 'x = 0.5 + 0.1*cos(q1*zs);\n' + 'y = 0.5 + 0.1*sin(q1*zs);\n' + 'r = 0.5 + 0.5*sin(q1*1.2 + x + x);\n' + 'g = 0.5 + 0.5*sin(q1*1.5 + x + y);\n' + 'b = 0.5 + 0.5*sin(q1*1.36 + y + y);'),

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
			thick : 1.0,
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
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.22746,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.7418,
			x : 0.75,
			y : 0.75,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q3 = 0;
m.tex_capture = 0;
m.tex_saw = 0.4;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.q1*0.2);
m.tex_capture = above(m.q3, 2);
m.tex_zoom = 0.6;
		return m;
	},
		'init_eqs_str' : ('tex_saw = 0.4;'),
		'frame_eqs_str' : ('ang = q1*0.2;\n' + 'tex_capture = above(q3,2);\n' + 'tex_zoom = 0.6;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.22746,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.7418,
			x : 0.25,
			y : 0.75,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q3 = 0;
m.tex_capture = 0;
m.tex_saw = 0.4;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.q1*0.2);
m.tex_capture = above(m.q3, 2);
m.tex_zoom = 0.6;
		return m;
	},
		'init_eqs_str' : ('tex_saw = 0.4;'),
		'frame_eqs_str' : ('ang = q1*0.2;\n' + 'tex_capture = above(q3,2);\n' + 'tex_zoom = 0.6;'),

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
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.22167,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.border_r = (0.5+(0.5*Math.sin((m.q1*10))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('border_r = 0.5 + 0.5*sin(q1*10);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.xx = 0;
m.yy = 0;
m.q3 = 0;
m.radi = 0;

			m.rkeys = ['xx','yy','radi'];
			return m;
		},
		'frame_eqs' : function(m) {
m.a = above(m.q3, 2);
m.a2 = (above(m.q3, 2)*0.8);
m.xx = ifcond(above(m.q3, 6), m.xx, (rand(100)*0.01));
m.yy = ifcond(above(m.q3, 6), m.yy, (rand(100)*0.01));
m.radi = ifcond(above(m.q3, 5), m.radi, (rand(100)*0.01));
m.rad = m.radi;
m.x = m.xx;
m.y = m.yy;
m.r = ((0.5+(0.5*Math.sin((m.q1*1.22))))+0.1);
m.g = (0.4+(0.4*Math.sin((m.q1*1.307))));
m.b = (0.4+(0.4*Math.sin((m.q1*1.959))));
m.r2 = ((0.5+(0.5*Math.sin((m.q1*1.622))))+0.1);
m.g2 = (0.4+(0.4*Math.sin((m.q1*1.507))));
m.b2 = (0.4+(0.4*Math.sin((m.q1*1.6559))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a = above(q3,2);\n' + 'a2 = above(q3,2)*0.8;\n' + 'xx = if(above(q3,6),xx,rand(100)*0.01);\n' + 'yy = if(above(q3,6),yy,rand(100)*0.01);\n' + 'radi = if(above(q3,5),radi,rand(100)*0.01);\n' + 'rad = radi;\n' + 'x = xx;\n' + 'y = yy;\n' + 'r = 0.5 + 0.5*sin(q1*1.22) + 0.1;\n' + 'g = 0.4 + 0.4*sin(q1*1.307);\n' + 'b = 0.4 + 0.4*sin(q1*1.959);\n' + 'r2 = 0.5 + 0.5*sin(q1*1.622) + 0.1;\n' + 'g2 = 0.4 + 0.4*sin(q1*1.507);\n' + 'b2 = 0.4 + 0.4*sin(q1*1.6559);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2.x = -(_qa.z);\n' + '  tmpvar_2.y = _qa.z;\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (texsize.zw * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_main, P_4);\n' + '  ret_1 = tmpvar_3.xyz;\n' + '  ret_1 = (ret_1 - 0.004);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 2.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_blur1, uv);\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = tmpvar_7.y;\n' + '  tmpvar_14.y = tmpvar_12.y;\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15.x = tmpvar_7.x;\n' + '  tmpvar_15.y = tmpvar_12.x;\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = ((uv - (\n' + '    (tmpvar_14 * texsize.zw)\n' + '   * 16.0)) + (tmpvar_15 * 0.2));\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur2, tmpvar_16);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_blur1, tmpvar_16);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_main, tmpvar_16);\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20.x = tmpvar_7.x;\n' + '  tmpvar_20.y = tmpvar_12.x;\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21 = (uv - ((tmpvar_20 * texsize.zw) * 8.0));\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22.x = tmpvar_7.y;\n' + '  tmpvar_22.y = tmpvar_12.y;\n' + '   vec4 tmpvar_23;\n' + '   vec2 P_24;\n' + '  P_24 = (tmpvar_21 - (tmpvar_22 * 0.4));\n' + '  tmpvar_23 = texture2D (sampler_blur3, P_24);\n' + '   vec2 tmpvar_25;\n' + '  tmpvar_25.x = tmpvar_7.y;\n' + '  tmpvar_25.y = tmpvar_12.y;\n' + '   vec4 tmpvar_26;\n' + '   vec2 P_27;\n' + '  P_27 = (tmpvar_21 - (tmpvar_25 * 0.2));\n' + '  tmpvar_26 = texture2D (sampler_blur2, P_27);\n' + '   vec2 tmpvar_28;\n' + '  tmpvar_28.x = tmpvar_7.y;\n' + '  tmpvar_28.y = tmpvar_12.y;\n' + '   vec4 tmpvar_29;\n' + '   vec2 P_30;\n' + '  P_30 = (tmpvar_21 - (tmpvar_28 * 0.1));\n' + '  tmpvar_29 = texture2D (sampler_blur1, P_30);\n' + '   vec4 tmpvar_31;\n' + '   vec2 P_32;\n' + '  P_32 = (tmpvar_21 + vec2(0.02, -0.02));\n' + '  tmpvar_31 = texture2D (sampler_blur1, P_32);\n' + '   vec3 tmpvar_33;\n' + '  tmpvar_33 = clamp ((clamp (\n' + '    mix (mix (mix (mix (\n' + '      mix (ret_1, vec3(0.4, 0.8, 0.9), ((tmpvar_13.xyz * scale1) + bias1).zzz)\n' + '    , vec3(1.0, 1.0, 1.0), \n' + '      (vec3(1.04, 0.832, 0.32) * (((\n' + '        ((tmpvar_17.xyz * scale2) + bias2)\n' + '       - \n' + '        ((tmpvar_18.xyz * scale1) + bias1)\n' + '      ) + (tmpvar_19.xyz * 0.9)) + ((\n' + '        -(tmpvar_7.y)\n' + '       + tmpvar_12.y) * 0.4)).y)\n' + '    ), vec3(0.0, 1.0, 2.0), vec3((\n' + '      ((tmpvar_23.xyz * scale3) + bias3)\n' + '    .x * 0.4))), vec3(1.0, 2.0, 2.0), vec3(((\n' + '      (tmpvar_26.xyz * scale2)\n' + '     + bias2).x * 0.4))), vec3(2.0, 2.0, 1.6), vec3((((tmpvar_29.xyz * scale1) + bias1).x * 0.2)))\n' + '  , 0.0, 1.0) * (vec3(1.0, 1.0, 1.0) - vec3(\n' + '    (((tmpvar_31.xyz * scale1) + bias1).x * 0.4)\n' + '  ))), 0.0, 1.0);\n' + '   vec3 tmpvar_34;\n' + '  tmpvar_34 = mix (tmpvar_33, vec3(1.0, -0.2, -0.2), vec3((texture2D (sampler_main, uv).x * 0.6)));\n' + '  ret_1 = tmpvar_34;\n' + '   vec4 tmpvar_35;\n' + '  tmpvar_35.w = 1.0;\n' + '  tmpvar_35.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_35;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('spintime = 0;'),
	'frame_eqs_str' : ('basstime = basstime + bass_att*0.03;\n' + 'q1 = basstime;\n' + 'vol = pow(bass+mid+treb,2);\n' + 'basssum = vol;\n' + 'basstime = if(below(basstime,465),465,basstime);\n' + 'stickybit = time%2;\n' + 'volAvg = volAvg + vol*equal(stickybit,1);\n' + 'sample1 = sample1 + equal(stickybit,1);\n' + 'volAvg2 = volAvg2 + vol*equal(stickybit,0);\n' + 'sample2 = sample2 + equal(stickybit,0);\n' + 'edge = bnot(equal(bit2,stickybit));\n' + 'volAvg = volAvg - volAvg*edge*stickybit;\n' + 'volAvg2 = volAvg2 - volAvg2*edge*equal(stickybit,0);\n' + 'sample1 = sample1  - sample1*edge*stickybit;\n' + 'sample2 = sample2  - sample2*edge*equal(stickybit,0);\n' + 'diff = if(equal(stickybit,1), (basssum/(volAvg2/sample2)) , 0);\n' + 'diff = if(equal(stickybit,0), (basssum/(volAvg/sample1)), diff);\n' + 'q3 = diff;\n' + 'bit2 = time%2;\n' + 'difftime = difftime + diff*0.03;\n' + 'q2 = difftime;\n' + 'difftime = if(above(difftime,2000),0, difftime);\n' + 'spintime = spintime + bass*0.03*if(equal(state%2,1),1,-1);\n' + 'q8 = spintime;\n' + 'state = state + above(diff,10);\n' + 'monitor = spintime;'),
	'pixel_eqs_str' : ('zoom = 1.05 - sin(q3)*0.04;\n' + 'rot =0;'),
};

return pmap;
});
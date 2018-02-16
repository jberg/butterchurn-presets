define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.56,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.685,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.5,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.025,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 2.21668,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.362,
		ob_size : 0.05,
		b1ed : 0.25,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.5,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 3.222,
		ob_g : 0.5,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 2.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.dbass = 0;
m.interval = 0;
m.lastbeat = 0;
m.pbass = 0;
m.midphase = 0;
m.cheat = 0;
m.sure = 0;
m.beat = 0;
m.phase = 0;
m.maxdbass = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.sure = ifcond(equal(m.sure, 0), 0.6, m.sure);
m.interval = ifcond(equal(m.interval, 0), 40, m.interval);
m.lastbeat = ifcond(equal(m.lastbeat, 0), (m.frame-m.fps), m.lastbeat);
m.dbass = div((m.bass-m.pbass),m.fps);
m.beat = (above(m.dbass, (0.6*m.maxdbass))*above((m.frame-m.lastbeat), div(m.fps,3)));
m.sure = ifcond((m.beat*below(Math.abs((m.frame-(m.interval+m.lastbeat))), div(m.fps,5))), Math.min((0.095+m.sure), 1), ((m.beat*(m.sure-0.095))+(((1-m.beat)*m.sure)*0.9996)));
m.sure = Math.max(0.5, m.sure);
m.cheat = ifcond((above(m.frame, ((m.lastbeat+m.interval)+Math.floor(div(m.fps,10))))*above(m.sure, 0.91)), 1, m.cheat);
m.beat = ifcond(m.cheat, 1, m.beat);
m.sure = ifcond(m.cheat, (0.95*m.sure), m.sure);
m.maxdbass = Math.max((m.maxdbass*0.999), m.dbass);
m.maxdbass = Math.max(0.012, m.maxdbass);
m.maxdbass = Math.min(0.02, m.maxdbass);
m.interval = ifcond(m.beat, (m.frame-m.lastbeat), m.interval);
m.lastbeat = ifcond(m.beat, (m.frame-(m.cheat*Math.floor(div(m.fps,10)))), m.lastbeat);
m.cheat = 0;
m.pbass = m.bass;
m.wave_r = (0.8*Math.abs(Math.cos((((0.07*m.time)+0.532)+Math.sin(((0.125*m.time)+0.789))))));
m.wave_g = (0.8*Math.abs(Math.cos((((0.092*m.time)+2.1)+Math.sin(((0.045*m.time)+1.52))))));
m.wave_b = (0.8*Math.abs(Math.cos((((0.1*m.time)+1.452)+Math.sin(((0.112*m.time)+2.98))))));
m.q1 = m.beat;
m.ib_a = m.beat;
m.ib_r = (1-m.wave_r);
m.ib_g = (1-m.wave_g);
m.ib_b = (1-m.wave_b);
m.wave_mystery = (1-(1.5*Math.min(div((m.frame-m.lastbeat),m.interval), 1)));
m.wave_a = ifcond(above(div((m.frame-m.lastbeat),m.interval), 1), 0, 1);
m.phase = ifcond(equal(mod(m.frame,m.interval), 0), (m.phase+1), m.phase);
m.phase = ifcond(equal(mod(m.phase,18), 17), 0, m.phase);
m.midphase = Math.min(div((m.frame-m.lastbeat),m.interval), 1);
m.sx = ifcond((equal(m.phase, 15)*equal(mod(m.frame,m.interval), 0)), -1, m.sx);
m.sy = ifcond((equal(m.phase, 26)*equal(mod(m.frame,m.interval), 0)), -1, m.sy);
m.phase = ifcond((equal(mod(m.frame,m.interval), 0)*below(Math.cos(div(m.time,6)), -0.5)), (mod((m.phase+rand(13)),14)+1), m.phase);
m.q2 = m.phase;
m.q3 = m.midphase;
		m.rkeys = ['dx','dy','sy','sx','rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1+(0.01*Math.sin((13.28*m.rad))));
m.zoom = (m.zoom+(((equal(m.q2, 1)*m.q3)*0.1)*(m.x-0.5)));
m.zoom = (m.zoom+(((equal(m.q2, 2)*m.q3)*0.1)*(0.5-m.x)));
m.zoom = (m.zoom+(((equal(m.q2, 5)*m.q3)*0.1)*(0.5-m.y)));
m.zoom = (m.zoom+(((equal(m.q2, 4)*m.q3)*0.1)*(m.y-0.5)));
m.rot = (m.rot+((equal(m.q2, 3)*m.q3)*0.3));
m.rot = (m.rot-((equal(m.q2, 6)*m.q3)*0.3));
m.sx = (m.sx+((equal(m.q2, 7)*m.q3)*0.2));
m.sy = (m.sy-((equal(m.q2, 8)*m.q3)*0.2));
m.sx = (m.sx-((equal(m.q2, 9)*m.q3)*0.2));
m.sy = (m.sy+((equal(m.q2, 10)*m.q3)*0.2));
m.dy = (m.dy+((((equal(m.q2, 11)*Math.abs((0.5-m.x)))*sign((0.5-m.x)))*m.q3)*0.2));
m.dx = (m.dx+((((equal(m.q2, 12)*Math.abs((0.5-m.y)))*sign((0.5-m.y)))*m.q3)*0.2));
m.dx = (m.dx-((((equal(m.q2, 14)*Math.abs((0.5-m.y)))*sign((0.5-m.y)))*m.q3)*0.2));
m.dy = (m.dy-((((equal(m.q2, 13)*Math.abs((0.5-m.x)))*sign((0.5-m.x)))*m.q3)*0.2));
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
			r2 : 1.0,
			a : 0.08,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.06283,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.08,
			r : 1.0,
			border_g : 1.0,
			rad : 1.79142,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = ['a'];
			return m;
		},
		'frame_eqs' : function(m) {
m.additive = m.q1;
m.a = ifcond(m.q1, 1, m.a);
m.a2 = m.a;
m.r = m.q1;
m.r2 = m.q1;
m.tex_zoom = (3-(3*m.bass));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('additive = q1;\n' + 'a = if(q1,1,a);\n' + 'a2 = a;\n' + 'r = q1;\n' + 'r2 =q1;\n' + 'tex_zoom = 3 - 3*bass;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.08,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.06283,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.08,
			r : 1.0,
			border_g : 1.0,
			rad : 1.79142,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = ['a'];
			return m;
		},
		'frame_eqs' : function(m) {
m.additive = m.q1;
m.a = ifcond(m.q1, 1, m.a);
m.a2 = m.a;
m.r = m.q1;
m.r2 = m.q1;
m.tex_zoom = (3-(2*m.bass));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('additive = q1;\n' + 'a = if(q1,1,a);\n' + 'a2 = a;\n' + 'r = q1;\n' + 'r2 =q1;\n' + 'tex_zoom = 3 - 2*bass;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.62832,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0303,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.91974,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = ['tex_zoom'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_zoom = (m.q1+m.tex_zoom);
m.a2 = 1;
m.border_a = m.q1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_zoom = q1+tex_zoom;\n' + 'a2 = 1;\n' + 'border_a = q1;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.05,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.05,
			r : 1.0,
			border_g : 1.0,
			rad : 0.13887,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (0.5+(0.49*Math.sin((m.time*0.2754))));
m.b = (0.5+(0.49*Math.sin((m.time*0.6254))));
m.g = (0.5+(0.49*Math.sin((m.time*0.514))));
m.r2 = (0.5+(0.49*Math.sin((m.time*0.475))));
m.b2 = (0.5+(0.49*Math.sin((m.time*0.2107))));
m.g2 = (0.5+(0.49*Math.sin((m.time*0.7714))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = 0.5 + 0.49*sin(time*0.2754);\n' + 'b = 0.5 + 0.49*sin(time*0.6254);\n' + 'g = 0.5 + 0.49*sin(time*0.514);\n' + 'r2 = 0.5 + 0.49*sin(time*0.475);\n' + 'b2 = 0.5 + 0.49*sin(time*0.2107);\n' + 'g2 = 0.5 + 0.49*sin(time*0.7714);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur2, uv);\n' + '  ret_1 = (ret_1 + ((ret_1 - \n' + '    ((tmpvar_3.xyz * scale2) + bias2)\n' + '  ) * 0.3));\n' + '  ret_1 = (ret_1 * 0.9);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 0.4)) + rand_frame.xy);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_noise_lq, tmpvar_4);\n' + '  ret_1 = (ret_1 + ((\n' + '    ((tmpvar_5.xyz - 0.5) / 256.0)\n' + '   * 122.0) * clamp (\n' + '    (treb_att - 1.0)\n' + '  , 0.0, 1.0)));\n' + '  ret_1 = mix (ret_1, vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))), vec3(0.2, 0.2, 0.2));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec2 xlat_mutabled;\n' + 'highp vec3 xlat_mutabledx;\n' + 'highp vec3 xlat_mutabledy;\n' + 'shader_body {\n' + '   vec3 base_1;\n' + '  xlat_mutabled = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_2;\n' + '   vec2 P_3;\n' + '  P_3 = (uv + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_2 = texture2D (sampler_blur1, P_3);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '  xlat_mutabledx = (((tmpvar_2.xyz * scale1) + bias1) - ((tmpvar_4.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '  xlat_mutabledy = (((tmpvar_6.xyz * scale1) + bias1) - ((tmpvar_8.xyz * scale1) + bias1));\n' + '   vec3 tmpvar_10;\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_main, uv);\n' + '  tmpvar_10 = tmpvar_11.xyz;\n' + '  base_1 = tmpvar_10;\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (((\n' + '    -(xlat_mutabledx)\n' + '   + xlat_mutabledy) + 1.0) * 1.2);\n' + '  xlat_mutabled = (texsize.zw * 2.0);\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (uv + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_13 = texture2D (sampler_blur1, P_14);\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (uv - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_15 = texture2D (sampler_blur1, P_16);\n' + '  xlat_mutabledx = (((tmpvar_13.xyz * scale1) + bias1) - ((tmpvar_15.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_17 = texture2D (sampler_blur1, P_18);\n' + '   vec4 tmpvar_19;\n' + '   vec2 P_20;\n' + '  P_20 = (uv - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_19 = texture2D (sampler_blur1, P_20);\n' + '  xlat_mutabledy = (((tmpvar_17.xyz * scale1) + bias1) - ((tmpvar_19.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21.x = xlat_mutabledx.x;\n' + '  tmpvar_21.y = xlat_mutabledy.x;\n' + '   float tmpvar_22;\n' + '  tmpvar_22 = sqrt(dot (tmpvar_21, tmpvar_21));\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23 = mix (((vec3(0.5, 0.4, 0.6) * base_1.x) * tmpvar_12.x), (vec3(8.0, 5.0, 2.0) * tmpvar_22), vec3((tmpvar_22 * 4.2)));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_blur1, uv);\n' + '   vec2 tmpvar_25;\n' + '  tmpvar_25.x = xlat_mutabledx.z;\n' + '  tmpvar_25.y = xlat_mutabledy.z;\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26.w = 1.0;\n' + '  tmpvar_26.xyz = mix (mix (tmpvar_23, (4.0 * tmpvar_23), (\n' + '    (tmpvar_11.y * 0.5)\n' + '   - \n' + '    (vec3(0.09, 0.3, 0.3) * ((tmpvar_24.xyz * scale1) + bias1).z)\n' + '  )), vec3(2.0, 2.0, 0.0), vec3((sqrt(\n' + '    dot (tmpvar_25, tmpvar_25)\n' + '  ) * 0.7)));\n' + '  vec4 ret4 = tmpvar_26;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('sure=if(equal(sure,0),.6,sure);\n' + 'interval=if(equal(interval,0),40,interval);\n' + 'lastbeat=if(equal(lastbeat,0),frame-FPS,lastbeat);\n' + 'dbass=(bass-pbass)/FPS;\n' + 'beat=above(dbass,.6*maxdbass)*above(frame-lastbeat,FPS/3);\n' + 'sure=if(beat*below(abs(frame-(interval+lastbeat)),FPS/5),min(.095+sure,1),beat*(sure-.095)+(1-beat)*sure*.9996);\n' + 'sure=max(.5,sure);\n' + 'cheat=if(above(frame,lastbeat+interval+ int(FPS/10))*above(sure,.91),1,cheat);\n' + 'beat=if(cheat,1,beat);\n' + 'sure=if(cheat,.95*sure,sure);\n' + 'maxdbass=max(maxdbass*.999,dbass);\n' + 'maxdbass=max(.012,maxdbass);\n' + 'maxdbass=min(.02,maxdbass);\n' + 'interval=if(beat, frame-lastbeat,interval);\n' + 'lastbeat=if(beat,frame-cheat*int(FPS/10),lastbeat);\n' + 'cheat=0;\n' + 'pbass=bass;\n' + 'wave_r = .8*abs(cos( .07*time+.532 + sin( .125*time+.789) ));\n' + 'wave_g = .8*abs(cos( .092*time+2.1 + sin( .045*time+1.52) ));\n' + 'wave_b = .8*abs(cos( .1*time+1.452 + sin( .112*time+2.98) ));\n' + 'q1=beat;\n' + 'ib_a=beat;\n' + 'ib_r=1-wave_r;\n' + 'ib_g=1-wave_g;\n' + 'ib_b=1-wave_b;\n' + 'wave_mystery = 1-1.5*min(((frame-lastBeat)/interval),1);\n' + 'wave_a=if(above((frame-lastBeat)/interval,1),0,1);\n' + 'phase=if(equal(frame%interval,0),phase+1,phase);\n' + 'phase=if(equal(phase%18,17),0,phase);\n' + 'midphase=min((frame-lastBeat)/interval,1);\n' + 'sx=if(equal(phase,15)*equal(frame%interval,0),-1,sx);\n' + 'sy=if(equal(phase,26)*equal(frame%interval,0),-1,sy);\n' + 'phase = if(equal(frame%interval,0)*below(cos(time/6), -.5), (phase+rand(13))%14+1,phase);\n' + 'q2=phase;\n' + 'q3=midphase;'),
	'pixel_eqs_str' : ('zoom =1+.01*sin(13.28*rad);\n' + 'zoom=zoom+equal(q2,1)*q3*.1*(x-.5);\n' + 'zoom=zoom+equal(q2,2)*q3*.1*(.5-x);\n' + 'zoom=zoom+equal(q2,5)*q3*.1*(.5-y);\n' + 'zoom=zoom+equal(q2,4)*q3*.1*(y-.5);\n' + 'rot=rot+equal(q2,3)*q3*.3;\n' + 'rot=rot-equal(q2,6)*q3*.3;\n' + 'sx=sx+equal(q2,7)*q3*.2;\n' + 'sy=sy-equal(q2,8)*q3*.2;\n' + 'sx=sx-equal(q2,9)*q3*.2;\n' + 'sy=sy+equal(q2,10)*q3*.2;\n' + 'dy=dy+equal(q2,11)*abs(.5-x)*sign(.5-x)*q3*.2;\n' + 'dx=dx+equal(q2,12)*abs(.5-y)*sign(.5-y)*q3*.2;\n' + 'dx=dx-equal(q2,14)*abs(.5-y)*sign(.5-y)*q3*.2;\n' + 'dy=dy-equal(q2,13)*abs(.5-x)*sign(.5-x)*q3*.2;'),
};

return pmap;
});
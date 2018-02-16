define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.56,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 0.107,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.599,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.1584,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.51,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 0.362,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.0,
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
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 2.0,
		wave_mystery : -0.5,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 2.0,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.grav = 0;
m.tt = 0;
m.xx = 0;
m.yy = 0;
m.a = 0;
m.mn = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.q8 = 0;
m.q9 = 0;
m.bounce = 0;
m.resist = 0;
m.mx = 0;
m.dir = 0;
m.spring = 0;
m.vy2 = 0;
m.dt = 0;
m.vx2 = 0;
m.vy3 = 0;
m.yy1 = 0;
m.xx1 = 0;
m.vx3 = 0;
m.vy4 = 0;
m.r = 0;
m.xx2 = 0;
m.vx4 = 0;
m.s = 0;
m.v = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.y4 = 0;
m.v2 = 0;
m.x4 = 0;
m.q11 = div(0.5,Math.asin(1));
		return m;
	},
	'frame_eqs' : function(m) {
m.ib_r = ((Math.sin(((m.time*1.25)*4))*0.3)+0.7);
m.ib_g = ((Math.sin((m.time*4))*0.3)+0.3);
m.ib_b = ((Math.sin((div(m.time,3)*4))*0.5)+0.5);
m.xx1 = ((m.xx1*0.9)+(m.bass*0.01));
m.xx2 = ((m.xx2*0.9)+(m.treb*0.01));
m.yy1 = ((m.yy1*0.94)+((m.treb+m.bass)*0.0075));
m.x1 = (0.5+((m.xx1-m.xx2)*2));
m.y1 = (0.4+m.yy1);
m.x1 = Math.max(0, Math.min(1, m.x1));
m.y1 = Math.max(0, Math.min(1, m.y1));
m.spring = 10;
m.grav = 0.5;
m.resist = 1;
m.bounce = 0.75;
m.dt = (0.0002*div(60,m.fps));
m.vx2 = ((m.vx2*(1-(m.resist*m.dt)))+(m.dt*(((m.x1+m.x3)-(2*m.x2))*m.spring)));
m.vy2 = ((m.vy2*(1-(m.resist*m.dt)))+(m.dt*((((m.y1+m.y3)-(2*m.y2))*m.spring)-m.grav)));
m.vx3 = ((m.vx3*(1-(m.resist*m.dt)))+(m.dt*(((m.x2+m.x4)-(2*m.x3))*m.spring)));
m.vy3 = ((m.vy3*(1-(m.resist*m.dt)))+(m.dt*((((m.y2+m.y4)-(2*m.y3))*m.spring)-m.grav)));
m.vx4 = ((m.vx4*(1-(m.resist*m.dt)))+(m.dt*((m.x3-m.x4)*m.spring)));
m.vy4 = ((m.vy4*(1-(m.resist*m.dt)))+(m.dt*(((m.y3-m.y4)*m.spring)-m.grav)));
m.x2 = (m.x2+m.vx2);
m.y2 = (m.y2+m.vy2);
m.x3 = (m.x3+m.vx3);
m.y3 = (m.y3+m.vy3);
m.x4 = (m.x4+m.vx4);
m.y4 = (m.y4+m.vy4);
m.vx2 = ifcond(above(m.x2, 0), m.vx2, (Math.abs(m.vx2)*m.bounce));
m.vx2 = ifcond(below(m.x2, 1), m.vx2, (-Math.abs(m.vx2)*m.bounce));
m.vx3 = ifcond(above(m.x3, 0), m.vx3, (Math.abs(m.vx3)*m.bounce));
m.vx3 = ifcond(below(m.x3, 1), m.vx3, (-Math.abs(m.vx3)*m.bounce));
m.vx4 = ifcond(above(m.x4, 0), m.vx4, (Math.abs(m.vx4)*m.bounce));
m.vx4 = ifcond(below(m.x4, 1), m.vx4, (-Math.abs(m.vx4)*m.bounce));
m.vy2 = ifcond(above(m.y2, 0), m.vy2, (Math.abs(m.vy2)*m.bounce));
m.vy2 = ifcond(below(m.y2, 1), m.vy2, (-Math.abs(m.vy2)*m.bounce));
m.vy3 = ifcond(above(m.y3, 0), m.vy3, (Math.abs(m.vy3)*m.bounce));
m.vy3 = ifcond(below(m.y3, 1), m.vy3, (-Math.abs(m.vy3)*m.bounce));
m.vy4 = ifcond(above(m.y4, 0), m.vy4, (Math.abs(m.vy4)*m.bounce));
m.vy4 = ifcond(below(m.y4, 1), m.vy4, (-Math.abs(m.vy4)*m.bounce));
m.q4 = m.x4;
m.q8 = m.y4;
m.q1 = m.aspectx;
m.q2 = m.aspecty;
m.zoom = 1;
m.warp = 0;
m.bb = ((m.bb*0.99)+(m.bass*0.02));
m.mm = ((m.mm*0.99)+(m.mid*0.02));
m.tt = ((m.tt*0.99)+(m.treb*0.02));
m.mx = Math.max(Math.max(m.bb, m.mm), m.tt);
m.mn = Math.min(Math.min(m.bb, m.mm), m.tt);
m.ob_r = div((m.bb-m.mn),(m.mx-m.mn));
m.ob_b = div((m.mm-m.mn),(m.mx-m.mn));
m.ob_g = div((m.tt-m.mn),(m.mx-m.mn));
m.q6 = Math.atan2(m.vx4, m.vy4);
m.q5 = sqrt(((m.vx4*m.vx4)+(m.vy4*m.vy4)));
m.a = ((m.a*0.95)+m.q5);
m.s = ((m.s*0.9)+m.a);
m.q3 = (m.s*0.1);
m.monitor = m.s;
m.wave_a = 0;
m.q9 = (0.5+(0.5*Math.sin((m.time*0.1))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.x = (0.5+((m.x-0.5)*m.q1));
m.y = (0.5+((m.y-0.5)*m.q2));
m.xx = m.q4;
m.yy = (1-m.q8);
m.dx = 0;
m.dy = 0;
m.d = sqrt((((m.x-m.xx)*(m.x-m.xx))+((m.y-m.yy)*(m.y-m.yy))));
m.r = 0.11;
m.v = 20;
m.v2 = m.q5;
m.dx = (((m.v*((Math.sin((m.y-m.yy))*(m.d-m.r))-((m.x-m.xx)*(m.d-div(m.r,2)))))+(Math.cos(m.dir)*m.v2))*(1.00-sigmoid((m.d-m.r), 100)));
m.dy = (((-m.v*((Math.sin((m.x-m.xx))*(m.d-m.r))+((m.y-m.yy)*(m.d-div(m.r,2)))))-(Math.sin(m.dir)*m.v2))*(1.00-sigmoid((m.d-m.r), 100)));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.16188,
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
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 25.12601,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
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
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.99996,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.50126,
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
m.x = (0.5+(Math.sin((m.time*0.618))*0.2));
m.y = (0.5+(Math.cos((m.time*1.618))*0.2));
m.rad = (m.bass*0.05);
m.border_r = (1-((Math.sin((m.time*1.25))*0.3)+0.7));
m.border_g = (1-((Math.sin(m.time)*0.3)+0.3));
m.border_b = (1-((Math.sin(div(m.time,3))*0.5)+0.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5+sin(time*0.618)*0.2;\n' + 'y = 0.5+cos(time*1.618)*0.2;\n' + 'rad = bass*0.05;\n' + 'border_r = 1-(sin(time*1.25)*0.3+0.7);\n' + 'border_g = 1-(sin(time)*0.3+0.3);\n' + 'border_b = 1-(sin(time/3)*0.5+0.5);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.50126,
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
m.x = (0.5+(Math.sin((m.time*2.618))*0.3));
m.y = (0.5+(Math.cos((m.time*3.14))*0.3));
m.rad = (m.bass*0.05);
m.border_r = (1-((Math.sin((m.time*1.25))*0.3)+0.7));
m.border_g = (1-((Math.sin(m.time)*0.3)+0.3));
m.border_b = (1-((Math.sin(div(m.time,3))*0.5)+0.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5+sin(time*2.618)*0.3;\n' + 'y = 0.5+cos(time*3.14)*0.3;\n' + 'rad = bass*0.05;\n' + 'border_r = 1-(sin(time*1.25)*0.3+0.7);\n' + 'border_g = 1-(sin(time)*0.3+0.3);\n' + 'border_b = 1-(sin(time/3)*0.5+0.5);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.9998,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.50126,
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
m.x = (0.5+(Math.sin((-m.time*2.618))*0.4));
m.y = (0.5+(Math.cos((-m.time*1.14))*0.4));
m.rad = (m.bass*0.05);
m.border_r = (1-((Math.sin((m.time*1.25))*0.3)+0.7));
m.border_g = (1-((Math.sin(m.time)*0.3)+0.3));
m.border_b = (1-((Math.sin(div(m.time,3))*0.5)+0.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5+sin(-time*2.618)*0.4;\n' + 'y = 0.5+cos(-time*1.14)*0.4;\n' + 'rad = bass*0.05;\n' + 'border_r = 1-(sin(time*1.25)*0.3+0.7);\n' + 'border_g = 1-(sin(time)*0.3+0.3);\n' + 'border_b = 1-(sin(time/3)*0.5+0.5);'),

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 1.5)) + rand_frame.xy);\n' + '   float tmpvar_3;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_main, uv);\n' + '  tmpvar_3 = dot ((tmpvar_4.xyz - 0.35), vec3(0.32, 0.49, 0.29));\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = dot (tmpvar_4.xyz, vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = clamp ((uv - (\n' + '    ((vec2(0.0, 32.0) * texsize.zw) * tmpvar_3)\n' + '   * \n' + '    (tmpvar_5 - 0.4)\n' + '  )), 0.0, 1.0);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_main, tmpvar_6);\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = ((texture2D (sampler_noise_lq, tmpvar_2) - 0.5) * 0.0038).xyz;\n' + '  ret_1 = ((tmpvar_7.xyz - 0.0011) + tmpvar_8);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9.w = 1.0;\n' + '  tmpvar_9.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_9;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec2 xlat_mutabled;\n' + 'highp vec3 xlat_mutabledx;\n' + 'highp vec3 xlat_mutabledy;shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2.x = 0.5;\n' + '  tmpvar_2.y = (1.0 - _qc.x);\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (uv_orig - tmpvar_2);\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = (3.0 / tmpvar_3.y);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = ((tmpvar_3.x * tmpvar_4) * _qc.x);\n' + '  tmpvar_5.y = (tmpvar_4 * _qc.x);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = ((tmpvar_5 * 0.05) + (vec2(0.1, -0.05) * time));\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_noise_hq, tmpvar_6);\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = fract(((\n' + '    (1.0 - abs(((\n' + '      fract(((tmpvar_3 + vec2(0.5, 1.0)) * 0.5))\n' + '     * 2.0) - 1.0)))\n' + '   + vec2(0.0, -0.02)) - (\n' + '    ((tmpvar_7 - 0.5) * float(int((tmpvar_3.y > 0.0))))\n' + '  .xy * 0.025)));\n' + '  xlat_mutabled = (texsize.zw * 1.5);\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv_orig + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_9 = texture2D (sampler_main, P_10);\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (uv_orig - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_11 = texture2D (sampler_main, P_12);\n' + '  xlat_mutabledx = (tmpvar_9.xyz - tmpvar_11.xyz);\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (uv_orig + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_13 = texture2D (sampler_main, P_14);\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (uv_orig - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_15 = texture2D (sampler_main, P_16);\n' + '  xlat_mutabledy = (tmpvar_13.xyz - tmpvar_15.xyz);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_main, tmpvar_8);\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18.x = xlat_mutabledx.y;\n' + '  tmpvar_18.y = xlat_mutabledy.y;\n' + '   vec2 x_19;\n' + '  x_19 = (tmpvar_18 * 8.0);\n' + '  ret_1 = (((tmpvar_17.x * \n' + '    (1.0 - sqrt(dot (x_19, x_19)))\n' + '  ) * (\n' + '    (hue_shader * 6.0)\n' + '   - 4.0)) * 0.8);\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20.x = xlat_mutabledx.z;\n' + '  tmpvar_20.y = xlat_mutabledy.z;\n' + '   vec2 x_21;\n' + '  x_21 = (tmpvar_20 * 4.0);\n' + '   vec3 tmpvar_22;\n' + '  tmpvar_22 = mix (ret_1, vec3(1.0, 1.0, 1.0), vec3(sqrt(dot (x_21, x_21))));\n' + '  ret_1 = tmpvar_22;\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23.w = 1.0;\n' + '  tmpvar_23.xyz = tmpvar_22;\n' + '  vec4 ret4 = tmpvar_23;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('q11 = 0.5/asin(1);'),
	'frame_eqs_str' : ('ib_r = sin(time*1.25*4)*0.3+0.7;\n' + 'ib_g = sin(time*4)*0.3+0.3;\n' + 'ib_b = sin(time/3*4)*0.5+0.5;\n' + 'xx1 = xx1*0.9 + (bass)*0.01;\n' + 'xx2 = xx2*0.9 + (treb)*0.01;\n' + 'yy1 = yy1*0.94 + (treb+bass)*0.0075;\n' + 'x1 = 0.5 + (xx1-xx2)*2;\n' + 'y1 = 0.4 + yy1;\n' + 'x1 = max(0,min(1,x1));\n' + ' y1 = max(0,min(1,y1));\n' + 'spring = 10;\n' + 'grav = .5;\n' + 'resist = 1;\n' + 'bounce = 0.75;\n' + 'dt = 0.0002*(60/fps);\n' + 'vx2 = vx2*(1-resist*dt) + dt*((x1+x3-2*x2)*spring);\n' + 'vy2 = vy2*(1-resist*dt) + dt*((y1+y3-2*y2)*spring-grav);\n' + 'vx3 = vx3*(1-resist*dt) + dt*((x2+x4-2*x3)*spring);\n' + 'vy3 = vy3*(1-resist*dt) + dt*((y2+y4-2*y3)*spring-grav);\n' + 'vx4 = vx4*(1-resist*dt) + dt*((x3-x4)*spring);\n' + 'vy4 = vy4*(1-resist*dt) + dt*((y3-y4)*spring-grav);\n' + 'x2 = x2 + vx2;\n' + 'y2 = y2 + vy2;\n' + 'x3 = x3 + vx3;\n' + 'y3 = y3 + vy3;\n' + 'x4 = x4 + vx4;\n' + 'y4 = y4 + vy4;\n' + 'vx2 = if(above(x2,0),vx2,abs(vx2)*bounce);\n' + 'vx2 = if(below(x2,1),vx2,-abs(vx2)*bounce);\n' + 'vx3 = if(above(x3,0),vx3,abs(vx3)*bounce);\n' + 'vx3 = if(below(x3,1),vx3,-abs(vx3)*bounce);\n' + 'vx4 = if(above(x4,0),vx4,abs(vx4)*bounce);\n' + 'vx4 = if(below(x4,1),vx4,-abs(vx4)*bounce);\n' + 'vy2 = if(above(y2,0),vy2,abs(vy2)*bounce);\n' + 'vy2 = if(below(y2,1),vy2,-abs(vy2)*bounce);\n' + 'vy3 = if(above(y3,0),vy3,abs(vy3)*bounce);\n' + 'vy3 = if(below(y3,1),vy3,-abs(vy3)*bounce);\n' + 'vy4 = if(above(y4,0),vy4,abs(vy4)*bounce);\n' + 'vy4 = if(below(y4,1),vy4,-abs(vy4)*bounce);\n' + 'q4 = x4;\n' + 'q8 = y4;\n' + 'q1 = aspectx;\n' + 'q2 = aspecty;\n' + 'zoom = 1;\n' + 'warp = 0;\n' + 'bb = bb*0.99 + bass*0.02;\n' + 'mm = mm*0.99 + mid*0.02;\n' + 'tt = tt*0.99 + treb*0.02;\n' + 'mx = max(max(bb,mm),tt);\n' + 'mn = min(min(bb,mm),tt);\n' + 'ob_r = (bb-mn)/(mx-mn);\n' + 'ob_b = (mm-mn)/(mx-mn);\n' + 'ob_g = (tt-mn)/(mx-mn);\n' + 'q6 = atan2(vx4,vy4);\n' + 'q5 = sqrt(vx4*vx4 + vy4*vy4);\n' + 'a = a*0.95 + q5;\n' + 's = s*0.9 + a;\n' + 'q3 = s*0.1;\n' + 'monitor = s;\n' + 'wave_a = 0;\n' + 'q9 = 0.5 + 0.5*sin(time*0.1);'),
	'pixel_eqs_str' : ('x = 0.5 + (x-0.5)*q1;\n' + 'y = 0.5 + (y-0.5)*q2;\n' + 'xx = q4;\n' + 'yy = 1-q8;\n' + 'dx = 0;\n' + ' dy = 0;\n' + 'd = sqrt((x-xx)*(x-xx)+(y-yy)*(y-yy));\n' + 'r = 0.11;\n' + 'v = 20;\n' + 'v2 = q5;\n' + 'dx = (v*(sin(y-yy)*(d-r)-(x-xx)*(d-r/2)) + cos(dir)*v2)*(1.00-sigmoid(d-r,100));\n' + 'dy = (-v*(sin(x-xx)*(d-r)+(y-yy)*(d-r/2)) -sin(dir)*v2)*(1.00-sigmoid(d-r,100));'),
};

return pmap;
});
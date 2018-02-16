define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.21,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 0.01,
		brighten : 1.0,
		mv_y : 0.0,
		wave_scale : 0.625,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.96881,
		ob_r : 0.0,
		sy : 1.00183,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 0.01,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.0,
		ib_r : 1.0,
		mv_b : 1.0,
		echo_zoom : 1.002,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 1.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.7,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.98,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 0.8,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.3,
		mv_r : 0.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.88,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.vvb = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.speed = 0;
m.xtc = 0;
m.q8 = 0;
m.q9 = 0;
m.dmt = 0;
m.vb = 0;
m.vvm = 0;
m.q30 = 0;
m.q20 = 0;
m.q31 = 0;
m.q10 = 0;
m.q21 = 0;
m.q32 = 0;
m.q11 = 0;
m.q22 = 0;
m.q12 = 0;
m.q23 = 0;
m.q13 = 0;
m.q24 = 0;
m.vvt = 0;
m.q14 = 0;
m.q25 = 0;
m.q15 = 0;
m.q26 = 0;
m.saliva = 0;
m.q16 = 0;
m.q27 = 0;
m.q17 = 0;
m.q28 = 0;
m.vm = 0;
m.morphine = 0;
m.q18 = 0;
m.q29 = 0;
m.q19 = 0;
m.acid = 0;
m.vt = 0;
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
m.decay = 0.98;
m.zoom = -0.999;
m.ib_b = ((Math.sin(div(m.time,10))+(0.5*0.5))+0.3);
m.ib_g = (((Math.cos(div(m.time,7))*0.3)+(0.5*0.5))+0.3);
m.ib_r = (((Math.sin(div(m.time,8))*0.3)+(0.5*0.5))+0.3);
m.ob_b = ((Math.sin((div(m.time,8)+0.9))+(0.5*0.5))+0.5);
m.ob_g = Math.sin((div(m.time,10)+0.1));
m.ob_r = (Math.cos(div(m.time,7))+0.3);
m.vb = ((m.vb*0.95)+(((1-m.vb)*pow(m.bass_att, 2))*0.02));
m.vvb = ((m.vvb*0.95)+(((1-m.vvb)*m.vb)*0.01));
m.vm = ((m.vm*0.95)+(((1-m.vm)*pow(m.mid_att, 2))*0.02));
m.vvm = ((m.vvm*0.95)+(((1-m.vvm)*m.vm)*0.01));
m.vt = ((m.vt*0.95)+(((1-m.vt)*pow(m.treb_att, 2))*0.02));
m.vvt = ((m.vvt*0.95)+(((1-m.vvt)*m.vt)*0.01));
m.vvb = Math.min(1, Math.max(0, m.vvb));
m.vvm = Math.min(1, Math.max(0, m.vvm));
m.vvt = Math.min(1, Math.max(0, m.vvt));
m.q1 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q2 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q3 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q4 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q5 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q6 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q7 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q8 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q9 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q10 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q11 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q12 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q13 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q14 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q15 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q16 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q17 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q18 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q19 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q20 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q21 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q22 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q23 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q24 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q25 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q26 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q27 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q28 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q29 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q30 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q31 = (((m.vvb+m.vvm)+m.vvt)*10);
m.q32 = (((m.vvb+m.vvm)+m.vvt)*10);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.xtc = Math.sin(m.time);
m.speed = (40-(above(m.bass, 0.9)*15));
m.speed = (m.speed+m.xtc);
m.acid = (m.x*Math.sin(div(m.time,10)));
m.morphine = (m.y*Math.cos(div(m.time,10)));
m.dmt = (above(div(((m.treb*m.treb)*m.treb),3), 2.5)*0.01);
m.saliva = (above(m.treb, 0.9)*0.01);
m.cx = ((m.dmt*m.rad)*0.1);
m.cy = ((m.saliva*m.rad)*0.1);
m.dx = (Math.sin((m.y*m.speed))*0.01);
m.dy = (Math.cos((m.x*m.speed))*0.01);
m.zoom = (Math.cos((m.x*(Math.sin(div(m.time,10))*0.1)))+(m.y*(Math.cos(div(m.time,10))*0.1)));
m.warp = ((-2*((((Math.sin(div(m.time,2))*0.5)+0.5)*2)*m.x))+((((Math.cos(div(m.time,2))*0.5)+0.5)*2)*m.y));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.7,
			scaling : 100.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.9,
			thick : 1.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (Math.cos(m.time)*0.1);
m.y = (Math.sin(m.time)*0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=cos(time)*0.1;\n' + 'y=sin(time)*0.1;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 81.95444,
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
m.wave_x = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.wave_x = 1;
		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('wave_x=1;'),
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
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.1885,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.93101,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.73891,
			x : 0.5,
			y : 0.5,
			ang : 3.14159,
			sides : 16.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.var = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (Math.sin(div(m.time,2))*6);
m.var = (0.12-(above(m.bass, 0.8)*0.2));
m.g = (Math.sin(div(m.time,10))*0.1);
m.r = (Math.cos(div(m.time,12))*0.2);
m.b = (Math.sin(div(m.time,15))*0.3);
m.g2 = (Math.cos(div(m.time,15))*0.3);
m.r2 = (Math.sin(div(m.time,20))*0.1);
m.b2 = (Math.cos(div(m.time,10))*0.2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=sin(time/2)*6;\n' + 'var=0.12-(above(bass,0.8)*0.2);\n' + 'g=sin(time/10)*0.1;\n' + 'r=cos(time/12)*0.2;\n' + 'b=sin(time/15)*0.3;\n' + 'g2=cos(time/15)*0.3;\n' + 'r2=sin(time/20)*0.1;\n' + 'b2=cos(time/10)*0.2;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.62832,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.2,
			tex_zoom : 5.58213,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.6,
			a2 : 0.0,
			r : 0.36,
			border_g : 0.0,
			rad : 0.4149,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (Math.cos(m.time)*6);
m.sides = (20-(div(((m.bass+m.mid)+m.treb),3)*15));
m.x = ((Math.cos(div(m.time,2))*0.3)+0.5);
m.y = ((Math.sin(div(m.time,2))*0.3)+0.5);
m.r = (Math.sin(div(m.time,5))*0.8);
m.g = (Math.sin(div(m.time,5))*0.879);
m.b = (Math.cos(div(m.time,5))*0.567);
m.r2 = (Math.sin(div(m.time,5))*0.8);
m.g2 = (Math.cos(div(m.time,5))*0.879);
m.b2 = (Math.cos(div(m.time,5))*567);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=cos(time)*6;\n' + 'sides=20-((bass+mid+treb)/3)*15;\n' + 'x=cos(time/2)*0.3+0.5;\n' + 'y=sin(time/2)*0.3+0.5;\n' + 'r=sin(time/5)*0.8;\n' + 'g=sin(time/5)*0.879;\n' + 'b=cos(time/5)*.567;\n' + 'r2=sin(time/5)*0.8;\n' + 'g2=cos(time/5)*0.879;\n' + 'b2=cos(time/5)*567;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.62832,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.26672,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.21524,
			x : 0.5,
			y : 0.5,
			ang : 5.02655,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (Math.sin(div(m.time,5))*6);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=sin(time/5)*6;'),

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
	'warp' : ('shader_body {\n' + '   vec3 pic_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv);\n' + '  ret_2 = tmpvar_3.xyz;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_noise_lq, tmpvar_4);\n' + '  ret_2 = (ret_2 + ((tmpvar_5.xyz - 0.5) / 256.0));\n' + '   vec2 P_6;\n' + '  P_6 = (uv_orig * aspect.xy);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_onefish, P_6).xyz;\n' + '  pic_1 = tmpvar_7;\n' + '   vec2 x_8;\n' + '  x_8 = (uv - uv_orig);\n' + '  ret_2 = (mix (ret_2, pic_1, vec3(clamp (\n' + '    (1.0 - (abs((\n' + '      ((dot (pic_1, vec3(0.32, 0.49, 0.29)) * 0.8) + 0.1)\n' + '     - \n' + '      ((fract((time * 0.2)) * 0.5) + 0.25)\n' + '    )) * 13.0))\n' + '  , 0.0, 1.0))) * (0.97 + (0.03 * \n' + '    clamp ((sqrt(dot (x_8, x_8)) * 200.0), 0.0, 1.0)\n' + '  )));\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9.w = 1.0;\n' + '  tmpvar_9.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_9;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '   float tmpvar_3;\n' + '  tmpvar_3 = -(_qb.w);\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = (uv.x - 0.5);\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = (uv.y - 0.5);\n' + '  tmpvar_2.x = (((\n' + '    (tmpvar_4 * cos((tmpvar_3 * 0.29)))\n' + '   + \n' + '    (tmpvar_5 * sin((tmpvar_3 * 0.29)))\n' + '  ) * 0.8) + 0.5);\n' + '  tmpvar_2.y = (((\n' + '    (-(tmpvar_4) * sin((tmpvar_3 * 0.29)))\n' + '   + \n' + '    (tmpvar_5 * cos((tmpvar_3 * 0.29)))\n' + '  ) * 0.8) + 0.5);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = ((0.5 - uv) + 0.5);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = mix (texture2D (sampler_main, uv).xyz, texture2D (sampler_main, tmpvar_6).xyz, vec3(0.5, 0.5, 0.5));\n' + '  ret_1 = (tmpvar_7 * 0.8);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (tmpvar_2 * _qc.x);\n' + '  tmpvar_8 = texture2D (sampler_main, P_9);\n' + '  ret_1 = (ret_1 + (tmpvar_8.xyz * 0.2));\n' + '  ret_1 = (1.0 - ((ret_1 * \n' + '    (1.0 - ret_1)\n' + '  ) * 4.0));\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=0.98;\n' + 'zoom=-.999;\n' + 'ib_b=((sin(time/10))+0.5*0.5)+0.3;\n' + 'ib_g=((cos(time/7)*0.3)+0.5*0.5)+0.3;\n' + 'ib_r=((sin(time/8)*0.3)+0.5*0.5)+0.3;\n' + 'ob_b=(sin((time/8)+0.9)+0.5*0.5)+0.5;\n' + 'ob_g=sin((time/10)+0.1);\n' + 'ob_r=(cos(time/7))+0.3;\n' + 'vb = vb*0.95 + (1-vb)*pow(bass_att,2)*0.02;\n' + 'vvb = vvb*0.95 + (1-vvb)*vb*0.01;\n' + 'vm = vm*0.95 + (1-vm)*pow(mid_att,2)*0.02;\n' + 'vvm = vvm*0.95 + (1-vvm)*vm*0.01;\n' + 'vt = vt*0.95 + (1-vt)*pow(treb_att,2)*0.02;\n' + 'vvt = vvt*0.95 + (1-vvt)*vt*0.01;\n' + 'vvb = min(1,max(0,vvb));\n' + 'vvm = min(1,max(0,vvm));\n' + 'vvt = min(1,max(0,vvt));\n' + 'q1   = (vvb+vvm+vvt)*10;\n' + 'q2   = (vvb+vvm+vvt)*10;\n' + 'q3   = (vvb+vvm+vvt)*10;\n' + 'q4   = (vvb+vvm+vvt)*10;\n' + 'q5   = (vvb+vvm+vvt)*10;\n' + 'q6   = (vvb+vvm+vvt)*10;\n' + 'q7   = (vvb+vvm+vvt)*10;\n' + 'q8   = (vvb+vvm+vvt)*10;\n' + 'q9   = (vvb+vvm+vvt)*10;\n' + 'q10  = (vvb+vvm+vvt)*10;\n' + 'q11  = (vvb+vvm+vvt)*10;\n' + 'q12  = (vvb+vvm+vvt)*10;\n' + 'q13  = (vvb+vvm+vvt)*10;\n' + 'q14  = (vvb+vvm+vvt)*10;\n' + 'q15  = (vvb+vvm+vvt)*10;\n' + 'q16  = (vvb+vvm+vvt)*10;\n' + 'q17  = (vvb+vvm+vvt)*10;\n' + 'q18  = (vvb+vvm+vvt)*10;\n' + 'q19  = (vvb+vvm+vvt)*10;\n' + 'q20  = (vvb+vvm+vvt)*10;\n' + 'q21  = (vvb+vvm+vvt)*10;\n' + 'q22  = (vvb+vvm+vvt)*10;\n' + 'q23  = (vvb+vvm+vvt)*10;\n' + 'q24  = (vvb+vvm+vvt)*10;\n' + 'q25  = (vvb+vvm+vvt)*10;\n' + 'q26  = (vvb+vvm+vvt)*10;\n' + 'q27  = (vvb+vvm+vvt)*10;\n' + 'q28  = (vvb+vvm+vvt)*10;\n' + 'q29  = (vvb+vvm+vvt)*10;\n' + 'q30  = (vvb+vvm+vvt)*10;\n' + 'q31  = (vvb+vvm+vvt)*10;\n' + 'q32  = (vvb+vvm+vvt)*10;'),
	'pixel_eqs_str' : ('xtc=sin(time);\n' + 'speed=40-above(bass,0.9)*15;\n' + 'speed=speed+xtc;\n' + 'acid=x*sin(time/10);\n' + 'morphine=y*cos(time/10);\n' + 'dmt=above((treb*treb*treb/3),2.5)*.01;\n' + 'saliva=above(treb,0.9)*.01;\n' + 'cx=dmt*(rad)*0.1;\n' + 'cy=saliva*(rad)*0.1;\n' + 'dx=sin(y*speed)*0.01;\n' + 'dy=cos(x*speed)*0.01;\n' + 'zoom=cos(x*(sin(time/10)*0.1))+(y*(cos(time/10)*0.1));\n' + 'warp=-2*(((sin(time/2)*0.5+0.5)*2)*x)+(((cos(time/2)*0.5+0.5)*2)*y);'),
};

return pmap;
});
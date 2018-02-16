define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.28,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 1.286,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.01605,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 3.04777,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.0,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0173,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.8,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.tt = 0;
m.dm = 0;
m.is_beat = 0;
m.q30 = 0;
m.dec_med = 0;
m.q31 = 0;
m.dt = 0;
m.q32 = 0;
m.q11 = 0;
m.r = 0;
m.index = 0;
m.q12 = 0;
m.q23 = 0;
m.avg = 0;
m.q13 = 0;
m.q24 = 0;
m.q14 = 0;
m.q25 = 0;
m.q15 = 0;
m.q26 = 0;
m.q16 = 0;
m.q27 = 0;
m.beat = 0;
m.w = 0;
m.q17 = 0;
m.q28 = 0;
m.q18 = 0;
m.q29 = 0;
m.z = 0;
m.t0 = 0;
m.d_x = 0;
m.dec_slow = 0;
m.db = 0;
m.d_y = 0;
m.peak = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.9, div(30,m.fps));
m.dec_slow = pow(0.99, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.5+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),2);
m.d_x = ifcond(m.is_beat, ((rand(2000)-1000)*0.001), m.d_x);
m.d_y = ifcond(m.is_beat, ((rand(2000)-1000)*0.001), m.d_y);
m.r = ifcond(m.is_beat, ((rand(2000)-1000)*0.001), m.r);
m.z = ifcond(m.is_beat, (rand(1000)*0.001), m.z);
m.zoom = (1.03+(m.z*0.06));
m.rot = (m.r*0.06);
m.dx = (m.d_x*0.01);
m.dy = (m.d_y*0.01);
m.q1 = 1;
m.q23 = div(rand(1000),1000);
m.q24 = div(rand(1000),1000);
m.q25 = (div(rand(1000),1000)*6.28);
m.q26 = (m.q25-3.14);
m.q27 = (div(rand(1000),12000)+0.04);
m.q28 = div(rand(1000),1000);
m.q29 = div(rand(1000),1000);
m.q30 = (div(rand(1000),1000)*6.28);
m.q31 = (m.q30-3.14);
m.q32 = (div(rand(1000),14000)+0.04);
m.db = ((m.db*0.98)+(m.bass*0.2));
m.bb = (m.bb+(m.db*0.1));
m.dt = ((m.dt*0.98)+(m.treb*0.2));
m.tt = (m.tt+(m.dt*0.1));
m.dm = ((m.dm*0.98)+(m.mid*0.2));
m.mm = (m.mm+(m.dm*0.1));
m.w = ((m.bb-m.tt)*0.1);
m.q11 = Math.sin(m.w);
m.q12 = Math.cos(m.w);
m.q13 = (0.5+(Math.sin(((m.bb-m.mm)*0.1))*0.25));
m.q14 = (0.5+(Math.sin(((m.tt-m.mm)*0.1))*0.25));
m.q15 = 4;
m.q16 = 0.06;
m.q17 = Math.sin(-m.w);
m.q18 = Math.cos(-m.w);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.ma = 0;

			m.rkeys = ['my','mx','ma'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ma = (m.ma+(((above(m.bass, 1)*3.1415)*0.01)*m.bass));
m.ma = (m.ma-(((above(m.treb, 1)*3.1415)*0.01)*m.treb));
m.mx = (m.mx+(0.0002*Math.cos(m.ma)));
m.my = (m.my+(0.0002*Math.sin(m.ma)));
m.mx = ifcond(above(m.mx, 0.9), (0.9-m.mx), m.mx);
m.my = ifcond(above(m.my, 0.9), (0.9-m.my), m.my);
m.mx = ifcond(below(m.mx, 0.1), (0.9+m.mx), m.mx);
m.my = ifcond(below(m.my, 0.1), (0.9+m.my), m.my);
m.x = m.mx;
m.y = m.my;
m.a = above(((m.bass+m.mid)+m.treb), 0.8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ma=ma+(above(bass,1)*3.1415*.01*bass);\n' + 'ma=ma-(above(treb,1)*3.1415*.01*treb);\n' + 'mx=mx+(.0002*cos(ma));\n' + 'my=my+(.0002*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.8));'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.ma = 0;

			m.rkeys = ['my','mx','ma'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ma = (m.ma+(((above(m.bass, 1)*3.1415)*0.05)*m.bass));
m.ma = (m.ma-(((above(m.mid, 1)*3.1415)*0.05)*m.mid));
m.mx = (m.mx+(0.0001*Math.cos(m.ma)));
m.my = (m.my+(0.0001*Math.sin(m.ma)));
m.mx = ifcond(above(m.mx, 0.9), (0.9-m.mx), m.mx);
m.my = ifcond(above(m.my, 0.9), (0.9-m.my), m.my);
m.mx = ifcond(below(m.mx, 0.1), (0.9+m.mx), m.mx);
m.my = ifcond(below(m.my, 0.1), (0.9+m.my), m.my);
m.x = m.mx;
m.y = m.my;
m.a = above(((m.bass+m.mid)+m.treb), 0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ma=ma+(above(bass,1)*3.1415*.05*bass);\n' + 'ma=ma-(above(mid,1)*3.1415*.05*mid);\n' + 'mx=mx+(.0001*cos(ma));\n' + 'my=my+(.0001*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.1));'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.ma = 0;

			m.rkeys = ['my','mx','ma'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ma = (m.ma+(((above(m.mid, 1)*3.1415)*0.01)*m.mid));
m.ma = (m.ma-(((above(m.treb, 1)*3.1415)*0.01)*m.treb));
m.mx = (m.mx+(0.0004*Math.cos(m.ma)));
m.my = (m.my+(0.0004*Math.sin(m.ma)));
m.mx = ifcond(above(m.mx, 0.9), (0.9-m.mx), m.mx);
m.my = ifcond(above(m.my, 0.9), (0.9-m.my), m.my);
m.mx = ifcond(below(m.mx, 0.1), (0.9+m.mx), m.mx);
m.my = ifcond(below(m.my, 0.1), (0.9+m.my), m.my);
m.x = m.mx;
m.y = m.my;
m.a = above(((m.bass+m.mid)+m.treb), 0.3);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ma=ma+(above(mid,1)*3.1415*.01*mid);\n' + 'ma=ma-(above(treb,1)*3.1415*.01*treb);\n' + 'mx=mx+(.0004*cos(ma));\n' + 'my=my+(.0004*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.3));'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.ma = 0;

			m.rkeys = ['my','mx','ma'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ma = (m.ma+(((above(m.bass, 0.5)*3.1415)*0.02)*m.bass));
m.ma = (m.ma-(((above(m.treb, 0.5)*3.1415)*0.02)*m.treb));
m.mx = (m.mx+(0.0008*Math.cos(m.ma)));
m.my = (m.my+(0.0008*Math.sin(m.ma)));
m.mx = ifcond(above(m.mx, 0.9), (0.9-m.mx), m.mx);
m.my = ifcond(above(m.my, 0.9), (0.9-m.my), m.my);
m.mx = ifcond(below(m.mx, 0.1), (0.9+m.mx), m.mx);
m.my = ifcond(below(m.my, 0.1), (0.9+m.my), m.my);
m.x = m.mx;
m.y = m.my;
m.a = above(((m.bass+m.mid)+m.treb), 0.2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ma=ma+(above(bass,.5)*3.1415*.02*bass);\n' + 'ma=ma-(above(treb,.5)*3.1415*.02*treb);\n' + 'mx=mx+(.0008*cos(ma));\n' + 'my=my+(.0008*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.2));'),

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
			g2 : 0.0,
			tex_zoom : 4.36077,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.11589,
			x : 0.49,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 1.0,
			num_inst : 2.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = div(rand(1000),1000);
m.y = div(rand(1000),1000);
m.ang = div(rand(150),100);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = rand(1000)/1000;\n' + 'y = rand(1000)/1000;\n' + 'ang = rand(150)/100;'),

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 1.2)) + rand_frame.xy);\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = tmpvar_7.x;\n' + '  tmpvar_14.y = tmpvar_12.x;\n' + '   vec2 tmpvar_15;\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = mix (uv_orig, uv, vec2(0.1, 0.1));\n' + '  tmpvar_15 = (tmpvar_16 + ((tmpvar_14 * texsize.zw) * 2.0));\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = tmpvar_7.y;\n' + '  tmpvar_17.y = tmpvar_12.y;\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18 = (mix (uv_orig, uv, vec2(0.3, 0.3)) + ((tmpvar_17 * texsize.zw) * 2.0));\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = tmpvar_7.z;\n' + '  tmpvar_19.y = tmpvar_12.z;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = (tmpvar_16 + ((tmpvar_19 * texsize.zw) * 2.0));\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_main, tmpvar_15);\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_main, tmpvar_15);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_blur3, tmpvar_15);\n' + '  ret_1.x = (tmpvar_21.x - ((tmpvar_22.xyz - \n' + '    ((tmpvar_23.xyz * scale3) + bias3)\n' + '  ).x * 0.01));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_main, tmpvar_18);\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_main, tmpvar_18);\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26 = texture2D (sampler_blur3, tmpvar_18);\n' + '  ret_1.y = (tmpvar_24.y - ((tmpvar_25.xyz - \n' + '    ((tmpvar_26.xyz * scale3) + bias3)\n' + '  ).y * 0.01));\n' + '   vec4 tmpvar_27;\n' + '  tmpvar_27 = texture2D (sampler_main, tmpvar_20);\n' + '   vec4 tmpvar_28;\n' + '  tmpvar_28 = texture2D (sampler_main, tmpvar_20);\n' + '   vec4 tmpvar_29;\n' + '  tmpvar_29 = texture2D (sampler_blur3, tmpvar_20);\n' + '  ret_1.z = (tmpvar_27.z - ((tmpvar_28.xyz - \n' + '    ((tmpvar_29.xyz * scale3) + bias3)\n' + '  ).z * 0.01));\n' + '   vec4 tmpvar_30;\n' + '  tmpvar_30 = texture2D (sampler_noise_lq, tmpvar_13);\n' + '  ret_1 = (ret_1 + (-0.004 + (\n' + '    (tmpvar_30.xyz - 0.5)\n' + '   * 0.1)));\n' + '   vec4 tmpvar_31;\n' + '  tmpvar_31.w = 1.0;\n' + '  tmpvar_31.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_31;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 6.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = dot (tmpvar_7, vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_13.y = dot (tmpvar_12, vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = (uv - (0.25 * tmpvar_13));\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15.x = dot (tmpvar_7, vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_15.y = dot (tmpvar_12, vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = (uv + (0.25 * tmpvar_15));\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur3, tmpvar_14);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_blur1, tmpvar_14);\n' + '  ret_1 = ((0.8 * (\n' + '    (tmpvar_17.xyz * scale3)\n' + '   + bias3)) - ((tmpvar_18.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur1, uv);\n' + '  ret_1 = (ret_1 + (0.6 * (\n' + '    (tmpvar_19.xyz * scale1)\n' + '   + bias1)));\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_blur2, tmpvar_16);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_blur1, tmpvar_16);\n' + '  ret_1 = (ret_1 - ((\n' + '    (tmpvar_20.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_21.xyz * scale1)\n' + '   + bias1)));\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_main, tmpvar_16);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_blur1, tmpvar_16);\n' + '  ret_1 = (ret_1 + ((1.2 * tmpvar_22.xyz) + (0.15 * \n' + '    ((tmpvar_23.xyz * scale1) + bias1)\n' + '  )));\n' + '  ret_1 = (ret_1 + 1.0);\n' + '   float tmpvar_24;\n' + '  tmpvar_24 = dot (ret_1, vec3(0.32, 0.49, 0.29));\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_blur3, tmpvar_14);\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_27;\n' + '  tmpvar_27 = texture2D (sampler_blur1, tmpvar_16);\n' + '  ret_1 = (mix (vec3(tmpvar_24), (\n' + '    (0.75 * vec3(tmpvar_24))\n' + '   * \n' + '    dot ((((0.6 * \n' + '      ((tmpvar_25.xyz * scale3) + bias3)\n' + '    ) - (0.7 * tmpvar_26.xyz)) - (0.3 * (\n' + '      (tmpvar_27.xyz * scale1)\n' + '     + bias1))), vec3(0.32, 0.49, 0.29))\n' + '  ), pow (hue_shader, vec3(tmpvar_24))) * 0.9);\n' + '  ret_1 = (ret_1 * ret_1);\n' + '   vec3 tmpvar_28;\n' + '  tmpvar_28 = sqrt(ret_1);\n' + '  ret_1 = tmpvar_28;\n' + '   vec4 tmpvar_29;\n' + '  tmpvar_29.w = 1.0;\n' + '  tmpvar_29.xyz = tmpvar_28;\n' + '  vec4 ret4 = tmpvar_29;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('dec_med = pow (0.9, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %2;\n' + 'd_x = if(is_beat, (rand(2000)-1000)*0.001 , d_x);\n' + 'd_y = if(is_beat, (rand(2000)-1000)*0.001 , d_y);\n' + 'r = if(is_beat, (rand(2000)-1000)*0.001 , r);\n' + 'z = if(is_beat, rand(1000)*0.001 , z);\n' + 'zoom = 1.03 + z*0.06;\n' + 'rot = r*0.06;\n' + 'dx = d_x*0.01;\n' + 'dy = d_y*0.01;\n' + 'q1 = 1;\n' + 'q23 = rand(1000)/1000;\n' + 'q24 = rand(1000)/1000;\n' + 'q25 = (rand(1000)/1000)*6.28;\n' + 'q26 = q25 - 3.14;\n' + 'q27 = (rand(1000)/12000)+0.04;\n' + 'q28 = rand(1000)/1000;\n' + 'q29 = rand(1000)/1000;\n' + 'q30 = (rand(1000)/1000)*6.28;\n' + 'q31 = q30 - 3.14;\n' + 'q32 = (rand(1000)/14000)+0.04;\n' + 'db = db*0.98 + bass*0.2;\n' + 'bb = bb + db*0.1;\n' + 'dt = dt*0.98 + treb*0.2;\n' + 'tt = tt + dt*0.1;\n' + 'dm = dm*0.98 + mid*0.2;\n' + 'mm = mm + dm*0.1;\n' + 'w = (bb-tt)*0.1;\n' + 'q11 = sin(w);\n' + 'q12 = cos(w);\n' + 'q13 = 0.5 + sin((bb-mm)*0.1)*0.25;\n' + 'q14 = 0.5 + sin((tt-mm)*0.1)*0.25;\n' + 'q15 = 4;\n' + 'q16 = 0.06;\n' + 'q17 = sin(-w);\n' + 'q18 = cos(-w);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
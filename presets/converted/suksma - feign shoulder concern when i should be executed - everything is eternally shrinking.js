define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.4,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.286,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
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
		zoomexp : 0.69972,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.4,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99455,
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
		decay : 0.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.6,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.sim = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_y = (m.wave_y+(0.150*((0.60*Math.sin((1.742*m.bass)))+(0.35*Math.sin((1.921*m.time))))));
m.wave_x = (m.wave_x+(0.150*((0.60*Math.sin((2.111*m.time)))+(0.35*Math.sin((1.111*m.time))))));
m.wave_mystery = ((m.wave_mystery+(0.05*Math.sin((5.1*m.time))))+(0.04*Math.sin((4.5*m.time))));
m.wave_r = (m.wave_r+(0.5*Math.sin((1.11*m.time))));
m.wave_b = (m.wave_b+(0.5*Math.sin((1.3*m.time))));
m.wave_g = (m.wave_g+(0.5*Math.sin((1.2*m.time))));
m.dx = (m.dx+(0.01*Math.sin((5*m.time))));
m.dy = (m.dy+(0.01*Math.sin((10*m.time))));
m.zoom = (m.zoom-(0.05*Math.sin((0.2*m.mid))));
m.rot = (m.rot+(0.005*Math.sin(m.bass)));
m.cx = (m.cx+(0.25*Math.sin((0.5*m.bass))));
m.cy = (m.cy+(0.25*Math.cos((0.5*m.treb))));
m.dx = (m.dx+(0.01*Math.sin((0.25*m.time))));
m.dy = (m.dy+(0.01*Math.sin((0.25*m.time))));
m.wave_mystery = (m.wave_mystery+(above(Math.sin(mod(m.frame,3)), 0)*1));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.sim = (1.5*Math.sin((1.5*m.bass)));
m.zoom = (m.zoom-ifcond(above(m.sim, 0.75), ((1-m.rad)*0.2), 0));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
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
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.vol = 0;
m.ma = 0;
m.pi23 = 0;

			m.rkeys = ['mx','my','ma'];
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
m.pi23 = ((4*Math.asin(1))*0.333333333);
m.vol = ((m.bass+m.mid)+m.treb);
m.r = ((Math.sin((((m.time*0.3)+m.vol)-(0*m.pi23)))+1)*0.5);
m.g = ((Math.sin((((m.time*0.3)+m.vol)-(1*m.pi23)))+1)*0.5);
m.b = ((Math.sin((((m.time*0.3)+m.vol)-(2*m.pi23)))+1)*0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ma=ma+(above(bass,1)*3.1415*.01*bass);\n' + 'ma=ma-(above(treb,1)*3.1415*.01*treb);\n' + 'mx=mx+(.0002*cos(ma));\n' + 'my=my+(.0002*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.8));\n' + 'pi23=4*asin(1)*.333333333;\n' + 'vol=bass+mid+treb;\n' + 'r=(sin(time*.3+vol-0*pi23)+1)*.5;\n' + 'g=(sin(time*.3+vol-1*pi23)+1)*.5;\n' + 'b=(sin(time*.3+vol-2*pi23)+1)*.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
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
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.vol = 0;
m.ma = 0;
m.pi23 = 0;

			m.rkeys = ['mx','my','ma'];
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
m.pi23 = ((4*Math.asin(1))*0.333333333);
m.vol = ((m.bass+m.mid)+m.treb);
m.r = ((Math.sin((((m.time*0.3)+m.vol)-(0*m.pi23)))+1)*0.5);
m.g = ((Math.sin((((m.time*0.3)+m.vol)-(1*m.pi23)))+1)*0.5);
m.b = ((Math.sin((((m.time*0.3)+m.vol)-(2*m.pi23)))+1)*0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ma=ma+(above(bass,1)*3.1415*.05*bass);\n' + 'ma=ma-(above(mid,1)*3.1415*.05*mid);\n' + 'mx=mx+(.0001*cos(ma));\n' + 'my=my+(.0001*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.1));\n' + 'pi23=4*asin(1)*.333333333;\n' + 'vol=bass+mid+treb;\n' + 'r=(sin(time*.3+vol-0*pi23)+1)*.5;\n' + 'g=(sin(time*.3+vol-1*pi23)+1)*.5;\n' + 'b=(sin(time*.3+vol-2*pi23)+1)*.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.vol = 0;
m.ma = 0;
m.pi23 = 0;

			m.rkeys = ['mx','my','ma'];
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
m.pi23 = ((4*Math.asin(1))*0.333333333);
m.vol = ((m.bass+m.mid)+m.treb);
m.r = ((Math.sin((((m.time*0.3)+m.vol)-(0*m.pi23)))+1)*0.5);
m.g = ((Math.sin((((m.time*0.3)+m.vol)-(1*m.pi23)))+1)*0.5);
m.b = ((Math.sin((((m.time*0.3)+m.vol)-(2*m.pi23)))+1)*0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ma=ma+(above(mid,1)*3.1415*.01*mid);\n' + 'ma=ma-(above(treb,1)*3.1415*.01*treb);\n' + 'mx=mx+(.0004*cos(ma));\n' + 'my=my+(.0004*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.3));\n' + 'pi23=4*asin(1)*.333333333;\n' + 'vol=bass+mid+treb;\n' + 'r=(sin(time*.3+vol-0*pi23)+1)*.5;\n' + 'g=(sin(time*.3+vol-1*pi23)+1)*.5;\n' + 'b=(sin(time*.3+vol-2*pi23)+1)*.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
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
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.vol = 0;
m.ma = 0;
m.pi23 = 0;

			m.rkeys = ['mx','my','ma'];
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
m.pi23 = ((4*Math.asin(1))*0.333333333);
m.vol = ((m.bass+m.mid)+m.treb);
m.r = ((Math.sin((((m.time*0.3)+m.vol)-(0*m.pi23)))+1)*0.5);
m.g = ((Math.sin((((m.time*0.3)+m.vol)-(1*m.pi23)))+1)*0.5);
m.b = ((Math.sin((((m.time*0.3)+m.vol)-(2*m.pi23)))+1)*0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ma=ma+(above(bass,.5)*3.1415*.02*bass);\n' + 'ma=ma-(above(treb,.5)*3.1415*.02*treb);\n' + 'mx=mx+(.0008*cos(ma));\n' + 'my=my+(.0008*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.2));\n' + 'pi23=4*asin(1)*.333333333;\n' + 'vol=bass+mid+treb;\n' + 'r=(sin(time*.3+vol-0*pi23)+1)*.5;\n' + 'g=(sin(time*.3+vol-1*pi23)+1)*.5;\n' + 'b=(sin(time*.3+vol-2*pi23)+1)*.5;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.62832,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.79142,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 1.5)) + rand_frame.xy);\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = mix (uv_orig, uv, vec2(4.0, 4.0));\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = dot (texture2D (sampler_main, tmpvar_3).xyz, vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = mix (uv_orig, uv, vec2(-12.0, -12.0));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur2, tmpvar_5);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (texture2D (sampler_noise_lq, tmpvar_2) - 0.5).xy;\n' + '  uv_1 = (mix (uv_orig, uv, vec2((\n' + '    (tmpvar_4 - dot (((tmpvar_6.xyz * scale2) + bias2), vec3(0.32, 0.49, 0.29)))\n' + '   * 12.0))) + ((tmpvar_7 * texsize.zw) * 0.5));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_main, uv_1);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_noise_lq, tmpvar_2);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = ((tmpvar_8.xyz + (\n' + '    (tmpvar_9 - 0.5)\n' + '   * 0.006).xyz) + -0.0006);\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '  uv_1 = (0.05 + (0.9 * uv));\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (((uv_1 - 0.5) * vec2(-1.0, 1.0)) + 0.5);\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = mix (texture2D (sampler_main, uv_1).xyz, texture2D (sampler_main, tmpvar_3).xyz, vec3(0.5, 0.5, 0.5));\n' + '  ret_2 = tmpvar_4;\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_blur1, uv_1);\n' + '  ret_2 = (abs((\n' + '    ((tmpvar_5.xyz * scale1) + bias1)\n' + '   - ret_2)) * 6.0);\n' + '  ret_2 = (ret_2 * (0.1 + abs(\n' + '    max (sin(bass_att), sin(treb_att))\n' + '  )));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur3, uv_1);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_blur3, tmpvar_3);\n' + '  ret_2 = (ret_2 * max ((\n' + '    (tmpvar_6.xyz * scale3)\n' + '   + bias3), (\n' + '    (tmpvar_7.xyz * scale3)\n' + '   + bias3)));\n' + '  ret_2 = (ret_2 * 1.5);\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_y = wave_y + 0.150*(0.60*sin(1.742*bass) + 0.35*sin(1.921*time));\n' + 'wave_x = wave_x + 0.150*(0.60*sin(2.111*time) + 0.35*sin(1.111*time));\n' + 'wave_mystery = wave_mystery +0.05*sin(5.1*time) + 0.04*sin(4.5*time);\n' + 'wave_r = wave_r + 0.5*sin(1.11*time);\n' + 'wave_b = wave_b + 0.5*sin(1.3*time);\n' + 'wave_g = wave_g + 0.5*sin(1.2*time);\n' + 'dx = dx + 0.01*sin(5*time);\n' + 'dy = dy + 0.01*sin(10*time);\n' + 'zoom = zoom - 0.05*sin(0.2*mid);\n' + 'rot = rot + 0.005*sin(bass);\n' + 'cx = cx + 0.25*sin(0.5*bass);\n' + 'cy = cy + 0.25*cos(0.5*treb);\n' + 'dx = dx + 0.01*sin(0.25*time);\n' + 'dy = dy + 0.01*sin(0.25*time);\n' + 'wave_mystery = wave_mystery + above(sin(frame%3),0)*1;'),
	'pixel_eqs_str' : ('sim = 1.5*sin(1.5*bass);\n' + 'zoom = zoom - if(above(sim,0.75), (1-rad)*0.2, 0);'),
};

return pmap;
});
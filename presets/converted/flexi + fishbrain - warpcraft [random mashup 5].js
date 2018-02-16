define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.14,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 13.125,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 2.0,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.99213,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.5,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 0.137,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.0,
		zoom : 0.99951,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 2.0,
		wave_mystery : 1.0,
		decay : 0.999,
		wave_a : 0.55,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 2.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.6,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.dm = 0;
m.vy2 = 0;
m.dt = 0;
m.vx2 = 0;
m.vy3 = 0;
m.q10 = 0;
m.q21 = 0;
m.yy1 = 0;
m.xx1 = 0;
m.vx3 = 0;
m.vy4 = 0;
m.q11 = 0;
m.q22 = 0;
m.xx2 = 0;
m.vx4 = 0;
m.q12 = 0;
m.q23 = 0;
m.q13 = 0;
m.q24 = 0;
m.q14 = 0;
m.q25 = 0;
m.ddt = 0;
m.q15 = 0;
m.q26 = 0;
m.q16 = 0;
m.q27 = 0;
m.w = 0;
m.q28 = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.y4 = 0;
m.x4 = 0;
m.db = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.xx1 = ((m.xx1*0.9)+(m.bass*0.01));
m.xx2 = ((m.xx2*0.9)+(m.treb*0.01));
m.yy1 = ((m.yy1*0.94)+((m.treb+m.bass)*0.0075));
m.x1 = (0.5+((m.xx1-m.xx2)*2));
m.y1 = (0.4+(m.yy1*1.5));
m.dt = div(0.03,m.fps);
m.vx2 = ((m.vx2*(1-(2*m.dt)))+(m.dt*(((m.x1+m.x3)-(2*m.x2))*10)));
m.vy2 = ((m.vy2*(1-(2*m.dt)))+(m.dt*((((m.y1+m.y3)-(2*m.y2))*10)-0.5)));
m.vx3 = ((m.vx3*(1-(2*m.dt)))+(m.dt*(((m.x2+m.x4)-(2*m.x3))*10)));
m.vy3 = ((m.vy3*(1-(2*m.dt)))+(m.dt*((((m.y2+m.y4)-(2*m.y3))*10)-0.5)));
m.vx4 = ((m.vx4*(1-(2*m.dt)))+(m.dt*((m.x3-m.x4)*10)));
m.vy4 = ((m.vy4*(1-(2*m.dt)))+(m.dt*(((m.y3-m.y4)*10)-0.5)));
m.x2 = (m.x2+m.vx2);
m.y2 = (m.y2+m.vy2);
m.x3 = (m.x3+m.vx3);
m.y3 = (m.y3+m.vy3);
m.x4 = (m.x4+m.vx4);
m.y4 = (m.y4+m.vy4);
m.vx2 = ifcond(above(m.x2, 0), m.vx2, (Math.abs(m.vx2)*0.5));
m.vx2 = ifcond(below(m.x2, 1), m.vx2, (-Math.abs(m.vx2)*0.5));
m.vx3 = ifcond(above(m.x3, 0), m.vx3, (Math.abs(m.vx3)*0.5));
m.vx3 = ifcond(below(m.x3, 1), m.vx3, (-Math.abs(m.vx3)*0.5));
m.vx4 = ifcond(above(m.x4, 0), m.vx4, (Math.abs(m.vx4)*0.5));
m.vx4 = ifcond(below(m.x4, 1), m.vx4, (-Math.abs(m.vx4)*0.5));
m.vy2 = ifcond(above(m.y2, 0), m.vy2, (Math.abs(m.vy2)*0.5));
m.vy2 = ifcond(below(m.y2, 1), m.vy2, (-Math.abs(m.vy2)*0.5));
m.vy3 = ifcond(above(m.y3, 0), m.vy3, (Math.abs(m.vy3)*0.5));
m.vy3 = ifcond(below(m.y3, 1), m.vy3, (-Math.abs(m.vy3)*0.5));
m.vy4 = ifcond(above(m.y4, 0), m.vy4, (Math.abs(m.vy4)*0.5));
m.vy4 = ifcond(below(m.y4, 1), m.vy4, (-Math.abs(m.vy4)*0.5));
m.q1 = m.x1;
m.q2 = m.x2;
m.q3 = m.x3;
m.q4 = m.x4;
m.q5 = m.y1;
m.q6 = m.y2;
m.q7 = m.y3;
m.q8 = m.y4;
m.q9 = div(1,m.aspectx);
m.q10 = div(1,m.aspecty);
m.q11 = m.aspectx;
m.q12 = m.aspecty;
m.q13 = sqrt(((m.vx4*m.vx4)+(m.vy4*m.vy4)));
m.q14 = Math.atan2(m.vx4, m.vy4);
m.q15 = Math.sin(m.q14);
m.q16 = Math.cos(m.q14);
m.db = ((m.db*0.98)+(m.bass*0.2));
m.bb = (m.bb+(m.db*0.1));
m.ddt = ((m.ddt*0.98)+(m.treb*0.2));
m.tt = (m.tt+(m.ddt*0.1));
m.dm = ((m.dm*0.98)+(m.mid*0.2));
m.mm = (m.mm+(m.dm*0.1));
m.q23 = (0.5+(Math.sin(((m.bb-m.mm)*0.1))*0.25));
m.q24 = (0.5+(Math.sin(((m.tt-m.mm)*0.1))*0.25));
m.w = ((m.bb-m.tt)*0.1);
m.q26 = (0.25-((m.db-m.ddt)*0.025));
m.q21 = Math.sin(m.w);
m.q22 = Math.cos(m.w);
m.q27 = Math.sin(-m.w);
m.q28 = Math.cos(-m.w);
m.q25 = div(1,m.q26);
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
m.x = ((m.mx*1.25)-0.1);
m.y = m.my;
m.a = above(((m.bass+m.mid)+m.treb), 0.8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ma=ma+(above(bass,1)*3.1415*.01*bass);\n' + 'ma=ma-(above(treb,1)*3.1415*.01*treb);\n' + 'mx=mx+(.0002*cos(ma));\n' + 'my=my+(.0002*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx*1.25-0.1;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.8));'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
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
m.x = ((m.mx*1.25)-0.125);
m.y = m.my;
m.a = above(((m.bass+m.mid)+m.treb), 0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ma=ma+(above(bass,1)*3.1415*.05*bass);\n' + 'ma=ma-(above(mid,1)*3.1415*.05*mid);\n' + 'mx=mx+(.0001*cos(ma));\n' + 'my=my+(.0001*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx*1.25-0.125;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.1));'),

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
m.x = ((m.mx*1.25)-0.125);
m.y = m.my;
m.a = above(((m.bass+m.mid)+m.treb), 0.3);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ma=ma+(above(mid,1)*3.1415*.01*mid);\n' + 'ma=ma-(above(treb,1)*3.1415*.01*treb);\n' + 'mx=mx+(.0004*cos(ma));\n' + 'my=my+(.0004*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx*1.25-0.125;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.3));'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
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
m.ma = (m.ma+(((above(m.bass, 0.5)*3.1415)*0.02)*m.bass));
m.ma = (m.ma-(((above(m.treb, 0.5)*3.1415)*0.02)*m.treb));
m.mx = (m.mx+(0.0008*Math.cos(m.ma)));
m.my = (m.my+(0.0008*Math.sin(m.ma)));
m.mx = ifcond(above(m.mx, 0.9), (0.9-m.mx), m.mx);
m.my = ifcond(above(m.my, 0.9), (0.9-m.my), m.my);
m.mx = ifcond(below(m.mx, 0.1), (0.9+m.mx), m.mx);
m.my = ifcond(below(m.my, 0.1), (0.9+m.my), m.my);
m.x = ((m.mx*1.25)-0.125);
m.y = m.my;
m.a = above(((m.bass+m.mid)+m.treb), 0.2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ma=ma+(above(bass,.5)*3.1415*.02*bass);\n' + 'ma=ma-(above(treb,.5)*3.1415*.02*treb);\n' + 'mx=mx+(.0008*cos(ma));\n' + 'my=my+(.0008*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx*1.25-0.125;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.2));'),

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
	'warp' : ('shader_body {\n' + '   vec2 my_uv_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv);\n' + '  ret_2.z = (tmpvar_3.z * 0.5);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = ((uv_orig * texsize.xy) * texsize_noise_lq.zw);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv_orig + (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv_orig - (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv_orig + (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (uv_orig - (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_12 = texture2D (sampler_blur1, P_13);\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = (((2.0 * \n' + '    ((tmpvar_6.xyz * scale1) + bias1)\n' + '  ) - (2.0 * \n' + '    ((tmpvar_8.xyz * scale1) + bias1)\n' + '  )).y * 0.5);\n' + '  tmpvar_14.y = (((2.0 * \n' + '    ((tmpvar_10.xyz * scale1) + bias1)\n' + '  ) - (2.0 * \n' + '    ((tmpvar_12.xyz * scale1) + bias1)\n' + '  )).y * 0.5);\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15 = clamp ((uv_orig + (\n' + '    (tmpvar_14 * texsize.zw)\n' + '   * 4.0)), 0.0, 1.0);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_fw_main, tmpvar_15);\n' + '  ret_2.y = tmpvar_16.y;\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur1, uv_orig);\n' + '  ret_2.y = (ret_2.y + ((\n' + '    (ret_2 - ((tmpvar_17.xyz * scale1) + bias1))\n' + '  .y * 0.025) + -0.014));\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_noise_lq, tmpvar_4);\n' + '  ret_2.y = (ret_2.y + ((tmpvar_18.y - 0.5) * 0.02));\n' + '   vec4 tmpvar_19;\n' + '   vec2 P_20;\n' + '  P_20 = (uv_orig + (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_19 = texture2D (sampler_blur1, P_20);\n' + '   vec4 tmpvar_21;\n' + '   vec2 P_22;\n' + '  P_22 = (uv_orig - (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_21 = texture2D (sampler_blur1, P_22);\n' + '   vec4 tmpvar_23;\n' + '   vec2 P_24;\n' + '  P_24 = (uv_orig + (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_23 = texture2D (sampler_blur1, P_24);\n' + '   vec4 tmpvar_25;\n' + '   vec2 P_26;\n' + '  P_26 = (uv_orig - (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_25 = texture2D (sampler_blur1, P_26);\n' + '   vec2 tmpvar_27;\n' + '  tmpvar_27.x = (((2.0 * \n' + '    ((tmpvar_19.xyz * scale1) + bias1)\n' + '  ) - (2.0 * \n' + '    ((tmpvar_21.xyz * scale1) + bias1)\n' + '  )).x * 0.5);\n' + '  tmpvar_27.y = (((2.0 * \n' + '    ((tmpvar_23.xyz * scale1) + bias1)\n' + '  ) - (2.0 * \n' + '    ((tmpvar_25.xyz * scale1) + bias1)\n' + '  )).x * 0.5);\n' + '  my_uv_1 = (uv - ((tmpvar_27 * texsize.zw) * 4.0));\n' + '   vec4 tmpvar_28;\n' + '  tmpvar_28 = texture2D (sampler_main, my_uv_1);\n' + '  ret_2.x = ((tmpvar_28.x - (ret_2.y * 0.01)) + 0.004);\n' + '   vec4 tmpvar_29;\n' + '  tmpvar_29 = texture2D (sampler_noise_lq, tmpvar_4);\n' + '  ret_2.x = (ret_2.x + ((\n' + '    (tmpvar_29.x - 0.5)\n' + '   * 0.01) + (ret_2.z * 0.14)));\n' + '   vec4 tmpvar_30;\n' + '  tmpvar_30.w = 1.0;\n' + '  tmpvar_30.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_30;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 dz_1;\n' + '   vec3 dy_2;\n' + '   vec3 dx_3;\n' + '   vec2 d_4;\n' + '   vec2 uv_rr_5;\n' + '   vec2 uv_r_6;\n' + '   vec3 ret_7;\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = ((uv - _qf.zw) * aspect.xy);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9.x = ((_qf.y * tmpvar_8.x) - (_qf.x * tmpvar_8.y));\n' + '  tmpvar_9.y = ((_qf.x * tmpvar_8.x) + (_qf.y * tmpvar_8.y));\n' + '  uv_r_6 = (_qg.x * tmpvar_9);\n' + '  uv_r_6 = (_qf.zw + (uv_r_6 * aspect.zw));\n' + '  uv_r_6 = (1.0 - abs((\n' + '    (fract((uv_r_6 * 0.5)) * 2.0)\n' + '   - 1.0)));\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = ((uv_r_6 - _qf.zw) * aspect.xy);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = ((_qg.w * tmpvar_10.x) - (_qg.z * tmpvar_10.y));\n' + '  tmpvar_11.y = ((_qg.z * tmpvar_10.x) + (_qg.w * tmpvar_10.y));\n' + '  uv_rr_5 = (_qg.y * tmpvar_11);\n' + '  uv_rr_5 = (_qf.zw + (uv_rr_5 * aspect.zw));\n' + '   vec2 P_12;\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = (vec2(1.0, 0.0) * texsize.zw);\n' + '  P_12 = (uv_rr_5 + tmpvar_13);\n' + '   vec2 P_14;\n' + '  P_14 = (uv_rr_5 - tmpvar_13);\n' + '   vec3 tmpvar_15;\n' + '  tmpvar_15 = (texture2D (sampler_main, P_12).xyz - texture2D (sampler_main, P_14).xyz);\n' + '  dx_3 = tmpvar_15;\n' + '   vec2 P_16;\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17 = (vec2(0.0, 1.0) * texsize.zw);\n' + '  P_16 = (uv_rr_5 + tmpvar_17);\n' + '   vec2 P_18;\n' + '  P_18 = (uv_rr_5 - tmpvar_17);\n' + '   vec3 tmpvar_19;\n' + '  tmpvar_19 = (texture2D (sampler_main, P_16).xyz - texture2D (sampler_main, P_18).xyz);\n' + '  dy_2 = tmpvar_19;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20.x = dx_3.y;\n' + '  tmpvar_20.y = dy_2.y;\n' + '  d_4 = (texsize.zw * 2.0);\n' + '   vec4 tmpvar_21;\n' + '   vec2 P_22;\n' + '  P_22 = (uv_rr_5 + (vec2(1.0, 0.0) * d_4));\n' + '  tmpvar_21 = texture2D (sampler_blur1, P_22);\n' + '   vec4 tmpvar_23;\n' + '   vec2 P_24;\n' + '  P_24 = (uv_rr_5 - (vec2(1.0, 0.0) * d_4));\n' + '  tmpvar_23 = texture2D (sampler_blur1, P_24);\n' + '  dx_3 = (((tmpvar_21.xyz * scale1) + bias1) - ((tmpvar_23.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_25;\n' + '   vec2 P_26;\n' + '  P_26 = (uv_rr_5 + (vec2(0.0, 1.0) * d_4));\n' + '  tmpvar_25 = texture2D (sampler_blur1, P_26);\n' + '   vec4 tmpvar_27;\n' + '   vec2 P_28;\n' + '  P_28 = (uv_rr_5 - (vec2(0.0, 1.0) * d_4));\n' + '  tmpvar_27 = texture2D (sampler_blur1, P_28);\n' + '  dy_2 = (((tmpvar_25.xyz * scale1) + bias1) - ((tmpvar_27.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_29;\n' + '  tmpvar_29.x = dx_3.y;\n' + '  tmpvar_29.y = dy_2.y;\n' + '  dz_1 = ((tmpvar_20 * 3.0) + tmpvar_29);\n' + '   vec4 tmpvar_30;\n' + '  tmpvar_30 = texture2D (sampler_blur2, uv_rr_5);\n' + '  ret_7 = (vec3(((\n' + '    pow ((sqrt(dot (dz_1, dz_1)) * 0.8), 0.7)\n' + '   + \n' + '    (((tmpvar_30.xyz * scale2) + bias2).y * 0.4)\n' + '  ) - 0.1)) * vec3(0.3, 0.5, 0.7));\n' + '   vec2 tmpvar_31;\n' + '  tmpvar_31.x = dx_3.x;\n' + '  tmpvar_31.y = dy_2.x;\n' + '   vec2 P_32;\n' + '  P_32 = (uv_rr_5 + ((tmpvar_31 * texsize.zw) * 18.0));\n' + '   vec3 tmpvar_33;\n' + '  tmpvar_33 = vec3((texture2D (sampler_main, P_32).x * 6.0));\n' + '   vec3 tmpvar_34;\n' + '  tmpvar_34 = texture2D (sampler_main, uv_rr_5).zzz;\n' + '   vec3 tmpvar_35;\n' + '  tmpvar_35 = mix (mix (ret_7, vec3(0.2, 0.1, 0.0), tmpvar_33), vec3(1.0, 1.0, 1.0), tmpvar_34);\n' + '  ret_7 = tmpvar_35;\n' + '   vec4 tmpvar_36;\n' + '  tmpvar_36.w = 1.0;\n' + '  tmpvar_36.xyz = tmpvar_35;\n' + '  vec4 ret4 = tmpvar_36;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('xx1 = xx1*0.9 + (bass)*0.01;\n' + 'xx2 = xx2*0.9 + (treb)*0.01;\n' + 'yy1 = yy1*0.94 + (treb+bass)*0.0075;\n' + 'x1 = 0.5 + (xx1-xx2)*2;\n' + 'y1 = 0.4 + yy1*1.5;\n' + 'dt = 0.03/fps;\n' + 'vx2 = vx2*(1-2*dt) + dt*((x1+x3-2*x2)*10);\n' + 'vy2 = vy2*(1-2*dt) + dt*((y1+y3-2*y2)*10-0.5);\n' + 'vx3 = vx3*(1-2*dt) + dt*((x2+x4-2*x3)*10);\n' + 'vy3 = vy3*(1-2*dt) + dt*((y2+y4-2*y3)*10-0.5);\n' + 'vx4 = vx4*(1-2*dt) + dt*((x3-x4)*10);\n' + 'vy4 = vy4*(1-2*dt) + dt*((y3-y4)*10-0.5);\n' + 'x2 = x2 + vx2;\n' + ' y2 = y2 + vy2;\n' + 'x3 = x3 + vx3;\n' + ' y3 = y3 + vy3;\n' + 'x4 = x4 + vx4;\n' + ' y4 = y4 + vy4;\n' + 'vx2 = if(above(x2,0),vx2,abs(vx2)*0.5);\n' + 'vx2 = if(below(x2,1),vx2,-abs(vx2)*0.5);\n' + 'vx3 = if(above(x3,0),vx3,abs(vx3)*0.5);\n' + 'vx3 = if(below(x3,1),vx3,-abs(vx3)*0.5);\n' + 'vx4 = if(above(x4,0),vx4,abs(vx4)*0.5);\n' + 'vx4 = if(below(x4,1),vx4,-abs(vx4)*0.5);\n' + 'vy2 = if(above(y2,0),vy2,abs(vy2)*0.5);\n' + 'vy2 = if(below(y2,1),vy2,-abs(vy2)*0.5);\n' + 'vy3 = if(above(y3,0),vy3,abs(vy3)*0.5);\n' + 'vy3 = if(below(y3,1),vy3,-abs(vy3)*0.5);\n' + 'vy4 = if(above(y4,0),vy4,abs(vy4)*0.5);\n' + 'vy4 = if(below(y4,1),vy4,-abs(vy4)*0.5);\n' + 'q1 = x1;\n' + 'q2 = x2;\n' + 'q3 = x3;\n' + 'q4 = x4;\n' + 'q5 = y1;\n' + 'q6 = y2;\n' + 'q7 = y3;\n' + 'q8 = y4;\n' + 'q9 = 1/aspectx;\n' + 'q10 = 1/aspecty;\n' + 'q11 = aspectx;\n' + 'q12 = aspecty;\n' + 'q13 = sqrt(vx4*vx4 + vy4*vy4);\n' + 'q14 = atan2(vx4,vy4);\n' + 'q15 = sin(q14);\n' + 'q16 = cos(q14);\n' + 'db = db*0.98 + bass*0.2;\n' + 'bb = bb + db*0.1;\n' + 'ddt = ddt*0.98 + treb*0.2;\n' + 'tt = tt + ddt*0.1;\n' + 'dm = dm*0.98 + mid*0.2;\n' + 'mm = mm + dm*0.1;\n' + 'q23 = 0.5 + sin((bb-mm)*0.1)*0.25;\n' + 'q24 = 0.5 + sin((tt-mm)*0.1)*0.25;\n' + 'w = (bb-tt)*0.1;\n' + 'q26 = 0.25 - (db-ddt)*0.025;\n' + 'q21 = sin(w);\n' + 'q22 = cos(w);\n' + 'q27 = sin(-w);\n' + 'q28 = cos(-w);\n' + 'q25 = 1/q26;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
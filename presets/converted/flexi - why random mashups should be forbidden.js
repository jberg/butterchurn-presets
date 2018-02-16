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
	'warp' : ('uniform highp float struc;\n' + 'highp float sustain;\n' + 'highp float change;\n' + 'highp float xlat_mutabledist;\n' + 'highp float xlat_mutablestruc;\n' + 'highp vec2 xlat_mutableuv1;\n' + 'shader_body {\n' + '  xlat_mutablestruc = struc;\n' + '   mat3 tmpvar_1;\n' + '  tmpvar_1[0].x = _qe.w;\n' + '  tmpvar_1[0].y = _qf.z;\n' + '  tmpvar_1[0].z = _qg.y;\n' + '  tmpvar_1[1].x = _qf.x;\n' + '  tmpvar_1[1].y = _qf.w;\n' + '  tmpvar_1[1].z = _qg.z;\n' + '  tmpvar_1[2].x = _qf.y;\n' + '  tmpvar_1[2].y = _qg.x;\n' + '  tmpvar_1[2].z = _qg.w;\n' + '   vec3 tmpvar_2;\n' + '  tmpvar_2.x = _qa.w;\n' + '  tmpvar_2.y = _qb.x;\n' + '  tmpvar_2.z = _qb.y;\n' + '  sustain = (0.98 - (_qd.y * 2.0));\n' + '  change = _qd.y;\n' + '   vec2 uv_3;\n' + '   vec3 uv2_4;\n' + '   vec3 noise_5;\n' + '   vec3 ret_6;\n' + '  uv_3 = (((uv - 0.5) * _qd.x) + 0.5);\n' + '  xlat_mutableuv1 = ((uv_3 - 0.5) * aspect.xy);\n' + '   vec2 P_7;\n' + '  P_7 = (uv_3 + rand_frame.yz);\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = fract((8.0 * texture2D (sampler_noise_lq, P_7))).xyz;\n' + '  noise_5 = tmpvar_8;\n' + '  xlat_mutabledist = noise_5.x;\n' + '  if ((noise_5.y > 0.2)) {\n' + '     vec3 tmpvar_9;\n' + '    tmpvar_9 = (noise_5 - vec3(0.4, 0.5, 0.5));\n' + '     vec2 uvi_10;\n' + '    uvi_10 = ((tmpvar_9.zy * 0.003) + uv_3);\n' + '     vec2 pix_11;\n' + '     vec4 nb2_12;\n' + '     vec4 nb_13;\n' + '     vec2 x_14;\n' + '    x_14 = (uvi_10 - 0.5);\n' + '    pix_11 = (texsize.zw * (1.0 + (\n' + '      sqrt(dot (x_14, x_14))\n' + '     * 3.0)));\n' + '     vec2 uvi_15;\n' + '    uvi_15 = (uvi_10 - pix_11);\n' + '     vec4 tmpvar_16;\n' + '    tmpvar_16 = texture2D (sampler_pw_main, uvi_15);\n' + '     vec2 tmpvar_17;\n' + '     vec2 xy_18;\n' + '    xy_18 = tmpvar_16.yz;\n' + '    tmpvar_17 = (_qh.x * floor((\n' + '      (_qh.z * xy_18)\n' + '     + vec2(0.5, 0.5))));\n' + '    nb_13.x = (1.0 - ((0.015625 * \n' + '      (tmpvar_17.x - 0.505)\n' + '    ) + tmpvar_17.y));\n' + '     vec2 uvi_19;\n' + '    uvi_19 = (uvi_10 + (pix_11 * vec2(1.0, -1.0)));\n' + '     vec4 tmpvar_20;\n' + '    tmpvar_20 = texture2D (sampler_pw_main, uvi_19);\n' + '     vec2 tmpvar_21;\n' + '     vec2 xy_22;\n' + '    xy_22 = tmpvar_20.yz;\n' + '    tmpvar_21 = (_qh.x * floor((\n' + '      (_qh.z * xy_22)\n' + '     + vec2(0.5, 0.5))));\n' + '    nb_13.y = (1.0 - ((0.015625 * \n' + '      (tmpvar_21.x - 0.505)\n' + '    ) + tmpvar_21.y));\n' + '     vec2 uvi_23;\n' + '    uvi_23 = (uvi_10 + pix_11);\n' + '     vec4 tmpvar_24;\n' + '    tmpvar_24 = texture2D (sampler_pw_main, uvi_23);\n' + '     vec2 tmpvar_25;\n' + '     vec2 xy_26;\n' + '    xy_26 = tmpvar_24.yz;\n' + '    tmpvar_25 = (_qh.x * floor((\n' + '      (_qh.z * xy_26)\n' + '     + vec2(0.5, 0.5))));\n' + '    nb_13.z = (1.0 - ((0.015625 * \n' + '      (tmpvar_25.x - 0.505)\n' + '    ) + tmpvar_25.y));\n' + '     vec2 uvi_27;\n' + '    uvi_27 = (uvi_10 + (pix_11 * vec2(-1.0, 1.0)));\n' + '     vec4 tmpvar_28;\n' + '    tmpvar_28 = texture2D (sampler_pw_main, uvi_27);\n' + '     vec2 tmpvar_29;\n' + '     vec2 xy_30;\n' + '    xy_30 = tmpvar_28.yz;\n' + '    tmpvar_29 = (_qh.x * floor((\n' + '      (_qh.z * xy_30)\n' + '     + vec2(0.5, 0.5))));\n' + '    nb_13.w = (1.0 - ((0.015625 * \n' + '      (tmpvar_29.x - 0.505)\n' + '    ) + tmpvar_29.y));\n' + '     vec2 uvi_31;\n' + '    uvi_31 = (uvi_10 + (pix_11 * vec2(0.0, -1.0)));\n' + '     vec4 tmpvar_32;\n' + '    tmpvar_32 = texture2D (sampler_pw_main, uvi_31);\n' + '     vec2 tmpvar_33;\n' + '     vec2 xy_34;\n' + '    xy_34 = tmpvar_32.yz;\n' + '    tmpvar_33 = (_qh.x * floor((\n' + '      (_qh.z * xy_34)\n' + '     + vec2(0.5, 0.5))));\n' + '    nb2_12.x = (1.0 - ((0.015625 * \n' + '      (tmpvar_33.x - 0.505)\n' + '    ) + tmpvar_33.y));\n' + '     vec2 uvi_35;\n' + '    uvi_35 = (uvi_10 + (pix_11 * vec2(1.0, 0.0)));\n' + '     vec4 tmpvar_36;\n' + '    tmpvar_36 = texture2D (sampler_pw_main, uvi_35);\n' + '     vec2 tmpvar_37;\n' + '     vec2 xy_38;\n' + '    xy_38 = tmpvar_36.yz;\n' + '    tmpvar_37 = (_qh.x * floor((\n' + '      (_qh.z * xy_38)\n' + '     + vec2(0.5, 0.5))));\n' + '    nb2_12.y = (1.0 - ((0.015625 * \n' + '      (tmpvar_37.x - 0.505)\n' + '    ) + tmpvar_37.y));\n' + '     vec2 uvi_39;\n' + '    uvi_39 = (uvi_10 + (pix_11 * vec2(0.0, 1.0)));\n' + '     vec4 tmpvar_40;\n' + '    tmpvar_40 = texture2D (sampler_pw_main, uvi_39);\n' + '     vec2 tmpvar_41;\n' + '     vec2 xy_42;\n' + '    xy_42 = tmpvar_40.yz;\n' + '    tmpvar_41 = (_qh.x * floor((\n' + '      (_qh.z * xy_42)\n' + '     + vec2(0.5, 0.5))));\n' + '    nb2_12.z = (1.0 - ((0.015625 * \n' + '      (tmpvar_41.x - 0.505)\n' + '    ) + tmpvar_41.y));\n' + '     vec2 uvi_43;\n' + '    uvi_43 = (uvi_10 + (pix_11 * vec2(-1.0, 0.0)));\n' + '     vec4 tmpvar_44;\n' + '    tmpvar_44 = texture2D (sampler_pw_main, uvi_43);\n' + '     vec2 tmpvar_45;\n' + '     vec2 xy_46;\n' + '    xy_46 = tmpvar_44.yz;\n' + '    tmpvar_45 = (_qh.x * floor((\n' + '      (_qh.z * xy_46)\n' + '     + vec2(0.5, 0.5))));\n' + '    nb2_12.w = (1.0 - ((0.015625 * \n' + '      (tmpvar_45.x - 0.505)\n' + '    ) + tmpvar_45.y));\n' + '     vec4 tmpvar_47;\n' + '    tmpvar_47 = min (nb_13, nb2_12);\n' + '    nb_13.zw = tmpvar_47.zw;\n' + '    nb_13.xy = min (tmpvar_47.xy, tmpvar_47.zw);\n' + '    xlat_mutabledist = (min (nb_13.x, nb_13.y) + ((0.005 * tmpvar_9.x) * abs(tmpvar_9.y)));\n' + '  };\n' + '   vec4 tmpvar_48;\n' + '  tmpvar_48 = texture2D (sampler_pw_main, uv_3);\n' + '   vec2 tmpvar_49;\n' + '   vec2 xy_50;\n' + '  xy_50 = tmpvar_48.yz;\n' + '  tmpvar_49 = (_qh.x * floor((\n' + '    (_qh.z * xy_50)\n' + '   + vec2(0.5, 0.5))));\n' + '   float tmpvar_51;\n' + '  tmpvar_51 = min (xlat_mutabledist, (1.0 - (\n' + '    (0.015625 * (tmpvar_49.x - 0.505))\n' + '   + tmpvar_49.y)));\n' + '  xlat_mutabledist = tmpvar_51;\n' + '   vec3 tmpvar_52;\n' + '  tmpvar_52.xy = (xlat_mutableuv1 * tmpvar_51);\n' + '  tmpvar_52.z = (tmpvar_51 - 0.02);\n' + '  uv2_4 = ((fract(\n' + '    ((((\n' + '      (tmpvar_52 / _qb.z)\n' + '     * tmpvar_1) + tmpvar_2) / 8.0) + 0.5)\n' + '  ) - 0.5) * 8.0);\n' + '   vec3 zz_53;\n' + '  zz_53 = ((2.0 * clamp (uv2_4, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - uv2_4);\n' + '   float tmpvar_54;\n' + '  tmpvar_54 = dot (zz_53, zz_53);\n' + '  if ((tmpvar_54 <= 0.25)) {\n' + '    zz_53 = (zz_53 * 4.0);\n' + '  } else {\n' + '    if ((tmpvar_54 <= 1.0)) {\n' + '      zz_53 = (zz_53 / tmpvar_54);\n' + '    };\n' + '  };\n' + '  zz_53 = ((2.6 * zz_53) + uv2_4);\n' + '  zz_53 = ((2.0 * clamp (zz_53, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_53);\n' + '   float tmpvar_55;\n' + '  tmpvar_55 = dot (zz_53, zz_53);\n' + '  if ((tmpvar_55 <= 0.25)) {\n' + '    zz_53 = (zz_53 * 4.0);\n' + '  } else {\n' + '    if ((tmpvar_55 <= 1.0)) {\n' + '      zz_53 = (zz_53 / tmpvar_55);\n' + '    };\n' + '  };\n' + '  zz_53 = ((2.6 * zz_53) + uv2_4);\n' + '  zz_53 = ((2.0 * clamp (zz_53, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_53);\n' + '   float tmpvar_56;\n' + '  tmpvar_56 = dot (zz_53, zz_53);\n' + '  if ((tmpvar_56 <= 0.25)) {\n' + '    zz_53 = (zz_53 * 4.0);\n' + '  } else {\n' + '    if ((tmpvar_56 <= 1.0)) {\n' + '      zz_53 = (zz_53 / tmpvar_56);\n' + '    };\n' + '  };\n' + '  zz_53 = ((2.6 * zz_53) + uv2_4);\n' + '  zz_53 = ((2.0 * clamp (zz_53, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_53);\n' + '   float tmpvar_57;\n' + '  tmpvar_57 = dot (zz_53, zz_53);\n' + '  if ((tmpvar_57 <= 0.25)) {\n' + '    zz_53 = (zz_53 * 4.0);\n' + '  } else {\n' + '    if ((tmpvar_57 <= 1.0)) {\n' + '      zz_53 = (zz_53 / tmpvar_57);\n' + '    };\n' + '  };\n' + '  zz_53 = ((2.6 * zz_53) + uv2_4);\n' + '  zz_53 = ((2.0 * clamp (zz_53, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_53);\n' + '   float tmpvar_58;\n' + '  tmpvar_58 = dot (zz_53, zz_53);\n' + '  if ((tmpvar_58 <= 0.25)) {\n' + '    zz_53 = (zz_53 * 4.0);\n' + '  } else {\n' + '    if ((tmpvar_58 <= 1.0)) {\n' + '      zz_53 = (zz_53 / tmpvar_58);\n' + '    };\n' + '  };\n' + '  zz_53 = ((2.6 * zz_53) + uv2_4);\n' + '  zz_53 = ((2.0 * clamp (zz_53, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_53);\n' + '   float tmpvar_59;\n' + '  tmpvar_59 = dot (zz_53, zz_53);\n' + '  if ((tmpvar_59 <= 0.25)) {\n' + '    zz_53 = (zz_53 * 4.0);\n' + '  } else {\n' + '    if ((tmpvar_59 <= 1.0)) {\n' + '      zz_53 = (zz_53 / tmpvar_59);\n' + '    };\n' + '  };\n' + '  zz_53 = ((2.6 * zz_53) + uv2_4);\n' + '  zz_53 = ((2.0 * clamp (zz_53, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_53);\n' + '   float tmpvar_60;\n' + '  tmpvar_60 = dot (zz_53, zz_53);\n' + '  if ((tmpvar_60 <= 0.25)) {\n' + '    zz_53 = (zz_53 * 4.0);\n' + '  } else {\n' + '    if ((tmpvar_60 <= 1.0)) {\n' + '      zz_53 = (zz_53 / tmpvar_60);\n' + '    };\n' + '  };\n' + '  zz_53 = ((2.6 * zz_53) + uv2_4);\n' + '  zz_53 = ((2.0 * clamp (zz_53, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_53);\n' + '   float tmpvar_61;\n' + '  tmpvar_61 = dot (zz_53, zz_53);\n' + '  if ((tmpvar_61 <= 0.25)) {\n' + '    zz_53 = (zz_53 * 4.0);\n' + '  } else {\n' + '    if ((tmpvar_61 <= 1.0)) {\n' + '      zz_53 = (zz_53 / tmpvar_61);\n' + '    };\n' + '  };\n' + '  zz_53 = ((2.6 * zz_53) + uv2_4);\n' + '   float tmpvar_62;\n' + '  tmpvar_62 = sqrt(dot (zz_53, zz_53));\n' + '  xlat_mutablestruc = (sqrt(dot (zz_53.zy, zz_53.zy)) / 20.0);\n' + '   float tmpvar_63;\n' + '   vec4 tmpvar_64;\n' + '  tmpvar_64 = texture2D (sampler_pw_main, uv_3);\n' + '   vec2 tmpvar_65;\n' + '   vec2 xy_66;\n' + '  xy_66 = tmpvar_64.yz;\n' + '  tmpvar_65 = (_qh.x * floor((\n' + '    (_qh.z * xy_66)\n' + '   + vec2(0.5, 0.5))));\n' + '  tmpvar_63 = (1.0 - ((0.015625 * \n' + '    (tmpvar_65.x - 0.505)\n' + '  ) + tmpvar_65.y));\n' + '  if ((((tmpvar_51 <= tmpvar_63) && (tmpvar_62 < 20.0)) && (tmpvar_51 > 0.005))) {\n' + '     vec4 tmpvar_67;\n' + '    tmpvar_67 = texture2D (sampler_blur1, uv_3);\n' + '     vec4 tmpvar_68;\n' + '    tmpvar_68 = texture2D (sampler_main, uv_3);\n' + '    ret_6.x = (((1.0 - sustain) * xlat_mutablestruc) + (sustain * mix (tmpvar_68.xyz, \n' + '      ((((tmpvar_67.xyz * scale1) + bias1) * 3.0) / 3.0)\n' + '    , vec3(\n' + '      (_qd.y * 4.0)\n' + '    )).x));\n' + '     float tmpvar_69;\n' + '    tmpvar_69 = pow (tmpvar_51, _qh.y);\n' + '     vec2 tmpvar_70;\n' + '    tmpvar_70 = (_qh.x * floor((\n' + '      (_qh.z * vec2((1.0 - tmpvar_69)))\n' + '     + vec2(0.5, 0.5))));\n' + '     vec2 tmpvar_71;\n' + '    tmpvar_71.x = ((64.0 * (\n' + '      (1.0 - tmpvar_69)\n' + '     - tmpvar_70.x)) + 0.495);\n' + '    tmpvar_71.y = tmpvar_70.x;\n' + '    ret_6.yz = tmpvar_71;\n' + '  } else {\n' + '     vec4 tmpvar_72;\n' + '    tmpvar_72 = texture2D (sampler_pc_main, uv_orig);\n' + '     vec3 tmpvar_73;\n' + '    tmpvar_73.yz = vec2(1.0, 1.0);\n' + '    tmpvar_73.x = sustain;\n' + '     vec3 tmpvar_74;\n' + '    tmpvar_74.xy = vec2(0.0, 0.0);\n' + '    tmpvar_74.z = change;\n' + '    ret_6 = ((tmpvar_72.xyz * tmpvar_73) - tmpvar_74);\n' + '  };\n' + '   vec4 tmpvar_75;\n' + '  tmpvar_75.w = 1.0;\n' + '  tmpvar_75.xyz = ret_6;\n' + '  vec4 ret4 = tmpvar_75;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 dz_1;\n' + '   vec3 dy_2;\n' + '   vec3 dx_3;\n' + '   vec2 d_4;\n' + '   vec2 uv_rr_5;\n' + '   vec2 uv_r_6;\n' + '   vec3 ret_7;\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = ((uv - _qf.zw) * aspect.xy);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9.x = ((_qf.y * tmpvar_8.x) - (_qf.x * tmpvar_8.y));\n' + '  tmpvar_9.y = ((_qf.x * tmpvar_8.x) + (_qf.y * tmpvar_8.y));\n' + '  uv_r_6 = (_qg.x * tmpvar_9);\n' + '  uv_r_6 = (_qf.zw + (uv_r_6 * aspect.zw));\n' + '  uv_r_6 = (1.0 - abs((\n' + '    (fract((uv_r_6 * 0.5)) * 2.0)\n' + '   - 1.0)));\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = ((uv_r_6 - _qf.zw) * aspect.xy);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = ((_qg.w * tmpvar_10.x) - (_qg.z * tmpvar_10.y));\n' + '  tmpvar_11.y = ((_qg.z * tmpvar_10.x) + (_qg.w * tmpvar_10.y));\n' + '  uv_rr_5 = (_qg.y * tmpvar_11);\n' + '  uv_rr_5 = (_qf.zw + (uv_rr_5 * aspect.zw));\n' + '   vec2 P_12;\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = (vec2(1.0, 0.0) * texsize.zw);\n' + '  P_12 = (uv_rr_5 + tmpvar_13);\n' + '   vec2 P_14;\n' + '  P_14 = (uv_rr_5 - tmpvar_13);\n' + '   vec3 tmpvar_15;\n' + '  tmpvar_15 = (texture2D (sampler_main, P_12).xyz - texture2D (sampler_main, P_14).xyz);\n' + '  dx_3 = tmpvar_15;\n' + '   vec2 P_16;\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17 = (vec2(0.0, 1.0) * texsize.zw);\n' + '  P_16 = (uv_rr_5 + tmpvar_17);\n' + '   vec2 P_18;\n' + '  P_18 = (uv_rr_5 - tmpvar_17);\n' + '   vec3 tmpvar_19;\n' + '  tmpvar_19 = (texture2D (sampler_main, P_16).xyz - texture2D (sampler_main, P_18).xyz);\n' + '  dy_2 = tmpvar_19;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20.x = dx_3.y;\n' + '  tmpvar_20.y = dy_2.y;\n' + '  d_4 = (texsize.zw * 2.0);\n' + '   vec4 tmpvar_21;\n' + '   vec2 P_22;\n' + '  P_22 = (uv_rr_5 + (vec2(1.0, 0.0) * d_4));\n' + '  tmpvar_21 = texture2D (sampler_blur1, P_22);\n' + '   vec4 tmpvar_23;\n' + '   vec2 P_24;\n' + '  P_24 = (uv_rr_5 - (vec2(1.0, 0.0) * d_4));\n' + '  tmpvar_23 = texture2D (sampler_blur1, P_24);\n' + '  dx_3 = (((tmpvar_21.xyz * scale1) + bias1) - ((tmpvar_23.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_25;\n' + '   vec2 P_26;\n' + '  P_26 = (uv_rr_5 + (vec2(0.0, 1.0) * d_4));\n' + '  tmpvar_25 = texture2D (sampler_blur1, P_26);\n' + '   vec4 tmpvar_27;\n' + '   vec2 P_28;\n' + '  P_28 = (uv_rr_5 - (vec2(0.0, 1.0) * d_4));\n' + '  tmpvar_27 = texture2D (sampler_blur1, P_28);\n' + '  dy_2 = (((tmpvar_25.xyz * scale1) + bias1) - ((tmpvar_27.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_29;\n' + '  tmpvar_29.x = dx_3.y;\n' + '  tmpvar_29.y = dy_2.y;\n' + '  dz_1 = ((tmpvar_20 * 3.0) + tmpvar_29);\n' + '   vec4 tmpvar_30;\n' + '  tmpvar_30 = texture2D (sampler_blur2, uv_rr_5);\n' + '  ret_7 = (vec3(((\n' + '    pow ((sqrt(dot (dz_1, dz_1)) * 0.8), 0.7)\n' + '   + \n' + '    (((tmpvar_30.xyz * scale2) + bias2).y * 0.4)\n' + '  ) - 0.1)) * vec3(0.3, 0.5, 0.7));\n' + '   vec2 tmpvar_31;\n' + '  tmpvar_31.x = dx_3.x;\n' + '  tmpvar_31.y = dy_2.x;\n' + '   vec2 P_32;\n' + '  P_32 = (uv_rr_5 + ((tmpvar_31 * texsize.zw) * 18.0));\n' + '   vec3 tmpvar_33;\n' + '  tmpvar_33 = vec3((texture2D (sampler_main, P_32).x * 6.0));\n' + '   vec3 tmpvar_34;\n' + '  tmpvar_34 = texture2D (sampler_main, uv_rr_5).zzz;\n' + '   vec3 tmpvar_35;\n' + '  tmpvar_35 = mix (mix (ret_7, vec3(0.2, 0.1, 0.0), tmpvar_33), vec3(1.0, 1.0, 1.0), tmpvar_34);\n' + '  ret_7 = tmpvar_35;\n' + '   vec4 tmpvar_36;\n' + '  tmpvar_36.w = 1.0;\n' + '  tmpvar_36.xyz = tmpvar_35;\n' + '  vec4 ret4 = tmpvar_36;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('xx1 = xx1*0.9 + (bass)*0.01;\n' + 'xx2 = xx2*0.9 + (treb)*0.01;\n' + 'yy1 = yy1*0.94 + (treb+bass)*0.0075;\n' + 'x1 = 0.5 + (xx1-xx2)*2;\n' + 'y1 = 0.4 + yy1*1.5;\n' + 'dt = 0.03/fps;\n' + 'vx2 = vx2*(1-2*dt) + dt*((x1+x3-2*x2)*10);\n' + 'vy2 = vy2*(1-2*dt) + dt*((y1+y3-2*y2)*10-0.5);\n' + 'vx3 = vx3*(1-2*dt) + dt*((x2+x4-2*x3)*10);\n' + 'vy3 = vy3*(1-2*dt) + dt*((y2+y4-2*y3)*10-0.5);\n' + 'vx4 = vx4*(1-2*dt) + dt*((x3-x4)*10);\n' + 'vy4 = vy4*(1-2*dt) + dt*((y3-y4)*10-0.5);\n' + 'x2 = x2 + vx2;\n' + ' y2 = y2 + vy2;\n' + 'x3 = x3 + vx3;\n' + ' y3 = y3 + vy3;\n' + 'x4 = x4 + vx4;\n' + ' y4 = y4 + vy4;\n' + 'vx2 = if(above(x2,0),vx2,abs(vx2)*0.5);\n' + 'vx2 = if(below(x2,1),vx2,-abs(vx2)*0.5);\n' + 'vx3 = if(above(x3,0),vx3,abs(vx3)*0.5);\n' + 'vx3 = if(below(x3,1),vx3,-abs(vx3)*0.5);\n' + 'vx4 = if(above(x4,0),vx4,abs(vx4)*0.5);\n' + 'vx4 = if(below(x4,1),vx4,-abs(vx4)*0.5);\n' + 'vy2 = if(above(y2,0),vy2,abs(vy2)*0.5);\n' + 'vy2 = if(below(y2,1),vy2,-abs(vy2)*0.5);\n' + 'vy3 = if(above(y3,0),vy3,abs(vy3)*0.5);\n' + 'vy3 = if(below(y3,1),vy3,-abs(vy3)*0.5);\n' + 'vy4 = if(above(y4,0),vy4,abs(vy4)*0.5);\n' + 'vy4 = if(below(y4,1),vy4,-abs(vy4)*0.5);\n' + 'q1 = x1;\n' + 'q2 = x2;\n' + 'q3 = x3;\n' + 'q4 = x4;\n' + 'q5 = y1;\n' + 'q6 = y2;\n' + 'q7 = y3;\n' + 'q8 = y4;\n' + 'q9 = 1/aspectx;\n' + 'q10 = 1/aspecty;\n' + 'q11 = aspectx;\n' + 'q12 = aspecty;\n' + 'q13 = sqrt(vx4*vx4 + vy4*vy4);\n' + 'q14 = atan2(vx4,vy4);\n' + 'q15 = sin(q14);\n' + 'q16 = cos(q14);\n' + 'db = db*0.98 + bass*0.2;\n' + 'bb = bb + db*0.1;\n' + 'ddt = ddt*0.98 + treb*0.2;\n' + 'tt = tt + ddt*0.1;\n' + 'dm = dm*0.98 + mid*0.2;\n' + 'mm = mm + dm*0.1;\n' + 'q23 = 0.5 + sin((bb-mm)*0.1)*0.25;\n' + 'q24 = 0.5 + sin((tt-mm)*0.1)*0.25;\n' + 'w = (bb-tt)*0.1;\n' + 'q26 = 0.25 - (db-ddt)*0.025;\n' + 'q21 = sin(w);\n' + 'q22 = cos(w);\n' + 'q27 = sin(-w);\n' + 'q28 = cos(-w);\n' + 'q25 = 1/q26;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
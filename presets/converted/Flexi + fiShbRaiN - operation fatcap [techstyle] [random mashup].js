define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 13.399,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.286,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.28596,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.92178,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.65,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.997,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 1.186,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9901,
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
		decay : 0.955,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.grav = 0;
m.a = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.bounce = 0;
m.resist = 0;
m.spring = 0;
m.vy2 = 0;
m.dt = 0;
m.vx2 = 0;
m.vy3 = 0;
m.q10 = 0;
m.yy1 = 0;
m.xx1 = 0;
m.vx3 = 0;
m.vy4 = 0;
m.q11 = 0;
m.xx2 = 0;
m.vx4 = 0;
m.q12 = 0;
m.s = 0;
m.q13 = 0;
m.q14 = 0;
m.q15 = 0;
m.q16 = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.y4 = 0;
m.x4 = 0;
m.x1 = 0.9;
m.y1 = 0.5;
m.x2 = 0.5;
m.y2 = 0.5;
m.x3 = 0.5;
m.y3 = 0.5;
m.x4 = 0.5;
m.y4 = 0.5;
		return m;
	},
	'frame_eqs' : function(m) {
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
m.dt = (0.0003*div(60,m.fps));
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
m.zoom = 1;
m.a = ((m.a*0.95)+m.q5);
m.s = ((m.s*0.9)+m.a);
m.q3 = (m.s*0.1);
m.monitor = m.s;
m.wave_a = 0;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
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
			r2 : 1.0,
			a : 0.29,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.62832,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.04,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.033,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			num_inst : 32.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.ma = 0;

			m.rkeys = ['my','mx','ma'];
			return m;
		},
		'frame_eqs' : function(m) {
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
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ma=ma+(above(bass,1)*3.1415*.01*bass);\n' + 'ma=ma-(above(treb,1)*3.1415*.01*treb);\n' + 'mx=mx+(.0002*cos(ma));\n' + 'my=my+(.0002*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.15,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.62832,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.04,
			border_g : 1.0,
			rad : 0.04914,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 6.0,
			border_r : 1.0,
			num_inst : 412.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.ma = 0;

			m.rkeys = ['my','mx','ma'];
			return m;
		},
		'frame_eqs' : function(m) {
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
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ma=ma+(above(bass,1)*3.1415*.05*bass);\n' + 'ma=ma-(above(mid,1)*3.1415*.05*mid);\n' + 'mx=mx+(.0001*cos(ma));\n' + 'my=my+(.0001*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;'),

		},
		{
		'baseVals' : {
			r2 : 0.01,
			a : 1.0,
			enabled : 1.0,
			b : 0.6,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.04,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.7874,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.05,
			r : 0.0,
			border_g : 1.0,
			rad : 0.08243,
			x : 0.5,
			y : 0.55,
			ang : 0.0,
			sides : 12.0,
			border_r : 1.0,
			num_inst : 512.0,
			},
		'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.t4 = 0;
m.tt = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.my_x = 0;
m.my_y = 0;
m.my_z = 0;
m.q9 = 0;
m.i = 0;
m.rnd1 = 0;
m.rnd2 = 0;
m.rnd3 = 0;
m.l = 0;
m.rnd4 = 0;
m.p = 0;
m.q10 = 0;
m.wh = 0;
m.zoom = 0;
m.t = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.w1 = 0;
m.x2 = 0;
m.y3 = 0;
m.w2 = 0;
m.x3 = 0;
m.w3 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.wv = 0;
m.started = 0;
m.t1 = 0.412;
m.t2 = 0.4563;
m.t3 = 0.6452;
m.t4 = 0.2565;
			m.rkeys = ['bb','mm','tt','rnd1','rnd2','rnd3','rnd4'];
			return m;
		},
		'frame_eqs' : function(m) {
m.bb = (m.bb+(((m.bass*m.bass)*0.85)*equal(m.instance, 0)));
m.mm = (m.mm+(((m.mid*m.mid)*0.85)*equal(m.instance, 0)));
m.tt = (m.tt+(((m.treb*m.treb)*0.85)*equal(m.instance, 0)));
m.q3 = (m.bb*0.012);
m.q4 = (m.mm*0.012);
m.q5 = (m.tt*0.012);
m.rnd1 = ifcond(equal(m.instance, 0), m.t1, m.rnd1);
m.rnd2 = ifcond(equal(m.instance, 0), m.t2, m.rnd2);
m.rnd3 = ifcond(equal(m.instance, 0), m.t3, m.rnd3);
m.rnd4 = ifcond(equal(m.instance, 0), m.t4, m.rnd4);
m.rnd1 = ((4*m.rnd1)*(1-m.rnd1));
m.rnd2 = ((4*m.rnd2)*(1-m.rnd2));
m.rnd3 = ((4*m.rnd3)*(1-m.rnd3));
m.rnd4 = ((4*m.rnd4)*(1-m.rnd4));
m.t = 0.6;
m.t = ((m.rnd1+(m.time*m.t))-Math.floor((m.rnd1+(m.time*m.t))));
m.t = (m.t+(m.rnd2*0.1));
m.wh = ((m.rnd4*Math.asin(1))*4);
m.wv = (0.25+(m.rnd3*0.1));
m.d = 1.4;
m.zoom = 1;
m.l = 1;
m.w1 = m.q3;
m.w2 = m.q4;
m.w3 = m.q5;
m.i = m.instance;
m.my_x = (m.t*((Math.cos(m.wh)*Math.sin(m.wv))*m.l));
m.my_y = (((-0.5+((m.t-0.75)*(m.t-0.75)))*Math.cos(m.wv))*m.l);
m.my_z = (m.t*((Math.sin(m.wh)*Math.sin(m.wv))*m.l));
m.x1 = ((Math.cos(m.w1)*m.my_x)+(Math.sin(m.w1)*m.my_y));
m.y1 = ((-Math.sin(m.w1)*m.my_x)+(Math.cos(m.w1)*m.my_y));
m.z1 = m.my_z;
m.x2 = ((Math.cos(m.w2)*m.x1)+(Math.sin(m.w2)*m.z1));
m.z2 = ((-Math.sin(m.w2)*m.x1)+(Math.cos(m.w2)*m.z1));
m.y2 = m.y1;
m.y3 = ((Math.cos(m.w3)*m.y2)+(Math.sin(m.w3)*m.z2));
m.z3 = ((-Math.sin(m.w3)*m.y2)+(Math.cos(m.w3)*m.z2));
m.x3 = m.x2;
m.p = Math.tan((Math.asin(1)+Math.atan2((m.d+m.z3), sqrt(((m.x3*m.x3)+(m.y3*m.y3))))));
m.d = sqrt((((m.x3*m.x3)+(m.y3*m.y3))+((m.z3+m.d)*(m.z3+m.d))));
m.rad = div(m.rad,m.d);
m.my_x = ((m.zoom*Math.sin(Math.atan2(m.x3, m.y3)))*m.p);
m.my_y = ((m.zoom*Math.cos(Math.atan2(m.x3, m.y3)))*m.p);
m.x = (0.5+m.my_x);
m.y = (0.5+m.my_y);
m.x = (0.5+((m.x-0.5)*m.q10));
m.y = (0.5+((m.y-0.5)*m.q9));
		return m;
	},
		'init_eqs_str' : ('started = 0;\n' + 't1 = 0.412;\n' + 't2 = 0.4563;\n' + 't3 = 0.6452;\n' + 't4 = 0.2565;'),
		'frame_eqs_str' : ('bb = bb + bass*bass*0.85*equal(instance,0);\n' + 'mm = mm + mid*mid*0.85*equal(instance,0);\n' + 'tt = tt + treb*treb*0.85*equal(instance,0);\n' + 'q3 = bb*0.012;\n' + 'q4 = mm*0.012;\n' + 'q5 = tt*0.012;\n' + 'rnd1 = if(equal(instance,0),t1,rnd1);\n' + 'rnd2 = if(equal(instance,0),t2,rnd2);\n' + 'rnd3 = if(equal(instance,0),t3,rnd3);\n' + 'rnd4 = if(equal(instance,0),t4,rnd4);\n' + 'rnd1 = 4*rnd1*(1-rnd1);\n' + 'rnd2 = 4*rnd2*(1-rnd2);\n' + 'rnd3 = 4*rnd3*(1-rnd3);\n' + 'rnd4 = 4*rnd4*(1-rnd4);\n' + 't = .6;\n' + 't =  (rnd1+time*t) - int(rnd1+time*t);\n' + 't = t + rnd2*0.1;\n' + 'wh = rnd4*asin(1)*4;\n' + 'wv = 0.25 + rnd3*0.1;\n' + 'd = 1.4;\n' + 'zoom = 1;\n' + 'l = 1;\n' + 'w1 = q3;\n' + 'w2 = q4;\n' + 'w3 = q5;\n' + 'i = instance;\n' + 'my_x = t *(cos(wh)*sin(wv)*l);\n' + 'my_y = (-0.5 +(t-0.75)*(t-0.75))*cos(wv)*l;\n' + 'my_z = t*(sin(wh)*sin(wv)*l);\n' + 'x1 = cos(w1)*my_x + sin(w1)*my_y;\n' + 'y1 = -sin(w1)*my_x + cos(w1)*my_y;\n' + 'z1 = my_z;\n' + 'x2 = cos(w2)*x1 + sin(w2)*z1;\n' + 'z2 = -sin(w2)*x1 + cos(w2)*z1;\n' + 'y2 = y1;\n' + 'y3 = cos(w3)*y2 + sin(w3)*z2;\n' + 'z3 = -sin(w3)*y2 + cos(w3)*z2;\n' + 'x3 = x2;\n' + 'p = tan(asin(1) + atan2(d+z3,sqrt(x3*x3 + y3*y3)));\n' + 'd = sqrt(x3*x3 + y3*y3 + (z3+d)*(z3+d));\n' + 'rad = rad/d;\n' + 'my_x = zoom*sin(atan2(x3,y3))*p;\n' + 'my_y = zoom*cos(atan2(x3,y3))*p;\n' + 'x = 0.5 + my_x;\n' + 'y = 0.5 + my_y;\n' + 'x = 0.5 + (x-0.5)*q10;\n' + 'y = 0.5 + (y-0.5)*q9;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.2,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.62832,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.5,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.02118,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 8.0,
			border_r : 0.0,
			num_inst : 64.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.ma = 0;

			m.rkeys = ['my','mx','ma'];
			return m;
		},
		'frame_eqs' : function(m) {
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
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ma=ma+(above(bass,.5)*3.1415*.02*bass);\n' + 'ma=ma-(above(treb,.5)*3.1415*.02*treb);\n' + 'mx=mx+(.0008*cos(ma));\n' + 'my=my+(.0008*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;'),

		}
],
	'warp' : ('uniform highp float struc;\n' + 'highp float sustain;\n' + 'highp float change;\n' + 'highp float xlat_mutabledist;\n' + 'highp float xlat_mutablestruc;\n' + 'highp vec2 xlat_mutableuv1;\n' + 'shader_body {\n' + '  xlat_mutablestruc = struc;\n' + '   mat3 tmpvar_1;\n' + '  tmpvar_1[0].x = _qe.w;\n' + '  tmpvar_1[0].y = _qf.z;\n' + '  tmpvar_1[0].z = _qg.y;\n' + '  tmpvar_1[1].x = _qf.x;\n' + '  tmpvar_1[1].y = _qf.w;\n' + '  tmpvar_1[1].z = _qg.z;\n' + '  tmpvar_1[2].x = _qf.y;\n' + '  tmpvar_1[2].y = _qg.x;\n' + '  tmpvar_1[2].z = _qg.w;\n' + '   vec3 tmpvar_2;\n' + '  tmpvar_2.x = _qa.w;\n' + '  tmpvar_2.y = _qb.x;\n' + '  tmpvar_2.z = _qb.y;\n' + '  sustain = (0.98 - (_qd.y * 2.0));\n' + '  change = _qd.y;\n' + '   vec2 uv_3;\n' + '   vec3 uv2_4;\n' + '   vec3 noise_5;\n' + '   vec3 ret_6;\n' + '  uv_3 = (((uv - 0.5) * _qd.x) + 0.5);\n' + '  xlat_mutableuv1 = ((uv_3 - 0.5) * aspect.xy);\n' + '   vec2 P_7;\n' + '  P_7 = (uv_3 + rand_frame.yz);\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = fract((8.0 * texture2D (sampler_noise_lq, P_7))).xyz;\n' + '  noise_5 = tmpvar_8;\n' + '  xlat_mutabledist = noise_5.x;\n' + '  if ((noise_5.y > 0.2)) {\n' + '     vec3 tmpvar_9;\n' + '    tmpvar_9 = (noise_5 - vec3(0.4, 0.5, 0.5));\n' + '     vec2 uvi_10;\n' + '    uvi_10 = ((tmpvar_9.zy * 0.003) + uv_3);\n' + '     vec2 pix_11;\n' + '     vec4 nb2_12;\n' + '     vec4 nb_13;\n' + '     vec2 x_14;\n' + '    x_14 = (uvi_10 - 0.5);\n' + '    pix_11 = (texsize.zw * (1.0 + (\n' + '      sqrt(dot (x_14, x_14))\n' + '     * 3.0)));\n' + '     vec2 uvi_15;\n' + '    uvi_15 = (uvi_10 - pix_11);\n' + '     vec4 tmpvar_16;\n' + '    tmpvar_16 = texture2D (sampler_pw_main, uvi_15);\n' + '     vec2 tmpvar_17;\n' + '     vec2 xy_18;\n' + '    xy_18 = tmpvar_16.yz;\n' + '    tmpvar_17 = (_qh.x * floor((\n' + '      (_qh.z * xy_18)\n' + '     + vec2(0.5, 0.5))));\n' + '    nb_13.x = (1.0 - ((0.015625 * \n' + '      (tmpvar_17.x - 0.505)\n' + '    ) + tmpvar_17.y));\n' + '     vec2 uvi_19;\n' + '    uvi_19 = (uvi_10 + (pix_11 * vec2(1.0, -1.0)));\n' + '     vec4 tmpvar_20;\n' + '    tmpvar_20 = texture2D (sampler_pw_main, uvi_19);\n' + '     vec2 tmpvar_21;\n' + '     vec2 xy_22;\n' + '    xy_22 = tmpvar_20.yz;\n' + '    tmpvar_21 = (_qh.x * floor((\n' + '      (_qh.z * xy_22)\n' + '     + vec2(0.5, 0.5))));\n' + '    nb_13.y = (1.0 - ((0.015625 * \n' + '      (tmpvar_21.x - 0.505)\n' + '    ) + tmpvar_21.y));\n' + '     vec2 uvi_23;\n' + '    uvi_23 = (uvi_10 + pix_11);\n' + '     vec4 tmpvar_24;\n' + '    tmpvar_24 = texture2D (sampler_pw_main, uvi_23);\n' + '     vec2 tmpvar_25;\n' + '     vec2 xy_26;\n' + '    xy_26 = tmpvar_24.yz;\n' + '    tmpvar_25 = (_qh.x * floor((\n' + '      (_qh.z * xy_26)\n' + '     + vec2(0.5, 0.5))));\n' + '    nb_13.z = (1.0 - ((0.015625 * \n' + '      (tmpvar_25.x - 0.505)\n' + '    ) + tmpvar_25.y));\n' + '     vec2 uvi_27;\n' + '    uvi_27 = (uvi_10 + (pix_11 * vec2(-1.0, 1.0)));\n' + '     vec4 tmpvar_28;\n' + '    tmpvar_28 = texture2D (sampler_pw_main, uvi_27);\n' + '     vec2 tmpvar_29;\n' + '     vec2 xy_30;\n' + '    xy_30 = tmpvar_28.yz;\n' + '    tmpvar_29 = (_qh.x * floor((\n' + '      (_qh.z * xy_30)\n' + '     + vec2(0.5, 0.5))));\n' + '    nb_13.w = (1.0 - ((0.015625 * \n' + '      (tmpvar_29.x - 0.505)\n' + '    ) + tmpvar_29.y));\n' + '     vec2 uvi_31;\n' + '    uvi_31 = (uvi_10 + (pix_11 * vec2(0.0, -1.0)));\n' + '     vec4 tmpvar_32;\n' + '    tmpvar_32 = texture2D (sampler_pw_main, uvi_31);\n' + '     vec2 tmpvar_33;\n' + '     vec2 xy_34;\n' + '    xy_34 = tmpvar_32.yz;\n' + '    tmpvar_33 = (_qh.x * floor((\n' + '      (_qh.z * xy_34)\n' + '     + vec2(0.5, 0.5))));\n' + '    nb2_12.x = (1.0 - ((0.015625 * \n' + '      (tmpvar_33.x - 0.505)\n' + '    ) + tmpvar_33.y));\n' + '     vec2 uvi_35;\n' + '    uvi_35 = (uvi_10 + (pix_11 * vec2(1.0, 0.0)));\n' + '     vec4 tmpvar_36;\n' + '    tmpvar_36 = texture2D (sampler_pw_main, uvi_35);\n' + '     vec2 tmpvar_37;\n' + '     vec2 xy_38;\n' + '    xy_38 = tmpvar_36.yz;\n' + '    tmpvar_37 = (_qh.x * floor((\n' + '      (_qh.z * xy_38)\n' + '     + vec2(0.5, 0.5))));\n' + '    nb2_12.y = (1.0 - ((0.015625 * \n' + '      (tmpvar_37.x - 0.505)\n' + '    ) + tmpvar_37.y));\n' + '     vec2 uvi_39;\n' + '    uvi_39 = (uvi_10 + (pix_11 * vec2(0.0, 1.0)));\n' + '     vec4 tmpvar_40;\n' + '    tmpvar_40 = texture2D (sampler_pw_main, uvi_39);\n' + '     vec2 tmpvar_41;\n' + '     vec2 xy_42;\n' + '    xy_42 = tmpvar_40.yz;\n' + '    tmpvar_41 = (_qh.x * floor((\n' + '      (_qh.z * xy_42)\n' + '     + vec2(0.5, 0.5))));\n' + '    nb2_12.z = (1.0 - ((0.015625 * \n' + '      (tmpvar_41.x - 0.505)\n' + '    ) + tmpvar_41.y));\n' + '     vec2 uvi_43;\n' + '    uvi_43 = (uvi_10 + (pix_11 * vec2(-1.0, 0.0)));\n' + '     vec4 tmpvar_44;\n' + '    tmpvar_44 = texture2D (sampler_pw_main, uvi_43);\n' + '     vec2 tmpvar_45;\n' + '     vec2 xy_46;\n' + '    xy_46 = tmpvar_44.yz;\n' + '    tmpvar_45 = (_qh.x * floor((\n' + '      (_qh.z * xy_46)\n' + '     + vec2(0.5, 0.5))));\n' + '    nb2_12.w = (1.0 - ((0.015625 * \n' + '      (tmpvar_45.x - 0.505)\n' + '    ) + tmpvar_45.y));\n' + '     vec4 tmpvar_47;\n' + '    tmpvar_47 = min (nb_13, nb2_12);\n' + '    nb_13.zw = tmpvar_47.zw;\n' + '    nb_13.xy = min (tmpvar_47.xy, tmpvar_47.zw);\n' + '    xlat_mutabledist = (min (nb_13.x, nb_13.y) + ((0.005 * tmpvar_9.x) * abs(tmpvar_9.y)));\n' + '  };\n' + '   vec4 tmpvar_48;\n' + '  tmpvar_48 = texture2D (sampler_pw_main, uv_3);\n' + '   vec2 tmpvar_49;\n' + '   vec2 xy_50;\n' + '  xy_50 = tmpvar_48.yz;\n' + '  tmpvar_49 = (_qh.x * floor((\n' + '    (_qh.z * xy_50)\n' + '   + vec2(0.5, 0.5))));\n' + '   float tmpvar_51;\n' + '  tmpvar_51 = min (xlat_mutabledist, (1.0 - (\n' + '    (0.015625 * (tmpvar_49.x - 0.505))\n' + '   + tmpvar_49.y)));\n' + '  xlat_mutabledist = tmpvar_51;\n' + '   vec3 tmpvar_52;\n' + '  tmpvar_52.xy = (xlat_mutableuv1 * tmpvar_51);\n' + '  tmpvar_52.z = (tmpvar_51 - 0.02);\n' + '  uv2_4 = ((fract(\n' + '    ((((\n' + '      (tmpvar_52 / _qb.z)\n' + '     * tmpvar_1) + tmpvar_2) / 8.0) + 0.5)\n' + '  ) - 0.5) * 8.0);\n' + '   vec3 zz_53;\n' + '  zz_53 = ((2.0 * clamp (uv2_4, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - uv2_4);\n' + '   float tmpvar_54;\n' + '  tmpvar_54 = dot (zz_53, zz_53);\n' + '  if ((tmpvar_54 <= 0.25)) {\n' + '    zz_53 = (zz_53 * 4.0);\n' + '  } else {\n' + '    if ((tmpvar_54 <= 1.0)) {\n' + '      zz_53 = (zz_53 / tmpvar_54);\n' + '    };\n' + '  };\n' + '  zz_53 = ((2.6 * zz_53) + uv2_4);\n' + '  zz_53 = ((2.0 * clamp (zz_53, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_53);\n' + '   float tmpvar_55;\n' + '  tmpvar_55 = dot (zz_53, zz_53);\n' + '  if ((tmpvar_55 <= 0.25)) {\n' + '    zz_53 = (zz_53 * 4.0);\n' + '  } else {\n' + '    if ((tmpvar_55 <= 1.0)) {\n' + '      zz_53 = (zz_53 / tmpvar_55);\n' + '    };\n' + '  };\n' + '  zz_53 = ((2.6 * zz_53) + uv2_4);\n' + '  zz_53 = ((2.0 * clamp (zz_53, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_53);\n' + '   float tmpvar_56;\n' + '  tmpvar_56 = dot (zz_53, zz_53);\n' + '  if ((tmpvar_56 <= 0.25)) {\n' + '    zz_53 = (zz_53 * 4.0);\n' + '  } else {\n' + '    if ((tmpvar_56 <= 1.0)) {\n' + '      zz_53 = (zz_53 / tmpvar_56);\n' + '    };\n' + '  };\n' + '  zz_53 = ((2.6 * zz_53) + uv2_4);\n' + '  zz_53 = ((2.0 * clamp (zz_53, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_53);\n' + '   float tmpvar_57;\n' + '  tmpvar_57 = dot (zz_53, zz_53);\n' + '  if ((tmpvar_57 <= 0.25)) {\n' + '    zz_53 = (zz_53 * 4.0);\n' + '  } else {\n' + '    if ((tmpvar_57 <= 1.0)) {\n' + '      zz_53 = (zz_53 / tmpvar_57);\n' + '    };\n' + '  };\n' + '  zz_53 = ((2.6 * zz_53) + uv2_4);\n' + '  zz_53 = ((2.0 * clamp (zz_53, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_53);\n' + '   float tmpvar_58;\n' + '  tmpvar_58 = dot (zz_53, zz_53);\n' + '  if ((tmpvar_58 <= 0.25)) {\n' + '    zz_53 = (zz_53 * 4.0);\n' + '  } else {\n' + '    if ((tmpvar_58 <= 1.0)) {\n' + '      zz_53 = (zz_53 / tmpvar_58);\n' + '    };\n' + '  };\n' + '  zz_53 = ((2.6 * zz_53) + uv2_4);\n' + '  zz_53 = ((2.0 * clamp (zz_53, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_53);\n' + '   float tmpvar_59;\n' + '  tmpvar_59 = dot (zz_53, zz_53);\n' + '  if ((tmpvar_59 <= 0.25)) {\n' + '    zz_53 = (zz_53 * 4.0);\n' + '  } else {\n' + '    if ((tmpvar_59 <= 1.0)) {\n' + '      zz_53 = (zz_53 / tmpvar_59);\n' + '    };\n' + '  };\n' + '  zz_53 = ((2.6 * zz_53) + uv2_4);\n' + '  zz_53 = ((2.0 * clamp (zz_53, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_53);\n' + '   float tmpvar_60;\n' + '  tmpvar_60 = dot (zz_53, zz_53);\n' + '  if ((tmpvar_60 <= 0.25)) {\n' + '    zz_53 = (zz_53 * 4.0);\n' + '  } else {\n' + '    if ((tmpvar_60 <= 1.0)) {\n' + '      zz_53 = (zz_53 / tmpvar_60);\n' + '    };\n' + '  };\n' + '  zz_53 = ((2.6 * zz_53) + uv2_4);\n' + '  zz_53 = ((2.0 * clamp (zz_53, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_53);\n' + '   float tmpvar_61;\n' + '  tmpvar_61 = dot (zz_53, zz_53);\n' + '  if ((tmpvar_61 <= 0.25)) {\n' + '    zz_53 = (zz_53 * 4.0);\n' + '  } else {\n' + '    if ((tmpvar_61 <= 1.0)) {\n' + '      zz_53 = (zz_53 / tmpvar_61);\n' + '    };\n' + '  };\n' + '  zz_53 = ((2.6 * zz_53) + uv2_4);\n' + '   float tmpvar_62;\n' + '  tmpvar_62 = sqrt(dot (zz_53, zz_53));\n' + '  xlat_mutablestruc = (sqrt(dot (zz_53.zy, zz_53.zy)) / 20.0);\n' + '   float tmpvar_63;\n' + '   vec4 tmpvar_64;\n' + '  tmpvar_64 = texture2D (sampler_pw_main, uv_3);\n' + '   vec2 tmpvar_65;\n' + '   vec2 xy_66;\n' + '  xy_66 = tmpvar_64.yz;\n' + '  tmpvar_65 = (_qh.x * floor((\n' + '    (_qh.z * xy_66)\n' + '   + vec2(0.5, 0.5))));\n' + '  tmpvar_63 = (1.0 - ((0.015625 * \n' + '    (tmpvar_65.x - 0.505)\n' + '  ) + tmpvar_65.y));\n' + '  if ((((tmpvar_51 <= tmpvar_63) && (tmpvar_62 < 20.0)) && (tmpvar_51 > 0.005))) {\n' + '     vec4 tmpvar_67;\n' + '    tmpvar_67 = texture2D (sampler_blur1, uv_3);\n' + '     vec4 tmpvar_68;\n' + '    tmpvar_68 = texture2D (sampler_main, uv_3);\n' + '    ret_6.x = (((1.0 - sustain) * xlat_mutablestruc) + (sustain * mix (tmpvar_68.xyz, \n' + '      ((((tmpvar_67.xyz * scale1) + bias1) * 3.0) / 3.0)\n' + '    , vec3(\n' + '      (_qd.y * 4.0)\n' + '    )).x));\n' + '     float tmpvar_69;\n' + '    tmpvar_69 = pow (tmpvar_51, _qh.y);\n' + '     vec2 tmpvar_70;\n' + '    tmpvar_70 = (_qh.x * floor((\n' + '      (_qh.z * vec2((1.0 - tmpvar_69)))\n' + '     + vec2(0.5, 0.5))));\n' + '     vec2 tmpvar_71;\n' + '    tmpvar_71.x = ((64.0 * (\n' + '      (1.0 - tmpvar_69)\n' + '     - tmpvar_70.x)) + 0.495);\n' + '    tmpvar_71.y = tmpvar_70.x;\n' + '    ret_6.yz = tmpvar_71;\n' + '  } else {\n' + '     vec4 tmpvar_72;\n' + '    tmpvar_72 = texture2D (sampler_pc_main, uv_orig);\n' + '     vec3 tmpvar_73;\n' + '    tmpvar_73.yz = vec2(1.0, 1.0);\n' + '    tmpvar_73.x = sustain;\n' + '     vec3 tmpvar_74;\n' + '    tmpvar_74.xy = vec2(0.0, 0.0);\n' + '    tmpvar_74.z = change;\n' + '    ret_6 = ((tmpvar_72.xyz * tmpvar_73) - tmpvar_74);\n' + '  };\n' + '   vec4 tmpvar_75;\n' + '  tmpvar_75.w = 1.0;\n' + '  tmpvar_75.xyz = ret_6;\n' + '  vec4 ret4 = tmpvar_75;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec2 xlat_mutabled;\n' + 'highp vec3 xlat_mutabledx;\n' + 'highp vec3 xlat_mutabledy;\n' + 'shader_body {\n' + '   vec3 ret_1;\n' + '  xlat_mutabled = (texsize.zw * 1.5);\n' + '   vec4 tmpvar_2;\n' + '   vec2 P_3;\n' + '  P_3 = (uv_orig + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_2 = texture2D (sampler_main, P_3);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv_orig - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_4 = texture2D (sampler_main, P_5);\n' + '  xlat_mutabledx = (tmpvar_2.xyz - tmpvar_4.xyz);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv_orig + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_6 = texture2D (sampler_main, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv_orig - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_8 = texture2D (sampler_main, P_9);\n' + '  xlat_mutabledy = (tmpvar_6.xyz - tmpvar_8.xyz);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_main, uv);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = xlat_mutabledx.y;\n' + '  tmpvar_11.y = xlat_mutabledy.y;\n' + '   vec2 x_12;\n' + '  x_12 = (tmpvar_11 * 8.0);\n' + '  ret_1 = (((tmpvar_10.x * \n' + '    (1.0 - sqrt(dot (x_12, x_12)))\n' + '  ) * pow (hue_shader, vec3(6.0, 6.0, 6.0))) * 1.4);\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = xlat_mutabledx.z;\n' + '  tmpvar_13.y = xlat_mutabledy.z;\n' + '   vec2 x_14;\n' + '  x_14 = (tmpvar_13 * 4.0);\n' + '   vec3 tmpvar_15;\n' + '  tmpvar_15 = mix (ret_1, vec3(1.0, 1.0, 1.0), vec3(sqrt(dot (x_14, x_14))));\n' + '  ret_1 = tmpvar_15;\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = tmpvar_15;\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0.9;\n' + 'y1 = 0.5;\n' + 'x2 = 0.5;\n' + ' y2 = 0.5;\n' + 'x3 = 0.5;\n' + ' y3 = 0.5;\n' + 'x4 = 0.5;\n' + ' y4 = 0.5;'),
	'frame_eqs_str' : ('xx1 = xx1*0.9 + (bass)*0.01;\n' + 'xx2 = xx2*0.9 + (treb)*0.01;\n' + 'yy1 = yy1*0.94 + (treb+bass)*0.0075;\n' + 'x1 = 0.5 + (xx1-xx2)*2;\n' + 'y1 = 0.4 + yy1;\n' + 'x1 = max(0,min(1,x1));\n' + ' y1 = max(0,min(1,y1));\n' + 'spring = 10;\n' + 'grav = .5;\n' + 'resist = 1;\n' + 'bounce = 0.75;\n' + 'dt = 0.0003*(60/fps);\n' + 'vx2 = vx2*(1-resist*dt) + dt*((x1+x3-2*x2)*spring);\n' + 'vy2 = vy2*(1-resist*dt) + dt*((y1+y3-2*y2)*spring-grav);\n' + 'vx3 = vx3*(1-resist*dt) + dt*((x2+x4-2*x3)*spring);\n' + 'vy3 = vy3*(1-resist*dt) + dt*((y2+y4-2*y3)*spring-grav);\n' + 'vx4 = vx4*(1-resist*dt) + dt*((x3-x4)*spring);\n' + 'vy4 = vy4*(1-resist*dt) + dt*((y3-y4)*spring-grav);\n' + 'x2 = x2 + vx2;\n' + 'y2 = y2 + vy2;\n' + 'x3 = x3 + vx3;\n' + 'y3 = y3 + vy3;\n' + 'x4 = x4 + vx4;\n' + 'y4 = y4 + vy4;\n' + 'vx2 = if(above(x2,0),vx2,abs(vx2)*bounce);\n' + 'vx2 = if(below(x2,1),vx2,-abs(vx2)*bounce);\n' + 'vx3 = if(above(x3,0),vx3,abs(vx3)*bounce);\n' + 'vx3 = if(below(x3,1),vx3,-abs(vx3)*bounce);\n' + 'vx4 = if(above(x4,0),vx4,abs(vx4)*bounce);\n' + 'vx4 = if(below(x4,1),vx4,-abs(vx4)*bounce);\n' + 'vy2 = if(above(y2,0),vy2,abs(vy2)*bounce);\n' + 'vy2 = if(below(y2,1),vy2,-abs(vy2)*bounce);\n' + 'vy3 = if(above(y3,0),vy3,abs(vy3)*bounce);\n' + 'vy3 = if(below(y3,1),vy3,-abs(vy3)*bounce);\n' + 'vy4 = if(above(y4,0),vy4,abs(vy4)*bounce);\n' + 'vy4 = if(below(y4,1),vy4,-abs(vy4)*bounce);\n' + 'q1 = x1;\n' + 'q2 = x2;\n' + 'q3 = x3;\n' + 'q4 = x4;\n' + 'q5 = y1;\n' + 'q6 = y2;\n' + 'q7 = y3;\n' + 'q8 = y4;\n' + 'q9 = 1/aspectx;\n' + 'q10 = 1/aspecty;\n' + 'q11 = aspectx;\n' + 'q12 = aspecty;\n' + 'q13 = sqrt(vx4*vx4 + vy4*vy4);\n' + 'q14 = atan2(vx4,vy4);\n' + 'q15 = sin(q14);\n' + 'q16 = cos(q14);\n' + 'zoom = 1;\n' + 'a = a*0.95 + q5;\n' + 's = s*0.9 + a;\n' + 'q3 = s*0.1;\n' + 'monitor = s;\n' + 'wave_a = 0;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
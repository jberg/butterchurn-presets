define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.28,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 100.0,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 1.286,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
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
		zoomexp : 0.92178,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.0,
		wave_smoothing : 0.63,
		warpanimspeed : 0.01,
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
		decay : 0.8,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.0,
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
m.q1 = 0;
m.grav = 0;
m.xx = 0;
m.yy = 0;
m.a = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.q8 = 0;
m.bounce = 0;
m.resist = 0;
m.dir = 0;
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
m.dt = (0.0008*div(60,m.fps));
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
m.q10 = m.x1;
m.q11 = m.y1;
m.zoom = 1;
m.warp = 0;
m.q6 = Math.atan2(m.vx4, m.vy4);
m.q5 = sqrt(((m.vx4*m.vx4)+(m.vy4*m.vy4)));
m.a = ((m.a*0.95)+m.q5);
m.s = ((m.s*0.9)+m.a);
m.q3 = (m.s*0.1);
m.monitor = m.s;
m.wave_a = 0;
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
			a : 1.0,
			enabled : 0.0,
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
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.06989,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 39.0,
			border_r : 1.0,
			num_inst : 126.0,
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
m.a = above(((m.bass+m.mid)+m.treb), 0.8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ma=ma+(above(bass,1)*3.1415*.01*bass);\n' + 'ma=ma-(above(treb,1)*3.1415*.01*treb);\n' + 'mx=mx+(.0002*cos(ma));\n' + 'my=my+(.0002*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.8));'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.62832,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.06989,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 41.0,
			border_r : 1.0,
			num_inst : 239.0,
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
m.a = above(((m.bass+m.mid)+m.treb), 0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ma=ma+(above(bass,1)*3.1415*.05*bass);\n' + 'ma=ma-(above(mid,1)*3.1415*.05*mid);\n' + 'mx=mx+(.0001*cos(ma));\n' + 'my=my+(.0001*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.1));'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.62832,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.06989,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 43.0,
			border_r : 1.0,
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
		'frame_eqs_str' : ('ma=ma+(above(mid,1)*3.1415*.01*mid);\n' + 'ma=ma-(above(treb,1)*3.1415*.01*treb);\n' + 'mx=mx+(.0004*cos(ma));\n' + 'my=my+(.0004*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.3));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.62832,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.0556,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 14.0,
			border_r : 1.0,
			num_inst : 127.0,
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
m.a = above(((m.bass+m.mid)+m.treb), 0.2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ma=ma+(above(bass,.5)*3.1415*.02*bass);\n' + 'ma=ma-(above(treb,.5)*3.1415*.02*treb);\n' + 'mx=mx+(.0008*cos(ma));\n' + 'my=my+(.0008*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.2));'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 0.24)) + rand_frame.xy);\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = tmpvar_7.x;\n' + '  tmpvar_14.y = tmpvar_12.x;\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15 = (uv + ((tmpvar_14 * texsize.zw) * 4.0));\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.x = tmpvar_7.y;\n' + '  tmpvar_16.y = tmpvar_12.y;\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17 = (uv + ((tmpvar_16 * texsize.zw) * 4.0));\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18.x = tmpvar_7.z;\n' + '  tmpvar_18.y = tmpvar_12.z;\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19 = (uv + ((tmpvar_18 * texsize.zw) * 4.0));\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_main, tmpvar_15);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_main, tmpvar_15);\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur3, tmpvar_15);\n' + '  ret_1.x = (tmpvar_20.x - ((tmpvar_21.xyz - \n' + '    ((tmpvar_22.xyz * scale3) + bias3)\n' + '  ).x * 0.02));\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_main, tmpvar_17);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_main, tmpvar_17);\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_blur3, tmpvar_17);\n' + '  ret_1.y = (tmpvar_23.y - ((tmpvar_24.xyz - \n' + '    ((tmpvar_25.xyz * scale3) + bias3)\n' + '  ).y * 0.02));\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26 = texture2D (sampler_main, tmpvar_19);\n' + '   vec4 tmpvar_27;\n' + '  tmpvar_27 = texture2D (sampler_main, tmpvar_19);\n' + '   vec4 tmpvar_28;\n' + '  tmpvar_28 = texture2D (sampler_blur3, tmpvar_19);\n' + '  ret_1.z = (tmpvar_26.z - ((tmpvar_27.xyz - \n' + '    ((tmpvar_28.xyz * scale3) + bias3)\n' + '  ).z * 0.02));\n' + '   vec4 tmpvar_29;\n' + '  tmpvar_29 = texture2D (sampler_noise_lq, tmpvar_13);\n' + '  ret_1 = (ret_1 + ((tmpvar_29.xyz - 0.5) * 0.04));\n' + '  ret_1 = (ret_1 - ((ret_1.yzx * 0.1) - 0.04));\n' + '   vec4 tmpvar_30;\n' + '  tmpvar_30.w = 1.0;\n' + '  tmpvar_30.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_30;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv2_1;\n' + '   vec3 ret_2;\n' + '  uv2_1 = (uv + (vec2(1.0, 0.0) * texsize.zw));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv2_1);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv2_1);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_blur2, uv2_1);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur3, uv2_1);\n' + '  uv2_1 = (uv + (vec2(-1.0, 0.0) * texsize.zw));\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_main, uv2_1);\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_blur1, uv2_1);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_blur2, uv2_1);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_blur3, uv2_1);\n' + '  uv2_1 = (uv + (vec2(0.0, 1.0) * texsize.zw));\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_main, uv2_1);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_blur1, uv2_1);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_blur2, uv2_1);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur3, uv2_1);\n' + '  uv2_1 = (uv + (vec2(0.0, -1.0) * texsize.zw));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_main, uv2_1);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_blur1, uv2_1);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur2, uv2_1);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_blur3, uv2_1);\n' + '   vec3 tmpvar_19;\n' + '  tmpvar_19.z = 0.14;\n' + '  tmpvar_19.x = (((\n' + '    (tmpvar_3.xyz + (((tmpvar_4.xyz * scale1) + bias1) * 0.4))\n' + '   + \n' + '    (((tmpvar_5.xyz * scale2) + bias2) * 0.15)\n' + '  ) + (\n' + '    ((tmpvar_6.xyz * scale3) + bias3)\n' + '   * 0.1)).x - ((\n' + '    (tmpvar_7.xyz + (((tmpvar_8.xyz * scale1) + bias1) * 0.4))\n' + '   + \n' + '    (((tmpvar_9.xyz * scale2) + bias2) * 0.15)\n' + '  ) + (\n' + '    ((tmpvar_10.xyz * scale3) + bias3)\n' + '   * 0.1)).x);\n' + '  tmpvar_19.y = (((\n' + '    (tmpvar_11.xyz + (((tmpvar_12.xyz * scale1) + bias1) * 0.4))\n' + '   + \n' + '    (((tmpvar_13.xyz * scale2) + bias2) * 0.15)\n' + '  ) + (\n' + '    ((tmpvar_14.xyz * scale3) + bias3)\n' + '   * 0.1)).x - ((\n' + '    (tmpvar_15.xyz + (((tmpvar_16.xyz * scale1) + bias1) * 0.4))\n' + '   + \n' + '    (((tmpvar_17.xyz * scale2) + bias2) * 0.15)\n' + '  ) + (\n' + '    ((tmpvar_18.xyz * scale3) + bias3)\n' + '   * 0.1)).x);\n' + '  ret_2 = (0.5 + (0.5 * normalize(tmpvar_19)));\n' + '   vec2 x_20;\n' + '  x_20 = (ret_2.xy - 0.5);\n' + '  ret_2 = (ret_2 * clamp ((\n' + '    sqrt(dot (x_20, x_20))\n' + '   * 5.0), 0.0, 1.0));\n' + '  ret_2 = ret_2.xxy;\n' + '  ret_2 = (ret_2 + 1.0);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_blur3, uv);\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur1, uv);\n' + '  ret_2 = (ret_2 * mix (ret_2, (ret_2 * \n' + '    (((tmpvar_21.xyz * scale3) + bias3) - ((tmpvar_22.xyz * scale1) + bias1))\n' + '  ), pow (hue_shader, ret_2)));\n' + '  ret_2 = (ret_2 * hue_shader);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23.w = 1.0;\n' + '  tmpvar_23.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_23;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0.9;\n' + 'y1 = 0.5;\n' + 'x2 = 0.5;\n' + ' y2 = 0.5;\n' + 'x3 = 0.5;\n' + ' y3 = 0.5;\n' + 'x4 = 0.5;\n' + ' y4 = 0.5;'),
	'frame_eqs_str' : ('xx1 = xx1*0.9 + (bass)*0.01;\n' + 'xx2 = xx2*0.9 + (treb)*0.01;\n' + 'yy1 = yy1*0.94 + (treb+bass)*0.0075;\n' + 'x1 = 0.5 + (xx1-xx2)*2;\n' + 'y1 = 0.4 + yy1;\n' + 'x1 = max(0,min(1,x1));\n' + ' y1 = max(0,min(1,y1));\n' + 'spring = 10;\n' + 'grav = .5;\n' + 'resist = 1;\n' + 'bounce = 0.75;\n' + 'dt = 0.0008*(60/fps);\n' + 'vx2 = vx2*(1-resist*dt) + dt*((x1+x3-2*x2)*spring);\n' + 'vy2 = vy2*(1-resist*dt) + dt*((y1+y3-2*y2)*spring-grav);\n' + 'vx3 = vx3*(1-resist*dt) + dt*((x2+x4-2*x3)*spring);\n' + 'vy3 = vy3*(1-resist*dt) + dt*((y2+y4-2*y3)*spring-grav);\n' + 'vx4 = vx4*(1-resist*dt) + dt*((x3-x4)*spring);\n' + 'vy4 = vy4*(1-resist*dt) + dt*((y3-y4)*spring-grav);\n' + 'x2 = x2 + vx2;\n' + 'y2 = y2 + vy2;\n' + 'x3 = x3 + vx3;\n' + 'y3 = y3 + vy3;\n' + 'x4 = x4 + vx4;\n' + 'y4 = y4 + vy4;\n' + 'vx2 = if(above(x2,0),vx2,abs(vx2)*bounce);\n' + 'vx2 = if(below(x2,1),vx2,-abs(vx2)*bounce);\n' + 'vx3 = if(above(x3,0),vx3,abs(vx3)*bounce);\n' + 'vx3 = if(below(x3,1),vx3,-abs(vx3)*bounce);\n' + 'vx4 = if(above(x4,0),vx4,abs(vx4)*bounce);\n' + 'vx4 = if(below(x4,1),vx4,-abs(vx4)*bounce);\n' + 'vy2 = if(above(y2,0),vy2,abs(vy2)*bounce);\n' + 'vy2 = if(below(y2,1),vy2,-abs(vy2)*bounce);\n' + 'vy3 = if(above(y3,0),vy3,abs(vy3)*bounce);\n' + 'vy3 = if(below(y3,1),vy3,-abs(vy3)*bounce);\n' + 'vy4 = if(above(y4,0),vy4,abs(vy4)*bounce);\n' + 'vy4 = if(below(y4,1),vy4,-abs(vy4)*bounce);\n' + 'q4 = x4;\n' + 'q8 = y4;\n' + 'q1 = aspectx;\n' + 'q2 = aspecty;\n' + 'q10 = x1;\n' + 'q11 = y1;\n' + 'zoom = 1;\n' + 'warp = 0;\n' + 'q6 = atan2(vx4,vy4);\n' + 'q5 = sqrt(vx4*vx4 + vy4*vy4);\n' + 'a = a*0.95 + q5;\n' + 's = s*0.9 + a;\n' + 'q3 = s*0.1;\n' + 'monitor = s;\n' + 'wave_a = 0;'),
	'pixel_eqs_str' : ('x = 0.5 + (x-0.5)*q1;\n' + 'y = 0.5 + (y-0.5)*q2;\n' + 'xx = q4;\n' + 'yy = 1-q8;\n' + 'dx = 0;\n' + ' dy = 0;\n' + 'd = sqrt((x-xx)*(x-xx)+(y-yy)*(y-yy));\n' + 'r = 0.11;\n' + 'v = 20;\n' + 'v2 = q5;\n' + 'dx = (v*(sin(y-yy)*(d-r)-(x-xx)*(d-r/2)) + cos(dir)*v2)*(1.00-sigmoid(d-r,100));\n' + 'dy = (-v*(sin(x-xx)*(d-r)+(y-yy)*(d-r/2)) -sin(dir)*v2)*(1.00-sigmoid(d-r,100));'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.49,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 16.016,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.157,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.13126,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 11.56276,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.002,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.05971,
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
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.grav = 0;
m.xx = 0;
m.yy = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.m1 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.bounce = 0;
m.resist = 0;
m.d1 = 0;
m.dir = 0;
m.spring = 0;
m.d2 = 0;
m.b1 = 0;
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
m.q12 = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;
m.y3 = 0;
m.si1 = 0;
m.x3 = 0;
m.y4 = 0;
m.si2 = 0;
m.x4 = 0;

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
m.dt = (0.0005*div(60,m.fps));
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
m.zoom = 1;
m.r = ((m.r*0.96)+(m.x1-0.5));
m.rot = (m.r*0.1);
m.q12 = Math.atan2(m.vx4, m.vy4);
m.q11 = sqrt(((m.vx4*m.vx4)+(m.vy4*m.vy4)));
m.zoom = 1.001;
m.rot = 0.00;
m.warp = 0.2;
m.wave_a = 0;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dir = (-m.q12+Math.asin(1));
m.b1 = 0.1;
m.m1 = (m.q11*25);
m.xx = m.q4;
m.yy = (1-m.q8);
m.x1 = (m.xx-(Math.sin(m.dir)*m.b1));
m.y1 = (m.yy-(Math.cos(m.dir)*m.b1));
m.x2 = (m.xx+(Math.sin(m.dir)*m.b1));
m.y2 = (m.yy+(Math.cos(m.dir)*m.b1));
m.d1 = (sqrt((((m.x1-m.x)*(m.x1-m.x))+((m.y1-m.y)*(m.y1-m.y))))-(m.b1*2));
m.d2 = (sqrt((((m.x2-m.x)*(m.x2-m.x))+((m.y2-m.y)*(m.y2-m.y))))-(m.b1*2));
m.si1 = sigmoid(-m.d1, 1000);
m.si2 = sigmoid(-m.d2, 1000);
m.dx = (((((m.si1*Math.sin((m.y1-m.y)))*m.m1)*m.d1)-(((m.si2*Math.sin((m.y2-m.y)))*m.m1)*m.d2))*2);
m.dy = (((((-m.si1*Math.sin((m.x1-m.x)))*m.m1)*m.d1)+(((m.si2*Math.sin((m.x2-m.x)))*m.m1)*m.d2))*2);
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.62832,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1026,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 14.0,
			border_r : 1.0,
			num_inst : 512.0,
			},
		'init_eqs' : function(m) {
m.g_border = 0;
m.b_border = 0;
m.mx = 0;
m.my = 0;
m.ma = 0;
m.r_border = 0;

			m.rkeys = ['mx','my','ma'];
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
m.rad = div((m.bass+m.treb),30);
m.a = above(((m.bass+m.mid)+m.treb), 0.8);
m.r = div(Math.floor(rand(100)),100);
m.g = div(Math.floor(rand(100)),100);
m.b = div(Math.floor(rand(100)),100);
m.r2 = div(Math.floor(rand(100)),100);
m.g2 = div(Math.floor(rand(100)),100);
m.b2 = div(Math.floor(rand(100)),100);
m.r_border = div(Math.floor(rand(100)),100);
m.g_border = div(Math.floor(rand(100)),100);
m.b_border = div(Math.floor(rand(100)),100);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ma=ma+(above(bass,1)*3.1415*.01*bass);\n' + 'ma=ma-(above(treb,1)*3.1415*.01*treb);\n' + 'mx=mx+(.0002*cos(ma));\n' + 'my=my+(.0002*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'rad=(bass+treb)/30;\n' + 'a=(above(bass+mid+treb,.8));\n' + 'r=int(rand(100))/100;\n' + 'g=int(rand(100))/100;\n' + 'b=int(rand(100))/100;\n' + 'r2=int(rand(100))/100;\n' + 'g2=int(rand(100))/100;\n' + 'b2=int(rand(100))/100;\n' + 'r_border=int(rand(100))/100;\n' + 'g_border=int(rand(100))/100;\n' + 'b_border=int(rand(100))/100;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.5,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.62832,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 1.0,
			rad : 0.10262,
			x : 0.5,
			y : 0.5,
			ang : 0.43982,
			sides : 23.0,
			border_r : 1.0,
			num_inst : 1024.0,
			},
		'init_eqs' : function(m) {
m.g_border = 0;
m.b_border = 0;
m.mx = 0;
m.my = 0;
m.ma = 0;
m.r_border = 0;

			m.rkeys = ['mx','my','ma'];
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
m.rad = div((m.bass+m.treb),25);
m.a = above(((m.bass+m.mid)+m.treb), 0.1);
m.r = div(Math.floor(rand(100)),100);
m.g = div(Math.floor(rand(100)),100);
m.b = div(Math.floor(rand(100)),100);
m.r2 = div(Math.floor(rand(100)),100);
m.g2 = div(Math.floor(rand(100)),100);
m.b2 = div(Math.floor(rand(100)),100);
m.r_border = div(Math.floor(rand(100)),100);
m.g_border = div(Math.floor(rand(100)),100);
m.b_border = div(Math.floor(rand(100)),100);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ma=ma+(above(bass,1)*3.1415*.05*bass);\n' + 'ma=ma-(above(mid,1)*3.1415*.05*mid);\n' + 'mx=mx+(.0001*cos(ma));\n' + 'my=my+(.0001*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'rad=(bass+treb)/25;\n' + 'a=(above(bass+mid+treb,.1));\n' + 'r=int(rand(100))/100;\n' + 'g=int(rand(100))/100;\n' + 'b=int(rand(100))/100;\n' + 'r2=int(rand(100))/100;\n' + 'g2=int(rand(100))/100;\n' + 'b2=int(rand(100))/100;\n' + 'r_border=int(rand(100))/100;\n' + 'g_border=int(rand(100))/100;\n' + 'b_border=int(rand(100))/100;'),

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
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.20269,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 14.0,
			border_r : 1.0,
			num_inst : 256.0,
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
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.22389,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 14.0,
			border_r : 1.0,
			num_inst : 256.0,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = mix (uv_orig, uv, vec2(0.3, 0.3));\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (texsize.zw * 3.0);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (tmpvar_3 + (vec2(1.0, 0.0) * tmpvar_4));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (tmpvar_3 - (vec2(1.0, 0.0) * tmpvar_4));\n' + '  tmpvar_7 = texture2D (sampler_blur1, P_8);\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (tmpvar_3 + (vec2(0.0, 1.0) * tmpvar_4));\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (tmpvar_3 - (vec2(0.0, 1.0) * tmpvar_4));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = dot (((\n' + '    (tmpvar_5.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_7.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_13.y = dot (((\n' + '    (tmpvar_9.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_11.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '  uv_1 = (tmpvar_3 + ((tmpvar_13 * texsize.zw) * 9.0));\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = (texture2D (sampler_fc_main, uv_1) - 0.01).xyz;\n' + '  ret_2 = tmpvar_14;\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 1.0;\n' + '  tmpvar_15.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_15;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret2_2;\n' + '   vec3 ret4_3;\n' + '   vec3 ret3_4;\n' + '   vec3 ret_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (((uv - 0.5) * vec2(-1.0, 1.0)) + 0.5);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_blur2, uv);\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = clamp (((\n' + '    ((tmpvar_7.xyz * scale2) + bias2)\n' + '   * 2.8) - 0.13), 0.0, 1.0);\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = (texture2D (sampler_main, uv).xyz * tmpvar_8);\n' + '  ret3_4 = tmpvar_9;\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_blur2, tmpvar_6);\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = clamp (((\n' + '    ((tmpvar_10.xyz * scale2) + bias2)\n' + '   * 2.8) - 0.13), 0.0, 1.0);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (texture2D (sampler_main, tmpvar_6).xyz * tmpvar_11);\n' + '  ret4_3 = tmpvar_12;\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = abs((ret3_4 - ret4_3));\n' + '  ret3_4 = (tmpvar_13 * sqrt(tmpvar_13));\n' + '  ret3_4 = (ret3_4 * vec3(0.9, 1.6, 2.3));\n' + '  ret3_4 = (ret3_4 * 3.0);\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = pow (ret3_4, (1.0 - ret3_4));\n' + '  ret3_4 = tmpvar_14;\n' + '  uv_1 = (uv * 2.0);\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15 = floor((fract(\n' + '    (uv_1 * 0.5)\n' + '  ) * 2.0));\n' + '  uv_1 = ((fract(uv_1) * (1.0 - tmpvar_15)) + (tmpvar_15 * fract(\n' + '    (1.0 - uv_1)\n' + '  )));\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.x = rad;\n' + '  tmpvar_16.y = uv_1.y;\n' + '  uv_1 = tmpvar_16;\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17 = ((0.5 - tmpvar_16.yx) + 0.5);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_main, tmpvar_16.yx);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur2, tmpvar_16.yx);\n' + '  ret_5 = (tmpvar_18.xyz * clamp ((\n' + '    (((tmpvar_19.xyz * scale2) + bias2) * 2.8)\n' + '   - 0.13), 0.0, 1.0));\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_blur2, tmpvar_17);\n' + '   vec3 tmpvar_21;\n' + '  tmpvar_21 = clamp (((\n' + '    ((tmpvar_20.xyz * scale2) + bias2)\n' + '   * 2.8) - 0.13), 0.0, 1.0);\n' + '   vec3 tmpvar_22;\n' + '  tmpvar_22 = (texture2D (sampler_main, tmpvar_17).xyz * tmpvar_21);\n' + '  ret2_2 = tmpvar_22;\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23 = mix (ret_5, ret2_2, vec3(0.5, 0.5, 0.5));\n' + '  ret_5 = (tmpvar_23 * tmpvar_23);\n' + '  ret_5 = (ret_5 * vec3(0.9, 1.6, 2.3));\n' + '  ret_5 = (ret_5 * 3.0);\n' + '  ret_5 = (max (tmpvar_14, (0.8 * vec3(\n' + '    (0.5 * dot (ret_5, vec3(0.32, 0.49, 0.29)))\n' + '  ))) - (roam_sin.xyz * roam_cos.zxy));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24.w = 1.0;\n' + '  tmpvar_24.xyz = ret_5;\n' + '  vec4 ret4 = tmpvar_24;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('xx1 = xx1*0.9 + (bass)*0.01;\n' + 'xx2 = xx2*0.9 + (treb)*0.01;\n' + 'yy1 = yy1*0.94 + (treb+bass)*0.0075;\n' + 'x1 = 0.5 + (xx1-xx2)*2;\n' + 'y1 = 0.4 + yy1;\n' + 'x1 = max(0,min(1,x1));\n' + ' y1 = max(0,min(1,y1));\n' + 'spring = 10;\n' + 'grav = .5;\n' + 'resist = 1;\n' + 'bounce = 0.75;\n' + 'dt = 0.0005*(60/fps);\n' + 'vx2 = vx2*(1-resist*dt) + dt*((x1+x3-2*x2)*spring);\n' + 'vy2 = vy2*(1-resist*dt) + dt*((y1+y3-2*y2)*spring-grav);\n' + 'vx3 = vx3*(1-resist*dt) + dt*((x2+x4-2*x3)*spring);\n' + 'vy3 = vy3*(1-resist*dt) + dt*((y2+y4-2*y3)*spring-grav);\n' + 'vx4 = vx4*(1-resist*dt) + dt*((x3-x4)*spring);\n' + 'vy4 = vy4*(1-resist*dt) + dt*((y3-y4)*spring-grav);\n' + 'x2 = x2 + vx2;\n' + 'y2 = y2 + vy2;\n' + 'x3 = x3 + vx3;\n' + 'y3 = y3 + vy3;\n' + 'x4 = x4 + vx4;\n' + 'y4 = y4 + vy4;\n' + 'vx2 = if(above(x2,0),vx2,abs(vx2)*bounce);\n' + 'vx2 = if(below(x2,1),vx2,-abs(vx2)*bounce);\n' + 'vx3 = if(above(x3,0),vx3,abs(vx3)*bounce);\n' + 'vx3 = if(below(x3,1),vx3,-abs(vx3)*bounce);\n' + 'vx4 = if(above(x4,0),vx4,abs(vx4)*bounce);\n' + 'vx4 = if(below(x4,1),vx4,-abs(vx4)*bounce);\n' + 'vy2 = if(above(y2,0),vy2,abs(vy2)*bounce);\n' + 'vy2 = if(below(y2,1),vy2,-abs(vy2)*bounce);\n' + 'vy3 = if(above(y3,0),vy3,abs(vy3)*bounce);\n' + 'vy3 = if(below(y3,1),vy3,-abs(vy3)*bounce);\n' + 'vy4 = if(above(y4,0),vy4,abs(vy4)*bounce);\n' + 'vy4 = if(below(y4,1),vy4,-abs(vy4)*bounce);\n' + 'q1 = x1;\n' + ' q2 = x2;\n' + ' q3 = x3;\n' + ' q4 = x4;\n' + 'q5 = y1;\n' + ' q6 = y2;\n' + ' q7 = y3;\n' + ' q8 = y4;\n' + 'q9 =1/ aspectX;\n' + 'q10 = 1/aspectY;\n' + 'zoom = 1;\n' + 'r = r*0.96 +(x1-0.5);\n' + 'rot = (r*0.1);\n' + 'q12 = atan2(vx4,vy4);\n' + 'q11 = sqrt(vx4*vx4 + vy4*vy4);\n' + 'zoom = 1.001;\n' + 'rot = 0.00;\n' + 'warp = 0.2;\n' + 'wave_a = 0;'),
	'pixel_eqs_str' : ('dir = -q12 + asin(1);\n' + 'b1 = 0.1;\n' + 'm1 = q11*25;\n' + 'xx = q4;\n' + 'yy = 1-q8;\n' + 'x1 = xx  -sin(dir)*b1;\n' + 'y1 = yy  -cos(dir)*b1;\n' + 'x2 = xx  +sin(dir)*b1;\n' + 'y2 = yy  +cos(dir)*b1;\n' + 'd1 = sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y))-b1*2;\n' + 'd2 = sqrt((x2-x)*(x2-x)+(y2-y)*(y2-y))-b1*2;\n' + 'si1 = sigmoid(-d1,1000);\n' + 'si2 = sigmoid(-d2,1000);\n' + 'dx = (si1*sin(y1-y)*m1*d1  - si2*sin(y2-y)*m1*d2)*2;\n' + 'dy = (-si1*sin(x1-x)*m1*d1 + si2*sin(x2-x)*m1*d2)*2;'),
};

return pmap;
});
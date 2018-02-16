define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 16.016,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.49,
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
		echo_zoom : 0.997,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.0,
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
		decay : 0.955,
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
		echo_orient : 0.0,
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
m.si3 = 0;
m.t1 = 0;

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
m.dir = ((-m.q12*1)+(Math.asin(1)*1));
m.b1 = 0.1;
m.m1 = (m.q11*25);
m.t1 = 0.05;
m.xx = m.q4;
m.yy = (1-m.q8);
m.x1 = (m.xx+(Math.cos((m.dir+1.5708))*m.b1));
m.y1 = (m.yy-(Math.sin((m.dir+1.5708))*m.b1));
m.x2 = (m.xx-(Math.cos((m.dir+1.5708))*m.b1));
m.y2 = (m.yy+(Math.sin((m.dir+1.5708))*m.b1));
m.d1 = (sqrt((((m.x1-m.x)*(m.x1-m.x))+((m.y1-m.y)*(m.y1-m.y))))-(m.b1*2));
m.si1 = (1-div(1,(1+pow(2, (-m.d1*1000)))));
m.d2 = (sqrt((((m.x2-m.x)*(m.x2-m.x))+((m.y2-m.y)*(m.y2-m.y))))-(m.b1*2));
m.si2 = (1-div(1,(1+pow(2, (-m.d2*1000)))));
m.si3 = (-pow(m.q5, 3)*00);
m.dx = ((((((m.si1*Math.sin((m.y1-m.y)))*m.m1)*m.d1)-(((m.si2*Math.sin((m.y2-m.y)))*m.m1)*m.d2))+((m.si3*Math.cos(m.dir))*m.t1))*2);
m.dy = ((((((-m.si1*Math.sin((m.x1-m.x)))*m.m1)*m.d1)+(((m.si2*Math.sin((m.x2-m.x)))*m.m1)*m.d2))-((m.si3*Math.sin(m.dir))*m.t1))*2);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 1.0,
			scaling : 2.0231,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.res = 0;
m.d = 0;
m.diff = 0;
m.m = 0;
m.tt1 = 0;
m.tt2 = 0;
m.vol = 0;
m.tt3 = 0;
m.beat = 0;
m.monitor = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = ['d','tt1','tt2','tt3'];
			return m;
		},
		'frame_eqs' : function(m) {
m.vol = (((m.bass*8)+(m.mid*5))+(m.treb*3));
m.m = ((m.m*0.97)+(m.vol*0.08));
m.monitor = m.vol;
m.beat = ((above(m.vol, m.res)*above(m.vol, m.m))*above(m.vol, 16));
m.diff = (((1-m.beat)*m.diff)+(m.beat*(m.vol-m.res)));
m.res = ((m.beat*(m.vol+(m.m*0.04)))+((1-m.beat)*(m.res-div(((0.1+(m.diff*0.02))*60),m.fps))));
m.res = Math.max(0, m.res);
m.a = m.beat;
		return m;
	},
		'point_eqs' : function(m) {
m.tt3 = ((m.tt3*0.6)+(m.value1*1));
m.tt2 = ((m.tt2*0.7)+(m.tt3*0.2));
m.tt1 = ((m.tt1*0.8)+(m.tt2*0.1));
m.d = ((m.d*0.9)+(m.tt1*0.2));
m.y = (0.5+(((m.d*m.sample)*(1-m.sample))*4));
m.x = (-0.05+(m.sample*1.1));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('vol = bass*8 + mid*5 + treb*3;\n' + 'm = m*0.97 + vol*0.08;\n' + 'monitor = vol;\n' + 'beat = above(vol,res)*above(vol,m)*above(vol,16);\n' + 'diff = (1-beat)*diff + beat*(vol-res);\n' + 'res = beat*(vol + m*0.04) + (1-beat)*(res -  (0.1+diff*0.02)*60/fps);\n' + 'res = max(0,res);\n' + 'a = beat;'),
		'point_eqs_str' : ('tt3 = tt3*0.6 + (value1)*1;\n' + 'tt2 = tt2*0.7 + tt3*0.2;\n' + 'tt1 = tt1*0.8 + tt2*0.1;\n' + 'd = d*0.9 + tt1*0.2;\n' + 'y = 0.5 + d*sample*(1-sample)*4;\n' + 'x =  -0.05 + sample*1.1;'),

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
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
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
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.0303,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 14.0,
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
			enabled : 1.0,
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
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.03,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 14.0,
			border_r : 1.0,
			num_inst : 128.0,
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
			enabled : 1.0,
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
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.0297,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 14.0,
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
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
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
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.0303,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 14.0,
			border_r : 1.0,
			num_inst : 16.0,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = tmpvar_7.z;\n' + '  tmpvar_14.y = tmpvar_12.z;\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15 = (uv + ((tmpvar_14 * texsize.zw) * 4.0));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_main, tmpvar_15);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_main, tmpvar_15);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_blur3, tmpvar_15);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_noise_lq, tmpvar_13);\n' + '  ret_1.z = (((tmpvar_16.z - \n' + '    ((tmpvar_17.z - ((tmpvar_18.xyz * scale3) + bias3).z) * 0.02)\n' + '  ) - 0.008) + ((tmpvar_19.xyz - 0.5) * 0.1)).x;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20.x = tmpvar_7.x;\n' + '  tmpvar_20.y = tmpvar_12.x;\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21 = ((0.5 + (uv - 0.5)) - (tmpvar_20 * texsize.zw));\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_main, tmpvar_21);\n' + '  ret_1.x = tmpvar_22.x;\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_blur3, tmpvar_21);\n' + '  ret_1.x = (ret_1.x + ((\n' + '    (ret_1.x - ((tmpvar_23.xyz * scale3) + bias3))\n' + '  .x * 0.4) + 0.006));\n' + '   vec2 tmpvar_24;\n' + '  tmpvar_24.x = tmpvar_7.x;\n' + '  tmpvar_24.y = tmpvar_12.x;\n' + '   vec2 tmpvar_25;\n' + '  tmpvar_25.x = tmpvar_7.y;\n' + '  tmpvar_25.y = tmpvar_12.y;\n' + '   vec2 tmpvar_26;\n' + '  tmpvar_26.x = tmpvar_7.z;\n' + '  tmpvar_26.y = tmpvar_12.z;\n' + '   vec2 tmpvar_27;\n' + '  tmpvar_27 = (((uv - \n' + '    ((tmpvar_24 * texsize.zw) * 8.0)\n' + '  ) + (\n' + '    (tmpvar_25 * texsize.zw)\n' + '   * 4.0)) + ((tmpvar_26 * texsize.zw) * 8.0));\n' + '   vec4 tmpvar_28;\n' + '  tmpvar_28 = texture2D (sampler_fc_main, tmpvar_27);\n' + '  ret_1.y = tmpvar_28.y;\n' + '  ret_1.y = (ret_1.y * (1.0 + (ret_1.x * 0.1)));\n' + '  ret_1.y = (ret_1.y - (0.004 + (\n' + '    clamp (ret_1.z, 0.0, 1.0)\n' + '   * 0.012)));\n' + '   vec4 tmpvar_29;\n' + '  tmpvar_29.w = 1.0;\n' + '  tmpvar_29.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_29;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = tmpvar_7.z;\n' + '  tmpvar_13.y = tmpvar_12.z;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = tmpvar_7.y;\n' + '  tmpvar_14.y = tmpvar_12.y;\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15 = ((uv - (tmpvar_13 * 0.1)) + (tmpvar_14 * 0.06));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_blur2, tmpvar_15);\n' + '   float tmpvar_17;\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_main, uv);\n' + '  tmpvar_17 = clamp ((1.0 - tmpvar_18.z), 0.0, 1.0);\n' + '  ret_1 = (((\n' + '    ((tmpvar_16.xyz * scale2) + bias2)\n' + '  .x * tmpvar_17) * pow (hue_shader.yxz, vec3(8.0, 8.0, 8.0))) * 3.0);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_main, tmpvar_15);\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_blur1, tmpvar_15);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_blur1, uv);\n' + '  ret_1 = (mix (ret_1, (\n' + '    pow (hue_shader.yzx, vec3(8.0, 8.0, 8.0))\n' + '   * 1.4), vec3((\n' + '    (tmpvar_19.x * 0.8)\n' + '   + \n' + '    ((tmpvar_20.xyz * scale1) + bias1)\n' + '  .x))) * clamp ((1.0 - \n' + '    (((tmpvar_21.xyz * scale1) + bias1).y * 4.0)\n' + '  ), 0.0, 1.0));\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22.x = tmpvar_7.y;\n' + '  tmpvar_22.y = tmpvar_12.y;\n' + '   vec2 tmpvar_23;\n' + '  tmpvar_23 = clamp ((uv - (tmpvar_22 * 2.0)), 0.0, 1.0);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_main, tmpvar_23);\n' + '   vec3 tmpvar_25;\n' + '   vec3 tmpvar_26;\n' + '  tmpvar_26 = pow (hue_shader, vec3(8.0, 8.0, 8.0));\n' + '  tmpvar_25 = mix (mix (ret_1, vec3(1.0, 1.0, 1.0), (\n' + '    (tmpvar_26 * tmpvar_24.z)\n' + '   * 1.2)), (tmpvar_26.zxy * 1.8), tmpvar_18.yyy);\n' + '  ret_1 = tmpvar_25;\n' + '   vec4 tmpvar_27;\n' + '  tmpvar_27.w = 1.0;\n' + '  tmpvar_27.xyz = tmpvar_25;\n' + '  vec4 ret4 = tmpvar_27;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('xx1 = xx1*0.9 + (bass)*0.01;\n' + 'xx2 = xx2*0.9 + (treb)*0.01;\n' + 'yy1 = yy1*0.94 + (treb+bass)*0.0075;\n' + 'x1 = 0.5 + (xx1-xx2)*2;\n' + 'y1 = 0.4 + yy1;\n' + 'x1 = max(0,min(1,x1));\n' + ' y1 = max(0,min(1,y1));\n' + 'spring = 10;\n' + 'grav = .5;\n' + 'resist = 1;\n' + 'bounce = 0.75;\n' + 'dt = 0.0005*(60/fps);\n' + 'vx2 = vx2*(1-resist*dt) + dt*((x1+x3-2*x2)*spring);\n' + 'vy2 = vy2*(1-resist*dt) + dt*((y1+y3-2*y2)*spring-grav);\n' + 'vx3 = vx3*(1-resist*dt) + dt*((x2+x4-2*x3)*spring);\n' + 'vy3 = vy3*(1-resist*dt) + dt*((y2+y4-2*y3)*spring-grav);\n' + 'vx4 = vx4*(1-resist*dt) + dt*((x3-x4)*spring);\n' + 'vy4 = vy4*(1-resist*dt) + dt*((y3-y4)*spring-grav);\n' + 'x2 = x2 + vx2;\n' + 'y2 = y2 + vy2;\n' + 'x3 = x3 + vx3;\n' + 'y3 = y3 + vy3;\n' + 'x4 = x4 + vx4;\n' + 'y4 = y4 + vy4;\n' + 'vx2 = if(above(x2,0),vx2,abs(vx2)*bounce);\n' + 'vx2 = if(below(x2,1),vx2,-abs(vx2)*bounce);\n' + 'vx3 = if(above(x3,0),vx3,abs(vx3)*bounce);\n' + 'vx3 = if(below(x3,1),vx3,-abs(vx3)*bounce);\n' + 'vx4 = if(above(x4,0),vx4,abs(vx4)*bounce);\n' + 'vx4 = if(below(x4,1),vx4,-abs(vx4)*bounce);\n' + 'vy2 = if(above(y2,0),vy2,abs(vy2)*bounce);\n' + 'vy2 = if(below(y2,1),vy2,-abs(vy2)*bounce);\n' + 'vy3 = if(above(y3,0),vy3,abs(vy3)*bounce);\n' + 'vy3 = if(below(y3,1),vy3,-abs(vy3)*bounce);\n' + 'vy4 = if(above(y4,0),vy4,abs(vy4)*bounce);\n' + 'vy4 = if(below(y4,1),vy4,-abs(vy4)*bounce);\n' + 'q1 = x1;\n' + ' q2 = x2;\n' + ' q3 = x3;\n' + ' q4 = x4;\n' + 'q5 = y1;\n' + ' q6 = y2;\n' + ' q7 = y3;\n' + ' q8 = y4;\n' + 'q9 =1/ aspectX;\n' + 'q10 = 1/aspectY;\n' + 'zoom = 1;\n' + 'r = r*0.96 +(x1-0.5);\n' + 'rot = (r*0.1);\n' + 'q12 = atan2(vx4,vy4);\n' + 'q11 = sqrt(vx4*vx4 + vy4*vy4);\n' + 'zoom = 1.001;\n' + 'rot = 0.00;\n' + 'warp = 0.2;\n' + 'wave_a = 0;'),
	'pixel_eqs_str' : ('dir = -q12*1 + asin(1)*1;\n' + 'b1 = 0.1;\n' + 'm1 = q11*25;\n' + 't1 = 0.05;\n' + 'xx = q4;\n' + 'yy = 1-q8;\n' + 'x1 = xx   +cos(dir+1.5708)*b1;\n' + 'y1 = yy -sin(dir+1.5708)*b1;\n' + 'x2 = xx   -cos(dir+1.5708)*b1;\n' + 'y2 = yy +sin(dir+1.5708)*b1;\n' + 'd1 = sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y))-b1*2;\n' + 'si1 = 1- 1/(1+pow(2,-d1*1000));\n' + 'd2 = sqrt((x2-x)*(x2-x)+(y2-y)*(y2-y))-b1*2;\n' + 'si2 = 1- 1/(1+pow(2,-d2*1000));\n' + 'si3 = -pow(q5,3)*00;\n' + 'dx = (si1*sin(y1-y)*m1*d1  - si2*sin(y2-y)*m1*d2 + si3*cos(dir)*t1)*2;\n' + 'dy = (-si1*sin(x1-x)*m1*d1 + si2*sin(x2-x)*m1*d2 - si3*sin(dir)*t1)*2;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.22,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.286,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.31218,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.99999,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.997,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 0.803,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
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
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.tt = 0;
m.ww = 0;
m.xx = 0;
m.yy = 0;
m.a = 0;
m.mn = 0;
m.q2 = 0;
m.q3 = 0;
m.vx = 0;
m.q4 = 0;
m.vy = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.dist = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.mx = 0;
m.n = 0;
m.q20 = 0;
m.q31 = 0;
m.mult = 0;
m.q10 = 0;
m.q21 = 0;
m.q32 = 0;
m.du = 0;
m.ww1 = 0;
m.q11 = 0;
m.dv = 0;
m.q12 = 0;
m.angle = 0;
m.q13 = 0;
m.t = 0;
m.q14 = 0;
m.q15 = 0;
m.v = 0;
m.q16 = 0;
m.yo = 0;
m.w = 0;
m.q17 = 0;
m.xo = 0;
m.x = 0;
m.ang2 = 0;
m.q18 = 0;
m.y1 = 0;
m.y = 0;
m.q19 = 0;
m.x1 = 0;
m.y2 = 0;
m.w1 = 0;
m.v1 = 0;
m.dy1 = 0;
m.v2 = 0;
m.dx1 = 0;
m.dy2 = 0;
m.dx2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.zoom = 1;
m.wave_a = 0;
m.w = m.w1;
m.ww = ((-(m.y1-m.y2)*(1+((div(70,m.fps)-1)*2)))-(m.y1*0.8));
m.w = (m.w-(m.ww*5));
m.q1 = Math.cos(m.ww);
m.q2 = Math.sin(m.ww);
m.q3 = 1.12;
m.q4 = (Math.sin(m.w)*0.042);
m.q5 = (Math.cos(m.w)*0.042);
m.a = (Math.asin(1)*0.5);
m.d = 0.08;
m.q6 = Math.cos((m.a+(0*m.ww)));
m.q7 = Math.sin((m.a+(0*m.ww)));
m.q8 = 3.3;
m.q9 = ((Math.cos((-m.w+Math.asin(1)))*m.d)*m.aspectx);
m.q10 = ((Math.sin((-m.w+Math.asin(1)))*m.d)*m.aspecty);
m.q11 = Math.cos((-m.a+(0*m.ww)));
m.q12 = Math.sin((-m.a+(0*m.ww)));
m.q13 = m.q8;
m.q14 = ((Math.cos((-m.w+Math.asin(1)))*m.d)*m.aspectx);
m.q15 = ((Math.sin((-m.w+Math.asin(1)))*m.d)*m.aspecty);
m.bb = ((m.bb*0.97)+(m.bass*0.04));
m.mm = ((m.mm*0.97)+(m.mid*0.04));
m.tt = ((m.tt*0.97)+(m.treb*0.04));
m.w1 = (m.w1+(((m.ww1*sqrt(((m.vx*m.vx)+(m.vy*m.vy))))*m.a)*2));
m.ww1 = ((m.ww1*0.94)+(m.y1*0.1));
m.q16 = ((m.bb-m.tt)*0.2);
m.y1 = (m.y1+(m.v1*0.1));
m.y2 = (m.y2+(m.v2*0.2));
m.v1 = ((m.v1*0.95)-((m.y1-m.q16)*0.1));
m.v2 = ((m.v2*0.99)-((m.y2-m.y1)*0.2));
m.a = div((Math.abs((m.y2-m.y1))*2.2),m.fps);
m.q17 = (Math.sin(m.w)*m.a);
m.q18 = (-Math.cos(m.w)*m.a);
m.v = 0.25;
m.x = (m.x+(m.vx*m.v));
m.x = Math.min(1, Math.max(-1, m.x));
m.y = (m.y+(m.vy*m.v));
m.y = Math.min(1, Math.max(-1, m.y));
m.vx = (((m.vx*0.97)+(Math.sin(m.w)*m.a))+((equal(m.x, -1)-equal(m.x, 1))*0.2));
m.vy = (((m.vy*0.97)-(Math.cos(m.w)*m.a))+((equal(m.y, -1)-equal(m.y, 1))*0.2));
m.q19 = (m.x*0.5);
m.q20 = (m.y*0.5);
m.q21 = (-m.w1-((m.ww*4)*0));
m.mx = Math.max(Math.max(m.bb, m.mm), m.tt);
m.mn = Math.min(Math.min(m.bb, m.mm), m.tt);
m.ob_r = div((m.bb-m.mn),(m.mx-m.mn));
m.ob_g = div((m.mm-m.mn),(m.mx-m.mn));
m.ob_b = div((m.tt-m.mn),(m.mx-m.mn));
m.v = div(1,m.fps);
m.xx = (m.xx+(m.v*(m.ob_r-m.ob_g)));
m.yy = (m.yy+(m.v*(m.ob_g-m.ob_b)));
m.q32 = m.xx;
m.q31 = m.yy;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.xo = m.x;
m.yo = m.y;
m.x = (0.5+((m.x-0.5)*m.aspectx));
m.y = (0.5+((m.y-0.5)*m.aspecty));
m.du = (((m.x*2)-1)-(m.q19*2));
m.dv = (((m.y*2)-1)+(m.q20*2));
m.dist = sqrt(((m.du*m.du)+(m.dv*m.dv)));
m.ang2 = ((Math.atan2(m.du, m.dv)*3)+(m.q21*2));
m.mult = (-pow(m.dist, 2)*0.02);
m.dx2 = ((m.mult*Math.sin(m.ang2))*m.aspectx);
m.dy2 = ((m.mult*Math.cos(m.ang2))*m.aspecty);
m.x = m.xo;
m.y = m.yo;
m.angle = (m.q21+1.579);
m.x1 = ((m.x-0.5)*m.aspectx);
m.y1 = ((m.y-0.5)*m.aspecty);
m.x = ((Math.cos(-m.angle)*m.x1)-(Math.sin(-m.angle)*m.y1));
m.y = ((Math.sin(-m.angle)*m.x1)+(Math.cos(-m.angle)*m.y1));
m.t = (m.time*2);
m.v = 0.003;
m.n = 25;
m.dx = (m.v*(Math.cos((((-m.x+m.y)*m.n)+m.t))+Math.sin((((m.x+m.y)*m.n)+m.t))));
m.dy = (m.v*(Math.cos((((m.x-m.y)*m.n)-m.t))+Math.sin((((-m.x-m.y)*m.n)-m.t))));
m.dx1 = ((Math.cos(m.angle)*m.dx)-(Math.sin(m.angle)*m.dy));
m.dy1 = ((Math.sin(m.angle)*m.dx)+(Math.cos(m.angle)*m.dy));
m.dx = (m.dx1*m.aspectx);
m.dy = (m.dy1*m.aspecty);
m.dx = (m.dx+m.dx2);
m.dy = (m.dy+m.dy2);
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
			b : 1.0,
			tex_ang : 0.62832,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.01525,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 14.0,
			border_r : 1.0,
			num_inst : 10.0,
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
	'warp' : ('shader_body {\n' + '   vec2 uv1_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = clamp (uv, 0.0, 1.0);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_main, tmpvar_3);\n' + '  ret_2.yz = (tmpvar_4.xyz - vec3(0.08, 0.0, 0.08)).yz;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (tmpvar_3 + (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (tmpvar_3 - (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = ((2.0 * (\n' + '    (tmpvar_6.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_8.xyz * scale1)\n' + '   + bias1)));\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (tmpvar_3 + (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (tmpvar_3 - (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_13 = texture2D (sampler_blur1, P_14);\n' + '   vec3 tmpvar_15;\n' + '  tmpvar_15 = ((2.0 * (\n' + '    (tmpvar_11.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_13.xyz * scale1)\n' + '   + bias1)));\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.x = tmpvar_10.x;\n' + '  tmpvar_16.y = tmpvar_15.x;\n' + '  uv1_1 = (tmpvar_3 + (tmpvar_5 * (tmpvar_16 * 0.4)));\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_fc_main, uv1_1);\n' + '  ret_2.x = tmpvar_17.x;\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_blur1, uv1_1);\n' + '  ret_2.x = (ret_2.x - ((\n' + '    (((tmpvar_18.xyz * scale1) + bias1).x - ret_2.x)\n' + '   * 0.05) + 0.004));\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = tmpvar_10.x;\n' + '  tmpvar_19.y = tmpvar_15.x;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20.x = tmpvar_10.z;\n' + '  tmpvar_20.y = tmpvar_15.z;\n' + '   vec2 P_21;\n' + '  P_21 = (clamp (mix (uv_orig, tmpvar_3, vec2(-1.0, -1.0)), 0.0, 1.0) - ((tmpvar_20 * texsize.zw) * 4.0));\n' + '   float y_22;\n' + '  y_22 = texture2D (sampler_main, P_21).z;\n' + '  ret_2.z = (max ((\n' + '    sqrt(dot (tmpvar_19, tmpvar_19))\n' + '   * 1.4), y_22) - 0.004);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23.w = 1.0;\n' + '  tmpvar_23.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_23;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'zoom = 1;\n' + 'wave_a = 0;\n' + 'w = w1;\n' + 'ww = -(y1-y2)*(1+(70/fps-1)*2) - y1*0.8;\n' + 'w = w - ww*5;\n' + 'q1 = cos(ww);\n' + 'q2 = sin(ww);\n' + 'q3 = 1.12;\n' + 'q4 = sin(w)*0.042;\n' + 'q5 = cos(w)*0.042;\n' + 'a = asin(1)*0.5;\n' + 'd = 0.08;\n' + 'q6 = cos(a+0*ww);\n' + 'q7 = sin(a+0*ww);\n' + 'q8 = 3.3;\n' + 'q9 = cos(-w + asin(1))*d*aspectx;\n' + 'q10 = sin(-w+asin(1))*d*aspecty;\n' + 'q11 = cos(-a+0*ww);\n' + 'q12 = sin(-a+0*ww);\n' + 'q13 = q8;\n' + 'q14 = cos(-w + asin(1))*d*aspectx;\n' + 'q15 = sin(-w+asin(1))*d*aspecty;\n' + 'bb = bb*0.97 + bass*0.04;\n' + 'mm = mm*0.97 + mid*0.04;\n' + 'tt = tt*0.97 + treb*0.04;\n' + 'w1 = w1 + ww1*sqrt(vx*vx+vy*vy)*a*2;\n' + 'ww1 = ww1*0.94 + y1*0.1;\n' + 'q16 = (bb-tt)*0.2;\n' + 'y1 = y1 + v1*0.1;\n' + 'y2 = y2 + v2*0.2;\n' + 'v1 = v1*0.95 - (y1-q16)*0.1;\n' + 'v2 = v2*0.99 - (y2-y1)*0.2;\n' + 'a = abs(y2-y1)*2.2/fps;\n' + 'q17 = sin(w)*a;\n' + 'q18 = -cos(w)*a;\n' + 'v = 0.25;\n' + 'x = x + vx*v;\n' + ' x=min(1,max(-1,x));\n' + 'y = y + vy*v;\n' + ' y=min(1,max(-1,y));\n' + 'vx = vx*0.97 +sin(w)*a  + (equal(x,-1)- equal(x,1))*0.2;\n' + 'vy = vy*0.97 -cos(w)*a  + (equal(y,-1)- equal(y,1))*0.2;\n' + 'q19 = x*0.5;\n' + 'q20 = y*0.5;\n' + 'q21 = -w1 - ww*4*0;\n' + 'mx = max(max(bb,mm),tt);\n' + 'mn = min(min(bb,mm),tt);\n' + 'ob_r  = (bb-mn)/(mx-mn);\n' + 'ob_g = (mm-mn)/(mx-mn);\n' + 'ob_b = (tt-mn)/(mx-mn);\n' + 'v = 1/fps;\n' + 'xx = xx + v*(ob_r-ob_g);\n' + 'yy = yy + v*(ob_g-ob_b);\n' + 'q32 = xx;\n' + 'q31 = yy;'),
	'pixel_eqs_str' : ('xo = x;\n' + 'yo = y;\n' + 'x = 0.5 +(x-0.5)*aspectx;\n' + 'y = 0.5 +(y-0.5)*aspecty;\n' + 'du = (x*2-1) - q19*2;\n' + 'dv = (y*2-1) + q20*2;\n' + 'dist = sqrt(du*du+dv*dv);\n' + 'ang2 = (atan2(du,dv))*3 + q21*2;\n' + 'mult = -pow(dist,2)*0.02;\n' + 'dx2 = mult*sin(ang2)*aspectx;\n' + 'dy2 = mult*cos(ang2)*aspecty;\n' + 'x = xo;\n' + 'y = yo;\n' + 'angle = q21  + 1.579;\n' + 'X1 = (x-0.5)*aspectx;\n' + 'Y1 = (y-0.5)*aspecty;\n' + 'x = cos(-angle)*X1 -sin(-angle)*Y1;\n' + 'y = sin(-angle)*X1 +cos(-angle)*Y1;\n' + 't = time*2;\n' + 'v = 0.003;\n' + 'n = 25;\n' + 'dx = v*(cos((-x+y)*n+t) + sin((x+y)*n+t));\n' + 'dy = v*(cos((x-y)*n-t) + sin((-x-y)*n-t));\n' + 'dx1 = cos(angle)*dx - sin(angle)*dy;\n' + 'dy1 = sin(angle)*dx + cos(angle)*dy;\n' + 'dx = dx1*aspectx;\n' + 'dy = dy1*aspecty;\n' + 'dx = dx + dx2;\n' + 'dy = dy + dy2;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.7,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 0.12,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.167,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0201,
		ob_r : 0.11,
		sy : 1.0201,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.08081,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 0.224,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.95,
		wave_y : 1.0,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.1,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.925,
		wave_a : 0.005,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.q1 = 0;
m.ms = 0;
m.var = 0;
m.mss = 0;
m.radm = 0;
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
m.decay = 0.97;
m.ms = (Math.sin((m.time*0.6))*0.15);
m.mss = (m.mss+(m.ms*0.001));
m.q1 = m.ms;
m.dx = 0;
m.dy = 0;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.var = (0.3*Math.sin((m.time*0.2)));
m.radm = ((m.rad+m.ang)*10);
m.rot = div((0.02*Math.atan(((m.radm+m.var)*30))),((m.ang+0.5)*(((Math.cos(m.time)*0.4)+0.5)*10)));
m.bb = Math.sin((m.ang*(Math.atan((m.time*2))*10)));
m.bb = (m.bb*m.bb);
m.zoom = (-1+Math.abs((0.01*m.bb)));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.0,
			scaling : 0.01,
			samples : 41.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.dir1 = 0;
m.q5 = 0;
m.t8 = 0;
m.dir2 = 0;
m.d1 = 0;
m.t1 = 0;
m.t2 = 0;
m.t8 = 1;
m.t1 = m.q5;
			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q5;
m.t2 = m.q4;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = -m.t8;
m.d1 = ((0.2+(m.t8*0.01))-((m.value1*0.1)*(m.t8+1)));
m.dir1 = m.t2;
m.dir2 = ((((m.sample*Math.asin(1))*4)-(m.t2*0.5))+div((m.t1*3),2));
m.x = ((0.5+(Math.sin(m.dir1)*0.1))+(Math.sin(m.dir2)*m.d1));
m.y = ((0.5+(Math.cos(m.dir1)*0.1))+(Math.cos(m.dir2)*m.d1));
m.y = (((m.y-0.5)*1.2)+0.5);
		return m;
	},
		'init_eqs_str' : ('t8 = 1;\n' + 't1 = q5;'),
		'frame_eqs_str' : ('t1 = q5;\n' + 't2 = q4;'),
		'point_eqs_str' : ('t8 = -t8;\n' + 'd1 = 0.2 + t8*0.01 - value1*0.1*(t8+1);\n' + 'dir1 = t2;\n' + 'dir2 = sample*asin(1)*4 - t2*0.5 + t1*3/2;\n' + 'x = 0.5 + sin(dir1)*0.1 + sin(dir2)*d1;\n' + 'y = 0.5 + cos(dir1)*0.1 + cos(dir2)*d1;\n' + 'y = (y-0.5)*1.2 + 0.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 1.0,
			scaling : 0.0124,
			samples : 61.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.d = 0;
m.q5 = 0;
m.t8 = 0;
m.dir = 0;
m.t1 = 0;
m.t8 = 1;
m.t1 = m.q5;
			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q5;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = -m.t8;
m.d = ((0.3+(m.t8*0.01))-((m.value1*0.1)*(m.t8+1)));
m.dir = (m.t1+((m.sample*Math.asin(1))*4));
m.x = (0.5+(Math.sin(m.dir)*m.d));
m.y = (0.5+(Math.cos(m.dir)*m.d));
m.y = (((m.y-0.5)*1.2)+0.5);
		return m;
	},
		'init_eqs_str' : ('t8 = 1;\n' + 't1 = q5;'),
		'frame_eqs_str' : ('t1 = q5;'),
		'point_eqs_str' : ('t8 = -t8;\n' + 'd = 0.3 + t8*0.01 - value1*0.1*(t8+1);\n' + 'dir = t1 + sample*asin(1)*4;\n' + 'x = 0.5 + sin(dir)*d;\n' + 'y = 0.5 + cos(dir)*d;\n' + 'y = (y-0.5)*1.2 + 0.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.01303,
			samples : 31.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.dir1 = 0;
m.q5 = 0;
m.t8 = 0;
m.dir2 = 0;
m.q6 = 0;
m.dir3 = 0;
m.d1 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t8 = 1;
m.t1 = m.q5;
			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q5;
m.t2 = m.q4;
m.t3 = m.q6;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = -m.t8;
m.d1 = ((0.15+(m.t8*0.01))-((m.value1*0.1)*(m.t8+1)));
m.dir1 = m.t2;
m.dir2 = (((m.t2*0.5)+div((m.t1*3),2))-(m.t3*3));
m.dir3 = (((((m.sample*Math.asin(1))*4)+m.t3)-div((m.t2*5),6))+div((m.t1*3),2));
m.x = (((0.5+(Math.sin(m.dir1)*0.1))+(Math.sin(m.dir2)*0.05))+(Math.sin(m.dir3)*m.d1));
m.y = (((0.5+(Math.cos(m.dir1)*0.1))+(Math.cos(m.dir2)*0.05))+(Math.cos(m.dir3)*m.d1));
m.y = (((m.y-0.5)*1.2)+0.5);
		return m;
	},
		'init_eqs_str' : ('t8 = 1;\n' + 't1 = q5;'),
		'frame_eqs_str' : ('t1 = q5;\n' + 't2 = q4;\n' + 't3 = q6;'),
		'point_eqs_str' : ('t8 = -t8;\n' + 'd1 = 0.15 + t8*0.01 - value1*0.1*(t8+1);\n' + 'dir1 = t2;\n' + 'dir2 = t2*0.5 + t1*3/2 - t3*3;\n' + 'dir3 = sample*asin(1)*4 + t3 - t2*5/6 + t1*3/2;\n' + 'x = 0.5 + sin(dir1)*0.1 + sin(dir2)*0.05 + sin(dir3)*d1;\n' + 'y = 0.5 + cos(dir1)*0.1 + cos(dir2)*0.05 + cos(dir3)*d1;\n' + 'y = (y-0.5)*1.2 + 0.5;'),

		},
		{
		'baseVals' : {
			a : 0.99,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.02345,
			samples : 511.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 4.0,
			},
		'init_eqs' : function(m) {
m.s3 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.t5 = 0;
m.t6 = 0;
m.c = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.j = 0;
m.d1 = 0;
m.c1 = 0;
m.n = 0;
m.c2 = 0;
m.c3 = 0;
m.rd = 0;
m.zoom = 0;
m.t = 0;
m.y1 = 0;
m.pi = 0;
m.x1 = 0;
m.z = 0;
m.pi3 = 0;
m.w1 = 0;
m.w2 = 0;
m.w3 = 0;
m.t1 = 0;
m.s1 = 0;
m.t2 = 0;
m.s2 = 0;
m.t3 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.ab = 1;
			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.q4*0.75);
m.t2 = (m.q5*0.75);
m.t3 = (m.q6*0.75);
m.t4 = (m.q4*0.75);
m.t5 = (m.q5*0.75);
m.t6 = (m.q6*0.75);
m.t8 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.pi = Math.asin(1);
m.n = 80;
m.t8 = -m.t8;
m.rd = (0.075+div((0.02*(m.t8+1)),2));
m.xx = ((Math.sin(((m.sample*m.pi)*4))*0.5)+((Math.cos(((m.sample*m.pi)*m.n))*m.rd)*Math.sin(((m.sample*m.pi)*4))));
m.yy = ((Math.cos(((m.sample*m.pi)*4))*0.5)+((Math.cos(((m.sample*m.pi)*m.n))*m.rd)*Math.cos(((m.sample*m.pi)*4))));
m.zz = (Math.sin(((m.sample*m.pi)*m.n))*m.rd);
m.d = (sqrt((((m.xx*m.xx)+(m.yy*m.yy))+(m.zz*m.zz)))*0.004);
m.d1 = 1;
m.xx = (m.xx*m.d1);
m.yy = (m.yy*m.d1);
m.zz = (m.zz*m.d1);
m.w1 = (m.d*m.t4);
m.w2 = (m.d*m.t5);
m.w3 = (m.d*m.t6);
m.s1 = Math.sin(((m.t1*1)+m.w1));
m.s2 = Math.sin(((m.t2*1)+m.w2));
m.s3 = Math.sin(((m.t3*1)+m.w3));
m.c1 = Math.cos(((m.t1*1)+m.w1));
m.c2 = Math.cos(((m.t2*1)+m.w2));
m.c3 = Math.cos(((m.t3*1)+m.w3));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.a = 0.5;
m.zoom = (0.5*Math.atan2(m.a, (m.a+m.z)));
m.x = (0.5+(m.zoom*m.x1));
m.y = (0.5+(m.zoom*m.y1));
m.pi3 = ((3.1415*2)*0.3333);
m.t = ((-m.z*2)-(m.time*0.8));
m.c = 2;
m.r = (Math.sin(m.t)*m.c);
m.g = (Math.sin((m.t+m.pi3))*m.c);
m.b = (Math.sin((m.t-m.pi3))*m.c);
m.j = 0.71;
m.r = ifcond(above(m.r, 1), 1, m.r);
m.r = ifcond(below(m.r, 0), 0, m.r);
m.g = ifcond(above(m.g, 1), 1, m.g);
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = ifcond(above(m.b, 1), 1, m.b);
m.b = ifcond(below(m.b, 0), 0, m.b);
m.a = (sigmoid(-m.z, 7)+0);
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'ab = 1;'),
		'frame_eqs_str' : ('t1 = q4*0.75;\n' + 't2 = q5*0.75;\n' + 't3 = q6*0.75;\n' + 't4 = q4*0.75;\n' + 't5 = q5*0.75;\n' + 't6 = q6*0.75;\n' + 't8 = 1;'),
		'point_eqs_str' : ('pi = asin(1);\n' + 'n = 80;\n' + 't8 = -t8;\n' + 'rd = 0.075+0.02*(t8+1)/2;\n' + 'xx = sin(sample*pi*4)*0.5 + cos(sample*pi*n)*rd*sin(sample*pi*4);\n' + 'yy = cos(sample*pi*4)*0.5 + cos(sample*pi*n)*rd*cos(sample*pi*4);\n' + 'zz = sin(sample*pi*n)*rd;\n' + 'd = sqrt( xx*xx + yy*yy + zz*zz)*0.004;\n' + 'd1 = 1;\n' + 'xx = xx*d1;\n' + 'yy = yy*d1;\n' + 'zz = zz*d1;\n' + 'w1 = d*t4;\n' + 'w2 = d*t5;\n' + 'w3 = d*t6;\n' + 's1 = sin(t1*1+w1);\n' + 's2 = sin(t2*1+w2);\n' + 's3 = sin(t3*1+w3);\n' + 'c1 = cos(t1*1+w1);\n' + 'c2 = cos(t2*1+w2);\n' + 'c3 = cos(t3*1+w3);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'a = 0.5;\n' + 'zoom = 0.5*atan2(a,a+z);\n' + 'x = 0.5 + zoom*x1;\n' + 'y = 0.5 + zoom*y1;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = -z*2 - time*0.8;\n' + 'c=2;\n' + 'r = sin(t)*c;\n' + 'g = sin(t+pi3)*c;\n' + 'b = sin(t-pi3)*c;\n' + 'j = 0.71;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);\n' + 'a = sigmoid(-z,7)+0;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.5033,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.00591,
			x : 1.0,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.vx = 0;
m.vy = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = 1.15;
m.y = (m.q1-0.4);
		return m;
	},
		'init_eqs_str' : ('vx = 0;\n' + 'vy = 0;'),
		'frame_eqs_str' : ('x = 1.15;\n' + 'y = q1- 0.4;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.5033,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 1.00591,
			x : 1.0,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.vx = 0;
m.vy = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = 1.175;
m.y = (m.q2-0.4);
		return m;
	},
		'init_eqs_str' : ('vx = 0;\n' + 'vy = 0;'),
		'frame_eqs_str' : ('x = 1.175;\n' + 'y = q2- 0.4;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.5033,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 1.00591,
			x : 1.0,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.vx = 0;
m.vy = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = 1.2;
m.y = (m.q3-0.4);
		return m;
	},
		'init_eqs_str' : ('vx = 0;\n' + 'vy = 0;'),
		'frame_eqs_str' : ('x = 1.2;\n' + 'y = q3- 0.4;'),

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
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=0.97;\n' + 'ms=sin(time*0.6)*0.15;\n' + 'mss=mss+ms*0.001;\n' + 'q1=ms;\n' + 'dx=0;\n' + 'dy=0;'),
	'pixel_eqs_str' : ('var = 0.3*sin(time*0.2);\n' + 'radm = (rad+ang)*10;\n' + 'rot = 0.02*atan((radm+var)*30)/((ang+0.5)*((cos(time)*0.4+0.5)*10));\n' + 'bb = sin(ang*(atan(time*2)*10));\n' + 'bb = bb*bb;\n' + 'zoom = -1 + abs(0.01*bb);'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 34.56,
		warpscale : 0.107,
		brighten : 0.0,
		mv_y : 28.68,
		wave_scale : 0.167,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.33077,
		mv_dx : 1.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.005,
		b1ed : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
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
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 4.95,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.005,
		ob_g : 0.04,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.rr = 0;
m.tt = 0;
m.q2 = 0;
m.vvb = 0;
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.vb = 0;
m.vvm = 0;
m.r = 0;
m.vvt = 0;
m.v = 0;
m.vm = 0;
m.vt = 0;
m.x1 = 0;
m.y1 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.vvb = Math.max(0, Math.min(1, m.vvb));
m.vvm = Math.max(0, Math.min(1, m.vvm));
m.vvt = Math.max(0, Math.min(1, m.vvt));
m.vb = ((m.vb*0.85)+(((1-m.vb)*pow(m.bass, 2))*0.025));
m.vvb = ((m.vvb*0.95)+(((1-m.vvb)*m.vb)*0.25));
m.vm = ((m.vm*0.85)+(((1-m.vm)*pow(m.mid, 2))*0.025));
m.vvm = ((m.vvm*0.95)+(((1-m.vvm)*m.vm)*0.25));
m.vt = ((m.vt*0.85)+(((1-m.vt)*pow(m.treb, 2))*0.025));
m.vvt = ((m.vvt*0.95)+(((1-m.vvt)*m.vt)*0.25));
m.q1 = m.vvb;
m.q2 = m.vvm;
m.q3 = m.vvt;
m.v = 0.08;
m.d = 0.04;
m.bb = ((m.bb+(m.vvb*m.v))-m.d);
m.mm = ((m.mm+(m.vvm*m.v))-m.d);
m.tt = ((m.tt+(m.vvt*m.v))-m.d);
m.q6 = m.bb;
m.q5 = m.mm;
m.q4 = m.tt;
m.r = ((m.r*0.95)+((m.bass-m.treb)*0.075));
m.rr = ((m.rr*0.95)+(m.r*0.075));
m.rot = (m.rr*0.1);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.1,
			enabled : 0.0,
			b : 0.0,
			g : 1.0,
			scaling : 2.00309,
			samples : 3.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.s3 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.q4 = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.c1 = 0;
m.c2 = 0;
m.c3 = 0;
m.zoom = 0;
m.w = 0;
m.y1 = 0;
m.pi = 0;
m.x1 = 0;
m.z = 0;
m.s1 = 0;
m.t2 = 0;
m.s2 = 0;
m.t3 = 0;
m.t8 = 1;
m.t1 = m.q5;
			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t2 = m.q4;
m.t3 = m.q5;
m.t4 = m.q6;
m.t8 = -1;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = (m.t8+1);
m.pi = (Math.asin(1)*4);
m.zz = ifcond(equal(m.t8, 0), 1, -0.5);
m.yy = ifcond(equal(m.t8, 0), 0, ((0.5*sqrt(3))*Math.sin(div((m.t8*m.pi),3))));
m.xx = ifcond(equal(m.t8, 0), 0, ((0.5*sqrt(3))*Math.cos(div((m.t8*m.pi),3))));
m.w = 1;
m.s1 = Math.sin((m.t2*m.w));
m.s2 = Math.sin((m.t3*m.w));
m.s3 = Math.sin((m.t4*m.w));
m.c1 = Math.cos((m.t2*m.w));
m.c2 = Math.cos((m.t3*m.w));
m.c3 = Math.cos((m.t4*m.w));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.zoom = 0.5;
m.x = (0.5+(m.x1*m.zoom));
m.y = (0.5+(m.y1*m.zoom));
m.r = 1;
m.g = 1;
m.b = 1;
		return m;
	},
		'init_eqs_str' : ('t8 = 1;\n' + 't1 = q5;'),
		'frame_eqs_str' : ('t2 = q4;\n' + 't3 = q5;\n' + 't4 = q6;\n' + 't8 = -1;'),
		'point_eqs_str' : ('t8 = t8+1;\n' + 'pi = asin(1)*4;\n' + 'zz = if(equal(t8,0), 1, -0.5);\n' + 'yy = if(equal(t8,0), 0, 0.5*sqrt(3)*sin(t8*pi/3) );\n' + 'xx = if(equal(t8,0), 0, 0.5*sqrt(3)*cos(t8*pi/3) );\n' + 'w = 1;\n' + 's1 = sin(t2*w);\n' + 's2 = sin(t3*w);\n' + 's3 = sin(t4*w);\n' + 'c1 = cos(t2*w);\n' + 'c2 = cos(t3*w);\n' + 'c3 = cos(t4*w);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'zoom = 0.5;\n' + 'x = 0.5 + (x1)*zoom;\n' + 'y = 0.5 + (y1)*zoom;\n' + 'r = 1;\n' + 'g = 1;\n' + 'b= 1;'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 0.0,
			b : 0.0,
			g : 1.0,
			scaling : 2.00309,
			samples : 3.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.s3 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.q4 = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.c1 = 0;
m.c2 = 0;
m.c3 = 0;
m.zoom = 0;
m.w = 0;
m.y1 = 0;
m.pi = 0;
m.x1 = 0;
m.z = 0;
m.s1 = 0;
m.t2 = 0;
m.s2 = 0;
m.t3 = 0;
m.t8 = 1;
m.t1 = m.q5;
			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t2 = m.q4;
m.t3 = m.q5;
m.t4 = m.q6;
m.t8 = -1;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = (m.t8+1);
m.pi = (Math.asin(1)*4);
m.zz = ifcond(equal(m.t8, 0), 1, -0.5);
m.yy = ifcond(equal(m.t8, 0), 0, ((0.5*sqrt(3))*Math.sin((div((m.t8*m.pi),3)+div(m.pi,3)))));
m.xx = ifcond(equal(m.t8, 0), 0, ((0.5*sqrt(3))*Math.cos((div((m.t8*m.pi),3)+div(m.pi,3)))));
m.w = 1;
m.s1 = Math.sin((m.t2*m.w));
m.s2 = Math.sin((m.t3*m.w));
m.s3 = Math.sin((m.t4*m.w));
m.c1 = Math.cos((m.t2*m.w));
m.c2 = Math.cos((m.t3*m.w));
m.c3 = Math.cos((m.t4*m.w));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.zoom = 0.5;
m.x = (0.5+(m.x1*m.zoom));
m.y = (0.5+(m.y1*m.zoom));
m.r = 1;
m.g = 1;
m.b = 1;
		return m;
	},
		'init_eqs_str' : ('t8 = 1;\n' + 't1 = q5;'),
		'frame_eqs_str' : ('t2 = q4;\n' + 't3 = q5;\n' + 't4 = q6;\n' + 't8 = -1;'),
		'point_eqs_str' : ('t8 = t8+1;\n' + 'pi = asin(1)*4;\n' + 'zz = if(equal(t8,0), 1, -0.5);\n' + 'yy = if(equal(t8,0), 0, 0.5*sqrt(3)*sin(t8*pi/3 + pi/3) );\n' + 'xx = if(equal(t8,0), 0, 0.5*sqrt(3)*cos(t8*pi/3 + pi/3) );\n' + 'w = 1;\n' + 's1 = sin(t2*w);\n' + 's2 = sin(t3*w);\n' + 's3 = sin(t4*w);\n' + 'c1 = cos(t2*w);\n' + 'c2 = cos(t3*w);\n' + 'c3 = cos(t4*w);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'zoom = 0.5;\n' + 'x = 0.5 + (x1)*zoom;\n' + 'y = 0.5 + (y1)*zoom;\n' + 'r = 1;\n' + 'g = 1;\n' + 'b= 1;'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 0.0,
			b : 0.0,
			g : 1.0,
			scaling : 2.00309,
			samples : 3.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.s3 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.q4 = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.c1 = 0;
m.c2 = 0;
m.c3 = 0;
m.zoom = 0;
m.w = 0;
m.y1 = 0;
m.pi = 0;
m.x1 = 0;
m.z = 0;
m.s1 = 0;
m.t2 = 0;
m.s2 = 0;
m.t3 = 0;
m.t8 = 1;
m.t1 = m.q5;
			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t2 = m.q4;
m.t3 = m.q5;
m.t4 = m.q6;
m.t8 = -1;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = (m.t8+1);
m.pi = (Math.asin(1)*4);
m.zz = ifcond(equal(m.t8, 0), 1, -0.5);
m.yy = ifcond(equal(m.t8, 0), 0, ((0.5*sqrt(3))*Math.sin((div((m.t8*m.pi),3)+div((2*m.pi),3)))));
m.xx = ifcond(equal(m.t8, 0), 0, ((0.5*sqrt(3))*Math.cos((div((m.t8*m.pi),3)+div((2*m.pi),3)))));
m.w = 1;
m.s1 = Math.sin((m.t2*m.w));
m.s2 = Math.sin((m.t3*m.w));
m.s3 = Math.sin((m.t4*m.w));
m.c1 = Math.cos((m.t2*m.w));
m.c2 = Math.cos((m.t3*m.w));
m.c3 = Math.cos((m.t4*m.w));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.zoom = 0.5;
m.x = (0.5+(m.x1*m.zoom));
m.y = (0.5+(m.y1*m.zoom));
m.r = 1;
m.g = 1;
m.b = 1;
		return m;
	},
		'init_eqs_str' : ('t8 = 1;\n' + 't1 = q5;'),
		'frame_eqs_str' : ('t2 = q4;\n' + 't3 = q5;\n' + 't4 = q6;\n' + 't8 = -1;'),
		'point_eqs_str' : ('t8 = t8+1;\n' + 'pi = asin(1)*4;\n' + 'zz = if(equal(t8,0), 1, -0.5);\n' + 'yy = if(equal(t8,0), 0, 0.5*sqrt(3)*sin(t8*pi/3 + 2*pi/3) );\n' + 'xx = if(equal(t8,0), 0, 0.5*sqrt(3)*cos(t8*pi/3 + 2*pi/3) );\n' + 'w = 1;\n' + 's1 = sin(t2*w);\n' + 's2 = sin(t3*w);\n' + 's3 = sin(t4*w);\n' + 'c1 = cos(t2*w);\n' + 'c2 = cos(t3*w);\n' + 'c3 = cos(t4*w);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'zoom = 0.5;\n' + 'x = 0.5 + (x1)*zoom;\n' + 'y = 0.5 + (y1)*zoom;\n' + 'r = 1;\n' + 'g = 1;\n' + 'b= 1;'),

		},
		{
		'baseVals' : {
			a : 0.12,
			enabled : 0.0,
			b : 0.0,
			g : 1.0,
			scaling : 0.1439,
			samples : 263.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {
m.rr = 0;
m.t = 0;
m.t8 = -1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.t = (((m.sample*Math.asin(1))*4)+m.time);
m.rr = ((0.01+m.value1)-m.value2);
m.x = (0.5+(Math.sin(m.t)*m.rr));
m.y = (0.5+(Math.cos(m.t)*m.rr));
		return m;
	},
		'init_eqs_str' : ('t8 = -1;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('t = sample*asin(1)*4 + time;\n' + 'rr = 0.01 + value1-value2;\n' + 'x = 0.5 + sin(t)*rr;\n' + 'y = 0.5 + cos(t)*rr;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.45112,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 1.00591,
			x : 1.0,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.s3 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.c1 = 0;
m.c2 = 0;
m.c3 = 0;
m.zoom = 0;
m.w = 0;
m.y1 = 0;
m.x1 = 0;
m.z = 0;
m.s1 = 0;
m.s2 = 0;
m.vx = 0;
m.vy = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.zz = -0.5;
m.yy = 0;
m.xx = (0.5*sqrt(3));
m.w = 1;
m.s1 = Math.sin((m.q4*m.w));
m.s2 = Math.sin((m.q5*m.w));
m.s3 = Math.sin((m.q6*m.w));
m.c1 = Math.cos((m.q4*m.w));
m.c2 = Math.cos((m.q5*m.w));
m.c3 = Math.cos((m.q6*m.w));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.zoom = 0.275;
m.x = (0.5+(m.x1*m.zoom));
m.y = (0.5+(m.y1*m.zoom));
		return m;
	},
		'init_eqs_str' : ('vx = 0;\n' + 'vy = 0;'),
		'frame_eqs_str' : ('zz = -0.5;\n' + 'yy = 0;\n' + 'xx = 0.5*sqrt(3);\n' + 'w = 1;\n' + 's1 = sin(q4*w);\n' + 's2 = sin(q5*w);\n' + 's3 = sin(q6*w);\n' + 'c1 = cos(q4*w);\n' + 'c2 = cos(q5*w);\n' + 'c3 = cos(q6*w);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'zoom = .275;\n' + 'x = 0.5 + (x1)*zoom;\n' + 'y = 0.5 + (y1)*zoom;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.45112,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 1.00591,
			x : 1.0,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.s3 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.c1 = 0;
m.c2 = 0;
m.c3 = 0;
m.zoom = 0;
m.w = 0;
m.y1 = 0;
m.pi = 0;
m.x1 = 0;
m.z = 0;
m.s1 = 0;
m.s2 = 0;
m.vx = 0;
m.vy = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.zz = -0.5;
m.pi = (Math.asin(1)*4);
m.yy = ((0.5*sqrt(3))*Math.sin(div(m.pi,3)));
m.xx = ((0.5*sqrt(3))*Math.cos(div(m.pi,3)));
m.w = 1;
m.s1 = Math.sin((m.q4*m.w));
m.s2 = Math.sin((m.q5*m.w));
m.s3 = Math.sin((m.q6*m.w));
m.c1 = Math.cos((m.q4*m.w));
m.c2 = Math.cos((m.q5*m.w));
m.c3 = Math.cos((m.q6*m.w));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.zoom = 0.25;
m.x = (0.5+(m.x1*m.zoom));
m.y = (0.5+(m.y1*m.zoom));
		return m;
	},
		'init_eqs_str' : ('vx = 0;\n' + 'vy = 0;'),
		'frame_eqs_str' : ('zz = -0.5;\n' + 'pi = asin(1)*4;\n' + 'yy = 0.5*sqrt(3)*sin(pi/3);\n' + 'xx = 0.5*sqrt(3)*cos(pi/3);\n' + 'w = 1;\n' + 's1 = sin(q4*w);\n' + 's2 = sin(q5*w);\n' + 's3 = sin(q6*w);\n' + 'c1 = cos(q4*w);\n' + 'c2 = cos(q5*w);\n' + 'c3 = cos(q6*w);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'zoom = .25;\n' + 'x = 0.5 + (x1)*zoom;\n' + 'y = 0.5 + (y1)*zoom;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.45112,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 1.00591,
			x : 1.0,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.s3 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.c1 = 0;
m.c2 = 0;
m.c3 = 0;
m.zoom = 0;
m.w = 0;
m.y1 = 0;
m.x1 = 0;
m.z = 0;
m.s1 = 0;
m.s2 = 0;
m.vx = 0;
m.vy = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.zz = 1;
m.yy = 0;
m.xx = 0;
m.w = 1;
m.s1 = Math.sin((m.q4*m.w));
m.s2 = Math.sin((m.q5*m.w));
m.s3 = Math.sin((m.q6*m.w));
m.c1 = Math.cos((m.q4*m.w));
m.c2 = Math.cos((m.q5*m.w));
m.c3 = Math.cos((m.q6*m.w));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.zoom = 0.25;
m.x = (0.5+(m.x1*m.zoom));
m.y = (0.5+(m.y1*m.zoom));
		return m;
	},
		'init_eqs_str' : ('vx = 0;\n' + 'vy = 0;'),
		'frame_eqs_str' : ('zz = 1;\n' + 'yy = 0;\n' + 'xx = 0;\n' + 'w = 1;\n' + 's1 = sin(q4*w);\n' + 's2 = sin(q5*w);\n' + 's3 = sin(q6*w);\n' + 'c1 = cos(q4*w);\n' + 'c2 = cos(q5*w);\n' + 'c3 = cos(q6*w);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'zoom = .25;\n' + 'x = 0.5 + (x1)*zoom;\n' + 'y = 0.5 + (y1)*zoom;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.45112,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 1.00591,
			x : 1.0,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.s3 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.c1 = 0;
m.c2 = 0;
m.c3 = 0;
m.zoom = 0;
m.w = 0;
m.y1 = 0;
m.pi = 0;
m.x1 = 0;
m.z = 0;
m.s1 = 0;
m.s2 = 0;
m.vx = 0;
m.vy = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.zz = -0.5;
m.pi = (-Math.asin(1)*4);
m.yy = ((0.5*sqrt(3))*Math.sin(div(m.pi,3)));
m.xx = ((0.5*sqrt(3))*Math.cos(div(m.pi,3)));
m.w = 1;
m.s1 = Math.sin((m.q4*m.w));
m.s2 = Math.sin((m.q5*m.w));
m.s3 = Math.sin((m.q6*m.w));
m.c1 = Math.cos((m.q4*m.w));
m.c2 = Math.cos((m.q5*m.w));
m.c3 = Math.cos((m.q6*m.w));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.zoom = 0.25;
m.x = (0.5+(m.x1*m.zoom));
m.y = (0.5+(m.y1*m.zoom));
		return m;
	},
		'init_eqs_str' : ('vx = 0;\n' + 'vy = 0;'),
		'frame_eqs_str' : ('zz = -0.5;\n' + 'pi = -asin(1)*4;\n' + 'yy = 0.5*sqrt(3)*sin(pi/3);\n' + 'xx = 0.5*sqrt(3)*cos(pi/3);\n' + 'w = 1;\n' + 's1 = sin(q4*w);\n' + 's2 = sin(q5*w);\n' + 's3 = sin(q6*w);\n' + 'c1 = cos(q4*w);\n' + 'c2 = cos(q5*w);\n' + 'c3 = cos(q6*w);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'zoom = .25;\n' + 'x = 0.5 + (x1)*zoom;\n' + 'y = 0.5 + (y1)*zoom;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 my_uv_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = ((uv - 0.5) * vec2(2.08, 2.08));\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = ((tmpvar_3.x * tmpvar_3.x) - (tmpvar_3.y * tmpvar_3.y));\n' + '  tmpvar_4.y = ((2.0 * tmpvar_3.x) * tmpvar_3.y);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = ((tmpvar_4.x * tmpvar_3.x) - (tmpvar_4.y * tmpvar_3.y));\n' + '  tmpvar_5.y = ((tmpvar_4.x * tmpvar_3.y) + (tmpvar_3.x * tmpvar_4.y));\n' + '  my_uv_1 = (tmpvar_5 + vec2(0.31, 0.6));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_fc_main, my_uv_1);\n' + '  ret_2.x = (1.0 - tmpvar_6.x);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (0.5 + ((my_uv_1 - 0.5) * 1.03));\n' + '  tmpvar_7 = texture2D (sampler_fc_main, P_8);\n' + '  ret_2.z = (tmpvar_7.z + 0.008);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_main, uv_orig);\n' + '  ret_2.y = (tmpvar_9.y * 0.34);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '  uv_1 = (0.5 + ((uv - 0.5) * 0.98));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur3, uv_1);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_main, uv_1);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_blur1, uv_1);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur1, uv_1);\n' + '  ret_2 = ((vec3(0.8, 0.6, 0.0) * (vec3(1.0, 1.0, 1.0) - vec3(\n' + '    ((((tmpvar_3.xyz * scale3) + bias3).x + (tmpvar_4.x * 2.0)) - (((tmpvar_5.xyz * scale1) + bias1).x * 2.4))\n' + '  ))) * clamp ((1.0 - \n' + '    (clamp (((\n' + '      (tmpvar_6.xyz * scale1)\n' + '     + bias1).y - 0.1), 0.0, 1.0) * 4.0)\n' + '  ), 0.0, 1.0));\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = clamp ((texture2D (sampler_main, uv_1).y - 0.1), 0.0, 1.0);\n' + '  ret_2 = (ret_2 + (vec3(0.7, 0.6, 1.0) * tmpvar_7));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_main, uv_1);\n' + '  ret_2 = (ret_2 * (1.0 - (tmpvar_8.z * 4.0)));\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = clamp ((texture2D (sampler_main, uv_1).z - 0.18), 0.0, 1.0);\n' + '  ret_2 = (ret_2 + (vec3(8.0, 0.0, 0.0) * tmpvar_9));\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0;\n' + 'y1 = 0;'),
	'frame_eqs_str' : ('vvb = max(0,min(1,vvb));\n' + 'vvm = max(0,min(1,vvm));\n' + 'vvt = max(0,min(1,vvt));\n' + 'vb = vb*0.85 + (1-vb)*pow(bass,2)*0.025;\n' + 'vvb = vvb*0.95 + (1-vvb)*vb*0.25;\n' + 'vm = vm*0.85 + (1-vm)*pow(mid,2)*0.025;\n' + 'vvm = vvm*0.95 + (1-vvm)*vm*0.25;\n' + 'vt = vt*0.85 + (1-vt)*pow(treb,2)*0.025;\n' + 'vvt = vvt*0.95 + (1-vvt)*vt*0.25;\n' + 'q1 = vvb;\n' + 'q2 = vvm;\n' + 'q3 = vvt;\n' + 'v=0.08;\n' + 'd = 0.04;\n' + 'bb = bb + vvb*v - d;\n' + 'mm = mm + vvm*v - d;\n' + 'tt = tt + vvt*v - d;\n' + 'q6 = bb;\n' + 'q5 = mm;\n' + 'q4 = tt;\n' + 'r = r*0.95 + (bass-treb)*0.075;\n' + 'rr = rr*0.95 + r*0.075;\n' + 'rot = rr*0.1;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
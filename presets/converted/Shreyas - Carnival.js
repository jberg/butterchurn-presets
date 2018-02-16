define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.006596,
		ob_size : 0.5,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 1.0,
		wave_y : 1.0,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.0,
		wave_mystery : 0.0,
		decay : 0.925,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.t = 0;
m.ti = 0;
m.t1 = 0;
m.q1 = (Math.acos(-1)*2);
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.67;
m.time = (m.time*0.1);
m.ti = ifcond(above(m.bass, 1.3), 0.3, (m.ti*0.9));
m.t1 = ((m.t1+0.01)+(m.ti*0.1));
m.q2 = (Math.sin(m.time)*Math.cos(m.t1));
m.q3 = ((Math.sin(m.t1)*Math.cos(m.t))+1);
m.q4 = (Math.cos((m.time+1))*Math.sin((m.time-6)));
m.monitor = m.ti;
		m.rkeys = ['sy','sx','rot','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+(Math.cos(m.zoom)*0.1));
m.rot = (m.rot+(Math.sin((m.zoom+m.time))*0.1));
m.sx = (m.sx+(m.treb*0.01));
m.sy = (m.sy+(m.mid*0.01));
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
			samples : 302.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.rx = 0;
m.ry = 0;
m.rz = 0;
m.hu = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['value1','sample'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rx = (div(Math.atan2(m.q2, (sqr(m.q3)+sqr(m.q4))),4)+div(m.q3,2));
m.ry = Math.atan2(m.q2, m.q4);
m.rz = 0;
m.t1 = Math.sin(m.rx);
m.t2 = Math.cos(m.rx);
m.t3 = Math.sin(m.ry);
m.t4 = Math.cos(m.ry);
m.t5 = Math.sin(m.rz);
m.t6 = Math.cos(m.rz);
		return m;
	},
		'point_eqs' : function(m) {
m.sample = ((m.sample*m.q1)*0.5);
m.value1 = ((m.value1+1)*0.3);
m.x1 = ((Math.sin(m.sample)*Math.sin((m.sample*40)))*m.value1);
m.y1 = (Math.cos(m.sample)*m.value1);
m.z1 = ((Math.sin(m.sample)*Math.cos((m.sample*40)))*m.value1);
m.x1 = (m.x1+m.q2);
m.y1 = (m.y1+m.q3);
m.z1 = (m.z1+m.q4);
m.x2 = ((m.x1*m.t4)-(m.z1*m.t3));
m.z2 = ((m.x1*m.t3)+(m.z1*m.t4));
m.y2 = ((m.y1*m.t2)-(m.z2*m.t1));
m.z3 = (((m.y1*m.t1)+(m.z2*m.t2))+1.4);
m.x3 = ((m.x2*m.t6)-(m.y2*m.t5));
m.y3 = ((m.x2*m.t5)+(m.y2*m.t6));
m.z3 = ifcond(above(m.z3, 0.1), div(0.5,m.z3), 0);
m.x = (ifcond(m.z3, (m.x3*m.z3), m.x)+0.5);
m.y = (ifcond(m.z3, (-m.y3*m.z3), m.y)+0.5);
m.hu = (m.sample+Math.sin(m.time));
m.r = ((Math.sin(m.hu)*0.5)+0.5);
m.g = ((Math.sin((m.hu+(m.q1*0.33)))*0.5)+0.5);
m.b = ((Math.sin((m.hu+(m.q1*0.66)))*0.5)+0.5);
m.a = (m.z3*0.8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rx=atan2(q2,sqr(q3)+sqr(q4))/4+q3/2;\n' + 'ry=atan2(q2,q4);\n' + 'rz=0;\n' + 't1=sin(rx);\n' + 't2=cos(rx);\n' + 't3=sin(ry);\n' + 't4=cos(ry);\n' + 't5=sin(rz);\n' + 't6=cos(rz);'),
		'point_eqs_str' : ('sample=sample*q1*.5;\n' + 'value1=(value1+1)*.3;\n' + 'x1=sin(sample)*sin(sample*40)*value1;\n' + 'y1=cos(sample)*value1;\n' + 'z1=sin(sample)*cos(sample*40)*value1;\n' + 'x1=x1+q2;\n' + 'y1=y1+q3;\n' + 'z1=z1+q4;\n' + 'x2=x1*t4-z1*t3;\n' + 'z2=x1*t3+z1*t4;\n' + 'y2=y1*t2-z2*t1;\n' + 'z3=y1*t1+z2*t2+1.4;\n' + 'x3=x2*t6-y2*t5;\n' + 'y3=x2*t5+y2*t6;\n' + 'z3=if(above(z3,.1),.5/z3,0);\n' + 'x=if(z3,x3*z3,x)+.5;\n' + 'y=if(z3,-y3*z3,y)+.5;\n' + 'hu=sample+sin(time);\n' + 'r=sin(hu)*.5+.5;\n' + 'g=sin(hu+q1*.33)*.5+.5;\n' + 'b=sin(hu+q1*.66)*.5+.5;\n' + 'a=z3*.8;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 302.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.rt = 0;
m.t6 = 0;
m.q4 = 0;
m.rx = 0;
m.ry = 0;
m.i1 = 0;
m.rz = 0;
m.cp = 0;
m.hu = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['sample','cp'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rx = (div(Math.atan2(m.q2, (sqr(m.q3)+sqr(m.q4))),4)+div(m.q3,2));
m.ry = Math.atan2(m.q2, m.q4);
m.rz = 0;
m.t1 = Math.sin(m.rx);
m.t2 = Math.cos(m.rx);
m.t3 = Math.sin(m.ry);
m.t4 = Math.cos(m.ry);
m.t5 = Math.sin(m.rz);
m.t6 = Math.cos(m.rz);
		return m;
	},
		'point_eqs' : function(m) {
m.cp = bnot(m.cp);
m.r = ((m.sample*m.q1)*10);
m.i1 = mod((m.sample*6),2);
m.rt = ifcond(m.cp, 1, 0.5);
m.sample = ((m.sample*m.q1)*0.5);
m.x1 = (Math.sin(m.r)*m.rt);
m.z1 = (Math.cos(m.r)*m.rt);
m.y1 = (-Math.sin(m.i1)+0.5);
m.x1 = (m.x1+m.q2);
m.y1 = (m.y1+m.q3);
m.z1 = (m.z1+m.q4);
m.x2 = ((m.x1*m.t4)-(m.z1*m.t3));
m.z2 = ((m.x1*m.t3)+(m.z1*m.t4));
m.y2 = ((m.y1*m.t2)-(m.z2*m.t1));
m.z3 = (((m.y1*m.t1)+(m.z2*m.t2))+1.4);
m.x3 = ((m.x2*m.t6)-(m.y2*m.t5));
m.y3 = ((m.x2*m.t5)+(m.y2*m.t6));
m.z3 = ifcond(above(m.z3, 0.1), div(0.5,m.z3), 0);
m.x = (ifcond(m.z3, (m.x3*m.z3), m.x)+0.5);
m.y = (ifcond(m.z3, (-m.y3*m.z3), m.y)+0.5);
m.hu = (m.sample+(Math.sin(div(m.time,m.q1))*m.q1));
m.r = ((Math.sin(m.hu)*0.5)+0.5);
m.g = ((Math.sin((m.hu+(m.q1*0.33)))*0.5)+0.5);
m.b = ((Math.sin((m.hu+(m.q1*0.66)))*0.5)+0.5);
m.a = (m.z3*0.8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rx=atan2(q2,sqr(q3)+sqr(q4))/4+q3/2;\n' + 'ry=atan2(q2,q4);\n' + 'rz=0;\n' + 't1=sin(rx);\n' + 't2=cos(rx);\n' + 't3=sin(ry);\n' + 't4=cos(ry);\n' + 't5=sin(rz);\n' + 't6=cos(rz);'),
		'point_eqs_str' : ('cp=bnot(cp);\n' + 'r=sample*q1*10;\n' + 'i1=(sample*6)%2;\n' + 'rt=if(cp,1,.5);\n' + 'sample=sample*q1*.5;\n' + 'x1=sin(r)*rt;\n' + 'z1=cos(r)*rt;\n' + 'y1=-sin(i1)+.5;\n' + 'x1=x1+q2;\n' + 'y1=y1+q3;\n' + 'z1=z1+q4;\n' + 'x2=x1*t4-z1*t3;\n' + 'z2=x1*t3+z1*t4;\n' + 'y2=y1*t2-z2*t1;\n' + 'z3=y1*t1+z2*t2+1.4;\n' + 'x3=x2*t6-y2*t5;\n' + 'y3=x2*t5+y2*t6;\n' + 'z3=if(above(z3,.1),.5/z3,0);\n' + 'x=if(z3,x3*z3,x)+.5;\n' + 'y=if(z3,-y3*z3,y)+.5;\n' + 'hu=sample+sin(time/q1)*q1;\n' + 'r=sin(hu)*.5+.5;\n' + 'g=sin(hu+q1*.33)*.5+.5;\n' + 'b=sin(hu+q1*.66)*.5+.5;\n' + 'a=z3*.8;'),

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
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.rx = 0;
m.ry = 0;
m.rz = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['sample'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rx = (div(Math.atan2(m.q2, (sqr(m.q3)+sqr(m.q4))),4)+div(m.q3,2));
m.ry = Math.atan2(m.q2, m.q4);
m.rz = 0;
m.t1 = Math.sin(m.rx);
m.t2 = Math.cos(m.rx);
m.t3 = Math.sin(m.ry);
m.t4 = Math.cos(m.ry);
m.t5 = Math.sin(m.rz);
m.t6 = Math.cos(m.rz);
		return m;
	},
		'point_eqs' : function(m) {
m.sample = ((m.sample*m.q1)*134);
m.x1 = ((Math.sin((m.sample*543))*2)+m.q2);
m.y1 = ((Math.cos((m.sample*4232))*2)+m.q3);
m.z1 = ((Math.sin((m.sample*90))*2)+m.q4);
m.x2 = ((m.x1*m.t4)-(m.z1*m.t3));
m.z2 = ((m.x1*m.t3)+(m.z1*m.t4));
m.y2 = ((m.y1*m.t2)-(m.z2*m.t1));
m.z3 = (((m.y1*m.t1)+(m.z2*m.t2))+1);
m.x3 = ((m.x2*m.t6)-(m.y2*m.t5));
m.y3 = ((m.x2*m.t5)+(m.y2*m.t6));
m.z3 = ifcond(above(m.z3, 0.1), div(0.5,m.z3), 0);
m.x = (ifcond(m.z3, (m.x3*m.z3), m.x)+0.5);
m.y = (ifcond(m.z3, (-m.y3*m.z3), m.y)+0.5);
m.a = (m.z3*0.8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rx=atan2(q2,sqr(q3)+sqr(q4))/4+q3/2;\n' + 'ry=atan2(q2,q4);\n' + 'rz=0;\n' + 't1=sin(rx);\n' + 't2=cos(rx);\n' + 't3=sin(ry);\n' + 't4=cos(ry);\n' + 't5=sin(rz);\n' + 't6=cos(rz);'),
		'point_eqs_str' : ('sample=sample*q1*134;\n' + 'x1=sin(sample*543)*2+q2;\n' + 'y1=cos(sample*4232)*2+q3;\n' + 'z1=sin(sample*90)*2+q4;\n' + 'x2=x1*t4-z1*t3;\n' + 'z2=x1*t3+z1*t4;\n' + 'y2=y1*t2-z2*t1;\n' + 'z3=y1*t1+z2*t2+1;\n' + 'x3=x2*t6-y2*t5;\n' + 'y3=x2*t5+y2*t6;\n' + 'z3=if(above(z3,.1),.5/z3,0);\n' + 'x=if(z3,x3*z3,x)+.5;\n' + 'y=if(z3,-y3*z3,y)+.5;\n' + 'a=z3*.8;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 142.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.rt = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.t8 = 0;
m.rx = 0;
m.ry = 0;
m.i1 = 0;
m.rz = 0;
m.ry1 = 0;
m.cp = 0;
m.hu = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['sample','cp'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rx = (div(Math.atan2(m.q2, (sqr(m.q3)+sqr(m.q4))),4)+div(m.q3,2));
m.ry = Math.atan2(m.q2, m.q4);
m.rz = 0;
m.ry1 = (m.ry1+(m.bass_att*0.2));
m.t1 = Math.sin(m.rx);
m.t2 = Math.cos(m.rx);
m.t3 = Math.sin(m.ry);
m.t4 = Math.cos(m.ry);
m.t5 = Math.sin(m.rz);
m.t6 = Math.cos(m.rz);
m.t7 = Math.sin(m.ry1);
m.t8 = Math.cos(m.ry1);
		return m;
	},
		'point_eqs' : function(m) {
m.cp = bnot(m.cp);
m.r = ((m.sample*m.q1)*10);
m.i1 = mod((m.sample*6),2);
m.rt = ifcond(m.cp, 0.7, 0.2);
m.sample = ((m.sample*m.q1)*0.5);
m.x1 = (Math.sin(m.r)*m.rt);
m.z1 = (Math.cos(m.r)*m.rt);
m.y1 = -0.5;
m.x2 = ((m.x1*m.t8)-(m.z1*m.t7));
m.z2 = ((m.x1*m.t7)+(m.z1*m.t8));
m.x1 = (m.x2+m.q2);
m.y1 = (m.y1+m.q3);
m.z1 = (m.z2+m.q4);
m.x2 = ((m.x1*m.t4)-(m.z1*m.t3));
m.z2 = ((m.x1*m.t3)+(m.z1*m.t4));
m.y2 = ((m.y1*m.t2)-(m.z2*m.t1));
m.z3 = (((m.y1*m.t1)+(m.z2*m.t2))+1.4);
m.x3 = ((m.x2*m.t6)-(m.y2*m.t5));
m.y3 = ((m.x2*m.t5)+(m.y2*m.t6));
m.z3 = ifcond(above(m.z3, 0.1), div(0.5,m.z3), 0);
m.x = (ifcond(m.z3, (m.x3*m.z3), m.x)+0.5);
m.y = (ifcond(m.z3, (-m.y3*m.z3), m.y)+0.5);
m.hu = (m.sample+(Math.cos(div(m.time,m.q1))*m.q1));
m.r = ((Math.sin(m.hu)*0.5)+0.5);
m.g = ((Math.sin((m.hu+(m.q1*0.33)))*0.5)+0.5);
m.b = ((Math.sin((m.hu+(m.q1*0.66)))*0.5)+0.5);
m.a = (m.z3*0.8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rx=atan2(q2,sqr(q3)+sqr(q4))/4+q3/2;\n' + 'ry=atan2(q2,q4);\n' + 'rz=0;\n' + 'ry1=ry1+bass_att*.2;\n' + 't1=sin(rx);\n' + 't2=cos(rx);\n' + 't3=sin(ry);\n' + 't4=cos(ry);\n' + 't5=sin(rz);\n' + 't6=cos(rz);\n' + 't7=sin(ry1);\n' + 't8=cos(ry1);'),
		'point_eqs_str' : ('cp=bnot(cp);\n' + 'r=sample*q1*10;\n' + 'i1=(sample*6)%2;\n' + 'rt=if(cp,.7,.2);\n' + 'sample=sample*q1*.5;\n' + 'x1=sin(r)*rt;\n' + 'z1=cos(r)*rt;\n' + 'y1=-.5;\n' + 'x2=x1*t8-z1*t7;\n' + 'z2=x1*t7+z1*t8;\n' + 'x1=x2+q2;\n' + 'y1=y1+q3;\n' + 'z1=z2+q4;\n' + 'x2=x1*t4-z1*t3;\n' + 'z2=x1*t3+z1*t4;\n' + 'y2=y1*t2-z2*t1;\n' + 'z3=y1*t1+z2*t2+1.4;\n' + 'x3=x2*t6-y2*t5;\n' + 'y3=x2*t5+y2*t6;\n' + 'z3=if(above(z3,.1),.5/z3,0);\n' + 'x=if(z3,x3*z3,x)+.5;\n' + 'y=if(z3,-y3*z3,y)+.5;\n' + 'hu=sample+cos(time/q1)*q1;\n' + 'r=sin(hu)*.5+.5;\n' + 'g=sin(hu+q1*.33)*.5+.5;\n' + 'b=sin(hu+q1*.66)*.5+.5;\n' + 'a=z3*.8;'),

		}
],
	'shapes' : [
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
	'init_eqs_str' : ('q1=acos(-1)*2;'),
	'frame_eqs_str' : ('decay=.67;\n' + 'time=time*.1;\n' + 'ti=if(above(bass,1.3),.3,ti*.9);\n' + 't1=t1+.01+ti*.1;\n' + 'q2=sin(time)*cos(t1);\n' + 'q3=sin(t1)*cos(t)+1;\n' + 'q4=cos(time+1)*sin(time-6);\n' + 'monitor=ti;'),
	'pixel_eqs_str' : ('zoom=zoom+cos(zoom)*.1;\n' + 'rot=rot+sin(zoom+time)*.1;\n' + 'sx=sx+treb*.01;\n' + 'sy=sy+mid*.01;'),
};

return pmap;
});
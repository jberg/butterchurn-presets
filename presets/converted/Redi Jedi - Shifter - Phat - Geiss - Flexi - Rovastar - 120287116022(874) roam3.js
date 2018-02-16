define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.952,
		ib_g : 0.3,
		mv_x : 31.2,
		warpscale : 0.733,
		brighten : 0.0,
		mv_y : 2.28,
		wave_scale : 0.328,
		echo_alpha : 0.363,
		additivewave : 1.0,
		sx : 0.99997,
		ob_r : 0.466,
		sy : 0.99992,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.06073,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 2.81576,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.885,
		ib_r : 0.741,
		mv_b : 0.412,
		echo_zoom : 1.0,
		ob_size : 0.02,
		b1ed : 0.014,
		wave_smoothing : 0.275,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.961,
		wave_x : 0.843,
		wave_y : 0.604,
		zoom : 1.01265,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.00184,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.518,
		invert : 0.0,
		rot : 0.00154,
		wave_thick : 0.0,
		modwavealphaend : 1.157,
		wave_mystery : -0.119,
		decay : 0.995,
		wave_a : 0.003,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.929,
		ib_b : 0.323,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.876,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.const = 0;
m.rawbeatb = 0;
m.q5 = 0;
m.an2 = 0;
m.q6 = 0;
m.avgbbeatrate = 0;
m.dist = 0;
m.q7 = 0;
m.q8 = 0;
m.gamma = 0;
m.tdy = 0;
m.bool = 0;
m.lbass = 0;
m.beatb = 0;
m.mult = 0;
m.avgdb = 0;
m.du = 0;
m.dv = 0;
m.beatbhard = 0;
m.ang2 = 0;
m.ph = 0;
m.mtime2 = 0;
m.lbbtime2 = 0;
m.lbbtime = 0;
m.mtime = 0;
m.phase = 0;
m.db = 0;
m.db = 0.001;
m.tdy = 0;
m.avgbbeatrate = 0.5;
m.lbass = m.bass;
m.rawbeatb = 0;
m.lbbtime = m.time;
m.avgdb = 0.01;
m.ph = 0;
m.phase = 0;
m.bool = 0;
m.const = 0.02;
m.mtime = (100+(m.bass_att*1000));
m.mtime2 = (100+(m.treb_att*1000));
m.lbbtime2 = m.time;
		return m;
	},
	'frame_eqs' : function(m) {
m.db = ((m.bass-m.lbass)*m.fps);
m.lbass = m.bass;
m.avgdb = ((m.avgdb*0.99)+(Math.abs(m.db)*0.01));
m.wave_a = 0;
m.rawbeatb = above(Math.abs(m.db), m.avgdb);
m.beatb = (m.rawbeatb*above((m.time-m.lbbtime), (m.avgbbeatrate*0.5)));
m.ob_g = (0.3*Math.abs(m.q2));
m.beatbhard = (m.beatb*(Math.abs(m.db)-m.avgdb));
m.avgbbeatrate = ((m.beatb*((m.avgbbeatrate*0.9)+((m.time-m.lbbtime)*0.1)))+((1-m.beatb)*(m.avgbbeatrate+((3-m.avgbbeatrate)*0.00001))));
m.q3 = Math.sin(m.an2);
m.lbbtime = ((m.time*m.beatb)+((1-m.beatb)*m.lbbtime));
m.ph = (((m.time-m.lbbtime2)*div(60,m.avgbbeatrate))*m.const);
m.wave_g = (m.wave_g+(0.4*((0.60*Math.sin((10*m.q1)))+(0.40*Math.sin((10*m.q2))))));
m.zoom = 1.001;
m.bool = ((below(m.phase, 0.98)*(0.99-m.ph))-(above(m.phase, 0.98)*(m.ph*0.5)));
m.q5 = Math.sin(m.an2);
m.mtime2 = (m.mtime2+((Math.min((m.avgdb*0.01), 0.25)+(m.beatbhard*0.01))*div(1,m.fps)));
m.gamma = ((1+Math.abs((m.db*0.01)))+m.beatbhard);
m.invert = (above(m.db, (m.avgdb*4))*m.beatb);
m.q1 = m.rawbeatb;
m.q2 = m.beatbhard;
m.wrap = 1;
m.decay = 1;
m.q7 = m.mtime;
m.q8 = m.mtime2;
m.monitor = m.bool;
m.dy = (0.00003*m.q3);
m.tdy = ifcond((1-m.q6), 0, (m.tdy+(m.dy*div(50,m.fps))));
m.q6 = (1-above(m.tdy, 0.06));
m.warp = ((above(m.db, (m.avgdb*4))*m.beatb)*m.bass_att);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.du = (((m.x*2)-1)-m.q1);
m.dv = (((m.y*2)-1)-m.q2);
m.dist = sqrt(((m.du*m.du)+(m.dv*m.dv)));
m.ang2 = (Math.atan2(m.du, m.dv)+(m.time*0.15));
m.mult = (0.15*Math.sin((m.dist*0.05)));
m.dx = ((m.mult*Math.sin(((m.ang2*2)-1.5)))*m.aspectx);
m.dy = ((m.mult*Math.cos(((m.ang2*2)-1.5)))*m.aspecty);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.814,
			enabled : 0.0,
			b : 0.857,
			g : 0.19,
			scaling : 0.73104,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.26,
			smoothing : 0.02345,
			thick : 1.0,
			sep : 20.0,
			},
		'init_eqs' : function(m) {
m.bb = 0;
m.q1 = 0;
m.s3 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.t7 = 0;
m.d = 0;
m.t8 = 0;
m.sw = 0;
m.q7 = 0;
m.q8 = 0;
m.h = 0;
m.cl1 = 0;
m.j2 = 0;
m.cl2 = 0;
m.j3 = 0;
m.j = 0;
m.cl3 = 0;
m.k = 0;
m.it = 0;
m.sw1 = 0;
m.c1 = 0;
m.n = 0;
m.sw2 = 0;
m.c2 = 0;
m.sw3 = 0;
m.c3 = 0;
m.sw4 = 0;
m.zoom = 0;
m.w = 0;
m.hue = 0;
m.x1 = 0;
m.z = 0;
m.t1 = 0;
m.s1 = 0;
m.t2 = 0;
m.xv = 0;
m.s2 = 0;
m.t3 = 0;

			m.rkeys = ['zz','b','it','xv'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = 0;
m.j = (m.j+(m.bass*0.01));
m.j2 = (m.j2+(m.mid_att*0.01));
m.j3 = (m.j3+(m.treb_att*0.01));
m.t2 = m.j;
m.t3 = m.j2;
m.t4 = m.j3;
m.k = ((m.k*0.99)+div((10*m.mid),m.fps));
m.t5 = -m.k;
m.cl1 = ifcond(below(ifcond(above((m.cl1+0.002), 1), 0, m.cl1), 0), 1, m.cl1);
m.t8 = m.cl1;
m.cl2 = ifcond(below(ifcond(above((m.cl2-(1*m.q1)), 1), 0, m.cl2), 0), 1, m.cl2);
m.t7 = m.cl2;
m.cl3 = ifcond(below(ifcond(above((m.cl3+0.001), 1), 0, m.cl3), 0), 1, m.cl3);
m.t6 = m.cl3;
		return m;
	},
		'point_eqs' : function(m) {
m.it = (((m.it+1)*above(m.sample, 0))*below(m.it, 53));
m.y = (Math.floor(rand(1001))*0.001);
m.zz = (((div((mod((m.yy*58652340875),10000000)+100),10000000)+m.t8)-ifcond(above((m.zz+m.t8), 1), 1, 0))-0.5);
m.sw = (1-equal(m.it, 0));
m.xv = ifcond(m.sw, m.xv, div(Math.floor(rand(39)),39));
m.w = 1;
m.bb = ((m.d*m.d)*0.5);
m.n = 0.3;
m.s1 = Math.sin((Math.sin(((m.t2*m.w)+m.bb))*m.n));
m.s2 = Math.sin((Math.sin(((m.t3*m.w)+m.bb))*m.n));
m.s3 = Math.sin((Math.sin(((m.t4*m.w)+m.bb))*m.n));
m.c1 = Math.cos((Math.sin(((m.t2*m.w)+m.bb))*m.n));
m.c2 = Math.cos((Math.sin(((m.t3*m.w)+m.bb))*m.n));
m.c3 = Math.cos((Math.sin(((m.t4*m.w)+m.bb))*m.n));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.zoom = (0.5*div(1,(m.z+0.5)));
m.x = ((0.5+(m.zoom*m.x1))+(Math.sin((m.time*0.1))*0));
m.b = ifcond(below(ifcond(above(m.b, 1), 1, m.b), 0), 0, m.b);
m.a = 0.4;
m.hue = (Math.sin((((m.q7-m.q8)*m.q3)+(m.xv*50)))+2);
m.h = (6*(m.hue-Math.floor(m.hue)));
m.sw1 = below(m.h, 1);
m.g = ((((m.sw1*m.h)+m.sw2)+m.sw3)+(m.sw4*(4-m.h)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = 0;\n' + 'j = j + (bass)*0.01;\n' + 'j2 = j2 + (mid_att)*0.01;\n' + 'j3 = j3 + (treb_att)*0.01;\n' + 't2 = j;\n' + 't3 = j2;\n' + 't4 = j3;\n' + 'k = k*0.99 + 10*mid/fps;\n' + 't5 = -k;\n' + 'cl1 = if(below(if(above(cl1 + 0.002,1),0,cl1),0),1,cl1);\n' + 't8 = cl1;\n' + 'cl2 = if(below(if(above(cl2 -1*q1,1),0,cl2),0),1,cl2);\n' + 't7 = cl2;\n' + 'cl3 = if(below(if(above(cl3 +0.001,1),0,cl3),0),1,cl3);\n' + 't6 = cl3;'),
		'point_eqs_str' : ('it = (it + 1)*above(sample,0)*below(it,53);\n' + 'y = int(rand(1001))*.001;\n' + 'zz = ((yy*58652340875)%10000000+100)/10000000 + t8 - if(above(zz+t8,1),1,0) - 0.5;\n' + 'sw = 1-equal(it,0);\n' + 'xv = if(sw,xv,int(rand(39))/39);\n' + 'w = 1;\n' + 'bb = d*d*0.5;\n' + 'n = 0.3;\n' + 's1 = sin(sin(t2*w+bb)*n);\n' + 's2 = sin(sin(t3*w+bb)*n);\n' + 's3 = sin(sin(t4*w+bb)*n);\n' + 'c1 = cos(sin(t2*w+bb)*n);\n' + 'c2 = cos(sin(t3*w+bb)*n);\n' + 'c3 = cos(sin(t4*w+bb)*n);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'zoom = .5*(1/(z+0.5));\n' + 'x = 0.5 + zoom*x1 + sin(time*0.1)*0;\n' + 'b = if(below(if(above(b,1),1,b),0),0,b);\n' + 'a = 0.4;\n' + 'hue = sin((q7-q8)*q3+xv*50)+2;\n' + 'h = 6*(hue-int(hue));\n' + 'sw1 = below(h,1);\n' + 'g = sw1*h+sw2+sw3+sw4*(4-h);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.899,
			g : 1.0,
			scaling : 3.02305,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0153,
			thick : 1.0,
			sep : 20.0,
			},
		'init_eqs' : function(m) {
m.t8 = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t8 = 1;
m.t1 = 0.5;
m.t2 = 0.9;
		return m;
	},
		'point_eqs' : function(m) {
m.x = (Math.floor(rand(1001))*0.001);
m.y = (0.9-(m.sample*0.8));
m.b = 0;
m.a = Math.max(0, (1-(pow((((m.x-0.5)*(m.x-0.5))+((m.y-0.5)*(m.y-0.5))), 0.5)*8)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t8 = 1;\n' + 't1 = 0.5;\n' + 't2 = 0.9;'),
		'point_eqs_str' : ('x = int(rand(1001))*.001;\n' + 'y = 0.9 - sample*0.8;\n' + 'b = 0;\n' + 'a = max(0,1-pow((x-.5)*(x-.5)+(y-.5)*(y-.5),.5)*8);'),

		},
		{
		'baseVals' : {
			a : 0.839,
			enabled : 0.0,
			b : 0.192,
			g : 0.265,
			scaling : 2.38775,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.1204,
			thick : 1.0,
			sep : 20.0,
			},
		'init_eqs' : function(m) {
m.dd = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.d = 0;
m.q5 = 0;
m.t8 = 0;
m.ddd = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.xxx = 0;
m.yyy = 0;
m.t1 = 0;
m.sp = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['dd','t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q5;
m.t2 = m.q4;
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
m.t7 = m.q7;
m.t8 = m.q8;
		return m;
	},
		'point_eqs' : function(m) {
m.t8 = -m.t8;
m.r = 0;
m.yyy = m.yy;
m.sp = ((m.sample*0.16)+0.028);
m.y = (0.5-(m.q6*m.sp));
m.d = div(1,sqrt((sqr((m.xx-m.xxx))+sqr((m.yy-m.yyy)))));
m.dd = ((m.dd*0.95)+m.value1);
m.ddd = (((m.dd*m.sample)*(1-m.sample))*m.d);
m.x = (m.xx+((m.yy-m.yyy)*m.ddd));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q5;\n' + 't2 = q4;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't7 = q7;\n' + 't8 = q8;'),
		'point_eqs_str' : ('t8 = -t8;\n' + 'r = 0;\n' + 'yyy = yy;\n' + 'sp = sample*.16 + .028;\n' + 'y = .5 - q6*sp;\n' + 'd = 1/sqrt(sqr(xx-xxx)+sqr(yy-yyy));\n' + 'dd = dd*0.95 + (value1);\n' + 'ddd = dd*sample*(1-sample)*d;\n' + 'x = xx + (yy-yyy)*ddd;'),

		},
		{
		'baseVals' : {
			a : 0.998,
			enabled : 0.0,
			b : 0.612,
			g : 0.982,
			scaling : 4.13607,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.97,
			smoothing : 0.0245,
			thick : 1.0,
			sep : 20.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.s3 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.t5 = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.d = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.d1 = 0;
m.c1 = 0;
m.n = 0;
m.c2 = 0;
m.c3 = 0;
m.rd = 0;
m.na = 0;
m.zoom = 0;
m.xxx = 0;
m.y1 = 0;
m.yyy = 0;
m.pi = 0;
m.z = 0;
m.w1 = 0;
m.w2 = 0;
m.w3 = 0;
m.t1 = 0;
m.s1 = 0;
m.t2 = 0;
m.s2 = 0;
m.t3 = 0;

			m.rkeys = ['t8','sample'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t2 = (m.q5*0.75);
m.t3 = (m.q6*0.75);
m.t4 = (m.q4*0.75);
m.t5 = (m.q5*0.75);
m.t6 = (m.q6*0.75);
m.t7 = m.q7;
m.t8 = m.q8;
		return m;
	},
		'point_eqs' : function(m) {
m.sample = (1-m.sample);
m.pi = Math.asin(1);
m.n = 80;
m.t8 = -m.t8;
m.rd = (0.075+div((0.02*(m.t8+1)),2));
m.xx = ((Math.sin(((m.sample*m.pi)*4))*0.5)+(((Math.cos(((m.sample*m.pi)*m.n))*m.rd)*Math.sin(((m.sample*m.pi)*4)))*m.d1));
m.yy = ((Math.cos(((m.sample*m.pi)*4))*0.5)+(((Math.cos(((m.sample*m.pi)*m.n))*m.rd)*Math.cos(((m.sample*m.pi)*4)))*m.d1));
m.zz = ((Math.sin(((m.sample*m.pi)*m.n))*m.rd)*m.d1);
m.d = div(1,sqrt((sqr((m.xx-m.xxx))+sqr((m.yy-m.yyy)))));
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
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.na = 0.5;
m.zoom = (0.5*Math.atan2(m.na, (m.na+m.z)));
m.y = (0.5+(m.zoom*m.y1));
m.a = (sigmoid(-m.z, 7)+0);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q5*0.75;\n' + 't3 = q6*0.75;\n' + 't4 = q4*0.75;\n' + 't5 = q5*0.75;\n' + 't6 = q6*0.75;\n' + 't7 = q7;\n' + 't8 = q8;'),
		'point_eqs_str' : ('sample = 1-sample;\n' + 'pi = asin(1);\n' + 'n = 80;\n' + 't8 = -t8;\n' + 'rd = 0.075+0.02*(t8+1)/2;\n' + 'xx = sin(sample*pi*4)*0.5 + cos(sample*pi*n)*rd*sin(sample*pi*4)*d1;\n' + 'yy = cos(sample*pi*4)*0.5 + cos(sample*pi*n)*rd*cos(sample*pi*4)*d1;\n' + 'zz = sin(sample*pi*n)*rd*d1;\n' + 'd = 1/sqrt(sqr(xx-xxx)+sqr(yy-yyy));\n' + 'w1 = d*t4;\n' + 'w2 = d*t5;\n' + 'w3 = d*t6;\n' + 's1 = sin(t1*1+w1);\n' + 's2 = sin(t2*1+w2);\n' + 's3 = sin(t3*1+w3);\n' + 'c1 = cos(t1*1+w1);\n' + 'c2 = cos(t2*1+w2);\n' + 'c3 = cos(t3*1+w3);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'na = 0.5;\n' + 'zoom = 0.5*atan2(na,na+z);\n' + 'y = 0.5 + zoom*y1;\n' + 'a = sigmoid(-z,7)+0;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.284,
			a : 0.942,
			enabled : 0.0,
			b : 0.655,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.992,
			textured : 0.0,
			g2 : 0.951,
			tex_zoom : 0.50479,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.35,
			b2 : 0.701,
			a2 : 0.82,
			r : 0.532,
			border_g : 1.0,
			rad : 0.08053,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.888,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q7 = 0;
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.4996+(Math.sin(m.q8)*0.2));
m.y = (0.5003+(Math.sin(m.q7)*0.2));
m.ang = ((((Math.floor(rand(1001))*0.001)-(Math.floor(rand(1001))*0.001))*m.q2)*0.5);
m.rad = (m.rad-((((Math.floor(rand(1001))*0.001)+(Math.floor(rand(1001))*0.001))*1.5)*m.q1));
m.a = above(m.treb_att, 0.8);
m.a2 = above(m.bass_att, 1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = .4996+sin(q8)*.2;\n' + 'y = .5003+sin(q7)*.2;\n' + 'ang = (int(rand(1001))*.001 - int(rand(1001))*.001)*q2*.5;\n' + 'rad = rad - (int(rand(1001))*.001 + int(rand(1001))*.001)*1.5*q1;\n' + 'a = above(treb_att,.8);\n' + 'a2 = above(bass_att,1);'),

		},
		{
		'baseVals' : {
			r2 : 0.117,
			a : 1.0,
			enabled : 1.0,
			b : 0.001,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.525,
			textured : 0.0,
			g2 : 0.702,
			tex_zoom : 0.80553,
			additive : 0.0,
			border_a : 0.018,
			border_b : 1.0,
			b2 : 0.003,
			a2 : 0.957,
			r : 0.81,
			border_g : 1.0,
			rad : 0.16095,
			x : 0.7,
			y : 0.47,
			ang : 0.31145,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.xx = 0;
m.yy = 0;
m.q2 = 0;
m.q4 = 0;
m.d = 0;
m.q8 = 0;
m.aang = 0;

			m.rkeys = ['aang','yy','xx'];
			return m;
		},
		'frame_eqs' : function(m) {
m.d = sqrt((sqr((m.xx-m.q4))+sqr((m.yy-m.q8))));
m.y = (m.q2-0.4);
m.xx = ifcond(below(m.d, 0.15), (0.4+div(Math.floor(rand(200)),1000)), m.xx);
m.yy = ifcond(below(m.d, 0.15), (0.3+div(Math.floor(rand(400)),1000)), m.yy);
m.aang = ifcond(below(m.d, 0.12), div(Math.floor(rand(1000)),1000), m.aang);
m.ang = ((m.aang*4)*Math.asin(1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('d = sqrt( sqr(xx-q4)+sqr(yy-q8));\n' + 'y = q2- 0.4;\n' + 'xx = if(below(d,0.15),0.4+int(rand(200))/1000,xx);\n' + 'yy = if(below(d,0.15),0.3+int(rand(400))/1000,yy);\n' + 'aang = if(below(d,0.12),int(rand(1000))/1000,aang);\n' + 'ang = aang*4*asin(1);'),

		},
		{
		'baseVals' : {
			r2 : 0.12,
			a : 1.0,
			enabled : 0.0,
			b : 0.954,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.01,
			tex_zoom : 0.63474,
			additive : 0.0,
			border_a : 0.08,
			border_b : 1.0,
			b2 : 0.89,
			a2 : 0.585,
			r : 0.665,
			border_g : 1.0,
			rad : 0.64685,
			x : 0.889,
			y : 0.545,
			ang : 0.11699,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.xx = 0;
m.yy = 0;
m.q4 = 0;
m.d = 0;
m.q8 = 0;
m.aang = 0;

			m.rkeys = ['aang','yy','xx'];
			return m;
		},
		'frame_eqs' : function(m) {
m.d = sqrt((sqr((m.xx-m.q4))+sqr((m.yy-m.q8))));
m.xx = ifcond(below(m.d, 0.15), (0.4+div(Math.floor(rand(200)),1000)), m.xx);
m.yy = ifcond(below(m.d, 0.15), (0.3+div(Math.floor(rand(400)),1000)), m.yy);
m.aang = ifcond(below(m.d, 0.12), div(Math.floor(rand(1000)),1000), m.aang);
m.ang = ((m.aang*4)*Math.asin(1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('d = sqrt( sqr(xx-q4)+sqr(yy-q8));\n' + 'xx = if(below(d,0.15),0.4+int(rand(200))/1000,xx);\n' + 'yy = if(below(d,0.15),0.3+int(rand(400))/1000,yy);\n' + 'aang = if(below(d,0.12),int(rand(1000))/1000,aang);\n' + 'ang = aang*4*asin(1);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.347,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.101,
			textured : 0.0,
			g2 : 0.825,
			tex_zoom : 0.90525,
			additive : 0.0,
			border_a : 0.07,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.419,
			r : 0.99,
			border_g : 1.0,
			rad : 0.54644,
			x : 0.5,
			y : 0.44,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = q1;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 my_uv_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (vec2(1280.0, 1024.0) * texsize.zw);\n' + '   vec4 tmpvar_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (uv + vec2(0.005, 0.0));\n' + '  tmpvar_4 = texture2D (sampler_blur2, tmpvar_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (uv - vec2(0.005, 0.0));\n' + '  tmpvar_6 = texture2D (sampler_blur2, tmpvar_7);\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = (((\n' + '    (tmpvar_4.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_6.xyz * scale2)\n' + '   + bias2)).x * tmpvar_3.x);\n' + '   vec4 tmpvar_9;\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = (uv + vec2(0.0, 0.005));\n' + '  tmpvar_9 = texture2D (sampler_blur2, tmpvar_10);\n' + '   vec4 tmpvar_11;\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = (uv - vec2(0.0, 0.005));\n' + '  tmpvar_11 = texture2D (sampler_blur2, tmpvar_12);\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = (((\n' + '    (tmpvar_9.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_11.xyz * scale2)\n' + '   + bias2)).x * tmpvar_3.y);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur2, tmpvar_5);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur2, tmpvar_7);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_blur2, tmpvar_10);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur2, tmpvar_12);\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18.x = tmpvar_8;\n' + '  tmpvar_18.y = tmpvar_13;\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = (((\n' + '    (tmpvar_14.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_15.xyz * scale2)\n' + '   + bias2)).x * tmpvar_3.x);\n' + '  tmpvar_19.y = (((\n' + '    (tmpvar_16.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_17.xyz * scale2)\n' + '   + bias2)).x * tmpvar_3.y);\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = ((uv - (tmpvar_18 * 0.006)) + (tmpvar_19 * 0.003));\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_fw_main, tmpvar_20);\n' + '  ret_2.x = tmpvar_21.x;\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur3, uv);\n' + '  ret_2.x = (ret_2.x + ((ret_2.x - \n' + '    ((tmpvar_22.xyz * scale3) + bias3)\n' + '  .x) * 0.1));\n' + '  ret_2.x = (ret_2.x + 0.004);\n' + '   vec2 tmpvar_23;\n' + '  tmpvar_23.x = tmpvar_13;\n' + '  tmpvar_23.y = -(tmpvar_8);\n' + '  my_uv_1 = (uv + ((tmpvar_23 * 0.05) * (1.2 - \n' + '    ((tmpvar_22.xyz * scale3) + bias3)\n' + '  .y)));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_fw_main, my_uv_1);\n' + '  ret_2.z = tmpvar_24.z;\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_blur1, uv);\n' + '   vec2 x_26;\n' + '  x_26 = (my_uv_1 - uv);\n' + '  ret_2.z = (ret_2.z + ((\n' + '    ((ret_2.z - ((tmpvar_25.xyz * scale1) + bias1).z) * sqrt(dot (x_26, x_26)))\n' + '   * 180.0) / sqrt(\n' + '    dot (tmpvar_3, tmpvar_3)\n' + '  )));\n' + '  ret_2.z = (ret_2.z * 0.85);\n' + '  ret_2.z = (ret_2.z + 0.008);\n' + '   vec2 tmpvar_27;\n' + '  tmpvar_27.x = -(tmpvar_13);\n' + '  tmpvar_27.y = tmpvar_8;\n' + '  my_uv_1 = (tmpvar_27 * 0.045);\n' + '   vec4 tmpvar_28;\n' + '   vec2 P_29;\n' + '  P_29 = (uv + vec2(0.01, 0.0));\n' + '  tmpvar_28 = texture2D (sampler_blur2, P_29);\n' + '   vec4 tmpvar_30;\n' + '   vec2 P_31;\n' + '  P_31 = (uv - vec2(0.01, 0.0));\n' + '  tmpvar_30 = texture2D (sampler_blur2, P_31);\n' + '   vec4 tmpvar_32;\n' + '   vec2 P_33;\n' + '  P_33 = (uv + vec2(0.0, 0.01));\n' + '  tmpvar_32 = texture2D (sampler_blur2, P_33);\n' + '   vec4 tmpvar_34;\n' + '   vec2 P_35;\n' + '  P_35 = (uv - vec2(0.0, 0.01));\n' + '  tmpvar_34 = texture2D (sampler_blur2, P_35);\n' + '   vec2 tmpvar_36;\n' + '  tmpvar_36.x = (((\n' + '    (tmpvar_28.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_30.xyz * scale2)\n' + '   + bias2)).y * tmpvar_3.x);\n' + '  tmpvar_36.y = (((\n' + '    (tmpvar_32.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_34.xyz * scale2)\n' + '   + bias2)).y * tmpvar_3.y);\n' + '  my_uv_1 = (my_uv_1 + (uv - (tmpvar_36 * 0.03)));\n' + '   vec4 tmpvar_37;\n' + '  tmpvar_37 = texture2D (sampler_fw_main, my_uv_1);\n' + '  ret_2.y = tmpvar_37.y;\n' + '   vec4 tmpvar_38;\n' + '  tmpvar_38 = texture2D (sampler_blur3, my_uv_1);\n' + '  ret_2.y = (ret_2.y + ((\n' + '    (ret_2.y - ((tmpvar_38.xyz * scale3) + bias3).y)\n' + '   * 0.1) + 0.03));\n' + '   vec4 tmpvar_39;\n' + '  tmpvar_39.w = 1.0;\n' + '  tmpvar_39.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_39;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv3_1;\n' + '   vec4 noiseVal_2;\n' + '   vec3 ret_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_noise_lq, tmpvar_4);\n' + '  noiseVal_2 = tmpvar_5;\n' + '   vec3 tmpvar_6;\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_main, uv);\n' + '  tmpvar_6 = tmpvar_7.xxx;\n' + '  ret_3 = tmpvar_6;\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_blur1, uv);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_blur3, uv);\n' + '  ret_3 = (mix (vec3((\n' + '    ((tmpvar_8.xyz * scale1) + bias1)\n' + '  .x + \n' + '    ((tmpvar_9.xyz * scale3) + bias3)\n' + '  .x)), ret_3, pow (ret_3, vec3(0.5, 0.5, 0.5))) * 2.7);\n' + '  uv3_1 = (((0.5 - uv) * (1.0 - \n' + '    (noiseVal_2.xy * 0.01)\n' + '  )) + 0.5);\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = pow (texture2D (sampler_main, uv3_1).zzz, vec3(0.5, 0.5, 0.5));\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = (ret_3 + clamp ((tmpvar_10 * \n' + '    ((1.0 - ((tmpvar_8.xyz * scale1) + bias1).x) - ret_3.x)\n' + '  ), 0.0, 1.0));\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_blur1, uv3_1);\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = (tmpvar_11 + clamp ((\n' + '    pow (((tmpvar_12.xyz * scale1) + bias1).zzz, vec3(0.5, 0.5, 0.5))\n' + '   * \n' + '    ((1.0 - ((tmpvar_8.xyz * scale1) + bias1).x) - tmpvar_11.x)\n' + '  ), 0.0, 1.0));\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = (1.0 - uv3_1);\n' + '  uv3_1 = tmpvar_14;\n' + '   vec3 tmpvar_15;\n' + '  tmpvar_15 = pow (texture2D (sampler_main, tmpvar_14).zzz, vec3(0.5, 0.5, 0.5));\n' + '   vec3 tmpvar_16;\n' + '  tmpvar_16 = (tmpvar_13 + clamp ((tmpvar_15 * \n' + '    ((1.0 - ((tmpvar_8.xyz * scale1) + bias1).x) - tmpvar_13.x)\n' + '  ), 0.0, 1.0));\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur1, tmpvar_14);\n' + '   vec3 tmpvar_18;\n' + '  tmpvar_18 = (tmpvar_7.yyy * tmpvar_7.yyy);\n' + '  ret_3 = (((\n' + '    pow ((tmpvar_16 + clamp ((\n' + '      pow (((tmpvar_17.xyz * scale1) + bias1).zzz, vec3(0.5, 0.5, 0.5))\n' + '     * \n' + '      ((1.0 - ((tmpvar_8.xyz * scale1) + bias1).x) - tmpvar_16.x)\n' + '    ), 0.0, 1.0)), vec3(3.0, 0.95, 0.6))\n' + '   * 1.25) - 0.25) - (tmpvar_18 * 3.0));\n' + '  ret_3.xy = (ret_3.xy + ((ret_3.yy - ret_3.xy) * 0.5));\n' + '  ret_3 = (ret_3 * ret_3);\n' + '  ret_3 = (ret_3 - 0.05);\n' + '  ret_3 = (ret_3 + (sqrt(\n' + '    dot (ret_3, ret_3)\n' + '  ) * 0.08));\n' + '  ret_3 = (ret_3 - (roam_sin.wzy * roam_cos.zxy));\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19.w = 1.0;\n' + '  tmpvar_19.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_19;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('db = .001;\n' + 'tdy = 0;\n' + 'avgbbeatrate = .5;\n' + 'lbass = bass;\n' + 'rawbeatb = 0;\n' + 'lbbtime = time;\n' + 'avgdb = .01;\n' + 'ph = 0;\n' + 'phase = 0;\n' + 'bool = 0;\n' + 'const = .02;\n' + 'mtime = 100+bass_att*1000;\n' + 'mtime2 = 100+treb_att*1000;\n' + 'lbbtime2 = time;'),
	'frame_eqs_str' : ('db = (bass-lbass)*fps;\n' + 'lbass = bass;\n' + 'avgdb = avgdb*.99+abs(db)*.01;\n' + 'wave_a = 0;\n' + 'rawbeatb = above(abs(db),avgdb);\n' + 'beatb = rawbeatb*above(time-lbbtime,avgbbeatrate*.5);\n' + 'ob_g = 0.3*abs(q2);\n' + 'beatbhard = beatb*(abs(db)-avgdb);\n' + 'avgbbeatrate = beatb*(avgbbeatrate*.9+(time-lbbtime)*.1)+(1-beatb)*(avgbbeatrate+(3-avgbbeatrate)*.00001);\n' + 'q3 = sin(an2);\n' + 'lbbtime = time*beatb+(1-beatb)*lbbtime;\n' + 'ph = (time-lbbtime2)*(60/avgbbeatrate)*const;\n' + 'wave_g = wave_g + 0.4*( 0.60*sin(10*q1) + 0.40*sin(10*q2) );\n' + 'zoom = 1.001;\n' + 'bool = below(phase,.98)*(.99-ph)-above(phase,.98)*(ph*.5);\n' + 'q5 = sin(an2);\n' + 'mtime2 = mtime2+(min(avgdb*.01,.25)+beatbhard*.01)*(1/fps);\n' + 'gamma = 1+abs(db*.01)+beatbhard;\n' + 'invert = above(db,avgdb*4)*beatb;\n' + 'q1 = rawbeatb;\n' + 'q2 = beatbhard;\n' + 'wrap = 1;\n' + 'decay = 1;\n' + 'q7 = mtime;\n' + 'q8 = mtime2;\n' + 'monitor = bool;\n' + 'dy = .00003*q3;\n' + 'tdy = if(1-q6,0,tdy+dy*(50/fps));\n' + 'q6 = 1-above(tdy,.06);\n' + 'warp = above(db,avgdb*4)*beatb*bass_att;'),
	'pixel_eqs_str' : ('du = (x*2-1) - q1;\n' + 'dv = (y*2-1) - q2;\n' + 'dist = sqrt(du*du+dv*dv);\n' + 'ang2 = atan2(du,dv) + time*0.15;\n' + 'mult = 0.15*sin(dist*0.05);\n' + 'dx = mult*sin(ang2*2-1.5)*aspectx;\n' + 'dy = mult*cos(ang2*2-1.5)*aspecty;'),
};

return pmap;
});
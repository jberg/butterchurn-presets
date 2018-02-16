define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 0.6,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 2.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 1.0,
		wave_scale : 0.0,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 4.90483,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 4.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.999993,
		ob_size : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999999,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.92,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.3,
		decay : 0.95,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.stime = 0;
m.q1 = 0;
m.contvol = 0;
m.q2 = 0;
m.att = 0;
m.q3 = 0;
m.dbass = 0;
m.q4 = 0;
m.q5 = 0;
m.interval = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.gamma = 0;
m.rnd = 0;
m.offx = 0;
m.offy = 0;
m.tilex = 0;
m.offz = 0;
m.lastbeat = 0;
m.tilez = 0;
m.c1 = 0;
m.pbass = 0;
m.sc = 0;
m.cheat = 0;
m.sure = 0;
m.beat = 0;
m.mytime = 0;
m.phase = 0;
m.maxdbass = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.sure = ifcond(equal(m.sure, 0), 0.6, m.sure);
m.interval = ifcond(equal(m.interval, 0), 40, m.interval);
m.lastbeat = ifcond(equal(m.lastbeat, 0), (m.frame-m.fps), m.lastbeat);
m.dbass = div((m.bass-m.pbass),m.fps);
m.beat = (above(m.dbass, (0.6*m.maxdbass))*above((m.frame-m.lastbeat), div(m.fps,3)));
m.sure = ifcond((m.beat*below(Math.abs((m.frame-(m.interval+m.lastbeat))), div(m.fps,5))), Math.min((0.095+m.sure), 1), ((m.beat*(m.sure-0.095))+(((1-m.beat)*m.sure)*0.9996)));
m.sure = Math.max(0.5, m.sure);
m.cheat = ifcond((above(m.frame, ((m.lastbeat+m.interval)+Math.floor(div(m.fps,10))))*above(m.sure, 0.91)), 1, m.cheat);
m.beat = ifcond(m.cheat, 1, m.beat);
m.sure = ifcond(m.cheat, (0.95*m.sure), m.sure);
m.maxdbass = Math.max((m.maxdbass*0.999), m.dbass);
m.maxdbass = Math.max(0.012, m.maxdbass);
m.maxdbass = Math.min(0.02, m.maxdbass);
m.interval = ifcond(m.beat, (m.frame-m.lastbeat), m.interval);
m.lastbeat = ifcond(m.beat, (m.frame-(m.cheat*Math.floor(div(m.fps,10)))), m.lastbeat);
m.cheat = 0;
m.pbass = m.bass;
m.warp = (m.bass*2);
m.zoom = 2.04;
m.rnd = equal(mod(m.frame,400), 0);
m.offy = (((1-m.rnd)*m.offy)+(m.rnd*(-3+div(rand(600),100))));
m.offz = (((1-m.rnd)*m.offz)+(m.rnd*(-80-div((0*rand(1000)),1000))));
m.sc = (((1-m.rnd)*m.sc)+(m.rnd*(1+div(rand(500),100))));
m.offx = 0;
m.offy = -3.1;
m.offz = (-300+(160*pow(m.contvol, 0.25)));
m.sc = (m.bass*2.0);
m.q2 = m.offy;
m.q3 = m.offz;
m.q4 = m.sc;
m.q5 = (3.1415*Math.cos((((0.05*m.time)+0.84)+Math.sin(((m.time*0.1)+6.43)))));
m.q6 = 0.2;
m.q5 = 0;
m.q6 = 0;
m.stime = ifcond(equal(m.stime, 0), m.time, m.stime);
m.mytime = (m.time-m.stime);
m.phase = ((0.1*m.mytime)-Math.floor((0.1*m.mytime)));
m.tilex = ifcond(below(m.phase, 0.025), (1+rand(4)), m.tilex);
m.tilez = ifcond(below(m.phase, 0.025), (1+rand(4)), m.tilez);
m.q7 = m.tilex;
m.contvol = (((((m.bass+m.mid)+m.att)*0.3333)*0.02)+(m.contvol*0.98));
m.contvol = Math.min(1, m.contvol);
m.zoom = ((m.bass*2.0)+(0.15*m.contvol));
m.darken = above(mod(m.frame,3), 0);
m.c1 = (above(m.contvol, 0.7)*Math.min((m.contvol-0.7), 0.3));
m.dx = ((m.c1*0.021)*(-10+rand(20)));
m.dy = ((m.c1*0.051)*(-10+rand(20)));
m.solarize = 0;
m.darken = (m.bass*10.0);
m.brighten = (1-m.darken);
m.invert = 0;
m.gamma = (m.gamma+(0.5*sqrt((1-div((m.frame-m.lastbeat),m.interval)))));
m.monitor = m.gamma;
m.q8 = Math.min(div((m.frame-m.lastbeat),m.interval), 1);
m.q1 = (0.05*Math.cos((((1.943*m.time)+2.43)+Math.sin(((1.83*m.time)+2.01)))));
m.sx = (1-((2*m.beat)*above(m.contvol, 0.8)));
m.sy = (1-((2*m.beat)*above(m.contvol, 0.8)));
m.invert = (m.beat*above(m.contvol, 0.8));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (m.q1*((m.beat*m.rad)-1));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.65,
			g : 0.4,
			scaling : 0.999998,
			samples : 128.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.4,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.rr = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t8 = 0;
m.ns = 0;
m.q7 = 0;
m.q8 = 0;
m.invz = 0;
m.cenx = 0;
m.ceny = 0;
m.cenz = 0;
m.angle = 0;
m.central = 0;
m.ax = 0;
m.ccx = 0;
m.ay = 0;
m.ccy = 0;
m.az = 0;
m.ccz = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['t8','sample','cenx','ceny','cenz'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = 32;
m.t2 = (0.02*m.q4);
m.t5 = (6.2831*((0.08*m.time)-Math.floor((0.08*m.time))));
m.t8 = 0;
m.t3 = ((-1+(m.q7*0.3333))+0.1667);
m.t4 = ((-1+(m.q8*0.3333))+0.1667);
m.t6 = pow(m.q1, 3);
		return m;
	},
		'point_eqs' : function(m) {
m.sample = (0.5*(0+m.sample));
m.ns = equal(mod(m.t8,m.t1), 0);
m.ccx = ((0.85*Math.sin(((5.234+(100*m.sample))+m.t5)))*Math.cos((((((200*6.2831)*m.sample)+(3.14*m.sample))+2.45)+m.t5)));
m.ccy = ((1.5*Math.sin((((100*m.sample)+0.456)+m.t5)))*Math.sin((((((100*6.2831)*m.sample)+(3.14*m.sample))+1.12)+m.t5)));
m.ccz = ((0.85*Math.sin(((3.12+(100*m.sample))+m.t5)))*Math.cos((((((300*6.2831)*m.sample)+(3.14*m.sample))+0.95)+m.t5)));
m.rr = (0.075+(0.067*Math.abs(Math.sin((6.2831*m.ccy)))));
m.ccx = ((m.ccx*(1-m.t6))+((m.t3+(m.rr*Math.cos(((m.sample*6.2831)+(6*m.time)))))*m.t6));
m.ccz = ((m.ccz*(1-m.t6))+((m.t4+(m.rr*Math.sin(((m.sample*6.2831)+(6*m.time)))))*m.t6));
m.cenx = (((1-m.ns)*m.cenx)+(m.ns*(m.q4*m.ccx)));
m.ceny = (((1-m.ns)*m.ceny)+(m.ns*(m.q2+(m.q4*Math.abs(m.ccy)))));
m.cenz = (((1-m.ns)*m.cenz)+(m.ns*(m.q3+(m.q4*m.ccz))));
m.central = equal(mod(m.t8,2), 0);
m.angle = div((6.2831*(m.t8-1)),m.t1);
m.ax = (m.cenx+((((1-m.central)*m.q4)*m.t2)*Math.cos((m.angle+(0.12*m.ceny)))));
m.ay = (m.ceny+((((1-m.central)*m.q4)*m.t2)*Math.sin((m.angle+(0.12*m.ceny)))));
m.az = m.cenz;
m.a = (((m.central*above(m.t8, 0))*0.07)*above(m.ceny, m.q2));
m.invz = div(1,(m.az+100));
m.x = (0.5+((5*m.ax)*m.invz));
m.y = (0.5+((5*m.ay)*m.invz));
m.t8 = mod((m.t8+1),m.t1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=32;\n' + 't2=.02*q4;\n' + 't5=6.2831*(.08*time-int(.08*time));\n' + 't8=0;\n' + 't3=-1+q7*.3333+.1667;\n' + 't4=-1+q8*.3333+.1667;\n' + 't6=pow( q1,3);'),
		'point_eqs_str' : ('sample=.5*(0+sample);\n' + 'ns=equal(t8%t1,0);\n' + 'ccx = .85*sin(5.234+100*sample+t5)*cos(200*6.2831*sample+ 3.14*sample+2.45+t5);\n' + 'ccy = 1.5*sin(100*sample+0.456+t5)*sin(100*6.2831*sample+ 3.14*sample+1.12+t5);\n' + 'ccz = .85*sin(3.12+100*sample+t5)*cos(300*6.2831*sample +3.14*sample+.95+t5);\n' + 'rr=.075+.067*abs(sin(6.2831*ccy));\n' + 'ccx=ccx*(1-t6)+ (t3+rr*cos(sample*6.2831+6*time))*t6;\n' + 'ccz=ccz*(1-t6)+ (t4+rr*sin(sample*6.2831+6*time))*t6;\n' + 'cenx=(1-ns)*cenx+ns*(q4*ccx);\n' + 'ceny=(1-ns)*ceny+ns*(q2+q4*abs(ccy));\n' + 'cenz=(1-ns)*cenz+ns*(q3+q4*ccz);\n' + 'central=equal(t8%2,0);\n' + 'angle=6.2831*(t8-1)/t1;\n' + 'ax=cenx+(1-central)*q4*t2*cos(angle+.12*ceny);\n' + 'ay=ceny+(1-central)*q4*t2*sin(angle+.12*ceny);\n' + 'az=cenz;\n' + 'a=central*above(t8,0)*.07*above(ceny,q2);\n' + 'invz=1/(az+100);\n' + 'x=.5+5*ax*invz;\n' + 'y=.5+5*ay*invz;\n' + 't8=(t8+1)%t1;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.65,
			g : 0.4,
			scaling : 10.0,
			samples : 128.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.4,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.rr = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t8 = 0;
m.ns = 0;
m.q7 = 0;
m.q8 = 0;
m.invz = 0;
m.cenx = 0;
m.ceny = 0;
m.cenz = 0;
m.angle = 0;
m.central = 0;
m.ax = 0;
m.ccx = 0;
m.ay = 0;
m.ccy = 0;
m.az = 0;
m.ccz = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['t8','sample','cenx','ceny','cenz'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = 32;
m.t2 = (0.02*m.q4);
m.t5 = (6.2831*((0.08*m.time)-Math.floor((0.08*m.time))));
m.t8 = 0;
m.t3 = ((-1+(m.q7*0.3333))+0.1667);
m.t4 = ((-1+(m.q8*0.3333))+0.1667);
m.t6 = pow(m.q1, 3);
		return m;
	},
		'point_eqs' : function(m) {
m.sample = (0.5*(0+m.sample));
m.ns = equal(mod(m.t8,m.t1), 0);
m.ccx = ((0.85*Math.sin(((5.234+(100*m.sample))+m.t5)))*Math.cos((((((200*6.2831)*m.sample)+(3.14*m.sample))+2.45)+m.t5)));
m.ccy = ((1.5*Math.sin((((100*m.sample)+0.456)+m.t5)))*Math.sin((((((100*6.2831)*m.sample)+(3.14*m.sample))+1.12)+m.t5)));
m.ccz = ((0.85*Math.sin(((3.12+(100*m.sample))+m.t5)))*Math.cos((((((300*6.2831)*m.sample)+(3.14*m.sample))+0.95)+m.t5)));
m.rr = (0.075+(0.067*Math.abs(Math.sin((6.2831*m.ccy)))));
m.ccx = ((m.ccx*(1-m.t6))+((m.t3+(m.rr*Math.cos(((m.sample*6.2831)+(6*m.time)))))*m.t6));
m.ccz = ((m.ccz*(1-m.t6))+((m.t4+(m.rr*Math.sin(((m.sample*6.2831)+(6*m.time)))))*m.t6));
m.cenx = (((1-m.ns)*m.cenx)+(m.ns*(m.q4*m.ccx)));
m.ceny = (((1-m.ns)*m.ceny)+(m.ns*(m.q2+(m.q4*Math.abs(m.ccy)))));
m.cenz = (((1-m.ns)*m.cenz)+(m.ns*(m.q3+(m.q4*m.ccz))));
m.central = equal(mod(m.t8,2), 0);
m.angle = div((99.2831*(m.t8-1)),m.t1);
m.ax = (m.cenx+((((1-m.central)*m.q4)*m.t2)*Math.cos((m.angle+(0.12*m.ceny)))));
m.ay = (m.ceny+((((1-m.central)*m.q4)*m.t2)*Math.sin((m.angle+(0.12*m.ceny)))));
m.az = m.cenz;
m.a = (((m.central*above(m.t8, 0))*0.07)*above(m.ceny, m.q2));
m.invz = div(1,(m.az+100));
m.x = (0.5+((5*m.ax)*m.invz));
m.y = (0.5+((5*m.ay)*m.invz));
m.t8 = mod((m.t8+1),m.t1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=32;\n' + 't2=.02*q4;\n' + 't5=6.2831*(.08*time-int(.08*time));\n' + 't8=0;\n' + 't3=-1+q7*.3333+.1667;\n' + 't4=-1+q8*.3333+.1667;\n' + 't6=pow( q1,3);'),
		'point_eqs_str' : ('sample=.5*(0+sample);\n' + 'ns=equal(t8%t1,0);\n' + 'ccx = .85*sin(5.234+100*sample+t5)*cos(200*6.2831*sample+ 3.14*sample+2.45+t5);\n' + 'ccy = 1.5*sin(100*sample+0.456+t5)*sin(100*6.2831*sample+ 3.14*sample+1.12+t5);\n' + 'ccz = .85*sin(3.12+100*sample+t5)*cos(300*6.2831*sample +3.14*sample+.95+t5);\n' + 'rr=.075+.067*abs(sin(6.2831*ccy));\n' + 'ccx=ccx*(1-t6)+ (t3+rr*cos(sample*6.2831+6*time))*t6;\n' + 'ccz=ccz*(1-t6)+ (t4+rr*sin(sample*6.2831+6*time))*t6;\n' + 'cenx=(1-ns)*cenx+ns*(q4*ccx);\n' + 'ceny=(1-ns)*ceny+ns*(q2+q4*abs(ccy));\n' + 'cenz=(1-ns)*cenz+ns*(q3+q4*ccz);\n' + 'central=equal(t8%2,0);\n' + 'angle=99.2831*(t8-1)/t1;\n' + 'ax=cenx+(1-central)*q4*t2*cos(angle+.12*ceny);\n' + 'ay=ceny+(1-central)*q4*t2*sin(angle+.12*ceny);\n' + 'az=cenz;\n' + 'a=central*above(t8,0)*.07*above(ceny,q2);\n' + 'invz=1/(az+100);\n' + 'x=.5+5*ax*invz;\n' + 'y=.5+5*ay*invz;\n' + 't8=(t8+1)%t1;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.65,
			g : 0.4,
			scaling : 0.999998,
			samples : 128.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.4,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.rr = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t8 = 0;
m.ns = 0;
m.q7 = 0;
m.q8 = 0;
m.invz = 0;
m.cenx = 0;
m.ceny = 0;
m.cenz = 0;
m.angle = 0;
m.central = 0;
m.ax = 0;
m.ccx = 0;
m.ay = 0;
m.ccy = 0;
m.az = 0;
m.ccz = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['t8','sample','cenx','ceny','cenz'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = 32;
m.t2 = (0.02*m.q4);
m.t5 = (6.2831*((0.08*m.time)-Math.floor((0.08*m.time))));
m.t8 = 0;
m.t3 = ((-1+(m.q7*0.3333))+0.1667);
m.t4 = ((-1+(m.q8*0.3333))+0.1667);
m.t6 = pow(m.q1, 3);
		return m;
	},
		'point_eqs' : function(m) {
m.sample = (0.5*(1+m.sample));
m.ns = equal(mod(m.t8,m.t1), 0);
m.ccx = ((0.85*Math.sin(((5.234+(100*m.sample))+m.t5)))*Math.cos((((((200*6.2831)*m.sample)+(3.14*m.sample))+2.45)+m.t5)));
m.ccy = ((1.5*Math.sin((((100*m.sample)+0.456)+m.t5)))*Math.sin((((((100*6.2831)*m.sample)+(3.14*m.sample))+1.12)+m.t5)));
m.ccz = ((0.85*Math.sin(((3.12+(100*m.sample))+m.t5)))*Math.cos((((((300*6.2831)*m.sample)+(3.14*m.sample))+0.95)+m.t5)));
m.rr = (0.075+(0.067*Math.abs(Math.sin((6.2831*m.ccy)))));
m.ccx = ((m.ccx*(1-m.t6))+((m.t3+(m.rr*Math.cos(((m.sample*6.2831)+(6*m.time)))))*m.t6));
m.ccz = ((m.ccz*(1-m.t6))+((m.t4+(m.rr*Math.sin(((m.sample*6.2831)+(6*m.time)))))*m.t6));
m.cenx = (((1-m.ns)*m.cenx)+(m.ns*(m.q4*m.ccx)));
m.ceny = (((1-m.ns)*m.ceny)+(m.ns*(m.q2+(m.q4*Math.abs(m.ccy)))));
m.cenz = (((1-m.ns)*m.cenz)+(m.ns*(m.q3+(m.q4*m.ccz))));
m.central = equal(mod(m.t8,2), 0);
m.angle = div((6.2831*(m.t8-1)),m.t1);
m.ax = (m.cenx+((((1-m.central)*m.q4)*m.t2)*Math.cos((m.angle+(0.12*m.ceny)))));
m.ay = (m.ceny+((((1-m.central)*m.q4)*m.t2)*Math.sin((m.angle+(0.12*m.ceny)))));
m.az = m.cenz;
m.a = (((m.central*above(m.t8, 0))*0.07)*above(m.ceny, m.q2));
m.invz = div(1,(m.az+100));
m.x = (0.5+((5*m.ax)*m.invz));
m.y = (0.5+((5*m.ay)*m.invz));
m.t8 = mod((m.t8+1),m.t1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=32;\n' + 't2=.02*q4;\n' + 't5=6.2831*(.08*time-int(.08*time));\n' + 't8=0;\n' + 't3=-1+q7*.3333+.1667;\n' + 't4=-1+q8*.3333+.1667;\n' + 't6=pow( q1,3);'),
		'point_eqs_str' : ('sample=.5*(1+sample);\n' + 'ns=equal(t8%t1,0);\n' + 'ccx = .85*sin(5.234+100*sample+t5)*cos(200*6.2831*sample+ 3.14*sample+2.45+t5);\n' + 'ccy = 1.5*sin(100*sample+0.456+t5)*sin(100*6.2831*sample+ 3.14*sample+1.12+t5);\n' + 'ccz = .85*sin(3.12+100*sample+t5)*cos(300*6.2831*sample +3.14*sample+.95+t5);\n' + 'rr=.075+.067*abs(sin(6.2831*ccy));\n' + 'ccx=ccx*(1-t6)+ (t3+rr*cos(sample*6.2831+6*time))*t6;\n' + 'ccz=ccz*(1-t6)+ (t4+rr*sin(sample*6.2831+6*time))*t6;\n' + 'cenx=(1-ns)*cenx+ns*(q4*ccx);\n' + 'ceny=(1-ns)*ceny+ns*(q2+q4*abs(ccy));\n' + 'cenz=(1-ns)*cenz+ns*(q3+q4*ccz);\n' + 'central=equal(t8%2,0);\n' + 'angle=6.2831*(t8-1)/t1;\n' + 'ax=cenx+(1-central)*q4*t2*cos(angle+.12*ceny);\n' + 'ay=ceny+(1-central)*q4*t2*sin(angle+.12*ceny);\n' + 'az=cenz;\n' + 'a=central*above(t8,0)*.07*above(ceny,q2);\n' + 'invz=1/(az+100);\n' + 'x=.5+5*ax*invz;\n' + 'y=.5+5*ay*invz;\n' + 't8=(t8+1)%t1;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.65,
			g : 0.4,
			scaling : 0.999998,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.4,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.rr = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t8 = 0;
m.ns = 0;
m.q7 = 0;
m.q8 = 0;
m.invz = 0;
m.cenx = 0;
m.ceny = 0;
m.cenz = 0;
m.angle = 0;
m.central = 0;
m.ax = 0;
m.ccx = 0;
m.ay = 0;
m.ccy = 0;
m.az = 0;
m.ccz = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['t8','sample','cenx','ceny','cenz'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = 32;
m.t2 = (0.02*m.q4);
m.t5 = (6.2831*((0.08*m.time)-Math.floor((0.08*m.time))));
m.t8 = 0;
m.t3 = ((-1+(m.q7*0.3333))+0.1667);
m.t4 = ((-1+(m.q8*0.3333))+0.1667);
m.t6 = pow(m.q1, 3);
		return m;
	},
		'point_eqs' : function(m) {
m.sample = (0.5*(1+m.sample));
m.ns = equal(mod(m.t8,m.t1), 0);
m.ccx = ((0.85*Math.sin(((5.234+(100*m.sample))+m.t5)))*Math.cos((((((200*6.2831)*m.sample)+(3.14*m.sample))+2.45)+m.t5)));
m.ccy = ((1.5*Math.sin((((100*m.sample)+0.456)+m.t5)))*Math.sin((((((100*6.2831)*m.sample)+(3.14*m.sample))+1.12)+m.t5)));
m.ccz = ((0.85*Math.sin(((3.12+(100*m.sample))+m.t5)))*Math.cos((((((300*6.2831)*m.sample)+(3.14*m.sample))+0.95)+m.t5)));
m.rr = (0.075+(0.067*Math.abs(Math.sin((6.2831*m.ccy)))));
m.ccx = ((m.ccx*(1-m.t6))+((m.t3+(m.rr*Math.cos(((m.sample*6.2831)+(6*m.time)))))*m.t6));
m.ccz = ((m.ccz*(1-m.t6))+((m.t4+(m.rr*Math.sin(((m.sample*6.2831)+(6*m.time)))))*m.t6));
m.cenx = (((1-m.ns)*m.cenx)+(m.ns*(m.q4*m.ccx)));
m.ceny = (((1-m.ns)*m.ceny)+(m.ns*(m.q2+(m.q4*Math.abs(m.ccy)))));
m.cenz = (((1-m.ns)*m.cenz)+(m.ns*(m.q3+(m.q4*m.ccz))));
m.central = equal(mod(m.t8,2), 0);
m.angle = div((6.2831*(m.t8-1)),m.t1);
m.ax = (m.cenx+((((1-m.central)*m.q4)*m.t2)*Math.cos((m.angle+(0.12*m.ceny)))));
m.ay = (m.ceny+((((1-m.central)*m.q4)*m.t2)*Math.sin((m.angle+(0.12*m.ceny)))));
m.az = m.cenz;
m.a = (((m.central*above(m.t8, 0))*0.07)*above(m.ceny, m.q2));
m.invz = div(1,(m.az+100));
m.x = (0.5+((5*m.ax)*m.invz));
m.y = (0.5+((5*m.ay)*m.invz));
m.t8 = mod((m.t8+1),m.t1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=32;\n' + 't2=.02*q4;\n' + 't5=6.2831*(.08*time-int(.08*time));\n' + 't8=0;\n' + 't3=-1+q7*.3333+.1667;\n' + 't4=-1+q8*.3333+.1667;\n' + 't6=pow( q1,3);'),
		'point_eqs_str' : ('sample=.5*(1+sample);\n' + 'ns=equal(t8%t1,0);\n' + 'ccx = .85*sin(5.234+100*sample+t5)*cos(200*6.2831*sample+ 3.14*sample+2.45+t5);\n' + 'ccy = 1.5*sin(100*sample+0.456+t5)*sin(100*6.2831*sample+ 3.14*sample+1.12+t5);\n' + 'ccz = .85*sin(3.12+100*sample+t5)*cos(300*6.2831*sample +3.14*sample+.95+t5);\n' + 'rr=.075+.067*abs(sin(6.2831*ccy));\n' + 'ccx=ccx*(1-t6)+ (t3+rr*cos(sample*6.2831+6*time))*t6;\n' + 'ccz=ccz*(1-t6)+ (t4+rr*sin(sample*6.2831+6*time))*t6;\n' + 'cenx=(1-ns)*cenx+ns*(q4*ccx);\n' + 'ceny=(1-ns)*ceny+ns*(q2+q4*abs(ccy));\n' + 'cenz=(1-ns)*cenz+ns*(q3+q4*ccz);\n' + 'central=equal(t8%2,0);\n' + 'angle=6.2831*(t8-1)/t1;\n' + 'ax=cenx+(1-central)*q4*t2*cos(angle+.12*ceny);\n' + 'ay=ceny+(1-central)*q4*t2*sin(angle+.12*ceny);\n' + 'az=cenz;\n' + 'a=central*above(t8,0)*.07*above(ceny,q2);\n' + 'invz=1/(az+100);\n' + 'x=.5+5*ax*invz;\n' + 'y=.5+5*ay*invz;\n' + 't8=(t8+1)%t1;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.8,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.1,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.8,
			border_g : 0.0,
			rad : 0.042497,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 0.0,
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
			a : 0.0,
			enabled : 0.0,
			b : 0.1,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.3,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.999998,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.12202,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 30.0,
			border_r : 0.0,
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.244862,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 30.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.h = 0;
m.sw1 = 0;
m.sw2 = 0;
m.sw3 = 0;
m.sw4 = 0;
m.sw5 = 0;
m.sw6 = 0;
m.hue = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (0.45*Math.cos((((0.6*m.time)+0.34)+Math.sin(((2.54*m.time)+1.02)))));
m.additive = below(mod(m.frame,25), 24);
m.r2 = (0.3*Math.abs(Math.cos((((m.time*0.543)+7.34)+Math.sin(((m.time*0.123)+1.75))))));
m.g2 = (0.3*Math.abs(Math.sin((((m.time*0.543)+7.34)+Math.sin(((m.time*0.123)+1.75))))));
m.b2 = (0.3*Math.abs(Math.cos((((m.time*0.543)+7.34)+Math.cos(((m.time*0.123)+1.75))))));
m.hue = (0.1*m.time);
m.h = (6*(m.hue-Math.floor(m.hue)));
m.sw1 = below(m.h, 1);
m.sw2 = ((1-m.sw1)*below(m.h, 2));
m.sw3 = (((1-m.sw1)*(1-m.sw2))*below(m.h, 3));
m.sw4 = ((((1-m.sw1)*(1-m.sw2))*(1-m.sw3))*below(m.h, 4));
m.sw6 = above(m.h, 5);
m.sw5 = (((((1-m.sw1)*(1-m.sw2))*(1-m.sw3))*(1-m.sw4))*(1-m.sw6));
m.r = (((m.sw1+(m.sw2*(2-m.h)))+(m.sw5*(m.h-4)))+m.sw6);
m.g = ((((m.sw1*m.h)+m.sw2)+m.sw3)+(m.sw4*(4-m.h)));
m.b = ((((m.sw3*(m.h-2))+m.sw4)+m.sw5)+(m.sw6*(6-m.h)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=.45*cos(.6*time+.34+sin(2.54*time+1.02));\n' + 'additive=below(frame%25,24);\n' + 'r2=.3*abs(cos(time*.543+7.34+sin(time*.123+1.75)));\n' + 'g2=.3*abs(sin(time*.543+7.34+sin(time*.123+1.75)));\n' + 'b2=.3*abs(cos(time*.543+7.34+cos(time*.123+1.75)));\n' + 'hue=.1*time;\n' + 'h=6*(hue-int(hue));\n' + 'sw1=below(h,1);\n' + ' sw2=(1-sw1)*below(h,2);\n' + ' sw3=(1-sw1)*(1-sw2)*below(h,3);\n' + ' sw4=(1-sw1)*(1-sw2)*(1-sw3)*below(h,4);\n' + 'sw6=above(h,5);\n' + ' sw5=(1-sw1)*(1-sw2)*(1-sw3)*(1-sw4)*(1-sw6);\n' + 'r=sw1+sw2*(2-h)+sw5*(h-4)+sw6;\n' + 'g=sw1*h+sw2+sw3+sw4*(4-h);\n' + 'b=sw3*(h-2)+sw4+sw5+sw6*(6-h);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.5,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 4.209734,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.670417,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 0.0,
			rad : 1.97879,
			x : 0.5,
			y : 0.5,
			ang : 3.141593,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.additive = above(mod(m.frame,10), 1);
m.r2 = (1-(0.3*Math.abs(Math.cos((((m.time*0.543)+7.34)+Math.sin(((m.time*0.123)+1.75)))))));
m.g2 = (1-(0.3*Math.abs(Math.sin((((m.time*0.543)+7.34)+Math.sin(((m.time*0.123)+1.75)))))));
m.b2 = (1-(0.3*Math.abs(Math.sin((((m.time*0.543)+7.34)+Math.cos(((m.time*0.123)+1.75)))))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('additive=above(frame%10,1);\n' + 'r2=1-.3*abs(cos(time*.543+7.34+sin(time*.123+1.75)));\n' + 'g2=1-.3*abs(sin(time*.543+7.34+sin(time*.123+1.75)));\n' + 'b2=1-.3*abs(sin(time*.543+7.34+cos(time*.123+1.75)));'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('sure=if(equal(sure,0),.6,sure);\n' + 'interval=if(equal(interval,0),40,interval);\n' + 'lastbeat=if(equal(lastbeat,0),frame-FPS,lastbeat);\n' + 'dbass=(bass-pbass)/FPS;\n' + 'beat=above(dbass,.6*maxdbass)*above(frame-lastbeat,FPS/3);\n' + 'sure=if(beat*below(abs(frame-(interval+lastbeat)),FPS/5),min(.095+sure,1),beat*(sure-.095)+(1-beat)*sure*.9996);\n' + 'sure=max(.5,sure);\n' + 'cheat=if(above(frame,lastbeat+interval+ int(FPS/10))*above(sure,.91),1,cheat);\n' + 'beat=if(cheat,1,beat);\n' + 'sure=if(cheat,.95*sure,sure);\n' + 'maxdbass=max(maxdbass*.999,dbass);\n' + 'maxdbass=max(.012,maxdbass);\n' + 'maxdbass=min(.02,maxdbass);\n' + 'interval=if(beat, frame-lastbeat,interval);\n' + 'lastbeat=if(beat,frame-cheat*int(FPS/10),lastbeat);\n' + 'cheat=0;\n' + 'pbass=bass;\n' + 'warp=bass*2;\n' + 'zoom=2.04;\n' + 'rnd=equal(frame%400,0);\n' + 'offy=(1-rnd)*offy+rnd*(-3+rand(600)/100);\n' + 'offz=(1-rnd)*offz+rnd*(-80-0*rand(1000)/1000);\n' + 'sc=(1-rnd)*sc+rnd*(1+rand(500)/100);\n' + 'offx=0;\n' + 'offy=-3.1;\n' + 'offz=-300+160*pow(contVol,.25);\n' + 'sc=bass*2.0;\n' + 'q2=offy;\n' + 'q3=offz;\n' + 'q4=sc;\n' + 'q5=3.1415*cos(.05*time+.84+sin(time*.1+6.43));\n' + 'q6=.2;\n' + 'q5=0;\n' + 'q6=0;\n' + 'stime=if(equal(stime,0),time,stime );\n' + 'mytime=time-stime;\n' + 'phase = .1*mytime - int(.1*mytime);\n' + 'tilex=if(below(phase,.025),1 + rand(4),tilex );\n' + 'tilez=if(below(phase,.025),1 + rand(4),tilez );\n' + 'q7=tilex;\n' + 'contVol=((bass+mid+att)*.3333)*.02+contVol*.98;\n' + 'contVol=min(1,contVol);\n' + 'zoom=(bass*2.0)+.15*contVol;\n' + 'darken=above(frame%3,0);\n' + 'c1=above(contvol,.7)*min(contvol-.7,.3);\n' + 'dx=c1*.021*(-10+rand(20));\n' + 'dy=c1*.051*(-10+rand(20));\n' + 'solarize=0;\n' + 'darken=bass*10.0;\n' + 'brighten=1-darken;\n' + 'invert=0;\n' + 'gamma=gamma+.5*sqrt(1-(frame-lastbeat)/interval);\n' + 'monitor=gamma;\n' + 'q8=min((frame-lastbeat)/interval,1);\n' + 'q1=.05*cos(1.943*time+2.43+sin(1.83*time+2.01) );\n' + 'sx=1-2*beat*above(contVol,.8);\n' + 'sy=1-2*beat*above(contVol,.8);\n' + 'invert=beat*above(contVol,.8);'),
	'pixel_eqs_str' : ('rot = q1*(beat*rad-1);'),
};

return pmap;
});
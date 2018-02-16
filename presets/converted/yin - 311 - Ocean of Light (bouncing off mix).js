define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.35,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.411715,
		echo_alpha : 0.5,
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
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.0,
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
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.18,
		decay : 0.98,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.stime = 0;
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.rnd = 0;
m.offx = 0;
m.offy = 0;
m.tilex = 0;
m.offz = 0;
m.tilez = 0;
m.sc = 0;
m.mytime = 0;
m.phase = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.zoom = 1;
m.rnd = equal(mod(m.frame,400), 0);
m.offy = (((1-m.rnd)*m.offy)+(m.rnd*(-3+div(rand(600),100))));
m.offz = (((1-m.rnd)*m.offz)+(m.rnd*(-80-div((0*rand(1000)),1000))));
m.sc = (((1-m.rnd)*m.sc)+(m.rnd*(1+div(rand(500),100))));
m.offx = 0;
m.offy = -3.1;
m.offz = -60;
m.sc = 4;
m.q2 = m.offy;
m.q3 = m.offz;
m.q4 = m.sc;
m.q5 = (3.1415*Math.cos((((0.05*m.time)+0.84)+Math.sin(((m.time*0.1)+6.43)))));
m.q6 = (0.25+(0.2*Math.sin((((m.time*0.15)+2.43)+Math.cos(((m.time*0.09)+1.87))))));
m.stime = ifcond(equal(m.stime, 0), m.time, m.stime);
m.mytime = (m.time-m.stime);
m.phase = ((0.1*m.mytime)-Math.floor((0.1*m.mytime)));
m.tilex = ifcond(below(m.phase, 0.025), (1+rand(4)), m.tilex);
m.tilez = ifcond(below(m.phase, 0.025), (1+rand(4)), m.tilez);
m.q7 = m.tilex;
m.q8 = m.tilez;
m.q1 = Math.abs(Math.sin((3.1415*m.phase)));
m.echo_zoom = 1.007;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.9,
			g : 0.6,
			scaling : 0.999998,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.5,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.sw = 0;
m.q6 = 0;
m.dist = 0;
m.q7 = 0;
m.q8 = 0;
m.ox = 0;
m.invz = 0;
m.tcx = 0;
m.oy = 0;
m.oz = 0;
m.tcz = 0;
m.coef = 0;
m.ax = 0;
m.ay = 0;
m.az = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['a'];
			return m;
		},
		'frame_eqs' : function(m) {
m.a = 0.3;
m.t1 = Math.sin(m.q5);
m.t2 = Math.cos(m.q5);
m.t3 = Math.sin(m.q6);
m.t4 = Math.cos(m.q6);
		return m;
	},
		'point_eqs' : function(m) {
m.ax = (m.q4*(-1+(2*m.sample)));
m.ay = m.q2;
m.coef = sqrt(Math.sin((3.1415*m.sample)));
m.az = (m.q3+((m.q4*(rand(10000)*0.0001))*m.coef));
m.ay = (m.ay+((0.03*m.q4)*Math.sin((((((m.q4*0.5)*m.ax)+((m.q4*0.75)*(m.az-m.q3)))+(2*m.time))+Math.sin(((((m.q4*1.25)*m.ax)+((m.q4*0.75)*(m.az-m.q3)))+(3*m.time)))))));
m.dist = sqrt((sqr(m.ax)+sqr((m.az-m.q3))));
m.ay = (m.ay+(0.05*Math.sin((((m.q4*2.5)*m.dist)-(3.1415*m.time)))));
m.tcx = (m.q4*(-1+(0.3333*(m.q7+0.5))));
m.tcz = (m.q3+(m.q4*(-1+(0.3333*(m.q8+0.5)))));
m.dist = sqrt((sqr((m.ax-m.tcx))+sqr((m.az-m.tcz))));
m.sw = (below(m.dist, (0.5*m.q4))*pow((1-div(m.dist,(0.5*m.q4))), 8));
m.ay = (m.ay-((m.q4*m.sw)*pow(m.q1, 3)));
m.a = (m.a+sqrt((m.q1*m.sw)));
m.ox = ((m.ax*m.t2)-((m.az-m.q3)*m.t1));
m.oy = m.ay;
m.oz = ((m.q3+(m.ax*m.t1))+((m.az-m.q3)*m.t2));
m.az = ((m.q3+((m.oz-m.q3)*m.t4))-((m.oy-m.q2)*m.t3));
m.ay = ((m.q2+((m.oz-m.q3)*m.t3))+((m.oy-m.q2)*m.t4));
m.ax = m.ox;
m.invz = div(1,(m.az+100));
m.x = (0.5+((5*m.ax)*m.invz));
m.y = (0.5+((5*m.ay)*m.invz));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a=.3;\n' + 't1=sin(q5);\n' + 't2=cos(q5);\n' + 't3=sin(q6);\n' + 't4=cos(q6);'),
		'point_eqs_str' : ('ax=q4*(-1+2*sample);\n' + 'ay=q2;\n' + 'coef=sqrt(sin(3.1415*sample));\n' + 'az=q3+q4*(rand(10000)*.0001)*coef;\n' + 'ay=ay+.03*q4*sin(q4*.5*ax+q4*.75*(az-q3)+2*time+sin(q4*1.25*ax+q4*.75*(az-q3)+3*time));\n' + 'dist=sqrt( sqr(ax)+sqr(az-q3) );\n' + 'ay=ay+.05*sin(q4*2.5*dist-3.1415*time);\n' + 'tcx=q4*(-1+.3333*(q7+.5));\n' + 'tcz=q3+q4*(-1+.3333*(q8+.5));\n' + 'dist=sqrt( sqr(ax-tcx)+sqr(az-tcz) );\n' + 'sw=below(dist,.5*q4)*pow( (1-dist/(.5*q4)),8);\n' + 'ay=ay-q4*sw*pow(q1,3);\n' + 'a=a+sqrt(q1*sw);\n' + 'ox = ax*t2 - (az-q3)*t1;\n' + 'oy=ay;\n' + 'oz = q3 + ax*t1 + (az-q3)*t2;\n' + 'az=q3+(oz-q3)*t4-(oy-q2)*t3;\n' + 'ay=q2+(oz-q3)*t3+(oy-q2)*t4;\n' + 'ax=ox;\n' + 'invz=1/(az+100);\n' + 'x=.5+5*ax*invz;\n' + 'y=.5+5*ay*invz;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.9,
			g : 0.6,
			scaling : 0.999998,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.5,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.sw = 0;
m.q6 = 0;
m.dist = 0;
m.q7 = 0;
m.q8 = 0;
m.ox = 0;
m.invz = 0;
m.tcx = 0;
m.oy = 0;
m.oz = 0;
m.tcz = 0;
m.coef = 0;
m.ax = 0;
m.ay = 0;
m.az = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['a'];
			return m;
		},
		'frame_eqs' : function(m) {
m.a = 0.3;
m.t1 = Math.sin(m.q5);
m.t2 = Math.cos(m.q5);
m.t3 = Math.sin(m.q6);
m.t4 = Math.cos(m.q6);
		return m;
	},
		'point_eqs' : function(m) {
m.ax = (m.q4*(-1+(2*m.sample)));
m.ay = m.q2;
m.coef = sqrt(Math.sin((3.1415*m.sample)));
m.az = (m.q3+((m.q4*(-rand(10000)*0.0001))*m.coef));
m.ay = (m.ay+((0.03*m.q4)*Math.sin((((((m.q4*0.5)*m.ax)+((m.q4*0.75)*(m.az-m.q3)))+(2*m.time))+Math.sin(((((m.q4*1.25)*m.ax)+((m.q4*0.75)*(m.az-m.q3)))+(3*m.time)))))));
m.dist = sqrt((sqr(m.ax)+sqr((m.az-m.q3))));
m.ay = (m.ay+(0.05*Math.sin((((m.q4*2.5)*m.dist)-(3.1415*m.time)))));
m.tcx = (m.q4*(-1+(0.3333*(m.q7+0.5))));
m.tcz = (m.q3+(m.q4*(-1+(0.3333*(m.q8+0.5)))));
m.dist = sqrt((sqr((m.ax-m.tcx))+sqr((m.az-m.tcz))));
m.sw = (below(m.dist, (0.5*m.q4))*pow((1-div(m.dist,(0.5*m.q4))), 8));
m.ay = (m.ay-((m.q4*m.sw)*pow(m.q1, 3)));
m.a = (m.a+sqrt((m.q1*m.sw)));
m.ox = ((m.ax*m.t2)-((m.az-m.q3)*m.t1));
m.oy = m.ay;
m.oz = ((m.q3+(m.ax*m.t1))+((m.az-m.q3)*m.t2));
m.az = ((m.q3+((m.oz-m.q3)*m.t4))-((m.oy-m.q2)*m.t3));
m.ay = ((m.q2+((m.oz-m.q3)*m.t3))+((m.oy-m.q2)*m.t4));
m.ax = m.ox;
m.invz = div(1,(m.az+100));
m.x = (0.5+((5*m.ax)*m.invz));
m.y = (0.5+((5*m.ay)*m.invz));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a=.3;\n' + 't1=sin(q5);\n' + 't2=cos(q5);\n' + 't3=sin(q6);\n' + 't4=cos(q6);'),
		'point_eqs_str' : ('ax=q4*(-1+2*sample);\n' + 'ay=q2;\n' + 'coef=sqrt(sin(3.1415*sample));\n' + 'az=q3+q4*(-rand(10000)*.0001)*coef;\n' + 'ay=ay+.03*q4*sin(q4*.5*ax+q4*.75*(az-q3)+2*time+sin(q4*1.25*ax+q4*.75*(az-q3)+3*time));\n' + 'dist=sqrt( sqr(ax)+sqr(az-q3) );\n' + 'ay=ay+.05*sin(q4*2.5*dist-3.1415*time);\n' + 'tcx=q4*(-1+.3333*(q7+.5));\n' + 'tcz=q3+q4*(-1+.3333*(q8+.5));\n' + 'dist=sqrt( sqr(ax-tcx)+sqr(az-tcz) );\n' + 'sw=below(dist,.5*q4)*pow( (1-dist/(.5*q4)),8);\n' + 'ay=ay-q4*sw*pow(q1,3);\n' + 'a=a+sqrt(q1*sw);\n' + 'ox = ax*t2 - (az-q3)*t1;\n' + 'oy=ay;\n' + 'oz = q3 + ax*t1 + (az-q3)*t2;\n' + 'az=q3+(oz-q3)*t4-(oy-q2)*t3;\n' + 'ay=q2+(oz-q3)*t3+(oy-q2)*t4;\n' + 'ax=ox;\n' + 'invz=1/(az+100);\n' + 'x=.5+5*ax*invz;\n' + 'y=.5+5*ay*invz;'),

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
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.ns = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.ox = 0;
m.invz = 0;
m.oy = 0;
m.oz = 0;
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
m.t5 = (6.2831*((0.08*m.time)-Math.floor((0.08*m.time))));
m.t8 = 0;
m.t3 = ((-1+(m.q7*0.3333))+0.1667);
m.t4 = ((-1+(m.q8*0.3333))+0.1667);
m.t6 = pow(m.q1, 3);
m.t2 = Math.sin(m.q5);
m.t7 = Math.cos(m.q5);
		return m;
	},
		'point_eqs' : function(m) {
m.sample = (0.5*m.sample);
m.ns = equal(mod(m.t8,m.t1), 0);
m.ccx = ((0.85*Math.sin(((5.234+(100*m.sample))+m.t5)))*Math.cos((((((200*6.2831)*m.sample)+(3.14*m.sample))+2.45)+m.t5)));
m.ccy = ((1.5*Math.sin((((100*m.sample)+0.456)+m.t5)))*Math.sin((((((100*6.2831)*m.sample)+(3.14*m.sample))+1.12)+m.t5)));
m.ccz = ((0.85*Math.sin(((3.12+(100*m.sample))+m.t5)))*Math.cos((((((300*6.2831)*m.sample)+(3.14*m.sample))+0.95)+m.t5)));
m.rr = (0.075+(0.067*Math.abs(Math.sin((6.2831*m.ccy)))));
m.ccx = ((m.ccx*(1-m.t6))+((m.t3+(m.rr*Math.cos(((m.sample*6.2831)+(4*m.time)))))*m.t6));
m.ccz = ((m.ccz*(1-m.t6))+((m.t4+(m.rr*Math.sin(((m.sample*6.2831)+(4*m.time)))))*m.t6));
m.cenx = (((1-m.ns)*m.cenx)+(m.ns*(m.q4*m.ccx)));
m.ceny = (((1-m.ns)*m.ceny)+(m.ns*(m.q2+(m.q4*Math.abs(m.ccy)))));
m.cenz = (((1-m.ns)*m.cenz)+(m.ns*(m.q3+(m.q4*m.ccz))));
m.central = equal(mod(m.t8,2), 0);
m.angle = div((6.2831*(m.t8-1)),m.t1);
m.ax = (m.cenx+(((((1-m.central)*m.q4)*0.02)*m.q4)*Math.cos((m.angle+(0.12*m.ceny)))));
m.ay = (m.ceny+(((((1-m.central)*m.q4)*0.02)*m.q4)*Math.sin((m.angle+(0.12*m.ceny)))));
m.az = m.cenz;
m.a = ((m.central*above(m.t8, 0))*0.07);
m.ox = ((m.cenx+((m.ax-m.cenx)*m.t7))+((m.az-m.cenz)*m.t2));
m.oy = m.ay;
m.oz = ((m.cenz+((m.ax-m.cenx)*-m.t2))+((m.az-m.cenz)*m.t7));
m.ax = ((m.ox*m.t7)-((m.oz-m.q3)*m.t2));
m.ay = m.oy;
m.az = ((m.q3+(m.ox*m.t2))+((m.oz-m.q3)*m.t7));
m.oz = ((m.q3+((m.az-m.q3)*Math.cos(m.q6)))-((m.ay-m.q2)*Math.sin(m.q6)));
m.oy = ((m.q2+((m.az-m.q3)*Math.sin(m.q6)))+((m.ay-m.q2)*Math.cos(m.q6)));
m.ox = m.ax;
m.invz = div(1,(m.oz+100));
m.x = (0.5+((5*m.ox)*m.invz));
m.y = (0.5+((5*m.oy)*m.invz));
m.t8 = mod((m.t8+1),m.t1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=32;\n' + 't5=6.2831*(.08*time-int(.08*time));\n' + 't8=0;\n' + 't3=-1+q7*.3333+.1667;\n' + 't4=-1+q8*.3333+.1667;\n' + 't6=pow( q1,3);\n' + 't2=sin(q5);\n' + 't7=cos(q5);'),
		'point_eqs_str' : ('sample=.5*sample;\n' + 'ns=equal(t8%t1,0);\n' + 'ccx = .85*sin(5.234+100*sample+t5)*cos(200*6.2831*sample+ 3.14*sample+2.45+t5);\n' + 'ccy = 1.5*sin(100*sample+0.456+t5)*sin(100*6.2831*sample+ 3.14*sample+1.12+t5);\n' + 'ccz = .85*sin(3.12+100*sample+t5)*cos(300*6.2831*sample +3.14*sample+.95+t5);\n' + 'rr=.075+.067*abs(sin(6.2831*ccy));\n' + 'ccx=ccx*(1-t6)+ (t3+rr*cos(sample*6.2831+4*time))*t6;\n' + 'ccz=ccz*(1-t6)+ (t4+rr*sin(sample*6.2831+4*time))*t6;\n' + 'cenx=(1-ns)*cenx+ns*(q4*ccx);\n' + 'ceny=(1-ns)*ceny+ns*(q2+q4*abs(ccy));\n' + 'cenz=(1-ns)*cenz+ns*(q3+q4*ccz);\n' + 'central=equal(t8%2,0);\n' + 'angle=6.2831*(t8-1)/t1;\n' + 'ax=cenx+(1-central)*q4*.02*q4*cos(angle+.12*ceny);\n' + 'ay=ceny+(1-central)*q4*.02*q4*sin(angle+.12*ceny);\n' + 'az=cenz;\n' + 'a=central*above(t8,0)*.07;\n' + 'ox = cenx+(ax-cenx)*t7+(az-cenz)*t2;\n' + 'oy=ay;\n' + 'oz = cenz+(ax-cenx)*-t2+(az-cenz)*t7;\n' + 'ax=ox*t7-(oz-q3)*t2;\n' + 'ay=oy;\n' + 'az=q3+ox*t2+(oz-q3)*t7;\n' + 'oz=q3+(az-q3)*cos(q6)-(ay-q2)*sin(q6);\n' + 'oy=q2+(az-q3)*sin(q6)+(ay-q2)*cos(q6);\n' + 'ox=ax;\n' + 'invz=1/(oz+100);\n' + 'x=.5+5*ox*invz;\n' + 'y=.5+5*oy*invz;\n' + 't8=(t8+1)%t1;'),

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
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.ns = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.ox = 0;
m.invz = 0;
m.oy = 0;
m.oz = 0;
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
m.t5 = (6.2831*((0.08*m.time)-Math.floor((0.08*m.time))));
m.t8 = 0;
m.t3 = ((-1+(m.q7*0.3333))+0.1667);
m.t4 = ((-1+(m.q8*0.3333))+0.1667);
m.t6 = pow(m.q1, 3);
m.t2 = Math.sin(m.q5);
m.t7 = Math.cos(m.q5);
		return m;
	},
		'point_eqs' : function(m) {
m.sample = (0.5*(1+m.sample));
m.ns = equal(mod(m.t8,m.t1), 0);
m.ccx = ((0.85*Math.sin(((5.234+(100*m.sample))+m.t5)))*Math.cos((((((200*6.2831)*m.sample)+(3.14*m.sample))+2.45)+m.t5)));
m.ccy = ((1.5*Math.sin((((100*m.sample)+0.456)+m.t5)))*Math.sin((((((100*6.2831)*m.sample)+(3.14*m.sample))+1.12)+m.t5)));
m.ccz = ((0.85*Math.sin(((3.12+(100*m.sample))+m.t5)))*Math.cos((((((300*6.2831)*m.sample)+(3.14*m.sample))+0.95)+m.t5)));
m.rr = (0.075+(0.067*Math.abs(Math.sin((6.2831*m.ccy)))));
m.ccx = ((m.ccx*(1-m.t6))+((m.t3+(m.rr*Math.cos(((m.sample*6.2831)+(4*m.time)))))*m.t6));
m.ccz = ((m.ccz*(1-m.t6))+((m.t4+(m.rr*Math.sin(((m.sample*6.2831)+(4*m.time)))))*m.t6));
m.cenx = (((1-m.ns)*m.cenx)+(m.ns*(m.q4*m.ccx)));
m.ceny = (((1-m.ns)*m.ceny)+(m.ns*(m.q2+(m.q4*Math.abs(m.ccy)))));
m.cenz = (((1-m.ns)*m.cenz)+(m.ns*(m.q3+(m.q4*m.ccz))));
m.central = equal(mod(m.t8,2), 0);
m.angle = div((6.2831*(m.t8-1)),m.t1);
m.ax = (m.cenx+(((((1-m.central)*m.q4)*0.02)*m.q4)*Math.cos((m.angle+(0.12*m.ceny)))));
m.ay = (m.ceny+(((((1-m.central)*m.q4)*0.02)*m.q4)*Math.sin((m.angle+(0.12*m.ceny)))));
m.az = m.cenz;
m.a = ((m.central*above(m.t8, 0))*0.07);
m.ox = ((m.cenx+((m.ax-m.cenx)*m.t7))+((m.az-m.cenz)*m.t2));
m.oy = m.ay;
m.oz = ((m.cenz+((m.ax-m.cenx)*-m.t2))+((m.az-m.cenz)*m.t7));
m.ax = ((m.ox*m.t7)-((m.oz-m.q3)*m.t2));
m.ay = m.oy;
m.az = ((m.q3+(m.ox*m.t2))+((m.oz-m.q3)*m.t7));
m.oz = ((m.q3+((m.az-m.q3)*Math.cos(m.q6)))-((m.ay-m.q2)*Math.sin(m.q6)));
m.oy = ((m.q2+((m.az-m.q3)*Math.sin(m.q6)))+((m.ay-m.q2)*Math.cos(m.q6)));
m.ox = m.ax;
m.invz = div(1,(m.oz+100));
m.x = (0.5+((5*m.ox)*m.invz));
m.y = (0.5+((5*m.oy)*m.invz));
m.t8 = mod((m.t8+1),m.t1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=32;\n' + 't5=6.2831*(.08*time-int(.08*time));\n' + 't8=0;\n' + 't3=-1+q7*.3333+.1667;\n' + 't4=-1+q8*.3333+.1667;\n' + 't6=pow( q1,3);\n' + 't2=sin(q5);\n' + 't7=cos(q5);'),
		'point_eqs_str' : ('sample=.5*(1+sample);\n' + 'ns=equal(t8%t1,0);\n' + 'ccx = .85*sin(5.234+100*sample+t5)*cos(200*6.2831*sample+ 3.14*sample+2.45+t5);\n' + 'ccy = 1.5*sin(100*sample+0.456+t5)*sin(100*6.2831*sample+ 3.14*sample+1.12+t5);\n' + 'ccz = .85*sin(3.12+100*sample+t5)*cos(300*6.2831*sample +3.14*sample+.95+t5);\n' + 'rr=.075+.067*abs(sin(6.2831*ccy));\n' + 'ccx=ccx*(1-t6)+ (t3+rr*cos(sample*6.2831+4*time))*t6;\n' + 'ccz=ccz*(1-t6)+ (t4+rr*sin(sample*6.2831+4*time))*t6;\n' + 'cenx=(1-ns)*cenx+ns*(q4*ccx);\n' + 'ceny=(1-ns)*ceny+ns*(q2+q4*abs(ccy));\n' + 'cenz=(1-ns)*cenz+ns*(q3+q4*ccz);\n' + 'central=equal(t8%2,0);\n' + 'angle=6.2831*(t8-1)/t1;\n' + 'ax=cenx+(1-central)*q4*.02*q4*cos(angle+.12*ceny);\n' + 'ay=ceny+(1-central)*q4*.02*q4*sin(angle+.12*ceny);\n' + 'az=cenz;\n' + 'a=central*above(t8,0)*.07;\n' + 'ox = cenx+(ax-cenx)*t7+(az-cenz)*t2;\n' + 'oy=ay;\n' + 'oz = cenz+(ax-cenx)*-t2+(az-cenz)*t7;\n' + 'ax=ox*t7-(oz-q3)*t2;\n' + 'ay=oy;\n' + 'az=q3+ox*t2+(oz-q3)*t7;\n' + 'oz=q3+(az-q3)*cos(q6)-(ay-q2)*sin(q6);\n' + 'oy=q2+(az-q3)*sin(q6)+(ay-q2)*cos(q6);\n' + 'ox=ax;\n' + 'invz=1/(oz+100);\n' + 'x=.5+5*ox*invz;\n' + 'y=.5+5*oy*invz;\n' + 't8=(t8+1)%t1;'),

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
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.8,
			border_g : 1.0,
			rad : 0.042497,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 30.0,
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
			b : 0.1,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.3,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.999998,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.042077,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 30.0,
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
			r2 : 1.0,
			a : 0.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.344203,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 1.978841,
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
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'zoom=1;\n' + 'rnd=equal(frame%400,0);\n' + 'offy=(1-rnd)*offy+rnd*(-3+rand(600)/100);\n' + 'offz=(1-rnd)*offz+rnd*(-80-0*rand(1000)/1000);\n' + 'sc=(1-rnd)*sc+rnd*(1+rand(500)/100);\n' + 'offx=0;\n' + 'offy=-3.1;\n' + 'offz=-60;\n' + 'sc=4;\n' + 'q2=offy;\n' + 'q3=offz;\n' + 'q4=sc;\n' + 'q5=3.1415*cos(.05*time+.84+sin(time*.1+6.43));\n' + 'q6=.25+.2*sin(time*.15+2.43+cos(time*.09+1.87));\n' + 'stime=if(equal(stime,0),time,stime );\n' + 'mytime=time-stime;\n' + 'phase = .1*mytime - int(.1*mytime);\n' + 'tilex=if(below(phase,.025),1 + rand(4),tilex );\n' + 'tilez=if(below(phase,.025),1 + rand(4),tilez );\n' + 'q7=tilex;\n' + 'q8=tilez;\n' + 'q1=abs(sin(3.1415*phase));\n' + 'echo_zoom=1.007;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
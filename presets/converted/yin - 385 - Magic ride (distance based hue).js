define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.411715,
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
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.999993,
		ob_size : 0.005,
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
		decay : 0.898999,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 3.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.contvol = 0;
m.dt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.81;
m.dt = div(1,m.fps);
m.contvol = Math.max(0.4, (((1-(0.6*m.dt))*m.contvol)+((0.2*m.dt)*((m.bass+m.mid)+m.treb))));
m.monitor = (30*6.2831);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.001827,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.vw = 0;
m.q3 = 0;
m.t6 = 0;
m.vx = 0;
m.c = 0;
m.q4 = 0;
m.t7 = 0;
m.vy = 0;
m.q5 = 0;
m.t8 = 0;
m.invfdmag = 0;
m.q6 = 0;
m.q7 = 0;
m.length = 0;
m.speed = 0;
m.sdx = 0;
m.q8 = 0;
m.invsnmag = 0;
m.sdy = 0;
m.h = 0;
m.sdz = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.my = 0;
m.mz = 0;
m.sw1 = 0;
m.sw2 = 0;
m.sw3 = 0;
m.fnx = 0;
m.sw4 = 0;
m.crosssectionrad = 0;
m.fny = 0;
m.sw5 = 0;
m.fnz = 0;
m.angl = 0;
m.sw6 = 0;
m.t = 0;
m.hue = 0;
m.qq9 = 0;
m.fdx = 0;
m.fdy = 0;
m.fdz = 0;
m.snx = 0;
m.t1 = 0;
m.sny = 0;
m.t2 = 0;
m.snz = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.speed = 0.015;
m.length = 0.1;
m.crosssectionrad = 0.1;
m.t1 = ((m.speed*m.time)-Math.floor((m.speed*m.time)));
m.t2 = m.length;
m.t3 = m.crosssectionrad;
m.t = (m.t1*6.2831);
m.t6 = (Math.cos(m.t)*Math.sin(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t)))))));
m.t7 = (Math.cos((1.9+(0.7*m.t)))*Math.sin(m.t));
m.t8 = (Math.cos((1.54+(2*m.t)))*Math.sin(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t)))))));
m.q1 = ((((2*Math.cos(m.t))*(1+(3.1415*Math.cos((2.98+(2*m.t))))))*Math.cos(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t)))))))-(Math.sin(m.t)*Math.sin(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t))))))));
m.q2 = ((Math.cos((1.9+(0.7*m.t)))*Math.cos(m.t))-((0.7*Math.sin((1.9+(0.7*m.t))))*Math.sin(m.t)));
m.q3 = (((Math.cos((1.54+(2*m.t)))*Math.cos(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t)))))))*(2-(6.2831*Math.sin((1.01+(2*m.t))))))-((2*Math.sin((1.54+(2*m.t))))*Math.sin(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t))))))));
m.invfdmag = div(1,sqrt((((m.q1*m.q1)+(m.q2*m.q2))+(m.q3*m.q3))));
m.sdx = (((-4*Math.cos(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t)))))))*(Math.sin(m.t)+(3.1415*Math.sin((2.98+(3*m.t))))))-((Math.cos(m.t)*((5+(25.132*Math.cos((2.98+(2*m.t)))))+(39.4761*sqr(Math.cos((2.98+(2*m.t)))))))*Math.sin(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t))))))));
m.sdy = (((-1.4*Math.cos(m.t))*Math.sin((1.9+(0.7*m.t))))-((1.49*Math.cos((1.9+(0.7*m.t))))*Math.sin(m.t)));
m.sdz = (((((-12.566*Math.cos((1.01+(2*m.t))))*Math.cos((1.54+(2*m.t))))*Math.cos(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t)))))))+(((8*Math.cos(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t)))))))*(-1+(3.1415*Math.sin((1.01+(2*m.t))))))*Math.sin((1.54+(2*m.t)))))-(((4*Math.cos((1.54+(2*m.t))))*((2-(6.2831*Math.sin((1.01+(2*m.t)))))+(9.869*sqr(Math.sin((1.01+(2*m.t)))))))*Math.sin(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t))))))));
m.q4 = ((m.q2*m.sdz)-(m.sdy*m.q3));
m.q5 = ((m.q3*m.sdx)-(m.q1*m.sdz));
m.q6 = ((m.q1*m.sdy)-(m.q2*m.sdx));
m.invsnmag = div(1,sqrt((((m.q4*m.q4)+(m.q5*m.q5))+(m.q6*m.q6))));
m.q4 = (m.q4*m.invsnmag);
m.q5 = (m.q5*m.invsnmag);
m.q6 = (m.q6*m.invsnmag);
m.q1 = (m.q1*m.invfdmag);
m.q2 = (m.q2*m.invfdmag);
m.q3 = (m.q3*m.invfdmag);
m.q7 = ((m.q5*m.q3)-(m.q2*m.q6));
m.q8 = ((m.q6*m.q1)-(m.q4*m.q3));
		return m;
	},
		'point_eqs' : function(m) {
m.t = (m.t1+((0+sqr(m.sample))*m.t2));
m.t = ifcond(above(m.t, 1), (m.t-1), m.t);
m.t = (m.t*6.2831);
m.mx = (Math.cos(m.t)*Math.sin(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t)))))));
m.my = (Math.cos((1.9+(0.7*m.t)))*Math.sin(m.t));
m.mz = (Math.cos((1.54+(2*m.t)))*Math.sin(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t)))))));
m.fdx = ((((2*Math.cos(m.t))*(1+(3.1415*Math.cos((2.98+(2*m.t))))))*Math.cos(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t)))))))-(Math.sin(m.t)*Math.sin(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t))))))));
m.fdy = ((Math.cos((1.9+(0.7*m.t)))*Math.cos(m.t))-((0.7*Math.sin((1.9+(0.7*m.t))))*Math.sin(m.t)));
m.fdz = (((Math.cos((1.54+(2*m.t)))*Math.cos(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t)))))))*(2-(6.2831*Math.sin((1.01+(2*m.t))))))-((2*Math.sin((1.54+(2*m.t))))*Math.sin(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t))))))));
m.invfdmag = div(1,sqrt((((m.fdx*m.fdx)+(m.fdy*m.fdy))+(m.fdz*m.fdz))));
m.sdx = (((-4*Math.cos(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t)))))))*(Math.sin(m.t)+(3.1415*Math.sin((2.98+(3*m.t))))))-((Math.cos(m.t)*((5+(25.132*Math.cos((2.98+(2*m.t)))))+(39.4761*sqr(Math.cos((2.98+(2*m.t)))))))*Math.sin(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t))))))));
m.sdy = (((-1.4*Math.cos(m.t))*Math.sin((1.9+(0.7*m.t))))-((1.49*Math.cos((1.9+(0.7*m.t))))*Math.sin(m.t)));
m.sdz = (((((-12.566*Math.cos((1.01+(2*m.t))))*Math.cos((1.54+(2*m.t))))*Math.cos(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t)))))))+(((8*Math.cos(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t)))))))*(-1+(3.1415*Math.sin((1.01+(2*m.t))))))*Math.sin((1.54+(2*m.t)))))-(((4*Math.cos((1.54+(2*m.t))))*((2-(6.2831*Math.sin((1.01+(2*m.t)))))+(9.869*sqr(Math.sin((1.01+(2*m.t)))))))*Math.sin(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t))))))));
m.snx = ((m.fdy*m.sdz)-(m.sdy*m.fdz));
m.sny = ((m.fdz*m.sdx)-(m.fdx*m.sdz));
m.snz = ((m.fdx*m.sdy)-(m.fdy*m.sdx));
m.invsnmag = div(1,sqrt((((m.snx*m.snx)+(m.sny*m.sny))+(m.snz*m.snz))));
m.snx = (m.snx*m.invsnmag);
m.sny = (m.sny*m.invsnmag);
m.snz = (m.snz*m.invsnmag);
m.fdx = (m.fdx*m.invfdmag);
m.fdy = (m.fdy*m.invfdmag);
m.fdz = (m.fdz*m.invfdmag);
m.fnx = ((m.sny*m.fdz)-(m.fdy*m.snz));
m.fny = ((m.snz*m.fdx)-(m.snx*m.fdz));
m.fnz = ((m.snx*m.fdy)-(m.sny*m.fdx));
m.angl = (m.t*188.493);
m.c = sqrt((1-m.sample));
m.mx = (m.mx+((m.t3*m.c)*((m.snx*Math.cos(m.angl))+(m.fnx*Math.sin(m.angl)))));
m.my = (m.my+((m.t3*m.c)*((m.sny*Math.cos(m.angl))+(m.fny*Math.sin(m.angl)))));
m.mz = (m.mz+((m.t3*m.c)*((m.snz*Math.cos(m.angl))+(m.fnz*Math.sin(m.angl)))));
m.qq9 = ((m.q4*m.q2)-(m.q5*m.q1));
m.vx = ((((m.q7*m.mx)+(m.q8*m.my))+(m.qq9*m.mz))-(((m.t6*m.q7)+(m.t7*m.q8))+(m.t8*m.qq9)));
m.vy = ((((m.q4*m.mx)+(m.q5*m.my))+(m.q6*m.mz))-(((m.t6*m.q4)+(m.t7*m.q5))+(m.t8*m.q6)));
m.vw = ((((m.q1*m.mx)+(m.q2*m.my))+(m.q3*m.mz))-(((m.t6*m.q1)+(m.t7*m.q2))+(m.t8*m.q3)));
m.ox = (div(m.vx,m.vw)*0.15);
m.oy = (div(m.vy,m.vw)*0.15);
m.x = (0.5-m.oy);
m.y = (0.5+(m.ox*1.25));
m.a = (above(m.vw, 0.02)*pow((1-Math.min(m.vw, 1)), 2));
m.hue = m.vw;
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
		'frame_eqs_str' : ('speed=.015;\n' + 'length=.1;\n' + 'crosssectionrad=.1;\n' + 't1= speed*time-int(speed*time);\n' + 't2= length;\n' + 't3= crosssectionrad;\n' + 't=t1*6.2831;\n' + 't6=cos(t)*sin(.43+2*t+3.1415*sin(2.98+2*t));\n' + 't7=cos(1.9+.7*t)*sin(t);\n' + 't8=cos(1.54+2*t)*sin(2*t+3.1415*cos(1.01+2*t));\n' + 'q1=2*cos(t)*(1+3.1415*cos(2.98+2*t))*cos(.43+2*t+3.1415*sin(2.98+2*t))-sin(t)*sin(.43+2*t+3.1415*sin(2.98+2*t));\n' + 'q2=cos(1.9+.7*t)*cos(t)-.7*sin(1.9+.7*t)*sin(t);\n' + 'q3=cos(1.54+2*t)*cos(2*t+3.1415*cos(1.01+2*t))*(2-6.2831*sin(1.01+2*t))-2*sin(1.54+2*t)*sin(2*t+3.1415*cos(1.01+2*t));\n' + 'invFDmag=1/sqrt( q1*q1 + q2*q2 + q3*q3 );\n' + 'sdX=-4*cos(.43+2*t+3.1415*sin(2.98+2*t))*(sin(t)+3.1415*sin(2.98+3*t))-cos(t)*(5+25.132*cos(2.98+2*t)+39.4761*sqr(cos(2.98+2*t)))*sin( .43+2*t+3.1415*sin(2.98+2*t));\n' + 'sdY=-1.4*cos(t)*sin(1.9+.7*t)-1.49*cos(1.9+.7*t)*sin(t);\n' + 'sdZ=-12.566*cos(1.01+2*t)*cos(1.54+2*t)*cos(2*t+3.1415*cos(1.01+2*t))+8*cos(2*t+3.1415*cos(1.01+2*t))*(-1+3.1415*sin(1.01+2*t))*sin(1.54+2*t) - 4*cos(1.54+2*t)*(2-6.2831*sin(1.01+2*t)+9.869*sqr(sin(1.01+2*t)))*sin(2*t+3.1415*cos(1.01+2*t));\n' + 'q4=q2*sdZ-sdY*q3;\n' + 'q5=q3*sdX-q1*sdZ;\n' + 'q6=q1*sdY-q2*sdX;\n' + 'invSNmag=1/sqrt( q4*q4+q5*q5+q6*q6 );\n' + 'q4=q4*invSNmag;\n' + 'q5=q5*invSNmag;\n' + 'q6=q6*invSNmag;\n' + 'q1=q1*invFDmag;\n' + 'q2=q2*invFDmag;\n' + 'q3=q3*invFDmag;\n' + 'q7=q5*q3-q2*q6;\n' + 'q8=q6*q1-q4*q3;'),
		'point_eqs_str' : ('t=(t1+(0+sqr(sample))*t2);\n' + 't=if(above(t,1),t-1,t);\n' + 't=t*6.2831;\n' + 'mx=cos(t)*sin(.43+2*t+3.1415*sin(2.98+2*t));\n' + 'my=cos(1.9+.7*t)*sin(t);\n' + 'mz=cos(1.54+2*t)*sin(2*t+3.1415*cos(1.01+2*t));\n' + 'fdX=2*cos(t)*(1+3.1415*cos(2.98+2*t))*cos(.43+2*t+3.1415*sin(2.98+2*t))-sin(t)*sin(.43+2*t+3.1415*sin(2.98+2*t));\n' + 'fdY=cos(1.9+.7*t)*cos(t)-.7*sin(1.9+.7*t)*sin(t);\n' + 'fdZ=cos(1.54+2*t)*cos(2*t+3.1415*cos(1.01+2*t))*(2-6.2831*sin(1.01+2*t))-2*sin(1.54+2*t)*sin(2*t+3.1415*cos(1.01+2*t));\n' + 'invFDmag=1/sqrt( fdX*fdX + fdY*fdY + fdZ*fdZ );\n' + 'sdX=-4*cos(.43+2*t+3.1415*sin(2.98+2*t))*(sin(t)+3.1415*sin(2.98+3*t))-cos(t)*(5+25.132*cos(2.98+2*t)+39.4761*sqr(cos(2.98+2*t)))*sin( .43+2*t+3.1415*sin(2.98+2*t));\n' + 'sdY=-1.4*cos(t)*sin(1.9+.7*t)-1.49*cos(1.9+.7*t)*sin(t);\n' + 'sdZ=-12.566*cos(1.01+2*t)*cos(1.54+2*t)*cos(2*t+3.1415*cos(1.01+2*t))+8*cos(2*t+3.1415*cos(1.01+2*t))*(-1+3.1415*sin(1.01+2*t))*sin(1.54+2*t) - 4*cos(1.54+2*t)*(2-6.2831*sin(1.01+2*t)+9.869*sqr(sin(1.01+2*t)))*sin(2*t+3.1415*cos(1.01+2*t));\n' + 'snX=fdY*sdZ-sdY*fdZ;\n' + 'snY=fdZ*sdX-fdX*sdZ;\n' + 'snZ=fdX*sdY-fdY*sdX;\n' + 'invSNmag=1/sqrt( snX*snX+snY*snY+snZ*snZ );\n' + 'snX=snX*invSNmag;\n' + 'snY=snY*invSNmag;\n' + 'snZ=snZ*invSNmag;\n' + 'fdX=fdX*invFDmag;\n' + 'fdY=fdY*invFDmag;\n' + 'fdZ=fdZ*invFDmag;\n' + 'fnX=snY*fdZ-fdY*snZ;\n' + 'fnY=snZ*fdX-snX*fdZ;\n' + 'fnZ=snX*fdY-snY*fdX;\n' + 'angl=t*188.493;\n' + 'c=sqrt(1-sample);\n' + 'mx=mx+t3*c*(snX*cos(angl)+fnX*sin(angl));\n' + 'my=my+t3*c*(snY*cos(angl)+fnY*sin(angl));\n' + 'mz=mz+t3*c*(snZ*cos(angl)+fnZ*sin(angl));\n' + 'qq9=q4*q2-q5*q1;\n' + 'vx=(q7*mx+q8*my+qq9*mz-(t6*q7+t7*q8+t8*qq9));\n' + 'vy=(q4*mx+q5*my+q6*mz-(t6*q4+t7*q5+t8*q6));\n' + 'vw=q1*mx+q2*my+q3*mz-(t6*q1+t7*q2+t8*q3);\n' + 'ox=(vx/vw)*.15;\n' + 'oy=(vy/vw)*.15;\n' + 'x=.5-oy;\n' + 'y=.5+ox*1.25;\n' + 'a=above(vw,.02)*pow(1-min(vw,1),2);\n' + 'hue=vw;\n' + 'h=6*(hue-int(hue));\n' + 'sw1=below(h,1);\n' + ' sw2=(1-sw1)*below(h,2);\n' + ' sw3=(1-sw1)*(1-sw2)*below(h,3);\n' + ' sw4=(1-sw1)*(1-sw2)*(1-sw3)*below(h,4);\n' + 'sw6=above(h,5);\n' + ' sw5=(1-sw1)*(1-sw2)*(1-sw3)*(1-sw4)*(1-sw6);\n' + 'r=sw1+sw2*(2-h)+sw5*(h-4)+sw6;\n' + 'g=sw1*h+sw2+sw3+sw4*(4-h);\n' + 'b=sw3*(h-2)+sw4+sw5+sw6*(6-h);'),

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
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.999998,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.p1 = 0;
m.t5 = 0;
m.p2 = 0;
m.t6 = 0;
m.n1 = 0;
m.p3 = 0;
m.t7 = 0;
m.n2 = 0;
m.t8 = 0;
m.sw = 0;
m.invfdmag = 0;
m.n3 = 0;
m.speed = 0;
m.sdx = 0;
m.invsnmag = 0;
m.sdy = 0;
m.sdz = 0;
m.mx = 0;
m.my = 0;
m.mz = 0;
m.fnz = 0;
m.t = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.speed = 0.015;
m.t = (6.2831*((m.speed*m.time)-Math.floor((m.speed*m.time))));
m.t1 = ((((2*Math.cos(m.t))*(1+(3.1415*Math.cos((2.98+(2*m.t))))))*Math.cos(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t)))))))-(Math.sin(m.t)*Math.sin(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t))))))));
m.t2 = ((Math.cos((1.9+(0.7*m.t)))*Math.cos(m.t))-((0.7*Math.sin((1.9+(0.7*m.t))))*Math.sin(m.t)));
m.t3 = (((Math.cos((1.54+(2*m.t)))*Math.cos(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t)))))))*(2-(6.2831*Math.sin((1.01+(2*m.t))))))-((2*Math.sin((1.54+(2*m.t))))*Math.sin(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t))))))));
m.invfdmag = div(1,sqrt((((m.t1*m.t1)+(m.t2*m.t2))+(m.t3*m.t3))));
m.sdx = (((-4*Math.cos(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t)))))))*(Math.sin(m.t)+(3.1415*Math.sin((2.98+(3*m.t))))))-((Math.cos(m.t)*((5+(25.132*Math.cos((2.98+(2*m.t)))))+(39.4761*sqr(Math.cos((2.98+(2*m.t)))))))*Math.sin(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t))))))));
m.sdy = (((-1.4*Math.cos(m.t))*Math.sin((1.9+(0.7*m.t))))-((1.49*Math.cos((1.9+(0.7*m.t))))*Math.sin(m.t)));
m.sdz = (((((-12.566*Math.cos((1.01+(2*m.t))))*Math.cos((1.54+(2*m.t))))*Math.cos(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t)))))))+(((8*Math.cos(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t)))))))*(-1+(3.1415*Math.sin((1.01+(2*m.t))))))*Math.sin((1.54+(2*m.t)))))-(((4*Math.cos((1.54+(2*m.t))))*((2-(6.2831*Math.sin((1.01+(2*m.t)))))+(9.869*sqr(Math.sin((1.01+(2*m.t)))))))*Math.sin(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t))))))));
m.t4 = ((m.t2*m.sdz)-(m.sdy*m.t3));
m.t5 = ((m.t3*m.sdx)-(m.t1*m.sdz));
m.t6 = ((m.t1*m.sdy)-(m.t2*m.sdx));
m.invsnmag = div(1,sqrt((((m.t4*m.t4)+(m.t5*m.t5))+(m.t6*m.t6))));
m.t4 = (m.t4*m.invsnmag);
m.t5 = (m.t5*m.invsnmag);
m.t6 = (m.t6*m.invsnmag);
m.t1 = (m.t1*m.invfdmag);
m.t2 = (m.t2*m.invfdmag);
m.t3 = (m.t3*m.invfdmag);
m.t7 = ((m.t5*m.t3)-(m.t2*m.t6));
m.t8 = ((m.t6*m.t1)-(m.t4*m.t3));
		return m;
	},
		'point_eqs' : function(m) {
m.sw = Math.floor((3*m.sample));
m.fnz = ((m.t4*m.t2)-(m.t5*m.t1));
m.p1 = ((3*equal(m.sw, 0))*m.sample);
m.p2 = ((equal(m.sw, 1)*3)*(m.sample-0.333));
m.p3 = ((equal(m.sw, 2)*3)*(m.sample-0.666));
m.n1 = ((m.t2*m.fnz)-(m.t8*m.t3));
m.n2 = -((m.t1*m.fnz)-(m.t7*m.t3));
m.n3 = ((m.t1*m.t8)-(m.t2*m.t7));
m.mx = (((m.p1*m.t7)+(m.p2*m.n1))+(m.p3*m.t1));
m.my = (((m.p1*m.t8)+(m.p2*m.n2))+(m.p3*m.t2));
m.mz = (((m.p1*m.fnz)+(m.p2*m.n3))+(m.p3*m.t3));
m.x = (0.14+(0.05*m.mx));
m.y = (0.14+((0.05*m.my)*1.25));
m.a = (1-((above(m.sample, 0.33)*below(m.sample, 0.34))+(above(m.sample, 0.66)*below(m.sample, 0.67))));
m.r = equal(m.sw, 0);
m.g = equal(m.sw, 1);
m.b = equal(m.sw, 2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('speed=.015;\n' + 't= 6.2831*(speed*time-int(speed*time));\n' + 't1=2*cos(t)*(1+3.1415*cos(2.98+2*t))*cos(.43+2*t+3.1415*sin(2.98+2*t))-sin(t)*sin(.43+2*t+3.1415*sin(2.98+2*t));\n' + 't2=cos(1.9+.7*t)*cos(t)-.7*sin(1.9+.7*t)*sin(t);\n' + 't3=cos(1.54+2*t)*cos(2*t+3.1415*cos(1.01+2*t))*(2-6.2831*sin(1.01+2*t))-2*sin(1.54+2*t)*sin(2*t+3.1415*cos(1.01+2*t));\n' + 'invFDmag=1/sqrt( t1*t1 + t2*t2 + t3*t3 );\n' + 'sdX=-4*cos(.43+2*t+3.1415*sin(2.98+2*t))*(sin(t)+3.1415*sin(2.98+3*t))-cos(t)*(5+25.132*cos(2.98+2*t)+39.4761*sqr(cos(2.98+2*t)))*sin( .43+2*t+3.1415*sin(2.98+2*t));\n' + 'sdY=-1.4*cos(t)*sin(1.9+.7*t)-1.49*cos(1.9+.7*t)*sin(t);\n' + 'sdZ=-12.566*cos(1.01+2*t)*cos(1.54+2*t)*cos(2*t+3.1415*cos(1.01+2*t))+8*cos(2*t+3.1415*cos(1.01+2*t))*(-1+3.1415*sin(1.01+2*t))*sin(1.54+2*t) - 4*cos(1.54+2*t)*(2-6.2831*sin(1.01+2*t)+9.869*sqr(sin(1.01+2*t)))*sin(2*t+3.1415*cos(1.01+2*t));\n' + 't4=t2*sdZ-sdY*t3;\n' + 't5=t3*sdX-t1*sdZ;\n' + 't6=t1*sdY-t2*sdX;\n' + 'invSNmag=1/sqrt( t4*t4+t5*t5+t6*t6 );\n' + 't4=t4*invSNmag;\n' + 't5=t5*invSNmag;\n' + 't6=t6*invSNmag;\n' + 't1=t1*invFDmag;\n' + 't2=t2*invFDmag;\n' + 't3=t3*invFDmag;\n' + 't7=t5*t3-t2*t6;\n' + 't8=t6*t1-t4*t3;'),
		'point_eqs_str' : ('sw=int(3*sample);\n' + 'fnZ=t4*t2-t5*t1;\n' + 'p1=3*equal(sw,0)*sample;\n' + 'p2=equal(sw,1)*3*(sample-.333);\n' + 'p3=equal(sw,2)*3*(sample-.666);\n' + 'n1 = t2*fnZ-t8*t3;\n' + 'n2 = -(t1*fnZ-t7*t3);\n' + 'n3 = t1*t8-t2*t7;\n' + 'mx=p1*t7 +p2*n1 +p3*t1;\n' + 'my=p1*t8 +p2*n2 +p3*t2;\n' + 'mz=p1*fnZ+p2*n3 +p3*t3;\n' + 'x=.14+.05*mx;\n' + 'y=.14+.05*my*1.25;\n' + 'a=1-( above(sample,.33)*below(sample,.34) + above(sample,.66)*below(sample,.67));\n' + 'r=equal(sw,0);\n' + 'g=equal(sw,1);\n' + 'b=equal(sw,2);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.rr = 0;
m.q2 = 0;
m.vw = 0;
m.q3 = 0;
m.t6 = 0;
m.vx = 0;
m.q4 = 0;
m.t7 = 0;
m.vy = 0;
m.q5 = 0;
m.t8 = 0;
m.invfdmag = 0;
m.q6 = 0;
m.q7 = 0;
m.length = 0;
m.speed = 0;
m.sdx = 0;
m.q8 = 0;
m.invsnmag = 0;
m.sdy = 0;
m.sdz = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.my = 0;
m.mz = 0;
m.fnx = 0;
m.crosssectionrad = 0;
m.fny = 0;
m.fnz = 0;
m.angl = 0;
m.t = 0;
m.qq9 = 0;
m.fdx = 0;
m.fdy = 0;
m.fdz = 0;
m.snx = 0;
m.t1 = 0;
m.sny = 0;
m.t2 = 0;
m.snz = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.speed = 0.015;
m.length = 0.1;
m.crosssectionrad = 0.07;
m.t1 = ((m.speed*m.time)-Math.floor((m.speed*m.time)));
m.t2 = m.length;
m.t3 = m.crosssectionrad;
m.t = (m.t1*6.2831);
m.t6 = (Math.cos(m.t)*Math.sin(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t)))))));
m.t7 = (Math.cos((1.9+(0.7*m.t)))*Math.sin(m.t));
m.t8 = (Math.cos((1.54+(2*m.t)))*Math.sin(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t)))))));
m.q1 = ((((2*Math.cos(m.t))*(1+(3.1415*Math.cos((2.98+(2*m.t))))))*Math.cos(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t)))))))-(Math.sin(m.t)*Math.sin(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t))))))));
m.q2 = ((Math.cos((1.9+(0.7*m.t)))*Math.cos(m.t))-((0.7*Math.sin((1.9+(0.7*m.t))))*Math.sin(m.t)));
m.q3 = (((Math.cos((1.54+(2*m.t)))*Math.cos(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t)))))))*(2-(6.2831*Math.sin((1.01+(2*m.t))))))-((2*Math.sin((1.54+(2*m.t))))*Math.sin(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t))))))));
m.invfdmag = div(1,sqrt((((m.q1*m.q1)+(m.q2*m.q2))+(m.q3*m.q3))));
m.sdx = (((-4*Math.cos(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t)))))))*(Math.sin(m.t)+(3.1415*Math.sin((2.98+(3*m.t))))))-((Math.cos(m.t)*((5+(25.132*Math.cos((2.98+(2*m.t)))))+(39.4761*sqr(Math.cos((2.98+(2*m.t)))))))*Math.sin(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t))))))));
m.sdy = (((-1.4*Math.cos(m.t))*Math.sin((1.9+(0.7*m.t))))-((1.49*Math.cos((1.9+(0.7*m.t))))*Math.sin(m.t)));
m.sdz = (((((-12.566*Math.cos((1.01+(2*m.t))))*Math.cos((1.54+(2*m.t))))*Math.cos(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t)))))))+(((8*Math.cos(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t)))))))*(-1+(3.1415*Math.sin((1.01+(2*m.t))))))*Math.sin((1.54+(2*m.t)))))-(((4*Math.cos((1.54+(2*m.t))))*((2-(6.2831*Math.sin((1.01+(2*m.t)))))+(9.869*sqr(Math.sin((1.01+(2*m.t)))))))*Math.sin(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t))))))));
m.q4 = ((m.q2*m.sdz)-(m.sdy*m.q3));
m.q5 = ((m.q3*m.sdx)-(m.q1*m.sdz));
m.q6 = ((m.q1*m.sdy)-(m.q2*m.sdx));
m.invsnmag = div(1,sqrt((((m.q4*m.q4)+(m.q5*m.q5))+(m.q6*m.q6))));
m.q4 = (m.q4*m.invsnmag);
m.q5 = (m.q5*m.invsnmag);
m.q6 = (m.q6*m.invsnmag);
m.q1 = (m.q1*m.invfdmag);
m.q2 = (m.q2*m.invfdmag);
m.q3 = (m.q3*m.invfdmag);
m.q7 = ((m.q5*m.q3)-(m.q2*m.q6));
m.q8 = ((m.q6*m.q1)-(m.q4*m.q3));
		return m;
	},
		'point_eqs' : function(m) {
m.t = (m.t1+((0+m.sample)*m.t2));
m.t = ifcond(above(m.t, 1), (m.t-1), m.t);
m.t = (m.t*6.2831);
m.mx = (Math.cos(m.t)*Math.sin(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t)))))));
m.my = (Math.cos((1.9+(0.7*m.t)))*Math.sin(m.t));
m.mz = (Math.cos((1.54+(2*m.t)))*Math.sin(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t)))))));
m.fdx = ((((2*Math.cos(m.t))*(1+(3.1415*Math.cos((2.98+(2*m.t))))))*Math.cos(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t)))))))-(Math.sin(m.t)*Math.sin(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t))))))));
m.fdy = ((Math.cos((1.9+(0.7*m.t)))*Math.cos(m.t))-((0.7*Math.sin((1.9+(0.7*m.t))))*Math.sin(m.t)));
m.fdz = (((Math.cos((1.54+(2*m.t)))*Math.cos(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t)))))))*(2-(6.2831*Math.sin((1.01+(2*m.t))))))-((2*Math.sin((1.54+(2*m.t))))*Math.sin(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t))))))));
m.invfdmag = div(1,sqrt((((m.fdx*m.fdx)+(m.fdy*m.fdy))+(m.fdz*m.fdz))));
m.sdx = (((-4*Math.cos(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t)))))))*(Math.sin(m.t)+(3.1415*Math.sin((2.98+(3*m.t))))))-((Math.cos(m.t)*((5+(25.132*Math.cos((2.98+(2*m.t)))))+(39.4761*sqr(Math.cos((2.98+(2*m.t)))))))*Math.sin(((0.43+(2*m.t))+(3.1415*Math.sin((2.98+(2*m.t))))))));
m.sdy = (((-1.4*Math.cos(m.t))*Math.sin((1.9+(0.7*m.t))))-((1.49*Math.cos((1.9+(0.7*m.t))))*Math.sin(m.t)));
m.sdz = (((((-12.566*Math.cos((1.01+(2*m.t))))*Math.cos((1.54+(2*m.t))))*Math.cos(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t)))))))+(((8*Math.cos(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t)))))))*(-1+(3.1415*Math.sin((1.01+(2*m.t))))))*Math.sin((1.54+(2*m.t)))))-(((4*Math.cos((1.54+(2*m.t))))*((2-(6.2831*Math.sin((1.01+(2*m.t)))))+(9.869*sqr(Math.sin((1.01+(2*m.t)))))))*Math.sin(((2*m.t)+(3.1415*Math.cos((1.01+(2*m.t))))))));
m.snx = ((m.fdy*m.sdz)-(m.sdy*m.fdz));
m.sny = ((m.fdz*m.sdx)-(m.fdx*m.sdz));
m.snz = ((m.fdx*m.sdy)-(m.fdy*m.sdx));
m.invsnmag = div(1,sqrt((((m.snx*m.snx)+(m.sny*m.sny))+(m.snz*m.snz))));
m.snx = (m.snx*m.invsnmag);
m.sny = (m.sny*m.invsnmag);
m.snz = (m.snz*m.invsnmag);
m.fdx = (m.fdx*m.invfdmag);
m.fdy = (m.fdy*m.invfdmag);
m.fdz = (m.fdz*m.invfdmag);
m.fnx = ((m.sny*m.fdz)-(m.fdy*m.snz));
m.fny = ((m.snz*m.fdx)-(m.snx*m.fdz));
m.fnz = ((m.snx*m.fdy)-(m.sny*m.fdx));
m.angl = (6.2831*Math.cos((((628.3185*m.sample)+2.54)+(40*Math.sin(((62.8318*m.sample)+0.56))))));
m.rr = (m.t3*(0.1+(2*Math.abs(Math.sin((((628.3185*m.sample)+2.54)+(40*Math.cos((((62.8318*10)*m.sample)+0.56)))))))));
m.mx = (m.mx+(m.rr*Math.cos(m.angl)));
m.my = (m.my+(m.rr*div(Math.cos(m.angl),Math.sin(m.angl))));
m.mz = (m.mz+(m.rr*Math.sin(m.angl)));
m.qq9 = ((m.q4*m.q2)-(m.q5*m.q1));
m.vx = ((((m.q7*m.mx)+(m.q8*m.my))+(m.qq9*m.mz))-(((m.t6*m.q7)+(m.t7*m.q8))+(m.t8*m.qq9)));
m.vy = ((((m.q4*m.mx)+(m.q5*m.my))+(m.q6*m.mz))-(((m.t6*m.q4)+(m.t7*m.q5))+(m.t8*m.q6)));
m.vw = ((((m.q1*m.mx)+(m.q2*m.my))+(m.q3*m.mz))-(((m.t6*m.q1)+(m.t7*m.q2))+(m.t8*m.q3)));
m.ox = (div(m.vx,m.vw)*0.15);
m.oy = ((div(m.vy,m.vw)*0.15)*1.25);
m.x = (0.5-m.oy);
m.y = (0.5+(m.ox*1.25));
m.a = (above(m.vw, 0.01)*pow((2*(0.5-Math.min(m.vw, 0.5))), 2));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('speed=.015;\n' + 'length=.1;\n' + 'crosssectionrad=.07;\n' + 't1=( speed*time-int(speed*time));\n' + 't2= length;\n' + 't3= crosssectionrad;\n' + 't=t1*6.2831;\n' + 't6=cos(t)*sin(.43+2*t+3.1415*sin(2.98+2*t));\n' + 't7=cos(1.9+.7*t)*sin(t);\n' + 't8=cos(1.54+2*t)*sin(2*t+3.1415*cos(1.01+2*t));\n' + 'q1=2*cos(t)*(1+3.1415*cos(2.98+2*t))*cos(.43+2*t+3.1415*sin(2.98+2*t))-sin(t)*sin(.43+2*t+3.1415*sin(2.98+2*t));\n' + 'q2=cos(1.9+.7*t)*cos(t)-.7*sin(1.9+.7*t)*sin(t);\n' + 'q3=cos(1.54+2*t)*cos(2*t+3.1415*cos(1.01+2*t))*(2-6.2831*sin(1.01+2*t))-2*sin(1.54+2*t)*sin(2*t+3.1415*cos(1.01+2*t));\n' + 'invFDmag=1/sqrt( q1*q1 + q2*q2 + q3*q3 );\n' + 'sdX=-4*cos(.43+2*t+3.1415*sin(2.98+2*t))*(sin(t)+3.1415*sin(2.98+3*t))-cos(t)*(5+25.132*cos(2.98+2*t)+39.4761*sqr(cos(2.98+2*t)))*sin( .43+2*t+3.1415*sin(2.98+2*t));\n' + 'sdY=-1.4*cos(t)*sin(1.9+.7*t)-1.49*cos(1.9+.7*t)*sin(t);\n' + 'sdZ=-12.566*cos(1.01+2*t)*cos(1.54+2*t)*cos(2*t+3.1415*cos(1.01+2*t))+8*cos(2*t+3.1415*cos(1.01+2*t))*(-1+3.1415*sin(1.01+2*t))*sin(1.54+2*t) - 4*cos(1.54+2*t)*(2-6.2831*sin(1.01+2*t)+9.869*sqr(sin(1.01+2*t)))*sin(2*t+3.1415*cos(1.01+2*t));\n' + 'q4=q2*sdZ-sdY*q3;\n' + 'q5=q3*sdX-q1*sdZ;\n' + 'q6=q1*sdY-q2*sdX;\n' + 'invSNmag=1/sqrt( q4*q4+q5*q5+q6*q6 );\n' + 'q4=q4*invSNmag;\n' + 'q5=q5*invSNmag;\n' + 'q6=q6*invSNmag;\n' + 'q1=q1*invFDmag;\n' + 'q2=q2*invFDmag;\n' + 'q3=q3*invFDmag;\n' + 'q7=q5*q3-q2*q6;\n' + 'q8=q6*q1-q4*q3;'),
		'point_eqs_str' : ('t=(t1+(0+sample)*t2);\n' + 't=if(above(t,1),t-1,t);\n' + 't=t*6.2831;\n' + 'mx=cos(t)*sin(.43+2*t+3.1415*sin(2.98+2*t));\n' + 'my=cos(1.9+.7*t)*sin(t);\n' + 'mz=cos(1.54+2*t)*sin(2*t+3.1415*cos(1.01+2*t));\n' + 'fdX=2*cos(t)*(1+3.1415*cos(2.98+2*t))*cos(.43+2*t+3.1415*sin(2.98+2*t))-sin(t)*sin(.43+2*t+3.1415*sin(2.98+2*t));\n' + 'fdY=cos(1.9+.7*t)*cos(t)-.7*sin(1.9+.7*t)*sin(t);\n' + 'fdZ=cos(1.54+2*t)*cos(2*t+3.1415*cos(1.01+2*t))*(2-6.2831*sin(1.01+2*t))-2*sin(1.54+2*t)*sin(2*t+3.1415*cos(1.01+2*t));\n' + 'invFDmag=1/sqrt( fdX*fdX + fdY*fdY + fdZ*fdZ );\n' + 'sdX=-4*cos(.43+2*t+3.1415*sin(2.98+2*t))*(sin(t)+3.1415*sin(2.98+3*t))-cos(t)*(5+25.132*cos(2.98+2*t)+39.4761*sqr(cos(2.98+2*t)))*sin( .43+2*t+3.1415*sin(2.98+2*t));\n' + 'sdY=-1.4*cos(t)*sin(1.9+.7*t)-1.49*cos(1.9+.7*t)*sin(t);\n' + 'sdZ=-12.566*cos(1.01+2*t)*cos(1.54+2*t)*cos(2*t+3.1415*cos(1.01+2*t))+8*cos(2*t+3.1415*cos(1.01+2*t))*(-1+3.1415*sin(1.01+2*t))*sin(1.54+2*t) - 4*cos(1.54+2*t)*(2-6.2831*sin(1.01+2*t)+9.869*sqr(sin(1.01+2*t)))*sin(2*t+3.1415*cos(1.01+2*t));\n' + 'snX=fdY*sdZ-sdY*fdZ;\n' + 'snY=fdZ*sdX-fdX*sdZ;\n' + 'snZ=fdX*sdY-fdY*sdX;\n' + 'invSNmag=1/sqrt( snX*snX+snY*snY+snZ*snZ );\n' + 'snX=snX*invSNmag;\n' + 'snY=snY*invSNmag;\n' + 'snZ=snZ*invSNmag;\n' + 'fdX=fdX*invFDmag;\n' + 'fdY=fdY*invFDmag;\n' + 'fdZ=fdZ*invFDmag;\n' + 'fnX=snY*fdZ-fdY*snZ;\n' + 'fnY=snZ*fdX-snX*fdZ;\n' + 'fnZ=snX*fdY-snY*fdX;\n' + 'angl=6.2831*cos(628.3185*sample+2.54+40*sin(62.8318*sample+.56));\n' + 'rr=t3*(.1+2*abs(sin(628.3185*sample+2.54+40*cos(62.8318*10*sample+.56))));\n' + 'mx=mx+rr*cos(angl);\n' + 'my=my+rr*(cos(angl)/sin(angl));\n' + 'mz=mz+rr*sin(angl);\n' + 'qq9=q4*q2-q5*q1;\n' + 'vx=(q7*mx+q8*my+qq9*mz-(t6*q7+t7*q8+t8*qq9));\n' + 'vy=(q4*mx+q5*my+q6*mz-(t6*q4+t7*q5+t8*q6));\n' + 'vw=q1*mx+q2*my+q3*mz-(t6*q1+t7*q2+t8*q3);\n' + 'ox=(vx/vw)*.15;\n' + 'oy=(vy/vw)*.15*1.25;\n' + 'x=.5-oy;\n' + 'y=.5+ox*1.25;\n' + 'a=above(vw,.01)*pow(2*(.5-min(vw,.5)),2);'),

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
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.133451,
			x : 0.14,
			y : 0.14,
			ang : 0.0,
			sides : 60.0,
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
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('decay=.81;\n' + 'dt=1/FPS;\n' + 'contvol=max(.4, (1-.6*dt)*contvol+.2*dt*(bass+mid+treb) );\n' + 'monitor=30*6.2831;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
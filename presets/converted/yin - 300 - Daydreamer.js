define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.49,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.016446,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.999993,
		ob_size : 0.005,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.7,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999999,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.05,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.99,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.c1 = 0;
m.c2 = 0;
m.vol = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = 1;
m.warp = 0;
m.ib_size = 0;
m.ib_a = 0;
m.ob_size = 1;
m.ob_a = (0.01+(0.02*div(m.fps,100)));
m.vol = Math.min(((0.99*m.vol)+(0.01*((m.bass+m.mid)+m.treb))), 3);
m.c1 = (((0.333*(m.vol+1))*m.time)+3.34);
m.c2 = ((0.87*m.time)+2.97);
m.ob_r = Math.abs(Math.cos((m.c1+Math.sin(m.c2))));
m.ob_g = Math.abs(Math.sin((m.c1+Math.cos(m.c2))));
m.ob_b = Math.abs(Math.sin((m.c1+Math.sin(m.c2))));
m.q1 = (0.18*Math.cos((((0.354*m.time)+0.54)+Math.cos(((0.521*m.time)+1.432)))));
m.q2 = 0.075;
m.q3 = sqrt((0.995*((0.5*m.time)-Math.floor((0.5*m.time)))));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+((below(m.rad, 0.45)*sqr((1-div(m.rad,0.45))))*5));
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
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.ddtan = 0;
m.q3 = 0;
m.t6 = 0;
m.c = 0;
m.t7 = 0;
m.d = 0;
m.t8 = 0;
m.ox = 0;
m.oy = 0;
m.c1 = 0;
m.c2 = 0;
m.val1 = 0;
m.val2 = 0;
m.s = 0;
m.ddx = 0;
m.ddy = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t7 = 0.0;
m.t8 = 0.45;
m.ddx = ((0.25*Math.cos((5.7119*m.t1)))+((2.5963*m.t1)*Math.sin((5.7119*m.t1))));
m.ddy = ((0.3125*Math.sin((5.7119*m.t1)))-((3.2453*m.t1)*Math.cos((5.7119*m.t1))));
m.ddtan = Math.atan2(m.ddy, m.ddx);
m.t2 = -m.ddtan;
m.val1 = (((-0.5*Math.cos((5.7119*m.t1)))*Math.cos(m.t2))-((-0.625*Math.sin((5.7119*m.t1)))*Math.sin(m.t2)));
m.val2 = (((-0.5*Math.cos((5.7119*m.t1)))*Math.sin(m.t2))+((-0.625*Math.sin((5.7119*m.t1)))*Math.cos(m.t2)));
m.t6 = -sign(m.t1);
m.t7 = (m.t7-m.val1);
m.t8 = (m.t8-m.val2);
m.t3 = m.q2;
		return m;
	},
		'point_eqs' : function(m) {
m.c1 = div((6.2831*m.t1),(1.1-m.sample));
m.c = Math.cos(m.c1);
m.s = Math.sin(m.c1);
m.c2 = sqrt((1-m.sample));
m.ox = (m.t7-((0.5*m.c2)*m.c));
m.oy = (m.t8-((0.625*m.c2)*m.s));
m.x = (m.t7+(((m.ox-m.t7)*Math.cos(m.t2))-((m.oy-m.t8)*Math.sin(m.t2))));
m.y = (m.t8+(((m.ox-m.t7)*Math.sin(m.t2))+((m.oy-m.t8)*Math.cos(m.t2))));
m.x = (m.x*0.55);
m.y = (((m.y-0.5)*0.55)+0.5);
m.r = m.sample;
m.g = (1-m.sample);
m.b = 1;
m.a = below(m.sample, 0.995);
m.d = (((above((m.q3-m.sample), 0)*below((m.q3-m.sample), 0.4))*(m.sample-m.q3))*2.5);
m.d = (sqrt(m.d)*(1-sqrt(((m.sample-m.q3)*2.5))));
m.a = (m.a*(1-m.d));
m.y = (m.y+m.t3);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=q1;\n' + 't7=.0;\n' + 't8=.45;\n' + 'ddx=.25*cos(5.7119*t1)+2.5963*t1*sin(5.7119*t1);\n' + 'ddy=.3125*sin(5.7119*t1)-3.2453*t1*cos(5.7119*t1);\n' + 'ddtan=atan2(ddy,ddx);\n' + 't2=-ddtan;\n' + 'val1=((-.5*cos(5.7119*t1))*cos(t2)-(-.625*sin(5.7119*t1))*sin(t2));\n' + 'val2=((-.5*cos(5.7119*t1))*sin(t2)+(-.625*sin(5.7119*t1))*cos(t2));\n' + 't6=-sign(t1);\n' + 't7=t7-val1;\n' + 't8=t8-val2;\n' + 't3=q2;'),
		'point_eqs_str' : ('c1=6.2831*t1/(1.1-sample);\n' + 'c=cos(c1);\n' + 's=sin(c1);\n' + 'c2=sqrt(1-sample);\n' + 'ox=t7-.5*c2*c;\n' + 'oy=t8-.625*c2*s;\n' + 'x=t7+((ox-t7)*cos(t2)-(oy-t8)*sin(t2));\n' + 'y=t8+((ox-t7)*sin(t2)+(oy-t8)*cos(t2));\n' + 'x=x*.55;\n' + 'y=(y-.5)*.55+.5;\n' + 'r=sample;\n' + 'g=1-sample;\n' + 'b=1;\n' + 'a=below(sample,.995);\n' + 'd=above(q3-sample,0)*below(q3-sample,.4)*(sample-q3)*2.5;\n' + 'd=sqrt(d)*(1-sqrt((sample-q3)*2.5));\n' + 'a=a*(1-d);\n' + 'y=y+t3;'),

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
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.ddtan = 0;
m.q3 = 0;
m.t6 = 0;
m.invmag = 0;
m.c = 0;
m.t7 = 0;
m.d = 0;
m.t8 = 0;
m.rdx = 0;
m.rdy = 0;
m.ox = 0;
m.oy = 0;
m.c1 = 0;
m.c2 = 0;
m.val1 = 0;
m.val2 = 0;
m.inv = 0;
m.s = 0;
m.ddx = 0;
m.ddy = 0;
m.fdx = 0;
m.fdy = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t7 = 0.0;
m.t8 = 0.45;
m.ddx = ((0.25*Math.cos((5.7119*m.t1)))+((2.5963*m.t1)*Math.sin((5.7119*m.t1))));
m.ddy = ((0.3125*Math.sin((5.7119*m.t1)))-((3.2453*m.t1)*Math.cos((5.7119*m.t1))));
m.ddtan = Math.atan2(m.ddy, m.ddx);
m.t2 = -m.ddtan;
m.val1 = (((-0.5*Math.cos((5.7119*m.t1)))*Math.cos(m.t2))-((-0.625*Math.sin((5.7119*m.t1)))*Math.sin(m.t2)));
m.val2 = (((-0.5*Math.cos((5.7119*m.t1)))*Math.sin(m.t2))+((-0.625*Math.sin((5.7119*m.t1)))*Math.cos(m.t2)));
m.t6 = -sign(m.t1);
m.t7 = (m.t7-m.val1);
m.t8 = (m.t8-m.val2);
m.t3 = m.q2;
		return m;
	},
		'point_eqs' : function(m) {
m.c1 = div((6.2831*m.t1),(1.1-m.sample));
m.c = Math.cos(m.c1);
m.s = Math.sin(m.c1);
m.c2 = sqrt((1-m.sample));
m.ox = (m.t7-((0.5*m.c2)*m.c));
m.oy = (m.t8-((0.625*m.c2)*m.s));
m.x = (m.t7+(((m.ox-m.t7)*Math.cos(m.t2))-((m.oy-m.t8)*Math.sin(m.t2))));
m.y = (m.t8+(((m.ox-m.t7)*Math.sin(m.t2))+((m.oy-m.t8)*Math.cos(m.t2))));
m.inv = div(1,sqr((1.1-m.sample)));
m.fdx = (((-0.25*pow((1-m.sample), -0.5))*m.c)-((((m.c2*m.s)*3.1415)*m.t1)*m.inv));
m.fdy = (((-0.3125*m.c2)*m.s)+((((3.9268*m.c2)*m.c)*m.t1)*m.inv));
m.invmag = div(1,sqrt((sqr(m.fdx)+sqr(m.fdy))));
m.fdx = (m.fdx*m.invmag);
m.fdy = (m.fdy*m.invmag);
m.rdx = ((m.fdx*Math.cos((1.5707+m.t2)))-(m.fdy*Math.sin((1.5707+m.t2))));
m.rdy = ((m.fdx*Math.sin((1.5707+m.t2)))+(m.fdx*Math.cos((1.5707+m.t2))));
m.x = (m.x+((m.rdx*0.15)*(1-m.sample)));
m.y = (m.y+((m.rdy*0.15)*(1-m.sample)));
m.x = (m.x*0.55);
m.y = (((m.y-0.5)*0.55)+0.5);
m.r = m.sample;
m.g = (1-m.sample);
m.b = 1;
m.a = below(m.sample, 0.995);
m.d = (((above((m.q3-m.sample), 0)*below((m.q3-m.sample), 0.4))*(m.sample-m.q3))*2.5);
m.d = (sqrt(m.d)*(1-sqrt(((m.sample-m.q3)*2.5))));
m.a = (m.a*(1-m.d));
m.y = (m.y+m.t3);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=q1;\n' + 't7=.0;\n' + 't8=.45;\n' + 'ddx=.25*cos(5.7119*t1)+2.5963*t1*sin(5.7119*t1);\n' + 'ddy=.3125*sin(5.7119*t1)-3.2453*t1*cos(5.7119*t1);\n' + 'ddtan=atan2(ddy,ddx);\n' + 't2=-ddtan;\n' + 'val1=((-.5*cos(5.7119*t1))*cos(t2)-(-.625*sin(5.7119*t1))*sin(t2));\n' + 'val2=((-.5*cos(5.7119*t1))*sin(t2)+(-.625*sin(5.7119*t1))*cos(t2));\n' + 't6=-sign(t1);\n' + 't7=t7-val1;\n' + 't8=t8-val2;\n' + 't3=q2;'),
		'point_eqs_str' : ('c1=6.2831*t1/(1.1-sample);\n' + 'c=cos(c1);\n' + 's=sin(c1);\n' + 'c2=sqrt(1-sample);\n' + 'ox=t7-.5*c2*c;\n' + 'oy=t8-.625*c2*s;\n' + 'x=t7+((ox-t7)*cos(t2)-(oy-t8)*sin(t2));\n' + 'y=t8+((ox-t7)*sin(t2)+(oy-t8)*cos(t2));\n' + 'inv=1/sqr(1.1-sample);\n' + 'fdx=-.25*pow(1-sample,-.5)*c-c2*s*3.1415*t1*inv;\n' + 'fdy=-.3125*c2*s+3.9268*c2*c*t1*inv;\n' + 'invMag=1/sqrt(sqr(fdx)+sqr(fdy));\n' + 'fdx=fdx*invMag;\n' + 'fdy=fdy*invMag;\n' + 'rdx=fdx*cos(1.5707+t2)-fdy*sin(1.5707+t2);\n' + 'rdy=fdx*sin(1.5707+t2)+fdx*cos(1.5707+t2);\n' + 'x=x+rdx*.15*(1-sample);\n' + 'y=y+rdy*.15*(1-sample);\n' + 'x=x*.55;\n' + 'y=(y-.5)*.55+.5;\n' + 'r=sample;\n' + 'g=1-sample;\n' + 'b=1;\n' + 'a=below(sample,.995);\n' + 'd=above(q3-sample,0)*below(q3-sample,.4)*(sample-q3)*2.5;\n' + 'd=sqrt(d)*(1-sqrt((sample-q3)*2.5));\n' + 'a=a*(1-d);\n' + 'y=y+t3;'),

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
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.ddtan = 0;
m.t6 = 0;
m.invmag = 0;
m.c = 0;
m.t7 = 0;
m.t8 = 0;
m.rdx = 0;
m.rdy = 0;
m.ox = 0;
m.oy = 0;
m.c1 = 0;
m.c2 = 0;
m.val1 = 0;
m.val2 = 0;
m.inv = 0;
m.s = 0;
m.ddx = 0;
m.ddy = 0;
m.fdx = 0;
m.fdy = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['sample'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t7 = 0.0;
m.t8 = 0.45;
m.ddx = ((0.25*Math.cos((5.7119*m.t1)))+((2.5963*m.t1)*Math.sin((5.7119*m.t1))));
m.ddy = ((0.3125*Math.sin((5.7119*m.t1)))-((3.2453*m.t1)*Math.cos((5.7119*m.t1))));
m.ddtan = Math.atan2(m.ddy, m.ddx);
m.t2 = -m.ddtan;
m.val1 = (((-0.5*Math.cos((5.7119*m.t1)))*Math.cos(m.t2))-((-0.625*Math.sin((5.7119*m.t1)))*Math.sin(m.t2)));
m.val2 = (((-0.5*Math.cos((5.7119*m.t1)))*Math.sin(m.t2))+((-0.625*Math.sin((5.7119*m.t1)))*Math.cos(m.t2)));
m.t6 = -sign(m.t1);
m.t7 = (m.t7-m.val1);
m.t8 = (m.t8-m.val2);
m.t3 = m.q2;
		return m;
	},
		'point_eqs' : function(m) {
m.sample = pow(m.sample, 0.85);
m.c1 = div((6.2831*m.t1),(1.1-m.sample));
m.c = Math.cos(m.c1);
m.s = Math.sin(m.c1);
m.c2 = sqrt((1-m.sample));
m.ox = (m.t7-((0.5*m.c2)*m.c));
m.oy = (m.t8-((0.625*m.c2)*m.s));
m.x = (m.t7+(((m.ox-m.t7)*Math.cos(m.t2))-((m.oy-m.t8)*Math.sin(m.t2))));
m.y = (m.t8+(((m.ox-m.t7)*Math.sin(m.t2))+((m.oy-m.t8)*Math.cos(m.t2))));
m.inv = div(1,sqr((1.1-m.sample)));
m.fdx = (((-0.25*pow((1-m.sample), -0.5))*m.c)-((((m.c2*m.s)*3.1415)*m.t1)*m.inv));
m.fdy = (((-0.3125*m.c2)*m.s)+((((3.9268*m.c2)*m.c)*m.t1)*m.inv));
m.invmag = div(1,sqrt((sqr(m.fdx)+sqr(m.fdy))));
m.fdx = (m.fdx*m.invmag);
m.fdy = (m.fdy*m.invmag);
m.rdx = ((m.fdx*Math.cos((1.5707+m.t2)))-(m.fdy*Math.sin((1.5707+m.t2))));
m.rdy = ((m.fdx*Math.sin((1.5707+m.t2)))+(m.fdx*Math.cos((1.5707+m.t2))));
m.tt = div(rand(100),100);
m.x = (m.x+((m.rdx*(0.15*m.tt))*(1-m.sample)));
m.y = (m.y+((m.rdy*(0.15*m.tt))*(1-m.sample)));
m.x = (m.x*0.55);
m.y = (((m.y-0.5)*0.55)+0.5);
m.r = m.sample;
m.g = (1-m.sample);
m.b = 1;
m.a = below(m.sample, 0.995);
m.y = (m.y+m.t3);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=q1;\n' + 't7=.0;\n' + 't8=.45;\n' + 'ddx=.25*cos(5.7119*t1)+2.5963*t1*sin(5.7119*t1);\n' + 'ddy=.3125*sin(5.7119*t1)-3.2453*t1*cos(5.7119*t1);\n' + 'ddtan=atan2(ddy,ddx);\n' + 't2=-ddtan;\n' + 'val1=((-.5*cos(5.7119*t1))*cos(t2)-(-.625*sin(5.7119*t1))*sin(t2));\n' + 'val2=((-.5*cos(5.7119*t1))*sin(t2)+(-.625*sin(5.7119*t1))*cos(t2));\n' + 't6=-sign(t1);\n' + 't7=t7-val1;\n' + 't8=t8-val2;\n' + 't3=q2;'),
		'point_eqs_str' : ('sample=pow(sample,.85);\n' + 'c1=6.2831*t1/(1.1-sample);\n' + 'c=cos(c1);\n' + 's=sin(c1);\n' + 'c2=sqrt(1-sample);\n' + 'ox=t7-.5*c2*c;\n' + 'oy=t8-.625*c2*s;\n' + 'x=t7+((ox-t7)*cos(t2)-(oy-t8)*sin(t2));\n' + 'y=t8+((ox-t7)*sin(t2)+(oy-t8)*cos(t2));\n' + 'inv=1/sqr(1.1-sample);\n' + 'fdx=-.25*pow(1-sample,-.5)*c-c2*s*3.1415*t1*inv;\n' + 'fdy=-.3125*c2*s+3.9268*c2*c*t1*inv;\n' + 'invMag=1/sqrt(sqr(fdx)+sqr(fdy));\n' + 'fdx=fdx*invMag;\n' + 'fdy=fdy*invMag;\n' + 'rdx=fdx*cos(1.5707+t2)-fdy*sin(1.5707+t2);\n' + 'rdy=fdx*sin(1.5707+t2)+fdx*cos(1.5707+t2);\n' + 'tt=rand(100)/100;\n' + 'x=x+rdx*(.15*tt)*(1-sample);\n' + 'y=y+rdy*(.15*tt)*(1-sample);\n' + 'x=x*.55;\n' + 'y=(y-.5)*.55+.5;\n' + 'r=sample;\n' + 'g=1-sample;\n' + 'b=1;\n' + 'a=below(sample,.995);\n' + 'y=y+t3;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 100.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.ddtan = 0;
m.q3 = 0;
m.t6 = 0;
m.invmag = 0;
m.c = 0;
m.t7 = 0;
m.d = 0;
m.t8 = 0;
m.rdx = 0;
m.rdy = 0;
m.ox = 0;
m.oy = 0;
m.c1 = 0;
m.c2 = 0;
m.val1 = 0;
m.val2 = 0;
m.inv = 0;
m.s = 0;
m.ddx = 0;
m.ddy = 0;
m.fdx = 0;
m.fdy = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t7 = 0.0;
m.t8 = 0.45;
m.ddx = ((0.25*Math.cos((5.7119*m.t1)))+((2.5963*m.t1)*Math.sin((5.7119*m.t1))));
m.ddy = ((0.3125*Math.sin((5.7119*m.t1)))-((3.2453*m.t1)*Math.cos((5.7119*m.t1))));
m.ddtan = Math.atan2(m.ddy, m.ddx);
m.t2 = -m.ddtan;
m.val1 = (((-0.5*Math.cos((5.7119*m.t1)))*Math.cos(m.t2))-((-0.625*Math.sin((5.7119*m.t1)))*Math.sin(m.t2)));
m.val2 = (((-0.5*Math.cos((5.7119*m.t1)))*Math.sin(m.t2))+((-0.625*Math.sin((5.7119*m.t1)))*Math.cos(m.t2)));
m.t6 = -sign(m.t1);
m.t7 = (m.t7-m.val1);
m.t8 = (m.t8-m.val2);
m.t3 = m.q2;
m.t5 = (-1+(2*mod(m.frame,2)));
m.t4 = 0.4;
		return m;
	},
		'point_eqs' : function(m) {
m.c1 = div((6.2831*m.t1),(1.1-m.sample));
m.c = Math.cos(m.c1);
m.s = Math.sin(m.c1);
m.c2 = sqrt((1-m.sample));
m.ox = (m.t7-((0.5*m.c2)*m.c));
m.oy = (m.t8-((0.625*m.c2)*m.s));
m.x = (m.t7+(((m.ox-m.t7)*Math.cos(m.t2))-((m.oy-m.t8)*Math.sin(m.t2))));
m.y = (m.t8+(((m.ox-m.t7)*Math.sin(m.t2))+((m.oy-m.t8)*Math.cos(m.t2))));
m.inv = div(1,sqr((1.1-m.sample)));
m.fdx = (((-0.25*pow((1-m.sample), -0.5))*m.c)-((((m.c2*m.s)*3.1415)*m.t1)*m.inv));
m.fdy = (((-0.3125*m.c2)*m.s)+((((3.9268*m.c2)*m.c)*m.t1)*m.inv));
m.invmag = div(1,sqrt((sqr(m.fdx)+sqr(m.fdy))));
m.fdx = (m.fdx*m.invmag);
m.fdy = (m.fdy*m.invmag);
m.rdx = ((m.fdx*Math.cos((1.5707+m.t2)))-(m.fdy*Math.sin((1.5707+m.t2))));
m.rdy = ((m.fdx*Math.sin((1.5707+m.t2)))+(m.fdx*Math.cos((1.5707+m.t2))));
m.x = (m.x+((((m.t5*m.rdx)*0.15)*(1-m.sample))*(equal(m.t5, 1)+Math.abs((m.value1+m.value2)))));
m.y = (m.y+((((m.t5*m.rdy)*0.15)*(1-m.sample))*(equal(m.t5, 1)+Math.abs((m.value1+m.value2)))));
m.x = (m.x*0.55);
m.y = (((m.y-0.5)*0.55)+0.5);
m.r = 1;
m.g = 1;
m.b = 0;
m.a = below(m.sample, 0.995);
m.d = div(((above((m.q3-m.sample), 0)*below((m.q3-m.sample), m.t4))*(m.sample-m.q3)),m.t4);
m.d = (sqrt(m.d)*(1-sqrt(div((m.sample-m.q3),m.t4))));
m.a = (m.a*m.d);
m.y = (m.y+m.t3);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=q1;\n' + 't7=.0;\n' + 't8=.45;\n' + 'ddx=.25*cos(5.7119*t1)+2.5963*t1*sin(5.7119*t1);\n' + 'ddy=.3125*sin(5.7119*t1)-3.2453*t1*cos(5.7119*t1);\n' + 'ddtan=atan2(ddy,ddx);\n' + 't2=-ddtan;\n' + 'val1=((-.5*cos(5.7119*t1))*cos(t2)-(-.625*sin(5.7119*t1))*sin(t2));\n' + 'val2=((-.5*cos(5.7119*t1))*sin(t2)+(-.625*sin(5.7119*t1))*cos(t2));\n' + 't6=-sign(t1);\n' + 't7=t7-val1;\n' + 't8=t8-val2;\n' + 't3=q2;\n' + 't5=-1+2*(frame%2);\n' + 't4=.4;'),
		'point_eqs_str' : ('c1=6.2831*t1/(1.1-sample);\n' + 'c=cos(c1);\n' + 's=sin(c1);\n' + 'c2=sqrt(1-sample);\n' + 'ox=t7-.5*c2*c;\n' + 'oy=t8-.625*c2*s;\n' + 'x=t7+((ox-t7)*cos(t2)-(oy-t8)*sin(t2));\n' + 'y=t8+((ox-t7)*sin(t2)+(oy-t8)*cos(t2));\n' + 'inv=1/sqr(1.1-sample);\n' + 'fdx=-.25*pow(1-sample,-.5)*c-c2*s*3.1415*t1*inv;\n' + 'fdy=-.3125*c2*s+3.9268*c2*c*t1*inv;\n' + 'invMag=1/sqrt(sqr(fdx)+sqr(fdy));\n' + 'fdx=fdx*invMag;\n' + 'fdy=fdy*invMag;\n' + 'rdx=fdx*cos(1.5707+t2)-fdy*sin(1.5707+t2);\n' + 'rdy=fdx*sin(1.5707+t2)+fdx*cos(1.5707+t2);\n' + 'x=x+t5*rdx*.15*(1-sample)*(equal(t5,1)+abs(value1+value2));\n' + 'y=y+t5*rdy*.15*(1-sample)*(equal(t5,1)+abs(value1+value2));\n' + 'x=x*.55;\n' + 'y=(y-.5)*.55+.5;\n' + 'r=1;\n' + 'g=1;\n' + 'b=0;\n' + 'a=below(sample,.995);\n' + 'd=above(q3-sample,0)*below(q3-sample,t4)*(sample-q3)/t4;\n' + 'd=sqrt(d)*(1-sqrt((sample-q3)/t4));\n' + 'a=a*d;\n' + 'y=y+t3;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.t5 = 0;
m.ddtan = 0;
m.q3 = 0;
m.t6 = 0;
m.invmag = 0;
m.c = 0;
m.t7 = 0;
m.t8 = 0;
m.rdx = 0;
m.rdy = 0;
m.ox = 0;
m.sample = 0;
m.oy = 0;
m.c1 = 0;
m.c2 = 0;
m.c3 = 0;
m.val1 = 0;
m.val2 = 0;
m.s = 0;
m.ddx = 0;
m.ddy = 0;
m.fdx = 0;
m.fdy = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t7 = 0.0;
m.t8 = 0.45;
m.ddx = ((0.25*Math.cos((5.7119*m.t1)))+((2.5963*m.t1)*Math.sin((5.7119*m.t1))));
m.ddy = ((0.3125*Math.sin((5.7119*m.t1)))-((3.2453*m.t1)*Math.cos((5.7119*m.t1))));
m.ddtan = Math.atan2(m.ddy, m.ddx);
m.t2 = -m.ddtan;
m.val1 = (((-0.5*Math.cos((5.7119*m.t1)))*Math.cos(m.t2))-((-0.625*Math.sin((5.7119*m.t1)))*Math.sin(m.t2)));
m.val2 = (((-0.5*Math.cos((5.7119*m.t1)))*Math.sin(m.t2))+((-0.625*Math.sin((5.7119*m.t1)))*Math.cos(m.t2)));
m.t6 = -sign(m.t1);
m.t7 = (m.t7-m.val1);
m.t8 = (m.t8-m.val2);
m.t5 = mod(m.frame,2);
m.sample = m.q3;
m.rad = (((m.t5*0.15)+((1-m.t5)*0.3))*(1.1-m.sample));
m.sides = ((m.t5*100)+((1-m.t5)*4));
m.ang = ((4*6.2831)*sqrt(m.sample));
m.a = 1;
m.c1 = div((6.2831*m.t1),(1.1-m.sample));
m.c = Math.cos(m.c1);
m.s = Math.sin(m.c1);
m.c2 = sqrt((1-m.sample));
m.c3 = div(m.t1,sqr((1.1-m.sample)));
m.ox = (m.t7-((0.5*m.c2)*m.c));
m.oy = (m.t8-((0.625*m.c2)*m.s));
m.x = (m.t7+(((m.ox-m.t7)*Math.cos(m.t2))-((m.oy-m.t8)*Math.sin(m.t2))));
m.y = (m.t8+(((m.ox-m.t7)*Math.sin(m.t2))+((m.oy-m.t8)*Math.cos(m.t2))));
m.fdx = (((-0.25*pow((1-m.sample), -0.5))*m.c)-(((3.1415*m.c2)*m.s)*m.c3));
m.fdy = (((-0.3125*m.c2)*m.s)+(((1.9634*m.c2)*m.c)*m.c3));
m.invmag = div(1,sqrt((sqr(m.fdx)+sqr(m.fdy))));
m.fdx = (m.fdx*m.invmag);
m.fdy = (m.fdy*m.invmag);
m.rdx = ((m.fdx*Math.cos((1.5707+m.t2)))-(m.fdy*Math.sin((1.5707+m.t2))));
m.rdy = ((m.fdx*Math.sin((1.5707+m.t2)))+(m.fdx*Math.cos((1.5707+m.t2))));
m.x = (m.x+((m.rdx*0.152)*sqrt((0.995-m.sample))));
m.y = (m.y+((m.rdy*0.152)*sqrt((0.995-m.sample))));
m.x = (((m.x-0)*0.55)+0);
m.y = (((m.y-0.5)*0.55)+0.5);
m.y = (m.y+m.q2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=q1;\n' + 't7=.0;\n' + 't8=.45;\n' + 'ddx=.25*cos(5.7119*t1)+2.5963*t1*sin(5.7119*t1);\n' + 'ddy=.3125*sin(5.7119*t1)-3.2453*t1*cos(5.7119*t1);\n' + 'ddtan=atan2(ddy,ddx);\n' + 't2=-ddtan;\n' + 'val1=((-.5*cos(5.7119*t1))*cos(t2)-(-.625*sin(5.7119*t1))*sin(t2));\n' + 'val2=((-.5*cos(5.7119*t1))*sin(t2)+(-.625*sin(5.7119*t1))*cos(t2));\n' + 't6=-sign(t1);\n' + 't7=t7-val1;\n' + 't8=t8-val2;\n' + 't5=frame%2;\n' + 'sample=q3;\n' + 'rad=(t5*.15+(1-t5)*.3)*(1.1-sample);\n' + 'sides=t5*100+(1-t5)*4;\n' + 'ang=4*6.2831*sqrt(sample);\n' + 'a=1;\n' + 'c1=6.2831*t1/(1.1-sample);\n' + 'c=cos(c1);\n' + 's=sin(c1);\n' + 'c2=sqrt(1-sample);\n' + 'c3=t1/sqr(1.1-sample);\n' + 'ox=t7-.5*c2*c;\n' + 'oy=t8-.625*c2*s;\n' + 'x=t7+((ox-t7)*cos(t2)-(oy-t8)*sin(t2));\n' + 'y=t8+((ox-t7)*sin(t2)+(oy-t8)*cos(t2));\n' + 'fdx=-.25*pow(1-sample,-.5)*c-3.1415*c2*s*c3;\n' + 'fdy=-.3125*c2*s+1.9634*c2*c*c3;\n' + 'invMag=1/sqrt(sqr(fdx)+sqr(fdy));\n' + 'fdx=fdx*invMag;\n' + 'fdy=fdy*invMag;\n' + 'rdx=fdx*cos(1.5707+t2)-fdy*sin(1.5707+t2);\n' + 'rdy=fdx*sin(1.5707+t2)+fdx*cos(1.5707+t2);\n' + 'x=x+rdx*.152*sqrt(.995-sample);\n' + 'y=y+rdy*.152*sqrt(.995-sample);\n' + 'x=(x-0)*.55+0;\n' + 'y=(y-.5)*.55+.5;\n' + 'y=y+q2;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.t5 = 0;
m.ddtan = 0;
m.q3 = 0;
m.t6 = 0;
m.invmag = 0;
m.c = 0;
m.t7 = 0;
m.t8 = 0;
m.rdx = 0;
m.rdy = 0;
m.ox = 0;
m.sample = 0;
m.oy = 0;
m.c1 = 0;
m.c2 = 0;
m.c3 = 0;
m.val1 = 0;
m.val2 = 0;
m.s = 0;
m.ddx = 0;
m.ddy = 0;
m.fdx = 0;
m.fdy = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t7 = 0.0;
m.t8 = 0.45;
m.ddx = ((0.25*Math.cos((5.7119*m.t1)))+((2.5963*m.t1)*Math.sin((5.7119*m.t1))));
m.ddy = ((0.3125*Math.sin((5.7119*m.t1)))-((3.2453*m.t1)*Math.cos((5.7119*m.t1))));
m.ddtan = Math.atan2(m.ddy, m.ddx);
m.t2 = -m.ddtan;
m.val1 = (((-0.5*Math.cos((5.7119*m.t1)))*Math.cos(m.t2))-((-0.625*Math.sin((5.7119*m.t1)))*Math.sin(m.t2)));
m.val2 = (((-0.5*Math.cos((5.7119*m.t1)))*Math.sin(m.t2))+((-0.625*Math.sin((5.7119*m.t1)))*Math.cos(m.t2)));
m.t6 = -sign(m.t1);
m.t7 = (m.t7-m.val1);
m.t8 = (m.t8-m.val2);
m.t5 = mod(m.frame,2);
m.sample = m.q3;
m.rad = (((m.t5*0.15)+((1-m.t5)*0.3))*(1.1-m.sample));
m.sides = ((m.t5*100)+((1-m.t5)*4));
m.ang = ((4*6.2831)*sqrt(m.sample));
m.a = 1;
m.c1 = div((6.2831*m.t1),(1.1-m.sample));
m.c = Math.cos(m.c1);
m.s = Math.sin(m.c1);
m.c2 = sqrt((1-m.sample));
m.c3 = div(m.t1,sqr((1.1-m.sample)));
m.ox = (m.t7-((0.5*m.c2)*m.c));
m.oy = (m.t8-((0.625*m.c2)*m.s));
m.x = (m.t7+(((m.ox-m.t7)*Math.cos(m.t2))-((m.oy-m.t8)*Math.sin(m.t2))));
m.y = (m.t8+(((m.ox-m.t7)*Math.sin(m.t2))+((m.oy-m.t8)*Math.cos(m.t2))));
m.fdx = (((-0.25*pow((1-m.sample), -0.5))*m.c)-(((3.1415*m.c2)*m.s)*m.c3));
m.fdy = (((-0.3125*m.c2)*m.s)+(((1.9634*m.c2)*m.c)*m.c3));
m.invmag = div(1,sqrt((sqr(m.fdx)+sqr(m.fdy))));
m.fdx = (m.fdx*m.invmag);
m.fdy = (m.fdy*m.invmag);
m.rdx = ((m.fdx*Math.cos((1.5707+m.t2)))-(m.fdy*Math.sin((1.5707+m.t2))));
m.rdy = ((m.fdx*Math.sin((1.5707+m.t2)))+(m.fdx*Math.cos((1.5707+m.t2))));
m.x = (m.x+((m.rdx*-0.075)*sqrt((0.995-m.sample))));
m.y = (m.y+((m.rdy*-0.075)*sqrt((0.995-m.sample))));
m.x = (((m.x-0)*0.55)+0);
m.y = (((m.y-0.5)*0.55)+0.5);
m.y = (m.y+m.q2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=q1;\n' + 't7=.0;\n' + 't8=.45;\n' + 'ddx=.25*cos(5.7119*t1)+2.5963*t1*sin(5.7119*t1);\n' + 'ddy=.3125*sin(5.7119*t1)-3.2453*t1*cos(5.7119*t1);\n' + 'ddtan=atan2(ddy,ddx);\n' + 't2=-ddtan;\n' + 'val1=((-.5*cos(5.7119*t1))*cos(t2)-(-.625*sin(5.7119*t1))*sin(t2));\n' + 'val2=((-.5*cos(5.7119*t1))*sin(t2)+(-.625*sin(5.7119*t1))*cos(t2));\n' + 't6=-sign(t1);\n' + 't7=t7-val1;\n' + 't8=t8-val2;\n' + 't5=frame%2;\n' + 'sample=q3;\n' + 'rad=(t5*.15+(1-t5)*.3)*(1.1-sample);\n' + 'sides=t5*100+(1-t5)*4;\n' + 'ang=4*6.2831*sqrt(sample);\n' + 'a=1;\n' + 'c1=6.2831*t1/(1.1-sample);\n' + 'c=cos(c1);\n' + 's=sin(c1);\n' + 'c2=sqrt(1-sample);\n' + 'c3=t1/sqr(1.1-sample);\n' + 'ox=t7-.5*c2*c;\n' + 'oy=t8-.625*c2*s;\n' + 'x=t7+((ox-t7)*cos(t2)-(oy-t8)*sin(t2));\n' + 'y=t8+((ox-t7)*sin(t2)+(oy-t8)*cos(t2));\n' + 'fdx=-.25*pow(1-sample,-.5)*c-3.1415*c2*s*c3;\n' + 'fdy=-.3125*c2*s+1.9634*c2*c*c3;\n' + 'invMag=1/sqrt(sqr(fdx)+sqr(fdy));\n' + 'fdx=fdx*invMag;\n' + 'fdy=fdy*invMag;\n' + 'rdx=fdx*cos(1.5707+t2)-fdy*sin(1.5707+t2);\n' + 'rdy=fdx*sin(1.5707+t2)+fdx*cos(1.5707+t2);\n' + 'x=x+rdx*-.075*sqrt(.995-sample);\n' + 'y=y+rdy*-.075*sqrt(.995-sample);\n' + 'x=(x-0)*.55+0;\n' + 'y=(y-.5)*.55+.5;\n' + 'y=y+q2;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.651899,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.5277,
			x : 0.5,
			y : 0.5,
			ang : 3.141594,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = 3.1415;
m.additive = equal(mod(m.frame,20), 0);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=3.1415;\n' + 'additive=equal(frame%20,0);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.3448,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.5,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.099979,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (6.2831*((0.02*m.time)-Math.floor((0.02*m.time))));
m.r = Math.abs(Math.cos((((2.43*m.time)+4.343)+Math.sin(((1.754*m.time)+0.753)))));
m.g = Math.abs(Math.cos((((1.95*m.time)+0.932)+Math.cos(((2.254*m.time)+3.534)))));
m.b = Math.abs(Math.sin((((1.95*m.time)+0.932)+Math.cos(((2.254*m.time)+3.534)))));
m.r2 = (1-m.r);
m.g2 = (1-m.g);
m.b2 = (1-m.b);
m.additive = mod(m.frame,2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=6.2831*(.02*time-int(.02*time));\n' + 'r=abs(cos(2.43*time+4.343+sin(1.754*time+.753)));\n' + 'g=abs(cos(1.95*time+.932+cos(2.254*time+3.534)));\n' + 'b=abs(sin(1.95*time+.932+cos(2.254*time+3.534)));\n' + 'r2=1-r;\n' + 'g2=1-g;\n' + 'b2=1-b;\n' + 'additive=frame%2;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('zoom=1;\n' + 'warp=0;\n' + 'ib_size=0;\n' + 'ib_a=0;\n' + 'ob_size=1;\n' + 'ob_a=.01+.02*(FPS/100);\n' + 'vol=min(.99*vol+.01*(bass+mid+treb),3);\n' + 'c1=.333*(vol+1)*time+3.34;\n' + 'c2=.87*time+2.97;\n' + 'ob_r=abs(cos(c1+sin(c2)));\n' + 'ob_g=abs(sin(c1+cos(c2)));\n' + 'ob_b=abs(sin(c1+sin(c2)));\n' + 'q1=.18*cos(.354*time+.54+cos(.521*time+1.432));\n' + 'q2=.075;\n' + 'q3=sqrt(.995*(.5*time-int(.5*time)));'),
	'pixel_eqs_str' : ('zoom=zoom+below(rad,.45)*sqr(1-rad/.45)*5;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 20.16,
		wave_scale : 1.286,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.08925,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.00001,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.0,
		wave_smoothing : 0.63,
		warpanimspeed : 0.626,
		wave_dots : 0.0,
		mv_g : 0.4,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99951,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.4,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.bounce = 0;
m.ref_ang = 0;
m.vy1 = 0;
m.vx1 = 0;
m.vy2 = 0;
m.vx2 = 0;
m.vy3 = 0;
m.q10 = 0;
m.vx3 = 0;
m.q11 = 0;
m.r = 0;
m.q12 = 0;
m.q13 = 0;
m.q14 = 0;
m.vr1 = 0;
m.vr2 = 0;
m.v2r = 0;
m.vr3 = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.w1 = 0;
m.x2 = 0;
m.y3 = 0;
m.v1 = 0;
m.w2 = 0;
m.x3 = 0;
m.v2 = 0;
m.vr = 0;
m.x1 = 0.5;
m.y1 = 0.6;
m.x2 = 0.9;
m.y2 = 0.14;
m.x3 = 0.5;
m.y3 = 0.2;
m.vr1 = 0.50001;
m.vr2 = 0.0;
m.vr3 = 0.0;
m.vx1 = 0;
m.vx2 = 0.4;
m.vx3 = 0.9;
		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = 1;
m.warp = 0.01;
m.wave_a = 1;
m.r = (0.04+((m.bass_att+m.treb_att)*0.01));
m.monitor = m.aspecty;
m.vr = (Math.sin(m.vr1)*m.r);
m.bounce = below(m.y1, (m.r-((m.aspectx-1)*0.5)));
m.y1 = (m.y1+m.vy1);
m.vy1 = ifcond(m.bounce, ((Math.abs(m.vy1)*0.96)+(((m.r-m.y1)-((m.aspectx-1)*0.5))*0.1)), (m.vy1-div((0.0003*60),m.fps)));
m.vx1 = ifcond(m.bounce, (m.vx1+((m.vr-m.vx1)*0.15)), m.vx1);
m.vr = ifcond(m.bounce, (m.vr+((m.vx1-m.vr)*0.85)), m.vr);
m.vr1 = Math.asin(div(m.vr,m.r));
m.bounce = above(m.x1, ((1-m.r)+((m.aspecty-1)*0.5)));
m.vx1 = ifcond(m.bounce, ((-Math.abs(m.vx1)*0.96)+((((1-m.r)-m.x1)+((m.aspecty-1)*0.5))*0.1)), m.vx1);
m.vy1 = ifcond(m.bounce, (m.vy1+((m.vr-m.vy1)*0.15)), m.vy1);
m.vr = ifcond(m.bounce, (m.vr+((m.vy1-m.vr)*0.85)), m.vr);
m.vr1 = Math.asin(div(m.vr,m.r));
m.bounce = below(m.x1, (m.r-((m.aspecty-1)*0.5)));
m.x1 = (m.x1+m.vx1);
m.vx1 = ifcond(m.bounce, ((Math.abs(m.vx1)*0.96)+(((m.r-m.x1)-((m.aspecty-1)*0.5))*0.1)), m.vx1);
m.vy1 = ifcond(m.bounce, (m.vy1+((-m.vr-m.vy1)*0.15)), m.vy1);
m.vr = ifcond(m.bounce, (m.vr-((m.vy1+m.vr)*0.85)), m.vr);
m.vr1 = Math.asin(div(m.vr,m.r));
m.vr = (Math.sin(m.vr2)*m.r);
m.bounce = below(m.y2, (m.r-((m.aspectx-1)*0.5)));
m.y2 = (m.y2+m.vy2);
m.vy2 = ifcond(m.bounce, ((Math.abs(m.vy2)*0.96)+(((m.r-m.y2)-((m.aspectx-1)*0.5))*0.1)), (m.vy2-div((0.0003*60),m.fps)));
m.vx2 = ifcond(m.bounce, (m.vx2+((m.vr-m.vx2)*0.15)), m.vx2);
m.vr = ifcond(m.bounce, (m.vr+((m.vx2-m.vr)*0.85)), m.vr);
m.vr2 = Math.asin(div(m.vr,m.r));
m.bounce = above(m.x2, ((1-m.r)+((m.aspecty-1)*0.5)));
m.vx2 = ifcond(m.bounce, ((-Math.abs(m.vx2)*0.96)+((((1-m.r)-m.x2)+((m.aspecty-1)*0.5))*0.1)), m.vx2);
m.vy2 = ifcond(m.bounce, (m.vy2+((m.vr-m.vy2)*0.15)), m.vy2);
m.vr = ifcond(m.bounce, (m.vr+((m.vy2-m.vr)*0.85)), m.vr);
m.vr2 = Math.asin(div(m.vr,m.r));
m.bounce = below(m.x2, (m.r-((m.aspecty-1)*0.5)));
m.x2 = (m.x2+m.vx2);
m.vx2 = ifcond(m.bounce, ((Math.abs(m.vx2)*0.96)+(((m.r-m.x2)-((m.aspecty-1)*0.5))*0.1)), m.vx2);
m.vy2 = ifcond(m.bounce, (m.vy2+((-m.vr-m.vy2)*0.15)), m.vy2);
m.vr = ifcond(m.bounce, (m.vr-((m.vy2+m.vr)*0.85)), m.vr);
m.vr2 = Math.asin(div(m.vr,m.r));
m.vr = (Math.sin(m.vr3)*m.r);
m.bounce = below(m.y3, (m.r-((m.aspectx-1)*0.5)));
m.y3 = (m.y3+m.vy3);
m.vy3 = ifcond(m.bounce, ((Math.abs(m.vy3)*0.96)+(((m.r-m.y3)-((m.aspectx-1)*0.5))*0.1)), (m.vy3-div((0.0003*60),m.fps)));
m.vx3 = ifcond(m.bounce, (m.vx3+((m.vr-m.vx3)*0.15)), m.vx3);
m.vr = ifcond(m.bounce, (m.vr+((m.vx3-m.vr)*0.85)), m.vr);
m.vr3 = Math.asin(div(m.vr,m.r));
m.bounce = above(m.x3, ((1-m.r)+((m.aspecty-1)*0.5)));
m.vx3 = ifcond(m.bounce, ((-Math.abs(m.vx3)*0.96)+((((1-m.r)-m.x3)+((m.aspecty-1)*0.5))*0.1)), m.vx3);
m.vy3 = ifcond(m.bounce, (m.vy3+((m.vr-m.vy3)*0.15)), m.vy3);
m.vr = ifcond(m.bounce, (m.vr+((m.vy3-m.vr)*0.85)), m.vr);
m.vr3 = Math.asin(div(m.vr,m.r));
m.bounce = below(m.x3, (m.r-((m.aspecty-1)*0.5)));
m.x3 = (m.x3+m.vx3);
m.vx3 = ifcond(m.bounce, ((Math.abs(m.vx3)*0.96)+(((m.r-m.x3)-((m.aspecty-1)*0.5))*0.1)), m.vx3);
m.vy3 = ifcond(m.bounce, (m.vy3+((-m.vr-m.vy3)*0.15)), m.vy3);
m.vr = ifcond(m.bounce, (m.vr-((m.vy3+m.vr)*0.85)), m.vr);
m.vr3 = Math.asin(div(m.vr,m.r));
m.bounce = below(sqrt((sqr((((m.x1+m.vx1)-m.x2)-m.vx2))+sqr((((m.y1+m.vy1)-m.y2)-m.vy2)))), (2*m.r));
m.bounce = (m.bounce*below(sqrt((sqr((((m.x1+m.vx1)-m.x2)-m.vx2))+sqr((((m.y1+m.vy1)-m.y2)-m.vy2)))), sqrt((sqr((m.x1-m.x2))+sqr((m.y1-m.y2))))));
m.ref_ang = (Math.atan2((m.x2-m.x1), (m.y2-m.y1))+Math.asin(1));
m.v1 = sqrt(((m.vx1*m.vx1)+(m.vy1*m.vy1)));
m.v2 = sqrt(((m.vx2*m.vx2)+(m.vy2*m.vy2)));
m.w1 = Math.atan2(m.vx1, m.vy1);
m.w2 = Math.atan2(m.vx2, m.vy2);
m.vr = (Math.sin(m.vr1)*m.r);
m.v2r = (Math.sin(m.vr2)*m.r);
m.vx1 = ifcond(m.bounce, ((((Math.sin(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+(((m.vr-m.v2r)-((Math.sin(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang))))*0.1))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vx1);
m.vy1 = ifcond(m.bounce, ((((Math.cos(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+(((m.vr-m.v2r)-((Math.cos(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang))))*0.1))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vy1);
m.vx2 = ifcond(m.bounce, ((((Math.sin(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+(((m.v2r-m.vr)-((Math.sin(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang))))*0.1))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vx2);
m.vy2 = ifcond(m.bounce, ((((Math.cos(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+(((m.v2r-m.vr)-((Math.cos(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang))))*0.1))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vy2);
m.vr = ifcond(m.bounce, (m.vr+(((Math.cos((m.w1-m.ref_ang))*(m.v1-m.v2))-m.vr)*0.9)), m.vr);
m.vr1 = Math.asin(div(m.vr,m.r));
m.v2r = ifcond(m.bounce, (m.v2r+(((Math.cos((m.w2-m.ref_ang))*(m.v2-m.v1))-m.v2r)*0.9)), m.v2r);
m.vr2 = Math.asin(div(m.v2r,m.r));
m.bounce = below(sqrt((sqr((((m.x1+m.vx1)-m.x3)-m.vx3))+sqr((((m.y1+m.vy1)-m.y3)-m.vy3)))), (2*m.r));
m.bounce = (m.bounce*below(sqrt((sqr((((m.x1+m.vx1)-m.x3)-m.vx3))+sqr((((m.y1+m.vy1)-m.y3)-m.vy3)))), sqrt((sqr((m.x1-m.x3))+sqr((m.y1-m.y3))))));
m.ref_ang = (Math.atan2((m.x3-m.x1), (m.y3-m.y1))+Math.asin(1));
m.v1 = sqrt(((m.vx1*m.vx1)+(m.vy1*m.vy1)));
m.v2 = sqrt(((m.vx3*m.vx3)+(m.vy3*m.vy3)));
m.w1 = Math.atan2(m.vx1, m.vy1);
m.w2 = Math.atan2(m.vx3, m.vy3);
m.vr = (Math.sin(m.vr1)*m.r);
m.v2r = (Math.sin(m.vr3)*m.r);
m.vx1 = ifcond(m.bounce, ((((Math.sin(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+(((m.vr-m.v2r)-((Math.sin(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang))))*0.1))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vx1);
m.vy1 = ifcond(m.bounce, ((((Math.cos(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+(((m.vr-m.v2r)-((Math.cos(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang))))*0.1))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vy1);
m.vx3 = ifcond(m.bounce, ((((Math.sin(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+(((m.v2r-m.vr)-((Math.sin(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang))))*0.1))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vx3);
m.vy3 = ifcond(m.bounce, ((((Math.cos(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+(((m.v2r-m.vr)-((Math.cos(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang))))*0.1))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vy3);
m.vr = ifcond(m.bounce, (m.vr+(((Math.cos((m.w1-m.ref_ang))*(m.v1-m.v2))-m.vr)*0.9)), m.vr);
m.vr1 = Math.asin(div(m.vr,m.r));
m.v2r = ifcond(m.bounce, (m.v2r+(((Math.cos((m.w2-m.ref_ang))*(m.v2-m.v1))-m.v2r)*0.9)), m.v2r);
m.vr3 = Math.asin(div(m.v2r,m.r));
m.bounce = below(sqrt((sqr((((m.x3+m.vx3)-m.x2)-m.vx2))+sqr((((m.y3+m.vy3)-m.y2)-m.vy2)))), (2*m.r));
m.bounce = (m.bounce*below(sqrt((sqr((((m.x2+m.vx2)-m.x3)-m.vx3))+sqr((((m.y2+m.vy2)-m.y3)-m.vy3)))), sqrt((sqr((m.x2-m.x3))+sqr((m.y2-m.y3))))));
m.ref_ang = (Math.atan2((m.x2-m.x3), (m.y2-m.y3))+Math.asin(1));
m.v1 = sqrt(((m.vx3*m.vx3)+(m.vy3*m.vy3)));
m.v2 = sqrt(((m.vx2*m.vx2)+(m.vy2*m.vy2)));
m.w1 = Math.atan2(m.vx3, m.vy3);
m.w2 = Math.atan2(m.vx2, m.vy2);
m.vr = (Math.sin(m.vr3)*m.r);
m.v2r = (Math.sin(m.vr2)*m.r);
m.vx3 = ifcond(m.bounce, ((((Math.sin(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+(((m.vr-m.v2r)-((Math.sin(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang))))*0.1))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vx3);
m.vy3 = ifcond(m.bounce, ((((Math.cos(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+(((m.vr-m.v2r)-((Math.cos(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang))))*0.1))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vy3);
m.vx2 = ifcond(m.bounce, ((((Math.sin(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+(((m.v2r-m.vr)-((Math.sin(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang))))*0.1))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vx2);
m.vy2 = ifcond(m.bounce, ((((Math.cos(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+(((m.v2r-m.vr)-((Math.cos(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang))))*0.1))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vy2);
m.vr = ifcond(m.bounce, (m.vr+(((Math.cos((m.w1-m.ref_ang))*(m.v1-m.v2))-m.vr)*0.9)), m.vr);
m.vr3 = Math.asin(div(m.vr,m.r));
m.v2r = ifcond(m.bounce, (m.v2r+(((Math.cos((m.w2-m.ref_ang))*(m.v2-m.v1))-m.v2r)*0.9)), m.v2r);
m.vr2 = Math.asin(div(m.v2r,m.r));
m.q1 = m.aspectx;
m.q2 = m.aspecty;
m.q3 = (m.r*2);
m.q4 = m.x1;
m.q5 = m.y1;
m.q6 = m.vr1;
m.q7 = m.x2;
m.q8 = m.y2;
m.q9 = m.vr2;
m.q10 = m.x3;
m.q11 = m.y3;
m.q12 = m.vr3;
m.q13 = Math.atan2((div(((m.x1+m.x2)+m.x3),3)-0.5), (div(((m.y1+m.y2)+m.y3),3)-0.5));
m.q14 = (sigmoid(sqrt((sqr((div(((m.x1+m.x2)+m.x3),3)-0.5))+sqr((div(((m.y1+m.y2)+m.y3),3)-0.5)))), 2)*0.2);
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
m.mx = 0;
m.my = 0;
m.md = 0;
m.oldmd = 0;
m.ma = 0.5;
m.my = 0.5;
m.md = 0;
			m.rkeys = ['my','mx','md'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.oldmd = m.md;
m.md = mod((m.md+rand(4)),4);
m.md = ifcond(equal(m.md, m.oldmd), mod((m.md+1),4), m.md);
m.mx = (m.mx+((equal(m.md, 0)*0.002)*m.bass));
m.mx = (m.mx-((equal(m.md, 1)*0.002)*m.bass));
m.my = (m.my+((equal(m.md, 2)*0.002)*m.treb));
m.my = (m.my-((equal(m.md, 3)*0.002)*m.treb));
m.mx = ifcond(above(m.mx, 0.9), 0.5, m.mx);
m.mx = ifcond(below(m.mx, 0.1), 0.5, m.mx);
m.my = ifcond(above(m.my, 0.9), 0.5, m.my);
m.my = ifcond(below(m.my, 0.1), 0.5, m.my);
m.x = m.mx;
m.y = m.my;
m.a = (m.bass*0.1);
m.r = (m.bass*0.5);
		return m;
	},
		'init_eqs_str' : ('ma=.5;\n' + 'my=.5;\n' + 'md=0;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('oldmd=md;\n' + 'md=(md+rand(4))%4;\n' + 'md=if(equal(md,oldmd),(md+1)%4,md);\n' + 'mx=mx+(equal(md,0)*.002*bass);\n' + 'mx=mx-(equal(md,1)*.002*bass);\n' + 'my=my+(equal(md,2)*.002*treb);\n' + 'my=my-(equal(md,3)*.002*treb);\n' + 'mx=if(above(mx,.9),.5,mx);\n' + 'mx=if(below(mx,.1),.5,mx);\n' + 'my=if(above(my,.9),.5,my);\n' + 'my=if(below(my,.1),.5,my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=bass*.1;\n' + 'r=bass*.5;'),

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
m.mx = 0;
m.my = 0;
m.md = 0;
m.oldmd = 0;
m.mx = 0.5;
m.my = 0.5;
m.md = 1;
			m.rkeys = ['my','mx','md'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.oldmd = m.md;
m.md = mod((m.md+rand(4)),4);
m.md = ifcond(equal(m.md, m.oldmd), mod((m.md+1),4), m.md);
m.mx = (m.mx+((equal(m.md, 0)*0.002)*m.bass));
m.mx = (m.mx-((equal(m.md, 1)*0.002)*m.bass));
m.my = (m.my+((equal(m.md, 2)*0.002)*m.treb));
m.my = (m.my-((equal(m.md, 3)*0.002)*m.treb));
m.mx = ifcond(above(m.mx, 0.9), 0.5, m.mx);
m.mx = ifcond(below(m.mx, 0.1), 0.5, m.mx);
m.my = ifcond(above(m.my, 0.9), 0.5, m.my);
m.my = ifcond(below(m.my, 0.1), 0.5, m.my);
m.x = m.mx;
m.y = m.my;
m.a = (m.bass*0.1);
m.g = (m.treb*0.5);
		return m;
	},
		'init_eqs_str' : ('mx=.5;\n' + 'my=.5;\n' + 'md=1;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('oldmd=md;\n' + 'md=(md+rand(4))%4;\n' + 'md=if(equal(md,oldmd),(md+1)%4,md);\n' + 'mx=mx+(equal(md,0)*.002*bass);\n' + 'mx=mx-(equal(md,1)*.002*bass);\n' + 'my=my+(equal(md,2)*.002*treb);\n' + 'my=my-(equal(md,3)*.002*treb);\n' + 'mx=if(above(mx,.9),.5,mx);\n' + 'mx=if(below(mx,.1),.5,mx);\n' + 'my=if(above(my,.9),.5,my);\n' + 'my=if(below(my,.1),.5,my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=bass*.1;\n' + 'g=treb*.5;'),

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
m.mx = 0;
m.my = 0;
m.md = 0;
m.oldmd = 0;
m.mx = 0.5;
m.my = 0.5;
m.md = 2;
			m.rkeys = ['my','mx','md'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.oldmd = m.md;
m.md = mod((m.md+rand(4)),4);
m.md = ifcond(equal(m.md, m.oldmd), mod((m.md+1),4), m.md);
m.mx = (m.mx+((equal(m.md, 0)*0.002)*m.bass));
m.mx = (m.mx-((equal(m.md, 1)*0.002)*m.bass));
m.my = (m.my+((equal(m.md, 2)*0.002)*m.treb));
m.my = (m.my-((equal(m.md, 3)*0.002)*m.treb));
m.mx = ifcond(above(m.mx, 0.9), 0.5, m.mx);
m.mx = ifcond(below(m.mx, 0.1), 0.5, m.mx);
m.my = ifcond(above(m.my, 0.9), 0.5, m.my);
m.my = ifcond(below(m.my, 0.1), 0.5, m.my);
m.x = m.mx;
m.y = m.my;
m.a = (m.bass*0.1);
		return m;
	},
		'init_eqs_str' : ('mx=.5;\n' + 'my=.5;\n' + 'md=2;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('oldmd=md;\n' + 'md=(md+rand(4))%4;\n' + 'md=if(equal(md,oldmd),(md+1)%4,md);\n' + 'mx=mx+(equal(md,0)*.002*bass);\n' + 'mx=mx-(equal(md,1)*.002*bass);\n' + 'my=my+(equal(md,2)*.002*treb);\n' + 'my=my-(equal(md,3)*.002*treb);\n' + 'mx=if(above(mx,.9),.5,mx);\n' + 'mx=if(below(mx,.1),.5,mx);\n' + 'my=if(above(my,.9),.5,my);\n' + 'my=if(below(my,.1),.5,my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=bass*.1;'),

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
m.mx = 0;
m.my = 0;
m.md = 0;
m.oldmd = 0;
m.mx = 0.5;
m.my = 0.4;
m.md = 3;
			m.rkeys = ['my','mx','md'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.oldmd = m.md;
m.md = mod((m.md+rand(4)),4);
m.md = ifcond(equal(m.md, m.oldmd), mod((m.md+1),4), m.md);
m.mx = (m.mx+((equal(m.md, 0)*0.002)*m.bass));
m.mx = (m.mx-((equal(m.md, 1)*0.002)*m.bass));
m.my = (m.my+((equal(m.md, 2)*0.002)*m.treb));
m.my = (m.my-((equal(m.md, 3)*0.002)*m.treb));
m.mx = ifcond(above(m.mx, 0.9), 0.5, m.mx);
m.mx = ifcond(below(m.mx, 0.1), 0.5, m.mx);
m.my = ifcond(above(m.my, 0.9), 0.5, m.my);
m.my = ifcond(below(m.my, 0.1), 0.5, m.my);
m.x = m.mx;
m.y = m.my;
m.a = (m.bass*0.1);
		return m;
	},
		'init_eqs_str' : ('mx=.5;\n' + 'my=.4;\n' + 'md=3;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('oldmd=md;\n' + 'md=(md+rand(4))%4;\n' + 'md=if(equal(md,oldmd),(md+1)%4,md);\n' + 'mx=mx+(equal(md,0)*.002*bass);\n' + 'mx=mx-(equal(md,1)*.002*bass);\n' + 'my=my+(equal(md,2)*.002*treb);\n' + 'my=my-(equal(md,3)*.002*treb);\n' + 'mx=if(above(mx,.9),.5,mx);\n' + 'mx=if(below(mx,.1),.5,mx);\n' + 'my=if(above(my,.9),.5,my);\n' + 'my=if(below(my,.1),.5,my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=bass*.1;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.22019,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 1.0,
			rad : 1.20321,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_fc_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (normalize((uv - uv_orig)) * texsize.zw);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 0.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + tmpvar_3);\n' + '   vec4 y_6;\n' + '  y_6 = (texture2D (sampler_main, P_5) * 0.97);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 0.0;\n' + '  tmpvar_7.xyz = max (tmpvar_4, y_6).xyz;\n' + '   vec2 P_8;\n' + '  P_8 = (uv - tmpvar_3);\n' + '   vec4 y_9;\n' + '  y_9 = (texture2D (sampler_main, P_8) * 0.97);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 0.0;\n' + '  tmpvar_10.xyz = max (tmpvar_7, y_9).xyz;\n' + '   vec2 P_11;\n' + '  P_11 = (uv + (tmpvar_3 * 2.0));\n' + '   vec4 y_12;\n' + '  y_12 = (texture2D (sampler_main, P_11) * 0.9);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13.w = 0.0;\n' + '  tmpvar_13.xyz = max (tmpvar_10, y_12).xyz;\n' + '   vec2 P_14;\n' + '  P_14 = (uv - (tmpvar_3 * 2.0));\n' + '   vec4 y_15;\n' + '  y_15 = (texture2D (sampler_main, P_14) * 0.9);\n' + '  ret_1 = ((max (tmpvar_13, y_15).xyz - 0.005) * 0.98);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 crisp_1;\n' + '   vec2 uv3_2;\n' + '   vec2 uv2_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = ((uv - 0.5) * aspect.xy);\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = (0.1 / (sqrt(\n' + '    dot (tmpvar_4, tmpvar_4)\n' + '  ) + 0.05));\n' + '   vec2 tmpvar_6;\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (ang / 3.14);\n' + '  tmpvar_6.x = tmpvar_7;\n' + '  tmpvar_6.y = (tmpvar_5 * 1.5);\n' + '  uv2_3.y = (tmpvar_6.y + (0.1 * time));\n' + '  uv2_3.x = (tmpvar_7 + (0.02 * time));\n' + '  uv3_2.y = (tmpvar_5 + _qh.y);\n' + '  uv3_2.x = (tmpvar_7 + (time / 32.0));\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = (texture2D (sampler_main, uv2_3).xyz + (2.0 * texture2D (sampler_main, uv3_2).xyz));\n' + '  crisp_1 = tmpvar_8;\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = fract(uv2_3);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_blur2, tmpvar_9);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = fract(uv3_2);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_blur2, tmpvar_11);\n' + '  crisp_1 = (crisp_1 + ((2.0 * \n' + '    ((tmpvar_10.xyz * scale2) + bias2)\n' + '  ) + (2.0 * \n' + '    ((tmpvar_12.xyz * scale2) + bias2)\n' + '  )));\n' + '  crisp_1 = ((3.0 * crisp_1) * rad);\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = clamp ((1.0 - (4.0 * rad)), 0.0, 1.0);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 1.0;\n' + '  tmpvar_15.xyz = ((crisp_1 + (\n' + '    ((vec3(1.0, 0.0, 1.0) * uv.y) * pow ((1.0 - rad), 8.0))\n' + '   * tmpvar_13)) + (tmpvar_13 * tmpvar_14.xyz));\n' + '  vec4 ret4 = tmpvar_15;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0.5;\n' + 'y1 = 0.6;\n' + 'x2 = 0.9;\n' + 'y2 = 0.14;\n' + 'x3 = 0.5;\n' + 'y3 = 0.2;\n' + 'vr1 = 0.50001;\n' + 'vr2 = 0.0;\n' + 'vr3 = 0.0;\n' + 'vx1 = 0;\n' + 'vx2 = 0.4;\n' + 'vx3 = 0.9;'),
	'frame_eqs_str' : ('zoom = 1;\n' + 'warp = .01;\n' + 'wave_a = 1;\n' + 'r = 0.04+ (bass_att+treb_att)*0.01;\n' + 'monitor = aspecty;\n' + 'vr = sin(vr1)*r;\n' + 'bounce = below(y1,r-(aspectx-1)*0.5);\n' + 'y1 = y1+vy1;\n' + 'vy1 = if(bounce, abs(vy1)*0.96 + (r-y1-(aspectx-1)*0.5)*0.1, vy1-0.0003*60/fps);\n' + 'vx1 = if(bounce, vx1 + (vr-vx1)*0.15, vx1);\n' + 'vr = if(bounce, vr + (vx1-vr)*0.85 , vr);\n' + 'vr1 = asin(vr/r);\n' + 'bounce = above(x1,1-r+(aspecty-1)*0.5);\n' + 'vx1 = if(bounce, - abs(vx1)*0.96 + (1-r-x1+(aspecty-1)*0.5)*0.1, vx1);\n' + 'vy1 = if(bounce, vy1 + (vr-vy1)*0.15, vy1);\n' + 'vr = if(bounce, vr + (vy1-vr)*0.85 , vr);\n' + 'vr1 = asin(vr/r);\n' + 'bounce = below(x1,r-(aspecty-1)*0.5);\n' + 'x1 = x1+vx1;\n' + 'vx1 = if(bounce, abs(vx1)*0.96 + (r-x1-(aspecty-1)*0.5)*0.1, vx1);\n' + 'vy1 = if(bounce, vy1 + (-vr-vy1)*0.15, vy1);\n' + 'vr = if(bounce, vr - (vy1+vr)*0.85 , vr);\n' + 'vr1 = asin(vr/r);\n' + 'vr = sin(vr2)*r;\n' + 'bounce = below(y2,r-(aspectx-1)*0.5);\n' + 'y2 = y2+vy2;\n' + 'vy2 = if(bounce, abs(vy2)*0.96 + (r-y2-(aspectx-1)*0.5)*0.1, vy2-0.0003*60/fps);\n' + 'vx2 = if(bounce, vx2 + (vr-vx2)*0.15, vx2);\n' + 'vr = if(bounce, vr + (vx2-vr)*0.85 , vr);\n' + 'vr2 = asin(vr/r);\n' + 'bounce = above(x2,1-r+(aspecty-1)*0.5);\n' + 'vx2 = if(bounce, - abs(vx2)*0.96 + (1-r-x2+(aspecty-1)*0.5)*0.1, vx2);\n' + 'vy2 = if(bounce, vy2 + (vr-vy2)*0.15, vy2);\n' + 'vr = if(bounce, vr + (vy2-vr)*0.85 , vr);\n' + 'vr2 = asin(vr/r);\n' + 'bounce = below(x2,r-(aspecty-1)*0.5);\n' + 'x2 = x2+vx2;\n' + 'vx2 = if(bounce, abs(vx2)*0.96 + (r-x2-(aspecty-1)*0.5)*0.1, vx2);\n' + 'vy2 = if(bounce, vy2 + (-vr-vy2)*0.15, vy2);\n' + 'vr = if(bounce, vr - (vy2+vr)*0.85 , vr);\n' + 'vr2 = asin(vr/r);\n' + 'vr = sin(vr3)*r;\n' + 'bounce = below(y3,r-(aspectx-1)*0.5);\n' + 'y3 = y3+vy3;\n' + 'vy3 = if(bounce, abs(vy3)*0.96 + (r-y3-(aspectx-1)*0.5)*0.1, vy3-0.0003*60/fps);\n' + 'vx3 = if(bounce, vx3 + (vr-vx3)*0.15, vx3);\n' + 'vr = if(bounce, vr + (vx3-vr)*0.85 , vr);\n' + 'vr3 = asin(vr/r);\n' + 'bounce = above(x3,1-r+(aspecty-1)*0.5);\n' + 'vx3 = if(bounce, - abs(vx3)*0.96 + (1-r-x3+(aspecty-1)*0.5)*0.1, vx3);\n' + 'vy3 = if(bounce, vy3 + (vr-vy3)*0.15, vy3);\n' + 'vr = if(bounce, vr + (vy3-vr)*0.85 , vr);\n' + 'vr3 = asin(vr/r);\n' + 'bounce = below(x3,r-(aspecty-1)*0.5);\n' + 'x3 = x3+vx3;\n' + 'vx3 = if(bounce, abs(vx3)*0.96 + (r-x3-(aspecty-1)*0.5)*0.1, vx3);\n' + 'vy3 = if(bounce, vy3 + (-vr-vy3)*0.15, vy3);\n' + 'vr = if(bounce, vr - (vy3+vr)*0.85 , vr);\n' + 'vr3 = asin(vr/r);\n' + 'bounce = below( sqrt( sqr(x1+vx1-x2-vx2) + sqr(y1+vy1-y2-vy2)), 2*r);\n' + 'bounce = bounce*below(sqrt( sqr(x1+vx1-x2-vx2) + sqr(y1+vy1-y2-vy2)),sqrt( sqr(x1-x2) + sqr(y1-y2)));\n' + 'ref_ang = atan2(x2-x1,y2-y1)+asin(1);\n' + 'v1 = sqrt(vx1*vx1+vy1*vy1);\n' + 'v2 = sqrt(vx2*vx2+vy2*vy2);\n' + 'w1 = atan2(vx1,vy1);\n' + 'w2 = atan2(vx2,vy2);\n' + 'vr = sin(vr1)*r;\n' + ' v2r=sin(vr2)*r;\n' + 'vx1 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + ((vr-v2r)-sin(ref_ang)*v1*cos(w1-ref_ang))*0.1+ sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx1);\n' + 'vy1 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + ((vr-v2r)-cos(ref_ang)*v1*cos(w1-ref_ang))*0.1+ cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy1);\n' + 'vx2 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + ((v2r-vr)-sin(ref_ang)*v2*cos(w2-ref_ang))*0.1+ sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx2);\n' + 'vy2 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + ((v2r-vr)-cos(ref_ang)*v2*cos(w2-ref_ang))*0.1+ cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy2);\n' + 'vr = if(bounce, vr + (cos(w1-ref_ang)*(v1-v2)-vr)*0.9 , vr);\n' + 'vr1 = asin(vr/r);\n' + 'v2r = if(bounce, v2r + (cos(w2-ref_ang)*(v2-v1)-v2r)*0.9 , v2r);\n' + 'vr2 = asin(v2r/r);\n' + 'bounce = below( sqrt( sqr(x1+vx1-x3-vx3) + sqr(y1+vy1-y3-vy3)), 2*r);\n' + 'bounce = bounce*below(sqrt( sqr(x1+vx1-x3-vx3) + sqr(y1+vy1-y3-vy3)),sqrt( sqr(x1-x3) + sqr(y1-y3)));\n' + 'ref_ang = atan2(x3-x1,y3-y1)+asin(1);\n' + 'v1 = sqrt(vx1*vx1+vy1*vy1);\n' + 'v2 = sqrt(vx3*vx3+vy3*vy3);\n' + 'w1 = atan2(vx1,vy1);\n' + 'w2 = atan2(vx3,vy3);\n' + 'vr = sin(vr1)*r;\n' + ' v2r=sin(vr3)*r;\n' + 'vx1 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + ((vr-v2r)-sin(ref_ang)*v1*cos(w1-ref_ang))*0.1+ sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx1);\n' + 'vy1 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + ((vr-v2r)-cos(ref_ang)*v1*cos(w1-ref_ang))*0.1+ cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy1);\n' + 'vx3 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + ((v2r-vr)-sin(ref_ang)*v2*cos(w2-ref_ang))*0.1+ sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx3);\n' + 'vy3 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + ((v2r-vr)-cos(ref_ang)*v2*cos(w2-ref_ang))*0.1+ cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy3);\n' + 'vr = if(bounce, vr + (cos(w1-ref_ang)*(v1-v2)-vr)*0.9 , vr);\n' + 'vr1 = asin(vr/r);\n' + 'v2r = if(bounce, v2r + (cos(w2-ref_ang)*(v2-v1)-v2r)*0.9 , v2r);\n' + 'vr3 = asin(v2r/r);\n' + 'bounce = below( sqrt( sqr(x3+vx3-x2-vx2) + sqr(y3+vy3-y2-vy2)), 2*r);\n' + 'bounce = bounce*below(sqrt( sqr(x2+vx2-x3-vx3) + sqr(y2+vy2-y3-vy3)),sqrt( sqr(x2-x3) + sqr(y2-y3)));\n' + 'ref_ang = atan2(x2-x3,y2-y3)+asin(1);\n' + 'v1 = sqrt(vx3*vx3+vy3*vy3);\n' + 'v2 = sqrt(vx2*vx2+vy2*vy2);\n' + 'w1 = atan2(vx3,vy3);\n' + 'w2 = atan2(vx2,vy2);\n' + 'vr = sin(vr3)*r;\n' + ' v2r=sin(vr2)*r;\n' + 'vx3 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + ((vr-v2r)-sin(ref_ang)*v1*cos(w1-ref_ang))*0.1+ sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx3);\n' + 'vy3 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + ((vr-v2r)-cos(ref_ang)*v1*cos(w1-ref_ang))*0.1+ cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy3);\n' + 'vx2 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + ((v2r-vr)-sin(ref_ang)*v2*cos(w2-ref_ang))*0.1+ sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx2);\n' + 'vy2 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + ((v2r-vr)-cos(ref_ang)*v2*cos(w2-ref_ang))*0.1+ cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy2);\n' + 'vr = if(bounce, vr + (cos(w1-ref_ang)*(v1-v2)-vr)*0.9 , vr);\n' + 'vr3 = asin(vr/r);\n' + 'v2r = if(bounce, v2r + (cos(w2-ref_ang)*(v2-v1)-v2r)*0.9 , v2r);\n' + 'vr2 = asin(v2r/r);\n' + 'q1 = aspectx;\n' + 'q2 = aspecty;\n' + 'q3 = r*2;\n' + 'q4  = x1;\n' + '  q5 = y1;\n' + '  q6 = vr1;\n' + 'q7  = x2;\n' + '  q8 = y2;\n' + '  q9 = vr2;\n' + 'q10 = x3;\n' + ' q11 = y3;\n' + ' q12 = vr3;\n' + 'q13 = atan2( (x1+x2+x3)/3 - 0.5, (y1+y2+y3)/3-0.5);\n' + 'q14 = sigmoid(sqrt( sqr((x1+x2+x3)/3 - 0.5) + sqr((y1+y2+y3)/3-0.5) ),2)*0.2;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
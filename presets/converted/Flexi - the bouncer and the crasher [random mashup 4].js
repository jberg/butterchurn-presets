define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.418,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.08925,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.00001,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.007,
		ob_size : 0.0,
		b1ed : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 0.626,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.24,
		wave_y : 0.44,
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
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 2.0,
		wave_mystery : -0.66,
		decay : 0.995,
		wave_a : 1.413,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 1.0,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 2.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.s3 = 0;
m.q2 = 0;
m.q3 = 0;
m.c = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.bounce = 0;
m.ry1 = 0;
m.rx1 = 0;
m.ry2 = 0;
m.rx2 = 0;
m.ry3 = 0;
m.d1 = 0;
m.rx3 = 0;
m.ref_ang = 0;
m.d2 = 0;
m.bounceimpact = 0;
m.vy1 = 0;
m.gravity = 0;
m.d3 = 0;
m.vx1 = 0;
m.vy2 = 0;
m.vx2 = 0;
m.vy3 = 0;
m.q10 = 0;
m.vx3 = 0;
m.bouncedampening = 0;
m.q11 = 0;
m.r = 0;
m.q12 = 0;
m.s = 0;
m.q13 = 0;
m.q14 = 0;
m.vr1 = 0;
m.q15 = 0;
m.vr2 = 0;
m.v2r = 0;
m.vr3 = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.w1 = 0;
m.x2 = 0;
m.y3 = 0;
m.cy1 = 0;
m.v1 = 0;
m.w2 = 0;
m.x3 = 0;
m.cx1 = 0;
m.cy2 = 0;
m.v2 = 0;
m.vr = 0;
m.cx2 = 0;
m.cy3 = 0;
m.s1 = 0;
m.cx3 = 0;
m.s2 = 0;
m.x1 = 0.5;
m.y1 = 0.6;
m.x2 = 0.5;
m.y2 = 0.4;
m.x3 = 0.5;
m.y3 = 0.2;
m.vr1 = 0.0001;
m.vr2 = 0.0;
m.vr3 = 0.0;
m.vx1 = 0;
m.vx2 = 0;
m.vx3 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = 1;
m.warp = 0;
m.wave_a = 0;
m.r = (0.11+((m.bass_att+m.treb_att)*0.005));
m.gravity = 0.01;
m.bouncedampening = 0.94;
m.bounceimpact = 0.17;
m.y1 = (m.y1+m.vy1);
m.x1 = (m.x1+m.vx1);
m.vr = (Math.sin(m.vr1)*m.r);
m.bounce = below(m.y1, (m.r-((m.aspectx-1)*0.5)));
m.vy1 = ifcond(m.bounce, ((Math.abs(m.vy1)*m.bouncedampening)+(((m.r-m.y1)-((m.aspectx-1)*0.5))*m.bounceimpact)), (m.vy1-div(m.gravity,m.fps)));
m.vx1 = ifcond(m.bounce, (m.vx1+((m.vr-m.vx1)*m.bounceimpact)), m.vx1);
m.vr = ifcond(m.bounce, (m.vr+((m.vx1-m.vr)*0.85)), m.vr);
m.bounce = above(m.x1, ((1-m.r)+((m.aspecty-1)*0.5)));
m.vx1 = ifcond(m.bounce, ((-Math.abs(m.vx1)*m.bouncedampening)+((((1-m.r)-m.x1)+((m.aspecty-1)*0.5))*m.bounceimpact)), m.vx1);
m.vy1 = ifcond(m.bounce, (m.vy1+((m.vr-m.vy1)*m.bounceimpact)), m.vy1);
m.vr = ifcond(m.bounce, (m.vr+((m.vy1-m.vr)*0.85)), m.vr);
m.bounce = below(m.x1, (m.r-((m.aspecty-1)*0.5)));
m.vx1 = ifcond(m.bounce, ((Math.abs(m.vx1)*m.bouncedampening)+(((m.r-m.x1)-((m.aspecty-1)*0.5))*m.bounceimpact)), m.vx1);
m.vy1 = ifcond(m.bounce, (m.vy1+((-m.vr-m.vy1)*m.bounceimpact)), m.vy1);
m.vr = ifcond(m.bounce, (m.vr-((m.vy1+m.vr)*0.85)), m.vr);
m.vr1 = Math.asin(div(m.vr,m.r));
m.vr = (Math.sin(m.vr2)*m.r);
m.bounce = below(m.y2, (m.r-((m.aspectx-1)*0.5)));
m.y2 = (m.y2+m.vy2);
m.vy2 = ifcond(m.bounce, ((Math.abs(m.vy2)*m.bouncedampening)+(((m.r-m.y2)-((m.aspectx-1)*0.5))*m.bounceimpact)), (m.vy2-div(m.gravity,m.fps)));
m.vx2 = ifcond(m.bounce, (m.vx2+((m.vr-m.vx2)*m.bounceimpact)), m.vx2);
m.vr = ifcond(m.bounce, (m.vr+((m.vx2-m.vr)*0.85)), m.vr);
m.bounce = above(m.x2, ((1-m.r)+((m.aspecty-1)*0.5)));
m.vx2 = ifcond(m.bounce, ((-Math.abs(m.vx2)*m.bouncedampening)+((((1-m.r)-m.x2)+((m.aspecty-1)*0.5))*m.bounceimpact)), m.vx2);
m.vy2 = ifcond(m.bounce, (m.vy2+((m.vr-m.vy2)*m.bounceimpact)), m.vy2);
m.vr = ifcond(m.bounce, (m.vr+((m.vy2-m.vr)*0.85)), m.vr);
m.bounce = below(m.x2, (m.r-((m.aspecty-1)*0.5)));
m.x2 = (m.x2+m.vx2);
m.vx2 = ifcond(m.bounce, ((Math.abs(m.vx2)*m.bouncedampening)+(((m.r-m.x2)-((m.aspecty-1)*0.5))*m.bounceimpact)), m.vx2);
m.vy2 = ifcond(m.bounce, (m.vy2+((-m.vr-m.vy2)*m.bounceimpact)), m.vy2);
m.vr = ifcond(m.bounce, (m.vr-((m.vy2+m.vr)*0.85)), m.vr);
m.vr2 = Math.asin(div(m.vr,m.r));
m.vr = (Math.sin(m.vr3)*m.r);
m.bounce = below(m.y3, (m.r-((m.aspectx-1)*0.5)));
m.y3 = (m.y3+m.vy3);
m.vy3 = ifcond(m.bounce, ((Math.abs(m.vy3)*m.bouncedampening)+(((m.r-m.y3)-((m.aspectx-1)*0.5))*m.bounceimpact)), (m.vy3-div(m.gravity,m.fps)));
m.vx3 = ifcond(m.bounce, (m.vx3+((m.vr-m.vx3)*m.bounceimpact)), m.vx3);
m.vr = ifcond(m.bounce, (m.vr+((m.vx3-m.vr)*0.85)), m.vr);
m.bounce = above(m.x3, ((1-m.r)+((m.aspecty-1)*0.5)));
m.vx3 = ifcond(m.bounce, ((-Math.abs(m.vx3)*m.bouncedampening)+((((1-m.r)-m.x3)+((m.aspecty-1)*0.5))*m.bounceimpact)), m.vx3);
m.vy3 = ifcond(m.bounce, (m.vy3+((m.vr-m.vy3)*m.bounceimpact)), m.vy3);
m.vr = ifcond(m.bounce, (m.vr+((m.vy3-m.vr)*0.85)), m.vr);
m.bounce = below(m.x3, (m.r-((m.aspecty-1)*0.5)));
m.x3 = (m.x3+m.vx3);
m.vx3 = ifcond(m.bounce, ((Math.abs(m.vx3)*m.bouncedampening)+(((m.r-m.x3)-((m.aspecty-1)*0.5))*m.bounceimpact)), m.vx3);
m.vy3 = ifcond(m.bounce, (m.vy3+((-m.vr-m.vy3)*m.bounceimpact)), m.vy3);
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
m.q15 = div(1,Math.max(m.aspectx, m.aspecty));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.c = 42;
m.s = 0.5;
m.d = (m.q3*0.6);
m.cx1 = (0.5+((m.q4-0.5)*m.q15));
m.cy1 = (0.5-((m.q5-0.5)*m.q15));
m.d1 = sqrt((sqr((m.x-m.cx1))+sqr((m.y-m.cy1))));
m.s1 = (sigmoid((m.d-m.d1), m.c)*m.s);
m.rx1 = ((-m.q6*Math.sin((m.y-m.cy1)))*m.s1);
m.ry1 = ((m.q6*Math.sin((m.x-m.cx1)))*m.s1);
m.cx2 = (0.5+((m.q7-0.5)*m.q15));
m.cy2 = (0.5-((m.q8-0.5)*m.q15));
m.d2 = sqrt((sqr((m.x-m.cx2))+sqr((m.y-m.cy2))));
m.s2 = (sigmoid((m.d-m.d2), m.c)*m.s);
m.rx2 = ((-m.q9*Math.sin((m.y-m.cy2)))*m.s2);
m.ry2 = ((m.q9*Math.sin((m.x-m.cx2)))*m.s2);
m.cx3 = (0.5+((m.q10-0.5)*m.q15));
m.cy3 = (0.5-((m.q11-0.5)*m.q15));
m.d3 = sqrt((sqr((m.x-m.cx3))+sqr((m.y-m.cy3))));
m.s3 = (sigmoid((0.12-m.d3), m.c)*m.s);
m.rx3 = ((-m.q12*Math.sin((m.y-m.cy3)))*m.s3);
m.ry3 = ((m.q12*Math.sin((m.x-m.cx3)))*m.s3);
m.dx = ((m.rx1+m.rx2)+m.rx3);
m.dy = ((m.ry1+m.ry2)+m.ry3);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 2.0231,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.18,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.res = 0;
m.d = 0;
m.diff = 0;
m.m = 0;
m.tt1 = 0;
m.tt2 = 0;
m.vol = 0;
m.tt3 = 0;
m.beat = 0;
m.monitor = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = ['d','tt1','tt2','tt3'];
			return m;
		},
		'frame_eqs' : function(m) {
m.vol = (((m.bass*8)+(m.mid*5))+(m.treb*3));
m.m = ((m.m*0.97)+(m.vol*0.08));
m.monitor = m.vol;
m.beat = ((above(m.vol, m.res)*above(m.vol, m.m))*above(m.vol, 16));
m.diff = (((1-m.beat)*m.diff)+(m.beat*(m.vol-m.res)));
m.res = ((m.beat*(m.vol+(m.m*0.04)))+((1-m.beat)*(m.res-div(((0.1+(m.diff*0.02))*60),m.fps))));
m.res = Math.max(0, m.res);
m.a = m.beat;
		return m;
	},
		'point_eqs' : function(m) {
m.tt3 = ((m.tt3*0.6)+(m.value1*1));
m.tt2 = ((m.tt2*0.7)+(m.tt3*0.2));
m.tt1 = ((m.tt1*0.8)+(m.tt2*0.1));
m.d = ((m.d*0.9)+(m.tt1*0.2));
m.y = (0.5+(((m.d*m.sample)*(1-m.sample))*2));
m.x = (-0.05+(m.sample*1.1));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('vol = bass*8 + mid*5 + treb*3;\n' + 'm = m*0.97 + vol*0.08;\n' + 'monitor = vol;\n' + 'beat = above(vol,res)*above(vol,m)*above(vol,16);\n' + 'diff = (1-beat)*diff + beat*(vol-res);\n' + 'res = beat*(vol + m*0.04) + (1-beat)*(res -  (0.1+diff*0.02)*60/fps);\n' + 'res = max(0,res);\n' + 'a = beat;'),
		'point_eqs_str' : ('tt3 = tt3*0.6 + (value1)*1;\n' + 'tt2 = tt2*0.7 + tt3*0.2;\n' + 'tt1 = tt1*0.8 + tt2*0.1;\n' + 'd = d*0.9 + tt1*0.2;\n' + 'y = 0.5 + d*sample*(1-sample)*2;\n' + 'x =  -0.05 + sample*1.1;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.36971,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.01,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.q15 = 0;
m.w = 0;
m.rot = 0;
m.t1 = 0;
m.t2 = 0;
m.chance = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = Math.asin(1);
m.rot = (m.rot+m.q6);
m.t2 = m.rot;
m.q4 = (0.5+((m.q4-0.5)*m.q15));
m.q5 = (0.5+((m.q5-0.5)*m.q15));
		return m;
	},
		'point_eqs' : function(m) {
m.w = (((4*m.t1)*m.sample)+m.t2);
m.d = (((m.q3*0.5)*m.q15)+m.value1);
m.x = (m.q4+(Math.sin(m.w)*m.d));
m.y = (m.q5+(Math.cos(m.w)*m.d));
		return m;
	},
		'init_eqs_str' : ('chance = 0;'),
		'frame_eqs_str' : ('t1 = asin(1);\n' + 'rot = rot + q6;\n' + 't2 = rot;\n' + 'q4 = 0.5 + (q4-0.5)*q15;\n' + 'q5 = 0.5 + (q5-0.5)*q15;'),
		'point_eqs_str' : ('w = 4*t1*sample + t2;\n' + 'd = q3*0.5*q15 + value1;\n' + 'x = q4 + sin(w)*d;\n' + 'y = q5 + cos(w)*d;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.36971,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.01,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.d = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.q15 = 0;
m.w = 0;
m.rot = 0;
m.t1 = 0;
m.t2 = 0;
m.chance = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = Math.asin(1);
m.rot = (m.rot+m.q9);
m.t2 = m.rot;
m.q7 = (0.5+((m.q7-0.5)*m.q15));
m.q8 = (0.5+((m.q8-0.5)*m.q15));
		return m;
	},
		'point_eqs' : function(m) {
m.w = (((4*m.t1)*m.sample)+m.t2);
m.d = (((m.q3*0.5)*m.q15)+m.value1);
m.x = (m.q7+(Math.sin(m.w)*m.d));
m.y = (m.q8+(Math.cos(m.w)*m.d));
		return m;
	},
		'init_eqs_str' : ('chance = 0;'),
		'frame_eqs_str' : ('t1 = asin(1);\n' + 'rot = rot + q9;\n' + 't2 = rot;\n' + 'q7 = 0.5 + (q7-0.5)*q15;\n' + 'q8 = 0.5 + (q8-0.5)*q15;'),
		'point_eqs_str' : ('w = 4*t1*sample + t2;\n' + 'd = q3*0.5*q15 + value1;\n' + 'x = q7 + sin(w)*d;\n' + 'y = q8 + cos(w)*d;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.36971,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.01,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.d = 0;
m.q10 = 0;
m.q11 = 0;
m.q12 = 0;
m.q15 = 0;
m.w = 0;
m.rot = 0;
m.t1 = 0;
m.t2 = 0;
m.chance = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = Math.asin(1);
m.rot = (m.rot+m.q12);
m.t2 = m.rot;
m.q10 = (0.5+((m.q10-0.5)*m.q15));
m.q11 = (0.5+((m.q11-0.5)*m.q15));
		return m;
	},
		'point_eqs' : function(m) {
m.w = (((4*m.t1)*m.sample)+m.t2);
m.d = (((m.q3*0.5)*m.q15)+m.value1);
m.x = (m.q10+(Math.sin(m.w)*m.d));
m.y = (m.q11+(Math.cos(m.w)*m.d));
		return m;
	},
		'init_eqs_str' : ('chance = 0;'),
		'frame_eqs_str' : ('t1 = asin(1);\n' + 'rot = rot + q12;\n' + 't2 = rot;\n' + 'q10 = 0.5 + (q10-0.5)*q15;\n' + 'q11= 0.5 + (q11-0.5)*q15;'),
		'point_eqs_str' : ('w = 4*t1*sample + t2;\n' + 'd = q3*0.5*q15 + value1;\n' + 'x = q10 + sin(w)*d;\n' + 'y = q11 + cos(w)*d;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 6.03186,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.6839,
			additive : 1.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.0277,
			x : 0.5,
			y : 0.5,
			ang : 6.03186,
			sides : 100.0,
			border_r : 0.05,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.an = 0;

			m.rkeys = ['an'];
			return m;
		},
		'frame_eqs' : function(m) {
m.an = (m.an+m.q6);
m.ang = (m.an*0.5);
m.x = m.q4;
m.y = m.q5;
m.rad = m.q3;
m.x = (0.5+div((m.x-0.5),m.q2));
m.y = (0.5+div((m.y-0.5),m.q1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('an = an + q6;\n' + 'ang = an*0.5;\n' + 'x = q4;\n' + 'y = q5;\n' + 'rad = q3;\n' + 'x = 0.5 + (x-0.5)/q2;\n' + 'y = 0.5 + (y-0.5)/q1;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 6.03186,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.6839,
			additive : 1.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.0277,
			x : 0.5,
			y : 0.5,
			ang : 6.03186,
			sides : 100.0,
			border_r : 0.05,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.an = 0;

			m.rkeys = ['an'];
			return m;
		},
		'frame_eqs' : function(m) {
m.an = (m.an+m.q9);
m.ang = (m.an*0.5);
m.x = m.q7;
m.y = m.q8;
m.rad = m.q3;
m.x = (0.5+div((m.x-0.5),m.q2));
m.y = (0.5+div((m.y-0.5),m.q1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('an = an + q9;\n' + 'ang = an*0.5;\n' + 'x = q7;\n' + 'y = q8;\n' + 'rad = q3;\n' + 'x = 0.5 + (x-0.5)/q2;\n' + 'y = 0.5 + (y-0.5)/q1;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 6.03186,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.6839,
			additive : 1.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.0277,
			x : 0.5,
			y : 0.5,
			ang : 6.03186,
			sides : 100.0,
			border_r : 0.05,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.an = 0;
m.q10 = 0;
m.q11 = 0;
m.q12 = 0;

			m.rkeys = ['an'];
			return m;
		},
		'frame_eqs' : function(m) {
m.an = (m.an+m.q12);
m.ang = (m.an*0.5);
m.x = m.q10;
m.y = m.q11;
m.rad = m.q3;
m.x = (0.5+div((m.x-0.5),m.q2));
m.y = (0.5+div((m.y-0.5),m.q1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('an = an + q12;\n' + 'ang = an*0.5;\n' + 'x = q10;\n' + 'y = q11;\n' + 'rad = q3;\n' + 'x = 0.5 + (x-0.5)/q2;\n' + 'y = 0.5 + (y-0.5)/q1;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 6.03186,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.6839,
			additive : 1.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.0277,
			x : 0.5,
			y : 0.5,
			ang : 6.03186,
			sides : 48.0,
			border_r : 0.0,
			num_inst : 4.0,
			},
		'init_eqs' : function(m) {
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.an = 0;
m.q16 = 0;
m.w = 0;

			m.rkeys = ['an'];
			return m;
		},
		'frame_eqs' : function(m) {
m.an = (m.an+div((0.5*m.q16),m.num_inst));
m.w = (div(((Math.asin(1)*4)*m.instance),m.num_inst)+m.an);
m.x = (m.q6+((Math.sin(m.w)*m.q5)*0.5));
m.y = (m.q7+((Math.cos(m.w)*m.q5)*0.5));
m.rad = (m.q5*0.25);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('an = an + 0.5*q16/num_inst;\n' + 'w = asin(1)*4*instance/num_inst + an;\n' + 'x = q6 + sin(w)*q5*0.5;\n' + 'y = q7 + cos(w)*q5*0.5;\n' + 'rad = q5*0.25;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 d_1;\n' + '   vec3 noise_2;\n' + '   vec3 ret_3;\n' + '   vec2 P_4;\n' + '  P_4 = (((uv * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = vec3((texture2D (sampler_noise_lq, P_4).y - 0.5));\n' + '  noise_2 = tmpvar_5;\n' + '   float cosw_6;\n' + '  cosw_6 = -(_qb.y);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = ((uv_orig - 0.5) * aspect.xy);\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8.x = ((cosw_6 * tmpvar_7.x) - (_qb.z * tmpvar_7.y));\n' + '  tmpvar_8.y = ((_qb.z * tmpvar_7.x) + (cosw_6 * tmpvar_7.y));\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = ((0.5 - (tmpvar_8 * 2.0)) + ((noise_2.xy * texsize.zw) * 4.0));\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10.x = (_qc.x * 0.5);\n' + '  tmpvar_10.y = (_qb.w * 0.5);\n' + '   vec2 numerator_11;\n' + '  numerator_11 = (tmpvar_9 - vec2(0.0, 0.5));\n' + '   vec2 denominator_12;\n' + '  denominator_12 = (tmpvar_9 - vec2(1.0, 0.5));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = ((numerator_11.x * denominator_12.x) + (numerator_11.y * denominator_12.y));\n' + '  tmpvar_13.y = ((numerator_11.y * denominator_12.x) - (numerator_11.x * denominator_12.y));\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = (((tmpvar_13 / \n' + '    ((denominator_12.x * denominator_12.x) + (denominator_12.y * denominator_12.y))\n' + '  ) + 0.5) - vec2(0.5, 0.5));\n' + '   float tmpvar_15;\n' + '  tmpvar_15 = sqrt(dot (tmpvar_14, tmpvar_14));\n' + '   float tmpvar_16;\n' + '   float tmpvar_17;\n' + '  tmpvar_17 = (min (abs(\n' + '    (tmpvar_14.x / tmpvar_14.y)\n' + '  ), 1.0) / max (abs(\n' + '    (tmpvar_14.x / tmpvar_14.y)\n' + '  ), 1.0));\n' + '   float tmpvar_18;\n' + '  tmpvar_18 = (tmpvar_17 * tmpvar_17);\n' + '  tmpvar_18 = (((\n' + '    ((((\n' + '      ((((-0.01213232 * tmpvar_18) + 0.05368138) * tmpvar_18) - 0.1173503)\n' + '     * tmpvar_18) + 0.1938925) * tmpvar_18) - 0.3326756)\n' + '   * tmpvar_18) + 0.9999793) * tmpvar_17);\n' + '  tmpvar_18 = (tmpvar_18 + (float(\n' + '    (abs((tmpvar_14.x / tmpvar_14.y)) > 1.0)\n' + '  ) * (\n' + '    (tmpvar_18 * -2.0)\n' + '   + 1.570796)));\n' + '  tmpvar_16 = (tmpvar_18 * sign((tmpvar_14.x / tmpvar_14.y)));\n' + '  if ((abs(tmpvar_14.y) > (1e-08 * abs(tmpvar_14.x)))) {\n' + '    if ((tmpvar_14.y < 0.0)) {\n' + '      if ((tmpvar_14.x >= 0.0)) {\n' + '        tmpvar_16 += 3.141593;\n' + '      } else {\n' + '        tmpvar_16 = (tmpvar_16 - 3.141593);\n' + '      };\n' + '    };\n' + '  } else {\n' + '    tmpvar_16 = (sign(tmpvar_14.x) * 1.570796);\n' + '  };\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = (tmpvar_16 * 0.1591549);\n' + '  tmpvar_19.y = tmpvar_15;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20.x = ((tmpvar_19.x * 2.0) + tmpvar_10.x);\n' + '  tmpvar_20.y = ((0.3 * log(tmpvar_15)) + tmpvar_10.y);\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21 = (0.5 + (0.5 - abs(\n' + '    ((fract((tmpvar_20 * 0.5)) * 2.0) - 1.0)\n' + '  )));\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur1, tmpvar_21);\n' + '  ret_3.x = (((\n' + '    (tmpvar_22.xyz * scale1)\n' + '   + bias1).x * 0.97) - 0.02);\n' + '   vec4 tmpvar_23;\n' + '   vec2 P_24;\n' + '  P_24 = ((0.5 + (\n' + '    (uv_orig - 0.5)\n' + '   * 0.985)) + ((noise_2.xy * texsize.zw) * 0.5));\n' + '  tmpvar_23 = texture2D (sampler_main, P_24);\n' + '  ret_3.z = ((tmpvar_23.z * 0.85) - 0.004);\n' + '   vec2 tmpvar_25;\n' + '  tmpvar_25 = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_26;\n' + '   vec2 P_27;\n' + '  P_27 = (uv_orig + (tmpvar_25 * vec2(1.0, 0.0)));\n' + '  tmpvar_26 = texture2D (sampler_blur1, P_27);\n' + '   vec4 tmpvar_28;\n' + '   vec2 P_29;\n' + '  P_29 = (uv_orig + (tmpvar_25 * vec2(-1.0, 0.0)));\n' + '  tmpvar_28 = texture2D (sampler_blur1, P_29);\n' + '   vec4 tmpvar_30;\n' + '   vec2 P_31;\n' + '  P_31 = (uv_orig + (tmpvar_25 * vec2(0.0, 1.0)));\n' + '  tmpvar_30 = texture2D (sampler_blur1, P_31);\n' + '   vec4 tmpvar_32;\n' + '   vec2 P_33;\n' + '  P_33 = (uv_orig + (tmpvar_25 * vec2(0.0, -1.0)));\n' + '  tmpvar_32 = texture2D (sampler_blur1, P_33);\n' + '   vec2 tmpvar_34;\n' + '  tmpvar_34.x = (((2.0 * \n' + '    ((tmpvar_26.xyz * scale1) + bias1)\n' + '  ) - (2.0 * \n' + '    ((tmpvar_28.xyz * scale1) + bias1)\n' + '  )).y * 0.5);\n' + '  tmpvar_34.y = (((2.0 * \n' + '    ((tmpvar_30.xyz * scale1) + bias1)\n' + '  ) - (2.0 * \n' + '    ((tmpvar_32.xyz * scale1) + bias1)\n' + '  )).y * 0.5);\n' + '  d_1 = (tmpvar_34 * texsize.zw);\n' + '   vec2 domain_35;\n' + '  domain_35 = (uv_orig - (d_1 * 2.5));\n' + '   vec4 tmpvar_36;\n' + '   vec2 P_37;\n' + '  P_37 = (domain_35 + (texsize.zw * vec2(-1.0, 0.0)));\n' + '  tmpvar_36 = texture2D (sampler_fc_main, P_37);\n' + '   vec4 tmpvar_38;\n' + '  tmpvar_38.w = 0.0;\n' + '  tmpvar_38.xyz = max (vec4(0.0, 0.0, 0.0, 0.0), tmpvar_36).xyz;\n' + '   vec4 tmpvar_39;\n' + '   vec2 P_40;\n' + '  P_40 = (domain_35 + (texsize.zw * vec2(0.0, -1.0)));\n' + '  tmpvar_39 = texture2D (sampler_fc_main, P_40);\n' + '   vec4 tmpvar_41;\n' + '  tmpvar_41.w = 0.0;\n' + '  tmpvar_41.xyz = max (tmpvar_38, tmpvar_39).xyz;\n' + '   vec4 tmpvar_42;\n' + '  tmpvar_42 = texture2D (sampler_fc_main, domain_35);\n' + '   vec4 tmpvar_43;\n' + '  tmpvar_43.w = 0.0;\n' + '  tmpvar_43.xyz = max (tmpvar_41, tmpvar_42).xyz;\n' + '   vec4 tmpvar_44;\n' + '   vec2 P_45;\n' + '  P_45 = (domain_35 + (texsize.zw * vec2(0.0, 1.0)));\n' + '  tmpvar_44 = texture2D (sampler_fc_main, P_45);\n' + '   vec4 tmpvar_46;\n' + '  tmpvar_46.w = 0.0;\n' + '  tmpvar_46.xyz = max (tmpvar_43, tmpvar_44).xyz;\n' + '   vec4 tmpvar_47;\n' + '   vec2 P_48;\n' + '  P_48 = (domain_35 + (texsize.zw * vec2(1.0, 0.0)));\n' + '  tmpvar_47 = texture2D (sampler_fc_main, P_48);\n' + '   vec4 tmpvar_49;\n' + '   vec2 P_50;\n' + '  P_50 = (uv_orig + (d_1 * 4.0));\n' + '  tmpvar_49 = texture2D (sampler_main, P_50);\n' + '   vec4 tmpvar_51;\n' + '   vec2 P_52;\n' + '  P_52 = (uv_orig + (d_1 * 4.0));\n' + '  tmpvar_51 = texture2D (sampler_blur1, P_52);\n' + '  ret_3.y = ((max (tmpvar_46, tmpvar_47).y + (\n' + '    (tmpvar_49.y - ((tmpvar_51.xyz * scale1) + bias1).y)\n' + '   * 0.206)) - 0.09);\n' + '   vec4 tmpvar_53;\n' + '  tmpvar_53 = texture2D (sampler_blur1, tmpvar_21);\n' + '  ret_3.y = (ret_3.y + ((\n' + '    (tmpvar_53.xyz * scale1)\n' + '   + bias1).z * 0.25));\n' + '   vec4 tmpvar_54;\n' + '  tmpvar_54.w = 1.0;\n' + '  tmpvar_54.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_54;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 dz_1;\n' + '   vec3 dy_2;\n' + '   vec3 dx_3;\n' + '   vec2 d_4;\n' + '   vec3 ret_5;\n' + '   vec2 P_6;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (vec2(1.0, 0.0) * texsize.zw);\n' + '  P_6 = (uv + tmpvar_7);\n' + '   vec2 P_8;\n' + '  P_8 = (uv - tmpvar_7);\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = (texture2D (sampler_main, P_6).xyz - texture2D (sampler_main, P_8).xyz);\n' + '  dx_3 = tmpvar_9;\n' + '   vec2 P_10;\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = (vec2(0.0, 1.0) * texsize.zw);\n' + '  P_10 = (uv + tmpvar_11);\n' + '   vec2 P_12;\n' + '  P_12 = (uv - tmpvar_11);\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = (texture2D (sampler_main, P_10).xyz - texture2D (sampler_main, P_12).xyz);\n' + '  dy_2 = tmpvar_13;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = dx_3.y;\n' + '  tmpvar_14.y = dy_2.y;\n' + '  d_4 = (texsize.zw * 2.0);\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (uv + (vec2(1.0, 0.0) * d_4));\n' + '  tmpvar_15 = texture2D (sampler_blur1, P_16);\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv - (vec2(1.0, 0.0) * d_4));\n' + '  tmpvar_17 = texture2D (sampler_blur1, P_18);\n' + '  dx_3 = (((tmpvar_15.xyz * scale1) + bias1) - ((tmpvar_17.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_19;\n' + '   vec2 P_20;\n' + '  P_20 = (uv + (vec2(0.0, 1.0) * d_4));\n' + '  tmpvar_19 = texture2D (sampler_blur1, P_20);\n' + '   vec4 tmpvar_21;\n' + '   vec2 P_22;\n' + '  P_22 = (uv - (vec2(0.0, 1.0) * d_4));\n' + '  tmpvar_21 = texture2D (sampler_blur1, P_22);\n' + '  dy_2 = (((tmpvar_19.xyz * scale1) + bias1) - ((tmpvar_21.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_23;\n' + '  tmpvar_23.x = dx_3.y;\n' + '  tmpvar_23.y = dy_2.y;\n' + '  dz_1 = ((tmpvar_14 * 3.0) + tmpvar_23);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_blur2, uv);\n' + '  ret_5 = (vec3(((\n' + '    pow ((sqrt(dot (dz_1, dz_1)) * 0.8), 0.7)\n' + '   + \n' + '    (((tmpvar_24.xyz * scale2) + bias2).y * 0.4)\n' + '  ) - 0.1)) * vec3(0.3, 0.5, 0.7));\n' + '   vec2 tmpvar_25;\n' + '  tmpvar_25.x = dx_3.x;\n' + '  tmpvar_25.y = dy_2.x;\n' + '   vec2 P_26;\n' + '  P_26 = (uv + ((tmpvar_25 * texsize.zw) * 18.0));\n' + '   vec3 tmpvar_27;\n' + '  tmpvar_27 = vec3((texture2D (sampler_main, P_26).x * 6.0));\n' + '   vec3 tmpvar_28;\n' + '  tmpvar_28 = texture2D (sampler_main, uv).zzz;\n' + '   vec3 tmpvar_29;\n' + '  tmpvar_29 = mix (mix (ret_5, vec3(0.2, 0.1, 0.0), tmpvar_27), vec3(1.0, 1.0, 1.0), tmpvar_28);\n' + '  ret_5 = tmpvar_29;\n' + '   vec4 tmpvar_30;\n' + '  tmpvar_30.w = 1.0;\n' + '  tmpvar_30.xyz = tmpvar_29;\n' + '  vec4 ret4 = tmpvar_30;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0.5;\n' + 'y1 = 0.6;\n' + 'x2 = 0.5;\n' + 'y2 = 0.4;\n' + 'x3 = 0.5;\n' + 'y3 = 0.2;\n' + 'vr1 = 0.0001;\n' + 'vr2 = 0.0;\n' + 'vr3 = 0.0;\n' + 'vx1 = 0;\n' + 'vx2 = 0;\n' + 'vx3 = 0;'),
	'frame_eqs_str' : ('zoom = 1;\n' + 'warp = 0;\n' + 'wave_a = 0;\n' + 'r = 0.11+ (bass_att+treb_att)*0.005;\n' + 'gravity = 0.01;\n' + 'bouncedampening = 0.94;\n' + 'bounceimpact = 0.17;\n' + 'y1  = y1+vy1;\n' + 'x1  = x1+vx1;\n' + 'vr  = sin(vr1)*r;\n' + 'bounce = below(y1,r-(aspectx-1)*0.5);\n' + 'vy1 = if(bounce, abs(vy1)*bouncedampening + (r-y1-(aspectx-1)*0.5)*bounceimpact, vy1-gravity/fps);\n' + 'vx1 = if(bounce, vx1 + (vr-vx1)*bounceimpact, vx1);\n' + 'vr  = if(bounce, vr + (vx1-vr)*0.85 , vr);\n' + 'bounce = above(x1,1-r+(aspecty-1)*0.5);\n' + 'vx1 = if(bounce, - abs(vx1)*bouncedampening + (1-r-x1+(aspecty-1)*0.5)*bounceimpact, vx1);\n' + 'vy1 = if(bounce, vy1 + (vr-vy1)*bounceimpact, vy1);\n' + 'vr  = if(bounce, vr + (vy1-vr)*0.85 , vr);\n' + 'bounce = below(x1,r-(aspecty-1)*0.5);\n' + 'vx1 = if(bounce, abs(vx1)*bouncedampening + (r-x1-(aspecty-1)*0.5)*bounceimpact, vx1);\n' + 'vy1 = if(bounce, vy1 + (-vr-vy1)*bounceimpact, vy1);\n' + 'vr  = if(bounce, vr - (vy1+vr)*0.85 , vr);\n' + 'vr1 = asin(vr/r);\n' + 'vr=sin(vr2)*r;\n' + 'bounce=below(y2,r-(aspectx-1)*0.5);\n' + 'y2=y2+vy2;\n' + 'vy2=if(bounce,abs(vy2)*bouncedampening+(r-y2-(aspectx-1)*0.5)*bounceimpact,vy2-gravity/fps);\n' + 'vx2=if(bounce,vx2+(vr-vx2)*bounceimpact,vx2);\n' + 'vr=if(bounce,vr+(vx2-vr)*0.85,vr);\n' + 'bounce=above(x2,1-r+(aspecty-1)*0.5);\n' + 'vx2=if(bounce,-abs(vx2)*bouncedampening+(1-r-x2+(aspecty-1)*0.5)*bounceimpact,vx2);\n' + 'vy2=if(bounce,vy2+(vr-vy2)*bounceimpact,vy2);\n' + 'vr=if(bounce,vr+(vy2-vr)*0.85,vr);\n' + 'bounce=below(x2,r-(aspecty-1)*0.5);\n' + 'x2=x2+vx2;\n' + 'vx2=if(bounce,abs(vx2)*bouncedampening+(r-x2-(aspecty-1)*0.5)*bounceimpact,vx2);\n' + 'vy2=if(bounce,vy2+(-vr-vy2)*bounceimpact,vy2);\n' + 'vr=if(bounce,vr-(vy2+vr)*0.85,vr);\n' + 'vr2=asin(vr/r);\n' + 'vr=sin(vr3)*r;\n' + 'bounce=below(y3,r-(aspectx-1)*0.5);\n' + 'y3=y3+vy3;\n' + 'vy3=if(bounce,abs(vy3)*bouncedampening+(r-y3-(aspectx-1)*0.5)*bounceimpact,vy3-gravity/fps);\n' + 'vx3=if(bounce,vx3+(vr-vx3)*bounceimpact,vx3);\n' + 'vr=if(bounce,vr+(vx3-vr)*0.85,vr);\n' + 'bounce=above(x3,1-r+(aspecty-1)*0.5);\n' + 'vx3=if(bounce,-abs(vx3)*bouncedampening+(1-r-x3+(aspecty-1)*0.5)*bounceimpact,vx3);\n' + 'vy3=if(bounce,vy3+(vr-vy3)*bounceimpact,vy3);\n' + 'vr=if(bounce,vr+(vy3-vr)*0.85,vr);\n' + 'bounce=below(x3,r-(aspecty-1)*0.5);\n' + 'x3=x3+vx3;\n' + 'vx3=if(bounce,abs(vx3)*bouncedampening+(r-x3-(aspecty-1)*0.5)*bounceimpact,vx3);\n' + 'vy3=if(bounce,vy3+(-vr-vy3)*bounceimpact,vy3);\n' + 'vr=if(bounce,vr-(vy3+vr)*0.85,vr);\n' + 'vr3=asin(vr/r);\n' + 'bounce = below( sqrt( sqr(x1+vx1-x2-vx2) + sqr(y1+vy1-y2-vy2)), 2*r);\n' + 'bounce = bounce*below(sqrt( sqr(x1+vx1-x2-vx2) + sqr(y1+vy1-y2-vy2)),sqrt( sqr(x1-x2) + sqr(y1-y2)));\n' + 'ref_ang = atan2(x2-x1,y2-y1)+asin(1);\n' + 'v1 = sqrt(vx1*vx1+vy1*vy1);\n' + 'v2 = sqrt(vx2*vx2+vy2*vy2);\n' + 'w1 = atan2(vx1,vy1);\n' + 'w2 = atan2(vx2,vy2);\n' + 'vr = sin(vr1)*r;\n' + 'v2r= sin(vr2)*r;\n' + 'vx1 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + ((vr-v2r)-sin(ref_ang)*v1*cos(w1-ref_ang))*0.1+ sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx1);\n' + 'vy1 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + ((vr-v2r)-cos(ref_ang)*v1*cos(w1-ref_ang))*0.1+ cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy1);\n' + 'vx2 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + ((v2r-vr)-sin(ref_ang)*v2*cos(w2-ref_ang))*0.1+ sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx2);\n' + 'vy2 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + ((v2r-vr)-cos(ref_ang)*v2*cos(w2-ref_ang))*0.1+ cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy2);\n' + 'vr = if(bounce, vr + (cos(w1-ref_ang)*(v1-v2)-vr)*0.9 , vr);\n' + 'vr1 = asin(vr/r);\n' + 'v2r = if(bounce, v2r + (cos(w2-ref_ang)*(v2-v1)-v2r)*0.9 , v2r);\n' + 'vr2 = asin(v2r/r);\n' + 'bounce=below(sqrt(sqr(x1+vx1-x3-vx3)+sqr(y1+vy1-y3-vy3)),2*r);\n' + 'bounce=bounce*below(sqrt(sqr(x1+vx1-x3-vx3)+sqr(y1+vy1-y3-vy3)),sqrt(sqr(x1-x3)+sqr(y1-y3)));\n' + 'ref_ang=atan2(x3-x1,y3-y1)+asin(1);\n' + 'v1=sqrt(vx1*vx1+vy1*vy1);\n' + 'v2=sqrt(vx3*vx3+vy3*vy3);\n' + 'w1=atan2(vx1,vy1);\n' + 'w2=atan2(vx3,vy3);\n' + 'vr=sin(vr1)*r;\n' + 'v2r=sin(vr3)*r;\n' + 'vx1=if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang)+((vr-v2r)-sin(ref_ang)*v1*cos(w1-ref_ang))*0.1+sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)),vx1);\n' + 'vy1=if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang)+((vr-v2r)-cos(ref_ang)*v1*cos(w1-ref_ang))*0.1+cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)),vy1);\n' + 'vx3=if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang)+((v2r-vr)-sin(ref_ang)*v2*cos(w2-ref_ang))*0.1+sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)),vx3);\n' + 'vy3=if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang)+((v2r-vr)-cos(ref_ang)*v2*cos(w2-ref_ang))*0.1+cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)),vy3);\n' + 'vr=if(bounce,vr+(cos(w1-ref_ang)*(v1-v2)-vr)*0.9,vr);\n' + 'vr1=asin(vr/r);\n' + 'v2r=if(bounce,v2r+(cos(w2-ref_ang)*(v2-v1)-v2r)*0.9,v2r);\n' + 'vr3=asin(v2r/r);\n' + 'bounce=below(sqrt(sqr(x3+vx3-x2-vx2)+sqr(y3+vy3-y2-vy2)),2*r);\n' + 'bounce=bounce*below(sqrt(sqr(x2+vx2-x3-vx3)+sqr(y2+vy2-y3-vy3)),sqrt(sqr(x2-x3)+sqr(y2-y3)));\n' + 'ref_ang=atan2(x2-x3,y2-y3)+asin(1);\n' + 'v1=sqrt(vx3*vx3+vy3*vy3);\n' + 'v2=sqrt(vx2*vx2+vy2*vy2);\n' + 'w1=atan2(vx3,vy3);\n' + 'w2=atan2(vx2,vy2);\n' + 'vr=sin(vr3)*r;\n' + 'v2r=sin(vr2)*r;\n' + 'vx3=if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang)+((vr-v2r)-sin(ref_ang)*v1*cos(w1-ref_ang))*0.1+sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)),vx3);\n' + 'vy3=if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang)+((vr-v2r)-cos(ref_ang)*v1*cos(w1-ref_ang))*0.1+cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)),vy3);\n' + 'vx2=if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang)+((v2r-vr)-sin(ref_ang)*v2*cos(w2-ref_ang))*0.1+sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)),vx2);\n' + 'vy2=if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang)+((v2r-vr)-cos(ref_ang)*v2*cos(w2-ref_ang))*0.1+cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)),vy2);\n' + 'vr=if(bounce,vr+(cos(w1-ref_ang)*(v1-v2)-vr)*0.9,vr);\n' + 'vr3=asin(vr/r);\n' + 'v2r=if(bounce,v2r+(cos(w2-ref_ang)*(v2-v1)-v2r)*0.9,v2r);\n' + 'vr2=asin(v2r/r);\n' + 'q1 = aspectx;\n' + 'q2 = aspecty;\n' + 'q3 = r*2;\n' + 'q4  = x1;\n' + '  q5 = y1;\n' + '  q6 = vr1;\n' + 'q7  = x2;\n' + '  q8 = y2;\n' + '  q9 = vr2;\n' + 'q10 = x3;\n' + ' q11 = y3;\n' + ' q12 = vr3;\n' + 'q13 = atan2( (x1+x2+x3)/3 - 0.5, (y1+y2+y3)/3-0.5);\n' + 'q14 = sigmoid(sqrt( sqr((x1+x2+x3)/3 - 0.5) + sqr((y1+y2+y3)/3-0.5) ),2)*0.2;\n' + 'q15 = 1/max(aspectx,aspecty);'),
	'pixel_eqs_str' : ('c = 42;\n' + 's = 0.5;\n' + 'd = q3*0.6;\n' + 'cx1 = 0.5 + (q4-0.5)*q15;\n' + 'cy1 = 0.5 - (q5-0.5)*q15;\n' + 'd1 = sqrt( sqr(x-cx1) + sqr(y-cy1));\n' + 's1 = sigmoid(d-d1,c)*s;\n' + 'rx1 = -q6*sin(y-cy1)*s1;\n' + 'ry1 = q6*sin(x-cx1)*s1;\n' + 'cx2 = 0.5 + (q7-0.5)*q15;\n' + 'cy2 = 0.5 - (q8-0.5)*q15;\n' + 'd2 = sqrt( sqr(x-cx2) + sqr(y-cy2));\n' + 's2 = sigmoid(d-d2,c)*s;\n' + 'rx2 = -q9*sin(y-cy2)*s2;\n' + 'ry2 = q9*sin(x-cx2)*s2;\n' + 'cx3 = 0.5 + (q10-0.5)*q15;\n' + 'cy3 = 0.5 - (q11-0.5)*q15;\n' + 'd3 = sqrt( sqr(x-cx3) + sqr(y-cy3));\n' + 's3 = sigmoid(0.12-d3,c)*s;\n' + 'rx3 = -q12*sin(y-cy3)*s3;\n' + 'ry3 = q12*sin(x-cx3)*s3;\n' + 'dx = rx1 + rx2 + rx3;\n' + 'dy = ry1 + ry2 + ry3;'),
};

return pmap;
});
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
		ib_size : 0.26,
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
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.007,
		ob_size : 0.005,
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
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 2.0,
		b1n : 0.0,
		darken : 0.0,
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
			g : 0.0,
			scaling : 2.0231,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
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
m.b = 0.1;
m.g = m.beat;
m.r = (m.beat*0.04);
		return m;
	},
		'point_eqs' : function(m) {
m.tt3 = ((m.tt3*0.6)+(m.value1*1));
m.tt2 = ((m.tt2*0.7)+(m.tt3*0.2));
m.tt1 = ((m.tt1*0.8)+(m.tt2*0.1));
m.d = ((m.d*0.9)+(m.tt1*0.2));
m.y = (0.5+(((m.d*m.sample)*(1-m.sample))*4));
m.x = (-0.05+(m.sample*1.1));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('vol = bass*8 + mid*5 + treb*3;\n' + 'm = m*0.97 + vol*0.08;\n' + 'monitor = vol;\n' + 'beat = above(vol,res)*above(vol,m)*above(vol,16);\n' + 'diff = (1-beat)*diff + beat*(vol-res);\n' + 'res = beat*(vol + m*0.04) + (1-beat)*(res -  (0.1+diff*0.02)*60/fps);\n' + 'res = max(0,res);\n' + 'b = 0.1;\n' + 'g = beat;\n' + 'r = beat*0.04;'),
		'point_eqs_str' : ('tt3 = tt3*0.6 + (value1)*1;\n' + 'tt2 = tt2*0.7 + tt3*0.2;\n' + 'tt1 = tt1*0.8 + tt2*0.1;\n' + 'd = d*0.9 + tt1*0.2;\n' + 'y = 0.5 + d*sample*(1-sample)*4;\n' + 'x =  -0.05 + sample*1.1;'),

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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q13 = 0;
m.q14 = 0;
m.chance = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (m.q3+(((m.sample*Math.sin(m.q14))*m.q13)*40));
m.y = (m.q4+(((m.sample*Math.cos(m.q14))*m.q13)*40));
m.x = (0.5+div((m.x-0.5),m.q1));
m.y = (0.5+div((m.y-0.5),m.q2));
		return m;
	},
		'init_eqs_str' : ('chance = 0;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = q3 + sample*sin(q14)*q13*40;\n' + 'y = q4 + sample*cos(q14)*q13*40;\n' + 'x = 0.5 + (x-0.5)/q1;\n' + 'y = 0.5 + (y-0.5)/q2;'),

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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q10 = 0;
m.q13 = 0;
m.q14 = 0;
m.chance = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (m.q3+((((m.sample*Math.sin(m.q10))*Math.cos((m.q14-m.q10)))*m.q13)*40));
m.y = (m.q4+((((m.sample*Math.cos(m.q10))*Math.cos((m.q14-m.q10)))*m.q13)*40));
m.x = (0.5+div((m.x-0.5),m.q1));
m.y = (0.5+div((m.y-0.5),m.q2));
		return m;
	},
		'init_eqs_str' : ('chance = 0;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = q3 + sample*sin(q10)*cos(q14-q10)*q13*40;\n' + 'y = q4 + sample*cos(q10)*cos(q14-q10)*q13*40;\n' + 'x = 0.5 + (x-0.5)/q1;\n' + 'y = 0.5 + (y-0.5)/q2;'),

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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q10 = 0;
m.q13 = 0;
m.q14 = 0;
m.chance = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (m.q3+((((m.sample*Math.sin((m.q10+Math.asin(1))))*Math.cos(((m.q14-m.q10)-Math.asin(1))))*m.q13)*40));
m.y = (m.q4+((((m.sample*Math.cos((m.q10+Math.asin(1))))*Math.cos(((m.q14-m.q10)-Math.asin(1))))*m.q13)*40));
m.x = (0.5+div((m.x-0.5),m.q1));
m.y = (0.5+div((m.y-0.5),m.q2));
		return m;
	},
		'init_eqs_str' : ('chance = 0;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = q3 + sample*sin(q10+asin(1))*cos(q14-q10-asin(1))*q13*40;\n' + 'y = q4 + sample*cos(q10+asin(1))*cos(q14-q10-asin(1))*q13*40;\n' + 'x = 0.5 + (x-0.5)/q1;\n' + 'y = 0.5 + (y-0.5)/q2;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 6.03186,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.6839,
			additive : 1.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.0277,
			x : 0.5,
			y : 0.5,
			ang : 6.03186,
			sides : 4.0,
			border_r : 0.0,
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
m.rad = (m.q3*sqrt(2));
m.x = (0.5+div((m.x-0.5),m.q2));
m.y = (0.5+div((m.y-0.5),m.q1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('an = an + q6;\n' + 'ang = an*0.5;\n' + 'x = q4;\n' + 'y = q5;\n' + 'rad = q3*sqrt(2);\n' + 'x = 0.5 + (x-0.5)/q2;\n' + 'y = 0.5 + (y-0.5)/q1;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 6.03186,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.6839,
			additive : 1.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.0277,
			x : 0.5,
			y : 0.5,
			ang : 6.03186,
			sides : 4.0,
			border_r : 0.0,
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
m.rad = (m.q3*sqrt(2));
m.x = (0.5+div((m.x-0.5),m.q2));
m.y = (0.5+div((m.y-0.5),m.q1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('an = an + q9;\n' + 'ang = an*0.5;\n' + 'x = q7;\n' + 'y = q8;\n' + 'rad = q3*sqrt(2);\n' + 'x = 0.5 + (x-0.5)/q2;\n' + 'y = 0.5 + (y-0.5)/q1;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 6.03186,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.6839,
			additive : 1.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.0277,
			x : 0.5,
			y : 0.5,
			ang : 6.03186,
			sides : 4.0,
			border_r : 0.0,
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
m.rad = (m.q3*sqrt(2));
m.x = (0.5+div((m.x-0.5),m.q2));
m.y = (0.5+div((m.y-0.5),m.q1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('an = an + q12;\n' + 'ang = an*0.5;\n' + 'x = q10;\n' + 'y = q11;\n' + 'rad = q3*sqrt(2);\n' + 'x = 0.5 + (x-0.5)/q2;\n' + 'y = 0.5 + (y-0.5)/q1;'),

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
	'warp' : ('highp vec2 xlat_mutabled;\n' + 'highp vec2 xlat_mutabled_uv;\n' + 'highp vec2 xlat_mutabledither_uv;\n' + 'highp vec3 xlat_mutabledx;\n' + 'highp vec3 xlat_mutabledy;\n' + 'highp vec3 xlat_mutablerand;\n' + 'shader_body {\n' + '   vec3 ret_1;\n' + '  xlat_mutabledither_uv = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec3 tmpvar_2;\n' + '  tmpvar_2 = (texture2D (sampler_noise_lq, xlat_mutabledither_uv) - 0.5).xyz;\n' + '  xlat_mutablerand = tmpvar_2;\n' + '  xlat_mutabled = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv_orig + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv_orig - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '  xlat_mutabledx = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv_orig + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_7 = texture2D (sampler_blur1, P_8);\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv_orig - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '  xlat_mutabledy = (((tmpvar_7.xyz * scale1) + bias1) - ((tmpvar_9.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = xlat_mutabledx.x;\n' + '  tmpvar_11.y = xlat_mutabledy.x;\n' + '  xlat_mutabled_uv = (uv_orig + ((tmpvar_11 * texsize.zw) * 4.0));\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_main, xlat_mutabled_uv);\n' + '  ret_1.x = tmpvar_12.x;\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_blur1, xlat_mutabled_uv);\n' + '  ret_1.x = (ret_1.x + ((\n' + '    ((ret_1.x - ((tmpvar_13.xyz * scale1) + bias1).x) * 0.04)\n' + '   - 0.006) + (xlat_mutablerand * 0.01)).x);\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = xlat_mutabledx.y;\n' + '  tmpvar_14.y = xlat_mutabledy.y;\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15.x = xlat_mutabledx.x;\n' + '  tmpvar_15.y = xlat_mutabledy.x;\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = (uv - ((\n' + '    (vec2(0.0, -1.2) + (tmpvar_14 * 8.0))\n' + '   + \n' + '    (tmpvar_15 * 4.0)\n' + '  ) * texsize.zw));\n' + '   float tmpvar_17;\n' + '  tmpvar_17 = max (texture2D (sampler_main, tmpvar_16).x, (texture2D (sampler_main, tmpvar_16).y - 0.0012));\n' + '  ret_1.y = (tmpvar_17 + (xlat_mutablerand * 0.08)).x;\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18.w = 1.0;\n' + '  tmpvar_18.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_18;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec2 xlat_mutabled;\n' + 'highp vec2 xlat_mutabled_uv;\n' + 'shader_body {\n' + '   vec3 ret_1;\n' + '  xlat_mutabled = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_2;\n' + '   vec2 P_3;\n' + '  P_3 = (uv + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_2 = texture2D (sampler_blur1, P_3);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10.x = (((tmpvar_2.xyz * scale1) + bias1) - ((tmpvar_4.xyz * scale1) + bias1)).x;\n' + '  tmpvar_10.y = (((tmpvar_6.xyz * scale1) + bias1) - ((tmpvar_8.xyz * scale1) + bias1)).x;\n' + '  xlat_mutabled_uv = (uv + (tmpvar_10 * 0.03));\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_blur2, xlat_mutabled_uv);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_main, xlat_mutabled_uv);\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = mix (((tmpvar_11.xyz * scale2) + bias2), tmpvar_12.xyz, vec3(0.4, 0.4, 0.4));\n' + '  ret_1 = (((tmpvar_13.y - \n' + '    (tmpvar_13.x * 0.5)\n' + '  ) * mix (vec3(1.5, 0.6, 0.0), vec3(1.0, 1.0, 1.0), tmpvar_13.xxx)) * 1.4);\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (xlat_mutabled_uv - (texsize.zw * 32.0));\n' + '  tmpvar_14 = texture2D (sampler_blur1, P_15);\n' + '   vec3 tmpvar_16;\n' + '  tmpvar_16 = vec3((texture2D (sampler_main, uv).z * 0.36));\n' + '   vec3 tmpvar_17;\n' + '  tmpvar_17 = mix ((ret_1 * (vec3(1.0, 1.0, 1.0) - vec3(\n' + '    (((tmpvar_14.xyz * scale1) + bias1).z * 0.6)\n' + '  ))), vec3(2.0, 2.0, 2.0), tmpvar_16);\n' + '  ret_1 = tmpvar_17;\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18.w = 1.0;\n' + '  tmpvar_18.xyz = tmpvar_17;\n' + '  vec4 ret4 = tmpvar_18;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0.5;\n' + 'y1 = 0.6;\n' + 'x2 = 0.5;\n' + 'y2 = 0.4;\n' + 'x3 = 0.5;\n' + 'y3 = 0.2;\n' + 'vr1 = 0.0001;\n' + 'vr2 = 0.0;\n' + 'vr3 = 0.0;\n' + 'vx1 = 0;\n' + 'vx2 = 0;\n' + 'vx3 = 0;'),
	'frame_eqs_str' : ('zoom = 1;\n' + 'warp = 0;\n' + 'wave_a = 0;\n' + 'r = 0.04+ (bass_att+treb_att)*0.01;\n' + 'monitor = aspecty;\n' + 'vr = sin(vr1)*r;\n' + 'bounce = below(y1,r-(aspectx-1)*0.5);\n' + 'y1 = y1+vy1;\n' + 'vy1 = if(bounce, abs(vy1)*0.96 + (r-y1-(aspectx-1)*0.5)*0.1, vy1-0.0003*60/fps);\n' + 'vx1 = if(bounce, vx1 + (vr-vx1)*0.15, vx1);\n' + 'vr = if(bounce, vr + (vx1-vr)*0.85 , vr);\n' + 'vr1 = asin(vr/r);\n' + 'bounce = above(x1,1-r+(aspecty-1)*0.5);\n' + 'vx1 = if(bounce, - abs(vx1)*0.96 + (1-r-x1+(aspecty-1)*0.5)*0.1, vx1);\n' + 'vy1 = if(bounce, vy1 + (vr-vy1)*0.15, vy1);\n' + 'vr = if(bounce, vr + (vy1-vr)*0.85 , vr);\n' + 'vr1 = asin(vr/r);\n' + 'bounce = below(x1,r-(aspecty-1)*0.5);\n' + 'x1 = x1+vx1;\n' + 'vx1 = if(bounce, abs(vx1)*0.96 + (r-x1-(aspecty-1)*0.5)*0.1, vx1);\n' + 'vy1 = if(bounce, vy1 + (-vr-vy1)*0.15, vy1);\n' + 'vr = if(bounce, vr - (vy1+vr)*0.85 , vr);\n' + 'vr1 = asin(vr/r);\n' + 'vr = sin(vr2)*r;\n' + 'bounce = below(y2,r-(aspectx-1)*0.5);\n' + 'y2 = y2+vy2;\n' + 'vy2 = if(bounce, abs(vy2)*0.96 + (r-y2-(aspectx-1)*0.5)*0.1, vy2-0.0003*60/fps);\n' + 'vx2 = if(bounce, vx2 + (vr-vx2)*0.15, vx2);\n' + 'vr = if(bounce, vr + (vx2-vr)*0.85 , vr);\n' + 'vr2 = asin(vr/r);\n' + 'bounce = above(x2,1-r+(aspecty-1)*0.5);\n' + 'vx2 = if(bounce, - abs(vx2)*0.96 + (1-r-x2+(aspecty-1)*0.5)*0.1, vx2);\n' + 'vy2 = if(bounce, vy2 + (vr-vy2)*0.15, vy2);\n' + 'vr = if(bounce, vr + (vy2-vr)*0.85 , vr);\n' + 'vr2 = asin(vr/r);\n' + 'bounce = below(x2,r-(aspecty-1)*0.5);\n' + 'x2 = x2+vx2;\n' + 'vx2 = if(bounce, abs(vx2)*0.96 + (r-x2-(aspecty-1)*0.5)*0.1, vx2);\n' + 'vy2 = if(bounce, vy2 + (-vr-vy2)*0.15, vy2);\n' + 'vr = if(bounce, vr - (vy2+vr)*0.85 , vr);\n' + 'vr2 = asin(vr/r);\n' + 'vr = sin(vr3)*r;\n' + 'bounce = below(y3,r-(aspectx-1)*0.5);\n' + 'y3 = y3+vy3;\n' + 'vy3 = if(bounce, abs(vy3)*0.96 + (r-y3-(aspectx-1)*0.5)*0.1, vy3-0.0003*60/fps);\n' + 'vx3 = if(bounce, vx3 + (vr-vx3)*0.15, vx3);\n' + 'vr = if(bounce, vr + (vx3-vr)*0.85 , vr);\n' + 'vr3 = asin(vr/r);\n' + 'bounce = above(x3,1-r+(aspecty-1)*0.5);\n' + 'vx3 = if(bounce, - abs(vx3)*0.96 + (1-r-x3+(aspecty-1)*0.5)*0.1, vx3);\n' + 'vy3 = if(bounce, vy3 + (vr-vy3)*0.15, vy3);\n' + 'vr = if(bounce, vr + (vy3-vr)*0.85 , vr);\n' + 'vr3 = asin(vr/r);\n' + 'bounce = below(x3,r-(aspecty-1)*0.5);\n' + 'x3 = x3+vx3;\n' + 'vx3 = if(bounce, abs(vx3)*0.96 + (r-x3-(aspecty-1)*0.5)*0.1, vx3);\n' + 'vy3 = if(bounce, vy3 + (-vr-vy3)*0.15, vy3);\n' + 'vr = if(bounce, vr - (vy3+vr)*0.85 , vr);\n' + 'vr3 = asin(vr/r);\n' + 'bounce = below( sqrt( sqr(x1+vx1-x2-vx2) + sqr(y1+vy1-y2-vy2)), 2*r);\n' + 'bounce = bounce*below(sqrt( sqr(x1+vx1-x2-vx2) + sqr(y1+vy1-y2-vy2)),sqrt( sqr(x1-x2) + sqr(y1-y2)));\n' + 'ref_ang = atan2(x2-x1,y2-y1)+asin(1);\n' + 'v1 = sqrt(vx1*vx1+vy1*vy1);\n' + 'v2 = sqrt(vx2*vx2+vy2*vy2);\n' + 'w1 = atan2(vx1,vy1);\n' + 'w2 = atan2(vx2,vy2);\n' + 'vr = sin(vr1)*r;\n' + ' v2r=sin(vr2)*r;\n' + 'vx1 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + ((vr-v2r)-sin(ref_ang)*v1*cos(w1-ref_ang))*0.1+ sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx1);\n' + 'vy1 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + ((vr-v2r)-cos(ref_ang)*v1*cos(w1-ref_ang))*0.1+ cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy1);\n' + 'vx2 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + ((v2r-vr)-sin(ref_ang)*v2*cos(w2-ref_ang))*0.1+ sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx2);\n' + 'vy2 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + ((v2r-vr)-cos(ref_ang)*v2*cos(w2-ref_ang))*0.1+ cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy2);\n' + 'vr = if(bounce, vr + (cos(w1-ref_ang)*(v1-v2)-vr)*0.9 , vr);\n' + 'vr1 = asin(vr/r);\n' + 'v2r = if(bounce, v2r + (cos(w2-ref_ang)*(v2-v1)-v2r)*0.9 , v2r);\n' + 'vr2 = asin(v2r/r);\n' + 'bounce = below( sqrt( sqr(x1+vx1-x3-vx3) + sqr(y1+vy1-y3-vy3)), 2*r);\n' + 'bounce = bounce*below(sqrt( sqr(x1+vx1-x3-vx3) + sqr(y1+vy1-y3-vy3)),sqrt( sqr(x1-x3) + sqr(y1-y3)));\n' + 'ref_ang = atan2(x3-x1,y3-y1)+asin(1);\n' + 'v1 = sqrt(vx1*vx1+vy1*vy1);\n' + 'v2 = sqrt(vx3*vx3+vy3*vy3);\n' + 'w1 = atan2(vx1,vy1);\n' + 'w2 = atan2(vx3,vy3);\n' + 'vr = sin(vr1)*r;\n' + ' v2r=sin(vr3)*r;\n' + 'vx1 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + ((vr-v2r)-sin(ref_ang)*v1*cos(w1-ref_ang))*0.1+ sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx1);\n' + 'vy1 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + ((vr-v2r)-cos(ref_ang)*v1*cos(w1-ref_ang))*0.1+ cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy1);\n' + 'vx3 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + ((v2r-vr)-sin(ref_ang)*v2*cos(w2-ref_ang))*0.1+ sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx3);\n' + 'vy3 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + ((v2r-vr)-cos(ref_ang)*v2*cos(w2-ref_ang))*0.1+ cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy3);\n' + 'vr = if(bounce, vr + (cos(w1-ref_ang)*(v1-v2)-vr)*0.9 , vr);\n' + 'vr1 = asin(vr/r);\n' + 'v2r = if(bounce, v2r + (cos(w2-ref_ang)*(v2-v1)-v2r)*0.9 , v2r);\n' + 'vr3 = asin(v2r/r);\n' + 'bounce = below( sqrt( sqr(x3+vx3-x2-vx2) + sqr(y3+vy3-y2-vy2)), 2*r);\n' + 'bounce = bounce*below(sqrt( sqr(x2+vx2-x3-vx3) + sqr(y2+vy2-y3-vy3)),sqrt( sqr(x2-x3) + sqr(y2-y3)));\n' + 'ref_ang = atan2(x2-x3,y2-y3)+asin(1);\n' + 'v1 = sqrt(vx3*vx3+vy3*vy3);\n' + 'v2 = sqrt(vx2*vx2+vy2*vy2);\n' + 'w1 = atan2(vx3,vy3);\n' + 'w2 = atan2(vx2,vy2);\n' + 'vr = sin(vr3)*r;\n' + ' v2r=sin(vr2)*r;\n' + 'vx3 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + ((vr-v2r)-sin(ref_ang)*v1*cos(w1-ref_ang))*0.1+ sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx3);\n' + 'vy3 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + ((vr-v2r)-cos(ref_ang)*v1*cos(w1-ref_ang))*0.1+ cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy3);\n' + 'vx2 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + ((v2r-vr)-sin(ref_ang)*v2*cos(w2-ref_ang))*0.1+ sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx2);\n' + 'vy2 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + ((v2r-vr)-cos(ref_ang)*v2*cos(w2-ref_ang))*0.1+ cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy2);\n' + 'vr = if(bounce, vr + (cos(w1-ref_ang)*(v1-v2)-vr)*0.9 , vr);\n' + 'vr3 = asin(vr/r);\n' + 'v2r = if(bounce, v2r + (cos(w2-ref_ang)*(v2-v1)-v2r)*0.9 , v2r);\n' + 'vr2 = asin(v2r/r);\n' + 'q1 = aspectx;\n' + 'q2 = aspecty;\n' + 'q3 = r*2;\n' + 'q4  = x1;\n' + '  q5 = y1;\n' + '  q6 = vr1;\n' + 'q7  = x2;\n' + '  q8 = y2;\n' + '  q9 = vr2;\n' + 'q10 = x3;\n' + ' q11 = y3;\n' + ' q12 = vr3;\n' + 'q13 = atan2( (x1+x2+x3)/3 - 0.5, (y1+y2+y3)/3-0.5);\n' + 'q14 = sigmoid(sqrt( sqr((x1+x2+x3)/3 - 0.5) + sqr((y1+y2+y3)/3-0.5) ),2)*0.2;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
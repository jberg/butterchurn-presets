define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 9.0,
		wave_scale : 1.286,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.08925,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.5,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 0.626,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99951,
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
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 4.1,
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
		echo_orient : 0.0,
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
m.vy4 = 0;
m.q11 = 0;
m.r = 0;
m.vx4 = 0;
m.q12 = 0;
m.q13 = 0;
m.q14 = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.w1 = 0;
m.x2 = 0;
m.y3 = 0;
m.v1 = 0;
m.w2 = 0;
m.x3 = 0;
m.y4 = 0;
m.v2 = 0;
m.x4 = 0;
m.x1 = 0.5;
m.x2 = 0.51;
m.y2 = 0.9;
m.y1 = 0.7;
m.x3 = 0.8;
m.y3 = 0.5;
m.x4 = 0.2;
m.y4 = 0.5;
m.ax1 = 0;
m.ay1 = 0;
m.ax2 = 0;
m.ay2 = 0;
m.ax3 = 0;
m.ay3 = 0;
m.vx1 = 0.000;
m.vx2 = 0.000;
		return m;
	},
	'frame_eqs' : function(m) {
m.sx = (1+((0.01*mod((8*m.bass),8))*equal(mod(m.time,Math.floor((24-(2*m.bass)))), 0)));
m.sy = (1+((0.01*mod((8*m.mid),8))*equal(mod(m.time,(12+Math.floor((24-(2*m.bass))))), 0)));
m.zoom = 1;
m.warp = 0;
m.wave_a = 0;
m.r = (0.12+(Math.max(m.bass_att, m.treb_att)*0.002));
m.bounce = below(m.y1, m.r);
m.y1 = (m.y1+m.vy1);
m.vy1 = ifcond(m.bounce, ((Math.abs(m.vy1)*0.94)+((m.r-m.y1)*0.1)), (m.vy1-div((0.0003*60),m.fps)));
m.bounce = below(m.x1, m.r);
m.x1 = (m.x1+m.vx1);
m.vx1 = ifcond(m.bounce, ((Math.abs(m.vx1)*0.94)+((m.r-m.x1)*0.1)), m.vx1);
m.bounce = above(m.x1, (1-m.r));
m.vx1 = ifcond(m.bounce, ((-Math.abs(m.vx1)*0.94)+(((1-m.r)-m.x1)*0.04)), m.vx1);
m.bounce = below(m.y2, m.r);
m.y2 = (m.y2+m.vy2);
m.vy2 = ifcond(m.bounce, ((Math.abs(m.vy2)*0.94)+((m.r-m.y2)*0.1)), (m.vy2-div((0.0003*60),m.fps)));
m.bounce = below(m.x2, m.r);
m.x2 = (m.x2+m.vx2);
m.vx2 = ifcond(m.bounce, ((Math.abs(m.vx2)*0.94)+((m.r-m.x2)*0.1)), m.vx2);
m.bounce = above(m.x2, (1-m.r));
m.vx2 = ifcond(m.bounce, ((-Math.abs(m.vx2)*0.94)+(((1-m.r)-m.x2)*0.1)), m.vx2);
m.bounce = below(m.y3, m.r);
m.y3 = (m.y3+m.vy3);
m.vy3 = ifcond(m.bounce, ((Math.abs(m.vy3)*0.94)+((m.r-m.y3)*0.1)), (m.vy3-div((0.0003*60),m.fps)));
m.bounce = below(m.x3, m.r);
m.x3 = (m.x3+m.vx3);
m.vx3 = ifcond(m.bounce, ((Math.abs(m.vx3)*0.94)+((m.r-m.x3)*0.1)), m.vx3);
m.bounce = above(m.x3, (1-m.r));
m.vx3 = ifcond(m.bounce, ((-Math.abs(m.vx3)*0.94)+(((1-m.r)-m.x3)*0.1)), m.vx3);
m.bounce = below(m.y4, m.r);
m.y4 = (m.y4+m.vy4);
m.vy4 = ifcond(m.bounce, ((Math.abs(m.vy4)*0.94)+((m.r-m.y4)*0.1)), (m.vy4-div((0.0003*60),m.fps)));
m.bounce = below(m.x4, m.r);
m.x4 = (m.x4+m.vx4);
m.vx4 = ifcond(m.bounce, ((Math.abs(m.vx4)*0.94)+((m.r-m.x4)*0.1)), m.vx4);
m.bounce = above(m.x4, (1-m.r));
m.vx4 = ifcond(m.bounce, ((-Math.abs(m.vx4)*0.94)+(((1-m.r)-m.x4)*0.1)), m.vx4);
m.bounce = below(sqrt((sqr((((m.x1+m.vx1)-m.x2)-m.vx2))+sqr((((m.y1+m.vy1)-m.y2)-m.vy2)))), (2*m.r));
m.ref_ang = (Math.atan2((m.x2-m.x1), (m.y2-m.y1))+Math.asin(1));
m.v1 = sqrt(((m.vx1*m.vx1)+(m.vy1*m.vy1)));
m.v2 = sqrt(((m.vx2*m.vx2)+(m.vy2*m.vy2)));
m.w1 = Math.atan2(m.vx1, m.vy1);
m.w2 = Math.atan2(m.vx2, m.vy2);
m.vx1 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vx1);
m.vy1 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vy1);
m.vx2 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vx2);
m.vy2 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vy2);
m.bounce = below(sqrt((sqr((((m.x1+m.vx1)-m.x3)-m.vx3))+sqr((((m.y1+m.vy1)-m.y3)-m.vy3)))), (2*m.r));
m.ref_ang = (Math.atan2((m.x3-m.x1), (m.y3-m.y1))+Math.asin(1));
m.v1 = sqrt(((m.vx1*m.vx1)+(m.vy1*m.vy1)));
m.v2 = sqrt(((m.vx3*m.vx3)+(m.vy3*m.vy3)));
m.w1 = Math.atan2(m.vx1, m.vy1);
m.w2 = Math.atan2(m.vx3, m.vy3);
m.vx1 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vx1);
m.vy1 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vy1);
m.vx3 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vx3);
m.vy3 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vy3);
m.bounce = below(sqrt((sqr((((m.x2+m.vx2)-m.x3)-m.vx3))+sqr((((m.y2+m.vy2)-m.y3)-m.vy3)))), (2*m.r));
m.ref_ang = (Math.atan2((m.x3-m.x2), (m.y3-m.y2))+Math.asin(1));
m.v1 = sqrt(((m.vx2*m.vx2)+(m.vy2*m.vy2)));
m.v2 = sqrt(((m.vx3*m.vx3)+(m.vy3*m.vy3)));
m.w1 = Math.atan2(m.vx2, m.vy2);
m.w2 = Math.atan2(m.vx3, m.vy3);
m.vx2 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vx2);
m.vy2 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vy2);
m.vx3 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vx3);
m.vy3 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vy3);
m.bounce = below(sqrt((sqr((((m.x1+m.vx1)-m.x4)-m.vx4))+sqr((((m.y1+m.vy1)-m.y4)-m.vy4)))), (2*m.r));
m.ref_ang = (Math.atan2((m.x4-m.x1), (m.y4-m.y1))+Math.asin(1));
m.v1 = sqrt(((m.vx1*m.vx1)+(m.vy1*m.vy1)));
m.v2 = sqrt(((m.vx4*m.vx4)+(m.vy4*m.vy4)));
m.w1 = Math.atan2(m.vx1, m.vy1);
m.w2 = Math.atan2(m.vx4, m.vy4);
m.vx1 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vx1);
m.vy1 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vy1);
m.vx4 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vx4);
m.vy4 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vy4);
m.bounce = below(sqrt((sqr((((m.x2+m.vx2)-m.x4)-m.vx4))+sqr((((m.y2+m.vy2)-m.y4)-m.vy4)))), (2*m.r));
m.ref_ang = (Math.atan2((m.x4-m.x2), (m.y4-m.y2))+Math.asin(1));
m.v1 = sqrt(((m.vx2*m.vx2)+(m.vy2*m.vy2)));
m.v2 = sqrt(((m.vx4*m.vx4)+(m.vy4*m.vy4)));
m.w1 = Math.atan2(m.vx2, m.vy2);
m.w2 = Math.atan2(m.vx4, m.vy4);
m.vx2 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vx2);
m.vy2 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vy2);
m.vx4 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vx4);
m.vy4 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vy4);
m.bounce = below(sqrt((sqr((((m.x3+m.vx3)-m.x4)-m.vx4))+sqr((((m.y3+m.vy3)-m.y4)-m.vy4)))), (2*m.r));
m.ref_ang = (Math.atan2((m.x4-m.x3), (m.y4-m.y3))+Math.asin(1));
m.v1 = sqrt(((m.vx3*m.vx3)+(m.vy3*m.vy3)));
m.v2 = sqrt(((m.vx4*m.vx4)+(m.vy4*m.vy4)));
m.w1 = Math.atan2(m.vx3, m.vy3);
m.w2 = Math.atan2(m.vx4, m.vy4);
m.vx3 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vx3);
m.vy3 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v1)*Math.cos((m.w1-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v2)*Math.cos(((m.w2-m.ref_ang)-Math.asin(1))))), m.vy3);
m.vx4 = ifcond(m.bounce, (((Math.sin(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.sin((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vx4);
m.vy4 = ifcond(m.bounce, (((Math.cos(m.ref_ang)*m.v2)*Math.cos((m.w2-m.ref_ang)))+((Math.cos((m.ref_ang+Math.asin(1)))*m.v1)*Math.cos(((m.w1-m.ref_ang)-Math.asin(1))))), m.vy4);
m.q1 = m.aspectx;
m.q2 = m.aspecty;
m.q3 = m.x1;
m.q4 = m.y1;
m.q5 = m.r;
m.q6 = m.x2;
m.q7 = m.y2;
m.q8 = m.r;
m.q9 = m.x3;
m.q10 = m.y3;
m.q11 = m.r;
m.q12 = m.x4;
m.q13 = m.y4;
m.q14 = m.r;
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
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.yang = 0;
m.azang = 0;
m.xang = 0;
m.ayang = 0;
m.mod = 0;
m.axang = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.vol = 0;
m.sp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sp = ((((m.sample*6.28)*8)*8)*4);
m.vol = (((m.bass_att+m.mid_att)+m.treb_att)*0.33);
m.vol = (0.2+(0.5*(m.value1+m.value2)));
m.vol = 0.2;
m.mod = ifcond(below(m.mid_att, 1.8), (m.mid_att+0.2), 2);
m.ox = (((0.5*Math.sin(m.sp))*Math.sin((m.sample*3.14)))*m.vol);
m.oy = ((m.sample-0)*m.mod);
m.oz = (((0.5*Math.cos(m.sp))*Math.sin((m.sample*3.14)))*m.vol);
m.xang = (m.time*0.672);
m.axang = 0;
m.yang = (m.time*-1.351);
m.ayang = 0;
m.zang = (m.time*-0.401);
m.azang = 0;
m.fov = (0.6+(0.2*Math.sin(m.time)));
m.fov = 0.5;
m.mx = ((m.ox*Math.cos(m.zang))-(m.oy*Math.sin(m.zang)));
m.my = ((m.ox*Math.sin(m.zang))+(m.oy*Math.cos(m.zang)));
m.ox = m.mx;
m.oy = m.my;
m.mx = ((m.ox*Math.cos(m.yang))+(m.oz*Math.sin(m.yang)));
m.mz = ((-m.ox*Math.sin(m.yang))+(m.oz*Math.cos(m.yang)));
m.ox = m.mx;
m.oz = m.mz;
m.my = ((m.oy*Math.cos(m.xang))-(m.oz*Math.sin(m.xang)));
m.mz = ((m.oy*Math.sin(m.xang))+(m.oz*Math.cos(m.xang)));
m.oy = m.my;
m.oz = m.mz;
m.oz = (Math.abs(m.oz)-2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
m.r = (1+Math.sin(m.sp));
m.b = (0.5+(0.5*Math.sin((m.sample*1.57))));
m.g = (0.5+(0.5*Math.cos((m.sample*1.57))));
m.a = (0.5+((m.oz+2)*0.25));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sp = sample*6.28*8*8*4;\n' + 'vol = (bass_att + mid_att + treb_att)*0.33;\n' + 'vol = 0.2 + 0.5*(value1 + value2);\n' + 'vol = .2;\n' + 'mod = if(below(mid_att,1.8),mid_att+.2,2);\n' + 'ox = 0.5*sin(sp)*sin(sample*3.14)*vol;\n' + 'oy = (sample - 0)*mod;\n' + 'oz = 0.5*cos(sp)*sin(sample*3.14)*vol;\n' + 'xang = time*0.672;\n' + 'axang = 0;\n' + 'yang = time*-1.351;\n' + 'ayang = 0;\n' + 'zang = time*-0.401;\n' + 'azang = 0;\n' + 'fov = 0.6 + 0.2*sin(time);\n' + 'fov = .5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = abs(oz) - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;\n' + 'r = 1 + sin(sp);\n' + 'b = 0.5 + 0.5*sin(sample*1.57);\n' + 'g = 0.5 + 0.5*cos(sample*1.57);\n' + 'a = 0.5 + (oz + 2)*0.25;'),

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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.yang = 0;
m.azang = 0;
m.xang = 0;
m.ayang = 0;
m.mod = 0;
m.axang = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.vol = 0;
m.sp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sp = ((((m.sample*6.28)*8)*8)*4);
m.vol = (((m.bass_att+m.mid_att)+m.treb_att)*0.33);
m.vol = (0.2+(0.5*(m.value1+m.value2)));
m.vol = 0.2;
m.mod = ifcond(below(m.bass_att, 1.8), (m.bass_att+0.2), 2);
m.ox = (((0.5*Math.sin(m.sp))*Math.sin((m.sample*3.14)))*m.vol);
m.oy = ((m.sample-0)*m.mod);
m.oz = (((0.5*Math.cos(m.sp))*Math.sin((m.sample*3.14)))*m.vol);
m.xang = (m.time*-0.321);
m.axang = 0;
m.yang = (m.time*1.531);
m.ayang = 0;
m.zang = (m.time*-0.101);
m.azang = 0;
m.fov = (0.6+(0.2*Math.sin(m.time)));
m.fov = 0.5;
m.mx = ((m.ox*Math.cos(m.zang))-(m.oy*Math.sin(m.zang)));
m.my = ((m.ox*Math.sin(m.zang))+(m.oy*Math.cos(m.zang)));
m.ox = m.mx;
m.oy = m.my;
m.mx = ((m.ox*Math.cos(m.yang))+(m.oz*Math.sin(m.yang)));
m.mz = ((-m.ox*Math.sin(m.yang))+(m.oz*Math.cos(m.yang)));
m.ox = m.mx;
m.oz = m.mz;
m.my = ((m.oy*Math.cos(m.xang))-(m.oz*Math.sin(m.xang)));
m.mz = ((m.oy*Math.sin(m.xang))+(m.oz*Math.cos(m.xang)));
m.oy = m.my;
m.oz = m.mz;
m.oz = (Math.abs(m.oz)-2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
m.g = (1+Math.sin(m.sp));
m.r = (0.5+(0.5*Math.sin((m.sample*1.57))));
m.b = (0.5+(0.5*Math.cos((m.sample*1.57))));
m.a = (0.5+((m.oz+2)*0.25));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sp = sample*6.28*8*8*4;\n' + 'vol = (bass_att + mid_att + treb_att)*0.33;\n' + 'vol = 0.2 + 0.5*(value1 + value2);\n' + 'vol = .2;\n' + 'mod = if(below(bass_att,1.8),bass_att+.2,2);\n' + 'ox = 0.5*sin(sp)*sin(sample*3.14)*vol;\n' + 'oy = (sample - 0)*mod;\n' + 'oz = 0.5*cos(sp)*sin(sample*3.14)*vol;\n' + 'xang = time*-0.321;\n' + 'axang = 0;\n' + 'yang = time*1.531;\n' + 'ayang = 0;\n' + 'zang = time*-0.101;\n' + 'azang = 0;\n' + 'fov = 0.6 + 0.2*sin(time);\n' + 'fov = .5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = abs(oz) - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;\n' + 'g = 1 + sin(sp);\n' + 'r = 0.5 + 0.5*sin(sample*1.57);\n' + 'b = 0.5 + 0.5*cos(sample*1.57);\n' + 'a = 0.5 + (oz + 2)*0.25;'),

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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.yang = 0;
m.azang = 0;
m.xang = 0;
m.ayang = 0;
m.mod = 0;
m.axang = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.vol = 0;
m.sp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sp = ((((m.sample*6.28)*8)*8)*4);
m.vol = (((m.bass_att+m.mid_att)+m.treb_att)*0.33);
m.vol = (0.2+(0.5*(m.value1+m.value2)));
m.vol = 0.2;
m.mod = ifcond(below(m.treb_att, 1.8), (m.treb_att+0.2), 2);
m.ox = (((0.5*Math.sin(m.sp))*Math.sin((m.sample*3.14)))*m.vol);
m.oy = ((m.sample-0)*m.mod);
m.oz = (((0.5*Math.cos(m.sp))*Math.sin((m.sample*3.14)))*m.vol);
m.xang = (m.time*0.221);
m.axang = 0;
m.yang = (m.time*-0.411);
m.ayang = 0;
m.zang = (m.time*1.201);
m.azang = 0;
m.fov = (0.6+(0.2*Math.sin(m.time)));
m.fov = 0.5;
m.mx = ((m.ox*Math.cos(m.zang))-(m.oy*Math.sin(m.zang)));
m.my = ((m.ox*Math.sin(m.zang))+(m.oy*Math.cos(m.zang)));
m.ox = m.mx;
m.oy = m.my;
m.mx = ((m.ox*Math.cos(m.yang))+(m.oz*Math.sin(m.yang)));
m.mz = ((-m.ox*Math.sin(m.yang))+(m.oz*Math.cos(m.yang)));
m.ox = m.mx;
m.oz = m.mz;
m.my = ((m.oy*Math.cos(m.xang))-(m.oz*Math.sin(m.xang)));
m.mz = ((m.oy*Math.sin(m.xang))+(m.oz*Math.cos(m.xang)));
m.oy = m.my;
m.oz = m.mz;
m.oz = (Math.abs(m.oz)-2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
m.b = (1+Math.sin(m.sp));
m.g = (0.5+(0.5*Math.sin((m.sample*1.57))));
m.r = (0.5+(0.5*Math.cos((m.sample*1.57))));
m.a = (0.5+((m.oz+2)*0.25));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sp = sample*6.28*8*8*4;\n' + 'vol = (bass_att + mid_att + treb_att)*0.33;\n' + 'vol = 0.2 + 0.5*(value1 + value2);\n' + 'vol = .2;\n' + 'mod = if(below(treb_att,1.8),treb_att+.2,2);\n' + 'ox = 0.5*sin(sp)*sin(sample*3.14)*vol;\n' + 'oy = (sample - 0)*mod;\n' + 'oz = 0.5*cos(sp)*sin(sample*3.14)*vol;\n' + 'xang = time*0.221;\n' + 'axang = 0;\n' + 'yang = time*-0.411;\n' + 'ayang = 0;\n' + 'zang = time*1.201;\n' + 'azang = 0;\n' + 'fov = 0.6 + 0.2*sin(time);\n' + 'fov = .5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = abs(oz) - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;\n' + 'b = 1+sin(sp);\n' + 'g = 0.5 + 0.5*sin(sample*1.57);\n' + 'r = 0.5 + 0.5*cos(sample*1.57);\n' + 'a = 0.5 + (oz + 2)*0.25;'),

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
			textured : 1.0,
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
			y : 1.8,
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
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
			y : 1.8,
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
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
			y : 1.8,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 crisp_2;\n' + '   vec2 zz_3;\n' + '   mat2 tmpvar_4;\n' + '  tmpvar_4[0] = _qa.xy;\n' + '  tmpvar_4[1] = _qa.zw;\n' + '  zz_3 = (((\n' + '    (uv - vec2(0.5, 0.5))\n' + '   * texsize.xy) * 0.01) * tmpvar_4);\n' + '  zz_3 = zz_3.yx;\n' + '  uv_1 = (uv + ((\n' + '    cos(zz_3)\n' + '   * texsize.zw) * 12.0));\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, uv_1).xyz;\n' + '  crisp_2 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = (crisp_2 - 0.01);\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 crisp_1;\n' + '   vec2 uv3_2;\n' + '   vec2 uv2_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = ((uv - 0.5) * aspect.xy);\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = (0.1 / (sqrt(\n' + '    dot (tmpvar_4, tmpvar_4)\n' + '  ) + 0.1));\n' + '   vec2 tmpvar_6;\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (ang / 3.14);\n' + '  tmpvar_6.x = tmpvar_7;\n' + '  tmpvar_6.y = (_qg.z * tmpvar_5);\n' + '  uv2_3.y = (tmpvar_6.y + (0.1 * _qh.y));\n' + '  uv2_3.x = (tmpvar_7 + (0.2 * time));\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8.x = tmpvar_7;\n' + '  tmpvar_8.y = (4.0 * tmpvar_5);\n' + '  uv3_2.y = (tmpvar_8.y - (0.2 * _qh.y));\n' + '  uv3_2.x = tmpvar_8.x;\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = fract(uv3_2);\n' + '  uv3_2 = tmpvar_9;\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = ((2.0 * texture2D (sampler_main, uv2_3).xyz) + texture2D (sampler_main, tmpvar_9).xyz);\n' + '  crisp_1 = tmpvar_10;\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = fract(uv2_3);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_blur2, tmpvar_11);\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = fract(tmpvar_9);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur2, tmpvar_13);\n' + '  crisp_1 = ((3.0 * max (crisp_1, \n' + '    ((2.0 * ((tmpvar_12.xyz * scale2) + bias2)) + ((tmpvar_14.xyz * scale2) + bias2))\n' + '  )) * rad);\n' + '   float tmpvar_15;\n' + '  tmpvar_15 = clamp ((1.0 - (4.0 * rad)), 0.0, 1.0);\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = fract(uv);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur1, tmpvar_16);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18.w = 1.0;\n' + '  tmpvar_18.xyz = ((crisp_1 + (\n' + '    ((uv.y * pow ((1.0 - rad), 8.0)) * roam_cos)\n' + '  .xyz * tmpvar_15)) + ((tmpvar_15 * 2.0) * (\n' + '    (tmpvar_17.xyz * scale1)\n' + '   + bias1)));\n' + '  vec4 ret4 = tmpvar_18;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0.5;\n' + 'x2 = 0.51;\n' + 'y2 = 0.9;\n' + 'y1 = 0.7;\n' + 'x3 = 0.8;\n' + 'y3 = 0.5;\n' + 'x4 = 0.2;\n' + 'y4 = 0.5;\n' + 'ax1 = 0;\n' + 'ay1 = 0;\n' + 'ax2 = 0;\n' + 'ay2 = 0;\n' + 'ax3 = 0;\n' + 'ay3 = 0;\n' + 'vx1 = 0.000;\n' + 'vx2 = 0.000;'),
	'frame_eqs_str' : ('sx=1+.01*(8*bass%8)*equal(time%(int(24-2*bass)),0);\n' + 'sy=1+.01*(8*mid%8) *equal(time%(12+int(24-2*bass)),0);\n' + 'zoom = 1;\n' + 'warp = 0;\n' + 'wave_a = 0;\n' + 'r = 0.12+ max(bass_att,treb_att)*0.002;\n' + 'bounce = below(y1,r);\n' + 'y1 = y1+vy1;\n' + 'vy1 = if(bounce, abs(vy1)*0.94 + (r-y1)*0.1, vy1-0.0003*60/fps);\n' + 'bounce = below(x1,r);\n' + 'x1 = x1+vx1;\n' + 'vx1 = if(bounce, abs(vx1)*0.94 + (r-x1)*0.1, vx1);\n' + 'bounce = above(x1,1-r);\n' + 'vx1 = if(bounce, - abs(vx1)*0.94 + (1-r-x1)*0.04, vx1);\n' + 'bounce = below(y2,r);\n' + 'y2 = y2 + vy2;\n' + 'vy2 = if(bounce,abs(vy2)*0.94+(r-y2)*.1, vy2-0.0003*60/fps);\n' + 'bounce = below(x2,r);\n' + 'x2 = x2+ vx2;\n' + 'vx2 = if(bounce, abs(vx2)*0.94 + (r-x2)*0.1, vx2);\n' + 'bounce = above(x2,1-r);\n' + 'vx2 = if(bounce, - abs(vx2)*0.94 + (1-r-x2)*0.1, vx2);\n' + 'bounce = below(y3,r);\n' + 'y3 = y3 + vy3;\n' + 'vy3 = if(bounce,abs(vy3)*0.94+(r-y3)*.1, vy3-0.0003*60/fps);\n' + 'bounce = below(x3,r);\n' + 'x3 = x3+ vx3;\n' + 'vx3 = if(bounce, abs(vx3)*0.94 + (r-x3)*0.1, vx3);\n' + 'bounce = above(x3,1-r);\n' + 'vx3 = if(bounce, - abs(vx3)*0.94 + (1-r-x3)*0.1, vx3);\n' + 'bounce = below(y4,r);\n' + 'y4 = y4 + vy4;\n' + 'vy4 = if(bounce,abs(vy4)*0.94+(r-y4)*.1, vy4-0.0003*60/fps);\n' + 'bounce = below(x4,r);\n' + 'x4 = x4+ vx4;\n' + 'vx4 = if(bounce, abs(vx4)*0.94 + (r-x4)*0.1, vx4);\n' + 'bounce = above(x4,1-r);\n' + 'vx4 = if(bounce, - abs(vx4)*0.94 + (1-r-x4)*0.1, vx4);\n' + 'bounce = below( sqrt( sqr(x1+vx1-x2-vx2) + sqr(y1+vy1-y2-vy2)), 2*r);\n' + 'ref_ang = atan2(x2-x1,y2-y1)+asin(1);\n' + 'v1 = sqrt(vx1*vx1+vy1*vy1);\n' + 'v2 = sqrt(vx2*vx2+vy2*vy2);\n' + 'w1 = atan2(vx1,vy1);\n' + 'w2 = atan2(vx2,vy2);\n' + 'vx1 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx1);\n' + 'vy1 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy1);\n' + 'vx2 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx2);\n' + 'vy2 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy2);\n' + 'bounce = below( sqrt( sqr(x1+vx1-x3-vx3) + sqr(y1+vy1-y3-vy3)), 2*r);\n' + 'ref_ang = atan2(x3-x1,y3-y1)+asin(1);\n' + 'v1 = sqrt(vx1*vx1+vy1*vy1);\n' + 'v2 = sqrt(vx3*vx3+vy3*vy3);\n' + 'w1 = atan2(vx1,vy1);\n' + 'w2 = atan2(vx3,vy3);\n' + 'vx1 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx1);\n' + 'vy1 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy1);\n' + 'vx3 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx3);\n' + 'vy3 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy3);\n' + 'bounce = below( sqrt( sqr(x2+vx2-x3-vx3) + sqr(y2+vy2-y3-vy3)), 2*r);\n' + 'ref_ang = atan2(x3-x2,y3-y2)+asin(1);\n' + 'v1 = sqrt(vx2*vx2+vy2*vy2);\n' + 'v2 = sqrt(vx3*vx3+vy3*vy3);\n' + 'w1 = atan2(vx2,vy2);\n' + 'w2 = atan2(vx3,vy3);\n' + 'vx2 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx2);\n' + 'vy2 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy2);\n' + 'vx3 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx3);\n' + 'vy3 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy3);\n' + 'bounce = below( sqrt( sqr(x1+vx1-x4-vx4) + sqr(y1+vy1-y4-vy4)), 2*r);\n' + 'ref_ang = atan2(x4-x1,y4-y1)+asin(1);\n' + 'v1 = sqrt(vx1*vx1+vy1*vy1);\n' + 'v2 = sqrt(vx4*vx4+vy4*vy4);\n' + 'w1 = atan2(vx1,vy1);\n' + 'w2 = atan2(vx4,vy4);\n' + 'vx1 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx1);\n' + 'vy1 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy1);\n' + 'vx4 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx4);\n' + 'vy4 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy4);\n' + 'bounce = below( sqrt( sqr(x2+vx2-x4-vx4) + sqr(y2+vy2-y4-vy4)), 2*r);\n' + 'ref_ang = atan2(x4-x2,y4-y2)+asin(1);\n' + 'v1 = sqrt(vx2*vx2+vy2*vy2);\n' + 'v2 = sqrt(vx4*vx4+vy4*vy4);\n' + 'w1 = atan2(vx2,vy2);\n' + 'w2 = atan2(vx4,vy4);\n' + 'vx2 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx2);\n' + 'vy2 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy2);\n' + 'vx4 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx4);\n' + 'vy4 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy4);\n' + 'bounce = below( sqrt( sqr(x3+vx3-x4-vx4) + sqr(y3+vy3-y4-vy4)), 2*r);\n' + 'ref_ang = atan2(x4-x3,y4-y3)+asin(1);\n' + 'v1 = sqrt(vx3*vx3+vy3*vy3);\n' + 'v2 = sqrt(vx4*vx4+vy4*vy4);\n' + 'w1 = atan2(vx3,vy3);\n' + 'w2 = atan2(vx4,vy4);\n' + 'vx3 = if(bounce,sin(ref_ang)*v1*cos(w1-ref_ang) + sin(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vx3);\n' + 'vy3 = if(bounce,cos(ref_ang)*v1*cos(w1-ref_ang) + cos(ref_ang+asin(1))*v2*cos(w2-ref_ang-asin(1)), vy3);\n' + 'vx4 = if(bounce,sin(ref_ang)*v2*cos(w2-ref_ang) + sin(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vx4);\n' + 'vy4 = if(bounce,cos(ref_ang)*v2*cos(w2-ref_ang) + cos(ref_ang+asin(1))*v1*cos(w1-ref_ang-asin(1)), vy4);\n' + 'q1 = aspectx;\n' + 'q2 = aspecty;\n' + 'q3 = x1;\n' + 'q4 = y1;\n' + 'q5 = r;\n' + 'q6 = x2;\n' + 'q7 = y2;\n' + 'q8 = r;\n' + 'q9 = x3;\n' + 'q10 = y3;\n' + 'q11 = r;\n' + 'q12 = x4;\n' + 'q13 = y4;\n' + 'q14 = r;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
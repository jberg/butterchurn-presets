define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.998,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 100.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.701,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 0.20313,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 2.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.684,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9901,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 1.35,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.58,
		decay : 0.98,
		wave_a : 0.02,
		ob_g : 1.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 1.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.grav = 0;
m.tt = 0;
m.xx = 0;
m.yy = 0;
m.mn = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.m1 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.bounce = 0;
m.resist = 0;
m.mx = 0;
m.d1 = 0;
m.dir = 0;
m.spring = 0;
m.d2 = 0;
m.b1 = 0;
m.vy2 = 0;
m.dt = 0;
m.vx2 = 0;
m.vy3 = 0;
m.yy1 = 0;
m.xx1 = 0;
m.vx3 = 0;
m.vy4 = 0;
m.xx2 = 0;
m.vx4 = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;
m.y3 = 0;
m.si1 = 0;
m.x3 = 0;
m.y4 = 0;
m.si2 = 0;
m.x4 = 0;
m.si3 = 0;
m.t1 = 0;
m.x1 = 0.9;
m.y1 = 0.5;
m.x2 = 0.5;
m.y2 = 0.5;
m.x3 = 0.5;
m.y3 = 0.5;
m.x4 = 0.5;
m.y4 = 0.5;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 1;
m.xx1 = ((m.xx1*0.9)+(m.bass*0.01));
m.xx2 = ((m.xx2*0.9)+(m.treb*0.01));
m.yy1 = ((m.yy1*0.94)+((m.treb+m.bass)*0.0075));
m.x1 = ((0.5+m.xx1)-m.xx2);
m.y1 = (0.5+m.yy1);
m.spring = 10;
m.grav = 0.5;
m.resist = 1;
m.bounce = 0.5;
m.dt = 0.0005;
m.vx2 = ((m.vx2*(1-(m.resist*m.dt)))+(m.dt*(((m.x1+m.x3)-(2*m.x2))*m.spring)));
m.vy2 = ((m.vy2*(1-(m.resist*m.dt)))+(m.dt*((((m.y1+m.y3)-(2*m.y2))*m.spring)-m.grav)));
m.vx3 = ((m.vx3*(1-(m.resist*m.dt)))+(m.dt*(((m.x2+m.x4)-(2*m.x3))*m.spring)));
m.vy3 = ((m.vy3*(1-(m.resist*m.dt)))+(m.dt*((((m.y2+m.y4)-(2*m.y3))*m.spring)-m.grav)));
m.vx4 = ((m.vx4*(1-(m.resist*m.dt)))+(m.dt*((m.x3-m.x4)*m.spring)));
m.vy4 = ((m.vy4*(1-(m.resist*m.dt)))+(m.dt*(((m.y3-m.y4)*m.spring)-m.grav)));
m.x2 = (m.x2+m.vx2);
m.y2 = (m.y2+m.vy2);
m.x3 = (m.x3+m.vx3);
m.y3 = (m.y3+m.vy3);
m.x4 = (m.x4+m.vx4);
m.y4 = (m.y4+m.vy4);
m.vx2 = ifcond(above(m.x2, 0), m.vx2, (Math.abs(m.vx2)*m.bounce));
m.vx2 = ifcond(below(m.x2, 1), m.vx2, (-Math.abs(m.vx2)*m.bounce));
m.vx3 = ifcond(above(m.x3, 0), m.vx3, (Math.abs(m.vx3)*m.bounce));
m.vx3 = ifcond(below(m.x3, 1), m.vx3, (-Math.abs(m.vx3)*m.bounce));
m.vx4 = ifcond(above(m.x4, 0), m.vx4, (Math.abs(m.vx4)*m.bounce));
m.vx4 = ifcond(below(m.x4, 1), m.vx4, (-Math.abs(m.vx4)*m.bounce));
m.vy2 = ifcond(above(m.y2, 0), m.vy2, (Math.abs(m.vy2)*m.bounce));
m.vy2 = ifcond(below(m.y2, 1), m.vy2, (-Math.abs(m.vy2)*m.bounce));
m.vy3 = ifcond(above(m.y3, 0), m.vy3, (Math.abs(m.vy3)*m.bounce));
m.vy3 = ifcond(below(m.y3, 1), m.vy3, (-Math.abs(m.vy3)*m.bounce));
m.vy4 = ifcond(above(m.y4, 0), m.vy4, (Math.abs(m.vy4)*m.bounce));
m.vy4 = ifcond(below(m.y4, 1), m.vy4, (-Math.abs(m.vy4)*m.bounce));
m.q1 = m.x1;
m.q2 = m.x2;
m.q3 = m.x3;
m.q4 = m.x4;
m.q5 = m.y1;
m.q6 = m.y2;
m.q7 = m.y3;
m.q8 = m.y4;
m.zoom = 0.997;
m.bb = ((m.bb*0.99)+(m.bass*0.02));
m.mm = ((m.mm*0.99)+(m.mid*0.02));
m.tt = ((m.tt*0.99)+(m.treb*0.02));
m.mx = Math.max(Math.max(m.bb, m.mm), m.tt);
m.mn = Math.min(Math.min(m.bb, m.mm), m.tt);
m.ob_r = div((m.bb-m.mn),(m.mx-m.mn));
m.ob_g = div((m.mm-m.mn),(m.mx-m.mn));
m.ob_b = div((m.tt-m.mn),(m.mx-m.mn));
m.q6 = Math.atan2(m.vx4, m.vy4);
m.q5 = sqrt(((m.vx4*m.vx4)+(m.vy4*m.vy4)));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dir = ((-m.q6*1)+(Math.asin(1)*1));
m.b1 = 0.06;
m.m1 = (-0.6+(m.q5*200));
m.t1 = 0.05;
m.xx = m.q4;
m.yy = (1-m.q8);
m.x1 = (m.xx+(Math.cos((m.dir+1.5708))*m.b1));
m.y1 = (m.yy-(Math.sin((m.dir+1.5708))*m.b1));
m.x2 = (m.xx-(Math.cos((m.dir+1.5708))*m.b1));
m.y2 = (m.yy+(Math.sin((m.dir+1.5708))*m.b1));
m.d1 = (sqrt((((m.x1-m.x)*(m.x1-m.x))+((m.y1-m.y)*(m.y1-m.y))))-(m.b1*2));
m.si1 = (1-div(1,(1+pow(2, (-m.d1*100)))));
m.d2 = (sqrt((((m.x2-m.x)*(m.x2-m.x))+((m.y2-m.y)*(m.y2-m.y))))-(m.b1*2));
m.si2 = (1-div(1,(1+pow(2, (-m.d2*100)))));
m.si3 = -0.05;
m.dx = ((((((m.si1*Math.sin((m.y1-m.y)))*m.m1)*m.d1)-(((m.si2*Math.sin((m.y2-m.y)))*m.m1)*m.d2))+((m.si3*Math.cos(m.dir))*m.t1))*2);
m.dy = ((((((-m.si1*Math.sin((m.x1-m.x)))*m.m1)*m.d1)+(((m.si2*Math.sin((m.x2-m.x)))*m.m1)*m.d2))-((m.si3*Math.sin(m.dir))*m.t1))*2);
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
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.tt = 0;
m.mn = 0;
m.d = 0;
m.mx = 0;
m.tt1 = 0;
m.tt2 = 0;
m.tt3 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = ['d','tt1','tt2','tt3'];
			return m;
		},
		'frame_eqs' : function(m) {
m.bb = ((m.bb*0.99)+(m.bass*0.02));
m.mm = ((m.mm*0.99)+(m.mid*0.02));
m.tt = ((m.tt*0.99)+(m.treb*0.02));
m.mx = Math.max(Math.max(m.bb, m.mm), m.tt);
m.mn = Math.min(Math.min(m.bb, m.mm), m.tt);
m.r = div((m.bb-m.mn),(m.mx-m.mn));
m.g = div((m.mm-m.mn),(m.mx-m.mn));
m.b = div((m.tt-m.mn),(m.mx-m.mn));
		return m;
	},
		'point_eqs' : function(m) {
m.tt3 = ((m.tt3*0.6)+(m.value1*1));
m.tt2 = ((m.tt2*0.7)+(m.tt3*0.2));
m.tt1 = ((m.tt1*0.8)+(m.tt2*0.1));
m.d = ((m.d*0.9)+(m.tt1*0.2));
m.x = (0.5+((m.d*m.sample)*(1-m.sample)));
m.y = (-0.05+(m.sample*1.1));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('bb = bb*0.99 + bass*0.02;\n' + 'mm = mm*0.99 + mid*0.02;\n' + 'tt = tt*0.99 + treb*0.02;\n' + 'mx = max(max(bb,mm),tt);\n' + 'mn = min(min(bb,mm),tt);\n' + 'r = (bb-mn)/(mx-mn);\n' + 'g = (mm-mn)/(mx-mn);\n' + 'b = (tt-mn)/(mx-mn);'),
		'point_eqs_str' : ('tt3 = tt3*0.6 + (value1)*1;\n' + 'tt2 = tt2*0.7 + tt3*0.2;\n' + 'tt1 = tt1*0.8 + tt2*0.1;\n' + 'd = d*0.9 + tt1*0.2;\n' + 'x = 0.5 + d*sample*(1-sample);\n' + 'y =  -0.05 + sample*1.1;'),

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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 6.0,
			},
		'init_eqs' : function(m) {
m.bb = 0;
m.cc = 0;
m.gg = 0;
m.rr = 0;
m.q4 = 0;
m.q5 = 0;
m.h = 0;
m.l = 0;
m.zf = 0;
m.flip = 0;
m.n = 0;
m.sa = 0;
m.s = 0;
m.zm = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.zr = 0;
m.tm = 0;
m.xq = 0;
m.yr = 0;
m.monitor = 0;
m.ang = 0;
m.xr = 0;
m.ys = 0;
m.zt = 0;
m.phs = 0;
m.xs = 0;
m.ca = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {
m.h = m.q5;
m.s = 0.8;
m.l = 0.5;
m.cc = (6*m.h);
m.cc = ifcond(below(m.cc, 1), 0, ifcond(below(m.cc, 2), 1, ifcond(below(m.cc, 3), 2, ifcond(below(m.cc, 4), 3, ifcond(below(m.cc, 5), 4, 5)))));
m.zf = ((6*m.h)-m.cc);
m.zm = m.l;
m.zp = (m.l*(1-m.s));
m.zq = (m.l*(1-(m.s*m.zf)));
m.zt = (m.l*(1-(m.s*(1-m.zf))));
m.monitor = m.zq;
m.rr = ifcond(equal(m.cc, 0), m.zm, ifcond(equal(m.cc, 1), m.zq, ifcond(equal(m.cc, 2), m.zp, ifcond(equal(m.cc, 3), m.zp, ifcond(equal(m.cc, 4), m.zt, m.zm)))));
m.gg = ifcond(equal(m.cc, 0), m.zt, ifcond(equal(m.cc, 1), m.zm, ifcond(equal(m.cc, 2), m.zm, ifcond(equal(m.cc, 3), m.zq, ifcond(equal(m.cc, 4), m.zp, m.zp)))));
m.bb = ifcond(equal(m.cc, 0), m.zp, ifcond(equal(m.cc, 1), m.zp, ifcond(equal(m.cc, 2), m.zt, ifcond(equal(m.cc, 3), m.zm, ifcond(equal(m.cc, 4), m.zm, m.zq)))));
m.rr = ifcond(equal(m.s, 0), m.l, m.rr);
m.gg = ifcond(equal(m.s, 0), m.l, m.gg);
m.bb = ifcond(equal(m.s, 0), m.l, m.bb);
m.r = m.rr;
m.g = m.gg;
m.b = m.bb;
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.4);
m.tm = ((m.q4+(m.phs*2))-0.02);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = (((m.flip*0.4)-0.2)*m.sample);
m.zp = 0;
m.ang = ((m.tm*23)+(Math.sin(((m.tm*76)+(m.time*4)))*0.3));
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xr = ((m.xp*m.sa)+(m.yp*m.ca));
m.yr = ((m.xp*m.ca)-(m.yp*m.sa));
m.zr = m.zp;
m.xp = m.xr;
m.yp = (((m.yr+0.05)+(((Math.sin(m.tm)*0.5)+0.5)*0.2))+0.05);
m.zp = m.zr;
m.ang = (0.5*(Math.sin((m.tm*2))+Math.sin((m.tm*1.248))));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (m.tm*8);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+((Math.sin(((m.tm*2)-0.5))+Math.sin((m.tm*1.237)))*1.25));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (-1.0+(0.5*(Math.cos(((m.tm*3)+0.5))+Math.cos((m.tm*0.867)))));
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = (((Math.cos((m.tm*1))+Math.cos((m.tm*0.653)))*0.875)-1.05);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xq = ((m.xp*m.sa)+(m.zp*m.ca));
m.yq = m.yp;
m.zq = ((m.xp*m.ca)-(m.zp*m.sa));
m.ang = (0.5*(Math.cos((m.tm*1.273))+Math.cos(m.tm)));
m.xp = m.xq;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yp = ((m.yq*m.ca)-(m.zq*m.sa));
m.zp = ((m.yq*m.sa)+(m.zq*m.ca));
m.zp = (m.zp+1.5);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = (1-m.sample);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('h=q5;\n' + 's = 0.8;\n' + 'l= 0.5;\n' + 'cc=(6*h);\n' + 'cc=if(below(cc,1),0,if(below(cc,2),1,if(below(cc,3),2,if(below(cc,4),3,if(below(cc,5),4,5)))));\n' + 'zf=(6*h)-cc;\n' + 'zm=l;\n' + 'zp=l*(1-s);\n' + 'zq=l*(1-s*zf);\n' + 'zt=l*(1-s*(1-zf));\n' + 'monitor=zq;\n' + 'rr=if(equal(cc,0),zm,if(equal(cc,1),zq,if(equal(cc,2),zp,if(equal(cc,3),zp,if(equal(cc,4),zt,zm)))));\n' + 'gg=if(equal(cc,0),zt,if(equal(cc,1),zm,if(equal(cc,2),zm,if(equal(cc,3),zq,if(equal(cc,4),zp,zp)))));\n' + 'bb=if(equal(cc,0),zp,if(equal(cc,1),zp,if(equal(cc,2),zt,if(equal(cc,3),zm,if(equal(cc,4),zm,zq)))));\n' + 'rr=if(equal(s,0),l,rr);\n' + 'gg=if(equal(s,0),l,gg);\n' + 'bb=if(equal(s,0),l,bb);\n' + 'r=rr;\n' + 'g=gg;\n' + 'b=bb;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.4 ;\n' + 'tm=q4 + phs*2 - 0.02;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=(flip*0.4-0.2)*(sample);\n' + 'zp=0;\n' + 'ang=tm*23 + sin(tm*76 + time*4)*0.3;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xr=xp*sa + yp*ca;\n' + 'yr=xp*ca - yp*sa;\n' + 'zr=zp;\n' + 'xp=xr;\n' + 'yp=yr + 0.05 + (sin(tm)*0.5 + 0.5)*0.2 + 0.05;\n' + 'zp=zr;\n' + 'ang=0.5*(sin(tm*2)+sin(tm*1.248));\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=tm*8;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + (sin(tm*2 - 0.5)+sin(tm*1.237))*1.25;\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=-1.0 + 0.5*(cos(tm*3 + 0.5)+cos(tm*0.867));\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=(cos(tm*1)+cos(tm*0.653))*0.875 - 1.05;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xq=xp*sa + zp*ca;\n' + 'yq=yp;\n' + 'zq=xp*ca - zp*sa;\n' + 'ang=0.5*(cos(tm*1.273)+cos(tm));\n' + 'xp=xq;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yp=yq*ca - zq*sa;\n' + 'zp=yq*sa + zq*ca;\n' + 'zp=zp+1.5;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample);'),

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
			r2 : 1.0,
			a : 0.2,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.48652,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 27.0,
			border_r : 1.0,
			num_inst : 7.0,
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
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.17987,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 6.0,
			border_r : 1.0,
			num_inst : 21.0,
			},
		'init_eqs' : function(m) {
m.att = 0;
m.centerx = 0;
m.centery = 0;
m.yamp = 0;
m.xamp = 0;
m.yamptarg = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.xspeed = 0;
m.vol = 0;
m.ydir = 0;
m.xdir = 0;
m.mis = 0;
m.ypos = 0;
m.xpos = 0;

			m.rkeys = ['centerx','centery','yamp','xamp','yamptarg','xamptarg','yspeed','xspeed','ydir','xdir','ypos','xpos'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.ang+(10*Math.sin((m.time*0.8))));
m.vol = (0.167*((m.bass+m.mid)+m.att));
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.5*m.vol)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.3*m.vol)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.x = m.centerx;
m.y = Math.abs((m.centery-1));
m.centerx = ((1.75*m.xpos)+0.5);
m.centery = ((1.75*m.ypos)+0.5);
m.r2 = (0.5+(0.2*Math.sin((m.time*0.666))));
m.g2 = (0.5+(0.2*Math.sin((m.time*0.555))));
m.b2 = (0.5+(0.2*Math.sin((m.time*0.777))));
m.rad = (m.rad+(m.bass*0.1));
m.border_r = (m.bass*0.3);
m.border_g = (m.treb*0.3);
m.border_b = (m.mis*0.3);
m.r = ifcond(above(m.bass, 1.3), 1, 0);
m.g = ifcond(above(m.bass, 1.3), 1, 0);
m.b = ifcond(above(m.bass, 1.3), 1, 0);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = ang + 10*sin(time*.8);\n' + 'vol = 0.167*(bass+mid+att);\n' + 'xamptarg = if(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'yamptarg = if(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'x = centerx;\n' + 'y = abs(centery-1);\n' + 'centerx = 1.75*xpos + 0.5;\n' + 'centery = 1.75*ypos + 0.5;\n' + 'r2 = .5+.2*sin(time*.666);\n' + 'g2 = .5+.2*sin(time*.555);\n' + 'b2 = .5+.2*sin(time*.777);\n' + 'rad = rad + bass*.1;\n' + 'border_r = bass*.3;\n' + 'border_g = treb*.3;\n' + 'border_b = mis*.3;\n' + 'r = if(above(bass,1.3),1,0);\n' + 'g = if(above(bass,1.3),1,0);\n' + 'b = if(above(bass,1.3),1,0);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.4,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.23067,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 6.0,
			border_r : 1.0,
			num_inst : 15.0,
			},
		'init_eqs' : function(m) {
m.att = 0;
m.centerx = 0;
m.centery = 0;
m.yamp = 0;
m.xamp = 0;
m.yamptarg = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.xspeed = 0;
m.vol = 0;
m.ydir = 0;
m.xdir = 0;
m.mis = 0;
m.ypos = 0;
m.xpos = 0;

			m.rkeys = ['centerx','centery','yamp','xamp','yamptarg','xamptarg','yspeed','xspeed','ydir','xdir','ypos','xpos'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.ang+(10*Math.sin((m.time*0.8))));
m.vol = (0.167*((m.bass+m.mid)+m.att));
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.5*m.vol)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.3*m.vol)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.x = m.centerx;
m.y = Math.abs((m.centery-1));
m.centerx = ((1.75*m.xpos)+0.5);
m.centery = ((1.75*m.ypos)+0.5);
m.r2 = (0.5+(0.2*Math.sin((m.time*0.666))));
m.g2 = (0.5+(0.2*Math.sin((m.time*0.555))));
m.b2 = (0.5+(0.2*Math.sin((m.time*0.777))));
m.rad = (m.rad+(m.bass*0.1));
m.border_r = (m.bass*0.3);
m.border_g = (m.treb*0.3);
m.border_b = (m.mis*0.3);
m.r = ifcond(above(m.bass, 1.3), 1, 0);
m.g = ifcond(above(m.bass, 1.3), 1, 0);
m.b = ifcond(above(m.bass, 1.3), 1, 0);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = ang + 10*sin(time*.8);\n' + 'vol = 0.167*(bass+mid+att);\n' + 'xamptarg = if(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'yamptarg = if(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'x = centerx;\n' + 'y = abs(centery-1);\n' + 'centerx = 1.75*xpos + 0.5;\n' + 'centery = 1.75*ypos + 0.5;\n' + 'r2 = .5+.2*sin(time*.666);\n' + 'g2 = .5+.2*sin(time*.555);\n' + 'b2 = .5+.2*sin(time*.777);\n' + 'rad = rad + bass*.1;\n' + 'border_r = bass*.3;\n' + 'border_g = treb*.3;\n' + 'border_b = mis*.3;\n' + 'r = if(above(bass,1.3),1,0);\n' + 'g = if(above(bass,1.3),1,0);\n' + 'b = if(above(bass,1.3),1,0);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.2,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.27048,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 6.0,
			border_r : 1.0,
			num_inst : 7.0,
			},
		'init_eqs' : function(m) {
m.att = 0;
m.centerx = 0;
m.centery = 0;
m.yamp = 0;
m.xamp = 0;
m.yamptarg = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.xspeed = 0;
m.vol = 0;
m.ydir = 0;
m.xdir = 0;
m.mis = 0;
m.ypos = 0;
m.xpos = 0;

			m.rkeys = ['centerx','centery','yamp','xamp','yamptarg','xamptarg','yspeed','xspeed','ydir','xdir','ypos','xpos'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.ang+(10*Math.sin((m.time*0.8))));
m.vol = (0.167*((m.bass+m.mid)+m.att));
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.5*m.vol)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.3*m.vol)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.x = m.centerx;
m.y = Math.abs((m.centery-1));
m.centerx = ((1.75*m.xpos)+0.5);
m.centery = ((1.75*m.ypos)+0.5);
m.r2 = (0.5+(0.2*Math.sin((m.time*0.666))));
m.g2 = (0.5+(0.2*Math.sin((m.time*0.555))));
m.b2 = (0.5+(0.2*Math.sin((m.time*0.777))));
m.rad = (m.rad+(m.bass*0.1));
m.border_r = (m.bass*0.3);
m.border_g = (m.treb*0.3);
m.border_b = (m.mis*0.3);
m.r = ifcond(above(m.bass, 1.3), 1, 0);
m.g = ifcond(above(m.bass, 1.3), 1, 0);
m.b = ifcond(above(m.bass, 1.3), 1, 0);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = ang + 10*sin(time*.8);\n' + 'vol = 0.167*(bass+mid+att);\n' + 'xamptarg = if(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'yamptarg = if(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'x = centerx;\n' + 'y = abs(centery-1);\n' + 'centerx = 1.75*xpos + 0.5;\n' + 'centery = 1.75*ypos + 0.5;\n' + 'r2 = .5+.2*sin(time*.666);\n' + 'g2 = .5+.2*sin(time*.555);\n' + 'b2 = .5+.2*sin(time*.777);\n' + 'rad = rad + bass*.1;\n' + 'border_r = bass*.3;\n' + 'border_g = treb*.3;\n' + 'border_b = mis*.3;\n' + 'r = if(above(bass,1.3),1,0);\n' + 'g = if(above(bass,1.3),1,0);\n' + 'b = if(above(bass,1.3),1,0);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 a_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = ((tmpvar_3.x * 0.01) + uv.x);\n' + '  tmpvar_4.y = ((tmpvar_3.y * 0.01) - uv.y);\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, tmpvar_4).xyz;\n' + '  a_1 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur1, uv);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (uv + ((\n' + '    (a_1 - (((tmpvar_6.xyz * scale1) + bias1) * 5.0))\n' + '  .xy * texsize.zw) * 5.0));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_main, tmpvar_7);\n' + '  ret_2 = tmpvar_8.xyz;\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = ((uv_orig * texsize.xy) * texsize_noise_lq.zw);\n' + '  tmpvar_9 = texture2D (sampler_noise_lq, P_10);\n' + '  ret_2 = (ret_2 + ((\n' + '    (tmpvar_9.xyz * 2.0)\n' + '   - 1.0) * 0.01));\n' + '  ret_2 = (ret_2 - 0.00014);\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11.w = 1.0;\n' + '  tmpvar_11.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_11;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec3 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv).xyz;\n' + '  ret_1 = tmpvar_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uv);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur2, uv);\n' + '  ret_1 = (1.0 - pow ((\n' + '    ((tmpvar_4.xyz * scale2) + bias2)\n' + '   / bass_att), vec3((1.0 - \n' + '    dot (clamp (pow ((\n' + '      ((tmpvar_3.xyz * scale1) + bias1)\n' + '     / treb_att), vec3((1.0 - \n' + '      dot (clamp (ret_1, 0.0, 1.0), vec3(0.32, 0.49, 0.29))\n' + '    ))), 0.0, 1.0), vec3(0.32, 0.49, 0.29))\n' + '  ))));\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0.9;\n' + 'y1 = 0.5;\n' + 'x2 = 0.5;\n' + ' y2 = 0.5;\n' + 'x3 = 0.5;\n' + ' y3 = 0.5;\n' + 'x4 = 0.5;\n' + ' y4 = 0.5;'),
	'frame_eqs_str' : ('decay = 1;\n' + 'xx1 = xx1*0.9 + (bass)*0.01;\n' + 'xx2 = xx2*0.9 + (treb)*0.01;\n' + 'yy1 = yy1*0.94 + (treb+bass)*0.0075;\n' + 'x1 = 0.5 + xx1-xx2;\n' + 'y1 = 0.5 + yy1;\n' + 'spring = 10;\n' + 'grav = .5;\n' + 'resist = 1;\n' + 'bounce = 0.5;\n' + 'dt = 0.0005;\n' + 'vx2 = vx2*(1-resist*dt) + dt*((x1+x3-2*x2)*spring);\n' + 'vy2 = vy2*(1-resist*dt) + dt*((y1+y3-2*y2)*spring-grav);\n' + 'vx3 = vx3*(1-resist*dt) + dt*((x2+x4-2*x3)*spring);\n' + 'vy3 = vy3*(1-resist*dt) + dt*((y2+y4-2*y3)*spring-grav);\n' + 'vx4 = vx4*(1-resist*dt) + dt*((x3-x4)*spring);\n' + 'vy4 = vy4*(1-resist*dt) + dt*((y3-y4)*spring-grav);\n' + 'x2 = x2 + vx2;\n' + 'y2 = y2 + vy2;\n' + 'x3 = x3 + vx3;\n' + 'y3 = y3 + vy3;\n' + 'x4 = x4 + vx4;\n' + 'y4 = y4 + vy4;\n' + 'vx2 = if(above(x2,0),vx2,abs(vx2)*bounce);\n' + 'vx2 = if(below(x2,1),vx2,-abs(vx2)*bounce);\n' + 'vx3 = if(above(x3,0),vx3,abs(vx3)*bounce);\n' + 'vx3 = if(below(x3,1),vx3,-abs(vx3)*bounce);\n' + 'vx4 = if(above(x4,0),vx4,abs(vx4)*bounce);\n' + 'vx4 = if(below(x4,1),vx4,-abs(vx4)*bounce);\n' + 'vy2 = if(above(y2,0),vy2,abs(vy2)*bounce);\n' + 'vy2 = if(below(y2,1),vy2,-abs(vy2)*bounce);\n' + 'vy3 = if(above(y3,0),vy3,abs(vy3)*bounce);\n' + 'vy3 = if(below(y3,1),vy3,-abs(vy3)*bounce);\n' + 'vy4 = if(above(y4,0),vy4,abs(vy4)*bounce);\n' + 'vy4 = if(below(y4,1),vy4,-abs(vy4)*bounce);\n' + 'q1 = x1;\n' + 'q2 = x2;\n' + 'q3 = x3;\n' + 'q4 = x4;\n' + 'q5 = y1;\n' + 'q6 = y2;\n' + 'q7 = y3;\n' + 'q8 = y4;\n' + 'zoom = 0.997;\n' + 'bb = bb*0.99 + bass*0.02;\n' + 'mm = mm*0.99 + mid*0.02;\n' + 'tt = tt*0.99 + treb*0.02;\n' + 'mx = max(max(bb,mm),tt);\n' + 'mn = min(min(bb,mm),tt);\n' + 'ob_r = (bb-mn)/(mx-mn);\n' + 'ob_g = (mm-mn)/(mx-mn);\n' + 'ob_b = (tt-mn)/(mx-mn);\n' + 'q6 = atan2(vx4,vy4);\n' + 'q5 = sqrt(vx4*vx4 + vy4*vy4);'),
	'pixel_eqs_str' : ('dir = -q6*1 + asin(1)*1;\n' + 'b1 = 0.06;\n' + 'm1 = -0.6 + q5*200;\n' + 't1 = 0.05;\n' + 'xx = q4;\n' + 'yy = 1-q8;\n' + 'x1 = xx   +cos(dir+1.5708)*b1;\n' + 'y1 = yy -sin(dir+1.5708)*b1;\n' + 'x2 = xx   -cos(dir+1.5708)*b1;\n' + 'y2 = yy +sin(dir+1.5708)*b1;\n' + 'd1 = sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y))-b1*2;\n' + 'si1 = 1- 1/(1+pow(2,-d1*100));\n' + 'd2 = sqrt((x2-x)*(x2-x)+(y2-y)*(y2-y))-b1*2;\n' + 'si2 = 1- 1/(1+pow(2,-d2*100));\n' + 'si3 = -0.05;\n' + 'dx = (si1*sin(y1-y)*m1*d1  - si2*sin(y2-y)*m1*d2 + si3*cos(dir)*t1)*2;\n' + 'dy = (-si1*sin(x1-x)*m1*d1 + si2*sin(x2-x)*m1*d2 - si3*sin(dir)*t1)*2;'),
};

return pmap;
});
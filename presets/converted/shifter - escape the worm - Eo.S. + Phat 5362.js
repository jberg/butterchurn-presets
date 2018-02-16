define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 1.0,
		mv_x : 0.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 1.285751,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.125,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.9999,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 1.0,
		mv_b : 0.71,
		echo_zoom : 1.006543,
		ob_size : 0.05,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.91,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.3,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 1.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 1.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.a = 0;
m.q2 = 0;
m.b = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.mt = 0;
m.q8 = 0;
m.toc = 0;
m.mx = 0;
m.vav = 0;
m.my = 0;
m.treb_avg = 0;
m.dis = 0;
m.tic = 0;
m.ra = 0;
m.rmod = 0;
m.rb = 0;
m.slide = 0;
m.bt = 0;
m.bass_avg = 0;
m.zm = 0;
m.tin = 0;
m.tm = 0;
m.q1sgn = 0;
m.mid_avg = 0;
m.sp = 0;
m.vt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.q1 = Math.sin(m.time);
m.q1sgn = sign(m.q1);
m.q1 = Math.abs(m.q1);
m.q1 = pow(m.q1, 6);
m.q1 = (m.q1*m.q1sgn);
m.q1 = ((m.q1*0.4)+0.5);
m.q2 = (0.5+(0.1*Math.sin((m.time*0.548))));
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = m.time;
m.ra = 1;
m.treb_avg = (m.tic*((m.treb_avg*(div(1,m.tic)-m.ra))+(m.ra*m.treb)));
m.mid_avg = (m.tic*((m.mid_avg*(div(1,m.tic)-m.ra))+(m.ra*m.mid)));
m.bass_avg = (m.tic*((m.bass_avg*(div(1,m.tic)-m.ra))+(m.ra*m.bass)));
m.rb = 1;
m.vav = (m.tic*((m.vav*(div(1,m.tic)-m.rb))+((m.rb*((m.bass+m.treb)+m.mid))*0.33333)));
m.tt = (m.tt+(m.tic*m.treb_avg));
m.mt = (m.mt+(m.tic*m.mid_avg));
m.bt = (m.bt+(m.tic*m.bass_avg));
m.vt = (m.vt+((m.tic*((m.treb_avg+m.mid_avg)+m.bass_avg))*0.33333));
m.sp = (Math.abs((m.vav-m.slide))*0.1);
m.slide = (ifcond(above(m.slide, m.vav), (m.slide-(m.tic*m.sp)), (m.slide+(m.tic*m.sp)))+((1-m.toc)*m.vav));
m.toc = 1;
m.q3 = (((m.treb+m.bass)+m.mid)*0.3333);
m.q3 = (((m.q3*m.q3)*0.5)+0.1);
m.q4 = m.mt;
m.q5 = m.bt;
m.cx = m.q1;
m.cy = m.q2;
m.rmod = ((((m.treb_avg+m.mid_avg)*0.5)-(m.bass_avg*0.5))*0.01);
m.rmod = ((0.02*pow(div(m.rmod,0.02), 2))*7);
m.rmod = Math.min(0.001, Math.max(m.rmod, -0.001));
m.rmod = (m.rmod*pow((Math.sin(m.time)*1.1), 2));
m.rot = ((0.02*pow(div(m.rmod,0.02), 2))*40);
m.q6 = m.rmod;
m.q7 = (m.slide-((below(m.q3, 0.5)*(6+(2*Math.sin((m.time*24)))))*pow(Math.min(1, ((0.5-m.q3)*2)), 5)));
m.q8 = ifcond(above(Math.sin((m.time*0.5)), 0), -1, 1);
		m.rkeys = ['rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.tm = div(m.time,m.rad);
m.a = m.q1;
m.b = m.q2;
m.mx = (m.x-m.a);
m.my = (m.y-m.b);
m.zm = -0.45;
m.zm = ifcond(above(Math.sin((m.time*2.1)), 0.95), 0.45, m.zm);
m.dis = (pow(((m.mx*m.mx)+(m.my*m.my)), 0.5)*0.70710678);
m.rot = (m.rot*(1-m.dis));
m.rot = ((m.rot*20)*m.q8);
m.dx = ((((m.zm*m.mx)*m.dis)*Math.cos((m.my*3.14)))*m.q3);
m.dy = ((((m.zm*m.my)*m.dis)*Math.cos((m.mx*3.14)))*m.q3);
		return m;
	},
	'waves' : [
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
m.tm = 0;
m.sp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sp = (m.sample*6.283185);
m.x = (0.5+(Math.sin(m.sp)*0.45));
m.y = (0.5+(Math.cos(m.sp)*0.45));
m.tm = ((m.time*0.5)+m.sp);
m.r = (0.75+(0.25*Math.sin((m.tm*1.178))));
m.g = (0.75+(0.25*Math.sin((m.tm*1.152))));
m.b = (0.75+(0.25*Math.sin((m.tm*1.102))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sp = sample*6.283185;\n' + 'x = .5 + sin(sp)*.45;\n' + 'y = .5 + cos(sp)*.45;\n' + 'tm = time*.5 + sp;\n' + 'r = .75 + .25*sin(tm*1.178);\n' + 'g = .75 + .25*sin(tm*1.152);\n' + 'b = .75 + .25*sin(tm*1.102);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 3.0,
			g : 1.0,
			scaling : 1.32735,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 1.0,
			sep : 51.0,
			},
		'init_eqs' : function(m) {
m.vx = 0;
m.vy = 0;
m.sw = 0;
m.rx = 0;
m.ry = 0;
m.flux = 0;
m.g1 = 0;
m.fluy = 0;
m.it = 0;
m.b1 = 0;
m.xfade = 0;
m.tm = 0;
m.t1 = 0;
m.xfade2 = 0;
m.r1 = 0;

			m.rkeys = ['vx','vy','sw','it'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = ((Math.sin((m.time*0.236))*0.5)+0.5);
		return m;
	},
		'point_eqs' : function(m) {
m.it = ((m.it+1)*below(m.it, 5));
m.sw = ifcond(equal(m.it, 0), rand(2), m.sw);
m.rx = ifcond(m.sw, (rand(1001)*0.001), rand(2));
m.ry = ifcond(m.sw, rand(2), (rand(1001)*0.001));
m.tm = ((m.time*0.5)+(m.sample*2));
m.vx = ifcond(equal(m.it, 0), m.rx, (m.vx+(m.sw*0.002)));
m.vy = ifcond(equal(m.it, 0), m.ry, (m.vy+((1-m.sw)*0.002)));
m.x = m.vx;
m.y = m.vy;
m.tm = ((1.11+m.sample)+(m.t1*2));
m.flux = (Math.sin(m.time)*0.5);
m.fluy = (Math.cos(m.time)*0.5);
m.xfade = Math.max((-Math.abs(((m.x-0.5)+m.flux))+1), 0);
m.xfade2 = Math.max((-Math.abs(((m.y-0.5)+m.fluy))+1), 0);
m.xfade = ((m.xfade2+m.xfade)*0.5);
m.r1 = (0.5+(0.5*Math.sin((m.tm+0.0))));
m.g1 = (0.5+(0.5*Math.sin((m.tm+2.1))));
m.b1 = (0.5+(0.5*Math.sin((m.tm+4.2))));
m.r = ((m.r1*m.xfade)+(m.g1*(1-m.xfade)));
m.g = ((m.g1*m.xfade)+(m.b1*(1-m.xfade)));
m.b = ((m.b1*m.xfade)+(m.r1*(1-m.xfade)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=sin(time*0.236)*0.5 + 0.5;'),
		'point_eqs_str' : ('it = (it+1)*below(it,5);\n' + 'sw = if(equal(it,0),rand(2),sw);\n' + 'rx = if(sw,rand(1001)*.001,rand(2));\n' + 'ry = if(sw,rand(2),rand(1001)*.001);\n' + 'tm = time*.5 + sample*2;\n' + 'vx = if(equal(it,0),rx,vx + sw*.002);\n' + 'vy = if(equal(it,0),ry,vy +(1-sw)*.002);\n' + 'x = vx;\n' + 'y = vy;\n' + 'tm= 1.11 + sample + t1*2;\n' + 'flux=sin(time)*0.5;\n' + 'fluy=cos(time)*0.5;\n' + 'xfade = max(-abs(x-0.5 + flux) + 1 , 0);\n' + 'xfade2= max(-abs(y-0.5 + fluy) + 1 , 0);\n' + 'xfade = (xfade2+xfade)*0.5;\n' + 'r1 = .5 + .5*sin(tm + 0.0);\n' + 'g1 = .5 + .5*sin(tm + 2.1);\n' + 'b1 = .5 + .5*sin(tm + 4.2);\n' + 'r=r1*xfade + g1*(1-xfade);\n' + 'g=g1*xfade + b1*(1-xfade);\n' + 'b=b1*xfade + r1*(1-xfade);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 3.0,
			g : 1.0,
			scaling : 1.32735,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 1.0,
			sep : 51.0,
			},
		'init_eqs' : function(m) {
m.vx = 0;
m.vy = 0;
m.sw = 0;
m.rx = 0;
m.ry = 0;
m.flux = 0;
m.g1 = 0;
m.fluy = 0;
m.it = 0;
m.b1 = 0;
m.xfade = 0;
m.tm = 0;
m.t1 = 0;
m.xfade2 = 0;
m.r1 = 0;

			m.rkeys = ['vx','vy','sw','it'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = ((Math.sin((m.time*0.236))*0.5)+0.5);
		return m;
	},
		'point_eqs' : function(m) {
m.it = ((m.it+1)*below(m.it, 25));
m.sw = ifcond(equal(m.it, 0), rand(2), m.sw);
m.rx = ifcond(m.sw, (rand(1001)*0.001), rand(2));
m.ry = ifcond(m.sw, rand(2), (rand(1001)*0.001));
m.tm = ((m.time*0.5)+(m.sample*2));
m.vx = ifcond(equal(m.it, 0), m.rx, (m.vx+(m.sw*0.002)));
m.vy = ifcond(equal(m.it, 0), m.ry, (m.vy+((1-m.sw)*0.002)));
m.x = m.vx;
m.y = m.vy;
m.tm = ((1.11+m.sample)+(m.t1*2.0));
m.flux = (Math.sin(m.time)*0.5);
m.fluy = (Math.cos(m.time)*0.5);
m.xfade = Math.max((-Math.abs(((m.x-0.5)+m.flux))+1), 0);
m.xfade2 = Math.max((-Math.abs(((m.y-0.5)+m.fluy))+1), 0);
m.xfade = ((m.xfade2+m.xfade)*0.5);
m.r1 = (0.5+(0.5*Math.sin((m.tm+0.0))));
m.g1 = (0.5+(0.5*Math.sin((m.tm+2.1))));
m.b1 = (0.5+(0.5*Math.sin((m.tm+4.2))));
m.r = ((m.r1*m.xfade)+(m.g1*(1-m.xfade)));
m.g = ((m.g1*m.xfade)+(m.b1*(1-m.xfade)));
m.b = ((m.b1*m.xfade)+(m.r1*(1-m.xfade)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=sin(time*0.236)*0.5 + 0.5;'),
		'point_eqs_str' : ('it = (it+1)*below(it,25);\n' + 'sw = if(equal(it,0),rand(2),sw);\n' + 'rx = if(sw,rand(1001)*.001,rand(2));\n' + 'ry = if(sw,rand(2),rand(1001)*.001);\n' + 'tm = time*.5 + sample*2;\n' + 'vx = if(equal(it,0),rx,vx + sw*.002);\n' + 'vy = if(equal(it,0),ry,vy +(1-sw)*.002);\n' + 'x = vx;\n' + 'y = vy;\n' + 'tm= 1.11 + sample + t1*2.0;\n' + 'flux=sin(time)*0.5;\n' + 'fluy=cos(time)*0.5;\n' + 'xfade = max(-abs(x-0.5 + flux) + 1 , 0);\n' + 'xfade2= max(-abs(y-0.5 + fluy) + 1 , 0);\n' + 'xfade = (xfade2+xfade)*0.5;\n' + 'r1 = .5 + .5*sin(tm + 0.0);\n' + 'g1 = .5 + .5*sin(tm + 2.1);\n' + 'b1 = .5 + .5*sin(tm + 4.2);\n' + 'r=r1*xfade + g1*(1-xfade);\n' + 'g=g1*xfade + b1*(1-xfade);\n' + 'b=b1*xfade + r1*(1-xfade);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
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
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.zang = 0;
m.q2 = 0;
m.set = 0;
m.q6 = 0;
m.q7 = 0;
m.ox = 0;
m.oy = 0;
m.it = 0;
m.mx = 0;
m.my = 0;
m.tic = 0;
m.off = 0;
m.vol = 0;
m.rad = 0;
m.tir = 0;
m.sp = 0;
m.t2 = 0;
m.sam = 0;

			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tic = Math.min((m.time-m.tir), 0.1);
m.tir = m.time;
m.t2 = m.tic;
		return m;
	},
		'point_eqs' : function(m) {
m.sam = (rand(1001)*0.001);
m.sam = m.sample;
m.it = ((m.it+1)*above(m.sam, 0));
m.set = Math.floor((m.sam*6));
m.sp = (((m.sam*6)-Math.floor((m.sam*6)))+equal(m.it, 511));
m.off = 0.866025403;
m.mx = ((((((equal(m.set, 0)*(-0.5+m.sp))+(equal(m.set, 1)*(0.5+(0.5*m.sp))))+(equal(m.set, 2)*(1-(0.5*m.sp))))+(equal(m.set, 3)*(0.5-m.sp)))+(equal(m.set, 4)*(-0.5-(m.sp*0.5))))+(above(m.set, 4)*(-1+(m.sp*0.5))));
m.my = ((((((equal(m.set, 0)*m.off)+((equal(m.set, 1)*(1-m.sp))*m.off))+((equal(m.set, 2)*-m.sp)*m.off))+(equal(m.set, 3)*-m.off))+(equal(m.set, 4)*(-m.off+(m.sp*m.off))))+(above(m.set, 4)*(m.sp*m.off)));
m.zang = (m.q6*50);
m.ox = ((m.mx*Math.cos(m.zang))-(m.my*Math.sin(m.zang)));
m.oy = ((m.mx*Math.sin(m.zang))+(m.my*Math.cos(m.zang)));
m.mx = m.ox;
m.my = m.oy;
m.rad = (Math.max((0.2-(m.q7*0.1)), 0)*0.5);
m.vol = Math.max((1-((m.value1+m.value2)*0.2)), 0.5);
m.rad = ifcond(equal(mod(m.it,2), 0), (m.rad*m.vol), m.rad);
m.a = Math.max((-0.9+m.vol), 0);
m.x = (m.mx*m.rad);
m.y = (m.my*m.rad);
m.x = ((m.x*0.75)+m.q1);
m.y = (m.y+(1-m.q2));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tic = min(time-tir,.1);\n' + 'tir = time;\n' + 't2 = tic;'),
		'point_eqs_str' : ('sam = rand(1001)*.001;\n' + 'sam = sample;\n' + 'it = (it+1)*above(sam,0);\n' + 'set = int(sam*6);\n' + 'sp = sam*6 - int(sam*6) + equal(it,511);\n' + 'off = .866025403;\n' + 'mx = equal(set,0)*(-.5 + sp) + equal(set,1)*(.5 + .5*sp) + equal(set,2)*(1-.5*sp) + equal(set,3)*(.5-sp) + equal(set,4)*(-.5 - sp*.5) + above(set,4)*(-1 + sp*.5);\n' + 'my = equal(set,0)*off + equal(set,1)*(1-sp)*off + equal(set,2)*-sp*off + equal(set,3)*-off + equal(set,4)*(-off + sp*off) + above(set,4)*(sp*off);\n' + 'zang = q6*50;\n' + 'ox = mx*cos(zang) - my*sin(zang);\n' + 'oy = mx*sin(zang) + my*cos(zang);\n' + 'mx = ox;\n' + 'my = oy;\n' + 'rad = max(0.2 - q7*.1,0)*.5;\n' + 'vol = max(1-(value1+value2)*.2,0.5);\n' + 'rad = if(equal(it%2,0),rad*vol,rad);\n' + 'a = max(-.9 + vol,0);\n' + 'x = mx*rad;\n' + 'y = my*rad;\n' + 'x = x*.75 + q1;\n' + 'y = y + (1-q2);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.04,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.336672,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 20.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q1;
m.y = (1-m.q2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = q1;\n' + 'y = 1-q2;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 1.256637,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.01,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.85,
			r : 1.0,
			border_g : 0.0,
			rad : 0.59958,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q6 = 0;
m.q7 = 0;
m.flux = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q1;
m.y = (1-m.q2);
m.ang = ((0.785398-(m.q6*50))-(m.time*8));
m.rad = ((Math.max((0.2-(m.q7*0.1)), 0)*2)*m.rad);
m.flux = Math.sin((m.time*2.1));
m.flux = (m.flux*above(m.flux, 0.95));
m.flux = ((m.flux-0.95)*20);
m.flux = Math.max(m.flux, 0);
m.flux = pow(m.flux, 1.3);
m.rad = (m.rad+(m.flux*0.2));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = q1;\n' + 'y = 1-q2;\n' + 'ang = .785398 - q6*50 - time*8;\n' + 'rad = max(0.2 - q7*.1,0)*2*rad;\n' + 'flux = sin(time*2.1);\n' + 'flux = flux*above(flux,0.95);\n' + 'flux = (flux-0.95) * 20;\n' + 'flux = max(flux,0);\n' + 'flux=pow(flux,1.3);\n' + 'rad = rad + flux*0.2;'),

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
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.01,
			additive : 1.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.542619,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q6 = 0;
m.q7 = 0;
m.flux = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q1;
m.y = (1-m.q2);
m.ang = ((-0.261799-(m.q6*50))-(m.time*8));
m.rad = ((Math.max((0.2-(m.q7*0.1)), 0)*2)*m.rad);
m.flux = Math.sin((m.time*2.1));
m.flux = (m.flux*above(m.flux, 0.95));
m.flux = ((m.flux-0.95)*20);
m.flux = Math.max(m.flux, 0);
m.flux = pow(m.flux, 1.3);
m.rad = (m.rad+(m.flux*0.2));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = q1;\n' + 'y = 1-q2;\n' + 'ang = -.261799 - q6*50 - time*8;\n' + 'rad = max(0.2 - q7*.1,0)*2*rad;\n' + 'flux = sin(time*2.1);\n' + 'flux = flux*above(flux,0.95);\n' + 'flux = (flux-0.95) * 20;\n' + 'flux = max(flux,0);\n' + 'flux=pow(flux,1.3);\n' + 'rad = rad + flux*0.2;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.819542,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.090529,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 6.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q6 = 0;
m.q7 = 0;
m.flux = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q1;
m.y = (1-m.q2);
m.ang = (0.261799-(m.q6*50));
m.rad = (Math.max((0.2-(m.q7*0.1)), 0)*0.7);
m.tex_ang = (m.time*8);
m.flux = Math.sin((m.time*2.1));
m.flux = (m.flux*above(m.flux, 0.95));
m.flux = ((m.flux-0.95)*20);
m.flux = Math.max(m.flux, 0);
m.flux = pow(m.flux, 1.3);
m.rad = (m.rad+(m.flux*0.2));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = q1;\n' + 'y = 1-q2;\n' + 'ang = .261799 - q6*50;\n' + 'rad = max(0.2 - q7*.1,0)*.7;\n' + 'tex_ang = time*8;\n' + 'flux = sin(time*2.1);\n' + 'flux = flux*above(flux,0.95);\n' + 'flux = (flux-0.95) * 20;\n' + 'flux = max(flux,0);\n' + 'flux=pow(flux,1.3);\n' + 'rad = rad + flux*0.2;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'q1=sin(time);\n' + 'q1sgn = sign(q1);\n' + 'q1=abs(q1);\n' + 'q1=pow(q1,6);\n' + 'q1=q1*q1sgn;\n' + 'q1=q1*0.4 + 0.5;\n' + 'q2 = .5 + .1*sin(time*.548);\n' + 'tic = min(time - tin,.1);\n' + 'tin = time;\n' + 'ra = 1;\n' + 'treb_avg = tic*(treb_avg*(1/tic - ra) + ra*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - ra) + ra*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - ra) + ra*bass);\n' + 'rb = 1;\n' + 'vav = tic*(vav*(1/tic - rb) + rb*(bass+treb+mid)*.33333);\n' + 'tt = tt + tic*treb_avg;\n' + 'mt = mt + tic*mid_avg;\n' + 'bt = bt + tic*bass_avg;\n' + 'vt = vt + tic*(treb_avg+mid_avg+bass_avg)*.33333;\n' + 'sp = abs(vav - slide)*.1;\n' + 'slide = if(above(slide,vav),slide-tic*sp,slide+tic*sp) + (1-toc)*vav;\n' + 'toc = 1;\n' + 'q3 = (treb + bass + mid)*.3333;\n' + 'q3=q3*q3*0.5 + 0.1;\n' + 'q4 = mt;\n' + 'q5 = bt;\n' + 'cx = q1;\n' + 'cy = q2;\n' + 'rmod = ((treb_avg + mid_avg)*.5 - bass_avg*0.5)*.01;\n' + 'rmod = 0.02 * pow(rmod/0.02 , 2)*7;\n' + 'rmod = min(0.001 , max(rmod, -0.001));\n' + 'rmod=rmod*pow(sin(time)*1.1,2);\n' + 'rot = 0.02 * pow(rmod/0.02 , 2) *40;\n' + 'q6 = rmod;\n' + 'q7 = slide - below(q3,.5)*(6 + 2*sin(time*24))*pow(min(1,(.5 - q3)*2),5);\n' + 'q8=if( above(sin(time*0.5),0) , -1 , 1);'),
	'pixel_eqs_str' : ('tm=time/rad;\n' + 'a = q1;\n' + 'b = q2;\n' + 'mx = x-a;\n' + 'my = y-b;\n' + 'zm = -.45;\n' + 'zm= if( above(sin(time*2.1),0.95) , 0.45 , zm);\n' + 'dis = pow(mx*mx + my*my,.5)*.70710678;\n' + 'rot = rot*(1-dis);\n' + 'rot=rot*20*q8 ;\n' + 'dx = zm*mx*dis*cos(my*3.14)*q3;\n' + 'dy = zm*my*dis*cos(mx*3.14)*q3;'),
};

return pmap;
});
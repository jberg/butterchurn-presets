define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.545,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.01605,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 3.04777,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 0.9,
		echo_zoom : 2.0,
		ob_size : 0.0,
		b1ed : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0173,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.1,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.1,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.is_beat = 0;
m.q30 = 0;
m.dec_med = 0;
m.q31 = 0;
m.q32 = 0;
m.r = 0;
m.index = 0;
m.q23 = 0;
m.avg = 0;
m.q24 = 0;
m.q25 = 0;
m.q26 = 0;
m.q27 = 0;
m.beat = 0;
m.q28 = 0;
m.q29 = 0;
m.z = 0;
m.t0 = 0;
m.d_x = 0;
m.dec_slow = 0;
m.d_y = 0;
m.peak = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.9, div(30,m.fps));
m.dec_slow = pow(0.99, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.5+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),2);
m.d_x = ifcond(m.is_beat, ((rand(2000)-1000)*0.001), m.d_x);
m.d_y = ifcond(m.is_beat, ((rand(2000)-1000)*0.001), m.d_y);
m.r = ifcond(m.is_beat, ((rand(2000)-1000)*0.001), m.r);
m.z = ifcond(m.is_beat, (rand(1000)*0.001), m.z);
m.zoom = (1.03+(m.z*0.06));
m.rot = (m.r*0.06);
m.dx = (m.d_x*0.01);
m.dy = (m.d_y*0.01);
m.q1 = 1;
m.q23 = div(rand(1000),1000);
m.q24 = div(rand(1000),1000);
m.q25 = (div(rand(1000),1000)*6.28);
m.q26 = (m.q25-3.14);
m.q27 = (div(rand(1000),12000)+0.04);
m.q28 = div(rand(1000),1000);
m.q29 = div(rand(1000),1000);
m.q30 = (div(rand(1000),1000)*6.28);
m.q31 = (m.q30-3.14);
m.q32 = (div(rand(1000),14000)+0.04);
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
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.vx = 0;
m.vy = 0;
m.sw = 0;
m.swi = 0;
m.lr = 0;
m.sz = 0;
m.it = 0;
m.mx = 0;
m.va = 0;
m.my = 0;
m.vb = 0;
m.vc = 0;
m.sa = 0;
m.vd = 0;
m.sb = 0;
m.ve = 0;
m.sc = 0;
m.vf = 0;
m.sd = 0;
m.vg = 0;
m.se = 0;
m.vh = 0;
m.sf = 0;
m.vi = 0;
m.sg = 0;
m.vj = 0;
m.sh = 0;
m.vk = 0;
m.ita = 0;
m.si = 0;
m.vl = 0;
m.sj = 0;
m.vm = 0;
m.vn = 0;
m.vo = 0;
m.vp = 0;
m.let = 0;
m.vq = 0;
m.vr = 0;
m.vs = 0;
m.vt = 0;
m.xv = 0;

			m.rkeys = ['lr','it','my','ita','xv'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.it = (((m.it+1)*above(m.sample, 0))*below(m.it, 53));
m.ita = ((m.ita+equal(m.it, 0))*above(m.sample, 0));
m.sw = (1-(equal(m.it, 0)*equal(m.ita, 0)));
m.swi = (((equal(m.lr, 9)+equal(m.lr, 5))*equal(m.it, 0))*equal(m.ita, 4));
m.xv = ifcond((m.sw-m.swi), m.xv, ((rand(1001)*0.001)*0.8));
m.mx = (m.xv+(m.ita*0.025));
m.my = ifcond((m.sw-m.swi), m.my, ((rand(1001)*0.001)*0.975));
m.sz = 0.01;
m.vx = ((((((((((((above(m.it, 1)*below(m.it, 39))+(above(m.it, 12)*below(m.it, 28)))-equal(m.it, 20))+equal(m.it, 46))+equal(m.it, 51))+equal(m.it, 41))-equal(m.it, 15))-equal(m.it, 25))+equal(m.it, 10))+equal(m.it, 30))-equal(m.it, 4))-equal(m.it, 36));
m.vy = ((((((((((((above(m.it, 17)*below(m.it, 49))+(above(m.it, 22)*below(m.it, 44)))-equal(m.it, 33))+equal(m.it, 7))+equal(m.it, 51))+equal(m.it, 15))-equal(m.it, 41))-equal(m.it, 25))+equal(m.it, 4))+equal(m.it, 10))-equal(m.it, 36))-equal(m.it, 30));
m.se = (((((equal(m.ita, 0)*3)+(equal(m.ita, 1)*8))+(equal(m.ita, 2)*1))+(equal(m.ita, 3)*15))+(equal(m.ita, 4)*19));
m.sf = ((((equal(m.ita, 0)*16)+(equal(m.ita, 1)*12))+(equal(m.ita, 2)*1))+(equal(m.ita, 3)*25));
m.sc = (((((equal(m.ita, 0)*13)+(equal(m.ita, 1)*1))+(equal(m.ita, 2)*7))+(equal(m.ita, 3)*9))+(equal(m.ita, 4)*3));
m.sd = (((((equal(m.ita, 0)*18)+(equal(m.ita, 1)*5))+(equal(m.ita, 2)*13))+(equal(m.ita, 3)*9))+(equal(m.ita, 4)*24));
m.sb = (((((equal(m.ita, 0)*19)+(equal(m.ita, 1)*8))+(equal(m.ita, 2)*1))+(equal(m.ita, 3)*4))+(equal(m.ita, 4)*5));
m.sj = (((equal(m.ita, 0)*6)+(equal(m.ita, 1)*21))+(equal(m.ita, 2)*14));
m.sg = ((((((((equal(m.ita, 0)*5)+(equal(m.ita, 1)*20))+(equal(m.ita, 2)*8))+(equal(m.ita, 3)*5))+(equal(m.ita, 4)*18))+(equal(m.ita, 5)*5))+(equal(m.ita, 6)*1))+(equal(m.ita, 7)*12));
m.sh = ((((((((equal(m.ita, 0)*13)+(equal(m.ita, 1)*9))+(equal(m.ita, 2)*14))+(equal(m.ita, 3)*4))+(equal(m.ita, 4)*6))+(equal(m.ita, 5)*21))+(equal(m.ita, 6)*3))+(equal(m.ita, 7)*11));
m.si = (((((equal(m.ita, 0)*6)+(equal(m.ita, 1)*14))+(equal(m.ita, 2)*15))+(equal(m.ita, 3)*18))+(equal(m.ita, 4)*4));
m.sa = (((((((equal(m.ita, 0)*2)+(equal(m.ita, 1)*12))+(equal(m.ita, 2)*5))+(equal(m.ita, 3)*14))+(equal(m.ita, 4)*4))+(equal(m.ita, 5)*5))+(equal(m.ita, 6)*4));
m.lr = ifcond(m.sw, m.lr, rand(10));
m.let = ((((((((((equal(m.lr, 0)*m.sa)+(equal(m.lr, 1)*m.sb))+(equal(m.lr, 2)*m.sc))+(equal(m.lr, 3)*m.sd))+(equal(m.lr, 4)*m.se))+(equal(m.lr, 5)*m.sf))+(equal(m.lr, 6)*m.sg))+(equal(m.lr, 7)*m.sh))+(equal(m.lr, 8)*m.si))+(equal(m.lr, 9)*m.sj));
m.va = ((equal(m.let, 23)+equal(m.let, 24))+equal(m.let, 26));
m.vb = ((((above(m.let, 0)*below(m.let, 9))+(above(m.let, 10)*below(m.let, 19)))+equal(m.let, 21))+equal(m.let, 23));
m.vc = ((((((((equal(m.let, 1)+equal(m.let, 2))+equal(m.let, 5))+equal(m.let, 6))+equal(m.let, 8))+equal(m.let, 11))+equal(m.let, 16))+equal(m.let, 18))+equal(m.let, 19));
m.vd = (((above(m.let, 1)*below(m.let, 9))+(above(m.let, 10)*below(m.let, 24)))-equal(m.let, 20));
m.ve = (((equal(m.let, 13)+equal(m.let, 14))+equal(m.let, 24))+equal(m.let, 25));
m.vf = ((((above(m.let, 1)*below(m.let, 8))+equal(m.let, 9))+(above(m.let, 14)*below(m.let, 21)))+equal(m.let, 26));
m.vg = equal(m.let, 1);
m.vh = (equal(m.let, 9)+equal(m.let, 20));
m.vi = (((above(m.let, 0)*below(m.let, 5))-equal(m.let, 3))+equal(m.let, 18));
m.vj = ((((((above(m.let, 2)*below(m.let, 8))-equal(m.let, 4))+equal(m.let, 9))+(above(m.let, 14)*below(m.let, 21)))-equal(m.let, 18))+equal(m.let, 26));
m.vk = ((equal(m.let, 11)+equal(m.let, 13))+(above(m.let, 23)*below(m.let, 27)));
m.vl = (((equal(m.let, 8)+equal(m.let, 10))+(above(m.let, 12)*below(m.let, 18)))+(above(m.let, 20)*below(m.let, 24)));
m.vm = (((((equal(m.let, 1)+equal(m.let, 2))+equal(m.let, 8))+equal(m.let, 16))+equal(m.let, 18))+equal(m.let, 19));
m.vn = ((((((((equal(m.let, 1)+equal(m.let, 7))+equal(m.let, 8))+equal(m.let, 10))+(above(m.let, 12)*below(m.let, 24)))-equal(m.let, 16))-equal(m.let, 18))-equal(m.let, 20))-equal(m.let, 22));
m.vo = (((((equal(m.let, 11)+equal(m.let, 14))+equal(m.let, 17))+equal(m.let, 18))+equal(m.let, 23))+equal(m.let, 24));
m.vp = ((((((((((equal(m.let, 3)+equal(m.let, 5))+equal(m.let, 7))+equal(m.let, 9))+equal(m.let, 10))+equal(m.let, 12))+equal(m.let, 15))+equal(m.let, 17))+equal(m.let, 19))+equal(m.let, 21))+equal(m.let, 26));
m.vq = ((equal(m.let, 2)+equal(m.let, 4))+equal(m.let, 22));
m.vr = ((equal(m.let, 9)+equal(m.let, 20))+equal(m.let, 25));
m.vs = equal(m.let, 22);
m.vt = (((((((((above(m.let, 1)*below(m.let, 13))-equal(m.let, 6))-equal(m.let, 8))-equal(m.let, 11))+equal(m.let, 15))+equal(m.let, 17))+equal(m.let, 19))+equal(m.let, 21))+equal(m.let, 26));
m.a = ifcond(above(m.it, 51), 0, ifcond(above(m.it, 49), m.va, ifcond(above(m.it, 47), m.vb, ifcond(above(m.it, 44), m.vc, ifcond(above(m.it, 42), m.vd, ifcond(above(m.it, 39), m.ve, ifcond(above(m.it, 37), m.vf, ifcond(above(m.it, 34), m.vg, ifcond(above(m.it, 31), m.vh, ifcond(above(m.it, 28), m.vi, ifcond(above(m.it, 26), m.vj, ifcond(above(m.it, 23), m.vk, ifcond(above(m.it, 21), m.vl, ifcond(above(m.it, 18), m.vm, ifcond(above(m.it, 16), m.vn, ifcond(above(m.it, 13), m.vo, ifcond(above(m.it, 11), m.vp, ifcond(above(m.it, 8), m.vq, ifcond(above(m.it, 5), m.vr, ifcond(above(m.it, 2), m.vs, ifcond(m.it, m.vt, 0)))))))))))))))))))));
m.a = ((m.a*below(m.ita, 8))*m.q1);
m.x = (m.mx+((m.vx*m.sz)*0.75));
m.y = (m.my+((m.vy*m.sz)*1.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('it = (it + 1)*above(sample,0)*below(it,53);\n' + 'ita = (ita + equal(it,0))*above(sample,0);\n' + 'sw = 1-equal(it,0)*equal(ita,0);\n' + 'swi = (equal(lr,9) + equal(lr,5))*equal(it,0)*equal(ita,4);\n' + 'xv = if(sw - swi,xv,rand(1001)*.001*.8);\n' + 'mx = xv + ita*.025;\n' + 'my = if(sw - swi,my,rand(1001)*.001*.975);\n' + 'sz = .01;\n' + 'vx = above(it,1)*below(it,39) + above(it,12)*below(it,28) - equal(it,20) + equal(it,46) + equal(it,51) + equal(it,41) - equal(it,15) - equal(it,25) + equal(it,10) + equal(it,30) - equal(it,4) - equal(it,36);\n' + 'vy = above(it,17)*below(it,49) + above(it,22)*below(it,44) - equal(it,33) + equal(it,7) + equal(it,51) + equal(it,15) - equal(it,41) - equal(it,25) + equal(it,4) + equal(it,10) - equal(it,36) - equal(it,30);\n' + 'se = equal(ita,0)*3 + equal(ita,1)*8 + equal(ita,2)*1 + equal(ita,3)*15 + equal(ita,4)*19;\n' + 'sf = equal(ita,0)*16 + equal(ita,1)*12 + equal(ita,2)*1 + equal(ita,3)*25;\n' + 'sc = equal(ita,0)*13 + equal(ita,1)*1 + equal(ita,2)*7 + equal(ita,3)*9 + equal(ita,4)*3;\n' + 'sd = equal(ita,0)*18 + equal(ita,1)*5 + equal(ita,2)*13 + equal(ita,3)*9 + equal(ita,4)*24;\n' + 'sb = equal(ita,0)*19 + equal(ita,1)*8 + equal(ita,2)*1 + equal(ita,3)*4 + equal(ita,4)*5;\n' + 'sj = equal(ita,0)*6 + equal(ita,1)*21 + equal(ita,2)*14;\n' + 'sg = equal(ita,0)*5 + equal(ita,1)*20 + equal(ita,2)*8 + equal(ita,3)*5 + equal(ita,4)*18 + equal(ita,5)*5+ equal(ita,6)*1 + equal(ita,7)*12;\n' + 'sh = equal(ita,0)*13 + equal(ita,1)*9 + equal(ita,2)*14 + equal(ita,3)*4 + equal(ita,4)*6 + equal(ita,5)*21+ equal(ita,6)*3 + equal(ita,7)*11;\n' + 'si = equal(ita,0)*6 + equal(ita,1)*14 + equal(ita,2)*15 + equal(ita,3)*18 + equal(ita,4)*4;\n' + 'sa = equal(ita,0)*2 + equal(ita,1)*12 + equal(ita,2)*5 + equal(ita,3)*14 + equal(ita,4)*4+ equal(ita,5)*5 + equal(ita,6)*4;\n' + 'lr = if(sw,lr,rand(10));\n' + 'let = equal(lr,0)*sa + equal(lr,1)*sb + equal(lr,2)*sc + equal(lr,3)*sd + equal(lr,4)*se + equal(lr,5)*sf + equal(lr,6)*sg + equal(lr,7)*sh + equal(lr,8)*si + equal(lr,9)*sj;\n' + 'va = equal(let,23) + equal(let,24) + equal(let,26);\n' + 'vb = above(let,0)*below(let,9) + above(let,10)*below(let,19) + equal(let,21) + equal(let,23);\n' + 'vc = equal(let,1) + equal(let,2) + equal(let,5) + equal(let,6) + equal(let,8) + equal(let,11) + equal(let,16) + equal(let,18) + equal(let,19);\n' + 'vd = above(let,1)*below(let,9) + above(let,10)*below(let,24) - equal(let,20);\n' + 've = equal(let,13) + equal(let,14) + equal(let,24) + equal(let,25);\n' + 'vf = above(let,1)*below(let,8) + equal(let,9) + above(let,14)*below(let,21) + equal(let,26);\n' + 'vg = equal(let,1);\n' + 'vh = equal(let,9) + equal(let,20);\n' + 'vi = above(let,0)*below(let,5) - equal(let,3) + equal(let,18);\n' + 'vj = above(let,2)*below(let,8) - equal(let,4) + equal(let,9) + above(let,14)*below(let,21) - equal(let,18) + equal(let,26);\n' + 'vk = equal(let,11) + equal(let,13) + above(let,23)*below(let,27);\n' + 'vl = equal(let,8) + equal(let,10) + above(let,12)*below(let,18) + above(let,20)*below(let,24);\n' + 'vm = equal(let,1) + equal(let,2) + equal(let,8) + equal(let,16) + equal(let,18) + equal(let,19);\n' + 'vn = equal(let,1) + equal(let,7) + equal(let,8) + equal(let,10) + above(let,12)*below(let,24) - equal(let,16) - equal(let,18) - equal(let,20) - equal(let,22);\n' + 'vo = equal(let,11) + equal(let,14) + equal(let,17) + equal(let,18) + equal(let,23) + equal(let,24);\n' + 'vp = equal(let,3) + equal(let,5) + equal(let,7) + equal(let,9) + equal(let,10) + equal(let,12) + equal(let,15) + equal(let,17) + equal(let,19) + equal(let,21) + equal(let,26);\n' + 'vq = equal(let,2) + equal(let,4) + equal(let,22);\n' + 'vr = equal(let,9) + equal(let,20) + equal(let,25);\n' + 'vs = equal(let,22);\n' + 'vt = above(let,1)*below(let,13) - equal(let,6) - equal(let,8) - equal(let,11) + equal(let,15) + equal(let,17) + equal(let,19) + equal(let,21) + equal(let,26);\n' + 'a = if(above(it,51),0,if(above(it,49),va,if(above(it,47),vb,if(above(it,44),vc,if(above(it,42),vd,if(above(it,39),ve, if(above(it,37),vf,if(above(it,34),vg,if(above(it,31),vh,if(above(it,28),vi,if(above(it,26),vj,if(above(it,23),vk, if(above(it,21),vl,if(above(it,18),vm,if(above(it,16),vn,if(above(it,13),vo,if(above(it,11),vp,if(above(it,8),vq, if(above(it,5),vr,if(above(it,2),vs,if(it,vt,0)))))))))))))))))))));\n' + 'a = a*below(ita,8)*q1;\n' + 'x = mx + vx*sz*.75;\n' + 'y = my + vy*sz*1.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.4,
			g : 0.0,
			scaling : 81.95444,
			samples : 42.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wave_x = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.wave_x = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.x = (rand(1000)*0.001);
m.y = (rand(1000)*0.001);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('wave_x=1;'),
		'point_eqs_str' : ('x=rand(1000)*0.001;\n' + 'y=rand(1000)*0.001;'),

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
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.ma = 0;

			m.rkeys = ['my','mx','ma'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ma = (m.ma+(((above(m.bass, 0.5)*3.1415)*0.02)*m.bass));
m.ma = (m.ma-(((above(m.treb, 0.5)*3.1415)*0.02)*m.treb));
m.mx = (m.mx+(0.0008*Math.cos(m.ma)));
m.my = (m.my+(0.0008*Math.sin(m.ma)));
m.mx = ifcond(above(m.mx, 0.9), (0.9-m.mx), m.mx);
m.my = ifcond(above(m.my, 0.9), (0.9-m.my), m.my);
m.mx = ifcond(below(m.mx, 0.1), (0.9+m.mx), m.mx);
m.my = ifcond(below(m.my, 0.1), (0.9+m.my), m.my);
m.x = m.mx;
m.y = m.my;
m.a = above(((m.bass+m.mid)+m.treb), 0.2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ma=ma+(above(bass,.5)*3.1415*.02*bass);\n' + 'ma=ma-(above(treb,.5)*3.1415*.02*treb);\n' + 'mx=mx+(.0008*cos(ma));\n' + 'my=my+(.0008*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.2));'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.66,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.62832,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.77829,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.69,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.81,
			rad : 0.12772,
			x : 0.5,
			y : 0.5,
			ang : 0.1884,
			sides : 16.0,
			border_r : 0.59,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.25133,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.136,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.99,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 1.2523,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 0.0,
			num_inst : 2.0,
			},
		'init_eqs' : function(m) {
m.q30 = 0;
m.q31 = 0;
m.q32 = 0;
m.q28 = 0;
m.q29 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (((rand(10)*0.1)*0.5)+0.5);
m.x = m.q28;
m.y = m.q29;
m.rad = m.q32;
m.ang = ifcond(equal(m.instance, 0), m.q30, m.q31);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=rand(10)*0.1*0.5+0.5;\n' + 'x= q28;\n' + 'y= q29;\n' + 'rad=q32;\n' + 'ang= if(equal(instance,0),q30,q31);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.25133,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.136,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.99,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 1.25237,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 0.0,
			num_inst : 2.0,
			},
		'init_eqs' : function(m) {
m.q23 = 0;
m.q24 = 0;
m.q25 = 0;
m.q26 = 0;
m.q27 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (((rand(10)*0.1)*0.5)+0.5);
m.x = m.q23;
m.y = m.q24;
m.rad = m.q27;
m.ang = ifcond(equal(m.instance, 0), m.q25, m.q26);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=rand(10)*0.1*0.5+0.5;\n' + 'x= q23;\n' + 'y= q24;\n' + 'rad=q27;\n' + 'ang= if(equal(instance,0),q25,q26);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.45112,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.9,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.80814,
			x : 0.86,
			y : 0.2,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_7 = texture2D (sampler_blur1, P_8);\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 1.2)) + rand_frame.xy);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12.x = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1)).x;\n' + '  tmpvar_12.y = (((tmpvar_7.xyz * scale1) + bias1) - ((tmpvar_9.xyz * scale1) + bias1)).x;\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = (mix (uv_orig, uv, vec2(0.4, 0.4)) + ((tmpvar_12 * texsize.zw) * 2.0));\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_main, tmpvar_13);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_main, tmpvar_13);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_blur3, tmpvar_13);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_noise_lq, tmpvar_11);\n' + '  ret_1.x = (((tmpvar_14.x - \n' + '    ((tmpvar_15.x - ((tmpvar_16.xyz * scale3) + bias3).x) * 0.02)\n' + '  ) - 0.004) + ((tmpvar_17.xyz - 0.5) * 0.12)).x;\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18 = (texture2D (sampler_noise_lq, tmpvar_11).xyz - 0.5).xy;\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19 = (mix (uv_orig, uv, vec2(0.3, 0.3)) + ((tmpvar_18 * texsize.zw) * 3.0));\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_main, tmpvar_19);\n' + '  ret_1.y = (tmpvar_20.y - 0.004);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_main, uv);\n' + '  ret_1.z = tmpvar_21.z;\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur1, uv);\n' + '  ret_1.z = (ret_1.z + ((\n' + '    (ret_1.z - ((tmpvar_22.xyz * scale1) + bias1).z)\n' + '   * 0.1) - 0.015));\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23.w = 1.0;\n' + '  tmpvar_23.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_23;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec2 xlat_mutabled;\n' + 'highp vec3 xlat_mutabledx;\n' + 'highp vec3 xlat_mutabledy;\n' + 'shader_body {\n' + '   vec3 base_1;\n' + '  xlat_mutabled = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_2;\n' + '   vec2 P_3;\n' + '  P_3 = (uv + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_2 = texture2D (sampler_blur1, P_3);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '  xlat_mutabledx = (((tmpvar_2.xyz * scale1) + bias1) - ((tmpvar_4.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '  xlat_mutabledy = (((tmpvar_6.xyz * scale1) + bias1) - ((tmpvar_8.xyz * scale1) + bias1));\n' + '   vec3 tmpvar_10;\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_main, uv);\n' + '  tmpvar_10 = tmpvar_11.xyz;\n' + '  base_1 = tmpvar_10;\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (((\n' + '    -(xlat_mutabledx)\n' + '   + xlat_mutabledy) + 1.0) * 1.2);\n' + '  xlat_mutabled = (texsize.zw * 2.0);\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (uv + (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_13 = texture2D (sampler_blur1, P_14);\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (uv - (vec2(1.0, 0.0) * xlat_mutabled));\n' + '  tmpvar_15 = texture2D (sampler_blur1, P_16);\n' + '  xlat_mutabledx = (((tmpvar_13.xyz * scale1) + bias1) - ((tmpvar_15.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv + (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_17 = texture2D (sampler_blur1, P_18);\n' + '   vec4 tmpvar_19;\n' + '   vec2 P_20;\n' + '  P_20 = (uv - (vec2(0.0, 1.0) * xlat_mutabled));\n' + '  tmpvar_19 = texture2D (sampler_blur1, P_20);\n' + '  xlat_mutabledy = (((tmpvar_17.xyz * scale1) + bias1) - ((tmpvar_19.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21.x = xlat_mutabledx.x;\n' + '  tmpvar_21.y = xlat_mutabledy.x;\n' + '   float tmpvar_22;\n' + '  tmpvar_22 = sqrt(dot (tmpvar_21, tmpvar_21));\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23 = mix (((vec3(0.5, 0.4, 0.6) * base_1.x) * tmpvar_12.x), (vec3(8.0, 5.0, 2.0) * tmpvar_22), vec3((tmpvar_22 * 4.2)));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_blur1, uv);\n' + '   vec2 tmpvar_25;\n' + '  tmpvar_25.x = xlat_mutabledx.z;\n' + '  tmpvar_25.y = xlat_mutabledy.z;\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26.w = 1.0;\n' + '  tmpvar_26.xyz = mix (mix (tmpvar_23, (4.0 * tmpvar_23), (\n' + '    (tmpvar_11.y * 0.5)\n' + '   - \n' + '    (vec3(0.09, 0.3, 0.3) * ((tmpvar_24.xyz * scale1) + bias1).z)\n' + '  )), vec3(2.0, 2.0, 0.0), vec3((sqrt(\n' + '    dot (tmpvar_25, tmpvar_25)\n' + '  ) * 0.7)));\n' + '  vec4 ret4 = tmpvar_26;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('dec_med = pow (0.9, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %2;\n' + 'd_x = if(is_beat, (rand(2000)-1000)*0.001 , d_x);\n' + 'd_y = if(is_beat, (rand(2000)-1000)*0.001 , d_y);\n' + 'r = if(is_beat, (rand(2000)-1000)*0.001 , r);\n' + 'z = if(is_beat, rand(1000)*0.001 , z);\n' + 'zoom = 1.03 + z*0.06;\n' + 'rot = r*0.06;\n' + 'dx = d_x*0.01;\n' + 'dy = d_y*0.01;\n' + 'q1 = 1;\n' + 'q23 = rand(1000)/1000;\n' + 'q24 = rand(1000)/1000;\n' + 'q25 = (rand(1000)/1000)*6.28;\n' + 'q26 = q25 - 3.14;\n' + 'q27 = (rand(1000)/12000)+0.04;\n' + 'q28 = rand(1000)/1000;\n' + 'q29 = rand(1000)/1000;\n' + 'q30 = (rand(1000)/1000)*6.28;\n' + 'q31 = q30 - 3.14;\n' + 'q32 = (rand(1000)/14000)+0.04;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
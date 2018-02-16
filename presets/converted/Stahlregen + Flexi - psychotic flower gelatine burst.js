define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.4,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 2.713,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.00909,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.44,
		ib_r : 0.25,
		mv_b : 0.5,
		echo_zoom : 2.0,
		ob_size : 0.5,
		b1ed : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99951,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.2,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.003,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 0.5,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.2,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.res = 0;
m.q1 = 0;
m.q2 = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.diff = 0;
m.m = 0;
m.r = 0;
m.vol = 0;
m.v = 0;
m.beat = 0;
m.x = 0;
m.y = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.vol = (((m.bass*8)+(m.mid*5))+(m.treb*3));
m.m = ((m.m*0.97)+(m.vol*0.08));
m.monitor = m.vol;
m.beat = ((above(m.vol, m.res)*above(m.vol, m.m))*above(m.vol, 16));
m.diff = (((1-m.beat)*m.diff)+(m.beat*(m.vol-m.res)));
m.res = ((m.beat*(m.vol+(m.m*0.1)))+((1-m.beat)*(m.res-div(((0.1+(m.diff*0.02))*60),m.fps))));
m.res = Math.max(0, m.res);
m.x = ifcond(m.beat, ((rand(60)*0.01)+0.2), m.x);
m.y = ifcond(m.beat, ((rand(60)*0.01)+0.2), m.y);
m.q1 = m.x;
m.q2 = m.y;
m.q4 = m.aspectx;
m.q5 = m.aspecty;
m.wave_x = m.q1;
m.wave_y = (1-m.q2);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.cx = m.q1;
m.cy = m.q2;
m.d = pow(sqrt((sqr((m.x-m.cx))+sqr((m.y-m.cy)))), 0.8);
m.r = 0.2;
m.v = 0.2;
m.dx = (((m.x-m.cx)*m.v)*(m.d-m.r));
m.dy = (((m.y-m.cy)*m.v)*(m.d-m.r));
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
m.q1 = below(rand(100), (4+(10*((m.treb+m.mid)+m.bass))));
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
m.sa = ((((((((equal(m.ita, 0)*13)+(equal(m.ita, 1)*9))+(equal(m.ita, 2)*12))+(equal(m.ita, 3)*11))+(equal(m.ita, 4)*4))+(equal(m.ita, 5)*18))+(equal(m.ita, 6)*15))+(equal(m.ita, 7)*16));
m.sb = ((((equal(m.ita, 0)*11)+(equal(m.ita, 1)*9))+(equal(m.ita, 2)*12))+(equal(m.ita, 3)*12));
m.sc = (((((((equal(m.ita, 0)*4)+(equal(m.ita, 1)*15))+(equal(m.ita, 3)*4))+(equal(m.ita, 4)*18))+(equal(m.ita, 5)*21))+(equal(m.ita, 6)*7))+(equal(m.ita, 7)*19));
m.sd = ((((equal(m.ita, 0)*12)+(equal(m.ita, 1)*15))+(equal(m.ita, 2)*22))+(equal(m.ita, 3)*5));
m.se = ((((equal(m.ita, 0)*8)+(equal(m.ita, 1)*1))+(equal(m.ita, 2)*20))+(equal(m.ita, 3)*5));
m.sf = (((((((equal(m.ita, 0)*6)+(equal(m.ita, 1)*5))+(equal(m.ita, 2)*1))+(equal(m.ita, 3)*18))+(equal(m.ita, 5)*10))+(equal(m.ita, 6)*15))+(equal(m.ita, 7)*25));
m.sg = (((((equal(m.ita, 0)*1)+(equal(m.ita, 1)*14))+(equal(m.ita, 2)*7))+(equal(m.ita, 3)*5))+(equal(m.ita, 4)*18));
m.sh = ((((((((equal(m.ita, 0)*19)+(equal(m.ita, 1)*21))+(equal(m.ita, 2)*18))+(equal(m.ita, 3)*16))+(equal(m.ita, 4)*18))+(equal(m.ita, 5)*9))+(equal(m.ita, 6)*19))+(equal(m.ita, 7)*5));
m.si = (((((equal(m.ita, 0)*8)+(equal(m.ita, 1)*1))+(equal(m.ita, 2)*16))+(equal(m.ita, 3)*16))+(equal(m.ita, 4)*25));
m.sj = (((((equal(m.ita, 0)*25)+(equal(m.ita, 1)*5))+(equal(m.ita, 2)*19))+(equal(m.ita, 6)*14))+(equal(m.ita, 7)*15));
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
		'frame_eqs_str' : ('q1 = below(rand(100),4 + 10*(treb+mid+bass));'),
		'point_eqs_str' : ('it = (it + 1)*above(sample,0)*below(it,53);\n' + 'ita = (ita + equal(it,0))*above(sample,0);\n' + 'sw = 1-equal(it,0)*equal(ita,0);\n' + 'swi = (equal(lr,9) + equal(lr,5))*equal(it,0)*equal(ita,4);\n' + 'xv = if(sw - swi,xv,rand(1001)*.001*.8);\n' + 'mx = xv + ita*.025;\n' + 'my = if(sw - swi,my,rand(1001)*.001*.975);\n' + 'sz = .01;\n' + 'vx = above(it,1)*below(it,39) + above(it,12)*below(it,28) - equal(it,20) + equal(it,46) + equal(it,51) + equal(it,41) - equal(it,15) - equal(it,25) + equal(it,10) + equal(it,30) - equal(it,4) - equal(it,36);\n' + 'vy = above(it,17)*below(it,49) + above(it,22)*below(it,44) - equal(it,33) + equal(it,7) + equal(it,51) + equal(it,15) - equal(it,41) - equal(it,25) + equal(it,4) + equal(it,10) - equal(it,36) - equal(it,30);\n' + 'sa = equal(ita,0)*13 + equal(ita,1)*9 + equal(ita,2)*12 + equal(ita,3)*11 + equal(ita,4)*4 + equal(ita,5)*18 + equal(ita,6)*15 + equal(ita,7)*16;\n' + 'sb = equal(ita,0)*11 + equal(ita,1)*9 + equal(ita,2)*12 + equal(ita,3)*12;\n' + 'sc = equal(ita,0)*4 + equal(ita,1)*15 + equal(ita,3)*4 + equal(ita,4)*18 + equal(ita,5)*21 + equal(ita,6)*7 + equal(ita,7)*19;\n' + 'sd = equal(ita,0)*12 + equal(ita,1)*15 + equal(ita,2)*22 + equal(ita,3)*5;\n' + 'se = equal(ita,0)*8 + equal(ita,1)*1 + equal(ita,2)*20 + equal(ita,3)*5;\n' + 'sf = equal(ita,0)*6 + equal(ita,1)*5 + equal(ita,2)*1 + equal(ita,3)*18 + equal(ita,5)*10 + equal(ita,6)*15 + equal(ita,7)*25;\n' + 'sg = equal(ita,0)*1 + equal(ita,1)*14 + equal(ita,2)*7 + equal(ita,3)*5 + equal(ita,4)*18;\n' + 'sh = equal(ita,0)*19 + equal(ita,1)*21 + equal(ita,2)*18 + equal(ita,3)*16 + equal(ita,4)*18 + equal(ita,5)*9 + equal(ita,6)*19 + equal(ita,7)*5;\n' + 'si = equal(ita,0)*8 + equal(ita,1)*1 + equal(ita,2)*16 + equal(ita,3)*16 + equal(ita,4)*25;\n' + 'sj = equal(ita,0)*25 + equal(ita,1)*5 + equal(ita,2)*19 + equal(ita,6)*14 + equal(ita,7)*15;\n' + 'lr = if(sw,lr,rand(10));\n' + 'let = equal(lr,0)*sa + equal(lr,1)*sb + equal(lr,2)*sc + equal(lr,3)*sd + equal(lr,4)*se + equal(lr,5)*sf + equal(lr,6)*sg + equal(lr,7)*sh + equal(lr,8)*si + equal(lr,9)*sj;\n' + 'va = equal(let,23) + equal(let,24) + equal(let,26);\n' + 'vb = above(let,0)*below(let,9) + above(let,10)*below(let,19) + equal(let,21) + equal(let,23);\n' + 'vc = equal(let,1) + equal(let,2) + equal(let,5) + equal(let,6) + equal(let,8) + equal(let,11) + equal(let,16) + equal(let,18) + equal(let,19);\n' + 'vd = above(let,1)*below(let,9) + above(let,10)*below(let,24) - equal(let,20);\n' + 've = equal(let,13) + equal(let,14) + equal(let,24) + equal(let,25);\n' + 'vf = above(let,1)*below(let,8) + equal(let,9) + above(let,14)*below(let,21) + equal(let,26);\n' + 'vg = equal(let,1);\n' + 'vh = equal(let,9) + equal(let,20);\n' + 'vi = above(let,0)*below(let,5) - equal(let,3) + equal(let,18);\n' + 'vj = above(let,2)*below(let,8) - equal(let,4) + equal(let,9) + above(let,14)*below(let,21) - equal(let,18) + equal(let,26);\n' + 'vk = equal(let,11) + equal(let,13) + above(let,23)*below(let,27);\n' + 'vl = equal(let,8) + equal(let,10) + above(let,12)*below(let,18) + above(let,20)*below(let,24);\n' + 'vm = equal(let,1) + equal(let,2) + equal(let,8) + equal(let,16) + equal(let,18) + equal(let,19);\n' + 'vn = equal(let,1) + equal(let,7) + equal(let,8) + equal(let,10) + above(let,12)*below(let,24) - equal(let,16) - equal(let,18) - equal(let,20) - equal(let,22);\n' + 'vo = equal(let,11) + equal(let,14) + equal(let,17) + equal(let,18) + equal(let,23) + equal(let,24);\n' + 'vp = equal(let,3) + equal(let,5) + equal(let,7) + equal(let,9) + equal(let,10) + equal(let,12) + equal(let,15) + equal(let,17) + equal(let,19) + equal(let,21) + equal(let,26);\n' + 'vq = equal(let,2) + equal(let,4) + equal(let,22);\n' + 'vr = equal(let,9) + equal(let,20) + equal(let,25);\n' + 'vs = equal(let,22);\n' + 'vt = above(let,1)*below(let,13) - equal(let,6) - equal(let,8) - equal(let,11) + equal(let,15) + equal(let,17) + equal(let,19) + equal(let,21) + equal(let,26);\n' + 'a = if(above(it,51),0,if(above(it,49),va,if(above(it,47),vb,if(above(it,44),vc,if(above(it,42),vd,if(above(it,39),ve, if(above(it,37),vf,if(above(it,34),vg,if(above(it,31),vh,if(above(it,28),vi,if(above(it,26),vj,if(above(it,23),vk, if(above(it,21),vl,if(above(it,18),vm,if(above(it,16),vn,if(above(it,13),vo,if(above(it,11),vp,if(above(it,8),vq, if(above(it,5),vr,if(above(it,2),vs,if(it,vt,0)))))))))))))))))))));\n' + 'a = a*below(ita,8)*q1;\n' + 'x = mx + vx*sz*.75;\n' + 'y = my + vy*sz*1.5;'),

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
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 4.36077,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.09902,
			x : 0.49,
			y : 0.5,
			ang : 0.0,
			sides : 12.0,
			border_r : 1.0,
			num_inst : 2.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = div(rand(1000),1000);
m.y = div(rand(1000),1000);
m.ang = div(rand(150),100);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = rand(1000)/1000;\n' + 'y = rand(1000)/1000;\n' + 'ang = rand(150)/100;'),

		},
		{
		'baseVals' : {
			r2 : 0.03,
			a : 0.5,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 3.14159,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.99979,
			additive : 0.0,
			border_a : 0.5,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.1,
			r : 0.2,
			border_g : 0.6,
			rad : 0.09999,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 20.0,
			border_r : 0.0,
			num_inst : 16.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q4 = 0;
m.q5 = 0;
m.num_instance = 0;
m.instance_counter = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.instance_counter = div((6.28*m.instance),m.num_instance);
m.x = (m.q1+(((0.1*div(1,m.q5))*m.bass_att)*Math.sin(m.instance_counter)));
m.y = ((1-m.q2)+(((0.1*div(1,m.q4))*m.bass_att)*Math.cos(m.instance_counter)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('instance_counter = 6.28*instance/num_instance;\n' + 'x = q1 + 0.1 * (1/q5) * bass_att * sin(instance_counter);\n' + 'y = 1-q2 + 0.1 * (1/q4) * bass_att * cos(instance_counter);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.5,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 3.14159,
			thickoutline : 1.0,
			g : 0.05,
			textured : 0.0,
			g2 : 0.01,
			tex_zoom : 0.99979,
			additive : 0.0,
			border_a : 0.5,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.1,
			r : 0.0,
			border_g : 0.6,
			rad : 0.09999,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 20.0,
			border_r : 0.0,
			num_inst : 16.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q4 = 0;
m.q5 = 0;
m.num_instance = 0;
m.instance_counter = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.instance_counter = div((6.28*m.instance),m.num_instance);
m.x = (m.q1+(((0.1*div(1,m.q5))*m.mid_att)*Math.sin(m.instance_counter)));
m.y = ((1-m.q2)+(((0.1*div(1,m.q4))*m.mid_att)*Math.cos(m.instance_counter)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('instance_counter = 6.28*instance/num_instance;\n' + 'x = q1 + 0.1 * (1/q5) * mid_att * sin(instance_counter);\n' + 'y = 1-q2 + 0.1 * (1/q4) * mid_att * cos(instance_counter);'),

		},
		{
		'baseVals' : {
			r2 : 0.03,
			a : 0.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 3.14159,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.99979,
			additive : 0.0,
			border_a : 0.3,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.2,
			border_g : 0.0,
			rad : 0.09999,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 20.0,
			border_r : 0.0,
			num_inst : 16.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q4 = 0;
m.q5 = 0;
m.num_instance = 0;
m.instance_counter = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.instance_counter = div((6.28*m.instance),m.num_instance);
m.x = (m.q1+(((0.1*div(1,m.q5))*m.treb_att)*Math.sin(m.instance_counter)));
m.y = ((1-m.q2)+(((0.1*div(1,m.q4))*m.treb_att)*Math.cos(m.instance_counter)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('instance_counter = 6.28*instance/num_instance;\n' + 'x = q1 + 0.1 * (1/q5) * treb_att * sin(instance_counter);\n' + 'y = 1-q2 + 0.1 * (1/q4) * treb_att * cos(instance_counter);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 uv_bg_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (texsize.zw * 12.0);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 0.8)) + rand_frame.xy);\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = (((tmpvar_4.xyz * scale1) + bias1) - ((tmpvar_6.xyz * scale1) + bias1)).x;\n' + '  tmpvar_13.y = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1)).x;\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_noise_lq, tmpvar_12);\n' + '   vec2 tmpvar_15;\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = (uv_orig - uv);\n' + '  tmpvar_15 = (((uv_orig - \n' + '    (tmpvar_16 * 0.4)\n' + '  ) + (\n' + '    (tmpvar_13 * texsize.zw)\n' + '   * 2.0)) + ((\n' + '    (tmpvar_14.xy - 0.5)\n' + '   * texsize.zw) * 4.0));\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_fc_main, tmpvar_15);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_fc_main, tmpvar_15);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur3, tmpvar_15);\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_noise_lq, tmpvar_12);\n' + '  ret_2.x = (((tmpvar_17.x - \n' + '    ((tmpvar_18.x - ((tmpvar_19.xyz * scale3) + bias3).x) * 0.02)\n' + '  ) - 0.008) + ((tmpvar_20.x - 0.5) * 0.1));\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_main, uv);\n' + '  ret_2.y = tmpvar_21.y;\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur1, uv);\n' + '  ret_2.y = (ret_2.y + ((\n' + '    (ret_2.y - ((tmpvar_22.xyz * scale1) + bias1).y)\n' + '   * 0.1) - 0.015));\n' + '  uv_bg_1 = (uv_orig + tmpvar_16);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_fc_main, uv_bg_1);\n' + '  ret_2.z = ((tmpvar_23.z * 0.94) - 0.004);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24.w = 1.0;\n' + '  tmpvar_24.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_24;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv2_1;\n' + '   vec3 ret_2;\n' + '  uv2_1 = (uv + (vec2(1.0, 0.0) * texsize.zw));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv2_1);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv2_1);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_blur2, uv2_1);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur3, uv2_1);\n' + '  uv2_1 = (uv + (vec2(-1.0, 0.0) * texsize.zw));\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_main, uv2_1);\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_blur1, uv2_1);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_blur2, uv2_1);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_blur3, uv2_1);\n' + '  uv2_1 = (uv + (vec2(0.0, 1.0) * texsize.zw));\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_main, uv2_1);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_blur1, uv2_1);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_blur2, uv2_1);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur3, uv2_1);\n' + '  uv2_1 = (uv + (vec2(0.0, -1.0) * texsize.zw));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_main, uv2_1);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_blur1, uv2_1);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur2, uv2_1);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_blur3, uv2_1);\n' + '   vec3 tmpvar_19;\n' + '  tmpvar_19.z = 0.14;\n' + '  tmpvar_19.x = (((\n' + '    (tmpvar_3.xyz + (((tmpvar_4.xyz * scale1) + bias1) * 0.4))\n' + '   + \n' + '    (((tmpvar_5.xyz * scale2) + bias2) * 0.15)\n' + '  ) + (\n' + '    ((tmpvar_6.xyz * scale3) + bias3)\n' + '   * 0.1)).x - ((\n' + '    (tmpvar_7.xyz + (((tmpvar_8.xyz * scale1) + bias1) * 0.4))\n' + '   + \n' + '    (((tmpvar_9.xyz * scale2) + bias2) * 0.15)\n' + '  ) + (\n' + '    ((tmpvar_10.xyz * scale3) + bias3)\n' + '   * 0.1)).x);\n' + '  tmpvar_19.y = (((\n' + '    (tmpvar_11.xyz + (((tmpvar_12.xyz * scale1) + bias1) * 0.4))\n' + '   + \n' + '    (((tmpvar_13.xyz * scale2) + bias2) * 0.15)\n' + '  ) + (\n' + '    ((tmpvar_14.xyz * scale3) + bias3)\n' + '   * 0.1)).x - ((\n' + '    (tmpvar_15.xyz + (((tmpvar_16.xyz * scale1) + bias1) * 0.4))\n' + '   + \n' + '    (((tmpvar_17.xyz * scale2) + bias2) * 0.15)\n' + '  ) + (\n' + '    ((tmpvar_18.xyz * scale3) + bias3)\n' + '   * 0.1)).x);\n' + '  ret_2 = (0.5 + (0.5 * normalize(tmpvar_19)));\n' + '   vec2 x_20;\n' + '  x_20 = (ret_2.xy - 0.5);\n' + '  ret_2 = (ret_2 * clamp ((\n' + '    sqrt(dot (x_20, x_20))\n' + '   * 5.0), 0.0, 1.0));\n' + '  ret_2 = ret_2.xxy;\n' + '  ret_2 = (ret_2 + 1.0);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_blur3, uv);\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur1, uv);\n' + '  ret_2 = (ret_2 * mix (ret_2, (ret_2 * \n' + '    (((tmpvar_21.xyz * scale3) + bias3) - ((tmpvar_22.xyz * scale1) + bias1))\n' + '  ), pow (hue_shader, ret_2)));\n' + '  ret_2 = (ret_2 * hue_shader);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23.w = 1.0;\n' + '  tmpvar_23.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_23;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('vol = bass*8 + mid*5 + treb*3;\n' + 'm = m*0.97 + vol*0.08;\n' + 'monitor = vol;\n' + 'beat = above(vol,res)*above(vol,m)*above(vol,16);\n' + 'diff = (1-beat)*diff + beat*(vol-res);\n' + 'res = beat*(vol + m*0.1) + (1-beat)*(res -  (0.1+diff*0.02)*60/fps);\n' + 'res = max(0,res);\n' + 'x = if(beat,rand(60)*0.01 + 0.2,x);\n' + 'y = if(beat,rand(60)*0.01 + 0.2,y);\n' + 'q1 = x;\n' + 'q2 = y;\n' + 'q4 = aspectx;\n' + 'q5 = aspecty;\n' + 'wave_x = q1;\n' + 'wave_y = 1-q2;'),
	'pixel_eqs_str' : ('cx = q1;\n' + 'cy = q2;\n' + 'd = pow(sqrt(sqr(x-cx)+sqr(y-cy)),0.8);\n' + 'r = 0.2;\n' + 'v = 0.2;\n' + 'dx = (x - cx)*v*(d-r);\n' + 'dy = (y - cy)*v*(d-r);'),
};

return pmap;
});
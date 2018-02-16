define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.772,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 2.713,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 5.00873,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.12,
		ib_r : 0.25,
		mv_b : 0.5,
		echo_zoom : 2.0,
		ob_size : 0.0,
		b1ed : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.011,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.003,
		wave_thick : 1.0,
		modwavealphaend : 1.2,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.009,
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
m.bb = 0;
m.mm = 0;
m.tt = 0;
m.dm = 0;
m.dt = 0;
m.q11 = 0;
m.q12 = 0;
m.q13 = 0;
m.t = 0;
m.q14 = 0;
m.q15 = 0;
m.q16 = 0;
m.w = 0;
m.q17 = 0;
m.q18 = 0;
m.db = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.t = (m.time*12.3);
m.rot = (m.rot+(0.030*((0.60*Math.sin((0.38*m.time)))+(0.40*Math.sin((0.54*m.time))))));
m.dx = (m.dx+(0.002*((0.60*Math.sin((0.434*m.time)))+(0.40*Math.sin((0.277*m.time))))));
m.dy = (m.dy+(0.002*((0.60*Math.sin((0.384*m.time)))+(0.40*Math.sin((0.477*m.time))))));
m.db = ((m.db*0.98)+(m.bass*0.1));
m.bb = (m.bb+(m.db*0.1));
m.dt = ((m.dt*0.98)+(m.treb*0.1));
m.tt = (m.tt+(m.dt*0.1));
m.dm = ((m.dm*0.98)+(m.mid*0.1));
m.mm = (m.mm+(m.dm*0.1));
m.w = ((m.bb-m.tt)*0.1);
m.q11 = Math.sin(m.w);
m.q12 = Math.cos(m.w);
m.q13 = (0.5+(Math.sin(((m.bb-m.mm)*0.1))*0.25));
m.q14 = (0.5+(Math.sin(((m.tt-m.mm)*0.1))*0.25));
m.q15 = 4;
m.q16 = 0.06;
m.q17 = Math.sin(-m.w);
m.q18 = Math.cos(-m.w);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
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
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 3.14159,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.99979,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.986,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = Math.sin(div(m.time,65));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang =sin(time/65) ;'),

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
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.9,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = ((Math.sin(m.time)*0.4)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = sin(time) * .4 + .5;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.03,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 1.38306,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 36.0,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_bg_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (texsize.zw * 12.0);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 0.8)) + rand_frame.xy);\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = (((tmpvar_4.xyz * scale1) + bias1) - ((tmpvar_6.xyz * scale1) + bias1)).x;\n' + '  tmpvar_13.y = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1)).x;\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_noise_lq, tmpvar_12);\n' + '   vec2 tmpvar_15;\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = (uv_orig - uv);\n' + '  tmpvar_15 = (((uv_orig - \n' + '    (tmpvar_16 * 0.4)\n' + '  ) + (\n' + '    (tmpvar_13 * texsize.zw)\n' + '   * 2.0)) + ((\n' + '    (tmpvar_14.xy - 0.5)\n' + '   * texsize.zw) * 4.0));\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_main, tmpvar_15);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_main, tmpvar_15);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur3, tmpvar_15);\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_noise_lq, tmpvar_12);\n' + '  ret_2.x = (((tmpvar_17.x - \n' + '    ((tmpvar_18.x - ((tmpvar_19.xyz * scale3) + bias3).x) * 0.02)\n' + '  ) - 0.008) + ((tmpvar_20.x - 0.5) * 0.1));\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_main, uv);\n' + '  ret_2.y = tmpvar_21.y;\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur1, uv);\n' + '  ret_2.y = (ret_2.y + ((\n' + '    (ret_2.y - ((tmpvar_22.xyz * scale1) + bias1).y)\n' + '   * 0.1) - 0.015));\n' + '  uv_bg_1 = (uv_orig + (tmpvar_16 * 0.8));\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_main, uv_bg_1);\n' + '  ret_2.z = ((tmpvar_23.z * 0.94) - 0.004);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24.w = 1.0;\n' + '  tmpvar_24.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_24;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_rr_1;\n' + '   vec2 uv_r_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = ((uv - _qd.xy) * aspect.xy);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = ((_qc.w * tmpvar_3.x) - (_qc.z * tmpvar_3.y));\n' + '  tmpvar_4.y = ((_qc.z * tmpvar_3.x) + (_qc.w * tmpvar_3.y));\n' + '  uv_r_2 = (_qd.z * tmpvar_4);\n' + '  uv_r_2 = (_qd.xy + (uv_r_2 * aspect.zw));\n' + '  uv_r_2 = (1.0 - abs((\n' + '    (fract((uv_r_2 * 0.5)) * 2.0)\n' + '   - 1.0)));\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = ((uv_r_2 - _qd.xy) * aspect.xy);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = ((_qe.y * tmpvar_5.x) - (_qe.x * tmpvar_5.y));\n' + '  tmpvar_6.y = ((_qe.x * tmpvar_5.x) + (_qe.y * tmpvar_5.y));\n' + '  uv_rr_1 = (_qd.z * tmpvar_6);\n' + '  uv_rr_1 = (_qd.xy + ((\n' + '    (uv_rr_1 - _qd.xy)\n' + '   * aspect.zw) * _qd.w));\n' + '  uv_rr_1 = (1.0 - abs((\n' + '    (fract((uv_rr_1 * 0.5)) * 2.0)\n' + '   - 1.0)));\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv_rr_1 + (vec2(1.0, 0.0) * tmpvar_7));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv_rr_1 - (vec2(1.0, 0.0) * tmpvar_7));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (uv_rr_1 + (vec2(0.0, 1.0) * tmpvar_7));\n' + '  tmpvar_12 = texture2D (sampler_blur1, P_13);\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (uv_rr_1 - (vec2(0.0, 1.0) * tmpvar_7));\n' + '  tmpvar_14 = texture2D (sampler_blur1, P_15);\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.x = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1)).y;\n' + '  tmpvar_16.y = (((tmpvar_12.xyz * scale1) + bias1) - ((tmpvar_14.xyz * scale1) + bias1)).y;\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17 = (uv_rr_1 + (tmpvar_16 * 0.4));\n' + '   vec3 tmpvar_18;\n' + '  tmpvar_18 = mix (vec3(2.0, 1.2, 0.0), vec3(-1.0, 0.8, -1.0), texture2D (sampler_main, uv_rr_1).zzz);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur1, uv_rr_1);\n' + '   vec3 x_20;\n' + '  x_20 = (vec3(0.8, 0.6, 0.5) * texture2D (sampler_fc_main, tmpvar_17).x);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21.w = 1.0;\n' + '  tmpvar_21.xyz = mix (x_20, tmpvar_18, vec3(((\n' + '    (tmpvar_19.xyz * scale1)\n' + '   + bias1).y * 0.35)));\n' + '  vec4 ret4 = tmpvar_21;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('t = time*12.3;\n' + 'rot = rot + 0.030*( 0.60*sin(0.38*time) + 0.40*sin(0.54*time) );\n' + 'dx = dx + 0.002*( 0.60*sin(0.434*time) + 0.40*sin(0.277*time) );\n' + 'dy = dy + 0.002*( 0.60*sin(0.384*time) + 0.40*sin(0.477*time) );\n' + 'db = db*0.98 + bass*0.1;\n' + 'bb = bb + db*0.1;\n' + 'dt = dt*0.98 + treb*0.1;\n' + 'tt = tt + dt*0.1;\n' + 'dm = dm*0.98 + mid*0.1;\n' + 'mm = mm + dm*0.1;\n' + 'w = (bb-tt)*0.1;\n' + 'q11 = sin(w);\n' + 'q12 = cos(w);\n' + 'q13 = 0.5 + sin((bb-mm)*0.1)*0.25;\n' + 'q14 = 0.5 + sin((tt-mm)*0.1)*0.25;\n' + 'q15 = 4;\n' + 'q16 = 0.06;\n' + 'q17 = sin(-w);\n' + 'q18 = cos(-w);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 1.0,
		mv_x : 64.0,
		warpscale : 100.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.554,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.5,
		b2x : 1.0,
		warp : 0.01359,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 0.26311,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 1.0,
		mv_b : 0.5,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
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
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.2,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 0.009,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.04,
		ib_b : 1.0,
		mv_r : 0.5,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.2,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.xx = 0;
m.yy = 0;
m.vx = 0;
m.vy = 0;
m.d = 0;
m.mx = 0;
m.my = 0;
m.w = 0;
m.cz = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.vx = (0.5+(Math.cos((m.time*0.2))*0.5));
m.vy = (0.5+(Math.sin((m.time*0.2))*0.5));
m.x = (m.x-m.vx);
m.y = (m.y-m.vy);
m.d = (m.time*0.1);
m.xx = ((Math.sin(m.d)*m.x)+(Math.cos(m.d)*m.y));
m.yy = ((Math.cos(m.d)*m.x)-(Math.sin(m.d)*m.y));
m.x = m.xx;
m.y = m.yy;
m.cz = 0.5;
m.zoom = 0.33;
m.w = (div(1,m.zoom)*(1+sqrt(((sqr(m.cz)+sqr((m.x-m.cx)))+sqr((m.y-m.cy))))));
m.dx = ((m.x-m.mx)*m.w);
m.dy = ((m.y-m.my)*m.w);
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
			thickoutline : 1.0,
			g : 0.03,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.86644,
			x : 0.5,
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

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

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
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.04,
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
			rad : 0.81623,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 36.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (1-m.q1);
m.y = m.q2;
m.x = (0.5+((m.x-0.5)*0.25));
m.y = (0.5+((m.y-0.5)*0.25));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 1-q1;\n' + 'y = q2;\n' + 'x = 0.5 + (x - 0.5)*0.25;\n' + 'y = 0.5 + (y - 0.5)*0.25;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 uv_z_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (1.0 - abs((\n' + '    (fract((uv * 0.5)) * 2.0)\n' + '   - 1.0)));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_fc_main, tmpvar_3);\n' + '  ret_2.x = (tmpvar_4.x * 0.5);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (texsize.zw * 4.0);\n' + '   vec2 tmpvar_6;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (uv_orig - 0.5);\n' + '  tmpvar_6 = ((tmpvar_7 * 0.996) + 0.5);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (tmpvar_6 + (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (tmpvar_6 - (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (tmpvar_6 + (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_12 = texture2D (sampler_blur1, P_13);\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (tmpvar_6 - (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_14 = texture2D (sampler_blur1, P_15);\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.x = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1)).z;\n' + '  tmpvar_16.y = (((tmpvar_12.xyz * scale1) + bias1) - ((tmpvar_14.xyz * scale1) + bias1)).z;\n' + '  uv_z_1 = (tmpvar_6 - ((tmpvar_16 * texsize.zw) * 2.0));\n' + '   float tmpvar_17;\n' + '  tmpvar_17 = clamp ((1.0 - (\n' + '    sqrt(dot (tmpvar_7, tmpvar_7))\n' + '   * 3.2)), 0.0, 1.0);\n' + '   float tmpvar_18;\n' + '  tmpvar_18 = max (((\n' + '    (texture2D (sampler_fc_main, tmpvar_3).x - 0.5)\n' + '   * 3.0) * tmpvar_17), texture2D (sampler_fc_main, uv_z_1).z);\n' + '  ret_2.z = tmpvar_18;\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_fc_main, uv_z_1);\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = clamp (uv_z_1, 0.0, 1.0);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_blur1, tmpvar_20);\n' + '  ret_2.z = (ret_2.z + ((tmpvar_19.z - \n' + '    ((tmpvar_21.xyz * scale1) + bias1)\n' + '  .z) * 0.02));\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22 = mix (uv, uv_orig, vec2(0.9996, 0.9996));\n' + '   float tmpvar_23;\n' + '  tmpvar_23 = max (texture2D (sampler_fc_main, tmpvar_22).y, texture2D (sampler_fc_main, uv_orig).z);\n' + '  ret_2.y = (tmpvar_23 - 0.008);\n' + '  ret_2.z = (ret_2.z * (1.0 + (ret_2.y * 0.026)));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24.w = 1.0;\n' + '  tmpvar_24.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_24;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 6.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = dot (tmpvar_7, vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_13.y = dot (tmpvar_12, vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = (uv - (0.25 * tmpvar_13));\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15.x = dot (tmpvar_7, vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_15.y = dot (tmpvar_12, vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = (uv + (0.25 * tmpvar_15));\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur3, tmpvar_14);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_blur1, tmpvar_14);\n' + '  ret_1 = ((0.8 * (\n' + '    (tmpvar_17.xyz * scale3)\n' + '   + bias3)) - ((tmpvar_18.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur1, uv);\n' + '  ret_1 = (ret_1 + (0.6 * (\n' + '    (tmpvar_19.xyz * scale1)\n' + '   + bias1)));\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_blur2, tmpvar_16);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_blur1, tmpvar_16);\n' + '  ret_1 = (ret_1 - ((\n' + '    (tmpvar_20.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_21.xyz * scale1)\n' + '   + bias1)));\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_main, tmpvar_16);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_blur1, tmpvar_16);\n' + '  ret_1 = (ret_1 + ((1.2 * tmpvar_22.xyz) + (0.15 * \n' + '    ((tmpvar_23.xyz * scale1) + bias1)\n' + '  )));\n' + '  ret_1 = (ret_1 + 1.0);\n' + '   float tmpvar_24;\n' + '  tmpvar_24 = dot (ret_1, vec3(0.32, 0.49, 0.29));\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_blur3, tmpvar_14);\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_27;\n' + '  tmpvar_27 = texture2D (sampler_blur1, tmpvar_16);\n' + '  ret_1 = (mix (vec3(tmpvar_24), (\n' + '    (0.75 * vec3(tmpvar_24))\n' + '   * \n' + '    dot ((((0.6 * \n' + '      ((tmpvar_25.xyz * scale3) + bias3)\n' + '    ) - (0.7 * tmpvar_26.xyz)) - (0.3 * (\n' + '      (tmpvar_27.xyz * scale1)\n' + '     + bias1))), vec3(0.32, 0.49, 0.29))\n' + '  ), pow (hue_shader, vec3(tmpvar_24))) * 0.9);\n' + '  ret_1 = (ret_1 * ret_1);\n' + '   vec3 tmpvar_28;\n' + '  tmpvar_28 = sqrt(ret_1);\n' + '  ret_1 = tmpvar_28;\n' + '   vec4 tmpvar_29;\n' + '  tmpvar_29.w = 1.0;\n' + '  tmpvar_29.xyz = tmpvar_28;\n' + '  vec4 ret4 = tmpvar_29;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_a = 0;'),
	'pixel_eqs_str' : ('vx = 0.5+cos(time*0.2)*.5;\n' + 'vy = 0.5+sin(time*0.2)*.5;\n' + 'x = x - vx;\n' + 'y = y - vy;\n' + 'd = time*0.1;\n' + 'xx = sin(d)*x + cos(d)*y;\n' + 'yy = cos(d)*x - sin(d)*y;\n' + 'x = xx;\n' + 'y = yy;\n' + 'cz = 0.5;\n' + 'zoom = 0.33;\n' + 'w = 1/zoom*(1+sqrt(sqr(cz) + sqr(x-cx)+sqr(y-cy)));\n' + 'dx = (x-mx)*w;\n' + 'dy = (y-my)*w;'),
};

return pmap;
});
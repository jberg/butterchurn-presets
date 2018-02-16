define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.7,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.285751,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.22019,
		ob_r : 0.0,
		sy : 1.22019,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.999999,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.003587,
		ob_size : 0.01,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.000491,
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
		decay : 0.94,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.a = 0;
m.q2 = 0;
m.b = 0;
m.q3 = 0;
m.mod = 0;
m.q4 = 0;
m.sw = 0;
m.q7 = 0;
m.mt = 0;
m.toc = 0;
m.vav = 0;
m.treb_avg = 0;
m.dis = 0;
m.tic = 0;
m.lim = 0;
m.slide = 0;
m.bt = 0;
m.bass_avg = 0;
m.vol = 0;
m.tin = 0;
m.mid_avg = 0;
m.sp = 0;
m.vt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = m.time;
m.vol = (((m.bass_att+m.treb_att)+m.mid_att)*0.333333);
m.treb_avg = (m.tic*((m.treb_avg*(div(1,m.tic)-10))+(10*m.treb)));
m.mid_avg = (m.tic*((m.mid_avg*(div(1,m.tic)-10))+(10*m.mid)));
m.bass_avg = (m.tic*((m.bass_avg*(div(1,m.tic)-10))+(10*m.bass)));
m.vav = (m.tic*((m.vav*(div(1,m.tic)-10))+((10*((m.bass+m.treb)+m.mid))*0.33333)));
m.tt = (m.tt+(m.tic*m.treb));
m.mt = (m.mt+(m.tic*m.mid));
m.bt = (m.bt+(m.tic*m.bass));
m.vt = (m.vt+(m.tic*m.vav));
m.sp = (Math.abs((m.vav-m.slide))*0.1);
m.slide = (ifcond(above(m.slide, m.vav), (m.slide-(m.tic*m.sp)), (m.slide+(m.tic*m.sp)))+(((1-m.toc)*m.vav)*0.1));
m.toc = 1;
m.q1 = rand(2);
m.q2 = m.time;
m.q3 = ((3+rand(3))+rand(3));
m.q4 = m.vt;
m.sw = (1-m.sw);
m.q7 = m.sw;
		m.rkeys = ['sx','sy'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.a = 0.5;
m.b = 0.5;
m.dis = pow((((m.x-m.a)*(m.x-m.a))+((0.5625*(m.y-m.b))*(m.y-m.b))), 0.5);
m.sw = below(m.dis, (0.2+(m.treb*0.03)));
m.mod = (-0.18+(0.18*pow((1-(m.dis*4)), 0.8)));
m.dx = ifcond(m.sw, (m.mod*(m.x-0.5)), 0);
m.dy = ifcond(m.sw, (m.mod*(m.y-0.5)), 0);
m.mod = (0.005-(0.01*Math.sin(((m.rad*6.2832)*2))));
m.dx = ifcond(m.sw, (m.dx+(Math.sin(m.ang)*m.mod)), 0);
m.dy = ifcond(m.sw, (m.dy+(Math.cos(m.ang)*m.mod)), 0);
m.sx = ifcond(m.sw, m.sx, 1);
m.sy = ifcond(m.sw, m.sy, 1);
m.a = above(m.x, 0.5);
m.b = above(m.y, 0.5);
m.dis = pow((((m.x-m.a)*(m.x-m.a))+((0.5625*(m.y-m.b))*(m.y-m.b))), 0.5);
m.lim = below(m.dis, 0.25);
m.dx = ifcond(m.lim, (0.5*(1-(2*below(m.x, 0.5)))), m.dx);
m.dy = ifcond(m.lim, (0.5*(1-(2*below(m.y, 0.5)))), m.dy);
m.mod = -1;
m.a = (Math.sin((m.q4*0.02347))*4);
m.b = (Math.cos((m.q4*0.03348))*4);
m.dx = ifcond((m.lim+m.sw), m.dx, (m.mod*(m.x-m.a)));
m.dy = ifcond((m.lim+m.sw), m.dy, (m.mod*(m.y-m.b)));
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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.aa = 0;
m.q1 = 0;
m.ab = 0;
m.ac = 0;
m.q3 = 0;
m.mod = 0;
m.ad = 0;
m.ae = 0;
m.cop = 0;
m.af = 0;
m.ag = 0;
m.q7 = 0;
m.sz = 0;
m.ai = 0;
m.aj = 0;
m.cou = 0;
m.ox = 0;
m.tav = 0;
m.ak = 0;
m.oy = 0;
m.poi = 0;
m.it = 0;
m.mx = 0;
m.my = 0;
m.mang = 0;
m.ud = 0;
m.raa = 0;
m.rab = 0;
m.seg = 0;
m.la = 0;
m.ti = 0;
m.ita = 0;
m.lb = 0;
m.modx = 0;
m.lc = 0;
m.mody = 0;
m.ld = 0;
m.le = 0;
m.lf = 0;
m.toll = 0;
m.lg = 0;
m.rep = 0;
m.li = 0;
m.lev = 0;
m.t1 = 0;
m.sp = 0;
m.lj = 0;
m.t2 = 0;
m.lk = 0;
m.t3 = 0;

			m.rkeys = ['aa','ab','ac','ad','ae','af','ag','ai','aj','ak','it','ud','seg','la','ita','lb','modx','lc','mody','ld','le','lf','toll','lg','rep','li','lev','lj','lk'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t3 = m.q7;
m.t1 = 0.5;
m.t2 = 0.5;
		return m;
	},
		'point_eqs' : function(m) {
m.sp = (m.sample*6.2832);
m.ti = (m.time*20);
m.raa = (((Math.sin(((m.ti*12.87)-(m.sp*15.87)))*2.5)-(Math.cos(((m.ti*7.98)+(m.sp*9.5)))*6))+(Math.sin(((m.ti*8.9)+(m.sp*48)))*7.4));
m.raa = Math.abs((m.raa-Math.floor(m.raa)));
m.rab = (((Math.sin(((m.ti*6.74)-(m.sp*18.52)))*5.7)+(Math.cos(((m.ti*3.94)+(m.sp*27.55)))*1.7))+(Math.sin(((m.ti*14.8)+(m.sp*3.5)))*4));
m.rab = Math.abs((m.rab-Math.floor(m.rab)));
m.cou = 30;
m.seg = (m.seg*above(m.sample, 0));
m.it = ((m.it+1)*above(m.sample, 0));
m.seg = (m.seg+equal(m.ita, 0));
m.ita = (((m.ita+1)*above(m.sample, 0))*below(m.ita, m.cou));
m.cop = equal(m.ita, m.cou);
m.toll = (m.toll*above(m.sample, 0));
m.toll = ((m.toll+m.value1)+m.value2);
m.tav = (div(m.toll,m.cou)*0.1);
m.mod = (((m.raa*m.bass)*0.5)-((m.rab*(m.mid+m.treb))*0.125));
m.mod = ifcond(m.q1, (((m.bass*0.5)*(0.5+(0.5*Math.sin(m.sp))))-(((m.mid+m.treb)*0.25)*(0.5+(0.5*Math.cos(m.sp))))), m.mod);
m.toll = (m.toll*(1-m.cop));
m.la = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 1)), m.tav, m.la);
m.lb = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 2)), m.tav, m.lb);
m.lc = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 3)), m.tav, m.lc);
m.ld = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 4)), m.tav, m.ld);
m.le = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 5)), m.tav, m.le);
m.lf = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 6)), m.tav, m.lf);
m.lg = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 7)), m.tav, m.lg);
m.li = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 8)), m.tav, m.li);
m.lj = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 9)), m.tav, m.lj);
m.lk = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 10)), m.tav, m.lk);
m.aa = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 1)), m.mod, m.aa);
m.ab = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 2)), m.mod, m.ab);
m.ac = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 3)), m.mod, m.ac);
m.ad = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 4)), m.mod, m.ad);
m.ae = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 5)), m.mod, m.ae);
m.af = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 6)), m.mod, m.af);
m.ag = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 7)), m.mod, m.ag);
m.ai = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 8)), m.mod, m.ai);
m.aj = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 9)), m.mod, m.aj);
m.ak = (ifcond((((1-m.t3)*m.cop)*equal(m.seg, 10)), m.mod, m.ak)*0);
m.lev = (m.lev*above(m.sample, 0));
m.ud = (m.ud*above(m.sample, 0));
m.rep = (m.rep*above(m.sample, 0));
m.lev = ifcond(m.ud, (m.lev-1), (m.lev+1));
m.rep = (m.rep+equal(m.lev, 0));
m.ud = ifcond(equal(m.lev, 0), 0, ifcond(equal(m.lev, 10), 1, m.ud));
m.mx = (((((above(m.lev, 0)*m.la)*Math.sin(m.aa))+((above(m.lev, 1)*m.lb)*Math.sin(m.ab)))+((above(m.lev, 2)*m.lc)*Math.sin(m.ac)))+((above(m.lev, 3)*m.ld)*Math.sin(m.ad)));
m.my = (((((above(m.lev, 0)*m.la)*Math.cos(m.aa))+((above(m.lev, 1)*m.lb)*Math.cos(m.ab)))+((above(m.lev, 2)*m.lc)*Math.cos(m.ac)))+((above(m.lev, 3)*m.ld)*Math.cos(m.ad)));
m.mx = (((m.mx+((above(m.lev, 4)*m.le)*Math.sin(m.ae)))+((above(m.lev, 5)*m.lf)*Math.sin(m.af)))+((above(m.lev, 6)*m.lg)*Math.sin(m.ag)));
m.my = (((m.my+((above(m.lev, 4)*m.le)*Math.cos(m.ae)))+((above(m.lev, 5)*m.lf)*Math.cos(m.af)))+((above(m.lev, 6)*m.lg)*Math.cos(m.ag)));
m.mx = ((m.mx+((above(m.lev, 7)*m.li)*Math.sin(m.ai)))+((above(m.lev, 8)*m.lj)*Math.sin(m.aj)));
m.my = (((m.my+((above(m.lev, 7)*m.li)*Math.cos(m.ai)))+((above(m.lev, 8)*m.lj)*Math.cos(m.aj)))+((above(m.lev, 9)*m.lk)*Math.cos(m.ak)));
m.mx = (((1-(2*equal(m.ud, 1)))*m.mx)*(1-equal(m.lev, 10)));
m.my = Math.min(m.my, 0.25);
m.poi = m.q3;
m.modx = ifcond((equal(m.lev, m.poi)*m.ud), m.mx, m.modx);
m.mody = ifcond((equal(m.lev, m.poi)*m.ud), m.my, m.mody);
m.mang = (((above(m.rep, 7)*below(m.rep, 14))-(above(m.rep, 15)*below(m.rep, 22)))*above(m.lev, m.poi));
m.modx = 0;
m.mx = (m.mx-m.modx);
m.my = (m.my-m.mody);
m.ox = ((m.mx*Math.cos(m.mang))-(m.my*Math.sin(m.mang)));
m.oy = ((m.mx*Math.sin(m.mang))+(m.my*Math.cos(m.mang)));
m.mx = (m.ox+m.modx);
m.my = (m.oy+m.mody);
m.mang = ((above(m.rep, 1)*m.rep)*1.0472);
m.ox = ((m.mx*Math.cos(m.mang))-(m.my*Math.sin(m.mang)));
m.oy = ((m.mx*Math.sin(m.mang))+(m.my*Math.cos(m.mang)));
m.mx = m.ox;
m.my = m.oy;
m.sz = 0.5;
m.x = (((m.mx*0.75)*m.sz)+m.t1);
m.y = ((m.my*m.sz)+m.t2);
m.a = m.t3;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t3 = q7;\n' + 't1 = .5;\n' + 't2 = .5;'),
		'point_eqs_str' : ('sp = sample*6.2832;\n' + 'ti = time*20;\n' + 'raa = sin(ti*12.87 - sp*15.87)*2.5 - cos(ti*7.98 + sp*9.5)*6 + sin(ti*8.9 + sp*48)*7.4;\n' + 'raa = abs(raa - int(raa));\n' + 'rab = sin(ti*6.74 - sp*18.52)*5.7 + cos(ti*3.94 + sp*27.55)*1.7 + sin(ti*14.8 + sp*3.5)*4;\n' + 'rab = abs(rab - int(rab));\n' + 'cou = 30;\n' + 'seg = seg*above(sample,0);\n' + 'it = (it + 1)*above(sample,0);\n' + 'seg = seg + equal(ita,0);\n' + 'ita = (ita + 1)*above(sample,0)*below(ita,cou);\n' + 'cop = equal(ita,cou);\n' + 'toll = toll*above(sample,0);\n' + 'toll = toll + value1 + value2;\n' + 'tav = toll/cou*.1;\n' + 'mod = raa*bass*.5 - rab*(mid+treb)*.125;\n' + 'mod = if(q1,bass*.5*(.5 + .5*sin(sp)) - (mid+treb)*.25*(.5 + .5*cos(sp)),mod);\n' + 'toll = toll*(1-cop);\n' + 'la = if((1-t3)*cop*equal(seg,1),tav,la);\n' + 'lb = if((1-t3)*cop*equal(seg,2),tav,lb);\n' + 'lc = if((1-t3)*cop*equal(seg,3),tav,lc);\n' + 'ld = if((1-t3)*cop*equal(seg,4),tav,ld);\n' + 'le = if((1-t3)*cop*equal(seg,5),tav,le);\n' + 'lf = if((1-t3)*cop*equal(seg,6),tav,lf);\n' + 'lg = if((1-t3)*cop*equal(seg,7),tav,lg);\n' + 'li = if((1-t3)*cop*equal(seg,8),tav,li);\n' + 'lj = if((1-t3)*cop*equal(seg,9),tav,lj);\n' + 'lk = if((1-t3)*cop*equal(seg,10),tav,lk);\n' + 'aa = if((1-t3)*cop*equal(seg,1),mod,aa);\n' + 'ab = if((1-t3)*cop*equal(seg,2),mod,ab);\n' + 'ac = if((1-t3)*cop*equal(seg,3),mod,ac);\n' + 'ad = if((1-t3)*cop*equal(seg,4),mod,ad);\n' + 'ae = if((1-t3)*cop*equal(seg,5),mod,ae);\n' + 'af = if((1-t3)*cop*equal(seg,6),mod,af);\n' + 'ag = if((1-t3)*cop*equal(seg,7),mod,ag);\n' + 'ai = if((1-t3)*cop*equal(seg,8),mod,ai);\n' + 'aj = if((1-t3)*cop*equal(seg,9),mod,aj);\n' + 'ak = if((1-t3)*cop*equal(seg,10),mod,ak)*0;\n' + 'lev = lev*above(sample,0);\n' + ' ud = ud*above(sample,0);\n' + ' rep = rep*above(sample,0);\n' + ' lev = if(ud,lev-1,lev+1);\n' + ' rep = (rep + equal(lev,0));\n' + ' ud = if(equal(lev,0),0,if(equal(lev,10),1,ud));\n' + 'mx = above(lev,0)*la*sin(aa) + above(lev,1)*lb*sin(ab) + above(lev,2)*lc*sin(ac) + above(lev,3)*ld*sin(ad);\n' + 'my = above(lev,0)*la*cos(aa) + above(lev,1)*lb*cos(ab) + above(lev,2)*lc*cos(ac) + above(lev,3)*ld*cos(ad);\n' + 'mx = mx + above(lev,4)*le*sin(ae) + above(lev,5)*lf*sin(af) + above(lev,6)*lg*sin(ag);\n' + 'my = my + above(lev,4)*le*cos(ae) + above(lev,5)*lf*cos(af) + above(lev,6)*lg*cos(ag);\n' + 'mx = mx + above(lev,7)*li*sin(ai) + above(lev,8)*lj*sin(aj);\n' + 'my = my + above(lev,7)*li*cos(ai) + above(lev,8)*lj*cos(aj) + above(lev,9)*lk*cos(ak);\n' + 'mx = (1-2*equal(ud,1))*mx*(1-equal(lev,10));\n' + 'my = min(my,.25);\n' + 'poi = q3;\n' + 'modx = if(equal(lev,poi)*ud,mx,modx);\n' + 'mody = if(equal(lev,poi)*ud,my,mody);\n' + 'mang = (above(rep,7)*below(rep,14) - above(rep,15)*below(rep,22))*above(lev,poi);\n' + 'modx = 0;\n' + 'mx = mx - modx;\n' + 'my = my - mody;\n' + 'ox = mx*cos(mang) - my*sin(mang);\n' + 'oy = mx*sin(mang) + my*cos(mang);\n' + 'mx = ox + modx;\n' + 'my = oy + mody;\n' + 'mang = above(rep,1)*rep*1.0472;\n' + 'ox = mx*cos(mang) - my*sin(mang);\n' + 'oy = mx*sin(mang) + my*cos(mang);\n' + 'mx = ox;\n' + 'my = oy;\n' + 'sz = .5;\n' + 'x = mx*.75*sz + t1;\n' + 'y = my*sz + t2;\n' + 'a = t3;'),

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
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.aa = 0;
m.q1 = 0;
m.ab = 0;
m.ac = 0;
m.q3 = 0;
m.mod = 0;
m.ad = 0;
m.ae = 0;
m.cop = 0;
m.af = 0;
m.ag = 0;
m.q7 = 0;
m.sz = 0;
m.ai = 0;
m.aj = 0;
m.cou = 0;
m.ox = 0;
m.tav = 0;
m.ak = 0;
m.oy = 0;
m.poi = 0;
m.it = 0;
m.mx = 0;
m.my = 0;
m.mang = 0;
m.ud = 0;
m.raa = 0;
m.rab = 0;
m.seg = 0;
m.la = 0;
m.ti = 0;
m.ita = 0;
m.lb = 0;
m.modx = 0;
m.lc = 0;
m.mody = 0;
m.ld = 0;
m.le = 0;
m.lf = 0;
m.toll = 0;
m.lg = 0;
m.rep = 0;
m.li = 0;
m.lev = 0;
m.t1 = 0;
m.sp = 0;
m.lj = 0;
m.t2 = 0;
m.lk = 0;
m.t3 = 0;

			m.rkeys = ['aa','ab','ac','ad','ae','af','ag','ai','aj','ak','it','ud','seg','la','ita','lb','modx','lc','mody','ld','le','lf','toll','lg','rep','li','lev','lj','lk'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t3 = m.q7;
m.t1 = 0.5;
m.t2 = 0.5;
		return m;
	},
		'point_eqs' : function(m) {
m.sp = (m.sample*6.2832);
m.ti = (m.time*20);
m.raa = (((Math.sin(((m.ti*12.87)-(m.sp*15.87)))*2.5)-(Math.cos(((m.ti*7.98)+(m.sp*9.5)))*6))+(Math.sin(((m.ti*8.9)+(m.sp*48)))*7.4));
m.raa = Math.abs((m.raa-Math.floor(m.raa)));
m.rab = (((Math.sin(((m.ti*6.74)-(m.sp*18.52)))*5.7)+(Math.cos(((m.ti*3.94)+(m.sp*27.55)))*1.7))+(Math.sin(((m.ti*14.8)+(m.sp*3.5)))*4));
m.rab = Math.abs((m.rab-Math.floor(m.rab)));
m.cou = 30;
m.seg = (m.seg*above(m.sample, 0));
m.it = ((m.it+1)*above(m.sample, 0));
m.seg = (m.seg+equal(m.ita, 0));
m.ita = (((m.ita+1)*above(m.sample, 0))*below(m.ita, m.cou));
m.cop = equal(m.ita, m.cou);
m.toll = (m.toll*above(m.sample, 0));
m.toll = ((m.toll+m.value1)+m.value2);
m.tav = (div(m.toll,m.cou)*0.1);
m.mod = (((m.raa*m.bass)*0.5)-((m.rab*(m.mid+m.treb))*0.125));
m.mod = ifcond(m.q1, (((m.bass*0.5)*(0.5+(0.5*Math.sin(m.sp))))-(((m.mid+m.treb)*0.25)*(0.5+(0.5*Math.cos(m.sp))))), m.mod);
m.toll = (m.toll*(1-m.cop));
m.la = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 1)), m.tav, m.la);
m.lb = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 2)), m.tav, m.lb);
m.lc = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 3)), m.tav, m.lc);
m.ld = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 4)), m.tav, m.ld);
m.le = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 5)), m.tav, m.le);
m.lf = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 6)), m.tav, m.lf);
m.lg = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 7)), m.tav, m.lg);
m.li = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 8)), m.tav, m.li);
m.lj = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 9)), m.tav, m.lj);
m.lk = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 10)), m.tav, m.lk);
m.aa = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 1)), m.mod, m.aa);
m.ab = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 2)), m.mod, m.ab);
m.ac = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 3)), m.mod, m.ac);
m.ad = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 4)), m.mod, m.ad);
m.ae = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 5)), m.mod, m.ae);
m.af = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 6)), m.mod, m.af);
m.ag = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 7)), m.mod, m.ag);
m.ai = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 8)), m.mod, m.ai);
m.aj = ifcond((((1-m.t3)*m.cop)*equal(m.seg, 9)), m.mod, m.aj);
m.ak = (ifcond((((1-m.t3)*m.cop)*equal(m.seg, 10)), m.mod, m.ak)*0);
m.lev = (m.lev*above(m.sample, 0));
m.ud = (m.ud*above(m.sample, 0));
m.rep = (m.rep*above(m.sample, 0));
m.lev = ifcond(m.ud, (m.lev-1), (m.lev+1));
m.rep = (m.rep+equal(m.lev, 0));
m.ud = ifcond(equal(m.lev, 0), 0, ifcond(equal(m.lev, 10), 1, m.ud));
m.mx = (((((above(m.lev, 0)*m.la)*Math.sin(m.aa))+((above(m.lev, 1)*m.lb)*Math.sin(m.ab)))+((above(m.lev, 2)*m.lc)*Math.sin(m.ac)))+((above(m.lev, 3)*m.ld)*Math.sin(m.ad)));
m.my = (((((above(m.lev, 0)*m.la)*Math.cos(m.aa))+((above(m.lev, 1)*m.lb)*Math.cos(m.ab)))+((above(m.lev, 2)*m.lc)*Math.cos(m.ac)))+((above(m.lev, 3)*m.ld)*Math.cos(m.ad)));
m.mx = (((m.mx+((above(m.lev, 4)*m.le)*Math.sin(m.ae)))+((above(m.lev, 5)*m.lf)*Math.sin(m.af)))+((above(m.lev, 6)*m.lg)*Math.sin(m.ag)));
m.my = (((m.my+((above(m.lev, 4)*m.le)*Math.cos(m.ae)))+((above(m.lev, 5)*m.lf)*Math.cos(m.af)))+((above(m.lev, 6)*m.lg)*Math.cos(m.ag)));
m.mx = ((m.mx+((above(m.lev, 7)*m.li)*Math.sin(m.ai)))+((above(m.lev, 8)*m.lj)*Math.sin(m.aj)));
m.my = (((m.my+((above(m.lev, 7)*m.li)*Math.cos(m.ai)))+((above(m.lev, 8)*m.lj)*Math.cos(m.aj)))+((above(m.lev, 9)*m.lk)*Math.cos(m.ak)));
m.mx = (((1-(2*equal(m.ud, 1)))*m.mx)*(1-equal(m.lev, 10)));
m.my = Math.min(m.my, 0.25);
m.poi = m.q3;
m.modx = ifcond((equal(m.lev, m.poi)*m.ud), m.mx, m.modx);
m.mody = ifcond((equal(m.lev, m.poi)*m.ud), m.my, m.mody);
m.mang = (((above(m.rep, 7)*below(m.rep, 14))-(above(m.rep, 15)*below(m.rep, 22)))*above(m.lev, m.poi));
m.modx = 0;
m.mx = (m.mx-m.modx);
m.my = (m.my-m.mody);
m.ox = ((m.mx*Math.cos(m.mang))-(m.my*Math.sin(m.mang)));
m.oy = ((m.mx*Math.sin(m.mang))+(m.my*Math.cos(m.mang)));
m.mx = (m.ox+m.modx);
m.my = (m.oy+m.mody);
m.mang = ((above(m.rep, 1)*m.rep)*1.0472);
m.ox = ((m.mx*Math.cos(m.mang))-(m.my*Math.sin(m.mang)));
m.oy = ((m.mx*Math.sin(m.mang))+(m.my*Math.cos(m.mang)));
m.mx = m.ox;
m.my = m.oy;
m.sz = 0.5;
m.x = (((m.mx*0.75)*m.sz)+m.t1);
m.y = ((m.my*m.sz)+m.t2);
m.a = m.t3;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t3 = q7;\n' + 't1 = .5;\n' + 't2 = .5;'),
		'point_eqs_str' : ('sp = sample*6.2832;\n' + 'ti = time*20;\n' + 'raa = sin(ti*12.87 - sp*15.87)*2.5 - cos(ti*7.98 + sp*9.5)*6 + sin(ti*8.9 + sp*48)*7.4;\n' + 'raa = abs(raa - int(raa));\n' + 'rab = sin(ti*6.74 - sp*18.52)*5.7 + cos(ti*3.94 + sp*27.55)*1.7 + sin(ti*14.8 + sp*3.5)*4;\n' + 'rab = abs(rab - int(rab));\n' + 'cou = 30;\n' + 'seg = seg*above(sample,0);\n' + 'it = (it + 1)*above(sample,0);\n' + 'seg = seg + equal(ita,0);\n' + 'ita = (ita + 1)*above(sample,0)*below(ita,cou);\n' + 'cop = equal(ita,cou);\n' + 'toll = toll*above(sample,0);\n' + 'toll = toll + value1 + value2;\n' + 'tav = toll/cou*.1;\n' + 'mod = raa*bass*.5 - rab*(mid+treb)*.125;\n' + 'mod = if(q1,bass*.5*(.5 + .5*sin(sp)) - (mid+treb)*.25*(.5 + .5*cos(sp)),mod);\n' + 'toll = toll*(1-cop);\n' + 'la = if((1-t3)*cop*equal(seg,1),tav,la);\n' + 'lb = if((1-t3)*cop*equal(seg,2),tav,lb);\n' + 'lc = if((1-t3)*cop*equal(seg,3),tav,lc);\n' + 'ld = if((1-t3)*cop*equal(seg,4),tav,ld);\n' + 'le = if((1-t3)*cop*equal(seg,5),tav,le);\n' + 'lf = if((1-t3)*cop*equal(seg,6),tav,lf);\n' + 'lg = if((1-t3)*cop*equal(seg,7),tav,lg);\n' + 'li = if((1-t3)*cop*equal(seg,8),tav,li);\n' + 'lj = if((1-t3)*cop*equal(seg,9),tav,lj);\n' + 'lk = if((1-t3)*cop*equal(seg,10),tav,lk);\n' + 'aa = if((1-t3)*cop*equal(seg,1),mod,aa);\n' + 'ab = if((1-t3)*cop*equal(seg,2),mod,ab);\n' + 'ac = if((1-t3)*cop*equal(seg,3),mod,ac);\n' + 'ad = if((1-t3)*cop*equal(seg,4),mod,ad);\n' + 'ae = if((1-t3)*cop*equal(seg,5),mod,ae);\n' + 'af = if((1-t3)*cop*equal(seg,6),mod,af);\n' + 'ag = if((1-t3)*cop*equal(seg,7),mod,ag);\n' + 'ai = if((1-t3)*cop*equal(seg,8),mod,ai);\n' + 'aj = if((1-t3)*cop*equal(seg,9),mod,aj);\n' + 'ak = if((1-t3)*cop*equal(seg,10),mod,ak)*0;\n' + 'lev = lev*above(sample,0);\n' + ' ud = ud*above(sample,0);\n' + ' rep = rep*above(sample,0);\n' + ' lev = if(ud,lev-1,lev+1);\n' + ' rep = (rep + equal(lev,0));\n' + ' ud = if(equal(lev,0),0,if(equal(lev,10),1,ud));\n' + 'mx = above(lev,0)*la*sin(aa) + above(lev,1)*lb*sin(ab) + above(lev,2)*lc*sin(ac) + above(lev,3)*ld*sin(ad);\n' + 'my = above(lev,0)*la*cos(aa) + above(lev,1)*lb*cos(ab) + above(lev,2)*lc*cos(ac) + above(lev,3)*ld*cos(ad);\n' + 'mx = mx + above(lev,4)*le*sin(ae) + above(lev,5)*lf*sin(af) + above(lev,6)*lg*sin(ag);\n' + 'my = my + above(lev,4)*le*cos(ae) + above(lev,5)*lf*cos(af) + above(lev,6)*lg*cos(ag);\n' + 'mx = mx + above(lev,7)*li*sin(ai) + above(lev,8)*lj*sin(aj);\n' + 'my = my + above(lev,7)*li*cos(ai) + above(lev,8)*lj*cos(aj) + above(lev,9)*lk*cos(ak);\n' + 'mx = (1-2*equal(ud,1))*mx*(1-equal(lev,10));\n' + 'my = min(my,.25);\n' + 'poi = q3;\n' + 'modx = if(equal(lev,poi)*ud,mx,modx);\n' + 'mody = if(equal(lev,poi)*ud,my,mody);\n' + 'mang = (above(rep,7)*below(rep,14) - above(rep,15)*below(rep,22))*above(lev,poi);\n' + 'modx = 0;\n' + 'mx = mx - modx;\n' + 'my = my - mody;\n' + 'ox = mx*cos(mang) - my*sin(mang);\n' + 'oy = mx*sin(mang) + my*cos(mang);\n' + 'mx = ox + modx;\n' + 'my = oy + mody;\n' + 'mang = above(rep,1)*rep*1.0472;\n' + 'ox = mx*cos(mang) - my*sin(mang);\n' + 'oy = mx*sin(mang) + my*cos(mang);\n' + 'mx = ox;\n' + 'my = oy;\n' + 'sz = .5;\n' + 'x = mx*.75*sz + t1;\n' + 'y = my*sz + t2;\n' + 'a = t3;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.sw = 0;
m.sz = 0;
m.cv = 0;
m.sp = 0;

			m.rkeys = ['sw'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sw = (1-m.sw);
m.sp = ((m.sample*6.2832)-m.time);
m.sz = ((m.sp-m.q1)-(0.7854*0.5));
m.sz = (((0.5+(0.5*Math.sin((m.sz*4))))+m.value1)+m.value2);
m.cv = (m.sz*6.2832);
m.sz = ((pow(m.sz, 0.5)*0.05)*m.sw);
m.x = (0.5+((m.sz*Math.sin(m.sp))*0.75));
m.y = (0.5+(m.sz*Math.cos(m.sp)));
m.r = (0.5+(0.5*Math.sin((0.5*(m.time-m.cv)))));
m.g = (0.5+(0.5*Math.sin((0.5*((m.time-m.cv)+2.094)))));
m.b = (0.5+(0.5*Math.sin((0.5*((m.time-m.cv)+4.188)))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sw = 1-sw;\n' + 'sp = sample*6.2832 - time;\n' + 'sz = sp - q1 - .7854*.5;\n' + 'sz = .5 + .5*sin(sz*4) + value1 + value2;\n' + 'cv = sz*6.2832;\n' + 'sz = pow(sz,.5)*.05*sw;\n' + 'x = .5 + sz*sin(sp)*.75;\n' + 'y = .5 + sz*cos(sp);\n' + 'r = .5 + .5*sin(.5*(time - cv));\n' + 'g = .5 + .5*sin(.5*(time - cv + 2.094));\n' + 'b = .5 + .5*sin(.5*(time - cv + 4.188));'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.0,
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
			a : 0.1,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.1,
			r : 0.0,
			border_g : 1.0,
			rad : 0.6623,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 50.0,
			border_r : 1.0,
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
			r2 : 0.4,
			a : 0.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.2,
			r : 0.0,
			border_g : 1.0,
			rad : 0.6623,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 50.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_zoom = div(1,m.rad);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_zoom = 1/rad;'),

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
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.986086,
			x : 1.0,
			y : 1.0,
			ang : 0.0,
			sides : 50.0,
			border_r : 1.0,
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
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.986086,
			x : 1.0,
			y : 0.0,
			ang : 0.0,
			sides : 50.0,
			border_r : 1.0,
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
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'tic = min(time-tin,.1);\n' + 'tin = time;\n' + 'vol = (bass_att + treb_att + mid_att)*.333333;\n' + 'treb_avg = tic*(treb_avg*(1/tic - 10) + 10*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - 10) + 10*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - 10) + 10*bass);\n' + 'vav = tic*(vav*(1/tic - 10) + 10*(bass+treb+mid)*.33333);\n' + 'tt = tt + tic*treb;\n' + 'mt = mt + tic*mid;\n' + 'bt = bt + tic*bass;\n' + 'vt = vt + tic*vav;\n' + 'sp = abs(vav - slide)*.1;\n' + 'slide = if(above(slide,vav),slide-tic*sp,slide+tic*sp) + (1-toc)*vav*.1;\n' + 'toc = 1;\n' + 'q1 = rand(2);\n' + 'q2 = time;\n' + 'q3 = 3 + rand(3) + rand(3);\n' + 'q4 = vt;\n' + 'sw = 1-sw;\n' + 'q7 = sw;'),
	'pixel_eqs_str' : ('a = .5;\n' + 'b = .5;\n' + 'dis = pow((x-a)*(x-a) + .5625*(y-b)*(y-b),.5);\n' + 'sw = below(dis,(.2+(treb*0.03)));\n' + 'mod = -.18 + .18*pow(1-dis*4,.8);\n' + 'dx = if(sw,mod*(x-.5),0);\n' + 'dy = if(sw,mod*(y-.5),0);\n' + 'mod = .005 - .01*sin(rad*6.2832*2);\n' + 'dx = if(sw,dx + sin(ang)*mod,0);\n' + 'dy = if(sw,dy + cos(ang)*mod,0);\n' + 'sx = if(sw,sx,1);\n' + 'sy = if(sw,sy,1);\n' + 'a = above(x,.5);\n' + 'b = above(y,.5);\n' + 'dis = pow((x-a)*(x-a) + .5625*(y-b)*(y-b),.5);\n' + 'lim = below(dis,.25);\n' + 'dx = if(lim,.5*(1-2*below(x,.5)),dx);\n' + 'dy = if(lim,.5*(1-2*below(y,.5)),dy);\n' + 'mod = -1;\n' + 'a = sin(q4*.02347)*4;\n' + 'b = cos(q4*.03348)*4;\n' + 'dx = if(lim + sw,dx,mod*(x-a));\n' + 'dy = if(lim + sw,dy,mod*(y-b));'),
};

return pmap;
});
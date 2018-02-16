define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.285751,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.5,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 1.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.5,
		wave_smoothing : 0.63,
		warpanimspeed : 0.01,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999922,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.02,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.0,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 11.200613,
		ob_g : 0.0,
		ib_a : 0.02,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.54,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.bd = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.swi = 0;
m.cm = 0;
m.it = 0;
m.vav = 0;
m.treb_avg = 0;
m.tic = 0;
m.bvb = 0;
m.ra = 0;
m.rb = 0;
m.bass_avg = 0;
m.cma = 0;
m.vm = 0;
m.iter = 0;
m.tin = 0;
m.mid_avg = 0;
m.itar = 0;
m.db = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.tic = Math.min((m.time-m.tin), 1);
m.tin = m.time;
m.ra = 10;
m.treb_avg = (m.tic*((m.treb_avg*(div(1,m.tic)-m.ra))+(m.ra*m.treb)));
m.mid_avg = (m.tic*((m.mid_avg*(div(1,m.tic)-m.ra))+(m.ra*m.mid)));
m.bass_avg = (m.tic*((m.bass_avg*(div(1,m.tic)-m.ra))+(m.ra*m.bass)));
m.rb = 1;
m.vav = (m.tic*((m.vav*(div(1,m.tic)-m.rb))+((m.rb*((m.bass+m.treb)+m.mid))*0.33333)));
m.q1 = m.treb_avg;
m.q2 = m.mid_avg;
m.q3 = m.bass_avg;
m.db = (m.bass-m.bass_avg);
m.it = ((m.it+m.tic)*below(m.it, 1));
m.rb = (0.5*div(1,m.tic));
m.bvb = (m.tic*((m.bass*m.rb)+((div(1,m.tic)-m.rb)*m.bvb)));
m.bd = (m.bass-m.bvb);
m.vm = ((m.vm-m.tic)+m.swi);
m.swi = above((m.bd-m.vm), 0);
m.q4 = (1-m.swi);
m.cm = ifcond((above(m.iter, 30)+equal(m.time, 0)), (rand(3)+1), m.cm);
m.iter = ((m.iter+m.tic)*(1-above(m.iter, 30)));
m.q5 = ifcond(equal(m.cm, 0), 3, m.cm);
m.cma = ifcond((above(m.itar, 5)+equal(m.time, 0)), Math.floor((m.vav*5)), m.cma);
m.itar = ((m.itar+m.tic)*(1-above(m.itar, 5)));
m.q6 = Math.floor((m.vav*5));
m.monitor = m.q6;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.891519,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.tvb = 0;
m.t4 = 0;
m.q2 = 0;
m.tvc = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.mod = 0;
m.q4 = 0;
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.sw = 0;
m.q6 = 0;
m.swi = 0;
m.sz = 0;
m.gr = 0;
m.it = 0;
m.fr = 0;
m.an = 0;
m.er = 0;
m.dr = 0;
m.tic = 0;
m.cr = 0;
m.ra = 0;
m.br = 0;
m.mad = 0;
m.mlev = 0;
m.ar = 0;
m.gang = 0;
m.fang = 0;
m.len = 0;
m.eang = 0;
m.ita = 0;
m.dang = 0;
m.cang = 0;
m.bang = 0;
m.tin = 0;
m.ha = 0;
m.aang = 0;
m.tm = 0;
m.hb = 0;
m.ang = 0;
m.hc = 0;
m.hd = 0;
m.he = 0;
m.lev = 0;
m.t1 = 0;
m.hf = 0;
m.t2 = 0;
m.hg = 0;
m.tva = 0;
m.t3 = 0;
m.t1 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t2 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t3 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t4 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t5 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t6 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t7 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t8 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
			m.rkeys = ['sw','gr','it','fr','er','dr','cr','br','ar','gang','fang','eang','ita','dang','cang','bang','ha','aang','hb','hc','hd','he','lev','hf','hg'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tm = (m.time*0.1);
m.t1 = ((m.t1*Math.sin((m.tm*m.t4)))+((1-m.t1)*Math.sin((m.tm*m.t7))));
m.t2 = ((m.t2*Math.sin((m.tm*m.t5)))+((1-m.t2)*Math.sin((m.tm*m.t8))));
m.t3 = ((m.t3*Math.sin((m.tm*m.t6)))+((1-m.t3)*Math.sin((m.tm*1))));
m.tic = Math.min((m.time-m.tin), 1);
m.tin = m.time;
m.tva = ((m.tic*m.q1)*0.5);
m.tvb = ((m.tic*m.q2)*0.5);
m.tvc = ((m.tic*m.q3)*0.5);
m.q1 = m.tva;
m.q2 = m.tvb;
m.q3 = m.tvc;
m.sz = 0.1;
m.ra = 0.1;
m.len = ifcond(above(m.q6, 3), ifcond(below(m.len, m.sz), (m.len+((m.ra*m.sz)*m.tic)), Math.min(m.sz, m.len)), ifcond(above(m.len, 0), (m.len-((m.ra*m.sz)*m.tic)), Math.max(0, m.len)));
m.t4 = m.len;
		return m;
	},
		'point_eqs' : function(m) {
m.ang = 0;
m.len = m.t4;
m.mad = 0.6;
m.it = ifcond(above(m.sample, 0), (m.it+equal(m.lev, 7)), 1);
m.ita = ((m.ita+1)*above(m.sample, 0));
m.mod = ifcond(equal(mod(m.it,2), 0), 1, ifcond(equal(mod((m.it+1),4), 0), 2, ifcond(equal(mod((m.it+3),8), 0), 3, ifcond(equal(mod((m.it+7),16), 0), 4, ifcond(equal(mod((m.it+15),32), 0), 5, ifcond(equal(mod((m.it+31),64), 0), 6, ifcond(equal(mod((m.it+63),128), 0), 7, 7)))))));
m.sw = (m.sw-1);
m.sw = (ifcond(equal(m.lev, 7), m.mod, m.sw)*above(m.sample, 0));
m.lev = ifcond(above(m.sample, 0), ifcond(above(m.sw, 0), (m.lev-1), (m.lev+1)), 7);
m.a = ((m.lev*0.1)*1.46);
m.a = ((equal(m.lev, 7)+equal(m.lev, 4))+equal(m.lev, 1));
m.ar = ifcond(above(m.sample, 0), m.ar, 1);
m.ar = ifcond(equal(m.lev, 0), (m.ar*-1), m.ar);
m.br = ifcond(above(m.sample, 0), m.br, 1);
m.br = ifcond(equal(m.lev, 1), (m.br*-1), m.br);
m.cr = ifcond(above(m.sample, 0), m.cr, 1);
m.cr = ifcond(equal(m.lev, 2), (m.cr*-1), m.cr);
m.dr = ifcond(above(m.sample, 0), m.dr, 1);
m.dr = ifcond(equal(m.lev, 3), (m.dr*-1), m.dr);
m.er = ifcond(above(m.sample, 0), m.er, 1);
m.er = ifcond(equal(m.lev, 4), (m.er*-1), m.er);
m.fr = ifcond(above(m.sample, 0), m.fr, 1);
m.fr = ifcond(equal(m.lev, 5), (m.fr*-1), m.fr);
m.gr = ifcond(above(m.sample, 0), m.gr, 1);
m.gr = ifcond(equal(m.lev, 6), (m.gr*-1), m.gr);
m.mlev = (m.lev*above(m.sample, 0));
m.swi = (equal(m.q4, 0)*equal(m.sample, 0));
m.ha = ifcond(m.swi, (1-(2*rand(2))), m.ha);
m.hb = ifcond(m.swi, (1-(2*rand(2))), m.hb);
m.hc = ifcond(m.swi, (1-(2*rand(2))), m.hc);
m.hd = ifcond(m.swi, (1-(2*rand(2))), m.hd);
m.he = ifcond(m.swi, (1-(2*rand(2))), m.he);
m.hf = ifcond(m.swi, (1-(2*rand(2))), m.hf);
m.hg = ifcond(m.swi, (1-(2*rand(2))), m.hg);
m.aang = ifcond(above(m.sample, 0), m.aang, (m.aang+((m.q1*m.ha)*1)));
m.bang = ifcond(above(m.sample, 0), m.bang, (m.bang+((m.q1*m.hb)*1.33)));
m.cang = ifcond(above(m.sample, 0), m.cang, (m.cang+((m.q2*m.hc)*1.67)));
m.dang = ifcond(above(m.sample, 0), m.dang, (m.dang+((m.q2*m.hd)*2)));
m.eang = ifcond(above(m.sample, 0), m.eang, (m.eang+((m.q3*m.he)*2.33)));
m.fang = ifcond(above(m.sample, 0), m.fang, (m.fang+((m.q3*m.hf)*2.67)));
m.gang = ifcond(above(m.sample, 0), m.gang, (m.gang+((m.q3*m.hg)*3)));
m.len = (m.len*m.mad);
m.x = (0.5+(((above(m.lev, 0)*Math.sin(m.aang))*m.len)*m.ar));
m.y = (0.5+((above(m.lev, 0)*Math.cos(m.aang))*m.len));
m.an = ((m.bang*(m.ar+m.br))*m.br);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 1)*Math.sin(m.an))*m.len)*m.br));
m.y = (m.y+((above(m.lev, 1)*Math.cos(m.an))*m.len));
m.an = ((m.cang*((m.ar+m.br)+m.cr))*m.cr);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 2)*Math.sin(m.an))*m.len)*m.cr));
m.y = (m.y+((above(m.lev, 2)*Math.cos(m.an))*m.len));
m.an = ((m.dang*(((m.ar+m.br)+m.cr)+m.dr))*m.dr);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 3)*Math.sin(m.an))*m.len)*m.dr));
m.y = (m.y+((above(m.lev, 3)*Math.cos(m.an))*m.len));
m.an = ((m.eang*((((m.ar+m.br)+m.cr)+m.dr)+m.er))*m.er);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 4)*Math.sin(m.an))*m.len)*m.er));
m.y = (m.y+((above(m.lev, 4)*Math.cos(m.an))*m.len));
m.an = ((m.fang*(((((m.ar+m.br)+m.cr)+m.dr)+m.er)+m.fr))*m.fr);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 5)*Math.sin(m.an))*m.len)*m.fr));
m.y = (m.y+((above(m.lev, 5)*Math.cos(m.an))*m.len));
m.an = ((m.gang*((((((m.ar+m.br)+m.cr)+m.dr)+m.er)+m.fr)+m.gr))*m.gr);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 6)*Math.sin(m.an))*m.len)*m.gr));
m.y = (m.y+((above(m.lev, 6)*Math.cos(m.an))*m.len));
m.x = (((m.x-0.5)*0.75)+0.5);
m.g = (m.t1+(m.lev*0.1));
m.r = (m.t2-(m.lev*0.1));
m.b = m.t3;
m.r = ifcond(equal(m.q5, 1), 1, m.r);
m.g = ifcond(equal(m.q5, 2), 1, m.g);
m.b = ifcond(equal(m.q5, 3), 1, m.b);
m.r = (m.r-Math.floor(m.r));
m.g = (m.g-Math.floor(m.g));
m.b = (m.b-Math.floor(m.b));
		return m;
	},
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
		'frame_eqs_str' : ('tm = time*.1;\n' + 't1 = t1*sin(tm*t4) + (1-t1)*sin(tm*t7);\n' + 't2 = t2*sin(tm*t5) + (1-t2)*sin(tm*t8);\n' + 't3 = t3*sin(tm*t6) + (1-t3)*sin(tm*1);\n' + 'tic = min(time - tin,1);\n' + 'tin = time;\n' + 'tva = (tic*q1*.5);\n' + 'tvb = (tic*q2*.5);\n' + 'tvc = (tic*q3*.5);\n' + 'q1 = tva;\n' + 'q2 = tvb;\n' + 'q3 = tvc;\n' + 'sz = .1;\n' + 'ra = .1;\n' + 'len = if(above(q6,3),if(below(len,sz),len + ra*sz*tic,min(sz,len)),if(above(len,0),len - ra*sz*tic,max(0,len)));\n' + 't4 = len;'),
		'point_eqs_str' : ('ang = 0;\n' + 'len = t4;\n' + 'mad = .6;\n' + 'it = if(above(sample,0),(it+equal(lev,7)),1);\n' + 'ita = (ita + 1)*above(sample,0);\n' + 'mod = if(equal(it%2,0),1,  if(equal((it+1)%4,0),2,  if(equal((it+3)%8,0),3,  if(equal((it+7)%16,0),4,  if(equal((it+15)%32,0),5,  if(equal((it+31)%64,0),6,  if(equal((it+63)%128,0),7,7)  ))))));\n' + 'sw = sw - 1;\n' + 'sw = if(equal(lev,7),mod,sw)*above(sample,0);\n' + 'lev = if(above(sample,0),if(above(sw,0),lev-1,lev+1),7);\n' + 'a = lev*.1*1.46;\n' + 'a = equal(lev,7) + equal(lev,4) + equal(lev,1);\n' + 'ar = if(above(sample,0),ar,1);\n' + 'ar = if(equal(lev,0),ar*-1,ar);\n' + 'br = if(above(sample,0),br,1);\n' + 'br = if(equal(lev,1),br*-1,br);\n' + 'cr = if(above(sample,0),cr,1);\n' + 'cr = if(equal(lev,2),cr*-1,cr);\n' + 'dr = if(above(sample,0),dr,1);\n' + 'dr = if(equal(lev,3),dr*-1,dr);\n' + 'er = if(above(sample,0),er,1);\n' + 'er = if(equal(lev,4),er*-1,er);\n' + 'fr = if(above(sample,0),fr,1);\n' + 'fr = if(equal(lev,5),fr*-1,fr);\n' + 'gr = if(above(sample,0),gr,1);\n' + 'gr = if(equal(lev,6),gr*-1,gr);\n' + 'mlev = lev*above(sample,0);\n' + 'swi = equal(q4,0)*equal(sample,0);\n' + 'ha = if(swi,1-2*rand(2),ha);\n' + 'hb = if(swi,1-2*rand(2),hb);\n' + 'hc = if(swi,1-2*rand(2),hc);\n' + 'hd = if(swi,1-2*rand(2),hd);\n' + 'he = if(swi,1-2*rand(2),he);\n' + 'hf = if(swi,1-2*rand(2),hf);\n' + 'hg = if(swi,1-2*rand(2),hg);\n' + 'aang = if(above(sample,0),aang,aang + q1*ha*1);\n' + 'bang = if(above(sample,0),bang,bang + q1*hb*1.33);\n' + 'cang = if(above(sample,0),cang,cang + q2*hc*1.67);\n' + 'dang = if(above(sample,0),dang,dang + q2*hd*2);\n' + 'eang = if(above(sample,0),eang,eang + q3*he*2.33);\n' + 'fang = if(above(sample,0),fang,fang + q3*hf*2.67);\n' + 'gang = if(above(sample,0),gang,gang + q3*hg*3);\n' + 'len = len*mad;\n' + 'x = .5 + above(lev,0)*sin(aang)*len*ar;\n' + 'y = 0.5 + above(lev,0)*cos(aang)*len;\n' + 'an = bang*(ar + br)*br;\n' + 'len = len*mad;\n' + 'x = x + above(lev,1)*sin(an)*len*br;\n' + 'y = y + above(lev,1)*cos(an)*len;\n' + 'an = cang*(ar + br + cr)*cr;\n' + 'len = len*mad;\n' + 'x = x + above(lev,2)*sin(an)*len*cr;\n' + 'y = y + above(lev,2)*cos(an)*len;\n' + 'an = dang*(ar + br + cr + dr)*dr;\n' + 'len = len*mad;\n' + 'x = x + above(lev,3)*sin(an)*len*dr;\n' + 'y = y + above(lev,3)*cos(an)*len;\n' + 'an = eang*(ar + br + cr + dr + er)*er;\n' + 'len = len*mad;\n' + 'x = x + above(lev,4)*sin(an)*len*er;\n' + 'y = y + above(lev,4)*cos(an)*len;\n' + 'an = fang*(ar + br + cr + dr + er + fr)*fr;\n' + 'len = len*mad;\n' + 'x = x + above(lev,5)*sin(an)*len*fr;\n' + 'y = y + above(lev,5)*cos(an)*len;\n' + 'an = gang*(ar + br + cr + dr + er + fr + gr)*gr;\n' + 'len = len*mad;\n' + 'x = x + above(lev,6)*sin(an)*len*gr;\n' + 'y = y + above(lev,6)*cos(an)*len;\n' + 'x = (x-.5)*.75 + .5;\n' + 'g = t1 + lev*.1;\n' + 'r = t2 - lev*.1;\n' + 'b = t3;\n' + 'r = if(equal(q5,1),1,r);\n' + 'g = if(equal(q5,2),1,g);\n' + 'b = if(equal(q5,3),1,b);\n' + 'r = r - int(r);\n' + 'g = g - int(g);\n' + 'b = b - int(b);'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.891519,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.tvb = 0;
m.t4 = 0;
m.q2 = 0;
m.tvc = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.mod = 0;
m.q4 = 0;
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.sw = 0;
m.q6 = 0;
m.swi = 0;
m.sz = 0;
m.gr = 0;
m.it = 0;
m.fr = 0;
m.an = 0;
m.er = 0;
m.dr = 0;
m.tic = 0;
m.cr = 0;
m.ra = 0;
m.br = 0;
m.mad = 0;
m.mlev = 0;
m.ar = 0;
m.gang = 0;
m.fang = 0;
m.len = 0;
m.eang = 0;
m.ita = 0;
m.dang = 0;
m.cang = 0;
m.bang = 0;
m.tin = 0;
m.ha = 0;
m.aang = 0;
m.tm = 0;
m.hb = 0;
m.ang = 0;
m.hc = 0;
m.hd = 0;
m.he = 0;
m.lev = 0;
m.t1 = 0;
m.hf = 0;
m.t2 = 0;
m.hg = 0;
m.tva = 0;
m.t3 = 0;
m.t1 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t2 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t3 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t4 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t5 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t6 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t7 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t8 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
			m.rkeys = ['sw','gr','it','fr','er','dr','cr','br','ar','gang','fang','eang','ita','dang','cang','bang','ha','aang','hb','hc','hd','he','lev','hf','hg'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tm = (m.time*0.1);
m.t1 = ((m.t1*Math.sin((m.tm*m.t4)))+((1-m.t1)*Math.sin((m.tm*m.t7))));
m.t2 = ((m.t2*Math.sin((m.tm*m.t5)))+((1-m.t2)*Math.sin((m.tm*m.t8))));
m.t3 = ((m.t3*Math.sin((m.tm*m.t6)))+((1-m.t3)*Math.sin((m.tm*1))));
m.tic = Math.min((m.time-m.tin), 1);
m.tin = m.time;
m.tva = ((m.tic*m.q1)*0.5);
m.tvb = ((m.tic*m.q2)*0.5);
m.tvc = ((m.tic*m.q3)*0.5);
m.q1 = m.tva;
m.q2 = m.tvb;
m.q3 = m.tvc;
m.sz = 0.3;
m.ra = 0.1;
m.len = ifcond(above(m.q6, 2), ifcond(below(m.len, m.sz), (m.len+((m.ra*m.sz)*m.tic)), Math.min(m.sz, m.len)), ifcond(above(m.len, 0), (m.len-((m.ra*m.sz)*m.tic)), Math.max(0, m.len)));
m.t4 = m.len;
		return m;
	},
		'point_eqs' : function(m) {
m.ang = 0;
m.len = m.t4;
m.mad = 0.6;
m.it = ifcond(above(m.sample, 0), (m.it+equal(m.lev, 7)), 1);
m.ita = ((m.ita+1)*above(m.sample, 0));
m.mod = ifcond(equal(mod(m.it,2), 0), 1, ifcond(equal(mod((m.it+1),4), 0), 2, ifcond(equal(mod((m.it+3),8), 0), 3, ifcond(equal(mod((m.it+7),16), 0), 4, ifcond(equal(mod((m.it+15),32), 0), 5, ifcond(equal(mod((m.it+31),64), 0), 6, ifcond(equal(mod((m.it+63),128), 0), 7, 7)))))));
m.sw = (m.sw-1);
m.sw = (ifcond(equal(m.lev, 7), m.mod, m.sw)*above(m.sample, 0));
m.lev = ifcond(above(m.sample, 0), ifcond(above(m.sw, 0), (m.lev-1), (m.lev+1)), 7);
m.a = ((m.lev*0.1)*1.46);
m.a = ((equal(m.lev, 7)+equal(m.lev, 4))+equal(m.lev, 1));
m.ar = ifcond(above(m.sample, 0), m.ar, 1);
m.ar = ifcond(equal(m.lev, 0), (m.ar*-1), m.ar);
m.br = ifcond(above(m.sample, 0), m.br, 1);
m.br = ifcond(equal(m.lev, 1), (m.br*-1), m.br);
m.cr = ifcond(above(m.sample, 0), m.cr, 1);
m.cr = ifcond(equal(m.lev, 2), (m.cr*-1), m.cr);
m.dr = ifcond(above(m.sample, 0), m.dr, 1);
m.dr = ifcond(equal(m.lev, 3), (m.dr*-1), m.dr);
m.er = ifcond(above(m.sample, 0), m.er, 1);
m.er = ifcond(equal(m.lev, 4), (m.er*-1), m.er);
m.fr = ifcond(above(m.sample, 0), m.fr, 1);
m.fr = ifcond(equal(m.lev, 5), (m.fr*-1), m.fr);
m.gr = ifcond(above(m.sample, 0), m.gr, 1);
m.gr = ifcond(equal(m.lev, 6), (m.gr*-1), m.gr);
m.mlev = (m.lev*above(m.sample, 0));
m.swi = (equal(m.q4, 0)*equal(m.sample, 0));
m.ha = ifcond(m.swi, (1-(2*rand(2))), m.ha);
m.hb = ifcond(m.swi, (1-(2*rand(2))), m.hb);
m.hc = ifcond(m.swi, (1-(2*rand(2))), m.hc);
m.hd = ifcond(m.swi, (1-(2*rand(2))), m.hd);
m.he = ifcond(m.swi, (1-(2*rand(2))), m.he);
m.hf = ifcond(m.swi, (1-(2*rand(2))), m.hf);
m.hg = ifcond(m.swi, (1-(2*rand(2))), m.hg);
m.aang = ifcond(above(m.sample, 0), m.aang, (m.aang+((m.q1*m.ha)*1)));
m.bang = ifcond(above(m.sample, 0), m.bang, (m.bang+((m.q1*m.hb)*1.33)));
m.cang = ifcond(above(m.sample, 0), m.cang, (m.cang+((m.q2*m.hc)*1.67)));
m.dang = ifcond(above(m.sample, 0), m.dang, (m.dang+((m.q2*m.hd)*2)));
m.eang = ifcond(above(m.sample, 0), m.eang, (m.eang+((m.q3*m.he)*2.33)));
m.fang = ifcond(above(m.sample, 0), m.fang, (m.fang+((m.q3*m.hf)*2.67)));
m.gang = ifcond(above(m.sample, 0), m.gang, (m.gang+((m.q3*m.hg)*3)));
m.len = (m.len*m.mad);
m.x = (0.5+(((above(m.lev, 0)*Math.sin(m.aang))*m.len)*m.ar));
m.y = (0.5+((above(m.lev, 0)*Math.cos(m.aang))*m.len));
m.an = ((m.bang*(m.ar+m.br))*m.br);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 1)*Math.sin(m.an))*m.len)*m.br));
m.y = (m.y+((above(m.lev, 1)*Math.cos(m.an))*m.len));
m.an = ((m.cang*((m.ar+m.br)+m.cr))*m.cr);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 2)*Math.sin(m.an))*m.len)*m.cr));
m.y = (m.y+((above(m.lev, 2)*Math.cos(m.an))*m.len));
m.an = ((m.dang*(((m.ar+m.br)+m.cr)+m.dr))*m.dr);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 3)*Math.sin(m.an))*m.len)*m.dr));
m.y = (m.y+((above(m.lev, 3)*Math.cos(m.an))*m.len));
m.an = ((m.eang*((((m.ar+m.br)+m.cr)+m.dr)+m.er))*m.er);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 4)*Math.sin(m.an))*m.len)*m.er));
m.y = (m.y+((above(m.lev, 4)*Math.cos(m.an))*m.len));
m.an = ((m.fang*(((((m.ar+m.br)+m.cr)+m.dr)+m.er)+m.fr))*m.fr);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 5)*Math.sin(m.an))*m.len)*m.fr));
m.y = (m.y+((above(m.lev, 5)*Math.cos(m.an))*m.len));
m.an = ((m.gang*((((((m.ar+m.br)+m.cr)+m.dr)+m.er)+m.fr)+m.gr))*m.gr);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 6)*Math.sin(m.an))*m.len)*m.gr));
m.y = (m.y+((above(m.lev, 6)*Math.cos(m.an))*m.len));
m.x = (((m.x-0.5)*0.75)+0.5);
m.g = (m.t1+(m.lev*0.1));
m.r = (m.t2-(m.lev*0.1));
m.b = m.t3;
m.r = ifcond(equal(m.q5, 1), 1, m.r);
m.g = ifcond(equal(m.q5, 2), 1, m.g);
m.b = ifcond(equal(m.q5, 3), 1, m.b);
m.r = (m.r-Math.floor(m.r));
m.g = (m.g-Math.floor(m.g));
m.b = (m.b-Math.floor(m.b));
		return m;
	},
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
		'frame_eqs_str' : ('tm = time*.1;\n' + 't1 = t1*sin(tm*t4) + (1-t1)*sin(tm*t7);\n' + 't2 = t2*sin(tm*t5) + (1-t2)*sin(tm*t8);\n' + 't3 = t3*sin(tm*t6) + (1-t3)*sin(tm*1);\n' + 'tic = min(time - tin,1);\n' + 'tin = time;\n' + 'tva = (tic*q1*.5);\n' + 'tvb = (tic*q2*.5);\n' + 'tvc = (tic*q3*.5);\n' + 'q1 = tva;\n' + 'q2 = tvb;\n' + 'q3 = tvc;\n' + 'sz = .3;\n' + 'ra = .1;\n' + 'len = if(above(q6,2),if(below(len,sz),len + ra*sz*tic,min(sz,len)),if(above(len,0),len - ra*sz*tic,max(0,len)));\n' + 't4 = len;'),
		'point_eqs_str' : ('ang = 0;\n' + 'len = t4;\n' + 'mad = .6;\n' + 'it = if(above(sample,0),(it+equal(lev,7)),1);\n' + 'ita = (ita + 1)*above(sample,0);\n' + 'mod = if(equal(it%2,0),1,  if(equal((it+1)%4,0),2,  if(equal((it+3)%8,0),3,  if(equal((it+7)%16,0),4,  if(equal((it+15)%32,0),5,  if(equal((it+31)%64,0),6,  if(equal((it+63)%128,0),7,7)  ))))));\n' + 'sw = sw - 1;\n' + 'sw = if(equal(lev,7),mod,sw)*above(sample,0);\n' + 'lev = if(above(sample,0),if(above(sw,0),lev-1,lev+1),7);\n' + 'a = lev*.1*1.46;\n' + 'a = equal(lev,7) + equal(lev,4) + equal(lev,1);\n' + 'ar = if(above(sample,0),ar,1);\n' + 'ar = if(equal(lev,0),ar*-1,ar);\n' + 'br = if(above(sample,0),br,1);\n' + 'br = if(equal(lev,1),br*-1,br);\n' + 'cr = if(above(sample,0),cr,1);\n' + 'cr = if(equal(lev,2),cr*-1,cr);\n' + 'dr = if(above(sample,0),dr,1);\n' + 'dr = if(equal(lev,3),dr*-1,dr);\n' + 'er = if(above(sample,0),er,1);\n' + 'er = if(equal(lev,4),er*-1,er);\n' + 'fr = if(above(sample,0),fr,1);\n' + 'fr = if(equal(lev,5),fr*-1,fr);\n' + 'gr = if(above(sample,0),gr,1);\n' + 'gr = if(equal(lev,6),gr*-1,gr);\n' + 'mlev = lev*above(sample,0);\n' + 'swi = equal(q4,0)*equal(sample,0);\n' + 'ha = if(swi,1-2*rand(2),ha);\n' + 'hb = if(swi,1-2*rand(2),hb);\n' + 'hc = if(swi,1-2*rand(2),hc);\n' + 'hd = if(swi,1-2*rand(2),hd);\n' + 'he = if(swi,1-2*rand(2),he);\n' + 'hf = if(swi,1-2*rand(2),hf);\n' + 'hg = if(swi,1-2*rand(2),hg);\n' + 'aang = if(above(sample,0),aang,aang + q1*ha*1);\n' + 'bang = if(above(sample,0),bang,bang + q1*hb*1.33);\n' + 'cang = if(above(sample,0),cang,cang + q2*hc*1.67);\n' + 'dang = if(above(sample,0),dang,dang + q2*hd*2);\n' + 'eang = if(above(sample,0),eang,eang + q3*he*2.33);\n' + 'fang = if(above(sample,0),fang,fang + q3*hf*2.67);\n' + 'gang = if(above(sample,0),gang,gang + q3*hg*3);\n' + 'len = len*mad;\n' + 'x = .5 + above(lev,0)*sin(aang)*len*ar;\n' + 'y = 0.5 + above(lev,0)*cos(aang)*len;\n' + 'an = bang*(ar + br)*br;\n' + 'len = len*mad;\n' + 'x = x + above(lev,1)*sin(an)*len*br;\n' + 'y = y + above(lev,1)*cos(an)*len;\n' + 'an = cang*(ar + br + cr)*cr;\n' + 'len = len*mad;\n' + 'x = x + above(lev,2)*sin(an)*len*cr;\n' + 'y = y + above(lev,2)*cos(an)*len;\n' + 'an = dang*(ar + br + cr + dr)*dr;\n' + 'len = len*mad;\n' + 'x = x + above(lev,3)*sin(an)*len*dr;\n' + 'y = y + above(lev,3)*cos(an)*len;\n' + 'an = eang*(ar + br + cr + dr + er)*er;\n' + 'len = len*mad;\n' + 'x = x + above(lev,4)*sin(an)*len*er;\n' + 'y = y + above(lev,4)*cos(an)*len;\n' + 'an = fang*(ar + br + cr + dr + er + fr)*fr;\n' + 'len = len*mad;\n' + 'x = x + above(lev,5)*sin(an)*len*fr;\n' + 'y = y + above(lev,5)*cos(an)*len;\n' + 'an = gang*(ar + br + cr + dr + er + fr + gr)*gr;\n' + 'len = len*mad;\n' + 'x = x + above(lev,6)*sin(an)*len*gr;\n' + 'y = y + above(lev,6)*cos(an)*len;\n' + 'x = (x-.5)*.75 + .5;\n' + 'g = t1 + lev*.1;\n' + 'r = t2 - lev*.1;\n' + 'b = t3;\n' + 'r = if(equal(q5,1),1,r);\n' + 'g = if(equal(q5,2),1,g);\n' + 'b = if(equal(q5,3),1,b);\n' + 'r = r - int(r);\n' + 'g = g - int(g);\n' + 'b = b - int(b);'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.891519,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.tvb = 0;
m.t4 = 0;
m.q2 = 0;
m.tvc = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.mod = 0;
m.q4 = 0;
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.sw = 0;
m.q6 = 0;
m.swi = 0;
m.sz = 0;
m.gr = 0;
m.it = 0;
m.fr = 0;
m.an = 0;
m.er = 0;
m.dr = 0;
m.tic = 0;
m.cr = 0;
m.ra = 0;
m.br = 0;
m.mad = 0;
m.mlev = 0;
m.ar = 0;
m.gang = 0;
m.fang = 0;
m.len = 0;
m.eang = 0;
m.ita = 0;
m.dang = 0;
m.cang = 0;
m.bang = 0;
m.tin = 0;
m.ha = 0;
m.aang = 0;
m.tm = 0;
m.hb = 0;
m.ang = 0;
m.hc = 0;
m.hd = 0;
m.he = 0;
m.lev = 0;
m.t1 = 0;
m.hf = 0;
m.t2 = 0;
m.hg = 0;
m.tva = 0;
m.t3 = 0;
m.t1 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t2 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t3 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t4 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t5 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t6 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t7 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t8 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
			m.rkeys = ['sw','gr','it','fr','er','dr','cr','br','ar','gang','fang','eang','ita','dang','cang','bang','ha','aang','hb','hc','hd','he','lev','hf','hg'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tm = (m.time*0.1);
m.t1 = ((m.t1*Math.sin((m.tm*m.t4)))+((1-m.t1)*Math.sin((m.tm*m.t7))));
m.t2 = ((m.t2*Math.sin((m.tm*m.t5)))+((1-m.t2)*Math.sin((m.tm*m.t8))));
m.t3 = ((m.t3*Math.sin((m.tm*m.t6)))+((1-m.t3)*Math.sin((m.tm*1))));
m.tic = Math.min((m.time-m.tin), 1);
m.tin = m.time;
m.tva = ((m.tic*m.q1)*0.5);
m.tvb = ((m.tic*m.q2)*0.5);
m.tvc = ((m.tic*m.q3)*0.5);
m.q1 = m.tva;
m.q2 = m.tvb;
m.q3 = m.tvc;
m.sz = 0.4;
m.ra = 0.1;
m.len = ifcond(above(m.q6, 1), ifcond(below(m.len, m.sz), (m.len+((m.ra*m.sz)*m.tic)), Math.min(m.sz, m.len)), ifcond(above(m.len, 0), (m.len-((m.ra*m.sz)*m.tic)), Math.max(0, m.len)));
m.t4 = m.len;
		return m;
	},
		'point_eqs' : function(m) {
m.ang = 0;
m.len = m.t4;
m.mad = 0.6;
m.it = ifcond(above(m.sample, 0), (m.it+equal(m.lev, 7)), 1);
m.ita = ((m.ita+1)*above(m.sample, 0));
m.mod = ifcond(equal(mod(m.it,2), 0), 1, ifcond(equal(mod((m.it+1),4), 0), 2, ifcond(equal(mod((m.it+3),8), 0), 3, ifcond(equal(mod((m.it+7),16), 0), 4, ifcond(equal(mod((m.it+15),32), 0), 5, ifcond(equal(mod((m.it+31),64), 0), 6, ifcond(equal(mod((m.it+63),128), 0), 7, 7)))))));
m.sw = (m.sw-1);
m.sw = (ifcond(equal(m.lev, 7), m.mod, m.sw)*above(m.sample, 0));
m.lev = ifcond(above(m.sample, 0), ifcond(above(m.sw, 0), (m.lev-1), (m.lev+1)), 7);
m.a = ((m.lev*0.1)*1.46);
m.a = ((equal(m.lev, 7)+equal(m.lev, 4))+equal(m.lev, 1));
m.ar = ifcond(above(m.sample, 0), m.ar, 1);
m.ar = ifcond(equal(m.lev, 0), (m.ar*-1), m.ar);
m.br = ifcond(above(m.sample, 0), m.br, 1);
m.br = ifcond(equal(m.lev, 1), (m.br*-1), m.br);
m.cr = ifcond(above(m.sample, 0), m.cr, 1);
m.cr = ifcond(equal(m.lev, 2), (m.cr*-1), m.cr);
m.dr = ifcond(above(m.sample, 0), m.dr, 1);
m.dr = ifcond(equal(m.lev, 3), (m.dr*-1), m.dr);
m.er = ifcond(above(m.sample, 0), m.er, 1);
m.er = ifcond(equal(m.lev, 4), (m.er*-1), m.er);
m.fr = ifcond(above(m.sample, 0), m.fr, 1);
m.fr = ifcond(equal(m.lev, 5), (m.fr*-1), m.fr);
m.gr = ifcond(above(m.sample, 0), m.gr, 1);
m.gr = ifcond(equal(m.lev, 6), (m.gr*-1), m.gr);
m.mlev = (m.lev*above(m.sample, 0));
m.swi = (equal(m.q4, 0)*equal(m.sample, 0));
m.ha = ifcond(m.swi, (1-(2*rand(2))), m.ha);
m.hb = ifcond(m.swi, (1-(2*rand(2))), m.hb);
m.hc = ifcond(m.swi, (1-(2*rand(2))), m.hc);
m.hd = ifcond(m.swi, (1-(2*rand(2))), m.hd);
m.he = ifcond(m.swi, (1-(2*rand(2))), m.he);
m.hf = ifcond(m.swi, (1-(2*rand(2))), m.hf);
m.hg = ifcond(m.swi, (1-(2*rand(2))), m.hg);
m.aang = ifcond(above(m.sample, 0), m.aang, (m.aang+((m.q1*m.ha)*1)));
m.bang = ifcond(above(m.sample, 0), m.bang, (m.bang+((m.q1*m.hb)*1.33)));
m.cang = ifcond(above(m.sample, 0), m.cang, (m.cang+((m.q2*m.hc)*1.67)));
m.dang = ifcond(above(m.sample, 0), m.dang, (m.dang+((m.q2*m.hd)*2)));
m.eang = ifcond(above(m.sample, 0), m.eang, (m.eang+((m.q3*m.he)*2.33)));
m.fang = ifcond(above(m.sample, 0), m.fang, (m.fang+((m.q3*m.hf)*2.67)));
m.gang = ifcond(above(m.sample, 0), m.gang, (m.gang+((m.q3*m.hg)*3)));
m.len = (m.len*m.mad);
m.x = (0.5+(((above(m.lev, 0)*Math.sin(m.aang))*m.len)*m.ar));
m.y = (0.5+((above(m.lev, 0)*Math.cos(m.aang))*m.len));
m.an = ((m.bang*(m.ar+m.br))*m.br);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 1)*Math.sin(m.an))*m.len)*m.br));
m.y = (m.y+((above(m.lev, 1)*Math.cos(m.an))*m.len));
m.an = ((m.cang*((m.ar+m.br)+m.cr))*m.cr);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 2)*Math.sin(m.an))*m.len)*m.cr));
m.y = (m.y+((above(m.lev, 2)*Math.cos(m.an))*m.len));
m.an = ((m.dang*(((m.ar+m.br)+m.cr)+m.dr))*m.dr);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 3)*Math.sin(m.an))*m.len)*m.dr));
m.y = (m.y+((above(m.lev, 3)*Math.cos(m.an))*m.len));
m.an = ((m.eang*((((m.ar+m.br)+m.cr)+m.dr)+m.er))*m.er);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 4)*Math.sin(m.an))*m.len)*m.er));
m.y = (m.y+((above(m.lev, 4)*Math.cos(m.an))*m.len));
m.an = ((m.fang*(((((m.ar+m.br)+m.cr)+m.dr)+m.er)+m.fr))*m.fr);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 5)*Math.sin(m.an))*m.len)*m.fr));
m.y = (m.y+((above(m.lev, 5)*Math.cos(m.an))*m.len));
m.an = ((m.gang*((((((m.ar+m.br)+m.cr)+m.dr)+m.er)+m.fr)+m.gr))*m.gr);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 6)*Math.sin(m.an))*m.len)*m.gr));
m.y = (m.y+((above(m.lev, 6)*Math.cos(m.an))*m.len));
m.x = (((m.x-0.5)*0.75)+0.5);
m.g = (m.t1+(m.lev*0.1));
m.r = (m.t2-(m.lev*0.1));
m.b = m.t3;
m.r = ifcond(equal(m.q5, 1), 1, m.r);
m.g = ifcond(equal(m.q5, 2), 1, m.g);
m.b = ifcond(equal(m.q5, 3), 1, m.b);
m.r = (m.r-Math.floor(m.r));
m.g = (m.g-Math.floor(m.g));
m.b = (m.b-Math.floor(m.b));
		return m;
	},
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
		'frame_eqs_str' : ('tm = time*.1;\n' + 't1 = t1*sin(tm*t4) + (1-t1)*sin(tm*t7);\n' + 't2 = t2*sin(tm*t5) + (1-t2)*sin(tm*t8);\n' + 't3 = t3*sin(tm*t6) + (1-t3)*sin(tm*1);\n' + 'tic = min(time - tin,1);\n' + 'tin = time;\n' + 'tva = (tic*q1*.5);\n' + 'tvb = (tic*q2*.5);\n' + 'tvc = (tic*q3*.5);\n' + 'q1 = tva;\n' + 'q2 = tvb;\n' + 'q3 = tvc;\n' + 'sz = .4;\n' + 'ra = .1;\n' + 'len = if(above(q6,1),if(below(len,sz),len + ra*sz*tic,min(sz,len)),if(above(len,0),len - ra*sz*tic,max(0,len)));\n' + 't4 = len;'),
		'point_eqs_str' : ('ang = 0;\n' + 'len = t4;\n' + 'mad = .6;\n' + 'it = if(above(sample,0),(it+equal(lev,7)),1);\n' + 'ita = (ita + 1)*above(sample,0);\n' + 'mod = if(equal(it%2,0),1,  if(equal((it+1)%4,0),2,  if(equal((it+3)%8,0),3,  if(equal((it+7)%16,0),4,  if(equal((it+15)%32,0),5,  if(equal((it+31)%64,0),6,  if(equal((it+63)%128,0),7,7)  ))))));\n' + 'sw = sw - 1;\n' + 'sw = if(equal(lev,7),mod,sw)*above(sample,0);\n' + 'lev = if(above(sample,0),if(above(sw,0),lev-1,lev+1),7);\n' + 'a = lev*.1*1.46;\n' + 'a = equal(lev,7) + equal(lev,4) + equal(lev,1);\n' + 'ar = if(above(sample,0),ar,1);\n' + 'ar = if(equal(lev,0),ar*-1,ar);\n' + 'br = if(above(sample,0),br,1);\n' + 'br = if(equal(lev,1),br*-1,br);\n' + 'cr = if(above(sample,0),cr,1);\n' + 'cr = if(equal(lev,2),cr*-1,cr);\n' + 'dr = if(above(sample,0),dr,1);\n' + 'dr = if(equal(lev,3),dr*-1,dr);\n' + 'er = if(above(sample,0),er,1);\n' + 'er = if(equal(lev,4),er*-1,er);\n' + 'fr = if(above(sample,0),fr,1);\n' + 'fr = if(equal(lev,5),fr*-1,fr);\n' + 'gr = if(above(sample,0),gr,1);\n' + 'gr = if(equal(lev,6),gr*-1,gr);\n' + 'mlev = lev*above(sample,0);\n' + 'swi = equal(q4,0)*equal(sample,0);\n' + 'ha = if(swi,1-2*rand(2),ha);\n' + 'hb = if(swi,1-2*rand(2),hb);\n' + 'hc = if(swi,1-2*rand(2),hc);\n' + 'hd = if(swi,1-2*rand(2),hd);\n' + 'he = if(swi,1-2*rand(2),he);\n' + 'hf = if(swi,1-2*rand(2),hf);\n' + 'hg = if(swi,1-2*rand(2),hg);\n' + 'aang = if(above(sample,0),aang,aang + q1*ha*1);\n' + 'bang = if(above(sample,0),bang,bang + q1*hb*1.33);\n' + 'cang = if(above(sample,0),cang,cang + q2*hc*1.67);\n' + 'dang = if(above(sample,0),dang,dang + q2*hd*2);\n' + 'eang = if(above(sample,0),eang,eang + q3*he*2.33);\n' + 'fang = if(above(sample,0),fang,fang + q3*hf*2.67);\n' + 'gang = if(above(sample,0),gang,gang + q3*hg*3);\n' + 'len = len*mad;\n' + 'x = .5 + above(lev,0)*sin(aang)*len*ar;\n' + 'y = 0.5 + above(lev,0)*cos(aang)*len;\n' + 'an = bang*(ar + br)*br;\n' + 'len = len*mad;\n' + 'x = x + above(lev,1)*sin(an)*len*br;\n' + 'y = y + above(lev,1)*cos(an)*len;\n' + 'an = cang*(ar + br + cr)*cr;\n' + 'len = len*mad;\n' + 'x = x + above(lev,2)*sin(an)*len*cr;\n' + 'y = y + above(lev,2)*cos(an)*len;\n' + 'an = dang*(ar + br + cr + dr)*dr;\n' + 'len = len*mad;\n' + 'x = x + above(lev,3)*sin(an)*len*dr;\n' + 'y = y + above(lev,3)*cos(an)*len;\n' + 'an = eang*(ar + br + cr + dr + er)*er;\n' + 'len = len*mad;\n' + 'x = x + above(lev,4)*sin(an)*len*er;\n' + 'y = y + above(lev,4)*cos(an)*len;\n' + 'an = fang*(ar + br + cr + dr + er + fr)*fr;\n' + 'len = len*mad;\n' + 'x = x + above(lev,5)*sin(an)*len*fr;\n' + 'y = y + above(lev,5)*cos(an)*len;\n' + 'an = gang*(ar + br + cr + dr + er + fr + gr)*gr;\n' + 'len = len*mad;\n' + 'x = x + above(lev,6)*sin(an)*len*gr;\n' + 'y = y + above(lev,6)*cos(an)*len;\n' + 'x = (x-.5)*.75 + .5;\n' + 'g = t1 + lev*.1;\n' + 'r = t2 - lev*.1;\n' + 'b = t3;\n' + 'r = if(equal(q5,1),1,r);\n' + 'g = if(equal(q5,2),1,g);\n' + 'b = if(equal(q5,3),1,b);\n' + 'r = r - int(r);\n' + 'g = g - int(g);\n' + 'b = b - int(b);'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.891519,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.tvb = 0;
m.t4 = 0;
m.q2 = 0;
m.tvc = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.mod = 0;
m.q4 = 0;
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.sw = 0;
m.q6 = 0;
m.swi = 0;
m.sz = 0;
m.gr = 0;
m.it = 0;
m.fr = 0;
m.an = 0;
m.er = 0;
m.dr = 0;
m.tic = 0;
m.cr = 0;
m.ra = 0;
m.br = 0;
m.mad = 0;
m.mlev = 0;
m.ar = 0;
m.gang = 0;
m.fang = 0;
m.len = 0;
m.eang = 0;
m.ita = 0;
m.dang = 0;
m.cang = 0;
m.bang = 0;
m.tin = 0;
m.ha = 0;
m.aang = 0;
m.tm = 0;
m.hb = 0;
m.ang = 0;
m.hc = 0;
m.hd = 0;
m.he = 0;
m.lev = 0;
m.t1 = 0;
m.hf = 0;
m.t2 = 0;
m.hg = 0;
m.tva = 0;
m.t3 = 0;
m.t1 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t2 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t3 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t4 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t5 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t6 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t7 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t8 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
			m.rkeys = ['sw','gr','it','fr','er','dr','cr','br','ar','gang','fang','eang','ita','dang','cang','bang','ha','aang','hb','hc','hd','he','lev','hf','hg'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tm = (m.time*0.1);
m.t1 = ((m.t1*Math.sin((m.tm*m.t4)))+((1-m.t1)*Math.sin((m.tm*m.t7))));
m.t2 = ((m.t2*Math.sin((m.tm*m.t5)))+((1-m.t2)*Math.sin((m.tm*m.t8))));
m.t3 = ((m.t3*Math.sin((m.tm*m.t6)))+((1-m.t3)*Math.sin((m.tm*1))));
m.tic = Math.min((m.time-m.tin), 1);
m.tin = m.time;
m.tva = ((m.tic*m.q1)*0.5);
m.tvb = ((m.tic*m.q2)*0.5);
m.tvc = ((m.tic*m.q3)*0.5);
m.q1 = m.tva;
m.q2 = m.tvb;
m.q3 = m.tvc;
m.sz = 0.5;
m.ra = 0.1;
m.len = ifcond(above(m.q6, 0), ifcond(below(m.len, m.sz), (m.len+((m.ra*m.sz)*m.tic)), Math.min(m.sz, m.len)), ifcond(above(m.len, 0), (m.len-((m.ra*m.sz)*m.tic)), Math.max(0, m.len)));
m.t4 = m.len;
		return m;
	},
		'point_eqs' : function(m) {
m.ang = 0;
m.len = m.t4;
m.mad = 0.6;
m.it = ifcond(above(m.sample, 0), (m.it+equal(m.lev, 7)), 1);
m.ita = ((m.ita+1)*above(m.sample, 0));
m.mod = ifcond(equal(mod(m.it,2), 0), 1, ifcond(equal(mod((m.it+1),4), 0), 2, ifcond(equal(mod((m.it+3),8), 0), 3, ifcond(equal(mod((m.it+7),16), 0), 4, ifcond(equal(mod((m.it+15),32), 0), 5, ifcond(equal(mod((m.it+31),64), 0), 6, ifcond(equal(mod((m.it+63),128), 0), 7, 7)))))));
m.sw = (m.sw-1);
m.sw = (ifcond(equal(m.lev, 7), m.mod, m.sw)*above(m.sample, 0));
m.lev = ifcond(above(m.sample, 0), ifcond(above(m.sw, 0), (m.lev-1), (m.lev+1)), 7);
m.a = ((m.lev*0.1)*1.46);
m.a = ((equal(m.lev, 7)+equal(m.lev, 4))+equal(m.lev, 1));
m.ar = ifcond(above(m.sample, 0), m.ar, 1);
m.ar = ifcond(equal(m.lev, 0), (m.ar*-1), m.ar);
m.br = ifcond(above(m.sample, 0), m.br, 1);
m.br = ifcond(equal(m.lev, 1), (m.br*-1), m.br);
m.cr = ifcond(above(m.sample, 0), m.cr, 1);
m.cr = ifcond(equal(m.lev, 2), (m.cr*-1), m.cr);
m.dr = ifcond(above(m.sample, 0), m.dr, 1);
m.dr = ifcond(equal(m.lev, 3), (m.dr*-1), m.dr);
m.er = ifcond(above(m.sample, 0), m.er, 1);
m.er = ifcond(equal(m.lev, 4), (m.er*-1), m.er);
m.fr = ifcond(above(m.sample, 0), m.fr, 1);
m.fr = ifcond(equal(m.lev, 5), (m.fr*-1), m.fr);
m.gr = ifcond(above(m.sample, 0), m.gr, 1);
m.gr = ifcond(equal(m.lev, 6), (m.gr*-1), m.gr);
m.mlev = (m.lev*above(m.sample, 0));
m.swi = (equal(m.q4, 0)*equal(m.sample, 0));
m.ha = ifcond(m.swi, (1-(2*rand(2))), m.ha);
m.hb = ifcond(m.swi, (1-(2*rand(2))), m.hb);
m.hc = ifcond(m.swi, (1-(2*rand(2))), m.hc);
m.hd = ifcond(m.swi, (1-(2*rand(2))), m.hd);
m.he = ifcond(m.swi, (1-(2*rand(2))), m.he);
m.hf = ifcond(m.swi, (1-(2*rand(2))), m.hf);
m.hg = ifcond(m.swi, (1-(2*rand(2))), m.hg);
m.aang = ifcond(above(m.sample, 0), m.aang, (m.aang+(((((m.q1*0.8)+(m.q2*0.1))+(m.q3*0.1))*m.ha)*1)));
m.bang = ifcond(above(m.sample, 0), m.bang, (m.bang+(((((m.q1*0.57)+(m.q2*0.33))+(m.q3*0.1))*m.hb)*1.33)));
m.cang = ifcond(above(m.sample, 0), m.cang, (m.cang+(((((m.q1*0.33)+(m.q2*0.57))+(m.q3*0.1))*m.hc)*1.67)));
m.dang = ifcond(above(m.sample, 0), m.dang, (m.dang+(((((m.q1*0.1)+(m.q2*0.8))+(m.q3*0.1))*m.hd)*2)));
m.eang = ifcond(above(m.sample, 0), m.eang, (m.eang+(((((m.q1*0.1)+(m.q2*0.57))+(m.q3*0.33))*m.he)*2.33)));
m.fang = ifcond(above(m.sample, 0), m.fang, (m.fang+(((((m.q1*0.1)+(m.q2*0.33))+(m.q3*0.57))*m.hf)*2.67)));
m.gang = ifcond(above(m.sample, 0), m.gang, (m.gang+(((((m.q1*0.1)+(m.q2*0.1))+(m.q3*0.8))*m.hg)*3)));
m.len = (m.len*m.mad);
m.x = (0.5+(((above(m.lev, 0)*Math.sin(m.aang))*m.len)*m.ar));
m.y = (0.5+((above(m.lev, 0)*Math.cos(m.aang))*m.len));
m.an = ((m.bang*(m.ar+m.br))*m.br);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 1)*Math.sin(m.an))*m.len)*m.br));
m.y = (m.y+((above(m.lev, 1)*Math.cos(m.an))*m.len));
m.an = ((m.cang*((m.ar+m.br)+m.cr))*m.cr);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 2)*Math.sin(m.an))*m.len)*m.cr));
m.y = (m.y+((above(m.lev, 2)*Math.cos(m.an))*m.len));
m.an = ((m.dang*(((m.ar+m.br)+m.cr)+m.dr))*m.dr);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 3)*Math.sin(m.an))*m.len)*m.dr));
m.y = (m.y+((above(m.lev, 3)*Math.cos(m.an))*m.len));
m.an = ((m.eang*((((m.ar+m.br)+m.cr)+m.dr)+m.er))*m.er);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 4)*Math.sin(m.an))*m.len)*m.er));
m.y = (m.y+((above(m.lev, 4)*Math.cos(m.an))*m.len));
m.an = ((m.fang*(((((m.ar+m.br)+m.cr)+m.dr)+m.er)+m.fr))*m.fr);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 5)*Math.sin(m.an))*m.len)*m.fr));
m.y = (m.y+((above(m.lev, 5)*Math.cos(m.an))*m.len));
m.an = ((m.gang*((((((m.ar+m.br)+m.cr)+m.dr)+m.er)+m.fr)+m.gr))*m.gr);
m.len = (m.len*m.mad);
m.x = (m.x+(((above(m.lev, 6)*Math.sin(m.an))*m.len)*m.gr));
m.y = (m.y+((above(m.lev, 6)*Math.cos(m.an))*m.len));
m.x = (((m.x-0.5)*0.75)+0.5);
m.g = (m.t1+(m.lev*0.1));
m.r = (m.t2-(m.lev*0.1));
m.b = m.t3;
m.r = ifcond(equal(m.q5, 1), 1, m.r);
m.g = ifcond(equal(m.q5, 2), 1, m.g);
m.b = ifcond(equal(m.q5, 3), 1, m.b);
m.r = (m.r-Math.floor(m.r));
m.g = (m.g-Math.floor(m.g));
m.b = (m.b-Math.floor(m.b));
		return m;
	},
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
		'frame_eqs_str' : ('tm = time*.1;\n' + 't1 = t1*sin(tm*t4) + (1-t1)*sin(tm*t7);\n' + 't2 = t2*sin(tm*t5) + (1-t2)*sin(tm*t8);\n' + 't3 = t3*sin(tm*t6) + (1-t3)*sin(tm*1);\n' + 'tic = min(time - tin,1);\n' + 'tin = time;\n' + 'tva = (tic*q1*.5);\n' + 'tvb = (tic*q2*.5);\n' + 'tvc = (tic*q3*.5);\n' + 'q1 = tva;\n' + 'q2 = tvb;\n' + 'q3 = tvc;\n' + 'sz = .5;\n' + 'ra = .1;\n' + 'len = if(above(q6,0),if(below(len,sz),len + ra*sz*tic,min(sz,len)),if(above(len,0),len - ra*sz*tic,max(0,len)));\n' + 't4 = len;'),
		'point_eqs_str' : ('ang = 0;\n' + 'len = t4;\n' + 'mad = .6;\n' + 'it = if(above(sample,0),(it+equal(lev,7)),1);\n' + 'ita = (ita + 1)*above(sample,0);\n' + 'mod = if(equal(it%2,0),1,  if(equal((it+1)%4,0),2,  if(equal((it+3)%8,0),3,  if(equal((it+7)%16,0),4,  if(equal((it+15)%32,0),5,  if(equal((it+31)%64,0),6,  if(equal((it+63)%128,0),7,7)  ))))));\n' + 'sw = sw - 1;\n' + 'sw = if(equal(lev,7),mod,sw)*above(sample,0);\n' + 'lev = if(above(sample,0),if(above(sw,0),lev-1,lev+1),7);\n' + 'a = lev*.1*1.46;\n' + 'a = equal(lev,7) + equal(lev,4) + equal(lev,1);\n' + 'ar = if(above(sample,0),ar,1);\n' + 'ar = if(equal(lev,0),ar*-1,ar);\n' + 'br = if(above(sample,0),br,1);\n' + 'br = if(equal(lev,1),br*-1,br);\n' + 'cr = if(above(sample,0),cr,1);\n' + 'cr = if(equal(lev,2),cr*-1,cr);\n' + 'dr = if(above(sample,0),dr,1);\n' + 'dr = if(equal(lev,3),dr*-1,dr);\n' + 'er = if(above(sample,0),er,1);\n' + 'er = if(equal(lev,4),er*-1,er);\n' + 'fr = if(above(sample,0),fr,1);\n' + 'fr = if(equal(lev,5),fr*-1,fr);\n' + 'gr = if(above(sample,0),gr,1);\n' + 'gr = if(equal(lev,6),gr*-1,gr);\n' + 'mlev = lev*above(sample,0);\n' + 'swi = equal(q4,0)*equal(sample,0);\n' + 'ha = if(swi,1-2*rand(2),ha);\n' + 'hb = if(swi,1-2*rand(2),hb);\n' + 'hc = if(swi,1-2*rand(2),hc);\n' + 'hd = if(swi,1-2*rand(2),hd);\n' + 'he = if(swi,1-2*rand(2),he);\n' + 'hf = if(swi,1-2*rand(2),hf);\n' + 'hg = if(swi,1-2*rand(2),hg);\n' + 'aang = if(above(sample,0),aang,aang + (q1*.8 + q2*.1 + q3*.1)*ha*1);\n' + 'bang = if(above(sample,0),bang,bang + (q1*.57 + q2*.33 + q3*.1)*hb*1.33);\n' + 'cang = if(above(sample,0),cang,cang + (q1*.33 + q2*.57 + q3*.1)*hc*1.67);\n' + 'dang = if(above(sample,0),dang,dang + (q1*.1 + q2*.8 + q3*.1)*hd*2);\n' + 'eang = if(above(sample,0),eang,eang + (q1*.1 + q2*.57 + q3*.33)*he*2.33);\n' + 'fang = if(above(sample,0),fang,fang + (q1*.1 + q2*.33 + q3*.57)*hf*2.67);\n' + 'gang = if(above(sample,0),gang,gang + (q1*.1 + q2*.1 + q3*.8)*hg*3);\n' + 'len = len*mad;\n' + 'x = .5 + above(lev,0)*sin(aang)*len*ar;\n' + 'y = 0.5 + above(lev,0)*cos(aang)*len;\n' + 'an = bang*(ar + br)*br;\n' + 'len = len*mad;\n' + 'x = x + above(lev,1)*sin(an)*len*br;\n' + 'y = y + above(lev,1)*cos(an)*len;\n' + 'an = cang*(ar + br + cr)*cr;\n' + 'len = len*mad;\n' + 'x = x + above(lev,2)*sin(an)*len*cr;\n' + 'y = y + above(lev,2)*cos(an)*len;\n' + 'an = dang*(ar + br + cr + dr)*dr;\n' + 'len = len*mad;\n' + 'x = x + above(lev,3)*sin(an)*len*dr;\n' + 'y = y + above(lev,3)*cos(an)*len;\n' + 'an = eang*(ar + br + cr + dr + er)*er;\n' + 'len = len*mad;\n' + 'x = x + above(lev,4)*sin(an)*len*er;\n' + 'y = y + above(lev,4)*cos(an)*len;\n' + 'an = fang*(ar + br + cr + dr + er + fr)*fr;\n' + 'len = len*mad;\n' + 'x = x + above(lev,5)*sin(an)*len*fr;\n' + 'y = y + above(lev,5)*cos(an)*len;\n' + 'an = gang*(ar + br + cr + dr + er + fr + gr)*gr;\n' + 'len = len*mad;\n' + 'x = x + above(lev,6)*sin(an)*len*gr;\n' + 'y = y + above(lev,6)*cos(an)*len;\n' + 'x = (x-.5)*.75 + .5;\n' + 'g = t1 + lev*.1;\n' + 'r = t2 - lev*.1;\n' + 'b = t3;\n' + 'r = if(equal(q5,1),1,r);\n' + 'g = if(equal(q5,2),1,g);\n' + 'b = if(equal(q5,3),1,b);\n' + 'r = r - int(r);\n' + 'g = g - int(g);\n' + 'b = b - int(b);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 3.141593,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.138466,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 3.35641,
			x : 0.43,
			y : 0.34,
			ang : 3.141593,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.it = 0;
m.tm = 0;

			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {
m.it = ((m.it+1)*below(m.it, 10000));
m.x = ifcond(mod(m.it,2), 0.26, 0.7247);
m.tm = (m.time*0.1);
m.x = (0.26+(0.4647*(m.tm-Math.floor(m.tm))));
m.y = (0.5+(0.25*Math.sin((m.time*0.05))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('it = (it + 1)*below(it,10000);\n' + 'x = if(it%2,.26,.7247);\n' + 'tm = time*.1;\n' + 'x = .26 + .4647*(tm-int(tm));\n' + 'y = .5 + .25*sin(time*.05);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 5.403539,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.499805,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.833456,
			x : 0.1,
			y : 0.8,
			ang : 3.141593,
			sides : 40.0,
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
			tex_ang : 5.403539,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.499805,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.415324,
			x : 0.8,
			y : 0.2,
			ang : 3.141593,
			sides : 40.0,
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
			tex_ang : 5.592035,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.499805,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.847536,
			x : 0.5,
			y : 0.5,
			ang : 3.141593,
			sides : 40.0,
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
	'frame_eqs_str' : ('wave_a = 0;\n' + 'tic = min(time - tin,1);\n' + 'tin = time;\n' + 'ra = 10;\n' + 'treb_avg = tic*(treb_avg*(1/tic - ra) + ra*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - ra) + ra*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - ra) + ra*bass);\n' + 'rb = 1;\n' + 'vav = tic*(vav*(1/tic - rb) + rb*(bass+treb+mid)*.33333);\n' + 'q1 = treb_avg;\n' + 'q2 = mid_avg;\n' + 'q3 = bass_avg;\n' + 'db = bass - bass_avg;\n' + 'it = (it + tic)*below(it,1);\n' + 'rb = .5*(1/tic);\n' + 'bvb = tic*(bass*rb + (1/tic-rb)*bvb);\n' + 'bd = bass - bvb;\n' + 'vm = vm - tic + swi;\n' + 'swi = above(bd - vm,0);\n' + 'q4 = 1-swi;\n' + 'cm = if(above(iter,30) + equal(time,0),rand(3) + 1,cm);\n' + 'iter = (iter + tic)*(1-above(iter,30));\n' + 'q5 = if(equal(cm,0),3,cm);\n' + 'cma = if(above(itar,5) + equal(time,0),int(vav*5),cma);\n' + 'itar = (itar + tic)*(1-above(itar,5));\n' + 'q6 = int(vav*5);\n' + 'monitor = q6;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
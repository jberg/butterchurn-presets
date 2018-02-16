define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.980001,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.006761,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.22891,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.999998,
		ob_r : 1.0,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 0.4999,
		echo_zoom : 0.999998,
		ob_size : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.459526,
		wave_dots : 0.0,
		mv_g : 0.4999,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999902,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : -1.0,
		ob_a : 0.05,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 1.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.2,
		decay : 0.5,
		wave_a : 0.3116,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.4999,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.mt = 0;
m.toc = 0;
m.vav = 0;
m.treb_avg = 0;
m.tic = 0;
m.ra = 0;
m.slide = 0;
m.bt = 0;
m.bass_avg = 0;
m.tin = 0;
m.mid_avg = 0;
m.sp = 0;
m.vt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.zoom = 1.0;
m.decay = 0.5;
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = m.time;
m.ra = 10;
m.treb_avg = (m.tic*((m.treb_avg*(div(1,m.tic)-m.ra))+(m.ra*m.treb)));
m.mid_avg = (m.tic*((m.mid_avg*(div(1,m.tic)-m.ra))+(m.ra*m.mid)));
m.bass_avg = (m.tic*((m.bass_avg*(div(1,m.tic)-m.ra))+(m.ra*m.bass)));
m.vav = (m.tic*((m.vav*(div(1,m.tic)-m.ra))+((m.ra*((m.bass+m.treb)+m.mid))*0.33333)));
m.tt = (m.tt+(m.tic*m.treb_avg));
m.mt = (m.mt+(m.tic*m.mid_avg));
m.bt = (m.bt+(m.tic*m.bass_avg));
m.vt = (m.vt+(m.tic*m.vav));
m.ob_size = Math.min(((pow((m.bass_avg+1), 6)-1)*0.0001), 0.7);
m.sp = (Math.abs((m.vav-m.slide))*0.1);
m.slide = (ifcond(above(m.slide, m.vav), (m.slide-(m.tic*m.sp)), (m.slide+(m.tic*m.sp)))+((1-m.toc)*m.vav));
m.toc = 1;
m.q1 = m.treb_avg;
m.q2 = m.mid_avg;
m.q3 = m.bass_avg;
m.q4 = Math.min((m.slide*1.2), 1.5);
m.q5 = (m.tt*0.4);
m.q6 = (m.mt*0.4);
m.q7 = (m.bt*0.4);
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
m.zang = 0;
m.q2 = 0;
m.tvc = 0;
m.t5 = 0;
m.yang = 0;
m.q3 = 0;
m.t6 = 0;
m.xang = 0;
m.mod = 0;
m.q4 = 0;
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.sw = 0;
m.q6 = 0;
m.swi = 0;
m.q7 = 0;
m.sz = 0;
m.ox = 0;
m.oy = 0;
m.gr = 0;
m.it = 0;
m.mx = 0;
m.oz = 0;
m.fr = 0;
m.my = 0;
m.an = 0;
m.er = 0;
m.fov = 0;
m.mz = 0;
m.dr = 0;
m.tic = 0;
m.cr = 0;
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
m.len = m.q4;
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
m.aang = 1.57;
m.bang = 1.57;
m.cang = 1.57;
m.dang = 1.57;
m.eang = 1.57;
m.fang = 1.57;
m.gang = 1.57;
m.oz = 0;
m.len = (m.len*m.mad);
m.ox = (((above(m.lev, 0)*Math.sin(m.aang))*m.len)*m.ar);
m.oy = ((above(m.lev, 0)*Math.cos(m.aang))*m.len);
m.an = (((m.ar*m.aang)+(m.br*m.bang))*m.br);
m.len = (m.len*m.mad);
m.oy = (m.oy+(((above(m.lev, 1)*Math.sin(m.an))*m.len)*m.br));
m.oz = (m.oz+((above(m.lev, 1)*Math.cos(m.an))*m.len));
m.an = ((((m.ar*m.aang)+(m.br*m.bang))+(m.cr*m.cang))*m.cr);
m.len = (m.len*m.mad);
m.ox = (m.ox+(((above(m.lev, 2)*Math.sin(m.an))*m.len)*m.cr));
m.oz = (m.oz+((above(m.lev, 2)*Math.cos(m.an))*m.len));
m.an = (((((m.ar*m.aang)+(m.br*m.bang))+(m.cr*m.cang))+(m.dr*m.dang))*m.dr);
m.len = (m.len*m.mad);
m.ox = (m.ox+(((above(m.lev, 3)*Math.sin(m.an))*m.len)*m.dr));
m.oy = (m.oy+((above(m.lev, 3)*Math.cos(m.an))*m.len));
m.an = ((((((m.ar*m.aang)+(m.br*m.bang))+(m.cr*m.cang))+(m.dr*m.dang))+(m.er*m.eang))*m.er);
m.len = (m.len*m.mad);
m.ox = (m.ox+(((above(m.lev, 4)*Math.sin(m.an))*m.len)*m.er));
m.oz = (m.oz+((above(m.lev, 4)*Math.cos(m.an))*m.len));
m.an = (((((((m.ar*m.aang)+(m.br*m.bang))+(m.cr*m.cang))+(m.dr*m.dang))+(m.er*m.eang))+(m.fr*m.fang))*m.fr);
m.len = (m.len*m.mad);
m.ox = (m.ox+(((above(m.lev, 5)*Math.sin(m.an))*m.len)*m.fr));
m.oz = (m.oz+((above(m.lev, 5)*Math.cos(m.an))*m.len));
m.an = ((((((((m.ar*m.aang)+(m.br*m.bang))+(m.cr*m.cang))+(m.dr*m.dang))+(m.er*m.eang))+(m.fr*m.fang))+(m.gr*m.gang))*m.gr);
m.len = (m.len*m.mad);
m.oy = (m.oy+(((above(m.lev, 6)*Math.sin(m.an))*m.len)*m.gr));
m.ox = (m.ox+((above(m.lev, 6)*Math.cos(m.an))*m.len));
m.xang = (m.time*1.132);
m.xang = m.q5;
m.yang = (m.time*1.153);
m.yang = m.q6;
m.zang = (m.time*1.110);
m.zang = m.q7;
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
m.oz = (m.oz-2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
		'frame_eqs_str' : ('tm = time*.1;\n' + 't1 = t1*sin(tm*t4) + (1-t1)*sin(tm*t7);\n' + 't2 = t2*sin(tm*t5) + (1-t2)*sin(tm*t8);\n' + 't3 = t3*sin(tm*t6) + (1-t3)*sin(tm*1);\n' + 'tic = min(time - tin,1);\n' + 'tin = time;\n' + 'tva = (tic*q1*.5);\n' + 'tvb = (tic*q2*.5);\n' + 'tvc = (tic*q3*.5);\n' + 'q1 = tva;\n' + 'q2 = tvb;\n' + 'q3 = tvc;\n' + 'sz = .5;\n' + 'len = q4;\n' + 't4 = len;'),
		'point_eqs_str' : ('ang = 0;\n' + 'len = t4;\n' + 'mad = .6;\n' + 'it = if(above(sample,0),(it+equal(lev,7)),1);\n' + 'ita = (ita + 1)*above(sample,0);\n' + 'mod = if(equal(it%2,0),1,  if(equal((it+1)%4,0),2,  if(equal((it+3)%8,0),3,  if(equal((it+7)%16,0),4,  if(equal((it+15)%32,0),5,  if(equal((it+31)%64,0),6,  if(equal((it+63)%128,0),7,7)  ))))));\n' + 'sw = sw - 1;\n' + 'sw = if(equal(lev,7),mod,sw)*above(sample,0);\n' + 'lev = if(above(sample,0),if(above(sw,0),lev-1,lev+1),7);\n' + 'a = lev*.1*1.46;\n' + 'ar = if(above(sample,0),ar,1);\n' + 'ar = if(equal(lev,0),ar*-1,ar);\n' + 'br = if(above(sample,0),br,1);\n' + 'br = if(equal(lev,1),br*-1,br);\n' + 'cr = if(above(sample,0),cr,1);\n' + 'cr = if(equal(lev,2),cr*-1,cr);\n' + 'dr = if(above(sample,0),dr,1);\n' + 'dr = if(equal(lev,3),dr*-1,dr);\n' + 'er = if(above(sample,0),er,1);\n' + 'er = if(equal(lev,4),er*-1,er);\n' + 'fr = if(above(sample,0),fr,1);\n' + 'fr = if(equal(lev,5),fr*-1,fr);\n' + 'gr = if(above(sample,0),gr,1);\n' + 'gr = if(equal(lev,6),gr*-1,gr);\n' + 'mlev = lev*above(sample,0);\n' + 'swi = equal(q4,0)*equal(sample,0);\n' + 'ha = if(swi,1-2*rand(2),ha);\n' + 'hb = if(swi,1-2*rand(2),hb);\n' + 'hc = if(swi,1-2*rand(2),hc);\n' + 'hd = if(swi,1-2*rand(2),hd);\n' + 'he = if(swi,1-2*rand(2),he);\n' + 'hf = if(swi,1-2*rand(2),hf);\n' + 'hg = if(swi,1-2*rand(2),hg);\n' + 'aang = if(above(sample,0),aang,aang + (q1*.8 + q2*.1 + q3*.1)*ha*1);\n' + 'bang = if(above(sample,0),bang,bang + (q1*.57 + q2*.33 + q3*.1)*hb*1.33);\n' + 'cang = if(above(sample,0),cang,cang + (q1*.33 + q2*.57 + q3*.1)*hc*1.67);\n' + 'dang = if(above(sample,0),dang,dang + (q1*.1 + q2*.8 + q3*.1)*hd*2);\n' + 'eang = if(above(sample,0),eang,eang + (q1*.1 + q2*.57 + q3*.33)*he*2.33);\n' + 'fang = if(above(sample,0),fang,fang + (q1*.1 + q2*.33 + q3*.57)*hf*2.67);\n' + 'gang = if(above(sample,0),gang,gang + (q1*.1 + q2*.1 + q3*.8)*hg*3);\n' + 'aang = 1.57;\n' + 'bang = 1.57;\n' + 'cang = 1.57;\n' + 'dang = 1.57;\n' + 'eang = 1.57;\n' + 'fang = 1.57;\n' + 'gang = 1.57;\n' + 'oz = 0;\n' + 'len = len*mad;\n' + 'ox = above(lev,0)*sin(aang)*len*ar;\n' + 'oy = above(lev,0)*cos(aang)*len;\n' + 'an = (ar*aang + br*bang)*br;\n' + 'len = len*mad;\n' + 'oy = oy + above(lev,1)*sin(an)*len*br;\n' + 'oz = oz + above(lev,1)*cos(an)*len;\n' + 'an = (ar*aang + br*bang + cr*cang)*cr;\n' + 'len = len*mad;\n' + 'ox = ox + above(lev,2)*sin(an)*len*cr;\n' + 'oz = oz + above(lev,2)*cos(an)*len;\n' + 'an = (ar*aang + br*bang + cr*cang + dr*dang)*dr;\n' + 'len = len*mad;\n' + 'ox = ox + above(lev,3)*sin(an)*len*dr;\n' + 'oy = oy + above(lev,3)*cos(an)*len;\n' + 'an = (ar*aang + br*bang + cr*cang + dr*dang + er*eang)*er;\n' + 'len = len*mad;\n' + 'ox = ox + above(lev,4)*sin(an)*len*er;\n' + 'oz = oz + above(lev,4)*cos(an)*len;\n' + 'an = (ar*aang + br*bang + cr*cang + dr*dang + er*eang + fr*fang)*fr;\n' + 'len = len*mad;\n' + 'ox = ox + above(lev,5)*sin(an)*len*fr;\n' + 'oz = oz + above(lev,5)*cos(an)*len;\n' + 'an = (ar*aang + br*bang + cr*cang + dr*dang + er*eang + fr*fang + gr*gang)*gr;\n' + 'len = len*mad;\n' + 'oy = oy + above(lev,6)*sin(an)*len*gr;\n' + 'ox = ox + above(lev,6)*cos(an)*len;\n' + 'xang = time*1.132;\n' + 'xang = q5;\n' + 'yang = time*1.153;\n' + 'yang = q6;\n' + 'zang = time*1.110;\n' + 'zang = q7;\n' + 'fov = .5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = oz - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

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
m.zang = 0;
m.q2 = 0;
m.tvc = 0;
m.t5 = 0;
m.yang = 0;
m.q3 = 0;
m.t6 = 0;
m.xang = 0;
m.mod = 0;
m.q4 = 0;
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.sw = 0;
m.q6 = 0;
m.swi = 0;
m.q7 = 0;
m.sz = 0;
m.ox = 0;
m.oy = 0;
m.gr = 0;
m.it = 0;
m.mx = 0;
m.oz = 0;
m.fr = 0;
m.my = 0;
m.an = 0;
m.er = 0;
m.fov = 0;
m.mz = 0;
m.dr = 0;
m.tic = 0;
m.cr = 0;
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
m.len = m.q4;
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
m.aang = 1.57;
m.bang = 1.57;
m.cang = 1.57;
m.dang = 1.57;
m.eang = 1.57;
m.fang = 1.57;
m.gang = 1.57;
m.oz = 0;
m.len = (m.len*m.mad);
m.ox = (((above(m.lev, 0)*Math.sin(m.aang))*m.len)*m.ar);
m.oy = ((above(m.lev, 0)*Math.cos(m.aang))*m.len);
m.an = (((m.ar*m.aang)+(m.br*m.bang))*m.br);
m.len = (m.len*m.mad);
m.oy = (m.oy+(((above(m.lev, 1)*Math.sin(m.an))*m.len)*m.br));
m.oz = (m.oz+((above(m.lev, 1)*Math.cos(m.an))*m.len));
m.an = ((((m.ar*m.aang)+(m.br*m.bang))+(m.cr*m.cang))*m.cr);
m.len = (m.len*m.mad);
m.ox = (m.ox+(((above(m.lev, 2)*Math.sin(m.an))*m.len)*m.cr));
m.oz = (m.oz+((above(m.lev, 2)*Math.cos(m.an))*m.len));
m.an = (((((m.ar*m.aang)+(m.br*m.bang))+(m.cr*m.cang))+(m.dr*m.dang))*m.dr);
m.len = (m.len*m.mad);
m.ox = (m.ox+(((above(m.lev, 3)*Math.sin(m.an))*m.len)*m.dr));
m.oy = (m.oy+((above(m.lev, 3)*Math.cos(m.an))*m.len));
m.an = ((((((m.ar*m.aang)+(m.br*m.bang))+(m.cr*m.cang))+(m.dr*m.dang))+(m.er*m.eang))*m.er);
m.len = (m.len*m.mad);
m.ox = (m.ox+(((above(m.lev, 4)*Math.sin(m.an))*m.len)*m.er));
m.oz = (m.oz+((above(m.lev, 4)*Math.cos(m.an))*m.len));
m.an = (((((((m.ar*m.aang)+(m.br*m.bang))+(m.cr*m.cang))+(m.dr*m.dang))+(m.er*m.eang))+(m.fr*m.fang))*m.fr);
m.len = (m.len*m.mad);
m.ox = (m.ox+(((above(m.lev, 5)*Math.sin(m.an))*m.len)*m.fr));
m.oz = (m.oz+((above(m.lev, 5)*Math.cos(m.an))*m.len));
m.an = ((((((((m.ar*m.aang)+(m.br*m.bang))+(m.cr*m.cang))+(m.dr*m.dang))+(m.er*m.eang))+(m.fr*m.fang))+(m.gr*m.gang))*m.gr);
m.len = (m.len*m.mad);
m.oy = (m.oy+(((above(m.lev, 6)*Math.sin(m.an))*m.len)*m.gr));
m.ox = (m.ox+((above(m.lev, 6)*Math.cos(m.an))*m.len));
m.xang = (m.time*1.132);
m.xang = m.q5;
m.yang = (m.time*1.153);
m.yang = m.q6;
m.zang = (m.time*1.110);
m.zang = (m.q7+1.57);
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
m.oz = (m.oz-2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
		'frame_eqs_str' : ('tm = time*.1;\n' + 't1 = t1*sin(tm*t4) + (1-t1)*sin(tm*t7);\n' + 't2 = t2*sin(tm*t5) + (1-t2)*sin(tm*t8);\n' + 't3 = t3*sin(tm*t6) + (1-t3)*sin(tm*1);\n' + 'tic = min(time - tin,1);\n' + 'tin = time;\n' + 'tva = (tic*q1*.5);\n' + 'tvb = (tic*q2*.5);\n' + 'tvc = (tic*q3*.5);\n' + 'q1 = tva;\n' + 'q2 = tvb;\n' + 'q3 = tvc;\n' + 'sz = .5;\n' + 'len = q4;\n' + 't4 = len;'),
		'point_eqs_str' : ('ang = 0;\n' + 'len = t4;\n' + 'mad = .6;\n' + 'it = if(above(sample,0),(it+equal(lev,7)),1);\n' + 'ita = (ita + 1)*above(sample,0);\n' + 'mod = if(equal(it%2,0),1,  if(equal((it+1)%4,0),2,  if(equal((it+3)%8,0),3,  if(equal((it+7)%16,0),4,  if(equal((it+15)%32,0),5,  if(equal((it+31)%64,0),6,  if(equal((it+63)%128,0),7,7)  ))))));\n' + 'sw = sw - 1;\n' + 'sw = if(equal(lev,7),mod,sw)*above(sample,0);\n' + 'lev = if(above(sample,0),if(above(sw,0),lev-1,lev+1),7);\n' + 'a = lev*.1*1.46;\n' + 'ar = if(above(sample,0),ar,1);\n' + 'ar = if(equal(lev,0),ar*-1,ar);\n' + 'br = if(above(sample,0),br,1);\n' + 'br = if(equal(lev,1),br*-1,br);\n' + 'cr = if(above(sample,0),cr,1);\n' + 'cr = if(equal(lev,2),cr*-1,cr);\n' + 'dr = if(above(sample,0),dr,1);\n' + 'dr = if(equal(lev,3),dr*-1,dr);\n' + 'er = if(above(sample,0),er,1);\n' + 'er = if(equal(lev,4),er*-1,er);\n' + 'fr = if(above(sample,0),fr,1);\n' + 'fr = if(equal(lev,5),fr*-1,fr);\n' + 'gr = if(above(sample,0),gr,1);\n' + 'gr = if(equal(lev,6),gr*-1,gr);\n' + 'mlev = lev*above(sample,0);\n' + 'swi = equal(q4,0)*equal(sample,0);\n' + 'ha = if(swi,1-2*rand(2),ha);\n' + 'hb = if(swi,1-2*rand(2),hb);\n' + 'hc = if(swi,1-2*rand(2),hc);\n' + 'hd = if(swi,1-2*rand(2),hd);\n' + 'he = if(swi,1-2*rand(2),he);\n' + 'hf = if(swi,1-2*rand(2),hf);\n' + 'hg = if(swi,1-2*rand(2),hg);\n' + 'aang = if(above(sample,0),aang,aang + (q1*.8 + q2*.1 + q3*.1)*ha*1);\n' + 'bang = if(above(sample,0),bang,bang + (q1*.57 + q2*.33 + q3*.1)*hb*1.33);\n' + 'cang = if(above(sample,0),cang,cang + (q1*.33 + q2*.57 + q3*.1)*hc*1.67);\n' + 'dang = if(above(sample,0),dang,dang + (q1*.1 + q2*.8 + q3*.1)*hd*2);\n' + 'eang = if(above(sample,0),eang,eang + (q1*.1 + q2*.57 + q3*.33)*he*2.33);\n' + 'fang = if(above(sample,0),fang,fang + (q1*.1 + q2*.33 + q3*.57)*hf*2.67);\n' + 'gang = if(above(sample,0),gang,gang + (q1*.1 + q2*.1 + q3*.8)*hg*3);\n' + 'aang = 1.57;\n' + 'bang = 1.57;\n' + 'cang = 1.57;\n' + 'dang = 1.57;\n' + 'eang = 1.57;\n' + 'fang = 1.57;\n' + 'gang = 1.57;\n' + 'oz = 0;\n' + 'len = len*mad;\n' + 'ox = above(lev,0)*sin(aang)*len*ar;\n' + 'oy = above(lev,0)*cos(aang)*len;\n' + 'an = (ar*aang + br*bang)*br;\n' + 'len = len*mad;\n' + 'oy = oy + above(lev,1)*sin(an)*len*br;\n' + 'oz = oz + above(lev,1)*cos(an)*len;\n' + 'an = (ar*aang + br*bang + cr*cang)*cr;\n' + 'len = len*mad;\n' + 'ox = ox + above(lev,2)*sin(an)*len*cr;\n' + 'oz = oz + above(lev,2)*cos(an)*len;\n' + 'an = (ar*aang + br*bang + cr*cang + dr*dang)*dr;\n' + 'len = len*mad;\n' + 'ox = ox + above(lev,3)*sin(an)*len*dr;\n' + 'oy = oy + above(lev,3)*cos(an)*len;\n' + 'an = (ar*aang + br*bang + cr*cang + dr*dang + er*eang)*er;\n' + 'len = len*mad;\n' + 'ox = ox + above(lev,4)*sin(an)*len*er;\n' + 'oz = oz + above(lev,4)*cos(an)*len;\n' + 'an = (ar*aang + br*bang + cr*cang + dr*dang + er*eang + fr*fang)*fr;\n' + 'len = len*mad;\n' + 'ox = ox + above(lev,5)*sin(an)*len*fr;\n' + 'oz = oz + above(lev,5)*cos(an)*len;\n' + 'an = (ar*aang + br*bang + cr*cang + dr*dang + er*eang + fr*fang + gr*gang)*gr;\n' + 'len = len*mad;\n' + 'oy = oy + above(lev,6)*sin(an)*len*gr;\n' + 'ox = ox + above(lev,6)*cos(an)*len;\n' + 'xang = time*1.132;\n' + 'xang = q5;\n' + 'yang = time*1.153;\n' + 'yang = q6;\n' + 'zang = time*1.110;\n' + 'zang = q7 + 1.57;\n' + 'fov = .5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = oz - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 0.0,
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
m.zang = 0;
m.q2 = 0;
m.tvc = 0;
m.t5 = 0;
m.yang = 0;
m.q3 = 0;
m.t6 = 0;
m.xang = 0;
m.mod = 0;
m.q4 = 0;
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.sw = 0;
m.q6 = 0;
m.swi = 0;
m.q7 = 0;
m.sz = 0;
m.ox = 0;
m.oy = 0;
m.gr = 0;
m.it = 0;
m.mx = 0;
m.oz = 0;
m.fr = 0;
m.my = 0;
m.an = 0;
m.er = 0;
m.fov = 0;
m.mz = 0;
m.dr = 0;
m.tic = 0;
m.cr = 0;
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
m.len = 1;
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
m.aang = 1.57;
m.bang = 1.57;
m.cang = 1.57;
m.dang = 1.57;
m.eang = 1.57;
m.fang = 1.57;
m.gang = 1.57;
m.oz = 0;
m.len = (m.len*m.mad);
m.ox = (((above(m.lev, 0)*Math.sin(m.aang))*m.len)*m.ar);
m.oy = ((above(m.lev, 0)*Math.cos(m.aang))*m.len);
m.an = (((m.ar*m.aang)+(m.br*m.bang))*m.br);
m.len = (m.len*m.mad);
m.oy = (m.oy+(((above(m.lev, 1)*Math.sin(m.an))*m.len)*m.br));
m.oz = (m.oz+((above(m.lev, 1)*Math.cos(m.an))*m.len));
m.an = ((((m.ar*m.aang)+(m.br*m.bang))+(m.cr*m.cang))*m.cr);
m.len = (m.len*m.mad);
m.ox = (m.ox+(((above(m.lev, 2)*Math.sin(m.an))*m.len)*m.cr));
m.oz = (m.oz+((above(m.lev, 2)*Math.cos(m.an))*m.len));
m.an = (((((m.ar*m.aang)+(m.br*m.bang))+(m.cr*m.cang))+(m.dr*m.dang))*m.dr);
m.len = (m.len*m.mad);
m.ox = (m.ox+(((above(m.lev, 3)*Math.sin(m.an))*m.len)*m.dr));
m.oy = (m.oy+((above(m.lev, 3)*Math.cos(m.an))*m.len));
m.an = ((((((m.ar*m.aang)+(m.br*m.bang))+(m.cr*m.cang))+(m.dr*m.dang))+(m.er*m.eang))*m.er);
m.len = (m.len*m.mad);
m.ox = (m.ox+(((above(m.lev, 4)*Math.sin(m.an))*m.len)*m.er));
m.oz = (m.oz+((above(m.lev, 4)*Math.cos(m.an))*m.len));
m.an = (((((((m.ar*m.aang)+(m.br*m.bang))+(m.cr*m.cang))+(m.dr*m.dang))+(m.er*m.eang))+(m.fr*m.fang))*m.fr);
m.len = (m.len*m.mad);
m.ox = (m.ox+(((above(m.lev, 5)*Math.sin(m.an))*m.len)*m.fr));
m.oz = (m.oz+((above(m.lev, 5)*Math.cos(m.an))*m.len));
m.an = ((((((((m.ar*m.aang)+(m.br*m.bang))+(m.cr*m.cang))+(m.dr*m.dang))+(m.er*m.eang))+(m.fr*m.fang))+(m.gr*m.gang))*m.gr);
m.len = (m.len*m.mad);
m.oy = (m.oy+(((above(m.lev, 6)*Math.sin(m.an))*m.len)*m.gr));
m.ox = (m.ox+((above(m.lev, 6)*Math.cos(m.an))*m.len));
m.xang = (m.time*1.132);
m.xang = m.q5;
m.yang = (m.time*1.153);
m.yang = m.q6;
m.zang = (m.time*1.110);
m.zang = m.q7;
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
m.oz = (m.oz-2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
		'frame_eqs_str' : ('tm = time*.1;\n' + 't1 = t1*sin(tm*t4) + (1-t1)*sin(tm*t7);\n' + 't2 = t2*sin(tm*t5) + (1-t2)*sin(tm*t8);\n' + 't3 = t3*sin(tm*t6) + (1-t3)*sin(tm*1);\n' + 'tic = min(time - tin,1);\n' + 'tin = time;\n' + 'tva = (tic*q1*.5);\n' + 'tvb = (tic*q2*.5);\n' + 'tvc = (tic*q3*.5);\n' + 'q1 = tva;\n' + 'q2 = tvb;\n' + 'q3 = tvc;\n' + 'sz = .5;\n' + 'len = 1;\n' + 't4 = len;'),
		'point_eqs_str' : ('ang = 0;\n' + 'len = t4;\n' + 'mad = .6;\n' + 'it = if(above(sample,0),(it+equal(lev,7)),1);\n' + 'ita = (ita + 1)*above(sample,0);\n' + 'mod = if(equal(it%2,0),1,  if(equal((it+1)%4,0),2,  if(equal((it+3)%8,0),3,  if(equal((it+7)%16,0),4,  if(equal((it+15)%32,0),5,  if(equal((it+31)%64,0),6,  if(equal((it+63)%128,0),7,7)  ))))));\n' + 'sw = sw - 1;\n' + 'sw = if(equal(lev,7),mod,sw)*above(sample,0);\n' + 'lev = if(above(sample,0),if(above(sw,0),lev-1,lev+1),7);\n' + 'a = lev*.1*1.46;\n' + 'ar = if(above(sample,0),ar,1);\n' + 'ar = if(equal(lev,0),ar*-1,ar);\n' + 'br = if(above(sample,0),br,1);\n' + 'br = if(equal(lev,1),br*-1,br);\n' + 'cr = if(above(sample,0),cr,1);\n' + 'cr = if(equal(lev,2),cr*-1,cr);\n' + 'dr = if(above(sample,0),dr,1);\n' + 'dr = if(equal(lev,3),dr*-1,dr);\n' + 'er = if(above(sample,0),er,1);\n' + 'er = if(equal(lev,4),er*-1,er);\n' + 'fr = if(above(sample,0),fr,1);\n' + 'fr = if(equal(lev,5),fr*-1,fr);\n' + 'gr = if(above(sample,0),gr,1);\n' + 'gr = if(equal(lev,6),gr*-1,gr);\n' + 'mlev = lev*above(sample,0);\n' + 'swi = equal(q4,0)*equal(sample,0);\n' + 'ha = if(swi,1-2*rand(2),ha);\n' + 'hb = if(swi,1-2*rand(2),hb);\n' + 'hc = if(swi,1-2*rand(2),hc);\n' + 'hd = if(swi,1-2*rand(2),hd);\n' + 'he = if(swi,1-2*rand(2),he);\n' + 'hf = if(swi,1-2*rand(2),hf);\n' + 'hg = if(swi,1-2*rand(2),hg);\n' + 'aang = if(above(sample,0),aang,aang + (q1*.8 + q2*.1 + q3*.1)*ha*1);\n' + 'bang = if(above(sample,0),bang,bang + (q1*.57 + q2*.33 + q3*.1)*hb*1.33);\n' + 'cang = if(above(sample,0),cang,cang + (q1*.33 + q2*.57 + q3*.1)*hc*1.67);\n' + 'dang = if(above(sample,0),dang,dang + (q1*.1 + q2*.8 + q3*.1)*hd*2);\n' + 'eang = if(above(sample,0),eang,eang + (q1*.1 + q2*.57 + q3*.33)*he*2.33);\n' + 'fang = if(above(sample,0),fang,fang + (q1*.1 + q2*.33 + q3*.57)*hf*2.67);\n' + 'gang = if(above(sample,0),gang,gang + (q1*.1 + q2*.1 + q3*.8)*hg*3);\n' + 'aang = 1.57;\n' + 'bang = 1.57;\n' + 'cang = 1.57;\n' + 'dang = 1.57;\n' + 'eang = 1.57;\n' + 'fang = 1.57;\n' + 'gang = 1.57;\n' + 'oz = 0;\n' + 'len = len*mad;\n' + 'ox = above(lev,0)*sin(aang)*len*ar;\n' + 'oy = above(lev,0)*cos(aang)*len;\n' + 'an = (ar*aang + br*bang)*br;\n' + 'len = len*mad;\n' + 'oy = oy + above(lev,1)*sin(an)*len*br;\n' + 'oz = oz + above(lev,1)*cos(an)*len;\n' + 'an = (ar*aang + br*bang + cr*cang)*cr;\n' + 'len = len*mad;\n' + 'ox = ox + above(lev,2)*sin(an)*len*cr;\n' + 'oz = oz + above(lev,2)*cos(an)*len;\n' + 'an = (ar*aang + br*bang + cr*cang + dr*dang)*dr;\n' + 'len = len*mad;\n' + 'ox = ox + above(lev,3)*sin(an)*len*dr;\n' + 'oy = oy + above(lev,3)*cos(an)*len;\n' + 'an = (ar*aang + br*bang + cr*cang + dr*dang + er*eang)*er;\n' + 'len = len*mad;\n' + 'ox = ox + above(lev,4)*sin(an)*len*er;\n' + 'oz = oz + above(lev,4)*cos(an)*len;\n' + 'an = (ar*aang + br*bang + cr*cang + dr*dang + er*eang + fr*fang)*fr;\n' + 'len = len*mad;\n' + 'ox = ox + above(lev,5)*sin(an)*len*fr;\n' + 'oz = oz + above(lev,5)*cos(an)*len;\n' + 'an = (ar*aang + br*bang + cr*cang + dr*dang + er*eang + fr*fang + gr*gang)*gr;\n' + 'len = len*mad;\n' + 'oy = oy + above(lev,6)*sin(an)*len*gr;\n' + 'ox = ox + above(lev,6)*cos(an)*len;\n' + 'xang = time*1.132;\n' + 'xang = q5;\n' + 'yang = time*1.153;\n' + 'yang = q6;\n' + 'zang = time*1.110;\n' + 'zang = q7;\n' + 'fov = .5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = oz - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

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
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.zang = 0;
m.q2 = 0;
m.yang = 0;
m.amod = 0;
m.q3 = 0;
m.xang = 0;
m.mod = 0;
m.q4 = 0;
m.pib = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.med = 0;
m.fov = 0;
m.mz = 0;
m.tic = 0;
m.sa = 0;
m.ra = 0;
m.rb = 0;
m.tin = 0;
m.vr = 0;
m.sp = 0;
m.sam = 0;

			m.rkeys = ['tin'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ra = 0.8;
m.rb = 0.5;
m.pib = 6.28318530718;
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = ifcond(equal(m.sample, 0), m.time, m.tin);
m.mod = (1.5+(0.5*Math.sin((m.time*0.15))));
m.med = (1.5+(0.5*Math.sin((m.time*0.134))));
m.med = 5;
m.amod = 3;
m.vr = (rand(10001)*0.0001);
m.rb = (m.rb+((rand(10001)*0.0001)*0.1));
m.a = m.vr;
m.sa = ((m.vr*m.pib)*0.5);
m.sp = ((m.sa*m.mod)+(m.q1*1.3));
m.sam = ((m.sa*m.med)-(m.q1*0.219));
m.ox = (m.ra*Math.sin((m.sam*m.pib)));
m.oy = (m.ra*Math.cos((m.sam*m.pib)));
m.ox = (m.ox+((m.rb*-Math.cos(m.sp))*Math.sin((m.sam*m.pib))));
m.oz = (m.rb*-Math.sin(m.sp));
m.oy = (m.oy+((m.rb*-Math.cos(m.sp))*Math.cos((m.sam*m.pib))));
m.xang = (m.time*0.132);
m.xang = m.q2;
m.yang = (m.time*0.153);
m.yang = m.q3;
m.zang = (m.time*0.110);
m.zang = m.q4;
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
m.oz = (m.oz-2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ra = .8;\n' + 'rb = .5;\n' + 'pib = 6.28318530718;\n' + 'tic = min(time-tin,.1);\n' + 'tin = if(equal(sample,0),time,tin);\n' + 'mod = 1.5 + .5*sin(time*.15);\n' + 'med = 1.5 + .5*sin(time*.134);\n' + 'med = 5;\n' + 'amod = 3;\n' + 'vr = rand(10001)*.0001;\n' + 'rb = rb + rand(10001)*.0001*.1;\n' + 'a = vr;\n' + 'sa = vr*pib*.5;\n' + 'sp = sa*mod + q1*1.3;\n' + 'sam = sa*med - q1*.219;\n' + 'ox = ra*sin(sam*pib);\n' + 'oy = ra*cos(sam*pib);\n' + 'ox = ox + rb*-cos(sp)*sin(sam*pib);\n' + 'oz = rb*-sin(sp);\n' + 'oy = oy + rb*-cos(sp)*cos(sam*pib);\n' + 'xang = time*.132;\n' + 'xang = q2;\n' + 'yang = time*.153;\n' + 'yang = q3;\n' + 'zang = time*.110;\n' + 'zang = q4;\n' + 'fov = 0.6 + 0.2*sin(time);\n' + 'fov = .5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = oz - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.84,
			a : 1.0,
			enabled : 1.0,
			b : 0.89,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.94,
			textured : 1.0,
			g2 : 0.93,
			tex_zoom : 0.539067,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.854834,
			x : 0.5,
			y : 0.5,
			ang : 1.570796,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.ti = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = 0.4998;
m.y = 0.5002;
m.ti = (m.time*0.3);
m.r = (0.925+(0.05*Math.sin((m.ti*1.721))));
m.g = (0.925+(0.05*Math.sin((m.ti*1.838))));
m.b = (0.925+(0.05*Math.sin((m.ti*1.968))));
m.r2 = (1.875-m.r);
m.g2 = (1.875-m.g);
m.b2 = (1.875-m.b);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = .4998;\n' + 'y = .5002;\n' + 'ti = time*.3;\n' + 'r = .925 + .05*sin(ti*1.721);\n' + 'g = .925 + .05*sin(ti*1.838);\n' + 'b = .925 + .05*sin(ti*1.968);\n' + 'r2 = 1.875 - r;\n' + 'g2 = 1.875 - g;\n' + 'b2 = 1.875 - b;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.499805,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.6,
			r : 1.0,
			border_g : 0.5,
			rad : 1.998625,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 63.0,
			border_r : 0.5,
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
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.499805,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.273185,
			x : 0.123,
			y : 0.0,
			ang : 0.0,
			sides : 63.0,
			border_r : 0.5,
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
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.499805,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.548217,
			x : 0.5,
			y : 1.0,
			ang : 0.0,
			sides : 63.0,
			border_r : 0.5,
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
	'frame_eqs_str' : ('warp = 0;\n' + 'zoom=1.0;\n' + 'decay=.5;\n' + 'tic = min(time-tin,.1);\n' + 'tin = time;\n' + 'ra = 10;\n' + 'treb_avg = tic*(treb_avg*(1/tic - ra) + ra*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - ra) + ra*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - ra) + ra*bass);\n' + 'vav = tic*(vav*(1/tic - ra) + ra*(bass+treb+mid)*.33333);\n' + 'tt = tt + tic*treb_avg;\n' + 'mt = mt + tic*mid_avg;\n' + 'bt = bt + tic*bass_avg;\n' + 'vt = vt + tic*vav;\n' + 'ob_size = min((pow(bass_avg+1,6)-1)*.0001,.7);\n' + 'sp = abs(vav - slide)*.1;\n' + 'slide = if(above(slide,vav),slide-tic*sp,slide+tic*sp) + (1-toc)*vav;\n' + 'toc = 1;\n' + 'q1 = treb_avg;\n' + 'q2 = mid_avg;\n' + 'q3 = bass_avg;\n' + 'q4 = min(slide*1.2,1.5);\n' + 'q5 = tt*.4;\n' + 'q6 = mt*.4;\n' + 'q7 = bt*.4;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
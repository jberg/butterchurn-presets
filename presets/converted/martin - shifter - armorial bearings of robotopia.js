define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 0.498,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.286,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 0.2,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 1.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.81,
		warpanimspeed : 0.442,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.05,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 4.574,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.54,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.index2 = 0;
m.q1 = 0;
m.p1 = 0;
m.q2 = 0;
m.p2 = 0;
m.q3 = 0;
m.trot = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.k1 = 0;
m.q7 = 0;
m.q8 = 0;
m.is_beat = 0;
m.q30 = 0;
m.dec_med = 0;
m.q20 = 0;
m.q21 = 0;
m.q22 = 0;
m.index = 0;
m.avg = 0;
m.q24 = 0;
m.q25 = 0;
m.q26 = 0;
m.q27 = 0;
m.beat = 0;
m.q28 = 0;
m.q29 = 0;
m.t0 = 0;
m.rott = 0;
m.dec_slow = 0;
m.peak = 0;
m.index = rand(32);
m.index2 = rand(32);
		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.7, div(30,m.fps));
m.dec_slow = pow(0.9, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((-0.5+m.avg)+m.peak))*above(m.time, (m.t0+0.1)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),64);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),4);
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q24 = m.is_beat;
m.q29 = (2*(mod(m.index2,2)-0.5));
m.q25 = Math.min(1, div(m.q22,2));
m.k1 = (m.is_beat*equal(mod(m.index,4), 0));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.rott = div((m.p2*3.1416),4);
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.q26 = (8+(m.index2*8));
m.q27 = m.index;
m.q28 = m.index2;
m.trot = div((m.index*6.28),4);
m.q5 = Math.cos(m.trot);
m.q6 = Math.sin(m.trot);
m.q7 = -m.q6;
m.q8 = m.q5;
m.q29 = Math.sin(div(m.time,4));
m.wave_mystery = div(m.q29,2);
m.q30 = div((0.03*mod(m.index,32)),32);
m.monitor = m.q30;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1+(0.02*m.rad));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.89152,
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

m.t1 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t2 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t3 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t4 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t5 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t6 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t7 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t8 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.89152,
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

m.t1 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t2 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t3 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t4 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t5 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t6 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t7 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t8 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.89152,
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

m.t1 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t2 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t3 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t4 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t5 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t6 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t7 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t8 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.89152,
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
m.q20 = 0;
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
m.y = (div((m.y-0.5),m.q20)+0.5);
		return m;
	},
		'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
		'frame_eqs_str' : ('tm = time*.1;\n' + 't1 = t1*sin(tm*t4) + (1-t1)*sin(tm*t7);\n' + 't2 = t2*sin(tm*t5) + (1-t2)*sin(tm*t8);\n' + 't3 = t3*sin(tm*t6) + (1-t3)*sin(tm*1);\n' + 'tic = min(time - tin,1);\n' + 'tin = time;\n' + 'tva = (tic*q1*.5);\n' + 'tvb = (tic*q2*.5);\n' + 'tvc = (tic*q3*.5);\n' + 'q1 = tva;\n' + 'q2 = tvb;\n' + 'q3 = tvc;\n' + 'sz = .5;\n' + 'ra = .1;\n' + 'len = if(above(q6,0),if(below(len,sz),len + ra*sz*tic,min(sz,len)),if(above(len,0),len - ra*sz*tic,max(0,len)));\n' + 't4 = len;'),
		'point_eqs_str' : ('ang = 0;\n' + 'len = t4;\n' + 'mad = .6;\n' + 'it = if(above(sample,0),(it+equal(lev,7)),1);\n' + 'ita = (ita + 1)*above(sample,0);\n' + 'mod = if(equal(it%2,0),1,  if(equal((it+1)%4,0),2,  if(equal((it+3)%8,0),3,  if(equal((it+7)%16,0),4,  if(equal((it+15)%32,0),5,  if(equal((it+31)%64,0),6,  if(equal((it+63)%128,0),7,7)  ))))));\n' + 'sw = sw - 1;\n' + 'sw = if(equal(lev,7),mod,sw)*above(sample,0);\n' + 'lev = if(above(sample,0),if(above(sw,0),lev-1,lev+1),7);\n' + 'a = lev*.1*1.46;\n' + 'a = equal(lev,7) + equal(lev,4) + equal(lev,1);\n' + 'ar = if(above(sample,0),ar,1);\n' + 'ar = if(equal(lev,0),ar*-1,ar);\n' + 'br = if(above(sample,0),br,1);\n' + 'br = if(equal(lev,1),br*-1,br);\n' + 'cr = if(above(sample,0),cr,1);\n' + 'cr = if(equal(lev,2),cr*-1,cr);\n' + 'dr = if(above(sample,0),dr,1);\n' + 'dr = if(equal(lev,3),dr*-1,dr);\n' + 'er = if(above(sample,0),er,1);\n' + 'er = if(equal(lev,4),er*-1,er);\n' + 'fr = if(above(sample,0),fr,1);\n' + 'fr = if(equal(lev,5),fr*-1,fr);\n' + 'gr = if(above(sample,0),gr,1);\n' + 'gr = if(equal(lev,6),gr*-1,gr);\n' + 'mlev = lev*above(sample,0);\n' + 'swi = equal(q4,0)*equal(sample,0);\n' + 'ha = if(swi,1-2*rand(2),ha);\n' + 'hb = if(swi,1-2*rand(2),hb);\n' + 'hc = if(swi,1-2*rand(2),hc);\n' + 'hd = if(swi,1-2*rand(2),hd);\n' + 'he = if(swi,1-2*rand(2),he);\n' + 'hf = if(swi,1-2*rand(2),hf);\n' + 'hg = if(swi,1-2*rand(2),hg);\n' + 'aang = if(above(sample,0),aang,aang + (q1*.8 + q2*.1 + q3*.1)*ha*1);\n' + 'bang = if(above(sample,0),bang,bang + (q1*.57 + q2*.33 + q3*.1)*hb*1.33);\n' + 'cang = if(above(sample,0),cang,cang + (q1*.33 + q2*.57 + q3*.1)*hc*1.67);\n' + 'dang = if(above(sample,0),dang,dang + (q1*.1 + q2*.8 + q3*.1)*hd*2);\n' + 'eang = if(above(sample,0),eang,eang + (q1*.1 + q2*.57 + q3*.33)*he*2.33);\n' + 'fang = if(above(sample,0),fang,fang + (q1*.1 + q2*.33 + q3*.57)*hf*2.67);\n' + 'gang = if(above(sample,0),gang,gang + (q1*.1 + q2*.1 + q3*.8)*hg*3);\n' + 'len = len*mad;\n' + 'x = .5 + above(lev,0)*sin(aang)*len*ar;\n' + 'y = 0.5 + above(lev,0)*cos(aang)*len;\n' + 'an = bang*(ar + br)*br;\n' + 'len = len*mad;\n' + 'x = x + above(lev,1)*sin(an)*len*br;\n' + 'y = y + above(lev,1)*cos(an)*len;\n' + 'an = cang*(ar + br + cr)*cr;\n' + 'len = len*mad;\n' + 'x = x + above(lev,2)*sin(an)*len*cr;\n' + 'y = y + above(lev,2)*cos(an)*len;\n' + 'an = dang*(ar + br + cr + dr)*dr;\n' + 'len = len*mad;\n' + 'x = x + above(lev,3)*sin(an)*len*dr;\n' + 'y = y + above(lev,3)*cos(an)*len;\n' + 'an = eang*(ar + br + cr + dr + er)*er;\n' + 'len = len*mad;\n' + 'x = x + above(lev,4)*sin(an)*len*er;\n' + 'y = y + above(lev,4)*cos(an)*len;\n' + 'an = fang*(ar + br + cr + dr + er + fr)*fr;\n' + 'len = len*mad;\n' + 'x = x + above(lev,5)*sin(an)*len*fr;\n' + 'y = y + above(lev,5)*cos(an)*len;\n' + 'an = gang*(ar + br + cr + dr + er + fr + gr)*gr;\n' + 'len = len*mad;\n' + 'x = x + above(lev,6)*sin(an)*len*gr;\n' + 'y = y + above(lev,6)*cos(an)*len;\n' + 'x = (x-.5)*.75 + .5;\n' + 'g = t1 + lev*.1;\n' + 'r = t2 - lev*.1;\n' + 'b = t3;\n' + 'r = if(equal(q5,1),1,r);\n' + 'g = if(equal(q5,2),1,g);\n' + 'b = if(equal(q5,3),1,b);\n' + 'r = r - int(r);\n' + 'g = g - int(g);\n' + 'b = b - int(b);\n' + 'y = (y-.5)/q20+.5;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.8,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.66609,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.18647,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 16.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q29 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_zoom = 0.8;
m.a = Math.max(0, m.q29);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_zoom = .8;\n' + 'a = max(0,q29);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 5.40354,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.49981,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.83346,
			x : 0.1,
			y : 0.8,
			ang : 3.14159,
			sides : 40.0,
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
			tex_ang : 5.40354,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.49981,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.41532,
			x : 0.8,
			y : 0.2,
			ang : 3.14159,
			sides : 40.0,
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
			tex_ang : 5.59203,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.49981,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.84754,
			x : 0.5,
			y : 0.5,
			ang : 3.14159,
			sides : 40.0,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 crisp_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (uv - vec2(0.5, 0.5));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv);\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = (((tmpvar_4.xyz * scale1) + bias1) * 4.0).x;\n' + '   mat2 tmpvar_6;\n' + '  tmpvar_6[0].x = cos(tmpvar_5);\n' + '  tmpvar_6[0].y = -(sin(tmpvar_5));\n' + '  tmpvar_6[1].x = sin(tmpvar_5);\n' + '  tmpvar_6[1].y = cos(tmpvar_5);\n' + '  uv_1 = ((tmpvar_3 + (\n' + '    (0.2 * dot (((tmpvar_4.xyz * scale1) + bias1), vec3(0.32, 0.49, 0.29)))\n' + '   * \n' + '    (tmpvar_3 * tmpvar_6)\n' + '  )) - 0.5);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = ((uv_1 * texsize.xy) * _qh.y);\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8.x = (cos((tmpvar_7.y * _qa.x)) * sin(-(tmpvar_7.y)));\n' + '  tmpvar_8.y = (sin(tmpvar_7.x) * cos((tmpvar_7.y * _qa.y)));\n' + '  uv_1 = (uv_1 - ((tmpvar_8 * texsize.zw) * _qg.y));\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_main, uv_1).xyz;\n' + '  crisp_2 = tmpvar_9;\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = ((crisp_2 * 0.996) - 0.006);\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2.x = (1.0 - uv.x);\n' + '  tmpvar_2.y = uv.y;\n' + '   vec3 tmpvar_3;\n' + '  tmpvar_3 = vec3((texture2D (sampler_main, uv).x + texture2D (sampler_main, tmpvar_2).x));\n' + '  ret_1 = tmpvar_3;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_blur3, uv);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur1, tmpvar_2);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_blur3, tmpvar_2);\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = (((uv - 0.5) * (1.0 - \n' + '    ((tmpvar_4.xyz * scale1) + bias1)\n' + '  .zzz).xy) + 0.5);\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = pow (texture2D (sampler_main, tmpvar_8).zzz, vec3(0.5, 0.5, 0.5));\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = (ret_1 + clamp ((tmpvar_9 * \n' + '    (1.0 - (ret_1.x * 2.0))\n' + '  ), 0.0, 1.0));\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_blur1, tmpvar_8);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (tmpvar_10 + clamp ((\n' + '    pow (((tmpvar_11.xyz * scale1) + bias1).zzz, vec3(0.5, 0.5, 0.5))\n' + '   * \n' + '    (1.0 - (tmpvar_10.x * 2.0))\n' + '  ), 0.0, 1.0));\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13.w = 0.0;\n' + '  tmpvar_13.xyz = mix ((vec3((\n' + '    ((tmpvar_4.xyz * scale1) + bias1)\n' + '  .x + \n' + '    ((tmpvar_5.xyz * scale3) + bias3)\n' + '  .x)) + (\n' + '    ((tmpvar_6.xyz * scale1) + bias1)\n' + '  .x + \n' + '    ((tmpvar_7.xyz * scale3) + bias3)\n' + '  .x)), tmpvar_12, tmpvar_12);\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = uv.x;\n' + '  tmpvar_14.y = (1.0 - uv.y);\n' + '   vec2 P_15;\n' + '  P_15 = (1.0 - uv);\n' + '   vec3 tmpvar_16;\n' + '  tmpvar_16 = pow ((texture2D (sampler_main, tmpvar_14).yyy + texture2D (sampler_main, P_15).yyy), vec3(0.6, 0.95, 5.0));\n' + '  ret_1 = (pow (tmpvar_13, (0.5 + \n' + '    (4.0 * roam_cos)\n' + '  )).xyz + tmpvar_16);\n' + '  ret_1 = (1.0 - exp((-2.0 * ret_1)));\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17.w = 1.0;\n' + '  tmpvar_17.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_17;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('index = rand(32);\n' + 'index2 = rand(32);'),
	'frame_eqs_str' : ('dec_med = pow (0.7, 30/fps);\n' + 'dec_slow = pow (0.9, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, -.5+avg+peak) * above (time, t0+.1);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %64;\n' + 'index2 = (index2 + is_beat*bnot(index))%4;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q24 = is_beat;\n' + 'q29 = 2 * (index2%2-.5);\n' + 'q25 = min(1,q22/2);\n' + 'k1 =  is_beat*equal(index%4,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'rott = p2 * 3.1416/4;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'q26 = (8+index2*8);\n' + 'q27 = index;\n' + 'q28 = index2;\n' + 'trot = index*6.28/4;\n' + 'q5 = cos(trot);\n' + 'q6 = sin(trot);\n' + 'q7 = -q6;\n' + 'q8 = q5;\n' + 'q29= sin(time/4);\n' + 'wave_mystery = q29/2;\n' + 'q30 = .03*(index%32)/32;\n' + 'monitor = q30;'),
	'pixel_eqs_str' : ('zoom = 1 +.02*rad;'),
};

return pmap;
});
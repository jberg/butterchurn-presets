define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.229,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 0.99967,
		ob_r : 1.0,
		sy : 0.9999,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.19788,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 0.5,
		echo_zoom : 2.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.004,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.7,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.2,
		decay : 0.98,
		wave_a : 1.136,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 0.5,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.dist = 0;
m.mult = 0;
m.du = 0;
m.dv = 0;
m.ang2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.mv_g = (m.mv_g+(0.2*((0.60*Math.sin((0.835*m.time)))+(0.40*Math.sin((1.081*m.time))))));
m.mv_b = (m.mv_b+(0.2*((0.60*Math.sin((0.814*m.time)))+(0.40*Math.sin((1.011*m.time))))));
m.q1 = (((m.cx*2)-1)+(0.6*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.294*m.time))))));
m.q2 = (((m.cy*2)-1)+(0.6*((0.60*Math.sin((0.393*m.time)))+(0.40*Math.sin((0.223*m.time))))));
m.ob_r = (1-(0.4*Math.abs(m.q1)));
m.ob_g = (0.3*Math.abs(m.q2));
m.ob_b = (0.4*Math.abs(m.q1));
m.wave_x = ((1-Math.abs(m.q2))-0.05);
m.wave_y = ((1-Math.abs(m.q1))-0.06);
m.wave_r = (m.wave_r+(0.4*((0.60*Math.sin((0.514*m.time)))+(0.40*Math.sin((1.211*m.time))))));
m.wave_b = (m.wave_b+(0.4*((0.60*Math.sin((0.714*m.time)))+(0.40*Math.sin(m.q2)))));
m.wave_g = (m.wave_g+(0.4*((0.60*Math.sin((10*m.q1)))+(0.40*Math.sin((10*m.q2))))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.du = (((m.x*2)-1)-m.q1);
m.dv = (((m.y*2)-1)-m.q2);
m.dist = sqrt(((m.du*m.du)+(m.dv*m.dv)));
m.ang2 = (Math.atan2(m.du, m.dv)+(m.time*0.15));
m.mult = (0.6*Math.sin((m.dist*0.05)));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.6,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.89152,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.yang = 0;
m.q3 = 0;
m.xang = 0;
m.k1 = 0;
m.k2 = 0;
m.t_abs = 0;
m.ampl = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.t_rel = 0;
m.t1 = 0;
m.t1 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t2 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t3 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t4 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t5 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t6 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t7 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t8 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.time-Math.floor(m.time));
		return m;
	},
		'point_eqs' : function(m) {
m.t_abs = (m.sample*3);
m.t_rel = (m.sample-div(m.time,5));
m.ampl = div((2*m.t_abs),2);
m.k1 = Math.sin(div(m.time,13));
m.k2 = Math.sin(div(m.time,12));
m.ox = ((m.ampl*Math.sin((m.t_abs*(31+(5*m.k1)))))+((Math.sin(div(m.time,25))*(1-m.t_abs))*0.4));
m.oy = (m.ampl*Math.cos((m.t_abs*(31+(5*m.k2)))));
m.oz = -1;
m.r = sqr(Math.sin((m.t_rel*3.4)));
m.g = sqr(Math.sin(m.t_rel));
m.b = sqr(Math.cos((m.t_rel*1.8)));
m.a = ((0.1*Math.sin((m.t_abs*3)))+((0.6*m.q3)*below(Math.abs(((1-m.t_abs)-m.t1)), 0.3)));
m.xang = div(m.time,9.5);
m.yang = div((0*m.time),7);
m.zang = div(-m.time,22);
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
m.oz = (m.oz-6);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : ('t1 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't2 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't3 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't4 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't5 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't6 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't7 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't8 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;'),
		'frame_eqs_str' : ('t1 = time - int (time);'),
		'point_eqs_str' : ('t_abs = sample*3;\n' + 't_rel = sample-time/5;\n' + 'ampl = 2*t_abs/2 ;\n' + 'k1=sin(time/13);\n' + 'k2=sin(time/12);\n' + 'ox = ampl*sin (t_abs*(31+5*k1)) + sin(time/25)*(1-t_abs)*0.4  ;\n' + 'oy = ampl*cos (t_abs*(31+5*k2));\n' + 'oz = -1  ;\n' + 'r = sqr(sin(t_rel*3.4));\n' + 'g = sqr(sin(t_rel));\n' + 'b = sqr (cos(t_rel*1.8));\n' + 'a=0.1*(sin(t_abs*3))+ 0.6*q3*below (abs(1-t_abs-t1 ),0.3);\n' + 'xang = time/9.5;\n' + 'yang = 0*time/7;\n' + 'zang = -time/22;\n' + 'fov = 0.5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = oz - 6;\n' + 'x = ox*fov/oz +0.5;\n' + 'y = oy*fov/oz + 0.5;'),

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
m.t1 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t2 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t3 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t4 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t5 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t6 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t7 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t8 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
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
m.ha = ifcond(m.swi, (1-(2*Math.floor(rand(2)))), m.ha);
m.hb = ifcond(m.swi, (1-(2*Math.floor(rand(2)))), m.hb);
m.hc = ifcond(m.swi, (1-(2*Math.floor(rand(2)))), m.hc);
m.hd = ifcond(m.swi, (1-(2*Math.floor(rand(2)))), m.hd);
m.he = ifcond(m.swi, (1-(2*Math.floor(rand(2)))), m.he);
m.hf = ifcond(m.swi, (1-(2*Math.floor(rand(2)))), m.hf);
m.hg = ifcond(m.swi, (1-(2*Math.floor(rand(2)))), m.hg);
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
		'init_eqs_str' : ('t1 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't2 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't3 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't4 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't5 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't6 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't7 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't8 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;'),
		'frame_eqs_str' : ('tm = time*.1;\n' + 't1 = t1*sin(tm*t4) + (1-t1)*sin(tm*t7);\n' + 't2 = t2*sin(tm*t5) + (1-t2)*sin(tm*t8);\n' + 't3 = t3*sin(tm*t6) + (1-t3)*sin(tm*1);\n' + 'tic = min(time - tin,1);\n' + 'tin = time;\n' + 'tva = (tic*q1*.5);\n' + 'tvb = (tic*q2*.5);\n' + 'tvc = (tic*q3*.5);\n' + 'q1 = tva;\n' + 'q2 = tvb;\n' + 'q3 = tvc;\n' + 'sz = .5;\n' + 'len = q4;\n' + 't4 = len;'),
		'point_eqs_str' : ('ang = 0;\n' + 'len = t4;\n' + 'mad = .6;\n' + 'it = if(above(sample,0),(it+equal(lev,7)),1);\n' + 'ita = (ita + 1)*above(sample,0);\n' + 'mod = if(equal(it%2,0),1,  if(equal((it+1)%4,0),2,  if(equal((it+3)%8,0),3,  if(equal((it+7)%16,0),4,  if(equal((it+15)%32,0),5,  if(equal((it+31)%64,0),6,  if(equal((it+63)%128,0),7,7)  ))))));\n' + 'sw = sw - 1;\n' + 'sw = if(equal(lev,7),mod,sw)*above(sample,0);\n' + 'lev = if(above(sample,0),if(above(sw,0),lev-1,lev+1),7);\n' + 'a = lev*.1*1.46;\n' + 'ar = if(above(sample,0),ar,1);\n' + 'ar = if(equal(lev,0),ar*-1,ar);\n' + 'br = if(above(sample,0),br,1);\n' + 'br = if(equal(lev,1),br*-1,br);\n' + 'cr = if(above(sample,0),cr,1);\n' + 'cr = if(equal(lev,2),cr*-1,cr);\n' + 'dr = if(above(sample,0),dr,1);\n' + 'dr = if(equal(lev,3),dr*-1,dr);\n' + 'er = if(above(sample,0),er,1);\n' + 'er = if(equal(lev,4),er*-1,er);\n' + 'fr = if(above(sample,0),fr,1);\n' + 'fr = if(equal(lev,5),fr*-1,fr);\n' + 'gr = if(above(sample,0),gr,1);\n' + 'gr = if(equal(lev,6),gr*-1,gr);\n' + 'mlev = lev*above(sample,0);\n' + 'swi = equal(q4,0)*equal(sample,0);\n' + 'ha = if(swi,1-2*int(rand(2)),ha);\n' + 'hb = if(swi,1-2*int(rand(2)),hb);\n' + 'hc = if(swi,1-2*int(rand(2)),hc);\n' + 'hd = if(swi,1-2*int(rand(2)),hd);\n' + 'he = if(swi,1-2*int(rand(2)),he);\n' + 'hf = if(swi,1-2*int(rand(2)),hf);\n' + 'hg = if(swi,1-2*int(rand(2)),hg);\n' + 'aang = if(above(sample,0),aang,aang + (q1*.8 + q2*.1 + q3*.1)*ha*1);\n' + 'bang = if(above(sample,0),bang,bang + (q1*.57 + q2*.33 + q3*.1)*hb*1.33);\n' + 'cang = if(above(sample,0),cang,cang + (q1*.33 + q2*.57 + q3*.1)*hc*1.67);\n' + 'dang = if(above(sample,0),dang,dang + (q1*.1 + q2*.8 + q3*.1)*hd*2);\n' + 'eang = if(above(sample,0),eang,eang + (q1*.1 + q2*.57 + q3*.33)*he*2.33);\n' + 'fang = if(above(sample,0),fang,fang + (q1*.1 + q2*.33 + q3*.57)*hf*2.67);\n' + 'gang = if(above(sample,0),gang,gang + (q1*.1 + q2*.1 + q3*.8)*hg*3);\n' + 'aang = 1.57;\n' + 'bang = 1.57;\n' + 'cang = 1.57;\n' + 'dang = 1.57;\n' + 'eang = 1.57;\n' + 'fang = 1.57;\n' + 'gang = 1.57;\n' + 'oz = 0;\n' + 'len = len*mad;\n' + 'ox = above(lev,0)*sin(aang)*len*ar;\n' + 'oy = above(lev,0)*cos(aang)*len;\n' + 'an = (ar*aang + br*bang)*br;\n' + 'len = len*mad;\n' + 'oy = oy + above(lev,1)*sin(an)*len*br;\n' + 'oz = oz + above(lev,1)*cos(an)*len;\n' + 'an = (ar*aang + br*bang + cr*cang)*cr;\n' + 'len = len*mad;\n' + 'ox = ox + above(lev,2)*sin(an)*len*cr;\n' + 'oz = oz + above(lev,2)*cos(an)*len;\n' + 'an = (ar*aang + br*bang + cr*cang + dr*dang)*dr;\n' + 'len = len*mad;\n' + 'ox = ox + above(lev,3)*sin(an)*len*dr;\n' + 'oy = oy + above(lev,3)*cos(an)*len;\n' + 'an = (ar*aang + br*bang + cr*cang + dr*dang + er*eang)*er;\n' + 'len = len*mad;\n' + 'ox = ox + above(lev,4)*sin(an)*len*er;\n' + 'oz = oz + above(lev,4)*cos(an)*len;\n' + 'an = (ar*aang + br*bang + cr*cang + dr*dang + er*eang + fr*fang)*fr;\n' + 'len = len*mad;\n' + 'ox = ox + above(lev,5)*sin(an)*len*fr;\n' + 'oz = oz + above(lev,5)*cos(an)*len;\n' + 'an = (ar*aang + br*bang + cr*cang + dr*dang + er*eang + fr*fang + gr*gang)*gr;\n' + 'len = len*mad;\n' + 'oy = oy + above(lev,6)*sin(an)*len*gr;\n' + 'ox = ox + above(lev,6)*cos(an)*len;\n' + 'xang = time*1.132;\n' + 'xang = q5;\n' + 'yang = time*1.153;\n' + 'yang = q6;\n' + 'zang = time*1.110;\n' + 'zang = q7 + 1.57;\n' + 'fov = .5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = oz - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

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

m.t1 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t2 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t3 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t4 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t5 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t6 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t7 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
m.t8 = (1+(((Math.floor(rand(101))*0.01)-(Math.floor(rand(101))*0.01))*0.3));
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : ('t1 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't2 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't3 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't4 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't5 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't6 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't7 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;\n' + 't8 = 1 + (int(rand(101))*.01 - int(rand(101))*.01)*.3;'),
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
			usedots : 1.0,
			spectrum : 1.0,
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
			b : 1.0,
			tex_ang : 1.25664,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 3.07268,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.02705,
			x : 0.8,
			y : 0.5,
			ang : 1.5708,
			sides : 12.0,
			border_r : 1.0,
			num_inst : 92.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.yang = 0;
m.xang = 0;
m.k1 = 0;
m.k2 = 0;
m.t_abs = 0;
m.ampl = 0;
m.ox = 0;
m.sample = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.t_rel = 0;
m.t1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.time-Math.floor(m.time));
m.sample = div(m.instance,m.num_inst);
m.t_abs = (m.sample*3);
m.t_rel = (m.sample-div(m.time,5));
m.ampl = div((2*m.t_abs),2);
m.k1 = Math.sin(div(m.time,13));
m.k2 = Math.sin(div(m.time,12));
m.ox = ((m.ampl*Math.sin((m.t_abs*(31+(5*m.k1)))))+((Math.sin(div(m.time,25))*(1-m.t_abs))*0.4));
m.oy = (m.ampl*Math.cos((m.t_abs*(31+(5*m.k2)))));
m.oz = -1;
m.r = sqr(Math.sin((m.t_rel*3.4)));
m.g = sqr(Math.sin(m.t_rel));
m.b = sqr(Math.cos((m.t_rel*1.8)));
m.xang = div(m.time,9.5);
m.yang = div((0*m.time),7);
m.zang = div(-m.time,22);
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
m.oz = (m.oz-6);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
m.a = (div(1,m.mz)*0.5);
m.rad = (div(1,m.mz)*0.005);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = time - int (time);\n' + 'sample = instance/num_inst;\n' + 't_abs = sample*3;\n' + 't_rel = sample-time/5;\n' + 'ampl = 2*t_abs/2 ;\n' + 'k1=sin(time/13);\n' + 'k2=sin(time/12);\n' + 'ox = ampl*sin (t_abs*(31+5*k1)) + sin(time/25)*(1-t_abs)*0.4  ;\n' + 'oy = ampl*cos (t_abs*(31+5*k2));\n' + 'oz = -1  ;\n' + 'r = sqr(sin(t_rel*3.4));\n' + 'g = sqr(sin(t_rel));\n' + 'b = sqr (cos(t_rel*1.8));\n' + 'xang = time/9.5;\n' + 'yang = 0*time/7;\n' + 'zang = -time/22;\n' + 'fov = 0.5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = oz - 6;\n' + 'x = ox*fov/oz +0.5;\n' + 'y = oy*fov/oz + 0.5;\n' + 'a=1/mz*.5;\n' + 'rad=1/mz*.005;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.49981,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.6,
			r : 1.0,
			border_g : 0.5,
			rad : 1.99863,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 63.0,
			border_r : 0.5,
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
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.49981,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.27319,
			x : 0.123,
			y : 0.0,
			ang : 0.0,
			sides : 63.0,
			border_r : 0.5,
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
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.49981,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.54822,
			x : 0.5,
			y : 1.0,
			ang : 0.0,
			sides : 63.0,
			border_r : 0.5,
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
	'warp' : ('shader_body {\n' + '   vec2 my_uv_1;\n' + '   float dy_2;\n' + '   float dx_3;\n' + '   vec3 ret_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (texsize.zw * 12.0);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = ((uv + (vec2(1.0, 0.0) * tmpvar_5)) - floor((uv + \n' + '    (vec2(1.0, 0.0) * tmpvar_5)\n' + '  )));\n' + '  tmpvar_6 = texture2D (sampler_blur2, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = ((uv - (vec2(1.0, 0.0) * tmpvar_5)) - floor((uv - \n' + '    (vec2(1.0, 0.0) * tmpvar_5)\n' + '  )));\n' + '  tmpvar_8 = texture2D (sampler_blur2, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = ((uv + (vec2(0.0, 1.0) * tmpvar_5)) - floor((uv + \n' + '    (vec2(0.0, 1.0) * tmpvar_5)\n' + '  )));\n' + '  tmpvar_10 = texture2D (sampler_blur2, P_11);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = ((uv - (vec2(0.0, 1.0) * tmpvar_5)) - floor((uv - \n' + '    (vec2(0.0, 1.0) * tmpvar_5)\n' + '  )));\n' + '  tmpvar_12 = texture2D (sampler_blur2, P_13);\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = (((tmpvar_6.xyz * scale2) + bias2) - ((tmpvar_8.xyz * scale2) + bias2)).y;\n' + '  tmpvar_14.y = (((tmpvar_10.xyz * scale2) + bias2) - ((tmpvar_12.xyz * scale2) + bias2)).y;\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15 = (uv - (tmpvar_14 * 0.08));\n' + '   vec4 tmpvar_16;\n' + '   vec2 P_17;\n' + '  P_17 = (tmpvar_15 - floor(tmpvar_15));\n' + '  tmpvar_16 = texture2D (sampler_fc_main, P_17);\n' + '  ret_4.y = tmpvar_16.y;\n' + '   vec4 tmpvar_18;\n' + '   vec2 P_19;\n' + '  P_19 = (tmpvar_15 - floor(tmpvar_15));\n' + '  tmpvar_18 = texture2D (sampler_blur1, P_19);\n' + '  ret_4.y = (ret_4.y + ((\n' + '    (ret_4.y - ((tmpvar_18.xyz * scale1) + bias1).y)\n' + '   * 0.125) + 0.02));\n' + '   vec4 tmpvar_20;\n' + '   vec2 P_21;\n' + '  P_21 = (uv + vec2(0.01, 0.0));\n' + '  tmpvar_20 = texture2D (sampler_blur2, P_21);\n' + '   vec4 tmpvar_22;\n' + '   vec2 P_23;\n' + '  P_23 = (uv - vec2(0.01, 0.0));\n' + '  tmpvar_22 = texture2D (sampler_blur2, P_23);\n' + '  dx_3 = (((\n' + '    ((tmpvar_20.xyz * scale2) + bias2)\n' + '   - \n' + '    ((tmpvar_22.xyz * scale2) + bias2)\n' + '  ).x * 1280.0) * texsize.z);\n' + '   vec4 tmpvar_24;\n' + '   vec2 P_25;\n' + '  P_25 = (uv + vec2(0.0, 0.01));\n' + '  tmpvar_24 = texture2D (sampler_blur2, P_25);\n' + '   vec4 tmpvar_26;\n' + '   vec2 P_27;\n' + '  P_27 = (uv - vec2(0.0, 0.01));\n' + '  tmpvar_26 = texture2D (sampler_blur2, P_27);\n' + '  dy_2 = (((\n' + '    ((tmpvar_24.xyz * scale2) + bias2)\n' + '   - \n' + '    ((tmpvar_26.xyz * scale2) + bias2)\n' + '  ).x * 1024.0) * texsize.w);\n' + '   vec2 tmpvar_28;\n' + '  tmpvar_28.x = dx_3;\n' + '  tmpvar_28.y = dy_2;\n' + '  my_uv_1 = (uv + (tmpvar_28 * 0.01));\n' + '   vec4 tmpvar_29;\n' + '  tmpvar_29 = texture2D (sampler_fw_main, my_uv_1);\n' + '  ret_4.x = tmpvar_29.x;\n' + '   vec4 tmpvar_30;\n' + '  tmpvar_30 = texture2D (sampler_blur3, uv);\n' + '  ret_4.x = (ret_4.x + ((\n' + '    (ret_4.x - ((tmpvar_30.xyz * scale3) + bias3).x)\n' + '   - 0.02) * 0.2));\n' + '   vec2 tmpvar_31;\n' + '  tmpvar_31.x = dy_2;\n' + '  tmpvar_31.y = -(dx_3);\n' + '  my_uv_1 = (uv - (tmpvar_31 * 0.04));\n' + '   vec4 tmpvar_32;\n' + '  tmpvar_32 = texture2D (sampler_fw_main, my_uv_1);\n' + '  ret_4.z = tmpvar_32.z;\n' + '   vec4 tmpvar_33;\n' + '  tmpvar_33 = texture2D (sampler_blur1, uv);\n' + '  ret_4.z = (ret_4.z + (ret_4.z - (\n' + '    (tmpvar_33.xyz * scale1)\n' + '   + bias1).z));\n' + '  ret_4.z = (ret_4.z * (0.9 * (\n' + '    (ret_4.x + (ret_4.y * 0.64))\n' + '   - 1.0)));\n' + '  ret_4.z = (ret_4.z + 0.02);\n' + '   vec4 tmpvar_34;\n' + '  tmpvar_34.w = 1.0;\n' + '  tmpvar_34.xyz = ret_4;\n' + '  vec4 ret4 = tmpvar_34;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 fix_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (uv - _qa.xy);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (uv - _qa.yx);\n' + '   float tmpvar_5;\n' + '   float tmpvar_6;\n' + '  tmpvar_6 = (min (abs(\n' + '    (tmpvar_4.x / tmpvar_4.y)\n' + '  ), 1.0) / max (abs(\n' + '    (tmpvar_4.x / tmpvar_4.y)\n' + '  ), 1.0));\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (tmpvar_6 * tmpvar_6);\n' + '  tmpvar_7 = (((\n' + '    ((((\n' + '      ((((-0.01213232 * tmpvar_7) + 0.05368138) * tmpvar_7) - 0.1173503)\n' + '     * tmpvar_7) + 0.1938925) * tmpvar_7) - 0.3326756)\n' + '   * tmpvar_7) + 0.9999793) * tmpvar_6);\n' + '  tmpvar_7 = (tmpvar_7 + (float(\n' + '    (abs((tmpvar_4.x / tmpvar_4.y)) > 1.0)\n' + '  ) * (\n' + '    (tmpvar_7 * -2.0)\n' + '   + 1.570796)));\n' + '  tmpvar_5 = (tmpvar_7 * sign((tmpvar_4.x / tmpvar_4.y)));\n' + '  if ((abs(tmpvar_4.y) > (1e-08 * abs(tmpvar_4.x)))) {\n' + '    if ((tmpvar_4.y < 0.0)) {\n' + '      if ((tmpvar_4.x >= 0.0)) {\n' + '        tmpvar_5 += 3.141593;\n' + '      } else {\n' + '        tmpvar_5 = (tmpvar_5 - 3.141593);\n' + '      };\n' + '    };\n' + '  } else {\n' + '    tmpvar_5 = (sign(tmpvar_4.x) * 1.570796);\n' + '  };\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_blur1, uv);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = fract(uv);\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_main, tmpvar_9).xyz;\n' + '  fix_1 = tmpvar_10;\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = (((fix_1 - \n' + '    ((tmpvar_8.xyz * scale1) + bias1)\n' + '  ) - sin(time)) * (fix_1 / (1.0 - \n' + '    cos(((tmpvar_5 - (12.0 * \n' + '      sqrt(dot (tmpvar_3, tmpvar_3))\n' + '    )) - ((0.2 * _qc.z) - time)))\n' + '  )).x);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (1.0 - tmpvar_11);\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = uv.x;\n' + '  tmpvar_13.y = (uv.y * 0.75);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_main, tmpvar_13);\n' + '  ret_2 = ((tmpvar_14.xyz * tmpvar_12) + (0.55 * tmpvar_11));\n' + '   vec3 tmpvar_15;\n' + '  tmpvar_15 = mix (ret_2, tmpvar_12, vec3((1.5 * clamp (\n' + '    dot (tmpvar_11, tmpvar_12)\n' + '  , 0.0, 1.0))));\n' + '  ret_2 = tmpvar_15;\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = tmpvar_15;\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('mv_g = mv_g + 0.2*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );\n' + 'mv_b = mv_b + 0.2*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );\n' + 'q1 = (cx*2-1) + 0.6*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );\n' + 'q2 = (cy*2-1) + 0.6*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );\n' + 'ob_r = 1- 0.4*abs(q1);\n' + 'ob_g = 0.3*abs(q2);\n' + 'ob_b = 0.4*abs(q1);\n' + 'wave_x = 1-abs(q2)-0.05;\n' + 'wave_y = 1-abs(q1)-0.06;\n' + 'wave_r = wave_r + 0.4*( 0.60*sin(0.514*time) + 0.40*sin(1.211*time) );\n' + 'wave_b = wave_b + 0.4*( 0.60*sin(0.714*time) + 0.40*sin(q2) );\n' + 'wave_g = wave_g + 0.4*( 0.60*sin(10*q1) + 0.40*sin(10*q2) );'),
	'pixel_eqs_str' : ('du = (x*2-1) - q1;\n' + 'dv = (y*2-1) - q2;\n' + 'dist = sqrt(du*du+dv*dv);\n' + 'ang2 = atan2(du,dv) + time*0.15;\n' + 'mult = 0.6*sin(dist*0.05);'),
};

return pmap;
});
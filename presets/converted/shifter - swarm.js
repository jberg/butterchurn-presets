define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.7,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 9.0,
		wave_scale : 1.285751,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.006596,
		ob_size : 0.005,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99951,
		solarize : 1.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.05,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.4,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 4.099998,
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
m.q2 = 0;
m.tu = 0;
m.q3 = 0;
m.su = 0;
m.q4 = 0;
m.hvr = 0;
m.q5 = 0;
m.q6 = 0;
m.h = 0;
m.tmpa = 0;
m.tmpb = 0;
m.l = 0;
m.med = 0;
m.tic = 0;
m.med_att = 0;
m.tb = 0;
m.sb = 0;
m.s = 0;
m.hvb = 0;
m.v = 0;
m.tin = 0;
m.hvg = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.tic = (m.time-m.tin);
m.tic = m.tic;
m.tin = m.time;
m.v = (m.tic*(((((m.bass_att+m.med_att)+m.treb_att)*0.3333)*2)+((div(1,m.tic)-2)*m.v)));
m.sb = (m.tic*((m.bass*4)+((div(1,m.tic)-4)*m.sb)));
m.su = (m.tic*(((m.med*0.5)+((m.treb*0.5)*4))+((div(1,m.tic)-4)*m.su)));
m.tb = ((m.tb+(m.tic*m.sb))*below(m.tb, 100000));
m.tu = ((m.tu+(m.tic*m.su))*below(m.tu, 100000));
m.monitor = m.tu;
m.q1 = ((m.v*0.2)+0.25);
m.q2 = m.tb;
m.q3 = m.tu;
m.q4 = (((5*Math.sin((m.time*0.145)))+(3*Math.cos((m.time*0.115))))*0.1);
m.q5 = pow((m.v*0.5), 2);
m.q5 = 0.15;
m.zoom = -0.98;
m.q6 = 40;
m.h = (m.time*0.05);
m.h = (m.h-Math.floor(m.h));
m.l = 1;
m.s = 1;
m.tmpb = ifcond(below(m.l, 0.5), (m.l*(1+m.s)), ((m.l+m.s)-(m.s*m.l)));
m.tmpa = ((2*m.l)-m.tmpb);
m.hvr = (m.h+0.333333);
m.hvr = ifcond(below(m.hvr, 0), (m.hvr+1), ifcond(above(m.hvr, 1), (m.hvr-1), m.hvr));
m.hvg = m.h;
m.hvg = ifcond(below(m.hvg, 0), (m.hvg+1), ifcond(above(m.hvg, 1), (m.hvg-1), m.hvg));
m.hvb = (m.h-0.333333);
m.hvb = ifcond(below(m.hvb, 0), (m.hvb+1), ifcond(above(m.hvb, 1), (m.hvb-1), m.hvb));
m.ob_r = ifcond(below((6*m.hvr), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvr)), ifcond(below((2*m.hvr), 1), m.tmpb, ifcond(below((m.hvr*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvr))*6)), m.tmpa)));
m.ob_g = ifcond(below((6*m.hvg), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvg)), ifcond(below((2*m.hvg), 1), m.tmpb, ifcond(below((m.hvg*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvg))*6)), m.tmpa)));
m.ob_b = ifcond(below((6*m.hvb), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvb)), ifcond(below((2*m.hvb), 1), m.tmpb, ifcond(below((m.hvb*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvb))*6)), m.tmpa)));
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
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.mod = 0;
m.q4 = 0;
m.t7 = 0;
m.hvr = 0;
m.t8 = 0;
m.h = 0;
m.tmpa = 0;
m.it = 0;
m.tmpb = 0;
m.l = 0;
m.s = 0;
m.hvb = 0;
m.hvg = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t1 = (0.7+((rand(100)*0.01)*0.6));
m.t2 = (0.7+((rand(100)*0.01)*0.6));
m.t3 = (0.7+((rand(100)*0.01)*0.6));
m.t4 = (0.7+((rand(100)*0.01)*0.6));
m.t5 = (0.7+((rand(100)*0.01)*0.6));
m.t6 = (0.7+((rand(100)*0.01)*0.6));
m.t7 = (0.7+((rand(100)*0.01)*0.6));
m.t8 = (0.7+((rand(100)*0.01)*0.6));
			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.it = ((m.it+1)*above(m.sample, 0));
m.mod = (((((((equal(m.it, 0)*m.t1)+(equal(m.it, 1)*m.t2))+(equal(m.it, 2)*m.t3))+(equal(m.it, 3)*m.t4))+(equal(m.it, 4)*m.t5))+(equal(m.it, 5)*m.t6))+(equal(m.it, 6)*m.t7));
m.mod = (m.mod+(equal(m.mod, 0)*m.t8));
m.x = (0.5+(m.q1*Math.sin((m.q2*m.mod))));
m.y = (0.5+(m.q1*Math.cos((m.q3*m.mod))));
m.h = (m.q4+(0.1*m.sample));
m.h = (m.h-Math.floor(m.h));
m.l = (0.25+((0.5*rand(101))*0.01));
m.s = (rand(101)*0.01);
m.tmpb = ifcond(below(m.l, 0.5), (m.l*(1+m.s)), ((m.l+m.s)-(m.s*m.l)));
m.tmpa = ((2*m.l)-m.tmpb);
m.hvr = (m.h+0.333333);
m.hvr = ifcond(below(m.hvr, 0), (m.hvr+1), ifcond(above(m.hvr, 1), (m.hvr-1), m.hvr));
m.hvg = m.h;
m.hvg = ifcond(below(m.hvg, 0), (m.hvg+1), ifcond(above(m.hvg, 1), (m.hvg-1), m.hvg));
m.hvb = (m.h-0.333333);
m.hvb = ifcond(below(m.hvb, 0), (m.hvb+1), ifcond(above(m.hvb, 1), (m.hvb-1), m.hvb));
m.r = ifcond(below((6*m.hvr), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvr)), ifcond(below((2*m.hvr), 1), m.tmpb, ifcond(below((m.hvr*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvr))*6)), m.tmpa)));
m.g = ifcond(below((6*m.hvg), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvg)), ifcond(below((2*m.hvg), 1), m.tmpb, ifcond(below((m.hvg*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvg))*6)), m.tmpa)));
m.b = ifcond(below((6*m.hvb), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvb)), ifcond(below((2*m.hvb), 1), m.tmpb, ifcond(below((m.hvb*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvb))*6)), m.tmpa)));
		return m;
	},
		'init_eqs_str' : ('t1 = .7 + rand(100)*.01*.6;\n' + 't2 = .7 + rand(100)*.01*.6;\n' + 't3 = .7 + rand(100)*.01*.6;\n' + 't4 = .7 + rand(100)*.01*.6;\n' + 't5 = .7 + rand(100)*.01*.6;\n' + 't6 = .7 + rand(100)*.01*.6;\n' + 't7 = .7 + rand(100)*.01*.6;\n' + 't8 = .7 + rand(100)*.01*.6;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('it = (it+1)*above(sample,0);\n' + 'mod = equal(it,0)*t1 + equal(it,1)*t2 + equal(it,2)*t3 + equal(it,3)*t4 + equal(it,4)*t5 + equal(it,5)*t6 + equal(it,6)*t7;\n' + 'mod = mod + equal(mod,0)*t8;\n' + 'x = .5 + q1*sin(q2*mod);\n' + 'y = .5 + q1*cos(q3*mod);\n' + 'h = q4 + .1*sample;\n' + 'h = h - int(h);\n' + 'l = .25 + .5*rand(101)*.01;\n' + 's = rand(101)*.01;\n' + 'tmpb = if(below(l,0.5),l*(1+s),(l+s)-(s*l));\n' + 'tmpa = 2*l - tmpb;\n' + 'hvr = h + .333333;\n' + 'hvr = if(below(hvr,0),hvr+1,if(above(hvr,1),hvr-1,hvr));\n' + 'hvg = h;\n' + 'hvg = if(below(hvg,0),hvg+1,if(above(hvg,1),hvg-1,hvg));\n' + 'hvb = h - .333333;\n' + 'hvb = if(below(hvb,0),hvb+1,if(above(hvb,1),hvb-1,hvb));\n' + 'r = if(below(6*hvr,1),tmpa+(tmpb-tmpa)*6*hvr, if(below(2*hvr,1),tmpb, if(below(hvr*3,2),tmpa+(tmpb-tmpa)*(.666666-hvr)*6,tmpa)));\n' + 'g = if(below(6*hvg,1),tmpa+(tmpb-tmpa)*6*hvg, if(below(2*hvg,1),tmpb, if(below(hvg*3,2),tmpa+(tmpb-tmpa)*(.666666-hvg)*6,tmpa)));\n' + 'b = if(below(6*hvb,1),tmpa+(tmpb-tmpa)*6*hvb, if(below(2*hvb,1),tmpb, if(below(hvb*3,2),tmpa+(tmpb-tmpa)*(.666666-hvb)*6,tmpa)));'),

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
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.mod = 0;
m.q4 = 0;
m.t7 = 0;
m.hvr = 0;
m.t8 = 0;
m.h = 0;
m.tmpa = 0;
m.it = 0;
m.tmpb = 0;
m.l = 0;
m.s = 0;
m.hvb = 0;
m.hvg = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t1 = (0.7+((rand(100)*0.01)*0.6));
m.t2 = (0.7+((rand(100)*0.01)*0.6));
m.t3 = (0.7+((rand(100)*0.01)*0.6));
m.t4 = (0.7+((rand(100)*0.01)*0.6));
m.t5 = (0.7+((rand(100)*0.01)*0.6));
m.t6 = (0.7+((rand(100)*0.01)*0.6));
m.t7 = (0.7+((rand(100)*0.01)*0.6));
m.t8 = (0.7+((rand(100)*0.01)*0.6));
			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.it = ((m.it+1)*above(m.sample, 0));
m.mod = (((((((equal(m.it, 0)*m.t1)+(equal(m.it, 1)*m.t2))+(equal(m.it, 2)*m.t3))+(equal(m.it, 3)*m.t4))+(equal(m.it, 4)*m.t5))+(equal(m.it, 5)*m.t6))+(equal(m.it, 6)*m.t7));
m.mod = (m.mod+(equal(m.mod, 0)*m.t8));
m.x = (0.5+(m.q1*Math.sin((m.q2*m.mod))));
m.y = (0.5+(m.q1*Math.cos((m.q3*m.mod))));
m.h = (m.q4+(0.1*m.sample));
m.h = (m.h-Math.floor(m.h));
m.l = (0.25+((0.5*rand(101))*0.01));
m.s = (rand(101)*0.01);
m.tmpb = ifcond(below(m.l, 0.5), (m.l*(1+m.s)), ((m.l+m.s)-(m.s*m.l)));
m.tmpa = ((2*m.l)-m.tmpb);
m.hvr = (m.h+0.333333);
m.hvr = ifcond(below(m.hvr, 0), (m.hvr+1), ifcond(above(m.hvr, 1), (m.hvr-1), m.hvr));
m.hvg = m.h;
m.hvg = ifcond(below(m.hvg, 0), (m.hvg+1), ifcond(above(m.hvg, 1), (m.hvg-1), m.hvg));
m.hvb = (m.h-0.333333);
m.hvb = ifcond(below(m.hvb, 0), (m.hvb+1), ifcond(above(m.hvb, 1), (m.hvb-1), m.hvb));
m.r = ifcond(below((6*m.hvr), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvr)), ifcond(below((2*m.hvr), 1), m.tmpb, ifcond(below((m.hvr*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvr))*6)), m.tmpa)));
m.g = ifcond(below((6*m.hvg), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvg)), ifcond(below((2*m.hvg), 1), m.tmpb, ifcond(below((m.hvg*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvg))*6)), m.tmpa)));
m.b = ifcond(below((6*m.hvb), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvb)), ifcond(below((2*m.hvb), 1), m.tmpb, ifcond(below((m.hvb*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvb))*6)), m.tmpa)));
		return m;
	},
		'init_eqs_str' : ('t1 = .7 + rand(100)*.01*.6;\n' + 't2 = .7 + rand(100)*.01*.6;\n' + 't3 = .7 + rand(100)*.01*.6;\n' + 't4 = .7 + rand(100)*.01*.6;\n' + 't5 = .7 + rand(100)*.01*.6;\n' + 't6 = .7 + rand(100)*.01*.6;\n' + 't7 = .7 + rand(100)*.01*.6;\n' + 't8 = .7 + rand(100)*.01*.6;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('it = (it+1)*above(sample,0);\n' + 'mod = equal(it,0)*t1 + equal(it,1)*t2 + equal(it,2)*t3 + equal(it,3)*t4 + equal(it,4)*t5 + equal(it,5)*t6 + equal(it,6)*t7;\n' + 'mod = mod + equal(mod,0)*t8;\n' + 'x = .5 + q1*sin(q2*mod);\n' + 'y = .5 + q1*cos(q3*mod);\n' + 'h = q4 + .1*sample;\n' + 'h = h - int(h);\n' + 'l = .25 + .5*rand(101)*.01;\n' + 's = rand(101)*.01;\n' + 'tmpb = if(below(l,0.5),l*(1+s),(l+s)-(s*l));\n' + 'tmpa = 2*l - tmpb;\n' + 'hvr = h + .333333;\n' + 'hvr = if(below(hvr,0),hvr+1,if(above(hvr,1),hvr-1,hvr));\n' + 'hvg = h;\n' + 'hvg = if(below(hvg,0),hvg+1,if(above(hvg,1),hvg-1,hvg));\n' + 'hvb = h - .333333;\n' + 'hvb = if(below(hvb,0),hvb+1,if(above(hvb,1),hvb-1,hvb));\n' + 'r = if(below(6*hvr,1),tmpa+(tmpb-tmpa)*6*hvr, if(below(2*hvr,1),tmpb, if(below(hvr*3,2),tmpa+(tmpb-tmpa)*(.666666-hvr)*6,tmpa)));\n' + 'g = if(below(6*hvg,1),tmpa+(tmpb-tmpa)*6*hvg, if(below(2*hvg,1),tmpb, if(below(hvg*3,2),tmpa+(tmpb-tmpa)*(.666666-hvg)*6,tmpa)));\n' + 'b = if(below(6*hvb,1),tmpa+(tmpb-tmpa)*6*hvb, if(below(2*hvb,1),tmpb, if(below(hvb*3,2),tmpa+(tmpb-tmpa)*(.666666-hvb)*6,tmpa)));'),

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
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.mod = 0;
m.q4 = 0;
m.t7 = 0;
m.hvr = 0;
m.t8 = 0;
m.h = 0;
m.tmpa = 0;
m.it = 0;
m.tmpb = 0;
m.l = 0;
m.s = 0;
m.hvb = 0;
m.hvg = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t1 = (0.7+((rand(100)*0.01)*0.6));
m.t2 = (0.7+((rand(100)*0.01)*0.6));
m.t3 = (0.7+((rand(100)*0.01)*0.6));
m.t4 = (0.7+((rand(100)*0.01)*0.6));
m.t5 = (0.7+((rand(100)*0.01)*0.6));
m.t6 = (0.7+((rand(100)*0.01)*0.6));
m.t7 = (0.7+((rand(100)*0.01)*0.6));
m.t8 = (0.7+((rand(100)*0.01)*0.6));
			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.it = ((m.it+1)*above(m.sample, 0));
m.mod = (((((((equal(m.it, 0)*m.t1)+(equal(m.it, 1)*m.t2))+(equal(m.it, 2)*m.t3))+(equal(m.it, 3)*m.t4))+(equal(m.it, 4)*m.t5))+(equal(m.it, 5)*m.t6))+(equal(m.it, 6)*m.t7));
m.mod = (m.mod+(equal(m.mod, 0)*m.t8));
m.x = (0.5+(m.q1*Math.sin((m.q2*m.mod))));
m.y = (0.5+(m.q1*Math.cos((m.q3*m.mod))));
m.h = (m.q4+(0.1*m.sample));
m.h = (m.h-Math.floor(m.h));
m.l = (0.25+((0.5*rand(101))*0.01));
m.s = (rand(101)*0.01);
m.tmpb = ifcond(below(m.l, 0.5), (m.l*(1+m.s)), ((m.l+m.s)-(m.s*m.l)));
m.tmpa = ((2*m.l)-m.tmpb);
m.hvr = (m.h+0.333333);
m.hvr = ifcond(below(m.hvr, 0), (m.hvr+1), ifcond(above(m.hvr, 1), (m.hvr-1), m.hvr));
m.hvg = m.h;
m.hvg = ifcond(below(m.hvg, 0), (m.hvg+1), ifcond(above(m.hvg, 1), (m.hvg-1), m.hvg));
m.hvb = (m.h-0.333333);
m.hvb = ifcond(below(m.hvb, 0), (m.hvb+1), ifcond(above(m.hvb, 1), (m.hvb-1), m.hvb));
m.r = ifcond(below((6*m.hvr), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvr)), ifcond(below((2*m.hvr), 1), m.tmpb, ifcond(below((m.hvr*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvr))*6)), m.tmpa)));
m.g = ifcond(below((6*m.hvg), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvg)), ifcond(below((2*m.hvg), 1), m.tmpb, ifcond(below((m.hvg*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvg))*6)), m.tmpa)));
m.b = ifcond(below((6*m.hvb), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvb)), ifcond(below((2*m.hvb), 1), m.tmpb, ifcond(below((m.hvb*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvb))*6)), m.tmpa)));
		return m;
	},
		'init_eqs_str' : ('t1 = .7 + rand(100)*.01*.6;\n' + 't2 = .7 + rand(100)*.01*.6;\n' + 't3 = .7 + rand(100)*.01*.6;\n' + 't4 = .7 + rand(100)*.01*.6;\n' + 't5 = .7 + rand(100)*.01*.6;\n' + 't6 = .7 + rand(100)*.01*.6;\n' + 't7 = .7 + rand(100)*.01*.6;\n' + 't8 = .7 + rand(100)*.01*.6;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('it = (it+1)*above(sample,0);\n' + 'mod = equal(it,0)*t1 + equal(it,1)*t2 + equal(it,2)*t3 + equal(it,3)*t4 + equal(it,4)*t5 + equal(it,5)*t6 + equal(it,6)*t7;\n' + 'mod = mod + equal(mod,0)*t8;\n' + 'x = .5 + q1*sin(q2*mod);\n' + 'y = .5 + q1*cos(q3*mod);\n' + 'h = q4 + .1*sample;\n' + 'h = h - int(h);\n' + 'l = .25 + .5*rand(101)*.01;\n' + 's = rand(101)*.01;\n' + 'tmpb = if(below(l,0.5),l*(1+s),(l+s)-(s*l));\n' + 'tmpa = 2*l - tmpb;\n' + 'hvr = h + .333333;\n' + 'hvr = if(below(hvr,0),hvr+1,if(above(hvr,1),hvr-1,hvr));\n' + 'hvg = h;\n' + 'hvg = if(below(hvg,0),hvg+1,if(above(hvg,1),hvg-1,hvg));\n' + 'hvb = h - .333333;\n' + 'hvb = if(below(hvb,0),hvb+1,if(above(hvb,1),hvb-1,hvb));\n' + 'r = if(below(6*hvr,1),tmpa+(tmpb-tmpa)*6*hvr, if(below(2*hvr,1),tmpb, if(below(hvr*3,2),tmpa+(tmpb-tmpa)*(.666666-hvr)*6,tmpa)));\n' + 'g = if(below(6*hvg,1),tmpa+(tmpb-tmpa)*6*hvg, if(below(2*hvg,1),tmpb, if(below(hvg*3,2),tmpa+(tmpb-tmpa)*(.666666-hvg)*6,tmpa)));\n' + 'b = if(below(6*hvb,1),tmpa+(tmpb-tmpa)*6*hvb, if(below(2*hvb,1),tmpb, if(below(hvb*3,2),tmpa+(tmpb-tmpa)*(.666666-hvb)*6,tmpa)));'),

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
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.mod = 0;
m.q4 = 0;
m.t7 = 0;
m.hvr = 0;
m.t8 = 0;
m.h = 0;
m.tmpa = 0;
m.it = 0;
m.tmpb = 0;
m.l = 0;
m.s = 0;
m.hvb = 0;
m.hvg = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t1 = (0.7+((rand(100)*0.01)*0.6));
m.t2 = (0.7+((rand(100)*0.01)*0.6));
m.t3 = (0.7+((rand(100)*0.01)*0.6));
m.t4 = (0.7+((rand(100)*0.01)*0.6));
m.t5 = (0.7+((rand(100)*0.01)*0.6));
m.t6 = (0.7+((rand(100)*0.01)*0.6));
m.t7 = (0.7+((rand(100)*0.01)*0.6));
m.t8 = (0.7+((rand(100)*0.01)*0.6));
			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.it = ((m.it+1)*above(m.sample, 0));
m.mod = (((((((equal(m.it, 0)*m.t1)+(equal(m.it, 1)*m.t2))+(equal(m.it, 2)*m.t3))+(equal(m.it, 3)*m.t4))+(equal(m.it, 4)*m.t5))+(equal(m.it, 5)*m.t6))+(equal(m.it, 6)*m.t7));
m.mod = (m.mod+(equal(m.mod, 0)*m.t8));
m.x = (0.5+(m.q1*Math.sin((m.q2*m.mod))));
m.y = (0.5+(m.q1*Math.cos((m.q3*m.mod))));
m.h = (m.q4+(0.1*m.sample));
m.h = (m.h-Math.floor(m.h));
m.l = (0.25+((0.5*rand(101))*0.01));
m.s = (rand(101)*0.01);
m.tmpb = ifcond(below(m.l, 0.5), (m.l*(1+m.s)), ((m.l+m.s)-(m.s*m.l)));
m.tmpa = ((2*m.l)-m.tmpb);
m.hvr = (m.h+0.333333);
m.hvr = ifcond(below(m.hvr, 0), (m.hvr+1), ifcond(above(m.hvr, 1), (m.hvr-1), m.hvr));
m.hvg = m.h;
m.hvg = ifcond(below(m.hvg, 0), (m.hvg+1), ifcond(above(m.hvg, 1), (m.hvg-1), m.hvg));
m.hvb = (m.h-0.333333);
m.hvb = ifcond(below(m.hvb, 0), (m.hvb+1), ifcond(above(m.hvb, 1), (m.hvb-1), m.hvb));
m.r = ifcond(below((6*m.hvr), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvr)), ifcond(below((2*m.hvr), 1), m.tmpb, ifcond(below((m.hvr*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvr))*6)), m.tmpa)));
m.g = ifcond(below((6*m.hvg), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvg)), ifcond(below((2*m.hvg), 1), m.tmpb, ifcond(below((m.hvg*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvg))*6)), m.tmpa)));
m.b = ifcond(below((6*m.hvb), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvb)), ifcond(below((2*m.hvb), 1), m.tmpb, ifcond(below((m.hvb*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvb))*6)), m.tmpa)));
		return m;
	},
		'init_eqs_str' : ('t1 = .7 + rand(100)*.01*.6;\n' + 't2 = .7 + rand(100)*.01*.6;\n' + 't3 = .7 + rand(100)*.01*.6;\n' + 't4 = .7 + rand(100)*.01*.6;\n' + 't5 = .7 + rand(100)*.01*.6;\n' + 't6 = .7 + rand(100)*.01*.6;\n' + 't7 = .7 + rand(100)*.01*.6;\n' + 't8 = .7 + rand(100)*.01*.6;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('it = (it+1)*above(sample,0);\n' + 'mod = equal(it,0)*t1 + equal(it,1)*t2 + equal(it,2)*t3 + equal(it,3)*t4 + equal(it,4)*t5 + equal(it,5)*t6 + equal(it,6)*t7;\n' + 'mod = mod + equal(mod,0)*t8;\n' + 'x = .5 + q1*sin(q2*mod);\n' + 'y = .5 + q1*cos(q3*mod);\n' + 'h = q4 + .1*sample;\n' + 'h = h - int(h);\n' + 'l = .25 + .5*rand(101)*.01;\n' + 's = rand(101)*.01;\n' + 'tmpb = if(below(l,0.5),l*(1+s),(l+s)-(s*l));\n' + 'tmpa = 2*l - tmpb;\n' + 'hvr = h + .333333;\n' + 'hvr = if(below(hvr,0),hvr+1,if(above(hvr,1),hvr-1,hvr));\n' + 'hvg = h;\n' + 'hvg = if(below(hvg,0),hvg+1,if(above(hvg,1),hvg-1,hvg));\n' + 'hvb = h - .333333;\n' + 'hvb = if(below(hvb,0),hvb+1,if(above(hvb,1),hvb-1,hvb));\n' + 'r = if(below(6*hvr,1),tmpa+(tmpb-tmpa)*6*hvr, if(below(2*hvr,1),tmpb, if(below(hvr*3,2),tmpa+(tmpb-tmpa)*(.666666-hvr)*6,tmpa)));\n' + 'g = if(below(6*hvg,1),tmpa+(tmpb-tmpa)*6*hvg, if(below(2*hvg,1),tmpb, if(below(hvg*3,2),tmpa+(tmpb-tmpa)*(.666666-hvg)*6,tmpa)));\n' + 'b = if(below(6*hvb,1),tmpa+(tmpb-tmpa)*6*hvb, if(below(2*hvb,1),tmpb, if(below(hvb*3,2),tmpa+(tmpb-tmpa)*(.666666-hvb)*6,tmpa)));'),

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
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.00015,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.hvr = 0;
m.q5 = 0;
m.q6 = 0;
m.h = 0;
m.tmpa = 0;
m.tmpb = 0;
m.l = 0;
m.s = 0;
m.hvb = 0;
m.hvg = 0;
m.t1 = 0;
m.t2 = 0;
m.t1 = (0.7+((rand(101)*0.01)*0.6));
m.t2 = (0.7+((rand(101)*0.01)*0.6));
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(m.q1*Math.sin((m.q2*m.t1))));
m.y = (0.5+(m.q1*Math.cos((m.q3*m.t2))));
m.rad = m.q5;
m.ang = -m.time;
m.sides = m.q6;
m.h = m.q4;
m.h = (m.h-Math.floor(m.h));
m.l = 0.5;
m.s = 1;
m.tmpb = ifcond(below(m.l, 0.5), (m.l*(1+m.s)), ((m.l+m.s)-(m.s*m.l)));
m.tmpa = ((2*m.l)-m.tmpb);
m.hvr = (m.h+0.333333);
m.hvr = ifcond(below(m.hvr, 0), (m.hvr+1), ifcond(above(m.hvr, 1), (m.hvr-1), m.hvr));
m.hvg = m.h;
m.hvg = ifcond(below(m.hvg, 0), (m.hvg+1), ifcond(above(m.hvg, 1), (m.hvg-1), m.hvg));
m.hvb = (m.h-0.333333);
m.hvb = ifcond(below(m.hvb, 0), (m.hvb+1), ifcond(above(m.hvb, 1), (m.hvb-1), m.hvb));
m.r = ifcond(below((6*m.hvr), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvr)), ifcond(below((2*m.hvr), 1), m.tmpb, ifcond(below((m.hvr*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvr))*6)), m.tmpa)));
m.g = ifcond(below((6*m.hvg), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvg)), ifcond(below((2*m.hvg), 1), m.tmpb, ifcond(below((m.hvg*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvg))*6)), m.tmpa)));
m.b = ifcond(below((6*m.hvb), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvb)), ifcond(below((2*m.hvb), 1), m.tmpb, ifcond(below((m.hvb*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvb))*6)), m.tmpa)));
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
		return m;
	},
		'init_eqs_str' : ('t1 = .7 + rand(101)*.01*.6;\n' + 't2 = .7 + rand(101)*.01*.6;'),
		'frame_eqs_str' : ('x = .5 + q1*sin(q2*t1);\n' + 'y = .5 + q1*cos(q3*t2);\n' + 'rad = q5;\n' + 'ang = -time;\n' + 'sides = q6;\n' + 'h = q4;\n' + 'h = h - int(h);\n' + 'l = .5;\n' + 's = 1;\n' + 'tmpb = if(below(l,0.5),l*(1+s),(l+s)-(s*l));\n' + 'tmpa = 2*l - tmpb;\n' + 'hvr = h + .333333;\n' + 'hvr = if(below(hvr,0),hvr+1,if(above(hvr,1),hvr-1,hvr));\n' + 'hvg = h;\n' + 'hvg = if(below(hvg,0),hvg+1,if(above(hvg,1),hvg-1,hvg));\n' + 'hvb = h - .333333;\n' + 'hvb = if(below(hvb,0),hvb+1,if(above(hvb,1),hvb-1,hvb));\n' + 'r = if(below(6*hvr,1),tmpa+(tmpb-tmpa)*6*hvr, if(below(2*hvr,1),tmpb, if(below(hvr*3,2),tmpa+(tmpb-tmpa)*(.666666-hvr)*6,tmpa)));\n' + 'g = if(below(6*hvg,1),tmpa+(tmpb-tmpa)*6*hvg, if(below(2*hvg,1),tmpb, if(below(hvg*3,2),tmpa+(tmpb-tmpa)*(.666666-hvg)*6,tmpa)));\n' + 'b = if(below(6*hvb,1),tmpa+(tmpb-tmpa)*6*hvb, if(below(2*hvb,1),tmpb, if(below(hvb*3,2),tmpa+(tmpb-tmpa)*(.666666-hvb)*6,tmpa)));\n' + 'r2=r;\n' + 'g2=g;\n' + 'b2=b;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.hvr = 0;
m.q5 = 0;
m.q6 = 0;
m.h = 0;
m.tmpa = 0;
m.tmpb = 0;
m.l = 0;
m.s = 0;
m.hvb = 0;
m.hvg = 0;
m.t1 = 0;
m.t2 = 0;
m.t1 = (0.7+((rand(101)*0.01)*0.6));
m.t2 = (0.7+((rand(101)*0.01)*0.6));
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(m.q1*Math.sin((m.q2*m.t1))));
m.y = (0.5+(m.q1*Math.cos((m.q3*m.t2))));
m.rad = m.q5;
m.ang = -m.time;
m.sides = m.q6;
m.h = (m.q4+0.01);
m.h = (m.h-Math.floor(m.h));
m.l = 0.5;
m.s = 1;
m.tmpb = ifcond(below(m.l, 0.5), (m.l*(1+m.s)), ((m.l+m.s)-(m.s*m.l)));
m.tmpa = ((2*m.l)-m.tmpb);
m.hvr = (m.h+0.333333);
m.hvr = ifcond(below(m.hvr, 0), (m.hvr+1), ifcond(above(m.hvr, 1), (m.hvr-1), m.hvr));
m.hvg = m.h;
m.hvg = ifcond(below(m.hvg, 0), (m.hvg+1), ifcond(above(m.hvg, 1), (m.hvg-1), m.hvg));
m.hvb = (m.h-0.333333);
m.hvb = ifcond(below(m.hvb, 0), (m.hvb+1), ifcond(above(m.hvb, 1), (m.hvb-1), m.hvb));
m.r = ifcond(below((6*m.hvr), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvr)), ifcond(below((2*m.hvr), 1), m.tmpb, ifcond(below((m.hvr*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvr))*6)), m.tmpa)));
m.g = ifcond(below((6*m.hvg), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvg)), ifcond(below((2*m.hvg), 1), m.tmpb, ifcond(below((m.hvg*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvg))*6)), m.tmpa)));
m.b = ifcond(below((6*m.hvb), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvb)), ifcond(below((2*m.hvb), 1), m.tmpb, ifcond(below((m.hvb*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvb))*6)), m.tmpa)));
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
		return m;
	},
		'init_eqs_str' : ('t1 = .7 + rand(101)*.01*.6;\n' + 't2 = .7 + rand(101)*.01*.6;'),
		'frame_eqs_str' : ('x = .5 + q1*sin(q2*t1);\n' + 'y = .5 + q1*cos(q3*t2);\n' + 'rad = q5;\n' + 'ang = -time;\n' + 'sides = q6;\n' + 'h = q4 + .01;\n' + 'h = h - int(h);\n' + 'l = .5;\n' + 's = 1;\n' + 'tmpb = if(below(l,0.5),l*(1+s),(l+s)-(s*l));\n' + 'tmpa = 2*l - tmpb;\n' + 'hvr = h + .333333;\n' + 'hvr = if(below(hvr,0),hvr+1,if(above(hvr,1),hvr-1,hvr));\n' + 'hvg = h;\n' + 'hvg = if(below(hvg,0),hvg+1,if(above(hvg,1),hvg-1,hvg));\n' + 'hvb = h - .333333;\n' + 'hvb = if(below(hvb,0),hvb+1,if(above(hvb,1),hvb-1,hvb));\n' + 'r = if(below(6*hvr,1),tmpa+(tmpb-tmpa)*6*hvr, if(below(2*hvr,1),tmpb, if(below(hvr*3,2),tmpa+(tmpb-tmpa)*(.666666-hvr)*6,tmpa)));\n' + 'g = if(below(6*hvg,1),tmpa+(tmpb-tmpa)*6*hvg, if(below(2*hvg,1),tmpb, if(below(hvg*3,2),tmpa+(tmpb-tmpa)*(.666666-hvg)*6,tmpa)));\n' + 'b = if(below(6*hvb,1),tmpa+(tmpb-tmpa)*6*hvb, if(below(2*hvb,1),tmpb, if(below(hvb*3,2),tmpa+(tmpb-tmpa)*(.666666-hvb)*6,tmpa)));\n' + 'r2=r;\n' + 'g2=g;\n' + 'b2=b;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.hvr = 0;
m.q5 = 0;
m.q6 = 0;
m.h = 0;
m.tmpa = 0;
m.tmpb = 0;
m.l = 0;
m.s = 0;
m.hvb = 0;
m.hvg = 0;
m.t1 = 0;
m.t2 = 0;
m.t1 = (0.7+((rand(101)*0.01)*0.6));
m.t2 = (0.7+((rand(101)*0.01)*0.6));
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(m.q1*Math.sin((m.q2*m.t1))));
m.y = (0.5+(m.q1*Math.cos((m.q3*m.t2))));
m.rad = m.q5;
m.ang = -m.time;
m.sides = m.q6;
m.h = (m.q4+0.02);
m.h = (m.h-Math.floor(m.h));
m.l = 0.5;
m.s = 1;
m.tmpb = ifcond(below(m.l, 0.5), (m.l*(1+m.s)), ((m.l+m.s)-(m.s*m.l)));
m.tmpa = ((2*m.l)-m.tmpb);
m.hvr = (m.h+0.333333);
m.hvr = ifcond(below(m.hvr, 0), (m.hvr+1), ifcond(above(m.hvr, 1), (m.hvr-1), m.hvr));
m.hvg = m.h;
m.hvg = ifcond(below(m.hvg, 0), (m.hvg+1), ifcond(above(m.hvg, 1), (m.hvg-1), m.hvg));
m.hvb = (m.h-0.333333);
m.hvb = ifcond(below(m.hvb, 0), (m.hvb+1), ifcond(above(m.hvb, 1), (m.hvb-1), m.hvb));
m.r = ifcond(below((6*m.hvr), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvr)), ifcond(below((2*m.hvr), 1), m.tmpb, ifcond(below((m.hvr*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvr))*6)), m.tmpa)));
m.g = ifcond(below((6*m.hvg), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvg)), ifcond(below((2*m.hvg), 1), m.tmpb, ifcond(below((m.hvg*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvg))*6)), m.tmpa)));
m.b = ifcond(below((6*m.hvb), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvb)), ifcond(below((2*m.hvb), 1), m.tmpb, ifcond(below((m.hvb*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvb))*6)), m.tmpa)));
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
		return m;
	},
		'init_eqs_str' : ('t1 = .7 + rand(101)*.01*.6;\n' + 't2 = .7 + rand(101)*.01*.6;'),
		'frame_eqs_str' : ('x = .5 + q1*sin(q2*t1);\n' + 'y = .5 + q1*cos(q3*t2);\n' + 'rad = q5;\n' + 'ang = -time;\n' + 'sides = q6;\n' + 'h = q4 + .02;\n' + 'h = h - int(h);\n' + 'l = .5;\n' + 's = 1;\n' + 'tmpb = if(below(l,0.5),l*(1+s),(l+s)-(s*l));\n' + 'tmpa = 2*l - tmpb;\n' + 'hvr = h + .333333;\n' + 'hvr = if(below(hvr,0),hvr+1,if(above(hvr,1),hvr-1,hvr));\n' + 'hvg = h;\n' + 'hvg = if(below(hvg,0),hvg+1,if(above(hvg,1),hvg-1,hvg));\n' + 'hvb = h - .333333;\n' + 'hvb = if(below(hvb,0),hvb+1,if(above(hvb,1),hvb-1,hvb));\n' + 'r = if(below(6*hvr,1),tmpa+(tmpb-tmpa)*6*hvr, if(below(2*hvr,1),tmpb, if(below(hvr*3,2),tmpa+(tmpb-tmpa)*(.666666-hvr)*6,tmpa)));\n' + 'g = if(below(6*hvg,1),tmpa+(tmpb-tmpa)*6*hvg, if(below(2*hvg,1),tmpb, if(below(hvg*3,2),tmpa+(tmpb-tmpa)*(.666666-hvg)*6,tmpa)));\n' + 'b = if(below(6*hvb,1),tmpa+(tmpb-tmpa)*6*hvb, if(below(2*hvb,1),tmpb, if(below(hvb*3,2),tmpa+(tmpb-tmpa)*(.666666-hvb)*6,tmpa)));\n' + 'r2=r;\n' + 'g2=g;\n' + 'b2=b;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.hvr = 0;
m.q5 = 0;
m.q6 = 0;
m.h = 0;
m.tmpa = 0;
m.tmpb = 0;
m.l = 0;
m.s = 0;
m.hvb = 0;
m.hvg = 0;
m.t1 = 0;
m.t2 = 0;
m.t1 = (0.7+((rand(101)*0.01)*0.6));
m.t2 = (0.7+((rand(101)*0.01)*0.6));
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(m.q1*Math.sin((m.q2*m.t1))));
m.y = (0.5+(m.q1*Math.cos((m.q3*m.t2))));
m.rad = m.q5;
m.ang = -m.time;
m.sides = m.q6;
m.h = (m.q4+0.03);
m.h = (m.h-Math.floor(m.h));
m.l = 0.5;
m.s = 1;
m.tmpb = ifcond(below(m.l, 0.5), (m.l*(1+m.s)), ((m.l+m.s)-(m.s*m.l)));
m.tmpa = ((2*m.l)-m.tmpb);
m.hvr = (m.h+0.333333);
m.hvr = ifcond(below(m.hvr, 0), (m.hvr+1), ifcond(above(m.hvr, 1), (m.hvr-1), m.hvr));
m.hvg = m.h;
m.hvg = ifcond(below(m.hvg, 0), (m.hvg+1), ifcond(above(m.hvg, 1), (m.hvg-1), m.hvg));
m.hvb = (m.h-0.333333);
m.hvb = ifcond(below(m.hvb, 0), (m.hvb+1), ifcond(above(m.hvb, 1), (m.hvb-1), m.hvb));
m.r = ifcond(below((6*m.hvr), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvr)), ifcond(below((2*m.hvr), 1), m.tmpb, ifcond(below((m.hvr*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvr))*6)), m.tmpa)));
m.g = ifcond(below((6*m.hvg), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvg)), ifcond(below((2*m.hvg), 1), m.tmpb, ifcond(below((m.hvg*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvg))*6)), m.tmpa)));
m.b = ifcond(below((6*m.hvb), 1), (m.tmpa+(((m.tmpb-m.tmpa)*6)*m.hvb)), ifcond(below((2*m.hvb), 1), m.tmpb, ifcond(below((m.hvb*3), 2), (m.tmpa+(((m.tmpb-m.tmpa)*(0.666666-m.hvb))*6)), m.tmpa)));
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
		return m;
	},
		'init_eqs_str' : ('t1 = .7 + rand(101)*.01*.6;\n' + 't2 = .7 + rand(101)*.01*.6;'),
		'frame_eqs_str' : ('x = .5 + q1*sin(q2*t1);\n' + 'y = .5 + q1*cos(q3*t2);\n' + 'rad = q5;\n' + 'ang = -time;\n' + 'sides = q6;\n' + 'h = q4 + .03;\n' + 'h = h - int(h);\n' + 'l = .5;\n' + 's = 1;\n' + 'tmpb = if(below(l,0.5),l*(1+s),(l+s)-(s*l));\n' + 'tmpa = 2*l - tmpb;\n' + 'hvr = h + .333333;\n' + 'hvr = if(below(hvr,0),hvr+1,if(above(hvr,1),hvr-1,hvr));\n' + 'hvg = h;\n' + 'hvg = if(below(hvg,0),hvg+1,if(above(hvg,1),hvg-1,hvg));\n' + 'hvb = h - .333333;\n' + 'hvb = if(below(hvb,0),hvb+1,if(above(hvb,1),hvb-1,hvb));\n' + 'r = if(below(6*hvr,1),tmpa+(tmpb-tmpa)*6*hvr, if(below(2*hvr,1),tmpb, if(below(hvr*3,2),tmpa+(tmpb-tmpa)*(.666666-hvr)*6,tmpa)));\n' + 'g = if(below(6*hvg,1),tmpa+(tmpb-tmpa)*6*hvg, if(below(2*hvg,1),tmpb, if(below(hvg*3,2),tmpa+(tmpb-tmpa)*(.666666-hvg)*6,tmpa)));\n' + 'b = if(below(6*hvb,1),tmpa+(tmpb-tmpa)*6*hvb, if(below(2*hvb,1),tmpb, if(below(hvb*3,2),tmpa+(tmpb-tmpa)*(.666666-hvb)*6,tmpa)));\n' + 'r2=r;\n' + 'g2=g;\n' + 'b2=b;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_a = 0;\n' + 'tic = time-tin;\n' + 'tic = tic;\n' + 'tin = time;\n' + 'v = tic*((bass_att + med_att + treb_att)*.3333*2 + (1/tic - 2)*v);\n' + 'sb = tic*(bass*4 + (1/tic - 4)*sb);\n' + 'su = tic*(med*.5+treb*.5*4 + (1/tic - 4)*su);\n' + 'tb = (tb + tic*sb)*below(tb,100000);\n' + 'tu = (tu + tic*su)*below(tu,100000);\n' + 'monitor = tu;\n' + 'q1 = v*.2 + .25;\n' + 'q2 = tb;\n' + 'q3 = tu;\n' + 'q4 = (5*sin(time*.145) + 3*cos(time*.115))*.1;\n' + 'q5 = pow(v*.5,2);\n' + 'q5 = .15;\n' + 'zoom = -.98;\n' + 'q6 = 40;\n' + 'h = time*.05;\n' + 'h = h - int(h);\n' + 'l = 1;\n' + 's = 1;\n' + 'tmpb = if(below(l,0.5),l*(1+s),(l+s)-(s*l));\n' + 'tmpa = 2*l - tmpb;\n' + 'hvr = h + .333333;\n' + 'hvr = if(below(hvr,0),hvr+1,if(above(hvr,1),hvr-1,hvr));\n' + 'hvg = h;\n' + 'hvg = if(below(hvg,0),hvg+1,if(above(hvg,1),hvg-1,hvg));\n' + 'hvb = h - .333333;\n' + 'hvb = if(below(hvb,0),hvb+1,if(above(hvb,1),hvb-1,hvb));\n' + 'ob_r = if(below(6*hvr,1),tmpa+(tmpb-tmpa)*6*hvr, if(below(2*hvr,1),tmpb, if(below(hvr*3,2),tmpa+(tmpb-tmpa)*(.666666-hvr)*6,tmpa)));\n' + 'ob_g = if(below(6*hvg,1),tmpa+(tmpb-tmpa)*6*hvg, if(below(2*hvg,1),tmpb, if(below(hvg*3,2),tmpa+(tmpb-tmpa)*(.666666-hvg)*6,tmpa)));\n' + 'ob_b = if(below(6*hvb,1),tmpa+(tmpb-tmpa)*6*hvb, if(below(2*hvb,1),tmpb, if(below(hvb*3,2),tmpa+(tmpb-tmpa)*(.666666-hvb)*6,tmpa)));'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
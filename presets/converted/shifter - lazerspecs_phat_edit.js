define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.960001,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 9.0,
		wave_scale : 1.285751,
		echo_alpha : 0.8,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.0,
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
		echo_zoom : 1.347319,
		ob_size : 0.0,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999513,
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
		decay : 0.91,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.vav = 0;
m.tic = 0;
m.ra = 0;
m.arot = 0;
m.tin = 0;
m.vt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.arot = 1.5708;
m.q1 = 0.2;
m.decay = 1;
m.q2 = 0.020;
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = m.time;
m.ra = 12;
m.vav = (m.tic*((m.vav*(div(1,m.tic)-m.ra))+((m.ra*((m.bass+m.treb)+m.mid))*0.33333)));
m.vt = (m.vt+(m.tic*m.vav));
m.q3 = m.vt;
m.q4 = (m.time*24.3);
m.q5 = 0.6;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.sx = -1;
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 54.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.mod = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.mod = div(m.bass,5);
m.x = (0.5+(m.mod*((Math.sin((((m.sample*6.28)*1)+m.q3))*0.5)+(0.5*Math.cos((((m.sample*6.28)*3)+m.q3))))));
m.y = (0.5+(m.mod*((Math.cos((((m.sample*6.28)*2)+m.q3))*0.5)+(0.5*Math.sin((((m.sample*6.28)*1)+m.q3))))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('mod =bass/5;\n' + 'x = .5 + mod*(sin(sample*6.28*1 + q3)*.5 + .5*cos(sample*6.28*3 + q3));\n' + 'y = .5 + mod*(cos(sample*6.28*2 + q3)*.5 + .5*sin(sample*6.28*1 + q3));'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 54.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.mod = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.mod = 0.2;
m.x = (0.5+(m.mod*((Math.sin((((m.sample*6.28)*1)+m.q3))*0.5)+(0.5*Math.cos((((m.sample*6.28)*3)+m.q3))))));
m.y = (0.5+(m.mod*((Math.cos((((m.sample*6.28)*2)+m.q3))*0.5)+(0.5*Math.sin((((m.sample*6.28)*1)+m.q3))))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('mod = .2;\n' + 'x = .5 + mod*(sin(sample*6.28*1 + q3)*.5 + .5*cos(sample*6.28*3 + q3));\n' + 'y = .5 + mod*(cos(sample*6.28*2 + q3)*.5 + .5*sin(sample*6.28*1 + q3));'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 54.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.mod = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.mod = 0.20333;
m.x = (0.5+(m.mod*((Math.sin((((m.sample*6.28)*1)+m.q3))*0.5)+(0.5*Math.cos((((m.sample*6.28)*3)+m.q3))))));
m.y = (0.5+(m.mod*((Math.cos((((m.sample*6.28)*2)+m.q3))*0.5)+(0.5*Math.sin((((m.sample*6.28)*1)+m.q3))))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('mod = .20333;\n' + 'x = .5 + mod*(sin(sample*6.28*1 + q3)*.5 + .5*cos(sample*6.28*3 + q3));\n' + 'y = .5 + mod*(cos(sample*6.28*2 + q3)*.5 + .5*sin(sample*6.28*1 + q3));'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 54.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.mod = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.mod = 0.20667;
m.x = (0.5+(m.mod*((Math.sin((((m.sample*6.28)*1)+m.q3))*0.5)+(0.5*Math.cos((((m.sample*6.28)*3)+m.q3))))));
m.y = (0.5+(m.mod*((Math.cos((((m.sample*6.28)*2)+m.q3))*0.5)+(0.5*Math.sin((((m.sample*6.28)*1)+m.q3))))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('mod = .20667;\n' + 'x = .5 + mod*(sin(sample*6.28*1 + q3)*.5 + .5*cos(sample*6.28*3 + q3));\n' + 'y = .5 + mod*(cos(sample*6.28*2 + q3)*.5 + .5*sin(sample*6.28*1 + q3));'),

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
			g2 : 0.0,
			tex_zoom : 0.670315,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 1.998627,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q4 = 0;
m.hvr = 0;
m.q5 = 0;
m.h = 0;
m.tmpa = 0;
m.tmpb = 0;
m.l = 0;
m.ra = 0;
m.s = 0;
m.hvb = 0;
m.ti = 0;
m.hvg = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.a = m.q1;
m.a2 = m.a;
m.ra = (rand(1001)*0.001);
m.ti = m.q4;
m.ra = (m.ti-Math.floor(m.ti));
m.tex_zoom = (0.67+((m.ra*m.q2)*4));
m.h = ifcond(above(m.ra, 0.15), (m.ra-0.15), (m.ra+0.85));
m.s = 1;
m.l = m.q5;
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
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a = q1;\n' + 'a2 = a;\n' + 'ra = rand(1001)*.001;\n' + 'ti = q4;\n' + 'ra = ti - int(ti);\n' + 'tex_zoom = .67 + ra*q2*4;\n' + 'h = if(above(ra,.15),ra-.15,ra+.85);\n' + 's = 1;\n' + 'l = q5;\n' + 'tmpb = if(below(l,0.5),l*(1+s),(l+s)-(s*l));\n' + 'tmpa = 2*l - tmpb;\n' + 'hvr = h + .333333;\n' + 'hvr = if(below(hvr,0),hvr+1,if(above(hvr,1),hvr-1,hvr));\n' + 'hvg = h;\n' + 'hvg = if(below(hvg,0),hvg+1,if(above(hvg,1),hvg-1,hvg));\n' + 'hvb = h - .333333;\n' + 'hvb = if(below(hvb,0),hvb+1,if(above(hvb,1),hvb-1,hvb));\n' + 'r = if(below(6*hvr,1),tmpa+(tmpb-tmpa)*6*hvr, if(below(2*hvr,1),tmpb, if(below(hvr*3,2),tmpa+(tmpb-tmpa)*(.666666-hvr)*6,tmpa)));\n' + 'g = if(below(6*hvg,1),tmpa+(tmpb-tmpa)*6*hvg, if(below(2*hvg,1),tmpb, if(below(hvg*3,2),tmpa+(tmpb-tmpa)*(.666666-hvg)*6,tmpa)));\n' + 'b = if(below(6*hvb,1),tmpa+(tmpb-tmpa)*6*hvb, if(below(2*hvb,1),tmpb, if(below(hvb*3,2),tmpa+(tmpb-tmpa)*(.666666-hvb)*6,tmpa)));\n' + 'r2 = r;\n' + 'g2 = g;\n' + 'b2 = b;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.670315,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 1.998627,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q4 = 0;
m.hvr = 0;
m.q5 = 0;
m.h = 0;
m.tmpa = 0;
m.tmpb = 0;
m.l = 0;
m.ra = 0;
m.s = 0;
m.hvb = 0;
m.ti = 0;
m.hvg = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.g = 0.7;
m.g2 = m.g;
m.a = m.q1;
m.a2 = m.a;
m.ra = (rand(1001)*0.001);
m.ti = (m.q4+0.25);
m.ra = (m.ti-Math.floor(m.ti));
m.tex_zoom = (0.67+((m.ra*m.q2)*4));
m.h = ifcond(above(m.ra, 0.15), (m.ra-0.15), (m.ra+0.85));
m.s = 1;
m.l = m.q5;
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
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('g = .7;\n' + 'g2 = g;\n' + 'a = q1;\n' + 'a2 = a;\n' + 'ra = rand(1001)*.001;\n' + 'ti = q4 + .25;\n' + 'ra = ti - int(ti);\n' + 'tex_zoom = .67 + ra*q2*4;\n' + 'h = if(above(ra,.15),ra-.15,ra+.85);\n' + 's = 1;\n' + 'l = q5;\n' + 'tmpb = if(below(l,0.5),l*(1+s),(l+s)-(s*l));\n' + 'tmpa = 2*l - tmpb;\n' + 'hvr = h + .333333;\n' + 'hvr = if(below(hvr,0),hvr+1,if(above(hvr,1),hvr-1,hvr));\n' + 'hvg = h;\n' + 'hvg = if(below(hvg,0),hvg+1,if(above(hvg,1),hvg-1,hvg));\n' + 'hvb = h - .333333;\n' + 'hvb = if(below(hvb,0),hvb+1,if(above(hvb,1),hvb-1,hvb));\n' + 'r = if(below(6*hvr,1),tmpa+(tmpb-tmpa)*6*hvr, if(below(2*hvr,1),tmpb, if(below(hvr*3,2),tmpa+(tmpb-tmpa)*(.666666-hvr)*6,tmpa)));\n' + 'g = if(below(6*hvg,1),tmpa+(tmpb-tmpa)*6*hvg, if(below(2*hvg,1),tmpb, if(below(hvg*3,2),tmpa+(tmpb-tmpa)*(.666666-hvg)*6,tmpa)));\n' + 'b = if(below(6*hvb,1),tmpa+(tmpb-tmpa)*6*hvb, if(below(2*hvb,1),tmpb, if(below(hvb*3,2),tmpa+(tmpb-tmpa)*(.666666-hvb)*6,tmpa)));\n' + 'r2 = r;\n' + 'g2 = g;\n' + 'b2 = b;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.670315,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 1.998627,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q4 = 0;
m.hvr = 0;
m.q5 = 0;
m.h = 0;
m.tmpa = 0;
m.tmpb = 0;
m.l = 0;
m.ra = 0;
m.s = 0;
m.hvb = 0;
m.ti = 0;
m.hvg = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.g = 0.7;
m.g2 = m.g;
m.a = m.q1;
m.a2 = m.a;
m.ra = (rand(1001)*0.001);
m.ti = (m.q4+0.5);
m.ra = (m.ti-Math.floor(m.ti));
m.tex_zoom = (0.67+((m.ra*m.q2)*4));
m.h = ifcond(above(m.ra, 0.15), (m.ra-0.15), (m.ra+0.85));
m.s = 1;
m.l = m.q5;
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
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('g = .7;\n' + 'g2 = g;\n' + 'a = q1;\n' + 'a2 = a;\n' + 'ra = rand(1001)*.001;\n' + 'ti = q4 + .5;\n' + 'ra = ti - int(ti);\n' + 'tex_zoom = .67 + ra*q2*4;\n' + 'h = if(above(ra,.15),ra-.15,ra+.85);\n' + 's = 1;\n' + 'l = q5;\n' + 'tmpb = if(below(l,0.5),l*(1+s),(l+s)-(s*l));\n' + 'tmpa = 2*l - tmpb;\n' + 'hvr = h + .333333;\n' + 'hvr = if(below(hvr,0),hvr+1,if(above(hvr,1),hvr-1,hvr));\n' + 'hvg = h;\n' + 'hvg = if(below(hvg,0),hvg+1,if(above(hvg,1),hvg-1,hvg));\n' + 'hvb = h - .333333;\n' + 'hvb = if(below(hvb,0),hvb+1,if(above(hvb,1),hvb-1,hvb));\n' + 'r = if(below(6*hvr,1),tmpa+(tmpb-tmpa)*6*hvr, if(below(2*hvr,1),tmpb, if(below(hvr*3,2),tmpa+(tmpb-tmpa)*(.666666-hvr)*6,tmpa)));\n' + 'g = if(below(6*hvg,1),tmpa+(tmpb-tmpa)*6*hvg, if(below(2*hvg,1),tmpb, if(below(hvg*3,2),tmpa+(tmpb-tmpa)*(.666666-hvg)*6,tmpa)));\n' + 'b = if(below(6*hvb,1),tmpa+(tmpb-tmpa)*6*hvb, if(below(2*hvb,1),tmpb, if(below(hvb*3,2),tmpa+(tmpb-tmpa)*(.666666-hvb)*6,tmpa)));\n' + 'r2 = r;\n' + 'g2 = g;\n' + 'b2 = b;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.670315,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 1.998627,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q4 = 0;
m.hvr = 0;
m.q5 = 0;
m.h = 0;
m.tmpa = 0;
m.tmpb = 0;
m.l = 0;
m.ra = 0;
m.s = 0;
m.hvb = 0;
m.ti = 0;
m.hvg = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.g = 0.7;
m.g2 = m.g;
m.a = m.q1;
m.a2 = m.a;
m.ra = (rand(1001)*0.001);
m.ti = (m.q4+0.75);
m.ra = (m.ti-Math.floor(m.ti));
m.tex_zoom = (0.67+((m.ra*m.q2)*4));
m.h = ifcond(above(m.ra, 0.15), (m.ra-0.15), (m.ra+0.85));
m.s = 1;
m.l = m.q5;
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
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('g = .7;\n' + 'g2 = g;\n' + 'a = q1;\n' + 'a2 = a;\n' + 'ra = rand(1001)*.001;\n' + 'ti = q4 + .75;\n' + 'ra = ti - int(ti);\n' + 'tex_zoom = .67 + ra*q2*4;\n' + 'h = if(above(ra,.15),ra-.15,ra+.85);\n' + 's = 1;\n' + 'l = q5;\n' + 'tmpb = if(below(l,0.5),l*(1+s),(l+s)-(s*l));\n' + 'tmpa = 2*l - tmpb;\n' + 'hvr = h + .333333;\n' + 'hvr = if(below(hvr,0),hvr+1,if(above(hvr,1),hvr-1,hvr));\n' + 'hvg = h;\n' + 'hvg = if(below(hvg,0),hvg+1,if(above(hvg,1),hvg-1,hvg));\n' + 'hvb = h - .333333;\n' + 'hvb = if(below(hvb,0),hvb+1,if(above(hvb,1),hvb-1,hvb));\n' + 'r = if(below(6*hvr,1),tmpa+(tmpb-tmpa)*6*hvr, if(below(2*hvr,1),tmpb, if(below(hvr*3,2),tmpa+(tmpb-tmpa)*(.666666-hvr)*6,tmpa)));\n' + 'g = if(below(6*hvg,1),tmpa+(tmpb-tmpa)*6*hvg, if(below(2*hvg,1),tmpb, if(below(hvg*3,2),tmpa+(tmpb-tmpa)*(.666666-hvg)*6,tmpa)));\n' + 'b = if(below(6*hvb,1),tmpa+(tmpb-tmpa)*6*hvb, if(below(2*hvb,1),tmpb, if(below(hvb*3,2),tmpa+(tmpb-tmpa)*(.666666-hvb)*6,tmpa)));\n' + 'r2 = r;\n' + 'g2 = g;\n' + 'b2 = b;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'arot = 1.5708;\n' + 'q1 = .2;\n' + 'decay = 1;\n' + 'q2 = .020;\n' + 'tic = min(time-tin,.1);\n' + 'tin = time;\n' + 'ra = 12;\n' + 'vav = tic*(vav*(1/tic - ra) + ra*(bass+treb+mid)*.33333);\n' + 'vt = vt + tic*vav;\n' + 'q3 = vt;\n' + 'q4 = time*24.3;\n' + 'q5 = .6;'),
	'pixel_eqs_str' : ('sx=-1;'),
};

return pmap;
});
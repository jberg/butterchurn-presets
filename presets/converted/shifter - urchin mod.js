define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
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
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.011046,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.1041,
		ob_size : 0.5,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.32,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.2899,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.2599,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.9,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.q3 = 0;
m.mod = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.num = 0;
m.mt = 0;
m.anga = 0;
m.ox = 0;
m.oy = 0;
m.vav = 0;
m.an = 0;
m.treb_avg = 0;
m.tic = 0;
m.ra = 0;
m.rb = 0;
m.rc = 0;
m.bt = 0;
m.bass_avg = 0;
m.rd = 0;
m.vol = 0;
m.re = 0;
m.radi = 0;
m.seg = 0;
m.tin = 0;
m.pi = 0;
m.mid_avg = 0;
m.vt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = m.time;
m.vol = (((m.bass_att+m.treb_att)+m.mid_att)*0.333333);
m.ra = (div(1,m.tic)*0.25);
m.treb_avg = (m.tic*((m.treb_avg*(div(1,m.tic)-m.ra))+(m.ra*m.treb)));
m.mid_avg = (m.tic*((m.mid_avg*(div(1,m.tic)-m.ra))+(m.ra*m.mid)));
m.bass_avg = (m.tic*((m.bass_avg*(div(1,m.tic)-m.ra))+(m.ra*m.bass)));
m.vav = (m.tic*((m.vav*(div(1,m.tic)-m.ra))+((m.ra*((m.bass+m.treb)+m.mid))*0.33333)));
m.tt = (m.tt+(m.tic*m.treb));
m.mt = (m.mt+(m.tic*m.mid));
m.bt = (m.bt+(m.tic*m.bass));
m.vt = (m.vt+(m.tic*m.vav));
m.q1 = (m.tt*3);
m.q2 = (m.mt*3);
m.q3 = (m.bt*3);
m.q4 = m.vt;
m.rb = ifcond(m.rb, m.rb, (0.2+((rand(1001)*0.001)*0.6)));
m.rc = ifcond(m.rc, m.rc, (0.2+((rand(1001)*0.001)*0.6)));
m.rd = ifcond(m.rd, m.rd, (0.2+((rand(1001)*0.001)*0.6)));
m.re = ifcond(m.re, m.re, (0.2+((rand(1001)*0.001)*0.6)));
m.rot = 0.26;
m.cx = ((0.3+(0.1*Math.sin((m.vt*m.re))))+(0.1*Math.cos((m.vt*m.rc))));
m.cy = ((0.5+(0.2*Math.sin((m.vt*m.rb))))+(0.1*Math.cos((m.vt*m.rd))));
m.q5 = (Math.min(1, (0.5*m.treb_avg))*0.035);
m.q6 = (Math.min(1, (0.5*m.mid_avg))*0.035);
m.q7 = (Math.min(1, (0.5*m.bass_avg))*0.035);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.num = 8;
m.pi = 3.141592654;
m.radi = ((m.y-0.5)*0.75);
m.radi = (m.y-0.5);
m.radi = pow(((m.radi*m.radi)+((m.x-0.5)*(m.x-0.5))), 0.5);
m.an = ((m.ang+m.pi)+m.time);
m.an = (m.an-((m.pi*2)*Math.floor(div(m.an,(m.pi*2)))));
m.mod = 0.1;
m.seg = (m.ang+m.pi);
m.seg = (div(m.seg,(m.pi*2))*m.num);
m.seg = Math.floor(m.seg);
m.seg = (m.seg-equal(m.seg, m.num));
m.anga = ((m.ang+m.pi)-(div((m.pi*2),m.num)*m.seg));
m.anga = ifcond(equal(mod(m.seg,2), 0), (div((m.pi*2),m.num)-m.anga), m.anga);
m.anga = (m.anga+div(m.pi,4));
m.ox = (0.5-(m.radi*Math.sin(m.anga)));
m.oy = (0.5+(m.radi*Math.cos(m.anga)));
m.dx = (equal(m.seg, 3)*(m.x-m.ox));
m.dy = (equal(m.seg, 3)*(m.y-m.oy));
m.dx = (above(m.seg, 0)*(m.x-m.ox));
m.dy = (above(m.seg, 0)*(m.y-m.oy));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.05,
			enabled : 1.0,
			b : 1.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.t5 = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.sw = 0;
m.ya = 0;
m.xa = 0;
m.yb = 0;
m.xb = 0;
m.yc = 0;
m.it = 0;
m.xc = 0;
m.yd = 0;
m.xd = 0;
m.sa = 0;
m.ti = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t1 = (0.2+((0.6*rand(1001))*0.001));
m.t2 = (0.2+((0.6*rand(1001))*0.001));
m.t3 = (0.2+((0.6*rand(1001))*0.001));
m.t4 = (0.2+((0.6*rand(1001))*0.001));
m.t5 = (0.2+((0.6*rand(1001))*0.001));
m.t6 = (0.2+((0.6*rand(1001))*0.001));
m.t7 = (0.2+((0.6*rand(1001))*0.001));
m.t8 = (0.2+((0.6*rand(1001))*0.001));
			m.rkeys = ['sw','it'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ti = m.q1;
m.xa = (0.25+(0.25*Math.sin((m.ti*m.t1))));
m.xb = (0.25+(0.25*Math.sin((m.ti*m.t2))));
m.xc = (0.25+(0.25*Math.sin((m.ti*m.t3))));
m.xd = (0.25+(0.25*Math.sin((m.ti*m.t4))));
m.ya = (0.25+(0.25*Math.sin((m.ti*m.t5))));
m.yb = (0.25+(0.25*Math.sin((m.ti*m.t6))));
m.yc = (0.25+(0.25*Math.sin((m.ti*m.t7))));
m.yd = (0.25+(0.25*Math.sin((m.ti*m.t8))));
m.it = ((m.it+1)*above(m.sample, 0));
m.sw = ((1-m.sw)*above(m.sample, 0));
m.sa = (1-m.sample);
m.x = ifcond(m.sw, ((m.xa*m.sample)+(m.sa*m.xb)), ((m.xc*m.sample)+(m.xd*m.sa)));
m.y = ifcond(m.sw, ((m.ya*m.sample)+(m.sa*m.yb)), ((m.yc*m.sample)+(m.yd*m.sa)));
m.y = (0.5-((m.y*(0.5-m.x))*2));
m.ti = m.q4;
m.r = (0.5+(0.5*Math.sin(m.ti)));
m.g = (0.5+(0.5*Math.sin((m.ti+2.0944))));
m.b = (0.5+(0.5*Math.sin((m.ti+4.1888))));
m.a = m.q5;
		return m;
	},
		'init_eqs_str' : ('t1 = .2 + .6*rand(1001)*.001;\n' + 't2 = .2 + .6*rand(1001)*.001;\n' + 't3 = .2 + .6*rand(1001)*.001;\n' + 't4 = .2 + .6*rand(1001)*.001;\n' + 't5 = .2 + .6*rand(1001)*.001;\n' + 't6 = .2 + .6*rand(1001)*.001;\n' + 't7 = .2 + .6*rand(1001)*.001;\n' + 't8 = .2 + .6*rand(1001)*.001;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ti = q1;\n' + 'xa = .25 + .25*sin(ti*t1);\n' + 'xb = .25 + .25*sin(ti*t2);\n' + 'xc = .25 + .25*sin(ti*t3);\n' + 'xd = .25 + .25*sin(ti*t4);\n' + 'ya = .25 + .25*sin(ti*t5);\n' + 'yb = .25 + .25*sin(ti*t6);\n' + 'yc = .25 + .25*sin(ti*t7);\n' + 'yd = .25 + .25*sin(ti*t8);\n' + 'it = (it + 1)*above(sample,0);\n' + 'sw = (1-sw)*above(sample,0);\n' + 'sa = 1-sample;\n' + 'x = if(sw,xa*sample + sa*xb,xc*sample + xd*sa);\n' + 'y = if(sw,ya*sample + sa*yb,yc*sample + yd*sa);\n' + 'y = .5 - y*(.5-x)*2;\n' + 'ti = q4;\n' + 'r = .5 + .5*sin(ti);\n' + 'g = .5 + .5*sin(ti + 2.0944);\n' + 'b = .5 + .5*sin(ti + 4.1888);\n' + 'a = q5;'),

		},
		{
		'baseVals' : {
			a : 0.05,
			enabled : 1.0,
			b : 0.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.t8 = 0;
m.sw = 0;
m.q6 = 0;
m.ya = 0;
m.xa = 0;
m.yb = 0;
m.xb = 0;
m.yc = 0;
m.it = 0;
m.xc = 0;
m.yd = 0;
m.xd = 0;
m.sa = 0;
m.ti = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t1 = (0.2+((0.6*rand(1001))*0.001));
m.t2 = (0.2+((0.6*rand(1001))*0.001));
m.t3 = (0.2+((0.6*rand(1001))*0.001));
m.t4 = (0.2+((0.6*rand(1001))*0.001));
m.t5 = (0.2+((0.6*rand(1001))*0.001));
m.t6 = (0.2+((0.6*rand(1001))*0.001));
m.t7 = (0.2+((0.6*rand(1001))*0.001));
m.t8 = (0.2+((0.6*rand(1001))*0.001));
			m.rkeys = ['sw','it'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ti = m.q2;
m.xa = (0.25+(0.25*Math.sin((m.ti*m.t1))));
m.xb = (0.25+(0.25*Math.sin((m.ti*m.t2))));
m.xc = (0.25+(0.25*Math.sin((m.ti*m.t3))));
m.xd = (0.25+(0.25*Math.sin((m.ti*m.t4))));
m.ya = (0.25+(0.25*Math.sin((m.ti*m.t5))));
m.yb = (0.25+(0.25*Math.sin((m.ti*m.t6))));
m.yc = (0.25+(0.25*Math.sin((m.ti*m.t7))));
m.yd = (0.25+(0.25*Math.sin((m.ti*m.t8))));
m.it = ((m.it+1)*above(m.sample, 0));
m.sw = ((1-m.sw)*above(m.sample, 0));
m.sa = (1-m.sample);
m.x = ifcond(m.sw, ((m.xa*m.sample)+(m.sa*m.xb)), ((m.xc*m.sample)+(m.xd*m.sa)));
m.y = ifcond(m.sw, ((m.ya*m.sample)+(m.sa*m.yb)), ((m.yc*m.sample)+(m.yd*m.sa)));
m.y = (0.5-((m.y*(0.5-m.x))*2));
m.ti = (m.q4+2.0944);
m.r = (0.5+(0.5*Math.sin(m.ti)));
m.g = (0.5+(0.5*Math.sin((m.ti+2.0944))));
m.b = (0.5+(0.5*Math.sin((m.ti+4.1888))));
m.a = m.q6;
		return m;
	},
		'init_eqs_str' : ('t1 = .2 + .6*rand(1001)*.001;\n' + 't2 = .2 + .6*rand(1001)*.001;\n' + 't3 = .2 + .6*rand(1001)*.001;\n' + 't4 = .2 + .6*rand(1001)*.001;\n' + 't5 = .2 + .6*rand(1001)*.001;\n' + 't6 = .2 + .6*rand(1001)*.001;\n' + 't7 = .2 + .6*rand(1001)*.001;\n' + 't8 = .2 + .6*rand(1001)*.001;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ti = q2;\n' + 'xa = .25 + .25*sin(ti*t1);\n' + 'xb = .25 + .25*sin(ti*t2);\n' + 'xc = .25 + .25*sin(ti*t3);\n' + 'xd = .25 + .25*sin(ti*t4);\n' + 'ya = .25 + .25*sin(ti*t5);\n' + 'yb = .25 + .25*sin(ti*t6);\n' + 'yc = .25 + .25*sin(ti*t7);\n' + 'yd = .25 + .25*sin(ti*t8);\n' + 'it = (it + 1)*above(sample,0);\n' + 'sw = (1-sw)*above(sample,0);\n' + 'sa = 1-sample;\n' + 'x = if(sw,xa*sample + sa*xb,xc*sample + xd*sa);\n' + 'y = if(sw,ya*sample + sa*yb,yc*sample + yd*sa);\n' + 'y = .5 - y*(.5-x)*2;\n' + 'ti = q4 + 2.0944;\n' + 'r = .5 + .5*sin(ti);\n' + 'g = .5 + .5*sin(ti + 2.0944);\n' + 'b = .5 + .5*sin(ti + 4.1888);\n' + 'a = q6;'),

		},
		{
		'baseVals' : {
			a : 0.05,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.t8 = 0;
m.sw = 0;
m.q7 = 0;
m.ya = 0;
m.xa = 0;
m.yb = 0;
m.xb = 0;
m.yc = 0;
m.it = 0;
m.xc = 0;
m.yd = 0;
m.xd = 0;
m.sa = 0;
m.ti = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t1 = (0.2+((0.6*rand(1001))*0.001));
m.t2 = (0.2+((0.6*rand(1001))*0.001));
m.t3 = (0.2+((0.6*rand(1001))*0.001));
m.t4 = (0.2+((0.6*rand(1001))*0.001));
m.t5 = (0.2+((0.6*rand(1001))*0.001));
m.t6 = (0.2+((0.6*rand(1001))*0.001));
m.t7 = (0.2+((0.6*rand(1001))*0.001));
m.t8 = (0.2+((0.6*rand(1001))*0.001));
			m.rkeys = ['sw','it'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ti = m.q3;
m.xa = (0.25+(0.25*Math.sin((m.ti*m.t1))));
m.xb = (0.25+(0.25*Math.sin((m.ti*m.t2))));
m.xc = (0.25+(0.25*Math.sin((m.ti*m.t3))));
m.xd = (0.25+(0.25*Math.sin((m.ti*m.t4))));
m.ya = (0.25+(0.25*Math.sin((m.ti*m.t5))));
m.yb = (0.25+(0.25*Math.sin((m.ti*m.t6))));
m.yc = (0.25+(0.25*Math.sin((m.ti*m.t7))));
m.yd = (0.25+(0.25*Math.sin((m.ti*m.t8))));
m.it = ((m.it+1)*above(m.sample, 0));
m.sw = ((1-m.sw)*above(m.sample, 0));
m.sa = (1-m.sample);
m.x = ifcond(m.sw, ((m.xa*m.sample)+(m.sa*m.xb)), ((m.xc*m.sample)+(m.xd*m.sa)));
m.y = ifcond(m.sw, ((m.ya*m.sample)+(m.sa*m.yb)), ((m.yc*m.sample)+(m.yd*m.sa)));
m.y = (0.5-((m.y*(0.5-m.x))*2));
m.ti = (m.q4+4.1888);
m.r = (0.5+(0.5*Math.sin(m.ti)));
m.g = (0.5+(0.5*Math.sin((m.ti+2.0944))));
m.b = (0.5+(0.5*Math.sin((m.ti+4.1888))));
m.a = m.q7;
		return m;
	},
		'init_eqs_str' : ('t1 = .2 + .6*rand(1001)*.001;\n' + 't2 = .2 + .6*rand(1001)*.001;\n' + 't3 = .2 + .6*rand(1001)*.001;\n' + 't4 = .2 + .6*rand(1001)*.001;\n' + 't5 = .2 + .6*rand(1001)*.001;\n' + 't6 = .2 + .6*rand(1001)*.001;\n' + 't7 = .2 + .6*rand(1001)*.001;\n' + 't8 = .2 + .6*rand(1001)*.001;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ti = q3;\n' + 'xa = .25 + .25*sin(ti*t1);\n' + 'xb = .25 + .25*sin(ti*t2);\n' + 'xc = .25 + .25*sin(ti*t3);\n' + 'xd = .25 + .25*sin(ti*t4);\n' + 'ya = .25 + .25*sin(ti*t5);\n' + 'yb = .25 + .25*sin(ti*t6);\n' + 'yc = .25 + .25*sin(ti*t7);\n' + 'yd = .25 + .25*sin(ti*t8);\n' + 'it = (it + 1)*above(sample,0);\n' + 'sw = (1-sw)*above(sample,0);\n' + 'sa = 1-sample;\n' + 'x = if(sw,xa*sample + sa*xb,xc*sample + xd*sa);\n' + 'y = if(sw,ya*sample + sa*yb,yc*sample + yd*sa);\n' + 'y = .5 - y*(.5-x)*2;\n' + 'ti = q4 + 4.1888;\n' + 'r = .5 + .5*sin(ti);\n' + 'g = .5 + .5*sin(ti + 2.0944);\n' + 'b = .5 + .5*sin(ti + 4.1888);\n' + 'a = q7;'),

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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
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
			rad : 1.978832,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_zoom = div(1,m.rad);
m.a = 0.7;
m.a2 = m.a;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_zoom = 1/rad;\n' + 'a = .7;\n' + 'a2 = a;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.040839,
			x : 0.15,
			y : 0.39,
			ang : 0.0,
			sides : 54.0,
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
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
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
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
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
	'frame_eqs_str' : ('warp = 0;\n' + 'tic = min(time-tin,.1);\n' + 'tin = time;\n' + 'vol = (bass_att + treb_att + mid_att)*.333333;\n' + 'ra = 1/tic*.25;\n' + 'treb_avg = tic*(treb_avg*(1/tic - ra) + ra*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - ra) + ra*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - ra) + ra*bass);\n' + 'vav = tic*(vav*(1/tic - ra) + ra*(bass+treb+mid)*.33333);\n' + 'tt = tt + tic*treb;\n' + 'mt = mt + tic*mid;\n' + 'bt = bt + tic*bass;\n' + 'vt = vt + tic*vav;\n' + 'q1 = tt*3;\n' + 'q2 = mt*3;\n' + 'q3 = bt*3;\n' + 'q4 = vt;\n' + 'rb = if(rb,rb,.2 + rand(1001)*.001*.6);\n' + 'rc = if(rc,rc,.2 + rand(1001)*.001*.6);\n' + 'rd = if(rd,rd,.2 + rand(1001)*.001*.6);\n' + 're = if(re,re,.2 + rand(1001)*.001*.6);\n' + 'rot = .26;\n' + 'cx = .3 + .1*sin(vt*re) + .1*cos(vt*rc);\n' + 'cy = .5 + .2*sin(vt*rb) + .1*cos(vt*rd);\n' + 'q5 = min(1,.5*treb_avg)*.035;\n' + 'q6 = min(1,.5*mid_avg)*.035;\n' + 'q7 = min(1,.5*bass_avg)*.035;'),
	'pixel_eqs_str' : ('num = 8;\n' + 'pi = 3.141592654;\n' + 'radi = (y-.5)*.75;\n' + 'radi = (y-.5);\n' + 'radi = pow(radi*radi + (x-.5)*(x-.5),.5);\n' + 'an = ang + pi + time;\n' + 'an = an - pi*2*int(an/(pi*2));\n' + 'mod = .1;\n' + 'seg = ang + pi;\n' + 'seg = seg/(pi*2)*num;\n' + 'seg = int(seg);\n' + 'seg = seg - equal(seg,num);\n' + 'anga = (ang + pi) - (pi*2/num)*seg;\n' + 'anga = if(equal(seg%2,0),(pi*2/num) - anga,anga);\n' + 'anga = anga + pi/4;\n' + 'ox = .5 - radi*sin(anga);\n' + 'oy = .5 + radi*cos(anga);\n' + 'dx = equal(seg,3)*(x-ox);\n' + 'dy = equal(seg,3)*(y-oy);\n' + 'dx = above(seg,0)*(x-ox);\n' + 'dy = above(seg,0)*(y-oy);'),
};

return pmap;
});
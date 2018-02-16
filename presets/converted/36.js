define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 0.16,
		wave_g : 0.4,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.012,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01105,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 0.997,
		ob_size : 0.5,
		b1ed : 0.3,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9995,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 2.0,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 2.0,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.1,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.96,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.25,
		mv_r : 0.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q7 = 0;
m.mt = 0;
m.q8 = 0;
m.ox = 0;
m.oy = 0;
m.vav = 0;
m.ynum = 0;
m.xnum = 0;
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
m.ti = 0;
m.tin = 0;
m.pi = 0;
m.mid_avg = 0;
m.xsw = 0;
m.yseg = 0;
m.ysw = 0;
m.xseg = 0;
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
m.q1 = (m.tt*1.8);
m.q2 = (m.mt*3);
m.q3 = (m.bt*3);
m.q4 = m.vt;
m.rb = ifcond(m.rb, m.rb, (0.2+((rand(1001)*0.001)*0.6)));
m.rc = ifcond(m.rc, m.rc, (0.2+((rand(1001)*0.001)*0.6)));
m.rd = ifcond(m.rd, m.rd, (0.2+((rand(1001)*0.001)*0.6)));
m.re = ifcond(m.re, m.re, (0.2+((rand(1001)*0.001)*0.6)));
m.ti = (m.vt*2);
m.cx = ((0.3+(0.1*Math.sin((m.ti*m.re))))+(0.1*Math.cos((m.ti*m.rc))));
m.cy = ((0.5+(0.2*Math.sin((m.ti*m.rb))))+(0.1*Math.cos((m.ti*m.rd))));
m.q7 = 6;
m.q8 = 2.8;
		m.rkeys = ['rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.xnum = m.q7;
m.ynum = m.q8;
m.pi = 3.141592654;
m.xseg = Math.floor((m.x*m.xnum));
m.yseg = Math.floor((m.y*m.ynum));
m.xsw = equal(mod((m.xseg+equal(mod(m.yseg,2), 0)),2), 0);
m.ysw = equal(mod((m.yseg+1),2), 0);
m.ox = (m.x-(m.xseg*div(1,m.xnum)));
m.ox = ifcond(m.xsw, (div(1,m.xnum)-m.ox), m.ox);
m.oy = (m.y-(m.yseg*div(1,m.ynum)));
m.oy = ifcond(m.ysw, (div(1,m.ynum)-m.oy), m.oy);
m.dx = (above((m.xseg+m.yseg), 0)*(m.x-m.ox));
m.dy = (above((m.xseg+m.yseg), 0)*(m.y-m.oy));
m.rot = (m.rot*(1-above((m.xseg+m.yseg), 0)));
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
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wavey = 0;
m.q1 = 0;
m.head = 0;
m.samplerepeat = 0;
m.cycle = 0;
m.trailsize = 0;
m.tmc = 0;
m.n = 0;
m.tail = 0;
m.cycleto1 = 0;
m.swap = 0;
m.variation = 0;
m.tmm = 0;
m.yp = 0;
m.repeats = 0;
m.xp = 0;
m.tm = 0;
m.phs = 0;
m.sampcyc = 0;
m.rsample = 0;
m.wavex = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.repeats = 10;
m.samplerepeat = (m.sample*m.repeats);
m.cycle = Math.floor(m.samplerepeat);
m.sampcyc = (m.samplerepeat-m.cycle);
m.cycleto1 = div(m.cycle,m.repeats);
m.n = (m.sampcyc*6.283);
m.phs = m.sampcyc;
m.tm = ((m.q1+m.phs)+(m.cycleto1*0.1));
m.tmm = m.time;
m.rsample = (((1-(m.sampcyc*0.9))*2.2)*(m.cycleto1+1));
m.a = (m.sampcyc*below(m.sampcyc, 0.95));
m.a = (m.a*m.a);
m.tmc = ((m.tm+m.cycle)-(m.phs*0.2));
m.variation = (Math.sin((m.cycleto1*6.283))*9);
m.swap = ((above(m.sample, 0.5)*2)-1);
m.wavex = ((Math.sin(((m.tmc*(19+m.variation))*m.swap))*m.rsample)*0.04);
m.wavey = ((Math.cos(((m.tmc*(19+m.variation))*m.swap))*m.rsample)*0.04);
m.xp = (Math.sin(m.tm)*0.4);
m.yp = (Math.cos(m.tm)*0.4);
m.xp = (m.xp*Math.sin((m.tm*3)));
m.yp = (m.yp*Math.cos((m.tm*2.6)));
m.xp = (m.xp*Math.sin((m.tm*0.43)));
m.yp = (m.yp*((Math.cos((m.tm*1.79))*0.5)+0.5));
m.xp = (m.xp+m.wavex);
m.yp = (m.yp+m.wavey);
m.x = (m.xp+0.5);
m.y = ((m.yp*1.333)+0.5);
m.trailsize = 0.85;
m.head = above(m.a, m.trailsize);
m.tail = (1-m.head);
m.r = ((1*m.head)+(0.5*m.tail));
m.g = ((0.8*m.head)+(0.3*m.tail));
m.b = (0.5*m.head);
m.a = (m.a*0.25);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('repeats=10;\n' + 'samplerepeat=sample*repeats;\n' + 'cycle=int(samplerepeat);\n' + 'sampcyc=samplerepeat - cycle;\n' + 'cycleto1=cycle/repeats;\n' + 'n=sampcyc*6.283;\n' + 'phs=sampcyc;\n' + 'tm=q1+phs+(cycleto1)*0.1;\n' + 'tmm=time;\n' + 'rsample=(1-sampcyc*0.9)*2.2*(cycleto1+1);\n' + 'a=sampcyc * below(sampcyc,0.95);\n' + 'a=a*a;\n' + 'tmc=tm+cycle-phs*0.2;\n' + 'variation=sin(cycleto1*6.283)*9;\n' + 'swap=above(sample,0.5)*2-1;\n' + 'wavex=sin(tmc*(19+variation)*swap)*rsample*0.04;\n' + 'wavey=cos(tmc*(19+variation)*swap)*rsample*0.04;\n' + 'xp=sin(tm)*0.4 ;\n' + 'yp=cos(tm)*0.4 ;\n' + 'xp=xp*sin(tm*3);\n' + 'yp=yp*cos(tm*2.6);\n' + 'xp=xp*sin(tm*0.43);\n' + 'yp=yp*(cos(tm*1.79)*0.5+0.5);\n' + 'xp=xp+wavex;\n' + 'yp=yp+wavey;\n' + 'x=xp+0.5;\n' + 'y=yp*1.333 + 0.5;\n' + 'trailsize=0.85;\n' + 'head=above(a,trailsize);\n' + 'tail=1-head;\n' + 'r=1*head + 0.5*tail;\n' + 'g=0.8*head + 0.3*tail;\n' + 'b=0.5*head;\n' + 'a=a*0.25;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wavey = 0;
m.q1 = 0;
m.head = 0;
m.samplerepeat = 0;
m.cycle = 0;
m.trailsize = 0;
m.tmc = 0;
m.n = 0;
m.tail = 0;
m.cycleto1 = 0;
m.swap = 0;
m.variation = 0;
m.tmm = 0;
m.yp = 0;
m.repeats = 0;
m.xp = 0;
m.tm = 0;
m.phs = 0;
m.sampcyc = 0;
m.rsample = 0;
m.wavex = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.repeats = 8;
m.samplerepeat = (m.sample*m.repeats);
m.cycle = Math.floor(m.samplerepeat);
m.sampcyc = (m.samplerepeat-m.cycle);
m.cycleto1 = div(m.cycle,m.repeats);
m.n = (m.sampcyc*6.283);
m.phs = (m.sampcyc+0.15);
m.tm = ((m.q1+m.phs)+(m.cycleto1*0.1));
m.tmm = m.time;
m.rsample = (((1-(m.sampcyc*0.9))*1.5)*(m.cycleto1+1));
m.a = (m.sampcyc*below(m.sampcyc, 0.95));
m.a = (m.a*m.a);
m.tmc = ((m.tm+m.cycle)-(m.phs*0.2));
m.variation = (Math.sin((m.cycleto1*6.283))*9);
m.swap = ((above(m.sample, 0.5)*2)-1);
m.wavex = ((Math.sin(((m.tmc*(19+m.variation))*m.swap))*m.rsample)*0.04);
m.wavey = ((Math.cos(((m.tmc*(19+m.variation))*m.swap))*m.rsample)*0.04);
m.xp = (Math.sin(m.tm)*0.4);
m.yp = (Math.cos(m.tm)*0.4);
m.xp = (m.xp*Math.sin((m.tm*3)));
m.yp = (m.yp*Math.cos((m.tm*2.6)));
m.xp = (m.xp*Math.sin((m.tm*0.43)));
m.yp = (m.yp*((Math.cos((m.tm*1.79))*0.5)+0.5));
m.xp = (m.xp+m.wavex);
m.yp = (m.yp+m.wavey);
m.x = (m.xp+0.5);
m.y = ((m.yp*1.333)+0.5);
m.trailsize = 0.85;
m.head = above(m.a, m.trailsize);
m.tail = (1-m.head);
m.r = ((1*m.head)+(0.5*m.tail));
m.g = ((0.8*m.head)+(0.3*m.tail));
m.b = (0.5*m.head);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('repeats=8;\n' + 'samplerepeat=sample*repeats;\n' + 'cycle=int(samplerepeat);\n' + 'sampcyc=samplerepeat - cycle;\n' + 'cycleto1=cycle/repeats;\n' + 'n=sampcyc*6.283;\n' + 'phs=sampcyc+0.15;\n' + 'tm=q1+phs+(cycleto1)*0.1;\n' + 'tmm=time;\n' + 'rsample=(1-sampcyc*0.9)*1.5*(cycleto1+1);\n' + 'a=sampcyc * below(sampcyc,0.95);\n' + 'a=a*a;\n' + 'tmc=tm+cycle-phs*0.2;\n' + 'variation=sin(cycleto1*6.283)*9;\n' + 'swap=above(sample,0.5)*2-1;\n' + 'wavex=sin(tmc*(19+variation)*swap)*rsample*0.04;\n' + 'wavey=cos(tmc*(19+variation)*swap)*rsample*0.04;\n' + 'xp=sin(tm)*0.4 ;\n' + 'yp=cos(tm)*0.4 ;\n' + 'xp=xp*sin(tm*3);\n' + 'yp=yp*cos(tm*2.6);\n' + 'xp=xp*sin(tm*0.43);\n' + 'yp=yp*(cos(tm*1.79)*0.5+0.5);\n' + 'xp=xp+wavex;\n' + 'yp=yp+wavey;\n' + 'x=xp+0.5;\n' + 'y=yp*1.333 + 0.5;\n' + 'trailsize=0.85;\n' + 'head=above(a,trailsize);\n' + 'tail=1-head;\n' + 'r=1*head + 0.5*tail;\n' + 'g=0.8*head + 0.3*tail;\n' + 'b=0.5*head;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wavey = 0;
m.q1 = 0;
m.head = 0;
m.samplerepeat = 0;
m.cycle = 0;
m.trailsize = 0;
m.tmc = 0;
m.n = 0;
m.tail = 0;
m.cycleto1 = 0;
m.swap = 0;
m.variation = 0;
m.tmm = 0;
m.yp = 0;
m.repeats = 0;
m.xp = 0;
m.tm = 0;
m.phs = 0;
m.sampcyc = 0;
m.rsample = 0;
m.wavex = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.repeats = 6;
m.samplerepeat = (m.sample*m.repeats);
m.cycle = Math.floor(m.samplerepeat);
m.sampcyc = (m.samplerepeat-m.cycle);
m.cycleto1 = div(m.cycle,m.repeats);
m.n = (m.sampcyc*6.283);
m.phs = (m.sampcyc+0.25);
m.tm = ((m.q1+m.phs)+(m.cycleto1*0.1));
m.tmm = m.time;
m.rsample = (((1-(m.sampcyc*0.9))*1.5)*(m.cycleto1+1));
m.a = (m.sampcyc*below(m.sampcyc, 0.95));
m.a = (m.a*m.a);
m.tmc = ((m.tm+m.cycle)-(m.phs*0.2));
m.variation = (Math.sin((m.cycleto1*6.283))*9);
m.swap = ((above(m.sample, 0.5)*2)-1);
m.wavex = ((Math.sin(((m.tmc*(19+m.variation))*m.swap))*m.rsample)*0.04);
m.wavey = ((Math.cos(((m.tmc*(19+m.variation))*m.swap))*m.rsample)*0.04);
m.xp = (Math.sin(m.tm)*0.4);
m.yp = (Math.cos(m.tm)*0.4);
m.xp = (m.xp*Math.sin((m.tm*3)));
m.yp = (m.yp*Math.cos((m.tm*2.6)));
m.xp = (m.xp*Math.sin((m.tm*0.43)));
m.yp = (m.yp*((Math.cos((m.tm*1.79))*0.5)+0.5));
m.xp = (m.xp+m.wavex);
m.yp = (m.yp+m.wavey);
m.x = (m.xp+0.5);
m.y = ((m.yp*1.333)+0.5);
m.trailsize = 0.85;
m.head = above(m.a, m.trailsize);
m.tail = (1-m.head);
m.r = ((1*m.head)+(0.5*m.tail));
m.g = ((0.8*m.head)+(0.3*m.tail));
m.b = (0.5*m.head);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('repeats=6;\n' + 'samplerepeat=sample*repeats;\n' + 'cycle=int(samplerepeat);\n' + 'sampcyc=samplerepeat - cycle;\n' + 'cycleto1=cycle/repeats;\n' + 'n=sampcyc*6.283;\n' + 'phs=sampcyc+0.25;\n' + 'tm=q1+phs+(cycleto1)*0.1;\n' + 'tmm=time;\n' + 'rsample=(1-sampcyc*0.9)*1.5*(cycleto1+1);\n' + 'a=sampcyc * below(sampcyc,0.95);\n' + 'a=a*a;\n' + 'tmc=tm+cycle-phs*0.2;\n' + 'variation=sin(cycleto1*6.283)*9;\n' + 'swap=above(sample,0.5)*2-1;\n' + 'wavex=sin(tmc*(19+variation)*swap)*rsample*0.04;\n' + 'wavey=cos(tmc*(19+variation)*swap)*rsample*0.04;\n' + 'xp=sin(tm)*0.4 ;\n' + 'yp=cos(tm)*0.4 ;\n' + 'xp=xp*sin(tm*3);\n' + 'yp=yp*cos(tm*2.6);\n' + 'xp=xp*sin(tm*0.43);\n' + 'yp=yp*(cos(tm*1.79)*0.5+0.5);\n' + 'xp=xp+wavex;\n' + 'yp=yp+wavey;\n' + 'x=xp+0.5;\n' + 'y=yp*1.333 + 0.5;\n' + 'trailsize=0.85;\n' + 'head=above(a,trailsize);\n' + 'tail=1-head;\n' + 'r=1*head + 0.5*tail;\n' + 'g=0.8*head + 0.3*tail;\n' + 'b=0.5*head;'),

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
			r2 : 0.6,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 1.1938,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.7,
			tex_zoom : 1.0406,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.80814,
			x : 0.5,
			y : 0.68,
			ang : 0.0,
			sides : 6.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=time*0.1;'),

		},
		{
		'baseVals' : {
			r2 : 0.6,
			a : 0.15,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 1.1938,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.7,
			tex_zoom : 1.0406,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.56483,
			x : 0.5,
			y : 0.21,
			ang : 0.0,
			sides : 6.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (-m.time*0.13);
m.x = ((Math.sin((m.time*0.29))*0.2)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=-time*0.13;\n' + 'x=sin(time*0.29)*0.2 + 0.5;'),

		},
		{
		'baseVals' : {
			r2 : 0.6,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.7,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
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
			r2 : 0.5,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.7,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = (tmpvar_2.xyz * 0.85);\n' + '  ret_1 = (ret_1 - 0.002);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 crisp_1;\n' + '   vec2 uv3_2;\n' + '   vec2 uv2_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = ((uv - 0.5) * aspect.xy);\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = (0.1 / (sqrt(\n' + '    dot (tmpvar_4, tmpvar_4)\n' + '  ) + 0.1));\n' + '   vec2 tmpvar_6;\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (ang / 3.14);\n' + '  tmpvar_6.x = tmpvar_7;\n' + '  tmpvar_6.y = (tmpvar_5 * 2.5);\n' + '  uv2_3.y = (tmpvar_6.y + (0.25 * time));\n' + '  uv2_3.x = (tmpvar_7 + (time / 32.0));\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8.x = tmpvar_7;\n' + '  tmpvar_8.y = (tmpvar_5 * 2.5);\n' + '  uv3_2.x = tmpvar_8.x;\n' + '  uv3_2.y = (tmpvar_8.y + (0.08 * time));\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = (texture2D (sampler_main, uv2_3).xyz + texture2D (sampler_main, uv3_2).xyz);\n' + '  crisp_1 = tmpvar_9;\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = fract(uv2_3);\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_blur2, tmpvar_10);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = fract(uv3_2);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_blur2, tmpvar_12);\n' + '  crisp_1 = (crisp_1 + ((2.0 * \n' + '    ((tmpvar_11.xyz * scale2) + bias2)\n' + '  ) + (2.0 * \n' + '    ((tmpvar_13.xyz * scale2) + bias2)\n' + '  )));\n' + '  crisp_1 = ((3.5 * crisp_1) * rad);\n' + '   float tmpvar_14;\n' + '  tmpvar_14 = clamp ((1.0 - (200.0 * rad)), 0.0, 1.0);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = ((crisp_1 + (\n' + '    ((vec3(0.0, 0.0, 1.0) * uv.y) * pow ((1.0 - rad), 8.0))\n' + '   * tmpvar_14)) + (tmpvar_14 * tmpvar_15.xyz));\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'tic = min(time-tin,.1);\n' + 'tin = time;\n' + 'vol = (bass_att + treb_att + mid_att)*.333333;\n' + 'ra = 1/tic*.25;\n' + 'treb_avg = tic*(treb_avg*(1/tic - ra) + ra*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - ra) + ra*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - ra) + ra*bass);\n' + 'vav = tic*(vav*(1/tic - ra) + ra*(bass+treb+mid)*.33333);\n' + 'tt = tt + tic*treb;\n' + 'mt = mt + tic*mid;\n' + 'bt = bt + tic*bass;\n' + 'vt = vt + tic*vav;\n' + 'q1 = tt*1.8;\n' + 'q2 = mt*3;\n' + 'q3 = bt*3;\n' + 'q4 = vt;\n' + 'rb = if(rb,rb,.2 + rand(1001)*.001*.6);\n' + 'rc = if(rc,rc,.2 + rand(1001)*.001*.6);\n' + 'rd = if(rd,rd,.2 + rand(1001)*.001*.6);\n' + 're = if(re,re,.2 + rand(1001)*.001*.6);\n' + 'ti = vt*2;\n' + 'cx = .3 + .1*sin(ti*re) + .1*cos(ti*rc);\n' + 'cy = .5 + .2*sin(ti*rb) + .1*cos(ti*rd);\n' + 'q7 = 6;\n' + 'q8 = 2.8;'),
	'pixel_eqs_str' : ('xnum = q7;\n' + 'ynum = q8;\n' + 'pi = 3.141592654;\n' + 'xseg = int(x*xnum);\n' + 'yseg = int(y*ynum);\n' + 'xsw = equal((xseg+equal(yseg%2,0))%2,0);\n' + 'ysw = equal((yseg+1)%2,0);\n' + 'ox = x - xseg*(1/xnum);\n' + 'ox = if(xsw,1/xnum - ox,ox);\n' + 'oy = y - yseg*(1/ynum);\n' + 'oy = if(ysw,1/ynum - oy,oy);\n' + 'dx = above(xseg+yseg,0)*(x-ox);\n' + 'dy = above(xseg+yseg,0)*(y-oy);\n' + 'rot = rot*(1-above(xseg+yseg,0));'),
};

return pmap;
});
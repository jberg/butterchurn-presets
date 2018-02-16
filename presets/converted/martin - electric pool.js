define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.980001,
		wave_g : 0.4,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.0067,
		brighten : 0.0,
		mv_y : 47.999996,
		wave_scale : 4.615516,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.9999,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.3,
		fshader : 0.0,
		wave_r : 0.45,
		ib_r : 0.25,
		mv_b : 0.6999,
		echo_zoom : 0.999998,
		ob_size : 0.06,
		b1ed : 0.0,
		wave_smoothing : 0.81,
		warpanimspeed : 1.4595,
		wave_dots : 0.0,
		mv_g : 0.2,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.15,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.32,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 0.6,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.47,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.index2 = 0;
m.q1 = 0;
m.index3 = 0;
m.p1 = 0;
m.q2 = 0;
m.index4 = 0;
m.p2 = 0;
m.q3 = 0;
m.ready = 0;
m.q4 = 0;
m.q5 = 0;
m.k1 = 0;
m.is_beat2 = 0;
m.go = 0;
m.movez = 0;
m.is_beat = 0;
m.dec_med = 0;
m.q20 = 0;
m.q31 = 0;
m.q21 = 0;
m.q32 = 0;
m.q22 = 0;
m.index = 0;
m.q23 = 0;
m.avg = 0;
m.sp0 = 0;
m.q24 = 0;
m.q26 = 0;
m.q27 = 0;
m.beat = 0;
m.q28 = 0;
m.q29 = 0;
m.q19 = 0;
m.t0 = 0;
m.rott = 0;
m.dec_slow = 0;
m.peak = 0;
m.index4 = rand(2);
m.index3 = rand(4);
		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.6, div(30,m.fps));
m.dec_slow = pow(0.99, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.1+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),4);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),4);
m.index3 = mod((m.index3+((m.is_beat*bnot(m.index))*bnot(m.index2))),4);
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.q24 = m.is_beat;
m.q26 = ((m.bass+m.mid)+m.treb);
m.ready = ((m.is_beat*bnot(m.ready))+(bnot(m.is_beat2)*m.ready));
m.is_beat2 = (m.ready*above(m.time, (m.t0+0.2)));
m.q19 = m.is_beat2;
m.k1 = (m.is_beat*equal(m.index, 0));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.rott = div((m.p2*3.14159265359),2);
m.q27 = (m.index+1);
m.q28 = (m.index2+1);
m.q29 = ((m.index3*4)+1);
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.sp0 = ((m.dec_slow*m.sp0)+((m.q24+0.05)*(1-m.dec_slow)));
m.go = ((m.go*m.dec_med)+((1-m.dec_med)*(1-bnot((m.index2+m.index3)))));
m.movez = (m.movez+(div((0.015*30),m.fps)*m.go));
m.q31 = m.movez;
m.q32 = (0.5+(0.02*Math.sin(div(m.time,5))));
m.q5 = mod(m.index4,2);
m.zoom = 1;
m.rot = 0;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.6,
			enabled : 1.0,
			b : 0.5,
			g : 0.5,
			scaling : 0.891519,
			samples : 102.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 10.0,
			},
		'init_eqs' : function(m) {
m.k0 = 0;
m.k1 = 0;
m.k2 = 0;
m.ox = 0;
m.oy = 0;
m.ix = 0;
m.iy = 0;
m.dx = 0;
m.dy = 0;
m.q26 = 0;
m.sp = 0;
m.t2 = 0;

			m.rkeys = ['ox','oy','dx','dy'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t2 = (m.t2+m.bass_att);
		return m;
	},
		'point_eqs' : function(m) {
m.k0 = Math.floor((100.0*m.sample));
m.k2 = Math.floor(((100.0*m.sample)+1));
m.k1 = equal(mod(m.k0,2), 0);
m.k2 = equal(mod(m.k0,2), 1);
m.ix = (mod((100*m.value1),7)-3);
m.iy = (mod((100*m.value2),7)-3);
m.sp = (m.bass_att+m.treb_att);
m.sp = div(m.sp,3000);
m.dx = ((m.dx+(m.sp*m.ix))*0.99);
m.dy = ((m.dy+(m.sp*m.iy))*0.99);
m.ox = ((m.k1*m.dx)+((1-m.k1)*m.ox));
m.oy = ((m.k2*m.dy)+((1-m.k2)*m.oy));
m.x = (m.ox+0.5);
m.y = (m.oy+0.5);
m.r = 0.6;
m.g = 0.8;
m.b = 0.9;
m.a = (0.1+div(m.q26,8));
m.a = div(Math.max(m.a, 1),4);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t2 = t2 + bass_att;'),
		'point_eqs_str' : ('k0 = int(100.0*sample);\n' + 'k2 = int(100.0*sample+1);\n' + 'k1 = equal(k0%2,0);\n' + 'k2 = equal(k0%2,1);\n' + 'ix = (100*value1)%7-3;\n' + 'iy = (100*value2)%7-3;\n' + 'sp = bass_att + treb_att;\n' + 'sp = sp /3000;\n' + 'dx = (dx+sp*ix) * .99;\n' + 'dy = (dy+sp*iy) * .99 ;\n' + 'ox = k1*dx + (1-k1)*ox;\n' + 'oy = k2*dy + (1-k2)*oy;\n' + 'x = ox+.5;\n' + 'y = oy+.5;\n' + 'r = .6;\n' + 'g = .8;\n' + 'b = .9;\n' + 'a = .1 + q26/8;\n' + 'a = max(a,1) / 4;'),

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
			r2 : 0.6,
			a : 0.7,
			enabled : 1.0,
			b : 0.7,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.4928,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.6,
			b2 : 0.6999,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.0882,
			x : 0.53,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.3,
			},
		'init_eqs' : function(m) {
m.rr1 = 0;
m.seed = 0;
m.q24 = 0;
m.q28 = 0;
m.trig = 0;

			m.rkeys = ['rr1'];
			return m;
		},
		'frame_eqs' : function(m) {
m.trig = (equal(mod(m.q28,2), 1)*m.q24);
m.seed = sqr((m.time-Math.floor(m.time)));
m.rr1 = ((m.rr1*(1-m.trig))+(m.seed*m.trig));
m.textured = bnot(m.q24);
m.ang = (div(3.1416,4)*m.q28);
m.ang = 0;
m.x = 0.5;
m.y = m.x;
m.border_a = 0.5;
m.a = 0.8;
m.a2 = 0.5;
m.rad = ((0.4*m.rr1)+0.0);
m.rad = 0.35;
m.tex_zoom = div(0.8,m.rad);
m.tex_zoom = 2;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trig = equal(q28%2,1)*q24;\n' + 'seed = sqr(time - int(time));\n' + 'rr1 = rr1 * (1-trig) + seed*trig;\n' + 'textured = bnot(q24);\n' + 'ang = 3.1416 /4 * q28;\n' + 'ang = 0;\n' + 'x = .5;\n' + ' y = x;\n' + 'border_a = .5;\n' + 'a = .8;\n' + ' a2 = .5;\n' + 'rad = 0.4*rr1+.0;\n' + 'rad = .35;\n' + 'tex_zoom = .8/rad;\n' + 'tex_zoom = 2;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.03,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.028461,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.159625,
			x : 0.46,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.5,
			},
		'init_eqs' : function(m) {
m.is_beat = 0;
m.q21 = 0;
m.t0 = 0;

			m.rkeys = ['t0'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = div(rand(10),10);
m.y = div(rand(10),10);
m.r = div(rand(4),3);
m.g = div(rand(4),3);
m.b = div(rand(4),3);
m.is_beat = above(m.time, (m.t0+0.03));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.a = (Math.min(div(m.q21,2), 0.9)*m.is_beat);
m.rad = div((m.a*m.a),3);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = rand(10)/10;\n' + 'y = rand(10)/10;\n' + 'r = rand(4)/3;\n' + 'g = rand(4)/3;\n' + 'b = rand(4)/3;\n' + 'is_beat = above(time, t0+.03);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'a = min(q21/2 ,.9) * is_beat;\n' + 'rad = a*a/3 ;'),

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
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.499805,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.049138,
			x : 0.553,
			y : 0.6,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.5,
			},
		'init_eqs' : function(m) {
m.q24 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.textured = bnot(m.q24);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('textured = bnot(q24);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.5,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.628319,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 4.461715,
			additive : 0.0,
			border_a : 0.4,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.5,
			border_g : 0.5,
			rad : 0.202682,
			x : 0.45,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.5,
			},
		'init_eqs' : function(m) {
m.q22 = 0;
m.q24 = 0;
m.dx = 0;
m.dy = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.dx = (div(rand(1000),1000)-0.5);
m.dy = (div(rand(1000),1000)-0.5);
m.x = (0.5+(m.dx*(1-div(m.q22,4))));
m.y = (0.5+(m.dy*(1-div(m.q22,4))));
m.ang = div(rand(320),100);
m.a = 1;
m.rad = (((0.1*m.q24)+0.08)+div(m.q22,40));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('dx =  rand(1000)/1000-.5;\n' + 'dy =  rand(1000)/1000-.5;\n' + 'x = .5 + dx*(1-q22/4);\n' + 'y = .5 + dy*(1-q22/4);\n' + 'ang = rand(320)/100;\n' + 'a = 1;\n' + 'rad = .1*q24+0.08 +q22/40;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 noiseVal_2;\n' + '   vec2 P_3;\n' + '  P_3 = (((\n' + '    (texsize.xy * texsize_noise_lq.zw)\n' + '  .x * uv) * 0.02) + (0.1 * rand_frame).xy);\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = vec3(dot (texture2D (sampler_noise_lq, P_3), vec4(0.32, 0.49, 0.29, 0.0)));\n' + '  noiseVal_2 = tmpvar_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = ((uv * texsize.xy) * 0.08);\n' + '  uv_1 = (uv - ((\n' + '    (sin(tmpvar_5) / cos(tmpvar_5))\n' + '   * texsize.zw) * 3.0));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv_1);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (tmpvar_6.xyz + (noiseVal_2 / 30.0));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = ((mix (tmpvar_7, \n' + '    (1.0 - tmpvar_7.zyx)\n' + '  , vec3(0.01, 0.01, 0.01)) - 0.03) - (0.2 * pow (\n' + '    (1.0 - rad)\n' + '  , 18.0)));\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec3 xlat_mutablenoise;\n' + 'highp vec3 xlat_mutableret1;\n' + 'highp vec2 xlat_mutablers;\n' + 'shader_body {\n' + '   vec2 uv1_1;\n' + '   mat2 tmpvar_2;\n' + '  tmpvar_2[0] = _qa.xy;\n' + '  tmpvar_2[1] = _qa.zw;\n' + '  uv1_1 = (((uv - 0.5) * aspect.xy) * tmpvar_2);\n' + '   float tmpvar_3;\n' + '  tmpvar_3 = (0.15 / abs(uv1_1.y));\n' + '  xlat_mutablers.x = (uv1_1.x * tmpvar_3);\n' + '  xlat_mutablers.y = ((tmpvar_3 / 2.0) + (time * 2.0));\n' + '   vec2 P_4;\n' + '  P_4 = (2.0 * xlat_mutablers);\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_noise_hq, P_4).xyz;\n' + '  xlat_mutablenoise = tmpvar_5;\n' + '  bvec3 tmpvar_6;\n' + '  tmpvar_6 = greaterThanEqual (xlat_mutablenoise, vec3(0.0, 0.0, 0.0));\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = vec3(tmpvar_6);\n' + '  xlat_mutablenoise = (xlat_mutablenoise * tmpvar_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (((\n' + '    (uv1_1 * (1.0 - ((\n' + '      abs(uv1_1.x)\n' + '     * 2.0) * _qg.z)))\n' + '   + 0.5) + (0.02 * _qg.z)) - (xlat_mutablenoise * 0.08).xy);\n' + '  tmpvar_8 = texture2D (sampler_main, P_9);\n' + '  xlat_mutableret1 = tmpvar_8.xyz;\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = (2.0 * xlat_mutableret1);\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('index4 = rand(2);\n' + 'index3 = rand(4);'),
	'frame_eqs_str' : ('dec_med = pow (0.6, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .1+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %4;\n' + 'index2 = (index2 + is_beat*bnot(index))%4;\n' + 'index3 = (index3 + is_beat*bnot(index)*bnot(index2))%4;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = bass + mid + treb;\n' + 'ready = is_beat * bnot(ready) + bnot(is_beat2)*ready;\n' + 'is_beat2 = ready * above (time, t0+.2);\n' + 'q19 = is_beat2;\n' + 'k1 =  is_beat*equal(index,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'rott = p2 * 3.14159265359/2;\n' + 'q27 = index+1;\n' + 'q28 = index2+1;\n' + 'q29 = index3*4+1;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'sp0 = dec_slow*sp0 + (q24+.05)*(1-dec_slow);\n' + 'go = go * dec_med + (1-dec_med)*(1-bnot(index2+index3));\n' + 'movez = movez + .015*30/fps * go ;\n' + 'q31 = movez;\n' + 'q32 = .5 + .02*sin(time/5);\n' + 'q5 = index4%2;\n' + 'zoom = 1;\n' + ' rot = 0;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
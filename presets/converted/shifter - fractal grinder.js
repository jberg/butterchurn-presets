define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.157176,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.842831,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 0.741631,
		ob_size : 0.05,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.970113,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.004,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 1.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.95,
		wave_a : 4.099998,
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
m.tt = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q7 = 0;
m.mt = 0;
m.q8 = 0;
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
m.wave_a = 0;
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
m.sp = (Math.abs((m.vav-m.slide))*0.1);
m.slide = ifcond(above(m.slide, m.vav), (m.slide-(m.tic*m.sp)), (m.slide+(m.tic*m.sp)));
m.slide = 1.4;
m.q1 = (m.vt*0.5);
m.q2 = (m.tt*0.1);
m.q3 = (m.mt*0.1);
m.q4 = (m.bt*0.1);
m.q5 = (0.5*m.slide);
m.q7 = (m.vt*0.1);
m.q8 = (m.time*0.1);
m.decay = 1;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.ab = 0;
m.q2 = 0;
m.yang = 0;
m.q3 = 0;
m.xang = 0;
m.q4 = 0;
m.ag = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.vb = 0;
m.fov = 0;
m.mz = 0;
m.dis = 0;
m.tic = 0;
m.ar = 0;
m.vg = 0;
m.ti = 0;
m.vr = 0;
m.tir = 0;
m.sp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tic = Math.min((m.time-m.tir), 0.1);
m.tir = m.time;
m.ti = ((m.ti+(m.tic*0.5))+((below(((m.vr+m.vg)+m.vb), 0.4)*m.tic)*8));
m.vr = (0.75+(0.25*Math.sin(((m.ti*1.132)+1))));
m.vg = (0.75+(0.25*Math.sin(((m.ti*1.121)+1))));
m.vb = (0.75+(0.25*Math.sin(((m.ti*1.187)+1))));
m.ar = m.vr;
m.ag = m.vg;
m.ab = m.vb;
		return m;
	},
		'point_eqs' : function(m) {
m.sp = (m.sample*10);
m.ti = m.time;
m.ox = ((((rand(1001)*0.001)+(rand(1001)*0.001))-(rand(1001)*0.001))-(rand(1001)*0.001));
m.oy = ((((rand(1001)*0.001)+(rand(1001)*0.001))-(rand(1001)*0.001))-(rand(1001)*0.001));
m.oz = ((((rand(1001)*0.001)+(rand(1001)*0.001))-(rand(1001)*0.001))-(rand(1001)*0.001));
m.dis = pow((((m.ox*m.ox)+(m.oy*m.oy))+(m.oz*m.oz)), 0.5);
m.ox = ((sign(m.ox)*pow(m.ox, 4))*2);
m.oy = ((sign(m.oy)*pow(m.oy, 4))*2);
m.oz = ((sign(m.oz)*pow(m.oz, 4))*2);
m.a = ((1.732-m.dis)*0.57735);
m.xang = m.q2;
m.yang = m.q3;
m.zang = m.q4;
m.fov = 0.5;
m.mx = ((m.ox*Math.cos(m.yang))+(m.oz*Math.sin(m.yang)));
m.mz = ((-m.ox*Math.sin(m.yang))+(m.oz*Math.cos(m.yang)));
m.ox = m.mx;
m.oz = m.mz;
m.mx = ((m.ox*Math.cos(m.zang))-(m.oy*Math.sin(m.zang)));
m.my = ((m.ox*Math.sin(m.zang))+(m.oy*Math.cos(m.zang)));
m.ox = m.mx;
m.oy = m.my;
m.my = ((m.oy*Math.cos(m.xang))-(m.oz*Math.sin(m.xang)));
m.mz = ((m.oy*Math.sin(m.xang))+(m.oz*Math.cos(m.xang)));
m.oy = m.my;
m.oz = m.mz;
m.oz = (((m.oz-(Math.floor((m.oz*0.2))*5))-5)*2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tic = min(time-tir,.1);\n' + 'tir = time;\n' + 'ti = ti + tic*.5 + below(vr+vg+vb,.4)*tic*8;\n' + 'vr = .75 + .25*sin(ti*1.132 + 1);\n' + 'vg = .75 + .25*sin(ti*1.121 + 1);\n' + 'vb = .75 + .25*sin(ti*1.187 + 1);\n' + 'ar=vr;\n' + 'ag=vg;\n' + 'ab=vb;'),
		'point_eqs_str' : ('sp = sample*10;\n' + 'ti = time;\n' + 'ox = (rand(1001)*.001 + rand(1001)*.001 - rand(1001)*.001 - rand(1001)*.001);\n' + 'oy = (rand(1001)*.001 + rand(1001)*.001 - rand(1001)*.001 - rand(1001)*.001);\n' + 'oz = (rand(1001)*.001 + rand(1001)*.001 - rand(1001)*.001 - rand(1001)*.001);\n' + 'dis = pow(ox*ox + oy*oy + oz*oz,.5);\n' + 'ox = sign(ox)*pow(ox,4)*2;\n' + 'oy = sign(oy)*pow(oy,4)*2;\n' + 'oz = sign(oz)*pow(oz,4)*2;\n' + 'a = (1.732 - dis)*.57735;\n' + 'xang = q2;\n' + 'yang = q3;\n' + 'zang = q4;\n' + 'fov = .5;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = (oz - int(oz*.2)*5 - 5)*2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.ab = 0;
m.q2 = 0;
m.yang = 0;
m.q3 = 0;
m.xang = 0;
m.q4 = 0;
m.ag = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.vb = 0;
m.fov = 0;
m.mz = 0;
m.dis = 0;
m.tic = 0;
m.ar = 0;
m.vg = 0;
m.ti = 0;
m.vr = 0;
m.tir = 0;
m.sp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tic = Math.min((m.time-m.tir), 0.1);
m.tir = m.time;
m.ti = ((m.ti+(m.tic*0.5))+((below(((m.vr+m.vg)+m.vb), 0.4)*m.tic)*8));
m.vr = (0.75+(0.25*Math.sin(((m.ti*1.132)+1))));
m.vg = (0.75+(0.25*Math.sin(((m.ti*1.121)+1))));
m.vb = (0.75+(0.25*Math.sin(((m.ti*1.187)+1))));
m.ar = m.vr;
m.ag = m.vg;
m.ab = m.vb;
		return m;
	},
		'point_eqs' : function(m) {
m.sp = (m.sample*10);
m.ti = m.time;
m.ox = ((((rand(1001)*0.001)+(rand(1001)*0.001))-(rand(1001)*0.001))-(rand(1001)*0.001));
m.oy = ((((rand(1001)*0.001)+(rand(1001)*0.001))-(rand(1001)*0.001))-(rand(1001)*0.001));
m.oz = ((((rand(1001)*0.001)+(rand(1001)*0.001))-(rand(1001)*0.001))-(rand(1001)*0.001));
m.dis = pow((((m.ox*m.ox)+(m.oy*m.oy))+(m.oz*m.oz)), 0.5);
m.ox = ((sign(m.ox)*pow(m.ox, 4))*2);
m.oy = ((sign(m.oy)*pow(m.oy, 4))*2);
m.oz = ((sign(m.oz)*pow(m.oz, 4))*2);
m.a = ((1.732-m.dis)*0.57735);
m.xang = m.q2;
m.yang = m.q3;
m.zang = m.q4;
m.fov = 0.5;
m.mx = ((m.ox*Math.cos(m.yang))+(m.oz*Math.sin(m.yang)));
m.mz = ((-m.ox*Math.sin(m.yang))+(m.oz*Math.cos(m.yang)));
m.ox = m.mx;
m.oz = m.mz;
m.mx = ((m.ox*Math.cos(m.zang))-(m.oy*Math.sin(m.zang)));
m.my = ((m.ox*Math.sin(m.zang))+(m.oy*Math.cos(m.zang)));
m.ox = m.mx;
m.oy = m.my;
m.my = ((m.oy*Math.cos(m.xang))-(m.oz*Math.sin(m.xang)));
m.mz = ((m.oy*Math.sin(m.xang))+(m.oz*Math.cos(m.xang)));
m.oy = m.my;
m.oz = m.mz;
m.oz = (((m.oz-(Math.floor((m.oz*0.2))*5))-5)*2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tic = min(time-tir,.1);\n' + 'tir = time;\n' + 'ti = ti + tic*.5 + below(vr+vg+vb,.4)*tic*8;\n' + 'vr = .75 + .25*sin(ti*1.132 + 1);\n' + 'vg = .75 + .25*sin(ti*1.121 + 1);\n' + 'vb = .75 + .25*sin(ti*1.187 + 1);\n' + 'ar=vr;\n' + 'ag=vg;\n' + 'ab=vb;'),
		'point_eqs_str' : ('sp = sample*10;\n' + 'ti = time;\n' + 'ox = (rand(1001)*.001 + rand(1001)*.001 - rand(1001)*.001 - rand(1001)*.001);\n' + 'oy = (rand(1001)*.001 + rand(1001)*.001 - rand(1001)*.001 - rand(1001)*.001);\n' + 'oz = (rand(1001)*.001 + rand(1001)*.001 - rand(1001)*.001 - rand(1001)*.001);\n' + 'dis = pow(ox*ox + oy*oy + oz*oz,.5);\n' + 'ox = sign(ox)*pow(ox,4)*2;\n' + 'oy = sign(oy)*pow(oy,4)*2;\n' + 'oz = sign(oz)*pow(oz,4)*2;\n' + 'a = (1.732 - dis)*.57735;\n' + 'xang = q2;\n' + 'yang = q3;\n' + 'zang = q4;\n' + 'fov = .5;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = (oz - int(oz*.2)*5 - 5)*2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.ab = 0;
m.q2 = 0;
m.yang = 0;
m.q3 = 0;
m.xang = 0;
m.q4 = 0;
m.ag = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.vb = 0;
m.fov = 0;
m.mz = 0;
m.dis = 0;
m.tic = 0;
m.ar = 0;
m.vg = 0;
m.ti = 0;
m.vr = 0;
m.tir = 0;
m.sp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tic = Math.min((m.time-m.tir), 0.1);
m.tir = m.time;
m.ti = ((m.ti+(m.tic*0.5))+((below(((m.vr+m.vg)+m.vb), 0.4)*m.tic)*8));
m.vr = (0.75+(0.25*Math.sin(((m.ti*1.132)+1))));
m.vg = (0.75+(0.25*Math.sin(((m.ti*1.121)+1))));
m.vb = (0.75+(0.25*Math.sin(((m.ti*1.187)+1))));
m.ar = m.vr;
m.ag = m.vg;
m.ab = m.vb;
		return m;
	},
		'point_eqs' : function(m) {
m.sp = (m.sample*10);
m.ti = m.time;
m.ox = ((((rand(1001)*0.001)+(rand(1001)*0.001))-(rand(1001)*0.001))-(rand(1001)*0.001));
m.oy = ((((rand(1001)*0.001)+(rand(1001)*0.001))-(rand(1001)*0.001))-(rand(1001)*0.001));
m.oz = ((((rand(1001)*0.001)+(rand(1001)*0.001))-(rand(1001)*0.001))-(rand(1001)*0.001));
m.dis = pow((((m.ox*m.ox)+(m.oy*m.oy))+(m.oz*m.oz)), 0.5);
m.ox = ((sign(m.ox)*pow(m.ox, 3))*8);
m.oy = ((sign(m.oy)*pow(m.oy, 3))*8);
m.oz = ((sign(m.oz)*pow(m.oz, 3))*8);
m.a = ((1.732-m.dis)*0.57735);
m.xang = m.q2;
m.yang = m.q3;
m.zang = m.q4;
m.fov = 0.5;
m.mx = ((m.ox*Math.cos(m.yang))+(m.oz*Math.sin(m.yang)));
m.mz = ((-m.ox*Math.sin(m.yang))+(m.oz*Math.cos(m.yang)));
m.ox = m.mx;
m.oz = m.mz;
m.mx = ((m.ox*Math.cos(m.zang))-(m.oy*Math.sin(m.zang)));
m.my = ((m.ox*Math.sin(m.zang))+(m.oy*Math.cos(m.zang)));
m.ox = m.mx;
m.oy = m.my;
m.my = ((m.oy*Math.cos(m.xang))-(m.oz*Math.sin(m.xang)));
m.mz = ((m.oy*Math.sin(m.xang))+(m.oz*Math.cos(m.xang)));
m.oy = m.my;
m.oz = m.mz;
m.oz = (((m.oz-(Math.floor((m.oz*0.2))*5))-5)*2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tic = min(time-tir,.1);\n' + 'tir = time;\n' + 'ti = ti + tic*.5 + below(vr+vg+vb,.4)*tic*8;\n' + 'vr = .75 + .25*sin(ti*1.132 + 1);\n' + 'vg = .75 + .25*sin(ti*1.121 + 1);\n' + 'vb = .75 + .25*sin(ti*1.187 + 1);\n' + 'ar=vr;\n' + 'ag=vg;\n' + 'ab=vb;'),
		'point_eqs_str' : ('sp = sample*10;\n' + 'ti = time;\n' + 'ox = (rand(1001)*.001 + rand(1001)*.001 - rand(1001)*.001 - rand(1001)*.001);\n' + 'oy = (rand(1001)*.001 + rand(1001)*.001 - rand(1001)*.001 - rand(1001)*.001);\n' + 'oz = (rand(1001)*.001 + rand(1001)*.001 - rand(1001)*.001 - rand(1001)*.001);\n' + 'dis = pow(ox*ox + oy*oy + oz*oz,.5);\n' + 'ox = sign(ox)*pow(ox,3)*8;\n' + 'oy = sign(oy)*pow(oy,3)*8;\n' + 'oz = sign(oz)*pow(oz,3)*8;\n' + 'a = (1.732 - dis)*.57735;\n' + 'xang = q2;\n' + 'yang = q3;\n' + 'zang = q4;\n' + 'fov = .5;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = (oz - int(oz*.2)*5 - 5)*2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.q2 = 0;
m.yang = 0;
m.q3 = 0;
m.xang = 0;
m.mod = 0;
m.q4 = 0;
m.q7 = 0;
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
m.ra = 0;
m.rb = 0;
m.tin = 0;
m.sp = 0;
m.sam = 0;

			m.rkeys = ['tin'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ra = 0.7;
m.rb = 0.1;
m.pib = 6.28318530718;
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = ifcond(equal(m.sample, 0), m.time, m.tin);
m.mod = pow(m.pib, 21);
m.med = 1;
m.sp = (((m.sample*m.pib)*m.mod)+(m.time*1));
m.sam = ((m.sample*m.med)-m.q7);
m.ox = (m.ra*Math.sin((m.sam*m.pib)));
m.oy = (m.ra*Math.cos((m.sam*m.pib)));
m.ox = (m.ox+((m.rb*-Math.cos(m.sp))*Math.sin((m.sam*m.pib))));
m.oz = (m.rb*-Math.sin(m.sp));
m.oy = (m.oy+((m.rb*-Math.cos(m.sp))*Math.cos((m.sam*m.pib))));
m.a = (0.5+(0.5*Math.cos((((m.sample*m.pib)*3)+(m.pib*0.5)))));
m.xang = m.q2;
m.yang = m.q3;
m.zang = m.q4;
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
		'point_eqs_str' : ('ra = .7;\n' + 'rb = .1;\n' + 'pib = 6.28318530718;\n' + 'tic = min(time-tin,.1);\n' + 'tin = if(equal(sample,0),time,tin);\n' + 'mod = pow(pib,21);\n' + 'med = 1;\n' + 'sp = sample*pib*mod + time*1;\n' + 'sam = sample*med - q7;\n' + 'ox = ra*sin(sam*pib);\n' + 'oy = ra*cos(sam*pib);\n' + 'ox = ox + rb*-cos(sp)*sin(sam*pib);\n' + 'oz = rb*-sin(sp);\n' + 'oy = oy + rb*-cos(sp)*cos(sam*pib);\n' + 'a = .5 + .5*cos(sample*pib*3 + pib*.5);\n' + 'xang = q2;\n' + 'yang = q3;\n' + 'zang = q4;\n' + 'fov = .5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = oz - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

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
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.756813,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.608571,
			x : 0.8,
			y : 0.2,
			ang : 0.0,
			sides : 74.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
m.te = 1;
m.poly = 5;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = -m.q1;
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;\n' + 'te = 1;\n' + 'poly = 5;'),
		'frame_eqs_str' : ('ang = -q1;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 3.141593,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.756813,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.608571,
			x : 0.2,
			y : 0.8,
			ang : 0.0,
			sides : 74.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
m.te = 1;
m.poly = 5;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = -m.q1;
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;\n' + 'te = 1;\n' + 'poly = 5;'),
		'frame_eqs_str' : ('ang = -q1;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 3.141593,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.756813,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.608571,
			x : 0.2,
			y : 0.2,
			ang : 0.0,
			sides : 74.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
m.te = 1;
m.poly = 5;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = m.q1;
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;\n' + 'te = 1;\n' + 'poly = 5;'),
		'frame_eqs_str' : ('ang = q1;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 3.141593,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.756813,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.608571,
			x : 0.8,
			y : 0.8,
			ang : 0.0,
			sides : 74.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
m.te = 1;
m.poly = 5;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = m.q1;
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;\n' + 'te = 1;\n' + 'poly = 5;'),
		'frame_eqs_str' : ('ang = q1;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_a = 0;\n' + 'tic = min(time-tin,.1);\n' + 'tin = time;\n' + 'ra = 10;\n' + 'treb_avg = tic*(treb_avg*(1/tic - ra) + ra*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - ra) + ra*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - ra) + ra*bass);\n' + 'vav = tic*(vav*(1/tic - ra) + ra*(bass+treb+mid)*.33333);\n' + 'tt = tt + tic*treb_avg;\n' + 'mt = mt + tic*mid_avg;\n' + 'bt = bt + tic*bass_avg;\n' + 'vt = vt + tic*vav;\n' + 'sp = abs(vav - slide)*.1;\n' + 'slide = if(above(slide,vav),slide-tic*sp,slide+tic*sp);\n' + 'slide = 1.4;\n' + 'q1 = vt*.5;\n' + 'q2 = tt*.1;\n' + 'q3 = mt*.1;\n' + 'q4 = bt*.1;\n' + 'q5 = .5*slide;\n' + 'q7 = vt*.1;\n' + 'q8 = time*.1;\n' + 'decay = 1;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
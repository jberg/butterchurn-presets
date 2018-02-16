define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.400001,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 9.0,
		wave_scale : 1.285751,
		echo_alpha : 0.65,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.999835,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.9,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 4.56774,
		ob_size : 0.5,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999512,
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
		decay : 0.65,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.aq1 = 0;
m.q3 = 0;
m.aq2 = 0;
m.q4 = 0;
m.aq3 = 0;
m.aq4 = 0;
m.q8 = 0;
m.tic = 0;
m.tb = 0;
m.vol = 0;
m.tin = 0;
m.tm = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.vol = (0.1*((m.vol*9)+(((m.bass_att+m.mid_att)+m.treb_att)*0.333333)));
m.q1 = (0.4+(m.vol*0.3));
m.q8 = m.bass;
m.tic = (m.time-m.tin);
m.tin = m.time;
m.tb = (m.tb+(m.tic*m.bass_att));
m.q2 = (m.tb*0.9);
m.tm = (m.tm+(m.tic*m.mid_att));
m.q3 = (m.tm*0.9);
m.tt = (m.tt+(m.tic*m.treb_att));
m.q4 = (m.tt*0.9);
m.q1 = Math.min(m.q1, 1);
m.aq1 = 0.5;
m.aq2 = 0;
m.aq3 = 9.5;
m.aq4 = 0;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.ss = 0;
m.zang = 0;
m.q2 = 0;
m.yang = 0;
m.azang = 0;
m.q3 = 0;
m.xang = 0;
m.ayang = 0;
m.mod = 0;
m.q4 = 0;
m.axang = 0;
m.q8 = 0;
m.sz = 0;
m.ox = 0;
m.oy = 0;
m.it = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.vol = 0;
m.tin = 0;
m.sp = 0;

			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tin = m.vol;
		return m;
	},
		'point_eqs' : function(m) {
m.sp = ((((m.sample*6.28)*8)*8)*4);
m.it = (m.it+1);
m.it = (m.it*above(m.sample, 0));
m.sz = m.q8;
m.ss = (m.sample*6);
m.ox = (((((m.sz*0.5)*pow(-1, m.it))*below(m.ss, 1))+((((0.5*pow(-1, m.it))*above(m.ss, 1))*m.sz)*below(m.ss, 2)))+((((above(m.ss, 2)*0.5)*pow(-1, m.it))*m.sz)*below(m.ss, 3)));
m.oy = ((((((m.ss-0.5)*Math.sin(m.time))*m.sz)*below(m.ss, 1))+(((m.sz*Math.sin(m.time))*above(m.ss, 1))*below(m.ss, 2)))+(((((0.5-(m.ss-2))*m.sz)*Math.sin(m.time))*above(m.ss, 2))*below(m.ss, 3)));
m.oz = ((((-m.sz*0.5)*below(m.ss, 1))+((((((m.ss-1)-0.5)*m.sz)*Math.sin(m.time))*above(m.ss, 1))*below(m.ss, 2)))+((((m.sz*Math.cos(m.time))*0.5)*above(m.ss, 2))*below(m.ss, 3)));
m.ox = (((m.ox+(((above(m.ss, 3)*below(m.ss, 4))*-0.5)*m.sz))+(((above(m.ss, 4)*below(m.ss, 5))*m.sz)*(-0.5+(m.ss-4))))+((above(m.ss, 5)*m.sz)*0.5));
m.oy = (((m.oy+((((above(m.ss, 3)*below(m.ss, 4))*0.5)*m.sz)*pow(-1, m.it)))+(((above(m.ss, 4)*below(m.ss, 5))*m.sz)*-0.5))+((above(m.ss, 5)*m.sz)*(-0.5+(m.ss-5))));
m.oz = (((m.oz+(((above(m.ss, 3)*below(m.ss, 4))*m.sz)*(0.5-(m.ss-3))))+((((above(m.ss, 4)*below(m.ss, 5))*m.sz)*0.5)*pow(-1, m.it)))+(((above(m.ss, 5)*m.sz)*0.5)*pow(-1, m.it)));
m.xang = m.q2;
m.axang = 0;
m.yang = m.q3;
m.ayang = 0;
m.zang = m.q4;
m.azang = 0;
m.fov = 0.3;
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
m.a = 0.05;
m.mod = ((m.oz+1)*0.5);
m.a = (m.a*Math.max(Math.min(m.mod, 1), 0));
m.oz = (m.oz-2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
m.r = (1+Math.sin(m.sp));
m.g = (0.5+(0.5*Math.sin((m.sample*1.57))));
m.b = (0.5+(0.5*Math.cos((m.sample*1.57))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tin=vol;'),
		'point_eqs_str' : ('sp = sample*6.28*8*8*4;\n' + 'it = it+1;\n' + 'it = it*above(sample,0);\n' + 'sz = q8;\n' + 'ss = sample*6;\n' + 'ox = sz*.5*pow(-1,it)*below(ss,1) + .5*pow(-1,it)*above(ss,1)*sz*below(ss,2) + above(ss,2)*.5*pow(-1,it)*sz*below(ss,3);\n' + 'oy = (ss-.5)*sin(time)*sz*below(ss,1) + sz*sin(time)*above(ss,1)*below(ss,2) + (.5-(ss-2))*sz*sin(time)*above(ss,2)*below(ss,3);\n' + 'oz = -sz*.5*below(ss,1) + ((ss-1)-.5)*sz*sin(time)*above(ss,1)*below(ss,2) + sz*cos(time)*.5*above(ss,2)*below(ss,3);\n' + 'ox = ox + above(ss,3)*below(ss,4)*-.5*sz + above(ss,4)*below(ss,5)*sz*(-.5+(ss-4)) + above(ss,5)*sz*.5;\n' + 'oy = oy + above(ss,3)*below(ss,4)*.5*sz*pow(-1,it) + above(ss,4)*below(ss,5)*sz*-.5 + above(ss,5)*sz*(-.5+(ss-5));\n' + 'oz = oz + above(ss,3)*below(ss,4)*sz*(.5-(ss-3)) + above(ss,4)*below(ss,5)*sz*.5*pow(-1,it) + above(ss,5)*sz*.5*pow(-1,it);\n' + 'xang = q2;\n' + 'axang = 0;\n' + 'yang = q3;\n' + 'ayang = 0;\n' + 'zang = q4;\n' + 'azang = 0;\n' + 'fov = .3;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'a = .05;\n' + 'mod = (oz+1)*.5;\n' + 'a = a*max(min(mod,1),0);\n' + 'oz = oz - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;\n' + 'r = 1+sin(sp);\n' + 'g = 0.5 + 0.5*sin(sample*1.57);\n' + 'b = 0.5 + 0.5*cos(sample*1.57);'),

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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.ss = 0;
m.tt = 0;
m.zang = 0;
m.q2 = 0;
m.yang = 0;
m.azang = 0;
m.q3 = 0;
m.xang = 0;
m.ayang = 0;
m.mod = 0;
m.q4 = 0;
m.axang = 0;
m.sz = 0;
m.ox = 0;
m.oy = 0;
m.it = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.tic = 0;
m.ra = 0;
m.br = 0;
m.sh = 0;
m.tin = 0;
m.pi = 0;
m.t1 = 0;
m.sp = 0;

			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tic = (m.time-m.tin);
m.tin = m.time;
m.mod = (0.1*((m.mod*9)+m.bass_att));
m.tt = (m.tt+(m.tic*(((m.mod+1)*(m.mod+1))-1)));
m.t1 = m.tt;
		return m;
	},
		'point_eqs' : function(m) {
m.sp = ((((m.sample*6.28)*8)*8)*4);
m.it = (m.it+1);
m.it = (m.it*above(m.sample, 0));
m.sz = m.q1;
m.pi = 3.141592653;
m.ss = (m.sample*6);
m.ox = (((((m.sz*0.5)*pow(-1, m.it))*below(m.ss, 1))+((((0.5*pow(-1, m.it))*above(m.ss, 1))*m.sz)*below(m.ss, 2)))+((((above(m.ss, 2)*0.5)*pow(-1, m.it))*m.sz)*below(m.ss, 3)));
m.oy = (((((m.ss-0.5)*m.sz)*below(m.ss, 1))+(((m.sz*0.5)*above(m.ss, 1))*below(m.ss, 2)))+((((0.5-(m.ss-2))*m.sz)*above(m.ss, 2))*below(m.ss, 3)));
m.oz = ((((-m.sz*0.5)*below(m.ss, 1))+(((((m.ss-1)-0.5)*m.sz)*above(m.ss, 1))*below(m.ss, 2)))+(((m.sz*0.5)*above(m.ss, 2))*below(m.ss, 3)));
m.ox = (((m.ox+(((above(m.ss, 3)*below(m.ss, 4))*-0.5)*m.sz))+(((above(m.ss, 4)*below(m.ss, 5))*m.sz)*(-0.5+(m.ss-4))))+((above(m.ss, 5)*m.sz)*0.5));
m.oy = (((m.oy+((((above(m.ss, 3)*below(m.ss, 4))*0.5)*m.sz)*pow(-1, m.it)))+(((above(m.ss, 4)*below(m.ss, 5))*m.sz)*-0.5))+((above(m.ss, 5)*m.sz)*(-0.5+(m.ss-5))));
m.oz = (((m.oz+(((above(m.ss, 3)*below(m.ss, 4))*m.sz)*(0.5-(m.ss-3))))+((((above(m.ss, 4)*below(m.ss, 5))*m.sz)*0.5)*pow(-1, m.it)))+(((above(m.ss, 5)*m.sz)*0.5)*pow(-1, m.it)));
m.zang = m.t1;
m.mx = ((m.ox*Math.cos(m.zang))-(m.oy*Math.sin(m.zang)));
m.my = ((m.ox*Math.sin(m.zang))+(m.oy*Math.cos(m.zang)));
m.ox = m.mx;
m.oy = m.my;
m.sh = (m.sz*0.5);
m.br = (div(m.zang,m.pi)+0.5);
m.br = (m.br-(Math.floor((m.br*0.25))*4));
m.br = Math.floor(m.br);
m.ra = pow(((m.sh*m.sh)*2), 0.5);
m.ox = ((((m.ox-((m.sh+(m.ra*Math.sin((-m.zang+(m.pi*0.25)))))*equal(m.br, 0)))-((-m.sh+(m.ra*Math.sin((m.zang+(m.pi*0.25)))))*equal(m.br, 1)))-((-m.sh-(m.ra*Math.sin((-m.zang+(m.pi*0.25)))))*equal(m.br, 2)))-((m.sh-(m.ra*Math.sin((m.zang+(m.pi*0.25)))))*equal(m.br, 3)));
m.oy = ((((m.oy-((m.sh+(m.ra*Math.cos((-m.zang+(m.pi*0.25)))))*equal(m.br, 0)))-((m.sh-(m.ra*Math.cos((m.zang+(m.pi*0.25)))))*equal(m.br, 1)))-((-m.sh-(m.ra*Math.cos((-m.zang+(m.pi*0.25)))))*equal(m.br, 2)))-((-m.sh+(m.ra*Math.cos((m.zang+(m.pi*0.25)))))*equal(m.br, 3)));
m.xang = m.q2;
m.axang = 0;
m.yang = m.q3;
m.ayang = 0;
m.zang = m.q4;
m.azang = 0;
m.fov = 0.3;
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
m.a = 0.05;
m.mod = ((m.oz+1)*0.5);
m.a = (m.a*Math.max(Math.min(m.mod, 1), 0));
m.oz = (m.oz-2);
m.x = (div((m.ox*m.fov),m.oz)+(Math.sin(m.time)*0.3));
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
m.r = -Math.sin(m.sp);
m.g = (0.5-(0.5*Math.sin((m.sample*1.57))));
m.b = (0.5-(0.5*Math.cos((m.sample*1.57))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tic = time - tin;\n' + 'tin = time;\n' + 'mod = .1*(mod*9 + bass_att);\n' + 'tt = tt + tic*((mod+1)*(mod+1)-1);\n' + 't1 = tt;'),
		'point_eqs_str' : ('sp = sample*6.28*8*8*4;\n' + 'it = it+1;\n' + 'it = it*above(sample,0);\n' + 'sz = q1;\n' + 'pi = 3.141592653;\n' + 'ss = sample*6;\n' + 'ox = sz*.5*pow(-1,it)*below(ss,1) + .5*pow(-1,it)*above(ss,1)*sz*below(ss,2) + above(ss,2)*.5*pow(-1,it)*sz*below(ss,3);\n' + 'oy = (ss-.5)*sz*below(ss,1) + sz*.5*above(ss,1)*below(ss,2) + (.5-(ss-2))*sz*above(ss,2)*below(ss,3);\n' + 'oz = -sz*.5*below(ss,1) + ((ss-1)-.5)*sz*above(ss,1)*below(ss,2) + sz*.5*above(ss,2)*below(ss,3);\n' + 'ox = ox + above(ss,3)*below(ss,4)*-.5*sz + above(ss,4)*below(ss,5)*sz*(-.5+(ss-4)) + above(ss,5)*sz*.5;\n' + 'oy = oy + above(ss,3)*below(ss,4)*.5*sz*pow(-1,it) + above(ss,4)*below(ss,5)*sz*-.5 + above(ss,5)*sz*(-.5+(ss-5));\n' + 'oz = oz + above(ss,3)*below(ss,4)*sz*(.5-(ss-3)) + above(ss,4)*below(ss,5)*sz*.5*pow(-1,it) + above(ss,5)*sz*.5*pow(-1,it);\n' + 'zang = t1;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'sh = sz*.5;\n' + 'br = (zang/pi) + .5;\n' + 'br = br - int(br*.25)*4;\n' + 'br = int(br);\n' + 'ra = pow(sh*sh*2,.5);\n' + 'ox = ox - (sh + ra*sin(-zang + pi*.25))*equal(br,0) - (-sh + ra*sin(zang + pi*.25))*equal(br,1) - (-sh - ra*sin(-zang + pi*.25))*equal(br,2) - (sh - ra*sin(zang + pi*.25))*equal(br,3);\n' + 'oy = oy - (sh + ra*cos(-zang + pi*.25))*equal(br,0) - (sh - ra*cos(zang + pi*.25))*equal(br,1) - (-sh - ra*cos(-zang + pi*.25))*equal(br,2) - (-sh + ra*cos(zang + pi*.25))*equal(br,3);\n' + 'xang = q2;\n' + 'axang = 0;\n' + 'yang = q3;\n' + 'ayang = 0;\n' + 'zang = q4;\n' + 'azang = 0;\n' + 'fov = .3;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'a = .05;\n' + 'mod = (oz+1)*.5;\n' + 'a = a*max(min(mod,1),0);\n' + 'oz = oz - 2;\n' + 'x = ox*fov/oz +sin(time)*.3;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;\n' + 'r = -sin(sp);\n' + 'g = 0.5 - 0.5*sin(sample*1.57);\n' + 'b = 0.5 - 0.5*cos(sample*1.57);'),

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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.ss = 0;
m.tt = 0;
m.zang = 0;
m.q2 = 0;
m.yang = 0;
m.azang = 0;
m.q3 = 0;
m.xang = 0;
m.ayang = 0;
m.mod = 0;
m.q4 = 0;
m.axang = 0;
m.sz = 0;
m.ox = 0;
m.oy = 0;
m.it = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.tic = 0;
m.ra = 0;
m.br = 0;
m.sh = 0;
m.tin = 0;
m.pi = 0;
m.ang = 0;
m.t1 = 0;
m.sp = 0;

			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tic = (m.time-m.tin);
m.tin = m.time;
m.mod = (0.1*((m.mod*9)+m.mid_att));
m.tt = (m.tt+(m.tic*(((m.mod+1)*(m.mod+1))-1)));
m.t1 = m.tt;
		return m;
	},
		'point_eqs' : function(m) {
m.sp = ((((m.sample*6.28)*8)*8)*4);
m.it = (m.it+1);
m.it = (m.it*above(m.sample, 0));
m.sz = m.q1;
m.pi = 3.141592653;
m.ss = (m.sample*6);
m.ox = (((((m.sz*0.5)*pow(-1, m.it))*below(m.ss, 1))+((((0.5*pow(-1, m.it))*above(m.ss, 1))*m.sz)*below(m.ss, 2)))+((((above(m.ss, 2)*0.5)*pow(-1, m.it))*m.sz)*below(m.ss, 3)));
m.oy = (((((m.ss-0.5)*m.sz)*below(m.ss, 1))+(((m.sz*0.5)*above(m.ss, 1))*below(m.ss, 2)))+((((0.5-(m.ss-2))*m.sz)*above(m.ss, 2))*below(m.ss, 3)));
m.oz = ((((-m.sz*0.5)*below(m.ss, 1))+(((((m.ss-1)-0.5)*m.sz)*above(m.ss, 1))*below(m.ss, 2)))+(((m.sz*0.5)*above(m.ss, 2))*below(m.ss, 3)));
m.ox = (((m.ox+(((above(m.ss, 3)*below(m.ss, 4))*-0.5)*m.sz))+(((above(m.ss, 4)*below(m.ss, 5))*m.sz)*(-0.5+(m.ss-4))))+((above(m.ss, 5)*m.sz)*0.5));
m.oy = (((m.oy+((((above(m.ss, 3)*below(m.ss, 4))*0.5)*m.sz)*pow(-1, m.it)))+(((above(m.ss, 4)*below(m.ss, 5))*m.sz)*-0.5))+((above(m.ss, 5)*m.sz)*(-0.5+(m.ss-5))));
m.oz = (((m.oz+(((above(m.ss, 3)*below(m.ss, 4))*m.sz)*(0.5-(m.ss-3))))+((((above(m.ss, 4)*below(m.ss, 5))*m.sz)*0.5)*pow(-1, m.it)))+(((above(m.ss, 5)*m.sz)*0.5)*pow(-1, m.it)));
m.ang = m.t1;
m.mx = ((m.ox*Math.cos(m.ang))+(m.oz*Math.sin(m.ang)));
m.mz = ((-m.ox*Math.sin(m.ang))+(m.oz*Math.cos(m.ang)));
m.ox = m.mx;
m.oz = m.mz;
m.sh = (m.sz*0.5);
m.br = (div(m.ang,m.pi)+0.5);
m.br = (m.br-(Math.floor((m.br*0.25))*4));
m.br = (4-Math.floor(m.br));
m.br = (m.br-(4*equal(m.br, 4)));
m.ra = pow(((m.sh*m.sh)*2), 0.5);
m.ang = -m.ang;
m.ox = ((((m.ox-((m.sh+(m.ra*Math.sin((-m.ang+(m.pi*0.25)))))*equal(m.br, 0)))-((-m.sh+(m.ra*Math.sin((m.ang+(m.pi*0.25)))))*equal(m.br, 1)))-((-m.sh-(m.ra*Math.sin((-m.ang+(m.pi*0.25)))))*equal(m.br, 2)))-((m.sh-(m.ra*Math.sin((m.ang+(m.pi*0.25)))))*equal(m.br, 3)));
m.oz = ((((m.oz-((m.sh+(m.ra*Math.cos((-m.ang+(m.pi*0.25)))))*equal(m.br, 0)))-((m.sh-(m.ra*Math.cos((m.ang+(m.pi*0.25)))))*equal(m.br, 1)))-((-m.sh-(m.ra*Math.cos((-m.ang+(m.pi*0.25)))))*equal(m.br, 2)))-((-m.sh+(m.ra*Math.cos((m.ang+(m.pi*0.25)))))*equal(m.br, 3)));
m.xang = m.q2;
m.axang = 0;
m.yang = m.q3;
m.ayang = 0;
m.zang = m.q4;
m.azang = 0;
m.fov = 0.3;
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
m.a = 0.05;
m.mod = ((m.oz+1)*0.5);
m.a = (m.a*Math.max(Math.min(m.mod, 1), 0));
m.oz = (m.oz-2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
m.g = -Math.sin(m.sp);
m.b = (0.5-(0.5*Math.sin((m.sample*1.57))));
m.r = (0.5-(0.5*Math.cos((m.sample*1.57))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tic = time - tin;\n' + 'tin = time;\n' + 'mod = .1*(mod*9 + mid_att);\n' + 'tt = tt + tic*((mod+1)*(mod+1)-1);\n' + 't1 = tt;'),
		'point_eqs_str' : ('sp = sample*6.28*8*8*4;\n' + 'it = it+1;\n' + 'it = it*above(sample,0);\n' + 'sz = q1;\n' + 'pi = 3.141592653;\n' + 'ss = sample*6;\n' + 'ox = sz*.5*pow(-1,it)*below(ss,1) + .5*pow(-1,it)*above(ss,1)*sz*below(ss,2) + above(ss,2)*.5*pow(-1,it)*sz*below(ss,3);\n' + 'oy = (ss-.5)*sz*below(ss,1) + sz*.5*above(ss,1)*below(ss,2) + (.5-(ss-2))*sz*above(ss,2)*below(ss,3);\n' + 'oz = -sz*.5*below(ss,1) + ((ss-1)-.5)*sz*above(ss,1)*below(ss,2) + sz*.5*above(ss,2)*below(ss,3);\n' + 'ox = ox + above(ss,3)*below(ss,4)*-.5*sz + above(ss,4)*below(ss,5)*sz*(-.5+(ss-4)) + above(ss,5)*sz*.5;\n' + 'oy = oy + above(ss,3)*below(ss,4)*.5*sz*pow(-1,it) + above(ss,4)*below(ss,5)*sz*-.5 + above(ss,5)*sz*(-.5+(ss-5));\n' + 'oz = oz + above(ss,3)*below(ss,4)*sz*(.5-(ss-3)) + above(ss,4)*below(ss,5)*sz*.5*pow(-1,it) + above(ss,5)*sz*.5*pow(-1,it);\n' + 'ang = t1;\n' + 'mx = ox*cos(ang) + oz*sin(ang);\n' + 'mz = -ox*sin(ang) + oz*cos(ang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'sh = sz*.5;\n' + 'br = (ang/pi) + .5;\n' + 'br = br - int(br*.25)*4;\n' + 'br = 4-int(br);\n' + 'br = br - 4*equal(br,4);\n' + 'ra = pow(sh*sh*2,.5);\n' + 'ang = -ang;\n' + 'ox = ox - (sh + ra*sin(-ang + pi*.25))*equal(br,0) - (-sh + ra*sin(ang + pi*.25))*equal(br,1) - (-sh - ra*sin(-ang + pi*.25))*equal(br,2) - (sh - ra*sin(ang + pi*.25))*equal(br,3);\n' + 'oz = oz - (sh + ra*cos(-ang + pi*.25))*equal(br,0) - (sh - ra*cos(ang + pi*.25))*equal(br,1) - (-sh - ra*cos(-ang + pi*.25))*equal(br,2) - (-sh + ra*cos(ang + pi*.25))*equal(br,3);\n' + 'xang = q2;\n' + 'axang = 0;\n' + 'yang = q3;\n' + 'ayang = 0;\n' + 'zang = q4;\n' + 'azang = 0;\n' + 'fov = .3;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'a = .05;\n' + 'mod = (oz+1)*.5;\n' + 'a = a*max(min(mod,1),0);\n' + 'oz = oz - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;\n' + 'g = -sin(sp);\n' + 'b = 0.5 - 0.5*sin(sample*1.57);\n' + 'r = 0.5 - 0.5*cos(sample*1.57);'),

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
m.q1 = 0;
m.ss = 0;
m.zang = 0;
m.q2 = 0;
m.yang = 0;
m.azang = 0;
m.q3 = 0;
m.xang = 0;
m.ayang = 0;
m.mod = 0;
m.q4 = 0;
m.axang = 0;
m.q8 = 0;
m.sz = 0;
m.ox = 0;
m.oy = 0;
m.it = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.ra = 0;
m.br = 0;
m.sh = 0;
m.pi = 0;
m.t1 = 0;
m.sp = 0;

			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sp = ((((m.sample*6.28)*8)*8)*4);
m.it = (m.it+1);
m.it = (m.it*above(m.sample, 0));
m.sz = m.q1;
m.pi = 3.141592653;
m.ss = (m.sample*6);
m.ox = (((((m.sz*0.5)*pow(-1, m.it))*below(m.ss, 1))+((((0.5*pow(-1, m.it))*above(m.ss, 1))*m.sz)*below(m.ss, 2)))+((((above(m.ss, 2)*0.5)*pow(-1, m.it))*m.sz)*below(m.ss, 3)));
m.oy = (((((m.ss-0.5)*m.sz)*below(m.ss, 1))+(((m.sz*0.5)*above(m.ss, 1))*below(m.ss, 2)))+((((0.5-(m.ss-2))*m.sz)*above(m.ss, 2))*below(m.ss, 3)));
m.oz = ((((-m.sz*0.5)*below(m.ss, 1))+(((((m.ss-1)-0.5)*m.q8)*above(m.ss, 1))*below(m.ss, 2)))+(((m.sz*0.5)*above(m.ss, 2))*below(m.ss, 3)));
m.ox = (((m.ox+((((above(m.ss, 3)*below(m.ss, 4))*-0.5)*m.sz)*Math.cos(m.q8)))+((((above(m.ss, 4)*below(m.ss, 5))*m.q8)*Math.cos(m.time))*(-0.5+(m.ss-4))))+((above(m.ss, 5)*m.sz)*0.5));
m.oy = ((((m.oy+(((above(m.ss, 3)*below(m.ss, 4))*0.5)*pow(-1, m.it)))+(((above(m.ss, 4)*below(m.ss, 5))*m.sz)*-0.5))+(((above(m.ss, 5)*m.sz)*Math.cos(m.time))*(-0.5+(m.ss-5))))+(m.q8*0.5));
m.oz = (((m.oz+(((above(m.ss, 3)*below(m.ss, 4))*m.q8)*(0.5-(m.ss-3))))+((((above(m.ss, 4)*below(m.ss, 5))*m.sz)*0.5)*pow(-1, m.it)))+(((above(m.ss, 5)*m.sz)*0.5)*pow(-1, m.it)));
m.zang = m.t1;
m.mx = ((m.ox*Math.cos(m.zang))-(m.oy*Math.sin(m.zang)));
m.my = ((m.ox*Math.sin(m.zang))+(m.oy*Math.cos(m.zang)));
m.ox = m.mx;
m.oy = m.my;
m.sh = (m.sz*0.5);
m.br = (div(m.zang,m.pi)+0.5);
m.br = (m.br-(Math.floor((m.br*0.25))*4));
m.br = Math.floor(m.br);
m.ra = pow(((m.sh*m.sh)*2), 0.5);
m.ox = ((((m.ox-((m.sh+(m.ra*Math.sin((-m.zang+(m.pi*0.25)))))*equal(m.br, 0)))-((-m.sh+(m.ra*Math.sin((m.zang+(m.pi*0.25)))))*equal(m.br, 1)))-((-m.sh-(m.ra*Math.sin((-m.zang+(m.pi*0.25)))))*equal(m.br, 2)))-((m.sh-(m.ra*Math.sin((m.zang+(m.pi*0.25)))))*equal(m.br, 3)));
m.oy = ((((m.oy-((m.sh+(m.ra*Math.cos((-m.zang+(m.pi*0.25)))))*equal(m.br, 0)))-((m.sh-(m.ra*Math.cos((m.zang+(m.pi*0.25)))))*equal(m.br, 1)))-((-m.sh-(m.ra*Math.cos((-m.zang+(m.pi*0.25)))))*equal(m.br, 2)))-((-m.sh+(m.ra*Math.cos((m.zang+(m.pi*0.25)))))*equal(m.br, 3)));
m.yang = (m.pi*0.5);
m.mx = ((m.ox*Math.cos(m.yang))+(m.oz*Math.sin(m.yang)));
m.mz = ((-m.ox*Math.sin(m.yang))+(m.oz*Math.cos(m.yang)));
m.ox = m.mx;
m.oz = m.mz;
m.xang = m.q2;
m.axang = 0;
m.yang = m.q3;
m.ayang = 0;
m.zang = m.q4;
m.azang = 0;
m.fov = 0.4;
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
m.a = 0.05;
m.mod = ((m.oz+1)*0.5);
m.a = (m.a*Math.max(Math.min(m.mod, 1), 0));
m.oz = (m.oz-2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.45);
m.y = (div((m.oy*m.fov),m.oz)+0.40);
m.b = -Math.sin(m.sp);
m.r = (0.5-(0.5*Math.sin((m.sample*1.57))));
m.g = (0.5-(0.5*Math.cos((m.sample*1.57))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sp = sample*6.28*8*8*4;\n' + 'it = it+1;\n' + 'it = it*above(sample,0);\n' + 'sz = q1;\n' + 'pi = 3.141592653;\n' + 'ss = sample*6;\n' + 'ox = sz*.5*pow(-1,it)*below(ss,1) + .5*pow(-1,it)*above(ss,1)*sz*below(ss,2) + above(ss,2)*.5*pow(-1,it)*sz*below(ss,3);\n' + 'oy = (ss-.5)*sz*below(ss,1) + sz*.5*above(ss,1)*below(ss,2) + (.5-(ss-2))*sz*above(ss,2)*below(ss,3);\n' + 'oz = -sz*.5*below(ss,1) + ((ss-1)-.5)*q8*above(ss,1)*below(ss,2) + sz*.5*above(ss,2)*below(ss,3);\n' + 'ox = ox + above(ss,3)*below(ss,4)*-.5*sz*cos(q8) + above(ss,4)*below(ss,5)*q8*cos(time)*(-.5+(ss-4)) + above(ss,5)*sz*.5;\n' + 'oy = oy + above(ss,3)*below(ss,4)*.5*pow(-1,it) + above(ss,4)*below(ss,5)*sz*-.5 + above(ss,5)*sz*cos(time)*(-.5+(ss-5))+q8*.5;\n' + 'oz = oz + above(ss,3)*below(ss,4)*q8*(.5-(ss-3)) + above(ss,4)*below(ss,5)*sz*.5*pow(-1,it) + above(ss,5)*sz*.5*pow(-1,it);\n' + 'zang = t1;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'sh = sz*.5;\n' + 'br = (zang/pi) + .5;\n' + 'br = br - int(br*.25)*4;\n' + 'br = int(br);\n' + 'ra = pow(sh*sh*2,.5);\n' + 'ox = ox - (sh + ra*sin(-zang + pi*.25))*equal(br,0) - (-sh + ra*sin(zang + pi*.25))*equal(br,1) - (-sh - ra*sin(-zang + pi*.25))*equal(br,2) - (sh - ra*sin(zang + pi*.25))*equal(br,3);\n' + 'oy = oy - (sh + ra*cos(-zang + pi*.25))*equal(br,0) - (sh - ra*cos(zang + pi*.25))*equal(br,1) - (-sh - ra*cos(-zang + pi*.25))*equal(br,2) - (-sh + ra*cos(zang + pi*.25))*equal(br,3);\n' + 'yang = pi*.5;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'xang = q2;\n' + 'axang = 0;\n' + 'yang = q3;\n' + 'ayang = 0;\n' + 'zang = q4;\n' + 'azang = 0;\n' + 'fov = .4;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'a = .05;\n' + 'mod = (oz+1)*.5;\n' + 'a = a*max(min(mod,1),0);\n' + 'oz = oz - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75+0.45;\n' + 'y = oy*fov/oz + 0.40;\n' + 'b = -sin(sp);\n' + 'r = 0.5 - 0.5*sin(sample*1.57);\n' + 'g = 0.5 - 0.5*cos(sample*1.57);'),

		}
],
	'shapes' : [
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
	'frame_eqs_str' : ('wave_a = 0;\n' + 'vol = .1*(vol*9 + (bass_att+mid_att+treb_att)*.333333);\n' + 'q1 = .4 + vol*.3;\n' + 'q8 = bass;\n' + 'tic = time-tin;\n' + 'tin = time;\n' + 'tb = tb + tic*bass_att;\n' + 'q2 = tb*.9;\n' + 'tm = tm + tic*mid_att;\n' + 'q3 = tm*.9;\n' + 'tt = tt + tic*treb_att;\n' + 'q4 = tt*.9;\n' + 'q1 = min(q1,1);\n' + 'aq1 = .5;\n' + 'aq2 = 0;\n' + 'aq3 = 9.5;\n' + 'aq4 = 0;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
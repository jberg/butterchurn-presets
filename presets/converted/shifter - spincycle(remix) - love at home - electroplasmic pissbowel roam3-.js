define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 32.0,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 24.0,
		wave_scale : 4.12,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.16217,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 1.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 5.42874,
		mv_dx : 0.02,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 0.8,
		echo_zoom : 1.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.00951,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.1,
		wave_mystery : 0.2,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.31,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.bc = 0;
m.avgvol = 0;
m.q2 = 0;
m.q3 = 0;
m.dbass = 0;
m.q4 = 0;
m.rawbeatb = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.mt = 0;
m.q8 = 0;
m.sz = 0;
m.avgbeatrate = 0;
m.lbass = 0;
m.yd = 0;
m.vav = 0;
m.xd = 0;
m.beatb = 0;
m.an = 0;
m.bbtime = 0;
m.treb_avg = 0;
m.dis = 0;
m.tic = 0;
m.ra = 0;
m.rb = 0;
m.avgdb = 0;
m.des = 0;
m.bt = 0;
m.bass_avg = 0;
m.vol = 0;
m.beatrate = 0;
m.tin = 0;
m.lbbtime = 0;
m.mtime = 0;
m.mid_avg = 0;
m.db = 0;
m.vt = 0;
m.beatrate = 5;
m.avgbeatrate = 1;
m.bbtime = 1;
m.lbbtime = 0.5;
m.avgdb = 0.5;
m.vol = 1;
m.avgvol = 0.2;
m.mtime = 1000;
m.tt = (1000*m.treb);
m.bt = (1000*m.bass);
m.mt = (1000*m.mid);
		return m;
	},
	'frame_eqs' : function(m) {
m.db = ((m.bass-m.lbass)*m.fps);
m.lbass = m.bass;
m.avgdb = ((m.avgdb*0.99)+(Math.abs(m.db)*0.01));
m.rawbeatb = above(m.db, (m.avgdb*2));
m.beatb = ((m.rawbeatb*above((m.time-m.lbbtime), (0.75*m.avgbeatrate)))*above(m.bass_att, 0.3));
m.bbtime = (m.time*m.beatb);
m.beatrate = ((m.beatb*(m.bbtime-m.lbbtime))+((1-m.beatb)*m.beatrate));
m.avgbeatrate = ((m.beatb*((m.avgbeatrate*0.999)+(m.beatrate*0.001)))+((1-m.beatb)*m.avgbeatrate));
m.lbbtime = ((m.time*m.beatb)+((1-m.beatb)*m.lbbtime));
m.bc = (m.bc+m.beatb);
m.vol = ((m.rawbeatb*(m.db-m.avgdb))*0.01);
m.avgvol = ((m.avgvol*0.99)+(m.vol*0.05));
m.mtime = (m.mtime+Math.min((m.avgvol*0.5), 0.25));
m.warp = 0;
m.wrap = 1;
m.warp = 0;
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = m.time;
m.ra = 10;
m.treb_avg = (m.tic*((m.treb_avg*(div(1,m.tic)-m.ra))+(m.ra*m.treb)));
m.mid_avg = (m.tic*((m.mid_avg*(div(1,m.tic)-m.ra))+(m.ra*m.mid)));
m.bass_avg = (m.tic*((m.bass_avg*(div(1,m.tic)-m.ra))+(m.ra*m.bass)));
m.rb = 1;
m.vav = (m.tic*((m.vav*(div(1,m.tic)-m.rb))+((m.rb*((m.bass+m.treb)+m.mid))*0.33333)));
m.tt = (m.tt+(m.tic*m.treb_avg));
m.mt = (m.mt+(m.tic*m.mid_avg));
m.bt = (m.bt+(m.tic*m.bass_avg));
m.vt = (m.vt+((m.tic*((m.treb_avg+m.mid_avg)+m.bass_avg))*0.33333));
m.sz = 0.2;
m.q1 = ((0.5+(m.sz*Math.sin((m.tt*0.629))))-(m.sz*Math.sin((m.tt*0.107))));
m.q2 = ((0.5+(m.sz*Math.sin((m.tt*0.987))))-(m.sz*Math.sin((m.tt*0.456))));
m.q3 = ((0.5+(m.sz*Math.sin((m.mt*0.654))))-(m.sz*Math.sin((m.mt*0.355))));
m.q4 = ((0.5+(m.sz*Math.sin((m.mt*0.548))))-(m.sz*Math.sin((m.mt*0.875))));
m.q5 = ((0.5+(m.sz*Math.sin((m.bt*0.687))))-(m.sz*Math.sin((m.bt*0.318))));
m.q6 = ((0.5+(m.sz*Math.sin((m.bt*0.465))))-(m.sz*Math.sin((m.bt*0.526))));
m.q7 = m.mtime;
m.q8 = m.dbass;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.xd = (m.q1-m.x);
m.yd = (m.q2-m.y);
m.dis = pow(((m.xd*m.xd)+(m.yd*m.yd)), 0.5);
m.des = (1-(m.dis*0.7071068));
m.des = (pow(m.des, (10*m.q8))*-m.treb);
m.an = Math.acos(div(Math.abs(m.xd),m.dis));
m.dx = (((sign(m.xd)*0.01)*Math.cos(m.an))*m.des);
m.dy = (((sign(m.yd)*0.01)*Math.sin(m.an))*m.des);
m.dx = (m.dx-((((sign(m.yd)*Math.sin((m.q7+m.an)))*0.001)*m.treb_att)*m.des));
m.dy = (m.dy+((((sign(m.xd)*Math.cos((m.q7+m.an)))*0.001)*m.treb)*m.des));
m.sy = (1+(m.dx*m.des));
m.sx = (1-(m.dy*m.des));
m.xd = (m.q3-m.x);
m.yd = (m.q4-m.y);
m.dis = pow(((m.xd*m.xd)+(m.yd*m.yd)), 0.5);
m.des = (1-(m.dis*0.7071068));
m.des = (pow(m.des, (10*m.q8))*-m.mid);
m.an = Math.acos(div(Math.abs(m.xd),m.dis));
m.dx = (m.dx+(((sign(m.xd)*0.01)*Math.cos(m.an))*m.des));
m.dy = (m.dy+(((sign(m.yd)*0.01)*Math.sin(m.an))*m.des));
m.dx = (m.dx-((((sign(m.yd)*Math.sin((m.q7+m.an)))*0.001)*m.mid_att)*m.des));
m.dy = (m.dy+((((sign(m.xd)*Math.cos((m.q7+m.an)))*0.001)*m.mid)*m.des));
m.sy = (1+(m.dx*m.des));
m.sx = (1-(m.dy*m.des));
m.xd = (m.q5-m.x);
m.yd = (m.q6-m.y);
m.dis = pow(((m.xd*m.xd)+(m.yd*m.yd)), 0.5);
m.des = (1-(m.dis*0.7071068));
m.des = (pow(m.des, (10*m.q8))*-m.bass);
m.an = Math.acos(div(Math.abs(m.xd),m.dis));
m.dx = (m.dx+(((sign(m.xd)*0.01)*Math.cos(m.an))*m.des));
m.dy = (m.dy+(((sign(m.yd)*0.01)*Math.sin(m.an))*m.des));
m.dx = (m.dx-((((sign(m.yd)*Math.sin((m.q7+m.an)))*0.001)*m.bass_att)*m.des));
m.dy = (m.dy+((((sign(m.xd)*Math.cos((m.q7+m.an)))*0.001)*m.bass)*m.des));
m.sy = (1+(m.dx*m.des));
m.sx = (1-(m.dy*m.des));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.5,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.st = 0;
m.d = 0;
m.prad = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.px = 0;
m.py = 0;
m.s_npx = 0;
m.pz = 0;
m.s_npy = 0;
m.s_npz = 0;
m.s_x = 0;
m.s_y = 0;
m.ct = 0;
m.s_px = 0;
m.s_py = 0;
m.tscale = 0;
m.s_pz = 0;
m.npx = 0;
m.npy = 0;
m.npz = 0;
m.theta = 0;

			m.rkeys = ['b','g','r'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.tscale = 0.3;
m.prad = 0.04;
m.px = (Math.cos(((m.sample*m.sample)*9112))*m.prad);
m.py = (Math.sin(((m.sample*m.sample)*9112))*m.prad);
m.pz = 0;
m.theta = ((m.sample*m.sample)*3342);
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.npx = ((m.px*m.ct)+(m.pz*m.st));
m.npz = ((-m.px*m.st)+(m.pz*m.ct));
m.npy = m.py;
m.theta = m.q6;
m.px = m.npx;
m.py = m.npy;
m.pz = m.npz;
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.npy = ((m.py*m.ct)+(m.pz*-m.st));
m.npz = ((m.py*m.st)+(m.pz*m.ct));
m.theta = m.q7;
m.px = m.npx;
m.py = m.npy;
m.pz = m.npz;
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.npx = ((m.px*m.ct)+(m.pz*m.st));
m.npz = ((-m.px*m.st)+(m.pz*m.ct));
m.theta = (m.q8+2);
m.px = m.npx;
m.py = m.npy;
m.pz = m.npz;
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.npx = ((m.px*m.ct)+(m.py*-m.st));
m.npy = ((m.px*m.st)+(m.py*m.ct));
m.x = (m.npx+0.5);
m.y = ((m.npy*1.3)+0.5);
m.a = ifcond(below(m.npz, 0), 0, 1);
m.prad = 1.1;
m.s_px = (Math.cos(8886)*m.prad);
m.s_py = (Math.sin(8886)*m.prad);
m.s_pz = 0;
m.s_npx = m.s_px;
m.s_npz = m.s_pz;
m.s_npy = m.s_py;
m.theta = m.q6;
m.s_px = m.s_npx;
m.s_py = m.s_npy;
m.s_pz = m.s_npz;
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.s_npy = ((m.s_py*m.ct)+(m.s_pz*-m.st));
m.s_npz = ((m.s_py*m.st)+(m.s_pz*m.ct));
m.theta = m.q7;
m.s_px = m.s_npx;
m.s_py = m.s_npy;
m.s_pz = m.s_npz;
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.s_npx = ((m.s_px*m.ct)+(m.s_pz*m.st));
m.s_npz = ((-m.s_px*m.st)+(m.s_pz*m.ct));
m.theta = m.q8;
m.s_px = m.s_npx;
m.s_py = m.s_npy;
m.s_pz = m.s_npz;
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.s_npx = ((m.s_px*m.ct)+(m.s_py*-m.st));
m.s_npy = ((m.s_px*m.st)+(m.s_py*m.ct));
m.s_x = (m.s_npx+0.5);
m.s_y = ((m.s_npy*1.3)+0.5);
m.d = sqrt(((m.s_npy*m.s_npy)+(m.s_npx*m.s_npx)));
m.r = ifcond(above(m.s_npz, 0), (m.r*(1-(0.2*m.d))), ((m.r*m.d)*0.6));
m.g = ifcond(above(m.s_npz, 0), (m.g*(1-(0.2*m.d))), ((m.g*m.d)*0.6));
m.b = ifcond(above(m.s_npz, 0), (m.b*(1-(0.2*m.d))), ((m.b*m.d)*0.6));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('tscale=.3;\n' + 'prad=.04;\n' + 'px=cos(sample*sample*9112)*prad;\n' + 'py=sin(sample*sample*9112)*prad;\n' + 'pz=0;\n' + 'theta=sample*sample*3342;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 'npx=(px*ct)+(pz*st);\n' + 'npz=(-px*st)+(pz*ct);\n' + 'npy=py;\n' + 'theta=q6;\n' + 'px=npx;\n' + 'py=npy;\n' + 'pz=npz;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 'npy=(py*ct)+(pz*-st);\n' + 'npz=(py*st)+(pz*ct);\n' + 'theta=q7;\n' + 'px=npx;\n' + 'py=npy;\n' + 'pz=npz;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 'npx=(px*ct)+(pz*st);\n' + 'npz=(-px*st)+(pz*ct);\n' + 'theta=q8+2;\n' + 'px=npx;\n' + 'py=npy;\n' + 'pz=npz;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 'npx=(px*ct)+(py*-st);\n' + 'npy=(px*st)+(py*ct);\n' + 'x=npx+.5;\n' + 'y=(npy*1.3)+.5;\n' + 'a=if(below(npz,0),0,1);\n' + 'prad=1.1;\n' + 's_px=cos(8886)*prad;\n' + 's_py=sin(8886)*prad;\n' + 's_pz=0;\n' + 's_npx=s_px;\n' + 's_npz=s_pz;\n' + 's_npy=s_py;\n' + 'theta=q6;\n' + 's_px=s_npx;\n' + 's_py=s_npy;\n' + 's_pz=s_npz;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 's_npy=(s_py*ct)+(s_pz*-st);\n' + 's_npz=(s_py*st)+(s_pz*ct);\n' + 'theta=q7;\n' + 's_px=s_npx;\n' + 's_py=s_npy;\n' + 's_pz=s_npz;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 's_npx=(s_px*ct)+(s_pz*st);\n' + 's_npz=(-s_px*st)+(s_pz*ct);\n' + 'theta=q8;\n' + 's_px=s_npx;\n' + 's_py=s_npy;\n' + 's_pz=s_npz;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 's_npx=(s_px*ct)+(s_py*-st);\n' + 's_npy=(s_px*st)+(s_py*ct);\n' + 's_x=s_npx+.5;\n' + 's_y=(s_npy*1.3)+.5;\n' + 'd=sqrt((s_npy*s_npy)+(s_npx*s_npx));\n' + 'r=if(above(s_npz,0),r*(1-(.2*d)),r*d*.6);\n' + 'g=if(above(s_npz,0),g*(1-(.2*d)),g*d*.6);\n' + 'b=if(above(s_npz,0),b*(1-(.2*d)),b*d*.6);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.5,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.st = 0;
m.prad = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.px = 0;
m.sample2 = 0;
m.py = 0;
m.pz = 0;
m.flip = 0;
m.ct = 0;
m.tscale = 0;
m.npx = 0;
m.npy = 0;
m.npz = 0;
m.cluster = 0;
m.t1 = 0;
m.theta = 0;
m.flip = -1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = ((((m.bass_att+m.mid_att)+m.treb_att)*0.05)*m.flip);
m.flip = -m.flip;
		return m;
	},
		'point_eqs' : function(m) {
m.tscale = 0.3;
m.prad = 1;
m.cluster = (m.sample+(Math.cos(((m.sample*6.283)*6))*0.1));
m.px = (Math.cos((m.cluster*16))*m.prad);
m.py = (Math.sin((m.cluster*16))*m.prad);
m.pz = 0;
m.theta = (m.cluster*172);
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.npx = ((m.px*m.ct)+(m.pz*m.st));
m.npz = ((-m.px*m.st)+(m.pz*m.ct));
m.npy = m.py;
m.theta = m.q6;
m.px = m.npx;
m.py = m.npy;
m.pz = m.npz;
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.npy = ((m.py*m.ct)+(m.pz*-m.st));
m.npz = ((m.py*m.st)+(m.pz*m.ct));
m.theta = m.q7;
m.px = m.npx;
m.py = m.npy;
m.pz = m.npz;
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.npx = ((m.px*m.ct)+(m.pz*m.st));
m.npz = ((-m.px*m.st)+(m.pz*m.ct));
m.theta = m.q8;
m.px = m.npx;
m.py = m.npy;
m.pz = m.npz;
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.npx = ((m.px*m.ct)+(m.py*-m.st));
m.npy = ((m.px*m.st)+(m.py*m.ct));
m.npz = m.pz;
m.npx = ifcond(below(m.npz, 0), -m.npx, m.npx);
m.npy = ifcond(below(m.npz, 0), -m.npy, m.npy);
m.npz = ifcond(below(m.npz, 0), -m.npz, m.npz);
m.npz = ((m.npz*(1+m.t1))+1.5);
m.x = (div(m.npx,m.npz)+0.5);
m.y = ((div(m.npy,m.npz)*1.3)+0.5);
m.a = 1;
m.sample2 = m.sample;
m.r = (((m.sample2*3)-Math.floor((m.sample2*3)))*2);
m.r = ifcond(above(m.r, 1), (2-m.r), m.r);
m.r = (1-pow((1-m.r), 2));
m.sample2 = (m.sample+0.023);
m.g = (((m.sample2*3)-Math.floor((m.sample2*3)))*2);
m.g = ifcond(above(m.g, 1), (2-m.g), m.g);
m.g = (1-pow((1-m.g), 2));
m.sample2 = (m.sample+0.026);
m.b = (((m.sample2*3)-Math.floor((m.sample2*3)))*2);
m.b = ifcond(above(m.b, 1), (2-m.b), m.b);
m.b = (1-pow((1-m.b), 2));
		return m;
	},
		'init_eqs_str' : ('flip=-1;'),
		'frame_eqs_str' : ('t1=(bass_att+mid_att+treb_att)*0.05*flip;\n' + 'flip=-flip;'),
		'point_eqs_str' : ('tscale=.3;\n' + 'prad=1;\n' + 'cluster=sample + cos(sample*6.283*6)*0.1;\n' + 'px=cos(cluster*16)*prad;\n' + 'py=sin(cluster*16)*prad;\n' + 'pz=0;\n' + 'theta=cluster*172 ;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 'npx=(px*ct)+(pz*st);\n' + 'npz=(-px*st)+(pz*ct);\n' + 'npy=py;\n' + 'theta=q6;\n' + 'px=npx;\n' + 'py=npy;\n' + 'pz=npz;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 'npy=(py*ct)+(pz*-st);\n' + 'npz=(py*st)+(pz*ct);\n' + 'theta=q7;\n' + 'px=npx;\n' + 'py=npy;\n' + 'pz=npz;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 'npx=(px*ct)+(pz*st);\n' + 'npz=(-px*st)+(pz*ct);\n' + 'theta=q8;\n' + 'px=npx;\n' + 'py=npy;\n' + 'pz=npz;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 'npx=(px*ct)+(py*-st);\n' + 'npy=(px*st)+(py*ct);\n' + 'npz=pz;\n' + 'npx=if(below(npz,0) , -npx , npx);\n' + 'npy=if(below(npz,0) , -npy , npy);\n' + 'npz=if(below(npz,0) , -npz , npz);\n' + 'npz=(npz * (1 + t1))+1.5;\n' + 'x=(npx/npz)+.5;\n' + 'y=(npy/npz)*1.3+.5;\n' + 'a=1;\n' + 'sample2=sample;\n' + 'r=(sample2*3 - int(sample2*3))*2;\n' + 'r=if(above(r,1) , 2-r , r);\n' + 'r=1- pow(1-r,2);\n' + 'sample2=sample + 0.023;\n' + 'g=(sample2*3 - int(sample2*3))*2;\n' + 'g=if(above(g,1) , 2-g , g);\n' + 'g=1- pow(1-g,2);\n' + 'sample2=sample + 0.026;\n' + 'b=(sample2*3 - int(sample2*3))*2;\n' + 'b=if(above(b,1) , 2-b , b);\n' + 'b=1- pow(1-b,2);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.4,
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
m.ss = 0;
m.st = 0;
m.d = 0;
m.prad = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.px = 0;
m.py = 0;
m.s_npx = 0;
m.pz = 0;
m.s_npy = 0;
m.s_npz = 0;
m.s_x = 0;
m.s_y = 0;
m.ct = 0;
m.s_px = 0;
m.s_py = 0;
m.tscale = 0;
m.s_pz = 0;
m.ss_rad = 0;
m.npx = 0;
m.npy = 0;
m.npz = 0;
m.theta = 0;

			m.rkeys = ['b','r'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.tscale = 0.3;
m.prad = ((mod(((m.sample*m.sample)*4999),65)*0.001)+0.1);
m.px = (Math.cos(((m.sample*m.sample)*8854))*m.prad);
m.py = (mod(((m.sample*m.sample)*1122),10)*0.0002);
m.pz = (Math.sin(((m.sample*m.sample)*8854))*m.prad);
m.npx = m.px;
m.npy = m.py;
m.npz = m.pz;
m.theta = (((((0.4-m.prad)*(0.4-m.prad))*30)*m.time)*m.tscale);
m.px = m.npx;
m.py = m.npy;
m.pz = m.npz;
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.npx = ((m.px*m.ct)+(m.pz*m.st));
m.npz = ((-m.px*m.st)+(m.pz*m.ct));
m.theta = m.q6;
m.px = m.npx;
m.py = m.npy;
m.pz = m.npz;
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.npy = ((m.py*m.ct)+(m.pz*-m.st));
m.npz = ((m.py*m.st)+(m.pz*m.ct));
m.theta = m.q7;
m.px = m.npx;
m.py = m.npy;
m.pz = m.npz;
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.npx = ((m.px*m.ct)+(m.pz*m.st));
m.npz = ((-m.px*m.st)+(m.pz*m.ct));
m.theta = (m.q8+2);
m.px = m.npx;
m.py = m.npy;
m.pz = m.npz;
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.npx = ((m.px*m.ct)+(m.py*-m.st));
m.npy = ((m.px*m.st)+(m.py*m.ct));
m.a = ifcond(below(m.npz, 0), ifcond(below(sqrt(((m.npy*m.npy)+(m.npx*m.npx))), 0.04), 0, 0.4), 0.4);
m.x = (m.npx+0.5);
m.y = ((m.npy*1.3)+0.5);
m.g = (0.5+(mod(((m.sample*m.sample)*4444),100)*0.005));
m.prad = 1.1;
m.s_px = (Math.cos(8886)*m.prad);
m.s_py = (Math.sin(8886)*m.prad);
m.s_pz = 0;
m.s_npx = m.s_px;
m.s_npz = m.s_pz;
m.s_npy = m.s_py;
m.theta = m.q6;
m.s_px = m.s_npx;
m.s_py = m.s_npy;
m.s_pz = m.s_npz;
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.s_npy = ((m.s_py*m.ct)+(m.s_pz*-m.st));
m.s_npz = ((m.s_py*m.st)+(m.s_pz*m.ct));
m.theta = m.q7;
m.s_px = m.s_npx;
m.s_py = m.s_npy;
m.s_pz = m.s_npz;
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.s_npx = ((m.s_px*m.ct)+(m.s_pz*m.st));
m.s_npz = ((-m.s_px*m.st)+(m.s_pz*m.ct));
m.theta = m.q8;
m.s_px = m.s_npx;
m.s_py = m.s_npy;
m.s_pz = m.s_npz;
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.s_npx = ((m.s_px*m.ct)+(m.s_py*-m.st));
m.s_npy = ((m.s_px*m.st)+(m.s_py*m.ct));
m.s_x = (m.s_npx+0.5);
m.s_y = ((m.s_npy*1.3)+0.5);
m.d = sqrt(((m.s_npy*m.s_npy)+(m.s_npx*m.s_npx)));
m.r = ifcond(above(m.s_npz, 0), (m.r*(1-(0.2*m.d))), ((m.r*m.d)*0.6));
m.g = ifcond(above(m.s_npz, 0), (m.g*(1-(0.2*m.d))), ((m.g*m.d)*0.6));
m.b = ifcond(above(m.s_npz, 0), (m.b*(1-(0.2*m.d))), ((m.b*m.d)*0.6));
m.s_npx = ((-1*m.s_npx)*0.1);
m.s_npy = ((-1*m.s_npy)*0.1);
m.s_npz = ((-1*m.s_npz)*0.1);
m.ss_rad = 0.087;
m.ss = sqrt(((sqr(((m.npx-m.s_npx)*1))+sqr(((m.npy-m.s_npy)*1)))+sqr(((m.npz-m.s_npz)*1))));
m.r = ifcond(below(m.ss, m.ss_rad), (m.r*0.2), m.r);
m.g = ifcond(below(m.ss, m.ss_rad), (m.g*0.2), m.g);
m.b = ifcond(below(m.ss, m.ss_rad), (m.b*0.2), m.b);
m.a = 1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('tscale=.3;\n' + 'prad=(((sample*sample*4999)%65)*.001)+.1;\n' + 'px=cos(sample*sample*8854)*prad;\n' + 'py=((sample*sample*1122)%10)*.0002;\n' + 'pz=sin(sample*sample*8854)*prad;\n' + 'npx=px;\n' + 'npy=py;\n' + 'npz=pz;\n' + 'theta=((.4-prad)*(.4-prad)*30*time*tscale);\n' + 'px=npx;\n' + 'py=npy;\n' + 'pz=npz;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 'npx=(px*ct)+(pz*st);\n' + 'npz=(-px*st)+(pz*ct);\n' + 'theta=q6;\n' + 'px=npx;\n' + 'py=npy;\n' + 'pz=npz;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 'npy=(py*ct)+(pz*-st);\n' + 'npz=(py*st)+(pz*ct);\n' + 'theta=q7;\n' + 'px=npx;\n' + 'py=npy;\n' + 'pz=npz;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 'npx=(px*ct)+(pz*st);\n' + 'npz=(-px*st)+(pz*ct);\n' + 'theta=q8+2;\n' + 'px=npx;\n' + 'py=npy;\n' + 'pz=npz;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 'npx=(px*ct)+(py*-st);\n' + 'npy=(px*st)+(py*ct);\n' + 'a=if(below(npz,0),if(below(sqrt((npy*npy)+(npx*npx)),.04),0,.4),.4);\n' + 'x=npx+.5;\n' + 'y=(npy*1.3)+.5;\n' + 'g=.5+((sample*sample*4444)%100)*.005;\n' + 'prad=1.1;\n' + 's_px=cos(8886)*prad;\n' + 's_py=sin(8886)*prad;\n' + 's_pz=0;\n' + 's_npx=s_px;\n' + 's_npz=s_pz;\n' + 's_npy=s_py;\n' + 'theta=q6;\n' + 's_px=s_npx;\n' + 's_py=s_npy;\n' + 's_pz=s_npz;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 's_npy=(s_py*ct)+(s_pz*-st);\n' + 's_npz=(s_py*st)+(s_pz*ct);\n' + 'theta=q7;\n' + 's_px=s_npx;\n' + 's_py=s_npy;\n' + 's_pz=s_npz;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 's_npx=(s_px*ct)+(s_pz*st);\n' + 's_npz=(-s_px*st)+(s_pz*ct);\n' + 'theta=q8;\n' + 's_px=s_npx;\n' + 's_py=s_npy;\n' + 's_pz=s_npz;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 's_npx=(s_px*ct)+(s_py*-st);\n' + 's_npy=(s_px*st)+(s_py*ct);\n' + 's_x=s_npx+.5;\n' + 's_y=(s_npy*1.3)+.5;\n' + 'd=sqrt((s_npy*s_npy)+(s_npx*s_npx));\n' + 'r=if(above(s_npz,0),r*(1-(.2*d)),r*d*.6);\n' + 'g=if(above(s_npz,0),g*(1-(.2*d)),g*d*.6);\n' + 'b=if(above(s_npz,0),b*(1-(.2*d)),b*d*.6);\n' + 's_npx=-1*s_npx*.1;\n' + 's_npy=-1*s_npy*.1;\n' + 's_npz=-1*s_npz*.1;\n' + 'ss_rad=.087;\n' + 'ss=sqrt(sqr((npx-s_npx)*1)+sqr((npy-s_npy)*1)+sqr((npz-s_npz)*1));\n' + 'r=if(below(ss,ss_rad),r*.2,r);\n' + 'g=if(below(ss,ss_rad),g*.2,g);\n' + 'b=if(below(ss,ss_rad),b*.2,b);\n' + 'a=1;'),

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
m.st = 0;
m.prad = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.px = 0;
m.sample2 = 0;
m.py = 0;
m.pz = 0;
m.ct = 0;
m.tscale = 0;
m.npx = 0;
m.npy = 0;
m.npz = 0;
m.cluster = 0;
m.t1 = 0;
m.theta = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (-((m.bass_att+m.mid_att)+m.treb_att)*0.05);
		return m;
	},
		'point_eqs' : function(m) {
m.tscale = 0.3;
m.prad = 1;
m.cluster = (m.sample+(Math.cos(((m.sample*6.283)*6))*0.1));
m.px = (Math.cos((m.cluster*16))*m.prad);
m.py = (Math.sin((m.cluster*16))*m.prad);
m.pz = 0;
m.theta = (m.cluster*172);
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.npx = ((m.px*m.ct)+(m.pz*m.st));
m.npz = ((-m.px*m.st)+(m.pz*m.ct));
m.npy = m.py;
m.theta = m.q6;
m.px = m.npx;
m.py = m.npy;
m.pz = m.npz;
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.npy = ((m.py*m.ct)+(m.pz*-m.st));
m.npz = ((m.py*m.st)+(m.pz*m.ct));
m.theta = m.q7;
m.px = m.npx;
m.py = m.npy;
m.pz = m.npz;
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.npx = ((m.px*m.ct)+(m.pz*m.st));
m.npz = ((-m.px*m.st)+(m.pz*m.ct));
m.theta = m.q8;
m.px = m.npx;
m.py = m.npy;
m.pz = m.npz;
m.ct = Math.cos(m.theta);
m.st = Math.sin(m.theta);
m.npx = ((m.px*m.ct)+(m.py*-m.st));
m.npy = ((m.px*m.st)+(m.py*m.ct));
m.npz = m.pz;
m.npx = ifcond(below(m.npz, 0), -m.npx, m.npx);
m.npy = ifcond(below(m.npz, 0), -m.npy, m.npy);
m.npz = ifcond(below(m.npz, 0), -m.npz, m.npz);
m.npz = ((m.npz*(1+m.t1))+1.5);
m.x = (div(m.npx,m.npz)+0.5);
m.y = ((div(m.npy,m.npz)*1.3)+0.5);
m.a = 1;
m.sample2 = m.sample;
m.r = (((m.sample2*3)-Math.floor((m.sample2*3)))*2);
m.r = ifcond(above(m.r, 1), (2-m.r), m.r);
m.r = (1-pow((1-m.r), 2));
m.sample2 = (m.sample+0.023);
m.g = (((m.sample2*3)-Math.floor((m.sample2*3)))*2);
m.g = ifcond(above(m.g, 1), (2-m.g), m.g);
m.g = (1-pow((1-m.g), 2));
m.sample2 = (m.sample+0.026);
m.b = (((m.sample2*3)-Math.floor((m.sample2*3)))*2);
m.b = ifcond(above(m.b, 1), (2-m.b), m.b);
m.b = (1-pow((1-m.b), 2));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=-(bass_att+mid_att+treb_att)*0.05;'),
		'point_eqs_str' : ('tscale=.3;\n' + 'prad=1;\n' + 'cluster=sample + cos(sample*6.283*6)*0.1;\n' + 'px=cos(cluster*16)*prad;\n' + 'py=sin(cluster*16)*prad;\n' + 'pz=0;\n' + 'theta=cluster*172 ;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 'npx=(px*ct)+(pz*st);\n' + 'npz=(-px*st)+(pz*ct);\n' + 'npy=py;\n' + 'theta=q6;\n' + 'px=npx;\n' + 'py=npy;\n' + 'pz=npz;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 'npy=(py*ct)+(pz*-st);\n' + 'npz=(py*st)+(pz*ct);\n' + 'theta=q7;\n' + 'px=npx;\n' + 'py=npy;\n' + 'pz=npz;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 'npx=(px*ct)+(pz*st);\n' + 'npz=(-px*st)+(pz*ct);\n' + 'theta=q8;\n' + 'px=npx;\n' + 'py=npy;\n' + 'pz=npz;\n' + 'ct=cos(theta);\n' + 'st=sin(theta);\n' + 'npx=(px*ct)+(py*-st);\n' + 'npy=(px*st)+(py*ct);\n' + 'npz=pz;\n' + 'npx=if(below(npz,0) , -npx , npx);\n' + 'npy=if(below(npz,0) , -npy , npy);\n' + 'npz=if(below(npz,0) , -npz , npz);\n' + 'npz=(npz * (1 + t1))+1.5;\n' + 'x=(npx/npz)+.5;\n' + 'y=(npy/npz)*1.3+.5;\n' + 'a=1;\n' + 'sample2=sample;\n' + 'r=(sample2*3 - int(sample2*3))*2;\n' + 'r=if(above(r,1) , 2-r , r);\n' + 'r=1- pow(1-r,2);\n' + 'sample2=sample + 0.023;\n' + 'g=(sample2*3 - int(sample2*3))*2;\n' + 'g=if(above(g,1) , 2-g , g);\n' + 'g=1- pow(1-g,2);\n' + 'sample2=sample + 0.026;\n' + 'b=(sample2*3 - int(sample2*3))*2;\n' + 'b=if(above(b,1) , 2-b , b);\n' + 'b=1- pow(1-b,2);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 1.00531,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.48886,
			additive : 0.0,
			border_a : 0.2,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.17633,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
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
			a : 0.29,
			enabled : 1.0,
			b : 0.5,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.7,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.38615,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.prad = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.px = 0;
m.py = 0;
m.pz = 0;
m.npx = 0;
m.npy = 0;
m.npz = 0;
m.zrot = 0;
m.theta = 0;
m.yrot = 0;
m.xrot = 0;

			m.rkeys = ['a','a2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.prad = 1.1;
m.px = (Math.cos(8886)*m.prad);
m.py = (Math.sin(8886)*m.prad);
m.pz = 0;
m.npx = ((m.px*Math.cos(0))+(m.pz*Math.sin(0)));
m.npz = ((-m.px*Math.sin(0))+(m.pz*Math.cos(0)));
m.npy = m.py;
m.xrot = m.q6;
m.yrot = m.q7;
m.zrot = m.q8;
m.theta = m.xrot;
m.px = m.npx;
m.py = m.npy;
m.pz = m.npz;
m.npy = ((m.py*Math.cos(m.theta))+(m.pz*-Math.sin(m.theta)));
m.npz = ((m.py*Math.sin(m.theta))+(m.pz*Math.cos(m.theta)));
m.theta = m.yrot;
m.px = m.npx;
m.py = m.npy;
m.pz = m.npz;
m.npx = ((m.px*Math.cos(m.theta))+(m.pz*Math.sin(m.theta)));
m.npz = ((-m.px*Math.sin(m.theta))+(m.pz*Math.cos(m.theta)));
m.theta = m.zrot;
m.px = m.npx;
m.py = m.npy;
m.pz = m.npz;
m.npx = ((m.px*Math.cos(m.theta))+(m.py*-Math.sin(m.theta)));
m.npy = ((m.px*Math.sin(m.theta))+(m.py*Math.cos(m.theta)));
m.x = (m.npx+0.5);
m.y = ((m.npy*1.3)+0.5);
m.a = ((m.a*m.npz)*0.15);
m.a = ifcond(below(m.npz, 0), m.a, 0);
m.a2 = ifcond(below(m.npz, 0), m.a2, 0);
m.rad = (m.rad+(Math.abs(m.npz)*0.1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('prad=1.1;\n' + 'px=cos(8886)*prad;\n' + 'py=sin(8886)*prad;\n' + 'pz=0;\n' + 'npx=(px*cos(0))+(pz*sin(0));\n' + 'npz=(-px*sin(0))+(pz*cos(0));\n' + 'npy=py;\n' + 'xrot=q6;\n' + 'yrot=q7;\n' + 'zrot=q8;\n' + 'theta=xrot;\n' + 'px=npx;\n' + 'py=npy;\n' + 'pz=npz;\n' + 'npy=(py*cos(theta))+(pz*-sin(theta));\n' + 'npz=(py*sin(theta))+(pz*cos(theta));\n' + 'theta=yrot;\n' + 'px=npx;\n' + 'py=npy;\n' + 'pz=npz;\n' + 'npx=(px*cos(theta))+(pz*sin(theta));\n' + 'npz=(-px*sin(theta))+(pz*cos(theta));\n' + 'theta=zrot;\n' + 'px=npx;\n' + 'py=npy;\n' + 'pz=npz;\n' + 'npx=(px*cos(theta))+(py*-sin(theta));\n' + 'npy=(px*sin(theta))+(py*cos(theta));\n' + 'x=npx+.5;\n' + 'y=(npy*1.3)+.5;\n' + 'a=a*npz*.15;\n' + 'a=if(below(npz,0),a,0);\n' + 'a2=if(below(npz,0),a2,0);\n' + 'rad=rad+(abs(npz)*.1);'),

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
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.01842,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.prad = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.px = 0;
m.py = 0;
m.pz = 0;
m.npx = 0;
m.npy = 0;
m.npz = 0;
m.theta = 0;

			m.rkeys = ['border_a','a2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.prad = 1.1;
m.px = (Math.cos(8886)*m.prad);
m.py = (Math.sin(8886)*m.prad);
m.pz = 0;
m.npx = ((m.px*Math.cos(0))+(m.pz*Math.sin(0)));
m.npz = ((-m.px*Math.sin(0))+(m.pz*Math.cos(0)));
m.npy = m.py;
m.theta = m.q6;
m.px = m.npx;
m.py = m.npy;
m.pz = m.npz;
m.npy = ((m.py*Math.cos(m.theta))+(m.pz*-Math.sin(m.theta)));
m.npz = ((m.py*Math.sin(m.theta))+(m.pz*Math.cos(m.theta)));
m.theta = m.q7;
m.px = m.npx;
m.py = m.npy;
m.pz = m.npz;
m.npx = ((m.px*Math.cos(m.theta))+(m.pz*Math.sin(m.theta)));
m.npz = ((-m.px*Math.sin(m.theta))+(m.pz*Math.cos(m.theta)));
m.theta = m.q8;
m.px = m.npx;
m.py = m.npy;
m.pz = m.npz;
m.npx = ((m.px*Math.cos(m.theta))+(m.py*-Math.sin(m.theta)));
m.npy = ((m.px*Math.sin(m.theta))+(m.py*Math.cos(m.theta)));
m.x = (m.npx+0.5);
m.y = ((m.npy*1.3)+0.5);
m.a = (m.npz*0.15);
m.a = ifcond(below(m.npz, 0), m.a, 0);
m.a2 = ifcond(below(m.npz, 0), m.a2, 0);
m.border_a = ifcond(below(m.npz, 0), m.border_a, 0);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('prad=1.1;\n' + 'px=cos(8886)*prad;\n' + 'py=sin(8886)*prad;\n' + 'pz=0;\n' + 'npx=(px*cos(0))+(pz*sin(0));\n' + 'npz=(-px*sin(0))+(pz*cos(0));\n' + 'npy=py;\n' + 'theta=q6;\n' + 'px=npx;\n' + 'py=npy;\n' + 'pz=npz;\n' + 'npy=(py*cos(theta))+(pz*-sin(theta));\n' + 'npz=(py*sin(theta))+(pz*cos(theta));\n' + 'theta=q7;\n' + 'px=npx;\n' + 'py=npy;\n' + 'pz=npz;\n' + 'npx=(px*cos(theta))+(pz*sin(theta));\n' + 'npz=(-px*sin(theta))+(pz*cos(theta));\n' + 'theta=q8;\n' + 'px=npx;\n' + 'py=npy;\n' + 'pz=npz;\n' + 'npx=(px*cos(theta))+(py*-sin(theta));\n' + 'npy=(px*sin(theta))+(py*cos(theta));\n' + 'x=npx+.5;\n' + 'y=(npy*1.3)+.5;\n' + 'a=npz*.15;\n' + 'a=if(below(npz,0),a,0);\n' + 'a2=if(below(npz,0),a2,0);\n' + 'border_a=if(below(npz,0),border_a,0);'),

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
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.11046,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.d = 0;
m.prad = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.s_npx = 0;
m.s_npy = 0;
m.s_npz = 0;
m.s_x = 0;
m.s_y = 0;
m.s_px = 0;
m.s_py = 0;
m.s_pz = 0;
m.theta = 0;

			m.rkeys = ['a','a2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.prad = 1.1;
m.s_px = (Math.cos(8886)*m.prad);
m.s_py = (Math.sin(8886)*m.prad);
m.s_pz = 0;
m.s_npx = ((m.s_px*Math.cos(0))+(m.s_pz*Math.sin(0)));
m.s_npz = ((-m.s_px*Math.sin(0))+(m.s_pz*Math.cos(0)));
m.s_npy = m.s_py;
m.theta = m.q6;
m.s_px = m.s_npx;
m.s_py = m.s_npy;
m.s_pz = m.s_npz;
m.s_npy = ((m.s_py*Math.cos(m.theta))+(m.s_pz*-Math.sin(m.theta)));
m.s_npz = ((m.s_py*Math.sin(m.theta))+(m.s_pz*Math.cos(m.theta)));
m.theta = m.q7;
m.s_px = m.s_npx;
m.s_py = m.s_npy;
m.s_pz = m.s_npz;
m.s_npx = ((m.s_px*Math.cos(m.theta))+(m.s_pz*Math.sin(m.theta)));
m.s_npz = ((-m.s_px*Math.sin(m.theta))+(m.s_pz*Math.cos(m.theta)));
m.theta = m.q8;
m.s_px = m.s_npx;
m.s_py = m.s_npy;
m.s_pz = m.s_npz;
m.s_npx = ((m.s_px*Math.cos(m.theta))+(m.s_py*-Math.sin(m.theta)));
m.s_npy = ((m.s_px*Math.sin(m.theta))+(m.s_py*Math.cos(m.theta)));
m.s_x = (m.s_npx+0.5);
m.s_y = ((m.s_npy*1.3)+0.5);
m.d = sqrt(((m.s_npy*m.s_npy)+(m.s_npx*m.s_npx)));
m.a = ifcond(below(m.s_npz, 0), (m.a*(1-(0.2*m.d))), ((m.a*m.d)*0.6));
m.a2 = ifcond(below(m.s_npz, 0), (m.a2*(1-(0.2*m.d))), ((m.a2*m.d)*0.6));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('prad=1.1;\n' + 's_px=cos(8886)*prad;\n' + 's_py=sin(8886)*prad;\n' + 's_pz=0;\n' + 's_npx=(s_px*cos(0))+(s_pz*sin(0));\n' + 's_npz=(-s_px*sin(0))+(s_pz*cos(0));\n' + 's_npy=s_py;\n' + 'theta=q6;\n' + 's_px=s_npx;\n' + 's_py=s_npy;\n' + 's_pz=s_npz;\n' + 's_npy=(s_py*cos(theta))+(s_pz*-sin(theta));\n' + 's_npz=(s_py*sin(theta))+(s_pz*cos(theta));\n' + 'theta=q7;\n' + 's_px=s_npx;\n' + 's_py=s_npy;\n' + 's_pz=s_npz;\n' + 's_npx=(s_px*cos(theta))+(s_pz*sin(theta));\n' + 's_npz=(-s_px*sin(theta))+(s_pz*cos(theta));\n' + 'theta=q8;\n' + 's_px=s_npx;\n' + 's_py=s_npy;\n' + 's_pz=s_npz;\n' + 's_npx=(s_px*cos(theta))+(s_py*-sin(theta));\n' + 's_npy=(s_px*sin(theta))+(s_py*cos(theta));\n' + 's_x=s_npx+.5;\n' + 's_y=(s_npy*1.3)+.5;\n' + 'd=sqrt((s_npy*s_npy)+(s_npx*s_npx));\n' + 'a=if(below(s_npz,0),a*(1-(.2*d)),a*d*.6);\n' + 'a2=if(below(s_npz,0),a2*(1-(.2*d)),a2*d*.6);'),

		}
],
	'warp' : (''),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_blur1, uv);\n' + '  ret_1 = ((tmpvar_2.xyz * scale1) + bias1);\n' + '  ret_1 = (ret_1 - (roam_sin.wzy * roam_cos.zxy));\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (uv + ret_1.xy);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, tmpvar_3);\n' + '  ret_1 = (ret_1 + ((tmpvar_4.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = (uv.x - ret_1.y);\n' + '  tmpvar_5.y = (uv.y - ret_1.y);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur1, tmpvar_5);\n' + '  ret_1 = (ret_1 + ((tmpvar_6.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_blur3, uv);\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = pow (((\n' + '    sqrt(dot (ret_1, ret_1))\n' + '   * ret_1) * 1.33), (0.89 - (\n' + '    (tmpvar_7.xyz * scale3)\n' + '   + bias3)));\n' + '  ret_1 = (tmpvar_8 * tmpvar_8.z);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_main, uv);\n' + '  ret_1 = (ret_1 - tmpvar_9.xyz);\n' + '  ret_1 = (0.5 - ret_1);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('beatrate=5;\n' + 'avgbeatrate=1;\n' + 'bbtime=1;\n' + 'lbbtime=.5;\n' + 'avgdb=.5;\n' + 'vol=1;\n' + 'avgvol=.2;\n' + 'mtime=1000;\n' + 'tt=1000*treb;\n' + 'bt=1000*bass;\n' + 'mt=1000*mid;'),
	'frame_eqs_str' : ('db=(bass-lbass)*fps;\n' + 'lbass=bass;\n' + 'avgdb=avgdb*.99+abs(db)*.01;\n' + 'rawbeatb=above(db,avgdb*2);\n' + 'beatb=rawbeatb*above(time-lbbtime,.75*avgbeatrate)*above(bass_att,.3);\n' + 'bbtime=time*beatb;\n' + 'beatrate=beatb*(bbtime-lbbtime)+(1-beatb)*beatrate;\n' + 'avgbeatrate=beatb*(avgbeatrate*.999+beatrate*.001)+(1-beatb)*avgbeatrate;\n' + 'lbbtime=time*beatb+(1-beatb)*lbbtime;\n' + 'bc=bc+beatb;\n' + 'vol=(rawbeatb*(db-(avgdb))*.01);\n' + 'avgvol=avgvol*.99+vol*.05;\n' + 'mtime=mtime+min(avgvol*.5,.25);\n' + 'warp=0;\n' + 'wrap=1;\n' + 'warp = 0;\n' + 'tic = min(time - tin,.1);\n' + 'tin = time;\n' + 'ra = 10;\n' + 'treb_avg = tic*(treb_avg*(1/tic - ra) + ra*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - ra) + ra*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - ra) + ra*bass);\n' + 'rb = 1;\n' + 'vav = tic*(vav*(1/tic - rb) + rb*(bass+treb+mid)*.33333);\n' + 'tt = tt + tic*treb_avg;\n' + 'mt = mt + tic*mid_avg;\n' + 'bt = bt + tic*bass_avg;\n' + 'vt = vt + tic*(treb_avg+mid_avg+bass_avg)*.33333;\n' + 'sz = .2;\n' + 'q1 = .5 + sz*sin(tt*.629) - sz*sin(tt*.107);\n' + 'q2 = .5 + sz*sin(tt*.987) - sz*sin(tt*.456);\n' + 'q3 = .5 + sz*sin(mt*.654) - sz*sin(mt*.355);\n' + 'q4 = .5 + sz*sin(mt*.548) - sz*sin(mt*.875);\n' + 'q5 = .5 + sz*sin(bt*.687) - sz*sin(bt*.318);\n' + 'q6 = .5 + sz*sin(bt*.465) - sz*sin(bt*.526);\n' + 'q7=mtime;\n' + 'q8=dbass;'),
	'pixel_eqs_str' : ('xd = q1-x;\n' + 'yd = q2-y;\n' + 'dis = pow(xd*xd+yd*yd,.5);\n' + 'des = 1 - dis*.7071068;\n' + 'des = pow(des,10*q8)*-treb;\n' + 'an = acos(abs(xd)/dis);\n' + 'dx = sign(xd)*.01*cos(an)*des;\n' + 'dy = sign(yd)*.01*sin(an)*des;\n' + 'dx=dx-sign(yd)*sin(q7+an)*.001*treb_att*des;\n' + 'dy=dy+sign(xd)*cos(q7+an)*.001*treb*des;\n' + 'sy=1+dx*des;\n' + 'sx=1-dy*des;\n' + 'xd = q3-x;\n' + 'yd = q4-y;\n' + 'dis = pow(xd*xd+yd*yd,.5);\n' + 'des = 1 - dis*.7071068;\n' + 'des = pow(des,10*q8)*-mid;\n' + 'an = acos(abs(xd)/dis);\n' + 'dx = dx + sign(xd)*.01*cos(an)*des;\n' + 'dy = dy + sign(yd)*.01*sin(an)*des;\n' + 'dx=dx-sign(yd)*sin(q7+an)*.001*mid_att*des;\n' + 'dy=dy+sign(xd)*cos(q7+an)*.001*mid*des;\n' + 'sy=1+dx*des;\n' + 'sx=1-dy*des;\n' + 'xd = q5-x;\n' + 'yd = q6-y;\n' + 'dis = pow(xd*xd+yd*yd,.5);\n' + 'des = 1 - dis*.7071068;\n' + 'des = pow(des,10*q8)*-bass;\n' + 'an = acos(abs(xd)/dis);\n' + 'dx = dx + sign(xd)*.01*cos(an)*des;\n' + 'dy = dy + sign(yd)*.01*sin(an)*des;\n' + 'dx=dx-sign(yd)*sin(q7+an)*.001*bass_att*des;\n' + 'dy=dy+sign(xd)*cos(q7+an)*.001*bass*des;\n' + 'sy=1+dx*des;\n' + 'sx=1-dy*des;'),
};

return pmap;
});
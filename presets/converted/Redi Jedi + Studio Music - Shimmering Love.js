define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.980001,
		wave_g : 0.45,
		ib_g : 0.3,
		mv_x : 64.0,
		warpscale : 2.155458,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.01,
		echo_alpha : 0.4999,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.11,
		sy : 1.0,
		ib_size : 0.005,
		warp : 2.220765,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.31,
		mv_b : 0.0,
		echo_zoom : 1.006596,
		ob_size : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 0.803382,
		wave_dots : 1.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.13,
		mv_l : 0.05,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.02,
		decay : 0.98,
		wave_a : 0.001645,
		ob_g : 0.18,
		ib_a : 0.0,
		wave_b : 0.38,
		ib_b : 0.37,
		mv_r : 0.0,
		rating : 2.5,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.ff = 0;
m.q1 = 0;
m.q2 = 0;
m.madtreb = 0;
m.lastingbass = 0;
m.flash = 0;
m.vol = 0;
m.mtime = 0;
m.mv_x = 64;
m.mv_y = 48;
m.nut = 0;
m.stp = 0;
m.stq = 0;
m.rtp = 0;
m.rtq = 0;
m.wvr = 0;
m.decay = 0;
m.dcsp = 0;
m.flash = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (div(Math.sin(div((5*m.ff),m.bass)),2)+0.5);
m.wave_g = (div(Math.cos(div(m.ff,m.mid)),2)+0.5);
m.wave_b = (div(Math.cos(div((3*m.ff),m.treb)),2)+0.5);
m.cx = (m.cx+(0.110*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.294*m.time))))));
m.cy = (m.cy+(0.110*((0.60*Math.sin((0.393*m.time)))+(0.40*Math.sin((0.223*m.time))))));
m.ib_r = (m.ib_r+(0.2*Math.sin((m.time*0.5413))));
m.ib_g = (m.ib_g+(0.2*Math.sin((m.time*0.6459))));
m.ib_b = (m.ib_b+(0.2*Math.sin((m.time*0.4354))));
m.ob_r = m.wave_r;
m.ob_g = m.wave_g;
m.ob_b = m.wave_b;
m.mv_x = ((m.lastingbass*30)+24);
m.mv_y = ((m.madtreb*48)+8);
m.mv_r = (0.7-m.bass_att);
m.mv_b = (0.6-m.treb_att);
m.mv_g = (0.5-m.mid_att);
m.ff = div(m.frame,100);
m.zoom = 1.02;
m.q1 = ((m.mid+m.treb)*0.5);
m.q1 = Math.min(m.q1, 1);
m.q1 = (m.q1*m.q1);
m.q1 = 1;
m.vol = pow((((m.bass+m.mid)+m.treb)*0.25), 3);
m.vol = Math.min(m.vol, 1);
m.mtime = (m.mtime+(m.vol*0.1));
m.q2 = m.mtime;
m.flash = ifcond(below(m.flash, 4), (m.flash+(m.vol*0.25)), 0);
m.invert = above(m.flash, 0.5);
m.invert = 0;
		m.rkeys = ['zoom','rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.q2 = below(m.rad, -0.53);
m.rot = (m.rot+ifcond(m.q2, 0, (Math.sin((m.time*0.7243))*0.5)));
m.zoom = (m.zoom+ifcond(m.q2, 0, ((m.rad*Math.sin((m.time*0.734)))*0.5)));
		return m;
	},
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
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {

m.st = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : ('st=1;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

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
m.aa = 0;
m.bb = 0;
m.gg = 0;
m.ii = 0;
m.q1 = 0;
m.rr = 0;
m.t4 = 0;
m.ttime = 0;
m.p2 = 0;
m.q3 = 0;
m.pr = 0;
m.tw = 0;
m.centerx = 0;
m.dtt = 0;
m.q5 = 0;
m.centery = 0;
m.centerz = 0;
m.f = 0;
m.rx = 0;
m.ltreb = 0;
m.ry = 0;
m.h = 0;
m.rz = 0;
m.i = 0;
m.scale = 0;
m.dmt = 0;
m.lbass = 0;
m.mx = 0;
m.my = 0;
m.mz = 0;
m.n = 0;
m.btime = 0;
m.q = 0;
m.speedx = 0;
m.fx = 0;
m.speedy = 0;
m.s = 0;
m.fy = 0;
m.speedz = 0;
m.bx = 0;
m.dbt = 0;
m.by = 0;
m.w = 0;
m.z1 = 0;
m.bz = 0;
m.y1 = 0;
m.z2 = 0;
m.pi = 0;
m.tm = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.mtime = 0;
m.sm = 0;
m.x2 = 0;
m.y3 = 0;
m.z4 = 0;
m.x3 = 0;
m.y4 = 0;
m.lmid = 0;
m.x4 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.sr = 0;
m.tw = 1;
m.s = 1;
m.sr = 0;
m.sm = 0;
m.pi = 3.14;
m.p2 = 6.28;
m.pr = div(360,m.p2);
m.dmt = (0.05*m.mid);
m.dbt = (0.05*m.bass);
m.dtt = (0.05*m.treb);
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.mz = 0;
m.rx = 0;
m.ry = 0;
m.rz = 0;
m.f = 6;
m.fx = 8;
m.fy = 6;
m.bx = 0;
m.by = 0;
m.bz = 0;
m.q = m.q5;
m.dbt = ((m.dbt*(1-m.q))+((m.q*(m.bass-m.lmid))*0.05));
m.btime = (((m.btime+m.dbt)+(m.q1*0.01))+(m.q5*0.01));
m.t1 = m.btime;
m.dtt = ((m.dtt*(1-m.q))+((m.q*(m.treb-m.lbass))*0.05));
m.ttime = (((m.ttime+m.dtt)+(m.q1*0.01))+(m.q5*0.01));
m.t2 = m.ttime;
m.dmt = ((m.dmt*(1-m.q))+((m.q*(m.mid-m.ltreb))*0.05));
m.mtime = (((m.mtime+m.dmt)+(m.q1*0.01))+(m.q5*0.01));
m.t3 = m.mtime;
m.ltreb = m.treb;
m.lmid = m.mid;
m.lbass = m.bass;
		return m;
	},
		'point_eqs' : function(m) {
m.h = 8;
m.w = 6;
m.pi = 3.14;
m.p2 = 6.28;
m.pr = div(360,m.p2);
m.rx = Math.sin((m.t3*1.2));
m.ry = Math.sin((m.t1*1.5));
m.rz = Math.sin((m.t2*1.7));
m.speedx = Math.sin(m.rx);
m.speedy = Math.sin(m.ry);
m.speedz = Math.sin(m.rz);
m.centerx = 1;
m.centery = 1;
m.centerz = 1;
m.f = Math.min(m.h, m.w);
m.fx = div(m.f,m.w);
m.fy = div(m.f,m.h);
m.bx = 0;
m.by = 0;
m.bz = 0;
m.tw = 25;
m.n = 512;
m.s = 0.5;
m.sr = 0.02;
m.sm = 0.25;
m.mx = Math.sin(m.t1);
m.my = Math.sin(m.t2);
m.mz = (Math.sin(m.t3)+2);
m.i = m.sample;
m.btime = m.t1;
m.ii = ((Math.sin((m.sample*3.14))*0.5)+0.5);
m.x1 = (Math.sin(((m.sample*m.p2)*20))*m.ii);
m.z1 = ((Math.cos(((m.sample*m.p2)*20))*m.ii)+2);
m.y1 = m.sample;
m.y2 = ((m.y1*m.centerx)-(m.z1*m.speedx));
m.z2 = ((m.y1*m.speedx)+(m.z1*m.centerx));
m.z3 = ((m.z2*m.centery)-(m.x1*m.speedy));
m.x3 = ((m.x2*m.centerz)-(m.y2*m.speedz));
m.y3 = ((m.y2*m.centerz)+(m.x2*m.speedz));
m.x4 = (m.mx+m.x3);
m.y4 = (m.my+m.y3);
m.z4 = (m.mz+m.z3);
m.scale = 0.5;
m.x = (div((m.x4*m.scale),(1+m.z4))+0.5);
m.y = (div((m.y4*m.scale),(1+m.z4))+0.5);
m.tm = (m.time*3);
m.rr = (Math.tan((m.n+m.tm))*0.25);
m.gg = (Math.tan(((m.n+m.tm)+2.1))*0.25);
m.bb = (Math.tan(((m.n+m.tm)+4.2))*0.25);
m.r = (Math.min(m.rr, 1)*above(m.rr, 0));
m.g = (Math.min(m.gg, 1)*above(m.gg, 0));
m.b = (Math.min(m.bb, 1)*above(m.bb, 0));
m.r = (1-pow((1-m.r), 3));
m.g = (1-pow((1-m.g), 3));
m.b = (1-pow((1-m.b), 3));
m.aa = ((Math.sin((m.n*m.t4))*0.5)+0.5);
m.aa = m.aa;
m.r = ((m.r*m.aa)*m.q1);
m.g = ((m.g*m.aa)*m.q1);
m.b = ((m.b*m.aa)*m.q1);
m.r = ifcond(m.q3, (1-m.r), m.g);
m.g = ifcond(m.q3, (1-m.g), m.b);
m.b = ifcond(m.q3, (1-m.b), m.r);
m.a = (1-pow((1-m.sample), 2));
		return m;
	},
		'init_eqs_str' : ('tw=1;\n' + 's=1;\n' + 'sr=0;\n' + 'sm=0;\n' + 'pi=3.14;\n' + 'p2=6.28;\n' + 'pr=360/p2;\n' + 'dmt=.05*mid;\n' + 'dbt=.05*bass;\n' + 'dtt=.05*treb;'),
		'frame_eqs_str' : ('mx=0;\n' + 'my=0;\n' + 'mz=0;\n' + 'rx=0;\n' + 'ry=0;\n' + 'rz=0;\n' + 'f=6;\n' + 'fx=8;\n' + 'fy=6;\n' + 'bx=0;\n' + 'by=0;\n' + 'bz=0;\n' + 'q=q5;\n' + 'dbt=dbt*(1-q)+q*(bass-lmid)*.05;\n' + 'btime=btime+dbt+q1*.01+q5*.01;\n' + 't1=btime;\n' + 'dtt=dtt*(1-q)+q*(treb-lbass)*.05;\n' + 'ttime=ttime+dtt+q1*.01+q5*.01;\n' + 't2=ttime;\n' + 'dmt=dmt*(1-q)+q*(mid-ltreb)*.05;\n' + 'mtime=mtime+dmt+q1*.01+q5*.01;\n' + 't3=mtime;\n' + 'ltreb=treb;\n' + 'lmid=mid;\n' + 'lbass=bass;'),
		'point_eqs_str' : ('h=8;\n' + 'w=6;\n' + 'pi=3.14;\n' + 'p2=6.28;\n' + 'pr=360/p2;\n' + 'rx=sin(t3*1.2);\n' + 'ry=sin(t1*1.5);\n' + 'rz=sin(t2*1.7);\n' + 'speedx=sin(rx);\n' + 'speedy=sin(ry);\n' + 'speedz=sin(rz);\n' + 'centerx=1;\n' + 'centery=1;\n' + 'centerz=1;\n' + 'f=min(h,w);\n' + 'fx=f/w;\n' + 'fy=f/h;\n' + 'bx=0;\n' + 'by=0;\n' + 'bz=0;\n' + 'tw=25;\n' + 'n=512;\n' + 's=.5;\n' + 'sr=.02;\n' + 'sm=.25;\n' + 'mx=sin(t1);\n' + 'my=sin(t2);\n' + 'mz=sin(t3)+2;\n' + 'i=sample;\n' + 'btime=t1;\n' + 'ii=sin(sample*3.14)*.5+.5;\n' + 'x1=sin(sample*p2*20)*ii;\n' + 'z1=cos(sample*p2*20)*ii+2;\n' + 'y1=sample;\n' + 'y2=y1*centerx-z1*speedx;\n' + 'z2=y1*speedx+z1*centerx;\n' + 'z3=z2*centery-x1*speedy;\n' + 'x3=x2*centerz-y2*speedz;\n' + 'y3=y2*centerz+x2*speedz;\n' + 'x4=mx+x3;\n' + 'y4=my+y3;\n' + 'z4=mz+z3;\n' + 'scale=.5;\n' + 'x=(x4*scale)/(1+z4)+.5;\n' + 'y=(y4*scale)/(1+z4)+.5;\n' + 'tm=time*3;\n' + 'rr=tan(n + tm)*0.25;\n' + 'gg=tan(n + tm + 2.1)*0.25;\n' + 'bb=tan(n + tm + 4.2)*0.25;\n' + 'r=min(rr,1)*above(rr,0);\n' + 'g=min(gg,1)*above(gg,0);\n' + 'b=min(bb,1)*above(bb,0);\n' + 'r=1- pow( 1-r,3);\n' + 'g=1- pow( 1-g,3);\n' + 'b=1- pow( 1-b,3);\n' + 'aa= sin(n*t4)*0.5+0.5;\n' + 'aa=aa;\n' + 'r=r*aa*q1;\n' + 'g=g*aa*q1;\n' + 'b=b*aa*q1;\n' + 'r=if(q3 , 1-r , g);\n' + 'g=if(q3 , 1-g , b);\n' + 'b=if(q3 , 1-b , r);\n' + 'a=1-pow( 1-sample , 2);'),

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
m.aa = 0;
m.bb = 0;
m.gg = 0;
m.ii = 0;
m.q1 = 0;
m.rr = 0;
m.t4 = 0;
m.ttime = 0;
m.p2 = 0;
m.q3 = 0;
m.pr = 0;
m.tw = 0;
m.centerx = 0;
m.dtt = 0;
m.q5 = 0;
m.centery = 0;
m.centerz = 0;
m.f = 0;
m.rx = 0;
m.ltreb = 0;
m.ry = 0;
m.h = 0;
m.rz = 0;
m.i = 0;
m.scale = 0;
m.dmt = 0;
m.lbass = 0;
m.mx = 0;
m.my = 0;
m.mz = 0;
m.n = 0;
m.btime = 0;
m.q = 0;
m.speedx = 0;
m.fx = 0;
m.speedy = 0;
m.s = 0;
m.fy = 0;
m.speedz = 0;
m.bx = 0;
m.dbt = 0;
m.by = 0;
m.w = 0;
m.z1 = 0;
m.bz = 0;
m.y1 = 0;
m.z2 = 0;
m.pi = 0;
m.tm = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.mtime = 0;
m.sm = 0;
m.x2 = 0;
m.y3 = 0;
m.z4 = 0;
m.x3 = 0;
m.y4 = 0;
m.lmid = 0;
m.x4 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.sr = 0;
m.tw = 1;
m.s = 1;
m.sr = 0;
m.sm = 0;
m.pi = 3.14;
m.p2 = 6.28;
m.pr = div(360,m.p2);
m.dbt = (0.05*m.bass);
m.dtt = (0.05*m.treb);
m.dmt = (0.05*m.mid);
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.mz = 0;
m.rx = 0;
m.ry = 0;
m.rz = 0;
m.f = 6;
m.fx = 8;
m.fy = 6;
m.bx = 0;
m.by = 0;
m.bz = 0;
m.q = m.q5;
m.dbt = ((m.dbt*(1-m.q))+((m.q*(m.bass-m.lbass))*0.05));
m.btime = (((m.btime+m.dbt)+(m.q1*0.01))+(m.q5*0.01));
m.t1 = m.btime;
m.lbass = m.bass;
m.dtt = ((m.dtt*(1-m.q))+((m.q*(m.treb-m.ltreb))*0.05));
m.ttime = (((m.ttime+m.dtt)+(m.q1*0.01))+(m.q5*0.01));
m.t2 = m.ttime;
m.ltreb = m.treb;
m.dmt = ((m.dmt*(1-m.q))+((m.q*(m.mid-m.lmid))*0.05));
m.mtime = (((m.mtime+m.dmt)+(m.q1*0.01))+(m.q5*0.01));
m.t3 = m.mtime;
m.lmid = m.mid;
		return m;
	},
		'point_eqs' : function(m) {
m.h = 8;
m.w = 6;
m.pi = 3.14;
m.p2 = 6.28;
m.pr = div(360,m.p2);
m.rx = Math.sin((m.t3*1.2));
m.ry = Math.sin((m.t1*1.5));
m.rz = Math.sin((m.t2*1.7));
m.speedx = Math.sin(m.rx);
m.speedy = Math.sin(m.ry);
m.speedz = Math.sin(m.rz);
m.centerx = 1;
m.centery = 1;
m.centerz = 1;
m.f = Math.min(m.h, m.w);
m.fx = div(m.f,m.w);
m.fy = div(m.f,m.h);
m.bx = 0;
m.by = 0;
m.bz = 0;
m.tw = 25;
m.n = 512;
m.s = 0.5;
m.sr = 0.02;
m.sm = 0.25;
m.mx = Math.sin(m.t1);
m.my = Math.sin(m.t2);
m.mz = (Math.sin(m.t3)+2);
m.i = m.sample;
m.btime = m.t1;
m.ii = ((Math.sin((m.sample*3.14))*0.5)+0.5);
m.x1 = (Math.sin(((m.sample*m.p2)*20))*m.ii);
m.z1 = ((Math.cos(((m.sample*m.p2)*20))*m.ii)+2);
m.y1 = m.sample;
m.y2 = ((m.y1*m.centerx)-(m.z1*m.speedx));
m.z2 = ((m.y1*m.speedx)+(m.z1*m.centerx));
m.x2 = ((m.z2*m.speedy)+(m.x1*m.centery));
m.z3 = ((m.z2*m.centery)-(m.x1*m.speedy));
m.x3 = ((m.x2*m.centerz)-(m.y2*m.speedz));
m.y3 = ((m.y2*m.centerz)+(m.x2*m.speedz));
m.x4 = (m.mx+m.x3);
m.y4 = (m.my+m.y3);
m.z4 = (m.mz+m.z3);
m.scale = 0.5;
m.x = (div((m.x4*m.scale),(1+m.z4))+0.5);
m.y = (div((m.y4*m.scale),(1+m.z4))+0.5);
m.tm = (m.time*3);
m.rr = (Math.tan((m.n+m.tm))*0.25);
m.gg = (Math.tan(((m.n+m.tm)+2.1))*0.25);
m.bb = (Math.tan(((m.n+m.tm)+4.2))*0.25);
m.r = (Math.min(m.rr, 1)*above(m.rr, 0));
m.g = (Math.min(m.gg, 1)*above(m.gg, 0));
m.b = (Math.min(m.bb, 1)*above(m.bb, 0));
m.r = (1-pow((1-m.r), 3));
m.g = (1-pow((1-m.g), 3));
m.b = (1-pow((1-m.b), 3));
m.aa = ((Math.sin((m.n*m.t4))*0.5)+0.5);
m.aa = m.aa;
m.r = ((m.r*m.aa)*m.q1);
m.g = ((m.g*m.aa)*m.q1);
m.b = ((m.b*m.aa)*m.q1);
m.r = ifcond(m.q3, (1-m.r), m.g);
m.g = ifcond(m.q3, (1-m.g), m.r);
m.b = ifcond(m.q3, (1-m.b), m.b);
m.a = (1-pow((1-m.sample), 2));
		return m;
	},
		'init_eqs_str' : ('tw=1;\n' + 's=1;\n' + 'sr=0;\n' + 'sm=0;\n' + 'pi=3.14;\n' + 'p2=6.28;\n' + 'pr=360/p2;\n' + 'dbt=.05*bass;\n' + 'dtt=.05*treb;\n' + 'dmt=.05*mid;'),
		'frame_eqs_str' : ('mx=0;\n' + 'my=0;\n' + 'mz=0;\n' + 'rx=0;\n' + 'ry=0;\n' + 'rz=0;\n' + 'f=6;\n' + 'fx=8;\n' + 'fy=6;\n' + 'bx=0;\n' + 'by=0;\n' + 'bz=0;\n' + 'q=q5;\n' + 'dbt=dbt*(1-q)+q*(bass-lbass)*.05;\n' + 'btime=btime+dbt+q1*.01+q5*.01;\n' + 't1=btime;\n' + 'lbass=bass;\n' + 'dtt=dtt*(1-q)+q*(treb-ltreb)*.05;\n' + 'ttime=ttime+dtt+q1*.01+q5*.01;\n' + 't2=ttime;\n' + 'ltreb=treb;\n' + 'dmt=dmt*(1-q)+q*(mid-lmid)*.05;\n' + 'mtime=mtime+dmt+q1*.01+q5*.01;\n' + 't3=mtime;\n' + 'lmid=mid;'),
		'point_eqs_str' : ('h=8;\n' + 'w=6;\n' + 'pi=3.14;\n' + 'p2=6.28;\n' + 'pr=360/p2;\n' + 'rx=sin(t3*1.2);\n' + 'ry=sin(t1*1.5);\n' + 'rz=sin(t2*1.7);\n' + 'speedx=sin(rx);\n' + 'speedy=sin(ry);\n' + 'speedz=sin(rz);\n' + 'centerx=1;\n' + 'centery=1;\n' + 'centerz=1;\n' + 'f=min(h,w);\n' + 'fx=f/w;\n' + 'fy=f/h;\n' + 'bx=0;\n' + 'by=0;\n' + 'bz=0;\n' + 'tw=25;\n' + 'n=512;\n' + 's=.5;\n' + 'sr=.02;\n' + 'sm=.25;\n' + 'mx=sin(t1);\n' + 'my=sin(t2);\n' + 'mz=sin(t3)+2;\n' + 'i=sample;\n' + 'btime=t1;\n' + 'ii=sin(sample*3.14)*.5+.5;\n' + 'x1=sin(sample*p2*20)*ii;\n' + 'z1=cos(sample*p2*20)*ii+2;\n' + 'y1=sample;\n' + 'y2=y1*centerx-z1*speedx;\n' + 'z2=y1*speedx+z1*centerx;\n' + 'x2=z2*speedy+x1*centery;\n' + 'z3=z2*centery-x1*speedy;\n' + 'x3=x2*centerz-y2*speedz;\n' + 'y3=y2*centerz+x2*speedz;\n' + 'x4=mx+x3;\n' + 'y4=my+y3;\n' + 'z4=mz+z3;\n' + 'scale=.5;\n' + 'x=(x4*scale)/(1+z4)+.5;\n' + 'y=(y4*scale)/(1+z4)+.5;\n' + 'tm=time*3;\n' + 'rr=tan(n + tm)*0.25;\n' + 'gg=tan(n + tm + 2.1)*0.25;\n' + 'bb=tan(n + tm + 4.2)*0.25;\n' + 'r=min(rr,1)*above(rr,0);\n' + 'g=min(gg,1)*above(gg,0);\n' + 'b=min(bb,1)*above(bb,0);\n' + 'r=1- pow( 1-r,3);\n' + 'g=1- pow( 1-g,3);\n' + 'b=1- pow( 1-b,3);\n' + 'aa= sin(n*t4)*0.5+0.5;\n' + 'aa=aa;\n' + 'r=r*aa*q1;\n' + 'g=g*aa*q1;\n' + 'b=b*aa*q1;\n' + 'r=if(q3 , 1-r , g);\n' + 'g=if(q3 , 1-g , r);\n' + 'b=if(q3 , 1-b , b);\n' + 'a=1-pow( 1-sample , 2);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.3,
			g : 0.65,
			scaling : 0.997729,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.3,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.q3 = 0;
m.t6 = 0;
m.cf = 0;
m.q4 = 0;
m.t7 = 0;
m.oldt2 = 0;
m.oldt3 = 0;
m.px = 0;
m.py = 0;
m.pz = 0;
m.shc = 0;
m.rf = 0;
m.u = 0;
m.v = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x2 = 0;
m.t2 = 0;
m.t3 = 0;
m.t1 = 300;
m.t2 = 10;
m.t3 = 0;
m.t4 = 2.14159265;
m.t5 = 1;
m.t6 = 10;
m.t7 = -10;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t7 = (0.5+((0.5*Math.sin(m.time))*m.t4));
m.t6 = div((m.t7+(m.t6*5)),6);
m.t2 = ((pow(((2*m.bass)+m.bass_att), 5)*0.01115111)+m.oldt2);
m.oldt2 = m.t2;
m.t3 = ((pow(((2*m.bass)+m.bass_att), 4)*0.01126213)+m.oldt3);
m.oldt3 = m.t3;
m.q1 = -Math.cos(Math.cos(m.t2));
m.q2 = Math.cos(-m.t3);
m.q3 = Math.sin(Math.cos(-m.t2));
m.q4 = Math.sin(m.t3);
		return m;
	},
		'point_eqs' : function(m) {
m.u = ((m.sample*1)-1);
m.rf = 512;
m.shc = (1-(m.u*m.u));
m.cf = below(m.sample, 1.05);
m.u = ifcond(m.cf, (sqrt(m.shc)*(div(-m.u,2)+0.5)), ifcond(below(m.sample, 0.05), (((m.sample-0.05)*15)+0.1), (pow(m.shc, 0.7)*1.5)));
m.u = (m.u+div(m.v,2));
m.px = ((div((Math.cos(((m.sample*m.t4)*m.rf))*m.u),2)+Math.cos(m.t6))+1.5);
m.py = ((m.sample*2)-1);
m.pz = (div((Math.sin(((m.sample*m.t4)*m.rf))*m.u),2)+2.9);
m.y1 = ((m.py*m.q1)+(m.pz*m.q3));
m.z1 = ((m.pz*m.q1)-(m.py*m.q3));
m.x2 = ((m.px*m.q2)+(m.z1*m.q4));
m.z2 = (((m.z1*m.q2)-(m.px*m.q4))+5);
m.x = div(m.x2,m.z2);
m.y = div(m.y1,m.z2);
m.x = ((m.x*0.5)+0.5);
m.y = ((0.5*m.y)+0.5);
m.r = (0.5+(Math.sin((m.sample*295))*0.5));
m.g = ((0.5*Math.sin((m.time*0.0245)))+(0.999*(0.5+(Math.sin((m.x*195))*0.5))));
m.b = ((0.5*Math.sin((m.time*0.1876)))+(0.495*(0.5+(Math.sin((m.y*208))*0.5))));
		return m;
	},
		'init_eqs_str' : ('t1 = 300;\n' + 't2 = 10;\n' + 't3 = 0;\n' + 't4 = 2.14159265;\n' + 't5 = 1;\n' + 't6 = 10;\n' + 't7 = -10;'),
		'frame_eqs_str' : ('t7 = 0.5+0.5*sin(time)*t4;\n' + 't6 = (t7+t6*5)/6;\n' + 't2 = pow(2*bass+bass_att,5)*0.01115111 +oldt2;\n' + 'oldt2 = t2;\n' + 't3 = pow(2*bass+bass_att,4)*0.01126213 + oldt3;\n' + 'oldt3 = t3;\n' + 'q1 = -cos(cos(t2));\n' + 'q2 = cos(-t3);\n' + 'q3 = sin(cos(-t2));\n' + 'q4 = sin(t3);'),
		'point_eqs_str' : ('u = sample*1-1;\n' + 'rf = 512;\n' + 'shc = 1-u*u;\n' + 'cf = below(sample,1.05);\n' + 'u=if(cf,sqrt(shc)*(-u/2+0.5), if(below(sample,0.05), (sample-0.05)*15+0.1, pow(shc,0.7)*1.5));\n' + 'u = u + v/2;\n' + 'px = cos(sample*t4*rf)*u/2+cos(t6)+1.5;\n' + 'py = sample*2-1;\n' + 'pz = sin(sample*t4*rf)*u/2+2.9;\n' + 'y1 = py*q1 + pz*q3;\n' + 'z1 = pz*q1 - py*q3;\n' + 'x2 = px*q2 + z1*q4;\n' + 'z2 = z1*q2 - px*q4+5;\n' + 'x = x2/z2;\n' + 'y = y1/z2;\n' + 'x = x*0.5 + 0.5;\n' + 'y = 0.5*y + 0.5;\n' + 'r = 0.5+sin(sample*295)*0.5;\n' + 'g = 0.5*sin(time*0.0245)+0.999*(0.5+sin(x*195)*0.5);\n' + 'b = 0.5*sin(time*0.1876)+0.495*(0.5+sin(y*208)*0.5);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.251327,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.150987,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.6,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.370001,
			rad : 0.10031,
			x : 0.5,
			y : 0.5,
			ang : 0.01,
			sides : 5.0,
			border_r : 0.460001,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.border_blue = 0;
m.border_green = 0;
m.border_red = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = ((0.5+(0.07*Math.cos((m.q3*0.5))))+(0.31*Math.cos((m.time*3.7))));
m.y = ((0.5+(0.07*Math.sin((m.q3*0.5))))+(0.31*Math.sin((m.time*3.7))));
m.r = (0.5+(0.5*Math.sin(((m.time*0.713)+2))));
m.g = (0.5+(0.5*Math.cos(((m.time*0.863)+3))));
m.b = (0.5+(0.5*Math.sin(((m.time*1.054)+1))));
m.r2 = (0.5+(0.5*Math.cos(((m.time*1.185)+3))));
m.g2 = (0.5+(0.5*Math.sin(((m.time*0.956)+2))));
m.b2 = (0.5+(0.5*Math.sin(((m.time*0.838)+4))));
m.border_red = Math.sin((m.time*0.874));
m.border_green = Math.sin((m.time*0.834));
m.border_blue = Math.sin((m.time*0.734));
m.ang = (m.time*1.3);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.07*cos(q3*0.5) + 0.31*cos(time*3.7);\n' + 'y = 0.5 + 0.07*sin(q3*0.5) + 0.31*sin(time*3.7);\n' + 'r = 0.5 + 0.5*sin(time*0.713 + 2);\n' + 'g = 0.5 + 0.5*cos(time*0.863 + 3);\n' + 'b = 0.5 + 0.5*sin(time*1.054 + 1);\n' + 'r2 = 0.5 + 0.5*cos(time*1.185 + 3);\n' + 'g2 = 0.5 + 0.5*sin(time*0.956+ 2);\n' + 'b2 = 0.5 + 0.5*sin(time*0.838 + 4);\n' + 'border_red = sin(time*0.874);\n' + 'border_green = sin(time*0.834);\n' + 'border_blue = sin(time*0.734);\n' + 'ang = time*1.3;'),

		},
		{
		'baseVals' : {
			r2 : 0.18,
			a : 1.0,
			enabled : 0.0,
			b : 0.23,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.44,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.48,
			b2 : 0.11,
			a2 : 1.0,
			r : 0.210001,
			border_g : 0.400001,
			rad : 0.069197,
			x : 0.5,
			y : 0.5,
			ang : 0.03,
			sides : 5.0,
			border_r : 0.150001,
			},
		'init_eqs' : function(m) {
m.border_blue = 0;
m.border_green = 0;
m.border_red = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*-2.4);
m.x = ((0.5+(0.26*Math.cos((m.time*3.1))))+(0.13*Math.cos((m.time*1.7))));
m.y = ((0.5+(0.22*Math.sin((m.time*3.3))))+(0.14*Math.sin((m.time*1.2))));
m.r = (0.5+(0.5*Math.sin(((m.time*0.713)+1))));
m.g = (0.5+(0.5*Math.sin(((m.time*0.563)+2))));
m.b = (0.5+(0.5*Math.cos(((m.time*0.654)+5))));
m.r2 = (0.5+(0.5*Math.cos(((m.time*0.885)+4))));
m.g2 = (0.5+(0.5*Math.sin(((m.time*0.556)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.time*0.638)+3))));
m.border_red = Math.sin((m.time*0.644));
m.border_green = Math.cos((m.time*0.874));
m.border_blue = Math.sin((m.time*0.954));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time*-2.4;\n' + 'x = 0.5 + 0.26*cos(time*3.1) + 0.13*cos(time*1.7);\n' + 'y = 0.5 + 0.22*sin(time*3.3) + 0.14*sin(time*1.2);\n' + 'r = 0.5 + 0.5*sin(time*0.713 + 1);\n' + 'g = 0.5 + 0.5*sin(time*0.563 + 2);\n' + 'b = 0.5 + 0.5*cos(time*0.654 + 5);\n' + 'r2 = 0.5 + 0.5*cos(time*0.885 + 4);\n' + 'g2 = 0.5 + 0.5*sin(time*0.556+ 1);\n' + 'b2 = 0.5 + 0.5*sin(time*0.638 + 3);\n' + 'border_red = sin(time*0.644);\n' + 'border_green = cos(time*0.874);\n' + 'border_blue = sin(time*0.954);'),

		},
		{
		'baseVals' : {
			r2 : 0.18,
			a : 1.0,
			enabled : 0.0,
			b : 0.23,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.44,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.48,
			b2 : 0.11,
			a2 : 1.0,
			r : 0.210001,
			border_g : 0.400001,
			rad : 0.069197,
			x : 0.5,
			y : 0.5,
			ang : 0.03,
			sides : 5.0,
			border_r : 0.150001,
			},
		'init_eqs' : function(m) {
m.border_blue = 0;
m.border_green = 0;
m.border_red = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*2.4);
m.x = ((0.5+(0.22*Math.cos((m.time*3.3))))+(0.14*Math.cos((m.time*1.2))));
m.y = ((0.5+(0.26*Math.sin((m.time*3.1))))+(0.13*Math.sin((m.time*1.7))));
m.r = (0.5+(0.5*Math.sin(((m.time*1.013)+5))));
m.g = (0.5+(0.5*Math.cos(((m.time*1.063)+2))));
m.b = (0.5+(0.5*Math.sin(((m.time*1.054)+1))));
m.r2 = (0.5+(0.5*Math.sin(((m.time*1.085)+3))));
m.g2 = (0.5+(0.5*Math.cos(((m.time*1.056)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.time*1.038)+4))));
m.border_red = Math.sin((m.time*0.574));
m.border_green = Math.sin((m.time*0.774));
m.border_blue = Math.cos((m.time*1.054));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time*2.4;\n' + 'x = 0.5 + 0.22*cos(time*3.3) + 0.14*cos(time*1.2);\n' + 'y = 0.5 + 0.26*sin(time*3.1) + 0.13*sin(time*1.7);\n' + 'r = 0.5 + 0.5*sin(time*1.013 + 5);\n' + 'g = 0.5 + 0.5*cos(time*1.063 + 2);\n' + 'b = 0.5 + 0.5*sin(time*1.054 + 1);\n' + 'r2 = 0.5 + 0.5*sin(time*1.085 + 3);\n' + 'g2 = 0.5 + 0.5*cos(time*1.056+ 1);\n' + 'b2 = 0.5 + 0.5*sin(time*1.038 + 4);\n' + 'border_red = sin(time*0.574);\n' + 'border_green = sin(time*0.774);\n' + 'border_blue = cos(time*1.054);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.251327,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.150986,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.54,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.280001,
			rad : 0.099863,
			x : 0.51,
			y : 0.49,
			ang : 0.062832,
			sides : 5.0,
			border_r : 0.460001,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.border_blue = 0;
m.border_green = 0;
m.border_red = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = ((0.5+(0.07*Math.cos((m.q3*0.5))))+(0.31*Math.sin((m.time*3.7))));
m.y = ((0.5+(0.07*Math.sin((m.q3*0.5))))+(0.31*Math.cos((m.time*3.7))));
m.r = (0.5+(0.5*Math.sin(((m.time*1.013)+2))));
m.g = (0.5+(0.5*Math.cos(((m.time*0.863)+3))));
m.b = (0.5+(0.5*Math.sin(((m.time*1.054)+1))));
m.r2 = (0.5+(0.5*Math.cos(((m.time*1.185)+3))));
m.g2 = (0.5+(0.5*Math.sin(((m.time*1.356)+2))));
m.b2 = (0.5+(0.5*Math.sin(((m.time*0.738)+4))));
m.border_red = Math.sin((m.time*1.074));
m.border_green = Math.sin((m.time*0.834));
m.border_blue = Math.sin((m.time*0.934));
m.ang = (m.time*-1.3);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.07*cos(q3*0.5) + 0.31*sin(time*3.7);\n' + 'y = 0.5 + 0.07*sin(q3*0.5) + 0.31*cos(time*3.7);\n' + 'r = 0.5 + 0.5*sin(time*1.013 + 2);\n' + 'g = 0.5 + 0.5*cos(time*0.863 + 3);\n' + 'b = 0.5 + 0.5*sin(time*1.054 + 1);\n' + 'r2 = 0.5 + 0.5*cos(time*1.185 + 3);\n' + 'g2 = 0.5 + 0.5*sin(time*1.356+ 2);\n' + 'b2 = 0.5 + 0.5*sin(time*0.738 + 4);\n' + 'border_red = sin(time*1.074);\n' + 'border_green = sin(time*0.834);\n' + 'border_blue = sin(time*0.934);\n' + 'ang = time*-1.3;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;\n' + 'flash=0;'),
	'frame_eqs_str' : ('wave_r = sin(5*ff/bass)/2+0.5;\n' + 'wave_g = cos(ff/mid)/2+0.5;\n' + 'wave_b = cos(3*ff/treb)/2+0.5;\n' + 'cx = cx + 0.110*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );\n' + 'cy = cy + 0.110*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );\n' + 'ib_r = ib_r + 0.2*sin(time*0.5413);\n' + 'ib_g = ib_g + 0.2*sin(time*0.6459);\n' + 'ib_b = ib_b + 0.2*sin(time*0.4354);\n' + 'ob_r=wave_r;\n' + 'ob_g=wave_g;\n' + 'ob_b=wave_b;\n' + 'mv_x = lastingbass*30+24;\n' + 'mv_y= madtreb*48+8;\n' + 'mv_r = 0.7-bass_att;\n' + 'mv_b = 0.6-treb_att;\n' + 'mv_g = 0.5-mid_att;\n' + 'ff = frame/100;\n' + 'zoom=1.02;\n' + 'q1=(mid+treb)*0.5;\n' + 'q1=min(q1,1);\n' + 'q1=q1*q1;\n' + 'q1=1;\n' + 'vol=pow( (bass+mid+treb)*0.25 , 3);\n' + 'vol=min(vol,1);\n' + 'mtime=mtime+vol*0.1;\n' + 'q2=mtime;\n' + 'flash=if( below(flash,4) , flash + vol*0.25 , 0  );\n' + 'invert=above(flash,0.5);\n' + 'invert=0;'),
	'pixel_eqs_str' : ('q2=below(rad,-.53);\n' + 'rot=rot+if(q2,0,sin(time*.7243)*.5);\n' + 'zoom=zoom+if(q2,0,rad*sin(time*.734)*.5);'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 1.0,
		mv_x : 12.0,
		warpscale : 1.772,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.656,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.015,
		warp : 0.513,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.96,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.19,
		wave_r : 0.5,
		ib_r : 0.55,
		mv_b : 1.0,
		echo_zoom : 0.998169,
		ob_size : 0.01,
		wave_smoothing : 0.8,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999698,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.58,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 7.74,
		ob_g : 0.0,
		ib_a : 0.23,
		wave_b : 0.5,
		ib_b : 0.4999,
		mv_r : 1.0,
		rating : 4.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.treb_thresh = 0;
m.q1 = 0;
m.chaos = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.radix = 0;
m.q5 = 0;
m.bass_residual = 0;
m.bass_flop = 0;
m.treb_residual = 0;
m.treb_flop = 0;
m.old_bass_flop = 0;
m.treb_changed = 0;
m.entropy = 0;
m.mid_thresh = 0;
m.old_treb_flop = 0;
m.bass_changed = 0;
m.old_mid_flop = 0;
m.pulse = 0;
m.bass_thresh = 0;
m.mid_residual = 0;
m.mid_changed = 0;
m.mid_flop = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.old_bass_flop = m.bass_flop;
m.old_treb_flop = m.treb_flop;
m.old_mid_flop = m.mid_flop;
m.chaos = (0.9+(0.1*Math.sin(m.pulse)));
m.entropy = ifcond(bnot(m.entropy), 2, ifcond(equal(m.pulse, -20), (1+Math.floor(rand(3))), m.entropy));
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*m.chaos)+1.3)));
m.bass_flop = Math.abs((m.bass_flop-equal(m.bass_thresh, 2)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.3)*m.chaos)+1.3)));
m.treb_flop = Math.abs((m.treb_flop-equal(m.treb_thresh, 2)));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_att, m.mid_thresh))*(((m.mid_thresh-1.3)*m.chaos)+1.3)));
m.mid_flop = Math.abs((m.mid_flop-equal(m.mid_thresh, 2)));
m.bass_changed = bnot(equal(m.old_bass_flop, m.bass_flop));
m.mid_changed = bnot(equal(m.old_mid_flop, m.mid_flop));
m.treb_changed = bnot(equal(m.old_treb_flop, m.treb_flop));
m.bass_residual = ((m.bass_changed*Math.sin((((m.pulse*m.bass_thresh)*0.1)*m.entropy)))+(bnot(m.bass_changed)*m.bass_residual));
m.treb_residual = ((m.treb_changed*Math.sin((((m.pulse*m.treb_thresh)*0.1)*m.entropy)))+(bnot(m.treb_changed)*m.treb_residual));
m.mid_residual = ((m.mid_changed*Math.sin((((m.pulse*m.mid_thresh)*0.1)*m.entropy)))+(bnot(m.mid_changed)*m.mid_residual));
m.pulse = ifcond(above(Math.abs(m.pulse), 20), -20, ((m.pulse+(0.2*bor((bor((m.bass_changed*bnot(m.treb_changed)), (m.treb_changed*bnot(m.bass_changed)))*bnot(m.mid_changed)), m.mid_changed)))+((((m.mid+m.bass)+m.treb)*m.entropy)*0.025)));
m.q1 = m.mid_residual;
m.q2 = m.bass_residual;
m.q3 = m.treb_residual;
m.q4 = Math.sin(m.pulse);
m.q5 = Math.sin(div(m.pulse,2));
m.wave_r = (m.wave_r+(0.5*m.bass_residual));
m.wave_r = (m.wave_g+(0.5*m.mid_residual));
m.wave_r = (m.wave_b+(0.5*m.treb_residual));
m.wave_mystery = m.mid_residual;
m.ob_r = ifcond(m.bass_flop, m.treb_flop, m.wave_r);
m.ob_b = ifcond(m.treb_flop, m.mid_flop, m.wave_b);
m.ob_g = ifcond(m.mid_flop, m.bass_flop, m.wave_g);
m.ob_a = (0.03+(0.02*m.wave_r));
m.ob_size = (0.05+(0.04*m.treb_residual));
m.ib_r = ifcond(m.bass_flop, m.ob_b, m.ob_g);
m.ib_b = ifcond(m.treb_flop, m.ob_g, m.ob_r);
m.ib_g = ifcond(m.mid_flop, m.ob_r, m.ob_b);
m.ib_a = (0.03+(0.02*m.wave_g));
m.ib_size = (0.05+(0.04*m.bass_residual));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.radix = ifcond(above(m.q3, 0), Math.min(m.x, m.y), Math.max(m.x, m.y));
m.radix = ifcond(above(m.q2, 0), Math.min(m.radix, m.rad), Math.max(m.radix, m.rad));
m.rot = ifcond(above(m.q4, 0), ((m.rad*0.2)*m.q5), 0);
m.zoom = ifcond(above(m.q2, 0), m.zoom, ifcond(above(m.q3, 0), (1+(m.q1*0.05)), (1+(0.07*Math.cos(((m.radix*10)*m.q1))))));
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
			samples : 302.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.t5 = 0;
m.t6 = 0;
m.t7 = 0;
m.t8 = 0;
m.rx = 0;
m.ry = 0;
m.rz = 0;
m.hu = 0;
m.tt1 = 0;
m.ti = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['value1','sample'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ti = ifcond(above(m.bass, 1.3), 0.3, (m.ti*0.9));
m.tt1 = ((m.tt1+0.01)+(m.ti*0.1));
m.t8 = m.tt1;
m.t7 = (Math.cos(((m.time*0.1)+1))*Math.sin(((m.time*0.1)-6)));
m.rx = (div(Math.atan2((Math.sin((m.time*0.1))*Math.cos(m.t8)), (sqr((Math.sin(m.t8)+1))+sqr(m.t7))),4)+div((Math.sin(m.t8)+1),2));
m.ry = Math.atan2((Math.sin((m.time*0.1))*Math.cos(m.t8)), m.t7);
m.rz = 0;
m.t1 = Math.sin(m.rx);
m.t2 = Math.cos(m.rx);
m.t3 = Math.sin(m.ry);
m.t4 = Math.cos(m.ry);
m.t5 = Math.sin(m.rz);
m.t6 = Math.cos(m.rz);
		return m;
	},
		'point_eqs' : function(m) {
m.sample = ((m.sample*6.283185)*0.5);
m.value1 = ((m.value1+1)*0.3);
m.x1 = ((Math.sin(m.sample)*Math.sin((m.sample*40)))*m.value1);
m.y1 = (Math.cos(m.sample)*m.value1);
m.z1 = ((Math.sin(m.sample)*Math.cos((m.sample*40)))*m.value1);
m.x1 = (m.x1+(Math.sin((m.time*0.1))*Math.cos(m.t8)));
m.y1 = (m.y1+(Math.sin(m.t8)+1));
m.z1 = (m.z1+m.t7);
m.x2 = ((m.x1*m.t4)-(m.z1*m.t3));
m.z2 = ((m.x1*m.t3)+(m.z1*m.t4));
m.y2 = ((m.y1*m.t2)-(m.z2*m.t1));
m.z3 = (((m.y1*m.t1)+(m.z2*m.t2))+1.4);
m.x3 = ((m.x2*m.t6)-(m.y2*m.t5));
m.y3 = ((m.x2*m.t5)+(m.y2*m.t6));
m.z3 = ifcond(above(m.z3, 0.1), div(0.5,m.z3), 0);
m.x = (ifcond(m.z3, (m.x3*m.z3), m.x)+0.5);
m.y = (ifcond(m.z3, (-m.y3*m.z3), m.y)+0.5);
m.hu = (m.sample+Math.sin(m.time));
m.r = ((Math.sin(m.hu)*0.5)+0.5);
m.g = ((Math.sin((m.hu+(6.283185*0.33)))*0.5)+0.5);
m.b = ((Math.sin((m.hu+(6.283185*0.66)))*0.5)+0.5);
m.a = (m.z3*0.8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ti=if(above(bass,1.3),.3,ti*.9);\n' + 'tt1=tt1+.01+ti*.1;\n' + 't8=tt1;\n' + 't7=cos(time*.1+1)*sin(time*.1-6);\n' + 'rx=atan2(sin(time*.1)*cos(t8),sqr(sin(t8)+1)+sqr(t7))/4+(sin(t8)+1)/2;\n' + 'ry=atan2(sin(time*.1)*cos(t8),t7);\n' + 'rz=0;\n' + 't1=sin(rx);\n' + 't2=cos(rx);\n' + 't3=sin(ry);\n' + 't4=cos(ry);\n' + 't5=sin(rz);\n' + 't6=cos(rz);'),
		'point_eqs_str' : ('sample=sample*6.283185*.5;\n' + 'value1=(value1+1)*.3;\n' + 'x1=sin(sample)*sin(sample*40)*value1;\n' + 'y1=cos(sample)*value1;\n' + 'z1=sin(sample)*cos(sample*40)*value1;\n' + 'x1=x1+(sin(time*.1)*cos(t8));\n' + 'y1=y1+(sin(t8)+1);\n' + 'z1=z1+t7;\n' + 'x2=x1*t4-z1*t3;\n' + 'z2=x1*t3+z1*t4;\n' + 'y2=y1*t2-z2*t1;\n' + 'z3=y1*t1+z2*t2+1.4;\n' + 'x3=x2*t6-y2*t5;\n' + 'y3=x2*t5+y2*t6;\n' + 'z3=if(above(z3,.1),.5/z3,0);\n' + 'x=if(z3,x3*z3,x)+.5;\n' + 'y=if(z3,-y3*z3,y)+.5;\n' + 'hu=sample+sin(time);\n' + 'r=sin(hu)*.5+.5;\n' + 'g=sin(hu+6.283185*.33)*.5+.5;\n' + 'b=sin(hu+6.283185*.66)*.5+.5;\n' + 'a=z3*.8;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 302.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.t5 = 0;
m.rt = 0;
m.t6 = 0;
m.t7 = 0;
m.t8 = 0;
m.rx = 0;
m.ry = 0;
m.i1 = 0;
m.rz = 0;
m.cp = 0;
m.hu = 0;
m.tt1 = 0;
m.ti = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['sample','cp'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ti = ifcond(above(m.bass, 1.3), 0.3, (m.ti*0.9));
m.tt1 = ((m.tt1+0.01)+(m.ti*0.1));
m.t8 = m.tt1;
m.t7 = (Math.cos(((m.time*0.1)+1))*Math.sin(((m.time*0.1)-6)));
m.rx = (div(Math.atan2((Math.sin((m.time*0.1))*Math.cos(m.t8)), (sqr((Math.sin(m.t8)+1))+sqr(m.t7))),4)+div((Math.sin(m.t8)+1),2));
m.ry = Math.atan2((Math.sin((m.time*0.1))*Math.cos(m.t8)), m.t7);
m.rz = 0;
m.t1 = Math.sin(m.rx);
m.t2 = Math.cos(m.rx);
m.t3 = Math.sin(m.ry);
m.t4 = Math.cos(m.ry);
m.t5 = Math.sin(m.rz);
m.t6 = Math.cos(m.rz);
		return m;
	},
		'point_eqs' : function(m) {
m.cp = bnot(m.cp);
m.r = ((m.sample*6.283185)*10);
m.i1 = mod((m.sample*6),2);
m.rt = ifcond(m.cp, 1, 0.5);
m.sample = ((m.sample*6.283185)*0.5);
m.x1 = (Math.sin(m.r)*m.rt);
m.z1 = (Math.cos(m.r)*m.rt);
m.y1 = (-Math.sin(m.i1)+0.5);
m.x1 = (m.x1+(Math.sin((m.time*0.1))*Math.cos(m.t8)));
m.y1 = (m.y1+(Math.sin(m.t8)+1));
m.z1 = (m.z1+m.t7);
m.x2 = ((m.x1*m.t4)-(m.z1*m.t3));
m.z2 = ((m.x1*m.t3)+(m.z1*m.t4));
m.y2 = ((m.y1*m.t2)-(m.z2*m.t1));
m.z3 = (((m.y1*m.t1)+(m.z2*m.t2))+1.4);
m.x3 = ((m.x2*m.t6)-(m.y2*m.t5));
m.y3 = ((m.x2*m.t5)+(m.y2*m.t6));
m.z3 = ifcond(above(m.z3, 0.1), div(0.5,m.z3), 0);
m.x = (ifcond(m.z3, (m.x3*m.z3), m.x)+0.5);
m.y = (ifcond(m.z3, (-m.y3*m.z3), m.y)+0.5);
m.hu = (m.sample+(Math.sin(div(m.time,6.283185))*6.283185));
m.r = ((Math.sin(m.hu)*0.5)+0.5);
m.g = ((Math.sin((m.hu+(6.283185*0.33)))*0.5)+0.5);
m.b = ((Math.sin((m.hu+(6.283185*0.66)))*0.5)+0.5);
m.a = (m.z3*0.8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ti=if(above(bass,1.3),.3,ti*.9);\n' + 'tt1=tt1+.01+ti*.1;\n' + 't8=tt1;\n' + 't7=cos(time*.1+1)*sin(time*.1-6);\n' + 'rx=atan2(sin(time*.1)*cos(t8),sqr(sin(t8)+1)+sqr(t7))/4+(sin(t8)+1)/2;\n' + 'ry=atan2(sin(time*.1)*cos(t8),t7);\n' + 'rz=0;\n' + 't1=sin(rx);\n' + 't2=cos(rx);\n' + 't3=sin(ry);\n' + 't4=cos(ry);\n' + 't5=sin(rz);\n' + 't6=cos(rz);'),
		'point_eqs_str' : ('cp=bnot(cp);\n' + 'r=sample*6.283185*10;\n' + 'i1=(sample*6)%2;\n' + 'rt=if(cp,1,.5);\n' + 'sample=sample*6.283185*.5;\n' + 'x1=sin(r)*rt;\n' + 'z1=cos(r)*rt;\n' + 'y1=-sin(i1)+.5;\n' + 'x1=x1+(sin(time*.1)*cos(t8));\n' + 'y1=y1+(sin(t8)+1);\n' + 'z1=z1+t7;\n' + 'x2=x1*t4-z1*t3;\n' + 'z2=x1*t3+z1*t4;\n' + 'y2=y1*t2-z2*t1;\n' + 'z3=y1*t1+z2*t2+1.4;\n' + 'x3=x2*t6-y2*t5;\n' + 'y3=x2*t5+y2*t6;\n' + 'z3=if(above(z3,.1),.5/z3,0);\n' + 'x=if(z3,x3*z3,x)+.5;\n' + 'y=if(z3,-y3*z3,y)+.5;\n' + 'hu=sample+sin(time/6.283185)*6.283185;\n' + 'r=sin(hu)*.5+.5;\n' + 'g=sin(hu+6.283185*.33)*.5+.5;\n' + 'b=sin(hu+6.283185*.66)*.5+.5;\n' + 'a=z3*.8;'),

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
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.t5 = 0;
m.t6 = 0;
m.t7 = 0;
m.t8 = 0;
m.rx = 0;
m.ry = 0;
m.rz = 0;
m.tt1 = 0;
m.ti = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['sample'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ti = ifcond(above(m.bass, 1.3), 0.3, (m.ti*0.9));
m.tt1 = ((m.tt1+0.01)+(m.ti*0.1));
m.t8 = m.tt1;
m.t7 = (Math.cos(((m.time*0.1)+1))*Math.sin(((m.time*0.1)-6)));
m.rx = (div(Math.atan2((Math.sin((m.time*0.1))*Math.cos(m.t8)), (sqr((Math.sin(m.t8)+1))+sqr(m.t7))),4)+div((Math.sin(m.t8)+1),2));
m.ry = Math.atan2((Math.sin((m.time*0.1))*Math.cos(m.t8)), m.t7);
m.rz = 0;
m.t1 = Math.sin(m.rx);
m.t2 = Math.cos(m.rx);
m.t3 = Math.sin(m.ry);
m.t4 = Math.cos(m.ry);
m.t5 = Math.sin(m.rz);
m.t6 = Math.cos(m.rz);
		return m;
	},
		'point_eqs' : function(m) {
m.sample = ((m.sample*6.283185)*134);
m.x1 = ((Math.sin((m.sample*543))*2)+(Math.sin((m.time*0.1))*Math.cos(m.t8)));
m.y1 = ((Math.cos((m.sample*4232))*2)+(Math.sin(m.t8)+1));
m.z1 = ((Math.sin((m.sample*90))*2)+m.t7);
m.x2 = ((m.x1*m.t4)-(m.z1*m.t3));
m.z2 = ((m.x1*m.t3)+(m.z1*m.t4));
m.y2 = ((m.y1*m.t2)-(m.z2*m.t1));
m.z3 = (((m.y1*m.t1)+(m.z2*m.t2))+1);
m.x3 = ((m.x2*m.t6)-(m.y2*m.t5));
m.y3 = ((m.x2*m.t5)+(m.y2*m.t6));
m.z3 = ifcond(above(m.z3, 0.1), div(0.5,m.z3), 0);
m.x = (ifcond(m.z3, (m.x3*m.z3), m.x)+0.5);
m.y = (ifcond(m.z3, (-m.y3*m.z3), m.y)+0.5);
m.a = (m.z3*0.8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ti=if(above(bass,1.3),.3,ti*.9);\n' + 'tt1=tt1+.01+ti*.1;\n' + 't8=tt1;\n' + 't7=cos(time*.1+1)*sin(time*.1-6);\n' + 'rx=atan2(sin(time*.1)*cos(t8),sqr(sin(t8)+1)+sqr(t7))/4+(sin(t8)+1)/2;\n' + 'ry=atan2(sin(time*.1)*cos(t8),t7);\n' + 'rz=0;\n' + 't1=sin(rx);\n' + 't2=cos(rx);\n' + 't3=sin(ry);\n' + 't4=cos(ry);\n' + 't5=sin(rz);\n' + 't6=cos(rz);'),
		'point_eqs_str' : ('sample=sample*6.283185*134;\n' + 'x1=sin(sample*543)*2+(sin(time*.1)*cos(t8));\n' + 'y1=cos(sample*4232)*2+(sin(t8)+1);\n' + 'z1=sin(sample*90)*2+t7;\n' + 'x2=x1*t4-z1*t3;\n' + 'z2=x1*t3+z1*t4;\n' + 'y2=y1*t2-z2*t1;\n' + 'z3=y1*t1+z2*t2+1;\n' + 'x3=x2*t6-y2*t5;\n' + 'y3=x2*t5+y2*t6;\n' + 'z3=if(above(z3,.1),.5/z3,0);\n' + 'x=if(z3,x3*z3,x)+.5;\n' + 'y=if(z3,-y3*z3,y)+.5;\n' + 'a=z3*.8;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 142.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.t5 = 0;
m.rt = 0;
m.t7 = 0;
m.t8 = 0;
m.rx = 0;
m.ry = 0;
m.i1 = 0;
m.ry1 = 0;
m.cp = 0;
m.hu = 0;
m.tt1 = 0;
m.ti = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['sample','cp'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ti = ifcond(above(m.bass, 1.3), 0.3, (m.ti*0.9));
m.tt1 = ((m.tt1+0.01)+(m.ti*0.1));
m.t8 = m.tt1;
m.t7 = (Math.cos(((m.time*0.1)+1))*Math.sin(((m.time*0.1)-6)));
m.rx = (div(Math.atan2((Math.sin((m.time*0.1))*Math.cos(m.t8)), (sqr((Math.sin(m.t8)+1))+sqr(m.t7))),4)+div((Math.sin(m.t8)+1),2));
m.ry = Math.atan2((Math.sin((m.time*0.1))*Math.cos(m.t8)), m.t7);
m.ry1 = (m.ry1+(m.bass_att*0.2));
m.t1 = Math.sin(m.rx);
m.t2 = Math.cos(m.rx);
m.t3 = Math.sin(m.ry);
m.t4 = Math.cos(m.ry);
m.t5 = m.ry1;
		return m;
	},
		'point_eqs' : function(m) {
m.cp = bnot(m.cp);
m.r = (m.sample*62.83185);
m.i1 = mod((m.sample*6),2);
m.rt = ifcond(m.cp, 0.7, 0.2);
m.sample = (m.sample*3.14159);
m.x1 = (Math.sin(m.r)*m.rt);
m.z1 = (Math.cos(m.r)*m.rt);
m.y1 = -0.5;
m.x2 = ((m.x1*Math.cos(m.t5))-(m.z1*Math.sin(m.t5)));
m.z2 = ((m.x1*Math.sin(m.t5))+(m.z1*Math.cos(m.t5)));
m.x1 = (m.x2+(Math.sin((m.time*0.1))*Math.cos(m.t8)));
m.y1 = (m.y1+(Math.sin(m.t8)+1));
m.z1 = (m.z2+m.t7);
m.x2 = ((m.x1*m.t4)-(m.z1*m.t3));
m.z2 = ((m.x1*m.t3)+(m.z1*m.t4));
m.y2 = ((m.y1*m.t2)-(m.z2*m.t1));
m.z3 = (((m.y1*m.t1)+(m.z2*m.t2))+1.4);
m.x3 = m.x2;
m.y3 = m.y2;
m.z3 = ifcond(above(m.z3, 0.1), div(0.5,m.z3), 0);
m.x = (ifcond(m.z3, (m.x3*m.z3), m.x)+0.5);
m.y = (ifcond(m.z3, (-m.y3*m.z3), m.y)+0.5);
m.hu = (m.sample+(Math.cos(div(m.time,6.283185))*6.283185));
m.r = ((Math.sin(m.hu)*0.5)+0.5);
m.g = ((Math.sin((m.hu+(6.283185*0.33)))*0.5)+0.5);
m.b = ((Math.sin((m.hu+(6.283185*0.66)))*0.5)+0.5);
m.a = (m.z3*0.8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ti=if(above(bass,1.3),.3,ti*.9);\n' + 'tt1=tt1+.01+ti*.1;\n' + 't8=tt1;\n' + 't7=cos(time*.1+1)*sin(time*.1-6);\n' + 'rx=atan2(sin(time*.1)*cos(t8),sqr(sin(t8)+1)+sqr(t7))/4+(sin(t8)+1)/2;\n' + 'ry=atan2(sin(time*.1)*cos(t8),t7);\n' + 'ry1=ry1+bass_att*.2;\n' + 't1=sin(rx);\n' + 't2=cos(rx);\n' + 't3=sin(ry);\n' + 't4=cos(ry);\n' + 't5=ry1;'),
		'point_eqs_str' : ('cp=bnot(cp);\n' + 'r=sample*62.83185;\n' + 'i1=(sample*6)%2;\n' + 'rt=if(cp,.7,.2);\n' + 'sample=sample*3.14159;\n' + 'x1=sin(r)*rt;\n' + 'z1=cos(r)*rt;\n' + 'y1=-.5;\n' + 'x2=x1*cos(t5)-z1*sin(t5);\n' + 'z2=x1*sin(t5)+z1*cos(t5);\n' + 'x1=x2+(sin(time*.1)*cos(t8));\n' + 'y1=y1+(sin(t8)+1);\n' + 'z1=z2+t7;\n' + 'x2=x1*t4-z1*t3;\n' + 'z2=x1*t3+z1*t4;\n' + 'y2=y1*t2-z2*t1;\n' + 'z3=y1*t1+z2*t2+1.4;\n' + 'x3=x2;\n' + 'y3=y2;\n' + 'z3=if(above(z3,.1),.5/z3,0);\n' + 'x=if(z3,x3*z3,x)+.5;\n' + 'y=if(z3,-y3*z3,y)+.5;\n' + 'hu=sample+cos(time/6.283185)*6.283185;\n' + 'r=sin(hu)*.5+.5;\n' + 'g=sin(hu+6.283185*.33)*.5+.5;\n' + 'b=sin(hu+6.283185*.66)*.5+.5;\n' + 'a=z3*.8;'),

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
	'frame_eqs_str' : ('warp=0;\n' + 'old_bass_flop=bass_flop;\n' + 'old_treb_flop=treb_flop;\n' + 'old_mid_flop=mid_flop;\n' + 'chaos=.9+.1*sin(pulse);\n' + 'entropy=if(bnot(entropy),2,if(equal(pulse,-20),1+int(rand(3)),entropy));\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);\n' + 'bass_flop=abs(bass_flop-equal(bass_thresh,2));\n' + 'treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);\n' + 'treb_flop=abs(treb_flop-equal(treb_thresh,2));\n' + 'mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);\n' + 'mid_flop=abs(mid_flop-equal(mid_thresh,2));\n' + 'bass_changed=bnot(equal(old_bass_flop,bass_flop));\n' + 'mid_changed=bnot(equal(old_mid_flop,mid_flop));\n' + 'treb_changed=bnot(equal(old_treb_flop,treb_flop));\n' + 'bass_residual = bass_changed*sin(pulse*bass_thresh*.1*entropy) + bnot(bass_changed)*bass_residual;\n' + 'treb_residual = treb_changed*sin(pulse*treb_thresh*.1*entropy) + bnot(treb_changed)*treb_residual;\n' + 'mid_residual = mid_changed*sin(pulse*mid_thresh*.1*entropy) + bnot(mid_changed)*mid_residual;\n' + 'pulse=if(above(abs(pulse),20),-20,pulse+.2*bor(bor(bass_changed*bnot(treb_changed),treb_changed*bnot(bass_changed))*bnot(mid_changed),mid_changed)+(mid+bass+treb)*entropy*.025);\n' + 'q1=mid_residual;\n' + 'q2=bass_residual;\n' + 'q3=treb_residual;\n' + 'q4=sin(pulse);\n' + 'q5=sin(pulse/2);\n' + 'wave_r=wave_r+.5*bass_residual;\n' + 'wave_r=wave_g+.5*mid_residual;\n' + 'wave_r=wave_b+.5*treb_residual;\n' + 'wave_mystery=mid_residual;\n' + 'ob_r=if(bass_flop,treb_flop,wave_r);\n' + 'ob_b=if(treb_flop,mid_flop,wave_b);\n' + 'ob_g=if(mid_flop,bass_flop,wave_g);\n' + 'ob_a=.03+.02*wave_r;\n' + 'ob_size=.05+.04*treb_residual;\n' + 'ib_r=if(bass_flop,ob_b,ob_g);\n' + 'ib_b=if(treb_flop,ob_g,ob_r);\n' + 'ib_g=if(mid_flop,ob_r,ob_b);\n' + 'ib_a=.03+.02*wave_g;\n' + 'ib_size=.05+.04*bass_residual;'),
	'pixel_eqs_str' : ('radix=if(above(q3,0),min(x,y),max(x,y));\n' + 'radix=if(above(q2,0),min(radix,rad),max(radix,rad));\n' + 'rot=if(above(q4,0),rad*.2*q5,0);\n' + 'zoom=if(above(q2,0),zoom,if(above(q3,0),1+q1*.05,1+.07*cos(radix*10*q1)));'),
};

return pmap;
});
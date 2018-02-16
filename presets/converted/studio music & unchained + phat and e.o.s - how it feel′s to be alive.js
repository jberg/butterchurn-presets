define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.5,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.187274,
		echo_alpha : 1.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.5,
		sy : 1.0,
		ib_size : 0.5,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.9997,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.5,
		fshader : 0.03,
		wave_r : 0.5,
		ib_r : 0.5,
		mv_b : 0.4999,
		echo_zoom : 1.0,
		ob_size : 0.5,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.4999,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.979708,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.5,
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.6253,
		ob_g : 0.5,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.5,
		mv_r : 0.4999,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.treb_thresh = 0;
m.q1 = 0;
m.chaos = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.bass_residual = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.bass_flop = 0;
m.var = 0;
m.dx_r = 0;
m.dy_r = 0;
m.treb_residual = 0;
m.treb_flop = 0;
m.old_bass_flop = 0;
m.treb_changed = 0;
m.entropy = 0;
m.mid_thresh = 0;
m.old_treb_flop = 0;
m.bass_changed = 0;
m.old_mid_flop = 0;
m.rip = 0;
m.pulse = 0;
m.crack = 0;
m.ripdown = 0;
m.thresh = 0;
m.crackdown = 0;
m.bass_thresh = 0;
m.mid_residual = 0;
m.mid_changed = 0;
m.mid_flop = 0;
m.entropy = 2;
		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.old_bass_flop = m.bass_flop;
m.old_treb_flop = m.treb_flop;
m.old_mid_flop = m.mid_flop;
m.chaos = (0.9+(0.1*Math.sin(m.pulse)));
m.entropy = ifcond(equal(m.pulse, -20), ((((1+m.bass_flop)+m.treb_flop)+m.mid_flop)+rand(2)), m.entropy);
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*m.chaos)+1.3)));
m.bass_flop = Math.abs((m.bass_flop-equal(m.bass_thresh, 2)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.3)*m.chaos)+1.3)));
m.treb_flop = Math.abs((m.treb_flop-equal(m.treb_thresh, 2)));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_att, m.mid_thresh))*(((m.mid_thresh-1.3)*m.chaos)+1.3)));
m.mid_flop = Math.abs((m.mid_flop-equal(m.mid_thresh, 2)));
m.bass_changed = bnot(equal(m.old_bass_flop, m.bass_flop));
m.mid_changed = bnot(equal(m.old_mid_flop, m.mid_flop));
m.treb_changed = bnot(equal(m.old_treb_flop, m.treb_flop));
m.bass_residual = ((m.bass_changed*Math.sin(((m.pulse*0.1)*m.entropy)))+(bnot(m.bass_changed)*m.bass_residual));
m.treb_residual = ((m.treb_changed*Math.sin(((m.pulse*0.1)*m.entropy)))+(bnot(m.treb_changed)*m.treb_residual));
m.mid_residual = ((m.mid_changed*Math.sin(((m.pulse*0.1)*m.entropy)))+(bnot(m.mid_changed)*m.mid_residual));
m.pulse = ifcond(above(Math.abs(m.pulse), 60), -60, (m.pulse+(((m.bass_thresh+m.mid_thresh)+m.treb_thresh)*0.132)));
m.q1 = m.mid_residual;
m.q2 = m.bass_residual;
m.q3 = m.treb_residual;
m.q4 = Math.sin(m.pulse);
m.q5 = Math.cos((div(m.pulse,2)+m.q1));
m.q6 = (((((above(m.q1, 0)+above(m.q2, 0))+above(m.q3, 0))+(above(m.q3, 0)*m.treb_flop))+(above(m.q2, 0)*m.bass_flop))+(above(m.q1, 0)*m.mid_flop));
m.q7 = m.entropy;
m.q8 = Math.sin(((m.q6*m.q1)+(m.q7*m.q2)));
m.zoom = (m.zoom+(0.02*m.q8));
m.wave_mystery = Math.sin((m.q1+m.q5));
m.wave_r = (m.wave_r+(0.5*Math.sin(((m.q1+(m.q2*2))+(m.q4*2.1)))));
m.wave_b = (m.wave_b+(0.5*Math.sin(((m.q2+(m.q3*2))+(m.q4*2.2)))));
m.wave_g = (m.wave_g+(0.5*Math.sin(((m.q3+(m.q1*2))+(m.q4*2.3)))));
m.ob_r = ifcond(m.bass_flop, (m.ob_r+(0.5*Math.sin(((m.q1+(m.q3*1.14))+m.q2)))), m.wave_b);
m.ob_b = ifcond(m.treb_flop, (m.ob_b+(0.5*Math.sin(((m.q2+(m.q1*1.14))+m.q3)))), m.wave_g);
m.ob_g = ifcond(m.mid_flop, (m.ob_g+(0.5*Math.sin(((m.q3+(m.q2*1.14))+m.q1)))), m.wave_r);
m.ib_r = ifcond(m.bass_flop, m.ob_b, (m.ib_r+(0.5*Math.cos((m.q5+(m.q1*2.14))))));
m.ib_b = ifcond(m.treb_flop, m.ob_g, (m.ib_b+(0.5*Math.cos((m.q5+(m.q2*2.14))))));
m.ib_g = ifcond(m.mid_flop, m.ob_r, (m.ib_g+(0.5*Math.cos((m.q5+(m.q3*2.14))))));
m.mv_r = (m.mv_r+(0.5*Math.sin((m.q4+((m.q5*1.14)*m.q1)))));
m.mv_b = (m.mv_b+(0.5*Math.sin((m.q4+((m.q5*1.14)*m.q2)))));
m.mv_g = (m.mv_g+(0.5*Math.sin((m.q5+((m.q5*1.14)*m.q3)))));
m.ob_a = (0.25+(0.25*Math.sin((m.q2+(m.q3*2.14)))));
m.ib_a = (0.5+(0.5*Math.sin(((m.q2*2.14)+m.q3))));
m.mv_a = (m.mv_a+(m.mv_a*Math.sin(((m.q3*2.14)+m.q2))));
m.ob_size = (0.1+(0.1*Math.sin(((m.q3*3)+m.q1))));
m.ib_size = ((m.ib_size*0.5)+((m.ib_size*0.25)*Math.sin(((m.q1*3)+m.q3))));
m.wave_mode = ((m.q6+above(m.q4, 0))+above(m.q5, 0));
m.wave_mystery = Math.sin((((m.q3*1.14)+(m.q1*1.14))+m.q2));
m.mv_l = ((m.q6*m.q7)*m.q2);
m.wave_x = (m.wave_x+((0.1*m.q7)*m.q4));
m.wave_y = (m.wave_y+((0.1*m.q6)*m.q5));
m.mv_x = (m.q6*m.q7);
m.mv_y = (m.q6*m.q7);
m.zoom = (m.zoom+(0.01*m.q1));
m.echo_alpha = ifcond(above(m.q2, 0.5), 0.5, 1);
m.echo_orient = ((1.5+m.q1)+m.q2);
m.echo_zoom = (0.5+(0.1*((m.q1+m.q2)+m.q3)));
m.monitor = m.echo_zoom;
m.rot = (m.rot+(0.040*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.zoom = Math.max(0.97, Math.min((0.15+(0.7*m.bass_att)), 1.75));
		m.rkeys = ['dx_r','warp','dy_r','zoom','dx','dy','rot','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.q2 = above(m.rad, 0.503);
m.rot = (m.rot+ifcond(m.q2, 0, (Math.sin((m.time*0.7243))*0.5)));
m.zoom = (m.zoom+ifcond(m.q2, 0, ((m.rad*Math.sin((m.time*0.734)))*0.8)));
m.warp = (m.warp+ifcond(above(m.rad, 0.2166), Math.sin((m.ang*m.rad)), 0));
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.025)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.025)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.crack = ((((1.34*Math.sin(((3.12*m.thresh)*m.time)))+(0.95*Math.sin(((5*m.thresh)*m.time))))+(1.73*Math.cos(((1.66*m.thresh)*m.time))))-(0.5*Math.sin(((0.25*m.thresh)*m.time))));
m.rip = ((((1.92*Math.cos(((1.96*m.thresh)*m.time)))-(0.195*Math.cos(((3.27*m.thresh)*m.time))))+(0.236*Math.sin(((3.25*m.thresh)*m.time))))+(1.5*Math.sin((m.thresh*m.time))));
m.crackdown = (((m.crack*2)*m.dx_r)*Math.sin((33.75*m.time)));
m.ripdown = (((m.rip*2)*m.dy_r)*Math.sin((5.75*m.time)));
m.dx = (m.dx+(ifcond(above(m.crack, m.rip), ((2*m.dx_r)*m.crackdown), ((-2*m.dx_r)*m.ripdown))*25));
m.dy = (m.dy+(ifcond(above(m.rip, m.crack), ((2*m.dy_r)*m.crackdown), ((-2*m.dy_r)*m.ripdown))*25));
m.var = ((Math.tan(m.time)*m.treb)*m.treb);
m.zoom = ((1+div(m.rad,50))+div(m.var,50));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.99,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
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
m.yheight = 0;
m.xoffset1 = 0;
m.pphase2 = 0;
m.xoffset2 = 0;
m.px = 0;
m.py = 0;
m.lrorient = 0;
m.pphase = 0;
m.pheight = 0;
m.yspout = 0;
m.xspout = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.xspout = 0.5;
m.yspout = -0.5;
m.pphase = (((9999*m.sample)*m.sample)*0.0001);
m.pphase2 = (0.1+(mod(((m.sample*9349)*m.sample),100)*0.01));
m.pheight = (mod((m.sample*9893),100)*0.002);
m.yheight = (mod(((m.sample*7231)*m.sample),100)*0.01);
m.r = ((mod((m.sample*5454),100)*0.01)*Math.abs(Math.sin((m.time*0.25))));
m.g = (mod((m.sample*9954),100)*0.01);
m.xoffset1 = (Math.cos(((m.time*m.pphase2)+m.pphase))*m.pheight);
m.xoffset2 = (-1*(Math.cos(((m.time*m.pphase2)+m.pphase))*m.pheight));
m.lrorient = ifcond(below(Math.cos(((m.time*m.pphase2)+m.pphase)), Math.cos((((m.time-0.1)*m.pphase2)+m.pphase))), 0, 1);
m.px = ifcond(equal(m.lrorient, 0), ((m.xspout-m.pheight)+m.xoffset1), ((m.xspout+m.pheight)-m.xoffset2));
m.py = (m.yspout+(Math.abs(Math.sin(((m.time*m.pphase2)+m.pphase)))*m.yheight));
m.x = m.px;
m.y = m.py;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('xspout=.5;\n' + 'yspout=-.5;\n' + 'pphase=9999*sample*sample*.0001;\n' + 'pphase2=.1+((sample*9349*sample)%100)*.01;\n' + 'pheight=((sample*9893)%100)*.002;\n' + 'yheight=((sample*7231*sample)%100)*.01;\n' + 'r=((sample*5454)%100)*.01*abs(sin(time*.25));\n' + 'g=((sample*9954)%100)*.01;\n' + 'xoffset1=(cos((time*pphase2)+pphase)*pheight);\n' + 'xoffset2=-1*(cos((time*pphase2)+pphase)*pheight);\n' + 'lrorient=if(below(cos((time*pphase2)+pphase),cos(((time-.1)*pphase2)+pphase)),0,1);\n' + 'px=if(equal(lrorient,0),xspout-pheight+xoffset1,xspout+pheight-xoffset2);\n' + 'py=yspout+(abs(sin((time*pphase2)+pphase))*yheight);\n' + 'x=px;\n' + 'y=py;'),

		},
		{
		'baseVals' : {
			a : 0.99,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.01,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.px = 0;
m.py = 0;
m.pphase = 0;
m.pheight = 0;
m.yspout = 0;
m.xspout = 0;

			m.rkeys = ['yspout','xspout'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.pphase = ((m.sample*5671)*Math.cos((m.time*0.0001)));
m.pheight = ((mod((m.sample*7654),100)*0.005)*Math.sin((m.time*0.5)));
m.xspout = ifcond(below(Math.abs(Math.sin((m.time*0.2))), 0.005), (0.3+(rand(40)*0.01)), m.xspout);
m.yspout = ifcond(below(Math.abs(Math.sin((m.time*0.2))), 0.005), (0.3+(rand(40)*0.01)), m.yspout);
m.px = (m.xspout+(Math.cos((m.time+m.pphase))*m.pheight));
m.py = (m.yspout+(Math.sin((m.time+m.pphase))*m.pheight));
m.x = m.px;
m.y = m.py;
m.a = Math.abs(((Math.sin((m.time*0.2))*0.3)+(m.treb_att*0.1)));
m.r = (m.treb*2);
m.g = (m.bass*3);
m.b = ((0.5*Math.sin((m.time*0.1876)))+(0.495*(0.5+(Math.sin((m.y*208))*0.5))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('pphase=(sample*5671*cos(time*.0001));\n' + 'pheight=((sample*7654)%100)*.005*sin(time*.5);\n' + 'xspout=if(below(abs(sin(time*.2)),.005),.3+(rand(40)*.01),xspout);\n' + 'yspout=if(below(abs(sin(time*.2)),.005),.3+(rand(40)*.01),yspout);\n' + 'px=xspout+(cos(time+pphase)*pheight);\n' + 'py=yspout+(sin(time+pphase)*pheight);\n' + 'x=px;\n' + 'y=py;\n' + 'a=abs(sin(time*.2)*.3+(treb_att*.1));\n' + 'r=treb*2;\n' + 'g =bass*3;\n' + 'b = 0.5*sin(time*0.1876)+0.495*(0.5+sin(y*208)*0.5);'),

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
m.bb = 0;
m.gg = 0;
m.rr = 0;
m.sang = 0;
m.n = 0;
m.s = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.tm = 0;
m.xq = 0;
m.ang = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = 0;
m.t2 = ((Math.sin((m.time*0.17))*0.5)+0.5);
m.t3 = 0;
		return m;
	},
		'point_eqs' : function(m) {
m.n = ((m.sample*6.283)+(m.time*0.01));
m.xp = ((m.sample*2)-1);
m.yp = 1;
m.zp = 0;
m.ang = ((128*m.sample)+((m.t2*64)*m.sample));
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.time*0.2);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = m.t3;
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = (((m.zp+1)*20)+1);
m.x = (div(m.xp,m.zp)+0.5);
m.y = ((div(m.yp,m.zp)*1.333)+0.5);
m.tm = (m.time*0.3);
m.s = (m.sample+m.tm);
m.rr = (m.s-Math.floor(m.s));
m.r = (m.rr*m.rr);
m.s = ((m.sample+0.15)+m.tm);
m.gg = (m.s-Math.floor(m.s));
m.g = (m.gg*m.gg);
m.s = ((m.sample+0.3)+m.tm);
m.bb = (m.s-Math.floor(m.s));
m.b = (m.bb*m.bb);
m.a = ((Math.sin((m.n*256))*0.5)+0.5);
m.a = above(m.a, 0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=0;\n' + 't2=sin(time*0.17)*0.5+0.5;\n' + 't3=0;'),
		'point_eqs_str' : ('n=sample*6.283 + time*0.01;\n' + 'xp= sample*2 -1;\n' + 'yp= 1;\n' + 'zp= 0;\n' + 'ang=128*sample+t2*64*sample;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sang + zp*cang;\n' + 'zq=yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=time*0.2;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sang + zp*cang;\n' + 'zq=yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=t3;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + zp*cang;\n' + 'yq=yp;\n' + 'zq=xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp=(zp+1)*20+1;\n' + 'x=xp/zp + 0.5;\n' + 'y=yp/zp*1.333 + 0.5;\n' + 'tm=time*0.3;\n' + 's=sample + tm;\n' + 'rr= s - int(s);\n' + 'r=rr*rr;\n' + 's=sample + 0.15 + tm;\n' + 'gg= s - int(s);\n' + 'g=gg*gg;\n' + 's=sample + 0.3 + tm;\n' + 'bb= s - int(s);\n' + 'b=bb*bb;\n' + 'a= sin(n*256)*0.5+0.5;\n' + 'a=above(a,0.5);'),

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
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.aa = 0;
m.q1 = 0;
m.t4 = 0;
m.st = 0;
m.sang = 0;
m.n = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.tm = 0;
m.xq = 0;
m.ang = 0;
m.ys = 0;
m.xs = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.st = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = 0;
m.t2 = ((Math.sin((m.time*0.17))*0.5)+0.5);
m.t3 = 0;
m.st = (m.st*(1+m.q1));
m.st = ifcond(above(m.st, 512), 1, m.st);
m.t4 = m.st;
m.t4 = 128;
		return m;
	},
		'point_eqs' : function(m) {
m.n = ((m.sample*6.283)+(m.time*0.01));
m.xp = 0;
m.yp = 1;
m.zp = (m.sample*2);
m.ang = (128*m.sample);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.yp*m.cang));
m.yq = ((m.xp*m.cang)-(m.yp*m.sang));
m.zq = m.zp;
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = ((m.zp*20)+5);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.ang = Math.sin(((m.n*6)+m.time));
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xs*m.sang)+(m.ys*m.cang));
m.yq = ((m.xs*m.cang)-(m.ys*m.sang));
m.xs = m.xq;
m.ys = m.yq;
m.x = (m.xs+0.5);
m.y = ((m.ys*1.333)+0.5);
m.tm = (m.time*3);
m.r = ((Math.sin((m.n+m.tm))*0.5)+0.5);
m.g = ((Math.sin(((m.n+m.tm)+1.1))*0.5)+0.5);
m.b = ((Math.sin(((m.n+m.tm)+2.2))*0.5)+0.5);
m.aa = ((Math.sin((m.n*m.t4))*0.5)+0.5);
m.r = ((m.r*m.aa)*m.q1);
m.g = ((m.g*m.aa)*m.q1);
m.b = ((m.b*m.aa)*m.q1);
m.a = m.sample;
		return m;
	},
		'init_eqs_str' : ('st=1;'),
		'frame_eqs_str' : ('t1=0;\n' + 't2=sin(time*0.17)*0.5+0.5;\n' + 't3=0;\n' + 'st=st*(1+q1);\n' + 'st=if(above(st,512) , 1, st);\n' + 't4=st;\n' + 't4=128;'),
		'point_eqs_str' : ('n=sample*6.283 + time*0.01;\n' + 'xp= 0;\n' + 'yp= 1;\n' + 'zp= sample*2;\n' + 'ang=128*sample;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + yp*cang;\n' + 'yq=xp*cang - yp*sang;\n' + 'zq=zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp=zp*20+5;\n' + 'xs=xp/zp ;\n' + 'ys=yp/zp ;\n' + 'ang=sin(n*6+time);\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xs*sang + ys*cang;\n' + 'yq=xs*cang - ys*sang;\n' + 'xs=xq;\n' + 'ys=yq;\n' + 'x=xs + 0.5;\n' + 'y=ys*1.333 + 0.5;\n' + 'tm=time*3;\n' + 'r=sin(n + tm)*0.5 + 0.5;\n' + 'g=sin(n + tm + 1.1)*0.5 + 0.5;\n' + 'b=sin(n + tm + 2.2)*0.5 + 0.5;\n' + 'aa= sin(n*t4)*0.5+0.5;\n' + 'r=r*aa*q1;\n' + 'g=g*aa*q1;\n' + 'b=b*aa*q1;\n' + 'a=sample;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.3768,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.324729,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.790001,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.670001,
			rad : 0.12566,
			x : 0.5,
			y : 0.5,
			ang : 3.392921,
			sides : 9.0,
			border_r : 0.03,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(Math.sin((m.time*0.9))*0.13));
m.y = (m.y+(Math.sin((m.time*0.5))*0.16));
m.border_r = m.q1;
m.border_b = m.q2;
m.border_g = m.q3;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=x+sin(time*0.9)*.13;\n' + 'y=y+sin(time*0.5)*.16;\n' + 'border_r = q1;\n' + 'border_b = q2;\n' + 'border_g = q3;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.125716,
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

			m.rkeys = ['b','g','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = ((m.rad-0.2)+(0.2*m.bass_att));
m.r = ((m.r+(0.25*Math.sin((1.1*m.time))))+(0.2*Math.sin((0.25*m.time))));
m.g = ((m.g+(0.25*Math.cos((1.5*m.time))))+(0.22*Math.cos((0.24*m.time))));
m.b = ((m.b+(0.25*Math.sin((0.6*m.time))))+(0.27*Math.cos((0.7*m.time))));
m.r2 = (1-Math.abs(m.r));
m.g2 = (1-Math.abs(m.g));
m.b2 = (1-Math.abs(m.b));
m.ang = (m.ang+(3*Math.abs(Math.tan((1*m.time)))));
m.x = ((m.x+(0.14*Math.cos(m.time)))+(0.2*Math.sin((0.42*m.time))));
m.y = (((m.y+(0.16*Math.sin((1.2*m.time))))+(0.15*Math.sin((0.8*m.time))))+(0.21*Math.cos((0.45*m.time))));
m.border_r = m.q1;
m.border_b = m.q2;
m.border_g = m.q3;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad = rad -0.2 + 0.2*bass_att;\n' + 'r = r + 0.25*sin(1.1*time) + 0.2*sin(0.25*time);\n' + 'g = g + 0.25*cos(1.5*time) + 0.22*cos(0.24*time);\n' + 'b = b + 0.25*sin(0.6*time) + 0.27*cos(0.7*time);\n' + 'r2 = 1-abs(r);\n' + 'g2 = 1-abs(g);\n' + 'b2 = 1-abs(b);\n' + 'ang = ang + 3*abs(tan(1*time));\n' + 'x = x + 0.14*cos(time) + 0.2*sin(0.42*time);\n' + 'y = y + 0.16*sin(1.2*time) + 0.15*sin(0.8*time) + 0.21*cos(0.45*time);\n' + 'border_r = q1;\n' + 'border_b = q2;\n' + 'border_g = q3;'),

		},
		{
		'baseVals' : {
			r2 : 0.18,
			a : 1.0,
			enabled : 1.0,
			b : 0.23,
			tex_ang : 0.0,
			thickoutline : 0.0,
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
			rad : 0.099995,
			x : 0.5,
			y : 0.5,
			ang : 0.03,
			sides : 4.0,
			border_r : 0.150001,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*2.4);
m.x = ((0.5+(0.22*Math.cos((m.time*3.3))))+(0.14*Math.cos((m.time*1.2))));
m.y = ((0.5+(0.26*Math.sin((m.time*3.1))))+(0.13*Math.sin((m.time*1.7))));
m.r = (0.5+(0.5*Math.sin(((m.time*1.013)+5))));
m.g = (0.5+(0.5*Math.sin(((m.time*1.063)+2))));
m.b = (0.5+(0.5*Math.sin(((m.time*1.054)+1))));
m.r2 = (0.5+(0.5*Math.sin(((m.time*1.085)+3))));
m.g2 = (0.5+(0.5*Math.sin(((m.time*1.056)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.time*1.038)+4))));
m.border_r = m.q1;
m.border_b = m.q2;
m.border_g = m.q3;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time*2.4;\n' + 'x = 0.5 + 0.22*cos(time*3.3) + 0.14*cos(time*1.2);\n' + 'y = 0.5 + 0.26*sin(time*3.1) + 0.13*sin(time*1.7);\n' + 'r = 0.5 + 0.5*sin(time*1.013 + 5);\n' + 'g = 0.5 + 0.5*sin(time*1.063 + 2);\n' + 'b = 0.5 + 0.5*sin(time*1.054 + 1);\n' + 'r2 = 0.5 + 0.5*sin(time*1.085 + 3);\n' + 'g2 = 0.5 + 0.5*sin(time*1.056+ 1);\n' + 'b2 = 0.5 + 0.5*sin(time*1.038 + 4);\n' + 'border_r = q1;\n' + 'border_b = q2;\n' + 'border_g = q3;'),

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
			g2 : 1.0,
			tex_zoom : 1.0,
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
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = ((0.5+(0.07*Math.cos((m.q4*0.5))))+(0.31*Math.sin((m.time*3.5))));
m.y = ((0.5+(0.07*Math.sin((m.q4*0.5))))+(0.31*Math.cos((m.time*3.5))));
m.r = (0.5+(0.5*Math.sin(((m.time*1.013)+2))));
m.g = (0.5+(0.5*Math.sin(((m.time*0.863)+3))));
m.b = (0.5+(0.5*Math.sin(((m.time*1.054)+1))));
m.r2 = (0.5+(0.5*Math.sin(((m.time*1.185)+3))));
m.g2 = (0.5+(0.5*Math.sin(((m.time*1.356)+2))));
m.b2 = (0.5+(0.5*Math.sin(((m.time*0.738)+4))));
m.border_r = m.q1;
m.border_b = m.q2;
m.border_g = m.q3;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.07*cos(q4*0.5) + 0.31*sin(time*3.5);\n' + 'y = 0.5 + 0.07*sin(q4*0.5) + 0.31*cos(time*3.5);\n' + 'r = 0.5 + 0.5*sin(time*1.013 + 2);\n' + 'g = 0.5 + 0.5*sin(time*0.863 + 3);\n' + 'b = 0.5 + 0.5*sin(time*1.054 + 1);\n' + 'r2 = 0.5 + 0.5*sin(time*1.185 + 3);\n' + 'g2 = 0.5 + 0.5*sin(time*1.356+ 2);\n' + 'b2 = 0.5 + 0.5*sin(time*0.738 + 4);\n' + 'border_r = q1;\n' + 'border_b = q2;\n' + 'border_g = q3;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('entropy=2;'),
	'frame_eqs_str' : ('warp=0;\n' + 'old_bass_flop=bass_flop;\n' + 'old_treb_flop=treb_flop;\n' + 'old_mid_flop=mid_flop;\n' + 'chaos=.9+.1*sin(pulse);\n' + 'entropy=if(equal(pulse,-20),1+bass_flop+treb_flop+mid_flop+rand(2),entropy);\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);\n' + 'bass_flop=abs(bass_flop-equal(bass_thresh,2));\n' + 'treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);\n' + 'treb_flop=abs(treb_flop-equal(treb_thresh,2));\n' + 'mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);\n' + 'mid_flop=abs(mid_flop-equal(mid_thresh,2));\n' + 'bass_changed=bnot(equal(old_bass_flop,bass_flop));\n' + 'mid_changed=bnot(equal(old_mid_flop,mid_flop));\n' + 'treb_changed=bnot(equal(old_treb_flop,treb_flop));\n' + 'bass_residual = bass_changed*sin(pulse*.1*entropy) + bnot(bass_changed)*bass_residual;\n' + 'treb_residual = treb_changed*sin(pulse*.1*entropy) + bnot(treb_changed)*treb_residual;\n' + 'mid_residual = mid_changed*sin(pulse*.1*entropy) + bnot(mid_changed)*mid_residual;\n' + 'pulse=if(above(abs(pulse),60),-60,pulse+(bass_thresh+mid_thresh+treb_thresh)*.132);\n' + 'q1=mid_residual;\n' + 'q2=bass_residual;\n' + 'q3=treb_residual;\n' + 'q4=sin(pulse);\n' + 'q5=cos(pulse/2+q1);\n' + 'q6=above(q1,0)+above(q2,0)+above(q3,0)+above(q3,0)*treb_flop+above(q2,0)*bass_flop+above(q1,0)*mid_flop;\n' + 'q7=entropy;\n' + 'q8=sin(q6*q1+q7*q2);\n' + 'zoom=zoom+.02*q8;\n' + 'wave_mystery=sin(q1+q5);\n' + 'wave_r=wave_r+.5*sin(q1+q2*2+q4*2.1);\n' + 'wave_b=wave_b+.5*sin(q2+q3*2+q4*2.2);\n' + 'wave_g=wave_g+.5*sin(q3+q1*2+q4*2.3);\n' + 'ob_r=if(bass_flop,ob_r+.5*sin(q1+q3*1.14+q2),wave_b);\n' + 'ob_b=if(treb_flop,ob_b+.5*sin(q2+q1*1.14+q3),wave_g);\n' + 'ob_g=if(mid_flop,ob_g+.5*sin(q3+q2*1.14+q1),wave_r);\n' + 'ib_r=if(bass_flop,ob_b,ib_r+.5*cos(q5+q1*2.14));\n' + 'ib_b=if(treb_flop,ob_g,ib_b+.5*cos(q5+q2*2.14));\n' + 'ib_g=if(mid_flop,ob_r,ib_g+.5*cos(q5+q3*2.14));\n' + 'mv_r=mv_r+.5*sin(q4+q5*1.14*q1);\n' + 'mv_b=mv_b+.5*sin(q4+q5*1.14*q2);\n' + 'mv_g=mv_g+.5*sin(q5+q5*1.14*q3);\n' + 'ob_a=.25+.25*sin(q2+q3*2.14);\n' + 'ib_a=.5+.5*sin(q2*2.14+q3);\n' + 'mv_a=mv_a+mv_a*sin(q3*2.14+q2);\n' + 'ob_size=.1+.1*sin(q3*3+q1);\n' + 'ib_size=ib_size*.5+ib_size*.25*sin(q1*3+q3);\n' + 'wave_mode=q6+above(q4,0)+above(q5,0);\n' + 'wave_mystery=sin(q3*1.14+q1*1.14+q2);\n' + 'mv_l=(q6*q7)*q2;\n' + 'wave_x=wave_x+.1*q7*q4;\n' + 'wave_y=wave_y+.1*q6*q5;\n' + 'mv_x=q6*q7;\n' + 'mv_y=q6*q7;\n' + 'zoom=zoom+.01*q1;\n' + 'echo_alpha = if(above(q2,0.5),0.5,1);\n' + 'echo_orient = (1.5+q1+q2);\n' + 'echo_zoom = 0.5 + 0.1*(q1+q2+q3);\n' + 'monitor = echo_zoom;\n' + 'rot = rot + 0.040*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'zoom=max(0.97, min(0.15+0.7*bass_att, 1.75 ));'),
	'pixel_eqs_str' : ('q2=above(rad,.503);\n' + 'rot=rot+if(q2,0,sin(time*.7243)*.5);\n' + 'zoom=zoom+if(q2,0,rad*sin(time*.734)*.8);\n' + 'warp=warp+if(above(rad,.2166),sin(ang*rad),0);\n' + 'thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.025*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.025*sin(5*time)+(1-equal(thresh,2))*dy_r;\n' + 'crack = 1.34*sin(3.12*thresh*time) + 0.95*sin(5*thresh*time) + 1.73*cos(1.66*thresh*time) - 0.5*sin(0.25*thresh*time);\n' + 'rip = 1.92*cos(1.96*thresh*time) - 0.195*cos(3.27*thresh*time) + 0.236*sin(3.25*thresh*time) + 1.5*sin(thresh*time);\n' + 'crackdown = ((crack*2)*dx_r)*sin(33.75*time);\n' + 'ripdown = ((rip*2)*dy_r)*sin(5.75*time);\n' + 'dx = dx + if (above(crack,rip), 2*dx_r*crackdown, -2*dx_r*ripdown)*25;\n' + 'dy = dy + if (above(rip,crack), 2*dy_r*crackdown, -2*dy_r*ripdown)*25;\n' + 'var=tan(time)*treb*treb;\n' + 'zoom=1+(rad/50)+(var/50);'),
};

return pmap;
});
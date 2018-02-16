define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.5,
		mv_x : 0.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.653093,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.5,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.4241,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.5,
		mv_b : 0.4999,
		echo_zoom : 1.0,
		ob_size : 0.0,
		wave_smoothing : 0.09,
		warpanimspeed : 5.9957,
		wave_dots : 0.0,
		mv_g : 0.4999,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.998217,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.5,
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.994,
		wave_a : 0.818016,
		ob_g : 0.5,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.5,
		mv_r : 0.4999,
		rating : 5.0,
		modwavealphastart : 0.75,
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
m.radix = 0;
m.q5 = 0;
m.bass_residual = 0;
m.q6 = 0;
m.q7 = 0;
m.ib_ = 0;
m.q8 = 0;
m.bass_flop = 0;
m.treb_residual = 0;
m.treb_flop = 0;
m.c1 = 0;
m.c2 = 0;
m.old_bass_flop = 0;
m.c3 = 0;
m.checkx = 0;
m.treb_changed = 0;
m.entropy = 0;
m.checky = 0;
m.mid_thresh = 0;
m.old_treb_flop = 0;
m.bass_changed = 0;
m.old_mid_flop = 0;
m.bdecay = 0;
m.pulse = 0;
m.bass_thresh = 0;
m.mid_residual = 0;
m.mid_changed = 0;
m.mid_flop = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.old_bass_flop = m.bass_flop;
m.old_treb_flop = m.treb_flop;
m.old_mid_flop = m.mid_flop;
m.chaos = (0.9+(0.1*Math.sin(m.pulse)));
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.6)*m.chaos)+1.6)));
m.bass_flop = Math.abs((m.bass_flop-equal(m.bass_thresh, 2)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.6)*m.chaos)+1.6)));
m.treb_flop = Math.abs((m.treb_flop-equal(m.treb_thresh, 2)));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_att, m.mid_thresh))*(((m.mid_thresh-1.6)*m.chaos)+1.6)));
m.mid_flop = Math.abs((m.mid_flop-equal(m.mid_thresh, 2)));
m.bass_changed = bnot(equal(m.old_bass_flop, m.bass_flop));
m.mid_changed = bnot(equal(m.old_mid_flop, m.mid_flop));
m.treb_changed = bnot(equal(m.old_treb_flop, m.treb_flop));
m.bass_residual = ((m.bass_changed*Math.sin((m.pulse*3)))+(bnot(m.bass_changed)*m.bass_residual));
m.treb_residual = ((m.treb_changed*Math.sin((m.pulse*3)))+(bnot(m.treb_changed)*m.treb_residual));
m.mid_residual = ((m.mid_changed*Math.sin((m.pulse*3)))+(bnot(m.mid_changed)*m.mid_residual));
m.pulse = ifcond(above(Math.abs(m.pulse), 3.14), -3.14, (m.pulse+(((m.bass_thresh+m.mid_thresh)+m.treb_thresh)*0.007)));
m.entropy = ifcond(((m.bass_changed*m.mid_changed)*m.treb_changed), ((((1+m.bass_flop)+m.treb_flop)+m.mid_flop)*(1+rand(3))), m.entropy);
m.q1 = m.mid_residual;
m.q2 = m.bass_residual;
m.q3 = m.treb_residual;
m.q4 = Math.sin(m.pulse);
m.q5 = Math.cos((m.pulse*(0.5+(0.1*m.entropy))));
m.q6 = Math.sin((m.pulse*(0.5+pow(0.25, m.entropy))));
m.q7 = (((((above(m.q1, 0)+above(m.q2, 0))+above(m.q3, 0))+(above(m.q3, 0)*m.treb_flop))+(above(m.q2, 0)*m.bass_flop))+(above(m.q1, 0)*m.mid_flop));
m.q8 = m.entropy;
m.wave_r = (m.wave_r+(m.wave_r*m.q1));
m.wave_b = (m.wave_b+(m.wave_b*m.q2));
m.wave_g = (m.wave_g+(m.wave_g*m.q3));
m.ob_r = (m.ob_r+(m.ob_r*Math.sin((m.q1+(m.q2*2.14)))));
m.ob_b = (m.ob_b+(m.ob_b*Math.sin((m.q2+(m.q3*2.14)))));
m.ob_g = (m.ob_g+(m.ob_g*Math.sin((m.q3+(m.q1*2.14)))));
m.ib_r = (m.ib_r+(m.ib_r*Math.cos((m.q5+(m.q1*2.14)))));
m.ib_b = (m.ib_b+(m.ib_*Math.cos((m.q5+(m.q2*2.14)))));
m.ib_g = (m.ib_g+(m.ib_g*Math.cos((m.q5+(m.q3*2.14)))));
m.ob_a = (0.25+(0.25*Math.sin((m.q2+(m.q3*2.14)))));
m.ib_a = (0.25+(0.25*Math.sin(((m.q2*2.14)+m.q3))));
m.ob_size = (0.1+(0.1*Math.sin(((m.q3*3)+m.q1))));
m.ib_size = (0.1+(0.1*Math.sin(((m.q1*3)+m.q3))));
m.wave_mystery = (0.5*m.q6);
m.warp = 0;
m.wave_mode = mod(m.q8,7);
m.bdecay = (0.99+(m.q8*0.0005));
		m.rkeys = ['sx','sy','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.c1 = (m.x*m.q1);
m.c2 = (m.y*m.q2);
m.c3 = (m.rad*m.q3);
m.radix = ifcond(above(m.q5, 0), Math.min(m.c1, m.c2), Math.max(m.c1, m.c2));
m.radix = ifcond(above(m.q6, 0), Math.min(m.radix, m.c3), Math.max(m.radix, m.c3));
m.radix = ifcond(above(m.q4, 0), Math.min((m.radix*m.q1), (m.radix*m.q2)), Math.max((m.radix*m.q1), (m.radix*m.q3)));
m.rot = (Math.cos((((m.radix*m.q7)*1.386)+((m.rad*m.q8)*above(m.q7, 4))))*(0.75+(0.25*m.q4)));
m.zoom = ifcond(below(Math.abs(m.q1), 0.5), m.zoom, ifcond(below(Math.abs(m.q2), 0.5), (1+(0.1*Math.sin((3.14*m.radix)))), (1+(0.1*Math.sin(((m.radix*m.q8)*1.618))))));
m.checkx = bor((above(Math.abs(m.q1), m.x)*below(Math.abs(m.q2), m.x)), (above(Math.abs(m.q2), m.x)*below(Math.abs(m.q1), m.x)));
m.checky = bor((above(Math.abs(m.q1), m.y)*below(Math.abs(m.q2), m.y)), (above(Math.abs(m.q2), m.y)*below(Math.abs(m.q1), m.y)));
m.sx = (m.sx-ifcond(bnot(mod(m.q7,2)), ifcond(bnot(m.checky), (m.q3*0.3), ((0.3*m.q2)*Math.sin(m.radix))), ((0.1*m.q4)*above(m.q7, 3))));
m.sy = (m.sy-ifcond(bnot(mod(m.q7,2)), ifcond(bnot(m.checkx), (m.q2*0.3), ((0.3*m.q3)*Math.sin(m.radix))), ((0.1*m.q1)*above(m.q7, 3))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('old_bass_flop=bass_flop;\n' + 'old_treb_flop=treb_flop;\n' + 'old_mid_flop=mid_flop;\n' + 'chaos=.9+.1*sin(pulse);\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.6)*chaos+1.6);\n' + 'bass_flop=abs(bass_flop-equal(bass_thresh,2));\n' + 'treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.6)*chaos+1.6);\n' + 'treb_flop=abs(treb_flop-equal(treb_thresh,2));\n' + 'mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.6)*chaos+1.6);\n' + 'mid_flop=abs(mid_flop-equal(mid_thresh,2));\n' + 'bass_changed=bnot(equal(old_bass_flop,bass_flop));\n' + 'mid_changed=bnot(equal(old_mid_flop,mid_flop));\n' + 'treb_changed=bnot(equal(old_treb_flop,treb_flop));\n' + 'bass_residual = bass_changed*sin(pulse*3) + bnot(bass_changed)*bass_residual;\n' + 'treb_residual = treb_changed*sin(pulse*3) + bnot(treb_changed)*treb_residual;\n' + 'mid_residual = mid_changed*sin(pulse*3) + bnot(mid_changed)*mid_residual;\n' + 'pulse=if(above(abs(pulse),3.14),-3.14,pulse+(bass_thresh+mid_thresh+treb_thresh)*.007);\n' + 'entropy=if(bass_changed*mid_changed*treb_changed,(1+bass_flop+treb_flop+mid_flop)*(1+rand(3)),entropy);\n' + 'q1=mid_residual;\n' + 'q2=bass_residual;\n' + 'q3=treb_residual;\n' + 'q4=sin(pulse);\n' + 'q5=cos(pulse*(.5+.1*entropy));\n' + 'q6=sin(pulse*(.5+pow(.25,entropy)));\n' + 'q7=above(q1,0)+above(q2,0)+above(q3,0)+above(q3,0)*treb_flop+above(q2,0)*bass_flop+above(q1,0)*mid_flop;\n' + 'q8=entropy;\n' + 'wave_r=wave_r+wave_r*q1;\n' + 'wave_b=wave_b+wave_b*q2;\n' + 'wave_g=wave_g+wave_g*q3;\n' + 'ob_r=ob_r+ob_r*sin(q1+q2*2.14);\n' + 'ob_b=ob_b+ob_b*sin(q2+q3*2.14);\n' + 'ob_g=ob_g+ob_g*sin(q3+q1*2.14);\n' + 'ib_r=ib_r+ib_r*cos(q5+q1*2.14);\n' + 'ib_b=ib_b+ib_*cos(q5+q2*2.14);\n' + 'ib_g=ib_g+ib_g*cos(q5+q3*2.14);\n' + 'ob_a=.25+.25*sin(q2+q3*2.14);\n' + 'ib_a=.25+.25*sin(q2*2.14+q3);\n' + 'ob_size=.1+.1*sin(q3*3+q1);\n' + 'ib_size=.1+.1*sin(q1*3+q3);\n' + 'wave_mystery=.5*q6;\n' + 'warp=0;\n' + 'wave_mode=q8%7;\n' + 'bdecay=.99+q8*.0005;'),
	'pixel_eqs_str' : ('c1=x*q1;\n' + 'c2=y*q2;\n' + 'c3=rad*q3;\n' + 'radix=if(above(q5,0),min(c1,c2),max(c1,c2));\n' + 'radix=if(above(q6,0),min(radix,c3),max(radix,c3));\n' + 'radix=if(above(q4,0),min(radix*q1,radix*q2),max(radix*q1,radix*q3));\n' + 'rot=cos(radix*q7*1.386+rad*q8*above(q7,4))*(.75+.25*q4);\n' + 'zoom=if(below(abs(q1),.5),zoom,if(below(abs(q2),.5),1+.1*sin(3.14*radix),1+.1*sin(radix*q8*1.618)));\n' + 'checkx=bor(above(abs(q1),x)*below(abs(q2),x),above(abs(q2),x)*below(abs(q1),x));\n' + 'checky=bor(above(abs(q1),y)*below(abs(q2),y),above(abs(q2),y)*below(abs(q1),y));\n' + 'sx=sx-if(bnot(q7%2),if(bnot(checky),q3*.3,.3*q2*sin(radix)),.1*q4*above(q7,3));\n' + 'sy=sy-if(bnot(q7%2),if(bnot(checkx),q2*.3,.3*q3*sin(radix)),.1*q1*above(q7,3));'),
};

return pmap;
});
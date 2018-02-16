define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.5,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.282087,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.001827,
		fshader : 0.1,
		wave_r : 0.5,
		ib_r : 0.5,
		echo_zoom : 1.006435,
		ob_size : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.98001,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.4399,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		invert : 0.0,
		bmotionvectorson : 0.0,
		rot : 0.0,
		modwavealphaend : 0.75,
		wave_mystery : 0.2,
		decay : 0.98,
		wave_a : 1.028401,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.5,
		rating : 0.0,
		modwavealphastart : 0.95,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.treb_thresh = 0;
m.q1 = 0;
m.chaos = 0;
m.q2 = 0;
m.q3 = 0;
m.effect_1 = 0;
m.q4 = 0;
m.effect_2 = 0;
m.q5 = 0;
m.effect_3 = 0;
m.effect_4 = 0;
m.effect_5 = 0;
m.bass_flop = 0;
m.effect_6 = 0;
m.g1 = 0;
m.g2 = 0;
m.treb_flop = 0;
m.pulse_cap = 0;
m.old_bass_flop = 0;
m.treb_changed = 0;
m.entropy = 0;
m.mid_thresh = 0;
m.old_treb_flop = 0;
m.bass_changed = 0;
m.old_mid_flop = 0;
m.pulse = 0;
m.bass_thresh = 0;
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
m.entropy = ifcond(bnot(m.entropy), 2, ifcond(above(m.pulse, (m.pulse_cap-(m.entropy*10))), (1+rand(3)), m.entropy));
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*m.chaos)+1.3)));
m.bass_flop = Math.abs((m.bass_flop-equal(m.bass_thresh, 2)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.3)*m.chaos)+1.3)));
m.treb_flop = Math.abs((m.treb_flop-equal(m.treb_thresh, 2)));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_att, m.mid_thresh))*(((m.mid_thresh-1.3)*m.chaos)+1.3)));
m.mid_flop = Math.abs((m.mid_flop-equal(m.mid_thresh, 2)));
m.bass_changed = bnot(equal(m.old_bass_flop, m.bass_flop));
m.mid_changed = bnot(equal(m.old_mid_flop, m.mid_flop));
m.treb_changed = bnot(equal(m.old_treb_flop, m.treb_flop));
m.pulse_cap = (m.entropy*100);
m.pulse = ifcond(above(Math.abs(m.pulse), m.pulse_cap), (0-m.pulse_cap), ((m.pulse+((0.1*m.entropy)*bor((bor((m.bass_changed*bnot(m.treb_changed)), (m.treb_changed*bnot(m.bass_changed)))*bnot(m.mid_changed)), m.mid_changed)))+((((m.mid+m.bass)+m.treb)*m.entropy)*0.03)));
m.q3 = Math.sin(m.pulse);
m.effect_1 = (1+((1*m.bass_flop)*above(m.q3, 0)));
m.effect_2 = (1+((2*m.treb_flop)*below(m.q3, 0)));
m.effect_3 = (1+((4*m.mid_flop)*above(m.q3, 0)));
m.effect_4 = (1+((6*m.mid_flop)*below(m.q3, 0)));
m.effect_5 = (1+((10*m.treb_flop)*above(m.q3, 0)));
m.effect_6 = (1+((12*m.bass_flop)*below(m.q3, 0)));
m.q1 = (((((m.effect_1*m.effect_2)*m.effect_3)*m.effect_4)*m.effect_5)*m.effect_6);
m.q2 = ((((m.time*m.q1)*m.entropy)*m.chaos)*0.002);
m.q4 = Math.sin((m.q2*0.02));
m.q5 = m.entropy;
m.wave_r = ifcond(m.treb_flop, Math.abs((0.5*m.q4)), ifcond(m.bass_flop, (0.5+(0.5*m.q4)), 1));
m.wave_g = ifcond(m.treb_changed, 0, ifcond(m.mid_changed, 0, 0.49));
m.wave_b = ifcond(m.treb_flop, (0.8+(0.2*m.q4)), (m.bass_changed*m.mid_changed));
m.cx = (0.5+(0.2*m.q3));
m.cy = (0.5+(0.2*m.q4));
m.wave_x = m.cy;
m.wave_y = m.cx;
m.ob_r = ifcond(m.bass_flop, m.treb_flop, m.wave_g);
m.ob_b = ifcond(m.treb_flop, m.wave_r, m.wave_b);
m.ob_g = ifcond(m.mid_flop, m.wave_g, m.wave_b);
m.ob_a = (0.07+(0.05*m.q2));
m.ob_size = (0.01+(0.009*m.q4));
m.ib_r = (m.ib_r+(0.5*Math.sin(((m.time*0.04)*m.entropy))));
m.ib_b = (m.ib_b+(0.5*Math.sin(((m.time*0.03)*m.entropy))));
m.ib_g = (m.ib_g+(0.5*Math.sin(((m.time*0.02)*m.entropy))));
m.ib_a = (0.07+((0.05*m.q3)*m.q4));
m.ib_size = (0.01+(0.009*m.q3));
m.zoom = (m.zoom+(0.19*m.q4));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.g1 = div(Math.sin((m.q2+((m.time*m.q5)*0.01))),2);
m.g2 = div(Math.sin((m.q2+((m.time*m.q5)*0.02))),2);
m.rot = ifcond(above(Math.sin((m.q2+((m.time*m.q5)*0.025))), 0), (m.g1*m.rad), (m.g2*(1-m.rad)));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'old_bass_flop=bass_flop;\n' + 'old_treb_flop=treb_flop;\n' + 'old_mid_flop=mid_flop;\n' + 'chaos=.9+.1*sin(pulse);\n' + 'entropy=if(bnot(entropy),2,if(above(pulse,pulse_cap-entropy*10),1+rand(3),entropy));\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);\n' + 'bass_flop=abs(bass_flop-equal(bass_thresh,2));\n' + 'treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);\n' + 'treb_flop=abs(treb_flop-equal(treb_thresh,2));\n' + 'mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);\n' + 'mid_flop=abs(mid_flop-equal(mid_thresh,2));\n' + 'bass_changed=bnot(equal(old_bass_flop,bass_flop));\n' + 'mid_changed=bnot(equal(old_mid_flop,mid_flop));\n' + 'treb_changed=bnot(equal(old_treb_flop,treb_flop));\n' + 'pulse_cap=entropy*100;\n' + 'pulse=if(above(abs(pulse),pulse_cap),0-pulse_cap,pulse+.1*entropy*bor(bor(bass_changed*bnot(treb_changed),treb_changed*bnot(bass_changed))*bnot(mid_changed),mid_changed)+(mid+bass+treb)*entropy*.03);\n' + 'q3=sin(pulse);\n' + 'effect_1=1+1*bass_flop*above(q3,0);\n' + 'effect_2=1+2*treb_flop*below(q3,0);\n' + 'effect_3=1+4*mid_flop*above(q3,0);\n' + 'effect_4=1+6*mid_flop*below(q3,0);\n' + 'effect_5=1+10*treb_flop*above(q3,0);\n' + 'effect_6=1+12*bass_flop*below(q3,0);\n' + 'q1=effect_1*effect_2*effect_3*effect_4*effect_5*effect_6;\n' + 'q2=time*q1*entropy*chaos*.002;\n' + 'q4=sin(q2*.02);\n' + 'q5=entropy;\n' + 'wave_r=if(treb_flop,abs(.5*q4),if(bass_flop,.5+.5*q4,1));\n' + 'wave_g=if(treb_changed,0,if(mid_changed,0,.49));\n' + 'wave_b=if(treb_flop,.8+.2*q4,bass_changed*mid_changed);\n' + 'cx=.5+.2*q3;\n' + 'cy=.5+.2*q4;\n' + 'wave_x=cy;\n' + 'wave_y=cx;\n' + 'ob_r=if(bass_flop,treb_flop,wave_g);\n' + 'ob_b=if(treb_flop,wave_r,wave_b);\n' + 'ob_g=if(mid_flop,wave_g,wave_b);\n' + 'ob_a=.07+.05*q2;\n' + 'ob_size=.01+.009*q4;\n' + 'ib_r=ib_r+.5*sin(time*.04*entropy);\n' + 'ib_b=ib_b+.5*sin(time*.03*entropy);\n' + 'ib_g=ib_g+.5*sin(time*.02*entropy);\n' + 'ib_a=.07+.05*q3*q4;\n' + 'ib_size=.01+.009*q3;\n' + 'zoom=zoom+.19*q4;'),
	'pixel_eqs_str' : ('g1=sin(q2+time*q5*.01)/2;\n' + 'g2=sin(q2+time*q5*.02)/2;\n' + 'rot=if(above(sin(q2+time*q5*.025),0),g1*rad,g2*(1-rad));'),
};

return pmap;
});
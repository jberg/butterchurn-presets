define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.27,
		ib_g : 0.450001,
		mv_x : 12.0,
		warpscale : 1.327831,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.372036,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.990099,
		ob_r : 0.36,
		sy : 1.0,
		ib_size : 0.01,
		warp : 1.779457,
		red_blue : 0.0,
		wave_mode : 4.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.026514,
		fshader : 1.0,
		wave_r : 0.27,
		ib_r : 0.45,
		echo_zoom : 0.998169,
		ob_size : 0.005,
		wave_smoothing : 0.387,
		warpanimspeed : 1.334503,
		wave_dots : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.374512,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.17,
		dy : 0.0,
		ob_a : 0.58,
		darken_center : 0.0,
		cy : 0.830001,
		ob_b : 0.36,
		invert : 0.0,
		bmotionvectorson : 0.0,
		rot : 0.02,
		modwavealphaend : 0.95,
		wave_mystery : -0.36,
		decay : 0.983,
		wave_a : 7.74,
		ob_g : 0.36,
		ib_a : 0.53,
		wave_b : 0.27,
		ib_b : 0.4499,
		rating : 0.0,
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
m.entropy = ifcond(bnot(m.entropy), 2, ifcond(equal(m.pulse, -20), (1+rand(3)), m.entropy));
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
m.ib_r = (m.ib_r+(0.2*Math.sin((m.time*0.5413))));
m.ib_g = (m.ib_g+(0.2*Math.sin((m.time*0.6459))));
m.ib_b = (m.ib_b+(0.2*Math.sin((m.time*0.4354))));
m.rot = (m.rot+(0.040*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.zoom = Math.max(0.98, Math.min((0.15+(0.8*m.bass_att)), 1.75));
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
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'old_bass_flop=bass_flop;\n' + 'old_treb_flop=treb_flop;\n' + 'old_mid_flop=mid_flop;\n' + 'chaos=.9+.1*sin(pulse);\n' + 'entropy=if(bnot(entropy),2,if(equal(pulse,-20),1+rand(3),entropy));\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);\n' + 'bass_flop=abs(bass_flop-equal(bass_thresh,2));\n' + 'treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);\n' + 'treb_flop=abs(treb_flop-equal(treb_thresh,2));\n' + 'mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);\n' + 'mid_flop=abs(mid_flop-equal(mid_thresh,2));\n' + 'bass_changed=bnot(equal(old_bass_flop,bass_flop));\n' + 'mid_changed=bnot(equal(old_mid_flop,mid_flop));\n' + 'treb_changed=bnot(equal(old_treb_flop,treb_flop));\n' + 'bass_residual = bass_changed*sin(pulse*bass_thresh*.1*entropy) + bnot(bass_changed)*bass_residual;\n' + 'treb_residual = treb_changed*sin(pulse*treb_thresh*.1*entropy) + bnot(treb_changed)*treb_residual;\n' + 'mid_residual = mid_changed*sin(pulse*mid_thresh*.1*entropy) + bnot(mid_changed)*mid_residual;\n' + 'pulse=if(above(abs(pulse),20),-20,pulse+.2*bor(bor(bass_changed*bnot(treb_changed),treb_changed*bnot(bass_changed))*bnot(mid_changed),mid_changed)+(mid+bass+treb)*entropy*.025);\n' + 'q1=mid_residual;\n' + 'q2=bass_residual;\n' + 'q3=treb_residual;\n' + 'q4=sin(pulse);\n' + 'q5=sin(pulse/2);\n' + 'wave_r=wave_r+.5*bass_residual;\n' + 'wave_r=wave_g+.5*mid_residual;\n' + 'wave_r=wave_b+.5*treb_residual;\n' + 'wave_mystery=mid_residual;\n' + 'ob_r=if(bass_flop,treb_flop,wave_r);\n' + 'ob_b=if(treb_flop,mid_flop,wave_b);\n' + 'ob_g=if(mid_flop,bass_flop,wave_g);\n' + 'ob_a=.03+.02*wave_r;\n' + 'ob_size=.05+.04*treb_residual;\n' + 'ib_r=if(bass_flop,ob_b,ob_g);\n' + 'ib_b=if(treb_flop,ob_g,ob_r);\n' + 'ib_g=if(mid_flop,ob_r,ob_b);\n' + 'ib_a=.03+.02*wave_g;\n' + 'ib_size=.05+.04*bass_residual;\n' + 'ib_r = ib_r + 0.2*sin(time*0.5413);\n' + 'ib_g = ib_g + 0.2*sin(time*0.6459);\n' + 'ib_b = ib_b + 0.2*sin(time*0.4354);\n' + 'rot = rot + 0.040*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'zoom=max(0.98, min(0.15+0.8*bass_att, 1.75 ));'),
	'pixel_eqs_str' : ('radix=if(above(q3,0),min(x,y),max(x,y));\n' + 'radix=if(above(q2,0),min(radix,rad),max(radix,rad));\n' + 'rot=if(above(q4,0),rad*.2*q5,0);\n' + 'zoom=if(above(q2,0),zoom,if(above(q3,0),1+q1*.05,1+.07*cos(radix*10*q1)));'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 2.46855,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.999993,
		ob_size : 0.005,
		wave_smoothing : 0.36,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999999,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.92,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.18,
		decay : 0.986,
		wave_a : 1.741913,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 1.0,
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
m.q5 = 0;
m.bass_residual = 0;
m.grid = 0;
m.bass_flop = 0;
m.treb_residual = 0;
m.treb_flop = 0;
m.old_bass_flop = 0;
m.treb_changed = 0;
m.entropy = 0;
m.mid_thresh = 0;
m.old_treb_flop = 0;
m.bass_changed = 0;
m.beat = 0;
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
m.dx = -0.0005;
m.dy = -0.0005;
m.old_bass_flop = m.bass_flop;
m.old_treb_flop = m.treb_flop;
m.old_mid_flop = m.mid_flop;
m.chaos = (0.9+(0.1*Math.sin(m.beat)));
m.entropy = ifcond(bnot(m.entropy), 2, ifcond(equal(m.pulse, -3.14), (1+rand(3)), m.entropy));
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
m.pulse = ifcond(above(Math.abs(m.pulse), 3.14), -3.14, (m.pulse+(((m.bass_thresh+m.mid_thresh)+m.treb_thresh)*0.052)));
m.beat = ifcond(above(Math.abs(m.beat), 3.14), -3.14, (m.beat+(((m.bass+m.treb)+m.mid)*0.01)));
m.q1 = m.mid_residual;
m.q2 = m.bass_residual;
m.q3 = m.treb_residual;
m.q4 = Math.sin(m.pulse);
m.q5 = Math.sin(m.beat);
m.mv_r = (m.mv_r+(0.5*m.bass_residual));
m.mv_g = (m.mv_g+(0.5*m.mid_residual));
m.mv_b = (m.mv_b+(0.5*m.treb_residual));
m.mv_a = (1-(((m.ob_a+m.ib_a)*m.chaos)*0.5));
m.mv_x = (Math.abs((m.beat*10))*m.entropy);
m.mv_y = (Math.abs((m.pulse*10))*m.entropy);
m.mv_l = (m.entropy*(m.q4-m.q5));
m.wave_r = (m.bass_flop*m.mv_g);
m.wave_g = (m.mid_flop*m.mv_b);
m.wave_b = (m.treb_flop*m.mv_r);
m.ob_r = m.wave_r;
m.ob_g = m.wave_g;
m.ob_b = m.wave_b;
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.grid = (mod((m.x*100),((above(m.q1, m.q4)+above(m.q2, m.q5))+above(m.q3, m.q4)))+(mod((m.y*100),((above(m.q1, m.q5)+above(m.q2, m.q4))+above(m.q3, m.q5)))*rand(10)));
m.rot = ifcond(m.grid, ((0.12*Math.cos((((m.rad*3.14)+((m.x*m.q1)*3.14))+((m.y*m.q2)*3.14))))*(m.q5+m.q4)), 0);
m.zoom = (m.zoom-((bnot(m.grid)*Math.sin((((m.x*m.q3)*3.14)+((m.y*m.q5)*3.14))))*0.1));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'dx=-0.0005;\n' + 'dy=-0.0005;\n' + 'old_bass_flop=bass_flop;\n' + 'old_treb_flop=treb_flop;\n' + 'old_mid_flop=mid_flop;\n' + 'chaos=.9+.1*sin(beat);\n' + 'entropy=if(bnot(entropy),2,if(equal(pulse,-3.14),1+rand(3),entropy));\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);\n' + 'bass_flop=abs(bass_flop-equal(bass_thresh,2));\n' + 'treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);\n' + 'treb_flop=abs(treb_flop-equal(treb_thresh,2));\n' + 'mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);\n' + 'mid_flop=abs(mid_flop-equal(mid_thresh,2));\n' + 'bass_changed=bnot(equal(old_bass_flop,bass_flop));\n' + 'mid_changed=bnot(equal(old_mid_flop,mid_flop));\n' + 'treb_changed=bnot(equal(old_treb_flop,treb_flop));\n' + 'bass_residual = bass_changed*sin(pulse*.1*entropy) + bnot(bass_changed)*bass_residual;\n' + 'treb_residual = treb_changed*sin(pulse*.1*entropy) + bnot(treb_changed)*treb_residual;\n' + 'mid_residual = mid_changed*sin(pulse*.1*entropy) + bnot(mid_changed)*mid_residual;\n' + 'pulse=if(above(abs(pulse),3.14),-3.14,pulse+(bass_thresh+mid_thresh+treb_thresh)*.052);\n' + 'beat=if(above(abs(beat),3.14),-3.14,beat+(bass+treb+mid)*.01);\n' + 'q1=mid_residual;\n' + 'q2=bass_residual;\n' + 'q3=treb_residual;\n' + 'q4=sin(pulse);\n' + 'q5=sin(beat);\n' + 'mv_r=mv_r+.5*bass_residual;\n' + 'mv_g=mv_g+.5*mid_residual;\n' + 'mv_b=mv_b+.5*treb_residual;\n' + 'mv_a=1-(ob_a+ib_a)*chaos*.5;\n' + 'mv_x=abs(beat*10)*entropy;\n' + 'mv_y=abs(pulse*10)*entropy;\n' + 'mv_l=entropy*(q4-q5);\n' + 'wave_r=bass_flop*mv_g;\n' + 'wave_g=mid_flop*mv_b;\n' + 'wave_b=treb_flop*mv_r;\n' + 'ob_r=wave_r;\n' + 'ob_g=wave_g;\n' + 'ob_b=wave_b;'),
	'pixel_eqs_str' : ('grid=x*100%(above(q1,q4)+above(q2,q5)+above(q3,q4)) + y*100%(above(q1,q5)+above(q2,q4)+above(q3,q5))*rand(10);\n' + 'rot=if(grid,.12*cos(rad*3.14+x*q1*3.14+y*q2*3.14)*(q5+q4),0);\n' + 'zoom=zoom-bnot(grid)*sin(x*q3*3.14+y*q5*3.14)*.1;'),
};

return pmap;
});
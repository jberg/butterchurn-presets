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
		wave_scale : 0.359738,
		echo_alpha : 0.2,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.9996,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.18,
		fshader : 0.03,
		wave_r : 0.5,
		ib_r : 0.5,
		mv_b : 0.4999,
		echo_zoom : 1.160967,
		ob_size : 0.005,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.4999,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9993,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.02,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.982,
		wave_a : 0.625316,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.5,
		mv_r : 0.4999,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 0.0,
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
m.grid = 0;
m.q8 = 0;
m.bass_flop = 0;
m.treb_residual = 0;
m.treb_flop = 0;
m.old_bass_flop = 0;
m.treb_changed = 0;
m.entropy = 0;
m.gridx = 0;
m.gridy = 0;
m.mid_thresh = 0;
m.old_treb_flop = 0;
m.bass_changed = 0;
m.old_mid_flop = 0;
m.pulse = 0;
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
m.pulse = ifcond(above(Math.abs(m.pulse), 20), -20, (m.pulse+(((m.bass_thresh+m.mid_thresh)+m.treb_thresh)*0.01)));
m.q1 = m.mid_residual;
m.q2 = m.bass_residual;
m.q3 = m.treb_residual;
m.q4 = Math.sin(m.pulse);
m.q5 = Math.cos((div(m.pulse,2)+m.q1));
m.q6 = (((((above(m.q1, 0)+above(m.q2, 0))+above(m.q3, 0))+(above(m.q3, 0)*m.treb_flop))+(above(m.q2, 0)*m.bass_flop))+(above(m.q1, 0)*m.mid_flop));
m.q7 = m.entropy;
m.q8 = Math.sin(((m.q6*m.q1)+(m.q7*m.q2)));
m.wave_r = (m.wave_r+(0.5*Math.sin(((m.q1+(m.q2*2))+(m.q4*2.1)))));
m.wave_b = (m.wave_b+(0.5*Math.sin(((m.q2+(m.q3*2))+(m.q4*2.2)))));
m.wave_g = (m.wave_g+(0.5*Math.sin(((m.q3+(m.q1*2))+(m.q4*2.3)))));
m.mv_r = (m.mv_r+(0.5*Math.sin((m.q4+((m.q5*1.14)*m.q1)))));
m.mv_b = (m.mv_b+(0.5*Math.sin((m.q4+((m.q5*1.14)*m.q2)))));
m.mv_g = (m.mv_g+(0.5*Math.sin((m.q5+((m.q5*1.14)*m.q3)))));
m.mv_a = (m.mv_a+(m.mv_a*Math.sin(((m.q2+m.q3)+(m.q5*1.14)))));
m.mv_l = (m.q7*2);
m.wave_x = (m.wave_x+((0.03*m.q7)*m.q4));
m.wave_y = (m.wave_x+((0.01*m.q6)*m.q5));
m.mv_x = (m.q6*m.q7);
m.mv_y = (m.q6*m.q7);
m.zoom = (m.zoom+(0.01*m.q1));
		m.rkeys = ['sx','rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.gridx = bnot(mod((m.q7*Math.sin((m.x*3.14))),2));
m.gridy = bnot(mod((m.q7*Math.sin((m.y*3.14))),2));
m.dx = ((Math.sin((((m.y-0.5)*m.q1)*6.2))*0.01)+((m.q5*Math.sin((((m.y-0.5)*m.q2)*6.2)))*0.01));
m.dy = ((Math.cos((((m.x-0.5)*m.q2)*6.2))*0.01)+((m.q4*Math.cos((((m.x-0.5)*m.q1)*6.2)))*0.01));
m.grid = Math.sin((sigmoid(Math.sin(((m.y*6.28)*m.q2)), Math.sin(((m.x*6.28)*m.q5)))*(10+m.q7)));
m.rot = ((m.rot*sign(m.grid))*m.q4);
m.sx = (m.sx+(m.grid*0.03));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('entropy=2;'),
	'frame_eqs_str' : ('warp=0;\n' + 'old_bass_flop=bass_flop;\n' + 'old_treb_flop=treb_flop;\n' + 'old_mid_flop=mid_flop;\n' + 'chaos=.9+.1*sin(pulse);\n' + 'entropy=if(equal(pulse,-20),1+bass_flop+treb_flop+mid_flop+rand(2),entropy);\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);\n' + 'bass_flop=abs(bass_flop-equal(bass_thresh,2));\n' + 'treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);\n' + 'treb_flop=abs(treb_flop-equal(treb_thresh,2));\n' + 'mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);\n' + 'mid_flop=abs(mid_flop-equal(mid_thresh,2));\n' + 'bass_changed=bnot(equal(old_bass_flop,bass_flop));\n' + 'mid_changed=bnot(equal(old_mid_flop,mid_flop));\n' + 'treb_changed=bnot(equal(old_treb_flop,treb_flop));\n' + 'bass_residual = bass_changed*sin(pulse*.1*entropy) + bnot(bass_changed)*bass_residual;\n' + 'treb_residual = treb_changed*sin(pulse*.1*entropy) + bnot(treb_changed)*treb_residual;\n' + 'mid_residual = mid_changed*sin(pulse*.1*entropy) + bnot(mid_changed)*mid_residual;\n' + 'pulse=if(above(abs(pulse),20),-20,pulse+(bass_thresh+mid_thresh+treb_thresh)*.01);\n' + 'q1=mid_residual;\n' + 'q2=bass_residual;\n' + 'q3=treb_residual;\n' + 'q4=sin(pulse);\n' + 'q5=cos(pulse/2+q1);\n' + 'q6=above(q1,0)+above(q2,0)+above(q3,0)+above(q3,0)*treb_flop+above(q2,0)*bass_flop+above(q1,0)*mid_flop;\n' + 'q7=entropy;\n' + 'q8=sin(q6*q1+q7*q2);\n' + 'wave_r=wave_r+.5*sin(q1+q2*2+q4*2.1);\n' + 'wave_b=wave_b+.5*sin(q2+q3*2+q4*2.2);\n' + 'wave_g=wave_g+.5*sin(q3+q1*2+q4*2.3);\n' + 'mv_r=mv_r+.5*sin(q4+q5*1.14*q1);\n' + 'mv_b=mv_b+.5*sin(q4+q5*1.14*q2);\n' + 'mv_g=mv_g+.5*sin(q5+q5*1.14*q3);\n' + 'mv_a=mv_a+mv_a*sin(q2+q3+q5*1.14);\n' + 'mv_l=(q7)*2;\n' + 'wave_x=wave_x+.03*q7*q4;\n' + 'wave_y=wave_x+.01*q6*q5;\n' + 'mv_x=q6*q7;\n' + 'mv_y=q6*q7;\n' + 'zoom=zoom+.01*q1;'),
	'pixel_eqs_str' : ('gridx=bnot((q7*sin(x*3.14))%2);\n' + 'gridy=bnot((q7*sin(y*3.14))%2);\n' + 'dx=sin((y-0.5)*q1*6.2)*.01+q5*sin((y-0.5)*q2*6.2)*.01;\n' + 'dy=cos((x-0.5)*q2*6.2)*.01+q4*cos((x-0.5)*q1*6.2)*.01;\n' + 'grid=sin(sigmoid(sin(y*6.28*q2),sin(x*6.28*q5))*(10+q7));\n' + 'rot=rot*sign(grid)*q4;\n' + 'sx=sx+grid*.03;'),
};

return pmap;
});
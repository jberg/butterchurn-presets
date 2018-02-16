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
		wave_scale : 0.098608,
		echo_alpha : 1.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.5,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.5,
		mv_b : 0.4999,
		echo_zoom : 0.9996,
		ob_size : 0.01,
		wave_smoothing : 0.81,
		warpanimspeed : 5.99579,
		wave_dots : 0.0,
		mv_g : 0.4999,
		wave_x : 0.1,
		wave_y : 0.9,
		zoom : 0.5025,
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
		rot : 0.002,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.4,
		decay : 0.99,
		wave_a : 7.014853,
		ob_g : 0.5,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.5,
		mv_r : 0.4999,
		rating : 0.0,
		modwavealphastart : 0.75,
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
m.ib_ = 0;
m.q8 = 0;
m.bass_flop = 0;
m.treb_residual = 0;
m.treb_flop = 0;
m.old_bass_flop = 0;
m.treb_changed = 0;
m.entropy = 0;
m.mid_thresh = 0;
m.old_treb_flop = 0;
m.bass_changed = 0;
m.echo_orientation = 0;
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
m.bass_residual = ((m.bass_changed*Math.sin(m.pulse))+(bnot(m.bass_changed)*m.bass_residual));
m.treb_residual = ((m.treb_changed*Math.sin(m.pulse))+(bnot(m.treb_changed)*m.treb_residual));
m.mid_residual = ((m.mid_changed*Math.sin(m.pulse))+(bnot(m.mid_changed)*m.mid_residual));
m.pulse = ifcond(above(Math.abs(m.pulse), 20), -20, (m.pulse+(((m.bass_thresh+m.mid_thresh)+m.treb_thresh)*0.032)));
m.q1 = m.mid_residual;
m.q2 = m.bass_residual;
m.q3 = m.treb_residual;
m.q4 = Math.sin(m.pulse);
m.q5 = Math.cos((div(m.pulse,2)+m.q1));
m.q6 = Math.sin((((m.q1*3.14)+(m.q2*3.14))+(m.q3*3.14)));
m.q7 = (((((above(m.q1, 0)+above(m.q2, 0))+above(m.q3, 0))+(above(m.q3, 0)*m.treb_flop))+(above(m.q2, 0)*m.bass_flop))+(above(m.q1, 0)*m.mid_flop));
m.q8 = m.entropy;
m.wave_r = (0.5+(0.5*Math.sin((m.q1+Math.abs((m.q4*2.14))))));
m.wave_b = (0.5+(0.5*Math.sin((m.q2+Math.abs((m.q5*2.14))))));
m.wave_g = (0.5+(0.5*Math.sin((m.q3+Math.abs((m.q6*2.14))))));
m.ob_r = (m.ob_r+(m.ob_r*Math.sin((m.q1+(m.q2*2.14)))));
m.ob_b = (m.ob_b+(m.ob_b*Math.sin((m.q2+(m.q3*2.14)))));
m.ob_g = (m.ob_g+(m.ob_g*Math.sin((m.q3+(m.q1*2.14)))));
m.ib_r = (m.ib_r+(m.ib_r*Math.cos((m.q5+(m.q1*2.14)))));
m.ib_b = (m.ib_b+(m.ib_*Math.cos((m.q5+(m.q2*2.14)))));
m.ib_g = (m.ib_g+(m.ib_g*Math.cos((m.q5+(m.q3*2.14)))));
m.ob_a = (0.25+(0.25*Math.sin((m.q2+(m.q3*2.14)))));
m.ib_a = (0.25+(0.25*Math.sin(((m.q2*2.14)+m.q3))));
m.ob_size = (0.1+(0.1*Math.sin(((m.q3*3)+m.q1))));
m.ib_size = (0.15+(0.05*Math.sin(((m.q1*3)+m.q3))));
m.mv_r = (m.mv_r+(0.5*Math.sin((m.q4+((m.q5*6)*m.q1)))));
m.mv_b = (m.mv_b+(0.5*Math.sin((m.q4+((m.q5*6)*m.q2)))));
m.mv_g = (m.mv_g+(0.5*Math.sin((m.q5+((m.q5*6)*m.q3)))));
m.mv_a = (m.mv_a+(m.mv_a*Math.sin(((m.q2+m.q3)+(m.q5*1.14)))));
m.mv_l = (0.1*m.q8);
m.mv_x = (m.q8*m.q7);
m.mv_y = (m.q8*m.q7);
m.wave_mystery = (m.wave_mystery+(0.25*Math.sin((m.time*m.q4))));
m.echo_zoom = (((1+(0.2*m.q1))+(0.2*m.q5))+(0.3*m.q4));
m.echo_orientation = mod(m.q7,3);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = Math.sin(((pow(m.x, 2)*3.14)*m.q3));
m.dy = Math.sin(((pow(m.y, 2)*3.14)*m.q2));
m.rot = Math.sin(((m.rad*3.14)*m.q1));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'old_bass_flop=bass_flop;\n' + 'old_treb_flop=treb_flop;\n' + 'old_mid_flop=mid_flop;\n' + 'chaos=.9+.1*sin(pulse);\n' + 'entropy=if(equal(pulse,-20),1+bass_flop+treb_flop+mid_flop+rand(2),entropy);\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);\n' + 'bass_flop=abs(bass_flop-equal(bass_thresh,2));\n' + 'treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);\n' + 'treb_flop=abs(treb_flop-equal(treb_thresh,2));\n' + 'mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);\n' + 'mid_flop=abs(mid_flop-equal(mid_thresh,2));\n' + 'bass_changed=bnot(equal(old_bass_flop,bass_flop));\n' + 'mid_changed=bnot(equal(old_mid_flop,mid_flop));\n' + 'treb_changed=bnot(equal(old_treb_flop,treb_flop));\n' + 'bass_residual = bass_changed*sin(pulse) + bnot(bass_changed)*bass_residual;\n' + 'treb_residual = treb_changed*sin(pulse) + bnot(treb_changed)*treb_residual;\n' + 'mid_residual = mid_changed*sin(pulse) + bnot(mid_changed)*mid_residual;\n' + 'pulse=if(above(abs(pulse),20),-20,pulse+(bass_thresh+mid_thresh+treb_thresh)*.032);\n' + 'q1=mid_residual;\n' + 'q2=bass_residual;\n' + 'q3=treb_residual;\n' + 'q4=sin(pulse);\n' + 'q5=cos(pulse/2+q1);\n' + 'q6=sin(q1*3.14+q2*3.14+q3*3.14);\n' + 'q7=above(q1,0)+above(q2,0)+above(q3,0)+above(q3,0)*treb_flop+above(q2,0)*bass_flop+above(q1,0)*mid_flop;\n' + 'q8=entropy;\n' + 'wave_r=.5+.5*sin(q1+abs(q4*2.14));\n' + 'wave_b=.5+.5*sin(q2+abs(q5*2.14));\n' + 'wave_g=.5+.5*sin(q3+abs(q6*2.14));\n' + 'ob_r=ob_r+ob_r*sin(q1+q2*2.14);\n' + 'ob_b=ob_b+ob_b*sin(q2+q3*2.14);\n' + 'ob_g=ob_g+ob_g*sin(q3+q1*2.14);\n' + 'ib_r=ib_r+ib_r*cos(q5+q1*2.14);\n' + 'ib_b=ib_b+ib_*cos(q5+q2*2.14);\n' + 'ib_g=ib_g+ib_g*cos(q5+q3*2.14);\n' + 'ob_a=.25+.25*sin(q2+q3*2.14);\n' + 'ib_a=.25+.25*sin(q2*2.14+q3);\n' + 'ob_size=.1+.1*sin(q3*3+q1);\n' + 'ib_size=.15+.05*sin(q1*3+q3);\n' + 'mv_r=mv_r+.5*sin(q4+q5*6*q1);\n' + 'mv_b=mv_b+.5*sin(q4+q5*6*q2);\n' + 'mv_g=mv_g+.5*sin(q5+q5*6*q3);\n' + 'mv_a=mv_a+mv_a*sin(q2+q3+q5*1.14);\n' + 'mv_l=.1*q8;\n' + 'mv_x=q8*q7;\n' + 'mv_y=q8*q7;\n' + 'wave_mystery=wave_mystery+.25*sin(time*q4);\n' + 'echo_zoom=1+.2*q1+.2*q5+.3*q4;\n' + 'echo_orientation=q7%3;'),
	'pixel_eqs_str' : ('dx=sin(pow(x,2)*3.14*q3);\n' + 'dy=sin(pow(y,2)*3.14*q2);\n' + 'rot=sin(rad*3.14*q1);'),
};

return pmap;
});
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
		wave_scale : 2.781641,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.5,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.008151,
		fshader : 0.2,
		wave_r : 0.5,
		ib_r : 0.5,
		echo_zoom : 1.00644,
		ob_size : 0.0,
		wave_smoothing : 0.54,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9998,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.005,
		cx : 0.47,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.5,
		invert : 0.0,
		bmotionvectorson : 0.0,
		rot : 0.0,
		modwavealphaend : 0.75,
		wave_mystery : 0.2,
		decay : 0.981,
		wave_a : 1.868299,
		ob_g : 0.5,
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
m.q4 = 0;
m.q5 = 0;
m.rot_fade = 0;
m.zoom_fade = 0;
m.treb_changed = 0;
m.entropy = 0;
m.mid_thresh = 0;
m.bass_changed = 0;
m.beat = 0;
m.pulse = 0;
m.bass_thresh = 0;
m.mid_changed = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.chaos = (0.9+(0.1*Math.sin((m.pulse-m.beat))));
m.entropy = ifcond(bnot(m.entropy), 2, ifcond((equal(m.pulse, -20)*above(m.beat, 0)), (1+rand(5)), m.entropy));
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*m.chaos)+1.3)));
m.bass_changed = Math.abs((m.bass_changed-equal(m.bass_thresh, 2)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.3)*m.chaos)+1.3)));
m.treb_changed = Math.abs((m.treb_changed-equal(m.treb_thresh, 2)));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_att, m.mid_thresh))*(((m.mid_thresh-1.3)*m.chaos)+1.3)));
m.mid_changed = Math.abs((m.mid_changed-equal(m.mid_thresh, 2)));
m.pulse = ifcond(above(Math.abs(m.pulse), 20), -20, (m.pulse+(((m.mid+m.bass)+m.treb)*0.025)));
m.beat = ifcond(above(Math.abs(m.beat), 20), -20, (m.beat+((0.1*m.chaos)*bor(bor(m.bass_changed, m.treb_changed), m.mid_changed))));
m.q3 = Math.sin(m.pulse);
m.q2 = Math.sin((m.pulse+m.beat));
m.q4 = Math.sin(m.beat);
m.q5 = m.entropy;
m.q1 = (((((((1+(1*above(m.q2, 0)))*(1+(2*above(m.q3, 0))))*(1+((4*m.mid_changed)*above(m.q3, 0))))*(1+(6*above(m.q4, 0))))*(1+((10*m.bass_changed)*above(m.q4, 0))))*(1+(12*above(m.q5, 3))))*(1+((16*m.treb_changed)*above(m.q2, 0))));
m.wave_r = (((0.5+(0.2*bnot(mod(m.q1,2))))-(0.2*bnot(mod(m.q1,3))))+((0.3*m.q3)*bnot(mod(m.q1,13))));
m.wave_g = (((0.5+(0.2*bnot(mod(m.q1,5))))-(0.2*bnot(mod(m.q1,13))))+((0.3*m.q4)*bnot(mod(m.q1,7))));
m.wave_b = ifcond(bnot(mod(m.q1,6)), (0.8+(0.2*m.q4)), (0.5+(0.5*m.q2)));
m.ob_r = ((m.ob_r+(0.2*m.q2))+((0.3*bnot(mod(m.q1,13)))*m.q3));
m.ob_b = ((m.ob_b-(0.1*bnot(mod(m.q1,105))))-(0.4*m.q2));
m.ob_g = (m.ob_g+(0.5*Math.sin(((m.pulse*0.4)*m.entropy))));
m.ob_a = (0.07+(0.05*m.q3));
m.ob_size = ((0.01*m.entropy)*bnot(mod(m.q1,6)));
m.ib_r = ((m.ib_r+(0.2*m.q1))-((0.3*bnot(mod(m.q1,3)))*m.q4));
m.ib_b = (((m.ib_b-(0.2*bnot(mod(m.q1,17))))-(0.3*m.q2))+(0.2*bnot(mod(m.q1,11))));
m.ib_g = (m.ib_g+(0.5*Math.sin(((m.pulse*0.35)*m.entropy))));
m.ib_a = (0.07+((0.05*m.q3)*m.q4));
m.ib_size = (0.005+(0.005*m.q3));
m.zoom_fade = ifcond(bnot(mod(m.q1,2)), (m.zoom_fade-div((m.zoom_fade-0.97),2)), (((m.zoom_fade-((bnot(mod(m.q1,5))*0.02)*m.q4))+((bnot(mod(m.q1,2))*0.02)*m.q3))-((bnot(mod(m.q1,11))*0.04)*m.q2)));
m.zoom = m.zoom_fade;
m.rot_fade = ifcond(bnot(mod(m.q1,7)), ((m.rot_fade-div((m.rot_fade-(0.1*m.q3)),2))-(0.03*bnot(mod(m.q1,13)))), (((m.rot_fade-(0.02*bnot(mod(m.q1,11))))+(0.02*bnot(mod(m.q1,3))))+(0.03*bnot(mod(m.q1,35)))));
m.rot = m.rot_fade;
m.cx = (((m.cx+(0.1*bnot(mod(m.q1,39))))+((0.07*bnot(mod(m.q1,13)))*m.q3))-((0.2*bnot(mod(m.q1,55)))*m.q4));
m.wave_x = ((m.wave_x+(0.1*m.q3))+((0.2*m.q4)*bnot(mod(m.q1,2))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'chaos=.9+.1*sin(pulse-beat);\n' + 'entropy=if(bnot(entropy),2,if(equal(pulse,-20)*above(beat,0),1+rand(5),entropy));\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);\n' + 'bass_changed=abs(bass_changed-equal(bass_thresh,2));\n' + 'treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);\n' + 'treb_changed=abs(treb_changed-equal(treb_thresh,2));\n' + 'mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);\n' + 'mid_changed=abs(mid_changed-equal(mid_thresh,2));\n' + 'pulse=if(above(abs(pulse),20),-20,pulse+(mid+bass+treb)*.025);\n' + 'beat=if(above(abs(beat),20),-20,beat+.1*chaos*bor(bor(bass_changed,treb_changed),mid_changed));\n' + 'q3=sin(pulse);\n' + 'q2=sin(pulse+beat);\n' + 'q4=sin(beat);\n' + 'q5=entropy;\n' + 'q1=(1+1*above(q2,0))*(1+2*above(q3,0))*(1+4*mid_changed*above(q3,0))*(1+6*above(q4,0))*(1+10*bass_changed*above(q4,0))*(1+12*above(q5,3))*(1+16*treb_changed*above(q2,0));\n' + 'wave_r=.5+.2*bnot(q1%2)-.2*bnot(q1%3)+.3*q3*bnot(q1%13);\n' + 'wave_g=.5+.2*bnot(q1%5)-.2*bnot(q1%13)+.3*q4*bnot(q1%7);\n' + 'wave_b=if(bnot(q1%6),.8+.2*q4,.5+.5*q2);\n' + 'ob_r=ob_r+.2*q2+.3*bnot(q1%13)*q3;\n' + 'ob_b=ob_b-.1*bnot(q1%105)-.4*q2;\n' + 'ob_g=ob_g+.5*sin(pulse*.4*entropy);\n' + 'ob_a=.07+.05*q3;\n' + 'ob_size=.01*entropy*bnot(q1%6);\n' + 'ib_r=ib_r+.2*q1-.3*bnot(q1%3)*q4;\n' + 'ib_b=ib_b-.2*bnot(q1%17)-.3*q2+.2*bnot(q1%11);\n' + 'ib_g=ib_g+.5*sin(pulse*.35*entropy);\n' + 'ib_a=.07+.05*q3*q4;\n' + 'ib_size=.005+.005*q3;\n' + 'zoom_fade=if(bnot(q1%2),zoom_fade-(zoom_fade-.97)/2,zoom_fade-bnot(q1%5)*.02*q4+bnot(q1%2)*.02*q3-bnot(q1%11)*.04*q2);\n' + 'zoom=zoom_fade;\n' + 'rot_fade=if(bnot(q1%7),rot_fade-(rot_fade-.1*q3)/2-.03*bnot(q1%13),rot_fade-.02*bnot(q1%11)+.02*bnot(q1%3)+.03*bnot(q1%35));\n' + 'rot=rot_fade;\n' + 'cx=cx+.1*bnot(q1%39)+.07*bnot(q1%13)*q3-.2*bnot(q1%55)*q4;\n' + 'wave_x=wave_x+.1*q3+.2*q4*bnot(q1%2);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
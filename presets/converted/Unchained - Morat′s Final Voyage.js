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
		wave_scale : 0.931,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.5,
		sy : 1.0,
		ib_size : 0.01,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 2.3,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.5,
		echo_zoom : 1.001825,
		ob_size : 0.01,
		wave_smoothing : 0.18,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.5,
		invert : 0.0,
		bmotionvectorson : 0.0,
		rot : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.32,
		decay : 0.98,
		wave_a : 0.976151,
		ob_g : 0.5,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.5,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.treb_thresh = 0;
m.q1 = 0;
m.q2 = 0;
m.q4 = 0;
m.bass_flop = 0;
m.treb_flop = 0;
m.old_bass_flop = 0;
m.treb_changed = 0;
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
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.bass_flop = Math.abs((m.bass_flop-equal(m.bass_thresh, 2)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.3)*0.96)+1.3)));
m.treb_flop = Math.abs((m.treb_flop-equal(m.treb_thresh, 2)));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_att, m.mid_thresh))*(((m.mid_thresh-1.3)*0.96)+1.3)));
m.mid_flop = Math.abs((m.mid_flop-equal(m.mid_thresh, 2)));
m.bass_changed = bnot(equal(m.old_bass_flop, m.bass_flop));
m.mid_changed = bnot(equal(m.old_mid_flop, m.mid_flop));
m.treb_changed = bnot(equal(m.old_treb_flop, m.treb_flop));
m.pulse = ifcond(above(Math.abs(m.pulse), 5000), -5000, (m.pulse+((m.mid_att*0.1)*bor((bor((m.bass_changed*bnot(m.treb_changed)), (m.treb_changed*bnot(m.bass_changed)))*bnot(m.mid_changed)), m.mid_changed))));
m.wave_b = (ifcond(m.treb_changed, 1, ifcond(m.mid_changed, 0.45, -0.45))*m.q4);
m.wave_g = ifcond(m.bass_changed, 0.1, m.bass_flop);
m.wave_r = ifcond(m.mid_flop, 1, ((0.5*m.q2)*m.treb_flop));
m.ib_b = (m.ib_b+(0.5*Math.sin(m.pulse)));
m.ib_g = (m.ib_g+(5*Math.sin((m.pulse*0.8))));
m.ib_r = (m.ib_r+(5*Math.sin((m.pulse*0.8))));
m.ob_b = m.wave_r;
m.ob_g = m.wave_b;
m.ob_r = m.wave_g;
m.wave_mystery = Math.sin(m.pulse);
m.q1 = m.pulse;
		m.rkeys = ['rot','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = ((m.zoom-(Math.cos((((m.x*10)*Math.sin((m.time+(m.q1*0.9))))-(10*Math.sin((m.time+m.q1)))))*0.1))-(Math.sin(((m.rad*10)*Math.sin((m.time+(m.q1*0.5)))))*0.1));
m.rot = (m.rot+((Math.abs((1-m.zoom))*Math.sin((m.time+m.q1)))*2));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'old_bass_flop=bass_flop;\n' + 'old_treb_flop=treb_flop;\n' + 'old_mid_flop=mid_flop;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'bass_flop=abs(bass_flop-equal(bass_thresh,2));\n' + 'treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*0.96+1.3);\n' + 'treb_flop=abs(treb_flop-equal(treb_thresh,2));\n' + 'mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*0.96+1.3);\n' + 'mid_flop=abs(mid_flop-equal(mid_thresh,2));\n' + 'bass_changed=bnot(equal(old_bass_flop,bass_flop));\n' + 'mid_changed=bnot(equal(old_mid_flop,mid_flop));\n' + 'treb_changed=bnot(equal(old_treb_flop,treb_flop));\n' + 'pulse=if(above(abs(pulse),5000),-5000,pulse+mid_att*.1*bor(bor(bass_changed*bnot(treb_changed),treb_changed*bnot(bass_changed))*bnot(mid_changed),mid_changed));\n' + 'wave_b=if(treb_changed,1,if(mid_changed,.45,-.45))*q4;\n' + 'wave_g=if(bass_changed,.1,bass_flop);\n' + 'wave_r=if(mid_flop,1,.5*q2*treb_flop);\n' + 'ib_b=ib_b+.5*sin(pulse);\n' + 'ib_g=ib_g+5*sin(pulse*.8);\n' + 'ib_r=ib_r+5*sin(pulse*.8);\n' + 'ob_b=wave_r;\n' + 'ob_g=wave_b;\n' + 'ob_r=wave_g;\n' + 'wave_mystery=sin(pulse);\n' + 'q1=pulse;'),
	'pixel_eqs_str' : ('zoom=zoom-cos(x*10*sin(time+q1*.9)-10*sin(time+q1))*.1-sin(rad*10*sin(time+q1*.5))*.1;\n' + 'rot=rot+abs(1-zoom)*sin(time+q1)*2;'),
};

return pmap;
});
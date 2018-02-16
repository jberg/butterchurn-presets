define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.45,
		mv_x : 19.199999,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 14.400005,
		wave_scale : 0.498516,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.035,
		warp : 0.0,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.000158,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.2,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.000499,
		ob_size : 0.1,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.000223,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.06,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 2.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.03074,
		ob_g : 0.0,
		ib_a : 0.29,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 0.06,
		rating : 0.0,
		modwavealphastart : 1.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.lastpulse = 0;
m.hccp = 0;
m.dqv = 0;
m.bccl = 0;
m.eo = 0;
m.lastbeat = 0;
m.beatfreq = 0;
m.pulsefreq = 0;
m.bt = 0;
m.leccl = 0;
m.th = 0;
m.beat = 0;
m.thccl = 0;
m.le = 0;
m.pulse = 0;
m.btblock = 0;
m.dle = 0;
m.dle = 1;
		return m;
	},
	'frame_eqs' : function(m) {
m.le = (((1.4*m.bass_att)+(0.1*m.bass))+(0.5*m.treb));
m.pulse = above(m.le, m.th);
m.pulsefreq = ifcond(equal(m.pulsefreq, 0), 2, ifcond(m.pulse, ((0.8*m.pulsefreq)+(0.2*(m.time-m.lastpulse))), m.pulsefreq));
m.lastpulse = ifcond(m.pulse, m.time, m.lastpulse);
m.bt = div((m.time-m.lastbeat),((0.5*m.beatfreq)+(0.5*m.pulsefreq)));
m.hccp = (div(0.03,(m.bt+0.2))+(0.5*ifcond(band(above(m.bt, 0.8), below(m.bt, 1.2)), (pow(Math.sin(((m.bt-1)*7.854)), 4)-1), 0)));
m.beat = band(above(m.le, (m.th+m.hccp)), m.btblock);
m.btblock = (1-above(m.le, (m.th+m.hccp)));
m.lastbeat = ifcond(m.beat, m.time, m.lastbeat);
m.beatfreq = ifcond(equal(m.beatfreq, 0), 2, ifcond(m.beat, ((0.8*m.beatfreq)+(0.2*(m.time-m.lastbeat))), m.beatfreq));
m.th = ifcond(above(m.le, m.th), ((m.le+div(114,(m.le+10)))-7.407), ((m.th+div((m.th*0.07),(m.th-12)))+((below(m.th, 2.7)*0.1)*(2.7-m.th))));
m.th = ifcond(above(m.th, 6), 6, m.th);
m.thccl = (m.thccl+(m.th-2.5144));
m.q1 = m.le;
m.q2 = (m.thccl+(0.2*m.leccl));
m.leccl = (m.leccl+(m.dle*m.le));
m.dle = ifcond(m.beat, -m.dle, m.dle);
m.bccl = (m.bccl+m.beat);
m.wave_r = ((0.1+(0.8*sqr(Math.sin((0.011*m.thccl)))))+(0.1*Math.sin((m.leccl*0.061))));
m.wave_g = ((0.1+(0.8*sqr(Math.sin((0.013*m.thccl)))))+(0.1*Math.cos((m.leccl*0.067))));
m.wave_b = ((0.1+(0.8*sqr(Math.cos((0.017*m.thccl)))))+(0.1*Math.sin((m.leccl*0.065))));
m.ib_r = (m.ib_r+(0.1*Math.sin(((1.3*m.time)+(0.012*m.leccl)))));
m.ib_g = (m.ib_g+(0.1*Math.sin(((1.7*m.time)+(0.019*m.leccl)))));
m.ib_b = (m.ib_b+(0.1*Math.sin(((1.9*m.time)+(0.017*m.leccl)))));
m.mv_r = (0.5*(m.ib_r+m.wave_r));
m.mv_g = (0.5*(m.ib_g+m.wave_g));
m.mv_b = (0.5*(m.ib_b+m.wave_b));
m.mv_a = (0.5*sqr(Math.sin(((0.01*m.leccl)+m.bccl))));
m.echo_alpha = (0.5+(0.2*Math.cos(((0.07*m.leccl)+(0.02*m.thccl)))));
m.eo = ifcond(band(equal(mod(m.bccl,3), 0), m.beat), rand(4), m.eo);
m.q3 = ((equal(m.eo, 2)+equal(m.eo, 1))*equal(mod(m.bccl,2), 0));
m.q4 = ((equal(m.eo, 0)+equal(m.eo, 3))*equal(mod(m.bccl,2), 0));
m.echo_orient = m.eo;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dqv = (above(m.x, 0.5)-above(m.y, 0.5));
m.rot = Math.sin(((Math.sin(((m.rad*(13+(5*Math.sin((0.01*m.q2)))))+(0.06*m.q2)))*m.q1)*0.01));
m.zoom = (1+((ifcond(m.q3, m.dqv, 1)*0.1)*Math.sin(((7*m.ang)+(0.03*m.q2)))));
m.zoom = ifcond(m.q4, ifcond(below(m.rad, (0.8*sqr(Math.sin((0.016*m.q2))))), (0.75+(0.4*Math.cos((0.021*m.q2)))), m.zoom), m.zoom);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('dle=1;'),
	'frame_eqs_str' : ('le=1.4*bass_att+.1*bass+.5*treb;\n' + 'pulse=above(le,th);\n' + 'pulsefreq=if(equal(pulsefreq,0),2,if(pulse,.8*pulsefreq+.2*(time-lastpulse),pulsefreq));\n' + 'lastpulse=if(pulse,time,lastpulse);\n' + 'bt=(time-lastbeat)/(.5*beatfreq+.5*pulsefreq);\n' + 'hccp=(.03/(bt+.2))+.5*if(band(above(bt,.8),below(bt,1.2)),(pow(sin((bt-1)*7.854),4)-1),0);\n' + 'beat=band(above(le,th+hccp),btblock);\n' + 'btblock=1-above(le,th+hccp);\n' + 'lastbeat=if(beat,time,lastbeat);\n' + 'beatfreq=if(equal(beatfreq,0),2,if(beat,.8*beatfreq+.2*(time-lastbeat),beatfreq));\n' + 'th=if(above(le,th),le+114/(le+10)-7.407,th+th*.07/(th-12)+below(th,2.7)*.1*(2.7-th));\n' + 'th=if(above(th,6),6,th);\n' + 'thccl=thccl+(th-2.5144);\n' + 'q1=le;\n' + 'q2=thccl+.2*leccl;\n' + 'leccl=leccl+dle*le;\n' + 'dle=if(beat,-dle,dle);\n' + 'bccl=bccl+beat;\n' + 'wave_r=.1+.8*sqr(sin(.011*thccl))+.1*sin(leccl*.061);\n' + 'wave_g=.1+.8*sqr(sin(.013*thccl))+.1*cos(leccl*.067);\n' + 'wave_b=.1+.8*sqr(cos(.017*thccl))+.1*sin(leccl*.065);\n' + 'ib_r=ib_r+.1*sin(1.3*time+.012*leccl);\n' + 'ib_g=ib_g+.1*sin(1.7*time+.019*leccl);\n' + 'ib_b=ib_b+.1*sin(1.9*time+.017*leccl);\n' + 'mv_r=.5*(ib_r+wave_r);\n' + 'mv_g=.5*(ib_g+wave_g);\n' + 'mv_b=.5*(ib_b+wave_b);\n' + 'mv_a=.5*sqr(sin(.01*leccl+bccl));\n' + 'echo_alpha=.5+.2*cos(.07*leccl+.02*thccl);\n' + 'eo=if(band(equal(bccl%3,0),beat),rand(4),eo);\n' + 'q3=(equal(eo,2)+equal(eo,1))*equal(bccl%2,0);\n' + 'q4=(equal(eo,0)+equal(eo,3))*equal(bccl%2,0);\n' + 'echo_orient=eo;'),
	'pixel_eqs_str' : ('dqv=above(x,.5)-above(y,.5);\n' + 'rot=sin(sin(rad*(13+5*sin(.01*q2))+.06*q2)*q1*.01);\n' + 'zoom=1+if(q3,dqv,1)*.1*sin(7*ang+.03*q2);\n' + 'zoom=if(q4,if(below(rad,.8*sqr(sin(.016*q2))),.75+.4*cos(.021*q2),zoom),zoom);'),
};

return pmap;
});
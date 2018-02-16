define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 6.4,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 14.400005,
		wave_scale : 0.608285,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.05,
		warp : 0.0,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.000154,
		mv_dx : 0.0,
		mv_dy : -0.01,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 1.000498,
		ob_size : 0.15,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.000223,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.35,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.95,
		wave_a : 1.000416,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 0.9,
		rating : 0.0,
		modwavealphastart : 1.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.lastpulse = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.hccp = 0;
m.ccl = 0;
m.lastbeat = 0;
m.zone = 0;
m.beatfreq = 0;
m.mvrot = 0;
m.pulsefreq = 0;
m.bt = 0;
m.th = 0;
m.beat = 0;
m.minorccl = 0;
m.le = 0;
m.pulse = 0;
m.btblock = 0;

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
m.q8 = div(30,m.fps);
m.ccl = (m.ccl+m.beat);
m.minorccl = (m.minorccl+(m.le*m.q8));
m.q7 = (m.ccl+(0.0002*m.minorccl));
m.q6 = ((3.7*m.ccl)+(0.01*m.minorccl));
m.ob_size = (0.3+(0.3*Math.sin(((16*m.ccl)+(0.007*m.minorccl)))));
m.ib_a = (0.5+(0.4*Math.sin(((0.01*m.minorccl)+m.ccl))));
m.wave_r = (0.7+(0.3*Math.sin(((0.04*m.ccl)+(0.01*m.minorccl)))));
m.wave_g = (0.7+(0.3*Math.sin(((0.02*m.ccl)+(0.012*m.minorccl)))));
m.wave_b = (0.3+(0.3*Math.sin(((36*m.ccl)+(0.013*m.minorccl)))));
m.ib_r = (0.25+(0.25*Math.sin(((72*m.ccl)+(0.016*m.minorccl)))));
m.ib_g = (0.25+(0.25*Math.sin(((48*m.ccl)+(0.021*m.minorccl)))));
m.ib_b = ((0.5+(0.3*Math.sin((86*m.ccl))))+(0.2*(0.028*m.minorccl)));
m.echo_alpha = (0.5+(0.5*Math.cos(((68*m.ccl)+(0.0041*m.minorccl)))));
m.echo_zoom = Math.exp(Math.sin(((13.7*m.ccl)+(0.017*m.minorccl))));
m.echo_orient = mod(m.ccl,4);
m.mvrot = mod(m.ccl,6);
m.mv_r = ifcond(above(m.mvrot, 2), ifcond(above(m.mvrot, 4), 0.039, ifcond(equal(m.mvrot, 3), 0.137, 0.835)), ifcond(above(m.mvrot, 1), 0.651, ifcond(equal(m.mvrot, 0), 1, 0.773)));
m.mv_g = ifcond(above(m.mvrot, 2), ifcond(above(m.mvrot, 4), 0.267, ifcond(equal(m.mvrot, 3), 0.886, 0.176)), ifcond(above(m.mvrot, 1), 0.804, ifcond(equal(m.mvrot, 0), 1, 0.38)));
m.mv_b = ifcond(above(m.mvrot, 2), ifcond(above(m.mvrot, 4), 0.694, ifcond(equal(m.mvrot, 3), 0.776, 0.851)), ifcond(above(m.mvrot, 1), 0.114, ifcond(equal(m.mvrot, 0), 1, 0.145)));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zone = below(Math.sin((((Math.sin((49*m.q7))*14)*m.x)-((Math.sin((36*m.q7))*14)*m.y))), -0.2);
m.zoom = (1+((0.33*m.q8)*ifcond(m.zone, (-0.5+(0.1*Math.sin((1.08*m.q6)))), (0.5+(0.1*Math.sin((0.96*m.q6)))))));
m.zoomexp = Math.exp(Math.sin(ifcond(m.zone, m.q6, -m.q6)));
m.rot = ((m.q8*0.03)*Math.sin(((m.q6+m.q7)+(m.q7*m.zone))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('le=1.4*bass_att+.1*bass+.5*treb;\n' + 'pulse=above(le,th);\n' + 'pulsefreq=if(equal(pulsefreq,0),2,if(pulse,.8*pulsefreq+.2*(time-lastpulse),pulsefreq));\n' + 'lastpulse=if(pulse,time,lastpulse);\n' + 'bt=(time-lastbeat)/(.5*beatfreq+.5*pulsefreq);\n' + 'hccp=(.03/(bt+.2))+.5*if(band(above(bt,.8),below(bt,1.2)),(pow(sin((bt-1)*7.854),4)-1),0);\n' + 'beat=band(above(le,th+hccp),btblock);\n' + 'btblock=1-above(le,th+hccp);\n' + 'lastbeat=if(beat,time,lastbeat);\n' + 'beatfreq=if(equal(beatfreq,0),2,if(beat,.8*beatfreq+.2*(time-lastbeat),beatfreq));\n' + 'th=if(above(le,th),le+114/(le+10)-7.407,th+th*.07/(th-12)+below(th,2.7)*.1*(2.7-th));\n' + 'th=if(above(th,6),6,th);\n' + 'q8=30/fps;\n' + 'ccl=ccl+beat;\n' + 'minorccl=minorccl+le*q8;\n' + 'q7=ccl+.0002*minorccl;\n' + 'q6=3.7*ccl+.01*minorccl;\n' + 'ob_size=.3+.3*sin(16*ccl+.007*minorccl);\n' + 'ib_a=.5+.4*sin(.01*minorccl+ccl);\n' + 'wave_r=.7+.3*sin(.04*ccl+.01*minorccl);\n' + 'wave_g=.7+.3*sin(.02*ccl+.012*minorccl);\n' + 'wave_b=.3+.3*sin(36*ccl+.013*minorccl);\n' + 'ib_r=.25+.25*sin(72*ccl+.016*minorccl);\n' + 'ib_g=.25+.25*sin(48*ccl+.021*minorccl);\n' + 'ib_b=.5+.3*sin(86*ccl)+.2*(.028*minorccl);\n' + 'echo_alpha=.5+.5*cos(68*ccl+.0041*minorccl);\n' + 'echo_zoom=exp(sin(13.7*ccl+.017*minorccl));\n' + 'echo_orient=ccl%4;\n' + 'mvrot=ccl%6;\n' + 'mv_r=if(above(mvrot,2),if(above(mvrot,4),.039,if(equal(mvrot,3),.137,.835)),if(above(mvrot,1),.651,if(equal(mvrot,0),1,.773)));\n' + 'mv_g=if(above(mvrot,2),if(above(mvrot,4),.267,if(equal(mvrot,3),.886,.176)),if(above(mvrot,1),.804,if(equal(mvrot,0),1,.38)));\n' + 'mv_b=if(above(mvrot,2),if(above(mvrot,4),.694,if(equal(mvrot,3),.776,.851)),if(above(mvrot,1),.114,if(equal(mvrot,0),1,.145)));'),
	'pixel_eqs_str' : ('zone=below(sin(sin(49*q7)*14*x-sin(36*q7)*14*y),-.2);\n' + 'zoom=1+.33*q8*if(zone,-.5+.1*sin(1.08*q6),.5+.1*sin(.96*q6));\n' + 'zoomexp=exp(sin(if(zone,q6,-q6)));\n' + 'rot=q8*.03*sin(q6+q7+q7*zone);'),
};

return pmap;
});
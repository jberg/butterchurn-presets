define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 25.080072,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		ib_size : 0.003,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0081,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.3,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.9999,
		ob_size : 0.005,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.7,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.12227,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 2.0,
		dy : 0.0,
		ob_a : 0.1,
		darken_center : 0.0,
		cy : -1.0,
		ob_b : 0.0,
		mv_l : 0.05,
		invert : 0.0,
		rot : 0.24,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : -1.0,
		decay : 0.96,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 0.6,
		wave_b : 0.0,
		ib_b : 1.0,
		mv_r : 0.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.myr = 0;
m.grid = 0;
m.ccl = 0;
m.block = 0;
m.avg = 0;
m.th = 0;
m.myb = 0;
m.le = 0;
m.pulse = 0;
m.myg = 0;
m.snee = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.le = (((1.4*m.bass_att)+(0.1*m.bass))+(0.5*m.treb));
m.pulse = band(above(m.le, m.th), above((m.le-m.th), m.block));
m.block = (m.le-m.th);
m.th = ifcond(above(m.le, m.th), ((m.le+div(114,(m.le+10)))-7.407), ((m.th+div((m.th*0.07),(m.th-12)))+((below(m.th, 2.7)*0.1)*(2.7-m.th))));
m.th = ifcond(above(m.th, 5.2), 4, m.th);
m.q1 = (0.12*m.th);
m.ccl = ifcond(m.pulse, (m.ccl+1), m.ccl);
m.q2 = m.ccl;
m.ob_r = (m.ob_r+(m.time*Math.sin(m.bass)));
m.ob_b = (m.ob_b+(m.time*Math.sin((m.treb+1))));
m.ob_g = (m.ob_g+(m.time*Math.sin(div(m.mid,1.5))));
m.zoomexp = m.q1;
m.myb = (Math.cos(m.time)+Math.abs(Math.cos(m.time)));
m.myg = Math.abs(Math.sin(m.time));
m.myr = (((-1*Math.cos(m.time))+Math.abs((-1*Math.cos(m.time))))+(0.2*(Math.cos(Math.sin(m.time))+(Math.abs(Math.cos(Math.sin(m.time)))+Math.cos(Math.sin(m.time))))));
m.avg = ((0.9*m.avg)+(0.1*m.le));
m.wave_r = ifcond(below(m.avg, 1.8), m.myr, 0);
m.wave_b = ifcond(below(m.avg, 1.8), m.myb, 0);
m.wave_g = ifcond(below(m.avg, 1.8), m.myg, 0);
m.monitor = m.avg;
		m.rkeys = ['sy','sx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.grid = (sign(pow((Math.sin(((m.ang*m.q2)+((m.x*m.y)*m.q1)))*2), (1+mod(m.q2,4))))-0.5);
m.snee = (0.5*Math.sin((m.q2*m.q1)));
m.rot = ((bnot(mod(m.grid,(mod(m.q2,10)+2)))*above(m.x, (0.5+m.snee)))*above(m.y, (0.5-m.snee)));
m.sx = (m.sx-((Math.sin(((m.q2+0.5)*m.x))*band(m.rot, m.snee))*0.003));
m.sy = (m.sy-((Math.cos(((m.q2+3.4)*m.y))*band(m.rot, m.snee))*0.003));
m.zoom = ((1+(0.1*Math.sin(((m.q1-m.q2)*3))))+(((0.2*Math.cos(((1.6*Math.sin(m.time))+((m.rad*6.28)*m.q1))))*below(m.x, (0.5+m.snee)))*below(m.y, (0.5-m.snee))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('le=1.4*bass_att+.1*bass+.5*treb;\n' + 'pulse=band(above(le,th),above(le-th,block));\n' + 'block=le-th;\n' + 'th=if(above(le,th),le+114/(le+10)-7.407,th+th*.07/(th-12)+below(th,2.7)*.1*(2.7-th));\n' + 'th=if(above(th,5.2),4,th);\n' + 'q1=.12*th;\n' + 'ccl=if(pulse,ccl+1,ccl);\n' + 'q2=ccl;\n' + 'ob_r=ob_r + time*sin(bass);\n' + 'ob_b=ob_b + time*sin(treb+1);\n' + 'ob_g=ob_g + time*sin(mid/1.5);\n' + 'zoomexp = q1;\n' + 'myb = cos(time)  + abs(cos(time));\n' + 'myg = abs(sin(time)) ;\n' + 'myr = (-1 * cos(time))  + abs(-1 * cos(time)) + 0.2 * (cos(sin(time))+(abs(cos(sin(time)))+cos(sin(time))));\n' + 'avg = .9*avg+.1*le;\n' + 'wave_r = if(below(avg,1.8),myr,0);\n' + 'wave_b = if(below(avg,1.8),myb,0);\n' + 'wave_g = if(below(avg,1.8),myg,0);\n' + 'monitor = avg;'),
	'pixel_eqs_str' : ('grid=sign(pow(sin(ang*(q2)+x*y*q1)*2,1+q2%4)) -.5;\n' + 'snee=.5*sin(q2*q1);\n' + 'rot=bnot(grid%((q2%10)+2))*above(x,.5+snee)*above(y,.5-snee);\n' + 'sx=sx-sin((q2+.5)*x)*band(rot,snee)*.003;\n' + 'sy=sy-cos((q2+3.4)*y)*band(rot,snee)*.003;\n' + 'zoom=1+.1*sin((q1-q2)*3)+.2*cos(1.6*sin(time)+rad*6.28*q1)*below(x,.5+snee)*below(y,.5-snee);'),
};

return pmap;
});
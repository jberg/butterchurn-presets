define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 1.248,
		wave_scale : 0.28209,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 0.463935,
		ob_r : 0.0,
		sy : 0.535239,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 1.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 0.690737,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 1.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0004,
		ob_size : 0.03,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 2.380962,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.2,
		cx : 0.4999,
		dy : 0.2,
		ob_a : 1.0,
		darken_center : 1.0,
		cy : 0.4999,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.75,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 1.00573,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 1.0,
		modwavealphastart : 1.489999,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.cycle = 0;
m.block = 0;
m.th = 0;
m.le = 0;
m.pulse = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.le = (((1.4*m.bass_att)+(0.1*m.bass))+(0.5*m.treb));
m.pulse = band(above(m.le, m.th), above((m.le-m.th), m.block));
m.block = (m.le-m.th);
m.th = ifcond(above(m.le, m.th), ((m.le+div(114,(m.le+10)))-7.407), ((m.th+div((m.th*0.07),(m.th-12)))+((below(m.th, 2.7)*0.1)*(2.7-m.th))));
m.cycle = ifcond(m.pulse, (m.cycle+1), m.cycle);
m.q1 = m.cycle;
m.wave_r = (0.5+(0.350*((0.60*Math.sin((0.825*m.time)))+(0.40*Math.sin((0.915*m.time))))));
m.wave_g = (0.5+(0.350*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((1.025*m.time))))));
m.wave_b = (0.5+(0.350*((0.60*Math.sin((0.810*m.time)))+(0.40*Math.sin((0.950*m.time))))));
m.mv_r = (0.5+(0.350*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((0.750*m.time))))));
m.mv_g = (0.5+(0.350*((0.60*Math.sin((0.825*m.time)))+(0.40*Math.sin((0.950*m.time))))));
m.mv_b = (0.5+(0.350*((0.60*Math.sin((0.775*m.time)))+(0.40*Math.sin((1.025*m.time))))));
m.ib_r = m.mv_b;
m.ib_b = (1-m.mv_g);
m.ib_g = m.wave_r;
m.ob_b = m.mv_r;
m.ob_r = (0.5*(m.wave_b+m.wave_g));
m.ob_g = (0.5*(m.wave_r+m.mv_b));
m.zoom = (m.zoom-((0.10-(((0.5*m.th)+(0.2*m.le))+m.pulse))*0.1));
m.warp = 0;
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (-m.ang+Math.sin(m.q1));
m.zoom = (m.zoom-(m.rot*0.08));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('le=1.4*bass_att+.1*bass+.5*treb;\n' + 'pulse=band(above(le,th),above(le-th,block));\n' + 'block=le-th;\n' + 'th=if(above(le,th),le+114/(le+10)-7.407,th+th*.07/(th-12)+below(th,2.7)*.1*(2.7-th));\n' + 'cycle=if(pulse,cycle+1,cycle);\n' + 'q1=cycle;\n' + 'wave_r = 0.5 + 0.350*( 0.60*sin(0.825*time) + 0.40*sin(0.915*time) );\n' + 'wave_g = 0.5+ 0.350*( 0.60*sin(0.900*time) + 0.40*sin(1.025*time) );\n' + 'wave_b = 0.5 + 0.350*( 0.60*sin(0.810*time) + 0.40*sin(0.950*time) );\n' + 'mv_r= 0.5 + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(0.750*time) );\n' + 'mv_g= 0.5+ 0.350*( 0.60*sin(0.825*time) + 0.40*sin(0.950*time) );\n' + 'mv_b= 0.5 + 0.350*( 0.60*sin(0.775*time) + 0.40*sin(1.025*time) );\n' + 'ib_r=mv_b;\n' + 'ib_b=1-mv_g;\n' + 'ib_g=wave_r;\n' + 'ob_b=mv_r;\n' + 'ob_r=0.5*(wave_b + wave_g);\n' + 'ob_g=0.5*(wave_r+mv_b);\n' + 'zoom = zoom-(0.10-(.5*th+.2*le+pulse))*0.1;\n' + 'warp = 0;'),
	'pixel_eqs_str' : ('rot = -ang+sin(q1);\n' + 'zoom = zoom - rot*.08;'),
};

return pmap;
});
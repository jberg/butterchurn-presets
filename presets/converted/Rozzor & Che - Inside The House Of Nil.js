define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 7.679999,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 11.519997,
		wave_scale : 1.175613,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.19,
		sy : 1.0,
		ib_size : 0.015,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 1.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.854653,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.34,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.5,
		wave_smoothing : 0.306,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : -0.46,
		decay : 1.0,
		wave_a : 100.0,
		ob_g : 0.12,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 3.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.vol_now = 0;
m.greenneg = 0;
m.slowtime = 0;
m.vol_mean = 0;
m.blueneg = 0;
m.beat = 0;
m.redneg = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.slowtime = (m.slowtime+(m.beat*m.time));
m.vol_now = ((0.4*m.bass)+(0.1*((m.bass_att+m.treb)+m.mid)));
m.vol_mean = ifcond(equal(mod(m.frame,50), 0), (m.vol_mean-(0.5*(m.vol_mean-m.vol_now))), (0.1*((m.vol_mean*9)+m.vol_now)));
m.beat = ifcond(above(m.vol_now, (1.5*m.vol_mean)), 1, 0);
m.ib_r = -Math.abs(Math.cos(m.time));
m.ib_g = Math.sin(m.time);
m.ib_b = (Math.cos(m.time)*sign(Math.cos(m.time)));
m.mv_r = Math.abs(Math.sin(m.time));
m.mv_g = Math.sin(m.slowtime);
m.mv_b = (Math.cos(m.slowtime)*sign(Math.cos(m.slowtime)));
m.redneg = ifcond(below(m.mv_r, 0), 1, 0);
m.greenneg = ifcond(below(m.mv_g, 0), 1, 0);
m.blueneg = ifcond(below(m.mv_b, 0), 1, 0);
m.wave_r = ifcond(m.redneg, ifcond(bor(m.greenneg, m.blueneg), 1, (1+m.mv_r)), m.mv_r);
m.wave_g = ifcond(m.greenneg, ifcond(equal((m.greenneg+m.blueneg), 2), 1, (1+m.mv_g)), m.mv_g);
m.wave_b = ifcond(m.blueneg, (1+m.mv_b), m.mv_b);
m.dx = (Math.sin((m.slowtime*1.234))*0.0125);
m.dy = (Math.cos((m.slowtime*0.9666))*0.0125);
m.q1 = Math.sin(m.slowtime);
m.q2 = m.wave_b;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1+((above(Math.sin((1.7*m.q2)), -0.5)*0.1)*Math.sin((((2*m.q2)+(0.027*m.q1))+(((4*(1+Math.sin(((0.7*m.time)+m.q2))))*Math.sin(((0.05*m.q2)+m.time)))*m.rad)))));
m.rot = ((0.1*Math.sin(m.q2))*Math.sin((((2.3*m.q2)+(0.027*m.q1))+((2*Math.sin(((0.07*m.q1)+(1.2*m.time))))*(m.rad+Math.sin((m.time+(((above(Math.sin(m.q2), 0)*4)*Math.sin(m.q2))*m.ang))))))));
m.rot = (above(Math.sin(((1.2*m.q2)+1.3)), -0.5)*m.rot);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('slowtime = slowtime+beat*time;\n' + 'vol_now =  .4 * bass + 0.1 * (bass_att+treb+mid);\n' + 'vol_mean =  if(equal(frame%50,0),vol_mean-0.5*(vol_mean-vol_now),0.1*(vol_mean*9 + vol_now));\n' + 'beat = if(above(vol_now,1.5*vol_mean),1,0);\n' + 'ib_r = - abs(cos(time));\n' + 'ib_g = sin(time);\n' + 'ib_b= cos(time)*sign(cos(time));\n' + 'mv_r = abs(sin(time));\n' + 'mv_g = sin(slowtime) ;\n' + 'mv_b= cos(slowtime)*sign(cos(slowtime));\n' + 'redneg = if(below(mv_r,0),1,0);\n' + 'greenneg = if(below(mv_g,0),1,0);\n' + 'blueneg = if(below(mv_b,0),1,0);\n' + 'wave_r = if(redneg,if(bor(greenneg , blueneg),1,1+mv_r),mv_r);\n' + 'wave_g = if(greenneg,if(equal(greenneg + blueneg,2),1,1+mv_g),mv_g);\n' + 'wave_b = if(blueneg,1 + mv_b, mv_b);\n' + 'dx=sin(slowtime*1.234)*.0125;\n' + 'dy=cos(slowtime*.9666)*.0125;\n' + 'q1 = sin(slowtime);\n' + 'q2 = wave_b;'),
	'pixel_eqs_str' : ('zoom=1+above(sin(1.7*q2),-.5)*.1*sin(2*q2+.027*q1+4*(1+sin(.7*time+q2))*sin(.05*q2+time)*rad);\n' + 'rot=.1*sin(q2)*sin(2.3*q2+.027*q1+2*sin(.07*q1+1.2*time)*(rad+sin(time+above(sin(q2),0)*4*sin(q2)*ang)));\n' + 'rot=above(sin(1.2*q2+1.3),-.5)*rot;'),
};

return pmap;
});
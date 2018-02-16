define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.796896,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 0.999995,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.999837,
		ob_size : 0.01,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 0.5,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.93,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.5,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 2.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.dx_r = 0;
m.dy_r = 0;
m.thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = ((m.wave_r+(0.25*Math.sin((1.4*m.time))))+(0.25*Math.sin((2.25*m.time))));
m.wave_g = ((m.wave_g+(0.25*Math.sin((1.7*m.time))))+(0.25*Math.sin((2.11*m.time))));
m.wave_b = ((m.wave_b+(0.25*Math.sin((1.84*m.time))))+(0.25*Math.sin((2.3*m.time))));
m.warp = 0;
m.ob_r = (0.5*m.wave_r);
m.ob_b = (0.5*m.wave_g);
m.ob_g = (0.5*m.wave_b);
m.ib_r = m.wave_g;
m.ib_g = m.wave_b;
m.ib_b = m.wave_r;
m.wave_mystery = (m.wave_mystery+(25*Math.sin((3-(1*Math.sin((0.001*m.time)))))));
		m.rkeys = ['rot','zoom','dy','dx','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.dx = (m.dx+((above(m.x, 0.5)*m.x)*0.005));
m.dx = (m.dx-((below(m.x, 0.5)*(1-m.x))*0.005));
m.dy = (m.dy+((above(m.y, 0.5)*m.y)*0.005));
m.dy = (m.dy+((below(m.y, 0.5)*(1-m.y))*0.005));
m.zoom = (m.zoom-(100*((1-m.rad)*(((1.5*m.rad)*0.005)+(0.004*Math.sin((0.5*m.bass_att)))))));
m.rot = (m.rot+((div(Math.cos((m.bass_att*m.treb_att)),(1-m.treb))+(0.5*m.time))*0.0005));
m.zoomexp = ((0.8+1)+Math.sin(m.treb_att));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.25*sin(1.4*time) + 0.25*sin(2.25*time);\n' + 'wave_g = wave_g + 0.25*sin(1.7*time) + 0.25*sin(2.11*time);\n' + 'wave_b = wave_b + 0.25*sin(1.84*time) + 0.25*sin(2.3*time);\n' + 'warp = 0;\n' + 'ob_r = 0.5*wave_r;\n' + 'ob_b = 0.5*wave_g;\n' + 'ob_g = 0.5*wave_b;\n' + 'ib_r = wave_g;\n' + 'ib_g = wave_b;\n' + 'ib_b = wave_r;\n' + 'wave_mystery = wave_mystery + 25*sin(3-1*(sin(0.001*time)));'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'dx = dx + above(x,0.5)*x*0.005;\n' + 'dx = dx - below(x,0.5)*(1-x)*0.005;\n' + 'dy = dy + above(y,0.5)*y*0.005;\n' + 'dy = dy + below(y,0.5)*(1-y)*0.005;\n' + 'zoom = zoom - 100*((1-rad)*((1.5*rad)*0.005 + 0.004*sin(0.5*bass_att)));\n' + 'rot = rot + (cos(bass_att*treb_att)/(1-treb)+0.5*time)*0.0005;\n' + 'zoomexp = 0.8 + 1+sin(treb_att);'),
};

return pmap;
});
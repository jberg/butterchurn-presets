define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.310603,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.05,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.9999,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 2.448626,
		ob_size : 0.005,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.6,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999999,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.2,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 3.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 0.0,
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
m.ib_r = m.wave_r;
m.ib_g = m.wave_g;
m.ib_b = m.wave_b;
m.wave_mystery = (m.wave_mystery+(0.3*m.time));
		m.rkeys = ['dy','dx','rot','zoom','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.zoom = (m.zoom-(((0.2*(1.5-m.rad))*Math.sin((div(m.bass,2)*m.treb_att)))*((m.rad*2)*(m.rad*Math.abs(Math.sin((9*m.ang)))))));
m.rot = (m.rot+((((m.dy_r*(2-m.zoom))*0.3)*Math.cos(m.bass))*20));
m.rot = (m.rot-((0.4*(m.rad*Math.cos(Math.abs((12*m.ang)))))*below(m.rad, (0.3+(0.4*Math.sin(m.bass))))));
m.dx = (m.dx+((0.5*Math.abs(((m.rad+m.x)-(0.5*(div(m.bass,m.y)*0.2)))))*m.dx_r));
m.dy = (m.dy+((0.5*Math.abs(((m.rad+m.y)-(0.5*(div(m.treb,m.x)*0.2)))))*m.dy_r));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.25*sin(1.4*time) + 0.25*sin(2.25*time);\n' + 'wave_g = wave_g + 0.25*sin(1.7*time) + 0.25*sin(2.11*time);\n' + 'wave_b = wave_b + 0.25*sin(1.84*time) + 0.25*sin(2.3*time);\n' + 'warp = 0;\n' + 'ib_r =wave_r;\n' + 'ib_g = wave_g;\n' + 'ib_b = wave_b;\n' + 'wave_mystery = wave_mystery + 0.3*time;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'zoom = zoom - 0.2*(1.5-rad)*sin(bass/2*treb_att)*(rad*2*(rad*abs(sin(9*ang))));\n' + 'rot = rot + dy_r*(2-zoom)*0.3*cos(bass)*20;\n' + 'rot = rot - 0.4*(rad*cos(abs(12*ang)))*below(rad,0.3+ 0.4*sin(bass));\n' + 'dx = dx + 0.5*abs(rad+x-0.5*(bass/y*0.2))*dx_r;\n' + 'dy = dy + 0.5*abs(rad+y-0.5*(treb/x*0.2))*dy_r;'),
};

return pmap;
});
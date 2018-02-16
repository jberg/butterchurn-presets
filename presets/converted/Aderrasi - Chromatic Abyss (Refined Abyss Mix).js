define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 0.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.250013,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.94032,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.8,
		mv_b : 1.0,
		echo_zoom : 1.093684,
		ob_size : 0.005,
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
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.4,
		decay : 0.99,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.dx_r = 0;
m.dy_r = 0;
m.turn = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+div((((0.5*Math.sin((12*m.treb)))*3.12)*m.time),5));
m.wave_b = (m.wave_b+div((((0.5*Math.sin((12*m.bass)))*3.17)*m.time),5));
m.wave_g = (m.wave_g+div((((0.5*Math.sin((12*m.mid)))*3.22)*m.time),5));
m.wave_x = (m.wave_x+(0.00*Math.sin((0.8*m.time))));
m.wave_y = (m.wave_y+(0.00*Math.sin((0.5*m.time))));
m.turn = ((above(m.bass_att, m.turn)*2)+((1-above(m.bass_att, m.turn))*(((m.turn-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.turn, 2)*0.016)*Math.sin((7*m.time)))+((1-equal(m.turn, 2))*m.dx_r));
m.dy_r = (((equal(m.turn, 2)*0.013)*Math.sin((8*m.time)))+((1-equal(m.turn, 2))*m.dy_r));
m.dx = (m.dx+(0.25*m.dx_r));
m.dy = (m.dy+(0.25*m.dy_r));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom-ifcond(below(m.rad, 0.61), 0.05, 0.01));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + (0.5*sin(12*treb)*3.12*time)/5;\n' + 'wave_b = wave_b + (0.5*sin(12*bass)*3.17*time)/5;\n' + 'wave_g =wave_g + (0.5*sin(12*mid)*3.22*time)/5;\n' + 'wave_x = wave_x + 0.00*sin(0.8*time);\n' + 'wave_y = wave_y + 0.00*sin(0.5*time);\n' + 'turn = above(bass_att,turn)*2 + (1-above(bass_att,turn))*((turn-1.3)*0.96+1.3);\n' + 'dx_r = equal(turn,2)*0.016*sin(7*time) + (1-equal(turn,2))*dx_r;\n' + 'dy_r = equal(turn,2)*0.013*sin(8*time) + (1-equal(turn,2))*dy_r;\n' + 'dx = dx + 0.25*dx_r;\n' + 'dy = dy + 0.25*dy_r;'),
	'pixel_eqs_str' : ('zoom = zoom - if (below (rad,0.61), 0.05, 0.01);'),
};

return pmap;
});
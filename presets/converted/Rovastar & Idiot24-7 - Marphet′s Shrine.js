define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.4,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 1.0,
		mv_y : 1.248,
		wave_scale : 0.0542,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.2201,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 0.4,
		ib_r : 1.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.1,
		zoom : 0.965683,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 3.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.0,
		wave_mystery : 0.0,
		decay : 0.998,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 5.0,
		modwavealphastart : 0.85,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r*Math.sin((m.time*0.961)));
m.wave_b = (m.wave_b*Math.sin((m.time*0.131)));
m.wave_g = (m.wave_g*Math.sin((m.time*0.312)));
m.ib_r = m.wave_r;
m.ib_b = m.wave_b;
m.ib_g = m.wave_g;
m.mv_r = (1-m.ib_r);
m.mv_g = (1-m.ib_g);
m.mv_b = (1-m.ib_b);
m.mv_x = 1.25;
m.mv_y = 48;
m.warp = 0;
m.q1 = ifcond(above((m.bass_att+m.bass), 2.8), ((m.bass_att+m.bass)*0.5), 0.1);
		m.rkeys = ['zoom','rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (m.rot+(ifcond(equal(Math.tan((m.ang*2)), 0), -m.rot, m.rad)*m.q1));
m.zoom = (m.zoom+(0.10*Math.sin(((m.rad+(0.4*m.time))+5))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r=wave_r*sin(Time*0.961);\n' + 'wave_B=wave_b*sin(Time*.131);\n' + 'wave_g=wave_G*sin(time*.312);\n' + 'ib_r = wave_r;\n' + 'ib_b = wave_b;\n' + 'ib_g = wave_g;\n' + 'mv_r = 1-ib_r;\n' + 'mv_g = 1-ib_g;\n' + 'mv_b = 1-ib_b;\n' + 'mv_x = 1.25;\n' + 'mv_y = 48;\n' + 'warp = 0;\n' + 'q1 = if(above(bass_att+bass,2.8),(bass_att+bass)*0.5,0.1);'),
	'pixel_eqs_str' : ('rot = rot + if(equal(tan(ang*2),0),-rot,rad)*q1;\n' + 'zoom=zoom+.10*sin(rad+.4*time+5);'),
};

return pmap;
});
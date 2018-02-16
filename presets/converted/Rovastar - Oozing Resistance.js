define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.01,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 0.35,
		echo_zoom : 1.006596,
		ob_size : 0.005,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.35,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999513,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : -0.4,
		decay : 1.0,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 0.35,
		rating : 5.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q8 = 0;
m.oldq8 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.ob_r = (0.5+(0.5*Math.sin((2*m.time))));
m.ob_g = (0.5+(0.5*Math.sin((1.23*m.time))));
m.ob_b = (0.5+(0.5*Math.sin((m.time*1.321))));
m.wave_a = 0;
m.q8 = (m.oldq8+(0.003*div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.warp = 0;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (0.1*((m.rad+Math.cos(((5+((5*Math.sin((m.q8*1.211)))*m.x))-0.5)))-Math.sin((((5+(5*Math.sin((m.q8*0.973))))*m.y)-0.5))));
m.dx = (0.005*(Math.cos(((5+((5*Math.sin((m.q8*1.311)))*m.x))-0.5))-Math.sin((((5+(5*Math.sin((m.q8*0.9431))))*m.y)-0.5))));
m.dy = (0.005*(Math.cos(((5+((5*Math.sin((m.q8*1.021)))*m.x))-0.5))-Math.sin((((5+(5*Math.sin((m.q8*0.987))))*m.y)-0.5))));
m.zoom = (1-(0.005*((m.rad+Math.cos(((5+((5*Math.sin((m.q8*0.943)))*m.x))-0.5)))-Math.sin((((5+(5*Math.sin((m.q8*1.0961))))*m.y)-0.5)))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('ob_r = 0.5+0.5*sin(2*time);\n' + 'ob_g = 0.5+0.5*sin(1.23*time);\n' + 'ob_b = 0.5+0.5*sin(time*1.321);\n' + 'wave_a =0;\n' + 'q8 =oldq8+ 0.003*(pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 = q8;\n' + 'warp=0;'),
	'pixel_eqs_str' : ('rot = 0.1*(rad+cos((5+5*sin(q8*1.211)*x)-0.5) -sin(((5+5*sin(q8*0.973))*y)-0.5));\n' + 'dx = 0.005*(cos((5+5*sin(q8*1.311)*x)-0.5) -sin(((5+5*sin(q8*0.9431))*y)-0.5));\n' + 'dy = 0.005*(cos((5+5*sin(q8*1.021)*x)-0.5) -sin(((5+5*sin(q8*0.987))*y)-0.5));\n' + 'zoom =1- 0.005*(rad+cos((5+5*sin(q8*0.943)*x)-0.5) -sin(((5+5*sin(q8*1.0961))*y)-0.5));'),
};

return pmap;
});
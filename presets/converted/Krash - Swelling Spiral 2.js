define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.199999,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 27.0,
		warpscale : 0.998166,
		brighten : 0.0,
		mv_y : 19.0,
		wave_scale : 1.228687,
		echo_alpha : 0.4999,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 1.749001,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.347713,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 0.996629,
		ob_size : 0.01,
		wave_smoothing : 0.72,
		warpanimspeed : 1.001828,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.02,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 7.888676,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 1.01,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.angval = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.350*((0.60*Math.sin((0.823*m.time)))+(0.40*Math.sin((0.916*m.time))))));
m.wave_g = (m.wave_g+(0.350*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((1.023*m.time))))));
m.wave_b = (m.wave_b+(0.350*((0.60*Math.sin((0.808*m.time)))+(0.40*Math.sin((0.949*m.time))))));
m.warp = 0;
m.wave_mystery = (m.wave_mystery-(0.5*m.time));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.angval = div(0.3,sqrt(((3.14*Math.tan((m.ang-(m.time*3))))+4)));
m.zoom = ifcond(above(m.rad, 0.05), ifcond(above(div(m.rad,7.8), m.angval), ifcond(below(div((m.rad-0.05),7.8), m.angval), 1.2, 1), ifcond(above(div(m.rad,2.8), m.angval), ifcond(below(div((m.rad-0.05),2.8), m.angval), 1.2, 1), ifcond(above(div(m.rad,1), m.angval), ifcond(below(div((m.rad-0.05),1), m.angval), 1.2, 1), 1))), 1);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.350*( 0.60*sin(0.823*time) + 0.40*sin(0.916*time) );\n' + 'wave_g = wave_g + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(1.023*time) );\n' + 'wave_b = wave_b + 0.350*( 0.60*sin(0.808*time) + 0.40*sin(0.949*time) );\n' + 'warp = 0;\n' + 'wave_mystery = wave_mystery - 0.5*time;'),
	'pixel_eqs_str' : ('angval = 0.3/sqrt((3.14*tan(ang-time*3))+4);\n' + 'zoom = if( above( rad,0.05 ), if( above( rad/7.8, angval ), if( below( (rad-0.05)/7.8, angval), 1.2, 1 ), if( above( rad/2.8, angval ), if( below( (rad-0.05)/2.8, angval), 1.2, 1 ), if( above( rad/1, angval ), if( below( (rad-0.05)/1, angval), 1.2, 1 ), 1 ) ) ), 1 );'),
};

return pmap;
});
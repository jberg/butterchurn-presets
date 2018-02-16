define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 3.2,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 1.44,
		wave_scale : 0.535239,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 0.7797,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 0.7,
		echo_zoom : 1.000495,
		ob_size : 0.005,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.8,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9995,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.75,
		wave_mystery : 0.0,
		decay : 0.999,
		wave_a : 1.00573,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 0.95,
		rating : 1.0,
		modwavealphastart : 1.489999,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.antirot = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.350*((0.60*Math.sin((0.825*m.time)))+(0.40*Math.sin((0.915*m.time))))));
m.wave_g = (m.wave_g+(0.350*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((1.025*m.time))))));
m.wave_b = (m.wave_b+(0.350*((0.60*Math.sin((0.810*m.time)))+(0.40*Math.sin((0.950*m.time))))));
m.mv_r = (m.wave_r+(0.350*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((0.750*m.time))))));
m.mv_g = (m.wave_g+(0.350*((0.60*Math.sin((0.825*m.time)))+(0.40*Math.sin((0.950*m.time))))));
m.mv_b = (m.wave_b+(0.350*((0.60*Math.sin((0.775*m.time)))+(0.40*Math.sin((1.025*m.time))))));
m.ib_r = (m.bass*2);
m.ib_b = (m.treb*2);
m.ib_g = (m.mid*2);
m.ob_r = (m.mid_att+m.time);
m.ob_b = (m.bass_att+m.time);
m.ob_g = (m.treb_att+m.time);
m.zoom = (m.zoom-((0.10-m.bass_att)*0.15));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (m.antirot-m.ang);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.350*( 0.60*sin(0.825*time) + 0.40*sin(0.915*time) );\n' + 'wave_g = wave_g + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(1.025*time) );\n' + 'wave_b = wave_b + 0.350*( 0.60*sin(0.810*time) + 0.40*sin(0.950*time) );\n' + 'mv_r= wave_r + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(0.750*time) );\n' + 'mv_g= wave_g + 0.350*( 0.60*sin(0.825*time) + 0.40*sin(0.950*time) );\n' + 'mv_b= wave_b + 0.350*( 0.60*sin(0.775*time) + 0.40*sin(1.025*time) );\n' + 'ib_r=bass*2;\n' + 'ib_b=treb*2;\n' + 'ib_g=mid*2;\n' + 'ob_r=mid_att+time;\n' + 'ob_b=bass_att+time;\n' + 'ob_g=treb_att+time;\n' + 'zoom = zoom-(0.10-bass_att)*0.15;'),
	'pixel_eqs_str' : ('rot = antirot-ang;'),
};

return pmap;
});
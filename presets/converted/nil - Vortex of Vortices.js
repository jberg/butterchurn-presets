define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 3.615999,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 3.720001,
		wave_scale : 3.985613,
		echo_alpha : 0.470001,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.0035,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 7.113829,
		ob_size : 0.04,
		wave_smoothing : 0.0,
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
		ob_a : 0.2,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.35,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.82,
		wave_mystery : 0.0,
		decay : 0.998,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.7,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.09,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = Math.sin((m.time*2.345));
m.wave_g = Math.sin((m.time*1.456));
m.wave_b = Math.sin((m.time*1.789));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = ((m.zoom+ifcond(above(m.rad, 0.666), (m.rad*0.01), (m.rad*0.1)))+(Math.sin((m.ang+(m.time*0.534)))*0.2));
m.rot = (Math.sin((((m.rad+(m.time*0.666))+(m.bass_att*0.2))*9))*0.2);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r=sin(time*2.345);\n' + 'wave_g=sin(time*1.456);\n' + 'wave_b=sin(time*1.789);'),
	'pixel_eqs_str' : ('zoom=zoom+if(above(rad,.666),rad*.01,rad*.1)+sin(ang+time*.534)*.2;\n' + 'rot=sin((rad+time*.666+bass_att*.2)*9)*.2;'),
};

return pmap;
});
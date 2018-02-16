define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.916999,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 12.0,
		warpscale : 0.543568,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.028413,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.999609,
		ob_size : 0.02,
		wave_smoothing : 0.45,
		warpanimspeed : 0.07316,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.7499,
		wave_y : 0.7199,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.007,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : -0.6,
		decay : 1.0,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 0.006,
		wave_b : 0.65,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {

m.warp = 0;
m.zoom = 1;
m.rot = 0.01;
		return m;
	},
	'frame_eqs' : function(m) {
m.wave_b = ifcond(below(m.treb, 2), 1, 0);
m.decay = ifcond(equal(mod(m.frame,20), 0), 0.99, 1);
m.dx = ifcond(equal(mod(m.frame,100), 0), 0.001, 0);
m.rot = (0.05*Math.cos((m.time*0.4)));
m.wave_x = (((m.wave_x-0.45)*Math.sin((m.time*0.4)))+m.wave_x);
m.wave_y = (((m.wave_y-0.45)*Math.sin((m.time*0.4)))+m.wave_y);
m.zoom = (1-(Math.cos((m.time*0.4))*0.05));
m.wave_x = (0.5+((m.wave_x-0.5)*Math.cos((m.time*5))));
m.wave_y = (0.5+((m.wave_y-0.5)*Math.sin((m.time*5))));
m.ib_a = ((Math.cos((m.time*0.4))*-0.5)+0.5);
m.ob_a = m.ib_a;
m.ob_r = ((Math.cos(m.time)*0.5)+0.5);
m.ob_b = 0.5;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('warp = 0;\n' + 'zoom = 1;\n' + 'rot = 0.01;'),
	'frame_eqs_str' : ('wave_b = if(below(treb, 2),1,0);\n' + 'decay = if(equal(frame % 20,0),.99,1);\n' + 'dx = if(equal(frame % 100,0),.001,0);\n' + 'rot = .05 *cos(time*.4);\n' + 'wave_x = (wave_x-.45)*sin(time*.4) + wave_x;\n' + 'wave_y = (wave_y-.45)*sin(time*.4) + wave_y;\n' + 'zoom = 1- cos(time*.4)*.05;\n' + 'wave_x = .5+(wave_x-.5)*cos(time*5);\n' + 'wave_y = .5+(wave_y-.5)*sin(time*5);\n' + 'ib_a = cos(time*.4)*-.5+.5;\n' + 'ob_a = ib_a;\n' + 'ob_r = cos(time)*.5+.5;\n' + 'ob_b = .5;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
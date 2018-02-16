define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.297568,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		echo_zoom : 1.006596,
		ob_size : 0.5,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		wave_x : 0.489,
		wave_y : 0.5,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		invert : 0.0,
		bmotionvectorson : 0.0,
		rot : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.925,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.colour = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.colour = (div(Math.sin((m.time*1.2)),2)+0.5);
m.wave_g = (1-m.colour);
m.wave_b = (0.9+div(Math.sin(div(m.time,3)),10));
m.wave_r = m.colour;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.sy = ifcond(below(m.y, 0.47), ifcond(above(m.y, 0.03), div(pow(Math.log((m.ang*m.time)), 3),4), -4), 1.1);
m.zoom = (1+div(Math.sin(m.rad),10));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('colour = sin(time*1.2)/2 + 0.5;\n' + 'wave_g = 1-colour;\n' + 'wave_b =0.9 + sin(time/3)/10;\n' + 'wave_r = colour;'),
	'pixel_eqs_str' : ('sy= if(below(y,0.47),if(above(y,0.03),pow(log(ang*time),3)/4,-4),1.1);\n' + 'zoom = 1 + sin(rad)/10;'),
};

return pmap;
});
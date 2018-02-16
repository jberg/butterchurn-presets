define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 8.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 9.600006,
		wave_scale : 1.507644,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 3.0,
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
		echo_zoom : 1.0,
		ob_size : 0.5,
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
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.966,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = Math.sin(m.bass);
m.wave_g = Math.sin(m.treb);
m.wave_b = Math.sin(m.mid);
m.cx = (Math.sin((m.time*0.475))*0.005);
m.cy = (Math.sin((m.time*0.525))*0.005);
		m.rkeys = ['rot','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+(Math.sin((((m.rad-(Math.sin(m.time)*Math.sin(m.bass)))+0.1)*3.2))*0.1));
m.rot = (m.rot+((Math.cos(m.rad)+(Math.sin((m.time*0.9))*2))*0.04));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r=sin(bass);\n' + 'wave_g=sin(treb);\n' + 'wave_b=sin(mid);\n' + 'cx=sin(time*.475)*.005;\n' + 'cy=sin(time*.525)*.005;'),
	'pixel_eqs_str' : ('zoom=zoom+sin((rad-sin(time)*sin(bass)+.1)*3.2)*.1;\n' + 'rot=rot+(cos(rad)+sin(time*.9)*2)*.04;'),
};

return pmap;
});
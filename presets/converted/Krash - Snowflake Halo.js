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
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 0.198054,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		echo_zoom : 1.006596,
		ob_size : 0.01,
		wave_smoothing : 0.36,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.959487,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		invert : 0.0,
		bmotionvectorson : 0.0,
		rot : 0.02,
		modwavealphaend : 1.7,
		wave_mystery : -0.5,
		decay : 0.925,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		rating : 0.0,
		modwavealphastart : 0.7098,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.ff = 0;
m.angval = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.ff = div(m.frame,100);
m.wave_r = (div(Math.sin(div((5*m.ff),2)),2)+0.5);
m.wave_g = (div(Math.cos(div(m.ff,3)),2)+0.5);
m.wave_b = (div(Math.cos(div((3*m.ff),2)),2)+0.5);
m.zoom = (m.zoom-ifcond(below(m.zoom, 0.96), 0, 0.008));
m.zoom = (m.zoom+(0.15*m.bass_att));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.angval = (m.ang+Math.abs(((3.14*Math.sin((m.time*0.345)))+(3.14*Math.sin((m.time*0.234))))));
m.rot = div(((2*Math.abs((Math.sin(m.time)-0.5)))-m.angval),1);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('ff = frame/100;\n' + 'wave_r = sin(5*ff/2)/2+0.5;\n' + 'wave_g = cos(ff/3)/2+0.5;\n' + 'wave_b = cos(3*ff/2)/2+0.5;\n' + 'zoom = zoom - if(below(zoom,0.96),0,0.008);\n' + 'zoom = zoom + 0.15*bass_att;'),
	'pixel_eqs_str' : ('angval = ang + abs(3.14*sin(time*0.345) + 3.14*sin(time*.234));\n' + 'rot=(2*abs((sin(time)-0.5))-angval)/1;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.65,
		ib_g : 0.05,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.461371,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.31,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.198054,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.999922,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		echo_zoom : 1.006596,
		ob_size : 0.5,
		wave_smoothing : 0.45,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.773208,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.005,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.2,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.1,
		invert : 0.0,
		bmotionvectorson : 0.0,
		rot : 0.02,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.94,
		wave_a : 10.039368,
		ob_g : 0.2,
		ib_a : 0.3,
		wave_b : 0.65,
		ib_b : 0.0,
		rating : 5.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.tt = 0;
m.treble = 0;
m.treble_att = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.tt = div(m.time,100);
m.ob_size = ((div(Math.abs(Math.cos(m.time)),5)-0.3)+div(m.bass,8));
m.ib_size = ((div(Math.abs(Math.sin(m.time)),5)-0.3)+div(m.treble,7));
m.ob_r = (div(Math.sin((3*m.tt)),4)+0.75);
m.ib_b = (div(Math.sin(m.tt),2)+0.5);
m.ob_a = ((2*m.bass_att)-0.5);
m.ib_a = ((2*m.treble_att)-0.5);
m.wave_r = (div(Math.sin((4*m.tt)),3)+0.3);
m.wave_b = (div(Math.atan((3*m.tt)),2)+1);
m.wave_g = (div(Math.cos(m.tt),2)+1);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = ifcond(above(m.bass_att, 1.1), div(-Math.sin(m.rad),2), div(Math.sin(m.rad),2));
m.cx = Math.abs(Math.sin(m.rad));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('tt = time/100;\n' + 'ob_size = abs(cos(time))/5 - 0.3 + bass/8;\n' + 'ib_size = abs(sin(time))/5 - 0.3 + treble/7;\n' + 'ob_r = sin(3*tt)/4+0.75;\n' + 'ib_b = sin(tt)/2 +0.5;\n' + 'ob_a = 2*bass_att-0.5 ;\n' + 'ib_a = 2*treble_att-0.5;\n' + 'wave_r = sin(4*tt)/3 +0.3;\n' + 'wave_b = atan(3*tt)/2 +1;\n' + 'wave_g = cos(tt)/2 + 1;'),
	'pixel_eqs_str' : ('rot = if(above(bass_att,1.1),-sin(rad)/2, sin(rad)/2);\n' + 'cx = abs(sin(rad));'),
};

return pmap;
});
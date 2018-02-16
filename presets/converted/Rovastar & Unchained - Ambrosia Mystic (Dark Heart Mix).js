define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.54922,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.0065,
		ob_size : 0.01,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.040604,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.47,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.942,
		wave_a : 0.7999,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q8 = 0;
m.location = 0;
m.state_scalar = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (0.5+(0.5*Math.sin((m.time*1.143))));
m.wave_g = (0.5+(0.5*Math.sin((m.time*0.896))));
m.q8 = ((m.bass+m.bass_att)*0.5);
		m.rkeys = ['rot','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.state_scalar = ifcond(equal(m.q8, 3), -0.1, ifcond(equal(m.q8, 2), 2, 1));
m.location = Math.sin((((m.ang*10)+m.time)+Math.abs((pow((1+m.rad), m.q8)+mod((m.x*10),5)))));
m.zoom = (m.zoom+((0.08*m.state_scalar)*m.location));
m.rot = (m.rot+((0.02*m.state_scalar)*m.location));
m.zoomexp = div(1,pow(m.q8, (m.q8*10)));
m.zoomexp = ifcond(above(m.rad, 0.8), 1, m.zoomexp);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = 0.5 + 0.5*sin(time*1.143);\n' + 'wave_g = 0.5+0.5*sin(time*0.896);\n' + 'q8 = (bass+bass_att)*0.5;'),
	'pixel_eqs_str' : ('state_scalar=if(equal(q8,3),-.1,if(equal(q8,2),2,1));\n' + 'location = sin(ang*10+time+abs(pow(1+rad,q8)+x*10%5));\n' + 'zoom = zoom+.08*state_scalar*location;\n' + 'rot = rot+.02*state_scalar*location;\n' + 'zoomexp = 1/(pow(q8,q8*10));\n' + 'zoomexp = if(above(rad,0.8),1,zoomexp);'),
};

return pmap;
});
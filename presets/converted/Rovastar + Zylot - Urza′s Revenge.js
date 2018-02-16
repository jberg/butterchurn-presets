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
		wave_scale : 0.923479,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		echo_zoom : 2.0,
		ob_size : 0.01,
		wave_smoothing : 0.09,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
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
		modwavealphaend : 0.75,
		wave_mystery : 0.0,
		decay : 0.993,
		wave_a : 1.453351,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		rating : 5.0,
		modwavealphastart : 1.6,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.wave_mystey = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = (m.wave_r+(0.4*Math.sin((m.time*0.333))));
m.wave_g = (m.wave_g+(0.4*Math.sin((m.time*0.444))));
m.wave_b = (m.wave_b+(0.4*Math.sin((m.time*1.522))));
m.zoom = (0.994-div(Math.sin(m.time),300));
m.dx = -0.0001;
m.dy = -0.0001;
m.wave_mystey = div(-m.time,9);
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (0.01+ifcond(below(m.rad, (div(Math.sin((m.time*1.456)),25)+0.18)), (1.2+div(Math.sin((m.time*1.44)),5)), (m.zoom+((0.07+(0.03*Math.sin((m.time*0.55))))*Math.sin(((m.ang*10)+(m.time*8)))))));
m.zoomexp = div(m.zoom,2);
m.rot = (0.1*Math.sin(((ifcond(above(Math.sin(div(m.time,11)), 0), -m.rad, m.rad)*5)+(m.time*0.05))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'wave_r = wave_r + .4*sin(time*.333);\n' + 'wave_g = wave_g + .4*sin(time*.444);\n' + 'wave_b = wave_b + .4*sin(time*1.522);\n' + 'zoom = 0.994 - sin((time))/300;\n' + 'dx = -.0001;\n' + 'dy = -.0001;\n' + 'wave_mystey = -time/9;'),
	'pixel_eqs_str' : ('zoom = 0.01+if(below(rad,sin(time*1.456)/25+0.18),1.2+sin(time*1.44)/5,zoom + (.07+.03*sin(time*.55))*sin(ang*10+time*8));\n' + 'zoomexp = zoom/2;\n' + 'rot = .1*sin(((if(above(sin(time/11),0),-rad,rad))*5)+time*.05);'),
};

return pmap;
});
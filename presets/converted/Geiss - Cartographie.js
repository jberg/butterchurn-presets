define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.35,
		wave_g : 0.65,
		mv_x : 12.0,
		warpscale : 1.0,
		mv_y : 9.0,
		wave_scale : 1.3,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		sy : 1.0,
		warp : 0.057228,
		wave_mode : 2.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.000415,
		fshader : 1.0,
		wave_r : 0.65,
		echo_zoom : 2.0,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.006882,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		bmotionvectorson : 0.0,
		rot : 0.04,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 3.699999,
		wave_b : 0.65,
		rating : 0.0,
		modwavealphastart : 0.75,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.350*((0.60*Math.sin((0.742*m.time)))+(0.40*Math.sin((1.021*m.time))))));
m.wave_g = (m.wave_g+(0.350*((0.60*Math.sin((0.703*m.time)))+(0.40*Math.sin((0.969*m.time))))));
m.wave_b = (m.wave_b+(0.350*((0.60*Math.sin((1.090*m.time)))+(0.40*Math.sin((0.963*m.time))))));
m.rot = (m.rot+(0.010*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.cx = (m.cx+(0.110*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.294*m.time))))));
m.cy = (m.cy+(0.110*((0.60*Math.sin((0.393*m.time)))+(0.40*Math.sin((0.223*m.time))))));
m.decay = (m.decay-(0.025*pow((0.5+(0.5*Math.sin((m.time*1.5)))), 4.8)));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = (0.05*Math.sin((((((m.x*80)+(m.y*94))+(m.rad*97))+(m.ang*22))+(m.time*0.733))));
m.dy = (0.05*Math.sin((((((m.x*60)+(m.y*114))+(m.rad*77))+(m.ang*32))+(m.time*0.83))));
m.zoom = (m.zoom+(0.05*m.rad));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.350*( 0.60*sin(0.742*time) + 0.40*sin(1.021*time) );\n' + 'wave_g = wave_g + 0.350*( 0.60*sin(0.703*time) + 0.40*sin(0.969*time) );\n' + 'wave_b = wave_b + 0.350*( 0.60*sin(1.090*time) + 0.40*sin(0.963*time) );\n' + 'rot = rot + 0.010*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'cx = cx + 0.110*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );\n' + 'cy = cy + 0.110*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );\n' + 'decay=decay-0.025*pow(0.5+0.5*sin(time*1.5),4.8);'),
	'pixel_eqs_str' : ('dx=0.05*sin(x*80+y*94+rad*97+ang*22+time*0.733);\n' + 'dy=0.05*sin(x*60+y*114+rad*77+ang*32+time*0.83);\n' + 'zoom=zoom+0.05*rad;'),
};

return pmap;
});
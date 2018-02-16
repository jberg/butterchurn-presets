define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.772,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.656,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.07,
		warp : 0.513,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.96,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.01,
		ob_size : 0.0,
		wave_smoothing : 0.8,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.98,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.5,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 7.74,
		ob_g : 0.0,
		ib_a : 0.025,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.blah = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_x = (m.wave_x+(0.500*((0.60*Math.sin((2.121*m.time)))+(0.40*Math.sin((1.621*m.time))))));
m.wave_y = (m.wave_y+(0.500*((0.60*Math.sin((1.742*m.time)))+(0.40*Math.sin((2.322*m.time))))));
m.wave_r = (m.wave_r+(0.500*((0.60*Math.sin((0.823*m.time)))+(0.40*Math.sin((0.916*m.time))))));
m.wave_g = (m.wave_g+(0.500*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((1.023*m.time))))));
m.wave_b = (m.wave_b+(0.500*((0.60*Math.sin((0.808*m.time)))+(0.40*Math.sin((0.949*m.time))))));
m.zoom = (m.zoom+(0.070*((0.60*Math.sin((0.239*m.time)))+(0.40*Math.sin((0.296*m.time))))));
m.rot = (m.rot+(0.038*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.539*m.time))))));
m.cx = (m.cx+(0.030*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.194*m.time))))));
m.cy = (m.cy+(0.037*((0.60*Math.sin((0.274*m.time)))+(0.40*Math.sin((0.394*m.time))))));
m.dx = (m.dx+(0.025*((0.60*Math.sin((0.334*m.time)))+(0.40*Math.sin((0.277*m.time))))));
m.dy = (m.dy+(0.025*((0.60*Math.sin((0.384*m.time)))+(0.40*Math.sin((0.247*m.time))))));
m.sx = (m.sx+(0.015*((0.60*Math.sin((0.313*m.time)))+(0.40*Math.sin((0.383*m.time))))));
m.decay = (m.decay-(0.01*equal(mod(m.frame,50), 0)));
m.ib_r = (m.ib_r+(0.2*Math.sin((m.time*0.5413))));
m.ib_g = (m.ib_g+(0.2*Math.sin((m.time*0.3459))));
m.ib_b = (m.ib_b+(0.2*Math.sin((m.time*0.4354))));
m.blah = div(3.0,((m.ib_r+m.ib_g)+m.ib_b));
m.ib_r = (m.ib_r*m.blah);
m.ib_g = (m.ib_g*m.blah);
m.ib_b = (m.ib_b*m.blah);
		m.rkeys = ['rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (m.rot+((m.rad*0.25)*Math.sin((0.3986*m.time))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_x = wave_x + 0.500*( 0.60*sin(2.121*time) + 0.40*sin(1.621*time) );\n' + 'wave_y = wave_y + 0.500*( 0.60*sin(1.742*time) + 0.40*sin(2.322*time) );\n' + 'wave_r = wave_r + 0.500*( 0.60*sin(0.823*time) + 0.40*sin(0.916*time) );\n' + 'wave_g = wave_g + 0.500*( 0.60*sin(0.900*time) + 0.40*sin(1.023*time) );\n' + 'wave_b = wave_b + 0.500*( 0.60*sin(0.808*time) + 0.40*sin(0.949*time) );\n' + 'zoom = zoom + 0.070*( 0.60*sin(0.239*time) + 0.40*sin(0.296*time) );\n' + 'rot = rot + 0.038*( 0.60*sin(0.381*time) + 0.40*sin(0.539*time) );\n' + 'cx = cx + 0.030*( 0.60*sin(0.374*time) + 0.40*sin(0.194*time) );\n' + 'cy = cy + 0.037*( 0.60*sin(0.274*time) + 0.40*sin(0.394*time) );\n' + 'dx = dx + 0.025*( 0.60*sin(0.334*time) + 0.40*sin(0.277*time) );\n' + 'dy = dy + 0.025*( 0.60*sin(0.384*time) + 0.40*sin(0.247*time) );\n' + 'sx = sx + 0.015*( 0.60*sin(0.313*time) + 0.40*sin(0.383*time) );\n' + 'decay = decay - 0.01*equal(frame%50,0);\n' + 'ib_r = ib_r + 0.2*sin(time*0.5413);\n' + 'ib_g = ib_g + 0.2*sin(time*0.3459);\n' + 'ib_b = ib_b + 0.2*sin(time*0.4354);\n' + 'blah = 3.0/(ib_r+ib_g+ib_b);\n' + 'ib_r = ib_r*blah;\n' + ' ib_g = ib_g*blah;\n' + ' ib_b = ib_b*blah;'),
	'pixel_eqs_str' : ('rot=rot+rad*0.25*sin(0.3986*time);'),
};

return pmap;
});
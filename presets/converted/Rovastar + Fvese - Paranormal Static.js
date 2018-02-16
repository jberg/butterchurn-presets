define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.49,
		wave_g : 0.65,
		ib_g : 0.4,
		mv_x : 9.599999,
		warpscale : 0.997374,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.08998,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.005,
		warp : 1.001829,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.4,
		mv_b : 1.0,
		echo_zoom : 0.9966,
		ob_size : 0.03,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9995,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.05,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.965,
		wave_a : 5.002776,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.4,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.bass_thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_x = (0.5+(0.2*(Math.sin((m.time*0.678))+Math.sin((m.time*0.987)))));
m.wave_y = (0.5-(0.2*(Math.sin((m.time*0.876))+Math.sin((m.time*0.789)))));
m.decay = (m.decay-(0.05*equal(mod(m.frame,16), 1)));
m.wave_r = (0.8+(0.2*Math.sin((m.time*1.24))));
m.wave_g = (0.3+(0.1*Math.sin((m.time*0.54))));
m.wave_b = (0.25+(0.1*Math.sin((m.time*0.677))));
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.cx = (m.cx+m.bass_thresh);
m.sx = (m.sx-(m.bass_thresh*0.2));
m.cy = (m.cy+m.wave_y);
m.ib_r = (m.wave_r+(0.350*((0.60*Math.sin((0.823*m.time)))+(0.40*Math.sin((0.916*m.time))))));
m.ib_g = (m.wave_g+(0.350*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((1.023*m.time))))));
m.ib_b = (m.wave_b+(0.350*((0.60*Math.sin((0.808*m.time)))+(0.40*Math.sin((0.949*m.time))))));
m.warp = 0;
m.dx = (0.02*m.bass);
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+(0.005*Math.tan((m.ang-m.ang))));
m.cx = ((bitand(0,((m.x*20)-0.5))*0.05)+0.05);
m.cy = ((bitand(0,((m.y*20)-0.5))*0.05)+0.05);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_x = 0.5 + 0.2*(sin(time*0.678) + sin(time*0.987));\n' + 'wave_y = 0.5 - 0.2*(sin(time*0.876) + sin(time*0.789));\n' + 'decay = decay - 0.05*equal(frame%16,1);\n' + 'wave_r =  0.8+ 0.2*sin(time*1.24);\n' + 'wave_g = 0.3+0.1*sin(time*0.54);\n' + 'wave_b = 0.25+0.1*sin(time*0.677);\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'cx = cx + bass_thresh;\n' + 'sx = sx - bass_thresh*0.2;\n' + 'cy = cy + wave_y;\n' + 'ib_r= wave_r + 0.350*( 0.60*sin(0.823*time) + 0.40*sin(0.916*time) );\n' + 'ib_g= wave_g + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(1.023*time) );\n' + 'ib_b= wave_b + 0.350*( 0.60*sin(0.808*time) + 0.40*sin(0.949*time) );\n' + 'warp =0;\n' + 'dx = 0.02*bass;'),
	'pixel_eqs_str' : ('zoom=zoom + 0.005*tan(ang-ang);\n' + 'cx = (0&(x*20-0.5))*0.05+0.05;\n' + 'cy = (0&(y*20-0.5))*0.05+0.05;'),
};

return pmap;
});
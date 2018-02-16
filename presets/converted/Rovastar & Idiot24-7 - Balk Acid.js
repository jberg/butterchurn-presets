define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 12.799995,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 2.8799,
		wave_scale : 0.591236,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.01,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.4,
		fshader : 0.0,
		wave_r : 0.4,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.999514,
		ob_size : 0.005,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.7,
		wave_x : 0.5,
		wave_y : 1.0,
		zoom : 1.0003,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.41,
		mv_l : 3.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 1.0,
		decay : 1.0,
		wave_a : 1.0,
		ob_g : 1.0,
		ib_a : 1.0,
		wave_b : 0.6,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = ((m.zoom+(0.028*(m.bass+m.bass_att)))-0.05);
m.rot = (m.rot+(0.10*Math.sin(m.time)));
m.mv_r = (0.5+(0.5*Math.sin((m.time*1.23))));
m.mv_b = (0.5+(0.5*Math.sin((m.time*1.26))));
m.mv_g = (0.5+(0.5*Math.sin((m.time*1.19))));
m.wave_g = (m.wave_g+(0.20*Math.sin((m.time*0.13))));
m.wave_r = (m.wave_r+(0.13*Math.sin(m.time)));
m.wave_b = (m.wave_b*Math.sin(m.time));
m.wave_x = (m.wave_x-(0.5*Math.sin((m.time*0.13))));
m.ob_a = ifcond(above((m.mid+m.treb), 2.6), 1, 0);
m.ob_r = (0.5+(0.4*Math.sin((m.time*2.87))));
m.ob_b = (0.5+(0.4*Math.sin((m.time*2.914))));
m.ob_g = (0.5+(0.4*Math.sin((m.time*2.768))));
m.mv_y = 3.25;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('zoom=zoom+0.028*(bass+bass_att) -0.05;\n' + 'rot=rot+0.10*sin(time);\n' + 'mv_r=0.5 +0.5*sin(time*1.23);\n' + 'mv_b=0.5 + 0.5*sin(time*1.26);\n' + 'mv_g=0.5+ 0.5*sin(time*1.19);\n' + 'wave_g=wave_g+.20*sin(time*.13);\n' + 'wave_r=wave_r+.13*sin(time);\n' + 'wave_b=wave_b*sin(time);\n' + 'wave_x=wave_x-.5*sin(time*.13);\n' + 'ob_a = if(above(mid+treb,2.6),1,0);\n' + 'ob_r = 0.5 + 0.4*sin(time*2.87);\n' + 'ob_b = 0.5 + 0.4*sin(time*2.914);\n' + 'ob_g = 0.5 + 0.4*sin(time*2.768);\n' + 'mv_y = 3.25;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
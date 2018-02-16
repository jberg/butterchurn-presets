define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.7,
		wave_g : 0.65,
		ib_g : 0.85,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.02,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.95,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.02,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 13.290894,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.046,
		decay : 0.968,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.65,
		mv_r : 1.0,
		rating : 2.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.myrot = 0;
m.bass_effect = 0;
m.treb_effect = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (0.5+div(Math.sin(div(m.time,3)),2));
m.wave_b = (0.5+(0.5*Math.sin((m.time*47))));
m.wave_g = (0.65+div(Math.sin((m.time*0.23)),10));
m.bass_effect = Math.max(0, (Math.max(m.bass_att, m.bass)-1.3));
m.treb_effect = Math.max(0, (Math.max(m.treb_att, m.treb)-1.3));
m.ob_r = (1-m.wave_r);
m.ob_g = (1-m.wave_g);
m.ob_b = (1-m.wave_b);
m.ib_r = (0.75+(0.25*Math.sin((m.time*0.4))));
m.ib_g = (0.25+(0.25*Math.cos((m.time*0.87))));
m.ib_b = (0.5+(0.5*Math.sin((1.23*m.time))));
m.sx = ((m.sx+(0.05*m.bass))+(0.5*m.bass_effect));
m.sy = ((m.sy+(0.05*m.bass))+(0.5*m.treb_effect));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.myrot = (((div(Math.log((sqrt(2)-m.rad)),3)-(0.01*Math.cos((m.time+(m.rad*0.123)))))-(0.018*Math.sin((m.time-(1-m.rad)))))-0.08);
m.zoom = ifcond(above(m.rad, 0.4), m.myrot, (0.5+(1.1*m.rad)));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = 0.5 + sin(time/3)/2;\n' + 'wave_b = 0.5+ 0.5*sin(time*47);\n' + 'wave_g = 0.65 + sin(time*0.23)/10;\n' + 'bass_effect = max(0,max(bass_att,bass)-1.3);\n' + 'treb_effect = max(0,max(treb_att,treb)-1.3);\n' + 'ob_r = 1-wave_r;\n' + 'ob_g = 1-wave_g;\n' + 'ob_b = 1-wave_b;\n' + 'ib_r = 0.75 + 0.25*sin(time*0.4);\n' + 'ib_g = 0.25 + 0.25*cos(time*0.87);\n' + 'ib_b = 0.5+0.5*sin(1.23*time);\n' + 'sx =sx + 0.05*bass + 0.5*bass_effect;\n' + 'sy = sy + 0.05*bass + 0.5*treb_effect;'),
	'pixel_eqs_str' : ('myrot = log(sqrt(2)-rad)/3- 0.01*cos(time+rad*0.123) - 0.018*sin(time-(1-rad)) -0.08;\n' + 'zoom = if(above(rad,0.4),myrot,0.5+1.1*rad);'),
};

return pmap;
});
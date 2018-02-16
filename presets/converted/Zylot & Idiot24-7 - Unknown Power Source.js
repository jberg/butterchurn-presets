define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 10.240001,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 7.200006,
		wave_scale : 100.0,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.000002,
		ib_size : 0.01,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.08,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 0.9996,
		ob_size : 0.05,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.904846,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.55,
		invert : 0.0,
		rot : 0.2,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.011566,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 0.0,
		rating : 2.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.ob_r = (rand(10)*Math.sin(above(m.bass, m.bass_att)));
m.ob_g = (rand(10)*Math.sin(above(m.mid, m.mid_att)));
m.ob_b = (rand(10)*Math.sin(above(m.treb, m.treb_att)));
m.zoom = (0.9+(m.bass*0.05));
		m.rkeys = ['rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = ((((m.rot*Math.atan2(-m.rad, Math.sin(((m.ang*20)-((((m.ang*20)*m.ang)*10)*Math.atan2(above(m.bass, m.bass_att), above(m.treb, m.treb_att)))))))*Math.sin(((m.rad*m.ang)*above(m.bass, m.bass_att))))*m.rad)-m.ang);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('ob_r=rand(10)*Sin(above(bass,bass_att));\n' + 'ob_g=rand(10)*sin(above(mid,mid_Att));\n' + 'ob_b=rand(10)*Sin(above(treb,treb_Att));\n' + 'zoom = .9+bass*.05;'),
	'pixel_eqs_str' : ('rot=rot*atan2(-rad,sin(ang*20-ang*20*ang*10*atan2(above(bass,bass_Att),above(Treb,treb_Att))))*sin(Rad*ang*above(Bass,bass_Att))*rad-ang;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.50022,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		ib_size : 0.02,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 1.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 2.006758,
		ob_size : 0.02,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 0.1,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.15,
		wave_b : 0.5,
		ib_b : 1.0,
		mv_r : 1.0,
		rating : 3.0,
		modwavealphastart : 0.5,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.trebtrip = 0;
m.volt = 0;
m.basstrip = 0;
m.midtrip = 0;
m.trebwack = 0;
m.basswack = 0;
m.rad = 0;
m.midwack = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.basstrip = ((above(m.bass_att, m.basstrip)*2)+((1-above(m.bass_att, m.basstrip))*(((m.basstrip-1.3)*0.96)+1.3)));
m.basswack = (((equal(m.basstrip, 2)*0.97)*Math.sin((m.time*2)))+((1-equal(m.basstrip, 2))*m.basswack));
m.trebtrip = ((above(m.treb_att, m.trebtrip)*2)+((1-above(m.treb_att, m.trebtrip))*(((m.trebtrip-1.3)*0.96)+1.3)));
m.trebwack = (((equal(m.trebtrip, 2)*0.97)*Math.sin((m.time*2.5)))+((1-equal(m.trebtrip, 2))*m.trebwack));
m.midtrip = ((above(m.mid_att, m.midtrip)*2)+((1-above(m.mid_att, m.midtrip))*(((m.midtrip-1.3)*0.96)+1.3)));
m.midwack = (((equal(m.midtrip, 2)*0.97)*Math.sin((m.time*2.75)))+((1-equal(m.midtrip, 2))*m.midwack));
m.wave_r = (m.wave_r+(0.75*m.basswack));
m.wave_g = (m.wave_g+(0.75*m.trebwack));
m.wave_b = (m.wave_b+(0.75*m.midwack));
m.ob_r = (1-m.wave_r);
m.ob_g = (1-m.wave_g);
m.ob_b = (1-m.wave_b);
m.ib_r = (0.9*m.ob_r);
m.ib_g = (0.9*m.ob_g);
m.ib_b = (0.9*m.ob_b);
m.volt = div(((m.bass_att+m.treb_att)+m.mid_att),3);
m.zoom = (m.zoom-0.005);
m.zoom = (m.zoom+ifcond(above(m.volt, 0.75), (-0.005*(1-m.rad)), 0));
m.sy = (m.sy+ifcond(below(m.volt, 0.83), (-0.01*(0.5-m.rad)), 0));
		m.rkeys = ['zoom','rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (m.rot+(0.04*Math.sin((m.time*m.rad))));
m.zoom = (m.zoom+(0.025*Math.cos((m.time*(0.5-m.rad)))));
m.rot = (m.rot-((0.2*(1-m.rad))*(0.2+Math.abs(Math.sin((3*m.bass_att))))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('basstrip = above(bass_att,basstrip)*2 + (1-above(bass_att,basstrip))*((basstrip-1.3)*0.96+1.3);\n' + 'basswack = equal(basstrip,2)*0.97*sin(time*2) + (1-equal(basstrip,2))*basswack;\n' + 'trebtrip = above(treb_att,trebtrip)*2 + (1-above(treb_att,trebtrip))*((trebtrip-1.3)*0.96+1.3);\n' + 'trebwack = equal(trebtrip,2)*0.97*sin(time*2.5) + (1-equal(trebtrip,2))*trebwack;\n' + 'midtrip = above(mid_att,midtrip)*2 + (1-above(mid_att,midtrip))*((midtrip-1.3)*0.96+1.3);\n' + 'midwack = equal(midtrip,2)*0.97*sin(time*2.75) + (1-equal(midtrip,2))*midwack;\n' + 'wave_r = wave_r + 0.75*basswack;\n' + 'wave_g = wave_g + 0.75*trebwack;\n' + 'wave_b = wave_b + 0.75*midwack;\n' + 'ob_r = 1- wave_r;\n' + 'ob_g = 1 - wave_g;\n' + 'ob_b = 1-wave_b;\n' + 'ib_r = 0.9*ob_r;\n' + 'ib_g = 0.9*ob_g;\n' + 'ib_b = 0.9*ob_b;\n' + 'volt = (bass_att+treb_att+mid_att)/3;\n' + 'zoom = zoom - 0.005;\n' + 'zoom = zoom + if (above(volt,0.75), -0.005*(1-rad), 0);\n' + 'sy = sy + if (below(volt,0.83), -0.01*(0.5-rad), 0);'),
	'pixel_eqs_str' : ('rot = rot + 0.04*sin(time*(rad));\n' + 'zoom = zoom + 0.025*cos(time*(0.5-rad));\n' + 'rot = rot - 0.2*(1-rad)*(0.2+abs(sin(3*bass_att)));'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.3,
		ib_g : 0.05,
		mv_x : 12.0,
		warpscale : 1.772,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.599182,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.4,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.0,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.001,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.7,
		ib_r : 0.65,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.005,
		wave_smoothing : 0.7,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.0,
		wave_y : 0.5,
		zoom : 1.007,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.7,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		invert : 0.0,
		rot : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 1.0,
		decay : 0.98,
		wave_a : 11.94,
		ob_g : 0.3,
		ib_a : 0.3,
		wave_b : 0.3,
		ib_b : 0.45,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.mid_effect = 0;
m.effect = 0;
m.bass_effect = 0;
m.ok_to_change = 0;
m.treb_effect = 0;
m.beat_time = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.200*((0.60*Math.sin((0.823*m.time)))+(0.40*Math.sin((0.916*m.time))))));
m.wave_g = (m.wave_g+(0.500*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((1.023*m.time))))));
m.wave_b = (m.wave_b+(0.500*((0.60*Math.sin((0.808*m.time)))+(0.40*Math.sin((0.949*m.time))))));
m.decay = (m.decay-(0.03*equal(mod(m.frame,30), 0)));
m.treb_effect = Math.max((Math.max(m.treb, m.treb_att)-1.25), 0);
m.mid_effect = Math.max((Math.max(m.mid, m.mid_att)-1.25), 0);
m.ob_size = (m.ob_size+(0.005*m.treb_effect));
m.ib_size = (m.ib_size+(0.005*m.mid_effect));
m.ob_r = ((m.ob_r-(0.2*m.treb_effect))+(0.2*m.mid_effect));
m.ib_g = ((m.ib_g+(0.2*m.mid_effect))-(0.2*m.treb_effect));
		m.rkeys = ['effect','beat_time'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.ok_to_change = ifcond(above(m.time, (m.beat_time+5)), 1, 0);
m.bass_effect = (Math.max(m.bass, m.bass_att)-1);
m.beat_time = ifcond(above(m.bass_effect, 0.5), ifcond(m.ok_to_change, m.time, m.beat_time), m.beat_time);
m.effect = ifcond(equal(m.time, m.beat_time), Math.abs((m.effect-1)), m.effect);
m.bass_effect = Math.max((Math.max(m.bass, m.bass_att)-1.34), 0);
m.zoom = ((ifcond(above(m.effect, 0), (0.4*m.x), (0.4*m.y))+0.6)-(0.13*Math.min(m.bass_effect, 0.3)));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.200*( 0.60*sin(0.823*time) + 0.40*sin(0.916*time) );\n' + 'wave_g = wave_g + 0.500*( 0.60*sin(0.900*time) + 0.40*sin(1.023*time) );\n' + 'wave_b = wave_b + 0.500*( 0.60*sin(0.808*time) + 0.40*sin(0.949*time) );\n' + 'decay = decay - 0.03*equal(frame%30,0);\n' + 'treb_effect = max(max(treb,treb_att)-1.25,0);\n' + 'mid_effect= max(max(mid,mid_att)-1.25,0);\n' + 'ob_size = ob_size + 0.005*treb_effect;\n' + 'ib_size = ib_size + 0.005*mid_effect;\n' + 'ob_r = ob_r -0.2* treb_effect +0.2* mid_effect;\n' + 'ib_g = ib_g + 0.2*mid_effect- 0.2*treb_effect;'),
	'pixel_eqs_str' : ('ok_to_change = if(above(time,beat_time+5),1,0);\n' + 'bass_effect = max(bass, bass_att)-1;\n' + 'beat_time = if(above(bass_effect,0.5), if(ok_to_change,time,beat_time),beat_time);\n' + 'effect = if(equal(time,beat_time),abs(effect-1),effect);\n' + 'bass_effect = max(max(bass,bass_att)-1.34,0);\n' + 'zoom = if(above(effect,0),0.4*x,0.4*y) +0.6 -0.13*(min(bass_effect,0.3));'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.324083,
		ib_g : 0.022579,
		mv_x : 3.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.241455,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.071102,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : -0.505893,
		mv_dy : -0.993957,
		mv_a : 0.175581,
		fshader : 1.0,
		wave_r : 0.526528,
		ib_r : 0.491715,
		mv_b : 0.055806,
		echo_zoom : 1.220183,
		ob_size : 0.0045,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.249397,
		wave_x : 0.482812,
		wave_y : 0.467471,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 0.985207,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.51465,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.261032,
		decay : 1.0,
		wave_a : 1.0,
		ob_g : 0.089654,
		ib_a : 0.949768,
		wave_b : 0.134239,
		ib_b : 0.569085,
		mv_r : 0.835033,
		rating : 0.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.att = 0;
m.b = 0;
m.meanbass_att = 0;
m.mid_effect = 0;
m.lastbeat = 0;
m.effect = 0;
m.bass_effect = 0;
m.treb_effect = 0;
m.beatrate = 0;
m.beat = 0;
m.volume = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.45*((0.6*Math.sin((1.517*m.time)))+(0.4*m.mid_effect))));
m.wave_b = (m.wave_b+(0.45*((0.6*Math.sin((1.088*m.time)))+(0.4*m.bass_effect))));
m.wave_g = (m.wave_g+(0.45*((0.6*Math.sin((1.037*m.time)))+(0.4*m.treb_effect))));
m.zoom = (m.zoom+(0.013*((0.60*Math.sin((0.339*m.time)))+(0.40*Math.sin((0.276*m.time))))));
m.rot = (m.rot+(0.020*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.decay = (m.decay-(0.01*below(mod(m.frame,5), 1)));
m.volume = (0.3*((m.bass+m.mid)+m.att));
m.beatrate = (equal(m.beatrate, 0)+((1-equal(m.beatrate, 0))*(below(m.volume, 0.01)+((1-below(m.volume, 0.01))*m.beatrate))));
m.lastbeat = (m.lastbeat+(equal(m.lastbeat, 0)*m.time));
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.peakbass_att = Math.max(m.bass_att, m.peakbass_att);
m.beat = ((above(m.volume, 0.8)*below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)))*above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))));
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ((m.beat*m.bass_att)+(((1-m.beat)*m.peakbass_att)*((above((m.time-m.lastbeat), (2*m.beatrate))*0.95)+((1-above((m.time-m.lastbeat), (2*m.beatrate)))*0.995))));
m.lastbeat = ((m.beat*m.time)+((1-m.beat)*m.lastbeat));
m.peakbass_att = Math.max(m.peakbass_att, (1.1*m.meanbass_att));
m.effect = ifcond(m.beat, ((m.effect+rand(5))+1), m.effect);
m.effect = ifcond(above(m.effect, 5), (m.effect-6), m.effect);
m.q1 = (m.effect+2);
m.monitor = m.q1;
m.wave_mode = (m.wave_g*m.wave_b);
m.wave_r = (m.time+m.treb);
m.wave_r = ifcond(below(m.wave_r, 0.0), 0.0, m.wave_r);
m.wave_r = ifcond(above(m.wave_r, 1.0), 1.0, m.wave_r);
m.wave_mode = ifcond(below(m.wave_mode, 0), 0, m.wave_mode);
m.wave_mode = ifcond(above(m.wave_mode, 7.0), 7.0, m.wave_mode);
m.wave_r = ifcond(below(m.wave_r, 0.0), 0.0, m.wave_r);
m.wave_r = ifcond(above(m.wave_r, 1.0), 1.0, m.wave_r);
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+(0.04*Math.sin(((m.ang*Math.floor(m.q1))+(m.time*2.6)))));
m.cy = (m.x*m.b);
m.cy = ifcond(below(m.cy, -1.0), -1.0, m.cy);
m.cy = ifcond(above(m.cy, 2.0), 2.0, m.cy);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.45*( 0.6*sin(1.517*time) + 0.4*mid_effect );\n' + 'wave_b = wave_b + 0.45*( 0.6*sin(1.088*time) + 0.4*bass_effect );\n' + 'wave_g = wave_g + 0.45*( 0.6*sin(1.037*time) + 0.4*treb_effect );\n' + 'zoom = zoom + 0.013*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );\n' + 'rot = rot + 0.020*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'decay = decay - 0.01*below(frame%5,1);\n' + 'volume = 0.3*(bass+mid+att);\n' + 'beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);\n' + 'lastbeat = lastbeat + equal(lastbeat,0)*time;\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = max(bass_att,peakbass_att);\n' + 'beat = above(volume,0.8)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.95 + (1-above(time - lastbeat, 2*beatrate))*0.995);\n' + 'lastbeat = beat*time + (1-beat)*lastbeat;\n' + 'peakbass_att = max(peakbass_att,1.1*meanbass_att);\n' + 'effect = if(beat,effect+rand(5)+1,effect);\n' + 'effect = if(above(effect,5),effect-6,effect);\n' + 'q1 = effect+2;\n' + 'monitor = q1;\n' + 'wave_mode = wave_g * wave_b;\n' + 'wave_r = time + treb;\n' + 'wave_r=if(below(wave_r,0.0), 0.0, wave_r);\n' + 'wave_r=if(above(wave_r,1.0), 1.0, wave_r);\n' + 'wave_mode=if(below(wave_mode,0), 0, wave_mode);\n' + 'wave_mode=if(above(wave_mode,7.0), 7.0, wave_mode);\n' + 'wave_r=if(below(wave_r,0.0), 0.0, wave_r);\n' + 'wave_r=if(above(wave_r,1.0), 1.0, wave_r);'),
	'pixel_eqs_str' : ('zoom=zoom+0.04*sin(ang*int(q1)+time*2.6);\n' + 'cy = x * b;\n' + 'cy=if(below(cy,-1.0), -1.0, cy);\n' + 'cy=if(above(cy,2.0), 2.0, cy);'),
};

return pmap;
});
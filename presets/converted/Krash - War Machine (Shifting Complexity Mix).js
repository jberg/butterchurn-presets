define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.2,
		ib_g : 0.0,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.999996,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.5,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.8,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.01,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.1,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.1,
		modwavealphaend : 0.95,
		wave_mystery : -0.4999,
		decay : 1.0,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.2,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.q2 = 0;
m.att = 0;
m.q3 = 0;
m.mode = 0;
m.q4 = 0;
m.q5 = 0;
m.meanbass_att = 0;
m.beatcounter = 0;
m.lastbeat = 0;
m.mode2 = 0;
m.mode3 = 0;
m.beatrate = 0;
m.beat = 0;
m.volume = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = (m.wave_r+(0.45*((0.5*Math.sin((m.time*0.701)))+(0.3*Math.cos((m.time*0.438))))));
m.wave_b = (m.wave_b-(0.4*((0.5*Math.sin((m.time*4.782)))+(0.5*Math.cos((m.time*0.522))))));
m.wave_g = (m.wave_g+(0.4*Math.sin((m.time*1.731))));
m.ob_r = ((above(m.bass_att, m.bass)*(m.bass_att-m.bass))*4);
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
m.beatcounter = (m.beatcounter+m.beat);
m.mode = ifcond((m.beat*equal(mod(m.beatcounter,2), 0)), (1-m.mode), m.mode);
m.mode2 = ifcond(m.beat, mod(((m.mode2+rand(7))+1),8), m.mode2);
m.mode3 = ifcond(m.beat, mod(((m.mode3+rand(7))+1),8), m.mode3);
m.q1 = ((2*m.mode)-1);
m.q2 = (m.mode2+2);
m.q3 = div(1,m.q2);
m.q4 = (m.mode3+2);
m.q5 = div(1,m.q4);
m.wave_x = ((rand(m.q2)+0.5)*m.q3);
m.wave_y = ((rand(m.q4)+0.5)*m.q5);
m.decay = (m.decay-(0.1*equal(mod(m.frame,50), 0)));
		m.rkeys = ['rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.cx = ((bitand(0,((m.x*m.q2)-0.5))+0.5)*m.q3);
m.cy = ((bitand(0,((m.y*m.q4)-0.5))+0.5)*m.q5);
m.rot = ((m.rot*pow(-1, (bitand(0,((m.x*m.q2)-0.5))+bitand(0,((m.y*m.q4)-0.5)))))*m.q1);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'wave_r = wave_r + 0.45*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));\n' + 'wave_b = wave_b - 0.4*(0.5*sin(time*4.782)+0.5*cos(time*0.522));\n' + 'wave_g = wave_g + 0.4*sin(time*1.731);\n' + 'ob_r = above(bass_att,bass)*(bass_att-bass)*4;\n' + 'volume = 0.3*(bass+mid+att);\n' + 'beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);\n' + 'lastbeat = lastbeat + equal(lastbeat,0)*time;\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = max(bass_att,peakbass_att);\n' + 'beat = above(volume,0.8)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.95 + (1-above(time - lastbeat, 2*beatrate))*0.995);\n' + 'lastbeat = beat*time + (1-beat)*lastbeat;\n' + 'peakbass_att = max(peakbass_att,1.1*meanbass_att);\n' + 'beatcounter = beatcounter + beat;\n' + 'mode = if(beat*equal(beatcounter%2,0),1-mode,mode);\n' + 'mode2 = if(beat,(mode2 + rand(7) + 1)%8,mode2);\n' + 'mode3 = if(beat,(mode3 + rand(7) + 1)%8,mode3);\n' + 'q1 = 2*mode-1;\n' + 'q2 = mode2 + 2;\n' + 'q3 = 1/q2;\n' + 'q4 = mode3 + 2;\n' + 'q5 = 1/q4;\n' + 'wave_x = (rand(q2)+0.5)*q3;\n' + 'wave_y = (rand(q4)+0.5)*q5;\n' + 'decay = decay - 0.1*equal(frame%50,0);'),
	'pixel_eqs_str' : ('cx = ((0&(x*q2-0.5))+0.5)*q3;\n' + 'cy = ((0&(y*q4-0.5))+0.5)*q5;\n' + 'rot = rot*pow(-1,(0&(x*q2-0.5)) + (0&(y*q4-0.5)))*q1;'),
};

return pmap;
});
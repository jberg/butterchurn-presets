define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.45,
		ib_g : 0.45,
		mv_x : 64.0,
		warpscale : 1.330999,
		brighten : 0.0,
		mv_y : 1.0,
		wave_scale : 0.084882,
		echo_alpha : 1.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.45,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.953142,
		red_blue : 0.0,
		wave_mode : 1.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.001791,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.45,
		ib_r : 0.45,
		mv_b : 1.0,
		echo_zoom : 0.746813,
		ob_size : 0.005,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.951003,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.45,
		mv_l : 0.7,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : -0.2,
		decay : 0.975,
		wave_a : 100.0,
		ob_g : 0.45,
		ib_a : 0.0,
		wave_b : 0.45,
		ib_b : 0.45,
		mv_r : 1.0,
		rating : 3.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.q2 = 0;
m.meanbass_att = 0;
m.oldq1 = 0;
m.countertime = 0;
m.myrot = 0;
m.lastbeat = 0;
m.beatrate = 0;
m.beat = 0;
m.volume = 0;
m.counter = 0;
m.q1 = 1;
		return m;
	},
	'frame_eqs' : function(m) {
m.volume = (0.15*(((m.bass_att+m.bass)+m.mid)+m.mid_att));
m.beatrate = ifcond(equal(m.beatrate, 0), 1, ifcond(below(m.volume, 0.01), 1, m.beatrate));
m.lastbeat = ifcond(equal(m.lastbeat, 0), m.time, m.lastbeat);
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.peakbass_att = ifcond(above(m.bass_att, m.peakbass_att), m.bass_att, m.peakbass_att);
m.beat = ifcond(above(m.volume, 0.8), ifcond(below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)), ifcond(above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))), 1, 0), 0), 0);
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ifcond(equal(m.beat, 0), ifcond(above((m.time-m.lastbeat), (2*m.beatrate)), (m.peakbass_att*0.95), (m.peakbass_att*0.995)), m.bass_att);
m.lastbeat = ifcond(m.beat, m.time, m.lastbeat);
m.countertime = ifcond(m.beat, m.time, m.countertime);
m.counter = (-1*pow(Math.min(((m.time-m.countertime)-3), 0), 3));
m.q1 = (m.oldq1+(0.003*m.counter));
m.oldq1 = m.q1;
m.monitor = m.q1;
m.q2 = m.beatrate;
m.wave_r = (m.wave_r+(0.5*Math.sin(((m.q1*m.time)*1.33))));
m.wave_g = (m.wave_g+(0.5*Math.sin((m.q1*1.13))));
m.wave_b = (m.wave_b+(0.5*Math.sin(((m.q1*m.time)*1.23))));
m.wave_x = (0.5+(0.09*Math.sin((m.q1*1.2))));
m.wave_y = (0.5+(0.09*Math.sin((m.q1*1.1))));
m.ob_r = (((above(m.beat, 0)*m.ob_r)+((below(m.beat, 1)*0.2)*Math.cos((m.lastbeat*1.1))))+(0.4*Math.sin((m.q1*1.13))));
m.ob_g = (((above(m.beat, 0)*m.ob_g)+((below(m.beat, 1)*0.2)*Math.cos((m.lastbeat*1.2))))+(0.4*Math.sin((m.q1*1.23))));
m.ob_b = (((above(m.beat, 0)*m.ob_b)+((below(m.beat, 1)*0.2)*Math.cos((m.lastbeat*1.3))))+(0.4*Math.sin((m.q1*1.33))));
		m.rkeys = ['rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.myrot = (Math.sin(m.q1)+Math.sin(m.q1));
m.rot = ifcond(above(m.x, 0.85), ifcond(above(m.y, 0.85), ifcond(below(m.x, 0.15), ifcond(below(m.y, 0.15), m.myrot, m.rot), m.rot), m.rot), m.rot);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('q1=1;'),
	'frame_eqs_str' : ('volume = 0.15*(bass_att+bass+mid+mid_att);\n' + 'beatrate = if(equal(beatrate,0),1,if(below(volume,0.01),1,beatrate));\n' + 'lastbeat = if(equal(lastbeat,0),time,lastbeat);\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = if(above(bass_att,peakbass_att),bass_att,peakbass_att);\n' + 'beat = if(above(volume,0.8),if(below(peakbass_att - bass_att, 0.05*peakbass_att),if(above(time - lastbeat,0.1+0.5*(beatrate-0.1)),1,0),0),0);\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = if(equal(beat,0),if(above(time - lastbeat,2*beatrate),peakbass_att*0.95,peakbass_att*0.995),bass_att);\n' + 'lastbeat = if(beat,time,lastbeat);\n' + 'countertime = if(beat,time,countertime);\n' + 'counter =-1*pow(min((time-countertime-3),0),3);\n' + 'q1=oldq1+0.003*counter;\n' + 'oldq1 = q1;\n' + 'monitor=q1;\n' + 'q2 = beatrate;\n' + 'wave_r = wave_r + 0.5*sin(q1*time*1.33);\n' + 'wave_g = wave_g + 0.5*sin(q1*1.13);\n' + 'wave_b = wave_b + 0.5*sin(q1*time*1.23);\n' + 'wave_x = 0.5 + 0.09*sin(q1*1.2);\n' + 'wave_y = 0.5 + 0.09*sin(q1*1.1);\n' + 'ob_r = above(beat, 0)*ob_r + below(beat, 1)*0.2*cos(lastbeat*1.1) + 0.4*sin(q1*1.13);\n' + 'ob_g = above(beat, 0)*ob_g + below(beat, 1)*0.2*cos(lastbeat*1.2) + 0.4*sin(q1*1.23);\n' + 'ob_b = above(beat, 0)*ob_b + below(beat, 1)*0.2*cos(lastbeat*1.3) + 0.4*sin(q1*1.33);'),
	'pixel_eqs_str' : ('myRot = (sin(q1) + sin(q1));\n' + 'rot = if(above(x, 0.85), if(above(y, 0.85), if(below(x, 0.15), if(below(y, 0.15), myRot, rot), rot), rot), rot);'),
};

return pmap;
});
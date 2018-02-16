define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.5,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.6401,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.01,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.5,
		mv_b : 1.0,
		echo_zoom : 0.999609,
		ob_size : 0.01,
		wave_smoothing : 0.27,
		warpanimspeed : 5.99579,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.96,
		zoom : 0.998531,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.2,
		mv_l : 0.25,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.9,
		ib_a : 0.23,
		wave_b : 0.5,
		ib_b : 0.5,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.q3 = 0;
m.q5 = 0;
m.meanbass_att = 0;
m.q8 = 0;
m.oldq3 = 0;
m.box = 0;
m.oldq5 = 0;
m.lastbeat = 0;
m.oldq8 = 0;
m.beatrate = 0;
m.beat = 0;
m.volume = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.ob_r = (0.7-(0.3*((0.5*Math.sin((m.time*0.701)))+(0.3*Math.cos((m.time*0.438))))));
m.ob_g = (0.5-(0.4*Math.sin((m.time*5.924))));
m.ob_b = (0.45-(0.3*Math.cos((m.time*0.816))));
m.warp = 0;
m.volume = (0.08*(((m.bass_att+(3*m.bass))+m.mid)+m.mid_att));
m.beatrate = ifcond(equal(m.beatrate, 0), 1, ifcond(below(m.volume, 0.01), 1, m.beatrate));
m.lastbeat = ifcond(equal(m.lastbeat, 0), m.time, m.lastbeat);
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.peakbass_att = ifcond(above(m.bass_att, m.peakbass_att), m.bass_att, m.peakbass_att);
m.beat = ifcond(above(m.volume, 0.8), ifcond(below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)), ifcond(above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))), 1, 0), 0), 0);
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ifcond(equal(m.beat, 0), ifcond(above((m.time-m.lastbeat), (2*m.beatrate)), (m.peakbass_att*0.95), (m.peakbass_att*0.995)), m.bass_att);
m.lastbeat = ifcond(m.beat, m.time, m.lastbeat);
m.peakbass_att = Math.max(ifcond(m.beat, m.bass_att, m.peakbass_att), (1.1*m.meanbass_att));
m.q5 = ifcond(m.beat, (0.1*rand(1000)), m.oldq5);
m.oldq5 = m.q5;
m.q3 = ifcond(m.beat, (0.1*rand(1000)), m.oldq3);
m.oldq3 = m.q3;
m.ib_size = 0.02;
m.ib_r = (m.ib_r+(0.5*Math.sin((m.time*2.424))));
m.ib_g = (m.ib_g+(0.5*Math.sin((m.time*2.247))));
m.ib_b = (m.ib_b-(0.5*Math.sin((m.time*1.131))));
m.q8 = ((m.oldq8+(0.003*(((((div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 5),m.fps))+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 4),m.fps))+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 3),m.fps))+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 2),m.fps))+div(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)),m.fps))))+div(1,(m.fps*5)));
m.oldq8 = m.q8;
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.box = (mod(Math.abs(((m.x*2)-(0.4*Math.sin(m.q3)))),2)+mod(Math.abs(((m.y*2)+(0.4*Math.sin(m.q5)))),2));
m.q1 = (4.05+(Math.sin((m.x+(0.237*m.time)))-Math.cos((m.y+(0.513*m.time)))));
m.zoom = ifcond(above(m.box, 1), (m.q1*0.1), m.zoom);
m.rot = ifcond(above(m.box, 1), Math.sin((0.885*m.q8)), 0);
m.dx = ifcond(above(m.box, 1), Math.sin((0.542*m.time)), ((0.005*Math.sin((((m.y*2)-1)*48)))+(0.001*Math.tan((((m.y*2)-1)*64)))));
m.dy = ifcond(above(m.box, 1), Math.sin((0.581*m.time)), ((((1+Math.abs(Math.sin(m.q8)))*0.001)*Math.cos((((m.x*2)-1)*48)))+(0.001*Math.tan((((m.x*2)-1)*48)))));
m.zoomexp = ifcond(above(m.box, 1), 3, 1);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('ob_r = 0.7 - 0.3*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));\n' + 'ob_g = 0.5- 0.4*sin(time*5.924);\n' + 'ob_b = 0.45 - 0.3*cos(time*0.816);\n' + 'warp =0;\n' + 'volume = 0.08*(bass_att+3*bass+mid+mid_att);\n' + 'beatrate = if(equal(beatrate,0),1,if(below(volume,0.01),1,beatrate));\n' + 'lastbeat = if(equal(lastbeat,0),time,lastbeat);\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = if(above(bass_att,peakbass_att),bass_att,peakbass_att);\n' + 'beat = if(above(volume,0.8),if(below(peakbass_att - bass_att, 0.05*peakbass_att),if(above(time - lastbeat,0.1+0.5*(beatrate-0.1)),1,0),0),0);\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = if(equal(beat,0),if(above(time - lastbeat,2*beatrate),peakbass_att*0.95,peakbass_att*0.995),bass_att);\n' + 'lastbeat = if(beat,time,lastbeat);\n' + 'peakbass_att = max(if(beat,bass_att,peakbass_att),1.1*meanbass_att);\n' + 'q5 = if(beat,0.1*rand(1000),oldq5);\n' + 'oldq5 = q5;\n' + 'q3 = if(beat,0.1*rand(1000),oldq3);\n' + 'oldq3 = q3;\n' + 'ib_size = 0.02;\n' + 'ib_r = ib_r + 0.5*sin(time*2.424);\n' + 'ib_g = ib_g + 0.5*sin(time*2.247);\n' + 'ib_b = ib_b - 0.5*sin(time*1.131);\n' + 'q8 = oldq8 +0.003*(((pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,5)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,4)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,3)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,2)/fps) +(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att)/fps)) + 1/(fps*5);\n' + 'oldq8 = q8;'),
	'pixel_eqs_str' : ('box=abs(x*2-0.4*sin(q3))%2 + abs(y*2+0.4*sin(q5))%2;\n' + 'q1 = 4.05+(sin(x+0.237*time)-cos(y+0.513*time));\n' + 'zoom = if(above(box,1),q1*.1,zoom);\n' + 'rot = if(above(box,1),sin(0.885*q8),0);\n' + 'dx = if(above(box,1),sin(0.542*time),0.005*sin((y*2-1)*48)+0.001*tan((y*2-1)*64));\n' + 'dy= if(above(box,1),sin(0.581*time),((1+abs(sin(q8)))*0.001)*cos((x*2-1)*48)+0.001*tan((x*2-1)*48));\n' + 'zoomexp = if(above(box,1),3,1);'),
};

return pmap;
});
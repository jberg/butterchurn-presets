define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.5,
		mv_x : 63.936001,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.01,
		echo_alpha : 1.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.01,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.5,
		mv_b : 0.3,
		echo_zoom : 0.999609,
		ob_size : 0.01,
		wave_smoothing : 0.27,
		warpanimspeed : 5.99579,
		wave_dots : 0.0,
		mv_g : 0.2,
		wave_x : 0.1,
		wave_y : 0.9,
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
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.002,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.4,
		decay : 1.0,
		wave_a : 7.014853,
		ob_g : 0.9,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.5,
		mv_r : 0.63,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.q2 = 0;
m.mode = 0;
m.q4 = 0;
m.q6 = 0;
m.meanbass_att = 0;
m.q7 = 0;
m.box = 0;
m.yamp = 0;
m.xamp = 0;
m.lastbeat = 0;
m.yamptarg = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.yaccel = 0;
m.xspeed = 0;
m.xaccel = 0;
m.bass_effect = 0;
m.ydir = 0;
m.xdir = 0;
m.beatrate = 0;
m.beat = 0;
m.volume = 0;
m.ypos = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.ob_r = (0.4-(0.3*((0.5*Math.sin((m.time*0.701)))+(0.3*Math.cos((m.time*0.438))))));
m.ob_g = (0.5-(0.46*Math.sin((m.time*1.724))));
m.ob_b = (0.65-(0.3*Math.cos((m.time*1.816))));
m.warp = 0;
m.ib_size = 0.025;
m.ib_r = (m.ib_r+(0.5*((0.6*Math.sin((m.time*3.034)))+(0.4*Math.cos((m.time*2.14))))));
m.ib_g = (m.ib_g+(0.5*((0.6*Math.sin((m.time*3.147)))+(0.4*Math.cos((m.time*2.015))))));
m.ib_b = (m.ib_b-(0.5*((0.6*Math.sin((m.time*3.431)))+(0.4*Math.cos((m.time*1.842))))));
m.dx = (m.dx-(0.003*((0.6*Math.sin((m.time*0.234)))+(0.4*Math.cos((m.time*0.437))))));
m.dy = (m.dy-(0.003*((0.7*Math.sin((m.time*0.213)))+(0.3*Math.cos((m.time*0.315))))));
m.volume = (0.15*(((((m.bass+m.bass_att)+m.treb)+m.treb_att)+m.mid)+m.mid_att));
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.5*m.volume)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xaccel = (((m.xdir*m.xamp)-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.q2 = m.xpos;
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.3*m.volume)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yaccel = (((m.ydir*m.yamp)-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.q4 = m.ypos;
m.bass_effect = Math.max((Math.max(m.bass, m.bass_att)-1.2), 0);
m.echo_zoom = ((1.32+(0.3*((0.59*Math.sin((m.q4+(m.time*0.865))))+(0.41*Math.cos((m.q2+(m.time*1.192)))))))+(0.05*m.bass_effect));
m.volume = (0.15*(((m.bass_att+m.bass)+m.mid)+m.mid_att));
m.beatrate = ifcond(equal(m.beatrate, 0), 1, ifcond(below(m.volume, 0.01), 1, m.beatrate));
m.lastbeat = ifcond(equal(m.lastbeat, 0), m.time, m.lastbeat);
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.peakbass_att = ifcond(above(m.bass_att, m.peakbass_att), m.bass_att, m.peakbass_att);
m.beat = ifcond(above(m.volume, 0.8), ifcond(below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)), ifcond(above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))), 1, 0), 0), 0);
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ifcond(equal(m.beat, 0), ifcond(above((m.time-m.lastbeat), (2*m.beatrate)), (m.peakbass_att*0.95), (m.peakbass_att*0.995)), m.bass_att);
m.lastbeat = ifcond(m.beat, m.time, m.lastbeat);
m.peakbass_att = Math.max(ifcond(m.beat, m.bass_att, m.peakbass_att), (1.1*m.meanbass_att));
m.mode = mod((m.mode+(m.beat*(rand(3)+1))),4);
m.echo_orient = m.mode;
m.wave_a = 0;
m.q6 = m.beat;
		m.rkeys = ['sy','sx','cy','cx','rot','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.box = (0.5+(0.8*(mod((2*m.x),4)+mod((2*m.y),2))));
m.q1 = (8.05+(0.3*(Math.sin((pow(m.x, 3)+(0.177*m.time)))-Math.cos((pow(m.y, 3)+(0.223*m.time))))));
m.q7 = above(m.box, 1);
m.zoom = ifcond(m.q7, ((m.q1*0.1)+(m.q6*6)), m.zoom);
m.rot = ifcond(m.q7, (0.63*Math.sin(((((((0.5*m.rad)+(0.385*m.time))+(0.12*Math.sin((0.67*m.time))))+(0.1*m.q4))+(0.12*m.q2))+(m.q6*50)))), m.rot);
m.cx = (m.cx-(0.05*Math.sin((m.rad+(2*m.q4)))));
m.cy = (m.cy+(0.04*Math.sin((((0.5*sqrt(2))-m.rad)-(2*m.q2)))));
m.sx = ifcond(m.q7, (m.sx+(m.q6*18)), m.sx);
m.sy = ifcond(m.q7, (m.sy+(m.q6*18)), m.sy);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('ob_r = 0.4 - 0.3*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));\n' + 'ob_g = 0.5 - 0.46*sin(time*1.724);\n' + 'ob_b = 0.65 - 0.3*cos(time*1.816);\n' + 'warp =0;\n' + 'ib_size = 0.025;\n' + 'ib_r = ib_r + 0.5*(0.6*sin(time*3.034)+0.4*cos(time*2.14));\n' + 'ib_g = ib_g + 0.5*(0.6*sin(time*3.147)+0.4*cos(time*2.015));\n' + 'ib_b = ib_b - 0.5*(0.6*sin(time*3.431)+0.4*cos(time*1.842));\n' + 'dx = dx -0.003*(0.6*sin(time*0.234) + 0.4*cos(time*0.437));\n' + 'dy = dy - 0.003*(0.7*sin(time*0.213) + 0.3*cos(time*0.315));\n' + 'volume = 0.15*(bass+bass_att+treb+treb_att+mid+mid_att);\n' + 'xamptarg = if(equal(frame%15,0),min(0.5*volume*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xaccel = xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'q2 = xpos;\n' + 'yamptarg = if(equal(frame%15,0),min(0.3*volume*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yaccel = ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'q4 = ypos;\n' + 'bass_effect = max(max(bass,bass_att)-1.2,0);\n' + 'echo_zoom = 1.32 + 0.3*(0.59*sin(q4+time*0.865) + 0.41*cos(q2+time*1.192)) + 0.05*bass_effect;\n' + 'volume = 0.15*(bass_att+bass+mid+mid_att);\n' + 'beatrate = if(equal(beatrate,0),1,if(below(volume,0.01),1,beatrate));\n' + 'lastbeat = if(equal(lastbeat,0),time,lastbeat);\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = if(above(bass_att,peakbass_att),bass_att,peakbass_att);\n' + 'beat = if(above(volume,0.8),if(below(peakbass_att - bass_att, 0.05*peakbass_att),if(above(time - lastbeat,0.1+0.5*(beatrate-0.1)),1,0),0),0);\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = if(equal(beat,0),if(above(time - lastbeat,2*beatrate),peakbass_att*0.95,peakbass_att*0.995),bass_att);\n' + 'lastbeat = if(beat,time,lastbeat);\n' + 'peakbass_att = max(if(beat,bass_att,peakbass_att),1.1*meanbass_att);\n' + 'mode = (mode+beat*(rand(3)+1))%4;\n' + 'echo_orient = mode;\n' + 'wave_a = 0;\n' + 'q6 = beat;'),
	'pixel_eqs_str' : ('box =0.5+0.8*(2*x%4+2*y%2);\n' + 'q1 = 8.05+0.3*(sin(pow(x,3)+0.177*time)-cos(pow(y,3)+0.223*time));\n' + 'q7 = above(box,1);\n' + 'zoom = if(q7,(q1*.1) + q6*6 ,zoom);\n' + 'rot = if(q7,0.63*sin(0.5*rad+0.385*time + 0.12*sin(0.67*time) + 0.1*q4 + 0.12*q2 +q6*50),rot);\n' + 'cx = cx - 0.05*sin(rad+2*q4);\n' + 'cy = cy + 0.04*sin(((0.5*sqrt(2))-rad)-2*q2);\n' + 'sx = if(q7,sx+q6*18,sx);\n' + 'sy = if(q7,sy+q6*18,sy);'),
};

return pmap;
});
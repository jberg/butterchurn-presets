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
		mv_y : 2.4,
		wave_scale : 0.6401,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.01,
		mv_dx : -0.1,
		mv_dy : -0.1,
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
		zoom : 0.996546,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.2,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.9,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.5,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.q2 = 0;
m.q3 = 0;
m.q5 = 0;
m.meanbass_att = 0;
m.oldq3 = 0;
m.box = 0;
m.oldq5 = 0;
m.yamp = 0;
m.xamp = 0;
m.lastbeat = 0;
m.yamptarg = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.yaccel = 0;
m.old_ib_size = 0;
m.xspeed = 0;
m.xaccel = 0;
m.ydir = 0;
m.my_ib_size = 0;
m.xdir = 0;
m.beatrate = 0;
m.beat = 0;
m.volume = 0;
m.ypos = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.ob_r = (0.7-(0.3*((0.5*Math.sin((m.time*0.701)))+(0.3*Math.cos((m.time*0.438))))));
m.ob_g = (0.5-(0.48*Math.sin((m.time*3.324))));
m.ob_b = (0.5-(0.48*Math.cos((m.time*2.316))));
m.cx = (m.cx-(0.1*Math.sin((m.time*0.542))));
m.cy = (m.cy+(0.1*Math.sin((m.time*0.753))));
m.warp = 0;
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
m.q5 = ifcond(m.beat, (0.1*rand(1000)), m.oldq5);
m.oldq5 = m.q5;
m.q3 = ifcond(m.beat, (0.1*rand(1000)), m.oldq3);
m.oldq3 = m.q3;
m.my_ib_size = (0.015+Math.abs((0.03*Math.sin((0.1*rand(1000))))));
m.ib_size = ifcond(m.beat, m.my_ib_size, m.old_ib_size);
m.old_ib_size = m.ib_size;
m.ib_r = (m.ib_r+(0.5*Math.sin((m.time*2.934))));
m.ib_g = (m.ib_g+(0.5*Math.sin((m.time*1.547))));
m.ib_b = (m.ib_b-(0.5*Math.sin((m.time*3.431))));
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.5*m.volume)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xaccel = (((m.xdir*m.xamp)-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.dx = (0.016*m.xpos);
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.3*m.volume)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yaccel = (((m.ydir*m.yamp)-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.dy = (0.016*m.ypos);
m.q2 = (0.6*(m.ypos+m.xpos));
		m.rkeys = ['dy','dx','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.box = (mod(Math.abs((((m.x*2)-(0.3*Math.sin(m.q3)))+1)),2)+mod(Math.abs((((m.y*2)+(0.3*Math.sin(m.q5)))+1)),2));
m.q1 = (4.05+(Math.sin((m.x+(0.237*m.time)))-Math.cos((m.y+(0.513*m.time)))));
m.zoom = ifcond(above(m.box, 1), (m.q1*0.1), (m.zoom*0.95));
m.rot = ifcond(above(m.box, 1), Math.sin(((m.rad*0.885)*m.time)), ((0.4*m.q1)+(m.q2*(1-m.rad))));
m.dx = ifcond(above(m.box, 1), Math.sin((1.442*m.time)), m.dx);
m.dy = ifcond(above(m.box, 1), Math.sin((1.581*m.time)), m.dy);
m.zoomexp = ifcond(above(m.box, 1), 1, (1-Math.abs(m.q2)));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('ob_r = 0.7 - 0.3*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));\n' + 'ob_g = 0.5- 0.48*sin(time*3.324);\n' + 'ob_b = 0.5 - 0.48*cos(time*2.316);\n' + 'cx = cx - 0.1*sin(time*0.542);\n' + 'cy = cy + 0.1*sin(time*0.753);\n' + 'warp =0;\n' + 'volume = 0.15*(bass_att+bass+mid+mid_att);\n' + 'beatrate = if(equal(beatrate,0),1,if(below(volume,0.01),1,beatrate));\n' + 'lastbeat = if(equal(lastbeat,0),time,lastbeat);\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = if(above(bass_att,peakbass_att),bass_att,peakbass_att);\n' + 'beat = if(above(volume,0.8),if(below(peakbass_att - bass_att, 0.05*peakbass_att),if(above(time - lastbeat,0.1+0.5*(beatrate-0.1)),1,0),0),0);\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = if(equal(beat,0),if(above(time - lastbeat,2*beatrate),peakbass_att*0.95,peakbass_att*0.995),bass_att);\n' + 'lastbeat = if(beat,time,lastbeat);\n' + 'peakbass_att = max(if(beat,bass_att,peakbass_att),1.1*meanbass_att);\n' + 'q5 = if(beat,0.1*rand(1000),oldq5);\n' + 'oldq5 = q5;\n' + 'q3 = if(beat,0.1*rand(1000),oldq3);\n' + 'oldq3 = q3;\n' + 'my_ib_size = 0.015+abs(0.03*sin(0.1*rand(1000)));\n' + 'ib_size = if(beat,my_ib_size,old_ib_size);\n' + 'old_ib_size = ib_size;\n' + 'ib_r = ib_r + 0.5*sin(time*2.934);\n' + 'ib_g = ib_g + 0.5*sin(time*1.547);\n' + 'ib_b = ib_b - 0.5*sin(time*3.431);\n' + 'xamptarg = if(equal(frame%15,0),min(0.5*volume*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xaccel = xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'dx = 0.016*xpos;\n' + 'yamptarg = if(equal(frame%15,0),min(0.3*volume*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yaccel = ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'dy =0.016*ypos;\n' + 'q2= 0.6*(ypos+xpos);'),
	'pixel_eqs_str' : ('box=abs(x*2-0.3*sin(q3)+1)%2 + abs(y*2+0.3*sin(q5)+1)%2;\n' + 'q1 = 4.05+(sin(x+0.237*time)-cos(y+0.513*time));\n' + 'zoom = if(above(box,1),q1*.1,zoom*0.95);\n' + 'rot = if(above(box,1),sin(rad*0.885*time),0.4*q1+q2*(1-rad));\n' + 'dx = if(above(box,1),sin(1.442*time),dx);\n' + 'dy= if(above(box,1),sin(1.581*time),dy);\n' + 'zoomexp = if(above(box,1),1,1-abs(q2));'),
};

return pmap;
});
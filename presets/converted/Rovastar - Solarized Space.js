define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.994,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 0.0,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 0.980296,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0015,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 1.0,
		wave_r : 1.0,
		ib_r : 1.0,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.0,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 1.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 1.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.5,
		decay : 0.96,
		wave_a : 1.882469,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.peakbass_att = 0;
m.mode = 0;
m.meanbass_att = 0;
m.beatcounter = 0;
m.yamp = 0;
m.myx = 0;
m.xamp = 0;
m.lastbeat = 0;
m.myy = 0;
m.yamptarg = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.xspeed = 0;
m.beateven = 0;
m.vol = 0;
m.ydir = 0;
m.xdir = 0;
m.beatrate = 0;
m.beat = 0;
m.volume = 0;
m.ypos = 0;
m.bass_thresh = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_mystery = -0.5;
m.vol = (0.167*(m.bass+m.mid));
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.5*m.vol)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.myx = ((1.25*m.xpos)+0.5);
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.3*m.vol)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.myy = ((1.25*m.ypos)+0.5);
m.cx = (0.5+(0.05*Math.sin((0.497*m.time))));
m.cy = (0.5+(0.05*Math.sin((0.413*m.time))));
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
m.beatcounter = ifcond(above(m.beat, 0), (m.beatcounter+1), m.beatcounter);
m.beatcounter = ifcond(above(m.beatcounter, 8), 0, m.beatcounter);
m.beateven = mod(m.beatcounter,4);
m.mode = ifcond(m.beat, mod(((m.mode+rand(3))+1),4), m.mode);
m.beateven = ifcond(equal(m.beateven, 3), -1, m.beateven);
m.beateven = ifcond(equal(m.beateven, 0), (0.1*(m.myx+m.myy)), m.beateven);
m.beateven = ifcond(equal(m.beateven, 2), (0.1*(-m.myx-m.myy)), m.beateven);
m.dx = ((0.1*m.beateven)*m.myx);
m.dy = ((0.1*m.beateven)*m.myy);
m.monitor = m.beateven;
m.wave_a = m.bass_thresh;
m.zoom = (1.5+(0.25*m.myy));
m.rot = (m.myx*m.beateven);
m.wave_x = (0.5+(0.05*m.myx));
m.wave_y = (0.5+(0.05*m.myy));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'wave_mystery = -0.5;\n' + 'vol = 0.167*(bass+mid);\n' + 'xamptarg = if(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'myx = 1.25*xpos + 0.5;\n' + 'yamptarg = if(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'myy = 1.25*ypos + 0.5;\n' + 'cx = 0.5 + 0.05*sin(0.497*time);\n' + 'cy = 0.5 +0.05*sin(0.413*time);\n' + 'volume = 0.15*(bass_att+bass+mid+mid_att);\n' + 'beatrate = if(equal(beatrate,0),1,if(below(volume,0.01),1,beatrate));\n' + 'lastbeat = if(equal(lastbeat,0),time,lastbeat);\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = if(above(bass_att,peakbass_att),bass_att,peakbass_att);\n' + 'beat = if(above(volume,0.8),if(below(peakbass_att - bass_att, 0.05*peakbass_att),if(above(time - lastbeat,0.1+0.5*(beatrate-0.1)),1,0),0),0);\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = if(equal(beat,0),if(above(time - lastbeat,2*beatrate),peakbass_att*0.95,peakbass_att*0.995),bass_att);\n' + 'lastbeat = if(beat,time,lastbeat);\n' + 'peakbass_att = max(if(beat,bass_att,peakbass_att),1.1*meanbass_att);\n' + 'beatcounter = if(above(beat,0),beatcounter +1, beatcounter);\n' + 'beatcounter = if(above(beatcounter,8), 0, beatcounter);\n' + 'beateven = beatcounter%4;\n' + 'mode = if(beat,(mode+rand(3)+1)%4,mode);\n' + 'beateven = if(equal(beateven,3),-1,beateven);\n' + 'beateven = if(equal(beateven,0),0.1*(myx+myy),beateven);\n' + 'beateven = if(equal(beateven,2),0.1*(-myx-myy),beateven);\n' + 'dx = 0.1*beateven*myx;\n' + 'dy = 0.1*beateven*myy;\n' + 'monitor = beateven;\n' + 'wave_a = Bass_thresh;\n' + 'zoom = 1.5 +0.25*myy;\n' + 'rot = myx*beateven;\n' + 'wave_x = 0.5 + 0.05*myx;\n' + 'wave_y=0.5 + 0.05*myy;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
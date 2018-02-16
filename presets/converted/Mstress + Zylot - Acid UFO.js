define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.980001,
		wave_g : 0.6,
		ib_g : 0.25,
		mv_x : 30.079998,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.491915,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 0.999005,
		ob_r : 0.0,
		sy : 0.999005,
		ib_size : 0.155,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.32,
		mv_dy : 0.42,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.77,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.02,
		wave_smoothing : 0.216,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.42,
		wave_y : 0.5,
		zoom : 1.001829,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.250001,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 3.199998,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.42,
		decay : 0.99,
		wave_a : 1.179297,
		ob_g : 0.0,
		ib_a : 0.27,
		wave_b : 0.6,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.q2 = 0;
m.q3 = 0;
m.meanbass_att = 0;
m.out_x = 0;
m.mrad = 0;
m.out_y = 0;
m.mx = 0;
m.mbass = 0;
m.my = 0;
m.lastbeat = 0;
m.runmeanbass = 0;
m.cdelay1 = 0;
m.oldx = 0;
m.xmovn = 0;
m.cdelay2 = 0;
m.oldy = 0;
m.ymovn = 0;
m.treble = 0;
m.counter1 = 0;
m.beatrate = 0;
m.counter2 = 0;
m.beat = 0;
m.colorcounter = 0;
m.volume = 0;
m.ymov = 0;
m.xmov = 0;
m.oldx = 0.5;
m.oldy = 0.5;
		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = Math.min(1, Math.max(0, (0.3*m.bass)));
m.wave_g = Math.min(1, Math.max(0, (0.3*m.mid)));
m.wave_b = Math.min(1, Math.max(0, (0.3*m.treb)));
m.counter1 = ifcond(equal(m.counter2, 1), ifcond(equal(m.counter1, 1), 0, (m.counter1+0.2)), 1);
m.counter2 = ifcond(equal(m.counter1, 1), ifcond(equal(m.counter2, 1), 0, (m.counter2+0.2)), 1);
m.cdelay1 = ifcond(equal(m.cdelay2, 1), 1, ifcond(equal(mod(m.colorcounter,2), 1), ifcond(equal(m.counter1, 1), 2, 0), ifcond(equal(m.counter2, 1), 2, 0)));
m.cdelay2 = ifcond(equal(m.cdelay1, 2), 1, 0);
m.colorcounter = ifcond(above(m.colorcounter, 7), 0, ifcond(equal(m.cdelay1, 1), (m.colorcounter+1), m.colorcounter));
m.ob_r = ifcond(equal(m.colorcounter, 1), 1, ifcond(equal(m.colorcounter, 2), 1, ifcond(equal(m.colorcounter, 3), 1, ifcond(equal(m.colorcounter, 4), Math.sin((m.counter2+2.1)), ifcond(equal(m.colorcounter, 5), 0, ifcond(equal(m.colorcounter, 6), 0, Math.sin(m.counter1)))))));
m.ob_g = ifcond(equal(m.colorcounter, 1), 0, ifcond(equal(m.colorcounter, 2), Math.sin((m.counter2*0.5)), ifcond(equal(m.colorcounter, 3), Math.sin(((m.counter1+1.75)*0.4)), ifcond(equal(m.colorcounter, 4), 1, ifcond(equal(m.colorcounter, 5), 1, ifcond(equal(m.colorcounter, 6), Math.sin((m.counter2+2)), 0))))));
m.ob_b = ifcond(equal(m.colorcounter, 1), Math.sin((m.counter1+2.1)), ifcond(equal(m.colorcounter, 2), 0, ifcond(equal(m.colorcounter, 3), 0, ifcond(equal(m.colorcounter, 4), 0, ifcond(equal(m.colorcounter, 5), Math.sin(m.counter1), ifcond(equal(m.colorcounter, 6), 1, 1))))));
m.mbass = Math.max(m.bass_att, 3);
m.xmovn = ((((0.1*rand(10))*m.mbass)*0.015)*(1-(2*above(rand(10), 5))));
m.ymovn = (pow((pow((m.mbass*0.015), 2)-pow(m.xmovn, 2)), div(1,2))*(1-(2*above(rand(10), 5))));
m.xmov = ifcond(m.beat, m.xmovn, (m.xmov*0.9));
m.ymov = ifcond(m.beat, m.ymovn, (m.ymov*0.9));
m.q1 = m.oldx;
m.q2 = m.oldy;
m.out_x = bor(above((m.q1+m.xmov), 0.9), below((m.q1+m.xmov), 0.1));
m.out_y = bor(above((m.q2+m.ymov), 0.9), below((m.q2+m.ymov), 0.1));
m.xmov = (m.xmov+((-2*m.xmov)*m.out_x));
m.ymov = (m.ymov+((-2*m.ymov)*m.out_y));
m.wave_x = (m.q1+m.xmov);
m.wave_y = (m.q2+m.ymov);
m.q1 = m.wave_x;
m.q2 = m.wave_y;
m.oldx = m.q1;
m.oldy = m.q2;
m.decay = (m.decay-(0.91*m.treble));
m.volume = ((0.3*m.bass)+m.mid);
m.beatrate = (equal(m.beatrate, 0)+((1-equal(m.beatrate, 0))*(below(m.volume, 0.01)+((1-below(m.volume, 0.01))*m.beatrate))));
m.lastbeat = (m.lastbeat+(equal(m.lastbeat, 0)*m.time));
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.runmeanbass = div(((m.runmeanbass*2)+m.bass_att),3);
m.peakbass_att = Math.max(m.bass_att, m.peakbass_att);
m.beat = (((above(m.volume, 0.8)*above(m.bass_att, (m.runmeanbass*1.1)))*below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)))*above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))));
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ((m.beat*m.bass_att)+(((1-m.beat)*m.peakbass_att)*((above((m.time-m.lastbeat), (2*m.beatrate))*0.95)+((1-above((m.time-m.lastbeat), (2*m.beatrate)))*0.995))));
m.lastbeat = ((m.beat*m.time)+((1-m.beat)*m.lastbeat));
m.peakbass_att = Math.max(m.peakbass_att, (1.1*m.meanbass_att));
m.q3 = (m.volume+m.treb);
m.monitor = m.meanbass_att;
		m.rkeys = ['dy','dx','zoom','rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.mx = (m.x-m.q1);
m.my = (m.y-(1-m.q2));
m.mrad = (pow((pow(m.mx, 2)+pow(m.my, 2)), 0.5)*pow(2, 0.5));
m.cx = m.q1;
m.cy = (1-m.q2);
m.rot = ((m.rot+((((below((m.mrad-0.18), 0)*0.5)*Math.sin((m.mrad*40)))*(m.mrad-0.1))*40))-(((((above((m.mrad-0.18), 0)*0.3)*Math.sin((m.mrad*2)))*(m.mrad-0.1))*Math.sin((((m.cx-0.5)*(m.cy-0.5))*6.28)))*m.q3));
m.zoom = (m.zoom-(((above((m.mrad-0.18), 0)*0.05)*m.mrad)*m.q3));
m.dx = (m.dx+((below((m.mrad-0.18), 0)*0.015)*div(m.mx,m.mrad)));
m.dy = (m.dy+((below((m.mrad-0.18), 0)*0.015)*div(m.my,m.mrad)));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('oldx=.5;\n' + 'oldy=.5;'),
	'frame_eqs_str' : ('warp = 0;\n' + 'wave_r = min(1,max(0,0.3*bass));\n' + 'wave_g = min(1,max(0,0.3*mid));\n' + 'wave_b = min(1,max(0,0.3*treb));\n' + 'counter1 = if(equal(counter2,1),if(equal(counter1,1),0,counter1+.2),1);\n' + 'counter2 = if(equal(counter1,1),if(equal(counter2,1),0,counter2+.2),1);\n' + 'cdelay1 = if(equal(cdelay2,1),1,if(equal(colorcounter%2,1),if(equal(counter1,1),2 ,0), if(equal(counter2,1),2,0)));\n' + 'cdelay2 = if(equal(cdelay1,2),1,0);\n' + 'colorcounter = if(above(colorcounter,7),0,if(equal(cdelay1,1),colorcounter+1,colorcounter));\n' + 'ob_r = if(equal(colorcounter,1),1, if(equal(colorcounter,2),1, if(equal(colorcounter,3),1, if(equal(colorcounter,4),sin(counter2+2.1), if(equal(colorcounter,5),0, if(equal(colorcounter,6),0,sin(counter1)))))));\n' + 'ob_g = if(equal(colorcounter,1),0, if(equal(colorcounter,2),sin(counter2*.5), if(equal(colorcounter,3),sin((counter1+1.75)*.4), if(equal(colorcounter,4),1, if(equal(colorcounter,5),1, if(equal(colorcounter,6),sin(counter2+2),0))))));\n' + 'ob_b = if(equal(colorcounter,1),sin(counter1+2.1), if(equal(colorcounter,2),0, if(equal(colorcounter,3),0, if(equal(colorcounter,4),0, if(equal(colorcounter,5),sin(counter1), if(equal(colorcounter,6),1,1))))));\n' + 'mbass=max(bass_att,3);\n' + 'xmovn = 0.1*rand(10)*mbass*0.015*(1-2*above(rand(10),5));\n' + 'ymovn = pow(pow(mbass*0.015,2)-pow(xmovn,2),1/2)*(1-2*above(rand(10),5));\n' + 'xmov = if(beat,xmovn,xmov*.9);\n' + 'ymov = if(beat,ymovn,ymov*.9);\n' + 'q1=oldx;\n' + 'q2=oldy;\n' + 'out_x = bor(above(q1+xmov,.9),below(q1+xmov,.1));\n' + 'out_y = bor(above(q2+ymov,.9),below(q2+ymov,.1));\n' + 'xmov = xmov + (-2*xmov*out_x);\n' + 'ymov = ymov + (-2*ymov*out_y);\n' + 'wave_x =  q1+xmov ;\n' + 'wave_y = q2+ymov;\n' + 'q1=wave_x;\n' + 'q2=wave_y;\n' + 'oldx = q1;\n' + 'oldy = q2;\n' + 'decay = decay - 0.91*(treble);\n' + 'volume = 0.3*bass+mid;\n' + 'beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);\n' + 'lastbeat = lastbeat + equal(lastbeat,0)*time;\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'runmeanbass =(runmeanbass*2 + bass_att)/3;\n' + 'peakbass_att = max(bass_att,peakbass_att);\n' + 'beat = above(volume,0.8)*above(bass_att,runmeanbass*1.1)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.95 + (1-above(time - lastbeat, 2*beatrate))*0.995);\n' + 'lastbeat = beat*time + (1-beat)*lastbeat;\n' + 'peakbass_att = max(peakbass_att,1.1*meanbass_att);\n' + 'q3=volume+treb;\n' + 'monitor =meanbass_att;'),
	'pixel_eqs_str' : ('mx= x-q1;\n' + 'my = y-(1-q2);\n' + 'mrad = pow(pow(mx,2)+pow(my,2),0.5)*pow(2,0.5);\n' + 'cx = q1;\n' + 'cy = 1-q2;\n' + 'rot= rot + below(mrad-0.18,0)*0.5*sin(mrad*40)*(mrad-0.1)*40- above(mrad-0.18,0)*0.3*sin(mrad*2)*(mrad-0.1)*sin((cx-0.5)*(cy-0.5)*6.28)*q3;\n' + 'zoom= zoom - above(mrad-0.18,0)*0.05*mrad*q3;\n' + 'dx = dx +below(mrad-0.18,0)*0.015*(mx/mrad);\n' + 'dy = dy +below(mrad-0.18,0)*0.015*(my/mrad);'),
};

return pmap;
});
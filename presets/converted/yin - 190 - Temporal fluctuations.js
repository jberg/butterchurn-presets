define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 4.990001,
		wave_g : 0.4,
		ib_g : 0.0,
		mv_x : 8.960042,
		warpscale : 0.999998,
		brighten : 0.0,
		mv_y : 12.960033,
		wave_scale : 1.990516,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.300001,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.999987,
		mv_dx : -0.26,
		mv_dy : 0.44,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.400001,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.999988,
		ob_size : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 1.0,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 0.100001,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.3,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 1.0,
		decay : 1.0,
		wave_a : 0.997938,
		ob_g : 1.0,
		ib_a : 0.5,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 5.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.prevvol = 0;
m.q1 = 0;
m.toty = 0;
m.q2 = 0;
m.dbass = 0;
m.prevrot = 0;
m.ttan1 = 0;
m.interval = 0;
m.ttan2 = 0;
m.f = 0;
m.dist = 0;
m.amt = 0;
m.isleftytonosy = 0;
m.lastbeat = 0;
m.pbass = 0;
m.vol = 0;
m.cheat = 0;
m.sure = 0;
m.beat = 0;
m.totx = 0;
m.maxdbass = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.decay = 1;
m.wave_mystery = 0;
m.vol = div((div(((m.bass_att+m.mid_att)+m.treb_att),3)+m.prevvol),2);
m.sure = ifcond(equal(m.sure, 0), 0.6, m.sure);
m.interval = ifcond(equal(m.interval, 0), 40, m.interval);
m.lastbeat = ifcond(equal(m.lastbeat, 0), (m.frame-m.fps), m.lastbeat);
m.dbass = div((m.bass-m.pbass),m.fps);
m.beat = (above(m.dbass, (0.6*m.maxdbass))*above((m.frame-m.lastbeat), div(m.fps,3)));
m.sure = ifcond((m.beat*below(Math.abs((m.frame-(m.interval+m.lastbeat))), div(m.fps,5))), Math.min((0.095+m.sure), 1), ((m.beat*(m.sure-0.095))+(((1-m.beat)*m.sure)*0.9996)));
m.sure = Math.max(0.5, m.sure);
m.cheat = ifcond((above(m.frame, ((m.lastbeat+m.interval)+Math.floor(div(m.fps,10))))*above(m.sure, 0.91)), 1, m.cheat);
m.beat = ifcond(m.cheat, 1, m.beat);
m.sure = ifcond(m.cheat, (0.95*m.sure), m.sure);
m.maxdbass = Math.max((m.maxdbass*0.999), m.dbass);
m.maxdbass = Math.max(0.012, m.maxdbass);
m.maxdbass = Math.min(0.02, m.maxdbass);
m.interval = ifcond(m.beat, (m.frame-m.lastbeat), m.interval);
m.lastbeat = ifcond(m.beat, (m.frame-(m.cheat*Math.floor(div(m.fps,10)))), m.lastbeat);
m.cheat = 0;
m.pbass = m.bass;
m.ob_size = div(((below((m.frame-m.lastbeat), div(m.fps,8))*0.08)*(m.frame-m.lastbeat)),m.fps);
m.f = Math.abs(Math.cos(((div(m.time,8)+0.54)+Math.sin((div(m.time,3)+1.075)))));
m.ob_r = ((1*m.f)+(1*(1-m.f)));
m.ob_g = ((0.3*m.f)+(1*(1-m.f)));
m.ob_b = ((0.3*m.f)+(0.3*(1-m.f)));
m.q1 = div((3.1416*(m.wave_mystery+1)),2);
m.q2 = (0.25*Math.cos((m.time+(Math.abs(((2*Math.sin(((m.time*2)+2.311)))*(m.vol-m.amt)))*Math.sin(((m.time*7.45)+0.876))))));
m.amt = (m.amt+(0.05*(m.vol-m.amt)));
m.prevvol = m.vol;
		m.rkeys = ['dx','dy'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.x = (m.x-0.5);
m.y = -(m.y-0.5);
m.ttan1 = (((Math.tan((m.q1+1.5708))*m.x)-m.y)+m.q2);
m.ttan2 = Math.tan((m.q1+1.5708));
m.isleftytonosy = above((m.ttan1*sign((3.1416-m.q1))), 0);
m.dist = div(Math.abs(m.ttan1),sqrt(((m.ttan2*m.ttan2)+1)));
m.totx = div((((0.5*Math.cos(m.q1))*sign((m.isleftytonosy-0.5)))*sqr(m.dist)),(0.5-m.q2));
m.toty = div((((-0.5*Math.sin(m.q1))*sign((m.isleftytonosy-0.5)))*sqr(m.dist)),(0.5-m.q2));
m.dx = (m.dx+m.totx);
m.dy = (m.dy+m.toty);
m.prevrot = m.q1;
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'decay=1;\n' + 'wave_mystery=0;\n' + 'vol = ((bass_att+mid_att+treb_att)/3+prevVol)/2;\n' + 'sure=if(equal(sure,0),.6,sure);\n' + 'interval=if(equal(interval,0),40,interval);\n' + 'lastbeat=if(equal(lastbeat,0),frame-FPS,lastbeat);\n' + 'dbass=(bass-pbass)/FPS;\n' + 'beat=above(dbass,.6*maxdbass)*above(frame-lastbeat,FPS/3);\n' + 'sure=if(beat*below(abs(frame-(interval+lastbeat)),FPS/5),min(.095+sure,1),beat*(sure-.095)+(1-beat)*sure*.9996);\n' + 'sure=max(.5,sure);\n' + 'cheat=if(above(frame,lastbeat+interval+ int(FPS/10))*above(sure,.91),1,cheat);\n' + 'beat=if(cheat,1,beat);\n' + 'sure=if(cheat,.95*sure,sure);\n' + 'maxdbass=max(maxdbass*.999,dbass);\n' + 'maxdbass=max(.012,maxdbass);\n' + 'maxdbass=min(.02,maxdbass);\n' + 'interval=if(beat, frame-lastbeat,interval);\n' + 'lastbeat=if(beat,frame-cheat*int(FPS/10),lastbeat);\n' + 'cheat=0;\n' + 'pbass=bass;\n' + 'ob_size = below(frame-lastBeat,FPS/8)*.08*(frame-lastBeat)/FPS;\n' + 'f=abs(cos(time/8+.54+sin(time/3+1.075)));\n' + 'ob_r=1*f + 1*(1-f);\n' + 'ob_g=.3*f + 1*(1-f);\n' + 'ob_b=.3*f + .3*(1-f);\n' + 'q1= 3.1416*(wave_mystery+1)/2;\n' + 'q2=.25*cos(time+abs(2*sin(time*2+2.311)*( vol-amt))*sin(time*7.45+.876));\n' + 'amt=amt+ .05*(vol-amt);\n' + 'prevVol=vol;'),
	'pixel_eqs_str' : ('x=x-.5;\n' + 'y=-(y-.5);\n' + 'ttan1 = tan(q1+1.5708)*x-y+q2;\n' + 'ttan2 = tan(q1+1.5708);\n' + 'IsLeftYtonosY = above(ttan1*(sign(3.1416-q1)),0);\n' + 'dist = abs(ttan1)/sqrt(ttan2*ttan2 + 1);\n' + 'totX=.5*cos(q1)*sign(IsLeftYtonosY-.5)*sqr(dist)/(.5-q2);\n' + 'totY=-.5*sin(q1)*sign(IsLeftYtonosY-.5)*sqr(dist)/(.5-q2);\n' + 'dx=dx+totX;\n' + 'dy=dy+totY;\n' + 'prevRot=q1;'),
};

return pmap;
});
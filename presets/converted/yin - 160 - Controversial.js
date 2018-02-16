define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.700001,
		wave_g : 1.0,
		ib_g : 0.07,
		mv_x : 1.92,
		warpscale : 4.108018,
		brighten : 0.0,
		mv_y : 1.44,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.07,
		sy : 1.0,
		ib_size : 0.01,
		warp : 1.011847,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.196128,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 1.0,
		ib_r : 0.07,
		mv_b : 1.0,
		echo_zoom : 0.999991,
		ob_size : 0.005,
		wave_smoothing : 0.9,
		warpanimspeed : 10.572172,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.07,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.4,
		decay : 1.0,
		wave_a : 0.997938,
		ob_g : 1.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 1.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.5,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.aa = 0;
m.q1 = 0;
m.dbass = 0;
m.q5 = 0;
m.interval = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.curscale = 0;
m.lastbeat = 0;
m.pbass = 0;
m.cursc = 0;
m.cheat = 0;
m.sure = 0;
m.beat = 0;
m.curang = 0;
m.maxdbass = 0;
m.time = 0;
		return m;
	},
	'frame_eqs' : function(m) {
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
m.q1 = m.beat;
m.warp = 0;
m.q8 = div(55,m.fps);
m.q7 = Math.min(div((m.frame-m.lastbeat),m.interval), 1);
m.aa = (m.aa+m.beat);
m.wave_g = m.q7;
m.wave_b = m.q7;
m.curang = ((0.97*m.curang)-(((m.q1*(0.4+div((Math.max(m.bass, 1.5)*rand(20)),100)))*(-1+(2*mod(m.aa,2))))*m.q8));
m.cursc = ((1+(0.97*m.curscale))+((m.q8*0.3)*m.beat));
m.sx = m.cursc;
m.sy = (1-(m.cursc-1));
m.decay = (1-(0.2*m.beat));
m.ob_a = (0.2*m.beat);
m.ib_a = (0.3*m.beat);
m.q6 = (below(mod(m.aa,4), 2)*ifcond(equal(mod(m.aa,2), 0), 1, -1));
m.q5 = (above(mod(m.aa,4), 1)*ifcond(equal(mod(m.aa,2), 0), -1, 1));
m.wave_x = (0.5+((0.03*m.q7)*m.q6));
m.wave_y = (0.5+((0.03*m.q7)*m.q5));
m.rot = m.curang;
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.x = (m.x-0.5);
m.y = (1-(m.y+0.5));
m.zoom = (m.zoom-(((0.1*m.q8)*below(m.rad, 0.7))*(1+(0.5*(1-m.q7)))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('time=0;'),
	'frame_eqs_str' : ('sure=if(equal(sure,0),.6,sure);\n' + 'interval=if(equal(interval,0),40,interval);\n' + 'lastbeat=if(equal(lastbeat,0),frame-FPS,lastbeat);\n' + 'dbass=(bass-pbass)/FPS;\n' + 'beat=above(dbass,.6*maxdbass)*above(frame-lastbeat,FPS/3);\n' + 'sure=if(beat*below(abs(frame-(interval+lastbeat)),FPS/5),min(.095+sure,1),beat*(sure-.095)+(1-beat)*sure*.9996);\n' + 'sure=max(.5,sure);\n' + 'cheat=if(above(frame,lastbeat+interval+ int(FPS/10))*above(sure,.91),1,cheat);\n' + 'beat=if(cheat,1,beat);\n' + 'sure=if(cheat,.95*sure,sure);\n' + 'maxdbass=max(maxdbass*.999,dbass);\n' + 'maxdbass=max(.012,maxdbass);\n' + 'maxdbass=min(.02,maxdbass);\n' + 'interval=if(beat, frame-lastbeat,interval);\n' + 'lastbeat=if(beat,frame-cheat*int(FPS/10),lastbeat);\n' + 'cheat=0;\n' + 'pbass=bass;\n' + 'q1=beat;\n' + 'warp=0;\n' + 'q8=55/FPS;\n' + 'q7=min((frame-lastBeat)/interval,1);\n' + 'aa=aa+beat;\n' + 'wave_g=q7;\n' + 'wave_b=q7;\n' + 'curang=.97*curang- (q1*(.4+max(bass,1.5)*rand(20)/100)*(-1+2*(aa%2)))*q8;\n' + 'cursc=1+.97*curscale+q8*.3*beat;\n' + 'sx=cursc;\n' + 'sy=1-(cursc-1);\n' + 'decay=1-.2*beat;\n' + 'ob_a=.2*beat;\n' + 'ib_a=.3*beat;\n' + 'q6=below(aa%4,2)*if(equal(aa%2,0),1,-1);\n' + 'q5=above(aa%4,1)*if(equal(aa%2,0),-1,1);\n' + 'wave_x=.5+.03*q7*q6;\n' + 'wave_y=.5+.03*q7*q5;\n' + 'rot = curang;'),
	'pixel_eqs_str' : ('x=x-.5;\n' + 'y=1-(y+.5);\n' + 'zoom=zoom-.1*q8*(below(rad,.7))*(1+.5*(1-q7));'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.26,
		wave_g : 0.25,
		ib_g : 0.0,
		mv_x : 32.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.901646,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.5,
		sy : 1.0,
		ib_size : 0.025,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 2.216679,
		mv_dx : 0.3,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.99999,
		ob_size : 0.05,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
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
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.5,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.5,
		decay : 0.99,
		wave_a : 0.997938,
		ob_g : 0.5,
		ib_a : 0.0,
		wave_b : 0.250001,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 5.0,
		modwavealphastart : 0.5,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.dbass = 0;
m.interval = 0;
m.lastbeat = 0;
m.pbass = 0;
m.midphase = 0;
m.cheat = 0;
m.sure = 0;
m.beat = 0;
m.phase = 0;
m.maxdbass = 0;

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
m.wave_r = (0.8*Math.abs(Math.cos((((0.07*m.time)+0.532)+Math.sin(((0.125*m.time)+0.789))))));
m.wave_g = (0.8*Math.abs(Math.cos((((0.092*m.time)+2.1)+Math.sin(((0.045*m.time)+1.52))))));
m.wave_b = (0.8*Math.abs(Math.cos((((0.1*m.time)+1.452)+Math.sin(((0.112*m.time)+2.98))))));
m.q1 = m.beat;
m.ib_a = m.beat;
m.ib_r = (1-m.wave_r);
m.ib_g = (1-m.wave_g);
m.ib_b = (1-m.wave_b);
m.wave_mystery = (1-(1.5*Math.min(div((m.frame-m.lastbeat),m.interval), 1)));
m.wave_a = ifcond(above(div((m.frame-m.lastbeat),m.interval), 1), 0, 1);
m.phase = ifcond(equal(mod(m.frame,m.interval), 0), (m.phase+1), m.phase);
m.phase = ifcond(equal(mod(m.phase,18), 17), 0, m.phase);
m.midphase = Math.min(div((m.frame-m.lastbeat),m.interval), 1);
m.sx = ifcond((equal(m.phase, 15)*equal(mod(m.frame,m.interval), 0)), -1, m.sx);
m.sy = ifcond((equal(m.phase, 26)*equal(mod(m.frame,m.interval), 0)), -1, m.sy);
m.phase = ifcond((equal(mod(m.frame,m.interval), 0)*below(Math.cos(div(m.time,6)), -0.5)), (mod((m.phase+rand(13)),14)+1), m.phase);
m.q2 = m.phase;
m.q3 = m.midphase;
		m.rkeys = ['dx','dy','sy','sx','rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1+(0.01*Math.sin((13.28*m.rad))));
m.zoom = (m.zoom+(((equal(m.q2, 1)*m.q3)*0.1)*(m.x-0.5)));
m.zoom = (m.zoom+(((equal(m.q2, 2)*m.q3)*0.1)*(0.5-m.x)));
m.zoom = (m.zoom+(((equal(m.q2, 5)*m.q3)*0.1)*(0.5-m.y)));
m.zoom = (m.zoom+(((equal(m.q2, 4)*m.q3)*0.1)*(m.y-0.5)));
m.rot = (m.rot+((equal(m.q2, 3)*m.q3)*0.3));
m.rot = (m.rot-((equal(m.q2, 6)*m.q3)*0.3));
m.sx = (m.sx+((equal(m.q2, 7)*m.q3)*0.2));
m.sy = (m.sy-((equal(m.q2, 8)*m.q3)*0.2));
m.sx = (m.sx-((equal(m.q2, 9)*m.q3)*0.2));
m.sy = (m.sy+((equal(m.q2, 10)*m.q3)*0.2));
m.dy = (m.dy+((((equal(m.q2, 11)*Math.abs((0.5-m.x)))*sign((0.5-m.x)))*m.q3)*0.2));
m.dx = (m.dx+((((equal(m.q2, 12)*Math.abs((0.5-m.y)))*sign((0.5-m.y)))*m.q3)*0.2));
m.dx = (m.dx-((((equal(m.q2, 14)*Math.abs((0.5-m.y)))*sign((0.5-m.y)))*m.q3)*0.2));
m.dy = (m.dy-((((equal(m.q2, 13)*Math.abs((0.5-m.x)))*sign((0.5-m.x)))*m.q3)*0.2));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('sure=if(equal(sure,0),.6,sure);\n' + 'interval=if(equal(interval,0),40,interval);\n' + 'lastbeat=if(equal(lastbeat,0),frame-FPS,lastbeat);\n' + 'dbass=(bass-pbass)/FPS;\n' + 'beat=above(dbass,.6*maxdbass)*above(frame-lastbeat,FPS/3);\n' + 'sure=if(beat*below(abs(frame-(interval+lastbeat)),FPS/5),min(.095+sure,1),beat*(sure-.095)+(1-beat)*sure*.9996);\n' + 'sure=max(.5,sure);\n' + 'cheat=if(above(frame,lastbeat+interval+ int(FPS/10))*above(sure,.91),1,cheat);\n' + 'beat=if(cheat,1,beat);\n' + 'sure=if(cheat,.95*sure,sure);\n' + 'maxdbass=max(maxdbass*.999,dbass);\n' + 'maxdbass=max(.012,maxdbass);\n' + 'maxdbass=min(.02,maxdbass);\n' + 'interval=if(beat, frame-lastbeat,interval);\n' + 'lastbeat=if(beat,frame-cheat*int(FPS/10),lastbeat);\n' + 'cheat=0;\n' + 'pbass=bass;\n' + 'wave_r = .8*abs(cos( .07*time+.532 + sin( .125*time+.789) ));\n' + 'wave_g = .8*abs(cos( .092*time+2.1 + sin( .045*time+1.52) ));\n' + 'wave_b = .8*abs(cos( .1*time+1.452 + sin( .112*time+2.98) ));\n' + 'q1=beat;\n' + 'ib_a=beat;\n' + 'ib_r=1-wave_r;\n' + 'ib_g=1-wave_g;\n' + 'ib_b=1-wave_b;\n' + 'wave_mystery = 1-1.5*min(((frame-lastBeat)/interval),1);\n' + 'wave_a=if(above((frame-lastBeat)/interval,1),0,1);\n' + 'phase=if(equal(frame%interval,0),phase+1,phase);\n' + 'phase=if(equal(phase%18,17),0,phase);\n' + 'midphase=min((frame-lastBeat)/interval,1);\n' + 'sx=if(equal(phase,15)*equal(frame%interval,0),-1,sx);\n' + 'sy=if(equal(phase,26)*equal(frame%interval,0),-1,sy);\n' + 'phase = if(equal(frame%interval,0)*below(cos(time/6), -.5), (phase+rand(13))%14+1,phase);\n' + 'q2=phase;\n' + 'q3=midphase;'),
	'pixel_eqs_str' : ('zoom =1+.01*sin(13.28*rad);\n' + 'zoom=zoom+equal(q2,1)*q3*.1*(x-.5);\n' + 'zoom=zoom+equal(q2,2)*q3*.1*(.5-x);\n' + 'zoom=zoom+equal(q2,5)*q3*.1*(.5-y);\n' + 'zoom=zoom+equal(q2,4)*q3*.1*(y-.5);\n' + 'rot=rot+equal(q2,3)*q3*.3;\n' + 'rot=rot-equal(q2,6)*q3*.3;\n' + 'sx=sx+equal(q2,7)*q3*.2;\n' + 'sy=sy-equal(q2,8)*q3*.2;\n' + 'sx=sx-equal(q2,9)*q3*.2;\n' + 'sy=sy+equal(q2,10)*q3*.2;\n' + 'dy=dy+equal(q2,11)*abs(.5-x)*sign(.5-x)*q3*.2;\n' + 'dx=dx+equal(q2,12)*abs(.5-y)*sign(.5-y)*q3*.2;\n' + 'dx=dx-equal(q2,14)*abs(.5-y)*sign(.5-y)*q3*.2;\n' + 'dy=dy-equal(q2,13)*abs(.5-x)*sign(.5-x)*q3*.2;'),
};

return pmap;
});
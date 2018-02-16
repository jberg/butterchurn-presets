define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.050001,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.005319,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.078303,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.1,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 0.99663,
		ob_size : 0.5,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999902,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 2.0,
		wave_mystery : 0.0,
		decay : 0.975,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 2.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.b = 0;
m.q3 = 0;
m.dbass = 0;
m.q4 = 0;
m.interval = 0;
m.f = 0;
m.beat_avg = 0;
m.lastbeat = 0;
m.m = 0;
m.pbass = 0;
m.endframe = 0;
m.cheat = 0;
m.t = 0;
m.sure = 0;
m.beat = 0;
m.max_bass = 0;
m.trig = 0;
m.maxdbass = 0;
m.max_bass = 1.2;
		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = m.mv_b;
m.wave_b = m.mv_g;
m.wave_g = m.mv_r;
m.b = Math.max((m.bass-1), 0);
m.m = Math.max((m.mid-1), 0);
m.t = Math.max((m.treb-1), 0);
m.mv_r = ((0.6*Math.abs(Math.sin((((m.time*2.6)+1.23)+Math.cos(((m.time*4.87)+2.145))))))+div(m.b,30));
m.mv_g = ((0.6*Math.abs(Math.sin((((m.time*4.451)+2.89)+Math.cos(((m.time*3.74)+0.78))))))+div(m.m,30));
m.mv_b = ((0.6*Math.abs(Math.sin((((m.time*3.845)+1.23)+Math.cos(((m.time*2.6)+3))))))+div(m.t,30));
m.q1 = (3.14*Math.cos((((m.time*1.45)+1.54)+Math.cos((((m.bass_att*0.1)+m.time)+3.22)))));
m.q2 = (3.14*Math.cos((((m.time*2.4)+2.69)+Math.cos((((m.bass_att*0.1)+m.time)+0.65)))));
m.q3 = mod(m.time,50);
m.f = ifcond(equal(m.endframe, 0), 1, 0);
m.beat_avg = ifcond(equal(m.beat_avg, 0), m.bass, m.beat_avg);
m.beat_avg = div((m.beat_avg+m.bass),2);
m.max_bass = ifcond((m.beat*above((m.f*m.bass_att), m.max_bass)), (0.99*m.bass_att), m.max_bass);
m.max_bass = ifcond(equal(mod(m.frame,3000), 0), (0.8*m.max_bass), (m.max_bass*0.9999));
m.max_bass = ifcond(above(m.max_bass, (10*m.beat_avg)), (10*m.beat_avg), m.max_bass);
m.trig = ifcond((equal(m.beat, 1)*above(m.bass_att, m.max_bass)), 1, 0);
m.endframe = ifcond((equal(m.trig, 1)*equal(m.endframe, 0)), (m.frame+(4*Math.min(m.interval, m.fps))), m.endframe);
m.trig = ifcond(equal(m.frame, m.endframe), 0, m.trig);
m.endframe = ifcond(above(m.frame, m.endframe), 0, m.endframe);
m.q4 = ifcond(above(m.endframe, 0), 1, 0);
m.wave_a = 0;
m.rot = (0.1*Math.sin(((m.time*1.53)+Math.cos(((m.time*4.676)+3.43)))));
m.rot = (m.rot*(1+(0.4*m.q4)));
m.ob_size = (0.3+(0.7*Math.abs(Math.cos((((m.time*2.45)+1.566)+Math.sin(((m.time*5)+2.43)))))));
m.ob_r = (m.mv_r*div(rand(100),100));
m.ob_g = (m.mv_g*div(rand(100),100));
m.ob_b = (m.mv_b*div(rand(100),100));
m.ob_a = (0.05*Math.abs(Math.cos((((m.time*2.45)+1.566)+Math.sin((m.time+2))))));
m.mv_x = ifcond(equal(m.q4, 1), (54+(10*Math.cos((m.time*10)))), 64);
m.zoom = ifcond(equal(rand((40+(60*m.q4))), 25), 1.6, m.zoom);
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
m.zoom = ifcond(equal(m.beat, 1), (m.zoom+(m.bass*0.7)), m.zoom);
m.monitor = m.sx;
		m.rkeys = ['zoom','dy','dx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = ifcond(below(Math.abs((m.ang-m.q1)), (0.4*sqrt(m.rad))), (m.dx+((1-m.q4)*((0.02*m.rad)*Math.sin(m.q1)))), m.dx);
m.dy = ifcond(below(Math.abs((m.ang-m.q1)), (0.4*sqrt(m.rad))), (m.dy+((1-m.q4)*((0.02*m.rad)*Math.cos(m.q1)))), m.dy);
m.zoom = ifcond(below(Math.abs((m.ang-m.q1)), (0.4*sqrt(m.rad))), (m.zoom+((1-m.q4)*((0.2*m.rad)*m.bass))), m.zoom);
m.dx = ifcond(below(Math.abs((m.ang-m.q2)), (0.4*sqrt(m.rad))), (m.dx+((1-m.q4)*((0.02*m.rad)*Math.sin(m.q2)))), m.dx);
m.dy = ifcond(below(Math.abs((m.ang-m.q2)), (0.4*sqrt(m.rad))), (m.dy+((1-m.q4)*((0.02*m.rad)*Math.cos(m.q2)))), m.dy);
m.zoom = ifcond(below(Math.abs((m.ang-m.q2)), (0.4*sqrt(m.rad))), (m.zoom+((1-m.q4)*((0.2*m.rad)*m.bass))), m.zoom);
m.zoom = ((m.zoom-(((1-m.q4)*0.04)*m.rad))+(m.q4*0.1));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('max_bass = 1.2;'),
	'frame_eqs_str' : ('wave_r = mv_b;\n' + 'wave_b = mv_g;\n' + 'wave_g = mv_r;\n' + 'b=max(bass-1,0);\n' + 'm=max(mid-1,0);\n' + 't=max(treb-1,0);\n' + 'mv_r=.6*abs(sin(time*2.6+1.23+cos(time*4.87+2.145)))+(b/30);\n' + 'mv_g=.6*abs(sin(time*4.451+2.89+cos(time*3.74+.78)))+(m/30);\n' + 'mv_b=.6*abs(sin(time*3.845+1.23+cos(time*2.6+3)))+(t/30);\n' + 'q1=(3.14*cos(time*1.45 + 1.54 + cos((bass_att*.1)+time+ 3.22)));\n' + 'q2=(3.14*cos(time*2.4 + 2.69 + cos((bass_att*.1)+time+.65)));\n' + 'q3=time%50;\n' + 'f=if(equal(endframe,0),1,0);\n' + 'beat_avg=if(equal(beat_avg,0),bass,beat_avg);\n' + 'beat_avg=(beat_avg+bass)/2;\n' + 'max_bass = if( beat*above(f*bass_att,max_bass),0.99*bass_att, max_bass );\n' + 'max_bass = if( equal(frame%3000,0),0.8*max_bass,max_bass*.9999);\n' + 'max_bass=if( above(max_bass,10*beat_avg),10*beat_avg,max_bass);\n' + 'trig=if( equal(beat,1)*above(bass_att,max_bass),1,0);\n' + 'endframe=if(equal(trig,1)*equal(endframe,0), frame+4*min(interval,FPS),endframe);\n' + 'trig=if(equal(frame,endframe),0,trig);\n' + 'endframe=if(above(frame,endframe),0,endframe);\n' + 'q4=if(above(endframe,0),1,0);\n' + 'wave_a=0;\n' + 'rot=.1*sin(time*1.53+cos(time*4.676+3.43));\n' + 'rot=rot*(1+.4*q4);\n' + 'ob_size=.3+.7*abs(cos(time*2.45 + 1.566 +sin(time*5 +2.43)));\n' + 'ob_r=mv_r*(rand(100)/100);\n' + 'ob_g=mv_g*(rand(100)/100);\n' + 'ob_b=mv_b*(rand(100)/100);\n' + 'ob_a=.05*abs(cos(time*2.45 + 1.566 +sin(time+2)));\n' + 'mv_x=if(equal(q4,1),54+10*cos(time*10),64);\n' + 'zoom=if(equal(rand(40+60*(q4)),25),1.6,zoom);\n' + 'sure=if(equal(sure,0),.6,sure);\n' + 'interval=if(equal(interval,0),40,interval);\n' + 'lastbeat=if(equal(lastbeat,0),frame-FPS,lastbeat);\n' + 'dbass=(bass-pbass)/FPS;\n' + 'beat=above(dbass,.6*maxdbass)*above(frame-lastbeat,FPS/3);\n' + 'sure=if(beat*below(abs(frame-(interval+lastbeat)),FPS/5),min(.095+sure,1),beat*(sure-.095)+(1-beat)*sure*.9996);\n' + 'sure=max(.5,sure);\n' + 'cheat=if(above(frame,lastbeat+interval+ int(FPS/10))*above(sure,.91),1,cheat);\n' + 'beat=if(cheat,1,beat);\n' + 'sure=if(cheat,.95*sure,sure);\n' + 'maxdbass=max(maxdbass*.999,dbass);\n' + 'maxdbass=max(.012,maxdbass);\n' + 'maxdbass=min(.02,maxdbass);\n' + 'interval=if(beat, frame-lastbeat,interval);\n' + 'lastbeat=if(beat,frame-cheat*int(FPS/10),lastbeat);\n' + 'cheat=0;\n' + 'pbass=bass;\n' + 'zoom = if(equal(beat,1),zoom+bass*.7,zoom);\n' + 'monitor=sx;'),
	'pixel_eqs_str' : ('dx= if( below( abs(ang-q1), .4*sqrt(rad)),dx+(1-q4)*(.02*rad*sin(q1)),dx);\n' + 'dy=if( below(abs(ang-q1),.4*sqrt(rad)),dy+(1-q4)*(.02*rad*cos(q1)),dy);\n' + 'zoom=if(below( abs(ang-q1),.4*sqrt(rad)),zoom+(1-q4)*(.2*rad*bass),zoom);\n' + 'dx= if( below( abs(ang-q2), .4*sqrt(rad)),dx+(1-q4)*(.02*rad*sin(q2)),dx);\n' + 'dy = if(below( abs(ang-q2),.4*sqrt(rad)),dy+(1-q4)*(.02*rad*cos(q2)),dy);\n' + 'zoom = if(below(abs(ang-q2),.4*sqrt(rad)),zoom+(1-q4)*(.2*rad*bass), zoom);\n' + 'zoom=zoom-(1-q4)*.04*rad +q4*.1;'),
};

return pmap;
});
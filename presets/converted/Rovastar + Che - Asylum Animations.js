define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.2,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.5,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.33,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 0.23,
		ib_r : 0.0,
		mv_b : 0.1,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.3,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.4,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.2,
		ib_b : 0.3,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.5,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.lastpulse = 0;
m.atx = 0;
m.aty = 0;
m.hccp = 0;
m.myrot = 0;
m.ccl = 0;
m.lastbeat = 0;
m.zone = 0;
m.beatfreq = 0;
m.dy_residual = 0;
m.sound = 0;
m.dx_residual = 0;
m.pulsefreq = 0;
m.bt = 0;
m.arad = 0;
m.th = 0;
m.beat = 0;
m.minorccl = 0;
m.le = 0;
m.aang = 0;
m.pulse = 0;
m.btblock = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.350*((0.60*Math.sin((0.825*m.time)))+(0.40*Math.sin((0.915*m.time))))));
m.wave_g = (m.wave_g+(0.350*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((1.025*m.time))))));
m.wave_b = (m.wave_b+(0.350*((0.60*Math.sin((0.810*m.time)))+(0.40*Math.sin((0.950*m.time))))));
m.wave_x = (0.5-div(Math.cos((m.time+m.dx_residual)),3.5));
m.wave_y = (0.5-div(Math.cos((m.time+m.dy_residual)),2.5));
m.cx = (m.cx+(0.225*((0.60*Math.sin((0.350*m.time)))+(0.40*Math.sin((0.350*m.time))))));
m.cy = (m.cy+(0.225*((0.60*Math.sin((0.350*m.time)))+(0.40*Math.sin((0.350*m.time))))));
m.dx = (0.005+(0.002*((0.60*Math.sin((0.234*m.time)))+(0.40*Math.sin((0.277*m.time))))));
m.dy = (0.005+(0.002*((0.60*Math.sin((0.234*m.time)))+(0.40*Math.sin((0.277*m.time))))));
m.dx_residual = (Math.max(m.bass, m.bass_att)-1);
m.dy_residual = (Math.min(m.bass, m.bass_att)-1);
m.dx = ifcond(above((m.bass_att+m.bass), 2.8), (6*m.dx), m.dx);
m.le = (((1.4*m.bass_att)+(0.1*m.bass))+(0.5*m.treb));
m.pulse = above(m.le, m.th);
m.pulsefreq = ifcond(equal(m.pulsefreq, 0), 2, ifcond(m.pulse, ((0.8*m.pulsefreq)+(0.2*(m.time-m.lastpulse))), m.pulsefreq));
m.lastpulse = ifcond(m.pulse, m.time, m.lastpulse);
m.bt = div((m.time-m.lastbeat),((0.5*m.beatfreq)+(0.5*m.pulsefreq)));
m.hccp = (div(0.03,(m.bt+0.2))+(0.5*ifcond(band(above(m.bt, 0.8), below(m.bt, 1.2)), (pow(Math.sin(((m.bt-1)*7.854)), 4)-1), 0)));
m.beat = band(above(m.le, (m.th+m.hccp)), m.btblock);
m.btblock = (1-above(m.le, (m.th+m.hccp)));
m.lastbeat = ifcond(m.beat, m.time, m.lastbeat);
m.beatfreq = ifcond(equal(m.beatfreq, 0), 2, ifcond(m.beat, ((0.8*m.beatfreq)+(0.2*(m.time-m.lastbeat))), m.beatfreq));
m.th = ifcond(above(m.le, m.th), ((m.le+div(114,(m.le+10)))-7.407), ((m.th+div((m.th*0.07),(m.th-12)))+((below(m.th, 2.7)*0.1)*(2.7-m.th))));
m.th = ifcond(above(m.th, 6), 6, m.th);
m.q3 = div(30,m.fps);
m.ccl = (m.ccl+m.beat);
m.minorccl = (m.minorccl+(0.01*m.le));
m.q4 = m.beat;
m.wave_r = ((0.5+(0.15*Math.sin((12*m.ccl))))+(0.35*Math.sin((3.62*m.minorccl))));
m.wave_g = ((0.5+(0.15*Math.sin((14*m.ccl))))+(0.35*Math.sin((7.38*m.minorccl))));
m.wave_b = ((0.5+(0.15*Math.sin((16*m.ccl))))+(0.35*Math.sin((5.21*m.minorccl))));
m.q1 = (0.5+(0.25*Math.sin(((17*m.ccl)+m.minorccl))));
m.cx = ifcond(m.beat, (0.5+(0.5*Math.sin((38*m.ccl)))), m.q1);
m.q2 = (0.5+(0.25*Math.sin(((17*m.ccl)+m.minorccl))));
m.cy = ifcond(m.beat, (0.5+(0.5*Math.sin((46*m.ccl)))), m.q2);
m.mv_x = 1.25;
m.mv_y = 1.25;
m.mv_dx = (m.q1-0.5);
m.mv_dy = (-1*(m.q2-0.5));
		m.rkeys = ['dx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.myrot = (((0.03*Math.sin((0.84*m.time)))-(0.013*Math.cos((0.784*m.time))))+(0.02*Math.sin((1-m.rad))));
m.rot = m.myrot;
m.aang = (Math.atan2((m.y-m.q2), (m.x-m.q1))-1.57);
m.arad = sqrt((sqr((m.y-m.q2))+sqr((m.x-m.q1))));
m.atx = (Math.cos(m.aang)*m.arad);
m.aty = (Math.sin(m.aang)*m.arad);
m.sound = ifcond(below(m.x, 0.5), (((2*m.x)*m.mid)+((1-(2*m.x))*m.bass)), ((((m.x-0.5)*2)*m.treb)+((1-((m.x-0.5)*2))*m.mid)));
m.sound = (m.sound*m.q3);
m.zone = (below(Math.abs((m.x-m.q1)), 0.15)*below(Math.abs((m.y-m.q2)), 0.15));
m.rot = ifcond(m.zone, (((m.bass*m.bass_att)*0.2)*pow(m.arad, m.arad)), m.myrot);
m.dx = ifcond(m.zone, 0, (m.dx+((0.01*m.rad)*m.sound)));
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
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.350*( 0.60*sin(0.825*time) + 0.40*sin(0.915*time) );\n' + 'wave_g = wave_g + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(1.025*time) );\n' + 'wave_b = wave_b + 0.350*( 0.60*sin(0.810*time) + 0.40*sin(0.950*time) );\n' + 'wave_x = 0.5-cos(time+dx_residual)/3.5;\n' + 'wave_y = 0.5-cos(time+dy_residual)/2.5;\n' + 'cx = cx + 0.225*( 0.60*sin(0.350*time) + 0.40*sin(0.350*time) );\n' + 'cy = cy + 0.225*( 0.60*sin(0.350*time) + 0.40*sin(0.350*time) );\n' + 'dx = 0.005 + 0.002*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );\n' + 'dy = 0.005 + 0.002*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );\n' + 'dx_residual=max(bass, bass_att)-1;\n' + 'dy_residual=min(bass, bass_att)-1;\n' + 'dx = if(above(bass_att+bass,2.8),6*dx,dx);\n' + 'le=1.4*bass_att+.1*bass+.5*treb;\n' + 'pulse=above(le,th);\n' + 'pulsefreq=if(equal(pulsefreq,0),2,if(pulse,.8*pulsefreq+.2*(time-lastpulse),pulsefreq));\n' + 'lastpulse=if(pulse,time,lastpulse);\n' + 'bt=(time-lastbeat)/(.5*beatfreq+.5*pulsefreq);\n' + 'hccp=(.03/(bt+.2))+.5*if(band(above(bt,.8),below(bt,1.2)),(pow(sin((bt-1)*7.854),4)-1),0);\n' + 'beat=band(above(le,th+hccp),btblock);\n' + 'btblock=1-above(le,th+hccp);\n' + 'lastbeat=if(beat,time,lastbeat);\n' + 'beatfreq=if(equal(beatfreq,0),2,if(beat,.8*beatfreq+.2*(time-lastbeat),beatfreq));\n' + 'th=if(above(le,th),le+114/(le+10)-7.407,th+th*.07/(th-12)+below(th,2.7)*.1*(2.7-th));\n' + 'th=if(above(th,6),6,th);\n' + 'q3=30/fps;\n' + 'ccl=ccl+beat;\n' + 'minorccl=minorccl+.01*le;\n' + 'q4=beat;\n' + 'wave_r=.5+.15*sin(12*ccl)+.35*sin(3.62*minorccl);\n' + 'wave_g=.5+.15*sin(14*ccl)+.35*sin(7.38*minorccl);\n' + 'wave_b=.5+.15*sin(16*ccl)+.35*sin(5.21*minorccl);\n' + 'q1=.5+.25*sin(17*ccl+minorccl);\n' + 'cx=if(beat,.5+.5*sin(38*ccl),q1);\n' + 'q2=.5+.25*sin(17*ccl+minorccl);\n' + 'cy=if(beat,.5+.5*sin(46*ccl),q2);\n' + 'mv_x = 1.25;\n' + 'mv_y = 1.25;\n' + 'mv_dx =q1-0.5;\n' + 'mv_dy = -1*(q2-0.5);'),
	'pixel_eqs_str' : ('myrot = 0.03*sin(0.84*time)-0.013*cos(0.784*time)+0.02*sin(1-rad);\n' + 'rot = myrot;\n' + 'aang=atan2(y-q2,x-q1)-1.57;\n' + 'arad=sqrt(sqr(y-q2)+sqr(x-q1));\n' + 'atx=cos(aang)*arad;\n' + 'aty=sin(aang)*arad;\n' + 'sound=if(below(x,.5),2*x*mid+(1-(2*x))*bass,(x-.5)*2*treb+(1-(x-.5)*2)*mid);\n' + 'sound=sound*q3;\n' + 'zone=below(abs(x-q1),.15)*below(abs(y-q2),.15);\n' + 'rot=if(zone,bass*bass_att*0.2*pow(arad,arad),myrot);\n' + 'dx = if(zone,0,dx+0.01*rad*sound);'),
};

return pmap;
});
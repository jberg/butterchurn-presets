define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.35,
		wave_g : 0.1,
		ib_g : 0.0,
		mv_x : 27.639999,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 20.799999,
		wave_scale : 0.2,
		echo_alpha : 1.0,
		additivewave : 0.0,
		sx : 0.61,
		ob_r : 0.0,
		sy : 0.644,
		ib_size : 0.0,
		warp : 0.0,
		red_blue : 0.0,
		wave_mode : 1.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.3,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 2.169307,
		ob_size : 0.05,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.68,
		wave_y : 0.78,
		zoom : 1.01,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.32,
		cx : 0.0,
		dy : 0.28,
		ob_a : 0.05,
		darken_center : 0.0,
		cy : 0.0,
		ob_b : 0.0,
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 2.0,
		wave_mystery : -1.0,
		decay : 1.0,
		wave_a : 0.9,
		ob_g : 0.0,
		ib_a : 0.5,
		wave_b : 0.3,
		ib_b : 0.5,
		mv_r : 1.0,
		rating : 3.0,
		modwavealphastart : 0.9,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.bc = 0;
m.avgvol = 0;
m.q2 = 0;
m.q3 = 0;
m.avgdt = 0;
m.q4 = 0;
m.const = 0;
m.rawbeatb = 0;
m.q5 = 0;
m.q6 = 0;
m.avgbbeatrate = 0;
m.q7 = 0;
m.beatb2 = 0;
m.q8 = 0;
m.ltreb = 0;
m.bool = 0;
m.lbass = 0;
m.beatb = 0;
m.dt = 0;
m.avgdb = 0;
m.vol = 0;
m.beatbhard = 0;
m.ph = 0;
m.mtime2 = 0;
m.lbbtime2 = 0;
m.lbbtime = 0;
m.mtime3 = 0;
m.mtime = 0;
m.mtime4 = 0;
m.phase = 0;
m.db = 0;
m.db = 0.001;
m.dt = 0.001;
m.avgdb = (m.bass-m.bass_att);
m.avgdt = (m.treb-m.treb_att);
m.lbass = 0;
m.ltreb = 0;
m.avgbbeatrate = 0.5;
m.beatb = 0;
m.beatb2 = 0;
m.lbbtime2 = m.time;
m.rawbeatb = 0;
m.lbbtime = m.time;
m.avgdb = 0.01;
m.vol = 0;
m.avgvol = 1;
m.ph = 0;
m.phase = 0;
m.bool = 0;
m.const = 0.01;
m.mtime = (100+(m.bass_att*1000));
m.mtime2 = (100+(m.treb_att*1000));
m.mtime4 = (1000+(m.treb*1000));
m.mtime3 = (1000+(m.bass*1000));
		return m;
	},
	'frame_eqs' : function(m) {
m.db = ((m.bass-m.lbass)*m.fps);
m.dt = ((m.treb-m.ltreb)*m.fps);
m.ltreb = m.treb;
m.lbass = m.bass;
m.avgdb = ((m.avgdb*0.9)+(Math.abs(m.db)*0.1));
m.avgdt = ((m.avgdt*0.9)+(Math.abs(m.dt)*0.1));
m.rawbeatb = above(Math.abs(m.db), m.avgdt);
m.beatb = (m.rawbeatb*above((m.time-m.lbbtime), (m.avgbbeatrate*0.75)));
m.beatb2 = (m.beatb*above(Math.abs(m.dt), m.avgdb));
m.beatbhard = (m.beatb2*(Math.abs(m.db)-(m.avgdb*3)));
m.avgbbeatrate = ((m.beatb*((m.avgbbeatrate*0.99)+((m.time-m.lbbtime)*0.01)))+((1-m.beatb)*(m.avgbbeatrate+((3-m.avgbbeatrate)*0.00001))));
m.lbbtime2 = ((m.time*m.beatb2)+((1-m.beatb2)*m.lbbtime2));
m.lbbtime = ((m.time*m.beatb)+((1-m.beatb)*m.lbbtime));
m.ph = (((m.time-m.lbbtime2)*div(60,m.avgbbeatrate))*m.const);
m.phase = Math.max(Math.min(m.ph, 1), 0);
m.const = ((m.const*(1-m.beatb2))+(m.beatb2*(m.const+(0.001*m.bool))));
m.bool = ((below(m.phase, 0.98)*(0.99-m.ph))-(above(m.phase, 0.98)*(m.ph*0.5)));
m.bc = ((m.bc+m.beatb)+m.beatb2);
m.vol = ((m.rawbeatb*Math.abs(m.db))*0.001);
m.avgvol = ((m.avgvol*0.999)+(m.vol*0.01));
m.mtime = (m.mtime+((Math.min((m.avgdt*0.01), 0.25)-((m.beatbhard*0.01)*m.dt))*div(1,m.fps)));
m.mtime2 = (m.mtime2+((Math.min((m.avgdb*0.01), 0.25)+((m.beatbhard*0.01)*m.db))*div(1,m.fps)));
m.mtime3 = (m.mtime3+((((m.avgvol*Math.abs(m.db))*m.q4)*0.0001)*div(1,m.fps)));
m.mtime4 = (m.mtime4+((((m.avgvol*Math.abs(m.dt))*m.q4)*0.0001)*div(1,m.fps)));
m.q3 = m.bc;
m.q4 = div(60,m.avgbbeatrate);
m.q5 = m.mtime;
m.q6 = m.mtime2;
m.q7 = m.mtime3;
m.q8 = m.mtime4;
m.wave_r = (m.wave_r+(0.500*((0.50*Math.sin(((0.0500*(m.q7-m.q5))*m.q4)))+(0.40*Math.sin((0.916*m.time))))));
m.wave_g = (m.wave_g+(0.500*((0.50*Math.sin(((0.0500*(m.q6-m.q8))*m.q4)))+(0.40*Math.sin((1.023*m.time))))));
m.wave_b = (m.wave_b+(0.500*((0.50*Math.sin(((0.0500*(m.q5-m.q7))*m.q4)))+(0.40*Math.sin((0.949*m.time))))));
m.decay = (m.decay-(0.00*equal(mod(m.frame,30), 0)));
m.q1 = (Math.sin(m.mtime3)*10);
m.q2 = (Math.sin(m.mtime2)*10);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0E-5,
			g : 0.1,
			scaling : 1.92,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.5,
			smoothing : 0.6,
			thick : 0.0,
			sep : 30.0,
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
			b : 0.0,
			g : 0.0,
			scaling : 2.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.50001,
			smoothing : 0.65,
			thick : 0.0,
			sep : 20.0,
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
			b : 0.5,
			g : 0.3,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 30.0,
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
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 60.0,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 2.011,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.36,
			additive : 0.0,
			border_a : 1.0,
			tex_capture : 1.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 3.0,
			x : 0.5,
			y : 0.5,
			ang : 5.215,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q3 = 0;
m.tex_capture = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.ang+m.q1);
m.tex_capture = (1-equal(mod((m.q3+8),16), 0));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=ang+q1;\n' + 'tex_capture=1-equal((q3+8)%16,0);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.7,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.377,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.788,
			additive : 0.0,
			border_a : 0.0,
			tex_capture : 1.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.401076,
			x : 0.5,
			y : 0.5,
			ang : 1.759,
			sides : 99.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.q3 = 0;
m.tex_capture = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.ang+m.q2);
m.tex_capture = (1-equal(mod(m.q3,16), 0));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=ang+q2;\n' + 'tex_capture=1-equal(q3%16,0);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.5,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.19,
			additive : 0.0,
			border_a : 0.0,
			tex_capture : 1.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 2.0,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 99.0,
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
			r2 : 1.0,
			a : 0.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			tex_capture : 1.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.0,
			x : 0.15,
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
	'init_eqs_str' : ('db=.001;\n' + 'dt=.001;\n' + 'avgdb=bass-bass_att;\n' + 'avgdt=treb-treb_att;\n' + 'lbass=0;\n' + 'ltreb=0;\n' + 'avgbbeatrate=.5;\n' + 'beatb=0;\n' + 'beatb2=0;\n' + 'lbbtime2=time;\n' + 'rawbeatb=0;\n' + 'lbbtime=time;\n' + 'avgdb=.01;\n' + 'vol=0;\n' + 'avgvol=1;\n' + 'ph=0;\n' + 'phase=0;\n' + 'bool=0;\n' + 'const=.01;\n' + 'mtime=100+bass_att*1000;\n' + 'mtime2=100+treb_att*1000;\n' + 'mtime4=1000+treb*1000;\n' + 'mtime3=1000+bass*1000;'),
	'frame_eqs_str' : ('db=(bass-lbass)*fps;\n' + 'dt=(treb-ltreb)*fps;\n' + 'ltreb=treb;\n' + 'lbass=bass;\n' + 'avgdb=avgdb*.9+abs(db)*.1;\n' + 'avgdt=avgdt*.9+abs(dt)*.1;\n' + 'rawbeatb=above(abs(db),avgdt);\n' + 'beatb=rawbeatb*above(time-lbbtime,avgbbeatrate*.75);\n' + 'beatb2=beatb*above(abs(dt),avgdb);\n' + 'beatbhard=beatb2*(abs(db)-avgdb*3);\n' + 'avgbbeatrate=beatb*(avgbbeatrate*.99+(time-lbbtime)*.01)+(1-beatb)*(avgbbeatrate+(3-avgbbeatrate)*.00001);\n' + 'lbbtime2=time*beatb2+(1-beatb2)*lbbtime2;\n' + 'lbbtime=time*beatb+(1-beatb)*lbbtime;\n' + 'ph=(time-lbbtime2)*(60/avgbbeatrate)*const;\n' + 'phase=max(min( ph, 1 ),0);\n' + 'const=const*(1-beatb2)+beatb2*( const+ (.001*bool) );\n' + 'bool=below(phase,.98)*(.99-ph)-above(phase,.98)*(ph*.5);\n' + 'bc=bc+beatb+beatb2;\n' + 'vol=(rawbeatb*abs(db)*.001);\n' + 'avgvol=avgvol*.999+vol*.01;\n' + 'mtime=mtime+(min(avgdt*.01,.25)-beatbhard*.01*dt)*(1/fps);\n' + 'mtime2=mtime2+(min(avgdb*.01,.25)+beatbhard*.01*db)*(1/fps);\n' + 'mtime3=mtime3+avgvol*abs(db)*q4*.0001*(1/fps);\n' + 'mtime4=mtime4+avgvol*abs(dt)*q4*.0001*(1/fps);\n' + 'q3=bc;\n' + 'q4=60/avgbbeatrate;\n' + 'q5=mtime;\n' + 'q6=mtime2;\n' + 'q7=mtime3;\n' + 'q8=mtime4;\n' + 'wave_r = wave_r + 0.500*( 0.50*sin(0.0500*(q7-q5)*q4) + 0.40*sin(0.916*time) );\n' + 'wave_g = wave_g + 0.500*( 0.50*sin(0.0500*(q6-q8)*q4) + 0.40*sin(1.023*time) );\n' + 'wave_b = wave_b + 0.500*( 0.50*sin(0.0500*(q5-q7)*q4) + 0.40*sin(0.949*time) );\n' + 'decay = decay - 0.00*equal(frame%30,0);\n' + 'q1=sin(mtime3)*10;\n' + 'q2=sin(mtime2)*10;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.4,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.011726,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.11,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.6,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.006596,
		ob_size : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 0.010284,
		wave_dots : 1.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.1,
		mv_l : 0.05,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.96,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 3.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
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
m.mrad = 0;
m.bool = 0;
m.lbass = 0;
m.beatb = 0;
m.dt = 0;
m.avgdb = 0;
m.vol = 0;
m.beat = 0;
m.ph = 0;
m.mtime2 = 0;
m.lbbtime = 0;
m.mtime3 = 0;
m.mtime = 0;
m.w1 = 0;
m.mtime4 = 0;
m.phase = 0;
m.w2 = 0;
m.w3 = 0;
m.w4 = 0;
m.db = 0;
m.db = 0.001;
m.dt = 0.001;
m.avgdb = (m.bass-m.bass_att);
m.avgdt = (m.treb-m.treb_att);
m.lbass = 0;
m.ltreb = 0;
m.avgbbeatrate = 2;
m.beatb = 0;
m.beatb2 = 0;
m.beatrawbeatb = 0;
m.lbbtime = (m.time-1);
m.avgdb = 0.01;
m.vol = 0;
m.avgvol = 1;
m.ph = 0;
m.phase = 0;
m.bool = 0;
m.const = 0.01;
m.mtime = (100+(m.bass_att*1000));
m.mtime2 = (100+(m.treb_att*1000));
m.mtime3 = (100+(m.bass*1000));
m.mtime4 = (100+(m.mid*1000));
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 1;
m.zoom = 1.000;
m.warp = 0;
m.wrap = 1;
m.monitor = m.w1;
m.db = (((m.w1+m.w2)-m.lbass)*m.fps);
m.dt = (((m.w4+m.w3)-m.ltreb)*m.fps);
m.ltreb = (m.w4+m.w3);
m.lbass = (m.w1+m.w2);
m.avgdb = ((m.avgdb*0.9)+(Math.abs(m.db)*0.1));
m.avgdt = ((m.avgdt*0.9)+(Math.abs(m.dt)*0.1));
m.rawbeatb = above((m.time-m.lbbtime), (m.avgbbeatrate*0.75));
m.beatb = (m.rawbeatb*above(Math.abs(m.dt), (m.avgdt*3)));
m.beatb2 = (m.rawbeatb*above(Math.abs(m.db), (m.avgdb*3)));
m.beat = Math.max(m.beatb2, m.beatb);
m.avgbbeatrate = ((m.beat*((m.avgbbeatrate*0.99)+((m.time-m.lbbtime)*0.01)))+((1-m.beat)*(m.avgbbeatrate+((3-m.avgbbeatrate)*0.00001))));
m.lbbtime = ((m.time*m.beat)+((1-m.beat)*m.lbbtime));
m.ph = (((m.time-m.lbbtime)*div(60,m.avgbbeatrate))*m.const);
m.phase = Math.max(Math.min(m.ph, 1), 0);
m.const = ((m.const*(1-m.beatb2))+(m.beatb2*(m.const+(0.001*m.bool))));
m.bool = ((below(m.phase, 0.98)*(0.99-m.ph))-(above(m.phase, 0.98)*(m.ph*0.5)));
m.bc = (m.bc+m.beatb);
m.zoom = (1+below(m.w1, 0));
m.vol = ((m.beatb*(((m.w1+m.w4)+m.w2)+m.w3))*0.1);
m.avgvol = ((m.avgvol*0.999)+(m.vol*0.01));
m.monitor = m.avgvol;
m.mtime = (m.mtime+((Math.min((m.avgdt*0.05), 0.5)+m.avgvol)*div(1,m.fps)));
m.mtime2 = (m.mtime2+((Math.min((m.avgdb*0.05), 0.5)+m.avgvol)*div(1,m.fps)));
m.mtime3 = (m.mtime3+((m.beatb*m.db)*div(1,m.fps)));
m.mtime4 = (m.mtime4+((m.beatb2*m.dt)*div(1,m.fps)));
m.monitor = div(60,m.avgbbeatrate);
m.q1 = m.beatb;
m.q2 = m.beatb2;
m.q3 = m.phase;
m.q4 = div(60,m.avgbbeatrate);
m.q5 = m.mtime;
m.q6 = m.mtime2;
m.q7 = m.mtime3;
m.q8 = m.mtime4;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.cy = (0.5+(Math.sin(m.q8)*0.3));
m.cx = (0.5+(Math.sin(m.q7)*0.3));
m.mrad = Math.asin(pow((pow((m.cx-m.x), 2)+pow((m.cy-m.y), 2)), 0.5));
m.rot = (3.14+Math.sin(((((m.q7-m.q8)*0.1)+((m.q5-m.q6)*1))+(m.mrad*Math.sin(((m.time*m.q4)*0.00001))))));
m.zoom = (1+(m.q4*0.0001));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.band5 = 0;
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.band7 = 0;
m.band7max = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.band5max = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.section = 0;
m.band3max = 0;
m.q7 = 0;
m.q8 = 0;
m.band1max = 0;
m.division = 0;
m.maxhold3 = 0;
m.band7min = 0;
m.maxhold5 = 0;
m.band3temp = 0;
m.band5min = 0;
m.band5temp = 0;
m.maxhold7 = 0;
m.band3min = 0;
m.band1min = 0;
m.band7temp = 0;
m.onetest = 0;
m.wave = 0;
m.segmentlength = 0;
m.zerotest = 0;
m.band1 = 0;
m.t1 = 0;
m.band3 = 0;
m.t2 = 0;
m.r1 = 0;
m.t3 = 0;

			m.rkeys = ['band5','t4','band7','band7max','t6','band5max','t8','band3max','band1max','maxhold3','band7min','maxhold5','band3temp','band5min','band5temp','maxhold7','band3min','band1min','band7temp','band1','band3','t2','r1'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.division = (Math.floor((m.sample*4))+1);
m.wave = (((m.value1*170)+(m.value2*170))*0.5);
m.band1max = ifcond(equal(m.sample, 0), -1, m.band1max);
m.band1min = ifcond(equal(m.sample, 0), 1, m.band1min);
m.band1max = Math.max(m.wave, m.band1max);
m.band1min = Math.min(m.wave, m.band1min);
m.band1 = ifcond(equal(m.sample, 1), (m.band1max-((m.band1min+m.band1max)*0.5)), m.band1);
m.t1 = m.band1;
m.segmentlength = 8;
m.section = ((m.sample*m.segmentlength)-Math.floor(((m.sample*m.segmentlength)-0.0001)));
m.zerotest = div(1,div(512,m.segmentlength));
m.onetest = (1-m.zerotest);
m.band3max = ifcond(below(m.section, m.zerotest), -1, m.band3max);
m.band3min = ifcond(below(m.section, m.zerotest), 1, m.band3min);
m.maxhold3 = ifcond(below(m.sample, div(1,512)), 0, m.maxhold3);
m.band3max = Math.max(m.wave, m.band3max);
m.band3min = Math.min(m.wave, m.band3min);
m.band3temp = ifcond(above(m.section, m.onetest), (m.band3max-((m.band3min+m.band3max)*0.5)), m.band3temp);
m.maxhold3 = ifcond(above(m.section, m.onetest), (m.maxhold3+m.band3temp), m.maxhold3);
m.band3 = ifcond(equal(m.sample, 1), div(m.maxhold3,m.segmentlength), m.band3);
m.t3 = m.band3;
m.segmentlength = 32;
m.section = ((m.sample*m.segmentlength)-Math.floor(((m.sample*m.segmentlength)-0.00001)));
m.zerotest = div(1,div(512,m.segmentlength));
m.onetest = (1-m.zerotest);
m.band5max = ifcond(below(m.section, m.zerotest), -1, m.band5max);
m.band5min = ifcond(below(m.section, m.zerotest), 1, m.band5min);
m.maxhold5 = ifcond(below(m.sample, div(1,512)), 0, m.maxhold5);
m.band5max = Math.max(m.wave, m.band5max);
m.band5min = Math.min(m.wave, m.band5min);
m.band5temp = ifcond(above(m.section, m.onetest), (m.band5max-((m.band5min+m.band5max)*0.5)), m.band5temp);
m.maxhold5 = ifcond(above(m.section, m.onetest), (m.maxhold5+m.band5temp), m.maxhold5);
m.band5 = ifcond(equal(m.sample, 1), div(m.maxhold5,m.segmentlength), m.band5);
m.t5 = m.band5;
m.segmentlength = 128;
m.section = ((m.sample*m.segmentlength)-Math.floor(((m.sample*m.segmentlength)-0.00001)));
m.zerotest = div(1,div(512,m.segmentlength));
m.onetest = (1-m.zerotest);
m.band7max = ifcond(below(m.section, m.zerotest), -1, m.band7max);
m.band7min = ifcond(below(m.section, m.zerotest), 1, m.band7min);
m.maxhold7 = ifcond(below(m.sample, div(1,512)), 0, m.maxhold7);
m.band7max = Math.max(m.wave, m.band7max);
m.band7min = Math.min(m.wave, m.band7min);
m.band7temp = ifcond(above(m.section, m.onetest), (m.band7max-((m.band7min+m.band7max)*0.5)), m.band7temp);
m.maxhold7 = ifcond(above(m.section, m.onetest), (m.maxhold7+m.band7temp), m.maxhold7);
m.band7 = ifcond(equal(m.sample, 1), div(m.maxhold7,m.segmentlength), m.band7);
m.t7 = m.band7;
m.t1 = (m.t1*1.9);
m.t2 = (m.t2*2.8);
m.t3 = (m.t3*3.5);
m.t4 = (m.t4*5);
m.t5 = (m.t5*7);
m.t6 = (m.t6*12);
m.t7 = (m.t7*16);
m.t8 = (m.t8*29);
m.t1 = pow(m.t1, 2);
m.t2 = pow(m.t2, 2);
m.t3 = pow(m.t3, 2);
m.t4 = pow(m.t4, 2);
m.t5 = pow(m.t5, 2);
m.t6 = pow(m.t6, 2);
m.t7 = pow(m.t7, 2);
m.t8 = pow(m.t8, 2);
m.t1 = Math.max((m.t1-m.t3), 0);
m.t3 = Math.max((m.t3-m.t5), 0);
m.t5 = Math.max((m.t5-m.t7), 0);
m.q1 = m.t1;
m.q2 = m.t2;
m.q3 = m.t3;
m.q4 = m.t4;
m.q5 = m.t5;
m.q6 = m.t6;
m.q7 = m.t7;
m.q8 = m.t8;
m.x = m.sample;
m.y = 0.001;
m.q1 = m.t1;
m.q2 = m.t3;
m.q3 = m.t5;
m.q4 = m.t7;
m.r1 = ifcond(equal(m.division, 1), m.t1, m.r1);
m.r1 = ifcond(equal(m.division, 2), m.t3, m.r1);
m.r1 = ifcond(equal(m.division, 3), m.t5, m.r1);
m.r1 = ifcond(equal(m.division, 4), m.t7, m.r1);
m.r1 = Math.min(m.r1, 1);
m.r1 = Math.max(m.r1, 0);
m.r = ((Math.sin((((m.sample*3.14)+m.time)+0.0))*0.5)+0.5);
m.g = ((Math.sin((((m.sample*3.14)+m.time)+2.1))*0.5)+0.5);
m.b = ((Math.sin((((m.sample*3.14)+m.time)+4.2))*0.5)+0.5);
m.a = ((Math.sin((((m.sample*6.283)*4)+4.74))*0.5)+0.5);
m.a = div(Math.max((m.a-(1-m.r1)), 0),m.r1);
m.a = pow((m.a*m.r1), (1-(m.r1*0.5)));
m.a = 0;
m.r = Math.min((m.r*(1+m.r1)), 1);
m.g = Math.min((m.g*(1+m.r1)), 1);
m.b = Math.min((m.b*(1+m.r1)), 1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('division = int(sample*4) + 1;\n' + 'wave=(value1*170 + value2*170) * 0.5;\n' + 'band1max = if( equal(sample,0) , -1, band1max);\n' + 'band1min = if( equal(sample,0) , 1 , band1min);\n' + 'band1max = max(wave,band1max);\n' + 'band1min = min(wave,band1min);\n' + 'band1 = if( equal(sample,1) , band1max - ((band1min+band1max)*0.5) , band1 );\n' + 't1 = band1;\n' + 'segmentlength = 8;\n' + 'section = (sample*segmentlength) - int(sample*segmentlength - 0.0001);\n' + 'zerotest= (1/(512/segmentlength));\n' + 'onetest =1 - zerotest;\n' + 'band3max = if( below(section,zerotest) , -1 , band3max);\n' + 'band3min = if( below(section,zerotest) , 1 , band3min);\n' + 'maxhold3 = if( below(sample ,1/512) , 0 , maxhold3 );\n' + 'band3max = max(wave,band3max);\n' + 'band3min = min(wave,band3min);\n' + 'band3temp = if( above(section,onetest), band3max - ((band3min+band3max)*0.5) , band3temp );\n' + 'maxhold3 = if( above(section,onetest) , maxhold3 + band3temp , maxhold3 );\n' + 'band3 = if( equal(sample,1) , maxhold3/segmentlength , band3 );\n' + 't3 = band3;\n' + 'segmentlength = 32;\n' + 'section = (sample*segmentlength) - int(sample*segmentlength - 0.00001);\n' + 'zerotest= (1/(512/segmentlength));\n' + 'onetest =1 - zerotest;\n' + 'band5max = if( below(section,zerotest) , -1, band5max);\n' + 'band5min = if( below(section,zerotest) , 1 , band5min);\n' + 'maxhold5 = if( below(sample ,1/512) , 0 , maxhold5 );\n' + 'band5max = max(wave,band5max);\n' + 'band5min = min(wave,band5min);\n' + 'band5temp = if( above(section,onetest) , band5max - ((band5min+band5max)*0.5) , band5temp );\n' + 'maxhold5 = if( above(section,onetest) , maxhold5 + band5temp , maxhold5 );\n' + 'band5 = if( equal(sample,1) , maxhold5/segmentlength , band5 );\n' + 't5 = band5;\n' + 'segmentlength = 128;\n' + 'section = (sample*segmentlength) - int(sample*segmentlength - 0.00001);\n' + 'zerotest= (1/(512/segmentlength));\n' + 'onetest =1 - zerotest;\n' + 'band7max = if( below(section,zerotest) , -1 , band7max);\n' + 'band7min = if( below(section,zerotest) , 1 , band7min);\n' + 'maxhold7 = if( below(sample ,1/512) , 0 , maxhold7 );\n' + 'band7max = max(wave,band7max);\n' + 'band7min = min(wave,band7min);\n' + 'band7temp = if( above(section,onetest) , band7max - ((band7min+band7max)*0.5) , band7temp );\n' + 'maxhold7 = if( above(section,onetest) , maxhold7 + band7temp , maxhold7 );\n' + 'band7 = if( equal(sample,1) , maxhold7/segmentlength , band7 );\n' + 't7 = band7;\n' + 't1=t1*1.9;\n' + 't2=t2*2.8;\n' + 't3=t3*3.5;\n' + 't4=t4*5;\n' + 't5=t5*7;\n' + 't6=t6*12;\n' + 't7=t7*16;\n' + 't8=t8*29;\n' + 't1=pow(t1,2);\n' + 't2=pow(t2,2);\n' + 't3=pow(t3,2);\n' + 't4=pow(t4,2);\n' + 't5=pow(t5,2);\n' + 't6=pow(t6,2);\n' + 't7=pow(t7,2);\n' + 't8=pow(t8,2);\n' + 't1=max(t1-t3 , 0);\n' + 't3=max(t3-t5 , 0);\n' + 't5=max(t5-t7 , 0);\n' + 'q1=t1;\n' + 'q2=t2;\n' + 'q3=t3;\n' + 'q4=t4;\n' + 'q5=t5;\n' + 'q6=t6;\n' + 'q7=t7;\n' + 'q8=t8;\n' + 'x=sample;\n' + 'y=0.001;\n' + 'q1=t1;\n' + 'q2=t3;\n' + 'q3=t5;\n' + 'q4=t7;\n' + 'r1=if( equal(division,1) , t1 , r1 );\n' + 'r1=if( equal(division,2) , t3 , r1 );\n' + 'r1=if( equal(division,3) , t5 , r1 );\n' + 'r1=if( equal(division,4) , t7 , r1 );\n' + 'r1=min(r1,1);\n' + 'r1=max(r1,0);\n' + 'r=sin(sample*3.14 + time + 0.0)*0.5+0.5;\n' + 'g=sin(sample*3.14 + time + 2.1)*0.5+0.5;\n' + 'b=sin(sample*3.14 + time + 4.2)*0.5+0.5;\n' + 'a= ( sin(sample*6.283*4 + 4.74)*0.5+0.5  );\n' + 'a=max(a - (1-r1) , 0) / r1;\n' + 'a=pow( a*r1 , 1-r1*0.5);\n' + 'a=0;\n' + 'r=min( r * (1+r1) , 1);\n' + 'g=min( g * (1+r1) , 1);\n' + 'b=min( b * (1+r1) , 1);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.7,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.1,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.r2 = 0;
m.t4 = 0;
m.t5 = 0;
m.sinang = 0;
m.t6 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.g1 = 0;
m.g2 = 0;
m.flip = 0;
m.n = 0;
m.b1 = 0;
m.b2 = 0;
m.cosang = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.tm = 0;
m.xq = 0;
m.ang = 0;
m.ys = 0;
m.phs = 0;
m.xs = 0;
m.t1 = 0;
m.t2 = 0;
m.r1 = 0;
m.t3 = 0;

			m.rkeys = ['b','flip'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = ((Math.sin((m.q5-m.q6))*0.5)+0.5);
m.t2 = ((Math.sin((m.q5-m.q7))*0.5)+0.5);
m.t3 = ((Math.sin((m.q6+m.q8))*0.5)+0.5);
m.t4 = ((Math.sin((m.q5+m.q6))*0.5)+0.5);
m.t5 = ((Math.sin((m.q5-m.q8))*0.5)+0.5);
m.t6 = ((Math.sin((m.q6-m.q7))*0.5)+0.5);
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.2);
m.tm = ((m.q5+((m.q6*m.q4)*0.0001))+m.phs);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = ((m.flip*0.1)+(((Math.sin(m.tm)*0.5)+0.5)*0.2));
m.zp = 0;
m.ang = ((Math.sin((m.tm*2))*0.5)+0.5);
m.xq = m.xp;
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.yq = ((m.yp*m.sinang)+(m.zp*m.cosang));
m.zq = ((m.yp*m.cosang)-(m.zp*m.sinang));
m.yq = m.yp;
m.zq = m.zp;
m.ang = (m.tm*8);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = ((m.xq*m.sinang)+(m.yq*m.cosang));
m.yp = ((m.xq*m.cosang)-(m.yq*m.sinang));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin(((m.tm*2)-0.5))*1.5));
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sinang)+(m.zp*m.cosang));
m.zq = ((m.yp*m.cosang)-(m.zp*m.sinang));
m.ang = (-1.0+Math.cos(((m.tm*3.1)+0.5)));
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = ((m.xq*m.sinang)+(m.yq*m.cosang));
m.yp = ((m.xq*m.cosang)-(m.yq*m.sinang));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos((m.tm*2.3))*1.75)-1.05);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xq = ((m.xp*m.sinang)+(m.zp*m.cosang));
m.yq = m.yp;
m.zq = ((m.xp*m.cosang)-(m.zp*m.sinang));
m.ang = ((Math.cos(m.tm)*0.5)-0.5);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = m.xq;
m.yp = ((m.yq*m.cosang)-(m.zq*m.sinang));
m.zp = ((m.yq*m.sinang)+(m.zq*m.cosang));
m.zp = (m.zp+2);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = (1-m.sample);
m.b = (m.b+(pow((1-m.sample), 2)*0.3));
m.r1 = m.t1;
m.g1 = m.t2;
m.b1 = m.t3;
m.r2 = m.t4;
m.g2 = m.t5;
m.b2 = m.t6;
m.r = ((m.r1*m.flip)+(m.r2*(1-m.flip)));
m.g = ((m.g1*m.flip)+(m.g2*(1-m.flip)));
m.b = ((m.b1*m.flip)+(m.b2*(1-m.flip)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=sin(q5-q6)*0.5+0.5;\n' + 't2=sin(q5-q7)*0.5+0.5;\n' + 't3=sin(q6+q8)*0.5+0.5;\n' + 't4=sin(q5+q6)*0.5+0.5;\n' + 't5=sin(q5-q8)*0.5+0.5;\n' + 't6=sin(q6-q7)*0.5+0.5;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=(q5+q6*q4*.0001) + phs;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=flip*0.1 + (sin(tm)*0.5 + 0.5)*0.2;\n' + 'zp=0;\n' + 'ang=sin(tm*2)*0.5 +0.5;\n' + 'xq=xp;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=tm*8;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*1.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'ang=-1.0 + cos(tm*3.1 + 0.5);\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2.3)*1.75 - 1.05;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp*sinang + zp*cosang;\n' + 'yq=yp;\n' + 'zq=xp*cosang - zp*sinang;\n' + 'ang=cos(tm)*0.5 - 0.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq;\n' + 'yp=yq*cosang - zq*sinang;\n' + 'zp=yq*sinang + zq*cosang;\n' + 'zp=zp+2;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample);\n' + 'b=b+pow(1-sample,2)*0.3;\n' + 'r1=t1;\n' + 'g1=t2;\n' + 'b1=t3;\n' + 'r2=t4;\n' + 'g2=t5;\n' + 'b2=t6;\n' + 'r=r1*flip + r2*(1-flip);\n' + 'g=g1*flip + g2*(1-flip);\n' + 'b=b1*flip + b2*(1-flip);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.6,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.2,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.r2 = 0;
m.t4 = 0;
m.t5 = 0;
m.sinang = 0;
m.t6 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.g1 = 0;
m.g2 = 0;
m.flip = 0;
m.n = 0;
m.b1 = 0;
m.b2 = 0;
m.cosang = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.tm = 0;
m.xq = 0;
m.ang = 0;
m.ys = 0;
m.phs = 0;
m.xs = 0;
m.t1 = 0;
m.t2 = 0;
m.r1 = 0;
m.t3 = 0;

			m.rkeys = ['b','flip'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = ((Math.sin(div(m.q6,m.q5))*0.5)+0.5);
m.t2 = ((Math.sin((m.q6-m.q7))*0.5)+0.5);
m.t3 = ((Math.sin((m.q5+m.q8))*0.5)+0.5);
m.t4 = ((Math.sin((m.q7+m.q6))*0.5)+0.5);
m.t5 = ((Math.sin((m.q5-m.q6))*0.5)+0.5);
m.t6 = ((Math.sin((m.q8-m.q5))*0.5)+0.5);
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.2);
m.tm = ((m.q6+((m.q5*m.q4)*0.0001))+m.phs);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = (((m.flip*0.1)+(((Math.sin(m.tm)*0.5)+0.5)*0.2))+0.1);
m.yp = -m.yp;
m.zp = 0;
m.ang = ((Math.sin((m.tm*2))*0.5)+0.5);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sinang)+(m.zp*m.cosang));
m.zq = ((m.yp*m.cosang)-(m.zp*m.sinang));
m.yq = m.yp;
m.zq = m.zp;
m.ang = (m.tm*8);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = ((m.xq*m.sinang)+(m.yq*m.cosang));
m.yp = ((m.xq*m.cosang)-(m.yq*m.sinang));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin(((m.tm*2)-0.5))*1.5));
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sinang)+(m.zp*m.cosang));
m.zq = ((m.yp*m.cosang)-(m.zp*m.sinang));
m.ang = (-1.0+Math.cos(((m.tm*3.1)+0.5)));
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = ((m.xq*m.sinang)+(m.yq*m.cosang));
m.yp = ((m.xq*m.cosang)-(m.yq*m.sinang));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos((m.tm*2.3))*1.75)-1.05);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xq = ((m.xp*m.sinang)+(m.zp*m.cosang));
m.yq = m.yp;
m.zq = ((m.xp*m.cosang)-(m.zp*m.sinang));
m.ang = ((Math.cos(m.tm)*0.5)-0.5);
m.sinang = Math.sin(m.ang);
m.cosang = Math.cos(m.ang);
m.xp = m.xq;
m.yp = ((m.yq*m.cosang)-(m.zq*m.sinang));
m.zp = ((m.yq*m.sinang)+(m.zq*m.cosang));
m.zp = (m.zp+2);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = (1-m.sample);
m.b = (m.b+(pow((1-m.sample), 2)*0.3));
m.r1 = m.t1;
m.g1 = m.t2;
m.b1 = m.t3;
m.r2 = m.t4;
m.g2 = m.t5;
m.b2 = m.t6;
m.r = ((m.r1*m.flip)+(m.r2*(1-m.flip)));
m.g = ((m.g1*m.flip)+(m.g2*(1-m.flip)));
m.b = ((m.b1*m.flip)+(m.b2*(1-m.flip)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=sin(q6/q5)*0.5+0.5;\n' + 't2=sin(q6-q7)*0.5+0.5;\n' + 't3=sin(q5+q8)*0.5+0.5;\n' + 't4=sin(q7+q6)*0.5+0.5;\n' + 't5=sin(q5-q6)*0.5+0.5;\n' + 't6=sin(q8-q5)*0.5+0.5;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=(q6+q5*q4*.0001) + phs;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=flip*0.1 + (sin(tm)*0.5 + 0.5)*0.2 +0.1;\n' + 'yp=-yp;\n' + 'zp=0;\n' + 'ang=sin(tm*2)*0.5 +0.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=tm*8;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*1.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sinang + zp*cosang;\n' + 'zq=yp*cosang - zp*sinang;\n' + 'ang=-1.0 + cos(tm*3.1 + 0.5);\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq*sinang + yq*cosang;\n' + 'yp=xq*cosang - yq*sinang;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2.3)*1.75 - 1.05;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xq=xp*sinang + zp*cosang;\n' + 'yq=yp;\n' + 'zq=xp*cosang - zp*sinang;\n' + 'ang=cos(tm)*0.5 - 0.5;\n' + 'sinang=sin(ang);\n' + 'cosang=cos(ang);\n' + 'xp=xq;\n' + 'yp=yq*cosang - zq*sinang;\n' + 'zp=yq*sinang + zq*cosang;\n' + 'zp=zp+2;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample);\n' + 'b=b+pow(1-sample,2)*0.3;\n' + 'r1=t1;\n' + 'g1=t2;\n' + 'b1=t3;\n' + 'r2=t4;\n' + 'g2=t5;\n' + 'b2=t6;\n' + 'r=r1*flip + r2*(1-flip);\n' + 'g=g1*flip + g2*(1-flip);\n' + 'b=b1*flip + b2*(1-flip);'),

		},
		{
		'baseVals' : {
			a : 0.5,
			enabled : 0.0,
			b : 0.5,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wave = 0;
m.t1 = 0;
m.t1 = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.wave = (((m.value1*170)+(m.value2*170))*0.5);
m.t1 = m.wave;
m.x = m.sample;
m.y = (0.2+(m.t1*0.3));
		return m;
	},
		'init_eqs_str' : ('t1=0;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('wave=(value1*170 + value2*170) * 0.5;\n' + 't1 = wave;\n' + 'x=sample;\n' + 'y=0.2 + t1 * 0.3;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			tex_capture : 1.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.1,
			x : 0.75,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;
m.q8 = 0;
m.lrad = 0;
m.tex_capture = 0;

			m.rkeys = ['lrad'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = ((Math.sin((((m.q8-m.q5)*m.q4)*0.01))*0.5)+0.5);
m.x = (0.1*m.rad);
m.tex_capture = ifcond(above((m.rad-m.lrad), 0), 1, 0);
m.lrad = m.rad;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad=sin((q8-q5)*q4*.01)*.5+.5;\n' + 'x=.1*rad;\n' + 'tex_capture=if(above(rad-lrad,0),1,0);\n' + 'lrad=rad;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			tex_capture : 1.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.1,
			x : 0.75,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q6 = 0;
m.q7 = 0;
m.lrad = 0;
m.tex_capture = 0;

			m.rkeys = ['lrad'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = ((Math.sin((((m.q7-m.q6)*m.q4)*0.01))*0.5)+0.5);
m.x = (1-(0.1*m.rad));
m.tex_capture = ifcond(above((m.rad-m.lrad), 0), 1, 0);
m.lrad = m.rad;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad=sin((q7-q6)*q4*.01)*.5+.5;\n' + 'x=1-.1*rad;\n' + 'tex_capture=if(above(rad-lrad,0),1,0);\n' + 'lrad=rad;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			tex_capture : 1.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;
m.q8 = 0;
m.lrad = 0;
m.tex_capture = 0;

			m.rkeys = ['lrad'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = ((Math.sin((((m.q5-m.q8)*m.q4)*0.01))*0.5)+0.5);
m.y = (0.1*m.rad);
m.tex_capture = ifcond(above((m.rad-m.lrad), 0), 1, 0);
m.lrad = m.rad;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad=sin((q5-q8)*q4*.01)*.5+.5;\n' + 'y=.1*rad;\n' + 'tex_capture=if(above(rad-lrad,0),1,0);\n' + 'lrad=rad;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			tex_capture : 1.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q6 = 0;
m.q7 = 0;
m.lrad = 0;
m.tex_capture = 0;

			m.rkeys = ['lrad'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = ((Math.sin((((m.q6-m.q7)*m.q4)*0.01))*0.5)+0.5);
m.y = (1-(0.1*m.rad));
m.tex_capture = ifcond(above((m.rad-m.lrad), 0), 1, 0);
m.lrad = m.rad;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad=sin((q6-q7)*q4*.01)*.5+.5;\n' + 'y=1-.1*rad;\n' + 'tex_capture=if(above(rad-lrad,0),1,0);\n' + 'lrad=rad;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('db=.001;\n' + 'dt=.001;\n' + 'avgdb=bass-bass_att;\n' + 'avgdt=treb-treb_att;\n' + 'lbass=0;\n' + 'ltreb=0;\n' + 'avgbbeatrate=2;\n' + 'beatb=0;\n' + 'beatb2=0;\n' + 'beatrawbeatb=0;\n' + 'lbbtime=time-1;\n' + 'avgdb=.01;\n' + 'vol=0;\n' + 'avgvol=1;\n' + 'ph=0;\n' + 'phase=0;\n' + 'bool=0;\n' + 'const=.01;\n' + 'mtime=100+bass_att*1000;\n' + 'mtime2=100+treb_att*1000;\n' + 'mtime3=100+bass*1000;\n' + 'mtime4=100+mid*1000;'),
	'frame_eqs_str' : ('decay=1;\n' + 'zoom=1.000;\n' + 'warp=0;\n' + 'wrap=1;\n' + 'monitor=w1;\n' + 'db=((w1+w2)-lbass)*fps;\n' + 'dt=((w4+w3)-ltreb)*fps;\n' + 'ltreb=w4+w3;\n' + 'lbass=w1+w2;\n' + 'avgdb=avgdb*.9+abs(db)*.1;\n' + 'avgdt=avgdt*.9+abs(dt)*.1;\n' + 'rawbeatb=above(time-lbbtime,avgbbeatrate*.75);\n' + 'beatb=rawbeatb*above(abs(dt),avgdt*3);\n' + 'beatb2=rawbeatb*above(abs(db),avgdb*3);\n' + 'beat=max(beatb2,beatb);\n' + 'avgbbeatrate=beat*(avgbbeatrate*.99+(time-lbbtime)*.01)+(1-beat)*(avgbbeatrate+(3-avgbbeatrate)*.00001);\n' + 'lbbtime=time*beat+(1-beat)*lbbtime;\n' + 'ph=(time-lbbtime)*(60/avgbbeatrate)*const;\n' + 'phase=max(min( ph, 1 ),0);\n' + 'const=const*(1-beatb2)+beatb2*( const+ (.001*bool) );\n' + 'bool=below(phase,.98)*(.99-ph)-above(phase,.98)*(ph*.5);\n' + 'bc=bc+beatb;\n' + 'zoom=1+below(w1,0);\n' + 'vol=(beatb*(w1+w4+w2+w3)*.1);\n' + 'avgvol=avgvol*.999+vol*.01;\n' + 'monitor=avgvol;\n' + 'mtime=mtime+(min(avgdt*.05,.5)+avgvol)*(1/fps);\n' + 'mtime2=mtime2+(min(avgdb*.05,.5)+avgvol)*(1/fps);\n' + 'mtime3=mtime3+(beatb)*db*(1/fps);\n' + 'mtime4=mtime4+(beatb2)*dt*(1/fps);\n' + 'monitor=60/avgbbeatrate;\n' + 'q1=beatb;\n' + 'q2=beatb2;\n' + 'q3=phase;\n' + 'q4=60/avgbbeatrate;\n' + 'q5=mtime;\n' + 'q6=mtime2;\n' + 'q7=mtime3;\n' + 'q8=mtime4;'),
	'pixel_eqs_str' : ('cy=.5+sin(q8)*.3;\n' + 'cx=.5+sin(q7)*.3;\n' + 'mrad=asin(pow(pow(cx-x,2)+pow(cy-y,2),.5));\n' + 'rot=3.14+sin((q7-q8)*.1+(q5-q6)*1+mrad*sin(time*q4*.00001));\n' + 'zoom=1+q4*.0001;'),
};

return pmap;
});
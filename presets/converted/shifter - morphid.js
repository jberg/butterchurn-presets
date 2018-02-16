define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.285751,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 60.80368,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.050599,
		ob_size : 0.005,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 3.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.peakbass_att = 0;
m.q2 = 0;
m.st = 0;
m.att = 0;
m.q3 = 0;
m.q4 = 0;
m.sw = 0;
m.swi = 0;
m.meanbass_att = 0;
m.mt = 0;
m.toc = 0;
m.bl = 0;
m.vav = 0;
m.lastbeat = 0;
m.treb_avg = 0;
m.tic = 0;
m.br = 0;
m.bet = 0;
m.slide = 0;
m.bt = 0;
m.bass_avg = 0;
m.rd = 0;
m.vol = 0;
m.zm = 0;
m.beatrate = 0;
m.beat = 0;
m.tim = 0;
m.tin = 0;
m.volume = 0;
m.mid_avg = 0;
m.sp = 0;
m.tr = 0;
m.vt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.volume = (0.3*((m.bass+m.mid)+m.att));
m.beatrate = (equal(m.beatrate, 0)+((1-equal(m.beatrate, 0))*(below(m.volume, 0.01)+((1-below(m.volume, 0.01))*m.beatrate))));
m.lastbeat = (m.lastbeat+(equal(m.lastbeat, 0)*m.time));
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.peakbass_att = Math.max(m.bass_att, m.peakbass_att);
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ((m.beat*m.bass_att)+(((1-m.beat)*m.peakbass_att)*((above((m.time-m.lastbeat), (2*m.beatrate))*0.95)+((1-above((m.time-m.lastbeat), (2*m.beatrate)))*0.995))));
m.lastbeat = ((m.beat*m.time)+((1-m.beat)*m.lastbeat));
m.peakbass_att = Math.max(m.peakbass_att, (1.1*m.meanbass_att));
m.beat = ((above(m.volume, 0.8)*below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)))*above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))));
m.warp = 0;
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = m.time;
m.vol = (((m.bass_att+m.treb_att)+m.mid_att)*0.333333);
m.treb_avg = (m.tic*((m.treb_avg*(div(1,m.tic)-10))+(10*m.treb)));
m.mid_avg = (m.tic*((m.mid_avg*(div(1,m.tic)-10))+(10*m.mid)));
m.bass_avg = (m.tic*((m.bass_avg*(div(1,m.tic)-10))+(10*m.bass)));
m.vav = (m.tic*((m.vav*(div(1,m.tic)-10))+((10*((m.bass+m.treb)+m.mid))*0.33333)));
m.tt = (m.tt+(m.tic*m.treb));
m.mt = (m.mt+(m.tic*m.mid));
m.bet = Math.min(pow(m.bass, 9), 4);
m.bt = (m.bt+(m.tic*m.bet));
m.vt = (m.vt+(m.tic*m.vav));
m.sp = (Math.abs((m.vav-m.slide))*0.1);
m.slide = (ifcond(above(m.slide, m.vav), (m.slide-(m.tic*m.sp)), (m.slide+(m.tic*m.sp)))+(((1-m.toc)*m.vav)*0.2));
m.toc = 1;
m.tr = ifcond(above(m.st, 0), 0.999, (m.tr+(m.tic*m.mid)));
m.tr = (m.tr-Math.floor(m.tr));
m.st = ifcond(above(m.st, 0), (m.st-m.tic), (above(m.tr, 0.9)*0.1));
m.q1 = m.tt;
m.q2 = m.bt;
m.q3 = ((m.tt+m.mt)*0.1);
m.q4 = m.vt;
m.br = (m.beatrate*0.5);
m.sw = above(m.tim, m.br);
m.tim = ifcond(m.sw, (m.tim-m.br), m.tim);
m.tim = (m.tim+m.tic);
m.swi = ifcond(m.sw, (1-m.swi), m.swi);
m.monitor = m.beatrate;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.sw = (div(m.ang,6.2832)+1);
m.sw = ((m.sw*8)+(m.q4*0.1));
m.bl = equal(mod(Math.floor(m.sw),2), 0);
m.sw = (m.sw-Math.floor(m.sw));
m.sw = (ifcond(m.bl, m.sw, (1-m.sw))*3);
m.rd = pow((m.rad*0.8), 0.9);
m.rd = (((m.rd*6.2832)*2)-((m.q2+m.sw)*3));
m.zm = (0.01+(0.01*Math.sin(m.rd)));
m.dx = ((m.x-0.5)*m.zm);
m.dy = ((m.y-0.5)*m.zm);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.t5 = 0;
m.t6 = 0;
m.t7 = 0;
m.t8 = 0;
m.sw = 0;
m.sz = 0;
m.mx = 0;
m.my = 0;
m.ti = 0;
m.mix = 0;
m.t1 = 0;
m.sp = 0;
m.miy = 0;
m.t2 = 0;
m.t3 = 0;
m.t1 = (((Math.floor(rand(1001))*0.001)*0.7)+0.2);
m.t2 = (((Math.floor(rand(1001))*0.001)*0.7)+0.2);
m.t3 = (((Math.floor(rand(1001))*0.001)*0.7)+0.2);
m.t4 = (((Math.floor(rand(1001))*0.001)*0.7)+0.2);
m.t5 = (((Math.floor(rand(1001))*0.001)*7)+2);
m.t6 = (((Math.floor(rand(1001))*0.001)*7)+2);
m.t7 = (((Math.floor(rand(1001))*0.001)*7)+2);
m.t8 = (((Math.floor(rand(1001))*0.001)*7)+2);
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sz = (m.value1*0.2);
m.sp = ((m.sample*6.28)*6);
m.sw = above(m.sample, 0.3333);
m.ti = ((m.q1*2.5)+(((m.sw*0.3333)+((1-m.sw)*m.sample))*6.28));
m.mx = (0.5+(0.2*(Math.sin((m.ti*m.t1))+Math.sin((m.ti*m.t3)))));
m.my = (0.5+(0.2*(Math.sin((m.ti*m.t2))+Math.sin((m.ti*m.t4)))));
m.mix = (0.5+(0.2*(Math.sin((m.ti*m.t5))+Math.sin((m.ti*m.t7)))));
m.miy = (0.5+(0.2*(Math.sin((m.ti*m.t6))+Math.sin((m.ti*m.t8)))));
m.x = (m.mx+((m.sw*m.sz)*Math.sin(m.sp)));
m.y = (m.my+((m.sw*m.sz)*Math.cos(m.sp)));
m.a = Math.min(1, (m.sample+m.sw));
m.a = m.sw;
		return m;
	},
		'init_eqs_str' : ('t1 = int(rand(1001))*.001*.7 + .2;\n' + 't2 = int(rand(1001))*.001*.7 + .2;\n' + 't3 = int(rand(1001))*.001*.7 + .2;\n' + 't4 = int(rand(1001))*.001*.7 + .2;\n' + 't5 = int(rand(1001))*.001*7 + 2;\n' + 't6 = int(rand(1001))*.001*7 + 2;\n' + 't7 = int(rand(1001))*.001*7 + 2;\n' + 't8 = int(rand(1001))*.001*7 + 2;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sz = value1*.2;\n' + 'sp = sample*6.28*6;\n' + 'sw = above(sample,.3333);\n' + 'ti = q1*2.5 + (sw*.3333 + (1-sw)*sample)*6.28;\n' + 'mx = .5 + .2*(sin(ti*t1) + sin(ti*t3));\n' + 'my = .5 + .2*(sin(ti*t2) + sin(ti*t4));\n' + 'mix = .5 + .2*(sin(ti*t5) + sin(ti*t7));\n' + 'miy = .5 + .2*(sin(ti*t6) + sin(ti*t8));\n' + 'x = mx + sw*sz*sin(sp);\n' + 'y = my + sw*sz*cos(sp);\n' + 'a = min(1,sample + sw);\n' + 'a = sw;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.sw = 0;
m.sz = 0;
m.mx = 0;
m.my = 0;
m.ti = 0;
m.t1 = 0;
m.sp = 0;
m.t2 = 0;
m.t3 = 0;
m.t1 = (((Math.floor(rand(1001))*0.001)*0.7)+0.2);
m.t2 = (((Math.floor(rand(1001))*0.001)*0.7)+0.2);
m.t3 = (((Math.floor(rand(1001))*0.001)*0.7)+0.2);
m.t4 = (((Math.floor(rand(1001))*0.001)*0.7)+0.2);
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sz = (m.value2*0.2);
m.sp = ((m.sample*6.28)*6);
m.sw = above(m.sample, 0.3333);
m.ti = ((m.q1*2.5)+(((m.sw*0.3333)+((1-m.sw)*m.sample))*6.28));
m.mx = (0.5+(0.2*(Math.sin((m.ti*m.t1))+Math.sin((m.ti*m.t3)))));
m.my = (0.5+(0.2*(Math.sin((m.ti*m.t2))+Math.sin((m.ti*m.t4)))));
m.x = (m.mx+((m.sw*m.sz)*Math.sin(m.sp)));
m.y = (m.my+((m.sw*m.sz)*Math.cos(m.sp)));
m.a = Math.min(1, (m.sample+m.sw));
m.a = m.sw;
		return m;
	},
		'init_eqs_str' : ('t1 = int(rand(1001))*.001*.7 + .2;\n' + 't2 = int(rand(1001))*.001*.7 + .2;\n' + 't3 = int(rand(1001))*.001*.7 + .2;\n' + 't4 = int(rand(1001))*.001*.7 + .2;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sz = value2*.2;\n' + 'sp = sample*6.28*6;\n' + 'sw = above(sample,.3333);\n' + 'ti = q1*2.5 + (sw*.3333 + (1-sw)*sample)*6.28;\n' + 'mx = .5 + .2*(sin(ti*t1) + sin(ti*t3));\n' + 'my = .5 + .2*(sin(ti*t2) + sin(ti*t4));\n' + 'x = mx + sw*sz*sin(sp);\n' + 'y = my + sw*sz*cos(sp);\n' + 'a = min(1,sample + sw);\n' + 'a = sw;'),

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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.sz = 0;
m.sp = 0;
m.t1 = (((Math.floor(rand(1001))*0.001)*0.7)+0.2);
m.t2 = (((Math.floor(rand(1001))*0.001)*0.7)+0.2);
m.t3 = (((Math.floor(rand(1001))*0.001)*0.7)+0.2);
m.t4 = (((Math.floor(rand(1001))*0.001)*0.7)+0.2);
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sz = (m.value2*0.2);
m.sp = ((m.sample*6.28)*2);
m.x = (0.5+(m.sz*Math.sin(m.sp)));
m.y = (0.5+(m.sz*Math.cos(m.sp)));
		return m;
	},
		'init_eqs_str' : ('t1 = int(rand(1001))*.001*.7 + .2;\n' + 't2 = int(rand(1001))*.001*.7 + .2;\n' + 't3 = int(rand(1001))*.001*.7 + .2;\n' + 't4 = int(rand(1001))*.001*.7 + .2;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sz = value2*.2;\n' + 'sp = sample*6.28*2;\n' + 'x = .5 + sz*sin(sp);\n' + 'y = .5 + sz*cos(sp);'),

		},
		{
		'baseVals' : {
			a : 0.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
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
		'point_eqs' : function(m) {
m.x = (Math.floor(rand(1001))*0.001);
m.y = (Math.floor(rand(1001))*0.001);
m.a = below(Math.floor(rand(500)), (m.mid*50));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = int(rand(1001))*.001;\n' + 'y = int(rand(1001))*.001;\n' + 'a = below(int(rand(500)),mid*50);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.1,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.488863,
			additive : 0.0,
			border_a : 0.3,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.1,
			r : 1.0,
			border_g : 1.0,
			rad : 1.901626,
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
m.tex_zoom = div(1,m.rad);
m.a = 0.01;
m.a2 = m.a;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_zoom = 1/rad;\n' + 'a = .01;\n' + 'a2 = a;'),

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
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.444841,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 44.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.sw = 0;
m.swi = 0;
m.tic = 0;
m.tim = 0;
m.tin = 0;

			m.rkeys = ['swi','tim','tin'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tic = Math.min((m.q3-m.tin), 0.1);
m.tin = m.q3;
m.sw = above(m.tim, 0.2);
m.tim = ifcond(m.sw, (m.tim-0.2), m.tim);
m.tim = (m.tim+m.tic);
m.swi = ifcond(m.sw, (1-m.swi), m.swi);
m.a = (m.swi*0.05);
m.a2 = m.a;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tic = min(q3-tin,.1);\n' + 'tin = q3;\n' + 'sw = above(tim,.2);\n' + 'tim = if(sw,tim-.2,tim);\n' + 'tim = tim + tic;\n' + 'swi = if(sw,1-swi,swi);\n' + 'a = swi*.05;\n' + 'a2 = a;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.05,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.444819,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 44.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (0.5+(0.5*Math.sin((m.time*1.123))));
m.g = (0.5+(0.5*Math.sin((m.time*1.456))));
m.b = (0.5+(0.5*Math.sin((m.time*1.789))));
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = .5 + .5*sin(time*1.123);\n' + 'g = .5 + .5*sin(time*1.456);\n' + 'b = .5 + .5*sin(time*1.789);\n' + 'r2=r;\n' + 'g2=g;\n' + 'b2=b;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.97059,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.402709,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
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
	'frame_eqs_str' : ('volume = 0.3*(bass+mid+att);\n' + 'beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);\n' + 'lastbeat = lastbeat + equal(lastbeat,0)*time;\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = max(bass_att,peakbass_att);\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.95 + (1-above(time - lastbeat, 2*beatrate))*0.995);\n' + 'lastbeat = beat*time + (1-beat)*lastbeat;\n' + 'peakbass_att = max(peakbass_att,1.1*meanbass_att);\n' + 'beat = above(volume,0.8)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));\n' + 'warp = 0;\n' + 'tic = min(time-tin,.1);\n' + 'tin = time;\n' + 'vol = (bass_att + treb_att + mid_att)*.333333;\n' + 'treb_avg = tic*(treb_avg*(1/tic - 10) + 10*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - 10) + 10*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - 10) + 10*bass);\n' + 'vav = tic*(vav*(1/tic - 10) + 10*(bass+treb+mid)*.33333);\n' + 'tt = tt + tic*treb;\n' + 'mt = mt + tic*mid;\n' + 'bet = min(pow(bass,9),4);\n' + 'bt = bt + tic*bet;\n' + 'vt = vt + tic*vav;\n' + 'sp = abs(vav - slide)*.1;\n' + 'slide = if(above(slide,vav),slide-tic*sp,slide+tic*sp) + (1-toc)*vav*.2;\n' + 'toc = 1;\n' + 'tr = if(above(st,0),.999,tr + tic*mid);\n' + 'tr = tr - int(tr);\n' + 'st = if(above(st,0),st - tic,above(tr,.9)*.1);\n' + 'q1 = tt;\n' + 'q2 = bt;\n' + 'q3 = (tt + mt)*.1;\n' + 'q4 = vt;\n' + 'br = beatrate*.5;\n' + 'sw = above(tim,br);\n' + 'tim = if(sw,tim-br,tim);\n' + 'tim = tim + tic;\n' + 'swi = if(sw,1-swi,swi);\n' + 'monitor = beatrate;'),
	'pixel_eqs_str' : ('sw = ang/6.2832 + 1;\n' + 'sw = sw*8 + q4*.1;\n' + 'bl = equal(int(sw)%2,0);\n' + 'sw = sw - int(sw);\n' + 'sw = if(bl,sw,1-sw)*3;\n' + 'rd = pow(rad*.8,.9);\n' + 'rd = rd*6.2832*2 - (q2+sw)*3;\n' + 'zm = .01 + .01*sin(rd);\n' + 'dx = (x-.5)*zm;\n' + 'dy = (y-.5)*zm;'),
};

return pmap;
});
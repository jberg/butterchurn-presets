define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 9.0,
		wave_scale : 1.286,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.24146,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.48886,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0196,
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
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.peakbass_att = 0;
m.q2 = 0;
m.q3 = 0;
m.q5 = 0;
m.meanbass_att = 0;
m.q7 = 0;
m.mt = 0;
m.q8 = 0;
m.mx = 0;
m.vav = 0;
m.my = 0;
m.lastbeat = 0;
m.an = 0;
m.treb_avg = 0;
m.dis = 0;
m.tic = 0;
m.ra = 0;
m.bt = 0;
m.bass_avg = 0;
m.beatrate = 0;
m.mox = 0;
m.beat = 0;
m.moy = 0;
m.tim = 0;
m.tin = 0;
m.volume = 0;
m.mid_avg = 0;
m.vt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.volume = (0.3*(m.bass+m.mid));
m.beatrate = (equal(m.beatrate, 0)+((1-equal(m.beatrate, 0))*(below(m.volume, 0.01)+((1-below(m.volume, 0.01))*m.beatrate))));
m.lastbeat = (m.lastbeat+(equal(m.lastbeat, 0)*m.time));
m.meanbass_att = (0.05*((m.meanbass_att*19)+m.bass_att));
m.peakbass_att = Math.max(m.bass_att, m.peakbass_att);
m.beat = ((above(m.volume, 0.8)*below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)))*above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))));
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ((m.beat*m.bass_att)+(((1-m.beat)*m.peakbass_att)*((above((m.time-m.lastbeat), (2*m.beatrate))*0.96)+((1-above((m.time-m.lastbeat), (2*m.beatrate)))*0.996))));
m.lastbeat = ((m.beat*m.time)+((1-m.beat)*m.lastbeat));
m.peakbass_att = Math.max(m.peakbass_att, (1.1*m.meanbass_att));
m.tim = ifcond(m.beat, m.time, m.tim);
m.q5 = below((m.time-m.tim), 0.1);
m.warp = 0;
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = m.time;
m.ra = (div(1,m.tic)*0.25);
m.treb_avg = (m.tic*((m.treb_avg*(div(1,m.tic)-m.ra))+(m.ra*m.treb)));
m.mid_avg = (m.tic*((m.mid_avg*(div(1,m.tic)-m.ra))+(m.ra*m.mid)));
m.bass_avg = (m.tic*((m.bass_avg*(div(1,m.tic)-m.ra))+(m.ra*m.bass)));
m.vav = (m.tic*((m.vav*(div(1,m.tic)-m.ra))+((m.ra*((m.bass+m.treb)+m.mid))*0.33333)));
m.tt = (m.tt+(m.tic*m.treb));
m.mt = (m.mt+(m.tic*m.mid));
m.bt = (m.bt+(m.tic*m.bass));
m.vt = (m.vt+(m.tic*m.vav));
m.q1 = m.treb_avg;
m.q2 = m.mid_avg;
m.q3 = m.bass_avg;
m.monitor = m.q5;
m.mx = ifcond(m.beat, (((rand(1001)*0.001)*0.5)+((rand(1001)*0.001)*0.5)), m.mx);
m.my = ifcond(m.beat, (((rand(1001)*0.001)*0.5)+((rand(1001)*0.001)*0.5)), m.my);
m.cx = m.mx;
m.cy = m.my;
m.mox = (m.mx-0.5);
m.moy = (m.my-0.5);
m.an = (Math.atan(div(m.moy,m.mox))+ifcond(above(m.mox, 0), (above(m.moy, 0)*6.2832), 3.1416));
m.dis = pow(((m.mox*m.mox)+(m.moy*m.moy)), 0.5);
m.dis = Math.max(0.17, m.dis);
m.q7 = (0.5+(m.dis*Math.cos(m.an)));
m.q8 = (0.5+(m.dis*Math.sin(m.an)));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.mx = (m.x-m.q7);
m.my = (m.y-m.q8);
m.an = m.ang;
m.ra = pow(((m.mx*m.mx)+(m.my*m.my)), 0.5);
m.rot = ((((0.02*Math.sin((((m.ra*6.2832)*2)-(m.time*4))))*(m.mid+m.treb))*(m.mid+m.treb))*0.5);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.sp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = 0;
m.y = m.sample;
m.sp = ((m.sample*6.2832)-m.time);
m.r = (0.5+(0.5*((Math.sin((m.sp*3.549))*0.3)+(0.7*Math.cos((m.sp*5.661))))));
m.g = (0.5+(0.5*((Math.sin((m.sp*5.493))*0.5)+(0.5*Math.cos((m.sp*6.615))))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = 0;\n' + 'y = sample;\n' + 'sp = sample*6.2832 - time;\n' + 'r = .5 + .5*(sin(sp*3.549)*.3 + .7*cos(sp*5.661));\n' + 'g = .5 + .5*(sin(sp*5.493)*.5 + .5*cos(sp*6.615));'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.sp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = 0.999;
m.y = (1-m.sample);
m.sp = ((m.sample*6.2832)+m.time);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = .999;\n' + 'y = 1-sample;\n' + 'sp = sample*6.2832 + time;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.sp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.y = 0.001;
m.x = m.sample;
m.sp = ((m.sample*6.2832)+m.time);
m.r = (0.5+(0.5*((Math.sin((m.sp*3.549))*0.3)+(0.7*Math.cos((m.sp*5.661))))));
m.g = (0.5+(0.5*((Math.sin((m.sp*5.493))*0.5)+(0.5*Math.cos((m.sp*6.615))))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('y = 0.001;\n' + 'x = sample;\n' + 'sp = sample*6.2832 + time;\n' + 'r = .5 + .5*(sin(sp*3.549)*.3 + .7*cos(sp*5.661));\n' + 'g = .5 + .5*(sin(sp*5.493)*.5 + .5*cos(sp*6.615));'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.sp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.y = 1;
m.x = (1-m.sample);
m.sp = ((m.sample*6.2832)-m.time);
m.r = (0.5+(0.5*((Math.sin((m.sp*3.549))*0.3)+(0.7*Math.cos((m.sp*5.661))))));
m.g = (0.5+(0.5*((Math.sin((m.sp*5.493))*0.5)+(0.5*Math.cos((m.sp*6.615))))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('y = 1;\n' + 'x = 1-sample;\n' + 'sp = sample*6.2832 - time;\n' + 'r = .5 + .5*(sin(sp*3.549)*.3 + .7*cos(sp*5.661));\n' + 'g = .5 + .5*(sin(sp*5.493)*.5 + .5*cos(sp*6.615));'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.62832,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.77977,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.66228,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = ['tex_zoom','tex_ang'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = ((rand(1001)*0.001)*6.2832);
m.tex_ang = (m.tex_ang+m.ang);
m.tex_zoom = (div(1,m.rad)*m.tex_zoom);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = rand(1001)*.001*6.2832;\n' + 'tex_ang = tex_ang + ang;\n' + 'tex_zoom = 1/rad*tex_zoom;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.62832,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.77977,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.66228,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = ['tex_zoom','tex_ang'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = ((rand(1001)*0.001)*6.2832);
m.tex_ang = (m.tex_ang+m.ang);
m.tex_zoom = (div(1,m.rad)*m.tex_zoom);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = rand(1001)*.001*6.2832;\n' + 'tex_ang = tex_ang + ang;\n' + 'tex_zoom = 1/rad*tex_zoom;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.71291,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.5,
			r : 0.0,
			border_g : 1.0,
			rad : 0.25479,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q5 = 0;
m.sw = 0;
m.q7 = 0;
m.q8 = 0;
m.ti = 0;

			m.rkeys = ['tex_ang','tex_zoom'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = ((rand(1001)*0.001)*6.2832);
m.tex_ang = (m.tex_ang+m.ang);
m.tex_zoom = (div(1,m.rad)*m.tex_zoom);
m.ti = m.time;
m.ti = m.time;
m.ti = (m.time-1);
m.r2 = (0.5+(0.5*Math.sin((m.ti*1.123))));
m.g2 = (0.5+(0.5*Math.sin((m.ti*1.456))));
m.b2 = (0.5+(0.5*Math.sin((m.ti*1.789))));
m.sw = m.q5;
m.a2 = m.sw;
m.r2 = (m.r2*m.sw);
m.g2 = (m.g2*m.sw);
m.b2 = (m.b2*m.sw);
m.r = m.r2;
m.g = m.g2;
m.b = m.b2;
m.border_a = m.a2;
m.a = m.a2;
m.x = m.q7;
m.y = (1-m.q8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = rand(1001)*.001*6.2832;\n' + 'tex_ang = tex_ang + ang;\n' + 'tex_zoom = 1/rad*tex_zoom;\n' + 'ti = time;\n' + 'ti = time;\n' + 'ti = time - 1;\n' + 'r2 = .5 + .5*sin(ti*1.123);\n' + 'g2 = .5 + .5*sin(ti*1.456);\n' + 'b2 = .5 + .5*sin(ti*1.789);\n' + 'sw = q5;\n' + 'a2 = sw;\n' + 'r2 = r2*sw;\n' + 'g2 = g2*sw;\n' + 'b2 = b2*sw;\n' + 'r = r2;\n' + 'g = g2;\n' + 'b = b2;\n' + 'border_a = a2;\n' + 'a = a2;\n' + 'x = q7;\n' + 'y = 1-q8;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.71291,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.5,
			r : 0.0,
			border_g : 1.0,
			rad : 0.19093,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q5 = 0;
m.sw = 0;
m.q7 = 0;
m.q8 = 0;
m.ti = 0;

			m.rkeys = ['tex_ang','tex_zoom'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = ((rand(1001)*0.001)*6.2832);
m.tex_ang = (m.tex_ang+m.ang);
m.tex_zoom = (div(1,m.rad)*m.tex_zoom);
m.ti = m.time;
m.ti = m.time;
m.ti = (m.time-1);
m.sw = m.q5;
m.a2 = m.sw;
m.a = m.sw;
m.border_a = m.a2;
m.x = m.q7;
m.y = (1-m.q8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = rand(1001)*.001*6.2832;\n' + 'tex_ang = tex_ang + ang;\n' + 'tex_zoom = 1/rad*tex_zoom;\n' + 'ti = time;\n' + 'ti = time;\n' + 'ti = time - 1;\n' + 'sw = q5;\n' + 'a2 = sw;\n' + 'a = sw;\n' + 'border_a = a2;\n' + 'x = q7;\n' + 'y = 1-q8;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('volume = 0.3*(bass+mid);\n' + 'beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);\n' + 'lastbeat = lastbeat + equal(lastbeat,0)*time;\n' + 'meanbass_att = 0.05*(meanbass_att*19 + bass_att);\n' + 'peakbass_att = max(bass_att,peakbass_att);\n' + 'beat = above(volume,0.8)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.96 + (1-above(time - lastbeat, 2*beatrate))*0.996);\n' + 'lastbeat = beat*time + (1-beat)*lastbeat;\n' + 'peakbass_att = max(peakbass_att,1.1*meanbass_att);\n' + 'tim = if(beat,time,tim);\n' + 'q5 = below(time - tim,.1);\n' + 'warp = 0;\n' + 'tic = min(time-tin,.1);\n' + 'tin = time;\n' + 'ra = 1/tic*.25;\n' + 'treb_avg = tic*(treb_avg*(1/tic - ra) + ra*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - ra) + ra*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - ra) + ra*bass);\n' + 'vav = tic*(vav*(1/tic - ra) + ra*(bass+treb+mid)*.33333);\n' + 'tt = tt + tic*treb;\n' + 'mt = mt + tic*mid;\n' + 'bt = bt + tic*bass;\n' + 'vt = vt + tic*vav;\n' + 'q1 = treb_avg;\n' + 'q2 = mid_avg;\n' + 'q3 = bass_avg;\n' + 'monitor = q5;\n' + 'mx = if(beat,rand(1001)*.001*.5 + rand(1001)*.001*.5,mx);\n' + 'my = if(beat,rand(1001)*.001*.5 + rand(1001)*.001*.5,my);\n' + 'cx = mx;\n' + 'cy = my;\n' + 'mox = mx - .5;\n' + 'moy = my - .5;\n' + 'an = atan(moy/mox) + if(above(mox,0),above(moy,0)*6.2832,3.1416);\n' + 'dis = pow(mox*mox + moy*moy,.5);\n' + 'dis = max(.17,dis);\n' + 'q7 = .5 + dis*cos(an);\n' + 'q8 = .5 + dis*sin(an);'),
	'pixel_eqs_str' : ('mx = x - q7;\n' + 'my = y - q8;\n' + 'an = ang;\n' + 'ra = pow(mx*mx + my*my,.5);\n' + 'rot = .02*sin(ra*6.2832*2 - time*4)*(mid + treb)*(mid + treb)*.5;'),
};

return pmap;
});
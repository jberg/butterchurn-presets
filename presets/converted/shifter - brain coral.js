define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.7,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 2.56,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 1.285751,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.999999,
		ob_r : 0.01,
		sy : 1.1155,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.36,
		mv_dy : -0.8,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 0.9996,
		ob_size : 0.5,
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
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 1.0,
		rot : 1.0E-6,
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
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.q3 = 0;
m.mod = 0;
m.q4 = 0;
m.q5 = 0;
m.mt = 0;
m.vav = 0;
m.treb_avg = 0;
m.tic = 0;
m.ra = 0;
m.bt = 0;
m.bass_avg = 0;
m.vol = 0;
m.tin = 0;
m.mid_avg = 0;
m.vt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = m.time;
m.vol = (((m.bass_att+m.treb_att)+m.mid_att)*0.333333);
m.ra = (div(1,m.tic)*0.25);
m.vav = (m.tic*((m.vav*(div(1,m.tic)-m.ra))+((m.ra*((m.bass+m.treb)+m.mid))*0.33333)));
m.ra = (div(1,m.tic)*0.05);
m.treb_avg = (m.tic*((m.treb_avg*(div(1,m.tic)-m.ra))+(m.ra*m.treb)));
m.mid_avg = (m.tic*((m.mid_avg*(div(1,m.tic)-m.ra))+(m.ra*m.mid)));
m.ra = (div(1,m.tic)*0.1);
m.bass_avg = (m.tic*((m.bass_avg*(div(1,m.tic)-m.ra))+(m.ra*m.bass)));
m.tt = (m.tt+(m.tic*m.treb));
m.mt = (m.mt+(m.tic*m.mid));
m.bt = (m.bt+(m.tic*m.bass));
m.vt = (m.vt+(m.tic*m.vav));
m.q1 = m.time;
m.q2 = (m.vav*0.1);
m.q3 = (0.02+(m.bass_avg*0.05));
m.q4 = (0.5+((m.treb_avg+m.mid_avg)*0.25));
m.q5 = (m.vt*3);
m.monitor = m.q4;
m.rot = (0.025*(0.7+(m.vav*0.25)));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.mod = 0.1;
m.cx = ifcond(above(m.y, 0.5), -1, 2);
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
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.8,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.mo = 0;
m.mod = 0;
m.sw = 0;
m.osa = 0;

			m.rkeys = ['sw'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sw = ((1-m.sw)*above(m.sample, 0));
m.osa = (m.sample*above(m.sample, 0));
m.mod = ((pow((m.value1*2), 2)*sign(m.value1))*0.5);
m.mod = m.value1;
m.mod = (m.mod*m.sw);
m.x = ifcond(m.sw, m.osa, m.sample);
m.x = (m.sample*0.5);
m.y = (1+(m.mod*0.5));
m.osa = m.sample;
m.mo = ((3.7+(m.mod*6))+m.q1);
m.r = (0.5+(Math.sin(m.mo)*0.5));
m.g = (0.5+(Math.sin((m.mo+1.0472))*0.5));
m.b = (0.5+(Math.sin((m.mo+2.0944))*0.5));
m.a = (1-(Math.abs(m.mod)*12));
m.a = (1-m.sw);
m.a = Math.max(0, Math.min(m.a, 1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sw = (1-sw)*above(sample,0);\n' + 'osa = sample*above(sample,0);\n' + 'mod = pow(value1*2,2)*sign(value1)*.5;\n' + 'mod = value1;\n' + 'mod = mod*sw;\n' + 'x = if(sw,osa,sample);\n' + 'x = sample*.5;\n' + 'y = 1 + mod*.5;\n' + 'osa = sample;\n' + 'mo = 3.7 + mod*6 + q1;\n' + 'r = .5 + sin(mo)*.5;\n' + 'g = .5 + sin(mo + 1.0472)*.5;\n' + 'b = .5 + sin(mo + 2.0944)*.5;\n' + 'a = 1 - abs(mod)*12;\n' + 'a = 1-sw;\n' + 'a = max(0,min(a,1));'),

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
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.8,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.mo = 0;
m.mod = 0;
m.sw = 0;
m.osa = 0;

			m.rkeys = ['sw'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sw = ((1-m.sw)*below(m.sample, 1));
m.osa = (m.sample*above(m.sample, 0));
m.mod = ((pow((m.value1*2), 2)*sign(m.value1))*0.5);
m.mod = m.value1;
m.mod = (m.mod*m.sw);
m.x = ifcond(m.sw, m.osa, m.sample);
m.x = (1-(m.sample*0.5));
m.y = (0+(m.mod*0.5));
m.osa = m.sample;
m.mo = ((3.7+(m.mod*6))+m.q1);
m.r = (0.5+(Math.sin(m.mo)*0.5));
m.g = (0.5+(Math.sin((m.mo+1.0472))*0.5));
m.b = (0.5+(Math.sin((m.mo+2.0944))*0.5));
m.a = (1-(Math.abs(m.mod)*12));
m.a = (1-m.sw);
m.a = Math.max(0, Math.min(m.a, 1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sw = (1-sw)*below(sample,1);\n' + 'osa = sample*above(sample,0);\n' + 'mod = pow(value1*2,2)*sign(value1)*.5;\n' + 'mod = value1;\n' + 'mod = mod*sw;\n' + 'x = if(sw,osa,sample);\n' + 'x = 1-sample*.5;\n' + 'y = 0 + mod*.5;\n' + 'osa = sample;\n' + 'mo = 3.7 + mod*6 + q1;\n' + 'r = .5 + sin(mo)*.5;\n' + 'g = .5 + sin(mo + 1.0472)*.5;\n' + 'b = .5 + sin(mo + 2.0944)*.5;\n' + 'a = 1 - abs(mod)*12;\n' + 'a = 1-sw;\n' + 'a = max(0,min(a,1));'),

		},
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
			r : 0.0,
			smoothing : 0.8,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.mo = 0;
m.mod = 0;
m.sw = 0;
m.osa = 0;

			m.rkeys = ['a','sw'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sw = ((1-m.sw)*above(m.sample, 0));
m.osa = (m.sample*above(m.sample, 0));
m.mod = ((pow((m.value1*2), 2)*sign(m.value1))*0.5);
m.mod = m.value1;
m.mod = m.mod;
m.x = ifcond(m.sw, m.osa, m.sample);
m.x = (m.sample*0.5);
m.y = (1+(m.mod*0.5));
m.osa = m.sample;
m.mo = ((3.7+(m.mod*6))+m.q1);
m.a = Math.max(0, Math.min(m.a, 1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sw = (1-sw)*above(sample,0);\n' + 'osa = sample*above(sample,0);\n' + 'mod = pow(value1*2,2)*sign(value1)*.5;\n' + 'mod = value1;\n' + 'mod = mod;\n' + 'x = if(sw,osa,sample);\n' + 'x = sample*.5;\n' + 'y = 1 + mod*.5;\n' + 'osa = sample;\n' + 'mo = 3.7 + mod*6 + q1;\n' + 'a = max(0,min(a,1));'),

		},
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
			r : 0.0,
			smoothing : 0.8,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.mo = 0;
m.mod = 0;
m.sw = 0;
m.osa = 0;

			m.rkeys = ['a','sw'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sw = ((1-m.sw)*above(m.sample, 0));
m.osa = (m.sample*above(m.sample, 0));
m.mod = ((pow((m.value1*2), 2)*sign(m.value1))*0.5);
m.mod = m.value1;
m.mod = m.mod;
m.x = ifcond(m.sw, m.osa, m.sample);
m.x = (1-(m.sample*0.5));
m.y = (0+(m.mod*0.5));
m.osa = m.sample;
m.mo = ((3.7+(m.mod*6))+m.q1);
m.a = Math.max(0, Math.min(m.a, 1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sw = (1-sw)*above(sample,0);\n' + 'osa = sample*above(sample,0);\n' + 'mod = pow(value1*2,2)*sign(value1)*.5;\n' + 'mod = value1;\n' + 'mod = mod;\n' + 'x = if(sw,osa,sample);\n' + 'x = 1 - sample*.5;\n' + 'y = 0 + mod*.5;\n' + 'osa = sample;\n' + 'mo = 3.7 + mod*6 + q1;\n' + 'a = max(0,min(a,1));'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.134785,
			x : 0.5,
			y : 1.0,
			ang : 0.0,
			sides : 54.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.ti = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ti = m.q1;
m.rad = m.q2;
m.x = ((m.ti-Math.floor(m.ti))*0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ti = q1;\n' + 'rad = q2;\n' + 'x = (ti - int(ti))*.5;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.134785,
			x : 0.5,
			y : 0.0,
			ang : 0.0,
			sides : 54.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.ti = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ti = m.q1;
m.rad = m.q2;
m.x = (1-((m.ti-Math.floor(m.ti))*0.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ti = q1;\n' + 'rad = q2;\n' + 'x = 1-(ti - int(ti))*.5;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 3.895574,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.5482,
			x : 0.69,
			y : 0.5,
			ang : 0.0,
			sides : 43.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.ti = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = (0.4+m.q3);
m.tex_zoom = (div(1,m.rad)*0.8);
m.x = (0.5+m.q3);
m.tex_ang = -m.q4;
m.ti = (m.q5+Math.sin((m.time*1.234)));
m.x = (0.5+(m.q3*Math.sin(m.ti)));
m.y = (0.5+((m.q3*Math.cos(m.ti))*0.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad = .4 + q3;\n' + 'tex_zoom = 1/rad*.8;\n' + 'x = .5 + q3;\n' + 'tex_ang = -q4;\n' + 'ti = q5 + sin(time*1.234);\n' + 'x = .5 + q3*sin(ti);\n' + 'y = .5 + q3*cos(ti)*.5;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.879646,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.548218,
			x : 0.500001,
			y : 0.5,
			ang : 0.0,
			sides : 43.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.ti = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = (0.4+m.q3);
m.tex_zoom = (div(1,m.rad)*0.8);
m.x = (0.5-m.q3);
m.tex_ang = m.q4;
m.ti = ((m.q5+Math.sin((m.time*0.948)))+3.1416);
m.x = (0.5+((m.q3*Math.sin(m.ti))*1.5));
m.y = (0.5+((m.q3*Math.cos(m.ti))*0.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad = .4 + q3;\n' + 'tex_zoom = 1/rad*.8;\n' + 'x = .5 - q3;\n' + 'tex_ang = q4;\n' + 'ti = q5 + sin(time*.948) + 3.1416;\n' + 'x = .5 + q3*sin(ti)*1.5;\n' + 'y = .5 + q3*cos(ti)*.5;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'tic = min(time-tin,.1);\n' + 'tin = time;\n' + 'vol = (bass_att + treb_att + mid_att)*.333333;\n' + 'ra = 1/tic*.25;\n' + 'vav = tic*(vav*(1/tic - ra) + ra*(bass+treb+mid)*.33333);\n' + 'ra = 1/tic*.05;\n' + 'treb_avg = tic*(treb_avg*(1/tic - ra) + ra*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - ra) + ra*mid);\n' + 'ra = 1/tic*.1;\n' + 'bass_avg = tic*(bass_avg*(1/tic - ra) + ra*bass);\n' + 'tt = tt + tic*treb;\n' + 'mt = mt + tic*mid;\n' + 'bt = bt + tic*bass;\n' + 'vt = vt + tic*vav;\n' + 'q1 = time;\n' + 'q2 = vav*.1;\n' + 'q3 = .02 + bass_avg*.05;\n' + 'q4 = .5 + (treb_avg + mid_avg)*.25;\n' + 'q5 = vt*3;\n' + 'monitor = q4;\n' + 'rot = .025*(.7 + vav*.25);'),
	'pixel_eqs_str' : ('mod = .1;\n' + 'cx = if(above(y,.5),-1,2);'),
};

return pmap;
});
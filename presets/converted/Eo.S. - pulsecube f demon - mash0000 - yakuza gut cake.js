define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.93,
		wave_g : 0.4,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.012,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.11,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 0.997,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 0.01,
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
		mv_l : 5.0,
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
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.slow = 0;
m.q3 = 0;
m.vol = 0;
m.mtime = 0;
m.mv_x = 64;
m.mv_y = 48;
m.nut = 0;
m.stp = 0;
m.stq = 0;
m.rtp = 0;
m.rtq = 0;
m.wvr = 0;
m.decay = 0;
m.dcsp = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.96;
m.zoom = 0.999;
m.warp = 0;
m.sx = -1;
m.q1 = ((Math.sin((m.time*3.3))*0.5)+0.5);
m.vol = (((m.bass+m.mid)+m.treb)*0.2);
m.vol = (m.vol*m.vol);
m.slow = Math.min((m.bass*m.bass), 1);
m.mtime = (m.mtime+((m.vol*0.1)*m.slow));
m.q1 = Math.min(m.vol, 1.4);
m.q2 = (m.mtime*1.6);
m.q3 = Math.min((m.vol*0.4), 1);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.11,
			enabled : 1.0,
			b : 0.11,
			g : 0.19,
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
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.t8 = 0;
m.sang = 0;
m.n = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.bend = 0;
m.xq = 0;
m.ang = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q2;
m.t8 = 1;
m.t2 = m.q1;
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.t8 = -m.t8;
m.bend = (1-pow(Math.abs(((m.sample*2)-1)), 2));
m.xp = (m.t8*(1-((m.bend*0.7)*m.t2)));
m.yp = ((m.sample*2)-1);
m.zp = ((m.bend*m.t2)*0.4);
m.zp = (m.zp+1);
m.ang = m.t1;
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.t1*2.1);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = (m.zp+6.1);
m.x = (div(m.xp,m.zp)+0.5);
m.y = ((div(m.yp,m.zp)*1.333)+0.5);
m.g = ((1-pow(Math.abs(((m.sample*2)-1)), 2))*0.7);
m.a = (((m.q3*m.q3)*0.9)+0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q2;\n' + 't8 = 1;\n' + 't2 = q1;'),
		'point_eqs_str' : ('n = sample*6.283;\n' + 't8 = -t8;\n' + 'bend = (1 - pow( abs(sample*2-1) , 2 ));\n' + 'xp = t8 * (1-bend*0.7*t2);\n' + 'yp = sample * 2 - 1;\n' + 'zp = bend * t2 * 0.4;\n' + 'zp = zp + 1;\n' + 'ang = t1;\n' + 'sang = sin(ang) ;\n' + ' cang = cos(ang);\n' + 'xq = xp;\n' + 'yq = yp*sang + zp*cang;\n' + 'zq = yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang = t1 * 2.1;\n' + 'sang = sin(ang) ;\n' + ' cang = cos(ang);\n' + 'xq = xp*sang + zp*cang;\n' + 'yq = yp;\n' + 'zq = xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp = zp + 6.1;\n' + 'x = xp/zp + 0.5;\n' + 'y = yp/zp * 1.333 + 0.5;\n' + 'g = (1 - pow( abs(sample*2-1) , 2 ))*0.7;\n' + 'a = q3*q3*0.9 + 0.1;'),

		},
		{
		'baseVals' : {
			a : 0.11,
			enabled : 1.0,
			b : 0.71,
			g : 0.19,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.54,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.t8 = 0;
m.sang = 0;
m.n = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.bend = 0;
m.xq = 0;
m.ang = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q2;
m.t8 = 1;
m.t2 = m.q1;
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.t8 = -m.t8;
m.bend = (1-pow(Math.abs(((m.sample*2)-1)), 2));
m.xp = (m.t8*(1-((m.bend*0.7)*m.t2)));
m.yp = ((m.sample*2)-1);
m.zp = ((m.bend*m.t2)*0.4);
m.zp = (-m.zp-2);
m.ang = m.t1;
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.t1*2.1);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = (m.zp+6.1);
m.x = (div(m.xp,m.zp)+0.5);
m.y = ((div(m.yp,m.zp)*1.333)+0.5);
m.g = ((1-pow(Math.abs(((m.sample*2)-1)), 2))*0.7);
m.a = (((m.q3*m.q3)*0.9)+0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q2;\n' + 't8 = 1;\n' + 't2 = q1;'),
		'point_eqs_str' : ('n = sample*6.283;\n' + 't8 = -t8;\n' + 'bend = (1 - pow( abs(sample*2-1) , 2 ));\n' + 'xp = t8 * (1-bend*0.7*t2);\n' + 'yp = sample * 2 - 1;\n' + 'zp = bend * t2 * 0.4;\n' + 'zp = -zp - 2;\n' + 'ang = t1;\n' + 'sang = sin(ang) ;\n' + ' cang = cos(ang);\n' + 'xq = xp;\n' + 'yq = yp*sang + zp*cang;\n' + 'zq = yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang = t1 * 2.1;\n' + 'sang = sin(ang) ;\n' + ' cang = cos(ang);\n' + 'xq = xp*sang + zp*cang;\n' + 'yq = yp;\n' + 'zq = xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp = zp + 6.1;\n' + 'x = xp/zp + 0.5;\n' + 'y = yp/zp * 1.333 + 0.5;\n' + 'g = (1 - pow( abs(sample*2-1) , 2 ))*0.7;\n' + 'a = q3*q3*0.9 + 0.1;'),

		},
		{
		'baseVals' : {
			a : 0.11,
			enabled : 0.0,
			b : 0.71,
			g : 0.19,
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
m.q1 = 0;
m.q2 = 0;
m.t8 = 0;
m.sang = 0;
m.n = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.bend = 0;
m.xq = 0;
m.ang = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q2;
m.t8 = 1;
m.t2 = m.q1;
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.t8 = -m.t8;
m.bend = (1-pow(Math.abs(((m.sample*2)-1)), 2));
m.zp = (m.t8*(1-((m.bend*0.7)*m.t2)));
m.yp = ((m.sample*2)-1);
m.xp = ((m.bend*m.t2)*0.4);
m.xp = (m.xp+1);
m.ang = m.t1;
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.t1*2.1);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = (m.zp+6.1);
m.x = (div(m.xp,m.zp)+0.5);
m.y = ((div(m.yp,m.zp)*1.333)+0.5);
m.g = ((1-pow(Math.abs(((m.sample*2)-1)), 2))*0.7);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q2;\n' + 't8 = 1;\n' + 't2 = q1;'),
		'point_eqs_str' : ('n = sample*6.283;\n' + 't8 = -t8;\n' + 'bend = (1 - pow( abs(sample*2-1) , 2 ));\n' + 'zp = t8 * (1-bend*0.7*t2);\n' + 'yp = sample * 2 - 1;\n' + 'xp = bend * t2 * 0.4;\n' + 'xp = xp + 1;\n' + 'ang = t1;\n' + 'sang = sin(ang) ;\n' + ' cang = cos(ang);\n' + 'xq = xp;\n' + 'yq = yp*sang + zp*cang;\n' + 'zq = yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang = t1 * 2.1;\n' + 'sang = sin(ang) ;\n' + ' cang = cos(ang);\n' + 'xq = xp*sang + zp*cang;\n' + 'yq = yp;\n' + 'zq = xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp = zp + 6.1;\n' + 'x = xp/zp + 0.5;\n' + 'y = yp/zp * 1.333 + 0.5;\n' + 'g = (1 - pow( abs(sample*2-1) , 2 ))*0.7;'),

		},
		{
		'baseVals' : {
			a : 0.11,
			enabled : 0.0,
			b : 0.71,
			g : 0.19,
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
m.q1 = 0;
m.q2 = 0;
m.t8 = 0;
m.sang = 0;
m.n = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.bend = 0;
m.xq = 0;
m.ang = 0;
m.t1 = 0;
m.t2 = 0;

			m.rkeys = ['t8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q2;
m.t8 = 1;
m.t2 = m.q1;
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.t8 = -m.t8;
m.bend = (1-pow(Math.abs(((m.sample*2)-1)), 2));
m.zp = (m.t8*(1-((m.bend*0.7)*m.t2)));
m.yp = ((m.sample*2)-1);
m.xp = ((m.bend*m.t2)*0.4);
m.xp = (-m.xp-1);
m.ang = m.t1;
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.t1*2.1);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = (m.zp+6.1);
m.x = (div(m.xp,m.zp)+0.5);
m.y = ((div(m.yp,m.zp)*1.333)+0.5);
m.g = ((1-pow(Math.abs(((m.sample*2)-1)), 2))*0.7);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q2;\n' + 't8 = 1;\n' + 't2 = q1;'),
		'point_eqs_str' : ('n = sample*6.283;\n' + 't8 = -t8;\n' + 'bend = (1 - pow( abs(sample*2-1) , 2 ));\n' + 'zp = t8 * (1-bend*0.7*t2);\n' + 'yp = sample * 2 - 1;\n' + 'xp = bend * t2 * 0.4;\n' + 'xp = -xp - 1;\n' + 'ang = t1;\n' + 'sang = sin(ang) ;\n' + ' cang = cos(ang);\n' + 'xq = xp;\n' + 'yq = yp*sang + zp*cang;\n' + 'zq = yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang = t1 * 2.1;\n' + 'sang = sin(ang) ;\n' + ' cang = cos(ang);\n' + 'xq = xp*sang + zp*cang;\n' + 'yq = yp;\n' + 'zq = xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp = zp + 6.1;\n' + 'x = xp/zp + 0.5;\n' + 'y = yp/zp * 1.333 + 0.5;\n' + 'g = (1 - pow( abs(sample*2-1) , 2 ))*0.7;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.6,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.7,
			tex_zoom : 0.90529,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.33334,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 13.0,
			border_r : 1.0,
			num_inst : 1.0,
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
			r2 : 0.6,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.7,
			tex_zoom : 0.60202,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.65435,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
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
			r2 : 0.6,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.7,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
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
			r2 : 0.5,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.7,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '  uv_1.y = uv.y;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3.x = roam_cos.x;\n' + '  tmpvar_3.y = roam_sin.x;\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (texsize_noise_lq.zw * texsize.xy);\n' + '  P_5 = (((0.1 * tmpvar_6) * uv) + (tmpvar_3 * 0.1));\n' + '  tmpvar_4 = texture2D (sampler_noise_lq, P_5);\n' + '  uv_1.x = (uv.x + ((0.02 * \n' + '    ((tmpvar_4.y * 2.0) - 1.0)\n' + '  ) * aspect.x));\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7.x = roam_sin.y;\n' + '  tmpvar_7.y = -(roam_cos.y);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (((0.0125 * tmpvar_6) * uv_1) + (tmpvar_7 * 0.03));\n' + '  tmpvar_8 = texture2D (sampler_noise_lq, P_9);\n' + '  uv_1.x = (uv_1.x + ((0.04 * \n' + '    ((tmpvar_8.z * 2.0) - 1.0)\n' + '  ) * aspect.x));\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_main, uv_1);\n' + '  ret_2 = tmpvar_10.xyz;\n' + '  ret_2 = (ret_2 * vec3(0.99, 0.98, 0.97));\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_noise_lq, tmpvar_11);\n' + '  ret_2 = (ret_2 + ((\n' + '    (tmpvar_12.x - 0.5)\n' + '   / 256.0) * 2.0));\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13.w = 1.0;\n' + '  tmpvar_13.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_13;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=0.96;\n' + 'zoom=0.999;\n' + 'warp =0;\n' + 'sx=-1;\n' + 'q1 = sin(time*3.3) * 0.5 + 0.5;\n' + 'vol = (bass+mid+treb)*0.2;\n' + 'vol= vol*vol;\n' + 'slow = min( bass*bass , 1 );\n' + 'mtime = mtime+ vol*0.1*slow;\n' + 'q1 = min( vol, 1.4 );\n' + 'q2 = mtime*1.6;\n' + 'q3 = min(vol*0.4,1);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
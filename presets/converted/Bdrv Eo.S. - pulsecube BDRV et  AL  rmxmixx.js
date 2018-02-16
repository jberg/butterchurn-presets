define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.299999,
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
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.0,
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
		nwrapmode_x : 1.0,
		cx : 0.5,
		dy : 0.0,
		nwrapmode_y : 1.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.1,
		nechowrap_x : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		nechowrap_y : 0.0,
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
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.slow = 0;
m.mod = 0;
m.num = 0;
m.anga = 0;
m.dx_r = 0;
m.dy_r = 0;
m.ox = 0;
m.oy = 0;
m.an = 0;
m.vol = 0;
m.radi = 0;
m.seg = 0;
m.pi = 0;
m.mtime = 0;
m.thresh = 0;
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
m.decay = 0.97;
m.zoom = 1.000;
m.q1 = ((Math.sin((m.time*3.3))*0.5)+0.5);
m.vol = (((m.bass+m.mid)+m.treb)*0.2);
m.vol = (m.vol*m.vol);
m.slow = Math.min((m.bass*m.bass), 1);
m.mtime = (m.mtime+((m.vol*0.1)*m.slow));
m.q1 = Math.min(m.vol, 1);
m.q2 = div(m.mtime,3);
		m.rkeys = ['dx_r','dy_r','zoom','rot','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.zoom = (m.zoom-(0.02*Math.tan(((m.bass_att*6)*(1-m.rad)))));
m.rot = (m.rot-(0.35*(above(m.x, (0.45+(0.75*Math.sin(((m.time*5)*m.bass_att)))))*below(m.x, (0.55+(0.75*Math.sin(((m.time*5)*m.bass_att))))))));
m.num = 8;
m.pi = 3.141592654;
m.radi = ((m.y-0.5)*0.75);
m.radi = (m.y-0.5);
m.radi = pow(((m.radi*m.radi)+((m.x-0.5)*(m.x-0.5))), 0.5);
m.an = ((m.ang+m.pi)+m.time);
m.an = (m.an-((m.pi*2)*Math.floor(div(m.an,(m.pi*2)))));
m.mod = 0.1;
m.seg = (m.ang+m.pi);
m.seg = (div(m.seg,(m.pi*2))*m.num);
m.seg = Math.floor(m.seg);
m.seg = (m.seg-equal(m.seg, m.num));
m.anga = ((m.ang+m.pi)-(div((m.pi*2),m.num)*m.seg));
m.anga = ifcond(equal(mod(m.seg,2), 0), (div((m.pi*2),m.num)-m.anga), m.anga);
m.anga = (m.anga+div(m.pi,4));
m.ox = (0.5-(m.radi*Math.sin(m.anga)));
m.oy = (0.5+(m.radi*Math.cos(m.anga)));
m.dx = (equal(m.seg, 3)*(m.x-m.ox));
m.dy = (equal(m.seg, 3)*(m.y-m.oy));
m.dx = (above(m.seg, 0)*(m.x-m.ox));
m.dy = (above(m.seg, 0)*(m.y-m.oy));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.110001,
			enabled : 1.0,
			b : 0.71,
			g : 0.19,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			bdrawback : 0.0,
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
m.xp = m.t8;
m.yp = ((m.sample*2)-1);
m.zp = (((1-pow(Math.abs(((m.sample*2)-1)), 2))*m.t2)*0.4);
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
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1 = q2;\n' + 't8 = 1;\n' + 't2 = q1;'),
		'point_eqs_str' : ('n = sample*6.283;\n' + 't8 = -t8;\n' + 'xp = t8;\n' + 'yp = sample * 2 - 1;\n' + 'zp = (1 - pow( abs(sample*2-1) , 2 )) * t2 * 0.4;\n' + 'zp = zp + 1;\n' + 'ang = t1;\n' + 'sang = sin(ang) ;\n' + ' cang = cos(ang);\n' + 'xq = xp;\n' + 'yq = yp*sang + zp*cang;\n' + 'zq = yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang = t1 * 2.1;\n' + 'sang = sin(ang) ;\n' + ' cang = cos(ang);\n' + 'xq = xp*sang + zp*cang;\n' + 'yq = yp;\n' + 'zq = xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp = zp + 6.1;\n' + 'x = xp/zp + 0.5;\n' + 'y = yp/zp * 1.333 + 0.5;\n' + 'g = (1 - pow( abs(sample*2-1) , 2 ))*0.7;'),

		},
		{
		'baseVals' : {
			a : 0.110001,
			enabled : 1.0,
			b : 0.71,
			g : 0.19,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			bdrawback : 0.0,
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
m.xp = m.t8;
m.yp = ((m.sample*2)-1);
m.zp = (((1-pow(Math.abs(((m.sample*2)-1)), 2))*m.t2)*0.4);
m.zp = (-m.zp-1);
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
		'point_eqs_str' : ('n = sample*6.283;\n' + 't8 = -t8;\n' + 'xp = t8;\n' + 'yp = sample * 2 - 1;\n' + 'zp = (1 - pow( abs(sample*2-1) , 2 )) * t2 * 0.4;\n' + 'zp = -zp - 1;\n' + 'ang = t1;\n' + 'sang = sin(ang) ;\n' + ' cang = cos(ang);\n' + 'xq = xp;\n' + 'yq = yp*sang + zp*cang;\n' + 'zq = yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang = t1 * 2.1;\n' + 'sang = sin(ang) ;\n' + ' cang = cos(ang);\n' + 'xq = xp*sang + zp*cang;\n' + 'yq = yp;\n' + 'zq = xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp = zp + 6.1;\n' + 'x = xp/zp + 0.5;\n' + 'y = yp/zp * 1.333 + 0.5;\n' + 'g = (1 - pow( abs(sample*2-1) , 2 ))*0.7;'),

		},
		{
		'baseVals' : {
			a : 0.110001,
			enabled : 1.0,
			b : 0.71,
			g : 0.19,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			bdrawback : 0.0,
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
m.zp = m.t8;
m.yp = ((m.sample*2)-1);
m.xp = (((1-pow(Math.abs(((m.sample*2)-1)), 2))*m.t2)*0.4);
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
		'point_eqs_str' : ('n = sample*6.283;\n' + 't8 = -t8;\n' + 'zp = t8;\n' + 'yp = sample * 2 - 1;\n' + 'xp = (1 - pow( abs(sample*2-1) , 2 )) * t2 * 0.4;\n' + 'xp = xp + 1;\n' + 'ang = t1;\n' + 'sang = sin(ang) ;\n' + ' cang = cos(ang);\n' + 'xq = xp;\n' + 'yq = yp*sang + zp*cang;\n' + 'zq = yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang = t1 * 2.1;\n' + 'sang = sin(ang) ;\n' + ' cang = cos(ang);\n' + 'xq = xp*sang + zp*cang;\n' + 'yq = yp;\n' + 'zq = xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp = zp + 6.1;\n' + 'x = xp/zp + 0.5;\n' + 'y = yp/zp * 1.333 + 0.5;\n' + 'g = (1 - pow( abs(sample*2-1) , 2 ))*0.7;'),

		},
		{
		'baseVals' : {
			a : 0.110001,
			enabled : 1.0,
			b : 0.71,
			g : 0.19,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			bdrawback : 0.0,
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
m.zp = m.t8;
m.yp = ((m.sample*2)-1);
m.xp = (((1-pow(Math.abs(((m.sample*2)-1)), 2))*m.t2)*0.4);
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
		'point_eqs_str' : ('n = sample*6.283;\n' + 't8 = -t8;\n' + 'zp = t8;\n' + 'yp = sample * 2 - 1;\n' + 'xp = (1 - pow( abs(sample*2-1) , 2 )) * t2 * 0.4;\n' + 'xp = -xp - 1;\n' + 'ang = t1;\n' + 'sang = sin(ang) ;\n' + ' cang = cos(ang);\n' + 'xq = xp;\n' + 'yq = yp*sang + zp*cang;\n' + 'zq = yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang = t1 * 2.1;\n' + 'sang = sin(ang) ;\n' + ' cang = cos(ang);\n' + 'xq = xp*sang + zp*cang;\n' + 'yq = yp;\n' + 'zq = xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp = zp + 6.1;\n' + 'x = xp/zp + 0.5;\n' + 'y = yp/zp * 1.333 + 0.5;\n' + 'g = (1 - pow( abs(sample*2-1) , 2 ))*0.7;'),

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
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.1,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 1.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 1.8,
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
			r2 : 0.6,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.7,
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.1,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 1.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 1.8,
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
			r2 : 0.6,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.7,
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.1,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 1.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 1.8,
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
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.1,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 1.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
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
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=0.97;\n' + 'zoom=1.000;\n' + 'q1 = sin(time*3.3) * 0.5 + 0.5;\n' + 'vol = (bass+mid+treb)*0.2;\n' + 'vol= vol*vol;\n' + 'slow = min( bass*bass , 1 );\n' + 'mtime = mtime+ vol*0.1*slow;\n' + 'q1 = min( vol, 1 );\n' + 'q2 = mtime/3;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'zoom = zoom - 0.02*tan(bass_att*6*(1-rad));\n' + 'rot = rot - 0.35*(above(x,0.45 + 0.75*sin(time*5*bass_att))*below(x,0.55  + 0.75*sin(time*5*bass_att)));\n' + 'num = 8;\n' + 'pi = 3.141592654;\n' + 'radi = (y-.5)*.75;\n' + 'radi = (y-.5);\n' + 'radi = pow(radi*radi + (x-.5)*(x-.5),.5);\n' + 'an = ang + pi + time;\n' + 'an = an - pi*2*int(an/(pi*2));\n' + 'mod = .1;\n' + 'seg = ang + pi;\n' + 'seg = seg/(pi*2)*num;\n' + 'seg = int(seg);\n' + 'seg = seg - equal(seg,num);\n' + 'anga = (ang + pi) - (pi*2/num)*seg;\n' + 'anga = if(equal(seg%2,0),(pi*2/num) - anga,anga);\n' + 'anga = anga + pi/4;\n' + 'ox = .5 - radi*sin(anga);\n' + 'oy = .5 + radi*cos(anga);\n' + 'dx = equal(seg,3)*(x-ox);\n' + 'dy = equal(seg,3)*(y-oy);\n' + 'dx = above(seg,0)*(x-ox);\n' + 'dy = above(seg,0)*(y-oy);'),
};

return pmap;
});
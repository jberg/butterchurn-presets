define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
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
		ib_a : 1.0,
		wave_b : 0.3,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
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
m.decay = 0.95;
m.zoom = 1.002;
m.q1 = (m.ib_a*6.283);
m.q2 = (((m.bass+m.mid)+m.treb)*0.25);
m.q2 = (m.q2*m.q2);
m.monitor = m.q2;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1+div(m.rad,7));
m.rot = (div(m.rad,100)*Math.sin(m.time));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.2,
			enabled : 1.0,
			b : 1.0,
			g : 0.28,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.1,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.cc = 0;
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.cc_a = 0;
m.cc_b = 0;
m.bias_i = 0;
m.cc_ad_a = 0;
m.cc_ad_b = 0;
m.sang = 0;
m.n = 0;
m.cc_int = 0;
m.cc_ramp = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.ang2 = 0;
m.xp = 0;
m.yq = 0;
m.pi2 = 0;
m.pi = 0;
m.bias = 0;
m.xq = 0;
m.ang = 0;
m.ys = 0;
m.phs = 0;
m.xs = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t2 = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.time*13);
m.t2 = ((Math.sin((m.time*3))*0.5)+0.5);
m.t2 = ((m.t2*0.3)+0.1);
m.t2 = ((m.q2*0.003)+0.06);
m.t3 = m.q1;
m.t4 = div(m.time,8);
m.t5 = ((Math.sin(div(m.time,4))*0.5)+0.5);
m.t5 = ((m.t5*17)+2);
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.pi = 3.1415;
m.pi2 = 6.283;
m.phs = (m.t1+(m.sample*9));
m.bias = m.t5;
m.bias_i = (m.bias-1);
m.cc = div(m.phs,3);
m.cc_int = Math.floor(m.cc);
m.cc_ramp = (m.cc-m.cc_int);
m.cc_ad_a = div(((m.cc_ramp*m.bias)-1),m.bias_i);
m.cc_ad_a = ifcond(below(m.cc_ad_a, 0), 0, m.cc_ad_a);
m.cc_ad_b = (m.cc_ramp*m.bias);
m.cc_ad_b = ifcond(above(m.cc_ad_b, 1), 1, m.cc_ad_b);
m.cc_a = (m.cc_ad_a+m.cc_int);
m.cc_b = (m.cc_ad_b+m.cc_int);
m.xp = (m.t2*above(m.cc_ad_a, 0));
m.yp = 1;
m.zp = 0;
m.ang = ((m.cc_a*6.283)*16);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.sang*m.xp)+(m.cang*m.zp));
m.yq = m.yp;
m.zq = ((m.cang*m.xp)-(m.sang*m.zp));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang2 = (m.cc_b+m.t4);
m.sang = Math.sin(m.ang2);
m.cang = Math.cos(m.ang2);
m.xq = m.xp;
m.yq = ((m.sang*m.yp)+(m.cang*m.zp));
m.zq = ((m.cang*m.yp)-(m.sang*m.zp));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang2 = ((m.cc_b*3.13)+m.t4);
m.sang = Math.sin(m.ang2);
m.cang = Math.cos(m.ang2);
m.xq = ((m.sang*m.xp)+(m.cang*m.yp));
m.yq = ((m.cang*m.xp)-(m.sang*m.yp));
m.zq = m.zp;
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang2 = ((m.cc_b*1.43)+m.t4);
m.sang = Math.sin(m.ang2);
m.cang = Math.cos(m.ang2);
m.xq = ((m.sang*m.xp)+(m.cang*m.zp));
m.yq = m.yp;
m.zq = ((m.cang*m.xp)-(m.sang*m.zp));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = (m.zp+3.1);
m.xs = (div(m.xp,m.zp)+0.5);
m.ys = ((div(m.yp,m.zp)*1.333)+0.5);
m.x = m.xs;
m.y = m.ys;
		return m;
	},
		'init_eqs_str' : ('t2 = 0;'),
		'frame_eqs_str' : ('t1 = time * 13;\n' + 't2 = sin(time*3) * 0.5 + 0.5;\n' + 't2 = t2 * 0.3 + 0.1;\n' + 't2= q2 * 0.003 + 0.06;\n' + 't3= q1;\n' + 't4 = time/8;\n' + 't5 = sin( time / 4 ) * 0.5 + 0.5;\n' + 't5 = t5 * 17 + 2;'),
		'point_eqs_str' : ('n = sample*6.283;\n' + 'pi = 3.1415;\n' + 'pi2 = 6.283;\n' + 'phs = t1 + sample*9;\n' + 'bias = t5;\n' + 'bias_i = bias - 1;\n' + 'cc = phs / 3;\n' + 'cc_int = int(cc);\n' + 'cc_ramp = cc - cc_int;\n' + 'cc_ad_a = (cc_ramp * bias - 1) / bias_i;\n' + 'cc_ad_a = if( below(cc_ad_a,0) , 0 , cc_ad_a );\n' + 'cc_ad_b = cc_ramp * bias;\n' + 'cc_ad_b = if( above(cc_ad_b,1) , 1 , cc_ad_b );\n' + 'cc_a = cc_ad_a + cc_int;\n' + 'cc_b = (cc_ad_b + cc_int) ;\n' + 'xp = t2 * above(cc_ad_a , 0);\n' + 'yp = 1;\n' + 'zp = 0;\n' + 'ang = cc_a * 6.283 * 16;\n' + 'sang = sin(ang) ;\n' + ' cang = cos(ang);\n' + 'xq = sang*xp + cang*zp;\n' + 'yq = yp;\n' + 'zq = cang*xp - sang*zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang2 = cc_b + t4;\n' + 'sang = sin(ang2) ;\n' + ' cang = cos(ang2);\n' + 'xq = xp;\n' + 'yq = sang*yp + cang*zp;\n' + 'zq = cang*yp - sang*zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang2 = cc_b * 3.13 + t4;\n' + 'sang = sin(ang2) ;\n' + ' cang = cos(ang2);\n' + 'xq = sang*xp + cang*yp;\n' + 'yq = cang*xp - sang*yp;\n' + 'zq = zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang2 = cc_b * 1.43 + t4;\n' + 'sang = sin(ang2) ;\n' + ' cang = cos(ang2);\n' + 'xq = sang*xp + cang*zp;\n' + 'yq = yp;\n' + 'zq = cang*xp - sang*zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp = zp+3.1;\n' + 'xs = xp/zp + 0.5;\n' + 'ys = yp/zp * 1.333 + 0.5;\n' + 'x=xs;\n' + 'y=ys;'),

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
			a : 0.22,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.91,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.3,
			border_g : 1.0,
			rad : 0.548219,
			x : 0.5,
			y : 0.5,
			ang : 1.445133,
			sides : 22.0,
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
			r2 : 0.1,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.2,
			textured : 0.0,
			g2 : 0.2,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.3,
			a2 : 1.0,
			r : 0.4,
			border_g : 1.0,
			rad : 0.249785,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 33.0,
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
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.416601,
			additive : 1.0,
			border_a : 0.18,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.364568,
			x : 0.5,
			y : 0.5,
			ang : 1.570797,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = div(m.time,4);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time/4;'),

		},
		{
		'baseVals' : {
			r2 : 0.5,
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
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = div(-m.time,3);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = -time/3;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=0.95;\n' + 'zoom=1.002;\n' + 'q1= ib_a * 6.283;\n' + 'q2 = (bass+mid+treb)*0.25;\n' + 'q2 = q2*q2;\n' + 'monitor = q2;'),
	'pixel_eqs_str' : ('zoom=1+(rad/7);\n' + 'rot=(rad/100)*sin(time);'),
};

return pmap;
});
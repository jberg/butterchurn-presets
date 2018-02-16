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
		ob_r : 1.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 1.006593,
		ob_size : 0.02,
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
		nwrapmode_x : 2.0,
		cx : 0.5,
		dy : 0.0,
		nwrapmode_y : 2.0,
		ob_a : 0.6,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		nechowrap_x : 2.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		nechowrap_y : 2.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.96,
		wave_a : 0.001,
		ob_g : 0.46,
		ib_a : 1.0,
		wave_b : 0.3,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 3.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.mod = 0;
m.sw = 0;
m.q8 = 0;
m.dx_r = 0;
m.dy_r = 0;
m.it = 0;
m.mx = 0;
m.my = 0;
m.zq = 0;
m.radm = 0;
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
m.decay = 0.95;
m.q1 = (m.ib_a*6.283);
m.q2 = (((m.bass+m.mid)+m.treb)*0.25);
m.q2 = (m.q2*m.q2);
m.zq = ifcond(below(m.q2, 0.3), (pow(div(m.q2,0.3), 2.3)*0.3), m.q2);
m.zoom = (1.00+(m.zq*0.03));
m.monitor = m.q2;
m.mtime = (m.mtime+(m.q2*0.1));
m.q3 = m.mtime;
m.ob_size = (m.ob_size+(0.025*(((3*Math.tan((0.6*Math.sin((2*m.bass_att)))))*m.bass_att)*4)));
		m.rkeys = ['dx_r','dy_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.it = (0.3*Math.sin((m.time*0.2)));
m.radm = (m.rad*0.5);
m.rot = div((0.02*Math.sin(((m.radm+m.it)*30))),((m.rad+0.1)*(((Math.sin(m.time)*0.4)+0.5)*20)));
m.mod = Math.sin((m.ang*5));
m.mod = (m.mod*m.mod);
m.zoom = (0.99-Math.abs((0.01*m.mod)));
m.mx = ((m.x-0.5)*1.33);
m.my = (m.y-0.5);
m.sw = ((above(m.rad, 0.4)+below(m.rad, 0.04))+(((above(m.rad, 0.3)*below(m.rad, 0.4))*(m.rad-0.3))*5));
m.sw = ((above(m.rad, 0.3)*(m.rad-0.3))*5);
m.zoom = (1-(0.1*m.sw));
m.rot = (0+(0.2*m.sw));
m.dx = ((((1-m.sw)*Math.sin(m.ang))*0.001)*0.75);
m.dy = (((1-m.sw)*Math.cos(m.ang))*0.001);
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.zoom = (m.zoom+0.01);
m.zoom = (m.zoom+((0.05+(0.04*Math.sin(m.time)))*(0.2*Math.sin((m.ang*m.time)))));
m.rot = (m.rot+(0.01*(0.5*Math.cos((((m.ang*5)*m.bass)*m.time)))));
m.dx = (m.dx+((0.1*above(m.rad, 0.25))*m.dx_r));
m.dy = (m.dy+((0.1*above(m.rad, 0.25))*m.dy_r));
m.rot = ((0.1*pow(-m.ang, 3))-(1.18*Math.sin(m.ang)));
m.zoom = ((((1.9+(Math.sin(div(m.time,2))*0.45))*Math.sin(-m.rad))+1.3)+Math.sin(m.rad));
m.dx = (m.dx+(0.09*Math.sin((m.q8*0.785))));
m.dy = (m.dy+(0.09*Math.sin((m.q8*0.675))));
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.zoom = (m.zoom+(0.025*(((3*Math.tan(((0.6*Math.sin((2*m.bass_att)))-m.rad)))*m.bass_att)*4)));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.799999,
			enabled : 1.0,
			b : 0.0,
			g : 0.5,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			bdrawback : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.cc = 0;
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.cc_a = 0;
m.q3 = 0;
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
			m.rkeys = ['bias'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (div(m.q3,3)*13);
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
m.phs = (m.t1+((m.sample*9)*m.bias));
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
		'frame_eqs_str' : ('t1 = q3/3 * 13;\n' + 't2 = sin(time*3) * 0.5 + 0.5;\n' + 't2 = t2 * 0.3 + 0.1;\n' + 't2= q2 * 0.003 + 0.06;\n' + 't3= q1;\n' + 't4 = time/8;\n' + 't5 = sin( time / 4 ) * 0.5 + 0.5;\n' + 't5 = t5 * 17 + 2;'),
		'point_eqs_str' : ('n = sample*6.283;\n' + 'pi = 3.1415;\n' + 'pi2 = 6.283;\n' + 'phs = t1 + sample*9*bias;\n' + 'bias = t5;\n' + 'bias_i = bias - 1;\n' + 'cc = phs / 3;\n' + 'cc_int = int(cc);\n' + 'cc_ramp = cc - cc_int;\n' + 'cc_ad_a = (cc_ramp * bias - 1) / bias_i;\n' + 'cc_ad_a = if( below(cc_ad_a,0) , 0 , cc_ad_a );\n' + 'cc_ad_b = cc_ramp * bias;\n' + 'cc_ad_b = if( above(cc_ad_b,1) , 1 , cc_ad_b );\n' + 'cc_a = cc_ad_a + cc_int;\n' + 'cc_b = (cc_ad_b + cc_int) ;\n' + 'xp = t2 * above(cc_ad_a , 0);\n' + 'yp = 1;\n' + 'zp = 0;\n' + 'ang = cc_a * 6.283 * 16;\n' + 'sang = sin(ang) ;\n' + ' cang = cos(ang);\n' + 'xq = sang*xp + cang*zp;\n' + 'yq = yp;\n' + 'zq = cang*xp - sang*zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang2 = cc_b + t4;\n' + 'sang = sin(ang2) ;\n' + ' cang = cos(ang2);\n' + 'xq = xp;\n' + 'yq = sang*yp + cang*zp;\n' + 'zq = cang*yp - sang*zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang2 = cc_b * 3.13 + t4;\n' + 'sang = sin(ang2) ;\n' + ' cang = cos(ang2);\n' + 'xq = sang*xp + cang*yp;\n' + 'yq = cang*xp - sang*yp;\n' + 'zq = zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang2 = cc_b * 1.43 + t4;\n' + 'sang = sin(ang2) ;\n' + ' cang = cos(ang2);\n' + 'xq = sang*xp + cang*zp;\n' + 'yq = yp;\n' + 'zq = cang*xp - sang*zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp = zp+3.1;\n' + 'xs = xp/zp + 0.5;\n' + 'ys = yp/zp * 1.333 + 0.5;\n' + 'x=xs;\n' + 'y=ys;'),

		},
		{
		'baseVals' : {
			a : 0.799999,
			enabled : 1.0,
			b : 0.3,
			g : 0.58,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			bdrawback : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
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
m.q3 = 0;
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
m.t1 = ((div(m.q3,3)*13)+5.3);
m.t2 = ((m.q2*0.004)+0.08);
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
		'frame_eqs_str' : ('t1 = q3/3 * 13 + 5.3;\n' + 't2= q2 * 0.004 + 0.08;\n' + 't3= q1;\n' + 't4 = time/8;\n' + 't5 = sin( time / 4 ) * 0.5 + 0.5;\n' + 't5 = t5 * 17 + 2;'),
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
			bdrawback : 0.0,
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
			bdrawback : 0.0,
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
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.0,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
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
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.81954,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.0,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 2.0,
			a2 : 1.0,
			y_wrap_mode : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.226126,
			x : 0.5,
			y : 0.5,
			ang : 4.39823,
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
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.18,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 1.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
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
	'frame_eqs_str' : ('decay=0.95;\n' + 'q1= ib_a * 6.283;\n' + 'q2 = (bass+mid+treb)*0.25;\n' + 'q2 = q2*q2;\n' + 'zq = if( below(q2,0.3) , pow(q2/0.3 , 2.3)*0.3 , q2 );\n' + 'zoom=1.00 + zq*0.03;\n' + 'monitor = q2;\n' + 'mtime = mtime + q2 * 0.1;\n' + 'q3 = mtime;\n' + 'ob_size = ob_size + 0.025*(3*tan(0.6*sin(2*bass_att))*bass_att*4);'),
	'pixel_eqs_str' : ('it = 0.3*sin(time*0.2);\n' + 'radm = rad*0.5;\n' + 'rot = 0.02*sin((radm+it)*30)/((rad+0.1)*((sin(time)*0.4+0.5)*20));\n' + 'mod = sin(ang*5);\n' + 'mod = mod*mod;\n' + 'zoom = .99 - abs(0.01*mod);\n' + 'mx = (x-.5)*1.33;\n' + 'my = y - .5;\n' + 'sw = above(rad,.4) + below(rad,.04) + above(rad,.3)*below(rad,.4)*(rad-.3)*5;\n' + 'sw = above(rad,.3)*(rad-.3)*5;\n' + 'zoom = 1 - .1*sw;\n' + 'rot = 0 + .2*sw;\n' + 'dx = (1-sw)*sin(ang)*.001*.75;\n' + 'dy = (1-sw)*cos(ang)*.001;\n' + 'thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'zoom = zoom + 0.01;\n' + 'zoom = zoom + (0.05 + 0.04*sin(time))*(0.2*sin(ang*time));\n' + 'rot = rot + 0.01*(0.5*cos(ang*5*bass*time));\n' + 'dx = dx + 0.1*above(rad,0.25)*dx_r;\n' + 'dy = dy + 0.1*above(rad,0.25)*dy_r;\n' + 'rot=0.1*pow(-ang,3)-1.18*sin(ang);\n' + 'zoom=(1.9+sin(time/2)*0.45)*sin(-rad)+1.3+ sin(rad);\n' + 'dx = dx + 0.09*sin(q8*0.785);\n' + 'dy = dy + 0.09*sin(q8*0.675);\n' + 'thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'zoom = zoom + 0.025*(3*tan(0.6*sin(2*bass_att)-rad)*bass_att*4);'),
};

return pmap;
});
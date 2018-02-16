define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.14,
		wave_g : 0.4,
		ib_g : 0.3,
		mv_x : 3.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 2.0,
		wave_scale : 0.012,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 0.8,
		sy : 0.9998,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 3.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.8802,
		mv_dx : 0.02,
		mv_dy : -0.02,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.3,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.48,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9998,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.8,
		mv_l : 0.15,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.899,
		wave_a : 0.001,
		ob_g : 0.8,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.0,
		mv_r : 0.49,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.wx = 0;
m.q3 = 0;
m.wy = 0;
m.dbass = 0;
m.q4 = 0;
m.q5 = 0;
m.interval = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.rotval = 0;
m.myrot = 0;
m.am = 0;
m.lastbeat = 0;
m.pbass = 0;
m.fx = 0;
m.cheat = 0;
m.sure = 0;
m.beat = 0;
m.maxdbass = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.sure = ifcond(equal(m.sure, 0), 0.6, m.sure);
m.interval = ifcond(equal(m.interval, 0), 40, m.interval);
m.lastbeat = ifcond(equal(m.lastbeat, 0), (m.frame-m.fps), m.lastbeat);
m.dbass = div((m.bass-m.pbass),m.fps);
m.beat = (above(m.dbass, (0.6*m.maxdbass))*above((m.frame-m.lastbeat), div(m.fps,3)));
m.sure = ifcond((m.beat*below(Math.abs((m.frame-(m.interval+m.lastbeat))), div(m.fps,5))), Math.min((0.095+m.sure), 1), ((m.beat*(m.sure-0.095))+(((1-m.beat)*m.sure)*0.9996)));
m.sure = Math.max(0.5, m.sure);
m.cheat = ifcond((above(m.frame, ((m.lastbeat+m.interval)+Math.floor(div(m.fps,10))))*above(m.sure, 0.91)), 1, m.cheat);
m.beat = ifcond(m.cheat, 1, m.beat);
m.sure = ifcond(m.cheat, (0.95*m.sure), m.sure);
m.maxdbass = Math.max((m.maxdbass*0.999), m.dbass);
m.maxdbass = Math.max(0.012, m.maxdbass);
m.maxdbass = Math.min(0.02, m.maxdbass);
m.interval = ifcond(m.beat, (m.frame-m.lastbeat), m.interval);
m.lastbeat = ifcond(m.beat, (m.frame-(m.cheat*Math.floor(div(m.fps,10)))), m.lastbeat);
m.cheat = 0;
m.pbass = m.bass;
m.warp = 0;
m.zoom = (1-(div(m.fps,85)*0.002));
m.q8 = m.beat;
m.q7 = (1-(2*sqrt(div((m.frame-m.lastbeat),m.interval))));
m.q7 = ifcond(below(m.q7, -1), 1, m.q7);
m.q6 = div((60*m.fps),m.interval);
m.decay = (0.955+div((0.007*75),m.fps));
m.wx = (((1-m.beat)*m.wx)+(m.beat*(-5+div((10*Math.floor(rand(1000))),1000))));
m.wx = (((1-m.beat)*m.wx)+(m.beat*(m.wx+(3*sign(m.wx)))));
m.wy = (((1-m.beat)*m.wy)+(m.beat*(-5+div((10*Math.floor(rand(1000))),1000))));
m.fx = (((1-m.beat)*m.fx)+(m.beat*(-1+Math.floor(rand(5)))));
m.am = (((1-m.beat)*m.am)+(m.beat*div((1.5*Math.floor(rand(100))),100)));
m.am = (((1-m.beat)*m.am)+(m.beat*(((equal(m.fx, -1)*(0.5+m.am))*sign(-m.wx))+(above(m.fx, -1)*m.am))));
m.rotval = (((1-m.beat)*m.rotval)+((m.beat*div((0.02*m.q6),140))*(-1+div((2*Math.floor(rand(100))),100))));
m.myrot = (((1-m.beat)*(m.myrot+m.rotval))+(m.beat*0));
m.q1 = m.wx;
m.q2 = m.wy;
m.q3 = m.fx;
m.q4 = m.am;
m.q5 = m.myrot;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.1,
			g : 0.8,
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
m.scale = 0;
m.flip = 0;
m.n = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.zr = 0;
m.xq = 0;
m.yr = 0;
m.ang = 0;
m.xr = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.28);
m.xp = (Math.sin((m.n*32))*0.03);
m.yp = (Math.cos((m.n*32))*0.03);
m.zp = 0;
m.scale = ((Math.sin(((m.n*32)*3))*0.5)+0.5);
m.scale = (m.scale*((Math.sin((m.n*3))*0.5)+0.5));
m.scale = (((m.scale*m.bass_att)*m.bass_att)*0.5);
m.xp = (m.xp*(1+m.scale));
m.yp = (m.yp*(1+m.scale));
m.ang = m.n;
m.xr = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yr = m.yp;
m.zr = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.xr = (m.xr+0.11);
m.ang = (m.q1*4);
m.xp = ((m.xr*Math.sin(m.ang))+(m.zr*Math.cos(m.ang)));
m.yp = m.yr;
m.zp = ((m.xr*Math.cos(m.ang))-(m.zr*Math.sin(m.ang)));
m.zp = (m.zp-0.3);
m.ang = (m.q1*0.4);
m.xq = m.xp;
m.yq = ((m.yp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.zq = ((m.yp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = (m.q1*1.1);
m.xp = ((m.xq*Math.sin(m.ang))+(m.zq*Math.cos(m.ang)));
m.yp = m.yq;
m.zp = ((m.xq*Math.cos(m.ang))-(m.zq*Math.sin(m.ang)));
m.zp = (m.zp+1.1);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.flip = ifcond(above(m.sample, 0.5), -1, 1);
m.x = ((m.xs*m.flip)+0.5);
m.y = ((m.ys*1.3)+0.5);
m.r = ((Math.sin(m.time)*0.5)+0.5);
m.g = ((Math.sin((m.time+2.1))*0.5)+0.5);
m.b = ((Math.sin((m.time+4.2))*0.5)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.28;\n' + 'xp=sin(n*32)*.03;\n' + 'yp=cos(n*32)*.03;\n' + 'zp=0;\n' + 'scale=sin(n*32*3)*0.5+0.5;\n' + 'scale=scale*(sin(n*3)*0.5+0.5);\n' + 'scale=scale*bass_att*bass_att*0.5;\n' + 'xp=xp*(1+scale);\n' + 'yp=yp*(1+scale);\n' + 'ang=n;\n' + 'xr=xp*sin(ang) + zp*cos(ang);\n' + 'yr=yp;\n' + 'zr=xp*cos(ang) - zp*sin(ang);\n' + 'xr=xr+0.11;\n' + 'ang=q1*4;\n' + 'xp=xr*sin(ang) + zr*cos(ang);\n' + 'yp=yr;\n' + 'zp=xr*cos(ang) - zr*sin(ang);\n' + 'zp=zp-0.3;\n' + 'ang=q1*0.4;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'ang=q1*1.1;\n' + 'xp=xq*sin(ang) + zq*cos(ang);\n' + 'yp=yq;\n' + 'zp=xq*cos(ang) - zq*sin(ang);\n' + 'zp=zp+1.1;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'flip=if(above(sample,0.5) , -1 , 1 );\n' + 'x=xs*flip+.5;\n' + 'y=ys*1.3+.5;\n' + 'r=sin(time)*0.5+0.5;\n' + 'g=sin(time+2.1)*0.5+0.5;\n' + 'b=sin(time+4.2)*0.5+0.5;'),

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
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.scale = 0;
m.flip = 0;
m.n = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.zr = 0;
m.xq = 0;
m.yr = 0;
m.ang = 0;
m.xr = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.28);
m.xp = (Math.sin((m.n*32))*0.03);
m.yp = (Math.cos((m.n*32))*0.03);
m.zp = 0;
m.scale = ((Math.sin(((m.n*32)*4))*0.5)+0.5);
m.scale = (m.scale*((Math.sin((m.n*4))*0.5)+0.5));
m.scale = (((m.scale*m.mid_att)*m.mid_att)*0.5);
m.xp = (m.xp*(1+m.scale));
m.yp = (m.yp*(1+m.scale));
m.ang = m.n;
m.xr = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yr = m.yp;
m.zr = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.xr = (m.xr+0.11);
m.ang = (m.q2*4);
m.xp = ((m.xr*Math.sin(m.ang))+(m.zr*Math.cos(m.ang)));
m.yp = m.yr;
m.zp = ((m.xr*Math.cos(m.ang))-(m.zr*Math.sin(m.ang)));
m.zp = (m.zp-0.3);
m.ang = (m.q2*0.5);
m.xq = m.xp;
m.yq = ((m.yp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.zq = ((m.yp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = (m.q2*1.0);
m.xp = ((m.xq*Math.sin(m.ang))+(m.zq*Math.cos(m.ang)));
m.yp = m.yq;
m.zp = ((m.xq*Math.cos(m.ang))-(m.zq*Math.sin(m.ang)));
m.zp = (m.zp+1.1);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.flip = ifcond(above(m.sample, 0.5), -1, 1);
m.x = ((m.xs*m.flip)+0.5);
m.y = ((m.ys*1.3)+0.5);
m.b = ((Math.sin(m.time)*0.5)+0.5);
m.r = ((Math.sin((m.time+2.1))*0.5)+0.5);
m.g = ((Math.sin((m.time+4.2))*0.5)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.28;\n' + 'xp=sin(n*32)*.03;\n' + 'yp=cos(n*32)*.03;\n' + 'zp=0;\n' + 'scale=sin(n*32*4)*0.5+0.5;\n' + 'scale=scale*(sin(n*4)*0.5+0.5);\n' + 'scale=scale*mid_att*mid_att*0.5;\n' + 'xp=xp*(1+scale);\n' + 'yp=yp*(1+scale);\n' + 'ang=n;\n' + 'xr=xp*sin(ang) + zp*cos(ang);\n' + 'yr=yp;\n' + 'zr=xp*cos(ang) - zp*sin(ang);\n' + 'xr=xr+0.11;\n' + 'ang=q2*4;\n' + 'xp=xr*sin(ang) + zr*cos(ang);\n' + 'yp=yr;\n' + 'zp=xr*cos(ang) - zr*sin(ang);\n' + 'zp=zp-0.3;\n' + 'ang=q2*0.5;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'ang=q2*1.0;\n' + 'xp=xq*sin(ang) + zq*cos(ang);\n' + 'yp=yq;\n' + 'zp=xq*cos(ang) - zq*sin(ang);\n' + 'zp=zp+1.1;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'flip=if(above(sample,0.5) , -1 , 1 );\n' + 'x=xs*flip+.5;\n' + 'y=ys*1.3+.5;\n' + 'b=sin(time)*0.5+0.5;\n' + 'r=sin(time+2.1)*0.5+0.5;\n' + 'g=sin(time+4.2)*0.5+0.5;'),

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
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.scale = 0;
m.flip = 0;
m.n = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.zr = 0;
m.xq = 0;
m.yr = 0;
m.ang = 0;
m.xr = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.28);
m.xp = (Math.sin((m.n*32))*0.03);
m.yp = (Math.cos((m.n*32))*0.03);
m.zp = 0;
m.scale = ((Math.sin(((m.n*32)*6))*0.5)+0.5);
m.scale = (m.scale*((Math.sin((m.n*6))*0.5)+0.5));
m.scale = (((m.scale*m.treb_att)*m.treb_att)*0.5);
m.xp = (m.xp*(1+m.scale));
m.yp = (m.yp*(1+m.scale));
m.ang = m.n;
m.xr = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yr = m.yp;
m.zr = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.xr = (m.xr+0.11);
m.ang = (m.q3*4);
m.xp = ((m.xr*Math.sin(m.ang))+(m.zr*Math.cos(m.ang)));
m.yp = m.yr;
m.zp = ((m.xr*Math.cos(m.ang))-(m.zr*Math.sin(m.ang)));
m.zp = (m.zp-0.3);
m.ang = (m.q3*0.6);
m.xq = m.xp;
m.yq = ((m.yp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.zq = ((m.yp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = ((m.q3*0.92)+1);
m.xp = ((m.xq*Math.sin(m.ang))+(m.zq*Math.cos(m.ang)));
m.yp = m.yq;
m.zp = ((m.xq*Math.cos(m.ang))-(m.zq*Math.sin(m.ang)));
m.zp = (m.zp+1.1);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.flip = ifcond(above(m.sample, 0.5), -1, 1);
m.x = ((m.xs*m.flip)+0.5);
m.y = ((m.ys*1.3)+0.5);
m.g = ((Math.sin(m.time)*0.5)+0.5);
m.b = ((Math.sin((m.time+2.1))*0.5)+0.5);
m.r = ((Math.sin((m.time+4.2))*0.5)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.28;\n' + 'xp=sin(n*32)*.03;\n' + 'yp=cos(n*32)*.03;\n' + 'zp=0;\n' + 'scale=sin(n*32*6)*0.5+0.5;\n' + 'scale=scale*(sin(n*6)*0.5+0.5);\n' + 'scale=scale*treb_att*treb_att*0.5;\n' + 'xp=xp*(1+scale);\n' + 'yp=yp*(1+scale);\n' + 'ang=n;\n' + 'xr=xp*sin(ang) + zp*cos(ang);\n' + 'yr=yp;\n' + 'zr=xp*cos(ang) - zp*sin(ang);\n' + 'xr=xr+0.11;\n' + 'ang=q3*4;\n' + 'xp=xr*sin(ang) + zr*cos(ang);\n' + 'yp=yr;\n' + 'zp=xr*cos(ang) - zr*sin(ang);\n' + 'zp=zp-0.3;\n' + 'ang=q3*0.6;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'ang=q3*0.92+1;\n' + 'xp=xq*sin(ang) + zq*cos(ang);\n' + 'yp=yq;\n' + 'zp=xq*cos(ang) - zq*sin(ang);\n' + 'zp=zp+1.1;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'flip=if(above(sample,0.5) , -1 , 1 );\n' + 'x=xs*flip+.5;\n' + 'y=ys*1.3+.5;\n' + 'g=sin(time)*0.5+0.5;\n' + 'b=sin(time+2.1)*0.5+0.5;\n' + 'r=sin(time+4.2)*0.5+0.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.7,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.3,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.n = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.ends = 0;
m.yq = 0;
m.xq = 0;
m.ang = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.28);
m.ends = Math.sin((m.sample*3.1415));
m.xp = ((m.value1*4)*m.ends);
m.yp = ((m.value2*4)*m.ends);
m.zp = (-0.23+(m.sample*0.3));
m.ang = (m.time*0.5);
m.xq = m.xp;
m.yq = ((m.yp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.zq = ((m.yp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = m.time;
m.xp = ((m.xq*Math.sin(m.ang))+(m.zq*Math.cos(m.ang)));
m.yp = m.yq;
m.zp = ((m.xq*Math.cos(m.ang))-(m.zq*Math.sin(m.ang)));
m.zp = (m.zp+1.1);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = (Math.max((m.treb-1), 0)*2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.28;\n' + 'ends=sin(sample*3.1415);\n' + 'xp=value1*4*ends;\n' + 'yp=value2*4*ends;\n' + 'zp=-0.23 + sample*0.3;\n' + 'ang=time*0.5;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'ang=time;\n' + 'xp=xq*sin(ang) + zq*cos(ang);\n' + 'yp=yq;\n' + 'zp=xq*cos(ang) - zq*sin(ang);\n' + 'zp=zp+1.1;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+.5;\n' + 'y=ys*1.3+.5;\n' + 'a=max(treb-1,0)*2;'),

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
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.7273,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.3291,
			x : 0.5,
			y : 0.5,
			ang : 0.94248,
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
			a : 0.1,
			enabled : 1.0,
			b : 0.5,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.1,
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
m.sides = (m.bass_att*4);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('sides=bass_att*4;'),

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = dot (texsize.zw, texsize.zw);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (uv - 0.5);\n' + '  P_4 = ((tmpvar_6 * (1.0 - \n' + '    (3.0 * sqrt(tmpvar_5))\n' + '  )) + 0.5);\n' + '  tmpvar_3 = texture2D (sampler_main, P_4);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = ((tmpvar_6 * (1.0 + \n' + '    (3.0 * sqrt(tmpvar_5))\n' + '  )) + 0.5);\n' + '  tmpvar_7 = texture2D (sampler_main, P_8);\n' + '  ret_1 = (max (max (ret_1, tmpvar_3.xyz), tmpvar_7.xyz) - 0.02);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9.w = 1.0;\n' + '  tmpvar_9.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_9;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   float ang2_1;\n' + '   vec2 uv2_2;\n' + '   vec3 ret_3;\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = ((rad * sqrt(\n' + '    dot (texsize.xy, texsize.xy)\n' + '  )) * 0.5);\n' + '  ang2_1 = ((ang * 0.1591549) + ((time * 0.015) - (tmpvar_4 * 0.0002)));\n' + '  ang2_1 = (fract((ang2_1 * 7.0)) / 7.0);\n' + '  ang2_1 = (abs((ang2_1 - 0.07142857)) * 6.283185);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = cos(ang2_1);\n' + '  tmpvar_5.y = sin(ang2_1);\n' + '  uv2_2 = (0.5 + ((\n' + '    (tmpvar_4 * 0.8)\n' + '   * tmpvar_5) * texsize.zw));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv2_2);\n' + '  ret_3 = tmpvar_6.xyz;\n' + '  ret_3 = (ret_3 * 1.333);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('sure=if(equal(sure,0),.6,sure);\n' + 'interval=if(equal(interval,0),40,interval);\n' + 'lastbeat=if(equal(lastbeat,0),frame-FPS,lastbeat);\n' + 'dbass=(bass-pbass)/FPS;\n' + 'beat=above(dbass,.6*maxdbass)*above(frame-lastbeat,FPS/3);\n' + 'sure=if(beat*below(abs(frame-(interval+lastbeat)),FPS/5),min(.095+sure,1),beat*(sure-.095)+(1-beat)*sure*.9996);\n' + 'sure=max(.5,sure);\n' + 'cheat=if(above(frame,lastbeat+interval+ int(FPS/10))*above(sure,.91),1,cheat);\n' + 'beat=if(cheat,1,beat);\n' + 'sure=if(cheat,.95*sure,sure);\n' + 'maxdbass=max(maxdbass*.999,dbass);\n' + 'maxdbass=max(.012,maxdbass);\n' + 'maxdbass=min(.02,maxdbass);\n' + 'interval=if(beat, frame-lastbeat,interval);\n' + 'lastbeat=if(beat,frame-cheat*int(FPS/10),lastbeat);\n' + 'cheat=0;\n' + 'pbass=bass;\n' + 'warp=0;\n' + 'zoom=1-(FPS/85)*.002;\n' + 'q8=beat;\n' + 'q7=1-2*sqrt((frame-lastbeat)/interval);\n' + 'q7=if(below(q7,-1),1,q7);\n' + 'q6=60*FPS/interval;\n' + 'decay=.955+.007*75/FPS;\n' + 'wx=(1-beat)*wx+beat*(-5+10*int(rand(1000))/1000);\n' + 'wx=(1-beat)*wx+beat*(wx+3*sign(wx));\n' + 'wy=(1-beat)*wy+beat*(-5+10*int(rand(1000))/1000);\n' + 'fx=(1-beat)*fx+beat*(-1+int(rand(5)));\n' + 'am=(1-beat)*am+beat*(1.5*int(rand(100))/100);\n' + 'am=(1-beat)*am+beat*(equal(fx,-1)*(.5+am)*sign(-wx)+above(fx,-1)*am);\n' + 'rotval=(1-beat)*rotval+beat*(.02*q6/140)*(-1+2*int(rand(100))/100);\n' + 'myrot=(1-beat)*(myrot+rotval)+beat*0;\n' + 'q1=wx;\n' + 'q2=wy;\n' + 'q3=fx;\n' + 'q4=am;\n' + 'q5=myrot;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
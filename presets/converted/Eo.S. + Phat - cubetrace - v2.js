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
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 0.99663,
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
		ib_a : 0.0,
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
m.size = 0;
m.bc = 0;
m.q2 = 0;
m.q7 = 0;
m.q8 = 0;
m.vol = 0;
m.beat = 0;
m.trigger = 0;
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
m.size = 4;
m.bc = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.95;
m.zoom = 1.005;
m.vol = (((m.bass+m.mid)+m.treb)*0.25);
m.vol = (m.vol*m.vol);
m.q8 = m.vol;
m.mtime = (m.mtime+((m.vol*0.01)*div(75,m.fps)));
m.q7 = m.mtime;
m.monitor = div(512,8);
m.warp = 0;
m.q1 = (m.mtime*0.9);
m.beat = above(m.vol, 1);
m.bc = Math.max(m.bc, 0);
m.bc = ifcond(equal(m.bc, 0), (m.bc+m.beat), (m.bc-div(div(1,m.fps),4)));
m.trigger = equal(m.bc, 1);
m.monitor = m.size;
m.size = (m.size+m.trigger);
m.size = ifcond(above(m.size, 10), 4, m.size);
m.q2 = Math.floor(m.size);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.09,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.05,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.sang = 0;
m.n = 0;
m.fix = 0;
m.cubesize = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.tm = 0;
m.xq = 0;
m.ang = 0;
m.t1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.q1*0.25);
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.cubesize = m.q2;
m.fix = (div(1,m.cubesize)*0.5);
m.tm = ((m.q1*4)+(m.sample*4));
m.xp = (((Math.sin(m.tm)*Math.cos((m.tm*3)))*0.5)+0.5);
m.yp = (((Math.sin((m.tm*1.1))*Math.sin((m.tm*4.1)))*0.5)+0.5);
m.zp = (((Math.sin((m.tm*2.9))*Math.cos((m.tm*1.77)))*0.5)+0.5);
m.xp = ((div(Math.floor((m.xp*m.cubesize)),m.cubesize)-0.5)+m.fix);
m.yp = ((div(Math.floor((m.yp*m.cubesize)),m.cubesize)-0.5)+m.fix);
m.zp = ((div(Math.floor((m.zp*m.cubesize)),m.cubesize)-0.5)+m.fix);
m.ang = m.t1;
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.t1*0.75);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = (m.zp+2);
m.x = (div(m.xp,m.zp)+0.5);
m.y = ((div(m.yp,m.zp)*1.333)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=q1*0.25;'),
		'point_eqs_str' : ('n= sample*6.283;\n' + 'cubesize=q2;\n' + 'fix=1/cubesize *0.5;\n' + 'tm=q1*4+sample*4;\n' + 'xp= sin(tm)*cos(tm*3)*0.5+0.5;\n' + 'yp= sin(tm*1.1)*sin(tm*4.1)*0.5+0.5;\n' + 'zp= sin(tm*2.9)*cos(tm*1.77)*0.5+0.5;\n' + 'xp= int(xp*cubesize)/cubesize -0.5+fix;\n' + 'yp= int(yp*cubesize)/cubesize -0.5+fix;\n' + 'zp= int(zp*cubesize)/cubesize -0.5+fix;\n' + 'ang=t1;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + zp*cang;\n' + 'yq=yp;\n' + 'zq=xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=t1*0.75;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sang + zp*cang;\n' + 'zq=yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp= zp+2;\n' + 'x= xp/zp + 0.5;\n' + 'y= yp/zp * 1.333 + 0.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.5,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.5,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.sang = 0;
m.n = 0;
m.fix = 0;
m.cubesize = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.tm = 0;
m.xq = 0;
m.ang = 0;
m.t1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.q1*0.25);
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.cubesize = m.q2;
m.fix = (div(1,m.cubesize)*0.5);
m.tm = ((m.q1*4)+(m.sample*4));
m.xp = (((Math.sin(m.tm)*Math.cos((m.tm*3)))*0.5)+0.5);
m.yp = (((Math.sin((m.tm*1.1))*Math.sin((m.tm*4.1)))*0.5)+0.5);
m.zp = (((Math.sin((m.tm*2.9))*Math.cos((m.tm*1.77)))*0.5)+0.5);
m.xp = ((div(Math.floor((m.xp*m.cubesize)),m.cubesize)-0.5)+m.fix);
m.yp = ((div(Math.floor((m.yp*m.cubesize)),m.cubesize)-0.5)+m.fix);
m.zp = ((div(Math.floor((m.zp*m.cubesize)),m.cubesize)-0.5)+m.fix);
m.ang = m.t1;
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.t1*0.75);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = (m.zp+3);
m.x = (div(m.xp,m.zp)+0.5);
m.y = ((div(m.yp,m.zp)*1.333)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=q1*0.25;'),
		'point_eqs_str' : ('n= sample*6.283;\n' + 'cubesize=q2;\n' + 'fix=1/cubesize *0.5;\n' + 'tm=q1*4+sample*4;\n' + 'xp= sin(tm)*cos(tm*3)*0.5+0.5;\n' + 'yp= sin(tm*1.1)*sin(tm*4.1)*0.5+0.5;\n' + 'zp= sin(tm*2.9)*cos(tm*1.77)*0.5+0.5;\n' + 'xp= int(xp*cubesize)/cubesize -0.5+fix;\n' + 'yp= int(yp*cubesize)/cubesize -0.5+fix;\n' + 'zp= int(zp*cubesize)/cubesize -0.5+fix;\n' + 'ang=t1;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + zp*cang;\n' + 'yq=yp;\n' + 'zq=xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=t1*0.75;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sang + zp*cang;\n' + 'zq=yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp= zp+3;\n' + 'x= xp/zp + 0.5;\n' + 'y= yp/zp * 1.333 + 0.5;'),

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
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.sang = 0;
m.n = 0;
m.fix = 0;
m.cubesize = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.xq = 0;
m.ang = 0;
m.t1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.q1*0.25);
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.cubesize = m.q2;
m.fix = (div(1,m.cubesize)*0.5);
m.xp = ((div(rand(m.cubesize),m.cubesize)-0.5)+m.fix);
m.yp = ((div(rand(m.cubesize),m.cubesize)-0.5)+m.fix);
m.zp = ((div(rand(m.cubesize),m.cubesize)-0.5)+m.fix);
m.ang = m.t1;
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.t1*0.75);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = (m.zp+2);
m.x = (div(m.xp,m.zp)+0.5);
m.y = ((div(m.yp,m.zp)*1.333)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=q1*0.25;'),
		'point_eqs_str' : ('n= sample*6.283;\n' + 'cubesize=q2;\n' + 'fix=1/cubesize *0.5;\n' + 'xp= rand(cubesize)/cubesize-0.5+fix;\n' + 'yp= rand(cubesize)/cubesize-0.5+fix;\n' + 'zp= rand(cubesize)/cubesize-0.5+fix;\n' + 'ang=t1;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + zp*cang;\n' + 'yq=yp;\n' + 'zq=xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=t1*0.75;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sang + zp*cang;\n' + 'zq=yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp= zp+2;\n' + 'x= xp/zp + 0.5;\n' + 'y= yp/zp * 1.333 + 0.5;'),

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
			r2 : 0.63,
			a : 1.0E-6,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.7,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.07,
			r : 0.0,
			border_g : 1.0,
			rad : 0.194774,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.sang = 0;
m.q8 = 0;
m.lens_scale = 0;
m.sample = 0;
m.flip = 0;
m.n = 0;
m.fix = 0;
m.cubesize = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.tm = 0;
m.xq = 0;
m.t1 = 0;
m.pos_scale = 0;
m.flip = 1;
			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {
m.flip = -m.flip;
m.lens_scale = ((m.flip*0.5)+0.5);
m.lens_scale = (1+(m.lens_scale*2.4));
m.pos_scale = ifcond(equal(m.flip, -1), 0.5, m.lens_scale);
m.t1 = (m.q1*0.25);
m.sample = 1;
m.n = (m.sample*6.283);
m.cubesize = m.q2;
m.fix = (div(1,m.cubesize)*0.5);
m.tm = ((m.q1*4)+(m.sample*4));
m.xp = (((Math.sin(m.tm)*Math.cos((m.tm*3)))*0.5)+0.5);
m.yp = (((Math.sin((m.tm*1.1))*Math.sin((m.tm*4.1)))*0.5)+0.5);
m.zp = (((Math.sin((m.tm*2.9))*Math.cos((m.tm*1.77)))*0.5)+0.5);
m.xp = ((div(Math.floor((m.xp*m.cubesize)),m.cubesize)-0.5)+m.fix);
m.yp = ((div(Math.floor((m.yp*m.cubesize)),m.cubesize)-0.5)+m.fix);
m.zp = ((div(Math.floor((m.zp*m.cubesize)),m.cubesize)-0.5)+m.fix);
m.ang = m.t1;
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.t1*0.75);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = (m.zp+2);
m.x = ((div(-m.xp,m.zp)*m.pos_scale)+0.5);
m.y = (((div(-m.yp,m.zp)*m.pos_scale)*1.333)+0.5);
m.rad = ((m.rad*(1+div(m.q8,3)))*m.lens_scale);
		return m;
	},
		'init_eqs_str' : ('flip=1;'),
		'frame_eqs_str' : ('flip=-flip;\n' + 'lens_scale = flip*0.5+0.5;\n' + 'lens_scale = 1 + lens_scale*2.4;\n' + 'pos_scale = if( equal(flip,-1) , 0.5 , lens_scale );\n' + 't1=q1*0.25;\n' + 'sample = 1;\n' + 'n= sample*6.283;\n' + 'cubesize=q2;\n' + 'fix=1/cubesize *0.5;\n' + 'tm=q1*4+sample*4;\n' + 'xp= sin(tm)*cos(tm*3)*0.5+0.5;\n' + 'yp= sin(tm*1.1)*sin(tm*4.1)*0.5+0.5;\n' + 'zp= sin(tm*2.9)*cos(tm*1.77)*0.5+0.5;\n' + 'xp= int(xp*cubesize)/cubesize -0.5+fix;\n' + 'yp= int(yp*cubesize)/cubesize -0.5+fix;\n' + 'zp= int(zp*cubesize)/cubesize -0.5+fix;\n' + 'ang=t1;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + zp*cang;\n' + 'yq=yp;\n' + 'zq=xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=t1*0.75;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sang + zp*cang;\n' + 'zq=yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp= zp+2;\n' + 'x= -xp/zp*pos_scale + 0.5;\n' + 'y= -yp/zp*pos_scale * 1.333 + 0.5;\n' + 'rad = rad*(1+q8/3)*lens_scale;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.6,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.3,
			border_g : 1.0,
			rad : 0.043785,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 6.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.sang = 0;
m.q8 = 0;
m.sample = 0;
m.n = 0;
m.fix = 0;
m.cubesize = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.tm = 0;
m.xq = 0;
m.t1 = 0;

			m.rkeys = ['a','g','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.q1*0.25);
m.sample = 1;
m.n = (m.sample*6.283);
m.cubesize = m.q2;
m.fix = (div(1,m.cubesize)*0.5);
m.tm = ((m.q1*4)+(m.sample*4));
m.xp = (((Math.sin(m.tm)*Math.cos((m.tm*3)))*0.5)+0.5);
m.yp = (((Math.sin((m.tm*1.1))*Math.sin((m.tm*4.1)))*0.5)+0.5);
m.zp = (((Math.sin((m.tm*2.9))*Math.cos((m.tm*1.77)))*0.5)+0.5);
m.xp = ((div(Math.floor((m.xp*m.cubesize)),m.cubesize)-0.5)+m.fix);
m.yp = ((div(Math.floor((m.yp*m.cubesize)),m.cubesize)-0.5)+m.fix);
m.zp = ((div(Math.floor((m.zp*m.cubesize)),m.cubesize)-0.5)+m.fix);
m.ang = m.t1;
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.t1*0.75);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = (m.zp+2);
m.x = (div(m.xp,m.zp)+0.5);
m.y = ((div(m.yp,m.zp)*1.333)+0.5);
m.a = Math.min((m.a+div(m.q8,2)), 1);
m.r = Math.min((m.r*(1+m.q8)), 1);
m.g = Math.min((m.g*(1+m.q8)), 1);
m.r2 = Math.min(div(m.q8,2), 1);
m.g2 = Math.min(div(m.q8,4), 1);
m.rad = (m.rad*(1+div(m.q8,7)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=q1*0.25;\n' + 'sample = 1;\n' + 'n= sample*6.283;\n' + 'cubesize=q2;\n' + 'fix=1/cubesize *0.5;\n' + 'tm=q1*4+sample*4;\n' + 'xp= sin(tm)*cos(tm*3)*0.5+0.5;\n' + 'yp= sin(tm*1.1)*sin(tm*4.1)*0.5+0.5;\n' + 'zp= sin(tm*2.9)*cos(tm*1.77)*0.5+0.5;\n' + 'xp= int(xp*cubesize)/cubesize -0.5+fix;\n' + 'yp= int(yp*cubesize)/cubesize -0.5+fix;\n' + 'zp= int(zp*cubesize)/cubesize -0.5+fix;\n' + 'ang=t1;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + zp*cang;\n' + 'yq=yp;\n' + 'zq=xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=t1*0.75;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sang + zp*cang;\n' + 'zq=yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp= zp+2;\n' + 'x= xp/zp + 0.5;\n' + 'y= yp/zp * 1.333 + 0.5;\n' + 'a= min(a+q8/2,1);\n' + 'r= min(r*(1+q8) , 1 );\n' + 'g= min(g*(1+q8) , 1 );\n' + 'r2= min(q8/2,1);\n' + 'g2= min(q8/4,1);\n' + 'rad= rad*(1+q8/7);'),

		},
		{
		'baseVals' : {
			r2 : 0.23,
			a : 0.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.54,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.45,
			border_b : 0.4,
			b2 : 1.0,
			a2 : 0.05,
			r : 0.0,
			border_g : 0.8,
			rad : 0.284278,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 36.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.sang = 0;
m.q8 = 0;
m.sample = 0;
m.n = 0;
m.fix = 0;
m.cubesize = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.tm = 0;
m.xq = 0;
m.t1 = 0;

			m.rkeys = ['r2','g2','border_a','a2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.q1*0.25);
m.sample = 1;
m.n = (m.sample*6.283);
m.cubesize = m.q2;
m.fix = (div(1,m.cubesize)*0.5);
m.tm = ((m.q1*4)+(m.sample*4));
m.xp = (((Math.sin(m.tm)*Math.cos((m.tm*3)))*0.5)+0.5);
m.yp = (((Math.sin((m.tm*1.1))*Math.sin((m.tm*4.1)))*0.5)+0.5);
m.zp = (((Math.sin((m.tm*2.9))*Math.cos((m.tm*1.77)))*0.5)+0.5);
m.xp = ((div(Math.floor((m.xp*m.cubesize)),m.cubesize)-0.5)+m.fix);
m.yp = ((div(Math.floor((m.yp*m.cubesize)),m.cubesize)-0.5)+m.fix);
m.zp = ((div(Math.floor((m.zp*m.cubesize)),m.cubesize)-0.5)+m.fix);
m.ang = m.t1;
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.t1*0.75);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = (m.zp+2);
m.x = (div(m.xp,m.zp)+0.5);
m.y = ((div(m.yp,m.zp)*1.333)+0.5);
m.a2 = Math.min((m.a2*(1+div(m.q8,2))), 1);
m.r2 = Math.min((m.r2*(1+div(m.q8,4))), 1);
m.g2 = Math.min((m.g2*(1+div(m.q8,3))), 1);
m.border_a = Math.min((m.border_a*(1+m.q8)), 1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=q1*0.25;\n' + 'sample = 1;\n' + 'n= sample*6.283;\n' + 'cubesize=q2;\n' + 'fix=1/cubesize *0.5;\n' + 'tm=q1*4+sample*4;\n' + 'xp= sin(tm)*cos(tm*3)*0.5+0.5;\n' + 'yp= sin(tm*1.1)*sin(tm*4.1)*0.5+0.5;\n' + 'zp= sin(tm*2.9)*cos(tm*1.77)*0.5+0.5;\n' + 'xp= int(xp*cubesize)/cubesize -0.5+fix;\n' + 'yp= int(yp*cubesize)/cubesize -0.5+fix;\n' + 'zp= int(zp*cubesize)/cubesize -0.5+fix;\n' + 'ang=t1;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + zp*cang;\n' + 'yq=yp;\n' + 'zq=xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=t1*0.75;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sang + zp*cang;\n' + 'zq=yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp= zp+2;\n' + 'x= xp/zp + 0.5;\n' + 'y= yp/zp * 1.333 + 0.5;\n' + 'a2= min( a2*(1+q8/2) , 1 );\n' + 'r2= min( r2*(1+q8/4) , 1 );\n' + 'g2= min( g2*(1+q8/3) , 1 );\n' + 'border_a = min( border_a * (1+q8) , 1 );'),

		},
		{
		'baseVals' : {
			r2 : 0.4,
			a : 0.140001,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.6,
			textured : 0.0,
			g2 : 0.5,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.3,
			border_g : 1.0,
			rad : 0.158045,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 6.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.sang = 0;
m.q8 = 0;
m.sample = 0;
m.n = 0;
m.fix = 0;
m.cubesize = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.tm = 0;
m.xq = 0;
m.t1 = 0;

			m.rkeys = ['a'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.q1*0.25);
m.sample = 1;
m.n = (m.sample*6.283);
m.cubesize = m.q2;
m.fix = (div(1,m.cubesize)*0.5);
m.tm = ((m.q1*4)+(m.sample*4));
m.xp = (((Math.sin(m.tm)*Math.cos((m.tm*3)))*0.5)+0.5);
m.yp = (((Math.sin((m.tm*1.1))*Math.sin((m.tm*4.1)))*0.5)+0.5);
m.zp = (((Math.sin((m.tm*2.9))*Math.cos((m.tm*1.77)))*0.5)+0.5);
m.xp = ((div(Math.floor((m.xp*m.cubesize)),m.cubesize)-0.5)+m.fix);
m.yp = ((div(Math.floor((m.yp*m.cubesize)),m.cubesize)-0.5)+m.fix);
m.zp = ((div(Math.floor((m.zp*m.cubesize)),m.cubesize)-0.5)+m.fix);
m.ang = m.t1;
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.xp*m.sang)+(m.zp*m.cang));
m.yq = m.yp;
m.zq = ((m.xp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang = (m.t1*0.75);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = m.xp;
m.yq = ((m.yp*m.sang)+(m.zp*m.cang));
m.zq = ((m.yp*m.cang)-(m.zp*m.sang));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = (m.zp+2);
m.x = (div(m.xp,m.zp)+0.5);
m.y = ((div(m.yp,m.zp)*1.333)+0.5);
m.a = Math.min((m.a*m.q8), 1);
m.rad = (m.rad*(1+m.q8));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=q1*0.25;\n' + 'sample = 1;\n' + 'n= sample*6.283;\n' + 'cubesize=q2;\n' + 'fix=1/cubesize *0.5;\n' + 'tm=q1*4+sample*4;\n' + 'xp= sin(tm)*cos(tm*3)*0.5+0.5;\n' + 'yp= sin(tm*1.1)*sin(tm*4.1)*0.5+0.5;\n' + 'zp= sin(tm*2.9)*cos(tm*1.77)*0.5+0.5;\n' + 'xp= int(xp*cubesize)/cubesize -0.5+fix;\n' + 'yp= int(yp*cubesize)/cubesize -0.5+fix;\n' + 'zp= int(zp*cubesize)/cubesize -0.5+fix;\n' + 'ang=t1;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp*sang + zp*cang;\n' + 'yq=yp;\n' + 'zq=xp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang=t1*0.75;\n' + 'sang=sin(ang);\n' + 'cang=cos(ang);\n' + 'xq=xp;\n' + 'yq=yp*sang + zp*cang;\n' + 'zq=yp*cang - zp*sang;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp= zp+2;\n' + 'x= xp/zp + 0.5;\n' + 'y= yp/zp * 1.333 + 0.5;\n' + 'a= min(a*q8,1);\n' + 'rad= rad*(1+q8);'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;\n' + 'size =4;\n' + 'bc=0;'),
	'frame_eqs_str' : ('decay=0.95;\n' + 'zoom=1.005;\n' + 'vol= (bass+mid+treb)*0.25;\n' + 'vol = vol*vol;\n' + 'q8=vol;\n' + 'mtime=mtime+vol*0.01*(75/fps);\n' + 'q7 = mtime;\n' + 'monitor=512/8;\n' + 'warp=0;\n' + 'q1=mtime*0.9;\n' + 'beat = above(vol,1);\n' + 'bc = max(bc,0);\n' + 'bc = if( equal(bc,0) , bc+beat , bc-(1/fps)/4 );\n' + 'trigger = equal(bc,1);\n' + 'monitor=size;\n' + 'size = size + trigger;\n' + 'size = if( above(size,10) , 4 , size );\n' + 'q2=int(size);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
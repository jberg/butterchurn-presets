define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.980001,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 0.0,
		warpscale : 2.006761,
		brighten : 0.0,
		mv_y : 1.0E-6,
		wave_scale : 1.22891,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 0.999998,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 0.71,
		echo_zoom : 0.999999,
		ob_size : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.459526,
		wave_dots : 0.0,
		mv_g : 0.91,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999902,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : -1.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.2,
		decay : 0.9,
		wave_a : 0.3116,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 1.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.b = 0;
m.q3 = 0;
m.q7 = 0;
m.g = 0;
m.q8 = 0;
m.flux = 0;
m.r = 0;
m.vol = 0;
m.mtime = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.vol = (((m.bass+m.mid)+m.treb)*0.25);
m.vol = (m.vol*m.vol);
m.mtime = (m.mtime+(m.vol*0.018));
m.q7 = m.mtime;
m.q8 = m.vol;
m.r = ((Math.sin(((m.mtime*0.3)+0.0))*0.5)+0.5);
m.g = ((Math.sin(((m.mtime*0.3)+2.1))*0.5)+0.5);
m.b = ((Math.sin(((m.mtime*0.3)+4.2))*0.5)+0.5);
m.q1 = m.r;
m.q2 = m.g;
m.q3 = m.b;
m.mv_x = ((Math.sin((m.mtime*0.25))*6)+9);
m.mv_y = ((Math.sin((m.mtime*0.25))*6)+9);
m.mv_a = (1-(((Math.sin((m.mtime*0.25))*0.5)+0.5)*0.7));
m.decay = (1-(((Math.sin((m.mtime*0.25))*0.5)+0.5)*0.01));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.flux = (Math.sin((m.time*0.3))*2);
m.zoom = (-1.02+(m.rad*(9+m.flux)));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.8,
			g : 0.9,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.advance = 0;
m.y_screen = 0;
m.s = 0;
m.x_screen = 0;
m.zp = 0;
m.yp = 0;
m.xp = 0;
m.t1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.advance = (m.advance+0.005);
m.advance = ifcond(above(m.advance, 2), 0, m.advance);
m.t1 = m.advance;
		return m;
	},
		'point_eqs' : function(m) {
m.s = (m.sample*6.28);
m.xp = (((Math.sin(m.s)+Math.sin((m.s*0.34)))+Math.sin((m.s*24.3)))+Math.sin((m.s*13.8)));
m.xp = (m.xp*0.20);
m.yp = (((Math.cos(m.s)+Math.sin((m.s*0.24)))+Math.cos((m.s*17.4)))+Math.sin((m.s*37.7)));
m.yp = (m.yp*0.20);
m.zp = (((Math.cos(m.s)+Math.cos((m.s*5.24)))+Math.cos((m.s*47.4)))+Math.cos((m.s*27.7)));
m.zp = (m.zp*0.25);
m.zp = ((m.zp+1)-m.t1);
m.zp = ifcond(below(m.zp, 0), (m.zp+2), m.zp);
m.a = (1-(m.zp*0.5));
m.zp = (m.zp*0.7);
m.x_screen = (div(m.xp,m.zp)+0.5);
m.y_screen = (div(m.yp,m.zp)+0.5);
m.x = m.x_screen;
m.y = m.y_screen;
m.r = 1;
m.g = 1;
m.b = 1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('advance=advance+ 0.005;\n' + 'advance=if( above(advance,2) , 0, advance);\n' + 't1=advance;'),
		'point_eqs_str' : ('s=sample*6.28;\n' + 'xp=sin(s)+sin(s*0.34)+sin(s*24.3)+sin(s*13.8);\n' + 'xp=xp*0.20;\n' + 'yp=cos(s)+sin(s*0.24)+cos(s*17.4)+sin(s*37.7);\n' + 'yp=yp*0.20;\n' + 'zp=cos(s)+cos(s*5.24)+cos(s*47.4)+cos(s*27.7);\n' + 'zp=zp*0.25;\n' + 'zp=zp + 1 - t1;\n' + 'zp=if( below(zp,0) , zp+2 , zp );\n' + 'a=(1 - zp*0.5);\n' + 'zp=zp*0.7;\n' + 'x_screen=xp/zp + 0.5;\n' + 'y_screen=yp/zp + 0.5;\n' + 'x=x_screen;\n' + 'y=y_screen;\n' + 'r=1;\n' + 'g=1;\n' + 'b=1;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.7,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.advance = 0;
m.y_screen = 0;
m.s = 0;
m.x_screen = 0;
m.zp = 0;
m.yp = 0;
m.xp = 0;
m.t1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.advance = (m.advance+0.005);
m.advance = ifcond(above(m.advance, 2), 0, m.advance);
m.t1 = m.advance;
		return m;
	},
		'point_eqs' : function(m) {
m.s = (m.sample*6.28);
m.xp = (((Math.sin(m.s)+Math.sin((m.s*0.44)))+Math.sin((m.s*14.3)))+Math.sin((m.s*12.8)));
m.xp = (m.xp*0.20);
m.yp = (((Math.cos(m.s)+Math.sin((m.s*0.29)))+Math.cos((m.s*19.4)))+Math.sin((m.s*37.7)));
m.yp = (m.yp*0.20);
m.zp = (((Math.cos(m.s)+Math.cos((m.s*6.24)))+Math.cos((m.s*37.4)))+Math.cos((m.s*29.7)));
m.zp = (m.zp*0.25);
m.zp = ((m.zp+1)-m.t1);
m.zp = ifcond(below(m.zp, 0), (m.zp+2), m.zp);
m.a = (1-(m.zp*0.5));
m.zp = (m.zp*0.7);
m.x_screen = (div(m.xp,m.zp)+0.5);
m.y_screen = (div(m.yp,m.zp)+0.5);
m.x = m.x_screen;
m.y = m.y_screen;
m.r = 1;
m.g = 1;
m.b = 1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('advance=advance+ 0.005;\n' + 'advance=if( above(advance,2) , 0, advance);\n' + 't1=advance;'),
		'point_eqs_str' : ('s=sample*6.28;\n' + 'xp=sin(s)+sin(s*0.44)+sin(s*14.3)+sin(s*12.8);\n' + 'xp=xp*0.20;\n' + 'yp=cos(s)+sin(s*0.29)+cos(s*19.4)+sin(s*37.7);\n' + 'yp=yp*0.20;\n' + 'zp=cos(s)+cos(s*6.24)+cos(s*37.4)+cos(s*29.7);\n' + 'zp=zp*0.25;\n' + 'zp=zp + 1 - t1;\n' + 'zp=if( below(zp,0) , zp+2 , zp );\n' + 'a=(1 - zp*0.5);\n' + 'zp=zp*0.7;\n' + 'x_screen=xp/zp + 0.5;\n' + 'y_screen=yp/zp + 0.5;\n' + 'x=x_screen;\n' + 'y=y_screen;\n' + 'r=1;\n' + 'g=1;\n' + 'b=1;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
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
m.q3 = 0;
m.q7 = 0;
m.scale = 0;
m.aflux = 0;
m.n = 0;
m.zp = 0;
m.yp = 0;
m.freq = 0;
m.xp = 0;
m.xp2 = 0;
m.ang = 0;
m.ys = 0;
m.xp3 = 0;
m.xs = 0;
m.yp2 = 0;
m.zp2 = 0;
m.yp3 = 0;
m.zp3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.freq = ((Math.sin((m.q7*0.5))*4)+4);
m.aflux = Math.sin((m.n*0.5));
m.scale = ((Math.sin((m.n*m.freq))*0.3)+0.7);
m.xp = (rand(10)-5);
m.xp = ((m.xp*0.0008)*m.aflux);
m.yp = (rand(10)-5);
m.yp = ((m.yp*0.0008)*m.aflux);
m.zp = ((m.sample*3)-1.5);
m.ang = ((m.q7+(m.time*0.01))*0.2);
m.xp2 = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yp2 = m.yp;
m.zp2 = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = ((m.q7+(m.time*0.01))*0.3);
m.xp3 = m.xp2;
m.yp3 = ((m.yp2*Math.sin(m.ang))+(m.zp2*Math.cos(m.ang)));
m.zp3 = ((m.yp2*Math.cos(m.ang))-(m.zp2*Math.sin(m.ang)));
m.xp = m.xp3;
m.yp = m.yp3;
m.zp = m.zp3;
m.zp = (m.zp+2.1);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.r = ((m.q1+m.q2)*0.5);
m.g = ((m.q2+m.q3)*0.5);
m.b = ((m.q3+m.q1)*0.5);
m.a = ((m.aflux*m.aflux)*0.7);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'freq=sin(q7*0.5)*4+4;\n' + 'aflux=sin(n*0.5);\n' + 'scale=sin(n*freq)*0.3+0.7;\n' + 'xp=rand(10)-5;\n' + 'xp=xp*0.0008*aflux;\n' + 'yp=rand(10)-5;\n' + 'yp=yp*0.0008*aflux;\n' + 'zp=sample*3-1.5;\n' + 'ang=(q7+time*0.01)*0.2;\n' + 'xp2=xp*sin(ang) + zp*cos(ang);\n' + 'yp2=yp;\n' + 'zp2=xp*cos(ang) - zp*sin(ang);\n' + 'ang=(q7+time*0.01)*0.3;\n' + 'xp3=xp2;\n' + 'yp3=yp2*sin(ang) + zp2*cos(ang);\n' + 'zp3=yp2*cos(ang) - zp2*sin(ang);\n' + 'xp=xp3;\n' + 'yp=yp3;\n' + 'zp=zp3;\n' + 'zp=zp+2.1;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'r=(q1+q2)*0.5;\n' + 'g=(q2+q3)*0.5;\n' + 'b=(q3+q1)*0.5;\n' + 'a=aflux*aflux*0.7;'),

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
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q7 = 0;
m.scale = 0;
m.aflux = 0;
m.n = 0;
m.zp = 0;
m.yp = 0;
m.freq = 0;
m.xp = 0;
m.xp2 = 0;
m.ang = 0;
m.ys = 0;
m.xp3 = 0;
m.xs = 0;
m.yp2 = 0;
m.zp2 = 0;
m.yp3 = 0;
m.zp3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.scale = ((Math.sin((m.n*m.freq))*0.3)+0.7);
m.zp = Math.sin(m.time);
m.aflux = Math.sin(((m.zp*3.1415)+3.1415));
m.xp = ((Math.sin(m.n)*0.1)*m.aflux);
m.yp = ((Math.cos(m.n)*0.1)*m.aflux);
m.ang = ((m.q7+(m.time*0.01))*0.2);
m.xp2 = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yp2 = m.yp;
m.zp2 = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = ((m.q7+(m.time*0.01))*0.3);
m.xp3 = m.xp2;
m.yp3 = ((m.yp2*Math.sin(m.ang))+(m.zp2*Math.cos(m.ang)));
m.zp3 = ((m.yp2*Math.cos(m.ang))-(m.zp2*Math.sin(m.ang)));
m.xp = m.xp3;
m.yp = m.yp3;
m.zp = m.zp3;
m.zp = (m.zp+2.1);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = m.aflux;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'scale=sin(n*freq)*0.3+0.7;\n' + 'zp=sin(time);\n' + 'aflux=sin(zp*3.1415+3.1415);\n' + 'xp=sin(n)*0.1*aflux;\n' + 'yp=cos(n)*0.1*aflux;\n' + 'ang=(q7+time*0.01)*0.2;\n' + 'xp2=xp*sin(ang) + zp*cos(ang);\n' + 'yp2=yp;\n' + 'zp2=xp*cos(ang) - zp*sin(ang);\n' + 'ang=(q7+time*0.01)*0.3;\n' + 'xp3=xp2;\n' + 'yp3=yp2*sin(ang) + zp2*cos(ang);\n' + 'zp3=yp2*cos(ang) - zp2*sin(ang);\n' + 'xp=xp3;\n' + 'yp=yp3;\n' + 'zp=zp3;\n' + 'zp=zp+2.1;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=aflux;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 3.141593,
			thickoutline : 1.0,
			g : 0.5,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.274293,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.5,
			border_g : 0.0,
			rad : 6.650134,
			x : 0.8,
			y : 0.5,
			ang : 3.644249,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {

m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.border_a = m.treb;
m.rad = m.bass;
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('border_a=treb;\n' + 'rad=bass;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 2.216712,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.749999,
			x : 0.37,
			y : 0.49,
			ang : 3.644249,
			sides : 3.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.rate = 0;
m.poly = 0;
m.out = 0;
m.te = 0;
m.rate2 = 0;
m.beat = 0;
m.bassthresh = 0;
m.t2 = 0;
m.ran = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
m.te = 1;
m.poly = 4;
			m.rkeys = ['r2','b','g','g2','poly','out','b2','te','r','bassthresh'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rate = div(m.fps,(m.fps+div(1,2)));
m.beat = above(m.bass, m.bassthresh);
m.bassthresh = ((m.beat*4)+((1-m.beat)*(((m.bassthresh-1.5)*m.rate)+1.5)));
m.ran = (rand(8)+4);
m.poly = ifcond(m.beat, ifcond(equal(m.ran, m.poly), (m.poly+1), m.ran), m.poly);
m.sides = m.poly;
m.rate2 = div(m.fps,(m.fps+10));
m.out = ((((1-m.beat)*m.rate2)*m.out)+m.beat);
m.border_a = m.out;
m.te = (div(div(m.bass,m.fps),2)+m.te);
m.x = ((Math.sin((m.time*0.23))*0.15)+0.5);
m.y = ((Math.cos((m.time*0.19))*0.15)+0.5);
m.ang = ((3*Math.sin((-m.te*0.67)))+(3*Math.cos((m.te*0.4))));
m.rad = ((m.rad*(0.9+(0.2*m.t2)))-(0.1*Math.sin((m.te*1.51))));
m.r = Math.min(1, Math.max(0, (m.r+(0.3*Math.sin(((m.time*0.427)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.3*Math.sin(((m.time*0.401)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.3*Math.sin(((m.time*0.452)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.3*Math.sin(((m.time*0.417)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.3*Math.sin(((m.time*0.457)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.3*Math.sin(((m.time*0.434)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;\n' + 'te = 1;\n' + 'poly = 4;'),
		'frame_eqs_str' : ('rate = fps/(fps+1/2);\n' + 'beat = above(bass,bassthresh);\n' + 'bassthresh = beat*4 + (1-beat)*((bassthresh - 1.5)*rate+1.5);\n' + 'ran = rand(8)+4;\n' + 'poly = if(beat,if(equal(ran,poly),poly+1,ran),poly);\n' + 'sides = poly;\n' + 'rate2 = fps/(fps+10);\n' + 'out = (1-beat)*rate2*out + beat;\n' + 'border_a = out;\n' + 'te = bass/fps/2 + te;\n' + 'x=sin(time*0.23)*0.15 + 0.5;\n' + 'y=cos(time*0.19)*0.15 + 0.5;\n' + 'ang = 3*sin(-te*0.67) + 3*cos(te*0.4);\n' + 'rad = rad * (0.9 + 0.2*t2) - 0.1*sin(te*1.51);\n' + 'r = min(1,max(0,r + 0.3*sin(time*0.427 + 1)));\n' + 'g = min(1,max(0,g + 0.3*sin(time*0.401 + 2)));\n' + 'b = min(1,max(0,b + 0.3*sin(time*0.452 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.3*sin(time*0.417 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.3*sin(time*0.457 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.3*sin(time*0.434 + 6)));'),

		},
		{
		'baseVals' : {
			r2 : 0.92,
			a : 0.02,
			enabled : 1.0,
			b : 0.89,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.22019,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.05,
			r : 0.98,
			border_g : 1.0,
			rad : 0.853568,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
m.te = 1;
m.poly = 5;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = ((Math.sin((m.time*0.4))*0.05)*((Math.sin((m.time*0.4))*0.5)+0.5));
m.r = m.q1;
m.g = m.q2;
m.b = m.q3;
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;\n' + 'te = 1;\n' + 'poly = 5;'),
		'frame_eqs_str' : ('ang=sin(time*0.4)*0.05 * (sin(time*0.4)*0.5+0.5);\n' + 'r=q1;\n' + 'g=q2;\n' + 'b=q3;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.265151,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.rate = 0;
m.poly = 0;
m.te = 0;
m.vol = 0;
m.beat = 0;
m.bassthresh = 0;

			m.rkeys = ['poly','te','bassthresh'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rate = div(m.fps,(m.fps+div(1,2)));
m.ang = (m.time*0.5);
m.vol = div(((m.bass_att+m.mid_att)+m.treb_att),6);
m.te = (div(m.vol,m.fps)+m.te);
m.x = (m.x+(0.2*Math.sin((m.te*1.14))));
m.y = (m.y+(0.2*Math.sin(((m.te*0.96)+2))));
m.beat = above((m.vol*1.5), m.bassthresh);
m.bassthresh = ((m.beat*4)+((1-m.beat)*(((m.bassthresh-1.4)*m.rate)+1.4)));
m.poly = ifcond(m.beat, (rand(5)+3), m.poly);
m.poly = ifcond(equal(m.poly, 7), (rand(50)+7), m.poly);
m.sides = m.poly;
m.rad = (m.rad-div(Math.log(m.poly),100));
m.a = pow((m.vol*2), 2);
m.border_a = m.a;
m.rad = ((m.rad*0.7)+(m.a*0.015));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rate = fps/(fps+1/2);\n' + 'ang = time*0.5;\n' + 'vol = (bass_att+mid_att+treb_att)/6;\n' + 'te = vol/fps + te;\n' + 'x = x + 0.2*sin(te*1.14);\n' + 'y = y + 0.2*sin(te*0.96+2);\n' + 'beat = above(vol*1.5,bassthresh);\n' + 'bassthresh = beat*4 + (1-beat)*((bassthresh - 1.4)*rate+1.4);\n' + 'poly = if(beat,rand(5)+3,poly);\n' + 'poly = if(equal(poly,7),rand(50)+7,poly);\n' + 'sides = poly;\n' + 'rad = rad-log(poly)/100;\n' + 'a=pow(vol*2,2);\n' + 'border_a=a;\n' + 'rad=rad*0.7+a*0.015;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('vol=(bass+mid+treb)*0.25;\n' + 'vol=vol*vol;\n' + 'mtime=mtime+vol*0.018;\n' + 'q7=mtime;\n' + 'q8=vol;\n' + 'r=sin(mtime*0.3+0.0)*0.5+0.5;\n' + 'g=sin(mtime*0.3+2.1)*0.5+0.5;\n' + 'b=sin(mtime*0.3+4.2)*0.5+0.5;\n' + 'q1=r;\n' + 'q2=g;\n' + 'q3=b;\n' + 'mv_x=sin(mtime*0.25)*6+9;\n' + 'mv_y=sin(mtime*0.25)*6+9;\n' + 'mv_a=1 - (sin(mtime*0.25)*0.5+0.5)*0.7;\n' + 'decay=1 - (sin(mtime*0.25)*0.5+0.5)*0.01;'),
	'pixel_eqs_str' : ('flux=sin(time*0.3)*2;\n' + 'zoom=-1.02 + rad*(9+flux);'),
};

return pmap;
});
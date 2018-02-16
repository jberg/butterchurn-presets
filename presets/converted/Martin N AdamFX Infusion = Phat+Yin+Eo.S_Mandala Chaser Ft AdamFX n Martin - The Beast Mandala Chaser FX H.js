define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 1.28,
		warpscale : 1.47,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 1.157,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.00183,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.5,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 4.77802,
		mv_dx : 0.4,
		mv_dy : 0.0,
		mv_a : 0.4,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.101,
		ob_size : 0.05,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99816,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.5,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.965,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.contvol = 0;
m.q2 = 0;
m.q3 = 0;
m.dt = 0;
m.vol = 0;
m.mytime = 0;
m.mtime = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.999;
m.wrap = Math.sin((m.time*10));
m.mv_dx = m.bass;
m.ib_a = 0.005;
m.vol = (((m.bass+m.mid)+m.treb)*0.55);
m.vol = (m.vol*m.vol);
m.mtime = (m.mtime+((m.vol*0.01)*div(48,m.fps)));
m.q1 = (m.mtime*0.5);
m.dt = div(1,m.fps);
m.mytime = (m.mytime+m.dt);
m.contvol = Math.min(Math.max(0.5, (((1-(0.5*m.dt))*m.contvol)+(((0.5*m.dt)*((m.bass+m.mid)+m.treb))*0.133))), 2);
m.q2 = m.contvol;
m.q3 = m.mytime;
m.echo_zoom = (1+(m.vol*0.01));
m.sx = -0.99;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1.005-div(m.rad,100));
m.rot = div(m.rad,100);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.06,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
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
m.xp = (((Math.sin(m.s)+Math.sin((m.s*0.44)))+Math.sin((m.s*14.3)))+Math.sin((m.s*12.8)));
m.xp = (m.xp*0.10);
m.yp = (((Math.cos(m.s)+Math.sin((m.s*0.29)))+Math.cos((m.s*19.4)))+Math.sin((m.s*37.7)));
m.yp = (m.yp*0.10);
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
		'point_eqs_str' : ('s=sample*6.28;\n' + 'xp=sin(s)+sin(s*0.44)+sin(s*14.3)+sin(s*12.8);\n' + 'xp=xp*0.10;\n' + 'yp=cos(s)+sin(s*0.29)+cos(s*19.4)+sin(s*37.7);\n' + 'yp=yp*0.10;\n' + 'zp=cos(s)+cos(s*6.24)+cos(s*37.4)+cos(s*29.7);\n' + 'zp=zp*0.25;\n' + 'zp=zp + 1 - t1;\n' + 'zp=if( below(zp,0) , zp+2 , zp );\n' + 'a=(1 - zp*0.5);\n' + 'zp=zp*0.7;\n' + 'x_screen=xp/zp + 0.5;\n' + 'y_screen=yp/zp + 0.5;\n' + 'x=x_screen;\n' + 'y=y_screen;\n' + 'r=1;\n' + 'g=1;\n' + 'b=1;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.5,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.1,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.flip = 0;
m.n = 0;
m.sa = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.zr = 0;
m.tm = 0;
m.xq = 0;
m.yr = 0;
m.ang = 0;
m.xr = 0;
m.ys = 0;
m.phs = 0;
m.xs = 0;
m.t1 = 0;
m.ca = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q2;
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.2);
m.tm = (m.q1+(m.phs*4));
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = (((m.flip*0.1)-0.05)*m.sample);
m.zp = 0;
m.ang = ((m.tm*20)+(Math.sin(((m.tm*76)+(m.time*4)))*0.4));
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xr = ((m.xp*m.sa)+(m.yp*m.ca));
m.yr = ((m.xp*m.ca)-(m.yp*m.sa));
m.zr = m.zp;
m.xp = m.xr;
m.yp = (((m.yr+0.05)+(((Math.sin(m.tm)*0.5)+0.5)*0.2))+0.05);
m.zp = m.zr;
m.ang = Math.sin((m.tm*2));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (m.tm*8);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin(((m.tm*2)-0.5))*2.5));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (-1.0+Math.cos(((m.tm*3)+0.5)));
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos((m.tm*1))*1.75)-1.05);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xq = ((m.xp*m.sa)+(m.zp*m.ca));
m.yq = m.yp;
m.zq = ((m.xp*m.ca)-(m.zp*m.sa));
m.ang = Math.cos(m.tm);
m.xp = m.xq;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yp = ((m.yq*m.ca)-(m.zq*m.sa));
m.zp = ((m.yq*m.sa)+(m.zq*m.ca));
m.zp = (m.zp+1.5);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = (1-m.sample);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=q2;'),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=q1 + phs*4;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=(flip*0.1-0.05)*(sample);\n' + 'zp=0;\n' + 'ang=tm*20 + sin(tm*76 + time*4)*0.4;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xr=xp*sa + yp*ca;\n' + 'yr=xp*ca - yp*sa;\n' + 'zr=zp;\n' + 'xp=xr;\n' + 'yp=yr + 0.05 + (sin(tm)*0.5 + 0.5)*0.2 + 0.05;\n' + 'zp=zr;\n' + 'ang=sin(tm*2);\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=tm*8;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*2.5;\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=-1.0 + cos(tm*3 + 0.5);\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*1)*1.75 - 1.05;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xq=xp*sa + zp*ca;\n' + 'yq=yp;\n' + 'zq=xp*ca - zp*sa;\n' + 'ang=cos(tm);\n' + 'xp=xq;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yp=yq*ca - zq*sa;\n' + 'zp=yq*sa + zq*ca;\n' + 'zp=zp+1.5;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.7,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.q3 = 0;
m.px = 0;
m.ox = 0;
m.py = 0;
m.oy = 0;
m.sum = 0;
m.l = 0;
m.dir = 0;
m.xtrudx = 0;
m.t = 0;
m.xtrudy = 0;
m.y2 = 0;
m.ang = 0;
m.x2 = 0;
m.counter = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['px','py','counter'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q3;
m.t2 = m.q2;
m.t3 = (0.3*m.q2);
		return m;
	},
		'point_eqs' : function(m) {
m.t = (m.t1+(m.t2*(1-m.sample)));
m.ox = (0.5+(((0.3+(0.05*m.sample))*Math.cos(((m.t+0.65)+(3.1415*Math.sin(((1.7*m.t)+0.98))))))*Math.sin(((1.32*m.t)+3.21))));
m.oy = (0.5+((((0.3+(0.05*m.sample))*1.25)*Math.sin(((0.78*m.t)+1.71)))*Math.cos((((0.91*m.t)+3.09)+(3.1415*Math.sin(((1.49*m.t)+0.43)))))));
m.ang = Math.atan2((m.py-m.oy), (m.px-m.ox));
m.l = Math.tan(m.ang);
m.x2 = (0.5+(((0.3-(0.05*m.sample))*Math.cos(((m.t+0.65)+(3.1415*Math.sin(((1.7*m.t)+0.98))))))*Math.sin(((1.32*m.t)+3.21))));
m.y2 = (0.5+((((0.3-(0.05*m.sample))*1.25)*Math.sin(((0.78*m.t)+1.71)))*Math.cos((((0.91*m.t)+3.09)+(3.1415*Math.sin(((1.49*m.t)+0.43)))))));
m.sum = ((((((m.l*m.x2)-m.y2)+m.oy)-(m.l*m.ox))*sign(m.ang))*sign(m.l));
m.dir = (-1+(2*above(m.sum, -0.001)));
m.xtrudx = (((((1-mod(m.counter,2))*m.t3)*m.sample)*Math.cos((m.ang+(m.dir*1.5707))))*Math.abs((m.value1+m.value2)));
m.xtrudy = (((((1-mod(m.counter,2))*m.t3)*m.sample)*Math.sin((m.ang+(m.dir*1.5707))))*Math.abs((m.value1+m.value2)));
m.x = (m.ox+m.xtrudx);
m.y = (m.oy+m.xtrudy);
m.px = m.ox;
m.py = m.oy;
m.counter = (m.counter+1);
m.a = sqr(m.sample);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=q3;\n' + 't2=q2;\n' + 't3=.3*q2;'),
		'point_eqs_str' : ('t=t1+t2*(1-sample);\n' + 'ox=.5+(.3+.05*sample)*cos(t+.65+3.1415*sin(1.7*t+.98))*sin(1.32*t+3.21);\n' + 'oy=.5+(.3+.05*sample)*1.25*sin(.78*t+1.71)*cos(.91*t+3.09+3.1415*sin(1.49*t+.43));\n' + 'ang=atan2( (py-oy),(px-ox) );\n' + 'l=tan(ang);\n' + 'x2=.5+(.3-.05*sample)*cos(t+.65+3.1415*sin(1.7*t+.98))*sin(1.32*t+3.21);\n' + 'y2=.5+(.3-.05*sample)*1.25*sin(.78*t+1.71)*cos(.91*t+3.09+3.1415*sin(1.49*t+.43));\n' + 'sum = (l*x2-y2+oy-l*ox)*sign(ang)*sign(l);\n' + 'dir=-1+2*above(sum,-.001);\n' + 'xtrudx=(1-counter%2)*t3*sample*cos(ang+dir*1.5707)*abs(value1+value2);\n' + 'xtrudy=(1-counter%2)*t3*sample*sin(ang+dir*1.5707)*abs(value1+value2);\n' + 'x=ox+xtrudx;\n' + 'y=oy+xtrudy;\n' + 'px=ox;\n' + 'py=oy;\n' + 'counter=counter+1;\n' + 'a=sqr(sample);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.6,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.q3 = 0;
m.px = 0;
m.ox = 0;
m.py = 0;
m.oy = 0;
m.sum = 0;
m.l = 0;
m.dir = 0;
m.xtrudx = 0;
m.t = 0;
m.xtrudy = 0;
m.y2 = 0;
m.ang = 0;
m.x2 = 0;
m.counter = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['px','py','counter'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q3;
m.t2 = m.q2;
m.t3 = (0.3*m.q2);
		return m;
	},
		'point_eqs' : function(m) {
m.t = (m.t1+(m.t2*(1-m.sample)));
m.ox = (0.5+(((0.3-(0.05*m.sample))*Math.cos(((m.t+0.65)+(3.1415*Math.sin(((1.7*m.t)+0.98))))))*Math.sin(((1.32*m.t)+3.21))));
m.oy = (0.5+((((0.3-(0.05*m.sample))*1.25)*Math.sin(((0.78*m.t)+1.71)))*Math.cos((((0.91*m.t)+3.09)+(3.1415*Math.sin(((1.49*m.t)+0.43)))))));
m.ang = Math.atan2((m.py-m.oy), (m.px-m.ox));
m.l = Math.tan(m.ang);
m.x2 = (0.5+(((0.3+(0.05*m.sample))*Math.cos(((m.t+0.65)+(3.1415*Math.sin(((1.7*m.t)+0.98))))))*Math.sin(((1.32*m.t)+3.21))));
m.y2 = (0.5+((((0.3+(0.05*m.sample))*1.25)*Math.sin(((0.78*m.t)+1.71)))*Math.cos((((0.91*m.t)+3.09)+(3.1415*Math.sin(((1.49*m.t)+0.43)))))));
m.sum = ((((((m.l*m.x2)-m.y2)+m.oy)-(m.l*m.ox))*sign(m.ang))*sign(m.l));
m.dir = (-1+(2*above(m.sum, -0.001)));
m.xtrudx = ((((mod(m.counter,2)*m.t3)*m.sample)*Math.cos((m.ang+(m.dir*1.5707))))*Math.abs((m.value1+m.value2)));
m.xtrudy = ((((mod(m.counter,2)*m.t3)*m.sample)*Math.sin((m.ang+(m.dir*1.5707))))*Math.abs((m.value1+m.value2)));
m.x = (m.ox+m.xtrudx);
m.y = (m.oy+m.xtrudy);
m.px = m.ox;
m.py = m.oy;
m.counter = (m.counter+1);
m.a = sqr(m.sample);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=q3;\n' + 't2=q2;\n' + 't3=.3*q2;'),
		'point_eqs_str' : ('t=t1+t2*(1-sample);\n' + 'ox=.5+(.3-.05*sample)*cos(t+.65+3.1415*sin(1.7*t+.98))*sin(1.32*t+3.21);\n' + 'oy=.5+(.3-.05*sample)*1.25*sin(.78*t+1.71)*cos(.91*t+3.09+3.1415*sin(1.49*t+.43));\n' + 'ang=atan2( (py-oy),(px-ox) );\n' + 'l=tan(ang);\n' + 'x2=.5+(.3+.05*sample)*cos(t+.65+3.1415*sin(1.7*t+.98))*sin(1.32*t+3.21);\n' + 'y2=.5+(.3+.05*sample)*1.25*sin(.78*t+1.71)*cos(.91*t+3.09+3.1415*sin(1.49*t+.43));\n' + 'sum = (l*x2-y2+oy-l*ox)*sign(ang)*sign(l);\n' + 'dir=-1+2*above(sum,-.001);\n' + 'xtrudx=(counter%2)*t3*sample*cos(ang+dir*1.5707)*abs(value1+value2);\n' + 'xtrudy=(counter%2)*t3*sample*sin(ang+dir*1.5707)*abs(value1+value2);\n' + 'x=ox+xtrudx;\n' + 'y=oy+xtrudy;\n' + 'px=ox;\n' + 'py=oy;\n' + 'counter=counter+1;\n' + 'a=sqr(sample);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.7,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.9,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 100.0,
			additive : 1.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.0,
			rad : 1.51261,
			x : 1.0,
			y : 0.59,
			ang : 3.39292,
			sides : 3.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (((Math.sin(div(m.time,10))*0.1)+0.5)+(m.treb_att*0.1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=sin(time/10)*0.1+0.5+(treb_att*0.1);'),

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
			tex_zoom : 1.10258,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.66231,
			x : 0.5,
			y : 0.5,
			ang : 3.07876,
			sides : 13.0,
			border_r : 0.5,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (Math.sin(div(m.time,20))*6.28);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=sin(time/20)*6.28;'),

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
			tex_zoom : 0.33198,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.46815,
			x : 0.0,
			y : 0.3,
			ang : 5.02655,
			sides : 6.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = (((Math.sin(div(m.time,4))*0.5)+0.5)*6.28);
m.y = ((Math.sin(div(m.time,2))*0.5)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=(sin(time/4)*0.5+0.5)*6.28;\n' + 'y=sin(time/2)*0.5+0.5;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 4.90089,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 2.37657,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.38316,
			x : 0.5,
			y : 0.5,
			ang : 3.14159,
			sides : 28.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.var = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = div(m.time,10);
m.var = above(m.bass_att, 0.7);
m.a = m.var;
m.a2 = m.var;
m.border_a = m.var;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=time/10;\n' + 'var=above(bass_att,0.7);\n' + 'a=var;\n' + 'a2=var;\n' + 'border_a=var;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 crisp_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (((uv - vec2(0.5, 0.5)) * texsize.xy) * 0.015);\n' + '  uv_1 = (uv + ((\n' + '    ((clamp ((\n' + '      sin(tmpvar_3)\n' + '     / \n' + '      cos(tmpvar_3)\n' + '    ), vec2(-12.0, -12.0), vec2(12.0, 12.0)) * cos((\n' + '      (4.0 * (_qa.y + 1.0))\n' + '     * tmpvar_3.yx))) * texsize.zw)\n' + '   * 4.0) * (2.0 + _qa.x)));\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_main, uv_1).xyz;\n' + '  crisp_2 = tmpvar_4;\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = (((0.995 * crisp_2) + vec3(0.01, 0.01, 0.01)) - 0.02);\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 crisp_1;\n' + '   vec2 uv3_2;\n' + '   vec2 uv2_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = ((uv - 0.5) * aspect.xy);\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = (0.1 / (sqrt(\n' + '    dot (tmpvar_4, tmpvar_4)\n' + '  ) + 0.05));\n' + '   vec2 tmpvar_6;\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (ang / 3.14);\n' + '  tmpvar_6.x = tmpvar_7;\n' + '  tmpvar_6.y = (tmpvar_5 * 1.5);\n' + '  uv2_3.y = (tmpvar_6.y + (0.1 * time));\n' + '  uv2_3.x = (tmpvar_7 + (0.02 * time));\n' + '  uv3_2.y = (tmpvar_5 + _qh.y);\n' + '  uv3_2.x = (tmpvar_7 + (time / 32.0));\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = fract(uv2_3);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = fract(uv3_2);\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = (texture2D (sampler_main, tmpvar_8).xyz + (2.0 * texture2D (sampler_main, tmpvar_9).xyz));\n' + '  crisp_1 = tmpvar_10;\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = fract(uv2_3);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_blur2, tmpvar_11);\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = fract(uv3_2);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur2, tmpvar_13);\n' + '  crisp_1 = (crisp_1 + ((2.0 * \n' + '    ((tmpvar_12.xyz * scale2) + bias2)\n' + '  ) + (2.0 * \n' + '    ((tmpvar_14.xyz * scale2) + bias2)\n' + '  )));\n' + '  crisp_1 = ((3.0 * crisp_1) * rad);\n' + '   float tmpvar_15;\n' + '  tmpvar_15 = clamp ((1.0 - (4.0 * rad)), 0.0, 1.0);\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = fract(uv);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_main, tmpvar_16);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18.w = 1.0;\n' + '  tmpvar_18.xyz = ((crisp_1 + (\n' + '    ((vec3(1.0, 0.0, 1.0) * uv.y) * pow ((1.0 - rad), 8.0))\n' + '   * tmpvar_15)) + (tmpvar_15 * tmpvar_17.xyz));\n' + '  vec4 ret4 = tmpvar_18;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('decay=.999;\n' + 'wrap=sin(time*10);\n' + 'mv_dx=bass;\n' + 'ib_a=.005;\n' + 'vol=(bass+mid+treb)*0.55;\n' + 'vol=vol*vol;\n' + 'mtime=mtime+vol*0.01*(48/fps);\n' + 'q1=mtime*0.5;\n' + 'dt=1/FPS;\n' + 'mytime=mytime+dt;\n' + 'contvol=min( max(.5, (1-.5*dt)*contvol+.5*dt*(bass+mid+treb)*.133 ) ,2 ) ;\n' + 'q2=contvol;\n' + 'q3=mytime;\n' + 'echo_zoom=1+(vol*0.01);\n' + 'sx=-.99;'),
	'pixel_eqs_str' : ('zoom=1.005-(rad/100);\n' + 'rot=rad/100;'),
};

return pmap;
});
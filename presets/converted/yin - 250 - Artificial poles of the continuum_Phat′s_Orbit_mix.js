define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.28,
		wave_g : 0.5,
		ib_g : 0.3,
		mv_x : 0.0,
		warpscale : 1.986883,
		brighten : 1.0,
		mv_y : 1.0E-6,
		wave_scale : 1.001775,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 1.0,
		sy : 0.9998,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.8802,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.71,
		echo_zoom : 1.0,
		ob_size : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 1.321288,
		wave_dots : 0.0,
		mv_g : 0.91,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9998,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.5,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.8,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.st = 0;
m.q3 = 0;
m.vx = 0;
m.vy = 0;
m.vz = 0;
m.q7 = 0;
m.q8 = 0;
m.phi = 0;
m.bx = 0;
m.ax = 0;
m.by = 0;
m.ay = 0;
m.bz = 0;
m.az = 0;
m.rho = 0;
m.mytime = 0;
m.theta = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.st = ifcond(equal(m.st, 0), (m.time-131), m.st);
m.mytime = (m.time-m.st);
m.phi = ((6.2831*(m.mytime+4.564))*0.02);
m.theta = (6.2831*((m.mytime*0.03)+1.54));
m.rho = (6.2831*Math.abs(Math.sin((m.mytime*0))));
m.q1 = m.phi;
m.q2 = m.theta;
m.q3 = m.rho;
m.ax = 0;
m.ay = 0;
m.az = -30;
m.bx = m.ax;
m.by = ((m.ay*Math.cos(m.q1))-(m.az*Math.sin(m.q1)));
m.bz = ((m.ay*Math.sin(m.q1))+(m.az*Math.cos(m.q1)));
m.ax = ((m.bx*Math.cos(m.q2))-(m.bz*Math.sin(m.q2)));
m.ay = m.by;
m.az = ((m.bx*Math.sin(m.q2))+(m.bz*Math.cos(m.q2)));
m.bx = ((m.ax*Math.cos(m.q3))-(m.ay*Math.sin(m.q3)));
m.by = ((m.ax*Math.sin(m.q3))+(m.ay*Math.cos(m.q3)));
m.bz = m.az;
m.vx = m.bx;
m.vy = m.by;
m.vz = m.bz;
m.q7 = (div(m.vx,Math.abs((m.vz-10)))+0.5);
m.vy = (-m.vy+1);
m.q8 = (div(m.vy,Math.abs((m.vz-10)))+0.5);
m.q7 = ifcond((1-below(m.vz, 0)), -100, m.q7);
m.q8 = ifcond((1-below(m.vz, 0)), -100, m.q8);
m.monitor = m.mytime;
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
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
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
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.vx = 0;
m.vy = 0;
m.vz = 0;
m.bx = 0;
m.ax = 0;
m.by = 0;
m.ay = 0;
m.bz = 0;
m.az = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ax = (((10*0.5)*(Math.sin(((100*m.sample)+1.865))+1))*Math.sin((((300*6.2831)*m.sample)+(3.14*m.sample))));
m.ay = (((10*0.5)*(Math.sin(((100*m.sample)+5.23))+1))*Math.cos(((((200*6.2831)*m.sample)+(3.14*m.sample))+0.1454)));
m.az = ((5*(Math.sin(((100*m.sample)+0.234))+1))*Math.sin(((((400*6.2831)*m.sample)+(3.14*m.sample))+1.84)));
m.bx = m.ax;
m.by = ((m.ay*Math.cos(m.q1))-(m.az*Math.sin(m.q1)));
m.bz = ((m.ay*Math.sin(m.q1))+(m.az*Math.cos(m.q1)));
m.ax = ((m.bx*Math.cos(m.q2))-(m.bz*Math.sin(m.q2)));
m.ay = m.by;
m.az = ((m.bx*Math.sin(m.q2))+(m.bz*Math.cos(m.q2)));
m.bx = ((m.ax*Math.cos(m.q3))-(m.ay*Math.sin(m.q3)));
m.by = ((m.ax*Math.sin(m.q3))+(m.ay*Math.cos(m.q3)));
m.bz = m.az;
m.vx = m.bx;
m.vy = m.by;
m.vz = m.bz;
m.x = (div(m.vx,Math.abs((m.vz-10)))+0.5);
m.y = (div(m.vy,Math.abs((m.vz-10)))+0.5);
m.a = (above(m.vz, 0)*(0.05*(5-Math.abs(m.az))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ax = 10*.5*(sin(100*sample+1.865)+1)*sin(300*6.2831*sample+3.14*sample);\n' + 'ay = 10*.5*(sin(100*sample+5.23)+1)*cos(200*6.2831*sample+ 3.14*sample+.1454);\n' + 'az = 5*(sin(100*sample+.234)+1)*sin(400*6.2831*sample+3.14*sample+1.84);\n' + 'bx = ax;\n' + 'by = ay*cos(q1) - az*sin(q1);\n' + 'bz = ay*sin(q1) + az*cos(q1);\n' + 'ax = bx*cos(q2) - bz*sin(q2);\n' + 'ay = by;\n' + 'az = bx*sin(q2) + bz*cos(q2);\n' + 'bx = ax*cos(q3) - ay*sin(q3);\n' + 'by = ax*sin(q3) + ay*cos(q3);\n' + 'bz = az;\n' + 'vx=bx;\n' + ' vy=by;\n' + ' vz=bz;\n' + 'x=vx/abs(vz-10)+.5;\n' + 'y=vy/abs(vz-10)+.5;\n' + 'a=above(vz,0)*(.05*(5-abs(az)));'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.100001,
			g : 0.500001,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.vx = 0;
m.vy = 0;
m.vz = 0;
m.as = 0;
m.t = 0;
m.bx = 0;
m.ax = 0;
m.by = 0;
m.ay = 0;
m.bz = 0;
m.az = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.t = above(Math.sin((((20*6.2831)*m.sample)+(m.time*16))), 0);
m.ax = ((1.58+((1.5*m.t)*Math.abs(m.value1)))*Math.cos((6.2831*m.sample)));
m.ay = ((1.3*(1.58+((1.5*m.t)*Math.abs(m.value2))))*Math.sin((6.2831*m.sample)));
m.az = 0;
m.bx = m.ax;
m.by = ((m.ay*Math.cos(m.q1))-(m.az*Math.sin(m.q1)));
m.bz = ((m.ay*Math.sin(m.q1))+(m.az*Math.cos(m.q1)));
m.ax = ((m.bx*Math.cos(m.q2))-(m.bz*Math.sin(m.q2)));
m.ay = m.by;
m.az = ((m.bx*Math.sin(m.q2))+(m.bz*Math.cos(m.q2)));
m.bx = ((m.ax*Math.cos(m.q3))-(m.ay*Math.sin(m.q3)));
m.by = ((m.ax*Math.sin(m.q3))+(m.ay*Math.cos(m.q3)));
m.bz = m.az;
m.vx = m.bx;
m.vy = m.by;
m.vz = m.bz;
m.x = (div(m.vx,Math.abs((m.vz-10)))+0.5);
m.y = (div(m.vy,Math.abs((m.vz-10)))+0.5);
m.as = above(((((Math.cos((m.q3+1.57))*Math.cos(m.q2))*m.vx)+((Math.sin((m.q3+1.57))*Math.sin(m.q1))*m.vy))+(Math.sin(m.q2)*m.vz)), 0);
m.a = (m.t*((0.07*(1-m.as))+m.as));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('t=above(sin(20*6.2831*sample+time*16),0);\n' + 'ax = (1.58+1.5*t*abs(value1))*cos(6.2831*sample);\n' + 'ay = 1.3*(1.58+1.5*t*abs(value2))*sin(6.2831*sample);\n' + 'az = 0;\n' + 'bx = ax;\n' + 'by = ay*cos(q1) - az*sin(q1);\n' + 'bz = ay*sin(q1) + az*cos(q1);\n' + 'ax = bx*cos(q2) - bz*sin(q2);\n' + 'ay = by;\n' + 'az = bx*sin(q2) + bz*cos(q2);\n' + 'bx = ax*cos(q3) - ay*sin(q3);\n' + 'by = ax*sin(q3) + ay*cos(q3);\n' + 'bz = az;\n' + 'vx=bx;\n' + ' vy=by;\n' + ' vz=bz;\n' + 'x=vx/abs(vz-10)+.5;\n' + 'y=vy/abs(vz-10)+.5;\n' + 'as=above(cos(q3+1.57)*cos(q2)*vx+sin(q3+1.57)*sin(q1)*vy+sin(q2)*vz,0);\n' + 'a=t*(.07*(1-as)+as);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.1,
			g : 0.5,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.vx = 0;
m.vy = 0;
m.vz = 0;
m.as = 0;
m.t = 0;
m.bx = 0;
m.ax = 0;
m.by = 0;
m.ay = 0;
m.bz = 0;
m.az = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.t = above(Math.sin((((20*6.2831)*m.sample)+(m.time*16))), 0);
m.ax = ((1.58+((1.5*m.t)*Math.abs(m.value1)))*Math.cos((6.2831*m.sample)));
m.ay = 0;
m.az = ((1.2*(1.58+((1.5*m.t)*Math.abs(m.value2))))*Math.sin((6.2831*m.sample)));
m.bx = m.ax;
m.by = ((m.ay*Math.cos(m.q1))-(m.az*Math.sin(m.q1)));
m.bz = ((m.ay*Math.sin(m.q1))+(m.az*Math.cos(m.q1)));
m.ax = ((m.bx*Math.cos(m.q2))-(m.bz*Math.sin(m.q2)));
m.ay = m.by;
m.az = ((m.bx*Math.sin(m.q2))+(m.bz*Math.cos(m.q2)));
m.bx = ((m.ax*Math.cos(m.q3))-(m.ay*Math.sin(m.q3)));
m.by = ((m.ax*Math.sin(m.q3))+(m.ay*Math.cos(m.q3)));
m.bz = m.az;
m.vx = m.bx;
m.vy = m.by;
m.vz = m.bz;
m.x = (div(m.vx,Math.abs((m.vz-10)))+0.5);
m.y = (div(m.vy,Math.abs((m.vz-10)))+0.5);
m.as = above(((((Math.cos((m.q3-1.57))*Math.cos(m.q2))*m.vx)+((Math.sin((m.q3-1.57))*Math.sin(m.q1))*m.vy))+(Math.sin(m.q2)*m.vz)), 0);
m.a = (m.t*((0.07*(1-m.as))+m.as));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('t=above(sin(20*6.2831*sample+time*16),0);\n' + 'ax = (1.58+1.5*t*abs(value1))*cos(6.2831*sample);\n' + 'ay = 0;\n' + 'az = 1.2*(1.58+1.5*t*abs(value2))*sin(6.2831*sample);\n' + 'bx = ax;\n' + 'by = ay*cos(q1) - az*sin(q1);\n' + 'bz = ay*sin(q1) + az*cos(q1);\n' + 'ax = bx*cos(q2) - bz*sin(q2);\n' + 'ay = by;\n' + 'az = bx*sin(q2) + bz*cos(q2);\n' + 'bx = ax*cos(q3) - ay*sin(q3);\n' + 'by = ax*sin(q3) + ay*cos(q3);\n' + 'bz = az;\n' + 'vx=bx;\n' + ' vy=by;\n' + ' vz=bz;\n' + 'x=vx/abs(vz-10)+.5;\n' + 'y=vy/abs(vz-10)+.5;\n' + 'as=above(cos(q3-1.57)*cos(q2)*vx+sin(q3-1.57)*sin(q1)*vy+sin(q2)*vz,0);\n' + 'a=t*(.07*(1-as)+as);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.7,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.8,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.398722,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 60.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.vx = 0;
m.vy = 0;
m.vz = 0;
m.bx = 0;
m.ax = 0;
m.by = 0;
m.ay = 0;
m.bz = 0;
m.az = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ax = 0;
m.ay = 0;
m.az = -30;
m.bx = m.ax;
m.by = ((m.ay*Math.cos(m.q1))-(m.az*Math.sin(m.q1)));
m.bz = ((m.ay*Math.sin(m.q1))+(m.az*Math.cos(m.q1)));
m.ax = ((m.bx*Math.cos(m.q2))-(m.bz*Math.sin(m.q2)));
m.ay = m.by;
m.az = ((m.bx*Math.sin(m.q2))+(m.bz*Math.cos(m.q2)));
m.bx = ((m.ax*Math.cos(m.q3))-(m.ay*Math.sin(m.q3)));
m.by = ((m.ax*Math.sin(m.q3))+(m.ay*Math.cos(m.q3)));
m.bz = m.az;
m.vx = m.bx;
m.vy = m.by;
m.vz = m.bz;
m.x = (div(m.vx,Math.abs((m.vz-10)))+0.5);
m.y = (div(m.vy,Math.abs((m.vz-10)))+0.5);
m.a = below(m.vz, 0);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ax=0;\n' + ' ay=0;\n' + ' az=-30;\n' + 'bx = ax;\n' + 'by = ay*cos(q1) - az*sin(q1);\n' + 'bz = ay*sin(q1) + az*cos(q1);\n' + 'ax = bx*cos(q2) - bz*sin(q2);\n' + 'ay = by;\n' + 'az = bx*sin(q2) + bz*cos(q2);\n' + 'bx = ax*cos(q3) - ay*sin(q3);\n' + 'by = ax*sin(q3) + ay*cos(q3);\n' + 'bz = az;\n' + 'vx=bx;\n' + ' vy=by;\n' + ' vz=bz;\n' + 'x=vx/abs(vz-10)+.5;\n' + 'y=vy/abs(vz-10)+.5;\n' + 'a=below(vz,0);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.2,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.69115,
			thickoutline : 0.0,
			g : 0.1,
			textured : 1.0,
			g2 : 0.05,
			tex_zoom : 2.348658,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.4,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.559237,
			x : 0.5,
			y : 0.5,
			ang : 1.884956,
			sides : 60.0,
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
			a : 0.4,
			enabled : 1.0,
			b : 0.6,
			tex_ang : 6.283185,
			thickoutline : 0.0,
			g : 0.5,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.305462,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.8,
			r : 0.0,
			border_g : 1.0,
			rad : 1.54304,
			x : 0.5,
			y : 0.5,
			ang : 6.283185,
			sides : 60.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = m.bass;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=bass;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.7,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.8,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1149,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 6.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.d = 0;
m.q7 = 0;
m.q8 = 0;
m.an = 0;
m.t = 0;

			m.rkeys = ['q8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.q8 = (-m.q8+1);
m.t = (mod(m.frame,6)+4);
m.sides = ifcond(equal(mod(m.t,2), 0), 6, 60);
m.r = (((equal(m.t, 4)*0.3)+(equal(m.t, 6)*0.1))+(equal(m.t, 8)*0.3));
m.g = (((equal(m.t, 4)*0.1)+(equal(m.t, 6)*0.5))+(equal(m.t, 8)*0.15));
m.b = (((equal(m.t, 4)*0.6)+(equal(m.t, 6)*0.3))+(equal(m.t, 8)*0.0));
m.r2 = (((equal(m.t, 4)*0.3)+(equal(m.t, 6)*0.1))+(equal(m.t, 8)*0.3));
m.g2 = (((equal(m.t, 4)*0.1)+(equal(m.t, 6)*0.5))+(equal(m.t, 8)*0.15));
m.b2 = (((equal(m.t, 4)*0.6)+(equal(m.t, 6)*0.3))+(equal(m.t, 8)*0.0));
m.r = (m.r+equal(mod(m.t,2), 1));
m.g = (m.g+equal(mod(m.t,2), 1));
m.b = (m.b+(equal(mod(m.t,2), 1)*0.7));
m.r2 = (m.r2+equal(mod(m.t,2), 1));
m.g2 = (m.g2+(equal(mod(m.t,2), 1)*0.8));
m.rad = ((((((equal(m.t, 4)*0.1)+(equal(m.t, 5)*0.14))+(equal(m.t, 6)*0.14))+(equal(m.t, 7)*0.18))+(equal(m.t, 8)*0.12))+(equal(m.t, 9)*0.2));
m.an = Math.atan2((m.q8-0.5), (m.q7-0.5));
m.ang = (0+((equal(mod(m.t,2), 0)*2)*m.an));
m.ang = ifcond(equal(m.t, 6), -m.ang, m.ang);
m.d = sqrt((sqr((m.q7-0.5))+sqr((m.q8-0.5))));
m.a = (above((1-m.d), 0)*sqrt((1-m.d)));
m.x = (((m.t*(0.5-m.q7))*0.1617)+m.q7);
m.y = (((m.t*(0.5-m.q8))*0.1617)+m.q8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('q8=-q8+1;\n' + 't=(frame%6+4);\n' + 'sides=if(equal(t%2,0),6,60);\n' + 'r=equal(t,4)*.3+equal(t,6)*.1+equal(t,8)*.3;\n' + 'g=equal(t,4)*.1+equal(t,6)*.5+equal(t,8)*.15;\n' + 'b=equal(t,4)*.6+equal(t,6)*.3+equal(t,8)*.0;\n' + 'r2=equal(t,4)*.3+equal(t,6)*.1+equal(t,8)*.3;\n' + 'g2=equal(t,4)*.1+equal(t,6)*.5+equal(t,8)*.15;\n' + 'b2=equal(t,4)*.6+equal(t,6)*.3+equal(t,8)*.0;\n' + 'r=r+equal(t%2,1);\n' + 'g=g+equal(t%2,1);\n' + 'b=b+equal(t%2,1)*.7;\n' + 'r2=r2+equal(t%2,1);\n' + 'g2=g2+equal(t%2,1)*.8;\n' + 'rad=equal(t,4)*.1+equal(t,5)*.14+equal(t,6)*.14+equal(t,7)*.18 +equal(t,8)*.12+equal(t,9)*.2;\n' + 'an=atan2(q8-.5,q7-.5);\n' + 'ang=0+equal(t%2,0)*2*an;\n' + 'ang=if(equal(t,6),-ang,ang);\n' + 'd=sqrt(sqr(q7-.5)+sqr(q8-.5));\n' + 'a=above(1-d,0)*sqrt(1-d);\n' + 'x=t*(.5-q7)*.1617+q7;\n' + 'y=t*(.5-q8)*.1617+q8;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('st=if(equal(st,0),time-131,st);\n' + 'mytime=time-st;\n' + 'phi=6.2831*(mytime+4.564)*.02;\n' + 'theta=6.2831*(mytime*.03+1.54);\n' + 'rho=6.2831*abs(sin(mytime*0));\n' + 'q1=phi;\n' + 'q2=theta;\n' + 'q3=rho;\n' + 'ax=0;\n' + ' ay=0;\n' + ' az=-30;\n' + 'bx = ax;\n' + 'by = ay*cos(q1) - az*sin(q1);\n' + 'bz = ay*sin(q1) + az*cos(q1);\n' + 'ax = bx*cos(q2) - bz*sin(q2);\n' + 'ay = by;\n' + 'az = bx*sin(q2) + bz*cos(q2);\n' + 'bx = ax*cos(q3) - ay*sin(q3);\n' + 'by = ax*sin(q3) + ay*cos(q3);\n' + 'bz = az;\n' + 'vx=bx;\n' + ' vy=by;\n' + ' vz=bz;\n' + 'q7=vx/abs(vz-10)+.5;\n' + 'vy=-vy+1;\n' + 'q8=vy/abs(vz-10)+.5;\n' + 'q7=if(1-below(vz,0), -100,q7);\n' + 'q8=if(1-below(vz,0), -100,q8);\n' + 'monitor=mytime;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.63,
		wave_g : 0.5,
		ib_g : 0.3,
		mv_x : 4.586357,
		warpscale : 1.986883,
		brighten : 0.0,
		mv_y : 3.233833,
		wave_scale : 1.001775,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 1.0,
		sy : 0.9998,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.8802,
		mv_dx : 0.12204,
		mv_dy : 0.156041,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.328534,
		echo_zoom : 0.999999,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.321288,
		wave_dots : 0.0,
		mv_g : 0.481765,
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
		mv_l : 0.211692,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.85,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 0.455835,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.5,
		b1n : 0.0,
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
m.ob_size = 1;
m.ob_a = Math.min(div(0.005,(sqr((m.q7-0.5))+sqr((m.q8-0.5)))), 0.8);
m.monitor = m.mytime;
m.zoom = (1+div((0.015*85),m.fps));
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
			scaling : 0.999998,
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
m.q4 = 0;
m.fx = 0;
m.fy = 0;
m.ax = 0;
m.ay = 0;
m.az = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ax = Math.cos((((100*m.sample)+43.35)+Math.sin(((231.54*m.sample)+0.543))));
m.ay = Math.sin((((431*m.sample)+2.34)+Math.cos(((443.54*m.sample)+4.23))));
m.az = (Math.sin((((546*m.sample)+74.24)+Math.sin(((524.54*m.sample)+23.987))))+(2*((m.q4+(0.2*m.time))-Math.floor((m.q4+(0.2*m.time))))));
m.az = ifcond(above(m.az, 1), (m.az-2), m.az);
m.fx = (0.5+div((0.5*m.ax),(1-m.az)));
m.fy = (0.5+div((0.5*m.ay),(1-m.az)));
m.x = m.fx;
m.y = m.fy;
m.r = (1-div((0.5*rand(100)),100));
m.g = (1-div((0.5*rand(100)),100));
m.b = (1-div((0.5*rand(100)),100));
m.a = pow(div((m.az+1),2), 3);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ax=cos(100*sample+43.35+sin(231.54*sample+.543));\n' + 'ay=sin(431*sample+2.34+cos(443.54*sample+4.23));\n' + 'az=sin(546*sample+74.24+sin(524.54*sample+23.987))+2*(q4+.2*time-int(q4+.2*time));\n' + 'az=if(above(az,1),az-2,az);\n' + 'fx = .5+.5*ax/(1-az);\n' + 'fy = .5+.5*ay/(1-az);\n' + 'x=fx;\n' + 'y=fy;\n' + 'r=1-.5*rand(100)/100;\n' + 'g=1-.5*rand(100)/100;\n' + 'b=1-.5*rand(100)/100;\n' + 'a=pow((az+1)/2,3);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.999998,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 1.0,
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
m.sw1 = 0;
m.as = 0;
m.bx = 0;
m.ax = 0;
m.by = 0;
m.ay = 0;
m.bz = 0;
m.az = 0;

			m.rkeys = ['sample'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sw1 = below(m.sample, 0.5);
m.sample = (2*((m.sw1*m.sample)+((1-m.sw1)*(m.sample-0.5))));
m.ax = (1-((3.58*m.sample)*m.sw1));
m.ay = 0;
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
m.as = 1;
m.a = 1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sw1=below(sample,.5);\n' + 'sample=2*(sw1*sample+(1-sw1)*(sample-.5));\n' + 'ax = 1-3.58*sample*sw1;\n' + 'ay = 0;\n' + 'az = 0;\n' + 'bx = ax;\n' + 'by = ay*cos(q1) - az*sin(q1);\n' + 'bz = ay*sin(q1) + az*cos(q1);\n' + 'ax = bx*cos(q2) - bz*sin(q2);\n' + 'ay = by;\n' + 'az = bx*sin(q2) + bz*cos(q2);\n' + 'bx = ax*cos(q3) - ay*sin(q3);\n' + 'by = ax*sin(q3) + ay*cos(q3);\n' + 'bz = az;\n' + 'vx=bx;\n' + ' vy=by;\n' + ' vz=bz;\n' + 'x=vx/abs(vz-10)+.5;\n' + 'y=vy/abs(vz-10)+.5;\n' + 'as=above(cos(q3+1.57)*cos(q2)*vx+sin(q3+1.57)*sin(q1)*vy+sin(q2)*vz,0);\n' + 'as=1;\n' + 'a=1;'),

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
m.t = 1;
m.ax = ((1.58+((1.5*m.t)*Math.abs(m.value1)))*Math.cos((6.2831*m.sample)));
m.ay = ((1.38*(1.58+((1.5*m.t)*Math.abs(m.value2))))*Math.sin((6.2831*m.sample)));
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
m.as = pow((sqrt((sqr((m.x-0.5))+sqr((m.y-0.5))))*4), 4);
m.a = (m.t*((0.07*(1-m.as))+m.as));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('t=above(sin(20*6.2831*sample+time*16),0);\n' + 't=1;\n' + 'ax = (1.58+1.5*t*abs(value1))*cos(6.2831*sample);\n' + 'ay = 1.38*(1.58+1.5*t*abs(value2))*sin(6.2831*sample);\n' + 'az = 0;\n' + 'bx = ax;\n' + 'by = ay*cos(q1) - az*sin(q1);\n' + 'bz = ay*sin(q1) + az*cos(q1);\n' + 'ax = bx*cos(q2) - bz*sin(q2);\n' + 'ay = by;\n' + 'az = bx*sin(q2) + bz*cos(q2);\n' + 'bx = ax*cos(q3) - ay*sin(q3);\n' + 'by = ax*sin(q3) + ay*cos(q3);\n' + 'bz = az;\n' + 'vx=bx;\n' + ' vy=by;\n' + ' vz=bz;\n' + 'x=vx/abs(vz-10)+.5;\n' + 'y=vy/abs(vz-10)+.5;\n' + 'as=pow(sqrt(sqr(x-.5)+sqr(y-.5))*4,4);\n' + 'a=t*(.07*(1-as)+as);'),

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
m.t = 1;
m.ax = ((1.58+((1.5*m.t)*Math.abs(m.value1)))*Math.cos((6.2831*m.sample)));
m.ay = 0;
m.az = ((1.38*(1.58+((1.5*m.t)*Math.abs(m.value2))))*Math.sin((6.2831*m.sample)));
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
m.as = pow((sqrt((sqr((m.x-0.5))+sqr((m.y-0.5))))*4), 4);
m.a = (m.t*((0.07*(1-m.as))+m.as));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('t=above(sin(20*6.2831*sample+time*16),0);\n' + 't=1;\n' + 'ax = (1.58+1.5*t*abs(value1))*cos(6.2831*sample);\n' + 'ay = 0;\n' + 'az = 1.38*(1.58+1.5*t*abs(value2))*sin(6.2831*sample);\n' + 'bx = ax;\n' + 'by = ay*cos(q1) - az*sin(q1);\n' + 'bz = ay*sin(q1) + az*cos(q1);\n' + 'ax = bx*cos(q2) - bz*sin(q2);\n' + 'ay = by;\n' + 'az = bx*sin(q2) + bz*cos(q2);\n' + 'bx = ax*cos(q3) - ay*sin(q3);\n' + 'by = ax*sin(q3) + ay*cos(q3);\n' + 'bz = az;\n' + 'vx=bx;\n' + ' vy=by;\n' + ' vz=bz;\n' + 'x=vx/abs(vz-10)+.5;\n' + 'y=vy/abs(vz-10)+.5;\n' + 'as=pow(sqrt(sqr(x-.5)+sqr(y-.5))*4,4);\n' + 'a=t*(.07*(1-as)+as);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
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
m.x = 0.5;
m.y = 0.5;
m.rad = 0.1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ax=0;\n' + ' ay=0;\n' + ' az=-30;\n' + 'bx = ax;\n' + 'by = ay*cos(q1) - az*sin(q1);\n' + 'bz = ay*sin(q1) + az*cos(q1);\n' + 'ax = bx*cos(q2) - bz*sin(q2);\n' + 'ay = by;\n' + 'az = bx*sin(q2) + bz*cos(q2);\n' + 'bx = ax*cos(q3) - ay*sin(q3);\n' + 'by = ax*sin(q3) + ay*cos(q3);\n' + 'bz = az;\n' + 'vx=bx;\n' + ' vy=by;\n' + ' vz=bz;\n' + 'x=vx/abs(vz-10)+.5;\n' + 'y=vy/abs(vz-10)+.5;\n' + 'x=.5;\n' + 'y=.5;\n' + 'rad=.1;'),

		},
		{
		'baseVals' : {
			r2 : 0.04,
			a : 0.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.69115,
			thickoutline : 0.0,
			g : 0.1,
			textured : 1.0,
			g2 : 0.05,
			tex_zoom : 1.500923,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.4,
			a2 : 1.0,
			r : 0.2,
			border_g : 1.0,
			rad : 0.298682,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
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
			a : 0.0,
			enabled : 1.0,
			b : 0.6,
			tex_ang : 1.5707,
			thickoutline : 0.0,
			g : 0.5,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.50099,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.7,
			r : 0.0,
			border_g : 1.0,
			rad : 1.54304,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 60.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = Math.abs(Math.cos((((m.time*3.243)+0.434)+Math.sin(((m.time*1.23)+4.324)))));
m.g = Math.abs(Math.cos((((m.time*2.03)+1.546)+Math.cos(((m.time*3.01)+1.98)))));
m.b = (0.75*Math.abs(Math.sin((((m.time*2.54)+0.65)+Math.sin(((m.time*3.77)+8))))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=abs(cos(time*3.243+.434+sin(time*1.23+4.324)));\n' + 'g=abs(cos(time*2.03+1.546+cos(time*3.01+1.98)));\n' + 'b=.75*abs(sin(time*2.54+.65+sin(time*3.77+8)));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
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
	'frame_eqs_str' : ('st=if(equal(st,0),time-131,st);\n' + 'mytime=time-st;\n' + 'phi=6.2831*(mytime+4.564)*.02;\n' + 'theta=6.2831*(mytime*.03+1.54);\n' + 'rho=6.2831*abs(sin(mytime*0));\n' + 'q1=phi;\n' + 'q2=theta;\n' + 'q3=rho;\n' + 'ax=0;\n' + ' ay=0;\n' + ' az=-30;\n' + 'bx = ax;\n' + 'by = ay*cos(q1) - az*sin(q1);\n' + 'bz = ay*sin(q1) + az*cos(q1);\n' + 'ax = bx*cos(q2) - bz*sin(q2);\n' + 'ay = by;\n' + 'az = bx*sin(q2) + bz*cos(q2);\n' + 'bx = ax*cos(q3) - ay*sin(q3);\n' + 'by = ax*sin(q3) + ay*cos(q3);\n' + 'bz = az;\n' + 'vx=bx;\n' + ' vy=by;\n' + ' vz=bz;\n' + 'q7=vx/abs(vz-10)+.5;\n' + 'vy=-vy+1;\n' + 'q8=vy/abs(vz-10)+.5;\n' + 'q7=if(1-below(vz,0), -100,q7);\n' + 'q8=if(1-below(vz,0), -100,q8);\n' + 'ob_size=1;\n' + 'ob_a=min(.005/(sqr(q7-.5)+sqr(q8-.5)),.8);\n' + 'monitor=mytime;\n' + 'zoom=1+.015*85/FPS;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
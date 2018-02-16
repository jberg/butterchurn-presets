define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.28,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 4.586,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 3.234,
		wave_scale : 1.002,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.99984,
		mv_dx : 0.122,
		mv_dy : 0.156,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 0.329,
		echo_zoom : 1.0,
		ob_size : 0.5,
		b1ed : 0.25,
		wave_smoothing : 0.261,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.482,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99951,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.212,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.8,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 0.456,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.5,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.aq1 = 0;
m.q3 = 0;
m.aq2 = 0;
m.q4 = 0;
m.aq3 = 0;
m.aq4 = 0;
m.tic = 0;
m.tb = 0;
m.vol = 0;
m.tin = 0;
m.tm = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.vol = (0.1*((m.vol*9)+(((m.bass_att+m.mid_att)+m.treb_att)*0.333333)));
m.q1 = (0.1+(m.vol*0.3));
m.tic = (m.time-m.tin);
m.tin = m.time;
m.tb = (m.tb+(m.tic*m.bass_att));
m.q2 = (m.tb*0.9);
m.tm = (m.tm+(m.tic*m.mid_att));
m.q3 = (m.tm*0.9);
m.tt = (m.tt+(m.tic*m.treb_att));
m.q4 = (m.tt*0.9);
m.q1 = Math.min(m.q1, 1);
m.aq1 = 0.5;
m.aq2 = 0;
m.aq3 = 9.5;
m.aq4 = 0;
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
			scaling : 2.625,
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
			scaling : 1.0,
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
			rad : 0.39872,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 60.0,
			border_r : 1.0,
			num_inst : 1.0,
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
			tex_zoom : 1.50092,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.4,
			a2 : 1.0,
			r : 0.2,
			border_g : 1.0,
			rad : 0.29868,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 60.0,
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
			num_inst : 1.0,
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
			num_inst : 1.0,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '   vec2 P_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (uv - 0.5);\n' + '  P_3 = (tmpvar_4 + 0.5);\n' + '  tmpvar_2 = texture2D (sampler_main, P_3);\n' + '  ret_1.x = tmpvar_2.x;\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = ((tmpvar_4 * 0.9) + 0.5);\n' + '  tmpvar_5 = texture2D (sampler_main, P_6);\n' + '  ret_1.y = tmpvar_5.y;\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = ((tmpvar_4 * 1.15) + 0.5);\n' + '  tmpvar_7 = texture2D (sampler_main, P_8);\n' + '  ret_1.z = tmpvar_7.z;\n' + '  ret_1 = (ret_1 * 0.75);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9.w = 1.0;\n' + '  tmpvar_9.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_9;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 0.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = (1.0 - uv.x);\n' + '  tmpvar_4.y = uv.y;\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, tmpvar_4);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (1.0 - uv);\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '  ret_1 = (max (tmpvar_3, tmpvar_5).xyz + ((\n' + '    (tmpvar_6.xyz * scale1)\n' + '   + bias1) * 2.0));\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = -(uv);\n' + '  tmpvar_8 = texture2D (sampler_blur3, P_9);\n' + '  ret_1 = (ret_1 + ((\n' + '    (tmpvar_8.xyz * scale3)\n' + '   + bias3) * 0.5));\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_a = 0;\n' + 'vol = .1*(vol*9 + (bass_att+mid_att+treb_att)*.333333);\n' + 'q1 = .1 + vol*.3;\n' + 'tic = time-tin;\n' + 'tin = time;\n' + 'tb = tb + tic*bass_att;\n' + 'q2 = tb*.9;\n' + 'tm = tm + tic*mid_att;\n' + 'q3 = tm*.9;\n' + 'tt = tt + tic*treb_att;\n' + 'q4 = tt*.9;\n' + 'q1 = min(q1,1);\n' + 'aq1 = .5;\n' + 'aq2 = 0;\n' + 'aq3 = 9.5;\n' + 'aq4 = 0;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
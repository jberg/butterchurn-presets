define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 7.058,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 31.64,
		wave_scale : 1.0,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.005,
		b2x : 1.0,
		warp : 1.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : -0.385,
		mv_dy : -0.169,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.562,
		echo_zoom : 0.333,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.275,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.5,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.2,
		mv_l : 0.598,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 0.359,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.rate = 0;
m.tt = 0;
m.q4 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.ow = 0;
m.oldq4 = 0;
m.oldq6 = 0;
m.oldq8 = 0;
m.bv = 0;
m.bthresh2 = 0;
m.beat = 0;
m.beat2 = 0;
m.bthresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_a = 0;
m.decay = 0.97;
m.q7 = (0.00004*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps));
m.q6 = (m.oldq6+(0.0002*div(pow(((((((1+(0.1*m.bass))+(0.1*m.bass_att))+(1.2*m.treb))+(0.4*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq6 = m.q6;
m.q4 = (m.oldq4+(0.0002*div(pow(((((((1+(0.1*m.bass))+(0.1*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(1.2*m.mid))+(0.4*m.mid_att)), 6),m.fps)));
m.oldq4 = m.q4;
m.q8 = (m.oldq8+(0.0002*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.q8 = (m.oldq8+(0.0002*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = ifcond(above(m.q8, 10000), 0, m.q8);
m.ob_b = Math.max(0, ((Math.sin((m.q8*0.2542))*0.2)+0.1));
m.ob_r = Math.max(0, ((Math.sin((m.q8*0.985))*0.4)+0.2));
m.ob_g = Math.max(0, ((Math.sin((m.q8*0.8711))*0.3)+0.1));
m.ob_a = (Math.max(0, (0.3*(m.q7-0.2)))+0.1);
m.ib_r = (1-ifcond((m.ob_size-0.005), 0, 1));
m.ib_g = (m.ib_r*((0.21*0.2)*Math.sin((m.time*0.643))));
m.ib_b = (m.ib_r*((0.21*0.2)*Math.sin((m.time*0.853))));
m.ib_a = (0.2*m.q7);
m.echo_alpha = above(m.q7, 0.2);
m.echo_zoom = (1+(0.01*m.q7));
m.warp = 0;
m.rate = div(m.fps,(m.fps+2));
m.bv = ((m.bass*0.1)+(0.7*m.bv));
m.tt = (m.tt+(m.bv*0.05));
m.beat = above((m.bass*m.bass_att), m.bthresh);
m.bthresh = ((m.beat*15)+((1-m.beat)*(((m.bthresh-4.5)*m.rate)+4.5)));
m.beat2 = above(m.mid, m.bthresh2);
m.bthresh2 = ((m.beat2*15)+((1-m.beat2)*(((m.bthresh2-1.5)*m.rate)+1.5)));
m.warp = ((m.beat2*3)+((1-m.beat2)*m.ow));
m.ow = ((m.warp*m.rate)*m.rate);
m.tt = ifcond(m.beat, rand(32768), m.tt);
m.wave_x = -1;
m.dx = ((0.3*Math.sin((m.tt*0.12)))+(10*Math.sin((m.tt*0.015))));
m.dy = ((0.39*Math.sin((m.tt*0.21)))+(20*Math.sin((m.tt*0.041))));
m.rot = (1*Math.sin((m.tt*0.15)));
m.cx = ((Math.sin((m.tt*0.16))*0.5)+0.5);
m.cy = ((Math.cos((m.tt*0.46))*0.5)+0.5);
m.ib_r = ((Math.sin((m.tt*0.51))*0.5)+0.5);
m.ib_g = ((Math.sin((m.tt*0.71))*0.5)+0.5);
m.ib_b = ((Math.sin((m.tt*0.81))*0.5)+0.5);
m.ib_a = (1-pow(0.5, div(((m.mid_att+m.bass_att)+m.treb_att),3)));
m.monitor = (1-pow(0.5, ((m.mid_att+m.bass_att)+m.treb_att)));
		m.rkeys = ['dy','dx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = ((m.dx+(0.007*Math.sin((((m.y*2)-1)*m.meshx))))+(0.006*Math.sin(((((m.y*2)-1)*m.meshx)*1.3333))));
m.dy = ((m.dy+((Math.sin((m.q8*0.1745))*0.007)*Math.cos(((((m.x*2)-1)*m.meshx)*1.3333))))+((Math.sin((m.q8*0.1875))*0.006)*Math.cos(((((m.x*2)-1)*m.meshx)*1.666))));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.3,
			g : 1.0,
			scaling : 1.02796,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.3,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.q3 = 0;
m.t6 = 0;
m.cf = 0;
m.q4 = 0;
m.t7 = 0;
m.oldt2 = 0;
m.oldt3 = 0;
m.px = 0;
m.py = 0;
m.pz = 0;
m.shc = 0;
m.rf = 0;
m.u = 0;
m.v = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x2 = 0;
m.t2 = 0;
m.t3 = 0;
m.t1 = 300;
m.t2 = 0;
m.t3 = 0;
m.t4 = 3.14159265;
m.t5 = 1;
m.t6 = 10;
m.t7 = -10;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t7 = (0.5+((0.5*Math.sin(m.time))*m.t4));
m.t6 = div((m.t7+(m.t6*5)),6);
m.t2 = ((pow(((2*m.bass)+m.bass_att), 5)*0.00015111)+m.oldt2);
m.oldt2 = m.t2;
m.t3 = ((pow(((2*m.bass)+m.bass_att), 4)*0.00026213)+m.oldt3);
m.oldt3 = m.t3;
m.q1 = -Math.cos(Math.cos(m.t2));
m.q2 = Math.cos(-m.t3);
m.q3 = Math.sin(Math.cos(-m.t2));
m.q4 = Math.sin(m.t3);
		return m;
	},
		'point_eqs' : function(m) {
m.u = ((m.sample*2)-1);
m.rf = 512;
m.shc = (1-(m.u*m.u));
m.cf = below(m.sample, 0.45);
m.u = ifcond(m.cf, (sqrt(m.shc)*(div(-m.u,2)+0.5)), ifcond(below(m.sample, 0.55), (((m.sample-0.45)*15)+0.1), (pow(m.shc, 0.7)*1.5)));
m.u = (m.u+div(m.v,8));
m.px = ((div((Math.cos(((m.sample*m.t4)*m.rf))*m.u),2)+Math.cos(m.t6))+1.5);
m.py = ((m.sample*2)-1);
m.pz = (div((Math.sin(((m.sample*m.t4)*m.rf))*m.u),2)+2.9);
m.y1 = ((m.py*m.q1)+(m.pz*m.q3));
m.z1 = ((m.pz*m.q1)-(m.py*m.q3));
m.x2 = ((m.px*m.q2)+(m.z1*m.q4));
m.z2 = (((m.z1*m.q2)-(m.px*m.q4))+5);
m.x = div(m.x2,m.z2);
m.y = div(m.y1,m.z2);
m.x = ((m.x*0.5)+0.5);
m.y = ((0.5*m.y)+0.5);
m.r = (0.5+(Math.sin((m.sample*195))*0.5));
m.g = ((0.5*Math.sin((m.time*0.145)))+(0.499*(0.5+(Math.sin((m.x*95))*0.5))));
m.b = ((0.5*Math.sin((m.time*0.1876)))+(0.495*(0.5+(Math.sin((m.y*208))*0.5))));
		return m;
	},
		'init_eqs_str' : ('t1 = 300;\n' + 't2 = 0;\n' + 't3 = 0;\n' + 't4 = 3.14159265;\n' + 't5 = 1;\n' + 't6 = 10;\n' + 't7 = -10;'),
		'frame_eqs_str' : ('t7 = 0.5+0.5*sin(time)*t4;\n' + 't6 = (t7+t6*5)/6;\n' + 't2 = pow(2*bass+bass_att,5)*0.00015111 +oldt2;\n' + 'oldt2 = t2;\n' + 't3 = pow(2*bass+bass_att,4)*0.00026213 + oldt3;\n' + 'oldt3 = t3;\n' + 'q1 = -cos(cos(t2));\n' + 'q2 = cos(-t3);\n' + 'q3 = sin(cos(-t2));\n' + 'q4 = sin(t3);'),
		'point_eqs_str' : ('u = sample*2-1;\n' + 'rf = 512;\n' + 'shc = 1-u*u;\n' + 'cf = below(sample,0.45);\n' + 'u=if(cf,sqrt(shc)*(-u/2+0.5), if(below(sample,0.55), (sample-0.45)*15+0.1, pow(shc,0.7)*1.5));\n' + 'u = u + v/8;\n' + 'px = cos(sample*t4*rf)*u/2+cos(t6)+1.5;\n' + 'py = sample*2-1;\n' + 'pz = sin(sample*t4*rf)*u/2+2.9;\n' + 'y1 = py*q1 + pz*q3;\n' + 'z1 = pz*q1 - py*q3;\n' + 'x2 = px*q2 + z1*q4;\n' + 'z2 = z1*q2 - px*q4+5;\n' + 'x = x2/z2;\n' + 'y = y1/z2;\n' + 'x = x*0.5 + 0.5;\n' + 'y = 0.5*y + 0.5;\n' + 'r = 0.5+sin(sample*195)*0.5;\n' + 'g = 0.5*sin(time*0.145)+0.499*(0.5+sin(x*95)*0.5);\n' + 'b = 0.5*sin(time*0.1876)+0.495*(0.5+sin(y*208)*0.5);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.4,
			g : 0.0,
			scaling : 1.02796,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.q3 = 0;
m.t6 = 0;
m.cf = 0;
m.q4 = 0;
m.t7 = 0;
m.oldt2 = 0;
m.oldt3 = 0;
m.px = 0;
m.py = 0;
m.pz = 0;
m.progress = 0;
m.shc = 0;
m.rf = 0;
m.u = 0;
m.v = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x2 = 0;
m.t2 = 0;
m.t3 = 0;
m.t1 = 300;
m.t2 = 0;
m.t3 = 0;
m.t4 = 3.14159265;
m.t5 = 1;
m.t6 = 10;
m.t7 = -10;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t7 = (0.5+((0.5*Math.sin((m.time*0.135)))*m.t4));
m.t6 = div((m.t7+(m.t6*5)),6);
m.t2 = (((pow((m.bass+m.bass_att), 6)*0.00005)+0.022)+m.oldt2);
m.oldt2 = ifcond(above(m.t2, 10000), 0, m.t2);
m.t3 = (((pow((m.bass+m.bass_att), 7)*0.00005)+0.0278)+m.oldt3);
m.oldt3 = m.t3;
m.q1 = -Math.cos(Math.cos(m.t2));
m.q2 = -Math.cos(m.t3);
m.q3 = Math.sin(Math.cos(m.t2));
m.q4 = Math.sin(m.t3);
		return m;
	},
		'point_eqs' : function(m) {
m.u = ((m.sample*2)-1);
m.rf = 1000;
m.shc = (1-(m.u*m.u));
m.cf = below(m.sample, 0.45);
m.u = ifcond(m.cf, (sqrt(m.shc)*(div(-m.u,2)+0.5)), ifcond(below(m.sample, 0.55), (((m.sample-0.45)*15)+0.1), (pow(m.shc, 0.7)*1.5)));
m.u = (m.u+div(m.v,8));
m.px = ((div((Math.cos(((m.sample*m.t4)*m.rf))*m.u),2)+Math.cos(m.t6))+1.5);
m.py = ((m.sample*2)-1);
m.pz = (div((Math.sin(((m.sample*m.t4)*m.rf))*m.u),2)+2.9);
m.y1 = ((m.py*m.q1)+(m.pz*m.q3));
m.z1 = ((m.pz*m.q1)-(m.py*m.q3));
m.x2 = ((m.px*m.q2)+(m.z1*m.q4));
m.z2 = (((m.z1*m.q2)-(m.px*m.q4))+5);
m.x = div(m.x2,m.z2);
m.y = div(m.y1,m.z2);
m.x = ((m.x*0.5)+0.5);
m.y = ((0.5*m.y)+0.5);
m.r = Math.abs((m.sample-(m.sample*m.progress)));
m.g = div(m.sample,m.y);
m.b = (m.x2*m.sample);
		return m;
	},
		'init_eqs_str' : ('t1 = 300;\n' + 't2 = 0;\n' + 't3 = 0;\n' + 't4 = 3.14159265;\n' + 't5 = 1;\n' + 't6 = 10;\n' + 't7 = -10;'),
		'frame_eqs_str' : ('t7 = 0.5+0.5*sin(time*0.135)*t4;\n' + 't6 = (t7+t6*5)/6;\n' + 't2 = pow(bass+bass_att,6)*0.00005 + 0.022+ oldt2;\n' + 'oldt2 = if(above(t2,10000),0,t2);\n' + 't3 = pow(bass+bass_att,7)*0.00005 + 0.0278 +oldt3;\n' + 'oldt3 = t3;\n' + 'q1 = -cos(cos(t2));\n' + 'q2 = -cos(t3);\n' + 'q3 = sin(cos(t2));\n' + 'q4 = sin(t3);'),
		'point_eqs_str' : ('u = sample*2-1;\n' + 'rf = 1000;\n' + 'shc = 1-u*u;\n' + 'cf = below(sample,0.45);\n' + 'u=if(cf,sqrt(shc)*(-u/2+0.5), if(below(sample,0.55), (sample-0.45)*15+0.1, pow(shc,0.7)*1.5));\n' + 'u = u + v/8;\n' + 'px = cos(sample*t4*rf)*u/2+cos(t6)+1.5;\n' + 'py = sample*2-1;\n' + 'pz = sin(sample*t4*rf)*u/2+2.9;\n' + 'y1 = py*q1 + pz*q3;\n' + 'z1 = pz*q1 - py*q3;\n' + 'x2 = px*q2 + z1*q4;\n' + 'z2 = z1*q2 - px*q4+5;\n' + 'x = x2/z2;\n' + 'y = y1/z2;\n' + 'x = x*0.5 + 0.5;\n' + 'y = 0.5*y + 0.5;\n' + 'r = abs(sample-(sample*progress));\n' + 'g = sample/y;\n' + 'b = x2*sample;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.4,
			g : 0.4,
			scaling : 1.02796,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.8,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.q3 = 0;
m.t6 = 0;
m.cf = 0;
m.q4 = 0;
m.t7 = 0;
m.oldt2 = 0;
m.oldt3 = 0;
m.px = 0;
m.py = 0;
m.pz = 0;
m.shc = 0;
m.rf = 0;
m.u = 0;
m.v = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x2 = 0;
m.t2 = 0;
m.t3 = 0;
m.t1 = 300;
m.t2 = 0;
m.t3 = 0;
m.t4 = 3.14159265;
m.t5 = 1;
m.t6 = 10;
m.t7 = -10;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t7 = (0.5+((0.5*Math.sin((m.time*0.896)))*m.t4));
m.t6 = div((m.t7+(m.t6*5)),6);
m.t2 = (((pow(((1.13*m.bass)+m.bass_att), 5)*0.0001)+0.0017)+m.oldt2);
m.oldt2 = m.t2;
m.t2 = (m.t2+Math.sin((m.time*0.01963)));
m.t3 = (((pow((m.bass+(1.14*m.bass_att)), 5)*0.0001)+0.00121)+m.oldt3);
m.oldt3 = m.t3;
m.t3 = (m.t3+Math.sin((m.time*0.06527)));
m.q1 = -Math.cos(Math.cos(m.t2));
m.q2 = Math.cos(m.t3);
m.q3 = Math.sin(Math.cos(m.t2));
m.q4 = Math.sin(m.t3);
		return m;
	},
		'point_eqs' : function(m) {
m.u = ((m.sample*2)-1);
m.rf = 1000;
m.shc = (1-(m.u*m.u));
m.cf = below(m.sample, 0.45);
m.u = ifcond(m.cf, (sqrt(m.shc)*(div(-m.u,2)+0.5)), ifcond(below(m.sample, 0.55), (((m.sample-0.45)*15)+0.1), (pow(m.shc, 0.7)*1.5)));
m.u = (m.u+div(m.v,8));
m.px = ((div((Math.cos(((m.sample*m.t4)*m.rf))*m.u),2)+Math.cos(m.t6))+1.5);
m.py = ((m.sample*2)-1);
m.pz = (div((Math.sin(((m.sample*m.t4)*m.rf))*m.u),2)+2.9);
m.y1 = ((m.py*m.q1)+(m.pz*m.q3));
m.z1 = ((m.pz*m.q1)-(m.py*m.q3));
m.x2 = ((m.px*m.q2)+(m.z1*m.q4));
m.z2 = (((m.z1*m.q2)-(m.px*m.q4))+5);
m.x = div(m.x2,m.z2);
m.y = div(m.y1,m.z2);
m.x = ((m.x*0.5)+0.5);
m.y = ((0.5*m.y)+0.5);
m.r = m.sample;
m.g = (m.x*m.sample);
m.b = div((m.y*m.x),m.sample);
		return m;
	},
		'init_eqs_str' : ('t1 = 300;\n' + 't2 = 0;\n' + 't3 = 0;\n' + 't4 = 3.14159265;\n' + 't5 = 1;\n' + 't6 = 10;\n' + 't7 = -10;'),
		'frame_eqs_str' : ('t7 = 0.5+0.5*sin(time*0.896)*t4;\n' + 't6 = (t7+t6*5)/6;\n' + 't2 = pow(1.13*bass+bass_att,5)*0.0001 +0.0017+oldt2;\n' + 'oldt2 = t2;\n' + 't2 = t2 + sin(time*0.01963);\n' + 't3 = pow(bass+1.14*bass_att,5)*0.0001 + 0.00121 +oldt3;\n' + 'oldt3 = t3;\n' + 't3 = t3 + sin(time*0.06527);\n' + 'q1 = -cos(cos(t2));\n' + 'q2 = cos(t3);\n' + 'q3 = sin(cos(t2));\n' + 'q4 = sin(t3);'),
		'point_eqs_str' : ('u = sample*2-1;\n' + 'rf = 1000;\n' + 'shc = 1-u*u;\n' + 'cf = below(sample,0.45);\n' + 'u=if(cf,sqrt(shc)*(-u/2+0.5), if(below(sample,0.55), (sample-0.45)*15+0.1, pow(shc,0.7)*1.5));\n' + 'u = u + v/8;\n' + 'px = cos(sample*t4*rf)*u/2+cos(t6)+1.5;\n' + 'py = sample*2-1;\n' + 'pz = sin(sample*t4*rf)*u/2+2.9;\n' + 'y1 = py*q1 + pz*q3;\n' + 'z1 = pz*q1 - py*q3;\n' + 'x2 = px*q2 + z1*q4;\n' + 'z2 = z1*q2 - px*q4+5;\n' + 'x = x2/z2;\n' + 'y = y1/z2;\n' + 'x = x*0.5 + 0.5;\n' + 'y = 0.5*y + 0.5;\n' + 'r = sample;\n' + 'g = x*sample;\n' + 'b = y*x/sample;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.7,
			g : 0.5,
			scaling : 1.02796,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.q3 = 0;
m.t6 = 0;
m.cf = 0;
m.q4 = 0;
m.t7 = 0;
m.q8 = 0;
m.px = 0;
m.py = 0;
m.pz = 0;
m.shc = 0;
m.rf = 0;
m.u = 0;
m.v = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x2 = 0;
m.t2 = 0;
m.t3 = 0;
m.t1 = 300;
m.t2 = 0;
m.t3 = 0;
m.t4 = 3.14159265;
m.t5 = 1;
m.t6 = 10;
m.t7 = -10;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t7 = (0.5+((0.5*Math.sin(m.time))*m.t4));
m.t6 = div((m.t7+(m.t6*5)),6);
m.t2 = (m.q8*0.7825);
m.t3 = (m.q8*0.6242);
m.q1 = -Math.cos(Math.cos(m.t2));
m.q2 = Math.cos(m.t3);
m.q3 = Math.sin(Math.cos(m.t2));
m.q4 = Math.sin(m.t3);
		return m;
	},
		'point_eqs' : function(m) {
m.u = ((m.sample*2)-1);
m.rf = 1000;
m.shc = (1-(m.u*m.u));
m.cf = below(m.sample, 0.45);
m.u = ifcond(m.cf, (sqrt(m.shc)*(div(-m.u,2)+0.5)), ifcond(below(m.sample, 0.55), (((m.sample-0.45)*15)+0.1), (pow(m.shc, 0.7)*1.5)));
m.u = (m.u+div(m.v,8));
m.px = ((div((Math.cos(((m.sample*m.t4)*m.rf))*m.u),2)+Math.cos(m.t6))+1.5);
m.py = ((m.sample*2)-1);
m.pz = (div((Math.sin(((m.sample*m.t4)*m.rf))*m.u),2)+2.9);
m.y1 = ((m.py*m.q1)+(m.pz*m.q3));
m.z1 = ((m.pz*m.q1)-(m.py*m.q3));
m.x2 = ((m.px*m.q2)+(m.z1*m.q4));
m.z2 = (((m.z1*m.q2)-(m.px*m.q4))+5);
m.x = div(m.x2,m.z2);
m.y = div(m.y1,m.z2);
m.x = ((m.x*0.5)+0.5);
m.y = ((0.5*m.y)+0.5);
m.r = ((0.5*div(m.y,m.x))+(0.499*Math.sin((m.time*0.564))));
m.b = ((0.5*(m.x*m.y))+(0.499*Math.sin((m.time*0.457))));
m.g = ((0.5*(m.x*m.x))+(0.499*Math.sin((m.time*0.134))));
		return m;
	},
		'init_eqs_str' : ('t1 = 300;\n' + 't2 = 0;\n' + 't3 = 0;\n' + 't4 = 3.14159265;\n' + 't5 = 1;\n' + 't6 = 10;\n' + 't7 = -10;'),
		'frame_eqs_str' : ('t7 = 0.5+0.5*sin(time)*t4;\n' + 't6 = (t7+t6*5)/6;\n' + 't2 = q8*0.7825;\n' + 't3 = q8*0.6242;\n' + 'q1 = -cos(cos(t2));\n' + 'q2 = cos(t3);\n' + 'q3 = sin(cos(t2));\n' + 'q4 = sin(t3);'),
		'point_eqs_str' : ('u = sample*2-1;\n' + 'rf = 1000;\n' + 'shc = 1-u*u;\n' + 'cf = below(sample,0.45);\n' + 'u=if(cf,sqrt(shc)*(-u/2+0.5), if(below(sample,0.55), (sample-0.45)*15+0.1, pow(shc,0.7)*1.5));\n' + 'u = u + v/8;\n' + 'px = cos(sample*t4*rf)*u/2+cos(t6)+1.5;\n' + 'py = sample*2-1;\n' + 'pz = sin(sample*t4*rf)*u/2+2.9;\n' + 'y1 = py*q1 + pz*q3;\n' + 'z1 = pz*q1 - py*q3;\n' + 'x2 = px*q2 + z1*q4;\n' + 'z2 = z1*q2 - px*q4+5;\n' + 'x = x2/z2;\n' + 'y = y1/z2;\n' + 'x = x*0.5 + 0.5;\n' + 'y = 0.5*y + 0.5;\n' + 'r = 0.5*(y/x) + 0.499*sin(time*0.564);\n' + 'b = 0.5*(x*y) + 0.499*sin(time*0.457);\n' + 'g = 0.5*(x*x) + 0.499*sin(time*0.134);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 5.61717,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.69953,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.1,
			r : 1.0,
			border_g : 1.0,
			rad : 0.4963,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = m.q8;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_Ang = q8;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 5.61717,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.71994,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.1,
			r : 1.0,
			border_g : 1.0,
			rad : 0.4963,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = (m.q8-0.02);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_Ang = q8-0.02;'),

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
			tex_zoom : 1.7406,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.1,
			r : 1.0,
			border_g : 1.0,
			rad : 0.4963,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = (m.q8-0.04);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_Ang = q8-0.04;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.33004,
			x : 0.12,
			y : 0.2,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.4*Math.sin(((0.105*m.time)+(0.3*m.q4)))));
m.y = (0.5+(0.4*Math.sin(((0.1267*m.time)+(0.323*m.q4)))));
m.ang = (3.1415+(3.1415*Math.sin((m.time*0.2654))));
m.rad = (0.5+(0.5*Math.sin((m.q4*0.785))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5+ 0.4*sin(0.105*time+0.3*q4);\n' + 'y = 0.5+ 0.4*sin(0.1267*time+0.323*q4);\n' + 'ang = 3.1415+3.1415*sin(time*0.2654);\n' + 'rad = 0.5+0.5*sin(q4*0.785);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 v_1;\n' + '   vec3 ret_2;\n' + '  v_1 = (normalize((uv - 0.5)) * texsize.zw);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv - (v_1 * 2.5));\n' + '  tmpvar_4 = texture2D (sampler_main, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (v_1 * 5.5));\n' + '  tmpvar_6 = texture2D (sampler_main, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv - (v_1 * 9.0));\n' + '  tmpvar_8 = texture2D (sampler_main, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (v_1 * 13.0));\n' + '  tmpvar_10 = texture2D (sampler_main, P_11);\n' + '  ret_2 = (0.2 * ((tmpvar_3.xyz + tmpvar_4.xyz) + (\n' + '    (tmpvar_6.xyz + tmpvar_8.xyz)\n' + '   + tmpvar_10.xyz)));\n' + '  ret_2 = (ret_2 * 0.98);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12.w = 1.0;\n' + '  tmpvar_12.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_12;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'wave_a=0;\n' + 'decay = 0.97;\n' + 'q7 = 0.00004*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'q6 =  oldq6+ 0.0002*(pow(1+0.1*bass+0.1*bass_att+1.2*treb+0.4*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq6 = q6;\n' + 'q4 =  oldq4+ 0.0002*(pow(1+0.1*bass+0.1*bass_att+0.1*treb+0.1*treb_att+1.2*mid+0.4*mid_att,6)/fps);\n' + 'oldq4 = q4;\n' + 'q8 =  oldq8+ 0.0002*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 = q8;\n' + 'q8 =  oldq8+ 0.0002*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 = if(above(q8,10000),0,q8);\n' + 'ob_b = max(0,sin(q8*0.2542)*0.2 +0.1);\n' + 'ob_r = max(0,sin(q8*0.985)*0.4 + 0.2);\n' + 'ob_g = max(0,sin(q8*0.8711)*0.3 + 0.1);\n' + 'ob_a =max(0,0.3*(q7-0.2))+0.1;\n' + 'ib_r = 1-if(ob_size-0.005,0,1);\n' + 'ib_g = ib_r*(0.21*0.2*sin(time*0.643));\n' + 'ib_b = ib_r*(0.21*0.2*sin(time*0.853));\n' + 'ib_a =0.2*q7;\n' + 'echo_alpha = above(q7,0.2);\n' + 'echo_zoom = 1 + 0.01*q7;\n' + 'warp = 0;\n' + 'rate = fps/(fps+2);\n' + 'bv = bass*.1+.7*bv;\n' + 'tt=tt+bv*0.05;\n' + 'beat = above(bass*bass_att,bthresh);\n' + 'bthresh = beat*15 + (1-beat)*((bthresh - 4.5)*rate + 4.5);\n' + 'beat2 = above(mid,bthresh2);\n' + 'bthresh2 = beat2*15 + (1-beat2)*((bthresh2 - 1.5)*rate + 1.5);\n' + 'warp = beat2*3 + (1-beat2)*ow;\n' + 'ow = warp*rate*rate;\n' + 'tt = if(beat,rand(32768),tt);\n' + 'wave_x =-1;\n' + 'dx = .3*sin(tt*.12)+10*sin(tt*.015);\n' + 'dy = .39*sin(tt*.21)+20*sin(tt*.041);\n' + 'rot = 1*sin(tt*.15);\n' + 'cx = sin(tt*.16)*.5+.5;\n' + 'cy = cos(tt*.46)*.5+.5;\n' + 'ib_r = sin(tt*.51)*.5+.5;\n' + 'ib_g = sin(tt*.71)*.5+.5;\n' + 'ib_b = sin(tt*.81)*.5+.5;\n' + 'ib_a = 1-pow(.5,(mid_att + bass_att + treb_att)/3);\n' + 'monitor = 1-pow(.5,mid_att + bass_att + treb_att);'),
	'pixel_eqs_str' : ('dx=dx+0.007*sin((y*2-1)*meshx)+ 0.006*sin((y*2-1)*meshx*1.3333);\n' + 'dy=dy+sin(q8*0.1745)*0.007*cos((x*2-1)*meshx*1.3333)+ sin(q8*0.1875)*0.006*cos((x*2-1)*meshx*1.666);'),
};

return pmap;
});
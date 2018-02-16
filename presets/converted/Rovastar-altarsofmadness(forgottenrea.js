define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.0,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.005,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
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
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.9,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 4.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q4 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.oldq4 = 0;
m.oldq6 = 0;
m.oldq8 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_a = 0;
m.decay = 0.976;
m.decay = 0.99;
m.q8 = (m.oldq8+(0.0002*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.q7 = (0.00004*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps));
m.q6 = (m.oldq6+(0.0002*div(pow(((((((1+(0.1*m.bass))+(0.1*m.bass_att))+(1.2*m.treb))+(0.4*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq6 = m.q6;
m.q4 = (m.oldq4+(0.0002*div(pow(((((((1+(0.1*m.bass))+(0.1*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(1.2*m.mid))+(0.4*m.mid_att)), 6),m.fps)));
m.oldq4 = m.q4;
m.q8 = (m.oldq8+(0.0002*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.q8 = (m.oldq8+(0.0002*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.ob_size = Math.min((Math.max(0, (m.q7-0.3))+0.005), 0.9);
m.ob_b = Math.max(0, ((Math.sin((m.q8*0.2542))*0.2)+0.1));
m.ob_r = Math.max(0, ((Math.sin((m.q8*0.985))*0.4)+0.2));
m.ob_g = Math.max(0, ((Math.sin((m.q8*0.8711))*0.3)+0.1));
m.ob_a = (Math.max(0, (0.3*(m.q7-0.2)))+0.1);
m.ib_r = (1-ifcond((m.ob_size-0.005), 0, 1));
m.ib_g = (m.ib_r*((0.21*0.2)*Math.sin((m.time*0.643))));
m.ib_b = (m.ib_r*((0.21*0.2)*Math.sin((m.time*0.853))));
m.ib_a = 1;
m.monitor = m.ob_a;
m.monitor = m.q6;
		m.rkeys = ['dy','dx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = ((m.dx+(0.008*Math.sin((((m.y*2)-1)*m.meshx))))+(0.008*Math.sin(((((m.y*2)-1)*m.meshx)*1.3333))));
m.dy = ((m.dy+(0.008*Math.cos(((((m.x*2)-1)*m.meshx)*1.3333))))+(0.008*Math.cos((((m.x*2)-1)*m.meshx))));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.463735,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.fvar = 0;
m.rotx = 0;
m.t5 = 0;
m.roty = 0;
m.rotz = 0;
m.t8 = 0;
m.tvar = 0;
m.svar = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.nsample = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.x2 = 0;
m.y3 = 0;
m.z4 = 0;
m.x3 = 0;
m.y4 = 0;
m.x4 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t8 = div(3.14159265,2);
m.t5 = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rotx = (m.rotx+m.bass);
m.roty = (m.roty+m.mid);
m.rotz = (m.rotz+m.treb);
m.t1 = div((m.t8*m.rotx),180);
m.t2 = div((m.t8*m.roty),180);
m.t3 = div((m.t8*m.rotz),180);
m.t4 = Math.sin((m.bass+(0.86*m.t8)));
m.t5 = (10+(8*Math.cos((m.time+(0.56*m.t8)))));
		return m;
	},
		'point_eqs' : function(m) {
m.fvar = (m.sample*512);
m.svar = (m.fvar*128);
m.tvar = bitand(0,m.svar);
m.nsample = (m.tvar*4.5);
m.x1 = (-2.5+(1.5*Math.sin(m.sample)));
m.y1 = (-1*Math.cos((m.t8*m.nsample)));
m.z1 = (-1*Math.sin((m.t8*m.nsample)));
m.y2 = ((m.y1*Math.cos(m.t1))-(m.z1*Math.sin(m.t1)));
m.z2 = ((m.y1*Math.sin(m.t1))+(m.z1*Math.cos(m.t1)));
m.x2 = ((m.z2*Math.sin(m.t2))+(m.x1*Math.cos(m.t2)));
m.z3 = ((m.z2*Math.cos(m.t2))-(m.x1*Math.sin(m.t2)));
m.x3 = ((m.x2*Math.cos(m.t3))-(m.y2*Math.sin(m.t3)));
m.y3 = ((m.y2*Math.cos(m.t3))+(m.x2*Math.sin(m.t3)));
m.x4 = m.x3;
m.y4 = m.y3;
m.z4 = (m.z3+5);
m.x = (0.5+(0.5*div(m.x4,(1+(m.z4*0.5)))));
m.y = (0.5+(0.5*div(m.y4,(1+(m.z4*0.5)))));
m.a = (-0.9+Math.sin((m.nsample+m.time)));
m.a = ifcond(below(m.a, 0), 0, m.a);
m.a = 1;
m.r = ((Math.sin(Math.abs((m.x2*Math.sin(m.time))))*0.5)+0.5);
m.b = ((Math.sin(Math.abs((m.y3+Math.sin((0.8765*m.time)))))*0.5)+0.5);
m.g = (m.x2*m.z2);
		return m;
	},
		'init_eqs_str' : ('t8=3.14159265/2;\n' + 't5 = 1;'),
		'frame_eqs_str' : ('rotx = rotx+bass;\n' + 'roty = roty+mid;\n' + 'rotz = rotz+treb;\n' + 't1= t8*rotx/180;\n' + 't2 = t8*roty/180;\n' + 't3 = t8*rotz/180;\n' + 't4 = sin(bass+0.86*t8);\n' + 't5 = 10+8*cos(time+0.56*t8);'),
		'point_eqs_str' : ('fvar = sample*512;\n' + 'svar = fvar*128;\n' + 'tvar = 0&svar;\n' + 'nsample = tvar*4.5;\n' + 'x1 = -2.5+(1.5)*sin(sample);\n' + 'y1 = (-1)*cos(t8*nsample);\n' + 'z1 = (-1)*sin(t8*nsample);\n' + 'y2 = y1*cos(t1)-z1*sin(t1);\n' + 'z2 = y1*sin(t1)+z1*cos(t1);\n' + 'x2 = z2*sin(t2)+x1*cos(t2);\n' + 'z3 = z2*cos(t2)-x1*sin(t2);\n' + 'x3 = x2*cos(t3)-y2*sin(t3);\n' + 'y3 = y2*cos(t3)+x2*sin(t3);\n' + 'x4 = x3;\n' + 'y4 = y3;\n' + 'z4 = z3+5;\n' + 'x=0.5+0.5*(x4/(1+z4*0.5));\n' + 'y=0.5+0.5*(y4/(1+z4*0.5));\n' + 'a = -.9+sin(nsample+time);\n' + 'a = if(below(a,0),0,a);\n' + 'a=1;\n' + 'r =sin(abs(x2*sin(time)))*0.5 + 0.5;\n' + 'b = sin(abs(y3+sin(0.8765*time)))*0.5 + 0.5;\n' + 'g = x2*z2;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.463735,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.fvar = 0;
m.rotx = 0;
m.t5 = 0;
m.roty = 0;
m.rotz = 0;
m.t8 = 0;
m.tvar = 0;
m.svar = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.nsample = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.x2 = 0;
m.y3 = 0;
m.z4 = 0;
m.x3 = 0;
m.y4 = 0;
m.x4 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t8 = 3.14159265;
m.t5 = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rotx = (m.rotx+m.bass);
m.roty = (m.roty+m.mid);
m.rotz = (m.rotz+m.treb);
m.t1 = div((m.t8*m.rotx),180);
m.t2 = div((m.t8*m.roty),180);
m.t3 = div((m.t8*m.rotz),180);
m.t4 = (3*Math.sin((m.time+(0.776*m.t8))));
m.t5 = (10+(8*Math.cos((m.time+(0.56*m.t8)))));
		return m;
	},
		'point_eqs' : function(m) {
m.fvar = (m.sample*512);
m.svar = (m.fvar*128);
m.tvar = bitand(0,m.svar);
m.nsample = (m.tvar*4.5);
m.x1 = (-0.75+(1.5*Math.sin(m.sample)));
m.y1 = (1*Math.cos((m.t8*m.nsample)));
m.z1 = (1*Math.sin((m.t8*m.nsample)));
m.y2 = ((m.y1*Math.cos(m.t1))-(m.z1*Math.sin(m.t1)));
m.z2 = ((m.y1*Math.sin(m.t1))+(m.z1*Math.cos(m.t1)));
m.x2 = ((m.z2*Math.sin(m.t2))+(m.x1*Math.cos(m.t2)));
m.z3 = ((m.z2*Math.cos(m.t2))-(m.x1*Math.sin(m.t2)));
m.x3 = ((m.x2*Math.cos(m.t3))-(m.y2*Math.sin(m.t3)));
m.y3 = ((m.y2*Math.cos(m.t3))+(m.x2*Math.sin(m.t3)));
m.x4 = m.x3;
m.y4 = m.y3;
m.z4 = (m.z3+5);
m.x = (0.5+(0.75*div(m.x4,(1+(m.z4*0.5)))));
m.y = (0.5+(0.75*div(m.y4,(1+(m.z4*0.5)))));
m.a = (-0.9+Math.sin((m.nsample+m.time)));
m.a = ifcond(below(m.a, 0), 0, m.a);
m.a = 1;
m.r = (m.y2*m.z2);
m.b = (m.z3+m.y3);
m.g = div(m.z3,m.x2);
		return m;
	},
		'init_eqs_str' : ('t8=3.14159265;\n' + 't5 = 1;'),
		'frame_eqs_str' : ('rotx = rotx+bass;\n' + 'roty = roty+mid;\n' + 'rotz = rotz+treb;\n' + 't1= t8*rotx/180;\n' + 't2 = t8*roty/180;\n' + 't3 = t8*rotz/180;\n' + 't4 = 3*sin(time+0.776*t8);\n' + 't5 = 10+8*cos(time+0.56*t8);'),
		'point_eqs_str' : ('fvar = sample*512;\n' + 'svar = fvar*128;\n' + 'tvar = 0&svar;\n' + 'nsample = tvar*4.5;\n' + 'x1 = -.75+(1.5)*sin(sample);\n' + 'y1 = (1)*cos(t8*nsample);\n' + 'z1 = (1)*sin(t8*nsample);\n' + 'y2 = y1*cos(t1)-z1*sin(t1);\n' + 'z2 = y1*sin(t1)+z1*cos(t1);\n' + 'x2 = z2*sin(t2)+x1*cos(t2);\n' + 'z3 = z2*cos(t2)-x1*sin(t2);\n' + 'x3 = x2*cos(t3)-y2*sin(t3);\n' + 'y3 = y2*cos(t3)+x2*sin(t3);\n' + 'x4 = x3;\n' + 'y4 = y3;\n' + 'z4 = z3+5;\n' + 'x=0.5+0.75*(x4/(1+z4*0.5));\n' + 'y=0.5+0.75*(y4/(1+z4*0.5));\n' + 'a = -.9+sin(nsample+time);\n' + 'a = if(below(a,0),0,a);\n' + 'a=1;\n' + 'r = y2*z2;\n' + 'b = z3+y3;\n' + 'g = z3/x2;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.463735,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.fvar = 0;
m.rotx = 0;
m.t5 = 0;
m.roty = 0;
m.rotz = 0;
m.t8 = 0;
m.tvar = 0;
m.svar = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.nsample = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.x2 = 0;
m.y3 = 0;
m.z4 = 0;
m.x3 = 0;
m.y4 = 0;
m.x4 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t8 = (3.14159265*1.56);
m.t5 = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rotx = (m.rotx+m.bass);
m.roty = (m.roty+m.mid);
m.rotz = (m.rotz+m.treb);
m.t1 = div((m.t8*m.rotx),180);
m.t2 = div((m.t8*m.roty),180);
m.t3 = div((m.t8*m.rotz),180);
m.t4 = (12+(13*Math.sin((m.time+(2.46*m.t8)))));
m.t5 = (2+(8*Math.cos((m.time+(1.66*m.t8)))));
m.r = 1;
m.b = 0;
m.g = 0;
		return m;
	},
		'point_eqs' : function(m) {
m.fvar = (m.sample*512);
m.svar = (m.fvar*128);
m.tvar = bitand(0,m.svar);
m.nsample = (m.tvar*4.5);
m.x1 = (-0.5+(2.5*Math.sin(m.sample)));
m.y1 = (1*Math.cos((m.t8*m.nsample)));
m.z1 = (1*Math.sin((m.t8*m.nsample)));
m.y2 = ((m.y1*Math.cos(m.t1))-(m.z1*Math.sin(m.t1)));
m.z2 = ((m.y1*Math.sin(m.t1))+(m.z1*Math.cos(m.t1)));
m.x2 = ((m.z2*Math.sin(m.t2))+(m.x1*Math.cos(m.t2)));
m.z3 = ((m.z2*Math.cos(m.t2))-(m.x1*Math.sin(m.t2)));
m.x3 = ((m.x2*Math.cos(m.t3))-(m.y2*Math.sin(m.t3)));
m.y3 = ((m.y2*Math.cos(m.t3))+(m.x2*Math.sin(m.t3)));
m.x4 = m.x3;
m.y4 = m.y3;
m.z4 = (m.z3+5);
m.x = (0.5-(1*div(m.x4,(1+(m.z4*0.5)))));
m.y = (0.5-(1*div(m.y4,(1+(m.z4*0.5)))));
m.a = (-0.9+Math.sin((m.nsample+m.time)));
m.a = ifcond(below(m.a, 0), 0, m.a);
m.a = 1;
m.g = m.y2;
m.b = m.x2;
m.r = (m.z2+m.z3);
		return m;
	},
		'init_eqs_str' : ('t8=3.14159265*1.56;\n' + 't5 = 1;'),
		'frame_eqs_str' : ('rotx = rotx+bass;\n' + 'roty = roty+mid;\n' + 'rotz = rotz+treb;\n' + 't1= t8*rotx/180;\n' + 't2 = t8*roty/180;\n' + 't3 = t8*rotz/180;\n' + 't4 = 12+13*sin(time+2.46*t8);\n' + 't5 = 2+8*cos(time+1.66*t8);\n' + 'r = 1;\n' + 'b = 0;\n' + 'g=0;'),
		'point_eqs_str' : ('fvar = sample*512;\n' + 'svar = fvar*128;\n' + 'tvar = 0&svar;\n' + 'nsample = tvar*4.5;\n' + 'x1 = -.5+(2.5)*sin(sample);\n' + 'y1 = (1)*cos(t8*nsample);\n' + 'z1 = (1)*sin(t8*nsample);\n' + 'y2 = y1*cos(t1)-z1*sin(t1);\n' + 'z2 = y1*sin(t1)+z1*cos(t1);\n' + 'x2 = z2*sin(t2)+x1*cos(t2);\n' + 'z3 = z2*cos(t2)-x1*sin(t2);\n' + 'x3 = x2*cos(t3)-y2*sin(t3);\n' + 'y3 = y2*cos(t3)+x2*sin(t3);\n' + 'x4 = x3;\n' + 'y4 = y3;\n' + 'z4 = z3+5;\n' + 'x=0.5-1*(x4/(1+z4*0.5));\n' + 'y=0.5-1*(y4/(1+z4*0.5));\n' + 'a = -.9+sin(nsample+time);\n' + 'a = if(below(a,0),0,a);\n' + 'a=1;\n' + 'g=y2;\n' + 'b=x2;\n' + 'r= z2+z3;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.463735,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.fvar = 0;
m.rotx = 0;
m.t5 = 0;
m.roty = 0;
m.rotz = 0;
m.t8 = 0;
m.tvar = 0;
m.svar = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.nsample = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.x2 = 0;
m.y3 = 0;
m.z4 = 0;
m.x3 = 0;
m.y4 = 0;
m.x4 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t8 = (3.14159265*0.15);
m.t5 = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rotx = (m.rotx+m.bass);
m.roty = (m.roty+m.mid);
m.rotz = (m.rotz+m.treb);
m.t1 = div((m.t8*m.rotx),180);
m.t2 = div((m.t8*m.roty),180);
m.t3 = div((m.t8*m.rotz),180);
m.t4 = (3*Math.sin((m.time+(0.66*m.t8))));
m.t5 = (10+(8*Math.cos((m.time+(0.66*m.t8)))));
		return m;
	},
		'point_eqs' : function(m) {
m.fvar = (m.sample*512);
m.svar = (m.fvar*128);
m.tvar = bitand(0,m.svar);
m.nsample = (m.tvar*4.5);
m.x1 = (-0.75+(1.5*Math.sin(m.sample)));
m.y1 = (1*Math.cos((m.t8*m.nsample)));
m.z1 = (1*Math.sin((m.t8*m.nsample)));
m.y2 = ((m.y1*Math.cos(m.t1))-(m.z1*Math.sin(m.t1)));
m.z2 = ((m.y1*Math.sin(m.t1))+(m.z1*Math.cos(m.t1)));
m.x2 = ((m.z2*Math.sin(m.t2))+(m.x1*Math.cos(m.t2)));
m.z3 = ((m.z2*Math.cos(m.t2))-(m.x1*Math.sin(m.t2)));
m.x3 = ((m.x2*Math.cos(m.t3))-(m.y2*Math.sin(m.t3)));
m.y3 = ((m.y2*Math.cos(m.t3))+(m.x2*Math.sin(m.t3)));
m.x4 = m.x3;
m.y4 = m.y3;
m.z4 = (m.z3+5);
m.x = (0.5+(0.8*div(m.x4,(1+(m.z4*0.5)))));
m.y = (0.5+(0.8*div(m.y4,(1+(m.z4*0.5)))));
m.a = (-0.9+Math.sin((m.nsample+m.time)));
m.a = ifcond(below(m.a, 0), 0, m.a);
m.a = 1;
m.b = m.z4;
m.r = (m.z2-m.x1);
m.g = (m.y2+m.z2);
		return m;
	},
		'init_eqs_str' : ('t8=3.14159265*0.15;\n' + 't5 = 1;'),
		'frame_eqs_str' : ('rotx = rotx+bass;\n' + 'roty = roty+mid;\n' + 'rotz = rotz+treb;\n' + 't1= t8*rotx/180;\n' + 't2 = t8*roty/180;\n' + 't3 = t8*rotz/180;\n' + 't4 = 3*sin(time+0.66*t8);\n' + 't5 = 10+8*cos(time+0.66*t8);'),
		'point_eqs_str' : ('fvar = sample*512;\n' + 'svar = fvar*128;\n' + 'tvar = 0&svar;\n' + 'nsample = tvar*4.5;\n' + 'x1 = -.75+(1.5)*sin(sample);\n' + 'y1 = (1)*cos(t8*nsample);\n' + 'z1 = (1)*sin(t8*nsample);\n' + 'y2 = y1*cos(t1)-z1*sin(t1);\n' + 'z2 = y1*sin(t1)+z1*cos(t1);\n' + 'x2 = z2*sin(t2)+x1*cos(t2);\n' + 'z3 = z2*cos(t2)-x1*sin(t2);\n' + 'x3 = x2*cos(t3)-y2*sin(t3);\n' + 'y3 = y2*cos(t3)+x2*sin(t3);\n' + 'x4 = x3;\n' + 'y4 = y3;\n' + 'z4 = z3+5;\n' + 'x=0.5+0.8*(x4/(1+z4*0.5));\n' + 'y=0.5+0.8*(y4/(1+z4*0.5));\n' + 'a = -.9+sin(nsample+time);\n' + 'a = if(below(a,0),0,a);\n' + 'a=1;\n' + 'b = z4;\n' + 'r=z2-x1;\n' + 'g=y2+z2;'),

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
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.330038,
			x : 0.88,
			y : 0.8,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.4*Math.sin(((0.2765*m.time)+(0.341*m.q8)))));
m.y = (0.5+(0.4*Math.sin(((0.311*m.time)+(0.213*m.q8)))));
m.ang = (3.1415-(3.1415*Math.cos((m.time*0.1389))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5+ 0.4*sin(0.2765*time+0.341*q8);\n' + 'y = 0.5+ 0.4*sin(0.311*time+0.213*q8);\n' + 'ang = 3.1415-3.1415*cos(time*0.1389);'),

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
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.330038,
			x : 0.88,
			y : 0.2,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.4*Math.sin(((0.212*m.time)+(0.1*m.q8)))));
m.y = (0.5+(0.4*Math.sin(((0.2891*m.time)+(0.121*m.q8)))));
m.ang = (3.1415+(3.1415*Math.sin((m.time*0.181))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5+ 0.4*sin(0.212*time+0.1*q8);\n' + 'y = 0.5+ 0.4*sin(0.2891*time+0.121*q8);\n' + 'ang = 3.1415+3.1415*sin(time*0.181);'),

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
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.330038,
			x : 0.12,
			y : 0.8,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q6 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.4*Math.sin(((0.0932*m.time)+(0.421*m.q6)))));
m.y = (0.5+(0.4*Math.sin(((0.1178*m.time)+(0.2135*m.q6)))));
m.ang = (3.1415-(3.1415*Math.cos((m.time*0.1154))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5+ 0.4*sin(0.0932*time+0.421*q6);\n' + 'y = 0.5+ 0.4*sin(0.1178*time+0.2135*q6);\n' + 'ang = 3.1415-3.1415*cos(time*0.1154);'),

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
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.330038,
			x : 0.12,
			y : 0.2,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
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
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5+ 0.4*sin(0.105*time+0.3*q4);\n' + 'y = 0.5+ 0.4*sin(0.1267*time+0.323*q4);\n' + 'ang = 3.1415+3.1415*sin(time*0.2654);'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'wave_a=0;\n' + 'decay = 0.976;\n' + 'decay=0.99;\n' + 'q8 =  oldq8+ 0.0002*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 = q8;\n' + 'q7 = 0.00004*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'q6 =  oldq6+ 0.0002*(pow(1+0.1*bass+0.1*bass_att+1.2*treb+0.4*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq6 = q6;\n' + 'q4 =  oldq4+ 0.0002*(pow(1+0.1*bass+0.1*bass_att+0.1*treb+0.1*treb_att+1.2*mid+0.4*mid_att,6)/fps);\n' + 'oldq4 = q4;\n' + 'q8 =  oldq8+ 0.0002*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 = q8;\n' + 'q8 =  oldq8+ 0.0002*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 = q8;\n' + 'ob_size = min(max(0,q7-0.3)+0.005,0.9);\n' + 'ob_b = max(0,sin(q8*0.2542)*0.2 +0.1);\n' + 'ob_r = max(0,sin(q8*0.985)*0.4 + 0.2);\n' + 'ob_g = max(0,sin(q8*0.8711)*0.3 + 0.1);\n' + 'ob_a =max(0,0.3*(q7-0.2))+0.1;\n' + 'ib_r = 1-if(ob_size-0.005,0,1);\n' + 'ib_g = ib_r*(0.21*0.2*sin(time*0.643));\n' + 'ib_b = ib_r*(0.21*0.2*sin(time*0.853));\n' + 'ib_a =1;\n' + 'monitor = ob_a;\n' + 'monitor =q6;'),
	'pixel_eqs_str' : ('dx=dx+0.008*sin((y*2-1)*meshx)+0.008*sin((y*2-1)*meshx*1.3333);\n' + 'dy=dy+0.008*cos((x*2-1)*meshx*1.3333)+0.008*cos((x*2-1)*meshx);'),
};

return pmap;
});
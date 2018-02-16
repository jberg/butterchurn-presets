define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 7.680042,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 6.240038,
		wave_scale : 1.0,
		echo_alpha : 1.1,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.32,
		mv_dy : -0.22,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.05,
		ob_size : 0.0,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
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
		ob_b : 0.0,
		mv_l : 0.05,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.82,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 0.76,
		rating : 1.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_a = 0;
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = ifcond(above(m.x, 0.3), ifcond(below(m.x, 0.7), ifcond(below(m.y, 0.7), ifcond(above(m.y, 0.3), (m.zoom+0.01), 0.5), 0.5), 0.5), 0.5);
m.dx = ifcond(above(m.x, 0.3), ifcond(below(m.x, 0.7), ifcond(below(m.y, 0.7), ifcond(above(m.y, 0.3), 0, 0.5), 0.5), 0.5), 0.5);
m.dy = ifcond(above(m.x, 0.3), ifcond(below(m.x, 0.7), ifcond(below(m.y, 0.7), ifcond(above(m.y, 0.3), 0, 0.5), 0.5), 0.5), 0.5);
m.zoom = ifcond(below(m.zoom, 1), ((m.zoom+(m.x*-0.4))+(0.02*Math.sin((m.time+(m.bass*2))))), m.zoom);
m.zoom = (m.zoom+ifcond(below(m.zoom, 1), (m.zoom+((((m.y-0.5)+(0.5*Math.sin((m.time*0.66))))*0.2)*Math.sin((m.time*0.5)))), 0));
m.dx = ifcond(above(m.dx, 0), (((rand(50)-25)*m.bass)*0.0045), m.dx);
m.zoom = ((m.zoom+((0.1+(0.1*Math.sin((m.time*0.3))))*below(m.zoom, 1)))+0.025);
m.zoom = (m.zoom*above(m.zoom, 0));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.463735,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.rotx = 0;
m.t5 = 0;
m.roty = 0;
m.rotz = 0;
m.t8 = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
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
m.t4 = (3*Math.sin(m.time));
m.t5 = (10+(8*Math.cos(m.time)));
m.g = (0.5-(0.4*Math.cos(m.time)));
m.r = (0.5-(0.4*Math.sin(m.time)));
		return m;
	},
		'point_eqs' : function(m) {
m.x1 = (0.5*Math.sin(((8*m.t8)*m.sample)));
m.y1 = ((2*(m.sample-0.5))-m.value1);
m.z1 = (0.5*Math.cos(((8*m.t8)*m.sample)));
m.y2 = ((m.y1*Math.cos(m.t1))-(m.z1*Math.sin(m.t1)));
m.z2 = ((m.y1*Math.sin(m.t1))+(m.z1*Math.cos(m.t1)));
m.x2 = ((m.z2*Math.sin(m.t2))+(m.x1*Math.cos(m.t2)));
m.z3 = ((m.z2*Math.cos(m.t2))-(m.x1*Math.sin(m.t2)));
m.x3 = ((m.x2*Math.cos(m.t3))-(m.y2*Math.sin(m.t3)));
m.y3 = ((m.y2*Math.cos(m.t3))+(m.x2*Math.sin(m.t3)));
m.x4 = (m.x3+m.t4);
m.y4 = m.y3;
m.z4 = (m.z3+m.t5);
m.x = (0.5+(0.5*div(m.x4,(1+(m.z4*0.5)))));
m.y = (0.5+(0.5*div(m.y4,(1+(m.z4*0.5)))));
m.b = (m.r+m.value1);
		return m;
	},
		'init_eqs_str' : ('t8=3.14159265;\n' + 't5 = 1;'),
		'frame_eqs_str' : ('rotx = rotx+bass;\n' + 'roty = roty+mid;\n' + 'rotz = rotz+treb;\n' + 't1= t8*rotx/180;\n' + 't2 = t8*roty/180;\n' + 't3 = t8*rotz/180;\n' + 't4 = 3*sin(time);\n' + 't5 = 10+8*cos(time);\n' + 'g = 0.5-0.4*cos(time);\n' + 'r = 0.5-0.4*sin(time);'),
		'point_eqs_str' : ('x1 = 0.5*sin(8*t8*sample);\n' + 'y1 = 2*(sample-0.5)-value1;\n' + 'z1= 0.5*cos(8*t8*sample);\n' + 'y2 = y1*cos(t1)-z1*sin(t1);\n' + 'z2 = y1*sin(t1)+z1*cos(t1);\n' + 'x2 = z2*sin(t2)+x1*cos(t2);\n' + 'z3 = z2*cos(t2)-x1*sin(t2);\n' + 'x3 = x2*cos(t3)-y2*sin(t3);\n' + 'y3 = y2*cos(t3)+x2*sin(t3);\n' + 'x4 = x3+t4;\n' + 'y4 = y3;\n' + 'z4 = z3+t5;\n' + 'x=0.5+0.5*(x4/(1+z4*0.5));\n' + 'y=0.5+0.5*(y4/(1+z4*0.5));\n' + 'b= r+value1;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.463735,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
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
m.t4 = (3*Math.sin((0.66*m.t8)));
m.t5 = (10+(8*Math.cos((0.66*m.t8))));
		return m;
	},
		'point_eqs' : function(m) {
m.fvar = (m.sample*512);
m.svar = div(m.fvar,32);
m.tvar = bitand(0,m.svar);
m.nsample = (m.tvar*3.5);
m.x1 = (1*Math.sin((m.nsample+(m.value1*5))));
m.y1 = (4*Math.cos(((m.sample*m.t8)*2)));
m.z1 = (4*Math.sin((m.sample*(m.t8*2))));
m.y2 = ((m.y1*Math.cos(m.t1))-(m.z1*Math.sin(m.t1)));
m.z2 = ((m.y1*Math.sin(m.t1))+(m.z1*Math.cos(m.t1)));
m.x2 = ((m.z2*Math.sin(m.t2))+(m.x1*Math.cos(m.t2)));
m.z3 = ((m.z2*Math.cos(m.t2))-(m.x1*Math.sin(m.t2)));
m.x3 = ((m.x2*Math.cos(m.t3))-(m.y2*Math.sin(m.t3)));
m.y3 = ((m.y2*Math.cos(m.t3))+(m.x2*Math.sin(m.t3)));
m.x4 = m.x3;
m.y4 = m.y3;
m.z4 = (m.z3+10);
m.x = (0.5+(0.5*div(m.x4,(1+(m.z4*0.5)))));
m.y = (0.5+(0.5*div(m.y4,(1+(m.z4*0.5)))));
m.r = Math.sin(m.nsample);
m.g = (-0.3+Math.cos(((m.sample*20)+(m.time*5))));
m.b = (-0.3-Math.cos(((-m.sample*20)+(m.time*5))));
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = ifcond(below(m.b, 0), 0, m.b);
		return m;
	},
		'init_eqs_str' : ('t8=3.14159265;\n' + 't5 = 1;'),
		'frame_eqs_str' : ('rotx = rotx+bass;\n' + 'roty = roty+mid;\n' + 'rotz = rotz+treb;\n' + 't1= t8*rotx/180;\n' + 't2 = t8*roty/180;\n' + 't3 = t8*rotz/180;\n' + 't4 = 3*sin(0.66*t8);\n' + 't5 = 10+8*cos(0.66*t8);'),
		'point_eqs_str' : ('fvar = sample*512;\n' + 'svar = fvar/32;\n' + 'tvar = 0&svar;\n' + 'nsample = tvar*3.5;\n' + 'x1 = (1)*sin(nsample+value1*5);\n' + 'y1 = (4)*cos(sample*t8*2);\n' + 'z1= (4)*sin(sample*(t8*2));\n' + 'y2 = y1*cos(t1)-z1*sin(t1);\n' + 'z2 = y1*sin(t1)+z1*cos(t1);\n' + 'x2 = z2*sin(t2)+x1*cos(t2);\n' + 'z3 = z2*cos(t2)-x1*sin(t2);\n' + 'x3 = x2*cos(t3)-y2*sin(t3);\n' + 'y3 = y2*cos(t3)+x2*sin(t3);\n' + 'x4 = x3;\n' + 'y4 = y3;\n' + 'z4 = z3+10;\n' + 'x=0.5+0.5*(x4/(1+z4*0.5));\n' + 'y=0.5+0.5*(y4/(1+z4*0.5));\n' + 'r = sin(nsample);\n' + 'g = -.3+cos(sample*20+(time*5));\n' + 'b = -.3-cos(-sample*20+(time*5));\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(below(b,0),0,b);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.463735,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.rotx = 0;
m.t5 = 0;
m.roty = 0;
m.rotz = 0;
m.t8 = 0;
m.z0 = 0;
m.y0 = 0;
m.z1 = 0;
m.x0 = 0;
m.y1 = 0;
m.z2 = 0;
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
m.t4 = (3*Math.sin((m.time+(1.33*m.t8))));
m.t5 = (10+(8*Math.cos((m.time+(1.33*m.t8)))));
m.r = (0.5-(0.4*Math.cos((m.time+(1.33*m.t8)))));
m.b = (0.5-(0.4*Math.sin((m.time+(1.33*m.t8)))));
		return m;
	},
		'point_eqs' : function(m) {
m.x0 = ifcond(below((m.sample*12), 1), (m.sample*12), ifcond(below((m.sample*12), 2), 1, ifcond(below((m.sample*12), 3), Math.abs(((m.sample*12)-3)), ifcond(below((m.sample*12), 6), 0, ifcond(below((m.sample*12), 8), 1, ifcond(below((m.sample*12), 9), Math.abs(((m.sample*12)-9)), ifcond(below((m.sample*12), 10), 0, ifcond(below((m.sample*12), 11), ((m.sample*12)-10), 1))))))));
m.y0 = ifcond(below((m.sample*12), 1), 0, ifcond(below((m.sample*12), 2), ((m.sample*12)-1), ifcond(below((m.sample*12), 3), 1, ifcond(below((m.sample*12), 4), Math.abs(((m.sample*12)-4)), ifcond(below((m.sample*12), 5), 0, ifcond(below((m.sample*12), 7), 1, ifcond(below((m.sample*12), 9), 0, ifcond(below((m.sample*12), 10), ((m.sample*12)-9), ifcond(below((m.sample*12), 11), 1, Math.abs(((m.sample*12)-12)))))))))));
m.z0 = ifcond(below((m.sample*12), 4), 0, ifcond(below((m.sample*12), 5), ((m.sample*12)-4), ifcond(below((m.sample*12), 6), Math.abs(((m.sample*12)-6)), ifcond(below((m.sample*12), 7), ((m.sample*12)-6), ifcond(below((m.sample*12), 8), Math.abs(((m.sample*12)-8)), 1)))));
m.x1 = ((0.5-m.x0)+ifcond(below(Math.sin(((m.sample*12)*3.1415)), 0), m.value1, 0));
m.y1 = ((0.5-m.y0)+ifcond(below(Math.cos((((m.sample*12)-1.5)*3.1415)), 0), m.value1, 0));
m.z1 = ((0.5-m.z0)+ifcond(below((m.sample*12), 4), 0, ifcond(below((m.sample*12), 8), m.value1, 0)));
m.y2 = ((m.y1*Math.cos(m.t1))-(m.z1*Math.sin(m.t1)));
m.z2 = ((m.y1*Math.sin(m.t1))+(m.z1*Math.cos(m.t1)));
m.x2 = ((m.z2*Math.sin(m.t2))+(m.x1*Math.cos(m.t2)));
m.z3 = ((m.z2*Math.cos(m.t2))-(m.x1*Math.sin(m.t2)));
m.x3 = ((m.x2*Math.cos(m.t3))-(m.y2*Math.sin(m.t3)));
m.y3 = ((m.y2*Math.cos(m.t3))+(m.x2*Math.sin(m.t3)));
m.x4 = (m.x3+m.t4);
m.y4 = m.y3;
m.z4 = (m.z3+m.t5);
m.x = (0.5+(0.5*div(m.x4,(1+(m.z4*0.5)))));
m.y = (0.5+(0.5*div(m.y4,(1+(m.z4*0.5)))));
m.g = (m.b+m.value1);
		return m;
	},
		'init_eqs_str' : ('t8=3.14159265;\n' + 't5 = 1;'),
		'frame_eqs_str' : ('rotx = rotx+bass;\n' + 'roty = roty+mid;\n' + 'rotz = rotz+treb;\n' + 't1= t8*rotx/180;\n' + 't2 = t8*roty/180;\n' + 't3 = t8*rotz/180;\n' + 't4 = 3*sin(time+1.33*t8);\n' + 't5 = 10+8*cos(time+1.33*t8);\n' + 'r = 0.5-0.4*cos(time+1.33*t8);\n' + 'b = 0.5-0.4*sin(time+1.33*t8);'),
		'point_eqs_str' : ('x0 = if(below(sample*12,1),sample*12, if(below(sample*12,2),1, if(below(sample*12,3),abs(sample*12-3), if(below(sample*12,6),0, if(below(sample*12,8),1, if(below(sample*12,9),abs(sample*12-9), if(below(sample*12,10),0, if(below(sample*12,11),sample*12-10,1))))))));\n' + 'y0 = if(below(sample*12,1),0, if(below(sample*12,2),sample*12-1, if(below(sample*12,3),1, if(below(sample*12,4),abs(sample*12-4), if(below(sample*12,5),0, if(below(sample*12,7),1, if(below(sample*12,9),0, if(below(sample*12,10),sample*12-9, if(below(sample*12,11),1,abs(sample*12-12))))))))));\n' + 'z0 = if(below(sample*12,4),0, if(below(sample*12,5),sample*12-4, if(below(sample*12,6),abs(sample*12-6), if(below(sample*12,7),sample*12-6, if(below(sample*12,8),abs(sample*12-8),1)))));\n' + 'x1 = 0.5-x0+if(below(sin(sample*12*3.1415),0),value1,0);\n' + 'y1 = 0.5-y0+if(below(cos((sample*12-1.5)*3.1415),0),value1,0);\n' + 'z1 = 0.5-z0+if(below(sample*12,4),0,if(below(sample*12,8),value1,0));\n' + 'y2 = y1*cos(t1)-z1*sin(t1);\n' + 'z2 = y1*sin(t1)+z1*cos(t1);\n' + 'x2 = z2*sin(t2)+x1*cos(t2);\n' + 'z3 = z2*cos(t2)-x1*sin(t2);\n' + 'x3 = x2*cos(t3)-y2*sin(t3);\n' + 'y3 = y2*cos(t3)+x2*sin(t3);\n' + 'x4 = x3+t4;\n' + 'y4 = y3;\n' + 'z4 = z3+t5;\n' + 'x=0.5+0.5*(x4/(1+z4*0.5));\n' + 'y=0.5+0.5*(y4/(1+z4*0.5));\n' + 'g = b+value1;'),

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


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (0.5+((0.12+(0.02*Math.sin((m.time*0.8))))*Math.cos(((m.sample*(100*Math.sin((m.time*0.1))))+(m.time*0.8)))));
m.y = (0.5+((0.12+(0.02*Math.sin(m.time)))*Math.sin(((m.sample*(100*Math.sin((m.time*0.5))))+(m.time*0.5)))));
m.a = (-0.7+Math.sin(((m.sample*1000)+(m.time*2))));
m.a = above(m.a, 0);
m.r = (-0.7+Math.sin(((m.sample*100)+(m.time*2))));
m.g = (-0.7+Math.sin((((m.sample+0.40)*100)+(m.time*2))));
m.b = (-0.7+Math.sin((((m.sample+0.77)*100)+(m.time*2))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = .5 + (.12 + .02*sin(time*.8))*cos(sample*(100*sin(time*.1))+time*.8);\n' + 'y = .5 + (.12 + .02*sin(time))*sin(sample*(100*sin(time*.5))+time*.5);\n' + 'a = -.7+sin(sample*1000+time*2);\n' + 'a = above(a,0);\n' + 'r = -.7+sin(sample*100+time*2);\n' + 'g = -.7+sin((sample+.40)*100+time*2);\n' + 'b = -.7+sin((sample+.77)*100+time*2);'),

		}
],
	'shapes' : [
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
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'wave_a=0;'),
	'pixel_eqs_str' : ('zoom = if(above(x,.3),if(below(x,.7),if(below(y,.7),if(above(y,.3),zoom+.01,.5),.5),.5),.5);\n' + 'dx = if(above(x,.3),if(below(x,.7),if(below(y,.7),if(above(y,.3),0,.5),.5),.5),.5);\n' + 'dy = if(above(x,.3),if(below(x,.7),if(below(y,.7),if(above(y,.3),0,.5),.5),.5),.5);\n' + 'zoom = if(below(zoom,1),zoom + ((x)*-.4)+.02*sin(time+(bass*2)),zoom);\n' + 'zoom = zoom + if(below(zoom,1),zoom + (y-.5+.5*sin(time*.66))*.2*sin(time*.5),0);\n' + 'dx = if(above(dx,0),((rand(50)-25)*bass*.0045),dx);\n' + 'zoom = zoom + (.1+.1*sin(time*.3))*below(zoom,1)+0.025;\n' + 'zoom = zoom*above(zoom,0);'),
};

return pmap;
});
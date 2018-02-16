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
		ib_size : 0.0,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.999838,
		ob_size : 0.0,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
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
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.9,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q7 = 0;
m.q8 = 0;
m.oldq8 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_a = 0;
m.q8 = (m.oldq8+(0.0003*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.q7 = (0.003*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps));
m.zoom = (1+(0.005*m.q7));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
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
m.t4 = (3*Math.sin((m.time+(0.66*m.t8))));
m.t5 = (10+(8*Math.cos((m.time+(0.66*m.t8)))));
m.b = (0.5-(0.4*Math.cos((m.time+(0.66*m.t8)))));
m.g = (0.5-(0.4*Math.sin((m.time+(0.66*m.t8)))));
		return m;
	},
		'point_eqs' : function(m) {
m.x1 = (((1+m.value1)*Math.sin((m.t8*m.sample)))*Math.sin(((16*m.t8)*m.sample)));
m.y1 = ((1+m.value1)*Math.cos((m.t8*m.sample)));
m.z1 = (((1+m.value1)*Math.sin((m.t8*m.sample)))*Math.cos(((16*m.t8)*m.sample)));
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
m.r = (m.g+m.value1);
		return m;
	},
		'init_eqs_str' : ('t8=3.14159265;\n' + 't5 = 1;'),
		'frame_eqs_str' : ('rotx = rotx+bass;\n' + 'roty = roty+mid;\n' + 'rotz = rotz+treb;\n' + 't1= t8*rotx/180;\n' + 't2 = t8*roty/180;\n' + 't3 = t8*rotz/180;\n' + 't4 = 3*sin(time+0.66*t8);\n' + 't5 = 10+8*cos(time+0.66*t8);\n' + 'b = 0.5-0.4*cos(time+0.66*t8);\n' + 'g = 0.5-0.4*sin(time+0.66*t8);'),
		'point_eqs_str' : ('x1 = (1+value1)*sin(t8*sample)*sin(16*t8*sample);\n' + 'y1 = (1+value1)*cos(t8*sample);\n' + 'z1= (1+value1)*sin(t8*sample)*cos(16*t8*sample);\n' + 'y2 = y1*cos(t1)-z1*sin(t1);\n' + 'z2 = y1*sin(t1)+z1*cos(t1);\n' + 'x2 = z2*sin(t2)+x1*cos(t2);\n' + 'z3 = z2*cos(t2)-x1*sin(t2);\n' + 'x3 = x2*cos(t3)-y2*sin(t3);\n' + 'y3 = y2*cos(t3)+x2*sin(t3);\n' + 'x4 = x3+t4;\n' + 'y4 = y3;\n' + 'z4 = z3+t5;\n' + 'x=0.5+0.5*(x4/(1+z4*0.5));\n' + 'y=0.5+0.5*(y4/(1+z4*0.5));\n' + 'r = g+value1;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.463735,
			samples : 48.0,
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
m.newsample = 0;
m.tvar = 0;
m.svar = 0;
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
m.t4 = (3*Math.sin((m.time+(1.33*m.t8))));
m.t5 = (10+(8*Math.cos((m.time+(1.33*m.t8)))));
m.r = (0.5-(0.4*Math.cos((m.time+(1.33*m.t8)))));
m.b = (0.5-(0.4*Math.sin((m.time+(1.33*m.t8)))));
		return m;
	},
		'point_eqs' : function(m) {
m.fvar = (m.sample*512);
m.svar = div(m.fvar,16);
m.tvar = bitand(0,m.svar);
m.newsample = div(m.tvar,3.2);
m.x1 = Math.sin(((m.newsample*3.1415926)*2));
m.y1 = Math.cos(((m.newsample*3.1415926)*2));
m.z1 = 0;
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
m.r = (-0.5+Math.sin(((m.sample*5)+((m.time*5)+9))));
m.r = ifcond(below(m.r, 0), 0, m.r);
m.g = (-0.5+Math.sin(((m.sample*5)+(m.time*5))));
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = (-0.5+Math.sin(((m.sample*5)+((m.time*5)+18))));
m.b = ifcond(below(m.b, 0), 0, m.b);
m.r = ifcond(above(m.bass, 1.5), 1, m.r);
m.g = ifcond(above(m.bass, 1.5), 1, m.g);
m.b = ifcond(above(m.bass, 1.5), 1, m.b);
		return m;
	},
		'init_eqs_str' : ('t8=3.14159265;\n' + 't5 = 1;'),
		'frame_eqs_str' : ('rotx = rotx+bass;\n' + 'roty = roty+mid;\n' + 'rotz = rotz+treb;\n' + 't1= t8*rotx/180;\n' + 't2 = t8*roty/180;\n' + 't3 = t8*rotz/180;\n' + 't4 = 3*sin(time+1.33*t8);\n' + 't5 = 10+8*cos(time+1.33*t8);\n' + 'r = 0.5-0.4*cos(time+1.33*t8);\n' + 'b = 0.5-0.4*sin(time+1.33*t8);'),
		'point_eqs_str' : ('fvar = sample*512;\n' + 'svar = fvar/16;\n' + 'tvar = 0&svar;\n' + 'newsample = tvar/3.2;\n' + 'x1 = sin(newsample*3.1415926*2);\n' + 'y1 = cos(newsample*3.1415926*2);\n' + 'z1 = 0;\n' + 'y2 = y1*cos(t1)-z1*sin(t1);\n' + 'z2 = y1*sin(t1)+z1*cos(t1);\n' + 'x2 = z2*sin(t2)+x1*cos(t2);\n' + 'z3 = z2*cos(t2)-x1*sin(t2);\n' + 'x3 = x2*cos(t3)-y2*sin(t3);\n' + 'y3 = y2*cos(t3)+x2*sin(t3);\n' + 'x4 = x3;\n' + 'y4 = y3;\n' + 'z4 = z3+5;\n' + 'x=0.5+0.5*(x4/(1+z4*0.5));\n' + 'y=0.5+0.5*(y4/(1+z4*0.5));\n' + 'r = -.5 + sin(sample*5+((time*5)+9));\n' + 'r = if(below(r,0),0,r);\n' + 'g = -.5 + sin(sample*5+time*5);\n' + 'g = if(below(g,0),0,g);\n' + 'b = -.5 + sin(sample*5+((time*5)+18));\n' + 'b = if(below(b,0),0,b);\n' + 'r = if(above(bass,1.5),1,r);\n' + 'g = if(above(bass,1.5),1,g);\n' + 'b = if(above(bass,1.5),1,b);'),

		},
		{
		'baseVals' : {

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
			r2 : 0.0,
			a : 0.5,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 0.0,
			rad : 6.530878,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 1.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.q7 = 0;
m.q8 = 0;
m.oldq8 = 0;

			m.rkeys = ['oldq8'];
			return m;
		},
		'frame_eqs' : function(m) {
m.q8 = (m.oldq8+(0.0003*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.q7 = (0.003*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps));
m.rad = (m.rad+Math.sin(m.q8));
m.r2 = m.bass;
m.g2 = m.treb;
m.b2 = m.mid;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('q8 =oldq8+ 0.0003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 = q8;\n' + 'q7 = 0.003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'rad = rad + sin(q8);\n' + 'r2 = bass;\n' + 'g2 = treb;\n' + 'b2 = mid;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.8,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.3,
			r : 1.0,
			border_g : 1.0,
			rad : 0.02248,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 1.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q7 = 0;
m.q8 = 0;
m.oldq8 = 0;

			m.rkeys = ['r2','b','g','g2','oldq8','b2','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.q8 = (m.oldq8+(0.0003*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.q7 = (0.003*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps));
m.rad = 0.55;
m.r = Math.min(1, Math.max(0, (m.r+(0.1*Math.sin(((m.time*0.417)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.1*Math.sin(((m.time*0.391)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.1*Math.sin(((m.time*0.432)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.1*Math.sin(((m.time*0.457)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.1*Math.sin(((m.time*0.437)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.1*Math.sin(((m.time*0.484)+6))))));
m.ang = (m.ang-Math.cos((m.time*0.02)));
m.x = (0.5+(0.1*Math.sin((m.q8*0.11))));
m.y = (0.5+(0.1*Math.sin((m.q8*0.51))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('q8 =oldq8+ 0.0003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 = q8;\n' + 'q7 = 0.003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'rad = .55;\n' + 'r = min(1,max(0,r + 0.1*sin(time*0.417 + 1)));\n' + 'g = min(1,max(0,g + 0.1*sin(time*0.391 + 2)));\n' + 'b = min(1,max(0,b + 0.1*sin(time*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.1*sin(time*0.457 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.1*sin(time*0.437 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.1*sin(time*0.484 + 6)));\n' + 'ang = ang-cos(time*.02);\n' + 'x = .5 + .1*sin(q8*.11);\n' + 'y = .5 + .1*sin(q8*.51);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.54,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 1.0,
			rad : 0.108925,
			x : 0.65,
			y : 0.62,
			ang : 0.0,
			sides : 1.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q7 = 0;
m.q8 = 0;
m.oldq8 = 0;

			m.rkeys = ['r2','b','g','g2','oldq8','b2','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.q8 = (m.oldq8+(0.0003*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.q7 = (0.003*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps));
m.rad = (0.750+(0.1*Math.sin((m.q8*0.02))));
m.r = Math.min(1, Math.max(0, (m.r+(0.1*Math.sin(((m.time*0.417)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.1*Math.sin(((m.time*0.391)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.1*Math.sin(((m.time*0.432)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.1*Math.sin(((m.time*0.457)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.1*Math.sin(((m.time*0.437)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.1*Math.sin(((m.time*0.484)+6))))));
m.ang = (m.ang+(4*Math.sin((m.q8*0.2))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('q8 =oldq8+ 0.0003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 = q8;\n' + 'q7 = 0.003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'rad = .750 + .1*sin(q8*.02);\n' + 'r = min(1,max(0,r + 0.1*sin(time*0.417 + 1)));\n' + 'g = min(1,max(0,g + 0.1*sin(time*0.391 + 2)));\n' + 'b = min(1,max(0,b + 0.1*sin(time*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.1*sin(time*0.457 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.1*sin(time*0.437 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.1*sin(time*0.484 + 6)));\n' + 'ang = ang+4*sin(q8*.2);'),

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
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 1.0,
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
	'frame_eqs_str' : ('warp=0;\n' + 'wave_a=0;\n' + 'q8 =oldq8+ 0.0003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 = q8;\n' + 'q7 = 0.003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'zoom = 1+.005*q7;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
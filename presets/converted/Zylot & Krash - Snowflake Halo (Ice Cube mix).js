define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 0.198054,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.006596,
		ob_size : 0.01,
		wave_smoothing : 0.36,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.959487,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.02,
		wave_thick : 0.0,
		modwavealphaend : 1.7,
		wave_mystery : -0.5,
		decay : 0.925,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.7098,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.ff = 0;
m.angval = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.ff = div(m.frame,100);
m.wave_r = (div(Math.sin(div((5*m.ff),2)),2)+0.5);
m.wave_g = (div(Math.cos(div(m.ff,3)),2)+0.5);
m.wave_b = (div(Math.cos(div((3*m.ff),2)),2)+0.5);
m.zoom = (m.zoom-ifcond(below(m.zoom, 0.96), 0, 0.008));
m.zoom = (m.zoom+(0.15*m.bass_att));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.angval = (m.ang+Math.abs(((3.14*Math.sin((m.time*0.345)))+(3.14*Math.sin((m.time*0.234))))));
m.rot = div(((2*Math.abs((Math.sin(m.time)-0.5)))-m.angval),1);
		return m;
	},
	'waves' : [
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
m.x = (0.5+(0.5*div(m.x4,(1+(m.z4*0.5)))));
m.y = (0.5+(0.5*div(m.y4,(1+(m.z4*0.5)))));
m.a = (-0.9+Math.sin((m.nsample+m.time)));
m.a = ifcond(below(m.a, 0), 0, m.a);
		return m;
	},
		'init_eqs_str' : ('t8=3.14159265;\n' + 't5 = 1;'),
		'frame_eqs_str' : ('rotx = rotx+bass;\n' + 'roty = roty+mid;\n' + 'rotz = rotz+treb;\n' + 't1= t8*rotx/180;\n' + 't2 = t8*roty/180;\n' + 't3 = t8*rotz/180;\n' + 't4 = 3*sin(time+0.66*t8);\n' + 't5 = 10+8*cos(time+0.66*t8);'),
		'point_eqs_str' : ('fvar = sample*512;\n' + 'svar = fvar*128;\n' + 'tvar = 0&svar;\n' + 'nsample = tvar*4.5;\n' + 'x1 = -.75+(1.5)*sin(sample);\n' + 'y1 = (1)*cos(t8*nsample);\n' + 'z1 = (1)*sin(t8*nsample);\n' + 'y2 = y1*cos(t1)-z1*sin(t1);\n' + 'z2 = y1*sin(t1)+z1*cos(t1);\n' + 'x2 = z2*sin(t2)+x1*cos(t2);\n' + 'z3 = z2*cos(t2)-x1*sin(t2);\n' + 'x3 = x2*cos(t3)-y2*sin(t3);\n' + 'y3 = y2*cos(t3)+x2*sin(t3);\n' + 'x4 = x3;\n' + 'y4 = y3;\n' + 'z4 = z3+5;\n' + 'x=0.5+0.5*(x4/(1+z4*0.5));\n' + 'y=0.5+0.5*(y4/(1+z4*0.5));\n' + 'a = -.9+sin(nsample+time);\n' + 'a = if(below(a,0),0,a);'),

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
	'frame_eqs_str' : ('ff = frame/100;\n' + 'wave_r = sin(5*ff/2)/2+0.5;\n' + 'wave_g = cos(ff/3)/2+0.5;\n' + 'wave_b = cos(3*ff/2)/2+0.5;\n' + 'zoom = zoom - if(below(zoom,0.96),0,0.008);\n' + 'zoom = zoom + 0.15*bass_att;'),
	'pixel_eqs_str' : ('angval = ang + abs(3.14*sin(time*0.345) + 3.14*sin(time*.234));\n' + 'rot=(2*abs((sin(time)-0.5))-angval)/1;'),
};

return pmap;
});
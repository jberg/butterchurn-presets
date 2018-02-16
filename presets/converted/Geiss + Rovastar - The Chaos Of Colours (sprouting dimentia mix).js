define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.7,
		wave_g : 0.65,
		ib_g : 0.85,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.95,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.0,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 13.290894,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : -0.28,
		cx : 0.5,
		dy : -0.32,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : -0.02,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : -1.0,
		decay : 0.94,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.65,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q7 = 0;
m.q8 = 0;
m.yamp = 0;
m.xamp = 0;
m.yamptarg = 0;
m.xamptarg = 0;
m.oldq8 = 0;
m.yspeed = 0;
m.yaccel = 0;
m.xspeed = 0;
m.xaccel = 0;
m.ydir = 0;
m.xdir = 0;
m.volume = 0;
m.ypos = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.ob_r = (0.5+(0.4*Math.sin((m.time*1.324))));
m.ob_g = (0.5+(0.4*Math.cos((m.time*1.371))));
m.ob_b = (0.5+(0.4*Math.sin((2.332*m.time))));
m.ib_r = (0.5+(0.25*Math.sin((m.time*1.424))));
m.ib_g = (0.25+(0.25*Math.cos((m.time*1.871))));
m.ib_b = (1-m.ob_b);
m.volume = (0.15*(((((m.bass+m.bass_att)+m.treb)+m.treb_att)+m.mid)+m.mid_att));
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.5*m.volume)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xaccel = (((m.xdir*m.xamp)-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.dx = (m.xpos*0.05);
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.3*m.volume)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yaccel = (((m.ydir*m.yamp)-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.dy = (m.ypos*0.05);
m.wave_a = 0;
m.q8 = (m.oldq8+(0.0003*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.q7 = (0.003*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps));
m.rot = ((0.4+(1.5*Math.sin((m.time*0.273))))+(0.4*Math.sin(((m.time*0.379)+3))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = ((Math.log((sqrt(2)-m.rad))-0.24)*1);
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
			a : 0.1,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.4,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.9,
			r : 1.0,
			border_g : 1.0,
			rad : 0.55,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.4);
m.x = ((0.5+(0.08*Math.cos((m.time*1.3))))+(0.03*Math.cos((m.time*0.7))));
m.y = ((0.5+(0.08*Math.sin((m.time*1.4))))+(0.03*Math.sin((m.time*0.7))));
m.r = (0.5+(0.5*Math.sin(((m.q8*0.613)+1))));
m.g = (0.5+(0.5*Math.sin(((m.q8*0.763)+2))));
m.b = (0.5+(0.5*Math.sin(((m.q8*0.771)+5))));
m.r2 = (0.5+(0.5*Math.sin(((m.q8*0.635)+4))));
m.g2 = (0.5+(0.5*Math.sin(((m.q8*0.616)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.q8*0.538)+3))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time*0.4;\n' + 'x = 0.5 + 0.08*cos(time*1.3) + 0.03*cos(time*0.7);\n' + 'y = 0.5 + 0.08*sin(time*1.4) + 0.03*sin(time*0.7);\n' + 'r =0.5 + 0.5*sin(q8*0.613 + 1);\n' + 'g = 0.5 + 0.5*sin(q8*0.763 + 2);\n' + 'b = 0.5 + 0.5*sin(q8*0.771 + 5);\n' + 'r2 = 0.5 + 0.5*sin(q8*0.635 + 4);\n' + 'g2 = 0.5 + 0.5*sin(q8*0.616+ 1);\n' + 'b2 = 0.5 + 0.5*sin(q8*0.538 + 3);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
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
			a2 : 0.3,
			r : 1.0,
			border_g : 1.0,
			rad : 0.4,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;
m.tq8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*1.7);
m.x = ((0.5+(0.08*Math.cos((m.time*1.1))))+(0.03*Math.cos((m.time*0.7))));
m.y = ((0.5+(0.08*Math.sin((m.time*1.1))))+(0.03*Math.sin((m.time*0.7))));
m.r = (0.5+(0.5*Math.sin(((m.q8*0.713)+1))));
m.g = (0.5+(0.5*Math.sin(((m.q8*0.563)+2))));
m.b = (0.5+(0.5*Math.sin(((m.q8*0.654)+5))));
m.r2 = (0.5+(0.5*Math.sin(((m.q8*0.885)+4))));
m.g2 = (0.5+(0.5*Math.sin(((m.q8*0.556)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.tq8*0.638)+3))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time*1.7;\n' + 'x = 0.5 + 0.08*cos(time*1.1) + 0.03*cos(time*0.7);\n' + 'y = 0.5 + 0.08*sin(time*1.1) + 0.03*sin(time*0.7);\n' + 'r = 0.5 + 0.5*sin(q8*0.713 + 1);\n' + 'g = 0.5 + 0.5*sin(q8*0.563 + 2);\n' + 'b = 0.5 + 0.5*sin(q8*0.654 + 5);\n' + 'r2 = 0.5 + 0.5*sin(q8*0.885 + 4);\n' + 'g2 = 0.5 + 0.5*sin(q8*0.556+ 1);\n' + 'b2 = 0.5 + 0.5*sin(tq8*0.638 + 3);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
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
			a2 : 0.5,
			r : 1.0,
			border_g : 1.0,
			rad : 0.4,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*1.24);
m.x = ((0.5-(0.08*Math.cos((m.time*1.07))))+(0.03*Math.cos((m.time*0.7))));
m.y = ((0.5-(0.08*Math.sin((m.time*1.33))))+(0.03*Math.sin((m.time*0.7))));
m.g = (0.5+(0.5*Math.sin(((m.q8*0.713)+1))));
m.b = (0.5+(0.5*Math.sin(((m.q8*0.563)+2))));
m.r = (0.5+(0.5*Math.sin(((m.q8*0.654)+5))));
m.r2 = (0.5+(0.5*Math.sin(((m.q8*0.885)+4))));
m.g2 = (0.5+(0.5*Math.sin(((m.q8*0.556)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.q8*0.638)+3))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time*1.24;\n' + 'x = 0.5 - 0.08*cos(time*1.07) + 0.03*cos(time*0.7);\n' + 'y = 0.5 - 0.08*sin(time*1.33) + 0.03*sin(time*0.7);\n' + 'g = 0.5 + 0.5*sin(q8*0.713 + 1);\n' + 'b = 0.5 + 0.5*sin(q8*0.563 + 2);\n' + 'r = 0.5 + 0.5*sin(q8*0.654 + 5);\n' + 'r2 = 0.5 + 0.5*sin(q8*0.885 + 4);\n' + 'g2 = 0.5 + 0.5*sin(q8*0.556+ 1);\n' + 'b2 = 0.5 + 0.5*sin(q8*.638 + 3);'),

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
	'frame_eqs_str' : ('ob_r = 0.5 + 0.4*sin(time*1.324);\n' + 'ob_g = 0.5 + 0.4*cos(time*1.371);\n' + 'ob_b = 0.5+0.4*sin(2.332*time);\n' + 'ib_r = 0.5 + 0.25*sin(time*1.424);\n' + 'ib_g = 0.25 + 0.25*cos(time*1.871);\n' + 'ib_b = 1-ob_b;\n' + 'volume = 0.15*(bass+bass_att+treb+treb_att+mid+mid_att);\n' + 'xamptarg = if(equal(frame%15,0),min(0.5*volume*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xaccel = xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'dx = xpos*0.05;\n' + 'yamptarg = if(equal(frame%15,0),min(0.3*volume*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yaccel = ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'dy = ypos*0.05;\n' + 'wave_a = 0;\n' + 'q8 =oldq8+ 0.0003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 = q8;\n' + 'q7 = 0.003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'rot = 0.4 + 1.5*sin(time*0.273) + 0.4*sin(time*0.379+3);'),
	'pixel_eqs_str' : ('zoom =( log(sqrt(2)-rad) -0.24)*1;'),
};

return pmap;
});
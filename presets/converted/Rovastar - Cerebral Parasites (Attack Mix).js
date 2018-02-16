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
		ib_size : 0.02,
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
		ob_size : 0.02,
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
		rot : 0.0,
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
		rating : 5.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q7 = 0;
m.q8 = 0;
m.oldq8 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.ob_r = (0.5+(0.4*Math.sin((m.time*1.324))));
m.ob_g = (0.5+(0.4*Math.cos((m.time*1.371))));
m.ob_b = (0.5+(0.4*Math.sin((2.332*m.time))));
m.ib_r = (0.5+(0.25*Math.sin((m.time*1.424))));
m.ib_g = (0.25+(0.25*Math.cos((m.time*1.871))));
m.ib_b = (1-m.ob_b);
m.wave_a = 0;
m.q8 = (m.oldq8+(0.0003*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.q7 = (0.002*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps));
m.dx = (m.q7*1.0542);
m.dy = (m.q7*1.187);
m.monitor = m.q7;
m.dx = 0.5;
m.dy = 0.5;
m.warp = 0;
m.zoom = (0.1*Math.sin(m.q8));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = ((m.zoom+(0.05*m.q7))+(Math.log((sqrt(2)-m.rad))-0.2));
m.rot = Math.sin((1.156*m.q8));
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
			a : 0.6,
			enabled : 1.0,
			b : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			g2 : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.2,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q7 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*1.24);
m.x = ((0.5+(0.08*Math.cos((m.time*1.21))))+(0.03*Math.cos((m.time*0.64))));
m.y = ((0.5+(0.08*Math.sin((m.time*1.41))))+(0.03*Math.sin((m.time*0.8))));
m.r = (m.q7+(0.5*Math.sin(((m.time*0.713)+1))));
m.g = (0.5+(0.5*Math.sin(((m.time*0.563)+2))));
m.b = (0.5+(0.5*Math.sin(((m.time*0.654)+5))));
m.r2 = (0.5+(0.5*Math.sin(((m.time*0.885)+4))));
m.g2 = (0.5+(0.5*Math.sin(((m.time*0.556)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.time*0.638)+3))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time*1.24;\n' + 'x = 0.5 + 0.08*cos(time*1.21) + 0.03*cos(time*0.64);\n' + 'y = 0.5 + 0.08*sin(time*1.41) + 0.03*sin(time*0.8);\n' + 'r = q7 + 0.5*sin(time*0.713 + 1);\n' + 'g = 0.5 + 0.5*sin(time*0.563 + 2);\n' + 'b = 0.5 + 0.5*sin(time*0.654 + 5);\n' + 'r2 = 0.5 + 0.5*sin(time*0.885 + 4);\n' + 'g2 = 0.5 + 0.5*sin(time*0.556+ 1);\n' + 'b2 = 0.5 + 0.5*sin(time*0.638 + 3);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			g2 : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.2,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q7 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*1.7);
m.x = ((0.5+(0.08*Math.cos((m.time*1.1))))+(0.03*Math.cos((m.time*0.7))));
m.y = ((0.5+(0.08*Math.sin((m.time*1.1))))+(0.03*Math.sin((m.time*0.7))));
m.r = (m.q7+(0.5*Math.sin(((m.time*0.713)+1))));
m.g = (0.5+(0.5*Math.sin(((m.time*0.563)+2))));
m.b = (0.5+(0.5*Math.sin(((m.time*0.654)+5))));
m.r2 = (0.5+(0.5*Math.sin(((m.time*0.885)+4))));
m.g2 = (0.5+(0.5*Math.sin(((m.time*0.556)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.time*0.638)+3))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time*1.7;\n' + 'x = 0.5 + 0.08*cos(time*1.1) + 0.03*cos(time*0.7);\n' + 'y = 0.5 + 0.08*sin(time*1.1) + 0.03*sin(time*0.7);\n' + 'r = q7 + 0.5*sin(time*0.713 + 1);\n' + 'g = 0.5 + 0.5*sin(time*0.563 + 2);\n' + 'b = 0.5 + 0.5*sin(time*0.654 + 5);\n' + 'r2 = 0.5 + 0.5*sin(time*0.885 + 4);\n' + 'g2 = 0.5 + 0.5*sin(time*0.556+ 1);\n' + 'b2 = 0.5 + 0.5*sin(time*0.638 + 3);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			g2 : 1.0,
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
	'frame_eqs_str' : ('ob_r = 0.5 + 0.4*sin(time*1.324);\n' + 'ob_g = 0.5 + 0.4*cos(time*1.371);\n' + 'ob_b = 0.5+0.4*sin(2.332*time);\n' + 'ib_r = 0.5 + 0.25*sin(time*1.424);\n' + 'ib_g = 0.25 + 0.25*cos(time*1.871);\n' + 'ib_b = 1-ob_b;\n' + 'wave_a = 0;\n' + 'q8 =oldq8+ 0.0003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 = q8;\n' + 'q7 = 0.002*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'dx = q7*1.0542;\n' + 'dy = q7*1.187;\n' + 'monitor =q7;\n' + 'dx = 0.5;\n' + 'dy=0.5;\n' + 'warp=0;\n' + 'zoom=  0.1*sin(q8);'),
	'pixel_eqs_str' : ('zoom =zoom+0.05*q7+( log(sqrt(2)-rad) -0.2);\n' + 'rot = sin(1.156*q8);'),
};

return pmap;
});
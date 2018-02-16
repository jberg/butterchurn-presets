define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 0.65,
		ib_g : 0.85,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.01,
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
		ob_size : 0.015,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
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
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.018,
		decay : 0.9,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.65,
		mv_r : 0.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.oldq7 = 0;
m.oldq8 = 0;
m.q8 = 0;
m.q7 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (0.5+(0.2*(m.bass-1)));
m.wave_g = (0.5+(0.2*(m.mid-1.2)));
m.wave_b = (0.5+(0.2*(m.treb-0.5)));
m.warp = 0;
m.ob_r = (1-m.wave_r);
m.ob_g = (1-m.wave_g);
m.ob_b = (1-m.wave_b);
m.ib_r = (0.75+(0.25*Math.sin((m.time*0.4123))));
m.ib_g = (0.25+(0.25*Math.cos((m.time*0.87))));
m.ib_b = (0.5+(0.5*Math.sin((1.23*m.time))));
m.q8 = (m.oldq8+(0.003*(((((div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 5),m.fps))+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 4),m.fps))+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 3),m.fps))+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 2),m.fps))+div(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)),m.fps))));
m.oldq8 = m.q8;
m.q7 = (m.oldq7+(0.001*div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 7),m.fps)));
m.oldq7 = m.q7;
m.wave_a = 0;
m.dy = (0.5+(0.01*Math.sin((0.786*m.q7))));
m.dx = (0.1*Math.sin((1.143*m.q8)));
m.q6 = (15+(0.1*(((((div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 5),m.fps))+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 4),m.fps))+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 3),m.fps))+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 2),m.fps))+div(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)),m.fps))));
		m.rkeys = ['dy'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dy = (m.dy+(0.008*Math.cos((((m.x-0.5)-(0.1*Math.sin(m.q7)))*m.q6))));
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
			r2 : 1.0,
			a : 0.7,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 1.884956,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.6,
			tex_zoom : 0.424973,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.621747,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q7 = 0;
m.a1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.a = 1;
m.a1 = 1;
m.x = (0.5+(0.1*Math.sin((m.q7*0.986))));
m.y = (0.5+(0.1*Math.sin((m.q7*0.846))));
m.tex_ang = (3.1515+(3.1415*Math.sin((m.q7*0.4521))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a =1;\n' + 'a1=1;\n' + 'x = 0.5 + 0.1*sin(q7*0.986);\n' + 'y = 0.5 + 0.1*sin(q7*0.846);\n' + 'tex_ang = 3.1515 + 3.1415*sin(q7*0.4521);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.7,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 1.884956,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.6,
			tex_zoom : 0.424973,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.621747,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q7 = 0;
m.a1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.a = 1;
m.a1 = 1;
m.x = (0.5+(0.1*Math.sin((m.q7*0.986))));
m.y = (0.5+(0.1*Math.sin((m.q7*0.846))));
m.tex_ang = (3.1515+(3.1415*Math.sin((m.q7*0.4521))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a =1;\n' + 'a1=1;\n' + 'x = 0.5 + 0.1*sin(q7*0.986);\n' + 'y = 0.5 + 0.1*sin(q7*0.846);\n' + 'tex_ang = 3.1515 + 3.1415*sin(q7*0.4521);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.7,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 1.884956,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.6,
			tex_zoom : 0.424973,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.621747,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q7 = 0;
m.a1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.a = 1;
m.a1 = 1;
m.x = (0.5+(0.1*Math.sin((m.q7*0.986))));
m.y = (0.5+(0.1*Math.sin((m.q7*0.846))));
m.tex_ang = (3.1515+(3.1415*Math.sin((m.q7*0.4521))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a =1;\n' + 'a1=1;\n' + 'x = 0.5 + 0.1*sin(q7*0.986);\n' + 'y = 0.5 + 0.1*sin(q7*0.846);\n' + 'tex_ang = 3.1515 + 3.1415*sin(q7*0.4521);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.7,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 1.884956,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.6,
			tex_zoom : 0.424973,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.621747,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q7 = 0;
m.a1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.a = 1;
m.a1 = 1;
m.x = (0.5+(0.1*Math.sin((m.q7*0.986))));
m.y = (0.5+(0.1*Math.sin((m.q7*0.846))));
m.tex_ang = (3.1515+(3.1415*Math.sin((m.q7*0.4521))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a =1;\n' + 'a1=1;\n' + 'x = 0.5 + 0.1*sin(q7*0.986);\n' + 'y = 0.5 + 0.1*sin(q7*0.846);\n' + 'tex_ang = 3.1515 + 3.1415*sin(q7*0.4521);'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('q8 =0;\n' + 'q7=0;'),
	'frame_eqs_str' : ('wave_r = 0.5+ 0.2*(bass-1);\n' + 'wave_g = 0.5+ 0.2*(mid-1.2);\n' + 'wave_b = 0.5+ 0.2*(treb-.5);\n' + 'warp =0;\n' + 'ob_r = 1-wave_r;\n' + 'ob_g = 1-wave_g;\n' + 'ob_b = 1-wave_b;\n' + 'ib_r = 0.75 + 0.25*sin(time*0.4123);\n' + 'ib_g = 0.25 + 0.25*cos(time*0.87);\n' + 'ib_b = 0.5+0.5*sin(1.23*time);\n' + 'q8 = oldq8 +0.003*(((pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,5)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,4)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,3)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,2)/fps) +(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att)/fps));\n' + 'oldq8 = q8;\n' + 'q7 =oldq7+ 0.001*(pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,7)/fps);\n' + 'oldq7 = q7;\n' + 'wave_a =0;\n' + 'dy = 0.5 + 0.01*(sin(0.786*q7));\n' + 'dx = 0.1*sin(1.143*q8);\n' + 'q6 = 15+0.1*(((pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,5)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,4)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,3)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,2)/fps) +(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att)/fps));'),
	'pixel_eqs_str' : ('dy=dy+0.008*cos((x-0.5 - 0.1*sin(q7))*(q6));'),
};

return pmap;
});
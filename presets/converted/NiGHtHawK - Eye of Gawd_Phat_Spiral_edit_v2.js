define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.34,
		mv_x : 64.0,
		warpscale : 0.987499,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 0.572643,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.013213,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.01218,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.34,
		mv_b : 0.35,
		echo_zoom : 0.996176,
		ob_size : 0.5,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.35,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99553,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.08,
		cx : 0.5,
		dy : -0.015,
		ob_a : 0.15,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.5,
		invert : 0.0,
		rot : -0.7,
		wave_thick : 0.0,
		modwavealphaend : 1.300001,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.0033,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.34,
		mv_r : 0.35,
		rating : 5.0,
		modwavealphastart : 0.24,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.dx = (0.050+(((Math.sin(m.time)*0.5)+0.5)*0.1));
m.zoom = 0.99;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.61,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 2.279692,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.7,
			thick : 1.0,
			sep : 16.0,
			},
		'init_eqs' : function(m) {
m.t7 = 0;
m.t8 = 0;
m.t8 = m.time;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t7 = m.t8;
m.t8 = m.time;
		return m;
	},
		'point_eqs' : function(m) {
m.x = (0.5+Math.sin(((m.sample*13)+(m.time*0.1))));
m.y = ((0.2+Math.sin((m.sample*90)))+(0.02*Math.sin((m.time*4.5))));
m.b = Math.abs(Math.sin(((m.sample*100)+m.time)));
m.r = Math.abs(Math.sin(((m.sample*510)+m.time)));
m.g = Math.abs(Math.sin(((m.sample*200)+m.time)));
		return m;
	},
		'init_eqs_str' : ('t8 = time;'),
		'frame_eqs_str' : ('t7 = t8;\n' + 't8 = time;'),
		'point_eqs_str' : ('x = 0.5 + sin(sample*13 + time*0.1);\n' + 'y = 0.2 + sin(sample*90) + 0.02*sin(time*4.5);\n' + 'b=abs(sin(sample*100+time));\n' + 'r=abs(sin(sample*510+time));\n' + 'g=abs(sin(sample*200+time));'),

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
			border_a : 0.12,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.23,
			r : 1.0,
			border_g : 1.0,
			rad : 0.298779,
			x : 0.5,
			y : 0.7,
			ang : 0.0,
			sides : 5.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+((0.0*m.bass_att)*Math.sin(m.time)));
m.b = Math.abs(Math.sin(((m.treb*100)+m.time)));
m.r = Math.abs(Math.sin(((m.bass*510)+m.time)));
m.g = Math.abs(Math.sin(((m.mid*200)+m.time)));
m.ang = (m.time*0.8);
m.rad = (m.rad+(0.01*m.bass));
m.b2 = Math.abs(Math.sin(((m.treb*10)+m.time)));
m.r2 = Math.abs(Math.sin(((m.bass*50)+m.time)));
m.g2 = Math.abs(Math.sin(((m.mid*20)+m.time)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5+0.0*bass_att*sin(time);\n' + 'b=abs(sin(treb*100+time));\n' + 'r=abs(sin(bass*510+time));\n' + 'g=abs(sin(mid*200+time));\n' + 'ang = time*0.8;\n' + 'rad = rad+.01*bass;\n' + 'b2=abs(sin(treb*10+time));\n' + 'r2=abs(sin(bass*50+time));\n' + 'g2=abs(sin(mid*20+time));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 3.141593,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 2.130193,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.444842,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = ((Math.sin(m.time)*0.5)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=(sin(time)*0.5+0.5);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.5,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 3.141593,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.220187,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.491381,
			x : 0.9,
			y : 0.5,
			ang : 0.0,
			sides : 14.0,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.451117,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.221671,
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
m.tex_ang = (Math.sin(div(m.time,4))*6.28);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=sin(time/4)*6.28;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp =0;\n' + 'dx=0.050+((sin(time)*0.5+0.5)*0.1);\n' + 'zoom=.99;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 16.2174,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 4.574798,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.04,
		warp : 0.999999,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.503744,
		mv_dx : -0.002,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		wave_smoothing : 0.75,
		warpanimspeed : 9.8608,
		wave_dots : 1.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.4,
		decay : 1.0,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q4 = 0;
m.myx = 0;
m.myy = 0;
m.movement = 0;
m.q4 = (0.249+(0.5*(rand(100)*0.01)));
m.q5 = (0.249+(0.5*(rand(100)*0.01)));
m.q6 = (0.249+(0.5*(rand(100)*0.01)));
		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.movement = (m.movement+(0.5*div(((m.bass+m.bass_att)+(0.075*pow(((m.bass+(0.6*m.bass_att))+(0.2*m.treb_att)), 3))),m.fps)));
m.movement = ifcond(above(m.movement, 10000), 0, m.movement);
m.ob_b = (m.q4+(0.25*Math.sin((m.movement*3.816))));
m.ob_g = (m.q4+(0.25*Math.sin((m.movement*0.744))));
m.ob_r = (m.q4+(0.25*Math.sin((m.movement*0.707))));
m.wrap = above((m.bass+m.bass_att), 3);
m.decay = 1;
m.rot = 0;
m.zoom = 0.98;
m.mv_r = 0;
m.mv_g = 0;
m.mv_b = 0;
m.mv_dy = (0.03*Math.sin((m.movement*0.34)));
m.mv_dx = (0.035*((Math.sin((m.movement*0.217))+Math.cos((m.movement*0.413)))+Math.sin((m.movement*0.311))));
m.warp = 0;
m.dx = (0.01*Math.sin((m.movement*5)));
m.dy = (0.0005*(m.bass+m.bass_att));
		m.rkeys = ['dy','dx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.myy = (m.y-0.250025);
m.myx = (m.x-0.5);
m.dx = (m.dx+(2*((2*m.myx)*m.myy)));
m.dy = (m.dy+(2*((m.myy*m.myy)-(m.myx*m.myx))));
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
			rad : 0.150375,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = ['tex_zoom'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.05*Math.sin((m.q1*0.456))));
m.y = (0.5+(0.05*Math.sin((m.q1*0.56))));
m.tex_zoom = (m.tex_zoom+(0.5*Math.sin((m.q1*0.345))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.05*sin(q1*0.456);\n' + 'y = 0.5 + 0.05*sin(q1*0.56);\n' + 'tex_zoom = tex_zoom + 0.5*sin(q1*0.345);'),

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
	'init_eqs_str' : ('q4 = 0.249+0.5*(rand(100)*0.01);\n' + 'q5 = 0.249+0.5*(rand(100)*0.01);\n' + 'q6 = 0.249+0.5*(rand(100)*0.01);'),
	'frame_eqs_str' : ('wave_a =0;\n' + 'movement =movement + 0.5*(((bass+bass_att + 0.075*pow((bass+0.6*bass_att+0.2*treb_att),3)))/fps);\n' + 'movement = if(above(movement,10000), 0, movement);\n' + 'ob_b = q4+0.25*sin(movement*3.816);\n' + 'ob_g = q4+0.25*sin(movement*0.744);\n' + 'ob_r = q4+0.25*sin(movement*0.707);\n' + 'wrap = above(bass+bass_att,3);\n' + 'decay=1;\n' + 'rot=0;\n' + 'zoom =0.98;\n' + 'mv_r = 0;\n' + 'mv_g = 0;\n' + 'mv_b =0;\n' + 'mv_dy = 0.03*sin(movement*0.34);\n' + 'mv_dx = 0.035*(sin(movement*0.217)+cos(movement*0.413)+sin(movement*0.311));\n' + 'warp=0;\n' + 'dx =0.01*sin(movement*5);\n' + 'dy =0.0005*(bass+bass_att);'),
	'pixel_eqs_str' : ('myy = y-(0.250025);\n' + 'myx = x-0.5;\n' + 'dx =dx+ 2*(2*myx*myy);\n' + 'dy =dy+ 2*((myy*myy) - (myx*myx));'),
};

return pmap;
});
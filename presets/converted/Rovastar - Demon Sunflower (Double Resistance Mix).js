define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.85,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 12.0,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.605,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.0,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 1.0,
		mv_b : 1.0,
		echo_zoom : 0.999609,
		ob_size : 0.01,
		wave_smoothing : 0.7,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.064,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.99,
		wave_a : 0.8,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.oldq1 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.ib_r = (0.5+(0.499*((0.60*Math.sin((0.933*m.time)))+(0.40*Math.sin((1.045*m.time))))));
m.ib_g = (0.5+(0.499*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((0.956*m.time))))));
m.ib_b = (0.5+(0.499*((0.60*Math.sin((0.910*m.time)))+(0.40*Math.sin((0.920*m.time))))));
m.wave_a = 0;
m.decay = 1;
m.zoom = 1;
m.rot = 0;
m.warp = 0;
m.q1 = (m.oldq1+(0.005*(((m.bass+m.bass_att)+(m.bass*m.bass_att))-2)));
m.oldq1 = (below(m.q1, 30000)*m.q1);
m.monitor = m.q1;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = ((0.005*(m.bass+m.bass_att))*Math.tan(((Math.sin((sqrt(2)-m.rad))*5)+((m.ang*5)*Math.sin(m.q1)))));
m.dy = ((-0.005*(m.bass+m.bass_att))*Math.tan(((Math.sin((sqrt(2)-m.rad))*5)+((-m.ang*5)*Math.sin(m.q1)))));
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
			a : 0.5,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 0.0,
			rad : 0.400312,
			x : 0.5,
			y : 0.5,
			ang : 1.69646,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = m.q1;
m.x = ((0.5+(0.1*Math.sin((m.q1*1.432))))+(0.1*Math.sin((m.q1*0.342))));
m.y = ((0.5+(0.1*Math.sin((m.q1*1.311))))+(0.1*Math.sin((m.q1*0.394))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = q1;\n' + 'x = 0.5 + 0.1*sin(q1*1.432)+0.1*sin(q1*0.342);\n' + 'y= 0.5 + 0.1*sin(q1*1.311)+0.1*sin(q1*0.394);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.5,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 1.0,
			rad : 0.400312,
			x : 0.5,
			y : 0.5,
			ang : 1.69646,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.q1+3.1415);
m.x = ((0.5+(0.1*Math.sin((m.q1*1.432))))+(0.1*Math.sin((m.q1*0.342))));
m.y = ((0.5+(0.1*Math.sin((m.q1*1.311))))+(0.1*Math.sin((m.q1*0.394))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = q1 + 3.1415;\n' + 'x = 0.5 + 0.1*sin(q1*1.432)+0.1*sin(q1*0.342);\n' + 'y= 0.5 + 0.1*sin(q1*1.311)+0.1*sin(q1*0.394);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.5,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 0.5,
			rad : 0.400312,
			x : 0.5,
			y : 0.5,
			ang : 1.69646,
			sides : 3.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.q1+(3.1415*0.5));
m.x = ((0.5+(0.1*Math.sin((m.q1*1.432))))+(0.1*Math.sin((m.q1*0.342))));
m.y = ((0.5+(0.1*Math.sin((m.q1*1.311))))+(0.1*Math.sin((m.q1*0.394))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = q1+ 3.1415*0.5;\n' + 'x = 0.5 + 0.1*sin(q1*1.432)+0.1*sin(q1*0.342);\n' + 'y= 0.5 + 0.1*sin(q1*1.311)+0.1*sin(q1*0.394);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.5,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 1.0,
			rad : 0.400312,
			x : 0.5,
			y : 0.5,
			ang : 1.69646,
			sides : 3.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.q1-(3.1415*0.5));
m.x = ((0.5+(0.1*Math.sin((m.q1*1.432))))+(0.1*Math.sin((m.q1*0.342))));
m.y = ((0.5+(0.1*Math.sin((m.q1*1.311))))+(0.1*Math.sin((m.q1*0.394))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = q1 - 3.1415*0.5;\n' + 'x = 0.5 + 0.1*sin(q1*1.432)+0.1*sin(q1*0.342);\n' + 'y= 0.5 + 0.1*sin(q1*1.311)+0.1*sin(q1*0.394);'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('ib_r = 0.5 + 0.499*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );\n' + 'ib_g = 0.5 + 0.499*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );\n' + 'ib_b = 0.5 + 0.499*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );\n' + 'wave_a=0;\n' + 'decay =1;\n' + 'zoom =1;\n' + 'rot=0;\n' + 'warp=0;\n' + 'q1 = oldq1+0.005*(bass+bass_att+(bass*bass_att)-2);\n' + 'oldq1 = below(q1,30000)*q1;\n' + 'monitor =q1;'),
	'pixel_eqs_str' : ('dx=0.005*(bass+bass_att)*tan((sin(sqrt(2)-rad))*5+(ang*5*sin(q1)));\n' + 'dy=-0.005*(bass+bass_att)*tan((sin(sqrt(2)-rad))*5+(-ang*5*sin(q1)));'),
};

return pmap;
});
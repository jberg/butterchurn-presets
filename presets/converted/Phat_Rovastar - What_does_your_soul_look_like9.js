define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 2.853,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 1.605,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.990099,
		ob_r : 0.0,
		sy : 0.990099,
		ib_size : 0.005,
		warp : 0.0,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 1.0,
		mv_b : 0.0,
		echo_zoom : 0.999609,
		ob_size : 0.01,
		wave_smoothing : 0.7,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
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
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.8,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 5.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.oldq1 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.ib_r = (0.5+(5.499*((0.60*Math.sin(div((0.933*m.time),3)))+(0.40*Math.sin(div((1.045*m.time),3))))));
m.ib_g = (0.5+(5*((0.60*Math.sin(div((0.900*m.time),3)))+(0.40*Math.sin(div((0.956*m.time),3))))));
m.ib_b = (0.5+(5.499*((0.60*Math.sin(div((0.910*m.time),3)))+(0.40*Math.sin(div((0.920*m.time),3))))));
m.wave_a = 0;
m.decay = 1;
m.zoom = -1;
m.rot = 0;
m.warp = 0;
m.q1 = (m.oldq1+(0.005*(((m.bass+m.bass_att)+(m.bass*m.bass_att))-1)));
m.oldq1 = (below(m.q1, 30000)*m.q1);
m.monitor = m.q1;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = ((((0.001*((m.bass*m.bass)+m.bass_att))*Math.sin(((Math.sin((sqrt(4)-m.rad))*5)+((m.rad*5)*Math.sin(m.q1)))))*m.y)*m.ang);
m.dy = (((((0.001*((m.bass*m.bass)+m.bass_att))*Math.cos(((Math.sin((sqrt(4)-m.rad))*5)+((-m.rad*5)*Math.sin(m.q1)))))*m.x)*m.rad)*m.ang);
m.rot = div((Math.sin(div(m.time,(m.rad*0.5)))*m.x),div(div(div(Math.atan(div(m.time,m.rad)),div(m.ang,3)),m.x),(((Math.sin(div(m.time,6))*0.5)+0.5)*m.y)));
m.warp = (div((Math.tan(div(m.time,10))*m.y),div(div(Math.atan(div(m.time,6)),m.rad),m.y))*3);
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
			enabled : 1.0,
			b : 1.0,
			tex_ang : 1.633629,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.932715,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.503256,
			x : 0.5,
			y : 0.5,
			ang : 1.69646,
			sides : 13.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.a2 = (((Math.cos(m.time)*0.5)+0.5)*0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a2=(cos(time)*0.5+0.5)*0.1;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.5,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 4.71239,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.344833,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.232284,
			x : 0.5,
			y : 0.5,
			ang : 2.324779,
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
m.a2 = ((Math.sin(div(m.time,4))*0.5)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = q1 + 3.1415;\n' + 'a2=(sin(time/4)*0.5+0.5);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.5,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.741923,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 0.5,
			rad : 0.503257,
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
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.671653,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 1.0,
			rad : 0.503257,
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
	'frame_eqs_str' : ('ib_r = 0.5 + (5.499*( 0.60*sin(0.933*time/3) + 0.40*sin(1.045*time/3) ));\n' + 'ib_g = 0.5 + (5*( 0.60*sin(0.900*time/3) + 0.40*sin(0.956*time/3) ));\n' + 'ib_b = 0.5 + (5.499*( 0.60*sin(0.910*time/3) + 0.40*sin(0.920*time/3) ));\n' + 'wave_a=0;\n' + 'decay =1;\n' + 'zoom =-1;\n' + 'rot=0;\n' + 'warp=0;\n' + 'q1 = oldq1+0.005*(bass+bass_att+(bass*bass_att)-1);\n' + 'oldq1 = below(q1,30000)*q1;\n' + 'monitor =q1;'),
	'pixel_eqs_str' : ('dx=0.001*(bass*bass+bass_att)*sin((sin(sqrt(4)-rad))*5+(rad*5*sin(q1)))*y*ang;\n' + 'dy=0.001*(bass*bass+bass_att)*cos((sin(sqrt(4)-rad))*5+(-rad*5*sin(q1)))*x*rad*ang;\n' + 'rot=(sin(time/(rad*0.5))*x)/(atan(time/rad)/(ang/3)/x/((sin(time/6)*0.5+0.5)*y));\n' + 'warp=(tan(time/10)*y)/(atan(time/6)/rad/y)*3;'),
};

return pmap;
});
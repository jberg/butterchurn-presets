define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.993,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.634243,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 0.999666,
		ob_r : 1.0,
		sy : 0.9999,
		b3x : 1.0,
		ib_size : 0.015,
		b2x : 1.0,
		warp : 1.56E-4,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.4,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.1,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.36,
		zoom : 1.00496,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.15,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.5,
		decay : 0.98,
		wave_a : 0.608039,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.dist = 0;
m.q8 = 0;
m.oldq8 = 0;
m.mult = 0;
m.du = 0;
m.dv = 0;
m.ang2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.ob_r = (0.7-(0.3*((0.5*Math.sin((m.time*0.701)))+(0.3*Math.cos((m.time*0.438))))));
m.ob_g = (0.5-(0.48*Math.sin((m.time*1.324))));
m.ob_b = (0.5-(0.48*Math.cos((m.time*1.316))));
m.wave_r = (m.wave_r+(0.350*((0.60*Math.sin((0.980*m.time)))+(0.40*Math.sin((1.047*m.time))))));
m.wave_g = (m.wave_g+(0.350*((0.60*Math.sin((0.835*m.time)))+(0.40*Math.sin((1.081*m.time))))));
m.wave_b = (m.wave_b+(0.350*((0.60*Math.sin((0.814*m.time)))+(0.40*Math.sin((1.011*m.time))))));
m.mv_r = m.wave_r;
m.mv_b = m.wave_b;
m.mv_g = m.wave_g;
m.q8 = (m.oldq8+ifcond(above((m.bass+m.bass_att), 2.8), (m.q8+(0.005*pow((m.bass+m.bass_att), 5))), 0));
m.oldq8 = m.q8;
m.monitor = Math.sin(m.q8);
m.q1 = (0.62*((0.60*Math.sin((0.374*m.q8)))+(0.40*Math.sin((0.294*m.q8)))));
m.q2 = (0.62*((0.60*Math.sin((0.393*m.q8)))+(0.40*Math.sin((0.223*m.q8)))));
m.q3 = (0.62*((0.60*Math.sin((0.174*-m.q8)))+(0.40*Math.sin((0.364*m.q8)))));
m.q4 = (0.62*((0.60*Math.sin((0.234*m.q8)))+(0.40*Math.sin((0.271*-m.q8)))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.du = (((m.x*2)-1)-m.q1);
m.dv = (((m.y*2)-1)-m.q2);
m.dist = sqrt(((m.du*m.du)+(m.dv*m.dv)));
m.ang2 = Math.atan2(m.du, m.dv);
m.mult = div(0.008,(m.dist+0.4));
m.dx = (m.mult*Math.sin((m.ang2-1.5)));
m.dy = (m.mult*Math.cos((m.ang2-1.5)));
m.du = (((m.x*2)-1)-m.q3);
m.dv = (((m.y*2)-1)-m.q4);
m.dist = sqrt(((m.du*m.du)+(m.dv*m.dv)));
m.ang2 = Math.atan2(m.du, m.dv);
m.mult = div((0.008*Math.sin(m.q8)),(m.dist+0.4));
m.dx = (m.dx+(m.mult*Math.sin((m.ang2+1.5))));
m.dy = (m.dy+(m.mult*Math.cos((m.ang2+1.5))));
m.dx = (m.dx*m.aspectx);
m.dy = (m.dy*m.aspecty);
m.rot = ((0+Math.abs((3*m.dx)))-Math.abs((3*m.dy)));
m.zoom = ((1+Math.abs((3*m.dx)))-Math.abs((3*m.dy)));
m.zoomexp = (1+Math.abs(((300*m.dx)-(300*m.dy))));
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
	'frame_eqs_str' : ('ob_r = 0.7 - 0.3*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));\n' + 'ob_g = 0.5- 0.48*sin(time*1.324);\n' + 'ob_b = 0.5 - 0.48*cos(time*1.316);\n' + 'wave_r = wave_r + 0.350*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );\n' + 'wave_g = wave_g + 0.350*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );\n' + 'wave_b = wave_b + 0.350*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );\n' + 'mv_r = wave_r;\n' + 'mv_b = wave_b;\n' + 'mv_g = wave_g;\n' + 'q8 = oldq8+if(above(bass+bass_att,2.8),q8+0.005*pow((bass+bass_att),5),0);\n' + 'oldq8 = q8;\n' + 'monitor = sin(q8);\n' + 'q1 = 0.62*( 0.60*sin(0.374*q8) + 0.40*sin(0.294*q8) );\n' + 'q2 = 0.62*( 0.60*sin(0.393*q8) + 0.40*sin(0.223*q8) );\n' + 'q3 = 0.62*( 0.60*sin(0.174*-q8) + 0.40*sin(0.364*q8) );\n' + 'q4 = 0.62*( 0.60*sin(0.234*q8) + 0.40*sin(0.271*-q8) );'),
	'pixel_eqs_str' : ('du = x*2-1 - q1;\n' + 'dv = y*2-1 - q2;\n' + 'dist = sqrt(du*du+dv*dv);\n' + 'ang2 = atan2(du,dv);\n' + 'mult = 0.008/(dist+0.4);\n' + 'dx = mult*sin(ang2-1.5);\n' + 'dy = mult*cos(ang2-1.5);\n' + 'du = x*2-1 - q3;\n' + 'dv = y*2-1 - q4;\n' + 'dist = sqrt(du*du+dv*dv);\n' + 'ang2 = atan2(du,dv);\n' + 'mult = 0.008*sin(q8)/(dist+0.4);\n' + 'dx = dx + mult*sin(ang2+1.5);\n' + 'dy = dy + mult*cos(ang2+1.5);\n' + 'dx = dx*aspectx;\n' + 'dy = dy*aspecty;\n' + 'rot =0+abs(3* dx) - abs(3*dy);\n' + 'zoom =1+abs(3* dx) - abs(3*dy);\n' + 'zoomexp = 1 + abs((300* dx) - (300*dy));'),
};

return pmap;
});
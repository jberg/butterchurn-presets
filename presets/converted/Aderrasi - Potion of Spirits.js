define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.42,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 6.4,
		warpscale : 3.209168,
		brighten : 0.0,
		mv_y : 4.8,
		wave_scale : 0.325446,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.000158,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.999823,
		ob_size : 0.005,
		wave_smoothing : 0.9,
		warpanimspeed : 2.630064,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 0.5,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001185,
		ob_g : 0.0,
		ib_a : 0.1,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 5.0,
		modwavealphastart : 0.5,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.tg3 = 0;
m.six = 0;
m.dx_r = 0;
m.dy_r = 0;
m.thresh = 0;
m.tg1 = 0;
m.tg2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (0.5+(0.5*Math.sin((1.6*m.time))));
m.wave_g = (0.5+(0.5*Math.sin((4.1*m.time))));
m.wave_b = (-1+(((1-m.wave_r)+1)-m.wave_g));
m.warp = 2;
m.ob_r = (m.ob_r+(m.wave_b*above(Math.sin((0.1*m.time)), 0)));
m.ob_b = (m.ob_b+(m.wave_g*above(Math.sin((0.1*m.time)), 0)));
m.ob_g = (m.ob_g+(m.wave_r*above(Math.sin((0.1*m.time)), 0)));
m.ob_r = (m.ob_r+(m.wave_g*below(Math.sin((0.1*m.time)), 0)));
m.ob_b = (m.ob_b+(m.wave_r*below(Math.sin((0.1*m.time)), 0)));
m.ob_g = (m.ob_g+(m.wave_b*below(Math.sin((0.1*m.time)), 0)));
		m.rkeys = ['tg3','dx_r','dy_r','zoom','dx','dy','rot','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.05)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.056)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.tg1 = Math.abs(Math.sin(m.time));
m.tg2 = ((((22*above(m.tg1, 0.75))+(12*below(m.tg1, 0.25)))+((18*above(m.tg1, 0.25))*below(m.tg1, 0.5)))+((12*above(m.tg1, 0.5))*below(m.tg1, 0.75)));
m.tg3 = ifcond(equal(m.thresh, 2), m.tg2, m.tg3);
m.six = Math.sin(m.x);
m.dx = (m.dx+((m.dx_r*Math.sin(Math.abs((m.tg3*m.y))))*Math.sin(m.time)));
m.dy = (m.dy+((m.dy_r*Math.sin(Math.abs((m.tg3*m.x))))*Math.cos(m.time)));
m.dx = (m.dx+((m.dx_r*pow(m.rad, (m.y*2)))*Math.sin(m.time)));
m.dy = (m.dy+((m.dy_r*pow(m.rad, (m.x*2)))*Math.sin(m.time)));
m.zoom = (m.zoom-((0.0825*pow(m.rad, (m.x*6)))*Math.cos((m.ang*6))));
m.rot = (m.rot-((0.0525*(((0.75*Math.sin((1.25*m.time)))*pow(m.rad, m.x))*Math.sin((1.45*m.time))))*Math.sin(m.time)));
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
	'frame_eqs_str' : ('wave_r = 0.5 + 0.5*sin(1.6*time);\n' + 'wave_g = 0.5 + 0.5*sin(4.1*time);\n' + 'wave_b = -1 + (1-wave_r + 1-wave_g);\n' + 'warp = 2;\n' + 'ob_r = ob_r+wave_b*above(sin(0.1*time),0);\n' + 'ob_b = ob_b+wave_g*above(sin(0.1*time),0);\n' + 'ob_g = ob_g+wave_r*above(sin(0.1*time),0);\n' + 'ob_r = ob_r+wave_g*below(sin(0.1*time),0);\n' + 'ob_b = ob_b+wave_r*below(sin(0.1*time),0);\n' + 'ob_g = ob_g+wave_b*below(sin(0.1*time),0);'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.05*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.056*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'tg1 = abs(sin(time));\n' + 'tg2 = 22*above(tg1,0.75) + 12*below(tg1,0.25) + 18*above(tg1,0.25)*below(tg1,0.5)+12*above(tg1,0.5)*below(tg1,0.75);\n' + 'tg3 = if(equal(thresh,2),tg2,tg3);\n' + 'six = sin(x);\n' + 'dx = dx + dx_r*sin(abs(tg3*y))*sin(time);\n' + 'dy = dy + dy_r*sin(abs(tg3*x))*cos(time);\n' + 'dx = dx + dx_r*pow(rad,y*2)*sin(time);\n' + 'dy = dy + dy_r*pow(rad,x*2)*sin(time);\n' + 'zoom = zoom - 0.0825*pow(rad,x*6)*cos(ang*6);\n' + 'rot = rot - 0.0525*(0.75*sin(1.25*time)*pow(rad,x)*sin(1.45*time))*sin(time);'),
};

return pmap;
});
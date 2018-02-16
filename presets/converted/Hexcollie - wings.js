define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.766487,
		brighten : 0.0,
		mv_y : 19.200027,
		wave_scale : 0.01,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.000158,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 0.0,
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
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : -1.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.1,
		wave_b : 0.65,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 2.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.six = 0;
m.dx_r = 0;
m.dy_r = 0;
m.thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = ((m.wave_r+(0.35*Math.sin((1.14*m.time))))+(0.16*Math.sin((1.5*m.time))));
m.wave_g = ((m.wave_g+(0.36*Math.sin((1.27*m.time))))+(0.15*Math.sin((1.11*m.time))));
m.wave_b = ((m.wave_b+(0.37*Math.sin((1.284*m.time))))+(0.15*Math.sin((1.3*m.time))));
m.warp = 0;
m.ob_r = (m.ob_r+(m.wave_b*above(Math.sin((0.1*m.time)), 0)));
m.ob_b = (m.ob_b+(m.wave_g*above(Math.sin((0.1*m.time)), 0)));
m.ob_g = (m.ob_g+(m.wave_r*above(Math.sin((0.1*m.time)), 0)));
m.ob_r = (m.ob_r+(m.wave_g*below(Math.sin((0.1*m.time)), 0)));
m.ob_b = (m.ob_b+(m.wave_r*below(Math.sin((0.1*m.time)), 0)));
m.ob_g = (m.ob_g+(m.wave_b*below(Math.sin((0.1*m.time)), 0)));
		m.rkeys = ['rot','zoom','dy','dx','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.15)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.165)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.six = Math.sin(m.x);
m.dx = (m.dx+((0.014*Math.sin(Math.abs((18*m.y))))*Math.sin(m.time)));
m.dy = (m.dy+((0.014*Math.sin(Math.abs((18*m.x))))*Math.cos(m.time)));
m.dx = (m.dx+((0.02975*pow(m.rad, (m.x*2)))*Math.sin(m.time)));
m.dy = (m.dy+((0.02975*pow(m.rad, (m.y*2)))*Math.cos(m.time)));
m.zoom = (m.zoom-((0.0825*pow(m.rad, (m.x*6)))*Math.cos((m.ang*12))));
m.rot = (m.rot-((0.525*(((0.75*Math.sin((1.25*m.time)))*pow(m.rad, m.x))*Math.sin((1.45*m.time))))*Math.sin(m.time)));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.size = 0;
m.flux = 0;
m.n = 0;
m.tm = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.size = 0.165;
m.x = 0;
m.y = m.sample;
m.flux = ((Math.sin(((m.n*2)-m.time))*0.5)+0.5);
m.flux = (m.flux*Math.min(((1-(Math.abs((m.y-0.5))*2))*10), 1));
m.tm = (m.time*0.3);
m.r = ((Math.sin((m.n+m.tm))*0.5)+0.5);
m.g = ((Math.sin(((m.n+2.1)+m.tm))*0.5)+0.5);
m.b = ((Math.sin(((m.n+4.2)+m.tm))*0.5)+0.5);
m.r = (m.r*m.flux);
m.g = (m.g*m.flux);
m.b = (m.b*m.flux);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'size=0.165;\n' + 'x=0;\n' + 'y=sample;\n' + 'flux=sin(n*2-time)*0.5+0.5;\n' + 'flux=flux* min( (1-abs(y-0.5)*2)*10 , 1);\n' + 'tm=time*0.3;\n' + 'r=sin(n+tm)*0.5 + 0.5;\n' + 'g=sin(n+2.1+tm)*0.5+0.5;\n' + 'b=sin(n+4.2+tm)*0.5 + 0.5;\n' + 'r=r*flux;\n' + 'g=g*flux;\n' + 'b=b*flux;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.size = 0;
m.n = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.size = 0.165;
m.x = 0.999;
m.y = m.sample;
m.r = 0;
m.g = 0;
m.b = 0;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'size=0.165;\n' + 'x=0.999;\n' + 'y=sample;\n' + 'r=0;\n' + 'g=0;\n' + 'b=0;'),

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
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.796877,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.46812,
			x : 0.7,
			y : 0.1,
			ang : 6.220354,
			sides : 3.0,
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
			tex_ang : 4.712389,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.842757,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 0.0,
			rad : 1.198315,
			x : 0.8,
			y : 0.2,
			ang : 4.712389,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = (Math.sin(div(m.time,10))*6.28);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=sin(time/10)*6.28;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 5.654867,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.809917,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.089239,
			x : 0.0,
			y : 0.98,
			ang : 2.890266,
			sides : 23.0,
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
			tex_ang : 5.654867,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.59119,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 0.0,
			rad : 0.599573,
			x : 0.6,
			y : 0.8,
			ang : 5.654867,
			sides : 14.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = (Math.sin(div(m.time,5))*6.28);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=sin(time/5)*6.28;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.35*sin(1.14*time) + 0.16*sin(1.5*time);\n' + 'wave_g = wave_g + 0.36*sin(1.27*time) + 0.15*sin(1.11*time);\n' + 'wave_b = wave_b + 0.37*sin(1.284*time) + 0.15*sin(1.3*time);\n' + 'warp = 0;\n' + 'ob_r = ob_r+wave_b*above(sin(0.1*time),0);\n' + 'ob_b = ob_b+wave_g*above(sin(0.1*time),0);\n' + 'ob_g = ob_g+wave_r*above(sin(0.1*time),0);\n' + 'ob_r = ob_r+wave_g*below(sin(0.1*time),0);\n' + 'ob_b = ob_b+wave_r*below(sin(0.1*time),0);\n' + 'ob_g = ob_g+wave_b*below(sin(0.1*time),0);'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.15*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.165*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'six = sin(x);\n' + 'dx = dx + 0.014*sin(abs(18*y))*sin(time);\n' + 'dy = dy + 0.014*sin(abs(18*x))*cos(time);\n' + 'dx = dx + 0.02975*pow(rad,x*2)*sin(time);\n' + 'dy = dy + 0.02975*pow(rad,y*2)*cos(time);\n' + 'zoom = zoom - 0.0825*pow(rad,x*6)*cos(ang*12);\n' + 'rot = rot - 0.525*(0.75*sin(1.25*time)*pow(rad,x)*sin(1.45*time))*sin(time);'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.653092,
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
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
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
		ob_a : 0.2,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.5,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.dx_r = 0;
m.dy_r = 0;
m.pfthresh = 0;
m.ybar = 0;
m.xbar = 0;
m.thresh = 0;
m.rg1 = 0;
m.rg2 = 0;
m.pfdx_r = 0;
m.rg3 = 0;
m.pfdy_r = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (0.5+(0.5*Math.sin((6*m.time))));
m.wave_g = (0.5+(0.5*Math.sin((4.1*m.time))));
m.wave_b = (-1+(((1-m.wave_r)+1)-m.wave_g));
m.warp = 0;
m.wave_x = ((m.wave_x+((0.1*Math.cos((1.2*m.time)))*Math.sin((1.1*m.time))))+(0.1*Math.sin((0.61*m.time))));
m.wave_y = ((m.wave_y+((0.1*Math.sin((1.2*m.time)))*Math.cos((4.1*m.time))))+(0.11*Math.cos((1.1*m.time))));
m.ob_r = (1-Math.abs(m.wave_r));
m.ob_b = (1-Math.abs(m.wave_b));
m.ob_g = (1-Math.abs(m.wave_g));
m.pfthresh = ((above(m.bass_att, m.pfthresh)*2)+((1-above(m.bass_att, m.pfthresh))*(((m.pfthresh-1.3)*0.96)+1.3)));
m.pfdx_r = (((equal(m.pfthresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.pfthresh, 2))*m.pfdx_r));
m.pfdy_r = (((equal(m.pfthresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.pfthresh, 2))*m.pfdy_r));
m.rg1 = Math.abs(Math.sin(m.time));
m.rg2 = ((((0*above(m.rg1, 0.75))+(3*below(m.rg1, 0.25)))+((1*above(m.rg1, 0.25))*below(m.rg1, 0.5)))+((2*above(m.rg1, 0.5))*below(m.rg1, 0.75)));
m.rg3 = ifcond(equal(m.pfthresh, 2), m.rg2, m.rg3);
m.echo_orient = m.rg3;
		m.rkeys = ['dx_r','dy_r','zoom','dx','cx','dy','cy','rot','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.xbar = ((above(Math.sin(((m.dx_r*2)*m.time)), 0)*Math.abs((4-(m.x*Math.tan((4*Math.cos((m.y*m.time))))))))+(below(Math.sin(((m.dx_r*2)*m.time)), 0)*Math.sin(((3*m.x)*Math.sin((3*Math.cos(((m.dx_r*m.y)*m.time))))))));
m.ybar = ((above(Math.cos(((m.dy_r*1.2)*m.time)), 0)*Math.abs((4-(m.y*Math.tan((4*Math.cos((m.x*m.time))))))))+(below(Math.cos(((m.dy_r*1.2)*m.time)), 0)*Math.sin(((3*m.y)*Math.sin((3*Math.cos(((m.dy_r*m.x)*m.time))))))));
m.dx = (m.dx+(m.dx_r*Math.cos((1.6*m.xbar))));
m.dy = (m.dy+(m.dy_r*Math.cos((1.6*m.ybar))));
m.zoom = (m.zoom-(0.01*(3*div(m.xbar,m.ybar))));
m.rot = (m.rot+((0.01*(2*(m.ybar+m.xbar)))*Math.cos((1.52*m.time))));
m.cx = (m.cx+((m.xbar*2)*m.dx_r));
m.cy = (m.cy+((m.ybar*2)*m.dy_r));
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
	'frame_eqs_str' : ('wave_r = 0.5 + 0.5*sin(6*time);\n' + 'wave_g = 0.5 + 0.5*sin(4.1*time);\n' + 'wave_b = -1 + (1-wave_r + 1-wave_g);\n' + 'warp = 0;\n' + 'wave_x = wave_x + 0.1*cos(1.2*time)*sin(1.1*time)+0.1*sin(0.61*time);\n' + 'wave_y = wave_y + 0.1*sin(1.2*time)*cos(4.1*time)+0.11*cos(1.1*time);\n' + 'ob_r = 1-abs(wave_r);\n' + 'ob_b = 1-abs(wave_b);\n' + 'ob_g = 1-abs(wave_g);\n' + 'pfthresh = above(bass_att,pfthresh)*2+(1-above(bass_att,pfthresh))*((pfthresh-1.3)*0.96+1.3);\n' + 'pfdx_r = equal(pfthresh,2)*0.015*sin(5*time)+(1-equal(pfthresh,2))*pfdx_r;\n' + 'pfdy_r = equal(pfthresh,2)*0.015*sin(6*time)+(1-equal(pfthresh,2))*pfdy_r;\n' + 'rg1 = abs(sin(time));\n' + 'rg2 = 0*above(rg1,0.75) + 3*below(rg1,0.25) + 1*above(rg1,0.25)*below(rg1,0.5)+2*above(rg1,0.5)*below(rg1,0.75);\n' + 'rg3 = if(equal(pfthresh,2),rg2,rg3);\n' + 'echo_orient = rg3;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'xbar = above(sin(dx_r*2*time),0)*abs(4-x*tan(4*cos(y*time))) +below(sin(dx_r*2*time),0)*sin(3*x*sin(3*cos(dx_r*y*time)));\n' + 'ybar = above(cos(dy_r*1.2*time),0)*abs(4-y*tan(4*cos(x*time))) +below(cos(dy_r*1.2*time),0)*sin(3*y*sin(3*cos(dy_r*x*time)));\n' + 'dx = dx + dx_r*cos(1.6*xbar);\n' + 'dy = dy + dy_r*cos(1.6*ybar);\n' + 'zoom = zoom - 0.01*(3*(xbar/ybar));\n' + 'rot = rot + 0.01*(2*(ybar+xbar))*cos(1.52*time);\n' + 'cx = cx + xbar*2*dx_r;\n' + 'cy = cy + ybar*2*dy_r;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.35,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 2.063784,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.397106,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.999999,
		ob_size : 0.0,
		wave_smoothing : 0.5,
		warpanimspeed : 3.915798,
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
		ob_a : 1.0,
		darken_center : 1.0,
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
		rating : 4.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.tg3 = 0;
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.dx_r = 0;
m.dy_r = 0;
m.ocog = 0;
m.pfthresh = 0;
m.cog = 0;
m.thresh = 0;
m.rg1 = 0;
m.rg2 = 0;
m.pfdx_r = 0;
m.tg1 = 0;
m.rg3 = 0;
m.pfdy_r = 0;
m.tg2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (0.5+(0.5*Math.sin((1.6*m.time))));
m.wave_g = (0.5+(0.5*Math.sin((4.1*m.time))));
m.wave_b = (-1+(((1-m.wave_r)+1)-m.wave_g));
m.warp = 0;
m.pfthresh = ((above(m.bass_att, m.pfthresh)*2)+((1-above(m.bass_att, m.pfthresh))*(((m.pfthresh-1.3)*0.96)+1.3)));
m.pfdx_r = (((equal(m.pfthresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.pfthresh, 2))*m.pfdx_r));
m.pfdy_r = (((equal(m.pfthresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.pfthresh, 2))*m.pfdy_r));
m.rg1 = Math.abs(Math.sin(m.time));
m.rg2 = ((0*above(m.rg1, 0.25))+(1*below(m.rg1, 0.25)));
m.rg3 = ifcond(equal(m.pfthresh, 2), m.rg2, m.rg3);
m.q1 = m.wave_r;
m.q2 = m.wave_g;
m.q3 = m.wave_b;
m.invert = 0;
m.echo_alpha = Math.min(1, Math.max(0.5, (12*m.pfdy_r)));
m.echo_zoom = Math.min(2, Math.max(1, (1+Math.abs((24*m.pfdx_r)))));
m.monitor = m.invert;
m.cog = (m.ocog+(0.005*(((m.bass+m.bass_att)+(m.bass*m.bass_att))-2)));
m.ocog = (below(m.cog, 30000)*m.cog);
m.q4 = m.cog;
m.warp = 0.2;
m.zoom = (m.zoom+0.08);
		m.rkeys = ['tg3','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.tg1 = Math.abs(Math.sin(m.time));
m.tg2 = (((12*m.dx_r)*above(m.tg1, 0.5))+((12*m.dy_r)*below(m.tg1, 0.5)));
m.tg3 = ifcond(equal(m.thresh, 2), m.tg2, m.tg3);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 14.681458,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = m.q2;
m.g = (1-Math.abs(m.q1));
m.b = (1-((0.5*m.q3)+(0.5*m.q2)));
		return m;
	},
		'point_eqs' : function(m) {
m.y = (0.3+(0.3*m.bass_att));
m.x = (m.x+(0.1*Math.tan((3*m.time))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = q2;\n' + 'g = 1-abs(q1);\n' + 'b = 1-(0.5*q3 + 0.5*q2);'),
		'point_eqs_str' : ('y = 0.3 + 0.3*bass_att;\n' + 'x = x + 0.1*tan(3*time);'),

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
			a : 0.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.122019,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x-(((0.1*Math.tan((3*m.bass)))*0.2)*Math.sin(m.time)));
m.y = (m.y+(0.2*Math.cos(m.time)));
m.border_r = m.q1;
m.border_g = (1-Math.abs(m.q3));
m.border_b = m.q2;
m.sides = (14*Math.cos(m.q4));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = x - 0.1*tan(3*bass)*0.2*sin(time);\n' + 'y = y + 0.2*cos(time);\n' + 'border_r = q1;\n' + 'border_g = 1-abs(q3);\n' + 'border_b = q2;\n' + 'sides = 14*cos(q4);'),

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
			tex_zoom : 1.890459,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.491381,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (3*m.q4);
m.border_r = m.q2;
m.border_g = m.q1;
m.border_b = m.q3;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = 3*q4;\n' + 'border_r = q2;\n' + 'border_g = q1;\n' + 'border_b = q3;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.251326,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 2.448622,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.1,
			r : 1.0,
			border_g : 0.0,
			rad : 0.364567,
			x : 0.5,
			y : 0.5,
			ang : 2.324779,
			sides : 100.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.tg3 = 0;
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.dx_r = 0;
m.dy_r = 0;
m.thresh = 0;
m.tg1 = 0;
m.tg2 = 0;

			m.rkeys = ['tg3','dx_r','dy_r','thresh'];
			return m;
		},
		'frame_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.tg1 = Math.abs(Math.sin(m.time));
m.tg2 = (((((0.25*above(m.tg1, 0.80))-(0.25*below(m.tg1, 0.20)))+((0.33*above(m.tg1, 0.2))*below(m.tg1, 0.4)))-((0.33*above(m.tg1, 0.4))*below(m.tg1, 0.6)))+((0*below(m.tg1, 0.8))*above(m.tg1, 0.6)));
m.tg3 = ifcond(equal(m.thresh, 2), m.tg2, m.tg3);
m.x = (m.x+((42*m.dy_r)*m.tg3));
m.y = (m.y+((42*m.dx_r)*m.tg3));
m.r = m.q2;
m.g = m.q1;
m.b = m.q3;
m.r2 = m.q2;
m.b2 = m.q3;
m.g2 = m.q1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'tg1 = abs(sin(time));\n' + 'tg2 = 0.25*above(tg1,0.80)  -0.25*below(tg1,0.20) + 0.33*above(tg1,0.2)*below(tg1,0.4)-0.33*above(tg1,0.4)*below(tg1,0.6) + 0*below(tg1,0.8)*above(tg1,0.6);\n' + 'tg3 = if(equal(thresh,2),tg2,tg3);\n' + 'x = x + 42*dy_r*tg3;\n' + 'y = y + 42*dx_r*tg3;\n' + 'r = q2;\n' + 'g = q1;\n' + 'b = q3;\n' + 'r2 = q2;\n' + 'b2 = q3;\n' + 'g2 = q1;'),

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
	'frame_eqs_str' : ('wave_r = 0.5 + 0.5*sin(1.6*time);\n' + 'wave_g = 0.5 + 0.5*sin(4.1*time);\n' + 'wave_b = -1 + (1-wave_r + 1-wave_g);\n' + 'warp = 0;\n' + 'pfthresh = above(bass_att,pfthresh)*2+(1-above(bass_att,pfthresh))*((pfthresh-1.3)*0.96+1.3);\n' + 'pfdx_r = equal(pfthresh,2)*0.015*sin(5*time)+(1-equal(pfthresh,2))*pfdx_r;\n' + 'pfdy_r = equal(pfthresh,2)*0.015*sin(6*time)+(1-equal(pfthresh,2))*pfdy_r;\n' + 'rg1 = abs(sin(time));\n' + 'rg2 = 0*above(rg1,0.25) + 1*below(rg1,0.25);\n' + 'rg3 = if(equal(pfthresh,2),rg2,rg3);\n' + 'q1 = wave_r;\n' + 'q2 = wave_g;\n' + 'q3 = wave_b;\n' + 'invert = 0;\n' + 'echo_alpha = min(1,max(0.5,12*pfdy_r));\n' + 'echo_zoom = min(2,max(1,1+abs(24*pfdx_r)));\n' + 'monitor = invert;\n' + 'cog = ocog+0.005*(bass+bass_att+(bass*bass_att)-2);\n' + 'ocog = below(cog,30000)*cog;\n' + 'q4 = cog;\n' + 'warp = 0.2;\n' + 'zoom = zoom + 0.08;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'tg1 = abs(sin(time));\n' + 'tg2 = 12*dx_r*above(tg1,0.5) + 12*dy_r*below(tg1,0.5);\n' + 'tg3 = if(equal(thresh,2),tg2,tg3);'),
};

return pmap;
});
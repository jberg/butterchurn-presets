define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.7,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 14.681465,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 1.3106,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.05,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.334693,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.999998,
		ob_size : 0.05,
		wave_smoothing : 0.5,
		warpanimspeed : 2.006759,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.3,
		wave_y : 0.5,
		zoom : 0.995037,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 0.5,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : -1.0,
		decay : 1.0,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.5,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 3.0,
		modwavealphastart : 0.5,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.xy = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.dx_r = 0;
m.dy_r = 0;
m.rcog = 0;
m.ocog = 0;
m.pfthresh = 0;
m.orcog = 0;
m.cog = 0;
m.thresh = 0;
m.rg1 = 0;
m.rg2 = 0;
m.pfdx_r = 0;
m.rg3 = 0;
m.pfdy_r = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (0.5+(0.5*Math.sin((1.6*m.time))));
m.wave_g = (0.5+(0.5*Math.sin((4.1*m.time))));
m.wave_b = (-1+(((1-m.wave_r)+1)-m.wave_g));
m.warp = 2;
m.wave_x = ((m.wave_x+(0.1*Math.sin((1.2*m.time))))+(0.1*Math.sin((0.1*m.time))));
m.wave_y = ((m.wave_y+(0.2*Math.cos((1.4*m.time))))-(0.1*Math.cos((0.4*m.time))));
m.ob_r = m.wave_g;
m.ob_b = m.wave_r;
m.ob_g = m.wave_b;
m.ib_r = (1-Math.abs(m.ob_r));
m.ib_b = (1-Math.abs(m.ob_b));
m.ib_g = (1-Math.abs(m.ob_g));
m.q1 = m.wave_r;
m.q2 = m.wave_b;
m.q3 = m.wave_g;
m.cog = (m.ocog+(0.005*(((m.bass+m.bass_att)+(m.bass*m.bass_att))-2)));
m.ocog = (below(m.cog, 30000)*m.cog);
m.q4 = m.cog;
m.rcog = (m.orcog+(0.5*(rand(100)*0.01)));
m.orcog = (below(m.rcog, 20000)*m.rcog);
m.q5 = m.rcog;
m.pfthresh = ((above(m.bass_att, m.pfthresh)*2)+((1-above(m.bass_att, m.pfthresh))*(((m.pfthresh-1.3)*0.96)+1.3)));
m.pfdx_r = (((equal(m.pfthresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.pfthresh, 2))*m.pfdx_r));
m.pfdy_r = (((equal(m.pfthresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.pfthresh, 2))*m.pfdy_r));
m.rg1 = Math.abs(Math.sin((2.3*m.time)));
m.rg2 = ((0*above(m.rg1, 0.5))+(1*below(m.rg1, 0.25)));
m.rg3 = ifcond(equal(m.pfthresh, 2), m.rg2, m.rg3);
		m.rkeys = ['rot','zoom','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.zoom = (m.zoom-Math.abs((0.025*Math.sin((4*m.q4)))));
m.xy = ((above(Math.sin((3*m.q4)), 0)*m.x)+(below(Math.sin((3*m.q4)), 0)*m.y));
m.zoom = (m.zoom-(((3*m.dx_r)*m.rad)*Math.sin(((m.bass_att*6)*(3-m.rad)))));
m.rot = (m.rot-(0.35*(above(m.xy, (0.45+(0.75*Math.sin(((m.q4*5)*m.bass_att)))))*below(m.xy, (0.55+(0.75*Math.sin(((m.q4*5)*m.bass_att))))))));
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
			a : 0.03,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.628319,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.999999,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 100.0,
			x : 0.37,
			y : 0.5,
			ang : 3.644249,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.t1 = 0;
m.t2 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['b2','g2','r2','b','g','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*(0.3+(0.1*m.t1)));
m.rad = (m.rad*(0.9+(0.2*m.t2)));
m.r = Math.min(1, Math.max(0, (m.r+(0.2*Math.sin(((m.time*0.417)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.2*Math.sin(((m.time*0.391)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.2*Math.sin(((m.time*0.432)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.2*Math.sin(((m.time*0.657)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.2*Math.sin(((m.time*0.737)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.2*Math.sin(((m.time*0.884)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('ang = time*(0.3 + 0.1*t1);\n' + 'rad = rad * (0.9 + 0.2*t2);\n' + 'r = min(1,max(0,r + 0.2*sin(time*0.417 + 1)));\n' + 'g = min(1,max(0,g + 0.2*sin(time*0.391 + 2)));\n' + 'b = min(1,max(0,b + 0.2*sin(time*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.2*sin(time*0.657 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.2*sin(time*0.737 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.2*sin(time*0.884 + 6)));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.8,
			enabled : 1.0,
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
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.706533,
			x : 0.37,
			y : 0.5,
			ang : 3.644249,
			sides : 50.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.t1 = 0;
m.t2 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.05*Math.sin(((m.time*1.05)+3))));
m.y = (m.y+(0.03*Math.sin(((m.time*1.29)+1))));
m.ang = (m.time*(0.1+(0.1*m.t1)));
m.rad = (m.rad*(0.9+(0.2*m.t2)));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('x = x + 0.05*sin(time*1.05+3);\n' + 'y = y + 0.03*sin(time*1.29+1);\n' + 'ang = time*(0.1 + 0.1*t1);\n' + 'rad = rad * (0.9 + 0.2*t2);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.6,
			enabled : 1.0,
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
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.706533,
			x : 0.67,
			y : 0.43,
			ang : 4.209736,
			sides : 50.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.t1 = 0;
m.t2 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['r2','g2','b2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.05*Math.sin((m.time*0.17))));
m.y = (m.y+(0.03*Math.sin((m.time*0.83))));
m.ang = (m.time*(0.2+(0.1*m.t1)));
m.rad = (m.rad*(0.9+(0.2*m.t2)));
m.r = m.q2;
m.g = m.q1;
m.b = m.q3;
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.1*Math.sin(((m.time*0.457)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.1*Math.sin(((m.time*0.437)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.1*Math.sin(((m.time*0.484)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('x = x + 0.05*sin(time*0.17);\n' + 'y = y + 0.03*sin(time*0.83);\n' + 'ang = time*(0.2 + 0.1*t1);\n' + 'rad = rad * (0.9 + 0.2*t2);\n' + 'r = q2;\n' + 'g = q1;\n' + 'b = q3;\n' + 'r2 = min(1,max(0,r2 + 0.1*sin(time*0.457 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.1*sin(time*0.437 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.1*sin(time*0.484 + 6)));'),

		},
		{
		'baseVals' : {
			r2 : 0.5,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 1.256637,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.5,
			tex_zoom : 1.074079,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.5,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.59123,
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

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.2*Math.sin((m.time*0.25))));
m.y = (m.y+(0.1*Math.sin(((m.time*0.5)+2))));
m.r = m.q2;
m.g = m.q3;
m.b = m.q1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = x + 0.2*sin(time*0.25);\n' + 'y = y + 0.1*sin(time*0.5+2);\n' + 'r = q2;\n' + 'g = q3;\n' + 'b = q1;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = 0.5 + 0.5*sin(1.6*time);\n' + 'wave_g = 0.5 + 0.5*sin(4.1*time);\n' + 'wave_b = -1 + (1-wave_r + 1-wave_g);\n' + 'warp = 2;\n' + 'wave_x = wave_x + 0.1*sin(1.2*time) + 0.1*sin(0.1*time);\n' + 'wave_y = wave_y + 0.2*cos(1.4*time) - 0.1*cos(0.4*time);\n' + 'ob_r = wave_g;\n' + 'ob_b = wave_r;\n' + 'ob_g = wave_b;\n' + 'ib_r = 1-abs(ob_r);\n' + 'ib_b = 1-abs(ob_b);\n' + 'ib_g = 1-abs(ob_g);\n' + 'q1 = wave_r;\n' + 'q2 = wave_b;\n' + 'q3 = wave_g;\n' + 'cog = ocog+0.005*(bass+bass_att+(bass*bass_att)-2);\n' + 'ocog = below(cog,30000)*cog;\n' + 'q4 = cog;\n' + 'rcog = orcog + 0.5*(rand(100)*0.01);\n' + 'orcog = below(rcog,20000)*rcog;\n' + 'q5 = rcog;\n' + 'pfthresh = above(bass_att,pfthresh)*2+(1-above(bass_att,pfthresh))*((pfthresh-1.3)*0.96+1.3);\n' + 'pfdx_r = equal(pfthresh,2)*0.015*sin(5*time)+(1-equal(pfthresh,2))*pfdx_r;\n' + 'pfdy_r = equal(pfthresh,2)*0.015*sin(6*time)+(1-equal(pfthresh,2))*pfdy_r;\n' + 'rg1 = abs(sin(2.3*time));\n' + 'rg2 = 0*above(rg1,0.5) + 1*below(rg1,0.25);\n' + 'rg3 = if(equal(pfthresh,2),rg2,rg3);'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'zoom = zoom - abs(0.025*sin(4*q4));\n' + 'xy = above(sin(3*q4),0)*x + below(sin(3*q4),0)*y;\n' + 'zoom = zoom - 3*dx_r*rad*sin(bass_att*6*(3-rad));\n' + 'rot = rot - 0.35*(above(xy,0.45 + 0.75*sin(q4*5*bass_att))*below(xy,0.55  + 0.75*sin(q4*5*bass_att)));'),
};

return pmap;
});
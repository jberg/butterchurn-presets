define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.22891,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.207965,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 0.4999,
		echo_zoom : 0.710682,
		ob_size : 0.0065,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.4999,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999902,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.2,
		decay : 0.9,
		wave_a : 0.311604,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 0.4999,
		rating : 5.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_mystery = (m.time*0.2);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
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
			a : 0.5,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.3,
			r : 0.0,
			border_g : 1.0,
			rad : 2.999997,
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
			additive : 1.0,
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
			sides : 5.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.t1 = 0;
m.t2 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['r2','b','g','g2','b2','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.05*Math.sin(((m.time*1.25)+3))));
m.y = (m.y+(0.03*Math.sin(((m.time*1.49)+1))));
m.ang = (m.time*(0.3+(0.1*m.t1)));
m.rad = (m.rad*(0.9+(0.2*m.t2)));
m.r = Math.min(1, Math.max(0, (m.r+(0.1*Math.sin(((m.time*0.417)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.1*Math.sin(((m.time*0.391)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.1*Math.sin(((m.time*0.432)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.1*Math.sin(((m.time*0.457)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.1*Math.sin(((m.time*0.437)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.1*Math.sin(((m.time*0.484)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('x = x + 0.05*sin(time*1.25+3);\n' + 'y = y + 0.03*sin(time*1.49+1);\n' + 'ang = time*(0.3 + 0.1*t1);\n' + 'rad = rad * (0.9 + 0.2*t2);\n' + 'r = min(1,max(0,r + 0.1*sin(time*0.417 + 1)));\n' + 'g = min(1,max(0,g + 0.1*sin(time*0.391 + 2)));\n' + 'b = min(1,max(0,b + 0.1*sin(time*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.1*sin(time*0.457 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.1*sin(time*0.437 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.1*sin(time*0.484 + 6)));'),

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
			additive : 1.0,
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
			sides : 5.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.t1 = 0;
m.t2 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['r2','b','g','g2','b2','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.05*Math.sin((m.time*2.17))));
m.y = (m.y+(0.03*Math.sin((m.time*1.83))));
m.ang = (m.time*(0.3+(0.1*m.t1)));
m.rad = (m.rad*(0.9+(0.2*m.t2)));
m.r = Math.min(1, Math.max(0, (m.r+(0.1*Math.sin(((m.time*0.417)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.1*Math.sin(((m.time*0.391)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.1*Math.sin(((m.time*0.432)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.1*Math.sin(((m.time*0.457)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.1*Math.sin(((m.time*0.437)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.1*Math.sin(((m.time*0.484)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('x = x + 0.05*sin(time*2.17);\n' + 'y = y + 0.03*sin(time*1.83);\n' + 'ang = time*(0.3 + 0.1*t1);\n' + 'rad = rad * (0.9 + 0.2*t2);\n' + 'r = min(1,max(0,r + 0.1*sin(time*0.417 + 1)));\n' + 'g = min(1,max(0,g + 0.1*sin(time*0.391 + 2)));\n' + 'b = min(1,max(0,b + 0.1*sin(time*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.1*sin(time*0.457 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.1*sin(time*0.437 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.1*sin(time*0.484 + 6)));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.161222,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 6.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.2*Math.sin((m.time*1.14))));
m.y = (m.y+(0.1*Math.sin(((m.time*0.93)+2))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = x + 0.2*sin(time*1.14);\n' + 'y = y + 0.1*sin(time*0.93+2);'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_mystery = time*0.2;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
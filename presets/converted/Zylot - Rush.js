define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 2.987793,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.01,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.94,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = ifcond(above(Math.abs((m.x-0.5)), 0.04), ifcond(above(Math.abs((m.y-0.5)), 0.04), 1.2, 1), 1);
m.dx = ifcond(above((m.x-0.5), 0.025), ifcond(below(Math.abs((m.y-0.5)), 0.025), 0.02, 0), 0);
m.dx = ifcond(below((m.x-0.5), -0.025), ifcond(below(Math.abs((m.y-0.5)), 0.025), -0.02, m.dx), m.dx);
m.dy = ifcond(above((m.y-0.5), 0.025), ifcond(below(Math.abs((m.x-0.5)), 0.02), 0.02, 0), 0);
m.dy = ifcond(below((m.y-0.5), -0.025), ifcond(below(Math.abs((m.x-0.5)), 0.02), -0.02, m.dy), m.dy);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.120321,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
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
		'point_eqs' : function(m) {
m.x = m.sample;
m.y = (0.3+pow(m.value1, 0.2));
m.r = (rand(10)*0.1);
m.g = (rand(10)*0.1);
m.b = (rand(10)*0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=sample;\n' + 'y=.3+pow(value1,.2);\n' + 'r=rand(10)*.1;\n' + 'g=rand(10)*.1;\n' + 'b=rand(10)*.1;'),

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
			spectrum : 1.0,
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
		'point_eqs' : function(m) {
m.x = m.sample;
m.y = (0.9-pow(m.value2, 0.2));
m.r = (rand(10)*0.1);
m.g = (rand(10)*0.1);
m.b = (rand(10)*0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=sample;\n' + 'y=.9-pow(value2,.2);\n' + 'r=rand(10)*.1;\n' + 'g=rand(10)*.1;\n' + 'b=rand(10)*.1;'),

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
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {

m.t1 = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (0.5+(((0.1*Math.sin((m.sample*10)))*(rand(10)*0.1))*m.bass));
m.y = (0.5+(((0.1*Math.cos((m.sample*10)))*(rand(10)*0.1))*m.treb));
m.a = ((Math.abs((m.y-0.5))*Math.abs((m.x-0.5)))*60);
		return m;
	},
		'init_eqs_str' : ('t1 = 0;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=.5+.1*sin(sample*10)*(rand(10)*.1)*bass;\n' + 'y=.5+.1*cos(sample*10)*(rand(10)*.1)*treb;\n' + 'a=(abs(y-.5)*abs(x-.5))*60;'),

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
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			g2 : 1.0,
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
m.r = (0.5+(0.2*Math.sin((m.time*1.3))));
m.g = (0.5+(0.2*Math.sin((m.time*1.1))));
m.b = (0.5+(0.2*Math.sin((m.time*0.9))));
m.a = m.bass;
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
m.border_a = ifcond(above(m.bass, 1.5), 1, 0);
m.rad = (m.bass*0.1);
m.rad = (m.rad*ifcond(above(m.bass, 1.7), 5, 1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=.5+.2*sin(time*1.3);\n' + 'g=.5+.2*sin(time*1.1);\n' + 'b=.5+.2*sin(time*.9);\n' + 'a=bass;\n' + 'r2=r;\n' + 'g2=g;\n' + 'b2=b;\n' + 'border_a = if(above(bass,1.5),1,0);\n' + 'rad = bass*.1;\n' + 'rad = rad*if(above(bass,1.7),5,1);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			g2 : 1.0,
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
			thickoutline : 0.0,
			g : 0.0,
			g2 : 1.0,
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
	'frame_eqs_str' : ('warp = 0;'),
	'pixel_eqs_str' : ('zoom = if(above(abs(x-.5),.04),if(above(abs(y-.5),.04),1.2,1),1);\n' + 'dx = if(above(x-.5,.025),if(below(abs(y-.5),.025),.02,0),0);\n' + 'dx = if(below(x-.5,-.025),if(below(abs(y-.5),.025),-.02,dx),dx);\n' + 'dy = if(above(y-.5,.025),if(below(abs(x-.5),.02),.02,0),0);\n' + 'dy = if(below(y-.5,-.025),if(below(abs(x-.5),.02),-.02,dy),dy);'),
};

return pmap;
});
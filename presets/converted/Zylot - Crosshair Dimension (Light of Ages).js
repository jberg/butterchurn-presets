define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.7419,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.005,
		wave_smoothing : 0.0,
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
		decay : 0.98,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.bassc = 0;
m.midc = 0;
m.bassc = 0;
m.midc = 0;
m.mcount = 0;
m.bcount = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.9;
m.warp = 0;
m.bassc = ifcond(above(m.bass, m.bassc), (m.bassc+(m.bass*0.07)), (m.bassc-0.03));
m.midc = ifcond(above(m.mid, m.midc), (m.midc+(m.mid*0.07)), (m.midc-0.03));
m.q1 = m.bassc;
m.q2 = m.midc;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = pow(m.rad, 2);
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
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.bassc = 0;
m.bcount = 0;
m.bassc = 0;
m.bcount = 0;
			m.rkeys = ['bcount'];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (m.bass*0.5);
m.g = (m.treb*0.5);
m.b = (m.mid*0.5);
		return m;
	},
		'point_eqs' : function(m) {
m.x = (0.5+(0.2*Math.sin((m.time*0.7454))));
m.x = (m.x+(0.0005-(rand(10)*0.001)));
m.y = (0.5+(0.2*Math.cos((m.time*0.455))));
m.y = (m.y+(0.0005-(rand(10)*0.01)));
m.bassc = ifcond(above(m.bcount, 0), 1, 0);
m.bcount = ifcond(above(m.bcount, 0), (m.bcount-0.00005), ifcond(below(m.bassc, 1), ifcond(above(m.bass, 1.5), 0.3, 0), 0));
m.y = (m.y-m.bcount);
		return m;
	},
		'init_eqs_str' : ('bassc = 0;\n' + 'bcount = 0;'),
		'frame_eqs_str' : ('r=bass*.5;\n' + 'g=treb*.5;\n' + 'b=mid*.5;'),
		'point_eqs_str' : ('x = .5+.2*sin(time*.7454);\n' + 'x = x+(.0005-rand(10)*.001);\n' + 'y = .5+.2*cos(time*.455);\n' + 'y = y+(.0005-rand(10)*.01);\n' + 'bassc = if(above(bcount,0),1,0);\n' + 'bcount = if(above(bcount,0),bcount - .00005,if(below(bassc,1),if(above(bass,1.5),.3,0),0));\n' + 'y = y - bcount;'),

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
m.bassc = 0;
m.bcount = 0;

			m.rkeys = ['bcount'];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (m.bass*0.5);
m.g = (m.treb*0.5);
m.b = (m.mid*0.5);
		return m;
	},
		'point_eqs' : function(m) {
m.x = (0.5+(0.2*Math.sin((m.time*0.7454))));
m.x = (m.x+(0.0005-(rand(10)*0.008)));
m.y = (0.5+(0.2*Math.cos((m.time*0.455))));
m.y = (m.y+(0.0005-(rand(10)*0.001)));
m.bassc = ifcond(above(m.bcount, 0), 1, 0);
m.bcount = ifcond(above(m.bcount, 0), (m.bcount-0.00005), ifcond(below(m.bassc, 1), ifcond(above(m.bass, 1.5), 0.2, 0), 0));
m.x = (m.x-m.bcount);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=bass*.5;\n' + 'g=treb*.5;\n' + 'b=mid*.5;'),
		'point_eqs_str' : ('x = .5+.2*sin(time*.7454);\n' + 'x = x+(.0005-rand(10)*.008);\n' + 'y = .5+.2*cos(time*.455);\n' + 'y = y+(.0005-rand(10)*.001);\n' + 'bassc = if(above(bcount,0),1,0);\n' + 'bcount = if(above(bcount,0),bcount - .00005,if(below(bassc,1),if(above(bass,1.5),.2,0),0));\n' + 'x = x - bcount;'),

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
m.bassc = 0;
m.bcount = 0;

			m.rkeys = ['bcount'];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (m.bass*0.5);
m.g = (m.treb*0.5);
m.b = (m.mid*0.5);
		return m;
	},
		'point_eqs' : function(m) {
m.x = (0.5+(0.2*Math.sin((m.time*0.7454))));
m.x = (m.x+(0.0005+(rand(10)*0.008)));
m.y = (0.5+(0.2*Math.cos((m.time*0.455))));
m.y = (m.y+(0.0005-(rand(10)*0.001)));
m.bassc = ifcond(above(m.bcount, 0), 1, 0);
m.bcount = ifcond(above(m.bcount, 0), (m.bcount-0.00005), ifcond(below(m.bassc, 1), ifcond(above(m.bass, 1.5), 0.2, 0), 0));
m.x = (m.x+m.bcount);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=bass*.5;\n' + 'g=treb*.5;\n' + 'b=mid*.5;'),
		'point_eqs_str' : ('x = .5+.2*sin(time*.7454);\n' + 'x = x+(.0005+rand(10)*.008);\n' + 'y = .5+.2*cos(time*.455);\n' + 'y = y+(.0005-rand(10)*.001);\n' + 'bassc = if(above(bcount,0),1,0);\n' + 'bcount = if(above(bcount,0),bcount - .00005,if(below(bassc,1),if(above(bass,1.5),.2,0),0));\n' + 'x = x + bcount;'),

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
m.bassc = 0;
m.bcount = 0;

			m.rkeys = ['bcount'];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (m.bass*0.5);
m.g = (m.treb*0.5);
m.b = (m.mid*0.5);
		return m;
	},
		'point_eqs' : function(m) {
m.x = (0.5+(0.2*Math.sin((m.time*0.7454))));
m.x = (m.x+(0.0005-(rand(10)*0.001)));
m.y = (0.5+(0.2*Math.cos((m.time*0.455))));
m.y = (m.y-(0.0005-(rand(10)*0.01)));
m.bassc = ifcond(above(m.bcount, 0), 1, 0);
m.bcount = ifcond(above(m.bcount, 0), (m.bcount-0.00005), ifcond(below(m.bassc, 1), ifcond(above(m.bass, 1.5), 0.3, 0), 0));
m.y = (m.y+m.bcount);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=bass*.5;\n' + 'g=treb*.5;\n' + 'b=mid*.5;'),
		'point_eqs_str' : ('x = .5+.2*sin(time*.7454);\n' + 'x = x+(.0005-rand(10)*.001);\n' + 'y = .5+.2*cos(time*.455);\n' + 'y = y-(.0005-rand(10)*.01);\n' + 'bassc = if(above(bcount,0),1,0);\n' + 'bcount = if(above(bcount,0),bcount - .00005,if(below(bassc,1),if(above(bass,1.5),.3,0),0));\n' + 'y = y + bcount;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.3,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.291705,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 0.0,
			rad : 3.971051,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
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
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.408389,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.527755,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.angc = 0;

			m.rkeys = ['angc'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = m.angc;
m.angc = (m.angc+(m.treb*0.01));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = angc;\n' + 'angc = angc+treb*.01;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.149491,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 3.319852,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.angc = 0;
m.rand100 = 0;

			m.rkeys = ['angc'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.ang+m.angc);
m.angc = (m.angc+(m.bass*0.01));
m.x = 0.45;
m.y = 0.55;
m.r2 = (m.rand100*0.01);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = ang + angc;\n' + 'angc = angc + bass*.01;\n' + 'x = .45;\n' + 'y = .55;\n' + 'r2 = (rand100)*.01;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.197884,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.558463,
			x : 0.18,
			y : 0.3,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.angc = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.1*Math.sin(m.angc)));
m.y = (0.5+(0.1*Math.cos(m.angc)));
m.r = (0.5+Math.sin(m.time));
m.b = (0.5+Math.sin((m.time*0.556677)));
m.g = (0.5+Math.sin((m.time*0.353)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = .5+.1*sin(angc);\n' + 'y = .5+.1*cos(angc);\n' + 'r = .5+sin(time);\n' + 'b = .5+sin(time*.556677);\n' + 'g = .5+sin(time*.353);'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('bassc=0;\n' + 'midc=0;\n' + 'mcount=0;\n' + 'bcount=0;'),
	'frame_eqs_str' : ('decay = .9;\n' + 'warp = 0;\n' + 'bassc = if(above(bass,bassc),bassc + bass*.07,bassc-.03);\n' + 'midc = if(above(mid,midc),midc + mid*.07,midc-.03);\n' + 'q1 = bassc;\n' + 'q2 = midc;'),
	'pixel_eqs_str' : ('zoom = pow(rad,2);'),
};

return pmap;
});
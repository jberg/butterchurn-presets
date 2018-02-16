define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 0.9999,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.0,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 0.99663,
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
		decay : 0.88,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 3.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q5 = 0;
m.stickybit = 0;
m.diff = 0;
m.bit2 = 0;
m.q6 = 0;
m.speed = 0;
m.sample1 = 0;
m.sample2 = 0;
m.basstime = 0;
m.basssum = 0;
m.gx = 0;
m.difftime = 0;
m.gy = 0;
m.vol = 0;
m.volavg2 = 0;
m.edge = 0;
m.volavg = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.basstime = (m.basstime+(m.bass_att*0.03));
m.vol = pow(((m.bass+m.mid)+m.treb), 2);
m.basssum = m.vol;
m.stickybit = mod(m.time,2);
m.volavg = (m.volavg+(m.vol*equal(m.stickybit, 1)));
m.sample1 = (m.sample1+equal(m.stickybit, 1));
m.volavg2 = (m.volavg2+(m.vol*equal(m.stickybit, 0)));
m.sample2 = (m.sample2+equal(m.stickybit, 0));
m.edge = bnot(equal(m.bit2, m.stickybit));
m.volavg = (m.volavg-((m.volavg*m.edge)*m.stickybit));
m.volavg2 = (m.volavg2-((m.volavg2*m.edge)*equal(m.stickybit, 0)));
m.sample1 = (m.sample1-((m.sample1*m.edge)*m.stickybit));
m.sample2 = (m.sample2-((m.sample2*m.edge)*equal(m.stickybit, 0)));
m.diff = ifcond(equal(m.stickybit, 1), div(m.basssum,div(m.volavg2,m.sample2)), 0);
m.diff = ifcond(equal(m.stickybit, 0), div(m.basssum,div(m.volavg,m.sample1)), m.diff);
m.diff = m.diff;
m.bit2 = mod(m.time,2);
m.q1 = m.diff;
m.difftime = (m.difftime+(m.diff*0.03));
m.q2 = m.difftime;
m.difftime = ifcond(above(m.difftime, 2000), 0, m.difftime);
m.monitor = m.q2;
m.gx = ifcond(below(m.gx, 1), 1, m.gx);
m.gy = ifcond(below(m.gy, 1), 1, m.gy);
m.gx = ifcond(above(m.gx, 1300), 1, m.gx);
m.gy = ifcond(above(m.gy, 1200), 1, m.gy);
m.speed = ((((m.diff*0.1)+m.bass)+0.5)*0.05);
m.gx = (m.gx+((1.2*Math.sin(m.difftime))*m.speed));
m.gy = (m.gy+(Math.sin(m.diff)*m.speed));
m.q5 = (0.5+(0.5*Math.sin(m.gx)));
m.q6 = (0.5+(0.5*Math.sin(m.gy)));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1-(m.q1*0.1));
m.rot = (((m.rad-m.q1)*m.q1)*0.1);
m.sx = (1+((m.q5*0.1)*m.q1));
m.sy = (1+((m.q5*0.1)*m.q1));
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
			a : 0.5,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.4,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.speed = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = ['ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {
m.speed = ((((m.q1*0.1)+m.bass)+0.5)*0.05);
m.xs = ifcond(below(m.xs, 1), 1.1, m.xs);
m.ys = ifcond(below(m.ys, 1), 1.1, m.ys);
m.xs = ifcond(above(m.xs, 1200), 1.1, m.xs);
m.ys = ifcond(above(m.ys, 1000), 1.1, m.ys);
m.xs = (m.xs+(Math.sin((m.q2*1.2))*m.speed));
m.ys = (m.ys+(Math.cos(m.q2)*m.speed));
m.x = (0.5+(0.5*Math.sin(m.xs)));
m.y = (0.5+(0.5*Math.sin(m.ys)));
m.r = (0.5+(0.5*Math.sin(((m.q2*3)+m.x))));
m.g = (0.5+(0.5*Math.sin(((m.q2*3.3)+(m.x*m.y)))));
m.b = (0.5+(0.5*Math.sin(((m.q2*3.5)+m.y))));
m.r2 = (0.5+(0.5*Math.sin(((m.q2*3.3)+(m.x*m.y)))));
m.g2 = (0.5+(0.5*Math.sin(((m.q2*3.7)+m.x))));
m.b2 = (0.5+(0.5*Math.sin(((m.q2*3)+m.y))));
m.border_r = (0.5+(0.5*Math.sin(((m.q2*3)+m.x))));
m.border_g = (0.5+(0.5*Math.sin(((m.q2*3.3)+m.y))));
m.border_b = (0.5+(0.5*Math.sin(((m.q2*3.6)+(m.x*m.y)))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('speed = (q1*0.1 + bass + 0.5)*0.05;\n' + 'xs = if(below(xs,1),1.1 , xs);\n' + 'ys = if(below(ys,1),1.1 , ys);\n' + 'xs = if(above(xs,1200),1.1 , xs);\n' + 'ys = if(above(ys,1000),1.1 , ys);\n' + 'xs = xs +  sin(q2*1.2)*speed;\n' + 'ys = ys + cos(q2)*speed;\n' + 'x = 0.5 + 0.5*sin(xs);\n' + 'y = 0.5 + 0.5*sin(ys);\n' + 'r = 0.5 + 0.5*sin(q2*3 + x);\n' + 'g = 0.5 + 0.5*sin(q2*3.3 + x*y);\n' + 'b = 0.5 + 0.5*sin(q2*3.5 + y);\n' + 'r2 = 0.5 + 0.5*sin(q2*3.3 + x*y);\n' + 'g2 = 0.5 + 0.5*sin(q2*3.7 + x);\n' + 'b2 = 0.5 + 0.5*sin(q2*3 + y);\n' + 'border_r = 0.5 + 0.5*sin(q2*3 + x);\n' + 'border_g = 0.5 + 0.5*sin(q2*3.3 + y);\n' + 'border_b = 0.5 + 0.5*sin(q2*3.6 + x*y);'),

		},
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
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.4,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.5,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.speed = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = ['ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {
m.speed = ((((m.q1*0.1)+m.bass)+0.5)*0.05);
m.xs = ifcond(below(m.xs, 1), 1.1, m.xs);
m.ys = ifcond(below(m.ys, 1), 1.1, m.ys);
m.xs = ifcond(above(m.xs, 1200), 1.1, m.xs);
m.ys = ifcond(above(m.ys, 1000), 1.1, m.ys);
m.xs = (m.xs+(Math.sin((m.q2*1.2))*m.speed));
m.ys = (m.ys+(Math.cos(m.q2)*m.speed));
m.x = (0.5+(0.5*Math.sin(m.xs)));
m.y = (0.5+(0.5*Math.sin(m.ys)));
m.x = (1-m.x);
m.r = (0.5+(0.5*Math.sin(((m.q2*3)+m.x))));
m.g = (0.5+(0.5*Math.sin(((m.q2*3.3)+(m.x*m.y)))));
m.b = (0.5+(0.5*Math.sin(((m.q2*3.5)+m.y))));
m.r2 = (0.5+(0.5*Math.sin(((m.q2*3.3)+(m.x*m.y)))));
m.g2 = (0.5+(0.5*Math.sin(((m.q2*3.7)+m.x))));
m.b2 = (0.5+(0.5*Math.sin(((m.q2*3)+m.y))));
m.border_r = (0.5+(0.5*Math.sin(((m.q2*3)+m.x))));
m.border_g = (0.5+(0.5*Math.sin(((m.q2*3.3)+m.y))));
m.border_b = (0.5+(0.5*Math.sin(((m.q2*3.6)+(m.x*m.y)))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('speed = (q1*0.1 + bass + 0.5)*0.05;\n' + 'xs = if(below(xs,1),1.1 , xs);\n' + 'ys = if(below(ys,1),1.1 , ys);\n' + 'xs = if(above(xs,1200),1.1 , xs);\n' + 'ys = if(above(ys,1000),1.1 , ys);\n' + 'xs = xs +  sin(q2*1.2)*speed;\n' + 'ys = ys + cos(q2)*speed;\n' + 'x = 0.5 + 0.5*sin(xs);\n' + 'y = 0.5 + 0.5*sin(ys);\n' + 'x = 1 - x;\n' + 'r = 0.5 + 0.5*sin(q2*3 + x);\n' + 'g = 0.5 + 0.5*sin(q2*3.3 + x*y);\n' + 'b = 0.5 + 0.5*sin(q2*3.5 + y);\n' + 'r2 = 0.5 + 0.5*sin(q2*3.3 + x*y);\n' + 'g2 = 0.5 + 0.5*sin(q2*3.7 + x);\n' + 'b2 = 0.5 + 0.5*sin(q2*3 + y);\n' + 'border_r = 0.5 + 0.5*sin(q2*3 + x);\n' + 'border_g = 0.5 + 0.5*sin(q2*3.3 + y);\n' + 'border_b = 0.5 + 0.5*sin(q2*3.6 + x*y);'),

		},
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
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.4,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.speed = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = ['ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {
m.speed = ((((m.q1*0.1)+m.bass)+0.5)*0.1);
m.xs = ifcond(below(m.xs, 1), 1.1, m.xs);
m.ys = ifcond(below(m.ys, 1), 1.1, m.ys);
m.xs = ifcond(above(m.xs, 1200), 1.1, m.xs);
m.ys = ifcond(above(m.ys, 1000), 1.1, m.ys);
m.xs = (m.xs+(Math.sin((m.q2*1.2))*m.speed));
m.ys = (m.ys+(Math.cos(m.q2)*m.speed));
m.x = (0.5+(0.5*Math.sin(m.xs)));
m.y = (0.5+(0.5*Math.sin(m.ys)));
m.r = (0.5+(0.5*Math.sin(((m.q2*3)+m.x))));
m.g = (0.5+(0.5*Math.sin(((m.q2*3.3)+(m.x*m.y)))));
m.b = (0.5+(0.5*Math.sin(((m.q2*3.5)+m.y))));
m.r2 = (0.5+(0.5*Math.sin(((m.q2*3.3)+(m.x*m.y)))));
m.g2 = (0.5+(0.5*Math.sin(((m.q2*3.7)+m.x))));
m.b2 = (0.5+(0.5*Math.sin(((m.q2*3)+m.y))));
m.border_r = (0.5+(0.5*Math.sin(((m.q2*3)+m.x))));
m.border_g = (0.5+(0.5*Math.sin(((m.q2*3.3)+m.y))));
m.border_b = (0.5+(0.5*Math.sin(((m.q2*3.6)+(m.x*m.y)))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('speed = (q1*0.1 + bass + 0.5)*0.1;\n' + 'xs = if(below(xs,1),1.1 , xs);\n' + 'ys = if(below(ys,1),1.1 , ys);\n' + 'xs = if(above(xs,1200),1.1 , xs);\n' + 'ys = if(above(ys,1000),1.1 , ys);\n' + 'xs = xs +  sin(q2*1.2)*speed;\n' + 'ys = ys + cos(q2)*speed;\n' + 'x = 0.5 + 0.5*sin(xs);\n' + 'y = 0.5 + 0.5*sin(ys);\n' + 'r = 0.5 + 0.5*sin(q2*3 + x);\n' + 'g = 0.5 + 0.5*sin(q2*3.3 + x*y);\n' + 'b = 0.5 + 0.5*sin(q2*3.5 + y);\n' + 'r2 = 0.5 + 0.5*sin(q2*3.3 + x*y);\n' + 'g2 = 0.5 + 0.5*sin(q2*3.7 + x);\n' + 'b2 = 0.5 + 0.5*sin(q2*3 + y);\n' + 'border_r = 0.5 + 0.5*sin(q2*3 + x);\n' + 'border_g = 0.5 + 0.5*sin(q2*3.3 + y);\n' + 'border_b = 0.5 + 0.5*sin(q2*3.6 + x*y);'),

		},
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
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.4,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.speed = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = ['ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {
m.speed = ((((m.q1*0.1)+m.bass)+0.5)*0.1);
m.xs = ifcond(below(m.xs, 1), 1.1, m.xs);
m.ys = ifcond(below(m.ys, 1), 1.1, m.ys);
m.xs = ifcond(above(m.xs, 1200), 1.1, m.xs);
m.ys = ifcond(above(m.ys, 1000), 1.1, m.ys);
m.xs = (m.xs+(Math.sin((m.q2*1.2))*m.speed));
m.ys = (m.ys+(Math.cos(m.q2)*m.speed));
m.x = (0.5+(0.5*Math.sin(m.xs)));
m.y = (0.5+(0.5*Math.sin(m.ys)));
m.x = (1-m.x);
m.r = (0.5+(0.5*Math.sin(((m.q2*3)+m.x))));
m.g = (0.5+(0.5*Math.sin(((m.q2*3.3)+(m.x*m.y)))));
m.b = (0.5+(0.5*Math.sin(((m.q2*3.5)+m.y))));
m.r2 = (0.5+(0.5*Math.sin(((m.q2*3.3)+(m.x*m.y)))));
m.g2 = (0.5+(0.5*Math.sin(((m.q2*3.7)+m.x))));
m.b2 = (0.5+(0.5*Math.sin(((m.q2*3)+m.y))));
m.border_r = (0.5+(0.5*Math.sin(((m.q2*3)+m.x))));
m.border_g = (0.5+(0.5*Math.sin(((m.q2*3.3)+m.y))));
m.border_b = (0.5+(0.5*Math.sin(((m.q2*3.6)+(m.x*m.y)))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('speed = (q1*0.1 + bass + 0.5)*0.1;\n' + 'xs = if(below(xs,1),1.1 , xs);\n' + 'ys = if(below(ys,1),1.1 , ys);\n' + 'xs = if(above(xs,1200),1.1 , xs);\n' + 'ys = if(above(ys,1000),1.1 , ys);\n' + 'xs = xs +  sin(q2*1.2)*speed;\n' + 'ys = ys + cos(q2)*speed;\n' + 'x = 0.5 + 0.5*sin(xs);\n' + 'y = 0.5 + 0.5*sin(ys);\n' + 'x = 1 - x;\n' + 'r = 0.5 + 0.5*sin(q2*3 + x);\n' + 'g = 0.5 + 0.5*sin(q2*3.3 + x*y);\n' + 'b = 0.5 + 0.5*sin(q2*3.5 + y);\n' + 'r2 = 0.5 + 0.5*sin(q2*3.3 + x*y);\n' + 'g2 = 0.5 + 0.5*sin(q2*3.7 + x);\n' + 'b2 = 0.5 + 0.5*sin(q2*3 + y);\n' + 'border_r = 0.5 + 0.5*sin(q2*3 + x);\n' + 'border_g = 0.5 + 0.5*sin(q2*3.3 + y);\n' + 'border_b = 0.5 + 0.5*sin(q2*3.6 + x*y);'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('basstime = basstime + bass_att*0.03;\n' + 'vol = pow(bass+mid+treb,2);\n' + 'basssum = vol;\n' + 'stickybit = time%2;\n' + 'volAvg = volAvg + vol*equal(stickybit,1);\n' + 'sample1 = sample1 + equal(stickybit,1);\n' + 'volAvg2 = volAvg2 + vol*equal(stickybit,0);\n' + 'sample2 = sample2 + equal(stickybit,0);\n' + 'edge = bnot(equal(bit2,stickybit));\n' + 'volAvg = volAvg - volAvg*edge*stickybit;\n' + 'volAvg2 = volAvg2 - volAvg2*edge*equal(stickybit,0);\n' + 'sample1 = sample1  - sample1*edge*stickybit;\n' + 'sample2 = sample2  - sample2*edge*equal(stickybit,0);\n' + 'diff = if(equal(stickybit,1), (basssum/(volAvg2/sample2)) , 0);\n' + 'diff = if(equal(stickybit,0), (basssum/(volAvg/sample1)), diff);\n' + 'diff = diff;\n' + 'bit2 = time%2;\n' + 'q1 = diff;\n' + 'difftime = difftime + diff*0.03;\n' + 'q2 = difftime;\n' + 'difftime = if(above(difftime,2000),0, difftime);\n' + 'monitor = q2;\n' + 'gx = if(below(gx, 1), 1 , gx);\n' + 'gy = if(below(gy, 1), 1 , gy);\n' + 'gx = if(above(gx, 1300), 1 , gx);\n' + 'gy = if(above(gy, 1200), 1 , gy);\n' + 'speed = (diff*0.1 + bass + 0.5)*0.05;\n' + 'gx = gx + 1.2*sin(difftime)*speed;\n' + 'gy = gy + sin(diff)*speed;\n' + 'q5 = 0.5 +  0.5*sin(gx);\n' + 'q6 = 0.5 + 0.5*sin(gy);'),
	'pixel_eqs_str' : ('zoom = 1 - q1*0.1;\n' + 'rot = (rad-q1)*q1*0.1;\n' + 'sx = 1 + (q5*0.1*q1);\n' + 'sy = 1 + (q5*0.1*q1);'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.0,
		ib_g : 1.0,
		mv_x : 64.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.0,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 1.0,
		mv_b : 1.0,
		echo_zoom : 1.071,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.75,
		warpanimspeed : 100.0,
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
		ob_b : 1.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.95,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 1.0,
		mv_r : 0.8,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.decay_g = 0;
m.q3 = 0;
m.stickybit = 0;
m.diff = 0;
m.bit2 = 0;
m.basstime2 = 0;
m.sample1 = 0;
m.sample2 = 0;
m.saw_b = 0;
m.basstime = 0;
m.basssum = 0;
m.decay_r = 0;
m.rarr = 0;
m.saw_g = 0;
m.difftime = 0;
m.vol = 0;
m.volavg2 = 0;
m.saw_r = 0;
m.decay_b = 0;
m.edge = 0;
m.volavg = 0;
m.state = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay_r = (0.65+(0.2*Math.abs(Math.cos(((m.difftime*1.56)+m.rarr)))));
m.decay_g = (0.5+(0.2*Math.abs(Math.cos(((m.difftime*1.36)+m.rarr)))));
m.decay_b = (0.5+(0.2*Math.abs(Math.cos(((m.difftime*1.2)+m.rarr)))));
m.basstime = (m.basstime+(m.bass*0.03));
m.basstime2 = (m.basstime+(m.bass*0.03));
m.q1 = m.basstime2;
m.basstime = ifcond(below(m.basstime, 1000), 1000, m.basstime);
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
m.q3 = m.diff;
m.bit2 = mod(m.time,2);
m.difftime = (m.difftime+(m.diff*0.03));
m.q2 = m.difftime;
		m.rkeys = ['saw_b','saw_g','saw_r'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.saw_r = (m.saw_r+(0.0001*m.bass));
m.saw_r = ifcond(above(m.saw_r, 1), 0, m.saw_r);
m.saw_g = (m.saw_g+(0.00012*m.bass));
m.saw_g = ifcond(above(m.saw_g, 1), 0, m.saw_g);
m.saw_b = (m.saw_b+(0.00011*m.bass));
m.saw_b = ifcond(above(m.saw_b, 1), 0, m.saw_b);
m.decay_r = (2-(m.y*m.saw_r));
m.decay_g = (2-(m.y*m.saw_g));
m.decay_b = (2-(m.y*m.saw_b));
m.rot = 0;
m.zoom = 1.02;
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
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.speed = 0;
m.v = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = ['ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.q1 = 0;
m.speed = (m.bass_att*0.6);
m.v = ((m.sample*1000000)+((m.value2*m.bass)*0.1));
m.xs = (m.xs+((Math.sin(m.v)*m.speed)*Math.atan((m.v*1.51))));
m.ys = (m.ys+((Math.sin(m.v)*m.speed)*Math.atan(m.v)));
m.x = (0.5+((0.5*Math.sin((m.xs*0.1)))*Math.cos(((m.time*2)+m.xs))));
m.y = (0.5+((0.5*Math.sin((m.ys*0.1)))*Math.cos(((m.time*2.1)+m.xs))));
m.x = ((m.x*0.6)+0.3);
m.y = m.y;
m.y = (m.y*0.8);
m.r = ((0.5+(0.5*Math.sin(((m.time*1.22)+(m.x*2)))))+0.1);
m.g = (0.4+(0.4*Math.sin(((m.time*1.307)+(m.y*2)))));
m.b = (0.4+(0.4*Math.sin(((m.time*1.959)+(m.x*m.y)))));
m.xs = ifcond(above(m.xs, 1000), 0, m.xs);
m.ys = ifcond(above(m.ys, 1000), 0, m.ys);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('q1 = 0;\n' + 'speed = bass_att*0.6;\n' + 'v = sample*1000000 + value2*bass*0.1;\n' + 'xs = xs + sin(v)*speed*atan(v*1.51);\n' + 'ys = ys + sin(v)*speed*atan((v));\n' + 'x = 0.5 + 0.5*sin(xs*0.1)*cos(time*2 + xs);\n' + 'y = 0.5 + 0.5*sin(ys*0.1)*cos(time*2.1 + xs);\n' + 'x = x*0.6 + 0.3;\n' + 'y = y;\n' + 'y = y*0.8;\n' + 'r = 0.5 + 0.5*sin(time*1.22 + x*2) + 0.1;\n' + 'g = 0.4 + 0.4*sin(time*1.307 + y*2);\n' + 'b = 0.4 + 0.4*sin(time*1.959 + x*y);\n' + 'xs = if(above(xs,1000),0 ,xs);\n' + 'ys = if(above(ys,1000),0 ,ys);'),

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
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.speed = 0;
m.v = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = ['ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.q1 = 0;
m.speed = (m.bass_att*0.6);
m.v = ((m.sample*1000000)+((m.value2*m.bass)*0.1));
m.xs = (m.xs+((Math.sin(m.v)*m.speed)*Math.atan((m.v*1.51))));
m.ys = (m.ys+((Math.sin(m.v)*m.speed)*Math.atan(m.v)));
m.x = (0.5+((0.5*Math.sin((m.xs*0.1)))*Math.cos(((m.time*2)+m.xs))));
m.y = (0.5+((0.5*Math.sin((m.ys*0.1)))*Math.cos(((m.time*2.1)+m.xs))));
m.x = ((m.x*0.6)+0.3);
m.x = (-m.x+1);
m.y = m.y;
m.y = (m.y*0.8);
m.r = ((0.5+(0.5*Math.sin(((m.time*1.22)+(m.x*m.x)))))+0.1);
m.g = (0.4+(0.4*Math.sin(((m.time*1.107)+(m.y*2)))));
m.b = (0.4+(0.4*Math.sin(((m.time*1.959)+(m.x*m.y)))));
m.xs = ifcond(above(m.xs, 1000), 0, m.xs);
m.ys = ifcond(above(m.ys, 1000), 0, m.ys);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('q1 = 0;\n' + 'speed = bass_att*0.6;\n' + 'v = sample*1000000 + value2*bass*0.1;\n' + 'xs = xs + sin(v)*speed*atan(v*1.51);\n' + 'ys = ys + sin(v)*speed*atan((v));\n' + 'x = 0.5 + 0.5*sin(xs*0.1)*cos(time*2 + xs);\n' + 'y = 0.5 + 0.5*sin(ys*0.1)*cos(time*2.1 + xs);\n' + 'x = x*0.6 + 0.3;\n' + 'x = -x + 1;\n' + 'y = y;\n' + 'y = y*0.8;\n' + 'r = 0.5 + 0.5*sin(time*1.22 + x*x) + 0.1;\n' + 'g = 0.4 + 0.4*sin(time*1.107 + y*2);\n' + 'b = 0.4 + 0.4*sin(time*1.959 + x*y);\n' + 'xs = if(above(xs,1000),0 ,xs);\n' + 'ys = if(above(ys,1000),0 ,ys);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.speed = 0;
m.v = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = ['ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.q1 = 0;
m.speed = (m.bass_att*0.8);
m.v = ((m.sample*10000)+((m.value2*m.bass)*0.1));
m.xs = (m.xs+(((equal(0, m.q1)*Math.sin((m.v*1)))*m.speed)*Math.atan((m.v*1.51))));
m.ys = (m.ys+((equal(0, m.q1)*Math.sin((m.v*1)))*m.speed));
m.x = (0.5+((0.5*Math.sin((m.xs*0.1)))*Math.cos(((m.time*2)+m.xs))));
m.y = (0.5+((0.5*Math.sin((m.ys*0.1)))*Math.cos(((m.time*2.1)+m.xs))));
m.x = (m.x*0.6);
m.y = (((m.y*0.9)+0.05)+(m.bass*0.08));
m.y = (m.y*0.8);
m.r = ((0.5+(0.5*Math.sin((m.time*1.789))))+0.1);
m.g = (0.4+(0.4*Math.sin((m.time*1.478))));
m.b = (0.4+(0.4*Math.sin((m.time*1.125))));
m.xs = ifcond(above(m.xs, 1000), 0, m.xs);
m.ys = ifcond(above(m.ys, 1000), 0, m.ys);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('q1 = 0;\n' + 'speed = bass_att*0.8;\n' + 'v = sample*10000 + value2*bass*0.1;\n' + 'xs = xs + (equal(0,q1))*sin(v*1)*speed*atan(v*1.51);\n' + 'ys = ys + (equal(0,q1))*sin(v*1)*speed;\n' + 'x = 0.5 + 0.5*sin(xs*0.1)*cos(time*2 + xs);\n' + 'y = 0.5 + 0.5*sin(ys*0.1)*cos(time*2.1 + xs);\n' + 'x = x*0.6;\n' + 'y = y*0.9 + 0.05 + bass*0.08;\n' + 'y = y*0.8;\n' + 'r = 0.5 + 0.5*sin(time*1.789) + 0.1;\n' + 'g = 0.4 + 0.4*sin(time*1.478);\n' + 'b = 0.4 + 0.4*sin(time*1.125);\n' + 'xs = if(above(xs,1000),0 ,xs);\n' + 'ys = if(above(ys,1000),0 ,ys);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.speed = 0;
m.v = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = ['ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.q1 = 0;
m.speed = (m.bass_att*0.8);
m.v = ((m.sample*10000)+((m.value2*m.bass)*0.1));
m.xs = (m.xs+(((equal(0, m.q1)*Math.sin((m.v*1)))*m.speed)*Math.atan((m.v*1.51))));
m.ys = (m.ys+((equal(0, m.q1)*Math.sin((m.v*1)))*m.speed));
m.x = (0.5+((0.5*Math.sin((m.xs*0.1)))*Math.cos(((m.time*2)+m.xs))));
m.y = (0.5+((0.5*Math.sin((m.ys*0.1)))*Math.cos(((m.time*2.1)+m.xs))));
m.x = ((-m.x*0.6)+1);
m.y = (((m.y*0.9)+0.05)+(m.bass*0.08));
m.y = (m.y*0.8);
m.r = ((0.5+(0.5*Math.sin((m.time*1.789))))+0.1);
m.g = (0.4+(0.4*Math.sin((m.time*1.478))));
m.b = (0.4+(0.4*Math.sin((m.time*1.125))));
m.xs = ifcond(above(m.xs, 1000), 0, m.xs);
m.ys = ifcond(above(m.ys, 1000), 0, m.ys);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('q1 = 0;\n' + 'speed = bass_att*0.8;\n' + 'v = sample*10000 + value2*bass*0.1;\n' + 'xs = xs + (equal(0,q1))*sin(v*1)*speed*atan(v*1.51);\n' + 'ys = ys + (equal(0,q1))*sin(v*1)*speed;\n' + 'x = 0.5 + 0.5*sin(xs*0.1)*cos(time*2 + xs);\n' + 'y = 0.5 + 0.5*sin(ys*0.1)*cos(time*2.1 + xs);\n' + 'x = -x*0.6 + 1;\n' + 'y = y*0.9 + 0.05 + bass*0.08;\n' + 'y = y*0.8;\n' + 'r = 0.5 + 0.5*sin(time*1.789) + 0.1;\n' + 'g = 0.4 + 0.4*sin(time*1.478);\n' + 'b = 0.4 + 0.4*sin(time*1.125);\n' + 'xs = if(above(xs,1000),0 ,xs);\n' + 'ys = if(above(ys,1000),0 ,ys);'),

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
			tex_zoom : 0.22746,
			additive : 0.0,
			border_a : 0.5,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.3696,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q3 = 0;
m.tex_capture = 0;
m.tex_saw = 0.4;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (-m.q1*0.2);
m.tex_capture = above(m.q3, 1);
m.tex_zoom = 1.2;
		return m;
	},
		'init_eqs_str' : ('tex_saw = 0.4;'),
		'frame_eqs_str' : ('ang = -q1*0.2;\n' + 'tex_capture = above(q3,1);\n' + 'tex_zoom = 1.2;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.22746,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.7418,
			x : 0.25,
			y : 0.75,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q3 = 0;
m.tex_capture = 0;
m.tex_saw = 0.4;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.q1*0.2);
m.tex_capture = above(m.q3, 2);
m.tex_zoom = 0.6;
		return m;
	},
		'init_eqs_str' : ('tex_saw = 0.4;'),
		'frame_eqs_str' : ('ang = q1*0.2;\n' + 'tex_capture = above(q3,2);\n' + 'tex_zoom = 0.6;'),

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
			tex_zoom : 0.22746,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 1.81639,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.tex_capture = 0;
m.tex_saw = 0.4;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.q1*0.2);
m.tex_capture = 1;
m.tex_zoom = 0.6;
		return m;
	},
		'init_eqs_str' : ('tex_saw = 0.4;'),
		'frame_eqs_str' : ('ang = q1*0.2;\n' + 'tex_capture = 1;\n' + 'tex_zoom = 0.6;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.08922,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.5*Math.sin((m.q1*1.5))));
m.y = (0.5+(0.5*Math.sin((m.q1*1.7))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.5*sin(q1*1.5);\n' + 'y = 0.5 + 0.5*sin(q1*1.7);'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('state = 0;'),
	'frame_eqs_str' : ('decay_r = 0.65 + 0.2*(abs(cos(difftime*1.56+rarr)));\n' + 'decay_g = 0.5 + 0.2*(abs(cos(difftime*1.36+rarr)));\n' + 'decay_b = 0.5 + 0.2*(abs(cos(difftime*1.2+rarr)));\n' + 'basstime = basstime + bass*0.03;\n' + 'basstime2 = basstime + bass*0.03;\n' + 'q1 = basstime2;\n' + 'basstime = if(below(basstime,1000),1000,basstime);\n' + 'basstime = basstime + bass_att*0.03;\n' + 'vol = pow(bass+mid+treb,2);\n' + 'basssum = vol;\n' + 'stickybit = time%2;\n' + 'volAvg = volAvg + vol*equal(stickybit,1);\n' + 'sample1 = sample1 + equal(stickybit,1);\n' + 'volAvg2 = volAvg2 + vol*equal(stickybit,0);\n' + 'sample2 = sample2 + equal(stickybit,0);\n' + 'edge = bnot(equal(bit2,stickybit));\n' + 'volAvg = volAvg - volAvg*edge*stickybit;\n' + 'volAvg2 = volAvg2 - volAvg2*edge*equal(stickybit,0);\n' + 'sample1 = sample1  - sample1*edge*stickybit;\n' + 'sample2 = sample2  - sample2*edge*equal(stickybit,0);\n' + 'diff = if(equal(stickybit,1), (basssum/(volAvg2/sample2)) , 0);\n' + 'diff = if(equal(stickybit,0), (basssum/(volAvg/sample1)), diff);\n' + 'q3 = diff;\n' + 'bit2 = time%2;\n' + 'difftime = difftime + diff*0.03;\n' + 'q2 = difftime;'),
	'pixel_eqs_str' : ('saw_r = saw_r + 0.0001*bass;\n' + 'saw_r =  if(above(saw_r,1),0,saw_r);\n' + 'saw_g = saw_g + 0.00012*bass;\n' + 'saw_g =  if(above(saw_g,1),0,saw_g);\n' + 'saw_b = saw_b + 0.00011*bass;\n' + 'saw_b =  if(above(saw_b,1),0,saw_b);\n' + 'decay_r = 2 - y*saw_r;\n' + 'decay_g = 2 - y*saw_g;\n' + 'decay_b = 2 - y*saw_b;\n' + 'rot =0;\n' + 'zoom = 1.02;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.0,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 5.2E-4,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.96,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.stickybit = 0;
m.diff = 0;
m.bit2 = 0;
m.basstime2 = 0;
m.q8 = 0;
m.sample1 = 0;
m.sample2 = 0;
m.basstime = 0;
m.basssum = 0;
m.rarr = 0;
m.difftime = 0;
m.vol = 0;
m.volavg2 = 0;
m.edge = 0;
m.volavg = 0;

		return m;
	},
	'frame_eqs' : function(m) {
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
m.difftime = ifcond(above(m.difftime, 2000), 0, m.difftime);
m.monitor = m.q1;
m.rarr = (rand(100)*0.01);
m.decay = (0.7+(0.2*Math.abs(Math.cos(((m.difftime*1.56)+m.rarr)))));
m.q8 = ((m.diff+1)*0.0001);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = 1;
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
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.ring5x = 0;
m.ring4x = 0;
m.ring5y = 0;
m.ring3x = 0;
m.ring4y = 0;
m.ring2x = 0;
m.ring3y = 0;
m.ring1x = 0;
m.ring2y = 0;
m.ring1y = 0;
m.zs = 0;

			m.rkeys = ['zs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.zs = ifcond(below(m.zs, 100), 100, m.zs);
m.zs = ifcond(above(m.zs, 10100), 100, m.zs);
m.zs = ifcond(above(m.zs, 1100), 1, m.zs);
m.zs = ((1*m.sample)*0.1);
m.ring1x = (0.1*Math.cos(((m.q1*m.zs)*1)));
m.ring1y = (0.1*Math.sin(((m.q1*m.zs)*1)));
m.ring2x = (0.1*Math.cos(((m.q1*m.zs)*1.1)));
m.ring2y = (0.1*Math.sin(((m.q1*m.zs)*1.1)));
m.ring3x = (0.1*Math.cos(((m.q1*m.zs)*1.2)));
m.ring3y = (0.1*Math.sin(((m.q1*m.zs)*1.2)));
m.ring4x = (0.1*Math.cos(((m.q1*m.zs)*1.3)));
m.ring4y = (0.1*Math.sin(((m.q1*m.zs)*1.3)));
m.ring5x = (0.1*Math.cos(((m.q1*m.zs)*1.4)));
m.ring5y = (0.1*Math.sin(((m.q1*m.zs)*1.4)));
m.ring1x = ((m.ring1x*Math.cos((m.q1*0.1)))-(m.ring1y*Math.sin((m.q1*0.1))));
m.ring1y = ((m.ring1x*Math.sin((m.q1*0.1)))+(m.ring1y*Math.cos((m.q1*0.1))));
m.ring2x = ((m.ring2x*Math.cos((m.q1*0.2)))-(m.ring2y*Math.sin((m.q1*0.2))));
m.ring2y = ((m.ring2x*Math.sin((m.q1*0.2)))+(m.ring2y*Math.cos((m.q1*0.2))));
m.ring3x = ((m.ring3x*Math.cos((m.q1*0.3)))-(m.ring3y*Math.sin((m.q1*0.3))));
m.ring3y = ((m.ring3x*Math.sin((m.q1*0.3)))+(m.ring3y*Math.cos((m.q1*0.3))));
m.ring4x = ((m.ring4x*Math.cos((m.q1*0.4)))-(m.ring4y*Math.sin((m.q1*0.4))));
m.ring4y = ((m.ring4x*Math.sin((m.q1*0.4)))+(m.ring4y*Math.cos((m.q1*0.4))));
m.ring5x = ((m.ring5x*Math.cos((m.q1*0.5)))-(m.ring5y*Math.sin((m.q1*0.5))));
m.ring5y = ((m.ring5x*Math.sin((m.q1*0.5)))+(m.ring5y*Math.cos((m.q1*0.5))));
m.x = (((((m.ring1x+m.ring2x)+m.ring3x)+m.ring4x)+m.ring5x)+0.5);
m.y = (((((m.ring1y+m.ring2y)+m.ring3y)+m.ring4y)+m.ring5y)+0.5);
m.r = 1;
m.g = 1;
m.b = 1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('zs = if(below(zs,100),100,zs);\n' + 'zs = if(above(zs, 10100),100, zs);\n' + 'zs = if(above(zs, 1100),1, zs);\n' + 'zs = 1*sample*0.1;\n' + 'ring1x  = 0.1*cos(q1*zs*1);\n' + 'ring1y =  0.1*sin(q1*zs*1);\n' + 'ring2x  = 0.1*cos(q1*zs*1.1);\n' + 'ring2y =  0.1*sin(q1*zs*1.1);\n' + 'ring3x  = 0.1*cos(q1*zs*1.2);\n' + 'ring3y =  0.1*sin(q1*zs*1.2);\n' + 'ring4x  = 0.1*cos(q1*zs*1.3);\n' + 'ring4y =  0.1*sin(q1*zs*1.3);\n' + 'ring5x  = 0.1*cos(q1*zs*1.4);\n' + 'ring5y =  0.1*sin(q1*zs*1.4);\n' + 'ring1x = ring1x*cos(q1*0.1) - ring1y*sin(q1*0.1);\n' + 'ring1y = ring1x*sin(q1*0.1) + ring1y*cos(q1*0.1);\n' + 'ring2x = ring2x*cos(q1*0.2) - ring2y*sin(q1*0.2);\n' + 'ring2y = ring2x*sin(q1*0.2) + ring2y*cos(q1*0.2);\n' + 'ring3x = ring3x*cos(q1*0.3) - ring3y*sin(q1*0.3);\n' + 'ring3y = ring3x*sin(q1*0.3) + ring3y*cos(q1*0.3);\n' + 'ring4x = ring4x*cos(q1*0.4) - ring4y*sin(q1*0.4);\n' + 'ring4y = ring4x*sin(q1*0.4) + ring4y*cos(q1*0.4);\n' + 'ring5x = ring5x*cos(q1*0.5) - ring5y*sin(q1*0.5);\n' + 'ring5y = ring5x*sin(q1*0.5) + ring5y*cos(q1*0.5);\n' + 'x = ring1x  + ring2x + ring3x + ring4x + ring5x + 0.5;\n' + 'y = ring1y  + ring2y + ring3y + ring4y + ring5y + 0.5;\n' + 'r =1;\n' + 'g =1;\n' + 'b =1;'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.ring5x = 0;
m.ring4x = 0;
m.ring5y = 0;
m.ring3x = 0;
m.ring4y = 0;
m.ring2x = 0;
m.ring3y = 0;
m.ring1x = 0;
m.ring2y = 0;
m.ring1y = 0;
m.zs = 0;

			m.rkeys = ['zs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.zs = ifcond(below(m.zs, 100), 100, m.zs);
m.zs = ifcond(above(m.zs, 10100), 100, m.zs);
m.zs = ifcond(above(m.zs, 1100), 1, m.zs);
m.zs = ((1*m.sample)*0.1);
m.ring1x = (0.1*Math.cos(((m.q1*m.zs)*1)));
m.ring1y = (0.1*Math.sin(((m.q1*m.zs)*1)));
m.ring2x = (0.1*Math.cos(((m.q1*m.zs)*1.1)));
m.ring2y = (0.1*Math.sin(((m.q1*m.zs)*1.1)));
m.ring3x = (0.1*Math.cos(((m.q1*m.zs)*1.2)));
m.ring3y = (0.1*Math.sin(((m.q1*m.zs)*1.2)));
m.ring4x = (0.1*Math.cos(((m.q1*m.zs)*1.3)));
m.ring4y = (0.1*Math.sin(((m.q1*m.zs)*1.3)));
m.ring5x = (0.1*Math.cos(((m.q1*m.zs)*1.4)));
m.ring5y = (0.1*Math.sin(((m.q1*m.zs)*1.4)));
m.ring1x = ((m.ring1x*Math.cos((m.q1*0.1)))-(m.ring1y*Math.sin((m.q1*0.1))));
m.ring1y = ((m.ring1x*Math.sin((m.q1*0.1)))+(m.ring1y*Math.cos((m.q1*0.1))));
m.ring2x = ((m.ring2x*Math.cos((m.q1*0.2)))-(m.ring2y*Math.sin((m.q1*0.2))));
m.ring2y = ((m.ring2x*Math.sin((m.q1*0.2)))+(m.ring2y*Math.cos((m.q1*0.2))));
m.ring3x = ((m.ring3x*Math.cos((m.q1*0.3)))-(m.ring3y*Math.sin((m.q1*0.3))));
m.ring3y = ((m.ring3x*Math.sin((m.q1*0.3)))+(m.ring3y*Math.cos((m.q1*0.3))));
m.ring4x = ((m.ring4x*Math.cos((m.q1*0.4)))-(m.ring4y*Math.sin((m.q1*0.4))));
m.ring4y = ((m.ring4x*Math.sin((m.q1*0.4)))+(m.ring4y*Math.cos((m.q1*0.4))));
m.ring5x = ((m.ring5x*Math.cos((m.q1*0.5)))-(m.ring5y*Math.sin((m.q1*0.5))));
m.ring5y = ((m.ring5x*Math.sin((m.q1*0.5)))+(m.ring5y*Math.cos((m.q1*0.5))));
m.x = (((((m.ring1x+m.ring2x)+m.ring3x)+m.ring4x)+m.ring5x)+0.5);
m.y = (((((m.ring1y+m.ring2y)+m.ring3y)+m.ring4y)+m.ring5y)+0.5);
m.r = (0.5+(0.5*Math.sin((((m.q1*1.2)+m.x)+m.x))));
m.g = (0.5+(0.5*Math.sin((((m.q1*1.5)+m.x)+m.y))));
m.b = (0.5+(0.5*Math.sin((((m.q1*1.36)+m.y)+m.y))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('zs = if(below(zs,100),100,zs);\n' + 'zs = if(above(zs, 10100),100, zs);\n' + 'zs = if(above(zs, 1100),1, zs);\n' + 'zs = 1*sample*0.1;\n' + 'ring1x  = 0.1*cos(q1*zs*1);\n' + 'ring1y =  0.1*sin(q1*zs*1);\n' + 'ring2x  = 0.1*cos(q1*zs*1.1);\n' + 'ring2y =  0.1*sin(q1*zs*1.1);\n' + 'ring3x  = 0.1*cos(q1*zs*1.2);\n' + 'ring3y =  0.1*sin(q1*zs*1.2);\n' + 'ring4x  = 0.1*cos(q1*zs*1.3);\n' + 'ring4y =  0.1*sin(q1*zs*1.3);\n' + 'ring5x  = 0.1*cos(q1*zs*1.4);\n' + 'ring5y =  0.1*sin(q1*zs*1.4);\n' + 'ring1x = ring1x*cos(q1*0.1) - ring1y*sin(q1*0.1);\n' + 'ring1y = ring1x*sin(q1*0.1) + ring1y*cos(q1*0.1);\n' + 'ring2x = ring2x*cos(q1*0.2) - ring2y*sin(q1*0.2);\n' + 'ring2y = ring2x*sin(q1*0.2) + ring2y*cos(q1*0.2);\n' + 'ring3x = ring3x*cos(q1*0.3) - ring3y*sin(q1*0.3);\n' + 'ring3y = ring3x*sin(q1*0.3) + ring3y*cos(q1*0.3);\n' + 'ring4x = ring4x*cos(q1*0.4) - ring4y*sin(q1*0.4);\n' + 'ring4y = ring4x*sin(q1*0.4) + ring4y*cos(q1*0.4);\n' + 'ring5x = ring5x*cos(q1*0.5) - ring5y*sin(q1*0.5);\n' + 'ring5y = ring5x*sin(q1*0.5) + ring5y*cos(q1*0.5);\n' + 'x = ring1x  + ring2x + ring3x + ring4x + ring5x + 0.5;\n' + 'y = ring1y  + ring2y + ring3y + ring4y + ring5y + 0.5;\n' + 'r = 0.5 + 0.5*sin(q1*1.2 + x + x);\n' + 'g = 0.5 + 0.5*sin(q1*1.5 + x + y);\n' + 'b = 0.5 + 0.5*sin(q1*1.36 + y + y);'),

		},
		{
		'baseVals' : {
			a : 0.4,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q8 = 0;
m.zs = 0;

			m.rkeys = ['zs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.zs = ifcond(below(m.zs, 100), 100, m.zs);
m.zs = ifcond(above(m.zs, 10100), 100, m.zs);
m.zs = (m.zs+m.q8);
m.x = (0.1*Math.cos(((m.q1*m.zs)*1)));
m.y = (0.1*Math.sin(((m.q1*m.zs)*1)));
m.x = ((m.x*Math.cos((m.q1*0.8)))-(m.y*Math.sin((m.q1*0.8))));
m.y = ((m.x*Math.sin((m.q1*0.8)))+(m.y*Math.cos((m.q1*0.8))));
m.x = (m.x+0.5);
m.y = (m.y+0.5);
m.r = (0.5+(0.5*Math.sin((((m.q1*2.2)+m.x)+m.x))));
m.g = (0.5+(0.5*Math.sin((((m.q1*1.5)+m.x)+m.y))));
m.b = (0.5+(0.5*Math.sin((((m.q1*2.36)+m.y)+m.y))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('zs = if(below(zs,100),100,zs);\n' + 'zs = if(above(zs, 10100),100, zs);\n' + 'zs = zs + q8;\n' + 'x = 0.1*cos(q1*zs*1);\n' + 'y = 0.1*sin(q1*zs*1);\n' + 'x = x*cos(q1*0.8) - y*sin(q1*0.8);\n' + 'y = x*sin(q1*0.8) + y*cos(q1*0.8);\n' + 'x = x + 0.5;\n' + 'y = y + 0.5;\n' + 'r = 0.5 + 0.5*sin(q1*2.2 + x + x);\n' + 'g = 0.5 + 0.5*sin(q1*1.5 + x + y);\n' + 'b = 0.5 + 0.5*sin(q1*2.36 + y + y);'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q8 = 0;
m.zs = 0;

			m.rkeys = ['zs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.zs = ifcond(below(m.zs, 100), 100, m.zs);
m.zs = ifcond(above(m.zs, 10100), 100, m.zs);
m.zs = (m.zs+m.q8);
m.x = (0.5*Math.cos(((m.q1*m.zs)*1)));
m.y = (0.5*Math.sin(((m.q1*m.zs)*1)));
m.x = ((m.x*Math.cos((m.q1*0.5)))-(m.y*Math.sin((m.q1*0.5))));
m.y = ((m.x*Math.sin((m.q1*0.5)))+(m.y*Math.cos((m.q1*0.5))));
m.x = (m.x+0.5);
m.y = (m.y+0.5);
m.r = (0.5+(0.5*Math.sin((((m.q1*1.2)+m.x)+m.x))));
m.g = (0.5+(0.5*Math.sin((((m.q1*2.5)+m.x)+m.y))));
m.b = (0.5+(0.5*Math.sin((((m.q1*3.36)+m.y)+m.y))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('zs = if(below(zs,100),100,zs);\n' + 'zs = if(above(zs, 10100),100, zs);\n' + 'zs = zs + q8;\n' + 'x = 0.5*cos(q1*zs*1);\n' + 'y = 0.5*sin(q1*zs*1);\n' + 'x = x*cos(q1*0.5) - y*sin(q1*0.5);\n' + 'y = x*sin(q1*0.5) + y*cos(q1*0.5);\n' + 'x = x + 0.5;\n' + 'y = y + 0.5;\n' + 'r = 0.5 + 0.5*sin(q1*1.2 + x + x);\n' + 'g = 0.5 + 0.5*sin(q1*2.5 + x + y);\n' + 'b = 0.5 + 0.5*sin(q1*3.36 + y + y);'),

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
			num_inst : 1.0,
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
			num_inst : 1.0,
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
			num_inst : 1.0,
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
			num_inst : 1.0,
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
	'frame_eqs_str' : ('basstime = basstime + bass*0.03;\n' + 'basstime2 = basstime + bass*0.03;\n' + 'q1 = basstime2;\n' + 'basstime = if(below(basstime,1000),1000,basstime);\n' + 'basstime = basstime + bass_att*0.03;\n' + 'vol = pow(bass+mid+treb,2);\n' + 'basssum = vol;\n' + 'stickybit = time%2;\n' + 'volAvg = volAvg + vol*equal(stickybit,1);\n' + 'sample1 = sample1 + equal(stickybit,1);\n' + 'volAvg2 = volAvg2 + vol*equal(stickybit,0);\n' + 'sample2 = sample2 + equal(stickybit,0);\n' + 'edge = bnot(equal(bit2,stickybit));\n' + 'volAvg = volAvg - volAvg*edge*stickybit;\n' + 'volAvg2 = volAvg2 - volAvg2*edge*equal(stickybit,0);\n' + 'sample1 = sample1  - sample1*edge*stickybit;\n' + 'sample2 = sample2  - sample2*edge*equal(stickybit,0);\n' + 'diff = if(equal(stickybit,1), (basssum/(volAvg2/sample2)) , 0);\n' + 'diff = if(equal(stickybit,0), (basssum/(volAvg/sample1)), diff);\n' + 'q3 = diff;\n' + 'bit2 = time%2;\n' + 'difftime = difftime + diff*0.03;\n' + 'q2 = difftime;\n' + 'difftime = if(above(difftime,2000),0, difftime);\n' + 'monitor = q1;\n' + 'rarr = rand(100)*0.01;\n' + 'decay = 0.7 + 0.2*(abs(cos(difftime*1.56+rarr)));\n' + 'q8 = (diff+1)*0.0001;'),
	'pixel_eqs_str' : ('zoom = 1;'),
};

return pmap;
});
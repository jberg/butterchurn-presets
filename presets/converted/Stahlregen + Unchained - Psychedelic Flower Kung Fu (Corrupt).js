define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 3.52,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 0.01,
		brighten : 1.0,
		mv_y : 9.0,
		wave_scale : 0.706,
		echo_alpha : 1.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 2.00673,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.126,
		warpanimspeed : 5.278,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.12682,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 1.0,
		rot : -0.02,
		wave_thick : 1.0,
		modwavealphaend : 1.35,
		wave_mystery : -0.28,
		decay : 0.955,
		wave_a : 1.059,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.81,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.ripple_r = 0;
m.q5 = 0;
m.timer_a = 0;
m.timer_b = 0;
m.ripple_x = 0;
m.ripple_y = 0;
m.count = 0;
m.ripple = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.count = ifcond(below(m.count, 9), (m.count+1), 0);
m.q1 = 0.5;
m.q2 = 0.5;
m.q3 = m.count;
m.q4 = m.aspectx;
m.q5 = m.aspecty;
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.timer_a = (10*Math.sin(m.time));
m.timer_b = (10*Math.sin((m.time*0.5)));
m.ripple_x = (Math.cos(((m.x*m.timer_a)-m.timer_b))*m.bass_att);
m.ripple_y = (Math.cos(((m.y*m.timer_a)-m.timer_b))*m.treb_att);
m.ripple_r = (Math.cos(((m.rad*m.timer_b)-m.timer_a))*m.mid_att);
m.ripple = ((m.ripple_x+m.ripple_y)+m.ripple_r);
m.zoom = (m.zoom+(m.ripple*0.1));
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.5,
			textured : 0.0,
			g2 : 0.5,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.12953,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			num_inst : 22.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.trans = 0;
m.num_instance = 0;
m.instance_counter = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.trans = ifcond(equal(m.q3, 3), 0.15, 0);
m.a = m.trans;
m.a2 = m.trans;
m.border_a = 0;
m.instance_counter = ((3.14*m.instance)*div(2,m.num_instance));
m.x = (m.q1+(((0.1+(0.1*m.treb_att))*div(1,m.q5))*Math.sin(m.instance_counter)));
m.y = (m.q2+(((0.1+(0.1*m.treb_att))*div(1,m.q4))*Math.cos(m.instance_counter)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trans = if(equal(q3,3),.15,0);\n' + 'a = trans;\n' + 'a2 = trans;\n' + 'border_a = 0;\n' + 'instance_counter = 3.14*instance*(2/(num_instance));\n' + 'x = q1 + (.1+0.1*treb_att) * (1/q5) * sin(instance_counter);\n' + 'y = q2 + (.1+0.1*treb_att) * (1/q4) * cos(instance_counter);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.5,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.5,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.12953,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			num_inst : 22.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.trans = 0;
m.num_instance = 0;
m.instance_counter = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.trans = ifcond(equal(m.q3, 6), 0.15, 0);
m.a = m.trans;
m.a2 = m.trans;
m.border_a = 0;
m.instance_counter = ((3.14*m.instance)*div(2,m.num_instance));
m.x = (m.q1+(((0.1+(0.1*m.mid_att))*div(1,m.q5))*Math.sin(m.instance_counter)));
m.y = (m.q2+(((0.1+(0.1*m.mid_att))*div(1,m.q4))*Math.cos(m.instance_counter)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trans = if(equal(q3,6),.15,0);\n' + 'a = trans;\n' + 'a2 = trans;\n' + 'border_a = 0;\n' + 'instance_counter = 3.14*instance*(2/(num_instance));\n' + 'x = q1 + (.1+0.1*mid_att) * (1/q5) * sin(instance_counter);\n' + 'y = q2 + (.1+0.1*mid_att) * (1/q4) * cos(instance_counter);'),

		},
		{
		'baseVals' : {
			r2 : 0.5,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.5,
			border_g : 1.0,
			rad : 0.12953,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			num_inst : 22.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.trans = 0;
m.num_instance = 0;
m.instance_counter = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.trans = ifcond(equal(m.q3, 9), 0.15, 0);
m.a = m.trans;
m.a2 = m.trans;
m.border_a = 0;
m.instance_counter = ((3.14*m.instance)*div(2,m.num_instance));
m.x = (m.q1+(((0.1+(0.1*m.bass_att))*div(1,m.q5))*Math.sin(m.instance_counter)));
m.y = (m.q2+(((0.1+(0.1*m.bass_att))*div(1,m.q4))*Math.cos(m.instance_counter)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trans = if(equal(q3,9),.15,0);\n' + 'a = trans;\n' + 'a2 = trans;\n' + 'border_a = 0;\n' + 'instance_counter = 3.14*instance*(2/(num_instance));\n' + 'x = q1 + (.1+0.1*bass_att) * (1/q5) * sin(instance_counter);\n' + 'y = q2 + (.1+0.1*bass_att) * (1/q4) * cos(instance_counter);'),

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
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.25481,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
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
	'frame_eqs_str' : ('count = if(below(count,9),count+1,0);\n' + 'q1 = .5;\n' + 'q2 = .5;\n' + 'q3 = count;\n' + 'q4 = aspectx;\n' + 'q5 = aspecty;'),
	'pixel_eqs_str' : ('timer_a=10*sin(time);\n' + 'timer_b=10*sin(time*.5);\n' + 'ripple_x=cos(x*timer_a-timer_b)*bass_att;\n' + 'ripple_y=cos(y*timer_a-timer_b)*treb_att;\n' + 'ripple_r=cos(rad*timer_b-timer_a)*mid_att;\n' + 'ripple=ripple_x+ripple_y+ripple_r;\n' + 'zoom=zoom+ripple*.1;'),
};

return pmap;
});
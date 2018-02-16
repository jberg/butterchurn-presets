define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.4,
		ib_g : 0.0,
		mv_x : 44.8,
		warpscale : 16.217,
		brighten : 0.0,
		mv_y : 24.0,
		wave_scale : 1.0,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.05,
		b2x : 1.0,
		warp : 1.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.50374,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.75,
		warpanimspeed : 9.861,
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
		ob_a : 1.0,
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
		ob_g : 0.1,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.q2 = 0;
m.att = 0;
m.q3 = 0;
m.meanbass_att = 0;
m.q8 = 0;
m.yamp = 0;
m.myx = 0;
m.xamp = 0;
m.lastbeat = 0;
m.myy = 0;
m.yamptarg = 0;
m.y_pos = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.movement = 0;
m.xspeed = 0;
m.ydir = 0;
m.xdir = 0;
m.beatrate = 0;
m.beat = 0;
m.volume = 0;
m.ypos = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.volume = (0.3*((m.bass+m.mid)+m.att));
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.25*m.volume)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.15*m.volume)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.beatrate = (equal(m.beatrate, 0)+((1-equal(m.beatrate, 0))*(below(m.volume, 0.01)+((1-below(m.volume, 0.01))*m.beatrate))));
m.lastbeat = (m.lastbeat+(equal(m.lastbeat, 0)*m.time));
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.peakbass_att = Math.max(m.bass_att, m.peakbass_att);
m.beat = ((above(m.volume, 0.8)*below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)))*above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))));
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ((m.beat*m.bass_att)+(((1-m.beat)*m.peakbass_att)*((above((m.time-m.lastbeat), (2*m.beatrate))*0.95)+((1-above((m.time-m.lastbeat), (2*m.beatrate)))*0.995))));
m.lastbeat = ((m.beat*m.time)+((1-m.beat)*m.lastbeat));
m.peakbass_att = Math.max(m.peakbass_att, (1.1*m.meanbass_att));
m.wave_x = (m.xpos+0.5);
m.wave_y = (1-(m.ypos+0.5));
m.wave_r = (0.5+(0.499*((0.60*Math.sin((0.980*m.time)))+(0.40*Math.sin((1.047*m.time))))));
m.wave_g = (0.5+(0.499*((0.60*Math.sin((0.835*m.time)))+(0.40*Math.sin((1.081*m.time))))));
m.wave_b = (0.5+(0.499*((0.60*Math.sin((0.814*m.time)))+(0.40*Math.sin((1.011*m.time))))));
m.wave_mystery = (-0.17+(0.03*((0.6*Math.sin((0.637*m.time)))+(0.4*Math.sin((0.949*m.time))))));
m.mv_r = ifcond(m.beat, 1, m.ib_r);
m.mv_b = ifcond(m.beat, m.wave_b, m.ib_b);
m.q3 = m.wave_mystery;
m.q1 = m.wave_x;
m.q2 = (1-m.wave_y);
m.q2 = (m.ypos+0.5);
m.warp = 0;
m.ob_r = (1-m.wave_g);
m.ob_b = (1-m.wave_r);
m.ob_g = (1-m.wave_b);
m.monitor = m.wave_y;
m.movement = (m.movement+(0.4*div(((m.bass+m.bass_att)+(0.1*pow(((m.bass+(0.6*m.bass_att))+(0.2*m.treb_att)), 3))),m.fps)));
m.movement = ifcond(above(m.movement, 10000), 0, m.movement);
m.rot = (1*Math.sin(m.movement));
m.cx = m.wave_x;
m.cy = (m.y_pos+0.5);
m.q8 = m.movement;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.myy = (m.x-m.q1);
m.myx = ((m.y-m.q2)+0.1);
m.dx = ((3*Math.sin((m.q8*0.675)))*((2*m.myx)*m.myy));
m.dy = ((3*Math.sin((m.q8*0.675)))*((m.myx*m.myx)-(m.myy*m.myy)));
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
m.speed = (m.bass_att*0.2);
m.v = ((m.sample*100000)+((m.value2*m.bass)*0.1));
m.xs = (m.xs+((Math.sin(((m.v*0.1)+(Math.sin(m.v)*0.1)))*m.speed)*Math.atan((m.v*1.51))));
m.ys = (m.ys+((Math.sin(((m.v*0.1)+(Math.cos(m.v)*0.1)))*m.speed)*Math.atan(m.v)));
m.x = (0.5+((0.5*Math.sin((m.xs*0.1)))*Math.cos(((m.time*2)+m.ys))));
m.y = (0.5+((0.5*Math.sin((m.ys*0.1)))*Math.cos(((m.time*2.1)+m.xs))));
m.x = m.x;
m.y = m.y;
m.y = m.y;
m.g = 1;
m.xs = ifcond(above(m.xs, 1000), 0, m.xs);
m.ys = ifcond(above(m.ys, 1000), 0, m.ys);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('q1 = 0;\n' + 'speed = bass_att*0.2;\n' + 'v = sample*100000 + value2*bass*0.1;\n' + 'xs = xs + sin(v*0.1 + sin(v)*0.1)*speed*atan(v*1.51);\n' + 'ys = ys + sin(v*0.1 + cos(v)*0.1)*speed*atan(v);\n' + 'x = 0.5 + 0.5*sin(xs*0.1)*cos(time*2 + ys);\n' + 'y = 0.5 + 0.5*sin(ys*0.1)*cos(time*2.1 + xs);\n' + 'x = x;\n' + 'y = y;\n' + 'y = y;\n' + 'g = 1;\n' + 'xs = if(above(xs,1000),0 ,xs);\n' + 'ys = if(above(ys,1000),0 ,ys);'),

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
m.speed = (m.bass_att*0.2);
m.v = ((m.sample*100000)+((m.value2*m.bass)*0.1));
m.xs = (m.xs+((Math.sin(((m.v*0.1)+(Math.sin(m.v)*0.1)))*m.speed)*Math.atan((m.v*1.51))));
m.ys = (m.ys+((Math.sin(((m.v*0.1)+(Math.cos(m.v)*0.1)))*m.speed)*Math.atan(m.v)));
m.x = (0.5+((0.5*Math.sin((m.xs*0.1)))*Math.cos((((m.time*2)+m.ys)+0.7))));
m.y = (0.5+((0.5*Math.sin((m.ys*0.1)))*Math.cos((((m.time*2.1)+m.xs)+0.7))));
m.x = m.x;
m.y = m.y;
m.y = m.y;
m.g = 1;
m.xs = ifcond(above(m.xs, 1000), 0, m.xs);
m.ys = ifcond(above(m.ys, 1000), 0, m.ys);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('q1 = 0;\n' + 'speed = bass_att*0.2;\n' + 'v = sample*100000 + value2*bass*0.1;\n' + 'xs = xs + sin(v*0.1 + sin(v)*0.1)*speed*atan(v*1.51);\n' + 'ys = ys + sin(v*0.1 + cos(v)*0.1)*speed*atan(v);\n' + 'x = 0.5 + 0.5*sin(xs*0.1)*cos(time*2 + ys + 0.7);\n' + 'y = 0.5 + 0.5*sin(ys*0.1)*cos(time*2.1 + xs + 0.7);\n' + 'x = x;\n' + 'y = y;\n' + 'y = y;\n' + 'g = 1;\n' + 'xs = if(above(xs,1000),0 ,xs);\n' + 'ys = if(above(ys,1000),0 ,ys);'),

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
m.speed = (m.bass_att*0.2);
m.v = ((m.sample*100000)+((m.value2*m.bass)*0.1));
m.xs = (m.xs+((Math.sin(((m.v*0.1)+(Math.sin(m.v)*0.1)))*m.speed)*Math.atan((m.v*1.51))));
m.ys = (m.ys+((Math.sin(((m.v*0.1)+(Math.cos(m.v)*0.1)))*m.speed)*Math.atan(m.v)));
m.x = (0.5+((0.5*Math.sin((m.xs*0.1)))*Math.cos((((m.time*2)+m.ys)+1.4))));
m.y = (0.5+((0.5*Math.sin((m.ys*0.1)))*Math.cos((((m.time*2.1)+m.xs)+1.4))));
m.x = m.x;
m.y = m.y;
m.y = m.y;
m.g = 1;
m.xs = ifcond(above(m.xs, 1000), 0, m.xs);
m.ys = ifcond(above(m.ys, 1000), 0, m.ys);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('q1 = 0;\n' + 'speed = bass_att*0.2;\n' + 'v = sample*100000 + value2*bass*0.1;\n' + 'xs = xs + sin(v*0.1 + sin(v)*0.1)*speed*atan(v*1.51);\n' + 'ys = ys + sin(v*0.1 + cos(v)*0.1)*speed*atan(v);\n' + 'x = 0.5 + 0.5*sin(xs*0.1)*cos(time*2 + ys + 1.4);\n' + 'y = 0.5 + 0.5*sin(ys*0.1)*cos(time*2.1 + xs + 1.4);\n' + 'x = x;\n' + 'y = y;\n' + 'y = y;\n' + 'g = 1;\n' + 'xs = if(above(xs,1000),0 ,xs);\n' + 'ys = if(above(ys,1000),0 ,ys);'),

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
			smoothing : 0.0,
			thick : 0.0,
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
m.speed = (m.bass*0.1);
m.v = ((m.sample*10000)+((m.value2*m.bass)*0.1));
m.xs = (m.xs+(((equal(0, m.q1)*Math.sin((m.v*1)))*m.speed)*Math.atan((m.v*1.51))));
m.ys = (m.ys+((equal(0, m.q1)*Math.sin((m.v*1)))*m.speed));
m.x = (0.5+((0.5*Math.sin((m.xs*0.1)))*Math.cos(((m.time*2)+m.xs))));
m.y = (0.5+((0.5*Math.sin((m.ys*0.1)))*Math.cos(((m.time*2.1)+m.xs))));
m.y = (m.y-(m.sample*0.1));
m.x = ((m.x*0.6)+0.2);
m.y = (m.y+(m.bass*0.1));
m.y = (m.y*0.8);
m.r = ((0.5+(0.5*Math.sin((m.time*6.22))))+0.1);
m.g = (0.4+(0.4*Math.sin((m.time*5.307))));
m.b = (0.4+((0.4*Math.sin((m.time*4.959)))*m.x));
m.xs = ifcond(above(m.xs, 1000), 0, m.xs);
m.ys = ifcond(above(m.ys, 1000), 0, m.ys);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('speed = bass*0.1;\n' + 'v = sample*10000 + value2*bass*0.1;\n' + 'xs = xs + (equal(0,q1))*sin(v*1)*speed*atan(v*1.51);\n' + 'ys = ys + (equal(0,q1))*sin(v*1)*speed;\n' + 'x = 0.5 + 0.5*sin(xs*0.1)*cos(time*2 + xs);\n' + 'y = 0.5 + 0.5*sin(ys*0.1)*cos(time*2.1 + xs);\n' + 'y = y - sample*0.1;\n' + 'x = x*0.6 + 0.2;\n' + 'y = y + bass*0.1;\n' + 'y = y*0.8;\n' + 'r = 0.5 + 0.5*sin(time*6.22) + 0.1;\n' + 'g = 0.4 + 0.4*sin(time*5.307);\n' + 'b = 0.4 + 0.4*sin(time*4.959)*x;\n' + 'xs = if(above(xs,1000),0 ,xs);\n' + 'ys = if(above(ys,1000),0 ,ys);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.27425,
			additive : 0.0,
			border_a : 0.1,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 0.0,
			rad : 2.6671,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.saw = 0;
m.tex_capture = 0;

			m.rkeys = ['saw'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_capture = m.q1;
m.saw = (m.saw-(0.001*m.bass));
m.saw = ifcond(below(m.saw, 0.2), 0.6, m.saw);
m.tex_zoom = m.saw;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_capture  = q1;\n' + 'saw = saw - 0.001*bass;\n' + 'saw = if(below(saw,0.2),0.6,saw);\n' + 'tex_zoom = saw;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.27425,
			additive : 0.0,
			border_a : 0.1,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 0.0,
			rad : 2.6671,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.saw = 0;
m.tex_capture = 0;

			m.rkeys = ['saw'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_capture = m.q1;
m.saw = (m.saw-(0.001*m.bass));
m.saw = ifcond(below(m.saw, 0.1), 0.6, m.saw);
m.tex_zoom = m.saw;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_capture  = q1;\n' + 'saw = saw - 0.001*bass;\n' + 'saw = if(below(saw,0.1),0.6,saw);\n' + 'tex_zoom = saw;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.36964,
			additive : 0.0,
			border_a : 0.1,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 0.0,
			rad : 2.66718,
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
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.30294,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 1.0,
			rad : 2.66718,
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
	'warp' : ('shader_body {\n' + '   vec2 my_uv_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (uv + vec2(0.005, 0.0));\n' + '  tmpvar_3 = texture2D (sampler_blur2, tmpvar_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (uv - vec2(0.005, 0.0));\n' + '  tmpvar_5 = texture2D (sampler_blur2, tmpvar_6);\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale2) + bias2) - ((tmpvar_5.xyz * scale2) + bias2)).x;\n' + '   vec4 tmpvar_8;\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = (uv + vec2(0.0, 0.005));\n' + '  tmpvar_8 = texture2D (sampler_blur2, tmpvar_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = (uv - vec2(0.0, 0.005));\n' + '  tmpvar_10 = texture2D (sampler_blur2, tmpvar_11);\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale2) + bias2) - ((tmpvar_10.xyz * scale2) + bias2)).x;\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_blur2, tmpvar_4);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur2, tmpvar_6);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur2, tmpvar_9);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_blur2, tmpvar_11);\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = tmpvar_7;\n' + '  tmpvar_17.y = tmpvar_12;\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18.x = (((tmpvar_13.xyz * scale2) + bias2) - ((tmpvar_14.xyz * scale2) + bias2)).x;\n' + '  tmpvar_18.y = (((tmpvar_15.xyz * scale2) + bias2) - ((tmpvar_16.xyz * scale2) + bias2)).x;\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19 = ((uv - (tmpvar_17 * 0.005)) + (tmpvar_18 * 0.002));\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_fc_main, tmpvar_19);\n' + '  ret_2.x = tmpvar_20.x;\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_blur3, uv);\n' + '  ret_2.x = (ret_2.x + ((ret_2.x - \n' + '    ((tmpvar_21.xyz * scale3) + bias3)\n' + '  .x) * 0.1));\n' + '  ret_2.x = (ret_2.x + 0.006);\n' + '  ret_2.x = ret_2.x;\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22.x = tmpvar_12;\n' + '  tmpvar_22.y = -(tmpvar_7);\n' + '  my_uv_1 = (uv + ((tmpvar_22 * 0.05) * (1.2 - \n' + '    ((tmpvar_21.xyz * scale3) + bias3)\n' + '  .y)));\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_fw_main, my_uv_1);\n' + '  ret_2.z = tmpvar_23.z;\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_blur1, uv);\n' + '   vec2 x_25;\n' + '  x_25 = (my_uv_1 - uv);\n' + '  ret_2.z = (ret_2.z + ((\n' + '    (ret_2.z - ((tmpvar_24.xyz * scale1) + bias1).z)\n' + '   * \n' + '    sqrt(dot (x_25, x_25))\n' + '  ) * 120.0));\n' + '  ret_2.z = (ret_2.z * 0.85);\n' + '  ret_2.z = (ret_2.z + 0.008);\n' + '   vec2 tmpvar_26;\n' + '  tmpvar_26.x = -(tmpvar_12);\n' + '  tmpvar_26.y = tmpvar_7;\n' + '  my_uv_1 = (tmpvar_26 * 0.05);\n' + '   vec4 tmpvar_27;\n' + '   vec2 P_28;\n' + '  P_28 = (uv + vec2(0.01, 0.0));\n' + '  tmpvar_27 = texture2D (sampler_blur2, P_28);\n' + '   vec4 tmpvar_29;\n' + '   vec2 P_30;\n' + '  P_30 = (uv - vec2(0.01, 0.0));\n' + '  tmpvar_29 = texture2D (sampler_blur2, P_30);\n' + '   vec4 tmpvar_31;\n' + '   vec2 P_32;\n' + '  P_32 = (uv + vec2(0.0, 0.01));\n' + '  tmpvar_31 = texture2D (sampler_blur2, P_32);\n' + '   vec4 tmpvar_33;\n' + '   vec2 P_34;\n' + '  P_34 = (uv - vec2(0.0, 0.01));\n' + '  tmpvar_33 = texture2D (sampler_blur2, P_34);\n' + '   vec2 tmpvar_35;\n' + '  tmpvar_35.x = (((tmpvar_27.xyz * scale2) + bias2) - ((tmpvar_29.xyz * scale2) + bias2)).y;\n' + '  tmpvar_35.y = (((tmpvar_31.xyz * scale2) + bias2) - ((tmpvar_33.xyz * scale2) + bias2)).y;\n' + '  my_uv_1 = (my_uv_1 + (uv - (tmpvar_35 * 0.03)));\n' + '   vec4 tmpvar_36;\n' + '  tmpvar_36 = texture2D (sampler_fw_main, my_uv_1);\n' + '  ret_2.y = tmpvar_36.y;\n' + '   vec4 tmpvar_37;\n' + '  tmpvar_37 = texture2D (sampler_blur3, my_uv_1);\n' + '  ret_2.y = (ret_2.y + ((\n' + '    (ret_2.y - ((tmpvar_37.xyz * scale3) + bias3).y)\n' + '   * 0.1) + 0.03));\n' + '   vec4 tmpvar_38;\n' + '  tmpvar_38.w = 1.0;\n' + '  tmpvar_38.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_38;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret2_1;\n' + '   vec3 ret1_2;\n' + '   vec3 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv).xyz;\n' + '  ret1_2 = tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (((uv - 0.5) * 3.0) + 0.5);\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, P_4).xyz;\n' + '  ret2_1 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = mix (ret1_2, ret2_1, vec3(clamp ((\n' + '    dot (((ret1_2 - ret2_1) + 0.15), vec3(0.32, 0.49, 0.29))\n' + '   * -99.0), 0.0, 1.0)));\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'volume = 0.3*(bass+mid+att);\n' + 'xamptarg = if(equal(frame%15,0),min(0.25*volume*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'yamptarg = if(equal(frame%15,0),min(0.15*volume*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);\n' + 'lastbeat = lastbeat + equal(lastbeat,0)*time;\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = max(bass_att,peakbass_att);\n' + 'beat = above(volume,0.8)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.95 + (1-above(time - lastbeat, 2*beatrate))*0.995);\n' + 'lastbeat = beat*time + (1-beat)*lastbeat;\n' + 'peakbass_att = max(peakbass_att,1.1*meanbass_att);\n' + 'wave_x = xpos + 0.5;\n' + 'wave_y = 1-(ypos + 0.5);\n' + 'wave_r = 0.5 + 0.499*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );\n' + 'wave_g = 0.5 + 0.499*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );\n' + 'wave_b = 0.5 + 0.499*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );\n' + 'wave_mystery = -0.17 + 0.03*(0.6*sin(0.637*time) + 0.4*sin(0.949*time));\n' + 'mv_r = if(beat, 1, ib_r);\n' + 'mv_b = if(beat, wave_b, ib_b);\n' + 'q3 = wave_mystery;\n' + 'q1 = wave_x;\n' + 'q2 = 1-wave_y;\n' + 'q2 = ypos+0.5;\n' + 'warp=0;\n' + 'ob_r = 1-wave_g;\n' + 'ob_b = 1-wave_r;\n' + 'ob_g = 1-wave_b;\n' + 'monitor = wave_y;\n' + 'movement =movement + 0.4*(((bass+bass_att + 0.1*pow((bass+0.6*bass_att+0.2*treb_att),3)))/fps);\n' + 'movement = if(above(movement,10000), 0, movement);\n' + 'rot =1*sin(movement);\n' + 'cx = wave_x;\n' + 'cy = y_pos+0.5;\n' + 'q8 = movement;'),
	'pixel_eqs_str' : ('myy = x-q1;\n' + 'myx = y-q2+0.1;\n' + 'dx = 3*sin(q8*0.675)*(2*myx*myy);\n' + 'dy = 3*sin(q8*0.675)*((myx*myx) - (myy*myy));'),
};

return pmap;
});
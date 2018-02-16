define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 1.0,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 1.0,
		mv_b : 0.4999,
		echo_zoom : 0.996629,
		ob_size : 0.0,
		wave_smoothing : 0.27,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.4999,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : -0.38,
		decay : 0.997,
		wave_a : 0.001185,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 1.0,
		mv_r : 0.4999,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.att = 0;
m.yamp = 0;
m.xamp = 0;
m.yamptarg = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.yaccel = 0;
m.xspeed = 0;
m.xaccel = 0;
m.vol = 0;
m.ydir = 0;
m.xdir = 0;
m.ypos = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.decay = 0.92;
m.vol = div(((m.bass+m.mid)+m.att),6);
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.5*m.vol)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xaccel = (((m.xdir*m.xamp)-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.3*m.vol)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yaccel = (((m.ydir*m.yamp)-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.q1 = m.ypos;
m.q2 = m.xpos;
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+((m.q1*m.q2)*2));
m.rot = (10+((m.rad*m.treb)*0.1));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.010576,
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
m.pulse = 0;
m.t1 = 0;
m.pulse = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.pulse = ifcond(above((m.bass*0.05), m.pulse), (m.pulse+0.001), (m.pulse-0.001));
m.pulse = (m.pulse*above(m.pulse, 0));
m.t1 = m.pulse;
		return m;
	},
		'point_eqs' : function(m) {
m.x = sqrt(((m.sample*m.mid)*0.05));
m.y = (0.5+((0.1+m.t1)*Math.cos((m.sample*20))));
		return m;
	},
		'init_eqs_str' : ('pulse = 0;'),
		'frame_eqs_str' : ('pulse = if(above(bass*.05,pulse),pulse+.001,pulse-.001);\n' + 'pulse = pulse*above(pulse,0);\n' + 't1 = pulse;'),
		'point_eqs_str' : ('x = sqrt(sample*mid*.05);\n' + 'y = .5 + (.1+t1)*cos(sample*20);'),

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
m.pulse = 0;
m.t1 = 0;
m.pulse = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.pulse = ifcond(above((m.bass*0.05), m.pulse), (m.pulse+0.001), (m.pulse-0.001));
m.pulse = (m.pulse*above(m.pulse, 0));
m.t1 = m.pulse;
		return m;
	},
		'point_eqs' : function(m) {
m.x = sqrt(((m.sample*m.mid)*0.05));
m.y = (0.5+(-(0.1+m.t1)*Math.cos((m.sample*20))));
		return m;
	},
		'init_eqs_str' : ('pulse = 0;'),
		'frame_eqs_str' : ('pulse = if(above(bass*.05,pulse),pulse+.001,pulse-.001);\n' + 'pulse = pulse*above(pulse,0);\n' + 't1 = pulse;'),
		'point_eqs_str' : ('x = sqrt(sample*mid*.05);\n' + 'y = .5 + -(.1+t1)*cos(sample*20);'),

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
m.pulse = 0;
m.t1 = 0;
m.pulse = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.pulse = ifcond(above((m.bass*0.05), m.pulse), (m.pulse+0.001), (m.pulse-0.001));
m.pulse = (m.pulse*above(m.pulse, 0));
m.t1 = m.pulse;
		return m;
	},
		'point_eqs' : function(m) {
m.x = (1-sqrt(((m.sample*m.mid)*0.05)));
m.y = (0.5+((0.1+m.t1)*Math.cos((m.sample*20))));
		return m;
	},
		'init_eqs_str' : ('pulse = 0;'),
		'frame_eqs_str' : ('pulse = if(above(bass*.05,pulse),pulse+.001,pulse-.001);\n' + 'pulse = pulse*above(pulse,0);\n' + 't1 = pulse;'),
		'point_eqs_str' : ('x = 1 - sqrt(sample*mid*.05);\n' + 'y = .5 + (.1+t1)*cos(sample*20);'),

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
m.pulse = 0;
m.t1 = 0;
m.pulse = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.pulse = ifcond(above((m.bass*0.05), m.pulse), (m.pulse+0.001), (m.pulse-0.001));
m.pulse = (m.pulse*above(m.pulse, 0));
m.t1 = m.pulse;
		return m;
	},
		'point_eqs' : function(m) {
m.x = (1-sqrt(((m.sample*m.mid)*0.05)));
m.y = (0.5+(-(0.1+m.t1)*Math.cos((m.sample*20))));
		return m;
	},
		'init_eqs_str' : ('pulse = 0;'),
		'frame_eqs_str' : ('pulse = if(above(bass*.05,pulse),pulse+.001,pulse-.001);\n' + 'pulse = pulse*above(pulse,0);\n' + 't1 = pulse;'),
		'point_eqs_str' : ('x = 1 - sqrt(sample*mid*.05);\n' + 'y = .5 + -(.1+t1)*cos(sample*20);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.9,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.36,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.5,
			r : 0.56,
			border_g : 1.0,
			rad : 0.34,
			x : 0.5,
			y : 0.5,
			ang : 0.53,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.bassspin = 0;
m.angle = 0;
m.bassspin = 0;
m.angle = 0;
			m.rkeys = ['bassspin','angle'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = m.angle;
m.bassspin = ifcond(above((m.bass*0.05), m.bassspin), (m.bassspin+0.001), (m.bassspin-0.001));
m.bassspin = (m.bassspin*above(m.bassspin, 0));
m.angle = (m.angle+m.bassspin);
m.r = (m.bass*0.3);
m.g = (m.treb*0.3);
m.b = (m.mid*0.3);
m.r2 = (0.8+(0.2*Math.sin((m.time*1.2))));
m.g2 = (0.8+(0.2*Math.sin((m.time*0.9777))));
m.b2 = (0.8+(0.2*Math.sin((m.time*0.7005))));
m.border_a = (1*above(((m.bass+m.treb)+m.mid), 5));
m.x = (0.5+m.q1);
m.y = (0.5+m.q2);
		return m;
	},
		'init_eqs_str' : ('bassspin = 0;\n' + 'angle = 0;'),
		'frame_eqs_str' : ('ang = angle;\n' + 'bassspin = if(above(bass*.05,bassspin),bassspin+.001,bassspin-.001);\n' + 'bassspin = bassspin*above(bassspin,0);\n' + 'angle = angle + bassspin;\n' + 'r = bass*.3;\n' + 'g = treb*.3;\n' + 'b = mid*.3;\n' + 'r2 = .8+.2*sin(time*1.2);\n' + 'g2 = .8+.2*sin(time*.9777);\n' + 'b2 = .8+.2*sin(time*.7005);\n' + 'border_a = 1*above(bass+treb+mid,5);\n' + 'x = .5 + q1;\n' + 'y = .5 + q2;'),

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
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.108073,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.bassspin = 0;
m.ypos = 0;
m.xpos = 0;
m.bassspin = 0;
m.xpos = 0.25;
m.ypos = 0.25;
			m.rkeys = ['ypos','xpos','bassspin'];
			return m;
		},
		'frame_eqs' : function(m) {
m.bassspin = ifcond(above((m.bass*0.05), m.bassspin), (m.bassspin+0.001), (m.bassspin-0.001));
m.bassspin = (m.bassspin*above(m.bassspin, 0));
m.xpos = (m.xpos+m.bassspin);
m.ypos = (m.ypos+m.bassspin);
m.x = ((0.5+m.q1)+(0.13*Math.sin(m.xpos)));
m.y = ((0.5+m.q2)+(0.18*Math.cos(m.ypos)));
		return m;
	},
		'init_eqs_str' : ('bassspin = 0;\n' + 'xpos = .25;\n' + 'ypos = .25;'),
		'frame_eqs_str' : ('bassspin = if(above(bass*.05,bassspin),bassspin+.001,bassspin-.001);\n' + 'bassspin = bassspin*above(bassspin,0);\n' + 'xpos = xpos + bassspin;\n' + 'ypos = ypos + bassspin;\n' + 'x = .5 + q1 + .13*sin(xpos);\n' + 'y = .5 + q2 + .18*cos(ypos);'),

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
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.105693,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 29.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.bassspin = 0;
m.ypos = 0;
m.xpos = 0;
m.bassspin = 0;
m.xpos = 2.3;
m.ypos = 2.3;
			m.rkeys = ['ypos','xpos','bassspin'];
			return m;
		},
		'frame_eqs' : function(m) {
m.bassspin = ifcond(above((m.bass*0.05), m.bassspin), (m.bassspin+0.001), (m.bassspin-0.001));
m.bassspin = (m.bassspin*above(m.bassspin, 0));
m.xpos = (m.xpos+m.bassspin);
m.ypos = (m.ypos+m.bassspin);
m.x = ((0.5+m.q1)+(0.13*Math.sin(m.xpos)));
m.y = ((0.5+m.q2)+(0.18*Math.cos(m.ypos)));
		return m;
	},
		'init_eqs_str' : ('bassspin = 0;\n' + 'xpos = 2.3;\n' + 'ypos = 2.3;'),
		'frame_eqs_str' : ('bassspin = if(above(bass*.05,bassspin),bassspin+.001,bassspin-.001);\n' + 'bassspin = bassspin*above(bassspin,0);\n' + 'xpos = xpos + bassspin;\n' + 'ypos = ypos + bassspin;\n' + 'x = .5 + q1 +.13*sin(xpos);\n' + 'y = .5 + q2 + .18*cos(ypos);'),

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
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.091434,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.bassspin = 0;
m.ypos = 0;
m.xpos = 0;
m.bassspin = 0;
m.xpos = 4.5;
m.ypos = 4.5;
			m.rkeys = ['ypos','xpos','bassspin'];
			return m;
		},
		'frame_eqs' : function(m) {
m.bassspin = ifcond(above((m.bass*0.05), m.bassspin), (m.bassspin+0.001), (m.bassspin-0.001));
m.bassspin = (m.bassspin*above(m.bassspin, 0));
m.xpos = (m.xpos+m.bassspin);
m.ypos = (m.ypos+m.bassspin);
m.x = ((0.5+m.q1)+(0.13*Math.sin(m.xpos)));
m.y = ((0.5+m.q2)+(0.18*Math.cos(m.ypos)));
		return m;
	},
		'init_eqs_str' : ('bassspin = 0;\n' + 'xpos = 4.5;\n' + 'ypos = 4.5;'),
		'frame_eqs_str' : ('bassspin = if(above(bass*.05,bassspin),bassspin+.001,bassspin-.001);\n' + 'bassspin = bassspin*above(bassspin,0);\n' + 'xpos = xpos + bassspin;\n' + 'ypos = ypos + bassspin;\n' + 'x = .5 + q1 + .13*sin(xpos);\n' + 'y = .5 + q2 + .18*cos(ypos);'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'decay = .92;\n' + 'vol = (bass+mid+att)/6;\n' + 'xamptarg = if(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xaccel = xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'yamptarg = if(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yaccel = ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'q1 = ypos;\n' + 'q2 = xpos;'),
	'pixel_eqs_str' : ('zoom = zoom + (q1*q2)*2;\n' + 'rot = 10+(rad*treb*.1);'),
};

return pmap;
});
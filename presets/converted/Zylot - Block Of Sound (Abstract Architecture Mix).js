define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 2.016,
		wave_scale : 0.124746,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : -0.1,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 0.7,
		echo_zoom : 2.0,
		ob_size : 0.01,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.03,
		wave_y : 0.96,
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
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.5,
		decay : 0.98,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 0.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.att = 0;
m.q3 = 0;
m.centerx = 0;
m.centery = 0;
m.yamp = 0;
m.ze = 0;
m.xamp = 0;
m.yamptarg = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.xspeed = 0;
m.dye = 0;
m.dxe = 0;
m.vol = 0;
m.ydir = 0;
m.xdir = 0;
m.zoomerx = 0;
m.zoomery = 0;
m.ypos = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.vol = (0.167*((m.bass+m.mid)+m.att));
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.5*m.vol)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.3*m.vol)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.wave_x = m.centerx;
m.wave_y = Math.abs((m.centery-1));
m.centerx = ((1.75*m.xpos)+0.5);
m.centery = ((1.75*m.ypos)+0.5);
m.q1 = m.centerx;
m.q2 = m.centery;
m.q3 = (0.06+(m.bass*0.04));
m.wave_r = (m.bass*0.3);
m.wave_g = (m.treb*0.3);
m.wave_b = (m.mid*0.3);
		m.rkeys = ['ze','dye','dxe'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = ifcond(above(m.x, (m.q1-m.q3)), ifcond(below(m.x, (m.q1+m.q3)), ifcond(above(m.y, (m.q2-m.q3)), ifcond(below(m.y, (m.q2+m.q3)), 1, (0.94+m.ze)), (0.94+m.ze)), (0.94+m.ze)), (0.94+m.ze));
m.zoomerx = ifcond(above(m.x, m.q1), 0.01, -0.01);
m.zoomery = ifcond(above(m.y, m.q2), 0.01, -0.01);
m.dx = ifcond(above(m.x, (m.q1-m.q3)), ifcond(below(m.x, (m.q1+m.q3)), ifcond(above(m.y, (m.q2-m.q3)), ifcond(below(m.y, (m.q2+m.q3)), m.zoomerx, (0.7+m.dxe)), (0.7+m.dxe)), (0.7+m.dxe)), (0.7+m.dxe));
m.dy = ifcond(above(m.x, (m.q1-m.q3)), ifcond(below(m.x, (m.q1+m.q3)), ifcond(above(m.y, (m.q2-m.q3)), ifcond(below(m.y, (m.q2+m.q3)), m.zoomery, (0.7+m.dye)), (0.7+m.dye)), (0.7+m.dye)), (0.7+m.dye));
m.dxe = (0.2+(0.2*Math.sin((m.time*0.444))));
m.dye = (0.2+(0.2*Math.cos((m.time*0.222))));
m.ze = (0.04*Math.sin((m.time*0.777)));
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
			a : 0.0,
			enabled : 1.0,
			b : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			g2 : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.att = 0;
m.centerx = 0;
m.centery = 0;
m.yamp = 0;
m.xamp = 0;
m.yamptarg = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.xspeed = 0;
m.vol = 0;
m.ydir = 0;
m.xdir = 0;
m.mis = 0;
m.ypos = 0;
m.xpos = 0;

			m.rkeys = ['centerx','centery','yamp','xamp','yamptarg','xamptarg','yspeed','xspeed','ydir','xdir','ypos','xpos'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.ang+(10*Math.sin((m.time*0.8))));
m.vol = (0.167*((m.bass+m.mid)+m.att));
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.5*m.vol)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.3*m.vol)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.x = m.centerx;
m.y = Math.abs((m.centery-1));
m.centerx = ((1.75*m.xpos)+0.5);
m.centery = ((1.75*m.ypos)+0.5);
m.r2 = (0.5+(0.2*Math.sin((m.time*0.666))));
m.g2 = (0.5+(0.2*Math.sin((m.time*0.555))));
m.b2 = (0.5+(0.2*Math.sin((m.time*0.777))));
m.rad = (m.rad+(m.bass*0.1));
m.border_r = (m.bass*0.3);
m.border_g = (m.treb*0.3);
m.border_b = (m.mis*0.3);
m.r = ifcond(above(m.bass, 1.3), 1, 0);
m.g = ifcond(above(m.bass, 1.3), 1, 0);
m.b = ifcond(above(m.bass, 1.3), 1, 0);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = ang + 10*sin(time*.8);\n' + 'vol = 0.167*(bass+mid+att);\n' + 'xamptarg = if(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'yamptarg = if(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'x = centerx;\n' + 'y = abs(centery-1);\n' + 'centerx = 1.75*xpos + 0.5;\n' + 'centery = 1.75*ypos + 0.5;\n' + 'r2 = .5+.2*sin(time*.666);\n' + 'g2 = .5+.2*sin(time*.555);\n' + 'b2 = .5+.2*sin(time*.777);\n' + 'rad = rad + bass*.1;\n' + 'border_r = bass*.3;\n' + 'border_g = treb*.3;\n' + 'border_b = mis*.3;\n' + 'r = if(above(bass,1.3),1,0);\n' + 'g = if(above(bass,1.3),1,0);\n' + 'b = if(above(bass,1.3),1,0);'),

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
	'frame_eqs_str' : ('warp = 0;\n' + 'vol = 0.167*(bass+mid+att);\n' + 'xamptarg = if(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'yamptarg = if(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'wave_x = centerx;\n' + 'wave_y = abs(centery-1);\n' + 'centerx = 1.75*xpos + 0.5;\n' + 'centery = 1.75*ypos + 0.5;\n' + 'q1 = centerx;\n' + 'q2 = centery;\n' + 'q3 = .06 + bass*.04;\n' + 'wave_r =  bass*.3;\n' + 'wave_g =  treb*.3;\n' + 'wave_b =  mid*.3;'),
	'pixel_eqs_str' : ('zoom = if(above(x,q1 - q3),if(below(x,q1 + q3),if(above(y,q2 - q3),if(below(y,q2 + q3),1,.94+ze),.94+ze),.94+ze),.94+ze);\n' + 'zoomerx = if(above(x,q1),.01,-.01);\n' + 'zoomery = if(above(y,q2),.01,-.01);\n' + 'dx = if(above(x,q1 - q3),if(below(x,q1 + q3),if(above(y,q2 - q3),if(below(y,q2 + q3),zoomerx,.7+dxe),.7+dxe),.7+dxe),.7+dxe);\n' + 'dy = if(above(x,q1 - q3),if(below(x,q1 + q3),if(above(y,q2 - q3),if(below(y,q2 + q3),zoomery,.7+dye),.7+dye),.7+dye),.7+dye);\n' + 'dxe = .2 + .2*sin(time*.444);\n' + 'dye = .2+.2*cos(time*.222);\n' + 'ze = .04*sin(time*.777);'),
};

return pmap;
});
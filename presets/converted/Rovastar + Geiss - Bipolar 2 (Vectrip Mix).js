define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.998,
		wave_g : 0.45,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.408,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 0.0,
		red_blue : 0.0,
		wave_mode : 1.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 0.9,
		ib_r : 0.25,
		mv_b : 0.7,
		echo_zoom : 0.999609,
		ob_size : 0.01,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.7,
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
		rot : -0.01,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 5.9,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.4,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.mv_x_range = 0;
m.mv_y_range = 0;
m.att = 0;
m.mv_x_speed = 0;
m.mv_y_speed = 0;
m.yamp = 0;
m.xamp = 0;
m.yamptarg = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.yaccel = 0;
m.xspeed = 0;
m.xaccel = 0;
m.vol = 0;
m.mv_y_amount = 0;
m.ydir = 0;
m.xdir = 0;
m.mv_x_amount = 0;
m.ypos = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.100*((0.60*Math.sin((0.933*m.time)))+(0.40*Math.sin((1.045*m.time))))));
m.wave_g = (m.wave_g+(0.050*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((0.956*m.time))))));
m.decay = (m.decay-(0.01*equal(mod(m.frame,50), 0)));
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
m.mv_x_speed = 16;
m.mv_y_speed = 12;
m.mv_x_range = 0.01;
m.mv_y_range = 0.01;
m.mv_x_amount = 1.25;
m.mv_y_amount = 1.25;
m.mv_x = ((m.mv_x_amount+m.mv_x_range)+(m.mv_x_range*Math.sin(((m.mv_x_speed*m.ypos)+(Math.sin((m.time*0.964))-(0.5*Math.cos((m.time*0.256))))))));
m.mv_y = ((m.mv_y_amount+m.mv_y_range)+(m.mv_y_range*Math.sin(((m.mv_y_speed*m.xpos)-(Math.cos((m.time*1.345))-(0.5*Math.cos((m.time*0.331))))))));
m.mv_b = (m.mv_b-(0.3*Math.sin((m.time*5.211))));
m.mv_r = (m.mv_r+(0.25*Math.cos((m.time*1.91))));
m.mv_g = (m.mv_g+(0.25*Math.cos((m.time*1.861))));
m.mv_l = (100+(100*Math.min(((m.bass*0.5)+(m.bass_att*0.5)), 2)));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (0.9615+(m.rad*0.1));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.100*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );\n' + 'wave_g = wave_g + 0.050*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );\n' + 'decay = decay - 0.01*equal(frame%50,0);\n' + 'vol = (bass+mid+att)/6;\n' + 'xamptarg = if(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xaccel = xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'yamptarg = if(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yaccel = ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'mv_x_speed = 16;\n' + 'mv_y_speed = 12;\n' + 'mv_x_range = 0.01;\n' + 'mv_y_range = 0.01;\n' + 'mv_x_amount = 1.25;\n' + 'mv_y_amount = 1.25;\n' + 'mv_x = mv_x_amount +mv_x_range + mv_x_range*sin(mv_x_speed*ypos+(sin(time*0.964)-0.5*cos(time*0.256)));\n' + 'mv_y = mv_y_amount + mv_y_range+ mv_y_range*sin(mv_y_speed*xpos-(cos(time*1.345)-0.5*cos(time*0.331)));\n' + 'mv_b = mv_b - 0.3*sin(time*5.211);\n' + 'mv_r = mv_r + 0.25*cos(time*1.91);\n' + 'mv_g = mv_g + 0.25*cos(time*1.861);\n' + 'mv_l =  100 + 100*min(bass*0.5 + bass_att*0.5,2);'),
	'pixel_eqs_str' : ('zoom=0.9615+rad*0.1;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.5,
		mv_x : 0.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.6401,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.01,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.5,
		mv_b : 1.0,
		echo_zoom : 0.999609,
		ob_size : 0.01,
		wave_smoothing : 0.27,
		warpanimspeed : 5.99579,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.96,
		zoom : 0.998531,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.692,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.2,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.002,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.9,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.5,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q4 = 0;
m.q5 = 0;
m.box = 0;
m.yamp = 0;
m.xamp = 0;
m.yamptarg = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.yaccel = 0;
m.xspeed = 0;
m.xaccel = 0;
m.ydir = 0;
m.xdir = 0;
m.volume = 0;
m.ypos = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.ob_r = (0.7-(0.3*((0.5*Math.sin((m.time*1.701)))+(0.3*Math.cos((m.time*0.438))))));
m.ob_g = (0.5-(0.4*Math.sin((m.time*1.724))));
m.ob_b = (0.5-(0.35*Math.cos((m.time*1.196))));
m.warp = 0;
m.ib_size = 0.02;
m.ib_r = (m.ib_r+(0.5*Math.sin((m.time*3.034))));
m.ib_g = (m.ib_g+(0.5*Math.sin((m.time*2.147))));
m.ib_b = (m.ib_b-(0.5*Math.sin((m.time*3.431))));
m.dx = (m.dx-(0.005*Math.sin((m.time*0.23))));
m.dy = (m.dy-(0.005*Math.sin((m.time*0.2))));
m.volume = (0.15*(((((m.bass+m.bass_att)+m.treb)+m.treb_att)+m.mid)+m.mid_att));
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.5*m.volume)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xaccel = (((m.xdir*m.xamp)-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.q2 = m.xpos;
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.3*m.volume)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yaccel = (((m.ydir*m.yamp)-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.q4 = m.ypos;
m.q5 = Math.max((Math.max(m.bass, m.bass_att)-1.2), 0);
		m.rkeys = ['cy','cx','rot','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.box = (0.5+(0.8*(mod((2*m.x),2)+mod((2*m.y),2))));
m.q1 = (((2*m.q5)+7.7)+(0.3*(Math.sin((pow(m.x, 3)+(0.137*m.time)))-Math.cos((pow(m.y, 3)+(0.213*m.time))))));
m.zoom = ifcond(above(m.box, 1), (m.q1*0.1), m.zoom);
m.rot = ifcond(above(m.box, 1), (0.5*Math.sin(((0.5*m.rad)+(0.385*m.time)))), m.rot);
m.cx = (m.cx-(0.5*Math.sin((m.rad+(2*m.q4)))));
m.cy = (m.cy+(0.11*Math.sin(((sqrt(2)-m.rad)-(18*m.q2)))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('ob_r = 0.7 - 0.3*(0.5*sin(time*1.701)+ 0.3*cos(time*0.438));\n' + 'ob_g = 0.5- 0.4*sin(time*1.724);\n' + 'ob_b = 0.5 - 0.35*cos(time*1.196);\n' + 'warp =0;\n' + 'ib_size = 0.02;\n' + 'ib_r = ib_r + 0.5*sin(time*3.034);\n' + 'ib_g = ib_g + 0.5*sin(time*2.147);\n' + 'ib_b = ib_b - 0.5*sin(time*3.431);\n' + 'dx = dx -0.005*sin(time*0.23);\n' + 'dy = dy - 0.005*sin(time*0.2);\n' + 'volume = 0.15*(bass+bass_att+treb+treb_att+mid+mid_att);\n' + 'xamptarg = if(equal(frame%15,0),min(0.5*volume*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xaccel = xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'q2 = xpos;\n' + 'yamptarg = if(equal(frame%15,0),min(0.3*volume*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yaccel = ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'q4 = ypos;\n' + 'q5 = max(max(bass,bass_att)-1.2,0);'),
	'pixel_eqs_str' : ('box =0.5+0.8*(2*x%2+2*y%2);\n' + 'q1 = 2*q5+7.7+0.3*(sin(pow(x,3)+0.137*time)-cos(pow(y,3)+0.213*time));\n' + 'zoom = if(above(box,1),q1*.1,zoom);\n' + 'rot = if(above(box,1),0.5*sin(0.5*rad+0.385*time),rot);\n' + 'cx = cx - 0.5*sin(rad+2*q4);\n' + 'cy = cy + 0.11*sin((sqrt(2)-rad)-18*q2);'),
};

return pmap;
});
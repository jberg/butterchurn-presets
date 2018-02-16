define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.993998,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.334693,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.005,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.4,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.01,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.7,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.1,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.2199,
		decay : 1.0,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.yamp = 0;
m.xamp = 0;
m.yamptarg = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.xspeed = 0;
m.vol = 0;
m.newzoom = 0;
m.ydir = 0;
m.xdir = 0;
m.newrad = 0;
m.newx = 0;
m.newy = 0;
m.ypos = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = (m.wave_r+(0.45*((0.5*Math.sin((m.time*0.701)))+(0.3*Math.cos((m.time*0.438))))));
m.wave_b = (m.wave_b-(0.4*((0.5*Math.sin((m.time*4.782)))+(0.5*Math.cos((m.time*0.722))))));
m.wave_g = (m.wave_g+(0.4*Math.sin((m.time*1.931))));
m.vol = (0.167*(m.bass+m.mid));
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.5*m.vol)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.wave_x = ((1.25*m.xpos)+0.5);
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.3*m.vol)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.wave_y = ((1.25*m.ypos)+0.5);
m.q2 = (((1.1*m.xpos)+(0.25*m.ypos))+0.5);
m.q1 = (((1.1*m.ypos)+(0.25*m.xpos))+0.5);
m.ib_r = (0.3+m.xpos);
m.ib_b = (0.06*m.bass);
m.ib_g = (0.25+m.ypos);
m.q3 = (10+(8*((0.6*Math.sin((0.423*m.time)))+(0.4*Math.sin((0.253*m.time))))));
m.q4 = div(1,m.q3);
m.q5 = (0.5*sign(m.xpos));
m.q6 = (0.5*sign(m.ypos));
m.monitor = m.rot;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.cx = ((bitand(0,((m.x*m.q3)-m.q5))+m.q5)*m.q4);
m.cy = ((bitand(0,((m.y*m.q3)-m.q6))+m.q6)*m.q4);
m.newx = (m.q1-m.x);
m.newy = (m.q2-m.y);
m.newrad = (sqrt(((m.newx*m.newx)+((0.5625*m.newy)*m.newy)))*2);
m.newzoom = pow((1.05+(0.03*m.newrad)), pow((0.01+Math.sin((m.newrad*m.newrad))), ((m.newrad*2)-1)));
m.dx = ((m.newx*m.newzoom)-m.newx);
m.dy = ((m.newy*m.newzoom)-m.newy);
m.dx = (m.dx*0.1);
m.dy = (m.dy*0.1);
m.rot = ((2*m.newrad)*((0.5*(0.5-m.rad))+0.1));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'wave_r = wave_r + 0.45*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));\n' + 'wave_b = wave_b - 0.4*(0.5*sin(time*4.782)+0.5*cos(time*0.722));\n' + 'wave_g = wave_g + 0.4*sin(time*1.931);\n' + 'vol = 0.167*(bass+mid);\n' + 'xamptarg = if(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'wave_x = 1.25*xpos + 0.5;\n' + 'yamptarg = if(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'wave_y = 1.25*ypos + 0.5;\n' + 'q2=1.1*xpos +0.25*ypos + 0.5;\n' + 'q1=1.1*ypos +0.25*xpos + 0.5;\n' + 'ib_r = 0.3+xpos;\n' + 'ib_b = 0.06*bass;\n' + 'ib_g = 0.25+ypos;\n' + 'q3 = 10+8*(0.6*sin(0.423*time) + 0.4*sin(0.253*time));\n' + 'q4 = 1/q3;\n' + 'q5 = 0.5*sign(xpos);\n' + 'q6 = 0.5*sign(ypos);\n' + 'monitor = rot;'),
	'pixel_eqs_str' : ('cx = ((0&(x*q3-q5))+q5)*q4;\n' + 'cy = ((0&(y*q3-q6))+q6)*q4;\n' + 'newx = q1-x;\n' + 'newy = q2-y;\n' + 'newrad = sqrt((newx)*(newx)+0.5625*(newy)*(newy))*2;\n' + 'newzoom = pow(1.05 + 0.03*newrad, pow(0.01+sin(newrad*newrad), newrad*2-1));\n' + 'dx = (newx)*newzoom - newx;\n' + 'dy = (newy)*newzoom - newy;\n' + 'dx =dx*0.1;\n' + 'dy=dy*0.1;\n' + 'rot = 2*newrad*(0.5*(0.5-rad)+0.1);'),
};

return pmap;
});
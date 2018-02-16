define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.3,
		mv_x : 6.4,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 1.440001,
		wave_scale : 0.241456,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 0.0,
		sy : 0.9999,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.741921,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.39,
		echo_zoom : 1.0,
		ob_size : 0.005,
		wave_smoothing : 0.09,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.48,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.4,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.995,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 0.7599,
		rating : 0.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.dx_r = 0;
m.dy_r = 0;
m.vol = 0;
m.rad = 0;
m.x = 0;
m.y = 0;
m.mytime = 0;
m.ypos = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.45*((0.5*Math.sin((m.time*0.701)))+(0.3*Math.cos((m.time*0.438))))));
m.wave_b = (m.wave_b-(0.4*((0.5*Math.sin((m.time*4.782)))+(0.5*Math.cos((m.time*0.722))))));
m.wave_g = (m.wave_g+(0.4*Math.sin((m.time*1.931))));
m.vol = (0.15*(((m.bass_att+m.bass)+m.mid)+m.mid_att));
m.dx_r = ifcond(equal(m.q3, 0), ifcond(above(m.x, m.xpos), ((m.dx*m.q1)-m.xpos), ((m.dx+m.q2)-m.xpos)), m.dx);
m.dy_r = ifcond(equal(m.q3, 0), ifcond(above(m.y, m.ypos), ((m.dy*m.q1)-m.ypos), ((m.dy+m.q2)-m.ypos)), m.dy);
m.rot = (m.rot+(0.05*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.479*m.time))))));
m.mytime = 0.7;
m.q1 = Math.sin(((m.time*m.mytime)*4));
m.q2 = Math.cos(((m.time*m.mytime)*2));
m.q3 = (Math.abs((m.rad-0.5))*(m.q2*m.q1));
m.xpos = div(0.5,m.vol);
m.ypos = div(0.5,m.vol);
m.wave_x = (0.5+(0.1*Math.sin((m.time+div(rand(100),100)))));
m.wave_y = (0.5+(0.1*Math.cos((m.time+div(rand(100),100)))));
m.ib_r = (m.q3+m.q2);
m.ib_b = (m.q2+m.q1);
m.ib_g = (m.q1+m.q3);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = ((ifcond(below(m.q1, 0), (0.5*m.x), ifcond(equal(m.q2, 0), (0.9*(1-m.x)), ifcond(above(m.q3, 0), (0.9*m.y), (0.9*(1-m.y)))))+0.6)-(0.13*Math.min(m.q3, 0.3)));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.45*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));\n' + 'wave_b = wave_b - 0.4*(0.5*sin(time*4.782)+0.5*cos(time*0.722));\n' + 'wave_g = wave_g + 0.4*sin(time*1.931);\n' + 'vol=0.15*(bass_att+bass+mid+mid_att);\n' + 'dx_r=if(equal(q3,0),if(above(x,xpos),dx*q1-xpos,dx+q2-xpos),dx);\n' + 'dy_r=if(equal(q3,0),if(above(y,ypos),dy*q1-ypos,dy+q2-ypos),dy);\n' + 'rot = rot+0.05*( 0.60*sin(0.381*time) + 0.40*sin(0.479*time) );\n' + 'mytime=.7;\n' + 'q1=sin(time*mytime*4);\n' + 'q2=cos(time*mytime*2);\n' + 'q3=abs(rad-.5)*(q2*q1);\n' + 'xpos=.5/vol;\n' + 'ypos=.5/vol;\n' + 'wave_x=.5+0.1*sin(time+rand(100)/100);\n' + 'wave_y=.5+0.1*cos(time+rand(100)/100);\n' + 'ib_r=q3+q2;\n' + 'ib_b=q2+q1;\n' + 'ib_g=q1+q3;'),
	'pixel_eqs_str' : ('zoom = if(below(q1,0),0.5*x,if(equal(q2,0),0.9*(1-x),if(above(q3,0),0.9*y,0.9*(1-y)))) + 0.6 - 0.13*(min(q3,0.3));'),
};

return pmap;
});
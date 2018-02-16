define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.3,
		mv_x : 0.0,
		warpscale : 1.0018,
		brighten : 0.0,
		mv_y : 2.400001,
		wave_scale : 0.744429,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 0.999999,
		ib_size : 0.01,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.39961,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.39,
		echo_zoom : 1.0,
		ob_size : 0.005,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0018,
		wave_dots : 0.0,
		mv_g : 0.48,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.998169,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.4,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.02,
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
		rating : 5.0,
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
m.dx = ifcond(below(m.q1, 0), (m.dx-((m.dx_r*m.q3)*0.3)), m.dx);
m.dy = ifcond(below(m.q1, 0), (m.dy-((m.dx_r*m.q3)*0.3)), m.dy);
m.dx_r = ifcond(equal(m.q3, 0), ifcond(above(m.x, m.xpos), ((m.dx-m.q1)-m.xpos), ((m.dx+m.q2)-m.xpos)), m.dx);
m.dy_r = ifcond(equal(m.q3, 0), ifcond(above(m.y, m.ypos), ((m.dy-m.q1)-m.ypos), ((m.dy+m.q2)-m.ypos)), m.dy);
m.rot = (m.rot+(0.030*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.479*m.time))))));
m.mytime = 0.7;
m.q1 = Math.sin(((m.time*m.mytime)*4));
m.q2 = Math.sin(((m.time*m.mytime)*2));
m.q3 = (Math.abs((m.rad-0.5))*(m.q2*m.q1));
m.xpos = div(0.5,m.vol);
m.ypos = div(0.5,m.vol);
m.wave_x = 0.5;
m.wave_y = 0.5;
m.monitor = m.q3;
m.ib_r = m.q3;
m.ib_b = m.q2;
m.ib_g = m.q1;
		m.rkeys = ['rot','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (((m.zoom+(0.05*m.q3))+(0.05*m.q1))-m.vol);
m.rot = (m.rot+((m.zoom-1.0)*0.16));
m.zoom = ((m.zoom+(((m.ypos*m.q2)-m.q1)*(0.06+(0.12*Math.sin((m.time*0.351))))))+(((m.xpos*m.q2)-m.q1)*(0.06+(0.12*Math.cos((m.time*0.351))))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.45*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));\n' + 'wave_b = wave_b - 0.4*(0.5*sin(time*4.782)+0.5*cos(time*0.722));\n' + 'wave_g = wave_g + 0.4*sin(time*1.931);\n' + 'vol=0.15*(bass_att+bass+mid+mid_att);\n' + 'dx=if(below(q1,0),dx-dx_r*q3*.3,dx);\n' + 'dy=if(below(q1,0),dy-dx_r*q3*.3,dy);\n' + 'dx_r=if(equal(q3,0),if(above(x,xpos),dx-q1-xpos,dx+q2-xpos),dx);\n' + 'dy_r=if(equal(q3,0),if(above(y,ypos),dy-q1-ypos,dy+q2-ypos),dy);\n' + 'rot = rot+0.030*( 0.60*sin(0.381*time) + 0.40*sin(0.479*time) );\n' + 'mytime=.7;\n' + 'q1=sin(time*mytime*4);\n' + 'q2=sin(time*mytime*2);\n' + 'q3=abs(rad-.5)*(q2*q1);\n' + 'xpos=.5/vol;\n' + 'ypos=.5/vol;\n' + 'wave_x=.5;\n' + 'wave_y=.5;\n' + 'monitor=q3;\n' + 'ib_r=q3;\n' + 'ib_b=q2;\n' + 'ib_g=q1;'),
	'pixel_eqs_str' : ('zoom=zoom+.05*q3+.05*q1-vol;\n' + 'rot=rot+(zoom-1.0)*0.16;\n' + 'zoom = zoom+(ypos*q2-q1)*(0.06+0.12*sin(time*0.351))+(xpos*q2-q1)*(0.06+0.12*cos(time*0.351));'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.6,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 1.248,
		wave_scale : 0.781784,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.015,
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
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 0.999608,
		ob_size : 0.025,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.000494,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : -0.2,
		decay : 0.97,
		wave_a : 4.099998,
		ob_g : 1.0,
		ib_a : 1.0,
		wave_b : 0.3,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.radx = 0;
m.d = 0;
m.q5 = 0;
m.rady = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.r = 0;
m.snare = 0;
m.y2 = 0;
m.x2 = 0;
m.rad_cycle = 0;
m.smear = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.q1 = bitand(m.bass,(m.time*0.43));
m.q2 = bitand(m.bass_att,(m.time*0.63));
m.q3 = bitand(m.treb,(m.time*0.76));
m.q4 = bitand(m.treb_att,(m.time*0.61));
m.q5 = bitand(m.mid,(m.time*0.27));
m.q6 = bitand(m.mid_att,(m.time*0.23));
m.q7 = ifcond(above(below(m.q1, m.q3), below(m.q3, m.q1)), (m.q3-(m.q2*Math.sin(m.q1))), (m.q2-(m.q1*Math.sin(m.q3))));
m.q8 = ifcond(above(below(m.q2, m.q3), below(m.q2, m.q1)), (m.q2-(m.q1*Math.sin(m.q5))), (m.q5-(m.q6*Math.sin(m.q7))));
m.wave_r = (m.wave_r+(0.6*Math.sin(m.q1)));
m.wave_b = (m.wave_b+(0.3*Math.sin(m.q2)));
m.wave_g = (m.wave_g*Math.sin(m.q7));
m.ob_r = m.wave_r;
m.ob_b = m.wave_b;
m.ob_g = m.wave_g;
m.ib_r = m.wave_r;
m.ib_g = m.wave_b;
m.ib_b = m.wave_g;
		m.rkeys = ['zoom','rot','smear'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rad_cycle = ((((((m.rad*m.rad)*m.x)*60)*m.rad)*Math.sin(m.q6))+1);
m.d = ((0.03*Math.sin(((m.rad*3.14)*Math.sin(m.q3))))+1);
m.r = (m.d-(0.03*Math.sin(((m.ang*3.14)*Math.sin(m.q2)))));
m.radx = below(((0.3-m.rad)+m.x), ((0.3+m.rad)-m.x));
m.rady = below(((0.3-m.rad)+m.y), ((0.3+m.rad)-m.y));
m.snare = ((((below((((1*m.rad)-m.x)-m.y), ((((m.x-m.rad)-0.3)-m.x)-((m.y*m.d)*m.r)))*Math.sin(((m.q1-m.d)+m.r)))*m.d)*m.r)+0.01);
m.x2 = (above(m.x, m.rad)+0.01);
m.y2 = (above(m.y, m.rad)+0.01);
m.smear = (ifcond(equal((m.rad-0.03), (m.ang*m.rad)), (m.smear*Math.sin(m.q1)), ((m.rot-((((div(div(div(div((0.1*m.ang),2),2),2),2)*m.rad)*Math.sin(m.rad))*Math.sin(m.q3))*Math.sin(((m.rad_cycle+(0.3*Math.sin(m.q1)))+0.1))))+(0.03*Math.sin(m.q2))))+(0.01*Math.sin(m.rad_cycle)));
m.zoom = (((m.zoom-(0.05*Math.sin((((m.ang*m.rad)*3.14)*Math.sin(m.q1)))))-(0.05*Math.sin(((m.rad*3.14)*Math.sin(m.q2)))))+(0.05*Math.sin(((m.ang*3.14)*Math.sin(m.q3)))));
m.rot = ((m.rot+((0.03*Math.sin((m.ang*3.14)))*m.rad))+((0.02*Math.sin((m.q1-((m.rad*m.x)*3.14))))*Math.sin(m.q1)));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('q1=bass&time*.43;\n' + 'q2=bass_att&time*.63;\n' + 'q3=treb&time*.76;\n' + 'q4=treb_att&time*.61;\n' + 'q5=mid&time*.27;\n' + 'q6=mid_Att&time*.23;\n' + 'q7=if(Above(below(q1,q3),below(q3,q1)),q3-q2*sin(Q1),q2-q1*sin(q3));\n' + 'q8=if(Above(below(q2,q3),below(q2,q1)),q2-q1*sin(Q5),q5-q6*sin(q7));\n' + 'wave_r=wave_r+.6*sin(q1);\n' + 'wave_b=wave_b+.3*sin(q2);\n' + 'wave_g=wave_g*sin(Q7);\n' + 'ob_r=wave_r;\n' + 'ob_b=wave_B;\n' + 'ob_g=wave_g;\n' + 'ib_r=wave_r;\n' + 'ib_g=wave_b;\n' + 'ib_b=wave_g;'),
	'pixel_eqs_str' : ('rad_cycle=rad*rad*x*60*rad*sin(q6)+1;\n' + 'd=.03*(sin(rad*3.14*sin(q3)))+1;\n' + 'r=d-.03*(sin(ang*3.14*sin(q2)));\n' + 'radx=below(0.3-rad+x,0.3+rad-x);\n' + 'rady=below(0.3-rad+y,0.3+rad-y);\n' + 'snare=below(1*rad-x-y,x-rad-.3-x-y*d*r)*sin(q1-d+r)*d*r+.01;\n' + 'x2=above(x,rad)+.01;\n' + 'y2=above(y,rad)+.01;\n' + 'smear=if(equal(rad-.03,ang*rad),smear*sin(Q1),rot-.1*ang/2/2/2/2*Rad*sin(Rad)*sin(q3)*sin(rad_cycle+.3*sin(q1)+.1)+.03*sin(Q2))+.01*sin(rad_cycle);\n' + 'zoom=zoom-.05*sin(ang*rad*3.14*sin(q1))-.05*sin(rad*3.14*sin(Q2))+.05*sin(ang*3.14*sin(q3));\n' + 'rot=rot+.03*sin(ang*3.14)*rad+.02*sin(q1-rad*x*3.14)*sin(q1);'),
};

return pmap;
});
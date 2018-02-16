define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 1.2,
		wave_scale : 0.011683,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.45,
		sy : 1.0,
		ib_size : 0.003,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.906938,
		mv_dx : 0.0,
		mv_dy : -0.06,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.999609,
		ob_size : 0.05,
		wave_smoothing : 0.801,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.97787,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.2,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.45,
		mv_l : 5.0,
		invert : 0.0,
		rot : -0.38,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : -0.6,
		decay : 1.0,
		wave_a : 100.0,
		ob_g : 0.45,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.treb_thresh = 0;
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.mid_cycler = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.mid_counter = 0;
m.residual = 0;
m.q7 = 0;
m.q8 = 0;
m.vol_thresh = 0;
m.bass_cycler = 0;
m.treb_cycler = 0;
m.vol_counter = 0;
m.cdelay1 = 0;
m.r = 0;
m.cdelay2 = 0;
m.mid_mid_att = 0;
m.mid_thresh = 0;
m.counter1 = 0;
m.counter2 = 0;
m.vol_cycler = 0;
m.treb_counter = 0;
m.colorcounter = 0;
m.rad_cycle = 0;
m.bass_counter = 0;
m.bass_thresh = 0;
m.colorcounter = 1;
m.counter1 = 0;
m.counter2 = 1;
m.cdelay1 = 0;
m.cdelay2 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.counter1 = ifcond(equal(m.counter2, 1), ifcond(equal(m.counter1, 1), 0, (m.counter1+0.2)), 1);
m.counter2 = ifcond(equal(m.counter1, 1), ifcond(equal(m.counter2, 1), 0, (m.counter2+0.2)), 1);
m.cdelay1 = ifcond(equal(m.cdelay2, 1), 1, ifcond(equal(mod(m.colorcounter,2), 1), ifcond(equal(m.counter1, 1), 2, 0), ifcond(equal(m.counter2, 1), 2, 0)));
m.cdelay2 = ifcond(equal(m.cdelay1, 2), 1, 0);
m.colorcounter = ifcond(above(m.colorcounter, 7), 0, ifcond(equal(m.cdelay1, 1), (m.colorcounter+1), m.colorcounter));
m.ob_r = ifcond(equal(m.colorcounter, 1), 1, ifcond(equal(m.colorcounter, 2), 1, ifcond(equal(m.colorcounter, 3), 1, ifcond(equal(m.colorcounter, 4), Math.sin((m.counter2+2.1)), ifcond(equal(m.colorcounter, 5), 0, ifcond(equal(m.colorcounter, 6), 0, Math.sin(m.counter1)))))));
m.ob_g = ifcond(equal(m.colorcounter, 1), 0, ifcond(equal(m.colorcounter, 2), Math.sin((m.counter2*0.5)), ifcond(equal(m.colorcounter, 3), Math.sin(((m.counter1+1.75)*0.4)), ifcond(equal(m.colorcounter, 4), 1, ifcond(equal(m.colorcounter, 5), 1, ifcond(equal(m.colorcounter, 6), Math.sin((m.counter2+2)), 0))))));
m.ob_b = ifcond(equal(m.colorcounter, 1), Math.sin((m.counter1+2.1)), ifcond(equal(m.colorcounter, 2), 0, ifcond(equal(m.colorcounter, 3), 0, ifcond(equal(m.colorcounter, 4), 0, ifcond(equal(m.colorcounter, 5), Math.sin(m.counter1), ifcond(equal(m.colorcounter, 6), 1, 1))))));
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.3)*0.96)+1.3)));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_mid_att, m.mid_thresh))*(((m.mid_thresh-1.3)*0.96)+1.3)));
m.vol_thresh = ((m.bass_thresh+m.mid_thresh)+m.treb_thresh);
m.wave_r = ((0.5+(0.3*Math.sin(m.time)))+(0.1*Math.sin((m.time*10))));
m.wave_g = ((0.5+(0.3*Math.sin(div(m.time,1.5))))+(0.1*Math.sin((m.time*12))));
m.wave_b = ((0.5+(0.3*Math.sin(div(m.time,1.75))))+(0.1*Math.sin((m.time*14))));
m.bass_counter = ((equal(m.bass_thresh, 2)*1)+m.bass_counter);
m.treb_counter = ((equal(m.treb_thresh, 2)*1)+m.treb_counter);
m.mid_counter = ((equal(m.mid_thresh, 2)*1)+m.mid_counter);
m.vol_counter = ((equal(m.vol_thresh, 2)*1)+m.vol_counter);
m.bass_cycler = mod(m.bass_counter,8);
m.treb_cycler = mod(m.treb_counter,8);
m.mid_cycler = mod(m.mid_counter,8);
m.vol_cycler = mod(m.vol_cycler,8);
m.q1 = m.bass_cycler;
m.q2 = m.treb_cycler;
m.q3 = m.mid_cycler;
m.q4 = m.bass_thresh;
m.q5 = m.mid_thresh;
m.q6 = m.treb_thresh;
m.q7 = m.vol_cycler;
m.q8 = m.vol_thresh;
m.wave_mystery = ((m.wave_mystery+(0.1*Math.sin(m.q8)))-0.1);
m.mv_b = ((m.bass+m.bass_att)-2);
m.residual = (((equal(m.bass_thresh, 2)*0.016)*Math.sin((m.time*7)))+((1-equal(m.bass_thresh, 2))*m.residual));
m.ib_size = (m.bass*0.01);
		m.rkeys = ['r','d'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rad_cycle = (((((m.rad*m.rad)*m.x)*60)*m.rad)*Math.sin(m.q1));
m.rot = ifcond(above(m.q2, m.q8), ((((0.06*Math.sin(((m.rad_cycle-(3*Math.sin(m.q3)))-((m.x*m.ang)*m.q3))))*equal(m.rad, (m.x+m.y)))*Math.sin(m.q6))-(0.3*Math.sin(m.q7))), (0.02*Math.sin(m.q3)));
m.zoom = ifcond(above(m.q2, m.q8), ((((((2*m.rot)*m.rad)+1)-((0.01*m.q1)*m.rad))-(m.x-(0.3*Math.sin(m.q4))))+((m.x*0.25)*Math.sin(m.q2))), 1.10);
m.zoomexp = (1-(0.1*m.rad));
m.dx = ifcond(above(m.q2, m.q8), (div((equal(m.x, m.rad)*Math.sin(m.q3)),m.y)*Math.sin(m.q1)), ((((0.009*Math.sin(m.q5))*m.x)*m.rad)+(m.d*Math.sin(m.q2))));
m.dy = ifcond(above(m.q2, m.q8), (div((equal(m.y, m.rad)*Math.sin(m.q2)),m.x)*Math.sin(m.q5)), ((((0.009*Math.sin(m.q3))*m.y)*m.rad)+(m.r*Math.sin(m.q1))));
m.d = above(m.y, Math.sin(((m.ang*3)+m.time)));
m.r = above(m.y, Math.sin(((m.ang*3)+m.time)));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('colorcounter = 1;\n' + 'counter1 = 0;\n' + 'counter2 = 1;\n' + 'cdelay1 = 0;\n' + 'cdelay2 = 0;'),
	'frame_eqs_str' : ('counter1 = if(equal(counter2,1),if(equal(counter1,1),0,counter1+.2),1);\n' + 'counter2 = if(equal(counter1,1),if(equal(counter2,1),0,counter2+.2),1);\n' + 'cdelay1 = if(equal(cdelay2,1),1,if(equal(colorcounter%2,1),if(equal(counter1,1),2 ,0), if(equal(counter2,1),2,0)));\n' + 'cdelay2 = if(equal(cdelay1,2),1,0);\n' + 'colorcounter = if(above(colorcounter,7),0,if(equal(cdelay1,1),colorcounter+1,colorcounter));\n' + 'ob_r = if(equal(colorcounter,1),1, if(equal(colorcounter,2),1, if(equal(colorcounter,3),1, if(equal(colorcounter,4),sin(counter2+2.1), if(equal(colorcounter,5),0, if(equal(colorcounter,6),0,sin(counter1)))))));\n' + 'ob_g = if(equal(colorcounter,1),0, if(equal(colorcounter,2),sin(counter2*.5), if(equal(colorcounter,3),sin((counter1+1.75)*.4), if(equal(colorcounter,4),1, if(equal(colorcounter,5),1, if(equal(colorcounter,6),sin(counter2+2),0))))));\n' + 'ob_b = if(equal(colorcounter,1),sin(counter1+2.1), if(equal(colorcounter,2),0, if(equal(colorcounter,3),0, if(equal(colorcounter,4),0, if(equal(colorcounter,5),sin(counter1), if(equal(colorcounter,6),1,1))))));\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'treb_thresh=above(treb_att,treb_thresh)*2+(1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*0.96+1.3);\n' + 'mid_thresh=above(mid_att,mid_thresh)*2+(1-above(mid_mid_att,mid_thresh))*((mid_thresh-1.3)*0.96+1.3);\n' + 'vol_thresh=bass_thresh+mid_thresh+treb_thresh;\n' + 'wave_r = .5+.3*sin(time)+.1*sin(time*10);\n' + 'wave_g = .5+.3*sin(time/1.5)+.1*sin(time*12);\n' + 'wave_b = .5+.3*sin(time/1.75)+.1*sin(time*14);\n' + 'bass_counter = equal(bass_thresh,2)*1+bass_counter;\n' + 'treb_counter=equal(treb_thresh,2)*1+treb_counter;\n' + 'mid_counter=equal(mid_thresh,2)*1+mid_counter;\n' + 'vol_counter=equal(vol_thresh,2)*1+vol_counter;\n' + 'bass_cycler = bass_counter%8;\n' + 'treb_cycler=treb_counter%8;\n' + 'mid_cycler=mid_counter%8;\n' + 'vol_cycler=vol_cycler%8;\n' + 'q1=bass_cycler;\n' + 'q2=treb_cycler;\n' + 'q3=mid_cycler;\n' + 'q4=bass_thresh;\n' + 'q5=mid_thresh;\n' + 'q6=treb_thresh;\n' + 'q7=vol_cycler;\n' + 'q8=vol_thresh;\n' + 'wave_mystery = wave_mystery+.1*sin(q8) - 0.1;\n' + 'mv_b = bass+bass_att-2;\n' + 'residual = equal(bass_thresh,2)*0.016*sin(time*7) + (1-equal(bass_thresh,2))*residual;\n' + 'ib_size = bass*.01;'),
	'pixel_eqs_str' : ('rad_cycle=rad*rad*x*60*rad*sin(q1);\n' + 'rot=if(above(q2,q8),.06*sin(rad_cycle-3*Sin(Q3)-x*ang*q3)*equal(Rad,x+y)*sin(Q6)-.3*sin(Q7),.02*sin(Q3));\n' + 'zoom =if(above(q2,q8), 2*rot*rad + 1 - 0.01*q1*rad-(X-.3*sin(Q4))+(x*.25*sin(Q2)),1.10);\n' + 'zoomexp = 1 - 0.1*rad;\n' + 'dx=if(above(q2,q8),equal(x,raD)*sin(Q3)/y*sin(Q1),.009*sin(q5)*x*rad+d*sin(q2));\n' + 'dy=if(above(q2,q8),equal(y,rad)*sin(q2)/x*sin(q5),.009*sin(Q3)*y*rad+r*sin(q1));\n' + 'd=above(y,sin(ang*3+time));\n' + 'r=above(y,sin(ang*3+time));'),
};

return pmap;
});
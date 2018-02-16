define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 24.959995,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 7.68,
		wave_scale : 3.023201,
		echo_alpha : 0.63,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.5,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.999991,
		mv_dx : 0.3,
		mv_dy : 0.36,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.745792,
		ob_size : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 1.0,
		wave_y : 1.0,
		zoom : 0.9999,
		solarize : 1.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 0.5,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.2,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.994,
		wave_a : 0.997763,
		ob_g : 0.1,
		ib_a : 0.5,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 1.0,
		modwavealphastart : 0.5,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.isrow1 = 0;
m.q2 = 0;
m.row2ang = 0;
m.isrow2 = 0;
m.q3 = 0;
m.isrow3 = 0;
m.q4 = 0;
m.q5 = 0;
m.diakpos = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.movex = 0;
m.diakrot = 0;
m.movey = 0;
m.scroll = 0;
m.v = 0;
m.row2dist = 0;
m.row3dist = 0;
m.frame = -100;
		return m;
	},
	'frame_eqs' : function(m) {
m.wave_g = Math.abs(Math.cos((((m.time*1.4)+0.89)+Math.sin(((m.time*2.1)+0.73)))));
m.wave_b = Math.abs(Math.cos(((m.time*0.7)+0.64)));
m.wave_r = Math.abs(Math.sin(((m.time*1.526)+0.321)));
m.wave_x = Math.abs(Math.sin(((m.time*2)+0.368)));
m.warp = 0;
m.diakpos = ifcond(below(mod(m.frame,500), 200), 1, 1);
m.diakrot = ifcond(below(mod(m.frame,500), 100), 0, 1);
m.diakrot = ifcond(above(mod(m.frame,500), 400), 0, m.diakrot);
m.q1 = 0.125;
m.q6 = (m.diakrot*Math.sin(((div(m.time,3)+1.783)+Math.cos((m.time+2.814)))));
m.q8 = sign(Math.sin((((2.356*m.time)+0.385)+(2*Math.cos(((0.6*m.time)+2.9))))));
m.q7 = (0.375*(1+(m.diakpos*Math.sin(((Math.cos(((m.time*2.31)+1.972))+(m.time*1.34))+1.69)))));
m.q5 = (0.5+((m.diakpos*0.1)*Math.sin((m.time+Math.cos(((m.time*3)+0.256))))));
m.q4 = (0.625+(((m.diakpos*2)*m.q1)*Math.sin(((Math.cos(((m.time*0.67)+0.711))+(m.time*2.1))+1.314))));
m.q2 = (0.875-(((m.diakpos*3)*m.q1)*Math.abs(Math.sin(((Math.cos(((2*m.time)+1.23))+(0.8*m.time))+1.72)))));
m.q3 = (0.18+div(((m.mid_att+m.treb_att)+m.bass_att),11));
m.monitor = ((m.mid+m.treb)+m.bass);
m.v = rand(200);
m.sx = ifcond(equal(m.v, 9), -1, m.sx);
m.sy = ifcond(equal(m.v, 8), -1, m.sy);
m.zoom = ifcond(equal(m.v, 7), 0.5, 1);
		m.rkeys = ['q6','zoom','dx','dy'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.isrow1 = ifcond(below(div(Math.abs(((m.q6*(m.x-0.5))+((1-m.q6)*(m.y-m.q7)))),(sqr(m.q6)+sqr((1-m.q6)))), m.q1), 1, 0);
m.isrow2 = ifcond(below(div(Math.abs((((1-m.q6)*(m.x-m.q5))+(m.q6*(m.y-m.q4)))),(sqr(m.q6)+sqr((1-m.q6)))), m.q1), 1, 0);
m.q6 = (m.q6*1.5);
m.row3dist = div(((-m.q6*(m.x-0.5))+((1-m.q6)*(m.y-m.q2))),(sqr(m.q6)+sqr((1-m.q6))));
m.isrow3 = ifcond(below(Math.abs(m.row3dist), m.q1), 1, 0);
m.scroll = sign(Math.sin((div(m.time,4)+2.312)));
m.dy = (m.dy+(((((0.01*(1-m.isrow1))*(1-m.isrow2))*(1-m.isrow3))*m.scroll)*m.q3));
m.movex = ((m.isrow1*0.006)*(Math.sin(((38*(m.x-0.5))+(m.time*3)))+Math.sin(((26*(m.y-m.q7))+(m.time*1)))));
m.movey = ((m.isrow1*0.006)*(Math.sin(((23*(m.x-0.5))+(m.time*2)))+Math.sin(((40*(m.y-m.q7))+(m.time*6)))));
m.dx = (m.dx+(m.q3*m.movex));
m.dy = (m.dy+(m.q3*m.movey));
m.zoom = (m.zoom+((5*m.q3)*(m.movex+m.movey)));
m.row2ang = -Math.atan2((m.x-m.q5), (m.y-m.q4));
m.row2dist = sqrt((sqr((m.x-m.q5))+sqr((m.y-m.q4))));
m.movex = (((m.isrow2*0.03)*Math.cos(m.row2ang))*m.q8);
m.movey = (((m.isrow2*0.03)*Math.sin(m.row2ang))*m.q8);
m.dx = (m.dx+(m.q3*m.movex));
m.dy = (m.dy+(m.q3*m.movey));
m.zoom = (m.zoom+((m.isrow2*0.05)*(1+((0.2*m.q3)*pow((-1+m.row2dist), 3)))));
m.movex = (0.007*Math.sin((m.time*100)));
m.dx = (m.dx+((m.isrow3*m.q3)*m.movex));
m.zoom = (m.zoom+((((0.1*m.isrow3)*div(m.row3dist,m.q1))*Math.sin((m.time*3)))*m.q3));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('frame=-100;'),
	'frame_eqs_str' : ('wave_g = abs(cos(time*1.4+.89 + sin(time*2.1+.73)));\n' + 'wave_b= abs(cos(time*.7+.64));\n' + 'wave_r = abs(sin(time*1.526 + .321 ));\n' + 'wave_x=abs(sin(time*2+.368));\n' + 'warp=0;\n' + 'diakPos=if( below(frame%500,200),1,1);\n' + 'diakRot=if(below(frame%500,100),0,1);\n' + 'diakRot=if(above(frame%500,400),0,diakRot);\n' + 'q1=.125;\n' + 'q6=diakRot*sin(time/3+1.783+cos(time+2.814));\n' + 'q8=sign( sin(2.356*time+.385+2*cos(.6*time+2.9)));\n' + 'q7=.375*(1+diakPos*sin( cos(time*2.31+1.972)+time*1.34+1.69));\n' + 'q5=.5+(diakPos*.1*sin(time+cos(time*3+.256)));\n' + 'q4=.625+diakPos*2*q1*(sin( cos(time*.67+.711)+time*2.1+1.314));\n' + 'q2=.875-diakPos*3*q1*(abs(sin( cos(2*time+1.23)+.8*time+1.72)));\n' + 'q3=.18+(mid_att+treb_att+bass_att)/11;\n' + 'monitor = mid+treb+bass;\n' + 'v=rand(200);\n' + 'sx=if( equal(v,9),-1,sx);\n' + 'sy=if( equal(v,8),-1,sy);\n' + 'zoom=if( equal(v,7),.5,1);'),
	'pixel_eqs_str' : ('IsRow1=if( below( abs(  (q6*(x-.5)+(1-q6)*(y-q7)))/(sqr(q6)+sqr(1-q6)),q1),1,0);\n' + 'IsRow2=if( below( abs( ((1-q6)*(x-q5)+(q6)*(y-q4)))/(sqr(q6)+sqr(1-q6)),q1),1,0);\n' + 'q6=q6*1.5;\n' + 'Row3dist=( (-q6*(x-.5)+(1-q6)*(y-q2) )/(sqr(q6)+sqr(1-q6)));\n' + 'IsRow3=if( below( abs(Row3dist),q1),1,0);\n' + 'scroll=sign(sin(time/4+2.312));\n' + 'dy=dy+.01*(1-IsRow1)*(1-IsRow2)*(1-IsRow3)*scroll*q3;\n' + 'moveX=IsRow1*.006*(sin(38*(x-.5)+time*3) + sin(26*(y-q7)+time*1));\n' + 'moveY=IsRow1*.006*(sin(23*(x-.5)+time*2)+sin(40*(y-q7)+time*6));\n' + 'dx=dx+q3*moveX;\n' + 'dy=dy+q3*moveY;\n' + 'zoom=zoom+5*q3*(moveX+moveY);\n' + 'row2ang=-atan2(x-q5,y-q4);\n' + 'row2dist=sqrt( sqr(x-q5)+sqr(y-q4) );\n' + 'moveX=IsRow2*.03*cos(row2ang)*q8;\n' + 'moveY=IsRow2*.03*sin(row2ang)*q8;\n' + 'dx=dx+q3*moveX;\n' + 'dy=dy+q3*moveY;\n' + 'zoom=zoom+IsRow2*.05*(1+.2*q3*pow((-1+row2dist),3));\n' + 'moveX=.007*sin(time*100);\n' + 'dx=dx+IsRow3*q3*moveX;\n' + 'zoom=zoom+.1*IsRow3*( Row3dist/q1)*sin(time*3)*q3;'),
};

return pmap;
});
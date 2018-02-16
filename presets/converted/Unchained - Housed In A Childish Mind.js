define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.560001,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 24.959999,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 19.199999,
		wave_scale : 1.135639,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.99817,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.4999,
		echo_zoom : 0.9997,
		ob_size : 0.005,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.4999,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.998137,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 2.0,
		dy : 0.0,
		ob_a : 0.2,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.85,
		invert : 0.0,
		rot : 1.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 25.5732,
		ob_g : 0.0,
		ib_a : 0.6,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 0.4999,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.mblock = 0;
m.q1 = 0;
m.q2 = 0;
m.mth = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.tpulse = 0;
m.q7 = 0;
m.grid = 0;
m.q8 = 0;
m.tth = 0;
m.bblock = 0;
m.ccl = 0;
m.mpulse = 0;
m.tres = 0;
m.checkx = 0;
m.checky = 0;
m.mres = 0;
m.mod_state = 0;
m.bth = 0;
m.bpulse = 0;
m.snur = 0;
m.tblock = 0;
m.le = 0;
m.pulse = 0;
m.snee = 0;
m.bres = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.le = ((1+0.5)+(2*Math.sin(m.bass_att)));
m.bpulse = band(above(m.le, m.bth), above((m.le-m.bth), m.bblock));
m.bblock = (m.le-m.bth);
m.bth = ifcond(above(m.le, m.bth), ((m.le+div(114,(m.le+10)))-7.407), ((m.bth+div((m.bth*0.07),(m.bth-12)))+((below(m.bth, 2.7)*0.1)*(2.7-m.bth))));
m.bth = ifcond(above(m.bth, 6), 6, m.bth);
m.bres = ((m.bpulse*Math.sin((m.pulse+(m.le*0.5))))+(bnot(m.bpulse)*m.bres));
m.le = ((1+0.5)+(2*Math.sin(m.treb_att)));
m.tpulse = band(above(m.le, m.tth), above((m.le-m.tth), m.tblock));
m.tblock = (m.le-m.tth);
m.tth = ifcond(above(m.le, m.tth), ((m.le+div(114,(m.le+10)))-7.407), ((m.tth+div((m.tth*0.07),(m.tth-12)))+((below(m.tth, 2.7)*0.1)*(2.7-m.tth))));
m.tth = ifcond(above(m.tth, 6), 6, m.tth);
m.tres = ((m.tpulse*Math.sin((m.pulse+(m.le*0.5))))+(bnot(m.tpulse)*m.tres));
m.le = ((1+0.5)+(2*Math.sin(m.mid_att)));
m.mpulse = band(above(m.le, m.mth), above((m.le-m.mth), m.mblock));
m.mblock = (m.le-m.mth);
m.mth = ifcond(above(m.le, m.mth), ((m.le+div(114,(m.le+10)))-7.407), ((m.mth+div((m.mth*0.07),(m.mth-12)))+((below(m.mth, 2.7)*0.1)*(2.7-m.mth))));
m.mth = ifcond(above(m.mth, 6), 6, m.mth);
m.mres = ((m.mpulse*Math.sin((m.pulse+(m.le*0.5))))+(bnot(m.mpulse)*m.mres));
m.pulse = ifcond(above(Math.abs(m.pulse), 3.14), -3.14, (m.pulse+(((m.bth+m.mth)+m.tth)*0.003)));
m.q1 = m.bres;
m.q2 = m.tres;
m.q3 = m.mres;
m.q4 = Math.sin(m.pulse);
m.mod_state = (((above(m.q1, 0)+above(m.q2, 0))+above(m.q3, 0))*(1+above(m.q4, 0)));
m.ccl = (((m.ccl+m.tpulse)+m.mpulse)-m.bpulse);
m.q5 = Math.cos((m.pulse*(0.5+(0.1*m.mod_state))));
m.q6 = Math.sin((m.pulse*(0.5+pow(0.25, m.mod_state))));
m.q7 = m.mod_state;
m.q8 = m.ccl;
m.ob_r = (0.5+(0.5*Math.cos((m.q1+m.q7))));
m.ob_g = (0.5+(0.5*Math.cos(((m.q2*3.14)+m.q7))));
m.ob_b = (0.5+(0.5*Math.cos(((m.q3*2)+Math.sin((m.time*0.0816))))));
m.ib_size = (0.025+(0.02*m.q2));
m.ob_size = ((0.03+(0.02*m.q3))-(0.002*m.q7));
m.wave_r = (0.5+(0.5*Math.sin(((m.q1*m.q7)+(m.time*2.183)))));
m.wave_g = (0.5+(0.5*Math.sin(((m.q2*3)+(m.time*1.211)))));
m.wave_b = (0.5+(0.5*Math.sin((m.q3+(m.time*1.541)))));
m.wave_mystery = (m.wave_mystery+Math.sin(((m.time*2.18)+m.q6)));
m.wave_x = ((m.wave_x+(0.25*Math.sin(((m.time*0.811)+m.q1))))+((0.1*mod(m.frame,3))*sign(m.q3)));
m.wave_y = ((m.wave_y+(0.25*Math.sin(((m.time*0.788)+m.q2))))+((0.1*mod(m.frame,2))*sign(m.q3)));
m.cy = ((0.5+(0.5*m.q4))+Math.sin((m.time*0.086)));
m.decay = ((0.995+(0.0025*m.q3))+(0.0025*m.q1));
m.mv_a = (above(m.q2, 0)*(0.1+(0.1*m.q5)));
m.mv_r = (1-m.ob_g);
m.mv_b = (1-m.ob_r);
m.mv_g = (1-m.ob_b);
		m.rkeys = ['sx','sy'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.snee = bnot(((above((Math.sin(m.ang)-m.x), 0.5)*above(m.q2, 0))+(above((m.y-Math.cos(m.ang)), 0.5)*above(m.q1, 0))));
m.snur = bnot(((below(m.x, (0.5+((0.5*m.y)*m.q6)))*above(m.q3, 0))+(below(m.y, (0.5+(0.5*Math.sin(((m.x*6.28)*m.q1)))))*below(m.q7, 4))));
m.grid = Math.sin((((((m.rad*m.q1)+(m.x*m.q2))+(m.y*m.q3))+(m.ang*m.q4))*(10+m.q7)));
m.rot = (m.snee*ifcond(above(m.grid, 0), m.snur, bnot(m.snur)));
m.zoom = ((1+(((0.01*Math.sin(((m.rad*m.q7)+m.q5)))*bnot(m.snee))*ifcond(m.snur, -1, 1)))*(1+((0.03*m.q1)*Math.atan(((m.ang*m.q4)-(m.rot*m.q2))))));
m.sx = (m.sx+((0.1*bor(bnot(m.snee), bnot(m.snur)))*Math.cos(((m.y*3.14)*m.q4))));
m.sy = (m.sy+((0.1*bor(bnot(m.snee), m.snur))*Math.cos(((m.x*3.14)*m.q6))));
m.checkx = bor((above(Math.abs(m.q1), m.x)*below(Math.abs(m.q2), m.x)), (above(Math.abs(m.q2), m.x)*below(Math.abs(m.q1), m.x)));
m.checky = bor((above(Math.abs(m.q1), m.y)*below(Math.abs(m.q2), m.y)), (above(Math.abs(m.q2), m.y)*below(Math.abs(m.q1), m.y)));
m.dx = ((m.checkx*Math.sin(((m.x*m.q3)*6.29)))*m.rot);
m.dy = ((m.checky*Math.sin(((m.y*m.q3)*6.29)))*m.rot);
m.rot = ifcond(above(m.y, (0.5+((0.5*m.x)*m.q3))), (m.rot*0.01), ((m.rot*m.zoom)*0.005));
m.dx = (m.dx*Math.atan2(pow((m.ang*m.q4), (1+m.q7)), (m.ang*Math.sin(((m.rad*3.14)*m.q2)))));
m.dy = (m.dy*Math.atan2(pow((m.ang*m.q5), (1+mod(m.q8,6))), (m.ang*Math.sin(((m.y*3.14)*m.q1)))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'le=1+.5+2*sin(bass_att);\n' + 'bpulse=band(above(le,bth),above(le-bth,bblock));\n' + 'bblock=le-bth;\n' + 'bth=if(above(le,bth),le+114/(le+10)-7.407,bth+bth*.07/(bth-12)+below(bth,2.7)*.1*(2.7-bth));\n' + 'bth=if(above(bth,6),6,bth);\n' + 'bres=bpulse*sin(pulse+le*.5) + bnot(bpulse)*bres;\n' + 'le=1+.5+2*sin(treb_att);\n' + 'tpulse=band(above(le,tth),above(le-tth,tblock));\n' + 'tblock=le-tth;\n' + 'tth=if(above(le,tth),le+114/(le+10)-7.407,tth+tth*.07/(tth-12)+below(tth,2.7)*.1*(2.7-tth));\n' + 'tth=if(above(tth,6),6,tth);\n' + 'tres=tpulse*sin(pulse+le*.5) + bnot(tpulse)*tres;\n' + 'le=1+.5+2*sin(mid_att);\n' + 'mpulse=band(above(le,mth),above(le-mth,mblock));\n' + 'mblock=le-mth;\n' + 'mth=if(above(le,mth),le+114/(le+10)-7.407,mth+mth*.07/(mth-12)+below(mth,2.7)*.1*(2.7-mth));\n' + 'mth=if(above(mth,6),6,mth);\n' + 'mres=mpulse*sin(pulse+le*.5) + bnot(mpulse)*mres;\n' + 'pulse=if(above(abs(pulse),3.14),-3.14,pulse+(bth+mth+tth)*.003);\n' + 'q1=bres;\n' + 'q2=tres;\n' + 'q3=mres;\n' + 'q4=sin(pulse);\n' + 'mod_state=(above(q1,0)+above(q2,0)+above(q3,0))*(1+above(q4,0));\n' + 'ccl=ccl+tpulse+mpulse-bpulse;\n' + 'q5=cos(pulse*(.5+.1*mod_state));\n' + 'q6=sin(pulse*(.5+pow(.25,mod_state)));\n' + 'q7=mod_state;\n' + 'q8=ccl;\n' + 'ob_r=.5+.5*cos(q1+q7);\n' + 'ob_g=.5+.5*cos(q2*3.14+q7);\n' + 'ob_b=.5+.5*cos(q3*2+sin(time*.0816));\n' + 'ib_size=.025+.02*q2;\n' + 'ob_size=.03+.02*q3-.002*q7;\n' + 'wave_r=.5+.5*sin(q1*q7+time*2.183);\n' + 'wave_g=.5+.5*sin(q2*3+time*1.211);\n' + 'wave_b=.5+.5*sin(q3+time*1.541);\n' + 'wave_mystery=wave_mystery+sin(time*2.18+q6);\n' + 'wave_x=wave_x+.25*sin(time*.811+q1)+.1*(frame%3)*sign(q3);\n' + 'wave_y=wave_y+.25*sin(time*.788+q2)+.1*(frame%2)*sign(q3);\n' + 'cy=.5+.5*q4+sin(time*.086);\n' + 'decay=.995+.0025*q3+.0025*q1;\n' + 'mv_a=above(q2,0)*(.1+.1*q5);\n' + 'mv_r=1-ob_g;\n' + 'mv_b=1-ob_r;\n' + 'mv_g=1-ob_b;'),
	'pixel_eqs_str' : ('snee=bnot(above(sin(ang)-x,.5)*above(q2,0)+above(y-cos(ang),.5)*above(q1,0));\n' + 'snur=bnot(below(x,.5+.5*y*q6)*above(q3,0)+below(y,.5+.5*sin(x*6.28*q1))*below(q7,4));\n' + 'grid=sin((rad*q1+x*q2+y*q3+ang*q4)*(10+q7));\n' + 'rot=snee*if(above(grid,0),snur,bnot(snur));\n' + 'zoom=(1+.01*sin(rad*q7+q5)*bnot(snee)*if(snur,-1,1))*(1+.03*q1*atan(ang*q4-rot*q2));\n' + 'sx=sx+.1*bor(bnot(snee),bnot(snur))*cos(y*3.14*q4);\n' + 'sy=sy+.1*bor(bnot(snee),snur)*cos(x*3.14*q6);\n' + 'checkx=bor(above(abs(q1),x)*below(abs(q2),x),above(abs(q2),x)*below(abs(q1),x));\n' + 'checky=bor(above(abs(q1),y)*below(abs(q2),y),above(abs(q2),y)*below(abs(q1),y));\n' + 'dx=checkx*sin(x*q3*6.29)*rot;\n' + 'dy=checky*sin(y*q3*6.29)*rot;\n' + 'rot=if(above(y,.5+.5*x*q3),rot*.01,rot*zoom*.005);\n' + 'dx=dx*atan2(pow(ang*q4,1+q7),ang*sin(rad*3.14*q2));\n' + 'dy=dy*atan2(pow(ang*q5,1+(q8%6)),ang*sin(y*3.14*q1));'),
};

return pmap;
});
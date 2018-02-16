define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.282091,
		echo_alpha : 0.5,
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
		zoomexp : 1.0017,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 0.9999,
		ob_size : 0.005,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9881,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 2.0,
		dy : 0.0,
		ob_a : 0.2,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.55,
		invert : 0.0,
		rot : 1.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.868,
		ob_g : 0.0,
		ib_a : 0.6,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 1.0,
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
m.test = 0;
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
m.wave_mystery = (m.wave_mystery+(0.2*Math.sin(((m.time*2.18)+m.q6))));
m.wave_x = ((m.wave_x+(0.1*Math.sin(((m.time*0.811)+m.q1))))+((0.1*mod(m.frame,3))*sign(m.q3)));
m.wave_y = ((m.wave_y+(0.1*Math.sin(((m.time*0.788)+m.q2))))+((0.1*mod(m.frame,2))*sign(m.q3)));
m.wave_mode = (3-(0.3*m.q7));
m.mv_a = ((m.bass+m.bass_att)-2.5);
		m.rkeys = ['sx','sy','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.snee = bnot(((above(m.x, 0.5)*above(m.q2, 0))+(above(m.y, 0.5)*above(m.q1, 0))));
m.snur = bnot(((below(m.x, 0.5)*above(m.q3, 0))+(below(m.y, 0.5)*below(m.q7, 4))));
m.grid = (pow((Math.sin((((m.rad*6)*Math.sin(m.q8))+((Math.atan(((m.ang*(1-m.y))-1.57))*6)*m.q1)))*2), (1+mod(m.q8,3)))*(1+m.q7));
m.test = below(m.rad, (0.5+(0.25*m.q1)));
m.cx = ifcond(m.test, ((bitand(0,((m.x*15)-(0.5*m.rad)))*div(1,(15-(0.5*m.rad))))+0), 0.5);
m.cy = ifcond(m.test, ((bitand(0,((m.y*15)-(0.5*m.rad)))*div(1,(15-(0.5*m.rad))))+0), 0.5);
m.rot = ifcond(m.test, ((0.1*m.q1)-(0.5*m.rad)), ((m.snee*bnot((below(m.y, 0.5)*below(m.q7, 3))))*ifcond(bnot(mod(m.grid,m.q8)), 1, (0.1*Math.sin(((m.rad*3.14)*m.q3))))));
m.zoom = ((m.zoom-((0.031*m.snur)*Math.sin(((m.rad*m.q7)*m.q5))))+(((m.snee*bnot(m.snur))*Math.sin(((m.rad*6)*m.q5)))*0.1));
m.sx = ifcond(m.test, 1, (m.sx+((0.0361*bnot(m.snee))*Math.cos(((m.y*3.14)*m.q4)))));
m.sy = ifcond(m.test, 1, (m.sy+((0.00361*bnot(m.snur))*Math.cos(((m.x*3.14)*m.q6)))));
m.zoomexp = ifcond(m.test, (1+m.rad), (m.zoom+m.rot));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'le=1+.5+2*sin(bass_att);\n' + 'bpulse=band(above(le,bth),above(le-bth,bblock));\n' + 'bblock=le-bth;\n' + 'bth=if(above(le,bth),le+114/(le+10)-7.407,bth+bth*.07/(bth-12)+below(bth,2.7)*.1*(2.7-bth));\n' + 'bth=if(above(bth,6),6,bth);\n' + 'bres=bpulse*sin(pulse+le*.5) + bnot(bpulse)*bres;\n' + 'le=1+.5+2*sin(treb_att);\n' + 'tpulse=band(above(le,tth),above(le-tth,tblock));\n' + 'tblock=le-tth;\n' + 'tth=if(above(le,tth),le+114/(le+10)-7.407,tth+tth*.07/(tth-12)+below(tth,2.7)*.1*(2.7-tth));\n' + 'tth=if(above(tth,6),6,tth);\n' + 'tres=tpulse*sin(pulse+le*.5) + bnot(tpulse)*tres;\n' + 'le=1+.5+2*sin(mid_att);\n' + 'mpulse=band(above(le,mth),above(le-mth,mblock));\n' + 'mblock=le-mth;\n' + 'mth=if(above(le,mth),le+114/(le+10)-7.407,mth+mth*.07/(mth-12)+below(mth,2.7)*.1*(2.7-mth));\n' + 'mth=if(above(mth,6),6,mth);\n' + 'mres=mpulse*sin(pulse+le*.5) + bnot(mpulse)*mres;\n' + 'pulse=if(above(abs(pulse),3.14),-3.14,pulse+(bth+mth+tth)*.003);\n' + 'q1=bres;\n' + 'q2=tres;\n' + 'q3=mres;\n' + 'q4=sin(pulse);\n' + 'mod_state=(above(q1,0)+above(q2,0)+above(q3,0))*(1+above(q4,0));\n' + 'ccl=ccl+tpulse+mpulse-bpulse;\n' + 'q5=cos(pulse*(.5+.1*mod_state));\n' + 'q6=sin(pulse*(.5+pow(.25,mod_state)));\n' + 'q7=mod_state;\n' + 'q8=ccl;\n' + 'ob_r=.5+.5*cos(q1+q7);\n' + 'ob_g=.5+.5*cos(q2*3.14+q7);\n' + 'ob_b=.5+.5*cos(q3*2+sin(time*.0816));\n' + 'ib_size=.025+.02*q2;\n' + 'ob_size=.03+.02*q3-.002*q7;\n' + 'wave_r=.5+.5*sin(q1*q7+time*2.183);\n' + 'wave_g=.5+.5*sin(q2*3+time*1.211);\n' + 'wave_b=.5+.5*sin(q3+time*1.541);\n' + 'wave_mystery=wave_mystery+0.2*sin(time*2.18+q6);\n' + 'wave_x=wave_x+0.1*sin(time*.811+q1)+.1*(frame%3)*sign(q3);\n' + 'wave_y=wave_y+0.1*sin(time*.788+q2)+.1*(frame%2)*sign(q3);\n' + 'wave_mode=3 - 0.3*q7;\n' + 'mv_a = bass+ bass_att -2.5;'),
	'pixel_eqs_str' : ('snee=bnot(above(x,.5)*above(q2,0)+above(y,.5)*above(q1,0));\n' + 'snur=bnot(below(x,.5)*above(q3,0)+below(y,.5)*below(q7,4));\n' + 'grid=pow(sin(rad*6*sin(q8)+(atan(ang*(1-y)-1.57))*6*q1)*2,1+q8%3)*(1+q7);\n' + 'test = below(rad,0.5+ 0.25*q1);\n' + 'cx =if(test,(0&(x*15-0.5*rad))*(1/(15-0.5*rad))+0,0.5);\n' + 'cy =if(test, (0&(y*15-0.5*rad))*(1/(15-0.5*rad))+0,0.5);\n' + 'rot=if(test, 0.1*q1-0.5*rad,snee*bnot(below(y,.5)*below(q7,3))*if(bnot(grid%q8),1,.1*sin(rad*3.14*q3)));\n' + 'zoom=zoom-.031*snur*sin(rad*q7*q5)+snee*bnot(snur)*sin(rad*6*q5)*.1;\n' + 'sx=if(test,1,sx+.0361*bnot(snee)*cos(y*3.14*q4));\n' + 'sy=if(test,1,sy+.00361*bnot(snur)*cos(x*3.14*q6));\n' + 'zoomexp = if(test,1 + rad,zoom+rot);'),
};

return pmap;
});
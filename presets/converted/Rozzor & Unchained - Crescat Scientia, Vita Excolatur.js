define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 4.48,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 3.72,
		wave_scale : 0.45029,
		echo_alpha : 0.4999,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 1.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.00183,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.9998,
		ob_size : 0.005,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.001507,
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
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 1.254574,
		ob_g : 0.0,
		ib_a : 0.9,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 1.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.mblock = 0;
m.q1 = 0;
m.q2 = 0;
m.yang = 0;
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
m.ying = 0;
m.prev_bass = 0;
m.bblock = 0;
m.ccl = 0;
m.mpulse = 0;
m.tres = 0;
m.mres = 0;
m.mod_state = 0;
m.bth = 0;
m.beat = 0;
m.bpulse = 0;
m.snur = 0;
m.tblock = 0;
m.le = 0;
m.mytime = 0;
m.pulse = 0;
m.snee = 0;
m.bres = 0;
m.yin = 0;

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
m.beat = ifcond(equal(m.bres, m.prev_bass), 0, 1);
m.prev_bass = m.bres;
m.ying = ifcond(below(m.ying, 1), 1, m.ying);
m.ying = ifcond(m.beat, (m.ying+bnot(mod((m.time*10),3))), m.ying);
m.yin = mod(m.ying,2);
m.mytime = (m.pulse*m.ying);
m.ib_size = 0.02;
m.ib_g = ifcond(bnot(mod(m.ying,11)), m.ib_r, m.ib_b);
m.ib_r = ifcond(bnot(mod(m.ying,11)), mod(m.ying,3), m.ob_g);
m.ib_b = ifcond(bnot(mod(m.ying,11)), mod(m.ying,4), 1);
m.mv_a = m.yin;
m.mv_b = (Math.sin(m.mytime)+Math.abs(Math.sin(m.mytime)));
m.mv_r = Math.cos(m.mytime);
m.mv_g = ((-0.8*sign(Math.sin(m.mytime)))*Math.abs(Math.sin(m.mytime)));
m.ob_b = (Math.cos(m.ying)+Math.abs(Math.cos(m.ying)));
m.ob_g = Math.abs(Math.sin(m.ying));
m.ob_r = (((-1*Math.cos(m.ying))+Math.abs((-1*Math.cos(m.ying))))+(0.2*(Math.cos(Math.sin(m.ying))+(Math.abs(Math.cos(Math.sin(m.ying)))+Math.cos(Math.sin(m.ying))))));
m.q3 = ifcond(m.beat, (mod((10*Math.abs(Math.sin(m.mytime))),3)-1), 0);
m.ib_size = (0.025+(0.02*m.q2));
m.ob_size = ((0.03+(0.02*m.q3))-(0.002*m.q7));
m.wave_r = (0.5+(0.5*Math.sin(((m.q1*m.q7)+(m.mytime*2.183)))));
m.wave_g = (0.5+(0.5*Math.sin(((m.q2*3)+(m.mytime*1.211)))));
m.wave_b = (0.5+(0.5*Math.sin((m.q3+(m.mytime*1.541)))));
m.dx = ifcond(m.yin, (m.dx-(0.005*Math.sin((m.mytime*0.23)))), ifcond(equal(m.yin, m.yang), 0, ifcond(below(Math.abs(m.dx), 0.05), (m.dx-(m.q3*0.001)), m.dx)));
m.dy = ifcond(m.yin, (m.dy-(0.005*Math.sin((m.mytime*0.2)))), ifcond(equal(m.yin, m.yang), 0, ifcond(below(Math.abs(m.dy), 0.05), (m.dy-(m.q3*0.001)), m.dy)));
m.yang = bnot(m.yin);
m.ob_a = (0.8+(0.2*m.q2));
m.zoom = (m.zoom+(0.04*m.q4));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.snee = bnot(((above((Math.sin(m.ang)-m.x), 0.3)*above(m.q2, 0))+(above((m.y-Math.cos(m.ang)), 0.7)*above(m.q1, 0))));
m.snur = bnot(((below(m.x, 0.3)*above(m.q3, 0))+(below(m.y, 0.7)*below(m.q7, 4))));
m.grid = Math.sin((sigmoid(Math.sin(((m.y*6.28)*m.q2)), Math.sin(((m.x*6.28)*m.q6)))*(10+m.q7)));
m.rot = ((bnot((above(m.x, 0.7)+mod((m.y*m.q8),m.q7)))*Math.cos((m.rad+((3.14*ifcond(above(m.grid, 0), m.snur, bnot(m.snur)))*(0.5+(0.5*Math.sin(((m.rad*3.14)*m.q1))))))))*m.q4);
m.zoom = (m.zoom+((0.03*Math.sin((((m.rad*3.14)*m.q2)+m.q5)))*sign(m.snee)));
m.rot = ifcond(m.rot, (m.rot*sign(m.snur)), m.q6);
m.cx = ifcond((below(m.x, 0.5)*below(m.y, 0.5)), (0.5+(0.2*m.q1)), 0.5);
m.cy = ifcond((below(m.x, 0.5)*below(m.y, 0.5)), (0.5+(0.2*m.q3)), 0.5);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'le=1+.5+2*sin(bass_att);\n' + 'bpulse=band(above(le,bth),above(le-bth,bblock));\n' + 'bblock=le-bth;\n' + 'bth=if(above(le,bth),le+114/(le+10)-7.407,bth+bth*.07/(bth-12)+below(bth,2.7)*.1*(2.7-bth));\n' + 'bth=if(above(bth,6),6,bth);\n' + 'bres=bpulse*sin(pulse+le*.5) + bnot(bpulse)*bres;\n' + 'le=1+.5+2*sin(treb_att);\n' + 'tpulse=band(above(le,tth),above(le-tth,tblock));\n' + 'tblock=le-tth;\n' + 'tth=if(above(le,tth),le+114/(le+10)-7.407,tth+tth*.07/(tth-12)+below(tth,2.7)*.1*(2.7-tth));\n' + 'tth=if(above(tth,6),6,tth);\n' + 'tres=tpulse*sin(pulse+le*.5) + bnot(tpulse)*tres;\n' + 'le=1+.5+2*sin(mid_att);\n' + 'mpulse=band(above(le,mth),above(le-mth,mblock));\n' + 'mblock=le-mth;\n' + 'mth=if(above(le,mth),le+114/(le+10)-7.407,mth+mth*.07/(mth-12)+below(mth,2.7)*.1*(2.7-mth));\n' + 'mth=if(above(mth,6),6,mth);\n' + 'mres=mpulse*sin(pulse+le*.5) + bnot(mpulse)*mres;\n' + 'pulse=if(above(abs(pulse),3.14),-3.14,pulse+(bth+mth+tth)*.003);\n' + 'q1=bres;\n' + 'q2=tres;\n' + 'q3=mres;\n' + 'q4=sin(pulse);\n' + 'mod_state=(above(q1,0)+above(q2,0)+above(q3,0))*(1+above(q4,0));\n' + 'ccl=ccl+tpulse+mpulse-bpulse;\n' + 'q5=cos(pulse*(.5+.1*mod_state));\n' + 'q6=sin(pulse*(.5+pow(.25,mod_state)));\n' + 'q7=mod_state;\n' + 'q8=ccl;\n' + 'beat = if(equal(bres,prev_bass),0,1);\n' + 'prev_bass = bres;\n' + 'ying = if(below(ying,1),1,ying);\n' + 'ying = if (beat,ying + bnot(time*10%3),ying);\n' + 'yin = ying%2;\n' + 'mytime = pulse*ying;\n' + 'ib_size = 0.02;\n' + 'ib_g = if(bnot(ying%11),ib_r,ib_b);\n' + 'ib_r = if(bnot(ying%11),ying%3,ob_g);\n' + 'ib_b = if(bnot(ying%11),ying%4,1);\n' + 'mv_a = yin;\n' + 'mv_b = sin(mytime) + abs(sin(mytime));\n' + 'mv_r = cos(mytime);\n' + 'mv_g = -.8*sign(sin(mytime))*abs(sin(mytime));\n' + 'ob_b = cos(ying)  + abs(cos(ying));\n' + 'ob_g = abs(sin(ying)) ;\n' + 'ob_r = (-1 * cos(ying))  + abs(-1 * cos(ying)) + 0.2 * (cos(sin(ying))+(abs(cos(sin(ying)))+cos(sin(ying))));\n' + 'q3 = if(beat,(10*abs(sin(mytime)))%3-1,0);\n' + 'ib_size=.025+.02*q2;\n' + 'ob_size=.03+.02*q3-.002*q7;\n' + 'wave_r=.5+.5*sin(q1*q7+mytime*2.183);\n' + 'wave_g=.5+.5*sin(q2*3+mytime*1.211);\n' + 'wave_b=.5+.5*sin(q3+mytime*1.541);\n' + 'dx = if(yin,dx -0.005*sin(mytime*0.23),if(equal(yin,yang),0,if(below(abs(dx),.05),dx-(q3*0.001),dx)));\n' + 'dy = if(yin,dy - 0.005*sin(mytime*0.2),if(equal(yin,yang),0,if(below(abs(dy),.05),dy-(q3*0.001),dy)));\n' + 'yang = bnot(yin);\n' + 'ob_a=.8+.2*q2;\n' + 'zoom=zoom+.04*q4;'),
	'pixel_eqs_str' : ('snee=bnot(above(sin(ang)-x,.3)*above(q2,0)+above(y-cos(ang),.7)*above(q1,0));\n' + 'snur=bnot(below(x,.3)*above(q3,0)+below(y,.7)*below(q7,4));\n' + 'grid=sin(sigmoid(sin(y*6.28*q2),sin(x*6.28*q6))*(10+q7));\n' + 'rot=bnot(above(x,.7)+((y*q8)%q7))*cos(rad+3.14*if(above(grid,0),snur,bnot(snur))*(.5+.5*sin(rad*3.14*q1)))*q4;\n' + 'zoom=zoom+.03*sin(rad*3.14*q2+q5)*sign(snee);\n' + 'rot=if(rot,rot*sign(snur),q6);\n' + 'cx=if(below(x,.5)*below(y,.5),.5+.2*q1,.5);\n' + 'cy=if(below(x,.5)*below(y,.5),.5+.2*q3,.5);'),
};

return pmap;
});
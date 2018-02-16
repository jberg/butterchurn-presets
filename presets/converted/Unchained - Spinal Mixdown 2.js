define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.05,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 31.999994,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 28.799999,
		wave_scale : 0.45029,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 1.0,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0081,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.4999,
		echo_zoom : 0.9998,
		ob_size : 0.005,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.4999,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.988218,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.97,
		wave_a : 1.254574,
		ob_g : 0.0,
		ib_a : 0.9,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 0.4999,
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
m.basemove = 0;
m.bases = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.tpulse = 0;
m.q7 = 0;
m.grid = 0;
m.bandmove = 0;
m.q8 = 0;
m.tth = 0;
m.bblock = 0;
m.ccl = 0;
m.mpulse = 0;
m.tres = 0;
m.mres = 0;
m.mod_state = 0;
m.bth = 0;
m.bpulse = 0;
m.snur = 0;
m.tblock = 0;
m.bend = 0;
m.le = 0;
m.pulse = 0;
m.snee = 0;
m.band1 = 0;
m.band2 = 0;
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
m.ob_a = (0.8+(0.2*m.q2));
		m.rkeys = ['sx','sy','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.snee = bnot(((above((Math.sin(m.ang)-m.x), 0.5)*above(m.q2, 0))+(above((m.y-Math.cos(m.ang)), 0.5)*above(m.q1, 0))));
m.snur = bnot(((below(m.x, 0.5)*above(m.q3, 0))+(below(m.y, 0.5)*below(m.q7, 4))));
m.grid = Math.sin((sigmoid(Math.sin(((m.y*6.28)*m.q2)), Math.sin(((m.x*6.28)*m.q6)))*(10+m.q7)));
m.rot = ((bnot((above(m.x, 0.5)+mod((m.y*m.q8),m.q7)))*Math.cos((m.rad+((3.14*ifcond(above(m.grid, 0), m.snur, bnot(m.snur)))*(0.5+(0.5*Math.sin(((m.rad*3.14)*m.q1))))))))*m.q4);
m.zoom = ((m.zoom+((0.003*Math.sin(((m.rad*2)+(m.rad*m.q2))))*sign(m.snee)))-(0.003*Math.cos(((m.rad*2)*m.q3))));
m.rot = ifcond(m.rot, (m.rot*sign(m.snur)), (m.q6*sign(-m.snur)));
m.cx = ifcond((below(m.x, 0.5)*above(m.y, 0.5)), (0.5+(0.5*Math.sin((m.ang*m.q1)))), 0.5);
m.cy = ifcond((below(m.x, 0.5)*below(m.y, 0.5)), (0.5+(0.5*Math.sin((m.ang*m.q3)))), 0.5);
m.sx = (m.sx+((((0.37*Math.sin(m.rad))*m.q1)*m.grid)*(1-Math.abs(m.rot))));
m.sy = (m.sy+((((0.37*Math.sin(m.rad))*m.q2)*m.grid)*(1-Math.abs(m.rot))));
m.grid = (mod(pow((m.x*3), (3-m.q1)),m.q8)+mod(pow((m.y*3), (3-m.q3)),m.q8));
m.bend = Math.sin(((((m.x*(9.42-(6.28*m.q2)))*bnot(mod(m.q8,3)))+(((m.rad*9.42)-(6.28*Math.sin((m.time*(1.3+(0.3*m.q1))))))*bnot(mod(m.q8,4))))+((m.y*((9.42*m.q4)-(6.28*m.q3)))*bnot(mod(m.q8,5)))));
m.zoom = (m.zoom+(((m.bend*below(m.y, 0.5))*below(m.x, 0.5))*0.1));
m.sx = (m.sx-ifcond(above(m.q7, 3), ((bnot(m.grid)*m.q3)*0.2), ((0.1*m.q2)*bnot(mod(m.q8,5)))));
m.sy = (m.sy-ifcond(below(m.q7, 3), ((bnot(m.grid)*m.q2)*0.2), ((0.1*m.q3)*bnot(mod(m.q8,2)))));
m.rot = ifcond(equal(m.grid, 3), m.rot, (((bnot(mod(m.grid,m.q7))*above(m.x, 0.5))*above(m.y, 0.5))*Math.sin(((m.zoom*m.rad)*3.14))));
m.band1 = ((below(m.x, 0.1)*above(m.y, Math.abs((m.q1-m.q3))))*below(m.y, (Math.abs((m.q1+m.q3))*0.5)));
m.band2 = ((below(m.x, 0.1)*above(m.y, Math.abs((m.q2-m.q4))))*below(m.y, (Math.abs((m.q2+m.q4))*0.5)));
m.bases = (below(m.x, 0.04)*ifcond(above(m.q1, m.q2), (above(m.y, Math.abs(m.q2))*below(m.y, Math.abs(m.q1))), (above(m.y, Math.abs(m.q1))*below(m.y, Math.abs(m.q2)))));
m.bandmove = (0.009*((Math.abs(m.q5)*m.band1)+((1-Math.abs(m.q5))*m.band2)));
m.basemove = (0.02*m.bases);
m.dx = ((0.0015*Math.max((m.bass_att*2), 1))+ifcond(above(mod(m.q7,3), 0), m.basemove, m.bandmove));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'le=1+.5+2*sin(bass_att);\n' + 'bpulse=band(above(le,bth),above(le-bth,bblock));\n' + 'bblock=le-bth;\n' + 'bth=if(above(le,bth),le+114/(le+10)-7.407,bth+bth*.07/(bth-12)+below(bth,2.7)*.1*(2.7-bth));\n' + 'bth=if(above(bth,6),6,bth);\n' + 'bres=bpulse*sin(pulse+le*.5) + bnot(bpulse)*bres;\n' + 'le=1+.5+2*sin(treb_att);\n' + 'tpulse=band(above(le,tth),above(le-tth,tblock));\n' + 'tblock=le-tth;\n' + 'tth=if(above(le,tth),le+114/(le+10)-7.407,tth+tth*.07/(tth-12)+below(tth,2.7)*.1*(2.7-tth));\n' + 'tth=if(above(tth,6),6,tth);\n' + 'tres=tpulse*sin(pulse+le*.5) + bnot(tpulse)*tres;\n' + 'le=1+.5+2*sin(mid_att);\n' + 'mpulse=band(above(le,mth),above(le-mth,mblock));\n' + 'mblock=le-mth;\n' + 'mth=if(above(le,mth),le+114/(le+10)-7.407,mth+mth*.07/(mth-12)+below(mth,2.7)*.1*(2.7-mth));\n' + 'mth=if(above(mth,6),6,mth);\n' + 'mres=mpulse*sin(pulse+le*.5) + bnot(mpulse)*mres;\n' + 'pulse=if(above(abs(pulse),3.14),-3.14,pulse+(bth+mth+tth)*.003);\n' + 'q1=bres;\n' + 'q2=tres;\n' + 'q3=mres;\n' + 'q4=sin(pulse);\n' + 'mod_state=(above(q1,0)+above(q2,0)+above(q3,0))*(1+above(q4,0));\n' + 'ccl=ccl+tpulse+mpulse-bpulse;\n' + 'q5=cos(pulse*(.5+.1*mod_state));\n' + 'q6=sin(pulse*(.5+pow(.25,mod_state)));\n' + 'q7=mod_state;\n' + 'q8=ccl;\n' + 'ob_r=.5+.5*cos(q1+q7);\n' + 'ob_g=.5+.5*cos(q2*3.14+q7);\n' + 'ob_b=.5+.5*cos(q3*2+sin(time*.0816));\n' + 'ib_size=.025+.02*q2;\n' + 'ob_size=.03+.02*q3-.002*q7;\n' + 'wave_r=.5+.5*sin(q1*q7+time*2.183);\n' + 'wave_g=.5+.5*sin(q2*3+time*1.211);\n' + 'wave_b=.5+.5*sin(q3+time*1.541);\n' + 'ob_a=.8+.2*q2;'),
	'pixel_eqs_str' : ('snee=bnot(above(sin(ang)-x,.5)*above(q2,0)+above(y-cos(ang),.5)*above(q1,0));\n' + 'snur=bnot(below(x,.5)*above(q3,0)+below(y,.5)*below(q7,4));\n' + 'grid=sin(sigmoid(sin(y*6.28*q2),sin(x*6.28*q6))*(10+q7));\n' + 'rot=bnot(above(x,.5)+((y*q8)%q7))*cos(rad+3.14*if(above(grid,0),snur,bnot(snur))*(.5+.5*sin(rad*3.14*q1)))*q4;\n' + 'zoom=zoom+.003*sin(rad*2+rad*q2)*sign(snee)-.003*cos(rad*2*q3);\n' + 'rot=if(rot,rot*sign(snur),q6*sign(-snur));\n' + 'cx=if(below(x,.5)*above(y,.5),.5+.5*sin(ang*q1),.5);\n' + 'cy=if(below(x,.5)*below(y,.5),.5+.5*sin(ang*q3),.5);\n' + 'sx=sx+.37*sin(rad)*q1*grid*(1-abs(rot));\n' + 'sy=sy+.37*sin(rad)*q2*grid*(1-abs(rot));\n' + 'grid=pow(x*3,3-q1)%q8 + pow(y*3,3-q3)%q8;\n' + 'bend = sin(x*(9.42-6.28*q2)*bnot(q8%3)+(rad*9.42-6.28*sin(time*(1.3+.3*q1)))*bnot(q8%4)+y*(9.42*q4-6.28*q3)*bnot(q8%5));\n' + 'zoom = zoom+bend*below(y,.5)*below(x,.5)*.1;\n' + 'sx=sx-if(above(q7,3),bnot(grid)*q3*.2,.1*q2*bnot(q8%5));\n' + 'sy=sy-if(below(q7,3),bnot(grid)*q2*.2,.1*q3*bnot(q8%2));\n' + 'rot=if(equal(grid,3),rot,bnot(grid%q7)*above(x,.5)*above(y,.5)*sin(zoom*rad*3.14));\n' + 'band1 = below(x,0.1)*above(y,abs(q1-q3))*below(y,abs(q1+q3)*.5);\n' + 'band2 = below(x,0.1)*above(y,abs(q2-q4))*below(y,abs(q2+q4)*.5);\n' + 'bases = below(x,0.04)*if(above(q1,q2),above(y,abs(q2))*below(y,abs(q1)),above(y,abs(q1))*below(y,abs(q2)));\n' + 'bandmove = 0.009*(abs(q5)*band1 + (1-abs(q5))*band2);\n' + 'basemove = 0.02*bases;\n' + 'dx = 0.0015*max(bass_att*2,1) + if(above(q7%3,0),basemove,bandmove);'),
};

return pmap;
});
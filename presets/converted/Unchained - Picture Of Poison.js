define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.9,
		mv_x : 31.999994,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 28.799999,
		wave_scale : 0.397105,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.350495,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.5,
		mv_b : 0.4999,
		echo_zoom : 1.0,
		ob_size : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 5.9957,
		wave_dots : 0.0,
		mv_g : 0.4999,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.740601,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.85,
		invert : 0.0,
		rot : -0.76,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.997,
		wave_a : 0.8179,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.5,
		mv_r : 0.4999,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.treb_thresh = 0;
m.q1 = 0;
m.chaos = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.bass_residual = 0;
m.q6 = 0;
m.q7 = 0;
m.grid = 0;
m.q8 = 0;
m.bass_flop = 0;
m.treb_residual = 0;
m.treb_flop = 0;
m.old_bass_flop = 0;
m.treb_changed = 0;
m.entropy = 0;
m.mid_thresh = 0;
m.old_treb_flop = 0;
m.bass_changed = 0;
m.old_mid_flop = 0;
m.bend = 0;
m.pulse = 0;
m.bass_thresh = 0;
m.mid_residual = 0;
m.mid_changed = 0;
m.mid_flop = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.rot = 0;
m.old_bass_flop = m.bass_flop;
m.old_treb_flop = m.treb_flop;
m.old_mid_flop = m.mid_flop;
m.chaos = (0.1+(0.1*Math.sin(m.pulse)));
m.bass_thresh = ifcond(above(m.bass_att, m.bass_thresh), 3, (m.bass_thresh-m.chaos));
m.bass_flop = Math.abs((m.bass_flop-equal(m.bass_thresh, 3)));
m.treb_thresh = ifcond(above(m.treb_att, m.treb_thresh), 3, (m.treb_thresh-m.chaos));
m.treb_flop = Math.abs((m.treb_flop-equal(m.treb_thresh, 3)));
m.mid_thresh = ifcond(above(m.mid_att, m.mid_thresh), 3, (m.mid_thresh-m.chaos));
m.mid_flop = Math.abs((m.mid_flop-equal(m.mid_thresh, 3)));
m.bass_changed = bnot(equal(m.old_bass_flop, m.bass_flop));
m.mid_changed = bnot(equal(m.old_mid_flop, m.mid_flop));
m.treb_changed = bnot(equal(m.old_treb_flop, m.treb_flop));
m.bass_residual = ((m.bass_changed*Math.sin((m.pulse*3)))+(bnot(m.bass_changed)*m.bass_residual));
m.treb_residual = ((m.treb_changed*Math.sin((m.pulse*3)))+(bnot(m.treb_changed)*m.treb_residual));
m.mid_residual = ((m.mid_changed*Math.sin((m.pulse*3)))+(bnot(m.mid_changed)*m.mid_residual));
m.pulse = ifcond(above(Math.abs(m.pulse), 3.14), -3.14, (m.pulse+(((m.bass_thresh+m.mid_thresh)+m.treb_thresh)*0.032)));
m.entropy = ifcond(equal(m.pulse, -3.14), (((m.bass_flop+m.mid_flop)+m.treb_flop)+rand(5)), m.entropy);
m.q1 = m.mid_residual;
m.q2 = m.bass_residual;
m.q3 = m.treb_residual;
m.q4 = Math.sin(m.pulse);
m.q5 = Math.cos((m.pulse*(0.5+(0.1*m.entropy))));
m.q6 = Math.sin((m.pulse*(0.5+pow(0.25, m.entropy))));
m.q7 = (((((above(m.q1, 0)+above(m.q2, 0))+above(m.q3, 0))+(above(m.q3, 0)*m.treb_flop))+(above(m.q2, 0)*m.bass_flop))+(above(m.q1, 0)*m.mid_flop));
m.q8 = m.entropy;
m.ob_r = (0.2+(0.1*Math.sin(((m.time*2.157)+m.q6))));
m.ob_b = (0.2+(0.1*Math.sin(((m.time*1.689)+m.q5))));
m.ob_g = (0.2+(0.1*Math.sin(((m.time*0.413)+m.q4))));
m.ib_r = (0.8+(0.2*Math.cos(((m.time*1.2)+(m.q1*0.1)))));
m.ib_b = (0.2+(0.2*Math.cos(((m.time*2.811)+(m.q2*0.1)))));
m.ib_g = (0.7+(0.3*Math.cos(((m.time*1.666)+(m.q3*0.1)))));
m.ib_size = (0.03+(0.02*m.q2));
m.ob_size = (0.03+(0.02*Math.sin(((m.time*2.321)+(m.q2*0.2)))));
m.ob_a = (0.75+(0.25*m.q3));
m.ib_a = (0.8+(0.2*Math.sin((((m.q2*0.3)+m.q4)+(m.q1*0.5)))));
m.mv_r = (m.mv_r+(0.5*Math.sin((m.q4+(m.time*0.678)))));
m.mv_b = (m.mv_b+(0.5*Math.sin((m.q4+(m.time*0.789)))));
m.mv_g = (m.mv_g+(0.5*Math.sin((m.q5+(m.time*0.456)))));
m.mv_a = (0.2+(0.2*Math.sin(((m.time*1.178)+(m.q5*1.14)))));
m.wave_r = ifcond(m.treb_changed, (0.5+(0.5*m.q3)), ifcond(m.bass_changed, (0.5+(0.5*m.q4)), 1));
m.wave_g = ((((0.5+(0.2*bnot(mod(m.q8,2))))-(0.2*bnot(mod(m.q8,3))))+(0.2*bnot(mod(m.q8,4))))-(0.2*bnot(mod(m.q8,5))));
m.wave_b = ifcond(bnot(mod(m.q8,6)), (0.8+(0.2*m.q1)), (m.bass_changed*m.mid_changed));
m.wave_mode = (((m.q8-m.bass_changed)+m.mid_changed)+m.treb_changed);
m.wave_mystery = mod(m.frame,2);
		m.rkeys = ['sy','sx','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.grid = (mod(pow((m.x*3), (3-m.q1)),m.q8)+mod(pow((m.y*3), (3-m.q3)),m.q8));
m.bend = Math.sin(((((m.x*(9.42-(6.28*m.q2)))*bnot(mod(m.q8,3)))+(((m.rad*9.42)-(6.28*Math.sin((m.time*(1.3+(0.3*m.q1))))))*bnot(mod(m.q8,4))))+((m.y*((9.42*m.q4)-(6.28*m.q3)))*bnot(mod(m.q8,5)))));
m.zoom = (m.zoom+(m.bend*0.1));
m.sx = (m.sx-ifcond(above(m.q1, 2), ((bnot(m.grid)*m.q3)*0.2), ((0.1*m.q2)*bnot(mod(m.q8,5)))));
m.sy = (m.sy-ifcond(above(m.q1, 3), ((bnot(m.grid)*m.q2)*0.2), ((0.1*m.q3)*bnot(mod(m.q8,2)))));
m.rot = ((equal(m.grid, 3)*m.q3)+(bnot(mod(m.grid,m.q7))*Math.cos((((m.zoom*m.grid)*m.q1)*0.01))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'rot=0;\n' + 'old_bass_flop=bass_flop;\n' + 'old_treb_flop=treb_flop;\n' + 'old_mid_flop=mid_flop;\n' + 'chaos=.1+.1*sin(pulse);\n' + 'bass_thresh =if(above(bass_att,bass_thresh),3,bass_thresh-chaos);\n' + 'bass_flop=abs(bass_flop-equal(bass_thresh,3));\n' + 'treb_thresh=if(above(treb_att,treb_thresh),3,treb_thresh-chaos);\n' + 'treb_flop=abs(treb_flop-equal(treb_thresh,3));\n' + 'mid_thresh=if(above(mid_att,mid_thresh),3,mid_thresh-chaos);\n' + 'mid_flop=abs(mid_flop-equal(mid_thresh,3));\n' + 'bass_changed=bnot(equal(old_bass_flop,bass_flop));\n' + 'mid_changed=bnot(equal(old_mid_flop,mid_flop));\n' + 'treb_changed=bnot(equal(old_treb_flop,treb_flop));\n' + 'bass_residual = bass_changed*sin(pulse*3) + bnot(bass_changed)*bass_residual;\n' + 'treb_residual = treb_changed*sin(pulse*3) + bnot(treb_changed)*treb_residual;\n' + 'mid_residual = mid_changed*sin(pulse*3) + bnot(mid_changed)*mid_residual;\n' + 'pulse=if(above(abs(pulse),3.14),-3.14,pulse+(bass_thresh+mid_thresh+treb_thresh)*.032);\n' + 'entropy=if(equal(pulse,-3.14),bass_flop+mid_flop+treb_flop+rand(5),entropy);\n' + 'q1=mid_residual;\n' + 'q2=bass_residual;\n' + 'q3=treb_residual;\n' + 'q4=sin(pulse);\n' + 'q5=cos(pulse*(.5+.1*entropy));\n' + 'q6=sin(pulse*(.5+pow(.25,entropy)));\n' + 'q7=above(q1,0)+above(q2,0)+above(q3,0)+above(q3,0)*treb_flop+above(q2,0)*bass_flop+above(q1,0)*mid_flop;\n' + 'q8=entropy;\n' + 'ob_r=.2+.1*sin(time*2.157+q6);\n' + 'ob_b=.2+.1*sin(time*1.689+q5);\n' + 'ob_g=.2+.1*sin(time*.413+q4);\n' + 'ib_r=.8+.2*cos(time*1.2+q1*.1);\n' + 'ib_b=.2+.2*cos(time*2.811+q2*.1);\n' + 'ib_g=.7+.3*cos(time*1.666+q3*.1);\n' + 'ib_size=.03+.02*q2;\n' + 'ob_size=.03+.02*sin(time*2.321+q2*.2);\n' + 'ob_a=.75+.25*q3;\n' + 'ib_a=.8+.2*sin(q2*.3+q4+q1*.5);\n' + 'mv_r=mv_r+.5*sin(q4+time*.678);\n' + 'mv_b=mv_b+.5*sin(q4+time*.789);\n' + 'mv_g=mv_g+.5*sin(q5+time*.456);\n' + 'mv_a=.2+.2*sin(time*1.178+q5*1.14);\n' + 'wave_r=if(treb_changed,.5+.5*q3,if(bass_changed,.5+.5*q4,1));\n' + 'wave_g=.5+.2*bnot(q8%2)-.2*bnot(q8%3)+.2*bnot(q8%4)-.2*bnot(q8%5);\n' + 'wave_b=if(bnot(q8%6),.8+.2*q1,bass_changed*mid_changed);\n' + 'wave_mode=q8-bass_changed+mid_changed+treb_changed;\n' + 'wave_mystery=frame%2;'),
	'pixel_eqs_str' : ('grid=pow(x*3,3-q1)%q8 + pow(y*3,3-q3)%q8;\n' + 'bend = sin(x*(9.42-6.28*q2)*bnot(q8%3)+(rad*9.42-6.28*sin(time*(1.3+.3*q1)))*bnot(q8%4)+y*(9.42*q4-6.28*q3)*bnot(q8%5));\n' + 'zoom = zoom+bend*.1;\n' + 'sx=sx-if(above(q1,2),bnot(grid)*q3*.2,.1*q2*bnot(q8%5));\n' + 'sy=sy-if(above(q1,3),bnot(grid)*q2*.2,.1*q3*bnot(q8%2));\n' + 'rot=equal(grid,3)*q3+bnot(grid%q7)*cos(zoom*grid*q1*.01);'),
};

return pmap;
});
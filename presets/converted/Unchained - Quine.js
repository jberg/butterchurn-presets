define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.9,
		mv_x : 24.959999,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 19.199999,
		wave_scale : 0.653093,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 1.008145,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.5,
		mv_b : 0.4999,
		echo_zoom : 0.999496,
		ob_size : 0.005,
		wave_smoothing : 0.09,
		warpanimspeed : 5.9957,
		wave_dots : 0.0,
		mv_g : 0.4999,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.008384,
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
		rot : 0.5,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 1.0592,
		ob_g : 0.0,
		ib_a : 1.0,
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
m.xx = 0;
m.yy = 0;
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
m.grid_shift = 0;
m.treb_residual = 0;
m.treb_flop = 0;
m.old_bass_flop = 0;
m.treb_changed = 0;
m.entropy = 0;
m.mid_thresh = 0;
m.old_treb_flop = 0;
m.bass_changed = 0;
m.echo_orientation = 0;
m.old_mid_flop = 0;
m.pulse = 0;
m.bass_thresh = 0;
m.mid_residual = 0;
m.mid_changed = 0;
m.mid_flop = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.old_bass_flop = m.bass_flop;
m.old_treb_flop = m.treb_flop;
m.old_mid_flop = m.mid_flop;
m.chaos = (0.9+(0.1*Math.sin(m.pulse)));
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.6)*m.chaos)+1.6)));
m.bass_flop = Math.abs((m.bass_flop-equal(m.bass_thresh, 2)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.6)*m.chaos)+1.6)));
m.treb_flop = Math.abs((m.treb_flop-equal(m.treb_thresh, 2)));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_att, m.mid_thresh))*(((m.mid_thresh-1.6)*m.chaos)+1.6)));
m.mid_flop = Math.abs((m.mid_flop-equal(m.mid_thresh, 2)));
m.bass_changed = bnot(equal(m.old_bass_flop, m.bass_flop));
m.mid_changed = bnot(equal(m.old_mid_flop, m.mid_flop));
m.treb_changed = bnot(equal(m.old_treb_flop, m.treb_flop));
m.bass_residual = ((m.bass_changed*Math.sin((m.pulse*3)))+(bnot(m.bass_changed)*m.bass_residual));
m.treb_residual = ((m.treb_changed*Math.sin((m.pulse*3)))+(bnot(m.treb_changed)*m.treb_residual));
m.mid_residual = ((m.mid_changed*Math.sin((m.pulse*3)))+(bnot(m.mid_changed)*m.mid_residual));
m.monitor = div(m.warp,100);
m.pulse = ifcond(above(Math.abs(m.pulse), 20), -20, (m.pulse+(((m.bass_thresh+m.mid_thresh)+m.treb_thresh)*div(m.warp,100))));
m.entropy = ifcond(((m.bass_changed*m.mid_changed)*m.treb_changed), (((m.bass_flop+m.treb_flop)+m.mid_flop)+rand((m.rot*10))), m.entropy);
m.q1 = m.mid_residual;
m.q2 = m.bass_residual;
m.q3 = m.treb_residual;
m.q4 = Math.sin(m.pulse);
m.q5 = Math.cos((m.pulse*(0.5+(0.1*m.entropy))));
m.q6 = Math.sin((m.pulse*(0.5+pow(0.25, m.entropy))));
m.q7 = (((((above(m.q1, 0)+above(m.q2, 0))+above(m.q3, 0))+(above(m.q3, 0)*m.treb_flop))+(above(m.q2, 0)*m.bass_flop))+(above(m.q1, 0)*m.mid_flop));
m.q8 = m.entropy;
m.ib_r = (0.5+(0.5*Math.cos(((m.time*1.2)+(m.q1*0.1)))));
m.ib_b = (0.5+(0.5*Math.cos(((m.time*2.811)+(m.q2*0.1)))));
m.ib_g = (0.5+(0.5*Math.cos(((m.time*1.666)+(m.q3*0.1)))));
m.ob_r = (1-ifcond(mod(m.q8,2), m.ib_b, m.ib_g));
m.ob_b = (1-ifcond(above(m.q8, 3), m.ib_g, m.ib_r));
m.ob_g = (1-ifcond(mod(m.q8,3), m.ib_r, m.ib_b));
m.ib_size = (0.03+(0.02*m.q2));
m.ob_size = (0.03+(0.02*Math.sin(((m.time*2.321)+(m.q2*0.2)))));
m.ib_a = (0.9+(0.1*Math.sin((((m.q2*0.3)+m.q4)+(m.q1*0.5)))));
m.mv_r = (0.5+(0.5*Math.sin((m.q4+(m.time*0.678)))));
m.mv_b = (0.5+(0.5*Math.sin((m.q4+(m.time*0.789)))));
m.mv_g = (0.5+(0.5*Math.sin((m.q5+(m.time*0.456)))));
m.mv_a = (0.1+(0.1*Math.sin(((m.time*1.178)+(m.q5*1.14)))));
m.wave_r = (0.5+(0.5*Math.sin((m.q1+(m.time*2.183)))));
m.wave_b = (0.5+(0.5*Math.sin((m.q2+(m.time*1.211)))));
m.wave_g = (0.5+(0.5*Math.sin((m.q3+(m.time*1.541)))));
m.wave_mystery = (m.wave_mystery+Math.sin(((m.time*2.18)+m.q6)));
m.wave_x = ((m.wave_x+(0.3*Math.sin((m.time*0.811))))+(0.005*mod(m.frame,3)));
m.wave_y = ((m.wave_y+(0.3*Math.sin((m.time*0.788))))+(0.005*mod(m.frame,3)));
m.wave_mode = mod(m.q8,2);
m.echo_orientation = mod(m.q8,4);
m.warp = 0;
m.rot = 0;
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.xx = ((((((above(m.y, (0.5+(0.5*m.q2)))*m.x)*m.q1)-0.5)+(0.03*m.q5))+((0.1*m.y)*m.q6))+(0.1*Math.sin((m.time*0.322))));
m.yy = ((((((above(m.x, (0.5+(0.5*m.q3)))*m.y)*m.q1)-0.5)+(0.03*m.q6))+((0.1*m.x)*m.q5))+(0.1*Math.sin((m.time*0.427))));
m.rot = Math.sin((m.rad*(((1.4+(0.7*m.q4))+(0.7*m.q5))+(0.7*m.q6))));
m.grid = bnot(mod(Math.sin((m.xx*m.yy)),m.q8));
m.grid_shift = (m.grid*Math.sin((((m.yy-0.5)*6.3)*m.q4)));
m.dx = ifcond((above(m.q4, 0)*above(Math.abs((m.x-0.5)), (0.25+(0.25*m.q1)))), (below(m.q7, 4)*m.grid_shift), Math.sin(((m.xx*3.14)*above(m.q3, 0))));
m.dy = ifcond(equal(m.q7, 3), ((above(m.q5, 0)*above(m.q7, 3))*m.grid_shift), Math.sin(((m.yy*3.14)*above(m.q2, 0))));
m.zoom = (m.zoom+((Math.cos((((m.rad*m.q5)+(m.q7*m.xx))+(m.q8*m.yy)))*m.q6)*0.5));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('old_bass_flop=bass_flop;\n' + 'old_treb_flop=treb_flop;\n' + 'old_mid_flop=mid_flop;\n' + 'chaos=.9+.1*sin(pulse);\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.6)*chaos+1.6);\n' + 'bass_flop=abs(bass_flop-equal(bass_thresh,2));\n' + 'treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.6)*chaos+1.6);\n' + 'treb_flop=abs(treb_flop-equal(treb_thresh,2));\n' + 'mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.6)*chaos+1.6);\n' + 'mid_flop=abs(mid_flop-equal(mid_thresh,2));\n' + 'bass_changed=bnot(equal(old_bass_flop,bass_flop));\n' + 'mid_changed=bnot(equal(old_mid_flop,mid_flop));\n' + 'treb_changed=bnot(equal(old_treb_flop,treb_flop));\n' + 'bass_residual = bass_changed*sin(pulse*3) + bnot(bass_changed)*bass_residual;\n' + 'treb_residual = treb_changed*sin(pulse*3) + bnot(treb_changed)*treb_residual;\n' + 'mid_residual = mid_changed*sin(pulse*3) + bnot(mid_changed)*mid_residual;\n' + 'monitor=warp/100;\n' + 'pulse=if(above(abs(pulse),20),-20,pulse+(bass_thresh+mid_thresh+treb_thresh)*(warp/100));\n' + 'entropy=if(bass_changed*mid_changed*treb_changed,bass_flop+treb_flop+mid_flop+rand(rot*10),entropy);\n' + 'q1=mid_residual;\n' + 'q2=bass_residual;\n' + 'q3=treb_residual;\n' + 'q4=sin(pulse);\n' + 'q5=cos(pulse*(.5+.1*entropy));\n' + 'q6=sin(pulse*(.5+pow(.25,entropy)));\n' + 'q7=above(q1,0)+above(q2,0)+above(q3,0)+above(q3,0)*treb_flop+above(q2,0)*bass_flop+above(q1,0)*mid_flop;\n' + 'q8=entropy;\n' + 'ib_r=.5+.5*cos(time*1.2+q1*.1);\n' + 'ib_b=.5+.5*cos(time*2.811+q2*.1);\n' + 'ib_g=.5+.5*cos(time*1.666+q3*.1);\n' + 'ob_r=1-if(q8%2,ib_b,ib_g);\n' + 'ob_b=1-if(above(q8,3),ib_g,ib_r);\n' + 'ob_g=1-if(q8%3,ib_r,ib_b);\n' + 'ib_size=.03+.02*q2;\n' + 'ob_size=.03+.02*sin(time*2.321+q2*.2);\n' + 'ib_a=.9+.1*sin(q2*.3+q4+q1*.5);\n' + 'mv_r=.5+.5*sin(q4+time*.678);\n' + 'mv_b=.5+.5*sin(q4+time*.789);\n' + 'mv_g=.5+.5*sin(q5+time*.456);\n' + 'mv_a=.1+.1*sin(time*1.178+q5*1.14);\n' + 'wave_r=.5+.5*sin(q1+time*2.183);\n' + 'wave_b=.5+.5*sin(q2+time*1.211);\n' + 'wave_g=.5+.5*sin(q3+time*1.541);\n' + 'wave_mystery=wave_mystery+sin(time*2.18+q6);\n' + 'wave_x=wave_x+.3*sin(time*.811)+.005*(frame%3);\n' + 'wave_y=wave_y+.3*sin(time*.788)+.005*(frame%3);\n' + 'wave_mode=q8%2;\n' + 'echo_orientation=q8%4;\n' + 'warp=0;\n' + 'rot=0;'),
	'pixel_eqs_str' : ('xx=above(y,.5+.5*q2)*x*q1-.5+.03*q5+.1*y*q6+.1*sin(time*.322);\n' + 'yy=above(x,.5+.5*q3)*y*q1-.5+.03*q6+.1*x*q5+.1*sin(time*.427);\n' + 'rot=sin(rad*(1.4+.7*q4+.7*q5+.7*q6));\n' + 'grid=bnot(sin(xx*yy)%q8);\n' + 'grid_shift=grid*sin((yy-.5)*6.3*q4);\n' + 'dx=if(above(q4,0)*above(abs(x-.5),.25+.25*q1),below(q7,4)*grid_shift,sin(xx*3.14*above(q3,0)));\n' + 'dy=if(equal(q7,3),above(q5,0)*above(q7,3)*grid_shift,sin(yy*3.14*above(q2,0)));\n' + 'zoom=zoom+cos(rad*q5+q7*xx+q8*yy)*q6*.5;'),
};

return pmap;
});
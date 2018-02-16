define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.5,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.136001,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.5,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.008151,
		fshader : 0.2,
		wave_r : 0.5,
		ib_r : 0.5,
		echo_zoom : 1.00644,
		ob_size : 0.0,
		wave_smoothing : 0.54,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9998,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.47,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.5,
		invert : 0.0,
		bmotionvectorson : 0.0,
		rot : 0.0,
		modwavealphaend : 0.75,
		wave_mystery : 0.2,
		decay : 0.981,
		wave_a : 1.868299,
		ob_g : 0.5,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.5,
		rating : 0.0,
		modwavealphastart : 0.95,
		darken : 0.0,
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
m.zoom_fade = 0;
m.g1 = 0;
m.g2 = 0;
m.g3 = 0;
m.treb_changed = 0;
m.entropy = 0;
m.mid_thresh = 0;
m.bass_changed = 0;
m.r_shift = 0;
m.pulse = 0;
m.x_shift = 0;
m.y_shift = 0;
m.bass_thresh = 0;
m.mid_changed = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.chaos = (0.9+(0.1*Math.sin(m.pulse)));
m.entropy = ifcond(bnot(m.entropy), 2, ifcond(equal(m.pulse, -20), (1+rand(5)), m.entropy));
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*m.chaos)+1.3)));
m.bass_changed = Math.abs((m.bass_changed-equal(m.bass_thresh, 2)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.3)*m.chaos)+1.3)));
m.treb_changed = Math.abs((m.treb_changed-equal(m.treb_thresh, 2)));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_att, m.mid_thresh))*(((m.mid_thresh-1.3)*m.chaos)+1.3)));
m.mid_changed = Math.abs((m.mid_changed-equal(m.mid_thresh, 2)));
m.pulse = ifcond(above(Math.abs(m.pulse), 20), -20, ((m.pulse+((0.1*m.chaos)*bor(bor(m.bass_changed, m.treb_changed), m.mid_changed)))+(((m.mid+m.bass)+m.treb)*0.025)));
m.q3 = Math.sin(m.pulse);
m.q2 = ((div(m.pulse,m.entropy)*0.5)*m.chaos);
m.q4 = Math.sin(m.q2);
m.q5 = m.entropy;
m.q1 = ((((1+(1*above(m.q4, 0)))*(1+(2*above(m.q3, 0))))*(1+((4*m.mid_changed)*above(m.q3, 0))))*(1+(6*above(m.pulse, 0))));
m.wave_r = ifcond(m.treb_changed, (0.5+(0.5*m.q3)), ifcond(m.bass_changed, (0.5+(0.5*m.q4)), 1));
m.wave_g = ((((0.5+(0.2*bnot(mod(m.q1,2))))-(0.2*bnot(mod(m.q1,3))))+(0.2*bnot(mod(m.q1,5))))-(0.2*bnot(mod(m.q1,7))));
m.wave_b = ifcond(bnot(mod(m.q1,6)), (0.8+(0.2*m.q4)), (m.bass_changed*m.mid_changed));
m.ob_r = ((m.ob_r+(0.2*m.q4))+((0.3*bnot(mod(m.q1,7)))*m.q3));
m.ob_b = ((m.ob_b-(0.1*bnot(mod(m.q1,105))))-(0.4*Math.sin((m.q2*0.8))));
m.ob_g = (m.ob_g+(0.5*Math.sin(((m.pulse*0.4)*m.entropy))));
m.ob_a = (0.07+(0.05*m.q3));
m.ob_size = ((0.01*m.entropy)*bnot(mod(m.q1,6)));
m.ib_r = ((m.ib_r+(0.2*m.q1))-((0.3*bnot(mod(m.q1,3)))*m.q4));
m.ib_b = ((m.ib_b-(0.1*bnot(mod(m.q1,42))))-(0.4*Math.sin((m.q2*0.7))));
m.ib_g = (m.ib_g+(0.5*Math.sin(((m.pulse*0.5)*m.entropy))));
m.ib_a = (0.07+((0.05*m.q3)*m.q4));
m.ib_size = (0.005+(0.005*m.q3));
m.zoom_fade = ifcond(above(m.q3, 0), ifcond(above(m.q4, 0), (m.zoom_fade-0.0013), (m.zoom_fade+0.002)), (1+(0.04*m.q4)));
m.zoom = m.zoom_fade;
		m.rkeys = ['zoom','dx','dy'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.g1 = Math.sin(((m.q2*0.04)*m.q5));
m.g2 = Math.sin(((m.q2*0.05)*m.q5));
m.g3 = Math.sin(((m.q2*0.06)*m.q5));
m.x_shift = ((pow(m.x, 2)+((m.x*m.g1)*2))+sqr(m.g1));
m.y_shift = ((pow(m.y, 2)+((m.y*m.g2)*2))+sqr(m.g2));
m.r_shift = ((pow(m.rad, 2)+((m.rad*m.g3)*2))+sqr(m.g3));
m.zoom = (m.zoom-((Math.sin((((m.x_shift*bnot(mod(m.q1,10)))+(m.y_shift*bnot(mod(m.q1,14))))+(m.r_shift*bnot(mod(m.q1,21)))))*m.q3)*((0.1+(0.1*bnot(mod(m.q1,30))))+(0.1*bnot(mod(m.q1,7))))));
m.dx = ((m.dx+((bnot(mod(m.q1,35))*(m.rad-(0.5*m.g3)))*m.g2))-((Math.cos((m.y*1.68))*0.1)*bnot(mod(m.q1,21))));
m.dy = (m.dy-(Math.cos((m.x*1.68))*bnot(mod(m.q1,10))));
m.rot = ifcond(above(Math.sin((m.q2*4.3)), 0), (0.3*above(Math.abs((m.zoom-1)), 0.05)), (0.3*m.g3));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'chaos=.9+.1*sin(pulse);\n' + 'entropy=if(bnot(entropy),2,if(equal(pulse,-20),1+rand(5),entropy));\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);\n' + 'bass_changed=abs(bass_changed-equal(bass_thresh,2));\n' + 'treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);\n' + 'treb_changed=abs(treb_changed-equal(treb_thresh,2));\n' + 'mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);\n' + 'mid_changed=abs(mid_changed-equal(mid_thresh,2));\n' + 'pulse=if(above(abs(pulse),20),-20,pulse+.1*chaos*bor(bor(bass_changed,treb_changed),mid_changed)+(mid+bass+treb)*.025);\n' + 'q3=sin(pulse);\n' + 'q2=(pulse/entropy)*.5*chaos;\n' + 'q4=sin(q2);\n' + 'q5=entropy;\n' + 'q1=(1+1*above(q4,0))*(1+2*above(q3,0))*(1+4*mid_changed*above(q3,0))*(1+6*above(pulse,0));\n' + 'wave_r=if(treb_changed,.5+.5*q3,if(bass_changed,.5+.5*q4,1));\n' + 'wave_g=.5+.2*bnot(q1%2)-.2*bnot(q1%3)+.2*bnot(q1%5)-.2*bnot(q1%7);\n' + 'wave_b=if(bnot(q1%6),.8+.2*q4,bass_changed*mid_changed);\n' + 'ob_r=ob_r+.2*q4+.3*bnot(q1%7)*q3;\n' + 'ob_b=ob_b-.1*bnot(q1%105)-.4*sin(q2*.8);\n' + 'ob_g=ob_g+.5*sin(pulse*.4*entropy);\n' + 'ob_a=.07+.05*q3;\n' + 'ob_size=.01*entropy*bnot(q1%6);\n' + 'ib_r=ib_r+.2*q1-.3*bnot(q1%3)*q4;\n' + 'ib_b=ib_b-.1*bnot(q1%42)-.4*sin(q2*.7);\n' + 'ib_g=ib_g+.5*sin(pulse*.5*entropy);\n' + 'ib_a=.07+.05*q3*q4;\n' + 'ib_size=.005+.005*q3;\n' + 'zoom_fade=if(above(q3,0),if(above(q4,0),zoom_fade-.0013,zoom_fade+.002),1+.04*q4);\n' + 'zoom=zoom_fade;'),
	'pixel_eqs_str' : ('g1=sin(q2*.04*q5);\n' + 'g2=sin(q2*.05*q5);\n' + 'g3=sin(q2*.06*q5);\n' + 'x_shift=pow(x,2)+x*g1*2+sqr(g1);\n' + 'y_shift=pow(y,2)+y*g2*2+sqr(g2);\n' + 'r_shift=pow(rad,2)+rad*g3*2+sqr(g3);\n' + 'zoom=zoom -sin(x_shift*bnot(q1%10)+y_shift*bnot(q1%14)+r_shift*bnot(q1%21))*q3*(.1+.1*bnot(q1%30)+.1*bnot(q1%7));\n' + 'dx=dx+bnot(q1%35)*(rad-.5*g3)*g2-cos(y*1.68)*.1*bnot(q1%21);\n' + 'dy=dy-cos(x*1.68)*bnot(q1%10);\n' + 'rot=if(above(sin(q2*4.3),0),.3*above(abs(zoom-1),.05),.3*g3);'),
};

return pmap;
});
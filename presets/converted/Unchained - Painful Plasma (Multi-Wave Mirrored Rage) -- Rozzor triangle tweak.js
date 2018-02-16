define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.1999,
		ib_g : 0.5,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.224562,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.03,
		sy : 1.0,
		ib_size : 0.5,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.5,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.1,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.5,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.7,
		wave_x : 0.6,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.02,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.25,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.96,
		wave_a : 1.0,
		ob_g : 0.15,
		ib_a : 0.01,
		wave_b : 0.7,
		ib_b : 0.5,
		mv_r : 0.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 1.0,
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
m.bass_flop = 0;
m.treb_residual = 0;
m.treb_flop = 0;
m.old_bass_flop = 0;
m.treb_changed = 0;
m.entropy = 0;
m.newzoom = 0;
m.mid_thresh = 0;
m.old_treb_flop = 0;
m.bass_changed = 0;
m.newrad = 0;
m.old_mid_flop = 0;
m.newx = 0;
m.newy = 0;
m.pulse = 0;
m.thresh = 0;
m.bass_thresh = 0;
m.mid_residual = 0;
m.mid_changed = 0;
m.mid_flop = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.old_bass_flop = m.bass_flop;
m.old_treb_flop = m.treb_flop;
m.old_mid_flop = m.mid_flop;
m.chaos = (0.9+(0.1*Math.sin(m.pulse)));
m.entropy = ifcond(bnot(m.entropy), 2, ifcond(equal(m.pulse, -20), (1+rand(3)), m.entropy));
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*m.chaos)+1.3)));
m.bass_flop = Math.abs((m.bass_flop-equal(m.bass_thresh, 2)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.3)*m.chaos)+1.3)));
m.treb_flop = Math.abs((m.treb_flop-equal(m.treb_thresh, 2)));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_att, m.mid_thresh))*(((m.mid_thresh-1.3)*m.chaos)+1.3)));
m.mid_flop = Math.abs((m.mid_flop-equal(m.mid_thresh, 2)));
m.bass_changed = bnot(equal(m.old_bass_flop, m.bass_flop));
m.mid_changed = bnot(equal(m.old_mid_flop, m.mid_flop));
m.treb_changed = bnot(equal(m.old_treb_flop, m.treb_flop));
m.bass_residual = ((m.bass_changed*Math.sin(((m.pulse*0.1)*m.entropy)))+(bnot(m.bass_changed)*m.bass_residual));
m.treb_residual = ((m.treb_changed*Math.sin(((m.pulse*0.1)*m.entropy)))+(bnot(m.treb_changed)*m.treb_residual));
m.mid_residual = ((m.mid_changed*Math.sin(((m.pulse*0.1)*m.entropy)))+(bnot(m.mid_changed)*m.mid_residual));
m.pulse = ifcond(above(Math.abs(m.pulse), 20), -20, ((m.pulse+((((m.bass_thresh+m.mid)+m.thresh)+m.treb_thresh)*0.052))+(-((m.bass+m.treb)+m.mid)*0.01)));
m.q1 = m.mid_residual;
m.q2 = m.bass_residual;
m.q3 = m.treb_residual;
m.q4 = Math.sin(m.pulse);
m.q5 = Math.sin(div(m.pulse,2));
m.wave_r = (m.wave_r+(0.5*m.bass_residual));
m.wave_r = (m.wave_g+(0.5*m.mid_residual));
m.wave_r = (m.wave_b+(0.5*m.treb_residual));
m.wave_mystery = m.mid_residual;
m.ob_r = ifcond(m.bass_flop, m.treb_flop, m.wave_r);
m.ob_b = ifcond(m.treb_flop, m.mid_flop, m.wave_b);
m.ob_g = ifcond(m.mid_flop, m.bass_flop, m.wave_g);
m.ob_a = (0.05+(0.05*Math.cos((m.wave_r+(m.pulse*0.03)))));
m.ob_size = (0.2+(0.2*m.treb_residual));
m.ib_r = ifcond(m.bass_flop, m.ob_b, m.ob_g);
m.ib_b = ifcond(m.treb_flop, m.ob_g, m.ob_r);
m.ib_g = ifcond(m.mid_flop, m.ob_r, m.ob_b);
m.ib_size = ((m.ob_size*Math.cos((m.wave_g+(m.pulse*0.4))))*0.5);
m.mv_a = m.q1;
m.mv_x = rand(30);
m.mv_y = rand(30);
m.mv_r = m.wave_b;
m.mv_b = m.wave_g;
m.mv_g = m.wave_r;
m.wave_mode = (4+(4*m.q4));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.newx = (m.x-Math.abs(m.q1));
m.newy = (m.y-Math.abs(m.q2));
m.newrad = (sqrt(((m.newx*m.newx)+((0.5625*m.newy)*m.newy)))*2);
m.newzoom = pow(1.03, pow((0.01+Math.sin((m.newrad*m.newrad))), ((m.newrad*2)-1)));
m.dx = ((m.newx*m.newzoom)-m.newx);
m.dy = ((m.newy*m.newzoom)-m.newy);
m.rot = ((-0.1*m.newrad)*((0.5*m.rad)+0.1));
m.zoom = (m.zoom+(0.07*Math.cos(((m.x*10)*m.q3))));
m.rot = (m.rot*(m.zoom-1));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {

			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			g2 : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.1,
			enabled : 1.0,
			b : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			g2 : 1.0,
			additive : 0.0,
			border_a : 0.4,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.25,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*1.4);
m.x = ((0.5+(0.08*Math.cos((m.time*1.1))))+(0.03*Math.cos((m.time*0.7))));
m.y = ((0.5+(0.08*Math.sin((m.time*1.1))))+(0.03*Math.sin((m.time*0.7))));
m.r = (0.5+(0.5*Math.sin(((m.time*0.713)+1))));
m.g = (0.5+(0.5*Math.sin(((m.time*0.563)+2))));
m.b = (0.5+(0.5*Math.sin(((m.time*0.654)+5))));
m.r2 = (0.5+(0.5*Math.sin(((m.time*0.885)+4))));
m.g2 = (0.5+(0.5*Math.sin(((m.time*0.556)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.time*0.638)+3))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time*1.4;\n' + 'x = 0.5 + 0.08*cos(time*1.1) + 0.03*cos(time*0.7);\n' + 'y = 0.5 + 0.08*sin(time*1.1) + 0.03*sin(time*0.7);\n' + 'r = 0.5 + 0.5*sin(time*0.713 + 1);\n' + 'g = 0.5 + 0.5*sin(time*0.563 + 2);\n' + 'b = 0.5 + 0.5*sin(time*0.654 + 5);\n' + 'r2 = 0.5 + 0.5*sin(time*0.885 + 4);\n' + 'g2 = 0.5 + 0.5*sin(time*0.556+ 1);\n' + 'b2 = 0.5 + 0.5*sin(time*0.638 + 3);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			g2 : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

		},
		{
		'baseVals' : {

			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'old_bass_flop=bass_flop;\n' + 'old_treb_flop=treb_flop;\n' + 'old_mid_flop=mid_flop;\n' + 'chaos=.9+.1*sin(pulse);\n' + 'entropy=if(bnot(entropy),2,if(equal(pulse,-20),1+rand(3),entropy));\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);\n' + 'bass_flop=abs(bass_flop-equal(bass_thresh,2));\n' + 'treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);\n' + 'treb_flop=abs(treb_flop-equal(treb_thresh,2));\n' + 'mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);\n' + 'mid_flop=abs(mid_flop-equal(mid_thresh,2));\n' + 'bass_changed=bnot(equal(old_bass_flop,bass_flop));\n' + 'mid_changed=bnot(equal(old_mid_flop,mid_flop));\n' + 'treb_changed=bnot(equal(old_treb_flop,treb_flop));\n' + 'bass_residual = bass_changed*sin(pulse*.1*entropy) + bnot(bass_changed)*bass_residual;\n' + 'treb_residual = treb_changed*sin(pulse*.1*entropy) + bnot(treb_changed)*treb_residual;\n' + 'mid_residual = mid_changed*sin(pulse*.1*entropy) + bnot(mid_changed)*mid_residual;\n' + 'pulse=if(above(abs(pulse),20),-20,pulse+(bass_thresh+mid+thresh+treb_thresh)*.052+-(bass+treb+mid)*.01);\n' + 'q1=mid_residual;\n' + 'q2=bass_residual;\n' + 'q3=treb_residual;\n' + 'q4=sin(pulse);\n' + 'q5=sin(pulse/2);\n' + 'wave_r=wave_r+.5*bass_residual;\n' + 'wave_r=wave_g+.5*mid_residual;\n' + 'wave_r=wave_b+.5*treb_residual;\n' + 'wave_mystery=mid_residual;\n' + 'ob_r=if(bass_flop,treb_flop,wave_r);\n' + 'ob_b=if(treb_flop,mid_flop,wave_b);\n' + 'ob_g=if(mid_flop,bass_flop,wave_g);\n' + 'ob_a=.05+.05*cos(wave_r+pulse*.03);\n' + 'ob_size=.2+.2*treb_residual;\n' + 'ib_r=if(bass_flop,ob_b,ob_g);\n' + 'ib_b=if(treb_flop,ob_g,ob_r);\n' + 'ib_g=if(mid_flop,ob_r,ob_b);\n' + 'ib_size=ob_size*cos(wave_g+pulse*0.4)*.5;\n' + 'mv_a=q1;\n' + 'mv_x=rand(30);\n' + 'mv_y=rand(30);\n' + 'mv_r=wave_b;\n' + 'mv_b=wave_g;\n' + 'mv_g=wave_r;\n' + 'wave_mode=4+4*q4;'),
	'pixel_eqs_str' : ('newx = x - abs(q1);\n' + 'newy = y - abs(q2);\n' + 'newrad = sqrt((newx)*(newx)+0.5625*(newy)*(newy))*2;\n' + 'newzoom = pow(1.03, pow(0.01+sin(newrad*newrad), newrad*2-1));\n' + 'dx = (newx)*newzoom - newx;\n' + 'dy = (newy)*newzoom - newy;\n' + 'rot = -0.1*newrad*(0.5*rad+0.1);\n' + 'zoom = zoom+.07*cos(x*10*q3);\n' + 'rot = rot * (zoom-1);'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
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
		zoomexp : 1.008151,
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
		mv_g : 0.7,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.659411,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.94,
		wave_a : 1.254574,
		ob_g : 0.0,
		ib_a : 0.9,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 5.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 3.0,
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
m.mres = 0;
m.mod_state = 0;
m.bth = 0;
m.bpulse = 0;
m.tblock = 0;
m.le = 0;
m.pulse = 0;
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
m.zoom = (m.zoom+(0.01*m.q4));
		m.rkeys = ['zoom','sy','sx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.grid = mod(pow((Math.sin((((m.rad*m.q6)*m.q2)+(((m.x*m.y)*m.q6)*m.q3)))*2), (1+mod(m.q7,5))),2);
m.rot = (bnot(m.grid)+(m.grid*m.q4));
m.sx = (m.sx+(Math.sin(((m.q2+0.5)*m.x))*0.003));
m.sy = (m.sy+(Math.sin(((m.q1+3.4)*m.y))*0.003));
m.zoom = (m.zoom+((0.11*Math.cos((m.rad*3.14)))*m.q4));
		return m;
	},
	'waves' : [
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

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
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
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
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
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
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
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
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

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'le=1+.5+2*sin(bass_att);\n' + 'bpulse=band(above(le,bth),above(le-bth,bblock));\n' + 'bblock=le-bth;\n' + 'bth=if(above(le,bth),le+114/(le+10)-7.407,bth+bth*.07/(bth-12)+below(bth,2.7)*.1*(2.7-bth));\n' + 'bth=if(above(bth,6),6,bth);\n' + 'bres=bpulse*sin(pulse+le*.5) + bnot(bpulse)*bres;\n' + 'le=1+.5+2*sin(treb_att);\n' + 'tpulse=band(above(le,tth),above(le-tth,tblock));\n' + 'tblock=le-tth;\n' + 'tth=if(above(le,tth),le+114/(le+10)-7.407,tth+tth*.07/(tth-12)+below(tth,2.7)*.1*(2.7-tth));\n' + 'tth=if(above(tth,6),6,tth);\n' + 'tres=tpulse*sin(pulse+le*.5) + bnot(tpulse)*tres;\n' + 'le=1+.5+2*sin(mid_att);\n' + 'mpulse=band(above(le,mth),above(le-mth,mblock));\n' + 'mblock=le-mth;\n' + 'mth=if(above(le,mth),le+114/(le+10)-7.407,mth+mth*.07/(mth-12)+below(mth,2.7)*.1*(2.7-mth));\n' + 'mth=if(above(mth,6),6,mth);\n' + 'mres=mpulse*sin(pulse+le*.5) + bnot(mpulse)*mres;\n' + 'pulse=if(above(abs(pulse),3.14),-3.14,pulse+(bth+mth+tth)*.003);\n' + 'q1=bres;\n' + 'q2=tres;\n' + 'q3=mres;\n' + 'q4=sin(pulse);\n' + 'mod_state=(above(q1,0)+above(q2,0)+above(q3,0))*(1+above(q4,0));\n' + 'ccl=ccl+tpulse+mpulse-bpulse;\n' + 'q5=cos(pulse*(.5+.1*mod_state));\n' + 'q6=sin(pulse*(.5+pow(.25,mod_state)));\n' + 'q7=mod_state;\n' + 'q8=ccl;\n' + 'ob_r=.5+.5*cos(q1+q7);\n' + 'ob_g=.5+.5*cos(q2*3.14+q7);\n' + 'ob_b=.5+.5*cos(q3*2+sin(time*.0816));\n' + 'ib_size=.025+.02*q2;\n' + 'ob_size=.03+.02*q3-.002*q7;\n' + 'wave_r=.5+.5*sin(q1*q7+time*2.183);\n' + 'wave_g=.5+.5*sin(q2*3+time*1.211);\n' + 'wave_b=.5+.5*sin(q3+time*1.541);\n' + 'ob_a=.8+.2*q2;\n' + 'zoom=zoom+.01*q4;'),
	'pixel_eqs_str' : ('grid=pow(sin(rad*q6*q2+x*y*q6*q3)*2,1+q7%5)%2;\n' + 'rot=bnot(grid)+grid*q4;\n' + 'sx=sx+sin((q2+.5)*x)*.003;\n' + 'sy=sy+sin((q1+3.4)*y)*.003;\n' + 'zoom=zoom+.11*cos(rad*3.14)*q4;'),
};

return pmap;
});
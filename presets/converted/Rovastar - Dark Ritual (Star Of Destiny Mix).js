define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.994,
		wave_g : 0.65,
		ib_g : 1.0,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.634243,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 0.999666,
		ob_r : 0.0,
		sy : 0.9999,
		ib_size : 0.01,
		warp : 1.56E-4,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.05,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 0.35,
		echo_zoom : 2.0,
		ob_size : 0.01,
		wave_smoothing : 0.1,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.35,
		wave_x : 0.5,
		wave_y : 0.46,
		zoom : 100.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 0.35,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.q5_residual = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.meanbass_att = 0;
m.dist = 0;
m.q8 = 0;
m.lastbeat = 0;
m.oldq8 = 0;
m.mult = 0;
m.du = 0;
m.dv = 0;
m.beatrate = 0;
m.beat = 0;
m.ang2 = 0;
m.volume = 0;
m.bass_thresh = 0;
m.q6_residual = 0;
m.oldq8 = 0;
m.q8 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.mv_r = (m.mv_r+(0.350*((0.60*Math.sin((0.980*m.time)))+(0.40*Math.sin((1.047*m.time))))));
m.mv_g = (m.mv_g+(0.350*((0.60*Math.sin((0.835*m.time)))+(0.40*Math.sin((1.081*m.time))))));
m.mv_b = (m.mv_b+(0.350*((0.60*Math.sin((0.814*m.time)))+(0.40*Math.sin((1.011*m.time))))));
m.q8 = (m.oldq8+(0.005*div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.q1 = (0.62*((0.60*Math.sin((0.374*m.q8)))+(0.40*Math.sin((0.294*m.q8)))));
m.q2 = (0.62*((0.60*Math.sin((0.393*m.q8)))+(0.40*Math.sin((0.223*m.q8)))));
m.q3 = (0.62*((0.60*Math.sin((0.174*-m.q8)))+(0.40*Math.sin((0.364*m.q8)))));
m.q4 = (0.62*((0.60*Math.sin((0.234*m.q8)))+(0.40*Math.sin((0.271*-m.q8)))));
m.volume = (0.15*(((m.bass_att+m.bass)+m.mid)+m.mid_att));
m.beatrate = ifcond(equal(m.beatrate, 0), 1, ifcond(below(m.volume, 0.01), 1, m.beatrate));
m.lastbeat = ifcond(equal(m.lastbeat, 0), m.time, m.lastbeat);
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.peakbass_att = ifcond(above(m.bass_att, m.peakbass_att), m.bass_att, m.peakbass_att);
m.beat = ifcond(above(m.volume, 0.8), ifcond(below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)), ifcond(above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))), 1, 0), 0), 0);
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ifcond(equal(m.beat, 0), ifcond(above((m.time-m.lastbeat), (2*m.beatrate)), (m.peakbass_att*0.95), (m.peakbass_att*0.995)), m.bass_att);
m.lastbeat = ifcond(m.beat, m.time, m.lastbeat);
m.ob_a = bnot(m.beat);
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.q5_residual = (((equal(m.bass_thresh, 2)*0.016)*Math.sin((m.time*7)))+((1-equal(m.bass_thresh, 2))*m.q5_residual));
m.q6_residual = (((equal(m.bass_thresh, 2)*0.012)*Math.sin((m.time*9)))+((1-equal(m.bass_thresh, 2))*m.q6_residual));
m.q5 = (1-Math.abs((4*m.q5_residual)));
m.q6 = (1-Math.abs((4*m.q5_residual)));
m.wave_a = 0;
m.zoom = 1000;
m.monitor = m.q8;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.du = (((m.x*2)-1)-m.q1);
m.dv = (((m.y*2)-1)-m.q2);
m.dist = sqrt(((m.du*m.du)+(m.dv*m.dv)));
m.ang2 = Math.atan2(m.du, m.dv);
m.mult = div(m.q5,(m.dist+0.4));
m.dx = (m.mult*Math.sin((m.ang2-1.5)));
m.dy = (m.mult*Math.cos((m.ang2-1.5)));
m.du = (((m.x*2)-1)-m.q3);
m.dv = (((m.y*2)-1)-m.q4);
m.dist = sqrt(((m.du*m.du)+(m.dv*m.dv)));
m.ang2 = Math.atan2(m.du, m.dv);
m.mult = div(m.q6,(m.dist+0.4));
m.dx = (m.dx+(m.mult*Math.sin((m.ang2+1.5))));
m.dy = (m.dy+(m.mult*Math.cos((m.ang2+1.5))));
m.rot = ((-0.01*m.rad)*Math.sin(m.q8));
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
			a : 0.6,
			enabled : 1.0,
			b : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			g2 : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.4,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.4);
m.x = ((0.5+(0.08*Math.cos((m.time*1.3))))+(0.03*Math.cos((m.time*0.7))));
m.y = ((0.5+(0.08*Math.sin((m.time*1.4))))+(0.03*Math.sin((m.time*0.7))));
m.r = (0.5+(0.5*Math.sin(((m.q8*0.613)+1))));
m.g = (0.5+(0.5*Math.sin(((m.q8*0.763)+2))));
m.b = (0.5+(0.5*Math.sin(((m.q8*0.771)+5))));
m.r2 = (0.5+(0.5*Math.sin(((m.q8*0.635)+4))));
m.g2 = (0.5+(0.5*Math.sin(((m.q8*0.616)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.q8*0.538)+3))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time*0.4;\n' + 'x = 0.5 + 0.08*cos(time*1.3) + 0.03*cos(time*0.7);\n' + 'y = 0.5 + 0.08*sin(time*1.4) + 0.03*sin(time*0.7);\n' + 'r =0.5 + 0.5*sin(q8*0.613 + 1);\n' + 'g = 0.5 + 0.5*sin(q8*0.763 + 2);\n' + 'b = 0.5 + 0.5*sin(q8*0.771 + 5);\n' + 'r2 = 0.5 + 0.5*sin(q8*0.635 + 4);\n' + 'g2 = 0.5 + 0.5*sin(q8*0.616+ 1);\n' + 'b2 = 0.5 + 0.5*sin(q8*0.538 + 3);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.6,
			enabled : 1.0,
			b : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			g2 : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.4,
			x : 0.5,
			y : 0.5,
			ang : 1.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (1-(m.time*0.4));
m.x = ((0.5+(0.08*Math.cos((m.time*1.3))))+(0.03*Math.cos((m.time*0.7))));
m.y = ((0.5+(0.08*Math.sin((m.time*1.4))))+(0.03*Math.sin((m.time*0.7))));
m.r = (0.5+(0.5*Math.sin(((m.q8*0.613)+1))));
m.g = (0.5+(0.5*Math.sin(((m.q8*0.763)+2))));
m.b = (0.5+(0.5*Math.sin(((m.q8*0.771)+5))));
m.r2 = (0.5+(0.5*Math.sin(((m.q8*0.635)+4))));
m.g2 = (0.5+(0.5*Math.sin(((m.q8*0.616)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.q8*0.538)+3))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang =1- time*0.4;\n' + 'x = 0.5 + 0.08*cos(time*1.3) + 0.03*cos(time*0.7);\n' + 'y = 0.5 + 0.08*sin(time*1.4) + 0.03*sin(time*0.7);\n' + 'r =0.5 + 0.5*sin(q8*0.613 + 1);\n' + 'g = 0.5 + 0.5*sin(q8*0.763 + 2);\n' + 'b = 0.5 + 0.5*sin(q8*0.771 + 5);\n' + 'r2 = 0.5 + 0.5*sin(q8*0.635 + 4);\n' + 'g2 = 0.5 + 0.5*sin(q8*0.616+ 1);\n' + 'b2 = 0.5 + 0.5*sin(q8*0.538 + 3);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.6,
			enabled : 1.0,
			b : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			g2 : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.3,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (0.5+(m.time*0.4));
m.x = ((0.5+(0.08*Math.cos((m.time*1.3))))+(0.03*Math.cos((m.time*0.7))));
m.y = ((0.5+(0.08*Math.sin((m.time*1.4))))+(0.03*Math.sin((m.time*0.7))));
m.r = (0.5+(0.5*Math.sin(((m.q8*0.613)+1))));
m.g = (0.5+(0.5*Math.sin(((m.q8*0.763)+2))));
m.b = (0.5+(0.5*Math.sin(((m.q8*0.771)+5))));
m.r2 = (0.5+(0.5*Math.sin(((m.q8*0.635)+4))));
m.g2 = (0.5+(0.5*Math.sin(((m.q8*0.616)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.q8*0.538)+3))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = 0.5+time*0.4;\n' + 'x = 0.5 + 0.08*cos(time*1.3) + 0.03*cos(time*0.7);\n' + 'y = 0.5 + 0.08*sin(time*1.4) + 0.03*sin(time*0.7);\n' + 'r =0.5 + 0.5*sin(q8*0.613 + 1);\n' + 'g = 0.5 + 0.5*sin(q8*0.763 + 2);\n' + 'b = 0.5 + 0.5*sin(q8*0.771 + 5);\n' + 'r2 = 0.5 + 0.5*sin(q8*0.635 + 4);\n' + 'g2 = 0.5 + 0.5*sin(q8*0.616+ 1);\n' + 'b2 = 0.5 + 0.5*sin(q8*0.538 + 3);'),

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
	'init_eqs_str' : ('oldq8 =0;\n' + 'q8=0;'),
	'frame_eqs_str' : ('warp=0;\n' + 'mv_r = mv_r + 0.350*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );\n' + 'mv_g = mv_g + 0.350*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );\n' + 'mv_b = mv_b + 0.350*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );\n' + 'q8 =oldq8+ 0.005*(pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 = q8;\n' + 'q1 = 0.62*( 0.60*sin(0.374*q8) + 0.40*sin(0.294*q8) );\n' + 'q2 = 0.62*( 0.60*sin(0.393*q8) + 0.40*sin(0.223*q8) );\n' + 'q3 = 0.62*( 0.60*sin(0.174*-q8) + 0.40*sin(0.364*q8) );\n' + 'q4 = 0.62*( 0.60*sin(0.234*q8) + 0.40*sin(0.271*-q8) );\n' + 'volume = 0.15*(bass_att+bass+mid+mid_att);\n' + 'beatrate = if(equal(beatrate,0),1,if(below(volume,0.01),1,beatrate));\n' + 'lastbeat = if(equal(lastbeat,0),time,lastbeat);\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = if(above(bass_att,peakbass_att),bass_att,peakbass_att);\n' + 'beat = if(above(volume,0.8),if(below(peakbass_att - bass_att, 0.05*peakbass_att),if(above(time - lastbeat,0.1+0.5*(beatrate-0.1)),1,0),0),0);\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = if(equal(beat,0),if(above(time - lastbeat,2*beatrate),peakbass_att*0.95,peakbass_att*0.995),bass_att);\n' + 'lastbeat = if(beat,time,lastbeat);\n' + 'ob_a = bnot(beat);\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'q5_residual = equal(bass_thresh,2)*0.016*sin(time*7) + (1-equal(bass_thresh,2))*q5_residual;\n' + 'q6_residual = equal(bass_thresh,2)*0.012*sin(time*9) + (1-equal(bass_thresh,2))*q6_residual;\n' + 'q5 = 1-abs(4*q5_residual);\n' + 'q6 =  1-abs(4*q5_residual);\n' + 'wave_a =0;\n' + 'zoom = 1000;\n' + 'monitor = q8;'),
	'pixel_eqs_str' : ('du = x*2-1 - q1;\n' + 'dv = y*2-1 - q2;\n' + 'dist = sqrt(du*du+dv*dv);\n' + 'ang2 = atan2(du,dv);\n' + 'mult = q5/(dist+0.4);\n' + 'dx = mult*sin(ang2-1.5);\n' + 'dy = mult*cos(ang2-1.5);\n' + 'du = x*2-1 - q3;\n' + 'dv = y*2-1 - q4;\n' + 'dist = sqrt(du*du+dv*dv);\n' + 'ang2 = atan2(du,dv);\n' + 'mult = q6/(dist+0.4);\n' + 'dx = dx + mult*sin(ang2+1.5);\n' + 'dy = dy + mult*cos(ang2+1.5);\n' + 'rot = -0.01*rad*sin(q8);'),
};

return pmap;
});
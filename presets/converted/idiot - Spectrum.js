define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 1.248,
		wave_scale : 1.285751,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 0.9867,
		ob_size : 0.5,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.925,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.treb_thresh = 0;
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.vol_thresh = 0;
m.mid_mid_att = 0;
m.mid_thresh = 0;
m.ez = 0;
m.bass_thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.3)*0.96)+1.3)));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_mid_att, m.mid_thresh))*(((m.mid_thresh-1.3)*0.96)+1.3)));
m.vol_thresh = ((m.bass_thresh+m.treb_thresh)+m.mid_thresh);
m.q1 = m.bass_thresh;
m.q2 = m.treb_thresh;
m.q3 = m.mid_thresh;
m.q4 = m.vol_thresh;
m.wave_r = ((0.1+(0.5*Math.sin((m.time*0.54))))-(0.2*Math.sin(below(m.q1, m.q2))));
m.wave_b = ifcond(above(m.q2, m.q3), (0.5-(0.3*Math.sin((m.time*0.23)))), 0);
m.wave_g = ifcond(above(m.q2, m.q3), ((m.wave_r-(0.05*Math.sin((m.time*0.3))))+(0.5*Math.sin(above(m.q1, m.q2)))), (1-((0.5*Math.sin(m.time))*Math.sin(equal(m.wave_b, 0)))));
m.ez = ((Math.sin(m.wave_g)*Math.cos((m.wave_r-m.wave_b)))+(0.3*Math.sin(ifcond(below(m.ez, 0.7), m.ez, (m.ez+0.2)))));
m.echo_zoom = m.ez;
		m.rkeys = ['dx','rot','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = ((m.zoom+(0.01*Math.sin(((m.rad*3.14)-m.q1))))+(0.03*Math.sin(m.q3)));
m.rot = ((m.rot-(0.01*Math.sin((m.rad*3.14))))+(0.02*Math.sin(above(m.q1, m.q2))));
m.dx = (m.dx+((0.01*Math.sin((m.rad*5)))*Math.sin(((m.time*0.54)-m.q3))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'treb_thresh=above(treb_att,treb_thresh)*2+(1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*0.96+1.3);\n' + 'mid_thresh=above(mid_att,mid_thresh)*2+(1-above(mid_mid_att,mid_thresh))*((mid_thresh-1.3)*0.96+1.3);\n' + 'vol_thresh=bass_thresh+treb_thresh+mid_thresh;\n' + 'q1=bass_thresh;\n' + 'q2=treb_thresh;\n' + 'q3=mid_thresh;\n' + 'q4=vol_thresh;\n' + 'wave_r=.1+.5*sin(time*.54)-.2*sin(below(Q1,q2));\n' + 'wave_B=if(Above(q2,q3),.5-.3*Sin(time*.23),0);\n' + 'wave_g=if(above(q2,q3),wave_r-.05*Sin(time*.3)+.5*sin(above(Q1,q2)),1-.5*Sin(Time)*sin(equal(wave_b,0)));\n' + 'ez=sin(wave_g)*cos(wave_R-wave_b)+.3*Sin(if(below(ez,.7),ez,ez+.2));\n' + 'echo_zoom=ez;'),
	'pixel_eqs_str' : ('zoom=zoom+.01*Sin(Rad*3.14-q1)+.03*sin(q3);\n' + 'rot=rot-.01*sin(rad*3.14)+.02*sin(Above(Q1,q2));\n' + 'dx=dx+.01*Sin(rad*5)*sin(time*.54-q3);'),
};

return pmap;
});
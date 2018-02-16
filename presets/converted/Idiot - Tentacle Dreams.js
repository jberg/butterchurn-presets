define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 1.28,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.653093,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.999944,
		ob_r : 0.11,
		sy : 0.999904,
		ib_size : 0.055,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0001,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 0.999609,
		ob_size : 0.0499,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.000376,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.02,
		cx : 0.5,
		dy : -0.02,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.5,
		invert : 0.0,
		rot : 1.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.2,
		decay : 0.98,
		wave_a : 100.0,
		ob_g : 0.5,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.treb_thresh = 0;
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.vol_thresh = 0;
m.mid_effect = 0;
m.new_mid = 0;
m.change = 0;
m.bass_effect = 0;
m.vol = 0;
m.mid_mid_att = 0;
m.mid_thresh = 0;
m.new_vol = 0;
m.vol_att = 0;
m.treb_effect = 0;
m.new_treb = 0;
m.yq3 = 0;
m.bass_thresh = 0;
m.vol_effect = 0;
m.new_bass = 0;
m.react = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.vol_att = ((m.bass_att+m.treb_att)+m.mid_att);
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.3)*0.96)+1.3)));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_mid_att, m.mid_thresh))*(((m.mid_thresh-1.3)*0.96)+1.3)));
m.vol_thresh = ((m.bass_thresh+m.treb_thresh)+m.mid_thresh);
m.treb_effect = Math.max(Math.max(m.treb, m.treb_att), m.treb_thresh);
m.bass_effect = Math.max(Math.max(m.bass, m.bass_att), m.bass_thresh);
m.mid_effect = Math.max(Math.max(m.mid, m.mid_att), m.mid_thresh);
m.vol_effect = ((m.bass_effect+m.treb_effect)+m.mid_effect);
m.react = m.vol;
m.new_bass = ifcond(above(m.react, m.bass_effect), bitand(m.bass,m.bass_att), (m.bass_effect+m.bass_thresh));
m.new_treb = ifcond(above(m.react, m.treb_effect), bitand(m.treb,m.treb_att), (m.treb_effect+m.treb_thresh));
m.new_mid = ifcond(above(m.react, m.mid_effect), bitand(m.mid,m.mid_att), (m.mid_effect+m.mid_thresh));
m.new_vol = (((m.new_bass+m.new_treb)+m.new_mid)+0.04);
m.change = bnot(1);
m.q1 = m.new_bass;
m.q2 = m.new_treb;
m.q3 = m.new_mid;
m.q4 = m.new_vol;
m.q5 = m.bass_thresh;
m.q6 = m.treb_thresh;
m.q7 = m.mid_thresh;
m.q8 = m.vol_thresh;
m.wave_r = (0.4+(0.3*Math.sin((m.time+m.q1))));
m.wave_b = (0.3+(0.6*Math.sin((m.time+m.q2))));
m.wave_g = (0.5+(0.5*Math.sin((m.time-m.q1))));
m.wave_mystery = (m.wave_mystery+(0.2*Math.sin(((m.time*0.53)-m.q3))));
		m.rkeys = ['dy','dx','zoom','cy','cx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (((((0.3*Math.sin(((m.rad-(m.ang*m.x))+m.yq3)))*m.rad)*Math.sin(ifcond(above(m.q1, m.q2), m.q5, -m.q5)))*m.rad)-(0.2*Math.sin(m.q3)));
m.cx = ifcond(above(m.q2, m.q3), (m.cx+(0.5*Math.sin((((m.x-((0.3*m.rad)*Math.cos((m.q1-0.3))))-0.2)-(m.rad*Math.sin(m.q6)))))), 0.5);
m.cy = ifcond(above(m.q2, m.q3), (m.cy+(0.5*Math.sin((((m.y-((0.3*m.rad)*Math.cos((m.q2-0.3))))-0.2)-(m.rad*Math.sin(m.q5)))))), 0.5);
m.zoom = ((m.zoom-(((0.10*m.rad)*Math.sin(m.q1))*m.rad))-(0.02*Math.sin(((m.q6-m.x)+(m.y*Math.sin(m.q2))))));
m.dx = (m.dx-(((m.dx*Math.sin((m.q3-(m.rad*Math.sin(m.q2)))))*Math.sin(m.q5))*m.x));
m.dy = (m.dy-(((m.dy*Math.sin((m.q2+(m.rad*Math.sin(m.q1)))))*Math.sin(m.q6))*m.y));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('vol_att=bass_att+treb_Att+mid_att;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'treb_thresh=above(treb_att,treb_thresh)*2+(1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*0.96+1.3);\n' + 'mid_thresh=above(mid_att,mid_thresh)*2+(1-above(mid_mid_att,mid_thresh))*((mid_thresh-1.3)*0.96+1.3);\n' + 'vol_thresh=bass_thresh+treb_thresh+mid_thresh;\n' + 'treb_effect=max(max(treb,treb_Att),treb_thresh);\n' + 'bass_effect=max(max(Bass,bass_Att),bass_thresh);\n' + 'mid_effect=max(max(mid,mid_att),mid_thresh);\n' + 'vol_effect=bass_effect+treb_effect+mid_effect;\n' + 'react=vol;\n' + 'new_bass=if(above(react,bass_effect),bass&bass_att,bass_effect+bass_thresh);\n' + 'new_treb=if(above(react,treb_effect),treb&treb_att,treb_Effect+treb_thresh);\n' + 'new_mid=if(above(react,mid_effect),mid&mid_Att,mid_effect+mid_thresh);\n' + 'new_vol=new_bass+new_treb+new_mid+.04;\n' + 'change=bnot(1);\n' + 'q1=new_bass;\n' + 'q2=new_treb;\n' + 'q3=new_mid;\n' + 'q4=new_vol;\n' + 'q5=bass_thresh;\n' + 'q6=treb_thresh;\n' + 'q7=mid_thresh;\n' + 'q8=vol_thresh;\n' + 'wave_r=.4+.3*Sin(time+Q1);\n' + 'wave_b=.3+.6*sin(time+q2);\n' + 'wave_g=.5+.5*sin(time-q1);\n' + 'wave_mystery=wave_mystery+.2*sin(time*.53-q3);'),
	'pixel_eqs_str' : ('rot=.3*Sin(rad-ang*x+yQ3)*rad*sin(if(Above(Q1,q2),q5,-q5))*rad-.2*sin(Q3);\n' + 'cx=if(Above(Q2,q3),cx+.5*Sin(x-.3*Rad*cos(q1-.3)-.2-rad*sin(q6)),.5);\n' + 'cy=if(Above(Q2,q3),cy+.5*sin(y-.3*rad*cos(q2-.3)-.2-rad*sin(q5)),.5);\n' + 'zoom=zoom-.10*rad*sin(Q1)*Rad-.02*sin(q6-x+y*sin(q2));\n' + 'dx=dx-dx*Sin(q3-rad*sin(q2))*sin(q5)*x;\n' + 'dy=dy-dy*sin(q2+rad*sin(Q1))*sin(q6)*y;'),
};

return pmap;
});
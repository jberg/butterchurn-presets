define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 1.28,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.01,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.999944,
		ob_r : 0.11,
		sy : 0.999904,
		ib_size : 0.055,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.000157,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 0.999609,
		ob_size : 0.0499,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.04102,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.16,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : -0.2,
		decay : 1.0,
		wave_a : 4.099998,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.treb_thresh = 0;
m.q1 = 0;
m.wave_myster = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.normal = 0;
m.q8 = 0;
m.vol_thresh = 0;
m.mid_effect = 0;
m.new_mid = 0;
m.no_effect = 0;
m.change = 0;
m.bass_effect = 0;
m.mid_mid_att = 0;
m.mid_thresh = 0;
m.new_vol = 0;
m.vol_att = 0;
m.treb_effect = 0;
m.more = 0;
m.less = 0;
m.new_treb = 0;
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
m.treb_effect = Math.max(Math.max(m.treb, m.treb_att), m.react);
m.bass_effect = Math.max(Math.max(m.bass, m.bass_att), m.react);
m.mid_effect = Math.max(Math.max(m.mid, m.mid_att), m.react);
m.vol_effect = ((m.bass_effect+m.treb_effect)+m.mid_effect);
m.normal = 5;
m.more = m.bass_effect;
m.less = 7;
m.react = m.less;
m.new_bass = ifcond(above(m.bass, m.bass_effect), bitand(m.bass,m.bass_att), (m.bass_effect+m.bass_thresh));
m.new_treb = ifcond(above(m.treb, m.treb_effect), bitand(m.treb,m.treb_att), (m.treb_effect+m.treb_thresh));
m.new_mid = ifcond(above(m.mid, m.mid_effect), bitand(m.mid,m.mid_att), (m.mid_effect+m.mid_thresh));
m.new_vol = (((m.new_bass+m.new_treb)+m.new_mid)+0.04);
m.change = bnot(1);
m.q1 = m.new_bass;
m.q2 = m.new_treb;
m.q3 = m.new_mid;
m.q4 = m.new_vol;
m.q5 = ifcond(above(m.q2, m.q3), above(m.q1, m.q3), -above(m.q1, m.q3));
m.q6 = ifcond(above(m.q1, m.q3), above(m.q2, m.q4), -above(m.q2, m.q3));
m.q7 = ifcond(above(m.q5, m.q6), m.q5, -m.q6);
m.q8 = ifcond(above(m.q6, m.q7), m.q6, -m.q7);
m.wave_r = (0.5*Math.sin(above(m.q1, m.q2)));
m.wave_b = (1*Math.sin(above(m.q3, m.q2)));
m.wave_g = (m.wave_g*Math.sin(m.q4));
m.wave_myster = (m.wave_myster-(0.2*Math.sin(above(m.q3, m.q5))));
		m.rkeys = ['no_effect','zoom','rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = ifcond(above(m.no_effect, 5), (((((m.rot*Math.sin(((-m.ang+m.ang)-(0.4*m.q1))))-(((m.rot*Math.sin((m.ang+(-m.ang*m.q3))))*m.rad)*Math.sin((m.q1-m.rad))))-((m.x*0.05)*Math.sin(m.q4)))-((m.y*0.05)*Math.sin(((m.q6-m.x)+(m.y*m.rad)))))-(m.rot*Math.sin(equal(m.q1, m.q2)))), (0.1*m.rad));
m.zoom = ifcond(above(m.no_effect, 5), (((m.zoom+((m.rad*0.03)*Math.sin((m.q2+m.q5))))-((m.x*0.05)*Math.sin((m.q4+m.q6))))+(((m.y*0.10)*0.25)*Math.sin((m.q5-m.q3)))), (1+(0.10*Math.sin(m.rad))));
m.no_effect = (m.q1-(m.q3*Math.sin(above(m.q1, m.q2))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('vol_att=bass_att+treb_Att+mid_att;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'treb_thresh=above(treb_att,treb_thresh)*2+(1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*0.96+1.3);\n' + 'mid_thresh=above(mid_att,mid_thresh)*2+(1-above(mid_mid_att,mid_thresh))*((mid_thresh-1.3)*0.96+1.3);\n' + 'vol_thresh=bass_thresh+treb_thresh+mid_thresh;\n' + 'treb_effect=max(max(treb,treb_Att),react);\n' + 'bass_effect=max(max(Bass,bass_Att),react);\n' + 'mid_effect=max(max(mid,mid_att),react);\n' + 'vol_effect=bass_effect+treb_effect+mid_effect;\n' + 'normal=5;\n' + 'more=bass_effect;\n' + 'less=7;\n' + 'react=less;\n' + 'new_bass=if(above(Bass,bass_effect),bass&bass_att,bass_effect+bass_thresh);\n' + 'new_treb=if(above(treb,treb_effect),treb&treb_att,treb_Effect+treb_thresh);\n' + 'new_mid=if(above(mid,mid_effect),mid&mid_Att,mid_effect+mid_thresh);\n' + 'new_vol=new_bass+new_treb+new_mid+.04;\n' + 'change=bnot(1);\n' + 'q1=new_bass;\n' + 'q2=new_treb;\n' + 'q3=new_mid;\n' + 'q4=new_vol;\n' + 'q5=if(above(q2,q3),above(q1,q3),-above(q1,q3));\n' + 'q6=if(above(q1,q3),above(q2,q4),-above(q2,q3));\n' + 'q7=if(above(q5,q6),q5,-q6);\n' + 'q8=if(above(q6,q7),q6,-q7);\n' + 'wave_R=.5*sin(above(q1,q2));\n' + 'wave_b=1*sin(above(q3,q2));\n' + 'wave_G=wave_g*Sin(q4);\n' + 'wave_myster=wavE_myster-.2*sin(above(Q3,q5));'),
	'pixel_eqs_str' : ('rot=if(above(no_effect,5),rot*Sin(-ang+ang-.4*q1)-rot*sin(ang+-ang*q3)*rad*Sin(q1-rad)-x*.05*sin(q4)-y*.05*sin(q6-x+y*rad)-rot*sin(equal(q1,q2)),.1*rad);\n' + 'zoom=if(above(no_effect,5),zoom+raD*.03*sin(q2+q5)-x*.05*sin(q4+q6)+y*.10*.25*sin(q5-q3),1+.10*sin(rad));\n' + 'no_effect=q1-q3*sin(above(q1,q2));'),
};

return pmap;
});
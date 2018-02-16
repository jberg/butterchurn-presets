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
		wave_scale : 0.88027,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.999944,
		ob_r : 0.11,
		sy : 0.999904,
		ib_size : 0.055,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
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
		wave_y : 0.9,
		zoom : 0.99047,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.99,
		wave_a : 20.958935,
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
m.bass_thresh = 0;
m.vol_effect = 0;
m.d_x = 0;
m.new_bass = 0;
m.d_y = 0;
m.react = 0;
m.swirl = 0;

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
m.wave_r = (m.ob_r+(0.3*Math.sin((m.q3-m.time))));
m.wave_b = (m.ob_b-(0.3*Math.sin((m.q2-m.time))));
m.wave_g = (m.ob_g+(0.2*Math.sin((m.q1-m.time))));
		m.rkeys = ['rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.d_x = bitand((m.x-(0.2*(m.rad-m.x))),(m.x+(0.2*Math.sin(((m.time*0.64)*Math.sin(bitand(m.q2,m.time)))))));
m.d_y = bitand((m.y-(0.2*(m.rad-m.y))),(m.y+(0.2*Math.sin(((m.time*0.54)*Math.sin(bitand(m.q1,m.time)))))));
m.dx = m.d_x;
m.dy = m.d_y;
m.swirl = ((((((m.rot*Math.sin((0.4*m.q1)))-(((m.rot*Math.sin((m.rad*m.q3)))*m.rad)*Math.sin(((m.q1-(m.x*m.y))+m.rad))))-((m.x*0.05)*Math.sin(m.q4)))-((m.y*0.05)*Math.sin(m.q6)))-(m.rot*Math.sin(above((m.q2-(m.rad*2)), (m.q3+(m.rad*2))))))+((m.rot*0.25)*Math.sin(above((m.q1+m.rad), (m.q2-((m.q5*m.rad)*2))))));
m.rot = ((m.swirl*m.rad)*2);
m.zoom = (m.swirl+1);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('vol_att=bass_att+treb_Att+mid_att;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'treb_thresh=above(treb_att,treb_thresh)*2+(1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*0.96+1.3);\n' + 'mid_thresh=above(mid_att,mid_thresh)*2+(1-above(mid_mid_att,mid_thresh))*((mid_thresh-1.3)*0.96+1.3);\n' + 'vol_thresh=bass_thresh+treb_thresh+mid_thresh;\n' + 'treb_effect=max(max(treb,treb_Att),treb_thresh);\n' + 'bass_effect=max(max(Bass,bass_Att),bass_thresh);\n' + 'mid_effect=max(max(mid,mid_att),mid_thresh);\n' + 'vol_effect=bass_effect+treb_effect+mid_effect;\n' + 'react=vol;\n' + 'new_bass=if(above(react,bass_effect),bass&bass_att,bass_effect+bass_thresh);\n' + 'new_treb=if(above(react,treb_effect),treb&treb_att,treb_Effect+treb_thresh);\n' + 'new_mid=if(above(react,mid_effect),mid&mid_Att,mid_effect+mid_thresh);\n' + 'new_vol=new_bass+new_treb+new_mid+.04;\n' + 'change=bnot(1);\n' + 'q1=new_bass;\n' + 'q2=new_treb;\n' + 'q3=new_mid;\n' + 'q4=new_vol;\n' + 'q5=basS_thresh;\n' + 'q6=treb_thresh;\n' + 'q7=mid_thresh;\n' + 'q8=vol_thresh;\n' + 'wave_r=ob_r+.3*sin(q3-time);\n' + 'wave_b=ob_b-.3*sin(q2-time);\n' + 'wave_g=ob_g+.2*sin(q1-time);'),
	'pixel_eqs_str' : ('d_X=x-.2*(rad-x)&(x+.2*sin(time*.64*sin(Q2&time)));\n' + 'd_y=y-.2*(rad-y)&(y+.2*sin(time*.54*sin(q1&time)));\n' + 'dx=d_X;\n' + 'dy=d_y;\n' + 'swirl=rot*Sin(.4*q1)-rot*sin(rad*q3)*rad*Sin(q1-x*y+rad)-x*.05*sin(q4)-y*.05*sin(q6)-rot*sin(above(q2-(rad*2),q3+(rad*2)))+rot*.25*sin(above(q1+rad,q2-(q5*rad*2)));\n' + 'rot=swirl*rad*2;\n' + 'zoom=swirl+1;'),
};

return pmap;
});
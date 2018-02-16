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
		wave_scale : 0.01,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 1.0,
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
		wave_y : 1.0,
		zoom : 0.961206,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.53,
		dy : 0.0,
		ob_a : 0.1,
		darken_center : 0.0,
		cy : 0.47,
		ob_b : 1.0,
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 1.0,
		decay : 0.95,
		wave_a : 100.0,
		ob_g : 1.0,
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
m.a = 0;
m.new_treb_thresh = 0;
m.q2 = 0;
m.b = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.g = 0;
m.q8 = 0;
m.vol_thresh = 0;
m.mid_effect = 0;
m.new_mid = 0;
m.box = 0;
m.be2 = 0;
m.change = 0;
m.bass_effect = 0;
m.r = 0;
m.new_mid_thresh = 0;
m.mid_mid_att = 0;
m.mid_thresh = 0;
m.new_vol = 0;
m.vol_att = 0;
m.treb_effect = 0;
m.new_treb = 0;
m.bass_thresh = 0;
m.new_bass_thresh = 0;
m.vol_effect = 0;
m.new_bass = 0;
m.myzoomexp = 0;
m.react = 0;
m.myzoom = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.vol_att = ((m.bass_att+m.treb_att)+m.mid_att);
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.3)*0.96)+1.3)));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_mid_att, m.mid_thresh))*(((m.mid_thresh-1.3)*0.96)+1.3)));
m.vol_thresh = ((m.bass_thresh+m.treb_thresh)+m.mid_thresh);
m.new_bass_thresh = ((m.bass_thresh+m.bass_effect)-(0.2*Math.sin(((m.bass_thresh-m.new_bass_thresh)+1))));
m.new_treb_thresh = ((m.treb_thresh+m.treb_effect)-(0.2*Math.sin(((m.treb_thresh-m.new_treb_thresh)+1))));
m.new_mid_thresh = ((m.mid_thresh+m.mid_effect)-(0.2*Math.sin(((m.mid_thresh-m.new_mid_thresh)+1))));
m.treb_effect = Math.max(Math.max(m.treb, m.treb_att), m.treb_thresh);
m.bass_effect = Math.max(Math.max(m.bass, m.bass_att), m.bass_thresh);
m.mid_effect = Math.max(Math.max(m.mid, m.mid_att), m.mid_thresh);
m.vol_effect = ((m.bass_effect+m.treb_effect)+m.mid_effect);
m.react = ifcond(equal(m.new_vol, m.change), 1, 0);
m.new_bass = ifcond(above(m.react, m.bass_effect), m.bass_thresh, m.new_bass_thresh);
m.new_treb = ifcond(above(m.react, m.treb_effect), m.treb_thresh, m.new_treb_thresh);
m.new_mid = ifcond(above(m.react, m.mid_effect), m.mid_thresh, m.new_mid_thresh);
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
m.r = (0.2*Math.sin(m.time));
m.b = (0+(0.3*Math.sin((m.q1-m.time))));
m.g = (0+(0.6*Math.sin(((m.time*0.64)-0.2))));
m.wave_b = m.g;
m.wave_r = m.r;
m.wave_g = m.b;
m.ob_r = (m.r+(0.3*Math.sin((m.time*0.31))));
m.ob_b = ((m.b+0.3)-(0.1*Math.sin((m.time*0.12))));
m.ob_g = ((m.g-0.3)-(0.5*Math.sin((m.time+0.1))));
		m.rkeys = ['box','cx','cy','rot','myzoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = ifcond(above(m.zoom, m.box), (ifcond(equal(m.myzoom, 1), (m.rot+(0.2*Math.sin((m.q1-((m.q2*m.rad)*0.25))))), 0)*ifcond(above(m.rad, m.x), (m.rad-(m.x*0.25)), pow(m.rad, 1000))), (0-((((0.02*m.rad)*m.x)*-0.2)*Math.sin(m.q1))));
m.be2 = bitand(m.rad,((m.rad-0.4)-(0.5*Math.sin(m.q6))));
m.box = ifcond(above(m.q1, m.q3), bitand(m.rad,(((m.rad+0.2)-m.x)-((m.y*0.25)*Math.sin(m.q3)))), ((m.be2+(0.01*Math.sin(m.q3)))-(1*Math.sin(m.q5))));
m.myzoomexp = Math.cos(Math.sin(ifcond(above(m.q1, m.q2), ((pow(m.box, 2)*m.rad)*5), m.box)));
m.myzoom = (ifcond(above(m.q1, m.q2), ifcond(above(m.q2, m.q3), (((1-m.y)+(0.3*Math.sin(m.q1)))+0.3), (1.1-0.2)), 1)+0.1);
m.a = ifcond(above(m.q3, m.q2), (pow((m.myzoom-m.x), pow(m.myzoomexp, (((((m.rad*2)-0.22)-m.box)-m.x)+(0.2*Math.sin((m.q1-m.q3))))))+(0.2*0.25)), 1);
m.dx = (((((m.x-0.5)*m.a)+0.5)-m.x)+m.box);
m.dy = (((((m.y-0.5)*m.a)+0.5)-m.y)+m.box);
m.cx = (m.cx+(0.2*Math.sin(above(m.rad, m.x))));
m.cy = (m.cy+(0.2*Math.sin(above(m.rad, m.y))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('vol_att=bass_att+treb_Att+mid_att;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'treb_thresh=above(treb_att,treb_thresh)*2+(1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*0.96+1.3);\n' + 'mid_thresh=above(mid_att,mid_thresh)*2+(1-above(mid_mid_att,mid_thresh))*((mid_thresh-1.3)*0.96+1.3);\n' + 'vol_thresh=bass_thresh+treb_thresh+mid_thresh;\n' + 'new_bass_thresh=bass_thresh+bass_effect-.2*sin(bass_thresh-new_bass_thresh+1);\n' + 'new_treb_thresh=treb_thresh+treb_Effect-.2*sin(treb_thresh-new_treb_thresh+1);\n' + 'new_mid_thresh=mid_thresh+mid_effect-.2*sin(mid_thresh-new_mid_thresh+1);\n' + 'treb_effect=max(max(treb,treb_Att),treb_thresh);\n' + 'bass_effect=max(max(Bass,bass_Att),bass_thresh);\n' + 'mid_effect=max(max(mid,mid_att),mid_thresh);\n' + 'vol_effect=bass_effect+treb_effect+mid_effect;\n' + 'react=if(equal(new_vol,change),1,0);\n' + 'new_bass=if(above(react,bass_effect),bass_thresh,new_bass_thresh);\n' + 'new_treb=if(above(react,treb_effect),treb_thresh,new_treb_thresh);\n' + 'new_mid=if(above(react,mid_effect),mid_thresh,new_mid_thresh);\n' + 'new_vol=new_bass+new_treb+new_mid+.04;\n' + 'change=bnot(1);\n' + 'q1=new_bass;\n' + 'q2=new_treb;\n' + 'q3=new_mid;\n' + 'q4=new_vol;\n' + 'q5=if(above(q2,q3),above(q1,q3),-above(q1,q3));\n' + 'q6=if(above(q1,q3),above(q2,q4),-above(q2,q3));\n' + 'q7=if(above(q5,q6),q5,-q6);\n' + 'q8=if(above(q6,q7),q6,-q7);\n' + 'r=.2*sin(time);\n' + 'b=0+.3*sin(q1-time);\n' + 'g=0+.6*sin(time*.64-.2);\n' + 'wave_b=g;\n' + 'wave_r=r;\n' + 'wave_g=b;\n' + 'ob_r=r+.3*sin(time*.31);\n' + 'ob_b=b+.3-.1*sin(time*.12);\n' + 'ob_g=g-.3-.5*sin(time+.1);'),
	'pixel_eqs_str' : ('rot=if(above(zoom,box),if(equal(myzoom,1),rot+.2*sin(q1-q2*rad*.25),0)*if(above(rad,x),rad-x*.25,pow(rad,1000)),0-.02*rad*x*-.2*sin(q1));\n' + 'be2=rad&rad-.4-.5*sin(q6);\n' + 'box=if(above(q1,q3),rad&rad+.2-x-y*.25*sin(Q3),be2+.01*sin(q3)-1*sin(q5));\n' + 'myzoomexp=cos(sin(if(Above(q1,q2),pow(box,2)*rad*5,box)));\n' + 'myzoom=if(Above(q1,q2),if(above(Q2,q3),1-y+.3*sin(q1)+.3,1.1-.2),1)+.1;\n' + 'a=if(above(q3,q2),pow(myzoom-x,pow(myzoomexp,rad*2-.22-box-x+.2*sin(q1-q3)))+.2*.25,1);\n' + 'dx=(x-.5)*a+.5-x+box;\n' + 'dy=(y-.5)*a+.5-y+box;\n' + 'cx=cx+.2*sin(Above(rad,x));\n' + 'cy=cy+.2*sin(above(rad,y));'),
};

return pmap;
});
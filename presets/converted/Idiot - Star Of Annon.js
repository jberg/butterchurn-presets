define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.6,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.18647,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.4999,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.3,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 1.006596,
		ob_size : 0.005,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.2,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.28,
		wave_mystery : -0.2,
		decay : 0.999,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 0.0,
		rating : 5.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.bass_c = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.new_mid = 0;
m.mid_c = 0;
m.rote = 0;
m.zoome = 0;
m.vol = 0;
m.vol_att = 0;
m.vol_c = 0;
m.new_treb = 0;
m.rad_cycle = 0;
m.new_bass = 0;
m.treb_c = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.vol_att = (((m.treb_att*0.25)+(m.mid_att*0.25))+div(((m.bass_att*0.25)+(0.5*Math.sin(m.vol))),m.vol));
m.vol = ((m.bass+m.treb)+m.mid);
m.new_bass = ((m.bass*0.25)+(0.5*Math.sin((m.bass_att*0.25))));
m.new_treb = ((m.treb*0.25)+(0.5*Math.sin((m.treb_att*0.25))));
m.new_mid = ((m.mid*0.25)+(0.4*Math.sin((m.mid_att*0.25))));
m.bass_c = (m.q1-(1*Math.sin(bitand(m.bass_att,(m.time*0.54)))));
m.treb_c = (m.q2-(1*Math.sin(bitand(m.treb_att,(m.time*0.44)))));
m.mid_c = (m.q3-(1*Math.sin(bitand(m.mid_att,(m.time*0.24)))));
m.vol_c = (m.q4-(1*Math.sin(bitand(m.vol_att,(m.time*0.64)))));
m.q1 = Math.sin(bitand((m.bass-m.new_bass),(m.time*0.63)));
m.q2 = Math.sin(bitand((m.treb-m.new_treb),(m.time*0.43)));
m.q3 = Math.sin(bitand((m.mid-m.new_mid),(m.time*0.23)));
m.q4 = Math.sin(bitand(m.vol,(m.time*0.65)));
m.q5 = m.bass_c;
m.q6 = m.treb_c;
m.q7 = m.mid_c;
m.q8 = m.vol_c;
m.wave_mystery = (m.bass_att-1);
m.wave_r = (m.wave_r+(0.2*Math.sin((m.time*0.43))));
m.wave_b = (m.wave_b-(0.2*Math.sin((m.time*0.54))));
m.wave_g = (m.wave_g-(0.4*Math.sin((m.time*0.34))));
m.ob_a = 0;
		m.rkeys = ['rot','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rad_cycle = (((((m.rad*m.rad)*m.x)*60)*m.rad)*Math.sin(m.q6));
m.rote = ((m.rot+(0.1*Math.sin((m.rad_cycle*Math.sin((m.rad*3.14))))))+((0.01*Math.sin(m.q1))*Math.tan(m.rad)));
m.zoome = (m.zoom+(0.1*Math.sin(((((m.rad*3.14)*Math.sin((m.ang*3.14)))*Math.sin(m.q2))-m.rote))));
m.zoom = (m.zoome+((0.05*Math.sin(((m.rad*3.14)*m.q2)))*Math.sin(m.q4)));
m.rot = (((m.rote*m.rad)+div(((div(m.ang,2)*Math.sin(m.q3))*Math.sin((((m.ang*3.14)*Math.sin(m.q3))*Math.sin(m.q4)))),2))+((0.1*Math.sin((m.ang*3.14)))*Math.sin(m.q1)));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('vol_att=(treb_att*.25)+(mid_att*.25)+(bass_att*.25+.5*sin(vol))/vol;\n' + 'vol=bass+treb+mid;\n' + 'new_bass=(bass*.25+.5*sin(Bass_att*.25));\n' + 'new_treb=(treb*.25+.5*sin(treb_att*.25));\n' + 'new_mid=(mid*.25+.4*sin(mid_att*.25));\n' + 'bass_c=q1-1*sin(bass_Att&time*.54);\n' + 'treb_c=q2-1*sin(treb_att&time*.44);\n' + 'mid_c=q3-1*sin(mid_att&time*.24);\n' + 'vol_c=q4-1*sin(vol_att&time*.64);\n' + 'q1=sin(Bass-new_bass&timE*.63);\n' + 'q2=sin(treb-new_treb&time*.43);\n' + 'q3=sin(mid-new_mid&time*.23);\n' + 'q4=sin(vol&time*.65);\n' + 'q5=bass_c;\n' + 'q6=treb_c;\n' + 'q7=mid_c;\n' + 'q8=vol_c;\n' + 'wave_mystery=bass_Att-1;\n' + 'wave_R=wave_r+.2*sin(time*.43);\n' + 'wave_B=wave_B-.2*sin(time*.54);\n' + 'wave_g=wave_g-.4*sin(time*.34);\n' + 'ob_a=0;'),
	'pixel_eqs_str' : ('rad_cycle=rad*rad*x*60*rad*sin(q6);\n' + 'rote=rot+.1*sin(rad_cycle*sin(rad*3.14))+.01*sin(q1)*tan(rad);\n' + 'zoome=zoom+.1*sin(rad*3.14*sin(ang*3.14)*sin(q2)-rote);\n' + 'zoom=zoome+.05*sin(rad*3.14*q2)*sin(q4);\n' + 'rot=rote*rad+ang/2*sin(Q3)*Sin(Ang*3.14*sin(q3)*sin(Q4))/2+.1*sin(ang*3.14)*sin(Q1);'),
};

return pmap;
});
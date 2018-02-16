define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 3.192474,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.009091,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		echo_zoom : 1.006596,
		ob_size : 0.5,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		invert : 0.0,
		bmotionvectorson : 0.0,
		rot : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.977,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
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
m.mid_factor = 0;
m.rpi = 0;
m.bass_factor = 0;
m.mid_thresh = 0;
m.treb_factor = 0;
m.pi = 0;
m.api = 0;
m.bass_thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.35)*0.96)+1.3)));
m.bass_factor = ((equal(m.bass_thresh, 2)*Math.sin(((m.time*m.bass_thresh)*0.4)))+((1-equal(m.bass_thresh, 2))*m.bass_factor));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_att, m.mid_thresh))*(((m.mid_thresh-1.35)*0.96)+1.3)));
m.mid_factor = ((equal(m.mid_thresh, 2)*Math.sin(((m.time*m.mid_thresh)*0.4)))+((1-equal(m.mid_thresh, 2))*m.mid_factor));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.35)*0.96)+1.3)));
m.treb_factor = ((equal(m.treb_thresh, 2)*Math.sin(((m.time*m.treb_thresh)*0.4)))+((1-equal(m.treb_thresh, 2))*m.treb_factor));
m.wave_r = (0.5+(0.5*m.bass_factor));
m.wave_b = (0.5+(0.5*m.mid_factor));
m.wave_g = (0.5+(0.5*m.treb_factor));
m.wave_mystery = div(Math.sin((m.time*0.7)),10);
m.q1 = m.bass_factor;
m.q2 = m.mid_factor;
m.q3 = m.treb_factor;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.pi = ((div(22,7)+0.2)-(0.2*m.q1));
m.rpi = (m.pi*m.rad);
m.api = ((1-m.rad)*m.pi);
m.zoom = (ifcond(above(m.rad, Math.abs(m.q2)), (1.07+((Math.sin(m.rpi)*0.04)*m.q2)), (0.97+(((div(Math.sin(m.rpi),10)-div(Math.sin(m.api),10))*0.04)*m.q2)))+(Math.cos(((m.rpi*3)*m.q3))*0.07));
m.rot = (ifcond(above(m.rad, Math.abs(m.q2)), ((Math.cos((((m.rad*2)*m.rpi)+Math.sin((m.pi*pow(m.rad, 5)))))*0.1)*m.q1), (((div(Math.cos(m.api),25)+Math.sin(m.rpi))*0.1)*m.q1))+(Math.cos(((m.api*3)*m.q3))*0.1));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.35)*0.96+1.3);\n' + 'bass_factor = equal(bass_thresh,2)*sin(time*bass_thresh*.4) + (1-equal(bass_thresh,2))*bass_factor;\n' + 'mid_thresh = above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.35)*0.96+1.3);\n' + 'mid_factor = equal(mid_thresh,2)*sin(time*mid_thresh*.4) + (1-equal(mid_thresh,2))*mid_factor;\n' + 'treb_thresh = above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.35)*0.96+1.3);\n' + 'treb_factor = equal(treb_thresh,2)*sin(time*treb_thresh*.4) + (1-equal(treb_thresh,2))*treb_factor;\n' + 'wave_r = 0.5+0.5*bass_factor;\n' + 'wave_b = 0.5+0.5*mid_factor;\n' + 'wave_g = 0.5+0.5*treb_factor;\n' + 'wave_mystery = sin(time*.7)/10;\n' + 'q1=bass_factor;\n' + 'q2=mid_factor;\n' + 'q3=treb_factor;'),
	'pixel_eqs_str' : ('pi=22/7+.2-.2*q1;\n' + 'rpi=pi*rad;\n' + 'api=(1-rad)*pi;\n' + 'zoom = if(above(rad,abs(q2)),1.07+sin(rpi)*.04*q2, 0.97+(sin(rpi)/10-sin(api)/10)*.04*q2)+cos(rpi*3*q3)*.07;\n' + 'rot = if(above(rad,abs(q2)),cos((rad*2*rpi)+sin(pi*pow(rad,5)))*.1*q1,(cos(api)/25+sin(rpi))*.1*q1)+cos(api*3*q3)*.1;'),
};

return pmap;
});
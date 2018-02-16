define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 1.599183,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 1.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 0.01,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.127257,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.dx_r = 0;
m.dy_r = 0;
m.thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = ((m.wave_r+(0.25*Math.sin((1.4*m.time))))+(0.25*Math.sin((2.25*m.time))));
m.wave_g = ((m.wave_g+(0.25*Math.sin((1.7*m.time))))+(0.25*Math.sin((2.11*m.time))));
m.wave_b = ((m.wave_b+(0.25*Math.sin((1.84*m.time))))+(0.25*Math.sin((2.3*m.time))));
m.warp = 0;
m.ob_r = (m.ob_r+(0.3*Math.sin((1.2*m.time))));
m.ob_g = (m.ob_g+(0.3*Math.cos((2*m.time))));
m.ob_b = (m.ob_b+(0.25*Math.sin((1.5*m.time))));
m.ib_r = m.wave_r;
m.ib_b = m.wave_b;
m.ib_g = m.wave_g;
		m.rkeys = ['cx','cy','zoomexp','zoom','rot','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.rot = (m.rot+((0.05*(2-m.rad))*(((0.5*Math.cos((m.rad-(0.22*Math.abs(((m.ang*12)+div(m.bass,m.time)))))))*0.4)-((m.treb*1.3)*Math.cos(m.bass_att)))));
m.zoom = (m.zoom-(0.02*Math.abs((Math.sin((m.bass-(div(m.time,22)*m.rad)))-Math.cos(((0.3*m.bass)-m.mid_att))))));
m.zoom = (m.zoom-(0.2*Math.abs((0.5*Math.sin((((0.2*m.bass)*m.rot)-(3*((0.5-Math.sin((0.5*m.time)))-(0.25-m.rad)))))))));
m.zoomexp = ((m.zoomexp+0.25)+Math.abs((0.5*Math.sin((m.time*m.bass_att)))));
m.zoom = ifcond(below(m.bass, 0.05), 0, m.zoom);
m.rot = ifcond(below(m.bass, 0.05), 0, Math.sin(0.2));
m.cy = (m.cy+(((0.25*Math.sin(m.time))*22)*m.dy_r));
m.cx = (m.cx+(((0.25*Math.cos((2.5*m.time)))*22)*m.dx_r));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.25*sin(1.4*time) + 0.25*sin(2.25*time);\n' + 'wave_g = wave_g + 0.25*sin(1.7*time) + 0.25*sin(2.11*time);\n' + 'wave_b = wave_b + 0.25*sin(1.84*time) + 0.25*sin(2.3*time);\n' + 'warp = 0;\n' + 'ob_r = ob_r + 0.3*sin(1.2*time);\n' + 'ob_g = ob_g + 0.3*cos(2*time);\n' + 'ob_b = ob_b + 0.25*sin(1.5*time);\n' + 'ib_r = wave_r;\n' + 'ib_b = wave_b;\n' + 'ib_g = wave_g;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'rot = rot + 0.05*(2-rad)*(0.5*cos(rad-0.22*abs(ang*12+bass/time))*0.4-treb*1.3*cos(bass_att));\n' + 'zoom = zoom - 0.02*abs(sin(bass-time/22*rad)-cos(0.3*bass-mid_att));\n' + 'zoom = zoom - 0.2*abs(0.5*sin(0.2*bass*rot-3*(0.5-sin(0.5*time)-(0.25-rad))));\n' + 'zoomexp = zoomexp + 0.25 + abs(0.5*sin(time*bass_att));\n' + 'zoom = if(below(bass,0.05),0,zoom);\n' + 'rot = if(below(bass,0.05),0,sin(0.2));\n' + 'cy = cy + 0.25*sin(time)*22*dy_r;\n' + 'cx = cx + 0.25*cos(2.5*time)*22*dx_r;'),
};

return pmap;
});
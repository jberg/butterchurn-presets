define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 1.0,
		mv_x : 0.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 100.0,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.999997,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.334695,
		ob_size : 0.005,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 0.2,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.99,
		wave_a : 0.255374,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.treb_tick = 0;
m.q3 = 0;
m.bass_shift = 0;
m.dx_r = 0;
m.dy_r = 0;
m.mid_shift = 0;
m.r = 0;
m.mid_tick = 0;
m.thresh = 0;
m.bass_tick = 0;
m.treb_shift = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.bass_tick = ((above(m.bass_att, m.bass_tick)*2)+((1-above(m.bass_att, m.bass_tick))*(((m.bass_tick-1.3)*0.96)+1.3)));
m.treb_tick = ((above(m.treb_att, m.treb_tick)*2)+((1-above(m.treb_att, m.treb_tick))*(((m.treb_tick-1.3)*0.96)+1.3)));
m.mid_tick = ((above(m.mid_att, m.mid_tick)*2)+((1-above(m.mid_att, m.mid_tick))*(((m.mid_tick-1.3)*0.96)+1.3)));
m.bass_shift = (((equal(m.bass_tick, 2)*0.95)*Math.sin((m.time*5)))+((1-equal(m.bass_tick, 2))*m.bass_shift));
m.treb_shift = (((equal(m.treb_tick, 2)*0.95)*Math.sin((m.time*5)))+((1-equal(m.treb_tick, 2))*m.treb_shift));
m.mid_shift = (((equal(m.mid_tick, 2)*0.95)*Math.sin((m.time*5)))+((1-equal(m.mid_tick, 2))*m.mid_shift));
m.wave_r = (m.wave_r+m.bass_shift);
m.wave_g = (m.wave_g+m.mid_shift);
m.wave_b = (m.wave_b+m.treb_shift);
m.q1 = m.bass_shift;
m.q2 = m.mid_shift;
m.q3 = m.treb_shift;
m.zoom = (m.zoom+Math.abs((0.05*((div(m.treb,2)*Math.cos((m.bass_att*m.treb_shift)))*m.bass_shift))));
m.ib_r = (1-m.wave_r);
m.ib_g = (1-m.wave_g);
m.ib_b = (1-m.wave_b);
		m.rkeys = ['dy','dx','cy','cx','zoom','rot','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.rot = (m.rot-(0.05*(((m.rad*m.q3)+(0.55*m.q1))*((0.5*Math.sin(m.time))-Math.cos((0.5-(2*(2.5*m.rad))))))));
m.rot = (m.rot-(0.05*ifcond(above(m.time, div(((m.q1*m.q2)*m.q3),3)), ((((Math.sin((2*m.rad))*(6.5*m.rad))*2)*m.dy)-m.r), m.dx_r)));
m.zoom = (m.zoom+((0.1*equal(m.zoom, 0))*m.dy_r));
m.rot = (m.rot+(0.025*((m.rad*6)+(m.q1*m.q3))));
m.cx = (m.cx-(0.25*(Math.cos(m.time)-(0.5*Math.sin((m.time*1.2))))));
m.cy = (m.cy-(0.25*(Math.sin(m.time)+(0.5*Math.cos((1.22*m.time))))));
m.dx = (m.dx+m.dx_r);
m.dy = (m.dy+m.dy_r);
m.zoom = (m.zoom-(m.rad*0.1));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('bass_tick = above(bass_att,bass_tick)*2 + (1-above(bass_att,bass_tick))*((bass_tick-1.3)*0.96+1.3);\n' + 'treb_tick = above(treb_att,treb_tick)*2 + (1-above(treb_att,treb_tick))*((treb_tick-1.3)*0.96+1.3);\n' + 'mid_tick = above(mid_att,mid_tick)*2 + (1-above(mid_att,mid_tick))*((mid_tick-1.3)*0.96+1.3);\n' + 'bass_shift = equal(bass_tick,2)*0.95*sin(time*5) + (1-equal(bass_tick,2))*bass_shift;\n' + 'treb_shift = equal(treb_tick,2)*0.95*sin(time*5) + (1-equal(treb_tick,2))*treb_shift;\n' + 'mid_shift = equal(mid_tick,2)*0.95*sin(time*5) + (1-equal(mid_tick,2))*mid_shift;\n' + 'wave_r = wave_r + bass_shift;\n' + 'wave_g = wave_g + mid_shift;\n' + 'wave_b = wave_b + treb_shift;\n' + 'q1 = bass_shift;\n' + 'q2= mid_shift;\n' + 'q3 = treb_shift;\n' + 'zoom = zoom + abs(0.05*(treb/2*cos(bass_att*treb_shift)*bass_shift));\n' + 'ib_r = 1-wave_r;\n' + 'ib_g = 1-wave_g;\n' + 'ib_b = 1-wave_b;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'rot = rot - 0.05*(((rad*q3)+0.55*q1)*(0.5*sin(time)-cos(0.5-2*(2.5*rad))));\n' + 'rot = rot - 0.05*if (above(time,((q1*q2*q3)/3)),(sin(2*rad))*(6.5*rad)*2*dy-r,dx_r);\n' + 'zoom = zoom + 0.1*equal(zoom,0)*dy_r;\n' + 'rot = rot + 0.025*(rad*6+(q1*q3));\n' + 'cx = cx - 0.25*(cos(time)-0.5*sin(time*1.2));\n' + 'cy = cy - 0.25*(sin(time)+0.5*cos(1.22*time));\n' + 'dx = dx + dx_r;\n' + 'dy = dy + dy_r;\n' + 'zoom = zoom - rad*0.1;'),
};

return pmap;
});
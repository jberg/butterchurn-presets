define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 2.047093,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 3.394161,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.006596,
		ob_size : 0.01,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.008148,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.983,
		wave_a : 0.8,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.centerx = 0;
m.centery = 0;
m.grid = 0;
m.wave_size = 0;
m.timer_base = 0;
m.sy_temp = 0;
m.sx_temp = 0;
m.crad = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = (m.wave_r+ifcond(above(m.bass_att, 1.4), 1, (0.49*Math.sin((m.time*2)))));
m.wave_g = (m.wave_g+ifcond(above(m.bass_att, 1.4), 0, ifcond(above(m.treb_att, 1.4), 1, (0.49*Math.sin((m.time*3))))));
m.wave_b = (m.wave_b+ifcond(above(m.treb_att, 1.4), 0, (0.49*Math.sin(m.time))));
m.timer_base = 0.5;
m.q1 = Math.sin(((m.time*m.timer_base)*4));
m.q2 = Math.sin(((m.time*m.timer_base)*2));
m.q3 = Math.sin((m.time*m.timer_base));
m.rot = ifcond(above(m.q1, 0), ifcond(above(m.q2, 0), 0.1, -0.1), 0);
m.zoom = ((m.zoom+(0.05*m.q2))+(0.05*m.q1));
m.wave_mystery = ((m.wave_mystery+(0.7*m.q1))+(0.3*m.q2));
m.wave_size = (m.wave_size+(0.5*m.q3));
m.cx = (m.cx+(0.2*m.q1));
m.cy = (m.cy+(0.2*m.q3));
		m.rkeys = ['sy','sx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.centerx = 0.5;
m.centery = 0.5;
m.crad = (Math.abs((m.rad-0.5))*m.q2);
m.grid = (mod(Math.abs(((m.x*10)-5)),2)+mod(Math.abs(((m.y*10)-5)),2));
m.sx_temp = ifcond(equal(m.grid, 0), ifcond(above(m.x, m.centerx), ((m.sx-m.crad)-m.centerx), ((m.sx+m.crad)-m.centerx)), m.sx);
m.sy_temp = ifcond(equal(m.grid, 0), ifcond(above(m.y, m.centery), ((m.sy-m.crad)-m.centery), ((m.sy+m.crad)-m.centery)), m.sy);
m.sx = ifcond(below(m.q1, 0), (m.sx-((m.sx_temp*m.q2)*0.1)), m.sx);
m.sy = ifcond(below(m.q1, 0), (m.sy-((m.sx_temp*m.q2)*0.1)), m.sy);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'wave_r = wave_r + if(above(bass_att,1.4),1,.49*sin(time*2));\n' + 'wave_g = wave_g + if(above(bass_att,1.4),0,if(above(treb_att,1.4),1,.49*sin(time*3)));\n' + 'wave_b = wave_b + if(above(treb_att,1.4),0,.49*sin(time));\n' + 'timer_base=.5;\n' + 'q1=sin(time*timer_base*4);\n' + 'q2=sin(time*timer_base*2);\n' + 'q3=sin(time*timer_base);\n' + 'rot=if(above(q1,0),if(above(q2,0),.1,-.1),0);\n' + 'zoom=zoom+.05*q2+.05*q1;\n' + 'wave_mystery=wave_mystery+.7*q1+.3*q2;\n' + 'wave_size=wave_size+0.5*q3;\n' + 'cx=cx+.2*q1;\n' + 'cy=cy+.2*q3;'),
	'pixel_eqs_str' : ('centerx = .5;\n' + 'centery = .5;\n' + 'crad = abs(rad-.5)*q2;\n' + 'grid=abs(x*10-5)%2 + abs(y*10-5)%2;\n' + 'sx_temp = if(equal(grid,0),if(above(x,centerx),sx - crad - centerx,sx + crad - centerx),sx);\n' + 'sy_temp = if(equal(grid,0),if(above(y,centery),sy - crad - centery,sy + crad - centery),sy);\n' + 'sx=if(below(q1,0),sx-sx_temp*q2*.1,sx);\n' + 'sy=if(below(q1,0),sy-sx_temp*q2*.1,sy);'),
};

return pmap;
});
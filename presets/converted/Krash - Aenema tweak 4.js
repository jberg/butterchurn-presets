define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 1.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.028395,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.999907,
		ob_r : 0.0,
		sy : 0.932718,
		ib_size : 0.01,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		fshader : 1.0,
		wave_r : 0.1,
		ib_r : 0.6,
		echo_zoom : 0.9966,
		ob_size : 0.01,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.980296,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.1,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		invert : 0.0,
		bmotionvectorson : 1.0,
		rot : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 1.0,
		decay : 0.97,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.2,
		wave_b : 0.5,
		ib_b : 0.0,
		rating : 3.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.dist = 0;
m.mult = 0;
m.du = 0;
m.dv = 0;
m.ang2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = Math.abs((m.wave_r+(0.1*(Math.sin((m.time*0.346))+Math.sin((m.time*1.334))))));
m.wave_g = (m.wave_g+(0.15*(Math.sin((m.time*0.763))+Math.sin((m.time*1.231)))));
m.wave_b = (m.wave_b+(0.2*(Math.sin((m.time*0.695))+Math.sin((m.time*0.367)))));
m.ob_r = m.wave_r;
m.ob_g = (m.wave_b-0.1);
m.ob_b = (m.wave_g-0.1);
m.ib_a = (0.7-m.bass);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.du = (((m.x*2)-1)-0.7);
m.dv = (((m.y*2)-1)+0.5);
m.dist = Math.tan(((m.du*m.du)+(m.dv*m.dv)));
m.ang2 = Math.atan2(m.du, m.dv);
m.mult = div(0.008,(m.dist+0.4));
m.dx = (m.mult*Math.sin((m.ang2-m.bass)));
m.dy = (m.mult*Math.cos((m.ang2-m.bass)));
m.du = (((m.x*2)-1)-0.7);
m.dv = (((m.y*2)-1)-0.5);
m.dist = Math.tan(((m.du*m.du)+(m.dv*m.dv)));
m.ang2 = Math.atan2(m.du, m.dv);
m.mult = div(0.008,(m.dist+0.4));
m.dx = (m.dx+(m.mult*Math.sin((m.ang2+m.bass))));
m.dy = (m.dy+(m.mult*Math.cos((m.ang2+m.bass))));
m.dy = (m.dy-ifcond(below(m.y, 0.65), ifcond(above(m.y, 0.35), ((0.1*(m.y-0.5))+(0.01*Math.sin(((m.x*30)+(m.time*4))))), 0), 0));
m.dx = (m.dx-ifcond(above(m.dx, -0.01), ifcond(below(m.dx, 0), 0.006, 0), 0));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'wave_r = abs(wave_r + 0.1*(sin(time*0.346) + sin(time*1.334)));\n' + 'wave_g = wave_g + 0.15*(sin(time*0.763) + sin(time*1.231));\n' + 'wave_b = wave_b + 0.2*(sin(time*0.695) + sin(time*0.367));\n' + 'ob_r = wave_r;\n' + 'ob_g = wave_b - 0.1;\n' + 'ob_b = wave_g - 0.1;\n' + 'ib_a = 0.7 - bass;'),
	'pixel_eqs_str' : ('du = x*2-1 - 0.7;\n' + 'dv = y*2-1 + 0.5;\n' + 'dist = tan(du*du+dv*dv);\n' + 'ang2 = atan2(du,dv);\n' + 'mult = 0.008/(dist+0.4);\n' + 'dx = mult*sin(ang2-bass);\n' + 'dy = mult*cos(ang2-bass);\n' + 'du = x*2-1 - 0.7;\n' + 'dv = y*2-1 - 0.5;\n' + 'dist = tan(du*du+dv*dv);\n' + 'ang2 = atan2(du,dv);\n' + 'mult = 0.008/(dist+0.4);\n' + 'dx = dx + mult*sin(ang2+bass);\n' + 'dy = dy + mult*cos(ang2+bass);\n' + 'dy = dy - if(below(y, 0.65), if(above(y, 0.35), 0.1*(y-0.5) + 0.01*sin(x*30+time*4), 0), 0);\n' + 'dx = dx - if(above(dx,-0.01), if(below(dx,0), 0.006, 0), 0);'),
};

return pmap;
});
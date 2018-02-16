define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.2,
		ib_g : 0.0,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.5,
		echo_alpha : 0.4999,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.0,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.23,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 0.9999,
		ob_size : 0.005,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.996,
		wave_a : 0.741922,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.2,
		ib_b : 0.3,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 1.5,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.dy_residual = 0;
m.dx_residual = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.350*((0.60*Math.sin((0.825*m.time)))+(0.40*Math.sin((0.915*m.time))))));
m.wave_g = (m.wave_g+(0.350*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((1.025*m.time))))));
m.wave_b = (m.wave_b+(0.350*((0.60*Math.sin((0.810*m.time)))+(0.40*Math.sin((0.950*m.time))))));
m.wave_x = (0.5-Math.cos((m.time*2.116)));
m.wave_y = (0.5-Math.cos((m.time*1.619)));
m.cx = (m.cx+(0.225*((0.60*Math.sin((0.350*m.time)))+(0.40*Math.sin((0.350*m.time))))));
m.cy = (m.cy+(0.225*((0.60*Math.sin((0.350*m.time)))+(0.40*Math.sin((0.350*m.time))))));
m.dx = (0.005+(0.002*((0.60*Math.sin((0.234*m.time)))+(0.40*Math.sin((0.277*m.time))))));
m.dy = (0.005+(0.002*((0.60*Math.sin((0.234*m.time)))+(0.40*Math.sin((0.277*m.time))))));
m.dx_residual = (Math.max(m.bass, m.bass_att)-1);
m.dy_residual = (Math.min(m.bass, m.bass_att)-1);
m.dx = ifcond(above((m.bass_att+m.bass), 2.8), (5*m.dx), m.dx);
m.wave_mode = mod(m.frame,8);
m.wave_mystery = Math.sin((m.time*0.875));
m.ob_a = (1*above(m.bass_att, (2+(1*Math.sin((m.time*3.71))))));
m.ob_r = (1*above(m.treb_att, (2+(1*Math.sin((m.time*1.31))))));
m.ob_b = (1*above(m.mid_att, (2+(1*Math.sin((m.time*1.011))))));
m.ob_g = (1*above(m.bass_att, 1));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (((0.03*Math.sin((0.84*m.time)))-(0.013*Math.cos((0.784*m.time))))+(0.02*Math.sin((1-m.rad))));
m.zoom = (m.zoom-(m.rot*Math.sin(((m.rad*3.14)*Math.sin((0.711*m.time))))));
m.dx = (Math.sin(div(m.rad,10))*Math.cos((0.612*m.time)));
m.dy = (Math.sin(div(m.rad,10))*Math.cos((0.87*m.time)));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.350*( 0.60*sin(0.825*time) + 0.40*sin(0.915*time) );\n' + 'wave_g = wave_g + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(1.025*time) );\n' + 'wave_b = wave_b + 0.350*( 0.60*sin(0.810*time) + 0.40*sin(0.950*time) );\n' + 'wave_x = 0.5-cos(time*2.116);\n' + 'wave_y = 0.5-cos(time*1.619);\n' + 'cx = cx + 0.225*( 0.60*sin(0.350*time) + 0.40*sin(0.350*time) );\n' + 'cy = cy + 0.225*( 0.60*sin(0.350*time) + 0.40*sin(0.350*time) );\n' + 'dx = 0.005 + 0.002*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );\n' + 'dy = 0.005 + 0.002*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );\n' + 'dx_residual=max(bass, bass_att)-1;\n' + 'dy_residual=min(bass, bass_att)-1;\n' + 'dx = if(above(bass_att+bass,2.8),5*dx,dx);\n' + 'wave_mode=frame%8;\n' + 'wave_mystery=sin(time*.875);\n' + 'ob_a=1*above(bass_att,2+1*sin(time*3.71));\n' + 'ob_r=1*above(treb_att,2+1*sin(time*1.31));\n' + 'ob_b=1*above(mid_att,2+1*sin(time*1.011));\n' + 'ob_g=1*above(bass_att,1);'),
	'pixel_eqs_str' : ('rot = 0.03*sin(0.84*time)-0.013*cos(0.784*time)+0.02*sin(1-rad);\n' + 'zoom=zoom-rot*sin(rad*3.14*sin(.711*time));\n' + 'dx=sin(rad/10)*cos(.612*time);\n' + 'dy=sin(rad/10)*cos(.87*time);'),
};

return pmap;
});
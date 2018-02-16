define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.001829,
		echo_alpha : 0.220001,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 0.496635,
		ob_size : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 0.53,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.003861,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.66,
		decay : 0.996,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 0.0,
		rating : 5.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.arctan = 0;
m.s = 0;
m.t = 0;
m.z = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_y = sqrt(Math.abs(Math.sin((m.time*4))));
m.wave_b = (0.5+div(m.bass,3));
m.wave_g = div(m.treb,5);
m.wave_r = 0;
m.q2 = div(((m.bass_att+m.mid_att)+m.treb_att),3);
m.q3 = (m.time*8);
m.q4 = div(m.time,10);
		m.rkeys = ['dx','dy'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dy = (m.dy+(0.004*Math.sin(((div(m.x,0.02)+div(m.y,0.07))+div(m.q3,4)))));
m.dx = (m.dx+(0.004*Math.cos(((div(m.x,0.07)+div(m.y,0.07))+div(m.q3,2)))));
m.zoom = (1+(2*(m.dy+m.dx)));
m.dx = (m.dx+(((1-m.rad)*0.05)*((Math.sin((m.q3+m.q2))*(m.x-0.5))+(Math.cos((m.q3+m.q2))*(m.y-0.5)))));
m.dy = (m.dy+(((1-m.rad)*0.05)*((Math.cos((m.q3+m.q2))*(m.x-0.5))-(Math.sin((m.q3+m.q2))*(m.y-0.5)))));
m.zoom = (m.zoom+(4*(m.dy+m.dx)));
m.s = ((0.02*div(m.mid_att,1.7))*Math.cos(div(m.q3,32)));
m.z = 0.4;
m.arctan = Math.atan2((m.x-0.5), (m.y-0.5));
m.t = div(m.s,(m.rad+m.z));
m.dx = (m.dx+(m.t*Math.sin((m.arctan-1.5))));
m.dy = (m.dy+(m.t*Math.cos((m.arctan-1.5))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_y=sqrt(abs(sin(time*4)));\n' + 'wave_b=.5+(bass/3);\n' + 'wave_g=(treb/5);\n' + 'wave_r=0;\n' + 'q2=(bass_att+mid_att+treb_att)/3;\n' + 'q3=time*8;\n' + 'q4=time/10;'),
	'pixel_eqs_str' : ('dy=dy+.004*sin(x/.02+ y/.07+q3/4 );\n' + 'dx=dx+.004*cos(x/.07+y/.07+q3/2);\n' + 'zoom=1+2*(dy+dx);\n' + 'dx=dx+(1-rad)*.05*(sin(q3+q2)*(x-0.5)+cos(q3+q2)*(y-0.5));\n' + 'dy=dy+(1-rad)*.05*(cos(q3+q2)*(x-0.5)-sin(q3+q2)*(y-0.5));\n' + 'zoom=zoom+4*(dy+dx);\n' + 's=.02*(mid_att/1.7)*cos(q3/32);\n' + 'z=.4;\n' + 'arctan=atan2(x-.5,y-.5);\n' + 't = s/(rad+z);\n' + 'dx=dx+t*sin(arctan-1.5);\n' + 'dy=dy+t*cos(arctan-1.5);'),
};

return pmap;
});
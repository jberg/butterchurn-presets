define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.27,
		mv_x : 10.879999,
		warpscale : 1.002076,
		brighten : 0.0,
		mv_y : 11.52,
		wave_scale : 1.004873,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.03,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 1.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.00183,
		mv_a : 0.25,
		fshader : 1.0,
		wave_r : 0.0,
		ib_r : 0.38,
		mv_b : 0.0,
		echo_zoom : 1.000224,
		ob_size : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 0.999994,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.077494,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		modwavealphaend : 1.01,
		wave_mystery : -0.5,
		decay : 0.985,
		wave_a : 1.0031,
		ob_g : 0.0,
		ib_a : 0.3,
		wave_b : 0.8,
		ib_b : 0.03,
		mv_r : 0.0,
		rating : 0.0,
		modwavealphastart : 1.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_mystery = (Math.abs(Math.sin((m.time*0.51)))*-1);
m.cx = (m.cx+((Math.sin(m.time)*ifcond(above(Math.sin(m.time), 0), (-1+m.bass), 1.3))*0.5));
m.cy = (m.cy+((Math.cos(m.time)*ifcond(below(Math.sin(m.time), 0), (-1+m.bass), 1.3))*0.6));
m.mv_x = (m.mv_x+(Math.sin(div(m.time,1.8))*3));
m.mv_y = (m.mv_x-(Math.sin(div(m.time,2))*3.5));
m.wave_r = m.bass;
m.wave_g = (m.wave_g+(Math.sin((m.time*0.74))*0.3));
m.wave_b = (m.wave_b+(Math.sin((m.time*0.83))*0.2));
m.mv_g = (m.mv_g*Math.abs(Math.sin(m.time)));
m.mv_r = m.bass;
m.mv_b = m.treb;
m.ib_size = (m.ib_size+(m.bass*0.15));
m.rot = (Math.sin(m.time)*0.03);
m.ib_r = (Math.abs(Math.sin((m.time*1.5)))*0.4);
m.ib_g = (Math.abs(Math.sin((m.time*1.53)))*0.5);
m.ib_b = (Math.abs(Math.sin((m.time*1.51)))*0.45);
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+(m.rad*0.1));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_mystery=abs(sin(time*0.51))*-1;\n' + 'cx=cx+(sin(time)*if(above(sin(time),0),(-1+bass),1.3))*0.5;\n' + 'cy=cy+(cos(time)*if(below(sin(time),0),(-1+bass),1.3))*0.6;\n' + 'mv_x=mv_x+sin(time/1.8)*3;\n' + 'mv_y=mv_x-sin(time/2)*3.5;\n' + 'wave_r=bass;\n' + 'wave_g=wave_g+sin(time*0.74)*0.3;\n' + 'wave_b=wave_b+sin(time*0.83)*0.2;\n' + 'mv_g=mv_g*abs(sin(time));\n' + 'mv_r=bass;\n' + 'mv_b=treb;\n' + 'ib_size=ib_size+bass*0.15;\n' + 'rot=sin(time)*0.03;\n' + 'ib_r=abs(sin(time*1.5))*0.4;\n' + 'ib_g=abs(sin(time*1.53))*0.5 ;\n' + 'ib_b=abs(sin(time*1.51))*0.45 ;'),
	'pixel_eqs_str' : ('zoom=zoom+rad*0.1;'),
};

return pmap;
});
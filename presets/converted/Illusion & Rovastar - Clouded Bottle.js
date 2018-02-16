define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.000001,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 8.0,
		warpscale : 67.165291,
		brighten : 0.0,
		mv_y : 1.92,
		wave_scale : 1.254857,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.01,
		ib_size : 0.26,
		warp : 0.0298,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.132909,
		mv_a : 0.5,
		fshader : 1.0,
		wave_r : 0.65,
		ib_r : 1.0,
		mv_b : 0.0,
		echo_zoom : 0.999609,
		ob_size : 0.3,
		wave_smoothing : 0.63,
		warpanimspeed : 2.448629,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 1.0,
		wave_y : 0.5,
		zoom : 0.97059,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.02,
		cx : 2.0,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.999,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 1.0,
		mv_r : 0.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.dy_residual = 0;
m.dx_residual = 0;
m.bass_effect = 0;
m.bass_thresh = 0;
m.wrap_s = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.dx = (m.dx-0.0005);
m.dy = (m.dy-0.0035);
m.mv_l = 3000;
m.mv_r = (0.5+(0.499*Math.sin((m.time*1.12))));
m.mv_g = (0.5+(0.123*Math.cos((m.time*1.83))));
m.mv_b = (0.4+(0.79*Math.cos((m.time*0.45))));
m.bass_effect = Math.max((Math.max(m.bass, m.bass_att)-1.3), 0);
m.decay = ifcond(above(m.bass_effect, 0), 0.96, 0.996);
m.wave_x = (0.6+(0.3*Math.sin((m.time*0.724))));
m.warp = (m.warp+(2*Math.sin((0.75*m.time))));
m.wrap_s = (m.wrap_s+(0.5*Math.sin((0.1*m.time))));
m.wave_r = (0.5+div((Math.sin(div(m.time,2))-Math.cos((m.time*0.22))),2));
m.wave_g = (0.5-div(Math.sin((m.time*0.877)),2));
m.wave_b = (0.5-div(Math.cos(m.time),2));
m.dx = (m.dx+m.dx_residual);
m.dy = (m.dy+m.dy_residual);
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.dx_residual = (((equal(m.bass_thresh, 2)*0.016)*Math.sin((m.time*7)))+((1-equal(m.bass_thresh, 2))*m.dx_residual));
m.dy_residual = (((equal(m.bass_thresh, 2)*0.012)*Math.sin((m.time*9)))+((1-equal(m.bass_thresh, 2))*m.dy_residual));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('dx =dx -0.0005;\n' + 'dy = dy-0.0035;\n' + 'mv_l = 3000;\n' + 'mv_r = 0.5 + 0.499*sin(time*1.12);\n' + 'mv_g = 0.5 + 0.123*cos(time*1.83);\n' + 'mv_b = 0.4 + 0.79*cos(time*0.45);\n' + 'bass_effect = max(max(bass,bass_att)-1.3,0);\n' + 'decay = if(above(bass_effect,0),0.96,0.996);\n' + 'wave_x = 0.6+0.3*sin(time*0.724);\n' + 'warp = warp + (2*sin(0.75*time));\n' + 'wrap_s = wrap_s +0.5*sin(0.1*time);\n' + 'wave_r  = 0.5 + (sin(time/2) - cos(time*0.22))/2;\n' + 'wave_g = 0.5 - sin(time*0.877)/2;\n' + 'wave_b = 0.5 - cos(time)/2;\n' + 'dx = dx + dx_residual;\n' + 'dy = dy + dy_residual;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'dx_residual = equal(bass_thresh,2)*0.016*sin(time*7) + (1-equal(bass_thresh,2))*dx_residual;\n' + 'dy_residual = equal(bass_thresh,2)*0.012*sin(time*9) + (1-equal(bass_thresh,2))*dy_residual;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
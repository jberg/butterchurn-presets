define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.772,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.656,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.513,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 10.4,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.124,
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
		wave_mystery : 0.0,
		decay : 0.97,
		wave_a : 0.148,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.dy_residual = 0;
m.dx_residual = 0;
m.bass_thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_x = (m.wave_x+(0.200*((0.60*Math.sin((1.321*m.time)))+(0.40*Math.sin((1.621*m.time))))));
m.wave_y = (m.wave_y+(0.200*((0.60*Math.sin((1.742*m.time)))+(0.40*Math.sin((1.422*m.time))))));
m.wave_r = (m.wave_r+(0.350*((0.60*Math.sin((0.823*m.time)))+(0.40*Math.sin((0.916*m.time))))));
m.wave_g = (m.wave_g+(0.350*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((1.023*m.time))))));
m.wave_b = (m.wave_b+(0.350*((0.60*Math.sin((0.808*m.time)))+(0.40*Math.sin((0.949*m.time))))));
m.rot = (m.rot+(0.070*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.539*m.time))))));
m.cx = (m.cx+(0.090*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.194*m.time))))));
m.cy = (m.cy+(0.097*((0.60*Math.sin((0.274*m.time)))+(0.40*Math.sin((0.394*m.time))))));
m.decay = (m.decay-(0.01*equal(mod(m.frame,70), 0)));
m.dx = (m.dx+(m.dx_residual*0.7));
m.dy = (m.dy+(m.dy_residual*0.7));
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2.5)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.4)*0.98)+1.4)));
m.dx_residual = (((equal(m.bass_thresh, 2.5)*0.016)*Math.sin((m.time*7)))+((1-equal(m.bass_thresh, 2.5))*m.dx_residual));
m.dy_residual = (((equal(m.bass_thresh, 2.5)*0.012)*Math.sin((m.time*9)))+((1-equal(m.bass_thresh, 2.5))*m.dy_residual));
		m.rkeys = ['rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (m.rot+((m.rad*0.14)*Math.sin((0.6186*m.time))));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_x = wave_x + 0.200*( 0.60*sin(1.321*time) + 0.40*sin(1.621*time) );\n' + 'wave_y = wave_y + 0.200*( 0.60*sin(1.742*time) + 0.40*sin(1.422*time) );\n' + 'wave_r = wave_r + 0.350*( 0.60*sin(0.823*time) + 0.40*sin(0.916*time) );\n' + 'wave_g = wave_g + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(1.023*time) );\n' + 'wave_b = wave_b + 0.350*( 0.60*sin(0.808*time) + 0.40*sin(0.949*time) );\n' + 'rot = rot + 0.070*( 0.60*sin(0.381*time) + 0.40*sin(0.539*time) );\n' + 'cx = cx + 0.090*( 0.60*sin(0.374*time) + 0.40*sin(0.194*time) );\n' + 'cy = cy + 0.097*( 0.60*sin(0.274*time) + 0.40*sin(0.394*time) );\n' + 'decay = decay - 0.01*equal(frame%70,0);\n' + 'dx = dx + dx_residual*0.7;\n' + 'dy = dy + dy_residual*0.7;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2.5 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.4)*0.98+1.4);\n' + 'dx_residual = equal(bass_thresh,2.5)*0.016*sin(time*7) + (1-equal(bass_thresh,2.5))*dx_residual;\n' + 'dy_residual = equal(bass_thresh,2.5)*0.012*sin(time*9) + (1-equal(bass_thresh,2.5))*dy_residual;'),
	'pixel_eqs_str' : ('rot=rot+rad*0.14*sin(0.6186*time);'),
};

return pmap;
});
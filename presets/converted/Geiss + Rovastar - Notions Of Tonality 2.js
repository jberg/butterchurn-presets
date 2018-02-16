define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.693,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 57.599998,
		warpscale : 3.259127,
		brighten : 0.0,
		mv_y : 44.16,
		wave_scale : 1.09326,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 0.999666,
		ob_r : 0.0,
		sy : 0.9999,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.180378,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 6.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.002,
		mv_dy : 0.002,
		mv_a : 0.1,
		fshader : 1.0,
		wave_r : 0.65,
		ib_r : 0.55,
		mv_b : 0.5,
		echo_zoom : 1.628259,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.1,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.4,
		wave_x : 0.5,
		wave_y : 0.38,
		zoom : 1.00496,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.1,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.4,
		decay : 0.97,
		wave_a : 0.2,
		ob_g : 0.0,
		ib_a : 0.1,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 0.7,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.dist = 0;
m.mult = 0;
m.du = 0;
m.dv = 0;
m.ang2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.mv_r = (m.wave_r+(0.35*((0.60*Math.sin((0.980*m.time)))+(0.40*Math.sin((1.047*m.time))))));
m.mv_g = (m.wave_g+(0.35*((0.60*Math.sin((0.835*m.time)))+(0.40*Math.sin((1.081*m.time))))));
m.mv_b = (m.wave_b+(0.35*((0.60*Math.sin((0.814*m.time)))+(0.40*Math.sin((1.011*m.time))))));
m.q1 = (((m.cx*2)-1)+(0.62*((0.60*Math.sin((0.474*m.time)))+(0.40*Math.sin((0.394*m.time))))));
m.q2 = (((m.cy*2)-1)+(0.62*((0.60*Math.sin((0.413*m.time)))+(0.40*Math.sin((0.323*m.time))))));
m.q3 = (((m.cx*2)-1)+(0.62*((0.60*Math.sin((0.274*-m.time)))+(0.40*Math.sin((0.464*m.time))))));
m.q4 = (((m.cy*2)-1)+(0.62*((0.60*Math.sin((0.334*m.time)))+(0.40*Math.sin((0.371*-m.time))))));
m.decay = (m.decay-(0.01*equal(mod(m.frame,5), 0)));
m.cy = (m.cy+(0.1*Math.sin((m.time*0.245))));
m.cx = (m.cx+(0.1*Math.cos((m.time*0341))));
m.wave_mystery = 2;
m.warp = (m.warp*pow(2, (0.6*Math.sin((m.time*0.194)))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.du = (((m.x*2)-1)-m.q1);
m.dv = (((m.y*2)-1)-m.q2);
m.dist = sqrt(((m.du*m.du)+(m.dv*m.dv)));
m.ang2 = Math.atan2(m.du, m.dv);
m.mult = div(0.008,(m.dist+0.4));
m.dx = ((m.mult*Math.sin((m.ang2-1.5)))*m.aspectx);
m.dy = ((m.mult*Math.cos((m.ang2-1.5)))*m.aspecty);
m.du = (((m.x*2)-1)-m.q3);
m.dv = (((m.y*2)-1)-m.q4);
m.dist = sqrt(((m.du*m.du)+(m.dv*m.dv)));
m.ang2 = Math.atan2(m.du, m.dv);
m.mult = div(0.008,(m.dist+0.7));
m.dx = (m.dx+((m.mult*Math.sin((m.ang2+1.5)))*m.aspectx));
m.dy = (m.dy+((m.mult*Math.cos((m.ang2+1.5)))*m.aspecty));
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
	'frame_eqs_str' : ('mv_r = wave_r + 0.35*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );\n' + 'mv_g = wave_g + 0.35*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );\n' + 'mv_b = wave_b + 0.35*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time));\n' + 'q1 = (cx*2-1) + 0.62*( 0.60*sin(0.474*time) + 0.40*sin(0.394*time) );\n' + 'q2 = (cy*2-1) + 0.62*( 0.60*sin(0.413*time) + 0.40*sin(0.323*time) );\n' + 'q3 = (cx*2-1) + 0.62*( 0.60*sin(0.274*-time) + 0.40*sin(0.464*time) );\n' + 'q4 = (cy*2-1) + 0.62*( 0.60*sin(0.334*time) + 0.40*sin(0.371*-time) );\n' + 'decay = decay - 0.01*equal(frame%5,0);\n' + 'cy = cy + 0.1*sin(time*0.245);\n' + 'cx = cx + 0.1*cos(time*0341);\n' + 'wave_mystery = 2;\n' + 'warp = warp * pow(2, 0.6*sin(time*0.194));'),
	'pixel_eqs_str' : ('du = x*2-1 - q1;\n' + 'dv = y*2-1 - q2;\n' + 'dist = sqrt(du*du+dv*dv);\n' + 'ang2 = atan2(du,dv);\n' + 'mult = 0.008/(dist+0.4);\n' + 'dx = mult*sin(ang2-1.5)*aspectx;\n' + 'dy = mult*cos(ang2-1.5)*aspecty;\n' + 'du = x*2-1 - q3;\n' + 'dv = y*2-1 - q4;\n' + 'dist = sqrt(du*du+dv*dv);\n' + 'ang2 = atan2(du,dv);\n' + 'mult = 0.008/(dist+0.7);\n' + 'dx = dx + mult*sin(ang2+1.5)*aspectx;\n' + 'dy = dy + mult*cos(ang2+1.5)*aspecty;'),
};

return pmap;
});
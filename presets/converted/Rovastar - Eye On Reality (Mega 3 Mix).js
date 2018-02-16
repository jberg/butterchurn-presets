define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.993,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.032546,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.01,
		warp : 1.29077,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 2.1,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.8,
		ib_r : 0.25,
		mv_b : 0.35,
		echo_zoom : 2.0,
		ob_size : 0.01,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.35,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.025,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.66,
		decay : 0.98,
		wave_a : 3.3,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.25,
		mv_r : 0.35,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q6 = 0;
m.q7 = 0;
m.left = 0;
m.q8 = 0;
m.bottom = 0;
m.oldq6 = 0;
m.distx = 0;
m.newzoom = 0;
m.disty = 0;
m.top = 0;
m.newrad = 0;
m.newx = 0;
m.newy = 0;
m.newang = 0;
m.right = 0;
m.centrex = 0;
m.centrey = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.q6 = (m.oldq6+(0.005*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq6 = m.q6;
m.left = (0.5+(0.25*(Math.sin((0.555*m.q6))+Math.sin((1.111*m.q6)))));
m.right = (0.5+(0.25*(Math.sin((0.333*m.q6))+Math.sin((1.222*m.q6)))));
m.centrex = div((m.left+m.right),2);
m.distx = (0.1+div((Math.abs((m.centrex-m.left))+Math.abs((m.centrex-m.right))),2));
m.q1 = (m.centrex+m.distx);
m.q2 = (m.centrex-m.distx);
m.wave_x = m.centrex;
m.top = (0.5+(0.25*(Math.sin((0.888*m.time))+Math.sin((0.999*m.time)))));
m.bottom = (0.5+(0.25*(Math.sin((0.444*m.time))+Math.sin((1.333*m.time)))));
m.centrey = div((m.top+m.bottom),2);
m.disty = (0.1+div((Math.abs((m.centrey-m.top))+Math.abs((m.centrey-m.bottom))),2));
m.q3 = (m.centrey+m.disty);
m.q4 = (m.centrey-m.disty);
m.wave_y = (1-m.centrey);
m.warp = 0;
m.monitor = m.zoom;
m.zoom = 1;
m.q7 = m.centrex;
m.q8 = m.centrey;
m.wave_a = 0;
m.dx = 0;
m.dy = 0;
		m.rkeys = ['zoom','rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.newx = (m.x-m.q7);
m.newy = (m.y-m.q8);
m.newrad = Math.min((sqrt(((m.newx*m.newx)+((0.5625*m.newy)*m.newy)))*2), sqrt(2));
m.newang = Math.atan2(m.newx, m.newy);
m.newzoom = pow((0.999+(0.05*Math.sin((m.q4*(m.newang+m.q3))))), pow(Math.sin((m.newrad*m.newrad)), m.newrad));
m.rot = (m.rot+((0.16*Math.sin(((m.q6*-3.3)+(m.newrad*11))))*(1.3-m.newrad)));
m.zoom = (m.zoom+(0.04*Math.sin(((m.q6*1.2)+((m.newang*6.28)*3)))));
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.330038,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q7 = 0;
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q7;
m.y = (1-m.q8);
m.r = (0.5+(0.400*((0.60*Math.sin((0.933*m.time)))+(0.40*Math.sin((1.045*m.time))))));
m.g = (0.5+(0.400*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((0.956*m.time))))));
m.b = (0.5+(0.400*((0.60*Math.sin((0.910*m.time)))+(0.40*Math.sin((0.920*m.time))))));
m.r2 = (0.5+(0.400*((0.60*Math.sin((0.873*m.time)))+(0.40*Math.sin((1.124*m.time))))));
m.g2 = (0.5+(0.400*((0.60*Math.sin((0.947*m.time)))+(0.40*Math.sin((0.978*m.time))))));
m.b2 = (0.5+(0.400*((0.60*Math.sin((0.889*m.time)))+(0.40*Math.sin((0.868*m.time))))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = q7;\n' + 'y = 1-q8;\n' + 'r = 0.5+ 0.400*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );\n' + 'g = 0.5 + 0.400*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );\n' + 'b = 0.5 + 0.400*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );\n' + 'r2 = 0.5+ 0.400*( 0.60*sin(0.873*time) + 0.40*sin(1.124*time) );\n' + 'g2 = 0.5 + 0.400*( 0.60*sin(0.947*time) + 0.40*sin(0.978*time) );\n' + 'b2 = 0.5 + 0.400*( 0.60*sin(0.889*time) + 0.40*sin(0.868*time) );'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.463937,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.081954,
			x : 0.5,
			y : 0.5,
			ang : 5.026548,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q7 = 0;
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q7;
m.y = (1-m.q8);
m.r = (0.5+(0.400*((0.60*Math.sin((0.933*m.time)))+(0.40*Math.sin((1.045*m.time))))));
m.g = (0.5+(0.400*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((0.956*m.time))))));
m.b = (0.5+(0.400*((0.60*Math.sin((0.910*m.time)))+(0.40*Math.sin((0.920*m.time))))));
m.r2 = (0.5+(0.400*((0.60*Math.sin((0.873*m.time)))+(0.40*Math.sin((1.124*m.time))))));
m.g2 = (0.5+(0.400*((0.60*Math.sin((0.947*m.time)))+(0.40*Math.sin((0.978*m.time))))));
m.b2 = (0.5+(0.400*((0.60*Math.sin((0.889*m.time)))+(0.40*Math.sin((0.868*m.time))))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = q7;\n' + 'y = 1-q8;\n' + 'r = 0.5+ 0.400*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );\n' + 'g = 0.5 + 0.400*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );\n' + 'b = 0.5 + 0.400*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );\n' + 'r2 = 0.5+ 0.400*( 0.60*sin(0.873*time) + 0.40*sin(1.124*time) );\n' + 'g2 = 0.5 + 0.400*( 0.60*sin(0.947*time) + 0.40*sin(0.978*time) );\n' + 'b2 = 0.5 + 0.400*( 0.60*sin(0.889*time) + 0.40*sin(0.868*time) );'),

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
	'frame_eqs_str' : ('q6 =oldq6+ 0.005*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq6 = q6;\n' + 'left = 0.5 + 0.25*(sin(0.555*q6) + sin(1.111*q6));\n' + 'right = 0.5 + 0.25*(sin(0.333*q6) + sin(1.222*q6));\n' + 'centrex = (left+right)/2;\n' + 'distx = 0.1 + (abs(centrex-left)+abs(centrex-right))/2;\n' + 'q1 = centrex + distx;\n' + 'q2 = centrex - distx;\n' + 'wave_x = centrex;\n' + 'top = 0.5 + 0.25*(sin(0.888*time) + sin(0.999*time));\n' + 'bottom = 0.5 + 0.25*(sin(0.444*time) + sin(1.333*time));\n' + 'centrey = (top+bottom)/2;\n' + 'disty = 0.1 + (abs(centrey-top)+abs(centrey-bottom))/2;\n' + 'q3 = centrey + disty;\n' + 'q4 = centrey - disty;\n' + 'wave_y = 1-centrey;\n' + 'warp=0;\n' + 'monitor = zoom;\n' + 'zoom = 1;\n' + 'q7 = centrex;\n' + 'q8 = centrey;\n' + 'wave_a = 0;\n' + 'dx = 0;\n' + 'dy =0;'),
	'pixel_eqs_str' : ('newx = x-q7;\n' + 'newy = y-q8;\n' + 'newrad = min(sqrt((newx)*(newx)+0.5625*(newy)*(newy))*2,sqrt(2));\n' + 'newang = atan2(newx,newy);\n' + 'newzoom = pow(0.999 + 0.05*sin((q4)*(newang+q3)), pow(sin(newrad*newrad), newrad));\n' + 'rot=rot+0.16*sin(q6*-3.3+newrad*11)*(1.3-newrad);\n' + 'zoom=zoom+0.04*sin(q6*1.2+newang*6.28*3);'),
};

return pmap;
});
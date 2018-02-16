define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 6.4,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 43.199997,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.015,
		warp : 1.29077,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 2.1,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 0.71,
		echo_zoom : 3.289248,
		ob_size : 0.01,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.91,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.025,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.5,
		decay : 0.98,
		wave_a : 3.645252,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q4 = 0;
m.q5 = 0;
m.ag = 0;
m.q8 = 0;
m.myrad = 0;
m.mybass = 0;
m.myx = 0;
m.myy = 0;
m.oldq8 = 0;
m.musictime = 0;
m.ypos = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (0.0+(0.000*((0.60*Math.sin((0.933*m.time)))+(0.40*Math.sin((1.045*m.time))))));
m.wave_g = (0.0+(0.000*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((0.956*m.time))))));
m.wave_b = (0.0+(0.000*((0.60*Math.sin((0.910*m.time)))+(0.40*Math.sin((0.920*m.time))))));
m.zoom = (m.zoom+(0.01*((0.60*Math.sin((0.339*m.time)))+(0.40*Math.sin((0.276*m.time))))));
m.rot = (m.rot+(0.010*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.warp = 0;
m.zoom = 1;
m.rot = 0;
m.cx = 0.5;
m.cy = 0.5;
m.q1 = (0.5+(0.1*Math.sin(m.time)));
m.q2 = (0.5-(0.1*Math.cos(m.time)));
m.wave_a = 0;
m.decay = 1;
m.q8 = (m.oldq8+(0.0005*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.mybass = (m.mybass+(0.01*(m.bass+m.bass_att)));
m.rot = (1+(0.15*Math.sin((m.mybass*0.1789))));
m.zoom = (1.6+(0.1*Math.sin((m.mybass*0.786))));
m.musictime = (m.musictime+(((m.mid*m.mid)*m.mid)*0.01));
m.xpos = (Math.sin((m.musictime*0.6))*0.1);
m.ypos = (Math.sin((m.musictime*0.4))*0.1);
m.q4 = m.xpos;
m.q5 = m.ypos;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.ag = Math.atan(div(((m.y-0.5)+m.q5),((m.x-0.5)-m.q4)));
m.myx = ((m.x-m.q1)*2);
m.myy = ((m.y-m.q2)*2);
m.myrad = (div((m.myx*m.myx),(m.ag*6))+div((m.myy*m.myy),(m.ag*6)));
m.dx = (0.1*div(m.myy,(m.myrad+1)));
m.dy = (-0.1*div(m.myx,(m.myrad+1)));
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
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.02041,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.01*Math.sin((0.89*m.q8))));
m.y = (0.5-(0.01*Math.cos((0.77*m.q8))));
m.r = (0.25+(0.25*Math.sin((m.time*0.7679))));
m.g = (0.25+(0.25*Math.sin((m.time*0.8079))));
m.b = (0.25+(0.25*Math.sin((m.time*0.7339))));
m.r2 = (0.25+(0.25*Math.sin((m.time*0.6979))));
m.g2 = (0.25+(0.25*Math.sin((m.time*0.849))));
m.b2 = (0.25+(0.25*Math.sin((m.time*0.8079))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.01*sin(0.89*q8);\n' + 'y = 0.5 - 0.01*cos(0.77*q8);\n' + 'r = 0.25+0.25*sin(time*0.7679);\n' + 'g = 0.25+0.25*sin(time*0.8079);\n' + 'b = 0.25+0.25*sin(time*0.7339);\n' + 'r2 = 0.25+0.25*sin(time*0.6979);\n' + 'g2 = 0.25+0.25*sin(time*0.849);\n' + 'b2 = 0.25+0.25*sin(time*0.8079);'),

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
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.020068,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5-(0.01*Math.sin((0.7089*m.q8))));
m.y = (0.5+(0.01*Math.cos((0.5077*m.q8))));
m.r = (0.25+(0.25*Math.sin((m.time*0.6479))));
m.g = (0.25+(0.25*Math.sin((m.time*0.5079))));
m.b = (0.25+(0.25*Math.sin((m.time*0.9339))));
m.r2 = (0.25+(0.25*Math.sin((m.time*0.779))));
m.g2 = (0.25+(0.25*Math.sin((m.time*0.707))));
m.b2 = (0.25+(0.25*Math.sin((m.time*0.747))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 - 0.01*sin(0.7089*q8);\n' + 'y = 0.5 + 0.01*cos(0.5077*q8);\n' + 'r = 0.25+0.25*sin(time*0.6479);\n' + 'g = 0.25+0.25*sin(time*0.5079);\n' + 'b = 0.25+0.25*sin(time*0.9339);\n' + 'r2 = 0.25+0.25*sin(time*0.779);\n' + 'g2 = 0.25+0.25*sin(time*0.707);\n' + 'b2 = 0.25+0.25*sin(time*0.747);'),

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
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.020068,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.01*Math.sin((0.679*m.q8))));
m.y = (0.5-(0.01*Math.cos((0.877*m.q8))));
m.r = (0.25+(0.25*Math.sin((m.time*0.5679))));
m.g = (0.25+(0.25*Math.sin((m.time*0.4079))));
m.b = (0.25+(0.25*Math.sin((m.time*1.1339))));
m.r2 = (0.25+(0.25*Math.sin((m.time*0.9979))));
m.g2 = (0.25+(0.25*Math.sin((m.time*0.891))));
m.b2 = (0.25+(0.25*Math.sin((m.time*0.713))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.01*sin(0.679*q8);\n' + 'y = 0.5 - 0.01*cos(0.877*q8);\n' + 'r = 0.25+0.25*sin(time*0.5679);\n' + 'g = 0.25+0.25*sin(time*0.4079);\n' + 'b = 0.25+0.25*sin(time*1.1339);\n' + 'r2 = 0.25+0.25*sin(time*0.9979);\n' + 'g2 = 0.25+0.25*sin(time*0.891);\n' + 'b2 = 0.25+0.25*sin(time*0.713);'),

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
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.020068,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.01*Math.sin((0.916*m.q8))));
m.y = (0.5-(0.01*Math.cos((0.977*m.q8))));
m.r = (0.25+(0.25*Math.sin((m.time*1.1679))));
m.g = (0.25+(0.25*Math.sin((m.time*1.18079))));
m.b = (0.25+(0.25*Math.sin((m.time*1.17339))));
m.r2 = (0.25+(0.25*Math.sin((m.time*1.16979))));
m.g2 = (0.25+(0.25*Math.sin((m.time*1.1849))));
m.b2 = (0.25+(0.25*Math.sin((m.time*1.81079))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.01*sin(0.916*q8);\n' + 'y = 0.5 - 0.01*cos(0.977*q8);\n' + 'r = 0.25+0.25*sin(time*1.1679);\n' + 'g = 0.25+0.25*sin(time*1.18079);\n' + 'b = 0.25+0.25*sin(time*1.17339);\n' + 'r2 = 0.25+0.25*sin(time*1.16979);\n' + 'g2 = 0.25+0.25*sin(time*1.1849);\n' + 'b2 = 0.25+0.25*sin(time*1.81079);'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = 0.0 + 0.000*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );\n' + 'wave_g = 0.0 + 0.000*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );\n' + 'wave_b = 0.0 + 0.000*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );\n' + 'zoom = zoom + 0.01*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );\n' + 'rot = rot + 0.010*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'warp=0;\n' + 'zoom =1;\n' + 'rot =0;\n' + 'cx=0.5;\n' + 'cy=0.5;\n' + 'q1 = 0.5 + 0.1*sin(time);\n' + 'q2 = 0.5 - 0.1*cos(time);\n' + 'wave_a =0;\n' + 'decay=1;\n' + 'q8 = oldq8+ 0.0005*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 =q8;\n' + 'mybass  = mybass + 0.01*(bass + bass_att);\n' + 'rot =1 + 0.15*sin(mybass*0.1789);\n' + 'zoom = 1.6 + 0.1*sin(mybass*0.786);\n' + 'musictime=musictime+(mid*mid*mid)*0.01;\n' + 'xpos=sin(musictime*0.6)*0.1;\n' + 'ypos=sin(musictime*0.4)*0.1;\n' + 'q4=xpos;\n' + 'q5=ypos;'),
	'pixel_eqs_str' : ('ag=atan( (y-0.5+q5)/(x-0.5-q4) );\n' + 'myx = (x-q1)*2;\n' + 'myy= (y-q2)*2;\n' + 'myrad =( (myx*myx)/(ag*6)) + ((myy*myy)/(ag*6));\n' + 'dx = 0.1*(myy/(myrad+1));\n' + 'dy = -0.1*(myx/(myrad+1));'),
};

return pmap;
});
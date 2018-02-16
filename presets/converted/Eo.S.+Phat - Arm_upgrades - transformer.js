define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 1.0,
		mv_x : 0.0,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 0.0,
		wave_scale : 0.01,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		ib_size : 0.05,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.999998,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.001822,
		ob_size : 0.05,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.7,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 13.290894,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : -0.28,
		cx : 0.5,
		dy : -0.32,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.0,
		invert : 1.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : -1.0,
		decay : 0.94,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q4 = 0;
m.q5 = 0;
m.q8 = 0;
m.musictime = 0;
m.vol = 0;
m.ypos = 0;
m.xpos = 0;
m.zoom = 1;
m.xpos = 0;
m.ypos = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 1;
m.vol = (((m.bass+m.mid)+m.treb)*0.25);
m.vol = (m.vol*m.vol);
m.mv_r = (0.5+(0.4*Math.sin((m.time*1.324))));
m.mv_g = (0.5+(0.4*Math.cos((m.time*1.371))));
m.musictime = (m.musictime+(m.vol*div(44,m.fps)));
m.q4 = 0;
m.q5 = 0;
m.dx = (Math.sin((m.musictime*0.1))*0.07);
m.dy = (Math.cos((m.musictime*0.069))*0.01);
m.q1 = ((Math.sin((m.musictime*0.001))*0.4)+0.5);
m.q2 = ((Math.cos((m.musictime*0.001))*0.5)+0.5);
m.q8 = m.musictime;
m.zoom = 0.8;
m.monitor = m.rot;
m.musictime = (m.musictime+(m.mid*0.1));
m.xpos = (Math.sin((m.musictime*0.1))*0.2);
m.ypos = (Math.cos((m.musictime*0.1))*0.2);
m.q4 = m.xpos;
m.q5 = m.ypos;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
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
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.size = 0;
m.flux = 0;
m.n = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.size = 0.165;
m.x = ((Math.sin(m.n)*m.size)+0.5);
m.y = (((Math.cos(m.n)*m.size)*1.3333)+0.5);
m.flux = ((Math.sin(((m.n*2)-m.time))*0.5)+0.5);
m.r = ((Math.sin(m.n)*0.5)+0.5);
m.g = ((Math.sin((m.n+2.1))*0.5)+0.5);
m.b = ((Math.sin((m.n+4.2))*0.5)+0.5);
m.r = (m.r*m.flux);
m.g = (m.g*m.flux);
m.b = (m.b*m.flux);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'size=0.165;\n' + 'x=sin(n)*size + 0.5;\n' + 'y=cos(n)*size*1.3333 + 0.5;\n' + 'flux=sin(n*2-time)*0.5+0.5;\n' + 'r=sin(n)*0.5 + 0.5;\n' + 'g=sin(n+2.1)*0.5+0.5;\n' + 'b=sin(n+4.2)*0.5 + 0.5;\n' + 'r=r*flux;\n' + 'g=g*flux;\n' + 'b=b*flux;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.size = 0;
m.flux = 0;
m.n = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.size = 0.165;
m.x = ((Math.sin(m.n)*m.size)+0.5);
m.y = (((Math.cos(m.n)*m.size)*1.3333)+0.5);
m.flux = ((Math.sin(((m.n*2)-m.time))*0.5)+0.5);
m.r = ((Math.sin(m.n)*0.5)+0.5);
m.g = ((Math.sin((m.n+2.1))*0.5)+0.5);
m.b = ((Math.sin((m.n+4.2))*0.5)+0.5);
m.r = (m.r*m.flux);
m.g = (m.g*m.flux);
m.b = (m.b*m.flux);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'size=0.165;\n' + 'x=sin(n)*size + 0.5;\n' + 'y=cos(n)*size*1.3333 + 0.5;\n' + 'flux=sin(n*2-time)*0.5+0.5;\n' + 'r=sin(n)*0.5 + 0.5;\n' + 'g=sin(n+2.1)*0.5+0.5;\n' + 'b=sin(n+4.2)*0.5 + 0.5;\n' + 'r=r*flux;\n' + 'g=g*flux;\n' + 'b=b*flux;'),

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
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.542785,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+m.q4);
m.y = (0.5+m.q5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=.5+q4;\n' + 'y=.5+q5;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 3.141593,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.020088,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.724343,
			x : 0.5,
			y : 0.5,
			ang : 6.283185,
			sides : 65.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;
m.vol = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = 0.01;
m.x = (0.5-m.q4);
m.y = (0.5-m.q5);
m.vol = ((m.mid*m.mid)+(m.treb*m.treb));
m.vol = (m.vol*above(m.vol, 1));
m.ang = (((Math.sin(div(m.time,2))*0.5)+0.5)*6.28);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=0.01;\n' + 'x=.5-q4;\n' + 'y=.5-q5;\n' + 'vol= (mid*mid+treb*treb);\n' + 'vol=vol* above(vol,1);\n' + 'ang=(sin(time/2)*0.5+0.5)*6.28;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.550441,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.44484,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 13.0,
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
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 14.0,
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
	'init_eqs_str' : ('zoom=1;\n' + 'xpos=0;\n' + 'ypos=0;'),
	'frame_eqs_str' : ('decay=1;\n' + 'vol= (bass+mid+treb)*0.25;\n' + 'vol=vol*vol;\n' + 'mv_r = 0.5 + 0.4*sin(time*1.324);\n' + 'mv_g = 0.5 + 0.4*cos(time*1.371);\n' + 'musictime=musictime+vol*(44/fps);\n' + 'q4=0;\n' + 'q5=0;\n' + 'dx=sin(musictime*0.1)*0.07;\n' + 'dy=cos(musictime*0.069)*0.01;\n' + 'q1=sin(musictime*0.001)*0.4+0.5;\n' + 'q2=cos(musictime*0.001)*0.5+0.5;\n' + 'q8=musictime;\n' + 'zoom=.8;\n' + 'monitor=rot;\n' + 'musictime=musictime+mid*0.1;\n' + 'xpos=sin(musictime*0.1)*0.2;\n' + 'ypos=cos(musictime*0.1)*0.2;\n' + 'q4=xpos;\n' + 'q5=ypos;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.7,
		wave_g : 0.65,
		ib_g : 1.0,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 19.200027,
		wave_scale : 0.01,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 0.999999,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.999998,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.65,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.001807,
		ob_size : 0.0,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 13.290894,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0,
		cx : 0.5,
		dy : -0.32,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : -1.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 1.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q8 = 0;
m.basstime = 0;
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
m.musictime = (m.musictime+m.vol);
m.q4 = 0;
m.q5 = 0;
m.dx = (Math.sin((m.musictime*0.1))*0.07);
m.dy = (Math.cos((m.musictime*0.069))*0.01);
m.q1 = ((Math.sin((m.musictime*0.001))*0.4)+0.5);
m.q2 = ((Math.cos((m.musictime*0.001))*0.5)+0.5);
m.q8 = m.musictime;
m.zoom = 0.4;
m.monitor = m.rot;
m.musictime = (m.musictime+((m.mid*m.mid)*0.003));
m.basstime = (m.basstime+((m.bass*m.bass)*0.03));
m.xpos = (Math.sin((m.musictime*0.6))*0.01);
m.ypos = (Math.sin((m.musictime*0.4))*0.01);
m.q4 = m.xpos;
m.q5 = m.ypos;
m.q6 = m.basstime;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (m.rad+div(m.ang,100));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
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
m.tm = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.size = 0.165;
m.x = 0;
m.y = m.sample;
m.flux = ((Math.sin(((m.n*2)-m.time))*0.5)+0.5);
m.flux = (m.flux*Math.min(((1-(Math.abs((m.y-0.5))*2))*10), 1));
m.tm = (m.time*0.3);
m.r = ((Math.sin((m.n+m.tm))*0.5)+0.5);
m.g = ((Math.sin(((m.n+2.1)+m.tm))*0.5)+0.5);
m.b = ((Math.sin(((m.n+4.2)+m.tm))*0.5)+0.5);
m.r = (m.r*m.flux);
m.g = (m.g*m.flux);
m.b = (m.b*m.flux);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'size=0.165;\n' + 'x=0;\n' + 'y=sample;\n' + 'flux=sin(n*2-time)*0.5+0.5;\n' + 'flux=flux* min( (1-abs(y-0.5)*2)*10 , 1);\n' + 'tm=time*0.3;\n' + 'r=sin(n+tm)*0.5 + 0.5;\n' + 'g=sin(n+2.1+tm)*0.5+0.5;\n' + 'b=sin(n+4.2+tm)*0.5 + 0.5;\n' + 'r=r*flux;\n' + 'g=g*flux;\n' + 'b=b*flux;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
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
m.x = 0.999;
m.y = m.sample;
m.r = 0;
m.g = 0;
m.b = 0;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'size=0.165;\n' + 'x=0.999;\n' + 'y=sample;\n' + 'r=0;\n' + 'g=0;\n' + 'b=0;'),

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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.796877,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.46812,
			x : 0.7,
			y : 0.1,
			ang : 6.220354,
			sides : 3.0,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 4.712389,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.842757,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 0.0,
			rad : 1.198315,
			x : 0.8,
			y : 0.2,
			ang : 4.712389,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = (Math.sin(div(m.time,10))*6.28);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=sin(time/10)*6.28;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 5.654867,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.809917,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.089239,
			x : 0.0,
			y : 0.98,
			ang : 2.890266,
			sides : 23.0,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 5.654867,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.59119,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 0.0,
			rad : 0.599573,
			x : 0.6,
			y : 0.8,
			ang : 5.654867,
			sides : 14.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = (Math.sin(div(m.time,5))*6.28);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=sin(time/5)*6.28;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('zoom=1;\n' + 'xpos=0;\n' + 'ypos=0;'),
	'frame_eqs_str' : ('decay=1;\n' + 'vol= (bass+mid+treb)*0.25;\n' + 'vol=vol*vol;\n' + 'mv_r = 0.5 + 0.4*sin(time*1.324);\n' + 'mv_g = 0.5 + 0.4*cos(time*1.371);\n' + 'musictime=musictime+vol;\n' + 'q4=0;\n' + 'q5=0;\n' + 'dx=sin(musictime*0.1)*0.07;\n' + 'dy=cos(musictime*0.069)*0.01;\n' + 'q1=sin(musictime*0.001)*0.4+0.5;\n' + 'q2=cos(musictime*0.001)*0.5+0.5;\n' + 'q8=musictime;\n' + 'zoom=.4;\n' + 'monitor=rot;\n' + 'musictime=musictime+(mid*mid)*0.003;\n' + 'basstime=basstime+(bass*bass)*0.03;\n' + 'xpos=sin(musictime*0.6)*0.01;\n' + 'ypos=sin(musictime*0.4)*0.01;\n' + 'q4=xpos;\n' + 'q5=ypos;\n' + 'q6=basstime;'),
	'pixel_eqs_str' : ('rot=rad+(ang/100);'),
};

return pmap;
});
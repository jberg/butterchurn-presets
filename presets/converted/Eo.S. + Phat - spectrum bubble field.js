define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 1.0,
		mv_x : 0.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
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
		echo_zoom : 1.970816,
		ob_size : 0.005,
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
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : -1.0,
		decay : 0.94,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q4 = 0;
m.q5 = 0;
m.q8 = 0;
m.musictime = 0;
m.vol = 0;
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
m.q1 = ((Math.sin((m.musictime*0.001))*0.4)+0.5);
m.q2 = ((Math.cos((m.musictime*0.001))*0.5)+0.5);
m.q8 = m.musictime;
m.monitor = m.rot;
m.zoom = 1;
m.dx = 0;
m.dy = 0;
m.cx = (Math.sin((m.time*0.25))+0.5);
m.cy = (Math.sin((m.time*0.125))+0.5);
m.sy = (0.5+(((Math.sin((m.time*0.5))*0.5)+0.5)*0.25));
m.sx = (m.sy*0.95);
m.rot = (Math.sin((m.time*0.31))*0.6);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
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
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.380914,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.028415,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 19.0,
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
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.347837,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.866421,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 24.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.spl = 0;

			m.rkeys = ['spl'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = 0.01;
m.x = (0.5+(Math.sin(m.time)*0.003));
m.y = (0.5+(Math.cos((m.time*3))*0.003));
m.spl = (m.spl-0.01);
m.spl = ifcond(below(m.spl, 0), 1, m.spl);
m.tex_zoom = (1+(1-(m.spl*m.spl)));
m.a = Math.min(1, (m.spl*3));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=0.01;\n' + 'x=.5 + sin(time)*0.003;\n' + 'y=.5 + cos(time*3)*0.003;\n' + 'spl = spl-0.01;\n' + 'spl = if( below(spl,0) , 1 , spl);\n' + 'tex_zoom=1 + (1-spl*spl);\n' + 'a = min( 1, spl*3);'),

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
			tex_zoom : 2.216705,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.449289,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 22.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.sn = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = Math.sin((m.time*0.5));
m.sn = sign(m.tex_ang);
m.tex_ang = (((m.tex_ang*m.tex_ang)*m.sn)*0.5);
m.thickoutline = above(0.9, m.bass);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=sin(time*0.5);\n' + 'sn=sign(tex_ang);\n' + 'tex_ang = tex_ang*tex_ang*sn*0.5;\n' + 'thick=above(.9,bass);'),

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
	'init_eqs_str' : ('zoom=1;\n' + 'xpos=0;\n' + 'ypos=0;'),
	'frame_eqs_str' : ('decay=1;\n' + 'vol= (bass+mid+treb)*0.25;\n' + 'vol=vol*vol;\n' + 'mv_r = 0.5 + 0.4*sin(time*1.324);\n' + 'mv_g = 0.5 + 0.4*cos(time*1.371);\n' + 'musictime=musictime+vol;\n' + 'q4=0;\n' + 'q5=0;\n' + 'q1=sin(musictime*0.001)*0.4+0.5;\n' + 'q2=cos(musictime*0.001)*0.5+0.5;\n' + 'q8=musictime;\n' + 'monitor=rot;\n' + 'zoom=1;\n' + 'dx=0;\n' + 'dy=0;\n' + 'cx=sin(time*0.25) + 0.5;\n' + 'cy=sin(time*0.125) + 0.5;\n' + 'sy=0.5 + (sin(time*0.5)*0.5+0.5)*0.25;\n' + 'sx=sy*0.95;\n' + 'rot=sin(time*0.31)*0.6;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
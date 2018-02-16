define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.63,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 100.0,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.999997,
		ob_r : 0.0,
		sy : 1.001828,
		ib_size : 0.035,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.0,
		ib_r : 1.0,
		mv_b : 0.9,
		echo_zoom : 1.001825,
		ob_size : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 0.010284,
		wave_dots : 0.0,
		mv_g : 0.39,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.7,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.98,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.8,
		ib_a : 0.1,
		wave_b : 0.0,
		ib_b : 0.3,
		mv_r : 0.36,
		rating : 5.0,
		modwavealphastart : 0.88,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tmmod = 0;
m.nx = 0;
m.stm = 0;
m.flip = 0;
m.mir = 0;
m.tm = 0;
m.tmmodb = 0;
m.dtm = 0;
m.mv_x = 64;
m.mv_y = 48;
m.nut = 0;
m.stp = 0;
m.stq = 0;
m.rtp = 0;
m.rtq = 0;
m.wvr = 0;
m.decay = 0;
m.dcsp = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.999;
m.ib_b = (Math.sin(div(m.time,20))+0.5);
m.ib_g = ((Math.cos(div(m.time,15))*0.3)+(0.5*0.5));
m.ib_r = ((Math.sin(div(m.time,17))*0.3)+(0.5*0.5));
m.invert = above(Math.sin(m.time), 0);
m.solarize = above(Math.sin(div(m.time,2)), 0);
m.flip = (m.flip+(0.1*below(m.flip, 1.1)));
m.q1 = m.flip;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.tmmod = Math.sin(div(m.time,1));
m.tmmodb = Math.cos((div(m.time,3)+m.tmmod));
m.tm = ((Math.sin((div(m.time,2)+m.tmmod))*0.20)+0.31);
m.stm = Math.sin(m.tm);
m.mir = (0.45+m.q1);
m.nx = ifcond(above(m.x, m.mir), (-(m.x-m.mir)+m.mir), m.x);
m.warp = ((-2*((((m.dtm*0.5)+0.5)*3)*m.nx))+((((m.stm*0.5)+0.5)*3)*m.y));
m.zoom = (m.stm*m.rad);
m.dx = ifcond(above(m.x, m.mir), ((-m.stm*0.3)*m.y), ((m.stm*0.3)*m.y));
m.sx = ifcond(above(m.x, m.mir), (-Math.sin(div(m.tm,5))+(3*m.rad)), (Math.sin(div(m.tm,5))+(3*m.rad)));
m.sy = (Math.cos(div(m.tm,5))+(3*m.rad));
m.rot = (Math.sin((((m.rad*Math.sin((m.ang*3)))+m.tm)+div(m.time,2)))*1.5);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.7,
			scaling : 100.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.9,
			thick : 1.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (Math.cos(m.time)*0.1);
m.y = (Math.sin(m.time)*0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=cos(time)*0.1;\n' + 'y=sin(time)*0.1;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 81.954445,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wave_x = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.wave_x = 1;
		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('wave_x=1;'),
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
			a : 0.2,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 4.084071,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.1,
			tex_zoom : 0.155277,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.6,
			a2 : 0.2,
			r : 1.0,
			border_g : 1.0,
			rad : 100.0,
			x : 0.5,
			y : 0.5,
			ang : 2.513274,
			sides : 16.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.var = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (Math.sin(m.time)*6);
m.var = (0.12-(above(m.bass, 0.8)*0.2));
m.x = ((Math.sin(m.time)*m.var)+0.5);
m.y = ((Math.cos(m.time)*m.var)+0.5);
m.g = (Math.sin(div(m.time,10))*0.2);
m.r = (Math.cos(div(m.time,12))*0.3);
m.b = (Math.sin(div(m.time,15))*0.4);
m.g2 = (Math.cos(div(m.time,15))*0.3);
m.r2 = (Math.sin(div(m.time,20))*0.1);
m.b2 = (Math.cos(div(m.time,10))*0.2);
m.rad = ((((Math.sin(div(m.time,3))*0.5)+0.5)*7)-0.3);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=sin(time)*6;\n' + 'var=0.12-(above(bass,0.8)*0.2);\n' + 'x=sin(time)*var+.5;\n' + 'y=cos(time)*var+.5;\n' + 'g=sin(time/10)*0.2;\n' + 'r=cos(time/12)*0.3;\n' + 'b=sin(time/15)*0.4;\n' + 'g2=cos(time/15)*0.3;\n' + 'r2=sin(time/20)*0.1;\n' + 'b2=cos(time/10)*0.2;\n' + 'rad=(sin(time/3)*0.5+0.5)*7-0.3;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 6.283185,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 27.429317,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.6,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.7214,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.6,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (Math.cos(m.time)*6);
m.sides = (20-(div(((m.bass+m.mid)+m.treb),3)*15));
m.rad = (0.721+(div(((m.bass+m.mid)+m.treb),3)*-0.2));
m.x = ((Math.cos(m.time)*0.3)+0.5);
m.y = ((Math.sin(m.time)*0.3)+0.5);
m.r = (((Math.sin(div(m.time,2))*0.5)+0.5)+0.7);
m.g = (((Math.cos(div(m.time,2))*0.5)+0.5)+0.3);
m.b = (((Math.sin(div(m.time,2))*0.5)+0.5)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=cos(time)*6;\n' + 'sides=20-((bass+mid+treb)/3)*15;\n' + 'rad=.721+(((bass+mid+treb)/3)*-0.2);\n' + 'x=cos(time)*0.3+0.5;\n' + 'y=sin(time)*0.3+0.5;\n' + 'r=(sin(time/2)*0.5+0.5)+0.7;\n' + 'g=(cos(time/2)*0.5+0.5)+0.3;\n' + 'b=(sin(time/2)*0.5+0.5)+0.5;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 6.283185,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.550444,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.20929,
			x : 0.5,
			y : 0.5,
			ang : 1.256637,
			sides : 25.0,
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
			b : 0.0,
			tex_ang : 0.628319,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.608039,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.966655,
			x : 0.5,
			y : 0.5,
			ang : 0.6283,
			sides : 20.0,
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
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=0.999;\n' + 'ib_b=(sin(time/20))+0.5;\n' + 'ib_g=(cos(time/15)*0.3)+0.5*0.5;\n' + 'ib_r=(sin(time/17)*0.3)+0.5*0.5;\n' + 'invert=above(sin(time),0);\n' + 'solarize=above(sin(time/2),0);\n' + 'flip=flip+0.1 * below(flip, 1.1);\n' + 'q1=flip;'),
	'pixel_eqs_str' : ('tmmod=sin(time/1);\n' + 'tmmodb=cos(time/3 +tmmod);\n' + 'tm=sin(time/2 + tmmod)*0.20 + 0.31;\n' + 'stm=sin(tm);\n' + 'mir=0.45 + q1 ;\n' + 'nx=if( above(x,mir), -(x-mir) + mir, x);\n' + 'warp=-2*(((dtm*0.5+0.5)*3)*nx)+(((stm*0.5+0.5)*3)*y);\n' + 'zoom=  stm*rad;\n' + 'dx=if( above(x,mir), -stm*0.3*y, stm*0.3*y);\n' + 'sx=if( above(x,mir), -sin(tm/5)+3*rad, sin(tm/5)+3*rad);\n' + 'sy=cos(tm/5)+3*rad;\n' + 'rot=sin( rad*sin(ang*3) +tm+ time/2)*1.5;'),
};

return pmap;
});
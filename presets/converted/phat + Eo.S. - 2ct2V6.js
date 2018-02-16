define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.63,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 0.01,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 0.625316,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.001827,
		ob_r : 0.0,
		sy : 1.0018,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 8.311067,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.7,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 0.9,
		echo_zoom : 1.008151,
		ob_size : 0.03,
		wave_smoothing : 0.9,
		warpanimspeed : 0.010284,
		wave_dots : 0.0,
		mv_g : 0.39,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 1.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0,
		cx : 0.5,
		dy : 1.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.7,
		mv_l : 0.0,
		invert : 0.0,
		rot : 1.0,
		wave_thick : 1.0,
		modwavealphaend : 1.98,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.8,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.3,
		mv_r : 0.36,
		rating : 0.0,
		modwavealphastart : 0.88,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.var1 = 0;
m.var2 = 0;
m.adv = 0;
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
m.decay = 0.70;
m.zoom = 0.99;
m.dx = 0;
m.dy = 0;
m.sx = 1;
m.sy = 1;
m.rot = (Math.sin(div(m.time,5))*0.02);
m.ob_r = (0.360+(((Math.sin(div(m.time,5))*0.5)+0.5)*0.6));
m.ob_g = (0.490+(((Math.sin(div(m.time,14))*0.5)+0.5)*0.5));
m.ob_b = (0.500+(((Math.sin(div(m.time,18))*0.5)+0.5)*0.5));
		m.rkeys = ['dy','dx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.adv = Math.min(((m.bass*m.bass)*m.bass), 1);
m.warp = ((-1*(((((Math.sin((m.time*3))*0.5)+0.5)*3)*(m.x-0.5))*2))+(((((Math.cos((m.time*3))*0.5)+0.5)*3)*(m.y-0.5))*2));
m.warp = (m.warp*m.adv);
m.var1 = ((above((Math.sin((m.time*3))*10), 9)*Math.sin((m.time*6)))*0.2);
m.var2 = above(Math.sin((div(m.ang,6)+(m.time*2))), 0.6);
m.rot = (m.var1*m.var2);
m.dx = (m.dx+0.001);
m.dy = (m.dy+0.001);
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.628319,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.571746,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.69,
			b2 : 1.0,
			a2 : 0.48,
			r : 1.0,
			border_g : 0.81,
			rad : 1.527749,
			x : 0.5,
			y : 0.5,
			ang : 0.1884,
			sides : 16.0,
			border_r : 0.59,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (0.190+(Math.sin(m.time)*0.190));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=.190+sin(time)*.190;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.7,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.6,
			textured : 1.0,
			g2 : 0.4,
			tex_zoom : 0.903621,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.6,
			b2 : 0.5,
			a2 : 1.0,
			r : 0.36,
			border_g : 1.0,
			rad : 0.506255,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.6,
			},
		'init_eqs' : function(m) {
m.adv = 0;

			m.rkeys = ['adv'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (Math.cos(m.time)*6);
m.sides = (20-(div(((m.bass+m.mid)+m.treb),3)*15));
m.adv = (m.adv+div((m.bass*m.bass),17));
m.x = ((Math.cos(m.adv)*0.3)+0.5);
m.y = ((Math.sin(m.adv)*0.3)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=cos(time)*6;\n' + 'sides=20-((bass+mid+treb)/3)*15;\n' + 'adv=adv+(bass*bass)/17;\n' + 'x=cos(adv)*0.3+0.5;\n' + 'y=sin(adv)*0.3+0.5;'),

		},
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
			tex_zoom : 1.028414,
			additive : 1.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.110462,
			x : 0.3,
			y : 0.7,
			ang : 0.0,
			sides : 16.0,
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
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=0.70;\n' + 'zoom=.99;\n' + 'dx=0;\n' + 'dy=0;\n' + 'sx=1;\n' + 'sy=1;\n' + 'rot=sin(time/5)*0.02;\n' + 'ob_r=.360+((sin(time/5)*0.5+0.5)*.6);\n' + 'ob_g=.490+((sin(time/14)*0.5+0.5)*.5);\n' + 'ob_b=.500+((sin(time/18)*0.5+0.5)*.5);'),
	'pixel_eqs_str' : ('adv=min( (bass*bass*bass), 1);\n' + 'warp=-1*((( sin(time*3) *0.5+0.5)*3)* (x-0.5)*2 )+((( cos(time*3) *0.5+0.5)*3)* (y-0.5)*2 );\n' + 'warp=warp*adv;\n' + 'var1=above(sin(time*3)*10,9)*sin(time*6)*0.2;\n' + 'var2=above(sin(ang/6+time*2),0.6);\n' + 'rot=var1*var2;\n' + 'dx=dx+0.001;\n' + 'dy=dy+0.001;'),
};

return pmap;
});
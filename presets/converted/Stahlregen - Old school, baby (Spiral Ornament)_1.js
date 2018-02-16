define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.56,
		wave_g : 1.0,
		ib_g : 0.3,
		mv_x : 12.0,
		warpscale : 0.01,
		brighten : 1.0,
		mv_y : 9.0,
		wave_scale : 0.081,
		echo_alpha : 1.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.18,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.3,
		mv_b : 1.0,
		echo_zoom : 1.193,
		ob_size : 0.025,
		b1ed : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 0.905,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 1.0,
		zoom : 1.05101,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.25,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.985,
		wave_a : 1.006,
		ob_g : 0.0,
		ib_a : 0.03,
		wave_b : 1.0,
		ib_b : 0.3,
		mv_r : 1.0,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.res = 0;
m.diff = 0;
m.vol = 0;
m.beat = 0;
m.x = 0;
m.y = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (0.5+(0.5*Math.sin((m.time*1.12))));
m.wave_g = (0.5+(0.5*Math.sin((m.time*1.22))));
m.wave_b = ((0.5*0.5)*Math.sin((m.time*1.32)));
m.ib_r = m.wave_b;
m.ib_g = m.wave_r;
m.ib_b = m.wave_g;
m.vol = (((m.bass*8)+(m.mid*4))+(m.treb*2));
m.vol = (m.vol*above(m.vol, 17));
m.monitor = m.vol;
m.beat = above(m.vol, m.res);
m.diff = (((1-m.beat)*m.diff)+(m.beat*(m.vol-m.res)));
m.res = ((m.beat*(m.vol+(2*m.diff)))+((1-m.beat)*(m.res-div((((m.diff*0.04)+0.12)*60),m.fps))));
m.res = Math.max(0, m.res);
m.monitor = m.res;
m.x = ifcond(m.beat, ((Math.floor(rand(60))*0.01)+0.2), m.x);
m.y = ifcond(m.beat, ((Math.floor(rand(60))*0.01)+0.2), m.y);
m.wave_mystery = ifcond(above(m.x, m.y), 0, -1);
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
			r2 : 0.98,
			a : 0.98,
			enabled : 1.0,
			b : 0.98,
			tex_ang : 2.38751,
			thickoutline : 0.0,
			g : 0.98,
			textured : 1.0,
			g2 : 0.98,
			tex_zoom : 0.74185,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.98,
			a2 : 0.98,
			r : 0.95,
			border_g : 0.0,
			rad : 0.01,
			x : 0.5,
			y : 0.5,
			ang : 3.95841,
			sides : 6.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.ang+(0.5*m.time));
m.rad = (0.8+(0.1*m.bass_att));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = ang + 0.5*time;\n' + 'rad = 0.8 + 0.1*bass_att;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.3,
			enabled : 1.0,
			b : 0.0,
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
			rad : 0.12824,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.19285,
			x : 0.5,
			y : 1.0,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 2.0,
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
	'frame_eqs_str' : ('wave_r = 0.5+0.5*sin(time*1.12);\n' + 'wave_g = 0.5+0.5*sin(time*1.22);\n' + 'wave_b = 0.5*0.5*sin(time*1.32);\n' + 'ib_r = wave_b;\n' + 'ib_g = wave_r;\n' + 'ib_b = wave_g;\n' + 'vol = bass*8 + mid*4 + treb*2;\n' + 'vol = vol*above(vol,17);\n' + 'monitor = vol;\n' + 'beat = above(vol,res);\n' + 'diff = (1-beat)*diff + beat*(vol-res);\n' + 'res = beat*(vol+2*diff) + (1-beat)*(res - (diff*0.04 + 0.12)*60/fps);\n' + 'res = max(0,res);\n' + 'monitor = res;\n' + 'x = if(beat,int(rand(60))*0.01 + 0.2,x);\n' + 'y = if(beat,int(rand(60))*0.01 + 0.2,y);\n' + 'wave_mystery = if(above(x,y),0,-1);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
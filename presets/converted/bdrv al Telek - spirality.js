define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 33.152,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 28.799997,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.001,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.006,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 1.0,
		ob_size : 0.0065,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		nwrapmode_x : 1.0,
		cx : 0.5,
		dy : 0.0,
		nwrapmode_y : 1.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		nechowrap_x : 0.0,
		mv_l : 2.5,
		invert : 1.0,
		rot : 0.0,
		wave_thick : 1.0,
		nechowrap_y : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 1.0,
		decay : 1.0,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.nn = 0;
m.q1 = 0;
m.qq = 0;
m.xx = 0;
m.q2 = 0;
m.q3 = 0;
m.q = 0;
m.qqq = 0;
m.beat = 0;
m.x = 0;
m.y = 0;
m.z = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.xx = ((Math.sin((m.time*0.13))*0.5)+0.5);
m.beat = (above((m.bass*m.bass_att), 3)+bnot(m.xx));
m.x = ifcond(m.beat, Math.max(Math.min((((rand(2)*0.2)-0.1)+m.x), 1), 0), m.x);
m.y = ifcond(m.beat, Math.max(Math.min((((rand(2)*0.2)-0.1)+m.y), 1), 0), m.y);
m.z = (((m.z-(m.beat*0.15))*0.8)+0.2);
m.wave_x = m.x;
m.wave_y = m.y;
m.wave_mystery = ((m.xx*1.7)-0.5);
m.ob_a = m.beat;
m.wave_r = ((Math.sin((m.time*0.197))*0.5)+0.5);
m.wave_g = ((Math.cos((m.time*0.201))*0.5)+0.5);
m.wave_b = ((Math.sin((m.time*0.215))*0.5)+0.5);
m.xx = ((Math.sin((m.xx*62.82))*0.5)+0.5);
m.wave_r = (m.xx+((1-m.xx)*m.wave_r));
m.wave_g = (m.xx+((1-m.xx)*m.wave_g));
m.wave_b = (m.xx+((1-m.xx)*m.wave_b));
m.monitor = m.zoom;
m.q = ifcond(m.beat, rand(100), (m.q+0.01));
m.q1 = m.q;
m.qq = ifcond(m.beat, rand(100), (m.q-0.01));
m.q2 = m.qq;
m.qqq = ifcond(m.beat, rand(3), (m.q*0.95));
m.q3 = m.qqq;
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.nn = (mod((m.time*0.2),7)+1);
m.nn = 7;
m.cx = div((Math.floor((m.x*m.nn))+0.5),m.nn);
m.cy = div((Math.floor((m.y*m.nn))+0.5),m.nn);
m.dx = ((m.q1+Math.floor(((m.x*m.nn)-2)))*0.0001);
m.dy = ((m.q2+Math.floor(((m.y*m.nn)-2)))*0.0001);
m.dx = (Math.sin((m.q1+(Math.floor((m.x*m.nn))*(m.q2+1))))*0.01);
m.dy = (Math.sin((m.q2+(Math.floor((m.y*m.nn))*(m.q1+1))))*0.01);
m.rot = (Math.floor((Math.sin((m.q3+((m.cx+m.cy)*10)))*2))*0.06);
m.rot = (m.rot+ifcond(equal(Math.tan((m.ang*2)), 0), -m.rot, m.rad));
m.zoom = (m.zoom+(0.10*Math.sin(((m.rad+(0.4*m.time))+5))));
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
			bdrawback : 0.0,
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
			bdrawback : 0.0,
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
			bdrawback : 0.0,
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
			bdrawback : 0.0,
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
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.1,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 1.8,
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.1,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 1.8,
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.1,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 1.8,
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
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.1,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
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
	'frame_eqs_str' : ('xx = sin(time*.13)*.5+.5;\n' + 'beat = above(bass*bass_att,3)+bnot(xx);\n' + 'x = if(beat, max(min(rand( 2 )*.2 -.1+x, 1), 0), x);\n' + 'y = if(beat, max(min(rand( 2 )*.2 -.1+y, 1), 0), y);\n' + 'z = (z-beat*.15)*.8+.2;\n' + 'wave_x = x;\n' + 'wave_y = y;\n' + 'wave_mystery = xx*1.7-.5;\n' + 'ob_a = beat;\n' + 'wave_r= sin(time*.197)*.5+.5;\n' + 'wave_g=cos(time*.201)*.5+.5;\n' + 'wave_b=sin(time*.215)*.5+.5;\n' + 'xx=sin(xx*62.82)*.5+.5;\n' + 'wave_r = xx+(1-xx)*wave_r;\n' + 'wave_g = xx+(1-xx)*wave_g;\n' + 'wave_b = xx+(1-xx)*wave_b;\n' + 'monitor = zoom;\n' + 'q = if(beat,rand(100),q+.01);\n' + 'q1 =q;\n' + 'qq = if(beat,rand(100),q-.01);\n' + 'q2 =qq;\n' + 'qqq = if(beat,rand(3),q*.95);\n' + 'q3 =qqq;'),
	'pixel_eqs_str' : ('nn = (time*.2)%7+1;\n' + 'nn = 7;\n' + 'cx = (int(x*nn)+.5)/nn;\n' + 'cy = (int(y*nn)+.5)/nn;\n' + 'dx = (q1+int(x*nn-2))*.0001;\n' + 'dy = (q2+int(y*nn-2))*.0001;\n' + 'dx = sin(q1+int(x*nn)*(q2+1))*.01;\n' + 'dy = sin(q2+int(y*nn)*(q1+1))*.01;\n' + 'rot = int(sin(q3+(cx+cy)*10)*2)*.06;\n' + 'rot = rot + if(equal(tan(ang*2),0),-rot,rad);\n' + 'zoom=zoom+.10*sin(rad+.4*time+5);'),
};

return pmap;
});
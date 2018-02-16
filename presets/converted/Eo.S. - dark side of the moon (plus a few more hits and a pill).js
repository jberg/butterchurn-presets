define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.4,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.011726,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.11,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.11,
		echo_zoom : 1.006596,
		ob_size : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 0.010284,
		wave_dots : 1.0,
		mv_g : 0.21,
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
		ob_b : 0.1,
		mv_l : 2.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.96,
		wave_a : 0.019788,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.0,
		mv_r : 0.3,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.speed = 0;
m.speedinv = 0;
m.qa = 0;
m.qb = 0;
m.qc = 0;
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
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.96;
m.speed = 0.900;
m.speedinv = (1-m.speed);
m.q1 = ((m.qa*m.speed)+(m.bass*m.speedinv));
m.q2 = ((m.qb*m.speed)+(m.mid*m.speedinv));
m.q3 = ((m.qc*m.speed)+(m.treb*m.speedinv));
m.qa = m.q1;
m.qb = m.q2;
m.qc = m.q3;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (Math.sin(((m.rad*14)+m.time))*0.001);
m.rot = (m.rot+(Math.sin(((m.ang*8)+m.time))*0.001));
m.dx = (Math.sin(((m.rad*48)+m.time))*0.002);
m.dy = (Math.cos(((m.ang*48)+m.time))*0.002);
m.zoom = ((1+(Math.sin(((m.x*44)+m.time))*0.034))+(Math.cos(((m.y*44)+m.time))*0.034));
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
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.16,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.qtime = 0;

			m.rkeys = ['qtime'];
			return m;
		},
		'frame_eqs' : function(m) {
m.qtime = (m.qtime+m.q1);
m.x = (0.5+div(Math.sin(div(m.qtime,38)),3));
m.y = (0.5+div(Math.cos(div(m.qtime,38)),3));
m.rad = div(m.q1,2);
m.ang = (m.q1*4);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('qtime=qtime+q1;\n' + 'x=0.5 + sin(qtime/38)/3;\n' + 'y=0.5 + cos(qtime/38)/3;\n' + 'rad=q1/2;\n' + 'ang=q1*4;'),

		},
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
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.1,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.35,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.qtime = 0;

			m.rkeys = ['qtime'];
			return m;
		},
		'frame_eqs' : function(m) {
m.qtime = (m.qtime+m.q2);
m.x = (0.5+div(Math.sin(div(m.qtime,38)),3.3));
m.y = (0.5+div(Math.cos(div(m.qtime,38)),3.3));
m.rad = div(m.q2,2);
m.ang = (-m.q2*2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('qtime=qtime+q2;\n' + 'x=0.5 + sin(qtime/38)/3.3;\n' + 'y=0.5 + cos(qtime/38)/3.3;\n' + 'rad=q2/2;\n' + 'ang=-q2*2;'),

		},
		{
		'baseVals' : {
			r2 : 0.1,
			a : 1.0,
			enabled : 1.0,
			b : 0.96,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.97,
			textured : 0.0,
			g2 : 0.05,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.59,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.qtime = 0;

			m.rkeys = ['qtime'];
			return m;
		},
		'frame_eqs' : function(m) {
m.qtime = (m.qtime+m.q3);
m.x = (0.5+div(Math.sin(div(m.qtime,38)),3.8));
m.y = (0.5+div(Math.cos(div(m.qtime,38)),3.8));
m.rad = div(m.q3,2);
m.ang = (m.q3*5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('qtime=qtime+q3;\n' + 'x=0.5 + sin(qtime/38)/3.8;\n' + 'y=0.5 + cos(qtime/38)/3.8;\n' + 'rad=q3/2;\n' + 'ang=q3*5;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.07,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.09,
			tex_zoom : 0.712971,
			additive : 0.0,
			border_a : 0.15,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.37,
			r : 1.0,
			border_g : 1.0,
			rad : 0.849364,
			x : 0.499999,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.brr = 0;
m.flip = 0;
m.fls = 0;
m.br = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = div(m.time,2);
m.r2 = ((Math.sin(m.time)*0.5)+0.5);
m.g2 = ((Math.sin((m.time+(3.14*0.33)))*0.5)+0.5);
m.b2 = ((Math.sin((m.time+(3.14*0.66)))*0.5)+0.5);
m.fls = ((Math.sin(div(m.time,1))*0.5)+0.6);
m.flip = ((m.flip+m.fls)*below(m.flip, 1.1));
m.additive = m.flip;
m.br = (Math.sin(div(m.time,1))*16);
m.brr = (-1+m.br);
m.sides = Math.min(Math.max(m.brr, 3), 8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=time/2;\n' + 'r2=sin(time)*0.5 + 0.5;\n' + 'g2=sin(time + 3.14*0.33)*0.5 + 0.5;\n' + 'b2=sin(time + 3.14*0.66)*0.5 + 0.5;\n' + 'fls=sin(time/1)*0.5+0.6;\n' + 'flip=(flip+fls) * below(flip,1.1);\n' + 'additive=flip;\n' + 'br=(sin(time/1) ) * 16;\n' + 'brr=-1+br;\n' + 'sides= min( max(brr,3), 8);'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;\n' + 'q1=0;\n' + 'q2=0;\n' + 'q3=0;'),
	'frame_eqs_str' : ('decay=0.96;\n' + 'speed=0.900;\n' + 'speedinv=1-speed;\n' + 'q1=(qa*speed + bass*speedinv);\n' + 'q2=(qb*speed + mid *speedinv);\n' + 'q3=(qc*speed + treb*speedinv);\n' + 'qa=q1;\n' + 'qb=q2;\n' + 'qc=q3;'),
	'pixel_eqs_str' : ('rot=sin(rad*14 +time)*0.001;\n' + 'rot=rot + sin(ang*8 +time)*0.001;\n' + 'dx=sin(rad*48 + time)*0.002;\n' + 'dy=cos(ang*48 +time)*0.002;\n' + 'zoom=1 + sin(x*44 + time)*0.034 + cos(y*44 + time)*0.034;'),
};

return pmap;
});
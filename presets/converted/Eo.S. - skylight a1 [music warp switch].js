define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.4,
		ib_g : 0.0,
		mv_x : 31.999994,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 24.000004,
		wave_scale : 0.011726,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.11,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.02,
		mv_dy : -0.02,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.300001,
		echo_zoom : 1.006596,
		ob_size : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 0.010284,
		wave_dots : 1.0,
		mv_g : 0.48,
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
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.96,
		wave_a : 0.019788,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.3,
		ib_b : 0.0,
		mv_r : 0.49,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.speed = 0;
m.flux = 0;
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
m.decay = 0.99;
m.zoom = 1.000;
m.speed = 0.80;
m.speedinv = (1-m.speed);
m.q1 = ((m.qa*m.speed)+(m.bass*m.speedinv));
m.q2 = ((m.qb*m.speed)+(m.mid*m.speedinv));
m.q3 = ((m.qc*m.speed)+(m.treb*m.speedinv));
m.qa = m.q1;
m.qb = m.q2;
m.qc = m.q3;
m.flux = Math.sin(div(m.time,2));
m.q4 = ((m.flux*0.5)+0.5);
m.q5 = m.flux;
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.942478,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.534261,
			additive : 0.0,
			border_a : 0.17,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.670888,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.advs = 0;
m.q3 = 0;
m.q5 = 0;
m.flux = 0;
m.fluxs = 0;
m.adv = 0;
m.advflux = 0;

			m.rkeys = ['adv'];
			return m;
		},
		'frame_eqs' : function(m) {
m.flux = (m.q5*9);
m.fluxs = Math.max(m.flux, 0);
m.fluxs = Math.min(m.fluxs, 1);
m.advflux = ((m.q3*m.fluxs)+(-m.q3*(1-m.fluxs)));
m.adv = (m.adv+m.advflux);
m.advs = div(m.adv,256);
m.ang = m.advs;
m.rad = (1.671+div(m.q3,25));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('flux=q5*9;\n' + 'fluxs=max(flux,0);\n' + 'fluxs=min(fluxs,1);\n' + 'advflux=(q3*fluxs) + (-q3 * (1-fluxs));\n' + 'adv=adv+advflux;\n' + 'advs=adv/256;\n' + 'ang=advs;\n' + 'rad=1.671 + q3/25;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
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

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.y = (0.1+(m.q2*0.4));
m.rad = div(m.q2,2);
m.ang = (-m.q2*2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('y=0.1 + q2*0.4;\n' + 'rad=q2/2;\n' + 'ang=-q2*2;'),

		},
		{
		'baseVals' : {
			r2 : 0.1,
			a : 1.0,
			enabled : 0.0,
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

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.y = (0.1+(m.q3*0.4));
m.rad = div(m.q3,2);
m.ang = (m.q3*5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('y=0.1 + q3*0.4;\n' + 'rad=q3/2;\n' + 'ang=q3*5;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.3,
			enabled : 1.0,
			b : 0.98,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.09,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.98,
			border_g : 1.0,
			rad : 0.1,
			x : 0.84,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = ((Math.sin(div(m.time,2))*0.4)+0.5);
m.y = ((Math.sin(m.time)*0.4)+0.5);
m.rad = div((m.q1*m.q1),2);
m.ang = (m.q1*4);
m.r = (0.70+(Math.sin(div(m.time,2))*0.50));
m.g = (0.70+(Math.sin((div(m.time,2)+2))*0.50));
m.b = (0.70+(Math.sin((div(m.time,2)+4))*0.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=sin(time/2)*0.4 + 0.5;\n' + 'y=sin(time)*0.4+0.5;\n' + 'rad=(q1*q1)/2;\n' + 'ang=q1*4;\n' + 'r=0.70 + (sin(time/2))*0.50;\n' + 'g=0.70 + (sin(time/2 + 2)) * 0.50;\n' + 'b=0.70 + (sin(time/2 + 4)) * 0.5;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;\n' + 'q1=0;\n' + 'q2=0;\n' + 'q3=0;'),
	'frame_eqs_str' : ('decay=0.99;\n' + 'zoom=1.000;\n' + 'speed=0.80;\n' + 'speedinv=1-speed;\n' + 'q1=(qa*speed + bass*speedinv);\n' + 'q2=(qb*speed + mid *speedinv);\n' + 'q3=(qc*speed + treb*speedinv);\n' + 'qa=q1;\n' + 'qb=q2;\n' + 'qc=q3;\n' + 'flux=sin(time/2);\n' + 'q4=flux * 0.5 + 0.5;\n' + 'q5=flux;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
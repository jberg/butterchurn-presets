define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 4.778029,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.0101,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 0.9995,
		ob_size : 0.005,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999513,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.1,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001185,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.5*Math.sin((m.time*1.13))));
m.wave_g = (m.wave_g+(0.5*Math.sin((m.time*1.23))));
m.wave_b = (m.wave_b+(0.5*Math.sin((m.time*1.33))));
m.wave_x = (m.wave_x+(0.2*Math.sin((0.32*m.time))));
m.wave_y = (m.wave_y+(0.2*Math.cos((0.32*m.time))));
m.ob_r = m.wave_r;
m.ob_g = m.wave_g;
m.ob_b = m.wave_b;
m.ob_r = 0.3;
m.ob_g = 0.3;
m.ob_b = 0.3;
		m.rkeys = ['sy','sx','rot','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom-(0.04*((Math.sin((8+((6*Math.sin((0.2*m.time)))*m.ang)))+(Math.sin(Math.sin((((m.time*2)*Math.sin(m.time))*m.rad)))*0.3))-(Math.cos(m.rad)*0.1))));
m.rot = (m.rot+((0.3*Math.abs((0.746-m.rad)))*Math.sin(((2.2*(0.5-m.rad))+(5.7*Math.sin((0.1*m.time)))))));
m.sx = (m.sx-(((0.01*((0.99*1)-m.rad))*Math.sin((0.733*m.time)))*below(Math.sin(m.time), 0)));
m.sy = (m.sy-(((0.01*((0.99*1)-m.rad))*Math.cos((0.953*m.time)))*above(Math.sin(m.time), 0)));
m.zoom = (m.zoom+((0.015*((0.5*Math.abs(3))-m.rad))*below(m.rad, 1.5)));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.ab = 0;
m.yang = 0;
m.xang = 0;
m.ag = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.vb = 0;
m.fov = 0;
m.mz = 0;
m.dis = 0;
m.tic = 0;
m.ar = 0;
m.vg = 0;
m.vol = 0;
m.ti = 0;
m.vr = 0;
m.tir = 0;
m.sp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tic = Math.min((m.time-m.tir), 0.1);
m.tir = m.time;
m.ti = ((m.ti+(m.tic*0.5))+((below(((m.vr+m.vg)+m.vb), 0.4)*m.tic)*8));
m.vr = (0.75+(0.25*Math.sin(((m.ti*1.132)+1))));
m.vg = (0.75+(0.25*Math.sin(((m.ti*1.121)+1))));
m.vb = (0.75+(0.25*Math.sin(((m.ti*1.187)+1))));
m.ar = m.vr;
m.ag = m.vg;
m.ab = m.vb;
		return m;
	},
		'point_eqs' : function(m) {
m.sp = (m.sample*10);
m.ti = m.time;
m.ox = ((((rand(1001)*0.001)+(rand(1001)*0.001))-(rand(1001)*0.001))-(rand(1001)*0.001));
m.oy = ((((rand(1001)*0.001)+(rand(1001)*0.001))-(rand(1001)*0.001))-(rand(1001)*0.001));
m.oz = ((((rand(1001)*0.001)+(rand(1001)*0.001))-(rand(1001)*0.001))-(rand(1001)*0.001));
m.dis = pow((((m.ox*m.ox)+(m.oy*m.oy))+(m.oz*m.oz)), 0.5);
m.vol = ((m.value1+m.value2)*2);
m.ox = ((sign(m.ox)*pow(m.ox, 4))*m.vol);
m.oy = ((sign(m.oy)*pow(m.oy, 4))*m.vol);
m.oz = ((sign(m.oz)*pow(m.oz, 4))*m.vol);
m.a = (((3.464-m.dis)*0.57735)*0.3);
m.xang = (m.time*0.154);
m.yang = (m.time*0.103);
m.zang = (m.time*0.118);
m.fov = 0.5;
m.mx = ((m.ox*Math.cos(m.yang))+(m.oz*Math.sin(m.yang)));
m.mz = ((-m.ox*Math.sin(m.yang))+(m.oz*Math.cos(m.yang)));
m.ox = m.mx;
m.oz = m.mz;
m.mx = ((m.ox*Math.cos(m.zang))-(m.oy*Math.sin(m.zang)));
m.my = ((m.ox*Math.sin(m.zang))+(m.oy*Math.cos(m.zang)));
m.ox = m.mx;
m.oy = m.my;
m.my = ((m.oy*Math.cos(m.xang))-(m.oz*Math.sin(m.xang)));
m.mz = ((m.oy*Math.sin(m.xang))+(m.oz*Math.cos(m.xang)));
m.oy = m.my;
m.oz = m.mz;
m.oz = (((m.oz-(Math.floor((m.oz*0.2))*5))-5)*2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tic = min(time-tir,.1);\n' + 'tir = time;\n' + 'ti = ti + tic*.5 + below(vr+vg+vb,.4)*tic*8;\n' + 'vr = .75 + .25*sin(ti*1.132 + 1);\n' + 'vg = .75 + .25*sin(ti*1.121 + 1);\n' + 'vb = .75 + .25*sin(ti*1.187 + 1);\n' + 'ar=vr;\n' + 'ag=vg;\n' + 'ab=vb;'),
		'point_eqs_str' : ('sp = sample*10;\n' + 'ti = time;\n' + 'ox = (rand(1001)*.001 + rand(1001)*.001 - rand(1001)*.001 - rand(1001)*.001);\n' + 'oy = (rand(1001)*.001 + rand(1001)*.001 - rand(1001)*.001 - rand(1001)*.001);\n' + 'oz = (rand(1001)*.001 + rand(1001)*.001 - rand(1001)*.001 - rand(1001)*.001);\n' + 'dis = pow(ox*ox + oy*oy + oz*oz,.5);\n' + 'vol = (value1+value2)*2;\n' + 'ox = sign(ox)*pow(ox,4)*vol;\n' + 'oy = sign(oy)*pow(oy,4)*vol;\n' + 'oz = sign(oz)*pow(oz,4)*vol;\n' + 'a = (3.464 - dis)*.57735*.3;\n' + 'xang = time*.154;\n' + 'yang = time*.103;\n' + 'zang = time*.118;\n' + 'fov = .5;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = (oz - int(oz*.2)*5 - 5)*2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

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
			a : 0.1,
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
			a2 : 0.1,
			r : 1.0,
			border_g : 1.0,
			rad : 0.364568,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
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
			a : 0.2,
			enabled : 0.0,
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
			r : 1.0,
			border_g : 1.0,
			rad : 0.036971,
			x : 0.36,
			y : 0.5,
			ang : 0.0,
			sides : 64.0,
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
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.5*sin(time*1.13);\n' + 'wave_g = wave_g + 0.5*sin(time*1.23);\n' + 'wave_b = wave_b + 0.5*sin(time*1.33);\n' + 'wave_x = wave_x + 0.2*sin(0.32*time);\n' + 'wave_y = wave_y + 0.2*cos(0.32*time);\n' + 'ob_r = wave_r;\n' + 'ob_g = wave_g;\n' + 'ob_b = wave_b;\n' + 'ob_r = 0.3;\n' + 'ob_g = 0.3;\n' + 'ob_b = 0.3;'),
	'pixel_eqs_str' : ('zoom = zoom - 0.04*(sin(8+6*sin(0.2*time)*ang) + sin(sin(time*2*sin(time)*rad))*0.3 - cos(rad)*0.1);\n' + 'rot = rot + 0.3*abs(0.746-rad)*sin(2.2*(0.5-rad)+5.7*sin(0.1*time));\n' + 'sx = sx - 0.01*(0.99*1-rad)*sin(0.733*time)*below(sin(time),0);\n' + 'sy = sy - 0.01*(0.99*1-rad)*cos(0.953*time)*above(sin(time),0);\n' + 'zoom = zoom + 0.015*(0.5*abs(3)-rad)*below(rad,1.5);'),
};

return pmap;
});
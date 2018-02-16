define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.35,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.285751,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 0.999608,
		ob_size : 0.5,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
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
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		nechowrap_y : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.95,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 3.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.mod = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.it = 0;
m.zooma = 0;
m.r = 0;
m.rd = 0;
m.radm = 0;
m.tm2 = 0;
m.tm = 0;
m.rad_cycle = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.decay = 0.995;
		m.rkeys = ['d','r'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.it = (0.3*Math.sin((m.time*0.2)));
m.radm = ((m.rad*m.ang)*m.x);
m.rot = ((0.02*Math.sin(((m.radm+m.it)*30)))*m.radm);
m.mod = Math.sin((m.ang*5));
m.mod = ((((m.mod*m.mod)*m.mod)*m.mod)*m.mod);
m.zoom = (1+Math.abs((0.01*m.mod)));
m.rad_cycle = (((((m.rad*m.rad)*m.x)*60)*m.rad)*Math.sin(m.q1));
m.rot = ifcond(above(m.q2, m.q8), ((((0.06*Math.sin(((m.rad_cycle-(3*Math.sin(m.q3)))-((m.x*m.ang)*m.q3))))*equal(m.rad, (m.x+m.y)))*Math.sin(m.q6))-(0.3*Math.sin(m.q7))), (0.02*Math.sin(m.q3)));
m.zoom = ifcond(above(m.q2, m.q8), ((((((2*m.rot)*m.rad)+1)-((0.01*m.q1)*m.rad))-(m.x-(0.3*Math.sin(m.q4))))+((m.x*0.25)*Math.sin(m.q2))), 1.10);
m.zoomexp = (1-(0.1*m.rad));
m.dx = ifcond(above(m.q2, m.q8), (div((equal(m.x, m.rad)*Math.sin(m.q3)),m.y)*Math.sin(m.q1)), ((((0.009*Math.sin(m.q5))*m.x)*m.rad)+(m.d*Math.sin(m.q2))));
m.dy = ifcond(above(m.q2, m.q8), (div((equal(m.y, m.rad)*Math.sin(m.q2)),m.x)*Math.sin(m.q5)), ((((0.009*Math.sin(m.q3))*m.y)*m.rad)+(m.r*Math.sin(m.q1))));
m.d = above(m.y, Math.sin(((m.ang*3)+m.time)));
m.r = above(m.y, Math.sin(((m.ang*3)+m.time)));
m.tm = (Math.sin((m.time*0.5))*3);
m.tm2 = (Math.cos(m.time)*3);
m.zooma = (above(Math.cos((((m.x*6.28)*3)+m.tm)), 0)*above(Math.cos((((m.y*6.28)*2)+m.tm2)), 0));
m.zooma = (Math.min((Math.sin((((m.x*6.28)*3)+m.tm))+1), 1)*Math.min((Math.cos((((m.y*6.28)*2)+m.tm))+1), 1));
m.rd = sqrt((sqr((((m.x-0.5)-m.q4)*1.7))+sqr((((m.y-0.5)+m.q5)*1.2))));
m.cx = (0.5+m.q4);
m.cy = (0.5-m.q5);
m.zoom = ((0.041+(0.99*m.zooma))+(0.99*(1-m.zooma)));
m.rot = ((0.3*m.zooma)*m.rd);
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
			bdrawback : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.yang = 0;
m.azang = 0;
m.xang = 0;
m.ayang = 0;
m.mod = 0;
m.axang = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.vol = 0;
m.sp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sp = ((((m.sample*6.28)*8)*8)*4);
m.vol = (((m.bass_att+m.mid_att)+m.treb_att)*0.33);
m.vol = (0.2+(0.5*(m.value1+m.value2)));
m.vol = 0.2;
m.mod = ifcond(below(m.mid_att, 1.8), (m.mid_att+0.2), 2);
m.ox = (((0.5*Math.sin(m.sp))*Math.sin((m.sample*3.14)))*m.vol);
m.oy = ((m.sample-0)*m.mod);
m.oz = (((0.5*Math.cos(m.sp))*Math.sin((m.sample*3.14)))*m.vol);
m.xang = (m.time*0.672);
m.axang = 0;
m.yang = (m.time*-1.351);
m.ayang = 0;
m.zang = (m.time*-0.401);
m.azang = 0;
m.fov = (0.6+(0.2*Math.sin(m.time)));
m.fov = 0.5;
m.mx = ((m.ox*Math.cos(m.zang))-(m.oy*Math.sin(m.zang)));
m.my = ((m.ox*Math.sin(m.zang))+(m.oy*Math.cos(m.zang)));
m.ox = m.mx;
m.oy = m.my;
m.mx = ((m.ox*Math.cos(m.yang))+(m.oz*Math.sin(m.yang)));
m.mz = ((-m.ox*Math.sin(m.yang))+(m.oz*Math.cos(m.yang)));
m.ox = m.mx;
m.oz = m.mz;
m.my = ((m.oy*Math.cos(m.xang))-(m.oz*Math.sin(m.xang)));
m.mz = ((m.oy*Math.sin(m.xang))+(m.oz*Math.cos(m.xang)));
m.oy = m.my;
m.oz = m.mz;
m.oz = (Math.abs(m.oz)-2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
m.r = (1+Math.sin(m.sp));
m.b = (0.5+(0.5*Math.sin((m.sample*1.57))));
m.g = (0.5+(0.5*Math.cos((m.sample*1.57))));
m.a = (0.5+((m.oz+2)*0.25));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sp = sample*6.28*8*8*4;\n' + 'vol = (bass_att + mid_att + treb_att)*0.33;\n' + 'vol = 0.2 + 0.5*(value1 + value2);\n' + 'vol = .2;\n' + 'mod = if(below(mid_att,1.8),mid_att+.2,2);\n' + 'ox = 0.5*sin(sp)*sin(sample*3.14)*vol;\n' + 'oy = (sample - 0)*mod;\n' + 'oz = 0.5*cos(sp)*sin(sample*3.14)*vol;\n' + 'xang = time*0.672;\n' + 'axang = 0;\n' + 'yang = time*-1.351;\n' + 'ayang = 0;\n' + 'zang = time*-0.401;\n' + 'azang = 0;\n' + 'fov = 0.6 + 0.2*sin(time);\n' + 'fov = .5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = abs(oz) - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;\n' + 'r = 1 + sin(sp);\n' + 'b = 0.5 + 0.5*sin(sample*1.57);\n' + 'g = 0.5 + 0.5*cos(sample*1.57);\n' + 'a = 0.5 + (oz + 2)*0.25;'),

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
			bdrawback : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.yang = 0;
m.azang = 0;
m.xang = 0;
m.ayang = 0;
m.mod = 0;
m.axang = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.vol = 0;
m.sp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sp = ((((m.sample*6.28)*8)*8)*4);
m.vol = (((m.bass_att+m.mid_att)+m.treb_att)*0.33);
m.vol = (0.2+(0.5*(m.value1+m.value2)));
m.vol = 0.2;
m.mod = ifcond(below(m.bass_att, 1.8), (m.bass_att+0.2), 2);
m.ox = (((0.5*Math.sin(m.sp))*Math.sin((m.sample*3.14)))*m.vol);
m.oy = ((m.sample-0)*m.mod);
m.oz = (((0.5*Math.cos(m.sp))*Math.sin((m.sample*3.14)))*m.vol);
m.xang = (m.time*-0.321);
m.axang = 0;
m.yang = (m.time*1.531);
m.ayang = 0;
m.zang = (m.time*-0.101);
m.azang = 0;
m.fov = (0.6+(0.2*Math.sin(m.time)));
m.fov = 0.5;
m.mx = ((m.ox*Math.cos(m.zang))-(m.oy*Math.sin(m.zang)));
m.my = ((m.ox*Math.sin(m.zang))+(m.oy*Math.cos(m.zang)));
m.ox = m.mx;
m.oy = m.my;
m.mx = ((m.ox*Math.cos(m.yang))+(m.oz*Math.sin(m.yang)));
m.mz = ((-m.ox*Math.sin(m.yang))+(m.oz*Math.cos(m.yang)));
m.ox = m.mx;
m.oz = m.mz;
m.my = ((m.oy*Math.cos(m.xang))-(m.oz*Math.sin(m.xang)));
m.mz = ((m.oy*Math.sin(m.xang))+(m.oz*Math.cos(m.xang)));
m.oy = m.my;
m.oz = m.mz;
m.oz = (Math.abs(m.oz)-2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
m.g = (1+Math.sin(m.sp));
m.r = (0.5+(0.5*Math.sin((m.sample*1.57))));
m.b = (0.5+(0.5*Math.cos((m.sample*1.57))));
m.a = (0.5+((m.oz+2)*0.25));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sp = sample*6.28*8*8*4;\n' + 'vol = (bass_att + mid_att + treb_att)*0.33;\n' + 'vol = 0.2 + 0.5*(value1 + value2);\n' + 'vol = .2;\n' + 'mod = if(below(bass_att,1.8),bass_att+.2,2);\n' + 'ox = 0.5*sin(sp)*sin(sample*3.14)*vol;\n' + 'oy = (sample - 0)*mod;\n' + 'oz = 0.5*cos(sp)*sin(sample*3.14)*vol;\n' + 'xang = time*-0.321;\n' + 'axang = 0;\n' + 'yang = time*1.531;\n' + 'ayang = 0;\n' + 'zang = time*-0.101;\n' + 'azang = 0;\n' + 'fov = 0.6 + 0.2*sin(time);\n' + 'fov = .5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = abs(oz) - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;\n' + 'g = 1 + sin(sp);\n' + 'r = 0.5 + 0.5*sin(sample*1.57);\n' + 'b = 0.5 + 0.5*cos(sample*1.57);\n' + 'a = 0.5 + (oz + 2)*0.25;'),

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
			bdrawback : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.yang = 0;
m.azang = 0;
m.xang = 0;
m.ayang = 0;
m.mod = 0;
m.axang = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.vol = 0;
m.sp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sp = ((((m.sample*6.28)*8)*8)*4);
m.vol = (((m.bass_att+m.mid_att)+m.treb_att)*0.33);
m.vol = (0.2+(0.5*(m.value1+m.value2)));
m.vol = 0.2;
m.mod = ifcond(below(m.treb_att, 1.8), (m.treb_att+0.2), 2);
m.ox = (((0.5*Math.sin(m.sp))*Math.sin((m.sample*3.14)))*m.vol);
m.oy = ((m.sample-0)*m.mod);
m.oz = (((0.5*Math.cos(m.sp))*Math.sin((m.sample*3.14)))*m.vol);
m.xang = (m.time*0.221);
m.axang = 0;
m.yang = (m.time*-0.411);
m.ayang = 0;
m.zang = (m.time*1.201);
m.azang = 0;
m.fov = (0.6+(0.2*Math.sin(m.time)));
m.fov = 0.5;
m.mx = ((m.ox*Math.cos(m.zang))-(m.oy*Math.sin(m.zang)));
m.my = ((m.ox*Math.sin(m.zang))+(m.oy*Math.cos(m.zang)));
m.ox = m.mx;
m.oy = m.my;
m.mx = ((m.ox*Math.cos(m.yang))+(m.oz*Math.sin(m.yang)));
m.mz = ((-m.ox*Math.sin(m.yang))+(m.oz*Math.cos(m.yang)));
m.ox = m.mx;
m.oz = m.mz;
m.my = ((m.oy*Math.cos(m.xang))-(m.oz*Math.sin(m.xang)));
m.mz = ((m.oy*Math.sin(m.xang))+(m.oz*Math.cos(m.xang)));
m.oy = m.my;
m.oz = m.mz;
m.oz = (Math.abs(m.oz)-2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
m.b = (1+Math.sin(m.sp));
m.g = (0.5+(0.5*Math.sin((m.sample*1.57))));
m.r = (0.5+(0.5*Math.cos((m.sample*1.57))));
m.a = (0.5+((m.oz+2)*0.25));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sp = sample*6.28*8*8*4;\n' + 'vol = (bass_att + mid_att + treb_att)*0.33;\n' + 'vol = 0.2 + 0.5*(value1 + value2);\n' + 'vol = .2;\n' + 'mod = if(below(treb_att,1.8),treb_att+.2,2);\n' + 'ox = 0.5*sin(sp)*sin(sample*3.14)*vol;\n' + 'oy = (sample - 0)*mod;\n' + 'oz = 0.5*cos(sp)*sin(sample*3.14)*vol;\n' + 'xang = time*0.221;\n' + 'axang = 0;\n' + 'yang = time*-0.411;\n' + 'ayang = 0;\n' + 'zang = time*1.201;\n' + 'azang = 0;\n' + 'fov = 0.6 + 0.2*sin(time);\n' + 'fov = .5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = abs(oz) - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;\n' + 'b = 1+sin(sp);\n' + 'g = 0.5 + 0.5*sin(sample*1.57);\n' + 'r = 0.5 + 0.5*cos(sample*1.57);\n' + 'a = 0.5 + (oz + 2)*0.25;'),

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
	'frame_eqs_str' : ('wave_a = 0;\n' + 'decay=.995;'),
	'pixel_eqs_str' : ('it = 0.3*sin(time*0.2);\n' + 'radm = (rad*ang)*x;\n' + 'rot = 0.02*sin((radm+it)*30)*radm;\n' + 'mod = sin(ang*5);\n' + 'mod = mod*mod*mod*mod*mod;\n' + 'zoom = 1 + abs(0.01*mod);\n' + 'rad_cycle=rad*rad*x*60*rad*sin(q1);\n' + 'rot=if(above(q2,q8),.06*sin(rad_cycle-3*Sin(Q3)-x*ang*q3)*equal(Rad,x+y)*sin(Q6)-.3*sin(Q7),.02*sin(Q3));\n' + 'zoom =if(above(q2,q8), 2*rot*rad + 1 - 0.01*q1*rad-(X-.3*sin(Q4))+(x*.25*sin(Q2)),1.10);\n' + 'zoomexp = 1 - 0.1*rad;\n' + 'dx=if(above(q2,q8),equal(x,raD)*sin(Q3)/y*sin(Q1),.009*sin(q5)*x*rad+d*sin(q2));\n' + 'dy=if(above(q2,q8),equal(y,rad)*sin(q2)/x*sin(q5),.009*sin(Q3)*y*rad+r*sin(q1));\n' + 'd=above(y,sin(ang*3+time));\n' + 'r=above(y,sin(ang*3+time));\n' + 'tm=sin(time*0.5)*3;\n' + 'tm2=cos(time)*3;\n' + 'zooma=above(cos(x*6.28*3+tm),0) * above(cos(y*6.28*2+tm2),0);\n' + 'zooma=min(sin(x*6.28*3+tm)+1,1) * min(cos(y*6.28*2+tm)+1,1);\n' + 'rd=sqrt( sqr( (x-0.5-q4)*1.7) + sqr( (y-0.5+q5)*1.2 ) );\n' + 'cx=0.5+q4;\n' + 'cy=0.5-q5;\n' + 'zoom= 0.041+0.99*(zooma) + 0.99*(1-zooma);\n' + 'rot=.3*zooma*rd;'),
};

return pmap;
});
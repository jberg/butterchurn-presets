define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 32.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 24.0,
		wave_scale : 0.485,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.00909,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 1.0,
		mv_b : 1.0,
		echo_zoom : 0.498,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 13.29089,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : -0.28,
		cx : 0.5,
		dy : -0.32,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.5,
		decay : 0.95,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.5,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.iscale = 0;
m.q3 = 0;
m.mq31 = 0;
m.q4 = 0;
m.mq21 = 0;
m.q5 = 0;
m.mq22 = 0;
m.q6 = 0;
m.mq23 = 0;
m.q7 = 0;
m.mq24 = 0;
m.q8 = 0;
m.mq25 = 0;
m.c_inv_r = 0;
m.mq26 = 0;
m.mq27 = 0;
m.scale = 0;
m.iangle = 0;
m.translation_x = 0;
m.mq28 = 0;
m.a_i = 0;
m.translation_y = 0;
m.mq29 = 0;
m.ac_i = 0;
m.b_i = 0;
m.mq1 = 0;
m.c_i = 0;
m.q30 = 0;
m.atime = 0;
m.bcad_i = 0;
m.d_i = 0;
m.q20 = 0;
m.q31 = 0;
m.q21 = 0;
m.q11 = 0;
m.q22 = 0;
m.q12 = 0;
m.q23 = 0;
m.mu_i = 0;
m.vol = 0;
m.angle = 0;
m.q13 = 0;
m.q24 = 0;
m.a_r = 0;
m.q25 = 0;
m.q26 = 0;
m.ac_r = 0;
m.b_r = 0;
m.q27 = 0;
m.c_r = 0;
m.q28 = 0;
m.bcad_r = 0;
m.d_r = 0;
m.q29 = 0;
m.cthr = 0;
m.mu_r = 0;
m.itranslation_u = 0;
m.chng = 0;
m.itranslation_v = 0;
m.c_inv_i = 0;
m.zoom = 1;
m.xpos = 0;
m.ypos = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.chng = Math.sin((m.time*0.5));
m.cthr = 0.9999;
m.mq21 = ifcond(above(m.chng, m.cthr), rand(3), m.mq21);
m.mq22 = ifcond(above(m.chng, m.cthr), rand(3), m.mq22);
m.mq23 = ifcond(above(m.chng, m.cthr), rand(3), m.mq23);
m.mq24 = ifcond(above(m.chng, m.cthr), rand(2), m.mq24);
m.mq25 = ifcond(above(m.chng, m.cthr), rand(2), m.mq25);
m.mq26 = ifcond(above(m.chng, m.cthr), rand(2), m.mq26);
m.mq27 = ifcond(above(m.chng, m.cthr), rand(1), m.mq27);
m.mq28 = ifcond(above(m.chng, m.cthr), rand(1), m.mq28);
m.mq29 = ifcond(above(m.chng, m.cthr), (rand(1)*0.3), m.mq29);
m.mq31 = ifcond(above(m.chng, m.cthr), (rand(1)*0.3), m.mq31);
m.monitor = m.chng;
m.q21 = m.mq21;
m.q22 = m.mq22;
m.q23 = m.mq23;
m.q24 = m.mq24;
m.q25 = m.mq25;
m.q26 = m.mq26;
m.q27 = m.mq27;
m.q28 = m.mq28;
m.q29 = m.mq29;
m.q31 = m.mq31;
m.monitor = m.mq1;
m.vol = ((m.bass+m.treb)+m.mid);
m.atime = (m.atime+m.vol);
m.q11 = (0.4+(Math.sin((m.atime*0.006))*0.4));
m.q12 = (0.4+(Math.cos((m.atime*0.00613828348))*0.4));
m.q13 = (0.4+(Math.sin((m.atime*0.00598593455))*0.4));
m.monitor = m.q13;
m.q4 = Math.sin((m.atime*0.03));
m.q5 = Math.cos((m.atime*0.030383824));
m.q6 = Math.tan((m.atime*0.029384834));
m.scale = 1;
m.angle = (m.time*0.2);
m.translation_x = 0;
m.translation_y = 0.1;
m.iscale = 1;
m.iangle = 0.2;
m.itranslation_u = 0;
m.itranslation_v = 0;
m.a_r = (Math.cos(m.angle)*m.scale);
m.a_i = (Math.sin(m.angle)*m.scale);
m.b_r = m.translation_x;
m.b_i = m.translation_y;
m.c_r = (-Math.cos(m.iangle)*m.iscale);
m.c_i = (-Math.sin(m.iangle)*m.iscale);
m.d_r = m.itranslation_u;
m.d_i = m.itranslation_v;
m.c_inv_r = div(m.c_r,((m.c_r*m.c_r)+(m.c_i*m.c_i)));
m.c_inv_i = div(m.c_i,((m.c_r*m.c_r)+(m.c_i*m.c_i)));
m.ac_r = ((m.a_r*m.c_inv_r)-(m.a_i*m.c_inv_i));
m.ac_i = ((m.a_r*m.c_inv_i)-(m.a_i*m.c_inv_r));
m.bcad_r = (((m.b_r*m.c_r)-(m.b_i*m.c_i))-((m.a_r*m.d_r)-(m.a_i*m.d_i)));
m.bcad_i = (((m.b_r*m.c_i)-(m.b_i*m.c_r))-((m.a_r*m.d_i)-(m.a_i*m.d_r)));
m.mu_r = ((m.bcad_r*m.c_inv_r)-(m.bcad_i*m.c_inv_i));
m.mu_i = ((m.bcad_r*m.c_inv_i)-(m.bcad_i*m.c_inv_r));
m.q1 = m.ac_r;
m.q2 = m.ac_i;
m.q3 = m.mu_r;
m.q4 = m.mu_i;
m.q5 = m.c_r;
m.q6 = m.c_i;
m.q7 = m.d_r;
m.q8 = m.d_i;
m.monitor = m.bcad_r;
m.q30 = (((m.bass+m.treb)+m.mid)*2);
m.q20 = m.atime;
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
		'point_eqs' : function(m) {
m.x = (0.5+((m.bass*0.12)*Math.sin(((m.sample*2)*(m.time*10000)))));
m.y = (0.5+((m.bass*0.1)*Math.cos(((m.sample*2)*(m.time*10000)))));
m.r = (1+(0.5*Math.sin(((m.sample*2)+(m.time*10)))));
m.g = (1+(0.5*Math.sin(((m.sample*2)+(m.time*50)))));
m.b = (1+(0.5*Math.sin(((m.sample*2)+(m.time*20)))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = .5 + (bass*.12)*sin(sample*2*(time*10000));\n' + 'y = .5 + (bass*.1)*cos(sample*2*(time*10000));\n' + 'r = 1 + .5*sin(sample*2+(time*10));\n' + 'g = 1 + .5*sin(sample*2+(time*50));\n' + 'b = 1 + .5*sin(sample*2+(time*20));'),

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
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 102.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.zang = 0;
m.yang = 0;
m.xang = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.vol_avg = 0;
m.q8 = 0;
m.ox = 0;
m.oy = 0;
m.it = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.fov = 0;
m.mz = 0;
m.ra = 0;
m.vg = 0;
m.vol = 0;
m.rad = 0;
m.tm = 0;
m.t1 = 0;
m.sp = 0;

			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {
m.samples = (256+(50*Math.sin((m.time*0.939493949))));
m.vol = (((m.bass_att+m.mid_att)+m.treb_att)*0.333333);
m.vol_avg = (0.1*((m.vol_avg*9)+m.vol));
m.vg = (m.vol_avg*0.1);
m.t1 = ifcond(above(m.vg, 1.8), 1.8, m.vg);
		return m;
	},
		'point_eqs' : function(m) {
m.tm = m.q1;
m.sp = (((((m.sample*6.28)*8)*6)*Math.sin(m.time))*100);
m.vol = ((m.value1+m.value2)*0.5);
m.it = (m.it*above(m.sample, 0));
m.it = (m.it+1);
m.rad = 1;
m.ra = (m.rad*Math.sin((m.sample*3.14)));
m.ox = (m.ra*Math.sin(m.sp));
m.oy = (Math.sin(((m.sample*3.14)-1.57))*m.rad);
m.oz = (m.ra*Math.cos(m.sp));
m.xang = m.q4;
m.yang = m.q5;
m.zang = m.q6;
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
m.yang = m.q8;
m.oz = (m.oz+5);
m.mx = ((m.ox*Math.cos(m.yang))+(m.oz*Math.sin(m.yang)));
m.mz = ((-m.ox*Math.sin(m.yang))+(m.oz*Math.cos(m.yang)));
m.ox = m.mx;
m.oz = m.mz;
m.oz = (m.oz-5);
m.oz = (m.oz-2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('samples = 256 + 50*sin(time*.939493949);\n' + 'vol = (bass_att + mid_att + treb_att)*.333333;\n' + 'vol_avg = .1*(vol_avg*9 + vol);\n' + 'vg = vol_avg*.1;\n' + 't1 = if(above(vg,1.8),1.8,vg);'),
		'point_eqs_str' : ('tm = q1;\n' + 'sp = sample*6.28*8*6*sin(time)*100;\n' + 'vol = (value1+value2)*.5;\n' + 'it = it*above(sample,0);\n' + 'it = it + 1;\n' + 'rad=1;\n' + 'ra = rad*sin(sample*3.14);\n' + 'ox = ra*sin(sp);\n' + 'oy = sin(sample*3.14-1.57)*rad;\n' + 'oz = ra*cos(sp);\n' + 'xang = q4;\n' + 'yang = q5;\n' + 'zang = q6;\n' + 'fov = .5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'yang = q8;\n' + 'oz = oz + 5;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'oz = oz - 5;\n' + 'oz = oz - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

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
			tex_zoom : 0.5176,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 1.0,
			rad : 0.89269,
			x : 0.5,
			y : 0.5,
			ang : 6.09469,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = Math.sin(div(m.time,(((Math.sin(div(m.time,1000))*0.5)+0.5)*2)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=sin(time/((sin(time/1000)*0.5+0.5)*2));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.99,
			tex_ang : 4.96372,
			thickoutline : 0.0,
			g : 0.99,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.74934,
			additive : 0.0,
			border_a : 0.2,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 0.97,
			border_g : 1.0,
			rad : 1.20321,
			x : 0.5,
			y : 0.5,
			ang : 1.25664,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (Math.sin(div(m.time,20))*6.4);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=sin(time/20)*6.4;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 5.59203,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.07409,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.3,
			r : 1.0,
			border_g : 1.0,
			rad : 0.7316,
			x : 0.5,
			y : 0.5,
			ang : 5.65487,
			sides : 17.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (((Math.cos(div(m.time,12))*0.5)+0.5)*6.4);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=(cos(time/12)*0.5+0.5)*6.4;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.5,
			textured : 0.0,
			g2 : 0.5,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			num_inst : 33.0,
			},
		'init_eqs' : function(m) {
m.trans = 0;
m.trans2 = 0;
m.trans3 = 0;
m.q30 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.trans = ((div(rand(Math.floor(m.q30)),15)+m.instance)-m.instance);
m.trans2 = ((div(rand(Math.floor(m.q30)),15)+m.instance)-m.instance);
m.trans3 = ((div(rand(Math.floor(m.q30)),15)+m.instance)-m.instance);
m.a = m.trans;
m.x = (((0.5+(((Math.floor(rand(15))*0.01)*m.bass_att)*ifcond(equal(Math.floor(rand(2)), 1), 1, -1)))+m.instance)-m.instance);
m.y = (((0.5+(((Math.floor(rand(15))*0.01)*m.bass_att)*ifcond(equal(Math.floor(rand(2)), 1), 1, -1)))+m.instance)-m.instance);
m.rad = (((0.09+div(rand(Math.floor(m.q30)),15))+m.instance)-m.instance);
m.r = (((rand(m.q30)*0.1)+m.instance)-m.instance);
m.g = (((rand(m.q30)*0.1)+m.instance)-m.instance);
m.b = (((rand(m.q30)*0.1)+m.instance)-m.instance);
m.r2 = (((rand(m.q30)*0.1)+m.instance)-m.instance);
m.g2 = (((rand(m.q30)*0.1)+m.instance)-m.instance);
m.b2 = (((rand(m.q30)*0.1)+m.instance)-m.instance);
m.border_r = (((rand(m.q30)*0.1)+m.instance)-m.instance);
m.border_g = (((rand(m.q30)*0.1)+m.instance)-m.instance);
m.border_b = (((rand(m.q30)*0.1)+m.instance)-m.instance);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trans = rand(int(q30))/15+instance-instance;\n' + 'trans2 = rand(int(q30))/15+instance-instance;\n' + 'trans3 = rand(int(q30))/15+instance-instance;\n' + 'a = trans;\n' + 'x = .5 + int(rand(15))*0.01*bass_att*if(equal(int(rand(2)),1),1,-1)+instance-instance;\n' + 'y = .5 + int(rand(15))*0.01*bass_att*if(equal(int(rand(2)),1),1,-1)+instance-instance;\n' + 'rad = .09 + rand(int(q30))/15+instance-instance;\n' + 'r=rand(q30)*.1+instance-instance;\n' + 'g=rand(q30)*.1+instance-instance;\n' + 'b=rand(q30)*.1+instance-instance;\n' + 'r2=rand(q30)*.1+instance-instance;\n' + 'g2=rand(q30)*.1+instance-instance;\n' + 'b2=rand(q30)*.1+instance-instance;\n' + 'border_r=rand(q30)*.1+instance-instance;\n' + 'border_g=rand(q30)*.1+instance-instance;\n' + 'border_b=rand(q30)*.1+instance-instance;'),

		}
],
	'warp' : ('uniform highp vec2 uv6;\n' + 'highp vec2 xlat_mutablers;\n' + 'highp vec2 xlat_mutableuv1;\n' + 'highp vec2 xlat_mutableuv6;shader_body {\n' + '  xlat_mutableuv6 = uv6;\n' + '   vec2 uv_1;\n' + '   vec3 xlat_varmod_2;\n' + '   vec3 crisp_3;\n' + '   vec2 uv2_4;\n' + '   float ang2_5;\n' + '   float dist_6;\n' + '   float z_7;\n' + '   vec3 ret_8;\n' + '  uv_1 = uv_orig;\n' + '  xlat_mutableuv1 = ((uv_orig - 0.5) * aspect.xy);\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = ((16.0 * sqrt(\n' + '    dot (xlat_mutableuv1, xlat_mutableuv1)\n' + '  )) + time);\n' + '  z_7 = tmpvar_9;\n' + '  xlat_mutablers = (clamp ((\n' + '    (sin(tmpvar_9) / cos(tmpvar_9))\n' + '   * \n' + '    normalize(xlat_mutableuv1)\n' + '  ), vec2(-5.0, -5.0), vec2(5.0, 5.0)) / 2.0);\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = sin((xlat_mutableuv1 * _qh.z));\n' + '  dist_6 = (sqrt(dot (tmpvar_10, tmpvar_10)) * ((\n' + '    abs(xlat_mutableuv1.x)\n' + '   + \n' + '    abs(xlat_mutableuv1.y)\n' + '  ) + _qh.w));\n' + '   float tmpvar_11;\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = (min (abs(\n' + '    (tmpvar_10.y / tmpvar_10.x)\n' + '  ), 1.0) / max (abs(\n' + '    (tmpvar_10.y / tmpvar_10.x)\n' + '  ), 1.0));\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = (tmpvar_12 * tmpvar_12);\n' + '  tmpvar_13 = (((\n' + '    ((((\n' + '      ((((-0.01213232 * tmpvar_13) + 0.05368138) * tmpvar_13) - 0.1173503)\n' + '     * tmpvar_13) + 0.1938925) * tmpvar_13) - 0.3326756)\n' + '   * tmpvar_13) + 0.9999793) * tmpvar_12);\n' + '  tmpvar_13 = (tmpvar_13 + (float(\n' + '    (abs((tmpvar_10.y / tmpvar_10.x)) > 1.0)\n' + '  ) * (\n' + '    (tmpvar_13 * -2.0)\n' + '   + 1.570796)));\n' + '  tmpvar_11 = (tmpvar_13 * sign((tmpvar_10.y / tmpvar_10.x)));\n' + '  if ((abs(tmpvar_10.x) > (1e-08 * abs(tmpvar_10.y)))) {\n' + '    if ((tmpvar_10.x < 0.0)) {\n' + '      if ((tmpvar_10.y >= 0.0)) {\n' + '        tmpvar_11 += 3.141593;\n' + '      } else {\n' + '        tmpvar_11 = (tmpvar_11 - 3.141593);\n' + '      };\n' + '    };\n' + '  } else {\n' + '    tmpvar_11 = (sign(tmpvar_10.y) * 1.570796);\n' + '  };\n' + '  ang2_5 = (0.1 * floor((16.0 * tmpvar_11)));\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = cos(ang2_5);\n' + '  tmpvar_14.y = sin(ang2_5);\n' + '  z_7 = (1.0 - cos((8.0 * dist_6)));\n' + '   float tmpvar_15;\n' + '  tmpvar_15 = clamp (z_7, 0.0, 1.0);\n' + '  z_7 = tmpvar_15;\n' + '   float tmpvar_16;\n' + '  tmpvar_16 = float((tmpvar_15 >= 0.5));\n' + '  xlat_mutablers = ((_qg.w * xlat_mutablers) + ((1.0 - _qg.w) * xlat_mutablers.yx));\n' + '  uv_1 = (uv_orig + ((\n' + '    ((1.0 - tmpvar_16) * 0.03)\n' + '   * xlat_mutablers.yx) + (\n' + '    ((0.5 * tmpvar_16) * tmpvar_15)\n' + '   * \n' + '    normalize(((0.5 * tmpvar_10) + tmpvar_14))\n' + '  )));\n' + '   mat2 tmpvar_17;\n' + '  tmpvar_17[0] = _qb.xy;\n' + '  tmpvar_17[1] = _qb.zw;\n' + '  xlat_mutableuv6 = (xlat_mutableuv1 * tmpvar_17);\n' + '  uv2_4 = (((0.7 * xlat_mutableuv1) + (0.3 * \n' + '    sin(((xlat_mutableuv1 * 16.0) + (4.0 * _qb.xy)))\n' + '  )) * 0.2);\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18 = fract(uv_1);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur1, tmpvar_18);\n' + '   vec3 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_main, uv_1).xyz;\n' + '  crisp_3 = tmpvar_20;\n' + '   vec3 tmpvar_21;\n' + '  tmpvar_21 = ((crisp_3 + vec3((\n' + '    abs((0.01 / (sqrt(xlat_mutableuv6.x) + 0.001)))\n' + '   * \n' + '    (rad + 0.2)\n' + '  ))) + vec3((_qg.y * clamp (\n' + '    (0.001 / sqrt(dot (uv2_4, uv2_4)))\n' + '  , 0.0, 1.0))));\n' + '   vec2 P_22;\n' + '  P_22 = ((0.5 * uv_1) + (time * 0.01));\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23 = (texture2D (sampler_noise_lq, P_22) - 0.2).xyz;\n' + '  xlat_varmod_2 = tmpvar_23;\n' + '  xlat_varmod_2 = (1.0 - (xlat_varmod_2 * (crisp_3 - \n' + '    (0.5 * ((tmpvar_19.xyz * scale1) + bias1))\n' + '  )));\n' + '  ret_8 = (((\n' + '    (1.0 - tmpvar_16)\n' + '   * tmpvar_21) * xlat_varmod_2) + ((tmpvar_16 * tmpvar_21) * xlat_varmod_2));\n' + '  ret_8 = ((ret_8 * 0.98) - 0.03);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24.w = 1.0;\n' + '  tmpvar_24.xyz = ret_8;\n' + '  vec4 ret4 = tmpvar_24;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 moebius_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = ((uv - 0.5) * aspect.wz);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = ((tmpvar_3.x * _qb.x) - (tmpvar_3.y * _qb.y));\n' + '  tmpvar_4.y = ((tmpvar_3.x * _qb.y) - (tmpvar_3.y * _qb.x));\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = ((tmpvar_4 * aspect.yx) + _qb.zw);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = ((_qa.z * tmpvar_5.x) + (_qa.w * tmpvar_5.y));\n' + '  tmpvar_6.y = ((_qa.w * tmpvar_5.x) - (_qa.z * tmpvar_5.y));\n' + '  moebius_1 = (0.5 + ((\n' + '    (1.0 - abs(((\n' + '      fract((((tmpvar_6 / \n' + '        ((tmpvar_5.x * tmpvar_5.x) + (tmpvar_5.y * tmpvar_5.y))\n' + '      ) + _qa.xy) * 0.5))\n' + '     * 2.0) - 1.0)))\n' + '   - 0.5) * 0.99));\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_fc_main, moebius_1).xyz;\n' + '  ret_2 = tmpvar_7;\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('zoom=1;\n' + 'xpos=0;\n' + 'ypos=0;'),
	'frame_eqs_str' : ('chng=sin(time*.5);\n' + 'cthr=.9999;\n' + 'mq21=if(above(chng,cthr),rand(3),mq21);\n' + 'mq22=if(above(chng,cthr),rand(3),mq22);\n' + 'mq23=if(above(chng,cthr),rand(3),mq23);\n' + 'mq24=if(above(chng,cthr),rand(2),mq24);\n' + 'mq25=if(above(chng,cthr),rand(2),mq25);\n' + 'mq26=if(above(chng,cthr),rand(2),mq26);\n' + 'mq27=if(above(chng,cthr),rand(1),mq27);\n' + 'mq28=if(above(chng,cthr),rand(1),mq28);\n' + 'mq29=if(above(chng,cthr),rand(1)*.3,mq29);\n' + 'mq31=if(above(chng,cthr),rand(1)*.3,mq31);\n' + 'monitor=chng;\n' + 'q21=mq21;\n' + 'q22=mq22;\n' + 'q23=mq23;\n' + 'q24=mq24;\n' + 'q25=mq25;\n' + 'q26=mq26;\n' + 'q27=mq27;\n' + 'q28=mq28;\n' + 'q29=mq29;\n' + 'q31=mq31;\n' + 'monitor=mq1;\n' + 'vol=bass+treb+mid;\n' + 'atime=atime+vol;\n' + 'q11=.4+sin(atime*.006        )*.4;\n' + 'q12=.4+cos(atime*.00613828348)*.4;\n' + 'q13=.4+sin(atime*.00598593455)*.4;\n' + 'monitor=q13;\n' + 'q4=sin(atime*.03);\n' + 'q5=cos(atime*.030383824);\n' + 'q6=tan(atime*.029384834);\n' + 'scale = 1;\n' + 'angle = time*.2;\n' + 'translation_x = 0;\n' + 'translation_y = 0.1;\n' + 'iscale = 1;\n' + 'iangle = 0.2;\n' + 'itranslation_u = 0;\n' + 'itranslation_v = 0;\n' + 'a_r = cos(angle)*scale;\n' + 'a_i = sin(angle)*scale;\n' + 'b_r = translation_x;\n' + 'b_i = translation_y;\n' + 'c_r = -cos(iangle)*iscale;\n' + 'c_i = -sin(iangle)*iscale;\n' + 'd_r = itranslation_u;\n' + 'd_i = itranslation_v;\n' + 'c_inv_r = c_r/(c_r*c_r+c_i*c_i);\n' + 'c_inv_i = c_i/(c_r*c_r+c_i*c_i);\n' + 'ac_r = (a_r*c_inv_r - a_i*c_inv_i);\n' + 'ac_i = (a_r*c_inv_i - a_i*c_inv_r);\n' + 'bcad_r = (b_r*c_r - b_i*c_i)-(a_r*d_r-a_i*d_i);\n' + 'bcad_i = (b_r*c_i - b_i*c_r)-(a_r*d_i-a_i*d_r);\n' + 'mu_r = bcad_r*c_inv_r - bcad_i*c_inv_i;\n' + 'mu_i = bcad_r*c_inv_i - bcad_i*c_inv_r;\n' + 'q1 = ac_r;\n' + 'q2 = ac_i;\n' + 'q3 = mu_r;\n' + 'q4 = mu_i;\n' + 'q5 = c_r;\n' + 'q6 = c_i;\n' + 'q7 = d_r;\n' + 'q8 = d_i;\n' + 'monitor = bcad_r;\n' + 'q30=(bass+treb+mid)*2;\n' + 'q20=atime;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
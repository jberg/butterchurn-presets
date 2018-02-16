define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.002,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.01,
		ob_r : 0.0,
		sy : 0.9901,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.14977,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 0.99817,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.01,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q8 = 0;
m.q30 = 0;
m.atime = 0;
m.q32 = 0;
m.vol = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_b = Math.max(((div(1,3.14)+(0.5*Math.sin(m.time)))-(div(2,(3*3.14))*Math.cos((2*m.time)))), 0.3);
m.wave_g = (0.1*Math.max(div(((5*m.mid)*Math.sin((m.mid*m.time))),((m.mid_att*m.mid_att)+(m.mid*m.mid))), 0.1));
m.wave_r = Math.max(div(((5*m.treb)*Math.sin((m.treb*m.time))),((m.treb_att*m.treb_att)+(m.treb*m.treb))), 0.3);
m.decay = (0.99999995+(0.00000005*Math.abs(Math.sin((50*m.time)))));
m.vol = ((m.bass+m.treb)+m.mid);
m.atime = (m.atime+m.vol);
m.q8 = (m.atime*0.01);
m.q30 = (m.vol*2);
m.q32 = m.aspecty;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = ifcond(below(m.rad, 0.03), 0.9, (1-div((2*((-div(3,2)*pow(2.718, Math.sin(div((((m.bass*m.bass)*m.time)*Math.sin((31.4*m.rad))),m.rad))))+(0.5*pow(2.718, Math.sin(div(((((m.treb*m.treb)*m.time)*m.rad)*Math.sin((3.14*m.rad))),m.rad)))))),500)));
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
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.8,
			thick : 0.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.mo = 0;
m.mod = 0;
m.sw = 0;
m.q8 = 0;
m.q32 = 0;
m.osa = 0;

			m.rkeys = ['sw'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sw = ((1-m.sw)*above(m.sample, 0));
m.osa = (m.sample*above(m.sample, 0));
m.mod = ((pow((m.value1*2), 2)*sign(m.value1))*0.5);
m.mod = m.value1;
m.mod = (m.mod*m.sw);
m.y = ifcond(m.sw, m.osa, ((m.sample*0.5)+0.25));
m.y = ((m.sample*0.5)+0.25);
m.y = (div((m.y-0.5),m.q32)+0.5);
m.x = (0.5-(m.mod*0.5));
m.osa = m.sample;
m.mo = ((3.7+(m.mod*6))+m.q1);
m.r = (0.5+(Math.sin(((m.q8*0.9)+m.mo))*0.5));
m.g = (0.5+(Math.sin((((m.q8*0.89)+m.mo)+1.5472))*0.5));
m.b = (0.5+(Math.sin((((m.q8*0.88)+m.mo)+2.8944))*0.5));
m.a = (3-(Math.abs(m.mod)*12));
m.a = (3-m.sw);
m.a = Math.max(0, Math.min(m.a, 1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sw = (1-sw)*above(sample,0);\n' + 'osa = sample*above(sample,0);\n' + 'mod = pow(value1*2,2)*sign(value1)*.5;\n' + 'mod = value1;\n' + 'mod = mod*sw;\n' + 'y = if(sw,osa,sample*.5+.25);\n' + 'y = sample*.5+.25;\n' + 'y = (y-0.5)/(q32) + 0.5;\n' + 'x = .5 - mod*.5;\n' + 'osa = sample;\n' + 'mo = 3.7 + mod*6 + q1;\n' + 'r = .5 + sin(q8*.9 +mo)*.5;\n' + 'g = .5 + sin(q8*.89+mo + 1.5472)*.5;\n' + 'b = .5 + sin(q8*.88+mo + 2.8944)*.5;\n' + 'a = 3 - abs(mod)*12;\n' + 'a = 3-sw;\n' + 'a = max(0,min(a,1));'),

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
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.8,
			thick : 0.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.mo = 0;
m.mod = 0;
m.sw = 0;
m.q8 = 0;
m.q32 = 0;
m.osa = 0;

			m.rkeys = ['sw'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sw = ((1-m.sw)*below(m.sample, 1));
m.osa = (m.sample*above(m.sample, 0));
m.mod = ((pow((m.value2*2), 2)*sign(m.value2))*0.5);
m.mod = m.value2;
m.mod = (m.mod*m.sw);
m.y = ifcond(m.sw, m.osa, ((m.sample*0.5)+0.25));
m.y = ((m.sample*0.5)+0.25);
m.y = (div((m.y-0.5),m.q32)+0.5);
m.x = (0.5+(m.mod*0.5));
m.osa = m.sample;
m.mo = ((3.7+(m.mod*6))+m.q1);
m.r = (0.5+(Math.sin(((m.q8*0.95)+m.mo))*0.5));
m.g = (0.5+(Math.sin((((m.q8*0.96)+m.mo)+1.5472))*0.5));
m.b = (0.5+(Math.sin((((m.q8*0.97)+m.mo)+2.8944))*0.5));
m.a = (3-(Math.abs(m.mod)*12));
m.a = (3-m.sw);
m.a = Math.max(0, Math.min(m.a, 1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sw = (1-sw)*below(sample,1);\n' + 'osa = sample*above(sample,0);\n' + 'mod = pow(value2*2,2)*sign(value2)*.5;\n' + 'mod = value2;\n' + 'mod = mod*sw;\n' + 'y = if(sw,osa,sample*.5+.25);\n' + 'y = sample*.5+.25;\n' + 'y = (y-0.5)/(q32) + 0.5;\n' + 'x = .5 + mod*.5;\n' + 'osa = sample;\n' + 'mo = 3.7 + mod*6 + q1;\n' + 'r = .5 + sin(q8*.95+mo)*.5;\n' + 'g = .5 + sin(q8*.96+mo + 1.5472)*.5;\n' + 'b = .5 + sin(q8*.97+mo + 2.8944)*.5;\n' + 'a = 3 - abs(mod)*12;\n' + 'a = 3-sw;\n' + 'a = max(0,min(a,1));'),

		},
		{
		'baseVals' : {
			a : 0.3,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.0,
			smoothing : 0.8,
			thick : 1.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.mo = 0;
m.mod = 0;
m.sw = 0;
m.q32 = 0;
m.osa = 0;

			m.rkeys = ['a','sw'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sw = ((1-m.sw)*above(m.sample, 0));
m.osa = (m.sample*above(m.sample, 0));
m.mod = ((pow((m.value1*2), 2)*sign(m.value1))*0.5);
m.mod = m.value1;
m.mod = m.mod;
m.y = ifcond(m.sw, m.osa, ((m.sample*0.5)+0.25));
m.y = ((m.sample*0.5)+0.25);
m.y = (div((m.y-0.5),m.q32)+0.5);
m.x = (0.5-(m.mod*0.5));
m.osa = m.sample;
m.mo = ((3.7+(m.mod*6))+m.q1);
m.a = Math.max(0, Math.min(m.a, 1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sw = (1-sw)*above(sample,0);\n' + 'osa = sample*above(sample,0);\n' + 'mod = pow(value1*2,2)*sign(value1)*.5;\n' + 'mod = value1;\n' + 'mod = mod;\n' + 'y = if(sw,osa,sample*.5+.25);\n' + 'y = sample*.5+.25;\n' + 'y = (y-0.5)/(q32) + 0.5;\n' + 'x = .5 - mod*.5;\n' + 'osa = sample;\n' + 'mo = 3.7 + mod*6 + q1;\n' + 'a = max(0,min(a,1));'),

		},
		{
		'baseVals' : {
			a : 0.3,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.0,
			smoothing : 0.8,
			thick : 1.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.mo = 0;
m.mod = 0;
m.sw = 0;
m.q32 = 0;
m.osa = 0;

			m.rkeys = ['a','sw'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sw = ((1-m.sw)*above(m.sample, 0));
m.osa = (m.sample*above(m.sample, 0));
m.mod = ((pow((m.value2*2), 2)*sign(m.value2))*0.5);
m.mod = m.value2;
m.mod = m.mod;
m.y = ifcond(m.sw, m.osa, ((m.sample*0.5)+0.25));
m.y = ((m.sample*0.5)+0.25);
m.y = (div((m.y-0.5),m.q32)+0.5);
m.x = (0.5+(m.mod*0.5));
m.osa = m.sample;
m.mo = ((3.7+(m.mod*6))+m.q1);
m.a = Math.max(0, Math.min(m.a, 1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sw = (1-sw)*above(sample,0);\n' + 'osa = sample*above(sample,0);\n' + 'mod = pow(value2*2,2)*sign(value2)*.5;\n' + 'mod = value2;\n' + 'mod = mod;\n' + 'y = if(sw,osa,sample*.5+.25);\n' + 'y = sample*.5+.25;\n' + 'y = (y-0.5)/(q32) + 0.5;\n' + 'x = .5 + mod*.5;\n' + 'osa = sample;\n' + 'mo = 3.7 + mod*6 + q1;\n' + 'a = max(0,min(a,1));'),

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
m.trans = ((div(Math.floor(rand(Math.floor(m.q30))),15)+m.instance)-m.instance);
m.trans2 = ((div(Math.floor(rand(Math.floor(m.q30))),15)+m.instance)-m.instance);
m.trans3 = ((div(Math.floor(rand(Math.floor(m.q30))),15)+m.instance)-m.instance);
m.a = m.trans;
m.x = (((0.5+(((Math.floor(rand(15))*0.01)*m.bass_att)*ifcond(equal(Math.floor(rand(2)), 1), 1, -1)))+m.instance)-m.instance);
m.y = (((0.5+(((Math.floor(rand(15))*0.01)*m.bass_att)*ifcond(equal(Math.floor(rand(2)), 1), 1, -1)))+m.instance)-m.instance);
m.rad = (((0.09+div(Math.floor(rand(Math.floor(m.q30))),15))+m.instance)-m.instance);
m.r = (((Math.floor(rand(m.q30))*0.1)+m.instance)-m.instance);
m.g = (((Math.floor(rand(m.q30))*0.1)+m.instance)-m.instance);
m.b = (((Math.floor(rand(m.q30))*0.1)+m.instance)-m.instance);
m.r2 = (((Math.floor(rand(m.q30))*0.1)+m.instance)-m.instance);
m.g2 = (((Math.floor(rand(m.q30))*0.1)+m.instance)-m.instance);
m.b2 = (((Math.floor(rand(m.q30))*0.1)+m.instance)-m.instance);
m.border_r = (((Math.floor(rand(m.q30))*0.1)+m.instance)-m.instance);
m.border_g = (((Math.floor(rand(m.q30))*0.1)+m.instance)-m.instance);
m.border_b = (((Math.floor(rand(m.q30))*0.1)+m.instance)-m.instance);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trans = int(rand(int(q30)))/15+instance-instance;\n' + 'trans2 = int(rand(int(q30)))/15+instance-instance;\n' + 'trans3 = int(rand(int(q30)))/15+instance-instance;\n' + 'a = trans;\n' + 'x = .5 + int(rand(15))*0.01*bass_att*if(equal(int(rand(2)),1),1,-1)+instance-instance;\n' + 'y = .5 + int(rand(15))*0.01*bass_att*if(equal(int(rand(2)),1),1,-1)+instance-instance;\n' + 'rad = .09 + int(rand(int(q30)))/15+instance-instance;\n' + 'r=int(rand(q30))*.1+instance-instance;\n' + 'g=int(rand(q30))*.1+instance-instance;\n' + 'b=int(rand(q30))*.1+instance-instance;\n' + 'r2=int(rand(q30))*.1+instance-instance;\n' + 'g2=int(rand(q30))*.1+instance-instance;\n' + 'b2=int(rand(q30))*.1+instance-instance;\n' + 'border_r=int(rand(q30))*.1+instance-instance;\n' + 'border_g=int(rand(q30))*.1+instance-instance;\n' + 'border_b=int(rand(q30))*.1+instance-instance;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
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
			b2 : 1.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 6.97389,
			x : 0.5,
			y : 0.5,
			ang : 0.37699,
			sides : 30.0,
			border_r : 1.0,
			num_inst : 600.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.sx = 0;
m.my_x = 0;
m.sy = 0;
m.my_y = 0;
m.sz = 0;
m.my_z = 0;
m.px = 0;
m.py = 0;
m.sample = 0;
m.pz = 0;
m.l = 0;
m.q20 = 0;
m.p = 0;
m.q21 = 0;
m.zoom = 0;
m.u = 0;
m.w = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.w1 = 0;
m.x2 = 0;
m.y3 = 0;
m.w2 = 0;
m.x3 = 0;
m.w3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.sample = (1-div(m.instance,m.num_inst));
m.u = (100*m.q20);
m.px = ((3*m.u)*Math.cos(m.u));
m.py = ((3*m.u)*Math.sin(m.u));
m.pz = (125-(50*Math.log(m.u)));
m.u = (100*m.sample);
m.sx = ((3*m.u)*Math.cos(m.u));
m.sy = ((3*m.u)*Math.sin(m.u));
m.sz = (125-(50*Math.log(m.u)));
m.my_x = (m.sx+m.px);
m.my_y = (m.sy+m.py);
m.my_z = (m.sz+m.pz);
m.d = 0;
m.zoom = 1;
m.w1 = (1.57+Math.atan2(m.py, m.px));
m.w2 = (3.1+(0.5*Math.sin(m.q1)));
m.w3 = (1.7+(0.5*Math.sin(m.q2)));
m.x1 = ((Math.cos(m.w1)*m.my_x)+(Math.sin(m.w1)*m.my_y));
m.y1 = ((-Math.sin(m.w1)*m.my_x)+(Math.cos(m.w1)*m.my_y));
m.z1 = m.my_z;
m.x2 = ((Math.cos(m.w2)*m.x1)+(Math.sin(m.w2)*m.z1));
m.z2 = ((-Math.sin(m.w2)*m.x1)+(Math.cos(m.w2)*m.z1));
m.y2 = m.y1;
m.y3 = (((Math.cos(m.w3)*m.y2)+(Math.sin(m.w3)*m.z2))+(0.3*m.py));
m.z3 = (((-Math.sin(m.w3)*m.y2)+(Math.cos(m.w3)*m.z2))+(0.3*m.pz));
m.x3 = (m.x2+(0.3*m.px));
m.l = sqrt(((m.x3*m.x3)+(m.y3*m.y3)));
m.w = Math.atan2(m.x3, m.y3);
m.d = sqrt((((m.x3*m.x3)+(m.y3*m.y3))+((m.z3+m.d)*(m.z3+m.d))));
m.p = Math.tan((Math.asin(1)+Math.atan2((m.d+m.z3), m.l)));
m.my_x = ((m.zoom*Math.sin(m.w))*m.p);
m.my_y = ((m.zoom*Math.cos(m.w))*m.p);
m.x = (0.5+div(m.my_x,m.q6));
m.y = (0.6+div(m.my_y,m.q5));
m.rad = div(m.rad,m.d);
m.r = ((0.5+(0.5*m.q21))*m.sample);
m.g = ((0.5+(0.5*m.q21))*m.sample);
m.b = ((0.5+(0.5*m.q21))*m.sample);
m.r2 = (0.1*m.r);
m.g2 = (0.1*m.g);
m.b2 = (0.1*m.b);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('sample=1-instance/num_inst;\n' + 'u= 100*q20;\n' + 'px = 3*u*cos(u);\n' + 'py = 3*u*sin(u);\n' + 'pz=  125-50*log(u);\n' + 'u= 100*sample;\n' + 'sx = 3*u*cos(u);\n' + 'sy = 3*u*sin(u);\n' + 'sz = 125-50*log(u);\n' + 'my_x = sx+ px;\n' + 'my_y = sy+ py;\n' + 'my_z = sz+ pz;\n' + 'd = 0;\n' + 'zoom = 1;\n' + 'w1 = 1.57+atan2(py,px);\n' + 'w2 = 3.1+.5*sin(q1);\n' + 'w3 = 1.7+.5*sin(q2);\n' + 'x1 = cos(w1)*my_x + sin(w1)*my_y;\n' + 'y1 = -sin(w1)*my_x + cos(w1)*my_y;\n' + 'z1 = my_z;\n' + 'x2 = cos(w2)*x1 + sin(w2)*z1;\n' + 'z2 = -sin(w2)*x1 + cos(w2)*z1;\n' + 'y2 = y1;\n' + 'y3 = cos(w3)*y2 + sin(w3)*z2+.3*py;\n' + 'z3 =( -sin(w3)*y2 + cos(w3)*z2)+.3*pz;\n' + 'x3 = x2+.3*px;\n' + 'l = sqrt(x3*x3 + y3*y3);\n' + 'w = atan2(x3,y3);\n' + 'd = sqrt(x3*x3 + y3*y3 + (z3+d)*(z3+d));\n' + 'p = tan(asin(1) + atan2(d+z3,l));\n' + 'my_x = zoom*sin(w)*p;\n' + 'my_y = zoom*cos(w)*p;\n' + 'x = 0.5 + my_x/q6;\n' + 'y = 0.6 + my_y/q5;\n' + 'rad=rad/d;\n' + 'r= (.5+.5*q21)*sample;\n' + 'g= (.5+.5*q21)*sample;\n' + 'b= (.5+.5*q21)*sample;\n' + 'r2=.1*r;\n' + 'g2=.1*g;\n' + 'b2=.1*b;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 5.27792,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 30.0,
			border_r : 1.0,
			num_inst : 200.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.sx = 0;
m.my_x = 0;
m.sy = 0;
m.my_y = 0;
m.sz = 0;
m.my_z = 0;
m.px = 0;
m.py = 0;
m.sample = 0;
m.pz = 0;
m.l = 0;
m.q20 = 0;
m.p = 0;
m.q21 = 0;
m.zoom = 0;
m.u = 0;
m.w = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.w1 = 0;
m.x2 = 0;
m.y3 = 0;
m.w2 = 0;
m.x3 = 0;
m.w3 = 0;
m.t2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.sample = (1-div(m.instance,m.num_inst));
m.u = (100*m.q20);
m.px = ((3*m.u)*Math.cos(m.u));
m.py = ((3*m.u)*Math.sin(m.u));
m.pz = (125-(50*Math.log(m.u)));
m.t2 = ((0.5-(0.5*m.q21))*m.sample);
m.u = (100*m.t2);
m.sx = ((3*m.u)*Math.cos(m.u));
m.sy = ((3*m.u)*Math.sin(m.u));
m.sz = (125-(50*Math.log(m.u)));
m.my_x = (m.sx+m.px);
m.my_y = (m.sy+m.py);
m.my_z = (m.sz+m.pz);
m.d = 0;
m.zoom = 1;
m.w1 = (1.57+Math.atan2(m.py, m.px));
m.w2 = (3.1+(0.5*Math.sin(m.q1)));
m.w3 = (1.7+(0.5*Math.sin(m.q2)));
m.x1 = ((Math.cos(m.w1)*m.my_x)+(Math.sin(m.w1)*m.my_y));
m.y1 = ((-Math.sin(m.w1)*m.my_x)+(Math.cos(m.w1)*m.my_y));
m.z1 = m.my_z;
m.x2 = ((Math.cos(m.w2)*m.x1)+(Math.sin(m.w2)*m.z1));
m.z2 = ((-Math.sin(m.w2)*m.x1)+(Math.cos(m.w2)*m.z1));
m.y2 = m.y1;
m.y3 = (((Math.cos(m.w3)*m.y2)+(Math.sin(m.w3)*m.z2))+(0.3*m.py));
m.z3 = (((-Math.sin(m.w3)*m.y2)+(Math.cos(m.w3)*m.z2))+(0.3*m.pz));
m.x3 = (m.x2+(0.3*m.px));
m.l = sqrt(((m.x3*m.x3)+(m.y3*m.y3)));
m.w = Math.atan2(m.x3, m.y3);
m.d = sqrt((((m.x3*m.x3)+(m.y3*m.y3))+((m.z3+m.d)*(m.z3+m.d))));
m.p = Math.tan((Math.asin(1)+Math.atan2((m.d+m.z3), m.l)));
m.my_x = ((m.zoom*Math.sin(m.w))*m.p);
m.my_y = ((m.zoom*Math.cos(m.w))*m.p);
m.x = (0.5+div(m.my_x,m.q6));
m.y = (0.6+div(m.my_y,m.q5));
m.rad = div(m.rad,m.d);
m.r = (0.5+(0.5*Math.sin(((21*m.sample)+m.q2))));
m.g = (0.5+(0.5*Math.sin(((26*m.sample)+m.q1))));
m.b = (0.5+(0.5*Math.sin(((14*m.sample)+m.q3))));
m.r2 = (0.1*m.r);
m.g2 = (0.1*m.g);
m.b2 = (0.1*m.b);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('sample=1-instance/num_inst;\n' + 'u= 100*(q20);\n' + 'px = 3*u*cos(u);\n' + 'py = 3*u*sin(u);\n' + 'pz=  125-50*log(u);\n' + 't2= (.5-.5*q21)*sample;\n' + 'u= 100*t2;\n' + 'sx = 3*u*cos(u);\n' + 'sy = 3*u*sin(u);\n' + 'sz = 125-50*log(u);\n' + 'my_x = sx+ px;\n' + 'my_y = sy+ py;\n' + 'my_z = sz+ pz;\n' + 'd = 0;\n' + 'zoom = 1;\n' + 'w1 = 1.57+atan2(py,px);\n' + 'w2 = 3.1+.5*sin(q1);\n' + 'w3 = 1.7+.5*sin(q2);\n' + 'x1 = cos(w1)*my_x + sin(w1)*my_y;\n' + 'y1 = -sin(w1)*my_x + cos(w1)*my_y;\n' + 'z1 = my_z;\n' + 'x2 = cos(w2)*x1 + sin(w2)*z1;\n' + 'z2 = -sin(w2)*x1 + cos(w2)*z1;\n' + 'y2 = y1;\n' + 'y3 = cos(w3)*y2 + sin(w3)*z2+.3*py;\n' + 'z3 =( -sin(w3)*y2 + cos(w3)*z2)+.3*pz;\n' + 'x3 = x2+.3*px;\n' + 'l = sqrt(x3*x3 + y3*y3);\n' + 'w = atan2(x3,y3);\n' + 'd = sqrt(x3*x3 + y3*y3 + (z3+d)*(z3+d));\n' + 'p = tan(asin(1) + atan2(d+z3,l));\n' + 'my_x = zoom*sin(w)*p;\n' + 'my_y = zoom*cos(w)*p;\n' + 'x = 0.5 + my_x/q6;\n' + 'y = 0.6 + my_y/q5;\n' + 'rad=rad/d;\n' + 'r=.5+.5*sin(21*sample+q2);\n' + 'g=.5+.5*sin(26*sample+q1);\n' + 'b=.5+.5*sin(14*sample+q3);\n' + 'r2=.1*r;\n' + 'g2=.1*g;\n' + 'b2=.1*b;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.5,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.5,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			num_inst : 7.0,
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
m.trans = ((div(Math.floor(rand(Math.floor(m.q30))),15)+m.instance)-m.instance);
m.trans2 = ((div(Math.floor(rand(Math.floor(m.q30))),15)+m.instance)-m.instance);
m.trans3 = ((div(Math.floor(rand(Math.floor(m.q30))),15)+m.instance)-m.instance);
m.a = m.trans;
m.x = (((0.5+(((Math.floor(rand(15))*0.01)*m.mid_att)*ifcond(equal(Math.floor(rand(2)), 1), 1, -1)))+m.instance)-m.instance);
m.y = (((0.5+(((Math.floor(rand(15))*0.01)*m.mid_att)*ifcond(equal(Math.floor(rand(2)), 1), 1, -1)))+m.instance)-m.instance);
m.rad = (((0.09+div(Math.floor(rand(Math.floor(m.q30))),15))+m.instance)-m.instance);
m.r = (((Math.floor(rand(m.q30))*0.1)+m.instance)-m.instance);
m.g = (((Math.floor(rand(m.q30))*0.1)+m.instance)-m.instance);
m.b = (((Math.floor(rand(m.q30))*0.1)+m.instance)-m.instance);
m.r2 = (((Math.floor(rand(m.q30))*0.1)+m.instance)-m.instance);
m.g2 = (((Math.floor(rand(m.q30))*0.1)+m.instance)-m.instance);
m.b2 = (((Math.floor(rand(m.q30))*0.1)+m.instance)-m.instance);
m.border_r = (((Math.floor(rand(m.q30))*0.1)+m.instance)-m.instance);
m.border_g = (((Math.floor(rand(m.q30))*0.1)+m.instance)-m.instance);
m.border_b = (((Math.floor(rand(m.q30))*0.1)+m.instance)-m.instance);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trans = int(rand(int(q30)))/15+instance-instance;\n' + 'trans2 = int(rand(int(q30)))/15+instance-instance;\n' + 'trans3 = int(rand(int(q30)))/15+instance-instance;\n' + 'a = trans;\n' + 'x = .5 + int(rand(15))*0.01*mid_att*if(equal(int(rand(2)),1),1,-1)+instance-instance;\n' + 'y = .5 + int(rand(15))*0.01*mid_att*if(equal(int(rand(2)),1),1,-1)+instance-instance;\n' + 'rad = .09 + int(rand(int(q30)))/15+instance-instance;\n' + 'r=int(rand(q30))*.1+instance-instance;\n' + 'g=int(rand(q30))*.1+instance-instance;\n' + 'b=int(rand(q30))*.1+instance-instance;\n' + 'r2=int(rand(q30))*.1+instance-instance;\n' + 'g2=int(rand(q30))*.1+instance-instance;\n' + 'b2=int(rand(q30))*.1+instance-instance;\n' + 'border_r=int(rand(q30))*.1+instance-instance;\n' + 'border_g=int(rand(q30))*.1+instance-instance;\n' + 'border_b=int(rand(q30))*.1+instance-instance;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '   vec2 P_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (uv - 0.5);\n' + '  P_3 = (tmpvar_4 + 0.5);\n' + '  tmpvar_2 = texture2D (sampler_main, P_3);\n' + '  ret_1.x = tmpvar_2.x;\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = ((tmpvar_4 * 0.98) + 0.5);\n' + '  tmpvar_5 = texture2D (sampler_main, P_6);\n' + '  ret_1.y = tmpvar_5.y;\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = ((tmpvar_4 * 0.96) + 0.5);\n' + '  tmpvar_7 = texture2D (sampler_main, P_8);\n' + '  ret_1.z = tmpvar_7.z;\n' + '  ret_1 = (ret_1 - (ret_1 * 0.5));\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_blur2, uv);\n' + '  ret_1 = ((ret_1 * abs(\n' + '    (((tmpvar_9.xyz * scale2) + bias2) - 0.5)\n' + '  )) * 5.0);\n' + '  ret_1 = (ret_1 - 0.01);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur3, uv);\n' + '  ret_1 = ((-0.8 * tmpvar_2.xyz) + ((tmpvar_3.xyz * scale3) + bias3));\n' + '  ret_1 = (ret_1 * 2.0);\n' + '  ret_1 = (ret_1 - (roam_sin.xyz * roam_cos.zxy));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_b = max((1 / 3.14) + .5 * sin(time) - (2 / (3 * 3.14)) * cos(2 * time), .3);\n' + 'wave_g = .1 * max(5 * mid * sin(mid * time) / (mid_att * mid_att + mid * mid), .1);\n' + 'wave_r = max(5 * treb * sin(treb * time) / (treb_att * treb_att + treb * treb), .3);\n' + 'decay = .99999995 + .00000005 * abs(sin(50 * time));\n' + 'vol=bass+treb+mid;\n' + 'atime=atime+vol;\n' + 'q8=atime*.01;\n' + 'q30=vol*2;\n' + 'q32=aspecty;'),
	'pixel_eqs_str' : ('zoom = if(below(rad, .03), .9, 1 - 2 * (-(3/2) * pow(2.718, sin(bass * bass * time * sin(31.4 * rad) / rad)) + .5 * pow(2.718, sin(treb * treb * time * rad * sin(3.14 * rad) / rad)))/500);'),
};

return pmap;
});
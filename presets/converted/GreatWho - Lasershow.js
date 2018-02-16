define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.61,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.286,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 6.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 2.11299,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.48,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.01,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.9,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 4.619,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.79,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 1.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.9,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.p2 = 0;
m.dst = 0;
m.i = 0;
m.zc = 0;
m.yc = 0;
m.mx = 0;
m.xc = 0;
m.my = 0;
m.mz = 0;
m.v = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.zs = 0;
m.x2 = 0;
m.y3 = 0;
m.z4 = 0;
m.ys = 0;
m.x3 = 0;
m.y4 = 0;
m.xs = 0;
m.x4 = 0;
m.vt = 0;
m.ct = 0;
m.n = 400;
m.r = 0.5;
m.mx = 0;
m.my = 0;
m.mz = 0;
m.dst = 2;
m.rx = 0;
m.ry = 0;
m.rz = 0;
m.rdx = 1;
m.rdy = 1;
m.rdz = 1;
m.p = 3.14159265;
m.p2 = (2.0*m.p);
m.p3 = div(180,m.p);
m.dir = 1;
		return m;
	},
	'frame_eqs' : function(m) {
m.rot -= ((0.0125*m.bass)*Math.sin((m.time+m.bass)));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.vt = div((Math.sin(((m.i*m.p2)*4))*(m.v+1)),2);
m.x1 = Math.sin(((m.i*m.p2)*2));
m.y1 = ifcond(below(m.i, 0.5), m.vt, 0);
m.z1 = ifcond(above(m.i, 0.5), m.vt, 0);
m.y2 = ((m.y1*m.xc)-(m.z1*m.xs));
m.z2 = ((m.y1*m.xs)+(m.z1*m.xc));
m.x2 = ((m.z2*m.ys)+(m.x1*m.yc));
m.z3 = ((m.z2*m.yc)-(m.x1*m.ys));
m.x3 = ((m.x2*m.zc)-(m.y2*m.zs));
m.y3 = ((m.y2*m.zc)+(m.x2*m.zs));
m.x4 = (m.mx+m.x3);
m.y4 = (m.my+m.y3);
m.z4 = (m.mz+m.z3);
m.x = div(m.x4,(1+div(m.z4,m.dst)));
m.y = div(m.y4,(1+div(m.z4,m.dst)));
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.86,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.7,
			r : 1.0,
			border_g : 1.0,
			rad : 0.01,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1024.0,
			},
		'init_eqs' : function(m) {
m.d = 0;
m.dir = 0;
m.n = 0;
m.n = 1024;
m.dir = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.dir *= ifcond(above(m.bass, 1.3), -1, 1);
m.d = div((0.2*m.instance),m.n);
m.r = (((m.mid*m.time)*3.1824)*m.treb);
m.x = ((0.5+(((m.dir*Math.cos(m.r))*m.d)*0.005))-(((m.dir*Math.sin((-m.d+((0.5*m.mid)*m.time))))*m.d)*10));
m.y = ((0.5+(((m.dir*Math.sin(m.r))*m.d)*0.005))+(((m.dir*Math.cos((-m.d+((0.5*m.mid)*m.time))))*m.d)*10));
		return m;
	},
		'init_eqs_str' : ('n=1024;\n' + 'dir=1;'),
		'frame_eqs_str' : ('dir*=if(above(bass,1.3),-1,1);\n' + 'd=0.2*instance/n;\n' + 'r=mid*time*3.1824*treb;\n' + 'x=.5+dir*cos(r)*d*.005-dir*sin(-d+0.5*mid*time)*d*10;\n' + 'y=.5+dir*sin(r)*d*.005+dir*cos(-d+0.5*mid*time)*d*10;'),

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
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.21524,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 36.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.a = m.bass;
m.rad = div(((m.bass+m.mid)+m.treb),3);
m.x = ifcond(below(m.bass, 1.2), ((rand(10)*0.1)*m.treb), 0.5);
m.y = ifcond(below(m.bass, 1.2), ((rand(10)*0.1)*m.mid), 0.5);
m.r = (1-(0.7+(0.5*Math.abs(Math.sin(((0.05*m.time)+(0.5*m.bass)))))));
m.g = (1-(0.5+(0.5*Math.abs(Math.cos(((0.05*m.time)-(0.4*m.mid)))))));
m.b = (1-(0.5+(0.5*Math.abs(Math.sin(((0.05*m.time)+(0.6*m.treb)))))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a=bass;\n' + 'rad=(bass+mid+treb)/3;\n' + 'x=if(below(bass,1.2),rand(10)*0.1*treb,0.5);\n' + 'y=if(below(bass,1.2),rand(10)*0.1*mid,0.5);\n' + 'r=1-(0.7+0.5*abs(sin(0.05*time+0.5*bass)));\n' + 'g=1-(0.5+0.5*abs(cos(0.05*time-0.4*mid)));\n' + 'b=1-(0.5+0.5*abs(sin(0.05*time+0.6*treb)));'),

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
	'init_eqs_str' : ('ct=0;\n' + 'n=400;\n' + 'r=0.5;\n' + 'mx=0;\n' + 'my=0;\n' + 'mz=0;\n' + 'dst=2;\n' + 'rx=0;\n' + 'ry=0;\n' + 'rz=0;\n' + 'rdx=1;\n' + 'rdy=1;\n' + 'rdz=1;\n' + 'p=3.14159265;\n' + 'p2=2.0*p;\n' + 'p3=180/p;\n' + 'dir=1;'),
	'frame_eqs_str' : ('rot-=0.0125*(bass)*sin(time+bass);'),
	'pixel_eqs_str' : ('vt=sin(i*p2*4)*(v+1)/2;\n' + 'x1=sin(i*p2*2);\n' + 'y1=if(below(i,0.5),vt,0);\n' + 'z1=if(above(i,0.5),vt,0);\n' + 'y2=y1*xc-z1*xs;\n' + 'z2=y1*xs+z1*xc;\n' + 'x2=z2*ys+x1*yc;\n' + 'z3=z2*yc-x1*ys;\n' + 'x3=x2*zc-y2*zs;\n' + 'y3=y2*zc+x2*zs;\n' + 'x4=mx+x3;\n' + 'y4=my+y3;\n' + 'z4=mz+z3;\n' + 'x=x4/(1+z4/dst);\n' + 'y=y4/(1+z4/dst);'),
};

return pmap;
});
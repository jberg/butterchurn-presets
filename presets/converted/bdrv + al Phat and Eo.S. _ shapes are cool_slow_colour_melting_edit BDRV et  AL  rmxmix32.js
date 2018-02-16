define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 8.0,
		wave_g : 0.4,
		ib_g : 0.0,
		mv_x : 31.999994,
		warpscale : 0.01,
		brighten : 1.0,
		mv_y : 24.000004,
		wave_scale : 0.011726,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.11,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.02,
		mv_dy : -0.02,
		mv_a : 0.0,
		fshader : 0.0,
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
		nwrapmode_x : 1.0,
		cx : 0.5,
		dy : 0.0,
		nwrapmode_y : 1.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.1,
		nechowrap_x : 0.0,
		mv_l : 5.0,
		invert : 1.0,
		rot : 0.0,
		wave_thick : 0.0,
		nechowrap_y : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.96,
		wave_a : 0.019788,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.3,
		ib_b : 0.0,
		mv_r : 0.49,
		rating : 5.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.nn = 0;
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.mod = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.ag = 0;
m.q7 = 0;
m.num = 0;
m.speed = 0;
m.anga = 0;
m.q8 = 0;
m.flux = 0;
m.ox = 0;
m.oy = 0;
m.speedinv = 0;
m.an = 0;
m.qa = 0;
m.qb = 0;
m.qc = 0;
m.rd = 0;
m.star = 0;
m.newzoom = 0;
m.zm = 0;
m.radi = 0;
m.seg = 0;
m.newrad = 0;
m.newx = 0;
m.pi = 0;
m.newy = 0;
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
m.decay = 1;
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
m.zoom = 0.9995;
		m.rkeys = ['q1','q2','q3','ag','rd'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.nn = (mod((m.time*0.2),7)+1);
m.nn = 7;
m.cx = div((Math.floor((m.x*m.nn))+0.5),m.nn);
m.cy = div((Math.floor((m.y*m.nn))+0.5),m.nn);
m.dx = ((m.q1+Math.floor(((m.x*m.nn)-2)))*0.0001);
m.dx = ((m.q2+Math.floor(((m.y*m.nn)-2)))*0.0001);
m.dx = (Math.tan((m.q1+(Math.floor((m.x*m.nn))*(m.q2+1))))*0.01);
m.dx = (Math.tan((m.q2+(Math.floor((m.y*m.nn))*(m.q1+1))))*0.01);
m.rot = (Math.floor((Math.tan((m.q3+((m.cx+m.cy)*10)))*2))*0.06);
m.sx = (-0.95+((m.bass*0.5)*m.rd));
m.sy = (-0.95-((m.treb*0.5)*m.ag));
m.cx = (0.5+m.q4);
m.cy = (0.5-m.q5);
m.rd = sqrt((sqr((((m.x-0.5)-m.q4)*2))+sqr((((m.y-0.5)+m.q5)*1.5))));
m.zm = 0.95;
m.ag = Math.atan(div(((m.y-0.5)+m.q5),((m.x-0.5)-m.q4)));
m.star = div((Math.atan((m.ag*6))*((4-m.rd)-m.ag)),5);
m.zm = (m.zm+(div((m.star*m.ag),20)*m.ag));
m.sx = m.zm;
m.sy = m.zm;
m.dx = (Math.sin((m.y*140))*(m.bass*0.01));
m.dy = (Math.cos((m.x*140))*(m.bass*0.01));
m.q1 = (0.4*m.rad);
m.q2 = (0.3*m.rad);
m.q3 = below(m.rad, ((0.1*m.q5)+0.3));
m.q7 = ifcond(m.q3, 0, (10+Math.floor((1*m.rad))));
m.q8 = ifcond(m.q3, 0, (10+Math.floor((1*m.rad))));
m.cx = ifcond(m.q3, 0.5, ((bitand(0,((m.x*m.q7)-m.q1))*div(1,m.q7))+(0.1*m.q1)));
m.cy = ifcond(m.q3, 0.5, ((bitand(0,((m.y*m.q8)-m.q2))*div(1,m.q8))+(0.1*m.q2)));
m.rot = ifcond(m.q3, ((2*m.q6)*m.rad), (((0.1*m.rad)+(0.1*m.bass))+((0.00*m.cx)*m.cy)));
m.num = 8;
m.pi = 3.141592654;
m.radi = ((m.y-0.5)*0.75);
m.radi = (m.y-0.5);
m.radi = pow(((m.radi*m.radi)+((m.x-0.5)*(m.x-0.5))), 0.5);
m.an = ((m.ang+m.pi)+m.time);
m.an = (m.an-((m.pi*2)*Math.floor(div(m.an,(m.pi*2)))));
m.mod = 0.1;
m.seg = (m.ang+m.pi);
m.seg = (div(m.seg,(m.pi*2))*m.num);
m.seg = Math.floor(m.seg);
m.seg = (m.seg-equal(m.seg, m.num));
m.anga = ((m.ang+m.pi)-(div((m.pi*2),m.num)*m.seg));
m.anga = ifcond(equal(mod(m.seg,2), 0), (div((m.pi*2),m.num)-m.anga), m.anga);
m.anga = (m.anga+div(m.pi,4));
m.ox = (0.5-(m.radi*Math.sin(m.anga)));
m.oy = (0.5+(m.radi*Math.cos(m.anga)));
m.dx = (equal(m.seg, 3)*(m.x-m.ox));
m.dy = (equal(m.seg, 3)*(m.y-m.oy));
m.dx = (above(m.seg, 0)*(m.x-m.ox));
m.dy = (above(m.seg, 0)*(m.y-m.oy));
m.nn = (mod((m.time*0.2),7)+1);
m.nn = 7;
m.cx = div((Math.floor((m.x*m.nn))+0.5),m.nn);
m.cy = div((Math.floor((m.y*m.nn))+0.5),m.nn);
m.dx = ((m.q1+Math.floor(((m.x*m.nn)-2)))*0.0001);
m.dx = ((m.q2+Math.floor(((m.y*m.nn)-2)))*0.0001);
m.dx = (Math.tan((m.q1+(Math.floor((m.x*m.nn))*(m.q2+1))))*0.01);
m.dx = (Math.tan((m.q2+(Math.floor((m.y*m.nn))*(m.q1+1))))*0.01);
m.rot = (Math.floor((Math.tan((m.q3+((m.cx+m.cy)*10)))*2))*0.06);
m.cx = ((bitand(0,((m.x*m.q3)-m.q5))+m.q5)*m.q4);
m.cy = ((bitand(0,((m.y*m.q3)-m.q6))+m.q6)*m.q4);
m.newx = (m.q1-m.x);
m.newy = (m.q2-m.y);
m.newrad = (sqrt(((m.newx*m.newx)+((0.5625*m.newy)*m.newy)))*2);
m.newzoom = pow((1.05+(0.03*m.newrad)), pow((0.01+Math.sin((m.newrad*m.newrad))), ((m.newrad*2)-1)));
m.dx = ((m.newx*m.newzoom)-m.newx);
m.dy = ((m.newy*m.newzoom)-m.newy);
m.dx = (m.dx*0.1);
m.dy = (m.dy*0.1);
m.rot = ((2*m.newrad)*((0.5*(0.5-m.rad))+0.1));
m.rot = ((m.rot*Math.sin((m.time*0.01)))*0.2);
m.zoom = (1+(0.01*Math.sin((13.28*m.rad))));
m.zoom = (m.zoom+(((equal(m.q2, 1)*m.q3)*0.1)*(m.x-0.5)));
m.zoom = (m.zoom+(((equal(m.q2, 2)*m.q3)*0.1)*(0.5-m.x)));
m.zoom = (m.zoom+(((equal(m.q2, 5)*m.q3)*0.1)*(0.5-m.y)));
m.zoom = (m.zoom+(((equal(m.q2, 4)*m.q3)*0.1)*(m.y-0.5)));
m.rot = (m.rot+((equal(m.q2, 3)*m.q3)*0.3));
m.rot = (m.rot-((equal(m.q2, 6)*m.q3)*0.3));
m.sx = (m.sx+((equal(m.q2, 7)*m.q3)*0.2));
m.sy = (m.sy-((equal(m.q2, 8)*m.q3)*0.2));
m.sx = (m.sx-((equal(m.q2, 9)*m.q3)*0.2));
m.sy = (m.sy+((equal(m.q2, 10)*m.q3)*0.2));
m.dy = (m.dy+((((equal(m.q2, 11)*Math.abs((0.5-m.x)))*sign((0.5-m.x)))*m.q3)*0.2));
m.dx = (m.dx+((((equal(m.q2, 12)*Math.abs((0.5-m.y)))*sign((0.5-m.y)))*m.q3)*0.2));
m.dx = (m.dx-((((equal(m.q2, 14)*Math.abs((0.5-m.y)))*sign((0.5-m.y)))*m.q3)*0.2));
m.dy = (m.dy-((((equal(m.q2, 13)*Math.abs((0.5-m.x)))*sign((0.5-m.x)))*m.q3)*0.2));
m.cx = 0.5;
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
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 1.0,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 0.3,
			b2 : 1.0,
			x_wrap_mode : 0.0,
			a2 : 1.0,
			y_wrap_mode : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 1.670888,
			x : 0.5,
			y : 1.8,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.2,
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
m.a = above(1, (m.bass-0.1));
m.a2 = above(1, (m.bass-0.1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('flux=q5*9;\n' + 'fluxs=max(flux,0);\n' + 'fluxs=min(fluxs,1);\n' + 'advflux=(q3*fluxs) + (-q3 * (1-fluxs));\n' + 'adv=adv+advflux;\n' + 'advs=adv/256;\n' + 'ang=advs;\n' + 'rad=1.671 + q3/25;\n' + 'a=above(1,bass-0.1);\n' + 'a2=above(1,bass-0.1);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.0,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.1,
			x_wrap_mode : 0.0,
			a2 : 1.0,
			y_wrap_mode : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.35,
			y : 1.8,
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
m.r = m.treb;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('y=0.1 + q2*0.4;\n' + 'rad=q2/2;\n' + 'ang=-q2*2;\n' + 'r=treb;'),

		},
		{
		'baseVals' : {
			r2 : 0.1,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.05,
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.0,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.444842,
			x : 0.59,
			y : 1.8,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.mover = 0;
m.dir = 0;
m.rotator = 0;
m.dir = 3;
m.mover = 0;
m.rotator = 0.255;
			m.rkeys = ['mover','dir','rotator'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = m.rotator;
m.x = ifcond(equal(m.dir, 1), (1-m.mover), ifcond(equal(m.dir, 1.5), 0.15, ifcond(equal(m.dir, 2), 0, ifcond(equal(m.dir, 2.5), 0, ifcond(equal(m.dir, 3), (0+m.mover), ifcond(equal(m.dir, 3.5), 1, ifcond(equal(m.dir, 4), 1, 1)))))));
m.y = ifcond(equal(m.dir, 1), 1, ifcond(equal(m.dir, 1.5), 1, ifcond(equal(m.dir, 2), (1-m.mover), ifcond(equal(m.dir, 2.5), 0, ifcond(equal(m.dir, 3), 0, ifcond(equal(m.dir, 3.5), 0, ifcond(equal(m.dir, 4), (0+m.mover), 1)))))));
m.mover = ifcond(equal(m.dir, 1), (m.mover+0.005), ifcond(equal(m.dir, 1.5), 0, ifcond(equal(m.dir, 2), (m.mover+0.005), ifcond(equal(m.dir, 2.5), 0, ifcond(equal(m.dir, 3), (m.mover+0.005), ifcond(equal(m.dir, 3.5), 0, ifcond(equal(m.dir, 4), (m.mover+0.005), 0)))))));
m.dir = ifcond(equal(m.dir, 1), ifcond(above(m.mover, 0.995), 1.5, m.dir), ifcond(equal(m.dir, 1.5), ifcond(below(m.rotator, -1.29), 2, m.dir), ifcond(equal(m.dir, 2), ifcond(above(m.mover, 0.995), 2.5, m.dir), ifcond(equal(m.dir, 2.5), ifcond(below(m.rotator, -2.85), 3, m.dir), ifcond(equal(m.dir, 3), ifcond(above(m.mover, 0.995), 3.5, m.dir), ifcond(equal(m.dir, 3.5), ifcond(below(m.rotator, -4.44), 4, m.dir), ifcond(equal(m.dir, 4), ifcond(above(m.mover, 0.995), 4.5, m.dir), ifcond(equal(m.dir, 4.5), ifcond(below(m.rotator, -5.94), 1, m.dir), m.dir))))))));
m.rotator = ifcond(equal(m.dir, 1.5), ifcond(above(m.rotator, -1.31), (m.rotator-0.05), m.rotator), ifcond(equal(m.dir, 2), -1.3, ifcond(equal(m.dir, 2.5), ifcond(above(m.rotator, -2.87), (m.rotator-0.05), m.rotator), ifcond(equal(m.dir, 3), -2.86, ifcond(equal(m.dir, 3.5), ifcond(above(m.rotator, -4.46), (m.rotator-0.05), m.rotator), ifcond(equal(m.dir, 4), -4.45, ifcond(equal(m.dir, 4.5), ifcond(above(m.rotator, -5.97), (m.rotator-0.05), m.rotator), ifcond(equal(m.dir, 4), -5.96, 0.26))))))));
m.b = above(m.mid, 1.5);
m.r2 = above(m.mid, 1.5);
m.g2 = above(m.mid, 1.5);
m.b2 = above(m.mid, 1.5);
		return m;
	},
		'init_eqs_str' : ('dir = 3;\n' + 'mover = 0;\n' + 'rotator = .255;'),
		'frame_eqs_str' : ('ang = rotator;\n' + 'x = if(equal(dir,1),1 - mover,if(equal(dir,1.5),.15,if(equal(dir,2),0,if(equal(dir,2.5),0, if(equal(dir,3),0+mover,if(equal(dir,3.5),1,if(equal(dir,4),1,1)))))));\n' + 'y = if(equal(dir,1),1,if(equal(dir,1.5),1,if(equal(dir,2),1 - mover,if(equal(dir,2.5),0, if(equal(dir,3),0,if(equal(dir,3.5),0,if(equal(dir,4),0+mover,1)))))));\n' + 'mover = if(equal(dir,1),mover + .005,if(equal(dir,1.5),0,if(equal(dir,2),mover + .005,if(equal(dir,2.5),0, if(equal(dir,3),mover+.005,if(equal(dir,3.5),0,if(equal(dir,4),mover+.005,0)))))));\n' + 'dir = if(equal(dir,1),if(above(mover,.995),1.5,dir),if(equal(dir,1.5),if(below(rotator,-1.29),2,dir), if(equal(dir,2),if(above(mover,.995),2.5,dir),if(equal(dir,2.5),if(below(rotator,-2.85),3,dir), if(equal(dir,3),if(above(mover,.995),3.5,dir),if(equal(dir,3.5),if(below(rotator,-4.44),4,dir), if(equal(dir,4),if(above(mover,.995),4.5,dir),if(equal(dir,4.5),if(below(rotator,-5.94),1,dir),dir))))))));\n' + 'rotator = if(equal(dir,1.5),if(above(rotator,-1.31),rotator - .05,rotator),if(equal(dir,2),-1.3, if(equal(dir,2.5),if(above(rotator,-2.87),rotator-.05,rotator),if(equal(dir,3),-2.86, if(equal(dir,3.5),if(above(rotator,-4.46),rotator-.05,rotator),if(equal(dir,4),-4.45, if(equal(dir,4.5),if(above(rotator,-5.97),rotator-.05,rotator),if(equal(dir,4),-5.96,.26))))))));\n' + 'b = above(mid,1.5);\n' + 'r2 = above(mid,1.5);\n' + 'g2 = above(mid,1.5);\n' + 'b2 = above(mid,1.5);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.98,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.09,
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.0,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 1.0,
			y_wrap_mode : 0.0,
			r : 0.98,
			border_g : 1.0,
			rad : 0.1,
			x : 0.84,
			y : 0.5,
			ang : 0.0,
			sides : 6.0,
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
m.b = (0.70+(Math.sin((div(m.time,2)+4))*0.50));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=sin(time/2)*0.4 + 0.5;\n' + 'y=sin(time)*0.4+0.5;\n' + 'rad=(q1*q1)/2;\n' + 'ang=q1*4;\n' + 'r=0.70 + (sin(time/2))*0.50;\n' + 'g=0.70 + (sin(time/2 + 2)) * 0.50;\n' + 'b=0.70 + (sin(time/2 + 4)) * 0.50;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;\n' + 'q1=0;\n' + 'q2=0;\n' + 'q3=0;'),
	'frame_eqs_str' : ('decay=1;\n' + 'speed=0.80;\n' + 'speedinv=1-speed;\n' + 'q1=(qa*speed + bass*speedinv);\n' + 'q2=(qb*speed + mid *speedinv);\n' + 'q3=(qc*speed + treb*speedinv);\n' + 'qa=q1;\n' + 'qb=q2;\n' + 'qc=q3;\n' + 'flux=sin(time/2);\n' + 'q4=flux * 0.5 + 0.5;\n' + 'q5=flux;\n' + 'zoom=.9995;'),
	'pixel_eqs_str' : ('nn = (time*.2)%7+1;\n' + 'nn = 7;\n' + 'cx = (int(x*nn)+.5)/nn;\n' + 'cy = (int(y*nn)+.5)/nn;\n' + 'dx = (q1+int(x*nn-2))*.0001;\n' + 'dx = (q2+int(y*nn-2))*.0001;\n' + 'dx = tan(q1+int(x*nn)*(q2+1))*.01;\n' + 'dx = tan(q2+int(y*nn)*(q1+1))*.01;\n' + 'rot = int(tan(q3+(cx+cy)*10)*2)*.06;\n' + 'sx=-.95+(bass*0.5)*rd;\n' + 'sy=-.95-(treb*0.5)*ag;\n' + 'cx=0.5+q4;\n' + 'cy=0.5-q5;\n' + 'rd=sqrt( sqr( (x-0.5-q4)*2) + sqr( (y-0.5+q5)*1.5 ) );\n' + 'zm=.95;\n' + 'ag=atan( (y-0.5+q5)/(x-0.5-q4) );\n' + 'star=atan(ag*6)*((4-rd)-ag)/5;\n' + 'zm=zm+star*ag/20*ag;\n' + 'sx=zm;\n' + 'sy=zm;\n' + 'dx=sin(y*140)*(bass*0.01);\n' + 'dy=cos(x*140)*(bass*0.01);\n' + 'q1 = 0.4*rad;\n' + 'q2= (0.3*rad);\n' + 'q3  = below(rad,0.1*q5+ 0.3);\n' + 'q7 =if(q3,0,10 + int(1*(rad)));\n' + 'q8 =if(q3,0,10 + int(1*(rad)));\n' + 'cx =if(q3,0.5,(0&(x*q7-q1))*(1/q7)+0.1*q1);\n' + 'cy =if(q3,0.5,(0&(y*q8-q2))*(1/q8)+0.1*q2);\n' + 'rot = if(q3,2*q6*rad,0.1*rad+ 0.1*bass+0.00*cx*cy);\n' + 'num = 8;\n' + 'pi = 3.141592654;\n' + 'radi = (y-.5)*.75;\n' + 'radi = (y-.5);\n' + 'radi = pow(radi*radi + (x-.5)*(x-.5),.5);\n' + 'an = ang + pi + time;\n' + 'an = an - pi*2*int(an/(pi*2));\n' + 'mod = .1;\n' + 'seg = ang + pi;\n' + 'seg = seg/(pi*2)*num;\n' + 'seg = int(seg);\n' + 'seg = seg - equal(seg,num);\n' + 'anga = (ang + pi) - (pi*2/num)*seg;\n' + 'anga = if(equal(seg%2,0),(pi*2/num) - anga,anga);\n' + 'anga = anga + pi/4;\n' + 'ox = .5 - radi*sin(anga);\n' + 'oy = .5 + radi*cos(anga);\n' + 'dx = equal(seg,3)*(x-ox);\n' + 'dy = equal(seg,3)*(y-oy);\n' + 'dx = above(seg,0)*(x-ox);\n' + 'dy = above(seg,0)*(y-oy);\n' + 'nn = (time*.2)%7+1;\n' + 'nn = 7;\n' + 'cx = (int(x*nn)+.5)/nn;\n' + 'cy = (int(y*nn)+.5)/nn;\n' + 'dx = (q1+int(x*nn-2))*.0001;\n' + 'dx = (q2+int(y*nn-2))*.0001;\n' + 'dx = tan(q1+int(x*nn)*(q2+1))*.01;\n' + 'dx = tan(q2+int(y*nn)*(q1+1))*.01;\n' + 'rot = int(tan(q3+(cx+cy)*10)*2)*.06;\n' + 'cx = ((0&(x*q3-q5))+q5)*q4;\n' + 'cy = ((0&(y*q3-q6))+q6)*q4;\n' + 'newx = q1-x;\n' + 'newy = q2-y;\n' + 'newrad = sqrt((newx)*(newx)+0.5625*(newy)*(newy))*2;\n' + 'newzoom = pow(1.05 + 0.03*newrad, pow(0.01+sin(newrad*newrad), newrad*2-1));\n' + 'dx = (newx)*newzoom - newx;\n' + 'dy = (newy)*newzoom - newy;\n' + 'dx =dx*0.1;\n' + 'dy=dy*0.1;\n' + 'rot = 2*newrad*(0.5*(0.5-rad)+0.1);\n' + 'rot=rot*sin(time*0.01)*0.2;\n' + 'zoom =1+.01*sin(13.28*rad);\n' + 'zoom=zoom+equal(q2,1)*q3*.1*(x-.5);\n' + 'zoom=zoom+equal(q2,2)*q3*.1*(.5-x);\n' + 'zoom=zoom+equal(q2,5)*q3*.1*(.5-y);\n' + 'zoom=zoom+equal(q2,4)*q3*.1*(y-.5);\n' + 'rot=rot+equal(q2,3)*q3*.3;\n' + 'rot=rot-equal(q2,6)*q3*.3;\n' + 'sx=sx+equal(q2,7)*q3*.2;\n' + 'sy=sy-equal(q2,8)*q3*.2;\n' + 'sx=sx-equal(q2,9)*q3*.2;\n' + 'sy=sy+equal(q2,10)*q3*.2;\n' + 'dy=dy+equal(q2,11)*abs(.5-x)*sign(.5-x)*q3*.2;\n' + 'dx=dx+equal(q2,12)*abs(.5-y)*sign(.5-y)*q3*.2;\n' + 'dx=dx-equal(q2,14)*abs(.5-y)*sign(.5-y)*q3*.2;\n' + 'dy=dy-equal(q2,13)*abs(.5-x)*sign(.5-x)*q3*.2;\n' + 'cx=0.5;'),
};

return pmap;
});
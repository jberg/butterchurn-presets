define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 1.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 1.0,
		wave_scale : 0.0,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.005,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.087,
		mv_dy : 0.343,
		mv_a : 0.199,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.881,
		echo_zoom : 1.169,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.03,
		wave_x : 0.448,
		wave_y : 0.122,
		zoom : 0.99951,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.663,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.173,
		decay : 0.98,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.89,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.dist_y = 0;
m.q1 = 0;
m.disk_shift = 0;
m.a = 0;
m.q2 = 0;
m.b = 0;
m.q3 = 0;
m.vx = 0;
m.mod = 0;
m.q4 = 0;
m.vy = 0;
m.x_or_y = 0;
m.vang = 0;
m.q5 = 0;
m.in = 0;
m.cen_x = 0;
m.timer = 0;
m.ag = 0;
m.cen_y = 0;
m.dvx = 0;
m.num = 0;
m.anga = 0;
m.q8 = 0;
m.dvy = 0;
m.ox = 0;
m.oy = 0;
m.outx = 0;
m.mx = 0;
m.outy = 0;
m.my = 0;
m.an = 0;
m.dis = 0;
m.out = 0;
m.cdelay1 = 0;
m.cdelay2 = 0;
m.rd = 0;
m.star = 0;
m.musictime = 0;
m.zm = 0;
m.inx = 0;
m.radi = 0;
m.iny = 0;
m.seg = 0;
m.counter1 = 0;
m.counter2 = 0;
m.radxy = 0;
m.colorcounter = 0;
m.pi = 0;
m.tm = 0;
m.ypos = 0;
m.xpos = 0;
m.dist_x = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.counter1 = ifcond(equal(m.counter2, 1), ifcond(equal(m.counter1, 1), 0, (m.counter1+0.2)), 1);
m.counter2 = ifcond(equal(m.counter1, 1), ifcond(equal(m.counter2, 1), 0, (m.counter2+0.2)), 1);
m.cdelay1 = ifcond(equal(m.cdelay2, 1), 1, ifcond(equal(mod(m.colorcounter,2), 1), ifcond(equal(m.counter1, 1), 2, 0), ifcond(equal(m.counter2, 1), 2, 0)));
m.cdelay2 = ifcond(equal(m.cdelay1, 2), 1, 0);
m.colorcounter = ifcond(above(m.colorcounter, 7), 0, ifcond(equal(m.cdelay1, 1), (m.colorcounter+1), m.colorcounter));
m.ib_r = (0.5*ifcond(equal(m.colorcounter, 1), 1, ifcond(equal(m.colorcounter, 2), 1, ifcond(equal(m.colorcounter, 3), 1, ifcond(equal(m.colorcounter, 4), Math.sin((m.counter2+2.1)), ifcond(equal(m.colorcounter, 5), 0, ifcond(equal(m.colorcounter, 6), 0, Math.sin(m.counter1))))))));
m.ib_g = (0.5*ifcond(equal(m.colorcounter, 1), 0, ifcond(equal(m.colorcounter, 2), Math.sin((m.counter2*0.5)), ifcond(equal(m.colorcounter, 3), Math.sin(((m.counter1+1.75)*0.4)), ifcond(equal(m.colorcounter, 4), 1, ifcond(equal(m.colorcounter, 5), 1, ifcond(equal(m.colorcounter, 6), Math.sin((m.counter2+2)), 0)))))));
m.ib_b = ifcond(equal(m.colorcounter, 1), Math.sin((m.counter1+2.1)), ifcond(equal(m.colorcounter, 2), 0, ifcond(equal(m.colorcounter, 3), 0, ifcond(equal(m.colorcounter, 4), 0, ifcond(equal(m.colorcounter, 5), Math.sin(m.counter1), ifcond(equal(m.colorcounter, 6), 1, 1))))));
m.ob_r = (m.ib_r-0.5);
m.ob_g = (m.ib_g-0.5);
m.ob_b = (m.ib_b-0.5);
m.q1 = m.ib_r;
m.q2 = m.ib_g;
m.q3 = m.ib_b;
m.decay = 0.9999;
m.musictime = (m.musictime+(((m.mid*m.mid)*m.mid)*0.02));
m.xpos = (Math.sin((m.musictime*0.6))*0.3);
m.ypos = (Math.sin((m.musictime*0.4))*0.3);
m.q4 = m.xpos;
m.q5 = m.ypos;
		m.rkeys = ['rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = 1;
m.cx = (0.5+m.q4);
m.cy = (0.5-m.q5);
m.rd = sqrt((sqr((((m.x-0.5)-m.q4)*2))+sqr((((m.y-0.5)+m.q5)*1.5))));
m.zm = 1;
m.ag = Math.atan(div(((m.y-0.5)+m.q5),((m.x-0.5)-m.q4)));
m.star = (Math.sin(((m.ag*6)+m.time))*(2-m.rd));
m.zm = (m.zm+div(m.star,20));
m.sx = m.zm;
m.sy = m.zm;
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
m.tm = div(m.time,m.rad);
m.a = m.q1;
m.b = m.q2;
m.mx = (m.x-m.a);
m.my = (m.y-m.b);
m.zm = -0.45;
m.zm = ifcond(above(Math.sin((m.time*2.1)), 0.95), 0.45, m.zm);
m.dis = (pow(((m.mx*m.mx)+(m.my*m.my)), 0.5)*0.70710678);
m.rot = (m.rot*(1-m.dis));
m.rot = ((m.rot*20)*m.q8);
m.dx = ((((m.zm*m.mx)*m.dis)*Math.cos((m.my*3.14)))*m.q3);
m.dy = ((((m.zm*m.my)*m.dis)*Math.cos((m.mx*3.14)))*m.q3);
m.disk_shift = ifcond(equal(Math.abs(Math.sin(m.ang)), ifcond(above(m.q1, 0), 0, 1)), -m.rot, 0.05);
m.timer = Math.sin((m.time*1.3));
m.x_or_y = ifcond(above(m.q1, 0), m.y, m.x);
m.rot = (m.rot+ifcond(equal(mod((m.x_or_y*10),2), 0), ifcond(below(m.timer, 0), m.disk_shift, -m.rot), ifcond(above(m.timer, 0), m.disk_shift, -m.rot)));
m.cen_x = m.q1;
m.cen_y = m.q2;
m.radxy = ((Math.sin((m.time*0.1))*0.2)+0.3);
m.dist_x = div((m.x-m.cen_x),(m.radxy*(((Math.sin(((m.time*0.2)*0))*0.3)+(Math.cos(((((m.cen_x-m.x)+(m.cen_y-m.y))*10)+(m.time*2)))*0.3))+1)));
m.dist_y = div((m.y-m.cen_y),(m.radxy*(((Math.sin(((m.time*0.2)*0))*0.3)+(Math.sin(((((m.cen_x-m.x)+(m.cen_y-m.y))*10)+(m.time*2)))*0.3))+1)));
m.in = (below(Math.abs(m.dist_x), 1)*below(Math.abs(m.dist_y), 1));
m.out = bnot(m.in);
m.inx = ((m.cen_x-m.q1)+((0.1*sign(m.dist_x))*(1-Math.abs(m.dist_x))));
m.iny = ((m.cen_y-m.q2)+((0.1*sign(m.dist_y))*(1-Math.abs(m.dist_y))));
m.vang = (m.time*0.1);
m.vx = ((((m.x-0.5)*Math.cos(m.vang))-((m.y-0.5)*Math.sin(m.vang)))+0.5);
m.vy = ((((m.x-0.5)*Math.sin(m.vang))+((m.y-0.5)*Math.cos(m.vang)))+0.5);
m.dvx = (0.01*Math.sin((m.time+((m.vy*80)*m.radxy))));
m.dvy = (0.01*Math.cos((m.time+((m.vx*80)*m.radxy))));
m.outx = ((m.dvx*Math.cos(m.vang))-(m.dvy*Math.sin(m.vang)));
m.outy = ((-m.dvx*Math.sin(m.vang))-(m.dvy*Math.cos(m.vang)));
m.dx = ((m.in*m.inx)+(m.out*m.outx));
m.dy = ((m.in*m.iny)+(m.out*m.outy));
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
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.46374,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.fvar = 0;
m.rotx = 0;
m.t5 = 0;
m.roty = 0;
m.rotz = 0;
m.t8 = 0;
m.tvar = 0;
m.svar = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.nsample = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.x2 = 0;
m.y3 = 0;
m.z4 = 0;
m.x3 = 0;
m.y4 = 0;
m.x4 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t8 = (3.14159265*1.56);
m.t5 = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rotx = (m.rotx+m.bass);
m.roty = (m.roty+m.mid);
m.rotz = (m.rotz+m.treb);
m.t1 = div((m.t8*m.rotx),180);
m.t2 = div((m.t8*m.roty),180);
m.t3 = div((m.t8*m.rotz),180);
m.t4 = (12+(13*Math.sin((m.time+(2.46*m.t8)))));
m.t5 = (2+(8*Math.cos((m.time+(1.66*m.t8)))));
m.r = 1;
m.b = 0;
m.g = 0;
		return m;
	},
		'point_eqs' : function(m) {
m.fvar = (m.sample*512);
m.svar = (m.fvar*128);
m.tvar = bitand(0,m.svar);
m.nsample = (m.tvar*4.5);
m.x1 = (-0.5+(2.5*Math.sin(m.sample)));
m.y1 = (1*Math.cos((m.t8*m.nsample)));
m.z1 = (1*Math.sin((m.t8*m.nsample)));
m.y2 = ((m.y1*Math.cos(m.t1))-(m.z1*Math.sin(m.t1)));
m.z2 = ((m.y1*Math.sin(m.t1))+(m.z1*Math.cos(m.t1)));
m.x2 = ((m.z2*Math.sin(m.t2))+(m.x1*Math.cos(m.t2)));
m.z3 = ((m.z2*Math.cos(m.t2))-(m.x1*Math.sin(m.t2)));
m.x3 = ((m.x2*Math.cos(m.t3))-(m.y2*Math.sin(m.t3)));
m.y3 = ((m.y2*Math.cos(m.t3))+(m.x2*Math.sin(m.t3)));
m.x4 = m.x3;
m.y4 = m.y3;
m.z4 = (m.z3+5);
m.x = (0.5-(1*div(m.x4,(1+(m.z4*0.5)))));
m.y = (0.5-(1*div(m.y4,(1+(m.z4*0.5)))));
m.a = (-0.9+Math.sin((m.nsample+m.time)));
m.a = ifcond(below(m.a, 0), 0, m.a);
m.a = 1;
m.g = m.y2;
m.b = m.x2;
m.r = (m.z2+m.z3);
		return m;
	},
		'init_eqs_str' : ('t8=3.14159265*1.56;\n' + 't5 = 1;'),
		'frame_eqs_str' : ('rotx = rotx+bass;\n' + 'roty = roty+mid;\n' + 'rotz = rotz+treb;\n' + 't1= t8*rotx/180;\n' + 't2 = t8*roty/180;\n' + 't3 = t8*rotz/180;\n' + 't4 = 12+13*sin(time+2.46*t8);\n' + 't5 = 2+8*cos(time+1.66*t8);\n' + 'r = 1;\n' + 'b = 0;\n' + 'g=0;'),
		'point_eqs_str' : ('fvar = sample*512;\n' + 'svar = fvar*128;\n' + 'tvar = 0&svar;\n' + 'nsample = tvar*4.5;\n' + 'x1 = -.5+(2.5)*sin(sample);\n' + 'y1 = (1)*cos(t8*nsample);\n' + 'z1 = (1)*sin(t8*nsample);\n' + 'y2 = y1*cos(t1)-z1*sin(t1);\n' + 'z2 = y1*sin(t1)+z1*cos(t1);\n' + 'x2 = z2*sin(t2)+x1*cos(t2);\n' + 'z3 = z2*cos(t2)-x1*sin(t2);\n' + 'x3 = x2*cos(t3)-y2*sin(t3);\n' + 'y3 = y2*cos(t3)+x2*sin(t3);\n' + 'x4 = x3;\n' + 'y4 = y3;\n' + 'z4 = z3+5;\n' + 'x=0.5-1*(x4/(1+z4*0.5));\n' + 'y=0.5-1*(y4/(1+z4*0.5));\n' + 'a = -.9+sin(nsample+time);\n' + 'a = if(below(a,0),0,a);\n' + 'a=1;\n' + 'g=y2;\n' + 'b=x2;\n' + 'r= z2+z3;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 262.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.t5 = 0;
m.spin = 0;
m.t6 = 0;
m.t7 = 0;
m.green = 0;
m.q7 = 0;
m.red = 0;
m.t = 0;
m.dx = 0;
m.rad = 0;
m.dy = 0;
m.ddy = 0;
m.blue = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t3 = (Math.acos(-1)*128);
m.t4 = div(4,3);
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.spin = (m.spin+0.01);
m.t2 = m.spin;
m.red = (((-1*Math.cos(m.time))+Math.abs((-1*Math.cos(m.time))))+(0.2*(Math.cos(Math.sin(m.time))+(Math.abs(Math.cos(Math.sin(m.time)))+Math.cos(Math.sin(m.time))))));
m.green = Math.abs(Math.sin(m.time));
m.blue = (Math.cos(m.time)+Math.abs(Math.cos(m.time)));
m.r = ifcond(above(m.red, 1), 1, ifcond(above(m.red, 0), Math.abs(m.red), 0));
m.g = ifcond(above(m.green, 1), 1, ifcond(above(m.green, 0), Math.abs(m.green), 0));
m.b = ifcond(above(m.blue, 1), 1, ifcond(above(m.blue, 0), Math.abs(m.blue), 0));
m.t5 = m.r;
m.t6 = m.g;
m.t7 = (m.b-Math.sin(m.time));
		return m;
	},
		'point_eqs' : function(m) {
m.dx = (Math.cos((((m.sample*0.1)*m.t1)+(m.t1*(m.t7-Math.floor(m.t5)))))-0.5);
m.dy = (0.3*Math.cos((((m.sample*m.t1)+7)+(m.t1*(m.t7-Math.floor(m.t6))))));
m.ddy = (-1*m.dy);
m.t = Math.abs(Math.sin(m.q7));
m.rad = ((m.sample*m.t3)+m.t2);
m.x = (((Math.cos(div(m.rad,32))*0.10)+(Math.sin(m.rad)*0.05))+(m.dx*m.t));
m.y = (((((Math.sin(div(m.rad,64))*m.t4)*0.10)+((Math.cos(m.rad)*m.t4)*0.05))+(m.dy*m.t))+((m.ddy*m.t)*m.t));
		return m;
	},
		'init_eqs_str' : ('t3 = acos(-1)*128;\n' + 't4 = 4/3;'),
		'frame_eqs_str' : ('spin = spin + .01;\n' + 't2 = spin;\n' + 'red = (-1 * cos(time))  + abs(-1 * cos(time)) + 0.2 * (cos(sin(time))+(abs(cos(sin(time)))+cos(sin(time))));\n' + 'green = abs(sin(time)) ;\n' + 'blue = cos(time)  + abs(cos(time));\n' + 'r = if(above(red,1),1,if(above(red,0), abs(red),0));\n' + 'g = if(above(green,1),1,if(above(green,0), abs(green),0));\n' + 'b = if(above(blue,1),1,if(above(blue,0), abs(blue),0));\n' + 't5 = r;\n' + 't6 = g;\n' + 't7 = b-sin(time);'),
		'point_eqs_str' : ('dx = cos(sample*.1*t1 + t1*(t7-int(t5)))-.5;\n' + 'dy = 0.3*cos(sample*t1 + 7 + t1*(t7-int(t6)));\n' + 'ddy = -1*dy;\n' + 't = abs(sin(q7));\n' + 'rad = sample*t3+t2;\n' + 'x = cos(rad/32)*0.10 + sin(rad)*0.05 +dx*t;\n' + 'y = sin(rad/64)*t4*0.10 + cos(rad)*t4*0.05+dy*t + ddy * t * t;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.46374,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.fvar = 0;
m.rotx = 0;
m.t5 = 0;
m.roty = 0;
m.rotz = 0;
m.t8 = 0;
m.tvar = 0;
m.svar = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.nsample = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.x2 = 0;
m.y3 = 0;
m.z4 = 0;
m.x3 = 0;
m.y4 = 0;
m.x4 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t8 = div(3.14159265,2);
m.t5 = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rotx = (m.rotx+m.bass);
m.roty = (m.roty+m.mid);
m.rotz = (m.rotz+m.treb);
m.t1 = div((m.t8*m.rotx),180);
m.t2 = div((m.t8*m.roty),180);
m.t3 = div((m.t8*m.rotz),180);
m.t4 = Math.sin((m.bass+(0.86*m.t8)));
m.t5 = (10+(8*Math.cos((m.time+(0.56*m.t8)))));
		return m;
	},
		'point_eqs' : function(m) {
m.fvar = (m.sample*512);
m.svar = (m.fvar*128);
m.tvar = bitand(0,m.svar);
m.nsample = (m.tvar*4.5);
m.x1 = (-2.5+(1.5*Math.sin(m.sample)));
m.y1 = (-1*Math.cos((m.t8*m.nsample)));
m.z1 = (-1*Math.sin((m.t8*m.nsample)));
m.y2 = ((m.y1*Math.cos(m.t1))-(m.z1*Math.sin(m.t1)));
m.z2 = ((m.y1*Math.sin(m.t1))+(m.z1*Math.cos(m.t1)));
m.x2 = ((m.z2*Math.sin(m.t2))+(m.x1*Math.cos(m.t2)));
m.z3 = ((m.z2*Math.cos(m.t2))-(m.x1*Math.sin(m.t2)));
m.x3 = ((m.x2*Math.cos(m.t3))-(m.y2*Math.sin(m.t3)));
m.y3 = ((m.y2*Math.cos(m.t3))+(m.x2*Math.sin(m.t3)));
m.x4 = m.x3;
m.y4 = m.y3;
m.z4 = (m.z3+5);
m.x = (0.5+(0.5*div(m.x4,(1+(m.z4*0.5)))));
m.y = (0.5+(0.5*div(m.y4,(1+(m.z4*0.5)))));
m.a = (-0.9+Math.sin((m.nsample+m.time)));
m.a = ifcond(below(m.a, 0), 0, m.a);
m.a = 1;
m.r = ((Math.sin(Math.abs((m.x2*Math.sin(m.time))))*0.5)+0.5);
m.b = ((Math.sin(Math.abs((m.y3+Math.sin((0.8765*m.time)))))*0.5)+0.5);
m.g = (m.x2*m.z2);
		return m;
	},
		'init_eqs_str' : ('t8=3.14159265/2;\n' + 't5 = 1;'),
		'frame_eqs_str' : ('rotx = rotx+bass;\n' + 'roty = roty+mid;\n' + 'rotz = rotz+treb;\n' + 't1= t8*rotx/180;\n' + 't2 = t8*roty/180;\n' + 't3 = t8*rotz/180;\n' + 't4 = sin(bass+0.86*t8);\n' + 't5 = 10+8*cos(time+0.56*t8);'),
		'point_eqs_str' : ('fvar = sample*512;\n' + 'svar = fvar*128;\n' + 'tvar = 0&svar;\n' + 'nsample = tvar*4.5;\n' + 'x1 = -2.5+(1.5)*sin(sample);\n' + 'y1 = (-1)*cos(t8*nsample);\n' + 'z1 = (-1)*sin(t8*nsample);\n' + 'y2 = y1*cos(t1)-z1*sin(t1);\n' + 'z2 = y1*sin(t1)+z1*cos(t1);\n' + 'x2 = z2*sin(t2)+x1*cos(t2);\n' + 'z3 = z2*cos(t2)-x1*sin(t2);\n' + 'x3 = x2*cos(t3)-y2*sin(t3);\n' + 'y3 = y2*cos(t3)+x2*sin(t3);\n' + 'x4 = x3;\n' + 'y4 = y3;\n' + 'z4 = z3+5;\n' + 'x=0.5+0.5*(x4/(1+z4*0.5));\n' + 'y=0.5+0.5*(y4/(1+z4*0.5));\n' + 'a = -.9+sin(nsample+time);\n' + 'a = if(below(a,0),0,a);\n' + 'a=1;\n' + 'r =sin(abs(x2*sin(time)))*0.5 + 0.5;\n' + 'b = sin(abs(y3+sin(0.8765*time)))*0.5 + 0.5;\n' + 'g = x2*z2;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.46374,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.fvar = 0;
m.rotx = 0;
m.t5 = 0;
m.roty = 0;
m.rotz = 0;
m.t8 = 0;
m.tvar = 0;
m.svar = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.nsample = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.x2 = 0;
m.y3 = 0;
m.z4 = 0;
m.x3 = 0;
m.y4 = 0;
m.x4 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t8 = 3.14159265;
m.t5 = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rotx = (m.rotx+m.bass);
m.roty = (m.roty+m.mid);
m.rotz = (m.rotz+m.treb);
m.t1 = div((m.t8*m.rotx),180);
m.t2 = div((m.t8*m.roty),180);
m.t3 = div((m.t8*m.rotz),180);
m.t4 = (3*Math.sin((m.time+(0.776*m.t8))));
m.t5 = (10+(8*Math.cos((m.time+(0.56*m.t8)))));
		return m;
	},
		'point_eqs' : function(m) {
m.fvar = (m.sample*512);
m.svar = (m.fvar*128);
m.tvar = bitand(0,m.svar);
m.nsample = (m.tvar*4.5);
m.x1 = (-0.75+(1.5*Math.sin(m.sample)));
m.y1 = (1*Math.cos((m.t8*m.nsample)));
m.z1 = (1*Math.sin((m.t8*m.nsample)));
m.y2 = ((m.y1*Math.cos(m.t1))-(m.z1*Math.sin(m.t1)));
m.z2 = ((m.y1*Math.sin(m.t1))+(m.z1*Math.cos(m.t1)));
m.x2 = ((m.z2*Math.sin(m.t2))+(m.x1*Math.cos(m.t2)));
m.z3 = ((m.z2*Math.cos(m.t2))-(m.x1*Math.sin(m.t2)));
m.x3 = ((m.x2*Math.cos(m.t3))-(m.y2*Math.sin(m.t3)));
m.y3 = ((m.y2*Math.cos(m.t3))+(m.x2*Math.sin(m.t3)));
m.x4 = m.x3;
m.y4 = m.y3;
m.z4 = (m.z3+5);
m.x = (0.5+(0.75*div(m.x4,(1+(m.z4*0.5)))));
m.y = (0.5+(0.75*div(m.y4,(1+(m.z4*0.5)))));
m.a = (-0.9+Math.sin((m.nsample+m.time)));
m.a = ifcond(below(m.a, 0), 0, m.a);
m.a = 1;
m.r = (m.y2*m.z2);
m.b = (m.z3+m.y3);
m.g = div(m.z3,m.x2);
		return m;
	},
		'init_eqs_str' : ('t8=3.14159265;\n' + 't5 = 1;'),
		'frame_eqs_str' : ('rotx = rotx+bass;\n' + 'roty = roty+mid;\n' + 'rotz = rotz+treb;\n' + 't1= t8*rotx/180;\n' + 't2 = t8*roty/180;\n' + 't3 = t8*rotz/180;\n' + 't4 = 3*sin(time+0.776*t8);\n' + 't5 = 10+8*cos(time+0.56*t8);'),
		'point_eqs_str' : ('fvar = sample*512;\n' + 'svar = fvar*128;\n' + 'tvar = 0&svar;\n' + 'nsample = tvar*4.5;\n' + 'x1 = -.75+(1.5)*sin(sample);\n' + 'y1 = (1)*cos(t8*nsample);\n' + 'z1 = (1)*sin(t8*nsample);\n' + 'y2 = y1*cos(t1)-z1*sin(t1);\n' + 'z2 = y1*sin(t1)+z1*cos(t1);\n' + 'x2 = z2*sin(t2)+x1*cos(t2);\n' + 'z3 = z2*cos(t2)-x1*sin(t2);\n' + 'x3 = x2*cos(t3)-y2*sin(t3);\n' + 'y3 = y2*cos(t3)+x2*sin(t3);\n' + 'x4 = x3;\n' + 'y4 = y3;\n' + 'z4 = z3+5;\n' + 'x=0.5+0.75*(x4/(1+z4*0.5));\n' + 'y=0.5+0.75*(y4/(1+z4*0.5));\n' + 'a = -.9+sin(nsample+time);\n' + 'a = if(below(a,0),0,a);\n' + 'a=1;\n' + 'r = y2*z2;\n' + 'b = z3+y3;\n' + 'g = z3/x2;'),

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
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.33004,
			x : 0.88,
			y : 0.8,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.4*Math.sin(((0.2765*m.time)+(0.341*m.q8)))));
m.y = (0.5+(0.4*Math.sin(((0.311*m.time)+(0.213*m.q8)))));
m.ang = (3.1415-(3.1415*Math.cos((m.time*0.1389))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5+ 0.4*sin(0.2765*time+0.341*q8);\n' + 'y = 0.5+ 0.4*sin(0.311*time+0.213*q8);\n' + 'ang = 3.1415-3.1415*cos(time*0.1389);'),

		},
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
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.33004,
			x : 0.88,
			y : 0.2,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.4*Math.sin(((0.212*m.time)+(0.1*m.q8)))));
m.y = (0.5+(0.4*Math.sin(((0.2891*m.time)+(0.121*m.q8)))));
m.ang = (3.1415+(3.1415*Math.sin((m.time*0.181))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5+ 0.4*sin(0.212*time+0.1*q8);\n' + 'y = 0.5+ 0.4*sin(0.2891*time+0.121*q8);\n' + 'ang = 3.1415+3.1415*sin(time*0.181);'),

		},
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
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.33004,
			x : 0.12,
			y : 0.8,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q6 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.4*Math.sin(((0.0932*m.time)+(0.421*m.q6)))));
m.y = (0.5+(0.4*Math.sin(((0.1178*m.time)+(0.2135*m.q6)))));
m.ang = (3.1415-(3.1415*Math.cos((m.time*0.1154))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5+ 0.4*sin(0.0932*time+0.421*q6);\n' + 'y = 0.5+ 0.4*sin(0.1178*time+0.2135*q6);\n' + 'ang = 3.1415-3.1415*cos(time*0.1154);'),

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
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.33004,
			x : 0.12,
			y : 0.2,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.4*Math.sin(((0.105*m.time)+(0.3*m.q4)))));
m.y = (0.5+(0.4*Math.sin(((0.1267*m.time)+(0.323*m.q4)))));
m.ang = (3.1415+(3.1415*Math.sin((m.time*0.2654))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5+ 0.4*sin(0.105*time+0.3*q4);\n' + 'y = 0.5+ 0.4*sin(0.1267*time+0.323*q4);\n' + 'ang = 3.1415+3.1415*sin(time*0.2654);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 mxv_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv);\n' + '  ret_2 = tmpvar_3.xyz;\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (texsize.zw * vec2(1.0, 0.0)));\n' + '  tmpvar_4 = texture2D (sampler_blur2, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv + (texsize.zw * vec2(0.0, 1.0)));\n' + '  tmpvar_6 = texture2D (sampler_blur2, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (texsize.zw * vec2(-1.0, 0.0)));\n' + '  tmpvar_8 = texture2D (sampler_blur2, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv + (texsize.zw * vec2(0.0, -1.0)));\n' + '  tmpvar_10 = texture2D (sampler_blur2, P_11);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (uv + (texsize.zw * vec2(5.656848, -5.656848)));\n' + '  tmpvar_12 = texture2D (sampler_blur2, P_13);\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (uv + (texsize.zw * vec2(-5.656848, 5.656848)));\n' + '  tmpvar_14 = texture2D (sampler_blur2, P_15);\n' + '   vec4 tmpvar_16;\n' + '   vec2 P_17;\n' + '  P_17 = (uv + (texsize.zw * vec2(5.656848, 5.656848)));\n' + '  tmpvar_16 = texture2D (sampler_blur2, P_17);\n' + '   vec4 tmpvar_18;\n' + '   vec2 P_19;\n' + '  P_19 = (uv + (texsize.zw * vec2(-5.656848, -5.656848)));\n' + '  tmpvar_18 = texture2D (sampler_blur2, P_19);\n' + '  mxv_1 = (abs((\n' + '    ((((\n' + '      ((((tmpvar_4.xyz * scale2) + bias2) - ((tmpvar_6.xyz * scale2) + bias2)) + ((tmpvar_8.xyz * scale2) + bias2))\n' + '     - \n' + '      ((tmpvar_10.xyz * scale2) + bias2)\n' + '    ) + (\n' + '      (tmpvar_12.xyz * scale2)\n' + '     + bias2)) - ((tmpvar_14.xyz * scale2) + bias2)) + ((tmpvar_16.xyz * scale2) + bias2))\n' + '   - \n' + '    ((tmpvar_18.xyz * scale2) + bias2)\n' + '  )) * 0.5);\n' + '  ret_2 = (ret_2 * (mxv_1 + 0.99));\n' + '   vec2 P_20;\n' + '  P_20 = ((uv * rand_frame.xy) * 9.0);\n' + '   vec3 tmpvar_21;\n' + '  tmpvar_21 = (0.1 * (0.15 - texture2D (sampler_noise_lq, P_20))).xyz;\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur1, uv);\n' + '  ret_2 = (((\n' + '    (ret_2 - (mxv_1 * 2.0))\n' + '   + 0.1) + tmpvar_21) - (0.1 * (\n' + '    (tmpvar_22.xyz * scale1)\n' + '   + bias1)));\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23.w = 1.0;\n' + '  tmpvar_23.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_23;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 value2_1;\n' + '   vec3 value_2;\n' + '   vec3 ret_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (((uv - 0.5) * vec2(1.0, -1.0)) + 0.5);\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = mix (texture2D (sampler_main, uv).xyz, texture2D (sampler_main, tmpvar_4).xyz, vec3(0.5, 0.5, 0.5));\n' + '  value_2 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur1, uv);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = ((tmpvar_6.xyz * scale1) + bias1).xy;\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_blur1, tmpvar_4);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = ((tmpvar_8.xyz * scale1) + bias1).xy;\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = (mix (texture2D (sampler_main, tmpvar_7).xyz, texture2D (sampler_main, tmpvar_9).xyz, vec3(0.5, 0.5, 0.5)) * 0.5);\n' + '  value2_1 = tmpvar_10;\n' + '  ret_3 = (value_2 + value2_1);\n' + '  ret_3 = ((ret_3 * 2.0) * ret_3);\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11.w = 1.0;\n' + '  tmpvar_11.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_11;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_a = 0;\n' + 'counter1 = if(equal(counter2,1),if(equal(counter1,1),0,counter1+.2),1);\n' + 'counter2 = if(equal(counter1,1),if(equal(counter2,1),0,counter2+.2),1);\n' + 'cdelay1 = if(equal(cdelay2,1),1,if(equal(colorcounter%2,1),if(equal(counter1,1),2 ,0), if(equal(counter2,1),2,0)));\n' + 'cdelay2 = if(equal(cdelay1,2),1,0);\n' + 'colorcounter = if(above(colorcounter,7),0,if(equal(cdelay1,1),colorcounter+1,colorcounter));\n' + 'ib_r = .5*if(equal(colorcounter,1),1, if(equal(colorcounter,2),1, if(equal(colorcounter,3),1, if(equal(colorcounter,4),sin(counter2+2.1), if(equal(colorcounter,5),0, if(equal(colorcounter,6),0,sin(counter1)))))));\n' + 'ib_g = .5*if(equal(colorcounter,1),0, if(equal(colorcounter,2),sin(counter2*.5), if(equal(colorcounter,3),sin((counter1+1.75)*.4), if(equal(colorcounter,4),1, if(equal(colorcounter,5),1, if(equal(colorcounter,6),sin(counter2+2),0))))));\n' + 'ib_b = if(equal(colorcounter,1),sin(counter1+2.1), if(equal(colorcounter,2),0, if(equal(colorcounter,3),0, if(equal(colorcounter,4),0, if(equal(colorcounter,5),sin(counter1), if(equal(colorcounter,6),1,1))))));\n' + 'ob_r=ib_r-0.5;\n' + 'ob_g=ib_g-0.5;\n' + 'ob_b=ib_b-0.5;\n' + 'q1=ib_r;\n' + 'q2=ib_g;\n' + 'q3=ib_b;\n' + 'decay = 0.9999;\n' + 'musictime=musictime+(mid*mid*mid)*0.02;\n' + 'xpos=sin(musictime*0.6)*0.3;\n' + 'ypos=sin(musictime*0.4)*0.3;\n' + 'q4=xpos;\n' + 'q5=ypos;'),
	'pixel_eqs_str' : ('zoom=1;\n' + 'cx=0.5+q4;\n' + 'cy=0.5-q5;\n' + 'rd=sqrt( sqr( (x-0.5-q4)*2) + sqr( (y-0.5+q5)*1.5 ) );\n' + 'zm=1;\n' + 'ag=atan( (y-0.5+q5)/(x-0.5-q4) );\n' + 'star=sin(ag*6+time)*(2-rd);\n' + 'zm=zm+star/20;\n' + 'sx=zm;\n' + 'sy=zm;\n' + 'num = 8;\n' + 'pi = 3.141592654;\n' + 'radi = (y-.5)*.75;\n' + 'radi = (y-.5);\n' + 'radi = pow(radi*radi + (x-.5)*(x-.5),.5);\n' + 'an = ang + pi + time;\n' + 'an = an - pi*2*int(an/(pi*2));\n' + 'mod = .1;\n' + 'seg = ang + pi;\n' + 'seg = seg/(pi*2)*num;\n' + 'seg = int(seg);\n' + 'seg = seg - equal(seg,num);\n' + 'anga = (ang + pi) - (pi*2/num)*seg;\n' + 'anga = if(equal(seg%2,0),(pi*2/num) - anga,anga);\n' + 'anga = anga + pi/4;\n' + 'ox = .5 - radi*sin(anga);\n' + 'oy = .5 + radi*cos(anga);\n' + 'dx = equal(seg,3)*(x-ox);\n' + 'dy = equal(seg,3)*(y-oy);\n' + 'dx = above(seg,0)*(x-ox);\n' + 'dy = above(seg,0)*(y-oy);\n' + 'tm=time/rad;\n' + 'a = q1;\n' + 'b = q2;\n' + 'mx = x-a;\n' + 'my = y-b;\n' + 'zm = -.45;\n' + 'zm= if( above(sin(time*2.1),0.95) , 0.45 , zm);\n' + 'dis = pow(mx*mx + my*my,.5)*.70710678;\n' + 'rot = rot*(1-dis);\n' + 'rot=rot*20*q8 ;\n' + 'dx = zm*mx*dis*cos(my*3.14)*q3;\n' + 'dy = zm*my*dis*cos(mx*3.14)*q3;\n' + 'disk_shift = if(equal(abs(sin(ang)), if(above(q1,0),0,1)), -rot, 0.05);\n' + 'timer=sin(time*1.3);\n' + 'x_or_y=if(above(q1,0),y,x);\n' + 'rot = rot + if(equal(x_or_y*10%2,0),if(below(timer,0),disk_shift,-rot),if(above(timer,0),disk_shift,-rot));\n' + 'cen_x = q1;\n' + 'cen_y = q2;\n' + 'radxy = sin(time*.1)*.2+.3;\n' + 'dist_x = (x-cen_x)/(radxy*(sin(time*.2*0)*.3+cos((cen_x-x+ (cen_y-y))*10+time*2)*.3+1));\n' + 'dist_y = (y-cen_y)/(radxy*(sin(time*.2*0)*.3+sin((cen_x-x+ (cen_y-y))*10+time*2)*.3+1));\n' + 'in = below(abs(dist_x),1)*below(abs(dist_y),1);\n' + 'out = bnot(in);\n' + 'inx =(cen_x-q1)+.1*sign(dist_x)*(1-abs(dist_x));\n' + 'iny =(cen_y-q2) +.1*sign(dist_y)*(1-abs(dist_y));\n' + 'vang=time*.1;\n' + 'vx = (x-.5)*cos(vang) - (y-.5)*sin(vang)+.5;\n' + 'vy = (x-.5)*sin(vang) +(y-.5)*cos(vang)+.5;\n' + 'dvx=.01*sin(time+vy*80*radxy);\n' + 'dvy=.01*cos(time+vx*80*radxy);\n' + 'outx = dvx*cos(vang) - dvy*sin(vang);\n' + 'outy = -dvx*sin(vang) - dvy*cos(vang);\n' + 'dx=in*inx+out*outx;\n' + 'dy=in*iny+out*outy;\n' + 'num = 8;\n' + 'pi = 3.141592654;\n' + 'radi = (y-.5)*.75;\n' + 'radi = (y-.5);\n' + 'radi = pow(radi*radi + (x-.5)*(x-.5),.5);\n' + 'an = ang + pi + time;\n' + 'an = an - pi*2*int(an/(pi*2));\n' + 'mod = .1;\n' + 'seg = ang + pi;\n' + 'seg = seg/(pi*2)*num;\n' + 'seg = int(seg);\n' + 'seg = seg - equal(seg,num);\n' + 'anga = (ang + pi) - (pi*2/num)*seg;\n' + 'anga = if(equal(seg%2,0),(pi*2/num) - anga,anga);\n' + 'anga = anga + pi/4;\n' + 'ox = .5 - radi*sin(anga);\n' + 'oy = .5 + radi*cos(anga);\n' + 'dx = equal(seg,3)*(x-ox);\n' + 'dy = equal(seg,3)*(y-oy);\n' + 'dx = above(seg,0)*(x-ox);\n' + 'dy = above(seg,0)*(y-oy);'),
};

return pmap;
});
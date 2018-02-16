define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.250001,
		mv_x : 24.159897,
		warpscale : 2.8145,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.9994,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.9996,
		ob_r : 0.25,
		sy : 0.999899,
		ib_size : 0.01,
		warp : 0.1555,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.9996,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.83,
		wave_r : 0.5,
		ib_r : 0.65,
		mv_b : 1.0,
		echo_zoom : 1.008,
		ob_size : 0.01,
		wave_smoothing : 0.666,
		warpanimspeed : 0.9419,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0065,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.500001,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.25,
		mv_l : 0.05,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0799,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 2.9162,
		ob_g : 0.65,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.250001,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.ff = 0;
m.q2 = 0;
m.dx_r = 0;
m.dy_r = 0;
m.madtreb = 0;
m.lastingbass = 0;
m.thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (div(Math.sin(div((5*m.ff),m.bass)),2)+0.5);
m.wave_g = (div(Math.cos(div(m.ff,m.mid)),2)+0.5);
m.wave_b = (div(Math.cos(div((3*m.ff),m.treb)),2)+0.5);
m.cx = (m.cx+(0.110*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.294*m.time))))));
m.cy = (m.cy+(0.110*((0.60*Math.sin((0.393*m.time)))+(0.40*Math.sin((0.223*m.time))))));
m.ib_r = (m.ib_r+(0.2*Math.sin((m.time*0.5413))));
m.ib_g = (m.ib_g+(0.2*Math.sin((m.time*0.6459))));
m.ib_b = (m.ib_b+(0.2*Math.sin((m.time*0.4354))));
m.ob_r = m.wave_r;
m.ob_g = m.wave_g;
m.ob_b = m.wave_b;
m.mv_x = ((m.lastingbass*30)+24);
m.mv_y = ((m.madtreb*48)+8);
m.mv_r = (0.7-m.bass_att);
m.mv_b = (0.6-m.treb_att);
m.mv_g = (0.5-m.mid_att);
m.ff = div(m.frame,100);
m.rot = (m.rot+(0.040*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.zoom = Math.max(0.98, Math.min((0.15+(1.1*m.bass_att)), 1.75));
		m.rkeys = ['dy_r','dx_r','thresh','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+ifcond(m.q2, 0, ((m.rad*Math.sin((m.time*0.6969)))*1.2969)));
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.315)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.315)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.zoom = (m.zoom-0.4);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.999981,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.4999,
			thick : 0.0,
			sep : 2.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.t5 = 0;
m.t6 = 0;
m.rx = 0;
m.ry = 0;
m.rz = 0;
m.hu = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['sample'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rx = ((m.rx+0.025)+(Math.sin(m.bass_att)*0.025));
m.ry = ((m.ry+0.025)+(Math.sin(m.treb_att)*0.25));
m.rz = (m.rz+0.01);
m.t1 = Math.sin(m.rx);
m.t2 = Math.cos(m.rx);
m.t3 = Math.sin(m.ry);
m.t4 = Math.cos(m.ry);
m.t5 = Math.sin(m.rz);
m.t6 = Math.cos(m.rz);
		return m;
	},
		'point_eqs' : function(m) {
m.sample = ((m.sample*m.q1)*0.5);
m.x1 = ((Math.sin(m.sample)*Math.sin((m.sample*80)))*0.3);
m.y1 = (Math.cos(m.sample)*0.3);
m.z1 = ((Math.sin(m.sample)*Math.cos((m.sample*80)))*0.3);
m.x1 = (m.x1+(Math.sin((m.time*0.1))*0.5));
m.y1 = (m.y1+(Math.cos((m.time*0.2))*0.5));
m.x2 = ((m.x1*m.t4)-(m.z1*m.t3));
m.z2 = ((m.x1*m.t3)+(m.z1*m.t4));
m.y2 = ((m.y1*m.t2)-(m.z2*m.t1));
m.z3 = (((m.y1*m.t1)+(m.z2*m.t2))+1);
m.x3 = ((m.x2*m.t6)-(m.y2*m.t5));
m.y3 = ((m.x2*m.t5)+(m.y2*m.t6));
m.z3 = ifcond(above(m.z3, 0.1), div(0.5,m.z3), 0);
m.x = (ifcond(m.z3, (m.x3*m.z3), m.x)+0.5);
m.y = (ifcond(m.z3, (m.y3*m.z3), m.y)+0.5);
m.hu = (m.sample+Math.sin(m.time));
m.r = ((Math.sin(m.hu)*0.5)+0.5);
m.g = ((Math.sin((m.hu+(m.q1*0.33)))*0.5)+0.5);
m.b = ((Math.sin((m.hu+(m.q1*0.66)))*0.5)+0.5);
m.a = ((((m.bass+m.mid)+m.treb)*0.16)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rx=rx+.025+sin(bass_att)*.025;\n' + 'ry=ry+.025+sin(treb_att)*.25;\n' + 'rz=rz+.01;\n' + 't1=sin(rx);\n' + 't2=cos(rx);\n' + 't3=sin(ry);\n' + 't4=cos(ry);\n' + 't5=sin(rz);\n' + 't6=cos(rz);'),
		'point_eqs_str' : ('sample=sample*q1*.5;\n' + 'x1=sin(sample)*sin(sample*80)*.3;\n' + 'y1=cos(sample)*.3;\n' + 'z1=sin(sample)*cos(sample*80)*.3;\n' + 'x1=x1+sin(time*.1)*.5;\n' + 'y1=y1+cos(time*.2)*.5;\n' + 'x2=x1*t4-z1*t3;\n' + 'z2=x1*t3+z1*t4;\n' + 'y2=y1*t2-z2*t1;\n' + 'z3=y1*t1+z2*t2+1;\n' + 'x3=x2*t6-y2*t5;\n' + 'y3=x2*t5+y2*t6;\n' + 'z3=if(above(z3,.1),.5/z3,0);\n' + 'x=if(z3,x3*z3,x)+.5;\n' + 'y=if(z3,y3*z3,y)+.5;\n' + 'hu=sample+sin(time);\n' + 'r=sin(hu)*.5+.5;\n' + 'g=sin(hu+q1*.33)*.5+.5;\n' + 'b=sin(hu+q1*.66)*.5+.5;\n' + 'a=(bass+mid+treb)*.16+.5;'),

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
			b : 0.3,
			g : 0.65,
			scaling : 0.997729,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.3,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.q3 = 0;
m.t6 = 0;
m.cf = 0;
m.q4 = 0;
m.t7 = 0;
m.oldt2 = 0;
m.oldt3 = 0;
m.px = 0;
m.py = 0;
m.pz = 0;
m.shc = 0;
m.rf = 0;
m.u = 0;
m.v = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x2 = 0;
m.t2 = 0;
m.t3 = 0;
m.t1 = 300;
m.t2 = 10;
m.t3 = 0;
m.t4 = 2.14159265;
m.t5 = 1;
m.t6 = 10;
m.t7 = -10;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t7 = (0.5+((0.5*Math.sin(m.time))*m.t4));
m.t6 = div((m.t7+(m.t6*5)),6);
m.t2 = ((pow(((2*m.bass)+m.bass_att), 5)*0.01115111)+m.oldt2);
m.oldt2 = m.t2;
m.t3 = ((pow(((2*m.bass)+m.bass_att), 4)*0.01126213)+m.oldt3);
m.oldt3 = m.t3;
m.q1 = -Math.cos(Math.cos(m.t2));
m.q2 = Math.cos(-m.t3);
m.q3 = Math.sin(Math.cos(-m.t2));
m.q4 = Math.sin(m.t3);
		return m;
	},
		'point_eqs' : function(m) {
m.u = ((m.sample*1)-1);
m.rf = 512;
m.shc = (1-(m.u*m.u));
m.cf = below(m.sample, 1.05);
m.u = ifcond(m.cf, (sqrt(m.shc)*(div(-m.u,2)+0.5)), ifcond(below(m.sample, 0.05), (((m.sample-0.05)*15)+0.1), (pow(m.shc, 0.7)*1.5)));
m.u = (m.u+div(m.v,2));
m.px = ((div((Math.cos(((m.sample*m.t4)*m.rf))*m.u),2)+Math.cos(m.t6))+1.5);
m.py = ((m.sample*2)-1);
m.pz = (div((Math.sin(((m.sample*m.t4)*m.rf))*m.u),2)+2.9);
m.y1 = ((m.py*m.q1)+(m.pz*m.q3));
m.z1 = ((m.pz*m.q1)-(m.py*m.q3));
m.x2 = ((m.px*m.q2)+(m.z1*m.q4));
m.z2 = (((m.z1*m.q2)-(m.px*m.q4))+5);
m.x = div(m.x2,m.z2);
m.y = div(m.y1,m.z2);
m.x = ((m.x*0.5)+0.5);
m.y = ((0.5*m.y)+0.5);
m.r = (0.5+(Math.sin((m.sample*295))*0.5));
m.g = ((0.5*Math.sin((m.time*0.0245)))+(0.999*(0.5+(Math.sin((m.x*195))*0.5))));
m.b = ((0.5*Math.sin((m.time*0.1876)))+(0.495*(0.5+(Math.sin((m.y*208))*0.5))));
		return m;
	},
		'init_eqs_str' : ('t1 = 300;\n' + 't2 = 10;\n' + 't3 = 0;\n' + 't4 = 2.14159265;\n' + 't5 = 1;\n' + 't6 = 10;\n' + 't7 = -10;'),
		'frame_eqs_str' : ('t7 = 0.5+0.5*sin(time)*t4;\n' + 't6 = (t7+t6*5)/6;\n' + 't2 = pow(2*bass+bass_att,5)*0.01115111 +oldt2;\n' + 'oldt2 = t2;\n' + 't3 = pow(2*bass+bass_att,4)*0.01126213 + oldt3;\n' + 'oldt3 = t3;\n' + 'q1 = -cos(cos(t2));\n' + 'q2 = cos(-t3);\n' + 'q3 = sin(cos(-t2));\n' + 'q4 = sin(t3);'),
		'point_eqs_str' : ('u = sample*1-1;\n' + 'rf = 512;\n' + 'shc = 1-u*u;\n' + 'cf = below(sample,1.05);\n' + 'u=if(cf,sqrt(shc)*(-u/2+0.5), if(below(sample,0.05), (sample-0.05)*15+0.1, pow(shc,0.7)*1.5));\n' + 'u = u + v/2;\n' + 'px = cos(sample*t4*rf)*u/2+cos(t6)+1.5;\n' + 'py = sample*2-1;\n' + 'pz = sin(sample*t4*rf)*u/2+2.9;\n' + 'y1 = py*q1 + pz*q3;\n' + 'z1 = pz*q1 - py*q3;\n' + 'x2 = px*q2 + z1*q4;\n' + 'z2 = z1*q2 - px*q4+5;\n' + 'x = x2/z2;\n' + 'y = y1/z2;\n' + 'x = x*0.5 + 0.5;\n' + 'y = 0.5*y + 0.5;\n' + 'r = 0.5+sin(sample*295)*0.5;\n' + 'g = 0.5*sin(time*0.0245)+0.999*(0.5+sin(x*195)*0.5);\n' + 'b = 0.5*sin(time*0.1876)+0.495*(0.5+sin(y*208)*0.5);'),

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
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.6,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.370001,
			rad : 0.10031,
			x : 0.5,
			y : 0.5,
			ang : 0.01,
			sides : 5.0,
			border_r : 0.460001,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.border_blue = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = ((0.5+(0.01*Math.cos((m.q2*0.5))))+(0.25*Math.cos((m.time*5.5))));
m.y = ((0.5+(0.01*Math.sin((m.q2*0.5))))+(0.25*Math.sin((m.time*5.5))));
m.r = (0.5+(0.5*Math.sin(((m.time*1.713)+2))));
m.g = (0.5+(0.5*Math.sin(((m.time*1.063)+3))));
m.b = (0.5+(0.5*Math.sin(((m.time*1.054)+1))));
m.r2 = (0.5+(0.5*Math.sin(((m.time*1.085)+3))));
m.g2 = (0.5+(0.5*Math.sin(((m.time*1.056)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.time*1.038)+3))));
m.border_blue = Math.sin((m.time*0.654));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.01*cos(q2*0.5) + 0.25*cos(time*5.5);\n' + 'y = 0.5 + 0.01*sin(q2*0.5) + 0.25*sin(time*5.5);\n' + 'r = 0.5 + 0.5*sin(time*1.713 + 2);\n' + 'g = 0.5 + 0.5*sin(time*1.063 + 3);\n' + 'b = 0.5 + 0.5*sin(time*1.054 + 1);\n' + 'r2 = 0.5 + 0.5*sin(time*1.085 + 3);\n' + 'g2 = 0.5 + 0.5*sin(time*1.056+ 1);\n' + 'b2 = 0.5 + 0.5*sin(time*1.038 + 3);\n' + 'border_blue = sin(time*0.654);'),

		},
		{
		'baseVals' : {
			r2 : 0.18,
			a : 1.0,
			enabled : 1.0,
			b : 0.23,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.44,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.48,
			b2 : 0.11,
			a2 : 1.0,
			r : 0.210001,
			border_g : 0.400001,
			rad : 0.099995,
			x : 0.5,
			y : 0.5,
			ang : 0.03,
			sides : 5.0,
			border_r : 0.150001,
			},
		'init_eqs' : function(m) {
m.border_blue = 0;
m.border_green = 0;
m.border_red = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*2.4);
m.x = ((0.5+(0.26*Math.cos((m.time*3.1))))+(0.13*Math.cos((m.time*1.7))));
m.y = ((0.5+(0.22*Math.sin((m.time*3.3))))+(0.14*Math.sin((m.time*1.2))));
m.r = (0.5+(0.5*Math.sin(((m.time*0.713)+1))));
m.g = (0.5+(0.5*Math.sin(((m.time*0.563)+2))));
m.b = (0.5+(0.5*Math.sin(((m.time*0.654)+5))));
m.r2 = (0.5+(0.5*Math.sin(((m.time*0.885)+4))));
m.g2 = (0.5+(0.5*Math.sin(((m.time*0.556)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.time*0.638)+3))));
m.border_red = Math.sin((m.time*0.644));
m.border_green = Math.sin((m.time*0.874));
m.border_blue = Math.sin((m.time*0.954));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time*2.4;\n' + 'x = 0.5 + 0.26*cos(time*3.1) + 0.13*cos(time*1.7);\n' + 'y = 0.5 + 0.22*sin(time*3.3) + 0.14*sin(time*1.2);\n' + 'r = 0.5 + 0.5*sin(time*0.713 + 1);\n' + 'g = 0.5 + 0.5*sin(time*0.563 + 2);\n' + 'b = 0.5 + 0.5*sin(time*0.654 + 5);\n' + 'r2 = 0.5 + 0.5*sin(time*0.885 + 4);\n' + 'g2 = 0.5 + 0.5*sin(time*0.556+ 1);\n' + 'b2 = 0.5 + 0.5*sin(time*0.638 + 3);\n' + 'border_red = sin(time*0.644);\n' + 'border_green = sin(time*0.874);\n' + 'border_blue = sin(time*0.954);'),

		},
		{
		'baseVals' : {
			r2 : 0.18,
			a : 1.0,
			enabled : 1.0,
			b : 0.23,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.44,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.48,
			b2 : 0.11,
			a2 : 1.0,
			r : 0.210001,
			border_g : 0.400001,
			rad : 0.099995,
			x : 0.5,
			y : 0.5,
			ang : 0.03,
			sides : 5.0,
			border_r : 0.150001,
			},
		'init_eqs' : function(m) {
m.border_blue = 0;
m.border_green = 0;
m.border_red = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*2.4);
m.x = ((0.5+(0.22*Math.cos((m.time*3.3))))+(0.14*Math.cos((m.time*1.2))));
m.y = ((0.5+(0.26*Math.sin((m.time*3.1))))+(0.13*Math.sin((m.time*1.7))));
m.r = (0.5+(0.5*Math.sin(((m.time*1.013)+5))));
m.g = (0.5+(0.5*Math.sin(((m.time*1.063)+2))));
m.b = (0.5+(0.5*Math.sin(((m.time*1.054)+1))));
m.r2 = (0.5+(0.5*Math.sin(((m.time*1.085)+3))));
m.g2 = (0.5+(0.5*Math.sin(((m.time*1.056)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.time*1.038)+4))));
m.border_red = Math.sin((m.time*0.574));
m.border_green = Math.sin((m.time*0.774));
m.border_blue = Math.sin((m.time*1.054));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time*2.4;\n' + 'x = 0.5 + 0.22*cos(time*3.3) + 0.14*cos(time*1.2);\n' + 'y = 0.5 + 0.26*sin(time*3.1) + 0.13*sin(time*1.7);\n' + 'r = 0.5 + 0.5*sin(time*1.013 + 5);\n' + 'g = 0.5 + 0.5*sin(time*1.063 + 2);\n' + 'b = 0.5 + 0.5*sin(time*1.054 + 1);\n' + 'r2 = 0.5 + 0.5*sin(time*1.085 + 3);\n' + 'g2 = 0.5 + 0.5*sin(time*1.056+ 1);\n' + 'b2 = 0.5 + 0.5*sin(time*1.038 + 4);\n' + 'border_red = sin(time*0.574);\n' + 'border_green = sin(time*0.774);\n' + 'border_blue = sin(time*1.054);'),

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
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.54,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.280001,
			rad : 0.099863,
			x : 0.51,
			y : 0.49,
			ang : 0.062832,
			sides : 5.0,
			border_r : 0.460001,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.border_blue = 0;
m.border_green = 0;
m.border_red = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = ((0.5+(0.07*Math.cos((m.q3*0.5))))+(0.31*Math.sin((m.time*3.5))));
m.y = ((0.5+(0.07*Math.sin((m.q3*0.5))))+(0.31*Math.cos((m.time*3.5))));
m.r = (0.5+(0.5*Math.sin(((m.time*1.013)+2))));
m.g = (0.5+(0.5*Math.sin(((m.time*0.863)+3))));
m.b = (0.5+(0.5*Math.sin(((m.time*1.054)+1))));
m.r2 = (0.5+(0.5*Math.sin(((m.time*1.185)+3))));
m.g2 = (0.5+(0.5*Math.sin(((m.time*1.356)+2))));
m.b2 = (0.5+(0.5*Math.sin(((m.time*0.738)+4))));
m.border_red = Math.sin((m.time*1.074));
m.border_green = Math.sin((m.time*0.834));
m.border_blue = Math.sin((m.time*0.934));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.07*cos(q3*0.5) + 0.31*sin(time*3.5);\n' + 'y = 0.5 + 0.07*sin(q3*0.5) + 0.31*cos(time*3.5);\n' + 'r = 0.5 + 0.5*sin(time*1.013 + 2);\n' + 'g = 0.5 + 0.5*sin(time*0.863 + 3);\n' + 'b = 0.5 + 0.5*sin(time*1.054 + 1);\n' + 'r2 = 0.5 + 0.5*sin(time*1.185 + 3);\n' + 'g2 = 0.5 + 0.5*sin(time*1.356+ 2);\n' + 'b2 = 0.5 + 0.5*sin(time*0.738 + 4);\n' + 'border_red = sin(time*1.074);\n' + 'border_green = sin(time*0.834);\n' + 'border_blue = sin(time*0.934);'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = sin(5*ff/bass)/2+0.5;\n' + 'wave_g = cos(ff/mid)/2+0.5;\n' + 'wave_b = cos(3*ff/treb)/2+0.5;\n' + 'cx = cx + 0.110*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );\n' + 'cy = cy + 0.110*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );\n' + 'ib_r = ib_r + 0.2*sin(time*0.5413);\n' + 'ib_g = ib_g + 0.2*sin(time*0.6459);\n' + 'ib_b = ib_b + 0.2*sin(time*0.4354);\n' + 'ob_r=wave_r;\n' + 'ob_g=wave_g;\n' + 'ob_b=wave_b;\n' + 'mv_x = lastingbass*30+24;\n' + 'mv_y= madtreb*48+8;\n' + 'mv_r = 0.7-bass_att;\n' + 'mv_b = 0.6-treb_att;\n' + 'mv_g = 0.5-mid_att;\n' + 'ff = frame/100;\n' + 'rot = rot + 0.040*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'zoom=max(0.98, min(0.15+1.1*bass_att, 1.75 ));'),
	'pixel_eqs_str' : ('zoom=zoom+if(q2,0,rad*sin(time*.6969)*1.2969);\n' + 'thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.315*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.315*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'zoom = zoom - 0.4;'),
};

return pmap;
});
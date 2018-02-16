define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 0.334693,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.005,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.3,
		wave_r : 0.5,
		ib_r : 0.4,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.01,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.7,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.8,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.1,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.2199,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 0.0,
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
m.q6 = 0;
m.q8 = 0;
m.yamp = 0;
m.xamp = 0;
m.yamptarg = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.dy_residual = 0;
m.xspeed = 0;
m.dx_residual = 0;
m.vol = 0;
m.newzoom = 0;
m.ydir = 0;
m.xdir = 0;
m.newrad = 0;
m.newx = 0;
m.newy = 0;
m.mtime = 0;
m.ypos = 0;
m.bass_thresh = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = (m.wave_r+(0.45*((0.5*Math.sin((m.time*0.701)))+(0.3*Math.cos((m.time*0.438))))));
m.wave_b = (m.wave_b-(0.4*((0.5*Math.sin((m.time*4.782)))+(0.5*Math.cos((m.time*0.722))))));
m.wave_g = (m.wave_g+(0.4*Math.sin((m.time*1.931))));
m.wave_r = (((0.2125*m.wave_r)+(0.7154*m.wave_g))+(0.0721*m.wave_b));
m.wave_g = m.wave_r;
m.wave_b = m.wave_r;
m.vol = (0.167*(m.bass+m.mid));
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.5*m.vol)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.wave_x = ((1.25*m.xpos)+0.5);
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.3*m.vol)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.wave_y = ((1.25*m.ypos)+0.5);
m.dx = (m.dx+m.dx_residual);
m.dy = (m.dy+m.dy_residual);
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.dx_residual = (((equal(m.bass_thresh, 2)*0.003)*Math.sin((m.time*7)))+((1-equal(m.bass_thresh, 2))*m.dx_residual));
m.dy_residual = (((equal(m.bass_thresh, 2)*0.001)*Math.sin((m.time*9)))+((1-equal(m.bass_thresh, 2))*m.dy_residual));
m.rot = 0.1;
m.vol = (((m.bass+m.mid)+m.treb)*0.25);
m.vol = (m.vol*m.vol);
m.mtime = (m.mtime+((m.vol*0.01)*div(75,m.fps)));
m.q8 = m.mtime;
m.q1 = (((Math.sin(m.mtime)*Math.sin((m.mtime*3)))*0.4)+0.5);
m.q2 = (((Math.cos((m.mtime*1.3))*Math.sin((m.mtime*5.4)))*0.4)+0.5);
m.ib_r = Math.tan(m.time);
m.ib_r = Math.min(1, Math.max(m.ib_r, 0));
m.ib_g = Math.tan((m.time+2.1));
m.ib_g = Math.min(1, Math.max(m.ib_g, 0));
m.ib_b = Math.tan((m.time+4.2));
m.ib_b = Math.min(1, Math.max(m.ib_b, 0));
m.q3 = (10+(8*((0.6*Math.sin((0.223*m.time)))+(0.4*Math.sin((0.153*m.time))))));
m.q4 = div(1,m.q3);
m.q5 = (0.5*sign(m.xpos));
m.q6 = (0.5*sign(m.ypos));
m.monitor = m.q4;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
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
m.rot = ((m.rot*Math.sin(m.time))*0.2);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.3,
			g : 0.8,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.n = 0;
m.xof = 0;
m.yof = 0;
m.yp = 0;
m.xp = 0;
m.tm = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.xp = Math.sin(m.n);
m.yp = Math.cos(m.n);
m.tm = (m.q3-m.sample);
m.xof = (((Math.sin(m.tm)*Math.sin((m.tm*3)))*0.4)+0.5);
m.yof = (((Math.cos((m.tm*1.3))*Math.sin((m.tm*5.4)))*0.4)+0.5);
m.x = m.xof;
m.y = (1-m.yof);
m.a = (1-m.sample);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'xp=sin(n);\n' + 'yp=cos(n);\n' + 'tm=q3 - sample;\n' + 'xof=sin(tm) * sin(tm*3) * 0.4 + 0.5;\n' + 'yof=cos(tm*1.3) * sin(tm*5.4) * 0.4 + 0.5;\n' + 'x= xof;\n' + 'y= (1-yof);\n' + 'a=1-sample;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.2,
			g : 0.7,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.n2 = 0;
m.tx = 0;
m.ty = 0;
m.yran = 0;
m.xran = 0;
m.q8 = 0;
m.n = 0;
m.xof = 0;
m.yof = 0;
m.yp = 0;
m.xp = 0;
m.tm = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.n2 = (((m.sample-m.q8)-(m.time*0.1))*6);
m.xp = Math.sin(m.n);
m.yp = Math.cos(m.n);
m.tm = (m.q8-m.sample);
m.tx = (((Math.sin((m.n2*13))*Math.sin((m.n2*5)))*m.sample)*0.05);
m.ty = (((Math.cos((m.n2*13))*Math.sin((m.n2*7)))*m.sample)*0.05);
m.xof = ((((Math.sin(m.tm)*Math.sin((m.tm*3)))*0.4)+0.5)+m.tx);
m.yof = ((((Math.cos((m.tm*1.3))*Math.sin((m.tm*5.4)))*0.4)+0.5)+m.ty);
m.xran = ((rand(10)-5)*0.0005);
m.xran = (m.xran*m.sample);
m.yran = ((rand(10)-5)*0.0005);
m.yran = (m.yran*m.sample);
m.x = (m.xof+m.xran);
m.y = ((1-m.yof)+m.yran);
m.a = (1-m.sample);
m.r = 0;
m.g = 0;
m.b = 0;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'n2=(sample-q8 - time*0.1)*6;\n' + 'xp=sin(n);\n' + 'yp=cos(n);\n' + 'tm=q8 - sample;\n' + 'tx= sin(n2*13)*sin(n2*5) * sample * 0.05;\n' + 'ty= cos(n2*13)*sin(n2*7) * sample * 0.05;\n' + 'xof=sin(tm) * sin(tm*3) * 0.4 + 0.5 + tx;\n' + 'yof=cos(tm*1.3) * sin(tm*5.4) * 0.4 + 0.5 + ty;\n' + 'xran=(rand(10) - 5) * 0.0005;\n' + ' xran=xran*sample;\n' + 'yran=(rand(10) - 5) * 0.0005;\n' + ' yran=yran*sample;\n' + 'x= xof + xran;\n' + 'y= (1-yof) + yran;\n' + 'a=(1-sample);\n' + 'r=0;\n' + 'g=0;\n' + 'b=0;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.2,
			g : 0.78,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.n2 = 0;
m.tx = 0;
m.ty = 0;
m.yran = 0;
m.xran = 0;
m.q8 = 0;
m.n = 0;
m.xof = 0;
m.yof = 0;
m.yp = 0;
m.xp = 0;
m.tm = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.n2 = (((m.sample-m.q8)-(m.time*0.1))*6);
m.xp = Math.sin(m.n);
m.yp = Math.cos(m.n);
m.tm = (m.q8-m.sample);
m.tx = (((Math.sin((m.n2*13))*Math.sin((m.n2*5)))*m.sample)*0.05);
m.ty = (((Math.cos((m.n2*13))*Math.sin((m.n2*7)))*m.sample)*0.05);
m.xof = ((((Math.sin(m.tm)*Math.sin((m.tm*3)))*0.4)+0.5)+m.tx);
m.yof = ((((Math.cos((m.tm*1.3))*Math.sin((m.tm*5.4)))*0.4)+0.5)+m.ty);
m.xran = ((rand(10)-5)*0.0005);
m.xran = (m.xran*m.sample);
m.yran = ((rand(10)-5)*0.0005);
m.yran = (m.yran*m.sample);
m.x = (m.xof+m.xran);
m.y = ((1-m.yof)+m.yran);
m.a = (1-m.sample);
m.r = 0;
m.g = 0;
m.b = 0;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'n2=(sample-q8 - time*0.1)*6;\n' + 'xp=sin(n);\n' + 'yp=cos(n);\n' + 'tm=q8 - sample;\n' + 'tx= sin(n2*13)*sin(n2*5) * sample * 0.05;\n' + 'ty= cos(n2*13)*sin(n2*7) * sample * 0.05;\n' + 'xof=sin(tm) * sin(tm*3) * 0.4 + 0.5 + tx;\n' + 'yof=cos(tm*1.3) * sin(tm*5.4) * 0.4 + 0.5 + ty;\n' + 'xran=(rand(10) - 5) * 0.0005;\n' + ' xran=xran*sample;\n' + 'yran=(rand(10) - 5) * 0.0005;\n' + ' yran=yran*sample;\n' + 'x= xof + xran;\n' + 'y= (1-yof) + yran;\n' + 'a=(1-sample);\n' + 'r=0;\n' + 'g=0;\n' + 'b=0;'),

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
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.n2 = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.xs = Math.sin((m.sample*6.28));
m.ys = Math.cos((m.sample*6.28));
m.xs = ((m.xs*0.7)+0.5);
m.ys = ((m.ys*0.7)+0.5);
m.xs = Math.min(m.xs, 0.958);
m.xs = Math.max(m.xs, 0.042);
m.ys = Math.min(m.ys, 0.988);
m.ys = Math.max(m.ys, 0.012);
m.x = m.xs;
m.y = m.ys;
m.n2 = Math.abs(((m.sample*6.283)-3.1415));
m.r = ((Math.sin((m.n2+m.time))*0.5)+0.5);
m.g = ((Math.sin(((m.n2+2.1)+m.time))*0.5)+0.5);
m.b = ((Math.sin(((m.n2+4.2)+m.time))*0.5)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('xs=sin(sample*6.28);\n' + 'ys=cos(sample*6.28);\n' + 'xs=xs*0.7 + 0.5;\n' + 'ys=ys*0.7 + 0.5;\n' + 'xs=min(xs,0.958);\n' + 'xs=max(xs,0.042);\n' + 'ys=min(ys,0.988);\n' + 'ys=max(ys,0.012);\n' + 'x=xs;\n' + 'y=ys;\n' + 'n2=abs((sample*6.283)-3.1415);\n' + 'r=sin(n2+time)*0.5+0.5;\n' + 'g=sin(n2+2.1+time)*0.5+0.5;\n' + 'b=sin(n2+4.2+time)*0.5+0.5;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.5,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.5,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.110462,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q1;
m.y = (1-m.q2);
m.ang = m.time;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=q1;\n' + 'y=1-q2;\n' + 'ang=time;'),

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
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.03,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q1;
m.y = (1-m.q2);
m.ang = m.time;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=q1;\n' + 'y=1-q2;\n' + 'ang=time;'),

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
	'frame_eqs_str' : ('warp=0;\n' + 'wave_r = wave_r + 0.45*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));\n' + 'wave_b = wave_b - 0.4*(0.5*sin(time*4.782)+0.5*cos(time*0.722));\n' + 'wave_g = wave_g + 0.4*sin(time*1.931);\n' + 'wave_r = 0.2125*wave_r + 0.7154*wave_g + 0.0721*wave_b;\n' + 'wave_g = wave_r;\n' + 'wave_b = wave_r;\n' + 'vol = 0.167*(bass+mid);\n' + 'xamptarg = if(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'wave_x = 1.25*xpos + 0.5;\n' + 'yamptarg = if(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'wave_y = 1.25*ypos + 0.5;\n' + 'dx = dx + dx_residual;\n' + 'dy = dy + dy_residual;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'dx_residual = equal(bass_thresh,2)*0.003*sin(time*7) + (1-equal(bass_thresh,2))*dx_residual;\n' + 'dy_residual = equal(bass_thresh,2)*0.001*sin(time*9) + (1-equal(bass_thresh,2))*dy_residual;\n' + 'rot = 0.1;\n' + 'vol=(bass+mid+treb)*0.25;\n' + 'vol=vol*vol;\n' + 'mtime=mtime + vol*0.01*(75/fps);\n' + 'q8=mtime;\n' + 'q1=sin(mtime) * sin(mtime*3) * 0.4 + 0.5;\n' + 'q2=cos(mtime*1.3) * sin(mtime*5.4) * 0.4 + 0.5;\n' + 'ib_r = tan(time);\n' + 'ib_r = min(1, max(ib_r,0));\n' + 'ib_g = tan(time+2.1);\n' + 'ib_g = min(1, max(ib_g,0));\n' + 'ib_b = tan(time+4.2);\n' + 'ib_b = min(1, max(ib_b,0));\n' + 'q3 = 10+8*(0.6*sin(0.223*time) + 0.4*sin(0.153*time));\n' + 'q4 = 1/q3;\n' + 'q5 = 0.5*sign(xpos);\n' + 'q6 = 0.5*sign(ypos);\n' + 'monitor=q4;'),
	'pixel_eqs_str' : ('cx = ((0&(x*q3-q5))+q5)*q4;\n' + 'cy = ((0&(y*q3-q6))+q6)*q4;\n' + 'newx = q1-x;\n' + 'newy = q2-y;\n' + 'newrad = sqrt((newx)*(newx)+0.5625*(newy)*(newy))*2;\n' + 'newzoom = pow(1.05 + 0.03*newrad, pow(0.01+sin(newrad*newrad), newrad*2-1));\n' + 'dx = (newx)*newzoom - newx;\n' + 'dy = (newy)*newzoom - newy;\n' + 'dx =dx*0.1;\n' + 'dy=dy*0.1;\n' + 'rot = 2*newrad*(0.5*(0.5-rad)+0.1);\n' + 'rot=rot*sin(time)*0.2;'),
};

return pmap;
});
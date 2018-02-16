define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 9.0,
		wave_scale : 1.285751,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.162174,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 5.428738,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 0.999609,
		ob_size : 0.01,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.009509,
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
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.mt = 0;
m.sz = 0;
m.yd = 0;
m.vav = 0;
m.xd = 0;
m.an = 0;
m.treb_avg = 0;
m.dis = 0;
m.tic = 0;
m.ra = 0;
m.rb = 0;
m.des = 0;
m.bt = 0;
m.bass_avg = 0;
m.tin = 0;
m.mid_avg = 0;
m.vt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = m.time;
m.ra = 10;
m.treb_avg = (m.tic*((m.treb_avg*(div(1,m.tic)-m.ra))+(m.ra*m.treb)));
m.mid_avg = (m.tic*((m.mid_avg*(div(1,m.tic)-m.ra))+(m.ra*m.mid)));
m.bass_avg = (m.tic*((m.bass_avg*(div(1,m.tic)-m.ra))+(m.ra*m.bass)));
m.rb = 1;
m.vav = (m.tic*((m.vav*(div(1,m.tic)-m.rb))+((m.rb*((m.bass+m.treb)+m.mid))*0.33333)));
m.tt = (m.tt+(m.tic*m.treb_avg));
m.mt = (m.mt+(m.tic*m.mid_avg));
m.bt = (m.bt+(m.tic*m.bass_avg));
m.vt = (m.vt+((m.tic*((m.treb_avg+m.mid_avg)+m.bass_avg))*0.33333));
m.sz = 0.2;
m.q1 = ((0.5+(m.sz*Math.sin((m.tt*0.629))))-(m.sz*Math.sin((m.tt*0.107))));
m.q2 = ((0.5+(m.sz*Math.sin((m.tt*0.987))))-(m.sz*Math.sin((m.tt*0.456))));
m.q3 = ((0.5+(m.sz*Math.sin((m.mt*0.654))))-(m.sz*Math.sin((m.mt*0.355))));
m.q4 = ((0.5+(m.sz*Math.sin((m.mt*0.548))))-(m.sz*Math.sin((m.mt*0.875))));
m.q5 = ((0.5+(m.sz*Math.sin((m.bt*0.687))))-(m.sz*Math.sin((m.bt*0.318))));
m.q6 = ((0.5+(m.sz*Math.sin((m.bt*0.465))))-(m.sz*Math.sin((m.bt*0.526))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.xd = (m.q1-m.x);
m.yd = (m.q2-m.y);
m.dis = pow(((m.xd*m.xd)+(m.yd*m.yd)), 0.5);
m.des = (1-(m.dis*0.7071068));
m.des = (pow(m.des, 8)*-m.treb);
m.an = Math.acos(div(Math.abs(m.xd),m.dis));
m.dx = (((sign(m.xd)*0.07)*Math.cos(m.an))*m.des);
m.dy = (((sign(m.yd)*0.07)*Math.sin(m.an))*m.des);
m.dy = (m.dy+((((sign(m.xd)*m.treb)*0.05)*Math.cos(m.an))*m.des));
m.dx = (m.dx+(((((sign(m.yd)*m.treb)*0.05)*Math.sin(m.an))*m.des)*-1));
m.xd = (m.q3-m.x);
m.yd = (m.q4-m.y);
m.dis = pow(((m.xd*m.xd)+(m.yd*m.yd)), 0.5);
m.des = (1-(m.dis*0.7071068));
m.des = (pow(m.des, 8)*-m.mid);
m.an = Math.acos(div(Math.abs(m.xd),m.dis));
m.dx = (m.dx+(((sign(m.xd)*0.07)*Math.cos(m.an))*m.des));
m.dy = (m.dy+(((sign(m.yd)*0.07)*Math.sin(m.an))*m.des));
m.dy = (m.dy+((((sign(m.xd)*m.mid)*0.05)*Math.cos(m.an))*m.des));
m.dx = (m.dx+(((((sign(m.yd)*m.mid)*0.05)*Math.sin(m.an))*m.des)*-1));
m.xd = (m.q5-m.x);
m.yd = (m.q6-m.y);
m.dis = pow(((m.xd*m.xd)+(m.yd*m.yd)), 0.5);
m.des = (1-(m.dis*0.7071068));
m.des = (pow(m.des, 8)*-m.bass);
m.an = Math.acos(div(Math.abs(m.xd),m.dis));
m.dx = (m.dx+(((sign(m.xd)*0.07)*Math.cos(m.an))*m.des));
m.dy = (m.dy+(((sign(m.yd)*0.07)*Math.sin(m.an))*m.des));
m.dy = (m.dy+((((sign(m.xd)*m.bass)*0.05)*Math.cos(m.an))*m.des));
m.dx = (m.dx+(((((sign(m.yd)*m.bass)*0.05)*Math.sin(m.an))*m.des)*-1));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 3.0,
			g : 1.0,
			scaling : 1.32735,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 1.0,
			sep : 51.0,
			},
		'init_eqs' : function(m) {
m.tm = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (rand(1001)*0.001);
m.y = (rand(1001)*0.001);
m.tm = ((m.time*0.5)+(m.sample*2));
m.r = (0.5+(0.5*Math.sin((m.tm*1.132))));
m.g = (0.5+(0.5*Math.sin((m.tm*1.121))));
m.b = (0.5+(0.5*Math.sin((m.tm*1.187))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = rand(1001)*.001;\n' + 'y = rand(1001)*.001;\n' + 'tm = time*.5 + sample*2;\n' + 'r = .5 + .5*sin(tm*1.132);\n' + 'g = .5 + .5*sin(tm*1.121);\n' + 'b = .5 + .5*sin(tm*1.187);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 3.0,
			g : 1.0,
			scaling : 1.32735,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 1.0,
			sep : 51.0,
			},
		'init_eqs' : function(m) {
m.tm = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (rand(1001)*0.001);
m.y = (rand(1001)*0.001);
m.tm = ((m.time*0.5)+(m.sample*2));
m.r = (0.5+(0.5*Math.sin((m.tm*1.132))));
m.g = (0.5+(0.5*Math.sin((m.tm*1.121))));
m.b = (0.5+(0.5*Math.sin((m.tm*1.187))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = rand(1001)*.001;\n' + 'y = rand(1001)*.001;\n' + 'tm = time*.5 + sample*2;\n' + 'r = .5 + .5*sin(tm*1.132);\n' + 'g = .5 + .5*sin(tm*1.121);\n' + 'b = .5 + .5*sin(tm*1.187);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 3.0,
			g : 1.0,
			scaling : 1.32735,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 1.0,
			sep : 51.0,
			},
		'init_eqs' : function(m) {
m.tm = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (rand(1001)*0.001);
m.y = (rand(1001)*0.001);
m.tm = ((m.time*0.5)+(m.sample*2));
m.r = (0.5+(0.5*Math.sin((m.tm*1.132))));
m.g = (0.5+(0.5*Math.sin((m.tm*1.121))));
m.b = (0.5+(0.5*Math.sin((m.tm*1.187))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = rand(1001)*.001;\n' + 'y = rand(1001)*.001;\n' + 'tm = time*.5 + sample*2;\n' + 'r = .5 + .5*sin(tm*1.132);\n' + 'g = .5 + .5*sin(tm*1.121);\n' + 'b = .5 + .5*sin(tm*1.187);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 3.0,
			g : 1.0,
			scaling : 1.32735,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 0.0,
			sep : 51.0,
			},
		'init_eqs' : function(m) {
m.tm = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (rand(1001)*0.001);
m.y = (rand(1001)*0.001);
m.tm = ((m.time*0.5)+(m.sample*2));
m.r = (0.5+(0.5*Math.sin((m.tm*1.132))));
m.g = (0.5+(0.5*Math.sin((m.tm*1.121))));
m.b = (0.5+(0.5*Math.sin((m.tm*1.187))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = rand(1001)*.001;\n' + 'y = rand(1001)*.001;\n' + 'tm = time*.5 + sample*2;\n' + 'r = .5 + .5*sin(tm*1.132);\n' + 'g = .5 + .5*sin(tm*1.121);\n' + 'b = .5 + .5*sin(tm*1.187);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 3.141593,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.491382,
			x : 0.5,
			y : 0.5,
			ang : 1.570796,
			sides : 54.0,
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
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.081954,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 54.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.q4 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q3;
m.y = (1-m.q4);
m.r = (0.5+(0.5*Math.sin(((m.time+0.5)*1.132))));
m.g = (0.5+(0.5*Math.sin(((m.time+0.5)*1.121))));
m.b = (0.5+(0.5*Math.sin(((m.time+0.5)*1.187))));
m.rad = (0.1*m.mid);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=q3;\n' + 'y=1-q4;\n' + 'r = .5 + .5*sin((time+.5)*1.132);\n' + 'g = .5 + .5*sin((time+.5)*1.121);\n' + 'b = .5 + .5*sin((time+.5)*1.187);\n' + 'rad = .1*mid;'),

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
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.081954,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 54.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q5 = 0;
m.q6 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q5;
m.y = (1-m.q6);
m.rad = (0.2*m.bass);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=q5;\n' + 'y=1-q6;\n' + 'rad = .2*bass;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
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
			r : 0.0,
			border_g : 1.0,
			rad : 0.081954,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 54.0,
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
m.r = (0.5+(0.5*Math.sin((m.time*1.132))));
m.g = (0.5+(0.5*Math.sin((m.time*1.121))));
m.b = (0.5+(0.5*Math.sin((m.time*1.187))));
m.rad = (m.treb*0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=q1;\n' + 'y=1-q2;\n' + 'r = .5 + .5*sin(time*1.132);\n' + 'g = .5 + .5*sin(time*1.121);\n' + 'b = .5 + .5*sin(time*1.187);\n' + 'rad = treb*.1;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'tic = min(time - tin,.1);\n' + 'tin = time;\n' + 'ra = 10;\n' + 'treb_avg = tic*(treb_avg*(1/tic - ra) + ra*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - ra) + ra*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - ra) + ra*bass);\n' + 'rb = 1;\n' + 'vav = tic*(vav*(1/tic - rb) + rb*(bass+treb+mid)*.33333);\n' + 'tt = tt + tic*treb_avg;\n' + 'mt = mt + tic*mid_avg;\n' + 'bt = bt + tic*bass_avg;\n' + 'vt = vt + tic*(treb_avg+mid_avg+bass_avg)*.33333;\n' + 'sz = .2;\n' + 'q1 = .5 + sz*sin(tt*.629) - sz*sin(tt*.107);\n' + 'q2 = .5 + sz*sin(tt*.987) - sz*sin(tt*.456);\n' + 'q3 = .5 + sz*sin(mt*.654) - sz*sin(mt*.355);\n' + 'q4 = .5 + sz*sin(mt*.548) - sz*sin(mt*.875);\n' + 'q5 = .5 + sz*sin(bt*.687) - sz*sin(bt*.318);\n' + 'q6 = .5 + sz*sin(bt*.465) - sz*sin(bt*.526);'),
	'pixel_eqs_str' : ('xd = q1-x;\n' + 'yd = q2-y;\n' + 'dis = pow(xd*xd+yd*yd,.5);\n' + 'des = 1 - dis*.7071068;\n' + 'des = pow(des,8)*-treb;\n' + 'an = acos(abs(xd)/dis);\n' + 'dx = sign(xd)*.07*cos(an)*des;\n' + 'dy = sign(yd)*.07*sin(an)*des;\n' + 'dy = dy + sign(xd)*treb*.05*cos(an)*des;\n' + 'dx = dx + sign(yd)*treb*.05*sin(an)*des*-1;\n' + 'xd = q3-x;\n' + 'yd = q4-y;\n' + 'dis = pow(xd*xd+yd*yd,.5);\n' + 'des = 1 - dis*.7071068;\n' + 'des = pow(des,8)*-mid;\n' + 'an = acos(abs(xd)/dis);\n' + 'dx = dx + sign(xd)*.07*cos(an)*des;\n' + 'dy = dy + sign(yd)*.07*sin(an)*des;\n' + 'dy = dy + sign(xd)*mid*.05*cos(an)*des;\n' + 'dx = dx + sign(yd)*mid*.05*sin(an)*des*-1;\n' + 'xd = q5-x;\n' + 'yd = q6-y;\n' + 'dis = pow(xd*xd+yd*yd,.5);\n' + 'des = 1 - dis*.7071068;\n' + 'des = pow(des,8)*-bass;\n' + 'an = acos(abs(xd)/dis);\n' + 'dx = dx + sign(xd)*.07*cos(an)*des;\n' + 'dy = dy + sign(yd)*.07*sin(an)*des;\n' + 'dy = dy + sign(xd)*bass*.05*cos(an)*des;\n' + 'dx = dx + sign(yd)*bass*.05*sin(an)*des*-1;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 12.799995,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 9.600006,
		wave_scale : 0.01,
		echo_alpha : 1.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.05,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.999998,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.0,
		mv_b : 0.71,
		echo_zoom : 1.0529,
		ob_size : 0.02,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.91,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 13.290894,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : -0.28,
		cx : 0.5,
		dy : -0.32,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : -1.0,
		decay : 0.94,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 5.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q7 = 0;
m.mt = 0;
m.q8 = 0;
m.vav = 0;
m.treb_avg = 0;
m.tic = 0;
m.ra = 0;
m.rb = 0;
m.bass_avg = 0;
m.rd = 0;
m.tin = 0;
m.mid_avg = 0;
m.zoom = 1;
m.xpos = 0;
m.ypos = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 1;
m.warp = 0;
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = m.time;
m.ra = 10;
m.treb_avg = (m.tic*((m.treb_avg*(div(1,m.tic)-m.ra))+(m.ra*m.treb)));
m.mid_avg = (m.tic*((m.mid_avg*(div(1,m.tic)-m.ra))+(m.ra*m.mid)));
m.bass_avg = (m.tic*((m.bass_avg*(div(1,m.tic)-m.ra))+(m.ra*m.bass)));
m.rb = 1;
m.vav = (m.tic*((m.vav*(div(1,m.tic)-m.rb))+((m.rb*((m.bass+m.treb)+m.mid))*0.33333)));
m.q1 = m.treb_avg;
m.q2 = m.mid_avg;
m.q3 = m.bass_avg;
m.q4 = m.vav;
m.mt = ((m.mt+((m.tic*m.vav)*100))*below(m.mt, 10000));
m.q7 = (Math.sin((m.mt*0.02))*0.1);
m.q8 = (Math.sin((m.mt*0.01))*0.1);
m.dx = (Math.sin((m.mt*0.1))*0.07);
m.dy = (Math.cos((m.mt*0.069))*0.07);
m.monitor = m.mt;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rd = sqrt((sqr((((m.x-0.5)-m.q7)*3))+sqr((((m.y-0.5)+m.q8)*2))));
m.zoom = div((m.rd*m.rd),2.5);
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
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.mixa = 0;
m.mixb = 0;
m.mixc = 0;
m.it = 0;
m.mx = 0;
m.lx = 0;
m.my = 0;
m.ly = 0;
m.tic = 0;
m.tir = 0;
m.t1 = 0;
m.t2 = 0;
m.dc = 0;
m.t3 = 0;

			m.rkeys = ['it','my','dc'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tic = (m.time-m.tir);
m.tir = m.time;
m.mixa = ((m.mixa+(m.q1*m.tic))*below(m.mixa, 10000));
m.t1 = (m.mixa-Math.floor(m.mixa));
m.mixb = ((m.mixb+(m.q2*m.tic))*below(m.mixb, 10000));
m.t2 = (m.mixb-Math.floor(m.mixb));
m.mixc = ((m.mixc+(m.q3*m.tic))*below(m.mixc, 10000));
m.t3 = (m.mixc-Math.floor(m.mixc));
		return m;
	},
		'point_eqs' : function(m) {
m.it = ((m.it+1)*above(m.sample, 0));
m.dc = ((m.dc+equal(mod(m.it,48), 0))*above(m.sample, 0));
m.lx = (((m.t1*equal(m.dc, 0))+((1-m.t3)*(equal(m.dc, 2)+equal(m.dc, 1))))+(m.t2*equal(m.dc, 3)));
m.ly = (0+((equal(m.dc, 1)+equal(m.dc, 3))*0.975));
m.mx = ((((equal(mod((m.it+6),6), 0)*-0.1)+(equal(mod((m.it+1),6), 0)*-0.1))+(equal(mod((m.it+4),6), 0)*0.1))+(equal(mod((m.it+3),6), 0)*0.1));
m.my = (((m.my+(equal(mod((m.it+3),6), 0)*0.01))+(equal(mod(m.it,6), 0)*0.01))*(above(m.sample, 0)-equal(mod((m.it*0.5),48), 0)));
m.x = ifcond(below(m.dc, 2), (m.lx+(m.mx*0.2)), (m.ly+(m.my*0.1)));
m.y = ifcond(below(m.dc, 2), (m.ly+(m.my*0.1)), (m.lx+(m.mx*0.2)));
m.b = 1;
m.r = (equal(m.mx, 0)*0.8);
m.g = (equal(m.mx, 0)*1);
m.a = (equal(m.mx, 0)*below(m.dc, 4));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tic = time - tir;\n' + 'tir = time;\n' + 'mixa = (mixa + q1*tic)*below(mixa,10000);\n' + 't1 = mixa - int(mixa);\n' + 'mixb = (mixb + q2*tic)*below(mixb,10000);\n' + 't2 = mixb - int(mixb);\n' + 'mixc = (mixc + q3*tic)*below(mixc,10000);\n' + 't3 = mixc - int(mixc);'),
		'point_eqs_str' : ('it = (it+1)*above(sample,0);\n' + 'dc = (dc + equal(it%48,0))*above(sample,0);\n' + 'lx = t1*equal(dc,0) + (1-t3)*(equal(dc,2) + equal(dc,1)) + t2*equal(dc,3);\n' + 'ly = 0 + (equal(dc,1) + equal(dc,3))*.975;\n' + 'mx = equal((it+6)%6,0)*-.1 + equal((it+1)%6,0)*-.1 + equal((it+4)%6,0)*.1 + equal((it+3)%6,0)*.1;\n' + 'my = (my + equal((it+3)%6,0)*.01 + equal((it)%6,0)*.01)*(above(sample,0) - equal((it*.5)%48,0));\n' + 'x = if(below(dc,2),lx + mx*.2,ly + my*.1);\n' + 'y = if(below(dc,2),ly + my*.1,lx + mx*.2);\n' + 'b = 1;\n' + 'r = equal(mx,0)*.8;\n' + 'g = equal(mx,0)*1;\n' + 'a = equal(mx,0)*below(dc,4);'),

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
			a : 1.0,
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
			b2 : 0.1,
			a2 : 0.06,
			r : 0.0,
			border_g : 1.0,
			rad : 0.491382,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q7 = 0;
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+m.q7);
m.y = (0.5+m.q8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=.5+q7;\n' + 'y=.5+q8;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.819541,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.018423,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 24.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = 0.01;
m.x = (0.5-m.q4);
m.y = (0.5-m.q5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=0.01;\n' + 'x=.5-q4;\n' + 'y=.5-q5;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.6,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.136686,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.164463,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 24.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q7 = 0;
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+m.q7);
m.y = (0.5+m.q8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = .5 + q7;\n' + 'y = .5 + q8;'),

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
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 50.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.d = 0;
m.q7 = 0;
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5-m.q7);
m.y = (0.5-m.q8);
m.d = (Math.abs((m.x-0.5))+Math.abs((m.y-0.5)));
m.a = Math.max((1-(m.d*4)), 0);
m.a2 = Math.max((1-((m.d*4)*2)), 0);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = .5 - q7;\n' + 'y = .5 - q8;\n' + 'd = abs(x-.5) + abs(y-.5);\n' + 'a = max(1 - d*4,0);\n' + 'a2 = max(1 - d*4*2,0);'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('zoom=1;\n' + 'xpos=0;\n' + 'ypos=0;'),
	'frame_eqs_str' : ('decay=1;\n' + 'warp = 0;\n' + 'tic = min(time - tin,.1);\n' + 'tin = time;\n' + 'ra = 10;\n' + 'treb_avg = tic*(treb_avg*(1/tic - ra) + ra*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - ra) + ra*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - ra) + ra*bass);\n' + 'rb = 1;\n' + 'vav = tic*(vav*(1/tic - rb) + rb*(bass+treb+mid)*.33333);\n' + 'q1 = treb_avg;\n' + 'q2 = mid_avg;\n' + 'q3 = bass_avg;\n' + 'q4 = vav;\n' + 'mt=(mt+tic*vav*100)*below(mt,10000);\n' + 'q7=sin(mt*0.02)*0.1;\n' + 'q8=sin(mt*0.01)*0.1;\n' + 'dx=sin(mt*0.1)*0.07;\n' + 'dy=cos(mt*0.069)*0.07;\n' + 'monitor = mt;'),
	'pixel_eqs_str' : ('rd=sqrt( sqr( (x-0.5-q7)*3) + sqr( (y-0.5+q8)*2 ) );\n' + 'zoom=(rd*rd)/2.5;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.006761,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.22891,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.460478,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 0.4999,
		echo_zoom : 1.0,
		ob_size : 0.0065,
		wave_smoothing : 0.0,
		warpanimspeed : 1.459526,
		wave_dots : 0.0,
		mv_g : 0.4999,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999902,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.2,
		decay : 0.9,
		wave_a : 0.3116,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.4999,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {

		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
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
			r2 : 0.0,
			a : 0.6,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.5,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.075238,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.5,
			border_g : 1.0,
			rad : 6.650134,
			x : 0.5,
			y : 0.5,
			ang : 3.644249,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.rate = 0;
m.poly = 0;
m.te = 0;
m.beat = 0;
m.bassthresh = 0;
m.t2 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['r2','b','g','g2','poly','b2','te','r','bassthresh'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rate = div(m.fps,(m.fps+div(1,3)));
m.beat = above(m.bass, m.bassthresh);
m.bassthresh = ((m.beat*4)+((1-m.beat)*(((m.bassthresh-1.3)*m.rate)+1.3)));
m.poly = ifcond(m.beat, (rand(30)+6), m.poly);
m.sides = m.poly;
m.te = (m.te+Math.max(div(div(m.bass,m.fps),3), 0.003));
m.x = ((0.5+(0.45*Math.sin((m.te*1.87))))+(0.07*Math.sin((m.time*0.6))));
m.y = ((0.5+(0.35*Math.cos((m.te*1.87))))+(0.07*Math.sin((m.time*1.3))));
m.ang = ((3*Math.sin((-m.te*1.67)))+(3*Math.cos((m.te*0.4))));
m.rad = (m.rad*(0.9+(0.2*m.t2)));
m.r = Math.min(1, Math.max(0, (m.r+(0.4*Math.sin(((m.time*0.517)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.4*Math.sin(((m.time*0.491)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.4*Math.sin(((m.time*0.532)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.4*Math.sin(((m.time*0.457)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.4*Math.sin(((m.time*0.437)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.4*Math.sin(((m.time*0.484)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('rate = fps/(fps+1/3);\n' + 'beat = above(bass,bassthresh);\n' + 'bassthresh = beat*4 + (1-beat)*((bassthresh - 1.3)*rate+1.3);\n' + 'poly = if(beat,rand(30)+6,poly);\n' + 'sides = poly;\n' + 'te = te + max(bass/fps/3,0.003);\n' + 'x = 0.5+0.45*sin(te*1.87)+0.07*sin(time*0.6);\n' + 'y = 0.5+0.35*cos(te*1.87)+0.07*sin(time*1.3);\n' + 'ang = 3*sin(-te*1.67) + 3*cos(te*0.4);\n' + 'rad = rad * (0.9 + 0.2*t2);\n' + 'r = min(1,max(0,r + 0.4*sin(time*0.517 + 1)));\n' + 'g = min(1,max(0,g + 0.4*sin(time*0.491 + 2)));\n' + 'b = min(1,max(0,b + 0.4*sin(time*0.532 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.4*sin(time*0.457 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.4*sin(time*0.437 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.4*sin(time*0.484 + 6)));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.7418,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.749999,
			x : 0.37,
			y : 0.49,
			ang : 3.644249,
			sides : 3.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.rate = 0;
m.poly = 0;
m.out = 0;
m.te = 0;
m.rate2 = 0;
m.beat = 0;
m.bassthresh = 0;
m.t2 = 0;
m.ran = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
m.te = 1;
m.poly = 4;
			m.rkeys = ['r2','b','g','g2','poly','out','b2','te','r','bassthresh'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rate = div(m.fps,(m.fps+div(1,2)));
m.beat = above(m.bass, m.bassthresh);
m.bassthresh = ((m.beat*4)+((1-m.beat)*(((m.bassthresh-1.5)*m.rate)+1.5)));
m.ran = (rand(8)+4);
m.poly = ifcond(m.beat, ifcond(equal(m.ran, m.poly), (m.poly+1), m.ran), m.poly);
m.sides = m.poly;
m.rate2 = div(m.fps,(m.fps+10));
m.out = ((((1-m.beat)*m.rate2)*m.out)+m.beat);
m.te = (div(div(m.bass,m.fps),2)+m.te);
m.x = (m.x+(0.056*Math.sin((m.te*1.67))));
m.y = (m.y+(0.043*Math.sin((m.te*1.23))));
m.ang = ((3*Math.sin((-m.te*0.67)))+(3*Math.cos((m.te*0.4))));
m.rad = ((m.rad*(0.9+(0.2*m.t2)))-(0.1*Math.sin((m.te*1.51))));
m.r = Math.min(1, Math.max(0, (m.r+(0.3*Math.sin(((m.time*0.427)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.3*Math.sin(((m.time*0.401)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.3*Math.sin(((m.time*0.452)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.3*Math.sin(((m.time*0.417)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.3*Math.sin(((m.time*0.457)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.3*Math.sin(((m.time*0.434)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;\n' + 'te = 1;\n' + 'poly = 4;'),
		'frame_eqs_str' : ('rate = fps/(fps+1/2);\n' + 'beat = above(bass,bassthresh);\n' + 'bassthresh = beat*4 + (1-beat)*((bassthresh - 1.5)*rate+1.5);\n' + 'ran = rand(8)+4;\n' + 'poly = if(beat,if(equal(ran,poly),poly+1,ran),poly);\n' + 'sides = poly;\n' + 'rate2 = fps/(fps+10);\n' + 'out = (1-beat)*rate2*out + beat;\n' + 'te = bass/fps/2 + te;\n' + 'x = x + 0.056*sin(te*1.67);\n' + 'y = y + 0.043*sin(te*1.23);\n' + 'ang = 3*sin(-te*0.67) + 3*cos(te*0.4);\n' + 'rad = rad * (0.9 + 0.2*t2) - 0.1*sin(te*1.51);\n' + 'r = min(1,max(0,r + 0.3*sin(time*0.427 + 1)));\n' + 'g = min(1,max(0,g + 0.3*sin(time*0.401 + 2)));\n' + 'b = min(1,max(0,b + 0.3*sin(time*0.452 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.3*sin(time*0.417 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.3*sin(time*0.457 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.3*sin(time*0.434 + 6)));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0406,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.749999,
			x : 0.67,
			y : 0.43,
			ang : 4.209736,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.rate = 0;
m.poly = 0;
m.out = 0;
m.te = 0;
m.rate2 = 0;
m.beat = 0;
m.bassthresh = 0;
m.t2 = 0;
m.ran = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
m.te = 1;
m.poly = 5;
			m.rkeys = ['r2','b','g','g2','poly','out','b2','te','r','bassthresh'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rate = div(m.fps,(m.fps+div(1,2)));
m.beat = above(m.mid, m.bassthresh);
m.bassthresh = ((m.beat*4)+((1-m.beat)*(((m.bassthresh-1.6)*m.rate)+1.6)));
m.ran = (rand(8)+4);
m.poly = ifcond(m.beat, ifcond(equal(m.ran, m.poly), (m.poly+1), m.ran), m.poly);
m.sides = m.poly;
m.rate2 = div(m.fps,(m.fps+10));
m.out = ((((1-m.beat)*m.rate2)*m.out)+m.beat);
m.te = (div(div(m.mid,m.fps),2)+m.te);
m.x = (m.x+(0.05*Math.sin((m.te*1.17))));
m.y = (m.y+(0.05*Math.sin((m.te*1.83))));
m.ang = (((3*Math.sin((m.te*0.5)))+(2*Math.sin((m.te*1.1))))+(4*Math.sin((m.te*0.3))));
m.rad = ((m.rad*(0.9+(0.2*m.t2)))+(0.1*Math.sin((m.te*1.3))));
m.r = Math.min(1, Math.max(0, (m.r+(0.3*Math.sin(((m.time*0.417)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.3*Math.sin(((m.time*0.391)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.3*Math.sin(((m.time*0.432)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.3*Math.sin(((m.time*0.457)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.3*Math.sin(((m.time*0.437)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.3*Math.sin(((m.time*0.484)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;\n' + 'te = 1;\n' + 'poly = 5;'),
		'frame_eqs_str' : ('rate = fps/(fps+1/2);\n' + 'beat = above(mid,bassthresh);\n' + 'bassthresh = beat*4 + (1-beat)*((bassthresh - 1.6)*rate+1.6);\n' + 'ran = rand(8)+4;\n' + 'poly = if(beat,if(equal(ran,poly),poly+1,ran),poly);\n' + 'sides = poly;\n' + 'rate2 = fps/(fps+10);\n' + 'out = (1-beat)*rate2*out + beat;\n' + 'te = mid/fps/2 + te;\n' + 'x = x + 0.05*sin(te*1.17);\n' + 'y = y + 0.05*sin(te*1.83);\n' + 'ang = 3*sin(te*0.5)+2*sin(te*1.1)+4*sin(te*0.3);\n' + 'rad = rad * (0.9 + 0.2*t2) + 0.1*sin(te*1.3);\n' + 'r = min(1,max(0,r + 0.3*sin(time*0.417 + 1)));\n' + 'g = min(1,max(0,g + 0.3*sin(time*0.391 + 2)));\n' + 'b = min(1,max(0,b + 0.3*sin(time*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.3*sin(time*0.457 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.3*sin(time*0.437 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.3*sin(time*0.484 + 6)));'),

		},
		{
		'baseVals' : {
			r2 : 0.4999,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.5,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 0.5,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.200238,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 0.5,
			},
		'init_eqs' : function(m) {
m.rate = 0;
m.poly = 0;
m.te = 0;
m.rate2 = 0;
m.beatthresh = 0;
m.vol = 0;
m.beat = 0;
m.rad_add = 0;
m.bassthresh = 0;
m.beat2 = 0;

			m.rkeys = ['poly','te','beatthresh','rad_add','bassthresh'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rate = div(m.fps,(m.fps+div(1,2)));
m.rate2 = div(m.fps,(m.fps+16));
m.ang = (m.time*0.5);
m.vol = div(((m.bass_att+m.mid_att)+m.treb_att),6);
m.te = (div(m.vol,m.fps)+m.te);
m.x = (m.x+(0.2*Math.sin((m.te*1.14))));
m.y = (m.y+(0.2*Math.sin(((m.te*0.96)+2))));
m.beat = above((m.vol*1.5), m.bassthresh);
m.beat2 = above(m.mid, m.beatthresh);
m.bassthresh = ((m.beat*4)+((1-m.beat)*(((m.bassthresh-1.4)*m.rate)+1.4)));
m.beatthresh = ((m.beat2*4)+((1-m.beat2)*(((m.beatthresh-1.6)*m.rate)+1.6)));
m.poly = ifcond(m.beat, (rand(5)+3), m.poly);
m.poly = ifcond(equal(m.poly, 7), (rand(50)+7), m.poly);
m.sides = m.poly;
m.rad = (m.rad-div(Math.log(m.poly),100));
m.rad_add = (((1-m.beat2)*((m.rad_add*m.rate2)+div(m.vol,25)))+(m.beat2*((m.rad_add*m.rate2)+div(m.vol,8))));
m.rad = (m.rad+m.rad_add);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rate = fps/(fps+1/2);\n' + 'rate2 = fps/(fps + 16);\n' + 'ang = time*0.5;\n' + 'vol = (bass_att+mid_att+treb_att)/6;\n' + 'te = vol/fps + te;\n' + 'x = x + 0.2*sin(te*1.14);\n' + 'y = y + 0.2*sin(te*0.96+2);\n' + 'beat = above(vol*1.5,bassthresh);\n' + 'beat2 = above(mid,beatthresh);\n' + 'bassthresh = beat*4 + (1-beat)*((bassthresh - 1.4)*rate+1.4);\n' + 'beatthresh = beat2*4 + (1-beat2)*((beatthresh - 1.6)*rate + 1.6);\n' + 'poly = if(beat,rand(5)+3,poly);\n' + 'poly = if(equal(poly,7),rand(50)+7,poly);\n' + 'sides = poly;\n' + 'rad = rad-log(poly)/100;\n' + 'rad_add = (1-beat2)*(rad_add*rate2 + vol/25) + beat2*(rad_add*rate2+vol/8);\n' + 'rad = rad + rad_add;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : (''),
	'pixel_eqs_str' : (''),
};

return pmap;
});
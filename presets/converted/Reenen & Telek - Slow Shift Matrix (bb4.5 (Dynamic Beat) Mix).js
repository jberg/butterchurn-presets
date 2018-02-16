define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 0.0,
		warpscale : 3.645675,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.3873,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.05,
		warp : 0.001,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : -0.941273,
		mv_dy : 0.426319,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 1.0,
		mv_b : 0.941976,
		echo_zoom : 1.0,
		ob_size : 0.0,
		wave_smoothing : 0.63,
		warpanimspeed : 43.865211,
		wave_dots : 0.0,
		mv_g : 0.078173,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.3,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 2.0,
		wave_mystery : 1.0,
		decay : 0.9,
		wave_a : 0.001645,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 0.315997,
		rating : 0.0,
		modwavealphastart : 2.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.rate = 0;
m.tt = 0;
m.ow = 0;
m.bv = 0;
m.bthresh2 = 0;
m.beat = 0;
m.beat2 = 0;
m.bthresh = 0;
m.tt = rand(10000);
		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.rate = div(m.fps,(m.fps+2));
m.bv = ((m.bass*0.1)+(0.7*m.bv));
m.tt = (m.tt+(m.bv*0.05));
m.beat = above((m.bass*m.bass_att), m.bthresh);
m.bthresh = ((m.beat*15)+((1-m.beat)*(((m.bthresh-4.5)*m.rate)+4.5)));
m.beat2 = above(m.mid, m.bthresh2);
m.bthresh2 = ((m.beat2*15)+((1-m.beat2)*(((m.bthresh2-1.5)*m.rate)+1.5)));
m.warp = ((m.beat2*3)+((1-m.beat2)*m.ow));
m.ow = ((m.warp*m.rate)*m.rate);
m.tt = ifcond(m.beat, rand(32768), m.tt);
m.wave_x = -1;
m.dx = ((0.3*Math.sin((m.tt*0.12)))+(10*Math.sin((m.tt*0.015))));
m.dy = ((0.39*Math.sin((m.tt*0.21)))+(20*Math.sin((m.tt*0.041))));
m.rot = (1*Math.sin((m.tt*0.15)));
m.cx = ((Math.sin((m.tt*0.16))*0.5)+0.5);
m.cy = ((Math.cos((m.tt*0.46))*0.5)+0.5);
m.ib_r = ((Math.sin((m.tt*0.51))*0.5)+0.5);
m.ib_g = ((Math.sin((m.tt*0.71))*0.5)+0.5);
m.ib_b = ((Math.sin((m.tt*0.81))*0.5)+0.5);
m.ib_a = (1-pow(0.5, div(((m.mid_att+m.bass_att)+m.treb_att),3)));
m.monitor = (1-pow(0.5, ((m.mid_att+m.bass_att)+m.treb_att)));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (0.8-(0.2*pow((1-m.rad), 1)));
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
			a : 0.7,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.999996,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.662305,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 44.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.ox = 0;
m.oy = 0;
m.btime = 0;
m.bt = 0;
m.ox = 0.5;
m.oy = 0.5;
			m.rkeys = ['ox','oy','btime'];
			return m;
		},
		'frame_eqs' : function(m) {
m.btime = (m.btime+Math.min((m.bass*0.1), 0.05));
m.ang = (m.btime*0.1);
m.r = Math.abs(Math.sin(((m.time*1.4)+5)));
m.g = Math.abs(Math.sin(((m.time*1.6)+3)));
m.b = Math.abs(Math.sin(((m.time*1.8)+1)));
m.bt = (m.btime*sign(Math.sin(div(m.time,m.fps))));
m.x = ((m.ox+(0.01*Math.sin(m.bt)))+(0.005*Math.sin((m.bt+m.bass))));
m.x = ifcond(above(m.x, 1), (1+(1-m.x)), m.x);
m.y = ((m.oy+(0.01*Math.cos(m.bt)))+(0.005*Math.cos((m.bt+m.bass))));
m.y = ifcond(above(m.y, 1), (1+(1-m.y)), m.y);
m.x = ifcond(below(m.x, 0), -m.x, m.x);
m.y = ifcond(below(m.y, 0), -m.y, m.y);
m.ox = m.x;
m.oy = m.y;
		return m;
	},
		'init_eqs_str' : ('ox = 0.5;\n' + 'oy = 0.5;'),
		'frame_eqs_str' : ('btime = btime + min(bass*0.1,0.05);\n' + 'ang = btime*.1;\n' + 'r = abs(sin(time*1.4+5));\n' + 'g = abs(sin(time*1.6+3));\n' + 'b = abs(sin(time*1.8+1));\n' + 'bt = btime*sign(sin(time/fps));\n' + 'x = ox + 0.01*sin(bt) + 0.005*sin(bt+bass);\n' + 'x = if(above(x,1),1+(1-x),x);\n' + 'y = oy + 0.01*cos(bt) + 0.005*cos(bt+bass);\n' + 'y = if(above(y,1),1+(1-y),y);\n' + 'x = if(below(x,0),-x,x);\n' + 'y = if(below(y,0),-y,y);\n' + 'ox = x;\n' + 'oy = y;'),

		},
		{
		'baseVals' : {
			r2 : 0.4999,
			a : 0.7,
			enabled : 1.0,
			b : 0.5,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.5,
			textured : 0.0,
			g2 : 0.5,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.5,
			a2 : 0.0,
			r : 0.5,
			border_g : 1.0,
			rad : 0.54279,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 33.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.tt = 0;
m.bv = 0;

			m.rkeys = ['tt','b','g','r','bv'];
			return m;
		},
		'frame_eqs' : function(m) {
m.bv = ((m.treb*0.1)+(0.7*m.bv));
m.tt = (m.tt+(m.bv*0.05));
m.r = (m.r+(0.2*Math.sin(((m.tt*1.4)+5))));
m.g = (m.g+(0.2*Math.sin(((m.tt*1.6)+3))));
m.b = (m.b+(0.2*Math.sin(((m.tt*1.8)+1))));
m.r2 = m.r;
m.b2 = m.b;
m.g2 = m.g;
m.x = ((0.5+(0.3*Math.sin(m.tt)))+(0.1*Math.sin(m.time)));
m.y = ((0.5+(0.3*Math.cos(m.tt)))+(0.1*Math.cos(m.time)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('bv = treb*.1+.7*bv;\n' + 'tt=tt+bv*0.05;\n' + 'r = r+0.2*sin(tt*1.4+5);\n' + 'g = g+0.2*sin(tt*1.6+3);\n' + 'b = b+0.2*sin(tt*1.8+1);\n' + 'r2 = r;\n' + 'b2 = b;\n' + 'g2 = g;\n' + 'x = 0.5 + 0.3*sin(tt) + 0.1*sin(time);\n' + 'y = 0.5 + 0.3*cos(tt) + 0.1*cos(time);'),

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
	'init_eqs_str' : ('tt = rand(10000);'),
	'frame_eqs_str' : ('warp = 0;\n' + 'rate = fps/(fps+2);\n' + 'bv = bass*.1+.7*bv;\n' + 'tt=tt+bv*0.05;\n' + 'beat = above(bass*bass_att,bthresh);\n' + 'bthresh = beat*15 + (1-beat)*((bthresh - 4.5)*rate + 4.5);\n' + 'beat2 = above(mid,bthresh2);\n' + 'bthresh2 = beat2*15 + (1-beat2)*((bthresh2 - 1.5)*rate + 1.5);\n' + 'warp = beat2*3 + (1-beat2)*ow;\n' + 'ow = warp*rate*rate;\n' + 'tt = if(beat,rand(32768),tt);\n' + 'wave_x =-1;\n' + 'dx = .3*sin(tt*.12)+10*sin(tt*.015);\n' + 'dy = .39*sin(tt*.21)+20*sin(tt*.041);\n' + 'rot = 1*sin(tt*.15);\n' + 'cx = sin(tt*.16)*.5+.5;\n' + 'cy = cos(tt*.46)*.5+.5;\n' + 'ib_r = sin(tt*.51)*.5+.5;\n' + 'ib_g = sin(tt*.71)*.5+.5;\n' + 'ib_b = sin(tt*.81)*.5+.5;\n' + 'ib_a = 1-pow(.5,(mid_att + bass_att + treb_att)/3);\n' + 'monitor = 1-pow(.5,mid_att + bass_att + treb_att);'),
	'pixel_eqs_str' : ('zoom = .8-.2*pow(1-rad,1);'),
};

return pmap;
});
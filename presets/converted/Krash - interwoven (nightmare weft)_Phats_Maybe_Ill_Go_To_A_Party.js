define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 31.199999,
		warpscale : 1.0,
		brighten : 1.0,
		mv_y : 2.280001,
		wave_scale : 0.498315,
		echo_alpha : 0.4,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.02,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.1,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.8,
		echo_zoom : 1.816695,
		ob_size : 0.005,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.95,
		zoom : 1.0,
		solarize : 1.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 2.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 5.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.r2 = 0;
m.peakbass_att = 0;
m.r3 = 0;
m.meanbass_att = 0;
m.g1 = 0;
m.g2 = 0;
m.g3 = 0;
m.lastbeat = 0;
m.b1 = 0;
m.b2 = 0;
m.b3 = 0;
m.beatrate = 0;
m.beat = 0;
m.x1 = 0;
m.framethird = 0;
m.x2 = 0;
m.volume = 0;
m.x3 = 0;
m.r1 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.framethird = mod(m.frame,3);
m.x1 = (((0.5+(0.15*Math.sin((0.416*m.time))))+(0.15*Math.sin((0.832*m.time))))+(0.1*Math.sin((1.324*m.time))));
m.x2 = (((0.5+(0.15*Math.sin((0.341*m.time))))+(0.15*Math.sin((0.768*m.time))))+(0.1*Math.sin((1.523*m.time))));
m.x3 = (((0.5+(0.15*Math.sin((0.287*m.time))))+(0.15*Math.sin((0.913*m.time))))+(0.1*Math.sin((1.142*m.time))));
m.r1 = (((0.5+(0.15*Math.sin((0.512*m.time))))+(0.15*Math.sin((0.943*m.time))))+(0.1*Math.sin((1.024*m.time))));
m.r2 = (((0.5+(0.15*Math.sin((0.483*m.time))))+(0.15*Math.sin((0.879*m.time))))+(0.1*Math.sin((1.423*m.time))));
m.r3 = (((0.5+(0.15*Math.sin((0.531*m.time))))+(0.15*Math.sin((0.671*m.time))))+(0.1*Math.sin((1.442*m.time))));
m.g1 = (((0.5+(0.15*Math.sin((0.248*m.time))))+(0.15*Math.sin((0.829*m.time))))+(0.1*Math.sin((1.623*m.time))));
m.g2 = (((0.5+(0.15*Math.sin((0.461*m.time))))+(0.15*Math.sin((0.699*m.time))))+(0.1*Math.sin((1.254*m.time))));
m.g3 = (((0.5+(0.15*Math.sin((0.397*m.time))))+(0.15*Math.sin((0.768*m.time))))+(0.1*Math.sin((1.157*m.time))));
m.b1 = (((0.5+(0.15*Math.sin((0.211*m.time))))+(0.15*Math.sin((0.652*m.time))))+(0.1*Math.sin((1.865*m.time))));
m.b2 = (((0.5+(0.15*Math.sin((0.333*m.time))))+(0.15*Math.sin((0.978*m.time))))+(0.1*Math.sin((1.359*m.time))));
m.b3 = (((0.5+(0.15*Math.sin((0.475*m.time))))+(0.15*Math.sin((0.791*m.time))))+(0.1*Math.sin((1.011*m.time))));
m.wave_x = ifcond(equal(m.framethird, 0), m.x1, ifcond(equal(m.framethird, 1), m.x2, m.x3));
m.wave_r = ifcond(equal(m.framethird, 0), m.r1, ifcond(equal(m.framethird, 1), m.r2, m.r3));
m.wave_g = ifcond(equal(m.framethird, 0), m.g1, ifcond(equal(m.framethird, 1), m.g2, m.g3));
m.wave_b = ifcond(equal(m.framethird, 0), m.b1, ifcond(equal(m.framethird, 1), m.b2, m.b3));
m.volume = (0.3*(m.bass+m.mid));
m.beatrate = (equal(m.beatrate, 0)+((1-equal(m.beatrate, 0))*(below(m.volume, 0.01)+((1-below(m.volume, 0.01))*m.beatrate))));
m.lastbeat = (m.lastbeat+(equal(m.lastbeat, 0)*m.time));
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.peakbass_att = Math.max(m.bass_att, m.peakbass_att);
m.beat = ((above(m.volume, 0.8)*below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)))*above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))));
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ((m.beat*m.bass_att)+(((1-m.beat)*m.peakbass_att)*((above((m.time-m.lastbeat), (2*m.beatrate))*0.99)+((1-above((m.time-m.lastbeat), (2*m.beatrate)))*0.998))));
m.lastbeat = ((m.beat*m.time)+((1-m.beat)*m.lastbeat));
m.peakbass_att = Math.max(m.peakbass_att, (1.1*m.meanbass_att));
m.dx = ifcond(m.beat, (1-(2*rand(2))), 0);
m.ob_a = ifcond(m.beat, 0, 0.65);
m.mv_a = ifcond(m.beat, 1, 0.05);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dy = (((0.004+(0.0005*Math.sin(((10*m.x)+(0.459*m.time)))))+(0.0005*Math.sin(((14*m.x)+(0.325*m.time)))))+(0.0005*Math.sin((1.231*m.time))));
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
	'frame_eqs_str' : ('warp=0;\n' + 'framethird = frame%3;\n' + 'x1 = 0.5 + 0.15*sin(0.416*time) + 0.15*sin(0.832*time) + 0.1*sin(1.324*time);\n' + 'x2 = 0.5 + 0.15*sin(0.341*time) + 0.15*sin(0.768*time) + 0.1*sin(1.523*time);\n' + 'x3 = 0.5 + 0.15*sin(0.287*time) + 0.15*sin(0.913*time) + 0.1*sin(1.142*time);\n' + 'r1 = 0.5 + 0.15*sin(0.512*time) + 0.15*sin(0.943*time) + 0.1*sin(1.024*time);\n' + 'r2 = 0.5 + 0.15*sin(0.483*time) + 0.15*sin(0.879*time) + 0.1*sin(1.423*time);\n' + 'r3 = 0.5 + 0.15*sin(0.531*time) + 0.15*sin(0.671*time) + 0.1*sin(1.442*time);\n' + 'g1 = 0.5 + 0.15*sin(0.248*time) + 0.15*sin(0.829*time) + 0.1*sin(1.623*time);\n' + 'g2 = 0.5 + 0.15*sin(0.461*time) + 0.15*sin(0.699*time) + 0.1*sin(1.254*time);\n' + 'g3 = 0.5 + 0.15*sin(0.397*time) + 0.15*sin(0.768*time) + 0.1*sin(1.157*time);\n' + 'b1 = 0.5 + 0.15*sin(0.211*time) + 0.15*sin(0.652*time) + 0.1*sin(1.865*time);\n' + 'b2 = 0.5 + 0.15*sin(0.333*time) + 0.15*sin(0.978*time) + 0.1*sin(1.359*time);\n' + 'b3 = 0.5 + 0.15*sin(0.475*time) + 0.15*sin(0.791*time) + 0.1*sin(1.011*time);\n' + 'wave_x = if(equal(framethird,0),x1,if(equal(framethird,1),x2,x3));\n' + 'wave_r = if(equal(framethird,0),r1,if(equal(framethird,1),r2,r3));\n' + 'wave_g = if(equal(framethird,0),g1,if(equal(framethird,1),g2,g3));\n' + 'wave_b = if(equal(framethird,0),b1,if(equal(framethird,1),b2,b3));\n' + 'volume = 0.3*(bass+mid);\n' + 'beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);\n' + 'lastbeat = lastbeat + equal(lastbeat,0)*time;\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = max(bass_att,peakbass_att);\n' + 'beat = above(volume,0.8)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.99 + (1-above(time - lastbeat, 2*beatrate))*0.998);\n' + 'lastbeat = beat*time + (1-beat)*lastbeat;\n' + 'peakbass_att = max(peakbass_att,1.1*meanbass_att);\n' + 'dx = if(beat,1-2*rand(2),0);\n' + 'ob_a = if(beat,0,0.65);\n' + 'mv_a = if(beat,1,0.05);'),
	'pixel_eqs_str' : ('dy = 0.004 + 0.0005*sin(10*x+0.459*time) + 0.0005*sin(14*x+0.325*time) + 0.0005*sin(1.231*time);'),
};

return pmap;
});
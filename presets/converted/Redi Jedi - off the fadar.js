define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.285751,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.006596,
		ob_size : 0.005,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.5,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.925,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.bc = 0;
m.avgvol = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.rawbeatb = 0;
m.q5 = 0;
m.avgbeatrate = 0;
m.lbass = 0;
m.beatb = 0;
m.bbtime = 0;
m.avgdb = 0;
m.vol = 0;
m.beatrate = 0;
m.lbbtime = 0;
m.mtime = 0;
m.db = 0;
m.beatrate = 5;
m.avgbeatrate = 1;
m.bbtime = 1;
m.lbbtime = 0.5;
m.avgdb = 0.5;
m.vol = 1;
m.avgvol = 0.2;
		return m;
	},
	'frame_eqs' : function(m) {
m.db = ((m.bass-m.lbass)*m.fps);
m.lbass = m.bass;
m.avgdb = ((m.avgdb*0.99)+(Math.abs(m.db)*0.01));
m.rawbeatb = above(m.db, (m.avgdb*2));
m.beatb = ((m.rawbeatb*above((m.time-m.lbbtime), (0.75*m.avgbeatrate)))*above(m.bass_att, 0.3));
m.bbtime = (m.time*m.beatb);
m.beatrate = ((m.beatb*(m.bbtime-m.lbbtime))+((1-m.beatb)*m.beatrate));
m.avgbeatrate = ((m.beatb*((m.avgbeatrate*0.999)+(m.beatrate*0.001)))+((1-m.beatb)*m.avgbeatrate));
m.lbbtime = ((m.time*m.beatb)+((1-m.beatb)*m.lbbtime));
m.bc = (m.bc+m.beatb);
m.vol = ((m.rawbeatb*(m.db-m.avgdb))*0.01);
m.avgvol = ((m.avgvol*0.99)+(m.vol*0.05));
m.mtime = (m.mtime+Math.min((m.avgvol*0.5), 0.25));
m.q2 = m.mtime;
m.q1 = m.beatb;
m.q3 = m.db;
m.q4 = div(60,m.avgbeatrate);
m.q5 = (equal(mod(m.bc,4), 0)*m.beatb);
m.zoom = 1;
m.decay = 0.99;
m.warp = 0;
m.wrap = 1;
m.ob_r = ((Math.sin(((m.q2*0.01)+(m.bass*0.01)))*0.5)+0.5);
m.ob_g = ((Math.cos((((m.q2*0.001)*m.q4)+(m.treb*0.01)))*0.5)+0.5);
m.ob_b = ((Math.sin(((m.time*0.001)*m.q4))*0.5)+0.5);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1+(Math.sin((m.q2+((m.treb_att*6)*m.rad)))*0.1));
m.rot = (Math.sin((((m.q2*0.05)*m.q4)+((m.bass_att*3)*m.rad)))*0.1);
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
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {
m.ii = 0;
m.q1 = 0;
m.q2 = 0;
m.q4 = 0;
m.i = 0;
m.c1 = 0;
m.c2 = 0;
m.c3 = 0;
m.c4 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.c1 = Math.abs((m.c1-m.q1));
m.t1 = m.c1;
m.t2 = Math.sin(((m.q2*0.0001)*m.q4));
m.t3 = ((Math.sin((((m.q2*0.001)*m.treb_att)+((m.q4*10)*m.bass)))*0.3)+0.4);
		return m;
	},
		'point_eqs' : function(m) {
m.i = Math.cos((m.q2*0.1));
m.ii = Math.sin((m.q2*0.1));
m.y = ((m.sample*m.i)+0.5);
m.x = ((m.sample*m.ii)+0.5);
m.c4 = ((Math.sin(((m.q2*m.q4)*0.01))*0.1)+0.11);
m.c2 = (0.1+(m.c4*1.5));
m.c3 = (0.2+(m.c4*1.5));
m.c1 = (1-(above(m.sample, m.c2)*below(m.sample, m.c3)));
m.r = (m.t1*(1-m.c1));
m.g = (m.t2*(1-m.c1));
m.b = (m.t3*(1-m.c1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('c1=abs(c1-q1);\n' + 't1=c1;\n' + 't2=sin(q2*.0001*q4);\n' + 't3=(sin(q2*.001*treb_att+q4*10*bass)*.3+.4);'),
		'point_eqs_str' : ('i=cos(q2*.1);\n' + 'ii=sin(q2*.1);\n' + 'y=sample*i+.5;\n' + 'x=sample*(ii)+.5;\n' + 'c4=sin(q2*q4*.01)*.1+.11;\n' + 'c2=.1+c4*1.5;\n' + 'c3=.2+c4*1.5;\n' + 'c1=1-above(sample,c2)*below(sample,c3);\n' + 'r=t1*(1-c1);\n' + 'g=t2*(1-c1);\n' + 'b=t3*(1-c1);'),

		},
		{
		'baseVals' : {
			a : 0.5,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.ii = 0;
m.q2 = 0;
m.i = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.i = Math.cos(((m.q2*0.1)+0.01));
m.ii = Math.sin(((m.q2*0.1)+0.01));
m.y = (((m.sample*m.i)*0.7)+0.5);
m.x = (((m.sample*m.ii)*0.7)+0.5);
m.r = 0;
m.g = 0;
m.b = 0;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('i=cos(q2*.1+.01);\n' + 'ii=sin(q2*.1+.01);\n' + 'y=sample*i*.7+.5;\n' + 'x=sample*(ii)*.7+.5;\n' + 'r=0;\n' + 'g=0;\n' + 'b=0;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {
m.ii = 0;
m.ll = 0;
m.q2 = 0;
m.q4 = 0;
m.i = 0;
m.ul = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.i = Math.cos(((m.q2*0.01)*m.q4));
m.ii = Math.sin(((m.q2*0.01)*m.q4));
m.y = ((m.sample*m.i)+0.5);
m.x = ((m.sample*m.ii)+0.5);
m.ul = ((0.003*m.bass_att)*m.q4);
m.ll = ((0.002*m.treb_att)*m.q4);
m.r = (((m.treb_att*0.052)+m.value1)*(above(m.sample, m.ll)*below(m.sample, m.ul)));
m.g = (((m.mid_att*0.02)+m.value2)*(above(m.sample, m.ll)*below(m.sample, m.ul)));
m.b = (((m.bass_att*0.057)+m.value2)*(above(m.sample, m.ll)*below(m.sample, m.ul)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('i=cos(q2*.01*q4);\n' + 'ii=sin(q2*.01*q4);\n' + 'y=sample*i+.5;\n' + 'x=sample*(ii)+.5;\n' + 'ul=.003*bass_att*q4;\n' + 'll=.002*treb_att*q4;\n' + 'r=(treb_att*.052+value1)*(above(sample,ll)*below(sample,ul));\n' + 'g=(mid_att*.02+value2)*(above(sample,ll)*below(sample,ul));\n' + 'b=(bass_att*.057+value2)*(above(sample,ll)*below(sample,ul));'),

		},
		{
		'baseVals' : {
			a : 0.5,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.ii = 0;
m.q2 = 0;
m.q4 = 0;
m.i = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.i = Math.cos((((m.q2*0.01)*m.q4)+0.01));
m.ii = Math.sin((((m.q2*0.01)*m.q4)+0.01));
m.y = ((m.sample*m.i)+0.5);
m.x = ((m.sample*m.ii)+0.5);
m.r = 0;
m.g = 0;
m.b = 0;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('i=cos(q2*.01*q4+.01);\n' + 'ii=sin(q2*.01*q4+.01);\n' + 'y=sample*i+.5;\n' + 'x=sample*(ii)+.5;\n' + 'r=0;\n' + 'g=0;\n' + 'b=0;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
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
m.q1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = (m.q1*0.33);
m.y = 0.5;
m.x = 0.2;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad=q1*.33;\n' + 'y=.5;\n' + 'x=.2;'),

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
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
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
m.q2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = (m.q2*0.3);
m.x = 0.2;
m.y = 0.2;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad=q2*.3;\n' + 'x=.2;\n' + 'y=.2;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.436055,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = (m.q5*0.33);
m.y = 0.75;
m.x = 0.2;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad=q5*.33;\n' + 'y=.75;\n' + 'x=.2;'),

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
	'init_eqs_str' : ('beatrate=5;\n' + 'avgbeatrate=1;\n' + 'bbtime=1;\n' + 'lbbtime=.5;\n' + 'avgdb=.5;\n' + 'vol=1;\n' + 'avgvol=.2;'),
	'frame_eqs_str' : ('db=(bass-lbass)*fps;\n' + 'lbass=bass;\n' + 'avgdb=avgdb*.99+abs(db)*.01;\n' + 'rawbeatb=above(db,avgdb*2);\n' + 'beatb=rawbeatb*above(time-lbbtime,.75*avgbeatrate)*above(bass_att,.3);\n' + 'bbtime=time*beatb;\n' + 'beatrate=beatb*(bbtime-lbbtime)+(1-beatb)*beatrate;\n' + 'avgbeatrate=beatb*(avgbeatrate*.999+beatrate*.001)+(1-beatb)*avgbeatrate;\n' + 'lbbtime=time*beatb+(1-beatb)*lbbtime;\n' + 'bc=bc+beatb;\n' + 'vol=(rawbeatb*(db-(avgdb))*.01);\n' + 'avgvol=avgvol*.99+vol*.05;\n' + 'mtime=mtime+min(avgvol*.5,.25);\n' + 'q2=mtime;\n' + 'q1=beatb;\n' + 'q3=db;\n' + 'q4=60/avgbeatrate;\n' + 'q5=equal(bc%4,0)*beatb;\n' + 'zoom=1;\n' + 'decay=.99;\n' + 'warp=0;\n' + 'wrap=1;\n' + 'ob_r=sin(q2*.01+bass*.01)*.5+.5;\n' + 'ob_g=cos(q2*.001*q4+treb*.01)*.5+.5;\n' + 'ob_b=sin(time*.001*q4)*.5+.5;'),
	'pixel_eqs_str' : ('zoom=1+sin(q2+treb_att*6*rad)*.1;\n' + 'rot=sin(q2*.05*q4+bass_att*3*rad)*.1;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.28,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 1.285751,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 0.999999,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.254861,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.22823,
		ob_size : 0.5,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.970118,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.eo = 0;
m.ez = 0;
m.ea = 0;
m.ez = 1.2;
		return m;
	},
	'frame_eqs' : function(m) {
m.ea = Math.abs(Math.sin((m.time*0.25)));
m.eo = ifcond(below(m.ea, 0.1), rand(3), m.eo);
m.ez = ifcond(below(m.ea, 0.1), (0.5+(rand(10)*0.1)), m.ez);
m.echo_alpha = m.ea;
m.echo_orient = m.eo;
m.echo_zoom = m.ez;
		m.rkeys = ['rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (m.rot+((m.rad*Math.sin((m.time*0.25)))*0.02));
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
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wx = 0;
m.branch = 0;
m.wy = 0;
m.d = 0;
m.wa = 0;
m.sc = 0;
m.wainc = 0;

			m.rkeys = ['wx','wy','d','wa','sc'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.branch = rand(2);
m.wx = ifcond(equal(m.sc, 0), 0.5, m.wx);
m.wy = ifcond(equal(m.sc, 0), 0, m.wy);
m.wx = ifcond(equal(m.sc, 1), 0.5, m.wx);
m.wy = ifcond(equal(m.sc, 1), 0.1, m.wy);
m.d = ifcond(below(m.sc, 2), 0.3, (0.7*m.d));
m.wainc = ifcond(equal(m.branch, 1), (0.2+Math.sin(m.time)), -0.2);
m.wa = ifcond(below(m.sc, 2), (3.1415927*0.5), (m.wa+m.wainc));
m.wx = ifcond(above(m.sc, 2), (m.wx+(Math.cos(m.wa)*m.d)), m.wx);
m.wy = ifcond(above(m.sc, 2), (m.wy+(Math.sin(m.wa)*m.d)), m.wy);
m.sc = ifcond(equal(m.sc, 11), 0, (m.sc+1));
m.a = ifcond(below(m.sc, 2), 0, 0.1);
m.x = m.wx;
m.y = m.wy;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('branch=rand(2);\n' + 'wx=if(equal(sc,0),.5,wx);\n' + 'wy=if(equal(sc,0),0,wy);\n' + 'wx=if(equal(sc,1),.5,wx);\n' + 'wy=if(equal(sc,1),.1,wy);\n' + 'd=if(below(sc,2),.3,.7*d);\n' + 'wainc=if(equal(branch,1),.2+sin(time),-.2);\n' + 'wa=if(below(sc,2),3.1415927*.5,wa+wainc);\n' + 'wx=if(above(sc,2),wx+cos(wa)*d,wx);\n' + 'wy=if(above(sc,2),wy+sin(wa)*d,wy);\n' + 'sc=if(equal(sc,11),0,sc+1);\n' + 'a=if(below(sc,2),0,.1);\n' + 'x=wx;\n' + 'y=wy;'),

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
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wx = 0;
m.branch = 0;
m.wy = 0;
m.d = 0;
m.wa = 0;
m.sc = 0;
m.wainc = 0;

			m.rkeys = ['wx','wy','d','wa','sc'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.branch = rand(2);
m.wx = ifcond(equal(m.sc, 0), 0.5, m.wx);
m.wy = ifcond(equal(m.sc, 0), 1, m.wy);
m.wx = ifcond(equal(m.sc, 1), 0.5, m.wx);
m.wy = ifcond(equal(m.sc, 1), 0.9, m.wy);
m.d = ifcond(below(m.sc, 2), 0.3, (0.7*m.d));
m.wainc = ifcond(equal(m.branch, 1), (0.2+Math.sin(m.time)), -0.2);
m.wa = ifcond(below(m.sc, 2), (3.1415927*1.5), (m.wa+m.wainc));
m.wx = ifcond(above(m.sc, 2), (m.wx+(Math.cos(m.wa)*m.d)), m.wx);
m.wy = ifcond(above(m.sc, 2), (m.wy+(Math.sin(m.wa)*m.d)), m.wy);
m.sc = ifcond(equal(m.sc, 11), 0, (m.sc+1));
m.a = ifcond(below(m.sc, 2), 0, 0.1);
m.x = m.wx;
m.y = m.wy;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('branch=rand(2);\n' + 'wx=if(equal(sc,0),.5,wx);\n' + 'wy=if(equal(sc,0),1,wy);\n' + 'wx=if(equal(sc,1),.5,wx);\n' + 'wy=if(equal(sc,1),.9,wy);\n' + 'd=if(below(sc,2),.3,.7*d);\n' + 'wainc=if(equal(branch,1),.2+sin(time),-.2);\n' + 'wa=if(below(sc,2),3.1415927*1.5,wa+wainc);\n' + 'wx=if(above(sc,2),wx+cos(wa)*d,wx);\n' + 'wy=if(above(sc,2),wy+sin(wa)*d,wy);\n' + 'sc=if(equal(sc,11),0,sc+1);\n' + 'a=if(below(sc,2),0,.1);\n' + 'x=wx;\n' + 'y=wy;'),

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
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wx = 0;
m.branch = 0;
m.wy = 0;
m.d = 0;
m.wa = 0;
m.sc = 0;
m.wainc = 0;

			m.rkeys = ['wx','wy','d','wa','sc'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.branch = rand(2);
m.wx = ifcond(equal(m.sc, 0), 0, m.wx);
m.wy = ifcond(equal(m.sc, 0), 0.5, m.wy);
m.wx = ifcond(equal(m.sc, 1), 0.1, m.wx);
m.wy = ifcond(equal(m.sc, 1), 0.5, m.wy);
m.d = ifcond(below(m.sc, 2), 0.3, (0.7*m.d));
m.wainc = ifcond(equal(m.branch, 1), (0.25+Math.cos(m.time)), -0.25);
m.wa = ifcond(below(m.sc, 2), (3.1415927*2), (m.wa+m.wainc));
m.wx = ifcond(above(m.sc, 2), (m.wx+(Math.cos(m.wa)*m.d)), m.wx);
m.wy = ifcond(above(m.sc, 2), (m.wy+(Math.sin(m.wa)*m.d)), m.wy);
m.sc = ifcond(equal(m.sc, 11), 0, (m.sc+1));
m.a = ifcond(below(m.sc, 2), 0, 0.1);
m.x = m.wx;
m.y = m.wy;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('branch=rand(2);\n' + 'wx=if(equal(sc,0),0,wx);\n' + 'wy=if(equal(sc,0),.5,wy);\n' + 'wx=if(equal(sc,1),.1,wx);\n' + 'wy=if(equal(sc,1),.5,wy);\n' + 'd=if(below(sc,2),.3,.7*d);\n' + 'wainc=if(equal(branch,1),.25+cos(time),-.25);\n' + 'wa=if(below(sc,2),3.1415927*2,wa+wainc);\n' + 'wx=if(above(sc,2),wx+cos(wa)*d,wx);\n' + 'wy=if(above(sc,2),wy+sin(wa)*d,wy);\n' + 'sc=if(equal(sc,11),0,sc+1);\n' + 'a=if(below(sc,2),0,.1);\n' + 'x=wx;\n' + 'y=wy;'),

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
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wx = 0;
m.branch = 0;
m.wy = 0;
m.d = 0;
m.wa = 0;
m.sc = 0;
m.wainc = 0;

			m.rkeys = ['wx','wy','d','wa','sc'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.branch = rand(2);
m.wx = ifcond(equal(m.sc, 0), 1, m.wx);
m.wy = ifcond(equal(m.sc, 0), 0.5, m.wy);
m.wx = ifcond(equal(m.sc, 1), 0.9, m.wx);
m.wy = ifcond(equal(m.sc, 1), 0.5, m.wy);
m.d = ifcond(below(m.sc, 2), 0.3, (0.7*m.d));
m.wainc = ifcond(equal(m.branch, 1), (0.25+Math.cos(m.time)), -0.25);
m.wa = ifcond(below(m.sc, 2), (3.1415927*1), (m.wa+m.wainc));
m.wx = ifcond(above(m.sc, 2), (m.wx+(Math.cos(m.wa)*m.d)), m.wx);
m.wy = ifcond(above(m.sc, 2), (m.wy+(Math.sin(m.wa)*m.d)), m.wy);
m.sc = ifcond(equal(m.sc, 11), 0, (m.sc+1));
m.a = ifcond(below(m.sc, 2), 0, 0.1);
m.x = m.wx;
m.y = m.wy;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('branch=rand(2);\n' + 'wx=if(equal(sc,0),1,wx);\n' + 'wy=if(equal(sc,0),.5,wy);\n' + 'wx=if(equal(sc,1),.9,wx);\n' + 'wy=if(equal(sc,1),.5,wy);\n' + 'd=if(below(sc,2),.3,.7*d);\n' + 'wainc=if(equal(branch,1),.25+cos(time),-.25);\n' + 'wa=if(below(sc,2),3.1415927*1,wa+wainc);\n' + 'wx=if(above(sc,2),wx+cos(wa)*d,wx);\n' + 'wy=if(above(sc,2),wy+sin(wa)*d,wy);\n' + 'sc=if(equal(sc,11),0,sc+1);\n' + 'a=if(below(sc,2),0,.1);\n' + 'x=wx;\n' + 'y=wy;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.5,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.639039,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.468146,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.1);
m.sides = Math.floor(Math.abs((Math.sin((m.time*0.5))*7)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=time*.1;\n' + 'sides=int(abs(sin(time*.5)*7));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.05,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.02743,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.1);
m.r = (0.7+(Math.sin(m.time)*0.3));
m.g = (0.7+(Math.cos(m.time)*0.3));
m.b = (0.7+(Math.sin((m.time+0.12))*0.3));
m.rad = (m.rad+((m.treb_att*m.bass_att)*0.5));
m.x = (0.5+(Math.sin(m.time)*0.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=time*.1;\n' + 'r=.7+(sin(time)*.3);\n' + 'g=.7+(cos(time)*.3);\n' + 'b=.7+(sin(time+.12)*.3);\n' + 'rad=rad+(treb_att*bass_att*.5);\n' + 'x=.5+(sin(time)*.5);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.05,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.02508,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.25);
m.g = (0.7+(Math.sin(m.time)*0.3));
m.b = (0.7+(Math.cos(m.time)*0.3));
m.r = (0.7+(Math.sin((m.time+0.12))*0.3));
m.r2 = (0.7+(Math.sin(m.time)*0.3));
m.g2 = (0.7+(Math.cos(m.time)*0.3));
m.b2 = (0.7+(Math.sin((m.time+0.12))*0.3));
m.rad = (m.rad+((m.treb_att*m.bass_att)*0.5));
m.y = (0.5+(Math.sin(m.time)*0.25));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=time*.25;\n' + 'g=.7+(sin(time)*.3);\n' + 'b=.7+(cos(time)*.3);\n' + 'r=.7+(sin(time+.12)*.3);\n' + 'r2=.7+(sin(time)*.3);\n' + 'g2=.7+(cos(time)*.3);\n' + 'b2=.7+(sin(time+.12)*.3);\n' + 'rad=rad+(treb_att*bass_att*.5);\n' + 'y=.5+(sin(time)*.25);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.1,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.608038,
			additive : 1.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.01,
			r : 1.0,
			border_g : 1.0,
			rad : 2.667173,
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
	'init_eqs_str' : ('ez=1.2;'),
	'frame_eqs_str' : ('ea=abs(sin(time*.25));\n' + 'eo=if(below(ea,.1),rand(3),eo);\n' + 'ez=if(below(ea,.1),.5+(rand(10)*.1),ez);\n' + 'echo_alpha=ea;\n' + 'echo_orient=eo;\n' + 'echo_zoom=ez;'),
	'pixel_eqs_str' : ('rot=rot+(rad*sin(time*.25)*.02);'),
};

return pmap;
});
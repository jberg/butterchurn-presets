define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 31.999994,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 24.000004,
		wave_scale : 0.653091,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.001829,
		ob_r : 0.0,
		sy : 1.008151,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.008148,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 2.003071,
		ob_size : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0018,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.1,
		wave_mystery : -0.48,
		decay : 0.9059,
		wave_a : 1.924157,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 0.0,
		modwavealphastart : 0.8,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.val = 0;
m.zval = 0;
m.maat = 0;
m.zuse = 0;
m.r = 0;
m.t = 0;
m.zoomi = 0;
m.zoomin = 0;
m.decay = 1;
m.beatvol = 1.04;
		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = 1;
m.decay = 0.995;
m.maat = (m.maat+above(m.bass_att, 1.5));
m.maat = (below(m.maat, 16)*m.maat);
m.val = ifcond(above(m.maat, 8), 1, m.val);
m.val = ifcond(above(m.val, 0.6), (m.val*0.99), 0.3);
m.echo_zoom = (m.val+0.7);
m.zoom = 1;
m.ob_size = 0;
m.ob_g = 0;
m.ob_r = 0;
m.ob_b = 0;
m.ob_a = 1;
m.zoomin = (m.bass+((m.zoomin*10)*0.001));
m.zoomi = (above(m.zoomin, 2)+(m.zoomi*0.975));
m.zval = (Math.cos((m.time*0.3))*above(m.zoomi, 2));
m.zuse = ((m.zval*0.05)+1);
m.monitor = m.zoomi;
m.zoom = m.zuse;
m.r = (above(m.bass, 1.3)+(m.r*0.95));
m.t = below(m.r, 5);
m.q1 = ((m.t*m.val)*0.5);
m.mv_dx = ((Math.sin(m.time)*0.5)+0.5);
m.mv_dy = ((Math.cos(m.time)*0.5)+0.5);
m.ob_r = 0;
m.ob_g = 0;
m.ob_b = 0;
m.ib_r = 0;
m.ib_g = 0;
m.ib_b = 0;
m.ib_a = 0.375;
m.ob_a = 0.475;
m.ob_size = (m.bass*0.1);
m.ib_size = (m.treb*0.1);
m.wave_r = 1;
		m.rkeys = ['dy','dx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = ((m.dx-(0.05*Math.sin((m.x*32))))*(Math.cos((m.time*8))*m.q1));
m.dy = ((m.dy-(0.05*Math.sin((m.y*18))))*(Math.sin((m.time*8))*m.q1));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.254862,
			samples : 38.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = 1;
m.g = 1;
m.b = 1;
m.a = 0.1;
		return m;
	},
		'point_eqs' : function(m) {
m.y = m.sample;
m.x = m.value1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=1;\n' + 'g=1;\n' + 'b=1;\n' + 'a=0.1;'),
		'point_eqs_str' : ('y=sample;\n' + 'x=value1;'),

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
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.942039,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.746302,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.val = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = ((Math.sin(m.time)*0.5)+0.5);
m.val = 3;
m.a2 = (m.val*0.33);
m.a = (m.val*0.33);
m.rad = ((Math.cos((m.time*0.3))*0.4)+0.65);
m.x = ((Math.sin((m.time*0.25))*0.25)+0.5);
m.y = ((Math.cos((m.time*0.45))*0.25)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=sin(time)*.5+.5;\n' + 'val=3;\n' + 'a2=val*.33;\n' + 'a=val*.33;\n' + 'rad=cos(time*.3)*.4+0.65;\n' + 'x=sin(time*.25)*.25+.5;\n' + 'y=cos(time*.45)*.25+.5;'),

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
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.942039,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.746302,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.val = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = ((Math.cos((m.time*0.3))*0.5)+0.5);
m.val = 3;
m.a2 = (m.val*0.33);
m.a = (m.val*0.33);
m.rad = ((Math.sin((m.time*0.3))*0.4)+0.65);
m.x = ((Math.cos((m.time*0.25))*0.25)+0.5);
m.y = ((Math.sin((m.time*0.45))*0.25)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=cos(time*.3)*.5+.5;\n' + 'val=3;\n' + 'a2=val*.33;\n' + 'a=val*.33;\n' + 'rad=sin(time*.3)*.4+0.65;\n' + 'x=cos(time*.25)*.25+.5;\n' + 'y=sin(time*.45)*.25+.5;'),

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
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.364564,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 6.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.dist = 0;
m.maat = 0;
m.h2 = 0;
m.vb = 0;
m.vg = 0;
m.vr = 0;

			m.rkeys = ['maat','h2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.h2 = (m.h2+((above(m.treb, 1.32)*0.8)*0.9));
m.vr = ((Math.sin((m.h2*0.8))*0.5)+0.5);
m.vg = ((Math.sin((m.h2*0.5))*0.5)+0.5);
m.vb = ((Math.sin((m.h2*0.1))*0.5)+0.5);
m.g = m.vg;
m.r = m.vr;
m.b = m.vb;
m.g2 = m.g;
m.r2 = m.r;
m.b2 = m.b;
m.dist = (mod(m.frame,100)*0.01);
m.maat = (m.maat+above(m.bass_att, 1.5));
m.maat = (below(m.maat, 16)*m.maat);
m.x = ifcond(below(m.maat, 8), ifcond(below(m.maat, 4), m.dist, (1-m.dist)), m.x);
m.y = ifcond(above(m.maat, 8), ifcond(above(m.maat, 4), m.dist, (1-m.dist)), m.y);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('h2=h2+(above(treb,1.32)*0.8)*.9;\n' + 'vr=sin(h2*.8)*.5+.5;\n' + 'vg=sin(h2*.5)*.5+.5;\n' + 'vb=sin(h2*.1)*.5+.5;\n' + 'g=vg;\n' + 'r=vr;\n' + 'b=vb;\n' + 'g2=g;\n' + 'r2=r;\n' + 'b2=b;\n' + 'dist=(frame%100)*.01;\n' + 'maat=maat+(above(bass_att,1.5));\n' + 'maat=below(maat,16)*maat;\n' + 'x=if(below(maat,8),if(below(maat,4),dist,1-dist),x);\n' + 'y=if(above(maat,8),if(above(maat,4),dist,1-dist),y);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.5,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.5,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.364564,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
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
	'init_eqs_str' : ('decay=1;\n' + 'beatvol=1.04;'),
	'frame_eqs_str' : ('zoom=1;\n' + 'decay=0.995;\n' + 'maat=maat+(above(bass_att,1.5));\n' + 'maat=below(maat,16)*maat;\n' + 'val=if(above(maat,8),1,val);\n' + 'val=if(above(val,0.6),val*.99,0.3);\n' + 'echo_zoom=val+0.7;\n' + 'zoom=1;\n' + 'ob_size=0;\n' + 'ob_g=0;\n' + 'ob_r=0;\n' + 'ob_b=0;\n' + 'ob_a=1;\n' + 'zoomin=bass+(zoomin*10)*.001;\n' + 'zoomi=above(zoomin,2)+zoomi*.975;\n' + 'zval=cos(time*.3)*(above(zoomi,2));\n' + 'zuse=(zval)*.05+1;\n' + 'monitor=zoomi;\n' + 'zoom=zuse;\n' + 'r=above(bass,1.3)+r*.95;\n' + 't=below(r,5);\n' + 'q1=t*val*.5;\n' + 'mv_dx=sin(time)*.5+.5;\n' + 'mv_dy=cos(time)*.5+.5;\n' + 'ob_r=0;\n' + 'ob_g=0;\n' + 'ob_b=0;\n' + 'ib_r=0;\n' + 'ib_g=0;\n' + 'ib_b=0;\n' + 'ib_a=0.375;\n' + 'ob_a=0.475;\n' + 'ob_size=bass*.1;\n' + 'ib_size=treb*.1;\n' + 'wave_r=1;'),
	'pixel_eqs_str' : ('dx=(dx-0.05*sin(x*32))*(cos(time*8)*q1);\n' + 'dy=(dy-0.05*sin(y*18))*(sin(time*8)*q1);'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 1.44,
		wave_scale : 2.850136,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.02,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 1.0,
		mv_b : 0.0,
		echo_zoom : 1.0065,
		ob_size : 0.02,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.925,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 1.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.cc = 0;
m.gg = 0;
m.rr = 0;
m.bos = 0;
m.mt = 0;
m.h = 0;
m.l = 0;
m.zf = 0;
m.s = 0;
m.zm = 0;
m.zp = 0;
m.zq = 0;
m.tos = 0;
m.zt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.bos = m.bass;
m.tos = m.treb;
m.cy = (m.cx+(0.0045*div(div(m.cx,m.cx),div(m.bos,m.tos))));
m.cx = (m.cy+(0.005*div(div(m.cy,m.cy),div(m.bos,m.tos))));
m.rot = (m.time*0.18);
m.dx = Math.sin((m.time*0.2));
m.dy = ((m.bass*0.0009)+(Math.sin((m.time*0.18))*2));
m.decay = 1;
m.s = 1;
m.mt = (m.mt+pow((m.bass+m.mid), 2));
m.h = ((Math.sin((m.mt*0.008))*0.5)+0.5);
m.l = 1;
m.s = 1;
m.cc = (6*m.h);
m.cc = ifcond(below(m.cc, 1), 0, ifcond(below(m.cc, 2), 1, ifcond(below(m.cc, 3), 2, ifcond(below(m.cc, 4), 3, ifcond(below(m.cc, 5), 4, 5)))));
m.zf = ((6*m.h)-m.cc);
m.zm = m.l;
m.zp = (m.l*(1-m.s));
m.zq = (m.l*(1-(m.s*m.zf)));
m.zt = (m.l*(1-(m.s*(1-m.zf))));
m.rr = ifcond(equal(m.cc, 0), m.zm, ifcond(equal(m.cc, 1), m.zq, ifcond(equal(m.cc, 2), m.zp, ifcond(equal(m.cc, 3), m.zp, ifcond(equal(m.cc, 4), m.zt, m.zm)))));
m.gg = ifcond(equal(m.cc, 0), m.zt, ifcond(equal(m.cc, 1), m.zm, ifcond(equal(m.cc, 2), m.zm, ifcond(equal(m.cc, 3), m.zq, ifcond(equal(m.cc, 4), m.zp, m.zp)))));
m.bb = ifcond(equal(m.cc, 0), m.zp, ifcond(equal(m.cc, 1), m.zp, ifcond(equal(m.cc, 2), m.zt, ifcond(equal(m.cc, 3), m.zm, ifcond(equal(m.cc, 4), m.zm, m.zq)))));
m.rr = ifcond(equal(m.s, 0), m.l, m.rr);
m.gg = ifcond(equal(m.s, 0), m.l, m.gg);
m.bb = ifcond(equal(m.s, 0), m.l, m.bb);
m.ob_r = m.rr;
m.ob_g = m.gg;
m.ob_b = m.bb;
m.ib_r = Math.abs((m.rr-0.25));
m.ib_g = Math.abs((m.gg-0.25));
m.ib_b = Math.abs((m.bb-0.25));
m.zoom = 0.905;
m.warp = (0.905*(1-(m.bass*0.01)));
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 2.306716,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.38928,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.5,
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
	'frame_eqs_str' : ('wave_a = 0;\n' + 'bos = bass;\n' + 'tos = treb;\n' + 'cy = cx + (.0045*((cx/cx)/(bos/tos)) );\n' + 'cx = cy + (.005*((cy/cy)/(bos/tos)) );\n' + 'rot = (time*.18);\n' + 'dx = sin(time*.2);\n' + 'dy = (bass*.0009)+sin(time*.18) * 2;\n' + 'decay = 1;\n' + 's=1;\n' + 'mt=mt+pow(bass+mid,2);\n' + 'h=sin(mt*.008)*.5+.5;\n' + 'l=1;\n' + 's=1;\n' + 'cc=(6*h);\n' + 'cc=if(below(cc,1),0,if(below(cc,2),1,if(below(cc,3),2,if(below(cc,4),3,if(below(cc,5),4,5)))));\n' + 'zf=(6*h)-cc;\n' + 'zm=l;\n' + 'zp=l*(1-s);\n' + 'zq=l*(1-s*zf);\n' + 'zt=l*(1-s*(1-zf));\n' + 'rr=if(equal(cc,0),zm,if(equal(cc,1),zq,if(equal(cc,2),zp,if(equal(cc,3),zp,if(equal(cc,4),zt,zm)))));\n' + 'gg=if(equal(cc,0),zt,if(equal(cc,1),zm,if(equal(cc,2),zm,if(equal(cc,3),zq,if(equal(cc,4),zp,zp)))));\n' + 'bb=if(equal(cc,0),zp,if(equal(cc,1),zp,if(equal(cc,2),zt,if(equal(cc,3),zm,if(equal(cc,4),zm,zq)))));\n' + 'rr=if(equal(s,0),l,rr);\n' + 'gg=if(equal(s,0),l,gg);\n' + 'bb=if(equal(s,0),l,bb);\n' + 'ob_r=rr;\n' + 'ob_g=gg;\n' + 'ob_b=bb;\n' + 'ib_r=abs(rr-.25);\n' + 'ib_g=abs(gg-.25);\n' + 'ib_b=abs(bb-.25);\n' + 'zoom = .905;\n' + 'warp = .905 *  (1-(bass*.01));'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
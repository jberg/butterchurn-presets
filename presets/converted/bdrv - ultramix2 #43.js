define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.972,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.005,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.312,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.5,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.kcx = 0;
m.kdy = 0;
m.jcy = 0;
m.kcy = 0;
m.xy = 0;
m.cr1 = 0;
m.jx1 = 0;
m.jwp = 0;
m.cr2 = 0;
m.crr = 0;
m.kx1 = 0;
m.kwp = 0;
m.cqr = 0;
m.crs = 0;
m.ci = 0;
m.mekdx = 0;
m.dx_r = 0;
m.dy_r = 0;
m.crx = 0;
m.jrt = 0;
m.krt = 0;
m.jsx = 0;
m.cr = 0;
m.ksx = 0;
m.jsy = 0;
m.ksy = 0;
m.thresh = 0;
m.jzm = 0;
m.kzm = 0;
m.jdx = 0;
m.cb = 0;
m.kdx = 0;
m.jcx = 0;
m.jdy = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (0.5+(0.5*Math.sin((6*m.time))));
m.wave_g = (0.5+(0.5*Math.sin((4.1*m.time))));
m.wave_b = (-1+(((1-m.wave_r)+1)-m.wave_g));
m.warp = 0;
m.ob_r = (1-Math.abs(m.wave_r));
m.ob_g = (1-Math.abs(m.wave_g));
m.ob_b = (1-Math.abs(m.wave_b));
m.ib_r = Math.abs(m.wave_r);
m.ib_b = Math.abs(m.wave_b);
m.ib_g = Math.abs(m.wave_g);
		m.rkeys = ['sx','sy','dx_r','warp','dy_r','zoom','dx','cx','dy','cy','rot','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.mekdx = m.dx;
m.kdy = m.dy;
m.ksx = m.sx;
m.ksy = m.sy;
m.krt = m.rot;
m.kzm = m.zoom;
m.kcx = m.cx;
m.kcy = m.cy;
m.kwp = m.warp;
m.dx = 0;
m.dy = 0;
m.sx = 1;
m.sy = 1;
m.rot = 0;
m.zoom = 1;
m.cx = 0.5;
m.cy = 0.5;
m.warp = 0;
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.xy = (((above(Math.sin(m.time), 0)*m.x)+(below(Math.sin((1.34*m.time)), 0)*m.y))+(above(m.bass_att, 1.1)*-1));
m.dx = (m.dx+m.dx_r);
m.dy = (m.dy+m.dy_r);
m.sx = (m.sx-Math.abs(((12*m.dx_r)*(m.xy*Math.sin(((m.xy*m.bass_att)*1.25))))));
m.sy = (m.sy-Math.abs(((12*m.dy_r)*(m.xy*Math.sin(((m.xy*m.bass_att)*1.25))))));
m.rot = (m.rot+((22*m.dx_r)*(m.xy*Math.cos(((4*m.xy)*m.treb_att)))));
m.cx = (m.cx+((8*m.dx_r)*(m.xy*Math.sin(((m.xy*m.mid_att)*1.1)))));
m.cy = (m.cy+((8*m.dy_r)*(m.xy*Math.sin(((m.xy*m.mid_att)*1.1)))));
m.cr1 = (1*0.01);
m.cr2 = (99*0.01);
m.crx = (m.cr2-m.cr1);
m.ci = (((1-div(((1-Math.abs((div((-2*(m.x+m.y)),2)+1)))+(1-Math.abs(((-2*(1-div((m.x+(1-m.y)),2)))+1)))),2))*4)-1);
m.cb = 0.25;
m.crs = 2;
m.cr = ((pow((div(Math.sin(((m.ci*6.3)-(m.cb*6.3))),2)+0.5), m.crs)*m.crx)+m.cr1);
m.cqr = ifcond(above(m.ci, (0.25+m.cb)), m.cr, (m.crx+m.cr1));
m.crr = ifcond(below(m.ci, 1.5), m.cqr, (m.crx+m.cr1));
m.jx1 = m.crr;
m.kx1 = (1-m.crr);
m.jdx = m.dx;
m.jdy = m.dy;
m.jsx = m.sx;
m.jsy = m.sy;
m.jrt = m.rot;
m.jzm = m.zoom;
m.jcx = m.cx;
m.jcy = m.cy;
m.jwp = m.warp;
m.dx = ((m.jx1*m.jdx)+(m.kx1*m.kdx));
m.dy = ((m.jx1*m.jdy)+(m.kx1*m.kdy));
m.sx = ((m.jx1*m.jsx)+(m.kx1*m.ksx));
m.sy = ((m.jx1*m.jsy)+(m.kx1*m.ksy));
m.rot = ((m.jx1*m.jrt)+(m.kx1*m.krt));
m.zoom = ((m.jx1*m.jzm)+(m.kx1*m.kzm));
m.cx = ((m.jx1*m.jcx)+(m.kx1*m.kcx));
m.cy = ((m.jx1*m.jcy)+(m.kx1*m.kcy));
m.warp = ((m.jx1*m.jwp)+(m.kx1*m.kwp));
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
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
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
			y : 1.8,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
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
			g : 0.0,
			textured : 1.0,
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
			y : 1.8,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
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
			g : 0.0,
			textured : 1.0,
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
			y : 1.8,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
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
			num_inst : 1.0,
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
	'frame_eqs_str' : ('wave_r = 0.5 + 0.5*sin(6*time);\n' + 'wave_g = 0.5 + 0.5*sin(4.1*time);\n' + 'wave_b = -1 + (1-wave_r + 1-wave_g);\n' + 'warp = 0;\n' + 'ob_r = 1-abs(wave_r);\n' + 'ob_g = 1-abs(wave_g);\n' + 'ob_b = 1-abs(wave_b);\n' + 'ib_r = abs(wave_r);\n' + 'ib_b = abs(wave_b);\n' + 'ib_g = abs(wave_g);'),
	'pixel_eqs_str' : ('mekdx=dx;\n' + 'kdy=dy;\n' + 'ksx=sx;\n' + 'ksy=sy;\n' + 'krt=rot;\n' + 'kzm=zoom;\n' + 'kcx=cx;\n' + 'kcy=cy;\n' + 'kwp=warp;\n' + 'dx=0;\n' + 'dy=0;\n' + 'sx=1;\n' + 'sy=1;\n' + 'rot=0;\n' + 'zoom=1;\n' + 'cx=.5;\n' + 'cy=.5;\n' + 'warp=0;\n' + 'thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'xy = above(sin(time),0)*x + below(sin(1.34*time),0)*y + above((bass_att),1.1)*-1;\n' + 'dx = dx + dx_r;\n' + 'dy = dy + dy_r;\n' + 'sx = sx - abs(12*dx_r*(xy*sin(xy*bass_att*1.25)));\n' + 'sy = sy - abs(12*dy_r*(xy*sin(xy*bass_att*1.25)));\n' + 'rot = rot + 22*dx_r*(xy*cos(4*xy*treb_att));\n' + 'cx = cx + 8*dx_r*(xy*sin(xy*mid_att*1.1));\n' + 'cy = cy + 8*dy_r*(xy*sin(xy*mid_att*1.1));\n' + 'cr1=1*.01;\n' + 'cr2=99*.01;\n' + 'crx=cr2-cr1;\n' + 'ci=(1-(1-abs(-2*(x+y)/2+1)+(1-abs(-2*(1-(x+(1-y))/2)+1)))/2)*4-1;\n' + 'cb=.25  ;\n' + 'crs=2;\n' + 'cr=pow(sin(ci*6.3-(cb*6.3))/2+.5,crs)*crx+cr1;\n' + 'cqr=if( above (ci,.25+cb),cr,crx+cr1);\n' + 'crr=if( below(ci,1.5),cqr,crx+cr1);\n' + 'jx1=crr;\n' + 'kx1=1-crr;\n' + 'jdx=dx;\n' + 'jdy=dy;\n' + 'jsx=sx;\n' + 'jsy=sy;\n' + 'jrt=rot;\n' + 'jzm=zoom;\n' + 'jcx=cx;\n' + 'jcy=cy;\n' + 'jwp=warp;\n' + 'dx=(jx1*jdx+kx1*kdx);\n' + 'dy=(jx1*jdy+kx1*kdy);\n' + 'sx=(jx1*jsx+kx1*ksx);\n' + 'sy=(jx1*jsy+kx1*ksy);\n' + 'rot=(jx1*jrt+kx1*krt);\n' + 'zoom=(jx1*jzm+kx1*kzm);\n' + 'cx=(jx1*jcx+kx1*kcx);\n' + 'cy=(jx1*jcy+kx1*kcy);\n' + 'warp=(jx1*jwp+kx1*kwp);'),
};

return pmap;
});
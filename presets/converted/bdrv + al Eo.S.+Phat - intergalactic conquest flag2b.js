define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 12.799995,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.600006,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
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
		ib_r : 1.0,
		mv_b : 0.21,
		echo_zoom : 0.498313,
		ob_size : 0.08,
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
		nwrapmode_x : 1.0,
		cx : 0.5,
		dy : -0.32,
		nwrapmode_y : 1.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		nechowrap_x : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		nechowrap_y : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : -1.0,
		decay : 0.95,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.mod = 0;
m.q4 = 0;
m.q5 = 0;
m.sw = 0;
m.q6 = 0;
m.ag = 0;
m.q7 = 0;
m.q8 = 0;
m.dx_r = 0;
m.dy_r = 0;
m.it = 0;
m.mx = 0;
m.my = 0;
m.radd = 0;
m.rd = 0;
m.star = 0;
m.musictime = 0;
m.vol = 0;
m.zm = 0;
m.radm = 0;
m.thresh = 0;
m.zoom = 1;
m.xpos = 0;
m.ypos = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 1;
m.vol = m.vol;
m.mv_r = (0.5+(0.4*Math.sin((m.time*1.324))));
m.mv_g = (0.5+(0.4*Math.cos((m.time*1.371))));
m.zoom = 1;
m.musictime = (m.musictime+m.vol);
m.q4 = (Math.sin((m.musictime*0.02))*0.3);
m.q5 = (Math.sin((m.musictime*0.01))*0.3);
m.dx = (Math.sin((m.musictime*0.1))*0.01);
m.dy = (Math.cos((m.musictime*0.069))*0.01);
m.monitor = m.rot;
		m.rkeys = ['dx_r','dy_r','zoom','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.radd = (m.rad-(m.time*0.0000000010));
m.q1 = (0.4*m.rad);
m.cy = (0.5-m.q5);
m.rd = sqrt((sqr((((m.x-0.5)-m.q4)*2))+sqr((((m.y-0.5)+m.q5)*1.5))));
m.zm = 1;
m.ag = Math.atan(div(((m.y-0.5)+m.q5),((m.x-0.5)-m.q4)));
m.star = div((Math.sin(((m.ag*6)+m.time))*((2-m.rd)-m.ag)),5);
m.zm = (m.zm+div(m.star,10));
m.sx = m.zm;
m.sy = m.zm;
m.q1 = (0.4*m.x);
m.q2 = (0.3*m.x);
m.q3 = below(m.x, ((0.1*m.q5)+0.3));
m.q7 = ifcond(m.q3, 0, (10+Math.floor((1*m.x))));
m.q8 = ifcond(m.q3, 0, (10+Math.floor((1*m.x))));
m.cx = ifcond(m.q3, 0.5, ((bitand(0,((m.x*m.q7)-m.q1))*div(1,m.q7))+(0.1*m.q1)));
m.cy = ifcond(m.q3, 0.5, ((bitand(0,((m.y*m.q8)-m.q2))*div(1,m.q8))+(0.1*m.q2)));
m.rot = ifcond(m.q3, ((2*m.q6)*m.x), (((0.1*m.x)+(0.1*m.bass))+((0.00*m.cx)*m.cy)));
m.zoom = ifcond(m.q3, ((0.3+(0.1*m.q5))+(0.5*m.q4)), m.zoom);
m.rot = (Math.sin((((m.q2*0.5)*m.q4)+((m.rad*10)*Math.sin((m.q2*0.1)))))*0.01);
m.it = (0.3*Math.sin((m.time*0.2)));
m.radm = (m.rad*0.5);
m.rot = div((0.02*Math.sin(((m.radm+m.it)*30))),((m.rad+0.1)*(((Math.sin(m.time)*0.4)+0.5)*20)));
m.mod = Math.sin((m.ang*5));
m.mod = (m.mod*m.mod);
m.zoom = (0.99-Math.abs((0.01*m.mod)));
m.mx = ((m.x-0.5)*1.33);
m.my = (m.y-0.5);
m.sw = ((above(m.rad, 0.4)+below(m.rad, 0.04))+(((above(m.rad, 0.3)*below(m.rad, 0.4))*(m.rad-0.3))*5));
m.sw = ((above(m.rad, 0.3)*(m.rad-0.3))*5);
m.zoom = (1-(0.1*m.sw));
m.rot = (0+(0.2*m.sw));
m.dx = ((((1-m.sw)*Math.sin(m.ang))*0.001)*0.75);
m.dy = (((1-m.sw)*Math.cos(m.ang))*0.001);
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.zoom = (m.zoom+0.01);
m.zoom = (m.zoom+((0.05+(0.04*Math.sin(m.time)))*(0.2*Math.sin((m.ang*m.time)))));
m.rot = (m.rot+(0.01*(0.5*Math.cos((((m.ang*5)*m.bass)*m.time)))));
m.dx = (m.dx+((0.1*above(m.rad, 0.25))*m.dx_r));
m.dy = (m.dy+((0.1*above(m.rad, 0.25))*m.dy_r));
m.zoom = ifcond(m.q3, ((0.3+(0.1*m.q5))+(0.5*m.q4)), m.zoom);
m.rot = (Math.sin((((m.q2*0.5)*m.q4)+((m.rad*10)*Math.sin((m.q2*0.1)))))*0.01);
m.sx = -1.2;
m.rot = 11;
m.dx = (m.dx-(0.05*Math.sin(((m.time*1.35)+(((m.x*2)-1)*18)))));
m.dy = (m.dy-(0.05*Math.sin(((m.time*1.79)+(((m.y*2)-1)*9)))));
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
			bdrawback : 0.0,
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
			bdrawback : 0.0,
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
			bdrawback : 0.0,
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
			bdrawback : 0.0,
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
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.0,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
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
m.q4 = 0;
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+m.q4);
m.y = (0.5+m.q5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=.5+q4;\n' + 'y=.5+q5;'),

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
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.819541,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.0,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 1.0,
			x_wrap_mode : 0.0,
			a2 : 1.0,
			y_wrap_mode : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.011202,
			x : 0.5,
			y : 1.8,
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
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.408389,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.0,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.221672,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 34.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+m.q4);
m.y = (0.5+m.q5);
m.rad = Math.sin(m.time);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=.5+q4;\n' + 'y=.5+q5;\n' + 'rad=sin(time);'),

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
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.1,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
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
	'init_eqs_str' : ('zoom=1;\n' + 'xpos=0;\n' + 'ypos=0;'),
	'frame_eqs_str' : ('decay=1;\n' + 'vol=vol;\n' + 'mv_r = 0.5 + 0.4*sin(time*1.324);\n' + 'mv_g = 0.5 + 0.4*cos(time*1.371);\n' + 'zoom=1;\n' + 'musictime=musictime+vol;\n' + 'q4=sin(musictime*0.02)*0.3;\n' + 'q5=sin(musictime*0.01)*0.3;\n' + 'dx=sin(musictime*0.1)*0.01;\n' + 'dy=cos(musictime*0.069)*0.01;\n' + 'monitor=rot;'),
	'pixel_eqs_str' : ('radd=rad-(time*0.0000000010);\n' + 'q1 = 0.4*rad;\n' + 'cy=0.5-q5;\n' + 'rd=sqrt( sqr( (x-0.5-q4)*2) + sqr( (y-0.5+q5)*1.5 ) );\n' + 'zm=1;\n' + 'ag=atan( (y-0.5+q5)/(x-0.5-q4) );\n' + 'star=sin(ag*6+time)*((2-rd)-ag)/5;\n' + 'zm=zm+star/10;\n' + 'sx=zm;\n' + 'sy=zm;\n' + 'q1 = 0.4*x;\n' + 'q2= (0.3*x);\n' + 'q3  = below(x,0.1*q5+ 0.3);\n' + 'q7 =if(q3,0,10 + int(1*(x)));\n' + 'q8 =if(q3,0,10 + int(1*(x)));\n' + 'cx =if(q3,0.5,(0&(x*q7-q1))*(1/q7)+0.1*q1);\n' + 'cy =if(q3,0.5,(0&(y*q8-q2))*(1/q8)+0.1*q2);\n' + 'rot = if(q3,2*q6*x,0.1*x+ 0.1*bass+0.00*cx*cy);\n' + 'zoom = if(q3,0.3+0.1*q5+ 0.5*q4,zoom);\n' + 'rot=sin(q2*.5*q4+rad*10*sin(q2*.1))*.01;\n' + 'it = 0.3*sin(time*0.2);\n' + 'radm = rad*0.5;\n' + 'rot = 0.02*sin((radm+it)*30)/((rad+0.1)*((sin(time)*0.4+0.5)*20));\n' + 'mod = sin(ang*5);\n' + 'mod = mod*mod;\n' + 'zoom = .99 - abs(0.01*mod);\n' + 'mx = (x-.5)*1.33;\n' + 'my = y - .5;\n' + 'sw = above(rad,.4) + below(rad,.04) + above(rad,.3)*below(rad,.4)*(rad-.3)*5;\n' + 'sw = above(rad,.3)*(rad-.3)*5;\n' + 'zoom = 1 - .1*sw;\n' + 'rot = 0 + .2*sw;\n' + 'dx = (1-sw)*sin(ang)*.001*.75;\n' + 'dy = (1-sw)*cos(ang)*.001;\n' + 'thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'zoom = zoom + 0.01;\n' + 'zoom = zoom + (0.05 + 0.04*sin(time))*(0.2*sin(ang*time));\n' + 'rot = rot + 0.01*(0.5*cos(ang*5*bass*time));\n' + 'dx = dx + 0.1*above(rad,0.25)*dx_r;\n' + 'dy = dy + 0.1*above(rad,0.25)*dy_r;\n' + 'zoom = if(q3,0.3+0.1*q5+ 0.5*q4,zoom);\n' + 'rot=sin(q2*.5*q4+rad*10*sin(q2*.1))*.01;\n' + 'sx=-1.2;\n' + 'rot=11;\n' + 'dx=dx-0.05*sin(time*1.35+(x*2-1)*18);\n' + 'dy=dy-0.05*sin(time*1.79+(y*2-1)*9);'),
};

return pmap;
});
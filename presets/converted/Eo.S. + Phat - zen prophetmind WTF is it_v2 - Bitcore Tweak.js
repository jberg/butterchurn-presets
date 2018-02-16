define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 6.4,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 43.199997,
		wave_scale : 0.01,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.03,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.999998,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.65,
		ib_r : 0.0,
		mv_b : 0.71,
		echo_zoom : 0.999996,
		ob_size : 0.015,
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
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.8,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q4 = 0;
m.q5 = 0;
m.rd = 0;
m.musictime = 0;
m.vol = 0;
m.zm = 0;
m.ypos = 0;
m.xpos = 0;
m.orb = 0;
m.zoom = 1;
m.xpos = 0;
m.ypos = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.985;
m.vol = ((4*m.bass)*(1.3+(m.mid*m.treb)));
m.mv_r = (0.5+(0.4*Math.sin((m.time*1.324))));
m.mv_g = (0.5+(0.4*Math.cos((m.time*1.371))));
m.q1 = m.ypos;
m.q2 = m.xpos;
m.wave_a = 0;
m.zoom = 0.91;
m.musictime = (m.musictime+(m.vol*0.5));
m.q4 = (Math.sin((m.musictime*0.02))*0.3);
m.q5 = (Math.sin((m.musictime*0.01))*0.3);
m.dx = (Math.sin((m.musictime*0.1))*0.01);
m.dy = (Math.cos((m.musictime*0.069))*0.01);
m.monitor = m.rot;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rd = sqrt((sqr((((m.x-0.5)-m.q4)*1.7))+sqr((((m.y-0.5)+m.q5)*1.2))));
m.cx = (0.5+m.q4);
m.cy = (0.5-m.q5);
m.zm = ((-5.5*Math.log((sqrt(2)-m.rd)))-0.24);
m.zm = (Math.max(Math.abs(m.zm), 0.99)*sign(m.zm));
m.orb = below(m.rd, 0.4);
m.zm = ((m.zm*((1-m.orb)+(((m.rd*m.rd)*m.rd)*1.52)))+(m.orb*(1-(((m.rd*m.rd)*m.rd)*1.52))));
m.sx = m.zm;
m.sy = m.zm;
m.sx = 1.06;
m.sy = 1.06;
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
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;
m.scale1 = 0;
m.scale2 = 0;
m.scale3 = 0;
m.scale = 0;
m.flip = 0;
m.yp = 0;
m.y1 = 0;
m.xp = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.flip = (m.flip+1);
m.flip = ifcond(above(m.flip, 1), 0, m.flip);
m.xp = Math.sin((m.sample*6.283));
m.yp = Math.cos((m.sample*6.283));
m.scale1 = Math.sin(((m.sample*6.283)*3));
m.scale2 = Math.sin(((m.sample*6.283)*9));
m.scale3 = Math.sin(((m.sample*6.283)*5));
m.scale = ((m.scale1+(m.scale2*0.7))+(m.scale3*0.4));
m.scale = (m.scale*0.5);
m.xp = (m.xp*m.scale);
m.yp = (m.yp*m.scale);
m.x1 = ((m.xp*0.25)+0.5);
m.y1 = (((m.yp*0.25)*1.333)+0.5);
m.x2 = (0.5+m.q4);
m.y2 = (0.5+m.q5);
m.x = ((m.x1*m.flip)+(m.x2*(1-m.flip)));
m.y = ((m.y1*m.flip)+(m.y2*(1-m.flip)));
m.a = (m.flip*0.05);
m.r = ((Math.sin(m.time)*0.5)+0.5);
m.g = ((Math.sin((m.time+2.1))*0.5)+0.5);
m.b = ((Math.sin((m.time+4.2))*0.5)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('flip=flip+1;\n' + 'flip=if(above(flip,1),0,flip);\n' + 'xp=sin(sample*6.283);\n' + 'yp=cos(sample*6.283);\n' + 'scale1=sin(sample*6.283*3);\n' + 'scale2=sin(sample*6.283*9);\n' + 'scale3=sin(sample*6.283*5);\n' + 'scale=scale1+scale2*0.7+scale3*0.4;\n' + 'scale=scale*0.5;\n' + 'xp=xp*scale;\n' + 'yp=yp*scale;\n' + 'x1=xp*0.25 +0.5;\n' + 'y1=yp*0.25*1.333 + 0.5;\n' + 'x2=0.5+q4;\n' + 'y2=0.5+q5;\n' + 'x=x1*flip + x2*(1-flip);\n' + 'y=y1*flip + y2*(1-flip);\n' + 'a=flip*0.05;\n' + 'r=sin(time)*0.5+0.5;\n' + 'g=sin(time+2.1)*0.5+0.5;\n' + 'b=sin(time+4.2)*0.5+0.5;'),

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
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;
m.scale1 = 0;
m.scale2 = 0;
m.scale3 = 0;
m.scale = 0;
m.flip = 0;
m.yp = 0;
m.y1 = 0;
m.xp = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.flip = (m.flip+1);
m.flip = ifcond(above(m.flip, 1), 0, m.flip);
m.xp = Math.sin((m.sample*6.283));
m.yp = Math.cos((m.sample*6.283));
m.scale1 = Math.sin((((m.sample*6.283)*3)+(m.time*0.2)));
m.scale2 = Math.sin((((m.sample*6.283)*9)+m.time));
m.scale3 = Math.sin((((m.sample*6.283)*5)-m.time));
m.scale = ((m.scale1+(m.scale2*0.7))+(m.scale3*0.4));
m.scale = (m.scale*0.5);
m.xp = (m.xp*m.scale);
m.yp = (m.yp*m.scale);
m.x1 = ((m.xp*0.25)+0.5);
m.y1 = (((m.yp*0.25)*1.333)+0.5);
m.x2 = (0.5+m.q4);
m.y2 = (0.5+m.q5);
m.x = ((m.x1*m.flip)+(m.x2*(1-m.flip)));
m.y = ((m.y1*m.flip)+(m.y2*(1-m.flip)));
m.a = (m.flip*0.05);
m.r = ((Math.sin(m.time)*0.5)+0.5);
m.g = ((Math.sin((m.time+2.1))*0.5)+0.5);
m.b = ((Math.sin((m.time+4.2))*0.5)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('flip=flip+1;\n' + 'flip=if(above(flip,1),0,flip);\n' + 'xp=sin(sample*6.283);\n' + 'yp=cos(sample*6.283);\n' + 'scale1=sin(sample*6.283*3+time*0.2);\n' + 'scale2=sin(sample*6.283*9+time);\n' + 'scale3=sin(sample*6.283*5-time);\n' + 'scale=scale1+scale2*0.7+scale3*0.4;\n' + 'scale=scale*0.5;\n' + 'xp=xp*scale;\n' + 'yp=yp*scale;\n' + 'x1=xp*0.25 +0.5;\n' + 'y1=yp*0.25*1.333 + 0.5;\n' + 'x2=0.5+q4;\n' + 'y2=0.5+q5;\n' + 'x=x1*flip + x2*(1-flip);\n' + 'y=y1*flip + y2*(1-flip);\n' + 'a=flip*0.05;\n' + 'r=sin(time)*0.5+0.5;\n' + 'g=sin(time+2.1)*0.5+0.5;\n' + 'b=sin(time+4.2)*0.5+0.5;'),

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
			enabled : 0.0,
			b : 1.0,
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
			a2 : 0.0,
			r : 0.8,
			border_g : 1.0,
			rad : 0.221671,
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
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.819541,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.444842,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
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
m.x = (0.5+m.q4);
m.y = (0.5+m.q5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=0.01;\n' + 'x=.5+q4;\n' + 'y=.5+q5;'),

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
	'init_eqs_str' : ('zoom=1;\n' + 'xpos=0;\n' + 'ypos=0;'),
	'frame_eqs_str' : ('decay=0.985;\n' + 'vol=(4*bass)*(1.3+mid*treb);\n' + 'mv_r = 0.5 + 0.4*sin(time*1.324);\n' + 'mv_g = 0.5 + 0.4*cos(time*1.371);\n' + 'q1=ypos;\n' + 'q2=xpos;\n' + 'wave_a = 0;\n' + 'zoom=.91;\n' + 'musictime=musictime+vol*0.5;\n' + 'q4=sin(musictime*0.02)*0.3;\n' + 'q5=sin(musictime*0.01)*0.3;\n' + 'dx=sin(musictime*0.1)*0.01;\n' + 'dy=cos(musictime*0.069)*0.01;\n' + 'monitor=rot;'),
	'pixel_eqs_str' : ('rd=sqrt( sqr( (x-0.5-q4)*1.7) + sqr( (y-0.5+q5)*1.2 ) );\n' + 'cx=0.5+q4;\n' + 'cy=0.5-q5;\n' + 'zm =-5.5*log(sqrt(2)-rd) -0.24;\n' + 'zm = max(abs(zm),.99) * sign(zm);\n' + 'orb=below(rd,0.4);\n' + 'zm=zm*((1-orb)+rd*rd*rd*1.52) + orb*(1-rd*rd*rd*1.52);\n' + 'sx=zm;\n' + 'sy=zm;\n' + 'sx=1.06;\n' + 'sy=1.06;'),
};

return pmap;
});
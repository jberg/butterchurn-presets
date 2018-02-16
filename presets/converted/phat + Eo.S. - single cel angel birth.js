define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.625316,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 0.9999,
		ob_r : 0.0,
		sy : 1.0018,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 1.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 0.9,
		echo_zoom : 1.001825,
		ob_size : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 0.010284,
		wave_dots : 0.0,
		mv_g : 0.44,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.005,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.7,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.98,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.8,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.3,
		mv_r : 0.39,
		rating : 0.0,
		modwavealphastart : 0.88,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {

m.mv_x = 64;
m.mv_y = 48;
m.nut = 0;
m.stp = 0;
m.stq = 0;
m.rtp = 0;
m.rtq = 0;
m.wvr = 0;
m.decay = 0;
m.dcsp = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.98;
m.dx = 0;
m.dy = 0;
m.sx = 1.000001;
m.sy = 0.999999;
m.mv_r = (0.360+(((Math.cos(div(m.time,5))*0.3)+(0.5*0.5))*0.1));
m.mv_g = (0.390+(((Math.sin(div(m.time,7))*0.3)+(0.5*0.5))*0.1));
m.mv_b = (0.500+((Math.sin((div(m.time,7)+0.9))+(0.5*0.5))*0.1));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1+0.001);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.7,
			scaling : 100.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.9,
			thick : 1.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {
m.bmod = 0;
m.scale2 = 0;
m.scale = 0;
m.rmod = 0;
m.adv = 0;
m.yp = 0;
m.xp = 0;
m.waver = 0;
m.gmod = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.adv = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.adv = (m.adv+((m.bass*m.bass)*0.005));
m.t1 = (Math.sin(m.adv)*0.3);
m.t2 = (Math.cos(m.adv)*0.3);
m.t3 = m.adv;
		return m;
	},
		'point_eqs' : function(m) {
m.waver = (Math.sin(((m.sample*6.28)*16))*0.2);
m.xp = Math.sin(((m.sample*6.28)+m.waver));
m.yp = Math.cos(((m.sample*6.28)+m.waver));
m.scale = Math.sin((((m.sample*6.28)*3)-(m.t3*3)));
m.scale2 = ((Math.sin((((m.sample*6.28)*5)-(m.t3*2.9)))*0.5)+0.5);
m.xp = ((m.xp*m.scale)*m.scale2);
m.yp = ((m.yp*m.scale)*m.scale2);
m.x = (((m.xp*0.4)*0.7)+0.5);
m.y = (((m.yp*0.5)*0.7)+0.5);
m.rmod = ((Math.sin((m.time*0.2))*0.5)+0.5);
m.rmod = (m.rmod*m.rmod);
m.gmod = ((Math.sin(((m.time*0.2)+2.1))*0.5)+0.5);
m.gmod = (m.gmod*m.gmod);
m.bmod = ((Math.sin(((m.time*0.2)+4.2))*0.5)+0.5);
m.bmod = (m.bmod*m.bmod);
m.r = m.rmod;
m.g = m.gmod;
m.b = m.bmod;
		return m;
	},
		'init_eqs_str' : ('adv=0;'),
		'frame_eqs_str' : ('adv=adv+(bass*bass)*0.005;\n' + 't1=sin(adv)*0.3;\n' + 't2=cos(adv)*0.3;\n' + 't3=adv;'),
		'point_eqs_str' : ('waver=sin(sample*6.28*16)*0.2;\n' + 'xp=sin(sample*6.28+waver);\n' + 'yp=cos(sample*6.28+waver);\n' + 'scale=sin(sample*6.28*3 - t3*3);\n' + 'scale2=sin(sample*6.28*5 - t3*2.9)*0.5 + 0.5;\n' + 'xp=xp*scale*scale2;\n' + 'yp=yp*scale*scale2;\n' + 'x=xp*0.4*0.7 + 0.5;\n' + 'y=yp*0.5*0.7 + 0.5;\n' + 'rmod=sin(time*0.2)*0.5+0.5;\n' + 'rmod=rmod*rmod;\n' + 'gmod=sin(time*0.2+2.1)*0.5+0.5;\n' + 'gmod=gmod*gmod;\n' + 'bmod=sin(time*0.2+4.2)*0.5+0.5;\n' + 'bmod=bmod*bmod;\n' + 'r=rmod;\n' + 'g=gmod;\n' + 'b=bmod;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 81.954445,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.bmod = 0;
m.scale2 = 0;
m.scale = 0;
m.rmod = 0;
m.adv = 0;
m.yp = 0;
m.xp = 0;
m.waver = 0;
m.gmod = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.adv = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.adv = (m.adv+((m.bass*m.bass)*0.005));
m.t1 = (Math.sin(m.adv)*0.3);
m.t2 = (Math.cos(m.adv)*0.3);
m.t3 = m.adv;
		return m;
	},
		'point_eqs' : function(m) {
m.waver = (Math.sin(((m.sample*6.28)*16))*0.2);
m.xp = Math.sin(((m.sample*6.28)+m.waver));
m.yp = Math.cos(((m.sample*6.28)+m.waver));
m.scale = Math.sin((((m.sample*6.28)*3)-(m.t3*3)));
m.scale2 = ((Math.sin((((m.sample*6.28)*5)-(m.t3*2.9)))*0.5)+0.5);
m.xp = ((m.xp*m.scale)*m.scale2);
m.yp = ((m.yp*m.scale)*m.scale2);
m.x = (((-m.xp*0.4)*0.7)+0.5);
m.y = (((m.yp*0.5)*0.7)+0.5);
m.rmod = ((Math.sin((m.time*0.2))*0.5)+0.5);
m.rmod = (m.rmod*m.rmod);
m.gmod = ((Math.sin(((m.time*0.2)+2.1))*0.5)+0.5);
m.gmod = (m.gmod*m.gmod);
m.bmod = ((Math.sin(((m.time*0.2)+4.2))*0.5)+0.5);
m.bmod = (m.bmod*m.bmod);
m.r = m.rmod;
m.g = m.gmod;
m.b = m.bmod;
		return m;
	},
		'init_eqs_str' : ('adv=0;'),
		'frame_eqs_str' : ('adv=adv+(bass*bass)*0.005;\n' + 't1=sin(adv)*0.3;\n' + 't2=cos(adv)*0.3;\n' + 't3=adv;'),
		'point_eqs_str' : ('waver=sin(sample*6.28*16)*0.2;\n' + 'xp=sin(sample*6.28+waver);\n' + 'yp=cos(sample*6.28+waver);\n' + 'scale=sin(sample*6.28*3 - t3*3);\n' + 'scale2=sin(sample*6.28*5 - t3*2.9)*0.5 + 0.5;\n' + 'xp=xp*scale*scale2;\n' + 'yp=yp*scale*scale2;\n' + 'x=-xp*0.4*0.7 + 0.5;\n' + 'y=yp*0.5*0.7 + 0.5;\n' + 'rmod=sin(time*0.2)*0.5+0.5;\n' + 'rmod=rmod*rmod;\n' + 'gmod=sin(time*0.2+2.1)*0.5+0.5;\n' + 'gmod=gmod*gmod;\n' + 'bmod=sin(time*0.2+4.2)*0.5+0.5;\n' + 'bmod=bmod*bmod;\n' + 'r=rmod;\n' + 'g=gmod;\n' + 'b=bmod;'),

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
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.628319,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.778288,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.69,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.81,
			rad : 0.972354,
			x : 0.5,
			y : 0.5,
			ang : 0.1884,
			sides : 16.0,
			border_r : 0.59,
			},
		'init_eqs' : function(m) {
m.bmod = 0;
m.rmod = 0;
m.adv = 0;
m.gmod = 0;

			m.rkeys = ['adv'];
			return m;
		},
		'frame_eqs' : function(m) {
m.adv = (m.adv+(((m.bass*m.bass)*m.bass)*0.01));
m.x = (0.5-((Math.cos((m.y+m.bass_att))*0.005)*m.treb_att));
m.y = (0.5-(((Math.sin((m.x+(m.bass_att*5)))*0.005)*m.rad)*m.treb_att));
m.x = (m.x+(Math.sin((m.adv*0.5))*0.15));
m.y = (m.y+(Math.cos(m.adv)*0.05));
m.ang = (0.65-(Math.sin((m.adv*0.5))*0.65));
m.rmod = ((Math.sin((m.time*0.2))*0.5)+0.5);
m.gmod = ((Math.sin(((m.time*0.2)+2.1))*0.5)+0.5);
m.bmod = ((Math.sin(((m.time*0.2)+4.2))*0.5)+0.5);
m.r = (0.9+(m.rmod*0.1));
m.g = (0.9+(m.gmod*0.1));
m.b = (0.9+(m.bmod*0.1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('adv=adv+bass*bass*bass*0.01;\n' + 'x=0.5- (cos(y+bass_att )*0.005)*treb_att;\n' + 'y=0.5- (sin(x+bass_att*5 )*0.005*rad)*treb_att;\n' + 'x=x+sin(adv*0.5)*0.15;\n' + 'y=y+cos(adv)*0.05;\n' + 'ang=0.65 - sin(adv*0.5)*0.65;\n' + 'rmod=sin(time*0.2)*0.5+0.5;\n' + 'gmod=sin(time*0.2+2.1)*0.5+0.5;\n' + 'bmod=sin(time*0.2+4.2)*0.5+0.5;\n' + 'r=0.9 + rmod*0.1;\n' + 'g=0.9 + gmod*0.1;\n' + 'b=0.9 + bmod*0.1;'),

		},
		{
		'baseVals' : {
			r2 : 0.7,
			a : 0.4,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.251327,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.2,
			tex_zoom : 1.905855,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.6,
			a2 : 0.1,
			r : 0.0,
			border_g : 1.0,
			rad : 0.414899,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 0.5,
			},
		'init_eqs' : function(m) {
m.bmod = 0;
m.rmod = 0;
m.adv = 0;
m.gmod = 0;

			m.rkeys = ['adv'];
			return m;
		},
		'frame_eqs' : function(m) {
m.adv = (m.adv+((m.bass*m.bass)*0.03));
m.x = ((Math.sin(m.adv)*0.5)+0.5);
m.y = ((Math.cos(m.adv)*0.5)+0.5);
m.r = m.bass_att;
m.r2 = m.bass_att;
m.rmod = ((Math.sin((m.time*0.2))*0.5)+0.5);
m.gmod = ((Math.sin(((m.time*0.2)+2.1))*0.5)+0.5);
m.bmod = ((Math.sin(((m.time*0.2)+4.2))*0.5)+0.5);
m.b2 = (0.2+(m.rmod*0.7));
m.r2 = (0.2+(m.gmod*0.7));
m.g2 = (0.2+(m.bmod*0.7));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('adv=adv+(bass*bass)*0.03;\n' + 'x=sin(adv)*0.5+0.5;\n' + 'y=cos(adv)*0.5+0.5;\n' + 'r=bass_att;\n' + 'r2=bass_att;\n' + 'rmod=sin(time*0.2)*0.5+0.5;\n' + 'gmod=sin(time*0.2+2.1)*0.5+0.5;\n' + 'bmod=sin(time*0.2+4.2)*0.5+0.5;\n' + 'b2=0.2 + rmod*0.7;\n' + 'r2=0.2 + gmod*0.7;\n' + 'g2=0.2 + bmod*0.7;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 1.256637,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.498314,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.599577,
			x : 0.2,
			y : 0.8,
			ang : 0.0,
			sides : 24.0,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.753982,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.698924,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.3,
			r : 1.0,
			border_g : 1.0,
			rad : 1.468144,
			x : 0.5,
			y : 0.5,
			ang : 0.753982,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.bmod = 0;
m.rmod = 0;
m.gmod = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rmod = ((Math.sin((m.time*0.2))*0.5)+0.5);
m.rmod = (m.rmod*m.rmod);
m.gmod = ((Math.sin(((m.time*0.2)+2.1))*0.5)+0.5);
m.gmod = (m.gmod*m.gmod);
m.bmod = ((Math.sin(((m.time*0.2)+4.2))*0.5)+0.5);
m.bmod = (m.bmod*m.bmod);
m.r2 = (0.8+(m.rmod*0.2));
m.g2 = (0.8+(m.gmod*0.2));
m.b2 = (0.8+(m.bmod*0.2));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rmod=sin(time*0.2)*0.5+0.5;\n' + 'rmod=rmod*rmod;\n' + 'gmod=sin(time*0.2+2.1)*0.5+0.5;\n' + 'gmod=gmod*gmod;\n' + 'bmod=sin(time*0.2+4.2)*0.5+0.5;\n' + 'bmod=bmod*bmod;\n' + 'r2=0.8+rmod*0.2;\n' + 'g2=0.8+gmod*0.2;\n' + 'b2=0.8+bmod*0.2;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=0.98;\n' + 'dx=0;\n' + 'dy=0;\n' + 'sx=1.000001;\n' + 'sy=0.999999;\n' + 'mv_r=.360+(((cos(time/5)*0.3)+0.5*0.5)*0.1);\n' + 'mv_g=.390+(((sin(time/7)*0.3)+0.5*0.5)*0.1);\n' + 'mv_b=.500+((sin((time/7)+0.9)+0.5*0.5)*0.1);'),
	'pixel_eqs_str' : ('zoom=1+ 0.001;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.21,
		wave_g : 0.4,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.011726,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.11,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 0.99663,
		ob_size : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 0.010284,
		wave_dots : 1.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.1,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.96,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 3.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.gamma = 0;
m.flash = 0;
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
m.decay = 1;
m.zoom = 1.01;
m.q1 = m.time;
m.q2 = m.time;
m.q3 = m.time;
m.flash = (m.flash+Math.min((((m.mid*m.mid)*m.mid)*0.1), 0.5));
m.flash = ifcond(above(m.flash, 1), (m.flash-1), m.flash);
m.gamma = ((1.0+(m.flash*0.5))+Math.min(((m.bass_att*m.bass_att)*0.3), 0.49));
m.invert = 0;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
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
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.advance = 0;
m.advance2 = 0;
m.y_screen = 0;
m.s = 0;
m.x_screen = 0;
m.zp = 0;
m.yp = 0;
m.xp = 0;
m.t1 = 0;
m.t2 = 0;
m.advance = 0;
m.advance2 = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.advance = (m.advance+((m.bass_att*m.bass_att)*0.002));
m.advance = ifcond(above(m.advance, 2), (m.advance-2), m.advance);
m.t1 = m.advance;
m.advance2 = (m.advance2+((m.mid_att*m.mid_att)*0.001));
m.t2 = m.advance2;
		return m;
	},
		'point_eqs' : function(m) {
m.s = (m.sample*6.28);
m.xp = (((Math.sin(m.s)+Math.sin((m.s*0.34)))+Math.sin(((m.s*7.3)+m.t2)))+Math.sin((m.s*13.8)));
m.xp = (m.xp*0.15);
m.yp = (((Math.cos(m.s)+Math.sin((m.s*0.24)))+Math.cos(((m.s*5.4)+m.t2)))+Math.sin((m.s*17.7)));
m.yp = (m.yp*0.15);
m.zp = (((Math.cos(m.s)+Math.cos((m.s*5.24)))+Math.cos((m.s*14.4)))+Math.cos((m.s*2.7)));
m.zp = (m.zp*0.25);
m.zp = ((m.zp+1)-m.t1);
m.zp = ifcond(below(m.zp, 0), (m.zp+2), m.zp);
m.a = ((1-(m.zp*0.5))*2);
m.zp = (m.zp*0.7);
m.x_screen = (div(m.xp,m.zp)+0.5);
m.y_screen = (div(m.yp,m.zp)+0.5);
m.x = m.x_screen;
m.y = m.y_screen;
m.r = 1;
m.g = 0.5;
m.b = 0.1;
m.a = (m.a*0.7);
m.a = (m.a*above(Math.sin((m.time+(m.s*9))), -0.5));
		return m;
	},
		'init_eqs_str' : ('advance=0;\n' + 'advance2=0;'),
		'frame_eqs_str' : ('advance=advance+ bass_att*bass_att*0.002;\n' + 'advance=if( above(advance,2) , advance-2, advance);\n' + 't1=advance;\n' + 'advance2=advance2+ mid_att*mid_att*0.001;\n' + 't2=advance2;'),
		'point_eqs_str' : ('s=sample*6.28;\n' + 'xp=sin(s)+sin(s*0.34)+sin(s*7.3+t2)+sin(s*13.8);\n' + 'xp=xp*0.15;\n' + 'yp=cos(s)+sin(s*0.24)+cos(s*5.4+t2)+sin(s*17.7);\n' + 'yp=yp*0.15;\n' + 'zp=cos(s)+cos(s*5.24 )+cos(s*14.4)+cos(s*2.7);\n' + 'zp=zp*0.25;\n' + 'zp=zp + 1 - t1;\n' + 'zp=if( below(zp,0) , zp+2 , zp );\n' + 'a=(1 - zp*0.5)*2;\n' + 'zp=zp*0.7;\n' + 'x_screen=xp/zp + 0.5;\n' + 'y_screen=yp/zp + 0.5;\n' + 'x=x_screen;\n' + 'y=y_screen;\n' + 'r=1;\n' + 'g=0.5;\n' + 'b=0.1;\n' + 'a=a*0.7;\n' + 'a=a* above( sin(time+s*9) , -0.5 );'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.advance = 0;
m.advance2 = 0;
m.y_screen = 0;
m.s = 0;
m.x_screen = 0;
m.zp = 0;
m.yp = 0;
m.xp = 0;
m.t1 = 0;
m.t2 = 0;
m.advance = 0;
m.advance2 = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.advance = (m.advance+((m.bass_att*m.bass_att)*0.002));
m.advance = ifcond(above(m.advance, 2), (m.advance-2), m.advance);
m.t1 = m.advance;
m.advance2 = (m.advance2+((m.mid_att*m.mid_att)*0.001));
m.t2 = m.advance2;
		return m;
	},
		'point_eqs' : function(m) {
m.s = (m.sample*6.28);
m.xp = (((Math.sin(m.s)+Math.sin((m.s*0.34)))+Math.sin(((m.s*7.3)+m.t2)))+Math.sin((m.s*13.8)));
m.xp = (m.xp*0.15);
m.yp = (((Math.cos(m.s)+Math.sin((m.s*0.24)))+Math.cos(((m.s*5.4)+m.t2)))+Math.sin((m.s*17.7)));
m.yp = (m.yp*0.15);
m.zp = (((Math.cos(m.s)+Math.cos((m.s*5.24)))+Math.cos((m.s*14.4)))+Math.cos((m.s*2.7)));
m.zp = (m.zp*0.25);
m.zp = ((m.zp+1)-m.t1);
m.zp = ifcond(below(m.zp, 0), (m.zp+2), m.zp);
m.a = ((1-(m.zp*0.5))*0.3);
m.a = ifcond(below(m.a, 0), 0, m.a);
m.zp = (m.zp*0.7);
m.x_screen = (div(m.xp,m.zp)+0.5);
m.y_screen = (div(m.yp,m.zp)+0.5);
m.x = m.x_screen;
m.y = m.y_screen;
m.r = 0.2;
m.g = 0.7;
m.b = 1.0;
m.a = (m.a*0.5);
		return m;
	},
		'init_eqs_str' : ('advance=0;\n' + 'advance2=0;'),
		'frame_eqs_str' : ('advance=advance+ bass_att*bass_att*0.002;\n' + 'advance=if( above(advance,2) , advance-2, advance);\n' + 't1=advance;\n' + 'advance2=advance2+ mid_att*mid_att*0.001;\n' + 't2=advance2;'),
		'point_eqs_str' : ('s=sample*6.28;\n' + 'xp=sin(s)+sin(s*0.34)+sin(s*7.3+t2)+sin(s*13.8);\n' + 'xp=xp*0.15;\n' + 'yp=cos(s)+sin(s*0.24)+cos(s*5.4+t2)+sin(s*17.7);\n' + 'yp=yp*0.15;\n' + 'zp=cos(s)+cos(s*5.24 )+cos(s*14.4)+cos(s*2.7);\n' + 'zp=zp*0.25;\n' + 'zp=zp + 1 - t1;\n' + 'zp=if( below(zp,0) , zp+2 , zp );\n' + 'a=(1 - zp*0.5) * 0.3;\n' + 'a=if( below(a,0), 0 , a);\n' + 'zp=zp*0.7;\n' + 'x_screen=xp/zp + 0.5;\n' + 'y_screen=yp/zp + 0.5;\n' + 'x=x_screen;\n' + 'y=y_screen;\n' + 'r=0.2;\n' + 'g=0.7;\n' + 'b=1.0;\n' + 'a=a*0.5;'),

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
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.advance = 0;
m.advance2 = 0;
m.y_screen = 0;
m.s = 0;
m.x_screen = 0;
m.zp = 0;
m.yp = 0;
m.xp = 0;
m.t1 = 0;
m.t2 = 0;
m.advance = 0;
m.advance2 = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.advance = (m.advance+((m.bass_att*m.bass_att)*0.002));
m.advance = ifcond(above(m.advance, 2), (m.advance-2), m.advance);
m.t1 = m.advance;
m.advance2 = (m.advance2+((m.mid_att*m.mid_att)*0.001));
m.t2 = m.advance2;
		return m;
	},
		'point_eqs' : function(m) {
m.s = (m.sample*6.28);
m.xp = (((Math.sin(m.s)+Math.sin((m.s*0.34)))+Math.sin(((m.s*7.3)+m.t2)))+Math.sin((m.s*13.8)));
m.xp = (m.xp*0.15);
m.yp = (((Math.cos(m.s)+Math.sin((m.s*0.24)))+Math.cos(((m.s*5.4)+m.t2)))+Math.sin((m.s*17.7)));
m.yp = (m.yp*0.15);
m.zp = (((Math.cos(m.s)+Math.cos((m.s*5.24)))+Math.cos((m.s*14.4)))+Math.cos((m.s*2.7)));
m.zp = (m.zp*0.25);
m.zp = ((m.zp+1)-m.t1);
m.zp = ifcond(below(m.zp, 0), (m.zp+2), m.zp);
m.a = ((1-(m.zp*0.5))*2);
m.zp = (m.zp*0.7);
m.x_screen = (div(-m.xp,m.zp)+0.5);
m.y_screen = (div(m.yp,m.zp)+0.5);
m.x = m.x_screen;
m.y = m.y_screen;
m.r = 1;
m.g = 0.5;
m.b = 0.1;
m.a = (m.a*0.7);
m.a = (m.a*above(Math.sin((m.time+(m.s*9))), -0.5));
		return m;
	},
		'init_eqs_str' : ('advance=0;\n' + 'advance2=0;'),
		'frame_eqs_str' : ('advance=advance+ bass_att*bass_att*0.002;\n' + 'advance=if( above(advance,2) , advance-2, advance);\n' + 't1=advance;\n' + 'advance2=advance2+ mid_att*mid_att*0.001;\n' + 't2=advance2;'),
		'point_eqs_str' : ('s=sample*6.28;\n' + 'xp=sin(s)+sin(s*0.34)+sin(s*7.3+t2)+sin(s*13.8);\n' + 'xp=xp*0.15;\n' + 'yp=cos(s)+sin(s*0.24)+cos(s*5.4+t2)+sin(s*17.7);\n' + 'yp=yp*0.15;\n' + 'zp=cos(s)+cos(s*5.24 )+cos(s*14.4)+cos(s*2.7);\n' + 'zp=zp*0.25;\n' + 'zp=zp + 1 - t1;\n' + 'zp=if( below(zp,0) , zp+2 , zp );\n' + 'a=(1 - zp*0.5)*2;\n' + 'zp=zp*0.7;\n' + 'x_screen=-xp/zp + 0.5;\n' + 'y_screen=yp/zp + 0.5;\n' + 'x=x_screen;\n' + 'y=y_screen;\n' + 'r=1;\n' + 'g=0.5;\n' + 'b=0.1;\n' + 'a=a*0.7;\n' + 'a=a* above( sin(time+s*9) , -0.5 );'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 402.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.advance = 0;
m.advance2 = 0;
m.y_screen = 0;
m.s = 0;
m.x_screen = 0;
m.zp = 0;
m.yp = 0;
m.xp = 0;
m.t1 = 0;
m.t2 = 0;
m.advance = 0;
m.advance2 = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.advance = (m.advance+((m.bass_att*m.bass_att)*0.002));
m.advance = ifcond(above(m.advance, 2), (m.advance-2), m.advance);
m.t1 = m.advance;
m.advance2 = (m.advance2+((m.mid_att*m.mid_att)*0.001));
m.t2 = m.advance2;
		return m;
	},
		'point_eqs' : function(m) {
m.s = (m.sample*6.28);
m.xp = (((Math.sin(m.s)+Math.sin((m.s*0.34)))+Math.sin(((m.s*7.3)+m.t2)))+Math.sin((m.s*13.8)));
m.xp = (m.xp*0.15);
m.yp = (((Math.cos(m.s)+Math.sin((m.s*0.24)))+Math.cos(((m.s*5.4)+m.t2)))+Math.sin((m.s*17.7)));
m.yp = (m.yp*0.15);
m.zp = (((Math.cos(m.s)+Math.cos((m.s*5.24)))+Math.cos((m.s*14.4)))+Math.cos((m.s*2.7)));
m.zp = (m.zp*0.25);
m.zp = ((m.zp+1)-m.t1);
m.zp = ifcond(below(m.zp, 0), (m.zp+2), m.zp);
m.a = ((1-(m.zp*0.5))*0.3);
m.a = ifcond(below(m.a, 0), 0, m.a);
m.zp = (m.zp*0.7);
m.x_screen = (div(-m.xp,m.zp)+0.5);
m.y_screen = (div(m.yp,m.zp)+0.5);
m.x = m.x_screen;
m.y = m.y_screen;
m.r = 0.2;
m.g = 0.7;
m.b = 1.0;
m.a = (m.a*0.5);
		return m;
	},
		'init_eqs_str' : ('advance=0;\n' + 'advance2=0;'),
		'frame_eqs_str' : ('advance=advance+ bass_att*bass_att*0.002;\n' + 'advance=if( above(advance,2) , advance-2, advance);\n' + 't1=advance;\n' + 'advance2=advance2+ mid_att*mid_att*0.001;\n' + 't2=advance2;'),
		'point_eqs_str' : ('s=sample*6.28;\n' + 'xp=sin(s)+sin(s*0.34)+sin(s*7.3+t2)+sin(s*13.8);\n' + 'xp=xp*0.15;\n' + 'yp=cos(s)+sin(s*0.24)+cos(s*5.4+t2)+sin(s*17.7);\n' + 'yp=yp*0.15;\n' + 'zp=cos(s)+cos(s*5.24 )+cos(s*14.4)+cos(s*2.7);\n' + 'zp=zp*0.25;\n' + 'zp=zp + 1 - t1;\n' + 'zp=if( below(zp,0) , zp+2 , zp );\n' + 'a=(1 - zp*0.5) * 0.3;\n' + 'a=if( below(a,0), 0 , a);\n' + 'zp=zp*0.7;\n' + 'x_screen=-xp/zp + 0.5;\n' + 'y_screen=yp/zp + 0.5;\n' + 'x=x_screen;\n' + 'y=y_screen;\n' + 'r=0.2;\n' + 'g=0.7;\n' + 'b=1.0;\n' + 'a=a*0.5;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.06,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.734577,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.61,
			border_g : 1.0,
			rad : 0.208824,
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
m.ang = (m.time*0.3);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=time*0.3;'),

		},
		{
		'baseVals' : {
			r2 : 0.6,
			a : 0.11,
			enabled : 1.0,
			b : 0.9,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.6,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.xsign = 0;
m.xp = 0;

			m.rkeys = ['a'];
			return m;
		},
		'frame_eqs' : function(m) {
m.xp = (1-Math.abs(Math.sin((m.time*100))));
m.xsign = ((rand(2)*2)-1);
m.a = (m.a*(1-m.xp));
m.xp = ((m.xp*((m.bass+m.mid)+m.treb))*0.23);
m.x = (((m.xp*m.xsign)*0.5)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('xp = 1 - abs( sin(time*100) );\n' + 'xsign = rand(2)*2 - 1;\n' + 'a=a * (1-xp);\n' + 'xp=xp* (bass+mid+treb)*0.23;\n' + 'x = xp*xsign*0.5 + 0.5;'),

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
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=1;\n' + 'zoom=1.01;\n' + 'q1=time;\n' + 'q2=time;\n' + 'q3=time;\n' + 'flash=flash + min(mid*mid*mid*0.1,0.5);\n' + 'flash=if( above(flash,1) , flash-1 , flash);\n' + 'gamma=1.0+ flash*0.5 + min(bass_att*bass_att*0.3,0.49);\n' + 'invert=0;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
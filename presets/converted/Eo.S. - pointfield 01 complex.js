define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
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
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 1.006596,
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
		rating : 5.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
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
m.decay = 0.97;
m.zoom = 1.000;
m.q1 = m.time;
m.q2 = m.time;
m.q3 = m.time;
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
m.y_screen = 0;
m.s = 0;
m.x_screen = 0;
m.zp = 0;
m.yp = 0;
m.xp = 0;
m.t1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.advance = (m.advance+0.005);
m.advance = ifcond(above(m.advance, 2), 0, m.advance);
m.t1 = m.advance;
		return m;
	},
		'point_eqs' : function(m) {
m.s = (m.sample*6.28);
m.xp = (((Math.sin(m.s)+Math.sin((m.s*0.34)))+Math.sin((m.s*24.3)))+Math.sin((m.s*13.8)));
m.xp = (m.xp*0.20);
m.yp = (((Math.cos(m.s)+Math.sin((m.s*0.24)))+Math.cos((m.s*17.4)))+Math.sin((m.s*37.7)));
m.yp = (m.yp*0.20);
m.zp = (((Math.cos(m.s)+Math.cos((m.s*5.24)))+Math.cos((m.s*47.4)))+Math.cos((m.s*27.7)));
m.zp = (m.zp*0.25);
m.zp = ((m.zp+1)-m.t1);
m.zp = ifcond(below(m.zp, 0), (m.zp+2), m.zp);
m.a = (1-(m.zp*0.5));
m.zp = (m.zp*0.7);
m.x_screen = (div(m.xp,m.zp)+0.5);
m.y_screen = (div(m.yp,m.zp)+0.5);
m.x = m.x_screen;
m.y = m.y_screen;
m.r = 1;
m.g = 1;
m.b = 1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('advance=advance+ 0.005;\n' + 'advance=if( above(advance,2) , 0, advance);\n' + 't1=advance;'),
		'point_eqs_str' : ('s=sample*6.28;\n' + 'xp=sin(s)+sin(s*0.34)+sin(s*24.3)+sin(s*13.8);\n' + 'xp=xp*0.20;\n' + 'yp=cos(s)+sin(s*0.24)+cos(s*17.4)+sin(s*37.7);\n' + 'yp=yp*0.20;\n' + 'zp=cos(s)+cos(s*5.24)+cos(s*47.4)+cos(s*27.7);\n' + 'zp=zp*0.25;\n' + 'zp=zp + 1 - t1;\n' + 'zp=if( below(zp,0) , zp+2 , zp );\n' + 'a=(1 - zp*0.5);\n' + 'zp=zp*0.7;\n' + 'x_screen=xp/zp + 0.5;\n' + 'y_screen=yp/zp + 0.5;\n' + 'x=x_screen;\n' + 'y=y_screen;\n' + 'r=1;\n' + 'g=1;\n' + 'b=1;'),

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
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.advance = 0;
m.y_screen = 0;
m.s = 0;
m.x_screen = 0;
m.zp = 0;
m.yp = 0;
m.xp = 0;
m.t1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.advance = (m.advance+0.005);
m.advance = ifcond(above(m.advance, 2), 0, m.advance);
m.t1 = m.advance;
		return m;
	},
		'point_eqs' : function(m) {
m.s = (m.sample*6.28);
m.xp = (((Math.sin(m.s)+Math.sin((m.s*0.14)))+Math.sin((m.s*32.3)))+Math.sin((m.s*9.8)));
m.xp = (m.xp*0.20);
m.yp = (((Math.cos(m.s)+Math.sin((m.s*0.24)))+Math.cos((m.s*17.4)))+Math.sin((m.s*37.7)));
m.yp = (m.yp*0.20);
m.zp = (((Math.cos(m.s)+Math.cos((m.s*5.24)))+Math.cos((m.s*47.4)))+Math.cos((m.s*27.7)));
m.zp = (m.zp*0.25);
m.zp = ((m.zp+1)-m.t1);
m.zp = ifcond(below(m.zp, 0), (m.zp+2), m.zp);
m.a = (1-(m.zp*0.5));
m.zp = (m.zp*0.7);
m.x_screen = (div(m.xp,m.zp)+0.5);
m.y_screen = (div(m.yp,m.zp)+0.5);
m.x = m.x_screen;
m.y = m.y_screen;
m.r = 1;
m.g = 1;
m.b = 1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('advance=advance+ 0.005;\n' + 'advance=if( above(advance,2) , 0, advance);\n' + 't1=advance;'),
		'point_eqs_str' : ('s=sample*6.28;\n' + 'xp=sin(s)+sin(s*0.14)+sin(s*32.3)+sin(s*9.8);\n' + 'xp=xp*0.20;\n' + 'yp=cos(s)+sin(s*0.24)+cos(s*17.4)+sin(s*37.7);\n' + 'yp=yp*0.20;\n' + 'zp=cos(s)+cos(s*5.24)+cos(s*47.4)+cos(s*27.7);\n' + 'zp=zp*0.25;\n' + 'zp=zp + 1 - t1;\n' + 'zp=if( below(zp,0) , zp+2 , zp );\n' + 'a=(1 - zp*0.5);\n' + 'zp=zp*0.7;\n' + 'x_screen=xp/zp + 0.5;\n' + 'y_screen=yp/zp + 0.5;\n' + 'x=x_screen;\n' + 'y=y_screen;\n' + 'r=1;\n' + 'g=1;\n' + 'b=1;'),

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
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.advance = 0;
m.y_screen = 0;
m.s = 0;
m.x_screen = 0;
m.zp = 0;
m.yp = 0;
m.xp = 0;
m.t1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.advance = (m.advance+0.005);
m.advance = ifcond(above(m.advance, 2), 0, m.advance);
m.t1 = m.advance;
		return m;
	},
		'point_eqs' : function(m) {
m.s = (m.sample*6.28);
m.xp = (((Math.sin(m.s)+Math.sin((m.s*0.34)))+Math.sin((m.s*24.3)))+Math.sin((m.s*13.8)));
m.xp = (m.xp*0.20);
m.yp = (((Math.cos(m.s)+Math.sin((m.s*0.14)))+Math.cos((m.s*13.4)))+Math.sin((m.s*37.7)));
m.yp = (m.yp*0.20);
m.zp = (((Math.cos(m.s)+Math.cos((m.s*2.24)))+Math.cos((m.s*37.4)))+Math.cos((m.s*15.7)));
m.zp = (m.zp*0.25);
m.zp = ((m.zp+1)-m.t1);
m.zp = ifcond(below(m.zp, 0), (m.zp+2), m.zp);
m.a = (1-(m.zp*0.5));
m.zp = (m.zp*0.7);
m.x_screen = (div(m.xp,m.zp)+0.5);
m.y_screen = (div(m.yp,m.zp)+0.5);
m.x = m.x_screen;
m.y = m.y_screen;
m.r = 1;
m.g = 1;
m.b = 1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('advance=advance+ 0.005;\n' + 'advance=if( above(advance,2) , 0, advance);\n' + 't1=advance;'),
		'point_eqs_str' : ('s=sample*6.28;\n' + 'xp=sin(s)+sin(s*0.34)+sin(s*24.3)+sin(s*13.8);\n' + 'xp=xp*0.20;\n' + 'yp=cos(s)+sin(s*0.14)+cos(s*13.4)+sin(s*37.7);\n' + 'yp=yp*0.20;\n' + 'zp=cos(s)+cos(s*2.24)+cos(s*37.4)+cos(s*15.7);\n' + 'zp=zp*0.25;\n' + 'zp=zp + 1 - t1;\n' + 'zp=if( below(zp,0) , zp+2 , zp );\n' + 'a=(1 - zp*0.5);\n' + 'zp=zp*0.7;\n' + 'x_screen=xp/zp + 0.5;\n' + 'y_screen=yp/zp + 0.5;\n' + 'x=x_screen;\n' + 'y=y_screen;\n' + 'r=1;\n' + 'g=1;\n' + 'b=1;'),

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
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.advance = 0;
m.y_screen = 0;
m.s = 0;
m.x_screen = 0;
m.zp = 0;
m.yp = 0;
m.xp = 0;
m.t1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.advance = (m.advance+0.005);
m.advance = ifcond(above(m.advance, 2), 0, m.advance);
m.t1 = m.advance;
		return m;
	},
		'point_eqs' : function(m) {
m.s = (m.sample*6.28);
m.xp = (((Math.sin(m.s)+Math.sin((m.s*0.34)))+Math.sin((m.s*14.3)))+Math.sin((m.s*19.8)));
m.xp = (m.xp*0.20);
m.yp = (((Math.cos(m.s)+Math.sin((m.s*0.34)))+Math.cos((m.s*17.4)))+Math.sin((m.s*37.7)));
m.yp = (m.yp*0.20);
m.zp = (((Math.cos(m.s)+Math.cos((m.s*5.24)))+Math.cos((m.s*27.4)))+Math.cos((m.s*14.7)));
m.zp = (m.zp*0.25);
m.zp = ((m.zp+1)-m.t1);
m.zp = ifcond(below(m.zp, 0), (m.zp+2), m.zp);
m.a = (1-(m.zp*0.5));
m.zp = (m.zp*0.7);
m.x_screen = (div(m.xp,m.zp)+0.5);
m.y_screen = (div(m.yp,m.zp)+0.5);
m.x = m.x_screen;
m.y = m.y_screen;
m.r = 1;
m.g = 1;
m.b = 1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('advance=advance+ 0.005;\n' + 'advance=if( above(advance,2) , 0, advance);\n' + 't1=advance;'),
		'point_eqs_str' : ('s=sample*6.28;\n' + 'xp=sin(s)+sin(s*0.34)+sin(s*14.3)+sin(s*19.8);\n' + 'xp=xp*0.20;\n' + 'yp=cos(s)+sin(s*0.34)+cos(s*17.4)+sin(s*37.7);\n' + 'yp=yp*0.20;\n' + 'zp=cos(s)+cos(s*5.24)+cos(s*27.4)+cos(s*14.7);\n' + 'zp=zp*0.25;\n' + 'zp=zp + 1 - t1;\n' + 'zp=if( below(zp,0) , zp+2 , zp );\n' + 'a=(1 - zp*0.5);\n' + 'zp=zp*0.7;\n' + 'x_screen=xp/zp + 0.5;\n' + 'y_screen=yp/zp + 0.5;\n' + 'x=x_screen;\n' + 'y=y_screen;\n' + 'r=1;\n' + 'g=1;\n' + 'b=1;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.0399,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.9,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.671653,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.8,
			border_g : 1.0,
			rad : 1.35581,
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
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=0.97;\n' + 'zoom=1.000;\n' + 'q1=time;\n' + 'q2=time;\n' + 'q3=time;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
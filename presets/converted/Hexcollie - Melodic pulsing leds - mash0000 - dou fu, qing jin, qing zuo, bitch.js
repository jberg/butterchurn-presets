define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 0.4,
		ib_g : 0.25,
		mv_x : 12.8,
		warpscale : 3.138,
		brighten : 0.0,
		mv_y : 9.6,
		wave_scale : 0.012,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 5.4E-4,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.169,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.7,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.053,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.25,
		mv_r : 0.41,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.dy_residual = 0;
m.dx_residual = 0;
m.bass_thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.650*((0.60*Math.sin((1.437*m.time)))+(0.40*Math.sin((0.970*m.time))))));
m.wave_g = (m.wave_g+(0.650*((0.60*Math.sin((1.344*m.time)))+(0.40*Math.sin((0.841*m.time))))));
m.wave_b = (m.wave_b+(0.650*((0.60*Math.sin((1.251*m.time)))+(0.40*Math.sin((1.055*m.time))))));
m.rot = (m.rot+(0.010*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.cx = (m.cx+(0.210*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.294*m.time))))));
m.cy = (m.cy+(0.210*((0.60*Math.sin((0.393*m.time)))+(0.40*Math.sin((0.223*m.time))))));
m.dx = (m.dx+(0.010*((0.60*Math.sin((0.234*m.time)))+(0.40*Math.sin((0.277*m.time))))));
m.dy = (m.dy+(0.010*((0.60*Math.sin((0.284*m.time)))+(0.40*Math.sin((0.247*m.time))))));
m.decay = (m.decay-(0.01*equal(mod(m.frame,6), 0)));
m.dx = (m.dx+m.dx_residual);
m.dy = (m.dy+m.dy_residual);
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.dx_residual = ((((equal(m.bass_thresh, 2.13)*0.016)*Math.sin((m.time*7)))+((1-equal(m.bass_thresh, 2.13))*m.dx_residual))*0.9);
m.dy_residual = ((((equal(m.bass_thresh, 2.13)*0.012)*Math.sin((m.time*9)))+((1-equal(m.bass_thresh, 2.13))*m.dy_residual))*0.9);
m.wave_x = (m.wave_x-(m.dx_residual*7));
m.wave_y = (m.wave_y-(m.dy_residual*7));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.advance = 0;
m.advance2 = 0;
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
m.advance2 = (m.advance2+((m.mid_att*m.mid_att)*0.005));
m.t2 = m.advance2;
		return m;
	},
		'point_eqs' : function(m) {
m.x = ((0.5+((0.25*(m.sample*2))*Math.sin(((m.sample*100)+(m.time*10)))))+((Math.cos(m.time)*m.x)*0.2));
m.y = ((0.5+((0.25*(m.sample*2))*Math.cos(((m.sample*100)+(m.time*10)))))+((Math.sin(m.time)*m.y)*0.2));
m.r = m.bass;
m.b = 0;
m.g = 0.5;
		return m;
	},
		'init_eqs_str' : ('advance=0;\n' + 'advance2=0;'),
		'frame_eqs_str' : ('advance=advance+ bass_att*bass_att*0.002;\n' + 'advance=if( above(advance,2) , advance-2, advance);\n' + 't1=advance;\n' + 'advance2=advance2+ mid_att*mid_att*0.005;\n' + 't2=advance2;'),
		'point_eqs_str' : ('x = .5+.25*(sample*2)*sin(sample*100+time*10)+((cos(time)*x)*0.2);\n' + 'y = .5+.25*(sample*2)*cos(sample*100+time*10)+((sin(time)*y)*0.2);\n' + 'r = bass;\n' + 'b = 0;\n' + 'g = .5;'),

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
		return m;
	},
		'init_eqs_str' : ('advance=0;\n' + 'advance2=0;'),
		'frame_eqs_str' : ('advance=advance+ bass_att*bass_att*0.002;\n' + 'advance=if( above(advance,2) , advance-2, advance);\n' + 't1=advance;\n' + 'advance2=advance2+ mid_att*mid_att*0.001;\n' + 't2=advance2;'),
		'point_eqs_str' : ('s=sample*6.28;\n' + 'xp=sin(s)+sin(s*0.34)+sin(s*7.3+t2)+sin(s*13.8);\n' + 'xp=xp*0.15;\n' + 'yp=cos(s)+sin(s*0.24)+cos(s*5.4+t2)+sin(s*17.7);\n' + 'yp=yp*0.15;\n' + 'zp=cos(s)+cos(s*5.24 )+cos(s*14.4)+cos(s*2.7);\n' + 'zp=zp*0.25;\n' + 'zp=zp + 1 - t1;\n' + 'zp=if( below(zp,0) , zp+2 , zp );\n' + 'a=(1 - zp*0.5) * 0.3;\n' + 'a=if( below(a,0), 0 , a);\n' + 'zp=zp*0.7;\n' + 'x_screen=xp/zp + 0.5;\n' + 'y_screen=yp/zp + 0.5;\n' + 'x=x_screen;\n' + 'y=y_screen;\n' + 'r=0.2;\n' + 'g=0.7;\n' + 'b=1.0;'),

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
m.g = 0.7;
m.b = 0.2;
		return m;
	},
		'init_eqs_str' : ('advance=0;\n' + 'advance2=0;'),
		'frame_eqs_str' : ('advance=advance+ bass_att*bass_att*0.002;\n' + 'advance=if( above(advance,2) , advance-2, advance);\n' + 't1=advance;\n' + 'advance2=advance2+ mid_att*mid_att*0.001;\n' + 't2=advance2;'),
		'point_eqs_str' : ('s=sample*6.28;\n' + 'xp=sin(s)+sin(s*0.34)+sin(s*7.3+t2)+sin(s*13.8);\n' + 'xp=xp*0.15;\n' + 'yp=cos(s)+sin(s*0.24)+cos(s*5.4+t2)+sin(s*17.7);\n' + 'yp=yp*0.15;\n' + 'zp=cos(s)+cos(s*5.24 )+cos(s*14.4)+cos(s*2.7);\n' + 'zp=zp*0.25;\n' + 'zp=zp + 1 - t1;\n' + 'zp=if( below(zp,0) , zp+2 , zp );\n' + 'a=(1 - zp*0.5)*2;\n' + 'zp=zp*0.7;\n' + 'x_screen=-xp/zp + 0.5;\n' + 'y_screen=yp/zp + 0.5;\n' + 'x=x_screen;\n' + 'y=y_screen;\n' + 'r=1;\n' + 'g=0.7;\n' + 'b=0.2;'),

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
m.x_screen = (div(-m.xp,m.zp)+0.5);
m.y_screen = (div(m.yp,m.zp)+0.5);
m.x = m.x_screen;
m.y = m.y_screen;
m.r = 0.2;
m.g = 0.7;
m.b = 1.0;
		return m;
	},
		'init_eqs_str' : ('advance=0;\n' + 'advance2=0;'),
		'frame_eqs_str' : ('advance=advance+ bass_att*bass_att*0.002;\n' + 'advance=if( above(advance,2) , advance-2, advance);\n' + 't1=advance;\n' + 'advance2=advance2+ mid_att*mid_att*0.001;\n' + 't2=advance2;'),
		'point_eqs_str' : ('s=sample*6.28;\n' + 'xp=sin(s)+sin(s*0.34)+sin(s*7.3+t2)+sin(s*13.8);\n' + 'xp=xp*0.15;\n' + 'yp=cos(s)+sin(s*0.24)+cos(s*5.4+t2)+sin(s*17.7);\n' + 'yp=yp*0.15;\n' + 'zp=cos(s)+cos(s*5.24 )+cos(s*14.4)+cos(s*2.7);\n' + 'zp=zp*0.25;\n' + 'zp=zp + 1 - t1;\n' + 'zp=if( below(zp,0) , zp+2 , zp );\n' + 'a=(1 - zp*0.5) * 0.3;\n' + 'a=if( below(a,0), 0 , a);\n' + 'zp=zp*0.7;\n' + 'x_screen=-xp/zp + 0.5;\n' + 'y_screen=yp/zp + 0.5;\n' + 'x=x_screen;\n' + 'y=y_screen;\n' + 'r=0.2;\n' + 'g=0.7;\n' + 'b=1.0;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.83,
			tex_ang : 3.14159,
			thickoutline : 0.0,
			g : 0.96,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.73458,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.95,
			border_g : 1.0,
			rad : 1.35581,
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
m.ang = (Math.sin((m.time*0.5))*0.007);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=sin(time*0.5)*0.007;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.19,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.04,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.06,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.05,
			border_g : 1.0,
			rad : 0.36457,
			x : 0.5,
			y : 0.5,
			ang : 6.28319,
			sides : 5.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.bass*6.14);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=bass*6.14;'),

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
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '  uv_1 = (0.05 + (0.9 * uv));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv_1);\n' + '  ret_2 = (tmpvar_3.xyz * 4.0);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv_1);\n' + '  ret_2 = (ret_2 - ((\n' + '    (tmpvar_4.xyz * scale1)\n' + '   + bias1) * 4.0));\n' + '  ret_2 = -(ret_2);\n' + '  ret_2 = ((pow (ret_2, vec3(0.5, 0.5, 0.7)) - 0.1) * 1.1);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.650*( 0.60*sin(1.437*time) + 0.40*sin(0.970*time) );\n' + 'wave_g = wave_g + 0.650*( 0.60*sin(1.344*time) + 0.40*sin(0.841*time) );\n' + 'wave_b = wave_b + 0.650*( 0.60*sin(1.251*time) + 0.40*sin(1.055*time) );\n' + 'rot = rot + 0.010*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'cx = cx + 0.210*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );\n' + 'cy = cy + 0.210*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );\n' + 'dx = dx + 0.010*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );\n' + 'dy = dy + 0.010*( 0.60*sin(0.284*time) + 0.40*sin(0.247*time) );\n' + 'decay = decay - 0.01*equal(frame%6,0);\n' + 'dx = dx + dx_residual;\n' + 'dy = dy + dy_residual;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'dx_residual = (equal(bass_thresh,2.13)*0.016*sin(time*7) + (1-equal(bass_thresh,2.13))*dx_residual)*0.9;\n' + 'dy_residual = (equal(bass_thresh,2.13)*0.012*sin(time*9) + (1-equal(bass_thresh,2.13))*dy_residual)*0.9;\n' + 'wave_x = wave_x - dx_residual*7;\n' + 'wave_y = wave_y - dy_residual*7;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
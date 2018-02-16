define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.21,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 7.709095,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.999993,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.0,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.8,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 0.996621,
		ob_size : 0.5,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9995,
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
		decay : 0.65,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;
m.qx = 0;
m.var = 0;
m.qy = 0;
m.basstime = 0;
m.rd = 0;
m.zm = 0;
m.midtime = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.99;
m.zoom = 1.00;
m.basstime = (m.basstime+((m.bass_att*m.bass_att)*0.02));
m.midtime = (m.midtime+((m.mid_att*m.mid_att)*0.01));
m.qx = (Math.sin((m.basstime*0.2))*0.2);
m.cx = (0.5+m.qx);
m.q4 = m.qx;
m.qy = (Math.sin((m.midtime*0.2))*0.2);
m.cy = (0.5-m.qy);
m.q5 = m.qy;
m.monitor = m.q4;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rd = sqrt((sqr((((m.x-0.5)-m.q4)*2))+sqr((((m.y-0.5)+m.q5)*1.5))));
m.var = Math.tan((m.rd*(1+m.bass)));
m.var = (m.var*m.var);
m.zm = (1+((0.001*m.var)*m.rd));
m.zm = (m.zm*1.003);
m.sx = m.zm;
m.sy = m.zm;
m.sx = 1.005;
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
m.txp1 = 0;
m.typ1 = 0;
m.txp2 = 0;
m.typ2 = 0;
m.zero = 0;
m.t_x = 0;
m.t_y = 0;
m.v = 0;
m.tri_point = 0;

			m.rkeys = ['zero','t_x','t_y'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.zero = (m.zero+1);
m.zero = ifcond(above(m.zero, 1), 0, m.zero);
m.tri_point = rand(3);
m.txp1 = 0;
m.txp2 = 1;
m.typ1 = 0.2;
m.typ2 = 0.2;
m.t_x = (m.t_x+(equal(m.tri_point, 0)*((0.5-m.t_x)*0.5)));
m.t_y = (m.t_y+(equal(m.tri_point, 0)*((0.8-m.t_y)*0.5)));
m.t_x = (m.t_x+(equal(m.tri_point, 1)*((m.txp1-m.t_x)*0.5)));
m.t_y = (m.t_y+(equal(m.tri_point, 1)*((m.typ1-m.t_y)*0.5)));
m.t_x = (m.t_x+(equal(m.tri_point, 2)*((m.txp2-m.t_x)*0.5)));
m.t_y = (m.t_y+(equal(m.tri_point, 2)*((m.typ2-m.t_y)*0.5)));
m.x = ((((m.t_x-0.5)*0.55)+0.5)+m.q4);
m.y = ((m.t_y+m.q5)+0.1);
m.x = ifcond(m.zero, 0.5, m.x);
m.y = ifcond(m.zero, 0.5, m.y);
m.v = Math.min(((m.bass*m.bass)*0.78), 1);
m.r = m.v;
m.g = m.v;
m.b = m.v;
m.a = 0.01;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('zero=zero+1;\n' + 'zero=if(above(zero,1),0,zero);\n' + 'tri_point=rand(3);\n' + 'txp1=0;\n' + 'txp2=1;\n' + 'typ1=0.2;\n' + 'typ2=0.2;\n' + 't_x=t_x+(equal(tri_point,0)*(((.5-t_x)*.5)));\n' + 't_y=t_y+(equal(tri_point,0)*(((.8-t_y)*.5)));\n' + 't_x=t_x+(equal(tri_point,1)*(((txp1-t_x)*.5)));\n' + 't_y=t_y+(equal(tri_point,1)*(((typ1-t_y)*.5)));\n' + 't_x=t_x+(equal(tri_point,2)*(((txp2-t_x)*.5)));\n' + 't_y=t_y+(equal(tri_point,2)*(((typ2-t_y)*.5)));\n' + 'x=(t_x-0.5)*0.55 + 0.5 + q4;\n' + 'y=t_y + q5 +0.1;\n' + 'x=if(zero,0.5,x);\n' + 'y=if(zero,0.5,y);\n' + 'v=min(bass*bass*0.78,1);\n' + 'r=v;\n' + 'g=v;\n' + 'b=v;\n' + 'a=0.01;'),

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
m.txp1 = 0;
m.typ1 = 0;
m.txp2 = 0;
m.typ2 = 0;
m.zero = 0;
m.t_x = 0;
m.t_y = 0;
m.v = 0;
m.tri_point = 0;

			m.rkeys = ['zero','t_x','t_y'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.zero = (m.zero+1);
m.zero = ifcond(above(m.zero, 1), 0, m.zero);
m.tri_point = rand(3);
m.txp1 = 0;
m.txp2 = 1;
m.typ1 = 0.2;
m.typ2 = 0.2;
m.t_x = (m.t_x+(equal(m.tri_point, 0)*((0.5-m.t_x)*0.5)));
m.t_y = (m.t_y+(equal(m.tri_point, 0)*((0.8-m.t_y)*0.5)));
m.t_x = (m.t_x+(equal(m.tri_point, 1)*((m.txp1-m.t_x)*0.5)));
m.t_y = (m.t_y+(equal(m.tri_point, 1)*((m.typ1-m.t_y)*0.5)));
m.t_x = (m.t_x+(equal(m.tri_point, 2)*((m.txp2-m.t_x)*0.5)));
m.t_y = (m.t_y+(equal(m.tri_point, 2)*((m.typ2-m.t_y)*0.5)));
m.x = ((((m.t_x-0.5)*0.55)+0.5)-m.q4);
m.y = ((m.t_y-m.q5)+0.1);
m.x = ifcond(m.zero, 0.5, m.x);
m.y = ifcond(m.zero, 0.5, m.y);
m.v = Math.min(((m.bass*m.bass)*0.78), 1);
m.r = m.v;
m.g = (m.v*0.55);
m.b = (m.v*0.01);
m.a = 0.01;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('zero=zero+1;\n' + 'zero=if(above(zero,1),0,zero);\n' + 'tri_point=rand(3);\n' + 'txp1=0;\n' + 'txp2=1;\n' + 'typ1=0.2;\n' + 'typ2=0.2;\n' + 't_x=t_x+(equal(tri_point,0)*(((.5-t_x)*.5)));\n' + 't_y=t_y+(equal(tri_point,0)*(((.8-t_y)*.5)));\n' + 't_x=t_x+(equal(tri_point,1)*(((txp1-t_x)*.5)));\n' + 't_y=t_y+(equal(tri_point,1)*(((typ1-t_y)*.5)));\n' + 't_x=t_x+(equal(tri_point,2)*(((txp2-t_x)*.5)));\n' + 't_y=t_y+(equal(tri_point,2)*(((typ2-t_y)*.5)));\n' + 'x=(t_x-0.5)*0.55 + 0.5 - q4;\n' + 'y=t_y - q5 +0.1;\n' + 'x=if(zero,0.5,x);\n' + 'y=if(zero,0.5,y);\n' + 'v=min(bass*bass*0.78,1);\n' + 'r=v;\n' + 'g=v*0.55;\n' + 'b=v*0.01;\n' + 'a=0.01;'),

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
m.q4 = 0;
m.q5 = 0;
m.txp1 = 0;
m.typ1 = 0;
m.txp2 = 0;
m.typ2 = 0;
m.t_x = 0;
m.t_y = 0;
m.v = 0;
m.tri_point = 0;

			m.rkeys = ['t_x','t_y'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.tri_point = rand(3);
m.txp1 = 0;
m.txp2 = 1;
m.typ1 = 0.2;
m.typ2 = 0.2;
m.t_x = (m.t_x+(equal(m.tri_point, 0)*((0.5-m.t_x)*0.5)));
m.t_y = (m.t_y+(equal(m.tri_point, 0)*((0.8-m.t_y)*0.5)));
m.t_x = (m.t_x+(equal(m.tri_point, 1)*((m.txp1-m.t_x)*0.5)));
m.t_y = (m.t_y+(equal(m.tri_point, 1)*((m.typ1-m.t_y)*0.5)));
m.t_x = (m.t_x+(equal(m.tri_point, 2)*((m.txp2-m.t_x)*0.5)));
m.t_y = (m.t_y+(equal(m.tri_point, 2)*((m.typ2-m.t_y)*0.5)));
m.x = (((m.t_x-0.5)*0.55)+0.5);
m.y = m.t_y;
m.x = (m.x+m.q4);
m.y = ((m.y+m.q5)+0.1);
m.v = Math.min(((m.bass*m.bass)*0.78), 1);
m.r = m.v;
m.g = m.v;
m.b = m.v;
m.a = 1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('tri_point=rand(3);\n' + 'txp1=0;\n' + 'txp2=1;\n' + 'typ1=0.2;\n' + 'typ2=0.2;\n' + 't_x=t_x+(equal(tri_point,0)*(((.5-t_x)*.5)));\n' + 't_y=t_y+(equal(tri_point,0)*(((.8-t_y)*.5)));\n' + 't_x=t_x+(equal(tri_point,1)*(((txp1-t_x)*.5)));\n' + 't_y=t_y+(equal(tri_point,1)*(((typ1-t_y)*.5)));\n' + 't_x=t_x+(equal(tri_point,2)*(((txp2-t_x)*.5)));\n' + 't_y=t_y+(equal(tri_point,2)*(((typ2-t_y)*.5)));\n' + 'x=(t_x-0.5)*0.55 + 0.5;\n' + 'y=t_y;\n' + 'x=x+q4;\n' + 'y=y+q5+0.1;\n' + 'v=min(bass*bass*0.78,1);\n' + 'r=v;\n' + 'g=v;\n' + 'b=v;\n' + 'a=1;'),

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
m.q4 = 0;
m.q5 = 0;
m.txp1 = 0;
m.typ1 = 0;
m.txp2 = 0;
m.typ2 = 0;
m.t_x = 0;
m.t_y = 0;
m.v = 0;
m.tri_point = 0;

			m.rkeys = ['t_x','t_y'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.tri_point = rand(3);
m.txp1 = 0;
m.txp2 = 1;
m.typ1 = 0.2;
m.typ2 = 0.2;
m.t_x = (m.t_x+(equal(m.tri_point, 0)*((0.5-m.t_x)*0.5)));
m.t_y = (m.t_y+(equal(m.tri_point, 0)*((0.8-m.t_y)*0.5)));
m.t_x = (m.t_x+(equal(m.tri_point, 1)*((m.txp1-m.t_x)*0.5)));
m.t_y = (m.t_y+(equal(m.tri_point, 1)*((m.typ1-m.t_y)*0.5)));
m.t_x = (m.t_x+(equal(m.tri_point, 2)*((m.txp2-m.t_x)*0.5)));
m.t_y = (m.t_y+(equal(m.tri_point, 2)*((m.typ2-m.t_y)*0.5)));
m.x = (((m.t_x-0.5)*0.55)+0.5);
m.y = m.t_y;
m.x = (m.x+m.q4);
m.y = ((m.y+m.q5)+0.1);
m.v = Math.min(((m.bass*m.bass)*0.78), 1);
m.r = m.v;
m.g = m.v;
m.b = m.v;
m.a = 1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('tri_point=rand(3);\n' + 'txp1=0;\n' + 'txp2=1;\n' + 'typ1=0.2;\n' + 'typ2=0.2;\n' + 't_x=t_x+(equal(tri_point,0)*(((.5-t_x)*.5)));\n' + 't_y=t_y+(equal(tri_point,0)*(((.8-t_y)*.5)));\n' + 't_x=t_x+(equal(tri_point,1)*(((txp1-t_x)*.5)));\n' + 't_y=t_y+(equal(tri_point,1)*(((typ1-t_y)*.5)));\n' + 't_x=t_x+(equal(tri_point,2)*(((txp2-t_x)*.5)));\n' + 't_y=t_y+(equal(tri_point,2)*(((typ2-t_y)*.5)));\n' + 'x=(t_x-0.5)*0.55 + 0.5;\n' + 'y=t_y;\n' + 'x=x+q4;\n' + 'y=y+q5+0.1;\n' + 'v=min(bass*bass*0.78,1);\n' + 'r=v;\n' + 'g=v;\n' + 'b=v;\n' + 'a=1;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 1.822124,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.880263,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.329957,
			x : 0.5,
			y : 0.4,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = 1.830;
m.a = (above(m.treb, 0.5)*0.05);
m.x = (0.5+m.q4);
m.y = ((0.4+m.q5)+0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=1.830;\n' + 'a=above(treb,0.5)*0.05;\n' + 'x=0.5+q4;\n' + 'y=0.4+q5+0.1;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 1.822124,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 2.44861,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.01,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 2.946219,
			x : 0.5,
			y : 0.39,
			ang : 1.822124,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = 1.830;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=1.830;'),

		},
		{
		'baseVals' : {
			r2 : 0.7,
			a : 1.0,
			enabled : 0.0,
			b : 0.8,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.4,
			textured : 1.0,
			g2 : 0.6,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.5,
			a2 : 0.0,
			r : 0.4,
			border_g : 1.0,
			rad : 0.808141,
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
			a : 0.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.498314,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.8,
			r : 1.0,
			border_g : 1.0,
			rad : 0.364566,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
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
	'frame_eqs_str' : ('decay=.99;\n' + 'zoom=1.00;\n' + 'basstime=basstime+(bass_att*bass_att)*0.02;\n' + 'midtime=midtime+(mid_att*mid_att)*0.01;\n' + 'qx=sin(basstime*0.2)*0.2;\n' + 'cx=0.5+qx;\n' + 'q4=qx;\n' + 'qy=sin(midtime*0.2)*0.2;\n' + 'cy=0.5-qy;\n' + 'q5=qy;\n' + 'monitor=q4;'),
	'pixel_eqs_str' : ('rd=sqrt( sqr( (x-0.5-q4)*2) + sqr( (y-0.5+q5)*1.5 ) );\n' + 'var = tan(rd*(1+(bass)));\n' + 'var = var*var;\n' + 'zm = 1+ (0.001*var)*rd;\n' + 'zm=zm*1.003;\n' + 'sx=zm;\n' + 'sy=zm;\n' + 'sx=1.005;'),
};

return pmap;
});
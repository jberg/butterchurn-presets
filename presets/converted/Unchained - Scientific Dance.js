define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.45029,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.9999,
		ob_r : 1.0,
		sy : 0.999999,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.0995,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.4,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.4999,
		echo_zoom : 0.9998,
		ob_size : 0.005,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.4999,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.499,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.95,
		wave_a : 1.254574,
		ob_g : 0.0,
		ib_a : 0.9,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 0.4999,
		rating : 5.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.grid = 0;
m.q8 = 0;
m.mod_state = 0;
m.snur = 0;
m.snee = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.q1 = Math.sin((m.time*2.13));
m.q2 = Math.sin((m.time*0.95));
m.q3 = Math.sin((m.time*1.39));
m.q4 = Math.sin((m.time*1.83));
m.mod_state = (((above(m.q1, 0)+above(m.q2, 0))+above(m.q3, 0))*(1+above(m.q4, 0)));
m.q5 = Math.sin((m.time*0.84));
m.q6 = Math.sin((m.time*1.51));
m.q7 = m.mod_state;
m.q8 = (m.mod_state*((above(m.q5, 0)+above(m.q6, 0))+1));
m.ob_r = (0.5+(0.5*Math.cos((m.q1+m.q7))));
m.ob_g = (0.5+(0.5*Math.cos(((m.q2*3.14)+m.q7))));
m.ob_b = (0.5+(0.5*Math.cos(((m.q3*2)+Math.sin((m.time*0.0816))))));
m.ib_size = (0.025+(0.02*m.q2));
m.ob_size = ((0.03+(0.02*m.q3))-(0.002*m.q7));
m.wave_r = (0.5+(0.5*Math.sin(((m.q1*m.q7)+(m.time*2.183)))));
m.wave_g = (0.5+(0.5*Math.sin(((m.q2*3)+(m.time*1.211)))));
m.wave_b = (0.5+(0.5*Math.sin((m.q3+(m.time*1.541)))));
m.ob_a = (0.8+(0.2*m.q2));
m.zoom = (0.6+(0.2*m.q2));
m.sx = (m.sx+(0.1*Math.sin((m.time*2.13))));
m.sy = (m.sy+(0.1*Math.sin((m.time*2.33))));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.snee = bnot(((above((Math.sin(m.ang)-m.x), 0.5)*above(m.q2, 0))+(above((m.y-Math.cos(m.ang)), 0.5)*above(m.q1, 0))));
m.snur = bnot(((below(m.x, 0.5)*above(m.q3, 0))+(below(m.y, 0.5)*below(m.q7, 4))));
m.grid = Math.sin((sigmoid(Math.sin(((m.y*6.28)*m.q2)), Math.sin(((m.x*6.28)*m.q6)))*(10+m.q7)));
m.rot = ((bnot((above(m.x, 0.5)+mod((m.y*m.q8),m.q7)))*Math.cos((m.rad+((3.14*ifcond(above(m.grid, 0), m.snur, bnot(m.snur)))*(0.5+(0.5*Math.sin(((m.rad*3.14)*m.q1))))))))*m.q4);
m.zoom = (m.zoom+((0.1*Math.sin((((m.rad*3.14)*m.q2)+m.q5)))*sign(m.snee)));
m.rot = ifcond(m.rot, (m.rot*sign(m.snur)), m.q6);
m.cx = ifcond((below(m.x, 0.5)*below(m.y, 0.5)), (0.5+(0.2*m.q1)), 0.5);
m.cy = ifcond((below(m.x, 0.5)*below(m.y, 0.5)), (0.5+(0.2*m.q3)), 0.5);
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
			a : 0.7,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 1.0,
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
m.q1 = 0;
m.q2 = 0;
m.q4 = 0;
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.3*m.q1));
m.y = (m.y+(0.3*m.q2));
m.rad = (2+m.q4);
m.sides = (3+mod(m.q8,7));
m.textured = mod(m.sides,2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=x+.3*q1;\n' + 'y=y+.3*q2;\n' + 'rad=2+q4;\n' + 'sides=3+(q8%7);\n' + 'textured=sides%2;'),

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
m.q1 = 0;
m.q2 = 0;
m.q5 = 0;
m.q7 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.2*m.q2));
m.y = (m.y+(0.2*m.q1));
m.rad = (0.5+(0.5*m.q5));
m.r = (0.5+Math.sin((m.time*1.32)));
m.b = (0.5+Math.sin((m.time*1.11)));
m.g = (0.5+Math.sin((m.time*1.23)));
m.sides = (3+m.q7);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=x+.2*q2;\n' + 'y=y+.2*q1;\n' + 'rad=.5+.5*q5;\n' + 'r=.5+sin(time*1.32);\n' + 'b=.5+sin(time*1.11);\n' + 'g=.5+sin(time*1.23);\n' + 'sides=3+q7;'),

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
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 0.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.3*m.q3));
m.y = (m.y+(0.3*m.q4));
m.rad = (0.3+(0.3*m.q5));
m.sides = (3+mod(m.q8,3));
m.textured = bnot(mod(m.sides,2));
m.r2 = m.q1;
m.g2 = m.q2;
m.b2 = m.q3;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=x+.3*q3;\n' + 'y=y+.3*q4;\n' + 'rad=.3+.3*q5;\n' + 'sides=3+(q8%3);\n' + 'textured=bnot(sides%2);\n' + 'r2=q1;\n' + 'g2=q2;\n' + 'b2=q3;'),

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
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.8,
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
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q5 = 0;
m.q6 = 0;
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.25*m.q5));
m.y = (m.y+(0.25*m.q1));
m.rad = (0.3+(0.2*m.q6));
m.sides = (3+mod(m.q8,5));
m.r2 = m.q2;
m.g2 = m.q3;
m.b2 = m.q1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=x+.25*q5;\n' + 'y=y+.25*q1;\n' + 'rad=.3+.2*q6;\n' + 'sides=3+(q8%5);\n' + 'r2=q2;\n' + 'g2=q3;\n' + 'b2=q1;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'q1=sin(time*2.13);\n' + 'q2=sin(time*0.95);\n' + 'q3=sin(time*1.39);\n' + 'q4=sin(time*1.83);\n' + 'mod_state=(above(q1,0)+above(q2,0)+above(q3,0))*(1+above(q4,0));\n' + 'q5=sin(time*0.84);\n' + 'q6=sin(time*1.51);\n' + 'q7=mod_state;\n' + 'q8=mod_state*(above(q5,0)+above(q6,0)+1);\n' + 'ob_r=.5+.5*cos(q1+q7);\n' + 'ob_g=.5+.5*cos(q2*3.14+q7);\n' + 'ob_b=.5+.5*cos(q3*2+sin(time*.0816));\n' + 'ib_size=.025+.02*q2;\n' + 'ob_size=.03+.02*q3-.002*q7;\n' + 'wave_r=.5+.5*sin(q1*q7+time*2.183);\n' + 'wave_g=.5+.5*sin(q2*3+time*1.211);\n' + 'wave_b=.5+.5*sin(q3+time*1.541);\n' + 'ob_a=.8+.2*q2;\n' + 'zoom=.6+.2*q2;\n' + 'sx=sx+.1*sin(time*2.13);\n' + 'sy=sy+.1*sin(time*2.33);'),
	'pixel_eqs_str' : ('snee=bnot(above(sin(ang)-x,.5)*above(q2,0)+above(y-cos(ang),.5)*above(q1,0));\n' + 'snur=bnot(below(x,.5)*above(q3,0)+below(y,.5)*below(q7,4));\n' + 'grid=sin(sigmoid(sin(y*6.28*q2),sin(x*6.28*q6))*(10+q7));\n' + 'rot=bnot(above(x,.5)+((y*q8)%q7))*cos(rad+3.14*if(above(grid,0),snur,bnot(snur))*(.5+.5*sin(rad*3.14*q1)))*q4;\n' + 'zoom=zoom+.1*sin(rad*3.14*q2+q5)*sign(snee);\n' + 'rot=if(rot,rot*sign(snur),q6);\n' + 'cx=if(below(x,.5)*below(y,.5),.5+.2*q1,.5);\n' + 'cy=if(below(x,.5)*below(y,.5),.5+.2*q3,.5);'),
};

return pmap;
});
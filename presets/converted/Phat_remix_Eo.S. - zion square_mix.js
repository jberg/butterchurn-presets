define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 1.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 0.591236,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 0.999998,
		ib_size : 0.015,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.12,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 1.0,
		mv_b : 0.5999,
		echo_zoom : 1.001827,
		ob_size : 0.005,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.8,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.2,
		invert : 1.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 2.0,
		wave_mystery : -0.25,
		decay : 0.98,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.59,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 1.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.dmt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 1;
m.ib_r = (1-(((Math.sin(m.time)*0.5)+0.5)*0.435));
m.ib_g = (1-(((Math.cos(m.time)*0.5)+0.5)*0.435));
m.rot = 0.01;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dmt = (20+((div(((m.bass*m.bass)*m.bass),3)*8)*above(m.bass, 1.1)));
m.zoom = (1+((div(Math.sin(((m.x*m.dmt)+Math.sin(m.time))),28)+div(Math.cos(((m.y*m.dmt)+Math.cos(m.time))),28))*0.4));
m.dx = (m.rad*0.01);
m.dy = (m.rad*0.01);
m.dx = (m.dx+(above(m.bass, 0.9)*0.002));
m.dy = (m.dy+(above(m.bass, 0.9)*0.002));
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
			a : 0.07,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 5.654867,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.06,
			r : 1.0,
			border_g : 1.0,
			rad : 0.808141,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 26.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = Math.sin(div(m.time,2));
m.r2 = (0+(((Math.sin(m.time)*0.5)+0.5)*0.2));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=sin(time/2);\n' + 'r2=0+((sin(time)*0.5+0.5)*0.2);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 6.283185,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.819544,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.89269,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 26.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.var = 0;
m.angvar = 0;
m.alpha = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = ((m.bass*0.4)*above(m.bass, 0.9));
m.angvar = above(m.bass, 0.9);
m.x = ifcond(((m.angvar-0.3)+(((Math.sin(m.time)*0.5)+0.5)*0.1)), (0.5+(((Math.sin(m.time)*0.5)+0.5)*0.03)), 0.5);
m.y = ifcond(((m.angvar-0.3)+(((Math.sin(m.time)*0.5)+0.5)*0.1)), (0.5+(((Math.sin(m.time)*0.5)+0.5)*0.03)), 0.5);
m.var = (Math.sin(div(m.time,2))*0.01);
m.var = ((m.var+above(m.bass, 0.9))*0.1);
m.alpha = ((m.bass*0.8)-(below(m.bass, 0.4)*0.4));
m.r = (1-(m.var*3));
m.g = (1-m.var);
m.b = (1-(m.var*3.5));
m.r2 = (1-(m.var*2));
m.g2 = m.g;
m.b2 = m.b;
m.a = (m.alpha*0.9);
m.a2 = (m.alpha*0.9);
m.border_a = 0;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=(bass*0.4)*above(bass,0.9);\n' + 'angvar=above(bass,0.9);\n' + 'x=if((angvar-0.3)+((sin(time)*0.5+0.5)*0.1),0.5+((sin(time)*0.5+0.5)*0.03),0.5);\n' + 'y=if((angvar-0.3)+((sin(time)*0.5+0.5)*0.1),0.5+((sin(time)*0.5+0.5)*0.03),0.5);\n' + 'var=sin(time/2)*0.01;\n' + 'var=((var+above(bass,0.9))*0.1);\n' + 'alpha=bass*0.8-(below(bass,0.4)*0.4);\n' + 'r=1-var*3;\n' + 'g=1-var;\n' + 'b=1-var*3.5;\n' + 'r2=1-var*2;\n' + 'g2=g;\n' + 'b2=b;\n' + 'a=alpha*0.9;\n' + 'a2=alpha*0.9;\n' + 'border_a=0;'),

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
			a2 : 0.4,
			r : 1.0,
			border_g : 1.0,
			rad : 0.298779,
			x : 0.0,
			y : 1.0,
			ang : 0.0,
			sides : 34.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (1-(Math.sin(m.time)*0.3));
m.g2 = (1-(Math.cos(m.time)*0.3));
m.x = (((Math.sin(m.time)*0.5)+0.5)+0.01);
m.y = (((Math.cos(m.time)*0.5)+0.5)+0.01);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=1-(sin(time)*0.3);\n' + 'g2=1-(cos(time)*0.3);\n' + 'x=(sin(time)*0.5+0.5)+0.01;\n' + 'y=(cos(time)*0.5+0.5)+0.01;'),

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
	'frame_eqs_str' : ('warp=1;\n' + 'ib_r=1-((sin(time)*0.5+0.5)*0.435);\n' + 'ib_g=1-((cos(time)*0.5+0.5)*0.435);\n' + 'rot=0.01;'),
	'pixel_eqs_str' : ('dmt=20+((((bass*bass*bass)/3)*8)*above(bass,1.1));\n' + 'zoom=1+(( (sin( (x*dmt)+sin(time)  )/28) + (cos( (y*dmt)+cos(time) )/28) ) *0.4   );\n' + 'dx=rad*0.01;\n' + 'dy=rad*0.01;\n' + 'dx=dx+(above(bass,0.9)*0.002);\n' + 'dy=dy+(above(bass,0.9)*0.002);'),
};

return pmap;
});
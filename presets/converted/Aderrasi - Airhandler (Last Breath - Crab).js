define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.28,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 4.778029,
		echo_alpha : 0.3,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.0101,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 0.999996,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.005956,
		ob_size : 0.005,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99951,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.1,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.690724,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 3.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.dx_r = 0;
m.dy_r = 0;
m.ocog = 0;
m.cog = 0;
m.thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.5*Math.sin((m.time*1.13))));
m.wave_g = (m.wave_g+(0.5*Math.sin((m.time*1.23))));
m.wave_b = (m.wave_b+(0.5*Math.sin((m.time*1.33))));
m.wave_x = (m.wave_x+(0.2*Math.sin((0.32*m.time))));
m.wave_y = (m.wave_y+(0.2*Math.cos((0.32*m.time))));
m.ob_r = m.wave_r;
m.ob_g = m.wave_g;
m.ob_b = m.wave_b;
m.q1 = m.ob_r;
m.q2 = m.ob_g;
m.q3 = m.ob_b;
m.cog = (m.ocog+(0.005*(((m.bass+m.bass_att)+(m.bass*m.bass_att))-2)));
m.ocog = (below(m.cog, 30000)*m.cog);
m.q4 = m.cog;
		m.rkeys = ['dy','dx','sy','sx','rot','zoom','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.zoom = (m.zoom+(0.0095*((Math.sin((10*m.ang))+(Math.sin(Math.sin((((m.time*2)*Math.sin(m.time))*m.rad)))*0.3))-(Math.cos(m.rad)*0.1))));
m.rot = (m.rot+((0.08*Math.abs((0.746-m.rad)))*Math.sin(((2.2*(0.5-m.rad))+(5.7*Math.sin((0.1*m.time)))))));
m.sx = (m.sx+(((0.01*((0.99*1)-m.rad))*Math.sin((0.733*m.time)))*below(Math.sin(m.time), 0)));
m.sy = (m.sy+(((0.01*((0.99*1)-m.rad))*Math.cos((0.953*m.time)))*above(Math.sin(m.time), 0)));
m.zoom = (m.zoom-((0.015*((0.5*Math.abs(3))-m.rad))*below(m.rad, 1.5)));
m.dx = (m.dx+m.dx_r);
m.dy = (m.dy+m.dy_r);
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
			a : 0.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.628319,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.498313,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.625314,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.t1 = 0;
m.t2 = 0;
m.t1 = (Math.floor(rand(100))*0.01);
m.t2 = (Math.floor(rand(100))*0.01);
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.2*Math.sin((5*m.q4))));
m.y = (m.y+(0.2*Math.cos((5*m.q4))));
m.ang = ((4*m.time)*(0.3+(0.1*m.t1)));
m.rad = (m.rad*(0.9+(0.2*m.t2)));
		return m;
	},
		'init_eqs_str' : ('t1 = int(rand(100))*0.01;\n' + 't2 = int(rand(100))*0.01;'),
		'frame_eqs_str' : ('x = x+0.2*sin(5*q4);\n' + 'y = y+0.2*cos(5*q4);\n' + 'ang = 4*time*(0.3 + 0.1*t1);\n' + 'rad = rad * (0.9 + 0.2*t2);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.6,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.905287,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.706533,
			x : 0.37,
			y : 0.5,
			ang : 3.644249,
			sides : 50.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.t1 = 0;
m.t2 = 0;
m.t1 = (Math.floor(rand(100))*0.01);
m.t2 = (Math.floor(rand(100))*0.01);
			m.rkeys = ['r2','g2','b2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.05*Math.sin(((m.time*1.05)+3))));
m.y = (m.y+(0.03*Math.sin(((m.time*1.29)+1))));
m.ang = (m.time*(0.1+(0.1*m.t1)));
m.rad = (m.rad*(0.9+(0.2*m.t2)));
m.r = m.q1;
m.g = m.q3;
m.b = m.q2;
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.1*Math.sin(((m.time*0.457)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.1*Math.sin(((m.time*0.437)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.1*Math.sin(((m.time*0.484)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = int(rand(100))*0.01;\n' + 't2 = int(rand(100))*0.01;'),
		'frame_eqs_str' : ('x = x + 0.05*sin(time*1.05+3);\n' + 'y = y + 0.03*sin(time*1.29+1);\n' + 'ang = time*(0.1 + 0.1*t1);\n' + 'rad = rad * (0.9 + 0.2*t2);\n' + 'r=q1;\n' + 'g=q3;\n' + 'b=q2;\n' + 'r2 = min(1,max(0,r2 + 0.1*sin(time*0.457 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.1*sin(time*0.437 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.1*sin(time*0.484 + 6)));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.4,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.905287,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.706533,
			x : 0.67,
			y : 0.43,
			ang : 4.209736,
			sides : 50.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.t1 = 0;
m.t2 = 0;
m.t1 = (Math.floor(rand(100))*0.01);
m.t2 = (Math.floor(rand(100))*0.01);
			m.rkeys = ['r2','g2','b2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.05*Math.sin((m.time*0.17))));
m.y = (m.y+(0.03*Math.sin((m.time*0.83))));
m.ang = (m.time*(0.2+(0.1*m.t1)));
m.rad = (m.rad*(0.9+(0.2*m.t2)));
m.r = m.q3;
m.g = m.q1;
m.b = m.q2;
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.1*Math.sin(((m.time*0.457)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.1*Math.sin(((m.time*0.437)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.1*Math.sin(((m.time*0.484)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = int(rand(100))*0.01;\n' + 't2 = int(rand(100))*0.01;'),
		'frame_eqs_str' : ('x = x + 0.05*sin(time*0.17);\n' + 'y = y + 0.03*sin(time*0.83);\n' + 'ang = time*(0.2 + 0.1*t1);\n' + 'rad = rad * (0.9 + 0.2*t2);\n' + 'r = q3;\n' + 'g = q1;\n' + 'b = q2;\n' + 'r2 = min(1,max(0,r2 + 0.1*sin(time*0.457 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.1*sin(time*0.437 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.1*sin(time*0.484 + 6)));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.9,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 1.256637,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.850127,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.59123,
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
m.x = (m.x+(0.2*Math.sin((m.time*0.25))));
m.y = (m.y+(0.1*Math.sin(((m.time*0.5)+2))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = x + 0.2*sin(time*0.25);\n' + 'y = y + 0.1*sin(time*0.5+2);'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.5*sin(time*1.13);\n' + 'wave_g = wave_g + 0.5*sin(time*1.23);\n' + 'wave_b = wave_b + 0.5*sin(time*1.33);\n' + 'wave_x = wave_x + 0.2*sin(0.32*time);\n' + 'wave_y = wave_y + 0.2*cos(0.32*time);\n' + 'ob_r = wave_r;\n' + 'ob_g = wave_g;\n' + 'ob_b = wave_b;\n' + 'q1 = ob_r;\n' + 'q2 = ob_g;\n' + 'q3 = ob_b;\n' + 'cog = ocog+0.005*(bass+bass_att+(bass*bass_att)-2);\n' + 'ocog = below(cog,30000)*cog;\n' + 'q4 = cog;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'zoom = zoom + 0.0095*(sin(10*ang) + sin(sin(time*2*sin(time)*rad))*0.3 - cos(rad)*0.1);\n' + 'rot = rot + 0.08*abs(0.746-rad)*sin(2.2*(0.5-rad)+5.7*sin(0.1*time));\n' + 'sx = sx + 0.01*(0.99*1-rad)*sin(0.733*time)*below(sin(time),0);\n' + 'sy = sy + 0.01*(0.99*1-rad)*cos(0.953*time)*above(sin(time),0);\n' + 'zoom = zoom - 0.015*(0.5*abs(3)-rad)*below(rad,1.5);\n' + 'dx = dx + dx_r;\n' + 'dy = dy + dy_r;'),
};

return pmap;
});
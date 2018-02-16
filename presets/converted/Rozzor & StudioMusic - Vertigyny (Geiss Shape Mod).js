define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.09,
		ib_g : 0.25,
		mv_x : 5.120042,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 5.088,
		wave_scale : 0.9351,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.02,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.854653,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0E-6,
		wave_r : 0.09,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 0.999997,
		ob_size : 0.005,
		wave_smoothing : 0.306,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.97,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.02,
		mv_l : 0.899999,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : -0.36,
		decay : 0.997,
		wave_a : 98.02961,
		ob_g : 0.02,
		ib_a : 0.97,
		wave_b : 0.09,
		ib_b : 0.25,
		mv_r : 0.8,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.ff = 0;
m.q1 = 0;
m.q2 = 0;
m.vol_now = 0;
m.greenneg = 0;
m.slowtime = 0;
m.vol_mean = 0;
m.blueneg = 0;
m.beat = 0;
m.redneg = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.slowtime = (m.slowtime+(m.beat*m.time));
m.vol_now = ((0.4*m.bass)+(0.1*((m.bass_att+m.treb)+m.mid)));
m.vol_mean = ifcond(equal(mod(m.frame,50), 0), (m.vol_mean-(0.5*(m.vol_mean-m.vol_now))), (0.1*((m.vol_mean*9)+m.vol_now)));
m.beat = ifcond(above(m.vol_now, (1.5*m.vol_mean)), 1, 0);
m.ib_r = Math.sin(Math.cos((m.slowtime*0.235)));
m.ib_g = Math.sin(Math.cos((m.slowtime*0.335)));
m.ib_b = Math.sin(Math.cos((m.slowtime*0.435)));
m.redneg = ifcond(below(m.ib_r, 0), 1, 0);
m.greenneg = ifcond(below(m.ib_g, 0), 1, 0);
m.blueneg = ifcond(below(m.ib_b, 0), 1, 0);
m.ib_r = (1-ifcond(m.redneg, ifcond(bor(m.greenneg, m.blueneg), 1, (1+m.ib_r)), m.ib_r));
m.ib_g = (1-ifcond(m.greenneg, ifcond(equal((m.greenneg+m.blueneg), 2), 1, (1+m.ib_g)), m.ib_g));
m.ib_b = (1-ifcond(m.blueneg, (1+m.ib_b), m.ib_b));
m.ff = div(m.slowtime,100);
m.wave_r = (div(Math.sin(div((5*m.ff),m.bass)),2)+0.5);
m.wave_g = (div(Math.cos(div(m.ff,m.mid)),2)+0.5);
m.wave_b = (div(Math.cos(div((3*m.ff),m.treb)),2)+0.5);
m.rot = (m.rot+(0.040*((0.60*Math.sin((0.381*m.slowtime)))+(0.40*Math.sin((0.579*m.slowtime))))));
m.zoom = Math.max(0.97, Math.min((0.15+(0.7*m.bass_att)), 1.75));
m.ob_r = Math.sin((m.beat*Math.cos((m.slowtime*0.735))));
m.ob_g = Math.sin((m.bass*Math.cos((m.slowtime*0.635))));
m.ob_b = Math.sin((m.bass*Math.cos((m.slowtime*0.535))));
m.redneg = ifcond(below(m.ob_r, 0), 1, 0);
m.greenneg = ifcond(below(m.ob_g, 0), 1, 0);
m.blueneg = ifcond(below(m.ob_b, 0), 1, 0);
m.ob_r = (1-ifcond(m.redneg, ifcond(bor(m.greenneg, m.blueneg), 1, (1+m.ob_r)), m.ob_r));
m.ob_g = (1-ifcond(m.greenneg, ifcond(equal((m.greenneg+m.blueneg), 2), 1, (1+m.ob_g)), m.ob_g));
m.ob_b = (1-ifcond(m.blueneg, (1+m.ob_b), m.ob_b));
m.q1 = Math.sin(m.slowtime);
		m.rkeys = ['warp','zoom','rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.q2 = above(m.rad, 0.603);
m.rot = (m.rot+ifcond(m.q2, 0, (Math.sin((m.time*0.7243))*0.5)));
m.zoom = (m.zoom+ifcond(m.q2, 0, ((m.rad*Math.sin((m.time*0.734)))*0.8)));
m.warp = (m.warp+ifcond(above(m.rad, 0.2166), Math.sin((m.ang*m.rad)), 0));
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
			enabled : 1.0,
			b : 1.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
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
			b : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			g2 : 1.0,
			additive : 0.0,
			border_a : 0.4,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.25,
			x : 0.0,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*1.4);
m.x = ((0.5+(0.08*Math.cos((m.time*1.1))))+((0.03*Math.cos((m.time*0.7)))*0.5));
m.y = ((m.q1+(0.02*Math.sin((m.time*1.3))))+((0.04*Math.sin((m.time*0.2)))*0.5));
m.r = (0.5+((0.5*Math.sin(((m.time*0.713)+1)))*0.5));
m.g = (0.5+((0.5*Math.sin(((m.time*0.563)+2)))*0.5));
m.b = (0.5+((0.5*Math.sin(((m.time*0.654)+5)))*0.5));
m.r2 = (0.5+((0.5*Math.sin(((m.time*0.885)+4)))*0.5));
m.g2 = (0.5+((0.5*Math.sin(((m.time*0.556)+1)))*0.5));
m.b2 = (0.5+((0.5*Math.sin(((m.time*0.638)+3)))*0.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time*1.4;\n' + 'x = 0.5 + 0.08*cos(time*1.1) + 0.03*cos(time*0.7)*.5;\n' + 'y = q1 + 0.02*sin(time*1.3) + 0.04*sin(time*0.2)*.5;\n' + 'r = 0.5 + 0.5*sin(time*0.713 + 1)*.5;\n' + 'g = 0.5 + 0.5*sin(time*0.563 + 2)*.5;\n' + 'b = 0.5 + 0.5*sin(time*0.654 + 5)*.5;\n' + 'r2 = 0.5 + 0.5*sin(time*0.885 + 4)*.5;\n' + 'g2 = 0.5 + 0.5*sin(time*0.556+ 1)*.5;\n' + 'b2 = 0.5 + 0.5*sin(time*0.638 + 3)*.5;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			g2 : 1.0,
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
			thickoutline : 0.0,
			g : 0.0,
			g2 : 1.0,
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
	'frame_eqs_str' : ('slowtime = slowtime+beat*time;\n' + 'vol_now =  .4 * bass + 0.1 * (bass_att+treb+mid);\n' + 'vol_mean =  if(equal(frame%50,0),vol_mean-0.5*(vol_mean-vol_now),0.1*(vol_mean*9 + vol_now));\n' + 'beat = if(above(vol_now,1.5*vol_mean),1,0);\n' + 'ib_r=sin(cos(slowtime*0.235));\n' + 'ib_g=sin(cos(slowtime*0.335));\n' + 'ib_b=sin(cos(slowtime*0.435));\n' + 'redneg = if(below(ib_r,0),1,0);\n' + 'greenneg = if(below(ib_g,0),1,0);\n' + 'blueneg = if(below(ib_b,0),1,0);\n' + 'ib_r = 1 - (if(redneg,if(bor(greenneg , blueneg),1,1+ib_r),ib_r));\n' + 'ib_g = 1 - (if(greenneg,if(equal(greenneg + blueneg,2),1,1+ib_g),ib_g));\n' + 'ib_b =1 -  (if(blueneg,1 + ib_b, ib_b));\n' + 'ff = slowtime/100;\n' + 'wave_r = sin(5*ff/bass)/2+0.5;\n' + 'wave_g = cos(ff/mid)/2+0.5;\n' + 'wave_b = cos(3*ff/treb)/2+0.5;\n' + 'rot = rot + 0.040*( 0.60*sin(0.381*slowtime) + 0.40*sin(0.579*slowtime) );\n' + 'zoom=max(0.97, min(0.15+0.7*bass_att, 1.75 ));\n' + 'ob_r=sin(beat*cos(slowtime*0.735));\n' + 'ob_g=sin(bass*cos(slowtime*0.635));\n' + 'ob_b=sin(bass*cos(slowtime*0.535));\n' + 'redneg = if(below(ob_r,0),1,0);\n' + 'greenneg = if(below(ob_g,0),1,0);\n' + 'blueneg = if(below(ob_b,0),1,0);\n' + 'ob_r = 1 - (if(redneg,if(bor(greenneg , blueneg),1,1+ob_r),ob_r));\n' + 'ob_g = 1 - (if(greenneg,if(equal(greenneg + blueneg,2),1,1+ob_g),ob_g));\n' + 'ob_b =1 -  (if(blueneg,1 + ob_b, ob_b));\n' + 'q1 = sin(slowtime);'),
	'pixel_eqs_str' : ('q2=above(rad,.603);\n' + 'rot=rot+if(q2,0,sin(time*.7243)*.5);\n' + 'zoom=zoom+if(q2,0,rad*sin(time*.734)*.8);\n' + 'warp=warp+if(above(rad,.2166),sin(ang*rad),0);'),
};

return pmap;
});
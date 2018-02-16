define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 6.6,
		wave_g : 0.8,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.6,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 4.57482,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.8,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 1.0,
		ob_size : 0.05,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.00778,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.5,
		invert : 0.0,
		rot : 0.02,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.16,
		decay : 1.0,
		wave_a : 2.125,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.6,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.0,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.volsine = 0;
m.asepctx = 0;
m.asepcty = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.85;
m.echo_alpha = (0.5+(0.1*Math.sin((m.time*0.922))));
m.zoom = (1.0+((above(m.bass_att, 1)*0.01)*Math.sin(m.time)));
m.wave_r = (0.75+(0.25*Math.sin(m.time)));
m.wave_g = (0.75+(0.25*Math.sin((m.time*0.882))));
m.wave_b = (0.5+(0.25*Math.sin((m.time*1.347))));
m.wave_mystery = ((m.wave_mystery*m.asepctx)*m.asepcty);
		m.rkeys = ['sx','sy','rot','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.volsine = ((((m.bass+m.mid)+m.treb)*0.05)*Math.sin((m.time*(((0.1*m.bass)+(0.1*m.mid))+(0.1*m.treb)))));
m.zoom = (m.zoom-((below(m.rad, 0.3)*1)*m.volsine));
m.zoom = (m.zoom+((0.25*Math.sin((m.rad*0.38)))*above(m.rad, 0.48)));
m.rot = (m.rot+((0.08*Math.sin(((m.rad*12)+m.time)))*Math.cos(((m.time*0.11)+(m.time*0.233)))));
m.sy = (m.sy+((below(m.rad, 0.4)*0.019)*Math.sin((m.time*0.5))));
m.sx = (m.sx+((below(m.rad, 0.4)*0.019)*Math.sin((m.time*0.46))));
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.40271,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.greenif = 0;
m.bluesine = 0;
m.redif = 0;
m.greensine = 0;
m.vol = 0;
m.blueif = 0;
m.redsine = 0;

			m.rkeys = ['greenif','redif','blueif'];
			return m;
		},
		'frame_eqs' : function(m) {
m.vol = (((m.bass+m.mid)+m.treb_att)*0.3333);
m.redsine = (0.5+((0.15*m.bass)*Math.sin((m.time*3))));
m.greensine = (0.5+((0.15*m.mid)*Math.sin((m.time*2))));
m.bluesine = (0.5+((0.15*m.treb)*Math.sin(m.time)));
m.redif = ifcond(above(m.bass, 1.2), m.redsine, ifcond(above(m.redif, 0.95), 0, (m.redif*0.85)));
m.greenif = ifcond(above(m.mid, 1.2), m.greensine, ifcond(above(m.greenif, 0.95), 0, (m.greenif*0.85)));
m.blueif = ifcond(above(m.treb, 1.2), m.bluesine, ifcond(above(m.blueif, 0.95), 0, (m.blueif*0.85)));
m.r = m.redif;
m.g = m.greenif;
m.b = m.blueif;
m.r2 = Math.sin((m.time*0.47));
m.g2 = Math.sin((m.time*0.72));
m.b2 = Math.sin((m.time*0.33));
m.tex_ang = (3.14+(3.14*Math.sin((m.time*0.42))));
m.ang = (3.14+(3.14*Math.sin((m.time*0.55))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('vol=(bass+mid+treb_att)*.3333;\n' + 'redsine=.5+.15*bass*sin(time*3);\n' + 'greensine=.5+.15*mid*sin(time*2);\n' + 'bluesine=.5+.15*treb*sin(time);\n' + 'redif=if(above(bass,1.2),redsine,if(above(redif,.95),0,redif*.85));\n' + 'greenif=if(above(mid,1.2),greensine,if(above(greenif,.95),0,greenif*.85));\n' + 'blueif=if(above(treb,1.2),bluesine,if(above(blueif,.95),0,blueif*.85));\n' + 'r=redif;\n' + 'g=greenif;\n' + 'b=blueif;\n' + 'r2=sin(time*.47);\n' + 'g2=sin(time*.72);\n' + 'b2=sin(time*.33);\n' + 'tex_ang=3.14+3.14*sin(time*.42);\n' + 'ang=3.14+3.14*sin(time*.55);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.7,
			enabled : 0.0,
			b : 0.1,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
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
m.vol = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (rand(10)*0.1);
m.y = (rand(10)*0.1);
m.vol = (((m.bass+m.mid)+m.treb)*0.3333);
m.textured = above(m.vol, 1.4);
m.r = ifcond(above((m.bass*2), (m.mid+m.treb)), 0.4, 0);
m.g = ifcond(above((m.mid*2), (m.treb+m.bass)), 0.6, 0);
m.b = ifcond(above((m.treb*2), (m.bass+m.mid)), 0.9, 0);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=rand(10)*.1;\n' + 'y=rand(10)*.1;\n' + 'vol=(bass+mid+treb)*.3333;\n' + 'textured=above(vol,1.4);\n' + 'r=if(above(bass*2,mid+treb),.4,0);\n' + 'g=if(above(mid*2,treb+bass),.6,0);\n' + 'b=if(above(treb*2,bass+mid),.9,0);'),

		},
		{
		'baseVals' : {
			r2 : 0.1,
			a : 1.0,
			enabled : 0.0,
			b : 0.1,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.1,
			textured : 1.0,
			g2 : 0.1,
			tex_zoom : 0.55044,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.1,
			a2 : 0.0,
			r : 0.1,
			border_g : 1.0,
			rad : 1.7914,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.additive = above(m.bass, 0.55);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('additive=above(bass,.55);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
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
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('decay=.85;\n' + 'echo_alpha=.5+.1*sin(time*.922);\n' + 'zoom=1.0+(above(bass_att,1)*.01*sin(time));\n' + 'wave_r=.75+.25*sin(time);\n' + 'wave_g=.75+.25*sin(time*.882);\n' + 'wave_b=.5+.25*sin(time*1.347);\n' + 'wave_mystery=wave_mystery*asepctx*asepcty;'),
	'pixel_eqs_str' : ('volsine=(bass+mid+treb)*.05*sin(time*(.1*bass+.1*mid+.1*treb));\n' + 'zoom=zoom-below(rad,.3)*1*volsine;\n' + 'zoom=zoom+.25*sin(rad*.38)*above(rad,.48);\n' + 'rot=rot+.08*sin(rad*12+time)*cos(time*.11+time*.233);\n' + 'sy=sy+below(rad,.4)*.019*sin(time*.5);\n' + 'sx=sx+below(rad,.4)*.019*sin(time*.46);'),
};

return pmap;
});
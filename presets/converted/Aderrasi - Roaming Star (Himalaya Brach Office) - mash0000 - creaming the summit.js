define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.325,
		echo_alpha : 1.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 1.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.8,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.5,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.tg3 = 0;
m.rg5 = 0;
m.treb_thresh = 0;
m.q1 = 0;
m.rg6 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.dx_r = 0;
m.vol_thresh = 0;
m.dy_r = 0;
m.ocog = 0;
m.pfthresh = 0;
m.mid_mid_att = 0;
m.mid_thresh = 0;
m.cog = 0;
m.thresh = 0;
m.rg1 = 0;
m.rg2 = 0;
m.pfdx_r = 0;
m.tg1 = 0;
m.rg3 = 0;
m.pfdy_r = 0;
m.tg2 = 0;
m.rg4 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.3)*0.96)+1.3)));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_mid_att, m.mid_thresh))*(((m.mid_thresh-1.3)*0.96)+1.3)));
m.vol_thresh = div(((m.pfthresh+m.treb_thresh)+m.mid_thresh),3);
m.q6 = m.vol_thresh;
m.q7 = m.treb_thresh;
m.q8 = m.mid_thresh;
m.wave_r = (0.65+(0.5*Math.sin((m.time*1.13))));
m.wave_g = (0.65+(0.5*Math.sin((m.time*1.23))));
m.wave_b = (0.65+(0.5*Math.sin((m.time*1.33))));
m.warp = 0;
m.pfthresh = ((above(m.bass_att, m.pfthresh)*2)+((1-above(m.bass_att, m.pfthresh))*(((m.pfthresh-1.3)*0.96)+1.3)));
m.pfdx_r = (((equal(m.pfthresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.pfthresh, 2))*m.pfdx_r));
m.pfdy_r = (((equal(m.pfthresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.pfthresh, 2))*m.pfdy_r));
m.rg1 = Math.abs(Math.sin(m.time));
m.rg2 = ((((0*above(m.rg1, 0.75))+(3*below(m.rg1, 0.25)))+((1*above(m.rg1, 0.25))*below(m.rg1, 0.5)))+((2*above(m.rg1, 0.5))*below(m.rg1, 0.75)));
m.rg3 = ifcond(equal(m.pfthresh, 2), m.rg2, m.rg3);
m.rg4 = Math.abs((1.2*Math.sin((1.42*m.time))));
m.rg5 = Math.min(Math.max(0.1, (0.75*Math.sin((1.42*m.time)))), 0.25);
m.rg6 = ifcond(equal(m.pfthresh, 2), m.rg5, m.rg6);
m.q1 = m.wave_r;
m.q2 = m.wave_g;
m.q3 = m.wave_b;
m.wave_x = (m.wave_x+(0.32*Math.sin((0.41*m.time))));
m.wave_y = ((m.wave_y+(0.152*Math.cos((0.42*m.time))))+(0.18*Math.cos((0.04*m.time))));
m.cog = (m.ocog+(0.025*(((m.bass+m.bass_att)+(m.bass*m.bass_att))-2)));
m.ocog = (below(m.cog, 3000)*m.cog);
m.q4 = m.cog;
m.monitor = m.q4;
		m.rkeys = ['tg3','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.tg1 = Math.abs(Math.sin(m.time));
m.tg2 = (((12*m.dx_r)*above(m.tg1, 0.5))+((12*m.dy_r)*below(m.tg1, 0.5)));
m.tg3 = ifcond(equal(m.thresh, 2), m.tg2, m.tg3);
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
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.36971,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.49138,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.sg4 = 0;
m.q1 = 0;
m.sg5 = 0;
m.q2 = 0;
m.sg6 = 0;
m.q3 = 0;
m.q4 = 0;
m.shpt = 0;
m.sdx_r = 0;
m.sdy_r = 0;
m.sg1 = 0;
m.sg2 = 0;
m.sg3 = 0;

			m.rkeys = ['sg6','shpt','sdx_r','sdy_r','sg3'];
			return m;
		},
		'frame_eqs' : function(m) {
m.shpt = ((above(m.bass_att, m.shpt)*2)+((1-above(m.bass_att, m.shpt))*(((m.shpt-1.3)*0.96)+1.3)));
m.sdx_r = (((equal(m.shpt, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.shpt, 2))*m.sdx_r));
m.sdy_r = (((equal(m.shpt, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.shpt, 2))*m.sdy_r));
m.sg1 = Math.abs(Math.sin(m.time));
m.sg2 = (((12*m.sdx_r)*above(m.sg1, 0.5))+((12*m.sdy_r)*below(m.sg1, 0.5)));
m.sg3 = ifcond(equal(m.shpt, 2), m.sg2, m.sg3);
m.sg4 = Math.abs((1.2*Math.sin((0.85*m.time))));
m.sg5 = ((0*above(m.sg4, 0.8))+(1*below(m.sg4, 0.8)));
m.sg6 = ifcond(equal(m.shpt, 2), m.sg5, m.sg6);
m.textured = m.sg6;
m.r = m.q1;
m.b = m.q2;
m.g = m.q3;
m.r2 = m.q2;
m.g2 = m.q1;
m.b2 = m.q3;
m.border_r = 1;
m.border_b = 0;
m.border_g = (0.5+(0.5*Math.sin((3*m.time))));
m.ang = m.q4;
m.rad = (m.rad-m.sg3);
m.x = (m.x+(0.32*Math.sin((0.41*m.time))));
m.y = ((m.y+(0.152*Math.cos((0.42*m.time))))+(0.18*Math.cos((0.04*m.time))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('shpt = above(bass_att,shpt)*2+(1-above(bass_att,shpt))*((shpt-1.3)*0.96+1.3);\n' + 'sdx_r = equal(shpt,2)*0.015*sin(5*time)+(1-equal(shpt,2))*sdx_r;\n' + 'sdy_r = equal(shpt,2)*0.015*sin(6*time)+(1-equal(shpt,2))*sdy_r;\n' + 'sg1 = abs(sin(time));\n' + 'sg2 = 12*sdx_r*above(sg1,0.5) + 12*sdy_r*below(sg1,0.5);\n' + 'sg3 = if(equal(shpt,2),sg2,sg3);\n' + 'sg4 = abs(1.2*sin(0.85*time));\n' + 'sg5 = 0*above(sg4,0.8) + 1*below(sg4,0.8);\n' + 'sg6 = if(equal(shpt,2),sg5,sg6);\n' + 'textured = sg6;\n' + 'r = q1;\n' + 'b = q2;\n' + 'g = q3;\n' + 'r2 = q2;\n' + 'g2 = q1;\n' + 'b2 = q3;\n' + 'border_r = 1;\n' + 'border_b = 0;\n' + 'border_g = 0.5 + 0.5*sin(3*time);\n' + 'ang = q4;\n' + 'rad = rad-sg3;\n' + 'x = x + 0.32*sin(0.41*time);\n' + 'y = y + 0.152*cos(0.42*time) + 0.18*cos(0.04*time);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.60804,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.49138,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.sg4 = 0;
m.q1 = 0;
m.sg5 = 0;
m.q2 = 0;
m.sg6 = 0;
m.q3 = 0;
m.q4 = 0;
m.shpt = 0;
m.sdx_r = 0;
m.sdy_r = 0;
m.sg1 = 0;
m.sg2 = 0;
m.sg3 = 0;

			m.rkeys = ['sg6','shpt','sdx_r','sdy_r','sg3'];
			return m;
		},
		'frame_eqs' : function(m) {
m.shpt = ((above(m.bass_att, m.shpt)*2)+((1-above(m.bass_att, m.shpt))*(((m.shpt-1.3)*0.96)+1.3)));
m.sdx_r = (((equal(m.shpt, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.shpt, 2))*m.sdx_r));
m.sdy_r = (((equal(m.shpt, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.shpt, 2))*m.sdy_r));
m.sg1 = Math.abs(Math.sin(m.time));
m.sg2 = (((12*m.sdx_r)*above(m.sg1, 0.5))+((12*m.sdy_r)*below(m.sg1, 0.5)));
m.sg3 = ifcond(equal(m.shpt, 2), m.sg2, m.sg3);
m.sg4 = Math.abs((1.5*Math.sin((1.85*m.time))));
m.sg5 = ((0*above(m.sg4, 1))+(1*below(m.sg4, 1)));
m.sg6 = ifcond(equal(m.shpt, 2), m.sg5, m.sg6);
m.textured = m.sg6;
m.r = m.q2;
m.b = m.q1;
m.g = m.q3;
m.r2 = m.q3;
m.g2 = m.q2;
m.b2 = m.q1;
m.border_r = (1-((0.5*m.q1)+(0.5*m.q2)));
m.border_b = (1-((0.5*m.q2)+(0.5*m.q3)));
m.border_g = (1-((0.5*m.q3)+(0.5*m.q1)));
m.ang = (-m.q4+1);
m.rad = (m.rad+m.sg3);
m.x = (m.x+(0.32*Math.sin((0.41*m.time))));
m.y = ((m.y+(0.152*Math.cos((0.42*m.time))))+(0.18*Math.cos((0.04*m.time))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('shpt = above(bass_att,shpt)*2+(1-above(bass_att,shpt))*((shpt-1.3)*0.96+1.3);\n' + 'sdx_r = equal(shpt,2)*0.015*sin(5*time)+(1-equal(shpt,2))*sdx_r;\n' + 'sdy_r = equal(shpt,2)*0.015*sin(6*time)+(1-equal(shpt,2))*sdy_r;\n' + 'sg1 = abs(sin(time));\n' + 'sg2 = 12*sdx_r*above(sg1,0.5) + 12*sdy_r*below(sg1,0.5);\n' + 'sg3 = if(equal(shpt,2),sg2,sg3);\n' + 'sg4 = abs(1.5*sin(1.85*time));\n' + 'sg5 = 0*above(sg4,1) + 1*below(sg4,1);\n' + 'sg6 = if(equal(shpt,2),sg5,sg6);\n' + 'textured = sg6;\n' + 'r = q2;\n' + 'b = q1;\n' + 'g = q3;\n' + 'r2 = q3;\n' + 'g2 = q2;\n' + 'b2 = q1;\n' + 'border_r = 1-(0.5*q1 + 0.5*q2);\n' + 'border_b = 1-(0.5*q2 + 0.5*q3);\n' + 'border_g = 1-(0.5*q3 + 0.5*q1);\n' + 'ang = -q4+1;\n' + 'rad = rad + sg3;\n' + 'x = x + 0.32*sin(0.41*time);\n' + 'y = y + 0.152*cos(0.42*time) + 0.18*cos(0.04*time);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 1.88496,
			thickoutline : 1.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.74192,
			additive : 1.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.49138,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.shpt = 0;
m.sdx_r = 0;
m.sdy_r = 0;
m.sg1 = 0;
m.sg2 = 0;
m.sg3 = 0;

			m.rkeys = ['shpt','sdx_r','sdy_r','sg3'];
			return m;
		},
		'frame_eqs' : function(m) {
m.shpt = ((above(m.bass_att, m.shpt)*2)+((1-above(m.bass_att, m.shpt))*(((m.shpt-1.3)*0.96)+1.3)));
m.sdx_r = (((equal(m.shpt, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.shpt, 2))*m.sdx_r));
m.sdy_r = (((equal(m.shpt, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.shpt, 2))*m.sdy_r));
m.sg1 = Math.abs(Math.sin(m.time));
m.sg2 = (((12*m.sdx_r)*above(m.sg1, 0.5))+((12*m.sdy_r)*below(m.sg1, 0.5)));
m.sg3 = ifcond(equal(m.shpt, 2), m.sg2, m.sg3);
m.r = m.q1;
m.b = m.q3;
m.g = m.q2;
m.r2 = m.q1;
m.g2 = m.q2;
m.b2 = m.q3;
m.border_r = (0.5+(0.5*m.q2));
m.border_b = m.q1;
m.border_g = ((1-Math.abs(m.q2))-(0.5*Math.sin((3*m.time))));
m.ang = (m.q4+1.5);
m.rad = (m.rad+(0.5*m.sg3));
m.x = (m.x+(0.32*Math.sin((0.41*m.time))));
m.y = ((m.y+(0.152*Math.cos((0.42*m.time))))+(0.18*Math.cos((0.04*m.time))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('shpt = above(bass_att,shpt)*2+(1-above(bass_att,shpt))*((shpt-1.3)*0.96+1.3);\n' + 'sdx_r = equal(shpt,2)*0.015*sin(5*time)+(1-equal(shpt,2))*sdx_r;\n' + 'sdy_r = equal(shpt,2)*0.015*sin(6*time)+(1-equal(shpt,2))*sdy_r;\n' + 'sg1 = abs(sin(time));\n' + 'sg2 = 12*sdx_r*above(sg1,0.5) + 12*sdy_r*below(sg1,0.5);\n' + 'sg3 = if(equal(shpt,2),sg2,sg3);\n' + 'r = q1;\n' + 'b = q3;\n' + 'g = q2;\n' + 'r2 = q1;\n' + 'g2 = q2;\n' + 'b2 = q3;\n' + 'border_r = 0.5 + 0.5*q2;\n' + 'border_b = q1;\n' + 'border_g = 1-abs(q2) - 0.5*sin(3*time);\n' + 'ang = q4+1.5;\n' + 'rad = rad+ (0.5*sg3);\n' + 'x = x + 0.32*sin(0.41*time);\n' + 'y = y + 0.152*cos(0.42*time) + 0.18*cos(0.04*time);'),

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
	'warp' : ('shader_body {\n' + '   vec3 a_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = ((tmpvar_3.x * 0.01) + uv.x);\n' + '  tmpvar_4.y = ((tmpvar_3.y * 0.01) - uv.y);\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, tmpvar_4).xyz;\n' + '  a_1 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur1, uv);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (uv + ((\n' + '    (a_1 - (((tmpvar_6.xyz * scale1) + bias1) * 5.0))\n' + '  .xy * texsize.zw) * 5.0));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_main, tmpvar_7);\n' + '  ret_2 = tmpvar_8.xyz;\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = ((uv_orig * texsize.xy) * texsize_noise_lq.zw);\n' + '  tmpvar_9 = texture2D (sampler_noise_lq, P_10);\n' + '  ret_2 = (ret_2 + ((\n' + '    (tmpvar_9.xyz * 2.0)\n' + '   - 1.0) * 0.01));\n' + '  ret_2 = (ret_2 - 0.00014);\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11.w = 1.0;\n' + '  tmpvar_11.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_11;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('treb_thresh=above(treb_att,treb_thresh)*2+(1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*0.96+1.3);\n' + 'mid_thresh=above(mid_att,mid_thresh)*2+(1-above(mid_mid_att,mid_thresh))*((mid_thresh-1.3)*0.96+1.3);\n' + 'vol_thresh= (pfthresh+treb_thresh+mid_thresh)/3;\n' + 'q6 = vol_thresh;\n' + 'q7 = treb_thresh;\n' + 'q8 = mid_thresh;\n' + 'wave_r = 0.65 + 0.5*sin(time*1.13);\n' + 'wave_g = 0.65 + 0.5*sin(time*1.23);\n' + 'wave_b = 0.65 + 0.5*sin(time*1.33);\n' + 'warp = 0;\n' + 'pfthresh = above(bass_att,pfthresh)*2+(1-above(bass_att,pfthresh))*((pfthresh-1.3)*0.96+1.3);\n' + 'pfdx_r = equal(pfthresh,2)*0.015*sin(5*time)+(1-equal(pfthresh,2))*pfdx_r;\n' + 'pfdy_r = equal(pfthresh,2)*0.015*sin(6*time)+(1-equal(pfthresh,2))*pfdy_r;\n' + 'rg1 = abs(sin(time));\n' + 'rg2 = 0*above(rg1,0.75) + 3*below(rg1,0.25) + 1*above(rg1,0.25)*below(rg1,0.5)+2*above(rg1,0.5)*below(rg1,0.75);\n' + 'rg3 = if(equal(pfthresh,2),rg2,rg3);\n' + 'rg4 = abs(1.2*sin(1.42*time));\n' + 'rg5 = min(max(0.1 , 0.75*sin(1.42*time)),0.25);\n' + 'rg6 = if(equal(pfthresh,2),rg5,rg6);\n' + 'q1 = wave_r;\n' + 'q2 = wave_g;\n' + 'q3 = wave_b;\n' + 'wave_x = wave_x + 0.32*sin(0.41*time);\n' + 'wave_y = wave_y + 0.152*cos(0.42*time) + 0.18*cos(0.04*time);\n' + 'cog = ocog+0.025*(bass+bass_att+(bass*bass_att)-2);\n' + 'ocog = below(cog,3000)*cog;\n' + 'q4 = cog;\n' + 'monitor = q4;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'tg1 = abs(sin(time));\n' + 'tg2 = 12*dx_r*above(tg1,0.5) + 12*dy_r*below(tg1,0.5);\n' + 'tg3 = if(equal(thresh,2),tg2,tg3);'),
};

return pmap;
});
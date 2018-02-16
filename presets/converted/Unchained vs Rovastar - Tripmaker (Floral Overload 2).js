define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.5,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.685151,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.2,
		sy : 1.0,
		ib_size : 0.005,
		warp : 1.0,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 100.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.5,
		mv_b : 1.0,
		echo_zoom : 1.006596,
		ob_size : 0.0,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999998,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.22,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.95,
		wave_a : 3.221673,
		ob_g : 0.4,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.5,
		mv_r : 0.0,
		rating : 3.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.q2 = 0;
m.meanbass_att = 0;
m.beatcounter = 0;
m.oldq2 = 0;
m.lastbeat = 0;
m.beateven = 0;
m.mycounter = 0;
m.beatrate = 0;
m.beat = 0;
m.volume = 0;
m.beatcounter = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = (m.wave_r+(0.15*Math.sin((m.time*0.222))));
m.wave_g = (m.wave_g+(0.15*Math.sin((m.time*0.333))));
m.wave_b = (m.wave_b+(0.15*Math.sin((m.time*0.444))));
m.zoom = ((m.zoom+0.01)-(m.bass_att*0.01));
m.volume = (0.3*(m.bass+m.mid));
m.beatrate = ifcond(equal(m.beatrate, 0), 1, ifcond(below(m.volume, 0.01), 1, m.beatrate));
m.lastbeat = ifcond(equal(m.lastbeat, 0), m.time, m.lastbeat);
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.peakbass_att = ifcond(above(m.bass_att, m.peakbass_att), m.bass_att, m.peakbass_att);
m.beat = ifcond(above(m.volume, 0.8), ifcond(below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)), ifcond(above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))), 1, 0), 0), 0);
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ifcond(equal(m.beat, 0), ifcond(above((m.time-m.lastbeat), (2*m.beatrate)), (m.peakbass_att*0.95), (m.peakbass_att*0.995)), m.bass_att);
m.lastbeat = ifcond(m.beat, m.time, m.lastbeat);
m.peakbass_att = Math.max(ifcond(m.beat, m.bass_att, m.peakbass_att), (1.1*m.meanbass_att));
m.beatcounter = ifcond(above(m.beat, 0), (m.beatcounter+1), m.beatcounter);
m.beatcounter = ifcond(above(m.beatcounter, 5), 0, m.beatcounter);
m.beateven = mod(m.beatcounter,2);
m.mycounter = ifcond(m.beateven, ifcond(m.beat, ifcond(above(m.mycounter, 4), 0, (m.mycounter+1)), m.mycounter), m.mycounter);
m.q2 = ifcond(m.beat, ifcond(m.beateven, 2, (m.mycounter+3)), m.oldq2);
m.oldq2 = m.q2;
m.ib_r = (m.ib_r+(0.25*Math.sin((m.time*0.965))));
m.ib_g = (m.ib_g+(0.25*Math.sin((m.time*1.123))));
m.ib_b = (m.ib_b+(0.25*Math.sin((m.time*1.046))));
m.ob_r = (m.ob_r+(0.15*Math.sin((m.time*0.865))));
m.ob_g = (m.ob_g+(0.15*Math.sin((m.time*1.103))));
m.ob_b = (m.ob_b+(0.15*Math.sin((m.time*1.086))));
m.wave_a = 0;
m.ob_size = (0.05*m.beat);
m.q1 = m.beat;
m.monitor = m.q2;
m.mv_a = (m.q1*0.02);
		m.rkeys = ['cy','cx','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+(0.1*Math.sin(((m.ang*((2+m.q2)+(2*Math.sin((m.time*1.89)))))-m.time))));
m.zoomexp = (100*(sqrt(2)-Math.sin(((m.rad*3.14)*m.q2))));
m.cx = (m.cx*m.zoom);
m.cy = (m.cy*m.zoom);
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
			a : 0.08,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.062832,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.08,
			r : 1.0,
			border_g : 1.0,
			rad : 1.791418,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = ['a'];
			return m;
		},
		'frame_eqs' : function(m) {
m.additive = m.q1;
m.a = ifcond(m.q1, 1, m.a);
m.a2 = m.a;
m.r = m.q1;
m.r2 = m.q1;
m.tex_zoom = (3-(3*m.bass));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('additive = q1;\n' + 'a = if(q1,1,a);\n' + 'a2 = a;\n' + 'r = q1;\n' + 'r2 =q1;\n' + 'tex_zoom = 3 - 3*bass;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.08,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.062832,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.08,
			r : 1.0,
			border_g : 1.0,
			rad : 1.791418,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = ['a'];
			return m;
		},
		'frame_eqs' : function(m) {
m.additive = m.q1;
m.a = ifcond(m.q1, 1, m.a);
m.a2 = m.a;
m.r = m.q1;
m.r2 = m.q1;
m.tex_zoom = (3-(2*m.bass));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('additive = q1;\n' + 'a = if(q1,1,a);\n' + 'a2 = a;\n' + 'r = q1;\n' + 'r2 =q1;\n' + 'tex_zoom = 3 - 2*bass;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.628319,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.030299,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.919739,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = ['tex_zoom'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_zoom = (m.q1+m.tex_zoom);
m.a2 = 1;
m.border_a = m.q1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_zoom = q1+tex_zoom;\n' + 'a2 = 1;\n' + 'border_a = q1;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.05,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.05,
			r : 1.0,
			border_g : 1.0,
			rad : 0.138869,
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
m.r = (0.5+(0.49*Math.sin((m.time*0.2754))));
m.b = (0.5+(0.49*Math.sin((m.time*0.6254))));
m.g = (0.5+(0.49*Math.sin((m.time*0.514))));
m.r2 = (0.5+(0.49*Math.sin((m.time*0.475))));
m.b2 = (0.5+(0.49*Math.sin((m.time*0.2107))));
m.g2 = (0.5+(0.49*Math.sin((m.time*0.7714))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = 0.5 + 0.49*sin(time*0.2754);\n' + 'b = 0.5 + 0.49*sin(time*0.6254);\n' + 'g = 0.5 + 0.49*sin(time*0.514);\n' + 'r2 = 0.5 + 0.49*sin(time*0.475);\n' + 'b2 = 0.5 + 0.49*sin(time*0.2107);\n' + 'g2 = 0.5 + 0.49*sin(time*0.7714);'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('beatcounter =0;'),
	'frame_eqs_str' : ('warp = 0;\n' + 'wave_r = wave_r + .15*sin(time*.222);\n' + 'wave_g = wave_g + .15*sin(time*.333);\n' + 'wave_b = wave_b + .15*sin(time*.444);\n' + 'zoom = zoom+.01 - bass_att*.01;\n' + 'volume = 0.3*(bass+mid);\n' + 'beatrate = if(equal(beatrate,0),1,if(below(volume,0.01),1,beatrate));\n' + 'lastbeat = if(equal(lastbeat,0),time,lastbeat);\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = if(above(bass_att,peakbass_att),bass_att,peakbass_att);\n' + 'beat = if(above(volume,0.8),if(below(peakbass_att - bass_att, 0.05*peakbass_att),if(above(time - lastbeat,0.1+0.5*(beatrate-0.1)),1,0),0),0);\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = if(equal(beat,0),if(above(time - lastbeat,2*beatrate),peakbass_att*0.95,peakbass_att*0.995),bass_att);\n' + 'lastbeat = if(beat,time,lastbeat);\n' + 'peakbass_att = max(if(beat,bass_att,peakbass_att),1.1*meanbass_att);\n' + 'beatcounter = if(above(beat,0),beatcounter +1, beatcounter);\n' + 'beatcounter = if(above(beatcounter,5), 0, beatcounter);\n' + 'beateven = beatcounter%2;\n' + 'mycounter = if(beateven,if(beat,if(above(mycounter,4),0,mycounter+1),mycounter),mycounter);\n' + 'q2 = if(beat,if(beateven,2,mycounter+3),oldq2);\n' + 'oldq2 = q2;\n' + 'ib_r = ib_r + 0.25*sin(time*0.965);\n' + 'ib_g = ib_g +0.25*sin(time*1.123);\n' + 'ib_b = ib_b + 0.25*sin(time*1.046);\n' + 'ob_r = ob_r + 0.15*sin(time*0.865);\n' + 'ob_g = ob_g +0.15*sin(time*1.103);\n' + 'ob_b = ob_b + 0.15*sin(time*1.086);\n' + 'wave_a =0;\n' + 'ob_size =0.05*beat;\n' + 'q1 = beat;\n' + 'monitor = q2;\n' + 'mv_a = q1*0.02;'),
	'pixel_eqs_str' : ('zoom = zoom + .1*sin((ang)*(2+q2+2*sin(time*1.89))-time);\n' + 'zoomexp = 100*(sqrt(2)-sin(rad*3.14*q2));\n' + 'cx=cx*zoom;\n' + 'cy=cy*zoom;'),
};

return pmap;
});
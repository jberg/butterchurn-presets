define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 2.850136,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.02,
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
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.4999,
		echo_zoom : 1.0065,
		ob_size : 0.01,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.4999,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999514,
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
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.925,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.4999,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.treb_thresh = 0;
m.madbeat = 0;
m.bos = 0;
m.trebb = 0;
m.trassave = 0;
m.trebtemp = 0;
m.beeta = 0;
m.beetb = 0;
m.cdelay1 = 0;
m.beetc = 0;
m.beet = 0;
m.cdelay2 = 0;
m.beetd = 0;
m.beetcd = 0;
m.basstemp = 0;
m.beetab = 0;
m.bas = 0;
m.basst = 0;
m.counter1 = 0;
m.counter2 = 0;
m.midtb = 0;
m.trasstemp = 0;
m.colorcounter = 0;
m.mtb = 0;
m.bass_thresh = 0;
m.midbeat = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.counter1 = ifcond(equal(m.counter2, 1), ifcond(equal(m.counter1, 1), 0, (m.counter1+0.2)), 1);
m.counter2 = ifcond(equal(m.counter1, 1), ifcond(equal(m.counter2, 1), 0, (m.counter2+0.2)), 1);
m.cdelay1 = ifcond(equal(m.cdelay2, 1), 1, ifcond(equal(mod(m.colorcounter,2), 1), ifcond(equal(m.counter1, 1), 2, 0), ifcond(equal(m.counter2, 1), 2, 0)));
m.cdelay2 = ifcond(equal(m.cdelay1, 2), 1, 0);
m.colorcounter = ifcond(above(m.colorcounter, 7), 0, ifcond(equal(m.cdelay1, 1), (m.colorcounter+1), m.colorcounter));
m.ob_r = (0.5*ifcond(equal(m.colorcounter, 1), 1, ifcond(equal(m.colorcounter, 2), 1, ifcond(equal(m.colorcounter, 3), 1, ifcond(equal(m.colorcounter, 4), Math.sin((m.counter2+2.1)), ifcond(equal(m.colorcounter, 5), 0, ifcond(equal(m.colorcounter, 6), 0, Math.sin(m.counter1))))))));
m.ob_g = (0.5*ifcond(equal(m.colorcounter, 1), 0, ifcond(equal(m.colorcounter, 2), Math.sin((m.counter2*0.5)), ifcond(equal(m.colorcounter, 3), Math.sin(((m.counter1+1.75)*0.4)), ifcond(equal(m.colorcounter, 4), 1, ifcond(equal(m.colorcounter, 5), 1, ifcond(equal(m.colorcounter, 6), Math.sin((m.counter2+2)), 0)))))));
m.ob_b = ifcond(equal(m.colorcounter, 1), Math.sin((m.counter1+2.1)), ifcond(equal(m.colorcounter, 2), 0, ifcond(equal(m.colorcounter, 3), 0, ifcond(equal(m.colorcounter, 4), 0, ifcond(equal(m.colorcounter, 5), Math.sin(m.counter1), ifcond(equal(m.colorcounter, 6), 1, 1))))));
m.ib_r = (m.ob_r*1.001);
m.ib_g = (m.ob_g*1.001);
m.ib_b = (m.ob_b*1.001);
m.decay = 0.9999;
m.basstemp = ((m.bass+m.bass_att)+m.bass_thresh);
m.trebtemp = ((m.treb+m.treb_att)+m.treb_thresh);
m.trasstemp = Math.max(m.basstemp, m.trebtemp);
m.trassave = div(m.trasstemp,3);
m.basst = Math.max((m.bass+m.bass_att), (m.treb+m.treb_att));
m.trebb = Math.min((m.basst+m.bass_thresh), (m.basst+m.treb_thresh));
m.midbeat = div(m.trebb,3);
m.midtb = Math.max((m.midbeat+m.mid), (m.midbeat+m.mid_att));
m.mtb = div(m.midtb,2.25);
m.beeta = div((Math.max(m.treb, m.bass)+Math.min(m.treb_att, m.bass_att)),2);
m.beetb = div((Math.max(m.mid, m.beeta)+Math.min(m.mid_att, (m.beeta*0.5))),2);
m.beetab = div((m.beeta+m.beetb),2);
m.beetc = div((Math.max(m.mid, m.treb)+Math.min(m.mid_att, m.treb_att)),2);
m.beetd = div((Math.max(m.bass, m.beetc)+Math.min(m.bass_att, (m.beetc*0.5))),2);
m.beetcd = div((m.beetc+m.beetd),2);
m.beet = div((m.beetab+m.beetcd),2);
m.madbeat = div(((m.trassave+m.mtb)+m.beet),3);
		m.rkeys = ['bas','cx','dy','rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = (m.rot+(0.05*Math.sin((m.rad-((m.time*0.1)+m.bas)))));
m.bas = (m.bass*2.5);
m.bos = m.bass;
m.warp = (((m.bos+m.bass)+m.bass)*0.1);
m.cx = ((m.cx+m.treb)*0.5);
m.dx = (m.dy+0.01);
m.dy = (m.dx-0.01);
m.basstemp = ((m.bass+m.bass_att)+m.bass_thresh);
m.trebtemp = ((m.treb+m.treb_att)+m.treb_thresh);
m.trasstemp = Math.max(m.basstemp, m.trebtemp);
m.trassave = div(m.trasstemp,3);
m.basst = Math.max((m.bass+m.bass_att), (m.treb+m.treb_att));
m.trebb = Math.min((m.basst+m.bass_thresh), (m.basst+m.treb_thresh));
m.midbeat = div(m.trebb,3);
m.midtb = Math.max((m.midbeat+m.mid), (m.midbeat+m.mid_att));
m.mtb = div(m.midtb,2.25);
m.beeta = div((Math.max(m.treb, m.bass)+Math.min(m.treb_att, m.bass_att)),2);
m.beetb = div((Math.max(m.mid, m.beeta)+Math.min(m.mid_att, (m.beeta*0.5))),2);
m.beetab = div((m.beeta+m.beetb),2);
m.beetc = div((Math.max(m.mid, m.treb)+Math.min(m.mid_att, m.treb_att)),2);
m.beetd = div((Math.max(m.bass, m.beetc)+Math.min(m.bass_att, (m.beetc*0.5))),2);
m.beetcd = div((m.beetc+m.beetd),2);
m.beet = div((m.beetab+m.beetcd),2);
m.madbeat = div(((m.trassave+m.mtb)+m.beet),3);
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
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.779765,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.15493,
			x : 0.4999,
			y : 0.9,
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

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 3.141593,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.756684,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.986082,
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
m.ang = ((m.ang+(m.bass*0.2))+(m.time*0.4));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = ang + (bass*.2) + (time*.4);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.9,
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
m.x = ((Math.sin(m.time)*0.4)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = sin(time) * .4 + .5;'),

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
	'frame_eqs_str' : ('wave_a = 0;\n' + 'counter1 = if(equal(counter2,1),if(equal(counter1,1),0,counter1+.2),1);\n' + 'counter2 = if(equal(counter1,1),if(equal(counter2,1),0,counter2+.2),1);\n' + 'cdelay1 = if(equal(cdelay2,1),1,if(equal(colorcounter%2,1),if(equal(counter1,1),2 ,0), if(equal(counter2,1),2,0)));\n' + 'cdelay2 = if(equal(cdelay1,2),1,0);\n' + 'colorcounter = if(above(colorcounter,7),0,if(equal(cdelay1,1),colorcounter+1,colorcounter));\n' + 'ob_r = .5*if(equal(colorcounter,1),1, if(equal(colorcounter,2),1, if(equal(colorcounter,3),1, if(equal(colorcounter,4),sin(counter2+2.1), if(equal(colorcounter,5),0, if(equal(colorcounter,6),0,sin(counter1)))))));\n' + 'ob_g = .5*if(equal(colorcounter,1),0, if(equal(colorcounter,2),sin(counter2*.5), if(equal(colorcounter,3),sin((counter1+1.75)*.4), if(equal(colorcounter,4),1, if(equal(colorcounter,5),1, if(equal(colorcounter,6),sin(counter2+2),0))))));\n' + 'ob_b = if(equal(colorcounter,1),sin(counter1+2.1), if(equal(colorcounter,2),0, if(equal(colorcounter,3),0, if(equal(colorcounter,4),0, if(equal(colorcounter,5),sin(counter1), if(equal(colorcounter,6),1,1))))));\n' + 'ib_r = ob_r*1.001;\n' + 'ib_g = ob_g*1.001;\n' + 'ib_b = ob_b*1.001;\n' + 'decay = 0.9999;\n' + 'basstemp= bass + bass_att + bass_thresh;\n' + 'trebtemp= treb + treb_att + treb_thresh;\n' + 'trasstemp= (max(basstemp, trebtemp));\n' + 'trassave= (trasstemp/3);\n' + 'basst= max(bass + bass_att, treb + treb_att);\n' + 'trebb= min(basst + bass_thresh, basst + treb_thresh);\n' + 'midbeat= trebb/3;\n' + 'midtb= max(midbeat + mid, midbeat + mid_att);\n' + 'mtb= midtb/2.25;\n' + 'beetA= (max(treb, bass) + min(treb_att, bass_att)) /2;\n' + 'beetB= (max(mid, beetA) + min(mid_att, beetA*0.5)) /2;\n' + 'beetAB= (beetA+beetB)/2;\n' + 'beetC= (max(mid, treb) + min(mid_att, treb_att)) /2;\n' + 'beetD= (max(bass, beetC) + min(bass_att, beetC*0.5)) /2;\n' + 'beetCD= (beetC+beetD)/2;\n' + 'beet= (beetAB+beetCD) /2;\n' + 'madbeat= (trassave+mtb+beet) /3;'),
	'pixel_eqs_str' : ('rot = rot +.05 * sin(rad-(time*.1+bas))  ;\n' + 'bas =  (bass*2.5);\n' + 'bos = bass;\n' + 'warp = (bos + bass + bass) * .1;\n' + 'cx = (cx + treb) * .5;\n' + 'dx = dy+.01 ;\n' + 'dy = dx-.01 ;\n' + 'basstemp= bass + bass_att + bass_thresh;\n' + 'trebtemp= treb + treb_att + treb_thresh;\n' + 'trasstemp= (max(basstemp, trebtemp));\n' + 'trassave= (trasstemp/3);\n' + 'basst= max(bass + bass_att, treb + treb_att);\n' + 'trebb= min(basst + bass_thresh, basst + treb_thresh);\n' + 'midbeat= trebb/3;\n' + 'midtb= max(midbeat + mid, midbeat + mid_att);\n' + 'mtb= midtb/2.25;\n' + 'beetA= (max(treb, bass) + min(treb_att, bass_att)) /2;\n' + 'beetB= (max(mid, beetA) + min(mid_att, beetA*0.5)) /2;\n' + 'beetAB= (beetA+beetB)/2;\n' + 'beetC= (max(mid, treb) + min(mid_att, treb_att)) /2;\n' + 'beetD= (max(bass, beetC) + min(bass_att, beetC*0.5)) /2;\n' + 'beetCD= (beetC+beetD)/2;\n' + 'beet= (beetAB+beetCD) /2;\n' + 'madbeat= (trassave+mtb+beet) /3;'),
};

return pmap;
});
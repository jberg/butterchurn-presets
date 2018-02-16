define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.5,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.6401,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.01,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.5,
		mv_b : 1.0,
		echo_zoom : 0.999609,
		ob_size : 0.0,
		wave_smoothing : 0.27,
		warpanimspeed : 5.99579,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.96,
		zoom : 0.998531,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.2,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.002,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.9,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.5,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.q2 = 0;
m.q3 = 0;
m.mybeat = 0;
m.q4 = 0;
m.q5 = 0;
m.oldratio = 0;
m.q6 = 0;
m.meanbass_att = 0;
m.q7 = 0;
m.q8 = 0;
m.oldq2 = 0;
m.oldq3 = 0;
m.oldq4 = 0;
m.ratio = 0;
m.box = 0;
m.oldq5 = 0;
m.oldq6 = 0;
m.lastbeat = 0;
m.flag = 0;
m.oldq7 = 0;
m.oldq8 = 0;
m.mybeat2 = 0;
m.oldflag = 0;
m.beatrate = 0;
m.beat = 0;
m.volume = 0;
m.q8 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.q8 = ((m.oldq8+(0.001*div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.2*m.treb))+(0.2*m.treb_att))+(0.2*m.mid))+(0.2*m.mid_att)), 6),m.fps)))+div(0.1,m.fps));
m.oldq8 = m.q8;
m.ob_r = (0.3-(0.3*((0.5*Math.sin((m.q8*0.701)))+(0.3*Math.cos((m.q8*0.438))))));
m.ob_g = (0.6-(0.4*Math.sin((m.q8*2.924))));
m.ob_b = (0.35-(0.3*Math.cos((m.q8*0.816))));
m.warp = 0;
m.ib_size = 0.02;
m.ib_r = (m.ib_r+(0.5*Math.sin((m.q8*3.034))));
m.ib_g = (m.ib_g+(0.5*Math.sin((m.q8*2.547))));
m.ib_b = (m.ib_b-(0.5*Math.sin((m.q8*1.431))));
m.ib_r = 0;
m.ib_g = 0;
m.ib_b = 0;
m.volume = (0.15*(((m.bass_att+m.bass)+m.mid)+m.mid_att));
m.beatrate = ifcond(equal(m.beatrate, 0), 1, ifcond(below(m.volume, 0.01), 1, m.beatrate));
m.lastbeat = ifcond(equal(m.lastbeat, 0), m.time, m.lastbeat);
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.peakbass_att = ifcond(above(m.bass_att, m.peakbass_att), m.bass_att, m.peakbass_att);
m.beat = ifcond(above(m.volume, 0.8), ifcond(below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)), ifcond(above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))), 1, 0), 0), 0);
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ifcond(equal(m.beat, 0), ifcond(above((m.time-m.lastbeat), (2*m.beatrate)), (m.peakbass_att*0.95), (m.peakbass_att*0.995)), m.bass_att);
m.lastbeat = ifcond(m.beat, m.time, m.lastbeat);
m.mybeat = ifcond(m.beat, (m.mybeat+1), m.mybeat);
m.mybeat = ifcond(above(m.mybeat, 7), 0, m.mybeat);
m.mybeat2 = ifcond(equal(m.mybeat, 1), 1, 0);
m.q7 = ifcond((m.beat*m.mybeat2), (0.001+(0.0001*rand(40))), m.oldq7);
m.oldq7 = m.q7;
m.q6 = ifcond((m.beat*m.mybeat2), (0.001+(0.0001*rand(40))), m.oldq6);
m.oldq6 = m.q6;
m.q5 = ifcond((m.beat*m.mybeat2), (0.001+(0.0001*rand(40))), m.oldq5);
m.oldq5 = m.q5;
m.q4 = ifcond((m.beat*m.mybeat2), (0.001+(0.0001*rand(40))), m.oldq4);
m.oldq4 = m.q4;
m.flag = ifcond((m.beat*m.mybeat2), ifcond((rand(2)-1), 1, 0), m.oldflag);
m.oldflag = m.flag;
m.ratio = ifcond((m.beat*m.mybeat2), (100+rand(60)), m.oldratio);
m.oldratio = m.ratio;
m.q3 = ifcond((m.beat*m.mybeat2), ifcond(m.flag, m.ratio, (0.75*m.ratio)), m.oldq3);
m.oldq3 = m.q3;
m.q2 = ifcond((m.beat*m.mybeat2), ifcond(m.flag, (0.75*m.ratio), m.ratio), m.oldq2);
m.oldq2 = m.q2;
m.solarize = m.beat;
		m.rkeys = ['dy','dx','rot','zoom','q1'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.box = ((((0.7*sqrt(2))-m.rad)+mod((0.8*Math.abs(((m.x*3)-(0.4*Math.sin(m.q1))))),2))+mod((0.8*Math.abs(((m.y*3)+(0.4*Math.sin(m.q1))))),2));
m.q1 = (8.3+(Math.sin((m.x+(0.137*m.q8)))-Math.cos((m.y+(0.213*m.q8)))));
m.zoom = ifcond(above(m.box, 1), (m.q1*0.1), m.zoom);
m.rot = ifcond(above(m.box, 1), ((0.1*m.rad)+Math.sin((0.385*m.q8))), m.rot);
m.dx = ifcond(above(m.box, 1), m.dx, ((m.q4*Math.sin(((m.y-0.5)*m.q3)))+(m.q5*Math.sin(((m.y-0.5)*m.q2)))));
m.dy = ifcond(above(m.box, 1), m.dy, ((m.q6*Math.cos(((m.x-0.5)*m.q2)))+(m.q7*Math.cos(((m.x-0.5)*m.q3)))));
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
			a : 0.5,
			enabled : 1.0,
			b : 0.4,
			thickoutline : 0.0,
			g : 0.0,
			g2 : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.2,
			r : 1.0,
			border_g : 1.0,
			rad : 0.2,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.4);
m.x = ((0.5+(0.3*Math.cos((m.time*1.23))))+(0.03*Math.cos((m.time*0.7))));
m.y = ((0.5+(0.3*Math.sin((m.time*1.43))))+(0.03*Math.sin((m.time*0.7))));
m.r = (0.5+(0.5*Math.sin(((m.q8*0.613)+1))));
m.g = (0.5+(0.5*Math.sin(((m.q8*0.763)+2))));
m.b = (0.5+(0.5*Math.sin(((m.q8*0.771)+5))));
m.r2 = (0.5+(0.5*Math.sin(((m.q8*0.635)+4))));
m.g2 = (0.5+(0.5*Math.sin(((m.q8*0.616)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.q8*0.538)+3))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time*0.4;\n' + 'x = 0.5 + 0.3*cos(time*1.23) + 0.03*cos(time*0.7);\n' + 'y = 0.5 + 0.3*sin(time*1.43) + 0.03*sin(time*0.7);\n' + 'r =0.5 + 0.5*sin(q8*0.613 + 1);\n' + 'g = 0.5 + 0.5*sin(q8*0.763 + 2);\n' + 'b = 0.5 + 0.5*sin(q8*0.771 + 5);\n' + 'r2 = 0.5 + 0.5*sin(q8*0.635 + 4);\n' + 'g2 = 0.5 + 0.5*sin(q8*0.616+ 1);\n' + 'b2 = 0.5 + 0.5*sin(q8*0.538 + 3);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.5,
			enabled : 1.0,
			b : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			g2 : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.2,
			r : 1.0,
			border_g : 1.0,
			rad : 0.2,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.4);
m.x = ((0.5+(0.3*Math.cos((m.time*1.104))))+(0.03*Math.cos((m.time*0.7))));
m.y = ((0.5+(0.3*Math.sin((m.time*1.27))))+(0.03*Math.sin((m.time*0.7))));
m.r = (0.5+(0.5*Math.sin(((m.q8*0.613)+1))));
m.g = (0.5+(0.5*Math.sin(((m.q8*0.763)+2))));
m.b = (0.5+(0.5*Math.sin(((m.q8*0.771)+5))));
m.r2 = (0.5+(0.5*Math.sin(((m.q8*0.635)+4))));
m.g2 = (0.5+(0.5*Math.sin(((m.q8*0.616)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.q8*0.538)+3))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time*0.4;\n' + 'x = 0.5 + 0.3*cos(time*1.104) + 0.03*cos(time*0.7);\n' + 'y = 0.5 + 0.3*sin(time*1.27) + 0.03*sin(time*0.7);\n' + 'r =0.5 + 0.5*sin(q8*0.613 + 1);\n' + 'g = 0.5 + 0.5*sin(q8*0.763 + 2);\n' + 'b = 0.5 + 0.5*sin(q8*0.771 + 5);\n' + 'r2 = 0.5 + 0.5*sin(q8*0.635 + 4);\n' + 'g2 = 0.5 + 0.5*sin(q8*0.616+ 1);\n' + 'b2 = 0.5 + 0.5*sin(q8*0.538 + 3);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.5,
			enabled : 1.0,
			b : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			g2 : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.2,
			r : 1.0,
			border_g : 1.0,
			rad : 0.2,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q8 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.4);
m.x = ((0.5+(0.3*Math.cos((m.time*1.23))))+(0.03*Math.cos((m.time*0.9))));
m.y = ((0.5+(0.3*Math.sin((m.time*1.18))))+(0.03*Math.sin((m.time*0.9))));
m.r = (0.5+(0.5*Math.sin(((m.q8*0.413)+1))));
m.g = (0.5+(0.5*Math.sin(((m.q8*0.363)+2))));
m.b = (0.5+(0.5*Math.sin(((m.q8*0.871)+5))));
m.r2 = (0.5+(0.5*Math.sin(((m.q8*0.835)+4))));
m.g2 = (0.5+(0.5*Math.sin(((m.q8*0.686)+1))));
m.b2 = (0.5+(0.5*Math.sin(((m.q8*0.938)+3))));
m.sides = 360;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = time*0.4;\n' + 'x = 0.5 + 0.3*cos(time*1.23) + 0.03*cos(time*0.9);\n' + 'y = 0.5 + 0.3*sin(time*1.18) + 0.03*sin(time*0.9);\n' + 'r =0.5 + 0.5*sin(q8*0.413 + 1);\n' + 'g = 0.5 + 0.5*sin(q8*0.363 + 2);\n' + 'b = 0.5 + 0.5*sin(q8*0.871 + 5);\n' + 'r2 = 0.5 + 0.5*sin(q8*0.835 + 4);\n' + 'g2 = 0.5 + 0.5*sin(q8*0.686+ 1);\n' + 'b2 = 0.5 + 0.5*sin(q8*0.938 + 3);\n' + 'sides = 360;'),

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
	'init_eqs_str' : ('q8=0;'),
	'frame_eqs_str' : ('q8 =oldq8+ 0.001*(pow(1.2*bass+0.4*bass_att+0.2*treb+0.2*treb_att+0.2*mid+0.2*mid_att,6)/fps) +0.1/fps;\n' + 'oldq8 = q8;\n' + 'ob_r = 0.3 - 0.3*(0.5*sin(q8*0.701)+ 0.3*cos(q8*0.438));\n' + 'ob_g = 0.6- 0.4*sin(q8*2.924);\n' + 'ob_b = 0.35 - 0.3*cos(q8*0.816);\n' + 'warp =0;\n' + 'ib_size = 0.02;\n' + 'ib_r = ib_r + 0.5*sin(q8*3.034);\n' + 'ib_g = ib_g + 0.5*sin(q8*2.547);\n' + 'ib_b = ib_b - 0.5*sin(q8*1.431);\n' + 'ib_r =0;\n' + 'ib_g =0;\n' + 'ib_b =0;\n' + 'volume = 0.15*(bass_att+bass+mid+mid_att);\n' + 'beatrate = if(equal(beatrate,0),1,if(below(volume,0.01),1,beatrate));\n' + 'lastbeat = if(equal(lastbeat,0),time,lastbeat);\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = if(above(bass_att,peakbass_att),bass_att,peakbass_att);\n' + 'beat = if(above(volume,0.8),if(below(peakbass_att - bass_att, 0.05*peakbass_att),if(above(time - lastbeat,0.1+0.5*(beatrate-0.1)),1,0),0),0);\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = if(equal(beat,0),if(above(time - lastbeat,2*beatrate),peakbass_att*0.95,peakbass_att*0.995),bass_att);\n' + 'lastbeat = if(beat,time,lastbeat);\n' + 'mybeat = if(beat,mybeat+1,mybeat);\n' + 'mybeat = if(above(mybeat,7),0,mybeat);\n' + 'mybeat2 = if(equal(mybeat,1),1,0);\n' + 'q7 = if(beat*mybeat2,0.001+0.0001*rand(40),oldq7);\n' + 'oldq7=q7;\n' + 'q6 = if(beat*mybeat2,0.001+0.0001*rand(40),oldq6);\n' + 'oldq6=q6;\n' + 'q5= if(beat*mybeat2,0.001+0.0001*rand(40),oldq5);\n' + 'oldq5=q5;\n' + 'q4 = if(beat*mybeat2,0.001+0.0001*rand(40),oldq4);\n' + 'oldq4=q4;\n' + 'Flag = If(beat*mybeat2,if(Rand(2)-1,1,0),oldFlag);\n' + 'oldflag = flag;\n' + 'Ratio = If(Beat*mybeat2,100+rand(60),oldRatio);\n' + 'OldRatio = Ratio;\n' + 'q3 = if(beat*mybeat2,if(flag,ratio,0.75*ratio),oldq3);\n' + 'oldq3=q3;\n' + 'q2 = if(beat*mybeat2,if(flag,0.75*ratio,ratio),oldq2);\n' + 'oldq2=q2;\n' + 'solarize = beat;'),
	'pixel_eqs_str' : ('box=(0.7*sqrt(2)-rad)+0.8*abs(x*3-0.4*sin(q1))%2 + 0.8*abs(y*3+0.4*sin(q1))%2;\n' + 'q1 = 8.3+(sin(x+0.137*q8)-cos(y+0.213*q8));\n' + 'zoom = if(above(box,1),q1*.1,zoom);\n' + 'rot = if(above(box,1),0.1*rad+sin(0.385*q8),rot);\n' + 'dx=if(above(box,1),dx,q4*sin((y-0.5)*q3)+q5*sin((y-0.5)*q2));\n' + 'dy=if(above(box,1),dy,q6*cos((x-0.5)*q2)+q7*cos((x-0.5)*q3));'),
};

return pmap;
});
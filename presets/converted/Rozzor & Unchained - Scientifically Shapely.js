define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.560001,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 31.999994,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 28.799999,
		wave_scale : 0.424194,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.99817,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 0.9998,
		ob_size : 0.005,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.809868,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.2,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.868,
		ob_g : 0.0,
		ib_a : 0.6,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.mblock = 0;
m.q1 = 0;
m.q2 = 0;
m.mth = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.tpulse = 0;
m.q7 = 0;
m.grid = 0;
m.q8 = 0;
m.temp_r = 0;
m.tth = 0;
m.bblock = 0;
m.ccl = 0;
m.mpulse = 0;
m.tres = 0;
m.slowtime = 0;
m.mres = 0;
m.mod_state = 0;
m.bth = 0;
m.bpulse = 0;
m.temp_b = 0;
m.snur = 0;
m.tblock = 0;
m.le = 0;
m.pulse = 0;
m.snee = 0;
m.temp_g = 0;
m.bres = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.le = ((1+0.5)+(2*Math.sin(m.bass_att)));
m.bpulse = band(above(m.le, m.bth), above((m.le-m.bth), m.bblock));
m.bblock = (m.le-m.bth);
m.bth = ifcond(above(m.le, m.bth), ((m.le+div(114,(m.le+10)))-7.407), ((m.bth+div((m.bth*0.07),(m.bth-12)))+((below(m.bth, 2.7)*0.1)*(2.7-m.bth))));
m.bth = ifcond(above(m.bth, 6), 6, m.bth);
m.bres = ((m.bpulse*Math.sin((m.pulse+(m.le*0.5))))+(bnot(m.bpulse)*m.bres));
m.le = ((1+0.5)+(2*Math.sin(m.treb_att)));
m.tpulse = band(above(m.le, m.tth), above((m.le-m.tth), m.tblock));
m.tblock = (m.le-m.tth);
m.tth = ifcond(above(m.le, m.tth), ((m.le+div(114,(m.le+10)))-7.407), ((m.tth+div((m.tth*0.07),(m.tth-12)))+((below(m.tth, 2.7)*0.1)*(2.7-m.tth))));
m.tth = ifcond(above(m.tth, 6), 6, m.tth);
m.tres = ((m.tpulse*Math.sin((m.pulse+(m.le*0.5))))+(bnot(m.tpulse)*m.tres));
m.le = ((1+0.5)+(2*Math.sin(m.mid_att)));
m.mpulse = band(above(m.le, m.mth), above((m.le-m.mth), m.mblock));
m.mblock = (m.le-m.mth);
m.mth = ifcond(above(m.le, m.mth), ((m.le+div(114,(m.le+10)))-7.407), ((m.mth+div((m.mth*0.07),(m.mth-12)))+((below(m.mth, 2.7)*0.1)*(2.7-m.mth))));
m.mth = ifcond(above(m.mth, 6), 6, m.mth);
m.mres = ((m.mpulse*Math.sin((m.pulse+(m.le*0.5))))+(bnot(m.mpulse)*m.mres));
m.pulse = ifcond(above(Math.abs(m.pulse), 3.14), -3.14, (m.pulse+(((m.bth+m.mth)+m.tth)*0.003)));
m.q1 = m.bres;
m.q2 = m.tres;
m.q3 = m.mres;
m.q4 = Math.sin(m.pulse);
m.mod_state = (((above(m.q1, 0)+above(m.q2, 0))+above(m.q3, 0))*(1+above(m.q4, 0)));
m.ccl = (((m.ccl+m.tpulse)+m.mpulse)-m.bpulse);
m.q5 = Math.cos((m.pulse*(0.5+(0.1*m.mod_state))));
m.q6 = Math.sin((m.pulse*(0.5+pow(0.25, m.mod_state))));
m.q7 = m.mod_state;
m.q8 = m.ccl;
m.ib_size = (0.025+(0.02*m.q2));
m.ob_size = ((0.03+(0.02*m.q3))-(0.002*m.q7));
m.wave_mystery = (m.wave_mystery+Math.sin(((m.time*2.18)+m.q6)));
m.wave_x = ((m.wave_x+(0.15*Math.sin(((m.time*0.811)+m.q1))))+((0.02*(mod(m.frame,12)+m.q7))*sign(m.q5)));
m.wave_y = ((m.wave_y+(0.15*Math.sin(((m.time*0.788)+m.q2))))+((0.02*(mod(m.frame,11)+m.q7))*sign(m.q3)));
m.cy = ((0.5+(0.5*m.q4))+Math.sin((m.time*0.086)));
m.decay = ((0.997+(0.0015*m.q3))+(0.0015*m.q1));
m.slowtime = (m.slowtime+(m.mpulse*m.time));
m.temp_b = (Math.cos(m.slowtime)+Math.abs(Math.cos(m.slowtime)));
m.temp_g = Math.abs(Math.sin(m.slowtime));
m.temp_r = (((-1*Math.cos(m.slowtime))+Math.abs((-1*Math.cos(m.slowtime))))+(0.2*(Math.cos(Math.sin(m.slowtime))+(Math.abs(Math.cos(Math.sin(m.slowtime)))+Math.cos(Math.sin(m.slowtime))))));
m.ob_r = ifcond(above(m.temp_r, 1), 1, ifcond(above(m.temp_r, 0), Math.abs(m.temp_r), 0));
m.ob_g = ifcond(above(m.temp_g, 0.5), 0.5, ifcond(above(m.temp_g, 0), Math.abs(m.temp_g), 0));
m.ob_b = ifcond(above(m.temp_b, 1), 1, ifcond(above(m.temp_b, 0), Math.abs(m.temp_b), 0));
m.ib_r = (1-ifcond(above(m.temp_r, 1), 1, ifcond(above(m.temp_r, 0), Math.abs(m.temp_r), 0)));
m.ib_g = (1-ifcond(above(m.temp_g, 1), 1, ifcond(above(m.temp_g, 0), Math.abs(m.temp_g), 0)));
m.ib_b = (1-ifcond(above(m.temp_b, 1), 1, ifcond(above(m.temp_b, 0), Math.abs(m.temp_b), 0)));
m.wave_b = m.temp_b;
m.wave_g = (1-m.temp_g);
m.wave_r = (1-(equal(m.ob_b, 1)*m.temp_r));
m.ob_a = (0.8+(0.2*m.q2));
		m.rkeys = ['sy','sx','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.snee = bnot(((above((Math.sin(m.ang)-m.x), 0.5)*above(m.q2, 0))+(above((m.y-Math.cos(m.ang)), 0.5)*above(m.q1, 0))));
m.snur = bnot(((below(m.x, 0.5)*above(m.q3, 0))+(below(m.y, 0.5)*below(m.q7, 4))));
m.grid = Math.sin((sigmoid(Math.sin(((m.y*6.28)*m.q2)), Math.sin(((m.x*6.28)*m.q6)))*(10+m.q7)));
m.rot = ((bnot((above(m.x, 0.5)+mod((m.y*m.q8),m.q7)))*Math.cos((m.rad+((3.14*ifcond(above(m.grid, 0), m.snur, bnot(m.snur)))*(0.5+(0.5*Math.sin(((m.rad*3.14)*m.q1))))))))*m.q4);
m.zoom = (m.zoom+((0.1*Math.sin(((((m.rad*0.0314)*m.meshx)*m.q2)+m.q5)))*sign(m.snee)));
m.rot = ifcond(m.rot, (m.rot*sign(m.snur)), m.q6);
m.cx = ifcond((below(m.x, 0.5)*below(m.y, 0.5)), (0.5+((0.001*m.meshx)*m.q1)), 0.5);
m.cy = ifcond((below(m.x, 0.5)*below(m.y, 0.5)), (0.5+((0.001*m.meshy)*m.q3)), 0.5);
m.sx = (m.sx+(0.01*Math.sin((((m.time*2.13)*m.meshx)*m.x))));
m.sy = (m.sy+(0.01*Math.sin((((m.time*2.33)*m.meshy)*m.x))));
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
m.x = (m.x+(0.3*m.q4));
m.y = (m.y+(0.3*m.q3));
m.rad = (0.3+(0.3*m.q5));
m.sides = (3+mod(m.q8,3));
m.textured = bnot(mod(m.sides,2));
m.r2 = m.q1;
m.g2 = m.q2;
m.b2 = m.q3;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=x+.3*q4;\n' + 'y=y+.3*q3;\n' + 'rad=.3+.3*q5;\n' + 'sides=3+(q8%3);\n' + 'textured=bnot(sides%2);\n' + 'r2=q1;\n' + 'g2=q2;\n' + 'b2=q3;'),

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

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'le=1+.5+2*sin(bass_att);\n' + 'bpulse=band(above(le,bth),above(le-bth,bblock));\n' + 'bblock=le-bth;\n' + 'bth=if(above(le,bth),le+114/(le+10)-7.407,bth+bth*.07/(bth-12)+below(bth,2.7)*.1*(2.7-bth));\n' + 'bth=if(above(bth,6),6,bth);\n' + 'bres=bpulse*sin(pulse+le*.5) + bnot(bpulse)*bres;\n' + 'le=1+.5+2*sin(treb_att);\n' + 'tpulse=band(above(le,tth),above(le-tth,tblock));\n' + 'tblock=le-tth;\n' + 'tth=if(above(le,tth),le+114/(le+10)-7.407,tth+tth*.07/(tth-12)+below(tth,2.7)*.1*(2.7-tth));\n' + 'tth=if(above(tth,6),6,tth);\n' + 'tres=tpulse*sin(pulse+le*.5) + bnot(tpulse)*tres;\n' + 'le=1+.5+2*sin(mid_att);\n' + 'mpulse=band(above(le,mth),above(le-mth,mblock));\n' + 'mblock=le-mth;\n' + 'mth=if(above(le,mth),le+114/(le+10)-7.407,mth+mth*.07/(mth-12)+below(mth,2.7)*.1*(2.7-mth));\n' + 'mth=if(above(mth,6),6,mth);\n' + 'mres=mpulse*sin(pulse+le*.5) + bnot(mpulse)*mres;\n' + 'pulse=if(above(abs(pulse),3.14),-3.14,pulse+(bth+mth+tth)*.003);\n' + 'q1=bres;\n' + 'q2=tres;\n' + 'q3=mres;\n' + 'q4=sin(pulse);\n' + 'mod_state=(above(q1,0)+above(q2,0)+above(q3,0))*(1+above(q4,0));\n' + 'ccl=ccl+tpulse+mpulse-bpulse;\n' + 'q5=cos(pulse*(.5+.1*mod_state));\n' + 'q6=sin(pulse*(.5+pow(.25,mod_state)));\n' + 'q7=mod_state;\n' + 'q8=ccl;\n' + 'ib_size=.025+.02*q2;\n' + 'ob_size=.03+.02*q3-.002*q7;\n' + 'wave_mystery=wave_mystery+sin(time*2.18+q6);\n' + 'wave_x=wave_x+.15*sin(time*.811+q1)+.02*(frame%12+q7)*sign(q5);\n' + 'wave_y=wave_y+.15*sin(time*.788+q2)+.02*(frame%11+q7)*sign(q3);\n' + 'cy=.5+.5*q4+sin(time*.086);\n' + 'decay=.997+.0015*q3+.0015*q1;\n' + 'slowtime = slowtime + mpulse*time;\n' + 'temp_b = cos(slowtime)  + abs(cos(slowtime));\n' + 'temp_g = abs(sin(slowtime)) ;\n' + 'temp_r =  (-1 * cos(slowtime))  + abs(-1 * cos(slowtime)) + 0.2 * (cos(sin(slowtime))+(abs(cos(sin(slowtime)))+cos(sin(slowtime))));\n' + 'ob_r = if(above(temp_r,1),1,if(above(temp_r,0), abs(temp_r),0));\n' + 'ob_g = if(above(temp_g,.5),.5,if(above(temp_g,0), abs(temp_g),0));\n' + 'ob_b = if(above(temp_b,1),1,if(above(temp_b,0), abs(temp_b),0));\n' + 'ib_r =  1- if(above(temp_r,1),1,if(above(temp_r,0), abs(temp_r),0));\n' + 'ib_g =  1- if(above(temp_g,1),1,if(above(temp_g,0), abs(temp_g),0));\n' + 'ib_b =  1- if(above(temp_b,1),1,if(above(temp_b,0), abs(temp_b),0));\n' + 'wave_b = temp_b;\n' + 'wave_g = 1-temp_g;\n' + 'wave_r = 1-equal(ob_b,1)*temp_r;\n' + 'ob_a=.8+.2*q2;'),
	'pixel_eqs_str' : ('snee=bnot(above(sin(ang)-x,.5)*above(q2,0)+above(y-cos(ang),.5)*above(q1,0));\n' + 'snur=bnot(below(x,.5)*above(q3,0)+below(y,.5)*below(q7,4));\n' + 'grid=sin(sigmoid(sin(y*6.28*q2),sin(x*6.28*q6))*(10+q7));\n' + 'rot=bnot(above(x,.5)+((y*q8)%q7))*cos(rad+3.14*if(above(grid,0),snur,bnot(snur))*(.5+.5*sin(rad*3.14*q1)))*q4;\n' + 'zoom=zoom+.1*sin(rad*.0314*meshx*q2+q5)*sign(snee);\n' + 'rot=if(rot,rot*sign(snur),q6);\n' + 'cx=if(below(x,.5)*below(y,.5),.5+.001*meshx*q1,.5);\n' + 'cy=if(below(x,.5)*below(y,.5),.5+.001*meshy*q3,.5);\n' + 'sx=sx+.01*sin(time*2.13*meshx*x);\n' + 'sy=sy+.01*sin(time*2.33*meshy*x);'),
};

return pmap;
});
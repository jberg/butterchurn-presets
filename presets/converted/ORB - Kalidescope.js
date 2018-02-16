define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 4.8,
		wave_scale : 1.0,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 5.2E-4,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.96,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.95,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.decay_g = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.stickybit = 0;
m.diff = 0;
m.bit2 = 0;
m.q6 = 0;
m.q7 = 0;
m.basstime2 = 0;
m.q8 = 0;
m.sample1 = 0;
m.sample2 = 0;
m.xpass = 0;
m.ypass = 0;
m.saw_b = 0;
m.basstime = 0;
m.basssum = 0;
m.bass_time = 0;
m.decay_r = 0;
m.state = 0;
m.zoom_in = 0;
m.saw_g = 0;
m.tex_saw = 0;
m.difftime = 0;
m.vol = 0;
m.volavg2 = 0;
m.ys = 0;
m.xs = 0;
m.saw_r = 0;
m.decay_b = 0;
m.edge = 0;
m.volavg = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.basstime = (m.basstime+(m.bass*0.03));
m.basstime2 = (m.basstime+(m.bass*0.03));
m.q1 = m.basstime2;
m.basstime = ifcond(below(m.basstime, 450), 450, m.basstime);
m.basstime = ifcond(above(m.basstime, 495), 450, m.basstime);
m.basstime = (m.basstime+(m.bass_att*0.03));
m.vol = pow(((m.bass+m.mid)+m.treb), 2);
m.basssum = m.vol;
m.stickybit = mod(m.time,2);
m.volavg = (m.volavg+(m.vol*equal(m.stickybit, 1)));
m.sample1 = (m.sample1+equal(m.stickybit, 1));
m.volavg2 = (m.volavg2+(m.vol*equal(m.stickybit, 0)));
m.sample2 = (m.sample2+equal(m.stickybit, 0));
m.edge = bnot(equal(m.bit2, m.stickybit));
m.volavg = (m.volavg-((m.volavg*m.edge)*m.stickybit));
m.volavg2 = (m.volavg2-((m.volavg2*m.edge)*equal(m.stickybit, 0)));
m.sample1 = (m.sample1-((m.sample1*m.edge)*m.stickybit));
m.sample2 = (m.sample2-((m.sample2*m.edge)*equal(m.stickybit, 0)));
m.diff = ifcond(equal(m.stickybit, 1), div(m.basssum,div(m.volavg2,m.sample2)), 0);
m.diff = ifcond(equal(m.stickybit, 0), div(m.basssum,div(m.volavg,m.sample1)), m.diff);
m.q3 = m.diff;
m.bit2 = mod(m.time,2);
m.state = ifcond(above(m.state, 5), 0, m.state);
m.state = (m.state+above(m.diff, 3));
m.q4 = m.state;
m.difftime = (m.difftime+(m.diff*0.03));
m.q2 = m.difftime;
m.difftime = ifcond(above(m.difftime, 2000), 0, m.difftime);
m.state = (m.state+equal(m.diff, 3));
m.state = ifcond(above(m.state, 5), 0, m.state);
m.xs = 0;
m.ys = 0;
m.xs = (m.xs+((equal(0, m.state)*Math.atan((m.bass_time*4)))*0.1));
m.ys = (m.ys+((equal(0, m.state)*Math.cos((m.bass_time*4)))*0.1));
m.xs = (m.xs+((equal(1, m.state)*Math.cos((m.bass_time*4)))*0.1));
m.ys = (m.ys+((equal(1, m.state)*Math.cos((m.bass_time*4)))*0.1));
m.xs = (m.xs+((equal(2, m.state)*Math.cos((m.bass_time*4)))*0.1));
m.ys = (m.ys+((equal(2, m.state)*Math.sin((m.bass_time*4)))*0.1));
m.xs = (m.xs+((equal(3, m.state)*Math.cos((m.bass_time*5)))*0.1));
m.ys = (m.ys+((equal(3, m.state)*Math.cos((m.bass_time*9)))*0.1));
m.xs = (m.xs+((equal(4, m.state)*Math.atan((m.bass_time*6)))*0.1));
m.ys = (m.ys+((equal(4, m.state)*Math.cos((m.bass_time*2)))*0.1));
m.xs = (m.xs+((equal(5, m.state)*Math.cos((m.bass_time*2)))*0.1));
m.ys = (m.ys+((equal(5, m.state)*Math.sin((m.bass_time*1)))*0.1));
m.xpass = (m.xs+m.xpass);
m.ypass = (m.ys+m.ypass);
m.q6 = (0.3*Math.sin((m.xpass*0.5)));
m.q7 = (0.3*Math.sin((m.ypass*0.5)));
m.zoom_in = (m.zoom_in+above(m.diff, 4));
m.zoom_in = ifcond(above(m.zoom_in, 2), 0, m.zoom_in);
m.q5 = m.zoom_in;
m.tex_saw = (m.tex_saw-(0.002*m.diff));
m.tex_saw = ifcond(below(m.tex_saw, 0.1), 1, m.tex_saw);
m.q8 = m.tex_saw;
m.monitor = m.tex_saw;
		m.rkeys = ['saw_b','saw_g','saw_r'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = ((1-((equal(m.q5, 0)*0.1)*m.q3))+((equal(m.q5, 1)*0.1)*m.q3));
m.saw_r = (m.saw_r+(0.0001*m.bass));
m.saw_r = ifcond(above(m.saw_r, 1), 0, m.saw_r);
m.saw_g = (m.saw_g+(0.00012*m.bass));
m.saw_g = ifcond(above(m.saw_g, 1), 0, m.saw_g);
m.saw_b = (m.saw_b+(0.00011*m.bass));
m.saw_b = ifcond(above(m.saw_b, 1), 0, m.saw_b);
m.decay_r = (5-((m.x*m.y)*m.saw_r));
m.decay_g = (5-((m.y*m.x)*m.saw_g));
m.decay_b = (5-((m.x*m.y)*m.saw_b));
m.rot = 4.19;
m.zoom = 1;
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.5,
			enabled : 1.0,
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
m.q1 = 0;
m.q4 = 0;
m.q6 = 0;
m.xcoef = 0;
m.q7 = 0;
m.speed = 0;
m.count = 0;
m.zs = 0;

			m.rkeys = ['count','zs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.zs = ifcond(below(m.zs, 1), 9, m.zs);
m.zs = ifcond(above(m.zs, 1300), 1, m.zs);
m.speed = (m.bass*0.002);
m.xcoef = ((((((equal(m.q4, 0)*2)+(equal(m.q4, 1)*2.1))+(equal(m.q4, 2)*2.2))+(equal(m.q4, 3)*2.3))+(equal(m.q4, 4)*2.4))+(equal(m.q4, 5)*2.5));
m.zs = (m.zs+(Math.tan((m.q1*0.015))*m.speed));
m.count = (m.count+0.0001);
m.count = ifcond(above(m.count, 6.24), 0, m.count);
m.x = (0.1*Math.cos((((m.q1*m.zs)*2)+0.1)));
m.y = (0.1*Math.sin((((m.q1*m.zs)*1)+0.1)));
m.x = (((m.x*Math.cos((m.q1*3)))*0.8)-((m.y*Math.sin((m.q1*3)))*0.8));
m.y = ((m.x*Math.sin((m.q1*3)))+(m.y*Math.cos((m.q1*3))));
m.x = ((m.x+m.q6)+0.5);
m.y = ((m.y-m.q7)+0.5);
m.r = (0.5+(0.5*Math.sin((((m.q1*1.2)+m.x)+m.x))));
m.g = (0.5+(0.5*Math.sin((((m.q1*1.5)+m.x)+m.y))));
m.b = (0.5+(0.5*Math.sin((((m.q1*1.36)+m.y)+m.y))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('zs = if(below(zs,1),9,zs);\n' + 'zs = if(above(zs, 1300),1, zs);\n' + 'speed = bass*0.002;\n' + 'xcoef = equal(q4,0)*2 + equal(q4,1)*2.1  + equal(q4,2)*2.2 + equal(q4,3)*2.3 + equal(q4,4)*2.4 + equal(q4,5)*2.5;\n' + 'zs = zs + tan(q1*0.015)*speed;\n' + 'count = count + 0.0001;\n' + 'count = if(above(count,6.24),0,count);\n' + 'x = 0.1*cos(q1*zs*2 + 0.1);\n' + 'y = 0.1*sin(q1*zs*1 + 0.1);\n' + 'x = x*cos(q1*3)*0.8 - y*sin(q1*3)*0.8;\n' + 'y = x*sin(q1*3) + y*cos(q1*3);\n' + 'x = x + q6 + 0.5;\n' + 'y = y - q7 + 0.5;\n' + 'r = 0.5 + 0.5*sin(q1*1.2 + x + x);\n' + 'g = 0.5 + 0.5*sin(q1*1.5 + x + y);\n' + 'b = 0.5 + 0.5*sin(q1*1.36 + y + y);'),

		},
		{
		'baseVals' : {
			a : 0.5,
			enabled : 1.0,
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
m.q1 = 0;
m.q4 = 0;
m.q6 = 0;
m.xcoef = 0;
m.q7 = 0;
m.speed = 0;
m.count = 0;
m.zs = 0;

			m.rkeys = ['count','zs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.zs = ifcond(below(m.zs, 1), 9, m.zs);
m.zs = ifcond(above(m.zs, 1300), 1, m.zs);
m.speed = (m.bass*0.002);
m.xcoef = ((((((equal(m.q4, 0)*2)+(equal(m.q4, 1)*2.1))+(equal(m.q4, 2)*2.2))+(equal(m.q4, 3)*2.3))+(equal(m.q4, 4)*2.4))+(equal(m.q4, 5)*2.5));
m.zs = (m.zs+(Math.tan((m.q1*0.015))*m.speed));
m.count = (m.count+0.0001);
m.count = ifcond(above(m.count, 6.24), 0, m.count);
m.x = (0.1*Math.cos((((m.q1*m.zs)*2)+0.1)));
m.y = (0.1*Math.sin((((m.q1*m.zs)*1)+0.1)));
m.x = (((m.x*Math.cos((-m.q1*3)))*0.8)-((m.y*Math.sin((-m.q1*3)))*0.8));
m.y = ((m.x*Math.sin((-m.q1*3)))+(m.y*Math.cos((-m.q1*3))));
m.x = ((m.x+m.q6)+0.5);
m.y = ((m.y+m.q7)+0.5);
m.r = (0.5+(0.5*Math.sin((((m.q1*1.2)+m.x)+m.x))));
m.g = (0.5+(0.5*Math.sin((((m.q1*1.5)+m.x)+m.y))));
m.b = (0.5+(0.5*Math.sin((((m.q1*1.36)+m.y)+m.y))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('zs = if(below(zs,1),9,zs);\n' + 'zs = if(above(zs, 1300),1, zs);\n' + 'speed = bass*0.002;\n' + 'xcoef = equal(q4,0)*2 + equal(q4,1)*2.1  + equal(q4,2)*2.2 + equal(q4,3)*2.3 + equal(q4,4)*2.4 + equal(q4,5)*2.5;\n' + 'zs = zs + tan(q1*0.015)*speed;\n' + 'count = count + 0.0001;\n' + 'count = if(above(count,6.24),0,count);\n' + 'x = 0.1*cos(q1*zs*2 + 0.1);\n' + 'y = 0.1*sin(q1*zs*1 + 0.1);\n' + 'x = x*cos(-q1*3)*0.8 - y*sin(-q1*3)*0.8;\n' + 'y = x*sin(-q1*3) + y*cos(-q1*3);\n' + 'x = x + q6 + 0.5;\n' + 'y = y + q7 + 0.5;\n' + 'r = 0.5 + 0.5*sin(q1*1.2 + x + x);\n' + 'g = 0.5 + 0.5*sin(q1*1.5 + x + y);\n' + 'b = 0.5 + 0.5*sin(q1*1.36 + y + y);'),

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
			thick : 1.0,
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
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.22746,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.7418,
			x : 0.25,
			y : 0.25,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q3 = 0;
m.q8 = 0;
m.tex_capture = 0;
m.tex_saw = 0.4;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.q1*0.2);
m.tex_capture = above(m.q3, 2);
m.tex_zoom = m.q8;
		return m;
	},
		'init_eqs_str' : ('tex_saw = 0.4;'),
		'frame_eqs_str' : ('ang = q1*0.2;\n' + 'tex_capture = above(q3,2);\n' + 'tex_zoom = q8;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.22746,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.7418,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q3 = 0;
m.q8 = 0;
m.tex_capture = 0;
m.tex_saw = 0.4;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.q1*0.2);
m.tex_capture = above(m.q3, 2);
m.tex_zoom = m.q8;
		return m;
	},
		'init_eqs_str' : ('tex_saw = 0.4;'),
		'frame_eqs_str' : ('ang = q1*0.2;\n' + 'tex_capture = above(q3,2);\n' + 'tex_zoom = q8;'),

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
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('basstime = basstime + bass*0.03;\n' + 'basstime2 = basstime + bass*0.03;\n' + 'q1 = basstime2;\n' + 'basstime = if(below(basstime,450),450,basstime);\n' + 'basstime = if(above(basstime,495),450,basstime);\n' + 'basstime = basstime + bass_att*0.03;\n' + 'vol = pow(bass+mid+treb,2);\n' + 'basssum = vol;\n' + 'stickybit = time%2;\n' + 'volAvg = volAvg + vol*equal(stickybit,1);\n' + 'sample1 = sample1 + equal(stickybit,1);\n' + 'volAvg2 = volAvg2 + vol*equal(stickybit,0);\n' + 'sample2 = sample2 + equal(stickybit,0);\n' + 'edge = bnot(equal(bit2,stickybit));\n' + 'volAvg = volAvg - volAvg*edge*stickybit;\n' + 'volAvg2 = volAvg2 - volAvg2*edge*equal(stickybit,0);\n' + 'sample1 = sample1  - sample1*edge*stickybit;\n' + 'sample2 = sample2  - sample2*edge*equal(stickybit,0);\n' + 'diff = if(equal(stickybit,1), (basssum/(volAvg2/sample2)) , 0);\n' + 'diff = if(equal(stickybit,0), (basssum/(volAvg/sample1)), diff);\n' + 'q3 = diff;\n' + 'bit2 = time%2;\n' + 'state = if(above(state,5),0,state);\n' + 'state =  state + above(diff,3);\n' + 'q4 = state;\n' + 'difftime = difftime + diff*0.03;\n' + 'q2 = difftime;\n' + 'difftime = if(above(difftime,2000),0, difftime);\n' + 'state = state + equal(diff,3);\n' + 'state = if(above(state,5), 0, state);\n' + 'xs = 0;\n' + 'ys = 0;\n' + 'xs = xs + (equal(0,state))*atan(bass_time*4)*0.1;\n' + 'ys = ys + (equal(0,state))*cos(bass_time*4)*0.1;\n' + 'xs = xs + (equal(1,state))*cos(bass_time*4)*0.1;\n' + 'ys = ys + (equal(1,state))*cos(bass_time*4)*0.1;\n' + 'xs = xs + (equal(2,state))*cos(bass_time*4)*0.1;\n' + 'ys = ys + (equal(2,state))*sin(bass_time*4)*0.1;\n' + 'xs = xs + (equal(3,state))*cos(bass_time*5)*0.1;\n' + 'ys = ys + (equal(3,state))*cos(bass_time*9)*0.1;\n' + 'xs = xs + (equal(4,state))*atan(bass_time*6)*0.1;\n' + 'ys = ys + (equal(4,state))*cos(bass_time*2)*0.1;\n' + 'xs = xs + (equal(5,state))*cos(bass_time*2)*0.1;\n' + 'ys = ys + (equal(5,state))*sin(bass_time*1)*0.1;\n' + 'xpass = xs + xpass;\n' + 'ypass = ys + ypass;\n' + 'q6 = 0.3*sin(xpass*0.5);\n' + 'q7 = 0.3*sin(ypass*0.5);\n' + 'zoom_in = zoom_in + above(diff,4);\n' + 'zoom_in = if(above(zoom_in,2),0,zoom_in);\n' + 'q5 = zoom_in;\n' + 'tex_saw = tex_saw - 0.002*diff;\n' + 'tex_saw = if(below(tex_saw,0.1),1,tex_saw);\n' + 'q8 = tex_saw;\n' + 'monitor = tex_saw;'),
	'pixel_eqs_str' : ('zoom = 1 - equal(q5,0)*0.1*q3 + equal(q5,1)*0.1*q3;\n' + 'saw_r = saw_r + 0.0001*bass;\n' + 'saw_r =  if(above(saw_r,1),0,saw_r);\n' + 'saw_g = saw_g + 0.00012*bass;\n' + 'saw_g =  if(above(saw_g,1),0,saw_g);\n' + 'saw_b = saw_b + 0.00011*bass;\n' + 'saw_b =  if(above(saw_b,1),0,saw_b);\n' + 'decay_r = 5 - x*y*saw_r;\n' + 'decay_g = 5 - y*x*saw_g;\n' + 'decay_b = 5 - x*y*saw_b;\n' + 'rot = 4.19;\n' + 'zoom = 1;'),
};

return pmap;
});
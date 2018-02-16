define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.285751,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.2,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 1.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.03,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
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
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.97,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 2.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.rx = 0;
m.ry = 0;
m.cdelay1 = 0;
m.oldx = 0;
m.cdelay2 = 0;
m.oldy = 0;
m.ym = 0;
m.counter1 = 0;
m.xm = 0;
m.counter2 = 0;
m.colorcounter = 0;
m.colorcounter = 1;
m.counter1 = 0;
m.counter2 = 1;
m.cdelay1 = 0;
m.cdelay2 = 0;
m.rx = 0.5;
m.ry = 0.5;
m.xm = 0;
m.ym = 0;
m.orx = 0.5;
m.ory = 0.5;
m.wave_x = 0.5;
m.wave_y = 0.5;
m.oldx = (Math.floor(rand(100))*0.01);
m.oldy = (Math.floor(rand(100))*0.01);
		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.counter1 = ifcond(equal(m.counter2, 1), ifcond(equal(m.counter1, 1), 0, (m.counter1+0.05)), 1);
m.counter2 = ifcond(equal(m.counter1, 1), ifcond(equal(m.counter2, 1), 0, (m.counter2+0.05)), 1);
m.cdelay1 = ifcond(equal(m.cdelay2, 1), 1, ifcond(equal(mod(m.colorcounter,2), 1), ifcond(equal(m.counter1, 1), 2, 0), ifcond(equal(m.counter2, 1), 2, 0)));
m.cdelay2 = ifcond(equal(m.cdelay1, 2), 1, 0);
m.colorcounter = ifcond(above(m.colorcounter, 7), 0, ifcond(equal(m.cdelay1, 1), (m.colorcounter+1), m.colorcounter));
m.oldx = ifcond(equal(mod(m.colorcounter,2), 1), ifcond(equal(m.counter1, 0.95), m.rx, m.oldx), ifcond(equal(m.counter2, 0.95), m.rx, m.oldx));
m.oldy = ifcond(equal(mod(m.colorcounter,2), 1), ifcond(equal(m.counter1, 0.95), m.ry, m.oldy), ifcond(equal(m.counter2, 0.95), m.ry, m.oldy));
m.rx = ifcond(equal(m.cdelay1, 1), (Math.floor(rand(100))*0.01), m.rx);
m.ry = ifcond(equal(m.cdelay1, 1), (Math.floor(rand(100))*0.01), m.ry);
m.xm = ifcond(equal(m.cdelay1, 1), ((m.rx-m.oldx)*0.05), m.xm);
m.ym = ifcond(equal(m.cdelay1, 1), ((m.ry-m.oldy)*0.05), m.ym);
m.monitor = m.colorcounter;
m.wave_r = (m.bass*0.4);
m.wave_g = (m.treb*0.4);
m.wave_b = (m.mid*0.4);
m.wave_a = m.bass;
m.wave_mystery = (-0.5+(m.bass*0.1));
m.wave_x = (m.rx-ifcond(equal(mod(m.colorcounter,2), 1), (Math.abs((m.counter1-1))*(m.xm*20)), (Math.abs((m.counter2-1))*(m.xm*20))));
m.wave_y = (m.ry-ifcond(equal(mod(m.colorcounter,2), 1), (Math.abs((m.counter1-1))*(m.ym*20)), (Math.abs((m.counter2-1))*(m.ym*20))));
m.zoom = 0.995;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
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
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.it = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.it = (m.it+1);
m.a = equal(mod(m.it,20), 0);
m.a = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.x = (Math.floor(rand(101))*0.01);
m.y = (Math.floor(rand(101))*0.01);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('it = it + 1;\n' + 'a = equal(it%20,0);\n' + 'a = 1;'),
		'point_eqs_str' : ('x = int(rand(101))*.01;\n' + 'y = int(rand(101))*.01;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 3.0,
			g : 1.0,
			scaling : 1.32735,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 0.0,
			sep : 51.0,
			},
		'init_eqs' : function(m) {
m.mod = 0;
m.sw = 0;
m.it = 0;
m.dt = 0;
m.bx = 0;
m.ax = 0;
m.by = 0;
m.ay = 0;
m.tm = 0;
m.t1 = 0;
m.sp = 0;
m.t2 = 0;

			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tm = ((Math.floor(rand(101))*0.01)*6.24);
m.dt = (Math.floor(rand(101))*0.01);
m.t1 = (0.5+((0.5*Math.sin(m.tm))*m.dt));
m.t2 = (0.5+((0.5*Math.cos(m.tm))*m.dt));
m.r = (0.5+(0.5*Math.sin((m.time*1.132))));
m.g = (0.5+(0.5*Math.sin((m.time*1.121))));
m.b = (0.5+(0.5*Math.sin((m.time*1.187))));
		return m;
	},
		'point_eqs' : function(m) {
m.sp = Math.floor((m.sample*4));
m.sw = equal(mod(m.it,2), 0);
m.it = ifcond(equal(m.sample, 0), 0, (m.it+1));
m.mod = m.bass;
m.ax = (m.t1+((Math.sin((m.sample*6.28))*m.mod)*0.1));
m.ay = (m.t2+((Math.cos((m.sample*6.28))*m.mod)*0.1));
m.bx = (m.t1+((Math.sin((m.sample*6.28))*m.mod)*0.005));
m.by = (m.t2+((Math.cos((m.sample*6.28))*m.mod)*0.005));
m.x = ifcond(m.sw, m.bx, m.ax);
m.y = ifcond(m.sw, m.by, m.ay);
m.a = ifcond(m.sw, (equal(Math.floor(rand(7)), 0)*0.1), 0);
m.a = (m.sw*0.2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tm = int(rand(101))*.01*6.24;\n' + 'dt = int(rand(101))*.01;\n' + 't1 = .5 + .5*sin(tm)*dt;\n' + 't2 = .5 + .5*cos(tm)*dt;\n' + 'r = .5 + .5*sin(time*1.132);\n' + 'g = .5 + .5*sin(time*1.121);\n' + 'b = .5 + .5*sin(time*1.187);'),
		'point_eqs_str' : ('sp = int(sample*4);\n' + 'sw = equal(it%2,0);\n' + 'it = if(equal(sample,0),0,it + 1);\n' + 'mod = bass;\n' + 'ax = t1 + sin(sample*6.28)*mod*.1;\n' + 'ay = t2 + cos(sample*6.28)*mod*.1;\n' + 'bx = t1 + sin(sample*6.28)*mod*.005;\n' + 'by = t2 + cos(sample*6.28)*mod*.005;\n' + 'x = if(sw,bx,ax);\n' + 'y = if(sw,by,ay);\n' + 'a = if(sw,equal(int(rand(7)),0)*.1,0);\n' + 'a = sw*.2;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 3.0,
			g : 1.0,
			scaling : 1.32735,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 1.0,
			sep : 51.0,
			},
		'init_eqs' : function(m) {
m.mod = 0;
m.sw = 0;
m.it = 0;
m.dt = 0;
m.bx = 0;
m.ax = 0;
m.by = 0;
m.ay = 0;
m.tm = 0;
m.t1 = 0;
m.sp = 0;
m.t2 = 0;

			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tm = ((Math.floor(rand(101))*0.01)*6.24);
m.dt = (Math.floor(rand(101))*0.01);
m.t1 = (0.5+((0.5*Math.sin(m.tm))*m.dt));
m.t2 = (0.5+((0.5*Math.cos(m.tm))*m.dt));
m.r = (0.5+(0.5*Math.sin((m.time*1.132))));
m.g = (0.5+(0.5*Math.sin((m.time*1.121))));
m.b = (0.5+(0.5*Math.sin((m.time*1.187))));
		return m;
	},
		'point_eqs' : function(m) {
m.sp = Math.floor((m.sample*4));
m.sw = equal(mod(m.it,2), 0);
m.it = ifcond(equal(m.sample, 0), 0, (m.it+1));
m.mod = m.treb;
m.ax = (m.t1+((Math.sin((m.sample*6.28))*m.mod)*0.1));
m.ay = (m.t2+((Math.cos((m.sample*6.28))*m.mod)*0.1));
m.bx = (m.t1+((Math.sin((m.sample*6.28))*m.mod)*0.005));
m.by = (m.t2+((Math.cos((m.sample*6.28))*m.mod)*0.005));
m.x = ifcond(m.sw, m.bx, m.ax);
m.y = ifcond(m.sw, m.by, m.ay);
m.a = ifcond(m.sw, (equal(Math.floor(rand(7)), 0)*0.1), 0);
m.a = (m.sw*0.2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tm = int(rand(101))*.01*6.24;\n' + 'dt = int(rand(101))*.01;\n' + 't1 = .5 + .5*sin(tm)*dt;\n' + 't2 = .5 + .5*cos(tm)*dt;\n' + 'r = .5 + .5*sin(time*1.132);\n' + 'g = .5 + .5*sin(time*1.121);\n' + 'b = .5 + .5*sin(time*1.187);'),
		'point_eqs_str' : ('sp = int(sample*4);\n' + 'sw = equal(it%2,0);\n' + 'it = if(equal(sample,0),0,it + 1);\n' + 'mod = treb;\n' + 'ax = t1 + sin(sample*6.28)*mod*.1;\n' + 'ay = t2 + cos(sample*6.28)*mod*.1;\n' + 'bx = t1 + sin(sample*6.28)*mod*.005;\n' + 'by = t2 + cos(sample*6.28)*mod*.005;\n' + 'x = if(sw,bx,ax);\n' + 'y = if(sw,by,ay);\n' + 'a = if(sw,equal(int(rand(7)),0)*.1,0);\n' + 'a = sw*.2;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 3.0,
			g : 1.0,
			scaling : 1.32735,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 1.0,
			sep : 51.0,
			},
		'init_eqs' : function(m) {
m.sw = 0;
m.it = 0;
m.dt = 0;
m.bx = 0;
m.ax = 0;
m.by = 0;
m.ay = 0;
m.tm = 0;
m.t1 = 0;
m.sp = 0;
m.t2 = 0;

			m.rkeys = ['it'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tm = ((Math.floor(rand(101))*0.01)*6.24);
m.dt = (Math.floor(rand(101))*0.01);
m.t1 = (0.5+((0.5*Math.sin(m.tm))*m.dt));
m.t2 = (0.5+((0.5*Math.cos(m.tm))*m.dt));
m.r = (0.5+(0.5*Math.sin((m.time*1.132))));
m.g = (0.5+(0.5*Math.sin((m.time*1.121))));
m.b = (0.5+(0.5*Math.sin((m.time*1.187))));
		return m;
	},
		'point_eqs' : function(m) {
m.sp = Math.floor((m.sample*4));
m.sw = equal(mod(m.it,2), 0);
m.it = ifcond(equal(m.sample, 0), 0, (m.it+1));
m.ax = (m.t1+((Math.sin((m.sample*6.28))*m.mid)*0.1));
m.ay = (m.t2+((Math.cos((m.sample*6.28))*m.mid)*0.1));
m.bx = (m.t1+((Math.sin((m.sample*6.28))*m.mid)*0.005));
m.by = (m.t2+((Math.cos((m.sample*6.28))*m.mid)*0.005));
m.x = ifcond(m.sw, m.bx, m.ax);
m.y = ifcond(m.sw, m.by, m.ay);
m.a = ifcond(m.sw, (equal(Math.floor(rand(7)), 0)*0.1), 0);
m.a = (m.sw*0.2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tm = int(rand(101))*.01*6.24;\n' + 'dt = int(rand(101))*.01;\n' + 't1 = .5 + .5*sin(tm)*dt;\n' + 't2 = .5 + .5*cos(tm)*dt;\n' + 'r = .5 + .5*sin(time*1.132);\n' + 'g = .5 + .5*sin(time*1.121);\n' + 'b = .5 + .5*sin(time*1.187);'),
		'point_eqs_str' : ('sp = int(sample*4);\n' + 'sw = equal(it%2,0);\n' + 'it = if(equal(sample,0),0,it + 1);\n' + 'ax = t1 + sin(sample*6.28)*mid*.1;\n' + 'ay = t2 + cos(sample*6.28)*mid*.1;\n' + 'bx = t1 + sin(sample*6.28)*mid*.005;\n' + 'by = t2 + cos(sample*6.28)*mid*.005;\n' + 'x = if(sw,bx,ax);\n' + 'y = if(sw,by,ay);\n' + 'a = if(sw,equal(int(rand(7)),0)*.1,0);\n' + 'a = sw*.2;'),

		}
],
	'shapes' : [
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
	'comp' : ('shader_body {\n' + '   vec3 orig_1;\n' + '   vec3 ret_2;\n' + '   float tmpvar_3;\n' + '  tmpvar_3 = fract(((\n' + '    (ang / 6.28)\n' + '   * 9.0) + (time * 0.05)));\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = cos(tmpvar_3);\n' + '  tmpvar_4.y = sin(tmpvar_3);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (0.5 + ((1.75 * \n' + '    (rad * rad)\n' + '  ) * tmpvar_4));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, tmpvar_5);\n' + '  ret_2 = tmpvar_6.xyz;\n' + '  orig_1 = ret_2;\n' + '  ret_2.yz = vec2(dot (ret_2, vec3(0.32, 0.49, 0.29)));\n' + '  ret_2.x = orig_1.x;\n' + '  ret_2 = (-0.3 + (1.6 * ret_2));\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('colorcounter = 1;\n' + 'counter1 = 0;\n' + 'counter2 = 1;\n' + 'cdelay1 = 0;\n' + 'cdelay2 = 0;\n' + 'rx = .5;\n' + 'ry = .5;\n' + 'xm = 0;\n' + 'ym =0;\n' + 'orx = .5;\n' + 'ory = .5;\n' + 'wave_x = .5;\n' + 'wave_y = .5;\n' + 'oldx = int(rand(100))*.01;\n' + 'oldy = int(rand(100))*.01;'),
	'frame_eqs_str' : ('warp = 0;\n' + 'counter1 = if(equal(counter2,1),if(equal(counter1,1),0,counter1+.05),1);\n' + 'counter2 = if(equal(counter1,1),if(equal(counter2,1),0,counter2+.05),1);\n' + 'cdelay1 = if(equal(cdelay2,1),1,if(equal(colorcounter%2,1),if(equal(counter1,1),2 ,0), if(equal(counter2,1),2,0)));\n' + 'cdelay2 = if(equal(cdelay1,2),1,0);\n' + 'colorcounter = if(above(colorcounter,7),0,if(equal(cdelay1,1),colorcounter+1,colorcounter));\n' + 'oldx = if(equal(colorcounter%2,1),if(equal(counter1,.95),rx,oldx),if(equal(counter2,.95),rx,oldx));\n' + 'oldy = if(equal(colorcounter%2,1),if(equal(counter1,.95),ry,oldy),if(equal(counter2,.95),ry,oldy));\n' + 'rx = if(equal(cdelay1,1),int(rand(100))*.01,rx);\n' + 'ry = if(equal(cdelay1,1),int(rand(100))*.01,ry);\n' + 'xm = if(equal(cdelay1,1),(rx - oldx)*.05,xm);\n' + 'ym = if(equal(cdelay1,1),(ry - oldy)*.05,ym);\n' + 'monitor = colorcounter;\n' + 'wave_r = bass*.4;\n' + 'wave_g = treb*.4;\n' + 'wave_b = mid*.4;\n' + 'wave_a = bass;\n' + 'wave_mystery = -.5+bass*.1;\n' + 'wave_x = rx - (if(equal(colorcounter%2,1),abs(counter1-1)*(xm*20),abs(counter2-1)*(xm*20)));\n' + 'wave_y = ry - (if(equal(colorcounter%2,1),abs(counter1-1)*(ym*20),abs(counter2-1)*(ym*20)));\n' + 'zoom = .995;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
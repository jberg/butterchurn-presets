define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.75,
		mv_x : 64.0,
		warpscale : 16.217,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.64,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.025,
		b2x : 1.0,
		warp : 1.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.50374,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 1.0,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.02,
		b1ed : 0.25,
		wave_smoothing : 0.27,
		warpanimspeed : 9.861,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.96,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.75,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.q2 = 0;
m.att = 0;
m.vtime = 0;
m.meanbass_att = 0;
m.q8 = 0;
m.dm = 0;
m.yamp = 0;
m.myx = 0;
m.xamp = 0;
m.lastbeat = 0;
m.myy = 0;
m.yamptarg = 0;
m.y_pos = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.movement = 0;
m.xspeed = 0;
m.dt = 0;
m.vol = 0;
m.ydir = 0;
m.xdir = 0;
m.beatrate = 0;
m.beat = 0;
m.volume = 0;
m.ypos = 0;
m.xpos = 0;
m.db = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.volume = (0.3*((m.bass+m.mid)+m.att));
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.25*m.volume)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.15*m.volume)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.beatrate = (equal(m.beatrate, 0)+((1-equal(m.beatrate, 0))*(below(m.volume, 0.01)+((1-below(m.volume, 0.01))*m.beatrate))));
m.lastbeat = (m.lastbeat+(equal(m.lastbeat, 0)*m.time));
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.peakbass_att = Math.max(m.bass_att, m.peakbass_att);
m.beat = ((above(m.volume, 0.8)*below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)))*above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))));
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ((m.beat*m.bass_att)+(((1-m.beat)*m.peakbass_att)*((above((m.time-m.lastbeat), (2*m.beatrate))*0.95)+((1-above((m.time-m.lastbeat), (2*m.beatrate)))*0.995))));
m.lastbeat = ((m.beat*m.time)+((1-m.beat)*m.lastbeat));
m.peakbass_att = Math.max(m.peakbass_att, (1.1*m.meanbass_att));
m.q1 = m.wave_x;
m.q2 = (1-m.wave_y);
m.q2 = (m.ypos+0.5);
m.movement = (m.movement+(0.4*div(((m.bass+m.bass_att)+(0.1*pow(((m.bass+(0.6*m.bass_att))+(0.2*m.treb_att)), 3))),m.fps)));
m.movement = ifcond(above(m.movement, 10000), 0, m.movement);
m.rot = (1*Math.sin(m.movement));
m.cx = m.wave_x;
m.cy = (m.y_pos+0.5);
m.q8 = m.movement;
m.db = ((m.db*0.8)+(m.bass*0.2));
m.dt = ((m.dt*0.8)+(m.treb*0.2));
m.dm = ((m.dm*0.8)+(m.mid*0.2));
m.vol = (((m.db+m.dt)+m.dm)*0.2);
m.vol = (m.vol*m.vol);
m.vtime = (m.vtime+(0.03*m.vol));
m.monitor = m.vtime;
m.wave_r = (0.5+(0.5*Math.sin((1.6*m.vtime))));
m.wave_g = (0.5+(0.5*Math.sin((4.1*m.vtime))));
m.wave_b = (-1+(((1-m.wave_r)+1)-m.wave_g));
m.warp = 2;
m.ob_r = (m.ob_r+(m.wave_b*above(Math.sin((0.1*m.vtime)), 0)));
m.ob_b = (m.ob_b+(m.wave_g*above(Math.sin((0.1*m.vtime)), 0)));
m.ob_g = (m.ob_g+(m.wave_r*above(Math.sin((0.1*m.vtime)), 0)));
m.ob_r = (m.ob_r+(m.wave_g*below(Math.sin((0.1*m.vtime)), 0)));
m.ob_b = (m.ob_b+(m.wave_r*below(Math.sin((0.1*m.vtime)), 0)));
m.ob_g = (m.ob_g+(m.wave_b*below(Math.sin((0.1*m.vtime)), 0)));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.myy = (m.x-m.q1);
m.myx = ((m.y-m.q2)+0.1);
m.dx = ((3*Math.sin((m.q8*0.675)))*((2*m.myx)*m.myy));
m.dy = ((3*Math.sin((m.q8*0.675)))*((m.myx*m.myx)-(m.myy*m.myy)));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.2,
			scaling : 0.44665,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
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
			scaling : 2.0231,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.d = 0;
m.t8 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.cl = 0;
			m.rkeys = ['d','t1','t2','t3'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t8 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.t3 = ((m.t3*0.6)+(m.value1*1));
m.t2 = ((m.t2*0.7)+(m.t3*0.2));
m.t1 = ((m.t1*0.8)+(m.t2*0.1));
m.d = ((m.d*0.9)+(m.t1*0.2));
m.y = (0.5+((m.d*m.sample)*(1-m.sample)));
m.x = (0.2+(m.sample*0.6));
m.t8 = 0;
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'cl = 0;'),
		'frame_eqs_str' : ('t8 = 1;'),
		'point_eqs_str' : ('t3 = t3*0.6 + (value1)*1;\n' + 't2 = t2*0.7 + t3*0.2;\n' + 't1 = t1*0.8 + t2*0.1;\n' + 'd = d*0.9 + t1*0.2;\n' + 'y = 0.5 + d*sample*(1-sample);\n' + 'x =  .2 + sample*0.6;\n' + 't8 = 0;'),

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
			a : 0.5,
			enabled : 1.0,
			b : 0.4,
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
			a2 : 0.2,
			r : 1.0,
			border_g : 1.0,
			rad : 0.2,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			num_inst : 1.0,
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
			a2 : 0.2,
			r : 1.0,
			border_g : 1.0,
			rad : 0.2,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			num_inst : 1.0,
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
			a2 : 0.2,
			r : 1.0,
			border_g : 1.0,
			rad : 0.2,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
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
	'warp' : ('shader_body {\n' + '   vec2 my_uv2_1;\n' + '   vec2 my_uv_2;\n' + '   vec3 ret_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = ((uv - 0.5) * vec2(2.9, 2.9));\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = ((tmpvar_4.x * tmpvar_4.x) - (tmpvar_4.y * tmpvar_4.y));\n' + '  tmpvar_5.y = ((2.0 * tmpvar_4.x) * tmpvar_4.y);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = -((tmpvar_5.y * 2.0));\n' + '  tmpvar_6.y = (tmpvar_5.x * 2.0);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7.x = ((tmpvar_5.x * (tmpvar_6.x + 1.0)) + (tmpvar_5.y * tmpvar_6.y));\n' + '  tmpvar_7.y = ((tmpvar_5.y * (tmpvar_6.x + 1.0)) - (tmpvar_5.x * tmpvar_6.y));\n' + '  my_uv_2 = (tmpvar_7 * (1.0/((\n' + '    ((tmpvar_6.x + 1.0) * (tmpvar_6.x + 1.0))\n' + '   + \n' + '    (tmpvar_6.y * tmpvar_6.y)\n' + '  ))));\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = ((uv_orig - 0.5) * vec2(1.84, 1.84));\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9.x = ((tmpvar_8.x * tmpvar_8.x) - (tmpvar_8.y * tmpvar_8.y));\n' + '  tmpvar_9.y = ((2.0 * tmpvar_8.x) * tmpvar_8.y);\n' + '  my_uv2_1 = (tmpvar_9 + vec2(0.2806, 0.4508));\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (my_uv_2 - floor(my_uv_2));\n' + '  tmpvar_10 = texture2D (sampler_fw_main, P_11);\n' + '  ret_3.z = ((tmpvar_10.z * 0.9) - 0.04);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_fc_main, my_uv2_1);\n' + '  ret_3.x = (tmpvar_12.x - 0.008);\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = mix (my_uv_2, my_uv2_1, vec2(0.8, 0.8));\n' + '  my_uv_2 = tmpvar_13;\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (tmpvar_13 - floor(tmpvar_13));\n' + '  tmpvar_14 = texture2D (sampler_fw_main, P_15);\n' + '  ret_3.y = ((tmpvar_14.y * 0.9) - 0.004);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp float xlat_mutablea;\n' + 'highp float xlat_mutableb;\n' + 'highp float xlat_mutablec;\n' + 'shader_body {\n' + '   vec2 uv_1;\n' + '  uv_1 = ((0.5 + (\n' + '    (uv - 0.5)\n' + '   * 0.8)) - vec2(0.0, 0.05));\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_blur3, uv_1);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur2, uv_1);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv_1);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, uv_1);\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = (((\n' + '    (((tmpvar_2.xyz * scale3) + bias3) + ((tmpvar_3.xyz * scale2) + bias2))\n' + '   + \n' + '    ((tmpvar_4.xyz * scale1) + bias1)\n' + '  ) + tmpvar_5.xyz) + 0.04);\n' + '  xlat_mutablea = (tmpvar_6.x / 4.0);\n' + '  xlat_mutableb = (tmpvar_6.y / 4.0);\n' + '  xlat_mutablec = (tmpvar_6.z / 4.0);\n' + '  xlat_mutablec = ((xlat_mutablec + xlat_mutableb) - (xlat_mutablec * xlat_mutableb));\n' + '  xlat_mutablea = ((xlat_mutablea + xlat_mutablec) - (xlat_mutablea * xlat_mutablec));\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = vec3((1.5 * xlat_mutablea));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = ((vec3(-0.2, 2.0, -0.4) * (\n' + '    (tmpvar_7 * (1.0 - tmpvar_7))\n' + '   * \n' + '    (1.0 - tmpvar_7)\n' + '  )) + ((tmpvar_7 * tmpvar_7) * vec3(0.4, 0.1, 0.0)));\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'volume = 0.3*(bass+mid+att);\n' + 'xamptarg = if(equal(frame%15,0),min(0.25*volume*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'yamptarg = if(equal(frame%15,0),min(0.15*volume*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);\n' + 'lastbeat = lastbeat + equal(lastbeat,0)*time;\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = max(bass_att,peakbass_att);\n' + 'beat = above(volume,0.8)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.95 + (1-above(time - lastbeat, 2*beatrate))*0.995);\n' + 'lastbeat = beat*time + (1-beat)*lastbeat;\n' + 'peakbass_att = max(peakbass_att,1.1*meanbass_att);\n' + 'q1 = wave_x;\n' + 'q2 = 1-wave_y;\n' + 'q2 = ypos+0.5;\n' + 'movement =movement + 0.4*(((bass+bass_att + 0.1*pow((bass+0.6*bass_att+0.2*treb_att),3)))/fps);\n' + 'movement = if(above(movement,10000), 0, movement);\n' + 'rot =1*sin(movement);\n' + 'cx = wave_x;\n' + 'cy = y_pos+0.5;\n' + 'q8 = movement;\n' + 'db = db*0.8 + bass*0.2;\n' + 'dt = dt*0.8 + treb*0.2;\n' + 'dm = dm*0.8 + mid*0.2;\n' + 'vol = (db+dt+dm)*.2;\n' + 'vol = vol*vol;\n' + 'vtime = vtime + .03*vol;\n' + 'monitor = vtime;\n' + 'wave_r = 0.5 + 0.5*sin(1.6*vtime);\n' + 'wave_g = 0.5 + 0.5*sin(4.1*vtime);\n' + 'wave_b = -1 + (1-wave_r + 1-wave_g);\n' + 'warp = 2;\n' + 'ob_r = ob_r+wave_b*above(sin(0.1*vtime),0);\n' + 'ob_b = ob_b+wave_g*above(sin(0.1*vtime),0);\n' + 'ob_g = ob_g+wave_r*above(sin(0.1*vtime),0);\n' + 'ob_r = ob_r+wave_g*below(sin(0.1*vtime),0);\n' + 'ob_b = ob_b+wave_r*below(sin(0.1*vtime),0);\n' + 'ob_g = ob_g+wave_b*below(sin(0.1*vtime),0);'),
	'pixel_eqs_str' : ('myy = x-q1;\n' + 'myx = y-q2+0.1;\n' + 'dx = 3*sin(q8*0.675)*(2*myx*myy);\n' + 'dy = 3*sin(q8*0.675)*((myx*myx) - (myy*myy));'),
};

return pmap;
});
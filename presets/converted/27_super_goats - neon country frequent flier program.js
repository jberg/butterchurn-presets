define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.303,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 0.7,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.36,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 1.0,
		wave_y : 0.6,
		zoom : 0.9995,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : -0.002,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.9,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.5,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.118,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.19,
		b2n : 0.0,
		modwavealphastart : 0.52,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.decay_to = 0;
m.q1 = 0;
m.bc = 0;
m.q2 = 0;
m.q3 = 0;
m.prev_beat = 0;
m.avgbr = 0;
m.avgdt = 0;
m.avgdb2 = 0;
m.q4 = 0;
m.const = 0;
m.q5 = 0;
m.q6 = 0;
m.decay_rate = 0;
m.q7 = 0;
m.beatb2 = 0;
m.q8 = 0;
m.ltreb = 0;
m.q9 = 0;
m.bool2 = 0;
m.bool = 0;
m.lbass = 0;
m.is_beat = 0;
m.beatb = 0;
m.const2 = 0;
m.q20 = 0;
m.avgbr2 = 0;
m.q10 = 0;
m.q21 = 0;
m.avgdb = 0;
m.bc2 = 0;
m.q11 = 0;
m.q22 = 0;
m.q12 = 0;
m.q23 = 0;
m.lbt2 = 0;
m.q14 = 0;
m.min_att = 0;
m.q15 = 0;
m.beat = 0;
m.phase2 = 0;
m.ph = 0;
m.mtime2 = 0;
m.mtime = 0;
m.ph2 = 0;
m.rbeatb = 0;
m.phase = 0;
m.beat_level = 0;
m.db = 0;
m.lbt = 0;
m.db = 0.001;
m.avgdb = (Math.abs((m.bass-m.bass_att))*5);
m.avgdb2 = (Math.abs((m.bass-m.bass_att))*10);
m.lbass = m.bass_att;
m.avgbr = 1;
m.beatb = 0;
m.lbt = m.time;
m.rbeat = 0;
m.ph = 0;
m.phase = 0;
m.bool = 0;
m.const = 0.01;
m.ph2 = 0;
m.phase2 = 0;
m.bool2 = 0;
m.const2 = 0.01;
m.mtime = (100+(m.bass_att*1000));
		return m;
	},
	'frame_eqs' : function(m) {
m.db = ((m.bass-m.lbass)*m.fps);
m.ltreb = m.treb;
m.avgdb = ((m.avgdb*0.9)+(Math.abs(m.db)*0.1));
m.avgdb2 = ((m.avgdb2*0.99)+(Math.abs(m.db)*0.01));
m.rbeatb = above(Math.abs(m.db), (m.avgdb*2));
m.beatb = (m.rbeatb*above((m.time-m.lbt), (m.avgbr*0.75)));
m.decay_rate = pow(0.993, m.fps);
m.min_att = 2.5;
m.decay_to = 1.0;
m.beat = div(m.bass,Math.max(m.min_att, m.bass_att));
m.beat = Math.max(m.beat, div(m.mid,Math.max(m.min_att, m.mid_att)));
m.beat = Math.max(m.beat, div(m.treb,Math.max(m.min_att, m.treb_att)));
m.beat = Math.max(m.beat, (((m.prev_beat-m.decay_to)*m.decay_rate)+m.decay_to));
m.beat_level = ((((m.beat-m.prev_beat)-0.07)*24)+1);
m.is_beat = above(m.beat_level, 0.5);
m.prev_beat = m.beat;
m.beatb2 = m.is_beat;
m.avgbr = ((m.beatb*((m.avgbr*0.99)+((m.time-m.lbt)*0.01)))+((1-m.beatb)*(m.avgbr+((3-m.avgbr)*0.00001))));
m.avgbr2 = ((m.beatb2*((m.avgbr2*0.99)+((m.time-m.lbt2)*0.01)))+((1-m.beatb2)*(m.avgbr2+((3-m.avgbr2)*0.00001))));
m.lbt = ((m.time*m.beatb)+((1-m.beatb)*m.lbt));
m.lbt2 = ((m.time*m.beatb2)+((1-m.beatb2)*m.lbt2));
m.ph = (((m.time-m.lbt)*div(60,m.avgbr))*m.const);
m.phase = Math.max(Math.min(m.ph, 1), 0);
m.const = ((m.const*(1-m.beatb))+(m.beatb*(m.const+(0.002*m.bool))));
m.bool = ((below(m.phase, 0.98)*(0.98-m.ph))-(above(m.phase, 0.98)*(m.ph*0.5)));
m.ph2 = (((m.time-m.lbt2)*div(60,m.avgbr2))*m.const2);
m.phase2 = Math.max(Math.min(m.ph2, 1), 0);
m.const2 = ((m.const2*(1-m.beatb2))+(m.beatb2*(m.const2+(0.002*m.bool2))));
m.bool2 = ((below(m.phase2, 0.98)*(0.98-m.ph2))-(above(m.phase2, 0.98)*(m.ph2*0.5)));
m.bc = (m.bc+m.beatb);
m.bc2 = (m.bc2+m.beatb2);
m.mtime = (m.mtime+(((m.avgdb*m.avgbr)*0.1)*div(1,m.fps)));
m.mtime2 = (m.mtime2+(((m.avgdt*m.avgbr2)*0.1)*div(1,m.fps)));
m.q1 = (1-m.phase);
m.q2 = (1-m.phase2);
m.q3 = m.bc;
m.q4 = m.bc2;
m.q5 = m.mtime;
m.q6 = m.mtime2;
m.q7 = ((Math.sin(m.mtime)*0.5)+0.5);
m.q8 = ((Math.sin(m.mtime2)*0.5)+0.5);
m.q9 = ((Math.sin((m.mtime*0.01))*0.5)+0.5);
m.q10 = ((Math.sin((m.mtime2*0.01))*0.5)+0.5);
m.q11 = m.avgdb;
m.q12 = m.avgdt;
m.q14 = div(60,m.avgbr);
m.q15 = div(60,m.avgbr2);
m.q20 = m.beatb;
m.q21 = m.beatb2;
m.q22 = mod(m.bc,4);
m.q23 = mod(m.bc2,4);
m.monitor = m.q1;
m.decay = 1;
m.wrap = 1;
m.zoom = 0.978;
m.dx = 0.002;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.warp = ((0.1*m.y)+0.1);
m.dx = (-0.001+((0.01*m.y)*-Math.cos((m.x+(Math.sin(m.time)*0.15)))));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.2,
			enabled : 0.0,
			b : 0.9,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.0,
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
		'point_eqs' : function(m) {
m.x = m.sample;
m.y = (0.80+(m.value1*0.01));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = sample;\n' + 'y = 0.80+value1*0.01;'),

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
			a : 0.5,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.003,
			border_b : 0.7,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.7,
			rad : 0.01489,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 20.0,
			border_r : 0.7,
			num_inst : 184.0,
			},
		'init_eqs' : function(m) {
m.rand1 = 0;
m.rand2 = 0;
m.t = 0;
m.v = 0;
m.w = 0;
m.t1 = 0;
m.t2 = 0;
m.t1 = 0.4322;
m.t2 = 0.57;
m.pi = 3.14135297;
			m.rkeys = ['rand1','rand2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rand1 = ifcond(equal(m.instance, 0), m.t1, m.rand1);
m.rand2 = ifcond(equal(m.instance, 0), m.t2, m.rand2);
m.rand1 = ((4*m.rand1)*(1-m.rand1));
m.rand2 = ((4*m.rand2)*(1-m.rand2));
m.a = (m.treb*0.3);
m.g = div(mod(m.frame,5),10);
m.r = (m.bass*0.1);
m.v = (0.02+(0.4*m.rand1));
m.w = m.rand2;
m.t = (((10*m.time)*m.rand1)*rand(10));
m.y = (0.5+(m.v*Math.tan(m.t)));
m.x = (0.6+((0.6*m.w)*Math.cos(m.t)));
m.rad = ((0.02*m.treb)+((((3*m.bass)*Math.sin((m.x*3.141)))*0.05)*(1-(0.5*m.rand1))));
m.sides = (mod((100*m.rand2),9)+4);
m.a = ifcond(above(m.y, 0.18), 0, m.a);
		return m;
	},
		'init_eqs_str' : ('t1 = 0.4322;\n' + 't2 = 0.57;\n' + 'pi =3.14135297;'),
		'frame_eqs_str' : ('rand1 = if(equal(instance,0), t1, rand1);\n' + 'rand2 = if(equal(instance,0), t2, rand2);\n' + 'rand1 = 4 * rand1 * (1-rand1);\n' + 'rand2 = 4 * rand2 * (1-rand2);\n' + 'a = treb *0.3;\n' + 'g = (frame%5)/10;\n' + 'r = bass*0.1;\n' + 'v = 0.02+0.4*rand1;\n' + 'w = rand2;\n' + 't = 10*time * rand1* rand(10);\n' + 'y = 0.5 + v * tan(t);\n' + 'x = 0.6 + 0.6*w * cos(t);\n' + 'rad = 0.02*treb + 3*bass*sin(x*3.141)*0.05*(1-(0.5*rand1));\n' + 'sides = (100 * rand2)%9 +4;\n' + 'a = if(above(y,0.18), 0, a);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.3,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.04,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.005,
			border_b : 1.0,
			b2 : 0.05,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 7.0,
			border_r : 1.0,
			num_inst : 41.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = (m.bass*0.1);
m.a = ((m.treb*0.3)*above((m.bass*6), m.instance));
m.r = (m.mid*0.1);
m.b = 0;
m.x = (rand(100)*0.01);
m.y = (rand(100)*0.002);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad = bass *0.1;\n' + 'a = treb *0.3*(above(bass*6,instance));\n' + 'r = mid*0.1;\n' + 'b = 0;\n' + 'x = rand(100) *0.01;\n' + 'y = rand(100) *0.002;'),

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
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 0.2,
			rad : 0.1,
			x : 0.7,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.trig = 0;
m.q3 = 0.5;
m.yval = 0.5;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.y = (0.56-(0.3*Math.sin(m.time)));
m.x = (0.6-(0.3*Math.sin((m.time*0.3))));
m.trig = below(m.q1, 0.3);
m.r = (m.trig*(1-m.q1));
m.r2 = ((0.4+(0.015*Math.sin(m.frame)))*m.r);
m.g2 = m.r2;
m.b = 0;
m.sides = (3+(20*m.trig));
m.ang = (Math.atan2(Math.cos((0.3*m.time)), Math.cos(m.time))+2.8);
m.rad = ((m.y*0.08)+((0.6*m.trig)*(0.3-m.q1)));
m.a = 1;
m.a2 = ((0.55*(1-m.trig))+((m.trig*m.q1)*0.01));
		return m;
	},
		'init_eqs_str' : ('q3 = 0.5;\n' + 'yval = 0.5;'),
		'frame_eqs_str' : ('y = 0.56 - 0.3 * sin(time);\n' + 'x = 0.6 - 0.3 * sin(time*0.3);\n' + 'trig = below(q1,0.3);\n' + 'r = trig * (1-q1);\n' + 'r2 = (0.4 + 0.015 * sin(frame))*r;\n' + 'g2 = r2;\n' + 'b = 0;\n' + 'sides = 3 + 20 * trig;\n' + 'ang = atan2(cos(0.3*time), cos(time)) + 2.8;\n' + 'rad = y *0.08 + 0.6*trig*(0.3-q1);\n' + 'a = 1;\n' + 'a2 = 0.55*(1-trig) + trig*q1*0.01;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.06,
			enabled : 0.0,
			b : 0.13,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.07,
			border_g : 0.9,
			rad : 1.27635,
			x : 0.7,
			y : 0.81,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {

m.q3 = 0.5;
m.yval = 0.5;
m.y2 = 0.1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = Math.sin(m.frame);
		return m;
	},
		'init_eqs_str' : ('q3 = 0.5;\n' + 'yval = 0.5;\n' + 'y2 = 0.1;'),
		'frame_eqs_str' : ('x = sin(frame);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec4 noiseVal_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_fc_main, uv);\n' + '  ret_2 = tmpvar_3.xyz;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_noise_lq, tmpvar_4);\n' + '  noiseVal_1 = tmpvar_5;\n' + '  ret_2 = (ret_2 + ((\n' + '    (noiseVal_1.y * 2.0)\n' + '   - 1.0) * 0.002));\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = (0.5 + (0.5 * sin(\n' + '    -(uv.x)\n' + '  )));\n' + '  tmpvar_6.y = (0.8 - uv.y);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (tmpvar_6 + 0.1);\n' + '  tmpvar_7 = texture2D (sampler_blur1, P_8);\n' + '  ret_2 = (ret_2 + ((\n' + '    ((((tmpvar_7.xyz * scale1) + bias1).zzz * tmpvar_6.y) * tmpvar_6.y)\n' + '   * tmpvar_6.y) * 0.005));\n' + '  ret_2 = (ret_2 * 0.978);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9.w = 1.0;\n' + '  tmpvar_9.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_9;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 * 2.0);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uv);\n' + '  ret_1 = (ret_1 + ((tmpvar_3.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('db=.001;\n' + 'avgdb=abs(bass-bass_att)*5;\n' + 'avgdb2=abs(bass-bass_att)*10;\n' + 'lbass=bass_att;\n' + 'avgbr=1;\n' + 'beatb=0;\n' + 'lbt=time;\n' + 'rbeat=0;\n' + 'ph=0;\n' + 'phase=0;\n' + 'bool=0;\n' + 'const=.01;\n' + 'ph2=0;\n' + 'phase2=0;\n' + 'bool2=0;\n' + 'const2=.01;\n' + 'mtime=100+bass_att*1000;'),
	'frame_eqs_str' : ('db=(bass-lbass)*fps;\n' + 'ltreb=treb;\n' + 'avgdb=avgdb*.9+abs(db)*.1;\n' + 'avgdb2=avgdb2*.99+abs(db)*.01;\n' + 'rbeatb=above(abs(db),avgdb*2);\n' + 'beatb=rbeatb*above(time-lbt,avgbr*.75);\n' + 'decay_rate = pow(0.993, fps);\n' + 'min_att    = 2.5;\n' + 'decay_to   = 1.0;\n' + 'beat =           bass/max(min_att,bass_att);\n' + 'beat = max(beat, mid /max(min_att,mid_att ));\n' + 'beat = max(beat, treb/max(min_att,treb_att));\n' + 'beat = max( beat, (prev_beat-decay_to)*decay_rate + decay_to );\n' + 'beat_level     = (beat - prev_beat - 0.07)*24+1;\n' + 'is_beat = above(beat_level, 0.5);\n' + 'prev_beat = beat;\n' + 'beatb2 = is_beat;\n' + 'avgbr=beatb*(avgbr*.99+(time-lbt)*.01)+(1-beatb)*(avgbr+(3-avgbr)*.00001);\n' + 'avgbr2=beatb2*(avgbr2*.99+(time-lbt2)*.01)+(1-beatb2)*(avgbr2+(3-avgbr2)*.00001);\n' + 'lbt=time*beatb+(1-beatb)*lbt;\n' + 'lbt2=time*beatb2+(1-beatb2)*lbt2;\n' + 'ph=(time-lbt)*(60/avgbr)*const;\n' + 'phase=max(min( ph, 1 ),0);\n' + 'const=const*(1-beatb)+beatb*( const+ (.002*bool) );\n' + 'bool=below(phase,.98)*(.98-ph)-above(phase,.98)*(ph*.5);\n' + 'ph2=(time-lbt2)*(60/avgbr2)*const2;\n' + 'phase2=max(min( ph2, 1 ),0);\n' + 'const2=const2*(1-beatb2)+beatb2*( const2+ (.002*bool2) );\n' + 'bool2=below(phase2,.98)*(.98-ph2)-above(phase2,.98)*(ph2*.5);\n' + 'bc=bc+beatb;\n' + 'bc2=bc2+beatb2;\n' + 'mtime=mtime+( (avgdb*avgbr)*.1 )*(1/fps);\n' + 'mtime2=mtime2+( (avgdt*avgbr2)*.1 )*(1/fps);\n' + 'q1=1-phase;\n' + 'q2=1-phase2;\n' + 'q3=bc;\n' + 'q4=bc2;\n' + 'q5=mtime;\n' + 'q6=mtime2;\n' + 'q7=sin(mtime)*.5+.5;\n' + 'q8=sin(mtime2)*.5+.5;\n' + 'q9=sin(mtime*.01)*.5+.5;\n' + 'q10=sin(mtime2*.01)*.5+.5;\n' + 'q11=avgdb;\n' + 'q12=avgdt;\n' + 'q14=60/avgbr;\n' + 'q15=60/avgbr2;\n' + 'q20=beatb;\n' + 'q21=beatb2;\n' + 'q22=bc%4;\n' + 'q23=bc2%4;\n' + 'monitor=q1;\n' + 'decay=1;\n' + 'wrap=1;\n' + 'zoom=0.978;\n' + 'dx=.002;'),
	'pixel_eqs_str' : ('warp = 0.1*y +0.1;\n' + 'dx = -0.001+0.01*y*-cos(x+sin(time)*0.15);'),
};

return pmap;
});
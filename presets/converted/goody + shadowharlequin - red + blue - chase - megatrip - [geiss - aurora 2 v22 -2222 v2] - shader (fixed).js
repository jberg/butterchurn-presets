define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.772,
		brighten : 1.0,
		mv_y : 9.0,
		wave_scale : 4.874,
		echo_alpha : 0.05,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 4.401,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.3,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.01,
		b1ed : 0.8,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.031,
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
		rot : 0.003,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 1.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.2,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.speed = 0;
m.flux = 0;
m.speedinv = 0;
m.qa = 0;
m.qb = 0;
m.qc = 0;
m.t = 0;
m.t2 = 0;
m.t3 = 0;
m.mv_x = 64;
m.mv_y = 48;
m.nut = 0;
m.stp = 0;
m.stq = 0;
m.rtp = 0;
m.rtq = 0;
m.wvr = 0;
m.decay = 0;
m.dcsp = 0;
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.t = (m.time*2.3);
m.t2 = (Math.sin((m.treb_att+m.mid_att))*2.89);
m.t3 = (Math.sin((m.mid_att+m.treb_att))*2.23);
m.wave_x = (m.wave_x+(0.350*((0.70*Math.sin((2.221+m.bass_att)))+(0.30*Math.sin((1.821*m.time))))));
m.wave_y = (m.wave_y+(0.350*((0.30*Math.sin((1.942*m.time)))+(0.70*Math.sin((2.522+m.bass_att))))));
m.wave_r = (m.wave_r+(0.790*((0.60*Math.sin((0.823*m.t3)))+(0.40*Math.sin((0.916*m.t2))))));
m.wave_g = (m.wave_g+(0.790*((0.60*Math.sin((0.900*m.t2)))+(0.40*Math.sin((1.023*m.t2))))));
m.wave_b = (m.wave_b+(0.790*((0.60*Math.sin((0.808*m.t2)))+(0.40*Math.sin((0.949*m.t3))))));
m.rot = (m.rot+(0.010*((0.60*Math.sin((0.038*m.time)))+(0.40*Math.sin((0.054*m.time))))));
m.dx = (m.dx+(0.002*((0.60*Math.sin((0.434*m.time)))+(0.40*Math.sin((0.277*m.time))))));
m.dy = (m.dy+(0.002*((0.60*Math.sin((0.384*m.time)))+(0.40*Math.sin((0.477*m.time))))));
m.warp = (div(Math.sin(m.time),2)-(m.bass_att-m.mid_att));
m.decay = 1;
m.speed = 0.80;
m.speedinv = (1-m.speed);
m.q1 = ((m.qa*m.speed)+(m.bass*m.speedinv));
m.q2 = ((m.qb*m.speed)+(m.mid*m.speedinv));
m.q3 = ((m.qc*m.speed)+(m.treb*m.speedinv));
m.qa = m.q1;
m.qb = m.q2;
m.qc = m.q3;
m.flux = Math.sin(div(m.time,2));
m.q4 = ((m.flux*0.5)+0.5);
m.q5 = m.flux;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.4,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
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
			b : 0.8,
			g : 0.2,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.a = div(Math.sin(m.treb_att),2);
m.t = (m.time*1.9);
m.r = (m.r+(0.790*((0.60*Math.sin((0.823*m.t)))+(0.40*Math.sin((0.916*m.t))))));
		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a = sin(treb_att)/2;\n' + 't=time*1.9;\n' + 'r = r + 0.790*( 0.60*sin(0.823*t) + 0.40*sin(0.916*t) );'),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.a = div(m.treb_att,0.5);
m.t = (m.time*2.1);
m.r = (m.b+(0.490*((0.60*Math.sin((0.803*m.t)))+(0.40*Math.sin((0.946*m.t))))));
m.b = (m.b+(0.490*((0.60*Math.sin((0.828*m.t)))+(0.40*Math.sin((0.959*m.t))))));
		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a = treb_att/0.5;\n' + 't=time*2.1;\n' + 'r = b + 0.490*( 0.60*sin(0.803*t) + 0.40*sin(0.946*t) );\n' + 'b = b + 0.490*( 0.60*sin(0.828*t) + 0.40*sin(0.959*t) );'),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
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
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.a = div(m.mid_att,2);
m.t = (m.time*2.3);
m.r = (m.r+(0.790*((0.60*Math.sin((0.823*m.t)))+(0.40*Math.sin((0.916*m.t))))));
m.b = (m.r+(0.790*((0.60*Math.sin((0.808*m.t)))+(0.40*Math.sin((0.949*m.t))))));
		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a = mid_att/2;\n' + 't=time*2.3;\n' + 'r = r + 0.790*( 0.60*sin(0.823*t) + 0.40*sin(0.916*t) );\n' + 'b = r + 0.790*( 0.60*sin(0.808*t) + 0.40*sin(0.949*t) );'),
		'point_eqs_str' : (''),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.7,
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.7,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.7,
			a2 : 0.25,
			r : 1.0,
			border_g : 1.0,
			rad : 0.62392,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = div((m.x*(Math.sin(m.treb_att)*1.5)),2);
m.y = div((1.5*div((m.y*(Math.sin(m.mid_att)*2)),2)),2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x =      x*(sin(treb_att)*1.5)/2;\n' + 'y = 1.5*(y*(sin(mid_att)*2)/2)/2;'),

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
	'warp' : ('shader_body {\n' + '   vec2 v_1;\n' + '   vec3 ret_2;\n' + '  v_1 = ((normalize(\n' + '    (uv - 0.5)\n' + '  ) * aspect.xy) * (texsize.zw * 3.0));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (v_1 * 2.5));\n' + '  tmpvar_4 = texture2D (sampler_main, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv + (v_1 * 5.5));\n' + '  tmpvar_6 = texture2D (sampler_main, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (v_1 * -4.0));\n' + '  tmpvar_8 = texture2D (sampler_main, P_9);\n' + '  ret_2 = (0.25 * ((tmpvar_3.xyz + tmpvar_4.xyz) + (tmpvar_6.xyz + tmpvar_8.xyz)));\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_blur1, uv);\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_fc_main, uv);\n' + '  ret_2 = (ret_2 - (tmpvar_11.xyz * (0.25 * \n' + '    ((tmpvar_10.xyz * scale1) + bias1)\n' + '  ).x));\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12.w = 1.0;\n' + '  tmpvar_12.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_12;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uv);\n' + '  ret_1 = ((tmpvar_2.xyz * 2.0) + ((\n' + '    (tmpvar_3.xyz * scale1)\n' + '   + bias1) * 5.0));\n' + '  ret_1 = (ret_1 * 0.3);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;\n' + 'q1=0;\n' + 'q2=0;\n' + 'q3=0;'),
	'frame_eqs_str' : ('t = time*2.3;\n' + 't2 = sin(treb_att+mid_att)*2.89;\n' + 't3 = sin(mid_att+treb_att)*2.23;\n' + 'wave_x = wave_x + 0.350*( 0.70*sin(2.221+bass_att) + 0.30*sin(1.821*time) );\n' + 'wave_y = wave_y + 0.350*( 0.30*sin(1.942*time) + 0.70*sin(2.522+bass_att) );\n' + 'wave_r = wave_r + 0.790*( 0.60*sin(0.823*t3) + 0.40*sin(0.916*t2) );\n' + 'wave_g = wave_g + 0.790*( 0.60*sin(0.900*t2) + 0.40*sin(1.023*t2) );\n' + 'wave_b = wave_b + 0.790*( 0.60*sin(0.808*t2) + 0.40*sin(0.949*t3) );\n' + 'rot = rot + 0.010*( 0.60*sin(0.038*time) + 0.40*sin(0.054*time) );\n' + 'dx = dx + 0.002*( 0.60*sin(0.434*time) + 0.40*sin(0.277*time) );\n' + 'dy = dy + 0.002*( 0.60*sin(0.384*time) + 0.40*sin(0.477*time) );\n' + 'warp = (sin(time)/2)-(bass_att-mid_att);\n' + 'decay=1;\n' + 'speed=0.80;\n' + 'speedinv=1-speed;\n' + 'q1=(qa*speed + bass*speedinv);\n' + 'q2=(qb*speed + mid *speedinv);\n' + 'q3=(qc*speed + treb*speedinv);\n' + 'qa=q1;\n' + 'qb=q2;\n' + 'qc=q3;\n' + 'flux=sin(time/2);\n' + 'q4=flux * 0.5 + 0.5;\n' + 'q5=flux;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
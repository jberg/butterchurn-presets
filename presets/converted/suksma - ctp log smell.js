define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.7,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 1.186,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.01,
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
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.995,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.5,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.treb_tick = 0;
m.q3 = 0;
m.bass_shift = 0;
m.dx_r = 0;
m.dy_r = 0;
m.mid_shift = 0;
m.mid_tick = 0;
m.thresh = 0;
m.bass_tick = 0;
m.treb_shift = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.bass_tick = ((above(m.bass_att, m.bass_tick)*2)+((1-above(m.bass_att, m.bass_tick))*(((m.bass_tick-1.3)*0.96)+1.3)));
m.treb_tick = ((above(m.treb_att, m.treb_tick)*2)+((1-above(m.treb_att, m.treb_tick))*(((m.treb_tick-1.3)*0.96)+1.3)));
m.mid_tick = ((above(m.mid_att, m.mid_tick)*2)+((1-above(m.mid_att, m.mid_tick))*(((m.mid_tick-1.3)*0.96)+1.3)));
m.bass_shift = (((equal(m.bass_tick, 2)*0.95)*Math.sin((m.time*5)))+((1-equal(m.bass_tick, 2))*m.bass_shift));
m.treb_shift = (((equal(m.treb_tick, 2)*0.95)*Math.sin((m.time*5)))+((1-equal(m.treb_tick, 2))*m.treb_shift));
m.mid_shift = (((equal(m.mid_tick, 2)*0.95)*Math.sin((m.time*5)))+((1-equal(m.mid_tick, 2))*m.mid_shift));
m.wave_r = (m.wave_r+m.bass_shift);
m.wave_g = (m.wave_g+m.mid_shift);
m.wave_b = (m.wave_b+m.treb_shift);
m.ob_r = (1-Math.abs(m.wave_r));
m.ob_g = (1-Math.abs(m.wave_g));
m.ob_b = (1-Math.abs(m.wave_b));
m.ib_r = (1-Math.abs(m.wave_b));
m.ib_g = (1-Math.abs(m.wave_r));
m.ib_b = (1-Math.abs(m.wave_r));
m.ob_size = (m.ob_size+(0.15*Math.sin(m.bass_att)));
m.ib_size = (m.ib_size+(0.15*Math.cos(m.treb_att)));
m.ob_a = (m.ob_a-(0.5*Math.sin(m.bass_att)));
m.ib_a = (m.ib_a-(0.5*Math.sin(m.mid_att)));
m.q1 = m.wave_r;
m.q2 = m.wave_b;
m.q3 = m.wave_g;
		m.rkeys = ['rot','sy','sx','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.sx = (m.sx+((16*m.dx_r)*Math.sin((((0.5-(m.rad*3))*2)-Math.sin((2.1*Math.abs(((m.x*13)-(div(m.bass_att,m.y)*m.rad)))))))));
m.sy = (m.sy+((16*m.dy_r)*Math.sin((((0.5-(m.rad*3))*2)-Math.sin((2.1*Math.abs(((m.y*13)-(div(m.bass_att,m.x)*m.rad)))))))));
m.rot = (m.rot+(0.2*Math.cos((((m.rad*3)*2)-Math.cos((4*Math.abs(((m.rad*12)-(div(m.bass_att,m.x)*m.y)))))))));
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
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 2.2167,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.22167,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = m.q1;
m.g = m.q2;
m.b = m.q3;
m.r2 = m.q2;
m.g2 = m.q3;
m.b2 = m.q1;
m.x = (((m.x+(0.21*Math.cos(m.time)))+(0.121*Math.sin((1.2*m.time))))+(0.15*Math.sin((0.63*m.time))));
m.y = (((m.y+(0.134*Math.cos((1.13*m.time))))+(0.2*Math.sin((0.8*m.time))))+(0.213*Math.sin((0.43*m.time))));
m.border_r = m.q3;
m.border_b = m.q2;
m.border_g = m.q1;
m.ang = (m.ang+(4.52*Math.cos(m.time)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = q1;\n' + 'g = q2;\n' + 'b = q3;\n' + 'r2 = q2;\n' + 'g2 = q3;\n' + 'b2 = q1;\n' + 'x = x + 0.21*cos(time) + 0.121*sin(1.2*time) + 0.15*sin(0.63*time);\n' + 'y = y + 0.134*cos(1.13*time) + 0.2*sin(0.8*time) + 0.213*sin(0.43*time);\n' + 'border_r = q3;\n' + 'border_b = q2;\n' + 'border_g = q1;\n' + 'ang = ang + 4.52*cos(time);'),

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
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.48885,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.24486,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = m.q2;
m.g = m.q3;
m.b = m.q1;
m.r2 = m.q3;
m.g2 = m.q1;
m.b2 = m.q2;
m.x = (((m.x+(0.11*Math.cos((0.6*m.time))))+(0.122*Math.sin((1.12*m.time))))+(0.155*Math.sin((0.83*m.time))));
m.y = (((m.y+(0.134*Math.cos((0.513*m.time))))+(0.126*Math.sin((1.48*m.time))))+(0.13*Math.sin((0.743*m.time))));
m.border_r = m.q1;
m.border_b = m.q2;
m.border_g = m.q3;
m.ang = (m.ang+(4.52*Math.cos(m.time)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = q2;\n' + 'g = q3;\n' + 'b = q1;\n' + 'r2 = q3;\n' + 'g2 = q1;\n' + 'b2 = q2;\n' + 'x = x + 0.11*cos(0.6*time) + 0.122*sin(1.12*time) + 0.155*sin(0.83*time);\n' + 'y = y + 0.134*cos(0.513*time) + 0.126*sin(1.48*time) + 0.13*sin(0.743*time);\n' + 'border_r = q1;\n' + 'border_b = q2;\n' + 'border_g = q3;\n' + 'ang = ang + 4.52*cos(time);'),

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
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.55044,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.27048,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = m.q3;
m.g = m.q1;
m.b = m.q2;
m.r2 = m.q1;
m.g2 = m.q2;
m.b2 = m.q3;
m.x = (((m.x+(0.201*Math.cos((1.11*m.time))))+(0.1022*Math.sin((1.512*m.time))))+(0.215*Math.sin((0.83*m.time))));
m.y = (((m.y+(0.134*Math.cos((1.03*m.time))))+(0.1026*Math.sin((0.648*m.time))))+(0.2*Math.sin((1.743*m.time))));
m.border_r = m.q1;
m.border_b = m.q3;
m.border_g = m.q2;
m.ang = (m.ang+(4.52*Math.cos(m.time)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r = q3;\n' + 'g = q1;\n' + 'b = q2;\n' + 'r2 = q1;\n' + 'g2 = q2;\n' + 'b2 = q3;\n' + 'x = x + 0.201*cos(1.11*time) + 0.1022*sin(1.512*time) + 0.215*sin(0.83*time);\n' + 'y = y + 0.134*cos(1.03*time) + 0.1026*sin(0.648*time) + 0.2*sin(1.743*time);\n' + 'border_r = q1;\n' + 'border_b = q3;\n' + 'border_g = q2;\n' + 'ang = ang + 4.52*cos(time);'),

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
	'comp' : ('shader_body {\n' + '   vec3 ret2_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (texsize.zw * 6.0);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12.x = dot (((\n' + '    (tmpvar_4.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_6.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_12.y = dot (((\n' + '    (tmpvar_8.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_10.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = (uv - (0.25 * tmpvar_12));\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur3, uv);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur2, uv);\n' + '  ret_2 = (vec3((0.25 * dot (\n' + '    clamp ((2.0 * ((tmpvar_14.xyz * scale3) + bias3)), 0.0, 1.0)\n' + '  , vec3(0.32, 0.49, 0.29)))) - (0.8 * dot (\n' + '    clamp (((20.0 * (\n' + '      (0.6 * ((tmpvar_15.xyz * scale2) + bias2))\n' + '     - 0.01)) - 2.0), 0.0, 1.0)\n' + '  , vec3(0.32, 0.49, 0.29))));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur1, uv);\n' + '  ret_2 = ((ret_2 + dot (\n' + '    clamp (((30.0 * (\n' + '      (tmpvar_16.xyz + (((tmpvar_17.xyz * scale1) + bias1) * 0.15))\n' + '     - 0.01)) - 2.0), 0.0, 1.0)\n' + '  , vec3(0.32, 0.49, 0.29))) - 0.1);\n' + '  ret_2 = (ret_2 + 0.55);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_blur3, tmpvar_13);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur1, tmpvar_13);\n' + '   vec3 tmpvar_20;\n' + '  tmpvar_20 = mix (ret_2, (ret_2 * (\n' + '    ((tmpvar_18.xyz * scale3) + bias3)\n' + '   - \n' + '    ((tmpvar_19.xyz * scale1) + bias1)\n' + '  )), pow (hue_shader, ret_2));\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_main, tmpvar_13);\n' + '  ret2_1 = ((tmpvar_20 - (0.9 * tmpvar_21.xyz)) - 0.1);\n' + '  ret2_1 = (ret2_1 - 0.75);\n' + '   vec3 tmpvar_22;\n' + '  tmpvar_22 = mix (ret2_1, ((1.2 * ret2_1) * (\n' + '    ((tmpvar_14.xyz * scale3) + bias3)\n' + '   - \n' + '    ((tmpvar_17.xyz * scale1) + bias1)\n' + '  )), pow (hue_shader.zxy, tmpvar_20));\n' + '  ret2_1 = tmpvar_22;\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23 = abs((tmpvar_20 - (1.2 * tmpvar_22)));\n' + '  ret_2 = (tmpvar_23 * tmpvar_23);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24.w = 1.0;\n' + '  tmpvar_24.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_24;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('bass_tick = above(bass_att,bass_tick)*2 + (1-above(bass_att,bass_tick))*((bass_tick-1.3)*0.96+1.3);\n' + 'treb_tick = above(treb_att,treb_tick)*2 + (1-above(treb_att,treb_tick))*((treb_tick-1.3)*0.96+1.3);\n' + 'mid_tick = above(mid_att,mid_tick)*2 + (1-above(mid_att,mid_tick))*((mid_tick-1.3)*0.96+1.3);\n' + 'bass_shift = equal(bass_tick,2)*0.95*sin(time*5) + (1-equal(bass_tick,2))*bass_shift;\n' + 'treb_shift = equal(treb_tick,2)*0.95*sin(time*5) + (1-equal(treb_tick,2))*treb_shift;\n' + 'mid_shift = equal(mid_tick,2)*0.95*sin(time*5) + (1-equal(mid_tick,2))*mid_shift;\n' + 'wave_r = wave_r + bass_shift;\n' + 'wave_g = wave_g + mid_shift;\n' + 'wave_b = wave_b + treb_shift;\n' + 'ob_r = 1-abs(wave_r);\n' + 'ob_g = 1-abs(wave_g);\n' + 'ob_b = 1-abs(wave_b);\n' + 'ib_r = 1-abs(wave_b);\n' + 'ib_g = 1-abs(wave_r);\n' + 'ib_b = 1-abs(wave_r);\n' + 'ob_size = ob_size + 0.15*sin(bass_att);\n' + 'ib_size = ib_size + 0.15*cos(treb_att);\n' + 'ob_a = ob_a - 0.5*sin(bass_att);\n' + 'ib_a = ib_a - 0.5*sin(mid_att);\n' + 'q1 = wave_r;\n' + 'q2 = wave_b;\n' + 'q3 = wave_g;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'sx = sx + 16*dx_r*sin((0.5-rad*3)*2-sin(2.1*abs(x*13-bass_att/y*rad)));\n' + 'sy = sy + 16*dy_r*sin((0.5-rad*3)*2-sin(2.1*abs(y*13-bass_att/x*rad)));\n' + 'rot = rot + 0.2*cos((rad*3)*2-cos(4*abs(rad*12-bass_att/x*y)));'),
};

return pmap;
});
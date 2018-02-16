define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.47402,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 6.0,
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
		echo_zoom : 1.169,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.04,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.03,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 4.1,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.700*((0.20*Math.sin((0.933*m.time)))+(0.30*Math.sin((1.045*m.time))))));
m.wave_g = (m.wave_g+(0.700*((0.20*Math.sin((0.900*m.time)))+(0.30*Math.sin((0.956*m.time))))));
m.wave_b = (m.wave_b+(0.200*((0.20*Math.sin((0.910*m.time)))+(0.30*Math.sin((0.920*m.time))))));
m.zoom = (m.zoom+(0.02*Math.cos(((m.time*1.713)+2))));
m.zoom = (m.zoom+(0.02*Math.cos(((m.time*2.319)+4))));
m.zoom = (m.zoom+(0.02*Math.cos(((m.time*1.522)+1))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = (0.002*Math.cos((m.ang+1.57)));
m.dy = (-0.002*Math.sin((m.ang+1.57)));
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
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.03347,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 44.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.ym = 0;
m.xm = 0;
m.ys = 0;
m.xs = 0;
m.fran = 1;
m.xs = 1;
m.ys = 1;
m.xm = 0.5;
m.ym = 0.5;
			m.rkeys = ['ym','xm','ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {
m.xs = (m.xs*((1-(2*above(m.xm, 0.99)))-(2*below(m.xm, 0.01))));
m.ys = (m.ys*((1-(2*above(m.ym, 0.99)))-(2*below(m.ym, 0.01))));
m.xm = (m.xm+((0.03*m.xs)*((Math.sin((m.time*0.53))*0.4)+(0.6*Math.cos((m.time*0.62))))));
m.ym = (m.ym+((0.03*m.ys)*((Math.sin((m.time*0.29))*0.5)+(0.5*Math.cos((m.time*0.78))))));
m.x = m.xm;
m.y = m.ym;
m.r = ((0.5+(0.25*Math.sin((m.x*12))))+(0.25*Math.sin((m.y*3))));
m.g = ((0.5+(0.25*Math.sin((m.x*7))))+(0.25*Math.sin((m.y*32))));
m.b = ((0.5+(0.25*Math.sin((m.x*21))))+(0.25*Math.sin((m.y*16))));
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
m.rad = div((0.2*((m.bass_att+m.mid_att)+m.treb_att)),3);
		return m;
	},
		'init_eqs_str' : ('fran = 1;\n' + 'xs = 1;\n' + 'ys = 1;\n' + 'xm = 0.5;\n' + 'ym = 0.5;'),
		'frame_eqs_str' : ('xs = xs*(1 - 2*above(xm,0.99) - 2*below(xm,0.01));\n' + 'ys = ys*(1 - 2*above(ym,0.99) - 2*below(ym,0.01));\n' + 'xm = xm + 0.03*xs*(sin(time*0.53)*0.4 + 0.6*cos(time*0.62));\n' + 'ym = ym + 0.03*ys*(sin(time*0.29)*0.5 + 0.5*cos(time*0.78));\n' + 'x = xm;\n' + 'y = ym;\n' + 'r = 0.5 + 0.25*sin(x*12) + 0.25*sin(y*3);\n' + 'g = 0.5 + 0.25*sin(x*7) + 0.25*sin(y*32);\n' + 'b = 0.5 + 0.25*sin(x*21) + 0.25*sin(y*16);\n' + 'r2 = r;\n' + ' g2 = g;\n' + ' b2 = b;\n' + 'rad = 0.2*(bass_att + mid_att + treb_att)/3;'),

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
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.03347,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 44.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.ym = 0;
m.xm = 0;
m.ys = 0;
m.xs = 0;
m.fran = 1;
m.xs = 1;
m.ys = 1;
m.xm = 0.5;
m.ym = 0.5;
			m.rkeys = ['ym','xm','ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {
m.xs = (m.xs*((1-(2*above(m.xm, 0.99)))-(2*below(m.xm, 0.01))));
m.ys = (m.ys*((1-(2*above(m.ym, 0.99)))-(2*below(m.ym, 0.01))));
m.xm = (m.xm+((0.03*m.xs)*((Math.sin((m.time*0.53))*0.6)+(0.4*Math.cos((m.time*0.62))))));
m.ym = (m.ym+((0.03*m.ys)*((Math.sin((m.time*0.29))*0.7)+(0.3*Math.cos((m.time*0.78))))));
m.x = m.xm;
m.y = m.ym;
m.r = ((0.5+(0.25*Math.sin((m.x*12))))+(0.25*Math.sin((m.y*3))));
m.g = ((0.5+(0.25*Math.sin((m.x*7))))+(0.25*Math.sin((m.y*32))));
m.b = ((0.5+(0.25*Math.sin((m.x*21))))+(0.25*Math.sin((m.y*16))));
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
m.rad = div((0.2*((m.bass_att+m.mid_att)+m.treb_att)),3);
		return m;
	},
		'init_eqs_str' : ('fran = 1;\n' + 'xs = 1;\n' + 'ys = 1;\n' + 'xm = 0.5;\n' + 'ym = 0.5;'),
		'frame_eqs_str' : ('xs = xs*(1 - 2*above(xm,0.99) - 2*below(xm,0.01));\n' + 'ys = ys*(1 - 2*above(ym,0.99) - 2*below(ym,0.01));\n' + 'xm = xm + 0.03*xs*(sin(time*0.53)*0.6 + 0.4*cos(time*0.62));\n' + 'ym = ym + 0.03*ys*(sin(time*0.29)*0.7 + 0.3*cos(time*0.78));\n' + 'x = xm;\n' + 'y = ym;\n' + 'r = 0.5 + 0.25*sin(x*12) + 0.25*sin(y*3);\n' + 'g = 0.5 + 0.25*sin(x*7) + 0.25*sin(y*32);\n' + 'b = 0.5 + 0.25*sin(x*21) + 0.25*sin(y*16);\n' + 'r2 = r;\n' + ' g2 = g;\n' + ' b2 = b;\n' + 'rad = 0.2*(bass_att + mid_att + treb_att)/3;'),

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
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.03347,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 44.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.ym = 0;
m.xm = 0;
m.ys = 0;
m.xs = 0;
m.fran = 1;
m.xs = 1;
m.ys = 1;
m.xm = 0.5;
m.ym = 0.5;
			m.rkeys = ['ym','xm','ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {
m.xs = (m.xs*((1-(2*above(m.xm, 0.99)))-(2*below(m.xm, 0.01))));
m.ys = (m.ys*((1-(2*above(m.ym, 0.99)))-(2*below(m.ym, 0.01))));
m.xm = (m.xm+((0.03*m.xs)*((Math.sin((m.time*0.35))*0.5)+(0.5*Math.cos((m.time*0.87))))));
m.ym = (m.ym+((0.03*m.ys)*((Math.sin((m.time*0.92))*0.3)+(0.7*Math.cos((m.time*0.26))))));
m.x = m.xm;
m.y = m.ym;
m.r = (0.5+(0.5*Math.sin((m.time*0.25))));
m.g = (0.5+(Math.abs(m.r)*Math.sin((m.time*0.5))));
m.b = (0.5+(Math.abs(m.g)*Math.sin(m.time)));
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
m.rad = div((1.6*((m.bass_att+m.mid_att)+m.treb_att)),3);
		return m;
	},
		'init_eqs_str' : ('fran = 1;\n' + 'xs = 1;\n' + 'ys = 1;\n' + 'xm = 0.5;\n' + 'ym = 0.5;'),
		'frame_eqs_str' : ('xs = xs*(1 - 2*above(xm,0.99) - 2*below(xm,0.01));\n' + 'ys = ys*(1 - 2*above(ym,0.99) - 2*below(ym,0.01));\n' + 'xm = xm + 0.03*xs*(sin(time*0.35)*0.5 + 0.5*cos(time*0.87));\n' + 'ym = ym + 0.03*ys*(sin(time*0.92)*0.3 + 0.7*cos(time*0.26));\n' + 'x = xm;\n' + 'y = ym;\n' + 'r = 0.5 + 0.5*sin(time*0.25);\n' + 'g = 0.5 + abs(r)*sin(time*0.5);\n' + 'b = 0.5 + abs(g)*sin(time);\n' + 'r2 = r;\n' + ' g2 = g;\n' + ' b2 = b;\n' + 'rad = 1.6*(bass_att + mid_att + treb_att)/3;'),

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
	'warp' : ('shader_body {\n' + '   vec3 z_1;\n' + '   vec3 blur_2;\n' + '   vec2 P_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (0.1 * texsize.zw);\n' + '  P_3 = (uv + tmpvar_4);\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (tmpvar_4 * vec2(-1.0, 1.0)));\n' + '   vec2 P_6;\n' + '  P_6 = (uv + (tmpvar_4 * vec2(1.0, -1.0)));\n' + '   vec2 P_7;\n' + '  P_7 = (uv - tmpvar_4);\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = (0.25 * ((texture2D (sampler_main, P_3).xyz + texture2D (sampler_main, P_5).xyz) + (texture2D (sampler_main, P_6).xyz + texture2D (sampler_main, P_7).xyz)));\n' + '  blur_2 = tmpvar_8;\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = ((blur_2.x * blur_2.y) * blur_2.y);\n' + '  z_1.x = (blur_2.x + ((\n' + '    -(tmpvar_9)\n' + '   + \n' + '    (0.035 * (1.0 - blur_2.x))\n' + '  ) * 4.0));\n' + '  z_1.y = (blur_2.y + ((tmpvar_9 - \n' + '    (0.095 * blur_2.y)\n' + '  ) * 4.0));\n' + '  z_1.z = blur_2.z;\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_blur2, uv);\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_main, uv);\n' + '  z_1.x = (z_1.x + (0.4 * (\n' + '    ((tmpvar_10.xyz * scale2) + bias2)\n' + '   - tmpvar_11.xyz)).x);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (((uv * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '  tmpvar_12 = texture2D (sampler_noise_lq, P_13);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14.w = 1.0;\n' + '  tmpvar_14.xyz = (z_1 + (0.09 * (\n' + '    (tmpvar_12.xyz * 2.0)\n' + '   - 1.0)));\n' + '  vec4 ret4 = tmpvar_14;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   float ang2_1;\n' + '   vec2 uv2_2;\n' + '   vec3 ret_3;\n' + '  ang2_1 = ((ang * 0.1591549) + (time * 0.025));\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = (3.0 + floor((rand_preset.z * 5.95)));\n' + '  ang2_1 = (fract((ang2_1 * tmpvar_4)) / tmpvar_4);\n' + '  ang2_1 = (abs((ang2_1 - \n' + '    (0.5 / tmpvar_4)\n' + '  )) * 6.283185);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = cos(ang2_1);\n' + '  tmpvar_5.y = sin(ang2_1);\n' + '  uv2_2 = (0.5 + ((\n' + '    (0.4 * (rad * sqrt(dot (texsize.xy, texsize.xy))))\n' + '   * tmpvar_5) * texsize.zw));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv2_2);\n' + '  ret_3 = tmpvar_6.xyz;\n' + '  ret_3 = (ret_3 * 1.333);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.700*( 0.20*sin(0.933*time) + 0.30*sin(1.045*time) );\n' + 'wave_g = wave_g + 0.700*( 0.20*sin(0.900*time) + 0.30*sin(0.956*time) );\n' + 'wave_b = wave_b + 0.200*( 0.20*sin(0.910*time) + 0.30*sin(0.920*time) );\n' + 'zoom = zoom + 0.02*cos(time*1.713+2);\n' + 'zoom = zoom + 0.02*cos(time*2.319+4);\n' + 'zoom = zoom + 0.02*cos(time*1.522+1);'),
	'pixel_eqs_str' : ('dx= 0.002*cos(ang+1.57);\n' + 'dy=-0.002*sin(ang+1.57);'),
};

return pmap;
});
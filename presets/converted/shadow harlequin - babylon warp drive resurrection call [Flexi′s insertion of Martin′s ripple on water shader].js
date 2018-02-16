define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.4,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 1.0,
		mv_y : 9.0,
		wave_scale : 0.972,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 1.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 1.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0741,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.007,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.9,
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
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.094,
		decay : 0.5,
		wave_a : 4.1,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.ray = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = ((m.wave_r+(0.5*Math.sin((m.treb_att*33))))+(m.bass_att*0.3));
m.wave_b = ((m.wave_b+(0.5*Math.sin((m.treb_att*33))))+(m.mid_att*0.3));
m.rot = (div(Math.sin(m.time),2)*(0.4*Math.sin((m.treb_att*0.1))));
m.warp = (0.9*Math.sin((m.treb_att*0.9)));
m.mv_l = Math.sin(m.treb_att);
m.mv_b = div(m.treb_att,2.5);
m.mv_r = div(m.mid_att,2.5);
m.q1 = Math.sin(m.bass_att);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.ray = (pow(m.rad, 1.8)+0.05);
m.zoom = (((div(m.ray,m.rad)*1.4)+(0.3*Math.sin((m.ang*(m.bass*5)))))+(m.bass*0.2));
m.mv_r = div(m.treb_att,2.5);
m.mv_g = div(m.mid_att,2.5);
m.mv_a = m.bass_att;
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
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.3345,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.59957,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.spi = 0;
m.red = 0;
m.vol = 0;
m.bob = 0;
m.tm = 0;
m.ro = 0;
m.sp = 0;
m.border_1 = 0;
m.bob = 1.5;
m.ro = 0;
m.red = Math.floor(rand(20));
			m.rkeys = ['bob','ro'];
			return m;
		},
		'frame_eqs' : function(m) {
m.vol = (1+(0.2*div(((m.bass_att+m.treb_att)+m.mid_att),3)));
m.bob = (((m.bob*above(m.bob, 0.01))-0.01)+(1*(1-above(m.bob, 0.01))));
m.bob = (0.4+(0.4*Math.sin((m.time*0.8))));
m.bob = (m.bob*m.vol);
m.rad = m.bob;
m.border_1 = 0.4;
m.sides = 30;
m.ro = (m.ro+0.02);
m.ang = m.ro;
m.rad = 0.6;
m.sp = (m.red*0.025);
m.spi = (0.5-m.sp);
m.tm = (m.time*0.1);
m.border_r = ((0.5+(m.sp*Math.sin((m.tm*0.6))))+(m.spi*Math.cos((m.tm*1.46))));
m.border_g = ((0.5+(m.sp*Math.sin((m.tm*1.294))))+(m.spi*Math.cos((m.tm*0.87))));
m.border_b = ((0.5+(m.sp*Math.sin((m.tm*1.418))))+(m.spi*Math.cos((m.tm*0.76))));
		return m;
	},
		'init_eqs_str' : ('bob = 1.5;\n' + 'ro = 0;\n' + 'red = int(rand(20));'),
		'frame_eqs_str' : ('vol = 1 + 0.2*((bass_att+treb_att+mid_att)/3);\n' + 'bob = bob*above(bob,0.01) - 0.01 + 1*(1 - above(bob,0.01));\n' + 'bob = 0.4 + 0.4*sin(time*0.8);\n' + 'bob = bob*vol;\n' + 'rad = bob;\n' + 'border_1 = 0.4;\n' + 'sides = 30;\n' + 'ro = ro + 0.02;\n' + 'ang = ro;\n' + 'rad = 0.6;\n' + 'sp = red*0.025;\n' + 'spi = 0.5 - sp;\n' + 'tm = time*0.1;\n' + 'border_r = 0.5 + sp*sin(tm*0.6) + spi*cos(tm*1.46);\n' + 'border_g = 0.5 + sp*sin(tm*1.294) + spi*cos(tm*0.87);\n' + 'border_b = 0.5 + sp*sin(tm*1.418) + spi*cos(tm*0.76);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.5*((Math.sin((m.time*1.1))*0.3)+(0.7*Math.sin((m.time*0.5))))));
m.x = (0.5+(0.225*Math.sin(m.time)));
m.y = (0.5+(0.3*Math.cos(m.time)));
m.rad = (m.rad*m.mid_att);
m.r = (0.5+(0.5*Math.sin((m.frame*0.5))));
m.b = (0.5+(0.5*Math.sin(((m.frame*0.5)+2.094))));
m.g = (0.5+(0.5*Math.sin(((m.frame*0.5)+4.188))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.5*(sin(time*1.1)*0.3 + 0.7*sin(time*0.5));\n' + 'x = 0.5 + 0.225*sin(time);\n' + 'y = 0.5 + 0.3*cos(time);\n' + 'rad = rad*mid_att;\n' + 'r = 0.5 + 0.5*sin(frame*0.5);\n' + 'b = 0.5 + 0.5*sin(frame*0.5 + 2.094);\n' + 'g = 0.5 + 0.5*sin(frame*0.5 + 4.188);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.5*((Math.sin((m.time*1.1))*0.3)+(0.7*Math.sin((m.time*0.5))))));
m.x = (0.5+(0.225*Math.sin((m.time+2.09))));
m.y = (0.5+(0.3*Math.cos((m.time+2.09))));
m.rad = (m.rad*m.bass_att);
m.r = (0.5+(0.5*Math.sin((m.frame*0.5))));
m.b = (0.5+(0.5*Math.sin(((m.frame*0.5)+2.094))));
m.g = (0.5+(0.5*Math.sin(((m.frame*0.5)+4.188))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.5*(sin(time*1.1)*0.3 + 0.7*sin(time*0.5));\n' + 'x = 0.5 + 0.225*sin(time + 2.09);\n' + 'y = 0.5 + 0.3*cos(time + 2.09);\n' + 'rad = rad*bass_att;\n' + 'r = 0.5 + 0.5*sin(frame*0.5);\n' + 'b = 0.5 + 0.5*sin(frame*0.5 + 2.094);\n' + 'g = 0.5 + 0.5*sin(frame*0.5 + 4.188);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.5*((Math.sin((m.time*1.1))*0.3)+(0.7*Math.sin((m.time*0.5))))));
m.x = (0.5+(0.225*Math.sin((m.time+4.19))));
m.y = (0.5+(0.3*Math.cos((m.time+4.19))));
m.rad = (m.rad*m.treb_att);
m.r = (0.5+(0.5*Math.sin((m.frame*0.5))));
m.b = (0.5+(0.5*Math.sin(((m.frame*0.5)+2.094))));
m.g = (0.5+(0.5*Math.sin(((m.frame*0.5)+4.188))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.5*(sin(time*1.1)*0.3 + 0.7*sin(time*0.5));\n' + 'x = 0.5 + 0.225*sin(time + 4.19);\n' + 'y = 0.5 + 0.3*cos(time + 4.19);\n' + 'rad = rad*treb_att;\n' + 'r = 0.5 + 0.5*sin(frame*0.5);\n' + 'b = 0.5 + 0.5*sin(frame*0.5 + 2.094);\n' + 'g = 0.5 + 0.5*sin(frame*0.5 + 4.188);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_fc_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 * clamp (_qa.x, 0.0, 1.0));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (uv_orig - vec2(0.5, 0.75));\n' + '   float tmpvar_3;\n' + '  tmpvar_3 = (1.0/(tmpvar_2.y));\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = ((tmpvar_2.x * tmpvar_3) * 0.25);\n' + '  tmpvar_4.y = (tmpvar_3 * 0.25);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = ((tmpvar_4 + (vec2(0.5, 0.25) * time)) / 2.0);\n' + '  tmpvar_5 = texture2D (sampler_noise_hq, P_6);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = clamp (((\n' + '    (1.0 - abs(((\n' + '      fract(((tmpvar_2 + vec2(0.5, 1.0)) * 0.5))\n' + '     * 2.0) - 1.0)))\n' + '   + vec2(0.0, -0.2)) - (\n' + '    ((tmpvar_5 - 0.5) * float(int((tmpvar_2.y > 0.0))))\n' + '  .xy * 0.025)), 0.0, 1.0);\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = ((vec2(-0.993, 0.993) * (tmpvar_7 - 0.5)) + 0.5);\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = mix (texture2D (sampler_main, tmpvar_7).xyz, texture2D (sampler_main, tmpvar_8).xyz, vec3(0.5, 0.5, 0.5));\n' + '  ret_1 = tmpvar_9;\n' + '  ret_1 = (ret_1 * 2.4);\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = sqrt(ret_1);\n' + '  ret_1 = (tmpvar_10 * tmpvar_10);\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11.w = 1.0;\n' + '  tmpvar_11.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_11;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'wave_r = wave_r + .5*sin(treb_att*33) + bass_att*.3;\n' + 'wave_b = wave_b + .5*sin(treb_att*33) + mid_att*.3;\n' + 'rot = (sin(time)/2) * (.4*sin(treb_att*.1));\n' + 'warp = .9*sin(treb_att*.9);\n' + 'mv_l = sin(treb_att);\n' + 'mv_b = treb_att / 2.5;\n' + 'mv_r = mid_att / 2.5;\n' + 'q1 = sin(bass_att);'),
	'pixel_eqs_str' : ('ray = pow(rad,1.8)+.05;\n' + 'zoom = (ray/rad)*1.4 + .3*sin(ang*(bass*5))+(bass*.2);\n' + 'mv_r = treb_att / 2.5;\n' + 'mv_g = mid_att / 2.5;\n' + 'mv_a = bass_att;'),
};

return pmap;
});
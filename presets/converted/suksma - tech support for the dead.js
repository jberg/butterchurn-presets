define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 4.48,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 4.32,
		wave_scale : 0.06,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.10059,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.64462,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 0.2,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.2,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.07163,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.05,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.18,
		wave_mystery : -0.2,
		decay : 0.95,
		wave_a : 0.478,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.39,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q2 = 0;
m.vol = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.vol = Math.min((div((((5*m.bass)+(3*m.mid_att))+(2*m.treb)),10)+0.15), 2.15);
m.wave_r = ((m.wave_r+(0.05*Math.sin((3.23*m.time))))+(0.05*Math.sin((0.46*m.time))));
m.wave_g = ((m.wave_g+(0.2*Math.sin((2.71*m.time))))+(0.05*Math.sin((0.76*m.time))));
m.wave_b = ((m.wave_b+(0.15*Math.sin((1.132*m.time))))+(0.05*Math.sin((0.546*m.time))));
m.wave_g = ifcond(below(((m.wave_r+m.wave_g)+m.wave_b), 0.1), (m.wave_g+0.5), m.wave_g);
m.wave_x = (m.wave_x+((0.03*m.vol)*Math.sin((0.727*m.time))));
m.wave_y = (m.wave_y+((0.04*m.vol)*Math.sin((0.777*m.time))));
m.zoom = (((m.vol*0.3)+(0.06*Math.sin((0.54*m.time))))+0.97);
m.dx = (m.dx+(0.0075*Math.sin((1.23*m.time))));
m.dy = (m.dy+(0.0075*Math.sin((1.43*m.time))));
m.rot = (m.rot+(0.05*Math.sin(m.time)));
m.q2 = ((m.bass+m.treb)+m.mid);
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom-(m.rad*0.9));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.02,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.74192,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;

			m.rkeys = ['q3'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.q3 = bnot(m.q3);
m.x = (0.5+((equal(m.q3, 0)*(Math.floor(rand(50))-25))*0.02));
m.y = (0.5+((equal(m.q3, 0)*(Math.floor(rand(50))-25))*0.02));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('q3=bnot(q3);\n' + 'x=.5+(equal(q3,0)*(int(rand(50))-25)*.02);\n' + 'y=.5+(equal(q3,0)*(int(rand(50))-25)*.02);'),

		},
		{
		'baseVals' : {
			a : 0.2,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 62.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.cd = 0;
m.c = 0;

			m.rkeys = ['cd'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.r = (m.bass*0.05);
m.cd = (m.cd+0.001);
m.c = ((Math.floor(rand(10))*3.1415927)*0.2);
m.c = (m.c+m.cd);
m.x = (0.5+(Math.cos(m.c)*m.r));
m.y = (0.5+(Math.sin(m.c)*m.r));
m.r = Math.abs(Math.sin((m.time*0.77)));
m.g = (m.treb*0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('r=bass*.05;\n' + 'cd=cd+.001;\n' + 'c=int(rand(10))*3.1415927*.2;\n' + 'c=c+cd;\n' + 'x=.5+(cos(c)*r);\n' + 'y=.5+(sin(c)*r);\n' + 'r=abs(sin(time*.77));\n' + 'g=treb*.5;'),

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
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.4,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.36971,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.49765,
			x : 0.15,
			y : 0.82,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.ra = 0;

			m.rkeys = ['ra'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ra = (m.ra-(m.bass_att*0.01));
m.ang = m.ra;
m.x = Math.abs(Math.sin((m.time*0.1)));
m.y = Math.abs(Math.cos(((m.time+0.2)*0.3)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ra=ra-(bass_att*.01);\n' + 'ang=ra;\n' + 'x=abs(sin(time*.1));\n' + 'y=abs(cos((time+.2)*.3));'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.5,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.6,
			tex_zoom : 0.36971,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.7,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.49766,
			x : 0.83,
			y : 0.82,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.ra = 0;

			m.rkeys = ['ra'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ra = (m.ra+(m.treb_att*0.025));
m.ang = m.ra;
m.x = Math.abs(Math.sin((m.time*0.2)));
m.y = Math.abs(Math.cos((m.time*0.7)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ra=ra+(treb_att*.025);\n' + 'ang=ra;\n' + 'x=abs(sin(time*.2));\n' + 'y=abs(cos(time*.7));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.8,
			textured : 1.0,
			g2 : 0.2,
			tex_zoom : 0.40839,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.4,
			border_g : 1.0,
			rad : 1.3291,
			x : 0.27,
			y : 0.2,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.ra = 0;

			m.rkeys = ['ra'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ra = (m.ra+ifcond(above(m.treb, 0.5), (m.treb*0.03), 0.01));
m.ang = m.ra;
m.rad = (m.rad+(m.treb_att*0.1));
m.y = Math.abs(Math.sin((m.time*0.23)));
m.x = Math.abs(Math.cos((m.time*0.7)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ra=ra+if(above(treb,.5),treb*.03,.01);\n' + 'ang=ra;\n' + 'rad=rad+(treb_att*.1);\n' + 'y=abs(sin(time*.23));\n' + 'x=abs(cos(time*.7));'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.9,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.40839,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.46815,
			x : 0.75,
			y : 0.25,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.ra = 0;

			m.rkeys = ['ra'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ra = (m.ra-ifcond(above(m.bass, 1.3), (m.bass*0.02), 0.01));
m.ang = m.ra;
m.rad = (m.rad+(m.bass_att*0.1));
m.x = Math.abs(Math.sin((m.time*0.25)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ra=ra-if(above(bass,1.3),bass*.02,.01);\n' + 'ang=ra;\n' + 'rad=rad+(bass_att*.1);\n' + 'x=abs(sin(time*.25));'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 pic_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv);\n' + '  ret_2 = tmpvar_3.xyz;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_noise_lq, tmpvar_4);\n' + '  ret_2 = (ret_2 + ((tmpvar_5.xyz - 0.5) / 256.0));\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_prayerwheel, uv_orig).xyz;\n' + '  pic_1 = tmpvar_6;\n' + '   vec2 x_7;\n' + '  x_7 = (uv - uv_orig);\n' + '  ret_2 = (mix (ret_2, pic_1, vec3(clamp (\n' + '    (1.0 - (abs((\n' + '      dot (pic_1, vec3(0.32, 0.49, 0.29))\n' + '     - \n' + '      fract((((bass + mid) + treb) * 0.2))\n' + '    )) * 33.0))\n' + '  , 0.0, 1.0))) * (0.97 + (0.03 * \n' + '    clamp ((sqrt(dot (x_7, x_7)) * 200.0), 0.0, 1.0)\n' + '  )));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_7 = texture2D (sampler_blur1, P_8);\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1)).y;\n' + '  tmpvar_11.y = (((tmpvar_7.xyz * scale1) + bias1) - ((tmpvar_9.xyz * scale1) + bias1)).y;\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = (uv + (tmpvar_11 * 0.55));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = ((tmpvar_12 * 1.25) - 0.125);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur1, tmpvar_12);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_main, uv);\n' + '   vec3 tmpvar_16;\n' + '  tmpvar_16 = mix (ret_1, (1.0 - ret_1), ((0.7 * \n' + '    ((tmpvar_14.xyz * scale1) + bias1)\n' + '  ) + (0.2 * tmpvar_15.xyz)));\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur3, tmpvar_12);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_blur1, tmpvar_13);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_main, tmpvar_12);\n' + '   vec3 tmpvar_20;\n' + '  tmpvar_20 = mix (tmpvar_16, ((\n' + '    (tmpvar_16 - (0.1 * ((tmpvar_17.xyz * scale3) + bias3)))\n' + '   + \n' + '    (0.1 * ((tmpvar_18.xyz * scale1) + bias1))\n' + '  ) + (0.42 * tmpvar_19.xyz)), vec3(0.25, 0.25, 0.25));\n' + '   vec3 x_21;\n' + '  x_21 = (tmpvar_20 - 0.5);\n' + '  ret_1 = (tmpvar_20 * clamp ((\n' + '    sqrt(dot (x_21, x_21))\n' + '   * 5.0), 0.0, 1.0));\n' + '  ret_1 = (vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))) + 1.25);\n' + '  ret_1 = (ret_1 * (ret_1 * 0.45));\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur3, uv);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_blur1, uv);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_blur2, tmpvar_12);\n' + '  ret_1 = (ret_1 * mix (ret_1, (\n' + '    (1.3 * ret_1)\n' + '   * \n' + '    ((((tmpvar_22.xyz * scale3) + bias3) - ((tmpvar_23.xyz * scale1) + bias1)) - (0.25 * ((tmpvar_24.xyz * scale2) + bias2)))\n' + '  ), pow (hue_shader.zxy, \n' + '    (_qa.y * (1.0 - ret_1))\n' + '  )));\n' + '  ret_1 = (ret_1 + 0.05);\n' + '  ret_1 = (ret_1 * (1.1 * ret_1));\n' + '  ret_1 = (ret_1 * ((hue_shader * 4.0) - 2.75));\n' + '  ret_1 = (ret_1 * (3.5 - (0.5 * \n' + '    clamp (ret_1, 0.0, 1.0)\n' + '  )));\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25.w = 1.0;\n' + '  tmpvar_25.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_25;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('vol = min(((5*bass + 3*mid_att + 2*treb)/10+0.15),2.15);\n' + 'wave_r = wave_r + 0.05*sin(3.23*time)+ 0.05*sin(0.46*time);\n' + 'wave_g = wave_g + 0.2*sin(2.71*time)+ 0.05*sin(0.76*time);\n' + 'wave_b = wave_b + 0.15*sin(1.132*time)+ 0.05*sin(0.546*time);\n' + 'wave_g = if(below(wave_r+wave_g+wave_b,0.1),wave_g+0.5,wave_g);\n' + 'wave_x = wave_x + 0.03*vol*sin(0.727*time);\n' + 'wave_y = wave_y + 0.04*vol*sin(0.777*time);\n' + 'zoom = vol*0.3 + 0.06*sin(0.54*time) + 0.97;\n' + 'dx = dx + 0.0075*sin(1.23*time);\n' + 'dy = dy + 0.0075*sin(1.43*time);\n' + 'rot = rot + 0.05*sin(time);\n' + 'q2=bass+treb+mid;'),
	'pixel_eqs_str' : ('zoom = zoom - rad*0.9;'),
};

return pmap;
});
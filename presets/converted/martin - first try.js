define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.998,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 24.799994,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.897961,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.990096,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.438652,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 4.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.16,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 0.999609,
		ob_size : 0.01,
		b1ed : 0.0,
		wave_smoothing : 0.108,
		warpanimspeed : 0.01,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.54,
		zoom : 0.098609,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 1.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.28,
		wave_mystery : 0.1,
		decay : 0.994,
		wave_a : 0.33064,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.72,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.myvol = 0;
m.is_beat = 0;
m.dir = 0;
m.dec_med = 0;
m.q20 = 0;
m.q21 = 0;
m.q22 = 0;
m.index = 0;
m.q23 = 0;
m.avg = 0;
m.beat = 0;
m.myvol_s = 0;
m.t0 = 0;
m.dec_slow = 0;
m.peak = 0;
m.shift = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.9, div(30,m.fps));
m.dec_slow = pow(0.995, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.5+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = ((m.index+m.is_beat)*below(m.index, 4));
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.myvol = ((m.bass_att+m.treb_att)+m.mid_att);
m.myvol_s = (m.myvol_s+above(m.myvol, m.myvol_s));
m.myvol_s = ((0.995*m.myvol_s)+(0.005*m.myvol));
m.myvol_s = Math.min(m.myvol_s, 15);
m.q1 = div((div((m.myvol_s+(2*(m.bass+m.treb))),1000)*30),m.fps);
m.dir = ((m.dir*0.99)+(0.01*(m.index-1)));
m.dir = (0.5*(m.index-2));
m.q2 = (div(m.myvol_s,3)+1);
m.rot = (0.3*Math.sin(div(m.time,4)));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.0,
			scaling : 0.038558,
			samples : 352.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.2,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.ampl = 0;
m.ratio = 0;
m.t02 = 0;
m.y1 = 0;
m.x1 = 0;

			m.rkeys = ['t02'];
			return m;
		},
		'frame_eqs' : function(m) {
m.q1 = m.bass_att;
		return m;
	},
		'point_eqs' : function(m) {
m.r = Math.abs(Math.sin(div(m.frame,38)));
m.g = (0.5*Math.abs(Math.cos(div(m.frame,45))));
m.b = (0.5*Math.abs(Math.sin(div(m.frame,133))));
m.a = 0.3;
m.t02 = (m.t02+div(m.q1,10));
m.ratio = Math.sin(div(m.frame,49));
m.ampl = (0.01+(0.4*sqr((Math.sin(div(m.frame,18))*Math.cos(div(m.frame,123))))));
m.x1 = ((div((m.r-0.5),15)+0.5)+(m.ampl*Math.sin((m.sample*6.28))));
m.y1 = ((div((m.b-0.5),15)+0.5)+(m.ampl*Math.cos((m.sample*6.28))));
m.x = (m.x1+(((1*0.2)*(m.ampl+m.ratio))*Math.sin((((m.sample*6.28)*m.ratio)*7.3))));
m.y = (m.y1+(((1*0.2)*(m.ampl+m.ratio))*Math.cos(((m.sample*6.28)*6))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('q1=bass_att;'),
		'point_eqs_str' : ('r = abs (sin (frame /38));\n' + 'g = 0.5*abs (cos (frame /45));\n' + 'b = 0.5*abs (sin (frame / 133));\n' + 'a = 0.3;\n' + 't02 = t02 + q1/10;\n' + 'ratio = sin (frame/49);\n' + 'ampl = 0.01+0.4*sqr(sin ((frame ) / 18)* cos (frame / 123));\n' + 'x1 = (r-0.5)/15 +0.5 + ampl* sin (sample*6.28);\n' + 'y1 = (b-0.5)/15+0.5 + ampl* cos (sample*6.28);\n' + 'x =  x1+1*0.2*(ampl+ratio )*sin ( sample*6.28 * ratio*7.3);\n' + 'y =  y1+1*0.2*(ampl+ratio )*cos ( sample*6.28*6);'),

		},
		{
		'baseVals' : {
			a : 0.9,
			enabled : 0.0,
			b : 0.6,
			g : 0.0,
			scaling : 2.063781,
			samples : 15.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.8,
			smoothing : 0.8,
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
			samples : 112.0,
			additive : 1.0,
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
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.179142,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.82,
			border_g : 1.0,
			rad : 0.312746,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.xy = 0;
m.rand_frame = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.xy = (0.5+m.rand_frame);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('xy=0.5+rand_frame;'),

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '   vec2 P_3;\n' + '  P_3 = (uv_orig - (_qa.x * uv));\n' + '  tmpvar_2 = texture2D (sampler_main, P_3);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 * 0.99);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 crisp_1;\n' + '   vec3 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv).xyz;\n' + '  crisp_1 = tmpvar_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur2, uv);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = (abs((crisp_1 - \n' + '    ((tmpvar_3.xyz * scale2) + bias2)\n' + '  )) * _qa.y);\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('shift = 0;'),
	'frame_eqs_str' : ('dec_med = pow (0.9, 30/fps);\n' + 'dec_slow = pow (0.995, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) * below (index,4);\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'myvol = (bass_att+treb_att+mid_att);\n' + 'myvol_s = myvol_s + above (myvol, myvol_s);\n' + 'myvol_s = 0.995*myvol_s + 0.005*myvol;\n' + 'myvol_s = min (myvol_s,15);\n' + 'q1 = (myvol_s + 2*(bass+treb))/1000 * 30/fps;\n' + 'dir = dir * 0.99 + .01*(index-1);\n' + 'dir = .5*(index-2);\n' + 'q2=myvol_s/3+1;\n' + 'rot = 0.3*sin(time/4);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
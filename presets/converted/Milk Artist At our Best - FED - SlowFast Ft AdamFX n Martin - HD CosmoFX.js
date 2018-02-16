define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 24.8,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.898,
		echo_alpha : 0.0,
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
		echo_zoom : 2.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.108,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.54,
		zoom : 1.3345,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
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
		decay : 0.98,
		wave_a : 0.331,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.72,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.nex = 0;
m.shift = 0;
m.crash = 0;
m.rshift = 0;
m.normalframez = 0;
m.oldshift = 0;
m.zoom1 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.dx = 0;
m.oldshift = m.shift;
m.normalframez = (m.normalframez+1);
m.shift = (above(m.bass_att, 1)*above(m.treb_att, 0.9));
m.crash = Math.abs((m.oldshift-m.shift));
m.nex = ((equal(m.rshift, 0)*1)+(equal(m.rshift, 1)*2));
m.rshift = ifcond(m.crash, m.nex, m.rshift);
m.monitor = m.rshift;
m.wave_r = div(Math.floor(rand(200)),200);
m.wave_g = div(Math.floor(rand(200)),200);
m.wave_b = div(Math.floor(rand(200)),200);
m.warp = 0;
m.q1 = above(m.bass_att, 1.3);
m.zoom1 = ((m.zoom+0.15)-(0.3*mod(m.normalframez,2)));
m.zoom = ifcond(m.shift, m.zoom1, 1);
m.rot = ((m.rot-0.1)+(m.rshift*0.1));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dy = ((-below(m.y, 0.4)*0.007)+(above(m.y, 0.6)*0.007));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.0,
			scaling : 0.03856,
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
			scaling : 2.06378,
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
			tex_zoom : 0.17914,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.82,
			border_g : 1.0,
			rad : 0.31275,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv_orig + ((uv - uv_orig) * dot (ret_1, vec3(0.32, 0.49, 0.29))));\n' + '  tmpvar_3 = texture2D (sampler_main, P_4);\n' + '  ret_1 = tmpvar_3.xyz;\n' + '  ret_1 = ((ret_1 * 0.99) - 0.002);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 * 2.0);\n' + '  ret_1 = (ret_1 * (1.0 - ret_1));\n' + '  ret_1 = (((1.0 - \n' + '    pow (clamp (ret_1, 0.0, 1.0), vec3(0.5, 0.5, 0.5))\n' + '  ) * 1.5) - 0.75);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('dx=0;\n' + 'oldshift=shift;\n' + 'normalframez=normalframez+1;\n' + 'shift=above(bass_att,1)*above(treb_att,0.9);\n' + 'crash=abs(oldshift-shift);\n' + 'nex=equal(rshift,0)*1+equal(rshift,1)*2;\n' + 'rshift=if(crash,nex,rshift);\n' + 'monitor=rshift;\n' + 'wave_r=int(rand(200))/200;\n' + 'wave_g=int(rand(200))/200;\n' + 'wave_b=int(rand(200))/200;\n' + 'warp=0;\n' + 'q1=above(bass_att,1.3);\n' + 'zoom1=zoom+0.15-0.3*(normalframez%2);\n' + 'zoom=if(shift,zoom1,1);\n' + 'rot=rot-0.1+rshift*0.1;'),
	'pixel_eqs_str' : ('dy=-below(y,0.4)*0.007+above(y,0.6)*0.007;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.4,
		ib_g : 1.0,
		mv_x : 44.799995,
		warpscale : 0.325446,
		brighten : 1.0,
		mv_y : 24.000004,
		wave_scale : 1.0,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 1.0,
		mv_b : 1.0,
		echo_zoom : 0.388415,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 1.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.9,
		invert : 1.0,
		rot : -0.22,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 1.0,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.decay_g = 0;
m.q5 = 0;
m.basstime = 0;
m.decay_r = 0;
m.decay_b = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.dx = 0.0;
m.basstime = (m.basstime+(m.bass*0.13));
m.q5 = m.basstime;
m.decay_r = 0;
m.decay_g = 0;
m.decay_b = 0;
m.ob_r = (0.5+(0.5*Math.sin((m.basstime*0.22))));
m.ob_g = (0.5+(0.5*Math.sin((m.time*0.307))));
m.ob_b = (0.5+(0.5*Math.sin((m.time*0.112))));
m.monitor = m.q1;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = 1.05;
m.rot = 0;
m.dx = 0;
m.dy = 0;
m.warp = 0;
		return m;
	},
	'waves' : [
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
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.speed = 0;
m.v = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = ['ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.q1 = 0;
m.speed = (m.bass_att*0.2);
m.v = ((m.sample*100000)+((m.value2*m.bass)*0.1));
m.xs = (m.xs+((Math.sin(((m.v*0.1)+(Math.sin(m.v)*0.1)))*m.speed)*Math.atan((m.v*1.51))));
m.ys = (m.ys+((Math.sin(((m.v*0.1)+(Math.cos(m.v)*0.1)))*m.speed)*Math.atan(m.v)));
m.x = (0.5+((0.5*Math.sin((m.xs*0.1)))*Math.cos(((m.time*2)+m.ys))));
m.y = (0.5+((0.5*Math.sin((m.ys*0.1)))*Math.cos(((m.time*2.1)+m.xs))));
m.x = m.x;
m.y = m.y;
m.y = m.y;
m.g = 1;
m.xs = ifcond(above(m.xs, 1000), 0, m.xs);
m.ys = ifcond(above(m.ys, 1000), 0, m.ys);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('q1 = 0;\n' + 'speed = bass_att*0.2;\n' + 'v = sample*100000 + value2*bass*0.1;\n' + 'xs = xs + sin(v*0.1 + sin(v)*0.1)*speed*atan(v*1.51);\n' + 'ys = ys + sin(v*0.1 + cos(v)*0.1)*speed*atan(v);\n' + 'x = 0.5 + 0.5*sin(xs*0.1)*cos(time*2 + ys);\n' + 'y = 0.5 + 0.5*sin(ys*0.1)*cos(time*2.1 + xs);\n' + 'x = x;\n' + 'y = y;\n' + 'y = y;\n' + 'g = 1;\n' + 'xs = if(above(xs,1000),0 ,xs);\n' + 'ys = if(above(ys,1000),0 ,ys);'),

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
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.speed = 0;
m.v = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = ['ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.q1 = 0;
m.speed = (m.bass_att*0.2);
m.v = ((m.sample*100000)+((m.value2*m.bass)*0.1));
m.xs = (m.xs+((Math.sin(((m.v*0.1)+(Math.sin(m.v)*0.1)))*m.speed)*Math.atan((m.v*1.51))));
m.ys = (m.ys+((Math.sin(((m.v*0.1)+(Math.cos(m.v)*0.1)))*m.speed)*Math.atan(m.v)));
m.x = (0.5+((0.5*Math.sin((m.xs*0.1)))*Math.cos((((m.time*2)+m.ys)+0.7))));
m.y = (0.5+((0.5*Math.sin((m.ys*0.1)))*Math.cos((((m.time*2.1)+m.xs)+0.7))));
m.x = m.x;
m.y = m.y;
m.y = m.y;
m.g = 1;
m.xs = ifcond(above(m.xs, 1000), 0, m.xs);
m.ys = ifcond(above(m.ys, 1000), 0, m.ys);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('q1 = 0;\n' + 'speed = bass_att*0.2;\n' + 'v = sample*100000 + value2*bass*0.1;\n' + 'xs = xs + sin(v*0.1 + sin(v)*0.1)*speed*atan(v*1.51);\n' + 'ys = ys + sin(v*0.1 + cos(v)*0.1)*speed*atan(v);\n' + 'x = 0.5 + 0.5*sin(xs*0.1)*cos(time*2 + ys + 0.7);\n' + 'y = 0.5 + 0.5*sin(ys*0.1)*cos(time*2.1 + xs + 0.7);\n' + 'x = x;\n' + 'y = y;\n' + 'y = y;\n' + 'g = 1;\n' + 'xs = if(above(xs,1000),0 ,xs);\n' + 'ys = if(above(ys,1000),0 ,ys);'),

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
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.speed = 0;
m.v = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = ['ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.q1 = 0;
m.speed = (m.bass_att*0.2);
m.v = ((m.sample*100000)+((m.value2*m.bass)*0.1));
m.xs = (m.xs+((Math.sin(((m.v*0.1)+(Math.sin(m.v)*0.1)))*m.speed)*Math.atan((m.v*1.51))));
m.ys = (m.ys+((Math.sin(((m.v*0.1)+(Math.cos(m.v)*0.1)))*m.speed)*Math.atan(m.v)));
m.x = (0.5+((0.5*Math.sin((m.xs*0.1)))*Math.cos((((m.time*2)+m.ys)+1.4))));
m.y = (0.5+((0.5*Math.sin((m.ys*0.1)))*Math.cos((((m.time*2.1)+m.xs)+1.4))));
m.x = m.x;
m.y = m.y;
m.y = m.y;
m.g = 1;
m.xs = ifcond(above(m.xs, 1000), 0, m.xs);
m.ys = ifcond(above(m.ys, 1000), 0, m.ys);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('q1 = 0;\n' + 'speed = bass_att*0.2;\n' + 'v = sample*100000 + value2*bass*0.1;\n' + 'xs = xs + sin(v*0.1 + sin(v)*0.1)*speed*atan(v*1.51);\n' + 'ys = ys + sin(v*0.1 + cos(v)*0.1)*speed*atan(v);\n' + 'x = 0.5 + 0.5*sin(xs*0.1)*cos(time*2 + ys + 1.4);\n' + 'y = 0.5 + 0.5*sin(ys*0.1)*cos(time*2.1 + xs + 1.4);\n' + 'x = x;\n' + 'y = y;\n' + 'y = y;\n' + 'g = 1;\n' + 'xs = if(above(xs,1000),0 ,xs);\n' + 'ys = if(above(ys,1000),0 ,ys);'),

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
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.speed = 0;
m.v = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = ['ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.speed = (m.bass*0.1);
m.v = ((m.sample*10000)+((m.value2*m.bass)*0.1));
m.xs = (m.xs+(((equal(0, m.q1)*Math.sin((m.v*1)))*m.speed)*Math.atan((m.v*1.51))));
m.ys = (m.ys+((equal(0, m.q1)*Math.sin((m.v*1)))*m.speed));
m.x = (0.5+((0.5*Math.sin((m.xs*0.1)))*Math.cos(((m.time*2)+m.xs))));
m.y = (0.5+((0.5*Math.sin((m.ys*0.1)))*Math.cos(((m.time*2.1)+m.xs))));
m.y = (m.y-(m.sample*0.1));
m.x = ((m.x*0.6)+0.2);
m.y = (m.y+(m.bass*0.1));
m.y = (m.y*0.8);
m.r = ((0.5+(0.5*Math.sin((m.time*6.22))))+0.1);
m.g = (0.4+(0.4*Math.sin((m.time*5.307))));
m.b = (0.4+((0.4*Math.sin((m.time*4.959)))*m.x));
m.xs = ifcond(above(m.xs, 1000), 0, m.xs);
m.ys = ifcond(above(m.ys, 1000), 0, m.ys);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('speed = bass*0.1;\n' + 'v = sample*10000 + value2*bass*0.1;\n' + 'xs = xs + (equal(0,q1))*sin(v*1)*speed*atan(v*1.51);\n' + 'ys = ys + (equal(0,q1))*sin(v*1)*speed;\n' + 'x = 0.5 + 0.5*sin(xs*0.1)*cos(time*2 + xs);\n' + 'y = 0.5 + 0.5*sin(ys*0.1)*cos(time*2.1 + xs);\n' + 'y = y - sample*0.1;\n' + 'x = x*0.6 + 0.2;\n' + 'y = y + bass*0.1;\n' + 'y = y*0.8;\n' + 'r = 0.5 + 0.5*sin(time*6.22) + 0.1;\n' + 'g = 0.4 + 0.4*sin(time*5.307);\n' + 'b = 0.4 + 0.4*sin(time*4.959)*x;\n' + 'xs = if(above(xs,1000),0 ,xs);\n' + 'ys = if(above(ys,1000),0 ,ys);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.274246,
			additive : 0.0,
			border_a : 0.1,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 0.0,
			rad : 2.6671,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.saw = 0;
m.tex_capture = 0;

			m.rkeys = ['saw'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_capture = m.q1;
m.saw = (m.saw-(0.001*m.bass));
m.saw = ifcond(below(m.saw, 0.2), 0.6, m.saw);
m.tex_zoom = m.saw;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_capture  = q1;\n' + 'saw = saw - 0.001*bass;\n' + 'saw = if(below(saw,0.2),0.6,saw);\n' + 'tex_zoom = saw;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.274246,
			additive : 0.0,
			border_a : 0.1,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 0.0,
			rad : 2.6671,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.saw = 0;
m.tex_capture = 0;

			m.rkeys = ['saw'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_capture = m.q1;
m.saw = (m.saw-(0.001*m.bass));
m.saw = ifcond(below(m.saw, 0.1), 0.6, m.saw);
m.tex_zoom = m.saw;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_capture  = q1;\n' + 'saw = saw - 0.001*bass;\n' + 'saw = if(below(saw,0.1),0.6,saw);\n' + 'tex_zoom = saw;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.369642,
			additive : 0.0,
			border_a : 0.1,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 0.0,
			rad : 2.667177,
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
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.302938,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 1.0,
			rad : 2.667177,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur3, uv);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (((tmpvar_3.xyz * scale3) + bias3) * 2.0).xy;\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_fc_main, tmpvar_4);\n' + '  ret_1 = (ret_1 + tmpvar_5.xyz);\n' + '  ret_1 = (ret_1 * 2.0);\n' + '  ret_1 = (ret_1 * (ret_1 - (ret_1 * 0.2)));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('dx = 0.0;\n' + 'basstime = basstime  + bass*0.13;\n' + 'q5 = basstime;\n' + 'decay_r = 0;\n' + 'decay_g = 0;\n' + 'decay_b = 0;\n' + 'ob_r = 0.5 + 0.5*sin(basstime*0.22);\n' + 'ob_g = 0.5 + 0.5*sin(time*0.307);\n' + 'ob_b = 0.5 + 0.5*sin(time*0.112);\n' + 'monitor = q1;'),
	'pixel_eqs_str' : ('zoom = 1.05;\n' + 'rot = 0;\n' + 'dx = 0;\n' + 'dy = 0;\n' + 'warp = 0;'),
};

return pmap;
});
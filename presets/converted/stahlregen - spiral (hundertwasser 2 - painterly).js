define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.56,
		wave_g : 0.8,
		ib_g : 0.2,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 0.03,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.99999,
		ob_r : 0.0,
		sy : 0.99999,
		b3x : 1.0,
		ib_size : 0.06,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.40514,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.8,
		ib_r : 0.2,
		mv_b : 1.0,
		echo_zoom : 1.007,
		ob_size : 0.035,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 1.0,
		zoom : 0.96098,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.65,
		dy : 0.0,
		ob_a : 0.3,
		darken_center : 0.0,
		cy : 0.35,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 1.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.29,
		wave_mystery : 1.0,
		decay : 1.0,
		wave_a : 0.08,
		ob_g : 0.0,
		ib_a : 0.6,
		wave_b : 0.8,
		ib_b : 0.2,
		mv_r : 1.0,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.29,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.res = 0;
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.diff = 0;
m.q6 = 0;
m.vol = 0;
m.beat = 0;
m.x = 0;
m.y = 0;
m.z = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.q1 = (0.3+(0.3*Math.sin(((m.time+(0.33*m.treb))*3.213))));
m.q2 = (0.3+(0.3*Math.sin(((m.time+(0.33*m.treb))*3.533))));
m.q3 = (0.3+(0.3*Math.sin(((m.time+(0.33*m.treb))*3.733))));
m.wave_r = m.q2;
m.wave_g = m.q3;
m.wave_b = m.q1;
m.ib_r = m.q1;
m.ib_g = m.q2;
m.ib_b = m.q3;
m.ob_r = (1.3-m.q1);
m.ob_g = (1.3-m.q2);
m.ob_b = (1.3-m.q3);
m.vol = (((m.bass*8)+(m.mid*4))+(m.treb*2));
m.vol = (m.vol*above(m.vol, 17));
m.beat = above(m.vol, m.res);
m.diff = (((1-m.beat)*m.diff)+(m.beat*(m.vol-m.res)));
m.res = ((m.beat*(m.vol+(2*m.diff)))+((1-m.beat)*(m.res-div((((m.diff*0.04)+0.12)*60),m.fps))));
m.res = Math.max(0, m.res);
m.x = ifcond(m.beat, ((Math.floor(rand(60))*0.01)+0.2), m.x);
m.y = ifcond(m.beat, ((Math.floor(rand(60))*0.01)+0.2), m.y);
m.z = ifcond(m.beat, Math.floor(rand(7)), m.z);
m.q4 = m.x;
m.q5 = m.y;
m.q6 = m.z;
m.dx = (((m.dx-(0.036*Math.sin((6.5*(m.time+(0.5*m.bass_att))))))-(0.01*m.treb_att))*ifcond(above(m.q4, m.q5), 1, -1));
m.dy = (((m.dy+(0.027*Math.cos((4*(m.time+(0.5*m.bass_att))))))-(0.01*m.treb_att))*ifcond(above(m.q4, m.q5), 1, -1));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
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
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.23297,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.0,
			num_inst : 2.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+((0.38*ifcond(equal(m.instance, 0), 1, -1))*Math.sin((m.time+1.57))));
m.y = (0.5+((0.38*ifcond(equal(m.instance, 0), 1, -1))*Math.cos((m.time+1.57))));
m.ang = Math.sin(m.time);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5+0.38*if(equal(instance,0),1,-1)*sin(time+1.57);\n' + 'y = 0.5+0.38*if(equal(instance,0),1,-1)*cos(time+1.57);\n' + 'ang = sin(time);'),

		},
		{
		'baseVals' : {
			r2 : 0.5,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.5,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 0.0,
			b2 : 0.5,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.0951,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.0,
			num_inst : 11.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+((0.3*ifcond(equal(m.instance, 0), 1, ifcond(equal(m.instance, 2), 1, -1)))*Math.sin((m.time+(0.785*m.instance)))));
m.y = (0.5+((0.3*ifcond(equal(m.instance, 0), 1, ifcond(equal(m.instance, 2), 1, -1)))*Math.cos((m.time+(0.785*m.instance)))));
m.ang = Math.sin(m.time);
m.r = m.q2;
m.g = m.q3;
m.b = m.q1;
m.r2 = m.q3;
m.g2 = m.q1;
m.b2 = m.q2;
m.rad = (0.06+(0.03*m.bass_att));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5+0.3*if(equal(instance,0),1,if(equal(instance,2),1,-1))*sin(time+0.785*instance);\n' + 'y = 0.5+0.3*if(equal(instance,0),1,if(equal(instance,2),1,-1))*cos(time+0.785*instance);\n' + 'ang = sin(time);\n' + 'r = q2;\n' + 'g = q3;\n' + 'b = q1;\n' + 'r2 = q3;\n' + 'g2 = q1;\n' + 'b2 = q2;\n' + 'rad = 0.06 + 0.03*bass_att;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.5,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.99009,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.5,
			r : 1.0,
			border_g : 1.0,
			rad : 0.10893,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 2.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = (0.2+(0.3*m.bass_att));
m.x = (m.x-((0.3*Math.cos(m.time))*ifcond(equal(m.instance, 0), -1, 1)));
m.y = (m.y+((0.3*Math.sin(m.time))*ifcond(equal(m.instance, 0), -1, 1)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad = 0.2+0.3*bass_att;\n' + 'x = x - 0.3*cos(time)*if(equal(instance,0),-1,1);\n' + 'y = y + 0.3*sin(time)*if(equal(instance,0),-1,1);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.75398,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.63016,
			x : 0.5,
			y : 0.5,
			ang : 0.75398,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q6 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = Math.sin((2*(m.q2-m.q1)));
m.rad = (0.01+(0.5*m.bass));
m.sides = ifcond(equal((m.q6+2), 9), 100, (m.q6+2));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = sin(2*(q2-q1));\n' + 'rad = 0.01+0.5*bass;\n' + 'sides = if(equal(q6+2,9),100,q6+2);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 blurry_color_1;\n' + '   vec2 uv2_2;\n' + '   vec3 ret_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + texsize.zw);\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, P_4).xyz;\n' + '  blurry_color_1 = tmpvar_5;\n' + '  uv2_2 = (uv + ((blurry_color_1.xy - 0.37) * 0.03));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv2_2);\n' + '  ret_3 = tmpvar_6.xyz;\n' + '  ret_3 = (ret_3 - 0.004);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (-((\n' + '    (uv - 0.5)\n' + '   * 0.993)) + 0.5);\n' + '   vec3 tmpvar_3;\n' + '  tmpvar_3 = mix (texture2D (sampler_main, uv).xyz, texture2D (sampler_main, tmpvar_2).xyz, vec3(0.5, 0.5, 0.5));\n' + '  ret_1 = tmpvar_3;\n' + '  ret_1 = (ret_1 * 1.56);\n' + '  ret_1 = (1.0 - sqrt(ret_1));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('q1 = 0.3 + 0.3*sin((time+0.33*treb)*3.213);\n' + 'q2 = 0.3 + 0.3*sin((time+0.33*treb)*3.533);\n' + 'q3 = 0.3 + 0.3*sin((time+0.33*treb)*3.733);\n' + 'wave_r = q2;\n' + 'wave_g = q3;\n' + 'wave_b = q1;\n' + 'ib_r = q1;\n' + 'ib_g = q2;\n' + 'ib_b = q3;\n' + 'ob_r = 1.3-q1;\n' + 'ob_g = 1.3-q2;\n' + 'ob_b = 1.3-q3;\n' + 'vol = bass*8 + mid*4 + treb*2;\n' + 'vol = vol*above(vol,17);\n' + 'beat = above(vol,res);\n' + 'diff = (1-beat)*diff + beat*(vol-res);\n' + 'res = beat*(vol+2*diff) + (1-beat)*(res - (diff*0.04 + 0.12)*60/fps);\n' + 'res = max(0,res);\n' + 'x = if(beat,int(rand(60))*0.01 + 0.2,x);\n' + 'y = if(beat,int(rand(60))*0.01 + 0.2,y);\n' + 'z = if(beat,int(rand(7)),z);\n' + 'q4 = x;\n' + 'q5 = y;\n' + 'q6 = z;\n' + 'dx = (dx - 0.036*(sin(6.5*(time+0.5*bass_att)))-0.01*treb_att)*if(above(q4,q5),1,-1);\n' + 'dy = (dy + 0.027*(cos(4*(time+0.5*bass_att)))-0.01*treb_att)*if(above(q4,q5),1,-1);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
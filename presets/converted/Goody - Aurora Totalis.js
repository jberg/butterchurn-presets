define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.7,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.521,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.9901,
		ob_r : 1.0,
		sy : 1.0017,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 4.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.9999,
		mv_dx : 0.0,
		mv_dy : 0.82,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 0.35,
		echo_zoom : 0.997,
		ob_size : 0.0,
		b1ed : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 2.599,
		wave_dots : 1.0,
		mv_g : 0.35,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.00949,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.32,
		ob_g : 1.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 0.35,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.greenif = 0;
m.q4 = 0;
m.q5 = 0;
m.bluesine = 0;
m.redif = 0;
m.greensine = 0;
m.vol = 0;
m.blueif = 0;
m.redsine = 0;
m.decay = 0.1;
		return m;
	},
	'frame_eqs' : function(m) {
m.sx = 0.9;
m.vol = (((m.bass+m.mid)+m.treb_att)*0.3333);
m.redsine = (0.5+((0.15*m.bass)*Math.sin((m.time*3))));
m.greensine = (0.5+((0.15*m.mid)*Math.sin((m.time*2))));
m.bluesine = (0.5+((0.15*m.treb)*Math.sin(m.time)));
m.redif = ifcond(above(m.bass, 1.2), m.redsine, ifcond(above(m.redif, 0.95), 0, (m.redif*0.85)));
m.greenif = ifcond(above(m.mid, 1.2), m.greensine, ifcond(above(m.greenif, 0.95), 0, (m.greenif*0.85)));
m.blueif = ifcond(above(m.treb, 1.2), m.bluesine, ifcond(above(m.blueif, 0.95), 0, (m.blueif*0.85)));
m.q4 = (0.95+((0.05*Math.sin((m.time*0.52)))*Math.cos((m.time*0.39))));
m.q5 = (0.95+((0.05*Math.sin((m.time*0.44)))*Math.cos((m.time*0.71))));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (m.zoom+((0.05*m.rad)*m.treb_att));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.vol = 0;
m.t1 = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.y = ((rand(10000)*0.0001)+0.5);
m.x = (0.5+((0.85*Math.sin(m.time))*(0.48-m.y)));
m.vol = (((m.bass+m.mid)+m.treb)*0.333);
m.a = above((0.35*m.bass), m.x);
m.r = (m.bass*0.75);
m.g = (m.mid*0.3);
m.b = (m.treb*0.25);
		return m;
	},
		'init_eqs_str' : ('t1 = 1;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('y=rand(10000)*(.0001)+.5;\n' + 'x=.5+.85*sin(time)*(.48-y);\n' + 'vol=(bass+mid+treb)*.333;\n' + 'a=above((.35*bass),x);\n' + 'r=bass*.75;\n' + 'g=mid*.3;\n' + 'b=treb*.25;'),

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
			smoothing : 1.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.vol = 0;
m.t1 = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.y = ((rand(10000)*0.0001)+0.5);
m.x = (0.5+((0.5*Math.sin(m.time))*(0.48-m.y)));
m.vol = (((m.bass+m.mid)+m.treb)*0.333);
m.a = above((0.35*m.mid), m.x);
m.r = (m.bass*0.3);
m.g = (m.mid*0.75);
m.b = (m.treb*0.2);
		return m;
	},
		'init_eqs_str' : ('t1 = 1;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('y=rand(10000)*(.0001)+.5;\n' + 'x=.5+.5*sin(time)*(.48-y);\n' + 'vol=(bass+mid+treb)*.333;\n' + 'a=above((.35*mid),x);\n' + 'r=bass*.3;\n' + 'g=mid*.75;\n' + 'b=treb*.2;'),

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
			smoothing : 1.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.vol = 0;
m.t1 = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.y = ((rand(10000)*0.0001)+0.5);
m.x = (0.5+((0.25*Math.sin(m.time))*(0.48-m.y)));
m.vol = (((m.bass+m.mid)+m.treb)*0.333);
m.a = above((0.35*m.treb), m.x);
m.r = (m.bass*0.2);
m.g = (m.mid*0.3);
m.b = (m.treb*0.75);
		return m;
	},
		'init_eqs_str' : ('t1 = 1;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('y=rand(10000)*(.0001)+.5;\n' + 'x=.5+.25*sin(time)*(.48-y);\n' + 'vol=(bass+mid+treb)*.333;\n' + 'a=above((.35*treb),x);\n' + 'r=bass*.2;\n' + 'g=mid*.3;\n' + 'b=treb*.75;'),

		},
		{
		'baseVals' : {
			a : 0.05,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.vol = 0;
m.t1 = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.y = ((rand(10000)*0.0001)+0.5);
m.x = (0.5-(pow(Math.sin(m.time), m.y)+(0.55-m.y)));
m.x = ifcond(above(m.x, m.y), ((m.y+Math.sin(m.time))+(1-m.y)), m.x);
m.vol = (((m.bass+m.mid)+m.treb)*0.333);
m.r = (m.bass*0.5);
m.g = (m.mid*0.5);
m.b = (m.treb*0.5);
		return m;
	},
		'init_eqs_str' : ('t1 = 1;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('y=rand(10000)*(.0001)+.5;\n' + 'x=.5-(pow(sin(time),y)+(.55-y));\n' + 'x=if(above(x,y),y+sin(time)+(1-y),x);\n' + 'vol=(bass+mid+treb)*.333;\n' + 'r=bass*.5;\n' + 'g=mid*.5;\n' + 'b=treb*.5;'),

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
			tex_zoom : 0.99307,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.90164,
			x : 0.5,
			y : 0.5,
			ang : 0.62832,
			sides : 8.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.border_r = m.q1;
m.border_g = m.q2;
m.border_b = m.q3;
m.ang = ((1*Math.sin((m.time*0.44)))*Math.cos((m.time*0.17)));
m.x = m.q4;
m.y = m.q5;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('border_r=q1;\n' + 'border_g=q2;\n' + 'border_b=q3;\n' + 'ang=1*sin(time*.44)*cos(time*.17);\n' + 'x=q4;\n' + 'y=q5;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.64463,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.39869,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 8.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.border_r = m.q1;
m.border_g = m.q2;
m.border_b = m.q3;
m.x = (m.q4+((0.085*Math.sin((m.time*0.121)))*Math.cos((m.time*0.19))));
m.x = (m.q5+((0.085*Math.sin((m.time*0.17)))*Math.cos((m.time*0.137))));
m.ang = (3.14*Math.sin((m.time*0.77)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('border_r=q1;\n' + 'border_g=q2;\n' + 'border_b=q3;\n' + 'x=q4+.085*sin(time*.121)*cos(time*.19);\n' + 'x=q5+.085*sin(time*.17)*cos(time*.137);\n' + 'ang=3.14*sin(time*.77);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.99991,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.44044,
			x : 0.8,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 1.88496,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.00182,
			additive : 1.0,
			border_a : 0.2,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.36457,
			x : 0.5,
			y : 0.51,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.bass_mod = 0;

			m.rkeys = ['a'];
			return m;
		},
		'frame_eqs' : function(m) {
m.bass_mod = Math.max((m.x+Math.abs(m.bass_att)), (m.x+Math.sin(m.time)));
m.y = (0.5+(0.5*Math.sin(m.time)));
m.x = (m.bass_mod*pow(m.y, 2));
m.a = ifcond(above(m.x, m.y), 0, m.a);
m.a2 = m.a;
m.border_a = (0.1*m.a);
m.tex_zoom = (m.bass+m.mid);
m.r = (m.bass*0.5);
m.g = (m.mid*0.6);
m.b = (m.treb*0.7);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('bass_mod=max(x+abs(bass_att),x+sin(time));\n' + 'y=.5+.5*sin(time);\n' + 'x=bass_mod*pow(y,2);\n' + 'a=if(above(x,y),0,a);\n' + 'a2=a;\n' + 'border_a=.1*a;\n' + 'tex_zoom=bass+mid;\n' + 'r=bass*.5;\n' + 'g=mid*.6;\n' + 'b=treb*.7;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec3 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_fc_main, uv).xyz;\n' + '  ret_1 = tmpvar_2;\n' + '   vec3 tmpvar_3;\n' + '  tmpvar_3.z = 0.5;\n' + '  tmpvar_3.x = _qa.w;\n' + '  tmpvar_3.y = _qb.x;\n' + '  ret_1 = (ret_1 * tmpvar_3);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uvp_1;\n' + '   vec3 ret_2;\n' + '  uvp_1.x = uv.x;\n' + '  uvp_1.y = (uv.y * 0.2);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uvp_1);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur2, uvp_1);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (((tmpvar_3.xyz * scale1) + bias1) * ((tmpvar_4.xyz * scale2) + bias2)).xy;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_noise_hq, tmpvar_5);\n' + '  ret_2 = tmpvar_6.xyz;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7.x = (uv.y + (rad * 0.12));\n' + '  tmpvar_7.y = ((uv.x * rad) * 0.12);\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_blur2, tmpvar_7);\n' + '  ret_2 = (ret_2 + ((tmpvar_8.xyz * scale2) + bias2));\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9.w = 1.0;\n' + '  tmpvar_9.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_9;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('decay=0.1;'),
	'frame_eqs_str' : ('sx=0.9;\n' + 'vol=(bass+mid+treb_att)*.3333;\n' + 'redsine=.5+.15*bass*sin(time*3);\n' + 'greensine=.5+.15*mid*sin(time*2);\n' + 'bluesine=.5+.15*treb*sin(time);\n' + 'redif=if(above(bass,1.2),redsine,if(above(redif,.95),0,redif*.85));\n' + 'greenif=if(above(mid,1.2),greensine,if(above(greenif,.95),0,greenif*.85));\n' + 'blueif=if(above(treb,1.2),bluesine,if(above(blueif,.95),0,blueif*.85));\n' + 'q4=.95+.05*sin(time*.52)*cos(time*.39);\n' + 'q5=.95+.05*sin(time*.44)*cos(time*.71);'),
	'pixel_eqs_str' : ('zoom=zoom+.05*rad*treb_att;'),
};

return pmap;
});
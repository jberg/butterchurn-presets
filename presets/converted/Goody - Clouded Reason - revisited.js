define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.75,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.28,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0017,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.32545,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.9998,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 0.35,
		echo_zoom : 0.997,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 2.599,
		wave_dots : 0.0,
		mv_g : 0.35,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0096,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.06,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 0.35,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.volsine = 0;
m.q1 = 0;
m.q2 = 0;
m.pi = 0;
m.decay = 0.1;
		return m;
	},
	'frame_eqs' : function(m) {
m.sx = 1;
m.sy = 1;
m.q1 = (0.5+(0.1*Math.cos((m.time*0.21))));
m.q2 = (0.5+(0.1*Math.sin((m.time*0.32))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.pi = 3.14159;
m.volsine = ((((m.bass+m.mid)+m.treb)*0.05)*Math.sin((m.time*(((0.1*m.bass)+(0.1*m.mid))+(0.1*m.treb)))));
m.cx = m.q1;
m.cy = m.q2;
m.rot = ((-0.03*m.rad)*Math.sin((m.time*0.11)));
m.rot = (m.rot+((0.01*m.rad)*Math.sin(((m.rad*m.time)*40))));
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
			a : 0.4,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.34784,
			additive : 0.0,
			border_a : 0.33,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.4404,
			x : 0.51,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 14.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.greenif = 0;
m.q2 = 0;
m.bluesine = 0;
m.redif = 0;
m.greensine = 0;
m.vol = 0;
m.blueif = 0;
m.redsine = 0;

			m.rkeys = ['greenif','redif','blueif'];
			return m;
		},
		'frame_eqs' : function(m) {
m.y = m.q2;
m.x = m.q1;
m.vol = (((m.bass+m.mid)+m.treb_att)*0.3333);
m.redsine = (0.5+((0.15*m.bass)*Math.sin((m.time*3))));
m.greensine = (0.5+((0.15*m.mid)*Math.sin((m.time*2))));
m.bluesine = (0.5+((0.15*m.treb)*Math.sin(m.time)));
m.redif = ifcond(above(m.bass, 1.2), m.redsine, ifcond(above(m.redif, 0.95), 0, (m.redif*0.985)));
m.greenif = ifcond(above(m.mid, 1.2), m.greensine, ifcond(above(m.greenif, 0.95), 0, (m.greenif*0.985)));
m.blueif = ifcond(above(m.treb, 1.2), m.bluesine, ifcond(above(m.blueif, 0.95), 0, (m.blueif*0.985)));
m.border_r = m.redif;
m.border_g = m.greenif;
m.border_b = m.blueif;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('y=q2;\n' + 'x=q1;\n' + 'vol=(bass+mid+treb_att)*.3333;\n' + 'redsine=.5+.15*bass*sin(time*3);\n' + 'greensine=.5+.15*mid*sin(time*2);\n' + 'bluesine=.5+.15*treb*sin(time);\n' + 'redif=if(above(bass,1.2),redsine,if(above(redif,.95),0,redif*.985));\n' + 'greenif=if(above(mid,1.2),greensine,if(above(greenif,.95),0,greenif*.985));\n' + 'blueif=if(above(treb,1.2),bluesine,if(above(blueif,.95),0,blueif*.985));\n' + 'border_r=redif;\n' + 'border_g=greenif;\n' + 'border_b=blueif;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.4,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.34784,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.2958,
			x : 0.41,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 14.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.ptex_ang = 0;

			m.rkeys = ['ptex_ang','tex_ang'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = ifcond(above(m.treb, 1.2), (m.tex_ang+Math.abs((6.28*Math.sin(m.time)))), m.ptex_ang);
m.ptex_ang = m.tex_ang;
m.x = (m.q1+(0.1*Math.cos((m.time*0.71))));
m.y = (m.q2+(0.1*Math.sin((m.time*0.66))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=if(above(treb,1.2),tex_ang+abs(6.28*sin(time)),ptex_ang);\n' + 'ptex_ang=tex_ang;\n' + 'x=q1+.1*cos(time*.71);\n' + 'y=q2+.1*sin(time*.66);'),

		},
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
			tex_zoom : 0.99991,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.44044,
			x : 0.4,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.ptex_ang = 0;

			m.rkeys = ['ptex_ang','tex_ang'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = ifcond(above(m.mid, 1.1), (m.tex_ang+Math.abs((6.28*Math.sin((m.time*0.7))))), m.ptex_ang);
m.ptex_ang = m.tex_ang;
m.x = (m.q1+(0.1*Math.sin((m.time*0.63))));
m.y = (m.q2+(0.1*Math.cos((m.time*0.54))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=if(above(mid,1.1),tex_ang+abs(6.28*sin(time*.7)),ptex_ang);\n' + 'ptex_ang=tex_ang;\n' + 'x=q1+.1*sin(time*.63);\n' + 'y=q2+.1*cos(time*.54);'),

		},
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
			tex_zoom : 1.34784,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.21946,
			x : 0.51,
			y : 0.7,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 14.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.ptex_ang = 0;

			m.rkeys = ['ptex_ang','tex_ang'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = ifcond(above(m.bass_att, 1), (m.tex_ang+Math.abs((6.28*Math.sin(m.time)))), m.ptex_ang);
m.ptex_ang = m.tex_ang;
m.x = (m.q1+(0.1*Math.sin((m.time*0.33))));
m.y = (m.q2+(0.1*Math.cos((m.time*0.29))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang=if(above(bass_att,1),tex_ang+abs(6.28*sin(time)),ptex_ang);\n' + 'ptex_ang=tex_ang;\n' + 'x=q1+.1*sin(time*.33);\n' + 'y=q2+.1*cos(time*.29);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_fw_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec3 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_fw_main, uv).xyz;\n' + '  ret_1 = tmpvar_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uv);\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = ((tmpvar_3.xyz * scale1) + bias1).x;\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = dot (vec3((ret_1.x * tmpvar_4)), vec3(0.32, 0.49, 0.29));\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (0.35 * tmpvar_4));\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (2.0 * texture2D (sampler_fw_main, P_6)).xyz;\n' + '  ret_1 = (ret_1 + tmpvar_7);\n' + '  ret_1 = (1.0 - (ret_1 * (3.5 * tmpvar_5)));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('decay=0.1;'),
	'frame_eqs_str' : ('sx=1;\n' + 'sy=1;\n' + 'q1=.5+.1*cos(time*.21);\n' + 'q2=.5+.1*sin(time*.32);'),
	'pixel_eqs_str' : ('pi=3.14159;\n' + 'volsine=(bass+mid+treb)*.05*sin(time*(.1*bass+.1*mid+.1*treb));\n' + 'cx=q1;\n' + 'cy=q2;\n' + 'rot=-.03*rad*sin(time*.11);\n' + 'rot=rot+.01*rad*sin(rad*time*40);'),
};

return pmap;
});
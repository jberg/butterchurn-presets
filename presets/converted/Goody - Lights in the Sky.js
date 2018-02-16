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
		wave_scale : 0.188,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0017,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 0.9999,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
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
		zoom : 1.01959,
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
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 0.35,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q4 = 0;
m.q5 = 0;
m.decay = 0.1;
		return m;
	},
	'frame_eqs' : function(m) {
m.sx = 1.000;
m.sy = 1.000;
m.q4 = (0.5+((0.05*Math.cos((m.time*0.52)))*Math.cos((m.time*0.39))));
m.q5 = (0.5+((0.05*Math.sin((m.time*0.44)))*Math.cos((m.time*0.71))));
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = ((m.zoom+0.01)+((0.75*m.rad)*m.treb_att));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 4.44797,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 128.0,
			},
		'init_eqs' : function(m) {
m.mvx = 0;
m.mvy = 0;
m.stx = 0;
m.sty = 0;
m.t1 = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.stx = (0.5+(0.05*Math.sin(((m.time*0.22)+(0.05*m.treb_att)))));
m.sty = (0.5+(0.05*Math.cos(((m.time*0.15)+(0.05*m.treb_att)))));
m.mvx = ((m.stx+(0.05*Math.cos(m.time)))+(0.05*Math.sin(m.bass)));
m.mvy = ((m.sty+(0.05*Math.sin(m.time)))+(0.05*Math.cos(m.treb)));
m.x = (m.mvx+((Math.abs(((Math.sin((m.y*m.bass))*m.x)+pow(Math.cos(((m.x*m.y)*m.treb)), m.bass_att)))*0.1)*Math.sin((m.y+m.time))));
m.y = (m.mvy+((Math.abs(((Math.cos((m.x*m.treb))*m.y)+pow(Math.cos(((m.y*m.x)*m.bass)), m.treb_att)))*0.1)*Math.cos((m.x+m.time))));
		return m;
	},
		'init_eqs_str' : ('t1 = 1;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('stx=.5+.05*sin(time*.22+.05*treb_att);\n' + 'sty=.5+.05*cos(time*.15+.05*treb_att);\n' + 'mvx=stx+.05*cos(time)+.05*sin(bass);\n' + 'mvy=sty+.05*sin(time)+.05*cos(treb);\n' + 'x=mvx+abs(sin(y*bass)*x+pow(cos(x*y*treb),bass_att))*.1*sin(y+time);\n' + 'y=mvy+abs(cos(x*treb)*y+pow(cos(y*x*bass),treb_att))*.1*cos(x+time);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 4.44796,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 128.0,
			},
		'init_eqs' : function(m) {
m.mvx = 0;
m.mvy = 0;
m.stx = 0;
m.sty = 0;
m.t1 = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.stx = (0.5+(0.05*Math.sin(((m.time*0.12)+m.treb_att))));
m.sty = (0.5-(0.05*Math.cos(((m.time*0.25)+m.treb_att))));
m.mvx = ((m.stx-(0.05*Math.sin(m.time)))+(0.05*Math.cos(m.bass)));
m.mvy = ((m.sty+(0.05*Math.cos(m.time)))+(0.05*Math.sin(m.treb)));
m.x = (m.mvx+((Math.abs(((Math.sin((m.y*m.bass))*m.x)+pow(Math.cos(((m.x*m.y)*m.treb)), m.bass_att)))*0.1)*Math.sin((m.y+m.time))));
m.y = (m.mvy+((Math.abs(((Math.cos((m.x*m.treb))*m.y)+pow(Math.cos(((m.y*m.x)*m.bass)), m.treb_att)))*0.1)*Math.cos((m.x+m.time))));
		return m;
	},
		'init_eqs_str' : ('t1 = 1;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('stx=.5+.05*sin(time*.12+treb_att);\n' + 'sty=.5-.05*cos(time*.25+treb_att);\n' + 'mvx=stx-.05*sin(time)+.05*cos(bass);\n' + 'mvy=sty+.05*cos(time)+.05*sin(treb);\n' + 'x=mvx+abs(sin(y*bass)*x+pow(cos(x*y*treb),bass_att))*.1*sin(y+time);\n' + 'y=mvy+abs(cos(x*treb)*y+pow(cos(y*x*bass),treb_att))*.1*cos(x+time);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 4.44841,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mvx = 0;
m.mvy = 0;
m.stx = 0;
m.sty = 0;
m.t1 = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.stx = (0.5-(0.01*Math.cos(((m.time*0.32)+m.mid_att))));
m.sty = (0.5-(0.01*Math.sin(((m.time*0.45)+m.mid_att))));
m.mvx = ((m.stx-(0.01*Math.cos((m.time*1.33))))+(0.001*Math.sin(m.bass)));
m.mvy = ((m.sty+(0.01*Math.sin((m.time*0.87))))+(0.001*Math.sin(m.treb)));
m.x = (m.mvx+((Math.abs(((Math.sin((m.y*m.bass))*m.x)+pow(Math.cos(((m.x*m.y)*m.treb)), m.bass_att)))*0.05)*Math.sin((m.y+(m.time*1.43)))));
m.y = (m.mvy+((Math.abs(((Math.cos((m.x*m.treb))*m.y)+pow(Math.cos(((m.y*m.x)*m.bass)), m.treb_att)))*0.05)*Math.cos((m.x+(m.time*1.54)))));
		return m;
	},
		'init_eqs_str' : ('t1 = 1;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('stx=.5-.01*cos(time*.32+mid_att);\n' + 'sty=.5-.01*sin(time*.45+mid_att);\n' + 'mvx=stx-.01*cos(time*1.33)+.001*sin(bass);\n' + 'mvy=sty+.01*sin(time*.87)+.001*sin(treb);\n' + 'x=mvx+abs(sin(y*bass)*x+pow(cos(x*y*treb),bass_att))*.05*sin(y+time*1.43);\n' + 'y=mvy+abs(cos(x*treb)*y+pow(cos(y*x*bass),treb_att))*.05*cos(x+time*1.54);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 4.44841,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mvx = 0;
m.mvy = 0;
m.stx = 0;
m.sty = 0;
m.t1 = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.stx = (0.5+(0.01*Math.sin(((m.time*0.022)+m.mid_att))));
m.sty = (0.5+(0.01*Math.cos(((m.time*0.615)+m.mid_att))));
m.mvx = ((m.stx+(0.01*Math.cos((m.time*0.94))))+(0.05*Math.sin(m.bass)));
m.mvy = ((m.sty+(0.01*Math.sin((m.time*1.4))))+(0.05*Math.cos(m.treb)));
m.x = (m.mvx+(((0.5*Math.abs(((Math.sin((m.y*m.bass))*m.x)+pow(Math.cos(((m.x*m.y)*m.treb)), m.bass_att))))*0.2)*Math.sin((m.y+(m.time*0.72)))));
m.y = (m.mvy+(((0.5*Math.abs(((Math.cos((m.x*m.treb))*m.y)+pow(Math.cos(((m.y*m.x)*m.bass)), m.treb_att))))*0.2)*Math.cos((m.x+(m.time*0.47)))));
		return m;
	},
		'init_eqs_str' : ('t1 = 1;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('stx=.5+.01*sin(time*.022+mid_att);\n' + 'sty=.5+.01*cos(time*.615+mid_att);\n' + 'mvx=stx+.01*cos(time*.94)+.05*sin(bass);\n' + 'mvy=sty+.01*sin(time*1.4)+.05*cos(treb);\n' + 'x=mvx+.5*abs(sin(y*bass)*x+pow(cos(x*y*treb),bass_att))*.2*sin(y+time*.72);\n' + 'y=mvy+.5*abs(cos(x*treb)*y+pow(cos(y*x*bass),treb_att))*.2*cos(x+time*.47);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.003,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.50127,
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
m.ang = ((3.14*Math.sin((m.time*0.44)))*Math.cos((m.time*0.17)));
m.x = m.q4;
m.y = m.q5;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('border_r=q1;\n' + 'border_g=q2;\n' + 'border_b=q3;\n' + 'ang=3.14*sin(time*.44)*cos(time*.17);\n' + 'x=q4;\n' + 'y=q5;'),

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
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.50122,
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
m.x = (m.q4+((0.25*Math.sin((m.time*0.121)))*Math.cos((m.time*0.19))));
m.x = (m.q5+((0.25*Math.cos((m.time*0.17)))*Math.cos((m.time*0.137))));
m.ang = (3.14*Math.cos((m.time*0.77)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('border_r=q1;\n' + 'border_g=q2;\n' + 'border_b=q3;\n' + 'x=q4+.25*sin(time*.121)*cos(time*.19);\n' + 'x=q5+.25*cos(time*.17)*cos(time*.137);\n' + 'ang=3.14*cos(time*.77);'),

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec3 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_fc_main, uv).xyz;\n' + '  ret_1.z = tmpvar_2.z;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = mix (uv_orig, uv, vec2(0.2, 0.2));\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = mix (uv_orig, uv, vec2(0.4, 0.4));\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, uv);\n' + '  ret_1.x = (tmpvar_5.x * 0.97);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, tmpvar_3);\n' + '  ret_1.y = (tmpvar_6.y * 0.98);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_main, tmpvar_4);\n' + '  ret_1.z = ((tmpvar_7.z * 0.96) + (ret_1.xy * 0.25)).x;\n' + '  ret_1 = (ret_1 - (0.0085 + (0.005 * ret_1)));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 base_1;\n' + '   vec3 ret_2;\n' + '   vec3 tmpvar_3;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_main, uv);\n' + '  tmpvar_3 = tmpvar_4.xyz;\n' + '  ret_2 = tmpvar_3;\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_blur3, uv);\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = ((tmpvar_5.xyz * scale3) + bias3);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = tmpvar_4.xyz;\n' + '  base_1 = tmpvar_7;\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = ((ret_2 + dot (\n' + '    (base_1 + tmpvar_6)\n' + '  , vec3(0.32, 0.49, 0.29))) + tmpvar_4.xyz);\n' + '  ret_2 = (ret_2 + (tmpvar_6 + mix (ret_2.xxx, \n' + '    (tmpvar_6.x * vec3(0.24, 0.9, 0.138))\n' + '  , base_1.yyy)));\n' + '  ret_2 = (ret_2 + (tmpvar_6 + mix (ret_2.yyy, \n' + '    (tmpvar_6.y * vec3(0.9, 0.25, 0.1))\n' + '  , base_1.xxx)));\n' + '  ret_2 = (ret_2 + (tmpvar_6 + mix (ret_2.zzz, \n' + '    (tmpvar_6.z * vec3(0.31, 0.12, 0.18))\n' + '  , base_1.zzz)));\n' + '  ret_2 = (ret_2 + ((tmpvar_6 * \n' + '    (fract(base_1) + fract(tmpvar_6))\n' + '  ) + tmpvar_8));\n' + '  ret_2 = (ret_2 + fract((ret_2 + tmpvar_6)));\n' + '  ret_2 = (ret_2 * ret_2);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9.w = 1.0;\n' + '  tmpvar_9.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_9;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('decay=0.1;'),
	'frame_eqs_str' : ('sx=1.000;\n' + 'sy=1.000;\n' + 'q4=.5+.05*cos(time*.52)*cos(time*.39);\n' + 'q5=.5+.05*sin(time*.44)*cos(time*.71);'),
	'pixel_eqs_str' : ('zoom=zoom+.01+.75*rad*treb_att;'),
};

return pmap;
});
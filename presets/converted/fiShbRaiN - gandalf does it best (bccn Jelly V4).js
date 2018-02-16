define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 21.473,
		warpscale : 1.47,
		brighten : 0.0,
		mv_y : 15.907,
		wave_scale : 1.286,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.00183,
		ob_r : 0.51,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.34784,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 0.483,
		echo_zoom : 1.007,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 0.179,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99816,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.474,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.965,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = 1;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.06,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.yheight = 0;
m.xoffset1 = 0;
m.pphase2 = 0;
m.xoffset2 = 0;
m.px = 0;
m.py = 0;
m.lrorient = 0;
m.pphase = 0;
m.pheight = 0;
m.yspout = 0;
m.xspout = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.xspout = 0.5;
m.yspout = -0.01;
m.pphase = (((9999*m.sample)*m.sample)*0.0001);
m.pphase2 = (0.1+(mod(((m.sample*3349)*m.sample),100)*0.01));
m.pheight = (mod((m.sample*9893),100)*0.002);
m.yheight = (mod(((m.sample*1231)*m.sample),100)*0.01);
m.r = ((mod((m.sample*5454),100)*0.01)*Math.abs(Math.sin((m.time*0.25))));
m.g = (mod((m.sample*9954),100)*0.01);
m.xoffset1 = (Math.cos(((m.time*m.pphase2)+m.pphase))*m.pheight);
m.xoffset2 = (-1*(Math.cos(((m.time*m.pphase2)+m.pphase))*m.pheight));
m.lrorient = ifcond(below(Math.cos(((m.time*m.pphase2)+m.pphase)), Math.cos((((m.time-0.1)*m.pphase2)+m.pphase))), 0, 1);
m.px = ifcond(equal(m.lrorient, 0), ((m.xspout-m.pheight)+m.xoffset1), ((m.xspout+m.pheight)-m.xoffset2));
m.py = (m.yspout+(Math.abs(Math.sin(((m.time*m.pphase2)+m.pphase)))*m.yheight));
m.x = m.px;
m.y = m.py;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('xspout=.5;\n' + 'yspout=-.01;\n' + 'pphase=9999*sample*sample*.0001;\n' + 'pphase2=.1+((sample*3349*sample)%100)*.01;\n' + 'pheight=((sample*9893)%100)*.002;\n' + 'yheight=((sample*1231*sample)%100)*.01;\n' + 'r=((sample*5454)%100)*.01*abs(sin(time*.25));\n' + 'g=((sample*9954)%100)*.01;\n' + 'xoffset1=(cos((time*pphase2)+pphase)*pheight);\n' + 'xoffset2=-1*(cos((time*pphase2)+pphase)*pheight);\n' + 'lrorient=if(below(cos((time*pphase2)+pphase),cos(((time-.1)*pphase2)+pphase)),0,1);\n' + 'px=if(equal(lrorient,0),xspout-pheight+xoffset1,xspout+pheight-xoffset2);\n' + 'py=yspout+(abs(sin((time*pphase2)+pphase))*yheight);\n' + 'x=px;\n' + 'y=py;'),

		},
		{
		'baseVals' : {
			a : 0.2,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.px = 0;
m.py = 0;
m.pphase = 0;
m.pheight = 0;
m.yspout = 0;
m.xspout = 0;

			m.rkeys = ['yspout','xspout'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.pphase = ((m.sample*5671)*Math.cos((m.time*0.0001)));
m.pheight = ((mod((m.sample*7654),100)*0.005)*Math.sin((m.time*0.2)));
m.xspout = ifcond(below(Math.abs(Math.sin((m.time*0.2))), 0.005), (0.3+(rand(40)*0.01)), m.xspout);
m.yspout = ifcond(below(Math.abs(Math.sin((m.time*0.2))), 0.005), (0.3+(rand(40)*0.01)), m.yspout);
m.px = (m.xspout+(Math.cos((m.time+m.pphase))*m.pheight));
m.py = (m.yspout+(Math.sin((m.time+m.pphase))*m.pheight));
m.x = m.px;
m.y = m.py;
m.a = Math.abs(((Math.sin((m.time*0.2))*0.3)+(m.treb_att*0.1)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('pphase=(sample*5671*cos(time*.0001));\n' + 'pheight=((sample*7654)%100)*.005*sin(time*.2);\n' + 'xspout=if(below(abs(sin(time*.2)),.005),.3+(rand(40)*.01),xspout);\n' + 'yspout=if(below(abs(sin(time*.2)),.005),.3+(rand(40)*.01),yspout);\n' + 'px=xspout+(cos(time+pphase)*pheight);\n' + 'py=yspout+(sin(time+pphase)*pheight);\n' + 'x=px;\n' + 'y=py;\n' + 'a=abs(sin(time*.2)*.3+(treb_att*.1));'),

		},
		{
		'baseVals' : {
			a : 0.2,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.px = 0;
m.py = 0;
m.pphase = 0;
m.pheight = 0;
m.yspout = 0;
m.xspout = 0;

			m.rkeys = ['yspout','xspout'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.pphase = ((m.sample*5566)*Math.sin((m.time*0.001)));
m.pheight = ((mod((m.sample*3443),100)*0.005)*Math.sin((m.time*0.45)));
m.xspout = ifcond(below(Math.abs(Math.sin((m.time*0.45))), 0.005), (0.3+(rand(40)*0.01)), m.xspout);
m.yspout = ifcond(below(Math.abs(Math.sin((m.time*0.45))), 0.005), (0.3+(rand(40)*0.01)), m.yspout);
m.px = (m.xspout+(Math.cos((m.time+m.pphase))*m.pheight));
m.py = (m.yspout+(Math.sin((m.time+m.pphase))*m.pheight));
m.x = m.px;
m.y = m.py;
m.a = Math.abs(((Math.sin((m.time*0.45))*0.3)+(m.bass_att*0.1)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('pphase=(sample*5566*sin(time*.001));\n' + 'pheight=((sample*3443)%100)*.005*sin(time*.45);\n' + 'xspout=if(below(abs(sin(time*.45)),.005),.3+(rand(40)*.01),xspout);\n' + 'yspout=if(below(abs(sin(time*.45)),.005),.3+(rand(40)*.01),yspout);\n' + 'px=xspout+(cos(time+pphase)*pheight);\n' + 'py=yspout+(sin(time+pphase)*pheight);\n' + 'x=px;\n' + 'y=py;\n' + 'a=abs(sin(time*.45)*.3+(bass_att*.1));'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.yheight = 0;
m.xoffset1 = 0;
m.pphase2 = 0;
m.xoffset2 = 0;
m.px = 0;
m.py = 0;
m.lrorient = 0;
m.pphase = 0;
m.pheight = 0;
m.yspout = 0;
m.xspout = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.xspout = 0.5;
m.yspout = -0.01;
m.pphase = (((1234*m.sample)*m.sample)*0.0001);
m.pphase2 = (0.1+(mod(((m.sample*6666)*m.sample),100)*0.01));
m.pheight = (mod((m.sample*5555),100)*0.001);
m.yheight = (mod(((m.sample*5511)*m.sample),100)*0.01);
m.r = ((mod((m.sample*2222),100)*0.01)*Math.abs(Math.sin((m.time*0.25))));
m.g = (mod((m.sample*642),100)*0.01);
m.xoffset1 = (Math.cos(((m.time*m.pphase2)+m.pphase))*m.pheight);
m.xoffset2 = (-1*(Math.cos(((m.time*m.pphase2)+m.pphase))*m.pheight));
m.lrorient = ifcond(below(Math.cos(((m.time*m.pphase2)+m.pphase)), Math.cos((((m.time-0.1)*m.pphase2)+m.pphase))), 0, 1);
m.px = ifcond(equal(m.lrorient, 0), ((m.xspout-m.pheight)+m.xoffset1), ((m.xspout+m.pheight)-m.xoffset2));
m.py = (m.yspout+(Math.abs(Math.sin(((m.time*m.pphase2)+m.pphase)))*m.yheight));
m.x = m.px;
m.y = m.py;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('xspout=.5;\n' + 'yspout=-.01;\n' + 'pphase=1234*sample*sample*.0001;\n' + 'pphase2=.1+((sample*6666*sample)%100)*.01;\n' + 'pheight=((sample*5555)%100)*.001;\n' + 'yheight=((sample*5511*sample)%100)*.01;\n' + 'r=((sample*2222)%100)*.01*abs(sin(time*.25));\n' + 'g=((sample*642)%100)*.01;\n' + 'xoffset1=(cos((time*pphase2)+pphase)*pheight);\n' + 'xoffset2=-1*(cos((time*pphase2)+pphase)*pheight);\n' + 'lrorient=if(below(cos((time*pphase2)+pphase),cos(((time-.1)*pphase2)+pphase)),0,1);\n' + 'px=if(equal(lrorient,0),xspout-pheight+xoffset1,xspout+pheight-xoffset2);\n' + 'py=yspout+(abs(sin((time*pphase2)+pphase))*yheight);\n' + 'x=px;\n' + 'y=py;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.05,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.55045,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.36457,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (rand(100)*0.01);
m.y = (rand(100)*0.01);
m.rad = (rand(100)*0.01);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=rand(100)*.01;\n' + 'y=rand(100)*.01;\n' + 'rad=rand(100)*.01;'),

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
	'warp' : (''),
	'comp' : ('shader_body {\n' + '   vec3 ret2_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (texsize.zw * 6.0);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12.x = dot (((\n' + '    (tmpvar_4.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_6.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_12.y = dot (((\n' + '    (tmpvar_8.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_10.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = (uv - (0.25 * tmpvar_12));\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur3, uv);\n' + '  ret_2 = (0.35 * ((tmpvar_14.xyz * scale3) + bias3));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur2, uv);\n' + '  ret_2 = (ret_2 - ((\n' + '    (tmpvar_15.xyz * scale2)\n' + '   + bias2) - 0.01));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur1, uv);\n' + '  ret_2 = (ret_2 + ((tmpvar_16.xyz + \n' + '    (((tmpvar_17.xyz * scale1) + bias1) * 0.15)\n' + '  ) - 0.01));\n' + '  ret_2 = (ret_2 + 0.75);\n' + '   float tmpvar_18;\n' + '  tmpvar_18 = dot (ret_2, vec3(0.32, 0.49, 0.29));\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur3, tmpvar_13);\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_blur1, tmpvar_13);\n' + '   vec3 tmpvar_21;\n' + '  tmpvar_21 = mix (vec3(tmpvar_18), (vec3(tmpvar_18) * dot (\n' + '    ((0.75 * ((tmpvar_19.xyz * scale3) + bias3)) - ((tmpvar_20.xyz * scale1) + bias1))\n' + '  , vec3(0.32, 0.49, 0.29))), pow (hue_shader, vec3(tmpvar_18)));\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur3, tmpvar_13);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_blur1, tmpvar_13);\n' + '  ret2_1 = ((-0.375 * (\n' + '    (tmpvar_22.xyz * scale3)\n' + '   + bias3)) + ((tmpvar_23.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_main, tmpvar_13);\n' + '  ret2_1 = (ret2_1 - tmpvar_24.xyz);\n' + '  ret2_1 = (ret2_1 - 0.75);\n' + '   float tmpvar_25;\n' + '  tmpvar_25 = dot (ret2_1, vec3(0.32, 0.49, 0.29));\n' + '   vec3 tmpvar_26;\n' + '  tmpvar_26 = mix (vec3(tmpvar_25), (vec3(tmpvar_25) * dot (\n' + '    ((0.75 * ((tmpvar_14.xyz * scale3) + bias3)) - ((tmpvar_17.xyz * scale1) + bias1))\n' + '  , vec3(0.32, 0.49, 0.29))), pow (hue_shader.zxy, tmpvar_21));\n' + '  ret2_1 = tmpvar_26;\n' + '   vec3 tmpvar_27;\n' + '  tmpvar_27 = abs((tmpvar_21 - (2.0 * tmpvar_26)));\n' + '  ret_2 = (tmpvar_27 - (0.135 * sqrt(tmpvar_27)));\n' + '  ret_2 = (ret_2 * ret_2);\n' + '   vec4 tmpvar_28;\n' + '  tmpvar_28.w = 1.0;\n' + '  tmpvar_28.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_28;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('zoom=1;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
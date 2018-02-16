define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.56,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 0.107,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.599,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 0.1584,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.51,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 0.362,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 2.0,
		wave_mystery : -0.5,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 2.0,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.d = 0;
m.dir = 0;
m.r = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;
m.y3 = 0;
m.cy1 = 0;
m.x3 = 0;
m.cx1 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.ib_r = ((Math.sin(((m.time*1.25)*4))*0.3)+0.7);
m.ib_g = ((Math.sin((m.time*4))*0.3)+0.3);
m.ib_b = ((Math.sin((div(m.time,3)*4))*0.5)+0.5);
m.wave_r = (1-m.ib_r);
m.wave_g = (1-m.ib_g);
m.wave_b = (1-m.ib_b);
m.wave_x = (0.5+(Math.sin((m.time*3))*0.3));
m.wave_y = (0.5+(Math.cos((m.time*2.187))*0.3));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.r = div(m.bass,4);
m.cx1 = (0.5+(Math.sin((m.time*0.618))*0.2));
m.cy1 = (0.5+(Math.cos((m.time*1.618))*0.2));
m.d = sqrt((((m.x-m.cx1)*(m.x-m.cx1))+((m.y-m.cy1)*(m.y-m.cy1))));
m.dir = ((m.bass*((m.r*m.r)-(m.d*m.d)))*0.3);
m.x1 = ifcond(above(m.d, m.r), 0, (Math.sin((m.y-m.cy1))*m.dir));
m.y1 = ifcond(above(m.d, m.r), 0, (-Math.sin((m.x-m.cx1))*m.dir));
m.cx1 = (0.5+(Math.sin((m.time*2.618))*0.3));
m.cy1 = (0.5+(Math.cos((m.time*3.14))*0.3));
m.d = sqrt((((m.x-m.cx1)*(m.x-m.cx1))+((m.y-m.cy1)*(m.y-m.cy1))));
m.dir = ((-m.mid*((m.r*m.r)-(m.d*m.d)))*0.3);
m.x2 = ifcond(above(m.d, m.r), 0, (Math.sin((m.y-m.cy1))*m.dir));
m.y2 = ifcond(above(m.d, m.r), 0, (-Math.sin((m.x-m.cx1))*m.dir));
m.cx1 = (0.5+(Math.sin((-m.time*2.618))*0.4));
m.cy1 = (0.5+(Math.cos((-m.time*1.14))*0.4));
m.d = sqrt((((m.x-m.cx1)*(m.x-m.cx1))+((m.y-m.cy1)*(m.y-m.cy1))));
m.dir = ((-m.treb*((m.r*m.r)-(m.d*m.d)))*0.3);
m.x3 = ifcond(above(m.d, m.r), 0, (Math.sin((m.y-m.cy1))*m.dir));
m.y3 = ifcond(above(m.d, m.r), 0, (-Math.sin((m.x-m.cx1))*m.dir));
m.dx = ((m.x1+m.x2)+m.x3);
m.dy = ((m.y1+m.y2)+m.y3);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.16188,
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
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 25.12601,
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
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.99996,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.50126,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(Math.sin((m.time*0.618))*0.2));
m.y = (0.5+(Math.cos((m.time*1.618))*0.2));
m.rad = (m.bass*0.05);
m.border_r = (1-((Math.sin((m.time*1.25))*0.3)+0.7));
m.border_g = (1-((Math.sin(m.time)*0.3)+0.3));
m.border_b = (1-((Math.sin(div(m.time,3))*0.5)+0.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5+sin(time*0.618)*0.2;\n' + 'y = 0.5+cos(time*1.618)*0.2;\n' + 'rad = bass*0.05;\n' + 'border_r = 1-(sin(time*1.25)*0.3+0.7);\n' + 'border_g = 1-(sin(time)*0.3+0.3);\n' + 'border_b = 1-(sin(time/3)*0.5+0.5);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.50126,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(Math.sin((m.time*2.618))*0.3));
m.y = (0.5+(Math.cos((m.time*3.14))*0.3));
m.rad = (m.bass*0.05);
m.border_r = (1-((Math.sin((m.time*1.25))*0.3)+0.7));
m.border_g = (1-((Math.sin(m.time)*0.3)+0.3));
m.border_b = (1-((Math.sin(div(m.time,3))*0.5)+0.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5+sin(time*2.618)*0.3;\n' + 'y = 0.5+cos(time*3.14)*0.3;\n' + 'rad = bass*0.05;\n' + 'border_r = 1-(sin(time*1.25)*0.3+0.7);\n' + 'border_g = 1-(sin(time)*0.3+0.3);\n' + 'border_b = 1-(sin(time/3)*0.5+0.5);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.9998,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.50126,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(Math.sin((-m.time*2.618))*0.4));
m.y = (0.5+(Math.cos((-m.time*1.14))*0.4));
m.rad = (m.bass*0.05);
m.border_r = (1-((Math.sin((m.time*1.25))*0.3)+0.7));
m.border_g = (1-((Math.sin(m.time)*0.3)+0.3));
m.border_b = (1-((Math.sin(div(m.time,3))*0.5)+0.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5+sin(-time*2.618)*0.4;\n' + 'y = 0.5+cos(-time*1.14)*0.4;\n' + 'rad = bass*0.05;\n' + 'border_r = 1-(sin(time*1.25)*0.3+0.7);\n' + 'border_g = 1-(sin(time)*0.3+0.3);\n' + 'border_b = 1-(sin(time/3)*0.5+0.5);'),

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
	'warp' : ('shader_body {\n' + '   vec3 blurry_color_1;\n' + '   vec2 uv2_2;\n' + '   vec3 ret_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = bass;\n' + '  tmpvar_4.y = treb;\n' + '   vec2 P_5;\n' + '  P_5 = (mix (uv, uv_orig, vec2(-1.0, -1.0)) + texsize.zw);\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, P_5).xyz;\n' + '  blurry_color_1 = tmpvar_6;\n' + '  uv2_2 = (uv + ((blurry_color_1.xy - 0.37) * (0.005 + \n' + '    (0.045 * clamp ((tmpvar_4 - 1.0), 0.0, 1.0))\n' + '  )));\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_main, uv2_2);\n' + '  ret_3 = tmpvar_7.xyz;\n' + '  ret_3 = (ret_3 - 0.001);\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec3 xlat_mutablenoise;\n' + 'highp vec3 xlat_mutableret1;\n' + 'highp vec2 xlat_mutablers;\n' + 'highp vec2 xlat_mutablers0;\n' + 'highp vec2 xlat_mutableuv3;\n' + 'shader_body {\n' + '   vec2 uv_1;\n' + '  uv_1.x = uv.x;\n' + '   float dy_2;\n' + '   float dx_3;\n' + '   float z_4;\n' + '  uv_1.y = (uv.y - 0.1);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = ((uv_1 - 0.5) * aspect.xy);\n' + '  z_4 = (1.0/(tmpvar_5.y));\n' + '  xlat_mutablers0.x = (tmpvar_5.x * z_4);\n' + '  xlat_mutablers0.y = z_4;\n' + '  xlat_mutablers.x = (xlat_mutablers0.x + (time / 2.0));\n' + '  xlat_mutablers.y = (z_4 + time);\n' + '   vec2 P_6;\n' + '  P_6 = (xlat_mutablers / 2.0);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = vec3(dot (texture2D (sampler_noise_hq, P_6), vec4(0.32, 0.49, 0.29, 0.0)));\n' + '  xlat_mutablenoise = tmpvar_7;\n' + '  xlat_mutablenoise = (xlat_mutablenoise - 0.55);\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = clamp ((12.0 * tmpvar_5.y), 0.0, 1.0);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = fract(((tmpvar_5 + 0.5) - (\n' + '    (xlat_mutablenoise * 0.1)\n' + '   * tmpvar_8).xy));\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10.y = 0.0;\n' + '  tmpvar_10.x = texsize.z;\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = 0.0;\n' + '  tmpvar_11.y = texsize.w;\n' + '   vec2 P_12;\n' + '  P_12 = (tmpvar_9 + tmpvar_10);\n' + '   vec2 P_13;\n' + '  P_13 = (tmpvar_9 - tmpvar_10);\n' + '   float tmpvar_14;\n' + '  tmpvar_14 = dot ((texture2D (sampler_main, P_12).xyz - texture2D (sampler_main, P_13).xyz), vec3(0.32, 0.49, 0.29));\n' + '  dx_3 = tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (tmpvar_9 + tmpvar_11);\n' + '   vec2 P_16;\n' + '  P_16 = (tmpvar_9 - tmpvar_11);\n' + '   float tmpvar_17;\n' + '  tmpvar_17 = dot ((texture2D (sampler_main, P_15).xyz - texture2D (sampler_main, P_16).xyz), vec3(0.32, 0.49, 0.29));\n' + '  dy_2 = tmpvar_17;\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18.x = dx_3;\n' + '  tmpvar_18.y = dy_2;\n' + '  xlat_mutableuv3 = (tmpvar_9 + (tmpvar_18 * (1.0 - tmpvar_8)));\n' + '   vec2 x_19;\n' + '  x_19 = ((tmpvar_5 + 0.45) + (tmpvar_18 * 24.0));\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = fract(xlat_mutableuv3);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_main, tmpvar_20);\n' + '  xlat_mutableret1 = tmpvar_21.xyz;\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22.w = 1.0;\n' + '  tmpvar_22.xyz = ((xlat_mutableret1 + (\n' + '    (vec3((0.02 / sqrt(dot (x_19, x_19)))) * (1.0 - tmpvar_8))\n' + '   * 2.0)) + clamp ((\n' + '    (_qf.y * clamp (((\n' + '      (0.01 * abs((xlat_mutableuv3.x - 0.5)))\n' + '     / \n' + '      abs((xlat_mutableuv3.y - 0.55))\n' + '    ) - (tmpvar_18 * 4.0)), 0.0, 1.0).x)\n' + '   * \n' + '    clamp ((1.0 - dot ((xlat_mutableret1 * 4.0), vec3(0.32, 0.49, 0.29))), 0.0, 1.0)\n' + '  ), 0.0, 1.0));\n' + '  vec4 ret4 = tmpvar_22;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('ib_r = sin(time*1.25*4)*0.3+0.7;\n' + 'ib_g = sin(time*4)*0.3+0.3;\n' + 'ib_b = sin(time/3*4)*0.5+0.5;\n' + 'wave_r = 1- ib_r;\n' + 'wave_g = 1- ib_g;\n' + 'wave_b = 1- ib_b;\n' + 'wave_x = 0.5+sin(time*3)*0.3;\n' + 'wave_y = 0.5+cos(time*2.187)*0.3;'),
	'pixel_eqs_str' : ('r = bass/4;\n' + 'cx1 = 0.5+sin(time*0.618)*0.2;\n' + 'cy1 = 0.5+cos(time*1.618)*0.2;\n' + 'd = sqrt((x-cx1)*(x-cx1)+(y-cy1)*(y-cy1));\n' + 'dir = (bass)*(r*r-d*d)*0.3;\n' + 'x1 = if( above(d,r),0,  sin(y-cy1)*dir);\n' + 'y1 = if( above(d,r),0, -sin(x-cx1)*dir);\n' + 'cx1 = 0.5+sin(time*2.618)*0.3;\n' + 'cy1 = 0.5+cos(time*3.14)*0.3;\n' + 'd = sqrt((x-cx1)*(x-cx1)+(y-cy1)*(y-cy1));\n' + 'dir = -(mid)*(r*r-d*d)*0.3;\n' + 'x2 = if( above(d,r),0,  sin(y-cy1)*dir);\n' + 'y2 = if( above(d,r),0, -sin(x-cx1)*dir);\n' + 'cx1 = 0.5+sin(-time*2.618)*0.4;\n' + 'cy1 = 0.5+cos(-time*1.14)*0.4;\n' + 'd = sqrt((x-cx1)*(x-cx1)+(y-cy1)*(y-cy1));\n' + 'dir = -(treb)*(r*r-d*d)*0.3;\n' + 'x3 = if( above(d,r),0,  sin(y-cy1)*dir);\n' + 'y3 = if( above(d,r),0, -sin(x-cx1)*dir);\n' + 'dx = x1+x2+x3;\n' + 'dy = y1+y2+y3;'),
};

return pmap;
});
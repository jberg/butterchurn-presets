define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.7,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.2,
		echo_alpha : 0.35,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 0.5,
		echo_zoom : 0.335,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.32,
		wave_mystery : 0.14,
		decay : 0.995,
		wave_a : 0.195,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.0,
		mv_r : 0.5,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.47,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.dx_r = 0;
m.dy_r = 0;
m.thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (0.5+(0.5*Math.sin((6*m.time))));
m.wave_g = (0.5+(0.5*Math.sin((4.1*m.time))));
m.wave_b = (-1+(((1-m.wave_r)+1)-m.wave_g));
m.warp = 0;
m.wave_mystery = (m.wave_mystery+(above(Math.sin((100*m.time)), 0.5)*Math.abs(Math.tan((25*m.time)))));
		m.rkeys = ['zoom','dx','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.dx = (m.dx+Math.abs((0.025*Math.cos((1-Math.abs((0.5*Math.tan(((12*m.dx_r)*m.time)))))))));
m.zoom = (m.zoom+((0.05*Math.sin((1-(Math.abs(((1.5*m.dx_r)*m.rad))*m.time))))*Math.cos((4*m.time))));
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
			additive : 1.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.myfreq = 0;
m.freqlvl = 0;
m.myaltfreq = 0;
m.myamp = 0;
m.pi = 0;
m.pi23 = 0;
m.fade = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.freqlvl = (div((-10.4*pow(m.value1, 1.81)),pow(m.value1, 1.8))+10.2);
m.myamp = ifcond(below(m.freqlvl, 0.5), m.freqlvl, 0.49);
m.myfreq = ((log10((log10(m.sample)+3))*1.05)+0.37);
m.myaltfreq = (((m.time*0.2)+(m.myfreq*04))-0.8);
m.pi = 3.14159265359;
m.pi23 = ((2*m.pi)*0.33333333333);
m.fade = ((m.value1*15)*(1.1-m.myfreq));
m.r = (((Math.sin(m.myaltfreq)+1)*0.5)*m.fade);
m.g = (((Math.sin((m.myaltfreq-(1*m.pi23)))+1)*0.5)*m.fade);
m.b = (((Math.sin((m.myaltfreq-(2*m.pi23)))+1)*0.5)*m.fade);
m.x = m.myamp;
m.y = m.myfreq;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('freqLvl    = -10.4*pow(value1,1.81)/pow(value1,1.8)+10.2;\n' + 'myAmp      = if(below(freqLvl,0.5),freqLvl,0.49);\n' + 'myFreq     = log10(log10(sample)+3)*1.05+0.37;\n' + 'myAltFreq  = time*0.2+myFreq*04-0.8;\n' + 'Pi         = 3.14159265359;\n' + 'Pi23       = 2*Pi*0.33333333333;\n' + 'fade       = value1*15*(1.1-myFreq);\n' + 'r         = (sin(myAltFreq       )+1)*0.5*fade;\n' + 'g         = (sin(myAltFreq-1*Pi23)+1)*0.5*fade;\n' + 'b         = (sin(myAltFreq-2*Pi23)+1)*0.5*fade;\n' + 'x         = myAmp;\n' + 'y         = myFreq;'),

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
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.myfreq = 0;
m.freqlvl = 0;
m.myaltfreq = 0;
m.myamp = 0;
m.pi = 0;
m.pi23 = 0;
m.fade = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.freqlvl = (div((10.4*pow(m.value2, 1.01)),m.value2)-9.2);
m.myamp = ifcond(above(m.freqlvl, 0.5), m.freqlvl, 0.51);
m.myfreq = ((log10((log10(m.sample)+3))*1.05)+0.37);
m.myaltfreq = (((m.time*0.2)+(m.myfreq*04))-0.8);
m.pi = 3.14159265358;
m.pi23 = ((2*m.pi)*0.33333333333);
m.fade = ((m.value2*15)*(1.1-m.myfreq));
m.r = (((Math.sin(m.myaltfreq)+1)*0.5)*m.fade);
m.g = (((Math.sin((m.myaltfreq-(1*m.pi23)))+1)*0.5)*m.fade);
m.b = (((Math.sin((m.myaltfreq-(2*m.pi23)))+1)*0.5)*m.fade);
m.x = m.myamp;
m.y = m.myfreq;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('freqLvl   = 10.4*pow(value2,1.01)/value2-9.2;\n' + 'myAmp     = if(above(freqLvl,0.5),freqLvl,0.51);\n' + 'myFreq    = log10(log10(sample)+3)*1.05+0.37;\n' + 'myAltFreq = time*0.2+myFreq*04-0.8;\n' + 'Pi        = 3.14159265358;\n' + 'Pi23      = 2*Pi*0.33333333333;\n' + 'fade      = value2*15*(1.1-myFreq);\n' + 'r         = (sin(myAltFreq       )+1)*0.5*fade;\n' + 'g         = (sin(myAltFreq-1*Pi23)+1)*0.5*fade;\n' + 'b         = (sin(myAltFreq-2*Pi23)+1)*0.5*fade;\n' + 'x         = myAmp;\n' + 'y         = myFreq;'),

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
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.myfreq = 0;
m.freqlvl = 0;
m.myaltfreq = 0;
m.pi = 0;
m.pi23 = 0;
m.fade = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.freqlvl = (div((-10.4*pow(m.value1, 1.81)),pow(m.value1, 1.8))+10.2);
m.myfreq = ((log10((log10(m.sample)+3))*1.05)+0.37);
m.myaltfreq = (((m.time*0.2)+(m.myfreq*04))-0.8);
m.pi = 3.14159265358;
m.pi23 = ((2*m.pi)*0.33333333333);
m.fade = ((m.value1*15)*(1.1-m.myfreq));
m.r = (((Math.sin(m.myaltfreq)+1)*0.5)*m.fade);
m.g = (((Math.sin((m.myaltfreq-(1*m.pi23)))+1)*0.5)*m.fade);
m.b = (((Math.sin((m.myaltfreq-(2*m.pi23)))+1)*0.5)*m.fade);
m.x = (div((10.4*pow(m.value1, 1.81)),pow(m.value1, 1.8))-9.7);
m.y = m.myfreq;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('freqLvl   = -10.4*pow(value1,1.81)/pow(value1,1.8)+10.2;\n' + 'myFreq    = log10(log10(sample)+3)*1.05+0.37;\n' + 'myAltFreq = time*0.2+myFreq*04-0.8;\n' + 'Pi        = 3.14159265358;\n' + 'Pi23      = 2*Pi*0.33333333333;\n' + 'fade      = value1*15*(1.1-myFreq);\n' + 'r         = (sin(myAltFreq       )+1)*0.5*fade;\n' + 'g         = (sin(myAltFreq-1*Pi23)+1)*0.5*fade;\n' + 'b         = (sin(myAltFreq-2*Pi23)+1)*0.5*fade;\n' + 'x         = 10.4*pow(value1,1.81)/pow(value1,1.8)-9.7;\n' + 'y         = myFreq;'),

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
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.myfreq = 0;
m.freqlvl = 0;
m.myaltfreq = 0;
m.pi = 0;
m.pi23 = 0;
m.fade = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.freqlvl = (div((10.4*pow(m.value1, 1.81)),pow(m.value2, 1.8))-9.2);
m.myfreq = ((log10((log10(m.sample)+3))*1.05)+0.37);
m.myaltfreq = (((m.time*0.2)+(m.myfreq*04))-0.8);
m.pi = 3.14159265358;
m.pi23 = ((2*m.pi)*0.33333333333);
m.fade = ((m.value2*15)*(1.1-m.myfreq));
m.r = (((Math.sin(m.myaltfreq)+1)*0.5)*m.fade);
m.g = (((Math.sin((m.myaltfreq-(1*m.pi23)))+1)*0.5)*m.fade);
m.b = (((Math.sin((m.myaltfreq-(2*m.pi23)))+1)*0.5)*m.fade);
m.x = (div((-10.4*pow(m.value2, 1.81)),pow(m.value2, 1.8))+10.7);
m.y = m.myfreq;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('freqLvl   = 10.4*pow(value1,1.81)/pow(value2,1.8)-9.2;\n' + 'myFreq    = log10(log10(sample)+3)*1.05+0.37;\n' + 'myAltFreq = time*0.2+myFreq*04-0.8;\n' + 'Pi        = 3.14159265358;\n' + 'Pi23      = 2*Pi*0.33333333333;\n' + 'fade      = value2*15*(1.1-myFreq);\n' + 'r         = (sin(myAltFreq       )+1)*0.5*fade;\n' + 'g         = (sin(myAltFreq-1*Pi23)+1)*0.5*fade;\n' + 'b         = (sin(myAltFreq-2*Pi23)+1)*0.5*fade;\n' + 'x         = -10.4*pow(value2,1.81)/pow(value2,1.8)+10.7;\n' + 'y         = myFreq;'),

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
	'warp' : ('highp vec3 xlat_mutablemus;\n' + 'shader_body {\n' + '   vec3 crisp2_1;\n' + '   vec3 crisp_2;\n' + '   float dy_3;\n' + '   float dx_4;\n' + '   vec2 uv6_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (uv - 0.5);\n' + '   vec2 P_7;\n' + '  P_7 = (uv / 4.0);\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = dot (texture2D (sampler_noise_hq, P_7), vec4(0.32, 0.49, 0.29, 0.0));\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = (tmpvar_8 * _qh.z);\n' + '   mat2 tmpvar_10;\n' + '  tmpvar_10[0].x = cos(tmpvar_9);\n' + '  tmpvar_10[0].y = sin(tmpvar_9);\n' + '  tmpvar_10[1].x = -(sin(tmpvar_9));\n' + '  tmpvar_10[1].y = cos(tmpvar_9);\n' + '  uv6_5 = (tmpvar_6 * tmpvar_10);\n' + '  uv6_5 = (uv6_5 + sin((_qh.w * tmpvar_6)));\n' + '  xlat_mutablemus = (vec3((0.2 / (\n' + '    sqrt(uv6_5.x)\n' + '   + 0.2))) * vec3(1.1, 1.0, 0.95));\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = (0.9 + (0.1 * texture2D (sampler_noise_hq, uv))).xyz;\n' + '  xlat_mutablemus = (xlat_mutablemus * tmpvar_11);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = fract(uv);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_blur1, tmpvar_12);\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = ((tmpvar_13.xyz * scale1) + bias1);\n' + '   vec2 P_15;\n' + '  P_15 = (uv + vec2(0.005, 0.0));\n' + '   vec2 P_16;\n' + '  P_16 = (uv - vec2(0.005, 0.0));\n' + '   float tmpvar_17;\n' + '  tmpvar_17 = dot ((texture2D (sampler_main, P_15) - texture2D (sampler_main, P_16)), vec4(0.32, 0.49, 0.29, 0.0));\n' + '  dx_4 = tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv + vec2(0.0, 0.005));\n' + '   vec2 P_19;\n' + '  P_19 = (uv - vec2(0.0, 0.005));\n' + '   float tmpvar_20;\n' + '  tmpvar_20 = dot ((texture2D (sampler_main, P_18) - texture2D (sampler_main, P_19)), vec4(0.32, 0.49, 0.29, 0.0));\n' + '  dy_3 = tmpvar_20;\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21.x = dx_4;\n' + '  tmpvar_21.y = dy_3;\n' + '   vec2 P_22;\n' + '  P_22 = (uv + (tmpvar_21 * 0.02));\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_main, P_22).xyz;\n' + '  crisp_2 = tmpvar_23;\n' + '   vec3 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_main, uv).xyz;\n' + '  crisp2_1 = tmpvar_24;\n' + '  crisp_2 = (crisp_2 + (crisp2_1 / 2.0));\n' + '  crisp_2 = (crisp_2 * 0.67);\n' + '  crisp_2 = (crisp_2 + ((0.08 * xlat_mutablemus) - (\n' + '    sqrt(dot (tmpvar_21, tmpvar_21))\n' + '   * tmpvar_14)));\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25.w = 1.0;\n' + '  tmpvar_25.xyz = (((crisp_2 - \n' + '    (dot (tmpvar_14, vec3(0.32, 0.49, 0.29)) * 0.04)\n' + '  ) * 0.99) - 0.04);\n' + '  vec4 ret4 = tmpvar_25;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur2, uv);\n' + '  ret_1 = (ret_1 + (clamp (\n' + '    ((((tmpvar_3.xyz * scale2) + bias2) * 2.8) - 0.13)\n' + '  , 0.0, 1.0) * vec3(1.4, 0.3, 1.3)));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = 0.5 + 0.5*sin(6*time);\n' + 'wave_g = 0.5 + 0.5*sin(4.1*time);\n' + 'wave_b = -1 + (1-wave_r + 1-wave_g);\n' + 'warp = 0;\n' + 'wave_mystery = wave_mystery + above(sin(100*time),0.5)*abs(tan(25*time));'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'dx = dx + abs(0.025*cos(1-abs(0.5*tan(12*dx_r*time))));\n' + 'zoom = zoom + 0.05*sin(1-abs(1.5*dx_r*rad)*time)*cos(4*time);'),
};

return pmap;
});
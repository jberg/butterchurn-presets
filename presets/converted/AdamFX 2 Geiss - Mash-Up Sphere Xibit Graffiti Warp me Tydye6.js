define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 6.4,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.535,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.47402,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.5,
		mv_dy : 0.5,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.522,
		echo_zoom : 1.169,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.872,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.04,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.03,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.1,
		wave_mystery : -0.48,
		decay : 0.98,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.014,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {


		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.700*((0.20*Math.sin((0.933*m.time)))+(0.30*Math.sin((1.045*m.time))))));
m.wave_g = (m.wave_g+(0.700*((0.20*Math.sin((0.900*m.time)))+(0.30*Math.sin((0.956*m.time))))));
m.wave_b = (m.wave_b+(0.200*((0.20*Math.sin((0.910*m.time)))+(0.30*Math.sin((0.920*m.time))))));
m.zoom = (m.zoom+(0.02*Math.cos(((m.time*1.713)+2))));
m.zoom = (m.zoom+(0.02*Math.cos(((m.time*2.319)+4))));
m.zoom = (m.zoom+(0.02*Math.cos(((m.time*1.522)+1))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = (0.002*Math.cos((m.ang+1.57)));
m.dy = (-0.002*Math.sin((m.ang+1.57)));
		return m;
	},
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
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.94204,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.7463,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.val = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = ((Math.sin(m.time)*0.5)+0.5);
m.val = 3;
m.a2 = (m.val*0.33);
m.a = (m.val*0.33);
m.rad = ((Math.cos((m.time*0.3))*0.4)+0.65);
m.x = ((Math.sin((m.time*0.25))*0.25)+0.5);
m.y = ((Math.cos((m.time*0.45))*0.25)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=sin(time)*.5+.5;\n' + 'val=3;\n' + 'a2=val*.33;\n' + 'a=val*.33;\n' + 'rad=cos(time*.3)*.4+0.65;\n' + 'x=sin(time*.25)*.25+.5;\n' + 'y=cos(time*.45)*.25+.5;'),

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
			tex_zoom : 0.94204,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.7463,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.val = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = ((Math.cos((m.time*0.3))*0.5)+0.5);
m.val = 3;
m.a2 = (m.val*0.33);
m.a = (m.val*0.33);
m.rad = ((Math.sin((m.time*0.3))*0.4)+0.65);
m.x = ((Math.cos((m.time*0.25))*0.25)+0.5);
m.y = ((Math.sin((m.time*0.45))*0.25)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=cos(time*.3)*.5+.5;\n' + 'val=3;\n' + 'a2=val*.33;\n' + 'a=val*.33;\n' + 'rad=sin(time*.3)*.4+0.65;\n' + 'x=cos(time*.25)*.25+.5;\n' + 'y=sin(time*.45)*.25+.5;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.36456,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.dist = 0;
m.maat = 0;
m.h2 = 0;
m.vb = 0;
m.vg = 0;
m.vr = 0;

			m.rkeys = ['maat','h2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.h2 = (m.h2+((above(m.treb, 1.32)*0.8)*0.9));
m.vr = ((Math.sin((m.h2*0.8))*0.5)+0.5);
m.vg = ((Math.sin((m.h2*0.5))*0.5)+0.5);
m.vb = ((Math.sin((m.h2*0.1))*0.5)+0.5);
m.g = m.vg;
m.r = m.vr;
m.b = m.vb;
m.g2 = m.g;
m.r2 = m.r;
m.b2 = m.b;
m.dist = (mod(m.frame,100)*0.01);
m.maat = (m.maat+above(m.bass_att, 1.5));
m.maat = (below(m.maat, 16)*m.maat);
m.x = ifcond(below(m.maat, 8), ifcond(below(m.maat, 4), m.dist, (1-m.dist)), m.x);
m.y = ifcond(above(m.maat, 8), ifcond(above(m.maat, 4), m.dist, (1-m.dist)), m.y);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('h2=h2+(above(treb,1.32)*0.8)*.9;\n' + 'vr=sin(h2*.8)*.5+.5;\n' + 'vg=sin(h2*.5)*.5+.5;\n' + 'vb=sin(h2*.1)*.5+.5;\n' + 'g=vg;\n' + 'r=vr;\n' + 'b=vb;\n' + 'g2=g;\n' + 'r2=r;\n' + 'b2=b;\n' + 'dist=(frame%100)*.01;\n' + 'maat=maat+(above(bass_att,1.5));\n' + 'maat=below(maat,16)*maat;\n' + 'x=if(below(maat,8),if(below(maat,4),dist,1-dist),x);\n' + 'y=if(above(maat,8),if(above(maat,4),dist,1-dist),y);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.36456,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.dist = 0;
m.maat = 0;
m.h2 = 0;
m.vb = 0;
m.vg = 0;
m.vr = 0;

			m.rkeys = ['maat','h2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.h2 = (m.h2+((above(m.treb, 1.32)*0.8)*0.9));
m.vr = ((Math.sin((m.h2*0.8))*0.5)+0.5);
m.vg = ((Math.sin((m.h2*0.5))*0.5)+0.5);
m.vb = ((Math.sin((m.h2*0.1))*0.5)+0.5);
m.g = m.vg;
m.r = m.vr;
m.b = m.vb;
m.g2 = m.g;
m.r2 = m.r;
m.b2 = m.b;
m.dist = (mod(m.frame,100)*0.01);
m.maat = (m.maat+above(m.bass_att, 1.5));
m.maat = (below(m.maat, 16)*m.maat);
m.y = ifcond(below(m.maat, 8), ifcond(below(m.maat, 4), m.dist, (1-m.dist)), m.y);
m.x = ifcond(above(m.maat, 8), ifcond(above(m.maat, 4), m.dist, (1-m.dist)), m.x);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('h2=h2+(above(treb,1.32)*0.8)*.9;\n' + 'vr=sin(h2*.8)*.5+.5;\n' + 'vg=sin(h2*.5)*.5+.5;\n' + 'vb=sin(h2*.1)*.5+.5;\n' + 'g=vg;\n' + 'r=vr;\n' + 'b=vb;\n' + 'g2=g;\n' + 'r2=r;\n' + 'b2=b;\n' + 'dist=(frame%100)*.01;\n' + 'maat=maat+(above(bass_att,1.5));\n' + 'maat=below(maat,16)*maat;\n' + 'y=if(below(maat,8),if(below(maat,4),dist,1-dist),y);\n' + 'x=if(above(maat,8),if(above(maat,4),dist,1-dist),x);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 my_uv_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + vec2(0.005, 0.0));\n' + '  tmpvar_3 = texture2D (sampler_blur2, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - vec2(0.005, 0.0));\n' + '  tmpvar_5 = texture2D (sampler_blur2, P_6);\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale2) + bias2) - ((tmpvar_5.xyz * scale2) + bias2)).y;\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + vec2(0.0, 0.005));\n' + '  tmpvar_8 = texture2D (sampler_blur2, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - vec2(0.0, 0.005));\n' + '  tmpvar_10 = texture2D (sampler_blur2, P_11);\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale2) + bias2) - ((tmpvar_10.xyz * scale2) + bias2)).y;\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = tmpvar_7;\n' + '  tmpvar_13.y = tmpvar_12;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = (uv - (tmpvar_13 * 0.01));\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (tmpvar_14 - floor(tmpvar_14));\n' + '  tmpvar_15 = texture2D (sampler_fc_main, P_16);\n' + '  ret_2.y = tmpvar_15.y;\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (tmpvar_14 - floor(tmpvar_14));\n' + '  tmpvar_17 = texture2D (sampler_blur3, P_18);\n' + '  ret_2.y = (ret_2.y + ((ret_2.y - \n' + '    ((tmpvar_17.xyz * scale3) + bias3)\n' + '  .y) * 0.1));\n' + '   vec4 tmpvar_19;\n' + '   vec2 P_20;\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21 = floor(uv);\n' + '  P_20 = (uv - tmpvar_21);\n' + '  tmpvar_19 = texture2D (sampler_blur3, P_20);\n' + '  ret_2.y = (ret_2.y + (0.006 - (\n' + '    ((tmpvar_19.xyz * scale3) + bias3)\n' + '  .x * 5.0)));\n' + '  ret_2.y = ret_2.y;\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22.x = -(tmpvar_12);\n' + '  tmpvar_22.y = tmpvar_7;\n' + '  my_uv_1 = (tmpvar_22 * 0.05);\n' + '   vec4 tmpvar_23;\n' + '   vec2 P_24;\n' + '  P_24 = (uv + vec2(0.01, 0.0));\n' + '  tmpvar_23 = texture2D (sampler_blur2, P_24);\n' + '   vec4 tmpvar_25;\n' + '   vec2 P_26;\n' + '  P_26 = (uv - vec2(0.01, 0.0));\n' + '  tmpvar_25 = texture2D (sampler_blur2, P_26);\n' + '   vec4 tmpvar_27;\n' + '   vec2 P_28;\n' + '  P_28 = (uv + vec2(0.0, 0.01));\n' + '  tmpvar_27 = texture2D (sampler_blur2, P_28);\n' + '   vec4 tmpvar_29;\n' + '   vec2 P_30;\n' + '  P_30 = (uv - vec2(0.0, 0.01));\n' + '  tmpvar_29 = texture2D (sampler_blur2, P_30);\n' + '   vec2 tmpvar_31;\n' + '  tmpvar_31.x = (((tmpvar_23.xyz * scale2) + bias2) - ((tmpvar_25.xyz * scale2) + bias2)).z;\n' + '  tmpvar_31.y = (((tmpvar_27.xyz * scale2) + bias2) - ((tmpvar_29.xyz * scale2) + bias2)).z;\n' + '  my_uv_1 = (my_uv_1 + (uv - (tmpvar_31 * 0.005)));\n' + '   vec4 tmpvar_32;\n' + '   vec2 P_33;\n' + '  P_33 = (my_uv_1 - floor(my_uv_1));\n' + '  tmpvar_32 = texture2D (sampler_fw_main, P_33);\n' + '  ret_2.z = tmpvar_32.z;\n' + '   vec4 tmpvar_34;\n' + '   vec2 P_35;\n' + '  P_35 = (my_uv_1 - floor(my_uv_1));\n' + '  tmpvar_34 = texture2D (sampler_blur3, P_35);\n' + '  ret_2.z = (ret_2.z + ((ret_2.z - \n' + '    ((tmpvar_34.xyz * scale3) + bias3)\n' + '  .z) * 0.13));\n' + '  ret_2.z = (ret_2.z * 0.95);\n' + '   vec4 tmpvar_36;\n' + '   vec2 P_37;\n' + '  P_37 = (uv - tmpvar_21);\n' + '  tmpvar_36 = texture2D (sampler_blur3, P_37);\n' + '   vec4 tmpvar_38;\n' + '   vec2 P_39;\n' + '  P_39 = (my_uv_1 - floor(my_uv_1));\n' + '  tmpvar_38 = texture2D (sampler_main, P_39);\n' + '  ret_2.z = (ret_2.z + ((0.03 - \n' + '    ((tmpvar_36.xyz * scale3) + bias3)\n' + '  .x) - (tmpvar_38.y * 0.05)));\n' + '   vec4 tmpvar_40;\n' + '  tmpvar_40 = texture2D (sampler_main, uv_orig);\n' + '  ret_2.x = (tmpvar_40.x - 0.3);\n' + '   vec4 tmpvar_41;\n' + '  tmpvar_41.w = 1.0;\n' + '  tmpvar_41.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_41;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   float ang2_1;\n' + '   vec2 uv2_2;\n' + '   vec3 ret_3;\n' + '  ang2_1 = ((ang * 0.1591549) + (time * 0.025));\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = (3.0 + floor((rand_preset.z * 5.95)));\n' + '  ang2_1 = (fract((ang2_1 * tmpvar_4)) / tmpvar_4);\n' + '  ang2_1 = (abs((ang2_1 - \n' + '    (0.5 / tmpvar_4)\n' + '  )) * 6.283185);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = cos(ang2_1);\n' + '  tmpvar_5.y = sin(ang2_1);\n' + '  uv2_2 = (0.5 + ((\n' + '    (0.4 * (rad * sqrt(dot (texsize.xy, texsize.xy))))\n' + '   * tmpvar_5) * texsize.zw));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv2_2);\n' + '  ret_3 = tmpvar_6.xyz;\n' + '  ret_3 = (ret_3 * 1.333);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.700*( 0.20*sin(0.933*time) + 0.30*sin(1.045*time) );\n' + 'wave_g = wave_g + 0.700*( 0.20*sin(0.900*time) + 0.30*sin(0.956*time) );\n' + 'wave_b = wave_b + 0.200*( 0.20*sin(0.910*time) + 0.30*sin(0.920*time) );\n' + 'zoom = zoom + 0.02*cos(time*1.713+2);\n' + 'zoom = zoom + 0.02*cos(time*2.319+4);\n' + 'zoom = zoom + 0.02*cos(time*1.522+1);'),
	'pixel_eqs_str' : ('dx= 0.002*cos(ang+1.57);\n' + 'dy=-0.002*sin(ang+1.57);'),
};

return pmap;
});
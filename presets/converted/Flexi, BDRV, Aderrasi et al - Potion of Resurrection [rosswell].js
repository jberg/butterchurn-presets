define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 6.4,
		warpscale : 1.766,
		brighten : 0.0,
		mv_y : 4.8,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.005,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.00016,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.6,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : 1.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.1,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.5,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.tt = 0;
m.mn = 0;
m.six = 0;
m.q3 = 0;
m.q4 = 0;
m.q7 = 0;
m.mt = 0;
m.q8 = 0;
m.dx_r = 0;
m.dy_r = 0;
m.h1 = 0;
m.h2 = 0;
m.bm = 0;
m.h3 = 0;
m.mx = 0;
m.q10 = 0;
m.q11 = 0;
m.bt = 0;
m.q12 = 0;
m.v = 0;
m.w = 0;
m.thresh = 0;
m.q11 = div(0.5,Math.asin(1));
		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = ((m.wave_r+(0.35*Math.sin((1.14*m.time))))+(0.16*Math.sin((1.5*m.time))));
m.wave_g = ((m.wave_g+(0.36*Math.sin((1.27*m.time))))+(0.15*Math.sin((1.11*m.time))));
m.wave_b = ((m.wave_b+(0.37*Math.sin((1.284*m.time))))+(0.15*Math.sin((1.3*m.time))));
m.warp = 0;
m.ob_r = m.wave_g;
m.ob_b = m.wave_r;
m.ob_g = m.wave_b;
m.ib_r = m.wave_r;
m.ib_b = m.wave_g;
m.ib_g = m.wave_r;
m.bb = ((m.bb*0.98)+(m.bass*0.5));
m.mm = ((m.mm*0.98)+(m.mid*0.5));
m.tt = ((m.tt*0.98)+(m.treb*0.5));
m.mx = Math.max(Math.max(m.bb, m.mm), m.tt);
m.mn = Math.min(Math.min(m.bb, m.mm), m.tt);
m.h1 = div((m.bb-m.mn),(m.mx-m.mn));
m.h2 = div((m.mm-m.mn),(m.mx-m.mn));
m.h3 = div((m.tt-m.mn),(m.mx-m.mn));
m.v = div(0.2,m.fps);
m.bm = (m.bm+((m.h1-m.h2)*m.v));
m.mt = (m.mt+((m.h2-m.h3)*m.v));
m.bt = (m.bt+((m.h1-m.h3)*m.v));
m.w = m.bm;
m.q3 = Math.sin(m.w);
m.q4 = Math.cos(m.w);
m.q10 = m.bm;
m.q11 = m.mt;
m.q12 = m.bt;
		m.rkeys = ['sx','sy','dx_r','dy_r','zoom','dx','dy','rot','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.15)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.165)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.six = Math.sin(m.x);
m.dx = (m.dx+((0.01*Math.sin(Math.abs((12*m.y))))*Math.sin(m.time)));
m.dy = (m.dy+((0.01*Math.sin(Math.abs((12*m.x))))*Math.cos(m.time)));
m.zoom = (m.zoom+(0.0095*((Math.sin((8+((4*Math.sin((0.2*m.time)))*m.ang)))+(Math.sin(Math.sin((((m.time*2)*Math.sin(m.time))*m.rad)))*0.3))-(Math.cos(m.rad)*0.1))));
m.rot = (m.rot+((0.08*Math.abs((0.746-m.rad)))*Math.sin(((2.2*(0.5-m.rad))+(5.7*Math.sin((0.1*m.time)))))));
m.sx = (m.sx+(((0.01*((0.99*1)-m.rad))*Math.sin((0.733*m.time)))*below(Math.sin(m.time), 0)));
m.sy = (m.sy+(((0.01*((0.99*1)-m.rad))*Math.cos((0.953*m.time)))*above(Math.sin(m.time), 0)));
m.zoom = (m.zoom-((0.015*((0.5*Math.abs(3))-m.rad))*below(m.rad, 1.5)));
m.dx = ifcond(above(m.y, 0.93), 0.01, ifcond(below(m.y, 0.01), ifcond(below(m.x, 0.3), ifcond(below(m.y, 0.5), 0, -0.01), -0.01), 0));
m.dy = ifcond(below(m.x, 0.05), 0.01, ifcond(above(m.x, (0.94-m.q7)), -0.01, 0));
m.zoom = ifcond(above(m.x, 0.09), ifcond(below(m.x, 0.85), ifcond(above(m.y, 0.09), ifcond(below(m.y, 0.85), 0.95, 1), 1), 1), 1);
m.dy = ifcond(below(m.y, 0.5), ifcond(below(m.x, 0.3), 0.01, m.dy), m.dy);
m.rot = ifcond(above(m.x, 0.09), ifcond(below(m.x, 0.85), ifcond(above(m.y, 0.09), ifcond(below(m.y, 0.85), (0.1*Math.sin(((Math.sin(((m.ang*0.1)*m.ang))+(m.rad*6))+(m.q8*0.444)))), 0), 0), 0), 0);
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
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.ma = 0;

			m.rkeys = ['my','mx','ma'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ma = (m.ma+(((above(m.bass, 0.5)*3.1415)*0.02)*m.bass));
m.ma = (m.ma-(((above(m.treb, 0.5)*3.1415)*0.02)*m.treb));
m.mx = (m.mx+(0.0008*Math.cos(m.ma)));
m.my = (m.my+(0.0008*Math.sin(m.ma)));
m.mx = ifcond(above(m.mx, 0.9), (0.9-m.mx), m.mx);
m.my = ifcond(above(m.my, 0.9), (0.9-m.my), m.my);
m.mx = ifcond(below(m.mx, 0.1), (0.9+m.mx), m.mx);
m.my = ifcond(below(m.my, 0.1), (0.9+m.my), m.my);
m.x = m.mx;
m.y = m.my;
m.a = above(((m.bass+m.mid)+m.treb), 0.2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ma=ma+(above(bass,.5)*3.1415*.02*bass);\n' + 'ma=ma-(above(treb,.5)*3.1415*.02*treb);\n' + 'mx=mx+(.0008*cos(ma));\n' + 'my=my+(.0008*sin(ma));\n' + 'mx=if(above(mx,.9),(.9-mx),mx);\n' + 'my=if(above(my,.9),(.9-my),my);\n' + 'mx=if(below(mx,.1),(.9+mx),mx);\n' + 'my=if(below(my,.1),(.9+my),my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=(above(bass+mid+treb,.2));'),

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
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.15774,
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
m.ang = 1.571;
m.x = (Math.floor(rand(11))*0.1);
m.y = (Math.floor(rand(11))*0.13);
m.r = (Math.floor(rand(100))*0.01);
m.g = (Math.floor(rand(100))*0.01);
m.b = (Math.floor(rand(100))*0.01);
m.r2 = (Math.floor(rand(100))*0.01);
m.g2 = (Math.floor(rand(100))*0.01);
m.b2 = (Math.floor(rand(100))*0.01);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang = 1.571;\n' + 'x = int(rand(11))*.1;\n' + 'y = int(rand(11))*.13;\n' + 'r = int(rand(100))*.01;\n' + 'g = int(rand(100))*.01;\n' + 'b = int(rand(100))*.01;\n' + 'r2 = int(rand(100))*.01;\n' + 'g2 = int(rand(100))*.01;\n' + 'b2 = int(rand(100))*.01;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
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
			y : 1.8,
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
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
			y : 1.8,
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
	'warp' : ('shader_body {\n' + '   vec2 my_uv2_1;\n' + '   vec2 dz_2;\n' + '   vec3 ret_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv + (vec2(1.0, 0.0) * tmpvar_4));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv - (vec2(1.0, 0.0) * tmpvar_4));\n' + '  tmpvar_7 = texture2D (sampler_blur1, P_8);\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = ((2.0 * (\n' + '    (tmpvar_5.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_7.xyz * scale1)\n' + '   + bias1)));\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv + (vec2(0.0, 1.0) * tmpvar_4));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (uv - (vec2(0.0, 1.0) * tmpvar_4));\n' + '  tmpvar_12 = texture2D (sampler_blur1, P_13);\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = ((2.0 * (\n' + '    (tmpvar_10.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_12.xyz * scale1)\n' + '   + bias1)));\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15.x = tmpvar_9.x;\n' + '  tmpvar_15.y = tmpvar_14.x;\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = (tmpvar_15 * texsize.zw);\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv - tmpvar_16);\n' + '  tmpvar_17 = texture2D (sampler_fw_main, P_18);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur3, uv);\n' + '   vec4 tmpvar_20;\n' + '   vec2 P_21;\n' + '  P_21 = (uv + tmpvar_16);\n' + '  tmpvar_20 = texture2D (sampler_blur1, P_21);\n' + '  ret_3.x = (tmpvar_17.x - ((\n' + '    (tmpvar_19.xyz * scale3)\n' + '   + bias3).x - (\n' + '    (tmpvar_20.xyz * scale1)\n' + '   + bias1).x));\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22.x = tmpvar_9.y;\n' + '  tmpvar_22.y = tmpvar_14.y;\n' + '  dz_2 = (-(tmpvar_22) * texsize.zw);\n' + '   vec4 tmpvar_23;\n' + '   vec2 P_24;\n' + '  P_24 = (uv - dz_2);\n' + '  tmpvar_23 = texture2D (sampler_fw_main, P_24);\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_blur2, uv);\n' + '   vec4 tmpvar_26;\n' + '   vec2 P_27;\n' + '  P_27 = (uv + dz_2);\n' + '  tmpvar_26 = texture2D (sampler_blur1, P_27);\n' + '  ret_3.y = ((tmpvar_23.y - 0.06) - ((\n' + '    ((tmpvar_25.xyz * scale2) + bias2)\n' + '  .y - \n' + '    ((tmpvar_26.xyz * scale1) + bias1)\n' + '  .y) * 1.3));\n' + '   vec2 tmpvar_28;\n' + '  tmpvar_28 = ((uv_orig - 0.5) * (1.8 - (\n' + '    (bass_att - treb_att)\n' + '   * 0.015)));\n' + '   vec2 tmpvar_29;\n' + '  tmpvar_29.x = ((tmpvar_28.x * tmpvar_28.x) - (tmpvar_28.y * tmpvar_28.y));\n' + '  tmpvar_29.y = ((2.0 * tmpvar_28.x) * tmpvar_28.y);\n' + '  my_uv2_1 = (tmpvar_29 + vec2(0.28, 0.4));\n' + '   vec4 tmpvar_30;\n' + '   vec2 P_31;\n' + '  P_31 = (my_uv2_1 + (vec2(1.0, 0.0) * tmpvar_4));\n' + '  tmpvar_30 = texture2D (sampler_blur1, P_31);\n' + '   vec4 tmpvar_32;\n' + '   vec2 P_33;\n' + '  P_33 = (my_uv2_1 - (vec2(1.0, 0.0) * tmpvar_4));\n' + '  tmpvar_32 = texture2D (sampler_blur1, P_33);\n' + '   vec4 tmpvar_34;\n' + '   vec2 P_35;\n' + '  P_35 = (my_uv2_1 + (vec2(0.0, 1.0) * tmpvar_4));\n' + '  tmpvar_34 = texture2D (sampler_blur1, P_35);\n' + '   vec4 tmpvar_36;\n' + '   vec2 P_37;\n' + '  P_37 = (my_uv2_1 - (vec2(0.0, 1.0) * tmpvar_4));\n' + '  tmpvar_36 = texture2D (sampler_blur1, P_37);\n' + '   vec2 tmpvar_38;\n' + '  tmpvar_38.x = ((2.0 * (\n' + '    (tmpvar_30.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_32.xyz * scale1)\n' + '   + bias1))).z;\n' + '  tmpvar_38.y = ((2.0 * (\n' + '    (tmpvar_34.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_36.xyz * scale1)\n' + '   + bias1))).z;\n' + '  dz_2 = (tmpvar_38 * texsize.zw);\n' + '   vec2 tmpvar_39;\n' + '  tmpvar_39 = clamp ((my_uv2_1 + dz_2), 0.0, 1.0);\n' + '   vec4 tmpvar_40;\n' + '  tmpvar_40 = texture2D (sampler_main, tmpvar_39);\n' + '  ret_3.z = (tmpvar_40.z - 0.014);\n' + '   vec4 tmpvar_41;\n' + '  tmpvar_41.w = 1.0;\n' + '  tmpvar_41.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_41;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 dy_1;\n' + '   vec3 dx_2;\n' + '   vec2 mirror_uv_3;\n' + '   vec3 ret_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = ((uv - 0.5) * aspect.xy);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = ((_qa.w * tmpvar_5.x) - (_qa.z * tmpvar_5.y));\n' + '  tmpvar_6.y = ((_qa.z * tmpvar_5.x) + (_qa.w * tmpvar_5.y));\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (0.5 + (tmpvar_6 * 2.0));\n' + '   vec2 numerator_8;\n' + '  numerator_8 = (tmpvar_7 - vec2(0.0, 0.5));\n' + '   vec2 denominator_9;\n' + '  denominator_9 = (tmpvar_7 - vec2(1.0, 0.5));\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10.x = ((numerator_8.x * denominator_9.x) + (numerator_8.y * denominator_9.y));\n' + '  tmpvar_10.y = ((numerator_8.y * denominator_9.x) - (numerator_8.x * denominator_9.y));\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = (((tmpvar_10 / \n' + '    ((denominator_9.x * denominator_9.x) + (denominator_9.y * denominator_9.y))\n' + '  ) + 0.5) - vec2(0.5, 0.5));\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = sqrt(dot (tmpvar_11, tmpvar_11));\n' + '   float tmpvar_13;\n' + '   float tmpvar_14;\n' + '  tmpvar_14 = (min (abs(\n' + '    (tmpvar_11.x / tmpvar_11.y)\n' + '  ), 1.0) / max (abs(\n' + '    (tmpvar_11.x / tmpvar_11.y)\n' + '  ), 1.0));\n' + '   float tmpvar_15;\n' + '  tmpvar_15 = (tmpvar_14 * tmpvar_14);\n' + '  tmpvar_15 = (((\n' + '    ((((\n' + '      ((((-0.01213232 * tmpvar_15) + 0.05368138) * tmpvar_15) - 0.1173503)\n' + '     * tmpvar_15) + 0.1938925) * tmpvar_15) - 0.3326756)\n' + '   * tmpvar_15) + 0.9999793) * tmpvar_14);\n' + '  tmpvar_15 = (tmpvar_15 + (float(\n' + '    (abs((tmpvar_11.x / tmpvar_11.y)) > 1.0)\n' + '  ) * (\n' + '    (tmpvar_15 * -2.0)\n' + '   + 1.570796)));\n' + '  tmpvar_13 = (tmpvar_15 * sign((tmpvar_11.x / tmpvar_11.y)));\n' + '  if ((abs(tmpvar_11.y) > (1e-08 * abs(tmpvar_11.x)))) {\n' + '    if ((tmpvar_11.y < 0.0)) {\n' + '      if ((tmpvar_11.x >= 0.0)) {\n' + '        tmpvar_13 += 3.141593;\n' + '      } else {\n' + '        tmpvar_13 = (tmpvar_13 - 3.141593);\n' + '      };\n' + '    };\n' + '  } else {\n' + '    tmpvar_13 = (sign(tmpvar_11.x) * 1.570796);\n' + '  };\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.x = (tmpvar_13 * 0.1591549);\n' + '  tmpvar_16.y = tmpvar_12;\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = ((tmpvar_16.x * 2.0) + _qc.z);\n' + '  tmpvar_17.y = ((0.3 * log(tmpvar_12)) + _qc.w);\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18 = (0.5 + (0.5 - abs(\n' + '    ((fract((tmpvar_17 * 0.5)) * 2.0) - 1.0)\n' + '  )));\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19 = (texsize.zw * 3.0);\n' + '   vec4 tmpvar_20;\n' + '   vec2 P_21;\n' + '  P_21 = (tmpvar_18 + (vec2(1.0, 0.0) * tmpvar_19));\n' + '  tmpvar_20 = texture2D (sampler_blur1, P_21);\n' + '   vec4 tmpvar_22;\n' + '   vec2 P_23;\n' + '  P_23 = (tmpvar_18 - (vec2(1.0, 0.0) * tmpvar_19));\n' + '  tmpvar_22 = texture2D (sampler_blur1, P_23);\n' + '   vec3 tmpvar_24;\n' + '  tmpvar_24 = ((2.0 * (\n' + '    (tmpvar_20.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_22.xyz * scale1)\n' + '   + bias1)));\n' + '   vec4 tmpvar_25;\n' + '   vec2 P_26;\n' + '  P_26 = (tmpvar_18 + (vec2(0.0, 1.0) * tmpvar_19));\n' + '  tmpvar_25 = texture2D (sampler_blur1, P_26);\n' + '   vec4 tmpvar_27;\n' + '   vec2 P_28;\n' + '  P_28 = (tmpvar_18 - (vec2(0.0, 1.0) * tmpvar_19));\n' + '  tmpvar_27 = texture2D (sampler_blur1, P_28);\n' + '   vec3 tmpvar_29;\n' + '  tmpvar_29 = ((2.0 * (\n' + '    (tmpvar_25.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_27.xyz * scale1)\n' + '   + bias1)));\n' + '   vec2 tmpvar_30;\n' + '  tmpvar_30.x = tmpvar_24.x;\n' + '  tmpvar_30.y = tmpvar_29.x;\n' + '  mirror_uv_3 = (tmpvar_18 + ((tmpvar_30 * texsize.zw) * 4.0));\n' + '   vec4 tmpvar_31;\n' + '  tmpvar_31 = texture2D (sampler_blur1, mirror_uv_3);\n' + '   vec4 tmpvar_32;\n' + '  tmpvar_32 = texture2D (sampler_blur2, mirror_uv_3);\n' + '   vec3 tmpvar_33;\n' + '  tmpvar_33 = texture2D (sampler_main, mirror_uv_3).xxx;\n' + '   vec4 tmpvar_34;\n' + '  tmpvar_34 = texture2D (sampler_main, mirror_uv_3);\n' + '   vec4 tmpvar_35;\n' + '  tmpvar_35 = texture2D (sampler_blur1, mirror_uv_3);\n' + '  ret_4 = ((mix (ret_4, vec3(1.0, 1.0, 1.0), \n' + '    ((((tmpvar_31.xyz * scale1) + bias1).x * (1.0 - (\n' + '      (tmpvar_32.xyz * scale2)\n' + '     + bias2).x)) * (pow (hue_shader, vec3(4.0, 4.0, 4.0)) * 1.4))\n' + '  ) * tmpvar_33) + ((\n' + '    (1.0 - tmpvar_34.x)\n' + '   * \n' + '    ((tmpvar_35.xyz * scale1) + bias1)\n' + '  .x) * vec3(3.0, 3.0, 3.0)));\n' + '   vec2 tmpvar_36;\n' + '  tmpvar_36.x = tmpvar_24.x;\n' + '  tmpvar_36.y = tmpvar_29.x;\n' + '  mirror_uv_3 = (mirror_uv_3 - ((tmpvar_36 * texsize.zw) * 24.0));\n' + '   vec4 tmpvar_37;\n' + '   vec2 P_38;\n' + '  P_38 = (mirror_uv_3 + (vec2(1.0, 0.0) * tmpvar_19));\n' + '  tmpvar_37 = texture2D (sampler_blur1, P_38);\n' + '   vec4 tmpvar_39;\n' + '   vec2 P_40;\n' + '  P_40 = (mirror_uv_3 - (vec2(1.0, 0.0) * tmpvar_19));\n' + '  tmpvar_39 = texture2D (sampler_blur1, P_40);\n' + '  dx_2 = ((2.0 * (\n' + '    (tmpvar_37.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_39.xyz * scale1)\n' + '   + bias1)));\n' + '   vec4 tmpvar_41;\n' + '   vec2 P_42;\n' + '  P_42 = (mirror_uv_3 + (vec2(0.0, 1.0) * tmpvar_19));\n' + '  tmpvar_41 = texture2D (sampler_blur1, P_42);\n' + '   vec4 tmpvar_43;\n' + '   vec2 P_44;\n' + '  P_44 = (mirror_uv_3 - (vec2(0.0, 1.0) * tmpvar_19));\n' + '  tmpvar_43 = texture2D (sampler_blur1, P_44);\n' + '  dy_1 = ((2.0 * (\n' + '    (tmpvar_41.xyz * scale1)\n' + '   + bias1)) - (2.0 * (\n' + '    (tmpvar_43.xyz * scale1)\n' + '   + bias1)));\n' + '   vec2 tmpvar_45;\n' + '  tmpvar_45.x = -(dx_2.y);\n' + '  tmpvar_45.y = dy_1.y;\n' + '   vec2 tmpvar_46;\n' + '  tmpvar_46 = (tmpvar_45 * 0.25);\n' + '   vec4 tmpvar_47;\n' + '  tmpvar_47 = texture2D (sampler_main, mirror_uv_3);\n' + '   vec3 tmpvar_48;\n' + '  tmpvar_48 = mix (ret_4, vec3(1.0, 1.0, 1.0), (mix (vec3(1.0, 0.7, 0.2), vec3(0.15, 0.0, 0.5), vec3(\n' + '    ((((\n' + '      ((mirror_uv_3.x * 0.8) - mirror_uv_3.y)\n' + '     + 0.75) + tmpvar_46.x) + tmpvar_46.y) - 0.1)\n' + '  )) * tmpvar_47.y));\n' + '   vec2 tmpvar_49;\n' + '   vec2 tmpvar_50;\n' + '  tmpvar_50 = ((0.5 + (\n' + '    (uv - 0.5)\n' + '   * aspect.wz)) - vec2(0.5, 0.5));\n' + '   vec2 tmpvar_51;\n' + '  tmpvar_51.x = ((_qa.w * tmpvar_50.x) - (_qa.z * tmpvar_50.y));\n' + '  tmpvar_51.y = ((_qa.z * tmpvar_50.x) + (_qa.w * tmpvar_50.y));\n' + '  tmpvar_49 = (vec2(0.5, 0.5) + tmpvar_51);\n' + '  mirror_uv_3 = tmpvar_49.yx;\n' + '   vec4 tmpvar_52;\n' + '   vec2 P_53;\n' + '   vec2 tmpvar_54;\n' + '  tmpvar_54 = (vec2(1.0, 0.0) * texsize.zw);\n' + '  P_53 = (tmpvar_49.yx + tmpvar_54);\n' + '  tmpvar_52 = texture2D (sampler_main, P_53);\n' + '   vec4 tmpvar_55;\n' + '   vec2 P_56;\n' + '  P_56 = (tmpvar_49.yx - tmpvar_54);\n' + '  tmpvar_55 = texture2D (sampler_main, P_56);\n' + '  dx_2 = ((2.0 * tmpvar_52.xyz) - (2.0 * tmpvar_55.xyz));\n' + '   vec4 tmpvar_57;\n' + '   vec2 P_58;\n' + '   vec2 tmpvar_59;\n' + '  tmpvar_59 = (vec2(0.0, 1.0) * texsize.zw);\n' + '  P_58 = (tmpvar_49.yx + tmpvar_59);\n' + '  tmpvar_57 = texture2D (sampler_main, P_58);\n' + '   vec4 tmpvar_60;\n' + '   vec2 P_61;\n' + '  P_61 = (tmpvar_49.yx - tmpvar_59);\n' + '  tmpvar_60 = texture2D (sampler_main, P_61);\n' + '  dy_1 = ((2.0 * tmpvar_57.xyz) - (2.0 * tmpvar_60.xyz));\n' + '   vec2 tmpvar_62;\n' + '  tmpvar_62.x = dx_2.z;\n' + '  tmpvar_62.y = dy_1.z;\n' + '   vec2 P_63;\n' + '  P_63 = (tmpvar_49.yx - tmpvar_62);\n' + '   vec3 tmpvar_64;\n' + '  tmpvar_64 = vec3((1.0 - texture2D (sampler_main, P_63).z));\n' + '  ret_4 = (1.0 - mix (tmpvar_48, vec3(0.9, 0.9, 1.0), tmpvar_64));\n' + '   vec4 tmpvar_65;\n' + '  tmpvar_65.w = 1.0;\n' + '  tmpvar_65.xyz = ret_4;\n' + '  vec4 ret4 = tmpvar_65;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('q11 = 0.5/asin(1);'),
	'frame_eqs_str' : ('wave_r = wave_r + 0.35*sin(1.14*time) + 0.16*sin(1.5*time);\n' + 'wave_g = wave_g + 0.36*sin(1.27*time) + 0.15*sin(1.11*time);\n' + 'wave_b = wave_b + 0.37*sin(1.284*time) + 0.15*sin(1.3*time);\n' + 'warp = 0;\n' + 'ob_r = wave_g;\n' + 'ob_b = wave_r;\n' + 'ob_g = wave_b;\n' + 'ib_r = wave_r;\n' + 'ib_b = wave_g;\n' + 'ib_g = wave_r;\n' + 'bb = bb*0.98 + bass*0.5;\n' + 'mm = mm*0.98 + mid*0.5;\n' + 'tt = tt*0.98 + treb*0.5;\n' + 'mx = max(max(bb,mm),tt);\n' + 'mn = min(min(bb,mm),tt);\n' + 'h1 = (bb-mn)/(mx-mn);\n' + 'h2 = (mm-mn)/(mx-mn);\n' + 'h3 = (tt-mn)/(mx-mn);\n' + 'v = 0.2/fps;\n' + 'bm = bm + (h1-h2)*v;\n' + 'mt = mt + (h2-h3)*v;\n' + 'bt = bt + (h1-h3)*v;\n' + 'w = bm;\n' + 'q3 = sin(w);\n' + 'q4 = cos(w);\n' + 'q10 = bm;\n' + 'q11 = mt;\n' + 'q12 = bt;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.15*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.165*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'six = sin(x);\n' + 'dx = dx + 0.01*sin(abs(12*y))*sin(time);\n' + 'dy = dy + 0.01*sin(abs(12*x))*cos(time);\n' + 'zoom = zoom + 0.0095*(sin(8+4*sin(0.2*time)*ang) + sin(sin(time*2*sin(time)*rad))*0.3 - cos(rad)*0.1);\n' + 'rot = rot + 0.08*abs(0.746-rad)*sin(2.2*(0.5-rad)+5.7*sin(0.1*time));\n' + 'sx = sx + 0.01*(0.99*1-rad)*sin(0.733*time)*below(sin(time),0);\n' + 'sy = sy + 0.01*(0.99*1-rad)*cos(0.953*time)*above(sin(time),0);\n' + 'zoom = zoom - 0.015*(0.5*abs(3)-rad)*below(rad,1.5);\n' + 'dx = if(above(y,.93),.01,if(below(y,.01),if(below(x,.3),if(below(y,.5),0,-.01),-.01),0));\n' + 'dy = if(below(x,.05),.01,if(above(x,(0.94 - q7)),-.01,0));\n' + 'zoom = if(above(x,.09),if(below(x,.85),if(above(y,.09),if(below(y,.85),.95,1),1),1),1);\n' + 'dy = if(below(y,.5),if(below(x,.3),.01,dy),dy);\n' + 'rot = if(above(x,.09),if(below(x,.85),if(above(y,.09),if(below(y,.85),0.1*sin(sin(ang*0.1*ang)+rad*6+q8*.444),0),0),0),0);'),
};

return pmap;
});
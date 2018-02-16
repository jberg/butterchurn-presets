define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.75,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.972,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.005,
		b2x : 1.0,
		warp : 1.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.4,
		mv_b : 1.0,
		echo_zoom : 0.997,
		ob_size : 0.03,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 1.0,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.1,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.094,
		decay : 1.0,
		wave_a : 4.1,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 2.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q8 = 0;
m.yamp = 0;
m.xamp = 0;
m.yamptarg = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.dy_residual = 0;
m.xspeed = 0;
m.dx_residual = 0;
m.vol = 0;
m.newzoom = 0;
m.ydir = 0;
m.xdir = 0;
m.newrad = 0;
m.newx = 0;
m.newy = 0;
m.mtime = 0;
m.ypos = 0;
m.bass_thresh = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = (m.wave_r+(0.45*((0.5*Math.sin((m.time*0.701)))+(0.3*Math.cos((m.time*0.438))))));
m.wave_b = (m.wave_b-(0.4*((0.5*Math.sin((m.time*4.782)))+(0.5*Math.cos((m.time*0.722))))));
m.wave_g = (m.wave_g+(0.4*Math.sin((m.time*1.931))));
m.wave_r = (((0.2125*m.wave_r)+(0.7154*m.wave_g))+(0.0721*m.wave_b));
m.wave_g = m.wave_r;
m.wave_b = m.wave_r;
m.vol = (0.167*(m.bass+m.mid));
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.5*m.vol)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.wave_x = ((1.25*m.xpos)+0.5);
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.3*m.vol)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.wave_y = ((1.25*m.ypos)+0.5);
m.dx = (m.dx+m.dx_residual);
m.dy = (m.dy+m.dy_residual);
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.dx_residual = (((equal(m.bass_thresh, 2)*0.003)*Math.sin((m.time*7)))+((1-equal(m.bass_thresh, 2))*m.dx_residual));
m.dy_residual = (((equal(m.bass_thresh, 2)*0.001)*Math.sin((m.time*9)))+((1-equal(m.bass_thresh, 2))*m.dy_residual));
m.rot = 0.1;
m.vol = (((m.bass+m.mid)+m.treb)*0.25);
m.vol = (m.vol*m.vol);
m.mtime = (m.mtime+(m.vol*0.01));
m.q8 = m.mtime;
m.q1 = (((Math.sin(m.mtime)*Math.sin((m.mtime*3)))*0.4)+0.5);
m.q2 = (((Math.cos((m.mtime*1.3))*Math.sin((m.mtime*5.4)))*0.4)+0.5);
m.ib_r = Math.tan(m.time);
m.ib_r = Math.min(1, Math.max(m.ib_r, 0));
m.ib_g = Math.tan((m.time+2.1));
m.ib_g = Math.min(1, Math.max(m.ib_g, 0));
m.ib_b = Math.tan((m.time+4.2));
m.ib_b = Math.min(1, Math.max(m.ib_b, 0));
m.q3 = (10+(8*((0.6*Math.sin((0.223*m.time)))+(0.4*Math.sin((0.153*m.time))))));
m.q4 = div(1,m.q3);
m.q5 = (0.5*sign(m.xpos));
m.q6 = (0.5*sign(m.ypos));
m.monitor = m.q4;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.cx = ((bitand(0,((m.x*m.q3)-m.q5))+m.q5)*m.q4);
m.cy = ((bitand(0,((m.y*m.q3)-m.q6))+m.q6)*m.q4);
m.newx = (m.q1-m.x);
m.newy = (m.q2-m.y);
m.newrad = (sqrt(((m.newx*m.newx)+((0.5625*m.newy)*m.newy)))*2);
m.newzoom = pow((1.05+(0.03*m.newrad)), pow((0.01+Math.sin((m.newrad*m.newrad))), ((m.newrad*2)-1)));
m.dx = ((m.newx*m.newzoom)-m.newx);
m.dy = ((m.newy*m.newzoom)-m.newy);
m.dx = (m.dx*0.1);
m.dy = (m.dy*0.1);
m.rot = ((2*m.newrad)*((0.5*(0.5-m.rad))+0.1));
m.rot = ((m.rot*Math.sin(m.time))*0.2);
m.sx = -1;
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
			tex_zoom : 1.3345,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.59957,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.spi = 0;
m.red = 0;
m.vol = 0;
m.bob = 0;
m.tm = 0;
m.ro = 0;
m.sp = 0;
m.border_1 = 0;
m.bob = 1.5;
m.ro = 0;
m.red = rand(20);
			m.rkeys = ['bob','ro'];
			return m;
		},
		'frame_eqs' : function(m) {
m.vol = (1+(0.2*div(((m.bass_att+m.treb_att)+m.mid_att),3)));
m.bob = (((m.bob*above(m.bob, 0.01))-0.01)+(1*(1-above(m.bob, 0.01))));
m.bob = (0.4+(0.4*Math.sin((m.time*0.8))));
m.bob = (m.bob*m.vol);
m.rad = m.bob;
m.border_1 = 0.4;
m.sides = 30;
m.ro = (m.ro+0.02);
m.ang = m.ro;
m.rad = 0.6;
m.sp = (m.red*0.025);
m.spi = (0.5-m.sp);
m.tm = (m.time*0.1);
m.border_r = ((0.5+(m.sp*Math.sin((m.tm*0.6))))+(m.spi*Math.cos((m.tm*1.46))));
m.border_g = ((0.5+(m.sp*Math.sin((m.tm*1.294))))+(m.spi*Math.cos((m.tm*0.87))));
m.border_b = ((0.5+(m.sp*Math.sin((m.tm*1.418))))+(m.spi*Math.cos((m.tm*0.76))));
		return m;
	},
		'init_eqs_str' : ('bob = 1.5;\n' + 'ro = 0;\n' + 'red = rand(20);'),
		'frame_eqs_str' : ('vol = 1 + 0.2*((bass_att+treb_att+mid_att)/3);\n' + 'bob = bob*above(bob,0.01) - 0.01 + 1*(1 - above(bob,0.01));\n' + 'bob = 0.4 + 0.4*sin(time*0.8);\n' + 'bob = bob*vol;\n' + 'rad = bob;\n' + 'border_1 = 0.4;\n' + 'sides = 30;\n' + 'ro = ro + 0.02;\n' + 'ang = ro;\n' + 'rad = 0.6;\n' + 'sp = red*0.025;\n' + 'spi = 0.5 - sp;\n' + 'tm = time*0.1;\n' + 'border_r = 0.5 + sp*sin(tm*0.6) + spi*cos(tm*1.46);\n' + 'border_g = 0.5 + sp*sin(tm*1.294) + spi*cos(tm*0.87);\n' + 'border_b = 0.5 + sp*sin(tm*1.418) + spi*cos(tm*0.76);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.5*((Math.sin((m.time*1.1))*0.3)+(0.7*Math.sin((m.time*0.5))))));
m.x = (0.5+(0.225*Math.sin(m.time)));
m.y = (0.5+(0.3*Math.cos(m.time)));
m.rad = (m.rad*m.mid_att);
m.r = (0.5+(0.5*Math.sin((m.frame*0.5))));
m.b = (0.5+(0.5*Math.sin(((m.frame*0.5)+2.094))));
m.g = (0.5+(0.5*Math.sin(((m.frame*0.5)+4.188))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.5*(sin(time*1.1)*0.3 + 0.7*sin(time*0.5));\n' + 'x = 0.5 + 0.225*sin(time);\n' + 'y = 0.5 + 0.3*cos(time);\n' + 'rad = rad*mid_att;\n' + 'r = 0.5 + 0.5*sin(frame*0.5);\n' + 'b = 0.5 + 0.5*sin(frame*0.5 + 2.094);\n' + 'g = 0.5 + 0.5*sin(frame*0.5 + 4.188);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.5*((Math.sin((m.time*1.1))*0.3)+(0.7*Math.sin((m.time*0.5))))));
m.x = (0.5+(0.225*Math.sin((m.time+2.09))));
m.y = (0.5+(0.3*Math.cos((m.time+2.09))));
m.rad = (m.rad*m.bass_att);
m.r = (0.5+(0.5*Math.sin((m.frame*0.5))));
m.b = (0.5+(0.5*Math.sin(((m.frame*0.5)+2.094))));
m.g = (0.5+(0.5*Math.sin(((m.frame*0.5)+4.188))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.5*(sin(time*1.1)*0.3 + 0.7*sin(time*0.5));\n' + 'x = 0.5 + 0.225*sin(time + 2.09);\n' + 'y = 0.5 + 0.3*cos(time + 2.09);\n' + 'rad = rad*bass_att;\n' + 'r = 0.5 + 0.5*sin(frame*0.5);\n' + 'b = 0.5 + 0.5*sin(frame*0.5 + 2.094);\n' + 'g = 0.5 + 0.5*sin(frame*0.5 + 4.188);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.5*((Math.sin((m.time*1.1))*0.3)+(0.7*Math.sin((m.time*0.5))))));
m.x = (0.5+(0.225*Math.sin((m.time+4.19))));
m.y = (0.5+(0.3*Math.cos((m.time+4.19))));
m.rad = (m.rad*m.treb_att);
m.r = (0.5+(0.5*Math.sin((m.frame*0.5))));
m.b = (0.5+(0.5*Math.sin(((m.frame*0.5)+2.094))));
m.g = (0.5+(0.5*Math.sin(((m.frame*0.5)+4.188))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.5*(sin(time*1.1)*0.3 + 0.7*sin(time*0.5));\n' + 'x = 0.5 + 0.225*sin(time + 4.19);\n' + 'y = 0.5 + 0.3*cos(time + 4.19);\n' + 'rad = rad*treb_att;\n' + 'r = 0.5 + 0.5*sin(frame*0.5);\n' + 'b = 0.5 + 0.5*sin(frame*0.5 + 2.094);\n' + 'g = 0.5 + 0.5*sin(frame*0.5 + 4.188);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 v_1;\n' + '   vec3 ret_2;\n' + '  v_1 = (normalize((uv - 0.5)) * texsize.zw);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv - (v_1 * 2.5));\n' + '  tmpvar_4 = texture2D (sampler_main, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (v_1 * 5.5));\n' + '  tmpvar_6 = texture2D (sampler_main, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv - (v_1 * 9.0));\n' + '  tmpvar_8 = texture2D (sampler_main, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (v_1 * 13.0));\n' + '  tmpvar_10 = texture2D (sampler_main, P_11);\n' + '  ret_2 = (0.2 * ((tmpvar_3.xyz + tmpvar_4.xyz) + (\n' + '    (tmpvar_6.xyz + tmpvar_8.xyz)\n' + '   + tmpvar_10.xyz)));\n' + '  ret_2 = ((ret_2 - 0.01) * 0.975);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12.w = 1.0;\n' + '  tmpvar_12.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_12;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('uniform highp vec3 neu;\n' + 'uniform highp vec3 blur;\n' + 'highp vec3 xlat_mutableblur;\n' + 'highp vec3 xlat_mutableneu;\n' + 'highp vec3 xlat_mutableret1;\n' + 'shader_body {\n' + '  xlat_mutableblur = blur;\n' + '  xlat_mutableneu = neu;\n' + '   vec2 uv_1;\n' + '   float ang2_3;\n' + '   vec2 uv2_4;\n' + '   vec3 ret_5;\n' + '  uv_1 = (uv - 0.5);\n' + '  uv_1 = (uv_1 * aspect.xy);\n' + '  xlat_mutableret1 = vec3(0.0, 0.0, 0.0);\n' + '  for ( int n_2 = 0; n_2 <= 5; n_2++) {\n' + '    ang2_3 = ((6.28 * float(n_2)) / 5.0);\n' + '     float tmpvar_6;\n' + '    tmpvar_6 = cos(ang2_3);\n' + '     float tmpvar_7;\n' + '    tmpvar_7 = sin(ang2_3);\n' + '    uv2_4.x = ((uv_1.x * tmpvar_6) - (uv_1.y * tmpvar_7));\n' + '    uv2_4.y = ((uv_1.x * tmpvar_7) + (uv_1.y * tmpvar_6));\n' + '     vec4 tmpvar_8;\n' + '     vec2 P_9;\n' + '     float tmpvar_10;\n' + '    tmpvar_10 = (0.02 * _qg.z);\n' + '    P_9 = ((uv2_4 + 0.4) + tmpvar_10);\n' + '    tmpvar_8 = texture2D (sampler_main, P_9);\n' + '    xlat_mutableneu = tmpvar_8.xyz;\n' + '     vec4 tmpvar_11;\n' + '     vec2 P_12;\n' + '    P_12 = ((uv2_4 + 0.4) + tmpvar_10);\n' + '    tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '    xlat_mutableblur = ((tmpvar_11.xyz * scale1) + bias1);\n' + '    xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu + (xlat_mutableblur * 2.0)));\n' + '  };\n' + '  ret_5 = ((xlat_mutableret1 - 0.0125) * 0.7);\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = (1.0 - ((ret_5 * \n' + '    (1.0 - ret_5)\n' + '  ) * 4.0));\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14.xy = (tmpvar_13.xy * vec2(0.5, 0.5));\n' + '  tmpvar_14.z = tmpvar_13.z;\n' + '  ret_5 = (tmpvar_14 * 0.5);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 1.0;\n' + '  tmpvar_15.xyz = ret_5;\n' + '  vec4 ret4 = tmpvar_15;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'wave_r = wave_r + 0.45*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));\n' + 'wave_b = wave_b - 0.4*(0.5*sin(time*4.782)+0.5*cos(time*0.722));\n' + 'wave_g = wave_g + 0.4*sin(time*1.931);\n' + 'wave_r = 0.2125*wave_r + 0.7154*wave_g + 0.0721*wave_b;\n' + 'wave_g = wave_r;\n' + 'wave_b = wave_r;\n' + 'vol = 0.167*(bass+mid);\n' + 'xamptarg = if(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'wave_x = 1.25*xpos + 0.5;\n' + 'yamptarg = if(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'wave_y = 1.25*ypos + 0.5;\n' + 'dx = dx + dx_residual;\n' + 'dy = dy + dy_residual;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'dx_residual = equal(bass_thresh,2)*0.003*sin(time*7) + (1-equal(bass_thresh,2))*dx_residual;\n' + 'dy_residual = equal(bass_thresh,2)*0.001*sin(time*9) + (1-equal(bass_thresh,2))*dy_residual;\n' + 'rot = 0.1;\n' + 'vol=(bass+mid+treb)*0.25;\n' + 'vol=vol*vol;\n' + 'mtime=mtime + vol*0.01;\n' + 'q8=mtime;\n' + 'q1=sin(mtime) * sin(mtime*3) * 0.4 + 0.5;\n' + 'q2=cos(mtime*1.3) * sin(mtime*5.4) * 0.4 + 0.5;\n' + 'ib_r = tan(time);\n' + 'ib_r = min(1, max(ib_r,0));\n' + 'ib_g = tan(time+2.1);\n' + 'ib_g = min(1, max(ib_g,0));\n' + 'ib_b = tan(time+4.2);\n' + 'ib_b = min(1, max(ib_b,0));\n' + 'q3 = 10+8*(0.6*sin(0.223*time) + 0.4*sin(0.153*time));\n' + 'q4 = 1/q3;\n' + 'q5 = 0.5*sign(xpos);\n' + 'q6 = 0.5*sign(ypos);\n' + 'monitor=q4;'),
	'pixel_eqs_str' : ('cx = ((0&(x*q3-q5))+q5)*q4;\n' + 'cy = ((0&(y*q3-q6))+q6)*q4;\n' + 'newx = q1-x;\n' + 'newy = q2-y;\n' + 'newrad = sqrt((newx)*(newx)+0.5625*(newy)*(newy))*2;\n' + 'newzoom = pow(1.05 + 0.03*newrad, pow(0.01+sin(newrad*newrad), newrad*2-1));\n' + 'dx = (newx)*newzoom - newx;\n' + 'dy = (newy)*newzoom - newy;\n' + 'dx =dx*0.1;\n' + 'dy=dy*0.1;\n' + 'rot = 2*newrad*(0.5*(0.5-rad)+0.1);\n' + 'rot=rot*sin(time)*0.2;\n' + 'sx=-1;'),
};

return pmap;
});
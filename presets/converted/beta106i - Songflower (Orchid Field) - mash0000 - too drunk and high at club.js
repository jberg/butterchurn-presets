define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 1.448,
		echo_alpha : 1.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.02,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.015,
		b1ed : 0.25,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
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
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.99,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.5,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.ladder = 0;
m.q3 = 0;
m.q4 = 0;
m.leafset = 0;
m.q5 = 0;
m.dx_r = 0;
m.dy_r = 0;
m.rcog = 0;
m.ocog = 0;
m.pfthresh = 0;
m.orcog = 0;
m.cog = 0;
m.thresh = 0;
m.pfdx_r = 0;
m.pfdy_r = 0;
m.leaf = 0;
m.leafset = 3;
		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (0.5+(0.5*Math.sin((1.6*m.time))));
m.wave_g = (0.5+(0.5*Math.sin((4.1*m.time))));
m.wave_b = (-1+(((1-m.wave_r)+1)-m.wave_g));
m.warp = 0;
m.pfthresh = ((above(m.bass_att, m.pfthresh)*3)+((1-above(m.bass_att, m.pfthresh))*(((m.pfthresh-1.3)*0.96)+1.3)));
m.pfdx_r = (((equal(m.pfthresh, 3)*0.015)*Math.sin((5*m.time)))+((1-equal(m.pfthresh, 3))*m.pfdx_r));
m.pfdy_r = (((equal(m.pfthresh, 3)*0.015)*Math.sin((6*m.time)))+((1-equal(m.pfthresh, 3))*m.pfdy_r));
m.q1 = m.wave_r;
m.q2 = m.wave_g;
m.q3 = m.wave_b;
m.ob_r = (1-(Math.abs(m.q1)*0.75));
m.ob_g = (1-(Math.abs(m.q2)*0.75));
m.ob_b = (1-(Math.abs(m.q3)*0.75));
m.echo_zoom = (m.echo_zoom+Math.min(Math.max(0.75, (50*m.pfdx_r)), 1));
m.echo_orient = (m.echo_orient+(16*m.pfdy_r));
m.dx = (m.dx+(15.1*m.pfdx_r));
m.dy = (m.dy+(15.1*m.pfdy_r));
m.cog = (m.ocog+(0.005*(((m.bass+m.bass_att)+(m.bass*m.bass_att))-2)));
m.ocog = (below(m.cog, 30000)*m.cog);
m.q4 = m.cog;
m.rcog = (m.orcog+(0.5*(rand(100)*0.01)));
m.orcog = (below(m.rcog, 20000)*m.rcog);
m.q5 = m.rcog;
m.ib_size = (m.ib_size+((0.009*m.treb_att)*Math.cos(m.q4)));
m.ob_size = (m.ob_size+((0.009*m.bass_att)*Math.sin(m.q4)));
m.ib_r = (1-(Math.abs(m.q1)*Math.sin(m.q4)));
m.ib_g = (0.75*Math.cos(m.q4));
m.ib_b = (1-(Math.abs(m.q3)*Math.cos(m.q5)));
		m.rkeys = ['zoom','leafset','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.ladder = Math.abs(Math.sin((1*m.time)));
m.leaf = (((((5*below(m.ladder, 0.2))+((8*above(m.ladder, 0.2))*below(m.ladder, 0.4)))+((12*above(m.ladder, 0.4))*below(m.ladder, 0.6)))+((18*above(m.ladder, 0.6))*below(m.ladder, 0.8)))+(24*above(m.ladder, 0.8)));
m.leafset = ifcond(equal(m.thresh, 2), m.leaf, m.leafset);
m.zoom = (m.zoom+((0.05*(0.75-Math.cos((m.leafset*m.rad))))*(1-m.rad)));
m.zoom = (m.zoom-Math.abs((0.05*(0.75-Math.cos((4*m.rad))))));
m.zoom = (m.zoom-(0.5*Math.cos((4*m.q4))));
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
			r2 : 0.0,
			a : 0.4,
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
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.2,
			r : 0.0,
			border_g : 1.0,
			rad : 2.71585,
			x : 0.37,
			y : 0.5,
			ang : 3.64425,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.t1 = 0;
m.t2 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['b2','g2','r2','b','g','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.q4*(0.13+(0.1*m.t1)));
m.rad = (m.rad*(0.5+(0.2*m.t2)));
m.r = Math.min(1, Math.max(0, (m.r+(0.2*Math.sin(((m.time*0.417)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.2*Math.sin(((m.time*0.391)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.2*Math.sin(((m.time*0.432)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.2*Math.sin(((m.time*0.657)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.2*Math.sin(((m.time*0.737)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.2*Math.sin(((m.time*0.884)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('ang = q4*(0.13 + 0.1*t1);\n' + 'rad = rad * (0.5 + 0.2*t2);\n' + 'r = min(1,max(0,r + 0.2*sin(time*0.417 + 1)));\n' + 'g = min(1,max(0,g + 0.2*sin(time*0.391 + 2)));\n' + 'b = min(1,max(0,b + 0.2*sin(time*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.2*sin(time*0.657 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.2*sin(time*0.737 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.2*sin(time*0.884 + 6)));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.8,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 1.88496,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.60804,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.8041,
			x : 0.37,
			y : 0.5,
			ang : 0.0,
			sides : 50.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.t1 = 0;
m.t2 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['r2','b','g','g2','b2','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.05*Math.sin(((m.time*1.05)+33))));
m.y = (m.y+(0.03*Math.sin(((m.time*1.09)+24))));
m.ang = (m.q4*(0.2+(0.1*m.t1)));
m.rad = (m.rad*(0.9+(0.2*m.t2)));
m.r = Math.min(1, Math.max(0, (m.r+(0.1*Math.sin(((m.time*0.417)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.1*Math.sin(((m.time*0.391)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.1*Math.sin(((m.time*0.432)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.1*Math.sin(((m.time*0.457)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.1*Math.sin(((m.time*0.437)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.1*Math.sin(((m.time*0.484)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('x = x + 0.05*sin(time*1.05+33);\n' + 'y = y + 0.03*sin(time*1.09+24);\n' + 'ang = q4*(0.2 + 0.1*t1);\n' + 'rad = rad * (0.9 + 0.2*t2);\n' + 'r = min(1,max(0,r + 0.1*sin(time*0.417 + 1)));\n' + 'g = min(1,max(0,g + 0.1*sin(time*0.391 + 2)));\n' + 'b = min(1,max(0,b + 0.1*sin(time*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.1*sin(time*0.457 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.1*sin(time*0.437 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.1*sin(time*0.484 + 6)));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.8,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 1.88496,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.90529,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.69954,
			x : 0.67,
			y : 0.43,
			ang : 4.20974,
			sides : 50.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.t1 = 0;
m.t2 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['r2','b','g','g2','b2','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.05*Math.sin(((m.time*0.17)+24))));
m.y = (m.y+(0.03*Math.sin(((m.time*0.23)+28))));
m.ang = (m.q4*(0.5+(0.1*m.t1)));
m.rad = (m.rad*(0.9+(0.2*m.t2)));
m.r = Math.min(1, Math.max(0, (m.r+(0.1*Math.sin(((m.time*0.417)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.1*Math.sin(((m.time*0.391)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.1*Math.sin(((m.time*0.432)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.1*Math.sin(((m.time*0.457)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.1*Math.sin(((m.time*0.437)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.1*Math.sin(((m.time*0.484)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('x = x + 0.05*sin(time*0.17+24);\n' + 'y = y + 0.03*sin(time*0.23+28);\n' + 'ang = q4*(0.5 + 0.1*t1);\n' + 'rad = rad * (0.9 + 0.2*t2);\n' + 'r = min(1,max(0,r + 0.1*sin(time*0.417 + 1)));\n' + 'g = min(1,max(0,g + 0.1*sin(time*0.391 + 2)));\n' + 'b = min(1,max(0,b + 0.1*sin(time*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.1*sin(time*0.457 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.1*sin(time*0.437 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.1*sin(time*0.484 + 6)));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.8,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 3.76991,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.81954,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.37003,
			x : 0.67,
			y : 0.43,
			ang : 4.20974,
			sides : 50.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.t1 = 0;
m.t2 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['r2','b','g','g2','b2','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.25*Math.sin(((m.time*0.17)+32))));
m.y = (m.y+(0.23*Math.sin(((m.time*0.13)+12))));
m.ang = (m.q4*(0.2+(0.1*m.t1)));
m.rad = (m.rad*(0.9+(0.2*m.t2)));
m.r = Math.min(1, Math.max(0, (m.r+(0.1*Math.sin(((m.time*0.117)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.1*Math.sin(((m.time*0.191)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.1*Math.sin(((m.time*0.132)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.1*Math.sin(((m.time*0.457)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.1*Math.sin(((m.time*0.437)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.1*Math.sin(((m.time*0.484)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('x = x + 0.25*sin(time*0.17+32);\n' + 'y = y + 0.23*sin(time*0.13+12);\n' + 'ang = q4*(0.2 + 0.1*t1);\n' + 'rad = rad * (0.9 + 0.2*t2);\n' + 'r = min(1,max(0,r + 0.1*sin(time*0.117 + 1)));\n' + 'g = min(1,max(0,g + 0.1*sin(time*0.191 + 2)));\n' + 'b = min(1,max(0,b + 0.1*sin(time*0.132 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.1*sin(time*0.457 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.1*sin(time*0.437 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.1*sin(time*0.484 + 6)));'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = normalize((uv_orig - 0.5));\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = (time * 7.0);\n' + '  uv_1 = (mix (uv_orig, uv, vec2((\n' + '    clamp ((((bass / bass_att) - 0.9) * 13.0), 0.0, 1.0)\n' + '   * 0.3))) + ((\n' + '    (tmpvar_3 * texsize.zw)\n' + '   * \n' + '    cos(((rad * 170.0) - tmpvar_4))\n' + '  ) * 2.0));\n' + '  uv_1 = (uv_1 + ((\n' + '    (vec2(5.0, -5.0) * texsize.zw)\n' + '   * \n' + '    cos(((ang * 30.0) - tmpvar_4))\n' + '  ) * tmpvar_3.yx));\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_pw_main, uv_1);\n' + '  ret_2 = tmpvar_5.xyz;\n' + '  ret_2 = (ret_2 - 0.004);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : ('leafset = 3;'),
	'frame_eqs_str' : ('wave_r = 0.5 + 0.5*sin(1.6*time);\n' + 'wave_g = 0.5 + 0.5*sin(4.1*time);\n' + 'wave_b = -1 + (1-wave_r + 1-wave_g);\n' + 'warp = 0;\n' + 'pfthresh = above(bass_att,pfthresh)*3+(1-above(bass_att,pfthresh))*((pfthresh-1.3)*0.96+1.3);\n' + 'pfdx_r = equal(pfthresh,3)*0.015*sin(5*time)+(1-equal(pfthresh,3))*pfdx_r;\n' + 'pfdy_r = equal(pfthresh,3)*0.015*sin(6*time)+(1-equal(pfthresh,3))*pfdy_r;\n' + 'q1 = wave_r;\n' + 'q2 = wave_g;\n' + 'q3 = wave_b;\n' + 'ob_r = 1-abs(q1)*0.75;\n' + 'ob_g = 1-abs(q2)*0.75;\n' + 'ob_b = 1-abs(q3)*0.75;\n' + 'echo_zoom = echo_zoom + min(max(0.75,50*pfdx_r),1);\n' + 'echo_orient = echo_orient + 16*pfdy_r;\n' + 'dx = dx + 15.1*pfdx_r;\n' + 'dy = dy + 15.1*pfdy_r;\n' + 'cog = ocog+0.005*(bass+bass_att+(bass*bass_att)-2);\n' + 'ocog = below(cog,30000)*cog;\n' + 'q4 = cog;\n' + 'rcog = orcog + 0.5*(rand(100)*0.01);\n' + 'orcog = below(rcog,20000)*rcog;\n' + 'q5 = rcog;\n' + 'ib_size = ib_size + 0.009*treb_att*cos(q4);\n' + 'ob_size = ob_size + 0.009*bass_att*sin(q4);\n' + 'ib_r = 1-abs(q1)*sin(q4);\n' + 'ib_g = 0.75*cos(q4);\n' + 'ib_b = 1-abs(q3)*cos(q5);'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'ladder = abs(sin(1*time));\n' + 'leaf = 5*below(ladder,0.2) + 8*above(ladder,0.2)*below(ladder,0.4) +12*above(ladder,0.4)*below(ladder,0.6) + 18*above(ladder,0.6)*below(ladder,0.8) +24*above(ladder,0.8);\n' + 'leafset = if(equal(thresh,2), leaf, leafset);\n' + 'zoom = zoom + 0.05*(0.75-cos(leafset*rad))*(1-rad);\n' + 'zoom = zoom - abs(0.05*(0.75-cos(4*rad)));\n' + 'zoom = zoom - 0.5*cos(4*q4);'),
};

return pmap;
});
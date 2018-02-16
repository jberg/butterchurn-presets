define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.35,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 5.552,
		echo_alpha : 0.31,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 0.980296,
		b3x : 1.0,
		ib_size : 0.5,
		b2x : 1.0,
		warp : 0.72142,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 1.0,
		mv_b : 0.5,
		echo_zoom : 2.144269,
		ob_size : 0.5,
		b1ed : 0.25,
		wave_smoothing : 0.504,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : -1.0,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 4.1,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 0.5,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.rate = 0;
m.q1 = 0;
m.q2 = 0;
m.bd = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.swi = 0;
m.bl = 0;
m.cm = 0;
m.it = 0;
m.vav = 0;
m.treb_avg = 0;
m.tic = 0;
m.bvb = 0;
m.gv = 0;
m.ra = 0;
m.rb = 0;
m.bass_avg = 0;
m.cma = 0;
m.ul = 0;
m.vm = 0;
m.iter = 0;
m.tin = 0;
m.mid_avg = 0;
m.cha = 0;
m.itar = 0;
m.db = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.bl = 3.8;
m.ul = 7.9;
m.rate = 11.9;
m.cha = 0.01;
m.gv = ifcond(above(m.gv, m.bl), ifcond(below(m.gv, m.ul), ifcond(above(m.fps, m.rate), (m.gv+m.cha), (m.gv-m.cha)), (m.ul-0.1)), (m.bl+0.1));
m.monitor = m.gv;
m.wave_a = 0;
m.tic = Math.min((m.time-m.tin), 1);
m.tin = m.time;
m.ra = 10;
m.treb_avg = (m.tic*((m.treb_avg*(div(1,m.tic)-m.ra))+(m.ra*m.treb)));
m.mid_avg = (m.tic*((m.mid_avg*(div(1,m.tic)-m.ra))+(m.ra*m.mid)));
m.bass_avg = (m.tic*((m.bass_avg*(div(1,m.tic)-m.ra))+(m.ra*m.bass)));
m.rb = 1;
m.vav = (m.tic*((m.vav*(div(1,m.tic)-m.rb))+((m.rb*((m.bass+m.treb)+m.mid))*0.33333)));
m.q1 = m.treb_avg;
m.q2 = m.mid_avg;
m.q3 = m.bass_avg;
m.db = (m.bass-m.bass_avg);
m.it = ((m.it+m.tic)*below(m.it, 1));
m.rb = (0.5*div(1,m.tic));
m.bvb = (m.tic*((m.bass*m.rb)+((div(1,m.tic)-m.rb)*m.bvb)));
m.bd = (m.bass-m.bvb);
m.vm = ((m.vm-m.tic)+m.swi);
m.swi = above((m.bd-m.vm), 0);
m.q4 = (1-m.swi);
m.cm = ifcond((above(m.iter, 30)+equal(m.time, 0)), (rand(3)+1), m.cm);
m.iter = ((m.iter+m.tic)*(1-above(m.iter, 30)));
m.q5 = ifcond(equal(m.cm, 0), 3, m.cm);
m.cma = ifcond((above(m.itar, 5)+equal(m.time, 0)), Math.floor((m.vav*5)), m.cma);
m.itar = ((m.itar+m.tic)*(1-above(m.itar, 5)));
m.q6 = Math.floor((m.vav*5));
m.decay = 0.97;
m.zoom = 1.01;
m.sx = 1;
m.sy = 1;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.warp = m.bass;
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.5033,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 1.0,
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
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.77977,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.15493,
			x : 0.5,
			y : 0.9,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
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
			enabled : 1.0,
			b : 1.0,
			tex_ang : 3.14159,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.999794,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.98608,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = Math.sin(div(m.time,65));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang =sin(time/65) ;'),

		},
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
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.9,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = ((Math.sin(m.time)*0.4)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = sin(time) * .4 + .5;'),

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv_orig);\n' + '  ret_1 = ((tmpvar_2.xyz * vec3(0.97, 1.0, 0.97)) - vec3(0.03, 0.0, 0.03));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uv_orig);\n' + '  ret_1.z = (ret_1.z + ((\n' + '    (tmpvar_3.xyz * scale1)\n' + '   + bias1).z * 0.45));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur3, uv_orig);\n' + '  ret_1.x = (ret_1.x + ((\n' + '    ((tmpvar_3.xyz * scale1) + bias1)\n' + '  .z * 0.05) + (\n' + '    ((tmpvar_4.xyz * scale3) + bias3)\n' + '  .z * 0.05)));\n' + '  ret_1.z = (ret_1.z - ret_1.x);\n' + '   float tmpvar_5;\n' + '  tmpvar_5 = clamp (texture2D (sampler_pw_main, uv_orig).y, 0.0, 1.0);\n' + '  ret_1.y = tmpvar_5;\n' + '  ret_1 = (ret_1 * 0.98);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec3 tmpvar_3;\n' + '  tmpvar_3.z = 0.0;\n' + '  tmpvar_3.xy = texsize.zw;\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = (tmpvar_3 * 2.5);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv + tmpvar_4.xz);\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv - tmpvar_4.xz);\n' + '  tmpvar_7 = texture2D (sampler_blur1, P_8);\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv + tmpvar_4.zy);\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (uv - tmpvar_4.zy);\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '  ret_1 = (ret_1 * 0.5);\n' + '  ret_1 = (ret_1 + (vec3(3.4, 2.38, 1.02) * (\n' + '    dot (((tmpvar_5.xyz * scale1) + bias1), vec3(0.32, 0.49, 0.29))\n' + '   - \n' + '    dot (((tmpvar_7.xyz * scale1) + bias1), vec3(0.32, 0.49, 0.29))\n' + '  )));\n' + '  ret_1 = (ret_1 + (vec3(0.68, 1.7, 2.38) * (\n' + '    dot (((tmpvar_9.xyz * scale1) + bias1), vec3(0.32, 0.49, 0.29))\n' + '   - \n' + '    dot (((tmpvar_11.xyz * scale1) + bias1), vec3(0.32, 0.49, 0.29))\n' + '  )));\n' + '  ret_1 = (ret_1 * 1.5);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13.w = 1.0;\n' + '  tmpvar_13.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_13;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('bl = 3.8;\n' + 'ul = 7.9;\n' + 'rate = 11.9;\n' + 'cha = .01;\n' + 'gv = if(above(gv,bl),  if(below(gv,ul),  if(above(fps,rate),gv + cha,gv - cha),  ul-.1),bl+.1);\n' + 'monitor = gv;\n' + 'wave_a = 0;\n' + 'tic = min(time - tin,1);\n' + 'tin = time;\n' + 'ra = 10;\n' + 'treb_avg = tic*(treb_avg*(1/tic - ra) + ra*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - ra) + ra*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - ra) + ra*bass);\n' + 'rb = 1;\n' + 'vav = tic*(vav*(1/tic - rb) + rb*(bass+treb+mid)*.33333);\n' + 'q1 = treb_avg;\n' + 'q2 = mid_avg;\n' + 'q3 = bass_avg;\n' + 'db = bass - bass_avg;\n' + 'it = (it + tic)*below(it,1);\n' + 'rb = .5*(1/tic);\n' + 'bvb = tic*(bass*rb + (1/tic-rb)*bvb);\n' + 'bd = bass - bvb;\n' + 'vm = vm - tic + swi;\n' + 'swi = above(bd - vm,0);\n' + 'q4 = 1-swi;\n' + 'cm = if(above(iter,30) + equal(time,0),rand(3) + 1,cm);\n' + 'iter = (iter + tic)*(1-above(iter,30));\n' + 'q5 = if(equal(cm,0),3,cm);\n' + 'cma = if(above(itar,5) + equal(time,0),int(vav*5),cma);\n' + 'itar = (itar + tic)*(1-above(itar,5));\n' + 'q6 = int(vav*5);\n' + 'decay=0.97;\n' + 'zoom=1.01;\n' + 'sx=1;\n' + 'sy=1;'),
	'pixel_eqs_str' : ('warp = bass;'),
};

return pmap;
});
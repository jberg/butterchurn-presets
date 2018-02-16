define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.7,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 0.248,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.0,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.8167,
		ob_r : 0.0,
		sy : 1.7987,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.1046,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.2,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.75,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.0,
		wave_y : 0.0,
		zoom : 0.5647,
		solarize : 1.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.715,
		wave_a : 1.17,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q5 = 0;
m.vol = 0;
m.bass_thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.91)+1.3)));
m.vol = (0.1*((m.vol*9)+(((m.bass_att+m.mid_att)+m.treb_att)*0.333333)));
m.q5 = m.vol;
m.zoom = (m.zoom-(m.vol*0.01));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
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
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.006,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.1,
			r : 0.0,
			border_g : 1.0,
			rad : 0.01,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 20.0,
			border_r : 1.0,
			num_inst : 410.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.size = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.m5 = 0;
m.nc = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.zs = 0;
m.x2 = 0;
m.y3 = 0;
m.ys = 0;
m.x3 = 0;
m.xs = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.q1 = div(m.time,5);
m.q2 = div(m.time,6);
m.rad = (0.005+div(m.bass,90));
m.m5 = div(m.bass_att,70);
m.b2 = ((m.treb*0.7)-div(m.bass,2));
m.r = div(m.instance,m.num_inst);
m.g = Math.abs((div(m.treb_att,5)-m.bass));
m.size = ((0.3+div(m.bass_att,300))-((1-m.q5)*0.1));
m.nc = sqrt(m.num_inst);
m.xs = (Math.sin(div((6.28*mod(m.instance,m.nc)),m.nc))*Math.sin(div((3.14*Math.floor(div(m.instance,m.nc))),m.nc)));
m.ys = (Math.cos(div((6.28*mod(m.instance,m.nc)),m.nc))*Math.sin(div((3.14*Math.floor(div(m.instance,m.nc))),m.nc)));
m.zs = Math.cos(div((3.14*Math.floor(div(m.instance,m.nc))),m.nc));
m.y1 = ((m.ys*Math.cos(m.q1))-(m.zs*Math.sin(m.q1)));
m.z1 = ((m.ys*Math.sin(m.q1))+(m.zs*Math.cos(m.q1)));
m.x1 = ((m.z1*Math.sin(m.q2))+(m.xs*Math.cos(m.q2)));
m.z2 = ((m.z1*Math.cos(m.q2))-(m.xs*Math.sin(m.q2)));
m.x2 = ((m.x1*Math.cos(m.q3))-(m.y1*Math.sin(m.q3)));
m.y2 = ((m.y1*Math.cos(m.q3))+(m.x1*Math.sin(m.q3)));
m.x3 = (m.x2+m.q4);
m.y3 = m.y2;
m.z3 = (m.z2+m.m5);
m.x = (0.5+(m.size*div(m.x3,(1+(m.z3*m.size)))));
m.y = (0.5+(m.size*div(m.y3,(1+(m.z3*m.size)))));
m.a = below(m.z3, 0);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('q1 = time/5;\n' + 'q2 = time/6;\n' + 'rad = 0.005+bass/90;\n' + 'm5 = bass_att/70;\n' + 'b2 = treb*0.7-bass/2;\n' + 'r = instance/num_inst;\n' + 'g = abs(treb_att/5-bass);\n' + 'size = 0.3+bass_att/300-(1-q5)*0.1;\n' + 'nc = sqrt(num_inst);\n' + 'xs=sin(6.28*(instance%nc)/nc)*sin(3.14*int(instance/nc)/nc);\n' + 'ys=cos(6.28*(instance%nc)/nc)*sin(3.14*int(instance/nc)/nc);\n' + 'zs=cos(3.14*int(instance/nc)/nc);\n' + 'y1 = ys*cos(q1)-zs*sin(q1);\n' + 'z1 = ys*sin(q1)+zs*cos(q1);\n' + 'x1 = z1*sin(q2)+xs*cos(q2);\n' + 'z2 = z1*cos(q2)-xs*sin(q2);\n' + 'x2 = x1*cos(q3)-y1*sin(q3);\n' + 'y2 = y1*cos(q3)+x1*sin(q3);\n' + 'x3 = x2+q4;\n' + 'y3 = y2;\n' + 'z3 = z2+m5;\n' + 'x = 0.5 + size*(x3/(1+z3*size));\n' + 'y = 0.5 + size*(y3/(1+z3*size));\n' + 'a=below(z3,0);'),

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
	'warp' : ('shader_body {\n' + '   vec3 argebe_1;\n' + '   vec2 uv2_2;\n' + '   vec3 ret_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (1.0 - uv);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = fract(tmpvar_4);\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_fc_main, tmpvar_5).xyz;\n' + '  argebe_1 = tmpvar_6;\n' + '  uv2_2 = (tmpvar_4 * (1.0 - (argebe_1.zy * 0.24)));\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_main, uv);\n' + '  ret_3 = tmpvar_7.xyz;\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_main, uv2_2);\n' + '  ret_3 = (ret_3 + (tmpvar_8.xyz * 0.9));\n' + '  ret_3 = (ret_3 * 0.5);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9.w = 1.0;\n' + '  tmpvar_9.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_9;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uv);\n' + '  ret_1 = (ret_1 + ((tmpvar_3.xyz * scale1) + bias1));\n' + '  ret_1 = (ret_1 * 1.49);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.91+1.3);\n' + 'vol = 0.1*(vol*9 + (bass_att+mid_att+treb_att)*0.333333);\n' + 'q5 = vol;\n' + 'zoom = zoom - vol*0.01;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
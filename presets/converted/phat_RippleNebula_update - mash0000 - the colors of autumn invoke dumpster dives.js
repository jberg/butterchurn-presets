define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.77,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 0.01,
		brighten : 1.0,
		mv_y : 0.0,
		wave_scale : 100.0,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.00183,
		b3x : 1.0,
		ib_size : 0.035,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.0,
		ib_r : 1.0,
		mv_b : 0.9,
		echo_zoom : 1.222,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 0.39,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.7,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.98,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.8,
		ib_a : 0.1,
		wave_b : 0.0,
		ib_b : 0.3,
		mv_r : 0.36,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.88,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tmmod = 0;
m.nx = 0;
m.stm = 0;
m.flip = 0;
m.tmm = 0;
m.mir = 0;
m.tm = 0;
m.mv_x = 64;
m.mv_y = 48;
m.nut = 0;
m.stp = 0;
m.stq = 0;
m.rtp = 0;
m.rtq = 0;
m.wvr = 0;
m.decay = 0;
m.dcsp = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.999;
m.ib_b = (Math.sin(div(m.time,20))+0.5);
m.ib_g = ((Math.cos(div(m.time,15))*0.3)+(0.5*0.5));
m.ib_r = ((Math.sin(div(m.time,17))*0.3)+(0.5*0.5));
m.flip = (m.flip+(0.1*below(m.flip, 1.1)));
m.q1 = m.flip;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.tmmod = Math.sin(div(m.time,1));
m.tm = 0.24;
m.stm = Math.sin(m.tm);
m.mir = (0.45+m.q1);
m.nx = ifcond(above(m.x, m.mir), (-(m.x-m.mir)+m.mir), m.x);
m.warp = ((1+div(((m.bass+m.mid)+m.treb),3))+ifcond(above(m.rad, (0.56+(0.05*Math.sin(m.tmm)))), (0.5*Math.sin(m.rad)), 0));
m.zoom = (-m.stm*(m.rad+0.01));
m.sx = ifcond(above(m.x, m.mir), (-Math.sin(div(m.tm,5))+(3*m.rad)), (Math.sin(div(m.tm,5))+(3*m.rad)));
m.sy = (Math.cos(div(m.tm,5))+(3*(m.rad+0.1)));
m.rot = Math.sin(div(m.time,3));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.7,
			scaling : 100.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.9,
			thick : 1.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (Math.cos(m.time)*0.1);
m.y = (Math.sin(m.time)*0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=cos(time)*0.1;\n' + 'y=sin(time)*0.1;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 81.95444,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wave_x = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.wave_x = 1;
		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('wave_x=1;'),
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
			a : 0.05,
			enabled : 1.0,
			b : 0.4,
			tex_ang : 4.08407,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.1,
			tex_zoom : 0.15528,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 0.7,
			border_g : 1.0,
			rad : 100.0,
			x : 0.5,
			y : 0.5,
			ang : 2.51327,
			sides : 16.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.var = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (Math.sin(m.time)*6);
m.var = (0.12-(above(m.bass, 0.8)*0.2));
m.x = ((Math.sin(m.time)*m.var)+0.5);
m.y = ((Math.cos(m.time)*m.var)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=sin(time)*6;\n' + 'var=0.12-(above(bass,0.8)*0.2);\n' + 'x=sin(time)*var+.5;\n' + 'y=cos(time)*var+.5;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 6.28319,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 27.42932,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.6,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.7214,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.6,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (Math.cos(m.time)*6);
m.sides = (20-(div(((m.bass+m.mid)+m.treb),3)*15));
m.rad = (0.721+(div(((m.bass+m.mid)+m.treb),3)*-0.2));
m.x = ((Math.cos(m.time)*0.3)+0.5);
m.y = ((Math.sin(m.time)*0.3)+0.5);
m.r = (((Math.sin(div(m.time,2))*0.5)+0.5)+0.7);
m.g = (((Math.cos(div(m.time,2))*0.5)+0.5)+0.3);
m.b = (((Math.sin(div(m.time,2))*0.5)+0.5)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=cos(time)*6;\n' + 'sides=20-((bass+mid+treb)/3)*15;\n' + 'rad=.721+(((bass+mid+treb)/3)*-0.2);\n' + 'x=cos(time)*0.3+0.5;\n' + 'y=sin(time)*0.3+0.5;\n' + 'r=(sin(time/2)*0.5+0.5)+0.7;\n' + 'g=(cos(time/2)*0.5+0.5)+0.3;\n' + 'b=(sin(time/2)*0.5+0.5)+0.5;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 6.28319,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.55044,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.20929,
			x : 0.5,
			y : 0.5,
			ang : 1.25664,
			sides : 25.0,
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
			tex_ang : 0.62832,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.7273,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.96666,
			x : 0.5,
			y : 0.5,
			ang : 0.6283,
			sides : 20.0,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur2, uv);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv);\n' + '  ret_1 = (ret_1 + ((\n' + '    (ret_1 - mix (((tmpvar_3.xyz * scale2) + bias2), ((tmpvar_4.xyz * scale1) + bias1), uv_orig.xxx))\n' + '   * 0.3) - (0.00666 * \n' + '    (((bass + treb) + mid) - 0.5)\n' + '  )));\n' + '  ret_1 = (ret_1 * 0.95);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 0.4)) + rand_frame.xy);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_noise_lq, tmpvar_5);\n' + '  ret_1 = (ret_1 + ((\n' + '    ((tmpvar_6.xyz - 0.5) / 256.0)\n' + '   * 122.0) * clamp (\n' + '    (treb_att - 1.0)\n' + '  , 0.0, 1.0)));\n' + '  ret_1 = mix (ret_1, vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))), vec3(0.2, 0.2, 0.2));\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=0.999;\n' + 'ib_b=(sin(time/20))+0.5;\n' + 'ib_g=(cos(time/15)*0.3)+0.5*0.5;\n' + 'ib_r=(sin(time/17)*0.3)+0.5*0.5;\n' + 'flip=flip+0.1 * below(flip, 1.1);\n' + 'q1=flip;'),
	'pixel_eqs_str' : ('tmmod=sin(time/1);\n' + 'tm=0.24;\n' + 'stm=sin(tm);\n' + 'mir=0.45 + q1 ;\n' + 'nx=if( above(x,mir), -(x-mir) + mir, x);\n' + 'warp = 1+((bass+mid+treb)/3) + if (above(rad,0.56 + 0.05*sin(tmm)), 0.5*(sin(rad)), 0);\n' + 'zoom= -stm*(rad+0.01);\n' + 'sx=if( above(x,mir), -sin(tm/5)+3*rad, sin(tm/5)+3*rad);\n' + 'sy=cos(tm/5)+3*(rad+0.1);\n' + 'rot=sin(time/3);'),
};

return pmap;
});
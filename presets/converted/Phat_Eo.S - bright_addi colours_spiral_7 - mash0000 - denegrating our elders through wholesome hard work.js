define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 25.6,
		warpscale : 1.766,
		brighten : 0.0,
		mv_y : 14.4,
		wave_scale : 0.653,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 0.88745,
		ob_r : 0.0,
		sy : 0.88745,
		b3x : 1.0,
		ib_size : 0.005,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.00016,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.015,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 0.01,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 1.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.15,
		mv_l : 1.0,
		invert : 1.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.004,
		ob_g : 0.15,
		ib_a : 1.0,
		wave_b : 0.1,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.5,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q5 = 0;
m.inv_rad = 0;
m.rays = 0;
m.tm = 0;
m.rads = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = ((m.wave_r+(9.35*Math.sin((0.4*m.time))))+(0.16*Math.sin((0.5*m.time))));
m.wave_g = ((m.wave_g+(5.36*Math.sin((0.7*m.time))))+(0.15*Math.sin((0.11*m.time))));
m.wave_b = ((m.wave_b+(3.37*Math.sin((0.84*m.time))))+(0.15*Math.sin((0.3*m.time))));
m.warp = Math.sin(m.time);
m.ob_r = m.wave_r;
m.ob_g = m.wave_g;
m.ob_b = m.wave_b;
m.ib_r = m.wave_g;
m.ib_b = m.wave_r;
m.ib_g = m.wave_b;
m.sy = 0.982;
m.sx = m.sy;
		m.rkeys = ['sx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.inv_rad = (2.2-m.rad);
m.tm = (m.time+((m.inv_rad*4)*m.bass_att));
m.rays = ((Math.sin(((m.rad*2)+m.tm))*0.5)+0.5);
m.rads = ((Math.cos(((m.ang*4)+m.tm))*0.5)+0.5);
m.zoom = (1+(pow(m.rays, 64)*0.037));
m.zoom = (m.zoom+(pow(m.rads, 32)*(m.treb_att*0.04)));
m.sx = (m.sx+(pow(m.rays, 10)*(m.mid_att*0.1)));
m.q5 = m.rays;
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
			tex_ang : 0.50266,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.58043,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.4817,
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
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.69892,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.20321,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.5,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.3,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.12622,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.4,
			a2 : 1.0,
			r : 0.7,
			border_g : 1.0,
			rad : 0.98609,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.tm2 = 0;
m.tm = 0;
m.tm3 = 0;

			m.rkeys = ['tm3','tm2','tm'];
			return m;
		},
		'frame_eqs' : function(m) {
m.tm = (m.tm+pow((m.bass*0.15), 2));
m.tm2 = (m.tm2+pow((m.treb*0.15), 2));
m.tm3 = (m.tm3+pow((m.mid*0.15), 2));
m.ang = (Math.sin(div(m.tm2,3))*1.4);
m.x = ((Math.sin(div(m.tm,1.3))*0.2)+0.5);
m.y = ((Math.sin(div(m.tm3,1.3))*0.1)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tm=tm+  pow( (bass*0.15),2 );\n' + 'tm2=tm2+ pow( (treb*0.15),2 );\n' + 'tm3=tm3+ pow( (mid*0.15),2 );\n' + 'ang=sin(tm2/3)*1.4;\n' + 'x=sin(tm/1.3) * 0.2 + 0.5;\n' + 'y=sin(tm3/1.3) * 0.1 + 0.5;'),

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
			tex_zoom : 0.84438,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.39872,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 13.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = ((Math.sin(m.time)*0.3)+0.5);
m.y = ((Math.cos(m.time)*0.4)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=sin(time)* 0.3 + 0.5;\n' + 'y=cos(time)* 0.4 + 0.5;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 noise_1;\n' + '   vec3 ret_2;\n' + '   vec2 P_3;\n' + '  P_3 = (((\n' + '    (texsize.xy * texsize_noise_lq.zw)\n' + '  .x * uv) / 2.0) + _qf.z);\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = (texture2D (sampler_noise_lq, P_3) + 1.0).xyz;\n' + '  noise_1 = tmpvar_4;\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_blur1, uv);\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = (((tmpvar_5.xyz * scale1) + bias1) - 0.3);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + (tmpvar_6 * 0.01).xy);\n' + '  tmpvar_7 = texture2D (sampler_main, P_8);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9.x = (0.3 * tmpvar_6.x);\n' + '  tmpvar_9.y = tmpvar_6.y;\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = ((uv / 4.0) + (0.4 * tmpvar_9));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '  ret_2 = ((-0.4 * (\n' + '    ((tmpvar_10.xyz * scale1) + bias1)\n' + '   - \n' + '    (noise_1 * 0.1)\n' + '  )) + (tmpvar_7.xyz + (noise_1 * 0.1)));\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = (1.0 - ((0.01 * _qg.w) * (_qg.w * rad)));\n' + '  ret_2 = (ret_2 * (0.98 * (tmpvar_12 * tmpvar_12)));\n' + '  ret_2 = (ret_2 - 0.04);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13.w = 1.0;\n' + '  tmpvar_13.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_13;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 9.35*sin(0.4*time) + 0.16*sin(0.5*time);\n' + 'wave_g = wave_g + 5.36*sin(0.7*time) + 0.15*sin(0.11*time);\n' + 'wave_b = wave_b + 3.37*sin(0.84*time) + 0.15*sin(0.3*time);\n' + 'warp =sin(time);\n' + 'ob_r = wave_r;\n' + 'ob_g = wave_g;\n' + 'ob_b = wave_b;\n' + 'ib_r = wave_g;\n' + 'ib_b = wave_r;\n' + 'ib_g = wave_b;\n' + 'sy=.982;\n' + 'sx=sy;'),
	'pixel_eqs_str' : ('inv_rad=(2.2-rad);\n' + 'tm=time + (inv_rad*4 * bass_att );\n' + 'rays=sin(rad*2 + tm)*0.5 + 0.5;\n' + 'rads=cos(ang*4 + tm)*0.5+0.5;\n' + 'zoom = 1 + pow(rays,64)*0.037;\n' + 'zoom= zoom + pow(rads,32)*(treb_att*0.04);\n' + 'sx=sx + pow(rays,10) * (mid_att*0.1);\n' + 'q5=rays;'),
};

return pmap;
});
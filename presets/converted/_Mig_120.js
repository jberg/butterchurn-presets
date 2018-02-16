define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 4.778,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 0.99984,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99968,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.400*((0.60*Math.sin((0.933*m.time)))+(0.40*Math.sin((1.045*m.time))))));
m.wave_g = (m.wave_g+(0.100*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((0.956*m.time))))));
m.wave_b = (m.wave_b+(0.100*((0.60*Math.sin((0.910*m.time)))+(0.40*Math.sin((0.920*m.time))))));
m.mv_r = m.wave_r;
m.mv_b = m.wave_b;
m.mv_g = m.wave_g;
m.q1 = (0.05*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps));
m.mv_a = ifcond(above((m.bass-1.2), 1), 1, (m.bass-1.2));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1.01+((m.rad*0.15)*m.q1));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.zang = 0;
m.ab = 0;
m.yang = 0;
m.xang = 0;
m.ag = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.vb = 0;
m.fov = 0;
m.mz = 0;
m.dis = 0;
m.tic = 0;
m.ar = 0;
m.vg = 0;
m.vol = 0;
m.ti = 0;
m.vr = 0;
m.tir = 0;
m.sp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tic = Math.min((m.time-m.tir), 0.1);
m.tir = m.time;
m.ti = ((m.ti+(m.tic*0.5))+((below(((m.vr+m.vg)+m.vb), 0.4)*m.tic)*8));
m.vr = (0.75+(0.25*Math.sin(((m.ti*1.132)+1))));
m.vg = (0.75+(0.25*Math.sin(((m.ti*1.121)+1))));
m.vb = (0.75+(0.25*Math.sin(((m.ti*1.187)+1))));
m.ar = m.vr;
m.ag = m.vg;
m.ab = m.vb;
		return m;
	},
		'point_eqs' : function(m) {
m.sp = (m.sample*10);
m.ti = m.time;
m.ox = ((((rand(1001)*0.001)+(rand(1001)*0.001))-(rand(1001)*0.001))-(rand(1001)*0.001));
m.oy = ((((rand(1001)*0.001)+(rand(1001)*0.001))-(rand(1001)*0.001))-(rand(1001)*0.001));
m.oz = ((((rand(1001)*0.001)+(rand(1001)*0.001))-(rand(1001)*0.001))-(rand(1001)*0.001));
m.dis = pow((((m.ox*m.ox)+(m.oy*m.oy))+(m.oz*m.oz)), 0.5);
m.vol = ((m.value1+m.value2)*2);
m.ox = ((sign(m.ox)*pow(m.ox, 4))*m.vol);
m.oy = ((sign(m.oy)*pow(m.oy, 4))*m.vol);
m.oz = ((sign(m.oz)*pow(m.oz, 4))*m.vol);
m.a = (((3.464-m.dis)*0.57735)*0.3);
m.xang = (m.time*0.154);
m.yang = (m.time*0.103);
m.zang = (m.time*0.118);
m.fov = 0.5;
m.mx = ((m.ox*Math.cos(m.yang))+(m.oz*Math.sin(m.yang)));
m.mz = ((-m.ox*Math.sin(m.yang))+(m.oz*Math.cos(m.yang)));
m.ox = m.mx;
m.oz = m.mz;
m.mx = ((m.ox*Math.cos(m.zang))-(m.oy*Math.sin(m.zang)));
m.my = ((m.ox*Math.sin(m.zang))+(m.oy*Math.cos(m.zang)));
m.ox = m.mx;
m.oy = m.my;
m.my = ((m.oy*Math.cos(m.xang))-(m.oz*Math.sin(m.xang)));
m.mz = ((m.oy*Math.sin(m.xang))+(m.oz*Math.cos(m.xang)));
m.oy = m.my;
m.oz = m.mz;
m.oz = (((m.oz-(Math.floor((m.oz*0.2))*5))-5)*2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tic = min(time-tir,.1);\n' + 'tir = time;\n' + 'ti = ti + tic*.5 + below(vr+vg+vb,.4)*tic*8;\n' + 'vr = .75 + .25*sin(ti*1.132 + 1);\n' + 'vg = .75 + .25*sin(ti*1.121 + 1);\n' + 'vb = .75 + .25*sin(ti*1.187 + 1);\n' + 'ar=vr;\n' + 'ag=vg;\n' + 'ab=vb;'),
		'point_eqs_str' : ('sp = sample*10;\n' + 'ti = time;\n' + 'ox = (rand(1001)*.001 + rand(1001)*.001 - rand(1001)*.001 - rand(1001)*.001);\n' + 'oy = (rand(1001)*.001 + rand(1001)*.001 - rand(1001)*.001 - rand(1001)*.001);\n' + 'oz = (rand(1001)*.001 + rand(1001)*.001 - rand(1001)*.001 - rand(1001)*.001);\n' + 'dis = pow(ox*ox + oy*oy + oz*oz,.5);\n' + 'vol = (value1+value2)*2;\n' + 'ox = sign(ox)*pow(ox,4)*vol;\n' + 'oy = sign(oy)*pow(oy,4)*vol;\n' + 'oz = sign(oz)*pow(oz,4)*vol;\n' + 'a = (3.464 - dis)*.57735*.3;\n' + 'xang = time*.154;\n' + 'yang = time*.103;\n' + 'zang = time*.118;\n' + 'fov = .5;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = (oz - int(oz*.2)*5 - 5)*2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

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
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.1,
			r : 1.0,
			border_g : 1.0,
			rad : 0.36457,
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
			r2 : 1.0,
			a : 0.2,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.03697,
			x : 0.36,
			y : 0.5,
			ang : 0.0,
			sides : 64.0,
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
	'warp' : ('shader_body {\n' + '   vec4 N_1;\n' + '   vec3 ret_2;\n' + '   vec2 P_3;\n' + '  P_3 = (rand_frame.xy + ((uv * texsize_noise_lq.zw) * texsize.xy));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = ((texture2D (sampler_noise_lq, P_3) * 2.0) - 1.0);\n' + '  N_1 = tmpvar_4;\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv + ((N_1.zw * texsize.zw) * 0.5));\n' + '  tmpvar_5 = texture2D (sampler_pw_main, P_6);\n' + '  ret_2 = tmpvar_5.xyz;\n' + '  ret_2 = (ret_2 + ((0.59 - \n' + '    (0.2 * rad)\n' + '  ) * N_1.xyz));\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = clamp (((\n' + '    (ret_2 - 0.5)\n' + '   * 3.0) + 0.25), 0.0, 1.0);\n' + '  ret_2.x = tmpvar_7.x;\n' + '  ret_2.yz = tmpvar_7.xx;\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.400*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );\n' + 'wave_g = wave_g + 0.100*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );\n' + 'wave_b = wave_b + 0.100*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );\n' + 'mv_r = wave_r;\n' + 'mv_b = wave_b;\n' + 'mv_g = wave_g;\n' + 'q1 = 0.05*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'mv_a = if(above(bass-1.2,1),1,bass-1.2);'),
	'pixel_eqs_str' : ('zoom = 1.01 + rad*0.15*q1;'),
};

return pmap;
});
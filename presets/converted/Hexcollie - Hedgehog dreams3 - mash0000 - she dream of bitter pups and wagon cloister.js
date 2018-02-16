define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.4,
		ib_g : 0.34,
		mv_x : 64.0,
		warpscale : 3.928,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.012,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.029,
		b2x : 1.0,
		warp : 1.77101,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 2.1,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.34,
		mv_b : 0.0,
		echo_zoom : 2.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 0.335,
		wave_dots : 1.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.961,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.5,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.22,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.1,
		wave_b : 0.3,
		ib_b : 0.34,
		mv_r : 0.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.blah = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_x = (m.wave_x+(0.2900*((0.60*Math.sin((2.121*m.time)))+(0.40*Math.sin((1.621*m.time))))));
m.wave_y = (m.wave_y+(0.2900*((0.60*Math.sin((1.742*m.time)))+(0.40*Math.sin((2.322*m.time))))));
m.wave_r = (m.wave_r+(0.350*((0.60*Math.sin((0.823*m.time)))+(0.40*Math.sin((0.916*m.time))))));
m.wave_g = (m.wave_g+(0.350*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((1.023*m.time))))));
m.wave_b = (m.wave_b+(0.350*((0.60*Math.sin((0.808*m.time)))+(0.40*Math.sin((0.949*m.time))))));
m.blah = div(0.5,((m.wave_r+m.wave_g)+m.wave_b));
m.wave_r = (m.wave_r*m.blah);
m.wave_g = (m.wave_g*m.blah);
m.wave_b = (m.wave_b*m.blah);
m.rot = (m.rot+(0.12*((0.60*Math.sin((0.21*m.time)))+(0.40*Math.sin((0.339*m.time))))));
m.cx = (m.cx+(0.30*((0.60*Math.sin((0.374*m.time)))+(0.14*Math.sin((0.194*m.time))))));
m.cy = (m.cy+(0.37*((0.60*Math.sin((0.274*m.time)))+(0.10*Math.sin((0.394*m.time))))));
m.ib_r = (m.ib_r+(0.2*Math.sin((m.time*0.5413))));
m.ib_g = (m.ib_g+(0.2*Math.sin((m.time*0.6459))));
m.ib_b = (m.ib_b+(0.2*Math.sin((m.time*0.7354))));
m.blah = (div(0.4,((m.ib_r+m.ib_g)+m.ib_b))*3);
m.ib_r = (m.ib_r*m.blah);
m.ib_g = (m.ib_g*m.blah);
m.ib_b = (m.ib_b*m.blah);
m.dx = (0.01*Math.cos(((m.time*0.27934)+5)));
m.dy = (0.01*Math.sin(((m.time*0.23142)+2)));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.2,
			enabled : 1.0,
			b : 1.0,
			g : 0.28,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.1,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.cc = 0;
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.cc_a = 0;
m.cc_b = 0;
m.bias_i = 0;
m.cc_ad_a = 0;
m.cc_ad_b = 0;
m.sang = 0;
m.n = 0;
m.cc_int = 0;
m.cc_ramp = 0;
m.zp = 0;
m.cang = 0;
m.yp = 0;
m.zq = 0;
m.ang2 = 0;
m.xp = 0;
m.yq = 0;
m.pi2 = 0;
m.pi = 0;
m.bias = 0;
m.xq = 0;
m.ang = 0;
m.ys = 0;
m.phs = 0;
m.xs = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t2 = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = (m.time*13);
m.t2 = ((Math.sin((m.time*3))*0.5)+0.5);
m.t2 = ((m.t2*0.3)+0.1);
m.t2 = ((m.q2*0.003)+0.06);
m.t3 = m.q1;
m.t4 = div(m.time,8);
m.t5 = ((Math.sin(div(m.time,4))*0.5)+0.5);
m.t5 = ((m.t5*17)+1.3);
		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.pi = 3.1415;
m.pi2 = 6.283;
m.phs = (m.t1+(m.sample*9));
m.bias = m.t5;
m.bias_i = (m.bias-1);
m.cc = div(m.phs,3);
m.cc_int = Math.floor(m.cc);
m.cc_ramp = (m.cc-m.cc_int);
m.cc_ad_a = div(((m.cc_ramp*m.bias)-1),m.bias_i);
m.cc_ad_a = ifcond(below(m.cc_ad_a, 0), 0, m.cc_ad_a);
m.cc_ad_b = (m.cc_ramp*m.bias);
m.cc_ad_b = ifcond(above(m.cc_ad_b, 1), 1, m.cc_ad_b);
m.cc_a = (m.cc_ad_a+m.cc_int);
m.cc_b = (m.cc_ad_b+m.cc_int);
m.xp = (m.t2*above(m.cc_ad_a, 0));
m.yp = 1;
m.zp = 0;
m.ang = ((m.cc_a*6.283)*16);
m.sang = Math.sin(m.ang);
m.cang = Math.cos(m.ang);
m.xq = ((m.sang*m.xp)+(m.cang*m.zp));
m.yq = m.yp;
m.zq = ((m.cang*m.xp)-(m.sang*m.zp));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang2 = (m.cc_b+m.t4);
m.sang = Math.sin(m.ang2);
m.cang = Math.cos(m.ang2);
m.xq = m.xp;
m.yq = ((m.sang*m.yp)+(m.cang*m.zp));
m.zq = ((m.cang*m.yp)-(m.sang*m.zp));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang2 = ((m.cc_b*3.13)+m.t4);
m.sang = Math.sin(m.ang2);
m.cang = Math.cos(m.ang2);
m.xq = ((m.sang*m.xp)+(m.cang*m.yp));
m.yq = ((m.cang*m.xp)-(m.sang*m.yp));
m.zq = m.zp;
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.ang2 = ((m.cc_b*1.43)+m.t4);
m.sang = Math.sin(m.ang2);
m.cang = Math.cos(m.ang2);
m.xq = ((m.sang*m.xp)+(m.cang*m.zp));
m.yq = m.yp;
m.zq = ((m.cang*m.xp)-(m.sang*m.zp));
m.xp = m.xq;
m.yp = m.yq;
m.zp = m.zq;
m.zp = (m.zp+3.1);
m.xs = (div(m.xp,m.zp)+0.5);
m.ys = ((div(m.yp,m.zp)*1.333)+0.5);
m.x = m.xs;
m.y = m.ys;
		return m;
	},
		'init_eqs_str' : ('t2 = 0;'),
		'frame_eqs_str' : ('t1 = time * 13;\n' + 't2 = sin(time*3) * 0.5 + 0.5;\n' + 't2 = t2 * 0.3 + 0.1;\n' + 't2= q2 * 0.003 + 0.06;\n' + 't3= q1;\n' + 't4 = time/8;\n' + 't5 = sin( time / 4 ) * 0.5 + 0.5;\n' + 't5 = t5 * 17 + 1.3;'),
		'point_eqs_str' : ('n = sample*6.283;\n' + 'pi = 3.1415;\n' + 'pi2 = 6.283;\n' + 'phs = t1 + sample*9;\n' + 'bias = t5;\n' + 'bias_i = bias - 1;\n' + 'cc = phs / 3;\n' + 'cc_int = int(cc);\n' + 'cc_ramp = cc - cc_int;\n' + 'cc_ad_a = (cc_ramp * bias - 1) / bias_i;\n' + 'cc_ad_a = if( below(cc_ad_a,0) , 0 , cc_ad_a );\n' + 'cc_ad_b = cc_ramp * bias;\n' + 'cc_ad_b = if( above(cc_ad_b,1) , 1 , cc_ad_b );\n' + 'cc_a = cc_ad_a + cc_int;\n' + 'cc_b = (cc_ad_b + cc_int) ;\n' + 'xp = t2 * above(cc_ad_a , 0);\n' + 'yp = 1;\n' + 'zp = 0;\n' + 'ang = cc_a * 6.283 * 16;\n' + 'sang = sin(ang) ;\n' + ' cang = cos(ang);\n' + 'xq = sang*xp + cang*zp;\n' + 'yq = yp;\n' + 'zq = cang*xp - sang*zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang2 = cc_b + t4;\n' + 'sang = sin(ang2) ;\n' + ' cang = cos(ang2);\n' + 'xq = xp;\n' + 'yq = sang*yp + cang*zp;\n' + 'zq = cang*yp - sang*zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang2 = cc_b * 3.13 + t4;\n' + 'sang = sin(ang2) ;\n' + ' cang = cos(ang2);\n' + 'xq = sang*xp + cang*yp;\n' + 'yq = cang*xp - sang*yp;\n' + 'zq = zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'ang2 = cc_b * 1.43 + t4;\n' + 'sang = sin(ang2) ;\n' + ' cang = cos(ang2);\n' + 'xq = sang*xp + cang*zp;\n' + 'yq = yp;\n' + 'zq = cang*xp - sang*zp;\n' + 'xp=xq;\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'zp = zp+3.1;\n' + 'xs = xp/zp + 0.5;\n' + 'ys = yp/zp * 1.333 + 0.5;\n' + 'x=xs;\n' + 'y=ys;'),

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
			r2 : 0.6,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.7,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
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
			r2 : 0.6,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.7,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
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
			r2 : 0.6,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.7,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
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
			r2 : 0.5,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.7,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur2, uv);\n' + '  ret_1 = (ret_1 + ((ret_1 - \n' + '    ((tmpvar_3.xyz * scale2) + bias2)\n' + '  ) * 0.3));\n' + '  ret_1 = (ret_1 * 0.9);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 0.4)) + rand_frame.xy);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_noise_lq, tmpvar_4);\n' + '  ret_1 = (ret_1 + ((\n' + '    ((tmpvar_5.xyz - 0.5) / 256.0)\n' + '   * 122.0) * clamp (\n' + '    (treb_att - 1.0)\n' + '  , 0.0, 1.0)));\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = mix (ret_1, vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))), vec3(0.2, 0.2, 0.2));\n' + '  ret_1 = tmpvar_6;\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = tmpvar_6;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '  uv_1 = (0.05 + (0.9 * uv));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv_1);\n' + '  ret_2 = tmpvar_3.xyz;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur2, uv_1);\n' + '  ret_2 = (abs((\n' + '    ((tmpvar_4.xyz * scale2) + bias2)\n' + '   - ret_2)) * 6.0);\n' + '  ret_2 = (ret_2 * 0.65);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_x = wave_x + 0.2900*( 0.60*sin(2.121*time) + 0.40*sin(1.621*time) );\n' + 'wave_y = wave_y + 0.2900*( 0.60*sin(1.742*time) + 0.40*sin(2.322*time) );\n' + 'wave_r = wave_r + 0.350*( 0.60*sin(0.823*time) + 0.40*sin(0.916*time) );\n' + 'wave_g = wave_g + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(1.023*time) );\n' + 'wave_b = wave_b + 0.350*( 0.60*sin(0.808*time) + 0.40*sin(0.949*time) );\n' + 'blah = 0.5/(wave_r+wave_g+wave_b);\n' + 'wave_r = wave_r*blah;\n' + ' wave_g = wave_g*blah;\n' + ' wave_b = wave_b*blah;\n' + 'rot = rot + 0.12*( 0.60*sin(0.21*time) + 0.40*sin(0.339*time) );\n' + 'cx = cx + 0.30*( 0.60*sin(0.374*time) + 0.14*sin(0.194*time) );\n' + 'cy = cy + 0.37*( 0.60*sin(0.274*time) + 0.10*sin(0.394*time) );\n' + 'ib_r = ib_r + 0.2*sin(time*0.5413);\n' + 'ib_g = ib_g + 0.2*sin(time*0.6459);\n' + 'ib_b = ib_b + 0.2*sin(time*0.7354);\n' + 'blah = 0.4/(ib_r+ib_g+ib_b)*3;\n' + 'ib_r = ib_r*blah;\n' + ' ib_g = ib_g*blah;\n' + ' ib_b = ib_b*blah;\n' + 'dx = 0.01*cos(time*0.27934+5);\n' + 'dy = 0.01*sin(time*0.23142+2);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
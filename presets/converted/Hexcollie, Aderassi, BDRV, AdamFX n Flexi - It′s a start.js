define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 19.2,
		warpscale : 1.766,
		brighten : 1.0,
		mv_y : 14.4,
		wave_scale : 0.88,
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
		wave_mode : 6.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.00016,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.498,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 0.01,
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
		mv_l : 0.05,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.94,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.1,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.iscale = 0;
m.q3 = 0;
m.mod = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.num = 0;
m.anga = 0;
m.q8 = 0;
m.c_inv_r = 0;
m.ox = 0;
m.scale = 0;
m.oy = 0;
m.iangle = 0;
m.translation_x = 0;
m.a_i = 0;
m.translation_y = 0;
m.ac_i = 0;
m.b_i = 0;
m.an = 0;
m.c_i = 0;
m.bcad_i = 0;
m.d_i = 0;
m.mu_i = 0;
m.angle = 0;
m.a_r = 0;
m.radi = 0;
m.seg = 0;
m.ac_r = 0;
m.b_r = 0;
m.c_r = 0;
m.bcad_r = 0;
m.d_r = 0;
m.pi = 0;
m.mu_r = 0;
m.itranslation_u = 0;
m.itranslation_v = 0;
m.c_inv_i = 0;

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
m.scale = 4;
m.angle = (m.time*0.2);
m.translation_x = 0;
m.translation_y = 0.2;
m.iscale = 6;
m.iangle = (Math.sin((m.time*0.1337))*0.3);
m.itranslation_u = 0;
m.itranslation_v = 0.2;
m.a_r = (Math.cos(m.angle)*m.scale);
m.a_i = (Math.sin(m.angle)*m.scale);
m.b_r = m.translation_x;
m.b_i = m.translation_y;
m.c_r = (-Math.cos(m.iangle)*m.iscale);
m.c_i = (-Math.sin(m.iangle)*m.iscale);
m.d_r = m.itranslation_u;
m.d_i = m.itranslation_v;
m.c_inv_r = div(m.c_r,((m.c_r*m.c_r)+(m.c_i*m.c_i)));
m.c_inv_i = div(m.c_i,((m.c_r*m.c_r)+(m.c_i*m.c_i)));
m.ac_r = ((m.a_r*m.c_inv_r)-(m.a_i*m.c_inv_i));
m.ac_i = ((m.a_r*m.c_inv_i)-(m.a_i*m.c_inv_r));
m.bcad_r = (((m.b_r*m.c_r)-(m.b_i*m.c_i))-((m.a_r*m.d_r)-(m.a_i*m.d_i)));
m.bcad_i = (((m.b_r*m.c_i)-(m.b_i*m.c_r))-((m.a_r*m.d_i)-(m.a_i*m.d_r)));
m.mu_r = ((m.bcad_r*m.c_inv_r)-(m.bcad_i*m.c_inv_i));
m.mu_i = ((m.bcad_r*m.c_inv_i)-(m.bcad_i*m.c_inv_r));
m.q1 = m.ac_r;
m.q2 = m.ac_i;
m.q3 = m.mu_r;
m.q4 = m.mu_i;
m.q5 = m.c_r;
m.q6 = m.c_i;
m.q7 = m.d_r;
m.q8 = m.d_i;
		m.rkeys = ['dy'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dy = (m.dy+ifcond(below(Math.abs((m.q1-m.x)), 0.01), ifcond(below(m.y, m.q2), Math.max((0.02-Math.abs((m.q1-m.x))), 0), 0.001), 0.001));
m.cx = (8.13988973*sqr((m.warp-m.x)));
m.cx = ifcond(below(m.cx, -1.0), -1.0, m.cx);
m.cx = ifcond(above(m.cx, 2.0), 2.0, m.cx);
m.dy = ifcond(below(m.dy, -1), -1, m.dy);
m.dy = ifcond(above(m.dy, 1.0), 1.0, m.dy);
m.num = 8;
m.pi = 3.141592654;
m.radi = ((m.y-0.5)*0.75);
m.radi = (m.y-0.5);
m.radi = pow(((m.radi*m.radi)+((m.x-0.5)*(m.x-0.5))), 0.5);
m.an = ((m.ang+m.pi)+m.time);
m.an = (m.an-((m.pi*2)*Math.floor(div(m.an,(m.pi*2)))));
m.mod = 0.1;
m.seg = (m.ang+m.pi);
m.seg = (div(m.seg,(m.pi*2))*m.num);
m.seg = Math.floor(m.seg);
m.seg = (m.seg-equal(m.seg, m.num));
m.anga = ((m.ang+m.pi)-(div((m.pi*2),m.num)*m.seg));
m.anga = ifcond(equal(mod(m.seg,2), 0), (div((m.pi*2),m.num)-m.anga), m.anga);
m.anga = (m.anga+div(m.pi,4));
m.ox = (0.5-(m.radi*Math.sin(m.anga)));
m.oy = (0.5+(m.radi*Math.cos(m.anga)));
m.dx = (equal(m.seg, 3)*(m.x-m.ox));
m.dy = (equal(m.seg, 3)*(m.y-m.oy));
m.dx = (above(m.seg, 0)*(m.x-m.ox));
m.dy = (above(m.seg, 0)*(m.y-m.oy));
m.dx = ((m.dx+(0.003*Math.sin((((m.y*2)-1)*64))))+(0.001*Math.sin((((m.y*2)-1)*96))));
m.dy = ((m.dy+(0.004*Math.cos((((m.x*2)-1)*64))))+(0.002*Math.cos((((m.x*2)-1)*96))));
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
	'warp' : (''),
	'comp' : ('shader_body {\n' + '   vec2 moebius_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = ((uv - 0.5) * aspect.xy);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = ((tmpvar_3.x * _qb.x) - (tmpvar_3.y * _qb.y));\n' + '  tmpvar_4.y = ((tmpvar_3.x * _qb.y) - (tmpvar_3.y * _qb.x));\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (tmpvar_4 + _qb.zw);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = ((_qa.z * tmpvar_5.x) + (_qa.w * tmpvar_5.y));\n' + '  tmpvar_6.y = ((_qa.w * tmpvar_5.x) - (_qa.z * tmpvar_5.y));\n' + '  moebius_1 = (0.5 + ((\n' + '    (1.0 - abs(((\n' + '      fract((((tmpvar_6 / \n' + '        ((tmpvar_5.x * tmpvar_5.x) + (tmpvar_5.y * tmpvar_5.y))\n' + '      ) + _qa.xy) * 0.5))\n' + '     * 2.0) - 1.0)))\n' + '   - 0.5) * 0.99));\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_main, moebius_1);\n' + '  ret_2 = (tmpvar_7.xyz * 4.0);\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_blur1, moebius_1);\n' + '  ret_2 = (ret_2 - ((\n' + '    (tmpvar_8.xyz * scale1)\n' + '   + bias1) * 3.0));\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (rand_frame.xy + ((moebius_1 * texsize.xy) * texsize_noise_lq.zw));\n' + '  tmpvar_9 = texture2D (sampler_noise_lq, P_10);\n' + '  ret_2 = (ret_2 * (1.0 + (0.12 * \n' + '    ((tmpvar_9.xxx * 2.0) - 1.0)\n' + '  )));\n' + '  ret_2 = ((pow (ret_2, vec3(0.5, 0.5, 0.7)) - 0.1) * 1.1);\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11.w = 1.0;\n' + '  tmpvar_11.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_11;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.35*sin(1.14*time) + 0.16*sin(1.5*time);\n' + 'wave_g = wave_g + 0.36*sin(1.27*time) + 0.15*sin(1.11*time);\n' + 'wave_b = wave_b + 0.37*sin(1.284*time) + 0.15*sin(1.3*time);\n' + 'warp = 0;\n' + 'ob_r = wave_g;\n' + 'ob_b = wave_r;\n' + 'ob_g = wave_b;\n' + 'ib_r = wave_r;\n' + 'ib_b = wave_g;\n' + 'ib_g = wave_r;\n' + 'scale = 4;\n' + 'angle = time*.2;\n' + 'translation_x = 0;\n' + 'translation_y = 0.2;\n' + 'iscale = 6;\n' + 'iangle = sin(time*0.1337)*0.3;\n' + 'itranslation_u = 0;\n' + 'itranslation_v = 0.2;\n' + 'a_r = cos(angle)*scale;\n' + 'a_i = sin(angle)*scale;\n' + 'b_r = translation_x;\n' + 'b_i = translation_y;\n' + 'c_r = -cos(iangle)*iscale;\n' + 'c_i = -sin(iangle)*iscale;\n' + 'd_r = itranslation_u;\n' + 'd_i = itranslation_v;\n' + 'c_inv_r = c_r/(c_r*c_r+c_i*c_i);\n' + 'c_inv_i = c_i/(c_r*c_r+c_i*c_i);\n' + 'ac_r = (a_r*c_inv_r - a_i*c_inv_i);\n' + 'ac_i = (a_r*c_inv_i - a_i*c_inv_r);\n' + 'bcad_r = (b_r*c_r - b_i*c_i)-(a_r*d_r-a_i*d_i);\n' + 'bcad_i = (b_r*c_i - b_i*c_r)-(a_r*d_i-a_i*d_r);\n' + 'mu_r = bcad_r*c_inv_r - bcad_i*c_inv_i;\n' + 'mu_i = bcad_r*c_inv_i - bcad_i*c_inv_r;\n' + 'q1 = ac_r;\n' + 'q2 = ac_i;\n' + 'q3 = mu_r;\n' + 'q4 = mu_i;\n' + 'q5 = c_r;\n' + 'q6 = c_i;\n' + 'q7 = d_r;\n' + 'q8 = d_i;'),
	'pixel_eqs_str' : ('dy = dy + if(below(abs(q1-x),0.01),if(below(y,q2),max(0.02-abs(q1-x),0),0.001),0.001);\n' + 'cx = 8.13988973*sqr(warp - x);\n' + 'cx=if(below(cx,-1.0), -1.0, cx);\n' + 'cx=if(above(cx,2.0), 2.0, cx);\n' + 'dy=if(below(dy,-1), -1, dy);\n' + 'dy=if(above(dy,1.0), 1.0, dy);\n' + 'num = 8;\n' + 'pi = 3.141592654;\n' + 'radi = (y-.5)*.75;\n' + 'radi = (y-.5);\n' + 'radi = pow(radi*radi + (x-.5)*(x-.5),.5);\n' + 'an = ang + pi + time;\n' + 'an = an - pi*2*int(an/(pi*2));\n' + 'mod = .1;\n' + 'seg = ang + pi;\n' + 'seg = seg/(pi*2)*num;\n' + 'seg = int(seg);\n' + 'seg = seg - equal(seg,num);\n' + 'anga = (ang + pi) - (pi*2/num)*seg;\n' + 'anga = if(equal(seg%2,0),(pi*2/num) - anga,anga);\n' + 'anga = anga + pi/4;\n' + 'ox = .5 - radi*sin(anga);\n' + 'oy = .5 + radi*cos(anga);\n' + 'dx = equal(seg,3)*(x-ox);\n' + 'dy = equal(seg,3)*(y-oy);\n' + 'dx = above(seg,0)*(x-ox);\n' + 'dy = above(seg,0)*(y-oy);\n' + 'dx=dx+0.003*sin((y*2-1)*64)+0.001*sin((y*2-1)*96);\n' + 'dy=dy+0.004*cos((x*2-1)*64)+0.002*cos((x*2-1)*96);'),
};

return pmap;
});
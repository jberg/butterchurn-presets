define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 0.65,
		ib_g : 0.8,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.002,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.05,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.04,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 1.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.9999,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.5,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.8,
		mv_b : 1.0,
		echo_zoom : 1.169,
		ob_size : 0.03,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99951,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.03,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.5,
		decay : 0.98,
		wave_a : 1.008,
		ob_g : 0.04,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.8,
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
m.tt = 0;
m.a = 0;
m.q2 = 0;
m.b = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.mt = 0;
m.q8 = 0;
m.toc = 0;
m.mx = 0;
m.vav = 0;
m.my = 0;
m.treb_avg = 0;
m.dis = 0;
m.tic = 0;
m.ra = 0;
m.rmod = 0;
m.rb = 0;
m.slide = 0;
m.bt = 0;
m.bass_avg = 0;
m.zm = 0;
m.tin = 0;
m.tm = 0;
m.q1sgn = 0;
m.mid_avg = 0;
m.sp = 0;
m.vt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.q1 = Math.sin(m.time);
m.q1sgn = sign(m.q1);
m.q1 = Math.abs(m.q1);
m.q1 = pow(m.q1, 6);
m.q1 = (m.q1*m.q1sgn);
m.q1 = ((m.q1*0.4)+0.5);
m.q2 = (0.5+(0.1*Math.sin((m.time*0.548))));
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = m.time;
m.ra = 1;
m.treb_avg = (m.tic*((m.treb_avg*(div(1,m.tic)-m.ra))+(m.ra*m.treb)));
m.mid_avg = (m.tic*((m.mid_avg*(div(1,m.tic)-m.ra))+(m.ra*m.mid)));
m.bass_avg = (m.tic*((m.bass_avg*(div(1,m.tic)-m.ra))+(m.ra*m.bass)));
m.rb = 1;
m.vav = (m.tic*((m.vav*(div(1,m.tic)-m.rb))+((m.rb*((m.bass+m.treb)+m.mid))*0.33333)));
m.tt = (m.tt+(m.tic*m.treb_avg));
m.mt = (m.mt+(m.tic*m.mid_avg));
m.bt = (m.bt+(m.tic*m.bass_avg));
m.vt = (m.vt+((m.tic*((m.treb_avg+m.mid_avg)+m.bass_avg))*0.33333));
m.sp = (Math.abs((m.vav-m.slide))*0.1);
m.slide = (ifcond(above(m.slide, m.vav), (m.slide-(m.tic*m.sp)), (m.slide+(m.tic*m.sp)))+((1-m.toc)*m.vav));
m.toc = 1;
m.q3 = (((m.treb+m.bass)+m.mid)*0.3333);
m.q3 = (((m.q3*m.q3)*0.5)+0.1);
m.q4 = m.mt;
m.q5 = m.bt;
m.cx = m.q1;
m.cy = m.q2;
m.rmod = ((((m.treb_avg+m.mid_avg)*0.5)-(m.bass_avg*0.5))*0.01);
m.rmod = ((0.02*pow(div(m.rmod,0.02), 2))*7);
m.rmod = Math.min(0.001, Math.max(m.rmod, -0.001));
m.rmod = (m.rmod*pow((Math.sin(m.time)*1.1), 2));
m.rot = ((0.02*pow(div(m.rmod,0.02), 2))*40);
m.q6 = m.rmod;
m.q7 = (m.slide-((below(m.q3, 0.5)*(6+(2*Math.sin((m.time*24)))))*pow(Math.min(1, ((0.5-m.q3)*2)), 5)));
m.q8 = ifcond(above(Math.sin((m.time*0.5)), 0), -1, 1);
m.ib_size = (0.05-(m.bass*0.01));
		m.rkeys = ['rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.tm = div(m.time,m.rad);
m.a = m.q1;
m.b = m.q2;
m.mx = (m.x-m.a);
m.my = (m.y-m.b);
m.zm = -0.45;
m.zm = ifcond(above(Math.sin((m.time*2.1)), 0.95), 0.45, m.zm);
m.dis = (pow(((m.mx*m.mx)+(m.my*m.my)), 0.5)*0.70710678);
m.rot = (m.rot*(1-m.dis));
m.rot = ((m.rot*20)*m.q8);
m.dx = ((((m.zm*m.mx)*m.dis)*Math.cos((m.my*3.14)))*m.q3);
m.dy = ((((m.zm*m.my)*m.dis)*Math.cos((m.mx*3.14)))*m.q3);
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
	'warp' : ('shader_body {\n' + '   vec2 my_uv_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + vec2(0.024, 0.0));\n' + '  tmpvar_3 = texture2D (sampler_blur2, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - vec2(0.024, 0.0));\n' + '  tmpvar_5 = texture2D (sampler_blur2, P_6);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + vec2(0.0, 0.024));\n' + '  tmpvar_7 = texture2D (sampler_blur2, P_8);\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv - vec2(0.0, 0.024));\n' + '  tmpvar_9 = texture2D (sampler_blur2, P_10);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = (((\n' + '    ((tmpvar_3.xyz * scale2) + bias2)\n' + '   - \n' + '    ((tmpvar_5.xyz * scale2) + bias2)\n' + '  ).y * 1280.0) * texsize.z);\n' + '  tmpvar_11.y = (((\n' + '    ((tmpvar_7.xyz * scale2) + bias2)\n' + '   - \n' + '    ((tmpvar_9.xyz * scale2) + bias2)\n' + '  ).y * 1024.0) * texsize.w);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = (uv - (tmpvar_11 * 0.05));\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (tmpvar_12 - floor(tmpvar_12));\n' + '  tmpvar_13 = texture2D (sampler_fc_main, P_14);\n' + '  ret_2.y = tmpvar_13.y;\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (tmpvar_12 - floor(tmpvar_12));\n' + '  tmpvar_15 = texture2D (sampler_blur1, P_16);\n' + '  ret_2.y = (ret_2.y + ((\n' + '    ((ret_2.y - ((tmpvar_15.xyz * scale1) + bias1).y) - 0.1)\n' + '   * 0.1) + 0.02));\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_main, uv_orig);\n' + '  ret_2.z = (((tmpvar_17.y - ret_2.y) * 2.0) + 0.5);\n' + '   vec4 tmpvar_18;\n' + '   vec2 P_19;\n' + '  P_19 = (uv + vec2(0.01, 0.0));\n' + '  tmpvar_18 = texture2D (sampler_blur2, P_19);\n' + '   vec4 tmpvar_20;\n' + '   vec2 P_21;\n' + '  P_21 = (uv - vec2(0.01, 0.0));\n' + '  tmpvar_20 = texture2D (sampler_blur2, P_21);\n' + '   vec4 tmpvar_22;\n' + '   vec2 P_23;\n' + '  P_23 = (uv + vec2(0.0, 0.01));\n' + '  tmpvar_22 = texture2D (sampler_blur2, P_23);\n' + '   vec4 tmpvar_24;\n' + '   vec2 P_25;\n' + '  P_25 = (uv - vec2(0.0, 0.01));\n' + '  tmpvar_24 = texture2D (sampler_blur2, P_25);\n' + '   vec2 tmpvar_26;\n' + '  tmpvar_26.x = (((\n' + '    ((tmpvar_18.xyz * scale2) + bias2)\n' + '   - \n' + '    ((tmpvar_20.xyz * scale2) + bias2)\n' + '  ).x * 1280.0) * texsize.z);\n' + '  tmpvar_26.y = (((\n' + '    ((tmpvar_22.xyz * scale2) + bias2)\n' + '   - \n' + '    ((tmpvar_24.xyz * scale2) + bias2)\n' + '  ).x * 1024.0) * texsize.w);\n' + '  my_uv_1 = (uv + (tmpvar_26 * 0.01));\n' + '   vec4 tmpvar_27;\n' + '  tmpvar_27 = texture2D (sampler_fw_main, my_uv_1);\n' + '  ret_2.x = tmpvar_27.x;\n' + '   vec4 tmpvar_28;\n' + '  tmpvar_28 = texture2D (sampler_blur3, uv);\n' + '  ret_2.x = (ret_2.x + ((\n' + '    (ret_2.x - ((tmpvar_28.xyz * scale3) + bias3).x)\n' + '   - 0.02) * 0.5));\n' + '   vec4 tmpvar_29;\n' + '  tmpvar_29.w = 1.0;\n' + '  tmpvar_29.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_29;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec3 tmpvar_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv);\n' + '  tmpvar_2 = mix (vec3(0.0, 0.0, 0.1), vec3(0.0, 1.0, 0.0), vec3(((tmpvar_3.y * 1.4) - 0.5)));\n' + '  ret_1 = tmpvar_2;\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = mix (vec3(1.0, 0.0, 0.0), vec3(0.0, 1.0, 1.0), tmpvar_3.yyy);\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = vec3(((1.0 - tmpvar_3.x) - tmpvar_3.z));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur1, uv);\n' + '  ret_1 = (mix (ret_1, tmpvar_4, tmpvar_5) * (1.0 - (\n' + '    ((tmpvar_6.xyz * scale1) + bias1)\n' + '  .z * 1.2)));\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = mix (mix (vec3(1.0, 0.6, -0.5), vec3(0.2, -0.2, 0.4), vec3((1.0 - tmpvar_3.x))), vec3(-1.0, 0.0, 1.5), tmpvar_3.yyy);\n' + '  ret_1 = (ret_1 + (tmpvar_7 * tmpvar_3.z));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'q1=sin(time);\n' + 'q1sgn = sign(q1);\n' + 'q1=abs(q1);\n' + 'q1=pow(q1,6);\n' + 'q1=q1*q1sgn;\n' + 'q1=q1*0.4 + 0.5;\n' + 'q2 = .5 + .1*sin(time*.548);\n' + 'tic = min(time - tin,.1);\n' + 'tin = time;\n' + 'ra = 1;\n' + 'treb_avg = tic*(treb_avg*(1/tic - ra) + ra*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - ra) + ra*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - ra) + ra*bass);\n' + 'rb = 1;\n' + 'vav = tic*(vav*(1/tic - rb) + rb*(bass+treb+mid)*.33333);\n' + 'tt = tt + tic*treb_avg;\n' + 'mt = mt + tic*mid_avg;\n' + 'bt = bt + tic*bass_avg;\n' + 'vt = vt + tic*(treb_avg+mid_avg+bass_avg)*.33333;\n' + 'sp = abs(vav - slide)*.1;\n' + 'slide = if(above(slide,vav),slide-tic*sp,slide+tic*sp) + (1-toc)*vav;\n' + 'toc = 1;\n' + 'q3 = (treb + bass + mid)*.3333;\n' + 'q3=q3*q3*0.5 + 0.1;\n' + 'q4 = mt;\n' + 'q5 = bt;\n' + 'cx = q1;\n' + 'cy = q2;\n' + 'rmod = ((treb_avg + mid_avg)*.5 - bass_avg*0.5)*.01;\n' + 'rmod = 0.02 * pow(rmod/0.02 , 2)*7;\n' + 'rmod = min(0.001 , max(rmod, -0.001));\n' + 'rmod=rmod*pow(sin(time)*1.1,2);\n' + 'rot = 0.02 * pow(rmod/0.02 , 2) *40;\n' + 'q6 = rmod;\n' + 'q7 = slide - below(q3,.5)*(6 + 2*sin(time*24))*pow(min(1,(.5 - q3)*2),5);\n' + 'q8=if( above(sin(time*0.5),0) , -1 , 1);\n' + 'ib_size=.05-(bass*0.01);'),
	'pixel_eqs_str' : ('tm=time/rad;\n' + 'a = q1;\n' + 'b = q2;\n' + 'mx = x-a;\n' + 'my = y-b;\n' + 'zm = -.45;\n' + 'zm= if( above(sin(time*2.1),0.95) , 0.45 , zm);\n' + 'dis = pow(mx*mx + my*my,.5)*.70710678;\n' + 'rot = rot*(1-dis);\n' + 'rot=rot*20*q8 ;\n' + 'dx = zm*mx*dis*cos(my*3.14)*q3;\n' + 'dy = zm*my*dis*cos(mx*3.14)*q3;'),
};

return pmap;
});
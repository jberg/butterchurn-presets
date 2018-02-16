define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 1.0,
		mv_x : 64.0,
		warpscale : 0.107,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01743,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.00814,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.0,
		ib_r : 1.0,
		mv_b : 1.0,
		echo_zoom : 1.03,
		ob_size : 0.0,
		b1ed : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
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
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 1.0,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.ab = 0;
m.q2 = 0;
m.q3 = 0;
m.c = 0;
m.n1 = 0;
m.q4 = 0;
m.n2 = 0;
m.q5 = 0;
m.q6 = 0;
m.j1 = 0;
m.j2 = 0;
m.j3 = 0;
m.k = 0;
m.n = 0;
m.v = 0;
m.pi3 = 0;
m.x1 = 0;
m.y1 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.pi3 = div((Math.asin(1)*2),3);
m.c = (m.time*3);
m.monitor = (5*Math.sin(m.time));
m.ab = ((m.ab*0.9)+sqr(m.mid_att));
m.q6 = (m.ab*0.0);
m.q1 = 0;
m.v = 0.01;
m.j1 = ((m.j1*0.95)+sqr((m.bass*4)));
m.j2 = ((m.j2*0.95)+sqr((m.mid*4)));
m.j3 = ((m.j3*0.95)+sqr((m.treb*4)));
m.n = (m.n+(m.j1*0.0052));
m.n1 = (m.n1+(m.j2*0.0052));
m.n2 = (m.n2+(m.j3*0.0052));
m.q2 = (m.n*0.01);
m.q3 = (m.n1*0.01);
m.q4 = (m.n2*0.01);
m.k = ((m.k*0.99)+sqr((m.mid_att*2)));
m.q5 = (m.k*0.00);
m.zoom = 1;
m.warp = 0;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.99,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 100.0,
			samples : 495.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 4.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.s3 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.c = 0;
m.q4 = 0;
m.t7 = 0;
m.d = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.d1 = 0;
m.c1 = 0;
m.n = 0;
m.c2 = 0;
m.c3 = 0;
m.rd = 0;
m.zoom = 0;
m.t = 0;
m.w = 0;
m.y1 = 0;
m.pi = 0;
m.x1 = 0;
m.z = 0;
m.pi3 = 0;
m.t1 = 0;
m.s1 = 0;
m.t2 = 0;
m.s2 = 0;
m.t3 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.ab = 1;
			m.rkeys = ['t7'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t2 = m.q2;
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
m.t8 = 0.07;
m.t7 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.t7 = -m.t7;
m.pi = Math.asin(1);
m.n = 180;
m.rd = 0.075;
m.xx = ((Math.sin((((m.sample*m.pi)*4)+((m.t7+1)*m.t8)))*0.5)+((Math.cos(((m.sample*m.pi)*m.n))*m.rd)*Math.sin((((m.sample*m.pi)*4)+((m.t7+1)*m.t8)))));
m.yy = ((Math.cos((((m.sample*m.pi)*4)+((m.t7+1)*m.t8)))*0.5)+((Math.cos(((m.sample*m.pi)*m.n))*m.rd)*Math.cos((((m.sample*m.pi)*4)+((m.t7+1)*m.t8)))));
m.zz = (Math.sin(((m.sample*m.pi)*m.n))*m.rd);
m.d = sqrt((((m.xx*m.xx)+(m.yy*m.yy))+(m.zz*m.zz)));
m.d1 = 1;
m.xx = (m.xx*m.d1);
m.yy = (m.yy*m.d1);
m.zz = (m.zz*m.d1);
m.w = ((-m.d*m.t5)*0);
m.s1 = Math.sin(((m.t2*1)+m.w));
m.s2 = Math.sin(((m.t3*1)+m.w));
m.s3 = Math.sin(((m.t4*1)+m.w));
m.c1 = Math.cos(((m.t2*1)+m.w));
m.c2 = Math.cos(((m.t3*1)+m.w));
m.c3 = Math.cos(((m.t4*1)+m.w));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.d = sqrt(((m.x1*m.x1)+(m.y1*m.y1)));
m.w = Math.atan2(m.x1, m.y1);
m.a = 1;
m.zoom = ((0.5*Math.atan2(m.a, (m.a+m.z)))*m.d);
m.x = (0.5+(m.zoom*Math.sin(m.w)));
m.y = (0.5+(m.zoom*Math.cos(m.w)));
m.pi3 = ((3.1415926*2)*0.3333);
m.t = ((m.sample*6.0)+(m.t3*2));
m.c = 0.5015;
m.r = ((Math.sin(m.t)+1)*m.c);
m.g = ((Math.sin((m.t-m.pi3))+1)*m.c);
m.b = ((Math.sin((m.t-(2*m.pi3)))+1)*m.c);
m.a = 1;
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'ab = 1;'),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't8 = .07;\n' + 't7 = 1;'),
		'point_eqs_str' : ('t7 = -t7;\n' + 'pi = asin(1);\n' + 'n = 180;\n' + 'rd = 0.075;\n' + 'xx = sin(sample*pi*4+(t7+1)*t8)*0.5 + cos(sample*pi*n)*rd*sin(sample*pi*4+(t7+1)*t8);\n' + 'yy = cos(sample*pi*4+(t7+1)*t8)*0.5 + cos(sample*pi*n)*rd*cos(sample*pi*4+(t7+1)*t8);\n' + 'zz = sin(sample*pi*n)*rd;\n' + 'd = sqrt( xx*xx + yy*yy + zz*zz);\n' + 'd1 = 1;\n' + 'xx = xx*d1;\n' + 'yy = yy*d1;\n' + 'zz = zz*d1;\n' + 'w = -d*t5*0;\n' + 's1 = sin(t2*1+w);\n' + 's2 = sin(t3*1+w);\n' + 's3 = sin(t4*1+w);\n' + 'c1 = cos(t2*1+w);\n' + 'c2 = cos(t3*1+w);\n' + 'c3 = cos(t4*1+w);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'd = sqrt( x1*x1 + y1*y1);\n' + 'w = atan2(x1,y1);\n' + 'a = 1;\n' + 'zoom = 0.5*atan2(a,a+z)*d;\n' + 'x = 0.5 + zoom*sin(w);\n' + 'y = 0.5 + zoom*cos(w);\n' + 'pi3 = 3.1415926*2*0.3333;\n' + 't = sample*6.0 + t3*2;\n' + 'c=0.5015;\n' + 'r = (sin(t      )+1)*c;\n' + 'g = (sin(t-  pi3)+1)*c;\n' + 'b = (sin(t-2*pi3)+1)*c;\n' + 'a = 1;'),

		},
		{
		'baseVals' : {

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '   vec2 P_3;\n' + '  P_3 = (0.5 + ((\n' + '    (uv + (texsize.zw * 2.0))\n' + '   - 0.5) * 0.94));\n' + '  tmpvar_2 = texture2D (sampler_blur3, P_3);\n' + '  ret_1 = ((tmpvar_2.xyz * scale3) + bias3);\n' + '  ret_1 = (ret_1 - 0.024);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 myblur_1;\n' + '   vec3 pre_2;\n' + '   vec3 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv).xyz;\n' + '  pre_2 = tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv - texsize.zw);\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = (texture2D (sampler_main, P_4) * 0.75).xyz;\n' + '  myblur_1 = ((pre_2 * 3.0) + tmpvar_5);\n' + '   vec2 P_6;\n' + '  P_6 = (uv + texsize.zw);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (texture2D (sampler_main, P_6) * 0.75).xyz;\n' + '  myblur_1 = (myblur_1 + tmpvar_7);\n' + '   vec2 P_8;\n' + '  P_8 = (uv + (vec2(1.0, -1.0) * texsize.zw));\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = (texture2D (sampler_main, P_8) * 0.75).xyz;\n' + '  myblur_1 = (myblur_1 + tmpvar_9);\n' + '   vec2 P_10;\n' + '  P_10 = (uv + (vec2(-1.0, 1.0) * texsize.zw));\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = (texture2D (sampler_main, P_10) * 0.75).xyz;\n' + '  myblur_1 = (myblur_1 + tmpvar_11);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (uv + (vec2(0.0, -1.0) * texsize.zw));\n' + '  tmpvar_12 = texture2D (sampler_main, P_13);\n' + '  myblur_1 = (myblur_1 + tmpvar_12.xyz);\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (uv + (vec2(0.0, 1.0) * texsize.zw));\n' + '  tmpvar_14 = texture2D (sampler_main, P_15);\n' + '  myblur_1 = (myblur_1 + tmpvar_14.xyz);\n' + '   vec4 tmpvar_16;\n' + '   vec2 P_17;\n' + '  P_17 = (uv + (vec2(-1.0, 0.0) * texsize.zw));\n' + '  tmpvar_16 = texture2D (sampler_main, P_17);\n' + '  myblur_1 = (myblur_1 + tmpvar_16.xyz);\n' + '   vec4 tmpvar_18;\n' + '   vec2 P_19;\n' + '  P_19 = (uv + (vec2(1.0, 0.0) * texsize.zw));\n' + '  tmpvar_18 = texture2D (sampler_main, P_19);\n' + '  myblur_1 = (myblur_1 + tmpvar_18.xyz);\n' + '  myblur_1 = (myblur_1 * 0.1);\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20.w = 1.0;\n' + '  tmpvar_20.xyz = ((myblur_1 * myblur_1) * myblur_1);\n' + '  vec4 ret4 = tmpvar_20;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0;\n' + 'y1 = 0;'),
	'frame_eqs_str' : ('pi3 = asin(1)*2/3;\n' + 'c=time*3;\n' + 'monitor =5*sin(time);\n' + 'ab = ab*0.9 + sqr(mid_att);\n' + 'q6 =  ab*0.0;\n' + 'q1 = 0;\n' + 'v = 0.01;\n' + 'j1 = j1*0.95 + sqr(bass*4);\n' + 'j2 = j2*0.95 + sqr(mid*4);\n' + 'j3 = j3*0.95 + sqr(treb*4);\n' + 'n = n + j1*0.0052;\n' + 'n1 = n1 + j2*0.0052;\n' + 'n2 = n2 + j3*0.0052;\n' + 'q2 = n*0.01;\n' + 'q3 = n1*0.01;\n' + 'q4 = n2*0.01;\n' + 'k = k*0.99 + sqr(mid_att*2);\n' + 'q5 = k*0.00;\n' + 'zoom = 1;\n' + 'warp = 0;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
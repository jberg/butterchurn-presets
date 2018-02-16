define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.4,
		ib_g : 0.0,
		mv_x : 31.2,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 2.28,
		wave_scale : 0.012,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.11,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.8,
		echo_zoom : 1.007,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 0.01,
		wave_dots : 1.0,
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
		ob_b : 0.1,
		mv_l : 2.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.96,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.ring = 0;
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
m.decay = 0.98;
m.zoom = 1.001;
m.warp = 0.03;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.ring = ((Math.sin(((m.rad*3.14)+0.3))*2)-1);
m.ring = Math.max(m.ring, 0);
m.ring = (m.ring*m.ring);
m.zoom = (1+((m.rad*4)*0.01));
m.sx = (1+(m.ring*0.3));
m.sy = (1-(m.ring*0.3));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.scalar = 0;
m.n = 0;
m.ym = 0;
m.timea = 0;
m.xm = 0;
m.timeb = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['t1','t2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = 0.5;
m.t2 = 0.5;
m.scalar = (Math.sin((m.time*0.3))*5);
m.t3 = m.scalar;
		return m;
	},
		'point_eqs' : function(m) {
m.x = m.t1;
m.y = m.t2;
m.n = (m.sample*6.283);
m.timea = ((m.time*0.3)+m.t3);
m.timeb = ((m.time*0.1)+m.t3);
m.xm = (((Math.sin((m.n*3))*Math.sin(((m.n*5.7)+m.timeb)))*Math.sin(((m.n*11.5)+m.timea)))*Math.sin((m.n*31)));
m.ym = (((Math.sin((m.n*3.5))*Math.sin((m.n*1.1)))*Math.sin(((m.n*23)+m.timea)))*Math.sin(((m.n*13.3)+m.timeb)));
m.x = (m.x+(m.xm*0.1));
m.y = (m.y+(m.ym*0.1));
m.t1 = m.x;
m.t2 = m.y;
m.r = ((Math.tan(m.n)*0.5)+0.5);
m.r = (Math.min(m.r, 1)*above(m.r, 0));
m.g = ((Math.tan((m.n+2.1))*0.5)+0.5);
m.g = (Math.min(m.g, 1)*above(m.g, 0));
m.b = ((Math.tan((m.n+4.2))*0.5)+0.5);
m.b = (Math.min(m.b, 1)*above(m.b, 0));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=0.5;\n' + 't2=0.5;\n' + 'scalar=sin(time*0.3)*5;\n' + 't3=scalar;'),
		'point_eqs_str' : ('x=t1;\n' + 'y=t2;\n' + 'n=sample*6.283;\n' + 'timeA=time*0.3+t3;\n' + 'timeB=time*0.1+t3;\n' + 'xm=sin(n*3)*sin(n*5.7+timeB)*sin(n*11.5+timeA)*sin(n*31);\n' + 'ym=sin(n*3.5)*sin(n*1.1)*sin(n*23+timeA)*sin(n*13.3+timeB);\n' + 'x=x+ xm*0.1;\n' + 'y=y+ ym*0.1;\n' + 't1=x;\n' + 't2=y;\n' + 'r=tan(n)*0.5+0.5;\n' + 'r=min(r,1)*above(r,0);\n' + 'g=tan(n+2.1)*0.5+0.5;\n' + 'g=min(g,1)*above(g,0);\n' + 'b=tan(n+4.2)*0.5+0.5;\n' + 'b=min(b,1)*above(b,0);'),

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
m.scalar = 0;
m.n = 0;
m.ym = 0;
m.timea = 0;
m.xm = 0;
m.timeb = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['t1','t2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = 0.5;
m.t2 = 0.5;
m.scalar = (Math.sin((m.time*0.3))*5);
m.t3 = m.scalar;
		return m;
	},
		'point_eqs' : function(m) {
m.x = m.t1;
m.y = m.t2;
m.n = (m.sample*6.283);
m.timea = (((m.time*0.3)+m.t3)+0.01);
m.timeb = (((m.time*0.1)+m.t3)+0.01);
m.xm = (((Math.sin((m.n*3))*Math.sin(((m.n*5.7)+m.timeb)))*Math.sin(((m.n*11.5)+m.timea)))*Math.sin((m.n*31)));
m.ym = (((Math.sin((m.n*3.5))*Math.sin((m.n*1.1)))*Math.sin(((m.n*23)+m.timea)))*Math.sin(((m.n*13.3)+m.timeb)));
m.x = (m.x+(m.xm*0.1));
m.y = (m.y+(m.ym*0.1));
m.t1 = m.x;
m.t2 = m.y;
m.r = ((Math.tan(m.n)*0.5)+0.5);
m.r = (Math.min(m.r, 1)*above(m.r, 0));
m.g = ((Math.tan((m.n+2.1))*0.5)+0.5);
m.g = (Math.min(m.g, 1)*above(m.g, 0));
m.b = ((Math.tan((m.n+4.2))*0.5)+0.5);
m.b = (Math.min(m.b, 1)*above(m.b, 0));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=0.5;\n' + 't2=0.5;\n' + 'scalar=sin(time*0.3)*5;\n' + 't3=scalar;'),
		'point_eqs_str' : ('x=t1;\n' + 'y=t2;\n' + 'n=sample*6.283;\n' + 'timeA=time*0.3+t3 + 0.01;\n' + 'timeB=time*0.1+t3 + 0.01;\n' + 'xm=sin(n*3)*sin(n*5.7+timeB)*sin(n*11.5+timeA)*sin(n*31);\n' + 'ym=sin(n*3.5)*sin(n*1.1)*sin(n*23+timeA)*sin(n*13.3+timeB);\n' + 'x=x+ xm*0.1;\n' + 'y=y+ ym*0.1;\n' + 't1=x;\n' + 't2=y;\n' + 'r=tan(n)*0.5+0.5;\n' + 'r=min(r,1)*above(r,0);\n' + 'g=tan(n+2.1)*0.5+0.5;\n' + 'g=min(g,1)*above(g,0);\n' + 'b=tan(n+4.2)*0.5+0.5;\n' + 'b=min(b,1)*above(b,0);'),

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
m.scalar = 0;
m.n = 0;
m.ym = 0;
m.timea = 0;
m.xm = 0;
m.timeb = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['t1','t2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = 0.5;
m.t2 = 0.5;
m.scalar = (Math.sin((m.time*0.3))*5);
m.t3 = m.scalar;
		return m;
	},
		'point_eqs' : function(m) {
m.x = m.t1;
m.y = m.t2;
m.n = (m.sample*6.283);
m.timea = ((m.time*0.3)+m.t3);
m.timeb = ((m.time*0.1)+m.t3);
m.xm = (((Math.sin((m.n*3))*Math.sin(((m.n*5.7)+m.timeb)))*Math.sin(((m.n*11.5)+m.timea)))*Math.sin((m.n*31)));
m.ym = (((Math.sin((m.n*3.5))*Math.sin((m.n*1.1)))*Math.sin(((m.n*23)+m.timea)))*Math.sin(((m.n*13.3)+m.timeb)));
m.x = (m.x+(m.xm*0.1));
m.y = (m.y+(m.ym*0.1));
m.t1 = m.x;
m.t2 = m.y;
m.r = ((Math.tan(m.n)*0.5)+0.5);
m.r = (Math.min(m.r, 1)*above(m.r, 0));
m.g = ((Math.tan((m.n+2.1))*0.5)+0.5);
m.g = (Math.min(m.g, 1)*above(m.g, 0));
m.b = ((Math.tan((m.n+4.2))*0.5)+0.5);
m.b = (Math.min(m.b, 1)*above(m.b, 0));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=0.5;\n' + 't2=0.5;\n' + 'scalar=sin(time*0.3)*5;\n' + 't3=scalar;'),
		'point_eqs_str' : ('x=t1;\n' + 'y=t2;\n' + 'n=sample*6.283;\n' + 'timeA=time*0.3+t3;\n' + 'timeB=time*0.1+t3;\n' + 'xm=sin(n*3)*sin(n*5.7+timeB)*sin(n*11.5+timeA)*sin(n*31);\n' + 'ym=sin(n*3.5)*sin(n*1.1)*sin(n*23+timeA)*sin(n*13.3+timeB);\n' + 'x=x+ xm*0.1;\n' + 'y=y+ ym*0.1;\n' + 't1=x;\n' + 't2=y;\n' + 'r=tan(n)*0.5+0.5;\n' + 'r=min(r,1)*above(r,0);\n' + 'g=tan(n+2.1)*0.5+0.5;\n' + 'g=min(g,1)*above(g,0);\n' + 'b=tan(n+4.2)*0.5+0.5;\n' + 'b=min(b,1)*above(b,0);'),

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
m.scalar = 0;
m.n = 0;
m.ym = 0;
m.timea = 0;
m.xm = 0;
m.timeb = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['t1','t2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = 0.5;
m.t2 = 0.5;
m.scalar = (Math.sin((m.time*0.3))*5);
m.t3 = m.scalar;
		return m;
	},
		'point_eqs' : function(m) {
m.x = m.t1;
m.y = m.t2;
m.n = (m.sample*6.283);
m.timea = ((m.time*0.3)+m.t3);
m.timeb = ((m.time*0.1)+m.t3);
m.xm = (((Math.sin((m.n*3))*Math.sin(((m.n*5.7)+m.timeb)))*Math.sin(((m.n*11.5)+m.timea)))*Math.sin((m.n*31)));
m.ym = (((Math.sin((m.n*3.5))*Math.sin((m.n*1.1)))*Math.sin(((m.n*23)+m.timea)))*Math.sin(((m.n*13.3)+m.timeb)));
m.x = (m.x+(m.xm*0.1));
m.y = (m.y+(m.ym*0.1));
m.t1 = m.x;
m.t2 = m.y;
m.r = ((Math.tan(m.n)*0.5)+0.5);
m.r = (Math.min(m.r, 1)*above(m.r, 0));
m.g = ((Math.tan((m.n+2.1))*0.5)+0.5);
m.g = (Math.min(m.g, 1)*above(m.g, 0));
m.b = ((Math.tan((m.n+4.2))*0.5)+0.5);
m.b = (Math.min(m.b, 1)*above(m.b, 0));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=0.5;\n' + 't2=0.5;\n' + 'scalar=sin(time*0.3)*5;\n' + 't3=scalar;'),
		'point_eqs_str' : ('x=t1;\n' + 'y=t2;\n' + 'n=sample*6.283;\n' + 'timeA=time*0.3+t3;\n' + 'timeB=time*0.1+t3;\n' + 'xm=sin(n*3)*sin(n*5.7+timeB)*sin(n*11.5+timeA)*sin(n*31);\n' + 'ym=sin(n*3.5)*sin(n*1.1)*sin(n*23+timeA)*sin(n*13.3+timeB);\n' + 'x=x+ xm*0.1;\n' + 'y=y+ ym*0.1;\n' + 't1=x;\n' + 't2=y;\n' + 'r=tan(n)*0.5+0.5;\n' + 'r=min(r,1)*above(r,0);\n' + 'g=tan(n+2.1)*0.5+0.5;\n' + 'g=min(g,1)*above(g,0);\n' + 'b=tan(n+4.2)*0.5+0.5;\n' + 'b=min(b,1)*above(b,0);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.8,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.93272,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.85,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.08925,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (Math.sin((m.time*0.3))*0.01);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=sin(time*0.3)*0.01;'),

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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 noiseVal_2;\n' + '   vec2 P_3;\n' + '  P_3 = (((\n' + '    (texsize.xy * texsize_noise_lq.zw)\n' + '  .x * uv) * 0.02) + (0.1 * rand_frame).xy);\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = vec3(dot (texture2D (sampler_noise_lq, P_3), vec4(0.32, 0.49, 0.29, 0.0)));\n' + '  noiseVal_2 = tmpvar_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = ((uv * texsize.xy) * 0.08);\n' + '  uv_1 = (uv - ((\n' + '    (sin(tmpvar_5) / cos(tmpvar_5))\n' + '   * texsize.zw) * 3.0));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv_1);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (tmpvar_6.xyz + (noiseVal_2 / 30.0));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = ((mix (tmpvar_7, \n' + '    (1.0 - tmpvar_7.zyx)\n' + '  , vec3(0.01, 0.01, 0.01)) - 0.03) - (0.2 * pow (\n' + '    (1.0 - rad)\n' + '  , 18.0)));\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2.x = rad;\n' + '  tmpvar_2.y = uv.y;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, tmpvar_2);\n' + '  ret_1 = tmpvar_3.xyz;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, tmpvar_2);\n' + '  ret_1 = (ret_1 + ((tmpvar_4.xyz * scale1) + bias1));\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5.x = (bass * 0.4);\n' + '  tmpvar_5.y = (treb * 0.4);\n' + '  tmpvar_5.z = (mid * 0.4);\n' + '  ret_1 = (ret_1 * (tmpvar_5 * 0.95));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=0.98;\n' + 'zoom=1.001;\n' + 'warp=0.03;'),
	'pixel_eqs_str' : ('ring=sin(rad*3.14+0.3)*2 -1;\n' + 'ring=max(ring,0);\n' + 'ring=ring*ring;\n' + 'zoom=1 + rad*4*0.01;\n' + 'sx=1+ring*0.3;\n' + 'sy=1-ring*0.3;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.28,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 0.009,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.002,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 4.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.01,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.86,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.4,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 1.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.5,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q6 = 0;
m.p = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0;
m.q6 = m.aspecty;
m.p += m.bass;
m.q1 = (10*Math.sin(((0.15*m.time)+(0.001*m.p))));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.4,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 60.80387,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.7,
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
			scaling : 67.1652,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.7,
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
			b : 0.0,
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
			a : 0.6,
			enabled : 0.0,
			b : 1.0,
			g : 0.7,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.7,
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
			b : 0.0,
			tex_ang : 6.28319,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.19614,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 2.01033,
			x : 0.5,
			y : 0.5,
			ang : 0.25133,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 972.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q3 = 0;
m.sa1 = 0;
m.q6 = 0;
m.my2 = 0;
m.mx2 = 0;
m.i = 0;
m.sa = 0;
m.x20 = 0;
m.w = 0;
m.y20 = 0;
m.z1 = 0;
m.z20 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.i = m.instance;
m.sa = div(m.i,972);
m.sa1 = div(mod(div(m.i,162),6),6);
m.t1 = ((6.28*m.sa1)+m.q1);
m.z1 = ((0.1+(0.07*Math.sin((0.3*m.q1))))+(div(m.instance,m.num_inst)*0.6));
m.x1 = ((m.z1*Math.sin(m.t1))*Math.sin((0.5*m.q1)));
m.y1 = (m.z1*Math.cos((m.t1*1.1)));
m.w = (Math.atan2(m.y1, m.x1)+(m.q3*0.32));
m.x20 = div(mod(div(m.i,6),27),27);
m.y20 = div(mod(div(m.i,6),9),9);
m.z20 = div(mod(div(m.i,6),3),3);
m.x2 = (((0.4*m.x20)-m.y20)+(0.7*m.z20));
m.y2 = ((((1.2*Math.sin(m.time))*m.x20)-((1.3*Math.cos((m.time*0.4)))*m.y20))-((1.7*Math.sin((m.time*1.2)))*m.z20));
m.t2 = m.w;
m.mx2 = ((m.x2*Math.sin(m.t2))+(m.y2*Math.cos(m.t2)));
m.my2 = ((m.y2*Math.sin(m.t2))-(m.x2*Math.cos(m.t2)));
m.z2 = (0.7*m.z1);
m.x2 = (m.mx2*m.z2);
m.y2 = (m.my2*m.z2);
m.t3 = ((((162*6.28)*m.sa)+(0.5*m.sa))+m.q1);
m.z3 = (0.13*m.z2);
m.x3 = (m.z3*Math.sin(m.t3));
m.y3 = (m.z3*Math.cos(m.t3));
m.x = (0.5+div(((m.x1+m.x2)+m.x3),m.q6));
m.y = (0.5+((m.y1+m.y2)+m.y3));
m.rad = (2*m.z3);
m.ang = (div(3.14,4)+m.t3);
m.t1 = (0.5+(0.4*Math.sin(((1.57*3)*m.y20))));
m.r = (0.1+mod((0.25*div(m.i,2)),3));
m.r *= m.t1;
m.r2 = m.r;
m.g = (m.r*m.r);
m.g2 = m.g;
m.b = m.z1;
m.b2 = m.b;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('i=instance;\n' + '   sa=i/972;\n' + 'sa1=((i/162)%6)/6;\n' + '   t1=6.28*sa1 + q1 ;\n' + 'z1=.1+.07*sin(.3*q1) + instance/num_inst*.6;\n' + 'x1 = z1*sin(t1)*sin(.5*q1);\n' + '    y1 = z1*cos(t1*1.1);\n' + 'w=atan2(y1,x1) + q3*.32;\n' + 'x20=((i/6)%27)/27;\n' + '   y20=((i/6)%9)/9;\n' + '     z20=((i/6)%3)/3;\n' + 'x2 =  .4*x20 -  y20 +  .7*z20;\n' + 'y2 =  1.2*sin(time)*x20 - 1.3*cos(time*.4)*y20 - 1.7*sin(time*1.2)*z20;\n' + 't2=w;\n' + 'mx2=x2*sin(t2)+y2*cos(t2);\n' + 'my2=y2*sin(t2)-x2*cos(t2);\n' + 'z2=.7*z1;\n' + 'x2=mx2*z2;\n' + '    y2=my2*z2;\n' + 't3 = 162*6.28*sa +.5*sa +q1 ;\n' + 'z3 = .13*z2;\n' + 'x3 = z3*sin(t3);\n' + '    y3 = z3*cos(t3);\n' + 'x=.5 + (x1+x2+x3)/q6;\n' + '    y=.5 + (y1+y2+y3);\n' + 'rad = 2*z3;\n' + '     ang=3.14/4+t3;\n' + 't1=.5+.4*sin(1.57*3*y20);\n' + 'r=.1+.25*(i/2)%3;\n' + '   r*=t1;\n' + '   r2=r;\n' + 'g=r*r;\n' + '                       g2=g;\n' + 'b = z1;\n' + ' b2 = b;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.21795,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 2.01782,
			x : 0.5,
			y : 0.08,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 972.0,
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
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 3.40028,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.7,
			border_g : 1.0,
			rad : 0.01,
			x : 0.5,
			y : 0.61,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 972.0,
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
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.1,
			rad : 2.01042,
			x : 0.38,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 972.0,
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
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_blur1, uv);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv);\n' + '  ret_1 = (vec3(2.0, 2.0, 0.0) * mix (tmpvar_3.xyz, (\n' + '    (tmpvar_2.xyz * scale1)\n' + '   + bias1), vec3((1.0 - \n' + '    exp((-7.0 * abs((\n' + '      (1.0 - ((tmpvar_2.xyz * scale1) + bias1).z)\n' + '     - 0.9))))\n' + '  ))));\n' + '  ret_1 = (ret_1 + ((\n' + '    (1.0 - uv.y)\n' + '   * vec3(0.3, 0.0, 0.5)) * clamp (\n' + '    (1.0 - (3.0 * ((tmpvar_2.xyz * scale1) + bias1).z))\n' + '  , 0.0, 1.0)));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('decay=0;\n' + 'q6=aspecty;\n' + 'p+=bass;\n' + 'q1=10*sin(.15*time+.001*p);'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 16.016,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.397,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.13126,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.00001,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.35,
		echo_zoom : 2.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.35,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0597,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.17,
		wave_mystery : 0.24,
		decay : 1.0,
		wave_a : 0.207,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 0.35,
		rating : 1.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.d12 = 0;
m.d23 = 0;
m.d34 = 0;
m.q6 = 0;
m.d13 = 0;
m.d24 = 0;
m.q7 = 0;
m.d14 = 0;
m.q8 = 0;
m.bounce = 0;
m.vy1 = 0;
m.vx1 = 0;
m.vy2 = 0;
m.dt = 0;
m.vx2 = 0;
m.vy3 = 0;
m.vx3 = 0;
m.vy4 = 0;
m.vx4 = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;
m.y3 = 0;
m.x3 = 0;
m.y4 = 0;
m.x4 = 0;
m.x1 = (0.5+div((rand(100)-50),500));
m.y1 = (0.5+div((rand(100)-50),500));
m.x2 = (0.5+div((rand(100)-50),500));
m.y2 = (0.5+div((rand(100)-50),500));
m.x3 = (0.5+div((rand(100)-50),500));
m.y3 = (0.5+div((rand(100)-50),500));
m.x4 = (0.5+div((rand(100)-50),500));
m.y4 = (0.5+div((rand(100)-50),500));
		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = 1;
m.warp = 0;
m.wave_a = 0;
m.bounce = 0.8;
m.d12 = div(1,(sqr((m.x1-m.x2))+sqr((m.y1-m.y2))));
m.d13 = div(1,(sqr((m.x1-m.x3))+sqr((m.y1-m.y3))));
m.d14 = div(1,(sqr((m.x1-m.x4))+sqr((m.y1-m.y4))));
m.d23 = div(1,(sqr((m.x2-m.x3))+sqr((m.y2-m.y3))));
m.d24 = div(1,(sqr((m.x2-m.x4))+sqr((m.y2-m.y4))));
m.d34 = div(1,(sqr((m.x3-m.x4))+sqr((m.y3-m.y4))));
m.vx1 = (((m.vx1+((m.x2-m.x1)*m.d12))+((m.x3-m.x1)*m.d13))+((m.x4-m.x1)*m.d14));
m.vy1 = (((m.vy1+((m.y2-m.y1)*m.d12))+((m.y3-m.y1)*m.d13))+((m.y4-m.y1)*m.d14));
m.vx2 = (((m.vx2+((m.x1-m.x2)*m.d12))+((m.x3-m.x2)*m.d23))+((m.x4-m.x2)*m.d24));
m.vy2 = (((m.vy2+((m.y1-m.y2)*m.d12))+((m.y3-m.y2)*m.d23))+((m.y4-m.y2)*m.d24));
m.vx3 = (((m.vx3+((m.x1-m.x3)*m.d13))+((m.x2-m.x3)*m.d23))+((m.x4-m.x3)*m.d34));
m.vy3 = (((m.vy3+((m.y1-m.y3)*m.d13))+((m.y2-m.y3)*m.d23))+((m.y4-m.y3)*m.d34));
m.vx4 = (((m.vx4+((m.x1-m.x4)*m.d14))+((m.x2-m.x4)*m.d24))+((m.x3-m.x4)*m.d34));
m.vy4 = (((m.vy4+((m.y1-m.y4)*m.d14))+((m.y2-m.y4)*m.d24))+((m.y3-m.y4)*m.d34));
m.dt = 0.00003;
m.vx1 = ifcond(above(m.x1, 1), (-Math.abs(m.vx1)*m.bounce), ifcond(below(m.x1, 0), (Math.abs(m.vx1)*m.bounce), m.vx1));
m.vx2 = ifcond(above(m.x2, 1), (-Math.abs(m.vx2)*m.bounce), ifcond(below(m.x2, 0), (Math.abs(m.vx2)*m.bounce), m.vx2));
m.vx3 = ifcond(above(m.x3, 1), (-Math.abs(m.vx3)*m.bounce), ifcond(below(m.x3, 0), (Math.abs(m.vx3)*m.bounce), m.vx3));
m.vx4 = ifcond(above(m.x4, 1), (-Math.abs(m.vx4)*m.bounce), ifcond(below(m.x4, 0), (Math.abs(m.vx4)*m.bounce), m.vx4));
m.vy1 = ifcond(above(m.y1, 1), (-Math.abs(m.vy1)*m.bounce), ifcond(below(m.y1, 0), (Math.abs(m.vy1)*m.bounce), m.vy1));
m.vy2 = ifcond(above(m.y2, 1), (-Math.abs(m.vy2)*m.bounce), ifcond(below(m.y2, 0), (Math.abs(m.vy2)*m.bounce), m.vy2));
m.vy3 = ifcond(above(m.y3, 1), (-Math.abs(m.vy3)*m.bounce), ifcond(below(m.y3, 0), (Math.abs(m.vy3)*m.bounce), m.vy3));
m.vy4 = ifcond(above(m.y4, 1), (-Math.abs(m.vy4)*m.bounce), ifcond(below(m.y4, 0), (Math.abs(m.vy4)*m.bounce), m.vy4));
m.x1 = (m.x1+(m.vx1*m.dt));
m.y1 = (m.y1+(m.vy1*m.dt));
m.x2 = (m.x2+(m.vx2*m.dt));
m.y2 = (m.y2+(m.vy2*m.dt));
m.x3 = (m.x3+(m.vx3*m.dt));
m.y3 = (m.y3+(m.vy3*m.dt));
m.x4 = (m.x4+(m.vx4*m.dt));
m.y4 = (m.y4+(m.vy4*m.dt));
m.q1 = m.x1;
m.q2 = m.y1;
m.q3 = m.x2;
m.q4 = m.y2;
m.q5 = m.x3;
m.q6 = m.y3;
m.q7 = m.x4;
m.q8 = m.y4;
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
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
			rad : 0.01,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 24.0,
			border_r : 1.0,
			num_inst : 40.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.x_end = 0;
m.y_end = 0;
m.x_start = 0;
m.y_start = 0;

			m.rkeys = ['y_end','x_end'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x_start = m.q1;
m.y_start = m.q2;
m.x = (m.x_start+div(((m.x_end-m.x_start)*m.instance),m.num_inst));
m.y = (m.y_start+div(((m.y_end-m.y_start)*m.instance),m.num_inst));
m.x_end = ifcond(equal((m.instance+1), m.num_inst), m.x_start, m.x_end);
m.y_end = ifcond(equal((m.instance+1), m.num_inst), m.y_start, m.y_end);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x_start = q1;\n' + 'y_start = q2;\n' + 'x = x_start + (x_end-x_start)*instance/num_inst;\n' + 'y = y_start + (y_end-y_start)*instance/num_inst;\n' + 'x_end = if(equal(instance+1,num_inst),x_start,x_end);\n' + 'y_end = if(equal(instance+1,num_inst),y_start,y_end);'),

		},
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
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.01,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 24.0,
			border_r : 1.0,
			num_inst : 40.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.q4 = 0;
m.x_end = 0;
m.y_end = 0;
m.x_start = 0;
m.y_start = 0;

			m.rkeys = ['y_end','x_end'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x_start = m.q3;
m.y_start = m.q4;
m.x = (m.x_start+div(((m.x_end-m.x_start)*m.instance),m.num_inst));
m.y = (m.y_start+div(((m.y_end-m.y_start)*m.instance),m.num_inst));
m.x_end = ifcond(equal((m.instance+1), m.num_inst), m.x_start, m.x_end);
m.y_end = ifcond(equal((m.instance+1), m.num_inst), m.y_start, m.y_end);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x_start = q3;\n' + 'y_start = q4;\n' + 'x = x_start + (x_end-x_start)*instance/num_inst;\n' + 'y = y_start + (y_end-y_start)*instance/num_inst;\n' + 'x_end = if(equal(instance+1,num_inst),x_start,x_end);\n' + 'y_end = if(equal(instance+1,num_inst),y_start,y_end);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.01,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 24.0,
			border_r : 1.0,
			num_inst : 40.0,
			},
		'init_eqs' : function(m) {
m.q5 = 0;
m.q6 = 0;
m.x_end = 0;
m.y_end = 0;
m.x_start = 0;
m.y_start = 0;

			m.rkeys = ['y_end','x_end'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x_start = m.q5;
m.y_start = m.q6;
m.x = (m.x_start+div(((m.x_end-m.x_start)*m.instance),m.num_inst));
m.y = (m.y_start+div(((m.y_end-m.y_start)*m.instance),m.num_inst));
m.x_end = ifcond(equal((m.instance+1), m.num_inst), m.x_start, m.x_end);
m.y_end = ifcond(equal((m.instance+1), m.num_inst), m.y_start, m.y_end);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x_start = q5;\n' + 'y_start = q6;\n' + 'x = x_start + (x_end-x_start)*instance/num_inst;\n' + 'y = y_start + (y_end-y_start)*instance/num_inst;\n' + 'x_end = if(equal(instance+1,num_inst),x_start,x_end);\n' + 'y_end = if(equal(instance+1,num_inst),y_start,y_end);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.01,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 24.0,
			border_r : 1.0,
			num_inst : 100.0,
			},
		'init_eqs' : function(m) {
m.q7 = 0;
m.q8 = 0;
m.x_end = 0;
m.y_end = 0;
m.x_start = 0;
m.y_start = 0;

			m.rkeys = ['y_end','x_end'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x_start = m.q7;
m.y_start = m.q8;
m.x = (m.x_start+div(((m.x_end-m.x_start)*m.instance),m.num_inst));
m.y = (m.y_start+div(((m.y_end-m.y_start)*m.instance),m.num_inst));
m.x_end = ifcond(equal((m.instance+1), m.num_inst), m.x_start, m.x_end);
m.y_end = ifcond(equal((m.instance+1), m.num_inst), m.y_start, m.y_end);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x_start = q7;\n' + 'y_start = q8;\n' + 'x = x_start + (x_end-x_start)*instance/num_inst;\n' + 'y = y_start + (y_end-y_start)*instance/num_inst;\n' + 'x_end = if(equal(instance+1,num_inst),x_start,x_end);\n' + 'y_end = if(equal(instance+1,num_inst),y_start,y_end);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = (tmpvar_2.xyz - 0.004);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 =0.5+ (rand(100)-50)/500;\n' + 'y1 =0.5+ (rand(100)-50)/500;\n' + 'x2 =0.5+ (rand(100)-50)/500;\n' + 'y2 =0.5+ (rand(100)-50)/500;\n' + 'x3 =0.5+ (rand(100)-50)/500;\n' + 'y3 =0.5+ (rand(100)-50)/500;\n' + 'x4 =0.5+ (rand(100)-50)/500;\n' + 'y4 =0.5+ (rand(100)-50)/500;'),
	'frame_eqs_str' : ('zoom = 1;\n' + 'warp = 0;\n' + 'wave_a = 0;\n' + 'bounce = 0.8;\n' + 'd12 = 1/( sqr(x1-x2) + sqr(y1-y2));\n' + 'd13 = 1/( sqr(x1-x3) + sqr(y1-y3));\n' + 'd14 = 1/( sqr(x1-x4) + sqr(y1-y4));\n' + 'd23 = 1/( sqr(x2-x3) + sqr(y2-y3));\n' + 'd24 = 1/( sqr(x2-x4) + sqr(y2-y4));\n' + 'd34 = 1/( sqr(x3-x4) + sqr(y3-y4));\n' + 'vx1 = vx1 + (x2-x1)*d12 + (x3-x1)*d13 + (x4-x1)*d14;\n' + 'vy1 = vy1 + (y2-y1)*d12 + (y3-y1)*d13 + (y4-y1)*d14;\n' + 'vx2 = vx2 + (x1-x2)*d12 + (x3-x2)*d23 + (x4-x2)*d24;\n' + 'vy2 = vy2 + (y1-y2)*d12 + (y3-y2)*d23 + (y4-y2)*d24;\n' + 'vx3 = vx3 + (x1-x3)*d13 + (x2-x3)*d23 + (x4-x3)*d34;\n' + 'vy3 = vy3 + (y1-y3)*d13 + (y2-y3)*d23 + (y4-y3)*d34;\n' + 'vx4 = vx4 + (x1-x4)*d14 + (x2-x4)*d24 + (x3-x4)*d34;\n' + 'vy4 = vy4 + (y1-y4)*d14 + (y2-y4)*d24 + (y3-y4)*d34;\n' + 'dt = 0.00003;\n' + 'vx1 = if(above(x1,1),-abs(vx1)*bounce,if(below(x1,0),abs(vx1)*bounce,vx1));\n' + 'vx2 = if(above(x2,1),-abs(vx2)*bounce,if(below(x2,0),abs(vx2)*bounce,vx2));\n' + 'vx3 = if(above(x3,1),-abs(vx3)*bounce,if(below(x3,0),abs(vx3)*bounce,vx3));\n' + 'vx4 = if(above(x4,1),-abs(vx4)*bounce,if(below(x4,0),abs(vx4)*bounce,vx4));\n' + 'vy1 = if(above(y1,1),-abs(vy1)*bounce,if(below(y1,0),abs(vy1)*bounce,vy1));\n' + 'vy2 = if(above(y2,1),-abs(vy2)*bounce,if(below(y2,0),abs(vy2)*bounce,vy2));\n' + 'vy3 = if(above(y3,1),-abs(vy3)*bounce,if(below(y3,0),abs(vy3)*bounce,vy3));\n' + 'vy4 = if(above(y4,1),-abs(vy4)*bounce,if(below(y4,0),abs(vy4)*bounce,vy4));\n' + 'x1 = x1 + vx1*dt;\n' + ' y1 = y1 + vy1*dt;\n' + 'x2 = x2 + vx2*dt;\n' + ' y2 = y2 + vy2*dt;\n' + 'x3 = x3 + vx3*dt;\n' + ' y3 = y3 + vy3*dt;\n' + 'x4 = x4 + vx4*dt;\n' + ' y4 = y4 + vy4*dt;\n' + 'q1 = x1;\n' + 'q2 = y1;\n' + 'q3 = x2;\n' + 'q4 = y2;\n' + 'q5 = x3;\n' + 'q6 = y3;\n' + 'q7 = x4;\n' + 'q8 = y4;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
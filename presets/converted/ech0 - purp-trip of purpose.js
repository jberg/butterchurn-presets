define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 0.267,
		brighten : 0.0,
		mv_y : 20.16,
		wave_scale : 1.286,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 5.2E-4,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.4,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.16,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.4,
		invert : 0.0,
		rot : -0.04,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.9,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.stickybit = 0;
m.diff = 0;
m.bit2 = 0;
m.q8 = 0;
m.sample1 = 0;
m.sample2 = 0;
m.basstime = 0;
m.basssum = 0;
m.spintime = 0;
m.state = 0;
m.difftime = 0;
m.vol = 0;
m.volavg2 = 0;
m.edge = 0;
m.volavg = 0;
m.spintime = 0.5;
		return m;
	},
	'frame_eqs' : function(m) {
m.basstime = (m.basstime+(m.bass_att*0.03));
m.q1 = m.basstime;
m.vol = pow(((m.bass+m.mid)+m.treb), 2);
m.basssum = m.vol;
m.basstime = ifcond(below(m.basstime, 465), 465, m.basstime);
m.stickybit = mod(m.time,2);
m.volavg = (m.volavg+(m.vol*equal(m.stickybit, 1)));
m.sample1 = (m.sample1+equal(m.stickybit, 1));
m.volavg2 = (m.volavg2+(m.vol*equal(m.stickybit, 0)));
m.sample2 = (m.sample2+equal(m.stickybit, 0));
m.edge = bnot(equal(m.bit2, m.stickybit));
m.volavg = (m.volavg-((m.volavg*m.edge)*m.stickybit));
m.volavg2 = (m.volavg2-((m.volavg2*m.edge)*equal(m.stickybit, 0)));
m.sample1 = (m.sample1-((m.sample1*m.edge)*m.stickybit));
m.sample2 = (m.sample2-((m.sample2*m.edge)*equal(m.stickybit, 0)));
m.diff = ifcond(equal(m.stickybit, 1), div(m.basssum,div(m.volavg2,m.sample2)), 0);
m.diff = ifcond(equal(m.stickybit, 0), div(m.basssum,div(m.volavg,m.sample1)), m.diff);
m.q3 = m.diff;
m.bit2 = mod(m.time,2);
m.difftime = (m.difftime+(m.diff*0.03));
m.q2 = m.difftime;
m.difftime = ifcond(above(m.difftime, 2000), 0, m.difftime);
m.spintime = (m.spintime+((m.bass*0.03)*ifcond(equal(mod(m.state,2), 1), 1, -1)));
m.q8 = m.spintime;
m.state = (m.state+above(m.diff, 10));
m.monitor = m.spintime;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1.05-(Math.sin(m.q3)*0.04));
m.rot = 0;
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.12682,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.md = 0;
m.oldmd = 0;
m.mx = 0.5;
m.my = 0.4;
m.md = 3;
			m.rkeys = ['my','mx','md'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.oldmd = m.md;
m.md = mod((m.md+rand(4)),4);
m.md = ifcond(equal(m.md, m.oldmd), mod((m.md+1),4), m.md);
m.mx = (m.mx+((equal(m.md, 0)*0.002)*m.bass));
m.mx = (m.mx-((equal(m.md, 1)*0.002)*m.bass));
m.my = (m.my+((equal(m.md, 2)*0.002)*m.treb));
m.my = (m.my-((equal(m.md, 3)*0.002)*m.treb));
m.mx = ifcond(above(m.mx, 0.9), 0.5, m.mx);
m.mx = ifcond(below(m.mx, 0.1), 0.5, m.mx);
m.my = ifcond(above(m.my, 0.9), 0.5, m.my);
m.my = ifcond(below(m.my, 0.1), 0.5, m.my);
m.x = m.mx;
m.y = m.my;
m.a = Math.cos(Math.tan((m.treb+(m.bass*0.1))));
		return m;
	},
		'init_eqs_str' : ('mx=.5;\n' + 'my=.4;\n' + 'md=3;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('oldmd=md;\n' + 'md=(md+rand(4))%4;\n' + 'md=if(equal(md,oldmd),(md+1)%4,md);\n' + 'mx=mx+(equal(md,0)*.002*bass);\n' + 'mx=mx-(equal(md,1)*.002*bass);\n' + 'my=my+(equal(md,2)*.002*treb);\n' + 'my=my-(equal(md,3)*.002*treb);\n' + 'mx=if(above(mx,.9),.5,mx);\n' + 'mx=if(below(mx,.1),.5,mx);\n' + 'my=if(above(my,.9),.5,my);\n' + 'my=if(below(my,.1),.5,my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=cos(tan(treb + bass*.1));'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.12682,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.md = 0;
m.oldmd = 0;
m.mx = 0.5;
m.my = 0.4;
m.md = 3;
			m.rkeys = ['my','mx','md'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.oldmd = m.md;
m.md = mod((m.md+rand(4)),4);
m.md = ifcond(equal(m.md, m.oldmd), mod((m.md+1),4), m.md);
m.mx = (m.mx+((equal(m.md, 0)*0.002)*m.bass));
m.mx = (m.mx-((equal(m.md, 1)*0.002)*m.bass));
m.my = (m.my+((equal(m.md, 2)*0.002)*m.treb));
m.my = (m.my-((equal(m.md, 3)*0.002)*m.treb));
m.mx = ifcond(above(m.mx, 0.9), 0.5, m.mx);
m.mx = ifcond(below(m.mx, 0.1), 0.5, m.mx);
m.my = ifcond(above(m.my, 0.9), 0.5, m.my);
m.my = ifcond(below(m.my, 0.1), 0.5, m.my);
m.x = m.mx;
m.y = m.my;
m.a = Math.cos(Math.tan((m.treb+(m.bass*0.1))));
		return m;
	},
		'init_eqs_str' : ('mx=.5;\n' + 'my=.4;\n' + 'md=3;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('oldmd=md;\n' + 'md=(md+rand(4))%4;\n' + 'md=if(equal(md,oldmd),(md+1)%4,md);\n' + 'mx=mx+(equal(md,0)*.002*bass);\n' + 'mx=mx-(equal(md,1)*.002*bass);\n' + 'my=my+(equal(md,2)*.002*treb);\n' + 'my=my-(equal(md,3)*.002*treb);\n' + 'mx=if(above(mx,.9),.5,mx);\n' + 'mx=if(below(mx,.1),.5,mx);\n' + 'my=if(above(my,.9),.5,my);\n' + 'my=if(below(my,.1),.5,my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=cos(tan(treb + bass*.1));'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.12682,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.md = 0;
m.oldmd = 0;
m.mx = 0.5;
m.my = 0.4;
m.md = 3;
			m.rkeys = ['my','mx','md'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.oldmd = m.md;
m.md = mod((m.md+rand(4)),4);
m.md = ifcond(equal(m.md, m.oldmd), mod((m.md+1),4), m.md);
m.mx = (m.mx+((equal(m.md, 0)*0.002)*m.bass));
m.mx = (m.mx-((equal(m.md, 1)*0.002)*m.bass));
m.my = (m.my+((equal(m.md, 2)*0.002)*m.treb));
m.my = (m.my-((equal(m.md, 3)*0.002)*m.treb));
m.mx = ifcond(above(m.mx, 0.9), 0.5, m.mx);
m.mx = ifcond(below(m.mx, 0.1), 0.5, m.mx);
m.my = ifcond(above(m.my, 0.9), 0.5, m.my);
m.my = ifcond(below(m.my, 0.1), 0.5, m.my);
m.x = m.mx;
m.y = m.my;
m.a = Math.cos(Math.tan((m.treb+(m.bass*0.1))));
		return m;
	},
		'init_eqs_str' : ('mx=.5;\n' + 'my=.4;\n' + 'md=3;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('oldmd=md;\n' + 'md=(md+rand(4))%4;\n' + 'md=if(equal(md,oldmd),(md+1)%4,md);\n' + 'mx=mx+(equal(md,0)*.002*bass);\n' + 'mx=mx-(equal(md,1)*.002*bass);\n' + 'my=my+(equal(md,2)*.002*treb);\n' + 'my=my-(equal(md,3)*.002*treb);\n' + 'mx=if(above(mx,.9),.5,mx);\n' + 'mx=if(below(mx,.1),.5,mx);\n' + 'my=if(above(my,.9),.5,my);\n' + 'my=if(below(my,.1),.5,my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=cos(tan(treb + bass*.1));'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.12682,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.mx = 0;
m.my = 0;
m.md = 0;
m.oldmd = 0;
m.mx = 0.5;
m.my = 0.4;
m.md = 3;
			m.rkeys = ['my','mx','md'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.oldmd = m.md;
m.md = mod((m.md+rand(4)),4);
m.md = ifcond(equal(m.md, m.oldmd), mod((m.md+1),4), m.md);
m.mx = (m.mx+((equal(m.md, 0)*0.002)*m.bass));
m.mx = (m.mx-((equal(m.md, 1)*0.002)*m.bass));
m.my = (m.my+((equal(m.md, 2)*0.002)*m.treb));
m.my = (m.my-((equal(m.md, 3)*0.002)*m.treb));
m.mx = ifcond(above(m.mx, 0.9), 0.5, m.mx);
m.mx = ifcond(below(m.mx, 0.1), 0.5, m.mx);
m.my = ifcond(above(m.my, 0.9), 0.5, m.my);
m.my = ifcond(below(m.my, 0.1), 0.5, m.my);
m.x = m.mx;
m.y = m.my;
m.a = Math.cos(Math.tan((m.treb+(m.bass*0.1))));
		return m;
	},
		'init_eqs_str' : ('mx=.5;\n' + 'my=.4;\n' + 'md=3;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('oldmd=md;\n' + 'md=(md+rand(4))%4;\n' + 'md=if(equal(md,oldmd),(md+1)%4,md);\n' + 'mx=mx+(equal(md,0)*.002*bass);\n' + 'mx=mx-(equal(md,1)*.002*bass);\n' + 'my=my+(equal(md,2)*.002*treb);\n' + 'my=my-(equal(md,3)*.002*treb);\n' + 'mx=if(above(mx,.9),.5,mx);\n' + 'mx=if(below(mx,.1),.5,mx);\n' + 'my=if(above(my,.9),.5,my);\n' + 'my=if(below(my,.1),.5,my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=cos(tan(treb + bass*.1));'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.22019,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.5,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_z_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (1.0 - abs((\n' + '    (fract((uv * 0.5)) * 2.0)\n' + '   - 1.0)));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_fc_main, tmpvar_3);\n' + '  ret_2.x = tmpvar_4.z;\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_fc_main, tmpvar_3);\n' + '   float y_6;\n' + '  y_6 = texture2D (sampler_main, uv_orig).y;\n' + '  ret_2.y = mix (mix (tmpvar_5.x, ret_2.x, 0.5), y_6, 0.75);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (texsize.zw * 6.0);\n' + '   vec2 tmpvar_8;\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = (uv_orig - 0.5);\n' + '  tmpvar_8 = ((tmpvar_9 * 0.998) + 0.5);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (tmpvar_8 + (vec2(1.0, 0.0) * tmpvar_7));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec4 tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (tmpvar_8 - (vec2(1.0, 0.0) * tmpvar_7));\n' + '  tmpvar_12 = texture2D (sampler_blur1, P_13);\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (tmpvar_8 + (vec2(0.0, 1.0) * tmpvar_7));\n' + '  tmpvar_14 = texture2D (sampler_blur1, P_15);\n' + '   vec4 tmpvar_16;\n' + '   vec2 P_17;\n' + '  P_17 = (tmpvar_8 - (vec2(0.0, 1.0) * tmpvar_7));\n' + '  tmpvar_16 = texture2D (sampler_blur1, P_17);\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18.x = (((tmpvar_10.xyz * scale1) + bias1) - ((tmpvar_12.xyz * scale1) + bias1)).z;\n' + '  tmpvar_18.y = (((tmpvar_14.xyz * scale1) + bias1) - ((tmpvar_16.xyz * scale1) + bias1)).z;\n' + '  uv_z_1 = (tmpvar_8 - ((tmpvar_18 * texsize.zw) * 2.0));\n' + '   float tmpvar_19;\n' + '  tmpvar_19 = clamp ((1.0 - (\n' + '    sqrt(dot (tmpvar_9, tmpvar_9))\n' + '   * 3.2)), 0.0, 1.0);\n' + '   float tmpvar_20;\n' + '  tmpvar_20 = max (((\n' + '    (texture2D (sampler_fc_main, tmpvar_3).x - 0.5)\n' + '   * 3.0) * tmpvar_19), texture2D (sampler_fc_main, uv_z_1).z);\n' + '  ret_2.z = tmpvar_20;\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_fc_main, uv_z_1);\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22 = clamp (uv_z_1, 0.0, 1.0);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_blur1, tmpvar_22);\n' + '  ret_2.z = (ret_2.z + ((tmpvar_21.z - \n' + '    ((tmpvar_23.xyz * scale1) + bias1)\n' + '  .z) * 0.02));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24.w = 1.0;\n' + '  tmpvar_24.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_24;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '  uv_1 = (0.05 + (0.9 * uv));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv_1);\n' + '  ret_2 = tmpvar_3.xyz;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur2, uv_1);\n' + '  ret_2 = (abs((\n' + '    ((tmpvar_4.xyz * scale2) + bias2)\n' + '   - ret_2)) * 6.0);\n' + '  ret_2 = (ret_2 * 0.65);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('spintime = 0.5;'),
	'frame_eqs_str' : ('basstime = basstime + bass_att*0.03;\n' + 'q1 = basstime;\n' + 'vol = pow(bass+mid+treb,2);\n' + 'basssum = vol;\n' + 'basstime = if(below(basstime,465),465,basstime);\n' + 'stickybit = time%2;\n' + 'volAvg = volAvg + vol*equal(stickybit,1);\n' + 'sample1 = sample1 + equal(stickybit,1);\n' + 'volAvg2 = volAvg2 + vol*equal(stickybit,0);\n' + 'sample2 = sample2 + equal(stickybit,0);\n' + 'edge = bnot(equal(bit2,stickybit));\n' + 'volAvg = volAvg - volAvg*edge*stickybit;\n' + 'volAvg2 = volAvg2 - volAvg2*edge*equal(stickybit,0);\n' + 'sample1 = sample1  - sample1*edge*stickybit;\n' + 'sample2 = sample2  - sample2*edge*equal(stickybit,0);\n' + 'diff = if(equal(stickybit,1), (basssum/(volAvg2/sample2)) , 0);\n' + 'diff = if(equal(stickybit,0), (basssum/(volAvg/sample1)), diff);\n' + 'q3 = diff;\n' + 'bit2 = time%2;\n' + 'difftime = difftime + diff*0.03;\n' + 'q2 = difftime;\n' + 'difftime = if(above(difftime,2000),0, difftime);\n' + 'spintime = spintime + bass*0.03*if(equal(state%2,1),1,-1);\n' + 'q8 = spintime;\n' + 'state = state + above(diff,10);\n' + 'monitor = spintime;'),
	'pixel_eqs_str' : ('zoom = 1.05 - sin(q3)*0.04;\n' + 'rot =0;'),
};

return pmap;
});
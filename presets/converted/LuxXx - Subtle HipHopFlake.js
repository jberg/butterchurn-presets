define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.572,
		brighten : 0.0,
		mv_y : 20.16,
		wave_scale : 1.286,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 5.4E-4,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 0.997,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 30.965,
		wave_dots : 0.0,
		mv_g : 0.4,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.00901,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.4,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.955,
		wave_a : 0.001,
		ob_g : 0.0,
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
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q9 = 0;
m.dy_residual = 0;
m.dx_residual = 0;
m.rg = 0;
m.bass_thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (0.85+(0.25*Math.sin(((0.437*m.time)+1))));
m.wave_g = (0.85+(0.25*Math.sin(((0.544*m.time)+2))));
m.wave_b = (0.85+(0.25*Math.sin(((0.751*m.time)+3))));
m.rot = (m.rot+(0.010*((0.60*Math.sin((0.381*m.time)))+(0.40*Math.sin((0.579*m.time))))));
m.cx = (m.cx+(0.210*((0.60*Math.sin((0.374*m.time)))+(0.40*Math.sin((0.294*m.time))))));
m.cy = (m.cy+(0.210*((0.60*Math.sin((0.393*m.time)))+(0.40*Math.sin((0.223*m.time))))));
m.dx = (m.dx+(0.003*((0.60*Math.sin((0.234*m.time)))+(0.40*Math.sin((0.277*m.time))))));
m.dy = (m.dy+(0.003*((0.60*Math.sin((0.284*m.time)))+(0.40*Math.sin((0.247*m.time))))));
m.decay = (m.decay-(0.01*equal(mod(m.frame,6), 0)));
m.dx = (m.dx+m.dx_residual);
m.dy = (m.dy+m.dy_residual);
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.dx_residual = (((equal(m.bass_thresh, 2.13)*0.016)*Math.sin((m.time*7)))+((1-equal(m.bass_thresh, 2.13))*m.dx_residual));
m.dy_residual = (((equal(m.bass_thresh, 2.13)*0.012)*Math.sin((m.time*9)))+((1-equal(m.bass_thresh, 2.13))*m.dy_residual));
m.wave_x = (m.wave_x-(m.dx_residual*7));
m.wave_y = (m.wave_y-(m.dy_residual*7));
m.wave_mystery = (m.time*0.03);
m.rg = Math.max((m.rg*0.77), (0.02+(0.5*Math.min(2, (Math.max(0, (m.mid_att-1))*1.3)))));
m.q9 = m.rg;
m.zoom = (m.zoom+(m.q9*0.1));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
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
m.ma = 0.5;
m.my = 0.5;
m.md = 0;
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
m.a = (m.bass*0.1);
m.r = (m.bass*0.5);
		return m;
	},
		'init_eqs_str' : ('ma=.5;\n' + 'my=.5;\n' + 'md=0;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('oldmd=md;\n' + 'md=(md+rand(4))%4;\n' + 'md=if(equal(md,oldmd),(md+1)%4,md);\n' + 'mx=mx+(equal(md,0)*.002*bass);\n' + 'mx=mx-(equal(md,1)*.002*bass);\n' + 'my=my+(equal(md,2)*.002*treb);\n' + 'my=my-(equal(md,3)*.002*treb);\n' + 'mx=if(above(mx,.9),.5,mx);\n' + 'mx=if(below(mx,.1),.5,mx);\n' + 'my=if(above(my,.9),.5,my);\n' + 'my=if(below(my,.1),.5,my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=bass*.1;\n' + 'r=bass*.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
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
m.my = 0.5;
m.md = 1;
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
m.a = (m.bass*0.1);
m.g = (m.treb*0.5);
		return m;
	},
		'init_eqs_str' : ('mx=.5;\n' + 'my=.5;\n' + 'md=1;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('oldmd=md;\n' + 'md=(md+rand(4))%4;\n' + 'md=if(equal(md,oldmd),(md+1)%4,md);\n' + 'mx=mx+(equal(md,0)*.002*bass);\n' + 'mx=mx-(equal(md,1)*.002*bass);\n' + 'my=my+(equal(md,2)*.002*treb);\n' + 'my=my-(equal(md,3)*.002*treb);\n' + 'mx=if(above(mx,.9),.5,mx);\n' + 'mx=if(below(mx,.1),.5,mx);\n' + 'my=if(above(my,.9),.5,my);\n' + 'my=if(below(my,.1),.5,my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=bass*.1;\n' + 'g=treb*.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
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
m.my = 0.5;
m.md = 2;
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
m.a = (m.bass*0.1);
		return m;
	},
		'init_eqs_str' : ('mx=.5;\n' + 'my=.5;\n' + 'md=2;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('oldmd=md;\n' + 'md=(md+rand(4))%4;\n' + 'md=if(equal(md,oldmd),(md+1)%4,md);\n' + 'mx=mx+(equal(md,0)*.002*bass);\n' + 'mx=mx-(equal(md,1)*.002*bass);\n' + 'my=my+(equal(md,2)*.002*treb);\n' + 'my=my-(equal(md,3)*.002*treb);\n' + 'mx=if(above(mx,.9),.5,mx);\n' + 'mx=if(below(mx,.1),.5,mx);\n' + 'my=if(above(my,.9),.5,my);\n' + 'my=if(below(my,.1),.5,my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=bass*.1;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
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
m.a = (m.bass*0.1);
		return m;
	},
		'init_eqs_str' : ('mx=.5;\n' + 'my=.4;\n' + 'md=3;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('oldmd=md;\n' + 'md=(md+rand(4))%4;\n' + 'md=if(equal(md,oldmd),(md+1)%4,md);\n' + 'mx=mx+(equal(md,0)*.002*bass);\n' + 'mx=mx-(equal(md,1)*.002*bass);\n' + 'my=my+(equal(md,2)*.002*treb);\n' + 'my=my-(equal(md,3)*.002*treb);\n' + 'mx=if(above(mx,.9),.5,mx);\n' + 'mx=if(below(mx,.1),.5,mx);\n' + 'my=if(above(my,.9),.5,my);\n' + 'my=if(below(my,.1),.5,my);\n' + 'x=mx;\n' + 'y=my;\n' + 'a=bass*.1;'),

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_pw_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 - 0.004);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   float ang2_2;\n' + '  ang2_2 = (fract((0.9549295 * ang)) / 6.0);\n' + '  ang2_2 = (abs((ang2_2 - 0.08333334)) * 6.283185);\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3.x = cos(ang2_2);\n' + '  tmpvar_3.y = sin(ang2_2);\n' + '  uv_1 = (0.5 + ((\n' + '    (0.4 * (rad * sqrt(dot (texsize.xy, texsize.xy))))\n' + '   * tmpvar_3) * texsize.zw));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv_1);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_pc_main, uv_1);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur3, uv_1);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = (1.4 * pow ((\n' + '    clamp (((tmpvar_4.xyz * scale1) + bias1), 0.0, 1.0)\n' + '   * \n' + '    (tmpvar_5.xyz - ((tmpvar_6.xyz * scale3) + bias3))\n' + '  ), vec3(0.5, 0.5, 0.5)));\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = 0.85 + 0.25*sin(0.437*time+1);\n' + 'wave_g = 0.85 + 0.25*sin(0.544*time+2);\n' + 'wave_b = 0.85 + 0.25*sin(0.751*time+3);\n' + 'rot = rot + 0.010*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'cx = cx + 0.210*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );\n' + 'cy = cy + 0.210*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );\n' + 'dx = dx + 0.003*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );\n' + 'dy = dy + 0.003*( 0.60*sin(0.284*time) + 0.40*sin(0.247*time) );\n' + 'decay = decay - 0.01*equal(frame%6,0);\n' + 'dx = dx + dx_residual;\n' + 'dy = dy + dy_residual;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'dx_residual = equal(bass_thresh,2.13)*0.016*sin(time*7) + (1-equal(bass_thresh,2.13))*dx_residual;\n' + 'dy_residual = equal(bass_thresh,2.13)*0.012*sin(time*9) + (1-equal(bass_thresh,2.13))*dy_residual;\n' + 'wave_x = wave_x - dx_residual*7;\n' + 'wave_y = wave_y - dy_residual*7;\n' + 'wave_mystery = time*0.03;\n' + 'rg = max(rg*0.77, 0.02 + 0.5*min(2,max(0,mid_att-1)*1.3));\n' + 'q9 = rg;\n' + 'zoom = zoom + q9*0.1;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
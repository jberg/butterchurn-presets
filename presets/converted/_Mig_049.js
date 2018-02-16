define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 6.4,
		warpscale : 3.138,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.535239,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.122616,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.5,
		mv_dy : 0.5,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.522466,
		echo_zoom : 1.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.872347,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.023,
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
		modwavealphaend : 1.1,
		wave_mystery : -0.48,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.013716,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.dy_residual = 0;
m.dx_residual = 0;
m.bass_thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = 1;
m.wave_g = 0;
m.wave_b = 0;
m.wave_r = sqrt(m.wave_r);
m.wave_g = sqrt(m.wave_g);
m.wave_b = sqrt(m.wave_b);
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
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.942039,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.746302,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.val = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = ((Math.sin(m.time)*0.5)+0.5);
m.val = 3;
m.a2 = (m.val*0.33);
m.a = (m.val*0.33);
m.rad = ((Math.cos((m.time*0.3))*0.4)+0.65);
m.x = ((Math.sin((m.time*0.25))*0.25)+0.5);
m.y = ((Math.cos((m.time*0.45))*0.25)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=sin(time)*.5+.5;\n' + 'val=3;\n' + 'a2=val*.33;\n' + 'a=val*.33;\n' + 'rad=cos(time*.3)*.4+0.65;\n' + 'x=sin(time*.25)*.25+.5;\n' + 'y=cos(time*.45)*.25+.5;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.942039,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.746302,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.val = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = ((Math.cos((m.time*0.3))*0.5)+0.5);
m.val = 3;
m.a2 = (m.val*0.33);
m.a = (m.val*0.33);
m.rad = ((Math.sin((m.time*0.3))*0.4)+0.65);
m.x = ((Math.cos((m.time*0.25))*0.25)+0.5);
m.y = ((Math.sin((m.time*0.45))*0.25)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=cos(time*.3)*.5+.5;\n' + 'val=3;\n' + 'a2=val*.33;\n' + 'a=val*.33;\n' + 'rad=sin(time*.3)*.4+0.65;\n' + 'x=cos(time*.25)*.25+.5;\n' + 'y=sin(time*.45)*.25+.5;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.364564,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.dist = 0;
m.maat = 0;
m.h2 = 0;
m.vb = 0;
m.vg = 0;
m.vr = 0;

			m.rkeys = ['maat','h2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.h2 = (m.h2+((above(m.treb, 1.32)*0.8)*0.9));
m.vr = ((Math.sin((m.h2*0.8))*0.5)+0.5);
m.vg = ((Math.sin((m.h2*0.5))*0.5)+0.5);
m.vb = ((Math.sin((m.h2*0.1))*0.5)+0.5);
m.g = m.vg;
m.r = m.vr;
m.b = m.vb;
m.g2 = m.g;
m.r2 = m.r;
m.b2 = m.b;
m.dist = (mod(m.frame,100)*0.01);
m.maat = (m.maat+above(m.bass_att, 1.5));
m.maat = (below(m.maat, 16)*m.maat);
m.x = ifcond(below(m.maat, 8), ifcond(below(m.maat, 4), m.dist, (1-m.dist)), m.x);
m.y = ifcond(above(m.maat, 8), ifcond(above(m.maat, 4), m.dist, (1-m.dist)), m.y);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('h2=h2+(above(treb,1.32)*0.8)*.9;\n' + 'vr=sin(h2*.8)*.5+.5;\n' + 'vg=sin(h2*.5)*.5+.5;\n' + 'vb=sin(h2*.1)*.5+.5;\n' + 'g=vg;\n' + 'r=vr;\n' + 'b=vb;\n' + 'g2=g;\n' + 'r2=r;\n' + 'b2=b;\n' + 'dist=(frame%100)*.01;\n' + 'maat=maat+(above(bass_att,1.5));\n' + 'maat=below(maat,16)*maat;\n' + 'x=if(below(maat,8),if(below(maat,4),dist,1-dist),x);\n' + 'y=if(above(maat,8),if(above(maat,4),dist,1-dist),y);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.364564,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.dist = 0;
m.maat = 0;
m.h2 = 0;
m.vb = 0;
m.vg = 0;
m.vr = 0;

			m.rkeys = ['maat','h2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.h2 = (m.h2+((above(m.treb, 1.32)*0.8)*0.9));
m.vr = ((Math.sin((m.h2*0.8))*0.5)+0.5);
m.vg = ((Math.sin((m.h2*0.5))*0.5)+0.5);
m.vb = ((Math.sin((m.h2*0.1))*0.5)+0.5);
m.g = m.vg;
m.r = m.vr;
m.b = m.vb;
m.g2 = m.g;
m.r2 = m.r;
m.b2 = m.b;
m.dist = (mod(m.frame,100)*0.01);
m.maat = (m.maat+above(m.bass_att, 1.5));
m.maat = (below(m.maat, 16)*m.maat);
m.y = ifcond(below(m.maat, 8), ifcond(below(m.maat, 4), m.dist, (1-m.dist)), m.y);
m.x = ifcond(above(m.maat, 8), ifcond(above(m.maat, 4), m.dist, (1-m.dist)), m.x);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('h2=h2+(above(treb,1.32)*0.8)*.9;\n' + 'vr=sin(h2*.8)*.5+.5;\n' + 'vg=sin(h2*.5)*.5+.5;\n' + 'vb=sin(h2*.1)*.5+.5;\n' + 'g=vg;\n' + 'r=vr;\n' + 'b=vb;\n' + 'g2=g;\n' + 'r2=r;\n' + 'b2=b;\n' + 'dist=(frame%100)*.01;\n' + 'maat=maat+(above(bass_att,1.5));\n' + 'maat=below(maat,16)*maat;\n' + 'y=if(below(maat,8),if(below(maat,4),dist,1-dist),y);\n' + 'x=if(above(maat,8),if(above(maat,4),dist,1-dist),x);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 blurry_color_1;\n' + '   vec2 uv2_2;\n' + '   vec3 ret_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + texsize.zw);\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, P_4).xyz;\n' + '  blurry_color_1 = tmpvar_5;\n' + '  uv2_2 = (uv + ((blurry_color_1.xy - 0.37) * 0.03));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv2_2);\n' + '  ret_3 = tmpvar_6.xyz;\n' + '  ret_3 = (ret_3 - 0.004);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '  uv_1 = (0.05 + (0.9 * uv));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv_1);\n' + '  ret_2 = tmpvar_3.xyz;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv_1);\n' + '  ret_2 = (abs((\n' + '    ((tmpvar_4.xyz * scale1) + bias1)\n' + '   - ret_2)) * 6.0);\n' + '  ret_2 = (ret_2 * 1.333);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = 1;\n' + 'wave_g = 0;\n' + 'wave_b = 0;\n' + 'wave_r = sqrt(wave_r);\n' + 'wave_g = sqrt(wave_g);\n' + 'wave_b = sqrt(wave_b);\n' + 'rot = rot + 0.010*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );\n' + 'cx = cx + 0.210*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );\n' + 'cy = cy + 0.210*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );\n' + 'dx = dx + 0.003*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );\n' + 'dy = dy + 0.003*( 0.60*sin(0.284*time) + 0.40*sin(0.247*time) );\n' + 'decay = decay - 0.01*equal(frame%6,0);\n' + 'dx = dx + dx_residual;\n' + 'dy = dy + dy_residual;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'dx_residual = equal(bass_thresh,2.13)*0.016*sin(time*7) + (1-equal(bass_thresh,2.13))*dx_residual;\n' + 'dy_residual = equal(bass_thresh,2.13)*0.012*sin(time*9) + (1-equal(bass_thresh,2.13))*dy_residual;\n' + 'wave_x = wave_x - dx_residual*7;\n' + 'wave_y = wave_y - dy_residual*7;\n' + 'wave_mystery = time*0.03;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
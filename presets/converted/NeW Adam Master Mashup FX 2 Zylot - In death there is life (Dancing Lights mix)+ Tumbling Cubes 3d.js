define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 6.4,
		warpscale : 2.853,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.535,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 2.63006,
		mv_dx : 0.5,
		mv_dy : 0.5,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.522,
		echo_zoom : 2.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.872,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.031,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.1,
		wave_mystery : -0.48,
		decay : 0.98,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.014,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q5_residual = 0;
m.q8 = 0;
m.oldq8 = 0;
m.bass_thresh = 0;
m.q6_residual = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.400*((0.60*Math.sin((0.933*m.time)))+(0.40*Math.sin((1.045*m.time))))));
m.wave_g = (m.wave_g+(0.100*((0.60*Math.sin((0.900*m.time)))+(0.40*Math.sin((0.956*m.time))))));
m.wave_b = (m.wave_b+(0.100*((0.60*Math.sin((0.910*m.time)))+(0.40*Math.sin((0.920*m.time))))));
m.mv_r = m.wave_r;
m.mv_b = m.wave_b;
m.mv_g = m.wave_g;
m.q8 = (m.oldq8+(0.0003*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.q5_residual = (((equal(m.bass_thresh, 2)*0.0064)*Math.sin((m.q8*5)))+((1-equal(m.bass_thresh, 2))*m.q5_residual));
m.q6_residual = (((equal(m.bass_thresh, 2)*0.0048)*Math.sin((m.q8*6)))+((1-equal(m.bass_thresh, 2))*m.q6_residual));
m.dx = m.q5_residual;
m.dy = m.q6_residual;
m.q1 = (0.03*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps));
m.monitor = m.q1;
m.mv_a = (m.bass-1.2);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = ((0.9+(0.1*m.q1))+(m.rad*0.1));
m.zoomexp = (2*m.zoom);
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.94204,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.7463,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			num_inst : 1.0,
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
			tex_zoom : 0.94204,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.7463,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			num_inst : 1.0,
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
			rad : 0.36456,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			num_inst : 1.0,
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
			rad : 0.36456,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			num_inst : 1.0,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 - (ret_1 * 0.5));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur2, uv);\n' + '  ret_1 = ((ret_1 * abs(\n' + '    (((tmpvar_3.xyz * scale2) + bias2) - 0.5)\n' + '  )) * 5.0);\n' + '  ret_1 = (ret_1 - 0.01);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 * 5.0);\n' + '  ret_1 = (ret_1 + 1.2);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uv);\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4.x = (1.0 + (0.2 * sin(time)));\n' + '  tmpvar_4.y = (1.0 + (0.2 * sin(\n' + '    (time * 0.2233333)\n' + '  )));\n' + '  tmpvar_4.z = (1.0 + (0.2 * sin(\n' + '    (time * 0.733467)\n' + '  )));\n' + '  ret_1 = ((ret_1 * (\n' + '    (tmpvar_3.xyz * scale1)\n' + '   + bias1).x) * tmpvar_4);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.400*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );\n' + 'wave_g = wave_g + 0.100*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );\n' + 'wave_b = wave_b + 0.100*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );\n' + 'mv_r = wave_r;\n' + 'mv_b = wave_b;\n' + 'mv_g = wave_g;\n' + 'q8 =oldq8+ 0.0003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 = q8;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'q5_residual = equal(bass_thresh,2)*0.0064*sin(q8*5) + (1-equal(bass_thresh,2))*q5_residual;\n' + 'q6_residual = equal(bass_thresh,2)*0.0048*sin(q8*6) + (1-equal(bass_thresh,2))*q6_residual;\n' + 'dx=q5_residual ;\n' + 'dy=q6_residual ;\n' + 'q1 = 0.03*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'monitor = q1;\n' + 'mv_a = bass-1.2;'),
	'pixel_eqs_str' : ('zoom = 0.9 + 0.1*q1 + rad*0.1;\n' + 'zoomexp = 2*zoom;'),
};

return pmap;
});
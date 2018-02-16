define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 6.4,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.535,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 1.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.5,
		mv_dy : 0.5,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.522,
		echo_zoom : 1.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.872,
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
		modwavealphaend : 1.1,
		wave_mystery : -0.48,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.014,
		rating : 2.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.wave_mystey = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = (m.wave_r+(0.4*Math.sin((m.time*0.333))));
m.wave_g = (m.wave_g+(0.4*Math.sin((m.time*0.444))));
m.wave_b = (m.wave_b+(0.4*Math.sin((m.time*1.522))));
m.zoom = (0.994-div(Math.sin(m.time),300));
m.dx = -0.0001;
m.dy = -0.0001;
m.wave_mystey = div(-m.time,9);
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (0.01+ifcond(below(m.rad, (div(Math.sin((m.time*1.456)),25)+0.18)), (1.2+div(Math.sin((m.time*1.44)),5)), (m.zoom+((0.07+(0.03*Math.sin((m.time*0.55))))*Math.sin(((m.ang*10)+(m.time*8)))))));
m.zoomexp = div(m.zoom,2);
m.rot = (0.1*Math.sin(((ifcond(above(Math.sin(div(m.time,11)), 0), -m.rad, m.rad)*5)+(m.time*0.05))));
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
			sides : 5.0,
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
			sides : 5.0,
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
			sides : 5.0,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_fc_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = mix (uv, uv_orig, vec2(1.5, 1.5));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_fc_main, tmpvar_3);\n' + '  ret_1 = (max (ret_1, (tmpvar_4.xyz * 0.97)) - 0.02);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 * 1.7);\n' + '  ret_1 = (ret_1 * hue_shader);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'wave_r = wave_r + .4*sin(time*.333);\n' + 'wave_g = wave_g + .4*sin(time*.444);\n' + 'wave_b = wave_b + .4*sin(time*1.522);\n' + 'zoom = 0.994 - sin((time))/300;\n' + 'dx = -.0001;\n' + 'dy = -.0001;\n' + 'wave_mystey = -time/9;'),
	'pixel_eqs_str' : ('zoom = 0.01+if(below(rad,sin(time*1.456)/25+0.18),1.2+sin(time*1.44)/5,zoom + (.07+.03*sin(time*.55))*sin(ang*10+time*8));\n' + 'zoomexp = zoom/2;\n' + 'rot = .1*sin(((if(above(sin(time/11),0),-rad,rad))*5)+time*.05);'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 12.0,
		warpscale : 1.47,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 28.599,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.00183,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.5,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 4.77802,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 2.0,
		ob_size : 0.055,
		b1ed : 0.25,
		wave_smoothing : 0.5,
		warpanimspeed : 0.01,
		wave_dots : 1.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99816,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.07,
		mv_l : 1.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : -1.0,
		decay : 0.98,
		wave_a : 100.0,
		ob_g : 0.1,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.4,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.contvol = 0;
m.q2 = 0;
m.q3 = 0;
m.dt = 0;
m.vol = 0;
m.mytime = 0;
m.mtime = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.999;
m.wrap = Math.sin((m.time*10));
m.mv_dx = m.bass;
m.ib_a = 0.005;
m.vol = (((m.bass+m.mid)+m.treb)*0.55);
m.vol = (m.vol*m.vol);
m.mtime = (m.mtime+((m.vol*0.01)*div(48,m.fps)));
m.q1 = (m.mtime*0.5);
m.dt = div(1,m.fps);
m.mytime = (m.mytime+m.dt);
m.contvol = Math.min(Math.max(0.5, (((1-(0.5*m.dt))*m.contvol)+(((0.5*m.dt)*((m.bass+m.mid)+m.treb))*0.133))), 2);
m.q2 = m.contvol;
m.q3 = m.mytime;
m.echo_zoom = (1+(m.vol*0.01));
m.sx = -0.99;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1.005-div(m.rad,100));
m.rot = div(m.rad,100);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 20.35074,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = (m.r+(0.5*Math.sin((m.treb*1.13))));
m.g = (m.g+(0.5*Math.sin((m.bass*1.33))));
m.b = (m.b+(0.5*Math.sin((m.mid*1.23))));
		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=r+0.5*sin(treb*1.13);\n' + 'g=g+0.5*sin(bass*1.33);\n' + 'b=b+0.5*sin(mid*1.23);'),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 100.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 256.0,
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
			r2 : 0.5,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.5,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.5,
			border_g : 1.0,
			rad : 0.40031,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.sounds = 0;

			m.rkeys = ['g','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.sounds = div(((m.bass+m.treb)+m.mid),3);
m.rad = ((m.rad*m.sounds)*0.6);
m.r = (m.r+(Math.sin(m.bass)*m.g));
m.g = (m.g+(Math.sin(m.mid)*m.g));
m.x = (m.x+(0.207*Math.cos(((m.time*m.bass)*0.1))));
m.y = (m.y+(0.207*Math.sin(((m.time*m.bass)*0.1))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('sounds=(bass+treb+mid)/3;\n' + 'rad=rad*sounds*0.6;\n' + 'r=r+sin(bass)*g;\n' + 'g=g+sin(mid)*g;\n' + 'x=x+0.207*cos(time*bass*0.1);\n' + 'y=y+0.207*sin(time*bass*0.1);'),

		},
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
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.3,
			r : 1.0,
			border_g : 1.0,
			rad : 0.13465,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.sounds = 0;

			m.rkeys = ['g','g2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.g2 = (m.g2+(0.09*Math.sin(((m.treb+m.mid)*1.23))));
m.g = (m.g+(0.09*Math.cos(((m.bass+m.mid)*1.37))));
m.sounds = div(((m.bass+m.mid)+m.treb),3);
m.rad = div((m.rad*(m.treb+m.mid)),3);
m.x = (m.x+(0.300*Math.sin((m.time*m.bass))));
m.y = (m.y+(0.317*Math.cos((m.time*m.bass))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('g2=g2+0.09*sin((treb+mid)*1.23);\n' + 'g=g+0.09*cos((bass+mid)*1.37);\n' + 'sounds=(bass+mid+treb)/3;\n' + 'rad=rad*(treb+mid)/3;\n' + 'x=x+0.300*sin(time*bass);\n' + 'y=y+0.317*cos(time*bass);'),

		},
		{
		'baseVals' : {
			r2 : 0.5,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.5,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.20047,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.att = 0;
m.sounds = 0;

			m.rkeys = ['g2','r2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.sounds = div(((m.bass+m.treb)+m.mid),3);
m.att = div(((m.bass_att+m.treb_att)+m.mid_att),3);
m.att = div(((m.bass_att+m.treb_att)+m.mid_att),3);
m.r2 = ((m.r2+(0.25*Math.sin((m.time*6.28))))-m.bass);
m.g2 = ((m.g2+(0.25*Math.sin((m.time*6.28))))-m.bass);
m.rad = m.rad;
m.x = ((m.x+(0.217*Math.cos((m.time*2.3))))+(m.sounds*0.1));
m.y = (m.y+(0.217*Math.sin(((m.time*3.5)+(m.sounds*0.3)))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('sounds=(bass+treb+mid)/3;\n' + 'att=(bass_att+treb_att+mid_att)/3;\n' + 'att=(bass_att+treb_att+mid_att)/3;\n' + 'r2=r2+(0.25*sin(time*6.28))-bass;\n' + 'g2=g2+(0.25*sin(time*6.28))-bass;\n' + 'rad=rad;\n' + 'x=x+0.217*cos(time*2.3)+sounds*0.1;\n' + 'y=y+0.217*sin((time*3.5)+(sounds*0.3));'),

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
	'warp' : ('shader_body {\n' + '   vec3 noise_1;\n' + '   vec3 ret_2;\n' + '   vec2 P_3;\n' + '  P_3 = (((\n' + '    (texsize.xy * texsize_noise_lq.zw)\n' + '  .x * uv) / 2.0) + _qf.z);\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = (texture2D (sampler_noise_lq, P_3) + 1.0).xyz;\n' + '  noise_1 = tmpvar_4;\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_blur1, uv);\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = (((tmpvar_5.xyz * scale1) + bias1) - 0.3);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + (tmpvar_6 * 0.01).xy);\n' + '  tmpvar_7 = texture2D (sampler_main, P_8);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9.x = (0.3 * tmpvar_6.x);\n' + '  tmpvar_9.y = tmpvar_6.y;\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = ((uv / 4.0) + (0.4 * tmpvar_9));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '  ret_2 = ((-0.4 * (\n' + '    ((tmpvar_10.xyz * scale1) + bias1)\n' + '   - \n' + '    (noise_1 * 0.1)\n' + '  )) + (tmpvar_7.xyz + (noise_1 * 0.1)));\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = (1.0 - ((0.01 * _qg.w) * (_qg.w * rad)));\n' + '  ret_2 = (ret_2 * (0.98 * (tmpvar_12 * tmpvar_12)));\n' + '  ret_2 = (ret_2 - 0.04);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13.w = 1.0;\n' + '  tmpvar_13.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_13;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (((uv - 0.5) * vec2(-1.0, 1.0)) + 0.5);\n' + '   vec3 tmpvar_3;\n' + '  tmpvar_3 = mix (texture2D (sampler_main, uv).xyz, texture2D (sampler_main, tmpvar_2).xyz, vec3(0.5, 0.5, 0.5));\n' + '  ret_1 = tmpvar_3;\n' + '  ret_1 = ((ret_1 * 1.3) - 0.1);\n' + '  ret_1 = (ret_1 * ((hue_shader * 8.0) - 6.25));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('decay=.999;\n' + 'wrap=sin(time*10);\n' + 'mv_dx=bass;\n' + 'ib_a=.005;\n' + 'vol=(bass+mid+treb)*0.55;\n' + 'vol=vol*vol;\n' + 'mtime=mtime+vol*0.01*(48/fps);\n' + 'q1=mtime*0.5;\n' + 'dt=1/FPS;\n' + 'mytime=mytime+dt;\n' + 'contvol=min( max(.5, (1-.5*dt)*contvol+.5*dt*(bass+mid+treb)*.133 ) ,2 ) ;\n' + 'q2=contvol;\n' + 'q3=mytime;\n' + 'echo_zoom=1+(vol*0.01);\n' + 'sx=-.99;'),
	'pixel_eqs_str' : ('zoom=1.005-(rad/100);\n' + 'rot=rad/100;'),
};

return pmap;
});
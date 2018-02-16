define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 4.142,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 28.599,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 4.32547,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 2.0,
		ob_size : 0.5,
		b1ed : 0.25,
		wave_smoothing : 0.5,
		warpanimspeed : 100.0,
		wave_dots : 1.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0401,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : -1.0,
		decay : 0.99,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 0.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.4,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q2 = 0;
m.is_beat = 0;
m.fr = 0;
m.dec_med = 0;
m.avg = 0;
m.beat = 0;
m.t0 = 0;
m.dec_slow = 0;
m.peak = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = (m.bass*0.2);
m.warp = (m.warp+((above(m.bass, 1)*m.bass)*0.2));
m.echo_alpha = (above(m.bass, 1.25)*0.9);
m.dec_med = pow(0.9, div(30,m.fps));
m.dec_slow = pow(0.99, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.5+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.fr = ifcond(m.is_beat, ifcond(above(m.fr, 0), -1, 1), m.fr);
m.q2 = (m.q2+((above(m.bass, 1.3)*Math.sin(m.time))*0.02));
m.rot = ((m.rot+m.q2)*m.fr);
m.zoom = (m.zoom+((above(m.bass, 1.3)*m.bass)*0.03));
m.sy = (m.sy+(((above(m.treb_att, 1.2)*m.treb_att)*0.002)*Math.sin(m.time)));
m.sx = (m.sx+(((above(m.treb_att, 1.2)*m.treb_att)*0.002)*Math.sin(m.time)));
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = fract(uv);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, tmpvar_2);\n' + '  ret_1 = tmpvar_3.xyz;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur2, uv);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_blur1, uv);\n' + '  ret_1 = (ret_1 + ((\n' + '    (ret_1 - mix (((tmpvar_4.xyz * scale2) + bias2), ((tmpvar_5.xyz * scale1) + bias1), uv_orig.xxx))\n' + '   * 0.3) - 0.04));\n' + '  ret_1 = (ret_1 * 0.95);\n' + '  ret_1 = (ret_1 + 0.04);\n' + '  ret_1 = mix (ret_1, vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))), vec3(0.2, 0.2, 0.2));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   float dy_1;\n' + '   float dx_2;\n' + '   vec3 ret1_3;\n' + '   vec2 uv1_4;\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, uv).xyz;\n' + '  ret1_3 = tmpvar_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.y = 0.0;\n' + '  tmpvar_6.x = texsize.z;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7.x = 0.0;\n' + '  tmpvar_7.y = texsize.w;\n' + '   vec2 P_8;\n' + '  P_8 = (uv - tmpvar_6);\n' + '   vec2 P_9;\n' + '  P_9 = (uv + tmpvar_6);\n' + '   float tmpvar_10;\n' + '  tmpvar_10 = (texture2D (sampler_main, P_8).xyz - texture2D (sampler_main, P_9).xyz).x;\n' + '  dx_2 = tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - tmpvar_7);\n' + '   vec2 P_12;\n' + '  P_12 = (uv + tmpvar_7);\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = (texture2D (sampler_main, P_11).xyz - texture2D (sampler_main, P_12).xyz).x;\n' + '  dy_1 = tmpvar_13;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = dx_2;\n' + '  tmpvar_14.y = dy_1;\n' + '  uv1_4 = ((0.3 * cos(\n' + '    (((uv - 0.5) * 2.0) + 1.7)\n' + '  )) - (2.0 * tmpvar_14));\n' + '  ret1_3 = ((-(ret1_3) / 4.0) + ((6.0 * vec3(\n' + '    clamp ((0.03 / sqrt(dot (uv1_4, uv1_4))), 0.0, 1.0)\n' + '  )) * (-0.08 + ret1_3)));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 1.0;\n' + '  tmpvar_15.xyz = ret1_3;\n' + '  vec4 ret4 = tmpvar_15;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=bass*.2;\n' + 'warp=warp+(above(bass,1)*bass*.2);\n' + 'echo_alpha=(above(bass,1.25)*.9);\n' + 'dec_med = pow (0.9, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'FR = if(is_beat,if(above(FR,0),-1,1),FR);\n' + 'q2=q2+(above(bass,1.3)*sin(time)*.02);\n' + 'rot=(rot+q2)*FR;\n' + 'zoom=zoom+(above(bass,1.3)*bass*.03);\n' + 'sy=sy+(above(treb_att,1.2)*treb_att*.002*sin(time));\n' + 'sx=sx+(above(treb_att,1.2)*treb_att*.002*sin(time));'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
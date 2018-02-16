define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.21,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 28.599,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.86831,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 0.997,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0002,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.5,
		invert : 1.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : -1.0,
		decay : 0.96,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 0.0,
		rating : 1.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.4,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.mt = 0;
m.toc = 0;
m.vav = 0;
m.treb_avg = 0;
m.tic = 0;
m.ra = 0;
m.slide = 0;
m.bt = 0;
m.bass_avg = 0;
m.vol = 0;
m.tin = 0;
m.mid_avg = 0;
m.sp = 0;
m.vt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.vol = (((m.bass_att+m.treb_att)+m.mid_att)*0.333333);
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = m.time;
m.ra = 10;
m.treb_avg = (m.tic*((m.treb_avg*(div(1,m.tic)-m.ra))+(m.ra*m.treb)));
m.mid_avg = (m.tic*((m.mid_avg*(div(1,m.tic)-m.ra))+(m.ra*m.mid)));
m.bass_avg = (m.tic*((m.bass_avg*(div(1,m.tic)-m.ra))+(m.ra*m.bass)));
m.vav = (m.tic*((m.vav*(div(1,m.tic)-m.ra))+((m.ra*((m.bass+m.treb)+m.mid))*0.33333)));
m.tt = (m.tt+(m.tic*m.treb_avg));
m.mt = (m.mt+(m.tic*m.mid_avg));
m.bt = (m.bt+(m.tic*m.bass_avg));
m.sp = (Math.abs((m.vav-m.slide))*0.1);
m.slide = (ifcond(above(m.slide, m.vav), (m.slide-(m.tic*m.sp)), (m.slide+(m.tic*m.sp)))+((1-m.toc)*m.vav));
m.toc = 1;
m.vt = (m.vt+(m.tic*m.slide));
m.q1 = m.bt;
m.q2 = m.mt;
m.q3 = m.tt;
m.q4 = (m.slide*1);
m.q5 = ((m.vt*0.05)+150);
m.q6 = 0.01;
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_fc_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (normalize((uv - uv_orig)) * texsize.zw);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 0.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + tmpvar_3);\n' + '   vec4 y_6;\n' + '  y_6 = (texture2D (sampler_main, P_5) * 0.97);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 0.0;\n' + '  tmpvar_7.xyz = max (tmpvar_4, y_6).xyz;\n' + '   vec2 P_8;\n' + '  P_8 = (uv - tmpvar_3);\n' + '   vec4 y_9;\n' + '  y_9 = (texture2D (sampler_main, P_8) * 0.97);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 0.0;\n' + '  tmpvar_10.xyz = max (tmpvar_7, y_9).xyz;\n' + '   vec2 P_11;\n' + '  P_11 = (uv + (tmpvar_3 * 2.0));\n' + '   vec4 y_12;\n' + '  y_12 = (texture2D (sampler_main, P_11) * 0.9);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13.w = 0.0;\n' + '  tmpvar_13.xyz = max (tmpvar_10, y_12).xyz;\n' + '   vec2 P_14;\n' + '  P_14 = (uv - (tmpvar_3 * 2.0));\n' + '   vec4 y_15;\n' + '  y_15 = (texture2D (sampler_main, P_14) * 0.9);\n' + '  ret_1 = ((max (tmpvar_13, y_15).xyz - 0.005) * 0.98);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (-((\n' + '    (uv - 0.5)\n' + '   * 1.003)) + 0.5);\n' + '   vec3 tmpvar_3;\n' + '  tmpvar_3 = mix (texture2D (sampler_main, uv).xyz, texture2D (sampler_main, tmpvar_2).xyz, vec3(0.5, 0.5, 0.5));\n' + '  ret_1 = tmpvar_3;\n' + '  ret_1 = (ret_1 * 2.75);\n' + '  ret_1 = (ret_1 * ret_1);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_a = 0;\n' + 'vol = (bass_att + treb_att + mid_att)*.333333;\n' + 'tic = min(time-tin,.1);\n' + 'tin = time;\n' + 'ra = 10;\n' + 'treb_avg = tic*(treb_avg*(1/tic - ra) + ra*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - ra) + ra*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - ra) + ra*bass);\n' + 'vav = tic*(vav*(1/tic - ra) + ra*(bass+treb+mid)*.33333);\n' + 'tt = tt + tic*treb_avg;\n' + 'mt = mt + tic*mid_avg;\n' + 'bt = bt + tic*bass_avg;\n' + 'sp = abs(vav - slide)*.1;\n' + 'slide = if(above(slide,vav),slide-tic*sp,slide+tic*sp) + (1-toc)*vav;\n' + 'toc = 1;\n' + 'vt = vt + tic*slide;\n' + 'q1 = bt;\n' + 'q2 = mt;\n' + 'q3 = tt;\n' + 'q4 = slide*1;\n' + 'q5 = vt*.05 + 150;\n' + 'q6 = .01;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
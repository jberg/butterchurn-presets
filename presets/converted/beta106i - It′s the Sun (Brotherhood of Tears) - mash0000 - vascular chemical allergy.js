define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 1.311,
		echo_alpha : 1.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.015,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.054,
		decay : 1.0,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.5,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.tg3 = 0;
m.treb_thresh = 0;
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.dx_r = 0;
m.vol_thresh = 0;
m.dy_r = 0;
m.rcog = 0;
m.ocog = 0;
m.pfthresh = 0;
m.mid_mid_att = 0;
m.mid_thresh = 0;
m.orcog = 0;
m.cog = 0;
m.thresh = 0;
m.rg1 = 0;
m.rg2 = 0;
m.pfdx_r = 0;
m.tg1 = 0;
m.rg3 = 0;
m.pfdy_r = 0;
m.tg2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.3)*0.96)+1.3)));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_mid_att, m.mid_thresh))*(((m.mid_thresh-1.3)*0.96)+1.3)));
m.vol_thresh = div(((m.pfthresh+m.treb_thresh)+m.mid_thresh),3);
m.q6 = m.vol_thresh;
m.q7 = m.treb_thresh;
m.q8 = m.mid_thresh;
m.q3 = (0.65+(0.5*Math.sin((m.time*1.13))));
m.q2 = (0.65+(0.5*Math.sin((m.time*1.23))));
m.q1 = (0.65+(0.5*Math.sin((m.time*1.33))));
m.wave_r = (0.5+(0.5*Math.sin((1.6*m.time))));
m.wave_g = (0.5+(0.5*Math.sin((4.1*m.time))));
m.wave_b = (-1+(((1-m.wave_r)+1)-m.wave_g));
m.warp = 0;
m.pfthresh = ((above(m.bass_att, m.pfthresh)*2)+((1-above(m.bass_att, m.pfthresh))*(((m.pfthresh-1.3)*0.96)+1.3)));
m.pfdx_r = (((equal(m.pfthresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.pfthresh, 2))*m.pfdx_r));
m.pfdy_r = (((equal(m.pfthresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.pfthresh, 2))*m.pfdy_r));
m.rg1 = Math.abs(Math.sin(m.time));
m.rg2 = (((((1*above(m.rg1, 0.80))+(0.90*below(m.rg1, 0.20)))+((0.80*above(m.rg1, 0.20))*below(m.rg1, 0.40)))+((0.70*above(m.rg1, 0.40))*below(m.rg1, 0.60)))+((0.60*above(m.rg1, 0.6))*below(m.rg1, 0.8)));
m.rg3 = ifcond(equal(m.pfthresh, 2), m.rg2, m.rg3);
m.wave_a = 0;
m.echo_zoom = m.rg3;
m.cog = (m.ocog+(0.005*(((m.bass+m.bass_att)+(m.bass*m.bass_att))-2)));
m.ocog = (below(m.cog, 30000)*m.cog);
m.q4 = m.cog;
m.rcog = (m.orcog+(0.5*(rand(100)*0.01)));
m.orcog = (below(m.rcog, 20000)*m.rcog);
m.q5 = m.rcog;
m.ib_r = (0.5*m.bass_att);
m.ib_g = (0.5*m.treb_att);
m.ib_b = (0.5*m.mid_att);
		m.rkeys = ['tg3','dx_r','dy_r','zoom','dx','cx','dy','cy','rot','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.tg1 = Math.abs(Math.sin(m.time));
m.tg2 = (((12*m.dx_r)*above(m.tg1, 0.5))+((12*m.dy_r)*below(m.tg1, 0.5)));
m.tg3 = ifcond(equal(m.thresh, 2), m.tg2, m.tg3);
m.dx = (m.dx+((0.1*m.tg3)*Math.sin(m.q4)));
m.dy = (m.dy-((0.1*m.tg3)*Math.cos(m.q4)));
m.cx = (m.cx+(0.31*Math.cos(m.q4)));
m.cy = (m.cy+(0.31*Math.sin(m.q4)));
m.zoom = (m.zoom-(0.4*Math.sin(m.q4)));
m.rot = (m.rot+(1*Math.sin((1-m.q4))));
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
			r2 : 0.0,
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
			a2 : 0.1,
			r : 1.0,
			border_g : 1.0,
			rad : 0.44484,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.shpt = 0;
m.sdx_r = 0;
m.sdy_r = 0;
m.sg1 = 0;
m.sg2 = 0;
m.sg3 = 0;

			m.rkeys = ['shpt','sdx_r','sdy_r','sg3'];
			return m;
		},
		'frame_eqs' : function(m) {
m.shpt = ((above(m.bass_att, m.shpt)*2)+((1-above(m.bass_att, m.shpt))*(((m.shpt-1.3)*0.96)+1.3)));
m.sdx_r = (((equal(m.shpt, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.shpt, 2))*m.sdx_r));
m.sdy_r = (((equal(m.shpt, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.shpt, 2))*m.sdy_r));
m.sg1 = Math.abs(Math.sin(m.time));
m.sg2 = (((12*m.sdx_r)*above(m.sg1, 0.5))+((12*m.sdy_r)*below(m.sg1, 0.5)));
m.sg3 = ifcond(equal(m.shpt, 2), m.sg2, m.sg3);
m.r = m.q1;
m.g = m.q2;
m.b = m.q3;
m.r2 = m.q1;
m.g2 = m.q2;
m.b2 = m.q3;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('shpt = above(bass_att,shpt)*2+(1-above(bass_att,shpt))*((shpt-1.3)*0.96+1.3);\n' + 'sdx_r = equal(shpt,2)*0.015*sin(5*time)+(1-equal(shpt,2))*sdx_r;\n' + 'sdy_r = equal(shpt,2)*0.015*sin(6*time)+(1-equal(shpt,2))*sdy_r;\n' + 'sg1 = abs(sin(time));\n' + 'sg2 = 12*sdx_r*above(sg1,0.5) + 12*sdy_r*below(sg1,0.5);\n' + 'sg3 = if(equal(shpt,2),sg2,sg3);\n' + 'r = q1;\n' + 'g = q2;\n' + 'b = q3;\n' + 'r2 = q1;\n' + 'g2 = q2;\n' + 'b2 = q3;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.90528,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.36457,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.shpt = 0;
m.sdx_r = 0;
m.sdy_r = 0;
m.sg1 = 0;
m.sg2 = 0;
m.sg3 = 0;

			m.rkeys = ['shpt','sdx_r','sdy_r','sg3'];
			return m;
		},
		'frame_eqs' : function(m) {
m.shpt = ((above(m.bass_att, m.shpt)*2)+((1-above(m.bass_att, m.shpt))*(((m.shpt-1.3)*0.96)+1.3)));
m.sdx_r = (((equal(m.shpt, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.shpt, 2))*m.sdx_r));
m.sdy_r = (((equal(m.shpt, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.shpt, 2))*m.sdy_r));
m.sg1 = Math.abs(Math.sin(m.time));
m.sg2 = (((12*m.sdx_r)*above(m.sg1, 0.5))+((12*m.sdy_r)*below(m.sg1, 0.5)));
m.sg3 = ifcond(equal(m.shpt, 2), m.sg2, m.sg3);
m.r = m.q1;
m.g = m.q2;
m.b = m.q3;
m.r2 = m.q1;
m.g2 = m.q2;
m.b2 = m.q3;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('shpt = above(bass_att,shpt)*2+(1-above(bass_att,shpt))*((shpt-1.3)*0.96+1.3);\n' + 'sdx_r = equal(shpt,2)*0.015*sin(5*time)+(1-equal(shpt,2))*sdx_r;\n' + 'sdy_r = equal(shpt,2)*0.015*sin(6*time)+(1-equal(shpt,2))*sdy_r;\n' + 'sg1 = abs(sin(time));\n' + 'sg2 = 12*sdx_r*above(sg1,0.5) + 12*sdy_r*below(sg1,0.5);\n' + 'sg3 = if(equal(shpt,2),sg2,sg3);\n' + 'r = q1;\n' + 'g = q2;\n' + 'b = q3;\n' + 'r2 = q1;\n' + 'g2 = q2;\n' + 'b2 = q3;'),

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
	'warp' : ('shader_body {\n' + '   vec2 my_uv_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (vec2(1280.0, 1024.0) * texsize.zw);\n' + '   vec4 tmpvar_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (uv + vec2(0.005, 0.0));\n' + '  tmpvar_4 = texture2D (sampler_blur2, tmpvar_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (uv - vec2(0.005, 0.0));\n' + '  tmpvar_6 = texture2D (sampler_blur2, tmpvar_7);\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = (((\n' + '    (tmpvar_4.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_6.xyz * scale2)\n' + '   + bias2)).x * tmpvar_3.x);\n' + '   vec4 tmpvar_9;\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = (uv + vec2(0.0, 0.005));\n' + '  tmpvar_9 = texture2D (sampler_blur2, tmpvar_10);\n' + '   vec4 tmpvar_11;\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = (uv - vec2(0.0, 0.005));\n' + '  tmpvar_11 = texture2D (sampler_blur2, tmpvar_12);\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = (((\n' + '    (tmpvar_9.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_11.xyz * scale2)\n' + '   + bias2)).x * tmpvar_3.y);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur2, tmpvar_5);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur2, tmpvar_7);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_blur2, tmpvar_10);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur2, tmpvar_12);\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18.x = tmpvar_8;\n' + '  tmpvar_18.y = tmpvar_13;\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = (((\n' + '    (tmpvar_14.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_15.xyz * scale2)\n' + '   + bias2)).x * tmpvar_3.x);\n' + '  tmpvar_19.y = (((\n' + '    (tmpvar_16.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_17.xyz * scale2)\n' + '   + bias2)).x * tmpvar_3.y);\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = ((uv - (tmpvar_18 * 0.01)) + (tmpvar_19 * 0.003));\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_fw_main, tmpvar_20);\n' + '  ret_2.x = tmpvar_21.x;\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur3, uv);\n' + '  ret_2.x = (ret_2.x + ((ret_2.x - \n' + '    ((tmpvar_22.xyz * scale3) + bias3)\n' + '  .x) * 0.1));\n' + '  ret_2.x = (ret_2.x + 0.004);\n' + '   vec2 tmpvar_23;\n' + '  tmpvar_23.x = tmpvar_13;\n' + '  tmpvar_23.y = -(tmpvar_8);\n' + '  my_uv_1 = (uv + ((tmpvar_23 * 0.05) * (1.2 - \n' + '    ((tmpvar_22.xyz * scale3) + bias3)\n' + '  .y)));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_fw_main, my_uv_1);\n' + '  ret_2.z = tmpvar_24.z;\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_blur1, uv);\n' + '   vec2 x_26;\n' + '  x_26 = (my_uv_1 - uv);\n' + '  ret_2.z = (ret_2.z + ((\n' + '    ((ret_2.z - ((tmpvar_25.xyz * scale1) + bias1).z) * sqrt(dot (x_26, x_26)))\n' + '   * 180.0) / sqrt(\n' + '    dot (tmpvar_3, tmpvar_3)\n' + '  )));\n' + '  ret_2.z = (ret_2.z * 0.8);\n' + '  ret_2.z = (ret_2.z + 0.004);\n' + '   vec2 tmpvar_27;\n' + '  tmpvar_27.x = -(tmpvar_13);\n' + '  tmpvar_27.y = tmpvar_8;\n' + '  my_uv_1 = (tmpvar_27 * 0.045);\n' + '   vec4 tmpvar_28;\n' + '   vec2 P_29;\n' + '  P_29 = (uv + vec2(0.01, 0.0));\n' + '  tmpvar_28 = texture2D (sampler_blur2, P_29);\n' + '   vec4 tmpvar_30;\n' + '   vec2 P_31;\n' + '  P_31 = (uv - vec2(0.01, 0.0));\n' + '  tmpvar_30 = texture2D (sampler_blur2, P_31);\n' + '   vec4 tmpvar_32;\n' + '   vec2 P_33;\n' + '  P_33 = (uv + vec2(0.0, 0.01));\n' + '  tmpvar_32 = texture2D (sampler_blur2, P_33);\n' + '   vec4 tmpvar_34;\n' + '   vec2 P_35;\n' + '  P_35 = (uv - vec2(0.0, 0.01));\n' + '  tmpvar_34 = texture2D (sampler_blur2, P_35);\n' + '   vec2 tmpvar_36;\n' + '  tmpvar_36.x = (((\n' + '    (tmpvar_28.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_30.xyz * scale2)\n' + '   + bias2)).y * tmpvar_3.x);\n' + '  tmpvar_36.y = (((\n' + '    (tmpvar_32.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_34.xyz * scale2)\n' + '   + bias2)).y * tmpvar_3.y);\n' + '  my_uv_1 = (my_uv_1 + (uv - (tmpvar_36 * 0.03)));\n' + '   vec4 tmpvar_37;\n' + '  tmpvar_37 = texture2D (sampler_fw_main, my_uv_1);\n' + '  ret_2.y = tmpvar_37.y;\n' + '   vec4 tmpvar_38;\n' + '  tmpvar_38 = texture2D (sampler_blur3, my_uv_1);\n' + '  ret_2.y = (ret_2.y + ((\n' + '    (ret_2.y - ((tmpvar_38.xyz * scale3) + bias3).y)\n' + '   * 0.1) + 0.01));\n' + '   vec4 tmpvar_39;\n' + '  tmpvar_39.w = 1.0;\n' + '  tmpvar_39.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_39;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('treb_thresh=above(treb_att,treb_thresh)*2+(1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*0.96+1.3);\n' + 'mid_thresh=above(mid_att,mid_thresh)*2+(1-above(mid_mid_att,mid_thresh))*((mid_thresh-1.3)*0.96+1.3);\n' + 'vol_thresh= (pfthresh+treb_thresh+mid_thresh)/3;\n' + 'q6 = vol_thresh;\n' + 'q7 = treb_thresh;\n' + 'q8 = mid_thresh;\n' + 'q3 = 0.65 + 0.5*sin(time*1.13);\n' + 'q2 = 0.65 + 0.5*sin(time*1.23);\n' + 'q1 = 0.65 + 0.5*sin(time*1.33);\n' + 'wave_r = 0.5 + 0.5*sin(1.6*time);\n' + 'wave_g = 0.5 + 0.5*sin(4.1*time);\n' + 'wave_b = -1 + (1-wave_r + 1-wave_g);\n' + 'warp = 0;\n' + 'pfthresh = above(bass_att,pfthresh)*2+(1-above(bass_att,pfthresh))*((pfthresh-1.3)*0.96+1.3);\n' + 'pfdx_r = equal(pfthresh,2)*0.015*sin(5*time)+(1-equal(pfthresh,2))*pfdx_r;\n' + 'pfdy_r = equal(pfthresh,2)*0.015*sin(6*time)+(1-equal(pfthresh,2))*pfdy_r;\n' + 'rg1 = abs(sin(time));\n' + 'rg2 = 1*above(rg1,0.80) + 0.90*below(rg1,0.20) + 0.80*above(rg1,0.20)*below(rg1,0.40)+0.70*above(rg1,0.40)*below(rg1,0.60) + 0.60*above(rg1,0.6)*below(rg1,0.8);\n' + 'rg3 = if(equal(pfthresh,2),rg2,rg3);\n' + 'wave_a = 0;\n' + 'echo_zoom = rg3;\n' + 'cog = ocog+0.005*(bass+bass_att+(bass*bass_att)-2);\n' + 'ocog = below(cog,30000)*cog;\n' + 'q4 = cog;\n' + 'rcog = orcog + 0.5*(rand(100)*0.01);\n' + 'orcog = below(rcog,20000)*rcog;\n' + 'q5 = rcog;\n' + 'ib_r = 0.5*bass_att;\n' + 'ib_G = 0.5*treb_att;\n' + 'ib_b = 0.5*mid_att;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'tg1 = abs(sin(time));\n' + 'tg2 = 12*dx_r*above(tg1,0.5) + 12*dy_r*below(tg1,0.5);\n' + 'tg3 = if(equal(thresh,2),tg2,tg3);\n' + 'dx = dx + 0.1*tg3*sin(q4);\n' + 'dy = dy - 0.1*tg3*cos(q4);\n' + 'cx = cx + 0.31*cos(q4);\n' + 'cy = cy + 0.31*sin(q4);\n' + 'zoom = zoom - 0.4*(sin(q4));\n' + 'rot = rot + 1*sin(1-q4);'),
};

return pmap;
});
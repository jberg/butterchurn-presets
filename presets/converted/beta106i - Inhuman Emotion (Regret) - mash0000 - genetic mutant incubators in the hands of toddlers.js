define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 0.905,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.721,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
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
		warpanimspeed : 0.028,
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
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.995,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.5,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.wx = 0;
m.wy = 0;
m.dx_r = 0;
m.dy_r = 0;
m.pfthresh = 0;
m.thresh = 0;
m.rg1 = 0;
m.rg2 = 0;
m.pfdx_r = 0;
m.rg3 = 0;
m.pfdy_r = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (0.5+(0.5*Math.sin((6*m.time))));
m.wave_g = (0.5+(0.5*Math.sin((4.1*m.time))));
m.wave_b = (-1+(((1-m.wave_r)+1)-m.wave_g));
m.warp = 0;
m.pfthresh = ((above(m.bass_att, m.pfthresh)*2)+((1-above(m.bass_att, m.pfthresh))*(((m.pfthresh-1.3)*0.96)+1.3)));
m.pfdx_r = (((equal(m.pfthresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.pfthresh, 2))*m.pfdx_r));
m.pfdy_r = (((equal(m.pfthresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.pfthresh, 2))*m.pfdy_r));
m.rg1 = Math.abs(Math.sin(m.time));
m.rg2 = ((((-1*above(m.rg1, 0.75))-(0.66*below(m.rg1, 0.25)))-((0.33*above(m.rg1, 0.25))*below(m.rg1, 0.5)))-((0*above(m.rg1, 0.5))*below(m.rg1, 0.75)));
m.rg3 = ifcond(equal(m.pfthresh, 2), m.rg2, m.rg3);
m.ob_r = (1-Math.abs(m.wave_r));
m.ob_b = (1-Math.abs(m.wave_b));
m.ob_g = (1-Math.abs(m.wave_g));
m.echo_alpha = (m.echo_alpha-m.rg3);
m.echo_zoom = (m.echo_zoom+Math.sin(m.bass_att));
		m.rkeys = ['dx_r','warp','dy_r','zoom','dx','dy','rot','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.wx = ((0.2*Math.cos(m.time))*m.x);
m.wy = ((0.2*Math.sin((1.2*m.time)))*m.y);
m.rot = (m.rot+(m.dx_r*Math.abs((((m.dy_r*4)-m.treb_att)-m.thresh))));
m.zoom = (m.zoom+(0.05*Math.sin((4-(((4*Math.cos((0.5-(((((m.rad*Math.cos(Math.tan(((14*m.dx_r)*m.bass_att))))*Math.cos((1.12*m.time)))*m.rad)*14)*m.rad))))*16)*m.dx_r)))));
m.rot = (m.rot+m.dx_r);
m.rot = (m.rot+m.dy_r);
m.dx = (m.dx+(1.1*m.dx_r));
m.dy = (m.dy+(1.1*m.dy_r));
m.rot = (m.rot+((above(m.bass_att, 1.25)*1.2)*Math.tan(Math.cos(m.time))));
m.warp = (m.warp+(above(m.bass_att, 1.3)*12));
m.zoom = (m.zoom-((((above(m.bass_att, 1.2)*1.2)*Math.cos((2-Math.abs(((m.rad*2)-m.time)))))*m.wx)*m.rad));
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_noise_lq, tmpvar_3);\n' + '  ret_1 = (ret_1 + ((\n' + '    (tmpvar_4.xyz - 0.5)\n' + '   / 256.0) * 7.0));\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = fract((ret_1 - (\n' + '    (clamp (((vol / vol_att) - 1.1), 0.0, 1.0) * 0.5)\n' + '   + 0.004)));\n' + '  ret_1 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = tmpvar_5;\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = 0.5 + 0.5*sin(6*time);\n' + 'wave_g = 0.5 + 0.5*sin(4.1*time);\n' + 'wave_b = -1 + (1-wave_r + 1-wave_g);\n' + 'warp = 0;\n' + 'pfthresh = above(bass_att,pfthresh)*2+(1-above(bass_att,pfthresh))*((pfthresh-1.3)*0.96+1.3);\n' + 'pfdx_r = equal(pfthresh,2)*0.015*sin(5*time)+(1-equal(pfthresh,2))*pfdx_r;\n' + 'pfdy_r = equal(pfthresh,2)*0.015*sin(6*time)+(1-equal(pfthresh,2))*pfdy_r;\n' + 'rg1 = abs(sin(time));\n' + 'rg2 = -1*above(rg1,0.75) -0.66*below(rg1,0.25) - 0.33*above(rg1,0.25)*below(rg1,0.5) - 0*above(rg1,0.5)*below(rg1,0.75);\n' + 'rg3 = if(equal(pfthresh,2),rg2,rg3);\n' + 'ob_r = 1-abs(wave_r);\n' + 'ob_b = 1-abs(wave_b);\n' + 'ob_g = 1-abs(wave_g);\n' + 'echo_alpha = echo_alpha - rg3;\n' + 'echo_zoom = echo_zoom + sin(bass_att);'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'wx = 0.2*cos(time)*x;\n' + 'wy = 0.2*sin(1.2*time)*y;\n' + 'rot = rot + dx_r*abs(dy_r*4-treb_att-thresh);\n' + 'zoom = zoom + 0.05*sin(4-(4*cos(0.5-rad*cos(tan(14*dx_r*bass_att))*cos(1.12*time)*rad*14*rad))*16*dx_r);\n' + 'rot = rot + dx_r;\n' + 'rot = rot + dy_r;\n' + 'dx = dx + 1.1*dx_r;\n' + 'dy = dy + 1.1*dy_r;\n' + 'rot = rot + above(bass_att,1.25)*1.2*tan(cos(time));\n' + 'warp = warp + above(bass_att,1.3)*12;\n' + 'zoom = zoom - above(bass_att,1.2)*1.2*cos(2-abs(rad*2-time))*wx*rad;'),
};

return pmap;
});
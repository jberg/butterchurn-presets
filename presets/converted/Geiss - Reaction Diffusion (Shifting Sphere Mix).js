define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 2.108,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.719,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.06778,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 4.02709,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.169,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.54,
		warpanimspeed : 1.729,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.00901,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.61,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.433,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.03,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.prev_beat = 0;
m.my_rot = 0;
m.decay_rate = 0;
m.my_zoom = 0;
m.new_warp = 0;
m.q9 = 0;
m.my_cx = 0;
m.my_cy = 0;
m.is_beat = 0;
m.dy_residual = 0;
m.dx_residual = 0;
m.new_zoom = 0;
m.new_cx = 0;
m.rg = 0;
m.new_cy = 0;
m.beat = 0;
m.new_rot = 0;
m.my_warp = 0;
m.bass_thresh = 0;
m.q10 = 0;
m.my_rot = 0;
m.my_zoom = 1;
		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (0.85+(0.25*Math.sin(((0.437*m.time)+1))));
m.wave_g = (0.85+(0.25*Math.sin(((0.544*m.time)+2))));
m.wave_b = (0.85+(0.25*Math.sin(((0.751*m.time)+3))));
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
m.new_rot = (m.rot+(0.020*((0.60*Math.sin((17.381*m.time)))+(0.40*Math.sin((11.579*m.time))))));
m.new_zoom = (m.zoom+(0.01*((0.60*Math.sin(((20.1934*m.time)+3)))+(0.40*Math.sin(((16.307*m.time)+9))))));
m.new_warp = (m.warp+(0.34*((0.60*Math.sin((13.5442*m.time)))+(0.40*Math.sin((22.543*m.time))))));
m.new_cx = (m.cx+(0.310*((0.60*Math.sin((16.374*m.time)))+(0.40*Math.sin((26.294*m.time))))));
m.new_cy = (m.cy+(0.310*((0.60*Math.sin((18.393*m.time)))+(0.40*Math.sin((37.223*m.time))))));
m.rg = Math.max((m.rg*0.77), (0.02+(0.5*Math.min(2, (Math.max(0, (m.mid_att-1))*1.3)))));
m.q9 = m.rg;
m.beat = Math.max(div(m.bass,m.bass_att), div(m.mid,m.mid_att));
m.beat = Math.max(m.beat, div(m.treb,m.treb_att));
m.decay_rate = pow(0.9995, m.fps);
m.beat = Math.max(m.beat, (m.prev_beat*m.decay_rate));
m.wave_a = (((m.beat-m.prev_beat)-0.1)*24);
m.is_beat = above(m.wave_a, 0.5);
m.rot = (((1-m.is_beat)*m.my_rot)+(m.is_beat*m.new_rot));
m.zoom = (((1-m.is_beat)*m.my_zoom)+(m.is_beat*m.new_zoom));
m.warp = (((1-m.is_beat)*m.my_warp)+(m.is_beat*m.new_warp));
m.cx = (((1-m.is_beat)*m.my_cx)+(m.is_beat*m.new_cx));
m.cy = (((1-m.is_beat)*m.my_cy)+(m.is_beat*m.new_cy));
m.prev_beat = m.beat;
m.my_rot = m.rot;
m.my_zoom = m.zoom;
m.my_warp = m.warp;
m.my_cx = m.cx;
m.my_cy = m.cy;
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uv);\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = ((tmpvar_3.xyz * scale1) + bias1);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_blur2, uv);\n' + '  ret_1 = (ret_1 + (mix (\n' + '    (ret_1 - tmpvar_4)\n' + '  , \n' + '    ((((tmpvar_5.xyz * scale2) + bias2) - tmpvar_4) * 2.0)\n' + '  , vec3(rad)) * 0.3));\n' + '  ret_1 = (ret_1 * 0.9);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_noise_lq, tmpvar_6);\n' + '  ret_1 = (mix (ret_1, vec3(0.5, 0.5, 0.5), vec3(0.03, 0.03, 0.03)) + (19.52 * (\n' + '    (tmpvar_7.xyz - 0.5)\n' + '   / 256.0)));\n' + '  ret_1 = mix (ret_1, ret_1.zxy, vec3(0.02, 0.02, 0.02));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 * (hue_shader * 1.15));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('q10 = 0;\n' + 'my_rot = 0;\n' + 'my_zoom = 1;'),
	'frame_eqs_str' : ('wave_r = 0.85 + 0.25*sin(0.437*time+1);\n' + 'wave_g = 0.85 + 0.25*sin(0.544*time+2);\n' + 'wave_b = 0.85 + 0.25*sin(0.751*time+3);\n' + 'dx = dx + 0.003*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );\n' + 'dy = dy + 0.003*( 0.60*sin(0.284*time) + 0.40*sin(0.247*time) );\n' + 'decay = decay - 0.01*equal(frame%6,0);\n' + 'dx = dx + dx_residual;\n' + 'dy = dy + dy_residual;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'dx_residual = equal(bass_thresh,2.13)*0.016*sin(time*7) + (1-equal(bass_thresh,2.13))*dx_residual;\n' + 'dy_residual = equal(bass_thresh,2.13)*0.012*sin(time*9) + (1-equal(bass_thresh,2.13))*dy_residual;\n' + 'wave_x = wave_x - dx_residual*7;\n' + 'wave_y = wave_y - dy_residual*7;\n' + 'wave_mystery = time*0.03;\n' + 'new_rot = rot + 0.020*( 0.60*sin(17.381*time) + 0.40*sin(11.579*time) );\n' + 'new_zoom = zoom + 0.01*( 0.60*sin(20.1934*time+3) + 0.40*sin(16.307*time+9) );\n' + 'new_warp = warp + 0.34*( 0.60*sin(13.5442*time) + 0.40*sin(22.543*time) );\n' + 'new_cx = cx + 0.310*( 0.60*sin(16.374*time) + 0.40*sin(26.294*time) );\n' + 'new_cy = cy + 0.310*( 0.60*sin(18.393*time) + 0.40*sin(37.223*time) );\n' + 'rg = max(rg*0.77, 0.02 + 0.5*min(2,max(0,mid_att-1)*1.3));\n' + 'q9 = rg;\n' + 'beat = max(bass/bass_att, mid/mid_att);\n' + 'beat = max(beat, treb/treb_att);\n' + 'decay_rate = pow(0.9995, fps);\n' + 'beat = max( beat, prev_beat*decay_rate );\n' + 'wave_a = (beat - prev_beat - 0.1)*24;\n' + 'is_beat = above(wave_a, 0.5);\n' + 'rot = (1-is_beat)*my_rot + (is_beat)*new_rot;\n' + 'zoom = (1-is_beat)*my_zoom + (is_beat)*new_zoom;\n' + 'warp = (1-is_beat)*my_warp + (is_beat)*new_warp;\n' + 'cx = (1-is_beat)*my_cx + (is_beat)*new_cx;\n' + 'cy = (1-is_beat)*my_cy + (is_beat)*new_cy;\n' + 'prev_beat = beat;\n' + 'my_rot = rot;\n' + 'my_zoom = zoom;\n' + 'my_warp = warp;\n' + 'my_cx = cx;\n' + 'my_cy = cy;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
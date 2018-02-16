define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.32,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 4.778,
		echo_alpha : 0.15,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.0101,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 5.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.22,
		ob_size : 0.015,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99951,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.1,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.691,
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
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.res = 0;
m.decay_to = 0;
m.xx = 0;
m.yy = 0;
m.prev_beat = 0;
m.diff = 0;
m.decay_rate = 0;
m.rx = 0;
m.ry = 0;
m.is_beat = 0;
m.m = 0;
m.q11 = 0;
m.q12 = 0;
m.vol = 0;
m.q13 = 0;
m.q14 = 0;
m.min_att = 0;
m.beat = 0;
m.w = 0;
m.q17 = 0;
m.q18 = 0;
m.beat_level = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.5*Math.sin((m.time*1.13))));
m.wave_g = (m.wave_g+(0.5*Math.sin((m.time*1.23))));
m.wave_b = (m.wave_b+(0.5*Math.sin((m.time*1.33))));
m.wave_x = (m.wave_x+(0.2*Math.sin((0.32*m.time))));
m.wave_y = (m.wave_y+(0.2*Math.cos((0.32*m.time))));
m.ob_r = m.wave_r;
m.ob_g = m.wave_g;
m.ob_b = m.wave_b;
m.vol = (((m.bass*8)+(m.mid*5))+(m.treb*3));
m.m = ((m.m*0.97)+(m.vol*0.08));
m.monitor = m.vol;
m.beat = ((above(m.vol, m.res)*above(m.vol, m.m))*above(m.vol, 16));
m.diff = (((1-m.beat)*m.diff)+(m.beat*(m.vol-m.res)));
m.res = ((m.beat*(m.vol+(m.m*0.04)))+((1-m.beat)*(m.res-div(((0.1+(m.diff*0.02))*60),m.fps))));
m.res = Math.max(0, m.res);
m.w = ifcond(m.beat, (div(rand(4096),1024)*Math.asin(1)), m.w);
m.xx = ifcond(m.beat, (0.1+div(rand(800),1000)), m.xx);
m.yy = ifcond(m.beat, (0.1+div(rand(800),1000)), m.yy);
m.decay_rate = pow(0.995, m.fps);
m.min_att = 2.2;
m.decay_to = 1;
m.beat = div(m.bass,Math.max(m.min_att, m.bass_att));
m.beat = Math.max(m.beat, div(m.mid,Math.max(m.min_att, m.mid_att)));
m.beat = Math.max(m.beat, div(m.treb,Math.max(m.min_att, m.treb_att)));
m.beat = Math.max(m.beat, (((m.prev_beat-m.decay_to)*m.decay_rate)+m.decay_to));
m.beat_level = (((m.beat-m.prev_beat)-0.07)*24);
m.is_beat = above(m.beat_level, 0.5);
m.prev_beat = m.beat;
m.w = ifcond(m.is_beat, (m.w+div((rand(256)-128),1024)), m.w);
m.xx = ifcond(m.is_beat, (m.xx+div((rand(256)-128),4096)), m.xx);
m.yy = ifcond(m.is_beat, (m.yy+div((rand(256)-128),4096)), m.yy);
m.q11 = Math.sin(m.w);
m.q12 = Math.cos(m.w);
m.q13 = m.xx;
m.q14 = m.yy;
m.q17 = Math.sin(-m.w);
m.q18 = Math.cos(-m.w);
		m.rkeys = ['dy','dx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rx = m.ang;
m.ry = m.rad;
m.rot = (div(Math.sin((Math.floor((1+(m.ry*2.864)))*(8446669+(Math.sin((div(m.time,21774898)+div(m.treb,55559599)))*667777)))),2)+0.5);
m.zoom = (div(Math.sin((Math.floor((1+(m.rx*2.654)))*(4747833+(Math.sin((div(m.time,26666825)+div(m.mid,59555599)))*754166)))),2)+0.5);
m.rot = div(Math.sin((((m.rot*m.rot)*m.rad)*88)),399);
m.zoom = ((1-div(Math.sin(((sqr(m.zoom)*m.ang)*88)),356))-(0.004141*(1-m.rad)));
m.dx = m.dx;
m.dy = m.dy;
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
			textured : 1.0,
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
			y : 1.8,
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
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
			y : 1.8,
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
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
			y : 1.8,
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
	'warp' : (''),
	'comp' : ('shader_body {\n' + '   vec2 uv_rr_1;\n' + '   vec2 uv_r_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = ((uv - _qd.xy) * aspect.xy);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = ((_qc.w * tmpvar_3.x) - (_qc.z * tmpvar_3.y));\n' + '  tmpvar_4.y = ((_qc.z * tmpvar_3.x) + (_qc.w * tmpvar_3.y));\n' + '  uv_r_2 = (4.0 * tmpvar_4);\n' + '  uv_r_2 = (_qd.xy + (uv_r_2 * aspect.zw));\n' + '  uv_r_2 = (1.0 - abs((\n' + '    (fract((uv_r_2 * 0.5)) * 2.0)\n' + '   - 1.0)));\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = ((uv_r_2 - _qd.xy) * aspect.xy);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = ((_qe.y * tmpvar_5.x) - (_qe.x * tmpvar_5.y));\n' + '  tmpvar_6.y = ((_qe.x * tmpvar_5.x) + (_qe.y * tmpvar_5.y));\n' + '  uv_rr_1 = (4.0 * tmpvar_6);\n' + '  uv_rr_1 = (_qd.xy + ((\n' + '    (uv_rr_1 - _qd.xy)\n' + '   * aspect.zw) * 0.06));\n' + '  uv_rr_1 = (1.0 - abs((\n' + '    (fract((uv_rr_1 * 0.5)) * 2.0)\n' + '   - 1.0)));\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_blur3, uv_rr_1);\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_main, uv_rr_1);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9.w = 1.0;\n' + '  tmpvar_9.xyz = pow (((\n' + '    abs((((tmpvar_7.xyz * scale3) + bias3) - tmpvar_8.xyz))\n' + '   * 3.0) + 0.1), vec3(1.5, 1.5, 1.5));\n' + '  vec4 ret4 = tmpvar_9;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.5*sin(time*1.13);\n' + 'wave_g = wave_g + 0.5*sin(time*1.23);\n' + 'wave_b = wave_b + 0.5*sin(time*1.33);\n' + 'wave_x = wave_x + 0.2*sin(0.32*time);\n' + 'wave_y = wave_y + 0.2*cos(0.32*time);\n' + 'ob_r = wave_r;\n' + 'ob_g = wave_g;\n' + 'ob_b = wave_b;\n' + 'vol = bass*8 + mid*5 + treb*3;\n' + 'm = m*0.97 + vol*0.08;\n' + 'monitor = vol;\n' + 'beat = above(vol,res)*above(vol,m)*above(vol,16);\n' + 'diff = (1-beat)*diff + beat*(vol-res);\n' + 'res = beat*(vol + m*0.04) + (1-beat)*(res -  (0.1+diff*0.02)*60/fps);\n' + 'res = max(0,res);\n' + 'w = if(beat, rand(4096)/1024*asin(1),w);\n' + 'xx = if(beat, 0.1 + rand(800)/1000, xx);\n' + 'yy = if(beat, 0.1 + rand(800)/1000, yy);\n' + 'decay_rate = pow(0.995, fps);\n' + 'min_att    = 2.2;\n' + 'decay_to   = 1;\n' + 'beat =           bass/max(min_att,bass_att);\n' + 'beat = max(beat, mid /max(min_att,mid_att ));\n' + 'beat = max(beat, treb/max(min_att,treb_att));\n' + 'beat = max( beat, (prev_beat-decay_to)*decay_rate + decay_to );\n' + 'beat_level     = (beat - prev_beat - 0.07)*24;\n' + 'is_beat = above(beat_level, 0.5);\n' + 'prev_beat = beat;\n' + 'w  = if(is_beat, w + (rand(256)-128)/1024, w);\n' + 'xx = if(is_beat, xx + (rand(256)-128)/4096, xx);\n' + 'yy = if(is_beat, yy + (rand(256)-128)/4096, yy);\n' + 'q11 = sin(w);\n' + 'q12 = cos(w);\n' + 'q13 = xx;\n' + 'q14 = yy;\n' + 'q17 = sin(-w);\n' + 'q18 = cos(-w);'),
	'pixel_eqs_str' : ('rx=ang;\n' + 'ry=rad;\n' + 'rot=sin(int(1+ry*2.864)*(8446669+sin(time/21774898+treb/55559599)*667777))/2+.5;\n' + 'zoom=sin(int(1+rx*2.654)*(4747833+sin(time/26666825+mid/59555599)*754166))/2+.5;\n' + 'rot=sin(rot*rot*rad*88)/399;\n' + 'zoom=1-sin(sqr(zoom)*ang*88)/356-.004141*(1-rad);\n' + 'dx=dx;\n' + 'dy=dy;'),
};

return pmap;
});
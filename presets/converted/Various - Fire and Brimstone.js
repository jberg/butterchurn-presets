define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.5,
		mv_x : 31.199999,
		warpscale : 1.793986,
		brighten : 0.0,
		mv_y : 2.280001,
		wave_scale : 0.6401,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 1.599183,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.01,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.5,
		mv_b : 0.8,
		echo_zoom : 0.999609,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.27,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.96,
		zoom : 0.998531,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.2,
		mv_l : 2.5,
		invert : 0.0,
		rot : 0.002,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.9,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.5,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.peakbass_att = 0;
m.q2 = 0;
m.q3 = 0;
m.mybeat = 0;
m.q4 = 0;
m.q5 = 0;
m.oldratio = 0;
m.q6 = 0;
m.meanbass_att = 0;
m.q7 = 0;
m.rx = 0;
m.q8 = 0;
m.ry = 0;
m.oldq2 = 0;
m.oldq3 = 0;
m.oldq4 = 0;
m.ratio = 0;
m.oldq5 = 0;
m.oldq6 = 0;
m.lastbeat = 0;
m.flag = 0;
m.oldq7 = 0;
m.oldq8 = 0;
m.mybeat2 = 0;
m.oldflag = 0;
m.beatrate = 0;
m.beat = 0;
m.volume = 0;
m.q8 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.q8 = ((m.oldq8+(0.001*div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.2*m.treb))+(0.2*m.treb_att))+(0.2*m.mid))+(0.2*m.mid_att)), 6),m.fps)))+div(0.1,m.fps));
m.oldq8 = m.q8;
m.ob_r = (0.3-(0.3*((0.5*Math.sin((m.time*0.3701)))+(0.3*Math.cos((m.q8*0.438))))));
m.ob_g = (0.6-(0.4*Math.sin((m.time*0.24))));
m.ob_b = (0.35-(0.3*Math.cos((m.time*0.4816))));
m.warp = 0;
m.ib_size = 0.02;
m.ib_r = (m.ib_r+(0.5*Math.sin((m.time*0.234))));
m.ib_g = (m.ib_g+(0.5*Math.sin((m.time*0.547))));
m.ib_b = (m.ib_b-(0.5*Math.sin((m.time*1.431))));
m.cx = (m.cx+(0.3150*((0.60*Math.sin((0.23874*m.time)))+(0.14*Math.sin((0.194*m.time))))));
m.cy = (m.cy+(0.476*((0.60*Math.sin((0.1274*m.time)))+(0.10*Math.sin((0.394*m.time))))));
m.volume = (0.15*(((m.bass_att+m.bass)+m.mid)+m.mid_att));
m.beatrate = ifcond(equal(m.beatrate, 0), 1, ifcond(below(m.volume, 0.01), 1, m.beatrate));
m.lastbeat = ifcond(equal(m.lastbeat, 0), m.time, m.lastbeat);
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.peakbass_att = ifcond(above(m.bass_att, m.peakbass_att), m.bass_att, m.peakbass_att);
m.beat = ifcond(above(m.volume, 0.8), ifcond(below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)), ifcond(above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))), 1, 0), 0), 0);
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ifcond(equal(m.beat, 0), ifcond(above((m.time-m.lastbeat), (2*m.beatrate)), (m.peakbass_att*0.95), (m.peakbass_att*0.995)), m.bass_att);
m.lastbeat = ifcond(m.beat, m.time, m.lastbeat);
m.mybeat = ifcond(m.beat, (m.mybeat+1), m.mybeat);
m.mybeat = ifcond(above(m.mybeat, 7), 0, m.mybeat);
m.mybeat2 = ifcond(equal(m.mybeat, 1), 1, 0);
m.q7 = ifcond((m.beat*m.mybeat2), (0.001+(0.0001*rand(40))), m.oldq7);
m.oldq7 = m.q7;
m.q6 = ifcond((m.beat*m.mybeat2), (0.001+(0.0001*rand(40))), m.oldq6);
m.oldq6 = m.q6;
m.q5 = ifcond((m.beat*m.mybeat2), (0.001+(0.0001*rand(40))), m.oldq5);
m.oldq5 = m.q5;
m.q4 = ifcond((m.beat*m.mybeat2), (0.001+(0.0001*rand(40))), m.oldq4);
m.oldq4 = m.q4;
m.flag = ifcond((m.beat*m.mybeat2), ifcond((rand(2)-1), 1, 0), m.oldflag);
m.oldflag = m.flag;
m.ratio = ifcond((m.beat*m.mybeat2), (100+rand(60)), m.oldratio);
m.oldratio = m.ratio;
m.q3 = ifcond((m.beat*m.mybeat2), ifcond(m.flag, m.ratio, (0.75*m.ratio)), m.oldq3);
m.oldq3 = m.q3;
m.q2 = ifcond((m.beat*m.mybeat2), ifcond(m.flag, (0.75*m.ratio), m.ratio), m.oldq2);
m.oldq2 = m.q2;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rx = m.x;
m.ry = m.y;
m.dx = (div(Math.sin((Math.floor(((1+(m.ry*2.864))+Math.sin(div(m.time,17))))*(8446669+(Math.sin((div(m.time,71774898)+div(m.treb,55559599)))*667777)))),2)+0.5);
m.dy = (div(Math.sin((Math.floor(((1+(m.rx*2.654))+Math.sin(div(m.time,13))))*(4747833+(Math.sin((div(m.time,86666825)+div(m.mid,59555599)))*754166)))),2)+0.5);
m.dx = div(Math.sin((((sqr(m.y)*m.y)*88)+(Math.sin(div(m.time,9.3))*2))),499);
m.dy = (div(Math.sin((((sqr(m.x)*m.x)*888)+(Math.sin(div(m.time,11))*2))),496)-(0.004141*(1-m.rad)));
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
	'warp' : ('shader_body {\n' + '   vec2 my_uv_1;\n' + '   vec3 ret_2;\n' + '   vec4 tmpvar_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (uv + vec2(0.005, 0.0));\n' + '  tmpvar_3 = texture2D (sampler_blur2, tmpvar_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (uv - vec2(0.005, 0.0));\n' + '  tmpvar_5 = texture2D (sampler_blur2, tmpvar_6);\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale2) + bias2) - ((tmpvar_5.xyz * scale2) + bias2)).x;\n' + '   vec4 tmpvar_8;\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = (uv + vec2(0.0, 0.005));\n' + '  tmpvar_8 = texture2D (sampler_blur2, tmpvar_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = (uv - vec2(0.0, 0.005));\n' + '  tmpvar_10 = texture2D (sampler_blur2, tmpvar_11);\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale2) + bias2) - ((tmpvar_10.xyz * scale2) + bias2)).x;\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_blur2, tmpvar_4);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur2, tmpvar_6);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur2, tmpvar_9);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_blur2, tmpvar_11);\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = tmpvar_7;\n' + '  tmpvar_17.y = tmpvar_12;\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18.x = (((tmpvar_13.xyz * scale2) + bias2) - ((tmpvar_14.xyz * scale2) + bias2)).x;\n' + '  tmpvar_18.y = (((tmpvar_15.xyz * scale2) + bias2) - ((tmpvar_16.xyz * scale2) + bias2)).x;\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19 = ((uv - (tmpvar_17 * 0.005)) + (tmpvar_18 * 0.002));\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_fc_main, tmpvar_19);\n' + '  ret_2.x = tmpvar_20.x;\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_blur3, uv);\n' + '  ret_2.x = (ret_2.x + ((ret_2.x - \n' + '    ((tmpvar_21.xyz * scale3) + bias3)\n' + '  .x) * 0.1));\n' + '  ret_2.x = (ret_2.x + 0.006);\n' + '  ret_2.x = ret_2.x;\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22.x = tmpvar_12;\n' + '  tmpvar_22.y = -(tmpvar_7);\n' + '  my_uv_1 = (uv + ((tmpvar_22 * 0.05) * (1.2 - \n' + '    ((tmpvar_21.xyz * scale3) + bias3)\n' + '  .y)));\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_fw_main, my_uv_1);\n' + '  ret_2.z = tmpvar_23.z;\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_blur1, uv);\n' + '   vec2 x_25;\n' + '  x_25 = (my_uv_1 - uv);\n' + '  ret_2.z = (ret_2.z + ((\n' + '    (ret_2.z - ((tmpvar_24.xyz * scale1) + bias1).z)\n' + '   * \n' + '    sqrt(dot (x_25, x_25))\n' + '  ) * 120.0));\n' + '  ret_2.z = (ret_2.z * 0.85);\n' + '  ret_2.z = (ret_2.z + 0.008);\n' + '   vec2 tmpvar_26;\n' + '  tmpvar_26.x = -(tmpvar_12);\n' + '  tmpvar_26.y = tmpvar_7;\n' + '  my_uv_1 = (tmpvar_26 * 0.05);\n' + '   vec4 tmpvar_27;\n' + '   vec2 P_28;\n' + '  P_28 = (uv + vec2(0.01, 0.0));\n' + '  tmpvar_27 = texture2D (sampler_blur2, P_28);\n' + '   vec4 tmpvar_29;\n' + '   vec2 P_30;\n' + '  P_30 = (uv - vec2(0.01, 0.0));\n' + '  tmpvar_29 = texture2D (sampler_blur2, P_30);\n' + '   vec4 tmpvar_31;\n' + '   vec2 P_32;\n' + '  P_32 = (uv + vec2(0.0, 0.01));\n' + '  tmpvar_31 = texture2D (sampler_blur2, P_32);\n' + '   vec4 tmpvar_33;\n' + '   vec2 P_34;\n' + '  P_34 = (uv - vec2(0.0, 0.01));\n' + '  tmpvar_33 = texture2D (sampler_blur2, P_34);\n' + '   vec2 tmpvar_35;\n' + '  tmpvar_35.x = (((tmpvar_27.xyz * scale2) + bias2) - ((tmpvar_29.xyz * scale2) + bias2)).y;\n' + '  tmpvar_35.y = (((tmpvar_31.xyz * scale2) + bias2) - ((tmpvar_33.xyz * scale2) + bias2)).y;\n' + '  my_uv_1 = (my_uv_1 + (uv - (tmpvar_35 * 0.03)));\n' + '   vec4 tmpvar_36;\n' + '  tmpvar_36 = texture2D (sampler_fw_main, my_uv_1);\n' + '  ret_2.y = tmpvar_36.y;\n' + '   vec4 tmpvar_37;\n' + '  tmpvar_37 = texture2D (sampler_blur3, my_uv_1);\n' + '  ret_2.y = (ret_2.y + ((\n' + '    (ret_2.y - ((tmpvar_37.xyz * scale3) + bias3).y)\n' + '   * 0.1) + 0.03));\n' + '   vec4 tmpvar_38;\n' + '  tmpvar_38.w = 1.0;\n' + '  tmpvar_38.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_38;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('q8=0;'),
	'frame_eqs_str' : ('q8 =oldq8+ 0.001*(pow(1.2*bass+0.4*bass_att+0.2*treb+0.2*treb_att+0.2*mid+0.2*mid_att,6)/fps) +0.1/fps;\n' + 'oldq8 = q8;\n' + 'ob_r = 0.3 - 0.3*(0.5*sin(time*0.3701)+ 0.3*cos(q8*0.438));\n' + 'ob_g = 0.6- 0.4*sin(time*0.24);\n' + 'ob_b = 0.35 - 0.3*cos(time*0.4816);\n' + 'warp =0;\n' + 'ib_size = 0.02;\n' + 'ib_r = ib_r + 0.5*sin(time*0.234);\n' + 'ib_g = ib_g + 0.5*sin(time*0.547);\n' + 'ib_b = ib_b - 0.5*sin(time*1.431);\n' + 'cx = cx +0.3150*( 0.60*sin(0.23874*time) + 0.14*sin(0.194*time) );\n' + 'cy = cy + 0.476*( 0.60*sin(0.1274*time) + 0.10*sin(0.394*time) );\n' + 'volume = 0.15*(bass_att+bass+mid+mid_att);\n' + 'beatrate = if(equal(beatrate,0),1,if(below(volume,0.01),1,beatrate));\n' + 'lastbeat = if(equal(lastbeat,0),time,lastbeat);\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = if(above(bass_att,peakbass_att),bass_att,peakbass_att);\n' + 'beat = if(above(volume,0.8),if(below(peakbass_att - bass_att, 0.05*peakbass_att),if(above(time - lastbeat,0.1+0.5*(beatrate-0.1)),1,0),0),0);\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = if(equal(beat,0),if(above(time - lastbeat,2*beatrate),peakbass_att*0.95,peakbass_att*0.995),bass_att);\n' + 'lastbeat = if(beat,time,lastbeat);\n' + 'mybeat = if(beat,mybeat+1,mybeat);\n' + 'mybeat = if(above(mybeat,7),0,mybeat);\n' + 'mybeat2 = if(equal(mybeat,1),1,0);\n' + 'q7 = if(beat*mybeat2,0.001+0.0001*rand(40),oldq7);\n' + 'oldq7=q7;\n' + 'q6 = if(beat*mybeat2,0.001+0.0001*rand(40),oldq6);\n' + 'oldq6=q6;\n' + 'q5= if(beat*mybeat2,0.001+0.0001*rand(40),oldq5);\n' + 'oldq5=q5;\n' + 'q4 = if(beat*mybeat2,0.001+0.0001*rand(40),oldq4);\n' + 'oldq4=q4;\n' + 'Flag = If(beat*mybeat2,if(Rand(2)-1,1,0),oldFlag);\n' + 'oldflag = flag;\n' + 'Ratio = If(Beat*mybeat2,100+rand(60),oldRatio);\n' + 'OldRatio = Ratio;\n' + 'q3 = if(beat*mybeat2,if(flag,ratio,0.75*ratio),oldq3);\n' + 'oldq3=q3;\n' + 'q2 = if(beat*mybeat2,if(flag,0.75*ratio,ratio),oldq2);\n' + 'oldq2=q2;'),
	'pixel_eqs_str' : ('rx=x;\n' + 'ry=y;\n' + 'dx=sin(int(1+ry*2.864+sin(time/17) )*(8446669+sin(time/71774898+treb/55559599)*667777))/2+.5;\n' + 'dy=sin(int(1+rx*2.654+sin(time/13) )*(4747833+sin(time/86666825+mid/59555599)*754166))/2+.5;\n' + 'dx=sin(sqr(y)*y*88+sin(time/9.3)*2)/499;\n' + 'dy=sin(sqr(x)*x*888+sin(time/11)*2 )/496-.004141*(1-rad);\n' + 'dx=dx;\n' + 'dy=dy;'),
};

return pmap;
});
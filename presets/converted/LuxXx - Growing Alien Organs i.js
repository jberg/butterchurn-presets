define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.56,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 0.267,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 2.781,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 5.2E-4,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 0.5,
		echo_zoom : 0.362,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.16,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.85,
		invert : 0.0,
		rot : -0.04,
		wave_thick : 0.0,
		modwavealphaend : 1.1,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.1,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 0.5,
		rating : 2.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.0,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.stickybit = 0;
m.diff = 0;
m.bit2 = 0;
m.q8 = 0;
m.sample1 = 0;
m.sample2 = 0;
m.basstime = 0;
m.basssum = 0;
m.spintime = 0;
m.state = 0;
m.difftime = 0;
m.vol = 0;
m.volavg2 = 0;
m.edge = 0;
m.volavg = 0;
m.spintime = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.basstime = (m.basstime+(m.bass_att*0.03));
m.q1 = m.basstime;
m.vol = pow(((m.bass+m.mid)+m.treb), 2);
m.basssum = m.vol;
m.basstime = ifcond(below(m.basstime, 465), 465, m.basstime);
m.stickybit = mod(m.time,2);
m.volavg = (m.volavg+(m.vol*equal(m.stickybit, 1)));
m.sample1 = (m.sample1+equal(m.stickybit, 1));
m.volavg2 = (m.volavg2+(m.vol*equal(m.stickybit, 0)));
m.sample2 = (m.sample2+equal(m.stickybit, 0));
m.edge = bnot(equal(m.bit2, m.stickybit));
m.volavg = (m.volavg-((m.volavg*m.edge)*m.stickybit));
m.volavg2 = (m.volavg2-((m.volavg2*m.edge)*equal(m.stickybit, 0)));
m.sample1 = (m.sample1-((m.sample1*m.edge)*m.stickybit));
m.sample2 = (m.sample2-((m.sample2*m.edge)*equal(m.stickybit, 0)));
m.diff = ifcond(equal(m.stickybit, 1), div(m.basssum,div(m.volavg2,m.sample2)), 0);
m.diff = ifcond(equal(m.stickybit, 0), div(m.basssum,div(m.volavg,m.sample1)), m.diff);
m.q3 = m.diff;
m.bit2 = mod(m.time,2);
m.difftime = (m.difftime+(m.diff*0.03));
m.q2 = m.difftime;
m.difftime = ifcond(above(m.difftime, 2000), 0, m.difftime);
m.spintime = (m.spintime+((m.bass*0.03)*ifcond(equal(mod(m.state,2), 1), 1, -1)));
m.q8 = m.spintime;
m.state = (m.state+above(m.diff, 10));
m.monitor = m.spintime;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1.05-(Math.sin(m.q3)*0.04));
m.rot = 0;
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
			a : 0.5,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.5,
			r : 0.0,
			border_g : 1.0,
			rad : 6.81129,
			x : 0.37,
			y : 0.5,
			ang : 3.64425,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t1 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['b2','g2','r2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.q1*(0.303+(0.01*m.t1)));
m.r = Math.min(1, Math.max(0, (0+(0.1*Math.sin(((m.time*0.417)+1))))));
m.g = Math.min(1, Math.max(0, (0+(0.1*Math.sin(((m.time*0.391)+2))))));
m.b = Math.min(1, Math.max(0, (0+(0.1*Math.sin(((m.time*0.432)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.02*Math.sin(((m.time*0.657)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.02*Math.sin(((m.time*0.737)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.02*Math.sin(((m.time*0.884)+6))))));
m.additive = (0.5+(0.15*(m.bass+m.bass_att)));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('ang = q1*(0.303 + 0.01*t1);\n' + 'r = min(1,max(0,0+ 0.1*sin(time*0.417 + 1)));\n' + 'g = min(1,max(0,0 + 0.1*sin(time*0.391 + 2)));\n' + 'b = min(1,max(0,0 + 0.1*sin(time*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.02*sin(time*0.657 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.02*sin(time*0.737 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.02*sin(time*0.884 + 6)));\n' + 'additive =0.5+0.15*(bass+bass_att);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.5,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.89796,
			x : 0.37,
			y : 0.5,
			ang : 3.64425,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t1 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['b2','g2','r2','b','g','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.07*Math.sin(((m.q1*0.15)+3))));
m.y = (m.y+(0.03*Math.sin(((m.q1*0.19)+1))));
m.tex_ang = (m.q1*(0.01+(0.0001*m.t1)));
m.r = Math.min(1, Math.max(0, (m.r+(0.01*Math.sin(((m.time*0.0417)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.01*Math.sin(((m.time*0.391)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.01*Math.sin(((m.time*0.432)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.01*Math.sin(((m.time*0.457)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.01*Math.sin(((m.time*0.0437)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.01*Math.sin(((m.time*0.484)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('x = x + 0.07*sin(q1*0.15+3);\n' + 'y = y + 0.03*sin(q1*0.19+1);\n' + 'tex_ang = q1*(0.01 + 0.0001*t1);\n' + 'r = min(1,max(0,r + 0.01*sin(time*0.0417 + 1)));\n' + 'g = min(1,max(0,g + 0.01*sin(time*0.391 + 2)));\n' + 'b = min(1,max(0,b + 0.01*sin(time*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.01*sin(time*0.457 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.01*sin(time*0.0437 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.01*sin(time*0.484 + 6)));'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.51386,
			x : 0.67,
			y : 0.43,
			ang : 4.20974,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t1 = 0;
m.t2 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['r2','b','g','g2','b2','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.05*Math.sin((m.q1*0.017))));
m.y = (m.y+(0.09*Math.sin((m.q1*0.013))));
m.tex_ang = (m.q1*(0.02+(0.0001*m.t1)));
m.rad = (m.rad*(0.9+(0.2*m.t2)));
m.r = Math.min(1, Math.max(0, (m.r+(0.01*Math.sin(((m.time*0.417)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.01*Math.sin(((m.time*0.391)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.01*Math.sin(((m.time*0.432)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.01*Math.sin(((m.time*0.457)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.01*Math.sin(((m.time*0.437)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.01*Math.sin(((m.time*0.484)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('x = x + 0.05*sin(q1*0.017);\n' + 'y = y + 0.09*sin(q1*0.013);\n' + 'tex_ang = q1*(0.02 + 0.0001*t1);\n' + 'rad = rad * (0.9 + 0.2*t2);\n' + 'r = min(1,max(0,r + 0.01*sin(time*0.417 + 1)));\n' + 'g = min(1,max(0,g + 0.01*sin(time*0.391 + 2)));\n' + 'b = min(1,max(0,b + 0.01*sin(time*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.01*sin(time*0.457 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.01*sin(time*0.437 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.01*sin(time*0.484 + 6)));'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.8,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.6,
			border_g : 1.0,
			rad : 0.22298,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.08*Math.sin((m.q1*0.25))));
m.y = (m.y+(0.1*Math.sin(((m.q1*0.5)+2))));
m.ang = m.time;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = x + 0.08*sin(q1*0.25);\n' + 'y = y + 0.1*sin(q1*0.5+2);\n' + 'ang = time;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 z_1;\n' + '   vec3 blur_2;\n' + '   vec3 ret_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = mix (uv_orig, uv, vec2(0.2, 0.2));\n' + '   vec2 P_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (0.3 * texsize.zw);\n' + '  P_5 = (tmpvar_4 + tmpvar_6);\n' + '   vec2 P_7;\n' + '  P_7 = (tmpvar_4 + (tmpvar_6 * vec2(-1.0, 1.0)));\n' + '   vec2 P_8;\n' + '  P_8 = (tmpvar_4 + (tmpvar_6 * vec2(1.0, -1.0)));\n' + '   vec2 P_9;\n' + '  P_9 = (tmpvar_4 - tmpvar_6);\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = (0.25 * ((texture2D (sampler_main, P_5).xyz + texture2D (sampler_main, P_7).xyz) + (texture2D (sampler_main, P_8).xyz + texture2D (sampler_main, P_9).xyz)));\n' + '  blur_2 = tmpvar_10;\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_main, tmpvar_4).xyz;\n' + '  ret_3 = tmpvar_11;\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = ((ret_3.x * ret_3.y) * ret_3.y);\n' + '  z_1.x = (ret_3.x + ((\n' + '    (-(tmpvar_12) + (0.035 * (1.0 - ret_3.x)))\n' + '   + 0.0007) * 9.0));\n' + '  z_1.y = (ret_3.y + ((tmpvar_12 - \n' + '    (0.095 * ret_3.y)\n' + '  ) * 9.0));\n' + '  z_1.z = (ret_3.z - 0.02);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_main, tmpvar_4);\n' + '  z_1.x = (z_1.x + (1.8 * (blur_2 - tmpvar_13.xyz)).x);\n' + '  ret_3.yz = z_1.yz;\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (((uv * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '  tmpvar_14 = texture2D (sampler_noise_lq, P_15);\n' + '  ret_3.x = (z_1.x + (0.09 * (\n' + '    (tmpvar_14.xyz * 2.0)\n' + '   - 1.0)).x);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   float ang2_2;\n' + '  ang2_2 = (fract((0.9549295 * ang)) / 6.0);\n' + '  ang2_2 = (abs((ang2_2 - 0.08333334)) * 6.283185);\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3.x = cos(ang2_2);\n' + '  tmpvar_3.y = sin(ang2_2);\n' + '  uv_1 = (0.5 + ((\n' + '    (0.4 * (rad * sqrt(dot (texsize.xy, texsize.xy))))\n' + '   * tmpvar_3) * texsize.zw));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv_1);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_pc_main, uv_1);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_blur3, uv_1);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = (1.4 * pow ((\n' + '    clamp (((tmpvar_4.xyz * scale1) + bias1), 0.0, 1.0)\n' + '   * \n' + '    (tmpvar_5.xyz - ((tmpvar_6.xyz * scale3) + bias3))\n' + '  ), vec3(0.5, 0.5, 0.5)));\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('spintime = 0;'),
	'frame_eqs_str' : ('basstime = basstime + bass_att*0.03;\n' + 'q1 = basstime;\n' + 'vol = pow(bass+mid+treb,2);\n' + 'basssum = vol;\n' + 'basstime = if(below(basstime,465),465,basstime);\n' + 'stickybit = time%2;\n' + 'volAvg = volAvg + vol*equal(stickybit,1);\n' + 'sample1 = sample1 + equal(stickybit,1);\n' + 'volAvg2 = volAvg2 + vol*equal(stickybit,0);\n' + 'sample2 = sample2 + equal(stickybit,0);\n' + 'edge = bnot(equal(bit2,stickybit));\n' + 'volAvg = volAvg - volAvg*edge*stickybit;\n' + 'volAvg2 = volAvg2 - volAvg2*edge*equal(stickybit,0);\n' + 'sample1 = sample1  - sample1*edge*stickybit;\n' + 'sample2 = sample2  - sample2*edge*equal(stickybit,0);\n' + 'diff = if(equal(stickybit,1), (basssum/(volAvg2/sample2)) , 0);\n' + 'diff = if(equal(stickybit,0), (basssum/(volAvg/sample1)), diff);\n' + 'q3 = diff;\n' + 'bit2 = time%2;\n' + 'difftime = difftime + diff*0.03;\n' + 'q2 = difftime;\n' + 'difftime = if(above(difftime,2000),0, difftime);\n' + 'spintime = spintime + bass*0.03*if(equal(state%2,1),1,-1);\n' + 'q8 = spintime;\n' + 'state = state + above(diff,10);\n' + 'monitor = spintime;'),
	'pixel_eqs_str' : ('zoom = 1.05 - sin(q3)*0.04;\n' + 'rot =0;'),
};

return pmap;
});
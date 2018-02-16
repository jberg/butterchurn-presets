define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 12.0,
		warpscale : 2.28,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.972,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.10462,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 67.16532,
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
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.169,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 0.691,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 1.0,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.094,
		decay : 0.98,
		wave_a : 4.1,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.att = 0;
m.mode = 0;
m.q4 = 0;
m.q5 = 0;
m.meanbass_att = 0;
m.beatcounter = 0;
m.q8 = 0;
m.var = 0;
m.lastbeat = 0;
m.flip = 0;
m.rd = 0;
m.musictime = 0;
m.vol = 0;
m.zm = 0;
m.beatrate = 0;
m.beat = 0;
m.tm = 0;
m.mtime = 0;
m.volume = 0;
m.ypos = 0;
m.xpos = 0;
m.mv_x = 64;
m.mv_y = 48;
m.nut = 0;
m.stp = 0;
m.stq = 0;
m.rtp = 0;
m.rtq = 0;
m.wvr = 0;
m.decay = 0;
m.dcsp = 0;
m.warp = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.volume = (0.3*((m.bass+m.mid)+m.att));
m.beatrate = (equal(m.beatrate, 0)+((1-equal(m.beatrate, 0))*(below(m.volume, 0.01)+((1-below(m.volume, 0.01))*m.beatrate))));
m.lastbeat = (m.lastbeat+(equal(m.lastbeat, 0)*m.time));
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.peakbass_att = Math.max(m.bass_att, m.peakbass_att);
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ((m.beat*m.bass_att)+(((1-m.beat)*m.peakbass_att)*((above((m.time-m.lastbeat), (2*m.beatrate))*0.95)+((1-above((m.time-m.lastbeat), (2*m.beatrate)))*0.995))));
m.lastbeat = ((m.beat*m.time)+((1-m.beat)*m.lastbeat));
m.peakbass_att = Math.max(m.peakbass_att, (1.1*m.meanbass_att));
m.beat = ((above(m.volume, 0.8)*below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)))*above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))));
m.beatcounter = (m.beatcounter+m.beat);
m.mode = ifcond((m.beat*equal(mod(m.beatcounter,2), 0)), (1-m.mode), m.mode);
m.flip = ((2*m.mode)-1);
m.monitor = m.flip;
m.q8 = m.flip;
m.decay = 1;
m.vol = (((m.bass_att+m.mid_att)+m.treb_att)*0.25);
m.vol = (m.vol*m.vol);
m.mtime = (m.mtime+((m.vol*0.05)*m.flip));
m.q1 = (m.mtime*0.4);
m.musictime = (m.musictime+(((((m.mid*m.mid)*m.mid)*m.mid)*0.01)*m.flip));
m.xpos = (Math.sin((m.musictime*0.6))*0.3);
m.ypos = (Math.sin((m.musictime*0.4))*0.3);
m.q4 = m.xpos;
m.q5 = m.ypos;
m.warp = 0.0;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.cx = (0.5+m.q4);
m.cy = (0.5-m.q5);
m.rd = sqrt((sqr((((m.x-0.5)-m.q4)*2))+sqr((((m.y-0.5)+m.q5)*1.5))));
m.zm = (1-div(m.rd,5));
m.sx = m.zm;
m.sy = m.zm;
m.tm = (m.time+(Math.sin(m.time)*m.rad));
m.var = (Math.tan((m.tm+m.time))*m.treb);
m.zoom = ((0.91+div(m.rd,100))+0.1);
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
			tex_zoom : 1.3345,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.59957,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.spi = 0;
m.red = 0;
m.vol = 0;
m.bob = 0;
m.tm = 0;
m.ro = 0;
m.sp = 0;
m.border_1 = 0;
m.bob = 1.5;
m.ro = 0;
m.red = rand(20);
			m.rkeys = ['bob','ro'];
			return m;
		},
		'frame_eqs' : function(m) {
m.vol = (1+(0.2*div(((m.bass_att+m.treb_att)+m.mid_att),3)));
m.bob = (((m.bob*above(m.bob, 0.01))-0.01)+(1*(1-above(m.bob, 0.01))));
m.bob = (0.4+(0.4*Math.sin((m.time*0.8))));
m.bob = (m.bob*m.vol);
m.rad = m.bob;
m.border_1 = 0.4;
m.sides = 30;
m.ro = (m.ro+0.02);
m.ang = m.ro;
m.rad = 0.6;
m.sp = (m.red*0.025);
m.spi = (0.5-m.sp);
m.tm = (m.time*0.1);
m.border_r = ((0.5+(m.sp*Math.sin((m.tm*0.6))))+(m.spi*Math.cos((m.tm*1.46))));
m.border_g = ((0.5+(m.sp*Math.sin((m.tm*1.294))))+(m.spi*Math.cos((m.tm*0.87))));
m.border_b = ((0.5+(m.sp*Math.sin((m.tm*1.418))))+(m.spi*Math.cos((m.tm*0.76))));
		return m;
	},
		'init_eqs_str' : ('bob = 1.5;\n' + 'ro = 0;\n' + 'red = rand(20);'),
		'frame_eqs_str' : ('vol = 1 + 0.2*((bass_att+treb_att+mid_att)/3);\n' + 'bob = bob*above(bob,0.01) - 0.01 + 1*(1 - above(bob,0.01));\n' + 'bob = 0.4 + 0.4*sin(time*0.8);\n' + 'bob = bob*vol;\n' + 'rad = bob;\n' + 'border_1 = 0.4;\n' + 'sides = 30;\n' + 'ro = ro + 0.02;\n' + 'ang = ro;\n' + 'rad = 0.6;\n' + 'sp = red*0.025;\n' + 'spi = 0.5 - sp;\n' + 'tm = time*0.1;\n' + 'border_r = 0.5 + sp*sin(tm*0.6) + spi*cos(tm*1.46);\n' + 'border_g = 0.5 + sp*sin(tm*1.294) + spi*cos(tm*0.87);\n' + 'border_b = 0.5 + sp*sin(tm*1.418) + spi*cos(tm*0.76);'),

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
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.5*((Math.sin((m.time*1.1))*0.3)+(0.7*Math.sin((m.time*0.5))))));
m.x = (0.5+(0.225*Math.sin(m.time)));
m.y = (0.5+(0.3*Math.cos(m.time)));
m.rad = (m.rad*m.mid_att);
m.r = (0.5+(0.5*Math.sin((m.frame*0.5))));
m.b = (0.5+(0.5*Math.sin(((m.frame*0.5)+2.094))));
m.g = (0.5+(0.5*Math.sin(((m.frame*0.5)+4.188))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.5*(sin(time*1.1)*0.3 + 0.7*sin(time*0.5));\n' + 'x = 0.5 + 0.225*sin(time);\n' + 'y = 0.5 + 0.3*cos(time);\n' + 'rad = rad*mid_att;\n' + 'r = 0.5 + 0.5*sin(frame*0.5);\n' + 'b = 0.5 + 0.5*sin(frame*0.5 + 2.094);\n' + 'g = 0.5 + 0.5*sin(frame*0.5 + 4.188);'),

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
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.5*((Math.sin((m.time*1.1))*0.3)+(0.7*Math.sin((m.time*0.5))))));
m.x = (0.5+(0.225*Math.sin((m.time+2.09))));
m.y = (0.5+(0.3*Math.cos((m.time+2.09))));
m.rad = (m.rad*m.bass_att);
m.r = (0.5+(0.5*Math.sin((m.frame*0.5))));
m.b = (0.5+(0.5*Math.sin(((m.frame*0.5)+2.094))));
m.g = (0.5+(0.5*Math.sin(((m.frame*0.5)+4.188))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.5*(sin(time*1.1)*0.3 + 0.7*sin(time*0.5));\n' + 'x = 0.5 + 0.225*sin(time + 2.09);\n' + 'y = 0.5 + 0.3*cos(time + 2.09);\n' + 'rad = rad*bass_att;\n' + 'r = 0.5 + 0.5*sin(frame*0.5);\n' + 'b = 0.5 + 0.5*sin(frame*0.5 + 2.094);\n' + 'g = 0.5 + 0.5*sin(frame*0.5 + 4.188);'),

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
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.5*((Math.sin((m.time*1.1))*0.3)+(0.7*Math.sin((m.time*0.5))))));
m.x = (0.5+(0.225*Math.sin((m.time+4.19))));
m.y = (0.5+(0.3*Math.cos((m.time+4.19))));
m.rad = (m.rad*m.treb_att);
m.r = (0.5+(0.5*Math.sin((m.frame*0.5))));
m.b = (0.5+(0.5*Math.sin(((m.frame*0.5)+2.094))));
m.g = (0.5+(0.5*Math.sin(((m.frame*0.5)+4.188))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.5*(sin(time*1.1)*0.3 + 0.7*sin(time*0.5));\n' + 'x = 0.5 + 0.225*sin(time + 4.19);\n' + 'y = 0.5 + 0.3*cos(time + 4.19);\n' + 'rad = rad*treb_att;\n' + 'r = 0.5 + 0.5*sin(frame*0.5);\n' + 'b = 0.5 + 0.5*sin(frame*0.5 + 2.094);\n' + 'g = 0.5 + 0.5*sin(frame*0.5 + 4.188);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 z_1;\n' + '   vec3 blur_2;\n' + '   vec3 ret_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = mix (uv_orig, uv, vec2(0.2, 0.2));\n' + '   vec2 P_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (0.3 * texsize.zw);\n' + '  P_5 = (tmpvar_4 + tmpvar_6);\n' + '   vec2 P_7;\n' + '  P_7 = (tmpvar_4 + (tmpvar_6 * vec2(-1.0, 1.0)));\n' + '   vec2 P_8;\n' + '  P_8 = (tmpvar_4 + (tmpvar_6 * vec2(1.0, -1.0)));\n' + '   vec2 P_9;\n' + '  P_9 = (tmpvar_4 - tmpvar_6);\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = (0.25 * ((texture2D (sampler_main, P_5).xyz + texture2D (sampler_main, P_7).xyz) + (texture2D (sampler_main, P_8).xyz + texture2D (sampler_main, P_9).xyz)));\n' + '  blur_2 = tmpvar_10;\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_main, tmpvar_4).xyz;\n' + '  ret_3 = tmpvar_11;\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = ((ret_3.x * ret_3.y) * ret_3.y);\n' + '  z_1.x = (ret_3.x + ((\n' + '    (-(tmpvar_12) + (0.035 * (1.0 - ret_3.x)))\n' + '   + 0.0007) * 9.0));\n' + '  z_1.y = (ret_3.y + ((tmpvar_12 - \n' + '    (0.095 * ret_3.y)\n' + '  ) * 9.0));\n' + '  z_1.z = (ret_3.z - 0.02);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_main, tmpvar_4);\n' + '  z_1.x = (z_1.x + (1.8 * (blur_2 - tmpvar_13.xyz)).x);\n' + '  ret_3.yz = z_1.yz;\n' + '   vec4 tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (((uv * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '  tmpvar_14 = texture2D (sampler_noise_lq, P_15);\n' + '  ret_3.x = (z_1.x + (0.09 * (\n' + '    (tmpvar_14.xyz * 2.0)\n' + '   - 1.0)).x);\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '  uv_1 = (0.05 + (0.9 * uv));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv_1);\n' + '  ret_2 = tmpvar_3.xyz;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur2, uv_1);\n' + '  ret_2 = (abs((\n' + '    ((tmpvar_4.xyz * scale2) + bias2)\n' + '   - ret_2)) * 6.0);\n' + '  ret_2 = (ret_2 * 0.65);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;\n' + 'warp=0;'),
	'frame_eqs_str' : ('volume = 0.3*(bass+mid+att);\n' + 'beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);\n' + 'lastbeat = lastbeat + equal(lastbeat,0)*time;\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = max(bass_att,peakbass_att);\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.95 + (1-above(time - lastbeat, 2*beatrate))*0.995);\n' + 'lastbeat = beat*time + (1-beat)*lastbeat;\n' + 'peakbass_att = max(peakbass_att,1.1*meanbass_att);\n' + 'beat = above(volume,0.8)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));\n' + 'beatcounter = beatcounter + beat;\n' + 'mode = if(beat*equal(beatcounter%2,0),1-mode,mode);\n' + 'flip = 2*mode-1;\n' + 'monitor=flip;\n' + 'q8=flip;\n' + 'decay=1;\n' + 'vol=(bass_att+mid_att+treb_att)*0.25;\n' + 'vol=vol*vol;\n' + 'mtime=mtime+vol*0.05*flip;\n' + 'q1=mtime*0.4;\n' + 'musictime=musictime+(mid*mid*mid*mid)*0.01*flip;\n' + 'xpos=sin(musictime*0.6)*0.3;\n' + 'ypos=sin(musictime*0.4)*0.3;\n' + 'q4=xpos;\n' + 'q5=ypos;\n' + 'warp=0.0;'),
	'pixel_eqs_str' : ('cx=0.5+q4;\n' + 'cy=0.5-q5;\n' + 'rd=sqrt( sqr( (x-0.5-q4)*2) + sqr( (y-0.5+q5)*1.5 ) );\n' + 'zm=(1-(rd/5));\n' + 'sx=zm;\n' + 'sy=zm;\n' + 'tm=time+(sin(time)*rad);\n' + 'var=tan(tm+time)*treb;\n' + 'zoom=.91+(rd/100)+0.1;'),
};

return pmap;
});
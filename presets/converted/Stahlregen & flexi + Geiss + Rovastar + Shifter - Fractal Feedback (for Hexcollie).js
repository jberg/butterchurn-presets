define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 0.1,
		ib_g : 1.0,
		mv_x : 64.0,
		warpscale : 0.015,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 3.672,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.005,
		b2x : 1.0,
		warp : 0.033,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.1,
		ib_r : 0.0,
		mv_b : 0.5,
		echo_zoom : 1.169,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.666,
		warpanimspeed : 0.037,
		wave_dots : 0.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.1,
		decay : 0.98,
		wave_a : 4.224,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.1,
		ib_b : 0.0,
		mv_r : 0.5,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.att = 0;
m.mode = 0;
m.tbr = 0;
m.meanbass_att = 0;
m.ag = 0;
m.beatcounter = 0;
m.q7 = 0;
m.q8 = 0;
m.var = 0;
m.lastbeat = 0;
m.flip = 0;
m.q30 = 0;
m.q31 = 0;
m.q32 = 0;
m.rdd = 0;
m.star = 0;
m.q23 = 0;
m.vol = 0;
m.q24 = 0;
m.zm = 0;
m.q25 = 0;
m.q26 = 0;
m.beatrate = 0;
m.q27 = 0;
m.beat = 0;
m.q28 = 0;
m.q29 = 0;
m.angadv = 0;
m.mtime = 0;
m.volume = 0;
m.cys = 0;
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
m.zoom = 1;
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
m.angadv = (m.angadv+m.beat);
m.angadv = ifcond(above(m.angadv, 5), 2, m.angadv);
m.q7 = m.angadv;
m.decay = 0.95;
m.zoom = 1.002;
m.vol = (((m.bass_att+m.mid_att)+m.treb_att)*0.25);
m.vol = (m.vol*m.vol);
m.mtime = (m.mtime+(((m.vol*0.1)*m.flip)*div(37,m.fps)));
m.q1 = (m.mtime*0.4);
m.warp = 0.0;
m.cx = ((Math.sin((m.mtime*0.2))*0.4)+0.5);
m.cy = Math.sin((m.mtime*0.33));
m.cys = sign(m.cy);
m.cy = ((m.cy*m.cy)*m.cys);
m.cy = ((m.cy*0.4)+0.5);
m.rot = (Math.sin((m.time*0.25))*0.31);
m.q23 = div(rand(1000),1000);
m.q24 = div(rand(1000),1000);
m.q25 = (div(rand(1000),1000)*6.28);
m.q26 = (m.q25-3.14);
m.q27 = (div(rand(1000),8000)+0.1);
m.q28 = div(rand(1000),1000);
m.q29 = div(rand(1000),1000);
m.q30 = (div(rand(1000),1000)*6.28);
m.q31 = (m.q30-3.14);
m.q32 = (div(rand(1000),8000)+0.1);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.tbr = (0.7+(m.treb*0.3));
m.var = ((-2*m.tbr)*0.75);
m.ag = (Math.atan(div(((m.y-0.5)-(m.cy-0.5)),((m.x-0.5)-(m.cx-0.5))))*1.75);
m.star = (Math.sin((m.ang*m.q7))*m.tbr);
m.rdd = (Math.max(Math.abs((m.x-0.5)), Math.abs((m.y-0.5)))*4);
m.zm = (((1+div(m.rdd,40))+div(m.var,40))+(m.star*0.003));
m.sx = 0.8;
m.sy = m.sx;
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
			a2 : 0.3,
			r : 0.0,
			border_g : 1.0,
			rad : 3.0,
			x : 0.37,
			y : 0.5,
			ang : 3.64425,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.t1 = 0;
m.t2 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['b2','g2','r2','b','g','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*(0.3+(0.1*m.t1)));
m.rad = (m.rad*(0.9+(0.2*m.t2)));
m.r = Math.min(1, Math.max(0, (m.r+(0.2*Math.sin(((m.time*0.417)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.2*Math.sin(((m.time*0.391)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.2*Math.sin(((m.time*0.432)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.2*Math.sin(((m.time*0.657)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.2*Math.sin(((m.time*0.737)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.2*Math.sin(((m.time*0.884)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('ang = time*(0.3 + 0.1*t1);\n' + 'rad = rad * (0.9 + 0.2*t2);\n' + 'r = min(1,max(0,r + 0.2*sin(time*0.417 + 1)));\n' + 'g = min(1,max(0,g + 0.2*sin(time*0.391 + 2)));\n' + 'b = min(1,max(0,b + 0.2*sin(time*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.2*sin(time*0.657 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.2*sin(time*0.737 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.2*sin(time*0.884 + 6)));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.8,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.70653,
			x : 0.37,
			y : 0.5,
			ang : 3.64425,
			sides : 5.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.t1 = 0;
m.t2 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['r2','b','g','g2','b2','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.05*Math.sin(((m.time*1.25)+3))));
m.y = (m.y+(0.03*Math.sin(((m.time*1.49)+1))));
m.ang = (m.time*(0.3+(0.1*m.t1)));
m.rad = (m.rad*(0.9+(0.2*m.t2)));
m.r = Math.min(1, Math.max(0, (m.r+(0.1*Math.sin(((m.time*0.417)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.1*Math.sin(((m.time*0.391)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.1*Math.sin(((m.time*0.432)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.1*Math.sin(((m.time*0.457)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.1*Math.sin(((m.time*0.437)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.1*Math.sin(((m.time*0.484)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('x = x + 0.05*sin(time*1.25+3);\n' + 'y = y + 0.03*sin(time*1.49+1);\n' + 'ang = time*(0.3 + 0.1*t1);\n' + 'rad = rad * (0.9 + 0.2*t2);\n' + 'r = min(1,max(0,r + 0.1*sin(time*0.417 + 1)));\n' + 'g = min(1,max(0,g + 0.1*sin(time*0.391 + 2)));\n' + 'b = min(1,max(0,b + 0.1*sin(time*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.1*sin(time*0.457 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.1*sin(time*0.437 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.1*sin(time*0.484 + 6)));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.8,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.70653,
			x : 0.67,
			y : 0.43,
			ang : 4.20974,
			sides : 5.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.t1 = 0;
m.t2 = 0;
m.t1 = (rand(100)*0.01);
m.t2 = (rand(100)*0.01);
			m.rkeys = ['r2','b','g','g2','b2','r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.05*Math.sin((m.time*2.17))));
m.y = (m.y+(0.03*Math.sin((m.time*1.83))));
m.ang = (m.time*(0.3+(0.1*m.t1)));
m.rad = (m.rad*(0.9+(0.2*m.t2)));
m.r = Math.min(1, Math.max(0, (m.r+(0.1*Math.sin(((m.time*0.417)+1))))));
m.g = Math.min(1, Math.max(0, (m.g+(0.1*Math.sin(((m.time*0.391)+2))))));
m.b = Math.min(1, Math.max(0, (m.b+(0.1*Math.sin(((m.time*0.432)+4))))));
m.r2 = Math.min(1, Math.max(0, (m.r2+(0.1*Math.sin(((m.time*0.457)+3))))));
m.g2 = Math.min(1, Math.max(0, (m.g2+(0.1*Math.sin(((m.time*0.437)+5))))));
m.b2 = Math.min(1, Math.max(0, (m.b2+(0.1*Math.sin(((m.time*0.484)+6))))));
		return m;
	},
		'init_eqs_str' : ('t1 = rand(100)*0.01;\n' + 't2 = rand(100)*0.01;'),
		'frame_eqs_str' : ('x = x + 0.05*sin(time*2.17);\n' + 'y = y + 0.03*sin(time*1.83);\n' + 'ang = time*(0.3 + 0.1*t1);\n' + 'rad = rad * (0.9 + 0.2*t2);\n' + 'r = min(1,max(0,r + 0.1*sin(time*0.417 + 1)));\n' + 'g = min(1,max(0,g + 0.1*sin(time*0.391 + 2)));\n' + 'b = min(1,max(0,b + 0.1*sin(time*0.432 + 4)));\n' + 'r2 = min(1,max(0,r2 + 0.1*sin(time*0.457 + 3)));\n' + 'g2 = min(1,max(0,g2 + 0.1*sin(time*0.437 + 5)));\n' + 'b2 = min(1,max(0,b2 + 0.1*sin(time*0.484 + 6)));'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.56,
			border_g : 0.0,
			rad : 0.16122,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 6.0,
			border_r : 0.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.2*Math.sin((m.time*1.14))));
m.y = (m.y+(0.1*Math.sin(((m.time*0.93)+2))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = x + 0.2*sin(time*1.14);\n' + 'y = y + 0.1*sin(time*0.93+2);'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 my_uv_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = ((uv - 0.5) * vec2((1.0 + _qa.x)));\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4.x = ((tmpvar_3.x * tmpvar_3.x) - (tmpvar_3.y * tmpvar_3.y));\n' + '  tmpvar_4.y = ((2.0 * tmpvar_3.x) * tmpvar_3.y);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = ((tmpvar_4.x * -0.12) - (tmpvar_4.y * 0.74));\n' + '  tmpvar_5.y = ((tmpvar_4.x * 0.74) + (-0.12 * tmpvar_4.y));\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = ((tmpvar_4.x * (tmpvar_5.x + 1.0)) + (tmpvar_4.y * tmpvar_5.y));\n' + '  tmpvar_6.y = ((tmpvar_4.y * (tmpvar_5.x + 1.0)) - (tmpvar_4.x * tmpvar_5.y));\n' + '  my_uv_1 = (tmpvar_6 * (1.0/((\n' + '    ((tmpvar_5.x + 1.0) * (tmpvar_5.x + 1.0))\n' + '   + \n' + '    (tmpvar_5.y * tmpvar_5.y)\n' + '  ))));\n' + '   vec2 P_7;\n' + '  P_7 = (my_uv_1 - floor(my_uv_1));\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = (texture2D (sampler_fc_main, P_7) * 0.94).xyz;\n' + '  ret_2 = tmpvar_8;\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9.w = 1.0;\n' + '  tmpvar_9.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_9;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;\n' + 'warp=0;'),
	'frame_eqs_str' : ('zoom=1;\n' + 'volume = 0.3*(bass+mid+att);\n' + 'beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);\n' + 'lastbeat = lastbeat + equal(lastbeat,0)*time;\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = max(bass_att,peakbass_att);\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.95 + (1-above(time - lastbeat, 2*beatrate))*0.995);\n' + 'lastbeat = beat*time + (1-beat)*lastbeat;\n' + 'peakbass_att = max(peakbass_att,1.1*meanbass_att);\n' + 'beat = above(volume,0.8)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));\n' + 'beatcounter = beatcounter + beat;\n' + 'mode = if(beat*equal(beatcounter%2,0),1-mode,mode);\n' + 'flip = 2*mode-1;\n' + 'monitor=flip;\n' + 'q8=flip;\n' + 'angadv=angadv+beat;\n' + 'angadv=if( above(angadv,5) , 2 , angadv );\n' + 'q7=angadv;\n' + 'decay=0.95;\n' + 'zoom=1.002;\n' + 'vol=(bass_att+mid_att+treb_att)*0.25;\n' + 'vol=vol*vol;\n' + 'mtime=mtime+vol*0.1*flip*(37/fps);\n' + 'q1=mtime*0.4;\n' + 'warp=0.0;\n' + 'cx=sin(mtime*0.2)*0.4 + 0.5;\n' + 'cy=sin(mtime*0.33);\n' + 'cys=sign(cy);\n' + 'cy=cy*cy*cys;\n' + 'cy=cy*0.4+0.5;\n' + 'rot=sin(time*0.25)*0.31;\n' + 'q23 = rand(1000)/1000;\n' + 'q24 = rand(1000)/1000;\n' + 'q25 = (rand(1000)/1000)*6.28;\n' + 'q26 = q25 - 3.14;\n' + 'q27 = (rand(1000)/8000)+0.1;\n' + 'q28 = rand(1000)/1000;\n' + 'q29 = rand(1000)/1000;\n' + 'q30 = (rand(1000)/1000)*6.28;\n' + 'q31 = q30 - 3.14;\n' + 'q32 = (rand(1000)/8000)+0.1;'),
	'pixel_eqs_str' : ('tbr=0.7+treb*0.3;\n' + 'var=-2*tbr*0.75;\n' + 'ag=atan( (y-0.5-(cy-0.5))/(x-0.5-(cx-0.5)) )*1.75;\n' + 'star=sin(ang*q7)*tbr;\n' + 'rdd=max( abs(x-0.5) , abs(y-0.5) )*4 ;\n' + 'zm=1+(rdd/40)+(var/40)+star*0.003 ;\n' + 'sx=0.8;\n' + 'sy=sx;'),
};

return pmap;
});
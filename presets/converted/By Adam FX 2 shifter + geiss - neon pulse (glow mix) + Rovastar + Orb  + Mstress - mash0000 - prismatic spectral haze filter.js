define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.4,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.573,
		echo_alpha : 0.5,
		additivewave : 1.0,
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
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.051,
		ob_size : 0.5,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.85235,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.975,
		wave_a : 0.003,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.24,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.q3 = 0;
m.mod = 0;
m.q4 = 0;
m.q5 = 0;
m.mt = 0;
m.nu = 0;
m.toc = 0;
m.oy = 0;
m.vav = 0;
m.cox = 0;
m.coy = 0;
m.treb_avg = 0;
m.dis = 0;
m.tic = 0;
m.ra = 0;
m.slide = 0;
m.bt = 0;
m.bass_avg = 0;
m.vol = 0;
m.zm = 0;
m.modx = 0;
m.mox = 0;
m.mody = 0;
m.moy = 0;
m.tin = 0;
m.pox = 0;
m.poy = 0;
m.mid_avg = 0;
m.sp = 0;
m.vt = 0;
m.ocoy = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = m.time;
m.vol = (((m.bass_att+m.treb_att)+m.mid_att)*0.333333);
m.ra = (div(1,m.tic)*0.1);
m.treb_avg = (m.tic*((m.treb_avg*(div(1,m.tic)-m.ra))+(m.ra*m.treb)));
m.mid_avg = (m.tic*((m.mid_avg*(div(1,m.tic)-m.ra))+(m.ra*m.mid)));
m.bass_avg = (m.tic*((m.bass_avg*(div(1,m.tic)-m.ra))+(m.ra*m.bass)));
m.vav = (m.tic*((m.vav*(div(1,m.tic)-m.ra))+((m.ra*((m.bass+m.treb)+m.mid))*0.33333)));
m.tt = (m.tt+(m.tic*m.treb));
m.mt = (m.mt+(m.tic*m.mid));
m.bt = (m.bt+(m.tic*m.bass));
m.vt = (m.vt+(m.tic*m.vav));
m.sp = (Math.abs((m.vav-m.slide))*0.1);
m.slide = (ifcond(above(m.slide, m.vav), (m.slide-(m.tic*m.sp)), (m.slide+(m.tic*m.sp)))+(((1-m.toc)*m.vav)*0.2));
m.toc = 1;
m.q1 = 0;
m.q2 = ((m.bt*0.5)+5);
m.q3 = ((m.mt*0.5)+3);
m.q4 = (m.tt*0.5);
m.q5 = (0.1+((m.treb_avg+m.mid_avg)*0.2));
m.zoom = (1-(m.bass_avg*0.2));
m.monitor = m.q5;
		m.rkeys = ['q1','oy','cox','coy','mox','moy','ocoy'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.coy = ((m.coy+below(m.y, m.oy))*above(m.q1, 0));
m.cox = (((m.cox+1)*above(m.q1, 0))*equal(m.coy, m.ocoy));
m.moy = Math.max(m.coy, m.moy);
m.mox = Math.max(m.cox, m.mox);
m.nu = 4;
m.pox = ((div(m.cox,m.nu)-Math.floor(div(m.cox,m.nu)))*m.nu);
m.poy = ((div(m.coy,m.nu)-Math.floor(div(m.coy,m.nu)))*m.nu);
m.mod = ((1-(2*above(m.x, 0.5)))*(1-(2*above(m.y, 0.5))));
m.dx = (ifcond(equal(mod(m.coy,2), 0), (-equal(m.pox, 1)+equal(m.pox, 2)), (equal(m.pox, 0)-equal(m.pox, 3)))*0.001);
m.dy = ((ifcond(equal(mod(m.coy,2), 0), (-equal(m.pox, 1)+equal(m.pox, 2)), (equal(m.pox, 0)-equal(m.pox, 3)))*0.001)*m.mod);
m.dis = (m.x+(1-m.y));
m.mod = ifcond(above(m.dis, 1), (m.dis-1), (1-m.dis));
m.mod = (below(m.mod, 0.2)+(((1-Math.min(1, ((m.mod-0.2)*4)))*above(m.mod, 0.2))*1));
m.zm = m.q5;
m.modx = ifcond(above(m.dis, 1), m.zm, -m.zm);
m.mody = ifcond(above(m.dis, 1), -m.zm, m.zm);
m.dx = ((m.dx*m.mod)+((1-m.mod)*m.modx));
m.dy = ((m.dy*m.mod)+((1-m.mod)*m.mody));
m.rot = (0.3*m.mod);
m.oy = m.y;
m.ocoy = m.coy;
m.q1 = (m.q1+1);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 2.27969,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.7,
			thick : 1.0,
			sep : 16.0,
			},
		'init_eqs' : function(m) {
m.t7 = 0;
m.t8 = 0;
m.t8 = m.time;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t7 = m.t8;
m.t8 = m.time;
		return m;
	},
		'point_eqs' : function(m) {
m.x = (0.5+Math.sin(((m.sample*3)+(m.time*0.1))));
m.y = ((0.5+Math.sin((m.sample*94.23)))+(0.02*Math.sin((m.time*4.5))));
m.b = Math.abs(Math.sin(((m.sample*100)+m.time)));
m.r = Math.abs(Math.sin(((m.sample*512)+m.time)));
m.g = Math.abs(Math.sin(((m.sample*10)+m.time)));
		return m;
	},
		'init_eqs_str' : ('t8 = time;'),
		'frame_eqs_str' : ('t7 = t8;\n' + 't8 = time;'),
		'point_eqs_str' : ('x = 0.5 + sin(sample*3 + time*0.1);\n' + 'y = 0.5 + sin(sample*94.23) + 0.02*sin(time*4.5);\n' + 'b=abs(sin(sample*100+time));\n' + 'r=abs(sin(sample*512+time));\n' + 'g=abs(sin(sample*10+time));'),

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
			tex_ang : 5.78053,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.04059,
			additive : 0.0,
			border_a : 0.7,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 1.0,
			rad : 0.23067,
			x : 0.5,
			y : 0.15,
			ang : 6.03186,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.meantreb = 0;
m.trebdiff = 0;
m.meanmid = 0;
m.meanbass = 0;
m.bassdiff = 0;
m.middiff = 0;
m.o = 0;

			m.rkeys = ['meantreb','meanmid','meanbass'];
			return m;
		},
		'frame_eqs' : function(m) {
m.meanbass = (0.01*((m.meanbass*99)+m.bass));
m.meantreb = (0.01*((m.meantreb*99)+m.treb));
m.meanmid = (0.01*((m.meanmid*99)+m.mid));
m.bassdiff = ((m.bass-m.meanbass)*15);
m.trebdiff = ((m.treb-m.meantreb)*15);
m.middiff = ((m.mid-m.meanmid)*15);
m.bassdiff = (above(m.bassdiff, 0)*m.bassdiff);
m.trebdiff = (above(m.trebdiff, 0)*m.trebdiff);
m.middiff = (above(m.middiff, 0)*m.middiff);
m.o = 1;
m.g = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.trebdiff)))));
m.r = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.middiff)))));
m.b = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.bassdiff)))));
m.g2 = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.trebdiff)))));
m.r2 = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.middiff)))));
m.b2 = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.bassdiff)))));
m.x = ((m.x+(Math.sin((m.time*0.7))*0.06))-(0.1*m.o));
m.y = ((m.y+(Math.sin((m.time*0.5))*0.06))+(0.7*m.o));
m.ang = Math.sin(m.time);
m.rad = ((m.rad-0.4)+(0.05*m.bass));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('meanbass = 0.01*(meanbass*99+bass);\n' + 'meantreb = 0.01*(meantreb*99+treb);\n' + 'meanmid = 0.01*(meanmid*99+mid);\n' + 'bassdiff = (bass - meanbass)*15;\n' + 'trebdiff = (treb - meantreb)*15;\n' + 'middiff = (mid - meanmid)*15;\n' + 'bassdiff = above(bassdiff,0)*bassdiff;\n' + 'trebdiff = above(trebdiff,0)*trebdiff;\n' + 'middiff = above(middiff,0)*middiff;\n' + 'o=1;\n' + 'g = abs(1*o-min(1,max(0,0.2*trebdiff)));\n' + 'r = abs(1*o-min(1,max(0,0.2*middiff)));\n' + 'b = abs(1*o-min(1,max(0,0.2*bassdiff)));\n' + 'g2 = abs(1*o-min(1,max(0,0.2*trebdiff)));\n' + 'r2 = abs(1*o-min(1,max(0,0.2*middiff)));\n' + 'b2 = abs(1*o-min(1,max(0,0.2*bassdiff)));\n' + 'x=x+sin(time*.7)*.06-.1*o;\n' + 'y=y+sin(time*.5)*.06+.7*o;\n' + 'ang =sin(time);\n' + 'rad=rad-.4+.05*bass;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.89,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.31,
			r : 1.0,
			border_g : 1.0,
			rad : 0.50627,
			x : 0.82,
			y : 0.22,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.flag = 0;

			m.rkeys = ['flag'];
			return m;
		},
		'frame_eqs' : function(m) {
m.flag = Math.abs((m.flag-m.q1));
m.y = ifcond(m.flag, 0.8, 0.2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('flag = abs(flag-q1);\n' + 'y = if(flag,.8,.2);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.59958,
			x : 0.18,
			y : 0.8,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.flag = 0;

			m.rkeys = ['flag'];
			return m;
		},
		'frame_eqs' : function(m) {
m.flag = Math.abs((m.flag-m.q1));
m.y = ifcond(m.flag, 0.2, 0.8);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('flag = abs(flag-q1);\n' + 'y = if(flag,.2,.8);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.01,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.4,
			r : 1.0,
			border_g : 1.0,
			rad : 0.23067,
			x : 0.56,
			y : 0.15,
			ang : 5.40354,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.meantreb = 0;
m.trebdiff = 0;
m.meanmid = 0;
m.meanbass = 0;
m.bassdiff = 0;
m.middiff = 0;
m.o = 0;

			m.rkeys = ['meantreb','meanmid','meanbass'];
			return m;
		},
		'frame_eqs' : function(m) {
m.meanbass = (0.01*((m.meanbass*99)+m.bass));
m.meantreb = (0.01*((m.meantreb*99)+m.treb));
m.meanmid = (0.01*((m.meanmid*99)+m.mid));
m.bassdiff = ((m.bass-m.meanbass)*15);
m.trebdiff = ((m.treb-m.meantreb)*15);
m.middiff = ((m.mid-m.meanmid)*15);
m.bassdiff = (above(m.bassdiff, 0)*m.bassdiff);
m.trebdiff = (above(m.trebdiff, 0)*m.trebdiff);
m.middiff = (above(m.middiff, 0)*m.middiff);
m.o = 0;
m.g = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.trebdiff)))));
m.r = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.middiff)))));
m.b = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.bassdiff)))));
m.g2 = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.trebdiff)))));
m.r2 = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.middiff)))));
m.b2 = Math.abs(((1*m.o)-Math.min(1, Math.max(0, (0.2*m.bassdiff)))));
m.x = ((m.x+(Math.sin((m.time*0.7))*0.06))-(0.1*m.o));
m.y = ((m.y+(Math.sin((m.time*0.5))*0.06))+(0.7*m.o));
m.ang = Math.sin(m.time);
m.rad = ((m.rad-0.4)+(0.05*m.bass));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('meanbass = 0.01*(meanbass*99+bass);\n' + 'meantreb = 0.01*(meantreb*99+treb);\n' + 'meanmid = 0.01*(meanmid*99+mid);\n' + 'bassdiff = (bass - meanbass)*15;\n' + 'trebdiff = (treb - meantreb)*15;\n' + 'middiff = (mid - meanmid)*15;\n' + 'bassdiff = above(bassdiff,0)*bassdiff;\n' + 'trebdiff = above(trebdiff,0)*trebdiff;\n' + 'middiff = above(middiff,0)*middiff;\n' + 'o=0;\n' + 'g = abs(1*o-min(1,max(0,0.2*trebdiff)));\n' + 'r = abs(1*o-min(1,max(0,0.2*middiff)));\n' + 'b = abs(1*o-min(1,max(0,0.2*bassdiff)));\n' + 'g2 = abs(1*o-min(1,max(0,0.2*trebdiff)));\n' + 'r2 = abs(1*o-min(1,max(0,0.2*middiff)));\n' + 'b2 = abs(1*o-min(1,max(0,0.2*bassdiff)));\n' + 'x=x+sin(time*.7)*.06-.1*o;\n' + 'y=y+sin(time*.5)*.06+.7*o;\n' + 'ang =sin(time);\n' + 'rad=rad-.4+.05*bass;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uv);\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = ((tmpvar_3.xyz * scale1) + bias1);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_blur2, uv);\n' + '  ret_1 = (ret_1 + (mix (\n' + '    (ret_1 - tmpvar_4)\n' + '  , \n' + '    ((((tmpvar_5.xyz * scale2) + bias2) - tmpvar_4) * 2.0)\n' + '  , vec3(rad)) * 0.3));\n' + '  ret_1 = (ret_1 * 0.9);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_noise_lq, tmpvar_6);\n' + '  ret_1 = (mix (ret_1, vec3(0.5, 0.5, 0.5), vec3(0.03, 0.03, 0.03)) + (19.52 * (\n' + '    (tmpvar_7.xyz - 0.5)\n' + '   / 256.0)));\n' + '  ret_1 = mix (ret_1, ret_1.zxy, vec3(0.02, 0.02, 0.02));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = ((ret_1 * 1.5) - 0.1);\n' + '  ret_1.y = (ret_1 * 0.7).y;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uv);\n' + '  ret_1.x = (((tmpvar_3.xyz * scale1) + bias1).x - 0.03);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur2, uv);\n' + '  ret_1.z = (((\n' + '    (tmpvar_4.xyz * scale2)\n' + '   + bias2).z * 1.5) - 0.05);\n' + '  ret_1 = (ret_1 * 2.3);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'tic = min(time-tin,.1);\n' + 'tin = time;\n' + 'vol = (bass_att + treb_att + mid_att)*.333333;\n' + 'ra = 1/tic*.1;\n' + 'treb_avg = tic*(treb_avg*(1/tic - ra) + ra*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - ra) + ra*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - ra) + ra*bass);\n' + 'vav = tic*(vav*(1/tic - ra) + ra*(bass+treb+mid)*.33333);\n' + 'tt = tt + tic*treb;\n' + 'mt = mt + tic*mid;\n' + 'bt = bt + tic*bass;\n' + 'vt = vt + tic*vav;\n' + 'sp = abs(vav - slide)*.1;\n' + 'slide = if(above(slide,vav),slide-tic*sp,slide+tic*sp) + (1-toc)*vav*.2;\n' + 'toc = 1;\n' + 'q1 = 0;\n' + 'q2 = bt*.5 + 5;\n' + 'q3 = mt*.5 + 3;\n' + 'q4 = tt*.5;\n' + 'q5 = .1 + (treb_avg + mid_avg)*.2;\n' + 'zoom = 1 - bass_avg*.2;\n' + 'monitor = q5;'),
	'pixel_eqs_str' : ('coy = (coy + below(y,oy))*above(q1,0);\n' + 'cox = (cox + 1)*above(q1,0)*equal(coy,ocoy);\n' + 'moy = max(coy,moy);\n' + 'mox = max(cox,mox);\n' + 'nu = 4;\n' + 'pox = ((cox/nu) - int(cox/nu))*nu;\n' + 'poy = ((coy/nu) - int(coy/nu))*nu;\n' + 'mod = (1-2*above(x,.5))*(1-2*above(y,.5));\n' + 'dx = if(equal(coy%2,0),-equal(pox,1) + equal(pox,2),equal(pox,0) - equal(pox,3))*.001;\n' + 'dy = if(equal(coy%2,0),-equal(pox,1) + equal(pox,2),equal(pox,0) - equal(pox,3))*.001*mod;\n' + 'dis = (x + (1-y));\n' + 'mod = if(above(dis,1),dis - 1,1-dis);\n' + 'mod = below(mod,.2) + (1-min(1,(mod-.2)*4))*above(mod,.2)*1;\n' + 'zm = q5;\n' + 'modx = if(above(dis,1),zm,-zm);\n' + 'mody = if(above(dis,1),-zm,zm);\n' + 'dx = dx*mod + (1-mod)*modx;\n' + 'dy = dy*mod + (1-mod)*mody;\n' + 'rot = .3*mod;\n' + 'oy = y;\n' + 'ocoy = coy;\n' + 'q1 = q1 + 1;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 32.0,
		warpscale : 2.007,
		brighten : 0.0,
		mv_y : 24.0,
		wave_scale : 1.229,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.9999,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
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
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 0.5,
		echo_zoom : 0.952,
		ob_size : 0.005,
		b1ed : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.459,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.2,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.2,
		decay : 0.5,
		wave_a : 0.312,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.index2 = 0;
m.pp = 0;
m.sdev = 0;
m.mindev = 0;
m.l1angy = 0;
m.l1angz = 0;
m.t0a = 0;
m.spb = 0;
m.trel = 0;
m.px = 0;
m.py = 0;
m.pz = 0;
m.is_beat = 0;
m.puls = 0;
m.sw1 = 0;
m.jump = 0;
m.tic = 0;
m.q30 = 0;
m.dec_med = 0;
m.q20 = 0;
m.q10 = 0;
m.q21 = 0;
m.q11 = 0;
m.q22 = 0;
m.test = 0;
m.index = 0;
m.q12 = 0;
m.q23 = 0;
m.avg = 0;
m.ran1 = 0;
m.q13 = 0;
m.q24 = 0;
m.ran2 = 0;
m.q14 = 0;
m.q15 = 0;
m.q16 = 0;
m.q27 = 0;
m.beat = 0;
m.q17 = 0;
m.q28 = 0;
m.q29 = 0;
m.crit = 0;
m.spb_ = 0;
m.trig = 0;
m.t0 = 0;
m.dec_slow = 0;
m.peak = 0;
m.index2 = rand(8);
m.px = rand(100);
m.py = rand(100);
m.pz = rand(100);
		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.85, div(30,m.fps));
m.dec_slow = pow(0.95, div(30,m.fps));
m.beat = m.mid;
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, (1.2*m.avg))*above(m.time, (m.t0+0.1)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),32);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),8);
m.spb = Math.min(((m.t0-m.t0a)+0.01), 2);
m.t0a = m.t0;
m.spb_ = ifcond(m.is_beat, ((m.spb_*0.9)+(0.1*m.spb)), m.spb_);
m.mindev = Math.min(Math.min(Math.abs((m.spb-m.spb_)), Math.abs(((m.spb*2)-m.spb_))), Math.abs((m.spb-(m.spb_*2))));
m.sdev = ifcond(m.is_beat, ((m.sdev*0.96)+(0.04*pow((m.mindev+0.01), 2))), m.sdev);
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = (m.peak+0.01);
m.q24 = m.is_beat;
m.q27 = m.index;
m.q28 = m.index2;
m.puls = ((m.puls*m.dec_med)+((((1-m.dec_med)*m.q24)*16)*bnot(mod(m.index,4))));
m.q23 = Math.min(1, m.puls);
m.test = (m.test+((div((above(m.beat, (m.avg*1.2))*(m.beat-m.avg)),m.fps)*30)*4));
m.tic = div(m.q27,2);
m.l1angz = ((m.tic*0)+m.test);
m.l1angy = div(((1+Math.sin((2*m.test)))*1.6),2);
m.sw1 = (mod(m.q28,2)*above(m.avg, 1));
m.l1angy = ((m.l1angy-(div(1,m.q22)*m.sw1))+div(((1-m.sw1)*m.q22),8));
m.l1angy = (m.l1angy+((above(m.avg, 1.2)*2)*Math.sin(m.q22)));
m.l1angz = (m.l1angz+((above(m.avg, 1.2)*m.q22)*above(m.q28, 4)));
m.q10 = (Math.cos(m.l1angz)*Math.sin(m.l1angy));
m.q11 = (Math.sin(m.l1angz)*Math.sin(m.l1angy));
m.q12 = Math.abs((Math.cos(m.l1angy)*Math.cos(m.l1angy)));
m.trig = (m.q24*bnot(mod(m.index,2)));
m.ran1 = ifcond(m.trig, (div(rand(100),100)-0.5), m.ran1);
m.ran2 = ifcond(m.trig, (div(rand(100),100)-0.5), m.ran2);
m.q13 = div(m.ran1,2);
m.q14 = div(m.ran2,2);
m.pp = div(((4*m.avg)*m.q13),m.fps);
m.pp = div(1,m.fps);
m.crit = Math.floor(div(m.q27,8));
m.px = (m.px+(equal(m.crit, 0)*m.pp));
m.py = (m.py+(equal(m.crit, 1)*m.pp));
m.pz = (m.pz+(equal(m.crit, 2)*m.pp));
m.trel = (m.trel+div(div(1,m.spb_),m.fps));
m.jump = (Math.floor(m.trel)*below(m.sdev, (0.004*m.avg)));
m.q15 = (m.px+m.jump);
m.q16 = (m.py+m.jump);
m.q17 = (m.pz+m.jump);
m.q30 = above(m.q28, 5);
m.monitor = m.avg;
m.q29 = ((div(m.q22,16)*((above(m.q22, 1.5)+0.8)-m.avg))+((Math.sin(div(m.time,5))-0.8)*0.1));
m.zoom = 1;
m.warp = 0.0;
m.rot = 0;
m.dx = 0;
m.dy = -0.02;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.6,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.89152,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.y = m.sample;
m.x = (0.0+(m.value1*0.1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('y = sample;\n' + 'x = .0 + value1*.1;'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.89152,
			samples : 232.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
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
			a : 0.1,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.89152,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
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
			usedots : 1.0,
			spectrum : 1.0,
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
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 4.57482,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.01,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 23.0,
			border_r : 0.8,
			num_inst : 128.0,
			},
		'init_eqs' : function(m) {
m.p1 = 0;
m.p2 = 0;
m.p3 = 0;
m.p4 = 0;
m.trel = 0;
m.k1 = 0;
m.k2 = 0;
m.ox = 0;
m.oy = 0;
m.oz = 0;
m.fov = 0;
m.q23 = 0;
m.ang1 = 0;
m.rad1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.k1 = (div(m.instance,m.num_inst)*6.28);
m.oz = (m.k1+(m.time*0.1));
m.oz = ((1+Math.floor(m.oz))-m.oz);
m.fov = 0.001;
m.trel = m.time;
m.p1 = Math.sin(m.trel);
m.p2 = Math.sin(div(m.trel,3));
m.p3 = Math.sin(div(m.trel,5));
m.p4 = Math.sin(div(m.trel,7));
m.ang1 = (6.28*Math.sin((m.k1*17)));
m.rad1 = ((4*pow(Math.cos((m.k1*7)), 2))+1);
m.ox = ((m.rad1*Math.cos(m.ang1))+(div(((m.oz*m.oz)*0.0),m.fov)*(((0*m.p1)*m.oz)+((5*m.p2)*(1-m.oz)))));
m.oy = ((m.rad1*Math.sin(m.ang1))+(div(((m.oz*m.oz)*0.0),m.fov)*(((0*m.p3)*m.oz)+((5*m.p4)*(1-m.oz)))));
m.k2 = 0.002;
m.x = (div((m.fov*m.ox),(m.oz+m.k2))+0.5);
m.y = (div(((0*m.fov)*m.oy),(m.oz+m.k2))+0.5);
m.y = 0;
m.rad = Math.abs(div(m.fov,m.oz));
m.a = (div((above(m.oz, 0)*(2-m.oz)),2)*m.q23);
m.a2 = 0;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('k1 = instance/num_inst*6.28;\n' + 'oz = k1  +time*.1;\n' + 'oz = 1+int(oz)-oz;\n' + 'fov = .001;\n' + 'trel = time;\n' + 'p1 = sin(trel);\n' + 'p2 = sin(trel/3);\n' + 'p3 = sin(trel/5);\n' + 'p4 = sin(trel/7);\n' + 'ang1 = 6.28*sin(k1*17);\n' + 'rad1 = 4*pow(cos(k1*7),2)+1;\n' + 'ox = rad1*cos(ang1)+ oz*oz*.0/fov*(0*p1*oz + 5*p2*(1-oz));\n' + 'oy = rad1*sin(ang1)+ oz*oz*.0/fov*(0*p3*oz + 5*p4*(1-oz));\n' + 'k2 = .002;\n' + 'x = fov*ox/(oz+k2)+.5;\n' + 'y = 0*fov*oy/(oz+k2)+.5;\n' + 'y = 0;\n' + 'rad = abs(fov/oz);\n' + 'a = above(oz,0) *(2-oz)/2*q23;\n' + 'a2 = 0;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.4,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.49981,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.5,
			rad : 0.08277,
			x : 0.5,
			y : 1.0,
			ang : 0.0,
			sides : 24.0,
			border_r : 0.5,
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
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.22384,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.73893,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 0.5,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.49981,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.54822,
			x : 0.5,
			y : 1.0,
			ang : 0.0,
			sides : 63.0,
			border_r : 0.5,
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
	'warp' : ('uniform highp vec2 uv4;\n' + 'uniform highp vec2 uv5;\n' + 'uniform highp vec2 rsk;\n' + 'uniform highp vec2 Kugel1;\n' + 'uniform highp float ray1;\n' + 'uniform highp float sun1;\n' + 'uniform highp float rad1;\n' + 'uniform highp vec3 light;\n' + 'highp float clip1;\n' + 'highp vec2 xlat_mutableKugel1;\n' + 'highp vec3 xlat_mutablelight;\n' + 'highp float xlat_mutablerad1;\n' + 'highp float xlat_mutableray1;\n' + 'highp vec2 xlat_mutablersk;\n' + 'highp float xlat_mutablesun1;\n' + 'highp vec2 xlat_mutableuv1;\n' + 'highp vec2 xlat_mutableuv3;\n' + 'highp vec2 xlat_mutableuv4;\n' + 'highp vec2 xlat_mutableuv5;\n' + 'shader_body {\n' + '  xlat_mutableKugel1 = Kugel1;\n' + '  xlat_mutablelight = light;\n' + '  xlat_mutablerad1 = rad1;\n' + '  xlat_mutableray1 = ray1;\n' + '  xlat_mutablersk = rsk;\n' + '  xlat_mutablesun1 = sun1;\n' + '  xlat_mutableuv4 = uv4;\n' + '  xlat_mutableuv5 = uv5;\n' + '  clip1 = (float((rand_preset.x >= 0.5)) + 1.0);\n' + '   vec2 uv_1;\n' + '  uv_1 = uv;\n' + '   vec2 uv2_2;\n' + '   float ff_4;\n' + '   float k1_5;\n' + '   float ky_6;\n' + '   vec3 ret_7;\n' + '  xlat_mutableuv1 = ((uv - vec2(0.5, 0.5)) * aspect.xy);\n' + '  xlat_mutableuv3 = (58.0 * xlat_mutableuv1);\n' + '  ky_6 = clamp ((0.04 - (xlat_mutableuv3.y / 40.0)), 0.0, 1.0);\n' + '  k1_5 = (xlat_mutableuv3.x - (sign(xlat_mutableuv3.x) * 14.0));\n' + '  k1_5 = (k1_5 - ((\n' + '    sign(k1_5)\n' + '   * _qg.w) * 2.0));\n' + '  k1_5 = (k1_5 - (sign(k1_5) * 8.0));\n' + '  ff_4 = (16.0 + (16.0 * rand_preset.z));\n' + '  for ( int n_3 = 1; float(n_3) <= 6.0; n_3++) {\n' + '    k1_5 = (k1_5 + ((\n' + '      ((-(ff_4) * float(n_3)) * sign(k1_5))\n' + '     * ky_6) * ky_6));\n' + '    ky_6 = clamp ((ky_6 - 0.1), 0.0, 1.0);\n' + '  };\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = clamp (k1_5, -1.57, 1.57);\n' + '  k1_5 = tmpvar_8;\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = clamp ((cos(tmpvar_8) - 0.02), 0.0, 1.0);\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10.x = cos(_qd.z);\n' + '  tmpvar_10.y = 0.0;\n' + '  xlat_mutablersk = (xlat_mutableuv1 + (0.3 * tmpvar_10));\n' + '  xlat_mutablerad1 = ((16.0 * sqrt(\n' + '    dot (xlat_mutablersk, xlat_mutablersk)\n' + '  )) * (2.0 + cos(_qe.x)));\n' + '  xlat_mutableuv4 = ((sin(xlat_mutablerad1) / cos(xlat_mutablerad1)) * normalize(xlat_mutablersk));\n' + '  xlat_mutableKugel1 = (xlat_mutableuv4 * clamp ((9.0 - \n' + '    (7.0 * xlat_mutablerad1)\n' + '  ), 0.0, 1.0));\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11 = (1.0 + slow_roam_sin);\n' + '  xlat_mutablelight = ((0.1 / xlat_mutablerad1) * pow (_qf.zzzz, tmpvar_11)).xyz;\n' + '  uv_1 = (uv + (xlat_mutableKugel1 * 0.1));\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12.x = 0.0;\n' + '  tmpvar_12.y = cos((_qd.w / 2.0));\n' + '  xlat_mutablersk = (xlat_mutableuv1 + (0.3 * tmpvar_12));\n' + '  xlat_mutablerad1 = ((16.0 * sqrt(\n' + '    dot (xlat_mutablersk, xlat_mutablersk)\n' + '  )) * (2.0 + cos(\n' + '    (_qe.x * 2.0)\n' + '  )));\n' + '  xlat_mutableuv4 = ((sin(xlat_mutablerad1) / cos(xlat_mutablerad1)) * normalize(xlat_mutablersk));\n' + '  xlat_mutableKugel1 = (xlat_mutableuv4 * clamp ((9.0 - \n' + '    (7.0 * xlat_mutablerad1)\n' + '  ), 0.0, 1.0));\n' + '  xlat_mutablelight = (xlat_mutablelight + ((0.1 / xlat_mutablerad1) * pow (_qf.zzzz, tmpvar_11)).xyz);\n' + '  uv_1 = (uv_1 + (xlat_mutableKugel1 * 0.1));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = cos((_qd.z / 3.0));\n' + '  tmpvar_13.y = 0.0;\n' + '  xlat_mutablersk = (xlat_mutableuv1 + (0.3 * tmpvar_13));\n' + '  xlat_mutablerad1 = ((16.0 * sqrt(\n' + '    dot (xlat_mutablersk, xlat_mutablersk)\n' + '  )) * (2.0 + cos(\n' + '    (_qe.x * 3.0)\n' + '  )));\n' + '  xlat_mutableuv4 = ((sin(xlat_mutablerad1) / cos(xlat_mutablerad1)) * normalize(xlat_mutablersk));\n' + '  xlat_mutableKugel1 = (xlat_mutableuv4 * clamp ((9.0 - \n' + '    (7.0 * xlat_mutablerad1)\n' + '  ), 0.0, 1.0));\n' + '  xlat_mutablelight = (xlat_mutablelight + ((0.1 / xlat_mutablerad1) * pow (_qf.zzzz, tmpvar_11)).xyz);\n' + '  uv_1 = (uv_1 + (xlat_mutableKugel1 * 0.1));\n' + '  uv_1 = (uv_1 + (tmpvar_9 * 0.05));\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = ((uv_1.yx - 0.5) * (2.0 + tmpvar_9));\n' + '   float ex_15;\n' + '  ex_15 = (0.5 + ((0.3 * _qg.w) / 8.0));\n' + '   float tmpvar_16;\n' + '  tmpvar_16 = sqrt(((tmpvar_14.x * tmpvar_14.x) + (tmpvar_14.y * tmpvar_14.y)));\n' + '   float tmpvar_17;\n' + '   float tmpvar_18;\n' + '  tmpvar_18 = (min (abs(\n' + '    (tmpvar_14.y / tmpvar_14.x)\n' + '  ), 1.0) / max (abs(\n' + '    (tmpvar_14.y / tmpvar_14.x)\n' + '  ), 1.0));\n' + '   float tmpvar_19;\n' + '  tmpvar_19 = (tmpvar_18 * tmpvar_18);\n' + '  tmpvar_19 = (((\n' + '    ((((\n' + '      ((((-0.01213232 * tmpvar_19) + 0.05368138) * tmpvar_19) - 0.1173503)\n' + '     * tmpvar_19) + 0.1938925) * tmpvar_19) - 0.3326756)\n' + '   * tmpvar_19) + 0.9999793) * tmpvar_18);\n' + '  tmpvar_19 = (tmpvar_19 + (float(\n' + '    (abs((tmpvar_14.y / tmpvar_14.x)) > 1.0)\n' + '  ) * (\n' + '    (tmpvar_19 * -2.0)\n' + '   + 1.570796)));\n' + '  tmpvar_17 = (tmpvar_19 * sign((tmpvar_14.y / tmpvar_14.x)));\n' + '  if ((abs(tmpvar_14.x) > (1e-08 * abs(tmpvar_14.y)))) {\n' + '    if ((tmpvar_14.x < 0.0)) {\n' + '      if ((tmpvar_14.y >= 0.0)) {\n' + '        tmpvar_17 += 3.141593;\n' + '      } else {\n' + '        tmpvar_17 = (tmpvar_17 - 3.141593);\n' + '      };\n' + '    };\n' + '  } else {\n' + '    tmpvar_17 = (sign(tmpvar_14.y) * 1.570796);\n' + '  };\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20.x = (pow (tmpvar_16, ex_15) * cos((tmpvar_17 * ex_15)));\n' + '  tmpvar_20.y = (pow (tmpvar_16, ex_15) * sin((tmpvar_17 * ex_15)));\n' + '  uv2_2 = (0.5 + ((1.0 - \n' + '    abs(((fract(\n' + '      ((vec2(mod (tmpvar_20, clip1))) * 0.5)\n' + '    ) * 2.0) - 1.0))\n' + '  ) - 0.5));\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_main, uv2_2.yx);\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_main, uv_orig);\n' + '  ret_7 = ((tmpvar_21.xyz + tmpvar_22.xyz) / 2.0);\n' + '  xlat_mutableuv4 = (((uv_1 - 0.5) - _qd.xy) + tmpvar_9);\n' + '  xlat_mutableuv5 = (normalize(xlat_mutableuv4) - _qc.yz);\n' + '   vec2 x_23;\n' + '  x_23 = (xlat_mutableuv5 / _qc.w);\n' + '  xlat_mutableray1 = (clamp ((1.0 - \n' + '    sqrt(dot (x_23, x_23))\n' + '  ), 0.0, 1.0) + ((0.001 / \n' + '    sqrt(dot (xlat_mutableuv5, xlat_mutableuv5))\n' + '  ) / sqrt(\n' + '    dot (xlat_mutableuv4, xlat_mutableuv4)\n' + '  )));\n' + '  xlat_mutablesun1 = (clamp ((0.002 / \n' + '    sqrt(dot (xlat_mutableuv4, xlat_mutableuv4))\n' + '  ), 0.0, 1.0) / (1.05 - _qc.w));\n' + '   vec3 tmpvar_24;\n' + '  tmpvar_24.x = _qg.z;\n' + '  tmpvar_24.y = (_qg.z + 3.0);\n' + '  tmpvar_24.z = (_qg.z + 6.0);\n' + '  ret_7 = (ret_7 + ((xlat_mutableray1 + xlat_mutablesun1) * fract(\n' + '    (tmpvar_24 / 16.0)\n' + '  )));\n' + '   vec2 tmpvar_25;\n' + '  tmpvar_25 = sin(((uv2_2 * 2.0) + (0.2 * \n' + '    ((float(mod (_qg.z, 8.0))) - 4.0)\n' + '  )));\n' + '  ret_7 = (ret_7 + (0.015 / sqrt(\n' + '    dot (tmpvar_25, tmpvar_25)\n' + '  )));\n' + '  ret_7 = (ret_7 + ((\n' + '    pow (tmpvar_9, 3.0)\n' + '   * _qh.x) * (1.0 + roam_sin)).xyz);\n' + '  ret_7 = (ret_7 + xlat_mutablelight);\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26 = texture2D (sampler_blur2, uv_orig);\n' + '  ret_7 = (ret_7 * ((1.0 - \n' + '    (3.3 / fps)\n' + '  ) - (0.02 * \n' + '    dot (((tmpvar_26.xyz * scale2) + bias2), vec3(0.32, 0.49, 0.29))\n' + '  )));\n' + '   vec4 tmpvar_27;\n' + '  tmpvar_27.w = 1.0;\n' + '  tmpvar_27.xyz = ret_7;\n' + '  vec4 ret4 = tmpvar_27;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('highp vec3 xlat_mutableret2;\n' + 'shader_body {\n' + '   vec3 tmpvar_1;\n' + '   vec3 tmpvar_2;\n' + '  tmpvar_2 = clamp ((pow (texture2D (sampler_main, uv).xyz, vec3(1.2, 1.2, 1.2)) / vec3(1.2, 1.2, 1.2)), 0.0, 1.0);\n' + '  tmpvar_1 = (tmpvar_2 * (tmpvar_2 * (3.0 - \n' + '    (2.0 * tmpvar_2)\n' + '  )));\n' + '  xlat_mutableret2 = tmpvar_1;\n' + '   float tmpvar_3;\n' + '  tmpvar_3 = clamp (_qe.w, 0.0, 1.0);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4.w = 1.0;\n' + '  tmpvar_4.xyz = mix (vec3(dot (xlat_mutableret2, vec3(0.32, 0.49, 0.29))), xlat_mutableret2, vec3((tmpvar_3 * (tmpvar_3 * \n' + '    (3.0 - (2.0 * tmpvar_3))\n' + '  ))));\n' + '  vec4 ret4 = tmpvar_4;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('index2 = rand(8);\n' + 'px = rand(100);\n' + 'py = rand(100);\n' + 'pz = rand(100);'),
	'frame_eqs_str' : ('dec_med = pow (0.85, 30/fps);\n' + 'dec_slow = pow (0.95, 30/fps);\n' + 'beat = mid;\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, 1.2*avg) * above (time, t0+.1);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %32;\n' + 'index2 = (index2 + is_beat*bnot(index))%8;\n' + 'spb = min(t0-t0a + .01,2);\n' + ' t0a = t0;\n' + 'spb_ = if(is_beat,spb_ *.9 +.1*spb, spb_);\n' + 'mindev = min(min(abs(spb-spb_),abs(spb*2-spb_)),abs(spb-spb_*2));\n' + 'sdev = if(is_beat,sdev * .96 + .04*pow(mindev+.01,2),sdev);\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak+.01;\n' + 'q24 = is_beat;\n' + 'q27 = index;\n' + 'q28 = index2;\n' + 'puls = puls*dec_med + (1-dec_med)*q24*16*bnot(index%4);\n' + 'q23 = min(1,puls);\n' + 'test = test + above(beat,avg*1.2) * (beat-avg)/fps*30*4;\n' + 'tic = q27/2;\n' + 'l1angz = tic*0+ test;\n' + 'l1angy = (1+sin(2*test))*1.6/2;\n' + 'sw1 = (q28%2) * above(avg,1);\n' + 'l1angy = l1angy-1/q22*sw1+ (1-sw1)*q22/8;\n' + 'l1angy = l1angy+above(avg,1.2)*2*sin(q22);\n' + 'l1angz = l1angz+above(avg,1.2)*(q22)*above(q28,4);\n' + 'q10 = cos(l1angz)*sin(l1angy);\n' + 'q11 = sin(l1angz)*sin(l1angy);\n' + 'q12 = abs(cos(l1angy)*cos(l1angy));\n' + 'trig = q24 * bnot(index%2);\n' + 'ran1 = if (trig,rand(100)/100-.5, ran1);\n' + 'ran2 = if (trig,rand(100)/100-.5, ran2);\n' + 'q13 = ran1/2;\n' + 'q14 = ran2/2;\n' + 'pp =  4*avg*q13/fps;\n' + 'pp = 1/fps;\n' + 'crit= int(q27/8);\n' + 'px = px + equal(crit,0)*pp;\n' + 'py = py + equal(crit,1)*pp;\n' + 'pz = pz + equal(crit,2)*pp;\n' + 'trel = trel + 1/spb_/fps;\n' + 'jump = int(trel) * below(sdev,.004*avg);\n' + 'q15 = px+jump;\n' + 'q16 = py+jump;\n' + 'q17 = pz+jump;\n' + 'q30 = above(q28,5);\n' + 'monitor = avg;\n' + 'q29 = q22/16*(above(q22,1.5)+.8-avg)+(sin(time/5)-.8)*.1;\n' + 'zoom = 1;\n' + 'warp = 0.0;\n' + ' rot = 0;\n' + 'dx = 0;\n' + 'dy = -.02;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
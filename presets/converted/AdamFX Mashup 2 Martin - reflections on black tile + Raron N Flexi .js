define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 0.59,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.007,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.741,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 6.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.8,
		ib_r : 0.25,
		mv_b : 0.5,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.0,
		wave_smoothing : 0.81,
		warpanimspeed : 1.459,
		wave_dots : 0.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 1.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.32,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 0.5,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.37,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.p1 = 0;
m.q2 = 0;
m.p2 = 0;
m.q3 = 0;
m.q4 = 0;
m.k1 = 0;
m.is_beat = 0;
m.dec_med = 0;
m.q20 = 0;
m.q21 = 0;
m.q32 = 0;
m.q22 = 0;
m.index = 0;
m.q23 = 0;
m.avg = 0;
m.q24 = 0;
m.q26 = 0;
m.q27 = 0;
m.beat = 0;
m.t0 = 0;
m.fade = 0;
m.rott = 0;
m.dec_slow = 0;
m.peak = 0;
m.fade = 0.5;
		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.9, div(30,m.fps));
m.dec_slow = pow(0.99, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.5+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),8);
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.q24 = m.is_beat;
m.q26 = ((m.bass+m.mid)+m.treb);
m.k1 = (m.is_beat*equal(m.index, 0));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.rott = div((m.p2*3.14159265358),2);
m.q27 = (m.index+1);
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.zoom = 1.0;
m.rot = (-0.00*m.index);
m.fade = ((m.fade*m.dec_med)+(pow(0.996, div(30,m.fps))*(1-m.dec_med)));
m.q32 = m.fade;
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
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.82,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.k1 = 0;
m.yi = 0;
m.xi = 0;
m.t2 = 0;

			m.rkeys = ['yi','xi'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t2 = (m.t2+m.bass_att);
		return m;
	},
		'point_eqs' : function(m) {
m.k1 = mod((m.sample*100),2);
m.xi = ((m.value1*m.k1)+(m.xi*(1-m.k1)));
m.yi = ((m.value2*(1-m.k1))+(m.yi*m.k1));
m.x = (0.5+(5*m.xi));
m.y = (0.5+(5*m.yi));
m.a = ((m.bass_att+m.mid_att)+m.treb_att);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t2 = t2 + bass_att;'),
		'point_eqs_str' : ('k1 = (sample*100)%2;\n' + 'xi = value1*k1 + xi*(1-k1);\n' + 'yi = value2*(1-k1) + yi*k1;\n' + 'x = .5 + 5*xi;\n' + 'y = .5 + 5*yi;\n' + 'a = bass_att + mid_att + treb_att;'),

		},
		{
		'baseVals' : {
			a : 0.1,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 5.90461,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 20.0,
			},
		'init_eqs' : function(m) {
m.val = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = m.sample;
m.val = m.value1;
m.y = ((m.val*(0.25-((m.sample-0.5)*(m.sample-0.5))))+0.5);
m.r = 0.6;
m.g = 1;
m.b = 1;
m.a = 1;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = sample ;\n' + 'val = value1;\n' + 'y = val * (.25-(sample-.5)*(sample-.5)) + .5;\n' + 'r = .6;\n' + ' g = 1;\n' + ' b = 1;\n' + 'a=1;'),

		},
		{
		'baseVals' : {
			a : 0.32,
			enabled : 0.0,
			b : 0.0,
			g : 1.0,
			scaling : 0.09987,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.4,
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
m.x = m.sample;
m.r = 0.0;
m.b = 0.0;
m.g = 1;
m.a = 0.6;
m.y = (0.5+m.value1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = sample;\n' + 'r = .0;\n' + ' b = .0;\n' + ' g = 1;\n' + ' a = .6;\n' + 'y = .5 + value1;'),

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
m.q1 = 0;
m.zang = 0;
m.q2 = 0;
m.yang = 0;
m.amod = 0;
m.q3 = 0;
m.xang = 0;
m.mod = 0;
m.q4 = 0;
m.pib = 0;
m.ox = 0;
m.oy = 0;
m.mx = 0;
m.oz = 0;
m.my = 0;
m.med = 0;
m.fov = 0;
m.mz = 0;
m.tic = 0;
m.sa = 0;
m.ra = 0;
m.rb = 0;
m.tin = 0;
m.vr = 0;
m.sp = 0;
m.sam = 0;

			m.rkeys = ['tin'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.ra = 0.8;
m.rb = 0.5;
m.pib = 6.28318530718;
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = ifcond(equal(m.sample, 0), m.time, m.tin);
m.mod = (1.5+(0.5*Math.sin((m.time*0.15))));
m.med = (1.5+(0.5*Math.sin((m.time*0.134))));
m.med = 5;
m.amod = 3;
m.vr = (Math.floor(rand(10001))*0.0001);
m.rb = (m.rb+((Math.floor(rand(10001))*0.0001)*0.1));
m.a = m.vr;
m.sa = ((m.vr*m.pib)*0.5);
m.sp = ((m.sa*m.mod)+(m.q1*1.3));
m.sam = ((m.sa*m.med)-(m.q1*0.219));
m.ox = (m.ra*Math.sin((m.sam*m.pib)));
m.oy = (m.ra*Math.cos((m.sam*m.pib)));
m.ox = (m.ox+((m.rb*-Math.cos(m.sp))*Math.sin((m.sam*m.pib))));
m.oz = (m.rb*-Math.sin(m.sp));
m.oy = (m.oy+((m.rb*-Math.cos(m.sp))*Math.cos((m.sam*m.pib))));
m.xang = (m.time*0.132);
m.xang = m.q2;
m.yang = (m.time*0.153);
m.yang = m.q3;
m.zang = (m.time*0.110);
m.zang = m.q4;
m.fov = (0.6+(0.2*Math.sin(m.time)));
m.fov = 0.5;
m.mx = ((m.ox*Math.cos(m.zang))-(m.oy*Math.sin(m.zang)));
m.my = ((m.ox*Math.sin(m.zang))+(m.oy*Math.cos(m.zang)));
m.ox = m.mx;
m.oy = m.my;
m.mx = ((m.ox*Math.cos(m.yang))+(m.oz*Math.sin(m.yang)));
m.mz = ((-m.ox*Math.sin(m.yang))+(m.oz*Math.cos(m.yang)));
m.ox = m.mx;
m.oz = m.mz;
m.my = ((m.oy*Math.cos(m.xang))-(m.oz*Math.sin(m.xang)));
m.mz = ((m.oy*Math.sin(m.xang))+(m.oz*Math.cos(m.xang)));
m.oy = m.my;
m.oz = m.mz;
m.oz = (m.oz-2);
m.x = (div((m.ox*m.fov),m.oz)+0.5);
m.x = (((m.x-0.5)*0.75)+0.5);
m.y = (div((m.oy*m.fov),m.oz)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('ra = .8;\n' + 'rb = .5;\n' + 'pib = 6.28318530718;\n' + 'tic = min(time-tin,.1);\n' + 'tin = if(equal(sample,0),time,tin);\n' + 'mod = 1.5 + .5*sin(time*.15);\n' + 'med = 1.5 + .5*sin(time*.134);\n' + 'med = 5;\n' + 'amod = 3;\n' + 'vr = int(rand(10001))*.0001;\n' + 'rb = rb + int(rand(10001))*.0001*.1;\n' + 'a = vr;\n' + 'sa = vr*pib*.5;\n' + 'sp = sa*mod + q1*1.3;\n' + 'sam = sa*med - q1*.219;\n' + 'ox = ra*sin(sam*pib);\n' + 'oy = ra*cos(sam*pib);\n' + 'ox = ox + rb*-cos(sp)*sin(sam*pib);\n' + 'oz = rb*-sin(sp);\n' + 'oy = oy + rb*-cos(sp)*cos(sam*pib);\n' + 'xang = time*.132;\n' + 'xang = q2;\n' + 'yang = time*.153;\n' + 'yang = q3;\n' + 'zang = time*.110;\n' + 'zang = q4;\n' + 'fov = 0.6 + 0.2*sin(time);\n' + 'fov = .5;\n' + 'mx = ox*cos(zang) - oy*sin(zang);\n' + 'my = ox*sin(zang) + oy*cos(zang);\n' + 'ox = mx;\n' + 'oy = my;\n' + 'mx = ox*cos(yang) + oz*sin(yang);\n' + 'mz = -ox*sin(yang) + oz*cos(yang);\n' + 'ox = mx;\n' + 'oz = mz;\n' + 'my = oy*cos(xang) - oz*sin(xang);\n' + 'mz = oy*sin(xang) + oz*cos(xang);\n' + 'oy = my;\n' + 'oz = mz;\n' + 'oz = oz - 2;\n' + 'x = ox*fov/oz + 0.5;\n' + 'x = (x-.5)*0.75 + 0.5;\n' + 'y = oy*fov/oz + 0.5;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.83,
			a : 0.03,
			enabled : 0.0,
			b : 0.9,
			tex_ang : 1.00531,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.93,
			tex_zoom : 1.53117,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.8,
			a2 : 0.06,
			r : 0.5,
			border_g : 1.0,
			rad : 0.26574,
			x : 0.5,
			y : 0.5,
			ang : 2.32478,
			sides : 94.0,
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
			r2 : 0.7,
			a : 0.01,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 1.4451,
			thickoutline : 0.0,
			g : 0.4,
			textured : 0.0,
			g2 : 0.4,
			tex_zoom : 1.49331,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.7,
			border_g : 0.5,
			rad : 1.26458,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
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
			a : 0.3,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.60986,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 0.5,
			rad : 0.15648,
			x : 0.503,
			y : 0.5,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 crisp_2;\n' + '   vec2 zz_3;\n' + '   vec3 noiseVal_4;\n' + '   vec2 P_5;\n' + '  P_5 = ((uv * 0.3) + (0.01 * rand_frame).xy);\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = (0.03 * texture2D (sampler_noise_lq, P_5)).xyz;\n' + '  noiseVal_4 = tmpvar_6;\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_blur1, uv);\n' + '   mat2 tmpvar_8;\n' + '  tmpvar_8[0] = _qa.xy;\n' + '  tmpvar_8[1] = _qa.zw;\n' + '  zz_3 = (((\n' + '    (uv - vec2(0.5, 0.5))\n' + '   * texsize.xy) * (0.015 * _qg.z)) * tmpvar_8);\n' + '  uv_1 = (uv + ((\n' + '    clamp ((sin(zz_3) / cos(zz_3)), vec2(-20.0, -20.0), vec2(20.0, 20.0))\n' + '   * texsize.zw) * 8.0));\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = texture2D (sampler_main, uv_1).xyz;\n' + '  crisp_2 = tmpvar_9;\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = (((_qh.w * crisp_2) + (noiseVal_4 * \n' + '    (1.0 - ((tmpvar_7.xyz * scale1) + bias1))\n' + '  )) - 0.02);\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 crisp_1;\n' + '   vec3 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv).xyz;\n' + '  crisp_1 = tmpvar_2;\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv - (0.01 * crisp_1).xy);\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ((crisp_1 + clamp (\n' + '    (3.0 * (((tmpvar_3.xyz * scale1) + bias1) - vec3(0.1, 0.1, 0.2)))\n' + '  , 0.0, 1.0)) * 1.3);\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('fade = .5;'),
	'frame_eqs_str' : ('dec_med = pow (0.9, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %8;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = bass + mid + treb;\n' + 'k1 =  is_beat*equal(index,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'rott = p2 * 3.14159265358/2;\n' + 'q27 = index + 1;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'zoom = 1.0;\n' + 'rot = -0.00 * index;\n' + 'fade = fade*dec_med + pow(0.996, 30/fps) * (1-dec_med);\n' + 'q32 = fade;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
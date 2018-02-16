define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 0.4,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.012,
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
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.0,
		echo_zoom : 0.997,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 0.01,
		wave_dots : 1.0,
		mv_g : 0.0,
		wave_x : 0.5,
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
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.96,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
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
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.98;
m.zoom = 1.000;
m.q1 = (m.time*0.4);
		m.rkeys = ['dy'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = 0.005;
m.dy = ((m.dy+((0.0025*Math.sin((m.time*0.71)))*Math.cos((m.time*1.1))))+(0.0025*Math.sin((m.time*0.3))));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wavey = 0;
m.q1 = 0;
m.head = 0;
m.samplerepeat = 0;
m.cycle = 0;
m.trailsize = 0;
m.tmc = 0;
m.n = 0;
m.tail = 0;
m.cycleto1 = 0;
m.swap = 0;
m.variation = 0;
m.tmm = 0;
m.yp = 0;
m.repeats = 0;
m.xp = 0;
m.tm = 0;
m.phs = 0;
m.sampcyc = 0;
m.rsample = 0;
m.wavex = 0;

			m.rkeys = ['yp'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.repeats = 10;
m.samplerepeat = (m.sample*m.repeats);
m.cycle = Math.floor(m.samplerepeat);
m.sampcyc = (m.samplerepeat-m.cycle);
m.cycleto1 = div(m.cycle,m.repeats);
m.n = (m.sampcyc*6.283);
m.phs = m.sampcyc;
m.tm = ((m.q1+m.phs)+(m.cycleto1*0.1));
m.tmm = m.time;
m.rsample = (((1-(m.sampcyc*0.9))*2.2)*(m.cycleto1+1));
m.a = (m.sampcyc*below(m.sampcyc, 0.95));
m.a = (m.a*m.a);
m.tmc = ((m.tm+m.cycle)-(m.phs*0.2));
m.variation = (Math.sin((m.cycleto1*6.283))*9);
m.swap = ((above(m.sample, 0.5)*2)-1);
m.wavex = ((Math.sin(((m.tmc*(19+m.variation))*m.swap))*m.rsample)*0.04);
m.wavey = ((Math.cos(((m.tmc*(19+m.variation))*m.swap))*m.rsample)*0.04);
m.xp = (Math.sin(m.tm)*0.4);
m.xp = (m.xp*Math.sin((m.tm*3)));
m.yp = (m.yp*Math.cos((m.tm*2.6)));
m.xp = (0+(m.xp*Math.sin((m.tm*0.43))));
m.yp = (m.yp*((Math.cos((m.tm*1.79))*0.5)+0.5));
m.xp = (m.xp+m.wavex);
m.yp = (m.yp+m.wavey);
m.x = (m.xp+0.25);
m.y = (m.yp+0.5);
m.trailsize = 0.85;
m.head = above(m.a, m.trailsize);
m.tail = (1-m.head);
m.r = ((1*m.head)+(0.5*m.tail));
m.g = ((0.8*m.head)+(0.3*m.tail));
m.b = (0.5*m.head);
m.a = (m.a*0.25);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('repeats=10;\n' + 'samplerepeat=sample*repeats;\n' + 'cycle=int(samplerepeat);\n' + 'sampcyc=samplerepeat - cycle;\n' + 'cycleto1=cycle/repeats;\n' + 'n=sampcyc*6.283;\n' + 'phs=sampcyc;\n' + 'tm=q1+phs+(cycleto1)*0.1;\n' + 'tmm=time;\n' + 'rsample=(1-sampcyc*0.9)*2.2*(cycleto1+1);\n' + 'a=sampcyc * below(sampcyc,0.95);\n' + 'a=a*a;\n' + 'tmc=tm+cycle-phs*0.2;\n' + 'variation=sin(cycleto1*6.283)*9;\n' + 'swap=above(sample,0.5)*2-1;\n' + 'wavex=sin(tmc*(19+variation)*swap)*rsample*0.04;\n' + 'wavey=cos(tmc*(19+variation)*swap)*rsample*0.04;\n' + 'xp=sin(tm)*0.4 ;\n' + 'xp=xp*sin(tm*3);\n' + 'yp=yp*cos(tm*2.6);\n' + 'xp=0+xp*sin(tm*0.43);\n' + 'yp=yp*(cos(tm*1.79)*0.5+.5);\n' + 'xp=xp+wavex;\n' + 'yp=yp+wavey;\n' + 'x=xp+.25;\n' + 'y=yp+.5;\n' + 'trailsize=0.85;\n' + 'head=above(a,trailsize);\n' + 'tail=1-head;\n' + 'r=1*head + 0.5*tail;\n' + 'g=0.8*head + 0.3*tail;\n' + 'b=0.5*head;\n' + 'a=a*0.25;'),

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
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wavey = 0;
m.q1 = 0;
m.head = 0;
m.samplerepeat = 0;
m.cycle = 0;
m.trailsize = 0;
m.tmc = 0;
m.n = 0;
m.tail = 0;
m.cycleto1 = 0;
m.swap = 0;
m.variation = 0;
m.tmm = 0;
m.yp = 0;
m.repeats = 0;
m.xp = 0;
m.tm = 0;
m.phs = 0;
m.sampcyc = 0;
m.rsample = 0;
m.wavex = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.repeats = 8;
m.samplerepeat = (m.sample*m.repeats);
m.cycle = Math.floor(m.samplerepeat);
m.sampcyc = (m.samplerepeat-m.cycle);
m.cycleto1 = div(m.cycle,m.repeats);
m.n = (m.sampcyc*6.283);
m.phs = (m.sampcyc+0.15);
m.tm = ((m.q1+m.phs)+(m.cycleto1*0.1));
m.tmm = m.time;
m.rsample = (((1-(m.sampcyc*0.9))*1.5)*(m.cycleto1+1));
m.a = (m.sampcyc*below(m.sampcyc, 0.95));
m.a = (m.a*m.a);
m.tmc = ((m.tm+m.cycle)-(m.phs*0.2));
m.variation = (Math.sin((m.cycleto1*6.283))*9);
m.swap = ((above(m.sample, 0.5)*2)-1);
m.wavex = ((Math.sin(((m.tmc*(19+m.variation))*m.swap))*m.rsample)*0.04);
m.wavey = ((Math.cos(((m.tmc*(19+m.variation))*m.swap))*m.rsample)*0.04);
m.xp = (Math.sin(m.tm)*0.4);
m.yp = (Math.cos(m.tm)*0.4);
m.xp = (m.xp*Math.sin((m.tm*3)));
m.yp = (m.yp*Math.cos((m.tm*2.6)));
m.xp = (m.xp*Math.sin((m.tm*0.43)));
m.yp = (m.yp*((Math.cos((m.tm*1.79))*0.5)+0.5));
m.xp = (m.xp+m.wavex);
m.yp = (m.yp+m.wavey);
m.x = (m.xp+0.5);
m.y = ((m.yp*1.333)+0.5);
m.trailsize = 0.85;
m.head = above(m.a, m.trailsize);
m.tail = (1-m.head);
m.r = ((1*m.head)+(0.5*m.tail));
m.g = ((0.8*m.head)+(0.3*m.tail));
m.b = (0.5*m.head);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('repeats=8;\n' + 'samplerepeat=sample*repeats;\n' + 'cycle=int(samplerepeat);\n' + 'sampcyc=samplerepeat - cycle;\n' + 'cycleto1=cycle/repeats;\n' + 'n=sampcyc*6.283;\n' + 'phs=sampcyc+0.15;\n' + 'tm=q1+phs+(cycleto1)*0.1;\n' + 'tmm=time;\n' + 'rsample=(1-sampcyc*0.9)*1.5*(cycleto1+1);\n' + 'a=sampcyc * below(sampcyc,0.95);\n' + 'a=a*a;\n' + 'tmc=tm+cycle-phs*0.2;\n' + 'variation=sin(cycleto1*6.283)*9;\n' + 'swap=above(sample,0.5)*2-1;\n' + 'wavex=sin(tmc*(19+variation)*swap)*rsample*0.04;\n' + 'wavey=cos(tmc*(19+variation)*swap)*rsample*0.04;\n' + 'xp=sin(tm)*0.4 ;\n' + 'yp=cos(tm)*0.4 ;\n' + 'xp=xp*sin(tm*3);\n' + 'yp=yp*cos(tm*2.6);\n' + 'xp=xp*sin(tm*0.43);\n' + 'yp=yp*(cos(tm*1.79)*0.5+0.5);\n' + 'xp=xp+wavex;\n' + 'yp=yp+wavey;\n' + 'x=xp+0.5;\n' + 'y=yp*1.333 + 0.5;\n' + 'trailsize=0.85;\n' + 'head=above(a,trailsize);\n' + 'tail=1-head;\n' + 'r=1*head + 0.5*tail;\n' + 'g=0.8*head + 0.3*tail;\n' + 'b=0.5*head;'),

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
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wavey = 0;
m.q1 = 0;
m.head = 0;
m.samplerepeat = 0;
m.cycle = 0;
m.trailsize = 0;
m.tmc = 0;
m.n = 0;
m.tail = 0;
m.cycleto1 = 0;
m.swap = 0;
m.variation = 0;
m.tmm = 0;
m.yp = 0;
m.repeats = 0;
m.xp = 0;
m.tm = 0;
m.phs = 0;
m.sampcyc = 0;
m.rsample = 0;
m.wavex = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.repeats = 6;
m.samplerepeat = (m.sample*m.repeats);
m.cycle = Math.floor(m.samplerepeat);
m.sampcyc = (m.samplerepeat-m.cycle);
m.cycleto1 = div(m.cycle,m.repeats);
m.n = (m.sampcyc*6.283);
m.phs = (m.sampcyc+0.25);
m.tm = ((m.q1+m.phs)+(m.cycleto1*0.1));
m.tmm = m.time;
m.rsample = (((1-(m.sampcyc*0.9))*1.5)*(m.cycleto1+1));
m.a = (m.sampcyc*below(m.sampcyc, 0.95));
m.a = (m.a*m.a);
m.tmc = ((m.tm+m.cycle)-(m.phs*0.2));
m.variation = (Math.sin((m.cycleto1*6.283))*9);
m.swap = ((above(m.sample, 0.5)*2)-1);
m.wavex = ((Math.sin(((m.tmc*(19+m.variation))*m.swap))*m.rsample)*0.04);
m.wavey = ((Math.cos(((m.tmc*(19+m.variation))*m.swap))*m.rsample)*0.04);
m.xp = (Math.sin(m.tm)*0.4);
m.yp = (Math.cos(m.tm)*0.4);
m.xp = (m.xp*Math.sin((m.tm*3)));
m.yp = (m.yp*Math.cos((m.tm*2.6)));
m.xp = (m.xp*Math.sin((m.tm*0.43)));
m.yp = (m.yp*((Math.cos((m.tm*1.79))*0.5)+0.5));
m.xp = (m.xp+m.wavex);
m.yp = (m.yp+m.wavey);
m.x = (m.xp+0.5);
m.y = ((m.yp*1.333)+0.5);
m.trailsize = 0.85;
m.head = above(m.a, m.trailsize);
m.tail = (1-m.head);
m.r = ((1*m.head)+(0.5*m.tail));
m.g = ((0.8*m.head)+(0.3*m.tail));
m.b = (0.5*m.head);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('repeats=6;\n' + 'samplerepeat=sample*repeats;\n' + 'cycle=int(samplerepeat);\n' + 'sampcyc=samplerepeat - cycle;\n' + 'cycleto1=cycle/repeats;\n' + 'n=sampcyc*6.283;\n' + 'phs=sampcyc+0.25;\n' + 'tm=q1+phs+(cycleto1)*0.1;\n' + 'tmm=time;\n' + 'rsample=(1-sampcyc*0.9)*1.5*(cycleto1+1);\n' + 'a=sampcyc * below(sampcyc,0.95);\n' + 'a=a*a;\n' + 'tmc=tm+cycle-phs*0.2;\n' + 'variation=sin(cycleto1*6.283)*9;\n' + 'swap=above(sample,0.5)*2-1;\n' + 'wavex=sin(tmc*(19+variation)*swap)*rsample*0.04;\n' + 'wavey=cos(tmc*(19+variation)*swap)*rsample*0.04;\n' + 'xp=sin(tm)*0.4 ;\n' + 'yp=cos(tm)*0.4 ;\n' + 'xp=xp*sin(tm*3);\n' + 'yp=yp*cos(tm*2.6);\n' + 'xp=xp*sin(tm*0.43);\n' + 'yp=yp*(cos(tm*1.79)*0.5+0.5);\n' + 'xp=xp+wavex;\n' + 'yp=yp+wavey;\n' + 'x=xp+0.5;\n' + 'y=yp*1.333 + 0.5;\n' + 'trailsize=0.85;\n' + 'head=above(a,trailsize);\n' + 'tail=1-head;\n' + 'r=1*head + 0.5*tail;\n' + 'g=0.8*head + 0.3*tail;\n' + 'b=0.5*head;'),

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
			r2 : 0.6,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 1.1938,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.7,
			tex_zoom : 1.0406,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.80814,
			x : 0.5,
			y : 0.68,
			ang : 0.0,
			sides : 6.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=time*0.1;'),

		},
		{
		'baseVals' : {
			r2 : 0.6,
			a : 0.15,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 1.1938,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.7,
			tex_zoom : 1.0406,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.56483,
			x : 0.5,
			y : 0.21,
			ang : 0.0,
			sides : 6.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (-m.time*0.13);
m.x = ((Math.sin((m.time*0.29))*0.2)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=-time*0.13;\n' + 'x=sin(time*0.29)*0.2 + 0.5;'),

		},
		{
		'baseVals' : {
			r2 : 0.6,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.7,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
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
			r2 : 0.5,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.7,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 crisp_2;\n' + '   vec3 noiseVal_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + rand_frame.xy);\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = vec3((dot (texture2D (sampler_noise_lq, P_4), vec4(0.32, 0.49, 0.29, 0.0)) - 0.5));\n' + '  noiseVal_3 = tmpvar_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = ((uv * texsize.xy) * 0.02);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7.x = (cos(tmpvar_6.y) * sin(-(tmpvar_6.y)));\n' + '  tmpvar_7.y = (sin(tmpvar_6.x) * cos(tmpvar_6.y));\n' + '  uv_1 = (uv + ((_qg.w * tmpvar_7) * (texsize.zw * 64.0)));\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_main, uv_1);\n' + '  crisp_2 = (tmpvar_8.xyz + (noiseVal_3 / 20.0));\n' + '   vec3 tmpvar_9;\n' + '  tmpvar_9 = mix (crisp_2.zxy, crisp_2, vec3((0.1 * dot (crisp_2, vec3(0.32, 0.49, 0.29)))));\n' + '  crisp_2 = tmpvar_9;\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_main, uv_1);\n' + '   vec4 tmpvar_11;\n' + '  tmpvar_11.w = 1.0;\n' + '  tmpvar_11.xyz = ((_qf.w * (\n' + '    (tmpvar_9 * 0.99)\n' + '   - 0.01)) + ((\n' + '    (1.0 - _qf.w)\n' + '   * tmpvar_10.xyz) * 0.99));\n' + '  vec4 ret4 = tmpvar_11;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_7 = texture2D (sampler_blur1, P_8);\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1)).y;\n' + '  tmpvar_11.y = (((tmpvar_7.xyz * scale1) + bias1) - ((tmpvar_9.xyz * scale1) + bias1)).y;\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = (uv + (tmpvar_11 * 0.55));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = ((tmpvar_12 * 1.25) - 0.125);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur1, tmpvar_12);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_main, uv);\n' + '   vec3 tmpvar_16;\n' + '  tmpvar_16 = mix (ret_1, (1.0 - ret_1), ((0.7 * \n' + '    ((tmpvar_14.xyz * scale1) + bias1)\n' + '  ) + (0.2 * tmpvar_15.xyz)));\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur3, tmpvar_12);\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_blur1, tmpvar_13);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_main, tmpvar_12);\n' + '   vec3 tmpvar_20;\n' + '  tmpvar_20 = mix (tmpvar_16, ((\n' + '    (tmpvar_16 - (0.1 * ((tmpvar_17.xyz * scale3) + bias3)))\n' + '   + \n' + '    (0.1 * ((tmpvar_18.xyz * scale1) + bias1))\n' + '  ) + (0.42 * tmpvar_19.xyz)), vec3(0.25, 0.25, 0.25));\n' + '   vec3 x_21;\n' + '  x_21 = (tmpvar_20 - 0.5);\n' + '  ret_1 = (tmpvar_20 * clamp ((\n' + '    sqrt(dot (x_21, x_21))\n' + '   * 5.0), 0.0, 1.0));\n' + '  ret_1 = (vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))) + 1.25);\n' + '  ret_1 = (ret_1 * (ret_1 * 0.45));\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur3, uv);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_blur1, uv);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_blur2, tmpvar_12);\n' + '  ret_1 = (ret_1 * mix (ret_1, (\n' + '    (1.3 * ret_1)\n' + '   * \n' + '    ((((tmpvar_22.xyz * scale3) + bias3) - ((tmpvar_23.xyz * scale1) + bias1)) - (0.25 * ((tmpvar_24.xyz * scale2) + bias2)))\n' + '  ), pow (hue_shader.zxy, \n' + '    (1.0 - ret_1)\n' + '  )));\n' + '  ret_1 = (ret_1 + 0.04);\n' + '  ret_1 = (ret_1 * (0.9 * ret_1));\n' + '  ret_1 = (ret_1 * ((hue_shader * 4.0) - 2.75));\n' + '  ret_1 = (ret_1 * (2.0 - (0.5 * \n' + '    clamp (ret_1, 0.0, 1.0)\n' + '  )));\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25.w = 1.0;\n' + '  tmpvar_25.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_25;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=0.98;\n' + 'zoom=1.000;\n' + 'q1=time*0.4;'),
	'pixel_eqs_str' : ('dx=.005;\n' + 'dy=dy+.0025*sin(time*.71)*cos(time*1.1)+.0025*sin(time*.3);'),
};

return pmap;
});
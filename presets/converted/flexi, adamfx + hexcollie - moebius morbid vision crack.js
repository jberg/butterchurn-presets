define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.4,
		ib_g : 1.0,
		mv_x : 32.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 24.0,
		wave_scale : 0.012,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.05,
		b2x : 1.0,
		warp : 0.00564,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.02,
		mv_dy : -0.02,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 1.0,
		mv_b : 0.3,
		echo_zoom : 1.007,
		ob_size : 0.05,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.48,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99951,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.2,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.995,
		wave_a : 0.02,
		ob_g : 0.0,
		ib_a : 0.1,
		wave_b : 0.3,
		ib_b : 1.0,
		mv_r : 0.49,
		rating : 2.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.bom = 0;
m.t4 = 0;
m.q2 = 0;
m.iscale = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.q5 = 0;
m.q6 = 0;
m.weconz = 0;
m.speed = 0;
m.q8 = 0;
m.c_inv_r = 0;
m.scale = 0;
m.iangle = 0;
m.bamx = 0;
m.translation_x = 0;
m.a_i = 0;
m.tri = 0;
m.translation_y = 0;
m.boom = 0;
m.ac_i = 0;
m.b_i = 0;
m.c_i = 0;
m.bcad_i = 0;
m.d_i = 0;
m.q11 = 0;
m.q12 = 0;
m.mu_i = 0;
m.angle = 0;
m.q13 = 0;
m.a_r = 0;
m.q14 = 0;
m.q15 = 0;
m.wec = 0;
m.ac_r = 0;
m.b_r = 0;
m.q16 = 0;
m.c_r = 0;
m.q17 = 0;
m.bcad_r = 0;
m.d_r = 0;
m.q18 = 0;
m.speeda = 0;
m.speedb = 0;
m.rox = 0;
m.mu_r = 0;
m.speedc = 0;
m.wecrut = 0;
m.t1 = 0;
m.daz = 0;
m.itranslation_u = 0;
m.shox = 0;
m.itranslation_v = 0;
m.c_inv_i = 0;
m.t3 = 0;
m.rhox = 0;
m.mv_x = 60;
m.mv_y = 89;
m.monitor = m.echo_zoom;
		return m;
	},
	'frame_eqs' : function(m) {
m.zoom = Math.sin(m.echo_zoom);
m.cx = ((Math.sin((div(m.time,2)*1.5))*0.8)+0.5);
m.cy = ((Math.sin((m.time*1.1))*0.8)+0.5);
m.ob_r = (2*(m.time*0.7));
m.ob_b = (2*(m.time*0.6));
m.ob_g = (2*(m.time*0.5));
m.ib_r = (1*(m.time*0.5));
m.ib_b = (1*(m.time*0.6));
m.ib_g = (1*(m.time*0.7));
m.rot = 0.1;
m.scale = 3;
m.angle = (m.time*0.01);
m.translation_x = 0;
m.translation_y = 0.02;
m.iscale = 0.2;
m.iangle = (Math.sin((m.time*0.1337))*0.3);
m.itranslation_u = 0;
m.itranslation_v = 0;
m.a_r = (Math.cos(m.angle)*m.scale);
m.a_i = (Math.sin(m.angle)*m.scale);
m.b_r = m.translation_x;
m.b_i = m.translation_y;
m.c_r = (-Math.cos(m.iangle)*m.iscale);
m.c_i = (-Math.sin(m.iangle)*m.iscale);
m.d_r = m.itranslation_u;
m.d_i = m.itranslation_v;
m.c_inv_r = div(m.c_r,((m.c_r*m.c_r)+(m.c_i*m.c_i)));
m.c_inv_i = div(m.c_i,((m.c_r*m.c_r)+(m.c_i*m.c_i)));
m.ac_r = ((m.a_r*m.c_inv_r)-(m.a_i*m.c_inv_i));
m.ac_i = ((m.a_r*m.c_inv_i)-(m.a_i*m.c_inv_r));
m.bcad_r = (((m.b_r*m.c_r)-(m.b_i*m.c_i))-((m.a_r*m.d_r)-(m.a_i*m.d_i)));
m.bcad_i = (((m.b_r*m.c_i)-(m.b_i*m.c_r))-((m.a_r*m.d_i)-(m.a_i*m.d_r)));
m.mu_r = ((m.bcad_r*m.c_inv_r)-(m.bcad_i*m.c_inv_i));
m.mu_i = ((m.bcad_r*m.c_inv_i)-(m.bcad_i*m.c_inv_r));
m.q11 = m.ac_r;
m.q12 = m.ac_i;
m.q13 = m.mu_r;
m.q14 = m.mu_i;
m.q15 = m.c_r;
m.q16 = m.c_i;
m.q17 = m.d_r;
m.q18 = m.d_i;
		m.rkeys = ['q3','q4','q5','q8','tri','boom','speeda','speedb','speedc'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.bamx = Math.sin((m.time-m.bass));
m.boom = Math.sin(((mod(m.bamx,m.boom)*m.bass)*m.time));
m.bom = (rand(((0.1*(m.time-m.boom))*(m.time-m.bamx)))*2);
m.speed = mod(Math.sin(((m.speeda-m.speedb)*(m.speedb-m.speeda))),m.speedc);
m.speeda = Math.sin((((m.bass*3)-m.speedb)*m.time));
m.speedb = Math.sin((((m.mid*3)+m.speedc)*m.time));
m.speedc = Math.sin((((m.treb*3)-m.speeda)*m.time));
m.shox = (Math.cos((m.q3-m.q8))*m.speed);
m.rhox = mod(Math.sin((m.q5+m.speedb)),m.speed);
m.rox = div((m.shox-m.rhox),2);
m.daz = ((((m.speed*(m.time-1))*m.bass)*0.5)+0.5);
m.wec = Math.sin((m.time-1));
m.weconz = (m.t4-m.q4);
m.wecrut = ((m.tri*3)-Math.sin((m.time-m.rad)));
m.tri = m.q8;
m.warp = 1.420;
m.q3 = (m.treb*m.bom);
m.q8 = (m.bass*m.boom);
m.q5 = (m.mid*m.rox);
m.q6 = mod(m.rox,m.speed);
m.q4 = (m.daz-m.q4);
m.wec = Math.sin((m.time-1));
m.weconz = ((m.q4-m.q2)*m.wec);
m.wecrut = ((m.tri*3)-Math.sin((m.time-m.rad)));
m.tri = m.q8;
m.t1 = (m.wec+m.x);
m.t3 = (m.tri*m.weconz);
m.t6 = m.wecrut;
m.t7 = (m.wec*m.time);
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
			tex_ang : 0.94248,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.53426,
			additive : 0.0,
			border_a : 0.17,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.67089,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.advs = 0;
m.q3 = 0;
m.q5 = 0;
m.flux = 0;
m.fluxs = 0;
m.adv = 0;
m.advflux = 0;

			m.rkeys = ['adv'];
			return m;
		},
		'frame_eqs' : function(m) {
m.flux = (m.q5*9);
m.fluxs = Math.max(m.flux, 0);
m.fluxs = Math.min(m.fluxs, 1);
m.advflux = ((m.q3*m.fluxs)+(-m.q3*(1-m.fluxs)));
m.adv = (m.adv+m.advflux);
m.advs = div(m.adv,256);
m.ang = m.advs;
m.rad = (1.671+div(m.q3,25));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('flux=q5*9;\n' + 'fluxs=max(flux,0);\n' + 'fluxs=min(fluxs,1);\n' + 'advflux=(q3*fluxs) + (-q3 * (1-fluxs));\n' + 'adv=adv+advflux;\n' + 'advs=adv/256;\n' + 'ang=advs;\n' + 'rad=1.671 + q3/25;'),

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
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.1,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.35,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.y = (0.1+(m.q2*0.4));
m.rad = div(m.q2,2);
m.ang = (-m.q2*2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('y=0.1 + q2*0.4;\n' + 'rad=q2/2;\n' + 'ang=-q2*2;'),

		},
		{
		'baseVals' : {
			r2 : 0.1,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.05,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.44484,
			x : 0.59,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.mover = 0;
m.dir = 0;
m.rotator = 0;
m.dir = 3;
m.mover = 0;
m.rotator = 0.255;
			m.rkeys = ['mover','dir','rotator'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = m.rotator;
m.x = ifcond(equal(m.dir, 1), (1-m.mover), ifcond(equal(m.dir, 1.5), 0.15, ifcond(equal(m.dir, 2), 0, ifcond(equal(m.dir, 2.5), 0, ifcond(equal(m.dir, 3), (0+m.mover), ifcond(equal(m.dir, 3.5), 1, ifcond(equal(m.dir, 4), 1, 1)))))));
m.y = ifcond(equal(m.dir, 1), 1, ifcond(equal(m.dir, 1.5), 1, ifcond(equal(m.dir, 2), (1-m.mover), ifcond(equal(m.dir, 2.5), 0, ifcond(equal(m.dir, 3), 0, ifcond(equal(m.dir, 3.5), 0, ifcond(equal(m.dir, 4), (0+m.mover), 1)))))));
m.mover = ifcond(equal(m.dir, 1), (m.mover+0.005), ifcond(equal(m.dir, 1.5), 0, ifcond(equal(m.dir, 2), (m.mover+0.005), ifcond(equal(m.dir, 2.5), 0, ifcond(equal(m.dir, 3), (m.mover+0.005), ifcond(equal(m.dir, 3.5), 0, ifcond(equal(m.dir, 4), (m.mover+0.005), 0)))))));
m.dir = ifcond(equal(m.dir, 1), ifcond(above(m.mover, 0.995), 1.5, m.dir), ifcond(equal(m.dir, 1.5), ifcond(below(m.rotator, -1.29), 2, m.dir), ifcond(equal(m.dir, 2), ifcond(above(m.mover, 0.995), 2.5, m.dir), ifcond(equal(m.dir, 2.5), ifcond(below(m.rotator, -2.85), 3, m.dir), ifcond(equal(m.dir, 3), ifcond(above(m.mover, 0.995), 3.5, m.dir), ifcond(equal(m.dir, 3.5), ifcond(below(m.rotator, -4.44), 4, m.dir), ifcond(equal(m.dir, 4), ifcond(above(m.mover, 0.995), 4.5, m.dir), ifcond(equal(m.dir, 4.5), ifcond(below(m.rotator, -5.94), 1, m.dir), m.dir))))))));
m.rotator = ifcond(equal(m.dir, 1.5), ifcond(above(m.rotator, -1.31), (m.rotator-0.05), m.rotator), ifcond(equal(m.dir, 2), -1.3, ifcond(equal(m.dir, 2.5), ifcond(above(m.rotator, -2.87), (m.rotator-0.05), m.rotator), ifcond(equal(m.dir, 3), -2.86, ifcond(equal(m.dir, 3.5), ifcond(above(m.rotator, -4.46), (m.rotator-0.05), m.rotator), ifcond(equal(m.dir, 4), -4.45, ifcond(equal(m.dir, 4.5), ifcond(above(m.rotator, -5.97), (m.rotator-0.05), m.rotator), ifcond(equal(m.dir, 4), -5.96, 0.26))))))));
m.b = above(m.mid, 1.5);
m.r2 = above(m.mid, 1.5);
m.g2 = above(m.mid, 1.5);
m.b2 = above(m.mid, 1.5);
		return m;
	},
		'init_eqs_str' : ('dir = 3;\n' + 'mover = 0;\n' + 'rotator = .255;'),
		'frame_eqs_str' : ('ang = rotator;\n' + 'x = if(equal(dir,1),1 - mover,if(equal(dir,1.5),.15,if(equal(dir,2),0,if(equal(dir,2.5),0, if(equal(dir,3),0+mover,if(equal(dir,3.5),1,if(equal(dir,4),1,1)))))));\n' + 'y = if(equal(dir,1),1,if(equal(dir,1.5),1,if(equal(dir,2),1 - mover,if(equal(dir,2.5),0, if(equal(dir,3),0,if(equal(dir,3.5),0,if(equal(dir,4),0+mover,1)))))));\n' + 'mover = if(equal(dir,1),mover + .005,if(equal(dir,1.5),0,if(equal(dir,2),mover + .005,if(equal(dir,2.5),0, if(equal(dir,3),mover+.005,if(equal(dir,3.5),0,if(equal(dir,4),mover+.005,0)))))));\n' + 'dir = if(equal(dir,1),if(above(mover,.995),1.5,dir),if(equal(dir,1.5),if(below(rotator,-1.29),2,dir), if(equal(dir,2),if(above(mover,.995),2.5,dir),if(equal(dir,2.5),if(below(rotator,-2.85),3,dir), if(equal(dir,3),if(above(mover,.995),3.5,dir),if(equal(dir,3.5),if(below(rotator,-4.44),4,dir), if(equal(dir,4),if(above(mover,.995),4.5,dir),if(equal(dir,4.5),if(below(rotator,-5.94),1,dir),dir))))))));\n' + 'rotator = if(equal(dir,1.5),if(above(rotator,-1.31),rotator - .05,rotator),if(equal(dir,2),-1.3, if(equal(dir,2.5),if(above(rotator,-2.87),rotator-.05,rotator),if(equal(dir,3),-2.86, if(equal(dir,3.5),if(above(rotator,-4.46),rotator-.05,rotator),if(equal(dir,4),-4.45, if(equal(dir,4.5),if(above(rotator,-5.97),rotator-.05,rotator),if(equal(dir,4),-5.96,.26))))))));\n' + 'b = above(mid,1.5);\n' + 'r2 = above(mid,1.5);\n' + 'g2 = above(mid,1.5);\n' + 'b2 = above(mid,1.5);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.3,
			enabled : 1.0,
			b : 0.98,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.09,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.98,
			border_g : 1.0,
			rad : 0.1,
			x : 0.84,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = ((Math.sin(div(m.time,2))*0.4)+0.5);
m.y = ((Math.sin(m.time)*0.4)+0.5);
m.rad = div((m.q1*m.q1),2);
m.ang = (m.q1*4);
m.r = (0.70+(Math.sin(div(m.time,2))*0.50));
m.g = (0.70+(Math.sin((div(m.time,2)+2))*0.50));
m.b = (0.70+(Math.sin((div(m.time,2)+4))*0.50));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=sin(time/2)*0.4 + 0.5;\n' + 'y=sin(time)*0.4+0.5;\n' + 'rad=(q1*q1)/2;\n' + 'ang=q1*4;\n' + 'r=0.70 + (sin(time/2))*0.50;\n' + 'g=0.70 + (sin(time/2 + 2)) * 0.50;\n' + 'b=0.70 + (sin(time/2 + 4)) * 0.50;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv_orig);\n' + '  ret_1.z = (tmpvar_2.xyz - 0.004).z;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (texsize.zw * 2.0);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = (((tmpvar_4.xyz * scale1) + bias1) - ((tmpvar_6.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv + (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (uv - (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = (((tmpvar_9.xyz * scale1) + bias1) - ((tmpvar_11.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15.x = tmpvar_8.x;\n' + '  tmpvar_15.y = tmpvar_13.x;\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = (texture2D (sampler_noise_lq, tmpvar_14).xyz - 0.5).xy;\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17 = ((mix (uv_orig, uv, vec2(-0.4, -0.4)) - (tmpvar_15 * texsize.zw)) + ((tmpvar_16 * texsize.zw) * 2.0));\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_main, tmpvar_17);\n' + '  ret_1.x = (tmpvar_18.x - 0.001);\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = tmpvar_8.y;\n' + '  tmpvar_19.y = tmpvar_13.y;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = ((uv + (vec2(0.0, 1.0) * texsize.zw)) - ((tmpvar_19 * texsize.zw) * 2.0));\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_blur1, uv_orig);\n' + '   float y_22;\n' + '  y_22 = (texture2D (sampler_fc_main, tmpvar_20).y - 0.004);\n' + '  ret_1.y = max (((tmpvar_21.xyz * scale1) + bias1).x, y_22);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23.w = 1.0;\n' + '  tmpvar_23.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_23;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 rnd_2;\n' + '   vec2 moebius_3;\n' + '   vec2 d_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (uv - 0.5);\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = ((tmpvar_5.x * _qd.z) - (tmpvar_5.y * _qd.w));\n' + '  tmpvar_6.y = ((tmpvar_5.x * _qd.w) - (tmpvar_5.y * _qd.z));\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7 = (tmpvar_6 + _qe.xy);\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8.x = ((_qd.x * tmpvar_7.x) + (_qd.y * tmpvar_7.y));\n' + '  tmpvar_8.y = ((_qd.y * tmpvar_7.x) - (_qd.x * tmpvar_7.y));\n' + '  moebius_3 = (0.5 + ((\n' + '    (1.0 - abs(((\n' + '      fract((((tmpvar_8 / \n' + '        ((tmpvar_7.x * tmpvar_7.x) + (tmpvar_7.y * tmpvar_7.y))\n' + '      ) + _qc.zw) * 0.5))\n' + '     * 2.0) - 1.0)))\n' + '   - 0.5) * 0.99));\n' + '   vec2 P_9;\n' + '  P_9 = (rand_frame.xy + ((moebius_3 * texsize.xy) * texsize_noise_lq.zw));\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = ((texture2D (sampler_noise_lq, P_9) * 2.0) - 1.0).xyz;\n' + '  rnd_2 = tmpvar_10;\n' + '  d_4 = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (moebius_3 + (vec2(1.0, 0.0) * d_4));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (moebius_3 - (vec2(1.0, 0.0) * d_4));\n' + '  tmpvar_13 = texture2D (sampler_blur1, P_14);\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (moebius_3 + (vec2(0.0, 1.0) * d_4));\n' + '  tmpvar_15 = texture2D (sampler_blur1, P_16);\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (moebius_3 - (vec2(0.0, 1.0) * d_4));\n' + '  tmpvar_17 = texture2D (sampler_blur1, P_18);\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = dot (((\n' + '    (tmpvar_11.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_13.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_19.y = dot (((\n' + '    (tmpvar_15.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_17.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '  uv_1 = (moebius_3 - ((tmpvar_19 * texsize.zw) * 32.0));\n' + '   vec4 tmpvar_20;\n' + '   vec2 P_21;\n' + '  P_21 = (uv_1 + ((rnd_2.xy * texsize.zw) * 5.0));\n' + '  tmpvar_20 = texture2D (sampler_blur3, P_21);\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_main, uv_1);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23.w = 1.0;\n' + '  tmpvar_23.xyz = abs(((\n' + '    ((tmpvar_20.xyz * scale3) + bias3)\n' + '   * 2.0) - tmpvar_22.xyz));\n' + '  vec4 ret4 = tmpvar_23;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('mv_x = (60);\n' + 'mv_y = 89;\n' + 'monitor = echo_zoom;'),
	'frame_eqs_str' : ('zoom =sin( echo_zoom);\n' + 'cx = (sin((time/2)*1.5)*0.8 + 0.5);\n' + 'cy = (sin(time*1.1)*0.8 + 0.5);\n' + 'ob_r = 2*(time*.7);\n' + 'ob_b = 2*(time*.6);\n' + 'ob_g = 2*(time*.5);\n' + 'ib_r = 1*(time*.5);\n' + 'ib_b = 1*(time*.6);\n' + 'ib_g = 1*(time*.7);\n' + 'rot = 0.1;\n' + 'scale = 3;\n' + 'angle = time*.01;\n' + 'translation_x = 0;\n' + 'translation_y = 0.02;\n' + 'iscale = 0.2;\n' + 'iangle = sin(time*0.1337)*0.3;\n' + 'itranslation_u = 0;\n' + 'itranslation_v = 0;\n' + 'a_r = cos(angle)*scale;\n' + 'a_i = sin(angle)*scale;\n' + 'b_r = translation_x;\n' + 'b_i = translation_y;\n' + 'c_r = -cos(iangle)*iscale;\n' + 'c_i = -sin(iangle)*iscale;\n' + 'd_r = itranslation_u;\n' + 'd_i = itranslation_v;\n' + 'c_inv_r = c_r/(c_r*c_r+c_i*c_i);\n' + 'c_inv_i = c_i/(c_r*c_r+c_i*c_i);\n' + 'ac_r = (a_r*c_inv_r - a_i*c_inv_i);\n' + 'ac_i = (a_r*c_inv_i - a_i*c_inv_r);\n' + 'bcad_r = (b_r*c_r - b_i*c_i)-(a_r*d_r-a_i*d_i);\n' + 'bcad_i = (b_r*c_i - b_i*c_r)-(a_r*d_i-a_i*d_r);\n' + 'mu_r = bcad_r*c_inv_r - bcad_i*c_inv_i;\n' + 'mu_i = bcad_r*c_inv_i - bcad_i*c_inv_r;\n' + 'q11 = ac_r;\n' + 'q12 = ac_i;\n' + 'q13 = mu_r;\n' + 'q14 = mu_i;\n' + 'q15 = c_r;\n' + 'q16 = c_i;\n' + 'q17 = d_r;\n' + 'q18 = d_i;'),
	'pixel_eqs_str' : ('bamx=sin(time-bass);\n' + 'boom=sin(((bamx%boom)*bass)*time);\n' + 'bom=(rand(0.1*(time-boom)*(time-bamx))*2);\n' + 'speed = sin(((speedA-speedB)*(speedB-speedA)))%speedC;\n' + 'speedA =  sin((bass*3 - speedB )* time);\n' + 'speedB =  sin((mid*3 + speedC ) * time);\n' + 'speedC = sin((treb*3 - speedA ) * time);\n' + 'shox = cos(q3 - q8)*speed;\n' + 'rhox = sin(q5 + speedB)%speed;\n' + 'rox = (shox - rhox)/2;\n' + 'daz=((speed*(time-1))*bass)* 0.5 + 0.5;\n' + 'wec=sin(time-1);\n' + 'weconz=t4-q4;\n' + 'wecrut=(tri*3)-(sin(time-rad));\n' + 'tri= q8;\n' + 'warp = 1.420;\n' + 'q3 = treb*bom;\n' + 'q8 = bass* boom;\n' + 'q5 = mid*rox;\n' + 'q6 = rox%speed;\n' + 'q4 = daz - q4;\n' + 'wec=sin(time-1);\n' + 'weconz=(q4-q2)*wec;\n' + 'wecrut=(tri*3)-(sin(time-rad));\n' + 'tri= q8;\n' + 't1 = wec+x;\n' + 't3 = tri*weconz;\n' + 't6 = wecrut;\n' + 't7 = wec * time;'),
};

return pmap;
});
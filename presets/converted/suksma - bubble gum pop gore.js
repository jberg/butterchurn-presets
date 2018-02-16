define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.7,
		wave_g : 0.0,
		ib_g : 0.5,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 2.85,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.5,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 1.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 2.3,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.5,
		mv_b : 0.47,
		echo_zoom : 2.0,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.4,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 1.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.5,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.955,
		wave_a : 4.1,
		ob_g : 0.5,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.5,
		mv_r : 0.48,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.treb_thresh = 0;
m.q1 = 0;
m.q2 = 0;
m.q4 = 0;
m.bass_flop = 0;
m.treb_flop = 0;
m.old_bass_flop = 0;
m.treb_changed = 0;
m.mid_thresh = 0;
m.old_treb_flop = 0;
m.bass_changed = 0;
m.old_mid_flop = 0;
m.pulse = 0;
m.bass_thresh = 0;
m.mid_changed = 0;
m.mid_flop = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.old_bass_flop = m.bass_flop;
m.old_treb_flop = m.treb_flop;
m.old_mid_flop = m.mid_flop;
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*0.96)+1.3)));
m.bass_flop = Math.abs((m.bass_flop-equal(m.bass_thresh, 2)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.3)*0.96)+1.3)));
m.treb_flop = Math.abs((m.treb_flop-equal(m.treb_thresh, 2)));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_att, m.mid_thresh))*(((m.mid_thresh-1.3)*0.96)+1.3)));
m.mid_flop = Math.abs((m.mid_flop-equal(m.mid_thresh, 2)));
m.bass_changed = bnot(equal(m.old_bass_flop, m.bass_flop));
m.mid_changed = bnot(equal(m.old_mid_flop, m.mid_flop));
m.treb_changed = bnot(equal(m.old_treb_flop, m.treb_flop));
m.pulse = ifcond(above(Math.abs(m.pulse), 5000), -5000, (m.pulse+((m.mid_att*0.1)*bor((bor((m.bass_changed*bnot(m.treb_changed)), (m.treb_changed*bnot(m.bass_changed)))*bnot(m.mid_changed)), m.mid_changed))));
m.wave_b = (ifcond(m.treb_changed, 1, ifcond(m.mid_changed, 0.45, -0.45))*m.q4);
m.wave_g = ifcond(m.bass_changed, 0.1, m.bass_flop);
m.wave_r = ifcond(m.mid_flop, 1, ((0.5*m.q2)*m.treb_flop));
m.ib_b = (m.ib_b+(0.5*Math.sin(m.pulse)));
m.ib_g = (m.ib_g+(5*Math.sin((m.pulse*0.8))));
m.ib_r = (m.ib_r+(5*Math.sin((m.pulse*0.8))));
m.ob_b = m.wave_r;
m.ob_g = m.wave_b;
m.ob_r = m.wave_g;
m.wave_mystery = Math.sin(m.pulse);
m.q1 = m.pulse;
		m.rkeys = ['rot','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = ((m.zoom-(Math.cos((((m.x*10)*Math.sin((m.time+(m.q1*0.9))))-(10*Math.sin((m.time+m.q1)))))*0.1))-(Math.sin(((m.rad*10)*Math.sin((m.time+(m.q1*0.5)))))*0.1));
m.rot = (m.rot+((Math.abs((1-m.zoom))*Math.sin((m.time+m.q1)))*2));
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
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.basstime = 0;
m.axs1 = 0;
m.axs2 = 0;
m.smp = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.xq = 0;
m.ys = 0;
m.xs = 0;
m.t1 = 0;
m.angy = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.basstime = (m.basstime+(m.bass*m.bass));
m.t1 = (m.basstime*0.003);
		return m;
	},
		'point_eqs' : function(m) {
m.smp = (m.sample*6.283);
m.xp = (Math.sin(m.smp)*0.20);
m.yp = (Math.cos(m.smp)*0.20);
m.zp = 0;
m.angy = (Math.sin((((m.sample*6.28)*4)+m.t1))*6.28);
m.xq = ((m.xp*Math.cos(m.angy))-(m.zp*Math.sin(m.angy)));
m.zq = ((m.xp*Math.sin(m.angy))+(m.zp*Math.cos(m.angy)));
m.xp = m.xq;
m.zp = m.zq;
m.angy = (m.t1*0.1);
m.xq = ((m.xp*Math.cos(m.angy))-(m.zp*Math.sin(m.angy)));
m.zq = ((m.xp*Math.sin(m.angy))+(m.zp*Math.cos(m.angy)));
m.xp = m.xq;
m.zp = m.zq;
m.axs1 = (Math.sin((m.t1*0.15))+1.6);
m.yq = ((m.yp*Math.cos(m.axs1))-(m.zp*Math.sin(m.axs1)));
m.zq = ((m.yp*Math.sin(m.axs1))+(m.zp*Math.cos(m.axs1)));
m.yp = m.yq;
m.zp = m.zq;
m.axs2 = (Math.sin((m.t1*0.1))*3.3);
m.xq = ((m.xp*Math.cos(m.axs2))-(m.zp*Math.sin(m.axs2)));
m.zq = ((m.xp*Math.sin(m.axs2))+(m.zp*Math.cos(m.axs2)));
m.xp = m.xq;
m.zp = m.zq;
m.yp = (m.yp*1.2);
m.zp = (m.zp+2.1);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = (m.ys+0.5);
m.r = (1-m.q1);
m.g = (1-m.q2);
m.b = (1-m.q3);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('basstime=basstime+(bass*bass);\n' + 't1=basstime*0.003;'),
		'point_eqs_str' : ('smp=sample*6.283;\n' + 'xp=sin(smp )*0.20;\n' + 'yp=cos(smp )*0.20;\n' + 'zp=0;\n' + 'angy=sin(sample*6.28*4 +t1 )*6.28;\n' + 'xq=xp*cos(angy) - zp*sin(angy);\n' + 'zq=xp*sin(angy) + zp*cos(angy);\n' + 'xp=xq;\n' + 'zp=zq;\n' + 'angy=t1*0.1;\n' + 'xq=xp*cos(angy) - zp*sin(angy);\n' + 'zq=xp*sin(angy) + zp*cos(angy);\n' + 'xp=xq;\n' + 'zp=zq;\n' + 'axs1 = sin(t1*0.15) + 1.6;\n' + 'yq= yp*cos(axs1) - zp*sin(axs1);\n' + 'zq= yp*sin(axs1) + zp*cos(axs1);\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'axs2 = sin(t1*0.1)*3.3;\n' + 'xq=xp*cos(axs2) - zp*sin(axs2);\n' + 'zq=xp*sin(axs2) + zp*cos(axs2);\n' + 'xp=xq;\n' + 'zp=zq;\n' + 'yp=yp*1.2;\n' + 'zp=zp+2.1;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys+0.5;\n' + 'r=1-q1;\n' + 'g=1-q2;\n' + 'b=1-q3;'),

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
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.01,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.15493,
			x : 0.5,
			y : 0.7,
			ang : 0.0,
			sides : 23.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.y = ((m.bass_att*0.5)+0.2);
m.x = ((Math.cos((m.time*2))*0.5)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('y=bass_att*0.5+0.2;\n' + 'x=cos(time*2)*0.5+0.5;'),

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
			tex_zoom : 0.55584,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.7914,
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
m.rad = (1.791+(m.bass*0.025));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad=1.791+(bass*0.025);'),

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
			tex_zoom : 0.01,
			additive : 1.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.9,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = ((Math.sin((m.time*5))*0.4)+0.5);
m.y = (m.treb_att*0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = sin(time*5) * .4 + .5;\n' + 'y=treb_att*0.5;'),

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
			tex_zoom : 0.01,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.033,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(m.bass*0.07));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=.5+(bass*0.07);'),

		}
],
	'warp' : (''),
	'comp' : ('shader_body {\n' + '   vec3 bird_1;\n' + '   vec3 base_2;\n' + '   vec3 ret_3;\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_main, uv).xyz;\n' + '  base_2 = tmpvar_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (texsize.zw * 2.0);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv + (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv - (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = (((tmpvar_6.xyz * scale1) + bias1) - ((tmpvar_8.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (uv + (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (uv - (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_13 = texture2D (sampler_blur1, P_14);\n' + '   vec3 tmpvar_15;\n' + '  tmpvar_15 = (((tmpvar_11.xyz * scale1) + bias1) - ((tmpvar_13.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.x = tmpvar_10.y;\n' + '  tmpvar_16.y = tmpvar_15.y;\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17 = (uv + (tmpvar_16 * 0.05));\n' + '   vec2 x_18;\n' + '  x_18 = (tmpvar_17 - uv);\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = tmpvar_10.y;\n' + '  tmpvar_19.y = tmpvar_15.y;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = ((0.5 + (\n' + '    (uv - 0.5)\n' + '   * vec2(-1.0, 1.0))) + (tmpvar_19 * 0.05));\n' + '   vec3 tmpvar_21;\n' + '  tmpvar_21 = vec3(max (texture2D (sampler_main, tmpvar_17).x, texture2D (sampler_main, tmpvar_20).x));\n' + '  bird_1 = tmpvar_21;\n' + '  bird_1 = (pow (bird_1, vec3(1.4, 1.4, 1.4)) * (hue_shader * hue_shader));\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22.x = tmpvar_10.y;\n' + '  tmpvar_22.y = tmpvar_15.y;\n' + '   vec4 tmpvar_23;\n' + '   vec2 P_24;\n' + '  P_24 = (uv + (tmpvar_22 * 0.1));\n' + '  tmpvar_23 = texture2D (sampler_blur1, P_24);\n' + '  ret_3 = (((\n' + '    ((((\n' + '      (((tmpvar_10.y + tmpvar_15.y) * 4.0) + 0.5)\n' + '     * vec3(0.0, 0.0, 1.0)) + (\n' + '      sqrt(dot (x_18, x_18))\n' + '     * vec3(64.0, 96.0, 0.0))) + (vec3(1.0, 0.0, 0.0) * base_2.y)) - vec3(0.0, 0.0, 0.3))\n' + '   * 0.6) * clamp (\n' + '    (1.0 - (bird_1.x * 4.0))\n' + '  , 0.0, 1.0)) + bird_1);\n' + '   vec3 tmpvar_25;\n' + '  tmpvar_25 = mix (ret_3, vec3(1.0, 1.0, 1.0), ((\n' + '    (((tmpvar_23.xyz * scale1) + bias1) * clamp (1.0, 0.0, 1.0))\n' + '  .z * 6.0) * (1.0 - \n' + '    (bird_1 * 3.0)\n' + '  )));\n' + '  ret_3 = tmpvar_25;\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26.w = 1.0;\n' + '  tmpvar_26.xyz = tmpvar_25;\n' + '  vec4 ret4 = tmpvar_26;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'old_bass_flop=bass_flop;\n' + 'old_treb_flop=treb_flop;\n' + 'old_mid_flop=mid_flop;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);\n' + 'bass_flop=abs(bass_flop-equal(bass_thresh,2));\n' + 'treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*0.96+1.3);\n' + 'treb_flop=abs(treb_flop-equal(treb_thresh,2));\n' + 'mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*0.96+1.3);\n' + 'mid_flop=abs(mid_flop-equal(mid_thresh,2));\n' + 'bass_changed=bnot(equal(old_bass_flop,bass_flop));\n' + 'mid_changed=bnot(equal(old_mid_flop,mid_flop));\n' + 'treb_changed=bnot(equal(old_treb_flop,treb_flop));\n' + 'pulse=if(above(abs(pulse),5000),-5000,pulse+mid_att*.1*bor(bor(bass_changed*bnot(treb_changed),treb_changed*bnot(bass_changed))*bnot(mid_changed),mid_changed));\n' + 'wave_b=if(treb_changed,1,if(mid_changed,.45,-.45))*q4;\n' + 'wave_g=if(bass_changed,.1,bass_flop);\n' + 'wave_r=if(mid_flop,1,.5*q2*treb_flop);\n' + 'ib_b=ib_b+.5*sin(pulse);\n' + 'ib_g=ib_g+5*sin(pulse*.8);\n' + 'ib_r=ib_r+5*sin(pulse*.8);\n' + 'ob_b=wave_r;\n' + 'ob_g=wave_b;\n' + 'ob_r=wave_g;\n' + 'wave_mystery=sin(pulse);\n' + 'q1=pulse;'),
	'pixel_eqs_str' : ('zoom=zoom-cos(x*10*sin(time+q1*.9)-10*sin(time+q1))*.1-sin(rad*10*sin(time+q1*.5))*.1;\n' + 'rot=rot+abs(1-zoom)*sin(time+q1)*2;'),
};

return pmap;
});
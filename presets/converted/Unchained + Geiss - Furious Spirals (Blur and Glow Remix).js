define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.5,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.591,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 1.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0017,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.1,
		wave_r : 0.5,
		ib_r : 0.5,
		mv_b : 1.0,
		echo_zoom : 1.006,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.18,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9703,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.44,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.75,
		wave_mystery : 0.24,
		decay : 0.987,
		wave_a : 1.028,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.5,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.95,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.treb_thresh = 0;
m.q1 = 0;
m.chaos = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.bass_residual = 0;
m.bass_flop = 0;
m.treb_residual = 0;
m.treb_flop = 0;
m.old_bass_flop = 0;
m.treb_changed = 0;
m.entropy = 0;
m.mid_thresh = 0;
m.old_treb_flop = 0;
m.bass_changed = 0;
m.old_mid_flop = 0;
m.pulse = 0;
m.bass_thresh = 0;
m.mid_residual = 0;
m.mid_changed = 0;
m.mid_flop = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.old_bass_flop = m.bass_flop;
m.old_treb_flop = m.treb_flop;
m.old_mid_flop = m.mid_flop;
m.chaos = (0.9+(0.1*Math.sin(m.pulse)));
m.entropy = ifcond(bnot(m.entropy), 2, ifcond(equal(m.pulse, -20), (1+rand(3)), m.entropy));
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*m.chaos)+1.3)));
m.bass_flop = Math.abs((m.bass_flop-equal(m.bass_thresh, 2)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.3)*m.chaos)+1.3)));
m.treb_flop = Math.abs((m.treb_flop-equal(m.treb_thresh, 2)));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_att, m.mid_thresh))*(((m.mid_thresh-1.3)*m.chaos)+1.3)));
m.mid_flop = Math.abs((m.mid_flop-equal(m.mid_thresh, 2)));
m.bass_changed = bnot(equal(m.old_bass_flop, m.bass_flop));
m.mid_changed = bnot(equal(m.old_mid_flop, m.mid_flop));
m.treb_changed = bnot(equal(m.old_treb_flop, m.treb_flop));
m.bass_residual = ((m.bass_changed*Math.sin((m.time*(3-m.bass_thresh))))+(bnot(m.bass_changed)*m.bass_residual));
m.treb_residual = ((m.treb_changed*Math.sin((m.time*(3-m.treb_thresh))))+(bnot(m.treb_changed)*m.treb_residual));
m.mid_residual = ((m.mid_changed*Math.sin((m.time*(3-m.mid_thresh))))+(bnot(m.mid_changed)*m.mid_residual));
m.pulse = ifcond(above(Math.abs(m.pulse), 20), -20, ((m.pulse+((0.04*m.entropy)*bor((bor((m.bass_changed*bnot(m.treb_changed)), (m.treb_changed*bnot(m.bass_changed)))*bnot(m.mid_changed)), m.mid_changed)))+(((m.mid+m.bass)+m.treb)*0.025)));
m.q1 = m.mid_residual;
m.q2 = m.bass_residual;
m.q3 = m.treb_residual;
m.q4 = Math.sin(m.pulse);
m.q5 = Math.cos(m.pulse);
m.wave_r = (m.wave_r+(0.5*m.bass_residual));
m.wave_r = (m.wave_g+(0.5*m.mid_residual));
m.wave_r = (m.wave_b+(0.5*m.treb_residual));
m.wave_mystery = (m.wave_mystery+(0.23*m.mid_residual));
m.ob_r = ifcond(m.bass_flop, m.treb_flop, m.wave_r);
m.ob_b = ifcond(m.treb_flop, m.mid_flop, m.wave_b);
m.ob_g = ifcond(m.mid_flop, m.bass_flop, m.wave_g);
m.ob_a = (0.03+(0.02*m.wave_r));
m.ob_size = (0.05+(0.04*m.wave_b));
m.ib_r = ifcond(m.bass_flop, m.ob_b, m.ob_g);
m.ib_b = ifcond(m.treb_flop, m.ob_g, m.ob_r);
m.ib_g = ifcond(m.mid_flop, m.ob_r, m.ob_b);
m.ib_a = (0.03+(0.02*m.wave_g));
m.ib_size = (0.05+(0.04*m.ob_g));
m.zoom = (m.zoom+(0.08*m.mid_residual));
		m.rkeys = ['cy','cx','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.rot = ifcond(above(m.q1, 0), (0.4*Math.sin(((m.rad+m.q3)+m.q4))), (0.4*Math.sin(((m.rad+m.q2)+m.q5))));
m.zoom = (m.zoom-div(m.rot,10));
m.cx = (m.cx+(0.3*Math.sin(((m.x*7)*m.q4))));
m.cy = (m.cy+(0.3*Math.cos(((m.y*5)*m.q5))));
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
	'warp' : ('shader_body {\n' + '   vec2 v_1;\n' + '   vec3 ret_2;\n' + '  v_1 = (normalize((uv - 0.5)) * texsize.zw);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv - (v_1 * 2.5));\n' + '  tmpvar_4 = texture2D (sampler_main, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (v_1 * 5.5));\n' + '  tmpvar_6 = texture2D (sampler_main, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv - (v_1 * 9.0));\n' + '  tmpvar_8 = texture2D (sampler_main, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (v_1 * 13.0));\n' + '  tmpvar_10 = texture2D (sampler_main, P_11);\n' + '  ret_2 = (0.2 * ((tmpvar_3.xyz + tmpvar_4.xyz) + (\n' + '    (tmpvar_6.xyz + tmpvar_8.xyz)\n' + '   + tmpvar_10.xyz)));\n' + '  ret_2 = (ret_2 * 0.98);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12.w = 1.0;\n' + '  tmpvar_12.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_12;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '  uv_1 = (((uv - 0.5) * 0.86) + 0.5);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv_1);\n' + '  ret_2 = tmpvar_3.xyz;\n' + '  ret_2 = ((ret_2 * 1.5) - 0.1);\n' + '  ret_2.y = (ret_2 * 0.7).y;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv_1);\n' + '  ret_2.x = (((tmpvar_4.xyz * scale1) + bias1).x - 0.03);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_blur2, uv_1);\n' + '  ret_2.z = (((\n' + '    (tmpvar_5.xyz * scale2)\n' + '   + bias2).z * 1.5) - 0.05);\n' + '  ret_2 = (ret_2 * 2.3);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'old_bass_flop=bass_flop;\n' + 'old_treb_flop=treb_flop;\n' + 'old_mid_flop=mid_flop;\n' + 'chaos=.9+.1*sin(pulse);\n' + 'entropy=if(bnot(entropy),2,if(equal(pulse,-20),1+rand(3),entropy));\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);\n' + 'bass_flop=abs(bass_flop-equal(bass_thresh,2));\n' + 'treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);\n' + 'treb_flop=abs(treb_flop-equal(treb_thresh,2));\n' + 'mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);\n' + 'mid_flop=abs(mid_flop-equal(mid_thresh,2));\n' + 'bass_changed=bnot(equal(old_bass_flop,bass_flop));\n' + 'mid_changed=bnot(equal(old_mid_flop,mid_flop));\n' + 'treb_changed=bnot(equal(old_treb_flop,treb_flop));\n' + 'bass_residual = bass_changed*sin(time*(3-bass_thresh)) + bnot(bass_changed)*bass_residual;\n' + 'treb_residual = treb_changed*sin(time*(3-treb_thresh)) + bnot(treb_changed)*treb_residual;\n' + 'mid_residual = mid_changed*sin(time*(3-mid_thresh)) + bnot(mid_changed)*mid_residual;\n' + 'pulse=if(above(abs(pulse),20),-20,pulse+.04*entropy*bor(bor(bass_changed*bnot(treb_changed),treb_changed*bnot(bass_changed))*bnot(mid_changed),mid_changed)+(mid+bass+treb)*.025);\n' + 'q1=mid_residual;\n' + 'q2=bass_residual;\n' + 'q3=treb_residual;\n' + 'q4=sin(pulse);\n' + 'q5=cos(pulse);\n' + 'wave_r=wave_r+.5*bass_residual;\n' + 'wave_r=wave_g+.5*mid_residual;\n' + 'wave_r=wave_b+.5*treb_residual;\n' + 'wave_mystery=wave_mystery+.23*mid_residual;\n' + 'ob_r=if(bass_flop,treb_flop,wave_r);\n' + 'ob_b=if(treb_flop,mid_flop,wave_b);\n' + 'ob_g=if(mid_flop,bass_flop,wave_g);\n' + 'ob_a=.03+.02*wave_r;\n' + 'ob_size=.05+.04*wave_b;\n' + 'ib_r=if(bass_flop,ob_b,ob_g);\n' + 'ib_b=if(treb_flop,ob_g,ob_r);\n' + 'ib_g=if(mid_flop,ob_r,ob_b);\n' + 'ib_a=.03+.02*wave_g;\n' + 'ib_size=.05+.04*ob_g;\n' + 'zoom=zoom+.08*mid_residual;'),
	'pixel_eqs_str' : ('rot=if(above(q1,0),.4*sin(rad+q3+q4),.4*sin(rad+q2+q5));\n' + 'zoom=zoom-rot/10;\n' + 'cx=cx+.3*sin(x*7*q4);\n' + 'cy=cy+.3*cos(y*5*q5);'),
};

return pmap;
});
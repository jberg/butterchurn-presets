define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 0.6,
		ib_g : 0.5,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.948,
		echo_alpha : 0.5,
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
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 0.99817,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.2,
		wave_r : 0.6,
		ib_r : 0.5,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.47,
		zoom : 0.98001,
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
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.982,
		wave_a : 0.216,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.6,
		ib_b : 0.5,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.treb_thresh = 0;
m.q1 = 0;
m.chaos = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.bass_flop = 0;
m.g1 = 0;
m.g2 = 0;
m.treb_flop = 0;
m.g3 = 0;
m.funk = 0;
m.old_bass_flop = 0;
m.treb_changed = 0;
m.entropy = 0;
m.mid_thresh = 0;
m.old_treb_flop = 0;
m.bass_changed = 0;
m.r_shift = 0;
m.old_mid_flop = 0;
m.pulse = 0;
m.x_shift = 0;
m.y_shift = 0;
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
m.chaos = (0.9+(0.1*Math.sin(m.pulse)));
m.entropy = ifcond(bnot(m.entropy), 2, ifcond(equal(m.pulse, -20), (1+Math.floor(rand(6))), m.entropy));
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*m.chaos)+1.3)));
m.bass_flop = Math.abs((m.bass_flop-equal(m.bass_thresh, 2)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.3)*m.chaos)+1.3)));
m.treb_flop = Math.abs((m.treb_flop-equal(m.treb_thresh, 2)));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_att, m.mid_thresh))*(((m.mid_thresh-1.3)*m.chaos)+1.3)));
m.mid_flop = Math.abs((m.mid_flop-equal(m.mid_thresh, 2)));
m.bass_changed = bnot(equal(m.old_bass_flop, m.bass_flop));
m.mid_changed = bnot(equal(m.old_mid_flop, m.mid_flop));
m.treb_changed = bnot(equal(m.old_treb_flop, m.treb_flop));
m.pulse = ifcond(above(Math.abs(m.pulse), 20), -20, ((m.pulse+((0.01*m.chaos)*bor(bor(m.bass_changed, m.treb_changed), m.mid_changed)))+(((m.mid+m.bass)+m.treb)*0.025)));
m.q3 = Math.sin(m.pulse);
m.q2 = ((div(m.pulse,m.entropy)*0.5)*m.chaos);
m.q4 = Math.sin(m.q2);
m.q5 = m.entropy;
m.q1 = ((((1+(1*above(m.q4, 0)))*(1+(2*above(m.q3, 0))))*(1+((4*m.mid_changed)*above(m.q3, 0))))*(1+(6*above(m.pulse, 0))));
m.wave_r = ifcond(m.treb_flop, Math.abs((0.5*m.q4)), ifcond(m.bass_flop, (0.5+(0.5*m.q4)), 1));
m.wave_g = ifcond(m.treb_changed, 0, ifcond(m.mid_changed, 0, 0.49));
m.wave_b = ifcond(m.treb_flop, (0.8+(0.2*m.q4)), (m.bass_changed*m.mid_changed));
m.cx = (0.5+(0.2*m.q3));
m.cy = (0.5+(0.2*m.q4));
m.wave_x = (0.5+((0.2*m.q4)*bnot(mod(m.q1,7))));
m.wave_y = (((0.5+ifcond(bnot(mod(m.q1,2)), (0.2*m.q3), 0))+(0.1*bnot(mod(m.q1,3))))-(0.1*bnot(mod(m.q1,5))));
m.ob_r = ifcond(m.bass_flop, m.treb_flop, m.wave_g);
m.ob_b = ifcond(m.treb_flop, (0.5+(0.5*m.q3)), m.wave_b);
m.ob_g = ifcond(m.mid_flop, m.wave_r, m.wave_b);
m.ob_a = (0.07+(0.05*m.q3));
m.ob_size = ((0.01*m.entropy)*bnot(mod(m.q1,6)));
m.ib_r = ((m.ib_r+(0.4*bnot(mod(m.q1,10))))-(0.4*bnot(mod(m.q1,30))));
m.ib_b = ((m.ib_b+(0.4*bnot(mod(m.q1,42))))-(0.4*bnot(mod(m.q1,21))));
m.ib_g = (m.ib_g+(0.5*Math.sin(((m.time*0.02)*m.entropy))));
m.ib_a = (0.07+((0.05*m.q3)*m.q4));
m.ib_size = (0.01+(0.009*m.q3));
m.zoom = ((m.zoom+(0.03*bnot(mod(m.q1,3))))-(0.03*bnot(mod(m.q1,35))));
		m.rkeys = ['zoom','dx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.g1 = Math.sin((m.q2*0.1));
m.g2 = Math.sin((m.q2*0.2));
m.g3 = Math.sin((m.q2*0.3));
m.x_shift = ifcond(bnot(mod(m.q1,3)), ((pow(m.x, 2)+((m.x*m.g1)*2))+sqr(m.g3)), (m.g2*3));
m.y_shift = ifcond(bnot(mod(m.q1,5)), ((pow(m.y, 2)+((m.y*m.g2)*2))+sqr(m.g1)), (m.g3*3));
m.r_shift = ifcond(bnot(mod(m.q1,7)), ((pow(m.rad, 2)+((m.rad*m.g3)*2))+sqr((m.g2*3))), m.g1);
m.funk = ((m.x_shift+m.y_shift)+m.r_shift);
m.zoom = (m.zoom+((Math.cos(m.funk)*0.05)*m.q5));
m.rot = ifcond(bnot(mod(m.q1,14)), (m.g2*m.rad), (m.q3*0.1));
m.dx = (m.dx+(((0.33*(4-m.q5))*bnot(mod(m.q1,70)))*m.g1));
m.cx = (m.cy+(((0.33*(4-m.q5))*bnot(mod(m.q1,105)))*m.g2));
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
	'warp' : ('shader_body {\n' + '   vec3 blurry_color_1;\n' + '   vec2 uv2_2;\n' + '   vec3 ret_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + texsize.zw);\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, P_4).xyz;\n' + '  blurry_color_1 = tmpvar_5;\n' + '  uv2_2 = (uv + ((blurry_color_1.xy - 0.37) * 0.03));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv2_2);\n' + '  ret_3 = tmpvar_6.xyz;\n' + '  ret_3 = (ret_3 - 0.004);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '  uv_1 = (0.05 + (0.9 * uv));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv_1);\n' + '  ret_2 = tmpvar_3.xyz;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv_1);\n' + '  ret_2 = (abs((\n' + '    ((tmpvar_4.xyz * scale1) + bias1)\n' + '   - ret_2)) * 6.0);\n' + '  ret_2 = (ret_2 * 1.333);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'old_bass_flop=bass_flop;\n' + 'old_treb_flop=treb_flop;\n' + 'old_mid_flop=mid_flop;\n' + 'chaos=.9+.1*sin(pulse);\n' + 'entropy=if(bnot(entropy),2,if(equal(pulse,-20),1+int(rand(6)),entropy));\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);\n' + 'bass_flop=abs(bass_flop-equal(bass_thresh,2));\n' + 'treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);\n' + 'treb_flop=abs(treb_flop-equal(treb_thresh,2));\n' + 'mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);\n' + 'mid_flop=abs(mid_flop-equal(mid_thresh,2));\n' + 'bass_changed=bnot(equal(old_bass_flop,bass_flop));\n' + 'mid_changed=bnot(equal(old_mid_flop,mid_flop));\n' + 'treb_changed=bnot(equal(old_treb_flop,treb_flop));\n' + 'pulse=if(above(abs(pulse),20),-20,pulse+.01*chaos*bor(bor(bass_changed,treb_changed),mid_changed)+(mid+bass+treb)*.025);\n' + 'q3=sin(pulse);\n' + 'q2=(pulse/entropy)*.5*chaos;\n' + 'q4=sin(q2);\n' + 'q5=entropy;\n' + 'q1=(1+1*above(q4,0))*(1+2*above(q3,0))*(1+4*mid_changed*above(q3,0))*(1+6*above(pulse,0));\n' + 'wave_r=if(treb_flop,abs(.5*q4),if(bass_flop,.5+.5*q4,1));\n' + 'wave_g=if(treb_changed,0,if(mid_changed,0,.49));\n' + 'wave_b=if(treb_flop,.8+.2*q4,bass_changed*mid_changed);\n' + 'cx=.5+.2*q3;\n' + 'cy=.5+.2*q4;\n' + 'wave_x=.5+.2*q4*bnot(q1%7);\n' + 'wave_y=.5+if(bnot(q1%2),.2*q3,0)+.1*bnot(q1%3)-.1*bnot(q1%5);\n' + 'ob_r=if(bass_flop,treb_flop,wave_g);\n' + 'ob_b=if(treb_flop,.5+.5*q3,wave_b);\n' + 'ob_g=if(mid_flop,wave_r,wave_b);\n' + 'ob_a=.07+.05*q3;\n' + 'ob_size=.01*entropy*bnot(q1%6);\n' + 'ib_r=ib_r+.4*bnot(q1%10)-.4*bnot(q1%30);\n' + 'ib_b=ib_b+.4*bnot(q1%42)-.4*bnot(q1%21);\n' + 'ib_g=ib_g+.5*sin(time*.02*entropy);\n' + 'ib_a=.07+.05*q3*q4;\n' + 'ib_size=.01+.009*q3;\n' + 'zoom=zoom+.03*bnot(q1%3)-.03*bnot(q1%35);'),
	'pixel_eqs_str' : ('g1=sin(q2*.1);\n' + 'g2=sin(q2*.2);\n' + 'g3=sin(q2*.3);\n' + 'x_shift=if(bnot(q1%3),(pow(x,2)+x*g1*2+sqr(g3)),g2*3);\n' + 'y_shift=if(bnot(q1%5),(pow(y,2)+y*g2*2+sqr(g1)),g3*3);\n' + 'r_shift=if(bnot(q1%7),(pow(rad,2)+rad*g3*2+sqr(g2*3)),g1);\n' + 'funk=x_shift+y_shift+r_shift;\n' + 'zoom=zoom+cos(funk)*.05*q5;\n' + 'rot=if(bnot(q1%14),g2*rad,q3*.1);\n' + 'dx=dx+.33*(4-q5)*bnot(q1%70)*g1;\n' + 'cx=cy+.33*(4-q5)*bnot(q1%105)*g2;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 8.0,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 10.88,
		warpscale : 11.001,
		brighten : 0.0,
		mv_y : 11.52,
		wave_scale : 0.826,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 1.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.38615,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 1.03,
		ob_size : 0.0,
		b1ed : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 49.922,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.25486,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.05,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.2,
		decay : 0.95,
		wave_a : 6.82,
		ob_g : 1.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 0.0,
		rating : 0.0,
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
m.greenif = 0;
m.chaos = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.bass_residual = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.bluesine = 0;
m.bass_flop = 0;
m.treb_residual = 0;
m.treb_flop = 0;
m.redif = 0;
m.old_bass_flop = 0;
m.greensine = 0;
m.treb_changed = 0;
m.entropy = 0;
m.mid_thresh = 0;
m.old_treb_flop = 0;
m.bass_changed = 0;
m.old_mid_flop = 0;
m.blueif = 0;
m.pulse = 0;
m.bass_thresh = 0;
m.mid_residual = 0;
m.mid_changed = 0;
m.mid_flop = 0;
m.redsine = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.old_bass_flop = m.bass_flop;
m.old_treb_flop = m.treb_flop;
m.old_mid_flop = m.mid_flop;
m.chaos = (0.9+(0.1*Math.sin(m.pulse)));
m.entropy = ifcond(equal(m.pulse, -20), ((((1+m.bass_flop)+m.treb_flop)+m.mid_flop)+rand(2)), m.entropy);
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.3)*m.chaos)+1.3)));
m.bass_flop = Math.abs((m.bass_flop-equal(m.bass_thresh, 2)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.3)*m.chaos)+1.3)));
m.treb_flop = Math.abs((m.treb_flop-equal(m.treb_thresh, 2)));
m.mid_thresh = ((above(m.mid_att, m.mid_thresh)*2)+((1-above(m.mid_att, m.mid_thresh))*(((m.mid_thresh-1.3)*m.chaos)+1.3)));
m.mid_flop = Math.abs((m.mid_flop-equal(m.mid_thresh, 2)));
m.bass_changed = bnot(equal(m.old_bass_flop, m.bass_flop));
m.mid_changed = bnot(equal(m.old_mid_flop, m.mid_flop));
m.treb_changed = bnot(equal(m.old_treb_flop, m.treb_flop));
m.bass_residual = ((m.bass_changed*Math.sin(((m.pulse*0.1)*m.entropy)))+(bnot(m.bass_changed)*m.bass_residual));
m.treb_residual = ((m.treb_changed*Math.sin(((m.pulse*0.1)*m.entropy)))+(bnot(m.treb_changed)*m.treb_residual));
m.mid_residual = ((m.mid_changed*Math.sin(((m.pulse*0.1)*m.entropy)))+(bnot(m.mid_changed)*m.mid_residual));
m.pulse = ifcond(above(Math.abs(m.pulse), 20), -20, (m.pulse+(((m.bass_thresh+m.mid_thresh)+m.treb_thresh)*0.032)));
m.rot = (0.02*Math.cos((((m.pulse*0.05)+(m.time*0.05))+(m.entropy*m.chaos))));
m.q1 = m.mid_residual;
m.q2 = m.bass_residual;
m.q3 = m.treb_residual;
m.q4 = Math.sin(m.pulse);
m.q5 = Math.cos((div(m.pulse,2)+m.q1));
m.q6 = Math.sin(((m.q3*m.q1)+(m.q7*m.q2)));
m.q7 = (((((above(m.q1, 0)+above(m.q2, 0))+above(m.q3, 0))+(above(m.q3, 0)*m.treb_flop))+(above(m.q2, 0)*m.bass_flop))+(above(m.q1, 0)*m.mid_flop));
m.q8 = m.entropy;
m.redsine = (0.5+((0.15*m.bass)*Math.sin((m.time*3))));
m.greensine = (0.5+((0.15*m.mid)*Math.sin((m.time*2))));
m.bluesine = (0.5+((0.15*m.treb)*Math.sin(m.time)));
m.redif = ifcond(above(m.bass, 1.2), m.redsine, ifcond(above(m.redif, 0.95), 0.0, (m.redif*0.95)));
m.greenif = ifcond(above(m.mid, 1.2), m.greensine, ifcond(above(m.greenif, 0.95), 0.0, (m.greenif*0.95)));
m.blueif = ifcond(above(m.treb, 1.2), m.bluesine, ifcond(above(m.blueif, 0.95), 0.0, (m.blueif*0.95)));
m.wave_r = m.redif;
m.wave_g = m.greenif;
m.wave_b = m.blueif;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = ((1.0+(0.05*above(m.rad, 0.15)))+(1*Math.abs((((m.q4*0.2)*m.rad)+(m.rad*Math.sin(m.q1))))));
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
			samples : 92.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.vol = 0;
m.t1 = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (rand(10000)*0.0001);
m.y = (rand(10000)*0.0001);
m.vol = div(((m.bass+m.mid)+m.treb),3);
m.a = m.vol;
m.r = (m.bass*0.62);
m.g = (m.mid*0.58);
m.b = (m.treb*0.6);
		return m;
	},
		'init_eqs_str' : ('t1 = 1;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=rand(10000)*(.0001);\n' + 'y=rand(10000)*(.0001);\n' + 'vol=(bass+mid+treb)/3;\n' + 'a=vol;\n' + 'r=bass*.62;\n' + 'g=mid*.58;\n' + 'b=treb*.6;'),

		},
		{
		'baseVals' : {
			a : 0.02,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 3.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {

m.t1 = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : ('t1 = 1;'),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 0.3,
			enabled : 0.0,
			b : 0.25,
			g : 0.5,
			scaling : 0.48454,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.3,
			smoothing : 1.0,
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
m.r = (m.bass*0.75);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('r=bass*.75;'),

		},
		{
		'baseVals' : {
			a : 0.2,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
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
			r2 : 0.84,
			a : 0.0,
			enabled : 0.0,
			b : 0.89,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.94,
			textured : 1.0,
			g2 : 0.93,
			tex_zoom : 3.16787,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.7,
			rad : 0.29462,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 45.0,
			border_r : 0.55,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.greenif = 0;
m.bluesine = 0;
m.redif = 0;
m.greensine = 0;
m.blueif = 0;
m.redsine = 0;

			m.rkeys = ['greenif','redif','blueif'];
			return m;
		},
		'frame_eqs' : function(m) {
m.redsine = (0.55+((0.1*m.bass)*Math.sin((m.time*3))));
m.greensine = (0.7+((0.1*m.mid)*Math.sin((m.time*2))));
m.bluesine = (0.7+((0.1*m.treb)*Math.sin(m.time)));
m.redif = ifcond(above(m.bass, 1.2), m.redsine, ifcond(above(m.redif, 0.95), 0, (m.redif*0.95)));
m.greenif = ifcond(above(m.mid, 1.2), m.greensine, ifcond(above(m.greenif, 0.95), 0, (m.greenif*0.95)));
m.blueif = ifcond(above(m.treb, 1.2), m.bluesine, ifcond(above(m.blueif, 0.95), 0, (m.blueif*0.95)));
m.border_r = m.redif;
m.border_g = m.greenif;
m.border_b = m.blueif;
m.border_a = (1-(0.45*(m.bass+m.mid)));
m.a = (0.0155*(m.bass+m.mid));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('redsine=.55+.1*bass*sin(time*3);\n' + 'greensine=.7+.1*mid*sin(time*2);\n' + 'bluesine=.7+.1*treb*sin(time);\n' + 'redif=if(above(bass,1.2),redsine,if(above(redif,.95),0,redif*.95));\n' + 'greenif=if(above(mid,1.2),greensine,if(above(greenif,.95),0,greenif*.95));\n' + 'blueif=if(above(treb,1.2),bluesine,if(above(blueif,.95),0,blueif*.95));\n' + 'border_r=redif;\n' + 'border_g=greenif;\n' + 'border_b=blueif;\n' + 'border_a=1-(.45*(bass+mid));\n' + 'a=(.0155*(bass+mid));'),

		},
		{
		'baseVals' : {
			r2 : 0.5,
			a : 0.05,
			enabled : 0.0,
			b : 0.3,
			tex_ang : 1.88496,
			thickoutline : 0.0,
			g : 0.3,
			textured : 1.0,
			g2 : 0.5,
			tex_zoom : 3.3064,
			additive : 0.0,
			border_a : 0.2,
			border_b : 0.5,
			b2 : 0.5,
			a2 : 0.55,
			r : 0.3,
			border_g : 0.5,
			rad : 0.81621,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 50.0,
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
			rad : 0.27319,
			x : 0.123,
			y : 0.0,
			ang : 0.0,
			sides : 3.0,
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
			sides : 3.0,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (ret_1 * 0.98);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur2, uv);\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = ((tmpvar_3.xyz * scale2) + bias2).x;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (tmpvar_4 * ret_1).xy;\n' + '  ret_1 = (ret_1 * 2.4);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (tmpvar_4 + tmpvar_5);\n' + '  tmpvar_6 = texture2D (sampler_main, P_7);\n' + '  ret_1 = (ret_1 * tmpvar_6.xyz);\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8.w = 1.0;\n' + '  tmpvar_8.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_8;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('old_bass_flop=bass_flop;\n' + 'old_treb_flop=treb_flop;\n' + 'old_mid_flop=mid_flop;\n' + 'chaos=.9+.1*sin(pulse);\n' + 'entropy=if(equal(pulse,-20),1+bass_flop+treb_flop+mid_flop+rand(2),entropy);\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);\n' + 'bass_flop=abs(bass_flop-equal(bass_thresh,2));\n' + 'treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);\n' + 'treb_flop=abs(treb_flop-equal(treb_thresh,2));\n' + 'mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);\n' + 'mid_flop=abs(mid_flop-equal(mid_thresh,2));\n' + 'bass_changed=bnot(equal(old_bass_flop,bass_flop));\n' + 'mid_changed=bnot(equal(old_mid_flop,mid_flop));\n' + 'treb_changed=bnot(equal(old_treb_flop,treb_flop));\n' + 'bass_residual = bass_changed*sin(pulse*.1*entropy) + bnot(bass_changed)*bass_residual;\n' + 'treb_residual = treb_changed*sin(pulse*.1*entropy) + bnot(treb_changed)*treb_residual;\n' + 'mid_residual = mid_changed*sin(pulse*.1*entropy) + bnot(mid_changed)*mid_residual;\n' + 'pulse=if(above(abs(pulse),20),-20,pulse+(bass_thresh+mid_thresh+treb_thresh)*.032);\n' + 'rot=.02*cos((pulse*.05+time*.05)+entropy*chaos);\n' + 'q1=mid_residual;\n' + 'q2=bass_residual;\n' + 'q3=treb_residual;\n' + 'q4=sin(pulse);\n' + 'q5=cos(pulse/2+q1);\n' + 'q6=sin(q3*q1+q7*q2);\n' + 'q7=above(q1,0)+above(q2,0)+above(q3,0)+above(q3,0)*treb_flop+above(q2,0)*bass_flop+above(q1,0)*mid_flop;\n' + 'q8=entropy;\n' + 'redsine=.5+.15*bass*sin(time*3);\n' + 'greensine=.5+.15*mid*sin(time*2);\n' + 'bluesine=.5+.15*treb*sin(time);\n' + 'redif=if(above(bass,1.2),redsine,if(above(redif,.95),.0,redif*.95));\n' + 'greenif=if(above(mid,1.2),greensine,if(above(greenif,.95),.0,greenif*.95));\n' + 'blueif=if(above(treb,1.2),bluesine,if(above(blueif,.95),.0,blueif*.95));\n' + 'wave_r=redif;\n' + 'wave_g=greenif;\n' + 'wave_b=blueif;'),
	'pixel_eqs_str' : ('zoom =1.0+.05*above(rad,.15)+1*abs(q4*.2*rad+rad*sin(q1));'),
};

return pmap;
});
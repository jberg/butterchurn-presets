define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.42,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 1.248,
		wave_scale : 2.155,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.015,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 1.007,
		ob_size : 0.01,
		b1ed : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0095,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.5,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : -1.0,
		decay : 1.0,
		wave_a : 0.998,
		ob_g : 0.0,
		ib_a : 0.5,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.treb_thresh = 0;
m.q1 = 0;
m.greenif = 0;
m.chaos = 0;
m.q2 = 0;
m.b = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.bass_residual = 0;
m.q6 = 0;
m.q7 = 0;
m.g = 0;
m.q8 = 0;
m.bluesine = 0;
m.bass_flop = 0;
m.q9 = 0;
m.treb_residual = 0;
m.treb_flop = 0;
m.redif = 0;
m.old_bass_flop = 0;
m.greensine = 0;
m.treb_changed = 0;
m.q10 = 0;
m.entropy = 0;
m.q11 = 0;
m.r = 0;
m.vol = 0;
m.mid_thresh = 0;
m.old_treb_flop = 0;
m.bass_changed = 0;
m.old_mid_flop = 0;
m.blueif = 0;
m.pulse = 0;
m.bass_thresh = 0;
m.mid_residual = 0;
m.yv = 0;
m.mid_changed = 0;
m.mid_flop = 0;
m.redsine = 0;
m.xv = 0;

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
m.q1 = m.mid_residual;
m.q2 = m.bass_residual;
m.q3 = m.treb_residual;
m.q4 = Math.sin(m.pulse);
m.q5 = Math.cos((div(m.pulse,2)+m.q1));
m.q6 = Math.sin(((m.q3*m.q1)+(m.q7*m.q2)));
m.q7 = (((((above(m.q1, 0)+above(m.q2, 0))+above(m.q3, 0))+(above(m.q3, 0)*m.treb_flop))+(above(m.q2, 0)*m.bass_flop))+(above(m.q1, 0)*m.mid_flop));
m.q8 = m.entropy;
m.vol = (((m.bass+m.mid)+m.treb_att)*0.3333);
m.redsine = (0.5+((0.15*m.bass)*Math.sin((m.time*3))));
m.greensine = (0.5+((0.15*m.mid)*Math.sin((m.time*2))));
m.bluesine = (0.5+((0.15*m.treb)*Math.sin(m.time)));
m.redif = ifcond(above(m.bass, 1.2), m.redsine, ifcond(above(m.redif, 0.95), 0.0, (m.redif*0.95)));
m.greenif = ifcond(above(m.mid, 1.2), m.greensine, ifcond(above(m.greenif, 0.95), 0.0, (m.greenif*0.95)));
m.blueif = ifcond(above(m.treb, 1.2), m.bluesine, ifcond(above(m.blueif, 0.95), 0.0, (m.blueif*0.95)));
m.r = m.redif;
m.g = m.greenif;
m.b = m.blueif;
m.q9 = m.r;
m.q10 = m.g;
m.q11 = m.b;
m.wave_r = (m.wave_r*Math.sin((m.redif*Math.cos((m.b+m.g)))));
m.wave_g = (m.wave_g*Math.sin((m.greenif*Math.cos((m.r+m.b)))));
m.wave_b = (m.wave_b*Math.sin((m.blueif*Math.cos((m.r+m.g)))));
m.ib_r = m.r;
m.ib_g = m.g;
m.ib_b = m.b;
m.ob_r = (m.wave_r*m.redif);
m.ob_g = (m.wave_g*m.greenif);
m.ob_b = (m.wave_b*m.blueif);
		m.rkeys = ['dy','dx','sy','sx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.xv = ((Math.sin((m.time*0.333))*m.x)-(Math.cos((m.time*0.667))*m.x));
m.yv = ((Math.cos((m.time*0.233))*m.y)+(Math.sin((m.time*0.567))*m.y));
m.x = m.xv;
m.y = m.yv;
m.sx = (m.sx+(0.075*Math.sin(((m.x*3)+(m.q7*m.x)))));
m.sy = (m.sy+(0.075*Math.sin(((m.y*3.1)+(m.q7*m.y)))));
m.dx = (m.dx+(0.005*Math.cos((((m.y*20)+(0.1*Math.cos((m.time*0.11))))+(m.q2*m.q6)))));
m.dy = (m.dy+(0.005*Math.sin((((m.x*20)+(0.1*Math.sin((m.time*0.09))))+(m.q3*m.q6)))));
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.24483,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 10.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x+(0.2*Math.sin((m.time*0.411))));
m.y = (m.y+(0.2*Math.cos((m.time*0.423))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=x+.2*sin(time*.411);\n' + 'y=y+.2*cos(time*.423);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.24483,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 10.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (m.x-(0.2*Math.sin((m.time*0.411))));
m.y = (m.y-(0.2*Math.cos((m.time*0.423))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=x-.2*sin(time*.411);\n' + 'y=y-.2*cos(time*.423);'),

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uvv_1;\n' + '   vec2 uvm_2;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_noise_hq, uv.xx);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_main, uv.xx);\n' + '  uvm_2.x = ((0.5 * tmpvar_3) + (0.5 * tmpvar_4)).x;\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, uv.yy);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_noise_hq, uv.yy);\n' + '  uvm_2.y = ((0.5 * tmpvar_5) + (0.5 * tmpvar_6)).x;\n' + '  uvv_1 = (uv * uvm_2);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7 = texture2D (sampler_blur1, uv);\n' + '   vec4 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_blur3, uvv_1);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = ((tmpvar_8.xyz * scale3) + bias3).xy;\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_blur3, texture2D (sampler_noise_hq, tmpvar_9).xy);\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = (((tmpvar_7.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale3) + bias3));\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = fract((tmpvar_11.xy + uvm_2));\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (tmpvar_12 * (uvv_1 - tmpvar_12));\n' + '  tmpvar_13 = texture2D (sampler_main, P_14);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 1.0;\n' + '  tmpvar_15.xyz = ((2.0 * tmpvar_11) * tmpvar_13.xyz);\n' + '  vec4 ret4 = tmpvar_15;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('old_bass_flop=bass_flop;\n' + 'old_treb_flop=treb_flop;\n' + 'old_mid_flop=mid_flop;\n' + 'chaos=.9+.1*sin(pulse);\n' + 'entropy=if(equal(pulse,-20),1+bass_flop+treb_flop+mid_flop+rand(2),entropy);\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);\n' + 'bass_flop=abs(bass_flop-equal(bass_thresh,2));\n' + 'treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);\n' + 'treb_flop=abs(treb_flop-equal(treb_thresh,2));\n' + 'mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);\n' + 'mid_flop=abs(mid_flop-equal(mid_thresh,2));\n' + 'bass_changed=bnot(equal(old_bass_flop,bass_flop));\n' + 'mid_changed=bnot(equal(old_mid_flop,mid_flop));\n' + 'treb_changed=bnot(equal(old_treb_flop,treb_flop));\n' + 'bass_residual = bass_changed*sin(pulse*.1*entropy) + bnot(bass_changed)*bass_residual;\n' + 'treb_residual = treb_changed*sin(pulse*.1*entropy) + bnot(treb_changed)*treb_residual;\n' + 'mid_residual = mid_changed*sin(pulse*.1*entropy) + bnot(mid_changed)*mid_residual;\n' + 'pulse=if(above(abs(pulse),20),-20,pulse+(bass_thresh+mid_thresh+treb_thresh)*.032);\n' + 'q1=mid_residual;\n' + 'q2=bass_residual;\n' + 'q3=treb_residual;\n' + 'q4=sin(pulse);\n' + 'q5=cos(pulse/2+q1);\n' + 'q6=sin(q3*q1+q7*q2);\n' + 'q7=above(q1,0)+above(q2,0)+above(q3,0)+above(q3,0)*treb_flop+above(q2,0)*bass_flop+above(q1,0)*mid_flop;\n' + 'q8=entropy;\n' + 'vol=(bass+mid+treb_att)*.3333;\n' + 'redsine=.5+.15*bass*sin(time*3);\n' + 'greensine=.5+.15*mid*sin(time*2);\n' + 'bluesine=.5+.15*treb*sin(time);\n' + 'redif=if(above(bass,1.2),redsine,if(above(redif,.95),.0,redif*.95));\n' + 'greenif=if(above(mid,1.2),greensine,if(above(greenif,.95),.0,greenif*.95));\n' + 'blueif=if(above(treb,1.2),bluesine,if(above(blueif,.95),.0,blueif*.95));\n' + 'r=redif;\n' + 'g=greenif;\n' + 'b=blueif;\n' + 'q9=r;\n' + 'q10=g;\n' + 'q11=b;\n' + 'wave_r=wave_r*(sin(redif*cos(b+g)));\n' + 'wave_g=wave_g*(sin(greenif*cos(r+b)));\n' + 'wave_b=wave_b*(sin(blueif*cos(r+g)));\n' + 'ib_r=r;\n' + 'ib_g=g;\n' + 'ib_b=b;\n' + 'ob_r=wave_r*redif;\n' + 'ob_g=wave_g*greenif;\n' + 'ob_b=wave_b*blueif;'),
	'pixel_eqs_str' : ('xv = sin(time*.333)*x -cos(time*.667)*x;\n' + 'yv = cos(time*.233)*y +sin(time*.567)*y;\n' + 'x = xv;\n' + ' y = yv;\n' + 'sx=sx+.075*sin(x*3+q7*x);\n' + 'sy=sy+.075*sin(y*3.1+q7*y);\n' + 'dx=dx+.005*cos(y*20+.1*cos(time*.11)+(q2*q6));\n' + 'dy=dy+.005*sin(x*20+.1*sin(time*.09)+(q3*q6));'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.286,
		echo_alpha : 0.0,
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
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.007,
		ob_size : 0.5,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99951,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.925,
		wave_a : 4.1,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.bb = 0;
m.ff = 0;
m.q1 = 0;
m.xx = 0;
m.yy = 0;
m.beathard = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.bt = 0;
m.beat = 0;
m.mi = 0;
m.tr = 0;
m.ba = 0;
m.t3 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.ff = (m.ff+2.7);
m.bb = (((m.bb+m.bass)+m.mid)+m.treb);
m.bt = div(m.bb,m.ff);
m.beat = above(m.bass, m.bt);
m.beathard = ifcond(m.beat, (m.bass-m.bt), 0);
m.monitor = m.t3;
m.decay = 1;
m.q1 = m.beat;
m.q2 = m.beathard;
m.wrap = 1;
m.cx = (1-m.q3);
m.cy = (1-m.q4);
m.ba = (m.bass-0.9);
m.tr = (m.treb-0.9);
m.mi = (m.mid-0.9);
m.xx = ((m.xx+(m.ba*0.01))-(m.tr*0.001));
m.yy = ((m.yy+(m.tr*0.01))-(m.ba*0.001));
m.xx = ifcond(above(1, m.xx), ifcond(below(0, m.xx), m.xx, 1), 0);
m.yy = ifcond(above(1, m.yy), ifcond(below(0, m.yy), m.yy, 1), 0);
m.q3 = m.xx;
m.q4 = m.yy;
		m.rkeys = ['rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = (ifcond(below(m.x, m.q3), (Math.abs(m.y)*0.1), 0)*m.q1);
m.dy = (ifcond(below(m.x, m.q3), ((Math.abs(m.y)*0.1)*Math.sin(((m.bass*3.14)+(m.treb*3.14)))), 0)*(1-m.q1));
m.rot = ifcond(above(m.x, m.q3), ((-Math.abs(m.y)*0.1)+((m.x*m.q2)*Math.sin(m.bass))), m.rot);
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
			tex_zoom : 4.32548,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.20068,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.aa = 0;
m.bb = 0;
m.gg = 0;
m.rr = 0;
m.t4 = 0;
m.ss = 0;
m.q3 = 0;
m.q4 = 0;
m.mi = 0;
m.tr = 0;
m.ba = 0;
m.t3 = 0;

			m.rkeys = ['aa','bb','gg','rr','ss'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ba = (m.bass-0.9);
m.tr = (m.treb-0.9);
m.mi = (m.mid-0.9);
m.rad = (((m.ba+m.tr)+m.mi)*0.333);
m.ss = (m.ss+(m.mi*0.5));
m.ss = ifcond(above(8, m.ss), ifcond(below(3, m.ss), m.ss, 8), 3);
m.aa = (m.aa+(0.01*((((m.bass+m.bass_att)+m.treb)+m.treb_att)-3.5)));
m.sides = m.ss;
m.ang = m.aa;
m.textured = ifcond(below(1.3, m.treb), 0, 1);
m.rr = (m.rr+(m.ba*0.4));
m.gg = (m.gg+(m.tr*0.4));
m.bb = (m.bb+(m.mi*0.4));
m.r = (m.rr-(0.5*m.gg));
m.b = (m.gg-(0.5*m.bb));
m.g = (m.bb-(0.5*m.rr));
m.r2 = m.b;
m.b2 = m.g;
m.g2 = m.r;
m.x = m.q3;
m.y = m.q4;
m.t3 = m.x;
m.t4 = m.y;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ba=bass-.9;\n' + 'tr=treb-.9;\n' + 'mi=mid-.9;\n' + 'rad=(ba+tr+mi)*.333;\n' + 'ss=ss+mi*.5;\n' + 'ss=if(above(8,ss),if(below(3,ss),ss,8),3);\n' + 'aa=aa+.01*(bass+bass_att+treb+treb_att-3.5);\n' + 'sides=ss;\n' + 'ang=aa;\n' + 'textured=if(below(1.3,treb),0,1);\n' + 'rr=rr+ba*.4;\n' + 'gg=gg+tr*.4;\n' + 'bb=bb+mi*.4;\n' + 'r=rr-.5*gg;\n' + 'b=gg-.5*bb;\n' + 'g=bb-.5*rr;\n' + 'r2=b;\n' + 'b2=g;\n' + 'g2=r;\n' + 'x=q3;\n' + 'y=q4;\n' + 't3=x;\n' + 't4=y;'),

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '   vec2 P_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (uv - 0.5);\n' + '  P_3 = (tmpvar_4 + 0.5);\n' + '  tmpvar_2 = texture2D (sampler_main, P_3);\n' + '  ret_1.x = tmpvar_2.x;\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = ((tmpvar_4 * 0.9) + 0.5);\n' + '  tmpvar_5 = texture2D (sampler_main, P_6);\n' + '  ret_1.y = tmpvar_5.y;\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = ((tmpvar_4 * 1.15) + 0.5);\n' + '  tmpvar_7 = texture2D (sampler_main, P_8);\n' + '  ret_1.z = tmpvar_7.z;\n' + '  ret_1 = (ret_1 * 0.75);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9.w = 1.0;\n' + '  tmpvar_9.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_9;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('ff=ff+2.7;\n' + 'bb=bb+bass+mid+treb;\n' + 'bt=bb/ff;\n' + 'beat=above(bass,bt);\n' + 'beathard=if(beat,bass-bt,0);\n' + 'monitor=t3;\n' + 'decay=1;\n' + 'q1=beat;\n' + 'q2=beathard;\n' + 'wrap=1;\n' + 'cx=1-q3;\n' + 'cy=1-q4;\n' + 'ba=bass-.9;\n' + 'tr=treb-.9;\n' + 'mi=mid-.9;\n' + 'xx=xx+ba*.01-tr*.001;\n' + 'yy=yy+tr*.01-ba*.001;\n' + 'xx=if(above(1,xx),if(below(0,xx),xx,1),0);\n' + 'yy=if(above(1,yy),if(below(0,yy),yy,1),0);\n' + 'q3=xx;\n' + 'q4=yy;'),
	'pixel_eqs_str' : ('dx=if(below(x,q3),abs(y)*.1,0)*q1;\n' + 'dy=if(below(x,q3),abs(y)*.1*(sin(bass*3.14+treb*3.14)),0)*(1-q1);\n' + 'rot=if(above(x,q3),-abs(y)*.1+x*q2*sin(bass),rot);'),
};

return pmap;
});
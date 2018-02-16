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
		echo_alpha : 0.5,
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
		echo_zoom : 1.002,
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
m.q1 = 0;
m.q2 = 0;
m.beatmhard = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.beatthard = 0;
m.beatb = 0;
m.vol = 0;
m.vol_att = 0;
m.beatbhard = 0;
m.beatm = 0;
m.beatt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.beatb = above(m.bass, m.bass_att);
m.beatbhard = ifcond(m.beatb, (m.bass-(m.bass_att*0.9)), m.beatbhard);
m.beatm = above(m.mid, m.mid_att);
m.beatmhard = ifcond(m.beatm, (m.mid-(m.mid_att*0.9)), m.beatmhard);
m.beatt = above(m.treb, m.treb_att);
m.beatthard = ifcond(m.beatt, (m.treb-(m.treb_att*0.9)), m.beatthard);
m.vol = ((m.bass+m.mid)+m.treb);
m.vol_att = ((m.bass_att+m.mid_att)+m.treb_att);
m.q1 = m.beatb;
m.q2 = m.beatbhard;
m.q3 = m.beatm;
m.q4 = m.beatmhard;
m.q5 = m.beatt;
m.q6 = m.beatthard;
m.decay = 0.999;
m.wrap = 1;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1+(Math.sin(((m.ang*6.28)+(m.time*m.q6)))*0.01));
m.rot = (((m.q2-m.q6)*((m.rad*m.q3)-(m.ang*m.q1)))*0.1);
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
m.xx = 0;
m.yy = 0;
m.q2 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.rx = 0;
m.ry = 0;
m.bt = 0;
m.y1 = 0;
m.x1 = 0;
m.y2 = 0;
m.x2 = 0;
m.mi = 0;
m.t1 = 0;
m.t2 = 0;
m.tr = 0;
m.ba = 0;

			m.rkeys = ['bt'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ba = (m.bass-0.9);
m.tr = (m.treb-0.9);
m.mi = (m.mid-0.9);
m.xx = ((m.xx+(m.ba*0.01))-(m.tr*0.001));
m.yy = ((m.yy+(m.tr*0.01))-(m.ba*0.001));
m.xx = (m.xx+((Math.cos((((m.frame*6.28)+m.bass)-1))*0.05)*m.q2));
m.yy = (m.yy+((Math.sin(((m.time*3.14)*m.q6))*0.05)*m.q4));
m.xx = ifcond(above(1, m.xx), ifcond(below(0, m.xx), m.xx, 1), 0);
m.yy = ifcond(above(1, m.yy), ifcond(below(0, m.yy), m.yy, 1), 0);
m.t1 = m.xx;
m.t2 = m.yy;
		return m;
	},
		'point_eqs' : function(m) {
m.x1 = ((Math.cos(div((m.sample*360),6.28))*Math.sin(div((m.sample*360),6.28)))+0.5);
m.y1 = (Math.sin(div((m.sample*360),6.28))*Math.sin(div((m.sample*360),6.28)));
m.x2 = m.x1;
m.y2 = m.y1;
m.ry = (0.5+(m.treb-m.q5));
m.rx = (0.5+(m.bass-m.q5));
m.y1 = ((m.y1*m.ry)+0.25);
m.x1 = ((m.x1*m.rx)+0.25);
m.y1 = (m.y1+(m.t1-0.5));
m.x1 = (m.x1+(m.t2-0.5));
m.x1 = ifcond(above(1, m.x1), ifcond(below(0, m.x1), m.x1, m.x1), m.x1);
m.y1 = ifcond(above(1, m.y1), ifcond(below(0, m.y1), m.y1, m.y1), m.y1);
m.y = m.y1;
m.x = m.x1;
m.r = (Math.sin((m.sample*m.value2))*0.5);
m.g = (Math.sin((((((m.bass+m.treb)+m.q2)+m.q4)+m.q6)+(m.value1*m.bass)))*0.5);
m.bt = (m.bt+(m.value1*0.002));
m.b = (Math.sin(((m.bt*m.q2)+m.value1))*0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ba=bass-.9;\n' + 'tr=treb-.9;\n' + 'mi=mid-.9;\n' + 'xx=xx+ba*.01-tr*.001;\n' + 'yy=yy+tr*.01-ba*.001;\n' + 'xx=xx+cos(frame*6.28+bass-1)*.05*q2;\n' + 'yy=yy+sin(time*3.14*q6)*.05*q4;\n' + 'xx=if(above(1,xx),if(below(0,xx),xx,1),0);\n' + 'yy=if(above(1,yy),if(below(0,yy),yy,1),0);\n' + 't1=xx;\n' + 't2=yy;'),
		'point_eqs_str' : ('x1=cos((sample*360)/(6.28))*sin((sample*360)/(6.28))+.5;\n' + 'y1=sin((sample*360)/(6.28))*sin((sample*360)/(6.28));\n' + 'x2=x1;\n' + 'y2=y1;\n' + 'ry=.5+(treb-q5);\n' + 'rx=.5+(bass-q5);\n' + 'y1=y1*ry+.25;\n' + 'x1=x1*rx+.25;\n' + 'y1=y1+(t1-.5);\n' + 'x1=x1+(t2-.5);\n' + 'x1=if(above(1,x1),if(below(0,x1),x1,x1),x1);\n' + 'y1=if(above(1,y1),if(below(0,y1),y1,y1),y1);\n' + 'y=y1;\n' + 'x=x1;\n' + 'r=sin(sample*value2)*.5;\n' + 'g=sin(bass+treb+q2+q4+q6+value1*bass)*.5;\n' + 'bt=bt+value1*.002;\n' + 'b=sin(bt*q2+value1)*.5;'),

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
			thickoutline : 1.0,
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
m.ss = 0;
m.xx = 0;
m.yy = 0;
m.mi = 0;
m.tr = 0;
m.ba = 0;

			m.rkeys = ['aa','bb','gg','rr','ss','xx','yy'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ba = (m.bass-0.9);
m.tr = (m.treb-0.9);
m.mi = (m.mid-0.9);
m.xx = ((m.xx+(m.ba*0.01))-(m.tr*0.001));
m.yy = ((m.yy+(m.tr*0.01))-(m.ba*0.001));
m.xx = ifcond(above(1, m.xx), ifcond(below(0, m.xx), m.xx, 1), 0);
m.yy = ifcond(above(1, m.yy), ifcond(below(0, m.yy), m.yy, 1), 0);
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
m.x = m.xx;
m.y = m.yy;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ba=bass-.9;\n' + 'tr=treb-.9;\n' + 'mi=mid-.9;\n' + 'xx=xx+ba*.01-tr*.001;\n' + 'yy=yy+tr*.01-ba*.001;\n' + 'xx=if(above(1,xx),if(below(0,xx),xx,1),0);\n' + 'yy=if(above(1,yy),if(below(0,yy),yy,1),0);\n' + 'rad=(ba+tr+mi)*.333;\n' + 'ss=ss+mi*.5;\n' + 'ss=if(above(8,ss),if(below(3,ss),ss,8),3);\n' + 'aa=aa+.01*(bass+bass_att+treb+treb_att-3.5);\n' + 'sides=ss;\n' + 'ang=aa;\n' + 'textured=if(below(1.3,treb),0,1);\n' + 'rr=rr+ba*.4;\n' + 'gg=gg+tr*.4;\n' + 'bb=bb+mi*.4;\n' + 'r=rr-.5*gg;\n' + 'b=gg-.5*bb;\n' + 'g=bb-.5*rr;\n' + 'r2=b;\n' + 'b2=g;\n' + 'g2=r;\n' + 'x=xx;\n' + 'y=yy;'),

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
	'warp' : ('shader_body {\n' + '   vec3 noise_1;\n' + '   vec3 ret_2;\n' + '   vec2 P_3;\n' + '  P_3 = (((\n' + '    (texsize.xy * texsize_noise_lq.zw)\n' + '  .x * uv) / 2.0) + _qf.z);\n' + '   vec3 tmpvar_4;\n' + '  tmpvar_4 = (texture2D (sampler_noise_lq, P_3) + 1.0).xyz;\n' + '  noise_1 = tmpvar_4;\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_blur1, uv);\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = (((tmpvar_5.xyz * scale1) + bias1) - 0.3);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + (tmpvar_6 * 0.01).xy);\n' + '  tmpvar_7 = texture2D (sampler_main, P_8);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9.x = (0.3 * tmpvar_6.x);\n' + '  tmpvar_9.y = tmpvar_6.y;\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = ((uv / 4.0) + (0.4 * tmpvar_9));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '  ret_2 = ((-0.4 * (\n' + '    ((tmpvar_10.xyz * scale1) + bias1)\n' + '   - \n' + '    (noise_1 * 0.1)\n' + '  )) + (tmpvar_7.xyz + (noise_1 * 0.1)));\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = (1.0 - ((0.01 * _qg.w) * (_qg.w * rad)));\n' + '  ret_2 = (ret_2 * (0.98 * (tmpvar_12 * tmpvar_12)));\n' + '  ret_2 = (ret_2 - 0.04);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13.w = 1.0;\n' + '  tmpvar_13.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_13;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('beatb=above(bass,bass_att);\n' + 'beatbhard=if(beatb,bass-bass_att*.9,beatbhard);\n' + 'beatm=above(mid,mid_att);\n' + 'beatmhard=if(beatm,mid-mid_att*.9,beatmhard);\n' + 'beatt=above(treb,treb_att);\n' + 'beatthard=if(beatt,treb-treb_att*.9,beatthard);\n' + 'vol=bass+mid+treb;\n' + 'vol_att=bass_att+mid_att+treb_att;\n' + 'q1=beatb;\n' + 'q2=beatbhard;\n' + 'q3=beatm;\n' + 'q4=beatmhard;\n' + 'q5=beatt;\n' + 'q6=beatthard;\n' + 'decay=.999;\n' + 'wrap=1;'),
	'pixel_eqs_str' : ('zoom=1+sin(ang*6.28+time*q6)*.01;\n' + 'rot=(q2-q6)*(rad*q3-ang*q1)*.1;'),
};

return pmap;
});
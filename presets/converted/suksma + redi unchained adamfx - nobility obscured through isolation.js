define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.286,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 1.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 3.39416,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.007,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.00815,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 1.0,
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
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.centerx = 0;
m.centery = 0;
m.grid = 0;
m.wave_size = 0;
m.timer_base = 0;
m.sy_temp = 0;
m.sx_temp = 0;
m.crad = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = (m.wave_r+ifcond(above(m.bass_att, 1.4), 1, (0.49*Math.sin((m.time*2)))));
m.wave_g = (m.wave_g+ifcond(above(m.bass_att, 1.4), 0, ifcond(above(m.treb_att, 1.4), 1, (0.49*Math.sin((m.time*3))))));
m.wave_b = (m.wave_b+ifcond(above(m.treb_att, 1.4), 0, (0.49*Math.sin(m.time))));
m.timer_base = 0.5;
m.q1 = Math.sin(((m.time*m.timer_base)*4));
m.q2 = Math.sin(((m.time*m.timer_base)*2));
m.q3 = Math.sin((m.time*m.timer_base));
m.rot = ifcond(above(m.q1, 0), ifcond(above(m.q2, 0), 0.1, -0.1), 0);
m.zoom = ((m.zoom+(0.05*m.q2))+(0.05*m.q1));
m.wave_mystery = ((m.wave_mystery+(0.7*m.q1))+(0.3*m.q2));
m.wave_size = (m.wave_size+(0.5*m.q3));
m.cx = (m.cx+(0.2*m.q1));
m.cy = (m.cy+(0.2*m.q3));
		m.rkeys = ['sy','sx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.centerx = 0.5;
m.centery = 0.5;
m.crad = (Math.abs((m.rad-0.5))*m.q2);
m.grid = (mod(Math.abs(((m.x*10)-5)),2)+mod(Math.abs(((m.y*10)-5)),2));
m.sx_temp = ifcond(equal(m.grid, 0), ifcond(above(m.x, m.centerx), ((m.sx-m.crad)-m.centerx), ((m.sx+m.crad)-m.centerx)), m.sx);
m.sy_temp = ifcond(equal(m.grid, 0), ifcond(above(m.y, m.centery), ((m.sy-m.crad)-m.centery), ((m.sy+m.crad)-m.centery)), m.sy);
m.sx = ifcond(below(m.q1, 0), (m.sx-((m.sx_temp*m.q2)*0.1)), m.sx);
m.sy = ifcond(below(m.q1, 0), (m.sy-((m.sx_temp*m.q2)*0.1)), m.sy);
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
m.xx = 0;
m.yy = 0;
m.q2 = 0;
m.q5 = 0;
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
m.yy = (m.yy+((Math.sin(((m.time*3.14)*m.q5))*0.05)*m.q2));
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
m.g = (Math.sin((((((m.bass+m.treb)+m.q2)+m.q1)+m.q5)+(m.value1*m.bass)))*0.5);
m.bt = (m.bt+(m.value1*0.002));
m.b = (Math.sin((m.bt+m.value1))*0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ba=bass-.9;\n' + 'tr=treb-.9;\n' + 'mi=mid-.9;\n' + 'xx=xx+ba*.01-tr*.001;\n' + 'yy=yy+tr*.01-ba*.001;\n' + 'xx=xx+cos(frame*6.28+bass-1)*.05*q2;\n' + 'yy=yy+sin(time*3.14*q5)*.05*q2;\n' + 'xx=if(above(1,xx),if(below(0,xx),xx,1),0);\n' + 'yy=if(above(1,yy),if(below(0,yy),yy,1),0);\n' + 't1=xx;\n' + 't2=yy;'),
		'point_eqs_str' : ('x1=cos((sample*360)/(6.28))*sin((sample*360)/(6.28))+.5;\n' + 'y1=sin((sample*360)/(6.28))*sin((sample*360)/(6.28));\n' + 'x2=x1;\n' + 'y2=y1;\n' + 'ry=.5+(treb-q5);\n' + 'rx=.5+(bass-q5);\n' + 'y1=y1*ry+.25;\n' + 'x1=x1*rx+.25;\n' + 'y1=y1+(t1-.5);\n' + 'x1=x1+(t2-.5);\n' + 'x1=if(above(1,x1),if(below(0,x1),x1,x1),x1);\n' + 'y1=if(above(1,y1),if(below(0,y1),y1,y1),y1);\n' + 'y=y1;\n' + 'x=x1;\n' + 'r=sin(sample*value2)*.5;\n' + 'g=sin(bass+treb+q2+q1+q5+value1*bass)*.5;\n' + 'bt=bt+value1*.002;\n' + 'b=sin(bt+value1)*.5;'),

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
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 4.59158,
			additive : 1.0,
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
m.q5 = 0;
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
m.textured = ifcond(below(((m.bass+m.treb)+m.mid), m.q5), 1, 0);
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
		'frame_eqs_str' : ('ba=bass-.9;\n' + 'tr=treb-.9;\n' + 'mi=mid-.9;\n' + 'xx=xx+ba*.01-tr*.001;\n' + 'yy=yy+tr*.01-ba*.001;\n' + 'xx=if(above(1,xx),if(below(0,xx),xx,1),0);\n' + 'yy=if(above(1,yy),if(below(0,yy),yy,1),0);\n' + 'rad=(ba+tr+mi)*.333;\n' + 'ss=ss+mi*.5;\n' + 'ss=if(above(8,ss),if(below(3,ss),ss,8),3);\n' + 'aa=aa+.01*(bass+bass_att+treb+treb_att-3.5);\n' + 'sides=ss;\n' + 'ang=aa;\n' + 'textured=if(below(bass+treb+mid,q5),1,0);\n' + 'rr=rr+ba*.4;\n' + 'gg=gg+tr*.4;\n' + 'bb=bb+mi*.4;\n' + 'r=rr-.5*gg;\n' + 'b=gg-.5*bb;\n' + 'g=bb-.5*rr;\n' + 'r2=b;\n' + 'b2=g;\n' + 'g2=r;\n' + 'x=xx;\n' + 'y=yy;'),

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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = normalize((uv_orig - 0.5));\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = (time * 7.0);\n' + '  uv_1 = (mix (uv_orig, uv, vec2((\n' + '    clamp ((((bass / bass_att) - 0.9) * 13.0), 0.0, 1.0)\n' + '   * 0.3))) + ((\n' + '    (tmpvar_3 * texsize.zw)\n' + '   * \n' + '    cos(((rad * 170.0) - tmpvar_4))\n' + '  ) * 2.0));\n' + '  uv_1 = (uv_1 + ((\n' + '    (vec2(5.0, -5.0) * texsize.zw)\n' + '   * \n' + '    cos(((ang * 30.0) - tmpvar_4))\n' + '  ) * tmpvar_3.yx));\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, uv_1);\n' + '  ret_2 = tmpvar_5.xyz;\n' + '  ret_2 = ((ret_2 - 0.004) * 0.83);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = ((ret_1 * 1.5) - 0.1);\n' + '  ret_1.y = (ret_1 * 0.7).y;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uv);\n' + '  ret_1.x = (((tmpvar_3.xyz * scale1) + bias1).x * 2.0);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur2, uv);\n' + '  ret_1.z = (((tmpvar_4.xyz * scale2) + bias2).z * 3.0);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'wave_r = wave_r + if(above(bass_att,1.4),1,.49*sin(time*2));\n' + 'wave_g = wave_g + if(above(bass_att,1.4),0,if(above(treb_att,1.4),1,.49*sin(time*3)));\n' + 'wave_b = wave_b + if(above(treb_att,1.4),0,.49*sin(time));\n' + 'timer_base=.5;\n' + 'q1=sin(time*timer_base*4);\n' + 'q2=sin(time*timer_base*2);\n' + 'q3=sin(time*timer_base);\n' + 'rot=if(above(q1,0),if(above(q2,0),.1,-.1),0);\n' + 'zoom=zoom+.05*q2+.05*q1;\n' + 'wave_mystery=wave_mystery+.7*q1+.3*q2;\n' + 'wave_size=wave_size+0.5*q3;\n' + 'cx=cx+.2*q1;\n' + 'cy=cy+.2*q3;'),
	'pixel_eqs_str' : ('centerx = .5;\n' + 'centery = .5;\n' + 'crad = abs(rad-.5)*q2;\n' + 'grid=abs(x*10-5)%2 + abs(y*10-5)%2;\n' + 'sx_temp = if(equal(grid,0),if(above(x,centerx),sx - crad - centerx,sx + crad - centerx),sx);\n' + 'sy_temp = if(equal(grid,0),if(above(y,centery),sy - crad - centery,sy + crad - centery),sy);\n' + 'sx=if(below(q1,0),sx-sx_temp*q2*.1,sx);\n' + 'sy=if(below(q1,0),sy-sx_temp*q2*.1,sy);'),
};

return pmap;
});
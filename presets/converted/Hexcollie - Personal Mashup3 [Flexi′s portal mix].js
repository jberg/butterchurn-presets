define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.45,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 0.972,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.035,
		b2x : 1.0,
		warp : 0.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.00016,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.168,
		ob_size : 0.1,
		b1ed : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 1.0,
		wave_y : 0.5,
		zoom : 1.00022,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.06,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.094,
		decay : 0.989,
		wave_a : 4.1,
		ob_g : 0.0,
		ib_a : 0.29,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.lastpulse = 0;
m.hccp = 0;
m.dqv = 0;
m.bccl = 0;
m.eo = 0;
m.lastbeat = 0;
m.beatfreq = 0;
m.pulsefreq = 0;
m.bt = 0;
m.leccl = 0;
m.th = 0;
m.beat = 0;
m.thccl = 0;
m.le = 0;
m.pulse = 0;
m.btblock = 0;
m.dle = 0;
m.dle = 1;
		return m;
	},
	'frame_eqs' : function(m) {
m.le = (((1.4*m.bass_att)+(0.1*m.bass))+(0.5*m.treb));
m.pulse = above(m.le, m.th);
m.pulsefreq = ifcond(equal(m.pulsefreq, 0), 2, ifcond(m.pulse, ((0.8*m.pulsefreq)+(0.2*(m.time-m.lastpulse))), m.pulsefreq));
m.lastpulse = ifcond(m.pulse, m.time, m.lastpulse);
m.bt = div((m.time-m.lastbeat),((0.5*m.beatfreq)+(0.5*m.pulsefreq)));
m.hccp = (div(0.03,(m.bt+0.2))+(0.5*ifcond(band(above(m.bt, 0.8), below(m.bt, 1.2)), (pow(Math.sin(((m.bt-1)*7.854)), 4)-1), 0)));
m.beat = band(above(m.le, (m.th+m.hccp)), m.btblock);
m.btblock = (1-above(m.le, (m.th+m.hccp)));
m.lastbeat = ifcond(m.beat, m.time, m.lastbeat);
m.beatfreq = ifcond(equal(m.beatfreq, 0), 2, ifcond(m.beat, ((0.8*m.beatfreq)+(0.2*(m.time-m.lastbeat))), m.beatfreq));
m.th = ifcond(above(m.le, m.th), ((m.le+div(114,(m.le+10)))-7.407), ((m.th+div((m.th*0.07),(m.th-12)))+((below(m.th, 2.7)*0.1)*(2.7-m.th))));
m.th = ifcond(above(m.th, 6), 6, m.th);
m.thccl = (m.thccl+(m.th-2.5144));
m.q1 = m.le;
m.q2 = (m.thccl+(0.2*m.leccl));
m.leccl = (m.leccl+(m.dle*m.le));
m.dle = ifcond(m.beat, -m.dle, m.dle);
m.bccl = (m.bccl+m.beat);
m.wave_r = ((0.1+(0.8*sqr(Math.sin((0.011*m.thccl)))))+(0.1*Math.sin((m.leccl*0.061))));
m.wave_g = ((0.1+(0.8*sqr(Math.sin((0.013*m.thccl)))))+(0.1*Math.cos((m.leccl*0.067))));
m.wave_b = ((0.1+(0.8*sqr(Math.cos((0.017*m.thccl)))))+(0.1*Math.sin((m.leccl*0.065))));
m.ib_r = (m.ib_r+(0.1*Math.sin(((1.3*m.time)+(0.012*m.leccl)))));
m.ib_g = (m.ib_g+(0.1*Math.sin(((1.7*m.time)+(0.019*m.leccl)))));
m.ib_b = (m.ib_b+(0.1*Math.sin(((1.9*m.time)+(0.017*m.leccl)))));
m.mv_r = (0.5*(m.ib_r+m.wave_r));
m.mv_g = (0.5*(m.ib_g+m.wave_g));
m.mv_b = (0.5*(m.ib_b+m.wave_b));
m.mv_a = (0.5*sqr(Math.sin(((0.01*m.leccl)+m.bccl))));
m.echo_alpha = (0.5+(0.2*Math.cos(((0.07*m.leccl)+(0.02*m.thccl)))));
m.eo = ifcond(band(equal(mod(m.bccl,3), 0), m.beat), rand(4), m.eo);
m.q3 = ((equal(m.eo, 2)+equal(m.eo, 1))*equal(mod(m.bccl,2), 0));
m.q4 = ((equal(m.eo, 0)+equal(m.eo, 3))*equal(mod(m.bccl,2), 0));
m.echo_orient = m.eo;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dqv = (above(m.x, 0.5)-above(m.y, 0.5));
m.rot = Math.sin(((Math.sin(((m.rad*(13+(5*Math.sin((0.01*m.q2)))))+(0.06*m.q2)))*m.q1)*0.01));
m.zoom = (1+((ifcond(m.q3, m.dqv, 1)*0.1)*Math.sin(((7*m.ang)+(0.03*m.q2)))));
m.zoom = ifcond(m.q4, ifcond(below(m.rad, (0.8*sqr(Math.sin((0.016*m.q2))))), (0.75+(0.4*Math.cos((0.021*m.q2)))), m.zoom), m.zoom);
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
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.3345,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.59957,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.spi = 0;
m.red = 0;
m.vol = 0;
m.bob = 0;
m.tm = 0;
m.ro = 0;
m.sp = 0;
m.border_1 = 0;
m.bob = 1.5;
m.ro = 0;
m.red = rand(20);
			m.rkeys = ['bob','ro'];
			return m;
		},
		'frame_eqs' : function(m) {
m.vol = (1+(0.2*div(((m.bass_att+m.treb_att)+m.mid_att),3)));
m.bob = (((m.bob*above(m.bob, 0.01))-0.01)+(1*(1-above(m.bob, 0.01))));
m.bob = (0.4+(0.4*Math.sin((m.time*0.8))));
m.bob = (m.bob*m.vol);
m.rad = m.bob;
m.border_1 = 0.4;
m.sides = 30;
m.ro = (m.ro+0.02);
m.ang = m.ro;
m.rad = 0.6;
m.sp = (m.red*0.025);
m.spi = (0.5-m.sp);
m.tm = (m.time*0.1);
m.border_r = ((0.5+(m.sp*Math.sin((m.tm*0.6))))+(m.spi*Math.cos((m.tm*1.46))));
m.border_g = ((0.5+(m.sp*Math.sin((m.tm*1.294))))+(m.spi*Math.cos((m.tm*0.87))));
m.border_b = ((0.5+(m.sp*Math.sin((m.tm*1.418))))+(m.spi*Math.cos((m.tm*0.76))));
		return m;
	},
		'init_eqs_str' : ('bob = 1.5;\n' + 'ro = 0;\n' + 'red = rand(20);'),
		'frame_eqs_str' : ('vol = 1 + 0.2*((bass_att+treb_att+mid_att)/3);\n' + 'bob = bob*above(bob,0.01) - 0.01 + 1*(1 - above(bob,0.01));\n' + 'bob = 0.4 + 0.4*sin(time*0.8);\n' + 'bob = bob*vol;\n' + 'rad = bob;\n' + 'border_1 = 0.4;\n' + 'sides = 30;\n' + 'ro = ro + 0.02;\n' + 'ang = ro;\n' + 'rad = 0.6;\n' + 'sp = red*0.025;\n' + 'spi = 0.5 - sp;\n' + 'tm = time*0.1;\n' + 'border_r = 0.5 + sp*sin(tm*0.6) + spi*cos(tm*1.46);\n' + 'border_g = 0.5 + sp*sin(tm*1.294) + spi*cos(tm*0.87);\n' + 'border_b = 0.5 + sp*sin(tm*1.418) + spi*cos(tm*0.76);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.5*((Math.sin((m.time*1.1))*0.3)+(0.7*Math.sin((m.time*0.5))))));
m.x = (0.5+(0.225*Math.sin(m.time)));
m.y = (0.5+(0.3*Math.cos(m.time)));
m.rad = (m.rad*m.mid_att);
m.r = (0.5+(0.5*Math.sin((m.frame*0.5))));
m.b = (0.5+(0.5*Math.sin(((m.frame*0.5)+2.094))));
m.g = (0.5+(0.5*Math.sin(((m.frame*0.5)+4.188))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.5*(sin(time*1.1)*0.3 + 0.7*sin(time*0.5));\n' + 'x = 0.5 + 0.225*sin(time);\n' + 'y = 0.5 + 0.3*cos(time);\n' + 'rad = rad*mid_att;\n' + 'r = 0.5 + 0.5*sin(frame*0.5);\n' + 'b = 0.5 + 0.5*sin(frame*0.5 + 2.094);\n' + 'g = 0.5 + 0.5*sin(frame*0.5 + 4.188);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.5*((Math.sin((m.time*1.1))*0.3)+(0.7*Math.sin((m.time*0.5))))));
m.x = (0.5+(0.225*Math.sin((m.time+2.09))));
m.y = (0.5+(0.3*Math.cos((m.time+2.09))));
m.rad = (m.rad*m.bass_att);
m.r = (0.5+(0.5*Math.sin((m.frame*0.5))));
m.b = (0.5+(0.5*Math.sin(((m.frame*0.5)+2.094))));
m.g = (0.5+(0.5*Math.sin(((m.frame*0.5)+4.188))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.5*(sin(time*1.1)*0.3 + 0.7*sin(time*0.5));\n' + 'x = 0.5 + 0.225*sin(time + 2.09);\n' + 'y = 0.5 + 0.3*cos(time + 2.09);\n' + 'rad = rad*bass_att;\n' + 'r = 0.5 + 0.5*sin(frame*0.5);\n' + 'b = 0.5 + 0.5*sin(frame*0.5 + 2.094);\n' + 'g = 0.5 + 0.5*sin(frame*0.5 + 4.188);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(0.5*((Math.sin((m.time*1.1))*0.3)+(0.7*Math.sin((m.time*0.5))))));
m.x = (0.5+(0.225*Math.sin((m.time+4.19))));
m.y = (0.5+(0.3*Math.cos((m.time+4.19))));
m.rad = (m.rad*m.treb_att);
m.r = (0.5+(0.5*Math.sin((m.frame*0.5))));
m.b = (0.5+(0.5*Math.sin(((m.frame*0.5)+2.094))));
m.g = (0.5+(0.5*Math.sin(((m.frame*0.5)+4.188))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 + 0.5*(sin(time*1.1)*0.3 + 0.7*sin(time*0.5));\n' + 'x = 0.5 + 0.225*sin(time + 4.19);\n' + 'y = 0.5 + 0.3*cos(time + 4.19);\n' + 'rad = rad*treb_att;\n' + 'r = 0.5 + 0.5*sin(frame*0.5);\n' + 'b = 0.5 + 0.5*sin(frame*0.5 + 2.094);\n' + 'g = 0.5 + 0.5*sin(frame*0.5 + 4.188);'),

		}
],
	'warp' : (''),
	'comp' : ('shader_body {\n' + '   float ang2_1;\n' + '   vec2 uv2_2;\n' + '   vec3 ret_3;\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = ((rad * sqrt(\n' + '    dot (texsize.xy, texsize.xy)\n' + '  )) * 0.5);\n' + '  ang2_1 = ((ang * 0.1591549) + ((time * 0.015) - (tmpvar_4 * 0.0002)));\n' + '  ang2_1 = (fract((ang2_1 * 7.0)) / 7.0);\n' + '  ang2_1 = (abs((ang2_1 - 0.07142857)) * 6.283185);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = cos(ang2_1);\n' + '  tmpvar_5.y = sin(ang2_1);\n' + '  uv2_2 = (0.5 + ((\n' + '    (tmpvar_4 * 0.8)\n' + '   * tmpvar_5) * texsize.zw));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv2_2);\n' + '  ret_3 = tmpvar_6.xyz;\n' + '  ret_3 = (ret_3 * 1.333);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('dle=1;'),
	'frame_eqs_str' : ('le=1.4*bass_att+.1*bass+.5*treb;\n' + 'pulse=above(le,th);\n' + 'pulsefreq=if(equal(pulsefreq,0),2,if(pulse,.8*pulsefreq+.2*(time-lastpulse),pulsefreq));\n' + 'lastpulse=if(pulse,time,lastpulse);\n' + 'bt=(time-lastbeat)/(.5*beatfreq+.5*pulsefreq);\n' + 'hccp=(.03/(bt+.2))+.5*if(band(above(bt,.8),below(bt,1.2)),(pow(sin((bt-1)*7.854),4)-1),0);\n' + 'beat=band(above(le,th+hccp),btblock);\n' + 'btblock=1-above(le,th+hccp);\n' + 'lastbeat=if(beat,time,lastbeat);\n' + 'beatfreq=if(equal(beatfreq,0),2,if(beat,.8*beatfreq+.2*(time-lastbeat),beatfreq));\n' + 'th=if(above(le,th),le+114/(le+10)-7.407,th+th*.07/(th-12)+below(th,2.7)*.1*(2.7-th));\n' + 'th=if(above(th,6),6,th);\n' + 'thccl=thccl+(th-2.5144);\n' + 'q1=le;\n' + 'q2=thccl+.2*leccl;\n' + 'leccl=leccl+dle*le;\n' + 'dle=if(beat,-dle,dle);\n' + 'bccl=bccl+beat;\n' + 'wave_r=.1+.8*sqr(sin(.011*thccl))+.1*sin(leccl*.061);\n' + 'wave_g=.1+.8*sqr(sin(.013*thccl))+.1*cos(leccl*.067);\n' + 'wave_b=.1+.8*sqr(cos(.017*thccl))+.1*sin(leccl*.065);\n' + 'ib_r=ib_r+.1*sin(1.3*time+.012*leccl);\n' + 'ib_g=ib_g+.1*sin(1.7*time+.019*leccl);\n' + 'ib_b=ib_b+.1*sin(1.9*time+.017*leccl);\n' + 'mv_r=.5*(ib_r+wave_r);\n' + 'mv_g=.5*(ib_g+wave_g);\n' + 'mv_b=.5*(ib_b+wave_b);\n' + 'mv_a=.5*sqr(sin(.01*leccl+bccl));\n' + 'echo_alpha=.5+.2*cos(.07*leccl+.02*thccl);\n' + 'eo=if(band(equal(bccl%3,0),beat),rand(4),eo);\n' + 'q3=(equal(eo,2)+equal(eo,1))*equal(bccl%2,0);\n' + 'q4=(equal(eo,0)+equal(eo,3))*equal(bccl%2,0);\n' + 'echo_orient=eo;'),
	'pixel_eqs_str' : ('dqv=above(x,.5)-above(y,.5);\n' + 'rot=sin(sin(rad*(13+5*sin(.01*q2))+.06*q2)*q1*.01);\n' + 'zoom=1+if(q3,dqv,1)*.1*sin(7*ang+.03*q2);\n' + 'zoom=if(q4,if(below(rad,.8*sqr(sin(.016*q2))),.75+.4*cos(.021*q2),zoom),zoom);'),
};

return pmap;
});
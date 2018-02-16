define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 0.408391,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.625316,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 1.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 0.1,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 0.9,
		echo_zoom : 1.006435,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 53.523884,
		wave_dots : 0.0,
		mv_g : 0.44,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.98,
		wave_mystery : 0.0,
		decay : 0.987,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 0.39,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.88,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.treb_thresh = 0;
m.q1 = 0;
m.blue_aim = 0;
m.q2 = 0;
m.treb_on = 0;
m.green = 0;
m.green_aim = 0;
m.red = 0;
m.red_aim = 0;
m.blue = 0;
m.bass_thresh = 0;
m.swapcolour = 0;
m.bass_on = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.q1 = div(((m.bass_att+m.mid_att)+m.treb_att),3);
m.q2 = (m.time+1000);
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.4)*0.95)+1.4)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.5)*0.85)+1.2)));
m.bass_on = above(m.bass_thresh, 1.9);
m.treb_on = above(m.treb_thresh, 1.9);
m.swapcolour = (m.bass_on-m.treb_on);
m.red_aim = ifcond(equal(m.swapcolour, 1), 1, ifcond(equal(m.swapcolour, 0), 0.9, 0.7));
m.green_aim = ifcond(equal(m.swapcolour, 1), 0.7, ifcond(equal(m.swapcolour, 0), 0.3, 0.6));
m.blue_aim = ifcond(equal(m.swapcolour, 1), 0, ifcond(equal(m.swapcolour, 0), 0.2, 0.8));
m.red = (m.red+((m.red_aim-m.red)*0.5));
m.green = (m.green+((m.green_aim-m.green)*0.5));
m.blue = (m.blue+((m.blue_aim-m.blue)*0.5));
m.wave_r = m.red;
m.wave_g = m.green;
m.wave_b = m.blue;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dy = ((-0.1*(m.q1-1))*Math.log((2-Math.abs(((m.y*2)-1.8)))));
m.dy = ((below(m.dy, 0.02)*m.dy)-0.02);
m.dy = (m.dy+(0.01*(Math.sin((((m.x*m.q2)*0.483)+((m.y*m.q2)*1.238)))+Math.sin((((m.x*m.q2)*1.612)+((m.y*m.q2)*0.648))))));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.7,
			scaling : 100.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.9,
			thick : 1.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {
m.bmod = 0;
m.scale2 = 0;
m.scale = 0;
m.rmod = 0;
m.adv = 0;
m.yp = 0;
m.xp = 0;
m.waver = 0;
m.gmod = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.adv = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.adv = (m.adv+((m.bass*m.bass)*0.005));
m.t1 = (Math.sin(m.adv)*0.3);
m.t2 = (Math.cos(m.adv)*0.3);
m.t3 = m.adv;
		return m;
	},
		'point_eqs' : function(m) {
m.waver = (Math.sin(((m.sample*6.28)*16))*0.2);
m.xp = Math.sin(((m.sample*6.28)+m.waver));
m.yp = Math.cos(((m.sample*6.28)+m.waver));
m.scale = Math.sin((((m.sample*6.28)*3)-(m.t3*3)));
m.scale2 = ((Math.sin((((m.sample*6.28)*5)-(m.t3*2.9)))*0.5)+0.5);
m.xp = ((m.xp*m.scale)*m.scale2);
m.yp = ((m.yp*m.scale)*m.scale2);
m.x = (((m.xp*0.4)*0.7)+0.5);
m.y = (((m.yp*0.5)*0.7)+0.5);
m.rmod = ((Math.sin((m.time*0.2))*0.5)+0.5);
m.rmod = (m.rmod*m.rmod);
m.gmod = ((Math.sin(((m.time*0.2)+2.1))*0.5)+0.5);
m.gmod = (m.gmod*m.gmod);
m.bmod = ((Math.sin(((m.time*0.2)+4.2))*0.5)+0.5);
m.bmod = (m.bmod*m.bmod);
m.r = m.rmod;
m.g = m.gmod;
m.b = m.bmod;
		return m;
	},
		'init_eqs_str' : ('adv=0;'),
		'frame_eqs_str' : ('adv=adv+(bass*bass)*0.005;\n' + 't1=sin(adv)*0.3;\n' + 't2=cos(adv)*0.3;\n' + 't3=adv;'),
		'point_eqs_str' : ('waver=sin(sample*6.28*16)*0.2;\n' + 'xp=sin(sample*6.28+waver);\n' + 'yp=cos(sample*6.28+waver);\n' + 'scale=sin(sample*6.28*3 - t3*3);\n' + 'scale2=sin(sample*6.28*5 - t3*2.9)*0.5 + 0.5;\n' + 'xp=xp*scale*scale2;\n' + 'yp=yp*scale*scale2;\n' + 'x=xp*0.4*0.7 + 0.5;\n' + 'y=yp*0.5*0.7 + 0.5;\n' + 'rmod=sin(time*0.2)*0.5+0.5;\n' + 'rmod=rmod*rmod;\n' + 'gmod=sin(time*0.2+2.1)*0.5+0.5;\n' + 'gmod=gmod*gmod;\n' + 'bmod=sin(time*0.2+4.2)*0.5+0.5;\n' + 'bmod=bmod*bmod;\n' + 'r=rmod;\n' + 'g=gmod;\n' + 'b=bmod;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 81.954445,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.bmod = 0;
m.scale2 = 0;
m.scale = 0;
m.rmod = 0;
m.adv = 0;
m.yp = 0;
m.xp = 0;
m.waver = 0;
m.gmod = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.adv = 0;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.adv = (m.adv+((m.bass*m.bass)*0.005));
m.t1 = (Math.sin(m.adv)*0.3);
m.t2 = (Math.cos(m.adv)*0.3);
m.t3 = m.adv;
		return m;
	},
		'point_eqs' : function(m) {
m.waver = (Math.sin(((m.sample*6.28)*16))*0.2);
m.xp = Math.sin(((m.sample*6.28)+m.waver));
m.yp = Math.cos(((m.sample*6.28)+m.waver));
m.scale = Math.sin((((m.sample*6.28)*3)-(m.t3*3)));
m.scale2 = ((Math.sin((((m.sample*6.28)*5)-(m.t3*2.9)))*0.5)+0.5);
m.xp = ((m.xp*m.scale)*m.scale2);
m.yp = ((m.yp*m.scale)*m.scale2);
m.x = (((-m.xp*0.4)*0.7)+0.5);
m.y = (((m.yp*0.5)*0.7)+0.5);
m.rmod = ((Math.sin((m.time*0.2))*0.5)+0.5);
m.rmod = (m.rmod*m.rmod);
m.gmod = ((Math.sin(((m.time*0.2)+2.1))*0.5)+0.5);
m.gmod = (m.gmod*m.gmod);
m.bmod = ((Math.sin(((m.time*0.2)+4.2))*0.5)+0.5);
m.bmod = (m.bmod*m.bmod);
m.r = m.rmod;
m.g = m.gmod;
m.b = m.bmod;
		return m;
	},
		'init_eqs_str' : ('adv=0;'),
		'frame_eqs_str' : ('adv=adv+(bass*bass)*0.005;\n' + 't1=sin(adv)*0.3;\n' + 't2=cos(adv)*0.3;\n' + 't3=adv;'),
		'point_eqs_str' : ('waver=sin(sample*6.28*16)*0.2;\n' + 'xp=sin(sample*6.28+waver);\n' + 'yp=cos(sample*6.28+waver);\n' + 'scale=sin(sample*6.28*3 - t3*3);\n' + 'scale2=sin(sample*6.28*5 - t3*2.9)*0.5 + 0.5;\n' + 'xp=xp*scale*scale2;\n' + 'yp=yp*scale*scale2;\n' + 'x=-xp*0.4*0.7 + 0.5;\n' + 'y=yp*0.5*0.7 + 0.5;\n' + 'rmod=sin(time*0.2)*0.5+0.5;\n' + 'rmod=rmod*rmod;\n' + 'gmod=sin(time*0.2+2.1)*0.5+0.5;\n' + 'gmod=gmod*gmod;\n' + 'bmod=sin(time*0.2+4.2)*0.5+0.5;\n' + 'bmod=bmod*bmod;\n' + 'r=rmod;\n' + 'g=gmod;\n' + 'b=bmod;'),

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
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.628319,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.778288,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.69,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.81,
			rad : 0.972354,
			x : 0.5,
			y : 0.5,
			ang : 0.1884,
			sides : 16.0,
			border_r : 0.59,
			},
		'init_eqs' : function(m) {
m.bmod = 0;
m.rmod = 0;
m.adv = 0;
m.gmod = 0;

			m.rkeys = ['adv'];
			return m;
		},
		'frame_eqs' : function(m) {
m.adv = (m.adv+(((m.bass*m.bass)*m.bass)*0.01));
m.x = (0.5-((Math.cos((m.y+m.bass_att))*0.005)*m.treb_att));
m.y = (0.5-(((Math.sin((m.x+(m.bass_att*5)))*0.005)*m.rad)*m.treb_att));
m.x = (m.x+(Math.sin((m.adv*0.5))*0.15));
m.y = (m.y+(Math.cos(m.adv)*0.05));
m.ang = (0.65-(Math.sin((m.adv*0.5))*0.65));
m.rmod = ((Math.sin((m.time*0.2))*0.5)+0.5);
m.gmod = ((Math.sin(((m.time*0.2)+2.1))*0.5)+0.5);
m.bmod = ((Math.sin(((m.time*0.2)+4.2))*0.5)+0.5);
m.r = (0.9+(m.rmod*0.1));
m.g = (0.9+(m.gmod*0.1));
m.b = (0.9+(m.bmod*0.1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('adv=adv+bass*bass*bass*0.01;\n' + 'x=0.5- (cos(y+bass_att )*0.005)*treb_att;\n' + 'y=0.5- (sin(x+bass_att*5 )*0.005*rad)*treb_att;\n' + 'x=x+sin(adv*0.5)*0.15;\n' + 'y=y+cos(adv)*0.05;\n' + 'ang=0.65 - sin(adv*0.5)*0.65;\n' + 'rmod=sin(time*0.2)*0.5+0.5;\n' + 'gmod=sin(time*0.2+2.1)*0.5+0.5;\n' + 'bmod=sin(time*0.2+4.2)*0.5+0.5;\n' + 'r=0.9 + rmod*0.1;\n' + 'g=0.9 + gmod*0.1;\n' + 'b=0.9 + bmod*0.1;'),

		},
		{
		'baseVals' : {
			r2 : 0.7,
			a : 0.4,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.251327,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.2,
			tex_zoom : 1.905855,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.6,
			a2 : 0.1,
			r : 0.0,
			border_g : 1.0,
			rad : 0.414899,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 0.5,
			},
		'init_eqs' : function(m) {
m.bmod = 0;
m.rmod = 0;
m.adv = 0;
m.gmod = 0;

			m.rkeys = ['adv'];
			return m;
		},
		'frame_eqs' : function(m) {
m.adv = (m.adv+((m.bass*m.bass)*0.03));
m.x = ((Math.sin(m.adv)*0.5)+0.5);
m.y = ((Math.cos(m.adv)*0.5)+0.5);
m.r = m.bass_att;
m.r2 = m.bass_att;
m.rmod = ((Math.sin((m.time*0.2))*0.5)+0.5);
m.gmod = ((Math.sin(((m.time*0.2)+2.1))*0.5)+0.5);
m.bmod = ((Math.sin(((m.time*0.2)+4.2))*0.5)+0.5);
m.b2 = (0.2+(m.rmod*0.7));
m.r2 = (0.2+(m.gmod*0.7));
m.g2 = (0.2+(m.bmod*0.7));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('adv=adv+(bass*bass)*0.03;\n' + 'x=sin(adv)*0.5+0.5;\n' + 'y=cos(adv)*0.5+0.5;\n' + 'r=bass_att;\n' + 'r2=bass_att;\n' + 'rmod=sin(time*0.2)*0.5+0.5;\n' + 'gmod=sin(time*0.2+2.1)*0.5+0.5;\n' + 'bmod=sin(time*0.2+4.2)*0.5+0.5;\n' + 'b2=0.2 + rmod*0.7;\n' + 'r2=0.2 + gmod*0.7;\n' + 'g2=0.2 + bmod*0.7;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 1.256637,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.498314,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.599577,
			x : 0.2,
			y : 0.8,
			ang : 0.0,
			sides : 24.0,
			border_r : 1.0,
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
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.753982,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.698924,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.3,
			r : 1.0,
			border_g : 1.0,
			rad : 1.468144,
			x : 0.5,
			y : 0.5,
			ang : 0.753982,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.bmod = 0;
m.rmod = 0;
m.gmod = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rmod = ((Math.sin((m.time*0.2))*0.5)+0.5);
m.rmod = (m.rmod*m.rmod);
m.gmod = ((Math.sin(((m.time*0.2)+2.1))*0.5)+0.5);
m.gmod = (m.gmod*m.gmod);
m.bmod = ((Math.sin(((m.time*0.2)+4.2))*0.5)+0.5);
m.bmod = (m.bmod*m.bmod);
m.r2 = (0.8+(m.rmod*0.2));
m.g2 = (0.8+(m.gmod*0.2));
m.b2 = (0.8+(m.bmod*0.2));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rmod=sin(time*0.2)*0.5+0.5;\n' + 'rmod=rmod*rmod;\n' + 'gmod=sin(time*0.2+2.1)*0.5+0.5;\n' + 'gmod=gmod*gmod;\n' + 'bmod=sin(time*0.2+4.2)*0.5+0.5;\n' + 'bmod=bmod*bmod;\n' + 'r2=0.8+rmod*0.2;\n' + 'g2=0.8+gmod*0.2;\n' + 'b2=0.8+bmod*0.2;'),

		}
],
	'warp' : ('shader_body {\n' + '   vec2 v_1;\n' + '   vec3 ret_2;\n' + '  v_1 = ((normalize(\n' + '    (uv - 0.5)\n' + '  ) * aspect.xy) * (texsize.zw * 3.0));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (v_1 * 2.5));\n' + '  tmpvar_4 = texture2D (sampler_main, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv + (v_1 * 5.5));\n' + '  tmpvar_6 = texture2D (sampler_main, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (v_1 * -4.0));\n' + '  tmpvar_8 = texture2D (sampler_main, P_9);\n' + '  ret_2 = (0.25 * ((tmpvar_3.xyz + tmpvar_4.xyz) + (tmpvar_6.xyz + tmpvar_8.xyz)));\n' + '  ret_2 = (ret_2 - 0.01);\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   float ang2_1;\n' + '   vec2 uv2_2;\n' + '   vec3 ret_3;\n' + '  ang2_1 = ((ang * 0.1591549) + (time * 0.025));\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = (3.0 + floor((rand_preset.z * 5.95)));\n' + '  ang2_1 = (fract((ang2_1 * tmpvar_4)) / tmpvar_4);\n' + '  ang2_1 = (abs((ang2_1 - \n' + '    (0.5 / tmpvar_4)\n' + '  )) * 6.283185);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = cos(ang2_1);\n' + '  tmpvar_5.y = sin(ang2_1);\n' + '  uv2_2 = (0.5 + ((\n' + '    (0.4 * (rad * sqrt(dot (texsize.xy, texsize.xy))))\n' + '   * tmpvar_5) * texsize.zw));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv2_2);\n' + '  ret_3 = tmpvar_6.xyz;\n' + '  ret_3 = (ret_3 * 1.333);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('q1 = (bass_att + mid_att + treb_att) /3;\n' + 'q2 = time + 1000;\n' + 'bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.4)*0.95+1.4);\n' + 'treb_thresh = above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.5)*0.85+1.2);\n' + 'bass_on = above(bass_thresh,1.9);\n' + 'treb_on = above(treb_thresh,1.9);\n' + 'swapcolour = bass_on - treb_on;\n' + 'red_aim = if(equal(swapcolour,1),1,if(equal(swapcolour,0),0.9,0.7));\n' + 'green_aim = if(equal(swapcolour,1),0.7,if(equal(swapcolour,0),0.3,0.6));\n' + 'blue_aim = if(equal(swapcolour,1),0,if(equal(swapcolour,0),0.2,0.8));\n' + 'red = red + (red_aim - red)*0.5;\n' + 'green = green + (green_aim - green)*0.5;\n' + 'blue = blue + (blue_aim - blue)*0.5;\n' + 'wave_r = red;\n' + 'wave_g = green;\n' + 'wave_b = blue;'),
	'pixel_eqs_str' : ('dy = -0.1*(q1-1)*log(2-(abs(y*2 - 1.8)));\n' + 'dy = below(dy,0.02)*dy - 0.02;\n' + 'dy = dy + 0.01*(sin((x*q2*0.483) + (y*q2*1.238)) + sin((x*q2*1.612) + (y*q2*0.648)));'),
};

return pmap;
});
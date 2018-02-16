define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 0.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.01,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.005,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.99951,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 2.518,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.5,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.ag = 0;
m.q = 0;
m.cdelay1 = 0;
m.cdelay2 = 0;
m.rd = 0;
m.star = 0;
m.musictime = 0;
m.zm = 0;
m.counter1 = 0;
m.counter2 = 0;
m.colorcounter = 0;
m.ypos = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.counter1 = ifcond(equal(m.counter2, 1), ifcond(equal(m.counter1, 1), 0, (m.counter1+0.2)), 1);
m.counter2 = ifcond(equal(m.counter1, 1), ifcond(equal(m.counter2, 1), 0, (m.counter2+0.2)), 1);
m.cdelay1 = ifcond(equal(m.cdelay2, 1), 1, ifcond(equal(mod(m.colorcounter,2), 1), ifcond(equal(m.counter1, 1), 2, 0), ifcond(equal(m.counter2, 1), 2, 0)));
m.cdelay2 = ifcond(equal(m.cdelay1, 2), 1, 0);
m.colorcounter = ifcond(above(m.colorcounter, 7), 0, ifcond(equal(m.cdelay1, 1), (m.colorcounter+1), m.colorcounter));
m.ib_r = (0.5*ifcond(equal(m.colorcounter, 1), 1, ifcond(equal(m.colorcounter, 2), 1, ifcond(equal(m.colorcounter, 3), 1, ifcond(equal(m.colorcounter, 4), Math.sin((m.counter2+2.1)), ifcond(equal(m.colorcounter, 5), 0, ifcond(equal(m.colorcounter, 6), 0, Math.sin(m.counter1))))))));
m.ib_g = (0.5*ifcond(equal(m.colorcounter, 1), 0, ifcond(equal(m.colorcounter, 2), Math.sin((m.counter2*0.5)), ifcond(equal(m.colorcounter, 3), Math.sin(((m.counter1+1.75)*0.4)), ifcond(equal(m.colorcounter, 4), 1, ifcond(equal(m.colorcounter, 5), 1, ifcond(equal(m.colorcounter, 6), Math.sin((m.counter2+2)), 0)))))));
m.ib_b = ifcond(equal(m.colorcounter, 1), Math.sin((m.counter1+2.1)), ifcond(equal(m.colorcounter, 2), 0, ifcond(equal(m.colorcounter, 3), 0, ifcond(equal(m.colorcounter, 4), 0, ifcond(equal(m.colorcounter, 5), Math.sin(m.counter1), ifcond(equal(m.colorcounter, 6), 1, 1))))));
m.ob_r = (m.ib_r-0.5);
m.ob_g = (m.ib_g-0.5);
m.ob_b = (m.ib_b-0.5);
m.q1 = m.ib_r;
m.q2 = m.ib_g;
m.q3 = m.ib_b;
m.decay = 0.9999;
m.musictime = (m.musictime+(((m.mid*m.mid)*m.mid)*0.02));
m.xpos = (Math.sin((m.musictime*0.6))*0.3);
m.ypos = (Math.sin((m.musictime*0.4))*0.3);
m.q4 = m.xpos;
m.q5 = m.ypos;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = 1;
m.cx = (0.5+m.q4);
m.cy = (0.5-m.q5);
m.rd = sqrt((sqr((((m.x-0.5)-m.q4)*2))+sqr((((m.y-0.5)+m.q5)*1.5))));
m.zm = 1;
m.ag = Math.atan(div(((m.y-0.5)+m.q5),((m.x-0.5)-m.q4)));
m.star = (Math.sin(((m.ag*6)+m.time))*(2-m.rd));
m.zm = (m.zm+div(m.star,20));
m.sx = m.zm;
m.sy = m.zm;
m.rot = div((div(above(m.rd, 0.7),(m.rd+2))*(m.bass_att*0.1)),m.rd);
m.rot = (m.rot+(0.05*Math.sin((((m.rad*13.5)+(m.q2*1.3))+(m.q*1.31)))));
m.zoom = (m.zoom+(0.05*Math.sin(((((m.ang*10.0)+(m.rad*7.5))+(m.q2*1.63))+m.q))));
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
	'warp' : (''),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '  uv_1 = (0.05 + (0.9 * uv));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv_1);\n' + '  ret_2 = tmpvar_3.xyz;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv_1);\n' + '  ret_2 = (abs((\n' + '    ((tmpvar_4.xyz * scale1) + bias1)\n' + '   - ret_2)) * 6.0);\n' + '  ret_2 = (ret_2 * 1.333);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_a = 0;\n' + 'counter1 = if(equal(counter2,1),if(equal(counter1,1),0,counter1+.2),1);\n' + 'counter2 = if(equal(counter1,1),if(equal(counter2,1),0,counter2+.2),1);\n' + 'cdelay1 = if(equal(cdelay2,1),1,if(equal(colorcounter%2,1),if(equal(counter1,1),2 ,0), if(equal(counter2,1),2,0)));\n' + 'cdelay2 = if(equal(cdelay1,2),1,0);\n' + 'colorcounter = if(above(colorcounter,7),0,if(equal(cdelay1,1),colorcounter+1,colorcounter));\n' + 'ib_r = .5*if(equal(colorcounter,1),1, if(equal(colorcounter,2),1, if(equal(colorcounter,3),1, if(equal(colorcounter,4),sin(counter2+2.1), if(equal(colorcounter,5),0, if(equal(colorcounter,6),0,sin(counter1)))))));\n' + 'ib_g = .5*if(equal(colorcounter,1),0, if(equal(colorcounter,2),sin(counter2*.5), if(equal(colorcounter,3),sin((counter1+1.75)*.4), if(equal(colorcounter,4),1, if(equal(colorcounter,5),1, if(equal(colorcounter,6),sin(counter2+2),0))))));\n' + 'ib_b = if(equal(colorcounter,1),sin(counter1+2.1), if(equal(colorcounter,2),0, if(equal(colorcounter,3),0, if(equal(colorcounter,4),0, if(equal(colorcounter,5),sin(counter1), if(equal(colorcounter,6),1,1))))));\n' + 'ob_r=ib_r-0.5;\n' + 'ob_g=ib_g-0.5;\n' + 'ob_b=ib_b-0.5;\n' + 'q1=ib_r;\n' + 'q2=ib_g;\n' + 'q3=ib_b;\n' + 'decay = 0.9999;\n' + 'musictime=musictime+(mid*mid*mid)*0.02;\n' + 'xpos=sin(musictime*0.6)*0.3;\n' + 'ypos=sin(musictime*0.4)*0.3;\n' + 'q4=xpos;\n' + 'q5=ypos;'),
	'pixel_eqs_str' : ('zoom=1;\n' + 'cx=0.5+q4;\n' + 'cy=0.5-q5;\n' + 'rd=sqrt( sqr( (x-0.5-q4)*2) + sqr( (y-0.5+q5)*1.5 ) );\n' + 'zm=1;\n' + 'ag=atan( (y-0.5+q5)/(x-0.5-q4) );\n' + 'star=sin(ag*6+time)*(2-rd);\n' + 'zm=zm+star/20;\n' + 'sx=zm;\n' + 'sy=zm;\n' + 'rot=above(rd,0.7)/(rd+2)*(bass_att*0.1)/rd;\n' + 'rot=rot+0.05*sin(rad*13.5 + q2*1.3 + q*1.31);\n' + 'zoom=zoom+0.05*sin(ang*10.0 + rad*7.5 + q2*1.63 + q);'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.399,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.286,
		echo_alpha : 0.3,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.0101,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.488,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.63,
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
		ob_a : 0.1,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.dx_r = 0;
m.dy_r = 0;
m.thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (m.wave_r+(0.5*Math.sin((m.time*1.13))));
m.wave_g = (m.wave_g+(0.5*Math.sin((m.time*1.23))));
m.wave_b = (m.wave_b+(0.5*Math.sin((m.time*1.33))));
m.wave_x = (m.wave_x+(0.2*Math.sin((0.32*m.time))));
m.wave_y = (m.wave_y+(0.2*Math.cos((0.32*m.time))));
m.ob_r = m.wave_r;
m.ob_g = m.wave_g;
m.ob_b = m.wave_b;
		m.rkeys = ['sy','sx','rot','zoom','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.zoom = (m.zoom+(0.0095*((Math.sin((10*m.ang))+(Math.sin(Math.sin((((m.time*2)*Math.sin(m.time))*m.rad)))*0.3))-(Math.cos(m.rad)*0.1))));
m.rot = (m.rot+((0.08*Math.abs((0.746-m.rad)))*Math.sin(((2.2*(0.5-m.rad))+(5.7*Math.sin((0.1*m.time)))))));
m.sx = (m.sx+(((0.01*((0.99*1)-m.rad))*Math.sin((0.733*m.time)))*below(Math.sin(m.time), 0)));
m.sy = (m.sy+(((0.01*((0.99*1)-m.rad))*Math.cos((0.953*m.time)))*above(Math.sin(m.time), 0)));
m.zoom = (m.zoom-((0.015*((0.5*Math.abs(3))-m.rad))*below(m.rad, 1.5)));
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
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wx = 0;
m.branch = 0;
m.wy = 0;
m.d = 0;
m.wa = 0;
m.sc = 0;
m.wainc = 0;

			m.rkeys = ['wx','wy','d','wa','sc'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.branch = Math.floor(rand(2));
m.wx = ifcond(equal(m.sc, 0), 0.5, m.wx);
m.wy = ifcond(equal(m.sc, 0), 0, m.wy);
m.wx = ifcond(equal(m.sc, 1), 0.5, m.wx);
m.wy = ifcond(equal(m.sc, 1), 0.1, m.wy);
m.d = ifcond(below(m.sc, 2), 0.3, (0.7*m.d));
m.wainc = ifcond(equal(m.branch, 1), (0.2+Math.sin(m.time)), -0.2);
m.wa = ifcond(below(m.sc, 2), (3.1415927*0.5), (m.wa+m.wainc));
m.wx = ifcond(above(m.sc, 2), (m.wx+(Math.cos(m.wa)*m.d)), m.wx);
m.wy = ifcond(above(m.sc, 2), (m.wy+(Math.sin(m.wa)*m.d)), m.wy);
m.sc = ifcond(equal(m.sc, 11), 0, (m.sc+1));
m.a = ifcond(below(m.sc, 2), 0, 0.1);
m.x = m.wx;
m.y = m.wy;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('branch=int(rand(2));\n' + 'wx=if(equal(sc,0),.5,wx);\n' + 'wy=if(equal(sc,0),0,wy);\n' + 'wx=if(equal(sc,1),.5,wx);\n' + 'wy=if(equal(sc,1),.1,wy);\n' + 'd=if(below(sc,2),.3,.7*d);\n' + 'wainc=if(equal(branch,1),.2+sin(time),-.2);\n' + 'wa=if(below(sc,2),3.1415927*.5,wa+wainc);\n' + 'wx=if(above(sc,2),wx+cos(wa)*d,wx);\n' + 'wy=if(above(sc,2),wy+sin(wa)*d,wy);\n' + 'sc=if(equal(sc,11),0,sc+1);\n' + 'a=if(below(sc,2),0,.1);\n' + 'x=wx;\n' + 'y=wy;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
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
m.wx = 0;
m.branch = 0;
m.wy = 0;
m.d = 0;
m.wa = 0;
m.sc = 0;
m.wainc = 0;

			m.rkeys = ['wx','wy','d','wa','sc'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.branch = Math.floor(rand(2));
m.wx = ifcond(equal(m.sc, 0), 0.5, m.wx);
m.wy = ifcond(equal(m.sc, 0), 1, m.wy);
m.wx = ifcond(equal(m.sc, 1), 0.5, m.wx);
m.wy = ifcond(equal(m.sc, 1), 0.9, m.wy);
m.d = ifcond(below(m.sc, 2), 0.3, (0.7*m.d));
m.wainc = ifcond(equal(m.branch, 1), (0.2+Math.sin(m.time)), -0.2);
m.wa = ifcond(below(m.sc, 2), (3.1415927*1.5), (m.wa+m.wainc));
m.wx = ifcond(above(m.sc, 2), (m.wx+(Math.cos(m.wa)*m.d)), m.wx);
m.wy = ifcond(above(m.sc, 2), (m.wy+(Math.sin(m.wa)*m.d)), m.wy);
m.sc = ifcond(equal(m.sc, 11), 0, (m.sc+1));
m.a = ifcond(below(m.sc, 2), 0, 0.1);
m.x = m.wx;
m.y = m.wy;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('branch=int(rand(2));\n' + 'wx=if(equal(sc,0),.5,wx);\n' + 'wy=if(equal(sc,0),1,wy);\n' + 'wx=if(equal(sc,1),.5,wx);\n' + 'wy=if(equal(sc,1),.9,wy);\n' + 'd=if(below(sc,2),.3,.7*d);\n' + 'wainc=if(equal(branch,1),.2+sin(time),-.2);\n' + 'wa=if(below(sc,2),3.1415927*1.5,wa+wainc);\n' + 'wx=if(above(sc,2),wx+cos(wa)*d,wx);\n' + 'wy=if(above(sc,2),wy+sin(wa)*d,wy);\n' + 'sc=if(equal(sc,11),0,sc+1);\n' + 'a=if(below(sc,2),0,.1);\n' + 'x=wx;\n' + 'y=wy;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
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
m.wx = 0;
m.branch = 0;
m.wy = 0;
m.d = 0;
m.wa = 0;
m.sc = 0;
m.wainc = 0;

			m.rkeys = ['wx','wy','d','wa','sc'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.branch = Math.floor(rand(2));
m.wx = ifcond(equal(m.sc, 0), 0, m.wx);
m.wy = ifcond(equal(m.sc, 0), 0.5, m.wy);
m.wx = ifcond(equal(m.sc, 1), 0.1, m.wx);
m.wy = ifcond(equal(m.sc, 1), 0.5, m.wy);
m.d = ifcond(below(m.sc, 2), 0.3, (0.7*m.d));
m.wainc = ifcond(equal(m.branch, 1), (0.25+Math.cos(m.time)), -0.25);
m.wa = ifcond(below(m.sc, 2), (3.1415927*2), (m.wa+m.wainc));
m.wx = ifcond(above(m.sc, 2), (m.wx+(Math.cos(m.wa)*m.d)), m.wx);
m.wy = ifcond(above(m.sc, 2), (m.wy+(Math.sin(m.wa)*m.d)), m.wy);
m.sc = ifcond(equal(m.sc, 11), 0, (m.sc+1));
m.a = ifcond(below(m.sc, 2), 0, 0.1);
m.x = m.wx;
m.y = m.wy;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('branch=int(rand(2));\n' + 'wx=if(equal(sc,0),0,wx);\n' + 'wy=if(equal(sc,0),.5,wy);\n' + 'wx=if(equal(sc,1),.1,wx);\n' + 'wy=if(equal(sc,1),.5,wy);\n' + 'd=if(below(sc,2),.3,.7*d);\n' + 'wainc=if(equal(branch,1),.25+cos(time),-.25);\n' + 'wa=if(below(sc,2),3.1415927*2,wa+wainc);\n' + 'wx=if(above(sc,2),wx+cos(wa)*d,wx);\n' + 'wy=if(above(sc,2),wy+sin(wa)*d,wy);\n' + 'sc=if(equal(sc,11),0,sc+1);\n' + 'a=if(below(sc,2),0,.1);\n' + 'x=wx;\n' + 'y=wy;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
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
m.wx = 0;
m.branch = 0;
m.wy = 0;
m.d = 0;
m.wa = 0;
m.sc = 0;
m.wainc = 0;

			m.rkeys = ['wx','wy','d','wa','sc'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.branch = Math.floor(rand(2));
m.wx = ifcond(equal(m.sc, 0), 1, m.wx);
m.wy = ifcond(equal(m.sc, 0), 0.5, m.wy);
m.wx = ifcond(equal(m.sc, 1), 0.9, m.wx);
m.wy = ifcond(equal(m.sc, 1), 0.5, m.wy);
m.d = ifcond(below(m.sc, 2), 0.3, (0.7*m.d));
m.wainc = ifcond(equal(m.branch, 1), (0.25+Math.cos(m.time)), -0.25);
m.wa = ifcond(below(m.sc, 2), (3.1415927*1), (m.wa+m.wainc));
m.wx = ifcond(above(m.sc, 2), (m.wx+(Math.cos(m.wa)*m.d)), m.wx);
m.wy = ifcond(above(m.sc, 2), (m.wy+(Math.sin(m.wa)*m.d)), m.wy);
m.sc = ifcond(equal(m.sc, 11), 0, (m.sc+1));
m.a = ifcond(below(m.sc, 2), 0, 0.1);
m.x = m.wx;
m.y = m.wy;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('branch=int(rand(2));\n' + 'wx=if(equal(sc,0),1,wx);\n' + 'wy=if(equal(sc,0),.5,wy);\n' + 'wx=if(equal(sc,1),.9,wx);\n' + 'wy=if(equal(sc,1),.5,wy);\n' + 'd=if(below(sc,2),.3,.7*d);\n' + 'wainc=if(equal(branch,1),.25+cos(time),-.25);\n' + 'wa=if(below(sc,2),3.1415927*1,wa+wainc);\n' + 'wx=if(above(sc,2),wx+cos(wa)*d,wx);\n' + 'wy=if(above(sc,2),wy+sin(wa)*d,wy);\n' + 'sc=if(equal(sc,11),0,sc+1);\n' + 'a=if(below(sc,2),0,.1);\n' + 'x=wx;\n' + 'y=wy;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.5,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.63904,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.46815,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.1);
m.sides = Math.floor(Math.abs((Math.sin((m.time*0.5))*7)));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=time*.1;\n' + 'sides=int(abs(sin(time*.5)*7));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.05,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.02743,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.1);
m.r = (0.7+(Math.sin(m.time)*0.3));
m.g = (0.7+(Math.cos(m.time)*0.3));
m.b = (0.7+(Math.sin((m.time+0.12))*0.3));
m.rad = (m.rad+((m.treb_att*m.bass_att)*0.5));
m.x = (0.5+(Math.sin(m.time)*0.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=time*.1;\n' + 'r=.7+(sin(time)*.3);\n' + 'g=.7+(cos(time)*.3);\n' + 'b=.7+(sin(time+.12)*.3);\n' + 'rad=rad+(treb_att*bass_att*.5);\n' + 'x=.5+(sin(time)*.5);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 0.05,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.02508,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 5.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (m.time*0.25);
m.g = (0.7+(Math.sin(m.time)*0.3));
m.b = (0.7+(Math.cos(m.time)*0.3));
m.r = (0.7+(Math.sin((m.time+0.12))*0.3));
m.r2 = (0.7+(Math.sin(m.time)*0.3));
m.g2 = (0.7+(Math.cos(m.time)*0.3));
m.b2 = (0.7+(Math.sin((m.time+0.12))*0.3));
m.rad = (m.rad+((m.treb_att*m.bass_att)*0.5));
m.y = (0.5+(Math.sin(m.time)*0.25));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=time*.25;\n' + 'g=.7+(sin(time)*.3);\n' + 'b=.7+(cos(time)*.3);\n' + 'r=.7+(sin(time+.12)*.3);\n' + 'r2=.7+(sin(time)*.3);\n' + 'g2=.7+(cos(time)*.3);\n' + 'b2=.7+(sin(time+.12)*.3);\n' + 'rad=rad+(treb_att*bass_att*.5);\n' + 'y=.5+(sin(time)*.25);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.1,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.60804,
			additive : 1.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.01,
			r : 1.0,
			border_g : 1.0,
			rad : 2.66717,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_fc_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = mix (uv, uv_orig, vec2(0.33, 0.33));\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_fc_main, tmpvar_3);\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = max (ret_1, (tmpvar_4.xyz * 0.95));\n' + '   vec2 x_6;\n' + '  x_6 = (uv - uv_orig);\n' + '  ret_1 = (((\n' + '    mix (tmpvar_5, (floor((\n' + '      (tmpvar_5 * vec3(7.0, 6.0, 8.0))\n' + '     + 0.25)) / vec3(7.0, 6.0, 8.0)), vec3(0.1, 0.1, 0.1))\n' + '   * 0.99) - 0.0025) - ((1.0 - \n' + '    clamp ((sqrt(dot (x_6, x_6)) * 40.0), 0.0, 1.0)\n' + '  ) * 0.003));\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = wave_r + 0.5*sin(time*1.13);\n' + 'wave_g = wave_g + 0.5*sin(time*1.23);\n' + 'wave_b = wave_b + 0.5*sin(time*1.33);\n' + 'wave_x = wave_x + 0.2*sin(0.32*time);\n' + 'wave_y = wave_y + 0.2*cos(0.32*time);\n' + 'ob_r = wave_r;\n' + 'ob_g = wave_g;\n' + 'ob_b = wave_b;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'zoom = zoom + 0.0095*(sin(10*ang) + sin(sin(time*2*sin(time)*rad))*0.3 - cos(rad)*0.1);\n' + 'rot = rot + 0.08*abs(0.746-rad)*sin(2.2*(0.5-rad)+5.7*sin(0.1*time));\n' + 'sx = sx + 0.01*(0.99*1-rad)*sin(0.733*time)*below(sin(time),0);\n' + 'sy = sy + 0.01*(0.99*1-rad)*cos(0.953*time)*above(sin(time),0);\n' + 'zoom = zoom - 0.015*(0.5*abs(3)-rad)*below(rad,1.5);'),
};

return pmap;
});
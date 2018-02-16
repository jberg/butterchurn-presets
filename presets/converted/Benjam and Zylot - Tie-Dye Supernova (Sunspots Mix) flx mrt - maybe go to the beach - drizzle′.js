define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 23.52,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 17.832,
		wave_scale : 15.0,
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
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.006,
		mv_dy : 0.04,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.59,
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
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 0.088,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 0.83,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.9,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.ib_bass = 0;
m.ag = 0;
m.q8 = 0;
m.gamma = 0;
m.ak = 0;
m.nx = 0;
m.ny = 0;
m.basstime = 0;
m.block = 0;
m.cdelay1 = 0;
m.shapechange = 0;
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
m.rainbow_speed = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.rainbow_speed = 0.2;
m.monitor = m.rainbow_speed;
m.counter1 = ifcond(equal(m.counter2, 1), ifcond(equal(m.counter1, 1), 0, (m.counter1+m.rainbow_speed)), 1);
m.counter2 = ifcond(equal(m.counter1, 1), ifcond(equal(m.counter2, 1), 0, (m.counter2+m.rainbow_speed)), 1);
m.cdelay1 = ifcond(equal(m.cdelay2, 1), 1, ifcond(equal(mod(m.colorcounter,2), 1), ifcond(equal(m.counter1, 1), 2, 0), ifcond(equal(m.counter2, 1), 2, 0)));
m.cdelay2 = ifcond(equal(m.cdelay1, 2), 1, 0);
m.colorcounter = ifcond(above(m.colorcounter, 7), 0, ifcond(equal(m.cdelay1, 1), (m.colorcounter+1), m.colorcounter));
m.ib_r = (0.5*ifcond(equal(m.colorcounter, 1), 1, ifcond(equal(m.colorcounter, 2), 1, ifcond(equal(m.colorcounter, 3), 1, ifcond(equal(m.colorcounter, 4), Math.sin((m.counter2+2.1)), ifcond(equal(m.colorcounter, 5), 0, ifcond(equal(m.colorcounter, 6), 0, Math.sin(m.counter1))))))));
m.ib_g = (0.5*ifcond(equal(m.colorcounter, 1), 0, ifcond(equal(m.colorcounter, 2), Math.sin((m.counter2*0.5)), ifcond(equal(m.colorcounter, 3), Math.sin(((m.counter1+1.75)*0.4)), ifcond(equal(m.colorcounter, 4), 1, ifcond(equal(m.colorcounter, 5), 1, ifcond(equal(m.colorcounter, 6), Math.sin((m.counter2+2)), 0)))))));
m.ib_b = ifcond(equal(m.colorcounter, 1), Math.sin((m.counter1+2.1)), ifcond(equal(m.colorcounter, 2), 0, ifcond(equal(m.colorcounter, 3), 0, ifcond(equal(m.colorcounter, 4), 0, ifcond(equal(m.colorcounter, 5), Math.sin(m.counter1), ifcond(equal(m.colorcounter, 6), 1, 1))))));
m.ib_bass = Math.min(((m.bass_att*1)+0.2), 1);
m.ib_r = (m.ib_r*m.ib_bass);
m.ib_g = (m.ib_g*m.ib_bass);
m.ib_b = (m.ib_b*m.ib_bass);
m.gamma = (1+(Math.min(m.bass, 1)*0.3));
m.ob_r = (m.ib_r-0.5);
m.ob_g = (m.ib_g-0.5);
m.ob_b = (m.ib_b-0.5);
m.q1 = m.ib_r;
m.q2 = m.ib_g;
m.q3 = m.ib_b;
m.decay = 0.99;
m.musictime = (m.musictime+((m.bass*m.bass)*0.003));
m.basstime = (m.basstime+((m.bass*m.bass)*0.03));
m.xpos = (Math.sin((m.musictime*0.6))*0.2);
m.ypos = (Math.sin((m.musictime*0.4))*0.2);
m.q4 = m.xpos;
m.q5 = m.ypos;
m.q6 = m.basstime;
		m.rkeys = ['dx','dy'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = 1;
m.cx = (0.5+m.q4);
m.cy = (0.5-m.q5);
m.dx = ((m.dx+(0.003*Math.sin((((m.y*2)-1)*64))))+(0.001*Math.sin((((m.y*2)-1)*96))));
m.dy = ((m.dy+(0.004*Math.cos((((m.x*2)-1)*64))))+(0.002*Math.cos((((m.x*2)-1)*96))));
m.ak = ((-Math.sin((((6*m.rad)+(mod((mod(m.q1,5)*3),5)*m.ang))+m.q1))*((1-m.rad)+(0.2*Math.sin((0.54*m.q1)))))*above(m.rad, 0));
m.block = ifcond(below(m.ak, -0.15), m.ak, 0);
m.dx = (((m.dx+(0.005*Math.sin((((m.y*2)-1)*48))))+(0.001*Math.tan((((m.y*2)-1)*64))))+(0.000*Math.tan(((m.ang-3.1415)*8))));
m.dy = (((m.dy+(0.005*Math.sin((((m.x*2)-1)*48))))+(0.001*Math.tan((((m.x*2)-1)*64))))+(0.000*Math.tan(((m.ang-3.1415)*6))));
m.dx = ifcond(m.block, m.dx, ((0.008*Math.sin(((m.x-0.5)*48)))+(0.008*Math.sin(((m.x-0.5)*64)))));
m.dy = ifcond(m.block, m.dy, (0.008*Math.cos(((m.y-0.5)*64))));
m.zoom = ifcond(m.block, 1, 0.97);
m.dx = div(Math.sin(div((1000+Math.sin(m.q8)),m.x)),200);
m.dy = div(Math.cos(div((1000+Math.sin(m.q8)),m.y)),200);
m.rd = sqrt((sqr((((m.x-0.5)-m.q4)*1.7))+sqr((((m.y-0.5)+m.q5)*1.2))));
m.cx = (0.5+m.q4);
m.cy = (0.5-m.q5);
m.zoom = ((m.rd*m.rd)*2);
m.nx = (((m.x-0.5)-m.q4)*2);
m.ny = (((m.y-0.5)+m.q5)*1.5);
m.rd = sqrt((sqr(m.nx)+sqr(m.ny)));
m.ag = Math.atan(div(m.ny,m.nx));
m.zm = (1.1-div(m.rd,4));
m.shapechange = ((Math.tan((m.q6*0.2))*2)+2);
m.star = ((((Math.sin(((m.ag*(2+m.shapechange))+m.q6))*(1-m.rd))*0.5)+0.5)+(pow(((Math.tan(((m.rd*6.28)*32))*0.5)+0.5), 2)*0.001));
m.star = Math.min(m.star, 8);
m.star = Math.max(m.star, -8);
m.star = (((m.star*m.star)*3)-0.4);
m.zm = (m.zm+(m.star*0.1));
m.sx = m.zm;
m.sy = m.zm;
m.rot = ((((above(m.rd, 0.7)*(m.rd-0.7))*Math.sin((m.time*0.3)))*0.6)*-Math.sin((m.ag*6)));
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
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.03333,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (Math.floor(rand(100))*0.01);
m.y = (Math.floor(rand(100))*0.01);
m.a = ifcond(above(mod(m.frame,7), 0), 0, 1);
m.a2 = ifcond(above(mod(m.frame,7), 0), 0, 1);
m.border_a = 0;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = int(rand(100))*.01;\n' + 'y = int(rand(100))*.01;\n' + 'a = if(above(frame%7,0),0,1);\n' + 'a2 = if(above(frame%7,0),0,1);\n' + 'border_a = 0;'),

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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 color_2;\n' + '   vec2 uv2_3;\n' + '   vec3 ret_4;\n' + '  uv2_3 = (uv + _qa.z);\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = (texture2D (sampler_noise_lq, uv2_3) - 0.5).xyz;\n' + '  color_2 = tmpvar_5;\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = (texture2D (sampler_noise_mq, uv2_3) - 0.5).xyz;\n' + '  color_2 = (color_2 + tmpvar_6);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (texture2D (sampler_noise_hq, uv2_3) - 0.5).xyz;\n' + '  color_2 = (color_2 + tmpvar_7);\n' + '  uv_1 = (uv + (color_2 * 0.01).xy);\n' + '   mat2 tmpvar_8;\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = cos(_qc.x);\n' + '  tmpvar_8[0].x = tmpvar_9;\n' + '   float tmpvar_10;\n' + '  tmpvar_10 = sin(_qc.x);\n' + '  tmpvar_8[0].y = -(tmpvar_10);\n' + '  tmpvar_8[1].x = tmpvar_10;\n' + '  tmpvar_8[1].y = tmpvar_9;\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (((uv_1 - 0.5) * 0.9) + 0.5);\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (((\n' + '    (((uv_1 - 0.5) * (0.97 + (rad * 0.02))) * tmpvar_8)\n' + '   + 0.5) + (\n' + '    ((tmpvar_11.xyz * scale1) + bias1)\n' + '   * \n' + '    (uv_1.y * 0.1)\n' + '  ).xy) - 0.01);\n' + '  tmpvar_13 = texture2D (sampler_main, P_14);\n' + '  ret_4 = tmpvar_13.xyz;\n' + '  ret_4 = (ret_4 - 0.001);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 1.0;\n' + '  tmpvar_15.xyz = ret_4;\n' + '  vec4 ret4 = tmpvar_15;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 crisp_1;\n' + '   vec3 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv).xyz;\n' + '  crisp_1 = tmpvar_2;\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv - (0.01 * crisp_1).xy);\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ((crisp_1 + clamp (\n' + '    (3.0 * (((tmpvar_3.xyz * scale1) + bias1) - vec3(0.1, 0.1, 0.2)))\n' + '  , 0.0, 1.0)) * 1.3);\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_a = 0;\n' + 'rainbow_speed=0.2;\n' + 'monitor=rainbow_speed;\n' + 'counter1 = if(equal(counter2,1),if(equal(counter1,1),0,counter1+rainbow_speed),1);\n' + 'counter2 = if(equal(counter1,1),if(equal(counter2,1),0,counter2+rainbow_speed),1);\n' + 'cdelay1 = if(equal(cdelay2,1),1,if(equal(colorcounter%2,1),if(equal(counter1,1),2 ,0), if(equal(counter2,1),2,0)));\n' + 'cdelay2 = if(equal(cdelay1,2),1,0);\n' + 'colorcounter = if(above(colorcounter,7),0,if(equal(cdelay1,1),colorcounter+1,colorcounter));\n' + 'ib_r = .5*if(equal(colorcounter,1),1, if(equal(colorcounter,2),1, if(equal(colorcounter,3),1, if(equal(colorcounter,4),sin(counter2+2.1), if(equal(colorcounter,5),0, if(equal(colorcounter,6),0,sin(counter1)))))));\n' + 'ib_g = .5*if(equal(colorcounter,1),0, if(equal(colorcounter,2),sin(counter2*.5), if(equal(colorcounter,3),sin((counter1+1.75)*.4), if(equal(colorcounter,4),1, if(equal(colorcounter,5),1, if(equal(colorcounter,6),sin(counter2+2),0))))));\n' + 'ib_b = if(equal(colorcounter,1),sin(counter1+2.1), if(equal(colorcounter,2),0, if(equal(colorcounter,3),0, if(equal(colorcounter,4),0, if(equal(colorcounter,5),sin(counter1), if(equal(colorcounter,6),1,1))))));\n' + 'ib_bass=min(bass_att*1+0.2 , 1);\n' + 'ib_r=ib_r*ib_bass;\n' + 'ib_g=ib_g*ib_bass;\n' + 'ib_b=ib_b*ib_bass;\n' + 'gamma=1+min(bass,1)*0.3;\n' + 'ob_r=ib_r-0.5;\n' + 'ob_g=ib_g-0.5;\n' + 'ob_b=ib_b-0.5;\n' + 'q1=ib_r;\n' + 'q2=ib_g;\n' + 'q3=ib_b;\n' + 'decay = 0.99;\n' + 'musictime=musictime+(bass*bass)*0.003;\n' + 'basstime=basstime+(bass*bass)*0.03;\n' + 'xpos=sin(musictime*0.6)*0.2;\n' + 'ypos=sin(musictime*0.4)*0.2;\n' + 'q4=xpos;\n' + 'q5=ypos;\n' + 'q6=basstime;'),
	'pixel_eqs_str' : ('zoom=1;\n' + 'cx=0.5+q4;\n' + 'cy=0.5-q5;\n' + 'dx=dx+0.003*sin((y*2-1)*64)+0.001*sin((y*2-1)*96);\n' + 'dy=dy+0.004*cos((x*2-1)*64)+0.002*cos((x*2-1)*96);\n' + 'ak=-sin(6*rad+((q1%5)*3)%5*ang+q1)*(1-rad+.2*sin(.54*q1))*above(rad,0);\n' + 'block=if(below(ak,-.15),ak,0);\n' + 'dx=dx+0.005*sin((y*2-1)*48)+0.001*tan((y*2-1)*64)+0.000*tan((ang-3.1415)*8);\n' + 'dy =dy+0.005*sin((x*2-1)*48)+0.001*tan((x*2-1)*64)+0.000*tan((ang-3.1415)*6);\n' + 'dx=if(block,dx,0.008*sin((x-0.5)*48)+0.008*sin((x-0.5)*64));\n' + 'dy=if(block,dy,0.008*cos((y-0.5)*64));\n' + 'zoom = if(block,1,0.97);\n' + 'dx = sin((1000+sin(q8))/x)/200;\n' + 'dy = cos((1000+sin(q8))/y)/200;\n' + 'rd=sqrt( sqr( (x-0.5-q4)*1.7) + sqr( (y-0.5+q5)*1.2 ) );\n' + 'cx=0.5+q4;\n' + 'cy=0.5-q5;\n' + 'zoom=(rd*rd)*2;\n' + 'nx=(x-0.5-q4)*2;\n' + 'ny=(y-0.5+q5)*1.5;\n' + 'rd=sqrt( sqr(nx) + sqr(ny) );\n' + 'ag=atan( ny/nx );\n' + 'zm=(1.1-(rd/4));\n' + 'shapechange=tan(q6*0.2)*2+2;\n' + 'star=(sin(ag*(2+shapechange)+q6)*(1-rd)*0.5 + 0.5)+pow((tan(rd*6.28*32)*0.5+0.5),2)*0.001;\n' + 'star=min(star,8);\n' + 'star=max(star,-8);\n' + 'star=star*star*3 -0.4;\n' + 'zm=zm+star*0.1;\n' + 'sx=zm;\n' + 'sy=zm;\n' + 'rot=above(rd,0.7)*(rd-0.7)*sin(time*0.3)*0.6 * -sin(ag*6);'),
};

return pmap;
});
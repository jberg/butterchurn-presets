define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 0.9803,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 1.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : -0.28,
		mv_dy : 0.0,
		mv_a : 0.8,
		fshader : 10.0,
		wave_r : 0.0,
		ib_r : 1.0,
		mv_b : 0.0,
		echo_zoom : 1.905,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : -0.8,
		decay : 0.96,
		wave_a : 0.009,
		ob_g : 0.0,
		ib_a : 0.47,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.vol3 = 0;
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.midrun = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.q9 = 0;
m.bassrun = 0;
m.q30 = 0;
m.q20 = 0;
m.trebrun = 0;
m.vol = 0;
m.q26 = 0;
m.pi23 = 0;
m.vol2 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.bassrun = (m.bass+m.bassrun);
m.trebrun = (m.treb+m.trebrun);
m.midrun = (m.mid+m.midrun);
m.vol = (((m.bassrun+m.midrun)+m.trebrun)*0.03);
m.vol2 = (m.vol*0.001);
m.warp = 0;
m.zoom = (1.4+(0.15*Math.cos((m.vol*0.42))));
m.rot = (0.01*Math.sin((1.34*m.vol)));
m.dx = (0.005*Math.sin((m.vol*0.646)));
m.dy = (0.005*Math.sin((m.vol*0.314)));
m.cx = (0.5+(0.05*Math.sin((0.497*m.vol))));
m.cy = (0.5+(0.05*Math.sin((0.413*m.vol))));
m.pi23 = ((4*Math.asin(-1))*0.33333333333333);
m.q6 = ((Math.sin((m.vol-(0*m.pi23)))+1)*0.5);
m.q7 = ((Math.sin((m.vol-(1*m.pi23)))+1)*0.5);
m.q8 = ((Math.sin((m.vol-(2*m.pi23)))+1)*0.5);
m.mv_r = m.q6;
m.mv_g = m.q7;
m.mv_b = m.q8;
m.q9 = (m.q6+1);
m.vol3 = (((m.bass+m.mid)+m.treb)*0.3);
m.q26 = m.vol3;
m.q20 = m.vol3;
m.q1 = 0.5;
m.q2 = 0.5;
m.q3 = (m.q8*0.3);
m.q4 = (div(m.q8,m.q6)*2);
m.q30 = (m.vol3*2.5);
m.q3 = (m.q30*1.33);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
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
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.006,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.1,
			r : 0.0,
			border_g : 1.0,
			rad : 0.01,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 20.0,
			border_r : 1.0,
			num_inst : 1024.0,
			},
		'init_eqs' : function(m) {
m.size = 0;
m.pigtemp = 0;
m.nc = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.zs = 0;
m.x2 = 0;
m.y3 = 0;
m.ys = 0;
m.x3 = 0;
m.xs = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.pigtemp = Math.floor(pow(4, ((m.bass+m.treb)+m.mid)));
m.num_inst = ifcond(above(m.pigtemp, 1024), 1024, m.pigtemp);
m.t1 = div(m.time,5);
m.t2 = div(m.time,6);
m.rad = (0.005+div(m.bass,100));
m.t3 = div(m.bass_att,70);
m.b2 = ((m.treb*0.7)-div(m.bass,2));
m.r = div(m.instance,m.num_inst);
m.g = Math.abs((div(m.treb_att,5)-m.bass));
m.size = (0.3+div(m.bass_att,300));
m.nc = sqrt(m.num_inst);
m.xs = (Math.sin(div((6.28*mod(m.instance,m.nc)),m.nc))*Math.sin(div((3.14*Math.floor(div(m.instance,m.nc))),m.nc)));
m.ys = (Math.cos(div((6.28*mod(m.instance,m.nc)),m.nc))*Math.sin(div((3.14*Math.floor(div(m.instance,m.nc))),m.nc)));
m.zs = Math.cos(div((3.14*Math.floor(div(m.instance,m.nc))),m.nc));
m.y1 = ((m.ys*Math.cos(m.t1))-(m.zs*Math.sin(m.t1)));
m.z1 = ((m.ys*Math.sin(m.t1))+(m.zs*Math.cos(m.t1)));
m.x1 = ((m.z1*Math.sin(m.t2))+(m.xs*Math.cos(m.t2)));
m.z2 = ((m.z1*Math.cos(m.t2))-(m.xs*Math.sin(m.t2)));
m.x2 = ((m.x1*Math.cos(m.t3))-(m.y1*Math.sin(m.t3)));
m.y2 = ((m.y1*Math.cos(m.t3))+(m.x1*Math.sin(m.t3)));
m.x3 = m.x2;
m.y3 = m.y2;
m.z3 = m.z2;
m.x = (0.5+(m.size*div(m.x3,(1+(m.z3*m.size)))));
m.y = (0.5+(m.size*div(m.y3,(1+(m.z3*m.size)))));
m.a = below(m.z3, 0);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('pigtemp=int(pow(4,bass+treb+mid));\n' + 'num_inst=if(above(pigtemp,1024),1024,pigtemp);\n' + 't1 = time/5;\n' + 't2 = time/6;\n' + 'rad = 0.005+bass/100;\n' + 't3 = bass_att/70;\n' + 'b2 = treb*0.7-bass/2;\n' + 'r = instance/num_inst;\n' + 'g = abs(treb_att/5-bass);\n' + 'size = 0.3+bass_att/300;\n' + 'nc = sqrt(num_inst);\n' + 'xs=sin(6.28*(instance%nc)/nc)*sin(3.14*int(instance/nc)/nc);\n' + 'ys=cos(6.28*(instance%nc)/nc)*sin(3.14*int(instance/nc)/nc);\n' + 'zs=cos(3.14*int(instance/nc)/nc);\n' + 'y1 = ys*cos(t1)-zs*sin(t1);\n' + 'z1 = ys*sin(t1)+zs*cos(t1);\n' + 'x1 = z1*sin(t2)+xs*cos(t2);\n' + 'z2 = z1*cos(t2)-xs*sin(t2);\n' + 'x2 = x1*cos(t3)-y1*sin(t3);\n' + 'y2 = y1*cos(t3)+x1*sin(t3);\n' + 'x3 = x2;\n' + 'y3 = y2;\n' + 'z3 = z2;\n' + 'x = 0.5 + size*(x3/(1+z3*size));\n' + 'y = 0.5 + size*(y3/(1+z3*size));\n' + 'a=below(z3,0);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.5,
			textured : 0.0,
			g2 : 0.5,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			num_inst : 33.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.trans = 0;
m.trans2 = 0;
m.trans3 = 0;
m.q30 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.trans = ((div(Math.floor(rand(Math.floor(m.q30))),5)+m.instance)-m.instance);
m.trans2 = ((div(Math.floor(rand(Math.floor(m.q30))),5)+m.instance)-m.instance);
m.trans3 = ((div(Math.floor(rand(Math.floor(m.q30))),5)+m.instance)-m.instance);
m.a = m.trans;
m.a2 = m.trans2;
m.border_a = m.trans3;
m.x = (((m.q1+(((Math.floor(rand(15))*0.01)*m.bass_att)*ifcond(equal(Math.floor(rand(2)), 1), 1, -1)))+m.instance)-m.instance);
m.y = (((m.q2+(((Math.floor(rand(15))*0.01)*m.bass_att)*ifcond(equal(Math.floor(rand(2)), 1), 1, -1)))+m.instance)-m.instance);
m.rad = (((0.09+div(Math.floor(rand(Math.floor(m.q30))),15))+m.instance)-m.instance);
m.r = (((Math.floor(rand(m.q3))*0.1)+m.instance)-m.instance);
m.g = (((Math.floor(rand(m.q3))*0.1)+m.instance)-m.instance);
m.b = (((Math.floor(rand(m.q3))*0.1)+m.instance)-m.instance);
m.r2 = (((Math.floor(rand(m.q3))*0.1)+m.instance)-m.instance);
m.g2 = (((Math.floor(rand(m.q3))*0.1)+m.instance)-m.instance);
m.b2 = (((Math.floor(rand(m.q3))*0.1)+m.instance)-m.instance);
m.border_r = (((Math.floor(rand(m.q3))*0.1)+m.instance)-m.instance);
m.border_g = (((Math.floor(rand(m.q3))*0.1)+m.instance)-m.instance);
m.border_b = (((Math.floor(rand(m.q3))*0.1)+m.instance)-m.instance);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trans = int(rand(int(q30)))/5+instance-instance;\n' + 'trans2 = int(rand(int(q30)))/5+instance-instance;\n' + 'trans3 = int(rand(int(q30)))/5+instance-instance;\n' + 'a = trans;\n' + 'a2 = trans2;\n' + 'border_a = trans3;\n' + 'x = q1 + int(rand(15))*0.01*bass_att*if(equal(int(rand(2)),1),1,-1)+instance-instance;\n' + 'y = q2 + int(rand(15))*0.01*bass_att*if(equal(int(rand(2)),1),1,-1)+instance-instance;\n' + 'rad = .09 + int(rand(int(q30)))/15+instance-instance;\n' + 'r=int(rand(q3))*.1+instance-instance;\n' + 'g=int(rand(q3))*.1+instance-instance;\n' + 'b=int(rand(q3))*.1+instance-instance;\n' + 'r2=int(rand(q3))*.1+instance-instance;\n' + 'g2=int(rand(q3))*.1+instance-instance;\n' + 'b2=int(rand(q3))*.1+instance-instance;\n' + 'border_r=int(rand(q3))*.1+instance-instance;\n' + 'border_g=int(rand(q3))*.1+instance-instance;\n' + 'border_b=int(rand(q3))*.1+instance-instance;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.5,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.5,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 32.0,
			border_r : 1.0,
			num_inst : 7.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.trans = 0;
m.trans2 = 0;
m.trans3 = 0;
m.q30 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.trans = ((div(Math.floor(rand(Math.floor(m.q30))),5)+m.instance)-m.instance);
m.trans2 = ((div(Math.floor(rand(Math.floor(m.q30))),5)+m.instance)-m.instance);
m.trans3 = ((div(Math.floor(rand(Math.floor(m.q30))),5)+m.instance)-m.instance);
m.a = m.trans;
m.a2 = m.trans2;
m.border_a = m.trans3;
m.x = (((m.q1+(((Math.floor(rand(15))*0.01)*m.mid_att)*ifcond(equal(Math.floor(rand(2)), 1), 1, -1)))+m.instance)-m.instance);
m.y = (((m.q2+(((Math.floor(rand(15))*0.01)*m.mid_att)*ifcond(equal(Math.floor(rand(2)), 1), 1, -1)))+m.instance)-m.instance);
m.rad = (((0.09+div(Math.floor(rand(Math.floor(m.q30))),15))+m.instance)-m.instance);
m.r = (((Math.floor(rand(m.q3))*0.1)+m.instance)-m.instance);
m.g = (((Math.floor(rand(m.q3))*0.1)+m.instance)-m.instance);
m.b = (((Math.floor(rand(m.q3))*0.1)+m.instance)-m.instance);
m.r2 = (((Math.floor(rand(m.q3))*0.1)+m.instance)-m.instance);
m.g2 = (((Math.floor(rand(m.q3))*0.1)+m.instance)-m.instance);
m.b2 = (((Math.floor(rand(m.q3))*0.1)+m.instance)-m.instance);
m.border_r = (((Math.floor(rand(m.q3))*0.1)+m.instance)-m.instance);
m.border_g = (((Math.floor(rand(m.q3))*0.1)+m.instance)-m.instance);
m.border_b = (((Math.floor(rand(m.q3))*0.1)+m.instance)-m.instance);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trans = int(rand(int(q30)))/5+instance-instance;\n' + 'trans2 = int(rand(int(q30)))/5+instance-instance;\n' + 'trans3 = int(rand(int(q30)))/5+instance-instance;\n' + 'a = trans;\n' + 'a2 = trans2;\n' + 'border_a = trans3;\n' + 'x = q1 + int(rand(15))*0.01*mid_att*if(equal(int(rand(2)),1),1,-1)+instance-instance;\n' + 'y = q2 + int(rand(15))*0.01*mid_att*if(equal(int(rand(2)),1),1,-1)+instance-instance;\n' + 'rad = .09 + int(rand(int(q30)))/15+instance-instance;\n' + 'r=int(rand(q3))*.1+instance-instance;\n' + 'g=int(rand(q3))*.1+instance-instance;\n' + 'b=int(rand(q3))*.1+instance-instance;\n' + 'r2=int(rand(q3))*.1+instance-instance;\n' + 'g2=int(rand(q3))*.1+instance-instance;\n' + 'b2=int(rand(q3))*.1+instance-instance;\n' + 'border_r=int(rand(q3))*.1+instance-instance;\n' + 'border_g=int(rand(q3))*.1+instance-instance;\n' + 'border_b=int(rand(q3))*.1+instance-instance;'),

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = tmpvar_7.x;\n' + '  tmpvar_13.y = tmpvar_12.x;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = (uv + ((tmpvar_13 * texsize.zw) * 8.0));\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15.x = tmpvar_7.y;\n' + '  tmpvar_15.y = tmpvar_12.y;\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = (uv + ((tmpvar_15 * texsize.zw) * 8.0));\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = tmpvar_7.z;\n' + '  tmpvar_17.y = tmpvar_12.z;\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18 = (uv + ((tmpvar_17 * texsize.zw) * 8.0));\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_main, tmpvar_14);\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_main, tmpvar_14);\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_blur3, tmpvar_14);\n' + '  ret_1.x = (tmpvar_19.x - ((tmpvar_20.xyz - \n' + '    ((tmpvar_21.xyz * scale3) + bias3)\n' + '  ).x * 0.02));\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_main, tmpvar_16);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_main, tmpvar_16);\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_blur3, tmpvar_16);\n' + '  ret_1.y = (tmpvar_22.y - ((tmpvar_23.xyz - \n' + '    ((tmpvar_24.xyz * scale3) + bias3)\n' + '  ).y * 0.02));\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_main, tmpvar_18);\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26 = texture2D (sampler_main, tmpvar_18);\n' + '   vec4 tmpvar_27;\n' + '  tmpvar_27 = texture2D (sampler_blur3, tmpvar_18);\n' + '  ret_1.z = (tmpvar_25.z - ((tmpvar_26.xyz - \n' + '    ((tmpvar_27.xyz * scale3) + bias3)\n' + '  ).z * 0.02));\n' + '  ret_1 = (ret_1 - ((ret_1.yzx * 0.2) - 0.06));\n' + '   vec4 tmpvar_28;\n' + '  tmpvar_28.w = 1.0;\n' + '  tmpvar_28.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_28;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   float dy_1;\n' + '   float dx_2;\n' + '   vec3 ret1_3;\n' + '   vec2 uv1_4;\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, uv).xyz;\n' + '  ret1_3 = tmpvar_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.y = 0.0;\n' + '  tmpvar_6.x = texsize.z;\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7.x = 0.0;\n' + '  tmpvar_7.y = texsize.w;\n' + '   vec2 P_8;\n' + '  P_8 = (uv - tmpvar_6);\n' + '   vec2 P_9;\n' + '  P_9 = (uv + tmpvar_6);\n' + '   float tmpvar_10;\n' + '  tmpvar_10 = (texture2D (sampler_main, P_8).xyz - texture2D (sampler_main, P_9).xyz).x;\n' + '  dx_2 = tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - tmpvar_7);\n' + '   vec2 P_12;\n' + '  P_12 = (uv + tmpvar_7);\n' + '   float tmpvar_13;\n' + '  tmpvar_13 = (texture2D (sampler_main, P_11).xyz - texture2D (sampler_main, P_12).xyz).x;\n' + '  dy_1 = tmpvar_13;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = dx_2;\n' + '  tmpvar_14.y = dy_1;\n' + '  uv1_4 = ((0.3 * cos(\n' + '    (((uv - 0.5) * 2.0) + 1.7)\n' + '  )) - (2.0 * tmpvar_14));\n' + '  ret1_3 = ((-(ret1_3) / 4.0) + ((6.0 * vec3(\n' + '    clamp ((0.03 / sqrt(dot (uv1_4, uv1_4))), 0.0, 1.0)\n' + '  )) * (-0.08 + ret1_3)));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15.w = 1.0;\n' + '  tmpvar_15.xyz = ret1_3;\n' + '  vec4 ret4 = tmpvar_15;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('bassrun=bass+bassrun;\n' + 'trebrun=treb+trebrun;\n' + 'midrun=mid+midrun;\n' + 'vol=(bassrun+midrun+trebrun)*.03;\n' + 'vol2=vol*.001;\n' + 'warp = 0;\n' + 'zoom = 1.4 +0.15*cos(vol*0.42);\n' + 'rot = 0.01*sin(1.34*vol);\n' + 'dx = 0.005*sin(vol*0.646);\n' + 'dy=0.005*sin(vol*0.314);\n' + 'cx = 0.5 + 0.05*sin(0.497*vol);\n' + 'cy = 0.5 +0.05*sin(0.413*vol);\n' + 'pi23=4*asin(-1)*.33333333333333;\n' + 'q6= (sin(vol-0*pi23)+1)*.5;\n' + 'q7= (sin(vol-1*pi23)+1)*.5;\n' + 'q8=(sin(vol-2*pi23)+1)*.5;\n' + 'mv_r=q6;\n' + 'mv_g=q7;\n' + 'mv_b=q8;\n' + 'q9=q6+1;\n' + 'vol3=(bass+mid+treb)*.3;\n' + 'q26=vol3;\n' + 'q20=vol3;\n' + 'q1=.5;\n' + 'q2=.5;\n' + 'q3=q8*.3;\n' + 'q4=q8/q6*2;\n' + 'q30=vol3*2.5;\n' + 'q3=q30*1.33;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
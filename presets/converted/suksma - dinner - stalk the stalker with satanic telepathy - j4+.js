define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.0,
		wave_g : 1.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.0,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.01,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.47412,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 10.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 2.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.75,
		warpanimspeed : 5.278,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0303,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 3.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.midrun = 0;
m.bassrun = 0;
m.q30 = 0;
m.count = 0;
m.q20 = 0;
m.trebrun = 0;
m.q20 = div(Math.floor(rand(3140)),1000);
		return m;
	},
	'frame_eqs' : function(m) {
m.count = ifcond(below(m.count, 9), (m.count+1), 0);
m.q1 = 0.5;
m.q2 = 0.5;
m.q3 = m.count;
m.zoom = ((1+(0.065*m.bass_att))+(0.05*m.bass));
m.monitor = m.q3;
m.q30 = ((m.bass+m.mid)+m.treb);
m.bassrun = (m.bassrun+m.bass);
m.trebrun = (m.trebrun+m.treb);
m.midrun = (m.midrun+m.mid);
m.q20 = ((m.bassrun+m.midrun)+m.trebrun);
m.monitor = m.q20;
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
			sides : 3.0,
			border_r : 1.0,
			num_inst : 33.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.greyq3 = 0;
m.q2 = 0;
m.q3 = 0;
m.trans = 0;
m.trans2 = 0;
m.trans3 = 0;
m.q30 = 0;
m.q20 = 0;
m.greyred = 0;

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
m.ang = ((Math.sin((m.q20*0.003))+m.instance)-m.instance);
m.greyq3 = Math.floor(rand(m.q3));
m.greyred = ((Math.floor(rand(2))+m.instance)-m.instance);
m.r = (((m.greyq3*0.1)+m.instance)-m.instance);
m.g = ifcond(equal(m.greyred, 1), 0, (m.greyq3*0.1));
m.b = ifcond(equal(m.greyred, 1), 0, (m.greyq3*0.1));
m.greyq3 = Math.floor(rand(m.q3));
m.greyred = ((Math.floor(rand(2))+m.instance)-m.instance);
m.r2 = (((m.greyq3*0.1)+m.instance)-m.instance);
m.g2 = ifcond(equal(m.greyred, 1), 0, (m.greyq3*0.1));
m.b2 = ifcond(equal(m.greyred, 1), 0, (m.greyq3*0.1));
m.greyq3 = Math.floor(rand(m.q3));
m.greyred = ((Math.floor(rand(2))+m.instance)-m.instance);
m.border_r = (((m.greyq3*0.1)+m.instance)-m.instance);
m.border_g = ifcond(equal(m.greyred, 1), 0, (m.greyq3*0.1));
m.border_b = ifcond(equal(m.greyred, 1), 0, (m.greyq3*0.1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trans = int(rand(int(q30)))/5+instance-instance;\n' + 'trans2 = int(rand(int(q30)))/5+instance-instance;\n' + 'trans3 = int(rand(int(q30)))/5+instance-instance;\n' + 'a = trans;\n' + 'a2 = trans2;\n' + 'border_a = trans3;\n' + 'x = q1 + int(rand(15))*0.01*bass_att*if(equal(int(rand(2)),1),1,-1)+instance-instance;\n' + 'y = q2 + int(rand(15))*0.01*bass_att*if(equal(int(rand(2)),1),1,-1)+instance-instance;\n' + 'rad = .09 + int(rand(int(q30)))/15+instance-instance;\n' + 'ang=sin(q20*.003)+instance-instance;\n' + 'greyq3=int(rand(q3));\n' + 'greyred=int(rand(2))+instance-instance;\n' + 'r=greyq3*.1+instance-instance;\n' + 'g=if(equal(greyred,1),0,greyq3*.1);\n' + 'b=if(equal(greyred,1),0,greyq3*.1);\n' + 'greyq3=int(rand(q3));\n' + 'greyred=int(rand(2))+instance-instance;\n' + 'r2=greyq3*.1+instance-instance;\n' + 'g2=if(equal(greyred,1),0,greyq3*.1);\n' + 'b2=if(equal(greyred,1),0,greyq3*.1);\n' + 'greyq3=int(rand(q3));\n' + 'greyred=int(rand(2))+instance-instance;\n' + 'border_r=greyq3*.1+instance-instance;\n' + 'border_g=if(equal(greyred,1),0,greyq3*.1);\n' + 'border_b=if(equal(greyred,1),0,greyq3*.1);'),

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
			sides : 3.0,
			border_r : 1.0,
			num_inst : 7.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.greyq3 = 0;
m.q2 = 0;
m.q3 = 0;
m.trans = 0;
m.trans2 = 0;
m.trans3 = 0;
m.q30 = 0;
m.q20 = 0;
m.greyred = 0;

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
m.ang = ((Math.sin((m.q20*0.003))+m.instance)-m.instance);
m.greyq3 = Math.floor(rand(m.q3));
m.greyred = ((Math.floor(rand(2))+m.instance)-m.instance);
m.r = (((m.greyq3*0.1)+m.instance)-m.instance);
m.g = ifcond(equal(m.greyred, 1), 0, (m.greyq3*0.1));
m.b = ifcond(equal(m.greyred, 1), 0, (m.greyq3*0.1));
m.greyq3 = Math.floor(rand(m.q3));
m.greyred = ((Math.floor(rand(2))+m.instance)-m.instance);
m.r2 = (((m.greyq3*0.1)+m.instance)-m.instance);
m.g2 = ifcond(equal(m.greyred, 1), 0, (m.greyq3*0.1));
m.b2 = ifcond(equal(m.greyred, 1), 0, (m.greyq3*0.1));
m.greyq3 = Math.floor(rand(m.q3));
m.greyred = ((Math.floor(rand(2))+m.instance)-m.instance);
m.border_r = (((m.greyq3*0.1)+m.instance)-m.instance);
m.border_g = ifcond(equal(m.greyred, 1), 0, (m.greyq3*0.1));
m.border_b = ifcond(equal(m.greyred, 1), 0, (m.greyq3*0.1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trans = int(rand(int(q30)))/5+instance-instance;\n' + 'trans2 = int(rand(int(q30)))/5+instance-instance;\n' + 'trans3 = int(rand(int(q30)))/5+instance-instance;\n' + 'a = trans;\n' + 'a2 = trans2;\n' + 'border_a = trans3;\n' + 'x = q1 + int(rand(15))*0.01*mid_att*if(equal(int(rand(2)),1),1,-1)+instance-instance;\n' + 'y = q2 + int(rand(15))*0.01*mid_att*if(equal(int(rand(2)),1),1,-1)+instance-instance;\n' + 'rad = .09 + int(rand(int(q30)))/15+instance-instance;\n' + 'ang=sin(q20*.003)+instance-instance;\n' + 'greyq3=int(rand(q3));\n' + 'greyred=int(rand(2))+instance-instance;\n' + 'r=greyq3*.1+instance-instance;\n' + 'g=if(equal(greyred,1),0,greyq3*.1);\n' + 'b=if(equal(greyred,1),0,greyq3*.1);\n' + 'greyq3=int(rand(q3));\n' + 'greyred=int(rand(2))+instance-instance;\n' + 'r2=greyq3*.1+instance-instance;\n' + 'g2=if(equal(greyred,1),0,greyq3*.1);\n' + 'b2=if(equal(greyred,1),0,greyq3*.1);\n' + 'greyq3=int(rand(q3));\n' + 'greyred=int(rand(2))+instance-instance;\n' + 'border_r=greyq3*.1+instance-instance;\n' + 'border_g=if(equal(greyred,1),0,greyq3*.1);\n' + 'border_b=if(equal(greyred,1),0,greyq3*.1);'),

		},
		{
		'baseVals' : {
			r2 : 0.5,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.5,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			num_inst : 33.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.greyq3 = 0;
m.q2 = 0;
m.q3 = 0;
m.trans = 0;
m.trans2 = 0;
m.trans3 = 0;
m.q30 = 0;
m.q20 = 0;
m.greyred = 0;

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
m.x = (((m.q1+(((Math.floor(rand(15))*0.01)*m.treb_att)*ifcond(equal(Math.floor(rand(2)), 1), 1, -1)))+m.instance)-m.instance);
m.y = (((m.q2+(((Math.floor(rand(15))*0.01)*m.treb_att)*ifcond(equal(Math.floor(rand(2)), 1), 1, -1)))+m.instance)-m.instance);
m.rad = (((0.09+div(Math.floor(rand(Math.floor(m.q30))),15))+m.instance)-m.instance);
m.ang = ((Math.sin((m.q20*0.003))+m.instance)-m.instance);
m.greyq3 = Math.floor(rand(m.q3));
m.greyred = ((Math.floor(rand(2))+m.instance)-m.instance);
m.r = (((m.greyq3*0.1)+m.instance)-m.instance);
m.g = ifcond(equal(m.greyred, 1), 0, (m.greyq3*0.1));
m.b = ifcond(equal(m.greyred, 1), 0, (m.greyq3*0.1));
m.greyq3 = Math.floor(rand(m.q3));
m.greyred = ((Math.floor(rand(2))+m.instance)-m.instance);
m.r2 = (((m.greyq3*0.1)+m.instance)-m.instance);
m.g2 = ifcond(equal(m.greyred, 1), 0, (m.greyq3*0.1));
m.b2 = ifcond(equal(m.greyred, 1), 0, (m.greyq3*0.1));
m.greyq3 = Math.floor(rand(m.q3));
m.greyred = ((Math.floor(rand(2))+m.instance)-m.instance);
m.border_r = (((m.greyq3*0.1)+m.instance)-m.instance);
m.border_g = ifcond(equal(m.greyred, 1), 0, (m.greyq3*0.1));
m.border_b = ifcond(equal(m.greyred, 1), 0, (m.greyq3*0.1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('trans = int(rand(int(q30)))/5+instance-instance;\n' + 'trans2 = int(rand(int(q30)))/5+instance-instance;\n' + 'trans3 = int(rand(int(q30)))/5+instance-instance;\n' + 'a = trans;\n' + 'a2 = trans2;\n' + 'border_a = trans3;\n' + 'x = q1 + int(rand(15))*0.01*treb_att*if(equal(int(rand(2)),1),1,-1)+instance-instance;\n' + 'y = q2 + int(rand(15))*0.01*treb_att*if(equal(int(rand(2)),1),1,-1)+instance-instance;\n' + 'rad = .09 + int(rand(int(q30)))/15+instance-instance;\n' + 'ang=sin(q20*.003)+instance-instance;\n' + 'greyq3=int(rand(q3));\n' + 'greyred=int(rand(2))+instance-instance;\n' + 'r=greyq3*.1+instance-instance;\n' + 'g=if(equal(greyred,1),0,greyq3*.1);\n' + 'b=if(equal(greyred,1),0,greyq3*.1);\n' + 'greyq3=int(rand(q3));\n' + 'greyred=int(rand(2))+instance-instance;\n' + 'r2=greyq3*.1+instance-instance;\n' + 'g2=if(equal(greyred,1),0,greyq3*.1);\n' + 'b2=if(equal(greyred,1),0,greyq3*.1);\n' + 'greyq3=int(rand(q3));\n' + 'greyred=int(rand(2))+instance-instance;\n' + 'border_r=greyq3*.1+instance-instance;\n' + 'border_g=if(equal(greyred,1),0,greyq3*.1);\n' + 'border_b=if(equal(greyred,1),0,greyq3*.1);'),

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
	'comp' : ('shader_body {\n' + '   vec3 ret2_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (texsize.zw * 6.0);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12.x = dot (((\n' + '    (tmpvar_4.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_6.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_12.y = dot (((\n' + '    (tmpvar_8.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_10.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = (uv - (0.25 * tmpvar_12));\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur3, uv);\n' + '  ret_2 = (0.5 * ((tmpvar_14.xyz * scale3) + bias3));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur2, uv);\n' + '  ret_2 = (ret_2 - ((\n' + '    (tmpvar_15.xyz * scale2)\n' + '   + bias2) - 0.01));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur1, uv);\n' + '  ret_2 = (ret_2 + ((tmpvar_16.xyz + \n' + '    (((tmpvar_17.xyz * scale1) + bias1) * 0.15)\n' + '  ) - 0.01));\n' + '  ret_2 = (ret_2 + 0.75);\n' + '   float tmpvar_18;\n' + '  tmpvar_18 = dot (ret_2, vec3(0.32, 0.49, 0.29));\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur3, tmpvar_13);\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_blur1, tmpvar_13);\n' + '   vec3 tmpvar_21;\n' + '  tmpvar_21 = mix (vec3(tmpvar_18), (vec3(tmpvar_18) * (\n' + '    ((tmpvar_19.xyz * scale3) + bias3)\n' + '   - \n' + '    ((tmpvar_20.xyz * scale1) + bias1)\n' + '  )), pow (hue_shader, vec3(tmpvar_18)));\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur3, tmpvar_13);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_blur1, tmpvar_13);\n' + '  ret2_1 = ((-0.5 * (\n' + '    (tmpvar_22.xyz * scale3)\n' + '   + bias3)) + ((tmpvar_23.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_main, tmpvar_13);\n' + '  ret2_1 = (ret2_1 - tmpvar_24.xyz);\n' + '  ret2_1 = (ret2_1 - 0.75);\n' + '   vec3 tmpvar_25;\n' + '  tmpvar_25 = mix (ret2_1, (ret2_1 * (\n' + '    ((tmpvar_14.xyz * scale3) + bias3)\n' + '   - \n' + '    ((tmpvar_17.xyz * scale1) + bias1)\n' + '  )), pow (hue_shader, tmpvar_21));\n' + '  ret2_1 = tmpvar_25;\n' + '   vec3 tmpvar_26;\n' + '  tmpvar_26 = abs((tmpvar_21 - (2.0 * tmpvar_25)));\n' + '  ret_2 = (tmpvar_26 - (0.25 * sqrt(tmpvar_26)));\n' + '  ret_2 = (ret_2 * (ret_2 + (\n' + '    ((bass + mid) + treb)\n' + '   * 0.4)));\n' + '   vec4 tmpvar_27;\n' + '  tmpvar_27.w = 1.0;\n' + '  tmpvar_27.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_27;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('q20=int(rand(3140))/1000;'),
	'frame_eqs_str' : ('count = if(below(count,9),count+1,0);\n' + 'q1 = 0.5;\n' + 'q2 = 0.5;\n' + 'q3 = count;\n' + 'zoom = 1 + 0.065*bass_att+0.05*bass;\n' + 'monitor=q3;\n' + 'q30=bass+mid+treb;\n' + 'bassrun=bassrun+bass;\n' + 'trebrun=trebrun+treb;\n' + 'midrun=midrun+mid;\n' + 'q20=bassrun+midrun+trebrun;\n' + 'monitor=q20;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
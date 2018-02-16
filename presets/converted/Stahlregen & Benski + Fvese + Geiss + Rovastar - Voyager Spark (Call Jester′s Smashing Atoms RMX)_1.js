define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.7,
		wave_g : 0.65,
		ib_g : 0.5,
		mv_x : 31.2,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 2.28,
		wave_scale : 0.759,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.005,
		b2x : 1.0,
		warp : 1.0,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.7,
		ib_r : 0.5,
		mv_b : 0.8,
		echo_zoom : 2.0,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.54,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.5,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 2.5,
		invert : 0.0,
		rot : 0.1,
		wave_thick : 0.0,
		modwavealphaend : 1.65,
		wave_mystery : 0.08,
		decay : 0.98,
		wave_a : 8.2,
		ob_g : 0.0,
		ib_a : 0.3,
		wave_b : 0.7,
		ib_b : 0.5,
		mv_r : 1.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.05,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.peakbass_att = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.meanbass_att = 0;
m.q7 = 0;
m.q8 = 0;
m.yamp = 0;
m.eff_test = 0;
m.xamp = 0;
m.lastbeat = 0;
m.yamptarg = 0;
m.xamptarg = 0;
m.yspeed = 0;
m.xspeed = 0;
m.vol = 0;
m.old_eff_size = 0;
m.ydir = 0;
m.xdir = 0;
m.beatrate = 0;
m.beat = 0;
m.volume = 0;
m.eff_size = 0;
m.ypos = 0;
m.xpos = 0;
m.eff_test = 1;
m.eff_size = 400;
		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.vol = (0.167*(m.bass+m.mid));
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.5*m.vol)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.3*m.vol)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.ib_r = (m.ib_r+((2*Math.sin((m.time*4.132)))*m.xpos));
m.ib_b = (m.ib_b+((2*Math.sin((m.time*4.042)))*m.ypos));
m.ib_g = (m.ib_g+(0.3*Math.sin((m.time*0.631))));
m.ob_g = ((m.beat*m.treb)*0.5);
m.ob_a = (0.5+(0.5*m.beat));
m.ob_size = (m.ob_size+(0.01*m.beat));
m.mv_dx = (0.15*m.xpos);
m.mv_dy = (0.15*m.ypos);
m.mv_l = 0.15;
m.mv_r = (1-m.ib_r);
m.mv_b = (1-m.ib_g);
m.mv_g = (1-m.ib_b);
m.volume = (0.15*(((m.bass_att+m.bass)+m.mid)+m.mid_att));
m.beatrate = ifcond(equal(m.beatrate, 0), 1, ifcond(below(m.volume, 0.01), 1, m.beatrate));
m.lastbeat = ifcond(equal(m.lastbeat, 0), m.time, m.lastbeat);
m.meanbass_att = (0.1*((m.meanbass_att*9)+m.bass_att));
m.peakbass_att = ifcond(above(m.bass_att, m.peakbass_att), m.bass_att, m.peakbass_att);
m.beat = ifcond(above(m.volume, 0.8), ifcond(below((m.peakbass_att-m.bass_att), (0.05*m.peakbass_att)), ifcond(above((m.time-m.lastbeat), (0.1+(0.5*(m.beatrate-0.1)))), 1, 0), 0), 0);
m.beatrate = Math.max(ifcond(m.beat, ifcond(below((m.time-m.lastbeat), (2*m.beatrate)), (0.1*(((m.beatrate*9)+m.time)-m.lastbeat)), m.beatrate), m.beatrate), 0.1);
m.peakbass_att = ifcond(equal(m.beat, 0), ifcond(above((m.time-m.lastbeat), (2*m.beatrate)), (m.peakbass_att*0.95), (m.peakbass_att*0.995)), m.bass_att);
m.lastbeat = ifcond(m.beat, m.time, m.lastbeat);
m.peakbass_att = Math.max(ifcond(m.beat, m.bass_att, m.peakbass_att), (1.1*m.meanbass_att));
m.eff_test = ifcond(below((m.eff_size*200), 500), 1, 0);
m.eff_size = ifcond(m.beat, ((2.5*m.eff_test)+(0.0025*Math.floor(rand(500)))), m.old_eff_size);
m.old_eff_size = m.eff_size;
m.q5 = m.eff_size;
m.mv_l = ifcond(m.eff_test, (m.q5*3), m.mv_l);
m.q6 = (3*m.xpos);
m.q4 = (3*m.ypos);
m.decay = (m.decay+ifcond(m.eff_test, 0, 0.04));
m.wave_r = (1-m.ib_g);
m.wave_g = (1-m.ib_b);
m.wave_b = (1-m.ib_b);
		m.rkeys = ['zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.q1 = (0.4*m.rad);
m.q2 = (0.3*m.rad);
m.q3 = below(m.rad, ((0.1*m.q5)+0.3));
m.q7 = ifcond(m.q3, 0, (10+Math.floor((1*m.rad))));
m.q8 = ifcond(m.q3, 0, (10+Math.floor((1*m.rad))));
m.cx = ifcond(m.q3, 0.5, ((bitand(0,((m.x*m.q7)-m.q1))*div(1,m.q7))+(0.1*m.q1)));
m.cy = ifcond(m.q3, 0.5, ((bitand(0,((m.y*m.q8)-m.q2))*div(1,m.q8))+(0.1*m.q2)));
m.rot = ifcond(m.q3, ((2*m.q6)*m.rad), (((0.1*m.rad)+(0.1*m.bass))+((0.00*m.cx)*m.cy)));
m.zoom = ifcond(m.q3, ((0.3+(0.1*m.q5))+(0.5*m.q4)), m.zoom);
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '   vec2 P_3;\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = (uv - 0.5);\n' + '  P_3 = (tmpvar_4 + 0.5);\n' + '  tmpvar_2 = texture2D (sampler_main, P_3);\n' + '  ret_1.x = tmpvar_2.x;\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = ((tmpvar_4 * 0.9) + 0.5);\n' + '  tmpvar_5 = texture2D (sampler_main, P_6);\n' + '  ret_1.y = tmpvar_5.y;\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = ((tmpvar_4 * 1.15) + 0.5);\n' + '  tmpvar_7 = texture2D (sampler_main, P_8);\n' + '  ret_1.z = tmpvar_7.z;\n' + '  ret_1 = (ret_1 * 0.75);\n' + '   vec4 tmpvar_9;\n' + '  tmpvar_9.w = 1.0;\n' + '  tmpvar_9.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_9;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret_2;\n' + '  uv_1 = (0.05 + (0.9 * uv));\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_main, uv_1);\n' + '  ret_2 = (tmpvar_3.xyz * 4.0);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur1, uv_1);\n' + '  ret_2 = (ret_2 - ((\n' + '    (tmpvar_4.xyz * scale1)\n' + '   + bias1) * 4.0));\n' + '  ret_2 = -(ret_2);\n' + '  ret_2 = ((pow (ret_2, vec3(0.5, 0.5, 0.7)) - 0.1) * 1.1);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('Eff_test =1;\n' + 'Eff_size = 400;'),
	'frame_eqs_str' : ('warp=0;\n' + 'vol = 0.167*(bass+mid);\n' + 'xamptarg = if(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'yamptarg = if(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'ib_r = ib_r + 2*sin(time*4.132)*xpos;\n' + 'ib_b = ib_b + 2*sin(time*4.042)*ypos;\n' + 'ib_g = ib_g + 0.3*sin(time*0.631);\n' + 'ob_g = beat*treb*0.5;\n' + 'ob_a = 0.5 + 0.5*beat;\n' + 'ob_size = ob_size + 0.01*beat;\n' + 'mv_dx =0.15* xpos;\n' + 'mv_dy = 0.15*ypos;\n' + 'mv_l = 0.15;\n' + 'mv_r = 1 - ib_r;\n' + 'mv_b = 1-ib_g;\n' + 'mv_g = 1-ib_b;\n' + 'volume = 0.15*(bass_att+bass+mid+mid_att);\n' + 'beatrate = if(equal(beatrate,0),1,if(below(volume,0.01),1,beatrate));\n' + 'lastbeat = if(equal(lastbeat,0),time,lastbeat);\n' + 'meanbass_att = 0.1*(meanbass_att*9 + bass_att);\n' + 'peakbass_att = if(above(bass_att,peakbass_att),bass_att,peakbass_att);\n' + 'beat = if(above(volume,0.8),if(below(peakbass_att - bass_att, 0.05*peakbass_att),if(above(time - lastbeat,0.1+0.5*(beatrate-0.1)),1,0),0),0);\n' + 'beatrate = max(if(beat,if(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);\n' + 'peakbass_att = if(equal(beat,0),if(above(time - lastbeat,2*beatrate),peakbass_att*0.95,peakbass_att*0.995),bass_att);\n' + 'lastbeat = if(beat,time,lastbeat);\n' + 'peakbass_att = max(if(beat,bass_att,peakbass_att),1.1*meanbass_att);\n' + 'Eff_test = if(below(Eff_size*200,500),1,0);\n' + 'Eff_size = if(beat,2.5*Eff_test+ 0.0025*int(rand(500)),Old_Eff_size);\n' + 'Old_Eff_size =Eff_size;\n' + 'q5 = Eff_size;\n' + 'mv_l = if(Eff_test,q5*3,mv_l);\n' + 'q6 = 3*xpos;\n' + 'q4 = 3*ypos;\n' + 'decay = decay + if(Eff_test,0,0.04);\n' + 'wave_r = 1-ib_g;\n' + 'wave_g = 1-ib_b;\n' + 'wave_b = 1-ib_b;'),
	'pixel_eqs_str' : ('q1 = 0.4*rad;\n' + 'q2= (0.3*rad);\n' + 'q3  = below(rad,0.1*q5+ 0.3);\n' + 'q7 =if(q3,0,10 + int(1*(rad)));\n' + 'q8 =if(q3,0,10 + int(1*(rad)));\n' + 'cx =if(q3,0.5,(0&(x*q7-q1))*(1/q7)+0.1*q1);\n' + 'cy =if(q3,0.5,(0&(y*q8-q2))*(1/q8)+0.1*q2);\n' + 'rot = if(q3,2*q6*rad,0.1*rad+ 0.1*bass+0.00*cx*cy);\n' + 'zoom = if(q3,0.3+0.1*q5+ 0.5*q4,zoom);'),
};

return pmap;
});
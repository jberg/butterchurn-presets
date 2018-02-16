define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.72,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.59,
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
		wave_mode : 1.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 7.5239,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 0.35,
		echo_zoom : 1.006,
		ob_size : 0.01,
		b1ed : 0.25,
		wave_smoothing : 0.36,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.35,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0099,
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
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 2.782,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 0.35,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q3 = 0;
m.q4 = 0;
m.lastpulse = 0;
m.q5 = 0;
m.beatcounter = 0;
m.grid = 0;
m.q8 = 0;
m.q9 = 0;
m.hccp = 0;
m.ccl = 0;
m.lastbeat = 0;
m.oldq8 = 0;
m.beatfreq = 0;
m.beateven = 0;
m.state = 0;
m.pulsefreq = 0;
m.bt = 0;
m.th = 0;
m.beat = 0;
m.minorccl = 0;
m.le = 0;
m.pulse = 0;
m.btblock = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.state = ifcond(above(m.bass_att, 1.3), 3, ifcond(above(m.treb_att, 1.3), 2, 1));
m.wave_b = ifcond(equal(m.state, 2), (0.2+(0.2*Math.sin(m.time))), ifcond(equal(m.state, 3), (0.9+(0.1*Math.sin(m.time))), (0.6+(0.08*Math.sin(m.time)))));
m.wave_g = ifcond(equal(m.state, 2), 0, ifcond(equal(m.state, 3), 0, 0.49));
m.wave_r = ifcond(equal(m.state, 2), (0.7+(0.1*Math.sin((m.time*0.888)))), 0);
m.q1 = m.state;
m.wave_mystery = (m.wave_mystery+((1-m.zoom)*10));
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
m.q3 = div(30,m.fps);
m.ccl = (m.ccl+m.beat);
m.minorccl = (m.minorccl+(0.01*m.le));
m.q4 = m.beat;
m.beatcounter = ifcond(m.beat, (m.beatcounter+1), m.beatcounter);
m.beatcounter = ifcond(above(m.beatcounter, 7), 0, m.beatcounter);
m.beateven = mod(m.beatcounter,2);
m.q5 = m.beateven;
m.q8 = (m.oldq8+(0.005*div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.q9 = (0.0125*(m.q8+m.time));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.grid = (mod(Math.abs(((m.x*18)+(3*m.q5))),2)+mod(Math.abs(((m.y*18)+(3*m.q5))),2));
m.cx = m.grid;
m.cy = m.grid;
m.zoom = (1+(0.5*ifcond(bnot(m.grid), (Math.cos(((m.rad*10)*Math.sin(m.q8)))*0.07), (Math.cos(((m.x*10)*Math.sin(m.q8)))*0.07))));
m.rot = (0.01*(1-m.rad));
m.dx = ((0.4*m.grid)*((0.008*Math.sin((((m.y*2)-1)*48)))+(0.008*Math.sin((((m.y*2)-1)*64)))));
m.dy = ((0.4*m.grid)*((0.008*Math.cos((((m.x*2)-1)*64)))+(0.008*Math.cos((((m.x*2)-1)*48)))));
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
	'warp' : ('shader_body {\n' + '   float LFNoise_1;\n' + '   vec3 pic_2;\n' + '   vec3 ret_3;\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_main, uv);\n' + '  ret_3 = tmpvar_4.xyz;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_noise_lq, tmpvar_5);\n' + '  ret_3 = (ret_3 + ((tmpvar_6.xyz - 0.5) / 256.0));\n' + '   vec2 P_7;\n' + '  P_7 = (uv_orig * aspect.xy);\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = texture2D (sampler_cells, P_7).xyz;\n' + '  pic_2 = tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = ((uv * 0.1) + (time * 0.01));\n' + '   float tmpvar_10;\n' + '  tmpvar_10 = ((texture2D (sampler_noise_lq, P_9).x * 6.0) - 2.0);\n' + '  LFNoise_1 = tmpvar_10;\n' + '   vec2 x_11;\n' + '  x_11 = (uv - uv_orig);\n' + '  ret_3 = (mix (ret_3, pic_2, vec3(clamp (\n' + '    ((1.0 - (abs(\n' + '      (((dot (pic_2, vec3(0.32, 0.49, 0.29)) * 0.8) + 0.1) - (0.5 + (roam_cos.y * 0.25)))\n' + '    ) * (3.0 + \n' + '      (9.0 * rand_preset.x)\n' + '    ))) - LFNoise_1)\n' + '  , 0.0, 1.0))) * (0.97 + (0.03 * \n' + '    clamp ((sqrt(dot (x_11, x_11)) * 200.0), 0.0, 1.0)\n' + '  )));\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12.w = 1.0;\n' + '  tmpvar_12.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_12;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   float ang2_1;\n' + '   vec2 uv2_2;\n' + '   vec3 ret_3;\n' + '  ang2_1 = ((ang * 0.1591549) + _qc.x);\n' + '   float tmpvar_4;\n' + '  tmpvar_4 = (3.0 + floor((rand_preset.z * 2.95)));\n' + '  ang2_1 = (fract((ang2_1 * tmpvar_4)) / tmpvar_4);\n' + '  ang2_1 = (abs((ang2_1 - \n' + '    (0.5 / tmpvar_4)\n' + '  )) * 6.283185);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.x = cos(ang2_1);\n' + '  tmpvar_5.y = sin(ang2_1);\n' + '  uv2_2 = (0.5 + ((\n' + '    (0.4 * (rad * sqrt(dot (texsize.xy, texsize.xy))))\n' + '   * tmpvar_5) * texsize.zw));\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6 = texture2D (sampler_main, uv2_2);\n' + '  ret_3 = tmpvar_6.xyz;\n' + '  ret_3 = (ret_3 * 1.2);\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp=0;\n' + 'state=if(above(bass_att,1.3),3,if(above(treb_att,1.3),2,1));\n' + 'wave_b=if(equal(state,2),.2+.2*sin(time),if(equal(state,3),.9+.1*sin(time),.6+.08*sin(time)));\n' + 'wave_g=if(equal(state,2),0,if(equal(state,3),0,.49));\n' + 'wave_r=if(equal(state,2),.7+.1*sin(time*.888),0);\n' + 'q1=state;\n' + 'wave_mystery=wave_mystery+(1-zoom)*10;\n' + 'le=1.4*bass_att+.1*bass+.5*treb;\n' + 'pulse=above(le,th);\n' + 'pulsefreq=if(equal(pulsefreq,0),2,if(pulse,.8*pulsefreq+.2*(time-lastpulse),pulsefreq));\n' + 'lastpulse=if(pulse,time,lastpulse);\n' + 'bt=(time-lastbeat)/(.5*beatfreq+.5*pulsefreq);\n' + 'hccp=(.03/(bt+.2))+.5*if(band(above(bt,.8),below(bt,1.2)),(pow(sin((bt-1)*7.854),4)-1),0);\n' + 'beat=band(above(le,th+hccp),btblock);\n' + 'btblock=1-above(le,th+hccp);\n' + 'lastbeat=if(beat,time,lastbeat);\n' + 'beatfreq=if(equal(beatfreq,0),2,if(beat,.8*beatfreq+.2*(time-lastbeat),beatfreq));\n' + 'th=if(above(le,th),le+114/(le+10)-7.407,th+th*.07/(th-12)+below(th,2.7)*.1*(2.7-th));\n' + 'th=if(above(th,6),6,th);\n' + 'q3=30/fps;\n' + 'ccl=ccl+beat;\n' + 'minorccl=minorccl+.01*le;\n' + 'q4=beat;\n' + 'beatcounter = if(beat,beatcounter +1, beatcounter);\n' + 'beatcounter = if(above(beatcounter,7), 0, beatcounter);\n' + 'beateven = beatcounter%2;\n' + 'q5 = beateven;\n' + 'q8 =oldq8+ 0.005*(pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 = q8;\n' + 'q9 = 0.0125*(q8 + time);'),
	'pixel_eqs_str' : ('grid=abs(x*18+3*q5)%2 + abs(y*18+3*q5)%2;\n' + 'cx = grid;\n' + 'cy = grid;\n' + 'zoom=1+0.5*if(bnot(grid),cos(rad*10*sin(q8))*.07,cos(x*10*sin(q8))*.07);\n' + 'rot = 0.01*(1-rad);\n' + 'dx=0.4*grid*(0.008*sin((y*2-1)*48)+0.008*sin((y*2-1)*64));\n' + 'dy=0.4*grid*(0.008*cos((x*2-1)*64)+0.008*cos((x*2-1)*48));'),
};

return pmap;
});
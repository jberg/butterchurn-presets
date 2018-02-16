define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.9,
		wave_g : 0.4,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.012,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.9,
		echo_zoom : 1.169,
		ob_size : 0.0,
		b1ed : 0.25,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.44,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 1.0E-5,
		cx : 0.5,
		dy : 1.0E-5,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.0,
		mv_r : 0.39,
		rating : 2.5,
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
m.dx_r = 0;
m.dy_r = 0;
m.thresh = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = ((m.wave_r+(0.25*Math.cos((1.12*m.time))))+(0.2*((0.3*Math.cos((1.28*m.time)))+(0.3*Math.sin((2*m.time))))));
m.wave_g = ((m.wave_g+(0.25*Math.cos((1.142*m.time))))+(0.2*((0.3*Math.cos((1.2*m.time)))+(0.32*Math.sin((1.623*m.time))))));
m.wave_b = ((m.wave_b+(0.25*Math.cos((1.13*m.time))))+(0.2*((0.4*Math.cos((1.9*m.time)))+(0.34*Math.sin((1.5245*m.time))))));
m.q1 = m.wave_r;
m.q2 = m.wave_g;
m.q3 = m.wave_b;
		m.rkeys = ['zoom','rot','dy_r','dx_r','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.15)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.15)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.rot = (m.rot+(0.2*Math.abs(((m.dx_r*7)*((((2*m.rad)-Math.cos((12*m.ang)))*Math.sin((2-m.rad)))*Math.abs((1.2*m.dx_r)))))));
m.zoom = (m.zoom+(0.2*Math.abs(((8*m.dy_r)*Math.abs((m.dx_r*Math.sin(((2*Math.sin((2*m.rad)))*Math.tan((6*m.rad))))))))));
m.zoom = (m.zoom+((4*m.dx_r)*(m.rad-((m.x*(3.5*Math.cos(Math.sin((3-((m.rad*3)*Math.cos(((2*m.y)-m.bass_att))))))))*(0.5-m.rad)))));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 0.7,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.3,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.flip = 0;
m.n = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.xq = 0;
m.ang = 0;
m.ys = 0;
m.phase = 0;
m.xs = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.phase = ((((Math.sin((m.n*3))*Math.sin((m.n*7.9)))*Math.sin((m.n*16.7)))*Math.sin((m.n*63.5)))*6);
m.xp = (Math.sin((m.n+m.phase))*m.flip);
m.yp = (Math.cos((m.n+m.phase))*m.flip);
m.zp = 0;
m.ang = ((m.n*2)+(m.phase*0.2));
m.xq = ((m.xp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.yq = m.yp;
m.zq = ((m.xp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.ang = (m.time*0.1);
m.xp = ((m.xq*Math.sin(m.ang))+(m.zq*Math.cos(m.ang)));
m.yp = m.yq;
m.zp = ((m.xq*Math.cos(m.ang))-(m.zq*Math.sin(m.ang)));
m.ang = (m.time*0.17);
m.xq = m.xp;
m.yq = ((m.yp*Math.sin(m.ang))+(m.zp*Math.cos(m.ang)));
m.zq = ((m.yp*Math.cos(m.ang))-(m.zp*Math.sin(m.ang)));
m.zq = (m.zq+3.1);
m.xs = div(m.xq,m.zq);
m.ys = div(m.yq,m.zq);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = ((1-m.flip)*0.05);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'phase=sin(n*3)*sin(n*7.9)*sin(n*16.7)*sin(n*63.5)*6;\n' + 'xp=sin(n+phase)*flip;\n' + 'yp=cos(n+phase)*flip;\n' + 'zp=0;\n' + 'ang=n*2+phase*0.2;\n' + 'xq=xp*sin(ang) + zp*cos(ang);\n' + 'yq=yp;\n' + 'zq=xp*cos(ang) - zp*sin(ang);\n' + 'ang=time*0.1;\n' + 'xp=xq*sin(ang) + zq*cos(ang);\n' + 'yp=yq;\n' + 'zp=xq*cos(ang) - zq*sin(ang);\n' + 'ang=time*0.17;\n' + 'xq=xp;\n' + 'yq=yp*sin(ang) + zp*cos(ang);\n' + 'zq=yp*cos(ang) - zp*sin(ang);\n' + 'zq=zq+3.1;\n' + 'xs=xq/zq;\n' + 'ys=yq/zq;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-flip)*0.05;'),

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
			a : 0.2,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.9,
			textured : 1.0,
			g2 : 0.5,
			tex_zoom : 1.25716,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.8,
			border_g : 1.0,
			rad : 0.41906,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 10.0,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '  uv_1.y = uv.y;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3.x = roam_cos.x;\n' + '  tmpvar_3.y = roam_sin.x;\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (texsize_noise_lq.zw * texsize.xy);\n' + '  P_5 = (((0.1 * tmpvar_6) * uv) + (tmpvar_3 * 0.1));\n' + '  tmpvar_4 = texture2D (sampler_noise_lq, P_5);\n' + '  uv_1.x = (uv.x + ((0.02 * \n' + '    ((tmpvar_4.y * 2.0) - 1.0)\n' + '  ) * aspect.x));\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7.x = roam_sin.y;\n' + '  tmpvar_7.y = -(roam_cos.y);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (((0.0125 * tmpvar_6) * uv_1) + (tmpvar_7 * 0.03));\n' + '  tmpvar_8 = texture2D (sampler_noise_lq, P_9);\n' + '  uv_1.x = (uv_1.x + ((0.04 * \n' + '    ((tmpvar_8.z * 2.0) - 1.0)\n' + '  ) * aspect.x));\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10 = texture2D (sampler_main, uv_1);\n' + '  ret_2 = tmpvar_10.xyz;\n' + '  ret_2 = (ret_2 * vec3(0.99, 0.98, 0.97));\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec4 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_noise_lq, tmpvar_11);\n' + '  ret_2 = (ret_2 + ((\n' + '    (tmpvar_12.x - 0.5)\n' + '   / 256.0) * 2.0));\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13.w = 1.0;\n' + '  tmpvar_13.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_13;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = (((ret_1 - 0.5) * 3.0) + 0.5);\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3.w = 1.0;\n' + '  tmpvar_3.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_3;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'wave_r = wave_r + 0.25*cos(1.12*time) +0.2*(0.3*cos(1.28*time)+0.3*sin(2*time));\n' + 'wave_g = wave_g + 0.25*cos(1.142*time) +0.2*(0.3*cos(1.2*time)+0.32*sin(1.623*time));\n' + 'wave_b = wave_b + 0.25*cos(1.13*time) +0.2*(0.4*cos(1.9*time)+0.34*sin(1.5245*time));\n' + 'q1 = wave_r;\n' + 'q2 = wave_g;\n' + 'q3 = wave_b;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.15*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.15*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'rot = rot + 0.2*abs(dx_r*7*((2*rad-cos(12*ang))*sin(2-rad)*abs(1.2*dx_r)));\n' + 'zoom = zoom + 0.2*abs(8*dy_r*abs(dx_r*sin(2*sin(2*rad)*tan(6*rad))));\n' + 'zoom = zoom + 4*dx_r*(rad-x*(3.5*cos(sin(3-rad*3*cos(2*y-bass_att))))*(0.5-rad));'),
};

return pmap;
});
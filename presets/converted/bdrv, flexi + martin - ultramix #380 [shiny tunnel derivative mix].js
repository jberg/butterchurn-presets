define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.5,
		ib_g : 0.0,
		mv_x : 0.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 0.721,
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
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		b1ed : 0.25,
		wave_smoothing : 0.5,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
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
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 1.0,
		wave_a : 100.0,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.5,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.a = 0;
m.cr1 = 0;
m.jx1 = 0;
m.cr2 = 0;
m.crr = 0;
m.d = 0;
m.kx1 = 0;
m.cqr = 0;
m.crs = 0;
m.hjrt = 0;
m.hkrt = 0;
m.ci = 0;
m.q7 = 0;
m.q8 = 0;
m.hjsx = 0;
m.dx_r = 0;
m.hksx = 0;
m.hjsy = 0;
m.dy_r = 0;
m.crx = 0;
m.hksy = 0;
m.d2 = 0;
m.cr = 0;
m.q20 = 0;
m.q21 = 0;
m.q15 = 0;
m.hjzm = 0;
m.v = 0;
m.hjdx = 0;
m.hkzm = 0;
m.w = 0;
m.hkdx = 0;
m.hjcx = 0;
m.hjdy = 0;
m.hkcx = 0;
m.hkdy = 0;
m.hjcy = 0;
m.q18 = 0;
m.hkcy = 0;
m.q19 = 0;
m.hjwp = 0;
m.thresh = 0;
m.hkwp = 0;
m.cb = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_r = (0.5+(0.5*Math.sin((6*m.time))));
m.wave_g = (0.5+(0.5*Math.sin((4.1*m.time))));
m.wave_b = (-1+(((1-m.wave_r)+1)-m.wave_g));
m.warp = 0;
m.ob_r = (1-Math.abs(m.wave_r));
m.ob_b = (1-Math.abs(m.wave_b));
m.ob_g = (1-Math.abs(m.wave_g));
m.a = ((m.a*0.98)-((m.bass-m.treb)*0.01));
m.v = ((m.v*0.96)+(m.a*0.12));
m.w = (m.w+(m.v*0.01));
m.q15 = (m.a-m.v);
m.q18 = m.w;
m.q19 = sigmoid((m.treb_att-m.bass_att), 2);
m.d = (m.d+div((((m.bass_att-0.5)*0.01)*60),m.fps));
m.d2 = (m.d2+div((((m.treb_att-0.5)*0.006)*60),m.fps));
m.q20 = (m.d+m.d2);
m.q21 = m.d2;
		m.rkeys = ['sx','sy','dx_r','warp','dy_r','dx','cx','dy','cy','rot','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.zoom = (0.9+div((0.1*Math.sin((m.x*50))),Math.cos((m.y*50))));
m.rot = (m.rot+m.dx_r);
m.rot = (m.rot+m.dy_r);
m.dx = (m.dx+(0.1*m.dx_r));
m.dy = (m.dy+(0.1*m.dy_r));
m.rot = ((0.1*pow(-m.ang, 3))-(1.18*Math.sin(m.ang)));
m.zoom = (((2*Math.sin(-m.rad))+1.3)+Math.sin(m.rad));
m.dx = (m.dx+(0.09*Math.sin((m.q8*0.785))));
m.dy = (m.dy+(0.09*Math.sin((m.q8*0.675))));
m.zoom = (m.zoom+m.q7);
m.zoom = (m.zoom+((0.2*(2.1*Math.cos((((((6*m.bass_att)*Math.sin((2*m.bass_att)))*Math.cos((((4*m.rad)*m.bass)+Math.cos((9*m.bass)))))*0.5)-m.rad))))*(0.5-m.rad)));
m.zoom = (m.zoom-((0.02*(2.1*Math.tan((((((6*m.mid_att)*Math.sin((2*m.mid_att)))*Math.cos((((4*m.rad)*m.treb)+Math.cos((9*m.treb)))))*0.5)-m.rad))))*(1.8-m.rad)));
m.hkdx = m.dx;
m.hkdy = m.dy;
m.hksx = m.sx;
m.hksy = m.sy;
m.hkrt = m.rot;
m.hkzm = m.zoom;
m.hkcx = m.cx;
m.hkcy = m.cy;
m.hkwp = m.warp;
m.dx = 0;
m.dy = 0;
m.sx = 1;
m.sy = 1;
m.rot = 0;
m.zoom = 1;
m.cx = 0.5;
m.cy = 0.5;
m.warp = 0;
m.rot = (m.rot+(ifcond(below(m.rad, (0.5*m.bass)), ((0.5*Math.abs((1-m.rad)))*Math.sin((0.7*m.bass))), ((-0.5*Math.abs((1-m.rad)))*Math.sin((0.7*m.mid))))*0.02));
m.zoom = (m.zoom-(0.00525*Math.abs(((1-m.rad)*Math.sin(m.treb)))));
m.cr1 = Math.floor(((div(Math.sin((((m.treb*2)+(m.mid*2))+(m.bass*2))),2)+0.5)+0.999));
m.cr2 = m.cr1;
m.crx = (m.cr2-m.cr1);
m.ci = m.rad;
m.cb = 0.25;
m.crs = 2;
m.cr = ((pow((div(Math.sin(((m.ci*6.3)-(m.cb*6.3))),2)+0.5), m.crs)*m.crx)+m.cr1);
m.cqr = ifcond(above(m.ci, (0.25+m.cb)), m.cr, (m.crx+m.cr1));
m.crr = ifcond(below(m.ci, 1.5), m.cqr, (m.crx+m.cr1));
m.jx1 = m.crr;
m.kx1 = (1-m.crr);
m.hjdx = m.dx;
m.hjdy = m.dy;
m.hjsx = m.sx;
m.hjsy = m.sy;
m.hjrt = m.rot;
m.hjzm = m.zoom;
m.hjcx = m.cx;
m.hjcy = m.cy;
m.hjwp = m.warp;
m.dx = ((m.jx1*m.hjdx)+(m.kx1*m.hkdx));
m.dy = ((m.jx1*m.hjdy)+(m.kx1*m.hkdy));
m.sx = ((m.jx1*m.hjsx)+(m.kx1*m.hksx));
m.sy = ((m.jx1*m.hjsy)+(m.kx1*m.hksy));
m.rot = ((m.jx1*m.hjrt)+(m.kx1*m.hkrt));
m.zoom = ((m.jx1*m.hjzm)+(m.kx1*m.hkzm));
m.cx = ((m.jx1*m.hjcx)+(m.kx1*m.hkcx));
m.cy = ((m.jx1*m.hjcy)+(m.kx1*m.hkcy));
m.warp = ((m.jx1*m.hjwp)+(m.kx1*m.hkwp));
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
			y : 1.8,
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
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
			y : 1.8,
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
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
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
			y : 1.8,
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
	'comp' : ('highp vec2 xlat_mutablers;\n' + 'shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 ret1_2;\n' + '  uv_1 = (0.5 + ((uv - 0.5) * aspect.xy));\n' + '  xlat_mutablers.x = (((ang / 3.14) + (rad * _qd.z)) - _qe.y);\n' + '   vec2 x_3;\n' + '  x_3 = (uv_1 - 0.5);\n' + '  xlat_mutablers.y = ((0.1 / (0.05 + \n' + '    (sqrt(dot (x_3, x_3)) * 1.4)\n' + '  )) + _qf.x);\n' + '   vec2 tmpvar_4;\n' + '  tmpvar_4 = fract(xlat_mutablers);\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.y = 0.0;\n' + '  tmpvar_5.x = texsize.z;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (tmpvar_5 * 4.0);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7.x = 0.0;\n' + '  tmpvar_7.y = texsize.w;\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = (tmpvar_7 * 4.0);\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (tmpvar_4 - tmpvar_6);\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (tmpvar_4 + tmpvar_6);\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (tmpvar_4 - tmpvar_8);\n' + '  tmpvar_13 = texture2D (sampler_blur1, P_14);\n' + '   vec4 tmpvar_15;\n' + '   vec2 P_16;\n' + '  P_16 = (tmpvar_4 + tmpvar_8);\n' + '  tmpvar_15 = texture2D (sampler_blur1, P_16);\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = dot (((\n' + '    (tmpvar_9.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_11.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_17.y = dot (((\n' + '    (tmpvar_13.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_15.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '   vec3 tmpvar_18;\n' + '  tmpvar_18 = (texture2D (sampler_main, tmpvar_4).xyz * 5.0);\n' + '  ret1_2 = tmpvar_18;\n' + '  uv_1 = (cos((\n' + '    (12.56 * tmpvar_4)\n' + '   - \n' + '    (vec2(0.0, 10.0) * _qe.w)\n' + '  )) - (8.0 * tmpvar_17));\n' + '   vec3 tmpvar_19;\n' + '  tmpvar_19 = pow (((\n' + '    (2.0 * (clamp ((0.02 / \n' + '      sqrt(dot (uv_1, uv_1))\n' + '    ), 0.0, 1.0) * hue_shader))\n' + '   * \n' + '    (ret1_2 + 1.0)\n' + '  ) - 0.04), vec3(0.5, 0.5, 0.5));\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20.w = 1.0;\n' + '  tmpvar_20.xyz = mix (tmpvar_19, tmpvar_19.zxy, _qe.zzz);\n' + '  vec4 ret4 = tmpvar_20;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_r = 0.5 + 0.5*sin(6*time);\n' + 'wave_g = 0.5 + 0.5*sin(4.1*time);\n' + 'wave_b = -1 + (1-wave_r + 1-wave_g);\n' + 'warp = 0;\n' + 'ob_r = 1-abs(wave_r);\n' + 'ob_b = 1-abs(wave_b);\n' + 'ob_g = 1-abs(wave_g);\n' + 'a = a*0.98 - (bass-treb)*0.01;\n' + 'v = v*0.96 + a*0.12;\n' + 'w = w + v*0.01;\n' + 'q15 = a-v;\n' + 'q18 = w;\n' + 'q19 = sigmoid(treb_att-bass_att,2);\n' + 'd = d + (bass_att-0.5)*0.01*60/fps;\n' + 'd2 = d2 + (treb_att-0.5)*0.006*60/fps;\n' + 'q20 = d+d2;\n' + 'q21 = d2;'),
	'pixel_eqs_str' : ('thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'zoom=0.9+0.1*sin(x*50)/cos(y*50);\n' + 'rot = rot + dx_r;\n' + 'rot = rot + dy_r;\n' + 'dx = dx + 0.1*dx_r;\n' + 'dy = dy + 0.1*dy_r;\n' + 'rot=0.1*pow(-ang,3)-1.18*sin(ang);\n' + 'zoom=2*sin(-rad)+1.3+ sin(rad);\n' + 'dx = dx + 0.09*sin(q8*0.785);\n' + 'dy = dy + 0.09*sin(q8*0.675);\n' + 'zoom = zoom +q7;\n' + 'zoom = zoom + (0.2*(2.1*cos(6*bass_att*sin(2*bass_att)*cos((4*rad*bass)+cos(9*bass))*0.5-rad)))*(0.5-rad);\n' + 'zoom = zoom  - 0.02*(2.1*tan(6*mid_att*sin(2*mid_att)*cos((4*rad*treb)+cos(9*treb))*0.5-rad))*(1.8-rad);\n' + 'hkdx=dx;\n' + 'hkdy=dy;\n' + 'hksx=sx;\n' + 'hksy=sy;\n' + 'hkrt=rot;\n' + 'hkzm=zoom;\n' + 'hkcx=cx;\n' + 'hkcy=cy;\n' + 'hkwp=warp;\n' + 'dx=0;\n' + 'dy=0;\n' + 'sx=1;\n' + 'sy=1;\n' + 'rot=0;\n' + 'zoom=1;\n' + 'cx=.5;\n' + 'cy=.5;\n' + 'warp=0;\n' + 'rot = rot  + (if (below(rad,0.5*bass), 0.5*abs(1-rad)*sin(0.7*bass), -0.5*abs(1-rad)*sin(0.7*mid))) * 0.02;\n' + 'zoom = zoom - 0.00525*abs((1-rad)*sin(treb));\n' + 'cr1=(int(sin(treb*2+mid*2+bass*2)/2+.5+.999));\n' + 'cr2=cr1;\n' + 'crx=cr2-cr1;\n' + 'ci=rad;\n' + 'cb=.25  ;\n' + 'crs=2;\n' + 'cr=pow(sin(ci*6.3-(cb*6.3))/2+.5,crs)*crx+cr1;\n' + 'cqr=if( above (ci,.25+cb),cr,crx+cr1);\n' + 'crr=if( below(ci,1.5),cqr,crx+cr1);\n' + 'jx1=crr;\n' + 'kx1=1-crr;\n' + 'hjdx=dx;\n' + 'hjdy=dy;\n' + 'hjsx=sx;\n' + 'hjsy=sy;\n' + 'hjrt=rot;\n' + 'hjzm=zoom;\n' + 'hjcx=cx;\n' + 'hjcy=cy;\n' + 'hjwp=warp;\n' + 'dx=(jx1*hjdx+kx1*hkdx);\n' + 'dy=(jx1*hjdy+kx1*hkdy);\n' + 'sx=(jx1*hjsx+kx1*hksx);\n' + 'sy=(jx1*hjsy+kx1*hksy);\n' + 'rot=(jx1*hjrt+kx1*hkrt);\n' + 'zoom=(jx1*hjzm+kx1*hkzm);\n' + 'cx=(jx1*hjcx+kx1*hkcx);\n' + 'cy=(jx1*hjcy+kx1*hkcy);\n' + 'warp=(jx1*hjwp+kx1*hkwp);'),
};

return pmap;
});
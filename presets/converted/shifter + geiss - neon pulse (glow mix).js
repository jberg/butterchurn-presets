define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.4,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.286,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
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
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.051,
		ob_size : 0.5,
		b1ed : 0.25,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.85235,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.975,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.71,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.q3 = 0;
m.mod = 0;
m.q4 = 0;
m.q5 = 0;
m.mt = 0;
m.nu = 0;
m.toc = 0;
m.oy = 0;
m.vav = 0;
m.cox = 0;
m.coy = 0;
m.treb_avg = 0;
m.dis = 0;
m.tic = 0;
m.ra = 0;
m.slide = 0;
m.bt = 0;
m.bass_avg = 0;
m.vol = 0;
m.zm = 0;
m.modx = 0;
m.mox = 0;
m.mody = 0;
m.moy = 0;
m.tin = 0;
m.pox = 0;
m.poy = 0;
m.mid_avg = 0;
m.sp = 0;
m.vt = 0;
m.ocoy = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = m.time;
m.vol = (((m.bass_att+m.treb_att)+m.mid_att)*0.333333);
m.ra = (div(1,m.tic)*0.1);
m.treb_avg = (m.tic*((m.treb_avg*(div(1,m.tic)-m.ra))+(m.ra*m.treb)));
m.mid_avg = (m.tic*((m.mid_avg*(div(1,m.tic)-m.ra))+(m.ra*m.mid)));
m.bass_avg = (m.tic*((m.bass_avg*(div(1,m.tic)-m.ra))+(m.ra*m.bass)));
m.vav = (m.tic*((m.vav*(div(1,m.tic)-m.ra))+((m.ra*((m.bass+m.treb)+m.mid))*0.33333)));
m.tt = (m.tt+(m.tic*m.treb));
m.mt = (m.mt+(m.tic*m.mid));
m.bt = (m.bt+(m.tic*m.bass));
m.vt = (m.vt+(m.tic*m.vav));
m.sp = (Math.abs((m.vav-m.slide))*0.1);
m.slide = (ifcond(above(m.slide, m.vav), (m.slide-(m.tic*m.sp)), (m.slide+(m.tic*m.sp)))+(((1-m.toc)*m.vav)*0.2));
m.toc = 1;
m.q1 = 0;
m.q2 = ((m.bt*0.5)+5);
m.q3 = ((m.mt*0.5)+3);
m.q4 = (m.tt*0.5);
m.q5 = (0.1+((m.treb_avg+m.mid_avg)*0.2));
m.zoom = (1-(m.bass_avg*0.2));
m.monitor = m.q5;
		m.rkeys = ['q1','oy','cox','coy','mox','moy','ocoy'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.coy = ((m.coy+below(m.y, m.oy))*above(m.q1, 0));
m.cox = (((m.cox+1)*above(m.q1, 0))*equal(m.coy, m.ocoy));
m.moy = Math.max(m.coy, m.moy);
m.mox = Math.max(m.cox, m.mox);
m.nu = 4;
m.pox = ((div(m.cox,m.nu)-Math.floor(div(m.cox,m.nu)))*m.nu);
m.poy = ((div(m.coy,m.nu)-Math.floor(div(m.coy,m.nu)))*m.nu);
m.mod = ((1-(2*above(m.x, 0.5)))*(1-(2*above(m.y, 0.5))));
m.dx = (ifcond(equal(mod(m.coy,2), 0), (-equal(m.pox, 1)+equal(m.pox, 2)), (equal(m.pox, 0)-equal(m.pox, 3)))*0.001);
m.dy = ((ifcond(equal(mod(m.coy,2), 0), (-equal(m.pox, 1)+equal(m.pox, 2)), (equal(m.pox, 0)-equal(m.pox, 3)))*0.001)*m.mod);
m.dis = (m.x+(1-m.y));
m.mod = ifcond(above(m.dis, 1), (m.dis-1), (1-m.dis));
m.mod = (below(m.mod, 0.2)+(((1-Math.min(1, ((m.mod-0.2)*4)))*above(m.mod, 0.2))*1));
m.zm = m.q5;
m.modx = ifcond(above(m.dis, 1), m.zm, -m.zm);
m.mody = ifcond(above(m.dis, 1), -m.zm, m.zm);
m.dx = ((m.dx*m.mod)+((1-m.mod)*m.modx));
m.dy = ((m.dy*m.mod)+((1-m.mod)*m.mody));
m.rot = (0.3*m.mod);
m.oy = m.y;
m.ocoy = m.coy;
m.q1 = (m.q1+1);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.03,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.sw = 0;
m.mx = 0;
m.my = 0;

			m.rkeys = ['sw'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.r = (0.6+(0.4*Math.sin(m.time)));
m.g = (0.4+(0.4*Math.sin((m.time+2.094))));
m.b = (0.4+(0.4*Math.sin((m.time+4.188))));
m.sw = (1-m.sw);
m.mx = equal(mod(Math.floor(m.q2),2), 0);
m.mx = Math.abs((m.mx-(m.q2-Math.floor(m.q2))));
m.my = (0.5+(0.5-m.mx));
m.x = (m.mx+(m.value1*(1-(2*m.sw))));
m.y = (m.my+(m.value2*(1-(2*m.sw))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('r = .6 + .4*sin(time);\n' + 'g = .4 + .4*sin(time + 2.094);\n' + 'b = .4 + .4*sin(time + 4.188);\n' + 'sw = 1-sw;\n' + 'mx = equal(int(q2)%2,0);\n' + 'mx = abs(mx - (q2 - int(q2)));\n' + 'my = .5 + (.5 - mx);\n' + 'x = mx + value1*(1-2*sw);\n' + 'y = my + value2*(1-2*sw);'),

		},
		{
		'baseVals' : {
			a : 0.03,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q3 = 0;
m.sw = 0;
m.mx = 0;
m.my = 0;

			m.rkeys = ['sw'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.g = (0.6+(0.4*Math.sin(m.time)));
m.b = (0.4+(0.4*Math.sin((m.time+2.094))));
m.r = (0.4+(0.4*Math.sin((m.time+4.188))));
m.sw = (1-m.sw);
m.mx = equal(mod(Math.floor(m.q3),2), 0);
m.mx = Math.abs((m.mx-(m.q3-Math.floor(m.q3))));
m.my = (0.5+(0.5-m.mx));
m.x = (m.mx+(m.value1*(1-(2*m.sw))));
m.y = (m.my+(m.value2*(1-(2*m.sw))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('g = .6 + .4*sin(time);\n' + 'b = .4 + .4*sin(time + 2.094);\n' + 'r = .4 + .4*sin(time + 4.188);\n' + 'sw = 1-sw;\n' + 'mx = equal(int(q3)%2,0);\n' + 'mx = abs(mx - (q3 - int(q3)));\n' + 'my = .5 + (.5 - mx);\n' + 'x = mx + value1*(1-2*sw);\n' + 'y = my + value2*(1-2*sw);'),

		},
		{
		'baseVals' : {
			a : 0.03,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q4 = 0;
m.sw = 0;
m.mx = 0;
m.my = 0;

			m.rkeys = ['sw'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.b = (0.6+(0.4*Math.sin(m.time)));
m.r = (0.4+(0.4*Math.sin((m.time+2.094))));
m.g = (0.4+(0.4*Math.sin((m.time+4.188))));
m.sw = (1-m.sw);
m.mx = equal(mod(Math.floor(m.q4),2), 0);
m.mx = Math.abs((m.mx-(m.q4-Math.floor(m.q4))));
m.my = (0.5+(0.5-m.mx));
m.x = (m.mx+(m.value1*(1-(2*m.sw))));
m.y = (m.my+(m.value2*(1-(2*m.sw))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('b = .6 + .4*sin(time);\n' + 'r = .4 + .4*sin(time + 2.094);\n' + 'g = .4 + .4*sin(time + 4.188);\n' + 'sw = 1-sw;\n' + 'mx = equal(int(q4)%2,0);\n' + 'mx = abs(mx - (q4 - int(q4)));\n' + 'my = .5 + (.5 - mx);\n' + 'x = mx + value1*(1-2*sw);\n' + 'y = my + value2*(1-2*sw);'),

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
			usedots : 1.0,
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
		'point_eqs' : function(m) {
m.x = (rand(1001)*0.001);
m.y = (rand(1001)*0.001);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = rand(1001)*.001;\n' + 'y = rand(1001)*.001;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 1.5708,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.3291,
			x : 0.0,
			y : 0.0,
			ang : 0.0,
			sides : 34.0,
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
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '  ret_1 = ((ret_1 * 1.5) - 0.1);\n' + '  ret_1.y = (ret_1 * 0.7).y;\n' + '   vec4 tmpvar_3;\n' + '  tmpvar_3 = texture2D (sampler_blur1, uv);\n' + '  ret_1.x = (((tmpvar_3.xyz * scale1) + bias1).x - 0.03);\n' + '   vec4 tmpvar_4;\n' + '  tmpvar_4 = texture2D (sampler_blur2, uv);\n' + '  ret_1.z = (((\n' + '    (tmpvar_4.xyz * scale2)\n' + '   + bias2).z * 1.5) - 0.05);\n' + '  ret_1 = (ret_1 * 2.3);\n' + '   vec4 tmpvar_5;\n' + '  tmpvar_5.w = 1.0;\n' + '  tmpvar_5.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_5;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'tic = min(time-tin,.1);\n' + 'tin = time;\n' + 'vol = (bass_att + treb_att + mid_att)*.333333;\n' + 'ra = 1/tic*.1;\n' + 'treb_avg = tic*(treb_avg*(1/tic - ra) + ra*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - ra) + ra*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - ra) + ra*bass);\n' + 'vav = tic*(vav*(1/tic - ra) + ra*(bass+treb+mid)*.33333);\n' + 'tt = tt + tic*treb;\n' + 'mt = mt + tic*mid;\n' + 'bt = bt + tic*bass;\n' + 'vt = vt + tic*vav;\n' + 'sp = abs(vav - slide)*.1;\n' + 'slide = if(above(slide,vav),slide-tic*sp,slide+tic*sp) + (1-toc)*vav*.2;\n' + 'toc = 1;\n' + 'q1 = 0;\n' + 'q2 = bt*.5 + 5;\n' + 'q3 = mt*.5 + 3;\n' + 'q4 = tt*.5;\n' + 'q5 = .1 + (treb_avg + mid_avg)*.2;\n' + 'zoom = 1 - bass_avg*.2;\n' + 'monitor = q5;'),
	'pixel_eqs_str' : ('coy = (coy + below(y,oy))*above(q1,0);\n' + 'cox = (cox + 1)*above(q1,0)*equal(coy,ocoy);\n' + 'moy = max(coy,moy);\n' + 'mox = max(cox,mox);\n' + 'nu = 4;\n' + 'pox = ((cox/nu) - int(cox/nu))*nu;\n' + 'poy = ((coy/nu) - int(coy/nu))*nu;\n' + 'mod = (1-2*above(x,.5))*(1-2*above(y,.5));\n' + 'dx = if(equal(coy%2,0),-equal(pox,1) + equal(pox,2),equal(pox,0) - equal(pox,3))*.001;\n' + 'dy = if(equal(coy%2,0),-equal(pox,1) + equal(pox,2),equal(pox,0) - equal(pox,3))*.001*mod;\n' + 'dis = (x + (1-y));\n' + 'mod = if(above(dis,1),dis - 1,1-dis);\n' + 'mod = below(mod,.2) + (1-min(1,(mod-.2)*4))*above(mod,.2)*1;\n' + 'zm = q5;\n' + 'modx = if(above(dis,1),zm,-zm);\n' + 'mody = if(above(dis,1),-zm,zm);\n' + 'dx = dx*mod + (1-mod)*modx;\n' + 'dy = dy*mod + (1-mod)*mody;\n' + 'rot = .3*mod;\n' + 'oy = y;\n' + 'ocoy = coy;\n' + 'q1 = q1 + 1;'),
};

return pmap;
});
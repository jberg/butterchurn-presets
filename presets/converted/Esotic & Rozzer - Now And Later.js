define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.940001,
		wave_g : 1.0,
		ib_g : 0.0,
		mv_x : 1.28,
		warpscale : 1.35,
		brighten : 0.0,
		mv_y : 1.0,
		wave_scale : 0.26211,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 0.6,
		sy : 0.9999,
		ib_size : 0.005,
		warp : 1.5088,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.08678,
		mv_dy : 0.343261,
		mv_a : 1.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.000747,
		ob_size : 0.008955,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 1.0,
		wave_x : 0.448434,
		wave_y : 0.12166,
		zoom : 0.9399,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.001,
		cx : 0.5,
		dy : 0.005,
		ob_a : 0.1499,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 1.66328,
		invert : 0.0,
		rot : -6.139995,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.17349,
		decay : 0.9,
		wave_a : 0.002906,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 1.0,
		mv_r : 1.0,
		rating : 2.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.my_rot = 0;
m.my_beat = 0;
m.vol_now = 0;
m.slowtime = 0;
m.vol_mean = 0;
m.beat = 0;
m.crest = 0;
m.zoom_target = 0;
m.my_rot = 0.01;
		return m;
	},
	'frame_eqs' : function(m) {
m.mv_l = (1.21894646*rand(Math.floor((m.ob_size*m.zoom))));
m.wave_y = bnot((m.wave_y+m.mv_b));
m.zoomexp = (-1*Math.abs((2.4*log10((m.wave_b*m.wave_mode)))));
m.mv_b = (m.zoom*m.cx);
m.crest = (0.47+(0.5*Math.abs(Math.sin(m.slowtime))));
m.dy = ifcond(below((m.sy*m.crest), (m.mv_b*m.mv_x)), sigmoid((m.mv_l*m.dy), (m.ib_size*m.mv_y)), (m.ob_a*m.mv_x));
m.mv_l = (m.mv_l*m.warp);
m.ib_b = ifcond(below((m.decay+m.ib_g), (m.cy*m.ob_size)), (m.wave_mystery*m.warp), (m.wave_mystery*m.mv_g));
m.mv_x = (0.68256116*Math.abs((m.mv_a-m.mv_r)));
m.wave_y = sigmoid(sigmoid((m.wave_y*m.zoomexp), (m.ib_a*m.ib_g)), (m.ib_b+m.mv_l));
m.ob_g = (Math.max(0, (Math.abs(Math.sin(m.slowtime))-0.3))+0.7);
m.ob_b = (Math.max((-1.81535745*log10((m.ob_b*m.ib_a))), (m.crest*m.wave_b))+0.6);
m.ob_r = ((0.3*sign(ifcond(equal((m.wave_mystery*m.wave_y), (m.mv_x*m.ob_a)), (0.71052909*Math.log((m.ob_r*m.warp))), (m.wave_x*m.sy))))+0.6);
m.ib_r = (1.0-m.ob_r);
m.ib_g = (1.0-m.ob_g);
m.ib_b = (1.0-m.ob_b);
m.zoomexp = ifcond(below(m.zoomexp, 0.5), 0.5, m.zoomexp);
m.zoomexp = ifcond(above(m.zoomexp, 500.0), 500.0, m.zoomexp);
m.dy = ifcond(below(m.dy, -1), -6, m.dy);
m.dy = ifcond(above(m.dy, 1.0), 6.0, m.dy);
m.wave_y = ifcond(below(m.wave_y, 0.0), 0.0, m.wave_y);
m.wave_y = ifcond(above(m.wave_y, 1.0), 1.0, m.wave_y);
m.vol_now = ((0.4*m.bass)+(0.1*((m.bass_att+m.treb)+m.mid)));
m.vol_mean = ifcond(equal(mod(m.frame,50), 0), (m.vol_mean-(0.5*(m.vol_mean-m.vol_now))), (0.1*((m.vol_mean*9)+m.vol_now)));
m.beat = ifcond(above(m.vol_now, (1.15*m.vol_mean)), 1, 0);
m.slowtime = (m.slowtime+(m.beat*m.time));
m.q2 = Math.sin(m.slowtime);
m.q3 = m.slowtime;
m.my_beat = (m.my_beat+(1.0*m.beat));
m.my_beat = ifcond(above(m.my_beat, 4), 1, m.my_beat);
m.my_rot = ifcond(above(m.my_rot, 0), (m.my_rot+(0.005*m.vol_mean)), (m.my_rot-(0.02*m.vol_mean)));
m.my_rot = ifcond(above(m.my_rot, 0.230), 0.1, m.my_rot);
m.my_rot = ifcond(below(m.my_rot, -0.6), 0.01, m.my_rot);
m.rot = m.my_rot;
m.zoom_target = (0.8+(m.q2*0.1));
m.zoom = (m.zoom+((m.zoom_target-m.zoom)*0.2));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.warp = (0.36676717*pow((m.q2-m.y), (m.q2*m.q1)));
m.warp = (1.82335234*pow((-0.69122636*log10((m.warp*m.q2))), (m.q1*m.x)));
m.cx = (-0.51261795*sqrt((m.q3*m.q1)));
m.warp = ifcond(below(m.warp, 0.01), 0.01, m.warp);
m.warp = ifcond(above(m.warp, 100.0), 500.0, m.warp);
m.cx = ifcond(below(m.cx, -1.0), -1.0, m.cx);
m.cx = ifcond(above(m.cx, 2.0), 2.0, m.cx);
m.rot = (m.ang*0.5);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 192.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.spin = 0;
m.green = 0;
m.red = 0;
m.rad = 0;
m.blue = 0;
m.t2 = 0;
m.t3 = 0;
m.t3 = (Math.acos(-1)*128);
m.t4 = div(4,3);
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.spin = (m.spin+0.01);
m.t2 = m.spin;
m.red = (((-1*Math.cos(m.time))+Math.abs((-1*Math.cos(m.time))))+(0.2*(Math.cos(Math.sin(m.time))+(Math.abs(Math.cos(Math.sin(m.time)))+Math.cos(Math.sin(m.time))))));
m.green = Math.abs(Math.sin(m.time));
m.blue = (Math.cos(m.time)+Math.abs(Math.cos(m.time)));
m.r = ifcond(above(m.red, 1), 1, ifcond(above(m.red, 0), Math.abs(m.red), 0));
m.g = ifcond(above(m.green, 1), 1, ifcond(above(m.green, 0), Math.abs(m.green), 0));
m.b = ifcond(above(m.blue, 1), 1, ifcond(above(m.blue, 0), Math.abs(m.blue), 0));
		return m;
	},
		'point_eqs' : function(m) {
m.rad = ((m.sample*m.t3)+m.t2);
m.x = ((0.5+(Math.cos(div(m.rad,64))*0.65))+(Math.sin(m.rad)*0.35));
m.y = ((0.5+((Math.sin(div(m.rad,64))*m.t4)*0.65))+((Math.cos(m.rad)*m.t4)*0.35));
		return m;
	},
		'init_eqs_str' : ('t3 = acos(-1)*128;\n' + 't4 = 4/3;'),
		'frame_eqs_str' : ('spin = spin + .01;\n' + 't2 = spin;\n' + 'red = (-1 * cos(time))  + abs(-1 * cos(time)) + 0.2 * (cos(sin(time))+(abs(cos(sin(time)))+cos(sin(time))));\n' + 'green = abs(sin(time)) ;\n' + 'blue = cos(time)  + abs(cos(time));\n' + 'r = if(above(red,1),1,if(above(red,0), abs(red),0));\n' + 'g = if(above(green,1),1,if(above(green,0), abs(green),0));\n' + 'b = if(above(blue,1),1,if(above(blue,0), abs(blue),0));'),
		'point_eqs_str' : ('rad = sample*t3+t2;\n' + 'x = .5 + cos(rad/64)*0.65 + sin(rad)*0.35;\n' + 'y = .5 + sin(rad/64)*t4*0.65 + cos(rad)*t4*0.35;'),

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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.999995,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.547667,
			x : 0.5,
			y : 0.5,
			ang : 6.2831,
			sides : 24.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;

			m.rkeys = ['border_g','border_b','border_r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.border_r = (m.border_r+(1.5*Math.sin((m.q2*1.13))));
m.border_b = (m.border_b+(0.5*Math.sin((m.q2*1.23))));
m.border_g = (m.border_g+(0.5*Math.sin((m.q2*1.33))));
m.x = (0.5+(0.4*Math.sin((m.time*0.2))));
m.y = (0.5-(0.4*Math.cos((m.time*0.2))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('border_r = border_r + 1.5*sin(q2*1.13);\n' + 'border_b = border_b + 0.5*sin(q2*1.23);\n' + 'border_g = border_g + 0.5*sin(q2*1.33);\n' + 'x = 0.5 + (.4 * sin(time * 0.2));\n' + 'y = 0.5 - (.4 * cos(time * 0.2));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.7243,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 40.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5-(0.1*Math.sin((m.time+(m.bass*0.1)))));
m.y = (0.5+(0.1*Math.cos((m.time+(m.bass*0.1)))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.5 - (.1 * sin(time + (bass * 0.1)));\n' + 'y = 0.5 + (.1 * cos(time + (bass * 0.1)));'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.249785,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.a = m.bass;
m.r = m.mid;
m.b = m.treb;
m.r2 = (1.0-m.r);
m.b2 = (1.0-m.b);
m.rad = (m.bass*0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('a = bass;\n' + 'r = mid;\n' + 'b = treb;\n' + 'r2 = 1.0 - r;\n' + 'b2 = 1.0 - b;\n' + 'rad = (bass * 0.5);'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.761306,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 31.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = 0.15;
m.y = (0.5+(0.4*Math.cos((m.time*0.2))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = 0.15;\n' + 'y = 0.5 + (.4 * cos(time * 0.2));'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('my_rot = 0.01;'),
	'frame_eqs_str' : ('mv_l = 1.21894646*rand(int(ob_size * zoom));\n' + 'wave_y = bnot(wave_y + mv_b);\n' + 'zoomexp = -1*abs(2.4*log10(wave_b * wave_mode));\n' + 'mv_b = zoom * cx;\n' + 'crest = .47+.5*abs(sin(slowtime));\n' + 'dy = if(below(sy * crest, mv_b * mv_x) , sigmoid(mv_l * dy , ib_size * mv_y) , ob_a * mv_x);\n' + 'mv_l = mv_l * warp;\n' + 'ib_b = if(below(decay + ib_g , cy * ob_size) , wave_mystery * warp , wave_mystery * mv_g);\n' + 'mv_x = 0.68256116*abs(mv_a - mv_r);\n' + 'wave_y = sigmoid(sigmoid(wave_y * zoomexp , ib_a * ib_g) , ib_b + mv_l);\n' + 'ob_g = max(0,abs(sin(slowtime))-.3) + .7;\n' + 'ob_b = max(-1.81535745*log10(ob_b * ib_a) , crest * wave_b) + 0.6;\n' + 'ob_r = .3*sign(if(equal(wave_mystery * wave_y , mv_x * ob_a) , 0.71052909*log(ob_r * warp) , wave_x * sy)) + 0.6;\n' + 'ib_r = 1.0 - ob_r;\n' + 'ib_g = 1.0 - ob_g;\n' + 'ib_b = 1.0 - ob_b;\n' + 'zoomexp=if(below(zoomexp,0.5), 0.5, zoomexp);\n' + 'zoomexp=if(above(zoomexp,500.0), 500.0, zoomexp);\n' + 'dy=if(below(dy,-1), -6, dy);\n' + 'dy=if(above(dy,1.0), 6.0, dy);\n' + 'wave_y=if(below(wave_y,0.0), 0.0, wave_y);\n' + 'wave_y=if(above(wave_y,1.0), 1.0, wave_y);\n' + 'vol_now =  .4 * bass + 0.1 * (bass_att + treb + mid);\n' + 'vol_mean =  if(equal(frame%50,0),vol_mean - 0.5 * (vol_mean-vol_now),0.1 * (vol_mean * 9 + vol_now));\n' + 'beat = if(above(vol_now,1.15 * vol_mean),1,0);\n' + 'slowtime = slowtime + beat*time;\n' + 'q2=sin(slowtime);\n' + 'q3=slowtime;\n' + 'my_beat = my_beat + (1.0 * beat);\n' + 'my_beat = if(above(my_beat, 4), 1, my_beat);\n' + 'my_rot = if(above(my_rot, 0),my_rot + (0.005 * vol_mean),my_rot - (0.02 * vol_mean));\n' + 'my_rot = if(above(my_rot, 0.230), .1, my_rot);\n' + 'my_rot = if(below(my_rot, -.6), 0.01, my_rot);\n' + 'rot = my_rot;\n' + 'zoom_target = (0.8 + (q2 * 0.1));\n' + 'zoom = zoom + ((zoom_target - zoom) * .2);'),
	'pixel_eqs_str' : ('warp = 0.36676717*pow(q2 - y , q2 * q1);\n' + 'warp = 1.82335234*pow(-0.69122636*log10(warp * q2) , q1 * x);\n' + 'cx = -0.51261795*sqrt(q3 * q1);\n' + 'warp=if(below(warp,0.01), 0.01, warp);\n' + 'warp=if(above(warp,100.0), 500.0, warp);\n' + 'cx=if(below(cx,-1.0), -1.0, cx);\n' + 'cx=if(above(cx,2.0), 2.0, cx);\n' + 'rot = ang * 0.5;'),
};

return pmap;
});
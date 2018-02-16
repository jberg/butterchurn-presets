define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 3.679999,
		wave_g : 0.0,
		ib_g : 1.0,
		mv_x : 1.0,
		warpscale : 1.35,
		brighten : 0.0,
		mv_y : 1.0,
		wave_scale : 9.0E-6,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 1.0,
		sy : 0.9999,
		ib_size : 0.003418,
		warp : 1.5088,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.08678,
		mv_dy : 0.343261,
		mv_a : 0.198792,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 1.0,
		mv_b : 0.881077,
		echo_zoom : 1.000747,
		ob_size : 0.008955,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.029971,
		wave_x : 0.448434,
		wave_y : 0.12166,
		zoom : 1.0399,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : -0.059,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.045734,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 1.66328,
		invert : 0.0,
		rot : 0.18,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.17349,
		decay : 0.9,
		wave_a : 0.999974,
		ob_g : 0.0,
		ib_a : 0.732955,
		wave_b : 0.0,
		ib_b : 0.0,
		mv_r : 0.889621,
		rating : 3.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.temp_r = 0;
m.vol_now = 0;
m.slowtime = 0;
m.vol_mean = 0;
m.beat = 0;
m.temp_b = 0;
m.beatcount = 0;
m.temp_g = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.mv_l = (1.21894646*rand(Math.floor((m.ob_size*m.zoom))));
m.wave_y = bnot((m.wave_y+m.mv_b));
m.zoomexp = (-1.9620862*Math.abs((1.40700197*log10((m.wave_b*m.wave_mode)))));
m.mv_b = (m.zoom*m.cx);
m.dy = ifcond(below((m.sy*m.ob_r), (m.mv_b*m.mv_x)), sigmoid((m.mv_l*m.dy), (m.ib_size*m.mv_y)), (m.ob_a*m.mv_x));
m.mv_l = (m.mv_l*m.warp);
m.mv_x = (0.68256116*Math.abs((m.mv_a-m.mv_r)));
m.wave_y = sigmoid(sigmoid((m.wave_y*m.zoomexp), (m.ib_a*m.ib_g)), (m.ib_b+m.mv_l));
m.zoomexp = ifcond(below(m.zoomexp, 0.01), 0.01, m.zoomexp);
m.zoomexp = ifcond(above(m.zoomexp, 100.0), 100.0, m.zoomexp);
m.dy = ifcond(below(m.dy, -1), -1, m.dy);
m.dy = ifcond(above(m.dy, 1.0), 1.0, m.dy);
m.wave_y = ifcond(below(m.wave_y, 0.0), 0.0, m.wave_y);
m.wave_y = ifcond(above(m.wave_y, 1.0), 1.0, m.wave_y);
m.mv_b = ifcond(below(m.mv_b, 0.0), 0.0, m.mv_b);
m.mv_b = ifcond(above(m.mv_b, 1.0), 1.0, m.mv_b);
m.mv_x = ifcond(below(m.mv_x, 0.0), 0.0, m.mv_x);
m.mv_x = ifcond(above(m.mv_x, 64.0), 64.0, m.mv_x);
m.mv_l = ifcond(below(m.mv_l, 0.0), 0.0, m.mv_l);
m.mv_l = ifcond(above(m.mv_l, 5.0), 5.0, m.mv_l);
m.vol_now = ((0.4*m.bass)+(0.1*((m.bass_att+m.treb)+m.mid)));
m.vol_mean = ifcond(equal(mod(m.frame,50), 0), (m.vol_mean-(0.5*(m.vol_mean-m.vol_now))), (0.1*((m.vol_mean*9)+m.vol_now)));
m.beat = ifcond(above(m.vol_now, (1.15*m.vol_mean)), 1, 0);
m.slowtime = (m.slowtime+(m.beat*m.time));
m.q2 = Math.sin(m.slowtime);
m.ob_a = (m.q2*0.2);
m.temp_b = (Math.cos(m.slowtime)+Math.abs(Math.cos(m.slowtime)));
m.temp_g = Math.abs(Math.sin(m.slowtime));
m.temp_r = (((-1*Math.cos(m.slowtime))+Math.abs((-1*Math.cos(m.slowtime))))+(0.2*(Math.cos(Math.sin(m.slowtime))+(Math.abs(Math.cos(Math.sin(m.slowtime)))+Math.cos(Math.sin(m.slowtime))))));
m.ob_r = ifcond(above(m.temp_r, 1), 1, ifcond(above(m.temp_r, 0), Math.abs(m.temp_r), 0));
m.ob_g = ifcond(above(m.temp_g, 0.5), 0.5, ifcond(above(m.temp_g, 0), Math.abs(m.temp_g), 0));
m.ob_b = ifcond(above(m.temp_b, 1), 1, ifcond(above(m.temp_b, 0), Math.abs(m.temp_b), 0));
m.ib_r = (1-ifcond(above(m.temp_r, 1), 1, ifcond(above(m.temp_r, 0), Math.abs(m.temp_r), 0)));
m.ib_g = (1-ifcond(above(m.temp_g, 1), 1, ifcond(above(m.temp_g, 0), Math.abs(m.temp_g), 0)));
m.ib_b = (1-ifcond(above(m.temp_b, 1), 1, ifcond(above(m.temp_b, 0), Math.abs(m.temp_b), 0)));
m.wave_b = m.temp_b;
m.wave_g = (1-m.temp_g);
m.wave_r = (1-(equal(m.ob_b, 1)*m.temp_r));
m.beatcount = (m.beatcount+m.beat);
m.q3 = m.beatcount;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.warp = (0.36676717*pow((m.q2-m.y), (m.q2*m.q1)));
m.warp = (1.82335234*pow((-0.69122636*log10((m.warp*m.q2))), (m.q1*m.x)));
m.cx = (-0.51261795*sqrt((m.q3*m.q1)));
m.warp = ifcond(below(m.warp, 0.01), 0.01, m.warp);
m.warp = ifcond(above(m.warp, 100.0), 100.0, m.warp);
m.cx = ifcond(below(m.cx, -1.0), -1.0, m.cx);
m.cx = ifcond(above(m.cx, 2.0), 2.0, m.cx);
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.579585,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.327749,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.my_ang = 0;

			m.rkeys = ['my_ang','border_g','border_b','border_r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.border_r = (m.border_r+(1.5*Math.sin((m.q2*1.13))));
m.border_b = (m.border_b+(0.5*Math.sin((m.q2*1.23))));
m.border_g = (m.border_g+(0.5*Math.sin((m.q2*1.33))));
m.my_ang = (m.my_ang+(0.005+(0.001*m.bass)));
m.ang = m.my_ang;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('border_r = border_r + 1.5*sin(q2*1.13);\n' + 'border_b = border_b + 0.5*sin(q2*1.23);\n' + 'border_g = border_g + 0.5*sin(q2*1.33);\n' + 'my_ang = my_ang + (0.005 + (0.001 * bass));\n' + 'ang = my_ang;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.707201,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.674911,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 14.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q2 = 0;
m.my_ang = 0;

			m.rkeys = ['my_ang','border_g','border_b','border_r'];
			return m;
		},
		'frame_eqs' : function(m) {
m.border_r = (m.border_r+(1.5*Math.sin((m.q2*1.13))));
m.border_b = (m.border_b+(0.5*Math.sin((m.q2*1.23))));
m.border_g = (m.border_g+(0.5*Math.sin((m.q2*1.33))));
m.my_ang = (m.my_ang+(0.005+(0.001*m.bass)));
m.ang = m.my_ang;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('border_r = border_r + 1.5*sin(q2*1.13);\n' + 'border_b = border_b + 0.5*sin(q2*1.23);\n' + 'border_g = border_g + 0.5*sin(q2*1.33);\n' + 'my_ang = my_ang + (0.005 + (0.001 * bass));\n' + 'ang = my_ang;'),

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
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('mv_l = 1.21894646*rand(int(ob_size * zoom));\n' + 'wave_y = bnot(wave_y + mv_b);\n' + 'zoomexp = -1.9620862*abs(1.40700197*log10(wave_b * wave_mode));\n' + 'mv_b = zoom * cx;\n' + 'dy = if(below(sy * ob_r , mv_b * mv_x) , sigmoid(mv_l * dy , ib_size * mv_y) , ob_a * mv_x);\n' + 'mv_l = mv_l * warp;\n' + 'mv_x = 0.68256116*abs(mv_a - mv_r);\n' + 'wave_y = sigmoid(sigmoid(wave_y * zoomexp , ib_a * ib_g) , ib_b + mv_l);\n' + 'zoomexp=if(below(zoomexp,0.01), 0.01, zoomexp);\n' + 'zoomexp=if(above(zoomexp,100.0), 100.0, zoomexp);\n' + 'dy=if(below(dy,-1), -1, dy);\n' + 'dy=if(above(dy,1.0), 1.0, dy);\n' + 'wave_y=if(below(wave_y,0.0), 0.0, wave_y);\n' + 'wave_y=if(above(wave_y,1.0), 1.0, wave_y);\n' + 'mv_b=if(below(mv_b,0.0), 0.0, mv_b);\n' + 'mv_b=if(above(mv_b,1.0), 1.0, mv_b);\n' + 'mv_x=if(below(mv_x,0.0), 0.0, mv_x);\n' + 'mv_x=if(above(mv_x,64.0), 64.0, mv_x);\n' + 'mv_l=if(below(mv_l,0.0), 0.0, mv_l);\n' + 'mv_l=if(above(mv_l,5.0), 5.0, mv_l);\n' + 'vol_now =  .4 * bass + 0.1 * (bass_att + treb + mid);\n' + 'vol_mean =  if(equal(frame%50,0),vol_mean - 0.5 * (vol_mean-vol_now),0.1 * (vol_mean * 9 + vol_now));\n' + 'beat = if(above(vol_now,1.15 * vol_mean),1,0);\n' + 'slowtime = slowtime + beat*time;\n' + 'q2=sin(slowtime);\n' + 'ob_a = q2*.2;\n' + 'temp_b = cos(slowtime)  + abs(cos(slowtime));\n' + 'temp_g = abs(sin(slowtime)) ;\n' + 'temp_r =  (-1 * cos(slowtime))  + abs(-1 * cos(slowtime)) + 0.2 * (cos(sin(slowtime))+(abs(cos(sin(slowtime)))+cos(sin(slowtime))));\n' + 'ob_r = if(above(temp_r,1),1,if(above(temp_r,0), abs(temp_r),0));\n' + 'ob_g = if(above(temp_g,.5),.5,if(above(temp_g,0), abs(temp_g),0));\n' + 'ob_b = if(above(temp_b,1),1,if(above(temp_b,0), abs(temp_b),0));\n' + 'ib_r =  1- if(above(temp_r,1),1,if(above(temp_r,0), abs(temp_r),0));\n' + 'ib_g =  1- if(above(temp_g,1),1,if(above(temp_g,0), abs(temp_g),0));\n' + 'ib_b =  1- if(above(temp_b,1),1,if(above(temp_b,0), abs(temp_b),0));\n' + 'wave_b = temp_b;\n' + 'wave_g = 1-temp_g;\n' + 'wave_r = 1-equal(ob_b,1)*temp_r;\n' + 'beatcount = beatcount + beat;\n' + 'q3 = beatcount;'),
	'pixel_eqs_str' : ('warp = 0.36676717*pow(q2 - y , q2 * q1);\n' + 'warp = 1.82335234*pow(-0.69122636*log10(warp * q2) , q1 * x);\n' + 'cx = -0.51261795*sqrt(q3 * q1);\n' + 'warp=if(below(warp,0.01), 0.01, warp);\n' + 'warp=if(above(warp,100.0), 100.0, warp);\n' + 'cx=if(below(cx,-1.0), -1.0, cx);\n' + 'cx=if(above(cx,2.0), 2.0, cx);'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.375,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.08925,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.007,
		ob_size : 0.5,
		b1ed : 0.25,
		wave_smoothing : 0.549,
		warpanimspeed : 0.626,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.24,
		wave_y : 0.44,
		zoom : 0.99951,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 2.0,
		wave_mystery : -0.66,
		decay : 0.995,
		wave_a : 1.413,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 1.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 2.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q8 = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.q3 = (0.5+(0.4*Math.cos((m.time*0.4))));
m.q4 = (0.5+(0.4*Math.sin((m.time*0.14))));
m.q5 = (0.5-(0.4*Math.sin((m.time*0.21))));
m.q6 = (0.5+(0.4*Math.cos((m.time*0.13))));
m.q8 = 1;
m.zoom = 1;
m.wave_x = (0.1+div(rand(80),100));
m.wave_y = (0.1+div(rand(80),100));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.t5 = 0;
m.val = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.q8 = 0;
m.dist1 = 0;
m.dist2 = 0;
m.val1 = 0;
m.val2 = 0;
m.chance = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.chance = 0;
			m.rkeys = ['t1','t2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
m.t8 = m.q8;
		return m;
	},
		'point_eqs' : function(m) {
m.x = m.t1;
m.y = m.t2;
m.chance = rand(24);
m.t1 = ifcond(equal(m.chance, 0), ((-0.0955*m.y)+0.7183), m.t1);
m.t2 = ifcond(equal(m.chance, 0), ((0.3135*m.x)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 1), (((0.1260*m.x)-(0.0583*m.y))+0.7430), m.t1);
m.t2 = ifcond(equal(m.chance, 1), (((0.1091*m.x)+(0.0674*m.y))+0.4932), m.t2);
m.t1 = ifcond(equal(m.chance, 2), (((0.1206*m.x)+(0.0615*m.y))+0.6997), m.t1);
m.t2 = ifcond(equal(m.chance, 2), (((-0.1150*m.x)+(0.0645*m.y))+0.4498), m.t2);
m.t1 = ifcond(equal(m.chance, 3), (((0.0592*m.x)+(0.0580*m.y))+0.0867), m.t1);
m.t2 = ifcond(equal(m.chance, 3), (((-0.0592*m.x)+(0.0580*m.y))+0.6046), m.t2);
m.t1 = ifcond(equal(m.chance, 4), ((-0.1238*m.y)+0.1115), m.t1);
m.t2 = ifcond(equal(m.chance, 4), ((0.2705*m.x)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 5), (((0.0976*m.x)-(0.0564*m.y))+0.1796), m.t1);
m.t2 = ifcond(equal(m.chance, 5), (((0.0976*m.x)+(0.0564*m.y))+0.5118), m.t2);
m.t1 = ifcond(equal(m.chance, 6), ((-0.1238*m.y)+0.3158), m.t1);
m.t2 = ifcond(equal(m.chance, 6), ((0.2705*m.x)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 7), ((-0.0955*m.y)+0.0619), m.t1);
m.t2 = ifcond(equal(m.chance, 7), ((0.3131*m.x)-0.0022), m.t2);
m.t1 = ifcond(equal(m.chance, 8), (((0.1057*m.x)-(0.0815*m.y))+0.1053), m.t1);
m.t2 = ifcond(equal(m.chance, 8), (((0.1047*m.x)+(0.0822*m.y))-0.0022), m.t2);
m.t1 = ifcond(equal(m.chance, 9), (((0.0943*m.x)+(0.0786*m.y))+0.0619), m.t1);
m.t2 = ifcond(equal(m.chance, 9), (((-0.1001*m.x)+(0.0738*m.y))+0.2517), m.t2);
m.t1 = ifcond(equal(m.chance, 10), ((0.0859*m.x)+0.5449), m.t1);
m.t2 = ifcond(equal(m.chance, 10), ((0.1057*m.y)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 11), ((-0.1241*m.y)+0.4272), m.t1);
m.t2 = ifcond(equal(m.chance, 11), ((0.3131*m.x)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 12), ((-0.1241*m.y)+0.5449), m.t1);
m.t2 = ifcond(equal(m.chance, 12), ((0.3131*m.x)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 13), (((0.0995*m.x)+(0.0679*m.y))+0.2972), m.t1);
m.t2 = ifcond(equal(m.chance, 13), (((-0.0995*m.x)+(0.0679*m.y))+0.0907), m.t2);
m.t1 = ifcond(equal(m.chance, 14), (((0.0687*m.x)-(0.0597*m.y))+0.3839), m.t1);
m.t2 = ifcond(equal(m.chance, 14), (((0.0687*m.x)+(0.0597*m.y))+0.0969), m.t2);
m.t1 = ifcond(equal(m.chance, 15), (((0.1065*m.x)+(0.0653*m.y))+0.2662), m.t1);
m.t2 = ifcond(equal(m.chance, 15), (((-0.1065*m.x)+(0.0653*m.y))+0.2640), m.t2);
m.t1 = ifcond(equal(m.chance, 16), ((-0.1080*m.y)+0.2972), m.t1);
m.t2 = ifcond(equal(m.chance, 16), ((0.2443*m.x)-0.0022), m.t2);
m.t1 = ifcond(equal(m.chance, 17), (((0.1056*m.x)-(0.0910*m.y))+0.6625), m.t1);
m.t2 = ifcond(equal(m.chance, 17), (((0.1047*m.x)+(0.0918*m.y))+0.0102), m.t2);
m.t1 = ifcond(equal(m.chance, 18), (((0.1035*m.x)+(0.0840*m.y))+0.6068), m.t1);
m.t2 = ifcond(equal(m.chance, 18), (((-0.1103*m.x)+(0.0789*m.y))+0.2579), m.t2);
m.t1 = ifcond(equal(m.chance, 19), (((0.0992*m.x)-(0.0915*m.y))+0.5263), m.t1);
m.t2 = ifcond(equal(m.chance, 19), (((0.0983*m.x)+(0.0822*m.y))+0.1588), m.t2);
m.t1 = ifcond(equal(m.chance, 20), (((0.1003*m.x)+(0.0888*m.y))+0.4706), m.t1);
m.t2 = ifcond(equal(m.chance, 20), (((-0.1069*m.x)+(0.0833*m.y))+0.1031), m.t2);
m.t1 = ifcond(equal(m.chance, 21), (((0.0687*m.x)-(0.0597*m.y))+0.8978), m.t1);
m.t2 = ifcond(equal(m.chance, 21), (((0.0687*m.x)+(0.0597*m.y))+0.0969), m.t2);
m.t1 = ifcond(equal(m.chance, 22), (((0.1065*m.x)+(0.0653*m.y))+0.8235), m.t1);
m.t2 = ifcond(equal(m.chance, 22), (((-0.1065*m.x)+(0.0653*m.y))+0.3074), m.t2);
m.t1 = ifcond(equal(m.chance, 23), ((-0.1145*m.y)+0.8607), m.t1);
m.t2 = ifcond(equal(m.chance, 23), ((0.2875*m.x)-0.0022), m.t2);
m.x = (((m.t1*m.q8)+((1-m.q8)*0.5))+0.02);
m.y = (((m.t2*m.q8)+((1-m.q8)*0.5))+0.15);
m.dist1 = (25*sqrt((sqr((m.x-m.t3))+sqr((m.y-m.t4)))));
m.dist2 = (25*sqrt((sqr((m.x-m.t5))+sqr((m.y-m.t6)))));
m.val1 = ((0.3*m.bass)+(0.5*Math.sin(((m.dist1-m.time)-m.bass))));
m.val2 = ((0.3*m.treb)+(0.5*Math.sin(((m.dist2-m.time)-m.treb))));
m.val = ((m.val1+m.val2)*0.5);
		return m;
	},
		'init_eqs_str' : ('chance = 0;'),
		'frame_eqs_str' : ('t3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't8 = q8;'),
		'point_eqs_str' : ('x = t1;\n' + 'y = t2;\n' + 'chance = rand(24);\n' + 't1 = if(equal(chance,0),-.0955*y+0.7183,t1);\n' + 't2 = if(equal(chance,0),0.3135*x+0.3384,t2);\n' + 't1 = if(equal(chance,1),0.1260*x-0.0583*y+0.7430,t1);\n' + 't2 = if(equal(chance,1),0.1091*x+0.0674*y+0.4932,t2);\n' + 't1 = if(equal(chance,2),0.1206*x+0.0615*y+0.6997,t1);\n' + 't2 = if(equal(chance,2),-.1150*x+0.0645*y+0.4498,t2);\n' + 't1 = if(equal(chance,3),0.0592*x+0.0580*y+0.0867,t1);\n' + 't2 = if(equal(chance,3),-.0592*x+0.0580*y+0.6046,t2);\n' + 't1 = if(equal(chance,4),-.1238*y+0.1115,t1);\n' + 't2 = if(equal(chance,4),0.2705*x+0.3384,t2);\n' + 't1 = if(equal(chance,5),0.0976*x-0.0564*y+0.1796,t1);\n' + 't2 = if(equal(chance,5),0.0976*x+0.0564*y+0.5118,t2);\n' + 't1 = if(equal(chance,6),-.1238*y+0.3158,t1);\n' + 't2 = if(equal(chance,6),0.2705*x+0.3384,t2);\n' + 't1 = if(equal(chance,7),-.0955*y+0.0619,t1);\n' + 't2 = if(equal(chance,7),0.3131*x-0.0022,t2);\n' + 't1 = if(equal(chance,8),0.1057*x-0.0815*y+0.1053,t1);\n' + 't2 = if(equal(chance,8),0.1047*x+0.0822*y-0.0022,t2);\n' + 't1 = if(equal(chance,9),0.0943*x+0.0786*y+0.0619,t1);\n' + 't2 = if(equal(chance,9),-.1001*x+0.0738*y+0.2517,t2);\n' + 't1 = if(equal(chance,10),0.0859*x+0.5449,t1);\n' + 't2 = if(equal(chance,10),0.1057*y+0.3384,t2);\n' + 't1 = if(equal(chance,11),-.1241*y+0.4272,t1);\n' + 't2 = if(equal(chance,11),0.3131*x+0.3384,t2);\n' + 't1 = if(equal(chance,12),-.1241*y+0.5449,t1);\n' + 't2 = if(equal(chance,12),0.3131*x+0.3384,t2);\n' + 't1 = if(equal(chance,13),0.0995*x+0.0679*y+0.2972,t1);\n' + 't2 = if(equal(chance,13),-.0995*x+0.0679*y+0.0907,t2);\n' + 't1 = if(equal(chance,14),0.0687*x-0.0597*y+0.3839,t1);\n' + 't2 = if(equal(chance,14),0.0687*x+0.0597*y+0.0969,t2);\n' + 't1 = if(equal(chance,15),0.1065*x+0.0653*y+0.2662,t1);\n' + 't2 = if(equal(chance,15),-.1065*x+0.0653*y+0.2640,t2);\n' + 't1 = if(equal(chance,16),-.1080*y+0.2972,t1);\n' + 't2 = if(equal(chance,16),0.2443*x-0.0022,t2);\n' + 't1 = if(equal(chance,17),0.1056*x-0.0910*y+0.6625,t1);\n' + 't2 = if(equal(chance,17),0.1047*x+0.0918*y+0.0102,t2);\n' + 't1 = if(equal(chance,18),0.1035*x+0.0840*y+0.6068,t1);\n' + 't2 = if(equal(chance,18),-.1103*x+0.0789*y+0.2579,t2);\n' + 't1 = if(equal(chance,19),0.0992*x-0.0915*y+0.5263,t1);\n' + 't2 = if(equal(chance,19),0.0983*x+0.0822*y+0.1588,t2);\n' + 't1 = if(equal(chance,20),0.1003*x+0.0888*y+0.4706,t1);\n' + 't2 = if(equal(chance,20),-.1069*x+0.0833*y+0.1031,t2);\n' + 't1 = if(equal(chance,21),0.0687*x-0.0597*y+0.8978,t1);\n' + 't2 = if(equal(chance,21),0.0687*x+0.0597*y+0.0969,t2);\n' + 't1 = if(equal(chance,22),0.1065*x+0.0653*y+0.8235,t1);\n' + 't2 = if(equal(chance,22),-.1065*x+0.0653*y+0.3074,t2);\n' + 't1 = if(equal(chance,23),-.1145*y+0.8607,t1);\n' + 't2 = if(equal(chance,23),0.2875*x-0.0022,t2);\n' + 'x = t1*q8 + (1-q8) * 0.5 + 0.02;\n' + 'y = t2*q8 + (1-q8) * 0.5 + 0.15;\n' + 'dist1 = 25 * sqrt(sqr(x-t3)+sqr(y-t4));\n' + 'dist2 = 25 * sqrt(sqr(x-t5)+sqr(y-t6));\n' + 'val1 = 0.3 * bass + 0.5 * sin(dist1-time - bass);\n' + 'val2 = 0.3 * treb + 0.5 * sin(dist2-time - treb);\n' + 'val = (val1 + val2) * 0.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.t5 = 0;
m.val = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.q8 = 0;
m.dist1 = 0;
m.dist2 = 0;
m.val1 = 0;
m.val2 = 0;
m.chance = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.chance = 0;
			m.rkeys = ['t1','t2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
m.t8 = m.q8;
		return m;
	},
		'point_eqs' : function(m) {
m.x = m.t1;
m.y = m.t2;
m.chance = rand(24);
m.t1 = ifcond(equal(m.chance, 0), ((-0.0955*m.y)+0.7183), m.t1);
m.t2 = ifcond(equal(m.chance, 0), ((0.3135*m.x)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 1), (((0.1260*m.x)-(0.0583*m.y))+0.7430), m.t1);
m.t2 = ifcond(equal(m.chance, 1), (((0.1091*m.x)+(0.0674*m.y))+0.4932), m.t2);
m.t1 = ifcond(equal(m.chance, 2), (((0.1206*m.x)+(0.0615*m.y))+0.6997), m.t1);
m.t2 = ifcond(equal(m.chance, 2), (((-0.1150*m.x)+(0.0645*m.y))+0.4498), m.t2);
m.t1 = ifcond(equal(m.chance, 3), (((0.0592*m.x)+(0.0580*m.y))+0.0867), m.t1);
m.t2 = ifcond(equal(m.chance, 3), (((-0.0592*m.x)+(0.0580*m.y))+0.6046), m.t2);
m.t1 = ifcond(equal(m.chance, 4), ((-0.1238*m.y)+0.1115), m.t1);
m.t2 = ifcond(equal(m.chance, 4), ((0.2705*m.x)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 5), (((0.0976*m.x)-(0.0564*m.y))+0.1796), m.t1);
m.t2 = ifcond(equal(m.chance, 5), (((0.0976*m.x)+(0.0564*m.y))+0.5118), m.t2);
m.t1 = ifcond(equal(m.chance, 6), ((-0.1238*m.y)+0.3158), m.t1);
m.t2 = ifcond(equal(m.chance, 6), ((0.2705*m.x)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 7), ((-0.0955*m.y)+0.0619), m.t1);
m.t2 = ifcond(equal(m.chance, 7), ((0.3131*m.x)-0.0022), m.t2);
m.t1 = ifcond(equal(m.chance, 8), (((0.1057*m.x)-(0.0815*m.y))+0.1053), m.t1);
m.t2 = ifcond(equal(m.chance, 8), (((0.1047*m.x)+(0.0822*m.y))-0.0022), m.t2);
m.t1 = ifcond(equal(m.chance, 9), (((0.0943*m.x)+(0.0786*m.y))+0.0619), m.t1);
m.t2 = ifcond(equal(m.chance, 9), (((-0.1001*m.x)+(0.0738*m.y))+0.2517), m.t2);
m.t1 = ifcond(equal(m.chance, 10), ((0.0859*m.x)+0.5449), m.t1);
m.t2 = ifcond(equal(m.chance, 10), ((0.1057*m.y)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 11), ((-0.1241*m.y)+0.4272), m.t1);
m.t2 = ifcond(equal(m.chance, 11), ((0.3131*m.x)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 12), ((-0.1241*m.y)+0.5449), m.t1);
m.t2 = ifcond(equal(m.chance, 12), ((0.3131*m.x)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 13), (((0.0995*m.x)+(0.0679*m.y))+0.2972), m.t1);
m.t2 = ifcond(equal(m.chance, 13), (((-0.0995*m.x)+(0.0679*m.y))+0.0907), m.t2);
m.t1 = ifcond(equal(m.chance, 14), (((0.0687*m.x)-(0.0597*m.y))+0.3839), m.t1);
m.t2 = ifcond(equal(m.chance, 14), (((0.0687*m.x)+(0.0597*m.y))+0.0969), m.t2);
m.t1 = ifcond(equal(m.chance, 15), (((0.1065*m.x)+(0.0653*m.y))+0.2662), m.t1);
m.t2 = ifcond(equal(m.chance, 15), (((-0.1065*m.x)+(0.0653*m.y))+0.2640), m.t2);
m.t1 = ifcond(equal(m.chance, 16), ((-0.1080*m.y)+0.2972), m.t1);
m.t2 = ifcond(equal(m.chance, 16), ((0.2443*m.x)-0.0022), m.t2);
m.t1 = ifcond(equal(m.chance, 17), (((0.1056*m.x)-(0.0910*m.y))+0.6625), m.t1);
m.t2 = ifcond(equal(m.chance, 17), (((0.1047*m.x)+(0.0918*m.y))+0.0102), m.t2);
m.t1 = ifcond(equal(m.chance, 18), (((0.1035*m.x)+(0.0840*m.y))+0.6068), m.t1);
m.t2 = ifcond(equal(m.chance, 18), (((-0.1103*m.x)+(0.0789*m.y))+0.2579), m.t2);
m.t1 = ifcond(equal(m.chance, 19), (((0.0992*m.x)-(0.0915*m.y))+0.5263), m.t1);
m.t2 = ifcond(equal(m.chance, 19), (((0.0983*m.x)+(0.0822*m.y))+0.1588), m.t2);
m.t1 = ifcond(equal(m.chance, 20), (((0.1003*m.x)+(0.0888*m.y))+0.4706), m.t1);
m.t2 = ifcond(equal(m.chance, 20), (((-0.1069*m.x)+(0.0833*m.y))+0.1031), m.t2);
m.t1 = ifcond(equal(m.chance, 21), (((0.0687*m.x)-(0.0597*m.y))+0.8978), m.t1);
m.t2 = ifcond(equal(m.chance, 21), (((0.0687*m.x)+(0.0597*m.y))+0.0969), m.t2);
m.t1 = ifcond(equal(m.chance, 22), (((0.1065*m.x)+(0.0653*m.y))+0.8235), m.t1);
m.t2 = ifcond(equal(m.chance, 22), (((-0.1065*m.x)+(0.0653*m.y))+0.3074), m.t2);
m.t1 = ifcond(equal(m.chance, 23), ((-0.1145*m.y)+0.8607), m.t1);
m.t2 = ifcond(equal(m.chance, 23), ((0.2875*m.x)-0.0022), m.t2);
m.x = (((m.t1*m.q8)+((1-m.q8)*0.5))+0.02);
m.y = (((m.t2*m.q8)+((1-m.q8)*0.5))+0.15);
m.dist1 = (25*sqrt((sqr((m.x-m.t3))+sqr((m.y-m.t4)))));
m.dist2 = (25*sqrt((sqr((m.x-m.t5))+sqr((m.y-m.t6)))));
m.val1 = ((0.3*m.bass)+(0.5*Math.sin(((m.dist1-m.time)-m.bass))));
m.val2 = ((0.3*m.treb)+(0.5*Math.sin(((m.dist2-m.time)-m.treb))));
m.val = ((m.val1+m.val2)*0.5);
		return m;
	},
		'init_eqs_str' : ('chance = 0;'),
		'frame_eqs_str' : ('t3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't8 = q8;'),
		'point_eqs_str' : ('x = t1;\n' + 'y = t2;\n' + 'chance = rand(24);\n' + 't1 = if(equal(chance,0),-.0955*y+0.7183,t1);\n' + 't2 = if(equal(chance,0),0.3135*x+0.3384,t2);\n' + 't1 = if(equal(chance,1),0.1260*x-0.0583*y+0.7430,t1);\n' + 't2 = if(equal(chance,1),0.1091*x+0.0674*y+0.4932,t2);\n' + 't1 = if(equal(chance,2),0.1206*x+0.0615*y+0.6997,t1);\n' + 't2 = if(equal(chance,2),-.1150*x+0.0645*y+0.4498,t2);\n' + 't1 = if(equal(chance,3),0.0592*x+0.0580*y+0.0867,t1);\n' + 't2 = if(equal(chance,3),-.0592*x+0.0580*y+0.6046,t2);\n' + 't1 = if(equal(chance,4),-.1238*y+0.1115,t1);\n' + 't2 = if(equal(chance,4),0.2705*x+0.3384,t2);\n' + 't1 = if(equal(chance,5),0.0976*x-0.0564*y+0.1796,t1);\n' + 't2 = if(equal(chance,5),0.0976*x+0.0564*y+0.5118,t2);\n' + 't1 = if(equal(chance,6),-.1238*y+0.3158,t1);\n' + 't2 = if(equal(chance,6),0.2705*x+0.3384,t2);\n' + 't1 = if(equal(chance,7),-.0955*y+0.0619,t1);\n' + 't2 = if(equal(chance,7),0.3131*x-0.0022,t2);\n' + 't1 = if(equal(chance,8),0.1057*x-0.0815*y+0.1053,t1);\n' + 't2 = if(equal(chance,8),0.1047*x+0.0822*y-0.0022,t2);\n' + 't1 = if(equal(chance,9),0.0943*x+0.0786*y+0.0619,t1);\n' + 't2 = if(equal(chance,9),-.1001*x+0.0738*y+0.2517,t2);\n' + 't1 = if(equal(chance,10),0.0859*x+0.5449,t1);\n' + 't2 = if(equal(chance,10),0.1057*y+0.3384,t2);\n' + 't1 = if(equal(chance,11),-.1241*y+0.4272,t1);\n' + 't2 = if(equal(chance,11),0.3131*x+0.3384,t2);\n' + 't1 = if(equal(chance,12),-.1241*y+0.5449,t1);\n' + 't2 = if(equal(chance,12),0.3131*x+0.3384,t2);\n' + 't1 = if(equal(chance,13),0.0995*x+0.0679*y+0.2972,t1);\n' + 't2 = if(equal(chance,13),-.0995*x+0.0679*y+0.0907,t2);\n' + 't1 = if(equal(chance,14),0.0687*x-0.0597*y+0.3839,t1);\n' + 't2 = if(equal(chance,14),0.0687*x+0.0597*y+0.0969,t2);\n' + 't1 = if(equal(chance,15),0.1065*x+0.0653*y+0.2662,t1);\n' + 't2 = if(equal(chance,15),-.1065*x+0.0653*y+0.2640,t2);\n' + 't1 = if(equal(chance,16),-.1080*y+0.2972,t1);\n' + 't2 = if(equal(chance,16),0.2443*x-0.0022,t2);\n' + 't1 = if(equal(chance,17),0.1056*x-0.0910*y+0.6625,t1);\n' + 't2 = if(equal(chance,17),0.1047*x+0.0918*y+0.0102,t2);\n' + 't1 = if(equal(chance,18),0.1035*x+0.0840*y+0.6068,t1);\n' + 't2 = if(equal(chance,18),-.1103*x+0.0789*y+0.2579,t2);\n' + 't1 = if(equal(chance,19),0.0992*x-0.0915*y+0.5263,t1);\n' + 't2 = if(equal(chance,19),0.0983*x+0.0822*y+0.1588,t2);\n' + 't1 = if(equal(chance,20),0.1003*x+0.0888*y+0.4706,t1);\n' + 't2 = if(equal(chance,20),-.1069*x+0.0833*y+0.1031,t2);\n' + 't1 = if(equal(chance,21),0.0687*x-0.0597*y+0.8978,t1);\n' + 't2 = if(equal(chance,21),0.0687*x+0.0597*y+0.0969,t2);\n' + 't1 = if(equal(chance,22),0.1065*x+0.0653*y+0.8235,t1);\n' + 't2 = if(equal(chance,22),-.1065*x+0.0653*y+0.3074,t2);\n' + 't1 = if(equal(chance,23),-.1145*y+0.8607,t1);\n' + 't2 = if(equal(chance,23),0.2875*x-0.0022,t2);\n' + 'x = t1*q8 + (1-q8) * 0.5 + 0.02;\n' + 'y = t2*q8 + (1-q8) * 0.5 + 0.15;\n' + 'dist1 = 25 * sqrt(sqr(x-t3)+sqr(y-t4));\n' + 'dist2 = 25 * sqrt(sqr(x-t5)+sqr(y-t6));\n' + 'val1 = 0.3 * bass + 0.5 * sin(dist1-time - bass);\n' + 'val2 = 0.3 * treb + 0.5 * sin(dist2-time - treb);\n' + 'val = (val1 + val2) * 0.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.t5 = 0;
m.val = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.q8 = 0;
m.dist1 = 0;
m.dist2 = 0;
m.val1 = 0;
m.val2 = 0;
m.chance = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.chance = 0;
			m.rkeys = ['t1','t2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
m.t8 = m.q8;
		return m;
	},
		'point_eqs' : function(m) {
m.x = m.t1;
m.y = m.t2;
m.chance = rand(24);
m.t1 = ifcond(equal(m.chance, 0), ((-0.0955*m.y)+0.7183), m.t1);
m.t2 = ifcond(equal(m.chance, 0), ((0.3135*m.x)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 1), (((0.1260*m.x)-(0.0583*m.y))+0.7430), m.t1);
m.t2 = ifcond(equal(m.chance, 1), (((0.1091*m.x)+(0.0674*m.y))+0.4932), m.t2);
m.t1 = ifcond(equal(m.chance, 2), (((0.1206*m.x)+(0.0615*m.y))+0.6997), m.t1);
m.t2 = ifcond(equal(m.chance, 2), (((-0.1150*m.x)+(0.0645*m.y))+0.4498), m.t2);
m.t1 = ifcond(equal(m.chance, 3), (((0.0592*m.x)+(0.0580*m.y))+0.0867), m.t1);
m.t2 = ifcond(equal(m.chance, 3), (((-0.0592*m.x)+(0.0580*m.y))+0.6046), m.t2);
m.t1 = ifcond(equal(m.chance, 4), ((-0.1238*m.y)+0.1115), m.t1);
m.t2 = ifcond(equal(m.chance, 4), ((0.2705*m.x)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 5), (((0.0976*m.x)-(0.0564*m.y))+0.1796), m.t1);
m.t2 = ifcond(equal(m.chance, 5), (((0.0976*m.x)+(0.0564*m.y))+0.5118), m.t2);
m.t1 = ifcond(equal(m.chance, 6), ((-0.1238*m.y)+0.3158), m.t1);
m.t2 = ifcond(equal(m.chance, 6), ((0.2705*m.x)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 7), ((-0.0955*m.y)+0.0619), m.t1);
m.t2 = ifcond(equal(m.chance, 7), ((0.3131*m.x)-0.0022), m.t2);
m.t1 = ifcond(equal(m.chance, 8), (((0.1057*m.x)-(0.0815*m.y))+0.1053), m.t1);
m.t2 = ifcond(equal(m.chance, 8), (((0.1047*m.x)+(0.0822*m.y))-0.0022), m.t2);
m.t1 = ifcond(equal(m.chance, 9), (((0.0943*m.x)+(0.0786*m.y))+0.0619), m.t1);
m.t2 = ifcond(equal(m.chance, 9), (((-0.1001*m.x)+(0.0738*m.y))+0.2517), m.t2);
m.t1 = ifcond(equal(m.chance, 10), ((0.0859*m.x)+0.5449), m.t1);
m.t2 = ifcond(equal(m.chance, 10), ((0.1057*m.y)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 11), ((-0.1241*m.y)+0.4272), m.t1);
m.t2 = ifcond(equal(m.chance, 11), ((0.3131*m.x)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 12), ((-0.1241*m.y)+0.5449), m.t1);
m.t2 = ifcond(equal(m.chance, 12), ((0.3131*m.x)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 13), (((0.0995*m.x)+(0.0679*m.y))+0.2972), m.t1);
m.t2 = ifcond(equal(m.chance, 13), (((-0.0995*m.x)+(0.0679*m.y))+0.0907), m.t2);
m.t1 = ifcond(equal(m.chance, 14), (((0.0687*m.x)-(0.0597*m.y))+0.3839), m.t1);
m.t2 = ifcond(equal(m.chance, 14), (((0.0687*m.x)+(0.0597*m.y))+0.0969), m.t2);
m.t1 = ifcond(equal(m.chance, 15), (((0.1065*m.x)+(0.0653*m.y))+0.2662), m.t1);
m.t2 = ifcond(equal(m.chance, 15), (((-0.1065*m.x)+(0.0653*m.y))+0.2640), m.t2);
m.t1 = ifcond(equal(m.chance, 16), ((-0.1080*m.y)+0.2972), m.t1);
m.t2 = ifcond(equal(m.chance, 16), ((0.2443*m.x)-0.0022), m.t2);
m.t1 = ifcond(equal(m.chance, 17), (((0.1056*m.x)-(0.0910*m.y))+0.6625), m.t1);
m.t2 = ifcond(equal(m.chance, 17), (((0.1047*m.x)+(0.0918*m.y))+0.0102), m.t2);
m.t1 = ifcond(equal(m.chance, 18), (((0.1035*m.x)+(0.0840*m.y))+0.6068), m.t1);
m.t2 = ifcond(equal(m.chance, 18), (((-0.1103*m.x)+(0.0789*m.y))+0.2579), m.t2);
m.t1 = ifcond(equal(m.chance, 19), (((0.0992*m.x)-(0.0915*m.y))+0.5263), m.t1);
m.t2 = ifcond(equal(m.chance, 19), (((0.0983*m.x)+(0.0822*m.y))+0.1588), m.t2);
m.t1 = ifcond(equal(m.chance, 20), (((0.1003*m.x)+(0.0888*m.y))+0.4706), m.t1);
m.t2 = ifcond(equal(m.chance, 20), (((-0.1069*m.x)+(0.0833*m.y))+0.1031), m.t2);
m.t1 = ifcond(equal(m.chance, 21), (((0.0687*m.x)-(0.0597*m.y))+0.8978), m.t1);
m.t2 = ifcond(equal(m.chance, 21), (((0.0687*m.x)+(0.0597*m.y))+0.0969), m.t2);
m.t1 = ifcond(equal(m.chance, 22), (((0.1065*m.x)+(0.0653*m.y))+0.8235), m.t1);
m.t2 = ifcond(equal(m.chance, 22), (((-0.1065*m.x)+(0.0653*m.y))+0.3074), m.t2);
m.t1 = ifcond(equal(m.chance, 23), ((-0.1145*m.y)+0.8607), m.t1);
m.t2 = ifcond(equal(m.chance, 23), ((0.2875*m.x)-0.0022), m.t2);
m.x = (((m.t1*m.q8)+((1-m.q8)*0.5))+0.02);
m.y = (((m.t2*m.q8)+((1-m.q8)*0.5))+0.15);
m.dist1 = (25*sqrt((sqr((m.x-m.t3))+sqr((m.y-m.t4)))));
m.dist2 = (25*sqrt((sqr((m.x-m.t5))+sqr((m.y-m.t6)))));
m.val1 = ((0.3*m.bass)+(0.5*Math.sin(((m.dist1-m.time)-m.bass))));
m.val2 = ((0.3*m.treb)+(0.5*Math.sin(((m.dist2-m.time)-m.treb))));
m.val = ((m.val1+m.val2)*0.5);
		return m;
	},
		'init_eqs_str' : ('chance = 0;'),
		'frame_eqs_str' : ('t3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't8 = q8;'),
		'point_eqs_str' : ('x = t1;\n' + 'y = t2;\n' + 'chance = rand(24);\n' + 't1 = if(equal(chance,0),-.0955*y+0.7183,t1);\n' + 't2 = if(equal(chance,0),0.3135*x+0.3384,t2);\n' + 't1 = if(equal(chance,1),0.1260*x-0.0583*y+0.7430,t1);\n' + 't2 = if(equal(chance,1),0.1091*x+0.0674*y+0.4932,t2);\n' + 't1 = if(equal(chance,2),0.1206*x+0.0615*y+0.6997,t1);\n' + 't2 = if(equal(chance,2),-.1150*x+0.0645*y+0.4498,t2);\n' + 't1 = if(equal(chance,3),0.0592*x+0.0580*y+0.0867,t1);\n' + 't2 = if(equal(chance,3),-.0592*x+0.0580*y+0.6046,t2);\n' + 't1 = if(equal(chance,4),-.1238*y+0.1115,t1);\n' + 't2 = if(equal(chance,4),0.2705*x+0.3384,t2);\n' + 't1 = if(equal(chance,5),0.0976*x-0.0564*y+0.1796,t1);\n' + 't2 = if(equal(chance,5),0.0976*x+0.0564*y+0.5118,t2);\n' + 't1 = if(equal(chance,6),-.1238*y+0.3158,t1);\n' + 't2 = if(equal(chance,6),0.2705*x+0.3384,t2);\n' + 't1 = if(equal(chance,7),-.0955*y+0.0619,t1);\n' + 't2 = if(equal(chance,7),0.3131*x-0.0022,t2);\n' + 't1 = if(equal(chance,8),0.1057*x-0.0815*y+0.1053,t1);\n' + 't2 = if(equal(chance,8),0.1047*x+0.0822*y-0.0022,t2);\n' + 't1 = if(equal(chance,9),0.0943*x+0.0786*y+0.0619,t1);\n' + 't2 = if(equal(chance,9),-.1001*x+0.0738*y+0.2517,t2);\n' + 't1 = if(equal(chance,10),0.0859*x+0.5449,t1);\n' + 't2 = if(equal(chance,10),0.1057*y+0.3384,t2);\n' + 't1 = if(equal(chance,11),-.1241*y+0.4272,t1);\n' + 't2 = if(equal(chance,11),0.3131*x+0.3384,t2);\n' + 't1 = if(equal(chance,12),-.1241*y+0.5449,t1);\n' + 't2 = if(equal(chance,12),0.3131*x+0.3384,t2);\n' + 't1 = if(equal(chance,13),0.0995*x+0.0679*y+0.2972,t1);\n' + 't2 = if(equal(chance,13),-.0995*x+0.0679*y+0.0907,t2);\n' + 't1 = if(equal(chance,14),0.0687*x-0.0597*y+0.3839,t1);\n' + 't2 = if(equal(chance,14),0.0687*x+0.0597*y+0.0969,t2);\n' + 't1 = if(equal(chance,15),0.1065*x+0.0653*y+0.2662,t1);\n' + 't2 = if(equal(chance,15),-.1065*x+0.0653*y+0.2640,t2);\n' + 't1 = if(equal(chance,16),-.1080*y+0.2972,t1);\n' + 't2 = if(equal(chance,16),0.2443*x-0.0022,t2);\n' + 't1 = if(equal(chance,17),0.1056*x-0.0910*y+0.6625,t1);\n' + 't2 = if(equal(chance,17),0.1047*x+0.0918*y+0.0102,t2);\n' + 't1 = if(equal(chance,18),0.1035*x+0.0840*y+0.6068,t1);\n' + 't2 = if(equal(chance,18),-.1103*x+0.0789*y+0.2579,t2);\n' + 't1 = if(equal(chance,19),0.0992*x-0.0915*y+0.5263,t1);\n' + 't2 = if(equal(chance,19),0.0983*x+0.0822*y+0.1588,t2);\n' + 't1 = if(equal(chance,20),0.1003*x+0.0888*y+0.4706,t1);\n' + 't2 = if(equal(chance,20),-.1069*x+0.0833*y+0.1031,t2);\n' + 't1 = if(equal(chance,21),0.0687*x-0.0597*y+0.8978,t1);\n' + 't2 = if(equal(chance,21),0.0687*x+0.0597*y+0.0969,t2);\n' + 't1 = if(equal(chance,22),0.1065*x+0.0653*y+0.8235,t1);\n' + 't2 = if(equal(chance,22),-.1065*x+0.0653*y+0.3074,t2);\n' + 't1 = if(equal(chance,23),-.1145*y+0.8607,t1);\n' + 't2 = if(equal(chance,23),0.2875*x-0.0022,t2);\n' + 'x = t1*q8 + (1-q8) * 0.5 + 0.02;\n' + 'y = t2*q8 + (1-q8) * 0.5 + 0.15;\n' + 'dist1 = 25 * sqrt(sqr(x-t3)+sqr(y-t4));\n' + 'dist2 = 25 * sqrt(sqr(x-t5)+sqr(y-t6));\n' + 'val1 = 0.3 * bass + 0.5 * sin(dist1-time - bass);\n' + 'val2 = 0.3 * treb + 0.5 * sin(dist2-time - treb);\n' + 'val = (val1 + val2) * 0.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.t5 = 0;
m.val = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.q8 = 0;
m.dist1 = 0;
m.dist2 = 0;
m.val1 = 0;
m.val2 = 0;
m.chance = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.chance = 0;
			m.rkeys = ['t1','t2'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
m.t8 = m.q8;
		return m;
	},
		'point_eqs' : function(m) {
m.x = m.t1;
m.y = m.t2;
m.chance = rand(24);
m.t1 = ifcond(equal(m.chance, 0), ((-0.0955*m.y)+0.7183), m.t1);
m.t2 = ifcond(equal(m.chance, 0), ((0.3135*m.x)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 1), (((0.1260*m.x)-(0.0583*m.y))+0.7430), m.t1);
m.t2 = ifcond(equal(m.chance, 1), (((0.1091*m.x)+(0.0674*m.y))+0.4932), m.t2);
m.t1 = ifcond(equal(m.chance, 2), (((0.1206*m.x)+(0.0615*m.y))+0.6997), m.t1);
m.t2 = ifcond(equal(m.chance, 2), (((-0.1150*m.x)+(0.0645*m.y))+0.4498), m.t2);
m.t1 = ifcond(equal(m.chance, 3), (((0.0592*m.x)+(0.0580*m.y))+0.0867), m.t1);
m.t2 = ifcond(equal(m.chance, 3), (((-0.0592*m.x)+(0.0580*m.y))+0.6046), m.t2);
m.t1 = ifcond(equal(m.chance, 4), ((-0.1238*m.y)+0.1115), m.t1);
m.t2 = ifcond(equal(m.chance, 4), ((0.2705*m.x)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 5), (((0.0976*m.x)-(0.0564*m.y))+0.1796), m.t1);
m.t2 = ifcond(equal(m.chance, 5), (((0.0976*m.x)+(0.0564*m.y))+0.5118), m.t2);
m.t1 = ifcond(equal(m.chance, 6), ((-0.1238*m.y)+0.3158), m.t1);
m.t2 = ifcond(equal(m.chance, 6), ((0.2705*m.x)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 7), ((-0.0955*m.y)+0.0619), m.t1);
m.t2 = ifcond(equal(m.chance, 7), ((0.3131*m.x)-0.0022), m.t2);
m.t1 = ifcond(equal(m.chance, 8), (((0.1057*m.x)-(0.0815*m.y))+0.1053), m.t1);
m.t2 = ifcond(equal(m.chance, 8), (((0.1047*m.x)+(0.0822*m.y))-0.0022), m.t2);
m.t1 = ifcond(equal(m.chance, 9), (((0.0943*m.x)+(0.0786*m.y))+0.0619), m.t1);
m.t2 = ifcond(equal(m.chance, 9), (((-0.1001*m.x)+(0.0738*m.y))+0.2517), m.t2);
m.t1 = ifcond(equal(m.chance, 10), ((0.0859*m.x)+0.5449), m.t1);
m.t2 = ifcond(equal(m.chance, 10), ((0.1057*m.y)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 11), ((-0.1241*m.y)+0.4272), m.t1);
m.t2 = ifcond(equal(m.chance, 11), ((0.3131*m.x)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 12), ((-0.1241*m.y)+0.5449), m.t1);
m.t2 = ifcond(equal(m.chance, 12), ((0.3131*m.x)+0.3384), m.t2);
m.t1 = ifcond(equal(m.chance, 13), (((0.0995*m.x)+(0.0679*m.y))+0.2972), m.t1);
m.t2 = ifcond(equal(m.chance, 13), (((-0.0995*m.x)+(0.0679*m.y))+0.0907), m.t2);
m.t1 = ifcond(equal(m.chance, 14), (((0.0687*m.x)-(0.0597*m.y))+0.3839), m.t1);
m.t2 = ifcond(equal(m.chance, 14), (((0.0687*m.x)+(0.0597*m.y))+0.0969), m.t2);
m.t1 = ifcond(equal(m.chance, 15), (((0.1065*m.x)+(0.0653*m.y))+0.2662), m.t1);
m.t2 = ifcond(equal(m.chance, 15), (((-0.1065*m.x)+(0.0653*m.y))+0.2640), m.t2);
m.t1 = ifcond(equal(m.chance, 16), ((-0.1080*m.y)+0.2972), m.t1);
m.t2 = ifcond(equal(m.chance, 16), ((0.2443*m.x)-0.0022), m.t2);
m.t1 = ifcond(equal(m.chance, 17), (((0.1056*m.x)-(0.0910*m.y))+0.6625), m.t1);
m.t2 = ifcond(equal(m.chance, 17), (((0.1047*m.x)+(0.0918*m.y))+0.0102), m.t2);
m.t1 = ifcond(equal(m.chance, 18), (((0.1035*m.x)+(0.0840*m.y))+0.6068), m.t1);
m.t2 = ifcond(equal(m.chance, 18), (((-0.1103*m.x)+(0.0789*m.y))+0.2579), m.t2);
m.t1 = ifcond(equal(m.chance, 19), (((0.0992*m.x)-(0.0915*m.y))+0.5263), m.t1);
m.t2 = ifcond(equal(m.chance, 19), (((0.0983*m.x)+(0.0822*m.y))+0.1588), m.t2);
m.t1 = ifcond(equal(m.chance, 20), (((0.1003*m.x)+(0.0888*m.y))+0.4706), m.t1);
m.t2 = ifcond(equal(m.chance, 20), (((-0.1069*m.x)+(0.0833*m.y))+0.1031), m.t2);
m.t1 = ifcond(equal(m.chance, 21), (((0.0687*m.x)-(0.0597*m.y))+0.8978), m.t1);
m.t2 = ifcond(equal(m.chance, 21), (((0.0687*m.x)+(0.0597*m.y))+0.0969), m.t2);
m.t1 = ifcond(equal(m.chance, 22), (((0.1065*m.x)+(0.0653*m.y))+0.8235), m.t1);
m.t2 = ifcond(equal(m.chance, 22), (((-0.1065*m.x)+(0.0653*m.y))+0.3074), m.t2);
m.t1 = ifcond(equal(m.chance, 23), ((-0.1145*m.y)+0.8607), m.t1);
m.t2 = ifcond(equal(m.chance, 23), ((0.2875*m.x)-0.0022), m.t2);
m.x = (((m.t1*m.q8)+((1-m.q8)*0.5))+0.02);
m.y = (((m.t2*m.q8)+((1-m.q8)*0.5))+0.15);
m.dist1 = (25*sqrt((sqr((m.x-m.t3))+sqr((m.y-m.t4)))));
m.dist2 = (25*sqrt((sqr((m.x-m.t5))+sqr((m.y-m.t6)))));
m.val1 = ((0.3*m.bass)+(0.5*Math.sin(((m.dist1-m.time)-m.bass))));
m.val2 = ((0.3*m.treb)+(0.5*Math.sin(((m.dist2-m.time)-m.treb))));
m.val = ((m.val1+m.val2)*0.5);
		return m;
	},
		'init_eqs_str' : ('chance = 0;'),
		'frame_eqs_str' : ('t3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't8 = q8;'),
		'point_eqs_str' : ('x = t1;\n' + 'y = t2;\n' + 'chance = rand(24);\n' + 't1 = if(equal(chance,0),-.0955*y+0.7183,t1);\n' + 't2 = if(equal(chance,0),0.3135*x+0.3384,t2);\n' + 't1 = if(equal(chance,1),0.1260*x-0.0583*y+0.7430,t1);\n' + 't2 = if(equal(chance,1),0.1091*x+0.0674*y+0.4932,t2);\n' + 't1 = if(equal(chance,2),0.1206*x+0.0615*y+0.6997,t1);\n' + 't2 = if(equal(chance,2),-.1150*x+0.0645*y+0.4498,t2);\n' + 't1 = if(equal(chance,3),0.0592*x+0.0580*y+0.0867,t1);\n' + 't2 = if(equal(chance,3),-.0592*x+0.0580*y+0.6046,t2);\n' + 't1 = if(equal(chance,4),-.1238*y+0.1115,t1);\n' + 't2 = if(equal(chance,4),0.2705*x+0.3384,t2);\n' + 't1 = if(equal(chance,5),0.0976*x-0.0564*y+0.1796,t1);\n' + 't2 = if(equal(chance,5),0.0976*x+0.0564*y+0.5118,t2);\n' + 't1 = if(equal(chance,6),-.1238*y+0.3158,t1);\n' + 't2 = if(equal(chance,6),0.2705*x+0.3384,t2);\n' + 't1 = if(equal(chance,7),-.0955*y+0.0619,t1);\n' + 't2 = if(equal(chance,7),0.3131*x-0.0022,t2);\n' + 't1 = if(equal(chance,8),0.1057*x-0.0815*y+0.1053,t1);\n' + 't2 = if(equal(chance,8),0.1047*x+0.0822*y-0.0022,t2);\n' + 't1 = if(equal(chance,9),0.0943*x+0.0786*y+0.0619,t1);\n' + 't2 = if(equal(chance,9),-.1001*x+0.0738*y+0.2517,t2);\n' + 't1 = if(equal(chance,10),0.0859*x+0.5449,t1);\n' + 't2 = if(equal(chance,10),0.1057*y+0.3384,t2);\n' + 't1 = if(equal(chance,11),-.1241*y+0.4272,t1);\n' + 't2 = if(equal(chance,11),0.3131*x+0.3384,t2);\n' + 't1 = if(equal(chance,12),-.1241*y+0.5449,t1);\n' + 't2 = if(equal(chance,12),0.3131*x+0.3384,t2);\n' + 't1 = if(equal(chance,13),0.0995*x+0.0679*y+0.2972,t1);\n' + 't2 = if(equal(chance,13),-.0995*x+0.0679*y+0.0907,t2);\n' + 't1 = if(equal(chance,14),0.0687*x-0.0597*y+0.3839,t1);\n' + 't2 = if(equal(chance,14),0.0687*x+0.0597*y+0.0969,t2);\n' + 't1 = if(equal(chance,15),0.1065*x+0.0653*y+0.2662,t1);\n' + 't2 = if(equal(chance,15),-.1065*x+0.0653*y+0.2640,t2);\n' + 't1 = if(equal(chance,16),-.1080*y+0.2972,t1);\n' + 't2 = if(equal(chance,16),0.2443*x-0.0022,t2);\n' + 't1 = if(equal(chance,17),0.1056*x-0.0910*y+0.6625,t1);\n' + 't2 = if(equal(chance,17),0.1047*x+0.0918*y+0.0102,t2);\n' + 't1 = if(equal(chance,18),0.1035*x+0.0840*y+0.6068,t1);\n' + 't2 = if(equal(chance,18),-.1103*x+0.0789*y+0.2579,t2);\n' + 't1 = if(equal(chance,19),0.0992*x-0.0915*y+0.5263,t1);\n' + 't2 = if(equal(chance,19),0.0983*x+0.0822*y+0.1588,t2);\n' + 't1 = if(equal(chance,20),0.1003*x+0.0888*y+0.4706,t1);\n' + 't2 = if(equal(chance,20),-.1069*x+0.0833*y+0.1031,t2);\n' + 't1 = if(equal(chance,21),0.0687*x-0.0597*y+0.8978,t1);\n' + 't2 = if(equal(chance,21),0.0687*x+0.0597*y+0.0969,t2);\n' + 't1 = if(equal(chance,22),0.1065*x+0.0653*y+0.8235,t1);\n' + 't2 = if(equal(chance,22),-.1065*x+0.0653*y+0.3074,t2);\n' + 't1 = if(equal(chance,23),-.1145*y+0.8607,t1);\n' + 't2 = if(equal(chance,23),0.2875*x-0.0022,t2);\n' + 'x = t1*q8 + (1-q8) * 0.5 + 0.02;\n' + 'y = t2*q8 + (1-q8) * 0.5 + 0.15;\n' + 'dist1 = 25 * sqrt(sqr(x-t3)+sqr(y-t4));\n' + 'dist2 = 25 * sqrt(sqr(x-t5)+sqr(y-t6));\n' + 'val1 = 0.3 * bass + 0.5 * sin(dist1-time - bass);\n' + 'val2 = 0.3 * treb + 0.5 * sin(dist2-time - treb);\n' + 'val = (val1 + val2) * 0.5;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 6.03186,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.6839,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.0277,
			x : 0.5,
			y : 0.5,
			ang : 6.03186,
			sides : 12.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.pt3x = 0;
m.pt2x = 0;
m.pt3y = 0;
m.pt1x = 0;
m.pt2y = 0;
m.pt1y = 0;
m.fang = 0;
m.fcx = 0;
m.fcy = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.fcx = 0.5;
m.fcy = 0.5;
m.fang = 3.34;
m.pt1x = (m.fcx+(0.5*Math.cos((m.fang+0.491))));
m.pt1y = (m.fcy+(0.5*Math.sin((m.fang+0.491))));
m.pt2x = (m.fcx+(0.39*Math.cos((m.fang+1.372))));
m.pt2y = (m.fcy+(0.39*Math.sin((m.fang+1.372))));
m.pt3x = (m.fcx+(0.255*Math.cos(m.fang)));
m.pt3y = (m.fcy+(0.255*Math.sin(m.fang)));
m.x = m.pt1x;
m.y = m.pt1y;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('fcx = 0.5;\n' + 'fcy = 0.5;\n' + 'fang = 3.34;\n' + 'pt1x = fcx + 0.5 * cos(fang+0.491);\n' + 'pt1y = fcy + 0.5 * sin(fang+0.491);\n' + 'pt2x = fcx + 0.39 * cos(fang+1.372);\n' + 'pt2y = fcy + 0.39 * sin(fang+1.372);\n' + 'pt3x = fcx + 0.255 * cos(fang);\n' + 'pt3y = fcy + 0.255 * sin(fang);\n' + 'x = pt1x;\n' + 'y = pt1y;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 0.69074,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.3,
			r : 1.0,
			border_g : 1.0,
			rad : 0.03734,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 12.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.q5 = 0;
m.q6 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q5;
m.y = m.q6;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = q5;\n' + 'y = q6;'),

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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 cse_2;\n' + '  cse_2 = texture2D (sampler_main, uv_orig);\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (texsize.zw * 2.0);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec3 tmpvar_8;\n' + '  tmpvar_8 = (((tmpvar_4.xyz * scale1) + bias1) - ((tmpvar_6.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv + (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_9 = texture2D (sampler_blur1, P_10);\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (uv - (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = (((tmpvar_9.xyz * scale1) + bias1) - ((tmpvar_11.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15.x = tmpvar_8.x;\n' + '  tmpvar_15.y = tmpvar_13.x;\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16 = (texture2D (sampler_noise_lq, tmpvar_14).xyz - 0.5).xy;\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17 = ((mix (uv_orig, uv, vec2(-0.4, -0.4)) - (tmpvar_15 * texsize.zw)) + ((tmpvar_16 * texsize.zw) * 2.0));\n' + '   float tmpvar_18;\n' + '  tmpvar_18 = (texture2D (sampler_main, tmpvar_17).x - 0.001);\n' + '  ret_1.x = tmpvar_18;\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = tmpvar_8.y;\n' + '  tmpvar_19.y = tmpvar_13.y;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = ((uv + (vec2(-1.0, 2.0) * texsize.zw)) - ((tmpvar_19 * texsize.zw) * 3.0));\n' + '   float tmpvar_21;\n' + '  tmpvar_21 = max ((cse_2.z - (cse_2.x * 2.0)), (texture2D (sampler_fc_main, tmpvar_20).y - 0.004));\n' + '  ret_1.y = tmpvar_21;\n' + '   vec2 tmpvar_22;\n' + '  tmpvar_22.x = tmpvar_8.z;\n' + '  tmpvar_22.y = tmpvar_13.z;\n' + '   vec2 tmpvar_23;\n' + '  tmpvar_23 = (mix (uv_orig, uv, vec2(-0.2, -0.2)) + ((tmpvar_22 * texsize.zw) * 2.0));\n' + '   float tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_fc_main, tmpvar_23).z;\n' + '  ret_1.z = tmpvar_24;\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25 = texture2D (sampler_main, tmpvar_23);\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26 = texture2D (sampler_blur1, tmpvar_23);\n' + '  ret_1.z = (ret_1.z + ((\n' + '    ((((tmpvar_26.xyz * scale1) + bias1).z - tmpvar_25.z) * 0.04)\n' + '   - 0.08) + (ret_1.x * 0.2)));\n' + '   vec4 tmpvar_27;\n' + '  tmpvar_27.w = 1.0;\n' + '  tmpvar_27.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_27;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur1, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur1, P_6);\n' + '   vec3 tmpvar_7;\n' + '  tmpvar_7 = (((tmpvar_3.xyz * scale1) + bias1) - ((tmpvar_5.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = (((tmpvar_8.xyz * scale1) + bias1) - ((tmpvar_10.xyz * scale1) + bias1));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13.x = tmpvar_7.z;\n' + '  tmpvar_13.y = tmpvar_12.z;\n' + '   vec2 tmpvar_14;\n' + '  tmpvar_14.x = tmpvar_7.y;\n' + '  tmpvar_14.y = tmpvar_12.y;\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15 = ((uv + (tmpvar_13 * 0.02)) - ((tmpvar_14 * texsize.zw) * 16.0));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_blur3, tmpvar_15);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur1, tmpvar_15);\n' + '   vec3 tmpvar_18;\n' + '  tmpvar_18 = vec3((texture2D (sampler_main, tmpvar_15).y * 0.9));\n' + '   vec2 tmpvar_19;\n' + '  tmpvar_19.x = tmpvar_7.z;\n' + '  tmpvar_19.y = tmpvar_12.z;\n' + '   vec2 tmpvar_20;\n' + '  tmpvar_20 = (uv + ((tmpvar_19 * texsize.zw) * 2.0));\n' + '   vec4 tmpvar_21;\n' + '  tmpvar_21 = texture2D (sampler_blur1, tmpvar_20);\n' + '   vec3 tmpvar_22;\n' + '  tmpvar_22 = clamp (mix (mix (\n' + '    mix ((((tmpvar_16.xyz * scale3) + bias3).y * vec3(1.7, 0.0, 0.0)), vec3(-0.4, -0.5, 0.0), vec3((((tmpvar_17.xyz * scale1) + bias1).y * 1.2)))\n' + '  , vec3(2.0, 2.0, 0.0), tmpvar_18), vec3(0.0, 0.0, 0.0), vec3((\n' + '    ((tmpvar_21.xyz * scale1) + bias1)\n' + '  .z * 2.0))), 0.0, 1.0);\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23 = mix (tmpvar_22, vec3(0.7, 0.6, 1.0), texture2D (sampler_main, tmpvar_20).zzz);\n' + '  ret_1 = tmpvar_23;\n' + '   vec3 tmpvar_24;\n' + '  tmpvar_24 = vec3((clamp ((\n' + '    (texture2D (sampler_main, tmpvar_20).x * 2.0)\n' + '   - 1.0), 0.0, 1.0) * 1.2));\n' + '   vec3 tmpvar_25;\n' + '  tmpvar_25 = mix (ret_1, vec3(1.0, 0.9, 0.9), tmpvar_24);\n' + '  ret_1 = tmpvar_25;\n' + '   vec4 tmpvar_26;\n' + '  tmpvar_26.w = 1.0;\n' + '  tmpvar_26.xyz = tmpvar_25;\n' + '  vec4 ret4 = tmpvar_26;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('q3 = 0.5 + 0.4 * cos(time * 0.4);\n' + 'q4 = 0.5 + 0.4 * sin(time * 0.14);\n' + 'q5 = 0.5 - 0.4 * sin(time * 0.21);\n' + 'q6 = 0.5 + 0.4 * cos(time * 0.13);\n' + 'q8 = 1;\n' + 'zoom = 1;\n' + 'wave_x = 0.1 + rand(80)/100;\n' + 'wave_y = 0.1 + rand(80)/100;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});
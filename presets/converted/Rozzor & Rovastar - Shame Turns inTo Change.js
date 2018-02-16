define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.7,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 0.199861,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.999997,
		ob_r : 1.0,
		sy : 0.999999,
		ib_size : 0.5,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.999995,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 1.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 0.91397,
		ob_size : 0.005,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.0,
		wave_y : 0.5,
		zoom : 0.9995,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.26,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 1.0,
		decay : 0.902,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.treb_thresh = 0;
m.q1 = 0;
m.blue_aim = 0;
m.yang = 0;
m.treb_on = 0;
m.green = 0;
m.ying = 0;
m.green_aim = 0;
m.slowtime = 0;
m.red = 0;
m.any_on = 0;
m.mid_on = 0;
m.red_aim = 0;
m.blue = 0;
m.bass_thresh = 0;
m.yin = 0;
m.swapcolour = 0;
m.bass_on = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.bass_thresh = ((above(m.bass_att, m.bass_thresh)*2)+((1-above(m.bass_att, m.bass_thresh))*(((m.bass_thresh-1.4)*0.85)+1.4)));
m.treb_thresh = ((above(m.treb_att, m.treb_thresh)*2)+((1-above(m.treb_att, m.treb_thresh))*(((m.treb_thresh-1.5)*0.75)+1.5)));
m.bass_on = above(m.bass_thresh, 1.8);
m.treb_on = above(m.treb_thresh, 1.9);
m.swapcolour = (m.bass_on-m.treb_on);
m.red_aim = ifcond(equal(m.swapcolour, 1), 1, ifcond(equal(m.swapcolour, 0), 1, 0));
m.green_aim = ifcond(equal(m.swapcolour, 1), 0, ifcond(equal(m.swapcolour, 0), 0.5, 0.25));
m.blue_aim = ifcond(equal(m.swapcolour, 1), 0, ifcond(equal(m.swapcolour, 0), 0, 1));
m.red = (m.red+((m.red_aim-m.red)*ifcond(equal(m.swapcolour, 1), 0.65, 0.45)));
m.green = (m.green+((m.green_aim-m.green)*0.5));
m.blue = (m.blue+((m.blue_aim-m.blue)*ifcond(equal(m.swapcolour, 1), 0.45, 0.65)));
m.wave_r = (m.red+(0.2*m.green));
m.wave_g = (0.15*m.green);
m.wave_b = (m.green+m.blue);
m.slowtime = ((m.slowtime+bnot(mod((m.time*100),41)))+0.001);
m.rot = (0.1*Math.sin(m.slowtime));
m.ying = ifcond(below(m.ying, 1), 1, m.ying);
m.any_on = bnot(mod(((m.bass_on+m.mid_on)+m.treb_on),3));
m.ying = ifcond(m.any_on, (m.ying+bnot(mod((m.time*10),3))), m.ying);
m.yin = mod(m.ying,2);
m.ob_r = ((-1*Math.cos(m.ying))+Math.abs((-1*Math.cos(m.ying))));
m.ob_b = (Math.cos(m.ying)+Math.abs(Math.cos(m.ying)));
m.ob_g = Math.abs(Math.sin(m.ying));
m.mv_r = (0.7-(0.2*Math.sin((m.time*0.683))));
m.mv_b = (0.9+(0.1*Math.sin((m.time*0.832))));
m.mv_g = (0.2+(0.17*Math.sin((m.time*1.03))));
m.mv_r = (0.7+(0.148*(m.ib_r+m.ib_b)));
m.mv_b = (1-(0.2*(m.ib_r+m.ib_b)));
m.mv_g = (0.6+(0.19*(m.ib_g+m.ib_r)));
m.q1 = (0.32+div((m.bass+(m.bass_att*2)),20));
m.dx = ifcond(m.yin, Math.sin(m.slowtime), ifcond(equal(m.yin, m.yang), 0, m.dx));
m.dy = ifcond(m.yin, (0.01*Math.cos(m.slowtime)), 0);
m.yang = bnot(m.yin);
m.monitor = m.any_on;
		m.rkeys = ['cx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = ifcond(above(m.x, m.q1), div(Math.sin(((m.q1*1.1)-m.x)),5), div(log10(div(1,m.x)),15));
m.cx = (m.cx-(0.75*Math.sin((m.rad+m.q1))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.4)*0.85+1.4);\n' + 'treb_thresh = above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.5)*0.75+1.5);\n' + 'bass_on = above(bass_thresh,1.8);\n' + 'treb_on = above(treb_thresh,1.9);\n' + 'swapcolour = bass_on - treb_on;\n' + 'red_aim = if(equal(swapcolour,1),1,if(equal(swapcolour,0),1,0));\n' + 'green_aim = if(equal(swapcolour,1),0,if(equal(swapcolour,0),0.5,0.25));\n' + 'blue_aim = if(equal(swapcolour,1),0,if(equal(swapcolour,0),0,1));\n' + 'red = red + (red_aim - red)*if(equal(swapcolour,1),0.65,0.45);\n' + 'green = green + (green_aim - green)*0.5;\n' + 'blue = blue + (blue_aim - blue)*if(equal(swapcolour,1),0.45,0.65);\n' + 'wave_r = red + 0.2*GREEN;\n' + 'wave_g = 0.15*green;\n' + 'wave_b = green+BLUE;\n' + 'slowtime = slowtime + bnot(time*100%41)+.001;\n' + 'rot = .1*sin(slowtime);\n' + 'ying = if(below(ying,1),1,ying);\n' + 'any_on =bnot((bass_on+mid_on+treb_on)%3);\n' + 'ying = if (any_on,ying + bnot(time*10%3),ying);\n' + 'yin = ying%2;\n' + 'ob_r = (-1 * cos(ying))  + abs(-1 * cos(ying)) ;\n' + 'ob_b = cos(ying)  + abs(cos(ying));\n' + 'ob_g = abs(sin(ying)) ;\n' + 'mv_r = 0.7 - 0.2*sin(time*0.683);\n' + 'mv_b = 0.9 + 0.1*sin(time*0.832);\n' + 'mv_g = 0.2 + 0.17*sin(time*1.03);\n' + 'mv_r =0.7+0.148*(ib_r+ib_b);\n' + 'mv_b =1-0.2*(ib_r+ib_b);\n' + 'mv_g =0.6+ 0.19*(ib_g+ib_r);\n' + 'q1 = 0.32+(bass + bass_att*2)/20;\n' + 'dx = if(yin,sin(slowtime),if(equal(yin,yang),0,dx));\n' + 'dy = if(yin,.01*cos(slowtime),0);\n' + 'yang = bnot(yin);\n' + 'monitor = any_on;'),
	'pixel_eqs_str' : ('dx =if(above(x,q1),sin(q1*1.1-x)/5, log10(1/x)/15);\n' + 'cx = cx - .75*sin(rad+q1);'),
};

return pmap;
});
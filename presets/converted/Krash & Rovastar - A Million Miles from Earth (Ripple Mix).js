define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 1.0,
		ib_g : 0.6,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 2.0,
		wave_scale : 0.535234,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.4,
		sy : 1.0,
		ib_size : 0.01,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 1.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : -0.1,
		mv_a : 0.5,
		fshader : 1.0,
		wave_r : 1.0,
		ib_r : 1.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
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
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.0,
		wave_mystery : -0.5,
		decay : 1.0,
		wave_a : 1.0,
		ob_g : 0.3,
		ib_a : 1.0,
		wave_b : 1.0,
		ib_b : 0.0,
		mv_r : 0.2,
		rating : 0.0,
		modwavealphastart : 0.5,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.dx_r = 0;
m.dy_r = 0;
m.test = 0;
m.newzoom = 0;
m.newrad = 0;
m.newx = 0;
m.newy = 0;
m.ypos = 0;
m.thresh = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.wave_r = (0.5+(0.3*Math.sin((m.time*0.894))));
m.wave_g = (0.53+(0.33*Math.sin((m.time*1.14))));
m.wave_b = (0.4+(0.1*(1-m.bass)));
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.test = equal(m.thresh, 2);
m.dx_r = (((m.test*0.002)*Math.sin((5*m.time)))+((1-m.test)*m.dx_r));
m.dy_r = (((m.test*0.002)*Math.sin((6*m.time)))+((1-m.test)*m.dy_r));
m.zoom = (m.zoom-(0.01*m.thresh));
m.dx = (1.1*m.dx_r);
m.dy = (1.1*m.dy_r);
m.dx = (m.dx+ifcond(above(m.bass, 1.3), (21*m.dx_r), 0));
m.mv_x = ifcond(m.test, 2, 64);
m.mv_y = ifcond(m.test, 64, 2);
m.mv_dx = ifcond(m.test, -0.1, 0);
m.mv_dy = ifcond(m.test, 0, -0.1);
m.mv_a = ifcond(m.test, 1, 0.5);
m.xpos = (m.xpos+(0.05*((80*m.dx_r)-m.xpos)));
m.ypos = (m.ypos+(0.05*((80*m.dy_r)-m.ypos)));
m.wave_x = ((0.5-m.xpos)+(0.1*Math.sin((2*m.time))));
m.wave_y = ((0.5-m.ypos)+(0.1*Math.cos((2*m.time))));
m.q1 = m.wave_x;
m.q2 = (1-m.wave_y);
		m.rkeys = ['dy','dx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.newx = (m.x-m.q1);
m.newy = (m.y-m.q2);
m.newrad = (sqrt(((m.newx*m.newx)+((0.5625*m.newy)*m.newy)))*2);
m.newzoom = pow(1.03, pow((0.01+Math.sin((m.newrad*m.newrad))), ((m.newrad*2)-1)));
m.dx = ((Math.min((5*m.newrad), 1)*m.dx)+(Math.max(((-m.newrad*5)+1), 0)*((m.newx*m.newzoom)-m.newx)));
m.dy = ((Math.min((5*m.newrad), 1)*m.dy)+(Math.max(((-m.newrad*5)+1), 0)*((m.newy*m.newzoom)-m.newy)));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp = 0;\n' + 'wave_r = 0.5 + 0.3*sin(time*0.894);\n' + 'wave_g = 0.53 + 0.33*sin(time*1.14);\n' + 'wave_b = 0.4 + 0.1*(1-bass);\n' + 'thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'test = equal(thresh,2);\n' + 'dx_r = test*0.002*sin(5*time)+(1-test)*dx_r;\n' + 'dy_r = test*0.002*sin(6*time)+(1-test)*dy_r;\n' + 'zoom = zoom -0.01*thresh;\n' + 'dx = 1.1* dx_r;\n' + 'dy = 1.1* dy_r;\n' + 'dx = dx + if (above(bass,1.3), 21*dx_r, 0);\n' + 'mv_x = if(test,2,64);\n' + 'mv_y = if(test,64,2);\n' + 'mv_dx = if(test,-0.1,0);\n' + 'mv_dy = if(test,0,-0.1);\n' + 'mv_a = if(test,1,0.5);\n' + 'xpos = xpos + 0.05*(80*dx_r - xpos);\n' + 'ypos = ypos + 0.05*(80*dy_r - ypos);\n' + 'wave_x = 0.5 - xpos + 0.1*sin(2*time);\n' + 'wave_y = 0.5 - ypos + 0.1*cos(2*time);\n' + 'q1 = wave_x;\n' + 'q2 = 1 - wave_y;'),
	'pixel_eqs_str' : ('newx = x - q1;\n' + 'newy = y - q2;\n' + 'newrad = sqrt((newx)*(newx)+0.5625*(newy)*(newy))*2;\n' + 'newzoom = pow(1.03, pow(0.01+sin(newrad*newrad), newrad*2-1));\n' + 'dx = min(5*newrad,1)*dx + max(-newrad*5+1,0)*((newx)*newzoom - newx);\n' + 'dy = min(5*newrad,1)*dy + max(-newrad*5+1,0)*((newy)*newzoom - newy);'),
};

return pmap;
});
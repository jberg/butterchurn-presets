define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.98,
		wave_g : 0.5,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.660126,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 5.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.2,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.25,
		mv_b : 0.65,
		echo_zoom : 1.006596,
		ob_size : 0.005,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.45,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.3,
		decay : 1.0,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.25,
		mv_r : 0.15,
		rating : 5.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.wang = 0;
m.green = 0;
m.amp = 0;
m.in = 0;
m.q8 = 0;
m.yamp = 0;
m.xamp = 0;
m.yamptarg = 0;
m.xamptarg = 0;
m.oldq8 = 0;
m.yspeed = 0;
m.xspeed = 0;
m.vol = 0;
m.ydir = 0;
m.xdir = 0;
m.beat = 0;
m.trebcap = 0;
m.ypos = 0;
m.xpos = 0;
m.frametest = 0;
m.q8 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.ib_a = (0.2*m.bass);
m.wave_r = (m.wave_r+(0.45*((0.5*Math.sin((m.time*0.701)))+(0.3*Math.cos((m.time*0.438))))));
m.wave_b = (m.wave_b-(0.4*((0.5*Math.sin((m.time*4.782)))+(0.5*Math.cos((m.time*0.522))))));
m.wave_g = (m.wave_g+(0.4*Math.sin((m.time*1.731))));
m.decay = (m.decay-(equal(mod(m.frame,100), 0)*0.1));
m.vol = (0.167*(m.bass+m.mid));
m.xamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.5*m.vol)*m.bass_att), 0.5), m.xamptarg);
m.xamp = (m.xamp+(0.5*(m.xamptarg-m.xamp)));
m.xdir = ifcond(above(Math.abs(m.xpos), m.xamp), -sign(m.xpos), ifcond(below(Math.abs(m.xspeed), 0.1), ((2*above(m.xpos, 0))-1), m.xdir));
m.xspeed = (((m.xspeed+(m.xdir*m.xamp))-m.xpos)-((m.xspeed*0.055)*below(Math.abs(m.xpos), m.xamp)));
m.xpos = (m.xpos+(0.001*m.xspeed));
m.wave_x = ((1.5*m.xpos)+0.5);
m.yamptarg = ifcond(equal(mod(m.frame,15), 0), Math.min(((0.3*m.vol)*m.treb_att), 0.5), m.yamptarg);
m.yamp = (m.yamp+(0.5*(m.yamptarg-m.yamp)));
m.ydir = ifcond(above(Math.abs(m.ypos), m.yamp), -sign(m.ypos), ifcond(below(Math.abs(m.yspeed), 0.1), ((2*above(m.ypos, 0))-1), m.ydir));
m.yspeed = (((m.yspeed+(m.ydir*m.yamp))-m.ypos)-((m.yspeed*0.055)*below(Math.abs(m.ypos), m.yamp)));
m.ypos = (m.ypos+(0.001*m.yspeed));
m.wave_y = ((1.5*m.ypos)+0.5);
m.zoom = 0.995;
m.frametest = mod(m.frame,2);
m.wave_x = ifcond(m.frametest, (1-m.wave_x), m.wave_x);
m.wave_y = ifcond(m.frametest, (1-m.wave_y), m.wave_y);
m.wave_r = ifcond(m.frametest, m.wave_r, m.wave_g);
m.wave_g = ifcond(m.frametest, m.wave_g, m.wave_b);
m.wave_b = ifcond(m.frametest, m.wave_b, m.wave_r);
m.monitor = m.green;
m.q8 = (m.oldq8+(0.0005*div(pow(((((((1+(1.2*m.bass))+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)));
m.oldq8 = m.q8;
m.mv_g = (0.5+(m.bass_att*0.1));
m.beat = ifcond(above((m.bass*m.bass_att), 4.5), (1-m.beat), m.beat);
m.q1 = ((m.beat*2)-1);
m.amp = ((m.amp*0.8)+((0.2*((m.bass_att+m.mid_att)+m.treb_att))*0.3));
m.q2 = Math.min(m.amp, 1);
m.trebcap = ((m.trebcap*0.7)+(0.16*m.treb));
m.q3 = (m.trebcap*2);
m.monitor = m.q3;
		m.rkeys = ['dy','dx'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.dx = ((m.dx+(0.008*Math.sin((((m.y*2)-1)*(48+(12*Math.sin((0.412*m.q8))))))))+(0.008*Math.sin(((((m.y+Math.sin((m.time*0.163)))*2)-1)*(3+Math.sin((0.241*m.q8)))))));
m.dy = ((m.dy+(0.008*Math.cos((((m.x*2)-1)*(64+(18*Math.sin((0.376*m.q8))))))))+(0.008*Math.sin(((((m.x+Math.sin((m.q8*0.282)))*2)-1)*(3+Math.sin((0.349*m.q8)))))));
m.wang = ((((3+m.q3)*m.x)+(m.time*1.7))+(m.bass*0.1));
m.in = 0;
m.in = (m.in+(below(Math.abs((m.x-0.25)), 0.05)*below(Math.abs((m.y-0.5)), 0.25)));
m.in = below(Math.abs((m.y-(0.5+((0.5*Math.sin(m.wang))*m.q2)))), 0.1);
m.in = bnot(bnot(m.in));
m.dx = (m.dx+(0.02*m.in));
m.dy = (m.dy+(((0.08*Math.cos(m.wang))*m.q2)*m.in));
m.dx = (m.dx+((bnot(m.in)*0.005)*m.q1));
m.dy = (m.dy+(((bnot(m.in)*Math.cos(m.wang))*-0.01)*m.q1));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('q8=0;'),
	'frame_eqs_str' : ('warp=0;\n' + 'ib_a =0.2*bass;\n' + 'wave_r = wave_r + 0.45*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));\n' + 'wave_b = wave_b - 0.4*(0.5*sin(time*4.782)+0.5*cos(time*0.522));\n' + 'wave_g = wave_g + 0.4*sin(time*1.731);\n' + 'decay = decay - equal(frame%100,0)*0.1;\n' + 'vol = 0.167*(bass+mid);\n' + 'xamptarg = if(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);\n' + 'xamp = xamp + 0.5*(xamptarg-xamp);\n' + 'xdir = if(above(abs(xpos),xamp),-sign(xpos),if(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));\n' + 'xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);\n' + 'xpos = xpos + 0.001*xspeed;\n' + 'wave_x = 1.5*xpos + 0.5;\n' + 'yamptarg = if(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);\n' + 'yamp = yamp + 0.5*(yamptarg-yamp);\n' + 'ydir = if(above(abs(ypos),yamp),-sign(ypos),if(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));\n' + 'yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);\n' + 'ypos = ypos + 0.001*yspeed;\n' + 'wave_y = 1.5*ypos + 0.5;\n' + 'zoom = .995;\n' + 'frametest = frame%2;\n' + 'wave_x = if(frametest,1-wave_x,wave_x);\n' + 'wave_y = if(frametest,1-wave_y,wave_y);\n' + 'wave_r = if(frametest,wave_r,wave_g);\n' + 'wave_g = if(frametest,wave_g,wave_b);\n' + 'wave_b = if(frametest,wave_b,wave_r);\n' + 'monitor = green;\n' + 'q8 =  oldq8+ 0.0005*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);\n' + 'oldq8 = q8;\n' + 'mv_g=0.5+bass_att*.1;\n' + 'beat=if(above(bass*bass_att,4.5),1-beat,beat);\n' + 'q1=beat*2-1;\n' + 'amp =amp*.8+.2*(bass_att+mid_att+treb_att)*.3;\n' + 'q2 = min(amp,1);\n' + 'trebcap=trebcap*.7+.16*treb;\n' + 'q3=trebcap*2;\n' + 'monitor = q3;'),
	'pixel_eqs_str' : ('dx=dx+0.008*sin((y*2-1)*(48+12*sin(0.412*q8)))+0.008*sin(((y+sin(time*0.163))*2-1)* (3+sin(0.241*q8)));\n' + 'dy=dy+0.008*cos((x*2-1)*(64+18*sin(0.376*q8)))+0.008*sin(((x+sin(q8*0.282))*2-1) *(3+sin(0.349*q8)));\n' + 'wang = (3+q3)*x+time*1.7+bass*.1;\n' + 'in = 0;\n' + 'in = in + below(abs(x-.25),.05)*below(abs(y-.5),.25);\n' + 'in = below(abs(y-(.5+.5*sin(wang)*q2)),.1);\n' + 'in=bnot(bnot(in));\n' + 'dx = dx+.02*in;\n' + 'dy = dy+.08*cos(wang)*q2*in;\n' + 'dx = dx+bnot(in)*.005*q1;\n' + 'dy = dy+bnot(in)*cos(wang)*-.01*q1;'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.14,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 11.52,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 10.559999,
		wave_scale : 1.001829,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 0.905286,
		ob_r : 0.1,
		sy : 0.932718,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 1.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.5,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 0.591237,
		ob_size : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.001827,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.01,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.1,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.5,
		decay : 0.91,
		wave_a : 1.008018,
		ob_g : 0.1,
		ib_a : 0.5,
		wave_b : 0.65,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.yang = 0;
m.q3 = 0;
m.q5 = 0;
m.ying = 0;
m.vol_now = 0;
m.greenneg = 0;
m.slowtime = 0;
m.solipsist = 0;
m.vol_mean = 0;
m.blueneg = 0;
m.beat = 0;
m.new_x = 0;
m.beatcount = 0;
m.new_y = 0;
m.yin = 0;
m.redneg = 0;
m.warp = 0;
m.beatcount = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.slowtime = (m.slowtime+(m.beat*m.time));
m.ying = ifcond(below(m.ying, 1), 1, m.ying);
m.ying = ifcond(m.beat, (m.ying+bnot(mod((m.time*10),3))), m.ying);
m.yin = mod(m.ying,2);
m.vol_now = ((0.4*m.bass)+(0.1*((m.bass_att+m.treb)+m.mid)));
m.vol_mean = ifcond(equal(mod(m.frame,50), 0), (m.vol_mean-(0.5*(m.vol_mean-m.vol_now))), (0.1*((m.vol_mean*9)+m.vol_now)));
m.beat = ifcond(above(m.vol_now, (1.5*m.vol_mean)), 1, 0);
m.beatcount = ifcond(bnot(mod(m.time,5000)), 0, m.beatcount);
m.beatcount = (m.beatcount+(0.05*m.beat));
m.yang = bnot(mod(m.beatcount,2));
m.ib_r = 0;
m.ib_g = (pow(Math.abs(sign(Math.sin(m.slowtime))), 2)*Math.sin(m.slowtime));
m.ib_b = ((Math.cos(m.slowtime)*sign(Math.cos(m.slowtime)))*pow(Math.abs(sign(Math.sin(m.slowtime))), 2));
m.mv_g = ((Math.sin(m.slowtime)*(sign(Math.sin(m.slowtime))-1))*sign(Math.sin(m.slowtime)));
m.mv_b = ((-1*Math.abs(Math.cos(m.slowtime)))+1);
m.mv_r = 0.8;
m.redneg = ifcond(below(m.ib_r, 0), 1, 0);
m.greenneg = ifcond(below(m.ib_g, 0), 1, 0);
m.blueneg = ifcond(below(m.ib_b, 0), 1, 0);
m.wave_r = ifcond(m.redneg, ifcond(bor(m.greenneg, m.blueneg), 1, (1+m.ib_r)), m.ib_r);
m.wave_g = ifcond(m.greenneg, ifcond(equal((m.greenneg+m.blueneg), 2), 1, (1+m.ib_g)), m.ib_g);
m.wave_b = ifcond(m.blueneg, (1+m.ib_b), m.ib_b);
m.q1 = ifcond(m.yin, Math.sin(m.slowtime), m.q1);
m.q2 = ifcond(m.yin, Math.cos(m.slowtime), 0);
m.q3 = Math.sin(m.beatcount);
m.dx = ifcond(m.yin, (0.01*Math.sin(m.slowtime)), ifcond(equal(m.yin, m.yang), 0, m.dx));
m.dy = ifcond(m.yin, (0.01*Math.cos(m.slowtime)), 0);
m.q5 = ifcond(bnot(m.yin), Math.abs(Math.cos(m.time)), m.dx);
m.wave_mystery = (m.wave_mystery-(1*Math.sin(((m.time*0.65)*Math.sin(m.q3)))));
m.wave_mode = rand(mod(m.slowtime,12));
		m.rkeys = ['zoom','sy','rot'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.solipsist = ifcond(equal(m.q3, 0), 0, (0.01*((m.rad-(m.q3*m.x))+(pow(m.q3, 4)*m.y))));
m.rot = (((m.rot+Math.sin(m.rad))-(5*m.solipsist))-(1.5*m.q5));
m.sy = ifcond(equal(m.q3, 0), m.sy, (1-m.solipsist));
m.new_x = ((m.rad*0.05)-m.x);
m.new_y = ((m.rad*0.05)-m.y);
m.zoom = ((m.zoom+((0.01*Math.sin((m.ang-((m.rad*3.14)*Math.sin((ifcond(above(m.q2, m.q1), 0.5, -0.5)*Math.sin((m.new_x*m.new_y))))))))*Math.sin(ifcond(above(m.q3, m.q1), 0.5, -0.5))))-(0.03*Math.sin(((m.ang*5)-(m.rad*Math.sin(ifcond(above(m.q3, m.q2), 0.5, -0.5)))))));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('warp = 0;\n' + 'beatcount = 0;'),
	'frame_eqs_str' : ('slowtime = slowtime+beat*time;\n' + 'ying = if(below(ying,1),1,ying);\n' + 'ying = if (beat,ying + bnot(time*10%3),ying);\n' + 'yin = ying%2;\n' + 'vol_now =  .4 * bass + 0.1 * (bass_att+treb+mid);\n' + 'vol_mean =  if(equal(frame%50,0),vol_mean-0.5*(vol_mean-vol_now),0.1*(vol_mean*9 + vol_now));\n' + 'beat = if(above(vol_now,1.5*vol_mean),1,0);\n' + 'beatcount = if(bnot(time%5000),0,beatcount);\n' + 'beatcount = beatcount +.05*beat;\n' + 'yang = bnot(beatcount%2);\n' + 'ib_r = 0;\n' + 'ib_g = pow(abs(sign(sin(slowtime))),2)*sin(slowtime);\n' + 'ib_b= cos(slowtime)*sign(cos(slowtime))*pow(abs(sign(sin(slowtime))),2);\n' + 'mv_g = sin(slowtime)*(sign(sin(slowtime))-1)*(sign(sin(slowtime)));\n' + 'mv_b = -1*abs(cos(slowtime))+1;\n' + 'mv_r = .8;\n' + 'redneg = if(below(ib_r,0),1,0);\n' + 'greenneg = if(below(ib_g,0),1,0);\n' + 'blueneg = if(below(ib_b,0),1,0);\n' + 'wave_r = if(redneg,if(bor(greenneg , blueneg),1,1+ib_r),ib_r);\n' + 'wave_g = if(greenneg,if(equal(greenneg + blueneg,2),1,1+ib_g),ib_g);\n' + 'wave_b = if(blueneg,1 + ib_b, ib_b);\n' + 'q1 = if(yin,sin(slowtime),q1);\n' + 'q2 = if(yin,cos(slowtime),0);\n' + 'q3 = sin(beatcount);\n' + 'dx = if(yin,.01*sin(slowtime),if(equal(yin,yang),0,dx));\n' + 'dy = if(yin,.01*cos(slowtime),0);\n' + 'q5 = if(bnot(yin),abs(cos(time)),dx);\n' + 'wave_mystery=wave_mystery-1*sin(time*.65*sin(q3));\n' + 'wave_mode=rand(slowtime%12);'),
	'pixel_eqs_str' : ('solipsist = if(equal(q3,0),0,.01*( rad - q3*x + pow(q3,4)*y));\n' + 'rot = rot + sin(rad)-5*solipsist-1.5*q5;\n' + 'sy = if(equal(q3,0),sy,1-solipsist);\n' + 'new_x=rad*.05-x;\n' + 'new_y=rad*.05-y;\n' + 'zoom=zoom+.01*sin(ang-rad*3.14*sin(if(Above(q2,q1),.5,-.5)*sin(new_X*new_y)))*sin(if(Above(q3,q1),.5,-.5))-.03*sin(Ang*5-rad*sin(if(Above(q3,q2),.5,-.5)));'),
};

return pmap;
});
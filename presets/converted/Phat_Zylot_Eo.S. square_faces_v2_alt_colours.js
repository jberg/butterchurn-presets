define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 12.799995,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 38.400002,
		wave_scale : 2.850136,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 1.0,
		ib_r : 0.25,
		mv_b : 0.81,
		echo_zoom : 1.001829,
		ob_size : 0.005,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 1.0,
		mv_g : 0.65,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.800001,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.925,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.44,
		rating : 2.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.ag = 0;
m.cdelay1 = 0;
m.cdelay2 = 0;
m.rd = 0;
m.star = 0;
m.musictime = 0;
m.zm = 0;
m.counter1 = 0;
m.counter2 = 0;
m.colorcounter = 0;
m.ypos = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.counter1 = ifcond(equal(m.counter2, 1), ifcond(equal(m.counter1, 1), 0, (m.counter1+0.2)), 1);
m.counter2 = ifcond(equal(m.counter1, 1), ifcond(equal(m.counter2, 1), 0, (m.counter2+0.2)), 1);
m.cdelay1 = ifcond(equal(m.cdelay2, 1), 1, ifcond(equal(mod(m.colorcounter,2), 1), ifcond(equal(m.counter1, 1), 2, 0), ifcond(equal(m.counter2, 1), 2, 0)));
m.cdelay2 = ifcond(equal(m.cdelay1, 2), 1, 0);
m.colorcounter = ifcond(above(m.colorcounter, 7), 0, ifcond(equal(m.cdelay1, 1), (m.colorcounter+1), m.colorcounter));
m.ib_r = (0.5*ifcond(equal(m.colorcounter, 1), 1, ifcond(equal(m.colorcounter, 2), 1, ifcond(equal(m.colorcounter, 3), 1, ifcond(equal(m.colorcounter, 4), Math.sin((m.counter2+2.1)), ifcond(equal(m.colorcounter, 5), 0, ifcond(equal(m.colorcounter, 6), 0, Math.sin(m.counter1))))))));
m.ib_g = (0.5*ifcond(equal(m.colorcounter, 1), 0, ifcond(equal(m.colorcounter, 2), Math.sin((m.counter2*0.5)), ifcond(equal(m.colorcounter, 3), Math.sin(((m.counter1+1.75)*0.4)), ifcond(equal(m.colorcounter, 4), 1, ifcond(equal(m.colorcounter, 5), 1, ifcond(equal(m.colorcounter, 6), Math.sin((m.counter2+2)), 0)))))));
m.ib_b = ifcond(equal(m.colorcounter, 1), Math.sin((m.counter1+2.1)), ifcond(equal(m.colorcounter, 2), 0, ifcond(equal(m.colorcounter, 3), 0, ifcond(equal(m.colorcounter, 4), 0, ifcond(equal(m.colorcounter, 5), Math.sin(m.counter1), ifcond(equal(m.colorcounter, 6), 1, 1))))));
m.ob_r = (m.ib_r-0.5);
m.ob_g = (m.ib_g-0.5);
m.ob_b = (m.ib_b-0.5);
m.q1 = m.ib_r;
m.q2 = m.ib_g;
m.q3 = m.ib_b;
m.decay = 0.9999;
m.musictime = (m.musictime+(((m.mid*m.mid)*m.mid)*0.02));
m.xpos = (Math.sin((m.musictime*0.6))*0.3);
m.ypos = (Math.sin((m.musictime*0.4))*0.3);
m.q4 = m.xpos;
m.q5 = m.ypos;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = 0.99;
m.cx = (0.5+m.q4);
m.cy = (0.5-m.q5);
m.rd = sqrt((sqr((((m.x-0.5)-m.q4)*2))+sqr((((m.y-0.5)+m.q5)*1.5))));
m.zm = 0.99;
m.ag = Math.atan(div(((m.y-0.5)+m.q5),((m.x-0.5)-m.q4)));
m.star = (Math.sin(div(m.ag,5))*(2-m.rd));
m.zm = (m.zm+div(m.star,20));
m.sx = m.zm;
m.sy = m.zm;
m.rot = div((div(above(m.rd, 0.7),(m.rd+7))*(m.bass_att*0.1)),m.rd);
m.dx = div(((Math.sin((m.x*50))*(m.bass*0.005))*m.ag),(m.rd*5));
m.dy = div(((Math.cos((m.y*50))*(m.bass*0.005))*m.ag),(m.rd*5));
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
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.basstime = 0;
m.axs1 = 0;
m.axs2 = 0;
m.smp = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.xq = 0;
m.ys = 0;
m.xs = 0;
m.t1 = 0;
m.angy = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.basstime = (m.basstime+(m.bass*m.bass));
m.t1 = (m.basstime*0.003);
		return m;
	},
		'point_eqs' : function(m) {
m.smp = (m.sample*6.283);
m.xp = (Math.sin(m.smp)*0.20);
m.yp = (Math.cos(m.smp)*0.20);
m.zp = 0;
m.angy = (Math.sin((((m.sample*6.28)*4)+m.t1))*6.28);
m.xq = ((m.xp*Math.cos(m.angy))-(m.zp*Math.sin(m.angy)));
m.zq = ((m.xp*Math.sin(m.angy))+(m.zp*Math.cos(m.angy)));
m.xp = m.xq;
m.zp = m.zq;
m.angy = (m.t1*0.1);
m.xq = ((m.xp*Math.cos(m.angy))-(m.zp*Math.sin(m.angy)));
m.zq = ((m.xp*Math.sin(m.angy))+(m.zp*Math.cos(m.angy)));
m.xp = m.xq;
m.zp = m.zq;
m.axs1 = (Math.sin((m.t1*0.15))+1.6);
m.yq = ((m.yp*Math.cos(m.axs1))-(m.zp*Math.sin(m.axs1)));
m.zq = ((m.yp*Math.sin(m.axs1))+(m.zp*Math.cos(m.axs1)));
m.yp = m.yq;
m.zp = m.zq;
m.axs2 = (Math.sin((m.t1*0.1))*3.3);
m.xq = ((m.xp*Math.cos(m.axs2))-(m.zp*Math.sin(m.axs2)));
m.zq = ((m.xp*Math.sin(m.axs2))+(m.zp*Math.cos(m.axs2)));
m.xp = m.xq;
m.zp = m.zq;
m.yp = (m.yp*1.2);
m.zp = (m.zp+2.1);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = ((m.xs+0.5)+m.q4);
m.y = ((m.ys+0.5)+m.q5);
m.r = (1-m.q1);
m.g = (1-m.q2);
m.b = (1-m.q3);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('basstime=basstime+(bass*bass);\n' + 't1=basstime*0.003;'),
		'point_eqs_str' : ('smp=sample*6.283;\n' + 'xp=sin(smp )*0.20;\n' + 'yp=cos(smp )*0.20;\n' + 'zp=0;\n' + 'angy=sin(sample*6.28*4 +t1 )*6.28;\n' + 'xq=xp*cos(angy) - zp*sin(angy);\n' + 'zq=xp*sin(angy) + zp*cos(angy);\n' + 'xp=xq;\n' + 'zp=zq;\n' + 'angy=t1*0.1;\n' + 'xq=xp*cos(angy) - zp*sin(angy);\n' + 'zq=xp*sin(angy) + zp*cos(angy);\n' + 'xp=xq;\n' + 'zp=zq;\n' + 'axs1 = sin(t1*0.15) + 1.6;\n' + 'yq= yp*cos(axs1) - zp*sin(axs1);\n' + 'zq= yp*sin(axs1) + zp*cos(axs1);\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'axs2 = sin(t1*0.1)*3.3;\n' + 'xq=xp*cos(axs2) - zp*sin(axs2);\n' + 'zq=xp*sin(axs2) + zp*cos(axs2);\n' + 'xp=xq;\n' + 'zp=zq;\n' + 'yp=yp*1.2;\n' + 'zp=zp+2.1;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5+q4;\n' + 'y=ys+0.5+q5;\n' + 'r=1-q1;\n' + 'g=1-q2;\n' + 'b=1-q3;'),

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
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.01,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.15493,
			x : 0.5,
			y : 0.7,
			ang : 0.0,
			sides : 23.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.y = ((m.bass_att*0.5)+0.2);
m.x = ((Math.cos((m.time*2))*0.5)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('y=bass_att*0.5+0.2;\n' + 'x=cos(time*2)*0.5+0.5;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 3.141593,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.572684,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.801999,
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
m.ang = (above(0.5, m.treb_att)*0.063);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=above(0.5,treb_att)*.063;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.01,
			additive : 1.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.9,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = ((Math.sin((m.time*5))*0.4)+0.5);
m.y = (m.treb_att*0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x = sin(time*5) * .4 + .5;\n' + 'y=treb_att*0.5;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.01,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.033004,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (0.5+(m.bass*0.07));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=.5+(bass*0.07);'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('wave_a = 0;\n' + 'counter1 = if(equal(counter2,1),if(equal(counter1,1),0,counter1+.2),1);\n' + 'counter2 = if(equal(counter1,1),if(equal(counter2,1),0,counter2+.2),1);\n' + 'cdelay1 = if(equal(cdelay2,1),1,if(equal(colorcounter%2,1),if(equal(counter1,1),2 ,0), if(equal(counter2,1),2,0)));\n' + 'cdelay2 = if(equal(cdelay1,2),1,0);\n' + 'colorcounter = if(above(colorcounter,7),0,if(equal(cdelay1,1),colorcounter+1,colorcounter));\n' + 'ib_r = .5*if(equal(colorcounter,1),1, if(equal(colorcounter,2),1, if(equal(colorcounter,3),1, if(equal(colorcounter,4),sin(counter2+2.1), if(equal(colorcounter,5),0, if(equal(colorcounter,6),0,sin(counter1)))))));\n' + 'ib_g = .5*if(equal(colorcounter,1),0, if(equal(colorcounter,2),sin(counter2*.5), if(equal(colorcounter,3),sin((counter1+1.75)*.4), if(equal(colorcounter,4),1, if(equal(colorcounter,5),1, if(equal(colorcounter,6),sin(counter2+2),0))))));\n' + 'ib_b = if(equal(colorcounter,1),sin(counter1+2.1), if(equal(colorcounter,2),0, if(equal(colorcounter,3),0, if(equal(colorcounter,4),0, if(equal(colorcounter,5),sin(counter1), if(equal(colorcounter,6),1,1))))));\n' + 'ob_r=ib_r-0.5;\n' + 'ob_g=ib_g-0.5;\n' + 'ob_b=ib_b-0.5;\n' + 'q1=ib_r;\n' + 'q2=ib_g;\n' + 'q3=ib_b;\n' + 'decay = 0.9999;\n' + 'musictime=musictime+(mid*mid*mid)*0.02;\n' + 'xpos=sin(musictime*0.6)*0.3;\n' + 'ypos=sin(musictime*0.4)*0.3;\n' + 'q4=xpos;\n' + 'q5=ypos;'),
	'pixel_eqs_str' : ('zoom=.99;\n' + 'cx=0.5+q4;\n' + 'cy=0.5-q5;\n' + 'rd=sqrt( sqr( (x-0.5-q4)*2) + sqr( (y-0.5+q5)*1.5 ) );\n' + 'zm=.99;\n' + 'ag=atan( (y-0.5+q5)/(x-0.5-q4) );\n' + 'star=sin(ag/5)*(2-rd);\n' + 'zm=zm+star/20;\n' + 'sx=zm;\n' + 'sy=zm;\n' + 'rot=above(rd,0.7)/(rd+7)*(bass_att*0.1)/rd;\n' + 'dx=sin(x*50)*(bass*0.005)*ag/(rd*5);\n' + 'dy=cos(y*50)*(bass*0.005)*ag/(rd*5);'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 12.799995,
		warpscale : 1.331,
		brighten : 1.0,
		mv_y : 38.400002,
		wave_scale : 2.850136,
		echo_alpha : 0.0,
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
		echo_zoom : 1.008151,
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
		ob_a : 0.0,
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
		ib_a : 0.4,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.44,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.q4 = 0;
m.q5 = 0;
m.ag = 0;
m.rd = 0;
m.star = 0;
m.musictime = 0;
m.zm = 0;
m.ypos = 0;
m.xpos = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.wave_a = 0;
m.ib_r = Math.tan((m.time*1));
m.ib_r = Math.min(m.ib_r, 1);
m.ib_r = Math.max(m.ib_r, 0);
m.ib_g = Math.tan(((m.time*1)+2.1));
m.ib_g = Math.min(m.ib_g, 1);
m.ib_g = Math.max(m.ib_g, 0);
m.ib_b = Math.tan(((m.time*1)+4.2));
m.ib_b = Math.min(m.ib_b, 1);
m.ib_b = Math.max(m.ib_b, 0);
m.ob_r = (m.ib_r-0.5);
m.ob_g = (m.ib_g-0.5);
m.ob_b = (m.ib_b-0.5);
m.q1 = m.ib_r;
m.q2 = m.ib_g;
m.q3 = m.ib_b;
m.decay = 0.999;
m.musictime = (m.musictime+(div((m.mid+m.bass),2)*0.02));
m.xpos = (Math.sin((m.musictime*0.4))*0.3);
m.ypos = (Math.sin((m.musictime*0.4))*0.3);
m.q4 = m.xpos;
m.q5 = m.ypos;
		m.rkeys = ['ag','rd'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.sx = (-0.95+((m.bass*0.5)*m.rd));
m.sy = (-0.95-((m.treb*0.5)*m.ag));
m.cx = (0.5+m.q4);
m.cy = (0.5-m.q5);
m.rd = sqrt((sqr((((m.x-0.5)-m.q4)*2))+sqr((((m.y-0.5)+m.q5)*1.5))));
m.zm = 0.95;
m.ag = Math.atan(div(((m.y-0.5)+m.q5),((m.x-0.5)-m.q4)));
m.star = div((Math.atan((m.ag*6))*((4-m.rd)-m.ag)),5);
m.zm = (m.zm+(div((m.star*m.ag),20)*m.ag));
m.sx = m.zm;
m.sy = m.zm;
m.dx = (Math.sin((m.y*140))*(m.bass*0.01));
m.dy = (Math.cos((m.x*140))*(m.bass*0.01));
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
m.xp = (Math.sin(m.smp)*0.05);
m.yp = (Math.cos(m.smp)*0.05);
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
		'point_eqs_str' : ('smp=sample*6.283;\n' + 'xp=sin(smp )*0.05;\n' + 'yp=cos(smp )*0.05;\n' + 'zp=0;\n' + 'angy=sin(sample*6.28*4 +t1 )*6.28;\n' + 'xq=xp*cos(angy) - zp*sin(angy);\n' + 'zq=xp*sin(angy) + zp*cos(angy);\n' + 'xp=xq;\n' + 'zp=zq;\n' + 'angy=t1*0.1;\n' + 'xq=xp*cos(angy) - zp*sin(angy);\n' + 'zq=xp*sin(angy) + zp*cos(angy);\n' + 'xp=xq;\n' + 'zp=zq;\n' + 'axs1 = sin(t1*0.15) + 1.6;\n' + 'yq= yp*cos(axs1) - zp*sin(axs1);\n' + 'zq= yp*sin(axs1) + zp*cos(axs1);\n' + 'yp=yq;\n' + 'zp=zq;\n' + 'axs2 = sin(t1*0.1)*3.3;\n' + 'xq=xp*cos(axs2) - zp*sin(axs2);\n' + 'zq=xp*sin(axs2) + zp*cos(axs2);\n' + 'xp=xq;\n' + 'zp=zq;\n' + 'yp=yp*1.2;\n' + 'zp=zp+2.1;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5+q4;\n' + 'y=ys+0.5+q5;\n' + 'r=1-q1;\n' + 'g=1-q2;\n' + 'b=1-q3;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
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
m.ys = 0;
m.xs = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.xs = Math.sin((m.sample*6.28));
m.ys = Math.cos((m.sample*6.28));
m.xs = ((m.xs*0.7)+0.5);
m.ys = ((m.ys*0.7)+0.5);
m.xs = Math.min(m.xs, 0.962);
m.xs = Math.max(m.xs, 0.038);
m.ys = Math.min(m.ys, 0.992);
m.ys = Math.max(m.ys, 0.008);
m.x = m.xs;
m.y = m.ys;
m.r = ((Math.sin(((m.sample*6.28)+m.time))*0.5)+0.5);
m.g = ((Math.sin((((m.sample*6.28)+2.1)+m.time))*0.5)+0.5);
m.b = ((Math.sin((((m.sample*6.28)+4.2)+m.time))*0.5)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('xs=sin(sample*6.28);\n' + 'ys=cos(sample*6.28);\n' + 'xs=xs*0.7 + 0.5;\n' + 'ys=ys*0.7 + 0.5;\n' + 'xs=min(xs,0.962);\n' + 'xs=max(xs,0.038);\n' + 'ys=min(ys,0.992);\n' + 'ys=max(ys,0.008);\n' + 'x=xs;\n' + 'y=ys;\n' + 'r=sin(sample*6.28+time)*0.5+0.5;\n' + 'g=sin(sample*6.28+2.1+time)*0.5+0.5;\n' + 'b=sin(sample*6.28+4.2+time)*0.5+0.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
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
m.ys = 0;
m.xs = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.xs = Math.sin((m.sample*6.28));
m.ys = Math.cos((m.sample*6.28));
m.xs = ((m.xs*0.7)+0.5);
m.ys = ((m.ys*0.7)+0.5);
m.xs = Math.min(m.xs, 0.958);
m.xs = Math.max(m.xs, 0.042);
m.ys = Math.min(m.ys, 0.988);
m.ys = Math.max(m.ys, 0.012);
m.x = m.xs;
m.y = m.ys;
m.r = ((Math.sin(((m.sample*6.28)+m.time))*0.5)+0.5);
m.g = ((Math.sin((((m.sample*6.28)+2.1)+m.time))*0.5)+0.5);
m.b = ((Math.sin((((m.sample*6.28)+4.2)+m.time))*0.5)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('xs=sin(sample*6.28);\n' + 'ys=cos(sample*6.28);\n' + 'xs=xs*0.7 + 0.5;\n' + 'ys=ys*0.7 + 0.5;\n' + 'xs=min(xs,0.958);\n' + 'xs=max(xs,0.042);\n' + 'ys=min(ys,0.988);\n' + 'ys=max(ys,0.012);\n' + 'x=xs;\n' + 'y=ys;\n' + 'r=sin(sample*6.28+time)*0.5+0.5;\n' + 'g=sin(sample*6.28+2.1+time)*0.5+0.5;\n' + 'b=sin(sample*6.28+4.2+time)*0.5+0.5;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.ys = 0;
m.xs = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.xs = Math.sin((m.sample*6.28));
m.ys = Math.cos((m.sample*6.28));
m.xs = ((m.xs*0.7)+0.5);
m.ys = ((m.ys*0.7)+0.5);
m.xs = Math.min(m.xs, 0.96);
m.xs = Math.max(m.xs, 0.04);
m.ys = Math.min(m.ys, 0.99);
m.ys = Math.max(m.ys, 0.01);
m.x = m.xs;
m.y = m.ys;
m.r = ((Math.sin(((m.sample*6.28)+m.time))*0.5)+0.5);
m.g = ((Math.sin((((m.sample*6.28)+2.1)+m.time))*0.5)+0.5);
m.b = ((Math.sin((((m.sample*6.28)+4.2)+m.time))*0.5)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('xs=sin(sample*6.28);\n' + 'ys=cos(sample*6.28);\n' + 'xs=xs*0.7 + 0.5;\n' + 'ys=ys*0.7 + 0.5;\n' + 'xs=min(xs,0.96);\n' + 'xs=max(xs,0.04);\n' + 'ys=min(ys,0.99);\n' + 'ys=max(ys,0.01);\n' + 'x=xs;\n' + 'y=ys;\n' + 'r=sin(sample*6.28+time)*0.5+0.5;\n' + 'g=sin(sample*6.28+2.1+time)*0.5+0.5;\n' + 'b=sin(sample*6.28+4.2+time)*0.5+0.5;'),

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
	'frame_eqs_str' : ('wave_a = 0;\n' + 'ib_r=tan(time*1);\n' + 'ib_r=min(ib_r,1);\n' + 'ib_r=max(ib_r,0);\n' + 'ib_g=tan(time*1+2.1);\n' + 'ib_g=min(ib_g,1);\n' + 'ib_g=max(ib_g,0);\n' + 'ib_b=tan(time*1+4.2);\n' + 'ib_b=min(ib_b,1);\n' + 'ib_b=max(ib_b,0);\n' + 'ob_r=ib_r-0.5;\n' + 'ob_g=ib_g-0.5;\n' + 'ob_b=ib_b-0.5;\n' + 'q1=ib_r;\n' + 'q2=ib_g;\n' + 'q3=ib_b;\n' + 'decay = .999;\n' + 'musictime=musictime+((mid+bass)/2)*0.02;\n' + 'xpos=sin(musictime*0.4)*0.3;\n' + 'ypos=sin(musictime*0.4)*0.3;\n' + 'q4=xpos;\n' + 'q5=ypos;'),
	'pixel_eqs_str' : ('sx=-.95+(bass*0.5)*rd;\n' + 'sy=-.95-(treb*0.5)*ag;\n' + 'cx=0.5+q4;\n' + 'cy=0.5-q5;\n' + 'rd=sqrt( sqr( (x-0.5-q4)*2) + sqr( (y-0.5+q5)*1.5 ) );\n' + 'zm=.95;\n' + 'ag=atan( (y-0.5+q5)/(x-0.5-q4) );\n' + 'star=atan(ag*6)*((4-rd)-ag)/5;\n' + 'zm=zm+star*ag/20*ag;\n' + 'sx=zm;\n' + 'sy=zm;\n' + 'dx=sin(y*140)*(bass*0.01);\n' + 'dy=cos(x*140)*(bass*0.01);'),
};

return pmap;
});
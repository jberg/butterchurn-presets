define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.470245,
		brighten : 0.0,
		mv_y : 4.800001,
		wave_scale : 1.285751,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.001828,
		ob_r : 1.0,
		sy : 1.0,
		ib_size : 0.5,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 4.778023,
		mv_dx : 0.4,
		mv_dy : 0.0,
		mv_a : 0.1,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.483827,
		ob_size : 0.005,
		wave_smoothing : 0.63,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 0.5,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.998162,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.5,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.965,
		wave_a : 0.001,
		ob_g : 0.5,
		ib_a : 1.0,
		wave_b : 0.65,
		ib_b : 0.0,
		mv_r : 0.0,
		rating : 5.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.vol = 0;
m.mtime = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.999;
m.wrap = Math.sin((m.time*10));
m.mv_dx = m.bass;
m.ib_a = 0.005;
m.vol = (((m.bass+m.mid)+m.treb)*0.25);
m.vol = (m.vol*m.vol);
m.mtime = (m.mtime+((m.vol*0.01)*div(55,m.fps)));
m.q1 = (m.time*0.5);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = (1.005-div(m.rad,100));
m.rot = div(m.rad,600);
m.sy = -1;
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 0.06,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.yheight = 0;
m.xoffset1 = 0;
m.pphase2 = 0;
m.xoffset2 = 0;
m.px = 0;
m.py = 0;
m.lrorient = 0;
m.pphase = 0;
m.pheight = 0;
m.yspout = 0;
m.xspout = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.xspout = 0.5;
m.yspout = -0.01;
m.pphase = (((9999*m.sample)*m.sample)*0.0001);
m.pphase2 = (0.1+(mod(((m.sample*3349)*m.sample),100)*0.01));
m.pheight = (mod((m.sample*9893),100)*0.002);
m.yheight = (mod(((m.sample*1231)*m.sample),100)*0.01);
m.r = ((mod((m.sample*5454),100)*0.01)*Math.abs(Math.sin((m.time*0.25))));
m.g = (mod((m.sample*9954),100)*0.01);
m.xoffset1 = (Math.cos(((m.time*m.pphase2)+m.pphase))*m.pheight);
m.xoffset2 = (-1*(Math.cos(((m.time*m.pphase2)+m.pphase))*m.pheight));
m.lrorient = ifcond(below(Math.cos(((m.time*m.pphase2)+m.pphase)), Math.cos((((m.time-0.1)*m.pphase2)+m.pphase))), 0, 1);
m.px = ifcond(equal(m.lrorient, 0), ((m.xspout-m.pheight)+m.xoffset1), ((m.xspout+m.pheight)-m.xoffset2));
m.py = (m.yspout+(Math.abs(Math.sin(((m.time*m.pphase2)+m.pphase)))*m.yheight));
m.x = m.px;
m.y = m.py;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('xspout=.5;\n' + 'yspout=-.01;\n' + 'pphase=9999*sample*sample*.0001;\n' + 'pphase2=.1+((sample*3349*sample)%100)*.01;\n' + 'pheight=((sample*9893)%100)*.002;\n' + 'yheight=((sample*1231*sample)%100)*.01;\n' + 'r=((sample*5454)%100)*.01*abs(sin(time*.25));\n' + 'g=((sample*9954)%100)*.01;\n' + 'xoffset1=(cos((time*pphase2)+pphase)*pheight);\n' + 'xoffset2=-1*(cos((time*pphase2)+pphase)*pheight);\n' + 'lrorient=if(below(cos((time*pphase2)+pphase),cos(((time-.1)*pphase2)+pphase)),0,1);\n' + 'px=if(equal(lrorient,0),xspout-pheight+xoffset1,xspout+pheight-xoffset2);\n' + 'py=yspout+(abs(sin((time*pphase2)+pphase))*yheight);\n' + 'x=px;\n' + 'y=py;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.px = 0;
m.py = 0;
m.pphase = 0;
m.pheight = 0;
m.yspout = 0;
m.xspout = 0;

			m.rkeys = ['yspout','xspout'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.pphase = ((m.sample*5671)*Math.cos((m.time*0.0001)));
m.pheight = ((mod((m.sample*7654),100)*0.005)*Math.sin((m.time*0.2)));
m.xspout = ifcond(below(Math.abs(Math.sin((m.time*0.2))), 0.005), (0.3+(rand(40)*0.01)), m.xspout);
m.yspout = ifcond(below(Math.abs(Math.sin((m.time*0.2))), 0.005), (0.3+(rand(40)*0.01)), m.yspout);
m.px = (m.xspout+(Math.cos((m.time+m.pphase))*m.pheight));
m.py = (m.yspout+(Math.sin((m.time+m.pphase))*m.pheight));
m.x = m.px;
m.y = m.py;
m.a = Math.abs(((Math.sin((m.time*0.2))*0.3)+(m.treb_att*0.1)));
m.r = (m.treb*2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('pphase=(sample*5671*cos(time*.0001));\n' + 'pheight=((sample*7654)%100)*.005*sin(time*.2);\n' + 'xspout=if(below(abs(sin(time*.2)),.005),.3+(rand(40)*.01),xspout);\n' + 'yspout=if(below(abs(sin(time*.2)),.005),.3+(rand(40)*.01),yspout);\n' + 'px=xspout+(cos(time+pphase)*pheight);\n' + 'py=yspout+(sin(time+pphase)*pheight);\n' + 'x=px;\n' + 'y=py;\n' + 'a=abs(sin(time*.2)*.3+(treb_att*.1));\n' + 'r=treb*2;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.flip = 0;
m.n = 0;
m.sa = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.zr = 0;
m.tm = 0;
m.xq = 0;
m.yr = 0;
m.ang = 0;
m.xr = 0;
m.ys = 0;
m.phs = 0;
m.xs = 0;
m.ca = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.2);
m.tm = (m.q1+(m.phs*4));
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = (((m.flip*0.1)-0.05)*m.sample);
m.zp = 0;
m.ang = ((m.tm*20)+(Math.sin(((m.tm*76)+(m.time*4)))*0.4));
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xr = ((m.xp*m.sa)+(m.yp*m.ca));
m.yr = ((m.xp*m.ca)-(m.yp*m.sa));
m.zr = m.zp;
m.xp = m.xr;
m.yp = (((m.yr+0.05)+(((Math.sin(m.tm)*0.5)+0.5)*0.2))+0.05);
m.zp = m.zr;
m.ang = Math.sin((m.tm*2));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (m.tm*8);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin(((m.tm*2)-0.5))*2.5));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (-1.0+Math.cos(((m.tm*3)+0.5)));
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos((m.tm*1))*1.75)-1.05);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.xq = ((m.xp*m.sa)+(m.zp*m.ca));
m.yq = m.yp;
m.zq = ((m.xp*m.ca)-(m.zp*m.sa));
m.ang = Math.cos(m.tm);
m.xp = m.xq;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yp = ((m.yq*m.ca)-(m.zq*m.sa));
m.zp = ((m.yq*m.sa)+(m.zq*m.ca));
m.zp = (m.zp+1.5);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = (1-m.sample);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=q1 + phs*4;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=(flip*0.1-0.05)*(sample);\n' + 'zp=0;\n' + 'ang=tm*20 + sin(tm*76 + time*4)*0.4;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xr=xp*sa + yp*ca;\n' + 'yr=xp*ca - yp*sa;\n' + 'zr=zp;\n' + 'xp=xr;\n' + 'yp=yr + 0.05 + (sin(tm)*0.5 + 0.5)*0.2 + 0.05;\n' + 'zp=zr;\n' + 'ang=sin(tm*2);\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=tm*8;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*2.5;\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=-1.0 + cos(tm*3 + 0.5);\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*1)*1.75 - 1.05;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'xq=xp*sa + zp*ca;\n' + 'yq=yp;\n' + 'zq=xp*ca - zp*sa;\n' + 'ang=cos(tm);\n' + 'xp=xq;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yp=yq*ca - zq*sa;\n' + 'zp=yq*sa + zq*ca;\n' + 'zp=zp+1.5;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample);'),

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
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.ddtan = 0;
m.t6 = 0;
m.invmag = 0;
m.c = 0;
m.t7 = 0;
m.t8 = 0;
m.rdx = 0;
m.rdy = 0;
m.ox = 0;
m.oy = 0;
m.c1 = 0;
m.c2 = 0;
m.val1 = 0;
m.val2 = 0;
m.inv = 0;
m.s = 0;
m.ddx = 0;
m.ddy = 0;
m.fdx = 0;
m.fdy = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['sample'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t7 = 0.0;
m.t8 = 0.45;
m.ddx = ((0.25*Math.cos((5.7119*m.t1)))+((2.5963*m.t1)*Math.sin((5.7119*m.t1))));
m.ddy = ((0.3125*Math.sin((5.7119*m.t1)))-((3.2453*m.t1)*Math.cos((5.7119*m.t1))));
m.ddtan = Math.atan2(m.ddy, m.ddx);
m.t2 = -m.ddtan;
m.val1 = (((-0.5*Math.cos((5.7119*m.t1)))*Math.cos(m.t2))-((-0.625*Math.sin((5.7119*m.t1)))*Math.sin(m.t2)));
m.val2 = (((-0.5*Math.cos((5.7119*m.t1)))*Math.sin(m.t2))+((-0.625*Math.sin((5.7119*m.t1)))*Math.cos(m.t2)));
m.t6 = -sign(m.t1);
m.t7 = (m.t7-m.val1);
m.t8 = (m.t8-m.val2);
m.t3 = m.q2;
		return m;
	},
		'point_eqs' : function(m) {
m.sample = pow(m.sample, 0.85);
m.c1 = div((6.2831*m.t1),(1.1-m.sample));
m.c = Math.cos(m.c1);
m.s = Math.sin(m.c1);
m.c2 = sqrt((1-m.sample));
m.ox = (m.t7-((0.5*m.c2)*m.c));
m.oy = (m.t8-((0.625*m.c2)*m.s));
m.x = (m.t7+(((m.ox-m.t7)*Math.cos(m.t2))-((m.oy-m.t8)*Math.sin(m.t2))));
m.y = (m.t8+(((m.ox-m.t7)*Math.sin(m.t2))+((m.oy-m.t8)*Math.cos(m.t2))));
m.inv = div(1,sqr((1.1-m.sample)));
m.fdx = (((-0.25*pow((1-m.sample), -0.5))*m.c)-((((m.c2*m.s)*3.1415)*m.t1)*m.inv));
m.fdy = (((-0.3125*m.c2)*m.s)+((((3.9268*m.c2)*m.c)*m.t1)*m.inv));
m.invmag = div(1,sqrt((sqr(m.fdx)+sqr(m.fdy))));
m.fdx = (m.fdx*m.invmag);
m.fdy = (m.fdy*m.invmag);
m.rdx = ((m.fdx*Math.cos((1.5707+m.t2)))-(m.fdy*Math.sin((1.5707+m.t2))));
m.rdy = ((m.fdx*Math.sin((1.5707+m.t2)))+(m.fdx*Math.cos((1.5707+m.t2))));
m.tt = div(rand(100),100);
m.x = (m.x+((m.rdx*(0.15*m.tt))*(1-m.sample)));
m.y = (m.y+((m.rdy*(0.15*m.tt))*(1-m.sample)));
m.x = (m.x*0.55);
m.y = (((m.y-0.5)*0.55)+0.5);
m.r = m.sample;
m.g = (1-m.sample);
m.b = 1;
m.a = below(m.sample, 0.995);
m.y = (m.y+m.t3);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t1=q1;\n' + 't7=.0;\n' + 't8=.45;\n' + 'ddx=.25*cos(5.7119*t1)+2.5963*t1*sin(5.7119*t1);\n' + 'ddy=.3125*sin(5.7119*t1)-3.2453*t1*cos(5.7119*t1);\n' + 'ddtan=atan2(ddy,ddx);\n' + 't2=-ddtan;\n' + 'val1=((-.5*cos(5.7119*t1))*cos(t2)-(-.625*sin(5.7119*t1))*sin(t2));\n' + 'val2=((-.5*cos(5.7119*t1))*sin(t2)+(-.625*sin(5.7119*t1))*cos(t2));\n' + 't6=-sign(t1);\n' + 't7=t7-val1;\n' + 't8=t8-val2;\n' + 't3=q2;'),
		'point_eqs_str' : ('sample=pow(sample,.85);\n' + 'c1=6.2831*t1/(1.1-sample);\n' + 'c=cos(c1);\n' + 's=sin(c1);\n' + 'c2=sqrt(1-sample);\n' + 'ox=t7-.5*c2*c;\n' + 'oy=t8-.625*c2*s;\n' + 'x=t7+((ox-t7)*cos(t2)-(oy-t8)*sin(t2));\n' + 'y=t8+((ox-t7)*sin(t2)+(oy-t8)*cos(t2));\n' + 'inv=1/sqr(1.1-sample);\n' + 'fdx=-.25*pow(1-sample,-.5)*c-c2*s*3.1415*t1*inv;\n' + 'fdy=-.3125*c2*s+3.9268*c2*c*t1*inv;\n' + 'invMag=1/sqrt(sqr(fdx)+sqr(fdy));\n' + 'fdx=fdx*invMag;\n' + 'fdy=fdy*invMag;\n' + 'rdx=fdx*cos(1.5707+t2)-fdy*sin(1.5707+t2);\n' + 'rdy=fdx*sin(1.5707+t2)+fdx*cos(1.5707+t2);\n' + 'tt=rand(100)/100;\n' + 'x=x+rdx*(.15*tt)*(1-sample);\n' + 'y=y+rdy*(.15*tt)*(1-sample);\n' + 'x=x*.55;\n' + 'y=(y-.5)*.55+.5;\n' + 'r=sample;\n' + 'g=1-sample;\n' + 'b=1;\n' + 'a=below(sample,.995);\n' + 'y=y+t3;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 100.0,
			additive : 1.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.559231,
			x : 1.0,
			y : 0.59,
			ang : 3.39292,
			sides : 3.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (((Math.sin(div(m.time,10))*0.1)+0.5)+(m.treb_att*0.1));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=sin(time/10)*0.1+0.5+(treb_att*0.1);'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.2,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.05,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 4.141463,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.5,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.25,
			border_g : 0.5,
			rad : 0.364567,
			x : 0.9,
			y : 0.84,
			ang : 3.078761,
			sides : 13.0,
			border_r : 0.5,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 3.141592,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.504215,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.089252,
			x : 0.3,
			y : 0.7,
			ang : 0.816814,
			sides : 6.0,
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
			r2 : 0.95,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 4.900885,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 2.987755,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 0.0,
			rad : 0.284278,
			x : 0.5,
			y : 0.5,
			ang : 3.141593,
			sides : 3.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.var = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = div(m.time,10);
m.tex_zoom = (3.4+(m.bass*0.03));
m.var = above(m.bass_att, 0.7);
m.a = m.var;
m.a2 = m.var;
m.border_a = m.var;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=time/10;\n' + 'tex_zoom=3.4+(bass*0.03);\n' + 'var=above(bass_att,0.7);\n' + 'a=var;\n' + 'a2=var;\n' + 'border_a=var;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('decay=.999;\n' + 'wrap=sin(time*10);\n' + 'mv_dx=bass;\n' + 'ib_a=.005;\n' + 'vol=(bass+mid+treb)*0.25;\n' + 'vol=vol*vol;\n' + 'mtime=mtime+vol*0.01*(55/fps);\n' + 'q1=time*0.5;'),
	'pixel_eqs_str' : ('zoom=1.005-(rad/100);\n' + 'rot=rad/600;\n' + 'sy=-1;'),
};

return pmap;
});
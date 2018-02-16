define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.7,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.285751,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.644619,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 0.999609,
		ob_size : 0.5,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0298,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.98,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.tt = 0;
m.q2 = 0;
m.q3 = 0;
m.mod = 0;
m.q4 = 0;
m.mt = 0;
m.toc = 0;
m.vav = 0;
m.treb_avg = 0;
m.tic = 0;
m.ra = 0;
m.slide = 0;
m.bt = 0;
m.bass_avg = 0;
m.vol = 0;
m.ti = 0;
m.ysec = 0;
m.tin = 0;
m.xsec = 0;
m.mid_avg = 0;
m.sp = 0;
m.vt = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.tic = Math.min((m.time-m.tin), 0.1);
m.tin = m.time;
m.vol = (((m.bass_att+m.treb_att)+m.mid_att)*0.333333);
m.ra = (div(1,m.tic)*0.25);
m.treb_avg = (m.tic*((m.treb_avg*(div(1,m.tic)-m.ra))+(m.ra*m.treb)));
m.mid_avg = (m.tic*((m.mid_avg*(div(1,m.tic)-m.ra))+(m.ra*m.mid)));
m.bass_avg = (m.tic*((m.bass_avg*(div(1,m.tic)-m.ra))+(m.ra*m.bass)));
m.vav = (m.tic*((m.vav*(div(1,m.tic)-m.ra))+((m.ra*((m.bass+m.treb)+m.mid))*0.33333)));
m.tt = (m.tt+(m.tic*m.treb));
m.mt = (m.mt+(m.tic*m.mid));
m.bt = (m.bt+(m.tic*m.bass));
m.vt = (m.vt+(m.tic*m.vav));
m.sp = (Math.abs((m.vav-m.slide))*0.1);
m.slide = (ifcond(above(m.slide, m.vav), (m.slide-(m.tic*m.sp)), (m.slide+(m.tic*m.sp)))+(((1-m.toc)*m.vav)*0.2));
m.toc = 1;
m.q1 = (m.vt*0.1);
m.q2 = (0.5+(0.5*Math.sin((m.time*4))));
m.q3 = (m.vav*0.05);
m.q4 = m.vt;
		m.rkeys = ['dy','dx','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.ti = (m.time*-0.6);
m.rot = (Math.sin(((m.rad+m.ti)*6.2832))*0.01);
m.mod = 0.4;
m.xsec = (above(m.x, m.mod)*below(m.x, (1-m.mod)));
m.ysec = (above(m.y, m.mod)*below(m.y, (1-m.mod)));
m.zoom = ifcond((m.xsec+m.ysec), m.zoom, 0.75);
m.dx = ifcond((m.xsec+m.ysec), m.dx, 0.5);
m.dy = ifcond((m.xsec+m.ysec), m.dy, 0.5);
m.sx = ifcond((m.xsec+m.ysec), (0.9+m.q3), 1);
m.mod = ((1-(2*above(m.x, 0.5)))*(1-(2*above(m.y, 0.5))));
m.rot = ifcond((m.xsec+m.ysec), m.rot, (m.q4*m.mod));
		return m;
	},
	'waves' : [
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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.val = 0;
m.sp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sp = (((m.q1+m.sample)*6.2832)*0.666);
m.x = (0.5+((0.1*Math.sin(m.sp))*0.75));
m.y = (0.5+(0.1*Math.cos(m.sp)));
m.val = Math.min(1, (m.value1*4));
m.a = ((1-m.val)*below(m.sample, 0.75));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sp = (q1+sample)*6.2832*.666;\n' + 'x = .5 + .1*sin(sp)*.75;\n' + 'y = .5 + .1*cos(sp);\n' + 'val = min(1,value1*4);\n' + 'a = (1-val)*below(sample,.75);'),

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
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.val = 0;
m.sp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.sp = ((((m.q1+m.sample)+0.75)*6.2832)*0.666);
m.x = (0.5+((0.1*Math.sin(m.sp))*0.75));
m.y = (0.5+(0.1*Math.cos(m.sp)));
m.val = Math.min(1, (m.value2*4));
m.a = ((1-m.val)*below(m.sample, 0.75));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('sp = (q1 + sample + .75)*6.2832*.666;\n' + 'x = .5 + .1*sin(sp)*.75;\n' + 'y = .5 + .1*cos(sp);\n' + 'val = min(1,value2*4);\n' + 'a = (1-val)*below(sample,.75);'),

		},
		{
		'baseVals' : {
			a : 0.6,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.498295,
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
m.mod = 0;
m.my = 0;
m.sec = 0;
m.rad = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (0.5+m.value1);
m.y = (0.5+m.value2);
m.mod = 0.4;
m.sec = ((above(m.x, m.mod)*below(m.x, (1-m.mod)))+(above(m.y, m.mod)*below(m.y, (1-m.mod))));
m.my = ((m.y-0.5)*0.75);
m.rad = pow(((m.my*m.my)+((m.x-0.5)*(m.x-0.5))), 0.5);
m.rad = below(m.rad, 0.075);
m.a = ((m.sec*(1-m.rad))*0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x = .5 + value1;\n' + 'y = .5 + value2;\n' + 'mod = .4;\n' + 'sec = above(x,mod)*below(x,1-mod) + above(y,mod)*below(y,1-mod);\n' + 'my = (y - .5)*.75;\n' + 'rad = pow(my*my + (x-.5)*(x-.5),.5);\n' + 'rad = below(rad,0.075);\n' + 'a = sec*(1-rad)*.1;'),

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
			a : 0.3,
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
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.244863,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 50.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.ti = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ti = (m.time*0.8);
m.r = (0.5+(0.5*Math.sin(m.ti)));
m.g = (0.5+(0.5*Math.sin((m.ti+1.0472))));
m.b = (0.5+(0.5*Math.sin((m.ti+2.0944))));
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ti = time*.8;\n' + 'r = .5 + .5*sin(ti);\n' + 'g = .5 + .5*sin(ti + 1.0472);\n' + 'b = .5 + .5*sin(ti + 2.0944);\n' + 'r2 = r;\n' + 'g2 = g;\n' + 'b2 = b;'),

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
			tex_zoom : 0.498312,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.194774,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 50.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.tex_ang = ((rand(1001)*0.001)*6.2832);
m.tex_ang = (rand(4)*0.7854);
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('tex_ang = rand(1001)*.001*6.2832;\n' + 'tex_ang = rand(4)*.7854;\n' + 'r2 = r;\n' + 'g2 = g;\n' + 'b2 = b;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 1.570797,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.892691,
			x : 0.0,
			y : 0.5,
			ang : 0.0,
			sides : 44.0,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 4.71239,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.892691,
			x : 1.0,
			y : 0.5,
			ang : 0.0,
			sides : 44.0,
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
	'frame_eqs_str' : ('warp = 0;\n' + 'tic = min(time-tin,.1);\n' + 'tin = time;\n' + 'vol = (bass_att + treb_att + mid_att)*.333333;\n' + 'ra = 1/tic*.25;\n' + 'treb_avg = tic*(treb_avg*(1/tic - ra) + ra*treb);\n' + 'mid_avg = tic*(mid_avg*(1/tic - ra) + ra*mid);\n' + 'bass_avg = tic*(bass_avg*(1/tic - ra) + ra*bass);\n' + 'vav = tic*(vav*(1/tic - ra) + ra*(bass+treb+mid)*.33333);\n' + 'tt = tt + tic*treb;\n' + 'mt = mt + tic*mid;\n' + 'bt = bt + tic*bass;\n' + 'vt = vt + tic*vav;\n' + 'sp = abs(vav - slide)*.1;\n' + 'slide = if(above(slide,vav),slide-tic*sp,slide+tic*sp) + (1-toc)*vav*.2;\n' + 'toc = 1;\n' + 'q1 = vt*.1;\n' + 'q2 = .5 + .5*sin(time*4);\n' + 'q3 = vav*.05;\n' + 'q4 = vt;'),
	'pixel_eqs_str' : ('ti = time*-.6;\n' + 'rot = sin((rad+ti)*6.2832)*.01;\n' + 'mod = .4;\n' + 'xsec = above(x,mod)*below(x,1-mod);\n' + 'ysec = above(y,mod)*below(y,1-mod);\n' + 'zoom = if(xsec + ysec,zoom,.75);\n' + 'dx = if(xsec + ysec,dx,.5);\n' + 'dy = if(xsec + ysec,dy,.5);\n' + 'sx = if(xsec + ysec,.9 + q3,1);\n' + 'mod = (1-2*above(x,.5))*(1-2*above(y,.5));\n' + 'rot = if(xsec + ysec,rot,q4*mod);'),
};

return pmap;
});
define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.28,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.625316,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 1.001829,
		ob_r : 0.0,
		sy : 1.0018,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.0,
		ib_r : 0.0,
		mv_b : 0.4999,
		echo_zoom : 1.001821,
		ob_size : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 0.010284,
		wave_dots : 0.0,
		mv_g : 0.4999,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 1.0,
		modwavealphabyvolume : 0.0,
		dx : 0.005,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.7,
		mv_l : 0.85,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.98,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 0.8,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.3,
		mv_r : 0.4999,
		rating : 3.0,
		modwavealphastart : 0.88,
		darken : 1.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.zflux = 0;
m.alphaflux = 0;
m.bar = 0;
m.adv = 0;
m.bat = 0;
m.bax = 0;
m.bay = 0;
m.ea = 0;
m.mv_x = 64;
m.mv_y = 48;
m.nut = 0;
m.stp = 0;
m.stq = 0;
m.rtp = 0;
m.rtq = 0;
m.wvr = 0;
m.decay = 0;
m.dcsp = 0;
m.ea = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.999;
m.zoom = 1.004;
m.dx = 0;
m.dy = 0;
m.sx = 1;
m.sy = 1;
m.rot = 0.01;
m.echo_zoom = ((((Math.sin(m.time)*0.5)+0.5)*2)+1);
m.ea = (m.ea+1);
m.ea = (m.ea*below(m.ea, 1.1));
m.alphaflux = ((Math.sin((m.time*0.3))*0.5)+0.5);
m.echo_alpha = ((m.ea*(1-m.alphaflux))+(0.5*m.alphaflux));
m.zflux = (above((Math.cos((m.time*0.4))*10), 9)*Math.cos((m.time*1.6)));
m.zoom = (m.zoom+(m.zflux*0.5));
m.invert = above(((Math.cos(div(m.time,2))*0.5)+0.5), 0.5);
		m.rkeys = ['rot','zoom'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.adv = Math.min(((m.bass*m.bass)*m.bass), 1);
m.warp = ((-1*(((((Math.sin((m.time*3))*0.5)+0.5)*3)*(m.x-0.5))*2))+(((((Math.cos((m.time*3))*0.5)+0.5)*3)*(m.y-0.5))*2));
m.warp = (m.warp*m.adv);
m.bax = ((above((Math.sin((m.time*1))*10), 9)*Math.sin((m.time*2)))*0.3);
m.bar = above(Math.sin(((m.x*26)+(m.time*4))), 0.6);
m.bay = ((above((Math.cos((m.time*1))*10), 9)*Math.sin((m.time*2)))*0.6);
m.bat = above(Math.sin(((m.ang*3)+(m.time*4))), 0.6);
m.zoom = (m.zoom+(m.bar*m.bax));
m.rot = (m.rot+(m.bay*m.bat));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.7,
			scaling : 100.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.9,
			thick : 1.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (Math.cos(m.time)*0.1);
m.y = (Math.sin(m.time)*0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=cos(time)*0.1;\n' + 'y=sin(time)*0.1;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 81.954445,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wave_x = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.wave_x = 1;
		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('wave_x=1;'),
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
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.1,
			tex_zoom : 1.038696,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.6,
			a2 : 0.3,
			r : 0.1,
			border_g : 0.0,
			rad : 0.325446,
			x : 0.5,
			y : 0.5,
			ang : 6.283185,
			sides : 16.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.advb = 0;
m.tm = 0;

			m.rkeys = ['advb'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (Math.sin(m.time)*6);
m.advb = (m.advb+((m.treb*m.treb)*0.06));
m.x = ((Math.sin(m.advb)*0.5)+0.5);
m.y = ((Math.cos(m.advb)*0.5)+0.5);
m.tm = (m.time*0.3);
m.r = (div(Math.sin(m.tm),2)+0.4999);
m.g = (div(Math.sin((m.tm+0.2)),2)+0.4999);
m.b = (div(Math.sin((m.tm+0.41)),2)+0.4999);
m.r2 = (div(Math.sin(m.tm),2)+0.4999);
m.g2 = (div(Math.sin((m.tm+0.2)),2)+0.4999);
m.b2 = (div(Math.sin((m.tm+0.41)),2)+0.4999);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=sin(time)*6;\n' + 'advb=advb+(treb*treb)*0.06;\n' + 'x=sin(advb)*0.5+0.5;\n' + 'y=cos(advb)*0.5+0.5;\n' + 'tm=time*0.3;\n' + 'r=sin(tm)/2 + 0.4999;\n' + 'g=sin(tm+0.2)/2 + 0.4999;\n' + 'b=sin(tm+0.41)/2 + 0.4999;\n' + 'r2=sin(tm)/2 + 0.4999;\n' + 'g2=sin(tm+0.2)/2 + 0.4999;\n' + 'b2=sin(tm+0.41)/2 + 0.4999;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 3.141593,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.2,
			tex_zoom : 1.028414,
			additive : 0.0,
			border_a : 0.8,
			border_b : 0.0,
			b2 : 0.6,
			a2 : 0.3,
			r : 0.36,
			border_g : 0.0,
			rad : 0.458306,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.adv = 0;
m.tm = 0;

			m.rkeys = ['adv'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (Math.cos(div(m.time,2))*6);
m.sides = (20-(div(((m.bass+m.mid)+m.treb),3)*15));
m.adv = (m.adv+div((m.bass*m.bass),15));
m.x = ((Math.cos(m.adv)*0.3)+0.5);
m.y = ((Math.sin(m.adv)*0.3)+0.5);
m.tm = (m.time*0.3);
m.r = ((Math.sin((m.tm+0.2))*0.5)+0.4999);
m.g = ((Math.sin((m.tm+0.4))*0.5)+0.4999);
m.b = ((Math.sin((m.tm+0.61))*0.5)+0.4999);
m.r2 = m.r;
m.g2 = m.g;
m.b2 = m.b;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=cos(time/2)*6;\n' + 'sides=20-((bass+mid+treb)/3)*15;\n' + 'adv=adv+(bass*bass)/15;\n' + 'x=cos(adv)*0.3+0.5;\n' + 'y=sin(adv)*0.3+0.5;\n' + 'tm=time*0.3;\n' + 'r=sin(tm+0.2)*0.5 + 0.4999;\n' + 'g=sin(tm+0.4)*0.5 + 0.4999;\n' + 'b=sin(tm+0.61)*0.5 + 0.4999;\n' + 'r2=r;\n' + 'g2=g;\n' + 'b2=b;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 2.513274,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 0.451117,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.089242,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.var = 0;
m.mork = 0;
m.mork = 0;
			m.rkeys = ['mork'];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = Math.sin(div(m.time,3));
m.mork = (m.mork+0.003);
m.mork = ((m.mork*below(m.mork, 3))-above(m.mork, 3));
m.var = Math.max(Math.min(m.mork, 1), 0);
m.a = m.var;
m.a2 = m.var;
m.border_a = m.var;
m.sides = ((((Math.sin(div(m.time,2))*0.5)+0.5)*2.5)+3);
m.rad = (1+(((Math.sin(div(m.time,2))*0.5)+0.5)*0.5));
		return m;
	},
		'init_eqs_str' : ('mork=0;'),
		'frame_eqs_str' : ('ang=sin(time/3);\n' + 'mork=mork+0.003;\n' + 'mork=mork* below(mork, 3) - above(mork, 3);\n' + 'var=max( min(mork,1) , 0 );\n' + 'a=var;\n' + 'a2=var;\n' + 'border_a=var;\n' + 'sides=(sin(time/2)*0.5 + 0.5)*2.5 + 3;\n' + 'rad=1+((sin(time/2)*0.5+0.5)*0.5);'),

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
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;\n' + 'ea=0;'),
	'frame_eqs_str' : ('decay=0.999;\n' + 'zoom=1.004;\n' + 'dx=0;\n' + 'dy=0;\n' + 'sx=1;\n' + 'sy=1;\n' + 'rot=0.01;\n' + 'echo_zoom= (sin(time)*0.5 + 0.5)*2 + 1;\n' + 'ea=ea+1;\n' + 'ea=ea * below(ea , 1.1);\n' + 'alphaflux= sin(time*0.3)*0.5 + 0.5;\n' + 'echo_alpha=(ea*(1-alphaflux)) + (0.5*alphaflux);\n' + 'zflux=above( cos(time*0.4)*10 , 9) * cos(time*1.6);\n' + 'zoom=zoom+ (zflux*0.5);\n' + 'invert=above(cos(time/2)*0.5+0.5,0.5);'),
	'pixel_eqs_str' : ('adv=min( (bass*bass*bass), 1);\n' + 'warp=-1*((( sin(time*3) *0.5+0.5)*3)* (x-0.5)*2 )+((( cos(time*3) *0.5+0.5)*3)* (y-0.5)*2 );\n' + 'warp=warp*adv;\n' + 'bax=above( sin(time*1)*10 , 9) * sin(time*2)*0.3;\n' + 'bar=above( sin(x*26 + time*4) , 0.6 );\n' + 'bay=above( cos(time*1)*10 , 9) * sin(time*2)*0.6;\n' + 'bat=above( sin(ang*3 + time*4) , 0.6 );\n' + 'zoom=zoom + bar*bax;\n' + 'rot=rot + bay*bat;'),
};

return pmap;
});
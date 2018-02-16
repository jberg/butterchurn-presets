define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 12.0,
		warpscale : 1.331,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.285751,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.01,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.006596,
		ob_size : 0.005,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.999514,
		solarize : 0.0,
		modwavealphabyvolume : 1.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.5,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.9,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.3,
		wave_mystery : 0.0,
		decay : 0.935,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.cc = 0;
m.q1 = 0;
m.bc = 0;
m.avgvol = 0;
m.beathard = 0;
m.q2 = 0;
m.q3 = 0;
m.ccc = 0;
m.c = 0;
m.q4 = 0;
m.const = 0;
m.rawbeatb = 0;
m.h = 0;
m.mrad = 0;
m.avgbeatrate = 0;
m.mrot = 0;
m.bool = 0;
m.lbass = 0;
m.myx = 0;
m.beatb = 0;
m.myy = 0;
m.mang = 0;
m.sw1 = 0;
m.sw2 = 0;
m.sw3 = 0;
m.sw4 = 0;
m.avgdb = 0;
m.sw5 = 0;
m.sw6 = 0;
m.vol = 0;
m.beatrate = 0;
m.ax = 0;
m.ay = 0;
m.hue = 0;
m.ph = 0;
m.lbbtime = 0;
m.mtime = 0;
m.phase = 0;
m.cy1 = 0;
m.cx1 = 0;
m.t1 = 0;
m.db = 0;
m.t2 = 0;
m.t3 = 0;
m.db = 0.01;
m.beatrate = 1;
m.avgbeatrate = 2;
m.lbbtime = m.time;
m.avgdb = 0.01;
m.vol = 1;
m.avgvol = 0.2;
m.phase = 0;
m.bool = 0;
m.const = 0.02;
m.mtime = (1000+(m.bass_att*1000));
m.t1 = (500+(m.bass*500));
m.t2 = (500+(m.treb*500));
m.t3 = (500+(m.mid*500));
		return m;
	},
	'frame_eqs' : function(m) {
m.db = ((m.bass-m.lbass)*m.fps);
m.lbass = m.bass;
m.avgdb = ((m.avgdb*0.99)+(Math.abs(m.db)*0.01));
m.avgvol = ((m.avgvol*0.99)+(((m.bass+m.mid)+m.treb)*0.0033));
m.rawbeatb = above(Math.abs(m.db), ((m.avgdb*m.avgvol)*4));
m.beatb = (m.rawbeatb*above((m.time-m.lbbtime), (m.avgbeatrate*0.5)));
m.beathard = (m.beatb*(Math.abs(m.db)-(m.avgdb*4)));
m.beatrate = ((m.beatb*(m.time-m.lbbtime))+((1-m.beatb)*m.beatrate));
m.avgbeatrate = ((m.beatb*((m.avgbeatrate*0.9)+(m.beatrate*0.1)))+((1-m.beatb)*m.avgbeatrate));
m.lbbtime = ((m.time*m.beatb)+((1-m.beatb)*m.lbbtime));
m.ph = (((m.time-m.lbbtime)*div(60,m.avgbeatrate))*m.const);
m.phase = Math.max(Math.min(m.ph, 1), 0);
m.const = ((m.const*(1-m.beatb))+(m.beatb*(m.const+(0.01*m.bool))));
m.bool = ((below(m.phase, 0.98)*(0.99-m.ph))-(above(m.phase, 0.98)*(m.ph*0.5)));
m.bc = (m.bc+m.beatb);
m.vol = ((m.rawbeatb*(Math.abs(m.db)-m.avgdb))*0.01);
m.avgvol = ((m.avgvol*0.999)+(m.vol*0.001));
m.mtime = (m.mtime+(Math.min((m.avgvol*0.5), 0.25)*div(60,m.fps)));
m.decay = 1;
m.warp = 0;
m.wrap = 1;
m.hue = ((m.mtime*0.01)+(m.phase*0.5));
m.h = (6*(m.hue-Math.floor(m.hue)));
m.sw1 = below(m.h, 1);
m.sw2 = ((1-m.sw1)*below(m.h, 2));
m.sw3 = (((1-m.sw1)*(1-m.sw2))*below(m.h, 3));
m.sw4 = ((((1-m.sw1)*(1-m.sw2))*(1-m.sw3))*below(m.h, 4));
m.sw6 = above(m.h, 5);
m.sw5 = (((((1-m.sw1)*(1-m.sw2))*(1-m.sw3))*(1-m.sw4))*(1-m.sw6));
m.ob_r = (((m.sw1+(m.sw2*(2-m.h)))+(m.sw5*(m.h-4)))+m.sw6);
m.ob_g = ((((m.sw1*m.h)+m.sw2)+m.sw3)+(m.sw4*(4-m.h)));
m.ob_b = ((((m.sw3*(m.h-2))+m.sw4)+m.sw5)+(m.sw6*(6-m.h)));
m.t1 = (m.t1+(Math.min(((m.avgvol*m.bass_att)*0.5), 0.25)*div(60,m.fps)));
m.t2 = (m.t2+(Math.min(((m.avgvol*m.treb_att)*0.5), 0.25)*div(60,m.fps)));
m.t3 = (m.t3+(Math.min(((m.avgvol*m.mid_att)*0.5), 0.25)*div(60,m.fps)));
m.monitor = m.avgvol;
m.q1 = m.mtime;
m.q2 = m.t1;
m.q3 = m.t2;
m.q4 = m.t3;
m.cx = ((Math.sin((m.q2*0.01))*0.5)+0.5);
m.cy = ((Math.cos((m.q3*0.01))*0.5)+0.5);
m.rot = ((Math.sin(((m.q2*0.01)-(m.q3*0.01)))*15)+103);
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.c = Math.sin((m.q2*0.1));
m.cc = Math.sin((m.q3*0.1));
m.ccc = Math.sin((m.q4*0.1));
m.cx1 = (0.5+(m.ccc*0.3));
m.cy1 = (0.5+(m.cc*0.4));
m.myx = (m.cx1-m.x);
m.myy = (m.cy1-(1-m.y));
m.mrad = pow(((m.myx*m.myx)+(m.myy*m.myy)), 0.5);
m.mang = Math.asin(div(Math.abs(m.myy),m.mrad));
m.ax = m.mang;
m.ay = m.mang;
m.mrot = ((0.1*(1-m.mrad))*Math.sin(((m.q1*0.01)+(m.q2*0.1))));
m.dx = ((sign(m.myy)*Math.sin(m.ax))*m.mrot);
m.dy = (sign(m.myx)*(Math.cos(m.ay)*m.mrot));
m.cx1 = (0.5+(m.cc*0.3));
m.cy1 = ((0.5+(m.c*0.25))+(m.ccc*0.25));
m.myx = (m.cx1-m.x);
m.myy = (m.cy1-(1-m.y));
m.mrad = pow(((m.myx*m.myx)+(m.myy*m.myy)), 0.5);
m.mang = Math.asin(div(Math.abs(m.myy),m.mrad));
m.ax = m.mang;
m.ay = m.mang;
m.mrot = ((0.1*(1-m.mrad))*Math.sin(((m.q3*0.02)+(m.q1*0.3))));
m.dx = (m.dx-((sign(m.myy)*Math.sin(m.ax))*m.mrot));
m.dy = (m.dy-(sign(m.myx)*(Math.cos(m.ay)*m.mrot)));
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
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (((Math.sin(((m.q2*0.1)+(m.q1*0.01)))*0.3)+0.5)+(m.value1*0.1));
m.y = (((Math.cos(((m.q1*0.1)-(m.q3*0.05)))*0.3)+0.5)+(m.value2*0.1));
m.r = ((Math.sin(((m.q2+(m.sample*3.14))-m.treb))*0.5)+0.5);
m.g = ((Math.cos(((m.q3+(m.sample*3.14))-m.bass))*0.5)+0.5);
m.b = ((Math.sin(((m.q1+(m.sample*3.14))-m.mid))*0.5)+0.5);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=(sin(q2*.1+q1*.01)*.3+.5)+value1*.1;\n' + 'y=(cos(q1*.1-q3*.05)*.3+.5)+value2*.1;\n' + 'r=sin(q2+sample*3.14-treb)*.5+.5;\n' + 'g=cos(q3+sample*3.14-bass)*.5+.5;\n' + 'b=sin(q1+sample*3.14-mid)*.5+.5;'),

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
			a : 0.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.542791,
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
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
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

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.436055,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = (m.q5*0.33);
m.y = 0.75;
m.x = 0.2;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad=q5*.33;\n' + 'y=.75;\n' + 'x=.2;'),

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
	'init_eqs_str' : ('db=.01;\n' + 'beatrate=1;\n' + 'avgbeatrate=2;\n' + 'lbbtime=time;\n' + 'avgdb=.01;\n' + 'vol=1;\n' + 'avgvol=.2;\n' + 'phase=0;\n' + 'bool=0;\n' + 'const=.02;\n' + 'mtime=1000+bass_att*1000;\n' + 't1=500+bass*500;\n' + 't2=500+treb*500;\n' + 't3=500+mid*500;'),
	'frame_eqs_str' : ('db=(bass-lbass)*fps;\n' + 'lbass=bass;\n' + 'avgdb=avgdb*.99+abs(db)*.01;\n' + 'avgvol=avgvol*.99+(bass+mid+treb)*.0033;\n' + 'rawbeatb=above(abs(db),avgdb*avgvol*4);\n' + 'beatb=rawbeatb*above(time-lbbtime,avgbeatrate*.5);\n' + 'beathard=beatb*(abs(db)-avgdb*4);\n' + 'beatrate=beatb*(time-lbbtime)+(1-beatb)*beatrate;\n' + 'avgbeatrate=beatb*(avgbeatrate*.9+beatrate*.1)+(1-beatb)*avgbeatrate;\n' + 'lbbtime=time*beatb+(1-beatb)*lbbtime;\n' + 'ph=(time-lbbtime)*(60/avgbeatrate)*const;\n' + 'phase=max(min( ph, 1 ),0);\n' + 'const=const*(1-beatb)+beatb*( const+ (.01*bool) );\n' + 'bool=below(phase,.98)*(.99-ph)-above(phase,.98)*(ph*.5);\n' + 'bc=bc+beatb;\n' + 'vol=(rawbeatb*(abs(db)-(avgdb))*.01);\n' + 'avgvol=avgvol*.999+vol*.001;\n' + 'mtime=mtime+min(avgvol*.5,.25)*(60/fps);\n' + 'decay=1;\n' + 'warp=0;\n' + 'wrap=1;\n' + 'hue=(mtime*.01+phase*.5);\n' + 'h=6*(hue-int(hue));\n' + 'sw1=below(h,1);\n' + ' sw2=(1-sw1)*below(h,2);\n' + ' sw3=(1-sw1)*(1-sw2)*below(h,3);\n' + ' sw4=(1-sw1)*(1-sw2)*(1-sw3)*below(h,4);\n' + 'sw6=above(h,5);\n' + ' sw5=(1-sw1)*(1-sw2)*(1-sw3)*(1-sw4)*(1-sw6);\n' + 'ob_r=sw1+sw2*(2-h)+sw5*(h-4)+sw6;\n' + 'ob_g=sw1*h+sw2+sw3+sw4*(4-h);\n' + 'ob_b=sw3*(h-2)+sw4+sw5+sw6*(6-h);\n' + 't1=t1+min(avgvol*bass_att*.5,.25)*(60/fps);\n' + 't2=t2+min(avgvol*treb_att*.5,.25)*(60/fps);\n' + 't3=t3+min(avgvol*mid_att*.5,.25)*(60/fps);\n' + 'monitor=avgvol;\n' + 'q1=mtime;\n' + 'q2=t1;\n' + 'q3=t2;\n' + 'q4=t3;\n' + 'cx=sin(q2*.01)*.5+.5;\n' + 'cy=cos(q3*.01)*.5+.5;\n' + 'rot=sin(q2*.01-(q3*.01))*15+103;'),
	'pixel_eqs_str' : ('c=sin(q2*.1);\n' + 'cc=sin(q3*.1);\n' + 'ccc=sin(q4*.1);\n' + 'cx1=.5+ccc*.3;\n' + 'cy1=.5+cc*.4;\n' + 'myx=(cx1-x);\n' + 'myy=(cy1-(1-y));\n' + 'mrad=pow( myx*myx + myy*myy , .5);\n' + 'mang=asin( abs(myy)/(mrad) );\n' + 'ax=mang;\n' + 'ay=mang;\n' + 'mrot=.1*(1-mrad)*sin(q1*.01+q2*.1);\n' + 'dx= sign(myy)*sin(ax)*mrot;\n' + 'dy= sign(myx)*(cos(ay)*mrot);\n' + 'cx1=.5+cc*.3;\n' + 'cy1=.5+c*.25+ccc*.25;\n' + 'myx=(cx1-x);\n' + 'myy=(cy1-(1-y));\n' + 'mrad=pow( myx*myx + myy*myy , .5);\n' + 'mang=asin( abs(myy)/(mrad) );\n' + 'ax=mang;\n' + 'ay=mang;\n' + 'mrot=.1*(1-mrad)*sin(q3*.02+q1*.3);\n' + 'dx= dx - sign(myy)*sin(ax)*mrot;\n' + 'dy= dy - sign(myx)*(cos(ay)*mrot);'),
};

return pmap;
});